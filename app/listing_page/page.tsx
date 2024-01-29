'use client'
import ProductCard from "./_components/product_card";
import { data } from "./constant";
import { PRODUCT_URL } from "@/API/api";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState<any>();

  useEffect(() => {
    // Fetch product data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get(PRODUCT_URL);
        setData(response.data); // Assuming the API response has the same structure as your data object
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  return (
    <main className="p-10">
      <div className="pb-6">
        <h1 className="font-bold text-[18px]">{data?.response?.title}</h1>
        <p className="text-[12px] text-slate-500">
          {data?.response?.products?.length} products
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {data.response.products.map((item: any, index: number) => {
          return (
            <ProductCard
              tittle={item?.title}
              key={index}
              subTitle={item.subTitle}
              imageUrl={item.imageUrl}
              price={item.price}
              discountedPrice={item.discountedPrice}
              discount={item.discount}
              urgencyTag={item.urgencyTag}
              tag={item.tag}
            />
          );
        })}
      </div>
    </main>
  );
}
