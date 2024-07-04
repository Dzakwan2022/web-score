import { useEffect, useState } from 'react';
import './App.css';
import './index.css';

function App() {
  const [skorTimA, setSkorTimA] = useState(0);
  const [skorTimB, setSkorTimB] = useState(0);
  const [waktu, setWaktu] = useState({ detik: 0, menit: 0 });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setWaktu(prevWaktu => {
          const { detik, menit } = prevWaktu;
          if (detik === 59) {
            return { detik: 0, menit: menit + 1 };
          } else {
            return { detik: detik + 1, menit: menit };
          }
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  function tambahSkorTimA() {
    setSkorTimA(skorTimA + 1);
  }

  function kurangSkorTimA() {
    setSkorTimA(skorTimA - 1);
  }

  function tambahSkorTimB() {
    setSkorTimB(skorTimB + 1);
  }

  function kurangSkorTimB() {
    setSkorTimB(skorTimB - 1);
  }

  function reset() {
    setSkorTimA(0);
    setSkorTimB(0);
    setWaktu({ detik: 0, menit: 0 });
    setIsRunning(false);
  }

  function mulaiTimer() {
    setIsRunning(true);
  }

  function stopTimer() {
    setIsRunning(false);
  }

  return (
    <>
      <div className='text-white text-center' style={{ backgroundColor: '#222831', minHeight: '100vh' }}>
        <h1 style={{ fontFamily: 'times-new-roman' }}>JABON SOCCER STREET</h1>

        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <h4>Tim A</h4>
              <button className='btn btn-light mr-2 mx-2' onClick={kurangSkorTimA}>-</button>
              <span>{skorTimA}</span>
              <button className='btn btn-light ml-2 mx-2' onClick={tambahSkorTimA}>+</button>
            </div>

            <div className="col">
              <h5>VS</h5>
            </div>

            <div className="col">
              <h4>Tim B</h4>
              <button className='btn btn-light mr-2 mx-2' onClick={kurangSkorTimB}>-</button>
              <span>{skorTimB}</span>
              <button className='btn btn-light ml-2 mx-2' onClick={tambahSkorTimB}>+</button>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col">
              <h4>Waktu Permainan</h4>
              <span>{`${waktu.menit.toString().padStart(2, '0')}:${waktu.detik.toString().padStart(2, '0')}`}</span>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col">
              <button className='btn btn-primary mr-2 mx-2' onClick={mulaiTimer}>Mulai</button>
              <button className='btn btn-danger mr-2 mx-2' onClick={reset}>Reset</button>
              <button className='btn btn-warning mr-2 mx-2' onClick={stopTimer}>Berhenti</button>
              <button className='btn btn-success mx-2' onClick={reset}>Selesai</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
