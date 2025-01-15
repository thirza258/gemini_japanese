import React, { useEffect, useState } from 'react';
import Translator from './components/ChatPage';
import background1 from './assets/image1.png';
import background2 from './assets/image2.png';
import background3 from './assets/image3.png';

function App() {
  const backgrounds = [background1, background2, background3];
  const [background, setBackground] = useState('');

  useEffect(() => {
    // Randomly select a background
    const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    setBackground(randomBackground);
  }, []); // Empty dependency array to run only once on component mount

  return (
    <main
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <div className='p-4 bg-white h-screen bg-opacity-75'>
      <Translator />
      </div>
      
    </main>
  );
}

export default App;
