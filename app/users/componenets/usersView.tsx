import { User } from '@prisma/client'
import React from 'react'
import UserItem from './userItem'

type UsersProps = {
  value: User[]
}

const UsersView = (props: UsersProps) => {
  return (
    <div className="row row-cols-1 row-cols-md-4 g-2">
      {props.value.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  )
}

export default UsersView