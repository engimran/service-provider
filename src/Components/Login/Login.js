import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const handleSubmite = even => {
        even.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
    }
    const navigateRegister = event => {
        navigate('/register')
    }
    return (

        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center mt-2'>Please Login</h2>
            <Form onSubmit={handleSubmite}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
            </Form>
            <p> You New User?  <Link to='/register' onClick={navigateRegister} className='text-danger pe-auto text-decoration-none' >Please Register</Link></p>
        </div>
    );
};

export default Login;