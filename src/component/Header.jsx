import React, { useEffect } from 'react'
import "../css/header.css"
import icons from '../icons/icon'
import  assets, { navlist } from '../static/assets/assets';
import SignUp from "../component/Auth/SignUp"
import SignIn from './Auth/SignIn';
import { useDispatch, useSelector } from 'react-redux';
import { FormPopUpAction, ProfilePopUpAction, SignUpAction } from '../redux/action/TogfleAction';
import { Link } from 'react-router-dom';
import { Notification, Profile } from './user/ProfilePopUp';
import FormPopUp from './form/FormPopUp';
import Feedback from './form/Feedback';


const Header = () => {
  const dispatch = useDispatch()


  const { auth, profile, form_popup, feedback } = useSelector(state => state?.toggle)
  const { user } = useSelector(state => state?.user)
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (window.pageYOffset > 0) {
        header.classList.add('sticky-header');
      } else {
        header.classList.remove('sticky-header');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    if (auth || form_popup) {
      document.body.classList.add('popup-open');
    } else {
      document.body.classList.remove('popup-open');
    }
  }, [auth, form_popup]);
  const HandleProfilePopUp = (input) => {
    if (!auth && input == "profile") {
      dispatch(ProfilePopUpAction("profile"))
    }
    else if (!auth && input == "notify") {
      dispatch(ProfilePopUpAction("notify"))
    }
    else dispatch(ProfilePopUpAction(""))
  }

  return (
    <>

      <section className="header " >
        <div className="header-left">
          <div className="logo">
            <Link to={"/"} ><img src={icons.LOGO} alt="Orarega" /></Link>
          </div>
        </div>
        <div className="header-center">
          <ul className=''>
            {
              navlist.map((item, i) => {
                return <li onClick={() => dispatch(FormPopUpAction(item?.path))}>{item.name}</li>
              })
            }

          </ul>

        </div>
        <div className="header-right">

          {user ? <div className="user-profile">
            <img src={assets.PROFILE} alt="" />
            <span onClick={() => dispatch(HandleProfilePopUp("profile"))}><span>Pankaj Kumar</span> <span>&#9660;</span></span>
            <div onClick={() => dispatch(HandleProfilePopUp("notify"))} className="notification">
              <img src={icons.notification} alt="" />
              {true && <span></span>}
            </div>
          </div> :
            <div className="signin-signup">
              <button onClick={() => dispatch(SignUpAction("signin"))} className='btn'>SignIn</button>
              <button onClick={() => dispatch(SignUpAction("signup"))} className='btn' >SignUp</button>
            </div>}
        </div>
      </section>


      {profile &&
        (profile == "profile" && <Profile /> ||
          <Notification />)
      }
      {auth == "signup" ? <SignUp /> :
        ["signin", "otp"].includes(auth) ? <SignIn /> : <></>}
      {
        form_popup && <FormPopUp />
      }
      {
        feedback == "feedback" && <Feedback />
      }
    </>
  )
}

export default Header