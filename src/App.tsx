//* React Hooks
import { useEffect, useState } from "react";

//* Components
import Lsip1 from "./license_Si/premiere/Lsip1";
import Lsip2 from "./license_Si/premiere/Lsip2";
import Lisip1 from "./license_ISI/premiere/Lisip1";
import Lisip2 from "./license_ISI/premiere/Lisip2";
import Ligp1 from "./license_IG/premiere/Ligp1";
import Ligp2 from "./license_IG/premiere/Ligp2";
import Buttons from "./component/Buttons";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Aside from "./component/Aside";

export default function App() {
  //* Handle wich location to show
  const [location, setLocation] = useState("LSI");

  const updateLocation = (newLocation: string) => {
    setLocation(newLocation);
  };

  //* Mobile side nav
  const [isopen, setIsOpen] = useState(false);
  const updateOpenState = () => {
    setIsOpen(!isopen);
  };

  //* Handle wich semestre will be shown
  const [activeB1, setActiveB1] = useState(true);
  // call this function from Buttons component to set semestre 1 Active
  const active = (state: boolean) => {
    setActiveB1(state);
  };
  useEffect(() => {
    active(true);
  }, [location]);

  return (
    <div className="w-full flex flex-col items-center p-0 m-0">
      <Header
        currentLocation={location}
        onUpdateLocation={updateLocation}
        updateOpenState={updateOpenState}
      />
      <div className="flex flex-row">
        {isopen && (
          <Aside
            currentLocation={location}
            onUpdateLocation={updateLocation}
            updateOpenState={updateOpenState}
          />
        )}
        <main
          className="flex flex-col p-0 mt-24"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          {location === "LSI" && (
            <article className="flex flex-col p-0 ">
              <label htmlFor="Form" className="text-xl text-center mt-3 mb-5">
                1 ére License SI
              </label>
              <Buttons onActivate={active} />
              {activeB1 ? <Lsip1 /> : <Lsip2 />}
            </article>
          )}
          {location === "LISI" && (
            <article className="flex flex-col p-0 ">
              <label htmlFor="Form" className="text-xl text-center mt-3 mb-5">
                1 ére License ISI
              </label>
              <Buttons onActivate={active} />
              {activeB1 ? <Lisip1 /> : <Lisip2 />}
            </article>
          )}
          {location === "LIG" && (
            <article className="flex flex-col p-0 ">
              <label htmlFor="Form" className="text-xl text-center mt-3 mb-5">
                1 ére License IG
              </label>
              <Buttons onActivate={active} />
              {activeB1 ? <Ligp1 /> : <Ligp2 />}
            </article>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
}
