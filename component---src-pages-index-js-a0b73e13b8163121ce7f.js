(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    243: function(e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "pageQuery", function() {
          return A;
        });
      var n = a(240),
        r = a.n(n),
        o = a(10),
        i = a(0),
        l = a.n(i),
        c = a(1),
        p = a(2),
        s = a(58),
        m = a(238),
        u = a(239),
        d = a(244),
        g = a.n(d),
        h = a(245),
        f = a.n(h),
        b = a(246),
        x = a.n(b),
        E = a(4),
        w = a(73),
        v = a(39);
      function y() {
        var e = N([
          "\n    width: auto;\n    padding: 40px;\n    margin: 50px 30px -100px 30px;\n  "
        ]);
        return (
          (y = function() {
            return e;
          }),
          e
        );
      }
      function k() {
        var e = N(["max-width: 70%;"]);
        return (
          (k = function() {
            return e;
          }),
          e
        );
      }
      function C() {
        var e = N(["max-width: none;"]);
        return (
          (C = function() {
            return e;
          }),
          e
        );
      }
      function I() {
        var e = N(["\n      margin-bottom: 40px;\n  "]);
        return (
          (I = function() {
            return e;
          }),
          e
        );
      }
      function _() {
        var e = N(["padding: 50px 0;"]);
        return (
          (_ = function() {
            return e;
          }),
          e
        );
      }
      function S() {
        var e = N(["\n    padding: 40px 10px;\n  "]);
        return (
          (S = function() {
            return e;
          }),
          e
        );
      }
      function H() {
        var e = N([
          "\n    flex-direction: column;\n    align-items: baseline;\n  "
        ]);
        return (
          (H = function() {
            return e;
          }),
          e
        );
      }
      function N(e, t) {
        return t || (t = e.slice(0)), (e.raw = t), e;
      }
      var P = c.c.div.withConfig({
          displayName: "pages__AboveFold",
          componentId: "sc-13he07q-0"
        })(
          ["", " padding:140px 0 60px 0;", "{color:", ";}"],
          w.a,
          v.a,
          p.a.darkest
        ),
        q = c.c.div.withConfig({
          displayName: "pages__Block",
          componentId: "sc-13he07q-1"
        })(
          ["&:nth-child(odd){border:solid 1px ", ";background-color:", ";}"],
          Object(o.a)(0.1, p.a.light),
          p.a.light
        ),
        G = Object(c.c)(u.a).withConfig({
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
          w.b,
          E.a.tablet(H()),
          E.a.phone(S()),
          v.f,
          v.b
        ),
        j = c.c.div.withConfig({
          displayName: "pages__DivWrapper",
          componentId: "sc-13he07q-3"
        })(
          ["padding:80px 30px;", " &:first-child{", ";}"],
          E.a.tablet(_()),
          E.a.tablet(I())
        ),
        L = c.c.img.withConfig({
          displayName: "pages__ItemImage",
          componentId: "sc-13he07q-4"
        })(["max-width:85%;position:relative;", ""], E.a.tablet(C())),
        R = c.c.div.withConfig({
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
          w.d,
          v.e,
          v.a,
          E.a.tablet(k()),
          p.a.darkest
        ),
        J = c.c.div.withConfig({
          displayName: "pages__WorkWithMe",
          componentId: "sc-13he07q-6"
        })(
          [
            "padding:80px;width:73%;border-radius:6px;box-shadow:0 2px 26px 0 rgba(57,55,55,0.08);background-color:#ffffff;text-align:center;position:relative;margin:100px auto -150px auto;",
            "{max-width:80%;margin:0 auto 28px auto;}",
            ";"
          ],
          v.e,
          E.a.tablet(y())
        ),
        M = (function(e) {
          var t, a;
          function n() {
            for (
              var t, a = arguments.length, n = new Array(a), r = 0;
              r < a;
              r++
            )
              n[r] = arguments[r];
            return (
              ((t = e.call.apply(e, [this].concat(n)) || this).state = {
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
            (a = e),
            ((t = n).prototype = Object.create(a.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = a),
            (n.prototype.render = function() {
              var e = this.state.openHireMePopup,
                t = this.props.data;
              return l.a.createElement(
                R,
                null,
                l.a.createElement(
                  u.b,
                  {
                    theme: "white",
                    bigFooter: !0,
                    openContactPopup: this.openContactPopup
                  },
                  l.a.createElement(
                    P,
                    null,
                    l.a.createElement(r.a, {
                      fluid: t.avatarHomepage.childImageSharp.fluid,
                      alt: "Hugo Georget",
                      className: "avatar"
                    }),
                    l.a.createElement(
                      v.a,
                      { primary: !0, align: "center" },
                      "Hugo Georget"
                    ),
                    l.a.createElement(
                      v.e,
                      { align: "center", max45: !0 },
                      "French front-end developer with an experience in back-end."
                    ),
                    l.a.createElement(
                      s.b,
                      { large: !0, onClick: this.openContactPopup, book: !0 },
                      "Hire me"
                    )
                  ),
                  l.a.createElement(
                    u.a,
                    null,
                    l.a.createElement(
                      v.b,
                      { primary: !0, align: "center", bold: !0 },
                      "Why hire me?"
                    ),
                    l.a.createElement(
                      v.f,
                      { align: "center", max70: !0, className: "who-desc" },
                      "I have years of experience in front-end development (ReactJS, HTML, CSS), with some knowledge in back-end (Java, Python) as well."
                    ),
                    l.a.createElement(
                      G,
                      null,
                      l.a.createElement(r.a, {
                        fluid: t.jsLogo.childImageSharp.fluid,
                        alt: "JavaScript logo",
                        fadeIn: !0
                      }),
                      l.a.createElement(r.a, {
                        fluid: t.reactLogo.childImageSharp.fluid,
                        alt: "React logo",
                        fadeIn: !0
                      }),
                      l.a.createElement(r.a, {
                        fluid: t.javaLogo.childImageSharp.fluid,
                        alt: "Java logo",
                        fadeIn: !0
                      })
                    ),
                    l.a.createElement(
                      v.b,
                      {
                        primary: !0,
                        align: "center",
                        bold: !0,
                        className: "portfolio"
                      },
                      "Portfolio"
                    )
                  ),
                  l.a.createElement(
                    q,
                    null,
                    l.a.createElement(
                      G,
                      null,
                      l.a.createElement(
                        j,
                        null,
                        l.a.createElement(L, {
                          src: f.a,
                          alt: "Société Générale Careers screenshot"
                        })
                      ),
                      l.a.createElement(
                        j,
                        null,
                        l.a.createElement(
                          v.b,
                          { bold: !0 },
                          "Société Générale Careers"
                        ),
                        l.a.createElement(
                          v.f,
                          null,
                          "Implementation of the Algolia search engine using the Instantsearch.js library"
                        ),
                        l.a.createElement(
                          v.f,
                          null,
                          "Autocomplete with Selectize.js, infinite hits loading, multi index search"
                        ),
                        l.a.createElement(
                          s.c,
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
                  l.a.createElement(
                    q,
                    null,
                    l.a.createElement(
                      G,
                      null,
                      l.a.createElement(
                        j,
                        null,
                        l.a.createElement(
                          v.b,
                          { bold: !0 },
                          "Hager inspiration engine"
                        ),
                        l.a.createElement(
                          v.f,
                          null,
                          "Implementation of Algolia search engine using the React Instantsearch library"
                        ),
                        l.a.createElement(
                          v.f,
                          null,
                          "Responsive design, PDF export"
                        ),
                        l.a.createElement(
                          s.c,
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
                      l.a.createElement(
                        j,
                        null,
                        l.a.createElement(L, {
                          src: g.a,
                          alt: "Hager screenshot"
                        })
                      )
                    )
                  ),
                  l.a.createElement(
                    q,
                    null,
                    l.a.createElement(
                      G,
                      null,
                      l.a.createElement(
                        j,
                        null,
                        l.a.createElement(v.b, { bold: !0 }, "This website !"),
                        l.a.createElement(
                          v.f,
                          null,
                          "Created using the portfolio-website-gatsby Gatsby template"
                        ),
                        l.a.createElement(
                          v.f,
                          null,
                          "Gatsby, Responsive design"
                        ),
                        l.a.createElement(
                          s.c,
                          {
                            primary: !0,
                            bold: !0,
                            className: "link",
                            as: "a",
                            href: "https://georget.github.io/"
                          },
                          "Link"
                        )
                      ),
                      l.a.createElement(
                        j,
                        null,
                        l.a.createElement(L, {
                          src: x.a,
                          alt: "Portfolio screenshot"
                        })
                      )
                    )
                  ),
                  l.a.createElement(
                    J,
                    null,
                    l.a.createElement(
                      v.a,
                      { green: !0 },
                      "Get in touch with me"
                    ),
                    l.a.createElement(
                      v.e,
                      null,
                      "Fancy working with me? Contact me for more info! "
                    ),
                    l.a.createElement(
                      s.b,
                      { onClick: this.openContactPopup, book: !0 },
                      "Contact me"
                    )
                  )
                ),
                l.a.createElement(m.a, {
                  open: e,
                  handleClose: this.handleRequestDemoClose
                })
              );
            }),
            n
          );
        })(l.a.Component);
      t.default = M;
      var A = "1595649761";
    },
    244: function(e, t, a) {
      e.exports = a.p + "static/Hager-43f83f7285957bb82db9bd9c8589e301.png";
    },
    245: function(e, t, a) {
      e.exports =
        a.p + "static/SG_Careers-0201148bf85481410187d7ac4f6b3f8b.png";
    },
    246: function(e, t, a) {
      e.exports = a.p + "static/portfolio-91217379786a167b4c8d5a3abeef2181.png";
    }
  }
]);
//# sourceMappingURL=component---src-pages-index-js-a0b73e13b8163121ce7f.js.map
