import Hero from "../components/sections/Hero";
import Differentiators from "../components/sections/Differentiators";
import Solutions from "../components/sections/Solutions";
import Industries from "../components/sections/Industries";
import CaseStudies from "../components/sections/CaseStudies";
import Stats from "../components/sections/Stats";
import AIWidgetPreview from "../components/sections/AIWidgetPreview";

const Home = () => {
    return (
        <>
            <Hero />
            <Differentiators />
            <Solutions />
            <Industries />
            <CaseStudies />
            <Stats />
            <AIWidgetPreview />
        </>
    );
};

export default Home;
