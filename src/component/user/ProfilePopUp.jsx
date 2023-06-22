import React, { useEffect, useState, useRef } from 'react'
import "./profile-pop-up.css"
import { useDispatch } from 'react-redux';
import { FormPopUpAction, ProfilePopUpAction } from '../../redux/action/TogfleAction';
import { useNavigate } from 'react-router-dom';
import { navlist, profileList } from '../../static/assets/assets';
import { LogoutAction } from '../../redux/action/userAction';

const useOutsideAlerter = (ref) => {
  const dispatch = useDispatch();
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
          dispatch(ProfilePopUpAction(""))
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}





export const Profile = () => {
  const profileRef = useRef(null);
  const [pop, setPop] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const ProfileHadler = (path) => {
    if (path === "about") {
      navigate("/about-us")
      dispatch(ProfilePopUpAction(""))
    }
    else if (path === "contact") {
      navigate("/contact-us")
      dispatch(ProfilePopUpAction(""))
    }
    else if (path === "work-order") {

      dispatch(FormPopUpAction("work-order"))
      dispatch(ProfilePopUpAction(""))
    }
    else if (path === "track-request") {
      dispatch(FormPopUpAction("track-request"))
      dispatch(ProfilePopUpAction(""))
    }
    else if (path === "quotation") {
      dispatch(FormPopUpAction("quotation"))
      dispatch(ProfilePopUpAction(""))
    }
    else if (path === "invoice") {
      dispatch(FormPopUpAction("invoice"))
      dispatch(ProfilePopUpAction(""))
    }
    else if (path === "logout") {
      dispatch(LogoutAction(false))
      dispatch(ProfilePopUpAction(""))
    }

  }
  useOutsideAlerter(profileRef)
  return (
    <>
      <div ref={profileRef} className="profile-popup">
        {
          profileList.map(item => {
            return <div onClick={() => ProfileHadler(item.path)} className="menu-item">{item.name}</div>
          })
        }
        <ul className='mobile-navbar'>
          {
            navlist.map((item, i) => {
              return <li onClick={() => dispatch(FormPopUpAction(item?.path))} className="menu-item">{item.name}</li>
            })
          }

        </ul>
      </div>
    </>
  )
}


export const Notification = () => {
  const ref = useRef(null);
  useOutsideAlerter(ref)
  return (
    <div ref={ref} className="profile-popup notification-popup">
      <div className="notifi-item">
        <span></span>
        <div className='n-i-type'>
          <span>Your Payment</span>
          <span>Document</span>
        </div>
      </div>
      <div className="notifi-item">
        <span></span>
        <div className='n-i-type'>
          <span>Your Payment</span>
          <span>Document</span>
        </div>
      </div>

    </div>
  )
}

