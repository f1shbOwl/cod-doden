import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [timeLeft, setTimeLeft] = useState<string>('');

  useEffect(() => {
    const targetDate = new Date('2024-11-22T22:00:00+01:00'); // 23:00 GMT+1 (22:00 UTC)
    
    const calculateTimeLeft = (): void => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft(`${days}d ${hours}t ${minutes}m ${seconds}s`);
      } else {
        setTimeLeft('GAME OVER');
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer); // Rensa intervallet vid komponentens unmount
  }, []);

  return (
    <div className="App">
        <h1 className="lost">Countdown till CoD-Döden</h1>
        <div className="container">
          <h2 className="note">{timeLeft}</h2>
          <section>
            <div className='blooddrop'></div>
            <div className='blooddrop'></div>
            <div className='blooddrop'></div>
            <div className='blooddrop'></div>
            <div className='blooddrop'></div>
            <div className='blooddrop'></div>
            <div className='blooddrop'></div>
            <div className='blooddrop'></div>
            <div className='blooddrop'></div>
            <div className='blooddrop'></div>
          </section>
        </div>      
    </div>
  );
}

export default App;
