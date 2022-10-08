import { stringify } from "uuid";
import * as memberRepo from "../../infrastructure/repos/memberRepo.js"


class MemberServices {
    async getMemberById(Id) {
      
        const member=await memberRepo.getMemberById(Id)
        member.Id=stringify(member.Id);
        return member;
    }
}

export default MemberServices