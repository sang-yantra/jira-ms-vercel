import * as memberRepo from "../../infrastructure/repos/memberRepo.js"


class MemberServices {
    async getMemberById(Id) {
        await memberRepo.getMemberById(Id)
    }
}

export default MemberServices