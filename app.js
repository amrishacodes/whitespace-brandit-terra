const containers = document.querySelectorAll(".contain")


  const observor = new IntersectionObserver(entries =>{
    entries.forEach(entry => {
        entry.target.classList.toggle("show",entry.isIntersecting)
          })
  }, 
  {
    threshold: 0.3,
    rootMargin: "-50px",
  })
  
  containers.forEach(container =>{
    observor.observe(container)
  });


const slider = document.querySelector('.slider')
const sections = gsap.utils.toArray('.slider section')
let tl = gsap.timeline({
    defaults:{
        ease:"none"
    },
    scrollTrigger:{
        trigger:slider,
        pin:true,
        scrub:2,
        end:() => "+=" + slider.offsetWidth
    }
})

tl.to(slider,{
    xPercent :-66
})

sections.forEach((stop, index) => {
    tl
    .from(stop.querySelector('.caption'),{
        yPercent:30,
        xPercent: 50,
        opacity:0,
        scale: 1.5,
        scrollTrigger:{
            trigger:stop.querySelector('.caption'),
            start: "left center",
            end: "cnter center",
            scrub:true,
            containerAnimation: tl,
        }
    })
    .from(stop.querySelector("img"),{
        
        xPercent: 40,
        yPercent: -100,
        scale:0.5,
        ease: 'elastic.out(1,1)',
        scrollTrigger: {
            trigger:stop.querySelector("img"),
            scrub:2,
            containerAnimation: tl,
        }
    },"<")
})


const lenis = new lenis()
function raf(time){
    lenis.raf(time)
    requestAnimationFrame(raf)
}

