import { Link } from "react-router-dom";
import Button from "../Components/Button";
import View from "../Components/View";
import ParticleText from "../Components/Text/ParticleText";
import TypingText from "../components/Text/TypingText";

export default function Home(){
    return (
        <div className="w-full h-full sm:p-10 p-2 relative">
            <h1 className="font-bold text-3xl opacity-75 mt-4 max-sm:hidden">
                <span className="text-[2em]">W</span>
                <span>elcome to,</span>
            </h1>

            <div className="w-full flex flex-col items-center max-sm:hidden">
                <View minWidth={640}>
                    <ParticleText 
                        text="PopX"
                        pixelColor="black"
                        gap={0}
                        border={5}
                        pixelSize={1}
                        fontSize="120px"
                    />
                </View>

                <TypingText 
                    speed={20}
                    className="opacity-70 text-xs max-w-[350px] font-semibold pl-1 text-center" 
                    text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta soluta commodi fugiat officiis necessitatibus." 
                />

                <div className="flex gap-5 mt-10">
                    <Link to={'/signup'} className="flex">
                        <Button>Create Account</Button>
                    </Link>

                    <Link to={'/login'} className="flex">
                        <Button isPrimary={false}>Already Register? Login</Button>
                    </Link>
                </div>
            </div>

            <div className="flex flex-col w-full absolute bottom-0 left-0 pb-5 px-2 sm:hidden">
                <TypingText 
                    speed={80}
                    className="opacity-90 text-2xl font-bold" 
                    text="Welcome to Popx" 
                />

                <TypingText 
                    speed={20}
                    className="opacity-70 text-xs max-w-[350px] pl-1 font-semibold" 
                    text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta soluta." 
                />

                <div className="flex flex-col gap-5 my-5 w-full">
                    <Link to={'/signup'} className="flex">
                        <Button>Create Account</Button>
                    </Link>

                    <Link to={'/login'} className="flex">
                        <Button isPrimary={false}>Already Register? Login</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}