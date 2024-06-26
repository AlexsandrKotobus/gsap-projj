import {/*useState,  useEffectLayout,*/ useRef} from 'react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

import './MenuButton.css'

import React from 'react';


export const MenuButton = ({isActive, setActive}) => {
    const tlRef=useRef();
    gsap.defaults({duration: 0.3})
    console.log("Button isActive ",isActive)
    useGSAP(()=> {
        if(isActive){
            tlRef.current =
            gsap.timeline()
            .fromTo('#line3', {scaleX: '100%'}, {scaleX:0})
            .fromTo('#line2', {scaleX: '100%'}, {scaleX:0})
            .fromTo('#line1', {scaleX: '100%'}, {scaleX:0})
            .fromTo('#line4', {scaleX: 0}, {scaleX: '100%'})
            .fromTo('#line5', {scaleX: 0}, {scaleX: '100%'});

        }else if(isActive === false){
            tlRef.current.reverse();
        }else{
            gsap.timeline()
            .set(['#line4', "#line5"], {scaleX: 0})
            .fromTo('#line1', {scaleX:0},  {scaleX: "100%"})
            .fromTo('#line2', {scaleX:0},  {scaleX: "100%"})
            .fromTo('#line3', {scaleX:0},  {scaleX: "100%"})
        }
    }, [isActive]);

   


    return (
        <div>
            <button className='menu-button' onClick={()=>{setActive(!isActive)}}>
           

                <span className="menu-button-line" id="line1"></span>
                <span className="menu-button-line" id="line2"></span>
                <span className="menu-button-line" id="line3"></span>
                <span className="menu-button-line" id="line4"></span>
                <span className="menu-button-line" id="line5"></span>
            </button>
           

        </div>
    );
}

