import React from 'react'
import ListItem from './List'

const UseList = () => {
   
    const List = [
        {name:'tabish',place:'korea'},
        {name:'rehan',place:'japan'}
    ]
   
    return(
       <> 
       <h3>Want to use list component 2nd time</h3>
       <ListItem 
       items={List}
       renderItem={(user)=>
        <div>
            <strong>{user.name}</strong>
            <p>{user.place}</p>
        </div>
       }
       />
       </>
    )
}

export default UseList