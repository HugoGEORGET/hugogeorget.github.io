(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    243: function(e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, "pageQuery", function() {
          return M;
        });
      var n = t(240),
        r = t.n(n),
        o = t(10),
        i = t(0),
        l = t.n(i),
        c = t(1),
        p = t(2),
        m = t(58),
        s = t(238),
        d = t(239),
        u = t(244),
        g = t.n(u),
        h = t(245),
        f = t.n(h),
        b = t(4),
        x = t(73),
        E = t(39);
      function w() {
        var e = S([
          "\n    width: auto;\n    padding: 40px;\n    margin: 50px 30px -100px 30px;\n  "
        ]);
        return (
          (w = function() {
            return e;
          }),
          e
        );
      }
      function v() {
        var e = S(["max-width: 70%;"]);
        return (
          (v = function() {
            return e;
          }),
          e
        );
      }
      function y() {
        var e = S(["max-width: none;"]);
        return (
          (y = function() {
            return e;
          }),
          e
        );
      }
      function k() {
        var e = S(["\n      margin-bottom: 40px;\n  "]);
        return (
          (k = function() {
            return e;
          }),
          e
        );
      }
      function C() {
        var e = S(["padding: 50px 0;"]);
        return (
          (C = function() {
            return e;
          }),
          e
        );
      }
      function I() {
        var e = S(["\n    padding: 40px 10px;\n  "]);
        return (
          (I = function() {
            return e;
          }),
          e
        );
      }
      function _() {
        var e = S([
          "\n    flex-direction: column;\n    align-items: baseline;\n  "
        ]);
        return (
          (_ = function() {
            return e;
          }),
          e
        );
      }
      function S(e, a) {
        return a || (a = e.slice(0)), (e.raw = a), e;
      }
      var H = c.c.div.withConfig({
          displayName: "pages__AboveFold",
          componentId: "sc-13he07q-0"
        })(
          ["", " padding:140px 0 60px 0;", "{color:", ";}"],
          x.a,
          E.a,
          p.a.darkest
        ),
        N = c.c.div.withConfig({
          displayName: "pages__Block",
          componentId: "sc-13he07q-1"
        })(
          ["&:nth-child(odd){border:solid 1px ", ";background-color:", ";}"],
          Object(o.a)(0.1, p.a.light),
          p.a.light
        ),
        P = Object(c.c)(d.a).withConfig({
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
          x.b,
          b.a.tablet(_()),
          b.a.phone(I()),
          E.f,
          E.b
        ),
        q = c.c.div.withConfig({
          displayName: "pages__DivWrapper",
          componentId: "sc-13he07q-3"
        })(
          ["padding:80px 30px;", " &:first-child{", ";}"],
          b.a.tablet(C()),
          b.a.tablet(k())
        ),
        j = c.c.img.withConfig({
          displayName: "pages__ItemImage",
          componentId: "sc-13he07q-4"
        })(["max-width:85%;position:relative;", ""], b.a.tablet(y())),
        G = c.c.div.withConfig({
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
          x.d,
          E.e,
          E.a,
          b.a.tablet(v()),
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
          E.e,
          b.a.tablet(w())
        ),
        L = (function(e) {
          var a, t;
          function n() {
            for (
              var a, t = arguments.length, n = new Array(t), r = 0;
              r < t;
              r++
            )
              n[r] = arguments[r];
            return (
              ((a = e.call.apply(e, [this].concat(n)) || this).state = {
                openHireMePopup: !1
              }),
              (a.handleRequestDemoClose = function() {
                a.setState({ openHireMePopup: !1 });
              }),
              (a.openContactPopup = function() {
                a.setState({ openHireMePopup: !0 });
              }),
              a
            );
          }
          return (
            (t = e),
            ((a = n).prototype = Object.create(t.prototype)),
            (a.prototype.constructor = a),
            (a.__proto__ = t),
            (n.prototype.render = function() {
              var e = this.state.openHireMePopup,
                a = this.props.data;
              return l.a.createElement(
                G,
                null,
                l.a.createElement(
                  d.b,
                  {
                    theme: "white",
                    bigFooter: !0,
                    openContactPopup: this.openContactPopup
                  },
                  l.a.createElement(
                    H,
                    null,
                    l.a.createElement(r.a, {
                      fluid: a.avatarHomepage.childImageSharp.fluid,
                      alt: "Hugo Georget",
                      className: "avatar"
                    }),
                    l.a.createElement(
                      E.a,
                      { primary: !0, align: "center" },
                      "Hugo Georget"
                    ),
                    l.a.createElement(
                      E.e,
                      { align: "center", max45: !0 },
                      "French front-end developer with an experience in back-end."
                    ),
                    l.a.createElement(
                      m.b,
                      { large: !0, onClick: this.openContactPopup, book: !0 },
                      "Hire me"
                    )
                  ),
                  l.a.createElement(
                    d.a,
                    null,
                    l.a.createElement(
                      E.b,
                      { primary: !0, align: "center", bold: !0 },
                      "Why hire me?"
                    ),
                    l.a.createElement(
                      E.f,
                      { align: "center", max70: !0, className: "who-desc" },
                      "I have years of experience in front-end development (ReactJS, HTML, CSS), with some knowledge in back-end (Java, Python) as well."
                    ),
                    l.a.createElement(
                      P,
                      null,
                      l.a.createElement(r.a, {
                        fluid: a.jsLogo.childImageSharp.fluid,
                        alt: "JavaScript logo",
                        fadeIn: !0
                      }),
                      l.a.createElement(r.a, {
                        fluid: a.reactLogo.childImageSharp.fluid,
                        alt: "React logo",
                        fadeIn: !0
                      }),
                      l.a.createElement(r.a, {
                        fluid: a.javaLogo.childImageSharp.fluid,
                        alt: "Java logo",
                        fadeIn: !0
                      })
                    ),
                    l.a.createElement(
                      E.b,
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
                    N,
                    null,
                    l.a.createElement(
                      P,
                      null,
                      l.a.createElement(
                        q,
                        null,
                        l.a.createElement(j, {
                          src: f.a,
                          alt: "Société Générale Careers screenshot"
                        })
                      ),
                      l.a.createElement(
                        q,
                        null,
                        l.a.createElement(
                          E.b,
                          { bold: !0 },
                          "Société Générale Careers"
                        ),
                        l.a.createElement(
                          E.f,
                          null,
                          "Implementation of the Algolia search engine using the Instantsearch.js library"
                        ),
                        l.a.createElement(
                          E.f,
                          null,
                          "Autocomplete with Selectize.js, infinite hits loading, multi index search"
                        ),
                        l.a.createElement(
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
                  l.a.createElement(
                    N,
                    null,
                    l.a.createElement(
                      P,
                      null,
                      l.a.createElement(
                        q,
                        null,
                        l.a.createElement(
                          E.b,
                          { bold: !0 },
                          "Hager inspiration engine"
                        ),
                        l.a.createElement(
                          E.f,
                          null,
                          "Implementation of Algolia search engine using the React Instantsearch library"
                        ),
                        l.a.createElement(
                          E.f,
                          null,
                          "Responsive design, PDF export"
                        ),
                        l.a.createElement(
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
                      l.a.createElement(
                        q,
                        null,
                        l.a.createElement(j, {
                          src: g.a,
                          alt: "Hager screenshot"
                        })
                      )
                    )
                  ),
                  l.a.createElement(
                    J,
                    null,
                    l.a.createElement(
                      E.a,
                      { green: !0 },
                      "Get in touch with me"
                    ),
                    l.a.createElement(
                      E.e,
                      null,
                      "Fancy working with me? Contact me for more info! "
                    ),
                    l.a.createElement(
                      m.b,
                      { onClick: this.openContactPopup, book: !0 },
                      "Contact me"
                    )
                  )
                ),
                l.a.createElement(s.a, {
                  open: e,
                  handleClose: this.handleRequestDemoClose
                })
              );
            }),
            n
          );
        })(l.a.Component);
      a.default = L;
      var M = "1595649761";
    },
    244: function(e, a, t) {
      e.exports = t.p + "static/Hager-43f83f7285957bb82db9bd9c8589e301.png";
    },
    245: function(e, a, t) {
      e.exports =
        t.p + "static/SG_Careers-0201148bf85481410187d7ac4f6b3f8b.png";
    }
  }
]);
//# sourceMappingURL=component---src-pages-index-js-277d5113399a732341e4.js.map
