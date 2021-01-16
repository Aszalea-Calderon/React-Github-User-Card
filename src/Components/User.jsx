import React from 'react'

const User = (props) => {

const {user} = props

  return (
    <div>
      <img src={user.avatar_url} alt="human"/>
      <h1>{user.login}</h1>
      <p>Location: {user.location}</p>
      <p>Followers: {user.followers}</p>
      <p>Following:{user.following}</p>

    </div>
  )
}

export default User
