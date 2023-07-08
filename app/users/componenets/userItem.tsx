'use client'
import { User } from '@prisma/client'
import React from 'react'
import { useTransition } from 'react'
import Image from 'next/image'

type UserItemProps = {
  user: User
}

const UserItem = ({user}:UserItemProps) => {

  const [isPending, startTransition] = useTransition()
  const separator = ', ';
  return (
     <div className="col" key={user.id}>
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>

                    {user.image ? (
                      <Image id="userpicture"
                        unoptimized
                        src={user.image}
                        alt=''
                        width="130"
                        height="130"
                      />
                    ) :
                      (<div>No Image</div>)
                    }

                    <h6>{user.id}</h6>
                    <div>{user.email}</div>
                    <div>{user.provider}</div>
                    <div>{
                      user.roles.join(separator)
                    }</div>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </div>
                </div>

              </div>
  )
}

export default UserItem