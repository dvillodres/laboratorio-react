import React from "react";
import {MemberEntity} from "./list.vm";
import {List} from "./list.component";
import {getMemberCollection} from "./list.repository";
import {useLocalStorage} from "../core";

export const ListContainer : React.FC = () => {
    const [
        members,
        setMembers
    ] = React.useState<MemberEntity[]>([]);


    const [
        organizationName,
        setLocalStorageOrganizationName
    ] = useLocalStorage('q', 'lemoncode')

    const getMembers = (organizationName : string) => {
        if (organizationName.length > 0) {
            getMemberCollection(organizationName).then(
                (memberCollection: MemberEntity[]) => setMembers(memberCollection)
            )
        } else {
            setMembers([]);
        }
    };

    const setOrganizationName = (organizationName : string) => {
        setLocalStorageOrganizationName('q', organizationName)
    };

    React.useEffect(() => {
        getMembers(organizationName)
    }, [organizationName]);

    return <List
        members={members}
        organizationName={organizationName}
        onSearch={setOrganizationName}
    />
}
