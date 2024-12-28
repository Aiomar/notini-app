import React from "react";

interface InputFieldsProps {
  title: string;
  type: string;
  err: string[];
  onChange: (matiere: string, value: string) => void;
}

export default function InputFields({
  title,
  type,
  err,
  onChange,
}: InputFieldsProps) {
  //* handle changing input value
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const matiere = title + type;
    onChange(matiere, value);
  };

  console.log(" child err = ", err); //!debug

  //div className
  let classDiv =
    "flex flex-col items-center justifiy-center md:ml-10 border border-gray-300 p-2 rounded-lg mb-10 w-80 md:w-fit";

  // Find the error message corresponding to the title
  const errorMessage = Array.isArray(err) && err[0] === title ? err[1] : "";

  // check if there is an errorMessage and change the border color
  classDiv = errorMessage != "" ? classDiv + "border border-red-400" : classDiv;

  console.log("errorMessage  = ", errorMessage); //!debug
  return (
    <div className={classDiv}>
      <label
        htmlFor={title}
        className="block mb-3 text-md font-medium text-gray-900"
      >
        {title}
      </label>
      <div id={title} className="mb-5">
        <label
          htmlFor="base-input"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          {type === "TD" ? "TD" : "TP"}
          {" **note continue"}
        </label>
        <input
          type="text"
          id={title + type}
          name={title + type}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
          rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-96 p-2.5"
          onChange={handleChange}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="base-input"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          DS
        </label>
        <input
          type="text"
          id={title + "DS"}
          name={title + "DS"}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
          rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-96 p-2.5"
          onChange={handleChange}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="base-input"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Examan
        </label>
        <input
          type="text"
          id={title + "EX"}
          name={title + "EX"}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
          rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-96 p-2.5"
          onChange={handleChange}
        />
      </div>
      {errorMessage && (
        <label htmlFor="" className="text-red-500 text-sm">
          {errorMessage}
        </label>
      )}
    </div>
  );
}
