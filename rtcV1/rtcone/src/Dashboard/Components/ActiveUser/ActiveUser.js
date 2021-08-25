import React from 'react';
import "./ActiveUser.css"
import ActiveUserList from "./ActiveUserList"

const activeList = [
    {
        socketId: 123,
        username: "Vicky"
    },
    {
        socketId: 124,
        username: "San"
    },
    {
        socketId: 125,
        username: "Shibi"
    },
    {
        socketId: 126,
        username: "Rose"
    },
]


const ActiveUser = () => {
    return(
        <div 
        className="active_user_list_container"
        >
            {activeList.map((a_user) => <ActiveUserList  key={a_user.socketId} activeUser={a_user}/>)

            }
        </div>
    )
}

export default ActiveUser;