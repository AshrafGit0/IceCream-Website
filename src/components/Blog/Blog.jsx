/* eslint-disable */
import "./Blog.css";
import { ScrollReveal_Blogs } from "../ScrollReveal/ScrollReveal";
import { useEffect } from "react";



export function ShopBlogs() {

    useEffect(() => {
        ScrollReveal_Blogs();
    }, [])

    return (
        <>
            {/* Blogs Section */}
            <section id="blogs" className="">
                <div className="pt-3 pb-4">
                    <div className=" blogs-title fst-italic mb-3 text-center">
                        <h4 className="">Our Blogs</h4>
                        <h2 className="text-danger">Flavorful Upgrade</h2>
                    </div>
                    <div className=" d-flex flex-column mt-4  flex-md-row flex-md-nowrap  gap-3">
                        {/* Card 1 */}
                        <div className=" blogs-item">
                            <div className=" overflow-hidden">
                                <img src="assets/Images/blog_1.jpg" className="Blog1-img" width="100%" alt="blog image" />
                            </div>
                            <div className="mt-2">
                                <div>
                                    <span className=" Blog1-txt text-uppercase">Business Tips </span>
                                    <span className=" mx-2 text-danger">-</span>
                                    <span className="text-danger">April 3, 2024</span>
                                </div>
                                <div className="mt-2">
                                    <h3 className="fw-semibold Blog1-heading fst-italic">Trending Ice Cream Flavors for This Year</h3>
                                </div>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className=" blogs-item">
                            <div className=" overflow-hidden">
                                <img src="assets/Images/blog_2.jpg" className="Blog1-img" width="100%" alt="blog image" />
                            </div>
                            <div className="mt-2">
                                <div>
                                    <span className=" Blog1-txt text-uppercase">Business Tips </span>
                                    <span className=" mx-2 text-danger">-</span>
                                    <span className="text-danger">April 3, 2024</span>
                                </div>
                                <div className="mt-2">
                                    <h3 className="fw-semibold Blog1-heading fst-italic">The Skill of Making Gourmet Ice Cream</h3>
                                </div>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className=" blogs-item">
                            <div className=" overflow-hidden">
                                <img src="assets/Images/blog_3.jpg" className="Blog1-img" width="100%" alt="blog image" />
                            </div>
                            <div className="mt-2">
                                <div>
                                    <span className=" Blog1-txt text-uppercase">Business Tips </span>
                                    <span className=" mx-2 text-danger">-</span>
                                    <span className="text-danger">April 3, 2024</span>
                                </div>
                                <div>
                                    <h3 className="fw-semibold Blog1-heading fst-italic">Ice Cream Trends to Increase Revenue</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <button className="btn rounded rounded-3 p-2 px-3 rounded-pill btn-danger">Read More</button>
                    </div>
                </div>
            </section>
        </>
    )
}