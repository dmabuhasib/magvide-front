import React from "react";
import SubHeading from "../layout/SubHeading";

import Para from "../layout/Para";
import Image from "next/image";
import Heading from "../layout/Heading";
import { Box } from "@chakra-ui/react";
import ButtonP from "../layout/ButtonP";

const ChooseUs = () => {
  return (
    <div>
      <div>
        <div className="w-[75%] md:w-[65%] mx-auto">
          <SubHeading
            className="text-center text-sm md:text-base lg:text-lg xl:text-xl yellow-gr font-pop font-bold"
            title="WHY CHOOSE US"
          />
          <Heading
            className=" text-center text-primary py-2 sm:py-3 md:py-4 lg:py-5 xl:py-7 lg:leading-[44px] xl:leading-[64px]    text-xl sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold font-pop"
            title="We Help You To Increase Your 
              Sale Through Solution"
          />
          <div className="w-[95%] sm:w-[90%] md:w-[100%] lg:w-[70%] mx-auto">
            <Para
              className="text-center text-sm sm:text-base lg:text-lg text-para font-inter pb-8"
              title="In our daily life, people usually look for different IT services 
                for that. But from now on, no more worries,"
            />
          </div>
        </div>
        <div className="flex flex-wrap px-3 sm:px-5 justify-between md:pt-3 lg:pt-6 gap-y-4 sm:gap-y-6 md:px-">
          <div className="bg-white w-[48%] md:w-[31%] lg:w-[23%] shadow-cshadow p-3 sm:p-5 lg:p-5 xl:p-7 rounded-md">
            <div className="w-[40px] h-[42px] sm:w-[60px] sm:h-[63px] lg:w-[70px]  lg:h-[74px] xl:w-[80px] xl:h-[84px] relative">
              <Image fill src="/assets/brand-icon.png" alt="brand-icon-img" />
            </div>
            <SubHeading
              className="text-primary font-pop font-bold text-base sm:text-lg lg:text-xl
                 pt-4 pb-2 lg:pt-6 lg:pb-4"
              title="Branding Strategy"
            />
            <Para
              className=" text-sm sm:text-base lg:text-lg text-para font-inter"
              title="We will help you with all your needs. In fact, you will get all kinds of services "
            />
          </div>
          <div className="bg-white w-[48%] md:w-[31%] lg:w-[23%] shadow-cshadow p-3 sm:p-5 lg:p-5 xl:p-7 rounded-md">
            <div className="w-[40px] h-[42px] sm:w-[60px] sm:h-[63px] lg:w-[70px]  lg:h-[74px] xl:w-[80px] xl:h-[84px] relative">
              <Image fill src="/assets/social-icon.png" alt="brand-icon-img" />
            </div>
            <SubHeading
              className="text-primary font-pop font-bold text-base sm:text-lg lg:text-xl
                 pt-4 pb-2 lg:pt-6 lg:pb-2"
              title="Professional Marketing"
            />
            <Para
              className=" text-sm sm:text-base lg:text-lg text-para font-inter"
              title="We will help you with all your needs. In fact, you will get all kinds of services "
            />
          </div>
          <div className="bg-white w-[48%] md:w-[31%] lg:w-[23%] shadow-cshadow p-3 sm:p-5 lg:p-5 xl:p-7 rounded-md">
            <div className="w-[40px] h-[42px] sm:w-[60px] sm:h-[63px] lg:w-[70px]  lg:h-[74px] xl:w-[80px] xl:h-[84px] relative">
              <Image fill src="/assets/design-icon.png" alt="brand-icon-img" />
            </div>
            <SubHeading
              className="text-primary font-pop font-bold text-base sm:text-lg lg:text-xl
                 pt-4 pb-2 lg:pt-6 lg:pb-4"
              title="Unique Design"
            />
            <Para
              className=" text-sm sm:text-base lg:text-lg text-para font-inter"
              title="We will help you with all your needs. In fact, you will get all kinds of services "
            />
          </div>
          <div className="bg-white w-[48%] md:w-[31%] lg:w-[23%] shadow-cshadow p-3 sm:p-5 lg:p-5 xl:p-7 rounded-md">
            <div className="w-[40px] h-[42px] sm:w-[60px] sm:h-[63px] lg:w-[70px]  lg:h-[74px] xl:w-[80px] xl:h-[84px] relative">
              <Image fill src="/assets/grow-icon.png" alt="brand-icon-img" />
            </div>
            <SubHeading
              className="text-primary font-pop font-bold text-base sm:text-lg lg:text-xl
                 pt-4 pb-2 lg:pt-6 lg:pb-4"
              title="Growing Sales"
            />
            <Para
              className=" text-sm sm:text-base lg:text-lg text-para font-inter"
              title="We will help you with all your needs. In fact, you will get all kinds of services "
            />
          </div>
        </div>
      </div>

      <div className="w-[95%] sm:w-[90%] md:w-[100%] lg:w-[70%] mx-auto mt-36 mb-14">
        <Heading
          className=" text-center text-primary py-2 sm:py-3 md:py-4 lg:py-5 xl:py-7 lg:leading-[44px] xl:leading-[64px]    text-xl sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold font-pop"
          title="Ready to Make Some Noise Online?"
        />
        <Para
          className="text-center text-sm sm:text-base lg:text-lg text-para font-inter pb-8"
          title="If you're ready to take your website from a whisper to a BOOM, it's time to join forces with Magvide. We'll be your digital marketing superheroes, fighting the good fight against invisibility and obscurity. Contact us today, and let's make some online magic happen!"
        />
      </div>
      <Box height={"100px"} position={"relative"}>
        <Box
          width={"80%"}
          height={"200px"}
          mx={"auto"}
          display={"flex"}
          backgroundColor={"#A1E0F8"}
          justifyContent={"center"}
          gap={"40px"}
          alignItems={"center"}
          position={"absolute"}
          left={"130px"}
          top={"-80px"}
          background="linear-gradient(139.27deg, #feda00 0%, #ff9900 93.57%)"
        >
          <Para
            className=" w-[60%] text-sm sm:text-base lg:text-lg text-black font-inter text-left pb-8"
            title="If you're ready to take your website from a whisper to a BOOM, it's time to join forces with Magvide. We'll be your digital marketing superheroes, fighting the good fight against invisibility and obscurity. Contact us today, and let's make some online magic happen!"
          />
          <ButtonP title={"Submit Now"} />
        </Box>
      </Box>
    </div>
  );
};

export default ChooseUs;
