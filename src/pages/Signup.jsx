import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "../Components/Button";
import Input from "../Components/InputText";

export default function Signup(){

    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault();
        navigate('/account-setting')
    }

    return (
        <div className="w-full h-full flex sm:items-center justify-center p-2 pt-32">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-[400px] bg-slate-200 p-7 rounded-lg">
                <h1 className="text-2xl sm:justify-center font-semibold flex max-sm:flex-col sm:gap-2 mb-5">
                    <span className="font-bold">Create your</span>
                    <span className="font-bold">PopX Account</span>
                </h1>

                <Input placeholder="Enter Full Name" label="Full Name" required={true} />
                <Input placeholder="Enter Phone number" label="Phome number" required={true} type="tel" />
                <Input placeholder="Enter Email address" label="Email address" required={true} type="email" />
                <Input placeholder="Enter password" label="Password" required={true} type="password" />
                <Input placeholder="Enter Company name" label="Company name" required={true} />
                <div className="text-sm font-semibold opacity-80 mt-4">
                    <h1>Are you an Agency ?</h1>
                    
                    <input id="isAgency-yes" type="radio" name="isAgency" required={true}  />
                    <label htmlFor="isAgency-yes" className="px-1">Yes</label>

                    <input id="isAgency-no" type="radio" name="isAgency" className="ml-4" required={true} />
                    <label htmlFor="isAgency-no" className="px-1">No</label>
                </div>

                <div className="flex mt-7">
                    <Button>Create Account</Button>
                      <Link to={'/login'} className="flex ml-5 justify-center items-center">
                        <p>Already Register? <span className="text-blue-500">Login</span></p>
                    </Link>
                </div>
            </form>
        </div>
    )
}