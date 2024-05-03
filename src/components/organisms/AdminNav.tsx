import React from "react";

const AdminNav: React.FC<{
  id: string;
  label: string;
  checked: boolean;
  onChange: () => void;
}> = ({ id, label, checked, onChange }) => {
  return (
    <div className="admin-nav-item flex mr-4">
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
        className={`admin-nav-label inline-block py-2 px-4 rounded-lg cursor-pointer ${
          checked
            ? "bg-green-500 text-white"
            : "bg-white text-green-700 border border-green-500"
        }`}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default AdminNav;
