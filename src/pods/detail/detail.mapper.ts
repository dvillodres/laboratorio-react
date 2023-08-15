import * as vm from "./detail.vm";
import * as api from "./detail.api-model";

export const mapUserFromApiToVm = (member : api.UserEntityApi) : vm.UserEntity => ({
    id : member.id.toString(),
    login : member.login,
    avatar_url : member.avatar_url
})
