import { User } from "@prisma/client"
import { getUsersByParams } from "@/services/userService"
import SearchUser from "../componenets/searchUser"
import UsersView from "../componenets/usersView"

type Props = {
    params: {
        userSearchTerm: string
    }
}

export async function generateMetadata({ params: { userSearchTerm } }: Props) {
    const userData: Promise<any> = getUsersByParams(userSearchTerm)
    const data = await userData
    const displayTerm = userSearchTerm.replaceAll('%20', ' ')

    if (!data?.query?.pages) {
        return {
            title: `${displayTerm} Not Found`
        }
    }
    return {
        title: displayTerm,
        description: `Search results for ${displayTerm}`
    }
}

export default async function SearchResults({ params: { userSearchTerm } }: Props) {

    console.log('search params:', userSearchTerm)
    const {users}  = await getUsersByParams(userSearchTerm)
    if (!users) {
        return (
            <>
                <h2 className="mb-2">User not found!</h2>
                <h3>Search by other words</h3>
                <SearchUser />
            </>
        )
    }
    else  if (users.length ===0) {
        return (
            <>
                <h2 className="mb-2">User not found!</h2>
                <h5>Search by other name or other letter starting with!</h5>
                <SearchUser />
            </>
        )
    }
    else {
        return (
            <>
                <div className='d-flex justify-content-between'>
                    <h1>Users</h1>
                    <SearchUser />
                    <div>list view</div>
                </div>
                <UsersView value={users} />
            </>

        )
    }
}
