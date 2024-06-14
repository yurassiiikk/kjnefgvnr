const LoadHomepageTiles = () => {
  var e = new XMLHttpRequest();
  (e.onreadystatechange = function () {
    4 == this.readyState &&
      200 == this.status &&
      (addHomepageTiles(JSON.parse(this.responseText)), addHomepageScripts());
  }),
    e.open("GET", contentBaseUrl + "/api/spacex-website/homepage-tiles", !0),
    e.send();
};
function addHomepageTiles(e) {
  if (!e || e.length < 1) return;
  let t = document.getElementById("placeholder");
  t && t.remove(),
    e.sort(function (e, t) {
      return e.position < t.position ? -1 : e.position >= t.position ? 1 : 0;
    }),
    e.forEach(function (e) {
      let t = document.createElement("div");
      t.className = "section";
      let n = document.createElement("span");
      if (
        ((n.className = "background"),
        n.setAttribute("role", "img"),
        n.setAttribute("alt", ""),
        n.setAttribute("data-preload", null),
        e.backgroundDesktop &&
          n.setAttribute("data-desktop", e.backgroundDesktop.url),
        e.backgroundMobile &&
          n.setAttribute("data-mobile", e.backgroundMobile.url),
        e.videoDesktop && deviceSettings.isDesktop)
      ) {
        let t = document.createElement("video");
        t.setAttribute("aria-hidden", "true"),
          t.setAttribute("data-content-video", "true"),
          e.backgroundDesktop && (t.poster = e.backgroundDesktop.url),
          t.setAttribute("muted", ""),
          t.setAttribute("playsinline", ""),
          (t.muted = !0),
          (t.playsinline = !0),
          (t.loop = !0),
          (t.autoplay = !0),
          (t.innerHTML = `\n        <source type="${e.videoDesktop.mime}" src="${e.videoDesktop.url}">\n      `),
          (n.className = "background gallery-background gallery-full"),
          n.appendChild(t);
      } else if (e.videoMobile && !deviceSettings.isDesktop) {
        let t = document.createElement("video");
        t.setAttribute("aria-hidden", "true"),
          t.setAttribute("data-content-video", "true"),
          e.backgroundMobile && (t.poster = e.backgroundMobile.url),
          (t.innerHTML = `\n        <source type="${e.videoMobile.mime}" src="${e.videoMobile.url}">\n      `),
          t.setAttribute("muted", ""),
          t.setAttribute("playsinline", ""),
          (t.muted = !0),
          (t.playsinline = !0),
          (t.loop = !0),
          (t.autoplay = !0),
          (n.className = "background gallery-background gallery-full"),
          n.appendChild(t);
      }
      let a = document.createElement("div");
      a.className = "section-inner feature";
      let i = document.createElement("div");
      if (
        ((i.className =
          "left" == e.alignContent
            ? "inner-left-bottom"
            : "inner-right-bottom"),
        a.appendChild(i),
        a.appendChild(getHomepageScrollMeElement()),
        e.subtitle)
      ) {
        let t = document.createElement("p");
        (t.className = "animate"),
          t.setAttribute("style", "text-transform: uppercase"),
          (t.innerHTML = e.subtitle),
          i.appendChild(t);
      }
      if (e.title) {
        let t = document.createElement("h2");
        (t.className = "animate shadowed"),
          t.setAttribute("style", "text-transform: uppercase"),
          (t.innerHTML = e.title),
          i.appendChild(t);
      }
      let o = document.createElement("a");
      (o.className = "btn animate"),
        o.setAttribute("tabindex", "0"),
        o.setAttribute("href", e.link),
        o.setAttribute("aria-label", `${e.callToAction} ${e.title}`),
        o.setAttribute("role", "button"),
        e.newTab && o.setAttribute("target", "_"),
        (o.innerHTML = `\n      <div class="hover"></div>\n      <span class="text">${e.callToAction}</span>\n    `),
        i.appendChild(o),
        t.appendChild(n),
        t.appendChild(a),
        document.getElementById("tiles").appendChild(t);
    });
}
function addHomepageScripts() {
  let e = document.createElement("script");
  e.setAttribute("type", "text/javascript"),
    e.setAttribute("src", "static/core-min.js"),
    document.getElementById("home").appendChild(e);
}
function getHomepageScrollMeElement() {
  let e = document.createElement("div");
  return (
    (e.className = "scrollme"),
    (e.innerHTML =
      '\n    <svg width="30px" height="20px" aria-label="more content below">\n      <path stroke="#ffffff" stroke-width="2px" d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "/>\n    </svg>\n  '),
    e
  );
}
"loading" != document.readyState
  ? LoadHomepageTiles()
  : document.addEventListener("DOMContentLoaded", LoadHomepageTiles);
