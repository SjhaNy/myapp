import { SORT_BY_LIST } from "@/constant"
import { useState } from "react";

export default function Sortby(){
    const [selectedOption, setSelectedOption] = useState(null);
    const handleOptionChange = (event:any) => {
        setSelectedOption(event.target.value);
      };
    
    return(
    <div>
        <p className="text-[20px] font-medium py-6">Sort by</p>
        <div className="flex flex-col space-y-4 pb-6">
            {SORT_BY_LIST.map((item: any, index: number) => {
                return (
                    <label className="flex items-center text-[14px]">
                <input type="radio" name={item.key} value={item.key} className="mr-2" onChange={handleOptionChange} checked={selectedOption===item.key}/>
                {item.name}</label>
                   
                );
                })}


        </div>


    </div>
    )
}