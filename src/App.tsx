//* Hooks
import { useState } from "react";
//* Components
import Lsip1 from "./license_Si/premiere/Lsip1";
import Lsip2 from "./license_Si/premiere/Lsip2";
import Lisip1 from "./license_ISI/premiere/Lisip1";
import Lisip2 from "./license_ISI/premiere/Lisip2";
import Buttons from "./component/Buttons";
import Footer from "./component/Footer";
import Header from "./component/Header";

function App() {
  //* Handle wich location to show
  const [location, setLocation] = useState("LSI");

  const updateLocation = (newLocation: string) => {
    setLocation(newLocation);
  };

  //* LSI Section
  //* Handle wich semestre will be shown
  const [activeB1, setActiveB1] = useState(true);
  // call this function from Buttons component to set semestre 1 Active
  const active = (state: boolean) => {
    setActiveB1(state);
  };

  //* LISI Section

  return (
    <div className="w-full flex flex-col items-center p-0 m-0 ">
      <Header currentLocation={location} onUpdateLocation={updateLocation} />
      <main className="flex flex-col p-0 mt-24">
        {location === "LSI" ? (
          <article id="LSI" className="flex flex-col p-0 ">
            <label htmlFor="Form" className="text-xl text-center mt-3 mb-5">
              1 ére License SI
            </label>
            <Buttons onActivate={active} />
            {activeB1 ? <Lsip1 /> : <Lsip2 />}
          </article>
        ) : (
          <article id="LISI" className="flex flex-col p-0 ">
            <label htmlFor="Form" className="text-xl text-center mt-3 mb-5">
              1 ére License ISI
            </label>
            <Buttons onActivate={active} />
            {activeB1 ? <Lisip1 /> : <Lisip2 />}
          </article>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
