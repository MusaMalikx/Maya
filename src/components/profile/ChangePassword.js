import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux';
// import { selectUser } from '../../features/userSlice';
// import styles from "./profile.module.css"

function ChangePassword() {

  const [oldPass, setOldPassword] = useState("");
  const [newPass, setNewPassword] = useState("");
  const [conPass, setConPassword] = useState("");
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem('auth')))
  // const [user, setUser] = useState(null)
  

//   useEffect(() => {
//     const checkUser = async () => {
//         await axios.get('/user/check/authentication').then(function (res) {
//             console.log(res)
//             setUser(res.data.user)
//             // if (res.data.bool === true) {
//             //     navigate("/")
//             // }
//             // else {
//             //     navigate("/login")
//             // }
//         }).catch(function (err) {
//             console.log(err)
//         })
//     }

//     checkUser();
// }, [])

  // const user = useSelector(selectUser)
  // console.log(oldPass, newPass)
  // console.log(user.accessToken)
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (newPass === conPass) {

      await axios.put(`/user/changepassword/${auth.user._id}`, {
        oldpassword: oldPass,
        newpassword: newPass
      }, {
        headers: {
          token: 'Bearer ' + auth.token
        }
      }).then((res) => {
        console.log(res)
        setOldPassword("")
        setNewPassword("")
        setConPassword("")
        alert("Password Changed!")
      }).catch((err) => {
        console.log(err)
        alert("There is error while saving password try again later!")
      })

    }
    else {
      alert("The New Password and Retype New Password are mismatched!")
    }
  }

  return (
    <div className={`mx-5`}>
      <strong className={`bg-[#f8f9fa] w-full block  p-3 mt-4`}>Change your Password</strong>
      <form onSubmit={handleSubmit}>
        <div className={`row mt-4`}>
          <div className="col-12 col-md-6 mb-3">
            <label htmlFor="oldpassword" className="form-label">OLD PASSWORD</label>
            <input type="password" className="form-control" value={oldPass} id="pw1" onChange={(e) => setOldPassword(e.target.value)} />
          </div>
          <div className="col-6" />
          <div className="col-12 col-md-6 mb-3">
            <label htmlFor="newpassword" className="form-label" >NEW PASSWORD</label>
            <input type="password" className="form-control" id="pw2" value={newPass} onChange={(e) => setNewPassword(e.target.value)} />
          </div>
          <div className="col-12 col-md-6 mb-3">
            <label htmlFor="retypenewpassword" className="form-label">RETYPE NEW PASSWORD</label>
            <input type="password" className="form-control" id="pw3" value={conPass} onChange={(e) => setConPassword(e.target.value)} />
          </div>
        </div>
        <div className="d-flex justify-content-center mt-4 mb-5">
          <button type='submit' className="btn btn-sm px-4 py-2 my-2 rounded-none btn-outline-dark flex items-center space-x-2 tracking-widest mx-auto">
            Change Password
          </button>
        </div>
      </form>
    </div>
  )
}

export default ChangePassword