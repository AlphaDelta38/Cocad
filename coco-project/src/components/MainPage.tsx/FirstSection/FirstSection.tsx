import React, { useEffect, useState } from "react";
import cl from "./FirstSection.module.css"




const FirstSection = () => {

const [dis, setdis] = useState(false);
const [Graph, setGraph] = useState(false);
const [Btn, setbtn] = useState(false);
const [UWidth, UwidthSet] = useState(false);

function startDis(){

    setdis(true)

}

function startGraph(){

    setGraph(true)
    
}

function startBtn(){

    setbtn(true)
    
}




useEffect(()=>{


setTimeout(startDis, 1400)
setTimeout(startGraph, 1600)
setTimeout(startBtn, 1750)
const UserWidth = document.documentElement.clientWidth;
console.log(UserWidth)
if(UserWidth < 1000){

    UwidthSet(true);

}

}, [])






return(

    <div className={cl.SectionContainer}>
        <div className={dis ? cl.TextContent : cl.TextContent2}>
            <div className={cl.style__eclipse}></div>

            <div className={cl.TextContnet__Name}>
                <h1>Digitally forward<br></br> creative</h1>
            </div>
            <div className={cl.TextContent__Discription}>
                <div className={cl.fordis}></div>
                <div className={cl.Discription__Text}>
                    <p>When it comes to interactive<br></br> marketing, we've got you covered. <br></br> Be where the world is going</p>
                </div>
            </div>
            <div className={Btn ? cl.TextContent__Input : cl.TextContent__Input2}>
                <div className={cl.input__container}>
                    <input className={cl.input} placeholder="Enter your email">

                    </input>
                </div>
                <div className={cl.btn__container}>
                    <button className={cl.btn}>Try for free</button>
                </div>
                
            </div>
        </div>
        <div className={UWidth ? cl.GraphyContent__1000 : cl.GraphyContent}>
            <div className={ Graph ? cl.Content__container : cl.Content__container2 }>
                <div className={UWidth ? cl.Graphic_1000 : cl.Graphic  }><img width="100%" height="100%" src="./Sales.png" alt="" /></div>
                <div className={UWidth ? cl.Sales_1000 : cl.Sales }><img width="100%" height="100%" src="./Sales3.png" alt="" /></div>
                <div className={UWidth ? cl.Graphic2_1000 : cl.Graphic2}><img width="100%" height="100%" src="./Sales2.png" alt="" /></div>
                
            </div>
        </div>
    </div>


)

}


export default FirstSection;