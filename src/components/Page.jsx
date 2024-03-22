import NavSection from "./NavSection.jsx";
import HeroSection from "./HeroSection.jsx";
import TaskSection from "./task/TaskSection.jsx";
import Footer from "./Footer.jsx";
export default function Page(){
    return(
        <>
            <NavSection></NavSection>
            <HeroSection></HeroSection>
            <TaskSection></TaskSection>
            <Footer></Footer>
        </>
    );
}