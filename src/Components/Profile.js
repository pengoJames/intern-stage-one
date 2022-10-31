import React from 'react'

function Profile() {
  return (
   <>
        <div className='profile-container'>
            <div className='profile'> 
            <img id='profile_img' className='profile-pic' src='images/andrew.jpg' alt=''/>
            <p id='twitter' className='twitter-name'>James Odiwuor</p>
            <p id='slack' className='slack-name'>pengoJames</p>
            </div>
        </div>
   </>
  )
}

export default Profile;
