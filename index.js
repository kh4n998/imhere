const observer = new IntersectionObserver(entries => {
    console.log(entries);
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible", "opacity-1", "blur-none", "translate-x-0");
            entry.target.classList.remove("invisible", "opacity-0", "blur-sm", "-translate-x-full");
        } 
        // else {
        //     entry.target.classList.add("invisible", "opacity-0", "blur-sm", "-translate-x-full");
        //     entry.target.classList.remove("visible", "opacity-1", "blur-none", "translate-x-0");
        // }
    })
})

document.querySelectorAll("section[data-section]").forEach(section => observer.observe(section))
