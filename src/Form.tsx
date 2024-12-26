import InputFields from "./component/InputFields";
import React, { useRef, useState } from "react";

export default function Form() {
  const [moyenne, setMoyenne] = useState("");

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // prevent reloading the page after form submition

    if (!formRef.current) return;

    //requprer les donner de form en utilisant FormData
    const formData = new FormData(formRef.current);

    // convert FormData to an object
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    //calcule moyenne d une matiere
    const calcMoyMatiere = (TD: number, DS: number, EX: number): number => {
      return (TD * 10 + DS * 20 + EX * 70) / 100;
    };

    // array to save moyenne d une note
    const moyenneMatieres: [string, number][] = [];

    // Convert object into an array of entries
    const entries = Object.entries(data);

    for (let i = 0; i < entries.length; i += 3) {
      const matiere: [string, string][] = entries.slice(i, i + 3);

      //* calculer le moyenne d une matiere a l aide d appel fonction calcMoyMatiere()
      const moyMatiere: number = calcMoyMatiere(
        parseFloat(matiere[0][1]),
        parseFloat(matiere[1][1]),
        parseFloat(matiere[2][1])
      );

      //* ajouter la moyenne d une matiere a l table des moyenne est incrimenter k avec 1
      const nomMatiere = matiere[0][0].substring(0, matiere[0][0].length - 2); // extraire le nom de matiere en eff 2 char finale
      moyenneMatieres.push([nomMatiere, moyMatiere]);
    }

    //* calcule totale des moyenne
    let totalMoy = 0;
    for (let i = 0; i < moyenneMatieres.length; i++) {
      totalMoy += moyenneMatieres[i][1];
      console.log(moyenneMatieres[i]); //!debug
    }
    console.log("total des moyenne : ", totalMoy); //!debug

    console.log(data); //!debug

    //liste de coefficient de License SI P1
    const coefLsiP1 = {
      Algebre: 1.5,
      Analyse: 1.5,
      "Algorithmique et structure de données": 2,
      "Atelier programmation1": 1.5,
      "Système d'exploitation 1": 1.5,
      "Systèmes Logiques & Architecture des ordinateurs": 2,
      "Logique formelle": 1.5,
      "Technologies Multimédias": 1.5,
      Anglais: 1,
      "Techniques de communication 1": 1,
    };

    // calcule total de coefficent
    let totalCoeff = 0;
    for (let [matiere, coef] of Object.entries(coefLsiP1)) {
      totalCoeff += coef;
    }

    //* calcule de moyenne
    const moy = totalMoy / totalCoeff;
    setMoyenne(moy ? moy.toString().substring(0, 4) : "0");
  };

  //todo : Verify that input values are between 0 and 20.
  //todo : Ensure that empty fields are not included in the average calculation.
  //todo : Exclude coefficients for empty fields from the total coefficient calculation.

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex flex-row  p-5 w-full"
    >
      <div className="flex flex-col ">
        <InputFields title={"Algebre"} type={"TD"} />
        <InputFields title={"Analyse"} type={"TD"} />
        <InputFields
          title={"Algorithmique et structure de données"}
          type={"TD"}
        />
        <InputFields title={"Techniques de communication 1"} type={"TD"} />
      </div>
      <div className="flex flex-col">
        <InputFields title={"Atelier programmation 1"} type={"TD"} />
        <InputFields title={"Système d'exploitation 1"} type={"TD"} />
        <InputFields
          title={"Systèmes Logiques & Architecture des ordinateurs"}
          type={"TD"}
        />
        <div className="flex flex-col items-center  w-96 ml-5 p-5">
          <button
            type="submit"
            className="w-56 focus:outline-none text-white bg-green-700 hover:bg-green-800
             focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5
              me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Calculer Moyenne
          </button>
          <div className="relative">
            <input
              type="text"
              id="disabled_outlined"
              className="block px-2.5 pb-2.5 pt-4 w-full text-xl text-gray-900 bg-transparent
              rounded-lg border-1 border-gray-300 appearance-none dark:text-white
              focus:outline-none focus:ring-0
            focus:border-blue-600 peer"
              placeholder=" "
              disabled
            />
            <label
              htmlFor="disabled_outlined"
              className="absolute text-xl text-gray-400 duration-300 transform -translate-y-4
              scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600
              peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2
              peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4
              start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Votre Moyenne est : <p className="text-black">{moyenne}</p>
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <InputFields title={"Logique formelle"} type={"TD"} />
        <InputFields title={"Technologies Multimédias"} type={"TD"} />
        <InputFields title={"Anglais 1"} type={"TD"} />
      </div>
      <div className="flex flex-col "></div>
    </form>
  );
}
