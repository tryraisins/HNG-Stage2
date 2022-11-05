import React from "react";
import profileimg from "../../assets/profile__img.png";
import camera from "../../assets/camera.png";
const ProfilePicture = () => {
  return (
    <div>
      <div className="position-relative">
        <img src={profileimg} alt="profile" id="profile__img" className="" />

        <div className="position-absolute bottom-0 start-50 translate-middle-x camera">
          <img src={camera} alt="camera-icon" />
        </div>
      </div>
    </div>
  );
};

export default ProfilePicture;
