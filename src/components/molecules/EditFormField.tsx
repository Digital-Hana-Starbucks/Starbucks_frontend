import React, { useEffect, useRef, useState } from "react";

interface Props<T> {
  label: string;
  value: T;
  onChange: (value: T) => void;
  onImageChange?: (img: File | undefined) => void;
  type?: string;
  editable?: boolean;
}

const EditFormField: React.FC<Props<any>> = ({
  label,
  value,
  onChange,
  onImageChange,
  type = "text",
  editable = true,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    if (typeof value === "string" && value.startsWith("http")) {
      setImageUrl(value);
    }
  }, [value]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const img = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageSrc = event.target?.result as string;
        setImageUrl(imageSrc);
        onChange(imageSrc as any);
        if (onImageChange) {
          onImageChange(img);
        }
      };
      reader.readAsDataURL(img);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    onChange(e.target.value as any);
  };

  const openFilePicker = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div className="flex items-center border">
      <label
        className="block text-gray-700 text-sm font-bold mb-2 mr-4 p-2"
        style={{ width: "20%" }}
      >
        {label}
      </label>
      <div className="border-l pl-2 p-2 flex-grow">
        {" "}
        {/* modified */}
        {type === "textarea" ? (
          <textarea
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              editable ? "" : "bg-gray-200"
            }`}
            value={value}
            onChange={handleChange}
            readOnly={!editable}
          />
        ) : (
          <div className="flex items-center w-full">
            {imageUrl ? (
              <>
                <img src={imageUrl} alt="image" className="h-16 w-16 mr-2" />
                {editable && (
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font py-2 px-4 rounded"
                    onClick={openFilePicker}
                  >
                    변경
                  </button>
                )}
              </>
            ) : (
              <input
                type="text"
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  editable ? "" : "bg-gray-200"
                }`}
                value={value}
                readOnly={!editable}
                onChange={handleChange}
              />
            )}
          </div>
        )}
        <input
          type="file"
          ref={inputRef}
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
      </div>
    </div>
  );
};

export default EditFormField;
