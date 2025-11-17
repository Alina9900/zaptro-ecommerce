import React, { useEffect, useContext } from 'react'
import { DataContext, getData } from '../context/DataContext'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Category from './Category';
import MidBanner from './MidBanner';
import { Link } from 'react-router-dom';

const Carousel = () => {

    const { data, fetchAllProduct } = getData()

    useEffect(() => {
        fetchAllProduct();
    }, []);


    const SampleNextArrow = (props) => {
        const { className, style, onClick } = props;

        return (
            <div className={`${className} arrows`} style={{ zIndex: 3 }} onClick={onClick}>
                <AiOutlineArrowRight className="arrows" style={{ ...style, display: "block", borderRadius: "50px", background: "#f53347", color: "white", position: "absolute", padding: "2px", right: "50px" }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#555"} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#f53347"} />
            </div>
        );
    };



    const SamplePrevArrow = (props) => {
        const { className, onClick, style } = props;
        return (
            <div className={`${className} arrow`} style={{ zIndex: 3 }} onClick={onClick}>
                <AiOutlineArrowLeft className="arrows" style={{ ...style, display: "block", borderRadius: "50px", background: "#f53347", color: "white", position: "absolute", padding: "2px", left: "50px" }} onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#555";
                }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = "#f53347";
                    }} />

            </div>
        )
    }


    const settings = {
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 500,
        puaseOnHover: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow to="next" />,
        prevArrow: <SamplePrevArrow to="prev" />
    };

    return (
        <div className="w-screen mt-0">
            <Slider {...settings} className="w-full">
                {
                    data?.slice(0, 7).map((item, index) => (
                        <div key={index} className="w-full h-[600px] bg-linear-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]">
                            <div className="flex gap-10 justify-center items-center h-full px-4">
                                <div className="space-y-6">
                                   
                                    <h1 className='text-4xl font-bold uppercase line-clamp-2 md:w-[500px] text-white '>{item.title}</h1>
                                    <p className='md:w-[500px] line-clamp-3 text-gray-400 pr-7'>{item.description}</p>
                                    <button className='bg-linear-to-r from-red-500 to-purple-500 text-white px-3 py-3 rounded-md cursor-pointer mt-2  '> <Link to={"/products"}>Shop Now</Link> </button>
                                </div>
                                <div>
                                    <img src={item.image} alt={item.title} className='shadow-2xl transition-all hover:scale-101 delay-75 ' />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
            <Category />

        </div>

    );
};

export default Carousel;
