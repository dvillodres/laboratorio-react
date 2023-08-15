import React from "react";
import { Link } from "react-router-dom";
import {routes} from "@/core";
import {UserEntity} from "./detail.vm";
import css from "./detail.styles.css"

interface Props {
    user: UserEntity;
}

export const Detail: React.FC<Props> = props => {
    const {user} = props;
    return (
        <div className={css.container}>
            <div className={css.card}>
                <h2>User Detail page</h2>
                <img className={css.avatar} src={user.avatar_url} alt={user.login + ' avatar'}/>
                <h3>User Login: {user.login}</h3>
                <h3>User Id: {user.id}</h3>
                <Link to={routes.list}>Back to list page</Link>
            </div>
        </div>
    );
};
