import { getUsers } from '@/services/userService'
import SearchUser from './componenets/searchUser';
import UsersView from './componenets/usersView';

const Users = async () => {

  const { users } = await getUsers()
  if (!users) {
    return (<div>Loading...</div>)
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

export default Users


