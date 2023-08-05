import React, {useState, useEffect, useCallback} from 'react';
import './App.css';
import Header from './components/Header/Header';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/all';
import MainPage from './components/MainPage.tsx/MainPage';

gsap.registerPlugin(ScrollToPlugin);

interface WheelEventWithDelta {
  deltaY: number;
}

function App() {

  const smoothScroll2 = (e: WheelEventWithDelta) => {
    const deltaY = e.deltaY;
    const direction = deltaY > 0 ? 1 : -1; // 1 - вниз, -1 - вверх
    console.log(deltaY)
    gsap.registerPlugin(ScrollToPlugin);
    gsap.to(window, {
      duration: 1,
      effects: true,
      scrollTo: {
        y: `+=${direction * 500}`, // Количество пикселей для прокрутки (вниз или вверх)
        autoKill: false,
      },
    });
  };

  useEffect(() => {
    const handleWheel = (e: WheelEventWithDelta) => {
      smoothScroll2(e);
      
    };
    
    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);






  return (
    
    <div className="App">

      <Header></Header>
      <MainPage></MainPage>
      

   
      



      

    

    </div>
  );

  }

export default App;
