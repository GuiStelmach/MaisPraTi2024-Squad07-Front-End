import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Search from '../Components/Search'
import Como_Funciona from "../Components/Como_Funciona"
//import LastCars from "../Components/LastCars"
import Testimonials from "../Components/Testimonials"
import Footer from "../Components/Footer"
//import TestandoCoisas from "../Components/teste/testandoCoisas"

function LandingPage() {
  return (
    <>
      <Navbar />
      <Banner />
      <Search /> 
      <Como_Funciona />
      {/*<LastCars />*/}
      <Testimonials />
      <Footer />
    </>
  )
}

export default LandingPage

{
  /* 
    <>
      <Navbar />
      <Banner />
      <Search /> 
      <Como_Funciona />
      <LastCars />
      <Testimonials />
      <Footer />
    </>

    <>
      <TestandoCoisas />
    </>
  */
}