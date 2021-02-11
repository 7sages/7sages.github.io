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

//timer

gsap.from('#timer h3',{
    scrollTrigger : {
        trigger : '#timer',
        toggleActions : "play pause resume reverse"
    },
    y : 30,
    opacity: 0,
    scale: 1.1,
    ease : 'expo.easeInOut',
    stagger : .3,
    duration : .4
})

//descriptionsection

gsap.from('#descriptionsection .dpblock',{
    scrollTrigger : {
        trigger : '#descriptionbody',
        toggleActions : "play pause resume reverse"
    },
    y : 40,
    opacity: 0,
    ease : 'expo.easeInOut',
    stagger : .3,
    duration : .4
})

//vendors

gsap.from('#vendors a',{
    scrollTrigger : {
        trigger : '#vendorlist',
        toggleActions : "play pause resume reverse"
    },
    y : 40,
    opacity: 0,
    ease : 'expo.easeInOut',
    stagger : .3,
    duration : .4
})

//supported

gsap.from('#supported .supportlogo',{
    scrollTrigger : {
        trigger : '.supportlogos',
        toggleActions : "play pause resume reverse"
    },
    y : 40,
    opacity: 0,
    ease : 'expo.easeInOut',
    stagger : .2,
    duration : .4
})

//events

gsap.from('.eventdetail a',{
    scrollTrigger : {
        trigger : '#eventcontent',
        toggleActions : "play pause resume reverse"
    },
    y : 40,
    opacity: 0,
    ease : 'expo.easeInOut',
    stagger : .3,
    duration : .4
})

//farminginfo

gsap.from('#fioverlay h2,p,button',{
    scrollTrigger : {
        trigger : '#farminginfo',
        toggleActions : "play pause resume reverse"
    },
    y : 40,
    opacity: 0,
    ease : 'expo.easeInOut',
    stagger : .3,
    duration : .4
})



