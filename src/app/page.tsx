"use client"

import { Modal } from "@/components/Modal";
import { ImgItem } from "@/components/imgItem";
import { images } from "@/data/images";
import { useState } from "react";

const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [imageOfModal, setImageOfModal] = useState('');

  const openModal = (id: number) => {
    const image = images.find(item => item.id === id);
    if(image) {
      setImageOfModal(image.url);
      setShowModal(true);
    }
  }

  const closeModal = () => {
    setShowModal(false)
  }

return (
  <>
  <div className= "w-full h-full bg-gray-900 flex flex-col items-center ">
  <p className= "font-bold text-white text-lg md:text-3xl pt-10 pb-5">Fotos Intergalacticas</p>
    
    <section className= "flex flex-col items-center w-11/12">

    <div className= "flex flex-row flex-wrap w-full justify-between">
    {images.map (item => (
      <ImgItem
      key={item.id}
      imagem={item}
      onClick={() => openModal(item.id)}
      
      />
    ))}
    </div>



    </section>

    {showModal && 
      <Modal 
      image= {imageOfModal}
      closeModal={closeModal}
      />
    }





  </div> 
  </>
)
}

export default Page;