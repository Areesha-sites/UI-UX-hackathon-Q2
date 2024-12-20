"use client";
import React from "react";
import SideBar from "../Components/SideBar";
import Image from "next/image";
import Pagination from "../Components/Pagination";
import CausalCardsList from "../Components/CasualCardsList";
import Footer from "../Components/Footer";
import { useState } from "react";
const Casual = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setSidebarVisible((prev) => !prev);
  };
  return (
    <>
      <section>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="md:w-[1240px] absolute md:top-[134px] md:left-[100px]  border-b-[1px] border-black/10 w-[358px] top-[98px] left-[16px]"
        ></div>
        <div
          data-aos="fade-right"
          data-aos-delay="100"
          className="md:w-[106px] w-[89px] h-[22px] absolute md:top-[158px] md:left-[100px] left-[16px] flex gap-[12px] items-center top-[118px]"
        >
          <span className="font-satoshi md:text-[16px] text-[14px] font-normal text-black/60">
            Home
          </span>
          <Image
            src="/Frame (5).svg"
            alt="icon"
            height={16}
            width={16}
            className="md:h-[16px] md:w-[16px] h-[14px] w-[14px]"
          />
          <span className="font-satoshi md:text-[16px] text-[14px] font-normal text-black">
            Casual
          </span>
        </div>
        <div className={`${isSidebarVisible ? "block" : "hidden"} md:block`}>
          <SideBar closeSidebar={toggleSidebar} />
        </div>
        <h1
          data-aos="zoom-in"
          data-aos-delay="200"
          className="absolute md:top-[204px] top-[149px] md:left-[415px] left-[16px] md:text-[32px] text-[24px] font-bold text-black font-satoshiBold"
        >
          Casual
        </h1>
        <div className="md:w-[396px] md:h-[16px]  absolute md:top-[217px] md:left-[944px] left-[112px]  flex md:gap-[12px] top-[157px] items-center">
          <p
            data-aos="zoom-in"
            data-aos-delay="200"
            className="md:text-[16px] text-[14px] font-normal font-satoshi text-black/60 whitespace-nowrap"
          >
            Showing 1-10 of 100 Products
          </p>
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="md:flex gap-[4px] items-center hidden "
          >
            <p className="text-[16px] font-normal font-satoshi text-black/60 whitespace-nowrap">
              Sort by: <span className="text-black">Most Popular</span>
            </p>
            <Image
              src="/sort-chevron.svg"
              alt="icon"
              height={16}
              width={16}
              className="h-[16px] w-[16px]"
            />
          </div>
          <div
            className="w-[32px] h-[32px] absolute top-[-5px] left-[230px] rounded-[62px] bg-bgLightGrayColor flex justify-center items-center md:hidden"
            onClick={toggleSidebar}
          >
            <Image
              src="/Frame (6).svg"
              alt="icon"
              height={16}
              width={16}
              className="h-[16px] w-[16px]"
            />
          </div>
        </div>
        <div className="absolute md:top-[263px] md:left-[415px] left-[16px] top-[220px]">
          <CausalCardsList />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="md:w-[925px] w-[358px] md:left-[415px] md:top-[1580px] top-[1083px]  left-[16px] absolute border-b-[1px] border-black/10 "
        ></div>
        <Pagination />
      </section>
      <div className="absolute md:top-[1830px] top-[1500px] z-20">
        <Footer />
      </div>
    </>
  );
};

export default Casual;
