import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "../Components/Button";
import InputText from "../Components/InputText";

export default function Login(){

    const navigate = useNavigate();

    function handleForm(e){
        e.preventDefault();
        navigate('/account');
    }

    return (
        <div className="w-full h-full flex sm:items-center justify-center p-2 pt-52">
            <form onSubmit={handleForm} className="flex flex-col gap-4 bg-slate-200 p-7 rounded-lg">
                <div>
                    <h1 className="text-2xl sm:text-center font-semibold flex max-sm:flex-col sm:gap-2">
                        <span className="font-bold">Signin to your</span>
                        <span className="font-bold">PopX account</span>
                    </h1>
                    
                    <p className="text-sm opacity-60 sm:text-center max-w-[350px] font-semibold mb-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero ratione eum facilis.</p>
                </div>

                <InputText placeholder="Enter email address" label="Emain Address" required={true} type="email" />
                <InputText placeholder="Enter password" label="Password" required={true} type="password" />

                <div className="flex">
                    <Button>Login</Button>
                      <Link to={'/Signup'} className="flex ml-5 justify-center items-center">
                        <p>Don't have Account? <span className="text-blue-500">Signup</span></p>
                    </Link>
                </div>
            </form>
        </div>
    )
}