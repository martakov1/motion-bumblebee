import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import { drawAnimation } from "./logo.js";
import { dashboardAnimation } from "./dashboard.js";

gsap.registerPlugin(GSDevTools);

const mainTL = gsap.timeline()
mainTL.add(drawAnimation())
      .add(dashboardAnimation());

GSDevTools.create();