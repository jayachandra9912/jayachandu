import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

const images = [
  `${process.env.PUBLIC_URL}/images/1.jpg`,
  `${process.env.PUBLIC_URL}/images/2.jpg`,
  `${process.env.PUBLIC_URL}/images/3.jpg`,
  `${process.env.PUBLIC_URL}/images/4.png`,
  `${process.env.PUBLIC_URL}/images/5.jpg`,
  `${process.env.PUBLIC_URL}/images/6.png`,
  `${process.env.PUBLIC_URL}/images/7.jpg`,
  `${process.env.PUBLIC_URL}/images/8.jpg`,
  `${process.env.PUBLIC_URL}/images/9.jpg`,
  `${process.env.PUBLIC_URL}/images/10.jpg`,
  `${process.env.PUBLIC_URL}/images/12.jpg`,
];

const App = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-16 h-16 bg-white/20 rounded-full"
            initial={{ y: '100vh', x: `${Math.random() * 100}vw` }}
            animate={{ y: '-10vh' }}
            transition={{ duration: Math.random() * 5 + 3, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="max-w-xl w-full text-center bg-white/30 backdrop-blur-lg mx-4 p-6 ml-10 mr-10 rounded-3xl shadow-2xl border border-white/50 z-10"
        whileHover={{ rotate: 3 }}
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Happy Birthday, My Love! ❤️
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl mb-8 leading-relaxed"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          On this special day, I want you to know how much you mean to me.  May your birthday be as amazing as you are!
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.button 
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="bg-gradient-to-r from-pink-600 to-red-500 hover:from-pink-700 hover:to-red-600 p-4 rounded-xl shadow-xl text-lg font-semibold transition-all"
          >
            I Love You 💖
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1, rotate: -5 }}
            className="bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-700 hover:to-indigo-600 p-4 rounded-xl shadow-xl text-lg font-semibold transition-all"
          >
            Forever & Always 💞
          </motion.button>
        </div>
        <motion.div 
          className="mt-8 text-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          🎉 Let's make this day unforgettable! 🎉
        </motion.div>
        <div className="mt-8">
          <Slider {...sliderSettings}>
            {images.map((img, index) => (
              <div key={index}>
                <img src={img} alt={`Memory ${index + 1}`} className="rounded-xl shadow-xl w-full h-64 md:h-96 object-cover" />
              </div>
            ))}
          </Slider>
        </div>
        <h1 className='mt-8'>Made in 💗 with Chandana</h1>
      </motion.div>
    </div>
  );
};

const WrappedApp = () => (
  <BrowserRouter basename="/jayachandu">
    <App />
  </BrowserRouter>
);

export default WrappedApp;
