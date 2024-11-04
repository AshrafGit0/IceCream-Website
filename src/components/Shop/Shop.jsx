/* eslint-disable */
import "./Shop.css";

export function ShopItems() {


    return (
        <>
            {/* Shop Section */}
            <section className="">
                <div className=" mt-3">
                    <h2 className=" text-center text-danger">Explore Our Flavor</h2>
                </div>
                {/* Product 1 */}
                <div className="d-flex justify-content-center Items-Container gap-5 mt-4 flex-wrap">
                    <div className="shopItem">
                        <div>
                            <img className="" src="assets/Images/product_1.jpg" alt="Product 1" width="320" height="320" />
                        </div>
                        <div>
                            <span className="h3 fst-italic">Sorbet Street Treat8</span>
                            <div className="d-flex gap-2">
                                <span className="  bi bi-star-fill"></span>
                                <span className="  bi bi-star-fill"></span>
                                <span className="  bi bi-star-fill"></span>
                                <span className="  bi bi-star-fill"></span>
                                <span className="  bi bi-star-fill"></span>
                                <span className=" text-secondary">0 reviews</span>
                            </div>
                            <div>
                                <span className=" text-secondary">$12.00</span>
                            </div>
                        </div>
                    </div>
                    {/* Product 2 */}
                    <div className="shopItem">
                        <div>
                            <img className="" src="assets/Images/product_2.jpg" alt="Product 2" width="320" height="320" />
                        </div>
                        <div>
                            <span className="h3 fst-italic">Darket Chocolate</span>
                            <div className="d-flex gap-2">
                                <span className="  bi bi-star-fill"></span>
                                <span className="  bi bi-star-fill"></span>
                                <span className="  bi bi-star-fill"></span>
                                <span className="  bi bi-star-fill"></span>
                                <span className="  bi bi-star-fill"></span>
                                <span className=" text-secondary">9 reviews</span>
                            </div>
                            <div>
                                <span className=" text-secondary">$14.00</span>
                            </div>
                        </div>
                    </div>
                    {/* Product 3 */}
                    <div className="shopItem">

                        <div>
                            <img className="" src="assets/Images/product_3.jpg" alt="Product 3 " width="320" height="320" />
                        </div>
                        <div>
                            <span className="h3 fst-italic">Blackout Chocolate Cake</span>
                            <div className="d-flex gap-2">
                                <span className="  bi bi-star-fill"></span>
                                <span className="  bi bi-star-fill"></span>
                                <span className="  bi bi-star-fill"></span>
                                <span className="  bi bi-star-fill"></span>
                                <span className="  bi bi-star-fill"></span>
                                <span className=" text-secondary">5 reviews</span>
                            </div>
                            <div>
                                <span className=" text-secondary">$17.00</span>
                            </div>
                        </div>
                    </div>
                    {/* Product 4 */}
                    <div className="shopItem">
                        <div>
                            <img className="" src="assets/Images/product_4.jpg" alt="Product 4" width="320" height="320" />
                        </div>
                        <div>
                            <span className="h3 fst-italic">Sunshine</span>
                            <div className="d-flex gap-2">
                                <span className="  bi bi-star-fill"></span>
                                <span className="  bi bi-star-fill"></span>
                                <span className="  bi bi-star-fill"></span>
                                <span className="  bi bi-star-fill"></span>
                                <span className="  bi bi-star-fill"></span>
                                <span className=" text-secondary">1 reviews</span>
                            </div>
                            <div>
                                <span className=" text-secondary">$12.00</span>
                            </div>
                        </div>
                    </div>
                    {/* Product 5 */}
                    <div className="shopItem">
                        <div>
                            <img src="assets/Images/product_5.jpg" alt="Product 5" width="320" height="320" />
                        </div>
                        <div>
                            <span className="h3 fst-italic">Sunshine</span>
                            <div className="d-flex gap-2">
                                <span className="  bi bi-star-fill"></span>
                                <span className="  bi bi-star-fill"></span>
                                <span className="  bi bi-star-fill"></span>
                                <span className="  bi bi-star-fill"></span>
                                <span className="  bi bi-star-fill"></span>
                                <span className=" text-secondary">1 reviews</span>
                            </div>
                            <div>
                                <span className=" text-secondary">$12.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Seasonal-Promo Section */}
            <section className="mt-5 pb-5 row row-cols-1 row-cols-sm-2 row-cols-md-3">
                {/* Seasonal-Promo-1 */}
                <div className=" position-relative s-promo-1 z-0 overflow-hidden">
                    <div>
                        <img className="s-promo-img" src="assets/Images/seasonal-promo_1.jpg" alt="Seasonal-Promo-Image" width="100%" />
                    </div>
                    <div className=" S-Promo1-txt position-absolute  gap-0 d-flex mt-1">
                        <span className="text-white fs-3 fw-bold fst-italic">Hello</span>
                        <span className="text-white fs-3 ms-2 fw-bold fst-italic">Summer !</span>
                    </div>
                </div>
                {/* Seasonal-Promo-2 */}
                <div className=" position-relative s-promo-2 overflow-hidden  mt-3 mt-sm-0">
                    <div>
                        <img className="s-promo-img" src="assets/Images/seasonal-promo_2.jpg" alt="Seasonal-Promo-Image" width="100%" />
                    </div>
                    <div className=" S-Promo2-Container position-absolute mt-1">
                        <div className="">
                            <img className=" S-Promo2-svg" width="80" src="assets/Images/scalloped.svg" alt="Scalloped-Image" />
                            <span className="S-Promo2-Offer fw-semibold">-32%</span>
                        </div>
                    </div>
                </div>
                {/* Seasonal-Promo-3 */}
                <div className=" position-relative overflow-hidden s-promo-3 mt-sm-3 mt-md-0 mt-3">
                    <div>
                        <img className="s-promo-img" src="assets/Images/seasonal-promo_3.png" alt="Seasonal-Promo-Image" width="100%" />
                    </div>
                    <div className=" z-0 position-absolute S-Promo3-txt mt-1">
                        <span className="text-white fs-3 fw-bold fst-italic">Creamy</span>
                        <span className="text-white fs-3 ms-2 fw-bold fst-italic">Enjoy</span>
                    </div>
                </div>
            </section>
        </>
    )
}