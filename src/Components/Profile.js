import React from 'react';
import {RiArrowRightCircleLine} from "react-icons/ri";


function Profile() {
  return (
   <>
        <div className='profile-container'>
            <div className='profile'> 
            <img id='profile_img' className='profile-pic' src='images/andrew.jpg' alt='Profile'/>
            <p id='twitter' className='twitter-name'>@jamesodiwuor2</p>
            <p id='slack' className='slack-name'>pengoJames</p>
            </div>

            <div className='react-icon'>
              <RiArrowRightCircleLine/>
            </div>
        </div>
   </>
  )
}

export default Profile;
