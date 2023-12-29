document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(entries => {
        console.log(entries);
        entries.forEach((entry) => {
            
            if (entry.isIntersecting) {
                if (entry.target.id === "info_hero") {
                    entry.target.classList.add("visible", "opacity-1", "blur-none", "translate-x-0");
                    entry.target.classList.remove("invisible", "opacity-0", "blur-sm", "-translate-x-full");
                } else if (entry.target.id === "img_hero") {
                    entry.target.classList.add("visible", "opacity-1", "blur-none", "scale-1");
                    entry.target.classList.remove("invisible", "opacity-0", "blur-sm", "scale-0");
                } else {
                    entry.target.classList.remove("invisible", "opacity-0", "blur-sm", "-translate-x-full");
                    entry.target.classList.add("visible", "opacity-1", "blur-none", "translate-x-0");
                    const h2 = entry.target.querySelector("h2");
                    h2.classList.add("after:w-full");
                    h2.classList.remove("after:w-0");
                }
            } 
            // else {
            //     entry.target.classList.add("invisible", "opacity-0", "blur-sm", "-translate-x-full");
            //     entry.target.classList.remove("visible", "opacity-1", "blur-none", "translate-x-0");
            // }
        })
    })
    document.querySelectorAll("section[data-section]").forEach(section => observer.observe(section))
    
    //gen hero section
    const homeSection = document.querySelector("#home");
    const imgHero = homeSection.querySelector("#img_hero");
    const infoHero = homeSection.querySelector("#info_hero");
    observer.observe(imgHero)
    observer.observe(infoHero)


})

