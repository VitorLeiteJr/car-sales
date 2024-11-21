import Banner from "./_sections/banner";
import CallToAction from "./_sections/cta";
import Navbar from "./_sections/navbar";
import QualitySection from "./_sections/qualitySeaction";
import CalltoActionSecond from "./_sections/cta-second";
import OurShops from "./_sections/ourShops";

export default function Home() {
  return (
   <>
   <Navbar/>
   <Banner/>
   <QualitySection/>
   <CallToAction/>
   <CalltoActionSecond/>
   <OurShops/>
   </>
  );
}
