import Banner from "./_sections/banner";
import CallToAction from "./_sections/cta/cta";
import QualitySection from "./_sections/qualitySeaction";
import CalltoActionSecond from "./_sections/cta/cta-second";
import OurShops from "./_sections/ourShops";
import CarList from "./_sections/carList";

export default function Home() {
  return (
   <>
   <Banner/>
   <CarList/>
   <QualitySection/>
   <CallToAction/>
   <OurShops/>
   <CalltoActionSecond/>
   </>
  );
}
