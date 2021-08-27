import React from 'react';
import "./ActiveUser.css"
import ActiveUserList from "./ActiveUserList"
import {connect} from 'react-redux';
// const activeList = [
//     {
//         socketId: 123,
//         username: "Vicky"
//     },
//     {
//         socketId: 124,
//         username: "San"
//     },
//     {
//         socketId: 125,
//         username: "Shibi"
//     },
//     {
//         socketId: 126,
//         username: "Rose"
//     },
// ]


const ActiveUser = ({activeUsers}) => {
    return(
        <div className='active_user_list_container'>
        {activeUsers.map((activeUser) =>
          <ActiveUserList
            key={activeUser.socketId}
            activeUser={activeUser}
          />)}
      </div>
    )
}
const mapStateToProps = ({ dashboard }) => ({
    ...dashboard
  });
  
  
 export default connect(mapStateToProps)(ActiveUser);

