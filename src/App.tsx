import LSIP1 from "./LSIP1";
import Footer from "./component/Footer";
import Header from "./component/Header";

function App() {
  return (
    <>
      <Header />
      <main className="flex justify-center ">
        <LSIP1 />
      </main>
      <Footer />
    </>
  );
}

export default App;
