import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const dashboardTL = gsap.timeline();


export function dashboardAnimation(){

    dashboardTL.from("#dashboard",{duration:2, alpha:0})

    return dashboardTL;

    // test hello
}
