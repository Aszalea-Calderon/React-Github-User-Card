import React from 'react'

function Followers(props){
const {followers}= props

  
    return(
     <>
    {followers.map((follower) =>{
      return  <div>
        <p>Name: {follower.login} </p>
        <img src={follower.avatar_url} alt={follower.login} />
        <br></br>
        <a href={follower.html_url} target="_blank"><button>{follower.login}'s Github</button></a>

        {/* <p>Following: {friend.}</p> */}
      </div>
    })}
    </>
    
   
    )
  
}

export default Followers
