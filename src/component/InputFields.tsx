interface InputFieldsProps {
  title: string;
  type: string;
}

export default function InputFields({ title, type }: InputFieldsProps) {
  return (
    <div className="flex flex-col md:ml-10 border p-2 rounded-lg mb-2 w-fit ">
      <label
        htmlFor={title}
        className="block mb-3 text-md font-medium text-gray-900 "
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
          rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5"
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
          rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5"
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
          rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5"
        />
      </div>
    </div>
  );
}
