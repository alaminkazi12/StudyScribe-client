import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  Zoom,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css/bundle";
import { useEffect, useState } from "react";
import BannerCard from "./BannerCard";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Banner = () => {
  const axiosSecure = useAxiosSecure([]);
  const [featuredbooks, setFeaturedBooks] = useState([]);
  useEffect(() => {
    axiosSecure.get("/featuredbooks").then((res) => {
      console.log(res.data);
      setFeaturedBooks(res.data);
    });
  }, [axiosSecure]);

  return (
    <div className=" bg-[#f5f5f5] rounded-2xl mt-10">
      <Swiper
        pagination={{
          type: "fraction",
        }}
        // effect={"coverflow"}
        // coverflowEffect={{
        //   rotate: 100,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 2,
        //   slideShadows: true,
        // }}
        zoom={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay, Zoom, EffectCoverflow]}
        className="mySwiper"
      >
        {featuredbooks.map((book) => (
          <SwiperSlide key={book._id}>
            <BannerCard book={book}></BannerCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
