import React from 'react'

const User = (props) => {

const {user} = props

  return (
    <div>
      <img src={user.avatar_url} alt="human"/>
      <h1>{user.name}</h1>
      <p>{user.login}</p>
      <p>Location: {user.location}</p>
      <p>Followers: {user.followers}</p>
      <p>Following: {user.following}</p>
      <p>Bio: {user.bio ? user.bio : `Sorry, no bio today!` }</p>
    </div>
  )
}

export default User
