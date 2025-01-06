"use client"
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaUpload } from "react-icons/fa";



//this script was generate by chatGPT and edited by vitor

interface MultiImageUploaderProps{
  id: string;
};



const MainImageUpload = ({id}: MultiImageUploaderProps) => {

  const [images, setImages] = useState<ImagePreview[]>([]);
  const [srcImage, setSrcImage] = useState<string>("");



  const getImages = async() => {
        
    const imgs = await axios.post("/api/images",{id});
    setImages(imgs.data.mainImage);
    console.log(imgs.data.mainImage)
     
   };

   useEffect(()=>{
    getImages();
   },[]);

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    
   
    const files = event.target.files;

    const formData = new FormData();
    formData.append('file', files![0]);
    formData.append('id', id);
    formData.append('type', "main");

    const uploadLocal = await axios.post("/api/images/upload",formData);
    console.log(uploadLocal.data.path);
    setSrcImage(uploadLocal.data.path);


    if (files) {
      const newImages = Array.from(files).map((file, index) => {

        
        const id = uploadLocal.data.path; 
        const src = URL.createObjectURL(file);

        return { id, src };
      });

      setImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  const handleRemoveImage = async (id: number) => {
    setImages((prevImages) => prevImages.filter((image) => image.id !== id));
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <label className="block mb-4">
        <div className="cursor-pointer hover:text-primary-hover flex gap-2">
        <FaUpload />
          <label className="cursor-pointer" htmlFor="maininputImages">Clique aqui para carregar a imagem padrão</label>
          <input className="hidden" name="srcImage" defaultValue={srcImage}></input>
        <input
          id="maininputImages"
         title="Carregar images"
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
          className="hidden"
         // className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2
           //file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold
            //file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        </div>
      </label>

      <div className="grid grid-cols-3 gap-4">
        {images.map((image,index) => (
          <div key={index} className="relative group">
            <img
              src={image.src}
              alt="Uploaded Preview"
              className="w-full h-auto rounded shadow"
            />
            <button
              onClick={() => handleRemoveImage(image.id)}
              className="absolute top-1 right-1 bg-red-500 text-white p-1 
              rounded-full text-xs opacity-0 group-hover:opacity-100"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainImageUpload;