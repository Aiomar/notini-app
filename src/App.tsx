import LSIP1 from "./Lsip1";
import Footer from "./component/Footer";
import Header from "./component/Header";

function App() {
  return (
    <div className="w-full flex flex-col items-center p-0 m-0 ">
      <Header />
      <main className="flex p-0 m-0 ">
        <LSIP1 />
      </main>
      <Footer />
    </div>
  );
}

export default App;
