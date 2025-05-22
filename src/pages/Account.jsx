import TypingText from "../components/Text/TypingText";

export default function Account(){
    return (
        <div className="w-full h-full flex flex-col items-center px-4">
            <TypingText className="bg-white font-semibold h-20 w-full flex items-center sm:justify-center" text="Account Setting" />

            <div className="max-w-[500px]">
                <div className="flex py-5 gap-5">
                    <div className="aspect-square w-20 bg-white rounded-full relative">
                        <img src="/Images/profile.png" alt="404" />
                        <img src="/Images/cam.svg" alt="404" className="absolute bottom-0 right-0" />
                    </div>

                    <div className="flex flex-col">
                        <TypingText className="font-semibold" text="Marry Doe" />
                        <h2 className="text-sm font-semibold opacity-60">marry@gmail.com</h2>
                    </div>
                </div>
                
                <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio qui quod veritatis tempore explicabo delectus repellendus tempora assumenda ducimus.</p>

                <hr className="border-dashed border-[2px] border-black my-5 opacity-20" />
            </div>
        </div>
    )
}