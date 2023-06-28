"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import RoadmapSubMenuItem from "./RoadmapSubMenuItem";

const RoadmapSubMenu = () => {
  const breakpoints = {
    560: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
    760: {
      slidesPerView: 10,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 10,
      spaceBetween: 10,
    },
  };

  return (
    <div className="relative">
      <Swiper
        className="text-white"
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={4.6}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        centeredSlidesBounds={true}
        breakpoints={breakpoints}
      >
        <SwiperSlide>
          <RoadmapSubMenuItem
            title="프론트엔드"
            imgSrc="/assets/roadmaps/frontend.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <RoadmapSubMenuItem
            title="백엔드"
            imgSrc="/assets/roadmaps/backend.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <RoadmapSubMenuItem
            title="풀스택"
            imgSrc="/assets/roadmaps/fullstack.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <RoadmapSubMenuItem
            title="모바일 개발"
            imgSrc="/assets/roadmaps/mobile.png"
          />
        </SwiperSlide>

        <SwiperSlide>
          <RoadmapSubMenuItem title="게임" imgSrc="/assets/roadmaps/game.png" />
        </SwiperSlide>
        <SwiperSlide>
          <RoadmapSubMenuItem
            title="프로그래밍 언어"
            imgSrc="/assets/roadmaps/programming_lang.png"
          />
        </SwiperSlide>

        <SwiperSlide>
          <RoadmapSubMenuItem
            title="데이터 과학"
            imgSrc="/assets/roadmaps/data_science.png"
          />
        </SwiperSlide>

        <SwiperSlide>
          <RoadmapSubMenuItem
            title="CS/IT지식"
            imgSrc="/assets/roadmaps/cs.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <RoadmapSubMenuItem
            title="DevOps"
            imgSrc="/assets/roadmaps/devops.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <RoadmapSubMenuItem
            title="개발도구"
            imgSrc="/assets/roadmaps/devtools.png"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default RoadmapSubMenu;
