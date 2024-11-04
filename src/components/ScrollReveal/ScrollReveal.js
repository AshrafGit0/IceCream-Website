import ScrollReveal from "scrollreveal";

export const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 1500,
    dealy: 300,
    reset: true
})

export const ScrollReveal_Home = () => {
    sr.reveal(".hero_top");
    sr.reveal(".hero-img,.PromoImage1", { scale: 0.5 });
    sr.reveal(".funnyMonster1,.funnyMonster2", { scale: 0.5, distance: "0px", delay: 100 });
    sr.reveal(".hero-leaf3", { delay: "100" });
    sr.reveal(".hero-leaf1 , .hero-leaf4 ,.hero-leaf2", { delay: "100", origin: "bottom" });
    sr.reveal(".featuredInfo-1,.promo-content", { origin: "left" })
    sr.reveal(".featuredInfo-2", { origin: "right" })

}
export const ScrollReveal_Ingredients = () => {
    sr.reveal(".title-ingredients")
    sr.reveal(".left-ingredients", { origin: "left", interval: 100 })
    sr.reveal(".right-ingredients", { origin: "right", interval: 100 })
    sr.reveal(".flavor-item", { interval: 100 })
}

export const ScrollReveal_Blogs = () => {

    sr.reveal(".blogs-title,.blogs-item")
}
