import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Home() {
  const [navTextColor, setNavTextColor] = useState('white');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavTextColor('black');
      } else {
        setNavTextColor('white');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Hero Section (Centered) */}
      <section 
        className="relative h-screen w-full flex items-center justify-center text-center px-4 pt-20"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/30403731/pexels-photo-30403731/free-photo-of-tenerife-deki-teide-dagi-nin-gun-batimi-manzarasi.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        
        <div className="relative z-10 text-white max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg"
          >
            PurifyMe
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-3xl mb-8 drop-shadow-md"
          >
            Canlı Beden, Saf Zihin, Özgür Ruh
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl mb-10 max-w-2xl mx-auto"
          >
            Modern yaşamın kaosunda kendi içinizdeki huzuru bulmak için bütünsel bir arınma yolculuğuna çıkın.
          </motion.p>
          
          <Link 
            to="/register" 
            className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all hover:-translate-y-1 shadow-lg text-lg"
          >
            Hadi Başla!
          </Link>
        </div>
      </section>

      {/* Physical Cleansing - Image Left */}
      <motion.section 
        className="py-16 px-4 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image on LEFT */}
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Fiziksel Arınma" 
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>
          
          {/* Content on RIGHT */}
          <div className="w-full md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Fiziksel Arınma</h2>
            <p className="text-gray-600 mb-4">
              Bedeninizi toksinlerden arındırarak enerji seviyenizi yükseltin. Doğal yaşam ritminizi yeniden keşfedin.
            </p>
            <p className="text-gray-600 mb-6">
              Uzmanlar eşliğinde organik beslenme ve egzersiz programlarıyla bedeninizi yenileyin.
            </p>
            <Link 
              to="/physical-cleansing" 
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all"
            >
              Detaylı Keşfet
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Mental Cleansing - Image Left */}
      <motion.section 
        className="py-16 px-4 max-w-7xl mx-auto bg-gray-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image on LEFT */}
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Zihinsel Arınma" 
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>
          
          {/* Content on RIGHT */}
          <div className="w-full md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Zihinsel Arınma</h2>
            <p className="text-gray-600 mb-4">
              Stres ve kaygılarından uzaklaşarak zihinsel netliğe kavuşun. Meditasyon ve nefes teknikleri ile zihninizi berraklaştırın.
            </p>
            <p className="text-gray-600 mb-6">
              Zihin bulanıklığını gidermek ve odaklanma gücünüzü artırmak için programlarımıza katılın.
            </p>
            <Link 
              to="/mental-cleansing" 
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all"
            >
              Detaylı Keşfet
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Spiritual Cleansing - Image Left */}
      <motion.section 
        className="py-16 px-4 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image on LEFT */}
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Ruhsal Arınma" 
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>
          
          {/* Content on RIGHT */}
          <div className="w-full md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Ruhsal Arınma</h2>
            <p className="text-gray-600 mb-4">
              İçsel huzuru keşfedin ve ruhsal bağlantınızı güçlendirin. Günlük yaşamın koşuşturmasında kaybolan benliğinizi bulun.
            </p>
            <p className="text-gray-600 mb-6">
              Kişisel değerlerinizle uyumlu yaşamak ve iç sesinizi dinlemeyi öğrenmek için rehberlik ediyoruz.
            </p>
            <Link 
              to="/spiritual-cleansing" 
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all"
            >
              Detaylı Keşfet
            </Link>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hayatınızı Dönüştürmeye Hazır mısınız?</h2>
          <p className="text-lg mb-6">
            Bugün başlayın ve kendinizdeki değişimi hissedin!
          </p>
          <Link 
            to="/register" 
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-md"
          >
            Hemen Kaydol
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;