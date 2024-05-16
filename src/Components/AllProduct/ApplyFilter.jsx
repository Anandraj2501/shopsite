import React from 'react';
import { IoIosStar } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

export default function ApplyFilter({ handleFilterClick, filterOpen }) {
    return (
        <div className={`filter-container bottom-0 fixed z-20 bg-slate-600 ${filterOpen ? 'w-[100%] px-[18px] py-[10px]' : 'w[0px] px-[0px] py-[0px]'} transition-width duration-500 ease-linear`}>
            {
                filterOpen &&
                <><span className="flex justify-end cursor-pointer" onClick={handleFilterClick} ><IoMdClose size={20} /></span>
                    <div>
                        <span className="mb-[10px] block">Filter By price</span>
                        <div className="flex  ">
                            <input type="checkbox" name="price" /> <span className="ml-[10px] text-white">₹100 - ₹250</span>
                        </div>

                        <div className="flex  ">
                            <input type="checkbox" name="price" /> <span className="ml-[10px] text-white">₹250 - ₹500</span>
                        </div>

                        <div className="flex  ">
                            <input type="checkbox" name="price" /> <span className="ml-[10px] text-white">₹500 - ₹750</span>
                        </div >

                        <div className="flex  ">
                            <input type="checkbox" name="price" /> <span className="ml-[10px] text-white">₹750 - ₹1000</span>
                        </div >

                        <div className="flex  ">
                            <input type="checkbox" name="price" /> <span className="ml-[10px] text-white">₹1250 - ₹1500</span>
                        </div>
                        <div className="flex  ">
                            <input type="checkbox" name="price" /> <span className="ml-[10px] text-white">₹1500 - ₹1750</span>
                        </div>
                        <div className="flex  ">
                            <input type="checkbox" name="price" /> <span className="ml-[10px] text-white">₹2000 - Above</span>
                        </div>
                    </div>

                    <div>
                        <span className="my-[10px] block">Filter By Rating</span>
                        <div className="flex  ">
                            <input type="checkbox" name="price" /> <span className="ml-[10px] flex"><IoIosStar className='stars' style={{ color: '#f3b519' }} /></span>
                        </div>

                        <div className="flex  ">
                            <input type="checkbox" name="price" /> <span className="ml-[10px] flex"><IoIosStar className='stars' style={{ color: '#f3b519' }} /><IoIosStar className='stars' style={{ color: '#f3b519' }} /></span>
                        </div>

                        <div className="flex  ">
                            <input type="checkbox" name="price" /> <span className="ml-[10px] flex"><IoIosStar className='stars' style={{ color: '#f3b519' }} /><IoIosStar className='stars' style={{ color: '#f3b519' }} /><IoIosStar className='stars' style={{ color: '#f3b519' }} /></span>
                        </div>

                        <div className="flex  ">
                            <input type="checkbox" name="price" /> <span className="ml-[10px] flex"><IoIosStar className='stars' style={{ color: '#f3b519' }} /><IoIosStar className='stars' style={{ color: '#f3b519' }} /><IoIosStar className='stars' style={{ color: '#f3b519' }} /><IoIosStar className='stars' style={{ color: '#f3b519' }} /></span>
                        </div>

                        <div className="flex  ">
                            <input type="checkbox" name="price" /> <span className="ml-[10px] flex"><IoIosStar className='stars' style={{ color: '#f3b519' }} /><IoIosStar className='stars' style={{ color: '#f3b519' }} /><IoIosStar className='stars' style={{ color: '#f3b519' }} /><IoIosStar className='stars' style={{ color: '#f3b519' }} /><IoIosStar className='stars' style={{ color: '#f3b519' }} /></span>
                        </div>
                    </div>
                </>}

        </div >
    )
}
