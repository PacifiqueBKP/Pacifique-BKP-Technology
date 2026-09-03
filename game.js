      <!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>PACIFIQUE_BKP TECHNOLOGY | Agence Digitale Goma</title>
<meta name="description" content="Sites web, Applis, Formation bureautique, Dépannage & Réseaux à Goma - RDC">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800&family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
<style>
:root{--bg:#060E20;--card:#101E3A;--gold:#FFC600;--white:#fff;--light:#9FB2D1}
*{margin:0;padding:0;box-sizing:border-box}
body{background:var(--bg);color:var(--white);font-family:'Inter',sans-serif;line-height:1.6}
header{background:var(--gold);color:#060E20;padding:18px 5%;display:flex;justify-content:space-between;align-items:center;font-family:'Montserrat',sans-serif;font-weight:800}
.hero{padding:80px 5% 40px;display:flex;flex-wrap:wrap;gap:40px;align-items:center}
.hero h1{font-family:'Montserrat';font-size:62px;line-height:0.9;font-weight:800}
.hero h1 span{color:var(--gold)}
.hero p{color:var(--light);font-size:18px;max-width:520px;margin:20px 0}
.btn{background:var(--gold);color:#060E20;padding:16px 32px;border-radius:40px;font-weight:700;text-decoration:none;display:inline-block;transition:0.3s}
.btn:hover{transform:scale(1.05)}
.grid{padding:40px 5%;display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px}
.card{background:var(--card);border:1px solid #1E335E;border-radius:20px;padding:28px;transition:0.3s}
.card:hover{border-color:var(--gold);transform:translateY(-5px)}
.card h3{color:var(--gold);font-family:'Montserrat';font-size:22px;margin:12px 0 8px}
.badge{background:var(--gold);color:#060E20;padding:4px 12px;border-radius:20px;font-size:11px;font-weight:700}
.testi{background:var(--gold);color:#060E20;padding:35px 5%;margin:30px 5%;border-radius:20px}
footer{background:#020814;padding:30px 5%;border-top:3px solid var(--gold);display:flex;justify-content:space-between;flex-wrap:wrap;gap:20px}
@media(max-width:768px){.hero h1{font-size:42px}}
</style>
</head>
<body>

<header>
<div>BKP TECHNOLOGY</div>
<div>Goma, RDC | +243 976 717 995</div>
</header>

<section class="hero">
<div>
<h1>VOTRE IDEE.<br>DEVIENT<br><span>REALITE.</span></h1>
<p>Nous codons. Vous brillez. Agence digitale & formation pro à Goma.<br>Sites web, applis, bureautique, dépannage - on gère tout.</p>
<a class="btn" href="https://wa.me/243976717995?text=Bonjour%20BKP%20Technology%2C%20j'ai%20vu%20votre%20site%20!">Discuter sur WhatsApp →</a>
<p style="margin-top:20px;font-size:13px;color:var(--light)">Déjà 100+ clients à Kyeshero, Centre_Ville, La Sapientia, Birere, Himbi, Katoyi, ULPGL</p>
</div>
<div style="flex:1;min-width:300px;background:var(--card);border:2px solid var(--gold);border-radius:20px;padding:25px">
<h3 style="color:var(--gold)">CE QUE LES GENS AIMENT :</h3>
<p style="margin:12px 0">✓ Sites web qui attirent des clients</p>
<p style="margin:12px 0">✓ Formation bureautique en 7 jours chrono</p>
<p style="margin:12px 0">✓ Dépannage express - PC lent, virus</p>
<p style="margin:12px 0">✓ Coaching perso - même de zéro</p>
</div>
</section>

<div class="grid">
<div class="card"><span class="badge">CODE</span><h3>Création d'Applications</h3><p>Sites vitrines, e-commerce, applis mobiles et logiciels sur mesure qui vendent vraiment.</p></div>
<div class="card"><span class="badge">FORME</span><h3>Formation Bureautique Pro</h3><p>Windows, Word, Excel, PowerPoint, Internet, etc. Débutant à avancé, avec attestation. 7 jours pour devenir autonome.</p></div>
<div class="card"><span class="badge">BOOST</span><h3>Maintenance & Réseaux</h3><p>PC lents, virus, installation OS, Wifi & réseau local sécurisé pour maison et bureau.</p></div>
</div>

<div class="testi">
<h2 style="font-family:Montserrat">Pourquoi Goma nous fait confiance ?</h2>
<p style="margin-top:12px;font-weight:600">"Il m'a formé en Excel, maintenant je gère mon shop seul !" - Cliente Birere</p>
<p style="margin-top:6px;font-weight:600">"Mon site a doublé mes commandes en 1 mois" - Client Himbi</p>
<p style="margin-top:6px;font-weight:600">"Rapide, honnête, au bon prix . C'est vraiment rare !" - Étudiants ULPGL , UCS , ISIG, ISC ... </p>
<p style="margin-top:15px;font-size:14px">Pour le client est notre priorité </p>
</div>

<footer>
<div><strong style="color:var(--gold)">PACIFIQUE_BKP TECHNOLOGY</strong><br>Goma, Nord-Kivu - Déplacement possible - Lun-Sam 8h-18h<br>pacifiquekakuru6@gmail.com<br>TikTok / Facebook / Instagram : @pacifique_bkp</div>
<div style="text-align:right"><div style="font-size:36px;font-weight:800;color:var(--gold)">BKP</div><div>TECH - GOMA</div></div>
</footer>

</body>
</html>// game.js — state, game loop, resize, and boot
// draw() is defined in render.js; input listeners are set up in input.js

var COLS = 20;
var ROWS = 20;
var FPS  = 9;
var CELL; // pixels per cell, computed in resize()

// ── State ─────────────────────────────────────────────────────────────────

var snake, dir, nextDir, food, score, best, phase, loopTimer;
// phase: 'idle' | 'running' | 'dead'

function init() {
  snake   = [{ x: 10, y: 10 }, { x: 9, y: 10 }, { x: 8, y: 10 }];
  dir     = { x: 1, y: 0 };
  nextDir = { x: 1, y: 0 };
  score   = 0;
  placeFood();
}

function placeFood() {
  do {
    food = { x: Math.floor(Math.random() * COLS), y: Math.floor(Math.random() * ROWS) };
  } while (snake.some(function(s) { return s.x === food.x && s.y === food.y; }));
}

function start() {
  if (loopTimer) clearInterval(loopTimer);
  init();
  phase     = 'running';
  loopTimer = setInterval(tick, 1000 / FPS);
}

// ── Game loop ──────────────────────────────────────────────────────────────

function tick() {
  dir = nextDir;

  var head = { x: (snake[0].x + dir.x + COLS) % COLS,
               y: (snake[0].y + dir.y + ROWS) % ROWS };

  if (snake.some(function(s) { return s.x === head.x && s.y === head.y; })) {
    phase = 'dead';
    best  = Math.max(best, score);
    clearInterval(loopTimer);
    draw();
    return;
  }

  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    score++;
    placeFood();
  } else {
    snake.pop();
  }

  draw();
}

// ── Resize ────────────────────────────────────────────────────────────────

function resize() {
  var size  = Math.min(window.innerWidth, window.innerHeight);
  CELL      = Math.floor(size / COLS);
  var px    = CELL * COLS;
  canvas.width  = px;
  canvas.height = px;
  draw();
}

window.addEventListener('resize', resize);

// ── Boot ──────────────────────────────────────────────────────────────────

best  = 0;
phase = 'idle';
init();
resize();
