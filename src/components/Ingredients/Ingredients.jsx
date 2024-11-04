/* eslint-disable */
import "./Ingredients.css";
import { ScrollReveal_Ingredients } from "../ScrollReveal/ScrollReveal";
import { useEffect } from "react";

export function ShopIngredients() {

    useEffect(() => {
        ScrollReveal_Ingredients();
    }, [])

    return (
        <>
            { /* Ingredients Section */}
            <section className=" bg-success d-flex flex-column justify-content-center">
                <div className=" pt-3 pb-3">
                    <div className="text-center title-ingredients">
                        <h6 className=" text-black fst-italic">Savory Ingredients</h6>
                        <h2 className="text-black text-white  fst-italic">Assorted Ingredients</h2>
                    </div>
                </div>
                <div className="container ingredients row row-cols-1 justify-content-center row-cols-md-2 gap-md-4 p-md-3 m-auto mt-4">
                    {/* Left side */}
                    <div className=" d-md-flex flex-md-column  col-md-5 gap-2">
                        {/* Item-1 */}
                        <div className=" left-ingredients d-md-flex gap-4 text-start">
                            <div className="text-center">
                                <img src="assets/Images/vanilla.png" alt="vanilla" width="30%" />
                            </div>
                            <div className="mt-3 mt-md-0">
                                <h3 className=" text-center text-md-start text-white fw-bold">Vanilla</h3>
                                <p className="text-start text-white ps-2 ps-md-0 pb-2 pe-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque consequatur laudantium architecto debitis, suscipit illo molestiae nulla impedit!</p>
                            </div>
                        </div>
                        {/* Item-2 */}
                        <div className=" left-ingredients d-md-flex gap-4 text-start">
                            <div className="text-center">
                                <img src="assets/Images/mango.png" alt="mongo" width="30%" />
                            </div>
                            <div className="mt-3 mt-md-0">
                                <h3 className=" text-center text-md-start text-white  fw-bold">Mango</h3>
                                <p className="text-start text-white ps-2 ps-md-0 pb-2 pe-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque consequatur laudantium architecto debitis, suscipit illo molestiae nulla impedit!</p>
                            </div>
                        </div>
                        {/* Item-3 */}
                        <div className=" left-ingredients d-md-flex gap-4 text-start">
                            <div className="text-center">
                                <img src="assets/Images/taro.png" alt="taro" width="30%" />
                            </div>
                            <div className="mt-3 mt-md-0">
                                <h3 className=" text-center text-md-start text-white  fw-bold">Taro</h3>
                                <p className="text-start text-white ps-2 ps-md-0 pb-2 pe-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque consequatur laudantium architecto debitis, suscipit illo molestiae nulla impedit!</p>
                            </div>
                        </div>
                        {/* Item-4 */}
                        <div className=" left-ingredients d-md-flex gap-4 text-start">
                            <div className="text-center">
                                <img src="assets/Images/coconut.png" alt="coconut" width="30%" />
                            </div>
                            <div className="mt-3 mt-md-0">
                                <h3 className=" text-center text-md-start text-white  fw-bold">Coconut</h3>
                                <p className="text-start text-white ps-2 ps-md-0 pb-2 pe-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque consequatur laudantium architecto debitis, suscipit illo molestiae nulla impedit!</p>
                            </div>
                        </div>
                    </div>
                    {/* RIght side */}
                    <div className="d-md-flex col-md-5 flex-md-column gap-2">
                        {/* Item-1 */}
                        <div className=" right-ingredients d-md-flex gap-4 text-start">
                            <div className="text-center">
                                <img src="assets/Images/cocoa.png" alt="cocoa"
                                    width="30%" />
                            </div>
                            <div className="mt-3 mt-md-0">
                                <h3 className=" text-center text-md-start text-white fw-bold">Cocoa</h3>
                                <p className="text-start text-white ps-2 ps-md-0 pb-2 pe-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque consequatur laudantium architecto debitis, suscipit illo molestiae nulla impedit!</p>
                            </div>
                        </div>
                        {/* Item-2 */}
                        <div className=" right-ingredients d-md-flex gap-4 text-start">
                            <div className="text-center">
                                <img src="assets/Images/strawberry.png" alt="strawberry" width="30%" />
                            </div>
                            <div className="mt-3 mt-md-0">
                                <h3 className=" text-center text-md-start text-white  fw-bold">Strawberry</h3>
                                <p className="text-start text-white ps-2 ps-md-0 pb-2 pe-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque consequatur laudantium architecto debitis, suscipit illo molestiae nulla impedit!</p>
                            </div>
                        </div>
                        {/* Item-3 */}
                        <div className=" right-ingredients d-md-flex gap-4 text-start">
                            <div className="text-center">
                                <img src="assets/Images/green_tea.png" alt="Green Tea" width="30%" />
                            </div>
                            <div className="mt-3 mt-md-0">
                                <h3 className=" text-center text-md-start text-white  fw-bold">Green Tea</h3>
                                <p className="text-start text-white ps-2 ps-md-0 pb-2 pe-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque consequatur laudantium architecto debitis, suscipit illo molestiae nulla impedit!</p>
                            </div>
                        </div>
                        {/* Item-4 */}
                        <div className=" right-ingredients d-md-flex gap-4 text-start">
                            <div className="text-center">
                                <img src="assets/Images/orange.png" alt="orange" width="30%" />
                            </div>
                            <div className="mt-3 mt-md-0">
                                <h3 className=" text-center text-md-start text-white  fw-bold">Orange</h3>
                                <p className="text-start text-white ps-2 ps-md-0 pb-2 pe-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque consequatur laudantium architecto debitis, suscipit illo molestiae nulla impedit!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            { /* Flavor-Info */}
            <section className=" mt-2">
                <div className=" container  justify-content-center m-auto row row-cols-1 row-cols-lg-2 gap-lg-0 py-4 gap-4">
                    <div className="  row justify-content-center row-gap-4  row-cols-md-2  gap-md-5">
                        {/* item-1 info */}
                        <div style={{ backgroundColor: "bisque" }} className="d-flex flavor-item info-item col-md-5 rounded rounded-2 justify-content-center py-4 align-items-center flex-column">
                            <div className=" mt-2">
                                <figure className="w-100 rounded rounded-pill bg-white overflow-hidden border border-4 border-white">
                                    <img src="assets/Images/flavor_image-1.jpg" width="100%" alt="Flavor-Img" />
                                </figure>
                            </div>
                            <div className="">
                                <h3 className=" text-center fw-bold">Vanilla</h3>
                                <p style={{ wordBreak: "break-word" }} className="">Vanilla ice cream needs the absolute balance between sweetnness, fatness and bitterness that is very...</p>
                                <div className=" text-center pt-2">
                                    <button className=" bi bi-chevron-right btn btn-light rounded-pill rounded  "></button>
                                </div>
                            </div>
                        </div>
                        {/* item-2 info */}
                        <div style={{ backgroundColor: "rgba(252, 90, 141,0.3)" }} className=" flavor-item col-md-5 rounded rounded-2 info-item d-flex justify-content-center py-4 align-items-center flex-column">
                            <div className=" mt-2">
                                <figure className="w-100 rounded rounded-pill bg-white overflow-hidden border border-4 border-white">
                                    <img src="assets/Images/flavor_image-2.jpg" width="100%" alt="Flavor-Img" />
                                </figure>
                            </div>
                            <div className="">
                                <h3 className=" text-center fw-bold">Strawberry</h3>
                                <p style={{ wordBreak: "break-word" }} className="">The Primary ingredient is pure fresh strawberries, setting it apart from other strawberry-flavored milk...</p>
                                <div className=" text-center pt-2">
                                    <button className=" bi bi-chevron-right btn btn-light rounded-pill rounded  "></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" row row-cols-md-2 justify-content-center  gap-md-5 row-gap-4">
                        {/* item-3 info */}
                        <div style={{ backgroundColor: "rgba(255, 166, 0, 0.4)" }} className=" flavor-item rounded rounded-2 col-md-5 info-item d-flex justify-content-center py-4 align-items-center flex-column">
                            <div className=" mt-2">
                                <figure className="w-100 rounded rounded-pill bg-white overflow-hidden border border-4 border-white">
                                    <img src="assets/Images/flavor_image-3.jpg" width="100%" alt="Flavor-Img" />
                                </figure>
                            </div>
                            <div className="">
                                <h3 className=" text-center fw-bold">Orange</h3>
                                <p style={{ wordBreak: "break-word" }} className="">The ice cream offers a sweet honey flavor paired with a orange aroma, complemented by rich milk that is...</p>
                                <div className=" text-center pt-2">
                                    <button className=" bi bi-chevron-right btn btn-light rounded-pill rounded  "></button>
                                </div>
                            </div>
                        </div>
                        {/* item-4 info */}
                        <div style={{ backgroundColor: "rgba(210, 105, 30, 0.4)" }} className="d-flex flavor-item rounded rounded-2 col-md-5  info-item justify-content-center py-4 align-items-center flex-column">
                            <div className=" mt-2">
                                <figure className="w-100 rounded rounded-pill bg-white overflow-hidden border border-4 border-white">
                                    <img src="assets/Images/flavor_image-4.jpg" width="100%" alt="Flavor-Img" />
                                </figure>
                            </div>
                            <div className="">
                                <h3 className=" text-center fw-bold">Chocolate</h3>
                                <p style={{ wordBreak: "break-word" }} className="">Every piece of melted chocolate combines with fresh milk and creamy, thick butter to create an unexpectedly...</p>
                                <div className=" text-center pt-2">
                                    <button className=" bi bi-chevron-right btn btn-light rounded-pill rounded  "></button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}