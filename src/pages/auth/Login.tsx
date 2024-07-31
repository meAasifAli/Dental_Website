import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className="flex items-center justify-center h-screen sm:h-auto sm:justify-between w-full sm:mt-8 bg-[#E6F6FE] sm:bg-transparent">
            <div className="hidden sm:block sm:w-1/2">
                <img src="/assets/login.png" className="w-[710px] h-[880px]" alt="" />
            </div>
            <div className="sm:w-1/2 w-full p-2">
                <form className="flex flex-col justify-center items-start space-y-4 max-w-[416px] mx-auto">
                    <div>
                        <h2 className="text-[#011632] font-semibold text-[24px] sm:text-[36px] tracking-widest">Welcome Back</h2>
                        <p className="text-[#3C4959] text-[12px] tracking-widest" >Discover a better way of spandings with Uifry.</p>
                    </div>
                    <div className="flex items-center justify-center gap-2  border border-[#011632] p-4 w-full rounded-lg">
                        <img src="/assets/Google.png" className="h-6 w-6 object-contain" alt="" />
                        <p className="text-[#011632] text-[14px] tracking-widest">Login with Google</p>
                    </div>
                    <div className="flex items-center gap-2 w-full">
                        <p className="border border-[#011632] w-full"></p>
                        <p>OR</p>
                        <p className="border border-[#011632] w-full"></p>
                    </div>
                    <div className="space-y-6">
                        <input type="email" placeholder="Email" className="w-full border border-[#0AFAFAF] p-4 rounded-lg" />
                        <input type="password" placeholder="Password" className="w-full border border-[#0AFAFAF] p-4 rounded-lg" />
                        <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                                <input type="checkbox" />
                                <p className="text-[#011632] text-[14px] tracking-widest">remmeber me?</p>
                            </div>
                            <div>
                                <p className="text-[#011632] text-[14px] tracking-widest underline cursor-pointer">Forgot Password?</p>
                            </div>
                        </div>
                        <button className="bg-[#1376F8] w-full text-white rounded-lg p-4">Sign up</button>
                        <p className="text-[#011632] text-[14px] tracking-widest text-center w-full">New member? <Link to={'/signup'}>create an  account</Link> </p>
                    </div>

                </form>
            </div>
        </div>
    )
}
export default Login