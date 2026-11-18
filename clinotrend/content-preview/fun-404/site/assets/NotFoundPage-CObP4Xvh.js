import{j as n,u as e,l as r,m as t}from"./index-C-6hC4Hv.js";import{a as i}from"./blocks-CSyBAwcx.js";const s=`/* Fun 404: "Not cleared for takeoff". CSS-only motion, static under prefers-reduced-motion. */
.nf-page {
  position: relative;
  isolation: isolate;
  overflow-x: hidden;
  padding: 2.25rem 0 3.5rem;
  background:
    radial-gradient(ellipse at 50% 8%, rgba(94, 228, 196, 0.28), transparent 52%),
    linear-gradient(180deg, #F0FDF9 0%, #F6FBFA 46%, #ffffff 100%);
}
@media (min-width: 1024px) {
  .nf-page { padding: 3rem 0 5rem; }
}

.nf-mark {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: clamp(8.75rem, 40vw, 17rem);
  margin: 0 auto 0.15rem;
  user-select: none;
}
.nf-cluster {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(0.1rem, 1.2vw, 0.55rem);
}

.nf-four {
  position: relative;
  z-index: 1;
  font-family: Montserrat, system-ui, sans-serif;
  font-weight: 800;
  font-size: clamp(5.75rem, 28vw, 13rem);
  line-height: 0.8;
  letter-spacing: -0.06em;
  color: #0B1E1C;
}

.nf-zero {
  position: relative;
  z-index: 1;
  width: clamp(4.4rem, 21vw, 10.25rem);
  height: clamp(5.9rem, 28vw, 13rem);
  border: clamp(0.42rem, 1.7vw, 0.85rem) solid #0B1E1C;
  border-radius: 50%;
  background:
    radial-gradient(circle at 50% 36%, #F0FDF9 0%, #CCFBEF 48%, #5EE4C4 100%);
  overflow: hidden;
  flex: 0 0 auto;
  box-shadow: inset 0 -18px 28px rgba(11, 30, 28, 0.08);
}

/* Heli sits over the 0 so the rotor can overlap the numerals a little. */
.nf-heli-wrap {
  position: absolute;
  left: 50%;
  top: 52%;
  width: clamp(8.4rem, 38vw, 17.5rem);
  transform: translate(-50%, -54%);
  z-index: 3;
  pointer-events: none;
  filter: drop-shadow(0 8px 10px rgba(11, 30, 28, 0.16));
}
.nf-heli {
  display: block;
  width: 100%;
  height: auto;
  animation: nf-heli-hover 3.6s ease-in-out infinite;
}

.nf-plane-wrap {
  position: absolute;
  left: -18%;
  right: -18%;
  top: -16%;
  height: 48%;
  z-index: 5;
  pointer-events: none;
}
.nf-plane {
  position: absolute;
  top: 10%;
  left: 0;
  width: clamp(6.5rem, 28vw, 12.5rem);
  height: auto;
  filter: drop-shadow(0 6px 8px rgba(11, 30, 28, 0.22));
  animation: nf-fly 8.5s ease-in-out infinite;
}

.nf-gyro-wrap {
  position: absolute;
  right: -0.35rem;
  bottom: -6%;
  width: clamp(4.4rem, 20vw, 8.75rem);
  z-index: 2;
  pointer-events: none;
  filter: drop-shadow(0 8px 10px rgba(11, 30, 28, 0.16));
  animation: nf-bob 3.2s ease-in-out infinite;
}
@media (min-width: 768px) {
  .nf-gyro-wrap { right: -5.2rem; bottom: 2%; width: 8.75rem; }
}
.nf-gyro { width: 100%; height: auto; display: block; }

.nf-banner {
  position: relative;
  z-index: 4;
  margin: -0.4rem auto 1.2rem;
  max-width: 38rem;
  background: #0B1E1C;
  color: #fff;
  border-radius: 1.15rem;
  padding: 0.9rem 1.15rem 1.05rem;
  text-align: center;
  box-shadow: 0 18px 50px rgba(11, 30, 28, 0.16);
}
.nf-eyebrow {
  margin: 0 0 0.35rem;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #5EE4C4;
}
.nf-banner h1 {
  margin: 0;
  font-family: Montserrat, system-ui, sans-serif;
  font-weight: 800;
  font-size: clamp(1.15rem, 5.4vw, 2.05rem);
  letter-spacing: 0.045em;
  line-height: 1.18;
  text-transform: uppercase;
  color: #fff;
  text-wrap: balance;
}

.nf-sub {
  text-align: center;
  color: #3F5C57;
  font-size: clamp(0.98rem, 2.6vw, 1.12rem);
  line-height: 1.55;
  max-width: 28rem;
  margin: 0 auto 1.7rem;
}

.nf-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.35rem;
}
.nf-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: #1FA885;
  color: #0B1E1C;
  font-weight: 600;
  font-size: 1.02rem;
  padding: 0.9rem 1.55rem;
  min-height: 3rem;
  min-width: 12.5rem;
  border-radius: 999px;
  box-shadow: 0 10px 30px rgba(11, 30, 28, 0.12);
  text-decoration: none;
}
.nf-cta:hover { background: #158766; }
.nf-cta:focus-visible {
  outline: 3px solid #0E6B52;
  outline-offset: 3px;
}

.nf-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.45rem 1rem;
  max-width: 34rem;
}
.nf-links a {
  color: #0E6B52;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 3px;
  padding: 0.25rem 0.1rem;
}
.nf-links a:hover { color: #0B1E1C; }

@keyframes nf-heli-hover {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}
@keyframes nf-bob {
  0%, 100% { transform: translateY(0) rotate(-2deg); }
  50% { transform: translateY(-9px) rotate(2deg); }
}
@keyframes nf-fly {
  0%, 100% { transform: translateX(0%) translateY(6px) rotate(-6deg); }
  50% { transform: translateX(145%) translateY(-4px) rotate(3deg); }
}

@media (max-width: 389px) {
  .nf-gyro-wrap { width: 4.15rem; right: -0.2rem; bottom: -8%; }
  .nf-heli-wrap { width: 8.1rem; }
  .nf-plane { width: 6.15rem; }
  .nf-banner { padding: 0.8rem 0.85rem 0.95rem; }
}

@media (prefers-reduced-motion: reduce) {
  .nf-heli,
  .nf-gyro-wrap,
  .nf-plane {
    animation: none !important;
  }
}
`,o=[{href:"/aviation-medicals/",label:"Aviation medicals"},{href:"/aviation-medicals/class-2/",label:"Class 2"},{href:"/class-4-medical/",label:"Class 4"},{href:"/cabin-crew-medical/",label:"Cabin crew"},{href:"/flight-schools/",label:"Flight schools"},{href:"/contact/",label:"Contact"}];function f(){return n.jsxs("section",{className:"nf-page",children:[n.jsx("style",{children:s}),n.jsxs(i,{className:"relative",children:[n.jsx("div",{className:"nf-mark","aria-hidden":"true",children:n.jsxs("div",{className:"nf-cluster",children:[n.jsx("span",{className:"nf-four",children:"4"}),n.jsx("span",{className:"nf-zero"}),n.jsx("span",{className:"nf-four",children:"4"}),n.jsx("div",{className:"nf-plane-wrap",children:n.jsx("img",{className:"nf-plane",src:e("/images/404-plane.webp"),width:420,height:127,alt:"",loading:"lazy",decoding:"async"})}),n.jsx("div",{className:"nf-heli-wrap",children:n.jsx("img",{className:"nf-heli",src:e("/images/404-helicopter.webp"),width:480,height:182,alt:"",loading:"lazy",decoding:"async"})}),n.jsx("div",{className:"nf-gyro-wrap",children:n.jsx("img",{className:"nf-gyro",src:e("/images/404-gyrocopter.webp"),width:360,height:224,alt:"",loading:"lazy",decoding:"async"})})]})}),n.jsxs("div",{className:"nf-banner",children:[n.jsx("p",{className:"nf-eyebrow",children:"Page 404"}),n.jsx("h1",{children:"Not cleared for takeoff"})]}),n.jsx("p",{className:"nf-sub",children:"This page doesn't exist, or it's been moved to a new runway."}),n.jsxs("div",{className:"nf-actions",children:[n.jsxs("a",{href:e("/book/"),className:"nf-cta",...t("404"),children:[n.jsx(r,{className:"w-5 h-5","aria-hidden":"true"}),"Book your medical"]}),n.jsx("nav",{className:"nf-links","aria-label":"Helpful pages",children:o.map(a=>n.jsx("a",{href:e(a.href),children:a.label},a.href))})]})]})]})}export{f as NotFoundPage};
