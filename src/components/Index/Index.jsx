/* eslint-disable */
import { Routes, Route, Link, BrowserRouter, NavLink } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useEffect, useState } from "react";
import { Home } from "../Home/Home";
import "./Index.css";
import { sr } from "../ScrollReveal/ScrollReveal";
import { ShopItems } from "../Shop/Shop";
import { ShopIngredients } from "../Ingredients/Ingredients";
import { ShopBlogs } from "../Blog/Blog";
import { ScrollPageToTop } from "../ScrollPageTop/ScrollPageToTop";


export function Index() {
    const [show, setShow] = useState(false);
    const [scrollToTop, setScrollToTop] = useState("d-none")

    const handleShow = () => {
        setShow(true);
    }
    const handleClose = () => {
        setShow(false)
    }
    function ScrollTop() {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setScrollToTop("d-block")
            } else {
                setScrollToTop("d-none");
            }
        })
    }
    function ScrollToTop() {
        window.scrollTo({
            top: "0",
            behavior: "smooth"
        })
    }
    useEffect(() => {
        ScrollTop();
        sr.reveal(".newsLetter")

    }, [])

    return (
        <div className=" position-relative container-fluid">
            <BrowserRouter>
                <header className=" position-sticky top-0 z-1 bg-body-secondary">
                    <div style={{ bottom: "10px", right: "20px" }} onClick={ScrollToTop} className={` position-fixed ${scrollToTop}`}>
                        <button style={{ borderRadius: "50%" }} className=" px-2 py-1 bg-danger border-0">
                            <span className="bi bi-chevron-up text-white"></span>
                        </button>
                    </div>
                    <div className="p-md-3 p-1 d-flex justify-content-between align-items-center">
                        <div className="d-md-none">
                            <button type="button" onClick={handleShow} className=" bi bi-list  btn btn-body-secondary  fs-1"></button>
                            <Offcanvas show={show} onHide={handleClose} placement="start">
                                <Offcanvas.Header closeButton>
                                </Offcanvas.Header>
                                <Offcanvas.Body className=" ms-3">
                                    <div className="offcanvas-body">
                                        <ul className=" list-unstyled fs-6">
                                            <li><NavLink onClick={handleClose} to="/" className=" my-3 fw-bold offcanvas-item nav-link">Home</NavLink></li>
                                            <li><NavLink onClick={handleClose} to="/shop" className=" my-3 fw-bold offcanvas-item nav-link">Shop</NavLink></li>
                                            <li><NavLink onClick={handleClose} to="/ingredients" className=" my-3 fw-bold offcanvas-item nav-link">Ingredients</NavLink></li>
                                            <li><NavLink onClick={handleClose} to="blogs" className=" my-3 fw-bold offcanvas-item nav-link">Blogs</NavLink></li>
                                        </ul>
                                    </div>
                                    <div className="fs-5 mt-2 d-sm-none">
                                        <span className="  bi bi-search"></span>
                                        <span className="  mx-2 bi bi-person"></span>
                                        <span className="  bi bi-heart"></span>
                                    </div>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </div>
                        <div>
                            <img width="90" height="40" src="assets/Images/logo.png" alt="logo" />
                        </div>
                        <div className="d-none d-md-block">
                            <nav className="">
                                <ul className=" list-unstyled d-flex pt-1 fs-6">
                                    <li><NavLink to="/" className=" fw-semibold offcanvas-item">Home</NavLink></li>
                                    <li><NavLink to="/shop" className=" mx-3  fw-semibold offcanvas-item">Shop</NavLink></li>
                                    <li><NavLink to="/ingredients" className=" me-3 fw-semibold offcanvas-item">Ingredients</NavLink></li>
                                    <li><NavLink to="/blogs" className="  fw-semibold offcanvas-item">Blogs</NavLink></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="fs-5 me-sm-3">
                            <span className=" d-none d-sm-inline  bi bi-search"></span>
                            <span className=" d-none d-sm-inline mx-2 bi bi-person"></span>
                            <span className=" me-3 d-none d-sm-inline position-relative bi bi-heart">
                                <span style={{ fontSize: '0.6rem', top: "-3px", right: '-9px' }} className=" position-absolute  badge rounded rounded-circle bg-danger">0</span>
                            </span>
                            <span className=" me-3 me-sm-0 bi bi-cart3 position-relative">
                                <span style={{ fontSize: '0.6rem', top: "-4px", right: '-7px' }} className=" position-absolute  badge rounded rounded-circle bg-danger">0</span>
                            </span>
                        </div>
                    </div>
                </header>
                <div>
                    <ScrollPageToTop />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="home" element={<Home />} />
                        <Route path="shop" element={<ShopItems />} />
                        <Route path="ingredients" element={<ShopIngredients />} />
                        <Route path="blogs" element={<ShopBlogs />} />
                        <Route path="*" element={<h3>OOPs ! Wrong Request</h3>} />
                    </Routes>
                </div>
                { /* Footer Area */}
                {/* News Letter */}
                <footer className="bg-dark text-white overflow-hidden py-5 ">
                    <div className="pt-4 p-3 pb-5 newsLetter justify-content-center  d-flex flex-column container">
                        <div className="text-center d-flex flex-column">
                            <span className=" newsLetter-Heading text-danger fst-italic">Sign up to our newsletter !</span>
                            <span className=" newsLetter-txt">Stay Updated on New Flavors and More</span>
                        </div>
                        <div className="newsLetter-inputGroup text-center d-flex justify-content-center">
                            <div className=" mt-3  input-group">
                                <input type="text" className=" form-control" placeholder="Your Email..." />
                                <button className="btn btn-danger newsLetter-btn ">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </footer>
            </BrowserRouter>
        </div>
    )
}