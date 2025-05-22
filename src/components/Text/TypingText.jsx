export default function TypingText({text='', className, speed=100}){
    return (
        <p className={className}>
            {
                text.split('').map((char, index) => (
                    <span key={index} style={{
                        animation: 'opacity-scale-0-to-1',
                        animationDelay: `${index*speed}ms`,
                        animationDuration: '100ms',
                        animationFillMode: 'forwards',
                        opacity: 0,
                        scale: 0,
                        minWidth: char === ' ' ? 6 : 0
                    }} >{char}</span>
                ))
            }
        </p>
    )
}