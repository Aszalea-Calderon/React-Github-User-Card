import React from 'react'

function Friend(props){
const {user}= props

  
    return(
     <>
    {props.user.map(() =>{
      return  <div>
        <img src={user.avatar_url} alt="human"/>
        {/* <p>Following: {friend.}</p> */}
      </div>
    })}
    </>
    
   
    )
  
}

export default Friend
