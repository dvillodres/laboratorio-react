import {MemberEntityApi} from "./list.api-model";

export const getMemberCollection = (organizationName : string) : Promise<MemberEntityApi[]> => {
    return fetch(`https://api.github.com/orgs/${organizationName}/members`)
        .then((response) => response.json());
}
