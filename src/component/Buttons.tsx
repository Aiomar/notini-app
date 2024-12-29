import { useState } from "react";

interface ButtonsProps {
  onActivate: (state : boolean)=>void,
}

export default function Buttons({onActivate}:ButtonsProps) {
  const [activeB1, setActiveB1] = useState(true);
  const [activeB2, setActiveB2] = useState(false);

  const updateActive = () => {
    if (!activeB1) {
      setActiveB1(true);
      setActiveB2(false);
      onActivate(true);
    } else {
      setActiveB1(false);
      setActiveB2(true);
      onActivate(false);
    }
  };

  return (
    <div className="flex flex-row items-center justify-center">
      <button
        onClick={updateActive}
        className={
          !activeB1
            ? "border p-2 mt-2 rounded-lg bg-slate-200 "
            : "border p-2 mt-2 rounded-lg bg-green-200 outline outline-green-300"
        }
      >
        <p className="font-semibold">Semestre 1</p>{" "}
      </button>
      <button
        onClick={updateActive}
        className={
          !activeB2
            ? "border p-2 mt-2 rounded-lg bg-slate-200 ml-5"
            : "border p-2 mt-2 rounded-lg bg-green-200 ml-5 outline outline-green-300"
        }
      >
        <p className="font-semibold">Semestre 2</p>
      </button>
    </div>
  );
}
