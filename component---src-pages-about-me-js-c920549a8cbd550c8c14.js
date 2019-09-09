(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    241: function(e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "pageQuery", function() {
          return y;
        });
      var a = n(0),
        r = n.n(a),
        o = n(1),
        i = n(73),
        l = n(54),
        c = n(238),
        u = n(237),
        p = n(4),
        d = n(239),
        m = n.n(d);
      function s() {
        var e = v(["max-width: 70%;"]);
        return (
          (s = function() {
            return e;
          }),
          e
        );
      }
      function g() {
        var e = v(["max-width: 80%;"]);
        return (
          (g = function() {
            return e;
          }),
          e
        );
      }
      function h() {
        var e = v(["text-align: center;"]);
        return (
          (h = function() {
            return e;
          }),
          e
        );
      }
      function f() {
        var e = v(["min-height: 620px;"]);
        return (
          (f = function() {
            return e;
          }),
          e
        );
      }
      function b() {
        var e = v(["background-position: center top 0px;"]);
        return (
          (b = function() {
            return e;
          }),
          e
        );
      }
      function v(e, t) {
        return t || (t = e.slice(0)), (e.raw = t), e;
      }
      var w = o.c.div.withConfig({
          displayName: "about-me__AboveFold",
          componentId: "sc-1gdlebh-0"
        })(
          [
            "",
            " padding-bottom:100px;",
            "{margin-bottom:25px;}",
            "{line-height:1.14;}",
            ";"
          ],
          i.a,
          l.a,
          l.d,
          p.a.tablet(b())
        ),
        x = o.c.div.withConfig({
          displayName: "about-me__AboutMeWrapper",
          componentId: "sc-1gdlebh-1"
        })(
          [
            "",
            " .m-b-60{margin-bottom:60px;}",
            "{margin-bottom:28px;}.background{position:absolute;top:0;left:0;right:0;z-index:-1;min-height:540px;",
            ";}.gatsby-image{",
            " div{padding:0;}picture img{max-width:85%;position:relative;",
            "}}.avatar{max-width:400px;width:80%;margin:0 auto 100px auto;border-radius:50%;display:block;",
            "}"
          ],
          i.d,
          l.e,
          p.a.phone(f()),
          p.a.tablet(h()),
          p.a.tablet(g()),
          p.a.tablet(s())
        ),
        E = (function(e) {
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
                x,
                null,
                r.a.createElement(
                  c.b,
                  { theme: "white", openContactPopup: this.openContactPopup },
                  r.a.createElement(
                    w,
                    null,
                    r.a.createElement(
                      l.a,
                      { green: !0, align: "center" },
                      "Hugo Georget - Full-stack developer"
                    ),
                    r.a.createElement(
                      l.e,
                      { align: "center", max70: !0 },
                      "Having graduated from ISEP engineering school with a degree in software engineering, I have since accumulated various experiences in the field of computer science."
                    ),
                    r.a.createElement(l.b, null, "Location"),
                    r.a.createElement(
                      l.f,
                      null,
                      "I currently live in Issy-les-Moulineaux, in the Parisian region."
                    ),
                    r.a.createElement(
                      l.b,
                      null,
                      "Monitoring technological developments"
                    ),
                    r.a.createElement(
                      l.f,
                      { align: "center" },
                      "I intend to follow the latest trends in development.",
                      r.a.createElement("br", null),
                      "My information channels include",
                      " ",
                      r.a.createElement(
                        "a",
                        { href: "https://dev.to/", target: "_blank" },
                        "dev.to"
                      ),
                      " ",
                      "and the",
                      " ",
                      r.a.createElement(
                        "a",
                        {
                          href: "https://www.reddit.com/r/programming/",
                          target: "_blank"
                        },
                        "/r/Programming subreddit"
                      )
                    )
                  ),
                  r.a.createElement(
                    c.a,
                    null,
                    r.a.createElement(m.a, {
                      fluid: t.avatarAbout.childImageSharp.fluid,
                      alt: "Hugo Georget",
                      className: "avatar"
                    })
                  )
                ),
                r.a.createElement(u.a, {
                  open: e,
                  handleClose: this.handleRequestDemoClose
                })
              );
            }),
            a
          );
        })(r.a.Component);
      t.default = E;
      var y = "1481945409";
    }
  }
]);
//# sourceMappingURL=component---src-pages-about-me-js-c920549a8cbd550c8c14.js.map
