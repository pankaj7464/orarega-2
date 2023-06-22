import React from 'react'
import "../../css/form/work-order.css"
import icons from '../../icons/icon'
import { FeedbackPopUpAction } from '../../redux/action/TogfleAction'
import { useDispatch } from 'react-redux'

const WorkOrder = () => {
    const dispatch = useDispatch()
    return (
        <>
            <span className='form-heading'>Work Order</span>
            <div className="work-order">
                <form className="search-form">
                    <img className='search' src={icons.search} alt="" />
                    <input type="text" id='search-text' placeholder='Search...' />
                    <label htmlFor="search-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, rerum.</label>
                </form>
                <div className="order-detail-container">
                    <div className="order-detail">
                        <div className="detail-list">
                            <h2>Customer Name</h2>
                            <span>John Doe</span>
                        </div>
                        <div className="detail-list">
                            <h2>Service Address</h2>
                            <span>H.no 10 indra colony bhopal M.P</span>
                        </div>
                        <div className="detail-list">
                            <h2>Issue Description</h2>
                            <span>Lorem ipsum dolor sit Lorem ipsum dolor sit amet. amr adipisicing elit. Sit, facilis.</span>
                        </div>
                        <div className="detail-list feedback">
                            <div>
                                <h2>Payment Status</h2>
                                <span>Paid/Unpaid</span>
                            </div>
                            <div>
                                <h2>Work Order Status</h2>
                                <span>Active</span>
                            </div>

                        </div>
                        <button onClick={() => dispatch(FeedbackPopUpAction("feedback"))} className='btn active feedback-btn'>Feedback</button>
                    </div>
                    <div className="order-detail">
                        <div className="detail-list">
                            <h2>Customer Name</h2>
                            <span>John Doe</span>
                        </div>
                        <div className="detail-list">
                            <h2>SErvice Address</h2>
                            <span>H.no 10 indra colony bhopal M.P</span>
                        </div>
                        <div className="detail-list">
                            <h2>Issue Description</h2>
                            <span>Lorem ipsum dolor sit Lorem ipsum dolor sit amet. amr adipisicing elit. Sit, facilis.</span>
                        </div>
                        <div className="detail-list feedback">
                            <div>
                                <h2>Payment Status</h2>
                                <span>Paid/Unpaid</span>
                            </div>
                            <div>
                                <h2>Work Order Status</h2>
                                <span>Active</span>
                            </div>

                        </div>
                        <button className='btn active feedback-btn'>Feedback</button>
                    </div>
                    <div className="order-detail">
                        <div className="detail-list">
                            <h2>Customer Name</h2>
                            <span>John Doe</span>
                        </div>
                        <div className="detail-list">
                            <h2>SErvice Address</h2>
                            <span>H.no 10 indra colony bhopal M.P</span>
                        </div>
                        <div className="detail-list">
                            <h2>Issue Description</h2>
                            <span>Lorem ipsum dolor sit Lorem ipsum dolor sit amet. amr adipisicing elit. Sit, facilis.</span>
                        </div>
                        <div className="detail-list feedback">
                            <div>
                                <h2>Payment Status</h2>
                                <span>Paid/Unpaid</span>
                            </div>
                            <div>
                                <h2>Work Order Status</h2>
                                <span>Active</span>
                            </div>

                        </div>
                        <button  className='btn active feedback-btn'>Feedback</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkOrder