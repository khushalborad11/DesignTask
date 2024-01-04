import Description from "./Description";
import Footer from "./Footer";
import Header from "./Header";
import Portfolio from "./Portfolio";
import Poster from "./Poster";
import Process from "./Process";
import Question from "./Question";
import Sliders from "./Sliders";

export default function Project() {
    return (
        <>
           <Header/>
           <Poster/>
           <Sliders/>
           <Description/>
           <Process/>
           <Portfolio/>
           <Question/>
           <Footer/>
        </>
    )
}