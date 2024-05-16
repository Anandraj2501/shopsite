import { LiaFilterSolid } from "react-icons/lia";
import { useState } from "react";
import ApplyFilter from "./ApplyFilter";

const Filter = () => {
    const [filterOpen,setFilterOpen] = useState(false);
    const handleFilterClick = ()=>{
        setFilterOpen(!filterOpen);
    }

    return (
        <>
            <ApplyFilter handleFilterClick={handleFilterClick} filterOpen={filterOpen}/>
            <div className="bottom-0 sticky z-10 bg-slate-500 flex justify-center py-[10px]">
                <div className="flex items-center font-bold">
                    <LiaFilterSolid />
                    <span className="ml-[10px] cursor-pointer lg:text-xl" onClick={handleFilterClick}>Filters</span>
                </div>
            </div>

        </>
    )
}

export default Filter;