import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { selectUser } from "../../features/userSlice";
// import styles from "./profile.module.css";

function PersonalDetails() {

  const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [company, setCompany] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [telephone, setTelephone] = useState("");
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem('auth')))

  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(name, email, street, company, state, country, telephone)

    await axios.put(`/user/savechanges/${auth.user._id}`, {
      name: name,
      street: street,
      company: company,
      state: state,
      country: country,
      telephone: telephone
    }, {
      headers: {
        token: 'Bearer ' + auth.token
      }
    })
      .then((res) => {
        console.log(res)
        alert("The Changes are Saved!")
      })
      .catch((err) => {
        console.log(err)
        alert("Error while Saving the Changes!")
      })

  }

  return (
    <div className="mx-5">
      <strong className={`bg-[#f8f9fa] w-full block p-3 mt-4`}>
        PersonalDetails{" "}
      </strong>
      <form onSubmit={handleSubmit}>
        <div className='row mt-4'>
          <div className='col-12 col-md-6 mb-3'>
            <label htmlFor='oldpassword' className='form-label'>
              NAME
            </label>
            <input type='text' className='form-control' id='pw1' value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          {/* <div className='col-12 col-md-6 mb-3'>
            <label htmlFor='oldpassword' className='form-label'>
              LAST NAME
            </label>
            <input type='text' className='form-control' id='pw1' />
          </div> */}
          {/* <div className='col-12 col-md-6 mb-3'>
              <label htmlFor='oldpassword' className='form-label'>
                COMPANY
                </label>
                <input type='text' className='form-control' id='pw2' />
              </div> */}
          {/* <div className='col-12 col-md-6 mb-3'>
            <label htmlFor='text' className='form-label'>
              EMAIL
            </label>
            <input type='email' className='form-control' id='pw9' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div> */}
          <div className='col-12 col-md-6 mb-3'>
            <label htmlFor='oldpassword' className='form-label'>
              STREET
            </label>
            <input type='text' className='form-control' id='pw3' value={street} onChange={(e) => setStreet(e.target.value)} />
          </div>
          <div className='col-12 col-md-6 col-lg-3 mb-3'>
            <label htmlFor='oldpassword' className='form-label'>
              COMPANY
            </label>
            <input type='text' className='form-control' id='pw4' value={company} onChange={(e) => setCompany(e.target.value)} />
          </div>
          {/* <div className='col-12 col-md-6 col-lg-3 mb-3'>
            <label htmlFor='oldpassword' className='form-label'>
              ZIP
            </label>
            <input type='text' className='form-control' id='pw5' />
          </div> */}
          <div className='col-12 col-md-6 col-lg-3 mb-3'>
            <label htmlFor='oldpassword' className='form-label'>
              STATE
            </label>
            <input type='text' className='form-control' id='pw6' value={state} onChange={(e) => setState(e.target.value)} />
          </div>
          <div className='col-12 col-md-6 col-lg-3 mb-3'>
            <label htmlFor='oldpassword' className='form-label'>
              COUNTRY
            </label>
            <input type='text' className='form-control' id='pw7' value={country} onChange={(e) => setCountry(e.target.value)} />
          </div>
          <div className='col-12 col-md-6 mb-3'>
            <label htmlFor='oldpassword' className='form-label'>
              TELEPHONE
            </label>
            <input type='text' className='form-control' id='pw8' value={telephone} onChange={(e) => setTelephone(e.target.value)} />
          </div>
        </div>
        <div className='d-flex justify-content-center mt-4 mb-5'>
          <button type="submit" className="btn btn-sm px-4 py-2 my-2 rounded-none btn-outline-dark flex items-center space-x-2 tracking-widest mx-auto">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default PersonalDetails;
