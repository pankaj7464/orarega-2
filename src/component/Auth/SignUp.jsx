import React, { useState } from 'react'
import icons from '../../icons/icon'
import "../../css/auth/signup.css"
import { useDispatch } from 'react-redux'
import { SignUpAction } from '../../redux/action/TogfleAction'
import { LogoutAction } from '../../redux/action/userAction'
import assets from '../../static/assets/assets'
import auth from '../../static/auth/auth'

const SignUp = () => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: '',
        state: '',
        city: '',
        pincode: '',
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Perform form validation and further processing
        console.log(formData); // Replace with your desired logic

        // Reset form after submission (optional)
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            address: '',
            state: '',
            city: '',
            pincode: '',
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const HandleSignUp = (e) => {
        e.preventDefault()
        dispatch(LogoutAction(true))
        dispatch(SignUpAction(""))
    }

    return (
        <>
            <div className="signup-container">
                <button onClick={() => dispatch(SignUpAction(""))} className='pop-close'>&times;</button>
                <div className="signup-card">
                    <div className="s-c-header">
                        <div>
                            <h1>Sign Up</h1>
                        </div>
                        <img src={icons.LOGO} alt="" />
                    </div>
                    <div className="s-c-form">
                        <form onSubmit={handleFormSubmit}>
                            <div className="form-row">
                                <div className="form-input">
                                    <label htmlFor="fname">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder='Minakshi'
                                        className="fname"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-input">
                                    <label htmlFor="lname">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder='Savasiya'
                                        className="lname"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-input">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="email"

                                        placeholder='minakshi@gmail.com'
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-input">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phoneNumber"
                                        placeholder='+91 0987654321'
                                        className="phone"
                                        value={formData.phoneNumber}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-input">
                                    <label htmlFor="address">Address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        className="address"
                                        placeholder='H.No 102 indra colony naveen nagr'
                                        value={formData.address}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-input">
                                    <label htmlFor="state">State</label>
                                    <select name="state"   onChange={handleInputChange} defaultValue={formData.state} >
                                        <option value="Select State"></option>
                                    </select>
                                </div>
                                <div className="form-input">
                                    <label htmlFor="city">City</label>
                                    <select name="state"   onChange={handleInputChange} defaultValue={formData.state} >
                                        <option value="Select State"></option>
                                    </select>
                                </div>
                                <div className="form-input">
                                    <label htmlFor="pincode">Pin Code</label>
                                    <select name="state"   onChange={handleInputChange} defaultValue={formData.state} >
                                        <option value="Select State"></option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-row">
                                <button onClick={HandleSignUp} className="btn active" type="submit">Submit</button>
                            </div>
                        </form>
                        <img src={auth.signup} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp