import{j as n,l as t,m as i,u as r}from"./index-b4qwkrZe.js";import{a}from"./blocks-DNyWvPAK.js";const s=`/* Fun 404: "Not cleared for takeoff". CSS-only motion, static under prefers-reduced-motion. */
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

.nf-heli {
  position: absolute;
  left: 4%;
  right: 4%;
  top: 14%;
  width: 92%;
  height: auto;
  animation: nf-heli-hover 3.6s ease-in-out infinite;
}

.nf-rotor,
.nf-tail-rotor,
.nf-gyro-rotor,
.nf-gyro-prop {
  transform-box: fill-box;
  transform-origin: center;
}
.nf-rotor { animation: nf-spin 0.7s linear infinite; }
.nf-tail-rotor { animation: nf-spin 0.28s linear infinite; }
.nf-gyro-rotor { animation: nf-spin 1.55s linear infinite; }
.nf-gyro-prop { animation: nf-spin 0.32s linear infinite; }

.nf-plane-wrap {
  position: absolute;
  left: -18%;
  right: -18%;
  top: -14%;
  height: 44%;
  z-index: 5;
  pointer-events: none;
}
.nf-plane {
  position: absolute;
  top: 8%;
  left: 0;
  width: clamp(5.25rem, 22vw, 10rem);
  height: auto;
  filter: drop-shadow(0 6px 8px rgba(11, 30, 28, 0.28));
  animation: nf-fly 8.5s ease-in-out infinite;
}

.nf-gyro-wrap {
  position: absolute;
  right: -1.15rem;
  bottom: 4%;
  width: clamp(3.8rem, 16vw, 7.75rem);
  z-index: 2;
  pointer-events: none;
  filter: drop-shadow(0 8px 10px rgba(11, 30, 28, 0.16));
  animation: nf-bob 3.2s ease-in-out infinite;
}
@media (min-width: 768px) {
  .nf-gyro-wrap { right: -5.85rem; bottom: 12%; width: 7.75rem; }
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

@keyframes nf-spin {
  to { transform: rotate(360deg); }
}
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
  .nf-gyro-wrap { width: 3.4rem; right: -0.55rem; }
  .nf-banner { padding: 0.8rem 0.85rem 0.95rem; }
}

@media (prefers-reduced-motion: reduce) {
  .nf-heli,
  .nf-gyro-wrap,
  .nf-plane,
  .nf-rotor,
  .nf-tail-rotor,
  .nf-gyro-rotor,
  .nf-gyro-prop {
    animation: none !important;
  }
}
`,o=[{href:"/aviation-medicals/",label:"Aviation medicals"},{href:"/aviation-medicals/class-2/",label:"Class 2"},{href:"/class-4-medical/",label:"Class 4"},{href:"/cabin-crew-medical/",label:"Cabin crew"},{href:"/flight-schools/",label:"Flight schools"},{href:"/contact/",label:"Contact"}];function l(){return n.jsx("svg",{className:"nf-plane",viewBox:"0 0 220 80",focusable:"false","aria-hidden":"true",children:n.jsxs("g",{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("path",{d:"M28 44 L58 44 L70 22 L86 22 L78 44 L150 44 C168 44 180 38 196 40 L208 42 L200 48 L176 50 L78 50 L72 64 L58 64 L62 50 L28 50 C18 50 16 44 28 44 Z",fill:"#0B1E1C",stroke:"#0B1E1C",strokeWidth:"2"}),n.jsx("path",{d:"M118 44 L128 18 L144 16 L134 44",fill:"#158766",stroke:"#0B1E1C",strokeWidth:"1.5"}),n.jsx("path",{d:"M42 44 L52 28 L64 28 L56 44",fill:"#158766",stroke:"#0B1E1C",strokeWidth:"1.5"}),n.jsx("path",{d:"M28 44 L18 30 L28 34 L36 44",fill:"#0E6B52",stroke:"#0B1E1C",strokeWidth:"1.5"}),n.jsx("path",{d:"M28 50 L16 62 L28 56",fill:"#0E6B52",stroke:"#0B1E1C",strokeWidth:"1.5"}),n.jsx("circle",{cx:"206",cy:"44",r:"6",fill:"#5EE4C4",stroke:"#0B1E1C",strokeWidth:"1.5"}),n.jsx("path",{d:"M206 30 V38 M206 50 V58",stroke:"#0B1E1C",strokeWidth:"2"}),n.jsx("circle",{cx:"98",cy:"47",r:"2.2",fill:"#CCFBEF"}),n.jsx("circle",{cx:"110",cy:"47",r:"2.2",fill:"#CCFBEF"}),n.jsx("circle",{cx:"122",cy:"47",r:"2.2",fill:"#CCFBEF"})]})})}function f(){return n.jsx("svg",{className:"nf-heli",viewBox:"0 0 200 140",focusable:"false","aria-hidden":"true",children:n.jsxs("g",{fill:"none",stroke:"#0B1E1C",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsxs("g",{className:"nf-rotor",children:[n.jsx("ellipse",{cx:"96",cy:"22",rx:"86",ry:"6",fill:"rgba(11,30,28,0.10)",stroke:"none"}),n.jsx("path",{d:"M12 22 H180",strokeWidth:"3.5"}),n.jsx("path",{d:"M96 16 V28",strokeWidth:"2"}),n.jsx("circle",{cx:"96",cy:"22",r:"5",fill:"#1FA885"})]}),n.jsx("path",{d:"M96 28 V44",strokeWidth:"3"}),n.jsx("path",{d:"M70 52 C70 40 80 36 96 36 C118 36 132 44 132 58 C132 78 118 90 96 90 C76 90 64 80 64 64 C64 58 66 54 70 52 Z",fill:"#0B1E1C"}),n.jsx("path",{d:"M86 52 C90 48 102 48 108 54 C104 62 90 62 86 56 Z",fill:"#CCFBEF",strokeWidth:"1.5"}),n.jsx("path",{d:"M130 62 H184 C188 62 190 66 188 70 L176 78 H132",fill:"#0B1E1C"}),n.jsx("path",{d:"M184 54 V86",strokeWidth:"3"}),n.jsxs("g",{className:"nf-tail-rotor",children:[n.jsx("ellipse",{cx:"184",cy:"70",rx:"3",ry:"16",fill:"rgba(11,30,28,0.12)",strokeWidth:"1.5"}),n.jsx("path",{d:"M184 56 V84",strokeWidth:"2"})]}),n.jsx("path",{d:"M74 90 L66 112 M118 90 L126 112"}),n.jsx("path",{d:"M58 112 H134",strokeWidth:"3"}),n.jsx("path",{d:"M62 112 L58 118 M130 112 L134 118"}),n.jsx("circle",{cx:"78",cy:"70",r:"2",fill:"#5EE4C4",stroke:"none"})]})})}function d(){return n.jsx("svg",{className:"nf-gyro",viewBox:"0 0 200 170",focusable:"false","aria-hidden":"true",children:n.jsxs("g",{fill:"none",stroke:"#0B1E1C",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsxs("g",{className:"nf-gyro-rotor",children:[n.jsx("ellipse",{cx:"100",cy:"28",rx:"90",ry:"7",fill:"rgba(11,30,28,0.10)",stroke:"none"}),n.jsx("path",{d:"M14 26 L186 30",strokeWidth:"3.5"}),n.jsx("path",{d:"M18 30 L182 26",strokeWidth:"2",strokeOpacity:"0.45"}),n.jsx("circle",{cx:"100",cy:"28",r:"5",fill:"#1FA885"})]}),n.jsx("path",{d:"M100 33 V88",strokeWidth:"3"}),n.jsx("path",{d:"M100 88 L128 70",strokeWidth:"2.5"}),n.jsx("path",{d:"M70 86 C70 74 82 68 96 70 C108 72 118 82 116 96 C114 110 96 118 80 112 C68 108 66 96 70 86 Z",fill:"#0B1E1C"}),n.jsx("path",{d:"M82 86 C86 80 98 80 102 88 C96 96 84 96 82 90 Z",fill:"#CCFBEF",strokeWidth:"1.5"}),n.jsx("path",{d:"M114 96 L156 96 L168 86",strokeWidth:"2.5"}),n.jsx("path",{d:"M156 86 L176 70 M156 86 L176 102",strokeWidth:"2"}),n.jsxs("g",{className:"nf-gyro-prop",children:[n.jsx("circle",{cx:"176",cy:"86",r:"4",fill:"#5EE4C4"}),n.jsx("path",{d:"M176 70 V102",strokeWidth:"2.5"})]}),n.jsx("path",{d:"M96 112 L78 148 M96 112 L114 148 M96 112 L132 148"}),n.jsx("path",{d:"M70 148 H124",strokeWidth:"2.5"}),n.jsx("circle",{cx:"74",cy:"150",r:"7",fill:"#158766"}),n.jsx("circle",{cx:"120",cy:"150",r:"7",fill:"#158766"}),n.jsx("path",{d:"M90 108 L54 136"}),n.jsx("circle",{cx:"50",cy:"140",r:"6",fill:"#158766"})]})})}function m(){return n.jsxs("section",{className:"nf-page",children:[n.jsx("style",{children:s}),n.jsxs(a,{className:"relative",children:[n.jsx("div",{className:"nf-mark","aria-hidden":"true",children:n.jsxs("div",{className:"nf-cluster",children:[n.jsx("span",{className:"nf-four",children:"4"}),n.jsx("span",{className:"nf-zero",children:n.jsx(f,{})}),n.jsx("span",{className:"nf-four",children:"4"}),n.jsx("div",{className:"nf-plane-wrap",children:n.jsx(l,{})}),n.jsx("div",{className:"nf-gyro-wrap",children:n.jsx(d,{})})]})}),n.jsxs("div",{className:"nf-banner",children:[n.jsx("p",{className:"nf-eyebrow",children:"Page 404"}),n.jsx("h1",{children:"Not cleared for takeoff"})]}),n.jsx("p",{className:"nf-sub",children:"This page doesn't exist, or it's been moved to a new runway."}),n.jsxs("div",{className:"nf-actions",children:[n.jsxs("a",{href:r("/book/"),className:"nf-cta",...i("404"),children:[n.jsx(t,{className:"w-5 h-5","aria-hidden":"true"}),"Book your medical"]}),n.jsx("nav",{className:"nf-links","aria-label":"Helpful pages",children:o.map(e=>n.jsx("a",{href:r(e.href),children:e.label},e.href))})]})]})]})}export{m as NotFoundPage};
