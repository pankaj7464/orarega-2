import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Aboutus from '../pages/Aboutus'
import Home from '../pages/Home'
import Contactus from '../pages/Contactus'
import Carreer from '../pages/Carreer'
import { useDispatch, useSelector } from 'react-redux'
import { FeedbackPopUpAction, FormPopUpAction, ProfilePopUpAction, SignUpAction } from '../redux/action/TogfleAction'
import Footer from '../component/Footer'
import Header from '../component/Header'
const Routing = () => {
  const { auth, profile, form_popup, feedback } = useSelector(state => state?.toggle)
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    if (form_popup) {
      dispatch(FormPopUpAction(""))
    }
    if (profile) {
      dispatch(ProfilePopUpAction(""));
    }
    if (feedback) {
      dispatch(FeedbackPopUpAction(""));
    }
    if (auth) {
      dispatch(SignUpAction(""))
    }

  }, [location]);
  return <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about-us' element={<Aboutus />} />
      <Route path='/contact-us' element={<Contactus />} />
      <Route path='/career' element={<Carreer />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
    <Footer />
  </>
}

export default Routing