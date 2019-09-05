(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    242: function(e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "pageQuery", function() {
          return F;
        });
      var n = a(239),
        r = a.n(n),
        o = a(10),
        i = a(0),
        l = a.n(i),
        c = a(1),
        p = a(2),
        s = a(58),
        m = a(237),
        u = a(238),
        d = a(243),
        g = a.n(d),
        h = a(244),
        f = a.n(h),
        b = a(4),
        x = a(73),
        w = a(54);
      function E() {
        var e = H([
          "\n    width: auto;\n    padding: 40px;\n    margin: 50px 30px -100px 30px;\n  "
        ]);
        return (
          (E = function() {
            return e;
          }),
          e
        );
      }
      function v() {
        var e = H(["max-width: 70%;"]);
        return (
          (v = function() {
            return e;
          }),
          e
        );
      }
      function y() {
        var e = H(["max-width: none;"]);
        return (
          (y = function() {
            return e;
          }),
          e
        );
      }
      function k() {
        var e = H(["\n      margin-bottom: 40px;\n  "]);
        return (
          (k = function() {
            return e;
          }),
          e
        );
      }
      function C() {
        var e = H(["padding: 50px 0;"]);
        return (
          (C = function() {
            return e;
          }),
          e
        );
      }
      function _() {
        var e = H(["\n    padding: 40px 10px;\n  "]);
        return (
          (_ = function() {
            return e;
          }),
          e
        );
      }
      function I() {
        var e = H([
          "\n    flex-direction: column;\n    align-items: baseline;\n  "
        ]);
        return (
          (I = function() {
            return e;
          }),
          e
        );
      }
      function H(e, t) {
        return t || (t = e.slice(0)), (e.raw = t), e;
      }
      var N = c.c.div.withConfig({
          displayName: "pages__AboveFold",
          componentId: "sc-13he07q-0"
        })(
          ["", " padding:140px 0 60px 0;", "{color:", ";}"],
          x.a,
          w.a,
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
        S = Object(c.c)(u.a).withConfig({
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
          b.a.tablet(I()),
          b.a.phone(_()),
          w.f,
          w.b
        ),
        q = c.c.div.withConfig({
          displayName: "pages__DivWrapper",
          componentId: "sc-13he07q-3"
        })(
          ["padding:80px 30px;", " &:first-child{", ";}"],
          b.a.tablet(C()),
          b.a.tablet(k())
        ),
        G = c.c.img.withConfig({
          displayName: "pages__ItemImage",
          componentId: "sc-13he07q-4"
        })(["max-width:85%;position:relative;", ""], b.a.tablet(y())),
        M = c.c.div.withConfig({
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
          w.e,
          w.a,
          b.a.tablet(v()),
          p.a.darkest
        ),
        j = c.c.div.withConfig({
          displayName: "pages__WorkWithMe",
          componentId: "sc-13he07q-6"
        })(
          [
            "padding:80px;width:73%;border-radius:6px;box-shadow:0 2px 26px 0 rgba(57,55,55,0.08);background-color:#ffffff;text-align:center;position:relative;margin:100px auto -150px auto;",
            "{max-width:80%;margin:0 auto 28px auto;}",
            ";"
          ],
          w.e,
          b.a.tablet(E())
        ),
        A = (function(e) {
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
                M,
                null,
                l.a.createElement(
                  u.b,
                  {
                    theme: "white",
                    bigFooter: !0,
                    openContactPopup: this.openContactPopup
                  },
                  l.a.createElement(
                    N,
                    null,
                    l.a.createElement(r.a, {
                      fluid: t.avatarHomepage.childImageSharp.fluid,
                      alt: "Hugo Georget",
                      className: "avatar"
                    }),
                    l.a.createElement(
                      w.a,
                      { primary: !0, align: "center" },
                      "Hugo Georget"
                    ),
                    l.a.createElement(
                      w.e,
                      { align: "center", max45: !0 },
                      "Front-end developer with an experience in back-end."
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
                      w.b,
                      { primary: !0, align: "center", bold: !0 },
                      "Why hire me?"
                    ),
                    l.a.createElement(
                      w.f,
                      { align: "center", max70: !0, className: "who-desc" },
                      "I have years of experience mostly in front-en development (ReactJS, HTML, CSS) but with some knowledge in back-end (Java, Python) as well."
                    ),
                    l.a.createElement(
                      w.b,
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
                    P,
                    null,
                    l.a.createElement(
                      S,
                      null,
                      l.a.createElement(
                        q,
                        null,
                        l.a.createElement(G, {
                          src: f.a,
                          alt: "Société Générale Careers screenshot"
                        })
                      ),
                      l.a.createElement(
                        q,
                        null,
                        l.a.createElement(
                          w.b,
                          { bold: !0 },
                          "Société Générale Careers"
                        ),
                        l.a.createElement(
                          w.f,
                          null,
                          "Implementation of the Algolia search engine using the Instantsearch.js library"
                        ),
                        l.a.createElement(
                          w.f,
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
                    P,
                    null,
                    l.a.createElement(
                      S,
                      null,
                      l.a.createElement(
                        q,
                        null,
                        l.a.createElement(
                          w.b,
                          { bold: !0 },
                          "Hager inspiration engine"
                        ),
                        l.a.createElement(
                          w.f,
                          null,
                          "Implementation of Algolia search engine using the React Instantsearch library"
                        ),
                        l.a.createElement(
                          w.f,
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
                        q,
                        null,
                        l.a.createElement(G, {
                          src: g.a,
                          alt: "Hager screenshot"
                        })
                      )
                    )
                  ),
                  l.a.createElement(
                    j,
                    null,
                    l.a.createElement(
                      w.a,
                      { green: !0 },
                      "Get in touch with me"
                    ),
                    l.a.createElement(
                      w.e,
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
      t.default = A;
      var F = "4273871663";
    },
    243: function(e, t, a) {
      e.exports = a.p + "static/Hager-43f83f7285957bb82db9bd9c8589e301.png";
    },
    244: function(e, t, a) {
      e.exports =
        a.p + "static/SG_Careers-0201148bf85481410187d7ac4f6b3f8b.png";
    }
  }
]);
//# sourceMappingURL=component---src-pages-index-js-c9d086f5e115e1097ef7.js.map
