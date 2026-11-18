import{j as n,u as e,l as a,m as i}from"./index-CG94i2Vo.js";import{a as t}from"./blocks-CdVSFVmw.js";const s=`/* Fun 404: "Not cleared for takeoff". CSS-only motion, static under prefers-reduced-motion. */
.nf-page {
  position: relative;
  isolation: isolate;
  overflow-x: hidden;
  padding: 1.35rem 0 3.5rem;
  background:
    radial-gradient(ellipse at 50% 8%, rgba(94, 228, 196, 0.28), transparent 52%),
    linear-gradient(180deg, #F0FDF9 0%, #F6FBFA 46%, #ffffff 100%);
}
@media (min-width: 1024px) {
  .nf-page { padding: 2.2rem 0 5rem; }
}

/* 3-column grid: aircraft in the side columns or the sky row, 404 always clear in the centre. */
.nf-mark {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  grid-template-rows: auto auto;
  column-gap: 0.3rem;
  row-gap: 0.2rem;
  align-items: end;
  width: 100%;
  margin: 0 auto 0.45rem;
  user-select: none;
}

.nf-sky {
  position: relative;
  container-type: inline-size;
  grid-column: 2;
  grid-row: 1;
  width: clamp(8.25rem, 38vw, 11.5rem);
  height: 3.7rem;
  justify-self: center;
  pointer-events: none;
  z-index: 3;
}
.nf-plane {
  position: absolute;
  left: 0;
  bottom: 0.1rem;
  width: 78%;
  height: auto;
  filter: drop-shadow(0 6px 8px rgba(11, 30, 28, 0.22));
  animation: nf-fly 8.5s ease-in-out infinite;
}

.nf-heli-wrap {
  grid-column: 1;
  grid-row: 1;
  justify-self: start;
  align-self: end;
  width: min(5.7rem, 100%);
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

.nf-cluster {
  grid-column: 1 / -1;
  grid-row: 2;
  position: relative;
  z-index: 5;
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

.nf-gyro-wrap {
  grid-column: 3;
  grid-row: 1;
  justify-self: end;
  align-self: end;
  width: min(5.85rem, 100%);
  z-index: 3;
  pointer-events: none;
  filter: drop-shadow(0 8px 10px rgba(11, 30, 28, 0.16));
  animation: nf-bob 3.2s ease-in-out infinite;
}
.nf-gyro { width: 100%; height: auto; display: block; }

/* Desktop: plane flies the full width above the 404; heli left, gyro lower right. */
@media (min-width: 1024px) {
  .nf-mark {
    column-gap: 0.75rem;
    row-gap: 0.15rem;
    align-items: center;
  }
  .nf-sky {
    grid-column: 1 / -1;
    width: 100%;
    height: 7.25rem;
  }
  .nf-plane {
    width: 16.5rem;
  }
  .nf-cluster {
    grid-column: 2;
    grid-row: 2;
  }
  .nf-heli-wrap {
    grid-column: 1;
    grid-row: 2;
    justify-self: end;
    align-self: center;
    width: min(13rem, 100%);
  }
  .nf-gyro-wrap {
    grid-column: 3;
    grid-row: 2;
    justify-self: start;
    align-self: end;
    width: min(12rem, 100%);
    margin-bottom: -0.35rem;
  }
}

@media (max-width: 389px) {
  .nf-sky { width: 7.6rem; height: 3.35rem; }
  .nf-heli-wrap { width: min(5.15rem, 100%); }
  .nf-gyro-wrap { width: min(5.25rem, 100%); }
  .nf-banner { padding: 0.8rem 0.85rem 0.95rem; }
}

.nf-banner {
  position: relative;
  z-index: 4;
  margin: 0.7rem auto 1.2rem;
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
  50% { transform: translateY(-8px) rotate(2deg); }
}
/* 100cqw is the sky width; 100% in translate is the plane's own width. */
@keyframes nf-fly {
  0%, 100% { transform: translateX(0) translateY(4px) rotate(-5deg); }
  50% { transform: translateX(calc(100cqw - 100%)) translateY(-3px) rotate(2deg); }
}

@media (prefers-reduced-motion: reduce) {
  .nf-heli,
  .nf-gyro-wrap,
  .nf-plane {
    animation: none !important;
  }
  .nf-plane {
    left: 50%;
    transform: translateX(-50%);
  }
}
`,o=[{href:"/aviation-medicals/",label:"Aviation medicals"},{href:"/aviation-medicals/class-2/",label:"Class 2"},{href:"/class-4-medical/",label:"Class 4"},{href:"/cabin-crew-medical/",label:"Cabin crew"},{href:"/flight-schools/",label:"Flight schools"},{href:"/contact/",label:"Contact"}];function d(){return n.jsxs("section",{className:"nf-page",children:[n.jsx("style",{children:s}),n.jsxs(t,{className:"relative",children:[n.jsxs("div",{className:"nf-mark","aria-hidden":"true",children:[n.jsx("div",{className:"nf-sky",children:n.jsx("img",{className:"nf-plane",src:e("/images/404-plane.webp"),width:640,height:193,alt:"",loading:"lazy",decoding:"async"})}),n.jsx("div",{className:"nf-heli-wrap",children:n.jsx("img",{className:"nf-heli",src:e("/images/404-helicopter.webp"),width:640,height:243,alt:"",loading:"lazy",decoding:"async"})}),n.jsxs("div",{className:"nf-cluster",children:[n.jsx("span",{className:"nf-four",children:"4"}),n.jsx("span",{className:"nf-zero"}),n.jsx("span",{className:"nf-four",children:"4"})]}),n.jsx("div",{className:"nf-gyro-wrap",children:n.jsx("img",{className:"nf-gyro",src:e("/images/404-gyrocopter.webp"),width:520,height:324,alt:"",loading:"lazy",decoding:"async"})})]}),n.jsxs("div",{className:"nf-banner",children:[n.jsx("p",{className:"nf-eyebrow",children:"Page 404"}),n.jsx("h1",{children:"Not cleared for takeoff"})]}),n.jsx("p",{className:"nf-sub",children:"This page doesn't exist, or it's been moved to a new runway."}),n.jsxs("div",{className:"nf-actions",children:[n.jsxs("a",{href:e("/book/"),className:"nf-cta",...i("404"),children:[n.jsx(a,{className:"w-5 h-5","aria-hidden":"true"}),"Book your medical"]}),n.jsx("nav",{className:"nf-links","aria-label":"Helpful pages",children:o.map(r=>n.jsx("a",{href:e(r.href),children:r.label},r.href))})]})]})]})}export{d as NotFoundPage};
