import { useEffect, useState, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Tampilan2 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [skorTimA, setSkorTimA] = useState(0);
  const [skorTimB, setSkorTimB] = useState(0);
  const [waktu, setWaktu] = useState({ detik: 0, menit: location.state?.time || 0 });
  const [isRunning, setIsRunning] = useState(false);

  const determineWinner = useCallback(() => {
    const { tim1, tim2 } = location.state || {};
    let winner;
    if (skorTimA > skorTimB) {
      winner = tim1;
    } else if (skorTimA < skorTimB) {
      winner = tim2;
    } else {
      winner = 'Draw';
    }
    navigate('/tampilan3', { state: { winner, skorTimA, skorTimB, tim1, tim2 } });
  }, [skorTimA, skorTimB, location.state, navigate]);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setWaktu(prevWaktu => {
          const { detik, menit } = prevWaktu;
          if (detik === 0) {
            if (menit === 0) {
              clearInterval(timer);
              setIsRunning(false);
              determineWinner();
              return { detik: 0, menit: 0 };
            } else {
              return { detik: 59, menit: menit - 1 };
            }
          } else {
            return { detik: detik - 1, menit: menit };
          }
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, determineWinner]);

  function tambahSkorTimA() {
    setSkorTimA(prevSkor => prevSkor + 1);
  }

  function kurangSkorTimA() {
    setSkorTimA(prevSkor => (prevSkor > 0 ? prevSkor - 1 : 0));
  }

  function tambahSkorTimB() {
    setSkorTimB(prevSkor => prevSkor + 1);
  }

  function kurangSkorTimB() {
    setSkorTimB(prevSkor => (prevSkor > 0 ? prevSkor - 1 : 0));
  }

  function reset() {
    setSkorTimA(0);
    setSkorTimB(0);
    setWaktu({ detik: 0, menit: location.state?.time || 0 });
    setIsRunning(false);
  }

  function mulaiTimer() {
    setIsRunning(true);
  }

  function stopTimer() {
    setIsRunning(false);
  }

  const { name, tim1, tim2 } = location.state || {};

  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-white"
      style={{ backgroundColor: '#222831', minHeight: '100vh', paddingTop: '20px', paddingBottom: '70px' }}>
      <h1 style={{fontWeight: 'bold', fontFamily: 'segoe-ui' }}>{name}</h1>
      <div className="container text-center">
        <div className="row align-items-center mb-3">
          <div className="col">
            <h4 style={{fontFamily: 'calibri'}}>{tim1}</h4>
            <button className='btn btn-light mr-2 mx-2' onClick={kurangSkorTimA}>-</button>
            <span>{skorTimA}</span>
            <button className='btn btn-light ml-2 mx-2' onClick={tambahSkorTimA}>+</button>
          </div>
          <div className="col">
            <h5 style={{fontFamily: 'calibri'}}>VS</h5>
          </div>
          <div className="col">
            <h4 style={{fontFamily: 'calibri'}}>{tim2}</h4>
            <button className='btn btn-light mr-2 mx-2' onClick={kurangSkorTimB}>-</button>
            <span>{skorTimB}</span>
            <button className='btn btn-light ml-2 mx-2' onClick={tambahSkorTimB}>+</button>
          </div>
        </div>
        <div className="row align-items-center mb-3">
          <div className="col">
            <h4 style={{fontFamily: 'calibri'}}>Waktu Permainan</h4>
            <span style={{fontFamily: 'calibri'}}>{`${waktu.menit.toString().padStart(2, '0')}:${waktu.detik.toString().padStart(2, '0')}`}</span>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col">
            <button className='btn btn-primary mr-2 mx-2' onClick={mulaiTimer}>Mulai</button>
            <button className='btn btn-danger mr-2 mx-2' onClick={reset}>Ulang</button>
            <button className='btn btn-warning mr-2 mx-2' onClick={stopTimer}>Berhenti</button>
            <button className='btn btn-success mx-2' onClick={() => { stopTimer(); determineWinner(); }}>Selesai</button>
          </div>
        </div>
      </div>
    </div>
  );
};
