import ProductCard from './_components/product_card'
import {data} from './constant'



export default function Home() {
 
  return (
    <main className='p-10'>
      <div className='pb-6'>
        <h1 className='font-bold text-[18px]'>{data.response.title}</h1>
        <p className='text-[12px] text-slate-500'>{data.response.products.length} products</p>
      </div>
     <div className="grid grid-cols-4 gap-4">
      {
        data.response.products.map((item, index)=>{
        return(
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

        )


        })
      }

     </div>

    </main>
  )
}
