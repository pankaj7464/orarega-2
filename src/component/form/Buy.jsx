import React, { useState } from 'react'

const Buy = () => {
    const [customerExpanded, setCustomerExpanded] = useState(false);
    const [addressExpanded, setAddressExpanded] = useState(false);
    const [productExpanded, setProductExpanded] = useState(false);
    const [dynamicFieldProd, setDynamicFieldProd] = useState([])
    const [dynamicFieldSer, setDynamicFieldSer] = useState([])
    const [count, setCount] = useState({
        prodCount: 1,
        serCount: 1
    })

    const toggleCustomer = () => {
        setCustomerExpanded(!customerExpanded);
    };

    const toggleAddress = () => {
        setAddressExpanded(!addressExpanded);
    };

    const toggleProduct = () => {
        setProductExpanded(!productExpanded);
    };
    return (
        <>
            <span className='form-heading'>Buy</span>
            <div className="sell-form">
                <div>
                    <div className="form-expantion">
                        <div className="form-exp-heading" onClick={toggleCustomer}>
                            <span>Customer</span>
                            <strong>{customerExpanded ? '-' : '+'}</strong>
                        </div>
                        {customerExpanded && (
                            <div className="expanded-form">

                                <div className="expanded-input">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" placeholder="John Doe" />
                                </div>
                                <div className="expanded-input">
                                    <label htmlFor="mobile">Mobile Number</label>
                                    <input type="text" placeholder="123456789" />
                                </div>
                                <div className="expanded-input">
                                    <label htmlFor="email">Email</label>

                                    <input type="text" placeholder="Email" />
                                </div>
                                <div className="expanded-input">
                                    <label htmlFor="text">Alternate Number</label>

                                    <input type="text" placeholder="123-456-7890" />
                                </div>
                                <div className="expanded-input">
                                    <label htmlFor="gst">Customer GST Number</label>

                                    <input type="text" placeholder="67657657" />
                                </div>
                                <div className="expanded-input">
                                    <label htmlFor="email">Payment Term</label>

                                    <select id="city">
                                        <option value="">Select Type</option>
                                        <option value="city1">City 1</option>
                                        <option value="city2">City 2</option>
                                        <option value="city3">City 3</option>

                                    </select>
                                </div>
                            </div>


                        )}
                    </div>
                    <div className="form-expantion">
                        <div className="form-exp-heading" onClick={toggleAddress}>
                            <span>Service Address</span>
                            <strong>{addressExpanded ? '-' : '+'}</strong>
                        </div>
                        {addressExpanded && (
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
                        <div className="form-exp-heading" onClick={toggleProduct}>
                            <span>Product Detail</span>
                            <strong>{productExpanded ? '-' : '+'}</strong>
                        </div>
                        {productExpanded && (
                            <div className="expanded-form">

                                <div className="expanded-input">
                                    <label htmlFor="type">Product Type</label>
                                    <select id="type">
                                        <option value="">Select Product Type</option>
                                        <option value="type1">Type 1</option>
                                        <option value="type2">Type 2</option>
                                        <option value="type3">Type 3</option>
                                        {/* Add more options as needed */}
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
                                    <select id="model">
                                        <option value="">Select Product Model</option>
                                        <option value="make1">Make 1</option>
                                        <option value="make2">Make 2</option>
                                        <option value="make3">Make 3</option>

                                    </select>
                                </div>
                                <div className="expanded-input">
                                    <label htmlFor="description">Product Description</label>
                                    <input type="text" id="description" placeholder="Enter product Desciption" />
                                </div>
                                <div className="expanded-input">
                                    <label htmlFor="quantity">Quantity</label>
                                    <input type="text" id="quantity" placeholder="Enter product quantity" />
                                </div>
                                <div className="expanded-input">
                                    <label htmlFor="comment">Customer Comments</label>
                                    <input type="text" id="comment" placeholder="Write..." />
                                </div>


                            </div>

                        )}
                    </div>
                </div>
                <button className="btn active">Submit</button>
            </div>
        </>
    )
}

export default Buy