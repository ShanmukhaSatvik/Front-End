import './index.css';
import {Link} from 'react-router-dom';
function LandingScreen(){
    return (
        <div className='p-5'>
            <div className="wrapper">
                <div className='contain'>
                    <h1 className='welcome'>Welcome to PopX</h1>
                    <p className='para'>Lorem ipsum dolor sit amet, <br/>consectetur adipisicing elit,</p>
                    <Link to="/signup"><button className='btns create'>Create Account</button></Link><br/>
                    <Link to="/login"><button className='btns login'>Already Registered? Login</button></Link>
                </div>
            </div>
        </div>
    );
}
export default LandingScreen;