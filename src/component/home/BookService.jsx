import React, { useState } from 'react'
import icons from '../../icons/icon'

const BookService = () => {
    const [num, setNumber] = useState("")
    const SubmitHandler = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <div className="book-service">
                <img src={icons.gear} alt="" className="gear-left" />
                <div className="company-logo"><img src={icons.LOGO} alt="" /></div>
                <h1>BOOK YOUR SERVICE AT DOORSTEP</h1>
                <p>Get the app download link on your mobile phone</p>
                <form>
                    <input placeholder='91+ | Enter you Number' onChange={(e) => setNumber(e.targer.value)} type="text" />
                    <button onClick={SubmitHandler}>GET APP LINK</button>
                </form>
                <div className="playstore">
                    <img src={icons.PLAY_STORE} alt="" />
                </div>
                <img src={icons.gear} alt="" className="gear-right" />
            </div>
        </>
    )
}

export default BookService