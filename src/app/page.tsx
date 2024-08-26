import Image from "next/image";
import Header from "./components/header/header";
import Banner from "./components/banner/banner";
import ThirdSection from "./components/thirdsection/thirdsection";
import Mob from "./components/mob/mob";
import Mpcars from "./components/mpcars/mpcars";
import RbCars from "./components/rbcars/rbcars";
import Subs from "./components/subs/subs";
import Rent from "./components/rent/rent";
import Steps from "./components/steps/steps";
import Loc from "./components/loc/loc";
import Faq from "./components/faq/faq";
import Footer from "./components/footer/footer";




export default function Home() {
  return (
    <>
    <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
    <Header/>
    <Banner/> 
    <Mob/> 
    <ThirdSection/>
    <Mpcars/>
    <RbCars/>
    <Subs/>
    <Rent/>
    <Steps/> 
    <Loc/>
    <Faq/>
    <Footer/>
    
    </>
    
  );
}
