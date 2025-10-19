/* style.css
   Dark, cinematic portfolio inspired by jasonarkles.com
   Drop into the repo root next to index.html
*/

/* quick scale tweak if you want all fonts slightly larger/smaller */
:root{
  --bg: #1c1c1c;
  --fg: #f2f2f2;
  --muted: #cccccc;
  --accent: #bfbfbf;
  --container: 1100px;
  --scale: 1; /* change to 1.02 or .98 to nudge entire typographic scale */
  --max-width: 1200px;
}

* {box-sizing: border-box;}
html,body {height:100%;}
body{
  margin:0;
  background:var(--bg);
  color:var(--fg);
  font-family: 'EB Garamond', serif;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  font-size: calc(18px * var(--scale));
  line-height:1.6;
}

/* container */
.container{
  width:90%;
  max-width:var(--container);
  margin:0 auto;
  padding:40px 0;
}

/* Header / Nav */
.site-header{
  position:fixed;
  top:0;
  left:0;
  right:0;
  z-index:999;
  backdrop-filter: none;
  background: linear-gradient(180deg, rgba(28,28,28,0.95), rgba(28,28,28,0.85));
  border-bottom: 1px solid rgba(255,255,255,0.03);
}

.nav{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:20px;
  padding:14px 0;
}

.logo{
  font-weight:800;
  letter-spacing:0.12em;
  text-decoration:none;
  color:var(--fg);
  font-size: calc(14px * var(--scale));
}

.nav-list{
  list-style:none;
  display:flex;
  gap:18px;
  margin:0;
  padding:0;
}

.nav-list a{
  color:var(--muted);
  text-decoration:none;
  font-size:calc(12px * var(--scale));
  letter-spacing:0.12em;
  text-transform:uppercase;
  display:inline-block;
  padding:6px 0;
  transition: color .15s ease;
}

.nav-list a:hover,
.nav-list a:focus{ color:var(--fg); outline:none; }

.nav-toggle{
  display:none;
  background:none;
  border:none;
  color:var(--fg);
  font-size:20px;
}

/* HERO */
.hero{
  padding-top:110px; /* space for fixed nav */
  padding-bottom:140px;
  display:grid;
  align-items:center;
  min-height:60vh;
}

.hero-inner{
  text-align:center;
}

.hero-title{
  margin:0;
  font-size: calc(64px * var(--scale)); /* big, like Jason Arkles */
  font-weight:800;
  letter-spacing:0.12em;
  color:#ffffff;
  line-height:1;
}

.hero-sub{
  margin-top:18px;
  color:var(--muted);
  font-size: calc(18px * var(--scale));
  max-width:760px;
  margin-left:auto;
  margin-right:auto;
}

/* Sections */
.section{
  padding-top:60px;
  padding-bottom:80px;
}

.section.small{
  padding-top:30px;
  padding-bottom:40px;
}

.section-title{
  margin:0 0 14px 0;
  font-size: calc(32px * var(--scale));
  color: #ffffff;
  font-weight:800;
  letter-spacing:0.06em;
}

.section-sub{
  margin:0 0 28px 0;
  color:var(--muted);
  font-size: calc(14px * var(--scale));
  max-width:760px;
}

/* Gallery grid */
.gallery-grid{
  display:grid;
  gap:18px;
  grid-template-columns: repeat(3, 1fr);
}

.thumb{
  background:transparent;
  border:1px solid rgba(255,255,255,0.03);
  padding:6px;
  display:flex;
  flex-direction:column;
  gap:8px;
}

.thumb img{
  width:100%;
  height:320px;
  object-fit:cover;
  display:block;
  cursor:pointer;
}

.thumb figcaption{
  color:var(--muted);
  font-size: calc(13px * var(--scale));
  padding:6px 2px;
}

/* Bio grid */
.bio-grid{
  display:grid;
  grid-template-columns: 360px 1fr;
  gap:40px;
  align-items:start;
}

.bio-image img{
  width:100%;
  height:auto;
  display:block;
  border:1px solid rgba(255,255,255,0.03);
}

.cv-title{
  margin-top:18px;
  font-size:calc(16px * var(--scale));
  color:var(--fg);
  font-weight:600;
}

.cv-list{
  margin:10px 0 0 0;
  padding-left:20px;
  color:var(--muted);
}

/* Contact */
.contact-section a{
  color:var(--accent);
  text-decoration:underline;
}

/* Footer */
.site-footer{
  border-top:1px solid rgba(255,255,255,0.03);
  padding:24px 0;
  text-align:center;
  color:var(--muted);
  font-size:calc(13px * var(--scale));
}

/* LIGHTBOX */
.lightbox{
  position:fixed;
  inset:0;
  display:none;
  align-items:center;
  justify-content:center;
  background:rgba(0,0,0,0.85);
  z-index:2000;
  padding:30px;
  flex-direction:column;
}

.lightbox img{
  max-width:90%;
  max-height:80vh;
  display:block;
  margin-bottom:12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.6);
}

.lightbox-caption{
  color:var(--muted);
  font-size:calc(14px * var(--scale));
}

.lightbox-close{
  position:absolute;
  top:18px;
  right:22px;
  background:none;
  border:none;
  color:var(--fg);
  font-size:22px;
  cursor:pointer;
}

/* Responsive */
@media (max-width: 980px){
  .gallery-grid{ grid-template-columns: repeat(2, 1fr); }
  .bio-grid{ grid-template-columns: 1fr; }
  .thumb img{ height:260px; }
  .nav-list{ display:none; }
  .nav-toggle{ display:block; }
}

@media (max-width:600px){
  .gallery-grid{ grid-template-columns: 1fr; }
  .hero-title{ font-size: calc(40px * var(--scale)); }
  body{ font-size: calc(16px * var(--scale)); }
}
