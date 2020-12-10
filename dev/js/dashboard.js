import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const dashboardTL = gsap.timeline();


export function dashboardAnimation(){

    dashboardTL.from(".dashboard",{duration:2, alpha:0})

    .from("#path-29",{duration:2, drawSVG:"0%", ease:"none"}, "dash")
    .from("path-31",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    .from("#path-33",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    .from("#path-35",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    .from("#path-37",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    .from("#path-47",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    .from("#path-49",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    .from("#path-51",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    .from("#path-53",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    .from("#path-55",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    .from("#path-57",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    .from("#path-61",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    .from("#path-9",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    .from("#path-11",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    .from("#path-13",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    .from("#path-15",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    .from("#path-17",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    .from("#path-19",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    .from("#path-27",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    .from("#path-29",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    .from("#path-31",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    .from("#path-33",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    .from("#path-35",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    .from("#path-37",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    .from("#path-33",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    .from("#path-33",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    
    ;
    return dashboardTL;


}