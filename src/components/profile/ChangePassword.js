import React from 'react'
// import styles from "./profile.module.css"

function ChangePassword() {
  return (
    <div className={`mx-5`}>
      <strong className={`bg-[#f8f9fa] w-full block  p-3 mt-4`}>Change your Password</strong>
      <form >
        <div className={`row mt-4`}>
          <div className="col-12 col-md-6 mb-3">
            <label htmlFor="oldpassword" className="form-label">OLD PASSWORD</label>
            <input type="password" className="form-control" id="pw1" />
          </div>
          <div className="col-6"></div>
          <div className="col-12 col-md-6 mb-3">
            <label htmlFor="newpassword" className="form-label">NEW PASSWORD</label>
            <input type="password" className="form-control" id="pw2" />
          </div>
          <div className="col-12 col-md-6 mb-3">
            <label htmlFor="retypenewpassword" className="form-label">RETYPE NEW PASSWORD</label>
            <input type="password" className="form-control" id="pw3" />
          </div>
        </div>
        <div className="d-flex justify-content-center mt-4 mb-5">
          <button className="btn btn-dark rounded-none p-2">CHANGE PASSWORD</button>
        </div>
      </form>
    </div>
  )
}

export default ChangePassword