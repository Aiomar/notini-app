import { useState } from "react";
import Lsip1 from "./Lsip1";
import Lsip2 from "./Lsip2";
import Buttons from "./component/Buttons";
import Footer from "./component/Footer";
import Header from "./component/Header";

function App() {
  //* Handle wich semestre will be shown
  const [activeB1, setActiveB1] = useState(true);
  // call this function from Buttons component to set semestre 1 Active
  const active = (state: boolean) => {
    setActiveB1(state);
  };

  return (
    <div className="w-full flex flex-col items-center p-0 m-0 ">
      <Header />
      <main className="flex flex-col p-0 mt-24">
        <label htmlFor="Form" className="text-xl text-center mt-3 mb-5">
          1 ére License SI
        </label>
        <Buttons onActivate={active} />
        {activeB1 ? <Lsip1 /> : <Lsip2 />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
