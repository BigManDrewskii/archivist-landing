/**
 * ASCII Hero Background Animation
 * Archeo — archeodev.netlify.app
 *
 * Drop-in: call initAsciiHeroBg(containerEl) or let it auto-attach to [data-ascii-bg].
 * Zero dependencies. ~3 KB minified. Uses a single <canvas>.
 */

(function (root, factory) {
  if (typeof module !== 'undefined' && module.exports) module.exports = factory();
  else root.initAsciiHeroBg = factory();
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {

  /* ─── tunables ────────────────────────────────────────────────────── */
  const CFG = {
    fontFamily : 'JetBrains Mono, Fira Code, monospace',
    fontSize   : 13,           // px — char cell size
    lineHeight : 1.55,
    fps        : 30,

    // colour palette (matches Archeo's CSS vars)
    bgColor    : '#090909',
    amberHex   : '#eab308',    // --amber
    dimHex     : '#3c3c3c',    // --tx-ghost (faint grid)

    // layers
    gridOpacity   : 0.28,      // static faint ASCII grid
    streamCount   : 22,        // falling data-streams
    glitchOpacity : 0.55,      // highlighted glitch chars
    scanlineAlpha : 0.03,      // subtle scanlines
  };
  /* ────────────────────────────────────────────────────────────────── */

  const CHARS = {
    grid   : '·∙░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌',
    stream : '0123456789ABCDEF <>{}[]|/\\-_=+*#@$%&?!abcdefghijklmnopqrstuvwxyz',
    glitch : '▓▒░█▄▀■□▪▫◆◇○●',
  };

  function rndChar(set) {
    return set[Math.floor(Math.random() * set.length)];
  }
  function hexAlpha(hex, a) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${a})`;
  }
  function lerp(a, b, t) { return a + (b - a) * t; }

  /* ─── stream object ───────────────────────────────────────────────── */
  function makeStream(cols, rows) {
    const col    = Math.floor(Math.random() * cols);
    const speed  = lerp(0.12, 0.45, Math.random()); // cols/frame
    const length = Math.floor(lerp(6, 22, Math.random()));
    return {
      col,
      y      : -length * CFG.fontSize * CFG.lineHeight * Math.random(),
      speed,
      length,
      chars  : Array.from({ length }, () => rndChar(CHARS.stream)),
      mutate : 0,       // frame counter for char mutation
      // amber brightness: head bright, tail dims
      alpha  : lerp(0.55, 0.95, Math.random()),
    };
  }

  /* ─── main init ───────────────────────────────────────────────────── */
  return function initAsciiHeroBg(container) {
    if (!container) {
      container = document.querySelector('[data-ascii-bg]');
    }
    if (!container) {
      console.warn('[ascii-hero-bg] no container found');
      return;
    }

    /* canvas setup */
    const canvas = document.createElement('canvas');
    Object.assign(canvas.style, {
      position   : 'absolute',
      inset      : '0',
      width      : '100%',
      height     : '100%',
      pointerEvents: 'none',
      zIndex     : '0',
      display    : 'block',
    });
    if (getComputedStyle(container).position === 'static') {
      container.style.position = 'relative';
    }
    container.prepend(canvas);

    const ctx = canvas.getContext('2d');
    let W, H, cols, rows;
    let cellW, cellH;
    let gridCells = [];   // [{char, alpha}]
    let streams   = [];
    let raf, lastT = 0;

    /* ── resize ── */
    function resize() {
      const dpr = window.devicePixelRatio || 1;
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width  = W * dpr;
      canvas.height = H * dpr;
      ctx.scale(dpr, dpr);

      ctx.font = `${CFG.fontSize}px ${CFG.fontFamily}`;
      const m  = ctx.measureText('M');
      cellW    = m.width;
      cellH    = CFG.fontSize * CFG.lineHeight;
      cols     = Math.ceil(W / cellW) + 1;
      rows     = Math.ceil(H / cellH) + 1;

      // regenerate static grid
      gridCells = Array.from({ length: cols * rows }, () => ({
        char  : rndChar(CHARS.grid),
        alpha : lerp(0.04, 0.14, Math.random()),
        tick  : Math.floor(Math.random() * 200),   // stagger refresh
      }));

      // reset streams
      streams = Array.from({ length: CFG.streamCount }, () => makeStream(cols, rows));
    }

    /* ── draw ── */
    function draw(ts) {
      const dt = Math.min((ts - lastT) / (1000 / CFG.fps), 3);
      lastT = ts;

      /* clear */
      ctx.clearRect(0, 0, W, H);

      /* optional: bg fill (transparent so hero CSS bg shows through) */
      // ctx.fillStyle = CFG.bgColor;
      // ctx.fillRect(0, 0, W, H);

      ctx.font = `${CFG.fontSize}px ${CFG.fontFamily}`;
      ctx.textBaseline = 'top';

      /* ── layer 1: static grid ── */
      for (let i = 0; i < gridCells.length; i++) {
        const cell = gridCells[i];
        cell.tick++;
        if (cell.tick > 180 + Math.floor(Math.random() * 120)) {
          cell.char  = rndChar(CHARS.grid);
          cell.alpha = lerp(0.03, 0.13, Math.random());
          cell.tick  = 0;
        }
        const cx = (i % cols) * cellW;
        const cy = Math.floor(i / cols) * cellH;
        ctx.fillStyle = hexAlpha(CFG.dimHex, cell.alpha * CFG.gridOpacity);
        ctx.fillText(cell.char, cx, cy);
      }

      /* ── layer 2: falling streams ── */
      for (let s = 0; s < streams.length; s++) {
        const st = streams[s];
        st.y += st.speed * dt * cellH;
        st.mutate++;

        // occasionally mutate a random char in the stream
        if (st.mutate % 4 === 0) {
          const idx = Math.floor(Math.random() * st.chars.length);
          st.chars[idx] = rndChar(CHARS.stream);
        }

        const x = st.col * cellW;

        for (let j = 0; j < st.length; j++) {
          const y = st.y - j * cellH;
          if (y < -cellH || y > H + cellH) continue;

          const t = 1 - j / st.length;         // 1 = head, 0 = tail
          let alpha;
          if (j === 0) {
            // head: bright white/amber flash
            alpha = st.alpha;
            ctx.fillStyle = hexAlpha('#ffffff', alpha * 0.9);
          } else {
            // body: amber, fading tail
            alpha = st.alpha * Math.pow(t, 1.6);
            ctx.fillStyle = hexAlpha(CFG.amberHex, alpha * CFG.glitchOpacity);
          }
          ctx.fillText(st.chars[j], x, y);
        }

        // respawn when fully off screen
        if (st.y - st.length * cellH > H) {
          streams[s] = makeStream(cols, rows);
          streams[s].y = -streams[s].length * cellH;
        }
      }

      /* ── layer 3: scanlines ── */
      for (let y = 0; y < H; y += 3) {
        ctx.fillStyle = `rgba(0,0,0,${CFG.scanlineAlpha})`;
        ctx.fillRect(0, y, W, 1);
      }

      /* ── layer 4: vignette ── */
      const vg = ctx.createRadialGradient(W / 2, H / 2, H * 0.3, W / 2, H / 2, H * 0.9);
      vg.addColorStop(0, 'rgba(0,0,0,0)');
      vg.addColorStop(1, 'rgba(0,0,0,0.45)');
      ctx.fillStyle = vg;
      ctx.fillRect(0, 0, W, H);

      raf = requestAnimationFrame(draw);
    }

    /* ── boot ── */
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);
    raf = requestAnimationFrame(draw);

    /* ── cleanup ── */
    return function destroy() {
      cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.remove();
    };
  };
});
