import { mapMemberCollectionFromApiToVm } from "./list.mapper"
import { getMemberCollection as getMemberCollectionAPI } from "./list.api"
import {MemberEntity} from "./list.vm";
import {MemberEntityApi} from "./list.api-model";

export const getMemberCollection = (organizationName : string) : Promise <MemberEntity[]> => {
    return new Promise <MemberEntity[]>((resolve) => {
        getMemberCollectionAPI(organizationName).then((result : MemberEntityApi[]) => {
            resolve(mapMemberCollectionFromApiToVm(result));
        })
    })
}
