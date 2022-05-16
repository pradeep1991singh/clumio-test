import React from "react";

const Select = ({ label, name, options, onChange }) => {
  return (
    <>
      {label && (
        <label className="block dark:bg-gray-900 dark:text-gray-500">
          {label}
        </label>
      )}
      <select
        className="block dark:bg-gray-900 dark:text-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow focus:outline-none focus:shadow-outline w-56"
        name={name}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.id}>{option.name}</option>
        ))}
      </select>
    </>
  );
};

export default Select;
