import Banner from "./_components/banner";
import CallToAction from "./_components/cta";
import Navbar from "./_components/navbar";
import QualitySection from "./_components/qualitySeaction";
import CalltoActionSecond from "./_components/cta-second";
import OurShops from "./_components/ourShops";

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
