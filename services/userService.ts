import prisma from '@/lib/prisma'
import { PrismaClient, PrismaPromise, User } from '@prisma/client'

export async function getUsers() {
    try {
        const users = await prisma.user.findMany()
        return { users }
    } catch (error) {
        return ({ error })
    }
}


export async function getUsersByParams(params: string | undefined)  {
    try {

        if (params) {
            console.log('params: ' , params)
            const result:PrismaPromise<User[]> = prisma.user.findMany({
                where: {
                    name: {
                        startsWith: params,
                        mode: 'insensitive'
                    }
                }
            })
            const users = await result
            return { users }
        }
        else {
            return getUsers()
        }

    } catch (error) {
        return ({ error })
    }
}
