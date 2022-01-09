import React , {useState} from 'react'
import { Button, Nav , Offcanvas} from 'react-bootstrap';
import "./styling.css";
import {BsCashCoin} from 'react-icons/bs';
import {RiDashboardFill , RiDashboardLine} from 'react-icons/ri';
import {FaUserSecret , FaUserCircle} from 'react-icons/fa';
import {MdOutlineSavings} from 'react-icons/md';
export default function Base() {
    const [show, setShow] = useState(true);

    function onShow(){
        setShow(true);
        var items = document.getElementsByClassName("nav-icon");
        for (var i = 0; i < items.length; i++) {
            items[i].style.marginBottom = 4 + "px";
        }
        var items = document.getElementsByClassName("nav");
        for (var i = 0; i < items.length; i++) {
            items[i].style.paddingRight = "7%";
        }
    }

    function onHide(){
        setShow(false);
        var items = document.getElementsByClassName("nav-icon");
        for (var i = 0; i < items.length; i++) {
            items[i].style.marginBottom = 28 + "px";
            items[i].style.marginLeft = 10 + "px";
        }
        var items = document.getElementsByClassName("nav");
        for (var i = 0; i < items.length; i++) {
            items[i].style.paddingRight ="2%";
        }
    }

    return (
        <div>
            <div className='menu-bar'>
                {show ? 
                <RiDashboardLine id="menu" size={30} className='mg-2' onClick={onHide}/> :
                <RiDashboardFill id="menu" size={30} className='mg-2' onClick={onShow}/> }
                <div className='mg-1'>
                    <h5>RDA DASHBOARD</h5>
                </div>
            </div>
            <Nav defaultActiveKey="/home" className="flex-column nav">
                <div style={{color : "white", display : "inline-flex" , alignItems : "center" , marginLeft : "12%" , marginBottom : "15%"}}>
                    <BsCashCoin className='nav-icon' size = {25}/> 
                    {show ? <Nav.Link style={{color : "white"}} href="/home">Cash</Nav.Link> : <></>}
                </div>

                 <div style={{color : "white", display : "inline-flex" , alignItems : "center" , marginLeft : "12%" , marginBottom : "15%"}}>
                    <MdOutlineSavings className='nav-icon' size = {25}/> 
                    {show ? <Nav.Link style={{color : "white"}} eventKey="link-1">Custody</Nav.Link> : <></>}
                </div>

                <div style={{color : "white", display : "inline-flex" , alignItems : "center" , marginLeft : "12%" , marginBottom : "15%"}}>
                    <FaUserSecret className='nav-icon' size = {25}/>
                    {show ? <Nav.Link style={{color : "white"}} eventKey="link-2">RDA</Nav.Link> : <></>}
                </div>

                <div style={{color : "white", display : "inline-flex" , alignItems : "center" , marginLeft : "12%" , marginBottom : "15%"}}>
                    <FaUserCircle className='nav-icon' size = {25}/>
                    {show ? <Nav.Link style={{color : "white"}} eventKey="link-3">Clients</Nav.Link> : <></>}
                </div>
                {show ? 
                <div className='footer'>
                    <Nav.Link style={{color : "white"}} eventKey="link-1">About Us</Nav.Link>
                    <Nav.Link style={{color : "white"}} eventKey="link-2">Contact US</Nav.Link>
                </div> : <></>}
            </Nav> 
            
        </div>
    )
}
