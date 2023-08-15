import {UserEntityApi} from "./detail.api-model";

export const getUser = (login : string) : Promise<UserEntityApi> => {
    return fetch(`https://api.github.com/users/${login}`)
        .then((response) => response.json());
}
