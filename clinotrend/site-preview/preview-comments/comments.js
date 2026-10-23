/* Review comments for the Clinotrend website PREVIEW only (injected by scripts/prerender.mjs when VITE_PREVIEW=1).
   Adapted from the GBP preview comment layer (gbp-preview/src/app.js), including the mobile fix: pointer events,
   an explicit "Add comment" mode and a bottom sheet kept above the keyboard with visualViewport.
   Each comment is posted to its own ntfy.sh topic and archived to venter345-cell/acc-review-comments
   (clinotrend-site.json / .md) by the same GitHub Action that archives the GBP preview comments. */
(function(){
"use strict";
if (window.__cmLoaded) return; window.__cmLoaded = true;
var TOPIC = "acc-clinotrend-site-5c154d575d";
var ARCHIVE = "https://raw.githubusercontent.com/venter345-cell/acc-review-comments/main/clinotrend-site.json";
var LABEL = "Website preview";
var me = document.currentScript && document.currentScript.src || "";
var BASE = me ? new URL("../", me).pathname : "/";          /* e.g. /clinotrend/site-preview/ */
var ORIGIN = location.origin;
var LS = "acc-clinotrend-site-v1";
var $ = function(s, r){ return (r||document).querySelector(s); };

function route(){ var p = location.pathname; if (p.indexOf(BASE) === 0) p = "/" + p.slice(BASE.length); return p.replace(/index\.html$/, "") || "/"; }
function pageUrl(p){ return ORIGIN + BASE.replace(/\/$/, "") + p; }

var state = { events: [], local: {} }, layer = null, armed = false, bubble = null, tempPin = null;
try { var saved = JSON.parse(localStorage.getItem(LS) || "{}"); state.local = saved.local || {}; state.events = saved.events || []; } catch(e){}
var author = ""; try { author = localStorage.getItem(LS + "-name") || ""; } catch(e){}
function save(){ try { localStorage.setItem(LS, JSON.stringify({ local: state.local, events: state.events })); } catch(e){} }
function uid(){ return Date.now().toString(36) + Math.random().toString(36).slice(2, 8); }
function b64(o){ return btoa(unescape(encodeURIComponent(JSON.stringify(o)))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,""); }
function unb64(s){ s = s.replace(/-/g,"+").replace(/_/g,"/"); while (s.length % 4) s += "="; return JSON.parse(decodeURIComponent(escape(atob(s)))); }
function esc(s){ return String(s).replace(/[&<>"]/g, function(c){ return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

function comments(){
  var map = {}, del = {};
  state.events.slice().sort(function(a,b){ return (a.ts||0)-(b.ts||0); }).forEach(function(e){
    if (e.type === "delete") del[e.id] = 1; else if (e.id) map[e.id] = Object.assign({}, map[e.id]||{}, e);
  });
  return Object.keys(map).filter(function(k){ return !del[k]; }).map(function(k){ return map[k]; }).sort(function(a,b){ return (a.ts||0)-(b.ts||0); });
}
function addEvent(e){
  var key = e.type + ":" + e.id;
  var found = state.events.filter(function(x){ return x.type + ":" + x.id === key; })[0];
  if (found){ if (e.sent) found.sent = true; if (e.text && !found.text) found.text = e.text; return false; }
  state.events.push(e); return true;
}
function send(e){
  /* ntfy caps the size of tags, so the event tag carries only what is needed to place the pin; "where" travels
     in the message after "At: " and is read back from there (here and in the archive script). */
  var meta = Object.assign({}, e); delete meta.text; delete meta.sent; delete meta.mine; delete meta.where;
  ["rx", "ry", "px", "py"].forEach(function(k){ if (typeof meta[k] === "number") meta[k] = Math.round(meta[k] * 10000) / 10000; });
  var isDel = e.type === "delete";
  var body = { topic: TOPIC,
    title: isDel ? "Clinotrend " + LABEL + ": comment removed" : "Clinotrend " + LABEL + " " + (e.page || "/") + ": comment from " + (e.author || "a reviewer"),
    message: isDel ? "Comment removed by its author." : (e.text + (e.where ? "\n\nAt: " + e.where : "")),
    tags: [isDel ? "wastebasket" : "speech_balloon", "ev:" + b64(meta)],
    click: pageUrl(e.page || "/") + "#c=" + e.id };
  return fetch("https://ntfy.sh/", { method: "POST", body: JSON.stringify(body) })
    .then(function(r){ if (!r.ok) throw new Error(r.status); e.sent = true; save(); render(); return true; })
    .catch(function(){ return false; });
}
function flush(){ state.events.filter(function(e){ return e.mine && !e.sent; }).forEach(send); }
function ingest(list){
  var changed = false;
  list.forEach(function(e){ if (e && e.id && e.type){ e.sent = true; if (addEvent(e)) changed = true; } });
  if (changed){ save(); render(); }
}
function fromNtfyLine(m){
  var ev = null;
  (m.tags || []).forEach(function(t){ if (t.indexOf("ev:") === 0){ try { ev = unb64(t.slice(3)); } catch(x){} } });
  if (!ev) return null;
  if (ev.type === "comment"){ var msg = m.message || ""; var i = msg.lastIndexOf("\n\nAt: "); ev.text = i > -1 ? msg.slice(0, i) : msg; if (i > -1 && !ev.where) ev.where = msg.slice(i + 6); }
  return ev;
}
function sync(){
  fetch(ARCHIVE + "?t=" + Date.now()).then(function(r){ return r.ok ? r.json() : { events: [] }; }).then(function(d){
    ingest((d.events || []).map(function(e){ var c = Object.assign({}, e); delete c._ntfy; delete c._time; return c; }));
  }).catch(function(){});
  fetch("https://ntfy.sh/" + TOPIC + "/json?poll=1&since=all").then(function(r){ return r.text(); }).then(function(t){
    ingest(t.split("\n").filter(Boolean).map(function(l){ try { return fromNtfyLine(JSON.parse(l)); } catch(x){ return null; } }).filter(Boolean));
  }).catch(function(){});
}

/* Anchors: element path from the nearest ancestor with an id (pages are prerendered, so paths are stable per route). */
function pathOf(el){
  var parts = [];
  while (el && el !== document.body){
    if (el.id && !/^cm-/.test(el.id)) return "#" + el.id + (parts.length ? ">" + parts.reverse().join(".") : "");
    var p = el.parentElement; if (!p) break;
    parts.push(Array.prototype.indexOf.call(p.children, el));
    el = p;
  }
  return "body>" + parts.reverse().join(".");
}
function resolvePath(path){
  if (!path) return null;
  var m = path.split(">"), el = m[0] === "body" ? document.body : document.getElementById(m[0].slice(1));
  if (!el) return null;
  if (m[1]) { var idx = m[1].split("."); for (var i = 0; i < idx.length; i++){ el = el && el.children[+idx[i]]; } }
  return el || null;
}
var INLINE = /^(SPAN|B|I|EM|STRONG|A|SMALL|CODE|SVG|PATH|IMG|PICTURE|SOURCE|BR|LABEL|SUMMARY)$/i;
function blockOf(el){ while (el && el !== document.body && (INLINE.test(el.tagName) || el instanceof SVGElement)) el = el.parentElement; return el; }
function visible(el){ if (!el) return false; var r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0; }
function describe(el, target){
  var ctl = target && target.closest && target.closest("a,button");
  if (ctl && el.contains(ctl)) el = ctl;
  var sec = el.closest("section,header,footer"); var h = sec && (sec.tagName === "HEADER" ? "Header" : sec.tagName === "FOOTER" ? "Footer" : ((sec.querySelector("h1,h2") || {}).innerText || ""));
  h = (h || "").replace(/\s+/g, " ").trim().slice(0, 50);
  var t = (el.getAttribute("aria-label") || el.innerText || el.textContent || "").replace(/\s+/g, " ").trim().slice(0, 70);
  return LABEL + " " + route() + (h ? ", " + h : "") + (t ? ": \"" + t + (t.length >= 70 ? "..." : "") + "\"" : "");
}

function ui(){
  var d = document.createElement("div"); d.id = "cm-root";
  d.innerHTML =
    '<div id="cm-layer"></div>' +
    '<div id="cm-bar" class="cm-ui"><button id="cm-add" type="button"><span aria-hidden="true">&#128172;</span> Add comment</button><button id="cm-open" type="button" aria-label="Show all comments"><span class="cnt" id="cm-count">0</span></button></div>' +
    '<div id="cm-banner" class="cm-ui" hidden role="status"><b>Tap anywhere to place your note</b><span>Links and buttons place a note too, they will not open.</span><div class="r"><button type="button" class="cm-btn big" id="cm-general">General comment</button><button type="button" class="cm-btn big" id="cm-arm-cancel">Cancel</button></div></div>' +
    '<aside id="cm-drawer" class="cm-ui" aria-label="Comments"><header><div class="h4">Comments on the website preview</div><button class="cm-btn" id="cm-close" type="button">Close</button></header><div id="cm-list"></div>' +
    '<footer><button class="cm-btn p big" id="cm-drawer-general" type="button">Add a general comment on this page</button><p class="note">Each comment is sent to Ads Creation Centre as soon as you save it.</p><div class="row2"><button class="cm-btn" id="cm-mail" type="button">Email a copy to ACC</button><button class="cm-btn" id="cm-send" type="button">Resend unsent</button></div></footer></aside>';
  document.body.appendChild(d);
  layer = $("#cm-layer");
  var seen = ""; try { seen = localStorage.getItem(LS + "-coach"); } catch(e){}
  if (seen !== "1"){
    var c = document.createElement("div"); c.className = "cm-coach cm-ui";
    c.innerHTML = '<div><div style="font-size:42px">&#128172;</div><div class="h4">How to comment</div><p>Dr Ndhlovu, this is a draft of the new website. Tap <b>Add comment</b> (bottom left), then tap the spot your note is about. Type, then tap <b>Save comment</b>. It works on every page, and your notes reach our team straight away. For a note about a whole page, use <b>General comment</b>.</p><button class="cm-btn p big" id="cm-coach-ok" type="button">Got it</button></div>';
    document.body.appendChild(c);
    $("#cm-coach-ok").onclick = function(){ c.remove(); try { localStorage.setItem(LS + "-coach", "1"); } catch(x){} };
  }
}

function posOf(c){
  if (c.general || !c.path || (c.page || "/") !== route()) return null;
  var el = resolvePath(c.path);
  if (el && visible(el)){ var r = el.getBoundingClientRect(); return { x: r.left + scrollX + c.rx * r.width, y: r.top + scrollY + c.ry * r.height }; }
  if (el) return null;
  return { x: c.px * document.documentElement.scrollWidth, y: c.py * document.documentElement.scrollHeight };
}
function clampX(x){ var w = document.documentElement.clientWidth; return Math.max(6, Math.min(x, scrollX + w - 32)); }
function layout(){
  if (!layer) return;
  layer.innerHTML = "";
  comments().forEach(function(c, i){
    var p = posOf(c); if (!p) return;
    var d = document.createElement("div"); d.className = "cm-pin cm-ui" + (c.sent || !c.mine ? "" : " pending");
    d.style.left = clampX(p.x) + "px"; d.style.top = p.y + "px"; d.textContent = i + 1; d.dataset.id = c.id; d.title = c.text;
    d.addEventListener("click", function(ev){ ev.stopPropagation(); openView(c, i + 1, p); });
    layer.appendChild(d);
  });
}
function render(){
  var list = comments(), here = route();
  $("#cm-count").textContent = list.length;
  var box = $("#cm-list"); box.innerHTML = "";
  if (!list.length) box.innerHTML = '<p class="note" style="padding:20px 4px">No comments yet. Close this panel, tap Add comment, then tap the spot your note is about.</p>';
  list.forEach(function(c, i){
    var it = document.createElement("div"); it.className = "cm-item" + ((c.page || "/") === here ? " here" : "");
    var when = new Date(c.ts || Date.now()).toLocaleString("en-ZA", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
    it.innerHTML = '<div class="h"><i></i><b></b><span></span></div><div class="pg"></div><p></p><div class="w"></div>';
    it.querySelector("i").textContent = c.general ? "G" : i + 1;
    it.querySelector("b").textContent = c.author || "Reviewer";
    it.querySelector("span").textContent = when + (c.mine && !c.sent ? ", saved on this device, sending..." : (c.mine ? ", sent to ACC" : ""));
    it.querySelector(".pg").textContent = "Page " + (c.page || "/") + ((c.page || "/") === here ? " (this page)" : "");
    it.querySelector("p").textContent = c.text;
    it.querySelector(".w").textContent = c.where || "";
    it.addEventListener("click", function(){ goTo(c); });
    box.appendChild(it);
  });
  layout();
}
function goTo(c){
  if ((c.page || "/") !== route()){ location.href = pageUrl(c.page || "/") + "#c=" + c.id; return; }
  closeDrawer();
  var el = resolvePath(c.path); if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  setTimeout(function(){ layout(); var pin = $('.cm-pin[data-id="' + c.id + '"]'); if (pin){ pin.classList.add("hl"); setTimeout(function(){ pin.classList.remove("hl"); }, 1600); } }, 700);
}

function isSheet(){ return document.documentElement.clientWidth <= 760; }
function closeBubble(){ if (bubble){ bubble.remove(); bubble = null; } if (tempPin){ tempPin.remove(); tempPin = null; } document.body.classList.remove("cm-editing"); }
function place(b, x, y){
  document.body.appendChild(b);
  if (isSheet() || b.classList.contains("cm-sheet")){ b.classList.add("cm-sheet"); fitSheet(); return; }
  var w = b.offsetWidth, vw = document.documentElement.clientWidth;
  var left = Math.min(Math.max(12 + scrollX, x - 24), scrollX + vw - w - 12);
  b.style.left = left + "px"; b.style.setProperty("--tail", Math.max(12, Math.min(w - 28, x - left - 8)) + "px");
  b.style.top = (y + 14) + "px";
}
/* keep the mobile sheet above the on-screen keyboard */
function fitSheet(){
  if (!bubble || !bubble.classList.contains("cm-sheet")) return;
  var vv = window.visualViewport, top = vv ? vv.offsetTop : 0, h = vv ? vv.height : innerHeight;
  var bh = bubble.offsetHeight, y = top + h - bh - 8;
  bubble.style.top = Math.max(top + 8, y) + "px";
  bubble.style.maxHeight = (h - 16) + "px";
}
if (window.visualViewport){ visualViewport.addEventListener("resize", fitSheet); visualViewport.addEventListener("scroll", fitSheet); }
function setArmed(on){
  armed = on; document.body.classList.toggle("cm-arm", on);
  var bn = $("#cm-banner"); if (bn) bn.hidden = !on;
  var a = $("#cm-add"); if (a) a.innerHTML = on ? "Cancel" : '<span aria-hidden="true">&#128172;</span> Add comment';
}
function editor(c, x, y, general){
  closeBubble(); setArmed(false);
  bubble = document.createElement("div"); bubble.className = "cm-bubble cm-ui" + (general ? " cm-sheet" : "");
  bubble.setAttribute("role", "dialog"); bubble.setAttribute("aria-label", "New comment");
  bubble.innerHTML = '<div class="h5"><span>' + (general ? "General comment" : "New comment #" + (comments().length + 1)) + '</span><span class="note">' + esc(general ? "page " + route() : "pinned where you tapped") + '</span></div>' +
    '<textarea placeholder="Type your comment, question or change here" aria-label="Your comment"></textarea>' +
    '<input type="text" maxlength="40" placeholder="Your name (optional)" autocomplete="name" aria-label="Your name">' +
    '<div class="b"><button type="button" class="cm-btn big" data-x>Cancel</button><button type="button" class="cm-btn p big" data-s>Save comment</button></div>';
  if (!general && x != null){ tempPin = document.createElement("div"); tempPin.className = "cm-pin cm-ui temp"; tempPin.textContent = "+"; tempPin.style.left = clampX(x) + "px"; tempPin.style.top = y + "px"; layer.appendChild(tempPin); }
  place(bubble, x || 0, y || 0);
  document.body.classList.add("cm-editing");
  var ta = bubble.querySelector("textarea"), nm = bubble.querySelector("input"); nm.value = author;
  try { ta.focus({ preventScroll: true }); } catch(x2){ ta.focus(); }   /* inside the tap handler, so mobile keyboards open */
  setTimeout(fitSheet, 50); setTimeout(fitSheet, 400);
  bubble.querySelector("[data-x]").onclick = function(){ closeBubble(); };
  bubble.querySelector("[data-s]").onclick = function(){
    var t = ta.value.trim(); if (!t){ ta.focus(); bubble.classList.add("shake"); setTimeout(function(){ bubble && bubble.classList.remove("shake"); }, 400); return; }
    author = nm.value.trim().slice(0, 40); try { localStorage.setItem(LS + "-name", author); } catch(x3){}
    c.text = t; c.author = author || "Reviewer"; c.ts = Date.now(); c.mine = true; c.sent = false;
    state.local[c.id] = 1; addEvent(c); save(); closeBubble(); render();
    toast("Saved. Sending to ACC...");
    send(c).then(function(ok){ toast(ok ? "Comment sent to ACC" : "Saved on this device. It will send when you are online."); });
  };
}
function device(){ var w = document.documentElement.clientWidth; return (/iPhone|iPad/.test(navigator.userAgent) ? "iOS" : /Android/.test(navigator.userAgent) ? "Android" : "desktop") + " " + w + "px"; }
function openNew(x, y, target){
  var el = blockOf(target) || document.body; var r = el.getBoundingClientRect();
  var c = { type: "comment", id: uid(), src: "site-preview", page: route(), path: pathOf(el),
    rx: r.width ? (x - scrollX - r.left) / r.width : 0, ry: r.height ? (y - scrollY - r.top) / r.height : 0,
    px: x / document.documentElement.scrollWidth, py: y / document.documentElement.scrollHeight, where: describe(el, target), dev: device() };
  editor(c, x, y, false);
}
function openGeneral(){
  editor({ type: "comment", id: uid(), src: "site-preview", page: route(), path: "", general: true, where: LABEL + " " + route() + ": general comment (no pin)", dev: device() }, null, null, true);
}
function openView(c, n, p){
  closeBubble();
  bubble = document.createElement("div"); bubble.className = "cm-bubble cm-view cm-ui";
  bubble.innerHTML = '<div class="h5"><span></span><span class="note"></span></div><p></p><div class="m"></div><div class="b"></div>';
  bubble.querySelector(".h5 span").textContent = "#" + n + " " + (c.author || "Reviewer");
  bubble.querySelector(".h5 .note").textContent = new Date(c.ts || Date.now()).toLocaleString("en-ZA", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
  bubble.querySelector("p").textContent = c.text;
  bubble.querySelector(".m").textContent = c.mine ? (c.sent ? "Sent to ACC" : "Saved on this device, sending...") : "";
  var bb = bubble.querySelector(".b");
  if (state.local[c.id]){ var del = document.createElement("button"); del.type = "button"; del.className = "cm-btn d big"; del.textContent = "Delete"; del.onclick = function(){
    var e = { type: "delete", id: c.id, ts: Date.now(), mine: true, sent: false }; addEvent(e); save(); closeBubble(); render(); send(e); }; bb.appendChild(del); }
  var cl = document.createElement("button"); cl.type = "button"; cl.className = "cm-btn big"; cl.textContent = "Close"; cl.onclick = closeBubble; bb.appendChild(cl);
  place(bubble, p.x, p.y);
}
var tt; function toast(m){ var t = $(".cm-toast"); if (!t){ t = document.createElement("div"); t.className = "cm-toast cm-ui"; t.setAttribute("role", "status"); document.body.appendChild(t); } t.textContent = m; t.style.display = "block"; clearTimeout(tt); tt = setTimeout(function(){ t.style.display = "none"; }, 2600); }

/* Placing a pin. Pointer events, not click: iOS Safari does not fire click on plain text, and in
   "Add comment" mode taps on links, buttons and header icons must place a pin instead of acting. */
var down = null, eatClick = 0;
function ours(t){ return t && t.closest && t.closest(".cm-ui,#cm-bar,#cm-drawer,.cm-coach,#cm-banner"); }
document.addEventListener("pointerdown", function(e){ down = { x: e.clientX, y: e.clientY, t: Date.now(), target: e.target }; }, true);
document.addEventListener("mousedown", function(e){ if ((armed || Date.now() - eatClick < 700) && !ours(e.target)) e.preventDefault(); }, true);
document.addEventListener("pointerup", function(e){
  var d = down; down = null;
  if (!d || ours(e.target) || ours(d.target)) return;
  var tap = Math.abs(e.clientX - d.x) < 10 && Math.abs(e.clientY - d.y) < 10 && Date.now() - d.t < 800;
  if (!tap) return;
  if (bubble && !armed){ eatClick = Date.now(); closeBubble(); return; }   /* tap outside closes an open note */
  if (!armed) return;
  eatClick = Date.now();
  openNew(e.clientX + scrollX, e.clientY + scrollY, d.target);
}, true);
document.addEventListener("touchend", function(e){ if (Date.now() - eatClick < 300 && !ours(e.target) && e.cancelable) e.preventDefault(); }, { capture: true, passive: false });
document.addEventListener("click", function(e){
  if (Date.now() - eatClick < 700 && !ours(e.target)){ e.preventDefault(); e.stopPropagation(); }
  else if (armed && !ours(e.target)){ e.preventDefault(); e.stopPropagation(); }
}, true);
document.addEventListener("keydown", function(e){ if (e.key === "Escape"){ closeBubble(); setArmed(false); } });

function openDrawer(){ closeBubble(); setArmed(false); render(); $("#cm-drawer").classList.add("open"); }
function closeDrawer(){ $("#cm-drawer").classList.remove("open"); }
function compile(){
  var lines = ["Clinotrend website preview: comments", pageUrl("/"), ""];
  comments().forEach(function(c, i){ lines.push((i + 1) + ". " + (c.author || "Reviewer") + " (page " + (c.page || "/") + "): " + c.text); if (c.where) lines.push("   At: " + c.where); lines.push(""); });
  return lines.join("\n");
}

function start(){
  ui();
  $("#cm-add").onclick = function(){ closeBubble(); setArmed(!armed); };
  $("#cm-arm-cancel").onclick = function(){ setArmed(false); };
  $("#cm-general").onclick = function(){ openGeneral(); };
  $("#cm-drawer-general").onclick = function(){ closeDrawer(); openGeneral(); };
  $("#cm-open").onclick = openDrawer;
  $("#cm-close").onclick = closeDrawer;
  $("#cm-send").onclick = function(){ flush(); toast("All comments are sent to ACC automatically."); };
  $("#cm-mail").onclick = function(){ var body = compile(); if (body.length > 1800){ try { navigator.clipboard.writeText(body); } catch(x){} body = body.slice(0, 1700) + "\n\n(More comments: full list copied, paste here.)"; }
    location.href = "mailto:ruben@acreationc.com?subject=" + encodeURIComponent("Clinotrend website preview comments") + "&body=" + encodeURIComponent(body); };
  setArmed(false);
  render(); flush(); sync();
  setInterval(function(){ if (!document.hidden) sync(); }, 45000);
  /* the site navigates client side, so watch the route and redraw pins for the new page */
  var last = route();
  setInterval(function(){ var r = route(); if (r !== last){ last = r; closeBubble(); setArmed(false); render(); } }, 400);
  window.addEventListener("online", flush);
  window.addEventListener("resize", function(){ layout(); fitSheet(); });   /* never close the note on resize: mobile keyboards resize the window */
  window.addEventListener("load", layout);
  if (window.ResizeObserver) new ResizeObserver(function(){ layout(); }).observe(document.body);
  var h = location.hash.match(/c=([\w]+)/); if (h) setTimeout(function(){ var c = comments().filter(function(x){ return x.id === h[1]; })[0]; if (c) goTo(c); }, 1800);
  window.__cm = { comments: comments, sync: sync, route: route, topic: TOPIC };
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();
})();
