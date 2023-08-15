import { generatePath } from "react-router-dom"

interface SwitchRoutes {
    list: string;
    details: string;
}

export const switchRoutes : SwitchRoutes = {
    list: "/",
    details: "/detail/:id"
}

interface Routes extends Omit<SwitchRoutes, "details"> {
    details: (id: string) => string;
}

export const routes : Routes = {
    ... switchRoutes,
    details: id => generatePath(switchRoutes.details, { id })
}
