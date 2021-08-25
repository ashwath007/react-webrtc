import React from 'react';
import "./Dashboard.css"

const Dash = () => {
    return(
        <div className="dashboard_container background_main_color">   
            <div className="dashboard_left_section">
                <div className="dashboard_content_container">
                    content
                </div>
                <div className="dashboard_rooms_container bg_main">
                    rooms
                </div>
            </div>
            <div className="dashboard_right_section bg_sec">
             
                <div className="dashboard_active_users_list">
                user
                </div>
                <div className="dashboard_logo_container">
                logo
            </div>
            </div>
           
        </div>
    )
}

export default Dash;