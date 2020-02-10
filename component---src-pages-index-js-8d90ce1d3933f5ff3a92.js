(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    "/8hW": function(e, t, a) {
      e.exports = a.p + "static/portfolio-91217379786a167b4c8d5a3abeef2181.png";
    },
    CXnH: function(e, t, a) {
      e.exports =
        a.p + "static/SG_Careers-0201148bf85481410187d7ac4f6b3f8b.png";
    },
    GcVo: function(e, t, a) {
      e.exports = a.p + "static/Hager-43f83f7285957bb82db9bd9c8589e301.png";
    },
    RXBc: function(e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "pageQuery", function() {
          return A;
        });
      var n = a("9eSz"),
        r = a.n(n),
        o = a("+IKJ"),
        l = a("q1tI"),
        i = a.n(l),
        c = a("vOnD"),
        p = a("TITg"),
        s = a("5Wrh"),
        m = a("zR35"),
        u = a("7oih"),
        d = a("GcVo"),
        h = a.n(d),
        g = a("CXnH"),
        f = a.n(g),
        b = a("/8hW"),
        E = a.n(b),
        x = a("2N8+"),
        w = a("+jgI"),
        v = a("h9d0");
      function y() {
        var e = S([
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
        var e = S(["max-width: 70%;"]);
        return (
          (k = function() {
            return e;
          }),
          e
        );
      }
      function C() {
        var e = S(["max-width: none;"]);
        return (
          (C = function() {
            return e;
          }),
          e
        );
      }
      function I() {
        var e = S(["\n      margin-bottom: 40px;\n  "]);
        return (
          (I = function() {
            return e;
          }),
          e
        );
      }
      function _() {
        var e = S(["padding: 50px 0;"]);
        return (
          (_ = function() {
            return e;
          }),
          e
        );
      }
      function H() {
        var e = S(["\n    padding: 40px 10px;\n  "]);
        return (
          (H = function() {
            return e;
          }),
          e
        );
      }
      function N() {
        var e = S([
          "\n    flex-direction: column;\n    align-items: baseline;\n  "
        ]);
        return (
          (N = function() {
            return e;
          }),
          e
        );
      }
      function S(e, t) {
        return t || (t = e.slice(0)), (e.raw = t), e;
      }
      var G = c.c.div.withConfig({
          displayName: "pages__AboveFold",
          componentId: "sc-13he07q-0"
        })(
          ["", " padding:140px 0 60px 0;", "{color:", ";}"],
          w.a,
          v.a,
          p.a.darkest
        ),
        P = c.c.div.withConfig({
          displayName: "pages__Block",
          componentId: "sc-13he07q-1"
        })(
          ["&:nth-child(odd){border:solid 1px ", ";background-color:", ";}"],
          Object(o.a)(0.1, p.a.light),
          p.a.light
        ),
        q = Object(c.c)(u.a).withConfig({
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
          x.a.tablet(N()),
          x.a.phone(H()),
          v.f,
          v.b
        ),
        R = c.c.div.withConfig({
          displayName: "pages__DivWrapper",
          componentId: "sc-13he07q-3"
        })(
          ["padding:80px 30px;", " &:first-child{", ";}"],
          x.a.tablet(_()),
          x.a.tablet(I())
        ),
        j = c.c.img.withConfig({
          displayName: "pages__ItemImage",
          componentId: "sc-13he07q-4"
        })(["max-width:85%;position:relative;", ""], x.a.tablet(C())),
        L = c.c.div.withConfig({
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
          x.a.tablet(k()),
          p.a.darkest
        ),
        W = c.c.div.withConfig({
          displayName: "pages__WorkWithMe",
          componentId: "sc-13he07q-6"
        })(
          [
            "padding:80px;width:73%;border-radius:6px;box-shadow:0 2px 26px 0 rgba(57,55,55,0.08);background-color:#ffffff;text-align:center;position:relative;margin:100px auto -150px auto;",
            "{max-width:80%;margin:0 auto 28px auto;}",
            ";"
          ],
          v.e,
          x.a.tablet(y())
        ),
        J = (function(e) {
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
              return i.a.createElement(
                L,
                null,
                i.a.createElement(
                  u.b,
                  {
                    theme: "white",
                    bigFooter: !0,
                    openContactPopup: this.openContactPopup
                  },
                  i.a.createElement(
                    G,
                    null,
                    i.a.createElement(r.a, {
                      fluid: t.avatarHomepage.childImageSharp.fluid,
                      alt: "Hugo Georget",
                      className: "avatar"
                    }),
                    i.a.createElement(
                      v.a,
                      { primary: !0, align: "center" },
                      "Hugo Georget"
                    ),
                    i.a.createElement(
                      v.e,
                      { align: "center", max45: !0 },
                      "French front-end developer with an experience in back-end."
                    ),
                    i.a.createElement(
                      s.b,
                      { large: !0, onClick: this.openContactPopup, book: !0 },
                      "Hire me"
                    )
                  ),
                  i.a.createElement(
                    u.a,
                    null,
                    i.a.createElement(
                      v.b,
                      { primary: !0, align: "center", bold: !0 },
                      "Why hire me?"
                    ),
                    i.a.createElement(
                      v.f,
                      { align: "center", max70: !0, className: "who-desc" },
                      "I have years of experience in web development (ReactJS, HTML, CSS), with some knowledge in back-end (Java, Python, NodeJS) as well."
                    ),
                    i.a.createElement(
                      q,
                      null,
                      i.a.createElement(r.a, {
                        fluid: t.jsLogo.childImageSharp.fluid,
                        alt: "JavaScript logo",
                        fadeIn: !0
                      }),
                      i.a.createElement(r.a, {
                        fluid: t.reactLogo.childImageSharp.fluid,
                        alt: "React logo",
                        fadeIn: !0
                      }),
                      i.a.createElement(r.a, {
                        fluid: t.nodeLogo.childImageSharp.fluid,
                        alt: "Node logo",
                        fadeIn: !0
                      })
                    ),
                    i.a.createElement(
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
                  i.a.createElement(
                    P,
                    null,
                    i.a.createElement(
                      q,
                      null,
                      i.a.createElement(
                        R,
                        null,
                        i.a.createElement(j, {
                          src: f.a,
                          alt: "Société Générale Careers screenshot"
                        })
                      ),
                      i.a.createElement(
                        R,
                        null,
                        i.a.createElement(
                          v.b,
                          { bold: !0 },
                          "Société Générale Careers"
                        ),
                        i.a.createElement(
                          v.f,
                          null,
                          "Implementation of the Algolia search engine using the Instantsearch.js library"
                        ),
                        i.a.createElement(
                          v.f,
                          null,
                          "Autocomplete with Selectize.js, infinite hits loading, multi index search"
                        ),
                        i.a.createElement(
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
                  i.a.createElement(
                    P,
                    null,
                    i.a.createElement(
                      q,
                      null,
                      i.a.createElement(
                        R,
                        null,
                        i.a.createElement(
                          v.b,
                          { bold: !0 },
                          "Hager inspiration engine"
                        ),
                        i.a.createElement(
                          v.f,
                          null,
                          "Implementation of Algolia search engine using the React Instantsearch library"
                        ),
                        i.a.createElement(
                          v.f,
                          null,
                          "Responsive design, PDF export"
                        ),
                        i.a.createElement(
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
                      i.a.createElement(
                        R,
                        null,
                        i.a.createElement(j, {
                          src: h.a,
                          alt: "Hager screenshot"
                        })
                      )
                    )
                  ),
                  i.a.createElement(
                    P,
                    null,
                    i.a.createElement(
                      q,
                      null,
                      i.a.createElement(
                        R,
                        null,
                        i.a.createElement(j, {
                          src: E.a,
                          alt: "Portfolio screenshot"
                        })
                      ),
                      i.a.createElement(
                        R,
                        null,
                        i.a.createElement(v.b, { bold: !0 }, "This website !"),
                        i.a.createElement(
                          v.f,
                          null,
                          "Created using the portfolio-website-gatsby Gatsby template"
                        ),
                        i.a.createElement(
                          v.f,
                          null,
                          "Gatsby, Responsive design"
                        ),
                        i.a.createElement(
                          s.c,
                          {
                            primary: !0,
                            bold: !0,
                            className: "link",
                            as: "a",
                            href: "https://hugogeorget.github.io/"
                          },
                          "Link"
                        )
                      )
                    )
                  ),
                  i.a.createElement(
                    P,
                    null,
                    i.a.createElement(
                      q,
                      null,
                      i.a.createElement(
                        R,
                        null,
                        i.a.createElement(v.b, { bold: !0 }, "And more !"),
                        i.a.createElement(
                          v.f,
                          null,
                          "Check out my GitHub profile page to see more project I built !"
                        ),
                        i.a.createElement(
                          s.c,
                          {
                            primary: !0,
                            bold: !0,
                            className: "link",
                            as: "a",
                            href:
                              "https://github.com/HugoGEORGET?tab=repositories"
                          },
                          "Link"
                        )
                      )
                    )
                  ),
                  i.a.createElement(
                    W,
                    null,
                    i.a.createElement(
                      v.a,
                      { green: !0 },
                      "Get in touch with me"
                    ),
                    i.a.createElement(
                      v.e,
                      null,
                      "Fancy working with me? Contact me for more info! "
                    ),
                    i.a.createElement(
                      s.b,
                      { onClick: this.openContactPopup, book: !0 },
                      "Contact me"
                    )
                  )
                ),
                i.a.createElement(m.a, {
                  open: e,
                  handleClose: this.handleRequestDemoClose
                })
              );
            }),
            n
          );
        })(i.a.Component);
      t.default = J;
      var A = "1939362812";
    }
  }
]);
//# sourceMappingURL=component---src-pages-index-js-8d90ce1d3933f5ff3a92.js.map
