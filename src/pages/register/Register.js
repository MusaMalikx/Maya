import SignUp from "../../components/register/Register";
import Login from "../../components/checkin/CheckIn";
import Layout from "../../components/layout/Article";

const LoginSignUp = () => {
    return (
        <div>
            <Layout title="Customer Zone">
                <div className="py-20 container-xxl">
                    <div className="pb-5 text-center tracking-widest">
                        <h1 className="uppercase tracking-[0.8rem] py-10 text-center text-4xl lg:text-6xl whitespace-nowrap">Customer Zone</h1>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center">
                        <div className="mx-3">
                            <Login />
                        </div>
                        <div className="mx-3">
                            <SignUp />
                        </div>
                    </div>
                </div>
            </Layout >
        </div >
    )
}

export default LoginSignUp