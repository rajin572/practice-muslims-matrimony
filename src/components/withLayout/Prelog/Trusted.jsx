"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "@/components/ui/Container";
import React from "react";
import trustedUser1 from "@/assest/images/trustedUser1.png";
import trustedUser2 from "@/assest/images/trustedUser2.png";
import trustedUser3 from "@/assest/images/trustedUser3.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import Image from "next/image";

const Trusted = () => {
  const testimonials = [
    {
      image: trustedUser1,
      name: "mst. sadia akter",
      address: "Dhaka",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta, veritatis vero deserunt aut error qui enim labore nihil harum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta.",
    },
    {
      image: trustedUser2,
      name: "Mizanur islam",
      address: "Khulna",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta, veritatis vero deserunt aut error qui enim labore nihil harum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta.",
    },
    {
      image: trustedUser3,
      name: "md. mahim miya",
      address: "Chittagong",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta, veritatis vero deserunt aut error qui enim labore nihil harum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta.",
    },
    {
      image: trustedUser1,
      name: "mst. sadia akter",
      address: "Dhaka",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta, veritatis vero deserunt aut error qui enim labore nihil harum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta.",
    },
    {
      image: trustedUser2,
      name: "Mizanur islam",
      address: "Khulna",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta, veritatis vero deserunt aut error qui enim labore nihil harum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta.",
    },
    {
      image: trustedUser3,
      name: "md. mahim miya",
      address: "Chittagong",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta, veritatis vero deserunt aut error qui enim labore nihil harum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta.",
    },
  ];
  return (
    <div className="my-20">
      <Container>
        <div>
          <h4 className="text-xl text-[#FF65C0] text-center mb-5">
            Trusted Brand
          </h4>
          <h2 className="text-3xl text-[#3D4C5E] font-bold mb-10 text-center">
            Trust by 1600+ Couples
          </h2>
        </div>
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            {testimonials.map((testimonial, i) => (
              <SwiperSlide className="" key={i}>
                <div className=" bg-white rounded-lg shadow-md border border-[#FF65C0] px-3 pb-3 pt-6 max-w-[350px] text-start">
                  <div className="">
                    <div>
                      <Image
                        src={testimonial?.image}
                        alt="love_image"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="h-[100px] w-[100px]"
                      />
                    </div>
                  </div>
                  <div className="mt-12">
                    <p className="text-gray-600 mb-4">{testimonial.review}</p>
                    <h2 className="text-lg font-bold">{testimonial.name}</h2>
                    <p className="text-gray-600">{testimonial.address}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Trusted;
