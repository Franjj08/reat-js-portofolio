import HeroSection from "../HeroSection";
import MySkills from "../MySkill";
import AboutMe from "../AboutMe";
import MyPortfolio from "../MyPortfolio";

export default function Home(){
    return(
       <>
        <HeroSection/>
        <MySkills/>
        <AboutMe/>
        <MyPortfolio/>
       </>
    );
}