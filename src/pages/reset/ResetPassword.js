import React, {useState } from 'react'
// import styles from "./profile.module.css"
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const ResetPassword = () => {
    const [newp,setNewp] =useState("")
    const [newp2,setNewp2] =useState("")
    const navigate = useNavigate()
    const { id } = useParams()
    const  HandleSubmit = async (e) => {
       e.preventDefault()
        console.log(newp , id);


        if (newp === newp2) {

            await axios.post(`http://localhost:8080/user/reset/password/${id}`, {
              newpassword: newp
            }).then((res) => {
              console.log(res)
              setNewp("")
              setNewp2("")
              alert("Password Changed!")
              navigate('/login')
            }).catch((err) => {
              console.log(err)
              alert("There is error while reseting password try again later!")
            })
      
          }
          else {
            alert("The New Password and Retype New Password are mismatched!")
        }
    }
    return (
        <div className={`mx-5`}>
            <strong className={`bg-[#f8f9fa] w-full block  p-3 mt-4`}>Reset your Password</strong>
            <form onSubmit={HandleSubmit}>
                <div className={`row mt-4`}>
                    <div className="col-12 col-md-6 mb-3">
                        <label htmlFor="oldpassword" className="form-label">New Password</label>
                        <input type="password" className="form-control" id="pw1" value={newp}  onChange={(e) => setNewp(e.target.value)}/>
                    </div>
                    <div className="col-12 col-md-6 mb-3">
                        <label htmlFor="newpassword" className="form-label">Re-enter New Password</label>
                        <input type="password" className="form-control" id="pw2" value={newp2}  onChange={(e) => setNewp2(e.target.value)}/>
                    </div>

                </div>
                <div className="d-flex justify-content-center mt-4 mb-5">
                    <button type="submit" className="btn btn-sm px-4 py-2 my-2 rounded-none btn-outline-dark flex items-center space-x-2 tracking-widest mx-auto">
                        Reset Password
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ResetPassword;