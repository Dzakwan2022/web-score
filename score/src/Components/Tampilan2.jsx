import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Tampilan2 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [skorTimA, setSkorTimA] = useState(0);
  const [skorTimB, setSkorTimB] = useState(0);
  const [waktu, setWaktu] = useState({ detik: 0, menit: location.state?.time || 0 });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setWaktu(prevWaktu => {
          const { detik, menit } = prevWaktu;
          if (detik === 0) {
            if (menit === 0) {
              clearInterval(timer);
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
  }, [isRunning]);

  const determineWinner = () => {
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
  };

  function Tombol({ title, onClick }) {
    return (
      <button className="btn btn-secondary mx-1" onClick={onClick}>
        {title}
      </button>
    );
  }

  Tombol.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

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
    <div className='text-white text-center' style={{ backgroundColor: '#222831', minHeight: '100vh' }}>
      <h1 style={{ fontFamily: 'times-new-roman' }}>{name}</h1>

      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <h4>{tim1}</h4>
            <Tombol title="-" onClick={kurangSkorTimA} />
            <span>{skorTimA}</span>
            <Tombol title="+" onClick={tambahSkorTimA} />
          </div>

          <div className="col">
            <h5>VS</h5>
          </div>

          <div className="col">
            <h4>{tim2}</h4>
            <Tombol title="-" onClick={kurangSkorTimB} />
            <span>{skorTimB}</span>
            <Tombol title="+" onClick={tambahSkorTimB} />
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
            <Tombol title="Mulai" onClick={mulaiTimer} />
            <Tombol title="Reset" onClick={reset} />
            <Tombol title="Berhenti" onClick={stopTimer} />
            <Tombol title="Selesai" onClick={() => { stopTimer(); determineWinner(); }} />
          </div>
        </div>
      </div>
    </div>
  );
};
