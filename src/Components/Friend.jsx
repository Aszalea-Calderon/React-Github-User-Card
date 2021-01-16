import React from 'react'

function Friend(props){


  
    return(
     <>
    {props.followers.map((friend) =>{
      return  <div>
        <img src={friend} alt="human"/>
        {/* <p>Following: {friend.}</p> */}
      </div>
    })}
    </>
    
   
    )
  
}

export default Friend
