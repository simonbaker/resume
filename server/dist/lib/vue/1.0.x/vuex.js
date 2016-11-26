"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Vuex v0.6.3
 * (c) 2016 Evan You
 * Released under the MIT License.
 */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Vuex = e();
}(undefined, function () {
  "use strict";
  function t(t) {
    return t.reduce(function (t, e) {
      return Object.keys(e).forEach(function (n) {
        var o = t[n];o ? Array.isArray(o) ? o.push(e[n]) : t[n] = [t[n], e[n]] : t[n] = e[n];
      }), t;
    }, {});
  }function e(t) {
    if (Array.isArray(t)) return t.map(e);if (t && "object" === ("undefined" == typeof t ? "undefined" : s["typeof"](t))) {
      for (var n = {}, o = Object.keys(t), r = 0, i = o.length; i > r; r++) {
        var a = o[r];n[a] = e(t[a]);
      }return n;
    }return t;
  }function n(t) {
    if (!u) {
      var e = t.$watch("__vuex__", function (t) {
        return t;
      });u = t._watchers[0].constructor, e();
    }return u;
  }function o(t) {
    return c || (c = t._data.__ob__.dep.constructor), c;
  }function r(t) {
    function e() {
      var t = this.$options,
          e = t.store,
          n = t.vuex;if (e ? this.$store = e : t.parent && t.parent.$store && (this.$store = t.parent.$store), n) {
        this.$store || console.warn("[vuex] store not injected. make sure to provide the store option in your root component.");var o = n.state,
            r = n.getters,
            a = n.actions;if (o && !r && (console.warn("[vuex] vuex.state option will been deprecated in 1.0. Use vuex.getters instead."), r = o), r) {
          t.computed = t.computed || {};for (var u in r) {
            i(this, u, r[u]);
          }
        }if (a) {
          t.methods = t.methods || {};for (var c in a) {
            t.methods[c] = s(this.$store, a[c], c);
          }
        }
      }
    }function r() {
      throw new Error("vuex getter properties are read-only.");
    }function i(t, e, n) {
      "function" != typeof n ? console.warn("[vuex] Getter bound to key 'vuex.getters." + e + "' is not a function.") : Object.defineProperty(t, e, { enumerable: !0, configurable: !0, get: a(t.$store, n), set: r });
    }function a(t, e) {
      var r = t._getterCacheId;if (e[r]) return e[r];var i = t._vm,
          a = n(i),
          s = o(i),
          u = new a(i, function (t) {
        return e(t);
      }, null, { lazy: !0 }),
          c = function c() {
        return u.dirty && u.evaluate(), s.target && u.depend(), u.value;
      };return e[r] = c, c;
    }function s(t, e, n) {
      return "function" != typeof e && console.warn("[vuex] Action bound to key 'vuex.actions." + n + "' is not a function."), function () {
        for (var n = arguments.length, o = Array(n), r = 0; n > r; r++) {
          o[r] = arguments[r];
        }return e.call.apply(e, [this, t].concat(o));
      };
    }var u = t.prototype._init;t.prototype._init = function () {
      var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];t.init = t.init ? [e].concat(t.init) : e, u.call(this, t);
    };var c = t.config.optionMergeStrategies.computed;t.config.optionMergeStrategies.vuex = function (t, e) {
      return t ? e ? { getters: c(t.getters, e.getters), state: c(t.state, e.state), actions: c(t.actions, e.actions) } : t : e;
    };
  }function i(t) {
    return h ? void console.warn("[vuex] already installed. Vue.use(Vuex) should be called only once.") : (h = t, void r(h));
  }function a() {
    console.warn("[vuex] Vuex.createLogger has been deprecated.Use `import createLogger from 'vuex/logger' instead.");
  }var s = {};s["typeof"] = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
    return typeof t === "undefined" ? "undefined" : _typeof(t);
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
  }, s.classCallCheck = function (t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }, s.createClass = function () {
    function t(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
      }
    }return function (e, n, o) {
      return n && t(e.prototype, n), o && t(e, o), e;
    };
  }(), s.toConsumableArray = function (t) {
    if (Array.isArray(t)) {
      for (var e = 0, n = Array(t.length); e < t.length; e++) {
        n[e] = t[e];
      }return n;
    }return Array.from(t);
  };var u = void 0,
      c = void 0,
      f = "undefined" != typeof window && window.__VUE_DEVTOOLS_GLOBAL_HOOK__,
      d = { onInit: function onInit(t, e) {
      f && (f.emit("vuex:init", e), f.on("vuex:travel-to-state", function (t) {
        var n = e._vm._data;e._dispatching = !0, Object.keys(t).forEach(function (e) {
          n[e] = t[e];
        }), e._dispatching = !1;
      }));
    }, onMutation: function onMutation(t, e) {
      f && f.emit("vuex:mutation", t, e);
    } },
      h = void 0,
      l = 0,
      p = function () {
    function o() {
      var t = this,
          e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
          n = e.state,
          r = void 0 === n ? {} : n,
          i = e.mutations,
          a = void 0 === i ? {} : i,
          u = e.modules,
          c = void 0 === u ? {} : u,
          f = e.middlewares,
          d = void 0 === f ? [] : f,
          p = e.strict,
          v = void 0 === p ? !1 : p;s.classCallCheck(this, o), this._getterCacheId = "vuex_store_" + l++, this._dispatching = !1, this._rootMutations = this._mutations = a, this._modules = c;var y = this.dispatch;if (this.dispatch = function () {
        for (var e = arguments.length, n = Array(e), o = 0; e > o; o++) {
          n[o] = arguments[o];
        }y.apply(t, n);
      }, !h) throw new Error("[vuex] must call Vue.use(Vuex) before creating a store instance.");var m = h.config.silent;h.config.silent = !0, this._vm = new h({ data: r }), h.config.silent = m, this._setupModuleState(r, c), this._setupModuleMutations(c), this._setupMiddlewares(d, r), v && this._setupMutationCheck();
    }return s.createClass(o, [{ key: "dispatch", value: function value(t) {
        for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), o = 1; e > o; o++) {
          n[o - 1] = arguments[o];
        }var r = !1;"object" === ("undefined" == typeof t ? "undefined" : s["typeof"](t)) && t.type && 1 === arguments.length && (n = [t.payload], t.silent && (r = !0), t = t.type);var i = this._mutations[t],
            a = this.state;i ? (this._dispatching = !0, Array.isArray(i) ? i.forEach(function (t) {
          return t.apply(void 0, [a].concat(s.toConsumableArray(n)));
        }) : i.apply(void 0, [a].concat(s.toConsumableArray(n))), this._dispatching = !1, r || this._applyMiddlewares(t, n)) : console.warn("[vuex] Unknown mutation: " + t);
      } }, { key: "watch", value: function value(t, e, n) {
        var o = this;return this._vm.$watch(function () {
          return "function" == typeof t ? t(o.state) : o._vm.$get(t);
        }, e, n);
      } }, { key: "hotUpdate", value: function value() {
        var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
            e = t.mutations,
            n = t.modules;this._rootMutations = this._mutations = e || this._rootMutations, this._setupModuleMutations(n || this._modules);
      } }, { key: "_setupModuleState", value: function value(t, e) {
        Object.keys(e).forEach(function (n) {
          h.set(t, n, e[n].state || {});
        });
      } }, { key: "_setupModuleMutations", value: function value(e) {
        var n = this._modules,
            o = [this._rootMutations];Object.keys(e).forEach(function (t) {
          n[t] = e[t];
        }), Object.keys(n).forEach(function (t) {
          var e = n[t];if (e && e.mutations) {
            var r = {};Object.keys(e.mutations).forEach(function (n) {
              var o = e.mutations[n];r[n] = function (e) {
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; n > i; i++) {
                  r[i - 1] = arguments[i];
                }o.apply(void 0, [e[t]].concat(r));
              };
            }), o.push(r);
          }
        }), this._mutations = t(o);
      } }, { key: "_setupMutationCheck", value: function value() {
        var t = this,
            e = n(this._vm);new e(this._vm, "$data", function () {
          if (!t._dispatching) throw new Error("[vuex] Do not mutate vuex store state outside mutation handlers.");
        }, { deep: !0, sync: !0 });
      } }, { key: "_setupMiddlewares", value: function value(t, n) {
        var o = this;this._middlewares = [d].concat(t), this._needSnapshots = t.some(function (t) {
          return t.snapshot;
        }), this._needSnapshots && console.log("[vuex] One or more of your middlewares are taking state snapshots for each mutation. Make sure to use them only during development.");var r = this._prevSnapshot = this._needSnapshots ? e(n) : null;this._middlewares.forEach(function (t) {
          t.onInit && t.onInit(t.snapshot ? r : n, o);
        });
      } }, { key: "_applyMiddlewares", value: function value(t, n) {
        var o = this,
            r = this.state,
            i = this._prevSnapshot,
            a = void 0,
            s = void 0;this._needSnapshots && (a = this._prevSnapshot = e(r), s = e(n)), this._middlewares.forEach(function (e) {
          e.onMutation && (e.snapshot ? e.onMutation({ type: t, payload: s }, a, i, o) : e.onMutation({ type: t, payload: n }, r, o));
        });
      } }, { key: "state", get: function get() {
        return this._vm._data;
      }, set: function set(t) {
        throw new Error("[vuex] Vuex root state is read only.");
      } }]), o;
  }();"undefined" != typeof window && window.Vue && i(window.Vue);var v = { Store: p, install: i, createLogger: a };return v;
});