import React, { useState } from "react";
import EditFormField from "../molecules/EditFormField";
import TableButton from "../molecules/TableButton";

interface Props {
  data: any;
  onSave: (updatedData: any) => void;
  labels: { key: string; label: string; editable: boolean }[];
}

const EditForm: React.FC<Props> = ({ data, onSave, labels }) => {
  const [formData, setFormData] = useState(data);

  const handleChange = (field: string, value: any) => {
    setFormData((prevData: any) => ({ ...prevData, [field]: value }));
  };

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <div>
      <div className="p-2 m-2">
        {labels.map((labelInfo, index) => (
          <EditFormField
            key={index}
            label={labelInfo.label}
            value={formData[labelInfo.key]}
            editable={labelInfo.editable}
            onChange={(value: any) => handleChange(labelInfo.key, value)}
          />
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <TableButton
          className="bg-blue-500 hover:bg-blue-700 text-white font py-2 px-2 m-2 rounded"
          onClick={handleSave}
        >
          수정하기
        </TableButton>

        <TableButton
          className="bg-red-500 hover:bg-red-700 text-white font py-2 px-2 m-2 rounded"
          onClick={() => window.history.back()}
        >
          취소
        </TableButton>
      </div>
    </div>
  );
};

export default EditForm;
