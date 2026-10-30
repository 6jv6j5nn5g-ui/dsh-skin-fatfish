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
