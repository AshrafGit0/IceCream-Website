/* eslint-disable */
import { useEffect } from "react"
import { ScrollReveal_Home } from "../ScrollReveal/ScrollReveal"
import "./Home.css"


export function Home() {

    useEffect(() => {
        ScrollReveal_Home();
    }, [])


    return (
        <>
            {/* Section Area */}

            <section>
                <div className=" bg-warning w-auto position-relative text-center">
                    <div className="pt-5 hero_top d-flex flex-column pb-3">
                        <span className=" fw-semibold heading-1 pb-lg-2 fst-italic">Loading With Flavour</span>
                        <span className="text-danger heading-2 fst-italic h1">Refreshing Taste</span>
                    </div>
                    <div className=" mt-lg-3 pb-5 d-flex justify-content-center">

                        <div className=" w-auto position-relative hero-container">
                            <img src="assets/Images/hero.png" className="hero-img" width="300" height="300" alt="heroImage" />
                            <img className=" funnyMonster1 position-absolute" src="assets/Images/funny_monster_1.png" width="60" height="60" alt="funny monster" />
                            <img className=" funnyMonster2 position-absolute" src="assets/Images/funny_monster_2.png" width="60" height="60" alt="funny monster" />
                        </div>
                    </div>
                    <div className=" d-none d-lg-block">
                        <img style={{ top: '5%', right: '15%', transform: "rotate(180deg)" }} className=" hero-leaf1 position-absolute" src="assets/Images/leaf_1.png" alt="leaf 1" width="90" height="80" />
                        <img style={{ bottom: "20%", left: "10%" }} className=" hero-leaf2 position-absolute" src="assets/Images/leaf_1.png" alt="leaf 1" width="90" height="80" />
                        <img style={{ top: "5%", left: "18%" }} className=" hero-leaf3 position-absolute" src="assets/Images/leaf_2.png" alt="leaf 2" width="70" height="90" />
                        <img style={{ bottom: "20%", right: "15%", transform: "rotate(90deg)" }} className=" hero-leaf4 position-absolute" src="assets/Images/leaf_2.png" alt="leaf 2" width="70" height="90" />
                    </div>
                </div>
                {/* Featured-Info Section */}
                <div className="d-flex featured-info justify-content-center">
                    <div style={{ gridColumnGap: "12px" }} className=" container  featured-info  py-5 row row-col-1 row-cols-lg-2 ">
                        <div style={{ borderBottom: "2px dashed" }} className=" border-danger featuredInfo-1   row  text-center pb-4   ">
                            <div className=" col-md-3">
                                <h2 className="text-danger fw-bold">Top Ice <br />
                                    Cream <br />
                                    Spots
                                </h2>
                            </div>
                            <div className="col-md-9">
                                <p className=" text-start">It's quite possible that we are living in the golden age of ice cream innovation. Old-School creameries are churning out vanila bean masterpiece honed over generation while new shops are tossing the name "chef"</p>
                                <a href="#" className=" float-md-start readMoreInfo">Read More</a>
                            </div>
                        </div>
                        <div style={{ borderBottom: "2px dashed" }} className=" featuredInfo-2 ms-lg-4 mt-4 mt-lg-0 row border-danger text-center pb-4 ">
                            <div className="col-md-3">
                                <h2 className="text-danger fw-bold">Wave<br />
                                    Artisan <br />
                                    Shops
                                </h2>
                            </div>
                            <div className="col-md-9">
                                <p className=" text-start">
                                    These ice cream shops represent everything that is well and good: new-wave artisan shops challenging the very notion of what should be placed on a cone (or stick, or between cookies), old-school parlors learning...
                                </p>
                                <a href="#" className=" float-md-start readMoreInfo">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Promo Section */}
            <section className=" position-relative w-auto">
                <div className="promo-section d-sm-flex justify-content-sm-center">
                    <div className="row container-sm row-cols-1 row-cols-lg-2">
                        <div style={{ marginTop: '11rem' }} className="promo-content p-3">
                            <div className="d-flex flex-column">
                                <span className=" h2 fw-bold text-start fst-italic text-danger p-1">Celebrate Sweetness Every Day</span>
                                <span className=" text-secondary  p-2">Incorporating liquor into ice cream feels like a small feat when you think about how creative...</span>
                            </div>
                            <ul className=" p-3 list-unstyled">
                                <li className="d-flex align-items-center gap-3">
                                    <span className=" text-danger fs-3 bi bi-snow3"></span>
                                    <span className=" h5 pt-1">Reliable Frozen Shipping</span>
                                </li>
                                <li className="d-flex align-items-center my-2 gap-3">
                                    <span className=" text-danger fs-3 bi bi-truck"></span>
                                    <span className="h5 pt-1 text-start">Affordable Flat-Rate Shipping Nationwide</span>
                                </li>
                                <li className=" d-flex align-items-center gap-3">
                                    <span className=" text-danger fs-3 bi bi-box"></span>
                                    <span className="h5 pt-1">Picture-Perfect Unboxing</span>
                                </li>
                                <li className=" ps-3 mt-5">
                                    <button type="button" className=" rounded rounded-pill btn btn-secondary">View More <span className=" bi bi-arrow-right"></span></button>
                                </li>
                            </ul>
                        </div>
                        <div className="promoImg-Container">
                            <img src="assets/Images/promo_1.png" className="PromoImage1" width="300" height="300" alt="promo image" />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}