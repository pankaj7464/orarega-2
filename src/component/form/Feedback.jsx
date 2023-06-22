import React, { useState } from 'react'
import "../../css/form/feedback.css"
import { useDispatch } from 'react-redux'
import { FeedbackPopUpAction } from '../../redux/action/TogfleAction'
const Feedback = () => {
    const dispatch = useDispatch()
    const [rating, setRating] = useState(0);
    const [emogiRating, setEmogiRating] = useState(0);

    const handleRatingChange = (value) => {
        setRating(value);
    };
    return (
        <>
            <div className="feedback-container">
                <span className='form-heading'>Feedback</span>
                <button  onClick={()=>dispatch(FeedbackPopUpAction(""))} className='pop-close active'>&times;</button>
                <div className="feedback-form">
                    <div className="expanded-input">
                        <label htmlFor="orderid">Order Id</label>
                        <input type="text" id='orderid' placeholder='12 545454' />
                    </div>
                    <div className="expanded-input">
                        <label htmlFor="date">Order Id</label>
                        <input type="date" placeholder='12 / 02 /2023' />
                    </div>
                    <div className="expanded-input">
                        <label htmlFor="rating">How you want to rate us</label>
                        <div className="star-rating">
                            {[...Array(5)].map((star, index) => {
                                index += 1;
                                return (
                                    <button
                                        type="button"
                                        key={index}
                                        id="reviewStar"
                                        className={index <= rating ? "on" : "off"}
                                        onClick={() => setRating(index)}
                                    >
                                        <span className="star">&#9733;</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    <div className="expanded-input">
                        <label htmlFor="text">How you want to rate us</label>
                        <div className="emogi-rating">
                            {[...Array(5)].map((_, index) => {
                                const emojiValue = index+1;
                                let emoji;
                                switch (emojiValue) {
                                    case 1:
                                        emoji = '😃';
                                        break;
                                    case 2:
                                        emoji = '🙂';
                                        break;
                                    case 3:
                                        emoji = '😐';
                                        break;
                                    case 4:
                                        emoji = '😕';
                                        break;
                                    case 5:
                                        emoji = '😡';
                                        break;
                                    default:
                                        emoji = '😐';
                                }
                                return (
                                    <button
                                        type="button"
                                        key={index}
                                        id="reviewEmogi"
                                        className={emojiValue == emogiRating ? 'on' : 'off'}
                                        onClick={() => setEmogiRating(emojiValue)}
                                    >
                                        {emoji}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    <div className="expanded-input">
                        <label htmlFor="text">Customer Comments</label>
                        <input type="text" placeholder='Write..' />
                    </div>
                </div>
                <button className='btn active feed-btn'>Submit</button>
            </div>
        </>
    )
}

export default Feedback