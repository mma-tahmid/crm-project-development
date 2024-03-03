import React, { useEffect, useState } from 'react';

const SrTable2 = () => {

    const [selectAll, setSelectAll] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedPRs, setSelectedPRs] = useState([]);

    // For Data Mapping
    const [informations, setInformation] = useState([])

    useEffect(() => {
        setInformation(items)
        console.log(items)

    }, [])

    // Dummy Data 

    const items = [

        {
            id: 1,
            prNo: 'PR/EKCL/24/000025',
            product: [
                {
                    id: 100,
                    specification: "Gel1222",
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
                    id: 101,
                    specification: "Gel2",
                    reqQty: "2",
                    ordered: "0",
                    remaining: "1",
                    qty: "",
                    Price: "",
                    Discount: "",
                    Total: "",
                    Remarks: "",
                }
            ],

        },

        {
            id: 2,
            prNo: 'PR/EKCL/24/000026',
            product: [
                {
                    id: 103,
                    specification: "Gel1222",
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
                    id: 104,
                    specification: "Gel2",
                    reqQty: "2",
                    ordered: "0",
                    remaining: "1",
                    qty: "",
                    Price: "",
                    Discount: "",
                    Total: "",
                    Remarks: "",
                }
            ],

        },



    ];

    // Select PR No & select all data under the one PR
    const togglePRSelection = prNo => {
        const prItems = informations.find(item => item.prNo === prNo);
        const prItemIds = prItems.product.map(productItem => productItem.id);
        if (selectedPRs.includes(prNo)) {
            setSelectedItems(selectedItems.filter(itemId => !prItemIds.includes(itemId)));
            setSelectedPRs(selectedPRs.filter(selectedPR => selectedPR !== prNo));
        } else {
            setSelectedItems([...selectedItems, ...prItemIds]);
            setSelectedPRs([...selectedPRs, prNo]);
        }
    };





    // Select All item According to Item

    // const toggleSelectAll = () => {
    //     const allItemIds = informations.flatMap(item => item.product.map(productItem => productItem.id));
    //     if (!selectAll) {
    //         setSelectedItems(allItemIds);
    //     } else {
    //         setSelectedItems([]);
    //     }
    //     setSelectAll(!selectAll);
    // };

    const toggleSelectAll = () => {
        const allItemIds = informations.flatMap(itemProps => itemProps.product.map(productItemprops => productItemprops.id));
        if (!selectAll) {
            setSelectedItems(allItemIds);
        } else {
            setSelectedItems([]);
        }
        setSelectAll(!selectAll);
    };

    // Select Individual Item

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

                            <th className=' w-[400px] py-4'>
                                <div className='flex items-center justify-center gap-x-3'>
                                    {/* <div>
                                        <input type="checkbox" checked={selectAll}
                                            onChange={toggleSelectAll} />
                                    </div> */}
                                    <div>PR No</div>

                                </div>
                            </th>

                            <th className=' w-[100px] py-4'>
                                <input type="checkbox" checked={selectAll}
                                    onChange={toggleSelectAll} />

                            </th>


                            <th className=' w-[400px] py-4'>Item</th>

                            <th className=' w-[400px] py-4'>Specification</th>

                            <th className='w-[400px] py-4'>Req Qty </th>

                            <th className=' w-[400px] py-4'> Ordered </th>

                            <th className=' w-[400px] py-4'> Remaining </th>


                            <th className=' w-[300px] py-4'>
                                <div className='flex justify-evenly  items-center '>
                                    {/* <div><GrCheckbox /></div> */}
                                    <div>Qty</div>
                                </div>
                            </th>


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
                                    <>
                                        <div className='flex justify-center items-center'>
                                            <div>
                                                <input
                                                    type="checkbox"
                                                    checked={selectedPRs.includes(item.prNo)}
                                                    onChange={() => togglePRSelection(item.prNo)}
                                                />
                                            </div>
                                            <div key={i} className=' w-[400px] py-4 text-[blue]'>{item.prNo}</div>
                                        </div>

                                        {
                                            item.product?.map((productItem, j) => {

                                                return (
                                                    <tr key={j}>
                                                        <td></td>

                                                        <td className=' w-[100px] py-4 '>
                                                            <input type="checkbox" checked={selectedItems.includes(productItem.id)} onChange={() => toggleCheckbox(productItem.id)} />

                                                        </td>

                                                        <td className=' w-[400px] py-4'> {productItem.reqQty}</td>
                                                        <td className=' w-[400px] py-4'> {productItem.specification} </td>

                                                        <td className=' w-[400px] py-4'>{productItem.reqQty}</td>

                                                        <td className=' w-[400px] py-4'>{productItem.ordered}</td>

                                                        <td className=' w-[400px] py-4'>{productItem.remaining}</td>

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
                                            }

                                            )
                                        }

                                    </>
                                )
                            })






                        }


                    </tbody>

                </table>



            </div>

        </>
    );
};

export default SrTable2;