import React from "react";
import Image from "next/image";
import { NewArrivalCardsPropsTypes } from "../../../types/ComponentsTypes";
import Link from "next/link";
import { ProductDetaildCardsPropsType } from "../../../types/ComponentsTypes";
const ProductDetailCard = ({id, image, title, price, discount, rating, ratingReview, offer, positionStyles}:ProductDetaildCardsPropsType) => {
  return (
    <>
     <Link href={`/newArrival/${id}`} passHref>
      <div className="w-[295px] h-[298px] rounded-[20px] bg-BannerBgColor absolute top-[1991px] "
      
      style={{ position: "absolute", ...positionStyles }}>
        <Image
          src={image}
          alt="product-image"
          height={296}
          width={444}
          className="w-[444px] h-[296px] absolute rounded-[20px]"
        />
        <h1 className="absolute top-[317px] font-satoshi font-bold text-[20px] text-blackBgColor">
         {title}
        </h1>
        <div className="w-[150px] h-[19px] absolute top-[350px] flex gap-[13px] items-center">
          <Image
            src={rating}
            alt="rating-star"
            height={18.49}
            width={104}
            className="h-[18.49px] w-[104px]"
          />
         {ratingReview && ( 
          <p className="text-[14px] text-blackBgColor font-normal whitespace-nowrap">
            {ratingReview} <span className="text-opacity-60 text-black">/5</span>
          </p>
        )}
        </div>
        <div className="w-[200px] h-[32px] absolute top-[380px] flex gap-[10px] items-center">
          <span className="text-[24px] font-bold text-blackBgColor">{price}</span>
          {discount && (
          <span className="text-[24px] font-bold  text-black opacity-15 line-through">
            {discount}
          </span>
        )}
          {offer && (
          <span className="w-[58px] h-[28px] py-[6px] px-[14px] rounded-[62px] bg-redOfferBgColor bg-opacity-10 text-[12px] font-medium text-redTextOfferColor">
            {offer}
          </span>
        )}
        </div>
      </div>
      </Link>
     
    </>
  );
};

export default ProductDetailCard;
