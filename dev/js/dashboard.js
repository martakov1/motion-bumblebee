import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const dashboardTL = gsap.timeline();


export function dashboardAnimation(){

    dashboardTL.from("#dashboard",{duration:2, alpha:0})

    return dashboardTL;

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
}
