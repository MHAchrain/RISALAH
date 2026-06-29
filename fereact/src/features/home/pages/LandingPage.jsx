import ExampleSection from "../section/ExampSection";
import FeatureSection from "../section/FeatureSection";
import FlowSection from "../section/FlowSection";
import HeroSection from "../section/HeroSection";
import Footer from "../../../components/layout/Footer"
import Navbar from "../../../components/layout/Navbar"

export default function LandingPage(){
    return(
        <>
            <Navbar/>

            <main  className="pt-20">
                <HeroSection/>
                <FlowSection/>
                <FeatureSection/>
                <ExampleSection/>
            </main>

            <Footer/>
        </>
    )
}