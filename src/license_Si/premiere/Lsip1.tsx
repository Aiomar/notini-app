import React, { useRef, useState } from "react";
import InputFields from "../../component/InputFields";

export default function Lsip1() {
  const [moyenne, setMoyenne] = useState("");
  const [err, setErr] = useState(["", ""]);
  //* handle note changing to correct value | remove the error

  const handleNoteChange = (matiere: string, value: string) => {
    if (value == "" || (parseFloat(value) >= 0 && parseFloat(value) <= 20)) {
      setErr(["", ""]);
    } else {
      setErr([
        matiere.substring(0, matiere.length - 2), // send the matiere name without DS |TD| EX : AlgebreDS => Algebre
        "Le note de " + matiere + " doit etre entre 0 et 20",
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
    const coeffList = {
      Algebre: 1.5,
      Analyse: 1.5,
      "Algorithmique et structure de données": 2,
      "Atelier programmation 1": 1.5,
      "Système d'exploitation 1": 1.5,
      "Systèmes Logiques & Architecture des ordinateurs": 2,
      "Logique formelle": 1.5,
      "Technologies Multimédias": 1.5,
      "Anglais 1": 1,
      "Techniques de communication 1": 1,
    };

    //* Calcule total de coefficent
    let totalCoeff = 0;
    for (const [matiere, coef] of Object.entries(coeffList)) {
      // Check if the subject is in the list of negligible subjects | These subjects do not require a grade calculation.
      if (listMat.includes(matiere)) {
        continue;
      }
      // add the coef if the matiere is valid (not in negligible list)
      totalCoeff += coef;
    }

    console.log("total coefficient = ", totalCoeff); //!debug

    //* Func to Calcule moyenne d une matiere
    const calcMoyMatiere = (
      TD: number,
      DS: number,
      EX: number,
      coef: number
    ): number => {
      return ((TD * 10 + DS * 20 + EX * 70) / 100) * coef;
    };

    // Array to save moyenne d une note
    const moyenneMatieres: [string, number][] = [];

    // Convert object into an array of entries
    const entries = Object.entries(data);

    //* calcule de moyenne d une matiere
    for (let i = 0; i < entries.length; i += 3) {
      const matiere: [string, string][] = entries.slice(i, i + 3);

      //* extraire le nom de matiere en effacent le  2 char finale du ch AlgebreTD => Algebre | AnalyseTD => Analyse
      const nomMatiere = matiere[0][0].substring(0, matiere[0][0].length - 2);

      // Check if the subject is in the list of negligible subjects
      if (listMat.includes(nomMatiere)) {
        continue;
      }

      //* determiner la coefficient d une matiere | parcours sur l objet coeffList
      let coefficient = 1;
      for (const [mat, coeff] of Object.entries(coeffList)) {
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
      //* Check if the subject is in the list of negligible subjects
      if (listMat.includes(moyenneMatieres[i][0])) {
        continue;
      }

      totalMoy += moyenneMatieres[i][1];

      console.log(moyenneMatieres[i]); //!debug
    }

    console.log("total des moyenne : ", totalMoy); //!debug

    console.log(data); //!debug

    //*** Calcule de moyenne
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
            title={"Algebre"}
            type={"TD"}
            err={err}
            onChange={handleNoteChange}
          />
          <InputFields
            title={"Analyse"}
            type={"TD"}
            err={err}
            onChange={handleNoteChange}
          />
          <InputFields
            title={"Algorithmique et structure de données"}
            type={"TD"}
            err={err}
            onChange={handleNoteChange}
          />
          <InputFields
            title={"Techniques de communication 1"}
            type={"TD"}
            err={err}
            onChange={handleNoteChange}
          />
        </div>
        <div className="flex flex-col items-center justify-center md:justify-normal">
          <InputFields
            title={"Atelier programmation 1"}
            type={"TD"}
            err={err}
            onChange={handleNoteChange}
          />
          <InputFields
            title={"Système d'exploitation 1"}
            type={"TD"}
            err={err}
            onChange={handleNoteChange}
          />
          <InputFields
            title={"Systèmes Logiques & Architecture des ordinateurs"}
            type={"TD"}
            err={err}
            onChange={handleNoteChange}
          />
        </div>
        <div className="flex flex-col items-center justify-center  md:justify-normal">
          <InputFields
            title={"Logique formelle"}
            type={"TD"}
            err={err}
            onChange={handleNoteChange}
          />
          <InputFields
            title={"Technologies Multimédias"}
            type={"TD"}
            err={err}
            onChange={handleNoteChange}
          />
          <InputFields
            title={"Anglais 1"}
            type={"TD"}
            err={err}
            onChange={handleNoteChange}
          />
          <div className="flex flex-col items-center p-5">
            <button
              type="submit"
              className="w-56 focus:outline-none text-white bg-green-700 hover:bg-green-800
             focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5
              me-2 mb-5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Calculer Moyenne
            </button>
            <div className="flex flex-col w-56">
              <label className="text-lg text-gray-400">
                {err[1] !== "" ? (
                  <p className="text-red-500">Erreur : {err[1].toString()}</p>
                ) : (
                  <div className="flex flex-row ml-4">
                    <p> Votre Moyenne est :</p>
                    <p className="text-black ml-1">{moyenne}</p>
                  </div>
                )}
              </label>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
//todo :
/*prevent the moyenne calculation from happening when the user changes 
another input field unless all inputs are valid or empty*/
