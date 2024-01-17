interface IProduct{
    tittle:string,
    subTitle:string,
    imageUrl:string,
    price?:any,
    discountedPrice?:any,
    discount?:any,
    urgencyTag?:any,
}
export default function ProductCard({tittle, subTitle, imageUrl, price, discountedPrice, discount, urgencyTag}:IProduct) {
 
    return (
    <div>
        <img src={imageUrl}/>
        <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 mt-1 text-[10px] font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 uppercase tracking-[1px]">Express Shipping</span>
        <div className="px-2">
            <p className="text-[12px] pt-2">{tittle}</p>
            <p className="text-[12px]">{subTitle}</p>
            <p className="pt-1 text-[14px]">₹{discountedPrice} <s className="text-[12px] text-gray-500">₹{price}</s> <span className="text-green-600 text-[12px]">{`${discount}%`}</span></p>
            <p className="pt-1 text-red-950 text-[12px]">{urgencyTag}</p>
        </div>
        

    </div>
    )
  }