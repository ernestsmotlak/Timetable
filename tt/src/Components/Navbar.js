import React from 'react'
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const goBack = () => {
        try {
            navigate(-1);
        } catch (error) {
            navigate('/');
        }
    };

    return (
        <div>
            <nav className="navbar sticky-top bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand fs-2 fw-bold" href="/">Avtobusni prevozi Koper</a>
                    <a className="navbar-brand fs-1 fw-bold my-button" ><button type="button" className="btn custom-btn-navbar" onClick={goBack}><i className="bi bi-arrow-left-square-fill"></i></button></a>
                    {/* <button className='button-place btn btn-dark'><i className="bi bi-arrow-left-square-fill"></i></button> */}
                </div>
            </nav>
        </div>

    )
}

export default Navbar