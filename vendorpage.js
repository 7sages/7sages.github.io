//gsap

var tl = gsap.timeline()
gsap.registerPlugin(ScrollTrigger)

//nav

tl.from('nav a',{
    y: -30,
    opacity : 0,
    ease : 'expo.easeInOut',
    delay: .3
})
.from('.nav-links li',{
    y: -30,
    opacity : 0,
    ease : 'expo.easeInOut',
    stagger: .4,
    delay : '-.7'
})

//mainbanner

tl.from('#bannertext h1,h4',{
    y: 30,
    opacity : 0,
    ease : 'expo.easeInOut',
    delay : '-.7'
})


//vendorpagestartshere

//menuitems

gsap.from('.menuitems div',{
    scrollTrigger : {
        trigger : '.menuitems',
        toggleActions : "play pause resume reverse"
    },
    y : 40,
    opacity: 0,
    ease : 'expo.easeInOut',
    duration : .4,
    stagger: '.1'
})

//vendordetails

gsap.from('#vendordetails div',{
    scrollTrigger : {
        trigger : '#vendordetails',
        toggleActions : "play pause resume reverse"
    },
    y : 40,
    opacity: 0,
    ease : 'expo.easeInOut',
    duration : .4,
    stagger: '.3'
})


