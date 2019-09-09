(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    241: function(e, t, n) {
      "use strict";
      n.r(t);
      var o = n(0),
        p = n.n(o),
        a = n(1),
        r = n(73),
        c = n(39),
        i = n(239),
        s = n(238);
      var u = a.c.div.withConfig({
          displayName: "sc-404__AboveFold",
          componentId: "sc-1x5xsex-0"
        })(["", " padding:157px 0 100px 0;"], r.a),
        l = a.c.div.withConfig({
          displayName: "sc-404__NotFoundPageWrapper",
          componentId: "sc-1x5xsex-1"
        })(
          ["", " .m-b-60{margin-bottom:60px;}", "{margin:0 0 20px 0;}"],
          r.d,
          c.a
        ),
        d = (function(e) {
          var t, n;
          function o() {
            for (
              var t, n = arguments.length, o = new Array(n), p = 0;
              p < n;
              p++
            )
              o[p] = arguments[p];
            return (
              ((t = e.call.apply(e, [this].concat(o)) || this).state = {
                openHireMePopup: !1
              }),
              (t.closeContactPopup = function() {
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
            ((t = o).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n),
            (o.prototype.render = function() {
              var e = this.state.openHireMePopup;
              return p.a.createElement(
                l,
                null,
                p.a.createElement(
                  i.b,
                  { theme: "white", openContactPopup: this.openContactPopup },
                  p.a.createElement(
                    u,
                    null,
                    p.a.createElement(
                      c.a,
                      { green: !0, align: "center" },
                      "404"
                    ),
                    p.a.createElement(
                      c.c,
                      { align: "center", max45: !0 },
                      "Not found"
                    )
                  )
                ),
                p.a.createElement(s.a, {
                  open: e,
                  handleClose: this.closeContactPopup
                })
              );
            }),
            o
          );
        })(p.a.Component);
      t.default = d;
    }
  }
]);
//# sourceMappingURL=component---src-pages-404-js-d7063ca8d5faec41fff4.js.map
