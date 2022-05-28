import React, { useEffect, useState } from "react";
// import Image from "next/image";
import img from "../../assets/user/user.jpeg";
import { BsDownload, BsLock } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { RiRoadMapLine } from "react-icons/ri";
import { IoLogOutOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import axios from "axios";
// import { useSelector } from "react-redux";
// import { selectUser } from "../../features/userSlice";
// import { useRouter } from "next/router";

const UserProfile = (props) => {
  // const router = useRouter();
  const [filo, setFilo] = useState(null)
  // const user = useSelector(selectUser)
  const [dat, setDat] = useState();
  const [user, setUser] = useState(null)

  useEffect(() => {
    // const picture = async () => {
    //   const res = await axios.get(`user/profile/image${user._id}`)
    //   const imageBlob = await res.blob()
    //   const imageObjectURL = URL.createObjectURL(imageBlob);
    //   setDat(imageObjectURL)
    // }
    const checkUser = async () => {
      await axios.get('/user/check/authentication').then(function (res) {
        console.log(res)
        setUser(res.data.user)
        // if (res.data.bool === true) {
        //     navigate("/")
        // }
        // else {
        //     navigate("/login")
        // }
      }).catch(function (err) {
        console.log(err)
      })
    }
    checkUser();
    // picture();
  }, [])

  const handleFiloSubmit = async (e) => {
    e.preventDefault();

    const d = new FormData();
    d.append('avatar', filo)

    await axios.post(`/user/update/profile/image/${user._id}`, d)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err.message)
      })

  }

  return (
    <div className="flex pt-10 lg:pt-0">
      <div className="card bg-[#f8f9fa] mt-7 lg:w-[350px] flex-grow">
        <div className="flex justify-center items-center p-10">
          <img
            src={
              dat ? dat : img
            }
            height={150}
            width={150}
            className="rounded-full"
            alt="userimage"
          />
        </div>
        <div className="mb-10">
          <div className="card-title  text-center h5">{user && user.name}</div>
          <div className="card-subtitle mb-2 text-muted  text-center">
            {user && (user.street + ' ' + user.state + ' ' + user.country)}
          </div>
        </div>
        <div className="flex items-center flex-col">
          <label htmlFor="avatar" className="text-sm tracking-widest btn">Update Profile Pic</label>
          <input id="avatar" className="form-control p-2 rounded-none" name="avatar" onChange={(e) => setFilo(e.target.files[0])}
            accept="image/png, image/jpeg" type="file" />
          <button className="btn btn-sm px-4 py-2 my-2 rounded-none btn-outline-dark flex items-center space-x-2 tracking-widest" onClick={handleFiloSubmit}>Submit</button>
        </div>
        {/* className="card-img-top rounded-circle" */}
        <div className="card-body p-10">
          <ul className="list-group list-group-flush">
            <li
              className={` hover:bg-white bg-[#f8f9fa] list-group-item hover:underline hover:underline-offset-1 flex items-center cursor-pointer `}
            >
              <Link to={`/orders`} className="flex-grow">
                <div className="flex justify-content-between">
                  <div>
                    <BsLock style={{ display: "inline" }} className="pr-1 text-xl" />
                    <span>Orders</span>
                  </div>
                  <div>
                    <span className="badge bg-dark">5</span>
                  </div>
                </div>


              </Link>
            </li>
            <li
              className={` hover:bg-white bg-[#f8f9fa] list-group-item hover:underline hover:underline-offset-1 flex items-center cursor-pointer `}
            >
              <Link to={'/profile'} className="flex-grow">
                <CgProfile
                  style={{ display: "inline" }}
                  className="pr-1 text-xl"
                />
                Profile
              </Link>
            </li>
            {/* <li
              className={` hover:bg-white bg-[#f8f9fa] list-group-item hover:underline hover:underline-offset-1 flex items-center cursor-pointer `}
            >
              <RiRoadMapLine
                style={{ display: "inline" }}
                className="pr-1 text-xl"
              />
              Addresses
            </li> */}
            <li
              className={` hover:bg-white bg-[#f8f9fa] list-group-item hover:underline hover:underline-offset-1 flex items-center cursor-pointer `}
            >
              <IoLogOutOutline
                style={{ display: "inline" }}
                className="pr-1 text-xl"
              />
              Log Out
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
