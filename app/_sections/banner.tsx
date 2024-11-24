import React from 'react'

const Banner = () => {
  return (
    <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('/lamb.jpg')" }}>
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="container mx-auto relative z-10 text-center text-white py-20">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Bem-vindo ao Auto Club</h1>
      <p className="text-lg md:text-xl mb-6">
        Linha premium de automoveis de alta qualidade
      </p>
      <button className="px-6 py-3 bg-primary hover:bg-primary-hover  text-white rounded">
        Saiba mais
      </button>
    </div>
  </div>
  )
};

export default Banner
