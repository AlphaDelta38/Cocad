import React, { useState, useEffect, useRef } from "react";
import cl from "./Header.module.css"
import './fonts/iter/Inter-Medium.ttf';
import JsonFile from "./icons8-меню.json"
import Lottie, {AnimationItem} from "lottie-web";


const Header: React.FC = () => {




const [width1, setwidthd1] = useState("0px");
const [width2, setwidthd2] = useState("0px");
const [width3, setwidthd3] = useState("0px");
const [width4, setwidthd4] = useState("0px");
const [width5, setwidthd5] = useState("0px");



const MSOVER1 = (e: React.MouseEvent<HTMLButtonElement>) =>{

    setwidthd1("48px")


}

const MSDOWN1 = (e: React.MouseEvent<HTMLButtonElement>) =>{

    setwidthd1("0px")
    
}

const MSOVER2 = (e: React.MouseEvent<HTMLButtonElement>) =>{

    setwidthd2("50px")


}

const MSDOWN2 = (e: React.MouseEvent<HTMLButtonElement>) =>{

    setwidthd2("0px")
    
}

const MSOVER3 = (e: React.MouseEvent<HTMLButtonElement>) =>{

    setwidthd3("36px")


}

const MSDOWN3 = (e: React.MouseEvent<HTMLButtonElement>) =>{

    setwidthd3("0px")
    
}

const MSOVER4 = (e: React.MouseEvent<HTMLButtonElement>) =>{

    setwidthd4("56px")


}

const MSDOWN4 = (e: React.MouseEvent<HTMLButtonElement>) =>{

    setwidthd4("0px")
    
}

const MSOVER5 = (e: React.MouseEvent<HTMLButtonElement>) =>{

    setwidthd5("90px")


}

const MSDOWN5 = (e: React.MouseEvent<HTMLButtonElement>) =>{

    setwidthd5("0px")
    
}

const [active, setactive] = useState(false);
const [activeNAV, setactiveNAV] = useState(false);

useEffect(()=>{



setTimeout(StartLogoF, 100);
setTimeout(TimeOutNAV, 1000);




}, [])

function TimeOutNAV() {


    setactiveNAV(true);
    
}

function StartLogoF() {


    setactive(true);
    
}




return(

<div className={cl.Header}>

    <div  className={cl.Header__container}>
        <div className={cl.Header__logo}>
            <div  className={active ? cl.logo : cl.logo2}>
                <img style={{width:"100%", height: "100%"}} src="./4.png" alt="" />
            </div>
        </div>
        <div  className={cl.Header__navigation}>
            <div className={activeNAV ? cl.navigation : cl.navigation2}>

                    <button onMouseLeave={MSDOWN1} onMouseOver={MSOVER1} className={cl.font_dancing_script}>Home</button>
                    <div style={{width: width1}} className={cl.stylebtn}></div>
                    <button onMouseLeave={MSDOWN2} onMouseOver={MSOVER2} className={cl.font_dancing_script}>About</button>
                    <div style={{width: width2}} className={cl.stylebtn}></div>
                    <button onMouseLeave={MSDOWN3} onMouseOver={MSOVER3} className={cl.font_dancing_script}>Blog</button>
                    <div style={{width: width3}} className={cl.stylebtn}></div>
                    <button onMouseLeave={MSDOWN4} onMouseOver={MSOVER4} className={cl.font_dancing_script}>Pricing</button>
                    <div style={{width: width4}} className={cl.stylebtn}></div>
                    <button onMouseLeave={MSDOWN5} onMouseOver={MSOVER5} className={cl.font_dancingUS_script}>Contact US</button>
                    <div style={{width: width5}} className={cl.stylebtn}></div>
                    
            </div>
            <div className={cl.burger}><img src='./burger.png' alt="" /></div>
        </div>


    </div>

</div>


)


}



export default Header;