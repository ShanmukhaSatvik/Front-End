import './index.css';
function Profile() {
    return (
        <div className='p-5'>
            <div className="wrapper">
                <div className='head'><span>Account Settings</span></div>
                <div className='contain'>
                    <div className='credentials'>
                        <img src="/profile.png" alt="profile-image" className='profile'/>
                        <img src="/icon.svg" alt="camera-icon" className='icon'/>
                        <div className='text-info'>
                            <h1 className='name'>Marry Doe</h1>
                            <span className='email-span'>Marry@Gmail.Com</span>
                        </div>
                    </div>
                    <p className='paragraph'>Lorem Ipsum Dolor Sit Amet, Consecte Sadipisicing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam </p>
                </div>
                <hr style={{ borderTop: '2px dashed #CBCBCB' }} />
                <hr style={{ borderTop: '2px dashed #CBCBCB' }} className='line'/>
            </div>
        </div>
    );
}
export default Profile;