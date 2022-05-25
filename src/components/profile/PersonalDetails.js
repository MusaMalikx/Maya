import React from "react";
// import styles from "./profile.module.css";

function PersonalDetails() {
  return (
    <div className="mx-5">
      <strong className={`bg-[#f8f9fa] w-full block p-3 mt-4`}>
        PersonalDetails{" "}
      </strong>
      <form>
        <div className='row mt-4'>
          <div className='col-12 col-md-6 mb-3'>
            <label htmlFor='oldpassword' className='form-label'>
              FIRST NAME
            </label>
            <input type='text' className='form-control' id='pw1' />
          </div>
          <div className='col-12 col-md-6 mb-3'>
            <label htmlFor='oldpassword' className='form-label'>
              LAST NAME
            </label>
            <input type='text' className='form-control' id='pw1' />
          </div>
          <div className='col-12 col-md-6 mb-3'>
            <label htmlFor='oldpassword' className='form-label'>
              COMPANY
            </label>
            <input type='text' className='form-control' id='pw1' />
          </div>
          <div className='col-12 col-md-6 mb-3'>
            <label htmlFor='oldpassword' className='form-label'>
              STREET
            </label>
            <input type='text' className='form-control' id='pw1' />
          </div>
          <div className='col-12 col-md-6 col-lg-3 mb-3'>
            <label htmlFor='oldpassword' className='form-label'>
              COMPANY
            </label>
            <input type='text' className='form-control' id='pw1' />
          </div>
          <div className='col-12 col-md-6 col-lg-3 mb-3'>
            <label htmlFor='oldpassword' className='form-label'>
              ZIP
            </label>
            <input type='text' className='form-control' id='pw1' />
          </div>
          <div className='col-12 col-md-6 col-lg-3 mb-3'>
            <label htmlFor='oldpassword' className='form-label'>
              STATE
            </label>
            <input type='text' className='form-control' id='pw1' />
          </div>
          <div className='col-12 col-md-6 col-lg-3 mb-3'>
            <label htmlFor='oldpassword' className='form-label'>
              COUNTARY
            </label>
            <input type='text' className='form-control' id='pw1' />
          </div>
          <div className='col-12 col-md-6 mb-3'>
            <label htmlFor='oldpassword' className='form-label'>
              TELEPHONE
            </label>
            <input type='text' className='form-control' id='pw1' />
          </div>
          <div className='col-12 col-md-6 mb-3'>
            <label htmlFor='text' className='form-label'>
              EMAIL
            </label>
            <input type='email' className='form-control' id='pw1' />
          </div>
        </div>
        <div className='d-flex justify-content-center mt-4 mb-5'>
        <button className="btn btn-sm px-4 py-2 my-2 rounded-none btn-outline-dark flex items-center space-x-2 tracking-widest mx-auto">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default PersonalDetails;
