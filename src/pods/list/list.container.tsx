import React from "react";
import {MemberEntity} from "./list.vm";
import {List} from "./list.component";
import {getMemberCollection} from "./list.repository";
import { SearchContext } from "../core";

export const ListContainer : React.FC = () => {
    const context = React.useContext(SearchContext)
    const [
        members,
        setMembers
    ] = React.useState<MemberEntity[]>([]);

    const getMembers = () => {
        if (context.organizationName.length > 0) {
            getMemberCollection(context.organizationName).then(
                (memberCollection: MemberEntity[]) => setMembers(memberCollection)
            )
        } else {
            setMembers([]);
        }
    };

    const setOrganizationName = (organizationName : string) => {
        context.setOrganizationName(organizationName)
    };

    React.useEffect(() => {
        getMembers()
    }, [context.organizationName]);

    return <List
        members={members}
        organizationName={context.organizationName}
        onSearch={setOrganizationName}
    />
}
