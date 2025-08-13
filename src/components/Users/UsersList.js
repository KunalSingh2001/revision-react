// Write your code here:
import React from 'react';
import "./UsersList.css";
import Card from "../UI/Card"
function UserList(props) {
  return (
        <Card className="users">
          <ul>
            {props.users.map((item) => {
              return(
                <li>${item.name} (${item.age} years old)</li>
              )
            })}  
          </ul>
        </Card>
    )
}
export default UserList;