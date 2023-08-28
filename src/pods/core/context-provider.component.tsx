import React from "react";

interface SearchContextModel {
    organizationName: string;
    setOrganizationName: (value: string) => void;
}

export const SearchContext = React.createContext<SearchContextModel>({
    organizationName: "",
    setOrganizationName: (organizationName) => {}
})

export const SearchContextProvider = (props) => {
    const [organizationName, setOrganizationName] = React.useState("lemoncode");

    return (
        <SearchContext.Provider value={{organizationName, setOrganizationName}}>
            {props.children}
        </SearchContext.Provider>
    );
}
