import React, { useState } from 'react'

const Sell = () => {
    const [sellData, setSellData] = useState({});
    const [expanded, setExpanded] = useState({
        customer: false,
        service: false,
        product: false
    });
    const [formData, setFormData] = useState({
        address: '',
        state: '',
        city: '',
        pincode: '',
        name: '',
        phone: '',
        alternatePhone: '',
        gst: '',
        productType: '',
        productMake: '',
        productModel: '',
        productSerialNumber: '',
        productDescription: ''
    });
    const saveData = (flag) => {
        console.log(formData)
        if (flag == "add") {
            let { address, state, city, pincode } = formData
            if (sellData.address) {

                setSellData({
                    ...sellData, address: [...sellData.address, {
                        address, state, city, pincode
                    }]
                })
            }
            else setSellData({
                ...sellData, address: [{
                    address, state, city, pincode
                }]
            })

            setFormData({
                ...formData,
                address: '',
                state: '',
                city: '',
                pincode: '',

            });
        }
        else if (flag == "prod") {
            let { productType, productMake, productModel, productSerialNumber, productDescription } = formData
            if (sellData.product) {
                setSellData({
                    ...sellData, product: [...sellData.product, {
                        productType,
                        productMake,
                        productModel,
                        productSerialNumber,
                        productDescription
                    }]
                })
            }
            else setSellData({
                ...sellData, product: [{
                    productType,
                    productMake,
                    productModel,
                    productSerialNumber,
                    productDescription
                }]
            })

            setFormData({
                ...formData, productType: '',
                productMake: '',
                productModel: '',
                productSerialNumber: '',
                productDescription: ''

            });
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
            <span className='form-heading'>Sell</span>
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
                        <div className="form-exp-heading" onClick={() => setExpanded({ ...expanded, service: !expanded.service })}>
                            <span>Service Address</span>
                            <strong>{expanded.service ? '-' : '+'}</strong>
                        </div>
                        {expanded.service && (
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
                        sellData.address && sellData.address.map(item => {
                            return <div className="input-selection">
                                <span>{item.address}</span>
                                <span>{item.city}</span>
                                <span>{item.state}</span>
                                <span>{item.pincode}</span>
                                <span>
                                    <span>select</span>
                                    <span className='selection'>add</span>
                                </span>

                            </div>
                        })
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
                                        {/* Add more options as needed */}
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
                                        {/* Add more options as needed */}
                                    </select>
                                </div>
                                <div className="expanded-input">
                                    <label htmlFor="serialNumber">Product Serial Number</label>
                                    <input onChange={handleInputChange} name='productSerialNumber' type="text" id="serialNumber" placeholder="Enter product Desciption" />
                                </div>
                                <div className="expanded-input">
                                    <label htmlFor="productNumber">Product Number</label>
                                    <input onChange={handleInputChange} name='productNumber' type="text" id="productNumber" placeholder="Enter product Desciption" />
                                </div>
                                <div className="expanded-input">
                                    <label htmlFor="description">Product Description</label>
                                    <select onChange={handleInputChange} name='productDescription' id="description">
                                        <option value="">Select Product Make</option>
                                        <option value="make1">Make 1</option>
                                        <option value="make2">Make 2</option>
                                        <option value="make3">Make 3</option>
                                        {/* Add more options as needed */}
                                    </select>
                                </div>
                                <div onChange={handleInputChange} name='productConduction' className="expanded-input">
                                    <label htmlFor="conduction">Product Conduction</label>
                                    <select id="conduction">
                                        <option value="">Select Product conduction</option>
                                        <option value="make1">Make 1</option>
                                        <option value="make2">Make 2</option>
                                        <option value="make3">Make 3</option>
                                        {/* Add more options as needed */}
                                    </select>
                                </div>
                                <div className="expanded-input">
                                    <label htmlFor="conduction">Prof of purchase ( invoice ) </label>
                                    <div className='service-file-input'>
                                        <input type="file" id="issueSnaps" placeholder="Upload issue snaps" />
                                        <span>
                                            <span>Choose File</span>
                                            <span>Note : Formate JPG & PDF</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="expanded-input">
                                    <label htmlFor="conduction">Issue Snaps</label>
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
                        {
                            sellData.product && sellData.product.map(item => {
                                return <div className="input-selection">
                                    <span>{item.productType}</span>
                                    <span>{item.productMake}</span>
                                    <span>{item.productModel}</span>
                                    <span>{item.productSerialNumber}</span>
                                    <span>{item.productDescription}</span>
                                    <span>{item.productConduction}</span>
                                    <span>
                                        <span>select</span>
                                        <span className='selection'></span>
                                    </span>

                                </div>
                            })
                        }
                    </div>
                </div>
                <button className="btn active">Submit</button>
            </div>
        </>
    )
}

export default Sell