import React, { useState } from 'react'
import icons from '../../icons/icon'
import "../../css/auth/signup.css"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import OTPInput from 'react-otp-input';
import { SignUpAction } from '../../redux/action/TogfleAction';
import { useDispatch, useSelector } from 'react-redux';
import auths from '../../static/auth/auth'

const SignIn = () => {
    const auth = useSelector(state => state?.toggle.auth)
    const dispatch = useDispatch()
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const handlePhoneNumberChange = (e, value) => {
        setPhoneNumber(value);
    };
    const HandleSignIn = (e) => {
        e.preventDefault()
        dispatch(SignUpAction("otp"))
    }
    const HandleOTP = (e) => {
        e.preventDefault()
        dispatch(SignUpAction(""))
    }
    return (
        <>
            <div className="signup-container">
                <button onClick={() => dispatch(SignUpAction(""))} className='pop-close'>&times;</button>
                <div className="signup-card">
                    <div className="s-c-header">
                        <div>
                            <h1>Sign In</h1>
                        </div>
                        <img src={icons.LOGO} alt="" />
                    </div>
                    <div className="s-c-form sign-in">
                        {auth == "signin" ? <>
                            <form>
                                <div className="form-row">
                                    <div className="form-input">
                                        <label htmlFor="signin-phone ">Enter Phone Number</label>
                                        <PhoneInput
                                            placeholder="Enter phone number"
                                            value={phoneNumber}
                                            onChange={setPhoneNumber} />

                                    </div>
                                </div>

                                <div className="form-row">
                                    <button onClick={HandleSignIn} className='btn active'>Get OTP</button>
                                    <div className='not-register'>Not registered? <strong onClick={() => dispatch(SignUpAction("signup"))}>Sign Up</strong></div>
                                </div>

                            </form>

                        </> :
                            <form>
                                <div className="form-row">
                                    <div className="form-input">
                                        <label htmlFor="signin-phone ">Enter OTP</label>
                                        <OTPInput
                                            value={otp}
                                            onChange={setOtp}
                                            numInputs={5}
                                            renderInput={(props) => (
                                                <input
                                                    {...props}
                                                    style={{
                                                        margin: "0 .85rem",
                                                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                                                        width: '50px',
                                                        height: '40px',
                                                        fontSize: '20px',

                                                    }}
                                                />
                                            )}
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <button onClick={HandleOTP} className='btn active'>Verity OTP</button>
                                    <div className='not-register'> <strong>Resend OTP</strong></div>
                                </div>

                            </form>}
                        <img src={auths.signin} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn