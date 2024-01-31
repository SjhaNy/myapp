'use client'
import ProductCard from "./_components/product_card";
import { mockdata } from "./constant";
import { PRODUCT_URL } from "@/API/api";
import { useEffect, useState } from "react";
import axios from "axios";
import BottomTabs from "./_components/bottom_navigate";



export default function Home() {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<any>();


  useEffect(() => {
    // Fetch product data from the API
    const fetchData = async () => {
      try {
        // api integration 
        // const response = await axios.get(`${PRODUCT_URL}?page=${page}`);

        const next = currentPage * itemsPerPage
        console.log(next)
        setData(mockdata.response.products.slice(0,next));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [currentPage]); // Empty dependency array ensures the effect runs only once after the initial render

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      // User has scrolled to the bottom      
      setCurrentPage(prevPage => prevPage + 1);

    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="p-4 md:p-10">
      <div className="pb-6">
        <h1 className="font-bold text-[18px]">{mockdata?.response?.title}</h1>
        <p className="text-[12px] text-slate-500">
          {data?.length} products
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data?.map((item: any, index: number) => {
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

    </div>
    <BottomTabs />
    
    </div>
    
  );
}
