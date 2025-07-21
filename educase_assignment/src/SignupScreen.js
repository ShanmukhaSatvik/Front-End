import './index.css';
import {Link} from 'react-router-dom';
import InputField from './InputField';
function SignupScreen() {
    return (
        <div className='p-5'>
            <div className="wrapper">
                <div className='contain'>
                    <h1 className='heading'>Create your <br/>PopX account</h1>
                    <InputField id='username' type='text' placeholder='Enter full name' label='Full Name' required={true}  style={{width:"91px"}}/>
                    <InputField id='mobileNumber' type='number' placeholder='Enter phone number' label='Phone number' required={true}  style={{width:"95px"}}/>    
                    <InputField id='email' type='email' placeholder='Enter email address' label='Email address' required={true}  style={{width:"90px"}}/>
                    <InputField id='password' type='password' placeholder='Enter password' label='Password' required={true}  style={{width:"91px"}}/>
                    <InputField id='companyName' type='text' placeholder='Enter company name' label='Company name' required={false}  style={{width:"95px"}}/>
                    <p className='agency'>Are you an Agency?<sup className="red">*</sup></p>
                    <input type="radio" id='yes' name='agency' style={{accentColor:"#6C25FF",transform:"scale(1.375)"}}/>
                    <label htmlFor='yes' className='yes'>Yes</label>
                    <input type="radio" id='no' name='agency' style={{accentColor:"#6C25FF",transform:"scale(1.375)"}}/>
                    <label htmlFor='no' className='no'>No</label>
                    <Link to="/profile"><button className='btns create-account'>Create Account</button></Link>
                </div>
            </div>
        </div>
    );
}
export default SignupScreen;