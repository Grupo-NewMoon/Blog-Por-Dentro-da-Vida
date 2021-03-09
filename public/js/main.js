/*
document.addEventListener('DOMContentLoaded', e => {
    let options = {
        rootMargin: "-100px 0px 0px 0px"
    }

    let target = document.querySelector('#insta-container')
    let intersectionObserver = new IntersectionObserver(handleIntersection, options)
    intersectionObserver.observe(target)

    function handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log(true)
            } else {
                console.log(false)
            }
        })
    }
})*/