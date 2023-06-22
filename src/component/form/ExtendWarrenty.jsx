import React, { useState } from 'react'

const ExtendWarrenty = () => {
    const [extendWarrentyData, setExtendWarrentyData] = useState({});
    const [expanded, setExpanded] = useState({
        customer: false,
        type: false,
        serviceAddress: false,
        product: false
    });
    const [formData, setFormData] = useState({
        address: '',
        state: '',
        city: '',
        pincode: '',

        serviceType: '',

        name: '',
        phone: '',
        alternatePhone: '',
        gst: '',

        productType: '',
        productMake: '',
        productModel: '',
        productSerialNumber: '',
        productNumber: '',
        productWarrenty: '',
        productCondition: ''
    });
    const saveData = (flag) => {
        if (flag == "add") {
            console.log(formData)
            let { address, state, city, pincode } = formData

            if (extendWarrentyData.serviceAddress) {
                setExtendWarrentyData({
                    ...extendWarrentyData, serviceAddress: [...extendWarrentyData.serviceAddress, {
                        address, state, city, pincode
                    }]
                })
            }
            else setExtendWarrentyData({
                ...extendWarrentyData, serviceAddress: [{
                    address, state, city, pincode
                }]
            })
            console.log(extendWarrentyData)
            setFormData({
                ...formData,
                address: '',
                state: '',
                city: '',
                pincode: '',


            });
        }

        else if (flag == "prod") {
            let { productType, productMake, productModel, productSerialNumber, productNumber, productWarrenty, productCondition } = formData
            if (extendWarrentyData.product) {
                setExtendWarrentyData({
                    ...extendWarrentyData, product: [...extendWarrentyData.product, {
                        productType,
                        productMake,
                        productModel,
                        productSerialNumber,
                        productNumber,
                        productWarrenty,
                        productCondition
                    }]
                })
            }
            else setExtendWarrentyData({
                ...extendWarrentyData, product: [{
                    productType,
                    productMake,
                    productModel,
                    productSerialNumber,
                    productNumber,
                    productWarrenty,
                    productCondition
                }]
            })

            // setFormData({
            //     ...formData, productType: '',
            //     productMake: '',
            //     productModel: '',
            //     productSerialNumber: '',
            //     productWarrenty: ''

            // });
        }

    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };


    return (
        <>
            <span className='form-heading'>Extended warrenty</span>
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
                                    <input onChange={handleInputChange} name='name' type="text" placeholder="John Doe" />
                                </div>
                                <div className="expanded-input">
                                    <label htmlFor="mobile">Mobile Number</label>
                                    <input nChange={handleInputChange} name='phone' type="text" placeholder="123456789" />
                                </div>
                                <div className="expanded-input">
                                    <label htmlFor="email">Email</label>
                                    <input nChange={handleInputChange} name='email' type="email" placeholder="Email" />
                                </div>
                                <div className="expanded-input">
                                    <label htmlFor="text">Alternate Number</label>
                                    <input nChange={handleInputChange} name='alternatePhone' type="text" placeholder="123-456-7890" />
                                </div>
                                <div className="expanded-input">
                                    <label htmlFor="gst">Customer GST Number</label>

                                    <input nChange={handleInputChange} name='gst' type="text" placeholder="67657657" />
                                </div>
                                <div className="expanded-input">
                                    <label htmlFor="email">Payment Type</label>

                                    <select nChange={handleInputChange} name='gst' id="city">
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
                        <div className="form-exp-heading" onClick={() => setExpanded({ ...expanded, type: !expanded.type })}>
                            <span>Service Type</span>
                            <strong>{expanded.type ? '-' : '+'}</strong>
                        </div>
                        {expanded.type && (
                            <div className="expanded-form">

                                <div className="expanded-input">
                                    <label htmlFor="service_type">Service Type</label>

                                    <select onChange={handleInputChange} name='service_type' id="service_type">
                                        <option value="">Extended warrenty</option>
                                        <option value="awc">AWC Servive</option>
                                    </select>
                                </div>
                            </div>


                        )}
                    </div>
                    <div className="form-expantion">
                        <div className="form-exp-heading" onClick={() => setExpanded({ ...expanded, serviceAddress: !expanded.serviceAddress })}>
                            <span>Service Address</span>
                            <strong>{expanded.serviceAddress ? '-' : '+'}</strong>
                        </div>
                        {expanded.serviceAddress && (
                            <div className="expanded-form">
                                <button onClick={() => saveData("add")} className='dynamicInput'>&#43;</button>
                                <div className="expanded-input">
                                    <label htmlFor="address">Address</label>
                                    <input name='address' onChange={handleInputChange} type="text" placeholder="Bangalore 5444" />
                                </div>
                                <div className="expanded-input">
                                    <label htmlFor="state">State</label>
                                    <select name='state' onChange={handleInputChange} id="state">
                                        <option value="">Select State</option>
                                        <option value="state1">State 1</option>
                                        <option value="state2">State 2</option>
                                        <option value="state3">State 3</option>

                                    </select>
                                </div>
                                <div className="expanded-input">
                                    <label htmlFor="city">City</label>
                                    <select name='city' onChange={handleInputChange} id="city">
                                        <option value="">Select City</option>
                                        <option value="city1">City 1</option>
                                        <option value="city2">City 2</option>
                                        <option value="city3">City 3</option>
                                    </select>
                                </div>
                                <div className="expanded-input">
                                    <label htmlFor="pincode">Pincode</label>
                                    <select name='pincode' onChange={handleInputChange} id="city">
                                        <option value="">012345</option>
                                        <option value="1">City 1</option>
                                        <option value="2">City 2</option>
                                        <option value="3">City 3</option>
                                    </select>
                                </div>

                            </div>

                        )}
                    </div>
                    {
                        expanded.serviceAddress && extendWarrentyData.serviceAddress && <div class="table-wrapper">
                            <table class="input-data">
                                <thead>
                                    <tr>
                                        <th>Address</th>
                                        <th>City</th>
                                        <th>State</th>
                                        <th>Pincode</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {extendWarrentyData.serviceAddress.map(item => (
                                        <tr key={item.address}>
                                            <td>{item.address}</td>
                                            <td>{item.city}</td>
                                            <td>{item.state}</td>
                                            <td>{item.pincode}</td>
                                            <td>
                                               <input type="radio" className='address-selection' name="address_selection" id="" />
                                                
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    }

                    <div className="form-expantion">
                        <div className="form-exp-heading" onClick={() => setExpanded({ ...expanded, product: !expanded.product })}>
                            <span>Product Detail</span>
                            <strong>{expanded.product ? '-' : '+'}</strong>
                        </div>
                        {expanded.product && (
                            <div className="expanded-form">
                                <button onClick={() => saveData("prod")} className='dynamicInput'>&#43;</button>
                                <div className="expanded-input">
                                    <label htmlFor="type">Product Type</label>
                                    <select onChange={handleInputChange} name='productType' id="type">
                                        <option value="">Select Product Type</option>
                                        <option value="type1">Type 1</option>
                                        <option value="type2">Type 2</option>
                                        <option value="type3">Type 3</option>
                                    </select>
                                </div>
                                <div className="expanded-input">
                                    <label htmlFor="make">Product Make</label>
                                    <select onChange={handleInputChange} name='productMake' id="make">
                                        <option value="">Select Product Make</option>
                                        <option value="make1">Make 1</option>
                                        <option value="make2">Make 2</option>
                                        <option value="make3">Make 3</option>

                                    </select>
                                </div>
                                <div className="expanded-input">
                                    <label htmlFor="model">Product Model</label>
                                    <select onChange={handleInputChange} name='productModel' id="model">
                                        <option value="">Select Product Model</option>
                                        <option value="make1">Make 1</option>
                                        <option value="make2">Make 2</option>
                                        <option value="make3">Make 3</option>
                                    </select>
                                </div>
                                <div className="expanded-input">
                                    <label htmlFor="serialNumber">Serial Number</label>
                                    <input onChange={handleInputChange} name='productSerialNumber' type="text" id="serialNumber" placeholder="Enter product Serial Number" />
                                </div>
                                <div className="expanded-input">
                                    <label htmlFor="productNumber">Product Number</label>

                                    <input onChange={handleInputChange} name='productNumber' type="text" id="productNumber" placeholder="Enter product number" />
                                </div>
                                <div className="expanded-input">
                                    <label htmlFor="warrentyType">Warrenty type</label>
                                    <select onChange={handleInputChange} name='productWarrenty' id="warrenty">
                                        <option value="">Select Warrenty type</option>
                                        <option value="make1">Make 1</option>
                                        <option value="make2">Make 2</option>
                                        <option value="make3">Make 3</option>

                                    </select>
                                </div>
                                <div className="expanded-input">
                                    <label htmlFor="productConduction">Product Condition</label>
                                    <select onChange={handleInputChange} name='productCondition' id="productCondition">
                                        <option value="">Select Product Condition</option>
                                        <option value="make1">Make 1</option>
                                        <option value="make2">Make 2</option>
                                        <option value="make3">Make 3</option>
                                    </select>
                                </div>
                                <div className="expanded-input">
                                    <label htmlFor="conduction">Prof of purchase</label>
                                    <div className='service-file-input'>
                                        <input type="file" id="issueSnaps" />
                                        <span>
                                            <span>Choose File</span>
                                            <span>Note : Formate JPG & PDF</span>
                                        </span>
                                    </div>
                                </div>

                            </div>

                        )}
                        {
                            expanded.product && extendWarrentyData.product && <div class="table-wrapper">
                                <table class="input-data">
                                    <thead>
                                        <tr>
                                            <th>Product Type</th>
                                            <th>Product Make</th>
                                            <th>Product Model</th>
                                            <th>Serial Number</th>
                                            <th>Product Number</th>
                                            <th>Product Warranty</th>
                                            <th>Product Condition</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {extendWarrentyData.product.map((item) => (
                                            <tr key={item.productNumber}>
                                                <td>{item.productType}</td>
                                                <td>{item.productMake}</td>
                                                <td>{item.productModel}</td>
                                                <td>{item.productSerialNumber}</td>
                                                <td>{item.productNumber}</td>
                                                <td>{item.productWarrenty}</td>
                                                <td>{item.productCondition}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                        }

                    </div>
                </div>
                <button className="btn active">Submit</button>
            </div>
        </>
    )
}

export default ExtendWarrenty