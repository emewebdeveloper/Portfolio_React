import React from 'react'
import './Test.css'
import AVTR1 from '../../Assets/avatar1.jpg'
import AVTR2 from '../../Assets/avatar2.jpg'
import AVTR3 from '../../Assets/avatar3.jpg'
import AVTR4 from '../../Assets/avatar4.jpg'
// import Swiper core and required modules
import { Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// Array is used here
const data=[

  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'I had the pleasure of working with this talented individual on a website redesign project. Their expertise in UI/UX design, web development, and content creation was evident from the start. They were able to take our vision and turn it into a beautiful and functional website that exceeded our expectations. I highly recommend them for any project.'
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: 'I hired this person to help me with my online business and I could not be happier with the results. Their skills in UI/UX design, web development, and content creation are top-notch. They were able to create a user-friendly website that has helped me attract more customers and increase my sales. I would definitely work with them again.'
  },
  {
    avatar: AVTR3,
    name: 'kwame Despite',
    review: 'I was looking for someone to help me improve the user experience on my website and this person was the perfect fit. Their knowledge of UI/UX design, web development, and content creation is impressive. They were able to make suggestions and implement changes that have greatly improved the user experience on my website. I highly recommend them.'
  },
  {
    avatar: AVTR4,
    name: 'Sarah Lee',
    review: 'I needed someone to help me create a website for my new business and this person was the perfect choice. Their skills in UI/UX design, web development, and content creation are exceptional. They were able to create a beautiful and functional website that has helped me establish my online presence. I would definitely work with them again.'
  }
]









const Test = () => {
  return (
    <section className="testimonials">
      <h5>Review From clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
       {
        data.map(({avatar,name,review},index)=>{
          return(
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          )
        })
       }
      </Swiper>
    </section>
  )
}

export default Test