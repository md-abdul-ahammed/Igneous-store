import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useMenuItems from '../../Hooks/useMenuItems';
import { AiOutlineMinus, AiOutlineShoppingCart, AiOutlinePlus } from "react-icons/ai";



const MenuDetails = () => {
    const [menus] = useMenuItems();
    const [item, setItem] = useState({});
    const [increase, setIncrease] = useState(0);

    const { menuId } = useParams();
    useEffect(() => {
        const menuItem = menus.find(menu => menu.id === +menuId);
        setItem(menuItem)
    }, [item, menus])
    let increased;
    const handleIncrease = () => {
        increased = increase + 1;
        setIncrease(increased)
    }
    const handleDecrease = () => {
        if (increase > 0) {
            increased = increase - 1;
            setIncrease(increased)
        } else {
            setIncrease(0)
        }
    }



    return (
        <div className='my-2 py-2'>
            {menus.length ?

                <div className='row container justify-content-around mx-auto align-items-center text-lg-center text-md-start text-sm-start'>
                    <div className="col-md-6">
                        <img className='img-fluid' src={item?.img} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h1 className='fw-bold'>{item?.name}</h1>
                        <p className='text-muted'>{item?.descriptionLong}</p>
                        <div className='d-flex justify-content-md-center justify-content-sm-start align-items-center'>
                            <h1 className='me-5 mb-0'>$ {item?.price}</h1>
                            <div className='simple-border px-3 py-2'>
                                <button className='fs-4 bg-white border-none me-2' onClick={handleDecrease} ><AiOutlineMinus /></button><span className='fs-3 mx-2' >{increase}</span><button className='fs-4 bg-white border-none ms-2 text-danger' onClick={handleIncrease}><AiOutlinePlus /></button>
                            </div>
                        </div>
                        <button className='py-3 mt-4 ms-1 px-5 my-2  text-white primary-btn ms-2 res-ms-null res-align-center' > <AiOutlineShoppingCart className='fw-bold fs-4 me-1' /> Add </button>
                    </div>
                </div>

                :

                <h1>loading...</h1>}
        </div>
    );
};

export default MenuDetails;