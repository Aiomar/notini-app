import React, { useRef, useState } from "react";
import InputFields from "../../component/InputFields";

export default function Lsi2p1() {
  const [moyenne, setMoyenne] = useState("");
  const [err, setErr] = useState(["", ""]);
  //* handle note changing to correct value | remove the error

  const handleNoteChange = (matiere: string, value: string) => {
    if (value != "" && parseFloat(value) >= 0 && parseFloat(value) <= 20) {
      setErr(["", ""]);
    } else {
      setErr([
        matiere.substring(0, matiere.length - 2), // send the matiere name without DS |TD| EX : AlgebreDS => Algebre
        "Le note de : " + matiere + " doit etre entre 0 et 20",
      ]);
    }
  };

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    // prevent reloading the page after form submition
    e.preventDefault();

    // verification if the form is not empty
    if (!formRef.current) return;

    //requprer les donner de form en utilisant FormData
    const formData = new FormData(formRef.current);

    let hasError: boolean = false;

    //** formData Validation
    formData.forEach((value, key) => {
      const matiere: string = key;
      const note: string = value.toString();

      // verifiy if the input field is empty | dispence dans une matiere
      if (note != "" && (parseFloat(note) < 0 || parseFloat(note) > 20)) {
        //* setting and error if the condition 0<note<20 is not respected
        setErr([
          matiere.substring(0, matiere.length - 2), // send the matiere name without DS |TD| EX : AlgebreDS => Algebre
          "Le note de : " + matiere + " doit etre entre 0 et 20",
        ]);
        // indicates that there is an error
        hasError = true;
        return;
      }
    });

    // if there is an input field error | input value is not in (0,20) range the func exit
    if (hasError) return;

    //* create a list that holds matier that are empty || we dont need to calculate empty matiere fields
    const listMat: [string] = [""];

    // verifiy wich input field is empty
    formData.forEach((value, key) => {
      const matiere: string = key.substring(0, key.length - 2);
      console.log(matiere); //!debug
      const note: string = value.toString();

      //* data Validation
      // verifiy if the input field is empty then add it to listMat Array
      if (!note || note === "") {
        if (!listMat.includes(matiere)) {
          listMat.push(matiere);
        }
      }
    });

    // *Convert FormData to an object | FormData : array (convert into)=> object
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    //* Object list of  matieres | coefficient of License SI P1
    const coefLsiP2 = {
      "Probabilité et statistique": 2,
      "Théorie des langages et des Automates": 1,
      "Graphes et optimisation ": 1,
      "Conception des Systèmes d'Information": 1.5,
      "Programmation Java": 2,
      "Ingénierie des Bases de Données": 1.5,
      "Services des Réseaux ": 1,
      "Anglais 3": 1,
      "Gestion d'entreprise": 1,
      "C++": 1.5,
      "Electricité-Electronique": 1.5,
    };

    // calcule total de coefficent
    let totalCoeff = 0;
    for (const [matiere, coef] of Object.entries(coefLsiP2)) {
      //* verifier si le matiere est dans le liste de matiere negligable | this type of matieres does'nt need a moy calc
      if (listMat.includes(matiere)) {
        continue;
      }
      totalCoeff += coef;
    }

    console.log("total coefficient = ", totalCoeff); //!debug

    //calcule moyenne d une matiere
    const calcMoyMatiere = (
      TD: number,
      DS: number,
      EX: number,
      coef: number
    ): number => {
      return ((TD * 10 + DS * 20 + EX * 70) / 100) * coef;
    };

    // array to save moyenne d une note
    const moyenneMatieres: [string, number][] = [];

    // Convert object into an array of entries
    const entries = Object.entries(data);

    //* calcule de moyenne d une matiere
    for (let i = 0; i < entries.length; i += 3) {
      const matiere: [string, string][] = entries.slice(i, i + 3);

      //* extraire le nom de matiere en effacent le  2 char finale du ch AlgebreTD => Algebre | AnalyseTD => Analyse
      const nomMatiere = matiere[0][0].substring(0, matiere[0][0].length - 2);

      // verifier si le le matiere est dans la liste des matiere niglegable
      if (listMat.includes(nomMatiere)) {
        continue;
      }

      //* determiner la coefficient d une matiere | parcours sur l objet coefLsiP1
      let coefficient = 1;
      for (const [mat, coeff] of Object.entries(coefLsiP2)) {
        if (nomMatiere === mat) {
          coefficient = coeff;
          break;
        }
      }

      //* calculer le moyenne d une matiere a l aide d appel fonction calcMoyMatiere()
      const moyMatiere: number = calcMoyMatiere(
        parseFloat(matiere[0][1]),
        parseFloat(matiere[1][1]),
        parseFloat(matiere[2][1]),
        coefficient
      );

      //* ajouter la moyenne d une matiere a l table des moyenne
      moyenneMatieres.push([nomMatiere, moyMatiere]);
    }

    //* calcule totale des moyenne
    let totalMoy = 0;
    for (let i = 0; i < moyenneMatieres.length; i++) {
      // verifier si le le matiere est dans la liste des matiere niglegable
      if (listMat.includes(moyenneMatieres[i][0])) {
        continue;
      }

      totalMoy += moyenneMatieres[i][1];

      console.log(moyenneMatieres[i]); //!debug
    }

    console.log("total des moyenne : ", totalMoy); //!debug

    console.log(data); //!debug

    //* calcule de moyenne
    const moy = totalMoy / totalCoeff;
    setMoyenne(moy ? moy.toString().substring(0, 5) : "0");

    console.log("liste des mat negligable : ", listMat); //! debug
  };

  return (
    <section className="flex flex-col items-center justify-center mt-3">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex md:flex-row flex-col  md:w-full"
      >
        <div className="flex flex-col items-center justify-center md:justify-normal">
          <InputFields
            title={"Probabilité et statistique"}
            type={"TD"}
            err={err}
            onChange={handleNoteChange}
          />
          <InputFields
            title={"Théorie des langages et des Automates "}
            type={"TD"}
            err={err}
            onChange={handleNoteChange}
          />
          <InputFields
            title={"Graphes et optimisation "}
            type={"TP"}
            err={err}
            onChange={handleNoteChange}
          />
          <InputFields
            title={"Conception des Systèmes d'Information  "}
            type={"TD"}
            err={err}
            onChange={handleNoteChange}
          />
        </div>
        <div className="flex flex-col items-center justify-center md:justify-normal">
          <InputFields
            title={"Programmation Java"}
            type={"TP"}
            err={err}
            onChange={handleNoteChange}
          />
          <InputFields
            title={"Ingénierie des Bases de Données"}
            type={"TP"}
            err={err}
            onChange={handleNoteChange}
          />
          <InputFields
            title={"Services des Réseaux "}
            type={"TP"}
            err={err}
            onChange={handleNoteChange}
          />
          <InputFields
            title={"Anglais 3"}
            type={"TD"}
            err={err}
            onChange={handleNoteChange}
          />
          <InputFields
            title={"Gestion d'entreprise"}
            type={"TP"}
            err={err}
            onChange={handleNoteChange}
          />
        </div>
        <div className="flex flex-col items-center justify-center  md:justify-normal">
          <InputFields
            title={"C++"}
            type={"TP"}
            err={err}
            onChange={handleNoteChange}
          />
          <InputFields
            title={"Electricité-Electronique"}
            type={"TP"}
            err={err}
            onChange={handleNoteChange}
          />
          <div className="flex flex-col items-center  w-96  p-5">
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
      </form>
    </section>
  );
}
