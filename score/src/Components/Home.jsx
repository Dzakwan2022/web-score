import { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "reactstrap";

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
    <Container fluid style={{ backgroundColor: '#222831', minHeight: '100vh', paddingTop:'100px'}}>
        <div className="container mt-5 text-center">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card p-4" style={{ backgroundColor: '#393e46', color: '#eeeeee', border: 'none' }}>
                        <div className="card-body">
                            <h1 className="card-title mb-4" style={{ fontWeight: 'bold', fontFamily: 'segoe-ui' }}>Selamat Datang di Aplikasi Score Match</h1>
                            <p className="card-text mb-4" style={{ fontSize: '1.2rem', fontFamily: 'calibri' }}>Masukkan nama acara Anda untuk memulai pertandingan.</p>
                            <input
                                type="text"
                                name="judul"
                                className="form-control form-control-lg mb-3"
                                placeholder="Masukan Nama Pertandingan"
                                onChange={(event) => setName(event.target.value)}
                                value={name}
                            />
                            <button
                                className="btn btn-primary btn-lg"
                                onClick={handleSubmit}
                            >
                                Mulai
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Container>
    );
};
