import React from "react";

const AdminNav: React.FC<{
  id: string;
  label: string;
  checked: boolean;
  onChange: () => void;
}> = ({ id, label, checked, onChange }) => {
  return (
    <div>
      <input
        type="radio"
        id={id}
        name="page"
        className="hidden peer"
        value={id}
        checked={checked}
        onChange={onChange}
      />
      <label
        className={`inline-block py-2 px-4 rounded-lg cursor-pointer text-sm ${
          checked
            ? "bg-starbucksGreen text-white"
            : "bg-white text-starbucksGreen border border-starbucksGreen"
        }`}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default AdminNav;
