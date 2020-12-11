import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const drawTL = gsap.timeline();


export function drawAnimation(){

    // logoWebTL.from(".logo",{
    //     duration: 1,
    //     stagger: 0.5,
    //     drawSVG: "o"
    // })
    // drawTL.to("#dashboard",{duration:2, alpha:0}, "bumble-bee")
    drawTL.from("#Path-2",{duration:2, drawSVG:"0%", ease:"none"}, "bumble-bee")
    .from("#Path-6",{duration:2, drawSVG:"0%", ease:"none"}, "bumble-bee")
    .from("#Path-10",{duration:2, drawSVG:"0%", ease:"none"}, "bumble-bee")
    .from("#Path-13",{duration:2, drawSVG:"0%", ease:"none"}, "bumble-bee")
    .from("#Path-14",{duration:2, drawSVG:"0%", ease:"none"}, "bumble-bee")
    .from("#Path-16",{duration:2, drawSVG:"0%", ease:"none"}, "bumble-bee")
    .from("#Path-18",{duration:2, drawSVG:"0%", ease:"none"}, "bumble-bee")
    .from("#Path-21",{duration:2, drawSVG:"0%", ease:"none"}, "bumble-bee")
    .from("#Path-23",{duration:2, drawSVG:"0%", ease:"none"}, "bumble-bee")
    .from("#Path-24",{duration:2, drawSVG:"0%", ease:"none"}, "bumble-bee")
    .from("#Path-25",{duration:2, drawSVG:"0%", ease:"none"}, "bumble-bee")
    .from("#Path-28",{duration:2, drawSVG:"0%", ease:"none"}, "bumble-bee")
    .from("#Path-30",{duration:2, drawSVG:"0%", ease:"none"}, "bumble-bee")
    .to("#storyboard-copy-3",{duration:2, ease:"none",scale: 5, transformOrigin: "50% 50%", alpha: 0})
    
    ;
    return drawTL;
}

    //drawTL.to("#box",{duration:2, drawSVG:"0%"});

    //drawTL.to("#box",{duration:2, drawSVG:"20% 60%"});

    //drawTL.to("#box",{duration:2, drawSVG:600});

    //drawTL.to("#box",{duration:2, drawSVG:"10% 90%"});

    //drawTL.to("#box",{duration:2, drawSVG:"-10% -90%"});

    //drawTL.from("#box",{duration:2, drawSVG:"50% 50%"});

    //drawTL.from("#box",{duration:2, drawSVG:"10% 50%"});

    // drawTL.fromTo("#box",{drawSVG:"0% 10%"},{duration:2, drawSVG: "90% 100%"})
    //       .to("#box",{duration:2, drawSVG: "100%"});

