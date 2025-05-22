import { useEffect, useState } from "react";
import eventHandler from "../Functions/eventhandler";

export default function View({children, minWidth=0, maxWidth=Infinity}){
    const [isLoad, setLoad] = useState(minWidth < window.innerWidth && window.innerWidth < maxWidth);

    function handleLoad(){
        setLoad(minWidth < window.innerWidth && window.innerWidth < maxWidth);
    }
    
    const handleResize = eventHandler(handleLoad, 1000)
    
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);

    return <>
        {isLoad ? children : null}
    </>
}