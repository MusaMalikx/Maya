import React, { useEffect, useState } from "react";
// import styles from "./profile.module.css";
import Layout from "../../components/layout/Article";
import ChangePassword from "../../components/profile/ChangePassword";
import PersonalDetails from "../../components/profile/PersonalDetails";
import UserProfile from "../../components/profile/UserProfile";
import { Link } from "react-router-dom"
import axios from "axios";

const Profile = () => {

  // const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem('auth')))

  // const user = useSelector(selectUser)
  // console.log(user)

  // useEffect(() => {

  //   const checkUser = async () => {
  //     await axios.get('/user/check/authentication').then(async (res) => {
  //       console.log(res)
  //       setUser(res.data.user)
  //     }).catch(function (err) {
  //       console.log(err)
  //     })
  //   }
  //   checkUser();

  // }, [])

  return (
    <Layout title="Profile">
      <div className='container-xxl text-sm py-20'>
        {
          auth && auth.user.isAdmin && (
            <div className="flex border-2 border-dashed">
              <div className="mx-auto">
                <Link to={'/admin'}>
                  <button className="btn btn-sm px-4 py-2 my-2 rounded-none btn-dark flex items-center space-x-2 tracking-widest mx-auto">
                    Admin Panel
                  </button>
                </Link>
              </div>
            </div>
          )
        }
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
