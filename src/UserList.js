import React, { useState } from 'react'
import axios from 'axios'


export default function UserList() {

    const [Users, setUsers] = useState(null)
    
        axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
      setUsers(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
    
    return (
        <div>
           <ul>{Users&& true ? Users.map(user => <li>{user.name}</li>) : <div></div> }</ul>
        </div>
    )
}



