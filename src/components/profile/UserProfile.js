import React from "react";
// import Image from "next/image";
import img from "../../assets/user/user.jpeg";
import { BsLock } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { RiRoadMapLine } from "react-icons/ri";
import { IoLogOutOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
// import { useRouter } from "next/router";

function UserProfile(props) {
  // const router = useRouter();

  return (
    <div className="flex justify-center pt-10 lg:pt-0">
      <div className="card bg-[#f8f9fa] w-[300px] mt-7">
        <div className="flex justify-center items-center p-10">
          <img
            src={img}
            height={150}
            width={150}
            className="rounded-full"
            alt="userimage"
          />
        </div>
        <div className="p-2 bg-blue-500 text-white justify-center items-center btn btn-primary">
          <p>Change Picture</p>
        </div>
        {/* className="card-img-top rounded-circle" */}
        <div className="card-body p-10">
          <div className="card-title  text-center h5">{props.name}</div>
          <div className="card-subtitle mb-2 text-muted  text-center">
            {props.address}
          </div>
          <ul className="list-group list-group-flush">
            <li>
              <Link to={`/orders/${props.name}`}
                className={` hover:bg-[#f8f9fa] bg-white list-group-item hover:underline hover:underline-offset-1 flex items-center cursor-pointer `}
              >
                <BsLock style={{ display: "inline" }} className="pr-1 text-xl" />
                <span>Orders</span>
              </Link>
            </li>
            <li
              className={` hover:bg-[#f8f9fa] bg-white list-group-item hover:underline hover:underline-offset-1 flex items-center cursor-pointer `}
            >
              <CgProfile
                style={{ display: "inline" }}
                className="pr-1 text-xl"
              />
              Profile
            </li>
            <li
              className={` hover:bg-[#f8f9fa] bg-white list-group-item hover:underline hover:underline-offset-1 flex items-center cursor-pointer `}
            >
              <RiRoadMapLine
                style={{ display: "inline" }}
                className="pr-1 text-xl"
              />
              Addresses
            </li>
            <li
              className={` hover:bg-[#f8f9fa] bg-white list-group-item hover:underline hover:underline-offset-1 flex items-center cursor-pointer `}
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
