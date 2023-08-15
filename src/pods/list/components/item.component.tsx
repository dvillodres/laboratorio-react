import React from "react";
import {Link} from "react-router-dom";
import {MemberEntity} from "../list.vm";
import {routes} from "@/core";
import css from "./item.styles.css";

interface Props {
    member: MemberEntity
}

export const Item : React.FC<Props> = props => {
    const {member} = props;

    return (
        <>
            <img className={css.avatar} src={member.avatar_url}  alt={member.login + ' avatar'}/>
            <span>{member.id}</span>
            <Link to={routes.details(member.login)}>{member.login}</Link>
        </>
    )
}
