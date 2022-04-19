import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login')
    }
    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center' }}>Please Register</h2>
            <form >
                <input type="text" name="name" id="" placeholder='Your Name' />

                <input type="email" name="email" id="" placeholder='Email Address' required />

                <input type="password" name="password" id="" placeholder='Password' required />
                <input type="checkbox" name="terms" id="terms" />

                <label htmlFor="terms">Accept my Terms and Conditions</label>
                <input

                    className='w-50 mx-auto btn btn-primary mt-2'
                    type="submit"
                    value="Register" />
            </form>
            <p>Already have an account? <Link to="/login" onClick={navigateLogin} className='text-primary pe-auto text-decoration-none' >Please Login</Link> </p>

        </div>
    );
};

export default Register;