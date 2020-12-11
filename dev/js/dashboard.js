import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const dashboardTL = gsap.timeline();


export function dashboardAnimation(){

    dashboardTL.from("#dashboard",{duration:2, alpha:0})

    .from("#Bar",{duration:1, drawSVG:"0%", alpha: 0, ease:"none"}, "dash")

    //left-number-animation//
    .from("#zero-a",{duration:0.25, drawSVG:"0%", alpha: 0, ease:"none"})
    .from("#thirty-a",{duration:0.25, drawSVG:"0%", alpha: 0, ease:"none"})
    .from("#fifty-a",{duration:0.25, drawSVG:"0%", alpha: 0, ease:"none"})
    .from("#seventy",{duration:0.25, drawSVG:"0%", alpha: 0, ease:"none"})

    //right-number-animation//

    .from("#zero-b",{duration:0.25, drawSVG:"0%", alpha: 0, ease:"none"})
    .from("#twenty",{duration:0.25, drawSVG:"0%", alpha: 0, ease:"none"})
    .from("#thirty-b",{duration:0.25, drawSVG:"0%", alpha: 0, ease:"none"})
    .from("#fourty-a",{duration:0.25, drawSVG:"0%", alpha: 0, ease:"none"})


    //right-bars-animation//
    
    .from("#path-19",{duration:0.25,drawSVG:"0%", alpha: 0, ease:"none"}, "bars1") //bar-one//
    .from("#path-15",{duration:0.25,drawSVG:"0%", alpha: 0, ease:"none"}, "bars2") //bar-two//
    .from("#path-9",{duration:0.25,drawSVG:"0%", alpha: 0, ease:"none"}, "bars3") //bar-three//
    .from("#path-17",{duration:0.25,drawSVG:"0%", alpha: 0, ease:"none"}, "bars4") //bar-four//
    .from("#path-11",{duration:0.25,drawSVG:"0%", alpha: 0, ease:"none"}, "bars5") //bar-five//
    .from("#path-13",{duration:0.25,drawSVG:"0%", alpha: 0, ease:"none"}, "bars6") //bar-six//


    //left-bars-animation//
    .from("#path-39",{duration:0.25,drawSVG:"0%", alpha: 0, ease:"none"}, "bars1") //bar-one//
    .from("#path-35",{duration:0.25,drawSVG:"0%", alpha: 0, ease:"none"}, "bars2") //bar-two//
    .from("#path-29",{duration:0.25,drawSVG:"0%", alpha: 0, ease:"none"}, "bars3") //bar-three//
    .from("#path-37",{duration:0.25,drawSVG:"0%", alpha: 0, ease:"none"}, "bars4") //bar-four//
    .from("#path-31",{duration:0.25,drawSVG:"0%", alpha: 0, ease:"none"}, "bars5") //bar-five//
    .from("#path-33",{duration:0.25,drawSVG:"0%", alpha: 0, ease:"none"}, "bars6") //bar-six//
   

     //middle-animation//

      .from("#song-copy",{duration:0.25, drawSVG:"0%", alpha: 0, ease:"none"})
      .from("#artist-copy",{duration:0.25, drawSVG:"0%", alpha: 0, ease:"none"})
      .from("#prev-copy",{duration:0.25, drawSVG:"0%", alpha: 0, ease:"none"})
      .from("#next-copy",{duration:0.25, drawSVG:"0%", alpha: 0, ease:"none"})


       //speedometer-animation//

       .from("#mph",{duration:0.25, drawSVG:"0%", alpha: 0, ease:"none"})
      
       .from("#thirty-c",{duration:0.25, drawSVG:"0%", alpha: 0, ease:"none"})
       .from("#fourty-b",{duration:0.25, drawSVG:"0%", alpha: 0, ease:"none"})
       .from("#fifty-b",{duration:0.25, drawSVG:"0%", alpha: 0, ease:"none"})
       .from("#sixty",{duration:0.25, drawSVG:"0%", alpha: 0, ease:"none"})
       .from("#seventy-b",{duration:0.25, drawSVG:"0%", alpha: 0, ease:"none"})
       .from("#eighty",{duration:0.25, drawSVG:"0%", alpha: 0, ease:"none"})
       .from("#ninety",{duration:0.25, drawSVG:"0%", alpha: 0, ease:"none"})
       .from("#hundred",{duration:0.25, drawSVG:"0%", alpha: 0, ease:"none"})
      
      
     
      
    
    // .from("#00-b",{duration:0.25, alpha: 0})
    // .from("#20",{duration:0.25, alpha: 0})
    // .from("#30-b",{duration:0.25, alpha: 0})
    // .from("#40-a",{duration:0.25, alpha: 0})

    // .from("#0-a",{duration:0.25, drawSVG:"0%", alpha: 0, ease:"none"})
    // .from("#30-a",{duration:0.25, drawSVG:"0%", alpha: 0, ease:"none"})
    // .from("#50-a",{duration:0.25, drawSVG:"0%", alpha: 0, ease:"none"})
    // .from("#70",{duration:0.25, drawSVG:"0%", alpha: 0, ease:"none"})

    // .from("#Locator-Copy",{duration:0.25, drawSVG:"0%", alpha: 0, ease:"none"})
    // .from("#prev-copy",{duration:0.25, drawSVG:"0%", alpha: 0, ease:"none"})
    // .from("#next-copy",{duration:0.25, drawSVG:"0%", alpha: 0, ease:"none"})
    // .from("#song-copy",{duration:0.25, drawSVG:"0%", alpha: 0, ease:"none"})
    // .from("#artist-copy",{duration:0.25, drawSVG:"0%", alpha: 0, ease:"none"})

    // .from("#mph",{duration:0.25, drawSVG:"0%", alpha: 0, ease:"none"})
    // .from("#30-c",{duration:0.25, drawSVG:"0%", alpha: 0, ease:"none"})
    // .from("#40-b",{duration:0.25, drawSVG:"0%", alpha: 0, ease:"none"})
    // .from("#50-b",{duration:0.25, drawSVG:"0%", alpha: 0, ease:"none"})
    // .from("#60",{duration:0.25, drawSVG:"0%", alpha: 0, ease:"none"})
    // .from("#70-b",{duration:0.25, drawSVG:"0%", alpha: 0, ease:"none"})
    // .from("#80",{duration:0.25, drawSVG:"0%", alpha: 0, ease:"none"})
    // .from("#90",{duration:0.25, drawSVG:"0%", alpha: 0, ease:"none"})
    // .from("#100",{duration:0.25, drawSVG:"0%", alpha: 0, ease:"none"})
   

    .from("#path-67",{duration:1, drawSVG:"0%",alpha: 0, ease:"none"})//locator//
    return dashboardTL;



}

 
    
    // .from("#song-copy",{duration:1, drawSVG:"0%", alpha: 0, ease:"none"}, "dash")

    // .from("path-31",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    // .from("#path-33",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    // .from("#path-35",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    // .from("#path-37",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    // .from("#path-47",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    // .from("#path-49",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    // .from("#path-51",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    // .from("#path-53",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    // .from("#path-55",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    // .from("#path-57",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    // .from("#path-61",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    // .from("#path-9",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    // .from("#path-11",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    // .from("#path-13",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    // .from("#path-15",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    // .from("#path-17",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    // .from("#path-19",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    // .from("#path-27",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    // .from("#path-29",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    // .from("#path-31",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    // .from("#path-33",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    // .from("#path-35",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    // .from("#path-37",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    // .from("#path-33",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    // .from("#path-33",{duration:2, drawSVG:"0%", ease:"none"}, "bars")
    
    // ;