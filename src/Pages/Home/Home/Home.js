import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import MenuList from '../../MenuList/MenuList/MenuList';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Home.css'

const Home = () => {
    const [menus, setMenus] = useState([]);
    const [show, setShow] = useState('breakfast')

    useEffect(() => {
        let sliceFirstNumber
        let sliceSecondNumber

        if (show === 'breakfast') {
            sliceFirstNumber = 0;
            sliceSecondNumber = 6;
        }
        else if (show === 'lunch') {
            sliceFirstNumber = 6;
            sliceSecondNumber = 12;
        }
        else if (show === 'dinner') {
            sliceFirstNumber = 12;
            sliceSecondNumber = 18;
        }
        fetch('./menuItem.json')
            .then(res => res.json())
            .then(data => setMenus(data.slice(sliceFirstNumber, sliceSecondNumber)))
    }, [show])
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <div className='container'>.
                <div className='d-flex p-5 justify-content-around w-50 mx-auto'>
                    <button onClick={() => setShow('breakfast')} className={show === 'breakfast' ? "d-block active active-btn fw-bold" : "d-block active-btn fw-bold"}>Breakfast</button>
                    <button onClick={() => setShow('lunch')} className={show === 'lunch' ? "d-block active active-btn fw-bold" : "d-block active-btn fw-bold"}>Lunch</button>
                    <button onClick={() => setShow('dinner')} className={show === 'dinner' ? "d-block active active-btn fw-bold" : "d-block active-btn fw-bold"}>Dinner</button>
                </div>

                <Row xs={1} md={3} className="g-5">
                    {
                        menus.map(menu => <MenuList
                            key={menu.key}
                            menu={menu}
                        ></MenuList>)
                    }
                </Row>
            </div>
            <AboutUs></AboutUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;