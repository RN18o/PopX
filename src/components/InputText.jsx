import { useRef } from "react";

export default function InputText({className='', labelColor='white', labelBg='black', label='Title', placeholder='', id=null, name='', color='black', bg='transparent', borderStyle='solid', borderWidth='2px', borderRadius='10px', required=false, type='text'}){
    id = id ?? String(Math.floor(Math.random()*10000));

    const inputLabel = useRef(null)

    function hadleFocus(){
        if(!inputLabel.current) return;

        let {width} = inputLabel.current?.parentElement?.getBoundingClientRect();
        if(!width) return   ;

        inputLabel.current.style.right = (width - 20) + 'px';
        inputLabel.current.style.transform = 'translate(100%, -50%)';
    }
    
    function handleBlur(){
        if(!inputLabel.current) return;
        
        inputLabel.current.style.right = '20px';
        inputLabel.current.style.transform = 'translate(0%, -50%)';
    }

    return <>
        <div 
            className={className} 
            style={{
                position: 'relative',
                height: label ? '48px' : '40px',
                display: 'flex',
                alignItems: 'center',
                borderRadius,
                borderStyle,
                borderWidth,
                borderColor: color,
                backgroundColor: bg
            }}
        >
           <label 
                ref={inputLabel}
                htmlFor={id}
                className="absolute top-0 translate-y-[-50%] items-center font-semibold h-5 text-xs transition-all duration-200 right-[20px] whitespace-nowrap"
                style={{
                    color: labelColor,
                    backgroundColor: labelBg,
                    display: label ? 'flex' : 'none',
                    borderRadius: borderRadius.slice(0, borderRadius.length-2) * .5 + 'px',
                    paddingInline: borderRadius.slice(0, borderRadius.length-2) * .8 + 'px'
                }}
            >{label}</label>
            <input 
                id={id} 
                name={name} 
                className="outline-none flex items-center w-full h-full px-5 text-sm font-semibold"
                style={{borderRadius, backgroundColor: bg}} 
                type={type} 
                placeholder={placeholder}
                onFocus={hadleFocus}
                onBlur={handleBlur}
                required={required}
            />
        </div>
    </>
}