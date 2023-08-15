import {mapUserFromApiToVm} from "./detail.mapper"
import { getUser as getUserAPI } from "./detail.api"
import {UserEntity} from "./detail.vm";
import {UserEntityApi} from "./detail.api-model";

export const getUser = (login : string) : Promise <UserEntity> => {
    return new Promise <UserEntity>((resolve) => {
        getUserAPI(login).then((result : UserEntityApi) => {
            resolve(mapUserFromApiToVm(result));
        })
    })
}
