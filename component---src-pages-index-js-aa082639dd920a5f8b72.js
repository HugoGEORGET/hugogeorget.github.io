(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    242: function(e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "pageQuery", function() {
          return U;
        });
      var a = n(0),
        r = n.n(a),
        A = n(1),
        o = n(73),
        i = n(54),
        c = n(238),
        l = (n(243), n(244)),
        p = n.n(l),
        s = n(245),
        u = n.n(s),
        m = n(58),
        d = n(237),
        h = n(4),
        f = n(2),
        g = n(239),
        b = n.n(g),
        x = n(10);
      function w() {
        var e = C([
          "\n    width: auto;\n    padding: 40px;\n    margin: 50px 30px -100px 30px;\n  "
        ]);
        return (
          (w = function() {
            return e;
          }),
          e
        );
      }
      function y() {
        var e = C(["max-width: 70%;"]);
        return (
          (y = function() {
            return e;
          }),
          e
        );
      }
      function v() {
        var e = C(["max-width: none;"]);
        return (
          (v = function() {
            return e;
          }),
          e
        );
      }
      function E() {
        var e = C(["\n      margin-bottom: 40px;\n  "]);
        return (
          (E = function() {
            return e;
          }),
          e
        );
      }
      function k() {
        var e = C(["padding: 50px 0;"]);
        return (
          (k = function() {
            return e;
          }),
          e
        );
      }
      function P() {
        var e = C(["\n    padding: 40px 10px;\n  "]);
        return (
          (P = function() {
            return e;
          }),
          e
        );
      }
      function L() {
        var e = C([
          "\n    flex-direction: column;\n    align-items: baseline;\n  "
        ]);
        return (
          (L = function() {
            return e;
          }),
          e
        );
      }
      function C(e, t) {
        return t || (t = e.slice(0)), (e.raw = t), e;
      }
      var q = A.c.div.withConfig({
          displayName: "pages__AboveFold",
          componentId: "sc-13he07q-0"
        })(
          ["", " padding:140px 0 60px 0;", "{color:", ";}"],
          o.a,
          i.a,
          f.a.darkest
        ),
        O = A.c.div.withConfig({
          displayName: "pages__Block",
          componentId: "sc-13he07q-1"
        })(
          ["&:nth-child(odd){border:solid 1px ", ";background-color:", ";}"],
          Object(x.a)(0.1, f.a.light),
          f.a.light
        ),
        H = Object(A.c)(c.a).withConfig({
          displayName: "pages__BlockContent",
          componentId: "sc-13he07q-2"
        })(
          [
            "",
            " padding:100px 40px;",
            ";",
            ";",
            "{margin-top:10px;}",
            "{margin-top:0;}img{width:100%;height:auto;}"
          ],
          o.b,
          h.a.tablet(L()),
          h.a.phone(P()),
          i.f,
          i.b
        ),
        X = A.c.div.withConfig({
          displayName: "pages__DivWrapper",
          componentId: "sc-13he07q-3"
        })(
          ["padding:80px 30px;", " &:first-child{", ";}"],
          h.a.tablet(k()),
          h.a.tablet(E())
        ),
        S = A.c.img.withConfig({
          displayName: "pages__ItemImage",
          componentId: "sc-13he07q-4"
        })(["max-width:85%;position:relative;", ""], h.a.tablet(v())),
        Z = A.c.div.withConfig({
          displayName: "pages__HomepageWrapper",
          componentId: "sc-13he07q-5"
        })(
          [
            "",
            " .who-desc{display:block;margin:0 auto 60px auto;max-width:90%;}",
            "{margin-bottom:28px;}",
            "{margin:0 0 20px 0;}.avatar{max-width:200px;width:80%;margin:0 auto 50px auto;border-radius:50%;display:block;",
            "}.link{padding:0;color:",
            ";text-decoration:underlined;svg{margin-left:7px;}}.portfolio{margin:100px 0 50px 0;font-size:42px;}"
          ],
          o.d,
          i.e,
          i.a,
          h.a.tablet(y()),
          f.a.darkest
        ),
        G = A.c.div.withConfig({
          displayName: "pages__WorkWithMe",
          componentId: "sc-13he07q-6"
        })(
          [
            "padding:80px;width:73%;border-radius:6px;box-shadow:0 2px 26px 0 rgba(57,55,55,0.08);background-color:#ffffff;text-align:center;position:relative;margin:100px auto -150px auto;",
            "{max-width:80%;margin:0 auto 28px auto;}",
            ";"
          ],
          i.e,
          h.a.tablet(w())
        ),
        N = (function(e) {
          var t, n;
          function a() {
            for (
              var t, n = arguments.length, a = new Array(n), r = 0;
              r < n;
              r++
            )
              a[r] = arguments[r];
            return (
              ((t = e.call.apply(e, [this].concat(a)) || this).state = {
                openHireMePopup: !1
              }),
              (t.handleRequestDemoClose = function() {
                t.setState({ openHireMePopup: !1 });
              }),
              (t.openContactPopup = function() {
                t.setState({ openHireMePopup: !0 });
              }),
              t
            );
          }
          return (
            (n = e),
            ((t = a).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n),
            (a.prototype.render = function() {
              var e = this.state.openHireMePopup,
                t = this.props.data;
              return r.a.createElement(
                Z,
                null,
                r.a.createElement(
                  c.b,
                  {
                    theme: "white",
                    bigFooter: !0,
                    openContactPopup: this.openContactPopup
                  },
                  r.a.createElement(
                    q,
                    null,
                    r.a.createElement(b.a, {
                      fluid: t.avatarHomepage.childImageSharp.fluid,
                      alt: "Hugo Georget",
                      className: "avatar"
                    }),
                    r.a.createElement(
                      i.a,
                      { primary: !0, align: "center" },
                      "Hugo Georget"
                    ),
                    r.a.createElement(
                      i.e,
                      { align: "center", max45: !0 },
                      "Front-end developer with an experience in back-end."
                    ),
                    r.a.createElement(
                      m.b,
                      { large: !0, onClick: this.openContactPopup, book: !0 },
                      "Hire me"
                    )
                  ),
                  r.a.createElement(
                    c.a,
                    null,
                    r.a.createElement(
                      i.b,
                      { primary: !0, align: "center", bold: !0 },
                      "Why hire me?"
                    ),
                    r.a.createElement(
                      i.f,
                      { align: "center", max70: !0, className: "who-desc" },
                      "I have years of experience mostly in front-en development (ReactJS, HTML, CSS) but with some knowledge in back-end (Java, Python) as well."
                    ),
                    r.a.createElement(
                      i.b,
                      {
                        primary: !0,
                        align: "center",
                        bold: !0,
                        className: "portfolio"
                      },
                      "Portfolio"
                    )
                  ),
                  r.a.createElement(
                    O,
                    null,
                    r.a.createElement(
                      H,
                      null,
                      r.a.createElement(
                        X,
                        null,
                        r.a.createElement(S, {
                          src: p.a,
                          alt: "Société Générale Careers screenshot"
                        })
                      ),
                      r.a.createElement(
                        X,
                        null,
                        r.a.createElement(
                          i.b,
                          { bold: !0 },
                          "Société Générale Careers"
                        ),
                        r.a.createElement(
                          i.f,
                          null,
                          "Implementation of the Algolia search engine using the Instantsearch.js library"
                        ),
                        r.a.createElement(
                          i.f,
                          null,
                          "Autocomplete with Selectize.js, infinite hits loading, multi index search"
                        ),
                        r.a.createElement(
                          m.c,
                          {
                            primary: !0,
                            bold: !0,
                            className: "link",
                            as: "a",
                            target: "_blank",
                            href:
                              "https://careers.societegenerale.com/rechercher"
                          },
                          "Link"
                        )
                      )
                    )
                  ),
                  r.a.createElement(
                    O,
                    null,
                    r.a.createElement(
                      H,
                      null,
                      r.a.createElement(
                        X,
                        null,
                        r.a.createElement(
                          i.b,
                          { bold: !0 },
                          "Hager inspiration engine"
                        ),
                        r.a.createElement(
                          i.f,
                          null,
                          "Implementation of Algolia search engine using the React Instantsearch library"
                        ),
                        r.a.createElement(
                          i.f,
                          null,
                          "Responsive design, PDF export"
                        ),
                        r.a.createElement(
                          m.c,
                          {
                            primary: !0,
                            bold: !0,
                            className: "link",
                            as: "a",
                            target: "_blank",
                            href:
                              "https://particuliers.hager.fr/interrupteurs-prises/recherche/"
                          },
                          "Link"
                        )
                      ),
                      r.a.createElement(
                        X,
                        null,
                        r.a.createElement(S, {
                          src: u.a,
                          alt: "Hager screenshot"
                        })
                      )
                    )
                  ),
                  r.a.createElement(
                    G,
                    null,
                    r.a.createElement(
                      i.a,
                      { green: !0 },
                      "Get in touch with me"
                    ),
                    r.a.createElement(
                      i.e,
                      null,
                      "Fancy working with me? Contact me for more info! "
                    ),
                    r.a.createElement(
                      m.b,
                      { onClick: this.openContactPopup, book: !0 },
                      "Contact me"
                    )
                  )
                ),
                r.a.createElement(d.a, {
                  open: e,
                  handleClose: this.handleRequestDemoClose
                })
              );
            }),
            a
          );
        })(r.a.Component);
      t.default = N;
      var U = "4273871663";
    },
    243: function(e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAGQBAMAAACAGwOrAAAAG1BMVEXMzMyWlpacnJyqqqrFxcWxsbGjo6O3t7e+vr6He3KoAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAHMklEQVR4nO3bzXPTRhzG8ZX8erQcknC0gJYc47ZQjnKSYTjGmQ5ni2ZqjnaYyTkG/vDuu6WVQsSBphLfzwy2f7HRRE92V6uVLAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF32JZ2uM1+NX6d/b8R95fdt+MPRn/eXrXSTSIeuGqWymm7uKR82SJLShl+Ke8pW6iXaypbLpJRdUD5s4cMamA1f1pftNDc7cWQqG53bp6Bstrnyhg/ry1Zycdg8trY6FnXlw8aJC2vkNrypK9tp53biiar6qa2mWU3ZwNCHdeY2/KKubCcZx9HXsRx8D1Sl2tmbiy/y8bSmbGDrw5Ld7uDru7ndcFi20sB2jDxJMqGHZ9XjdrahBWUDqQurbzasumVWLdsptuPRwmS2NE8jOxAH5cP0Ic+90hvemtEwKNtpaycNA9PTUntUzJOpqJYPW/iwYrthOYjNqmU72e6nuslM9xLT3+RO31XKRpvLbVi7/YafVstW6vsJVppMdPta6Wqoe0tQPkymu7NhLd2Gc92Fg7KVRn4K9f6fax2KmQaZmILyYXFyENmwcrdhE1NQtpKcG0wKZeSOVX3986Dc/x/bOPLw0LZMnriw/AHUnP8EZSvF5Saz8wN5qnYuKK2+O/yPw4OkfOfShjX2A3msPh2U7bQoD0Zb30dyNQ4HpbO0c9Q4nI73ZLg2rJH/KwzVwSEo22lX/tWXvqnoV0HpxLZPbcMTvZ0cmGxYA/9X0K+Csp22qlOcf5iuTTn3Z8xbdVoSlM7InrOk4ewrl83HhtXzQY5UOwzKdpI9yqw7mIaz7226Bwall+r2OAinTCP1YxvWvrfpHhiU7TSXIeR6MeBalanf/Z1KJyi9nd7hs3C3Y9XgbFixT2esPhaU7ZQnB73CIsz+oLdQXSwovaFuU8uaiUMxLPumPjcIynZKkwO3vrcSjcOSOzxVD+XVlr4eujsd1qFb3zsW9pxHs2GVyr25HK97NROHrBiW/bELq1i2kzygJck6U4ty6k+/n6jrfQ7KPTk9my3qJg7+k4X/oLYSlO3kmtTYLMI3DUseCA8ryzapbjIdD+tOvdjp3tE0LL0gWjdx6HpYZoZlJk1NxyxzmWNV+tGZmV10eMxK/GqA7o4Nj4bmIk4wcZibD3f6aOhOPuZqItA4LDXGVSYOekvdDsse0oLzm11NWTQPL/gMbRyV051x+XSnxTP41P/FddtpeG4oasLa2sGvw+eGeSGspOmqgzALgOWf5LZ3dXjVYe6PUnonm61niboBPk8KDjq5nrUshDUtL40eV8qC6tQhCKu0NLoJy3balses4qL700pZUJ2UBmGVFt3vwrKd9ldP9fGu0dUdoQeep0l5zA/C6uLVnciPIEu1h/5iqr9uWCz3ZPM4XZb7UxiWv5jqrhuWylbq+RT0qNT0irRa91vUzy7dWWA3r0ib7tHXLxre69C3x7u63XZhdfleh55pJ83uounpENPw7FBzYXX0Lhrdwex9U83uz9rpieW2dnrpwuri/Vk7k8Mo8Xf+2U7j7vwrlo6Z98e19wO6sPqJ68n+zr+7tt/5p6bi6+xdbttOo3tKbUMbJ3UHNr/MN+/ePaVjf7ifqbLR3cquSeV180sfVhfvVl66nbjT5dZW37oPfmnHnV3dYO3D6uJ98L1yHK48rS01fdXQvln9MsF+tX3uJ6h1ZTsty39wU37ruzv+ZjafWtE+rC5+d0d/78vc6uDLb34rbD91n9fse+E6Tge/Faa+UfjrX/ty9DopfsEwKL/Lp7z0BcOgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANApkf2HBgirIpn+cc87QVgTWUVJkoipEPFEldJ5uhbibXItopkQ6Y/9Tf8HJv3f73mnJiz9eHQnbm1Y/V+yL/Lh4iqLPopR/uN/20c2EWfit+cizkbyxeDZqYiuJuqp92wp342unovhRr5TCOt4JdY2rN6leRicRrdiuH3M/fhPyLAG128ve5uF+CTeX7wS0bV+en+hGkok3xrPxCtRCGtyMp7ZsOLMPPRnUXz3ufsDnOyGcdafjU+vNm/EC9mGokw/vRAL+W4k3xJr+U8Obmq80mHdDjc2rMg9TKLRat39sOQArxvM7GQ1U4GofVdPEzdmTcTn3kYUW1Z8I6otS7ycdT+sidpb1XxWH1eyOelE1FOhZcVX9oM2rMGhqI5ZYnn5U4Slxixxtbm5FLfZuUpEPe3HLDE6th+0YelCPxaOhuJnmJSpnZZHQ7HLFpkYpSdql9XT/mgoRjP7wWJYpqueJ26eJX6GsBoYbh77N2iRm8f+BVokOnns3wAAAHTYv6F1UdYSyYFZAAAAAElFTkSuQmCC";
    },
    244: function(e, t, n) {
      e.exports =
        n.p + "static/SG_Careers-0201148bf85481410187d7ac4f6b3f8b.png";
    },
    245: function(e, t, n) {
      e.exports = n.p + "static/Hager-43f83f7285957bb82db9bd9c8589e301.png";
    }
  }
]);
//# sourceMappingURL=component---src-pages-index-js-aa082639dd920a5f8b72.js.map
