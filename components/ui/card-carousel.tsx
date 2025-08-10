"use client"

import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/navigation"
import "swiper/css/pagination"
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules"

import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardFooter,
  MinimalCardImage,
  MinimalCardTitle,
} from "@/components/ui/minimal-card"
import GradientBackground from "../gradient-background"
import { LinkPreview } from "./link-preview"

interface CarouselProps {
  cards: { src: string; title: string; description: string, iconList: string[], link: string }[]
  autoplayDelay?: number
  showPagination?: boolean
  showNavigation?: boolean
}

export const CardCarousel: React.FC<CarouselProps> = ({
  cards,
  autoplayDelay = 1500,
  showPagination = false,
  showNavigation = true,
}) => {
  const css = `
  .swiper {
    width: 100%;
    padding-bottom: 50px;
  }
  
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 500px;
    height: 300px;
    /* margin: 20px; */
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
  }
  
  
  .swiper-3d .swiper-slide-shadow-left {
    background-image: none;
  }
  .swiper-3d .swiper-slide-shadow-right{
    background: none;
  }

  .swiper-button-prev, .swiper-button-next {
    position: absolute;
    top: var(--swiper-navigation-top-offset, 50%);
    height: 30px;
    width: 30px;
    margin-top: calc(0px - (var(--swiper-navigation-size) / 2));
    z-index: 10;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ac6bbe;
    opacity: 0.75;
    padding: 25px;
  }
  `

  return (
    <section className="w-ace-y-4">
      <style>{css}</style>
      <div className="mx-auto w-full container-layout rounded-[24px] lg:border lg:border-light-purple/10 p-2 shadow-sm md:rounded-t-[44px]">
        <div className="relative mx-auto flex w-full flex-col rounded-[24px] lg:border lg:border-light-purple/10 bg-neutral-800/5 p-2 shadow-sm md:items-start md:gap-8 md:rounded-b-[20px] md:rounded-t-[40px] md:p-2 md:py-5">
          <div className="flex w-full items-center justify-center gap-4">
            {showNavigation && (
              <>
                <div className="swiper-button-prev size-20" />
                <div className="swiper-button-next size-20" />
              </>
            )}
            <div className="w-full">
              <Swiper
                spaceBetween={50}
                autoplay={{
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: -15,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}
                pagination={showPagination}
                navigation={
                  showNavigation
                    ? {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                      }
                    : undefined
                }
                modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
              >
                {cards.map((item, index) => (
                  <SwiperSlide key={index}>
                    <MinimalCard key={index}>
                      <LinkPreview url={item.link}>
                        <MinimalCardImage src={item.src} alt={item.title} />
                      </LinkPreview>
                      <MinimalCardTitle className="_h3">
                        {item.title}
                      </MinimalCardTitle>
                      <MinimalCardDescription className="sm:max-w-[70%] line-clamp-2 text-white/70 _p">
                        {item.description}
                      </MinimalCardDescription>
                      <MinimalCardFooter>
                        <div className="flex items-center ml-auto">
                          {item.iconList.map((icon, idx) => (
                            <div
                              key={icon}
                              className="border shadow shadow-light-purple border-light-purple/[0.2] rounded-full bg-[#050505] lg:w-8 lg:h-8 w-8 h-8 flex items-center justify-center overflow-hidden relative"
                              style={{
                                transform: `translateX(-${5 * idx * 2}px)`,
                              }}
                            >
                              <GradientBackground />
                              <img src={icon} alt={icon} className="p-2" />
                            </div>
                          ))}
                        </div>
                      </MinimalCardFooter>
                    </MinimalCard>
                  </SwiperSlide>
                ))}
                {cards.map((item, index) => (
                  <SwiperSlide key={index + cards.length}>
                    <MinimalCard key={index}>
                      <LinkPreview url={item.link}>
                        <MinimalCardImage src={item.src} alt={item.title} />
                      </LinkPreview>
                      <MinimalCardTitle className="_h3">
                        {item.title}
                      </MinimalCardTitle>
                      <MinimalCardDescription className="sm:max-w-[70%] line-clamp-2 text-white/70 _p">
                        {item.description}
                      </MinimalCardDescription>
                      <MinimalCardFooter>
                        <div className="flex items-center ml-auto">
                          {item.iconList.map((icon, idx) => (
                            <div
                              key={icon}
                              className="border shadow shadow-light-purple border-light-purple/[0.2] rounded-full bg-[#050505] lg:w-8 lg:h-8 w-8 h-8 flex items-center justify-center overflow-hidden relative"
                              style={{
                                transform: `translateX(-${5 * idx * 2}px)`,
                              }}
                            >
                              <GradientBackground />
                              <img src={icon} alt={icon} className="p-2" />
                            </div>
                          ))}
                        </div>
                      </MinimalCardFooter>
                    </MinimalCard>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
