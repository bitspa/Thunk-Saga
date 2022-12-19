import React from 'react'

export const User = ({users}) => {
  return (
    <>
         <h1>User Comp</h1>
    {
    users.map(user=>(
      <div key={user.id}>
       <h2>{user.username}</h2>
       <p>{user.email}</p>
       
       </div>     
    ))
    }
    
     </>
    
  )
}