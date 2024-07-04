import React from 'react';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Tampilan3 = () => {
  const location = useLocation();
  
  // Ambil data dari location.state atau gunakan nilai default
  const winner = location.state?.winner || 'No Winner';
  const skorTimA = location.state?.skorTimA || 0;
  const skorTimB = location.state?.skorTimB || 0;
  const tim1 = location.state?.tim1 || 'Tim A';
  const tim2 = location.state?.tim2 || 'Tim B';

  return (
    <div className="container mt-5 text-center" style={{ backgroundColor: '#222831', minHeight: '100vh', paddingTop: '100px' }}>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card text-center" style={{ backgroundColor: '#393e46', color: '#eeeeee', border: 'none' }}>
            <div className="card-body">
              <h1 className="card-title mb-4" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>🏆 Pemenang Pertandingan 🏆</h1>
              <p className="card-text mb-4" style={{ fontSize: '1.5rem' }}>
                Pemenang Pertandingan Adalah <span className="fw-bold" style={{ color: '#00adb5' }}>Tim {winner}</span>
              </p>
              <p className="card-text mb-4" style={{ fontSize: '1.2rem' }}>
                Skor Akhir:
              </p>
              <p className="card-text mb-4" style={{ fontSize: '1.2rem' }}>
                {tim1}: <span className="fw-bold" style={{ color: '#00adb5' }}>{skorTimA}</span> - {tim2}: <span className="fw-bold" style={{ color: '#00adb5' }}>{skorTimB}</span>
              </p>
              <a href="/" className="btn btn-light btn-lg mt-3">Kembali ke Home</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
