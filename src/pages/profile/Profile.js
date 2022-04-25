import React from "react";
// import styles from "./profile.module.css";
import Layout from "../../components/layout/Article";
import ChangePassword from "../../components/profile/ChangePassword";
import PersonalDetails from "../../components/profile/PersonalDetails";
import UserProfile from "../../components/profile/UserProfile";

const Profile = () => {
  return (
    <Layout title="Profile">
      <div className='container text-sm py-20'>
        <div className='text-center pb-20'>
          <h1 className="uppercase tracking-[0.8rem] py-10 text-center text-4xl lg:text-6xl whitespace-nowrap">Your Profile</h1>
          {/* <div className={`${styles.heroheading} h1`}>Your Profile</div> */}
          <div className="text-sm text-center text-muted">
            {" "}
            Maecenas sollicitudin. In rutrum. In convallis. Nunc tincidunt ante
            vitae massa. Cras pede libero, dapibus nec, retium sit amet, tempor
            quis. Fusce dui leo, imperdiet in.
          </div>
        </div>

        <div className='flex flex-col lg:flex-row justify-center'>
          <div >
            <ChangePassword />
            <PersonalDetails />
          </div>
          <div >
            <UserProfile
              name={"Julie Lescaut"}
              address={"Ostrava, Czech Republic"}
            />
          </div>
        </div>

      </div>
    </Layout>
  );
}

export default Profile;
