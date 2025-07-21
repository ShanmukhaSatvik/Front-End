import './index.css';
import {Link} from 'react-router-dom';
import InputField from './InputField';
function LoginScreen() {
    return (
        <div className='p-5'>
            <div className='wrapper'>
                <div className='contain'>
                    <h1 className='heading'>Signin to your <br/>PopX account</h1>
                    <p className='para'>Lorem ipsum dolor sit amet, <br/>consectetur adipisicing elit,</p>
                    <InputField id='email-address' type='email' placeholder='Enter email address' label='Email Address' required={false} style={{width:"98px"}}/>
                    <InputField id='login-password' type='password' placeholder='Enter password' label='Password' required={false} style={{width:"98px"}}/>
                    <Link to="/profile"><button className='btns login-btn'>Login</button></Link>
                </div>
            </div>
        </div>
    );
}
export default LoginScreen;