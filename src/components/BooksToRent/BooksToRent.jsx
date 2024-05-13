import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/bundle";
import BookRentCard from "./BookRentCard";
import axios from "axios";
import { useState } from "react";

const BooksToRent = () => {
  const [Products, setProducts] = useState([]);

  axios.get(`http://localhost:5000/books`).then((res) => {
    console.log(res.data);
    setProducts(res.data);
  });

  return (
    <div className="mt-14">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-[#004d99]">
          Discover Your Next Adventure
        </h2>
        <p className="w-[60%] mx-auto">
          Explore a World of Stories with Our Book Rental Service
        </p>
      </div>
      <div className="mt-14">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {Products.map((book) => (
            <SwiperSlide key={book._id}>
              <BookRentCard book={book}></BookRentCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BooksToRent;
