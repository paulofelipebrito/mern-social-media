import React from 'react'
import PostSide from '../../components/PostSide'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import RightSide from '../../components/RightSide'
import './Profile.css'
const Profile = () => {
  return (
    <div className="Profile">
        <ProfileLeft/>

        <div className="Profile-center">
            <ProfileCard location= "profilePage"/>
            <PostSide/>
        </div>

        <RightSide/>
    </div>
  )
}

export default Profile