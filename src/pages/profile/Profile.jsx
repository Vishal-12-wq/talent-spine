import React from "react";
import ProfileHeader from "../../components/profileheader/ProfileHeader";
import UserProfile from "../../components/userprofile/UserProfile";
import UserForm from "../../components/userprofile/UserForm";
import Card from "../../components/userprofile/Card";
import Review from "../../components/userprofile/Review";
import Portfolio from "../../components/userprofile/Portfolio";

const Profile = () => {
  return (
    <div className=" max-w-[1700px] mx-auto ">
        <ProfileHeader/>
        <UserProfile/>
        <UserForm/>
        <Card/>
        <Review/>
        <Portfolio/>
      
      
    </div>
  );
};

export default Profile;
