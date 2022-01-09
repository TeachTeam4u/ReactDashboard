import React , {useState} from 'react';
import { Form ,Button} from 'react-bootstrap';
import './validation.css';
import {logIn}  from '../Store/ActionCreator/ActionCreator';
import { bindActionCreators } from 'redux';
import {useDispatch} from 'react-redux';

export default function Login() {
    // const dispatch = useDispatch();
    // const { logIn } = bindActionCreators(dispatch , actionCreaters);
    const [validated, setValidated] = useState(false);
    const [UserId, setUserId] = useState(null);
    const [Password, setPassword] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.stopPropagation();
      }
      setValidated(true);

     
      const payload = {
        userId : UserId,
        password : Password
      };
      logIn(payload);
      const returnVal = logIn(payload);
      console.log(returnVal);
    };

    return (
        <div className='container'>
            <div className='left'>
                    <h1>WELCOME</h1>
            </div>
            <div className='right'>
                    <h1>Sign In</h1>
                    <div className='sp'></div>
                    <h2>Enter Your Credential To Continue</h2>
                    <div className='sp-2'></div>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group controlId="validationCustom03">
                                <Form.Floating className="mb-3">
                                    <Form.Control type="text" placeholder="User Id" required onChange={(event)=>{setUserId(event.target.value)}}/>
                                    <label htmlFor="userId">User Id</label>
                                </Form.Floating>
                            </Form.Group>

                            <Form.Group controlId="validationCustom04">
                                <Form.Floating className="mb-3">
                                    <Form.Control type="password" placeholder="Password" required onChange={(event)=>{setPassword(event.target.value)}}/>
                                    <label htmlFor="password">Password</label>
                                </Form.Floating>
                            </Form.Group>
                            <Button className='leftButton' variant="link">Forget Password?</Button>
                            <Form.Check
                                size = '10'
                                className='rem' 
                                type="switch"
                                id="custom-switch"
                                label="Remember Me"
                            />
                            <div className='sp'></div>
                            <Button type="submit" className='button'>SIGN IN</Button>
                        </Form>
            </div>
        </div>
    )
}
