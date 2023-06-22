import React, { useState } from 'react';

const BookService = () => {
    const [expanded, setExpanded] = useState({
        customer: false,
        address: false,
        product: false,
    });

    return (
        <>
            <span className="form-heading">Book Service</span>
            <div className="sell-form">
                <div>
                    <div className="form-expantion">
                        <div className="form-exp-heading" onClick={() => setExpanded({ ...expanded, customer: !expanded.customer })}>
                            <span>Customer</span>
                            <strong>{expanded.customer ? '-' : '+'}</strong>

                        </div>

                        {expanded.customer && (
                            <div className="expanded-form">
                                <div className="expanded-input">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" placeholder="John Doe" />
                                </div>
                                <div className="expanded-input">
                                    <label htmlFor="phone">Mobile Number</label>
                                    <input type="text" placeholder="123-456-7890" />
                                </div>
                                <div className="expanded-input">
                                    <label htmlFor="name">Email</label>

                                    <input type="email" placeholder="qws@gmail.com" />
                                </div>

                            </div>


                        )}
                    </div>
                    <div className="form-expantion">

                        <div className="form-exp-heading" onClick={() => setExpanded({ ...expanded, address: !expanded.address })}>
                            <span>Service Address</span>
                            <strong>{expanded.address ? '-' : '+'}</strong>
                        </div>
                        {expanded.address && (
                            <div className="expanded-form">

                                <div className="expanded-input">
                                    <label htmlFor="address">Address</label>
                                    <input type="text" placeholder="Bangalore 5444" />
                                </div>
                                <div className="expanded-input">
                                    <label htmlFor="state">State</label>
                                    <select id="state">
                                        <option value="">Select State</option>
                                        <option value="state1">State 1</option>
                                        <option value="state2">State 2</option>
                                        <option value="state3">State 3</option>

                                    </select>
                                </div>
                                <div className="expanded-input">
                                    <label htmlFor="city">City</label>
                                    <select id="city">
                                        <option value="">Select City</option>
                                        <option value="city1">City 1</option>
                                        <option value="city2">City 2</option>
                                        <option value="city3">City 3</option>

                                    </select>
                                </div>
                                <div className="expanded-input">
                                    <label htmlFor="pincode">Pincode</label>
                                    <select id="pincode">
                                        <option value="">Select Pincoce</option>
                                        <option value="city1">pin 1</option>
                                        <option value="city2">pin 2</option>
                                        <option value="pinw">pin 3</option>

                                    </select>
                                </div>

                            </div>

                        )}
                    </div>
                    <div className="form-expantion">
                        <div className="form-exp-heading" onClick={() => setExpanded({ ...expanded, product: !expanded.product })}>
                            <span>Product Details</span>
                            <strong>{expanded.product ? '-' : '+'}</strong>
                        </div>
                        {expanded.product && (
                            <div className="expanded-form">
                                <div className="expanded-input">
                                    <label htmlFor="type">Product Type</label>
                                    <select id="type">
                                        <option value="">Select Product Type</option>
                                        <option value="type1">Type 1</option>
                                        <option value="type2">Type 2</option>
                                        <option value="type3">Type 3</option>
                                   
                                    </select>
                                </div>
                                <div className="expanded-input">
                                    <label htmlFor="make">Product Make</label>
                                    <select id="make">
                                        <option value="">Select Product Make</option>
                                        <option value="make1">Make 1</option>
                                        <option value="make2">Make 2</option>
                                        <option value="make3">Make 3</option>
                                    
                                    </select>
                                </div>
                                <div className="expanded-input">
                                    <label htmlFor="model">Product Model</label>
                                    <input type="text" id="model" placeholder="Enter product model" />
                                </div>
                                <div className="expanded-input">
                                    <label htmlFor="number">Product Number</label>
                                    <input type="text" id="number" placeholder="Enter product number" />
                                </div>
                                <div className="expanded-input">
                                    <label htmlFor="serialNumber">Product Serial Number</label>
                                    <input type="text" id="serialNumber" placeholder="Enter product serial number" />
                                </div>
                                <div className="expanded-input">
                                    <label htmlFor="issueDescription">Issue Description</label>
                                    <select id="issueDescription">
                                        <option value="">Select Issue Description</option>
                                        <option value="issue1">Issue 1</option>
                                        <option value="issue2">Issue 2</option>
                                        <option value="issue3">Issue 3</option>
                                    </select>
                                </div>
                                <div className="expanded-input">
                                    <label htmlFor="comment">Comment</label>
                                    <input type="text" id="comment" placeholder="Enter your comment" />
                                </div>
                                <div className="expanded-input">
                                    <label htmlFor="issueSnaps">Issue Snaps</label>
                                    <div className='service-file-input'>
                                        <input type="file" id="issueSnaps" placeholder="Upload issue snaps" />
                                        <span>
                                            <span>Choose File</span>
                                            <span>Note : Formate JPG & PDF</span>
                                        </span>
                                    </div>
                                </div>
                            </div>

                        )}
                    </div>
                </div>
                <button className="btn active">Submit</button>
            </div>
        </>
    );
};

export default BookService;
