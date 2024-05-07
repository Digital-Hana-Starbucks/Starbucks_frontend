import React, { useState, useEffect } from "react";
import EditFormField from "../molecules/EditFormField";
import TableButton from "../molecules/TableButton";

interface LabelInfo {
  key: string;
  label: string;
  editable: boolean;
}

interface Props {
  data: any;
  onSave: (updatedData: any, img: File | undefined) => void;
  labels: LabelInfo[];
}

const EditForm: React.FC<Props> = ({ data, onSave, labels }) => {
  const [formData, setFormData] = useState<any>(data || {});
  const [newMenuImg, setNewMenuImg] = useState<File | undefined>(undefined);

  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data]);

  const handleChange = (field: string, value: any) => {
    setFormData((prevData: any) => ({ ...prevData, [field]: value }));
  };

  const handleImageChange = (img: File | undefined) => {
    setNewMenuImg(img);
  };

  const handleSave = () => {
    onSave(formData, newMenuImg);
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
            onImageChange={
              labelInfo.key === "menuImage" ? handleImageChange : undefined
            }
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
