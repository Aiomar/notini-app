import Form from "./Form";
import Fotter from "./component/Footer";
import Header from "./component/Header";

function App() {
  return (
    <>
      <Header />
      <main className="flex justify-center">
        <section className="flex-col items-center pt-28 p-5">
          <label htmlFor="Form" className="text-xl">1ere LSI P1</label>
          <Form />
        </section>
      </main>
      <Fotter />
    </>
  );
}

export default App;
