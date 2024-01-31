// components/BottomTabs.tsx
import React, { useState } from 'react';
import BottomDrawer from '@/components/modal';
import Sortby from './_components/sortby';
import Filterby from './_components/filter';

const BottomTabs: React.FC = () => {
    const[opensortby, setOpensortby] = useState<boolean>(false);
    const[openfilter, setOpenfilter] = useState<boolean>(false);
    
    // arrowfunc
    const handleSortby = () => {
        setOpensortby(!opensortby)
    }
    const handleFilter = () => {
        setOpenfilter(!openfilter)
    }


  return (
    <div>
        <nav className="fixed bottom-0 w-full bg-white p-4 md:hidden">
      <div className="grid grid-cols-2">
       <div onClick={handleSortby}>

            <p className='text-[10px] uppercase'>sort by</p>
            <p className='text-[12px] capitalize'>popularity</p>
        </div>
        <div onClick={handleFilter}>
             <p className='text-[10px] uppercase'>Filter</p>
             <p className='text-[12px] capitalize'>applied</p>
        </div>
       
      </div>
    </nav>
    {
        opensortby?<BottomDrawer isOpen={opensortby} onClose={handleSortby} children={<Sortby />}/>:null
    }
    {
        openfilter?<BottomDrawer isOpen={openfilter} onClose={handleFilter} children={<Filterby />}/>:null
    }

    </div>
    
  );
};

export default BottomTabs;
