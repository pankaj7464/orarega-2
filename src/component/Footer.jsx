import React from 'react'
import "../css/footer.css"
import icons, { socialMediaIcons } from '../icons/icon';
import { Link } from 'react-router-dom';
import { FormPopUpAction } from '../redux/action/TogfleAction';
import { useDispatch } from 'react-redux';
const Footer = () => {
    const dispatch = useDispatch();
    return (
        <footer className="footer">
            <div className="container">
                <div className="grid">
                    <div className="footer-section">
                        <h4 className="footer-section-title">Office</h4>
                        <ul className="footer-section-list ">
                            <li><img src={icons.LOCATION} alt="" /><span>Viva Icon Building (A Wing) Oppsite D Mart, Sr No. 37/1/12, Hinjewadi, Pune -411057</span></li>
                            <li > <img src={icons.PHONE} alt="" /><span>  +91 7030087300</span></li>
                            <li > <img src={icons.EMAIL} alt="" /><span> support@quikserv.com</span></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4 className="footer-section-title">Our Services</h4>
                        <ul className="footer-section-list">
                            <Link to={"/about-us"} > <li>About Us </li></Link>
                            <Link to={"/carreer"} > <li>Carreer </li></Link>
                            <li>Terms and Conditions</li>
                            <li>Policy and privacy</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4 className="footer-section-title">Our Services</h4>
                        <ul className="footer-section-list">
                            <li onClick={() => dispatch(FormPopUpAction("service"))}>Book Service  </li>
                            <li onClick={() => dispatch(FormPopUpAction("buy"))}>Buy  </li>
                            <li onClick={() => dispatch(FormPopUpAction("sell"))}>Sell </li>
                            <li onClick={() => dispatch(FormPopUpAction("warrenty"))}>Extended warrenty</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4 className="footer-section-title">Download Our App</h4>
                        <li><img src={icons.PLAY_STORE} alt="" /></li>
                    </div>
                    <div className="footer-section">
                        <h4 className="footer-section-title">Follow Us</h4>
                        <div className="social-icons">
                            {
                                socialMediaIcons.map((item, i) => {
                                    return <Link key={i} to={item.link}><img src={item.icon} alt={item.platform} /></Link>
                                })
                            }

                        </div>
                        <Link to="/contact-us"> <button className='btn active'>
                            Contact Us
                        </button></Link>

                    </div>
                </div>

                <hr />
                <div className="__copyright">
                    {new Date().getFullYear() } Powered by <strong>Analytics Valley Private Limited</strong> &copy; Copyright <strong>Quikserv Private Limited</strong>. All Rights Reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;
