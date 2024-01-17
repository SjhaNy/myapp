'use client'
import Image from 'next/image'
import axios from 'axios'
import { useEffect } from 'react'
import ProductCard from './_components/product_card'

const data = [{
    "id": "2175555",
    "sku": "URFS0049",
    "price": 1199,
    "discountedPrice": 756,
    "discount": 37,
    "type": "configurable",
    "title": "Urbano Fashion",
    "subTitle": "Men Slim Fit Jeans",
    "imageUrl":"https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/b/e/tr:w-270,/bear-tally-bk_1_191a2e9f.jpg?rnd=20200526195200",
    "isOutOfStock": 0,
    "sizeVariation": [
      {
      "title": "28",
      "id": "2175556"
      },
      {
      "title": "30",
      "id": "2175557"
      },
      {
      "title": "32",
      "id": "2175558"
      },
      {
      "title": "34",
      "id": "2175559"
      },
      {
      "title": "36",
      "id": "2175560"
      },
      {
      "title": "38",
      "id": "2175561"
      },
      {
      "title": "40",
      "id": "2175562"
      }
      ],
      "offerCount": 0,
      "offers": [],
      "actionUrl": "/urbano-fashion-men-slim-fit-jeans-22/p/2175555",
      "aspectRatio": 0.75,
      "sibling_colour_codes": [],
      "urgencyTagIdentifier": 1,
      "urgencyTag": "Lowest price ever",
}] 


export default function Home() {
 
  return (
    <main className='p-10'>
      <div className='pb-6'>
        <h1 className='font-bold text-[18px]'>Cotton Jeans & Shirt</h1>
        <p className='text-[12px] text-slate-500'>1 product</p>
      </div>
     <div className="grid grid-cols-4 gap-4">
      {
        data.map((item, index)=>{
        return(
         <ProductCard 
           tittle={item.title}
           subTitle={item.subTitle}
           imageUrl={item.imageUrl}
           price={item.price}
           discountedPrice={item.discountedPrice}
           discount={item.discount}
           urgencyTag={item.urgencyTag}
         />

        )


        })
      }

     </div>

    </main>
  )
}
