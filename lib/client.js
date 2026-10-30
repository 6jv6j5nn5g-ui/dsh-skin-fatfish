window.__ModuleLoader__.load({
	id: "dsh-skin-fatfish",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		const PKG = "dsh-skin-fatfish";
		const CSS_TAG = "dsh-skin-fatfish/skin.css";
		const TOKENS = {
		"--dsw-alias-bg-base": {
				"light": "#eff5fa",
				"dark": "#060b12"
		},
		"--dsw-alias-bg-layer-1": {
				"light": "#f7fbfd",
				"dark": "#0a1118"
		},
		"--dsw-alias-bg-layer-2": {
				"light": "#ffffff",
				"dark": "#0d151d"
		},
		"--dsw-alias-bg-layer-3": {
				"light": "#ffffff",
				"dark": "#111a23"
		},
		"--dsw-alias-bg-overlay": {
				"light": "#dfeaf3",
				"dark": "#16212b"
		},
		"--dsw-alias-bg-module-platform": {
				"light": "#e7f0f7",
				"dark": "#0b131b"
		},
		"--dsw-alias-bg-multi-select": {
				"light": "#e2edf5",
				"dark": "#12202b"
		},
		"--dsw-alias-bg-document-preview": {
				"light": "#eaf3f9",
				"dark": "#080e15"
		},
		"--dsw-alias-bg-skeleton": {
				"light": "rgba(38,66,90,.07)",
				"dark": "rgba(160,200,230,.06)"
		},
		"--dsw-alias-bg-document-selection": {
				"light": "rgba(63,123,166,.30)",
				"dark": "rgba(140,190,220,.32)"
		},
		"--dsw-alias-border-l1": {
				"light": "rgba(38,66,90,.10)",
				"dark": "rgba(150,190,220,.10)"
		},
		"--dsw-alias-border-l2": {
				"light": "rgba(38,66,90,.15)",
				"dark": "rgba(150,190,220,.14)"
		},
		"--dsw-alias-border-l3": {
				"light": "rgba(38,66,90,.20)",
				"dark": "rgba(150,190,220,.18)"
		},
		"--dsw-alias-border-l4": {
				"light": "rgba(38,66,90,.27)",
				"dark": "rgba(150,190,220,.24)"
		},
		"--dsw-alias-border-l2-darkmode-thin": {
				"light": "rgba(38,66,90,.13)",
				"dark": "rgba(150,190,220,.12)"
		},
		"--dsw-alias-label-primary": {
				"light": "#20303d",
				"dark": "#eef8ff"
		},
		"--dsw-alias-label-primary-bluish": {
				"light": "#1e3040",
				"dark": "#dceefb"
		},
		"--dsw-alias-label-primary-dimmed": {
				"light": "#2f4152",
				"dark": "#cfe4f3"
		},
		"--dsw-alias-label-secondary": {
				"light": "#4c5f70",
				"dark": "#a7c1d4"
		},
		"--dsw-alias-label-tertiary": {
				"light": "#6f8394",
				"dark": "#7b96ab"
		},
		"--dsw-alias-label-caption": {
				"light": "#92a4b3",
				"dark": "#5d7488"
		},
		"--dsw-alias-label-dimmed": {
				"light": "#dbe7f0",
				"dark": "#22303c"
		},
		"--dsw-alias-label-primary-inverted": {
				"light": "#ffffff",
				"dark": "#060b12"
		},
		"--dsw-alias-label-primary-foreground": {
				"light": "#ffffff",
				"dark": "#060b12"
		},
		"--dsw-alias-link": {
				"light": "#2f6f9e",
				"dark": "#8fc4e4"
		},
		"--dsw-alias-brand-primary": {
				"light": "#20303d",
				"dark": "#eef8ff"
		},
		"--dsw-alias-brand-primary-invert": {
				"light": "#ffffff",
				"dark": "#060b12"
		},
		"--dsw-alias-brand-text": {
				"light": "#20303d",
				"dark": "#eef8ff"
		},
		"--dsw-alias-button-primary-fill": {
				"light": "#2f4a5f",
				"dark": "#dceaf4"
		},
		"--dsw-alias-button-primary-hover": {
				"light": "#22394a",
				"dark": "#c6dcea"
		},
		"--dsw-alias-button-primary-dimmed": {
				"light": "#dfeaf2",
				"dark": "#131f29"
		},
		"--dsw-alias-button-contrast-fill": {
				"light": "#54697a",
				"dark": "#c0d4e2"
		},
		"--dsw-alias-button-elevated-fill": {
				"light": "#ffffff",
				"dark": "#0d151d"
		},
		"--dsw-alias-button-floating-fill": {
				"light": "#ffffff",
				"dark": "#0d151d"
		},
		"--dsw-alias-button-floating-hover": {
				"light": "#eaf3f9",
				"dark": "#141f29"
		},
		"--dsw-alias-button-ghost-active-fill": {
				"light": "#ddeaf3",
				"dark": "#12202b"
		},
		"--dsw-alias-button-ghost-active-border": {
				"light": "#a2b6c6",
				"dark": "#40606f"
		},
		"--dsw-alias-button-ghost-active-hover": {
				"light": "#d3e4ef",
				"dark": "#182834"
		},
		"--dsw-alias-interactive-bg-hover": {
				"light": "rgba(38,66,90,.06)",
				"dark": "rgba(150,200,230,.07)"
		},
		"--dsw-alias-interactive-bg-hover-accent": {
				"light": "rgba(38,66,90,.10)",
				"dark": "rgba(150,200,230,.12)"
		},
		"--dsw-alias-interactive-bg-active": {
				"light": "rgba(38,66,90,.12)",
				"dark": "rgba(150,200,230,.14)"
		},
		"--dsw-alias-interactive-bg-hover-solid": {
				"light": "#e7f0f7",
				"dark": "#131f29"
		},
		"--dsw-alias-markdown-code-block": {
				"light": "#eaf3f9",
				"dark": "#0a121a"
		},
		"--dsw-alias-markdown-code-block-banner": {
				"light": "#e0edf6",
				"dark": "#0d1822"
		},
		"--dsw-alias-markdown-inline-code": {
				"light": "#e6f0f7",
				"dark": "#0c1620"
		},
		"--dsw-alias-markdown-placeholder": {
				"light": "rgba(38,66,90,.08)",
				"dark": "rgba(150,200,230,.07)"
		},
		"--dsw-alias-markdown-citation": {
				"light": "#e8f1f8",
				"dark": "#0e1a24"
		},
		"--dsw-alias-markdown-tag": {
				"light": "#e2edf5",
				"dark": "#12202b"
		},
		"--dsw-alias-specific-sidebar-fill": {
				"light": "#e8f1f8",
				"dark": "#040a10"
		},
		"--dsw-alias-specific-sidebar-nav-item-active": {
				"light": "#d9e8f3",
				"dark": "#101c26"
		},
		"--dsw-alias-specific-sidebar-nav-item-active-accent": {
				"light": "#c89563",
				"dark": "#d5a06d"
		},
		"--dsw-alias-specific-sidebar-nav-item-hover": {
				"light": "rgba(38,66,90,.06)",
				"dark": "rgba(150,200,230,.05)"
		},
		"--dsw-alias-specific-bubble": {
				"light": "#dfecf6",
				"dark": "#0f1b25"
		},
		"--dsw-alias-specific-bubble-highlight": {
				"light": "#d2e3f0",
				"dark": "#16242f"
		},
		"--dsw-alias-specific-input-major": {
				"light": "#ffffff",
				"dark": "#0d151d"
		},
		"--dsw-alias-specific-login-input": {
				"light": "#ffffff",
				"dark": "#0d151d"
		},
		"--dsw-alias-specific-selector": {
				"light": "#ffffff",
				"dark": "#0d151d"
		},
		"--dsw-alias-specific-menu": {
				"light": "#ffffff",
				"dark": "#0d151d"
		},
		"--dsw-alias-specific-tip": {
				"light": "#e8f1f8",
				"dark": "#0a141c"
		},
		"--dsw-alias-state-business-primary": {
				"light": "#3f7ba6",
				"dark": "#6fb3d8"
		},
		"--dsw-alias-state-business-tertiary": {
				"light": "#dfecf5",
				"dark": "#122230"
		},
		"--dsw-alias-tooltip-bg": {
				"light": "#20303d",
				"dark": "#0d151d"
		},
		"--dsw-alias-tooltip-key-bg": {
				"light": "#33485a",
				"dark": "#22333f"
		},
		"--dsw-alias-toast-bg": {
				"light": "#20303d",
				"dark": "#0d151d"
		},
		"--dsw-alias-toast-label": {
				"light": "#eef5fa",
				"dark": "#eef8ff"
		},
		"--dsw-alias-menu-group-header-fill": {
				"light": "rgba(239,245,250,.94)",
				"dark": "rgba(6,11,18,.94)"
		},
		"--dsw-alias-menu-surface-fill": {
				"light": "rgba(255,255,255,.92)",
				"dark": "rgba(13,21,29,.92)"
		},
		"--dsw-alias-menu-icon": {
				"light": "#4c5f70",
				"dark": "#a7c1d4"
		},
		"--dsw-alias-switch-thumb": {
				"light": "#ffffff",
				"dark": "#cfe4f3"
		},
		"--dsw-alias-settings-card-fill": {
				"light": "#ffffff",
				"dark": "#0a1118"
		},
		"--dsw-alias-settings-card-stroke": {
				"light": "rgba(38,66,90,.14)",
				"dark": "rgba(150,190,220,.12)"
		},
		"--dsw-alias-scrollbar-bg-l1": {
				"light": "rgba(38,66,90,.22)",
				"dark": "rgba(160,200,230,.16)"
		},
		"--dsw-alias-scrollbar-hover-l1": {
				"light": "rgba(38,66,90,.38)",
				"dark": "rgba(160,200,230,.30)"
		},
		"--dsw-alias-scrollbar-bg-l2": {
				"light": "rgba(38,66,90,.18)",
				"dark": "rgba(160,200,230,.13)"
		},
		"--dsw-alias-scrollbar-hover-l2": {
				"light": "rgba(38,66,90,.30)",
				"dark": "rgba(160,200,230,.26)"
		}
};
		const SKIN_CSS = "/* ============================================================================\n * 霜雪大肥鱼 skin — decoration layer\n * Only viewport-level chrome: the palette itself rides the theme tokens.\n * ========================================================================== */\n\n.ff-skin {\n  position: fixed;\n  inset: 0;\n  z-index: 2147483000;\n  overflow: hidden;\n  pointer-events: none;\n  user-select: none;\n  -webkit-user-select: none;\n}\n\n/* warm lamp in the upper-right — the one warm note of the wallpaper */\n.ff-skin .ff-glow {\n  position: absolute;\n  top: -210px;\n  right: -190px;\n  width: 820px;\n  height: 820px;\n  border-radius: 50%;\n  background: radial-gradient(circle at 50% 50%,\n      rgba(246, 216, 178, 0.24),\n      rgba(246, 216, 178, 0.08) 44%,\n      rgba(246, 216, 178, 0) 70%);\n  animation: ff-lamp 19s ease-in-out infinite alternate;\n  transform-origin: 60% 40%;\n  will-change: transform, opacity;\n}\nbody[data-ds-dark-theme] .ff-skin .ff-glow {\n  background: radial-gradient(circle at 50% 50%,\n      rgba(246, 206, 160, 0.18),\n      rgba(246, 206, 160, 0.06) 46%,\n      rgba(246, 206, 160, 0) 72%);\n}\n@keyframes ff-lamp {\n  0% {\n    transform: scale(1);\n    opacity: 0.9;\n  }\n  100% {\n    transform: scale(1.06);\n    opacity: 1;\n  }\n}\n\n/* 底部一层很淡的冷光，像窗台上积的雪 */\n.ff-skin .ff-sill {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 58px;\n  background: linear-gradient(\n    180deg,\n    rgba(150, 190, 220, 0) 0%,\n    rgba(150, 190, 220, 0.04) 58%,\n    rgba(150, 190, 220, 0.09) 100%\n  );\n  filter: blur(6px);\n}\nbody[data-ds-dark-theme] .ff-skin .ff-sill {\n  background: linear-gradient(\n    180deg,\n    rgba(190, 215, 235, 0) 0%,\n    rgba(190, 215, 235, 0.03) 58%,\n    rgba(190, 215, 235, 0.07) 100%\n  );\n}\n\n/* frost creeping in from the window edges */\n.ff-skin .ff-frost {\n  position: absolute;\n  inset: 0;\n  box-shadow:\n    inset 0 0 90px 8px rgba(148, 184, 212, 0.10),\n    inset 0 0 300px 60px rgba(178, 206, 227, 0.07);\n}\nbody[data-ds-dark-theme] .ff-skin .ff-frost {\n  box-shadow:\n    inset 0 0 110px 12px rgba(6, 12, 18, 0.40),\n    inset 0 0 320px 70px rgba(10, 18, 26, 0.22);\n}\n\n/* falling snow */\n.ff-skin .ff-flakes {\n  position: absolute;\n  inset: 0;\n  transform: translate3d(var(--px, 0px), var(--py, 0px), 0);\n  transition: transform 0.9s cubic-bezier(0.2, 0.7, 0.3, 1);\n}\n.ff-skin .ff-flakes i {\n  position: absolute;\n  top: 0;\n  left: var(--x);\n  width: var(--s);\n  height: var(--s);\n  border-radius: 50%;\n  background: radial-gradient(circle at 38% 34%,\n      #ffffff 0%,\n      rgba(238, 247, 255, 0.96) 44%,\n      rgba(198, 222, 242, 0.55) 62%,\n      rgba(198, 222, 242, 0) 78%);\n  box-shadow: 0 0 4px rgba(150, 182, 208, 0.5);\n  opacity: var(--o);\n  animation: ff-fall var(--d) linear var(--delay) infinite;\n  will-change: transform;\n}\nbody:not([data-ds-dark-theme]) .ff-skin .ff-flakes i {\n  background: radial-gradient(circle at 38% 34%,\n      #ffffff 0%,\n      rgba(170, 200, 222, 0.96) 42%,\n      rgba(140, 175, 202, 0.5) 60%,\n      rgba(140, 175, 202, 0) 78%);\n  box-shadow: 0 0 3px rgba(110, 148, 178, 0.5);\n}\nbody[data-ds-dark-theme] .ff-skin .ff-flakes i {\n  opacity: calc(var(--o) * 0.9);\n}\n\n@keyframes ff-fall {\n  0% {\n    transform: translate3d(0, -12vh, 0) scale(0.85);\n  }\n  50% {\n    transform: translate3d(var(--sway), 50vh, 0) scale(1);\n  }\n  100% {\n    transform: translate3d(0, 112vh, 0) scale(0.9);\n  }\n}\n\n/* ============================================================================\n * 动效层：极光 / 跟随柔光 / 冷启动的一次扫光\n * 语言取自「霜雪协议」：冷白、缓慢、克制，不做全屏接管\n * ========================================================================== */\n\n.ff-skin .ff-aurora {\n  position: absolute;\n  left: -12%;\n  right: -12%;\n  top: -20vh;\n  height: 48vh;\n  background: linear-gradient(\n    100deg,\n    rgba(150, 190, 225, 0) 0%,\n    rgba(150, 190, 225, 0.07) 26%,\n    rgba(236, 206, 168, 0.07) 52%,\n    rgba(150, 190, 225, 0.05) 74%,\n    rgba(150, 190, 225, 0) 100%\n  );\n  filter: blur(52px);\n  animation: ff-aurora 42s ease-in-out infinite alternate;\n  will-change: transform;\n}\nbody[data-ds-dark-theme] .ff-skin .ff-aurora {\n  background: linear-gradient(\n    100deg,\n    rgba(120, 170, 215, 0) 0%,\n    rgba(120, 170, 215, 0.09) 26%,\n    rgba(226, 190, 150, 0.06) 52%,\n    rgba(120, 170, 215, 0.08) 74%,\n    rgba(120, 170, 215, 0) 100%\n  );\n}\n@keyframes ff-aurora {\n  0% {\n    transform: translate3d(-3%, 0, 0) scaleY(1);\n  }\n  100% {\n    transform: translate3d(3%, 2%, 0) scaleY(1.14);\n  }\n}\n\n/* 跟着指针走的柔光 */\n.ff-skin .ff-cursor {\n  position: absolute;\n  inset: 0;\n  background: radial-gradient(\n    520px circle at var(--mx, 50%) var(--my, 38%),\n    rgba(255, 238, 214, 0.07),\n    rgba(255, 238, 214, 0) 62%\n  );\n}\nbody[data-ds-dark-theme] .ff-skin .ff-cursor {\n  background: radial-gradient(\n    560px circle at var(--mx, 50%) var(--my, 38%),\n    rgba(130, 190, 235, 0.1),\n    rgba(130, 190, 235, 0) 62%\n  );\n}\n\n/* 冷启动：一次自上而下的扫光 + 标识，1.5s 后自毁 */\n.ff-skin .ff-boot {\n  position: absolute;\n  inset: 0;\n  transition: opacity 0.85s ease;\n}\n.ff-skin.ff-boot-done .ff-boot {\n  opacity: 0;\n}\n.ff-skin .ff-boot-band {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: -28vh;\n  height: 28vh;\n  background: linear-gradient(\n    180deg,\n    rgba(170, 205, 235, 0) 0%,\n    rgba(170, 205, 235, 0.08) 62%,\n    rgba(170, 205, 235, 0.2) 94%,\n    rgba(170, 205, 235, 0) 100%\n  );\n  animation: ff-sweep 1.5s cubic-bezier(0.4, 0, 0.2, 1) 0.05s 1 both;\n}\n@keyframes ff-sweep {\n  0% {\n    transform: translateY(0);\n    opacity: 0;\n  }\n  15% {\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(132vh);\n    opacity: 0.35;\n  }\n}\n.ff-skin .ff-boot-cap {\n  position: absolute;\n  left: 50%;\n  top: 43%;\n  transform: translate(-50%, 0);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 30px 60px;\n  animation: ff-cap 2s ease both;\n}\n.ff-skin .ff-boot-cap::before {\n  content: \"\";\n  position: absolute;\n  inset: -40px -90px;\n  z-index: -1;\n  background: radial-gradient(\n    ellipse at center,\n    rgba(246, 249, 252, 0.92) 0%,\n    rgba(246, 249, 252, 0.72) 42%,\n    rgba(246, 249, 252, 0) 72%\n  );\n  filter: blur(18px);\n}\nbody[data-ds-dark-theme] .ff-skin .ff-boot-cap::before {\n  background: radial-gradient(\n    ellipse at center,\n    rgba(10, 16, 22, 0.86) 0%,\n    rgba(10, 16, 22, 0.6) 42%,\n    rgba(10, 16, 22, 0) 72%\n  );\n}\n.ff-skin .ff-boot-cap span {\n  font: 11px/1 \"Segoe UI\", system-ui, sans-serif;\n  letter-spacing: 0.44em;\n  color: rgba(70, 100, 125, 0.72);\n}\n.ff-skin .ff-boot-cap b {\n  font: 600 22px/1.2 \"Microsoft YaHei UI\", \"Segoe UI\", sans-serif;\n  letter-spacing: 0.34em;\n  color: rgba(32, 52, 72, 0.86);\n}\n.ff-skin .ff-boot-cap i {\n  font: 10px/1 \"Segoe UI\", system-ui, sans-serif;\n  font-style: normal;\n  letter-spacing: 0.4em;\n  color: rgba(70, 100, 125, 0.52);\n}\n.ff-skin .ff-boot-cap u {\n  margin-top: 10px;\n  font: 9px/1 \"Segoe UI\", system-ui, sans-serif;\n  letter-spacing: 0.28em;\n  text-decoration: none;\n  color: rgba(70, 100, 125, 0.34);\n}\nbody[data-ds-dark-theme] .ff-skin .ff-boot-cap u {\n  color: rgba(180, 208, 228, 0.32);\n}\n.ff-skin .ff-boot-cap::after {\n  content: \"\";\n  width: 168px;\n  height: 1px;\n  margin-top: 6px;\n  background: linear-gradient(\n    90deg,\n    rgba(70, 100, 125, 0) 0%,\n    rgba(70, 100, 125, 0.45) 50%,\n    rgba(70, 100, 125, 0) 100%\n  );\n  animation: ff-cap-line 1.8s cubic-bezier(0.2, 0.7, 0.3, 1) 0.15s both;\n}\n@keyframes ff-cap-line {\n  0% {\n    transform: scaleX(0.1);\n    opacity: 0;\n  }\n  40% {\n    transform: scaleX(1);\n    opacity: 1;\n  }\n  100% {\n    transform: scaleX(1);\n    opacity: 0.2;\n  }\n}\nbody[data-ds-dark-theme] .ff-skin .ff-boot-cap span,\nbody[data-ds-dark-theme] .ff-skin .ff-boot-cap i {\n  color: rgba(180, 208, 228, 0.6);\n}\nbody[data-ds-dark-theme] .ff-skin .ff-boot-cap b {\n  color: rgba(232, 244, 253, 0.9);\n}\n@keyframes ff-cap {\n  0% {\n    opacity: 0;\n    transform: translate(-50%, 12px);\n  }\n  26% {\n    opacity: 1;\n    transform: translate(-50%, 0);\n  }\n  76% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .ff-skin .ff-flakes i,\n  .ff-skin .ff-aurora,\n  .ff-skin .ff-glow,\n  .ff-skin .ff-boot-band,\n  .ff-skin .ff-boot-cap,\n  .ff-skin .ff-boot-cap::after {\n    animation: none;\n  }\n  .ff-skin .ff-flakes {\n    transform: none;\n    transition: none;\n  }\n  .ff-skin .ff-flakes i {\n    transform: translate3d(0, 40vh, 0);\n  }\n}\n\n";
// Browser half of 霜雪大肥鱼 — runs inside the Web GUI as a client plugin.
// apply(ctx) is called by the Loader; every mutation is owned by a ctx.effect
// so disabling the plugin (or an HMR rebuild) removes the skin cleanly.

function makeFlakes() {
  var out = "";
  for (var i = 0; i < 22; i++) {
    var x = (i * 37 + 13) % 100;
    var duration = 11 + ((i * 7) % 12);
    var delay = -((i * 13) % 23);
    var size = 2 + ((i * 5) % 7) * 0.7;
    var sway = (i % 2 === 0 ? 1 : -1) * (12 + ((i * 3) % 26));
    var opacity = 0.3 + ((i * 4) % 6) * 0.11;
    out +=
      '<i style="--x:' +
      x +
      "vw;--d:" +
      duration +
      "s;--delay:" +
      delay +
      "s;--s:" +
      size.toFixed(1) +
      "px;--sway:" +
      sway +
      "px;--o:" +
      opacity.toFixed(2) +
      '"></i>';
  }
  return out;
}

function buildOverlay() {
  var root = document.createElement("div");
  root.className = "ff-skin";
  root.setAttribute("aria-hidden", "true");
  // 左下角不放任何角色/头像/仪表（用户的明确要求），只保留氛围层与动效。
  root.innerHTML =
    '<div class="ff-aurora"></div>' +
    '<div class="ff-glow"></div>' +
    '<div class="ff-frost"></div>' +
    '<div class="ff-cursor"></div>' +
    '<div class="ff-sill"></div>' +
    '<div class="ff-flakes">' +
    makeFlakes() +
    "</div>" +
    '<div class="ff-boot">' +
    '<div class="ff-boot-band"></div>' +
    '<div class="ff-boot-cap"><span>HARNESS OS</span><b>霜雪协议</b><i>SNOW PROTOCOL</i>' +
    '<u>NODE 01 · PROFILE DESKTOP · LOCAL ONLY</u></div>' +
    "</div>";
  return root;
}

function bindMotion(root) {
  var mx = 0.5;
  var my = 0.5;
  var frame = 0;
  function paint() {
    frame = 0;
    root.style.setProperty("--mx", (mx * 100).toFixed(2) + "%");
    root.style.setProperty("--my", (my * 100).toFixed(2) + "%");
    root.style.setProperty("--px", ((mx - 0.5) * -14).toFixed(2) + "px");
    root.style.setProperty("--py", ((my - 0.5) * -10).toFixed(2) + "px");
  }
  function onMove(event) {
    mx = event.clientX / Math.max(1, window.innerWidth);
    my = event.clientY / Math.max(1, window.innerHeight);
    if (!frame) frame = requestAnimationFrame(paint);
  }
  window.addEventListener("pointermove", onMove, { passive: true });
  paint();
  return function () {
    window.removeEventListener("pointermove", onMove);
    if (frame) cancelAnimationFrame(frame);
  };
}

function apply(ctx) {
  if (ctx.theme && typeof ctx.theme.overrideTokens === "function") {
    ctx.effect(function () {
      return ctx.theme.overrideTokens(PKG, TOKENS);
    }, "fatfish: palette");
  }

  // B 方案：工作区默认切到「雪夜」暗场。只切一次，之后完全尊重用户手选。
  try {
    var switched = false;
    try {
      switched = window.localStorage.getItem("dsh.snow.dark.v1") === "1";
    } catch (error) {}
    if (!switched && ctx.theme && typeof ctx.theme.setTheme === "function") {
      window.setTimeout(function () {
        try {
          var snapshot = ctx.theme.getTheme ? ctx.theme.getTheme() : null;
          if (!snapshot || snapshot.preference !== "dark") ctx.theme.setTheme("dark");
          window.localStorage.setItem("dsh.snow.dark.v1", "1");
        } catch (error) {}
      }, 80);
    }
  } catch (error) {}

  ctx.effect(function () {
    var previous = document.querySelector(
      'style[data-plugin-css="' + CSS_TAG + '"]'
    );
    if (previous && previous.parentNode) previous.parentNode.removeChild(previous);
    var tag = document.createElement("style");
    tag.dataset.plugin = PKG;
    tag.dataset.pluginCss = CSS_TAG;
    tag.textContent = SKIN_CSS;
    document.head.appendChild(tag);
    return function () {
      if (tag.parentNode) tag.parentNode.removeChild(tag);
    };
  }, "fatfish: stylesheet");

  ctx.effect(function () {
    var overlay = buildOverlay();
    document.body.appendChild(overlay);

    var reduced = false;
    try {
      reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch (error) {}

    var unbind = reduced ? null : bindMotion(overlay);

    // 冷启动的一小段"过场"：一次扫光 + 标识，1.6s 后自毁。
    // 每个页面会话只播一次——插件热重载时不重复闪。
    var BOOT_KEY = "dsh.snow.boot.v1";
    var bootSeen = false;
    try {
      bootSeen = window.sessionStorage.getItem(BOOT_KEY) === "1";
    } catch (error) {}

    var bootTimer = 0;
    if (!reduced && !bootSeen) {
      try {
        window.sessionStorage.setItem(BOOT_KEY, "1");
      } catch (error) {}
      bootTimer = window.setTimeout(function () {
        overlay.classList.add("ff-boot-done");
        window.setTimeout(function () {
          var boot = overlay.querySelector(".ff-boot");
          if (boot && boot.parentNode) boot.parentNode.removeChild(boot);
        }, 900);
      }, 1500);
    } else {
      var boot = overlay.querySelector(".ff-boot");
      if (boot && boot.parentNode) boot.parentNode.removeChild(boot);
    }

    return function () {
      if (bootTimer) window.clearTimeout(bootTimer);
      if (unbind) unbind();
      if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
    };
  }, "fatfish: decorations");
}

		exports.name = "fatfish-skin";
		exports.inject = ["theme"];
		exports.apply = apply;
		return module.exports;
	}
});
