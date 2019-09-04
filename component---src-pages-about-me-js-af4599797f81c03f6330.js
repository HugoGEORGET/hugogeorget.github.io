(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    241: function(e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "pageQuery", function() {
          return C;
        });
      var a = n(0),
        o = n.n(a),
        i = n(1),
        r = n(73),
        u = n(54),
        p = n(238),
        c = n(237),
        l = n(4),
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
      function b() {
        var e = v(["min-height: 620px;"]);
        return (
          (b = function() {
            return e;
          }),
          e
        );
      }
      function f() {
        var e = v(["background-position: center top 0px;"]);
        return (
          (f = function() {
            return e;
          }),
          e
        );
      }
      function v(e, t) {
        return t || (t = e.slice(0)), (e.raw = t), e;
      }
      var x = i.c.div.withConfig({
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
          r.a,
          u.a,
          u.d,
          l.a.tablet(f())
        ),
        w = i.c.div.withConfig({
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
          r.d,
          u.e,
          l.a.phone(b()),
          l.a.tablet(h()),
          l.a.tablet(g()),
          l.a.tablet(s())
        ),
        y = (function(e) {
          var t, n;
          function a() {
            for (
              var t, n = arguments.length, a = new Array(n), o = 0;
              o < n;
              o++
            )
              a[o] = arguments[o];
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
              return o.a.createElement(
                w,
                null,
                o.a.createElement(
                  p.b,
                  { theme: "white", openContactPopup: this.openContactPopup },
                  o.a.createElement(
                    x,
                    null,
                    o.a.createElement(
                      u.a,
                      { green: !0, align: "center" },
                      "Hugo Georget - Full-stack developer"
                    ),
                    o.a.createElement(
                      u.e,
                      { align: "center", max70: !0 },
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    )
                  ),
                  o.a.createElement(
                    p.a,
                    null,
                    o.a.createElement(m.a, {
                      fluid: t.avatarAbout.childImageSharp.fluid,
                      alt: "Hugo Georget",
                      className: "avatar"
                    })
                  )
                ),
                o.a.createElement(c.a, {
                  open: e,
                  handleClose: this.handleRequestDemoClose
                })
              );
            }),
            a
          );
        })(o.a.Component);
      t.default = y;
      var C = "1481945409";
    }
  }
]);
//# sourceMappingURL=component---src-pages-about-me-js-af4599797f81c03f6330.js.map
