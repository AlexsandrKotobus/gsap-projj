import React, {  useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import './InfinityText.css'
// import { useGSAP } from "@gsap/react";



const InfinityText = () => {
    const textRef = useRef(null)
    const spanRef = useRef(null)

    useGSAP(()=> {
        gsap.fromTo(
            textRef.current,
            {x: 0},
            {x: -spanRef.current.clientWidth +"px",
            duration: 5,
            repeat: -1,
            ease: 'none'}
        );
    })
    return (
        <>
         <section>
            <div className="container">
                <p className="text" ref={textRef}>
                    <span ref={spanRef}>Привет, люди!</span>
                    <span>Привет, люди!</span>
                    <span>Привет, люди!</span>
                    <span>Привет, люди!</span>
                    <span>Привет, люди!</span>
                    <span>Привет, люди!</span>
                    <span>Привет, люди!</span>
                </p>
            </div>
        </section>
        </>
       
       
    );
}

export default InfinityText;
