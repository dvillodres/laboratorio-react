import React from "react";
import {useParams} from "react-router-dom";
import {Detail} from "./detail.component";
import {UserEntity} from "./detail.vm";
import {getUser} from "./detail.repository";

export const DetailContainer: React.FC = () => {
    const {id} = useParams();
    const [
        user,
        setUser
    ] = React.useState<UserEntity>();

    getUser(id).then((userFromAPI) => setUser(userFromAPI));

    if (!user) {
        return (<p>Loading...</p>)
    }

    return (
        <Detail user={user} />
    );
};
