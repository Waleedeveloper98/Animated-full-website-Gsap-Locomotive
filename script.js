function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

locomotive()
var tl = gsap.timeline()

tl.from(".animate",{
    y:-100,
    duration: .8,
    stagger:.15
},"a")
tl.from("#page1-center h1",{
    transform: "translateX(-105%)",
    duration:1.3,
    stagger:.2
},"a")
tl.to("#page1-btm",{
    y: "0%",
    duration:.5
},"b")
tl.from("#page1-btm button",{
    opacity:0,
    duration:.5
},"b")
tl.from("#page1-btm-right",{
    opacity:0,
    duration:.5
},"b")


let  mm = gsap.matchMedia();
mm.add("(min-width:800px)",()=>{
    tl.to("#page2 #page2-cards .card",{
        x: "-370%",
        scrollTrigger:{
            trigger : "#page2",
            scroller:"#main",
            start:"top 0%",
            end: "top -100%",
            scrub: 2,
            pin:true
        }
    })
    tl.from("#page3-left",{
        x : -20,
        opacity: 0,
        // stagger:.2,
        duration:1.5,
        scrollTrigger:{
            trigger: "#page3-left h1",
            scroller:"#main",
            start: "top 50%",
            end:"top 10%",
            scrub:2
        }
    })
    
  
})

function page2Heading(){
    var page2Heading = document.querySelector("#page2-heading")
var splitP2Heading = page2Heading.textContent.split("")
var clutter = ""
splitP2Heading.forEach(function(e){
    clutter += `<span>${e}</span>`
})
page2Heading.innerHTML = clutter
}

page2Heading()

tl.to("#page2 #page2-heading span",{
    color: "black",
    stagger: .2,
    scrollTrigger:{
        trigger: "#page2",
        scroller: "#main",
        start: "top 75%",
        end: " top -30%",
        scrub:true
    }
})
// page 3
function page3Heading(){
    var page3Heading = document.querySelector("#page3-heading")
var splitP3Heading = page3Heading.textContent.split("")
var clutter = ""
splitP3Heading.forEach(function(e){
    clutter += `<span>${e}</span>`
})
page3Heading.innerHTML = clutter
}

page3Heading()

tl.to("#page3 #page3-heading span",{
    color: "black",
    stagger: .2,
    scrollTrigger:{
        trigger: "#page3",
        scroller: "#main",
        start: "top 75%",
        end: " top -30%",
        scrub:true
    }
})

function profileDetails(){
    const items = [
        { name: "John Michael", src: "https://images.unsplash.com/photo-1542190891-2093d38760f2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ,profession : "UX/UI Designer" ,details : "Designs intuitive user interfaces and seamless experiences by understanding user needs, creating engaging, functional designs."
         },
        { name: "David Alexander", src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
           , profession : "Software Engineer" ,details:"Develops software solutions, writes efficient code, analyzes requirements, and collaborates with teams to resolve issues."
        },
        { name: "James Oliver", src: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
           , profession : "Web Designer" ,details:"Creates visually compelling, user-friendly websites with attention to design principles, responsive layouts, and multimedia integration."
        },
        { name: "Hannah Jane", src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
           , profession : "User Interface Developer" , details:"Builds interactive and responsive UI components using HTML, CSS, and JavaScript, enhancing user experience and performance."
        }
    ];
    var page3H1s = document.querySelectorAll(".profile-name")
    var profilePic = document.querySelector("#p-img")
    var profileName = document.querySelector("#img-name")
    var profession = document.querySelector("#profession")
    var profileDescription = document.querySelector("#profile-description")
    
    
    page3H1s.forEach(function(h1,index){
        h1.textContent = items[index].name
        h1.addEventListener("mousemove",function(){
            profilePic.src = items[index].src;
            profileName.textContent = items[index].name
            profession.textContent = items[index].profession
            profileDescription.textContent = items[index].details
    })
    
    })
    
}

profileDetails()


tl.from("#page3-right",{
    x : 100,
    opacity: 0,
    // stagger:.2,
    duration:1.5,
    scrollTrigger:{
        trigger: "#page3-right",
        scroller:"#main",
        start: "top 50%",
        end:"top 10%",
        scrub:2
    }
})


// page4
function page4Heading(){
    var page4Heading = document.querySelector("#contact-us-heading")
var splitP4Heading = page4Heading.textContent.split("")
var clutter = ""
splitP4Heading.forEach(function(e){
    clutter += `<span>${e}</span>`
})
page4Heading.innerHTML = clutter
}

page4Heading()

tl.to("#page4 #contact-us-heading span",{
    color: "black",
    stagger: .2,
    scrollTrigger:{
        trigger: "#page4",
        scroller: "#main",
        start: "top 75%",
        end: " top -30%",
        scrub:true
    }
})