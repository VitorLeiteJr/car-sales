import React, { useState } from "react";

interface ImagePreview {
  id: number;
  src: string;
}

const MultiImageUploader: React.FC = () => {
  const [images, setImages] = useState<ImagePreview[]>([]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files) {
      const newImages = Array.from(files).map((file, index) => {
        const id = new Date().getTime() + index; // Unique ID for each file
        const src = URL.createObjectURL(file);
        return { id, src };
      });

      setImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  const handleRemoveImage = (id: number) => {
    setImages((prevImages) => prevImages.filter((image) => image.id !== id));
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <label className="block mb-4">
        <span className="text-gray-700">Upload Images</span>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
          className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </label>

      <div className="grid grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image.id} className="relative group">
            <img
              src={image.src}
              alt="Uploaded Preview"
              className="w-full h-auto rounded shadow"
            />
            <button
              onClick={() => handleRemoveImage(image.id)}
              className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full text-xs opacity-0 group-hover:opacity-100"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiImageUploader;