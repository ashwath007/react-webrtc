import React from 'react';
import userAv from './src/userAvatar.png'

const handleListItemPressed = () => {
    
}

const ActiveUserList = (props) => {
    const {activeUser} = props;

    return(
        <div 
        className="active_user_list_item" 
        onClick={ handleListItemPressed}
        >
                <div className="active_user_list_image_container">
                        <img src={userAv} className="active_user_list_image"/>
                </div>
                <span className="active_user_list_text">
                        {activeUser.username}
                </span>
        </div>
    )
}

export default ActiveUserList;