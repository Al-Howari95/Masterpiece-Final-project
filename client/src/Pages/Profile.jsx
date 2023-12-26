import React from "react";
import PP from "../Component/PP";
import { useEffect } from "react";
  


const Profile = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
   <PP/>
  

    </>
  );
};

export default Profile;