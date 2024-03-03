import React, { useEffect, useState } from 'react';


const SrTable1 = () => {


    const [selectAll, setSelectAll] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);

    // For Data Mapping
    const [informations, setInformation] = useState([])

    useEffect(() => {
        setInformation(items)

    }, [])

    const items = [
        {
            id: 1,
            prNo: 'PR/EKCL/23/000024',
            product: "Ball pen-1",
            specification: "Gel",
            reqQty: "2",
            ordered: "0",
            remaining: "1",
            qty: "",
            Price: "",
            Discount: "",
            Total: "",
            Remarks: "",
        },

        {
            id: 2,
            prNo: 'PR/EKCL/23/000026',
            product: "Ball pen-1",
            specification: "Gel",
            reqQty: "2",
            ordered: "0",
            remaining: "1",
            qty: "",
            Price: "",
            Discount: "",
            Total: "",
            Remarks: "",
        },

        {
            id: 3,
            prNo: 'PR/EKCL/23/000026',
            product: "Ball pen-3",
            specification: "Gel-2",
            reqQty: "3",
            ordered: "1",
            remaining: "2",
            qty: "",
            Price: "",
            Discount: "",
            Total: "",
            Remarks: "",
        },


    ];



    const toggleSelectAll = () => {
        setSelectAll(!selectAll);
        if (!selectAll) {
            setSelectedItems(informations.map(item => item.id));
        } else {
            setSelectedItems([]);
        }
    };

    const toggleCheckbox = itemId => {
        if (selectedItems.includes(itemId)) {
            setSelectedItems(selectedItems.filter(id => id !== itemId));
        } else {
            setSelectedItems([...selectedItems, itemId]);
        }
    }




    return (


        <>
            <div className='px-4 sm:px-14 mt-7 sm:text-[10px] lg:text-[13px] overflow-x-auto  '>

                <table className='table-auto  border-slate-500  max-w-[100%]'>

                    <thead>

                        <tr className='bg-[#EEEEEE]'>

                            <th className=' w-[400px] py-4'> PR No</th>
                            {/* <th className='border-2 border-slate-500 w-[400px] py-4'>
                                <div className='flex justify-evenly  items-center '>
                                    <div><GrCheckbox /></div>
                                    <div>item</div>
                                </div>
                            </th> */}
                            {/* checked={selectAll} onChange={handleSelectAllChange} */}
                            <th className=' w-[100px] py-4'>
                                <input type="checkbox" checked={selectAll}
                                    onChange={toggleSelectAll} /> </th>


                            <th className=' w-[400px] py-4'>Item</th>

                            <th className=' w-[400px] py-4'>Specification</th>

                            <th className='w-[400px] py-4'>Req Qty </th>

                            <th className=' w-[400px] py-4'> Ordered </th>

                            <th className=' w-[400px] py-4'> Remaining </th>

                            {/* <th className='border-2 border-slate-500 w-[400px] py-4'>Qty </th> */}
                            <th className=' w-[300px] py-4'>
                                <div className='flex justify-evenly  items-center '>
                                    {/* <div><GrCheckbox /></div> */}
                                    <div>Qty</div>
                                </div>
                            </th>

                            {/* <th className='border-2 border-slate-500 w-[400px] py-4'>Price </th> */}
                            <th className=' w-[400px] py-4'>
                                <div className='flex justify-evenly  items-center '>
                                    {/* <div><GrCheckbox /></div> */}
                                    <div>Price</div>
                                </div>
                            </th>

                            <th className=' w-[400px] py-4'>Discount </th>

                            <th className=' w-[400px] py-4'>Total </th>

                            <th className=' w-[400px] py-4'> Remarks </th>

                        </tr>

                    </thead>



                    <tbody className='text-center'>


                        {
                            informations.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <td className=' w-[400px] py-4 text-[blue]'>{item.prNo}</td>

                                        {/* <th className='border-2 border-slate-500 w-[400px] py-4'>
                                            <div className='flex justify-evenly  items-center '>
                                                <div><GrCheckbox /></div>
                                                <div>Ball pen</div>
                                            </div>
                                        </th> */}
                                        {/* checked={selectedItems.includes(items.id)}
                            onChange={() => handleCheckboxChange(items.id)} */}
                                        <td className=' w-[100px] py-4 '>
                                            <input type="checkbox" checked={selectedItems.includes(item.id)}
                                                onChange={() => toggleCheckbox(item.id)} />
                                        </td>

                                        <td className=' w-[400px] py-4'> {item.product}</td>
                                        <td className=' w-[400px] py-4'> {item.specification} </td>

                                        <td className=' w-[400px] py-4'>{item.reqQty}</td>

                                        <td className=' w-[400px] py-4'>{item.ordered}</td>

                                        <td className=' w-[400px] py-4'>{item.remaining}</td>

                                        <td className=' w-[400px] py-4'>
                                            <input className='focus:outline-none border-b border-[#323232] focus:border-[#E74A3B] w-[100px]' type="text" name="" id="" />
                                        </td>

                                        <td className=' w-[300px] py-4'>
                                            <input className='focus:outline-none border-b border-[#323232] focus:border-[#E74A3B] w-[100px]' type="text" name="" id="" />
                                        </td>
                                        <td className=' w-[400px] py-4'>
                                            <input className='focus:outline-none border-b border-[#323232] focus:border-[#E74A3B] w-[100px]' type="text" name="" id="" />
                                        </td>

                                        <td className=' w-[400px] py-4'>
                                            <input className='focus:outline-none border-b border-[#323232] focus:border-[#E74A3B] w-[100px]' type="text" name="" id="" />
                                        </td>

                                        <td className=' w-[400px] py-4'>
                                            <input className='focus:outline-none border-b border-[#323232] focus:border-[#E74A3B] w-[100px]' type="text" name="" id="" />
                                        </td>

                                    </tr>

                                )
                            })
                        }


                    </tbody>

                </table>



            </div>





            {/* alternate */}
            {/* <div className='px-4 sm:px-14 mt-7 sm:text-[10px] lg:text-[13px] overflow-x-auto   '>

                <table className='table-auto border-2 border-slate-500 border-collapse max-w-[100%]'>

                    <thead>

                        <tr className='bg-[#EEEEEE]'>

                            <th className='border-2 border-slate-500 w-[400px] py-4'> PR No</th>
                            
                            <th className='border-2 border-slate-500 w-[100px] py-4'> <GrCheckbox /></th>
                            <th className='border-2 border-slate-500 w-[400px] py-4'>Item</th>

                            <th className='border-2 border-slate-500 w-[400px] py-4'>Specification</th>

                            <th className='border-2 border-slate-500 w-[400px] py-4'>Req Qty </th>

                            <th className='border-2 border-slate-500 w-[400px] py-4'> Ordered </th>

                            <th className='border-2 border-slate-500 w-[400px] py-4'> Remaining </th>

                            
                            <th className='border-2 border-slate-500 w-[300px] py-4'>
                                <div className='flex justify-evenly  items-center '>
                                    <div><GrCheckbox /></div>
                                    <div>Qty</div>
                                </div>
                            </th>

                            
                            <th className='border-2 border-slate-500 w-[400px] py-4'>
                                <div className='flex justify-evenly  items-center '>
                                    <div><GrCheckbox /></div>
                                    <div>Price</div>
                                </div>
                            </th>

                            <th className='border-2 border-slate-500 w-[400px] py-4'>Discount </th>

                            <th className='border-2 border-slate-500 w-[400px] py-4'>Total </th>

                            <th className='border-2 border-slate-500 w-[400px] py-4'> Remarks </th>

                        </tr>

                    </thead>



                    <tbody className='text-center'>



                        <tr>
                            <td className='border-2 border-slate-500 w-[400px] py-4 text-[blue]'>PR/EKCL/24/000025</td>

                           
                            <td className='border-2 border-slate-500 w-[100px] py-4 '> <GrCheckbox /></td>
                            <td className='border-2 border-slate-500 w-[400px] py-4'>Ball pen</td>
                            <td className='border-2 border-slate-500 w-[400px] py-4'> <span className='font-bold'>Code:</span> STAT/000021, <br /> <span className='font-bold'>specification: </span>Gel</td>

                            <td className='border-2 border-slate-500 w-[400px] py-4'>1</td>

                            <td className='border-2 border-slate-500 w-[400px] py-4'>0</td>

                            <td className='border-2 border-slate-500 w-[400px] py-4'>1</td>

                            <td className='border-2 border-slate-500 w-[400px] py-4'>
                                <input className='focus:outline-none border-b border-[#323232] focus:border-[#E74A3B] w-[100px]' type="text" name="" id="" />
                            </td>

                            <td className='border-2 border-slate-500 w-[300px] py-4'>
                                <input className='focus:outline-none border-b border-[#323232] focus:border-[#E74A3B] w-[100px]' type="text" name="" id="" />
                            </td>

                            <td className='border-2 border-slate-500 w-[400px] py-4'>
                                <input className='focus:outline-none border-b border-[#323232] focus:border-[#E74A3B] w-[100px]' type="text" name="" id="" />
                            </td>

                            <td className='border-2 border-slate-500 w-[400px] py-4'>
                                <input className='focus:outline-none border-b border-[#323232] focus:border-[#E74A3B] w-[100px]' type="text" name="" id="" />
                            </td>

                            <td className='border-2 border-slate-500 w-[400px] py-4'>
                                <input className='focus:outline-none border-b border-[#323232] focus:border-[#E74A3B] w-[100px]' type="text" name="" id="" />
                            </td>



                        </tr>








                    </tbody>

                </table>



            </div> */}





        </>
    );
};

export default SrTable1;