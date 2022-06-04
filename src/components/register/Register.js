import axios from 'axios';
import { useState } from 'react'

const SignUp = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post('/auth/register', {
      name: name,
      email: email,
      password: password
    }).then((res) => {
      console.log(res)
      setEmail("")
      setName("")
      setPassword("")
      alert("User has been Registerd.. Kindly login!")
    }).catch((err) => {
      console.log(err)
      alert("Kindly Enter correct credentials!")
    })
  }

  const handleGoogleAuth = (e) => {
    e.preventDefault()
    const res = window.open(
      `http://localhost:8080/auth/google`,
      "_self"
    )
    console.log(res)
  }

  const handleFacebookAuth = (e) => {
    e.preventDefault()
    const res = window.open(
      `http://localhost:8080/auth/facebook`,
      "_self"
    )
    console.log(res)
  }

  return (
    <div className="">
      <div className="lg:w-[450px] xl:w-[600px]">
        <div className="p-3 mb-3 bg-[#f8f9fa] text-dark tracking-widest">
          <strong>NEW ACCOUNT</strong>
        </div>
        <p className="lead mb-4">Not our registered customer yet?</p>
        <p className="text-muted mb-3">
          With registration with us new world of fashion, fantastic discounts
          and much more opens to you! The whole process will not take you more
          than a minute!
        </p>
        <p className="text-muted mb-3">
          If you have any questions, please feel free to contact us, our
          customer service center is working for you 24/7.
        </p>
        <hr />
        <br />
        <form className="form-group">
          <div className="mb-4 text-muted">
            <label className="form-label uppercase" htmlFor="name">
              Name
            </label>
            <input type="text" id="name" className="form-control" onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-4 text-muted">
            <label className="form-label uppercase" htmlFor="email">
              Email
            </label>
            <input type="email" id="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-4 text-muted">
            <label className="form-label uppercase" htmlFor="passwordRegister">
              Password
            </label>
            <input type="password" id="passwordRegister" className="form-control" onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div className="mb-4 space-x-4 flex">
            <button
              onClick={handleSubmit}
              className="btn btn-sm p-2 rounded-none btn-outline-dark flex items-center space-x-2 tracking-widest"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="sign-in-alt"
                className="fa fa-play w-5"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z"
                ></path>
              </svg>
              <span>Sign UP</span>
            </button>
            <button
              // type="submit"
              onClick={handleFacebookAuth}
              className="btn btn-sm p-2 rounded-none btn-outline-dark flex items-center space-x-2 tracking-widest"
            >
              <span>Facebook</span>
            </button>
            <button
              // type="submit"
              onClick={handleGoogleAuth}
              className="btn btn-sm p-2 rounded-none btn-outline-dark flex items-center space-x-2 tracking-widest"
            >
              <span>Google</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
