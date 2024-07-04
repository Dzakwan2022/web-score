import { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Home = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');

    const handleSubmit = () => {
        if (name) {
            navigate('/tampilan1', { state: { name } });
        } else {
            alert('Nama acara harus diisi!');
        }
    };

    return (
        <div className="container mt-5 text-center">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card p-4" style={{ backgroundColor: '#393e46', color: '#eeeeee', border: 'none' }}>
                        <div className="card-body">
                            <h1 className="card-title mb-4" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Selamat Datang di Aplikasi Pertandingan</h1>
                            <p className="card-text mb-4" style={{ fontSize: '1.2rem' }}>Masukkan nama acara Anda untuk memulai pertandingan.</p>
                            <input
                                type="text"
                                name="judul"
                                className="form-control form-control-lg mb-3"
                                placeholder="Masukan Nama Acara Kalian"
                                onChange={(event) => setName(event.target.value)}
                                value={name}
                            />
                            <button
                                className="btn btn-primary btn-lg"
                                onClick={handleSubmit}
                                style={{ backgroundColor: '#00adb5', borderColor: '#00adb5' }}
                            >
                                Mulai
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
