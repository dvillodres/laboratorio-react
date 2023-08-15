import React from "react";
import {MemberEntity} from "./list.vm";
import {Item} from "./components/item.component";
import {Search} from "./components/search.component";
import css from "./list.styles.css";

interface Props {
    members: MemberEntity[];
    organizationName: string;
    onSearch: (organizationName: string) => void;
}

export const List : React.FC<Props> = props => {
    const {members, organizationName, onSearch} = props;
    const capitalizedOrganizationName = organizationName.charAt(0).toUpperCase() + organizationName.slice(1);
    return (
        <>
            <h2>{capitalizedOrganizationName} Organization Members</h2>
            <Search onSearch={onSearch} organizationName={organizationName}/>
            <div className={css.container}>
                <span className={css.header}>Avatar</span>
                <span className={css.header}>Id</span>
                <span className={css.header}>Name</span>
                {members.map((member) => (
                    <Item key={member.id} member={member} />
                ))}
            </div>
        </>
    )
}
