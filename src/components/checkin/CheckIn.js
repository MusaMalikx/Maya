import axios from "axios";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const [pass, setPass] = useState("")
  const [email, setEmail] = useState("")
  const [hid, setHid] = useState(false)
  const [vemail, setVEmail] = useState("")
  // console.log(pass, email)

  // const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post('/auth/login', {
      email: email,
      password: pass
    }).then(async (res) => {
      console.log(res)

      await axios.post('/cart', {
        uid: res.data.user._id
      })
        .then((re) => {
          console.log(re.data)
          console.log('Cart Check!')
        })
        .catch((er) => {
          console.log(er.message)
        })

      localStorage.setItem('auth', JSON.stringify(res.data));
      setEmail("")
      setPass("")
      navigate('/')
      // dispatch(setUser(true))
    }).catch((err) => {
      console.log(err)
      alert("Kindly Enter the correct credentials!")
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

  const handleVerify = (e) => {
    e.preventDefault();
    axios.post('/user/forgot/password', {
      email: vemail
    })
      .then((res) => {
        console.log(res)
        alert("Email Verification Sent!")
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <div className="lg:w-[450px] xl:w-[600px]">
        <div className="p-3 mb-3 bg-[#f8f9fa] text-dark tracking-widest">
          <strong>LOGIN</strong>
        </div>
        <p className="lead mb-4">Already our customer?</p>
        <p className="text-muted mb-3">
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
          egestas semper. Aenean ultricies mi vitae est. Mauris placerat
          eleifend leo.
        </p>
        <hr />
        <br />
        <form className="form-group">
          <div className="mb-4 text-muted">
            <label className="form-label" htmlFor="email_1" autoComplete="off">
              EMAIL
            </label>
            <input type="text" id="email_1" className="form-control" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-4 text-muted">
            <label className="form-label" htmlFor="password">
              PASSWORD
            </label>
            <div className="relative">
              <input type={hid ? 'text' : 'password'} id="password" className="form-control" onChange={(e) => setPass(e.target.value)} />
              <div className="text-2xl absolute top-2 right-3 hover:text-black cursor-pointer" onClick={() => setHid(!hid)}>
                {hid ? <AiFillEyeInvisible />
                  : <AiFillEye />}
              </div>
            </div>
          </div>
          <div
            data-bs-toggle="modal"
            data-bs-target="#Modal"
            className=" text-sky-600 hover:underline hover:underline-offset-1 cursor-pointer my-3 flex justify-end"
          >
            <p>forgot password ?</p>
          </div>

          <div
            className="modal fade"
            id="Modal"
            tabIndex="-1"
            aria-labelledby="ModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="ModalLabel">
                    Forgot Password
                  </h5>
                  <button
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={(e) => e.preventDefault()}
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="mb-4 text-muted">
                    <label className="form-label" htmlFor="email">
                      EMAIL
                    </label>
                    <input type="text" id="email" className="form-control" autoComplete="off" onChange={(e) => setVEmail(e.target.value)} />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={handleVerify}
                  >
                    Send Verification
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-4 space-x-4 flex">
            <button
              // type="submit"
              className="btn btn-sm p-2 rounded-none btn-outline-dark flex items-center space-x-2 tracking-widest"
              onClick={handleSubmit}
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
              <span>LOG IN</span>
            </button>
            <button
              // type="submit"
              className="btn btn-sm p-2 rounded-none btn-outline-dark flex items-center space-x-2 tracking-widest"
              onClick={handleFacebookAuth}
            >
              <span>Facebook</span>
            </button>
            <button
              // type="submit"
              className="btn btn-sm p-2 rounded-none btn-outline-dark flex items-center space-x-2 tracking-widest"
              onClick={handleGoogleAuth}
            >
              <span>Google</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
