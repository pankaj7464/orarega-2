import React, { useRef } from 'react'
import icons from '../../icons/icon'
import "../../css/home/testimonial.css"
import Rating from '../Rating'
import assets from '../../static/assets/assets'

const Testimonial = () => {
    const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    const cardContainerRef = useRef(null);

    const handleScroll = (scrollOffset) => {
        cardContainerRef.current.scrollTo({
          left: cardContainerRef.current.scrollLeft + 2*scrollOffset,
          behavior: 'smooth',
        });
      };
    return (
        <section className="testimonials">

            <div className="testi_header home_card_header">
                <div className='container-header'> <h1>Testimonials</h1> <img src={icons.SERVICE} alt="" /></div>
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iste fuga facere non! Necessitatibus placeat earum iste minus aspernatur quidem.</p>
            </div>
            <div className="testimonial_carousel">
                <img onClick={() => handleScroll(-160)} src={icons.left_scroll} alt="" className="left_scroll" />
                <div  ref={cardContainerRef} className="card-container">
                    {
                        arr.map(item => {
                            return <>
                                <div className="testi_carousel_card">
                                    <span className='quote'><img src={icons.QUOTE} alt="" /></span>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae voluptatum nisi atque commodi hic facere, in quae corporis quis totam.

                                    </p>
                                    <div className="rating">
                                        <Rating value={4} max={5} />
                                    </div>
                                    <img src={assets.PROFILE} alt="" />
                                    <h2>Pankj Kumar </h2>
                                    <span>
                                        software enginner
                                    </span>

                                </div>
                            </>
                        })
                    }
                </div>
                <img onClick={() => handleScroll(160)} src={icons.left_scroll} alt="" className="right_scroll" />
            </div>


        </section>
    )
}

export default Testimonial
