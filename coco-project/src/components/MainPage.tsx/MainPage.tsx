import react from "react"
import cl from "./MainPage.module.css"
import FirstSection from "./FirstSection/FirstSection";
import SecondSection from "./SecondSection/SecondSection";




const MainPage: React.FC = () => {

return(
    <div className={cl.MainPage}>
        <FirstSection></FirstSection>
        <SecondSection></SecondSection>








    </div>
)



}


export default MainPage;