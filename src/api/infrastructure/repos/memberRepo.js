import context from "../context/jiraContext.js"
import { v4 as uuidv4, stringify, parse } from "uuid";
import { uuidStringToBuffer } from "../../../utils/index.js"


const memberId = uuidStringToBuffer(uuidv4())
const teamId = '157d2711-1af6-11ed-a3b2-b622babdeb3e';
const exisitingMemberId = '11bee6d8-f489-4316-8da0-fae8344b2366'
const memberId_Anup = 'a2a64c91-1bf8-11ed-a3b2-b622babdeb3e'

/**
 * function to get member by Id
 * @param {} Id 
 * @returns Member
 */
export async function getMemberByIdTemp(Id) {


    const x = "";
    /// create new association with already existing team and member

    // const tasksPbiJoin = await context.$queryRaw`
    // SELECT * FROM TaskInfo 
    // JOIN PbiInfo on TaskInfo.Pbi_Id = PbiInfo.Id
    // `

    // const association = await context.members.update({
    //     where: {
    //         Id: uuidStringToBuffer(memberId_Anup)
    //     },
    //     data: {
    //         Teams: {
    //             create: [{
    //                 Team: {
    //                     connect: {
    //                         Id: uuidStringToBuffer(teamId)
    //                     }
    //                 }
    //             }]
    //         }
    //     }
    // })

    const memberById= await context.members.findFirstOrThrow({
        where: {
            Id: uuidStringToBuffer(Id)
        }
        
    })

    return memberById;
    /// Example of creating new member, new association with already existing team
    // const onlyMembers = await context.members.create({
    //     data: {
    //         Id: memberId,
    //         Name: "MS Dhoni",
    //         Email: "dhoni@gmail.com",
    //         Role: 'Admin',
    //         Teams: {
    //             create: [{
    //                 Team: {
    //                     connect: {
    //                         Id: uuidStringToBuffer(teamId)
    //                     }
    //                 }
    //             }]
    //         }
    //     }
    // })

    /// creating new member, new association, and new team
    const memberWithTeam = await context.members.create({
        data: {
            Id: uuidStringToBuffer(uuidv4()),
            Name: "Anup Mahato test",
            Email: "anup.mahato@gmail.com",
            Role: 'Admin',
            Teams: {
                create: [{
                    Team: {
                        create: {
                            Id: uuidStringToBuffer(uuidv4()),
                            Name: "Admin",
                            Description: "Team to handle admin activity"
                        }
                    }
                }
                ]
            }

        }
    })

    return memberWithTeam;
}

export async function getAllTeamsOfMember(Id) {
    const members = await context.members.findFirst({
        where: {
            Id: uuidStringToBuffer(Id)
        },
    })

    return members
}

export async function getMemberById(Id) {
    return await context.members.findFirstOrThrow({
        where: {
            Id: uuidStringToBuffer(Id)
        }
    })
}
