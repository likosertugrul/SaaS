import {Layout} from "./components/Layout"
import {Navbar} from "./components/elements/Navbar"
import {Hero} from "./components/sections/Hero"
import {Services} from "./components/sections/Services"
import {Brands} from "./components/sections/Brands.tsx";
import {AboutUs} from "./components/sections/AboutUs.tsx";
import {Pricing} from "./components/sections/Pricing"
import {CTA} from   "./components/sections/CallToAction.tsx"
import {Footer} from "./components/elements/Footer.tsx";

function App() {

    return (
        <Layout title="AIinho">
            <Navbar></Navbar>
            <Hero></Hero>
            <Brands></Brands>
            <Services></Services>
            <AboutUs></AboutUs>
            <Pricing></Pricing>
            <CTA></CTA>
            <Footer></Footer>
        </Layout>
    )
}

export default App
