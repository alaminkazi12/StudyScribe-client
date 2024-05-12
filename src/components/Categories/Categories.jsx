import axios from "axios";
import { useEffect, useState } from "react";
import Categorycard from "./Categorycard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/bundle";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/categories").then((res) => {
      console.log(res.data);
      setCategories(res.data);
    });
  }, []);
  return (
    <div className="mt-14 bg-[#f5f5f5] rounded-2xl p-6">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-[#004d99]">Books Categories</h2>
        <p className="w-[60%] mx-auto">
          Dive into a world of captivating genres - from magical realms of
          fantasy to timeless classics and heartwarming romances.
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
          {categories.map((category) => (
            <SwiperSlide key={category._id}>
              <Categorycard category={category}></Categorycard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Categories;
