import Navbar from "../../../components/layout/Navbar";
import ExampleSection from "../section/ExampSection";
import FeatureSection from "../section/FeatureSection";
import FlowSection from "../section/FlowSection";
import HeroSection from "../section/HeroSection";

export default function LandingPage(){
    return(
        <main>
            <HeroSection/>
            <FlowSection/>
            <FeatureSection/>
            <ExampleSection/>
        </main>
    )
}