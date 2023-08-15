import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {switchRoutes} from "@/core/router/routes";
import {DetailPage, ListPage} from "@/scenes";

export const RouterComponent : React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path={switchRoutes.list} element={<ListPage />} />
                <Route path={switchRoutes.details} element={<DetailPage />} />
            </Routes>
        </Router>
    );
}
