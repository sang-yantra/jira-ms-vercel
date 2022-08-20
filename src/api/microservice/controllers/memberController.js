/**
 * members complete list api
 * members team spcific member 
 * member for a member id
 * create member
 * update member 
 * update team of a member 
 * 
 */


import { PrismaClient } from "@prisma/client";
import _ from "lodash";
import MemberServices from "../../application/services/membersService.js";
import { catchErrors } from "../../domain/errors/asyncCatch.js";


const prisma = new PrismaClient();
const PBI_ID = 'f57da697-1bfa-11ed-a3b2-b622babdeb3e';
const ASSIGNED_TO = 'a2a64c91-1bf8-11ed-a3b2-b622babdeb3e'

export const getMemberById = catchErrors(async (req, res) => {
    const memberid = 'a2a64c91-1bf8-11ed-a3b2-b622babdeb3e'
    await new MemberServices().getMemberById(memberid)
})