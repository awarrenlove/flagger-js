!(function(e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
      ? define(t)
      : (e.Flagger = t())
})(this, function() {
  'use strict'
  var d =
    'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
        ? global
        : 'undefined' != typeof self
          ? self
          : {}
  function e(e, t) {
    return e((t = {exports: {}}), t.exports), t.exports
  }
  var v = e(function(e) {
      var t = (e.exports =
        'undefined' != typeof window && window.Math == Math
          ? window
          : 'undefined' != typeof self && self.Math == Math
            ? self
            : Function('return this')())
      'number' == typeof __g && (__g = t)
    }),
    m = e(function(e) {
      var t = (e.exports = {version: '2.5.7'})
      'number' == typeof __e && (__e = t)
    }),
    i = (m.version,
    function(e) {
      if ('function' != typeof e) throw TypeError(e + ' is not a function!')
      return e
    }),
    g = function(n, a, e) {
      if ((i(n), void 0 === a)) return n
      switch (e) {
        case 1:
          return function(e) {
            return n.call(a, e)
          }
        case 2:
          return function(e, t) {
            return n.call(a, e, t)
          }
        case 3:
          return function(e, t, r) {
            return n.call(a, e, t, r)
          }
      }
      return function() {
        return n.apply(a, arguments)
      }
    },
    u = function(e) {
      return 'object' == typeof e ? null !== e : 'function' == typeof e
    },
    y = function(e) {
      if (!u(e)) throw TypeError(e + ' is not an object!')
      return e
    },
    l = function(e) {
      try {
        return !!e()
      } catch (e) {
        return !0
      }
    },
    s = !l(function() {
      return (
        7 !=
        Object.defineProperty({}, 'a', {
          get: function() {
            return 7
          }
        }).a
      )
    }),
    t = v.document,
    r = u(t) && u(t.createElement),
    n = function(e) {
      return r ? t.createElement(e) : {}
    },
    a =
      !s &&
      !l(function() {
        return (
          7 !=
          Object.defineProperty(n('div'), 'a', {
            get: function() {
              return 7
            }
          }).a
        )
      }),
    o = function(e, t) {
      if (!u(e)) return e
      var r, n
      if (t && 'function' == typeof (r = e.toString) && !u((n = r.call(e))))
        return n
      if ('function' == typeof (r = e.valueOf) && !u((n = r.call(e)))) return n
      if (!t && 'function' == typeof (r = e.toString) && !u((n = r.call(e))))
        return n
      throw TypeError("Can't convert object to primitive value")
    },
    h = Object.defineProperty,
    c = {
      f: s
        ? Object.defineProperty
        : function(e, t, r) {
            if ((y(e), (t = o(t, !0)), y(r), a))
              try {
                return h(e, t, r)
              } catch (e) {}
            if ('get' in r || 'set' in r)
              throw TypeError('Accessors not supported!')
            return 'value' in r && (e[t] = r.value), e
          }
    },
    E = function(e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t
      }
    },
    P = s
      ? function(e, t, r) {
          return c.f(e, t, E(1, r))
        }
      : function(e, t, r) {
          return (e[t] = r), e
        },
    f = {}.hasOwnProperty,
    b = function(e, t) {
      return f.call(e, t)
    },
    w = 'prototype',
    _ = function(e, t, r) {
      var n,
        a,
        o,
        i = e & _.F,
        s = e & _.G,
        u = e & _.S,
        l = e & _.P,
        h = e & _.B,
        c = e & _.W,
        f = s ? m : m[t] || (m[t] = {}),
        p = f[w],
        d = s ? v : u ? v[t] : (v[t] || {})[w]
      for (n in (s && (r = t), r))
        ((a = !i && d && void 0 !== d[n]) && b(f, n)) ||
          ((o = a ? d[n] : r[n]),
          (f[n] =
            s && 'function' != typeof d[n]
              ? r[n]
              : h && a
                ? g(o, v)
                : c && d[n] == o
                  ? (function(n) {
                      var e = function(e, t, r) {
                        if (this instanceof n) {
                          switch (arguments.length) {
                            case 0:
                              return new n()
                            case 1:
                              return new n(e)
                            case 2:
                              return new n(e, t)
                          }
                          return new n(e, t, r)
                        }
                        return n.apply(this, arguments)
                      }
                      return (e[w] = n[w]), e
                    })(o)
                  : l && 'function' == typeof o
                    ? g(Function.call, o)
                    : o),
          l &&
            (((f.virtual || (f.virtual = {}))[n] = o),
            e & _.R && p && !p[n] && P(p, n, o)))
    }
  ;(_.F = 1),
    (_.G = 2),
    (_.S = 4),
    (_.P = 8),
    (_.B = 16),
    (_.W = 32),
    (_.U = 64),
    (_.R = 128)
  var p,
    S = _,
    x = {}.toString,
    R = function(e) {
      return x.call(e).slice(8, -1)
    },
    O = Object('z').propertyIsEnumerable(0)
      ? Object
      : function(e) {
          return 'String' == R(e) ? e.split('') : Object(e)
        },
    k = function(e) {
      if (null == e) throw TypeError("Can't call method on  " + e)
      return e
    },
    T = function(e) {
      return O(k(e))
    },
    A = Math.ceil,
    j = Math.floor,
    I = function(e) {
      return isNaN((e = +e)) ? 0 : (0 < e ? j : A)(e)
    },
    C = Math.min,
    L = function(e) {
      return 0 < e ? C(I(e), 9007199254740991) : 0
    },
    D = Math.max,
    F = Math.min,
    M = function(e, t) {
      return (e = I(e)) < 0 ? D(e + t, 0) : F(e, t)
    },
    $ = e(function(e) {
      var t = '__core-js_shared__',
        r = v[t] || (v[t] = {})
      ;(e.exports = function(e, t) {
        return r[e] || (r[e] = void 0 !== t ? t : {})
      })('versions', []).push({
        version: m.version,
        mode: 'pure',
        copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
      })
    }),
    U = 0,
    N = Math.random(),
    z = function(e) {
      return 'Symbol('.concat(
        void 0 === e ? '' : e,
        ')_',
        (++U + N).toString(36)
      )
    },
    q = $('keys'),
    B = function(e) {
      return q[e] || (q[e] = z(e))
    },
    H = ((p = !1),
    function(e, t, r) {
      var n,
        a = T(e),
        o = L(a.length),
        i = M(r, o)
      if (p && t != t) {
        for (; i < o; ) if ((n = a[i++]) != n) return !0
      } else
        for (; i < o; i++) if ((p || i in a) && a[i] === t) return p || i || 0
      return !p && -1
    }),
    V = B('IE_PROTO'),
    Q = function(e, t) {
      var r,
        n = T(e),
        a = 0,
        o = []
      for (r in n) r != V && b(n, r) && o.push(r)
      for (; t.length > a; ) b(n, (r = t[a++])) && (~H(o, r) || o.push(r))
      return o
    },
    G = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
      ','
    ),
    K =
      Object.keys ||
      function(e) {
        return Q(e, G)
      },
    Y = {f: Object.getOwnPropertySymbols},
    W = {f: {}.propertyIsEnumerable},
    Z = function(e) {
      return Object(k(e))
    },
    J = Object.assign,
    X =
      !J ||
      l(function() {
        var e = {},
          t = {},
          r = Symbol(),
          n = 'abcdefghijklmnopqrst'
        return (
          (e[r] = 7),
          n.split('').forEach(function(e) {
            t[e] = e
          }),
          7 != J({}, e)[r] || Object.keys(J({}, t)).join('') != n
        )
      })
        ? function(e, t) {
            for (
              var r = Z(e), n = arguments.length, a = 1, o = Y.f, i = W.f;
              a < n;

            )
              for (
                var s,
                  u = O(arguments[a++]),
                  l = o ? K(u).concat(o(u)) : K(u),
                  h = l.length,
                  c = 0;
                c < h;

              )
                i.call(u, (s = l[c++])) && (r[s] = u[s])
            return r
          }
        : J
  S(S.S + S.F, 'Object', {assign: X})
  var ee = m.Object.assign,
    te = function(e, t) {
      var r = (m.Object || {})[e] || Object[e],
        n = {}
      ;(n[e] = t(r)),
        S(
          S.S +
            S.F *
              l(function() {
                r(1)
              }),
          'Object',
          n
        )
    },
    re = G.concat('length', 'prototype'),
    ne = {
      f:
        Object.getOwnPropertyNames ||
        function(e) {
          return Q(e, re)
        }
    },
    ae = ne.f,
    oe = {}.toString,
    ie =
      'object' == typeof window && window && Object.getOwnPropertyNames
        ? Object.getOwnPropertyNames(window)
        : [],
    se = function(e) {
      try {
        return ae(e)
      } catch (e) {
        return ie.slice()
      }
    },
    ue = {
      f: function(e) {
        return ie && '[object Window]' == oe.call(e) ? se(e) : ae(T(e))
      }
    }
  te('getOwnPropertyNames', function() {
    return ue.f
  })
  var le = m.Object,
    he = function(e) {
      return le.getOwnPropertyNames(e)
    }
  function pe(e) {
    return (pe =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function(e) {
            return typeof e
          }
        : function(e) {
            return e &&
              'function' == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e
          })(e)
  }
  function ce(e, t, r, n, a, o, i) {
    try {
      var s = e[o](i),
        u = s.value
    } catch (e) {
      return void r(e)
    }
    s.done ? t(u) : Promise.resolve(u).then(n, a)
  }
  function fe(s) {
    return function() {
      var e = this,
        i = arguments
      return new Promise(function(t, r) {
        var n = s.apply(e, i)
        function a(e) {
          ce(n, t, r, a, o, 'next', e)
        }
        function o(e) {
          ce(n, t, r, a, o, 'throw', e)
        }
        a(void 0)
      })
    }
  }
  function de(e, t) {
    if (!(e instanceof t))
      throw new TypeError('Cannot call a class as a function')
  }
  function ve(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r]
      ;(n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        'value' in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n)
    }
  }
  function me(e, t, r) {
    return t && ve(e.prototype, t), r && ve(e, r), e
  }
  function ge(e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
          })
        : (e[t] = r),
      e
    )
  }
  function ye(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {},
        n = Object.keys(r)
      'function' == typeof Object.getOwnPropertySymbols &&
        (n = n.concat(
          Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          })
        )),
        n.forEach(function(e) {
          ge(t, e, r[e])
        })
    }
    return t
  }
  function be(e, t) {
    if ('function' != typeof t && null !== t)
      throw new TypeError('Super expression must either be null or a function')
    ;(e.prototype = Object.create(t && t.prototype, {
      constructor: {value: e, writable: !0, configurable: !0}
    })),
      t && _e(e, t)
  }
  function we(e) {
    return (we = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
  }
  function _e(e, t) {
    return (_e =
      Object.setPrototypeOf ||
      function(e, t) {
        return (e.__proto__ = t), e
      })(e, t)
  }
  function Ee(e) {
    if (void 0 === e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      )
    return e
  }
  function Pe(e, t) {
    return !t || ('object' != typeof t && 'function' != typeof t) ? Ee(e) : t
  }
  var Se = P,
    xe = {},
    Re = s
      ? Object.defineProperties
      : function(e, t) {
          y(e)
          for (var r, n = K(t), a = n.length, o = 0; o < a; )
            c.f(e, (r = n[o++]), t[r])
          return e
        },
    Oe = v.document,
    ke = Oe && Oe.documentElement,
    Te = B('IE_PROTO'),
    Ae = function() {},
    je = 'prototype',
    Ie = function() {
      var e,
        t = n('iframe'),
        r = G.length
      for (
        t.style.display = 'none',
          ke.appendChild(t),
          t.src = 'javascript:',
          (e = t.contentWindow.document).open(),
          e.write('<script>document.F=Object</script>'),
          e.close(),
          Ie = e.F;
        r--;

      )
        delete Ie[je][G[r]]
      return Ie()
    },
    Ce =
      Object.create ||
      function(e, t) {
        var r
        return (
          null !== e
            ? ((Ae[je] = y(e)), (r = new Ae()), (Ae[je] = null), (r[Te] = e))
            : (r = Ie()),
          void 0 === t ? r : Re(r, t)
        )
      },
    Le = e(function(e) {
      var t = $('wks'),
        r = v.Symbol,
        n = 'function' == typeof r
      ;(e.exports = function(e) {
        return t[e] || (t[e] = (n && r[e]) || (n ? r : z)('Symbol.' + e))
      }).store = t
    }),
    De = c.f,
    Fe = Le('toStringTag'),
    Me = function(e, t, r) {
      e &&
        !b((e = r ? e : e.prototype), Fe) &&
        De(e, Fe, {configurable: !0, value: t})
    },
    $e = {}
  P($e, Le('iterator'), function() {
    return this
  })
  var Ue,
    Ne = B('IE_PROTO'),
    ze = Object.prototype,
    qe =
      Object.getPrototypeOf ||
      function(e) {
        return (
          (e = Z(e)),
          b(e, Ne)
            ? e[Ne]
            : 'function' == typeof e.constructor && e instanceof e.constructor
              ? e.constructor.prototype
              : e instanceof Object
                ? ze
                : null
        )
      },
    Be = Le('iterator'),
    He = !([].keys && 'next' in [].keys()),
    Ve = 'values',
    Qe = function() {
      return this
    },
    Ge = function(e, t, r, n, a, o, i) {
      var s, u, l
      ;(u = t),
        (l = n),
        ((s = r).prototype = Ce($e, {next: E(1, l)})),
        Me(s, u + ' Iterator')
      var h,
        c,
        f,
        p = function(e) {
          if (!He && e in g) return g[e]
          switch (e) {
            case 'keys':
            case Ve:
              return function() {
                return new r(this, e)
              }
          }
          return function() {
            return new r(this, e)
          }
        },
        d = t + ' Iterator',
        v = a == Ve,
        m = !1,
        g = e.prototype,
        y = g[Be] || g['@@iterator'] || (a && g[a]),
        b = y || p(a),
        w = a ? (v ? p('entries') : b) : void 0,
        _ = ('Array' == t && g.entries) || y
      if (
        (_ &&
          (f = qe(_.call(new e()))) !== Object.prototype &&
          f.next &&
          Me(f, d, !0),
        v &&
          y &&
          y.name !== Ve &&
          ((m = !0),
          (b = function() {
            return y.call(this)
          })),
        i && (He || m || !g[Be]) && P(g, Be, b),
        (xe[t] = b),
        (xe[d] = Qe),
        a)
      )
        if (
          ((h = {values: v ? b : p(Ve), keys: o ? b : p('keys'), entries: w}),
          i)
        )
          for (c in h) c in g || Se(g, c, h[c])
        else S(S.P + S.F * (He || m), t, h)
      return h
    },
    Ke = ((Ue = !0),
    function(e, t) {
      var r,
        n,
        a = String(k(e)),
        o = I(t),
        i = a.length
      return o < 0 || i <= o
        ? Ue
          ? ''
          : void 0
        : (r = a.charCodeAt(o)) < 55296 ||
          56319 < r ||
          o + 1 === i ||
          (n = a.charCodeAt(o + 1)) < 56320 ||
          57343 < n
          ? Ue
            ? a.charAt(o)
            : r
          : Ue
            ? a.slice(o, o + 2)
            : n - 56320 + ((r - 55296) << 10) + 65536
    })
  Ge(
    String,
    'String',
    function(e) {
      ;(this._t = String(e)), (this._i = 0)
    },
    function() {
      var e,
        t = this._t,
        r = this._i
      return r >= t.length
        ? {value: void 0, done: !0}
        : ((e = Ke(t, r)), (this._i += e.length), {value: e, done: !1})
    }
  )
  var Ye = function(e, t) {
    return {value: t, done: !!e}
  }
  Ge(
    Array,
    'Array',
    function(e, t) {
      ;(this._t = T(e)), (this._i = 0), (this._k = t)
    },
    function() {
      var e = this._t,
        t = this._k,
        r = this._i++
      return !e || r >= e.length
        ? ((this._t = void 0), Ye(1))
        : Ye(0, 'keys' == t ? r : 'values' == t ? e[r] : [r, e[r]])
    },
    'values'
  )
  xe.Arguments = xe.Array
  for (
    var We = Le('toStringTag'),
      Ze = 'CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList'.split(
        ','
      ),
      Je = 0;
    Je < Ze.length;
    Je++
  ) {
    var Xe = Ze[Je],
      et = v[Xe],
      tt = et && et.prototype
    tt && !tt[We] && P(tt, We, Xe), (xe[Xe] = xe.Array)
  }
  var rt,
    nt,
    at,
    ot = Le('toStringTag'),
    it =
      'Arguments' ==
      R(
        (function() {
          return arguments
        })()
      ),
    st = function(e, t) {
      try {
        return e[t]
      } catch (e) {}
    },
    ut = function(e) {
      var t, r, n
      return void 0 === e
        ? 'Undefined'
        : null === e
          ? 'Null'
          : 'string' == typeof (r = st((t = Object(e)), ot))
            ? r
            : it
              ? R(t)
              : 'Object' == (n = R(t)) && 'function' == typeof t.callee
                ? 'Arguments'
                : n
    },
    lt = function(e, t, r, n) {
      if (!(e instanceof t) || (void 0 !== n && n in e))
        throw TypeError(r + ': incorrect invocation!')
      return e
    },
    ht = function(t, e, r, n) {
      try {
        return n ? e(y(r)[0], r[1]) : e(r)
      } catch (e) {
        var a = t.return
        throw (void 0 !== a && y(a.call(t)), e)
      }
    },
    ct = Le('iterator'),
    ft = Array.prototype,
    pt = function(e) {
      return void 0 !== e && (xe.Array === e || ft[ct] === e)
    },
    dt = Le('iterator'),
    vt = (m.getIteratorMethod = function(e) {
      if (null != e) return e[dt] || e['@@iterator'] || xe[ut(e)]
    }),
    mt = e(function(e) {
      var f = {},
        p = {},
        t = (e.exports = function(e, t, r, n, a) {
          var o,
            i,
            s,
            u,
            l = a
              ? function() {
                  return e
                }
              : vt(e),
            h = g(r, n, t ? 2 : 1),
            c = 0
          if ('function' != typeof l) throw TypeError(e + ' is not iterable!')
          if (pt(l)) {
            for (o = L(e.length); c < o; c++)
              if (
                (u = t ? h(y((i = e[c]))[0], i[1]) : h(e[c])) === f ||
                u === p
              )
                return u
          } else
            for (s = l.call(e); !(i = s.next()).done; )
              if ((u = ht(s, h, i.value, t)) === f || u === p) return u
        })
      ;(t.BREAK = f), (t.RETURN = p)
    }),
    gt = Le('species'),
    yt = function(e, t) {
      var r,
        n = y(e).constructor
      return void 0 === n || null == (r = y(n)[gt]) ? t : i(r)
    },
    bt = function(e, t, r) {
      var n = void 0 === r
      switch (t.length) {
        case 0:
          return n ? e() : e.call(r)
        case 1:
          return n ? e(t[0]) : e.call(r, t[0])
        case 2:
          return n ? e(t[0], t[1]) : e.call(r, t[0], t[1])
        case 3:
          return n ? e(t[0], t[1], t[2]) : e.call(r, t[0], t[1], t[2])
        case 4:
          return n
            ? e(t[0], t[1], t[2], t[3])
            : e.call(r, t[0], t[1], t[2], t[3])
      }
      return e.apply(r, t)
    },
    wt = v.process,
    _t = v.setImmediate,
    Et = v.clearImmediate,
    Pt = v.MessageChannel,
    St = v.Dispatch,
    xt = 0,
    Rt = {},
    Ot = 'onreadystatechange',
    kt = function() {
      var e = +this
      if (Rt.hasOwnProperty(e)) {
        var t = Rt[e]
        delete Rt[e], t()
      }
    },
    Tt = function(e) {
      kt.call(e.data)
    }
  ;(_t && Et) ||
    ((_t = function(e) {
      for (var t = [], r = 1; arguments.length > r; ) t.push(arguments[r++])
      return (
        (Rt[++xt] = function() {
          bt('function' == typeof e ? e : Function(e), t)
        }),
        rt(xt),
        xt
      )
    }),
    (Et = function(e) {
      delete Rt[e]
    }),
    'process' == R(wt)
      ? (rt = function(e) {
          wt.nextTick(g(kt, e, 1))
        })
      : St && St.now
        ? (rt = function(e) {
            St.now(g(kt, e, 1))
          })
        : Pt
          ? ((at = (nt = new Pt()).port2),
            (nt.port1.onmessage = Tt),
            (rt = g(at.postMessage, at, 1)))
          : v.addEventListener &&
            'function' == typeof postMessage &&
            !v.importScripts
            ? ((rt = function(e) {
                v.postMessage(e + '', '*')
              }),
              v.addEventListener('message', Tt, !1))
            : (rt =
                Ot in n('script')
                  ? function(e) {
                      ke.appendChild(n('script'))[Ot] = function() {
                        ke.removeChild(this), kt.call(e)
                      }
                    }
                  : function(e) {
                      setTimeout(g(kt, e, 1), 0)
                    }))
  var At = {set: _t, clear: Et},
    jt = At.set,
    It = v.MutationObserver || v.WebKitMutationObserver,
    Ct = v.process,
    Lt = v.Promise,
    Dt = 'process' == R(Ct)
  function Ft(e) {
    var r, n
    ;(this.promise = new e(function(e, t) {
      if (void 0 !== r || void 0 !== n)
        throw TypeError('Bad Promise constructor')
      ;(r = e), (n = t)
    })),
      (this.resolve = i(r)),
      (this.reject = i(n))
  }
  var Mt = {
      f: function(e) {
        return new Ft(e)
      }
    },
    $t = function(e) {
      try {
        return {e: !1, v: e()}
      } catch (e) {
        return {e: !0, v: e}
      }
    },
    Ut = v.navigator,
    Nt = (Ut && Ut.userAgent) || '',
    zt = function(e, t) {
      if ((y(e), u(t) && t.constructor === e)) return t
      var r = Mt.f(e)
      return (0, r.resolve)(t), r.promise
    },
    qt = function(e, t, r) {
      for (var n in t) r && e[n] ? (e[n] = t[n]) : P(e, n, t[n])
      return e
    },
    Bt = Le('species'),
    Ht = function(e) {
      var t = 'function' == typeof m[e] ? m[e] : v[e]
      s &&
        t &&
        !t[Bt] &&
        c.f(t, Bt, {
          configurable: !0,
          get: function() {
            return this
          }
        })
    },
    Vt = Le('iterator'),
    Qt = !1
  try {
    ;[7][Vt]().return = function() {
      Qt = !0
    }
  } catch (e) {}
  var Gt,
    Kt,
    Yt,
    Wt,
    Zt = function(e, t) {
      if (!t && !Qt) return !1
      var r = !1
      try {
        var n = [7],
          a = n[Vt]()
        ;(a.next = function() {
          return {done: (r = !0)}
        }),
          (n[Vt] = function() {
            return a
          }),
          e(n)
      } catch (e) {}
      return r
    },
    Jt = At.set,
    Xt = (function() {
      var r,
        n,
        a,
        e = function() {
          var e, t
          for (Dt && (e = Ct.domain) && e.exit(); r; ) {
            ;(t = r.fn), (r = r.next)
            try {
              t()
            } catch (e) {
              throw (r ? a() : (n = void 0), e)
            }
          }
          ;(n = void 0), e && e.enter()
        }
      if (Dt)
        a = function() {
          Ct.nextTick(e)
        }
      else if (!It || (v.navigator && v.navigator.standalone))
        if (Lt && Lt.resolve) {
          var t = Lt.resolve(void 0)
          a = function() {
            t.then(e)
          }
        } else
          a = function() {
            jt.call(v, e)
          }
      else {
        var o = !0,
          i = document.createTextNode('')
        new It(e).observe(i, {characterData: !0}),
          (a = function() {
            i.data = o = !o
          })
      }
      return function(e) {
        var t = {fn: e, next: void 0}
        n && (n.next = t), r || ((r = t), a()), (n = t)
      }
    })(),
    er = 'Promise',
    tr = v.TypeError,
    rr = v.process,
    nr = rr && rr.versions,
    ar = (nr && nr.v8) || '',
    or = v[er],
    ir = 'process' == ut(rr),
    sr = function() {},
    ur = (Kt = Mt.f),
    lr = !!(function() {
      try {
        var e = or.resolve(1),
          t = ((e.constructor = {})[Le('species')] = function(e) {
            e(sr, sr)
          })
        return (
          (ir || 'function' == typeof PromiseRejectionEvent) &&
          e.then(sr) instanceof t &&
          0 !== ar.indexOf('6.6') &&
          -1 === Nt.indexOf('Chrome/66')
        )
      } catch (e) {}
    })(),
    hr = function(e) {
      var t
      return !(!u(e) || 'function' != typeof (t = e.then)) && t
    },
    cr = function(h, r) {
      if (!h._n) {
        h._n = !0
        var n = h._c
        Xt(function() {
          for (
            var u = h._v,
              l = 1 == h._s,
              e = 0,
              t = function(e) {
                var t,
                  r,
                  n,
                  a = l ? e.ok : e.fail,
                  o = e.resolve,
                  i = e.reject,
                  s = e.domain
                try {
                  a
                    ? (l || (2 == h._h && dr(h), (h._h = 1)),
                      !0 === a
                        ? (t = u)
                        : (s && s.enter(),
                          (t = a(u)),
                          s && (s.exit(), (n = !0))),
                      t === e.promise
                        ? i(tr('Promise-chain cycle'))
                        : (r = hr(t))
                          ? r.call(t, o, i)
                          : o(t))
                    : i(u)
                } catch (e) {
                  s && !n && s.exit(), i(e)
                }
              };
            n.length > e;

          )
            t(n[e++])
          ;(h._c = []), (h._n = !1), r && !h._h && fr(h)
        })
      }
    },
    fr = function(o) {
      Jt.call(v, function() {
        var e,
          t,
          r,
          n = o._v,
          a = pr(o)
        if (
          (a &&
            ((e = $t(function() {
              ir
                ? rr.emit('unhandledRejection', n, o)
                : (t = v.onunhandledrejection)
                  ? t({promise: o, reason: n})
                  : (r = v.console) &&
                    r.error &&
                    r.error('Unhandled promise rejection', n)
            })),
            (o._h = ir || pr(o) ? 2 : 1)),
          (o._a = void 0),
          a && e.e)
        )
          throw e.v
      })
    },
    pr = function(e) {
      return 1 !== e._h && 0 === (e._a || e._c).length
    },
    dr = function(t) {
      Jt.call(v, function() {
        var e
        ir
          ? rr.emit('rejectionHandled', t)
          : (e = v.onrejectionhandled) && e({promise: t, reason: t._v})
      })
    },
    vr = function(e) {
      var t = this
      t._d ||
        ((t._d = !0),
        ((t = t._w || t)._v = e),
        (t._s = 2),
        t._a || (t._a = t._c.slice()),
        cr(t, !0))
    },
    mr = function(e) {
      var r,
        n = this
      if (!n._d) {
        ;(n._d = !0), (n = n._w || n)
        try {
          if (n === e) throw tr("Promise can't be resolved itself")
          ;(r = hr(e))
            ? Xt(function() {
                var t = {_w: n, _d: !1}
                try {
                  r.call(e, g(mr, t, 1), g(vr, t, 1))
                } catch (e) {
                  vr.call(t, e)
                }
              })
            : ((n._v = e), (n._s = 1), cr(n, !1))
        } catch (e) {
          vr.call({_w: n, _d: !1}, e)
        }
      }
    }
  lr ||
    ((or = function(e) {
      lt(this, or, er, '_h'), i(e), Gt.call(this)
      try {
        e(g(mr, this, 1), g(vr, this, 1))
      } catch (e) {
        vr.call(this, e)
      }
    }),
    ((Gt = function(e) {
      ;(this._c = []),
        (this._a = void 0),
        (this._s = 0),
        (this._d = !1),
        (this._v = void 0),
        (this._h = 0),
        (this._n = !1)
    }).prototype = qt(or.prototype, {
      then: function(e, t) {
        var r = ur(yt(this, or))
        return (
          (r.ok = 'function' != typeof e || e),
          (r.fail = 'function' == typeof t && t),
          (r.domain = ir ? rr.domain : void 0),
          this._c.push(r),
          this._a && this._a.push(r),
          this._s && cr(this, !1),
          r.promise
        )
      },
      catch: function(e) {
        return this.then(void 0, e)
      }
    })),
    (Yt = function() {
      var e = new Gt()
      ;(this.promise = e),
        (this.resolve = g(mr, e, 1)),
        (this.reject = g(vr, e, 1))
    }),
    (Mt.f = ur = function(e) {
      return e === or || e === Wt ? new Yt(e) : Kt(e)
    })),
    S(S.G + S.W + S.F * !lr, {Promise: or}),
    Me(or, er),
    Ht(er),
    (Wt = m[er]),
    S(S.S + S.F * !lr, er, {
      reject: function(e) {
        var t = ur(this)
        return (0, t.reject)(e), t.promise
      }
    }),
    S(S.S + !0 * S.F, er, {
      resolve: function(e) {
        return zt(this === Wt ? or : this, e)
      }
    }),
    S(
      S.S +
        S.F *
          !(
            lr &&
            Zt(function(e) {
              or.all(e).catch(sr)
            })
          ),
      er,
      {
        all: function(e) {
          var i = this,
            t = ur(i),
            s = t.resolve,
            u = t.reject,
            r = $t(function() {
              var n = [],
                a = 0,
                o = 1
              mt(e, !1, function(e) {
                var t = a++,
                  r = !1
                n.push(void 0),
                  o++,
                  i.resolve(e).then(function(e) {
                    r || ((r = !0), (n[t] = e), --o || s(n))
                  }, u)
              }),
                --o || s(n)
            })
          return r.e && u(r.v), t.promise
        },
        race: function(e) {
          var t = this,
            r = ur(t),
            n = r.reject,
            a = $t(function() {
              mt(e, !1, function(e) {
                t.resolve(e).then(r.resolve, n)
              })
            })
          return a.e && n(a.v), r.promise
        }
      }
    ),
    S(S.P + S.R, 'Promise', {
      finally: function(t) {
        var r = yt(this, m.Promise || v.Promise),
          e = 'function' == typeof t
        return this.then(
          e
            ? function(e) {
                return zt(r, t()).then(function() {
                  return e
                })
              }
            : t,
          e
            ? function(e) {
                return zt(r, t()).then(function() {
                  throw e
                })
              }
            : t
        )
      }
    }),
    S(S.S, 'Promise', {
      try: function(e) {
        var t = Mt.f(this),
          r = $t(e)
        return (r.e ? t.reject : t.resolve)(r.v), t.promise
      }
    })
  var gr = m.Promise,
    yr = Object.getOwnPropertyDescriptor,
    br = {
      f: s
        ? yr
        : function(e, t) {
            if (((e = T(e)), (t = o(t, !0)), a))
              try {
                return yr(e, t)
              } catch (e) {}
            if (b(e, t)) return E(!W.f.call(e, t), e[t])
          }
    },
    wr = function(e, t) {
      if ((y(e), !u(t) && null !== t))
        throw TypeError(t + ": can't set as prototype!")
    },
    _r = {
      set:
        Object.setPrototypeOf ||
        ('__proto__' in {}
          ? (function(e, r, n) {
              try {
                ;(n = g(
                  Function.call,
                  br.f(Object.prototype, '__proto__').set,
                  2
                ))(e, []),
                  (r = !(e instanceof Array))
              } catch (e) {
                r = !0
              }
              return function(e, t) {
                return wr(e, t), r ? (e.__proto__ = t) : n(e, t), e
              }
            })({}, !1)
          : void 0),
      check: wr
    }
  S(S.S, 'Object', {setPrototypeOf: _r.set})
  var Er = m.Object.setPrototypeOf
  te('getPrototypeOf', function() {
    return function(e) {
      return qe(Z(e))
    }
  })
  var Pr = m.Object.getPrototypeOf
  S(S.S, 'Object', {create: Ce})
  var Sr = m.Object,
    xr = function(e, t) {
      return Sr.create(e, t)
    },
    Rr = e(function(e) {
      var r = z('meta'),
        t = c.f,
        n = 0,
        a =
          Object.isExtensible ||
          function() {
            return !0
          },
        o = !l(function() {
          return a(Object.preventExtensions({}))
        }),
        i = function(e) {
          t(e, r, {value: {i: 'O' + ++n, w: {}}})
        },
        s = (e.exports = {
          KEY: r,
          NEED: !1,
          fastKey: function(e, t) {
            if (!u(e))
              return 'symbol' == typeof e
                ? e
                : ('string' == typeof e ? 'S' : 'P') + e
            if (!b(e, r)) {
              if (!a(e)) return 'F'
              if (!t) return 'E'
              i(e)
            }
            return e[r].i
          },
          getWeak: function(e, t) {
            if (!b(e, r)) {
              if (!a(e)) return !0
              if (!t) return !1
              i(e)
            }
            return e[r].w
          },
          onFreeze: function(e) {
            return o && s.NEED && a(e) && !b(e, r) && i(e), e
          }
        })
    }),
    Or = (Rr.KEY, Rr.NEED, Rr.fastKey, Rr.getWeak, Rr.onFreeze, {f: Le}),
    kr = c.f,
    Tr = function(e) {
      var t = m.Symbol || (m.Symbol = {})
      '_' == e.charAt(0) || e in t || kr(t, e, {value: Or.f(e)})
    },
    Ar = function(e) {
      var t = K(e),
        r = Y.f
      if (r)
        for (var n, a = r(e), o = W.f, i = 0; a.length > i; )
          o.call(e, (n = a[i++])) && t.push(n)
      return t
    },
    jr =
      Array.isArray ||
      function(e) {
        return 'Array' == R(e)
      },
    Ir = Rr.KEY,
    Cr = br.f,
    Lr = c.f,
    Dr = ue.f,
    Fr = v.Symbol,
    Mr = v.JSON,
    $r = Mr && Mr.stringify,
    Ur = 'prototype',
    Nr = Le('_hidden'),
    zr = Le('toPrimitive'),
    qr = {}.propertyIsEnumerable,
    Br = $('symbol-registry'),
    Hr = $('symbols'),
    Vr = $('op-symbols'),
    Qr = Object[Ur],
    Gr = 'function' == typeof Fr,
    Kr = v.QObject,
    Yr = !Kr || !Kr[Ur] || !Kr[Ur].findChild,
    Wr =
      s &&
      l(function() {
        return (
          7 !=
          Ce(
            Lr({}, 'a', {
              get: function() {
                return Lr(this, 'a', {value: 7}).a
              }
            })
          ).a
        )
      })
        ? function(e, t, r) {
            var n = Cr(Qr, t)
            n && delete Qr[t], Lr(e, t, r), n && e !== Qr && Lr(Qr, t, n)
          }
        : Lr,
    Zr = function(e) {
      var t = (Hr[e] = Ce(Fr[Ur]))
      return (t._k = e), t
    },
    Jr =
      Gr && 'symbol' == typeof Fr.iterator
        ? function(e) {
            return 'symbol' == typeof e
          }
        : function(e) {
            return e instanceof Fr
          },
    Xr = function(e, t, r) {
      return (
        e === Qr && Xr(Vr, t, r),
        y(e),
        (t = o(t, !0)),
        y(r),
        b(Hr, t)
          ? (r.enumerable
              ? (b(e, Nr) && e[Nr][t] && (e[Nr][t] = !1),
                (r = Ce(r, {enumerable: E(0, !1)})))
              : (b(e, Nr) || Lr(e, Nr, E(1, {})), (e[Nr][t] = !0)),
            Wr(e, t, r))
          : Lr(e, t, r)
      )
    },
    en = function(e, t) {
      y(e)
      for (var r, n = Ar((t = T(t))), a = 0, o = n.length; a < o; )
        Xr(e, (r = n[a++]), t[r])
      return e
    },
    tn = function(e) {
      var t = qr.call(this, (e = o(e, !0)))
      return (
        !(this === Qr && b(Hr, e) && !b(Vr, e)) &&
        (!(t || !b(this, e) || !b(Hr, e) || (b(this, Nr) && this[Nr][e])) || t)
      )
    },
    rn = function(e, t) {
      if (((e = T(e)), (t = o(t, !0)), e !== Qr || !b(Hr, t) || b(Vr, t))) {
        var r = Cr(e, t)
        return (
          !r || !b(Hr, t) || (b(e, Nr) && e[Nr][t]) || (r.enumerable = !0), r
        )
      }
    },
    nn = function(e) {
      for (var t, r = Dr(T(e)), n = [], a = 0; r.length > a; )
        b(Hr, (t = r[a++])) || t == Nr || t == Ir || n.push(t)
      return n
    },
    an = function(e) {
      for (
        var t, r = e === Qr, n = Dr(r ? Vr : T(e)), a = [], o = 0;
        n.length > o;

      )
        !b(Hr, (t = n[o++])) || (r && !b(Qr, t)) || a.push(Hr[t])
      return a
    }
  Gr ||
    (Se(
      (Fr = function() {
        if (this instanceof Fr) throw TypeError('Symbol is not a constructor!')
        var t = z(0 < arguments.length ? arguments[0] : void 0),
          r = function(e) {
            this === Qr && r.call(Vr, e),
              b(this, Nr) && b(this[Nr], t) && (this[Nr][t] = !1),
              Wr(this, t, E(1, e))
          }
        return s && Yr && Wr(Qr, t, {configurable: !0, set: r}), Zr(t)
      })[Ur],
      'toString',
      function() {
        return this._k
      }
    ),
    (br.f = rn),
    (c.f = Xr),
    (ne.f = ue.f = nn),
    (W.f = tn),
    (Y.f = an),
    (Or.f = function(e) {
      return Zr(Le(e))
    })),
    S(S.G + S.W + S.F * !Gr, {Symbol: Fr})
  for (
    var on = 'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(
        ','
      ),
      sn = 0;
    on.length > sn;

  )
    Le(on[sn++])
  for (var un = K(Le.store), ln = 0; un.length > ln; ) Tr(un[ln++])
  S(S.S + S.F * !Gr, 'Symbol', {
    for: function(e) {
      return b(Br, (e += '')) ? Br[e] : (Br[e] = Fr(e))
    },
    keyFor: function(e) {
      if (!Jr(e)) throw TypeError(e + ' is not a symbol!')
      for (var t in Br) if (Br[t] === e) return t
    },
    useSetter: function() {
      Yr = !0
    },
    useSimple: function() {
      Yr = !1
    }
  }),
    S(S.S + S.F * !Gr, 'Object', {
      create: function(e, t) {
        return void 0 === t ? Ce(e) : en(Ce(e), t)
      },
      defineProperty: Xr,
      defineProperties: en,
      getOwnPropertyDescriptor: rn,
      getOwnPropertyNames: nn,
      getOwnPropertySymbols: an
    }),
    Mr &&
      S(
        S.S +
          S.F *
            (!Gr ||
              l(function() {
                var e = Fr()
                return (
                  '[null]' != $r([e]) ||
                  '{}' != $r({a: e}) ||
                  '{}' != $r(Object(e))
                )
              })),
        'JSON',
        {
          stringify: function(e) {
            for (var t, r, n = [e], a = 1; arguments.length > a; )
              n.push(arguments[a++])
            if (((r = t = n[1]), (u(t) || void 0 !== e) && !Jr(e)))
              return (
                jr(t) ||
                  (t = function(e, t) {
                    if (
                      ('function' == typeof r && (t = r.call(this, e, t)),
                      !Jr(t))
                    )
                      return t
                  }),
                (n[1] = t),
                $r.apply(Mr, n)
              )
          }
        }
      ),
    Fr[Ur][zr] || P(Fr[Ur], zr, Fr[Ur].valueOf),
    Me(Fr, 'Symbol'),
    Me(Math, 'Math', !0),
    Me(v.JSON, 'JSON', !0),
    Tr('asyncIterator'),
    Tr('observable')
  var hn = m.Symbol,
    cn = e(function(A) {
      !(function(e) {
        var u,
          t = Object.prototype,
          l = t.hasOwnProperty,
          r = 'function' == typeof hn ? hn : {},
          a = r.iterator || '@@iterator',
          n = r.asyncIterator || '@@asyncIterator',
          o = r.toStringTag || '@@toStringTag',
          i = e.regeneratorRuntime
        if (i) A.exports = i
        else {
          ;(i = e.regeneratorRuntime = A.exports).wrap = g
          var c = 'suspendedStart',
            f = 'suspendedYield',
            p = 'executing',
            d = 'completed',
            v = {},
            s = {}
          s[a] = function() {
            return this
          }
          var h = Pr && Pr(Pr(k([])))
          h && h !== t && l.call(h, a) && (s = h)
          var m = (_.prototype = b.prototype = xr(s))
          ;(w.prototype = m.constructor = _),
            (_.constructor = w),
            (_[o] = w.displayName = 'GeneratorFunction'),
            (i.isGeneratorFunction = function(e) {
              var t = 'function' == typeof e && e.constructor
              return (
                !!t &&
                (t === w || 'GeneratorFunction' === (t.displayName || t.name))
              )
            }),
            (i.mark = function(e) {
              return (
                Er
                  ? Er(e, _)
                  : ((e.__proto__ = _), o in e || (e[o] = 'GeneratorFunction')),
                (e.prototype = xr(m)),
                e
              )
            }),
            (i.awrap = function(e) {
              return {__await: e}
            }),
            E(P.prototype),
            (P.prototype[n] = function() {
              return this
            }),
            (i.AsyncIterator = P),
            (i.async = function(e, t, r, n) {
              var a = new P(g(e, t, r, n))
              return i.isGeneratorFunction(t)
                ? a
                : a.next().then(function(e) {
                    return e.done ? e.value : a.next()
                  })
            }),
            E(m),
            (m[o] = 'Generator'),
            (m[a] = function() {
              return this
            }),
            (m.toString = function() {
              return '[object Generator]'
            }),
            (i.keys = function(r) {
              var n = []
              for (var e in r) n.push(e)
              return (
                n.reverse(),
                function e() {
                  for (; n.length; ) {
                    var t = n.pop()
                    if (t in r) return (e.value = t), (e.done = !1), e
                  }
                  return (e.done = !0), e
                }
              )
            }),
            (i.values = k),
            (O.prototype = {
              constructor: O,
              reset: function(e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = u),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = 'next'),
                  (this.arg = u),
                  this.tryEntries.forEach(R),
                  !e)
                )
                  for (var t in this)
                    't' === t.charAt(0) &&
                      l.call(this, t) &&
                      !isNaN(+t.slice(1)) &&
                      (this[t] = u)
              },
              stop: function() {
                this.done = !0
                var e = this.tryEntries[0].completion
                if ('throw' === e.type) throw e.arg
                return this.rval
              },
              dispatchException: function(r) {
                if (this.done) throw r
                var n = this
                function e(e, t) {
                  return (
                    (o.type = 'throw'),
                    (o.arg = r),
                    (n.next = e),
                    t && ((n.method = 'next'), (n.arg = u)),
                    !!t
                  )
                }
                for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                  var a = this.tryEntries[t],
                    o = a.completion
                  if ('root' === a.tryLoc) return e('end')
                  if (a.tryLoc <= this.prev) {
                    var i = l.call(a, 'catchLoc'),
                      s = l.call(a, 'finallyLoc')
                    if (i && s) {
                      if (this.prev < a.catchLoc) return e(a.catchLoc, !0)
                      if (this.prev < a.finallyLoc) return e(a.finallyLoc)
                    } else if (i) {
                      if (this.prev < a.catchLoc) return e(a.catchLoc, !0)
                    } else {
                      if (!s)
                        throw new Error(
                          'try statement without catch or finally'
                        )
                      if (this.prev < a.finallyLoc) return e(a.finallyLoc)
                    }
                  }
                }
              },
              abrupt: function(e, t) {
                for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
                  var n = this.tryEntries[r]
                  if (
                    n.tryLoc <= this.prev &&
                    l.call(n, 'finallyLoc') &&
                    this.prev < n.finallyLoc
                  ) {
                    var a = n
                    break
                  }
                }
                a &&
                  ('break' === e || 'continue' === e) &&
                  a.tryLoc <= t &&
                  t <= a.finallyLoc &&
                  (a = null)
                var o = a ? a.completion : {}
                return (
                  (o.type = e),
                  (o.arg = t),
                  a
                    ? ((this.method = 'next'), (this.next = a.finallyLoc), v)
                    : this.complete(o)
                )
              },
              complete: function(e, t) {
                if ('throw' === e.type) throw e.arg
                return (
                  'break' === e.type || 'continue' === e.type
                    ? (this.next = e.arg)
                    : 'return' === e.type
                      ? ((this.rval = this.arg = e.arg),
                        (this.method = 'return'),
                        (this.next = 'end'))
                      : 'normal' === e.type && t && (this.next = t),
                  v
                )
              },
              finish: function(e) {
                for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                  var r = this.tryEntries[t]
                  if (r.finallyLoc === e)
                    return this.complete(r.completion, r.afterLoc), R(r), v
                }
              },
              catch: function(e) {
                for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                  var r = this.tryEntries[t]
                  if (r.tryLoc === e) {
                    var n = r.completion
                    if ('throw' === n.type) {
                      var a = n.arg
                      R(r)
                    }
                    return a
                  }
                }
                throw new Error('illegal catch attempt')
              },
              delegateYield: function(e, t, r) {
                return (
                  (this.delegate = {iterator: k(e), resultName: t, nextLoc: r}),
                  'next' === this.method && (this.arg = u),
                  v
                )
              }
            })
        }
        function g(e, t, r, n) {
          var o,
            i,
            s,
            u,
            a = t && t.prototype instanceof b ? t : b,
            l = xr(a.prototype),
            h = new O(n || [])
          return (
            (l._invoke = ((o = e),
            (i = r),
            (s = h),
            (u = c),
            function(e, t) {
              if (u === p) throw new Error('Generator is already running')
              if (u === d) {
                if ('throw' === e) throw t
                return T()
              }
              for (s.method = e, s.arg = t; ; ) {
                var r = s.delegate
                if (r) {
                  var n = S(r, s)
                  if (n) {
                    if (n === v) continue
                    return n
                  }
                }
                if ('next' === s.method) s.sent = s._sent = s.arg
                else if ('throw' === s.method) {
                  if (u === c) throw ((u = d), s.arg)
                  s.dispatchException(s.arg)
                } else 'return' === s.method && s.abrupt('return', s.arg)
                u = p
                var a = y(o, i, s)
                if ('normal' === a.type) {
                  if (((u = s.done ? d : f), a.arg === v)) continue
                  return {value: a.arg, done: s.done}
                }
                'throw' === a.type &&
                  ((u = d), (s.method = 'throw'), (s.arg = a.arg))
              }
            })),
            l
          )
        }
        function y(e, t, r) {
          try {
            return {type: 'normal', arg: e.call(t, r)}
          } catch (e) {
            return {type: 'throw', arg: e}
          }
        }
        function b() {}
        function w() {}
        function _() {}
        function E(e) {
          ;['next', 'throw', 'return'].forEach(function(t) {
            e[t] = function(e) {
              return this._invoke(t, e)
            }
          })
        }
        function P(s) {
          function u(e, t, r, n) {
            var a = y(s[e], s, t)
            if ('throw' !== a.type) {
              var o = a.arg,
                i = o.value
              return i && 'object' === pe(i) && l.call(i, '__await')
                ? gr.resolve(i.__await).then(
                    function(e) {
                      u('next', e, r, n)
                    },
                    function(e) {
                      u('throw', e, r, n)
                    }
                  )
                : gr.resolve(i).then(
                    function(e) {
                      ;(o.value = e), r(o)
                    },
                    function(e) {
                      return u('throw', e, r, n)
                    }
                  )
            }
            n(a.arg)
          }
          var t
          this._invoke = function(r, n) {
            function e() {
              return new gr(function(e, t) {
                u(r, n, e, t)
              })
            }
            return (t = t ? t.then(e, e) : e())
          }
        }
        function S(e, t) {
          var r = e.iterator[t.method]
          if (r === u) {
            if (((t.delegate = null), 'throw' === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = u),
                S(e, t),
                'throw' === t.method)
              )
                return v
              ;(t.method = 'throw'),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ))
            }
            return v
          }
          var n = y(r, e.iterator, t.arg)
          if ('throw' === n.type)
            return (t.method = 'throw'), (t.arg = n.arg), (t.delegate = null), v
          var a = n.arg
          return a
            ? a.done
              ? ((t[e.resultName] = a.value),
                (t.next = e.nextLoc),
                'return' !== t.method && ((t.method = 'next'), (t.arg = u)),
                (t.delegate = null),
                v)
              : a
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              v)
        }
        function x(e) {
          var t = {tryLoc: e[0]}
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t)
        }
        function R(e) {
          var t = e.completion || {}
          ;(t.type = 'normal'), delete t.arg, (e.completion = t)
        }
        function O(e) {
          ;(this.tryEntries = [{tryLoc: 'root'}]),
            e.forEach(x, this),
            this.reset(!0)
        }
        function k(t) {
          if (t) {
            var e = t[a]
            if (e) return e.call(t)
            if ('function' == typeof t.next) return t
            if (!isNaN(t.length)) {
              var r = -1,
                n = function e() {
                  for (; ++r < t.length; )
                    if (l.call(t, r)) return (e.value = t[r]), (e.done = !1), e
                  return (e.value = u), (e.done = !0), e
                }
              return (n.next = n)
            }
          }
          return {next: T}
        }
        function T() {
          return {value: u, done: !0}
        }
      })(
        (function() {
          return (
            this ||
            ('object' ===
              ('undefined' == typeof self ? 'undefined' : pe(self)) &&
              self)
          )
        })() || Function('return this')()
      )
    }),
    fn =
      (function() {
        return (
          this ||
          ('object' === ('undefined' == typeof self ? 'undefined' : pe(self)) &&
            self)
        )
      })() || Function('return this')(),
    pn = fn.regeneratorRuntime && 0 <= he(fn).indexOf('regeneratorRuntime'),
    dn = pn && fn.regeneratorRuntime
  fn.regeneratorRuntime = void 0
  var vn = cn
  if (pn) fn.regeneratorRuntime = dn
  else
    try {
      delete fn.regeneratorRuntime
    } catch (e) {
      fn.regeneratorRuntime = void 0
    }
  var mn = vn,
    gn = function(e) {
      console.error(e)
    }
  S(S.S, 'Date', {
    now: function() {
      return new Date().getTime()
    }
  })
  var yn = m.Date.now
  S(S.S, 'Array', {isArray: jr})
  var bn = m.Array.isArray,
    wn = function(e, t, r) {
      t in e ? c.f(e, t, E(0, r)) : (e[t] = r)
    }
  S(S.S + S.F * !Zt(function(e) {}), 'Array', {
    from: function(e) {
      var t,
        r,
        n,
        a,
        o = Z(e),
        i = 'function' == typeof this ? this : Array,
        s = arguments.length,
        u = 1 < s ? arguments[1] : void 0,
        l = void 0 !== u,
        h = 0,
        c = vt(o)
      if (
        (l && (u = g(u, 2 < s ? arguments[2] : void 0, 2)),
        null == c || (i == Array && pt(c)))
      )
        for (r = new i((t = L(o.length))); h < t; h++)
          wn(r, h, l ? u(o[h], h) : o[h])
      else
        for (a = c.call(o), r = new i(); !(n = a.next()).done; h++)
          wn(r, h, l ? ht(a, u, [n.value, h], !0) : n.value)
      return (r.length = h), r
    }
  })
  var _n,
    En,
    Pn,
    Sn,
    xn,
    Rn,
    On,
    kn,
    Tn,
    An,
    jn,
    In,
    Cn,
    Ln,
    Dn,
    Fn,
    Mn,
    $n,
    Un,
    Nn,
    zn,
    qn = m.Array.from,
    Bn = function(e, t) {
      if (!u(e) || e._t !== t)
        throw TypeError('Incompatible receiver, ' + t + ' required!')
      return e
    },
    Hn = c.f,
    Vn = Rr.fastKey,
    Qn = s ? '_s' : 'size',
    Gn = function(e, t) {
      var r,
        n = Vn(t)
      if ('F' !== n) return e._i[n]
      for (r = e._f; r; r = r.n) if (r.k == t) return r
    },
    Kn = {
      getConstructor: function(e, o, r, n) {
        var a = e(function(e, t) {
          lt(e, a, o, '_i'),
            (e._t = o),
            (e._i = Ce(null)),
            (e._f = void 0),
            (e._l = void 0),
            (e[Qn] = 0),
            null != t && mt(t, r, e[n], e)
        })
        return (
          qt(a.prototype, {
            clear: function() {
              for (var e = Bn(this, o), t = e._i, r = e._f; r; r = r.n)
                (r.r = !0), r.p && (r.p = r.p.n = void 0), delete t[r.i]
              ;(e._f = e._l = void 0), (e[Qn] = 0)
            },
            delete: function(e) {
              var t = Bn(this, o),
                r = Gn(t, e)
              if (r) {
                var n = r.n,
                  a = r.p
                delete t._i[r.i],
                  (r.r = !0),
                  a && (a.n = n),
                  n && (n.p = a),
                  t._f == r && (t._f = n),
                  t._l == r && (t._l = a),
                  t[Qn]--
              }
              return !!r
            },
            forEach: function(e) {
              Bn(this, o)
              for (
                var t,
                  r = g(e, 1 < arguments.length ? arguments[1] : void 0, 3);
                (t = t ? t.n : this._f);

              )
                for (r(t.v, t.k, this); t && t.r; ) t = t.p
            },
            has: function(e) {
              return !!Gn(Bn(this, o), e)
            }
          }),
          s &&
            Hn(a.prototype, 'size', {
              get: function() {
                return Bn(this, o)[Qn]
              }
            }),
          a
        )
      },
      def: function(e, t, r) {
        var n,
          a,
          o = Gn(e, t)
        return (
          o
            ? (o.v = r)
            : ((e._l = o = {
                i: (a = Vn(t, !0)),
                k: t,
                v: r,
                p: (n = e._l),
                n: void 0,
                r: !1
              }),
              e._f || (e._f = o),
              n && (n.n = o),
              e[Qn]++,
              'F' !== a && (e._i[a] = o)),
          e
        )
      },
      getEntry: Gn,
      setStrong: function(e, r, t) {
        Ge(
          e,
          r,
          function(e, t) {
            ;(this._t = Bn(e, r)), (this._k = t), (this._l = void 0)
          },
          function() {
            for (var e = this, t = e._k, r = e._l; r && r.r; ) r = r.p
            return e._t && (e._l = r = r ? r.n : e._t._f)
              ? Ye(0, 'keys' == t ? r.k : 'values' == t ? r.v : [r.k, r.v])
              : ((e._t = void 0), Ye(1))
          },
          t ? 'entries' : 'values',
          !t,
          !0
        ),
          Ht(r)
      }
    },
    Yn = Le('species'),
    Wn = function(e, t) {
      return (
        jr((r = e)) &&
          ('function' != typeof (n = r.constructor) ||
            (n !== Array && !jr(n.prototype)) ||
            (n = void 0),
          u(n) && null === (n = n[Yn]) && (n = void 0)),
        new (void 0 === n ? Array : n)(t)
      )
      var r, n
    },
    Zn = c.f,
    Jn = ((Pn = 1 == (_n = 0)),
    (Sn = 2 == _n),
    (xn = 3 == _n),
    (Rn = 4 == _n),
    (On = 6 == _n),
    (kn = 5 == _n || On),
    (Tn = En || Wn),
    function(e, t, r) {
      for (
        var n,
          a,
          o = Z(e),
          i = O(o),
          s = g(t, r, 3),
          u = L(i.length),
          l = 0,
          h = Pn ? Tn(e, u) : Sn ? Tn(e, 0) : void 0;
        l < u;
        l++
      )
        if ((kn || l in i) && ((a = s((n = i[l]), l, o)), _n))
          if (Pn) h[l] = a
          else if (a)
            switch (_n) {
              case 3:
                return !0
              case 5:
                return n
              case 6:
                return l
              case 2:
                h.push(n)
            }
          else if (Rn) return !1
      return On ? -1 : xn || Rn ? Rn : h
    })
  ;(jn = function(e) {
    return function() {
      return e(this, 0 < arguments.length ? arguments[0] : void 0)
    }
  }),
    (In = {
      add: function(e) {
        return Kn.def(Bn(this, 'Set'), (e = 0 === e ? 0 : e), e)
      }
    }),
    (Cn = Kn),
    (Fn = v[(An = 'Set')]),
    ($n = Ln ? 'set' : 'add'),
    (Un = (Mn = Fn) && Mn.prototype),
    (Nn = {}),
    s &&
    'function' == typeof Mn &&
    (Dn ||
      (Un.forEach &&
        !l(function() {
          new Mn().entries().next()
        })))
      ? ((Mn = jn(function(e, t) {
          lt(e, Mn, An, '_c'),
            (e._c = new Fn()),
            null != t && mt(t, Ln, e[$n], e)
        })),
        Jn(
          'add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(
            ','
          ),
          function(n) {
            var a = 'add' == n || 'set' == n
            n in Un &&
              (!Dn || 'clear' != n) &&
              P(Mn.prototype, n, function(e, t) {
                if ((lt(this, Mn, n), !a && Dn && !u(e)))
                  return 'get' == n && void 0
                var r = this._c[n](0 === e ? 0 : e, t)
                return a ? this : r
              })
          }
        ),
        Dn ||
          Zn(Mn.prototype, 'size', {
            get: function() {
              return this._c.size
            }
          }))
      : ((Mn = Cn.getConstructor(jn, An, Ln, $n)),
        qt(Mn.prototype, In),
        (Rr.NEED = !0)),
    Me(Mn, An),
    (Nn[An] = Mn),
    S(S.G + S.W + S.F, Nn),
    Dn || Cn.setStrong(Mn, An, Ln)
  S(S.P + S.R, 'Set', {
    toJSON: ((zn = 'Set'),
    function() {
      if (ut(this) != zn) throw TypeError(zn + "#toJSON isn't generic")
      return mt(this, !(t = []), t.push, t, e), t
      var e, t
    })
  })
  var Xn
  ;(Xn = 'Set'),
    S(S.S, Xn, {
      of: function() {
        for (var e = arguments.length, t = new Array(e); e--; )
          t[e] = arguments[e]
        return new this(t)
      }
    })
  var ea
  ;(ea = 'Set'),
    S(S.S, ea, {
      from: function(e) {
        var t,
          r,
          n,
          a,
          o = arguments[1]
        return (
          i(this),
          (t = void 0 !== o) && i(o),
          null == e
            ? new this()
            : ((r = []),
              t
                ? ((n = 0),
                  (a = g(o, arguments[2], 2)),
                  mt(e, !1, function(e) {
                    r.push(a(e, n++))
                  }))
                : mt(e, !1, r.push, r),
              new this(r))
        )
      }
    })
  var ta = m.Set,
    ra =
      'undefined' != typeof global
        ? global
        : 'undefined' != typeof self
          ? self
          : 'undefined' != typeof window
            ? window
            : {}
  function na() {
    throw new Error('setTimeout has not been defined')
  }
  function aa() {
    throw new Error('clearTimeout has not been defined')
  }
  var oa = na,
    ia = aa
  function sa(t) {
    if (oa === setTimeout) return setTimeout(t, 0)
    if ((oa === na || !oa) && setTimeout)
      return (oa = setTimeout), setTimeout(t, 0)
    try {
      return oa(t, 0)
    } catch (e) {
      try {
        return oa.call(null, t, 0)
      } catch (e) {
        return oa.call(this, t, 0)
      }
    }
  }
  function ua(t) {
    if (ia === clearTimeout) return clearTimeout(t)
    if ((ia === aa || !ia) && clearTimeout)
      return (ia = clearTimeout), clearTimeout(t)
    try {
      return ia(t)
    } catch (e) {
      try {
        return ia.call(null, t)
      } catch (e) {
        return ia.call(this, t)
      }
    }
  }
  'function' == typeof ra.setTimeout && (oa = setTimeout),
    'function' == typeof ra.clearTimeout && (ia = clearTimeout)
  var la,
    ha = [],
    ca = !1,
    fa = -1
  function pa() {
    ca &&
      la &&
      ((ca = !1),
      la.length ? (ha = la.concat(ha)) : (fa = -1),
      ha.length && da())
  }
  function da() {
    if (!ca) {
      var e = sa(pa)
      ca = !0
      for (var t = ha.length; t; ) {
        for (la = ha, ha = []; ++fa < t; ) la && la[fa].run()
        ;(fa = -1), (t = ha.length)
      }
      ;(la = null), (ca = !1), ua(e)
    }
  }
  function va(e) {
    var t = new Array(arguments.length - 1)
    if (1 < arguments.length)
      for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r]
    ha.push(new ma(e, t)), 1 !== ha.length || ca || sa(da)
  }
  function ma(e, t) {
    ;(this.fun = e), (this.array = t)
  }
  ma.prototype.run = function() {
    this.fun.apply(null, this.array)
  }
  function ga() {}
  var ya = ga,
    ba = ga,
    wa = ga,
    _a = ga,
    Ea = ga,
    Pa = ga,
    Sa = ga
  var xa = ra.performance || {},
    Ra =
      xa.now ||
      xa.mozNow ||
      xa.msNow ||
      xa.oNow ||
      xa.webkitNow ||
      function() {
        return new Date().getTime()
      }
  var Oa = new Date()
  var ka = {
      nextTick: va,
      title: 'browser',
      browser: !0,
      env: {},
      argv: [],
      version: '',
      versions: {},
      on: ya,
      addListener: ba,
      once: wa,
      off: _a,
      removeListener: Ea,
      removeAllListeners: Pa,
      emit: Sa,
      binding: function(e) {
        throw new Error('process.binding is not supported')
      },
      cwd: function() {
        return '/'
      },
      chdir: function(e) {
        throw new Error('process.chdir is not supported')
      },
      umask: function() {
        return 0
      },
      hrtime: function(e) {
        var t = 0.001 * Ra.call(xa),
          r = Math.floor(t),
          n = Math.floor((t % 1) * 1e9)
        return e && ((r -= e[0]), (n -= e[1]) < 0 && (r--, (n += 1e9))), [r, n]
      },
      platform: 'browser',
      release: {},
      config: {},
      uptime: function() {
        return (new Date() - Oa) / 1e3
      }
    },
    Ta = '\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff',
    Aa = '[' + Ta + ']',
    ja = RegExp('^' + Aa + Aa + '*'),
    Ia = RegExp(Aa + Aa + '*$'),
    Ca = function(e, t, r) {
      var n = {},
        a = l(function() {
          return !!Ta[e]() || '​' != '​'[e]()
        }),
        o = (n[e] = a ? t(La) : Ta[e])
      r && (n[r] = o), S(S.P + S.F * a, 'String', n)
    },
    La = (Ca.trim = function(e, t) {
      return (
        (e = String(k(e))),
        1 & t && (e = e.replace(ja, '')),
        2 & t && (e = e.replace(Ia, '')),
        e
      )
    }),
    Da = Ca,
    Fa = v.parseInt,
    Ma = Da.trim,
    $a = /^[-+]?0[xX]/,
    Ua =
      8 !== Fa(Ta + '08') || 22 !== Fa(Ta + '0x16')
        ? function(e, t) {
            var r = Ma(String(e), 3)
            return Fa(r, t >>> 0 || ($a.test(r) ? 16 : 10))
          }
        : Fa
  S(S.G + S.F * (parseInt != Ua), {parseInt: Ua})
  var Na = m.parseInt,
    za = (Or.f('species'), []),
    qa = [],
    Ba = 'undefined' != typeof Uint8Array ? Uint8Array : Array,
    Ha = !1
  function Va() {
    Ha = !0
    for (
      var e =
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
        t = 0,
        r = e.length;
      t < r;
      ++t
    )
      (za[t] = e[t]), (qa[e.charCodeAt(t)] = t)
    ;(qa['-'.charCodeAt(0)] = 62), (qa['_'.charCodeAt(0)] = 63)
  }
  function Qa(e) {
    var t, r, n, a, o, i
    Ha || Va()
    var s = e.length
    if (0 < s % 4)
      throw new Error('Invalid string. Length must be a multiple of 4')
    ;(o = '=' === e[s - 2] ? 2 : '=' === e[s - 1] ? 1 : 0),
      (i = new Ba((3 * s) / 4 - o)),
      (n = 0 < o ? s - 4 : s)
    var u = 0
    for (r = t = 0; t < n; t += 4, r += 3)
      (a =
        (qa[e.charCodeAt(t)] << 18) |
        (qa[e.charCodeAt(t + 1)] << 12) |
        (qa[e.charCodeAt(t + 2)] << 6) |
        qa[e.charCodeAt(t + 3)]),
        (i[u++] = (a >> 16) & 255),
        (i[u++] = (a >> 8) & 255),
        (i[u++] = 255 & a)
    return (
      2 === o
        ? ((a = (qa[e.charCodeAt(t)] << 2) | (qa[e.charCodeAt(t + 1)] >> 4)),
          (i[u++] = 255 & a))
        : 1 === o &&
          ((a =
            (qa[e.charCodeAt(t)] << 10) |
            (qa[e.charCodeAt(t + 1)] << 4) |
            (qa[e.charCodeAt(t + 2)] >> 2)),
          (i[u++] = (a >> 8) & 255),
          (i[u++] = 255 & a)),
      i
    )
  }
  function Ga(e, t, r) {
    for (var n, a, o = [], i = t; i < r; i += 3)
      (n = (e[i] << 16) + (e[i + 1] << 8) + e[i + 2]),
        o.push(
          za[((a = n) >> 18) & 63] +
            za[(a >> 12) & 63] +
            za[(a >> 6) & 63] +
            za[63 & a]
        )
    return o.join('')
  }
  function Ka(e) {
    var t
    Ha || Va()
    for (
      var r = e.length, n = r % 3, a = '', o = [], i = 0, s = r - n;
      i < s;
      i += 16383
    )
      o.push(Ga(e, i, s < i + 16383 ? s : i + 16383))
    return (
      1 === n
        ? ((t = e[r - 1]),
          (a += za[t >> 2]),
          (a += za[(t << 4) & 63]),
          (a += '=='))
        : 2 === n &&
          ((t = (e[r - 2] << 8) + e[r - 1]),
          (a += za[t >> 10]),
          (a += za[(t >> 4) & 63]),
          (a += za[(t << 2) & 63]),
          (a += '=')),
      o.push(a),
      o.join('')
    )
  }
  function Ya(e, t, r, n, a) {
    var o,
      i,
      s = 8 * a - n - 1,
      u = (1 << s) - 1,
      l = u >> 1,
      h = -7,
      c = r ? a - 1 : 0,
      f = r ? -1 : 1,
      p = e[t + c]
    for (
      c += f, o = p & ((1 << -h) - 1), p >>= -h, h += s;
      0 < h;
      o = 256 * o + e[t + c], c += f, h -= 8
    );
    for (
      i = o & ((1 << -h) - 1), o >>= -h, h += n;
      0 < h;
      i = 256 * i + e[t + c], c += f, h -= 8
    );
    if (0 === o) o = 1 - l
    else {
      if (o === u) return i ? NaN : (1 / 0) * (p ? -1 : 1)
      ;(i += Math.pow(2, n)), (o -= l)
    }
    return (p ? -1 : 1) * i * Math.pow(2, o - n)
  }
  function Wa(e, t, r, n, a, o) {
    var i,
      s,
      u,
      l = 8 * o - a - 1,
      h = (1 << l) - 1,
      c = h >> 1,
      f = 23 === a ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
      p = n ? 0 : o - 1,
      d = n ? 1 : -1,
      v = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0
    for (
      t = Math.abs(t),
        isNaN(t) || t === 1 / 0
          ? ((s = isNaN(t) ? 1 : 0), (i = h))
          : ((i = Math.floor(Math.log(t) / Math.LN2)),
            t * (u = Math.pow(2, -i)) < 1 && (i--, (u *= 2)),
            2 <= (t += 1 <= i + c ? f / u : f * Math.pow(2, 1 - c)) * u &&
              (i++, (u /= 2)),
            h <= i + c
              ? ((s = 0), (i = h))
              : 1 <= i + c
                ? ((s = (t * u - 1) * Math.pow(2, a)), (i += c))
                : ((s = t * Math.pow(2, c - 1) * Math.pow(2, a)), (i = 0)));
      8 <= a;
      e[r + p] = 255 & s, p += d, s /= 256, a -= 8
    );
    for (
      i = (i << a) | s, l += a;
      0 < l;
      e[r + p] = 255 & i, p += d, i /= 256, l -= 8
    );
    e[r + p - d] |= 128 * v
  }
  var Za = {}.toString,
    Ja =
      bn ||
      function(e) {
        return '[object Array]' == Za.call(e)
      }
  function Xa() {
    return to.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
  }
  function eo(e, t) {
    if (Xa() < t) throw new RangeError('Invalid typed array length')
    return (
      to.TYPED_ARRAY_SUPPORT
        ? ((e = new Uint8Array(t)).__proto__ = to.prototype)
        : (null === e && (e = new to(t)), (e.length = t)),
      e
    )
  }
  function to(e, t, r) {
    if (!(to.TYPED_ARRAY_SUPPORT || this instanceof to)) return new to(e, t, r)
    if ('number' != typeof e) return ro(this, e, t, r)
    if ('string' == typeof t)
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    return ao(this, e)
  }
  function ro(e, t, r, n) {
    if ('number' == typeof t)
      throw new TypeError('"value" argument must not be a number')
    return 'undefined' != typeof ArrayBuffer && t instanceof ArrayBuffer
      ? so(e, t, r, n)
      : 'string' == typeof t
        ? oo(e, t, r)
        : uo(e, t)
  }
  function no(e) {
    if ('number' != typeof e)
      throw new TypeError('"size" argument must be a number')
    if (e < 0) throw new RangeError('"size" argument must not be negative')
  }
  function ao(e, t) {
    if ((no(t), (e = eo(e, t < 0 ? 0 : 0 | lo(t))), !to.TYPED_ARRAY_SUPPORT))
      for (var r = 0; r < t; ++r) e[r] = 0
    return e
  }
  function oo(e, t, r) {
    if ((('string' == typeof r && '' !== r) || (r = 'utf8'), !to.isEncoding(r)))
      throw new TypeError('"encoding" must be a valid string encoding')
    var n = 0 | co(t, r),
      a = (e = eo(e, n)).write(t, r)
    return a !== n && (e = e.slice(0, a)), e
  }
  function io(e, t) {
    var r = t.length < 0 ? 0 : 0 | lo(t.length)
    e = eo(e, r)
    for (var n = 0; n < r; n += 1) e[n] = 255 & t[n]
    return e
  }
  function so(e, t, r, n) {
    if ((t.byteLength, r < 0 || t.byteLength < r))
      throw new RangeError("'offset' is out of bounds")
    if (t.byteLength < r + (n || 0))
      throw new RangeError("'length' is out of bounds")
    return (
      (t =
        void 0 === r && void 0 === n
          ? new Uint8Array(t)
          : void 0 === n
            ? new Uint8Array(t, r)
            : new Uint8Array(t, r, n)),
      to.TYPED_ARRAY_SUPPORT
        ? ((e = t).__proto__ = to.prototype)
        : (e = io(e, t)),
      e
    )
  }
  function uo(e, t) {
    if (ho(t)) {
      var r = 0 | lo(t.length)
      return 0 === (e = eo(e, r)).length || t.copy(e, 0, 0, r), e
    }
    if (t) {
      if (
        ('undefined' != typeof ArrayBuffer &&
          t.buffer instanceof ArrayBuffer) ||
        'length' in t
      )
        return 'number' != typeof t.length || (n = t.length) != n
          ? eo(e, 0)
          : io(e, t)
      if ('Buffer' === t.type && Ja(t.data)) return io(e, t.data)
    }
    var n
    throw new TypeError(
      'First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.'
    )
  }
  function lo(e) {
    if (e >= Xa())
      throw new RangeError(
        'Attempt to allocate Buffer larger than maximum size: 0x' +
          Xa().toString(16) +
          ' bytes'
      )
    return 0 | e
  }
  function ho(e) {
    return !(null == e || !e._isBuffer)
  }
  function co(e, t) {
    if (ho(e)) return e.length
    if (
      'undefined' != typeof ArrayBuffer &&
      'function' == typeof ArrayBuffer.isView &&
      (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
    )
      return e.byteLength
    'string' != typeof e && (e = '' + e)
    var r = e.length
    if (0 === r) return 0
    for (var n = !1; ; )
      switch (t) {
        case 'ascii':
        case 'latin1':
        case 'binary':
          return r
        case 'utf8':
        case 'utf-8':
        case void 0:
          return $o(e).length
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return 2 * r
        case 'hex':
          return r >>> 1
        case 'base64':
          return zo(e).length
        default:
          if (n) return $o(e).length
          ;(t = ('' + t).toLowerCase()), (n = !0)
      }
  }
  function fo(e, t, r) {
    var n = !1
    if (((void 0 === t || t < 0) && (t = 0), t > this.length)) return ''
    if (((void 0 === r || r > this.length) && (r = this.length), r <= 0))
      return ''
    if ((r >>>= 0) <= (t >>>= 0)) return ''
    for (e || (e = 'utf8'); ; )
      switch (e) {
        case 'hex':
          return xo(this, t, r)
        case 'utf8':
        case 'utf-8':
          return wo(this, t, r)
        case 'ascii':
          return Po(this, t, r)
        case 'latin1':
        case 'binary':
          return So(this, t, r)
        case 'base64':
          return bo(this, t, r)
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return Ro(this, t, r)
        default:
          if (n) throw new TypeError('Unknown encoding: ' + e)
          ;(e = (e + '').toLowerCase()), (n = !0)
      }
  }
  function po(e, t, r) {
    var n = e[t]
    ;(e[t] = e[r]), (e[r] = n)
  }
  function vo(e, t, r, n, a) {
    if (0 === e.length) return -1
    if (
      ('string' == typeof r
        ? ((n = r), (r = 0))
        : 2147483647 < r
          ? (r = 2147483647)
          : r < -2147483648 && (r = -2147483648),
      (r = +r),
      isNaN(r) && (r = a ? 0 : e.length - 1),
      r < 0 && (r = e.length + r),
      r >= e.length)
    ) {
      if (a) return -1
      r = e.length - 1
    } else if (r < 0) {
      if (!a) return -1
      r = 0
    }
    if (('string' == typeof t && (t = to.from(t, n)), ho(t)))
      return 0 === t.length ? -1 : mo(e, t, r, n, a)
    if ('number' == typeof t)
      return (
        (t &= 255),
        to.TYPED_ARRAY_SUPPORT &&
        'function' == typeof Uint8Array.prototype.indexOf
          ? a
            ? Uint8Array.prototype.indexOf.call(e, t, r)
            : Uint8Array.prototype.lastIndexOf.call(e, t, r)
          : mo(e, [t], r, n, a)
      )
    throw new TypeError('val must be string, number or Buffer')
  }
  function mo(e, t, r, n, a) {
    var o,
      i = 1,
      s = e.length,
      u = t.length
    if (
      void 0 !== n &&
      ('ucs2' === (n = String(n).toLowerCase()) ||
        'ucs-2' === n ||
        'utf16le' === n ||
        'utf-16le' === n)
    ) {
      if (e.length < 2 || t.length < 2) return -1
      ;(s /= i = 2), (u /= 2), (r /= 2)
    }
    function l(e, t) {
      return 1 === i ? e[t] : e.readUInt16BE(t * i)
    }
    if (a) {
      var h = -1
      for (o = r; o < s; o++)
        if (l(e, o) === l(t, -1 === h ? 0 : o - h)) {
          if ((-1 === h && (h = o), o - h + 1 === u)) return h * i
        } else -1 !== h && (o -= o - h), (h = -1)
    } else
      for (s < r + u && (r = s - u), o = r; 0 <= o; o--) {
        for (var c = !0, f = 0; f < u; f++)
          if (l(e, o + f) !== l(t, f)) {
            c = !1
            break
          }
        if (c) return o
      }
    return -1
  }
  function go(e, t, r, n) {
    r = Number(r) || 0
    var a = e.length - r
    n ? a < (n = Number(n)) && (n = a) : (n = a)
    var o = t.length
    if (o % 2 != 0) throw new TypeError('Invalid hex string')
    o / 2 < n && (n = o / 2)
    for (var i = 0; i < n; ++i) {
      var s = Na(t.substr(2 * i, 2), 16)
      if (isNaN(s)) return i
      e[r + i] = s
    }
    return i
  }
  function yo(e, t, r, n) {
    return qo(Uo(t), e, r, n)
  }
  function bo(e, t, r) {
    return 0 === t && r === e.length ? Ka(e) : Ka(e.slice(t, r))
  }
  function wo(e, t, r) {
    r = Math.min(e.length, r)
    for (var n = [], a = t; a < r; ) {
      var o,
        i,
        s,
        u,
        l = e[a],
        h = null,
        c = 239 < l ? 4 : 223 < l ? 3 : 191 < l ? 2 : 1
      if (a + c <= r)
        switch (c) {
          case 1:
            l < 128 && (h = l)
            break
          case 2:
            128 == (192 & (o = e[a + 1])) &&
              127 < (u = ((31 & l) << 6) | (63 & o)) &&
              (h = u)
            break
          case 3:
            ;(o = e[a + 1]),
              (i = e[a + 2]),
              128 == (192 & o) &&
                128 == (192 & i) &&
                2047 < (u = ((15 & l) << 12) | ((63 & o) << 6) | (63 & i)) &&
                (u < 55296 || 57343 < u) &&
                (h = u)
            break
          case 4:
            ;(o = e[a + 1]),
              (i = e[a + 2]),
              (s = e[a + 3]),
              128 == (192 & o) &&
                128 == (192 & i) &&
                128 == (192 & s) &&
                65535 <
                  (u =
                    ((15 & l) << 18) |
                    ((63 & o) << 12) |
                    ((63 & i) << 6) |
                    (63 & s)) &&
                u < 1114112 &&
                (h = u)
        }
      null === h
        ? ((h = 65533), (c = 1))
        : 65535 < h &&
          ((h -= 65536),
          n.push(((h >>> 10) & 1023) | 55296),
          (h = 56320 | (1023 & h))),
        n.push(h),
        (a += c)
    }
    return Eo(n)
  }
  ;(to.TYPED_ARRAY_SUPPORT =
    void 0 === ra.TYPED_ARRAY_SUPPORT || ra.TYPED_ARRAY_SUPPORT),
    (to.poolSize = 8192),
    (to._augment = function(e) {
      return (e.__proto__ = to.prototype), e
    }),
    (to.from = function(e, t, r) {
      return ro(null, e, t, r)
    }),
    to.TYPED_ARRAY_SUPPORT &&
      ((to.prototype.__proto__ = Uint8Array.prototype),
      (to.__proto__ = Uint8Array)),
    (to.alloc = function(e, t, r) {
      return (
        (n = null),
        (o = t),
        (i = r),
        no((a = e)),
        a <= 0
          ? eo(n, a)
          : void 0 !== o
            ? 'string' == typeof i
              ? eo(n, a).fill(o, i)
              : eo(n, a).fill(o)
            : eo(n, a)
      )
      var n, a, o, i
    }),
    (to.allocUnsafe = function(e) {
      return ao(null, e)
    }),
    (to.allocUnsafeSlow = function(e) {
      return ao(null, e)
    }),
    (to.isBuffer = Bo),
    (to.compare = function(e, t) {
      if (!ho(e) || !ho(t)) throw new TypeError('Arguments must be Buffers')
      if (e === t) return 0
      for (
        var r = e.length, n = t.length, a = 0, o = Math.min(r, n);
        a < o;
        ++a
      )
        if (e[a] !== t[a]) {
          ;(r = e[a]), (n = t[a])
          break
        }
      return r < n ? -1 : n < r ? 1 : 0
    }),
    (to.isEncoding = function(e) {
      switch (String(e).toLowerCase()) {
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return !0
        default:
          return !1
      }
    }),
    (to.concat = function(e, t) {
      if (!Ja(e))
        throw new TypeError('"list" argument must be an Array of Buffers')
      if (0 === e.length) return to.alloc(0)
      var r
      if (void 0 === t) for (r = t = 0; r < e.length; ++r) t += e[r].length
      var n = to.allocUnsafe(t),
        a = 0
      for (r = 0; r < e.length; ++r) {
        var o = e[r]
        if (!ho(o))
          throw new TypeError('"list" argument must be an Array of Buffers')
        o.copy(n, a), (a += o.length)
      }
      return n
    }),
    (to.byteLength = co),
    (to.prototype._isBuffer = !0),
    (to.prototype.swap16 = function() {
      var e = this.length
      if (e % 2 != 0)
        throw new RangeError('Buffer size must be a multiple of 16-bits')
      for (var t = 0; t < e; t += 2) po(this, t, t + 1)
      return this
    }),
    (to.prototype.swap32 = function() {
      var e = this.length
      if (e % 4 != 0)
        throw new RangeError('Buffer size must be a multiple of 32-bits')
      for (var t = 0; t < e; t += 4) po(this, t, t + 3), po(this, t + 1, t + 2)
      return this
    }),
    (to.prototype.swap64 = function() {
      var e = this.length
      if (e % 8 != 0)
        throw new RangeError('Buffer size must be a multiple of 64-bits')
      for (var t = 0; t < e; t += 8)
        po(this, t, t + 7),
          po(this, t + 1, t + 6),
          po(this, t + 2, t + 5),
          po(this, t + 3, t + 4)
      return this
    }),
    (to.prototype.toString = function() {
      var e = 0 | this.length
      return 0 === e
        ? ''
        : 0 === arguments.length
          ? wo(this, 0, e)
          : fo.apply(this, arguments)
    }),
    (to.prototype.equals = function(e) {
      if (!ho(e)) throw new TypeError('Argument must be a Buffer')
      return this === e || 0 === to.compare(this, e)
    }),
    (to.prototype.inspect = function() {
      var e = ''
      return (
        0 < this.length &&
          ((e = this.toString('hex', 0, 50)
            .match(/.{2}/g)
            .join(' ')),
          50 < this.length && (e += ' ... ')),
        '<Buffer ' + e + '>'
      )
    }),
    (to.prototype.compare = function(e, t, r, n, a) {
      if (!ho(e)) throw new TypeError('Argument must be a Buffer')
      if (
        (void 0 === t && (t = 0),
        void 0 === r && (r = e ? e.length : 0),
        void 0 === n && (n = 0),
        void 0 === a && (a = this.length),
        t < 0 || r > e.length || n < 0 || a > this.length)
      )
        throw new RangeError('out of range index')
      if (a <= n && r <= t) return 0
      if (a <= n) return -1
      if (r <= t) return 1
      if (this === e) return 0
      for (
        var o = (a >>>= 0) - (n >>>= 0),
          i = (r >>>= 0) - (t >>>= 0),
          s = Math.min(o, i),
          u = this.slice(n, a),
          l = e.slice(t, r),
          h = 0;
        h < s;
        ++h
      )
        if (u[h] !== l[h]) {
          ;(o = u[h]), (i = l[h])
          break
        }
      return o < i ? -1 : i < o ? 1 : 0
    }),
    (to.prototype.includes = function(e, t, r) {
      return -1 !== this.indexOf(e, t, r)
    }),
    (to.prototype.indexOf = function(e, t, r) {
      return vo(this, e, t, r, !0)
    }),
    (to.prototype.lastIndexOf = function(e, t, r) {
      return vo(this, e, t, r, !1)
    }),
    (to.prototype.write = function(e, t, r, n) {
      if (void 0 === t) (n = 'utf8'), (r = this.length), (t = 0)
      else if (void 0 === r && 'string' == typeof t)
        (n = t), (r = this.length), (t = 0)
      else {
        if (!isFinite(t))
          throw new Error(
            'Buffer.write(string, encoding, offset[, length]) is no longer supported'
          )
        ;(t |= 0),
          isFinite(r)
            ? ((r |= 0), void 0 === n && (n = 'utf8'))
            : ((n = r), (r = void 0))
      }
      var a = this.length - t
      if (
        ((void 0 === r || a < r) && (r = a),
        (0 < e.length && (r < 0 || t < 0)) || t > this.length)
      )
        throw new RangeError('Attempt to write outside buffer bounds')
      n || (n = 'utf8')
      for (var o, i, s, u, l, h, c, f, p, d = !1; ; )
        switch (n) {
          case 'hex':
            return go(this, e, t, r)
          case 'utf8':
          case 'utf-8':
            return (f = t), (p = r), qo($o(e, (c = this).length - f), c, f, p)
          case 'ascii':
            return yo(this, e, t, r)
          case 'latin1':
          case 'binary':
            return yo(this, e, t, r)
          case 'base64':
            return (u = this), (l = t), (h = r), qo(zo(e), u, l, h)
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return (i = t), (s = r), qo(No(e, (o = this).length - i), o, i, s)
          default:
            if (d) throw new TypeError('Unknown encoding: ' + n)
            ;(n = ('' + n).toLowerCase()), (d = !0)
        }
    }),
    (to.prototype.toJSON = function() {
      return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
      }
    })
  var _o = 4096
  function Eo(e) {
    var t = e.length
    if (t <= _o) return String.fromCharCode.apply(String, e)
    for (var r = '', n = 0; n < t; )
      r += String.fromCharCode.apply(String, e.slice(n, (n += _o)))
    return r
  }
  function Po(e, t, r) {
    var n = ''
    r = Math.min(e.length, r)
    for (var a = t; a < r; ++a) n += String.fromCharCode(127 & e[a])
    return n
  }
  function So(e, t, r) {
    var n = ''
    r = Math.min(e.length, r)
    for (var a = t; a < r; ++a) n += String.fromCharCode(e[a])
    return n
  }
  function xo(e, t, r) {
    var n = e.length
    ;(!t || t < 0) && (t = 0), (!r || r < 0 || n < r) && (r = n)
    for (var a = '', o = t; o < r; ++o) a += Mo(e[o])
    return a
  }
  function Ro(e, t, r) {
    for (var n = e.slice(t, r), a = '', o = 0; o < n.length; o += 2)
      a += String.fromCharCode(n[o] + 256 * n[o + 1])
    return a
  }
  function Oo(e, t, r) {
    if (e % 1 != 0 || e < 0) throw new RangeError('offset is not uint')
    if (r < e + t) throw new RangeError('Trying to access beyond buffer length')
  }
  function ko(e, t, r, n, a, o) {
    if (!ho(e))
      throw new TypeError('"buffer" argument must be a Buffer instance')
    if (a < t || t < o)
      throw new RangeError('"value" argument is out of bounds')
    if (r + n > e.length) throw new RangeError('Index out of range')
  }
  function To(e, t, r, n) {
    t < 0 && (t = 65535 + t + 1)
    for (var a = 0, o = Math.min(e.length - r, 2); a < o; ++a)
      e[r + a] = (t & (255 << (8 * (n ? a : 1 - a)))) >>> (8 * (n ? a : 1 - a))
  }
  function Ao(e, t, r, n) {
    t < 0 && (t = 4294967295 + t + 1)
    for (var a = 0, o = Math.min(e.length - r, 4); a < o; ++a)
      e[r + a] = (t >>> (8 * (n ? a : 3 - a))) & 255
  }
  function jo(e, t, r, n, a, o) {
    if (r + n > e.length) throw new RangeError('Index out of range')
    if (r < 0) throw new RangeError('Index out of range')
  }
  function Io(e, t, r, n, a) {
    return a || jo(e, 0, r, 4), Wa(e, t, r, n, 23, 4), r + 4
  }
  function Co(e, t, r, n, a) {
    return a || jo(e, 0, r, 8), Wa(e, t, r, n, 52, 8), r + 8
  }
  ;(to.prototype.slice = function(e, t) {
    var r,
      n = this.length
    if (
      ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : n < e && (e = n),
      (t = void 0 === t ? n : ~~t) < 0
        ? (t += n) < 0 && (t = 0)
        : n < t && (t = n),
      t < e && (t = e),
      to.TYPED_ARRAY_SUPPORT)
    )
      (r = this.subarray(e, t)).__proto__ = to.prototype
    else {
      var a = t - e
      r = new to(a, void 0)
      for (var o = 0; o < a; ++o) r[o] = this[o + e]
    }
    return r
  }),
    (to.prototype.readUIntLE = function(e, t, r) {
      ;(e |= 0), (t |= 0), r || Oo(e, t, this.length)
      for (var n = this[e], a = 1, o = 0; ++o < t && (a *= 256); )
        n += this[e + o] * a
      return n
    }),
    (to.prototype.readUIntBE = function(e, t, r) {
      ;(e |= 0), (t |= 0), r || Oo(e, t, this.length)
      for (var n = this[e + --t], a = 1; 0 < t && (a *= 256); )
        n += this[e + --t] * a
      return n
    }),
    (to.prototype.readUInt8 = function(e, t) {
      return t || Oo(e, 1, this.length), this[e]
    }),
    (to.prototype.readUInt16LE = function(e, t) {
      return t || Oo(e, 2, this.length), this[e] | (this[e + 1] << 8)
    }),
    (to.prototype.readUInt16BE = function(e, t) {
      return t || Oo(e, 2, this.length), (this[e] << 8) | this[e + 1]
    }),
    (to.prototype.readUInt32LE = function(e, t) {
      return (
        t || Oo(e, 4, this.length),
        (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
          16777216 * this[e + 3]
      )
    }),
    (to.prototype.readUInt32BE = function(e, t) {
      return (
        t || Oo(e, 4, this.length),
        16777216 * this[e] +
          ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
      )
    }),
    (to.prototype.readIntLE = function(e, t, r) {
      ;(e |= 0), (t |= 0), r || Oo(e, t, this.length)
      for (var n = this[e], a = 1, o = 0; ++o < t && (a *= 256); )
        n += this[e + o] * a
      return (a *= 128) <= n && (n -= Math.pow(2, 8 * t)), n
    }),
    (to.prototype.readIntBE = function(e, t, r) {
      ;(e |= 0), (t |= 0), r || Oo(e, t, this.length)
      for (var n = t, a = 1, o = this[e + --n]; 0 < n && (a *= 256); )
        o += this[e + --n] * a
      return (a *= 128) <= o && (o -= Math.pow(2, 8 * t)), o
    }),
    (to.prototype.readInt8 = function(e, t) {
      return (
        t || Oo(e, 1, this.length),
        128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
      )
    }),
    (to.prototype.readInt16LE = function(e, t) {
      t || Oo(e, 2, this.length)
      var r = this[e] | (this[e + 1] << 8)
      return 32768 & r ? 4294901760 | r : r
    }),
    (to.prototype.readInt16BE = function(e, t) {
      t || Oo(e, 2, this.length)
      var r = this[e + 1] | (this[e] << 8)
      return 32768 & r ? 4294901760 | r : r
    }),
    (to.prototype.readInt32LE = function(e, t) {
      return (
        t || Oo(e, 4, this.length),
        this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24)
      )
    }),
    (to.prototype.readInt32BE = function(e, t) {
      return (
        t || Oo(e, 4, this.length),
        (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]
      )
    }),
    (to.prototype.readFloatLE = function(e, t) {
      return t || Oo(e, 4, this.length), Ya(this, e, !0, 23, 4)
    }),
    (to.prototype.readFloatBE = function(e, t) {
      return t || Oo(e, 4, this.length), Ya(this, e, !1, 23, 4)
    }),
    (to.prototype.readDoubleLE = function(e, t) {
      return t || Oo(e, 8, this.length), Ya(this, e, !0, 52, 8)
    }),
    (to.prototype.readDoubleBE = function(e, t) {
      return t || Oo(e, 8, this.length), Ya(this, e, !1, 52, 8)
    }),
    (to.prototype.writeUIntLE = function(e, t, r, n) {
      ;((e = +e), (t |= 0), (r |= 0), n) ||
        ko(this, e, t, r, Math.pow(2, 8 * r) - 1, 0)
      var a = 1,
        o = 0
      for (this[t] = 255 & e; ++o < r && (a *= 256); )
        this[t + o] = (e / a) & 255
      return t + r
    }),
    (to.prototype.writeUIntBE = function(e, t, r, n) {
      ;((e = +e), (t |= 0), (r |= 0), n) ||
        ko(this, e, t, r, Math.pow(2, 8 * r) - 1, 0)
      var a = r - 1,
        o = 1
      for (this[t + a] = 255 & e; 0 <= --a && (o *= 256); )
        this[t + a] = (e / o) & 255
      return t + r
    }),
    (to.prototype.writeUInt8 = function(e, t, r) {
      return (
        (e = +e),
        (t |= 0),
        r || ko(this, e, t, 1, 255, 0),
        to.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
        (this[t] = 255 & e),
        t + 1
      )
    }),
    (to.prototype.writeUInt16LE = function(e, t, r) {
      return (
        (e = +e),
        (t |= 0),
        r || ko(this, e, t, 2, 65535, 0),
        to.TYPED_ARRAY_SUPPORT
          ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
          : To(this, e, t, !0),
        t + 2
      )
    }),
    (to.prototype.writeUInt16BE = function(e, t, r) {
      return (
        (e = +e),
        (t |= 0),
        r || ko(this, e, t, 2, 65535, 0),
        to.TYPED_ARRAY_SUPPORT
          ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
          : To(this, e, t, !1),
        t + 2
      )
    }),
    (to.prototype.writeUInt32LE = function(e, t, r) {
      return (
        (e = +e),
        (t |= 0),
        r || ko(this, e, t, 4, 4294967295, 0),
        to.TYPED_ARRAY_SUPPORT
          ? ((this[t + 3] = e >>> 24),
            (this[t + 2] = e >>> 16),
            (this[t + 1] = e >>> 8),
            (this[t] = 255 & e))
          : Ao(this, e, t, !0),
        t + 4
      )
    }),
    (to.prototype.writeUInt32BE = function(e, t, r) {
      return (
        (e = +e),
        (t |= 0),
        r || ko(this, e, t, 4, 4294967295, 0),
        to.TYPED_ARRAY_SUPPORT
          ? ((this[t] = e >>> 24),
            (this[t + 1] = e >>> 16),
            (this[t + 2] = e >>> 8),
            (this[t + 3] = 255 & e))
          : Ao(this, e, t, !1),
        t + 4
      )
    }),
    (to.prototype.writeIntLE = function(e, t, r, n) {
      if (((e = +e), (t |= 0), !n)) {
        var a = Math.pow(2, 8 * r - 1)
        ko(this, e, t, r, a - 1, -a)
      }
      var o = 0,
        i = 1,
        s = 0
      for (this[t] = 255 & e; ++o < r && (i *= 256); )
        e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1),
          (this[t + o] = (((e / i) >> 0) - s) & 255)
      return t + r
    }),
    (to.prototype.writeIntBE = function(e, t, r, n) {
      if (((e = +e), (t |= 0), !n)) {
        var a = Math.pow(2, 8 * r - 1)
        ko(this, e, t, r, a - 1, -a)
      }
      var o = r - 1,
        i = 1,
        s = 0
      for (this[t + o] = 255 & e; 0 <= --o && (i *= 256); )
        e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1),
          (this[t + o] = (((e / i) >> 0) - s) & 255)
      return t + r
    }),
    (to.prototype.writeInt8 = function(e, t, r) {
      return (
        (e = +e),
        (t |= 0),
        r || ko(this, e, t, 1, 127, -128),
        to.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
        e < 0 && (e = 255 + e + 1),
        (this[t] = 255 & e),
        t + 1
      )
    }),
    (to.prototype.writeInt16LE = function(e, t, r) {
      return (
        (e = +e),
        (t |= 0),
        r || ko(this, e, t, 2, 32767, -32768),
        to.TYPED_ARRAY_SUPPORT
          ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
          : To(this, e, t, !0),
        t + 2
      )
    }),
    (to.prototype.writeInt16BE = function(e, t, r) {
      return (
        (e = +e),
        (t |= 0),
        r || ko(this, e, t, 2, 32767, -32768),
        to.TYPED_ARRAY_SUPPORT
          ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
          : To(this, e, t, !1),
        t + 2
      )
    }),
    (to.prototype.writeInt32LE = function(e, t, r) {
      return (
        (e = +e),
        (t |= 0),
        r || ko(this, e, t, 4, 2147483647, -2147483648),
        to.TYPED_ARRAY_SUPPORT
          ? ((this[t] = 255 & e),
            (this[t + 1] = e >>> 8),
            (this[t + 2] = e >>> 16),
            (this[t + 3] = e >>> 24))
          : Ao(this, e, t, !0),
        t + 4
      )
    }),
    (to.prototype.writeInt32BE = function(e, t, r) {
      return (
        (e = +e),
        (t |= 0),
        r || ko(this, e, t, 4, 2147483647, -2147483648),
        e < 0 && (e = 4294967295 + e + 1),
        to.TYPED_ARRAY_SUPPORT
          ? ((this[t] = e >>> 24),
            (this[t + 1] = e >>> 16),
            (this[t + 2] = e >>> 8),
            (this[t + 3] = 255 & e))
          : Ao(this, e, t, !1),
        t + 4
      )
    }),
    (to.prototype.writeFloatLE = function(e, t, r) {
      return Io(this, e, t, !0, r)
    }),
    (to.prototype.writeFloatBE = function(e, t, r) {
      return Io(this, e, t, !1, r)
    }),
    (to.prototype.writeDoubleLE = function(e, t, r) {
      return Co(this, e, t, !0, r)
    }),
    (to.prototype.writeDoubleBE = function(e, t, r) {
      return Co(this, e, t, !1, r)
    }),
    (to.prototype.copy = function(e, t, r, n) {
      if (
        (r || (r = 0),
        n || 0 === n || (n = this.length),
        t >= e.length && (t = e.length),
        t || (t = 0),
        0 < n && n < r && (n = r),
        n === r)
      )
        return 0
      if (0 === e.length || 0 === this.length) return 0
      if (t < 0) throw new RangeError('targetStart out of bounds')
      if (r < 0 || r >= this.length)
        throw new RangeError('sourceStart out of bounds')
      if (n < 0) throw new RangeError('sourceEnd out of bounds')
      n > this.length && (n = this.length),
        e.length - t < n - r && (n = e.length - t + r)
      var a,
        o = n - r
      if (this === e && r < t && t < n)
        for (a = o - 1; 0 <= a; --a) e[a + t] = this[a + r]
      else if (o < 1e3 || !to.TYPED_ARRAY_SUPPORT)
        for (a = 0; a < o; ++a) e[a + t] = this[a + r]
      else Uint8Array.prototype.set.call(e, this.subarray(r, r + o), t)
      return o
    }),
    (to.prototype.fill = function(e, t, r, n) {
      if ('string' == typeof e) {
        if (
          ('string' == typeof t
            ? ((n = t), (t = 0), (r = this.length))
            : 'string' == typeof r && ((n = r), (r = this.length)),
          1 === e.length)
        ) {
          var a = e.charCodeAt(0)
          a < 256 && (e = a)
        }
        if (void 0 !== n && 'string' != typeof n)
          throw new TypeError('encoding must be a string')
        if ('string' == typeof n && !to.isEncoding(n))
          throw new TypeError('Unknown encoding: ' + n)
      } else 'number' == typeof e && (e &= 255)
      if (t < 0 || this.length < t || this.length < r)
        throw new RangeError('Out of range index')
      if (r <= t) return this
      var o
      if (
        ((t >>>= 0),
        (r = void 0 === r ? this.length : r >>> 0),
        e || (e = 0),
        'number' == typeof e)
      )
        for (o = t; o < r; ++o) this[o] = e
      else {
        var i = ho(e) ? e : $o(new to(e, n).toString()),
          s = i.length
        for (o = 0; o < r - t; ++o) this[o + t] = i[o % s]
      }
      return this
    })
  var Lo = /[^+\/0-9A-Za-z-_]/g
  function Do(e) {
    if ((e = Fo(e).replace(Lo, '')).length < 2) return ''
    for (; e.length % 4 != 0; ) e += '='
    return e
  }
  function Fo(e) {
    return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, '')
  }
  function Mo(e) {
    return e < 16 ? '0' + e.toString(16) : e.toString(16)
  }
  function $o(e, t) {
    var r
    t = t || 1 / 0
    for (var n = e.length, a = null, o = [], i = 0; i < n; ++i) {
      if (55295 < (r = e.charCodeAt(i)) && r < 57344) {
        if (!a) {
          if (56319 < r) {
            ;-1 < (t -= 3) && o.push(239, 191, 189)
            continue
          }
          if (i + 1 === n) {
            ;-1 < (t -= 3) && o.push(239, 191, 189)
            continue
          }
          a = r
          continue
        }
        if (r < 56320) {
          ;-1 < (t -= 3) && o.push(239, 191, 189), (a = r)
          continue
        }
        r = 65536 + (((a - 55296) << 10) | (r - 56320))
      } else a && -1 < (t -= 3) && o.push(239, 191, 189)
      if (((a = null), r < 128)) {
        if ((t -= 1) < 0) break
        o.push(r)
      } else if (r < 2048) {
        if ((t -= 2) < 0) break
        o.push((r >> 6) | 192, (63 & r) | 128)
      } else if (r < 65536) {
        if ((t -= 3) < 0) break
        o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128)
      } else {
        if (!(r < 1114112)) throw new Error('Invalid code point')
        if ((t -= 4) < 0) break
        o.push(
          (r >> 18) | 240,
          ((r >> 12) & 63) | 128,
          ((r >> 6) & 63) | 128,
          (63 & r) | 128
        )
      }
    }
    return o
  }
  function Uo(e) {
    for (var t = [], r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r))
    return t
  }
  function No(e, t) {
    for (var r, n, a, o = [], i = 0; i < e.length && !((t -= 2) < 0); ++i)
      (n = (r = e.charCodeAt(i)) >> 8), (a = r % 256), o.push(a), o.push(n)
    return o
  }
  function zo(e) {
    return Qa(Do(e))
  }
  function qo(e, t, r, n) {
    for (var a = 0; a < n && !(a + r >= t.length || a >= e.length); ++a)
      t[a + r] = e[a]
    return a
  }
  function Bo(e) {
    return (
      null != e &&
      (!!e._isBuffer ||
        Ho(e) ||
        ('function' == typeof (t = e).readFloatLE &&
          'function' == typeof t.slice &&
          Ho(t.slice(0, 0))))
    )
    var t
  }
  function Ho(e) {
    return (
      !!e.constructor &&
      'function' == typeof e.constructor.isBuffer &&
      e.constructor.isBuffer(e)
    )
  }
  S(S.S + S.F * !s, 'Object', {defineProperty: c.f})
  var Vo = m.Object,
    Qo = function(e, t, r) {
      return Vo.defineProperty(e, t, r)
    }
  S(S.S, 'Number', {
    isNaN: function(e) {
      return e != e
    }
  })
  var Go = m.Number.isNaN,
    Ko = function(e, t) {
      if (((t = t.split(':')[0]), !(e = +e))) return !1
      switch (t) {
        case 'http':
        case 'ws':
          return 80 !== e
        case 'https':
        case 'wss':
          return 443 !== e
        case 'ftp':
          return 21 !== e
        case 'gopher':
          return 70 !== e
        case 'file':
          return !1
      }
      return 0 !== e
    },
    Yo = Object.prototype.hasOwnProperty
  function Wo(e) {
    return decodeURIComponent(e.replace(/\+/g, ' '))
  }
  var Zo = {
      stringify: function(e, t) {
        t = t || ''
        var r = []
        for (var n in ('string' != typeof t && (t = '?'), e))
          Yo.call(e, n) &&
            r.push(encodeURIComponent(n) + '=' + encodeURIComponent(e[n]))
        return r.length ? t + r.join('&') : ''
      },
      parse: function(e) {
        for (var t, r = /([^=?&]+)=?([^&]*)/g, n = {}; (t = r.exec(e)); ) {
          var a = Wo(t[1]),
            o = Wo(t[2])
          a in n || (n[a] = o)
        }
        return n
      }
    },
    Jo = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
    Xo = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
    ei = [
      ['#', 'hash'],
      ['?', 'query'],
      function(e) {
        return e.replace('\\', '/')
      },
      ['/', 'pathname'],
      ['@', 'auth', 1],
      [NaN, 'host', void 0, 1, 1],
      [/:(\d+)$/, 'port', void 0, 1],
      [NaN, 'hostname', void 0, 1, 1]
    ],
    ti = {hash: 1, query: 1}
  function ri(e) {
    var t,
      r = (d && d.location) || {},
      n = {},
      a = pe((e = e || r))
    if ('blob:' === e.protocol) n = new oi(unescape(e.pathname), {})
    else if ('string' === a) for (t in ((n = new oi(e, {})), ti)) delete n[t]
    else if ('object' === a) {
      for (t in e) t in ti || (n[t] = e[t])
      void 0 === n.slashes && (n.slashes = Xo.test(e.href))
    }
    return n
  }
  function ni(e) {
    var t = Jo.exec(e)
    return {
      protocol: t[1] ? t[1].toLowerCase() : '',
      slashes: !!t[2],
      rest: t[3]
    }
  }
  function ai(e, t) {
    for (
      var r = (t || '/')
          .split('/')
          .slice(0, -1)
          .concat(e.split('/')),
        n = r.length,
        a = r[n - 1],
        o = !1,
        i = 0;
      n--;

    )
      '.' === r[n]
        ? r.splice(n, 1)
        : '..' === r[n]
          ? (r.splice(n, 1), i++)
          : i && (0 === n && (o = !0), r.splice(n, 1), i--)
    return (
      o && r.unshift(''), ('.' !== a && '..' !== a) || r.push(''), r.join('/')
    )
  }
  function oi(e, t, r) {
    if (!(this instanceof oi)) return new oi(e, t, r)
    var n,
      a,
      o,
      i,
      s,
      u,
      l = ei.slice(),
      h = pe(t),
      c = this,
      f = 0
    for (
      'object' !== h && 'string' !== h && ((r = t), (t = null)),
        r && 'function' != typeof r && (r = Zo.parse),
        t = ri(t),
        n = !(a = ni(e || '')).protocol && !a.slashes,
        c.slashes = a.slashes || (n && t.slashes),
        c.protocol = a.protocol || t.protocol || '',
        e = a.rest,
        a.slashes || (l[3] = [/(.*)/, 'pathname']);
      f < l.length;
      f++
    )
      'function' != typeof (i = l[f])
        ? ((o = i[0]),
          (u = i[1]),
          o != o
            ? (c[u] = e)
            : 'string' == typeof o
              ? ~(s = e.indexOf(o)) &&
                ('number' == typeof i[2]
                  ? ((c[u] = e.slice(0, s)), (e = e.slice(s + i[2])))
                  : ((c[u] = e.slice(s)), (e = e.slice(0, s))))
              : (s = o.exec(e)) && ((c[u] = s[1]), (e = e.slice(0, s.index))),
          (c[u] = c[u] || (n && i[3] && t[u]) || ''),
          i[4] && (c[u] = c[u].toLowerCase()))
        : (e = i(e))
    r && (c.query = r(c.query)),
      n &&
        t.slashes &&
        '/' !== c.pathname.charAt(0) &&
        ('' !== c.pathname || '' !== t.pathname) &&
        (c.pathname = ai(c.pathname, t.pathname)),
      Ko(c.port, c.protocol) || ((c.host = c.hostname), (c.port = '')),
      (c.username = c.password = ''),
      c.auth &&
        ((i = c.auth.split(':')),
        (c.username = i[0] || ''),
        (c.password = i[1] || '')),
      (c.origin =
        c.protocol && c.host && 'file:' !== c.protocol
          ? c.protocol + '//' + c.host
          : 'null'),
      (c.href = c.toString())
  }
  ;(oi.prototype = {
    set: function(e, t, r) {
      var n = this
      switch (e) {
        case 'query':
          'string' == typeof t && t.length && (t = (r || Zo.parse)(t)),
            (n[e] = t)
          break
        case 'port':
          ;(n[e] = t),
            Ko(t, n.protocol)
              ? t && (n.host = n.hostname + ':' + t)
              : ((n.host = n.hostname), (n[e] = ''))
          break
        case 'hostname':
          ;(n[e] = t), n.port && (t += ':' + n.port), (n.host = t)
          break
        case 'host':
          ;(n[e] = t),
            /:\d+$/.test(t)
              ? ((t = t.split(':')),
                (n.port = t.pop()),
                (n.hostname = t.join(':')))
              : ((n.hostname = t), (n.port = ''))
          break
        case 'protocol':
          ;(n.protocol = t.toLowerCase()), (n.slashes = !r)
          break
        case 'pathname':
        case 'hash':
          if (t) {
            var a = 'pathname' === e ? '/' : '#'
            n[e] = t.charAt(0) !== a ? a + t : t
          } else n[e] = t
          break
        default:
          n[e] = t
      }
      for (var o = 0; o < ei.length; o++) {
        var i = ei[o]
        i[4] && (n[i[1]] = n[i[1]].toLowerCase())
      }
      return (
        (n.origin =
          n.protocol && n.host && 'file:' !== n.protocol
            ? n.protocol + '//' + n.host
            : 'null'),
        (n.href = n.toString()),
        n
      )
    },
    toString: function(e) {
      ;(e && 'function' == typeof e) || (e = Zo.stringify)
      var t,
        r = this,
        n = r.protocol
      n && ':' !== n.charAt(n.length - 1) && (n += ':')
      var a = n + (r.slashes ? '//' : '')
      return (
        r.username &&
          ((a += r.username),
          r.password && (a += ':' + r.password),
          (a += '@')),
        (a += r.host + r.pathname),
        (t = 'object' === pe(r.query) ? e(r.query) : r.query) &&
          (a += '?' !== t.charAt(0) ? '?' + t : t),
        r.hash && (a += r.hash),
        a
      )
    }
  }),
    (oi.extractProtocol = ni),
    (oi.location = ri),
    (oi.qs = Zo)
  var ii = oi
  function si(e) {
    return (
      'string' == typeof e && (e = ii(e)),
      e.protocol && e.hostname
        ? (e.protocol + '//' + e.host).toLowerCase()
        : 'null'
    )
  }
  si.same = function(e, t) {
    return si(e) === si(t)
  }
  var ui = si
  te('keys', function() {
    return function(e) {
      return K(Z(e))
    }
  })
  var li = m.Object.keys,
    hi = 2147483647,
    ci = 36,
    fi = 1,
    pi = 26,
    di = 38,
    vi = 700,
    mi = 72,
    gi = 128,
    yi = '-',
    bi = /[^\x20-\x7E]/,
    wi = /[\x2E\u3002\uFF0E\uFF61]/g,
    _i = {
      overflow: 'Overflow: input needs wider integers to process',
      'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
      'invalid-input': 'Invalid input'
    },
    Ei = ci - fi,
    Pi = Math.floor,
    Si = String.fromCharCode
  function xi(e) {
    throw new RangeError(_i[e])
  }
  function Ri(e, t) {
    for (var r = e.length, n = []; r--; ) n[r] = t(e[r])
    return n
  }
  function Oi(e) {
    for (var t, r, n = [], a = 0, o = e.length; a < o; )
      55296 <= (t = e.charCodeAt(a++)) && t <= 56319 && a < o
        ? 56320 == (64512 & (r = e.charCodeAt(a++)))
          ? n.push(((1023 & t) << 10) + (1023 & r) + 65536)
          : (n.push(t), a--)
        : n.push(t)
    return n
  }
  function ki(e, t) {
    return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
  }
  function Ti(e, t, r) {
    var n = 0
    for (
      e = r ? Pi(e / vi) : e >> 1, e += Pi(e / t);
      (Ei * pi) >> 1 < e;
      n += ci
    )
      e = Pi(e / Ei)
    return Pi(n + ((Ei + 1) * e) / (e + di))
  }
  function Ai(e) {
    var t,
      r,
      n,
      a,
      o,
      i,
      s,
      u,
      l,
      h,
      c,
      f,
      p,
      d,
      v,
      m = []
    for (f = (e = Oi(e)).length, t = gi, o = mi, i = r = 0; i < f; ++i)
      (c = e[i]) < 128 && m.push(Si(c))
    for (n = a = m.length, a && m.push(yi); n < f; ) {
      for (s = hi, i = 0; i < f; ++i) t <= (c = e[i]) && c < s && (s = c)
      for (
        s - t > Pi((hi - r) / (p = n + 1)) && xi('overflow'),
          r += (s - t) * p,
          t = s,
          i = 0;
        i < f;
        ++i
      )
        if (((c = e[i]) < t && ++r > hi && xi('overflow'), c == t)) {
          for (
            u = r, l = ci;
            !(u < (h = l <= o ? fi : o + pi <= l ? pi : l - o));
            l += ci
          )
            (v = u - h),
              (d = ci - h),
              m.push(Si(ki(h + (v % d), 0))),
              (u = Pi(v / d))
          m.push(Si(ki(u, 0))), (o = Ti(r, p, n == a)), (r = 0), ++n
        }
      ++r, ++t
    }
    return m.join('')
  }
  var ji = br.f
  te('getOwnPropertyDescriptor', function() {
    return function(e, t) {
      return ji(T(e), t)
    }
  })
  var Ii = m.Object,
    Ci = function(e, t) {
      return Ii.getOwnPropertyDescriptor(e, t)
    },
    Li = m.JSON || (m.JSON = {stringify: JSON.stringify}),
    Di = function(e) {
      return Li.stringify.apply(Li, arguments)
    },
    Fi =
      'function' == typeof xr
        ? function(e, t) {
            ;(e.super_ = t),
              (e.prototype = xr(t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              }))
          }
        : function(e, t) {
            e.super_ = t
            var r = function() {}
            ;(r.prototype = t.prototype),
              (e.prototype = new r()),
              (e.prototype.constructor = e)
          },
    Mi = /%[sdj%]/g
  function $i(e) {
    if (!ns(e)) {
      for (var t = [], r = 0; r < arguments.length; r++)
        t.push(Bi(arguments[r]))
      return t.join(' ')
    }
    r = 1
    for (
      var n = arguments,
        a = n.length,
        o = String(e).replace(Mi, function(e) {
          if ('%%' === e) return '%'
          if (a <= r) return e
          switch (e) {
            case '%s':
              return String(n[r++])
            case '%d':
              return Number(n[r++])
            case '%j':
              try {
                return Di(n[r++])
              } catch (e) {
                return '[Circular]'
              }
            default:
              return e
          }
        }),
        i = n[r];
      r < a;
      i = n[++r]
    )
      es(i) || !ss(i) ? (o += ' ' + i) : (o += ' ' + Bi(i))
    return o
  }
  function Ui(e, t) {
    if (os(ra.process))
      return function() {
        return Ui(e, t).apply(this, arguments)
      }
    var r = !1
    return function() {
      return r || (console.error(t), (r = !0)), e.apply(this, arguments)
    }
  }
  var Ni,
    zi = {}
  function qi(t) {
    if ((os(Ni) && (Ni = ''), (t = t.toUpperCase()), !zi[t]))
      if (new RegExp('\\b' + t + '\\b', 'i').test(Ni)) {
        zi[t] = function() {
          var e = $i.apply(null, arguments)
          console.error('%s %d: %s', t, 0, e)
        }
      } else zi[t] = function() {}
    return zi[t]
  }
  function Bi(e, t) {
    var r = {seen: [], stylize: Vi}
    return (
      3 <= arguments.length && (r.depth = arguments[2]),
      4 <= arguments.length && (r.colors = arguments[3]),
      Xi(t) ? (r.showHidden = t) : t && gs(r, t),
      os(r.showHidden) && (r.showHidden = !1),
      os(r.depth) && (r.depth = 2),
      os(r.colors) && (r.colors = !1),
      os(r.customInspect) && (r.customInspect = !0),
      r.colors && (r.stylize = Hi),
      Qi(r, e, r.depth)
    )
  }
  function Hi(e, t) {
    var r = Bi.styles[t]
    return r ? '[' + Bi.colors[r][0] + 'm' + e + '[' + Bi.colors[r][1] + 'm' : e
  }
  function Vi(e, t) {
    return e
  }
  function Qi(t, r, n) {
    if (
      t.customInspect &&
      r &&
      hs(r.inspect) &&
      r.inspect !== Bi &&
      (!r.constructor || r.constructor.prototype !== r)
    ) {
      var e = r.inspect(n, t)
      return ns(e) || (e = Qi(t, e, n)), e
    }
    var a = Gi(t, r)
    if (a) return a
    var o,
      i = li(r),
      s = ((o = {}),
      i.forEach(function(e, t) {
        o[e] = !0
      }),
      o)
    if (
      (t.showHidden && (i = he(r)),
      ls(r) && (0 <= i.indexOf('message') || 0 <= i.indexOf('description')))
    )
      return Ki(r)
    if (0 === i.length) {
      if (hs(r)) {
        var u = r.name ? ': ' + r.name : ''
        return t.stylize('[Function' + u + ']', 'special')
      }
      if (is(r)) return t.stylize(RegExp.prototype.toString.call(r), 'regexp')
      if (us(r)) return t.stylize(Date.prototype.toString.call(r), 'date')
      if (ls(r)) return Ki(r)
    }
    var l,
      h = '',
      c = !1,
      f = ['{', '}']
    ;(Ji(r) && ((c = !0), (f = ['[', ']'])), hs(r)) &&
      (h = ' [Function' + (r.name ? ': ' + r.name : '') + ']')
    return (
      is(r) && (h = ' ' + RegExp.prototype.toString.call(r)),
      us(r) && (h = ' ' + Date.prototype.toUTCString.call(r)),
      ls(r) && (h = ' ' + Ki(r)),
      0 !== i.length || (c && 0 != r.length)
        ? n < 0
          ? is(r)
            ? t.stylize(RegExp.prototype.toString.call(r), 'regexp')
            : t.stylize('[Object]', 'special')
          : (t.seen.push(r),
            (l = c
              ? Yi(t, r, n, s, i)
              : i.map(function(e) {
                  return Wi(t, r, n, s, e, c)
                })),
            t.seen.pop(),
            Zi(l, h, f))
        : f[0] + h + f[1]
    )
  }
  function Gi(e, t) {
    if (os(t)) return e.stylize('undefined', 'undefined')
    if (ns(t)) {
      var r =
        "'" +
        Di(t)
          .replace(/^"|"$/g, '')
          .replace(/'/g, "\\'")
          .replace(/\\"/g, '"') +
        "'"
      return e.stylize(r, 'string')
    }
    return rs(t)
      ? e.stylize('' + t, 'number')
      : Xi(t)
        ? e.stylize('' + t, 'boolean')
        : es(t)
          ? e.stylize('null', 'null')
          : void 0
  }
  function Ki(e) {
    return '[' + Error.prototype.toString.call(e) + ']'
  }
  function Yi(t, r, n, a, e) {
    for (var o = [], i = 0, s = r.length; i < s; ++i)
      ys(r, String(i)) ? o.push(Wi(t, r, n, a, String(i), !0)) : o.push('')
    return (
      e.forEach(function(e) {
        e.match(/^\d+$/) || o.push(Wi(t, r, n, a, e, !0))
      }),
      o
    )
  }
  function Wi(e, t, r, n, a, o) {
    var i, s, u
    if (
      ((u = Ci(t, a) || {value: t[a]}).get
        ? (s = u.set
            ? e.stylize('[Getter/Setter]', 'special')
            : e.stylize('[Getter]', 'special'))
        : u.set && (s = e.stylize('[Setter]', 'special')),
      ys(n, a) || (i = '[' + a + ']'),
      s ||
        (e.seen.indexOf(u.value) < 0
          ? -1 <
              (s = es(r)
                ? Qi(e, u.value, null)
                : Qi(e, u.value, r - 1)).indexOf('\n') &&
            (s = o
              ? s
                  .split('\n')
                  .map(function(e) {
                    return '  ' + e
                  })
                  .join('\n')
                  .substr(2)
              : '\n' +
                s
                  .split('\n')
                  .map(function(e) {
                    return '   ' + e
                  })
                  .join('\n'))
          : (s = e.stylize('[Circular]', 'special'))),
      os(i))
    ) {
      if (o && a.match(/^\d+$/)) return s
      ;(i = Di('' + a)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
        ? ((i = i.substr(1, i.length - 2)), (i = e.stylize(i, 'name')))
        : ((i = i
            .replace(/'/g, "\\'")
            .replace(/\\"/g, '"')
            .replace(/(^"|"$)/g, "'")),
          (i = e.stylize(i, 'string')))
    }
    return i + ': ' + s
  }
  function Zi(e, t, r) {
    return 60 <
      e.reduce(function(e, t) {
        return t.indexOf('\n'), e + t.replace(/\u001b\[\d\d?m/g, '').length + 1
      }, 0)
      ? r[0] + ('' === t ? '' : t + '\n ') + ' ' + e.join(',\n  ') + ' ' + r[1]
      : r[0] + t + ' ' + e.join(', ') + ' ' + r[1]
  }
  function Ji(e) {
    return bn(e)
  }
  function Xi(e) {
    return 'boolean' == typeof e
  }
  function es(e) {
    return null === e
  }
  function ts(e) {
    return null == e
  }
  function rs(e) {
    return 'number' == typeof e
  }
  function ns(e) {
    return 'string' == typeof e
  }
  function as(e) {
    return 'symbol' === pe(e)
  }
  function os(e) {
    return void 0 === e
  }
  function is(e) {
    return ss(e) && '[object RegExp]' === ps(e)
  }
  function ss(e) {
    return 'object' === pe(e) && null !== e
  }
  function us(e) {
    return ss(e) && '[object Date]' === ps(e)
  }
  function ls(e) {
    return ss(e) && ('[object Error]' === ps(e) || e instanceof Error)
  }
  function hs(e) {
    return 'function' == typeof e
  }
  function cs(e) {
    return (
      null === e ||
      'boolean' == typeof e ||
      'number' == typeof e ||
      'string' == typeof e ||
      'symbol' === pe(e) ||
      void 0 === e
    )
  }
  function fs(e) {
    return Bo(e)
  }
  function ps(e) {
    return Object.prototype.toString.call(e)
  }
  function ds(e) {
    return e < 10 ? '0' + e.toString(10) : e.toString(10)
  }
  ;(Bi.colors = {
    bold: [1, 22],
    italic: [3, 23],
    underline: [4, 24],
    inverse: [7, 27],
    white: [37, 39],
    grey: [90, 39],
    black: [30, 39],
    blue: [34, 39],
    cyan: [36, 39],
    green: [32, 39],
    magenta: [35, 39],
    red: [31, 39],
    yellow: [33, 39]
  }),
    (Bi.styles = {
      special: 'cyan',
      number: 'yellow',
      boolean: 'yellow',
      undefined: 'grey',
      null: 'bold',
      string: 'green',
      date: 'magenta',
      regexp: 'red'
    })
  var vs = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]
  function ms() {
    var e, t
    console.log(
      '%s - %s',
      ((e = new Date()),
      (t = [ds(e.getHours()), ds(e.getMinutes()), ds(e.getSeconds())].join(
        ':'
      )),
      [e.getDate(), vs[e.getMonth()], t].join(' ')),
      $i.apply(null, arguments)
    )
  }
  function gs(e, t) {
    if (!t || !ss(t)) return e
    for (var r = li(t), n = r.length; n--; ) e[r[n]] = t[r[n]]
    return e
  }
  function ys(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }
  var bs = {
      inherits: Fi,
      _extend: gs,
      log: ms,
      isBuffer: fs,
      isPrimitive: cs,
      isFunction: hs,
      isError: ls,
      isDate: us,
      isObject: ss,
      isRegExp: is,
      isUndefined: os,
      isSymbol: as,
      isString: ns,
      isNumber: rs,
      isNullOrUndefined: ts,
      isNull: es,
      isBoolean: Xi,
      isArray: Ji,
      inspect: Bi,
      deprecate: Ui,
      format: $i,
      debuglog: qi
    },
    ws = Object.freeze({
      format: $i,
      deprecate: Ui,
      debuglog: qi,
      inspect: Bi,
      isArray: Ji,
      isBoolean: Xi,
      isNull: es,
      isNullOrUndefined: ts,
      isNumber: rs,
      isString: ns,
      isSymbol: as,
      isUndefined: os,
      isRegExp: is,
      isObject: ss,
      isDate: us,
      isError: ls,
      isFunction: hs,
      isPrimitive: cs,
      isBuffer: fs,
      log: ms,
      inherits: Fi,
      _extend: gs,
      default: bs
    })
  var _s =
    bn ||
    function(e) {
      return '[object Array]' === Object.prototype.toString.call(e)
    }
  function Es(e) {
    switch (pe(e)) {
      case 'string':
        return e
      case 'boolean':
        return e ? 'true' : 'false'
      case 'number':
        return isFinite(e) ? e : ''
      default:
        return ''
    }
  }
  function Ps(e, t) {
    if (e.map) return e.map(t)
    for (var r = [], n = 0; n < e.length; n++) r.push(t(e[n], n))
    return r
  }
  var Ss =
    li ||
    function(e) {
      var t = []
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.push(r)
      return t
    }
  function xs(e, t, r, n) {
    ;(t = t || '&'), (r = r || '=')
    var a = {}
    if ('string' != typeof e || 0 === e.length) return a
    var o = /\+/g
    e = e.split(t)
    var i = 1e3
    n && 'number' == typeof n.maxKeys && (i = n.maxKeys)
    var s,
      u,
      l = e.length
    0 < i && i < l && (l = i)
    for (var h = 0; h < l; ++h) {
      var c,
        f,
        p,
        d,
        v = e[h].replace(o, '%20'),
        m = v.indexOf(r)
      0 <= m
        ? ((c = v.substr(0, m)), (f = v.substr(m + 1)))
        : ((c = v), (f = '')),
        (p = decodeURIComponent(c)),
        (d = decodeURIComponent(f)),
        (s = a),
        (u = p),
        Object.prototype.hasOwnProperty.call(s, u)
          ? _s(a[p])
            ? a[p].push(d)
            : (a[p] = [a[p], d])
          : (a[p] = d)
    }
    return a
  }
  var Rs = {parse: zs, resolve: Vs, resolveObject: Qs, format: Bs, Url: Os}
  function Os() {
    ;(this.protocol = null),
      (this.slashes = null),
      (this.auth = null),
      (this.host = null),
      (this.port = null),
      (this.hostname = null),
      (this.hash = null),
      (this.search = null),
      (this.query = null),
      (this.pathname = null),
      (this.path = null),
      (this.href = null)
  }
  var ks = /^([a-z0-9.+-]+:)/i,
    Ts = /:[0-9]*$/,
    As = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
    js = ['{', '}', '|', '\\', '^', '`'].concat([
      '<',
      '>',
      '"',
      '`',
      ' ',
      '\r',
      '\n',
      '\t'
    ]),
    Is = ["'"].concat(js),
    Cs = ['%', '/', '?', ';', '#'].concat(Is),
    Ls = ['/', '?', '#'],
    Ds = 255,
    Fs = /^[+a-z0-9A-Z_-]{0,63}$/,
    Ms = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    $s = {javascript: !0, 'javascript:': !0},
    Us = {javascript: !0, 'javascript:': !0},
    Ns = {
      http: !0,
      https: !0,
      ftp: !0,
      gopher: !0,
      file: !0,
      'http:': !0,
      'https:': !0,
      'ftp:': !0,
      'gopher:': !0,
      'file:': !0
    }
  function zs(e, t, r) {
    if (e && ss(e) && e instanceof Os) return e
    var n = new Os()
    return n.parse(e, t, r), n
  }
  function qs(e, t, r, n) {
    if (!ns(t))
      throw new TypeError("Parameter 'url' must be a string, not " + pe(t))
    var a = t.indexOf('?'),
      o = -1 !== a && a < t.indexOf('#') ? '?' : '#',
      i = t.split(o)
    i[0] = i[0].replace(/\\/g, '/')
    var s = (t = i.join(o))
    if (((s = s.trim()), !n && 1 === t.split('#').length)) {
      var u = As.exec(s)
      if (u)
        return (
          (e.path = s),
          (e.href = s),
          (e.pathname = u[1]),
          u[2]
            ? ((e.search = u[2]),
              (e.query = r ? xs(e.search.substr(1)) : e.search.substr(1)))
            : r && ((e.search = ''), (e.query = {})),
          e
        )
    }
    var l,
      h,
      c,
      f,
      p,
      d,
      v,
      m,
      g,
      y = ks.exec(s)
    if (y) {
      var b = (y = y[0]).toLowerCase()
      ;(e.protocol = b), (s = s.substr(y.length))
    }
    if (n || y || s.match(/^\/\/[^@\/]+@[^@\/]+/)) {
      var w = '//' === s.substr(0, 2)
      !w || (y && Us[y]) || ((s = s.substr(2)), (e.slashes = !0))
    }
    if (!Us[y] && (w || (y && !Ns[y]))) {
      var _,
        E,
        P = -1
      for (l = 0; l < Ls.length; l++)
        -1 !== (h = s.indexOf(Ls[l])) && (-1 === P || h < P) && (P = h)
      for (
        -1 !== (E = -1 === P ? s.lastIndexOf('@') : s.lastIndexOf('@', P)) &&
          ((_ = s.slice(0, E)),
          (s = s.slice(E + 1)),
          (e.auth = decodeURIComponent(_))),
          P = -1,
          l = 0;
        l < Cs.length;
        l++
      )
        -1 !== (h = s.indexOf(Cs[l])) && (-1 === P || h < P) && (P = h)
      ;-1 === P && (P = s.length),
        (e.host = s.slice(0, P)),
        (s = s.slice(P)),
        Gs(e),
        (e.hostname = e.hostname || '')
      var S = '[' === e.hostname[0] && ']' === e.hostname[e.hostname.length - 1]
      if (!S) {
        var x = e.hostname.split(/\./)
        for (l = 0, c = x.length; l < c; l++) {
          var R = x[l]
          if (R && !R.match(Fs)) {
            for (var O = '', k = 0, T = R.length; k < T; k++)
              127 < R.charCodeAt(k) ? (O += 'x') : (O += R[k])
            if (!O.match(Fs)) {
              var A = x.slice(0, l),
                j = x.slice(l + 1),
                I = R.match(Ms)
              I && (A.push(I[1]), j.unshift(I[2])),
                j.length && (s = '/' + j.join('.') + s),
                (e.hostname = A.join('.'))
              break
            }
          }
        }
      }
      e.hostname.length > Ds
        ? (e.hostname = '')
        : (e.hostname = e.hostname.toLowerCase()),
        S ||
          (e.hostname = ((p = e.hostname),
          (v = function(e) {
            return bi.test(e) ? 'xn--' + Ai(e) : e
          }),
          (m = (d = p).split('@')),
          (g = ''),
          1 < m.length && ((g = m[0] + '@'), (d = m[1])),
          g + Ri((d = d.replace(wi, '.')).split('.'), v).join('.'))),
        (f = e.port ? ':' + e.port : '')
      var C = e.hostname || ''
      ;(e.host = C + f),
        (e.href += e.host),
        S &&
          ((e.hostname = e.hostname.substr(1, e.hostname.length - 2)),
          '/' !== s[0] && (s = '/' + s))
    }
    if (!$s[b])
      for (l = 0, c = Is.length; l < c; l++) {
        var L = Is[l]
        if (-1 !== s.indexOf(L)) {
          var D = encodeURIComponent(L)
          D === L && (D = escape(L)), (s = s.split(L).join(D))
        }
      }
    var F = s.indexOf('#')
    ;-1 !== F && ((e.hash = s.substr(F)), (s = s.slice(0, F)))
    var M = s.indexOf('?')
    if (
      (-1 !== M
        ? ((e.search = s.substr(M)),
          (e.query = s.substr(M + 1)),
          r && (e.query = xs(e.query)),
          (s = s.slice(0, M)))
        : r && ((e.search = ''), (e.query = {})),
      s && (e.pathname = s),
      Ns[b] && e.hostname && !e.pathname && (e.pathname = '/'),
      e.pathname || e.search)
    ) {
      f = e.pathname || ''
      var $ = e.search || ''
      e.path = f + $
    }
    return (e.href = Hs(e)), e
  }
  function Bs(e) {
    return ns(e) && (e = qs({}, e)), Hs(e)
  }
  function Hs(e) {
    var t = e.auth || ''
    t && ((t = (t = encodeURIComponent(t)).replace(/%3A/i, ':')), (t += '@'))
    var r,
      n,
      a,
      o,
      i = e.protocol || '',
      s = e.pathname || '',
      u = e.hash || '',
      l = !1,
      h = ''
    e.host
      ? (l = t + e.host)
      : e.hostname &&
        ((l =
          t +
          (-1 === e.hostname.indexOf(':')
            ? e.hostname
            : '[' + this.hostname + ']')),
        e.port && (l += ':' + e.port)),
      e.query &&
        ss(e.query) &&
        li(e.query).length &&
        ((r = e.query),
        (n = n || '&'),
        (a = a || '='),
        null === r && (r = void 0),
        (h =
          'object' === pe(r)
            ? Ps(Ss(r), function(e) {
                var t = encodeURIComponent(Es(e)) + a
                return _s(r[e])
                  ? Ps(r[e], function(e) {
                      return t + encodeURIComponent(Es(e))
                    }).join(n)
                  : t + encodeURIComponent(Es(r[e]))
              }).join(n)
            : o
              ? encodeURIComponent(Es(o)) + a + encodeURIComponent(Es(r))
              : ''))
    var c = e.search || (h && '?' + h) || ''
    return (
      i && ':' !== i.substr(-1) && (i += ':'),
      e.slashes || ((!i || Ns[i]) && !1 !== l)
        ? ((l = '//' + (l || '')), s && '/' !== s.charAt(0) && (s = '/' + s))
        : l || (l = ''),
      u && '#' !== u.charAt(0) && (u = '#' + u),
      c && '?' !== c.charAt(0) && (c = '?' + c),
      i +
        l +
        (s = s.replace(/[?#]/g, function(e) {
          return encodeURIComponent(e)
        })) +
        (c = c.replace('#', '%23')) +
        u
    )
  }
  function Vs(e, t) {
    return zs(e, !1, !0).resolve(t)
  }
  function Qs(e, t) {
    return e ? zs(e, !1, !0).resolveObject(t) : t
  }
  function Gs(e) {
    var t = e.host,
      r = Ts.exec(t)
    r &&
      (':' !== (r = r[0]) && (e.port = r.substr(1)),
      (t = t.substr(0, t.length - r.length))),
      t && (e.hostname = t)
  }
  ;(Os.prototype.parse = function(e, t, r) {
    return qs(this, e, t, r)
  }),
    (Os.prototype.format = function() {
      return Hs(this)
    }),
    (Os.prototype.resolve = function(e) {
      return this.resolveObject(zs(e, !1, !0)).format()
    }),
    (Os.prototype.resolveObject = function(e) {
      if (ns(e)) {
        var t = new Os()
        t.parse(e, !1, !0), (e = t)
      }
      for (var r, n = new Os(), a = li(this), o = 0; o < a.length; o++) {
        var i = a[o]
        n[i] = this[i]
      }
      if (((n.hash = e.hash), '' === e.href)) return (n.href = n.format()), n
      if (e.slashes && !e.protocol) {
        for (var s = li(e), u = 0; u < s.length; u++) {
          var l = s[u]
          'protocol' !== l && (n[l] = e[l])
        }
        return (
          Ns[n.protocol] &&
            n.hostname &&
            !n.pathname &&
            (n.path = n.pathname = '/'),
          (n.href = n.format()),
          n
        )
      }
      if (e.protocol && e.protocol !== n.protocol) {
        if (!Ns[e.protocol]) {
          for (var h = li(e), c = 0; c < h.length; c++) {
            var f = h[c]
            n[f] = e[f]
          }
          return (n.href = n.format()), n
        }
        if (((n.protocol = e.protocol), e.host || Us[e.protocol]))
          n.pathname = e.pathname
        else {
          for (
            r = (e.pathname || '').split('/');
            r.length && !(e.host = r.shift());

          );
          e.host || (e.host = ''),
            e.hostname || (e.hostname = ''),
            '' !== r[0] && r.unshift(''),
            r.length < 2 && r.unshift(''),
            (n.pathname = r.join('/'))
        }
        if (
          ((n.search = e.search),
          (n.query = e.query),
          (n.host = e.host || ''),
          (n.auth = e.auth),
          (n.hostname = e.hostname || e.host),
          (n.port = e.port),
          n.pathname || n.search)
        ) {
          var p = n.pathname || '',
            d = n.search || ''
          n.path = p + d
        }
        return (n.slashes = n.slashes || e.slashes), (n.href = n.format()), n
      }
      var v,
        m = n.pathname && '/' === n.pathname.charAt(0),
        g = e.host || (e.pathname && '/' === e.pathname.charAt(0)),
        y = g || m || (n.host && e.pathname),
        b = y,
        w = (n.pathname && n.pathname.split('/')) || [],
        _ = n.protocol && !Ns[n.protocol]
      if (
        ((r = (e.pathname && e.pathname.split('/')) || []),
        _ &&
          ((n.hostname = ''),
          (n.port = null),
          n.host && ('' === w[0] ? (w[0] = n.host) : w.unshift(n.host)),
          (n.host = ''),
          e.protocol &&
            ((e.hostname = null),
            (e.port = null),
            e.host && ('' === r[0] ? (r[0] = e.host) : r.unshift(e.host)),
            (e.host = null)),
          (y = y && ('' === r[0] || '' === w[0]))),
        g)
      )
        (n.host = e.host || '' === e.host ? e.host : n.host),
          (n.hostname =
            e.hostname || '' === e.hostname ? e.hostname : n.hostname),
          (n.search = e.search),
          (n.query = e.query),
          (w = r)
      else if (r.length)
        w || (w = []),
          w.pop(),
          (w = w.concat(r)),
          (n.search = e.search),
          (n.query = e.query)
      else if (!ts(e.search))
        return (
          _ &&
            ((n.hostname = n.host = w.shift()),
            (v = !!(n.host && 0 < n.host.indexOf('@')) && n.host.split('@')) &&
              ((n.auth = v.shift()), (n.host = n.hostname = v.shift()))),
          (n.search = e.search),
          (n.query = e.query),
          (es(n.pathname) && es(n.search)) ||
            (n.path =
              (n.pathname ? n.pathname : '') + (n.search ? n.search : '')),
          (n.href = n.format()),
          n
        )
      if (!w.length)
        return (
          (n.pathname = null),
          n.search ? (n.path = '/' + n.search) : (n.path = null),
          (n.href = n.format()),
          n
        )
      for (
        var E = w.slice(-1)[0],
          P =
            ((n.host || e.host || 1 < w.length) && ('.' === E || '..' === E)) ||
            '' === E,
          S = 0,
          x = w.length;
        0 <= x;
        x--
      )
        '.' === (E = w[x])
          ? w.splice(x, 1)
          : '..' === E
            ? (w.splice(x, 1), S++)
            : S && (w.splice(x, 1), S--)
      if (!y && !b) for (; S--; S) w.unshift('..')
      !y || '' === w[0] || (w[0] && '/' === w[0].charAt(0)) || w.unshift(''),
        P && '/' !== w.join('/').substr(-1) && w.push('')
      var R = '' === w[0] || (w[0] && '/' === w[0].charAt(0))
      return (
        _ &&
          ((n.hostname = n.host = R ? '' : w.length ? w.shift() : ''),
          (v = !!(n.host && 0 < n.host.indexOf('@')) && n.host.split('@')) &&
            ((n.auth = v.shift()), (n.host = n.hostname = v.shift()))),
        (y = y || (n.host && w.length)) && !R && w.unshift(''),
        w.length
          ? (n.pathname = w.join('/'))
          : ((n.pathname = null), (n.path = null)),
        (es(n.pathname) && es(n.search)) ||
          (n.path =
            (n.pathname ? n.pathname : '') + (n.search ? n.search : '')),
        (n.auth = e.auth || n.auth),
        (n.slashes = n.slashes || e.slashes),
        (n.href = n.format()),
        n
      )
    }),
    (Os.prototype.parseHost = function() {
      return Gs(this)
    })
  var Ks = Object.freeze({
      parse: zs,
      resolve: Vs,
      resolveObject: Qs,
      format: Bs,
      default: Rs,
      Url: Os
    }),
    Ys = v.Reflect,
    Ws =
      (Ys && Ys.ownKeys) ||
      function(e) {
        var t = ne.f(y(e)),
          r = Y.f
        return r ? t.concat(r(e)) : t
      }
  S(S.S, 'Reflect', {ownKeys: Ws})
  var Zs = m.Reflect.ownKeys
  function Js() {}
  function Xs() {
    Xs.init.call(this)
  }
  function eu(e) {
    return void 0 === e._maxListeners ? Xs.defaultMaxListeners : e._maxListeners
  }
  function tu(e, t, r) {
    if (t) e.call(r)
    else for (var n = e.length, a = hu(e, n), o = 0; o < n; ++o) a[o].call(r)
  }
  function ru(e, t, r, n) {
    if (t) e.call(r, n)
    else for (var a = e.length, o = hu(e, a), i = 0; i < a; ++i) o[i].call(r, n)
  }
  function nu(e, t, r, n, a) {
    if (t) e.call(r, n, a)
    else
      for (var o = e.length, i = hu(e, o), s = 0; s < o; ++s) i[s].call(r, n, a)
  }
  function au(e, t, r, n, a, o) {
    if (t) e.call(r, n, a, o)
    else
      for (var i = e.length, s = hu(e, i), u = 0; u < i; ++u)
        s[u].call(r, n, a, o)
  }
  function ou(e, t, r, n) {
    if (t) e.apply(r, n)
    else
      for (var a = e.length, o = hu(e, a), i = 0; i < a; ++i) o[i].apply(r, n)
  }
  function iu(e, t, r, n) {
    var a, o, i, s
    if ('function' != typeof r)
      throw new TypeError('"listener" argument must be a function')
    if (
      ((o = e._events)
        ? (o.newListener &&
            (e.emit('newListener', t, r.listener ? r.listener : r),
            (o = e._events)),
          (i = o[t]))
        : ((o = e._events = new Js()), (e._eventsCount = 0)),
      i)
    ) {
      if (
        ('function' == typeof i
          ? (i = o[t] = n ? [r, i] : [i, r])
          : n
            ? i.unshift(r)
            : i.push(r),
        !i.warned && (a = eu(e)) && 0 < a && i.length > a)
      ) {
        i.warned = !0
        var u = new Error(
          'Possible EventEmitter memory leak detected. ' +
            i.length +
            ' ' +
            t +
            ' listeners added. Use emitter.setMaxListeners() to increase limit'
        )
        ;(u.name = 'MaxListenersExceededWarning'),
          (u.emitter = e),
          (u.type = t),
          (u.count = i.length),
          (s = u),
          'function' == typeof console.warn ? console.warn(s) : console.log(s)
      }
    } else (i = o[t] = r), ++e._eventsCount
    return e
  }
  function su(e, t, r) {
    var n = !1
    function a() {
      e.removeListener(t, a), n || ((n = !0), r.apply(e, arguments))
    }
    return (a.listener = r), a
  }
  function uu(e) {
    var t = this._events
    if (t) {
      var r = t[e]
      if ('function' == typeof r) return 1
      if (r) return r.length
    }
    return 0
  }
  function lu(e, t) {
    for (var r = t, n = r + 1, a = e.length; n < a; r += 1, n += 1) e[r] = e[n]
    e.pop()
  }
  function hu(e, t) {
    for (var r = new Array(t); t--; ) r[t] = e[t]
    return r
  }
  function cu(e) {
    for (var t = new Array(e.length), r = 0; r < t.length; ++r)
      t[r] = e[r].listener || e[r]
    return t
  }
  ;(Js.prototype = xr(null)),
    ((Xs.EventEmitter = Xs).usingDomains = !1),
    (Xs.prototype.domain = void 0),
    (Xs.prototype._events = void 0),
    (Xs.prototype._maxListeners = void 0),
    (Xs.defaultMaxListeners = 10),
    (Xs.init = function() {
      ;(this.domain = null),
        Xs.usingDomains && (void 0).active && (void 0).Domain,
        (this._events && this._events !== Pr(this)._events) ||
          ((this._events = new Js()), (this._eventsCount = 0)),
        (this._maxListeners = this._maxListeners || void 0)
    }),
    (Xs.prototype.setMaxListeners = function(e) {
      if ('number' != typeof e || e < 0 || isNaN(e))
        throw new TypeError('"n" argument must be a positive number')
      return (this._maxListeners = e), this
    }),
    (Xs.prototype.getMaxListeners = function() {
      return eu(this)
    }),
    (Xs.prototype.emit = function(e) {
      var t,
        r,
        n,
        a,
        o,
        i,
        s,
        u = 'error' === e
      if ((i = this._events)) u = u && null == i.error
      else if (!u) return !1
      if (((s = this.domain), u)) {
        if (((t = arguments[1]), s))
          return (
            t || (t = new Error('Uncaught, unspecified "error" event')),
            (t.domainEmitter = this),
            (t.domain = s),
            (t.domainThrown = !1),
            s.emit('error', t),
            !1
          )
        if (t instanceof Error) throw t
        var l = new Error('Uncaught, unspecified "error" event. (' + t + ')')
        throw ((l.context = t), l)
      }
      if (!(r = i[e])) return !1
      var h = 'function' == typeof r
      switch ((n = arguments.length)) {
        case 1:
          tu(r, h, this)
          break
        case 2:
          ru(r, h, this, arguments[1])
          break
        case 3:
          nu(r, h, this, arguments[1], arguments[2])
          break
        case 4:
          au(r, h, this, arguments[1], arguments[2], arguments[3])
          break
        default:
          for (a = new Array(n - 1), o = 1; o < n; o++) a[o - 1] = arguments[o]
          ou(r, h, this, a)
      }
      return !0
    }),
    (Xs.prototype.on = Xs.prototype.addListener = function(e, t) {
      return iu(this, e, t, !1)
    }),
    (Xs.prototype.prependListener = function(e, t) {
      return iu(this, e, t, !0)
    }),
    (Xs.prototype.once = function(e, t) {
      if ('function' != typeof t)
        throw new TypeError('"listener" argument must be a function')
      return this.on(e, su(this, e, t)), this
    }),
    (Xs.prototype.prependOnceListener = function(e, t) {
      if ('function' != typeof t)
        throw new TypeError('"listener" argument must be a function')
      return this.prependListener(e, su(this, e, t)), this
    }),
    (Xs.prototype.removeListener = function(e, t) {
      var r, n, a, o, i
      if ('function' != typeof t)
        throw new TypeError('"listener" argument must be a function')
      if (!(n = this._events)) return this
      if (!(r = n[e])) return this
      if (r === t || (r.listener && r.listener === t))
        0 == --this._eventsCount
          ? (this._events = new Js())
          : (delete n[e],
            n.removeListener && this.emit('removeListener', e, r.listener || t))
      else if ('function' != typeof r) {
        for (a = -1, o = r.length; 0 < o--; )
          if (r[o] === t || (r[o].listener && r[o].listener === t)) {
            ;(i = r[o].listener), (a = o)
            break
          }
        if (a < 0) return this
        if (1 === r.length) {
          if (((r[0] = void 0), 0 == --this._eventsCount))
            return (this._events = new Js()), this
          delete n[e]
        } else lu(r, a)
        n.removeListener && this.emit('removeListener', e, i || t)
      }
      return this
    }),
    (Xs.prototype.removeAllListeners = function(e) {
      var t, r
      if (!(r = this._events)) return this
      if (!r.removeListener)
        return (
          0 === arguments.length
            ? ((this._events = new Js()), (this._eventsCount = 0))
            : r[e] &&
              (0 == --this._eventsCount
                ? (this._events = new Js())
                : delete r[e]),
          this
        )
      if (0 === arguments.length) {
        for (var n, a = li(r), o = 0; o < a.length; ++o)
          'removeListener' !== (n = a[o]) && this.removeAllListeners(n)
        return (
          this.removeAllListeners('removeListener'),
          (this._events = new Js()),
          (this._eventsCount = 0),
          this
        )
      }
      if ('function' == typeof (t = r[e])) this.removeListener(e, t)
      else if (t) for (; this.removeListener(e, t[t.length - 1]), t[0]; );
      return this
    }),
    (Xs.prototype.listeners = function(e) {
      var t,
        r = this._events
      return r && (t = r[e])
        ? 'function' == typeof t
          ? [t.listener || t]
          : cu(t)
        : []
    }),
    (Xs.listenerCount = function(e, t) {
      return 'function' == typeof e.listenerCount
        ? e.listenerCount(t)
        : uu.call(e, t)
    }),
    (Xs.prototype.listenerCount = uu),
    (Xs.prototype.eventNames = function() {
      return 0 < this._eventsCount ? Zs(this._events) : []
    })
  var fu,
    pu,
    du = Object.freeze({default: Xs, EventEmitter: Xs}),
    vu = xu(ra.fetch) && xu(ra.ReadableStream)
  function mu() {
    if (void 0 !== fu) return fu
    try {
      new ra.Blob([new ArrayBuffer(1)]), (fu = !0)
    } catch (e) {
      fu = !1
    }
    return fu
  }
  function gu(e) {
    pu ||
      (pu = new ra.XMLHttpRequest()).open(
        'GET',
        ra.location.host ? '/' : 'https://example.com'
      )
    try {
      return (pu.responseType = e), pu.responseType === e
    } catch (e) {
      return !1
    }
  }
  var yu = void 0 !== ra.ArrayBuffer,
    bu = yu && xu(ra.ArrayBuffer.prototype.slice),
    wu = yu && gu('arraybuffer'),
    _u = !vu && bu && gu('ms-stream'),
    Eu = !vu && yu && gu('moz-chunked-arraybuffer'),
    Pu = xu(pu.overrideMimeType),
    Su = xu(ra.VBArray)
  function xu(e) {
    return 'function' == typeof e
  }
  pu = null
  var Ru = (m.getIterator = function(e) {
    var t = vt(e)
    if ('function' != typeof t) throw TypeError(e + ' is not iterable!')
    return y(t.call(e))
  })
  function Ou() {
    ;(this.head = null), (this.tail = null), (this.length = 0)
  }
  ;(Ou.prototype.push = function(e) {
    var t = {data: e, next: null}
    0 < this.length ? (this.tail.next = t) : (this.head = t),
      (this.tail = t),
      ++this.length
  }),
    (Ou.prototype.unshift = function(e) {
      var t = {data: e, next: this.head}
      0 === this.length && (this.tail = t), (this.head = t), ++this.length
    }),
    (Ou.prototype.shift = function() {
      if (0 !== this.length) {
        var e = this.head.data
        return (
          1 === this.length
            ? (this.head = this.tail = null)
            : (this.head = this.head.next),
          --this.length,
          e
        )
      }
    }),
    (Ou.prototype.clear = function() {
      ;(this.head = this.tail = null), (this.length = 0)
    }),
    (Ou.prototype.join = function(e) {
      if (0 === this.length) return ''
      for (var t = this.head, r = '' + t.data; (t = t.next); ) r += e + t.data
      return r
    }),
    (Ou.prototype.concat = function(e) {
      if (0 === this.length) return to.alloc(0)
      if (1 === this.length) return this.head.data
      for (var t = to.allocUnsafe(e >>> 0), r = this.head, n = 0; r; )
        r.data.copy(t, n), (n += r.data.length), (r = r.next)
      return t
    })
  var ku =
    to.isEncoding ||
    function(e) {
      switch (e && e.toLowerCase()) {
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
        case 'raw':
          return !0
        default:
          return !1
      }
    }
  function Tu(e) {
    if (e && !ku(e)) throw new Error('Unknown encoding: ' + e)
  }
  function Au(e) {
    switch (
      ((this.encoding = (e || 'utf8').toLowerCase().replace(/[-_]/, '')),
      Tu(e),
      this.encoding)
    ) {
      case 'utf8':
        this.surrogateSize = 3
        break
      case 'ucs2':
      case 'utf16le':
        ;(this.surrogateSize = 2), (this.detectIncompleteChar = Iu)
        break
      case 'base64':
        ;(this.surrogateSize = 3), (this.detectIncompleteChar = Cu)
        break
      default:
        return void (this.write = ju)
    }
    ;(this.charBuffer = new to(6)),
      (this.charReceived = 0),
      (this.charLength = 0)
  }
  function ju(e) {
    return e.toString(this.encoding)
  }
  function Iu(e) {
    ;(this.charReceived = e.length % 2),
      (this.charLength = this.charReceived ? 2 : 0)
  }
  function Cu(e) {
    ;(this.charReceived = e.length % 3),
      (this.charLength = this.charReceived ? 3 : 0)
  }
  ;(Au.prototype.write = function(e) {
    for (var t = ''; this.charLength; ) {
      var r =
        e.length >= this.charLength - this.charReceived
          ? this.charLength - this.charReceived
          : e.length
      if (
        (e.copy(this.charBuffer, this.charReceived, 0, r),
        (this.charReceived += r),
        this.charReceived < this.charLength)
      )
        return ''
      if (
        ((e = e.slice(r, e.length)),
        !(
          55296 <=
            (a = (t = this.charBuffer
              .slice(0, this.charLength)
              .toString(this.encoding)).charCodeAt(t.length - 1)) && a <= 56319
        ))
      ) {
        if (((this.charReceived = this.charLength = 0), 0 === e.length))
          return t
        break
      }
      ;(this.charLength += this.surrogateSize), (t = '')
    }
    this.detectIncompleteChar(e)
    var n = e.length
    this.charLength &&
      (e.copy(this.charBuffer, 0, e.length - this.charReceived, n),
      (n -= this.charReceived))
    var a
    n = (t += e.toString(this.encoding, 0, n)).length - 1
    if (55296 <= (a = t.charCodeAt(n)) && a <= 56319) {
      var o = this.surrogateSize
      return (
        (this.charLength += o),
        (this.charReceived += o),
        this.charBuffer.copy(this.charBuffer, o, 0, o),
        e.copy(this.charBuffer, 0, 0, o),
        t.substring(0, n)
      )
    }
    return t
  }),
    (Au.prototype.detectIncompleteChar = function(e) {
      for (var t = 3 <= e.length ? 3 : e.length; 0 < t; t--) {
        var r = e[e.length - t]
        if (1 == t && r >> 5 == 6) {
          this.charLength = 2
          break
        }
        if (t <= 2 && r >> 4 == 14) {
          this.charLength = 3
          break
        }
        if (t <= 3 && r >> 3 == 30) {
          this.charLength = 4
          break
        }
      }
      this.charReceived = t
    }),
    (Au.prototype.end = function(e) {
      var t = ''
      if ((e && e.length && (t = this.write(e)), this.charReceived)) {
        var r = this.charReceived,
          n = this.charBuffer,
          a = this.encoding
        t += n.slice(0, r).toString(a)
      }
      return t
    }),
    (Mu.ReadableState = Fu)
  var Lu = qi('stream')
  function Du(e, t, r) {
    if ('function' == typeof e.prependListener) return e.prependListener(t, r)
    e._events && e._events[t]
      ? bn(e._events[t])
        ? e._events[t].unshift(r)
        : (e._events[t] = [r, e._events[t]])
      : e.on(t, r)
  }
  function Fu(e, t) {
    ;(e = e || {}),
      (this.objectMode = !!e.objectMode),
      t instanceof Pl &&
        (this.objectMode = this.objectMode || !!e.readableObjectMode)
    var r = e.highWaterMark,
      n = this.objectMode ? 16 : 16384
    ;(this.highWaterMark = r || 0 === r ? r : n),
      (this.highWaterMark = ~~this.highWaterMark),
      (this.buffer = new Ou()),
      (this.length = 0),
      (this.pipes = null),
      (this.pipesCount = 0),
      (this.flowing = null),
      (this.ended = !1),
      (this.endEmitted = !1),
      (this.reading = !1),
      (this.sync = !0),
      (this.needReadable = !1),
      (this.emittedReadable = !1),
      (this.readableListening = !1),
      (this.resumeScheduled = !1),
      (this.defaultEncoding = e.defaultEncoding || 'utf8'),
      (this.ranOut = !1),
      (this.awaitDrain = 0),
      (this.readingMore = !1),
      (this.decoder = null),
      (this.encoding = null),
      e.encoding &&
        ((this.decoder = new Au(e.encoding)), (this.encoding = e.encoding))
  }
  function Mu(e) {
    if (!(this instanceof Mu)) return new Mu(e)
    ;(this._readableState = new Fu(e, this)),
      (this.readable = !0),
      e && 'function' == typeof e.read && (this._read = e.read),
      Xs.call(this)
  }
  function $u(e, t, r, n, a) {
    var o,
      i = zu(t, r)
    if (i) e.emit('error', i)
    else if (null === r) (t.reading = !1), qu(e, t)
    else if (t.objectMode || (r && 0 < r.length))
      if (t.ended && !a) {
        var s = new Error('stream.push() after EOF')
        e.emit('error', s)
      } else if (t.endEmitted && a) {
        var u = new Error('stream.unshift() after end event')
        e.emit('error', u)
      } else {
        var l
        !t.decoder ||
          a ||
          n ||
          ((r = t.decoder.write(r)), (l = !t.objectMode && 0 === r.length)),
          a || (t.reading = !1),
          l ||
            (t.flowing && 0 === t.length && !t.sync
              ? (e.emit('data', r), e.read(0))
              : ((t.length += t.objectMode ? 1 : r.length),
                a ? t.buffer.unshift(r) : t.buffer.push(r),
                t.needReadable && Bu(e))),
          Vu(e, t)
      }
    else a || (t.reading = !1)
    return (
      !(o = t).ended &&
      (o.needReadable || o.length < o.highWaterMark || 0 === o.length)
    )
  }
  Fi(Mu, Xs),
    (Mu.prototype.push = function(e, t) {
      var r = this._readableState
      return (
        r.objectMode ||
          'string' != typeof e ||
          ((t = t || r.defaultEncoding) !== r.encoding &&
            ((e = to.from(e, t)), (t = ''))),
        $u(this, r, e, t, !1)
      )
    }),
    (Mu.prototype.unshift = function(e) {
      return $u(this, this._readableState, e, '', !0)
    }),
    (Mu.prototype.isPaused = function() {
      return !1 === this._readableState.flowing
    }),
    (Mu.prototype.setEncoding = function(e) {
      return (
        (this._readableState.decoder = new Au(e)),
        (this._readableState.encoding = e),
        this
      )
    })
  var Uu = 8388608
  function Nu(e, t) {
    return e <= 0 || (0 === t.length && t.ended)
      ? 0
      : t.objectMode
        ? 1
        : e != e
          ? t.flowing && t.length
            ? t.buffer.head.data.length
            : t.length
          : (e > t.highWaterMark &&
              (t.highWaterMark = (Uu <= (r = e)
                ? (r = Uu)
                : (r--,
                  (r |= r >>> 1),
                  (r |= r >>> 2),
                  (r |= r >>> 4),
                  (r |= r >>> 8),
                  (r |= r >>> 16),
                  r++),
              r)),
            e <= t.length ? e : t.ended ? t.length : ((t.needReadable = !0), 0))
    var r
  }
  function zu(e, t) {
    var r = null
    return (
      Bo(t) ||
        'string' == typeof t ||
        null == t ||
        e.objectMode ||
        (r = new TypeError('Invalid non-string/buffer chunk')),
      r
    )
  }
  function qu(e, t) {
    if (!t.ended) {
      if (t.decoder) {
        var r = t.decoder.end()
        r &&
          r.length &&
          (t.buffer.push(r), (t.length += t.objectMode ? 1 : r.length))
      }
      ;(t.ended = !0), Bu(e)
    }
  }
  function Bu(e) {
    var t = e._readableState
    ;(t.needReadable = !1),
      t.emittedReadable ||
        (Lu('emitReadable', t.flowing),
        (t.emittedReadable = !0),
        t.sync ? va(Hu, e) : Hu(e))
  }
  function Hu(e) {
    Lu('emit readable'), e.emit('readable'), Wu(e)
  }
  function Vu(e, t) {
    t.readingMore || ((t.readingMore = !0), va(Qu, e, t))
  }
  function Qu(e, t) {
    for (
      var r = t.length;
      !t.reading &&
      !t.flowing &&
      !t.ended &&
      t.length < t.highWaterMark &&
      (Lu('maybeReadMore read 0'), e.read(0), r !== t.length);

    )
      r = t.length
    t.readingMore = !1
  }
  function Gu(e) {
    Lu('readable nexttick read 0'), e.read(0)
  }
  function Ku(e, t) {
    t.resumeScheduled || ((t.resumeScheduled = !0), va(Yu, e, t))
  }
  function Yu(e, t) {
    t.reading || (Lu('resume read 0'), e.read(0)),
      (t.resumeScheduled = !1),
      (t.awaitDrain = 0),
      e.emit('resume'),
      Wu(e),
      t.flowing && !t.reading && e.read(0)
  }
  function Wu(e) {
    var t = e._readableState
    for (Lu('flow', t.flowing); t.flowing && null !== e.read(); );
  }
  function Zu(e, t) {
    return 0 === t.length
      ? null
      : (t.objectMode
          ? (r = t.buffer.shift())
          : !e || e >= t.length
            ? ((r = t.decoder
                ? t.buffer.join('')
                : 1 === t.buffer.length
                  ? t.buffer.head.data
                  : t.buffer.concat(t.length)),
              t.buffer.clear())
            : (r = Ju(e, t.buffer, t.decoder)),
        r)
    var r
  }
  function Ju(e, t, r) {
    var n
    return (
      e < t.head.data.length
        ? ((n = t.head.data.slice(0, e)), (t.head.data = t.head.data.slice(e)))
        : (n = e === t.head.data.length ? t.shift() : r ? Xu(e, t) : el(e, t)),
      n
    )
  }
  function Xu(e, t) {
    var r = t.head,
      n = 1,
      a = r.data
    for (e -= a.length; (r = r.next); ) {
      var o = r.data,
        i = e > o.length ? o.length : e
      if ((i === o.length ? (a += o) : (a += o.slice(0, e)), 0 === (e -= i))) {
        i === o.length
          ? (++n, r.next ? (t.head = r.next) : (t.head = t.tail = null))
          : ((t.head = r).data = o.slice(i))
        break
      }
      ++n
    }
    return (t.length -= n), a
  }
  function el(e, t) {
    var r = to.allocUnsafe(e),
      n = t.head,
      a = 1
    for (n.data.copy(r), e -= n.data.length; (n = n.next); ) {
      var o = n.data,
        i = e > o.length ? o.length : e
      if ((o.copy(r, r.length - e, 0, i), 0 === (e -= i))) {
        i === o.length
          ? (++a, n.next ? (t.head = n.next) : (t.head = t.tail = null))
          : ((t.head = n).data = o.slice(i))
        break
      }
      ++a
    }
    return (t.length -= a), r
  }
  function tl(e) {
    var t = e._readableState
    if (0 < t.length)
      throw new Error('"endReadable()" called on non-empty stream')
    t.endEmitted || ((t.ended = !0), va(rl, t, e))
  }
  function rl(e, t) {
    e.endEmitted ||
      0 !== e.length ||
      ((e.endEmitted = !0), (t.readable = !1), t.emit('end'))
  }
  function nl(e, t) {
    for (var r = 0, n = e.length; r < n; r++) t(e[r], r)
  }
  function al(e, t) {
    for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r
    return -1
  }
  function ol() {}
  function il(e, t, r) {
    ;(this.chunk = e),
      (this.encoding = t),
      (this.callback = r),
      (this.next = null)
  }
  function sl(e, t) {
    Object.defineProperty(this, 'buffer', {
      get: Ui(function() {
        return this.getBuffer()
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer instead.')
    }),
      (e = e || {}),
      (this.objectMode = !!e.objectMode),
      t instanceof Pl &&
        (this.objectMode = this.objectMode || !!e.writableObjectMode)
    var r = e.highWaterMark,
      n = this.objectMode ? 16 : 16384
    ;(this.highWaterMark = r || 0 === r ? r : n),
      (this.highWaterMark = ~~this.highWaterMark),
      (this.needDrain = !1),
      (this.ending = !1),
      (this.ended = !1)
    var a = (this.finished = !1) === e.decodeStrings
    ;(this.decodeStrings = !a),
      (this.defaultEncoding = e.defaultEncoding || 'utf8'),
      (this.length = 0),
      (this.writing = !1),
      (this.corked = 0),
      (this.sync = !0),
      (this.bufferProcessing = !1),
      (this.onwrite = function(e) {
        cl(t, e)
      }),
      (this.writecb = null),
      (this.writelen = 0),
      (this.bufferedRequest = null),
      (this.lastBufferedRequest = null),
      (this.pendingcb = 0),
      (this.prefinished = !1),
      (this.errorEmitted = !1),
      (this.bufferedRequestCount = 0),
      (this.corkedRequestsFree = new bl(this))
  }
  function ul(e) {
    if (!(this instanceof ul || this instanceof Pl)) return new ul(e)
    ;(this._writableState = new sl(e, this)),
      (this.writable = !0),
      e &&
        ('function' == typeof e.write && (this._write = e.write),
        'function' == typeof e.writev && (this._writev = e.writev)),
      Xs.call(this)
  }
  function ll(e, t, r, n, a) {
    var o, i, s
    ;(i = r),
      (s = n),
      (o = t).objectMode ||
        !1 === o.decodeStrings ||
        'string' != typeof i ||
        (i = to.from(i, s)),
      to.isBuffer((r = i)) && (n = 'buffer')
    var u = t.objectMode ? 1 : r.length
    t.length += u
    var l = t.length < t.highWaterMark
    if ((l || (t.needDrain = !0), t.writing || t.corked)) {
      var h = t.lastBufferedRequest
      ;(t.lastBufferedRequest = new il(r, n, a)),
        h
          ? (h.next = t.lastBufferedRequest)
          : (t.bufferedRequest = t.lastBufferedRequest),
        (t.bufferedRequestCount += 1)
    } else hl(e, t, !1, u, r, n, a)
    return l
  }
  function hl(e, t, r, n, a, o, i) {
    ;(t.writelen = n),
      (t.writecb = i),
      (t.writing = !0),
      (t.sync = !0),
      r ? e._writev(a, t.onwrite) : e._write(a, o, t.onwrite),
      (t.sync = !1)
  }
  function cl(e, t) {
    var r,
      n,
      a,
      o,
      i,
      s = e._writableState,
      u = s.sync,
      l = s.writecb
    if (
      (((r = s).writing = !1),
      (r.writecb = null),
      (r.length -= r.writelen),
      (r.writelen = 0),
      t)
    )
      (n = e),
        (a = u),
        (o = t),
        (i = l),
        --s.pendingcb,
        a ? va(i, o) : i(o),
        (n._writableState.errorEmitted = !0),
        n.emit('error', o)
    else {
      var h = vl(s)
      h || s.corked || s.bufferProcessing || !s.bufferedRequest || dl(e, s),
        u ? va(fl, e, s, h, l) : fl(e, s, h, l)
    }
  }
  function fl(e, t, r, n) {
    r || pl(e, t), t.pendingcb--, n(), gl(e, t)
  }
  function pl(e, t) {
    0 === t.length && t.needDrain && ((t.needDrain = !1), e.emit('drain'))
  }
  function dl(e, t) {
    t.bufferProcessing = !0
    var r = t.bufferedRequest
    if (e._writev && r && r.next) {
      var n = t.bufferedRequestCount,
        a = new Array(n),
        o = t.corkedRequestsFree
      o.entry = r
      for (var i = 0; r; ) (r = (a[i] = r).next), (i += 1)
      hl(e, t, !0, t.length, a, '', o.finish),
        t.pendingcb++,
        (t.lastBufferedRequest = null),
        o.next
          ? ((t.corkedRequestsFree = o.next), (o.next = null))
          : (t.corkedRequestsFree = new bl(t))
    } else {
      for (; r; ) {
        var s = r.chunk,
          u = r.encoding,
          l = r.callback
        if (
          (hl(e, t, !1, t.objectMode ? 1 : s.length, s, u, l),
          (r = r.next),
          t.writing)
        )
          break
      }
      null === r && (t.lastBufferedRequest = null)
    }
    ;(t.bufferedRequestCount = 0),
      (t.bufferedRequest = r),
      (t.bufferProcessing = !1)
  }
  function vl(e) {
    return (
      e.ending &&
      0 === e.length &&
      null === e.bufferedRequest &&
      !e.finished &&
      !e.writing
    )
  }
  function ml(e, t) {
    t.prefinished || ((t.prefinished = !0), e.emit('prefinish'))
  }
  function gl(e, t) {
    var r = vl(t)
    return (
      r &&
        (0 === t.pendingcb
          ? (ml(e, t), (t.finished = !0), e.emit('finish'))
          : ml(e, t)),
      r
    )
  }
  function yl(e, t, r) {
    ;(t.ending = !0),
      gl(e, t),
      r && (t.finished ? va(r) : e.once('finish', r)),
      (t.ended = !0),
      (e.writable = !1)
  }
  function bl(n) {
    var a = this
    ;(this.next = null),
      (this.entry = null),
      (this.finish = function(e) {
        var t = a.entry
        for (a.entry = null; t; ) {
          var r = t.callback
          n.pendingcb--, r(e), (t = t.next)
        }
        n.corkedRequestsFree
          ? (n.corkedRequestsFree.next = a)
          : (n.corkedRequestsFree = a)
      })
  }
  ;(Mu.prototype.read = function(e) {
    Lu('read', e), (e = Na(e, 10))
    var t = this._readableState,
      r = e
    if (
      (0 !== e && (t.emittedReadable = !1),
      0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended))
    )
      return (
        Lu('read: emitReadable', t.length, t.ended),
        0 === t.length && t.ended ? tl(this) : Bu(this),
        null
      )
    if (0 === (e = Nu(e, t)) && t.ended) return 0 === t.length && tl(this), null
    var n,
      a = t.needReadable
    return (
      Lu('need readable', a),
      (0 === t.length || t.length - e < t.highWaterMark) &&
        Lu('length less than watermark', (a = !0)),
      t.ended || t.reading
        ? Lu('reading or ended', (a = !1))
        : a &&
          (Lu('do read'),
          (t.reading = !0),
          (t.sync = !0),
          0 === t.length && (t.needReadable = !0),
          this._read(t.highWaterMark),
          (t.sync = !1),
          t.reading || (e = Nu(r, t))),
      null === (n = 0 < e ? Zu(e, t) : null)
        ? ((t.needReadable = !0), (e = 0))
        : (t.length -= e),
      0 === t.length &&
        (t.ended || (t.needReadable = !0), r !== e && t.ended && tl(this)),
      null !== n && this.emit('data', n),
      n
    )
  }),
    (Mu.prototype._read = function(e) {
      this.emit('error', new Error('not implemented'))
    }),
    (Mu.prototype.pipe = function(r, e) {
      var t = this,
        n = this._readableState
      switch (n.pipesCount) {
        case 0:
          n.pipes = r
          break
        case 1:
          n.pipes = [n.pipes, r]
          break
        default:
          n.pipes.push(r)
      }
      ;(n.pipesCount += 1), Lu('pipe count=%d opts=%j', n.pipesCount, e)
      var a = !e || !1 !== e.end ? i : h
      function o(e) {
        Lu('onunpipe'), e === t && h()
      }
      function i() {
        Lu('onend'), r.end()
      }
      n.endEmitted ? va(a) : t.once('end', a), r.on('unpipe', o)
      var s,
        u = ((s = t),
        function() {
          var e = s._readableState
          Lu('pipeOnDrain', e.awaitDrain),
            e.awaitDrain && e.awaitDrain--,
            0 === e.awaitDrain &&
              s.listeners('data').length &&
              ((e.flowing = !0), Wu(s))
        })
      r.on('drain', u)
      var l = !1
      function h() {
        Lu('cleanup'),
          r.removeListener('close', d),
          r.removeListener('finish', v),
          r.removeListener('drain', u),
          r.removeListener('error', p),
          r.removeListener('unpipe', o),
          t.removeListener('end', i),
          t.removeListener('end', h),
          t.removeListener('data', f),
          (l = !0),
          !n.awaitDrain ||
            (r._writableState && !r._writableState.needDrain) ||
            u()
      }
      var c = !1
      function f(e) {
        Lu('ondata'),
          (c = !1) !== r.write(e) ||
            c ||
            (((1 === n.pipesCount && n.pipes === r) ||
              (1 < n.pipesCount && -1 !== al(n.pipes, r))) &&
              !l &&
              (Lu('false write response, pause', t._readableState.awaitDrain),
              t._readableState.awaitDrain++,
              (c = !0)),
            t.pause())
      }
      function p(e) {
        var t
        Lu('onerror', e),
          m(),
          r.removeListener('error', p),
          0 === ((t = 'error'), r.listeners(t).length) && r.emit('error', e)
      }
      function d() {
        r.removeListener('finish', v), m()
      }
      function v() {
        Lu('onfinish'), r.removeListener('close', d), m()
      }
      function m() {
        Lu('unpipe'), t.unpipe(r)
      }
      return (
        t.on('data', f),
        Du(r, 'error', p),
        r.once('close', d),
        r.once('finish', v),
        r.emit('pipe', t),
        n.flowing || (Lu('pipe resume'), t.resume()),
        r
      )
    }),
    (Mu.prototype.unpipe = function(e) {
      var t = this._readableState
      if (0 === t.pipesCount) return this
      if (1 === t.pipesCount)
        return (
          (e && e !== t.pipes) ||
            (e || (e = t.pipes),
            (t.pipes = null),
            (t.pipesCount = 0),
            (t.flowing = !1),
            e && e.emit('unpipe', this)),
          this
        )
      if (!e) {
        var r = t.pipes,
          n = t.pipesCount
        ;(t.pipes = null), (t.pipesCount = 0), (t.flowing = !1)
        for (var a = 0; a < n; a++) r[a].emit('unpipe', this)
        return this
      }
      var o = al(t.pipes, e)
      return (
        -1 === o ||
          (t.pipes.splice(o, 1),
          (t.pipesCount -= 1),
          1 === t.pipesCount && (t.pipes = t.pipes[0]),
          e.emit('unpipe', this)),
        this
      )
    }),
    (Mu.prototype.addListener = Mu.prototype.on = function(e, t) {
      var r = Xs.prototype.on.call(this, e, t)
      if ('data' === e) !1 !== this._readableState.flowing && this.resume()
      else if ('readable' === e) {
        var n = this._readableState
        n.endEmitted ||
          n.readableListening ||
          ((n.readableListening = n.needReadable = !0),
          (n.emittedReadable = !1),
          n.reading ? n.length && Bu(this) : va(Gu, this))
      }
      return r
    }),
    (Mu.prototype.resume = function() {
      var e = this._readableState
      return e.flowing || (Lu('resume'), (e.flowing = !0), Ku(this, e)), this
    }),
    (Mu.prototype.pause = function() {
      return (
        Lu('call pause flowing=%j', this._readableState.flowing),
        !1 !== this._readableState.flowing &&
          (Lu('pause'), (this._readableState.flowing = !1), this.emit('pause')),
        this
      )
    }),
    (Mu.prototype.wrap = function(t) {
      var r = this._readableState,
        n = !1,
        a = this
      for (var e in (t.on('end', function() {
        if ((Lu('wrapped end'), r.decoder && !r.ended)) {
          var e = r.decoder.end()
          e && e.length && a.push(e)
        }
        a.push(null)
      }),
      t.on('data', function(e) {
        ;(Lu('wrapped data'),
        r.decoder && (e = r.decoder.write(e)),
        r.objectMode && null == e) ||
          ((r.objectMode || (e && e.length)) &&
            (a.push(e) || ((n = !0), t.pause())))
      }),
      t))
        void 0 === this[e] &&
          'function' == typeof t[e] &&
          (this[e] = (function(e) {
            return function() {
              return t[e].apply(t, arguments)
            }
          })(e))
      return (
        nl(['error', 'close', 'destroy', 'pause', 'resume'], function(e) {
          t.on(e, a.emit.bind(a, e))
        }),
        (a._read = function(e) {
          Lu('wrapped _read', e), n && ((n = !1), t.resume())
        }),
        a
      )
    }),
    (Mu._fromList = Zu),
    (ul.WritableState = sl),
    Fi(ul, Xs),
    (sl.prototype.getBuffer = function() {
      for (var e = this.bufferedRequest, t = []; e; ) t.push(e), (e = e.next)
      return t
    }),
    (ul.prototype.pipe = function() {
      this.emit('error', new Error('Cannot pipe, not readable'))
    }),
    (ul.prototype.write = function(e, t, r) {
      var n,
        a,
        o,
        i,
        s,
        u,
        l,
        h,
        c,
        f = this._writableState,
        p = !1
      return (
        'function' == typeof t && ((r = t), (t = null)),
        to.isBuffer(e) ? (t = 'buffer') : t || (t = f.defaultEncoding),
        'function' != typeof r && (r = ol),
        f.ended
          ? ((l = this),
            (h = r),
            (c = new Error('write after end')),
            l.emit('error', c),
            va(h, c))
          : ((n = this),
            (a = f),
            (i = r),
            (u = !(s = !0)),
            null === (o = e)
              ? (u = new TypeError('May not write null values to stream'))
              : to.isBuffer(o) ||
                'string' == typeof o ||
                void 0 === o ||
                a.objectMode ||
                (u = new TypeError('Invalid non-string/buffer chunk')),
            u && (n.emit('error', u), va(i, u), (s = !1)),
            s && (f.pendingcb++, (p = ll(this, f, e, t, r)))),
        p
      )
    }),
    (ul.prototype.cork = function() {
      this._writableState.corked++
    }),
    (ul.prototype.uncork = function() {
      var e = this._writableState
      e.corked &&
        (e.corked--,
        e.writing ||
          e.corked ||
          e.finished ||
          e.bufferProcessing ||
          !e.bufferedRequest ||
          dl(this, e))
    }),
    (ul.prototype.setDefaultEncoding = function(e) {
      if (
        ('string' == typeof e && (e = e.toLowerCase()),
        !(
          -1 <
          [
            'hex',
            'utf8',
            'utf-8',
            'ascii',
            'binary',
            'base64',
            'ucs2',
            'ucs-2',
            'utf16le',
            'utf-16le',
            'raw'
          ].indexOf((e + '').toLowerCase())
        ))
      )
        throw new TypeError('Unknown encoding: ' + e)
      return (this._writableState.defaultEncoding = e), this
    }),
    (ul.prototype._write = function(e, t, r) {
      r(new Error('not implemented'))
    }),
    (ul.prototype._writev = null),
    (ul.prototype.end = function(e, t, r) {
      var n = this._writableState
      'function' == typeof e
        ? ((r = e), (t = e = null))
        : 'function' == typeof t && ((r = t), (t = null)),
        null != e && this.write(e, t),
        n.corked && ((n.corked = 1), this.uncork()),
        n.ending || n.finished || yl(this, n, r)
    }),
    Fi(Pl, Mu)
  for (var wl = li(ul.prototype), _l = 0; _l < wl.length; _l++) {
    var El = wl[_l]
    Pl.prototype[El] || (Pl.prototype[El] = ul.prototype[El])
  }
  function Pl(e) {
    if (!(this instanceof Pl)) return new Pl(e)
    Mu.call(this, e),
      ul.call(this, e),
      e && !1 === e.readable && (this.readable = !1),
      e && !1 === e.writable && (this.writable = !1),
      (this.allowHalfOpen = !0),
      e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1),
      this.once('end', Sl)
  }
  function Sl() {
    this.allowHalfOpen || this._writableState.ended || va(xl, this)
  }
  function xl(e) {
    e.end()
  }
  function Rl(r) {
    ;(this.afterTransform = function(e, t) {
      return Ol(r, e, t)
    }),
      (this.needTransform = !1),
      (this.transforming = !1),
      (this.writecb = null),
      (this.writechunk = null),
      (this.writeencoding = null)
  }
  function Ol(e, t, r) {
    var n = e._transformState
    n.transforming = !1
    var a = n.writecb
    if (!a) return e.emit('error', new Error('no writecb in Transform class'))
    ;(n.writechunk = null), (n.writecb = null) != r && e.push(r), a(t)
    var o = e._readableState
    ;(o.reading = !1),
      (o.needReadable || o.length < o.highWaterMark) && e._read(o.highWaterMark)
  }
  function kl(e) {
    if (!(this instanceof kl)) return new kl(e)
    Pl.call(this, e), (this._transformState = new Rl(this))
    var t = this
    ;(this._readableState.needReadable = !0),
      (this._readableState.sync = !1),
      e &&
        ('function' == typeof e.transform && (this._transform = e.transform),
        'function' == typeof e.flush && (this._flush = e.flush)),
      this.once('prefinish', function() {
        'function' == typeof this._flush
          ? this._flush(function(e) {
              Tl(t, e)
            })
          : Tl(t)
      })
  }
  function Tl(e, t) {
    if (t) return e.emit('error', t)
    var r = e._writableState,
      n = e._transformState
    if (r.length) throw new Error('Calling transform done when ws.length != 0')
    if (n.transforming)
      throw new Error('Calling transform done when still transforming')
    return e.push(null)
  }
  function Al(e) {
    if (!(this instanceof Al)) return new Al(e)
    kl.call(this, e)
  }
  function jl() {
    Xs.call(this)
  }
  Fi(kl, Pl),
    (kl.prototype.push = function(e, t) {
      return (
        (this._transformState.needTransform = !1),
        Pl.prototype.push.call(this, e, t)
      )
    }),
    (kl.prototype._transform = function(e, t, r) {
      throw new Error('Not implemented')
    }),
    (kl.prototype._write = function(e, t, r) {
      var n = this._transformState
      if (
        ((n.writecb = r),
        (n.writechunk = e),
        (n.writeencoding = t),
        !n.transforming)
      ) {
        var a = this._readableState
        ;(n.needTransform || a.needReadable || a.length < a.highWaterMark) &&
          this._read(a.highWaterMark)
      }
    }),
    (kl.prototype._read = function(e) {
      var t = this._transformState
      null !== t.writechunk && t.writecb && !t.transforming
        ? ((t.transforming = !0),
          this._transform(t.writechunk, t.writeencoding, t.afterTransform))
        : (t.needTransform = !0)
    }),
    Fi(Al, kl),
    (Al.prototype._transform = function(e, t, r) {
      r(null, e)
    }),
    Fi(jl, Xs),
    (jl.Readable = Mu),
    (jl.Writable = ul),
    (jl.Duplex = Pl),
    (jl.Transform = kl),
    (jl.PassThrough = Al),
    ((jl.Stream = jl).prototype.pipe = function(t, e) {
      var r = this
      function n(e) {
        t.writable && !1 === t.write(e) && r.pause && r.pause()
      }
      function a() {
        r.readable && r.resume && r.resume()
      }
      r.on('data', n),
        t.on('drain', a),
        t._isStdio || (e && !1 === e.end) || (r.on('end', i), r.on('close', s))
      var o = !1
      function i() {
        o || ((o = !0), t.end())
      }
      function s() {
        o || ((o = !0), 'function' == typeof t.destroy && t.destroy())
      }
      function u(e) {
        if ((l(), 0 === Xs.listenerCount(this, 'error'))) throw e
      }
      function l() {
        r.removeListener('data', n),
          t.removeListener('drain', a),
          r.removeListener('end', i),
          r.removeListener('close', s),
          r.removeListener('error', u),
          t.removeListener('error', u),
          r.removeListener('end', l),
          r.removeListener('close', l),
          t.removeListener('close', l)
      }
      return (
        r.on('error', u),
        t.on('error', u),
        r.on('end', l),
        r.on('close', l),
        t.on('close', l),
        t.emit('pipe', r),
        t
      )
    })
  var Il = 3,
    Cl = 4
  function Ll(e, t, r) {
    var n,
      a = this
    if (
      (Mu.call(a),
      (a._mode = r),
      (a.headers = {}),
      (a.rawHeaders = []),
      (a.trailers = {}),
      (a.rawTrailers = []),
      a.on('end', function() {
        va(function() {
          a.emit('close')
        })
      }),
      'fetch' === r)
    ) {
      ;(a._fetchResponse = t),
        (a.url = t.url),
        (a.statusCode = t.status),
        (a.statusMessage = t.statusText)
      for (var o, i, s = Ru(t.headers); (o = (i = s.next()).value), !i.done; )
        (a.headers[o[0].toLowerCase()] = o[1]), a.rawHeaders.push(o[0], o[1])
      var u = t.body.getReader()
      ;(n = function() {
        u.read().then(function(e) {
          a._destroyed ||
            (e.done ? a.push(null) : (a.push(new to(e.value)), n()))
        })
      })()
    } else {
      if (
        ((a._xhr = e),
        (a._pos = 0),
        (a.url = e.responseURL),
        (a.statusCode = e.status),
        (a.statusMessage = e.statusText),
        e
          .getAllResponseHeaders()
          .split(/\r?\n/)
          .forEach(function(e) {
            var t = e.match(/^([^:]+):\s*(.*)/)
            if (t) {
              var r = t[1].toLowerCase()
              'set-cookie' === r
                ? (void 0 === a.headers[r] && (a.headers[r] = []),
                  a.headers[r].push(t[2]))
                : void 0 !== a.headers[r]
                  ? (a.headers[r] += ', ' + t[2])
                  : (a.headers[r] = t[2]),
                a.rawHeaders.push(t[1], t[2])
            }
          }),
        (a._charset = 'x-user-defined'),
        !Pu)
      ) {
        var l = a.rawHeaders['mime-type']
        if (l) {
          var h = l.match(/;\s*charset=([^;])(;|$)/)
          h && (a._charset = h[1].toLowerCase())
        }
        a._charset || (a._charset = 'utf-8')
      }
    }
  }
  function Dl(e) {
    if (e instanceof Uint8Array) {
      if (0 === e.byteOffset && e.byteLength === e.buffer.byteLength)
        return e.buffer
      if ('function' == typeof e.buffer.slice)
        return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength)
    }
    if (Bo(e)) {
      for (var t = new Uint8Array(e.length), r = e.length, n = 0; n < r; n++)
        t[n] = e[n]
      return t.buffer
    }
    throw new Error('Argument must be a Buffer')
  }
  function Fl(t) {
    var e,
      r = this
    ul.call(r),
      (r._opts = t),
      (r._body = []),
      (r._headers = {}),
      t.auth &&
        r.setHeader(
          'Authorization',
          'Basic ' + new to(t.auth).toString('base64')
        ),
      li(t.headers).forEach(function(e) {
        r.setHeader(e, t.headers[e])
      })
    var n,
      a,
      o = !0
    if ('disable-fetch' === t.mode) e = !(o = !1)
    else if ('prefer-streaming' === t.mode) e = !1
    else if ('allow-wrong-content-type' === t.mode) e = !Pu
    else {
      if (t.mode && 'default' !== t.mode && 'prefer-fast' !== t.mode)
        throw new Error('Invalid value for opts.mode')
      e = !0
    }
    ;(r._mode = ((n = e),
    (a = o),
    vu && a
      ? 'fetch'
      : Eu
        ? 'moz-chunked-arraybuffer'
        : _u
          ? 'ms-stream'
          : wu && n
            ? 'arraybuffer'
            : Su && n
              ? 'text:vbarray'
              : 'text')),
      r.on('finish', function() {
        r._onFinish()
      })
  }
  Fi(Ll, Mu),
    (Ll.prototype._read = function() {}),
    (Ll.prototype._onXHRProgress = function() {
      var t = this,
        e = t._xhr,
        r = null
      switch (t._mode) {
        case 'text:vbarray':
          if (e.readyState !== Cl) break
          try {
            r = new ra.VBArray(e.responseBody).toArray()
          } catch (e) {}
          if (null !== r) {
            t.push(new to(r))
            break
          }
        case 'text':
          try {
            r = e.responseText
          } catch (e) {
            t._mode = 'text:vbarray'
            break
          }
          if (r.length > t._pos) {
            var n = r.substr(t._pos)
            if ('x-user-defined' === t._charset) {
              for (var a = new to(n.length), o = 0; o < n.length; o++)
                a[o] = 255 & n.charCodeAt(o)
              t.push(a)
            } else t.push(n, t._charset)
            t._pos = r.length
          }
          break
        case 'arraybuffer':
          if (e.readyState !== Cl || !e.response) break
          ;(r = e.response), t.push(new to(new Uint8Array(r)))
          break
        case 'moz-chunked-arraybuffer':
          if (((r = e.response), e.readyState !== Il || !r)) break
          t.push(new to(new Uint8Array(r)))
          break
        case 'ms-stream':
          if (((r = e.response), e.readyState !== Il)) break
          var i = new ra.MSStreamReader()
          ;(i.onprogress = function() {
            i.result.byteLength > t._pos &&
              (t.push(new to(new Uint8Array(i.result.slice(t._pos)))),
              (t._pos = i.result.byteLength))
          }),
            (i.onload = function() {
              t.push(null)
            }),
            i.readAsArrayBuffer(r)
      }
      t._xhr.readyState === Cl && 'ms-stream' !== t._mode && t.push(null)
    }),
    Fi(Fl, ul)
  var Ml = [
    'accept-charset',
    'accept-encoding',
    'access-control-request-headers',
    'access-control-request-method',
    'connection',
    'content-length',
    'cookie',
    'cookie2',
    'date',
    'dnt',
    'expect',
    'host',
    'keep-alive',
    'origin',
    'referer',
    'te',
    'trailer',
    'transfer-encoding',
    'upgrade',
    'user-agent',
    'via'
  ]
  function $l(e) {
    try {
      var t = e.status
      return null !== t && 0 !== t
    } catch (e) {
      return !1
    }
  }
  function Ul(e, t) {
    'string' == typeof e && (e = zs(e))
    var r = -1 === ra.location.protocol.search(/^https?:$/) ? 'http:' : '',
      n = e.protocol || r,
      a = e.hostname || e.host,
      o = e.port,
      i = e.path || '/'
    a && -1 !== a.indexOf(':') && (a = '[' + a + ']'),
      (e.url = (a ? n + '//' + a : '') + (o ? ':' + o : '') + i),
      (e.method = (e.method || 'GET').toUpperCase()),
      (e.headers = e.headers || {})
    var s = new Fl(e)
    return t && s.on('response', t), s
  }
  function Nl(e, t) {
    var r = Ul(e, t)
    return r.end(), r
  }
  function zl() {}
  ;(Fl.prototype.setHeader = function(e, t) {
    var r = e.toLowerCase()
    ;-1 === Ml.indexOf(r) && (this._headers[r] = {name: e, value: t})
  }),
    (Fl.prototype.getHeader = function(e) {
      return this._headers[e.toLowerCase()].value
    }),
    (Fl.prototype.removeHeader = function(e) {
      delete this._headers[e.toLowerCase()]
    }),
    (Fl.prototype._onFinish = function() {
      var t = this
      if (!t._destroyed) {
        var e,
          r = t._opts,
          n = t._headers
        if (
          (('POST' !== r.method &&
            'PUT' !== r.method &&
            'PATCH' !== r.method) ||
            (e = mu()
              ? new ra.Blob(
                  t._body.map(function(e) {
                    return Dl(e)
                  }),
                  {type: (n['content-type'] || {}).value || ''}
                )
              : to.concat(t._body).toString()),
          'fetch' === t._mode)
        ) {
          var a = li(n).map(function(e) {
            return [n[e].name, n[e].value]
          })
          ra.fetch(t._opts.url, {
            method: t._opts.method,
            headers: a,
            body: e,
            mode: 'cors',
            credentials: r.withCredentials ? 'include' : 'same-origin'
          }).then(
            function(e) {
              ;(t._fetchResponse = e), t._connect()
            },
            function(e) {
              t.emit('error', e)
            }
          )
        } else {
          var o = (t._xhr = new ra.XMLHttpRequest())
          try {
            o.open(t._opts.method, t._opts.url, !0)
          } catch (e) {
            return void va(function() {
              t.emit('error', e)
            })
          }
          'responseType' in o && (o.responseType = t._mode.split(':')[0]),
            'withCredentials' in o && (o.withCredentials = !!r.withCredentials),
            'text' === t._mode &&
              'overrideMimeType' in o &&
              o.overrideMimeType('text/plain; charset=x-user-defined'),
            li(n).forEach(function(e) {
              o.setRequestHeader(n[e].name, n[e].value)
            }),
            (t._response = null),
            (o.onreadystatechange = function() {
              switch (o.readyState) {
                case Il:
                case Cl:
                  t._onXHRProgress()
              }
            }),
            'moz-chunked-arraybuffer' === t._mode &&
              (o.onprogress = function() {
                t._onXHRProgress()
              }),
            (o.onerror = function() {
              t._destroyed || t.emit('error', new Error('XHR error'))
            })
          try {
            o.send(e)
          } catch (e) {
            return void va(function() {
              t.emit('error', e)
            })
          }
        }
      }
    }),
    (Fl.prototype._onXHRProgress = function() {
      var e = this
      $l(e._xhr) &&
        !e._destroyed &&
        (e._response || e._connect(), e._response._onXHRProgress())
    }),
    (Fl.prototype._connect = function() {
      var e = this
      e._destroyed ||
        ((e._response = new Ll(e._xhr, e._fetchResponse, e._mode)),
        e.emit('response', e._response))
    }),
    (Fl.prototype._write = function(e, t, r) {
      this._body.push(e), r()
    }),
    (Fl.prototype.abort = Fl.prototype.destroy = function() {
      var e = this
      ;(e._destroyed = !0),
        e._response && (e._response._destroyed = !0),
        e._xhr && e._xhr.abort()
    }),
    (Fl.prototype.end = function(e, t, r) {
      'function' == typeof e && ((r = e), (e = void 0)),
        ul.prototype.end.call(this, e, t, r)
    }),
    (Fl.prototype.flushHeaders = function() {}),
    (Fl.prototype.setTimeout = function() {}),
    (Fl.prototype.setNoDelay = function() {}),
    (Fl.prototype.setSocketKeepAlive = function() {}),
    (zl.defaultMaxSockets = 4)
  var ql = [
      'CHECKOUT',
      'CONNECT',
      'COPY',
      'DELETE',
      'GET',
      'HEAD',
      'LOCK',
      'M-SEARCH',
      'MERGE',
      'MKACTIVITY',
      'MKCOL',
      'MOVE',
      'NOTIFY',
      'OPTIONS',
      'PATCH',
      'POST',
      'PROPFIND',
      'PROPPATCH',
      'PURGE',
      'PUT',
      'REPORT',
      'SEARCH',
      'SUBSCRIBE',
      'TRACE',
      'UNLOCK',
      'UNSUBSCRIBE'
    ],
    Bl = {
      100: 'Continue',
      101: 'Switching Protocols',
      102: 'Processing',
      200: 'OK',
      201: 'Created',
      202: 'Accepted',
      203: 'Non-Authoritative Information',
      204: 'No Content',
      205: 'Reset Content',
      206: 'Partial Content',
      207: 'Multi-Status',
      300: 'Multiple Choices',
      301: 'Moved Permanently',
      302: 'Moved Temporarily',
      303: 'See Other',
      304: 'Not Modified',
      305: 'Use Proxy',
      307: 'Temporary Redirect',
      400: 'Bad Request',
      401: 'Unauthorized',
      402: 'Payment Required',
      403: 'Forbidden',
      404: 'Not Found',
      405: 'Method Not Allowed',
      406: 'Not Acceptable',
      407: 'Proxy Authentication Required',
      408: 'Request Time-out',
      409: 'Conflict',
      410: 'Gone',
      411: 'Length Required',
      412: 'Precondition Failed',
      413: 'Request Entity Too Large',
      414: 'Request-URI Too Large',
      415: 'Unsupported Media Type',
      416: 'Requested Range Not Satisfiable',
      417: 'Expectation Failed',
      418: "I'm a teapot",
      422: 'Unprocessable Entity',
      423: 'Locked',
      424: 'Failed Dependency',
      425: 'Unordered Collection',
      426: 'Upgrade Required',
      428: 'Precondition Required',
      429: 'Too Many Requests',
      431: 'Request Header Fields Too Large',
      500: 'Internal Server Error',
      501: 'Not Implemented',
      502: 'Bad Gateway',
      503: 'Service Unavailable',
      504: 'Gateway Time-out',
      505: 'HTTP Version Not Supported',
      506: 'Variant Also Negotiates',
      507: 'Insufficient Storage',
      509: 'Bandwidth Limit Exceeded',
      510: 'Not Extended',
      511: 'Network Authentication Required'
    },
    Hl = {request: Ul, get: Nl, Agent: zl, METHODS: ql, STATUS_CODES: Bl},
    Vl = Object.freeze({
      request: Ul,
      get: Nl,
      Agent: zl,
      METHODS: ql,
      STATUS_CODES: Bl,
      default: Hl
    }),
    Ql = (du && Xs) || du,
    Gl = (Vl && Hl) || Vl,
    Kl = (ws && bs) || ws,
    Yl = ((Ks && Rs) || Ks).parse,
    Wl = [
      'pfx',
      'key',
      'passphrase',
      'cert',
      'ca',
      'ciphers',
      'rejectUnauthorized',
      'secureProtocol',
      'servername',
      'checkServerIdentity'
    ],
    Zl = [239, 187, 191],
    Jl = 58,
    Xl = 32,
    eh = 10,
    th = 13
  function rh(c, s) {
    var h = rh.CONNECTING
    Object.defineProperty(this, 'readyState', {
      get: function() {
        return h
      }
    }),
      Object.defineProperty(this, 'url', {
        get: function() {
          return c
        }
      })
    var u,
      f = this
    function p(e) {
      h !== rh.CLOSED &&
        ((h = rh.CONNECTING),
        w('error', new ah('error', {message: e})),
        y && ((c = y), (y = null)),
        setTimeout(function() {
          h === rh.CONNECTING && b()
        }, f.reconnectInterval))
    }
    f.reconnectInterval = 1e3
    var d = ''
    s &&
      s.headers &&
      s.headers['Last-Event-ID'] &&
      ((d = s.headers['Last-Event-ID']), delete s.headers['Last-Event-ID'])
    var v = !1,
      m = '',
      g = '',
      y = null
    function b() {
      var e = Yl(c),
        t = 'https:' === e.protocol
      if (
        ((e.headers = {
          'Cache-Control': 'no-cache',
          Accept: 'text/event-stream'
        }),
        d && (e.headers['Last-Event-ID'] = d),
        s && s.headers)
      )
        for (var r in s.headers) {
          var n = s.headers[r]
          n && (e.headers[r] = n)
        }
      if (
        ((e.rejectUnauthorized = !(s && !s.rejectUnauthorized)), s && s.proxy)
      ) {
        var a = Yl(s.proxy)
        ;(t = 'https:' === a.protocol),
          (e.protocol = t ? 'https:' : 'http:'),
          (e.path = c),
          (e.headers.Host = e.host),
          (e.hostname = a.hostname),
          (e.host = a.host),
          (e.port = a.port)
      }
      if (s && s.https)
        for (var o in s.https)
          if (-1 !== Wl.indexOf(o)) {
            var i = s.https[o]
            void 0 !== i && (e[o] = i)
          }
      s &&
        void 0 !== s.withCredentials &&
        (e.withCredentials = s.withCredentials),
        (u = Gl.request(e, function(e) {
          if (
            500 === e.statusCode ||
            502 === e.statusCode ||
            503 === e.statusCode ||
            504 === e.statusCode
          )
            return (
              w(
                'error',
                new ah('error', {
                  status: e.statusCode,
                  message: e.statusMessage
                })
              ),
              void p()
            )
          if (301 === e.statusCode || 307 === e.statusCode)
            return e.headers.location
              ? (307 === e.statusCode && (y = c),
                (c = e.headers.location),
                void va(b))
              : void w(
                  'error',
                  new ah('error', {
                    status: e.statusCode,
                    message: e.statusMessage
                  })
                )
          if (200 !== e.statusCode)
            return (
              w(
                'error',
                new ah('error', {
                  status: e.statusCode,
                  message: e.statusMessage
                })
              ),
              f.close()
            )
          ;(h = rh.OPEN),
            e.on('close', function() {
              e.removeAllListeners('close'), e.removeAllListeners('end'), p()
            }),
            e.on('end', function() {
              e.removeAllListeners('close'), e.removeAllListeners('end'), p()
            }),
            w('open', new ah('open'))
          var u,
            l = !0
          e.on('data', function(e) {
            var r
            ;(u = u ? to.concat([u, e]) : e),
              l &&
                ((r = u),
                Zl.every(function(e, t) {
                  return r[t] === e
                })) &&
                (u = u.slice(Zl.length)),
              (l = !1)
            for (var t = 0, n = u.length; t < n; ) {
              v && (u[t] === eh && ++t, (v = !1))
              for (var a, o = -1, i = -1, s = t; o < 0 && s < n; ++s)
                (a = u[s]) === Jl
                  ? i < 0 && (i = s - t)
                  : a === th
                    ? ((v = !0), (o = s - t))
                    : a === eh && (o = s - t)
              if (o < 0) break
              _(u, t, i, o), (t += o + 1)
            }
            t === n ? (u = void 0) : 0 < t && (u = u.slice(t))
          })
        })).on('error', function(e) {
          p(e.message)
        }),
        u.setNoDelay && u.setNoDelay(!0),
        u.end()
    }
    function w() {
      0 < f.listeners(arguments[0]).length && f.emit.apply(f, arguments)
    }
    function _(e, t, r, n) {
      if (0 === n) {
        if (0 < m.length) {
          var a = g || 'message'
          w(
            a,
            new oh(a, {data: m.slice(0, -1), lastEventId: d, origin: ui(c)})
          ),
            (m = '')
        }
        g = void 0
      } else if (0 < r) {
        var o = r < 0,
          i = 0,
          s = e.slice(t, t + (o ? n : r)).toString()
        t += i = o ? n : e[t + r + 1] !== Xl ? r + 1 : r + 2
        var u = n - i,
          l = e.slice(t, t + u).toString()
        if ('data' === s) m += l + '\n'
        else if ('event' === s) g = l
        else if ('id' === s) d = l
        else if ('retry' === s) {
          var h = Na(l, 10)
          Go(h) || (f.reconnectInterval = h)
        }
      }
    }
    b(),
      (this._close = function() {
        h !== rh.CLOSED &&
          ((h = rh.CLOSED),
          u.abort && u.abort(),
          u.xhr && u.xhr.abort && u.xhr.abort())
      })
  }
  var nh = rh
  function ah(e, t) {
    if (
      (Object.defineProperty(this, 'type', {
        writable: !1,
        value: e,
        enumerable: !0
      }),
      t)
    )
      for (var r in t)
        t.hasOwnProperty(r) &&
          Qo(this, r, {writable: !1, value: t[r], enumerable: !0})
  }
  function oh(e, t) {
    for (var r in (Object.defineProperty(this, 'type', {
      writable: !1,
      value: e,
      enumerable: !0
    }),
    t))
      t.hasOwnProperty(r) &&
        Qo(this, r, {writable: !1, value: t[r], enumerable: !0})
  }
  Kl.inherits(rh, Ql.EventEmitter),
    (rh.prototype.constructor = rh),
    ['open', 'error', 'message'].forEach(function(t) {
      Qo(rh.prototype, 'on' + t, {
        get: function() {
          var e = this.listeners(t)[0]
          return e ? (e._listener ? e._listener : e) : void 0
        },
        set: function(e) {
          this.removeAllListeners(t), this.addEventListener(t, e)
        }
      })
    }),
    Object.defineProperty(rh, 'CONNECTING', {enumerable: !0, value: 0}),
    Object.defineProperty(rh, 'OPEN', {enumerable: !0, value: 1}),
    Object.defineProperty(rh, 'CLOSED', {enumerable: !0, value: 2}),
    (rh.prototype.CONNECTING = 0),
    (rh.prototype.OPEN = 1),
    (rh.prototype.CLOSED = 2),
    (rh.prototype.close = function() {
      this._close()
    }),
    (rh.prototype.addEventListener = function(e, t) {
      'function' == typeof t && ((t._listener = t), this.on(e, t))
    }),
    (rh.prototype.dispatchEvent = function(e) {
      if (!e.type) throw new Error('UNSPECIFIED_EVENT_TYPE_ERR')
      this.emit(e.type, e.detail)
    }),
    (rh.prototype.removeEventListener = function(e, t) {
      'function' == typeof t &&
        ((t._listener = void 0), this.removeListener(e, t))
    })
  var ih = e(function(e) {
    function r(e) {
      if (e) return t(e)
    }
    function t(e) {
      for (var t in r.prototype) e[t] = r.prototype[t]
      return e
    }
    ;((e.exports = r).prototype.on = r.prototype.addEventListener = function(
      e,
      t
    ) {
      return (
        (this._callbacks = this._callbacks || {}),
        (this._callbacks['$' + e] = this._callbacks['$' + e] || []).push(t),
        this
      )
    }),
      (r.prototype.once = function(e, t) {
        function r() {
          this.off(e, r), t.apply(this, arguments)
        }
        return (r.fn = t), this.on(e, r), this
      }),
      (r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(
        e,
        t
      ) {
        if (((this._callbacks = this._callbacks || {}), 0 == arguments.length))
          return (this._callbacks = {}), this
        var r,
          n = this._callbacks['$' + e]
        if (!n) return this
        if (1 == arguments.length) return delete this._callbacks['$' + e], this
        for (var a = 0; a < n.length; a++)
          if ((r = n[a]) === t || r.fn === t) {
            n.splice(a, 1)
            break
          }
        return this
      }),
      (r.prototype.emit = function(e) {
        this._callbacks = this._callbacks || {}
        var t = [].slice.call(arguments, 1),
          r = this._callbacks['$' + e]
        if (r)
          for (var n = 0, a = (r = r.slice(0)).length; n < a; ++n)
            r[n].apply(this, t)
        return this
      }),
      (r.prototype.listeners = function(e) {
        return (
          (this._callbacks = this._callbacks || {}),
          this._callbacks['$' + e] || []
        )
      }),
      (r.prototype.hasListeners = function(e) {
        return !!this.listeners(e).length
      })
  })
  var sh = function(e) {
      return null !== e && 'object' === pe(e)
    },
    uh = lh
  function lh(e) {
    if (e) return hh(e)
  }
  function hh(e) {
    for (var t in lh.prototype) e[t] = lh.prototype[t]
    return e
  }
  ;(lh.prototype.clearTimeout = function() {
    return (
      clearTimeout(this._timer),
      clearTimeout(this._responseTimeoutTimer),
      delete this._timer,
      delete this._responseTimeoutTimer,
      this
    )
  }),
    (lh.prototype.parse = function(e) {
      return (this._parser = e), this
    }),
    (lh.prototype.responseType = function(e) {
      return (this._responseType = e), this
    }),
    (lh.prototype.serialize = function(e) {
      return (this._serializer = e), this
    }),
    (lh.prototype.timeout = function(e) {
      if (!e || 'object' !== pe(e))
        return (this._timeout = e), (this._responseTimeout = 0), this
      for (var t in e)
        switch (t) {
          case 'deadline':
            this._timeout = e.deadline
            break
          case 'response':
            this._responseTimeout = e.response
            break
          default:
            console.warn('Unknown timeout option', t)
        }
      return this
    }),
    (lh.prototype.retry = function(e, t) {
      return (
        (0 !== arguments.length && !0 !== e) || (e = 1),
        e <= 0 && (e = 0),
        (this._maxRetries = e),
        (this._retries = 0),
        (this._retryCallback = t),
        this
      )
    })
  var ch = ['ECONNRESET', 'ETIMEDOUT', 'EADDRINFO', 'ESOCKETTIMEDOUT']
  ;(lh.prototype._shouldRetry = function(e, t) {
    if (!this._maxRetries || this._retries++ >= this._maxRetries) return !1
    if (this._retryCallback)
      try {
        var r = this._retryCallback(e, t)
        if (!0 === r) return !0
        if (!1 === r) return !1
      } catch (e) {
        console.error(e)
      }
    if (t && t.status && 500 <= t.status && 501 != t.status) return !0
    if (e) {
      if (e.code && ~ch.indexOf(e.code)) return !0
      if (e.timeout && 'ECONNABORTED' == e.code) return !0
      if (e.crossDomain) return !0
    }
    return !1
  }),
    (lh.prototype._retry = function() {
      return (
        this.clearTimeout(),
        this.req && ((this.req = null), (this.req = this.request())),
        (this._aborted = !1),
        (this.timedout = !1),
        this._end()
      )
    }),
    (lh.prototype.then = function(e, t) {
      if (!this._fullfilledPromise) {
        var a = this
        this._endCalled &&
          console.warn(
            'Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises'
          ),
          (this._fullfilledPromise = new gr(function(r, n) {
            a.end(function(e, t) {
              e ? n(e) : r(t)
            })
          }))
      }
      return this._fullfilledPromise.then(e, t)
    }),
    (lh.prototype.catch = function(e) {
      return this.then(void 0, e)
    }),
    (lh.prototype.use = function(e) {
      return e(this), this
    }),
    (lh.prototype.ok = function(e) {
      if ('function' != typeof e) throw Error('Callback required')
      return (this._okCallback = e), this
    }),
    (lh.prototype._isResponseOK = function(e) {
      return (
        !!e &&
        (this._okCallback
          ? this._okCallback(e)
          : 200 <= e.status && e.status < 300)
      )
    }),
    (lh.prototype.getHeader = lh.prototype.get = function(e) {
      return this._header[e.toLowerCase()]
    }),
    (lh.prototype.set = function(e, t) {
      if (sh(e)) {
        for (var r in e) this.set(r, e[r])
        return this
      }
      return (this._header[e.toLowerCase()] = t), (this.header[e] = t), this
    }),
    (lh.prototype.unset = function(e) {
      return delete this._header[e.toLowerCase()], delete this.header[e], this
    }),
    (lh.prototype.field = function(e, t) {
      if (null == e) throw new Error('.field(name, val) name can not be empty')
      if (
        (this._data &&
          console.error(
            ".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()"
          ),
        sh(e))
      ) {
        for (var r in e) this.field(r, e[r])
        return this
      }
      if (bn(t)) {
        for (var n in t) this.field(e, t[n])
        return this
      }
      if (null == t) throw new Error('.field(name, val) val can not be empty')
      return (
        'boolean' == typeof t && (t = '' + t),
        this._getFormData().append(e, t),
        this
      )
    }),
    (lh.prototype.abort = function() {
      return (
        this._aborted ||
          ((this._aborted = !0),
          this.xhr && this.xhr.abort(),
          this.req && this.req.abort(),
          this.clearTimeout(),
          this.emit('abort')),
        this
      )
    }),
    (lh.prototype._auth = function(e, t, r, n) {
      switch (r.type) {
        case 'basic':
          this.set('Authorization', 'Basic ' + n(e + ':' + t))
          break
        case 'auto':
          ;(this.username = e), (this.password = t)
          break
        case 'bearer':
          this.set('Authorization', 'Bearer ' + e)
      }
      return this
    }),
    (lh.prototype.withCredentials = function(e) {
      return null == e && (e = !0), (this._withCredentials = e), this
    }),
    (lh.prototype.redirects = function(e) {
      return (this._maxRedirects = e), this
    }),
    (lh.prototype.maxResponseSize = function(e) {
      if ('number' != typeof e) throw TypeError('Invalid argument')
      return (this._maxResponseSize = e), this
    }),
    (lh.prototype.toJSON = function() {
      return {
        method: this.method,
        url: this.url,
        data: this._data,
        headers: this._header
      }
    }),
    (lh.prototype.send = function(e) {
      var t = sh(e),
        r = this._header['content-type']
      if (
        (this._formData &&
          console.error(
            ".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()"
          ),
        t && !this._data)
      )
        bn(e) ? (this._data = []) : this._isHost(e) || (this._data = {})
      else if (e && this._data && this._isHost(this._data))
        throw Error("Can't merge these send calls")
      if (t && sh(this._data)) for (var n in e) this._data[n] = e[n]
      else
        'string' == typeof e
          ? (r || this.type('form'),
            (r = this._header['content-type']),
            (this._data =
              'application/x-www-form-urlencoded' == r
                ? this._data
                  ? this._data + '&' + e
                  : e
                : (this._data || '') + e))
          : (this._data = e)
      return !t || this._isHost(e) || r || this.type('json'), this
    }),
    (lh.prototype.sortQuery = function(e) {
      return (this._sort = void 0 === e || e), this
    }),
    (lh.prototype._finalizeQueryString = function() {
      var e = this._query.join('&')
      if (
        (e && (this.url += (0 <= this.url.indexOf('?') ? '&' : '?') + e),
        (this._query.length = 0),
        this._sort)
      ) {
        var t = this.url.indexOf('?')
        if (0 <= t) {
          var r = this.url.substring(t + 1).split('&')
          'function' == typeof this._sort ? r.sort(this._sort) : r.sort(),
            (this.url = this.url.substring(0, t) + '?' + r.join('&'))
        }
      }
    }),
    (lh.prototype._appendQueryString = function() {
      console.trace('Unsupported')
    }),
    (lh.prototype._timeoutError = function(e, t, r) {
      if (!this._aborted) {
        var n = new Error(e + t + 'ms exceeded')
        ;(n.timeout = t),
          (n.code = 'ECONNABORTED'),
          (n.errno = r),
          (this.timedout = !0),
          this.abort(),
          this.callback(n)
      }
    }),
    (lh.prototype._setTimeouts = function() {
      var e = this
      this._timeout &&
        !this._timer &&
        (this._timer = setTimeout(function() {
          e._timeoutError('Timeout of ', e._timeout, 'ETIME')
        }, this._timeout)),
        this._responseTimeout &&
          !this._responseTimeoutTimer &&
          (this._responseTimeoutTimer = setTimeout(function() {
            e._timeoutError(
              'Response timeout of ',
              e._responseTimeout,
              'ETIMEDOUT'
            )
          }, this._responseTimeout))
    })
  var fh = function(e) {
      return e.split(/ *; */).shift()
    },
    ph = function(e) {
      return e.split(/ *; */).reduce(function(e, t) {
        var r = t.split(/ *= */),
          n = r.shift(),
          a = r.shift()
        return n && a && (e[n] = a), e
      }, {})
    },
    dh = function(e) {
      return e.split(/ *, */).reduce(function(e, t) {
        var r = t.split(/ *; */),
          n = r[0].slice(1, -1)
        return (e[r[1].split(/ *= */)[1].slice(1, -1)] = n), e
      }, {})
    },
    vh = mh
  function mh(e) {
    if (e) return gh(e)
  }
  function gh(e) {
    for (var t in mh.prototype) e[t] = mh.prototype[t]
    return e
  }
  function yh() {
    this._defaults = []
  }
  ;(mh.prototype.get = function(e) {
    return this.header[e.toLowerCase()]
  }),
    (mh.prototype._setHeaderProperties = function(e) {
      var t = e['content-type'] || ''
      this.type = fh(t)
      var r = ph(t)
      for (var n in r) this[n] = r[n]
      this.links = {}
      try {
        e.link && (this.links = dh(e.link))
      } catch (e) {}
    }),
    (mh.prototype._setStatusProperties = function(e) {
      var t = (e / 100) | 0
      ;(this.status = this.statusCode = e),
        (this.statusType = t),
        (this.info = 1 == t),
        (this.ok = 2 == t),
        (this.redirect = 3 == t),
        (this.clientError = 4 == t),
        (this.serverError = 5 == t),
        (this.error = (4 == t || 5 == t) && this.toError()),
        (this.created = 201 == e),
        (this.accepted = 202 == e),
        (this.noContent = 204 == e),
        (this.badRequest = 400 == e),
        (this.unauthorized = 401 == e),
        (this.notAcceptable = 406 == e),
        (this.forbidden = 403 == e),
        (this.notFound = 404 == e),
        (this.unprocessableEntity = 422 == e)
    }),
    [
      'use',
      'on',
      'once',
      'set',
      'query',
      'type',
      'accept',
      'auth',
      'withCredentials',
      'sortQuery',
      'retry',
      'ok',
      'redirects',
      'timeout',
      'buffer',
      'serialize',
      'parse',
      'ca',
      'key',
      'pfx',
      'cert'
    ].forEach(function(e) {
      yh.prototype[e] = function() {
        return this._defaults.push({fn: e, arguments: arguments}), this
      }
    }),
    (yh.prototype._setDefaults = function(t) {
      this._defaults.forEach(function(e) {
        t[e.fn].apply(t, e.arguments)
      })
    })
  var bh = yh,
    wh = e(function(e, r) {
      var t
      function n() {}
      'undefined' != typeof window
        ? (t = window)
        : 'undefined' != typeof self
          ? (t = self)
          : (console.warn(
              'Using browser-only version of superagent in non-browser environment'
            ),
            (t = d))
      var s = (r = e.exports = function(e, t) {
        return 'function' == typeof t
          ? new r.Request('GET', e).end(t)
          : 1 == arguments.length
            ? new r.Request('GET', e)
            : new r.Request(e, t)
      })
      ;(r.Request = f),
        (s.getXHR = function() {
          if (
            !(
              !t.XMLHttpRequest ||
              (t.location && 'file:' == t.location.protocol && t.ActiveXObject)
            )
          )
            return new XMLHttpRequest()
          try {
            return new ActiveXObject('Microsoft.XMLHTTP')
          } catch (e) {}
          try {
            return new ActiveXObject('Msxml2.XMLHTTP.6.0')
          } catch (e) {}
          try {
            return new ActiveXObject('Msxml2.XMLHTTP.3.0')
          } catch (e) {}
          try {
            return new ActiveXObject('Msxml2.XMLHTTP')
          } catch (e) {}
          throw Error('Browser-only version of superagent could not find XHR')
        })
      var l = ''.trim
        ? function(e) {
            return e.trim()
          }
        : function(e) {
            return e.replace(/(^\s*|\s*$)/g, '')
          }
      function a(e) {
        if (!sh(e)) return e
        var t = []
        for (var r in e) o(t, r, e[r])
        return t.join('&')
      }
      function o(t, r, e) {
        if (null != e)
          if (bn(e))
            e.forEach(function(e) {
              o(t, r, e)
            })
          else if (sh(e)) for (var n in e) o(t, r + '[' + n + ']', e[n])
          else t.push(encodeURIComponent(r) + '=' + encodeURIComponent(e))
        else null === e && t.push(encodeURIComponent(r))
      }
      function i(e) {
        for (
          var t, r, n = {}, a = e.split('&'), o = 0, i = a.length;
          o < i;
          ++o
        )
          -1 == (r = (t = a[o]).indexOf('='))
            ? (n[decodeURIComponent(t)] = '')
            : (n[decodeURIComponent(t.slice(0, r))] = decodeURIComponent(
                t.slice(r + 1)
              ))
        return n
      }
      function u(e) {
        for (
          var t, r, n, a, o = e.split(/\r?\n/), i = {}, s = 0, u = o.length;
          s < u;
          ++s
        )
          -1 !== (t = (r = o[s]).indexOf(':')) &&
            ((n = r.slice(0, t).toLowerCase()),
            (a = l(r.slice(t + 1))),
            (i[n] = a))
        return i
      }
      function h(e) {
        return /[\/+]json($|[^-\w])/.test(e)
      }
      function c(e) {
        ;(this.req = e),
          (this.xhr = this.req.xhr),
          (this.text =
            ('HEAD' != this.req.method &&
              ('' === this.xhr.responseType ||
                'text' === this.xhr.responseType)) ||
            void 0 === this.xhr.responseType
              ? this.xhr.responseText
              : null),
          (this.statusText = this.req.xhr.statusText)
        var t = this.xhr.status
        1223 === t && (t = 204),
          this._setStatusProperties(t),
          (this.header = this.headers = u(this.xhr.getAllResponseHeaders())),
          (this.header['content-type'] = this.xhr.getResponseHeader(
            'content-type'
          )),
          this._setHeaderProperties(this.header),
          null === this.text && e._responseType
            ? (this.body = this.xhr.response)
            : (this.body =
                'HEAD' != this.req.method
                  ? this._parseBody(this.text ? this.text : this.xhr.response)
                  : null)
      }
      function f(e, t) {
        var n = this
        ;(this._query = this._query || []),
          (this.method = e),
          (this.url = t),
          (this.header = {}),
          (this._header = {}),
          this.on('end', function() {
            var t,
              r = null,
              e = null
            try {
              e = new c(n)
            } catch (e) {
              return (
                ((r = new Error(
                  'Parser is unable to parse the response'
                )).parse = !0),
                (r.original = e),
                n.xhr
                  ? ((r.rawResponse =
                      void 0 === n.xhr.responseType
                        ? n.xhr.responseText
                        : n.xhr.response),
                    (r.status = n.xhr.status ? n.xhr.status : null),
                    (r.statusCode = r.status))
                  : ((r.rawResponse = null), (r.status = null)),
                n.callback(r)
              )
            }
            n.emit('response', e)
            try {
              n._isResponseOK(e) ||
                (t = new Error(e.statusText || 'Unsuccessful HTTP response'))
            } catch (e) {
              t = e
            }
            t
              ? ((t.original = r),
                (t.response = e),
                (t.status = e.status),
                n.callback(t, e))
              : n.callback(null, e)
          })
      }
      function p(e, t, r) {
        var n = s('DELETE', e)
        return (
          'function' == typeof t && ((r = t), (t = null)),
          t && n.send(t),
          r && n.end(r),
          n
        )
      }
      ;(s.serializeObject = a),
        (s.parseString = i),
        (s.types = {
          html: 'text/html',
          json: 'application/json',
          xml: 'text/xml',
          urlencoded: 'application/x-www-form-urlencoded',
          form: 'application/x-www-form-urlencoded',
          'form-data': 'application/x-www-form-urlencoded'
        }),
        (s.serialize = {
          'application/x-www-form-urlencoded': a,
          'application/json': Di
        }),
        (s.parse = {
          'application/x-www-form-urlencoded': i,
          'application/json': JSON.parse
        }),
        vh(c.prototype),
        (c.prototype._parseBody = function(e) {
          var t = s.parse[this.type]
          return this.req._parser
            ? this.req._parser(this, e)
            : (!t && h(this.type) && (t = s.parse['application/json']),
              t && e && (e.length || e instanceof Object) ? t(e) : null)
        }),
        (c.prototype.toError = function() {
          var e = this.req,
            t = e.method,
            r = e.url,
            n = 'cannot ' + t + ' ' + r + ' (' + this.status + ')',
            a = new Error(n)
          return (a.status = this.status), (a.method = t), (a.url = r), a
        }),
        (s.Response = c),
        ih(f.prototype),
        uh(f.prototype),
        (f.prototype.type = function(e) {
          return this.set('Content-Type', s.types[e] || e), this
        }),
        (f.prototype.accept = function(e) {
          return this.set('Accept', s.types[e] || e), this
        }),
        (f.prototype.auth = function(e, t, r) {
          1 === arguments.length && (t = ''),
            'object' === pe(t) && null !== t && ((r = t), (t = '')),
            r || (r = {type: 'function' == typeof btoa ? 'basic' : 'auto'})
          return this._auth(e, t, r, function(e) {
            if ('function' == typeof btoa) return btoa(e)
            throw new Error('Cannot use basic auth, btoa is not a function')
          })
        }),
        (f.prototype.query = function(e) {
          return (
            'string' != typeof e && (e = a(e)), e && this._query.push(e), this
          )
        }),
        (f.prototype.attach = function(e, t, r) {
          if (t) {
            if (this._data)
              throw Error("superagent can't mix .send() and .attach()")
            this._getFormData().append(e, t, r || t.name)
          }
          return this
        }),
        (f.prototype._getFormData = function() {
          return (
            this._formData || (this._formData = new t.FormData()),
            this._formData
          )
        }),
        (f.prototype.callback = function(e, t) {
          if (this._shouldRetry(e, t)) return this._retry()
          var r = this._callback
          this.clearTimeout(),
            e &&
              (this._maxRetries && (e.retries = this._retries - 1),
              this.emit('error', e)),
            r(e, t)
        }),
        (f.prototype.crossDomainError = function() {
          var e = new Error(
            'Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.'
          )
          ;(e.crossDomain = !0),
            (e.status = this.status),
            (e.method = this.method),
            (e.url = this.url),
            this.callback(e)
        }),
        (f.prototype.buffer = f.prototype.ca = f.prototype.agent = function() {
          return (
            console.warn(
              'This is not supported in browser version of superagent'
            ),
            this
          )
        }),
        (f.prototype.pipe = f.prototype.write = function() {
          throw Error(
            'Streaming is not supported in browser version of superagent'
          )
        }),
        (f.prototype._isHost = function(e) {
          return (
            e &&
            'object' === pe(e) &&
            !bn(e) &&
            '[object Object]' !== Object.prototype.toString.call(e)
          )
        }),
        (f.prototype.end = function(e) {
          return (
            this._endCalled &&
              console.warn(
                'Warning: .end() was called twice. This is not supported in superagent'
              ),
            (this._endCalled = !0),
            (this._callback = e || n),
            this._finalizeQueryString(),
            this._end()
          )
        }),
        (f.prototype._end = function() {
          var r = this,
            n = (this.xhr = s.getXHR()),
            e = this._formData || this._data
          this._setTimeouts(),
            (n.onreadystatechange = function() {
              var e = n.readyState
              if (
                (2 <= e &&
                  r._responseTimeoutTimer &&
                  clearTimeout(r._responseTimeoutTimer),
                4 == e)
              ) {
                var t
                try {
                  t = n.status
                } catch (e) {
                  t = 0
                }
                if (!t) {
                  if (r.timedout || r._aborted) return
                  return r.crossDomainError()
                }
                r.emit('end')
              }
            })
          var t = function(e, t) {
            0 < t.total && (t.percent = (t.loaded / t.total) * 100),
              (t.direction = e),
              r.emit('progress', t)
          }
          if (this.hasListeners('progress'))
            try {
              ;(n.onprogress = t.bind(null, 'download')),
                n.upload && (n.upload.onprogress = t.bind(null, 'upload'))
            } catch (e) {}
          try {
            this.username && this.password
              ? n.open(this.method, this.url, !0, this.username, this.password)
              : n.open(this.method, this.url, !0)
          } catch (e) {
            return this.callback(e)
          }
          if (
            (this._withCredentials && (n.withCredentials = !0),
            !this._formData &&
              'GET' != this.method &&
              'HEAD' != this.method &&
              'string' != typeof e &&
              !this._isHost(e))
          ) {
            var a = this._header['content-type'],
              o = this._serializer || s.serialize[a ? a.split(';')[0] : '']
            !o && h(a) && (o = s.serialize['application/json']), o && (e = o(e))
          }
          for (var i in this.header)
            null != this.header[i] &&
              this.header.hasOwnProperty(i) &&
              n.setRequestHeader(i, this.header[i])
          return (
            this._responseType && (n.responseType = this._responseType),
            this.emit('request', this),
            n.send(void 0 !== e ? e : null),
            this
          )
        }),
        (s.agent = function() {
          return new bh()
        }),
        ['GET', 'POST', 'OPTIONS', 'PATCH', 'PUT', 'DELETE'].forEach(function(
          n
        ) {
          bh.prototype[n.toLowerCase()] = function(e, t) {
            var r = new s.Request(n, e)
            return this._setDefaults(r), t && r.end(t), r
          }
        }),
        (bh.prototype.del = bh.prototype.delete),
        (s.get = function(e, t, r) {
          var n = s('GET', e)
          return (
            'function' == typeof t && ((r = t), (t = null)),
            t && n.query(t),
            r && n.end(r),
            n
          )
        }),
        (s.head = function(e, t, r) {
          var n = s('HEAD', e)
          return (
            'function' == typeof t && ((r = t), (t = null)),
            t && n.query(t),
            r && n.end(r),
            n
          )
        }),
        (s.options = function(e, t, r) {
          var n = s('OPTIONS', e)
          return (
            'function' == typeof t && ((r = t), (t = null)),
            t && n.send(t),
            r && n.end(r),
            n
          )
        }),
        (s.del = p),
        (s.delete = p),
        (s.patch = function(e, t, r) {
          var n = s('PATCH', e)
          return (
            'function' == typeof t && ((r = t), (t = null)),
            t && n.send(t),
            r && n.end(r),
            n
          )
        }),
        (s.post = function(e, t, r) {
          var n = s('POST', e)
          return (
            'function' == typeof t && ((r = t), (t = null)),
            t && n.send(t),
            r && n.end(r),
            n
          )
        }),
        (s.put = function(e, t, r) {
          var n = s('PUT', e)
          return (
            'function' == typeof t && ((r = t), (t = null)),
            t && n.send(t),
            r && n.end(r),
            n
          )
        })
    }),
    _h = (wh.Request, Math.floor)
  S(S.S, 'Number', {
    isInteger: function(e) {
      return !u(e) && isFinite(e) && _h(e) === e
    }
  })
  var Eh = m.Number.isInteger,
    Ph = String.fromCharCode,
    Sh = String.fromCodePoint
  S(S.S + S.F * (!!Sh && 1 != Sh.length), 'String', {
    fromCodePoint: function(e) {
      for (var t, r = [], n = arguments.length, a = 0; a < n; ) {
        if (((t = +arguments[a++]), M(t, 1114111) !== t))
          throw RangeError(t + ' is not a valid code point')
        r.push(
          t < 65536
            ? Ph(t)
            : Ph(55296 + ((t -= 65536) >> 10), (t % 1024) + 56320)
        )
      }
      return r.join('')
    }
  })
  var xh,
    Rh = m.String.fromCodePoint,
    Oh = Le('iterator'),
    kh = (m.isIterable = function(e) {
      var t = Object(e)
      return void 0 !== t[Oh] || '@@iterator' in t || xe.hasOwnProperty(ut(t))
    }),
    Th = e(function(e, t) {
      !(function(e) {
        function R() {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
            t[r] = arguments[r]
          if (1 < t.length) {
            t[0] = t[0].slice(0, -1)
            for (var n = t.length - 1, a = 1; a < n; ++a)
              t[a] = t[a].slice(1, -1)
            return (t[n] = t[n].slice(1)), t.join('')
          }
          return t[0]
        }
        function O(e) {
          return '(?:' + e + ')'
        }
        function n(e) {
          return void 0 === e
            ? 'undefined'
            : null === e
              ? 'null'
              : Object.prototype.toString
                  .call(e)
                  .split(' ')
                  .pop()
                  .split(']')
                  .shift()
                  .toLowerCase()
        }
        function d(e) {
          return e.toUpperCase()
        }
        function a(e, t) {
          var r = e
          if (t) for (var n in t) r[n] = t[n]
          return r
        }
        function t(e) {
          var t = '[A-Za-z]',
            r = '[0-9]',
            n = R(r, '[A-Fa-f]'),
            a = O(
              O('%[EFef]' + n + '%' + n + n + '%' + n + n) +
                '|' +
                O('%[89A-Fa-f]' + n + '%' + n + n) +
                '|' +
                O('%' + n + n)
            ),
            o = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]",
            i = R('[\\:\\/\\?\\#\\[\\]\\@]', o),
            s = e
              ? '[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]'
              : '[]',
            u = e ? '[\\uE000-\\uF8FF]' : '[]',
            l = R(t, r, '[\\-\\.\\_\\~]', s),
            h = (O(t + R(t, r, '[\\+\\-\\.]') + '*'),
            O(O(a + '|' + R(l, o, '[\\:]')) + '*'),
            O(
              O('25[0-5]') +
                '|' +
                O('2[0-4]' + r) +
                '|' +
                O('1' + r + r) +
                '|' +
                O('0?[1-9]' + r) +
                '|0?0?' +
                r
            )),
            c = O(h + '\\.' + h + '\\.' + h + '\\.' + h),
            f = O(n + '{1,4}'),
            p = O(O(f + '\\:' + f) + '|' + c),
            d = O(O(f + '\\:') + '{6}' + p),
            v = O('\\:\\:' + O(f + '\\:') + '{5}' + p),
            m = O(O(f) + '?\\:\\:' + O(f + '\\:') + '{4}' + p),
            g = O(
              O(O(f + '\\:') + '{0,1}' + f) +
                '?\\:\\:' +
                O(f + '\\:') +
                '{3}' +
                p
            ),
            y = O(
              O(O(f + '\\:') + '{0,2}' + f) +
                '?\\:\\:' +
                O(f + '\\:') +
                '{2}' +
                p
            ),
            b = O(O(O(f + '\\:') + '{0,3}' + f) + '?\\:\\:' + f + '\\:' + p),
            w = O(O(O(f + '\\:') + '{0,4}' + f) + '?\\:\\:' + p),
            _ = O(O(O(f + '\\:') + '{0,5}' + f) + '?\\:\\:' + f),
            E = O(O(O(f + '\\:') + '{0,6}' + f) + '?\\:\\:'),
            P = O([d, v, m, g, y, b, w, _, E].join('|')),
            S = O(O(l + '|' + a) + '+'),
            x = (O('[vV]' + n + '+\\.' + R(l, o, '[\\:]') + '+'),
            O(O(a + '|' + R(l, o)) + '*'),
            O(a + '|' + R(l, o, '[\\:\\@]')))
          return (
            O(O(a + '|' + R(l, o, '[\\@]')) + '+'),
            O(O(x + '|' + R('[\\/\\?]', u)) + '*'),
            {
              NOT_SCHEME: new RegExp(R('[^]', t, r, '[\\+\\-\\.]'), 'g'),
              NOT_USERINFO: new RegExp(R('[^\\%\\:]', l, o), 'g'),
              NOT_HOST: new RegExp(R('[^\\%\\[\\]\\:]', l, o), 'g'),
              NOT_PATH: new RegExp(R('[^\\%\\/\\:\\@]', l, o), 'g'),
              NOT_PATH_NOSCHEME: new RegExp(R('[^\\%\\/\\@]', l, o), 'g'),
              NOT_QUERY: new RegExp(
                R('[^\\%]', l, o, '[\\:\\@\\/\\?]', u),
                'g'
              ),
              NOT_FRAGMENT: new RegExp(
                R('[^\\%]', l, o, '[\\:\\@\\/\\?]'),
                'g'
              ),
              ESCAPE: new RegExp(R('[^]', l, o), 'g'),
              UNRESERVED: new RegExp(l, 'g'),
              OTHER_CHARS: new RegExp(R('[^\\%]', l, i), 'g'),
              PCT_ENCODED: new RegExp(a, 'g'),
              IPV4ADDRESS: new RegExp('^(' + c + ')$'),
              IPV6ADDRESS: new RegExp(
                '^\\[?(' +
                  P +
                  ')' +
                  O(O('\\%25|\\%(?!' + n + '{2})') + '(' + S + ')') +
                  '?\\]?$'
              )
            }
          )
        }
        var h = t(!1),
          c = t(!0),
          E = (function() {
            function r(e, t) {
              var r = [],
                n = !0,
                a = !1,
                o = void 0
              try {
                for (
                  var i, s = Ru(e);
                  !(n = (i = s.next()).done) &&
                  (r.push(i.value), !t || r.length !== t);
                  n = !0
                );
              } catch (e) {
                ;(a = !0), (o = e)
              } finally {
                try {
                  !n && s.return && s.return()
                } finally {
                  if (a) throw o
                }
              }
              return r
            }
            return function(e, t) {
              if (bn(e)) return e
              if (kh(Object(e))) return r(e, t)
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance'
              )
            }
          })(),
          r = function(e) {
            if (bn(e)) {
              for (var t = 0, r = Array(e.length); t < e.length; t++)
                r[t] = e[t]
              return r
            }
            return qn(e)
          },
          C = 2147483647,
          o = /^xn--/,
          i = /[^\0-\x7E]/,
          s = /[\x2E\u3002\uFF0E\uFF61]/g,
          u = {
            overflow: 'Overflow: input needs wider integers to process',
            'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
            'invalid-input': 'Invalid input'
          },
          L = Math.floor,
          D = String.fromCharCode
        function F(e) {
          throw new RangeError(u[e])
        }
        function l(e, t) {
          for (var r = [], n = e.length; n--; ) r[n] = t(e[n])
          return r
        }
        function f(e, t) {
          var r = e.split('@'),
            n = ''
          1 < r.length && ((n = r[0] + '@'), (e = r[1]))
          var a = (e = e.replace(s, '.')).split('.'),
            o = l(a, t).join('.')
          return n + o
        }
        function M(e) {
          for (var t = [], r = 0, n = e.length; r < n; ) {
            var a = e.charCodeAt(r++)
            if (55296 <= a && a <= 56319 && r < n) {
              var o = e.charCodeAt(r++)
              56320 == (64512 & o)
                ? t.push(((1023 & a) << 10) + (1023 & o) + 65536)
                : (t.push(a), r--)
            } else t.push(a)
          }
          return t
        }
        var $ = function(e, t) {
            return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
          },
          U = function(e, t, r) {
            var n = 0
            for (e = r ? L(e / 700) : e >> 1, e += L(e / t); 455 < e; n += 36)
              e = L(e / 35)
            return L(n + (36 * e) / (e + 38))
          },
          p = function(e) {
            var t,
              r = [],
              n = e.length,
              a = 0,
              o = 128,
              i = 72,
              s = e.lastIndexOf('-')
            s < 0 && (s = 0)
            for (var u = 0; u < s; ++u)
              128 <= e.charCodeAt(u) && F('not-basic'), r.push(e.charCodeAt(u))
            for (var l = 0 < s ? s + 1 : 0; l < n; ) {
              for (var h = a, c = 1, f = 36; ; f += 36) {
                n <= l && F('invalid-input')
                var p =
                  (t = e.charCodeAt(l++)) - 48 < 10
                    ? t - 22
                    : t - 65 < 26
                      ? t - 65
                      : t - 97 < 26
                        ? t - 97
                        : 36
                ;(36 <= p || p > L((C - a) / c)) && F('overflow'), (a += p * c)
                var d = f <= i ? 1 : i + 26 <= f ? 26 : f - i
                if (p < d) break
                var v = 36 - d
                c > L(C / v) && F('overflow'), (c *= v)
              }
              var m = r.length + 1
              ;(i = U(a - h, m, 0 == h)),
                L(a / m) > C - o && F('overflow'),
                (o += L(a / m)),
                (a %= m),
                r.splice(a++, 0, o)
            }
            return Rh.apply(String, r)
          },
          v = function(e) {
            var t = [],
              r = (e = M(e)).length,
              n = 128,
              a = 0,
              o = 72,
              i = !0,
              s = !1,
              u = void 0
            try {
              for (var l, h = Ru(e); !(i = (l = h.next()).done); i = !0) {
                var c = l.value
                c < 128 && t.push(D(c))
              }
            } catch (e) {
              ;(s = !0), (u = e)
            } finally {
              try {
                !i && h.return && h.return()
              } finally {
                if (s) throw u
              }
            }
            var f = t.length,
              p = f
            for (f && t.push('-'); p < r; ) {
              var d = C,
                v = !0,
                m = !1,
                g = void 0
              try {
                for (var y, b = Ru(e); !(v = (y = b.next()).done); v = !0) {
                  var w = y.value
                  n <= w && w < d && (d = w)
                }
              } catch (e) {
                ;(m = !0), (g = e)
              } finally {
                try {
                  !v && b.return && b.return()
                } finally {
                  if (m) throw g
                }
              }
              var _ = p + 1
              d - n > L((C - a) / _) && F('overflow'),
                (a += (d - n) * _),
                (n = d)
              var E = !0,
                P = !1,
                S = void 0
              try {
                for (var x, R = Ru(e); !(E = (x = R.next()).done); E = !0) {
                  var O = x.value
                  if ((O < n && ++a > C && F('overflow'), O == n)) {
                    for (var k = a, T = 36; ; T += 36) {
                      var A = T <= o ? 1 : o + 26 <= T ? 26 : T - o
                      if (k < A) break
                      var j = k - A,
                        I = 36 - A
                      t.push(D($(A + (j % I), 0))), (k = L(j / I))
                    }
                    t.push(D($(k, 0))), (o = U(a, _, p == f)), (a = 0), ++p
                  }
                }
              } catch (e) {
                ;(P = !0), (S = e)
              } finally {
                try {
                  !E && R.return && R.return()
                } finally {
                  if (P) throw S
                }
              }
              ++a, ++n
            }
            return t.join('')
          },
          m = {
            version: '2.1.0',
            ucs2: {
              decode: M,
              encode: function(e) {
                return Rh.apply(String, r(e))
              }
            },
            decode: p,
            encode: v,
            toASCII: function(e) {
              return f(e, function(e) {
                return i.test(e) ? 'xn--' + v(e) : e
              })
            },
            toUnicode: function(e) {
              return f(e, function(e) {
                return o.test(e) ? p(e.slice(4).toLowerCase()) : e
              })
            }
          },
          g = {}
        function y(e) {
          var t = e.charCodeAt(0)
          return t < 16
            ? '%0' + t.toString(16).toUpperCase()
            : t < 128
              ? '%' + t.toString(16).toUpperCase()
              : t < 2048
                ? '%' +
                  ((t >> 6) | 192).toString(16).toUpperCase() +
                  '%' +
                  ((63 & t) | 128).toString(16).toUpperCase()
                : '%' +
                  ((t >> 12) | 224).toString(16).toUpperCase() +
                  '%' +
                  (((t >> 6) & 63) | 128).toString(16).toUpperCase() +
                  '%' +
                  ((63 & t) | 128).toString(16).toUpperCase()
        }
        function b(e) {
          for (var t = '', r = 0, n = e.length; r < n; ) {
            var a = Na(e.substr(r + 1, 2), 16)
            if (a < 128) (t += String.fromCharCode(a)), (r += 3)
            else if (194 <= a && a < 224) {
              if (6 <= n - r) {
                var o = Na(e.substr(r + 4, 2), 16)
                t += String.fromCharCode(((31 & a) << 6) | (63 & o))
              } else t += e.substr(r, 6)
              r += 6
            } else if (224 <= a) {
              if (9 <= n - r) {
                var i = Na(e.substr(r + 4, 2), 16),
                  s = Na(e.substr(r + 7, 2), 16)
                t += String.fromCharCode(
                  ((15 & a) << 12) | ((63 & i) << 6) | (63 & s)
                )
              } else t += e.substr(r, 9)
              r += 9
            } else (t += e.substr(r, 3)), (r += 3)
          }
          return t
        }
        function w(e, r) {
          function t(e) {
            var t = b(e)
            return t.match(r.UNRESERVED) ? t : e
          }
          return (
            e.scheme &&
              (e.scheme = String(e.scheme)
                .replace(r.PCT_ENCODED, t)
                .toLowerCase()
                .replace(r.NOT_SCHEME, '')),
            void 0 !== e.userinfo &&
              (e.userinfo = String(e.userinfo)
                .replace(r.PCT_ENCODED, t)
                .replace(r.NOT_USERINFO, y)
                .replace(r.PCT_ENCODED, d)),
            void 0 !== e.host &&
              (e.host = String(e.host)
                .replace(r.PCT_ENCODED, t)
                .toLowerCase()
                .replace(r.NOT_HOST, y)
                .replace(r.PCT_ENCODED, d)),
            void 0 !== e.path &&
              (e.path = String(e.path)
                .replace(r.PCT_ENCODED, t)
                .replace(e.scheme ? r.NOT_PATH : r.NOT_PATH_NOSCHEME, y)
                .replace(r.PCT_ENCODED, d)),
            void 0 !== e.query &&
              (e.query = String(e.query)
                .replace(r.PCT_ENCODED, t)
                .replace(r.NOT_QUERY, y)
                .replace(r.PCT_ENCODED, d)),
            void 0 !== e.fragment &&
              (e.fragment = String(e.fragment)
                .replace(r.PCT_ENCODED, t)
                .replace(r.NOT_FRAGMENT, y)
                .replace(r.PCT_ENCODED, d)),
            e
          )
        }
        function P(e) {
          return e.replace(/^0*(.*)/, '$1') || '0'
        }
        function S(e, t) {
          var r = e.match(t.IPV4ADDRESS) || [],
            n = E(r, 2),
            a = n[1]
          return a
            ? a
                .split('.')
                .map(P)
                .join('.')
            : e
        }
        function _(e, t) {
          var r = e.match(t.IPV6ADDRESS) || [],
            n = E(r, 3),
            a = n[1],
            o = n[2]
          if (a) {
            for (
              var i = a
                  .toLowerCase()
                  .split('::')
                  .reverse(),
                s = E(i, 2),
                u = s[0],
                l = s[1],
                h = l ? l.split(':').map(P) : [],
                c = u.split(':').map(P),
                f = t.IPV4ADDRESS.test(c[c.length - 1]),
                p = f ? 7 : 8,
                d = c.length - p,
                v = Array(p),
                m = 0;
              m < p;
              ++m
            )
              v[m] = h[m] || c[d + m] || ''
            f && (v[p - 1] = S(v[p - 1], t))
            var g = v.reduce(function(e, t, r) {
                if (!t || '0' === t) {
                  var n = e[e.length - 1]
                  n && n.index + n.length === r
                    ? n.length++
                    : e.push({index: r, length: 1})
                }
                return e
              }, []),
              y = g.sort(function(e, t) {
                return t.length - e.length
              })[0],
              b = void 0
            if (y && 1 < y.length) {
              var w = v.slice(0, y.index),
                _ = v.slice(y.index + y.length)
              b = w.join(':') + '::' + _.join(':')
            } else b = v.join(':')
            return o && (b += '%' + o), b
          }
          return e
        }
        var x = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i,
          k = void 0 === ''.match(/(){0}/)[1]
        function T(e) {
          var t =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            r = {},
            n = !1 !== t.iri ? c : h
          'suffix' === t.reference &&
            (e = (t.scheme ? t.scheme + ':' : '') + '//' + e)
          var a = e.match(x)
          if (a) {
            k
              ? ((r.scheme = a[1]),
                (r.userinfo = a[3]),
                (r.host = a[4]),
                (r.port = Na(a[5], 10)),
                (r.path = a[6] || ''),
                (r.query = a[7]),
                (r.fragment = a[8]),
                isNaN(r.port) && (r.port = a[5]))
              : ((r.scheme = a[1] || void 0),
                (r.userinfo = -1 !== e.indexOf('@') ? a[3] : void 0),
                (r.host = -1 !== e.indexOf('//') ? a[4] : void 0),
                (r.port = Na(a[5], 10)),
                (r.path = a[6] || ''),
                (r.query = -1 !== e.indexOf('?') ? a[7] : void 0),
                (r.fragment = -1 !== e.indexOf('#') ? a[8] : void 0),
                isNaN(r.port) &&
                  (r.port = e.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/)
                    ? a[4]
                    : void 0)),
              r.host && (r.host = _(S(r.host, n), n)),
              void 0 !== r.scheme ||
              void 0 !== r.userinfo ||
              void 0 !== r.host ||
              void 0 !== r.port ||
              r.path ||
              void 0 !== r.query
                ? void 0 === r.scheme
                  ? (r.reference = 'relative')
                  : void 0 === r.fragment
                    ? (r.reference = 'absolute')
                    : (r.reference = 'uri')
                : (r.reference = 'same-document'),
              t.reference &&
                'suffix' !== t.reference &&
                t.reference !== r.reference &&
                (r.error =
                  r.error || 'URI is not a ' + t.reference + ' reference.')
            var o = g[(t.scheme || r.scheme || '').toLowerCase()]
            if (t.unicodeSupport || (o && o.unicodeSupport)) w(r, n)
            else {
              if (r.host && (t.domainHost || (o && o.domainHost)))
                try {
                  r.host = m.toASCII(
                    r.host.replace(n.PCT_ENCODED, b).toLowerCase()
                  )
                } catch (e) {
                  r.error =
                    r.error ||
                    "Host's domain name can not be converted to ASCII via punycode: " +
                      e
                }
              w(r, h)
            }
            o && o.parse && o.parse(r, t)
          } else r.error = r.error || 'URI can not be parsed.'
          return r
        }
        var A = /^\.\.?\//,
          j = /^\/\.(\/|$)/,
          I = /^\/\.\.(\/|$)/,
          N = /^\/?(?:.|\n)*?(?=\/|$)/
        function z(e) {
          for (var t = []; e.length; )
            if (e.match(A)) e = e.replace(A, '')
            else if (e.match(j)) e = e.replace(j, '/')
            else if (e.match(I)) (e = e.replace(I, '/')), t.pop()
            else if ('.' === e || '..' === e) e = ''
            else {
              var r = e.match(N)
              if (!r) throw new Error('Unexpected dot segment condition')
              var n = r[0]
              ;(e = e.slice(n.length)), t.push(n)
            }
          return t.join('')
        }
        function q(t) {
          var r =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            e = r.iri ? c : h,
            n = [],
            a = g[(r.scheme || t.scheme || '').toLowerCase()]
          if ((a && a.serialize && a.serialize(t, r), t.host))
            if (e.IPV6ADDRESS.test(t.host));
            else if (r.domainHost || (a && a.domainHost))
              try {
                t.host = r.iri
                  ? m.toUnicode(t.host)
                  : m.toASCII(t.host.replace(e.PCT_ENCODED, b).toLowerCase())
              } catch (e) {
                t.error =
                  t.error ||
                  "Host's domain name can not be converted to " +
                    (r.iri ? 'Unicode' : 'ASCII') +
                    ' via punycode: ' +
                    e
              }
          w(t, e),
            'suffix' !== r.reference &&
              t.scheme &&
              (n.push(t.scheme), n.push(':'))
          var o,
            i,
            s,
            u = ((o = t),
            (i = !1 !== r.iri ? c : h),
            (s = []),
            void 0 !== o.userinfo && (s.push(o.userinfo), s.push('@')),
            void 0 !== o.host &&
              s.push(
                _(S(String(o.host), i), i).replace(i.IPV6ADDRESS, function(
                  e,
                  t,
                  r
                ) {
                  return '[' + t + (r ? '%25' + r : '') + ']'
                })
              ),
            'number' == typeof o.port &&
              (s.push(':'), s.push(o.port.toString(10))),
            s.length ? s.join('') : void 0)
          if (
            (void 0 !== u &&
              ('suffix' !== r.reference && n.push('//'),
              n.push(u),
              t.path && '/' !== t.path.charAt(0) && n.push('/')),
            void 0 !== t.path)
          ) {
            var l = t.path
            r.absolutePath || (a && a.absolutePath) || (l = z(l)),
              void 0 === u && (l = l.replace(/^\/\//, '/%2F')),
              n.push(l)
          }
          return (
            void 0 !== t.query && (n.push('?'), n.push(t.query)),
            void 0 !== t.fragment && (n.push('#'), n.push(t.fragment)),
            n.join('')
          )
        }
        function B(e, t) {
          var r =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            n = arguments[3],
            a = {}
          return (
            n || ((e = T(q(e, r), r)), (t = T(q(t, r), r))),
            !(r = r || {}).tolerant && t.scheme
              ? ((a.scheme = t.scheme),
                (a.userinfo = t.userinfo),
                (a.host = t.host),
                (a.port = t.port),
                (a.path = z(t.path || '')),
                (a.query = t.query))
              : (void 0 !== t.userinfo || void 0 !== t.host || void 0 !== t.port
                  ? ((a.userinfo = t.userinfo),
                    (a.host = t.host),
                    (a.port = t.port),
                    (a.path = z(t.path || '')),
                    (a.query = t.query))
                  : (t.path
                      ? ('/' === t.path.charAt(0)
                          ? (a.path = z(t.path))
                          : ((void 0 === e.userinfo &&
                              void 0 === e.host &&
                              void 0 === e.port) ||
                            e.path
                              ? e.path
                                ? (a.path =
                                    e.path.slice(
                                      0,
                                      e.path.lastIndexOf('/') + 1
                                    ) + t.path)
                                : (a.path = t.path)
                              : (a.path = '/' + t.path),
                            (a.path = z(a.path))),
                        (a.query = t.query))
                      : ((a.path = e.path),
                        void 0 !== t.query
                          ? (a.query = t.query)
                          : (a.query = e.query)),
                    (a.userinfo = e.userinfo),
                    (a.host = e.host),
                    (a.port = e.port)),
                (a.scheme = e.scheme)),
            (a.fragment = t.fragment),
            a
          )
        }
        function H(e, t) {
          return (
            e &&
            e.toString().replace(t && t.iri ? c.PCT_ENCODED : h.PCT_ENCODED, b)
          )
        }
        var V = {
            scheme: 'http',
            domainHost: !0,
            parse: function(e, t) {
              return (
                e.host || (e.error = e.error || 'HTTP URIs must have a host.'),
                e
              )
            },
            serialize: function(e, t) {
              return (
                (e.port !==
                  ('https' !== String(e.scheme).toLowerCase() ? 80 : 443) &&
                  '' !== e.port) ||
                  (e.port = void 0),
                e.path || (e.path = '/'),
                e
              )
            }
          },
          Q = {
            scheme: 'https',
            domainHost: V.domainHost,
            parse: V.parse,
            serialize: V.serialize
          },
          G = {},
          K =
            '[A-Za-z0-9\\-\\.\\_\\~\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]',
          Y = '[0-9A-Fa-f]',
          W = O(
            O('%[EFef]' + Y + '%' + Y + Y + '%' + Y + Y) +
              '|' +
              O('%[89A-Fa-f]' + Y + '%' + Y + Y) +
              '|' +
              O('%' + Y + Y)
          ),
          Z = R(
            "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]",
            '[\\"\\\\]'
          ),
          J = new RegExp(K, 'g'),
          X = new RegExp(W, 'g'),
          ee = new RegExp(
            R(
              '[^]',
              "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]",
              '[\\.]',
              '[\\"]',
              Z
            ),
            'g'
          ),
          te = new RegExp(
            R('[^]', K, "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]"),
            'g'
          ),
          re = te
        function ne(e) {
          var t = b(e)
          return t.match(J) ? t : e
        }
        var ae = {
            scheme: 'mailto',
            parse: function(e, t) {
              var r = e,
                n = (r.to = r.path ? r.path.split(',') : [])
              if (((r.path = void 0), r.query)) {
                for (
                  var a = !1,
                    o = {},
                    i = r.query.split('&'),
                    s = 0,
                    u = i.length;
                  s < u;
                  ++s
                ) {
                  var l = i[s].split('=')
                  switch (l[0]) {
                    case 'to':
                      for (
                        var h = l[1].split(','), c = 0, f = h.length;
                        c < f;
                        ++c
                      )
                        n.push(h[c])
                      break
                    case 'subject':
                      r.subject = H(l[1], t)
                      break
                    case 'body':
                      r.body = H(l[1], t)
                      break
                    default:
                      ;(a = !0), (o[H(l[0], t)] = H(l[1], t))
                  }
                }
                a && (r.headers = o)
              }
              r.query = void 0
              for (var p = 0, d = n.length; p < d; ++p) {
                var v = n[p].split('@')
                if (((v[0] = H(v[0])), t.unicodeSupport))
                  v[1] = H(v[1], t).toLowerCase()
                else
                  try {
                    v[1] = m.toASCII(H(v[1], t).toLowerCase())
                  } catch (e) {
                    r.error =
                      r.error ||
                      "Email address's domain name can not be converted to ASCII via punycode: " +
                        e
                  }
                n[p] = v.join('@')
              }
              return r
            },
            serialize: function(e, t) {
              var r,
                n = e,
                a =
                  null != (r = e.to)
                    ? r instanceof Array
                      ? r
                      : 'number' != typeof r.length ||
                        r.split ||
                        r.setInterval ||
                        r.call
                        ? [r]
                        : Array.prototype.slice.call(r)
                    : []
              if (a) {
                for (var o = 0, i = a.length; o < i; ++o) {
                  var s = String(a[o]),
                    u = s.lastIndexOf('@'),
                    l = s
                      .slice(0, u)
                      .replace(X, ne)
                      .replace(X, d)
                      .replace(ee, y),
                    h = s.slice(u + 1)
                  try {
                    h = t.iri
                      ? m.toUnicode(h)
                      : m.toASCII(H(h, t).toLowerCase())
                  } catch (e) {
                    n.error =
                      n.error ||
                      "Email address's domain name can not be converted to " +
                        (t.iri ? 'Unicode' : 'ASCII') +
                        ' via punycode: ' +
                        e
                  }
                  a[o] = l + '@' + h
                }
                n.path = a.join(',')
              }
              var c = (e.headers = e.headers || {})
              e.subject && (c.subject = e.subject), e.body && (c.body = e.body)
              var f = []
              for (var p in c)
                c[p] !== G[p] &&
                  f.push(
                    p
                      .replace(X, ne)
                      .replace(X, d)
                      .replace(te, y) +
                      '=' +
                      c[p]
                        .replace(X, ne)
                        .replace(X, d)
                        .replace(re, y)
                  )
              return f.length && (n.query = f.join('&')), n
            }
          },
          oe = /^([^\:]+)\:(.*)/,
          ie = {
            scheme: 'urn',
            parse: function(e, t) {
              var r = e.path && e.path.match(oe),
                n = e
              if (r) {
                var a = t.scheme || n.scheme || 'urn',
                  o = r[1].toLowerCase(),
                  i = r[2],
                  s = a + ':' + (t.nid || o),
                  u = g[s]
                ;(n.nid = o),
                  (n.nss = i),
                  (n.path = void 0),
                  u && (n = u.parse(n, t))
              } else n.error = n.error || 'URN can not be parsed.'
              return n
            },
            serialize: function(e, t) {
              var r = t.scheme || e.scheme || 'urn',
                n = e.nid,
                a = r + ':' + (t.nid || n),
                o = g[a]
              o && (e = o.serialize(e, t))
              var i = e,
                s = e.nss
              return (i.path = (n || t.nid) + ':' + s), i
            }
          },
          se = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/,
          ue = {
            scheme: 'urn:uuid',
            parse: function(e, t) {
              var r = e
              return (
                (r.uuid = r.nss),
                (r.nss = void 0),
                t.tolerant ||
                  (r.uuid && r.uuid.match(se)) ||
                  (r.error = r.error || 'UUID is not valid.'),
                r
              )
            },
            serialize: function(e, t) {
              var r = e
              return (r.nss = (e.uuid || '').toLowerCase()), r
            }
          }
        ;(g[V.scheme] = V),
          (g[Q.scheme] = Q),
          (g[ae.scheme] = ae),
          (g[ie.scheme] = ie),
          (g[ue.scheme] = ue),
          (e.SCHEMES = g),
          (e.pctEncChar = y),
          (e.pctDecChars = b),
          (e.parse = T),
          (e.removeDotSegments = z),
          (e.serialize = q),
          (e.resolveComponents = B),
          (e.resolve = function(e, t, r) {
            var n = a({scheme: 'null'}, r)
            return q(B(T(e, n), T(t, n), n, !0), n)
          }),
          (e.normalize = function(e, t) {
            return (
              'string' == typeof e
                ? (e = q(T(e, t), t))
                : 'object' === n(e) && (e = T(q(e, t), t)),
              e
            )
          }),
          (e.equal = function(e, t, r) {
            return (
              'string' == typeof e
                ? (e = q(T(e, r), r))
                : 'object' === n(e) && (e = q(e, r)),
              'string' == typeof t
                ? (t = q(T(t, r), r))
                : 'object' === n(t) && (t = q(t, r)),
              e === t
            )
          }),
          (e.escapeComponent = function(e, t) {
            return (
              e && e.toString().replace(t && t.iri ? c.ESCAPE : h.ESCAPE, y)
            )
          }),
          (e.unescapeComponent = H),
          Object.defineProperty(e, '__esModule', {value: !0})
      })(t)
    })
  ;(xh = Th) &&
    xh.__esModule &&
    Object.prototype.hasOwnProperty.call(xh, 'default') &&
    xh.default
  var Ah = bn,
    jh = li,
    Ih = Object.prototype.hasOwnProperty,
    Ch = function e(t, r) {
      if (t === r) return !0
      if (t && r && 'object' == pe(t) && 'object' == pe(r)) {
        var n,
          a,
          o,
          i = Ah(t),
          s = Ah(r)
        if (i && s) {
          if ((a = t.length) != r.length) return !1
          for (n = a; 0 != n--; ) if (!e(t[n], r[n])) return !1
          return !0
        }
        if (i != s) return !1
        var u = t instanceof Date,
          l = r instanceof Date
        if (u != l) return !1
        if (u && l) return t.getTime() == r.getTime()
        var h = t instanceof RegExp,
          c = r instanceof RegExp
        if (h != c) return !1
        if (h && c) return t.toString() == r.toString()
        var f = jh(t)
        if ((a = f.length) !== jh(r).length) return !1
        for (n = a; 0 != n--; ) if (!Ih.call(r, f[n])) return !1
        for (n = a; 0 != n--; ) if (!e(t[(o = f[n])], r[o])) return !1
        return !0
      }
      return t != t && r != r
    },
    Lh = {
      copy: function(e, t) {
        for (var r in ((t = t || {}), e)) t[r] = e[r]
        return t
      },
      checkDataType: Dh,
      checkDataTypes: function(e, t) {
        switch (e.length) {
          case 1:
            return Dh(e[0], t, !0)
          default:
            var r = '',
              n = Mh(e)
            for (var a in (n.array &&
              n.object &&
              ((r = n.null ? '(' : '(!' + t + ' || '),
              (r += 'typeof ' + t + ' !== "object")'),
              delete n.null,
              delete n.array,
              delete n.object),
            n.number && delete n.integer,
            n))
              r += (r ? ' && ' : '') + Dh(a, t, !0)
            return r
        }
      },
      coerceToTypes: function(e, t) {
        if (bn(t)) {
          for (var r = [], n = 0; n < t.length; n++) {
            var a = t[n]
            Fh[a]
              ? (r[r.length] = a)
              : 'array' === e && 'array' === a && (r[r.length] = a)
          }
          if (r.length) return r
        } else {
          if (Fh[t]) return [t]
          if ('array' === e && 'array' === t) return ['array']
        }
      },
      toHash: Mh,
      getProperty: Nh,
      escapeQuotes: zh,
      equal: Ch,
      ucs2length: function(e) {
        for (var t, r = 0, n = e.length, a = 0; a < n; )
          r++,
            55296 <= (t = e.charCodeAt(a++)) &&
              t <= 56319 &&
              a < n &&
              56320 == (64512 & (t = e.charCodeAt(a))) &&
              a++
        return r
      },
      varOccurences: function(e, t) {
        t += '[^0-9]'
        var r = e.match(new RegExp(t, 'g'))
        return r ? r.length : 0
      },
      varReplace: function(e, t, r) {
        return (
          (t += '([^0-9])'),
          (r = r.replace(/\$/g, '$$$$')),
          e.replace(new RegExp(t, 'g'), r + '$1')
        )
      },
      cleanUpCode: function(e) {
        return e
          .replace(qh, '')
          .replace(Bh, '')
          .replace(Hh, 'if (!($1))')
      },
      finalCleanUpCode: function(e, t) {
        var r = e.match(Vh)
        r &&
          2 == r.length &&
          (e = t
            ? e.replace(Gh, '').replace(Wh, Zh)
            : e.replace(Qh, '').replace(Kh, Yh))
        return (r = e.match(Jh)) && 3 === r.length ? e.replace(Xh, '') : e
      },
      schemaHasRules: function(e, t) {
        if ('boolean' == typeof e) return !e
        for (var r in e) if (t[r]) return !0
      },
      schemaHasRulesExcept: function(e, t, r) {
        if ('boolean' == typeof e) return !e && 'not' != r
        for (var n in e) if (n != r && t[n]) return !0
      },
      toQuotedString: ec,
      getPathExpr: function(e, t, r, n) {
        return nc(
          e,
          r
            ? "'/' + " +
              t +
              (n ? '' : ".replace(/~/g, '~0').replace(/\\//g, '~1')")
            : n
              ? "'[' + " + t + " + ']'"
              : "'[\\'' + " + t + " + '\\']'"
        )
      },
      getPath: function(e, t, r) {
        var n = ec(r ? '/' + ac(t) : Nh(t))
        return nc(e, n)
      },
      getData: function(e, t, r) {
        var n, a, o, i
        if ('' === e) return 'rootData'
        if ('/' == e[0]) {
          if (!tc.test(e)) throw new Error('Invalid JSON-pointer: ' + e)
          ;(a = e), (o = 'rootData')
        } else {
          if (!(i = e.match(rc))) throw new Error('Invalid JSON-pointer: ' + e)
          if (((n = +i[1]), '#' == (a = i[2]))) {
            if (t <= n)
              throw new Error(
                'Cannot access property/index ' +
                  n +
                  ' levels up, current level is ' +
                  t
              )
            return r[t - n]
          }
          if (t < n)
            throw new Error(
              'Cannot access data ' + n + ' levels up, current level is ' + t
            )
          if (((o = 'data' + (t - n || '')), !a)) return o
        }
        for (var s = o, u = a.split('/'), l = 0; l < u.length; l++) {
          var h = u[l]
          h && ((o += Nh(oc(h))), (s += ' && ' + o))
        }
        return s
      },
      unescapeFragment: function(e) {
        return oc(decodeURIComponent(e))
      },
      unescapeJsonPointer: oc,
      escapeFragment: function(e) {
        return encodeURIComponent(ac(e))
      },
      escapeJsonPointer: ac
    }
  function Dh(e, t, r) {
    var n = r ? ' !== ' : ' === ',
      a = r ? ' || ' : ' && ',
      o = r ? '!' : '',
      i = r ? '' : '!'
    switch (e) {
      case 'null':
        return t + n + 'null'
      case 'array':
        return o + 'Array.isArray(' + t + ')'
      case 'object':
        return (
          '(' +
          o +
          t +
          a +
          'typeof ' +
          t +
          n +
          '"object"' +
          a +
          i +
          'Array.isArray(' +
          t +
          '))'
        )
      case 'integer':
        return (
          '(typeof ' +
          t +
          n +
          '"number"' +
          a +
          i +
          '(' +
          t +
          ' % 1)' +
          a +
          t +
          n +
          t +
          ')'
        )
      default:
        return 'typeof ' + t + n + '"' + e + '"'
    }
  }
  var Fh = Mh(['string', 'number', 'integer', 'boolean', 'null'])
  function Mh(e) {
    for (var t = {}, r = 0; r < e.length; r++) t[e[r]] = !0
    return t
  }
  var $h = /^[a-z$_][a-z$_0-9]*$/i,
    Uh = /'|\\/g
  function Nh(e) {
    return 'number' == typeof e
      ? '[' + e + ']'
      : $h.test(e)
        ? '.' + e
        : "['" + zh(e) + "']"
  }
  function zh(e) {
    return e
      .replace(Uh, '\\$&')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/\f/g, '\\f')
      .replace(/\t/g, '\\t')
  }
  var qh = /else\s*{\s*}/g,
    Bh = /if\s*\([^)]+\)\s*\{\s*\}(?!\s*else)/g,
    Hh = /if\s*\(([^)]+)\)\s*\{\s*\}\s*else(?!\s*if)/g
  var Vh = /[^v.]errors/g,
    Qh = /var errors = 0;|var vErrors = null;|validate.errors = vErrors;/g,
    Gh = /var errors = 0;|var vErrors = null;/g,
    Kh = 'return errors === 0;',
    Yh = 'validate.errors = null; return true;',
    Wh = /if \(errors === 0\) return data;\s*else throw new ValidationError\(vErrors\);/,
    Zh = 'return data;',
    Jh = /[^A-Za-z_$]rootData[^A-Za-z0-9_$]/g,
    Xh = /if \(rootData === undefined\) rootData = data;/
  function ec(e) {
    return "'" + zh(e) + "'"
  }
  var tc = /^\/(?:[^~]|~0|~1)*$/,
    rc = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/
  function nc(e, t) {
    return '""' == e ? t : (e + ' + ' + t).replace(/' \+ '/g, '')
  }
  function ac(e) {
    return e.replace(/~/g, '~0').replace(/\//g, '~1')
  }
  function oc(e) {
    return e.replace(/~1/g, '/').replace(/~0/g, '~')
  }
  var ic = function(e) {
    Lh.copy(e, this)
  }
  var sc = e(function(e) {
      var d = (e.exports = function(e, t, r) {
        'function' == typeof t && ((r = t), (t = {})),
          v(
            t,
            'function' == typeof (r = t.cb || r) ? r : r.pre || function() {},
            r.post || function() {},
            e,
            '',
            e
          )
      })
      function v(e, t, r, n, a, o, i, s, u, l) {
        if (n && 'object' == pe(n) && !bn(n)) {
          for (var h in (t(n, a, o, i, s, u, l), n)) {
            var c = n[h]
            if (bn(c)) {
              if (h in d.arrayKeywords)
                for (var f = 0; f < c.length; f++)
                  v(e, t, r, c[f], a + '/' + h + '/' + f, o, a, h, n, f)
            } else if (h in d.propsKeywords) {
              if (c && 'object' == pe(c))
                for (var p in c)
                  v(
                    e,
                    t,
                    r,
                    c[p],
                    a +
                      '/' +
                      h +
                      '/' +
                      p.replace(/~/g, '~0').replace(/\//g, '~1'),
                    o,
                    a,
                    h,
                    n,
                    p
                  )
            } else
              (h in d.keywords || (e.allKeys && !(h in d.skipKeywords))) &&
                v(e, t, r, c, a + '/' + h, o, a, h, n)
          }
          r(n, a, o, i, s, u, l)
        }
      }
      ;(d.keywords = {
        additionalItems: !0,
        items: !0,
        contains: !0,
        additionalProperties: !0,
        propertyNames: !0,
        not: !0
      }),
        (d.arrayKeywords = {items: !0, allOf: !0, anyOf: !0, oneOf: !0}),
        (d.propsKeywords = {
          definitions: !0,
          properties: !0,
          patternProperties: !0,
          dependencies: !0
        }),
        (d.skipKeywords = {
          default: !0,
          enum: !0,
          const: !0,
          required: !0,
          maximum: !0,
          minimum: !0,
          exclusiveMaximum: !0,
          exclusiveMinimum: !0,
          multipleOf: !0,
          maxLength: !0,
          minLength: !0,
          pattern: !0,
          format: !0,
          maxItems: !0,
          minItems: !0,
          uniqueItems: !0,
          maxProperties: !0,
          minProperties: !0
        })
    }),
    uc = lc
  function lc(e, t, r) {
    var n = this._refs[r]
    if ('string' == typeof n) {
      if (!this._refs[n]) return lc.call(this, e, t, n)
      n = this._refs[n]
    }
    if ((n = n || this._schemas[r]) instanceof ic)
      return vc(n.schema, this._opts.inlineRefs)
        ? n.schema
        : n.validate || this._compile(n)
    var a,
      o,
      i,
      s = hc.call(this, t, r)
    return (
      s && ((a = s.schema), (t = s.root), (i = s.baseId)),
      a instanceof ic
        ? (o = a.validate || e.call(this, a.schema, t, void 0, i))
        : void 0 !== a &&
          (o = vc(a, this._opts.inlineRefs)
            ? a
            : e.call(this, a, t, void 0, i)),
      o
    )
  }
  function hc(e, t) {
    var r = Th.parse(t),
      n = bc(r),
      a = yc(this._getId(e.schema))
    if (0 === li(e.schema).length || n !== a) {
      var o = _c(n),
        i = this._refs[o]
      if ('string' == typeof i) return cc.call(this, e, i, r)
      if (i instanceof ic) i.validate || this._compile(i), (e = i)
      else {
        if (!((i = this._schemas[o]) instanceof ic)) return
        if ((i.validate || this._compile(i), o == _c(t)))
          return {schema: i, root: e, baseId: a}
        e = i
      }
      if (!e.schema) return
      a = yc(this._getId(e.schema))
    }
    return pc.call(this, r, a, e.schema, e)
  }
  function cc(e, t, r) {
    var n = hc.call(this, e, t)
    if (n) {
      var a = n.schema,
        o = n.baseId
      e = n.root
      var i = this._getId(a)
      return i && (o = Ec(o, i)), pc.call(this, r, o, a, e)
    }
  }
  ;(lc.normalizeId = _c),
    (lc.fullPath = yc),
    (lc.url = Ec),
    (lc.ids = function(e) {
      var t = _c(this._getId(e)),
        c = {'': t},
        f = {'': yc(t, !1)},
        p = {},
        d = this
      return (
        sc(e, {allKeys: !0}, function(e, t, r, n, a, o, i) {
          if ('' !== t) {
            var s = d._getId(e),
              u = c[n],
              l = f[n] + '/' + a
            if (
              (void 0 !== i &&
                (l += '/' + ('number' == typeof i ? i : Lh.escapeFragment(i))),
              'string' == typeof s)
            ) {
              s = u = _c(u ? Th.resolve(u, s) : s)
              var h = d._refs[s]
              if (('string' == typeof h && (h = d._refs[h]), h && h.schema)) {
                if (!Ch(e, h.schema))
                  throw new Error(
                    'id "' + s + '" resolves to more than one schema'
                  )
              } else if (s != _c(l))
                if ('#' == s[0]) {
                  if (p[s] && !Ch(e, p[s]))
                    throw new Error(
                      'id "' + s + '" resolves to more than one schema'
                    )
                  p[s] = e
                } else d._refs[s] = l
            }
            ;(c[t] = u), (f[t] = l)
          }
        }),
        p
      )
    }),
    (lc.inlineRef = vc),
    (lc.schema = hc)
  var fc = Lh.toHash([
    'properties',
    'patternProperties',
    'enum',
    'dependencies',
    'definitions'
  ])
  function pc(e, t, r, n) {
    if (((e.fragment = e.fragment || ''), '/' == e.fragment.slice(0, 1))) {
      for (var a = e.fragment.split('/'), o = 1; o < a.length; o++) {
        var i = a[o]
        if (i) {
          if (void 0 === (r = r[(i = Lh.unescapeFragment(i))])) break
          var s
          if (!fc[i] && ((s = this._getId(r)) && (t = Ec(t, s)), r.$ref)) {
            var u = Ec(t, r.$ref),
              l = hc.call(this, n, u)
            l && ((r = l.schema), (n = l.root), (t = l.baseId))
          }
        }
      }
      return void 0 !== r && r !== n.schema
        ? {schema: r, root: n, baseId: t}
        : void 0
    }
  }
  var dc = Lh.toHash([
    'type',
    'format',
    'pattern',
    'maxLength',
    'minLength',
    'maxProperties',
    'minProperties',
    'maxItems',
    'minItems',
    'maximum',
    'minimum',
    'uniqueItems',
    'multipleOf',
    'required',
    'enum'
  ])
  function vc(e, t) {
    return (
      !1 !== t && (void 0 === t || !0 === t ? mc(e) : t ? gc(e) <= t : void 0)
    )
  }
  function mc(e) {
    var t
    if (bn(e)) {
      for (var r = 0; r < e.length; r++)
        if ('object' == pe((t = e[r])) && !mc(t)) return !1
    } else
      for (var n in e) {
        if ('$ref' == n) return !1
        if ('object' == pe((t = e[n])) && !mc(t)) return !1
      }
    return !0
  }
  function gc(e) {
    var t,
      r = 0
    if (bn(e)) {
      for (var n = 0; n < e.length; n++)
        if (('object' == pe((t = e[n])) && (r += gc(t)), r == 1 / 0))
          return 1 / 0
    } else
      for (var a in e) {
        if ('$ref' == a) return 1 / 0
        if (dc[a]) r++
        else if (('object' == pe((t = e[a])) && (r += gc(t) + 1), r == 1 / 0))
          return 1 / 0
      }
    return r
  }
  function yc(e, t) {
    return !1 !== t && (e = _c(e)), bc(Th.parse(e))
  }
  function bc(e) {
    return Th.serialize(e).split('#')[0] + '#'
  }
  var wc = /#\/?$/
  function _c(e) {
    return e ? e.replace(wc, '') : ''
  }
  function Ec(e, t) {
    return (t = _c(t)), Th.resolve(e, t)
  }
  var Pc = {
    Validation: xc(function(e) {
      ;(this.message = 'validation failed'),
        (this.errors = e),
        (this.ajv = this.validation = !0)
    }),
    MissingRef: xc(Sc)
  }
  function Sc(e, t, r) {
    ;(this.message = r || Sc.message(e, t)),
      (this.missingRef = uc.url(e, t)),
      (this.missingSchema = uc.normalizeId(uc.fullPath(this.missingRef)))
  }
  function xc(e) {
    return (e.prototype = xr(Error.prototype)), (e.prototype.constructor = e)
  }
  Sc.message = function(e, t) {
    return "can't resolve reference " + t + ' from id ' + e
  }
  var Rc = function(e, t) {
      t || (t = {}), 'function' == typeof t && (t = {cmp: t})
      var o,
        u = 'boolean' == typeof t.cycles && t.cycles,
        l =
          t.cmp &&
          ((o = t.cmp),
          function(a) {
            return function(e, t) {
              var r = {key: e, value: a[e]},
                n = {key: t, value: a[t]}
              return o(r, n)
            }
          }),
        h = []
      return (function e(t) {
        if (
          (t && t.toJSON && 'function' == typeof t.toJSON && (t = t.toJSON()),
          void 0 !== t)
        ) {
          if ('number' == typeof t) return isFinite(t) ? '' + t : 'null'
          if ('object' !== pe(t)) return Di(t)
          var r, n
          if (bn(t)) {
            for (n = '[', r = 0; r < t.length; r++)
              r && (n += ','), (n += e(t[r]) || 'null')
            return n + ']'
          }
          if (null === t) return 'null'
          if (-1 !== h.indexOf(t)) {
            if (u) return Di('__cycle__')
            throw new TypeError('Converting circular structure to JSON')
          }
          var a = h.push(t) - 1,
            o = li(t).sort(l && l(t))
          for (n = '', r = 0; r < o.length; r++) {
            var i = o[r],
              s = e(t[i])
            s && (n && (n += ','), (n += Di(i) + ':' + s))
          }
          return h.splice(a, 1), '{' + n + '}'
        }
      })(e)
    },
    Oc = function(n, e, t) {
      var r = '',
        a = !0 === n.schema.$async,
        o = n.util.schemaHasRulesExcept(n.schema, n.RULES.all, '$ref'),
        i = n.self._getId(n.schema)
      if (
        (n.isTop &&
          ((r += ' var validate = '),
          a && ((n.async = !0), (r += 'async ')),
          (r +=
            "function(data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; "),
          i &&
            (n.opts.sourceCode || n.opts.processCode) &&
            (r += ' /*# sourceURL=' + i + ' */ ')),
        'boolean' == typeof n.schema || (!o && !n.schema.$ref))
      ) {
        e = 'false schema'
        var s = n.level,
          u = n.dataLevel,
          l = n.schema[e],
          h = n.schemaPath + n.util.getProperty(e),
          c = n.errSchemaPath + '/' + e,
          f = !n.opts.allErrors,
          p = 'data' + (u || ''),
          d = 'valid' + s
        if (!1 === n.schema) {
          n.isTop ? (f = !0) : (r += ' var ' + d + ' = false; '),
            (K = K || []).push(r),
            (r = ''),
            !1 !== n.createErrors
              ? ((r +=
                  " { keyword: 'false schema' , dataPath: (dataPath || '') + " +
                  n.errorPath +
                  ' , schemaPath: ' +
                  n.util.toQuotedString(c) +
                  ' , params: {} '),
                !1 !== n.opts.messages &&
                  (r += " , message: 'boolean schema is false' "),
                n.opts.verbose &&
                  (r +=
                    ' , schema: false , parentSchema: validate.schema' +
                    n.schemaPath +
                    ' , data: ' +
                    p +
                    ' '),
                (r += ' } '))
              : (r += ' {} ')
          var v = r
          ;(r = K.pop()),
            !n.compositeRule && f
              ? n.async
                ? (r += ' throw new ValidationError([' + v + ']); ')
                : (r += ' validate.errors = [' + v + ']; return false; ')
              : (r +=
                  ' var err = ' +
                  v +
                  ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ')
        } else
          n.isTop
            ? (r += a
                ? ' return data; '
                : ' validate.errors = null; return true; ')
            : (r += ' var ' + d + ' = true; ')
        return n.isTop && (r += ' }; return validate; '), r
      }
      if (n.isTop) {
        var m = n.isTop
        ;(s = n.level = 0), (u = n.dataLevel = 0), (p = 'data')
        ;(n.rootId = n.resolve.fullPath(n.self._getId(n.root.schema))),
          (n.baseId = n.baseId || n.rootId),
          delete n.isTop,
          (n.dataPathArr = [void 0]),
          (r += ' var vErrors = null; '),
          (r += ' var errors = 0;     '),
          (r += ' if (rootData === undefined) rootData = data; ')
      } else {
        ;(s = n.level), (p = 'data' + ((u = n.dataLevel) || ''))
        if ((i && (n.baseId = n.resolve.url(n.baseId, i)), a && !n.async))
          throw new Error('async schema in sync schema')
        r += ' var errs_' + s + ' = errors;'
      }
      ;(d = 'valid' + s), (f = !n.opts.allErrors)
      var g = '',
        y = '',
        b = n.schema.type,
        w = bn(b)
      if ((w && 1 == b.length && ((b = b[0]), (w = !1)), n.schema.$ref && o)) {
        if ('fail' == n.opts.extendRefs)
          throw new Error(
            '$ref: validation keywords used in schema at path "' +
              n.errSchemaPath +
              '" (see option extendRefs)'
          )
        !0 !== n.opts.extendRefs &&
          ((o = !1),
          n.logger.warn(
            '$ref: keywords ignored in schema at path "' + n.errSchemaPath + '"'
          ))
      }
      if (
        (n.schema.$comment &&
          n.opts.$comment &&
          (r += ' ' + n.RULES.all.$comment.code(n, '$comment')),
        b)
      ) {
        if (n.opts.coerceTypes)
          var _ = n.util.coerceToTypes(n.opts.coerceTypes, b)
        var E = n.RULES.types[b]
        if (_ || w || !0 === E || (E && !Y(E))) {
          ;(h = n.schemaPath + '.type'),
            (c = n.errSchemaPath + '/type'),
            (h = n.schemaPath + '.type'),
            (c = n.errSchemaPath + '/type')
          var P = w ? 'checkDataTypes' : 'checkDataType'
          if (((r += ' if (' + n.util[P](b, p, !0) + ') { '), _)) {
            var S = 'dataType' + s,
              x = 'coerced' + s
            ;(r += ' var ' + S + ' = typeof ' + p + '; '),
              'array' == n.opts.coerceTypes &&
                (r +=
                  ' if (' +
                  S +
                  " == 'object' && Array.isArray(" +
                  p +
                  ')) ' +
                  S +
                  " = 'array'; "),
              (r += ' var ' + x + ' = undefined; ')
            var R = '',
              O = _
            if (O)
              for (var k, T = -1, A = O.length - 1; T < A; )
                (k = O[(T += 1)]),
                  T && ((r += ' if (' + x + ' === undefined) { '), (R += '}')),
                  'array' == n.opts.coerceTypes &&
                    'array' != k &&
                    (r +=
                      ' if (' +
                      S +
                      " == 'array' && " +
                      p +
                      '.length == 1) { ' +
                      x +
                      ' = ' +
                      p +
                      ' = ' +
                      p +
                      '[0]; ' +
                      S +
                      ' = typeof ' +
                      p +
                      ';  } '),
                  'string' == k
                    ? (r +=
                        ' if (' +
                        S +
                        " == 'number' || " +
                        S +
                        " == 'boolean') " +
                        x +
                        " = '' + " +
                        p +
                        '; else if (' +
                        p +
                        ' === null) ' +
                        x +
                        " = ''; ")
                    : 'number' == k || 'integer' == k
                      ? ((r +=
                          ' if (' +
                          S +
                          " == 'boolean' || " +
                          p +
                          ' === null || (' +
                          S +
                          " == 'string' && " +
                          p +
                          ' && ' +
                          p +
                          ' == +' +
                          p +
                          ' '),
                        'integer' == k && (r += ' && !(' + p + ' % 1)'),
                        (r += ')) ' + x + ' = +' + p + '; '))
                      : 'boolean' == k
                        ? (r +=
                            ' if (' +
                            p +
                            " === 'false' || " +
                            p +
                            ' === 0 || ' +
                            p +
                            ' === null) ' +
                            x +
                            ' = false; else if (' +
                            p +
                            " === 'true' || " +
                            p +
                            ' === 1) ' +
                            x +
                            ' = true; ')
                        : 'null' == k
                          ? (r +=
                              ' if (' +
                              p +
                              " === '' || " +
                              p +
                              ' === 0 || ' +
                              p +
                              ' === false) ' +
                              x +
                              ' = null; ')
                          : 'array' == n.opts.coerceTypes &&
                            'array' == k &&
                            (r +=
                              ' if (' +
                              S +
                              " == 'string' || " +
                              S +
                              " == 'number' || " +
                              S +
                              " == 'boolean' || " +
                              p +
                              ' == null) ' +
                              x +
                              ' = [' +
                              p +
                              ']; ')
            ;(r += ' ' + R + ' if (' + x + ' === undefined) {   '),
              (K = K || []).push(r),
              (r = ''),
              !1 !== n.createErrors
                ? ((r +=
                    " { keyword: 'type' , dataPath: (dataPath || '') + " +
                    n.errorPath +
                    ' , schemaPath: ' +
                    n.util.toQuotedString(c) +
                    " , params: { type: '"),
                  (r += w ? '' + b.join(',') : '' + b),
                  (r += "' } "),
                  !1 !== n.opts.messages &&
                    ((r += " , message: 'should be "),
                    (r += w ? '' + b.join(',') : '' + b),
                    (r += "' ")),
                  n.opts.verbose &&
                    (r +=
                      ' , schema: validate.schema' +
                      h +
                      ' , parentSchema: validate.schema' +
                      n.schemaPath +
                      ' , data: ' +
                      p +
                      ' '),
                  (r += ' } '))
                : (r += ' {} ')
            v = r
            ;(r = K.pop()),
              !n.compositeRule && f
                ? n.async
                  ? (r += ' throw new ValidationError([' + v + ']); ')
                  : (r += ' validate.errors = [' + v + ']; return false; ')
                : (r +=
                    ' var err = ' +
                    v +
                    ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
              (r += ' } else {  ')
            var j = u ? 'data' + (u - 1 || '') : 'parentData'
            ;(r += ' ' + p + ' = ' + x + '; '),
              u || (r += 'if (' + j + ' !== undefined)'),
              (r +=
                ' ' +
                j +
                '[' +
                (u ? n.dataPathArr[u] : 'parentDataProperty') +
                '] = ' +
                x +
                '; } ')
          } else {
            ;(K = K || []).push(r),
              (r = ''),
              !1 !== n.createErrors
                ? ((r +=
                    " { keyword: 'type' , dataPath: (dataPath || '') + " +
                    n.errorPath +
                    ' , schemaPath: ' +
                    n.util.toQuotedString(c) +
                    " , params: { type: '"),
                  (r += w ? '' + b.join(',') : '' + b),
                  (r += "' } "),
                  !1 !== n.opts.messages &&
                    ((r += " , message: 'should be "),
                    (r += w ? '' + b.join(',') : '' + b),
                    (r += "' ")),
                  n.opts.verbose &&
                    (r +=
                      ' , schema: validate.schema' +
                      h +
                      ' , parentSchema: validate.schema' +
                      n.schemaPath +
                      ' , data: ' +
                      p +
                      ' '),
                  (r += ' } '))
                : (r += ' {} ')
            v = r
            ;(r = K.pop()),
              !n.compositeRule && f
                ? n.async
                  ? (r += ' throw new ValidationError([' + v + ']); ')
                  : (r += ' validate.errors = [' + v + ']; return false; ')
                : (r +=
                    ' var err = ' +
                    v +
                    ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ')
          }
          r += ' } '
        }
      }
      if (n.schema.$ref && !o)
        (r += ' ' + n.RULES.all.$ref.code(n, '$ref') + ' '),
          f &&
            ((r += ' } if (errors === '),
            (r += m ? '0' : 'errs_' + s),
            (r += ') { '),
            (y += '}'))
      else {
        var I = n.RULES
        if (I)
          for (var C = -1, L = I.length - 1; C < L; )
            if (Y((E = I[(C += 1)]))) {
              if (
                (E.type &&
                  (r += ' if (' + n.util.checkDataType(E.type, p) + ') { '),
                n.opts.useDefaults && !n.compositeRule)
              )
                if ('object' == E.type && n.schema.properties) {
                  l = n.schema.properties
                  var D = li(l)
                  if (D)
                    for (var F, M = -1, $ = D.length - 1; M < $; ) {
                      if (void 0 !== (N = l[(F = D[(M += 1)])]).default)
                        (r +=
                          '  if (' +
                          (q = p + n.util.getProperty(F)) +
                          ' === undefined) ' +
                          q +
                          ' = '),
                          'shared' == n.opts.useDefaults
                            ? (r += ' ' + n.useDefault(N.default) + ' ')
                            : (r += ' ' + Di(N.default) + ' '),
                          (r += '; ')
                    }
                } else if ('array' == E.type && bn(n.schema.items)) {
                  var U = n.schema.items
                  if (U) {
                    T = -1
                    for (var N, z = U.length - 1; T < z; ) {
                      var q
                      if (void 0 !== (N = U[(T += 1)]).default)
                        (r +=
                          '  if (' +
                          (q = p + '[' + T + ']') +
                          ' === undefined) ' +
                          q +
                          ' = '),
                          'shared' == n.opts.useDefaults
                            ? (r += ' ' + n.useDefault(N.default) + ' ')
                            : (r += ' ' + Di(N.default) + ' '),
                          (r += '; ')
                    }
                  }
                }
              var B = E.rules
              if (B)
                for (var H, V = -1, Q = B.length - 1; V < Q; )
                  if (W((H = B[(V += 1)]))) {
                    var G = H.code(n, H.keyword, E.type)
                    G && ((r += ' ' + G + ' '), f && (g += '}'))
                  }
              if (
                (f && ((r += ' ' + g + ' '), (g = '')),
                E.type && ((r += ' } '), b && b === E.type && !_))
              ) {
                r += ' else { '
                var K
                ;(h = n.schemaPath + '.type'), (c = n.errSchemaPath + '/type')
                ;(K = K || []).push(r),
                  (r = ''),
                  !1 !== n.createErrors
                    ? ((r +=
                        " { keyword: 'type' , dataPath: (dataPath || '') + " +
                        n.errorPath +
                        ' , schemaPath: ' +
                        n.util.toQuotedString(c) +
                        " , params: { type: '"),
                      (r += w ? '' + b.join(',') : '' + b),
                      (r += "' } "),
                      !1 !== n.opts.messages &&
                        ((r += " , message: 'should be "),
                        (r += w ? '' + b.join(',') : '' + b),
                        (r += "' ")),
                      n.opts.verbose &&
                        (r +=
                          ' , schema: validate.schema' +
                          h +
                          ' , parentSchema: validate.schema' +
                          n.schemaPath +
                          ' , data: ' +
                          p +
                          ' '),
                      (r += ' } '))
                    : (r += ' {} ')
                v = r
                ;(r = K.pop()),
                  !n.compositeRule && f
                    ? n.async
                      ? (r += ' throw new ValidationError([' + v + ']); ')
                      : (r += ' validate.errors = [' + v + ']; return false; ')
                    : (r +=
                        ' var err = ' +
                        v +
                        ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
                  (r += ' } ')
              }
              f &&
                ((r += ' if (errors === '),
                (r += m ? '0' : 'errs_' + s),
                (r += ') { '),
                (y += '}'))
            }
      }
      function Y(e) {
        for (var t = e.rules, r = 0; r < t.length; r++) if (W(t[r])) return !0
      }
      function W(e) {
        return void 0 !== n.schema[e.keyword] || (e.implements && Z(e))
      }
      function Z(e) {
        for (var t = e.implements, r = 0; r < t.length; r++)
          if (void 0 !== n.schema[t[r]]) return !0
      }
      return (
        f && (r += ' ' + y + ' '),
        m
          ? (a
              ? ((r += ' if (errors === 0) return data;           '),
                (r += ' else throw new ValidationError(vErrors); '))
              : ((r += ' validate.errors = vErrors; '),
                (r += ' return errors === 0;       ')),
            (r += ' }; return validate;'))
          : (r += ' var ' + d + ' = errors === errs_' + s + ';'),
        (r = n.util.cleanUpCode(r)),
        m && (r = n.util.finalCleanUpCode(r, a)),
        r
      )
    },
    kc = Lh.ucs2length,
    Tc = Pc.Validation,
    Ac = function c(e, f, p, t) {
      var d = this,
        v = this._opts,
        m = [void 0],
        g = {},
        l = [],
        r = {},
        h = [],
        n = {},
        y = []
      f = f || {schema: e, refVal: m, refs: g}
      var a = jc.call(this, e, f, t)
      var o = this._compilations[a.index]
      if (a.compiling)
        return (o.callValidate = function e() {
          var t = o.validate
          var r = t.apply(this, arguments)
          e.errors = t.errors
          return r
        })
      var b = this._formats
      var w = this.RULES
      try {
        var i = _(e, f, p, t)
        o.validate = i
        var s = o.callValidate
        return (
          s &&
            ((s.schema = i.schema),
            (s.errors = null),
            (s.refs = i.refs),
            (s.refVal = i.refVal),
            (s.root = i.root),
            (s.$async = i.$async),
            v.sourceCode && (s.source = i.source)),
          i
        )
      } finally {
        Ic.call(this, e, f, t)
      }
      function _(e, t, r, n) {
        var a = !t || (t && t.schema == e)
        if (t.schema != f.schema) return c.call(d, e, t, r, n)
        var o,
          i = !0 === e.$async,
          s = Oc({
            isTop: !0,
            schema: e,
            isRoot: a,
            baseId: n,
            root: t,
            schemaPath: '',
            errSchemaPath: '#',
            errorPath: '""',
            MissingRefError: Pc.MissingRef,
            RULES: w,
            validate: Oc,
            util: Lh,
            resolve: uc,
            resolveRef: E,
            usePattern: x,
            useDefault: R,
            useCustomRule: O,
            opts: v,
            formats: b,
            logger: d.logger,
            self: d
          })
        ;(s = $c(m, Fc) + $c(l, Lc) + $c(h, Dc) + $c(y, Mc) + s),
          v.processCode && (s = v.processCode(s))
        try {
          var u = new Function(
            'self',
            'RULES',
            'formats',
            'root',
            'refVal',
            'defaults',
            'customRules',
            'equal',
            'ucs2length',
            'ValidationError',
            s
          )
          ;(o = u(d, w, b, f, m, h, y, Ch, kc, Tc)), (m[0] = o)
        } catch (e) {
          throw (d.logger.error('Error compiling schema, function code:', s), e)
        }
        return (
          (o.schema = e),
          (o.errors = null),
          (o.refs = g),
          (o.refVal = m),
          (o.root = a ? o : t),
          i && (o.$async = !0),
          !0 === v.sourceCode &&
            (o.source = {code: s, patterns: l, defaults: h}),
          o
        )
      }
      function E(e, t, r) {
        t = uc.url(e, t)
        var n,
          a,
          o = g[t]
        if (void 0 !== o) return S((n = m[o]), (a = 'refVal[' + o + ']'))
        if (!r && f.refs) {
          var i = f.refs[t]
          if (void 0 !== i) return (n = f.refVal[i]), (a = P(t, n)), S(n, a)
        }
        a = P(t)
        var s,
          u,
          l = uc.call(d, _, f, t)
        if (void 0 === l) {
          var h = p && p[t]
          h && (l = uc.inlineRef(h, v.inlineRefs) ? h : c.call(d, h, f, p, e))
        }
        if (void 0 !== l) return (s = l), (u = g[t]), (m[u] = s), S(l, a)
        delete g[t]
      }
      function P(e, t) {
        var r = m.length
        return (m[r] = t), 'refVal' + (g[e] = r)
      }
      function S(e, t) {
        return 'object' == pe(e) || 'boolean' == typeof e
          ? {code: t, schema: e, inline: !0}
          : {code: t, $async: e && !!e.$async}
      }
      function x(e) {
        var t = r[e]
        return (
          void 0 === t && ((t = r[e] = l.length), (l[t] = e)), 'pattern' + t
        )
      }
      function R(e) {
        switch (pe(e)) {
          case 'boolean':
          case 'number':
            return '' + e
          case 'string':
            return Lh.toQuotedString(e)
          case 'object':
            if (null === e) return 'null'
            var t = Rc(e),
              r = n[t]
            return (
              void 0 === r && ((r = n[t] = h.length), (h[r] = e)), 'default' + r
            )
        }
      }
      function O(e, t, r, n) {
        var a = e.definition.validateSchema
        if (a && !1 !== d._opts.validateSchema) {
          var o = a(t)
          if (!o) {
            var i = 'keyword schema is invalid: ' + d.errorsText(a.errors)
            if ('log' != d._opts.validateSchema) throw new Error(i)
            d.logger.error(i)
          }
        }
        var s,
          u = e.definition.compile,
          l = e.definition.inline,
          h = e.definition.macro
        if (u) s = u.call(d, t, r, n)
        else if (h)
          (s = h.call(d, t, r, n)),
            !1 !== v.validateSchema && d.validateSchema(s, !0)
        else if (l) s = l.call(d, n, e.keyword, t, r)
        else if (!(s = e.definition.validate)) return
        if (void 0 === s)
          throw new Error('custom keyword "' + e.keyword + '"failed to compile')
        var c = y.length
        return (y[c] = s), {code: 'customRule' + c, validate: s}
      }
    }
  function jc(e, t, r) {
    var n = Cc.call(this, e, t, r)
    return 0 <= n
      ? {index: n, compiling: !0}
      : {
          index: (n = this._compilations.length),
          compiling: !(this._compilations[n] = {schema: e, root: t, baseId: r})
        }
  }
  function Ic(e, t, r) {
    var n = Cc.call(this, e, t, r)
    0 <= n && this._compilations.splice(n, 1)
  }
  function Cc(e, t, r) {
    for (var n = 0; n < this._compilations.length; n++) {
      var a = this._compilations[n]
      if (a.schema == e && a.root == t && a.baseId == r) return n
    }
    return -1
  }
  function Lc(e, t) {
    return 'var pattern' + e + ' = new RegExp(' + Lh.toQuotedString(t[e]) + ');'
  }
  function Dc(e) {
    return 'var default' + e + ' = defaults[' + e + '];'
  }
  function Fc(e, t) {
    return void 0 === t[e] ? '' : 'var refVal' + e + ' = refVal[' + e + '];'
  }
  function Mc(e) {
    return 'var customRule' + e + ' = customRules[' + e + '];'
  }
  function $c(e, t) {
    if (!e.length) return ''
    for (var r = '', n = 0; n < e.length; n++) r += t(n, e)
    return r
  }
  var Uc = e(function(e) {
      var t = (e.exports = function() {
        this._cache = {}
      })
      ;(t.prototype.put = function(e, t) {
        this._cache[e] = t
      }),
        (t.prototype.get = function(e) {
          return this._cache[e]
        }),
        (t.prototype.del = function(e) {
          delete this._cache[e]
        }),
        (t.prototype.clear = function() {
          this._cache = {}
        })
    }),
    Nc = /^(\d\d\d\d)-(\d\d)-(\d\d)$/,
    zc = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    qc = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d:\d\d)?$/i,
    Bc = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*$/i,
    Hc = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
    Vc = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
    Qc = /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-?)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-?)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i,
    Gc = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
    Kc = /^(?:\/(?:[^~/]|~0|~1)*)*$/,
    Yc = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
    Wc = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
    Zc = Jc
  function Jc(e) {
    return (e = 'full' == e ? 'full' : 'fast'), Lh.copy(Jc[e])
  }
  function Xc(e) {
    var t = e.match(Nc)
    if (!t) return !1
    var r,
      n = +t[1],
      a = +t[2],
      o = +t[3]
    return (
      1 <= a &&
      a <= 12 &&
      1 <= o &&
      o <=
        (2 != a || ((r = n) % 4 != 0 || (r % 100 == 0 && r % 400 != 0))
          ? zc[a]
          : 29)
    )
  }
  function ef(e, t) {
    var r = e.match(qc)
    if (!r) return !1
    var n = r[1],
      a = r[2],
      o = r[3],
      i = r[5]
    return (
      ((n <= 23 && a <= 59 && o <= 59) || (23 == n && 59 == a && 60 == o)) &&
      (!t || i)
    )
  }
  ;(Jc.fast = {
    date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/,
    time: /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d:\d\d)?$/i,
    'date-time': /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d:\d\d)$/i,
    uri: /^(?:[a-z][a-z0-9+-.]*:)(?:\/?\/)?[^\s]*$/i,
    'uri-reference': /^(?:(?:[a-z][a-z0-9+-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
    'uri-template': Vc,
    url: Qc,
    email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    hostname: Bc,
    ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
    ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
    regex: af,
    uuid: Gc,
    'json-pointer': Kc,
    'json-pointer-uri-fragment': Yc,
    'relative-json-pointer': Wc
  }),
    (Jc.full = {
      date: Xc,
      time: ef,
      'date-time': function(e) {
        var t = e.split(tf)
        return 2 == t.length && Xc(t[0]) && ef(t[1], !0)
      },
      uri: function(e) {
        return rf.test(e) && Hc.test(e)
      },
      'uri-reference': /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
      'uri-template': Vc,
      url: Qc,
      email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&''*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
      hostname: function(e) {
        return e.length <= 255 && Bc.test(e)
      },
      ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
      ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
      regex: af,
      uuid: Gc,
      'json-pointer': Kc,
      'json-pointer-uri-fragment': Yc,
      'relative-json-pointer': Wc
    })
  var tf = /t|\s/i
  var rf = /\/|:/
  var nf = /[^\\]\\Z/
  function af(e) {
    if (nf.test(e)) return !1
    try {
      return !0
    } catch (e) {
      return !1
    }
  }
  var of = function(e, t, r) {
      var n,
        a = ' ',
        o = e.level,
        i = e.dataLevel,
        s = e.schema[t],
        u = e.schemaPath + e.util.getProperty(t),
        l = e.errSchemaPath + '/' + t,
        h = !e.opts.allErrors,
        c = 'data' + (i || ''),
        f = e.opts.$data && s && s.$data
      f
        ? ((a +=
            ' var schema' +
            o +
            ' = ' +
            e.util.getData(s.$data, i, e.dataPathArr) +
            '; '),
          (n = 'schema' + o))
        : (n = s)
      var p = 'maximum' == t,
        d = p ? 'exclusiveMaximum' : 'exclusiveMinimum',
        v = e.schema[d],
        m = e.opts.$data && v && v.$data,
        g = p ? '<' : '>',
        y = p ? '>' : '<',
        b = void 0
      if (m) {
        var w = e.util.getData(v.$data, i, e.dataPathArr),
          _ = 'exclusive' + o,
          E = 'exclType' + o,
          P = 'exclIsNumber' + o,
          S = "' + " + (O = 'op' + o) + " + '"
        ;(a += ' var schemaExcl' + o + ' = ' + w + '; '),
          (a +=
            ' var ' +
            _ +
            '; var ' +
            E +
            ' = typeof ' +
            (w = 'schemaExcl' + o) +
            '; if (' +
            E +
            " != 'boolean' && " +
            E +
            " != 'undefined' && " +
            E +
            " != 'number') { ")
        var x
        b = d
        ;(x = x || []).push(a),
          (a = ''),
          !1 !== e.createErrors
            ? ((a +=
                " { keyword: '" +
                (b || '_exclusiveLimit') +
                "' , dataPath: (dataPath || '') + " +
                e.errorPath +
                ' , schemaPath: ' +
                e.util.toQuotedString(l) +
                ' , params: {} '),
              !1 !== e.opts.messages &&
                (a += " , message: '" + d + " should be boolean' "),
              e.opts.verbose &&
                (a +=
                  ' , schema: validate.schema' +
                  u +
                  ' , parentSchema: validate.schema' +
                  e.schemaPath +
                  ' , data: ' +
                  c +
                  ' '),
              (a += ' } '))
            : (a += ' {} ')
        var R = a
        ;(a = x.pop()),
          !e.compositeRule && h
            ? e.async
              ? (a += ' throw new ValidationError([' + R + ']); ')
              : (a += ' validate.errors = [' + R + ']; return false; ')
            : (a +=
                ' var err = ' +
                R +
                ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
          (a += ' } else if ( '),
          f &&
            (a +=
              ' (' + n + ' !== undefined && typeof ' + n + " != 'number') || "),
          (a +=
            ' ' +
            E +
            " == 'number' ? ( (" +
            _ +
            ' = ' +
            n +
            ' === undefined || ' +
            w +
            ' ' +
            g +
            '= ' +
            n +
            ') ? ' +
            c +
            ' ' +
            y +
            '= ' +
            w +
            ' : ' +
            c +
            ' ' +
            y +
            ' ' +
            n +
            ' ) : ( (' +
            _ +
            ' = ' +
            w +
            ' === true) ? ' +
            c +
            ' ' +
            y +
            '= ' +
            n +
            ' : ' +
            c +
            ' ' +
            y +
            ' ' +
            n +
            ' ) || ' +
            c +
            ' !== ' +
            c +
            ') { var op' +
            o +
            ' = ' +
            _ +
            " ? '" +
            g +
            "' : '" +
            g +
            "='; "),
          void 0 === s &&
            ((b = d), (l = e.errSchemaPath + '/' + d), (n = w), (f = m))
      } else {
        S = g
        if ((P = 'number' == typeof v) && f) {
          var O = "'" + S + "'"
          ;(a += ' if ( '),
            f &&
              (a +=
                ' (' +
                n +
                ' !== undefined && typeof ' +
                n +
                " != 'number') || "),
            (a +=
              ' ( ' +
              n +
              ' === undefined || ' +
              v +
              ' ' +
              g +
              '= ' +
              n +
              ' ? ' +
              c +
              ' ' +
              y +
              '= ' +
              v +
              ' : ' +
              c +
              ' ' +
              y +
              ' ' +
              n +
              ' ) || ' +
              c +
              ' !== ' +
              c +
              ') { ')
        } else {
          P && void 0 === s
            ? ((_ = !0),
              (b = d),
              (l = e.errSchemaPath + '/' + d),
              (n = v),
              (y += '='))
            : (P && (n = Math[p ? 'min' : 'max'](v, s)),
              v === (!P || n)
                ? ((_ = !0),
                  (b = d),
                  (l = e.errSchemaPath + '/' + d),
                  (y += '='))
                : ((_ = !1), (S += '=')))
          O = "'" + S + "'"
          ;(a += ' if ( '),
            f &&
              (a +=
                ' (' +
                n +
                ' !== undefined && typeof ' +
                n +
                " != 'number') || "),
            (a +=
              ' ' + c + ' ' + y + ' ' + n + ' || ' + c + ' !== ' + c + ') { ')
        }
      }
      ;(b = b || t),
        (x = x || []).push(a),
        (a = ''),
        !1 !== e.createErrors
          ? ((a +=
              " { keyword: '" +
              (b || '_limit') +
              "' , dataPath: (dataPath || '') + " +
              e.errorPath +
              ' , schemaPath: ' +
              e.util.toQuotedString(l) +
              ' , params: { comparison: ' +
              O +
              ', limit: ' +
              n +
              ', exclusive: ' +
              _ +
              ' } '),
            !1 !== e.opts.messages &&
              ((a += " , message: 'should be " + S + ' '),
              (a += f ? "' + " + n : n + "'")),
            e.opts.verbose &&
              ((a += ' , schema:  '),
              (a += f ? 'validate.schema' + u : '' + s),
              (a +=
                '         , parentSchema: validate.schema' +
                e.schemaPath +
                ' , data: ' +
                c +
                ' ')),
            (a += ' } '))
          : (a += ' {} ')
      R = a
      return (
        (a = x.pop()),
        !e.compositeRule && h
          ? e.async
            ? (a += ' throw new ValidationError([' + R + ']); ')
            : (a += ' validate.errors = [' + R + ']; return false; ')
          : (a +=
              ' var err = ' +
              R +
              ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
        (a += ' } '),
        h && (a += ' else { '),
        a
      )
    },
    sf = function(e, t, r) {
      var n,
        a = ' ',
        o = e.level,
        i = e.dataLevel,
        s = e.schema[t],
        u = e.schemaPath + e.util.getProperty(t),
        l = e.errSchemaPath + '/' + t,
        h = !e.opts.allErrors,
        c = 'data' + (i || ''),
        f = e.opts.$data && s && s.$data
      f
        ? ((a +=
            ' var schema' +
            o +
            ' = ' +
            e.util.getData(s.$data, i, e.dataPathArr) +
            '; '),
          (n = 'schema' + o))
        : (n = s),
        (a += 'if ( '),
        f &&
          (a +=
            ' (' + n + ' !== undefined && typeof ' + n + " != 'number') || "),
        (a +=
          ' ' +
          c +
          '.length ' +
          ('maxItems' == t ? '>' : '<') +
          ' ' +
          n +
          ') { ')
      var p = t,
        d = d || []
      d.push(a),
        (a = ''),
        !1 !== e.createErrors
          ? ((a +=
              " { keyword: '" +
              (p || '_limitItems') +
              "' , dataPath: (dataPath || '') + " +
              e.errorPath +
              ' , schemaPath: ' +
              e.util.toQuotedString(l) +
              ' , params: { limit: ' +
              n +
              ' } '),
            !1 !== e.opts.messages &&
              ((a += " , message: 'should NOT have "),
              (a += 'maxItems' == t ? 'more' : 'less'),
              (a += ' than '),
              (a += f ? "' + " + n + " + '" : '' + s),
              (a += " items' ")),
            e.opts.verbose &&
              ((a += ' , schema:  '),
              (a += f ? 'validate.schema' + u : '' + s),
              (a +=
                '         , parentSchema: validate.schema' +
                e.schemaPath +
                ' , data: ' +
                c +
                ' ')),
            (a += ' } '))
          : (a += ' {} ')
      var v = a
      return (
        (a = d.pop()),
        !e.compositeRule && h
          ? e.async
            ? (a += ' throw new ValidationError([' + v + ']); ')
            : (a += ' validate.errors = [' + v + ']; return false; ')
          : (a +=
              ' var err = ' +
              v +
              ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
        (a += '} '),
        h && (a += ' else { '),
        a
      )
    },
    uf = function(e, t, r) {
      var n,
        a = ' ',
        o = e.level,
        i = e.dataLevel,
        s = e.schema[t],
        u = e.schemaPath + e.util.getProperty(t),
        l = e.errSchemaPath + '/' + t,
        h = !e.opts.allErrors,
        c = 'data' + (i || ''),
        f = e.opts.$data && s && s.$data
      f
        ? ((a +=
            ' var schema' +
            o +
            ' = ' +
            e.util.getData(s.$data, i, e.dataPathArr) +
            '; '),
          (n = 'schema' + o))
        : (n = s)
      var p = 'maxLength' == t ? '>' : '<'
      ;(a += 'if ( '),
        f &&
          (a +=
            ' (' + n + ' !== undefined && typeof ' + n + " != 'number') || "),
        !1 === e.opts.unicode
          ? (a += ' ' + c + '.length ')
          : (a += ' ucs2length(' + c + ') '),
        (a += ' ' + p + ' ' + n + ') { ')
      var d = t,
        v = v || []
      v.push(a),
        (a = ''),
        !1 !== e.createErrors
          ? ((a +=
              " { keyword: '" +
              (d || '_limitLength') +
              "' , dataPath: (dataPath || '') + " +
              e.errorPath +
              ' , schemaPath: ' +
              e.util.toQuotedString(l) +
              ' , params: { limit: ' +
              n +
              ' } '),
            !1 !== e.opts.messages &&
              ((a += " , message: 'should NOT be "),
              (a += 'maxLength' == t ? 'longer' : 'shorter'),
              (a += ' than '),
              (a += f ? "' + " + n + " + '" : '' + s),
              (a += " characters' ")),
            e.opts.verbose &&
              ((a += ' , schema:  '),
              (a += f ? 'validate.schema' + u : '' + s),
              (a +=
                '         , parentSchema: validate.schema' +
                e.schemaPath +
                ' , data: ' +
                c +
                ' ')),
            (a += ' } '))
          : (a += ' {} ')
      var m = a
      return (
        (a = v.pop()),
        !e.compositeRule && h
          ? e.async
            ? (a += ' throw new ValidationError([' + m + ']); ')
            : (a += ' validate.errors = [' + m + ']; return false; ')
          : (a +=
              ' var err = ' +
              m +
              ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
        (a += '} '),
        h && (a += ' else { '),
        a
      )
    },
    lf = function(e, t, r) {
      var n,
        a = ' ',
        o = e.level,
        i = e.dataLevel,
        s = e.schema[t],
        u = e.schemaPath + e.util.getProperty(t),
        l = e.errSchemaPath + '/' + t,
        h = !e.opts.allErrors,
        c = 'data' + (i || ''),
        f = e.opts.$data && s && s.$data
      f
        ? ((a +=
            ' var schema' +
            o +
            ' = ' +
            e.util.getData(s.$data, i, e.dataPathArr) +
            '; '),
          (n = 'schema' + o))
        : (n = s),
        (a += 'if ( '),
        f &&
          (a +=
            ' (' + n + ' !== undefined && typeof ' + n + " != 'number') || "),
        (a +=
          ' Object.keys(' +
          c +
          ').length ' +
          ('maxProperties' == t ? '>' : '<') +
          ' ' +
          n +
          ') { ')
      var p = t,
        d = d || []
      d.push(a),
        (a = ''),
        !1 !== e.createErrors
          ? ((a +=
              " { keyword: '" +
              (p || '_limitProperties') +
              "' , dataPath: (dataPath || '') + " +
              e.errorPath +
              ' , schemaPath: ' +
              e.util.toQuotedString(l) +
              ' , params: { limit: ' +
              n +
              ' } '),
            !1 !== e.opts.messages &&
              ((a += " , message: 'should NOT have "),
              (a += 'maxProperties' == t ? 'more' : 'less'),
              (a += ' than '),
              (a += f ? "' + " + n + " + '" : '' + s),
              (a += " properties' ")),
            e.opts.verbose &&
              ((a += ' , schema:  '),
              (a += f ? 'validate.schema' + u : '' + s),
              (a +=
                '         , parentSchema: validate.schema' +
                e.schemaPath +
                ' , data: ' +
                c +
                ' ')),
            (a += ' } '))
          : (a += ' {} ')
      var v = a
      return (
        (a = d.pop()),
        !e.compositeRule && h
          ? e.async
            ? (a += ' throw new ValidationError([' + v + ']); ')
            : (a += ' validate.errors = [' + v + ']; return false; ')
          : (a +=
              ' var err = ' +
              v +
              ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
        (a += '} '),
        h && (a += ' else { '),
        a
      )
    },
    hf = {
      $ref: function(e, t, r) {
        var n,
          a,
          o = ' ',
          i = e.level,
          s = e.dataLevel,
          u = e.schema[t],
          l = e.errSchemaPath + '/' + t,
          h = !e.opts.allErrors,
          c = 'data' + (s || ''),
          f = 'valid' + i
        if ('#' == u || '#/' == u)
          e.isRoot
            ? ((n = e.async), (a = 'validate'))
            : ((n = !0 === e.root.schema.$async), (a = 'root.refVal[0]'))
        else {
          var p = e.resolveRef(e.baseId, u, e.isRoot)
          if (void 0 === p) {
            var d = e.MissingRefError.message(e.baseId, u)
            if ('fail' == e.opts.missingRefs) {
              e.logger.error(d),
                (y = y || []).push(o),
                (o = ''),
                !1 !== e.createErrors
                  ? ((o +=
                      " { keyword: '$ref' , dataPath: (dataPath || '') + " +
                      e.errorPath +
                      ' , schemaPath: ' +
                      e.util.toQuotedString(l) +
                      " , params: { ref: '" +
                      e.util.escapeQuotes(u) +
                      "' } "),
                    !1 !== e.opts.messages &&
                      (o +=
                        " , message: 'can\\'t resolve reference " +
                        e.util.escapeQuotes(u) +
                        "' "),
                    e.opts.verbose &&
                      (o +=
                        ' , schema: ' +
                        e.util.toQuotedString(u) +
                        ' , parentSchema: validate.schema' +
                        e.schemaPath +
                        ' , data: ' +
                        c +
                        ' '),
                    (o += ' } '))
                  : (o += ' {} ')
              var v = o
              ;(o = y.pop()),
                !e.compositeRule && h
                  ? e.async
                    ? (o += ' throw new ValidationError([' + v + ']); ')
                    : (o += ' validate.errors = [' + v + ']; return false; ')
                  : (o +=
                      ' var err = ' +
                      v +
                      ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
                h && (o += ' if (false) { ')
            } else {
              if ('ignore' != e.opts.missingRefs)
                throw new e.MissingRefError(e.baseId, u, d)
              e.logger.warn(d), h && (o += ' if (true) { ')
            }
          } else if (p.inline) {
            var m = e.util.copy(e)
            m.level++
            var g = 'valid' + m.level
            ;(m.schema = p.schema),
              (m.schemaPath = ''),
              (m.errSchemaPath = u),
              (o +=
                ' ' + e.validate(m).replace(/validate\.schema/g, p.code) + ' '),
              h && (o += ' if (' + g + ') { ')
          } else
            (n = !0 === p.$async || (e.async && !1 !== p.$async)), (a = p.code)
        }
        if (a) {
          var y
          ;(y = y || []).push(o),
            (o = ''),
            e.opts.passContext
              ? (o += ' ' + a + '.call(this, ')
              : (o += ' ' + a + '( '),
            (o += ' ' + c + ", (dataPath || '')"),
            '""' != e.errorPath && (o += ' + ' + e.errorPath)
          var b = (o +=
            ' , ' +
            (s ? 'data' + (s - 1 || '') : 'parentData') +
            ' , ' +
            (s ? e.dataPathArr[s] : 'parentDataProperty') +
            ', rootData)  ')
          if (((o = y.pop()), n)) {
            if (!e.async)
              throw new Error('async schema referenced by sync schema')
            h && (o += ' var ' + f + '; '),
              (o += ' try { await ' + b + '; '),
              h && (o += ' ' + f + ' = true; '),
              (o +=
                ' } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; '),
              h && (o += ' ' + f + ' = false; '),
              (o += ' } '),
              h && (o += ' if (' + f + ') { ')
          } else
            (o +=
              ' if (!' +
              b +
              ') { if (vErrors === null) vErrors = ' +
              a +
              '.errors; else vErrors = vErrors.concat(' +
              a +
              '.errors); errors = vErrors.length; } '),
              h && (o += ' else { ')
        }
        return o
      },
      allOf: function(e, t, r) {
        var n = ' ',
          a = e.schema[t],
          o = e.schemaPath + e.util.getProperty(t),
          i = e.errSchemaPath + '/' + t,
          s = !e.opts.allErrors,
          u = e.util.copy(e),
          l = ''
        u.level++
        var h = 'valid' + u.level,
          c = u.baseId,
          f = !0,
          p = a
        if (p)
          for (var d, v = -1, m = p.length - 1; v < m; )
            (d = p[(v += 1)]),
              e.util.schemaHasRules(d, e.RULES.all) &&
                ((f = !1),
                (u.schema = d),
                (u.schemaPath = o + '[' + v + ']'),
                (u.errSchemaPath = i + '/' + v),
                (n += '  ' + e.validate(u) + ' '),
                (u.baseId = c),
                s && ((n += ' if (' + h + ') { '), (l += '}')))
        return (
          s && (n += f ? ' if (true) { ' : ' ' + l.slice(0, -1) + ' '),
          (n = e.util.cleanUpCode(n))
        )
      },
      anyOf: function(t, e, r) {
        var n = ' ',
          a = t.level,
          o = t.dataLevel,
          i = t.schema[e],
          s = t.schemaPath + t.util.getProperty(e),
          u = t.errSchemaPath + '/' + e,
          l = !t.opts.allErrors,
          h = 'data' + (o || ''),
          c = 'valid' + a,
          f = 'errs__' + a,
          p = t.util.copy(t),
          d = ''
        p.level++
        var v = 'valid' + p.level
        if (
          i.every(function(e) {
            return t.util.schemaHasRules(e, t.RULES.all)
          })
        ) {
          var m = p.baseId
          n += ' var ' + f + ' = errors; var ' + c + ' = false;  '
          var g = t.compositeRule
          t.compositeRule = p.compositeRule = !0
          var y = i
          if (y)
            for (var b, w = -1, _ = y.length - 1; w < _; )
              (b = y[(w += 1)]),
                (p.schema = b),
                (p.schemaPath = s + '[' + w + ']'),
                (p.errSchemaPath = u + '/' + w),
                (n += '  ' + t.validate(p) + ' '),
                (p.baseId = m),
                (n +=
                  ' ' + c + ' = ' + c + ' || ' + v + '; if (!' + c + ') { '),
                (d += '}')
          ;(t.compositeRule = p.compositeRule = g),
            (n += ' ' + d + ' if (!' + c + ') {   var err =   '),
            !1 !== t.createErrors
              ? ((n +=
                  " { keyword: 'anyOf' , dataPath: (dataPath || '') + " +
                  t.errorPath +
                  ' , schemaPath: ' +
                  t.util.toQuotedString(u) +
                  ' , params: {} '),
                !1 !== t.opts.messages &&
                  (n += " , message: 'should match some schema in anyOf' "),
                t.opts.verbose &&
                  (n +=
                    ' , schema: validate.schema' +
                    s +
                    ' , parentSchema: validate.schema' +
                    t.schemaPath +
                    ' , data: ' +
                    h +
                    ' '),
                (n += ' } '))
              : (n += ' {} '),
            (n +=
              ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
            !t.compositeRule &&
              l &&
              (t.async
                ? (n += ' throw new ValidationError(vErrors); ')
                : (n += ' validate.errors = vErrors; return false; ')),
            (n +=
              ' } else {  errors = ' +
              f +
              '; if (vErrors !== null) { if (' +
              f +
              ') vErrors.length = ' +
              f +
              '; else vErrors = null; } '),
            t.opts.allErrors && (n += ' } '),
            (n = t.util.cleanUpCode(n))
        } else l && (n += ' if (true) { ')
        return n
      },
      $comment: function(e, t, r) {
        var n = ' ',
          a = e.schema[t],
          o = e.errSchemaPath + '/' + t,
          i = (e.opts.allErrors, e.util.toQuotedString(a))
        return (
          !0 === e.opts.$comment
            ? (n += ' console.log(' + i + ');')
            : 'function' == typeof e.opts.$comment &&
              (n +=
                ' self._opts.$comment(' +
                i +
                ', ' +
                e.util.toQuotedString(o) +
                ', validate.root.schema);'),
          n
        )
      },
      const: function(e, t, r) {
        var n = ' ',
          a = e.level,
          o = e.dataLevel,
          i = e.schema[t],
          s = e.schemaPath + e.util.getProperty(t),
          u = e.errSchemaPath + '/' + t,
          l = !e.opts.allErrors,
          h = 'data' + (o || ''),
          c = 'valid' + a,
          f = e.opts.$data && i && i.$data
        f &&
          (n +=
            ' var schema' +
            a +
            ' = ' +
            e.util.getData(i.$data, o, e.dataPathArr) +
            '; '),
          f || (n += ' var schema' + a + ' = validate.schema' + s + ';'),
          (n +=
            'var ' +
            c +
            ' = equal(' +
            h +
            ', schema' +
            a +
            '); if (!' +
            c +
            ') {   ')
        var p = p || []
        p.push(n),
          (n = ''),
          !1 !== e.createErrors
            ? ((n +=
                " { keyword: 'const' , dataPath: (dataPath || '') + " +
                e.errorPath +
                ' , schemaPath: ' +
                e.util.toQuotedString(u) +
                ' , params: { allowedValue: schema' +
                a +
                ' } '),
              !1 !== e.opts.messages &&
                (n += " , message: 'should be equal to constant' "),
              e.opts.verbose &&
                (n +=
                  ' , schema: validate.schema' +
                  s +
                  ' , parentSchema: validate.schema' +
                  e.schemaPath +
                  ' , data: ' +
                  h +
                  ' '),
              (n += ' } '))
            : (n += ' {} ')
        var d = n
        return (
          (n = p.pop()),
          !e.compositeRule && l
            ? e.async
              ? (n += ' throw new ValidationError([' + d + ']); ')
              : (n += ' validate.errors = [' + d + ']; return false; ')
            : (n +=
                ' var err = ' +
                d +
                ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
          (n += ' }'),
          l && (n += ' else { '),
          n
        )
      },
      contains: function(e, t, r) {
        var n = ' ',
          a = e.level,
          o = e.dataLevel,
          i = e.schema[t],
          s = e.schemaPath + e.util.getProperty(t),
          u = e.errSchemaPath + '/' + t,
          l = !e.opts.allErrors,
          h = 'data' + (o || ''),
          c = 'valid' + a,
          f = 'errs__' + a,
          p = e.util.copy(e)
        p.level++
        var d = 'valid' + p.level,
          v = 'i' + a,
          m = (p.dataLevel = e.dataLevel + 1),
          g = 'data' + m,
          y = e.baseId,
          b = e.util.schemaHasRules(i, e.RULES.all)
        if (((n += 'var ' + f + ' = errors;var ' + c + ';'), b)) {
          var w = e.compositeRule
          ;(e.compositeRule = p.compositeRule = !0),
            (p.schema = i),
            (p.schemaPath = s),
            (p.errSchemaPath = u),
            (n +=
              ' var ' +
              d +
              ' = false; for (var ' +
              v +
              ' = 0; ' +
              v +
              ' < ' +
              h +
              '.length; ' +
              v +
              '++) { '),
            (p.errorPath = e.util.getPathExpr(
              e.errorPath,
              v,
              e.opts.jsonPointers,
              !0
            ))
          var _ = h + '[' + v + ']'
          p.dataPathArr[m] = v
          var E = e.validate(p)
          ;(p.baseId = y),
            e.util.varOccurences(E, g) < 2
              ? (n += ' ' + e.util.varReplace(E, g, _) + ' ')
              : (n += ' var ' + g + ' = ' + _ + '; ' + E + ' '),
            (n += ' if (' + d + ') break; }  '),
            (e.compositeRule = p.compositeRule = w),
            (n += '  if (!' + d + ') {')
        } else n += ' if (' + h + '.length == 0) {'
        var P = P || []
        P.push(n),
          (n = ''),
          !1 !== e.createErrors
            ? ((n +=
                " { keyword: 'contains' , dataPath: (dataPath || '') + " +
                e.errorPath +
                ' , schemaPath: ' +
                e.util.toQuotedString(u) +
                ' , params: {} '),
              !1 !== e.opts.messages &&
                (n += " , message: 'should contain a valid item' "),
              e.opts.verbose &&
                (n +=
                  ' , schema: validate.schema' +
                  s +
                  ' , parentSchema: validate.schema' +
                  e.schemaPath +
                  ' , data: ' +
                  h +
                  ' '),
              (n += ' } '))
            : (n += ' {} ')
        var S = n
        return (
          (n = P.pop()),
          !e.compositeRule && l
            ? e.async
              ? (n += ' throw new ValidationError([' + S + ']); ')
              : (n += ' validate.errors = [' + S + ']; return false; ')
            : (n +=
                ' var err = ' +
                S +
                ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
          (n += ' } else { '),
          b &&
            (n +=
              '  errors = ' +
              f +
              '; if (vErrors !== null) { if (' +
              f +
              ') vErrors.length = ' +
              f +
              '; else vErrors = null; } '),
          e.opts.allErrors && (n += ' } '),
          (n = e.util.cleanUpCode(n))
        )
      },
      dependencies: function(e, t, r) {
        var n = ' ',
          a = e.level,
          o = e.dataLevel,
          i = e.schema[t],
          s = e.schemaPath + e.util.getProperty(t),
          u = e.errSchemaPath + '/' + t,
          l = !e.opts.allErrors,
          h = 'data' + (o || ''),
          c = 'errs__' + a,
          f = e.util.copy(e),
          p = ''
        f.level++
        var d = 'valid' + f.level,
          v = {},
          m = {},
          g = e.opts.ownProperties
        for (_ in i) {
          var y = i[_],
            b = bn(y) ? m : v
          b[_] = y
        }
        n += 'var ' + c + ' = errors;'
        var w = e.errorPath
        for (var _ in ((n += 'var missing' + a + ';'), m))
          if ((b = m[_]).length) {
            if (
              ((n += ' if ( ' + h + e.util.getProperty(_) + ' !== undefined '),
              g &&
                (n +=
                  ' && Object.prototype.hasOwnProperty.call(' +
                  h +
                  ", '" +
                  e.util.escapeQuotes(_) +
                  "') "),
              l)
            ) {
              n += ' && ( '
              var E = b
              if (E)
                for (var P = -1, S = E.length - 1; P < S; )
                  (A = E[(P += 1)]),
                    P && (n += ' || '),
                    (n +=
                      ' ( ( ' +
                      (L = h + (C = e.util.getProperty(A))) +
                      ' === undefined '),
                    g &&
                      (n +=
                        ' || ! Object.prototype.hasOwnProperty.call(' +
                        h +
                        ", '" +
                        e.util.escapeQuotes(A) +
                        "') "),
                    (n +=
                      ') && (missing' +
                      a +
                      ' = ' +
                      e.util.toQuotedString(e.opts.jsonPointers ? A : C) +
                      ') ) ')
              n += ')) {  '
              var x = 'missing' + a,
                R = "' + " + x + " + '"
              e.opts._errorDataPathProperty &&
                (e.errorPath = e.opts.jsonPointers
                  ? e.util.getPathExpr(w, x, !0)
                  : w + ' + ' + x)
              var O = O || []
              O.push(n),
                (n = ''),
                !1 !== e.createErrors
                  ? ((n +=
                      " { keyword: 'dependencies' , dataPath: (dataPath || '') + " +
                      e.errorPath +
                      ' , schemaPath: ' +
                      e.util.toQuotedString(u) +
                      " , params: { property: '" +
                      e.util.escapeQuotes(_) +
                      "', missingProperty: '" +
                      R +
                      "', depsCount: " +
                      b.length +
                      ", deps: '" +
                      e.util.escapeQuotes(1 == b.length ? b[0] : b.join(', ')) +
                      "' } "),
                    !1 !== e.opts.messages &&
                      ((n += " , message: 'should have "),
                      1 == b.length
                        ? (n += 'property ' + e.util.escapeQuotes(b[0]))
                        : (n +=
                            'properties ' + e.util.escapeQuotes(b.join(', '))),
                      (n +=
                        ' when property ' +
                        e.util.escapeQuotes(_) +
                        " is present' ")),
                    e.opts.verbose &&
                      (n +=
                        ' , schema: validate.schema' +
                        s +
                        ' , parentSchema: validate.schema' +
                        e.schemaPath +
                        ' , data: ' +
                        h +
                        ' '),
                    (n += ' } '))
                  : (n += ' {} ')
              var k = n
              ;(n = O.pop()),
                !e.compositeRule && l
                  ? e.async
                    ? (n += ' throw new ValidationError([' + k + ']); ')
                    : (n += ' validate.errors = [' + k + ']; return false; ')
                  : (n +=
                      ' var err = ' +
                      k +
                      ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ')
            } else {
              n += ' ) { '
              var T = b
              if (T)
                for (var A, j = -1, I = T.length - 1; j < I; ) {
                  A = T[(j += 1)]
                  var C = e.util.getProperty(A),
                    L = ((R = e.util.escapeQuotes(A)), h + C)
                  e.opts._errorDataPathProperty &&
                    (e.errorPath = e.util.getPath(w, A, e.opts.jsonPointers)),
                    (n += ' if ( ' + L + ' === undefined '),
                    g &&
                      (n +=
                        ' || ! Object.prototype.hasOwnProperty.call(' +
                        h +
                        ", '" +
                        e.util.escapeQuotes(A) +
                        "') "),
                    (n += ') {  var err =   '),
                    !1 !== e.createErrors
                      ? ((n +=
                          " { keyword: 'dependencies' , dataPath: (dataPath || '') + " +
                          e.errorPath +
                          ' , schemaPath: ' +
                          e.util.toQuotedString(u) +
                          " , params: { property: '" +
                          e.util.escapeQuotes(_) +
                          "', missingProperty: '" +
                          R +
                          "', depsCount: " +
                          b.length +
                          ", deps: '" +
                          e.util.escapeQuotes(
                            1 == b.length ? b[0] : b.join(', ')
                          ) +
                          "' } "),
                        !1 !== e.opts.messages &&
                          ((n += " , message: 'should have "),
                          1 == b.length
                            ? (n += 'property ' + e.util.escapeQuotes(b[0]))
                            : (n +=
                                'properties ' +
                                e.util.escapeQuotes(b.join(', '))),
                          (n +=
                            ' when property ' +
                            e.util.escapeQuotes(_) +
                            " is present' ")),
                        e.opts.verbose &&
                          (n +=
                            ' , schema: validate.schema' +
                            s +
                            ' , parentSchema: validate.schema' +
                            e.schemaPath +
                            ' , data: ' +
                            h +
                            ' '),
                        (n += ' } '))
                      : (n += ' {} '),
                    (n +=
                      ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ')
                }
            }
            ;(n += ' }   '), l && ((p += '}'), (n += ' else { '))
          }
        e.errorPath = w
        var D = f.baseId
        for (var _ in v)
          (y = v[_]),
            e.util.schemaHasRules(y, e.RULES.all) &&
              ((n +=
                ' ' +
                d +
                ' = true; if ( ' +
                h +
                e.util.getProperty(_) +
                ' !== undefined '),
              g &&
                (n +=
                  ' && Object.prototype.hasOwnProperty.call(' +
                  h +
                  ", '" +
                  e.util.escapeQuotes(_) +
                  "') "),
              (n += ') { '),
              (f.schema = y),
              (f.schemaPath = s + e.util.getProperty(_)),
              (f.errSchemaPath = u + '/' + e.util.escapeFragment(_)),
              (n += '  ' + e.validate(f) + ' '),
              (f.baseId = D),
              (n += ' }  '),
              l && ((n += ' if (' + d + ') { '), (p += '}')))
        return (
          l && (n += '   ' + p + ' if (' + c + ' == errors) {'),
          (n = e.util.cleanUpCode(n))
        )
      },
      enum: function(e, t, r) {
        var n = ' ',
          a = e.level,
          o = e.dataLevel,
          i = e.schema[t],
          s = e.schemaPath + e.util.getProperty(t),
          u = e.errSchemaPath + '/' + t,
          l = !e.opts.allErrors,
          h = 'data' + (o || ''),
          c = 'valid' + a,
          f = e.opts.$data && i && i.$data
        f &&
          (n +=
            ' var schema' +
            a +
            ' = ' +
            e.util.getData(i.$data, o, e.dataPathArr) +
            '; ')
        var p = 'i' + a,
          d = 'schema' + a
        f || (n += ' var ' + d + ' = validate.schema' + s + ';'),
          (n += 'var ' + c + ';'),
          f &&
            (n +=
              ' if (schema' +
              a +
              ' === undefined) ' +
              c +
              ' = true; else if (!Array.isArray(schema' +
              a +
              ')) ' +
              c +
              ' = false; else {'),
          (n +=
            c +
            ' = false;for (var ' +
            p +
            '=0; ' +
            p +
            '<' +
            d +
            '.length; ' +
            p +
            '++) if (equal(' +
            h +
            ', ' +
            d +
            '[' +
            p +
            '])) { ' +
            c +
            ' = true; break; }'),
          f && (n += '  }  '),
          (n += ' if (!' + c + ') {   ')
        var v = v || []
        v.push(n),
          (n = ''),
          !1 !== e.createErrors
            ? ((n +=
                " { keyword: 'enum' , dataPath: (dataPath || '') + " +
                e.errorPath +
                ' , schemaPath: ' +
                e.util.toQuotedString(u) +
                ' , params: { allowedValues: schema' +
                a +
                ' } '),
              !1 !== e.opts.messages &&
                (n +=
                  " , message: 'should be equal to one of the allowed values' "),
              e.opts.verbose &&
                (n +=
                  ' , schema: validate.schema' +
                  s +
                  ' , parentSchema: validate.schema' +
                  e.schemaPath +
                  ' , data: ' +
                  h +
                  ' '),
              (n += ' } '))
            : (n += ' {} ')
        var m = n
        return (
          (n = v.pop()),
          !e.compositeRule && l
            ? e.async
              ? (n += ' throw new ValidationError([' + m + ']); ')
              : (n += ' validate.errors = [' + m + ']; return false; ')
            : (n +=
                ' var err = ' +
                m +
                ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
          (n += ' }'),
          l && (n += ' else { '),
          n
        )
      },
      format: function(e, t, r) {
        var n = ' ',
          a = e.level,
          o = e.dataLevel,
          i = e.schema[t],
          s = e.schemaPath + e.util.getProperty(t),
          u = e.errSchemaPath + '/' + t,
          l = !e.opts.allErrors,
          h = 'data' + (o || '')
        if (!1 === e.opts.format) return l && (n += ' if (true) { '), n
        var c,
          f = e.opts.$data && i && i.$data
        f
          ? ((n +=
              ' var schema' +
              a +
              ' = ' +
              e.util.getData(i.$data, o, e.dataPathArr) +
              '; '),
            (c = 'schema' + a))
          : (c = i)
        var p = e.opts.unknownFormats,
          d = bn(p)
        if (f)
          (n +=
            ' var ' +
            (v = 'format' + a) +
            ' = formats[' +
            c +
            ']; var ' +
            (m = 'isObject' + a) +
            ' = typeof ' +
            v +
            " == 'object' && !(" +
            v +
            ' instanceof RegExp) && ' +
            v +
            '.validate; var ' +
            (g = 'formatType' + a) +
            ' = ' +
            m +
            ' && ' +
            v +
            ".type || 'string'; if (" +
            m +
            ') { '),
            e.async && (n += ' var async' + a + ' = ' + v + '.async; '),
            (n += ' ' + v + ' = ' + v + '.validate; } if (  '),
            f &&
              (n +=
                ' (' +
                c +
                ' !== undefined && typeof ' +
                c +
                " != 'string') || "),
            (n += ' ('),
            'ignore' != p &&
              ((n += ' (' + c + ' && !' + v + ' '),
              d &&
                (n +=
                  ' && self._opts.unknownFormats.indexOf(' + c + ') == -1 '),
              (n += ') || ')),
            (n +=
              ' (' +
              v +
              ' && ' +
              g +
              " == '" +
              r +
              "' && !(typeof " +
              v +
              " == 'function' ? "),
            e.async
              ? (n +=
                  ' (async' +
                  a +
                  ' ? await ' +
                  v +
                  '(' +
                  h +
                  ') : ' +
                  v +
                  '(' +
                  h +
                  ')) ')
              : (n += ' ' + v + '(' + h + ') '),
            (n += ' : ' + v + '.test(' + h + '))))) {')
        else {
          var v
          if (!(v = e.formats[i])) {
            if ('ignore' == p)
              return (
                e.logger.warn(
                  'unknown format "' +
                    i +
                    '" ignored in schema at path "' +
                    e.errSchemaPath +
                    '"'
                ),
                l && (n += ' if (true) { '),
                n
              )
            if (d && 0 <= p.indexOf(i)) return l && (n += ' if (true) { '), n
            throw new Error(
              'unknown format "' +
                i +
                '" is used in schema at path "' +
                e.errSchemaPath +
                '"'
            )
          }
          var m,
            g =
              ((m =
                'object' == pe(v) && !(v instanceof RegExp) && v.validate) &&
                v.type) ||
              'string'
          if (m) {
            var y = !0 === v.async
            v = v.validate
          }
          if (g != r) return l && (n += ' if (true) { '), n
          if (y) {
            if (!e.async) throw new Error('async format in sync schema')
            n +=
              ' if (!(await ' +
              (b = 'formats' + e.util.getProperty(i) + '.validate') +
              '(' +
              h +
              '))) { '
          } else {
            n += ' if (! '
            var b = 'formats' + e.util.getProperty(i)
            m && (b += '.validate'),
              (n +=
                'function' == typeof v
                  ? ' ' + b + '(' + h + ') '
                  : ' ' + b + '.test(' + h + ') '),
              (n += ') { ')
          }
        }
        var w = w || []
        w.push(n),
          (n = ''),
          !1 !== e.createErrors
            ? ((n +=
                " { keyword: 'format' , dataPath: (dataPath || '') + " +
                e.errorPath +
                ' , schemaPath: ' +
                e.util.toQuotedString(u) +
                ' , params: { format:  '),
              (n += f ? '' + c : '' + e.util.toQuotedString(i)),
              (n += '  } '),
              !1 !== e.opts.messages &&
                ((n += ' , message: \'should match format "'),
                (n += f ? "' + " + c + " + '" : '' + e.util.escapeQuotes(i)),
                (n += '"\' ')),
              e.opts.verbose &&
                ((n += ' , schema:  '),
                (n += f
                  ? 'validate.schema' + s
                  : '' + e.util.toQuotedString(i)),
                (n +=
                  '         , parentSchema: validate.schema' +
                  e.schemaPath +
                  ' , data: ' +
                  h +
                  ' ')),
              (n += ' } '))
            : (n += ' {} ')
        var _ = n
        return (
          (n = w.pop()),
          !e.compositeRule && l
            ? e.async
              ? (n += ' throw new ValidationError([' + _ + ']); ')
              : (n += ' validate.errors = [' + _ + ']; return false; ')
            : (n +=
                ' var err = ' +
                _ +
                ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
          (n += ' } '),
          l && (n += ' else { '),
          n
        )
      },
      if: function(e, t, r) {
        var n = ' ',
          a = e.level,
          o = e.dataLevel,
          i = e.schema[t],
          s = e.schemaPath + e.util.getProperty(t),
          u = e.errSchemaPath + '/' + t,
          l = !e.opts.allErrors,
          h = 'data' + (o || ''),
          c = 'valid' + a,
          f = 'errs__' + a,
          p = e.util.copy(e)
        p.level++
        var d = 'valid' + p.level,
          v = e.schema.then,
          m = e.schema.else,
          g = void 0 !== v && e.util.schemaHasRules(v, e.RULES.all),
          y = void 0 !== m && e.util.schemaHasRules(m, e.RULES.all),
          b = p.baseId
        if (g || y) {
          var w
          ;(p.createErrors = !1),
            (p.schema = i),
            (p.schemaPath = s),
            (p.errSchemaPath = u),
            (n += ' var ' + f + ' = errors; var ' + c + ' = true;  ')
          var _ = e.compositeRule
          ;(e.compositeRule = p.compositeRule = !0),
            (n += '  ' + e.validate(p) + ' '),
            (p.baseId = b),
            (p.createErrors = !0),
            (n +=
              '  errors = ' +
              f +
              '; if (vErrors !== null) { if (' +
              f +
              ') vErrors.length = ' +
              f +
              '; else vErrors = null; }  '),
            (e.compositeRule = p.compositeRule = _),
            g
              ? ((n += ' if (' + d + ') {  '),
                (p.schema = e.schema.then),
                (p.schemaPath = e.schemaPath + '.then'),
                (p.errSchemaPath = e.errSchemaPath + '/then'),
                (n += '  ' + e.validate(p) + ' '),
                (p.baseId = b),
                (n += ' ' + c + ' = ' + d + '; '),
                g && y
                  ? (n += ' var ' + (w = 'ifClause' + a) + " = 'then'; ")
                  : (w = "'then'"),
                (n += ' } '),
                y && (n += ' else { '))
              : (n += ' if (!' + d + ') { '),
            y &&
              ((p.schema = e.schema.else),
              (p.schemaPath = e.schemaPath + '.else'),
              (p.errSchemaPath = e.errSchemaPath + '/else'),
              (n += '  ' + e.validate(p) + ' '),
              (p.baseId = b),
              (n += ' ' + c + ' = ' + d + '; '),
              g && y
                ? (n += ' var ' + (w = 'ifClause' + a) + " = 'else'; ")
                : (w = "'else'"),
              (n += ' } ')),
            (n += ' if (!' + c + ') {   var err =   '),
            !1 !== e.createErrors
              ? ((n +=
                  " { keyword: 'if' , dataPath: (dataPath || '') + " +
                  e.errorPath +
                  ' , schemaPath: ' +
                  e.util.toQuotedString(u) +
                  ' , params: { failingKeyword: ' +
                  w +
                  ' } '),
                !1 !== e.opts.messages &&
                  (n +=
                    " , message: 'should match \"' + " + w + " + '\" schema' "),
                e.opts.verbose &&
                  (n +=
                    ' , schema: validate.schema' +
                    s +
                    ' , parentSchema: validate.schema' +
                    e.schemaPath +
                    ' , data: ' +
                    h +
                    ' '),
                (n += ' } '))
              : (n += ' {} '),
            (n +=
              ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
            !e.compositeRule &&
              l &&
              (e.async
                ? (n += ' throw new ValidationError(vErrors); ')
                : (n += ' validate.errors = vErrors; return false; ')),
            (n += ' }   '),
            l && (n += ' else { '),
            (n = e.util.cleanUpCode(n))
        } else l && (n += ' if (true) { ')
        return n
      },
      items: function(e, t, r) {
        var n = ' ',
          a = e.level,
          o = e.dataLevel,
          i = e.schema[t],
          s = e.schemaPath + e.util.getProperty(t),
          u = e.errSchemaPath + '/' + t,
          l = !e.opts.allErrors,
          h = 'data' + (o || ''),
          c = 'valid' + a,
          f = 'errs__' + a,
          p = e.util.copy(e),
          d = ''
        p.level++
        var v = 'valid' + p.level,
          m = 'i' + a,
          g = (p.dataLevel = e.dataLevel + 1),
          y = 'data' + g,
          b = e.baseId
        if (((n += 'var ' + f + ' = errors;var ' + c + ';'), bn(i))) {
          var w = e.schema.additionalItems
          if (!1 === w) {
            n += ' ' + c + ' = ' + h + '.length <= ' + i.length + '; '
            var _ = u
            ;(u = e.errSchemaPath + '/additionalItems'),
              (n += '  if (!' + c + ') {   ')
            var E = E || []
            E.push(n),
              (n = ''),
              !1 !== e.createErrors
                ? ((n +=
                    " { keyword: 'additionalItems' , dataPath: (dataPath || '') + " +
                    e.errorPath +
                    ' , schemaPath: ' +
                    e.util.toQuotedString(u) +
                    ' , params: { limit: ' +
                    i.length +
                    ' } '),
                  !1 !== e.opts.messages &&
                    (n +=
                      " , message: 'should NOT have more than " +
                      i.length +
                      " items' "),
                  e.opts.verbose &&
                    (n +=
                      ' , schema: false , parentSchema: validate.schema' +
                      e.schemaPath +
                      ' , data: ' +
                      h +
                      ' '),
                  (n += ' } '))
                : (n += ' {} ')
            var P = n
            ;(n = E.pop()),
              !e.compositeRule && l
                ? e.async
                  ? (n += ' throw new ValidationError([' + P + ']); ')
                  : (n += ' validate.errors = [' + P + ']; return false; ')
                : (n +=
                    ' var err = ' +
                    P +
                    ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
              (n += ' } '),
              (u = _),
              l && ((d += '}'), (n += ' else { '))
          }
          var S = i
          if (S)
            for (var x, R = -1, O = S.length - 1; R < O; )
              if (((x = S[(R += 1)]), e.util.schemaHasRules(x, e.RULES.all))) {
                n += ' ' + v + ' = true; if (' + h + '.length > ' + R + ') { '
                var k = h + '[' + R + ']'
                ;(p.schema = x),
                  (p.schemaPath = s + '[' + R + ']'),
                  (p.errSchemaPath = u + '/' + R),
                  (p.errorPath = e.util.getPathExpr(
                    e.errorPath,
                    R,
                    e.opts.jsonPointers,
                    !0
                  )),
                  (p.dataPathArr[g] = R)
                var T = e.validate(p)
                ;(p.baseId = b),
                  e.util.varOccurences(T, y) < 2
                    ? (n += ' ' + e.util.varReplace(T, y, k) + ' ')
                    : (n += ' var ' + y + ' = ' + k + '; ' + T + ' '),
                  (n += ' }  '),
                  l && ((n += ' if (' + v + ') { '), (d += '}'))
              }
          'object' == pe(w) &&
            e.util.schemaHasRules(w, e.RULES.all) &&
            ((p.schema = w),
            (p.schemaPath = e.schemaPath + '.additionalItems'),
            (p.errSchemaPath = e.errSchemaPath + '/additionalItems'),
            (n +=
              ' ' +
              v +
              ' = true; if (' +
              h +
              '.length > ' +
              i.length +
              ') {  for (var ' +
              m +
              ' = ' +
              i.length +
              '; ' +
              m +
              ' < ' +
              h +
              '.length; ' +
              m +
              '++) { '),
            (p.errorPath = e.util.getPathExpr(
              e.errorPath,
              m,
              e.opts.jsonPointers,
              !0
            )),
            (k = h + '[' + m + ']'),
            (p.dataPathArr[g] = m),
            (T = e.validate(p)),
            (p.baseId = b),
            e.util.varOccurences(T, y) < 2
              ? (n += ' ' + e.util.varReplace(T, y, k) + ' ')
              : (n += ' var ' + y + ' = ' + k + '; ' + T + ' '),
            l && (n += ' if (!' + v + ') break; '),
            (n += ' } }  '),
            l && ((n += ' if (' + v + ') { '), (d += '}')))
        } else
          e.util.schemaHasRules(i, e.RULES.all) &&
            ((p.schema = i),
            (p.schemaPath = s),
            (p.errSchemaPath = u),
            (n +=
              '  for (var ' +
              m +
              ' = 0; ' +
              m +
              ' < ' +
              h +
              '.length; ' +
              m +
              '++) { '),
            (p.errorPath = e.util.getPathExpr(
              e.errorPath,
              m,
              e.opts.jsonPointers,
              !0
            )),
            (k = h + '[' + m + ']'),
            (p.dataPathArr[g] = m),
            (T = e.validate(p)),
            (p.baseId = b),
            e.util.varOccurences(T, y) < 2
              ? (n += ' ' + e.util.varReplace(T, y, k) + ' ')
              : (n += ' var ' + y + ' = ' + k + '; ' + T + ' '),
            l && (n += ' if (!' + v + ') break; '),
            (n += ' }'))
        return (
          l && (n += ' ' + d + ' if (' + f + ' == errors) {'),
          (n = e.util.cleanUpCode(n))
        )
      },
      maximum: of,
      minimum: of,
      maxItems: sf,
      minItems: sf,
      maxLength: uf,
      minLength: uf,
      maxProperties: lf,
      minProperties: lf,
      multipleOf: function(e, t, r) {
        var n,
          a = ' ',
          o = e.level,
          i = e.dataLevel,
          s = e.schema[t],
          u = e.schemaPath + e.util.getProperty(t),
          l = e.errSchemaPath + '/' + t,
          h = !e.opts.allErrors,
          c = 'data' + (i || ''),
          f = e.opts.$data && s && s.$data
        f
          ? ((a +=
              ' var schema' +
              o +
              ' = ' +
              e.util.getData(s.$data, i, e.dataPathArr) +
              '; '),
            (n = 'schema' + o))
          : (n = s),
          (a += 'var division' + o + ';if ('),
          f &&
            (a +=
              ' ' + n + ' !== undefined && ( typeof ' + n + " != 'number' || "),
          (a += ' (division' + o + ' = ' + c + ' / ' + n + ', '),
          e.opts.multipleOfPrecision
            ? (a +=
                ' Math.abs(Math.round(division' +
                o +
                ') - division' +
                o +
                ') > 1e-' +
                e.opts.multipleOfPrecision +
                ' ')
            : (a += ' division' + o + ' !== parseInt(division' + o + ') '),
          (a += ' ) '),
          f && (a += '  )  '),
          (a += ' ) {   ')
        var p = p || []
        p.push(a),
          (a = ''),
          !1 !== e.createErrors
            ? ((a +=
                " { keyword: 'multipleOf' , dataPath: (dataPath || '') + " +
                e.errorPath +
                ' , schemaPath: ' +
                e.util.toQuotedString(l) +
                ' , params: { multipleOf: ' +
                n +
                ' } '),
              !1 !== e.opts.messages &&
                ((a += " , message: 'should be multiple of "),
                (a += f ? "' + " + n : n + "'")),
              e.opts.verbose &&
                ((a += ' , schema:  '),
                (a += f ? 'validate.schema' + u : '' + s),
                (a +=
                  '         , parentSchema: validate.schema' +
                  e.schemaPath +
                  ' , data: ' +
                  c +
                  ' ')),
              (a += ' } '))
            : (a += ' {} ')
        var d = a
        return (
          (a = p.pop()),
          !e.compositeRule && h
            ? e.async
              ? (a += ' throw new ValidationError([' + d + ']); ')
              : (a += ' validate.errors = [' + d + ']; return false; ')
            : (a +=
                ' var err = ' +
                d +
                ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
          (a += '} '),
          h && (a += ' else { '),
          a
        )
      },
      not: function(e, t, r) {
        var n = ' ',
          a = e.level,
          o = e.dataLevel,
          i = e.schema[t],
          s = e.schemaPath + e.util.getProperty(t),
          u = e.errSchemaPath + '/' + t,
          l = !e.opts.allErrors,
          h = 'data' + (o || ''),
          c = 'errs__' + a,
          f = e.util.copy(e)
        f.level++
        var p = 'valid' + f.level
        if (e.util.schemaHasRules(i, e.RULES.all)) {
          ;(f.schema = i),
            (f.schemaPath = s),
            (f.errSchemaPath = u),
            (n += ' var ' + c + ' = errors;  ')
          var d,
            v = e.compositeRule
          ;(e.compositeRule = f.compositeRule = !0),
            (f.createErrors = !1),
            f.opts.allErrors &&
              ((d = f.opts.allErrors), (f.opts.allErrors = !1)),
            (n += ' ' + e.validate(f) + ' '),
            (f.createErrors = !0),
            d && (f.opts.allErrors = d),
            (e.compositeRule = f.compositeRule = v),
            (n += ' if (' + p + ') {   ')
          var m = m || []
          m.push(n),
            (n = ''),
            !1 !== e.createErrors
              ? ((n +=
                  " { keyword: 'not' , dataPath: (dataPath || '') + " +
                  e.errorPath +
                  ' , schemaPath: ' +
                  e.util.toQuotedString(u) +
                  ' , params: {} '),
                !1 !== e.opts.messages &&
                  (n += " , message: 'should NOT be valid' "),
                e.opts.verbose &&
                  (n +=
                    ' , schema: validate.schema' +
                    s +
                    ' , parentSchema: validate.schema' +
                    e.schemaPath +
                    ' , data: ' +
                    h +
                    ' '),
                (n += ' } '))
              : (n += ' {} ')
          var g = n
          ;(n = m.pop()),
            !e.compositeRule && l
              ? e.async
                ? (n += ' throw new ValidationError([' + g + ']); ')
                : (n += ' validate.errors = [' + g + ']; return false; ')
              : (n +=
                  ' var err = ' +
                  g +
                  ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
            (n +=
              ' } else {  errors = ' +
              c +
              '; if (vErrors !== null) { if (' +
              c +
              ') vErrors.length = ' +
              c +
              '; else vErrors = null; } '),
            e.opts.allErrors && (n += ' } ')
        } else
          (n += '  var err =   '),
            !1 !== e.createErrors
              ? ((n +=
                  " { keyword: 'not' , dataPath: (dataPath || '') + " +
                  e.errorPath +
                  ' , schemaPath: ' +
                  e.util.toQuotedString(u) +
                  ' , params: {} '),
                !1 !== e.opts.messages &&
                  (n += " , message: 'should NOT be valid' "),
                e.opts.verbose &&
                  (n +=
                    ' , schema: validate.schema' +
                    s +
                    ' , parentSchema: validate.schema' +
                    e.schemaPath +
                    ' , data: ' +
                    h +
                    ' '),
                (n += ' } '))
              : (n += ' {} '),
            (n +=
              ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
            l && (n += ' if (false) { ')
        return n
      },
      oneOf: function(e, t, r) {
        var n = ' ',
          a = e.level,
          o = e.dataLevel,
          i = e.schema[t],
          s = e.schemaPath + e.util.getProperty(t),
          u = e.errSchemaPath + '/' + t,
          l = !e.opts.allErrors,
          h = 'data' + (o || ''),
          c = 'valid' + a,
          f = 'errs__' + a,
          p = e.util.copy(e),
          d = ''
        p.level++
        var v = 'valid' + p.level,
          m = p.baseId,
          g = 'prevValid' + a,
          y = 'passingSchemas' + a
        n +=
          'var ' +
          f +
          ' = errors , ' +
          g +
          ' = false , ' +
          c +
          ' = false , ' +
          y +
          ' = null; '
        var b = e.compositeRule
        e.compositeRule = p.compositeRule = !0
        var w = i
        if (w)
          for (var _, E = -1, P = w.length - 1; E < P; )
            (_ = w[(E += 1)]),
              e.util.schemaHasRules(_, e.RULES.all)
                ? ((p.schema = _),
                  (p.schemaPath = s + '[' + E + ']'),
                  (p.errSchemaPath = u + '/' + E),
                  (n += '  ' + e.validate(p) + ' '),
                  (p.baseId = m))
                : (n += ' var ' + v + ' = true; '),
              E &&
                ((n +=
                  ' if (' +
                  v +
                  ' && ' +
                  g +
                  ') { ' +
                  c +
                  ' = false; ' +
                  y +
                  ' = [' +
                  y +
                  ', ' +
                  E +
                  ']; } else { '),
                (d += '}')),
              (n +=
                ' if (' +
                v +
                ') { ' +
                c +
                ' = ' +
                g +
                ' = true; ' +
                y +
                ' = ' +
                E +
                '; }')
        return (
          (e.compositeRule = p.compositeRule = b),
          (n += d + 'if (!' + c + ') {   var err =   '),
          !1 !== e.createErrors
            ? ((n +=
                " { keyword: 'oneOf' , dataPath: (dataPath || '') + " +
                e.errorPath +
                ' , schemaPath: ' +
                e.util.toQuotedString(u) +
                ' , params: { passingSchemas: ' +
                y +
                ' } '),
              !1 !== e.opts.messages &&
                (n +=
                  " , message: 'should match exactly one schema in oneOf' "),
              e.opts.verbose &&
                (n +=
                  ' , schema: validate.schema' +
                  s +
                  ' , parentSchema: validate.schema' +
                  e.schemaPath +
                  ' , data: ' +
                  h +
                  ' '),
              (n += ' } '))
            : (n += ' {} '),
          (n +=
            ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
          !e.compositeRule &&
            l &&
            (e.async
              ? (n += ' throw new ValidationError(vErrors); ')
              : (n += ' validate.errors = vErrors; return false; ')),
          (n +=
            '} else {  errors = ' +
            f +
            '; if (vErrors !== null) { if (' +
            f +
            ') vErrors.length = ' +
            f +
            '; else vErrors = null; }'),
          e.opts.allErrors && (n += ' } '),
          n
        )
      },
      pattern: function(e, t, r) {
        var n,
          a = ' ',
          o = e.level,
          i = e.dataLevel,
          s = e.schema[t],
          u = e.schemaPath + e.util.getProperty(t),
          l = e.errSchemaPath + '/' + t,
          h = !e.opts.allErrors,
          c = 'data' + (i || ''),
          f = e.opts.$data && s && s.$data
        f
          ? ((a +=
              ' var schema' +
              o +
              ' = ' +
              e.util.getData(s.$data, i, e.dataPathArr) +
              '; '),
            (n = 'schema' + o))
          : (n = s),
          (a += 'if ( '),
          f &&
            (a +=
              ' (' + n + ' !== undefined && typeof ' + n + " != 'string') || "),
          (a +=
            ' !' +
            (f ? '(new RegExp(' + n + '))' : e.usePattern(s)) +
            '.test(' +
            c +
            ') ) {   ')
        var p = p || []
        p.push(a),
          (a = ''),
          !1 !== e.createErrors
            ? ((a +=
                " { keyword: 'pattern' , dataPath: (dataPath || '') + " +
                e.errorPath +
                ' , schemaPath: ' +
                e.util.toQuotedString(l) +
                ' , params: { pattern:  '),
              (a += f ? '' + n : '' + e.util.toQuotedString(s)),
              (a += '  } '),
              !1 !== e.opts.messages &&
                ((a += ' , message: \'should match pattern "'),
                (a += f ? "' + " + n + " + '" : '' + e.util.escapeQuotes(s)),
                (a += '"\' ')),
              e.opts.verbose &&
                ((a += ' , schema:  '),
                (a += f
                  ? 'validate.schema' + u
                  : '' + e.util.toQuotedString(s)),
                (a +=
                  '         , parentSchema: validate.schema' +
                  e.schemaPath +
                  ' , data: ' +
                  c +
                  ' ')),
              (a += ' } '))
            : (a += ' {} ')
        var d = a
        return (
          (a = p.pop()),
          !e.compositeRule && h
            ? e.async
              ? (a += ' throw new ValidationError([' + d + ']); ')
              : (a += ' validate.errors = [' + d + ']; return false; ')
            : (a +=
                ' var err = ' +
                d +
                ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
          (a += '} '),
          h && (a += ' else { '),
          a
        )
      },
      properties: function(e, t, r) {
        var n = ' ',
          a = e.level,
          o = e.dataLevel,
          i = e.schema[t],
          s = e.schemaPath + e.util.getProperty(t),
          u = e.errSchemaPath + '/' + t,
          l = !e.opts.allErrors,
          h = 'data' + (o || ''),
          c = 'errs__' + a,
          f = e.util.copy(e),
          p = ''
        f.level++
        var d = 'valid' + f.level,
          v = 'key' + a,
          m = 'idx' + a,
          g = (f.dataLevel = e.dataLevel + 1),
          y = 'data' + g,
          b = 'dataProperties' + a,
          w = li(i || {}),
          _ = e.schema.patternProperties || {},
          E = li(_),
          P = e.schema.additionalProperties,
          S = w.length || E.length,
          x = !1 === P,
          R = 'object' == pe(P) && li(P).length,
          O = e.opts.removeAdditional,
          k = x || R || O,
          T = e.opts.ownProperties,
          A = e.baseId,
          j = e.schema.required
        if (j && (!e.opts.$data || !j.$data) && j.length < e.opts.loopRequired)
          var I = e.util.toHash(j)
        if (
          ((n += 'var ' + c + ' = errors;var ' + d + ' = true;'),
          T && (n += ' var ' + b + ' = undefined;'),
          k)
        ) {
          if (
            ((n += T
              ? ' ' +
                b +
                ' = ' +
                b +
                ' || Object.keys(' +
                h +
                '); for (var ' +
                m +
                '=0; ' +
                m +
                '<' +
                b +
                '.length; ' +
                m +
                '++) { var ' +
                v +
                ' = ' +
                b +
                '[' +
                m +
                ']; '
              : ' for (var ' + v + ' in ' + h + ') { '),
            S)
          ) {
            if (((n += ' var isAdditional' + a + ' = !(false '), w.length))
              if (8 < w.length)
                n += ' || validate.schema' + s + '.hasOwnProperty(' + v + ') '
              else {
                var C = w
                if (C)
                  for (var L = -1, D = C.length - 1; L < D; )
                    (K = C[(L += 1)]),
                      (n +=
                        ' || ' + v + ' == ' + e.util.toQuotedString(K) + ' ')
              }
            if (E.length) {
              var F = E
              if (F)
                for (var M = -1, $ = F.length - 1; M < $; )
                  (ae = F[(M += 1)]),
                    (n += ' || ' + e.usePattern(ae) + '.test(' + v + ') ')
            }
            n += ' ); if (isAdditional' + a + ') { '
          }
          if ('all' == O) n += ' delete ' + h + '[' + v + ']; '
          else {
            var U = e.errorPath,
              N = "' + " + v + " + '"
            if (
              (e.opts._errorDataPathProperty &&
                (e.errorPath = e.util.getPathExpr(
                  e.errorPath,
                  v,
                  e.opts.jsonPointers
                )),
              x)
            )
              if (O) n += ' delete ' + h + '[' + v + ']; '
              else {
                n += ' ' + d + ' = false; '
                var z = u
                ;(u = e.errSchemaPath + '/additionalProperties'),
                  (te = te || []).push(n),
                  (n = ''),
                  !1 !== e.createErrors
                    ? ((n +=
                        " { keyword: 'additionalProperties' , dataPath: (dataPath || '') + " +
                        e.errorPath +
                        ' , schemaPath: ' +
                        e.util.toQuotedString(u) +
                        " , params: { additionalProperty: '" +
                        N +
                        "' } "),
                      !1 !== e.opts.messages &&
                        ((n += " , message: '"),
                        e.opts._errorDataPathProperty
                          ? (n += 'is an invalid additional property')
                          : (n += 'should NOT have additional properties'),
                        (n += "' ")),
                      e.opts.verbose &&
                        (n +=
                          ' , schema: false , parentSchema: validate.schema' +
                          e.schemaPath +
                          ' , data: ' +
                          h +
                          ' '),
                      (n += ' } '))
                    : (n += ' {} ')
                var q = n
                ;(n = te.pop()),
                  !e.compositeRule && l
                    ? e.async
                      ? (n += ' throw new ValidationError([' + q + ']); ')
                      : (n += ' validate.errors = [' + q + ']; return false; ')
                    : (n +=
                        ' var err = ' +
                        q +
                        ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
                  (u = z),
                  l && (n += ' break; ')
              }
            else if (R)
              if ('failing' == O) {
                n += ' var ' + c + ' = errors;  '
                var B = e.compositeRule
                ;(e.compositeRule = f.compositeRule = !0),
                  (f.schema = P),
                  (f.schemaPath = e.schemaPath + '.additionalProperties'),
                  (f.errSchemaPath = e.errSchemaPath + '/additionalProperties'),
                  (f.errorPath = e.opts._errorDataPathProperty
                    ? e.errorPath
                    : e.util.getPathExpr(e.errorPath, v, e.opts.jsonPointers))
                var H = h + '[' + v + ']'
                f.dataPathArr[g] = v
                var V = e.validate(f)
                ;(f.baseId = A),
                  e.util.varOccurences(V, y) < 2
                    ? (n += ' ' + e.util.varReplace(V, y, H) + ' ')
                    : (n += ' var ' + y + ' = ' + H + '; ' + V + ' '),
                  (n +=
                    ' if (!' +
                    d +
                    ') { errors = ' +
                    c +
                    '; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete ' +
                    h +
                    '[' +
                    v +
                    ']; }  '),
                  (e.compositeRule = f.compositeRule = B)
              } else
                (f.schema = P),
                  (f.schemaPath = e.schemaPath + '.additionalProperties'),
                  (f.errSchemaPath = e.errSchemaPath + '/additionalProperties'),
                  (f.errorPath = e.opts._errorDataPathProperty
                    ? e.errorPath
                    : e.util.getPathExpr(e.errorPath, v, e.opts.jsonPointers)),
                  (H = h + '[' + v + ']'),
                  (f.dataPathArr[g] = v),
                  (V = e.validate(f)),
                  (f.baseId = A),
                  e.util.varOccurences(V, y) < 2
                    ? (n += ' ' + e.util.varReplace(V, y, H) + ' ')
                    : (n += ' var ' + y + ' = ' + H + '; ' + V + ' '),
                  l && (n += ' if (!' + d + ') break; ')
            e.errorPath = U
          }
          S && (n += ' } '),
            (n += ' }  '),
            l && ((n += ' if (' + d + ') { '), (p += '}'))
        }
        var Q = e.opts.useDefaults && !e.compositeRule
        if (w.length) {
          var G = w
          if (G)
            for (var K, Y = -1, W = G.length - 1; Y < W; ) {
              var Z = i[(K = G[(Y += 1)])]
              if (e.util.schemaHasRules(Z, e.RULES.all)) {
                var J = e.util.getProperty(K),
                  X = ((H = h + J), Q && void 0 !== Z.default)
                if (
                  ((f.schema = Z),
                  (f.schemaPath = s + J),
                  (f.errSchemaPath = u + '/' + e.util.escapeFragment(K)),
                  (f.errorPath = e.util.getPath(
                    e.errorPath,
                    K,
                    e.opts.jsonPointers
                  )),
                  (f.dataPathArr[g] = e.util.toQuotedString(K)),
                  (V = e.validate(f)),
                  (f.baseId = A),
                  e.util.varOccurences(V, y) < 2)
                ) {
                  V = e.util.varReplace(V, y, H)
                  var ee = H
                } else n += ' var ' + (ee = y) + ' = ' + H + '; '
                if (X) n += ' ' + V + ' '
                else {
                  if (I && I[K]) {
                    ;(n += ' if ( ' + ee + ' === undefined '),
                      T &&
                        (n +=
                          ' || ! Object.prototype.hasOwnProperty.call(' +
                          h +
                          ", '" +
                          e.util.escapeQuotes(K) +
                          "') "),
                      (n += ') { ' + d + ' = false; '),
                      (U = e.errorPath),
                      (z = u)
                    var te,
                      re = e.util.escapeQuotes(K)
                    e.opts._errorDataPathProperty &&
                      (e.errorPath = e.util.getPath(U, K, e.opts.jsonPointers)),
                      (u = e.errSchemaPath + '/required'),
                      (te = te || []).push(n),
                      (n = ''),
                      !1 !== e.createErrors
                        ? ((n +=
                            " { keyword: 'required' , dataPath: (dataPath || '') + " +
                            e.errorPath +
                            ' , schemaPath: ' +
                            e.util.toQuotedString(u) +
                            " , params: { missingProperty: '" +
                            re +
                            "' } "),
                          !1 !== e.opts.messages &&
                            ((n += " , message: '"),
                            e.opts._errorDataPathProperty
                              ? (n += 'is a required property')
                              : (n +=
                                  "should have required property \\'" +
                                  re +
                                  "\\'"),
                            (n += "' ")),
                          e.opts.verbose &&
                            (n +=
                              ' , schema: validate.schema' +
                              s +
                              ' , parentSchema: validate.schema' +
                              e.schemaPath +
                              ' , data: ' +
                              h +
                              ' '),
                          (n += ' } '))
                        : (n += ' {} '),
                      (q = n),
                      (n = te.pop()),
                      !e.compositeRule && l
                        ? e.async
                          ? (n += ' throw new ValidationError([' + q + ']); ')
                          : (n +=
                              ' validate.errors = [' + q + ']; return false; ')
                        : (n +=
                            ' var err = ' +
                            q +
                            ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
                      (u = z),
                      (e.errorPath = U),
                      (n += ' } else { ')
                  } else
                    l
                      ? ((n += ' if ( ' + ee + ' === undefined '),
                        T &&
                          (n +=
                            ' || ! Object.prototype.hasOwnProperty.call(' +
                            h +
                            ", '" +
                            e.util.escapeQuotes(K) +
                            "') "),
                        (n += ') { ' + d + ' = true; } else { '))
                      : ((n += ' if (' + ee + ' !== undefined '),
                        T &&
                          (n +=
                            ' &&   Object.prototype.hasOwnProperty.call(' +
                            h +
                            ", '" +
                            e.util.escapeQuotes(K) +
                            "') "),
                        (n += ' ) { '))
                  n += ' ' + V + ' } '
                }
              }
              l && ((n += ' if (' + d + ') { '), (p += '}'))
            }
        }
        if (E.length) {
          var ne = E
          if (ne)
            for (var ae, oe = -1, ie = ne.length - 1; oe < ie; )
              (Z = _[(ae = ne[(oe += 1)])]),
                e.util.schemaHasRules(Z, e.RULES.all) &&
                  ((f.schema = Z),
                  (f.schemaPath =
                    e.schemaPath +
                    '.patternProperties' +
                    e.util.getProperty(ae)),
                  (f.errSchemaPath =
                    e.errSchemaPath +
                    '/patternProperties/' +
                    e.util.escapeFragment(ae)),
                  (n += T
                    ? ' ' +
                      b +
                      ' = ' +
                      b +
                      ' || Object.keys(' +
                      h +
                      '); for (var ' +
                      m +
                      '=0; ' +
                      m +
                      '<' +
                      b +
                      '.length; ' +
                      m +
                      '++) { var ' +
                      v +
                      ' = ' +
                      b +
                      '[' +
                      m +
                      ']; '
                    : ' for (var ' + v + ' in ' + h + ') { '),
                  (n += ' if (' + e.usePattern(ae) + '.test(' + v + ')) { '),
                  (f.errorPath = e.util.getPathExpr(
                    e.errorPath,
                    v,
                    e.opts.jsonPointers
                  )),
                  (H = h + '[' + v + ']'),
                  (f.dataPathArr[g] = v),
                  (V = e.validate(f)),
                  (f.baseId = A),
                  e.util.varOccurences(V, y) < 2
                    ? (n += ' ' + e.util.varReplace(V, y, H) + ' ')
                    : (n += ' var ' + y + ' = ' + H + '; ' + V + ' '),
                  l && (n += ' if (!' + d + ') break; '),
                  (n += ' } '),
                  l && (n += ' else ' + d + ' = true; '),
                  (n += ' }  '),
                  l && ((n += ' if (' + d + ') { '), (p += '}')))
        }
        return (
          l && (n += ' ' + p + ' if (' + c + ' == errors) {'),
          (n = e.util.cleanUpCode(n))
        )
      },
      propertyNames: function(e, t, r) {
        var n = ' ',
          a = e.level,
          o = e.dataLevel,
          i = e.schema[t],
          s = e.schemaPath + e.util.getProperty(t),
          u = e.errSchemaPath + '/' + t,
          l = !e.opts.allErrors,
          h = 'data' + (o || ''),
          c = 'errs__' + a,
          f = e.util.copy(e)
        f.level++
        var p = 'valid' + f.level
        if (e.util.schemaHasRules(i, e.RULES.all)) {
          ;(f.schema = i), (f.schemaPath = s), (f.errSchemaPath = u)
          var d = 'key' + a,
            v = 'idx' + a,
            m = 'i' + a,
            g = "' + " + d + " + '",
            y = 'data' + (f.dataLevel = e.dataLevel + 1),
            b = 'dataProperties' + a,
            w = e.opts.ownProperties,
            _ = e.baseId
          ;(n += ' var ' + c + ' = errors; '),
            w && (n += ' var ' + b + ' = undefined; '),
            (n += w
              ? ' ' +
                b +
                ' = ' +
                b +
                ' || Object.keys(' +
                h +
                '); for (var ' +
                v +
                '=0; ' +
                v +
                '<' +
                b +
                '.length; ' +
                v +
                '++) { var ' +
                d +
                ' = ' +
                b +
                '[' +
                v +
                ']; '
              : ' for (var ' + d + ' in ' + h + ') { '),
            (n += ' var startErrs' + a + ' = errors; ')
          var E = d,
            P = e.compositeRule
          e.compositeRule = f.compositeRule = !0
          var S = e.validate(f)
          ;(f.baseId = _),
            e.util.varOccurences(S, y) < 2
              ? (n += ' ' + e.util.varReplace(S, y, E) + ' ')
              : (n += ' var ' + y + ' = ' + E + '; ' + S + ' '),
            (e.compositeRule = f.compositeRule = P),
            (n +=
              ' if (!' +
              p +
              ') { for (var ' +
              m +
              '=startErrs' +
              a +
              '; ' +
              m +
              '<errors; ' +
              m +
              '++) { vErrors[' +
              m +
              '].propertyName = ' +
              d +
              '; }   var err =   '),
            !1 !== e.createErrors
              ? ((n +=
                  " { keyword: 'propertyNames' , dataPath: (dataPath || '') + " +
                  e.errorPath +
                  ' , schemaPath: ' +
                  e.util.toQuotedString(u) +
                  " , params: { propertyName: '" +
                  g +
                  "' } "),
                !1 !== e.opts.messages &&
                  (n +=
                    " , message: 'property name \\'" + g + "\\' is invalid' "),
                e.opts.verbose &&
                  (n +=
                    ' , schema: validate.schema' +
                    s +
                    ' , parentSchema: validate.schema' +
                    e.schemaPath +
                    ' , data: ' +
                    h +
                    ' '),
                (n += ' } '))
              : (n += ' {} '),
            (n +=
              ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
            !e.compositeRule &&
              l &&
              (e.async
                ? (n += ' throw new ValidationError(vErrors); ')
                : (n += ' validate.errors = vErrors; return false; ')),
            l && (n += ' break; '),
            (n += ' } }')
        }
        return (
          l && (n += '  if (' + c + ' == errors) {'),
          (n = e.util.cleanUpCode(n))
        )
      },
      required: function(e, t, r) {
        var n = ' ',
          a = e.level,
          o = e.dataLevel,
          i = e.schema[t],
          s = e.schemaPath + e.util.getProperty(t),
          u = e.errSchemaPath + '/' + t,
          l = !e.opts.allErrors,
          h = 'data' + (o || ''),
          c = 'valid' + a,
          f = e.opts.$data && i && i.$data
        f &&
          (n +=
            ' var schema' +
            a +
            ' = ' +
            e.util.getData(i.$data, o, e.dataPathArr) +
            '; ')
        var p = 'schema' + a
        if (!f)
          if (
            i.length < e.opts.loopRequired &&
            e.schema.properties &&
            li(e.schema.properties).length
          ) {
            var d = [],
              v = i
            if (v)
              for (var m, g = -1, y = v.length - 1; g < y; ) {
                m = v[(g += 1)]
                var b = e.schema.properties[m]
                ;(b && e.util.schemaHasRules(b, e.RULES.all)) ||
                  (d[d.length] = m)
              }
          } else d = i
        if (f || d.length) {
          var w = e.errorPath,
            _ = f || d.length >= e.opts.loopRequired,
            E = e.opts.ownProperties
          if (l)
            if (((n += ' var missing' + a + '; '), _)) {
              f || (n += ' var ' + p + ' = validate.schema' + s + '; ')
              var P =
                "' + " + (T = 'schema' + a + '[' + (O = 'i' + a) + ']') + " + '"
              e.opts._errorDataPathProperty &&
                (e.errorPath = e.util.getPathExpr(w, T, e.opts.jsonPointers)),
                (n += ' var ' + c + ' = true; '),
                f &&
                  (n +=
                    ' if (schema' +
                    a +
                    ' === undefined) ' +
                    c +
                    ' = true; else if (!Array.isArray(schema' +
                    a +
                    ')) ' +
                    c +
                    ' = false; else {'),
                (n +=
                  ' for (var ' +
                  O +
                  ' = 0; ' +
                  O +
                  ' < ' +
                  p +
                  '.length; ' +
                  O +
                  '++) { ' +
                  c +
                  ' = ' +
                  h +
                  '[' +
                  p +
                  '[' +
                  O +
                  ']] !== undefined '),
                E &&
                  (n +=
                    ' &&   Object.prototype.hasOwnProperty.call(' +
                    h +
                    ', ' +
                    p +
                    '[' +
                    O +
                    ']) '),
                (n += '; if (!' + c + ') break; } '),
                f && (n += '  }  '),
                (n += '  if (!' + c + ') {   '),
                (x = x || []).push(n),
                (n = ''),
                !1 !== e.createErrors
                  ? ((n +=
                      " { keyword: 'required' , dataPath: (dataPath || '') + " +
                      e.errorPath +
                      ' , schemaPath: ' +
                      e.util.toQuotedString(u) +
                      " , params: { missingProperty: '" +
                      P +
                      "' } "),
                    !1 !== e.opts.messages &&
                      ((n += " , message: '"),
                      e.opts._errorDataPathProperty
                        ? (n += 'is a required property')
                        : (n +=
                            "should have required property \\'" + P + "\\'"),
                      (n += "' ")),
                    e.opts.verbose &&
                      (n +=
                        ' , schema: validate.schema' +
                        s +
                        ' , parentSchema: validate.schema' +
                        e.schemaPath +
                        ' , data: ' +
                        h +
                        ' '),
                    (n += ' } '))
                  : (n += ' {} ')
              var S = n
              ;(n = x.pop()),
                !e.compositeRule && l
                  ? e.async
                    ? (n += ' throw new ValidationError([' + S + ']); ')
                    : (n += ' validate.errors = [' + S + ']; return false; ')
                  : (n +=
                      ' var err = ' +
                      S +
                      ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
                (n += ' } else { ')
            } else {
              n += ' if ( '
              var x,
                R = d
              if (R)
                for (var O = -1, k = R.length - 1; O < k; )
                  (j = R[(O += 1)]),
                    O && (n += ' || '),
                    (n +=
                      ' ( ( ' +
                      (D = h + (L = e.util.getProperty(j))) +
                      ' === undefined '),
                    E &&
                      (n +=
                        ' || ! Object.prototype.hasOwnProperty.call(' +
                        h +
                        ", '" +
                        e.util.escapeQuotes(j) +
                        "') "),
                    (n +=
                      ') && (missing' +
                      a +
                      ' = ' +
                      e.util.toQuotedString(e.opts.jsonPointers ? j : L) +
                      ') ) ')
              ;(n += ') {  '),
                (P = "' + " + (T = 'missing' + a) + " + '"),
                e.opts._errorDataPathProperty &&
                  (e.errorPath = e.opts.jsonPointers
                    ? e.util.getPathExpr(w, T, !0)
                    : w + ' + ' + T),
                (x = x || []).push(n),
                (n = ''),
                !1 !== e.createErrors
                  ? ((n +=
                      " { keyword: 'required' , dataPath: (dataPath || '') + " +
                      e.errorPath +
                      ' , schemaPath: ' +
                      e.util.toQuotedString(u) +
                      " , params: { missingProperty: '" +
                      P +
                      "' } "),
                    !1 !== e.opts.messages &&
                      ((n += " , message: '"),
                      e.opts._errorDataPathProperty
                        ? (n += 'is a required property')
                        : (n +=
                            "should have required property \\'" + P + "\\'"),
                      (n += "' ")),
                    e.opts.verbose &&
                      (n +=
                        ' , schema: validate.schema' +
                        s +
                        ' , parentSchema: validate.schema' +
                        e.schemaPath +
                        ' , data: ' +
                        h +
                        ' '),
                    (n += ' } '))
                  : (n += ' {} '),
                (S = n),
                (n = x.pop()),
                !e.compositeRule && l
                  ? e.async
                    ? (n += ' throw new ValidationError([' + S + ']); ')
                    : (n += ' validate.errors = [' + S + ']; return false; ')
                  : (n +=
                      ' var err = ' +
                      S +
                      ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
                (n += ' } else { ')
            }
          else if (_) {
            var T
            f || (n += ' var ' + p + ' = validate.schema' + s + '; '),
              (P =
                "' + " +
                (T = 'schema' + a + '[' + (O = 'i' + a) + ']') +
                " + '"),
              e.opts._errorDataPathProperty &&
                (e.errorPath = e.util.getPathExpr(w, T, e.opts.jsonPointers)),
              f &&
                ((n +=
                  ' if (' +
                  p +
                  ' && !Array.isArray(' +
                  p +
                  ')) {  var err =   '),
                !1 !== e.createErrors
                  ? ((n +=
                      " { keyword: 'required' , dataPath: (dataPath || '') + " +
                      e.errorPath +
                      ' , schemaPath: ' +
                      e.util.toQuotedString(u) +
                      " , params: { missingProperty: '" +
                      P +
                      "' } "),
                    !1 !== e.opts.messages &&
                      ((n += " , message: '"),
                      e.opts._errorDataPathProperty
                        ? (n += 'is a required property')
                        : (n +=
                            "should have required property \\'" + P + "\\'"),
                      (n += "' ")),
                    e.opts.verbose &&
                      (n +=
                        ' , schema: validate.schema' +
                        s +
                        ' , parentSchema: validate.schema' +
                        e.schemaPath +
                        ' , data: ' +
                        h +
                        ' '),
                    (n += ' } '))
                  : (n += ' {} '),
                (n +=
                  ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (' +
                  p +
                  ' !== undefined) { ')),
              (n +=
                ' for (var ' +
                O +
                ' = 0; ' +
                O +
                ' < ' +
                p +
                '.length; ' +
                O +
                '++) { if (' +
                h +
                '[' +
                p +
                '[' +
                O +
                ']] === undefined '),
              E &&
                (n +=
                  ' || ! Object.prototype.hasOwnProperty.call(' +
                  h +
                  ', ' +
                  p +
                  '[' +
                  O +
                  ']) '),
              (n += ') {  var err =   '),
              !1 !== e.createErrors
                ? ((n +=
                    " { keyword: 'required' , dataPath: (dataPath || '') + " +
                    e.errorPath +
                    ' , schemaPath: ' +
                    e.util.toQuotedString(u) +
                    " , params: { missingProperty: '" +
                    P +
                    "' } "),
                  !1 !== e.opts.messages &&
                    ((n += " , message: '"),
                    e.opts._errorDataPathProperty
                      ? (n += 'is a required property')
                      : (n += "should have required property \\'" + P + "\\'"),
                    (n += "' ")),
                  e.opts.verbose &&
                    (n +=
                      ' , schema: validate.schema' +
                      s +
                      ' , parentSchema: validate.schema' +
                      e.schemaPath +
                      ' , data: ' +
                      h +
                      ' '),
                  (n += ' } '))
                : (n += ' {} '),
              (n +=
                ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } '),
              f && (n += '  }  ')
          } else {
            var A = d
            if (A)
              for (var j, I = -1, C = A.length - 1; I < C; ) {
                j = A[(I += 1)]
                var L = e.util.getProperty(j),
                  D = ((P = e.util.escapeQuotes(j)), h + L)
                e.opts._errorDataPathProperty &&
                  (e.errorPath = e.util.getPath(w, j, e.opts.jsonPointers)),
                  (n += ' if ( ' + D + ' === undefined '),
                  E &&
                    (n +=
                      ' || ! Object.prototype.hasOwnProperty.call(' +
                      h +
                      ", '" +
                      e.util.escapeQuotes(j) +
                      "') "),
                  (n += ') {  var err =   '),
                  !1 !== e.createErrors
                    ? ((n +=
                        " { keyword: 'required' , dataPath: (dataPath || '') + " +
                        e.errorPath +
                        ' , schemaPath: ' +
                        e.util.toQuotedString(u) +
                        " , params: { missingProperty: '" +
                        P +
                        "' } "),
                      !1 !== e.opts.messages &&
                        ((n += " , message: '"),
                        e.opts._errorDataPathProperty
                          ? (n += 'is a required property')
                          : (n +=
                              "should have required property \\'" + P + "\\'"),
                        (n += "' ")),
                      e.opts.verbose &&
                        (n +=
                          ' , schema: validate.schema' +
                          s +
                          ' , parentSchema: validate.schema' +
                          e.schemaPath +
                          ' , data: ' +
                          h +
                          ' '),
                      (n += ' } '))
                    : (n += ' {} '),
                  (n +=
                    ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ')
              }
          }
          e.errorPath = w
        } else l && (n += ' if (true) {')
        return n
      },
      uniqueItems: function(e, t, r) {
        var n,
          a = ' ',
          o = e.level,
          i = e.dataLevel,
          s = e.schema[t],
          u = e.schemaPath + e.util.getProperty(t),
          l = e.errSchemaPath + '/' + t,
          h = !e.opts.allErrors,
          c = 'data' + (i || ''),
          f = 'valid' + o,
          p = e.opts.$data && s && s.$data
        if (
          (p
            ? ((a +=
                ' var schema' +
                o +
                ' = ' +
                e.util.getData(s.$data, i, e.dataPathArr) +
                '; '),
              (n = 'schema' + o))
            : (n = s),
          (s || p) && !1 !== e.opts.uniqueItems)
        ) {
          p &&
            (a +=
              ' var ' +
              f +
              '; if (' +
              n +
              ' === false || ' +
              n +
              ' === undefined) ' +
              f +
              ' = true; else if (typeof ' +
              n +
              " != 'boolean') " +
              f +
              ' = false; else { '),
            (a +=
              ' var i = ' + c + '.length , ' + f + ' = true , j; if (i > 1) { ')
          var d = e.schema.items && e.schema.items.type,
            v = bn(d)
          if (
            !d ||
            'object' == d ||
            'array' == d ||
            (v && (0 <= d.indexOf('object') || 0 <= d.indexOf('array')))
          )
            a +=
              ' outer: for (;i--;) { for (j = i; j--;) { if (equal(' +
              c +
              '[i], ' +
              c +
              '[j])) { ' +
              f +
              ' = false; break outer; } } } '
          else {
            a +=
              ' var itemIndices = {}, item; for (;i--;) { var item = ' +
              c +
              '[i]; '
            var m = 'checkDataType' + (v ? 's' : '')
            ;(a += ' if (' + e.util[m](d, 'item', !0) + ') continue; '),
              v && (a += " if (typeof item == 'string') item = '\"' + item; "),
              (a +=
                " if (typeof itemIndices[item] == 'number') { " +
                f +
                ' = false; j = itemIndices[item]; break; } itemIndices[item] = i; } ')
          }
          ;(a += ' } '), p && (a += '  }  '), (a += ' if (!' + f + ') {   ')
          var g = g || []
          g.push(a),
            (a = ''),
            !1 !== e.createErrors
              ? ((a +=
                  " { keyword: 'uniqueItems' , dataPath: (dataPath || '') + " +
                  e.errorPath +
                  ' , schemaPath: ' +
                  e.util.toQuotedString(l) +
                  ' , params: { i: i, j: j } '),
                !1 !== e.opts.messages &&
                  (a +=
                    " , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' "),
                e.opts.verbose &&
                  ((a += ' , schema:  '),
                  (a += p ? 'validate.schema' + u : '' + s),
                  (a +=
                    '         , parentSchema: validate.schema' +
                    e.schemaPath +
                    ' , data: ' +
                    c +
                    ' ')),
                (a += ' } '))
              : (a += ' {} ')
          var y = a
          ;(a = g.pop()),
            !e.compositeRule && h
              ? e.async
                ? (a += ' throw new ValidationError([' + y + ']); ')
                : (a += ' validate.errors = [' + y + ']; return false; ')
              : (a +=
                  ' var err = ' +
                  y +
                  ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
            (a += ' } '),
            h && (a += ' else { ')
        } else h && (a += ' if (true) { ')
        return a
      },
      validate: Oc
    },
    cf = Lh.toHash,
    ff = function() {
      var n = [
          {
            type: 'number',
            rules: [
              {maximum: ['exclusiveMaximum']},
              {minimum: ['exclusiveMinimum']},
              'multipleOf',
              'format'
            ]
          },
          {
            type: 'string',
            rules: ['maxLength', 'minLength', 'pattern', 'format']
          },
          {
            type: 'array',
            rules: ['maxItems', 'minItems', 'items', 'contains', 'uniqueItems']
          },
          {
            type: 'object',
            rules: [
              'maxProperties',
              'minProperties',
              'required',
              'dependencies',
              'propertyNames',
              {properties: ['additionalProperties', 'patternProperties']}
            ]
          },
          {
            rules: [
              '$ref',
              'const',
              'enum',
              'not',
              'anyOf',
              'oneOf',
              'allOf',
              'if'
            ]
          }
        ],
        a = ['type', '$comment']
      return (
        (n.all = cf(a)),
        (n.types = cf([
          'number',
          'integer',
          'string',
          'array',
          'object',
          'boolean',
          'null'
        ])),
        n.forEach(function(e) {
          ;(e.rules = e.rules.map(function(e) {
            var t
            if ('object' == pe(e)) {
              var r = li(e)[0]
              ;(t = e[r]),
                (e = r),
                t.forEach(function(e) {
                  a.push(e), (n.all[e] = !0)
                })
            }
            return (
              a.push(e), (n.all[e] = {keyword: e, code: hf[e], implements: t})
            )
          })),
            (n.all.$comment = {keyword: '$comment', code: hf.$comment}),
            e.type && (n.types[e.type] = e)
        }),
        (n.keywords = cf(
          a.concat([
            '$schema',
            '$id',
            'id',
            '$data',
            'title',
            'description',
            'default',
            'definitions',
            'examples',
            'readOnly',
            'writeOnly',
            'contentMediaType',
            'contentEncoding',
            'additionalItems',
            'then',
            'else'
          ])
        )),
        (n.custom = {}),
        n
      )
    },
    pf = [
      'multipleOf',
      'maximum',
      'exclusiveMaximum',
      'minimum',
      'exclusiveMinimum',
      'maxLength',
      'minLength',
      'pattern',
      'additionalItems',
      'maxItems',
      'minItems',
      'uniqueItems',
      'maxProperties',
      'minProperties',
      'required',
      'additionalProperties',
      'enum',
      'format',
      'const'
    ],
    df = function(e, t) {
      for (var r = 0; r < t.length; r++) {
        e = JSON.parse(Di(e))
        var n,
          a = t[r].split('/'),
          o = e
        for (n = 1; n < a.length; n++) o = o[a[n]]
        for (n = 0; n < pf.length; n++) {
          var i = pf[n],
            s = o[i]
          s &&
            (o[i] = {
              anyOf: [
                s,
                {
                  $ref:
                    'https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/data.json#'
                }
              ]
            })
        }
      }
      return e
    },
    vf = Pc.MissingRef,
    mf = function r(t, i, n) {
      var s = this
      if ('function' != typeof this._opts.loadSchema)
        throw new Error('options.loadSchema should be a function')
      'function' == typeof i && ((n = i), (i = void 0))
      var e = u(t).then(function() {
        var e = s._addSchema(t, void 0, i)
        return e.validate || l(e)
      })
      n &&
        e.then(function(e) {
          n(null, e)
        }, n)
      return e
      function u(e) {
        var t = e.$schema
        return t && !s.getSchema(t) ? r.call(s, {$ref: t}, !0) : gr.resolve()
      }
      function l(o) {
        try {
          return s._compile(o)
        } catch (e) {
          if (e instanceof vf) return t(e)
          throw e
        }
        function t(e) {
          var t = e.missingSchema
          if (a(t))
            throw new Error(
              'Schema ' +
                t +
                ' is loaded but ' +
                e.missingRef +
                ' cannot be resolved'
            )
          var r = s._loadingSchemas[t]
          return (
            r || (r = s._loadingSchemas[t] = s._opts.loadSchema(t)).then(n, n),
            r
              .then(function(e) {
                if (!a(t))
                  return u(e).then(function() {
                    a(t) || s.addSchema(e, t, void 0, i)
                  })
              })
              .then(function() {
                return l(o)
              })
          )
          function n() {
            delete s._loadingSchemas[t]
          }
          function a(e) {
            return s._refs[e] || s._schemas[e]
          }
        }
      }
    }
  var gf = function(e, t, r) {
      var n,
        a,
        o = ' ',
        i = e.level,
        s = e.dataLevel,
        u = e.schema[t],
        l = e.schemaPath + e.util.getProperty(t),
        h = e.errSchemaPath + '/' + t,
        c = !e.opts.allErrors,
        f = 'data' + (s || ''),
        p = 'valid' + i,
        d = 'errs__' + i,
        v = e.opts.$data && u && u.$data
      v
        ? ((o +=
            ' var schema' +
            i +
            ' = ' +
            e.util.getData(u.$data, s, e.dataPathArr) +
            '; '),
          (a = 'schema' + i))
        : (a = u)
      var m,
        g,
        y,
        b,
        w,
        _ = 'definition' + i,
        E = this.definition,
        P = ''
      if (v && E.$data) {
        w = 'keywordValidate' + i
        var S = E.validateSchema
        o +=
          ' var ' +
          _ +
          " = RULES.custom['" +
          t +
          "'].definition; var " +
          w +
          ' = ' +
          _ +
          '.validate;'
      } else {
        if (!(b = e.useCustomRule(this, u, e.schema, e))) return
        ;(a = 'validate.schema' + l),
          (w = b.code),
          (m = E.compile),
          (g = E.inline),
          (y = E.macro)
      }
      var x = w + '.errors',
        R = 'i' + i,
        O = 'ruleErr' + i,
        k = E.async
      if (k && !e.async) throw new Error('async keyword in sync schema')
      if (
        (g || y || (o += x + ' = null;'),
        (o += 'var ' + d + ' = errors;var ' + p + ';'),
        v &&
          E.$data &&
          ((P += '}'),
          (o += ' if (' + a + ' === undefined) { ' + p + ' = true; } else { '),
          S &&
            ((P += '}'),
            (o +=
              ' ' +
              p +
              ' = ' +
              _ +
              '.validateSchema(' +
              a +
              '); if (' +
              p +
              ') { '))),
        g)
      )
        E.statements
          ? (o += ' ' + b.validate + ' ')
          : (o += ' ' + p + ' = ' + b.validate + '; ')
      else if (y) {
        var T = e.util.copy(e)
        P = ''
        T.level++
        var A = 'valid' + T.level
        ;(T.schema = b.validate), (T.schemaPath = '')
        var j = e.compositeRule
        e.compositeRule = T.compositeRule = !0
        var I = e.validate(T).replace(/validate\.schema/g, w)
        ;(e.compositeRule = T.compositeRule = j), (o += ' ' + I)
      } else {
        ;(F = F || []).push(o),
          (o = ''),
          (o += '  ' + w + '.call( '),
          e.opts.passContext ? (o += 'this') : (o += 'self'),
          m || !1 === E.schema
            ? (o += ' , ' + f + ' ')
            : (o +=
                ' , ' +
                a +
                ' , ' +
                f +
                ' , validate.schema' +
                e.schemaPath +
                ' '),
          (o += " , (dataPath || '')"),
          '""' != e.errorPath && (o += ' + ' + e.errorPath)
        var C = s ? 'data' + (s - 1 || '') : 'parentData',
          L = s ? e.dataPathArr[s] : 'parentDataProperty',
          D = (o += ' , ' + C + ' , ' + L + ' , rootData )  ')
        ;(o = F.pop()),
          !1 === E.errors
            ? ((o += ' ' + p + ' = '), k && (o += 'await '), (o += D + '; '))
            : (o += k
                ? ' var ' +
                  (x = 'customErrors' + i) +
                  ' = null; try { ' +
                  p +
                  ' = await ' +
                  D +
                  '; } catch (e) { ' +
                  p +
                  ' = false; if (e instanceof ValidationError) ' +
                  x +
                  ' = e.errors; else throw e; } '
                : ' ' + x + ' = null; ' + p + ' = ' + D + '; ')
      }
      if (
        (E.modifying &&
          (o += ' if (' + C + ') ' + f + ' = ' + C + '[' + L + '];'),
        (o += '' + P),
        E.valid)
      )
        c && (o += ' if (true) { ')
      else {
        var F
        ;(o += ' if ( '),
          void 0 === E.valid
            ? ((o += ' !'), (o += y ? '' + A : '' + p))
            : (o += ' ' + !E.valid + ' '),
          (o += ') { '),
          (n = this.keyword),
          (F = F || []).push(o),
          (o = ''),
          (F = F || []).push(o),
          (o = ''),
          !1 !== e.createErrors
            ? ((o +=
                " { keyword: '" +
                (n || 'custom') +
                "' , dataPath: (dataPath || '') + " +
                e.errorPath +
                ' , schemaPath: ' +
                e.util.toQuotedString(h) +
                " , params: { keyword: '" +
                this.keyword +
                "' } "),
              !1 !== e.opts.messages &&
                (o +=
                  ' , message: \'should pass "' +
                  this.keyword +
                  '" keyword validation\' '),
              e.opts.verbose &&
                (o +=
                  ' , schema: validate.schema' +
                  l +
                  ' , parentSchema: validate.schema' +
                  e.schemaPath +
                  ' , data: ' +
                  f +
                  ' '),
              (o += ' } '))
            : (o += ' {} ')
        var M = o
        ;(o = F.pop()),
          !e.compositeRule && c
            ? e.async
              ? (o += ' throw new ValidationError([' + M + ']); ')
              : (o += ' validate.errors = [' + M + ']; return false; ')
            : (o +=
                ' var err = ' +
                M +
                ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ')
        var $ = o
        ;(o = F.pop()),
          g
            ? E.errors
              ? 'full' != E.errors &&
                ((o +=
                  '  for (var ' +
                  R +
                  '=' +
                  d +
                  '; ' +
                  R +
                  '<errors; ' +
                  R +
                  '++) { var ' +
                  O +
                  ' = vErrors[' +
                  R +
                  ']; if (' +
                  O +
                  '.dataPath === undefined) ' +
                  O +
                  ".dataPath = (dataPath || '') + " +
                  e.errorPath +
                  '; if (' +
                  O +
                  '.schemaPath === undefined) { ' +
                  O +
                  '.schemaPath = "' +
                  h +
                  '"; } '),
                e.opts.verbose &&
                  (o +=
                    ' ' +
                    O +
                    '.schema = ' +
                    a +
                    '; ' +
                    O +
                    '.data = ' +
                    f +
                    '; '),
                (o += ' } '))
              : !1 === E.errors
                ? (o += ' ' + $ + ' ')
                : ((o +=
                    ' if (' +
                    d +
                    ' == errors) { ' +
                    $ +
                    ' } else {  for (var ' +
                    R +
                    '=' +
                    d +
                    '; ' +
                    R +
                    '<errors; ' +
                    R +
                    '++) { var ' +
                    O +
                    ' = vErrors[' +
                    R +
                    ']; if (' +
                    O +
                    '.dataPath === undefined) ' +
                    O +
                    ".dataPath = (dataPath || '') + " +
                    e.errorPath +
                    '; if (' +
                    O +
                    '.schemaPath === undefined) { ' +
                    O +
                    '.schemaPath = "' +
                    h +
                    '"; } '),
                  e.opts.verbose &&
                    (o +=
                      ' ' +
                      O +
                      '.schema = ' +
                      a +
                      '; ' +
                      O +
                      '.data = ' +
                      f +
                      '; '),
                  (o += ' } } '))
            : y
              ? ((o += '   var err =   '),
                !1 !== e.createErrors
                  ? ((o +=
                      " { keyword: '" +
                      (n || 'custom') +
                      "' , dataPath: (dataPath || '') + " +
                      e.errorPath +
                      ' , schemaPath: ' +
                      e.util.toQuotedString(h) +
                      " , params: { keyword: '" +
                      this.keyword +
                      "' } "),
                    !1 !== e.opts.messages &&
                      (o +=
                        ' , message: \'should pass "' +
                        this.keyword +
                        '" keyword validation\' '),
                    e.opts.verbose &&
                      (o +=
                        ' , schema: validate.schema' +
                        l +
                        ' , parentSchema: validate.schema' +
                        e.schemaPath +
                        ' , data: ' +
                        f +
                        ' '),
                    (o += ' } '))
                  : (o += ' {} '),
                (o +=
                  ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
                !e.compositeRule &&
                  c &&
                  (e.async
                    ? (o += ' throw new ValidationError(vErrors); ')
                    : (o += ' validate.errors = vErrors; return false; ')))
              : !1 === E.errors
                ? (o += ' ' + $ + ' ')
                : ((o +=
                    ' if (Array.isArray(' +
                    x +
                    ')) { if (vErrors === null) vErrors = ' +
                    x +
                    '; else vErrors = vErrors.concat(' +
                    x +
                    '); errors = vErrors.length;  for (var ' +
                    R +
                    '=' +
                    d +
                    '; ' +
                    R +
                    '<errors; ' +
                    R +
                    '++) { var ' +
                    O +
                    ' = vErrors[' +
                    R +
                    ']; if (' +
                    O +
                    '.dataPath === undefined) ' +
                    O +
                    ".dataPath = (dataPath || '') + " +
                    e.errorPath +
                    ';  ' +
                    O +
                    '.schemaPath = "' +
                    h +
                    '";  '),
                  e.opts.verbose &&
                    (o +=
                      ' ' +
                      O +
                      '.schema = ' +
                      a +
                      '; ' +
                      O +
                      '.data = ' +
                      f +
                      '; '),
                  (o += ' } } else { ' + $ + ' } ')),
          (o += ' } '),
          c && (o += ' else { ')
      }
      return o
    },
    yf = /^[a-z_$][a-z0-9_$-]*$/i,
    bf = function(e, t) {
      var s = this.RULES
      if (s.keywords[e]) throw new Error('Keyword ' + e + ' is already defined')
      if (!yf.test(e))
        throw new Error('Keyword ' + e + ' is not a valid identifier')
      if (t) {
        if (t.macro && void 0 !== t.valid)
          throw new Error('"valid" option cannot be used with macro keywords')
        var r = t.type
        if (bn(r)) {
          var n,
            a = r.length
          for (n = 0; n < a; n++) l(r[n])
          for (n = 0; n < a; n++) u(e, r[n], t)
        } else r && l(r), u(e, r, t)
        var o = !0 === t.$data && this._opts.$data
        if (o && !t.validate)
          throw new Error('$data support: "validate" function is not defined')
        var i = t.metaSchema
        i &&
          (o &&
            (i = {
              anyOf: [
                i,
                {
                  $ref:
                    'https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/data.json#'
                }
              ]
            }),
          (t.validateSchema = this.compile(i, !0)))
      }
      function u(e, t, r) {
        for (var n, a = 0; a < s.length; a++) {
          var o = s[a]
          if (o.type == t) {
            n = o
            break
          }
        }
        n || ((n = {type: t, rules: []}), s.push(n))
        var i = {
          keyword: e,
          definition: r,
          custom: !0,
          code: gf,
          implements: r.implements
        }
        n.rules.push(i), (s.custom[e] = i)
      }
      function l(e) {
        if (!s.types[e]) throw new Error('Unknown type ' + e)
      }
      return (s.keywords[e] = s.all[e] = !0), this
    },
    wf = function(e) {
      var t = this.RULES.custom[e]
      return t ? t.definition : this.RULES.keywords[e] || !1
    },
    _f = function(e) {
      var t = this.RULES
      delete t.keywords[e], delete t.all[e], delete t.custom[e]
      for (var r = 0; r < t.length; r++)
        for (var n = t[r].rules, a = 0; a < n.length; a++)
          if (n[a].keyword == e) {
            n.splice(a, 1)
            break
          }
      return this
    }
  var Ef = 'http://json-schema.org/draft-07/schema#',
    Pf =
      'https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/data.json#',
    Sf = 'Meta-schema for $data reference (JSON Schema extension proposal)',
    xf = ['$data'],
    Rf = {
      $data: {
        type: 'string',
        anyOf: [{format: 'relative-json-pointer'}, {format: 'json-pointer'}]
      }
    },
    Of = {
      $schema: Ef,
      $id: Pf,
      description: Sf,
      type: 'object',
      required: xf,
      properties: Rf,
      additionalProperties: !1
    },
    kf = Object.freeze({
      $schema: Ef,
      $id: Pf,
      description: Sf,
      type: 'object',
      required: xf,
      properties: Rf,
      additionalProperties: !1,
      default: Of
    }),
    Tf = 'http://json-schema.org/draft-07/schema#',
    Af = 'http://json-schema.org/draft-07/schema#',
    jf = 'Core schema meta-schema',
    If = {
      schemaArray: {type: 'array', minItems: 1, items: {$ref: '#'}},
      nonNegativeInteger: {type: 'integer', minimum: 0},
      nonNegativeIntegerDefault0: {
        allOf: [{$ref: '#/definitions/nonNegativeInteger'}, {default: 0}]
      },
      simpleTypes: {
        enum: [
          'array',
          'boolean',
          'integer',
          'null',
          'number',
          'object',
          'string'
        ]
      },
      stringArray: {
        type: 'array',
        items: {type: 'string'},
        uniqueItems: !0,
        default: []
      }
    },
    Cf = ['object', 'boolean'],
    Lf = {
      $id: {type: 'string', format: 'uri-reference'},
      $schema: {type: 'string', format: 'uri'},
      $ref: {type: 'string', format: 'uri-reference'},
      $comment: {type: 'string'},
      title: {type: 'string'},
      description: {type: 'string'},
      default: !0,
      readOnly: {type: 'boolean', default: !1},
      examples: {type: 'array', items: !0},
      multipleOf: {type: 'number', exclusiveMinimum: 0},
      maximum: {type: 'number'},
      exclusiveMaximum: {type: 'number'},
      minimum: {type: 'number'},
      exclusiveMinimum: {type: 'number'},
      maxLength: {$ref: '#/definitions/nonNegativeInteger'},
      minLength: {$ref: '#/definitions/nonNegativeIntegerDefault0'},
      pattern: {type: 'string', format: 'regex'},
      additionalItems: {$ref: '#'},
      items: {
        anyOf: [{$ref: '#'}, {$ref: '#/definitions/schemaArray'}],
        default: !0
      },
      maxItems: {$ref: '#/definitions/nonNegativeInteger'},
      minItems: {$ref: '#/definitions/nonNegativeIntegerDefault0'},
      uniqueItems: {type: 'boolean', default: !1},
      contains: {$ref: '#'},
      maxProperties: {$ref: '#/definitions/nonNegativeInteger'},
      minProperties: {$ref: '#/definitions/nonNegativeIntegerDefault0'},
      required: {$ref: '#/definitions/stringArray'},
      additionalProperties: {$ref: '#'},
      definitions: {
        type: 'object',
        additionalProperties: {$ref: '#'},
        default: {}
      },
      properties: {
        type: 'object',
        additionalProperties: {$ref: '#'},
        default: {}
      },
      patternProperties: {
        type: 'object',
        additionalProperties: {$ref: '#'},
        propertyNames: {format: 'regex'},
        default: {}
      },
      dependencies: {
        type: 'object',
        additionalProperties: {
          anyOf: [{$ref: '#'}, {$ref: '#/definitions/stringArray'}]
        }
      },
      propertyNames: {$ref: '#'},
      const: !0,
      enum: {type: 'array', items: !0, minItems: 1, uniqueItems: !0},
      type: {
        anyOf: [
          {$ref: '#/definitions/simpleTypes'},
          {
            type: 'array',
            items: {$ref: '#/definitions/simpleTypes'},
            minItems: 1,
            uniqueItems: !0
          }
        ]
      },
      format: {type: 'string'},
      contentMediaType: {type: 'string'},
      contentEncoding: {type: 'string'},
      if: {$ref: '#'},
      then: {$ref: '#'},
      else: {$ref: '#'},
      allOf: {$ref: '#/definitions/schemaArray'},
      anyOf: {$ref: '#/definitions/schemaArray'},
      oneOf: {$ref: '#/definitions/schemaArray'},
      not: {$ref: '#'}
    },
    Df = {
      $schema: Tf,
      $id: Af,
      title: jf,
      definitions: If,
      type: Cf,
      properties: Lf,
      default: !0
    },
    Ff = Object.freeze({
      $schema: Tf,
      $id: Af,
      title: jf,
      definitions: If,
      type: Cf,
      properties: Lf,
      default: Df
    }),
    Mf = (kf && Of) || kf,
    $f = (Ff && Df) || Ff,
    Uf = Bf
  ;(Bf.prototype.validate = function(e, t) {
    var r
    if ('string' == typeof e) {
      if (!(r = this.getSchema(e)))
        throw new Error('no schema with key or ref "' + e + '"')
    } else {
      var n = this._addSchema(e)
      r = n.validate || this._compile(n)
    }
    var a = r(t)
    !0 !== r.$async && (this.errors = r.errors)
    return a
  }),
    (Bf.prototype.compile = function(e, t) {
      var r = this._addSchema(e, void 0, t)
      return r.validate || this._compile(r)
    }),
    (Bf.prototype.addSchema = function(e, t, r, n) {
      if (bn(e)) {
        for (var a = 0; a < e.length; a++) this.addSchema(e[a], void 0, r, n)
        return this
      }
      var o = this._getId(e)
      if (void 0 !== o && 'string' != typeof o)
        throw new Error('schema id must be string')
      return (
        tp(this, (t = uc.normalizeId(t || o))),
        (this._schemas[t] = this._addSchema(e, r, n, !0)),
        this
      )
    }),
    (Bf.prototype.addMetaSchema = function(e, t, r) {
      return this.addSchema(e, t, r, !0), this
    }),
    (Bf.prototype.validateSchema = function(e, t) {
      var r = e.$schema
      if (void 0 !== r && 'string' != typeof r)
        throw new Error('$schema must be a string')
      if (!(r = r || this._opts.defaultMeta || Hf(this)))
        return (
          this.logger.warn('meta-schema not available'), !(this.errors = null)
        )
      var n,
        a = this._formats.uri
      this._formats.uri =
        'function' == typeof a
          ? this._schemaUriFormatFunc
          : this._schemaUriFormat
      try {
        n = this.validate(r, e)
      } finally {
        this._formats.uri = a
      }
      if (!n && t) {
        var o = 'schema is invalid: ' + this.errorsText()
        if ('log' != this._opts.validateSchema) throw new Error(o)
        this.logger.error(o)
      }
      return n
    }),
    (Bf.prototype.getSchema = function(e) {
      var t = Qf(this, e)
      switch (pe(t)) {
        case 'object':
          return t.validate || this._compile(t)
        case 'string':
          return this.getSchema(t)
        case 'undefined':
          return Vf(this, e)
      }
    }),
    (Bf.prototype.removeSchema = function(e) {
      if (e instanceof RegExp)
        return Gf(this, this._schemas, e), Gf(this, this._refs, e), this
      switch (pe(e)) {
        case 'undefined':
          return (
            Gf(this, this._schemas),
            Gf(this, this._refs),
            this._cache.clear(),
            this
          )
        case 'string':
          var t = Qf(this, e)
          return (
            t && this._cache.del(t.cacheKey),
            delete this._schemas[e],
            delete this._refs[e],
            this
          )
        case 'object':
          var r = this._opts.serialize,
            n = r ? r(e) : e
          this._cache.del(n)
          var a = this._getId(e)
          a &&
            ((a = uc.normalizeId(a)),
            delete this._schemas[a],
            delete this._refs[a])
      }
      return this
    }),
    (Bf.prototype.addFormat = function(e, t) {
      'string' == typeof t && (t = new RegExp(t))
      return (this._formats[e] = t), this
    }),
    (Bf.prototype.errorsText = function(e, t) {
      if (!(e = e || this.errors)) return 'No errors'
      for (
        var r = void 0 === (t = t || {}).separator ? ', ' : t.separator,
          n = void 0 === t.dataVar ? 'data' : t.dataVar,
          a = '',
          o = 0;
        o < e.length;
        o++
      ) {
        var i = e[o]
        i && (a += n + i.dataPath + ' ' + i.message + r)
      }
      return a.slice(0, -r.length)
    }),
    (Bf.prototype._addSchema = function(e, t, r, n) {
      if ('object' != pe(e) && 'boolean' != typeof e)
        throw new Error('schema should be object or boolean')
      var a = this._opts.serialize,
        o = a ? a(e) : e,
        i = this._cache.get(o)
      if (i) return i
      n = n || !1 !== this._opts.addUsedSchema
      var s = uc.normalizeId(this._getId(e))
      s && n && tp(this, s)
      var u,
        l = !1 !== this._opts.validateSchema && !t
      l &&
        !(u = s && s == uc.normalizeId(e.$schema)) &&
        this.validateSchema(e, !0)
      var h = uc.ids.call(this, e),
        c = new ic({id: s, schema: e, localRefs: h, cacheKey: o, meta: r})
      '#' != s[0] && n && (this._refs[s] = c)
      this._cache.put(o, c), l && u && this.validateSchema(e, !0)
      return c
    }),
    (Bf.prototype._compile = function(r, e) {
      if (r.compiling)
        return (
          ((r.validate = a).schema = r.schema),
          (a.errors = null),
          (a.root = e || a),
          !0 === r.schema.$async && (a.$async = !0),
          a
        )
      var t, n
      ;(r.compiling = !0),
        r.meta && ((t = this._opts), (this._opts = this._metaOpts))
      try {
        n = Ac.call(this, r.schema, e, r.localRefs)
      } catch (e) {
        throw (delete r.validate, e)
      } finally {
        ;(r.compiling = !1), r.meta && (this._opts = t)
      }
      return (
        (r.validate = n),
        (r.refs = n.refs),
        (r.refVal = n.refVal),
        (r.root = n.root),
        n
      )
      function a() {
        var e = r.validate,
          t = e.apply(this, arguments)
        return (a.errors = e.errors), t
      }
    }),
    (Bf.prototype.compileAsync = mf),
    (Bf.prototype.addKeyword = bf),
    (Bf.prototype.getKeyword = wf),
    (Bf.prototype.removeKeyword = _f),
    (Bf.ValidationError = Pc.Validation),
    (Bf.MissingRefError = Pc.MissingRef),
    (Bf.$dataMetaSchema = df)
  var Nf = 'http://json-schema.org/draft-07/schema',
    zf = ['removeAdditional', 'useDefaults', 'coerceTypes'],
    qf = ['/properties']
  function Bf(e) {
    if (!(this instanceof Bf)) return new Bf(e)
    ;(e = this._opts = Lh.copy(e) || {}),
      np(this),
      (this._schemas = {}),
      (this._refs = {}),
      (this._fragments = {}),
      (this._formats = Zc(e.format))
    var t = (this._schemaUriFormat = this._formats['uri-reference'])
    ;(this._schemaUriFormatFunc = function(e) {
      return t.test(e)
    }),
      (this._cache = e.cache || new Uc()),
      (this._loadingSchemas = {}),
      (this._compilations = []),
      (this.RULES = ff()),
      (this._getId = Kf(e)),
      (e.loopRequired = e.loopRequired || 1 / 0),
      'property' == e.errorDataPath && (e._errorDataPathProperty = !0),
      void 0 === e.serialize && (e.serialize = Rc),
      (this._metaOpts = rp(this)),
      e.formats && ep(this),
      Jf(this),
      'object' == pe(e.meta) && this.addMetaSchema(e.meta),
      Xf(this)
  }
  function Hf(e) {
    var t = e._opts.meta
    return (
      (e._opts.defaultMeta =
        'object' == pe(t) ? e._getId(t) || t : e.getSchema(Nf) ? Nf : void 0),
      e._opts.defaultMeta
    )
  }
  function Vf(e, t) {
    var r = uc.schema.call(e, {schema: {}}, t)
    if (r) {
      var n = r.schema,
        a = r.root,
        o = r.baseId,
        i = Ac.call(e, n, a, void 0, o)
      return (
        (e._fragments[t] = new ic({
          ref: t,
          fragment: !0,
          schema: n,
          root: a,
          baseId: o,
          validate: i
        })),
        i
      )
    }
  }
  function Qf(e, t) {
    return (
      (t = uc.normalizeId(t)), e._schemas[t] || e._refs[t] || e._fragments[t]
    )
  }
  function Gf(e, t, r) {
    for (var n in t) {
      var a = t[n]
      a.meta || (r && !r.test(n)) || (e._cache.del(a.cacheKey), delete t[n])
    }
  }
  function Kf(e) {
    switch (e.schemaId) {
      case 'auto':
        return Zf
      case 'id':
        return Yf
      default:
        return Wf
    }
  }
  function Yf(e) {
    return e.$id && this.logger.warn('schema $id ignored', e.$id), e.id
  }
  function Wf(e) {
    return e.id && this.logger.warn('schema id ignored', e.id), e.$id
  }
  function Zf(e) {
    if (e.$id && e.id && e.$id != e.id)
      throw new Error('schema $id is different from id')
    return e.$id || e.id
  }
  function Jf(e) {
    var t
    if (
      (e._opts.$data && ((t = Mf), e.addMetaSchema(t, t.$id, !0)),
      !1 !== e._opts.meta)
    ) {
      var r = $f
      e._opts.$data && (r = df(r, qf)),
        e.addMetaSchema(r, Nf, !0),
        (e._refs['http://json-schema.org/schema'] = Nf)
    }
  }
  function Xf(e) {
    var t = e._opts.schemas
    if (t)
      if (bn(t)) e.addSchema(t)
      else for (var r in t) e.addSchema(t[r], r)
  }
  function ep(e) {
    for (var t in e._opts.formats) {
      var r = e._opts.formats[t]
      e.addFormat(t, r)
    }
  }
  function tp(e, t) {
    if (e._schemas[t] || e._refs[t])
      throw new Error('schema with key or id "' + t + '" already exists')
  }
  function rp(e) {
    for (var t = Lh.copy(e._opts), r = 0; r < zf.length; r++) delete t[zf[r]]
    return t
  }
  function np(e) {
    var t = e._opts.logger
    if (!1 === t) e.logger = {log: ap, warn: ap, error: ap}
    else {
      if (
        (void 0 === t && (t = console),
        !('object' == pe(t) && t.log && t.warn && t.error))
      )
        throw new Error('logger must implement log, warn and error methods')
      e.logger = t
    }
  }
  function ap() {}
  var op = function(r, e, t) {
      var n = ' ',
        a = r.level,
        o = r.dataLevel,
        i = r.schema[e],
        s = r.schemaPath + r.util.getProperty(e),
        u = (r.errSchemaPath, r.opts.allErrors, 'data' + (o || ''))
      if (!1 !== r.createErrors) {
        var l = /\$\{[^\}]+\}/,
          h = /\$\{([^\}]+)\}/g,
          c = /^\'\'\s*\+\s*|\s*\+\s*\'\'$/g,
          f = r.self.getKeyword(e).config,
          p = '_em_dataPath' + a,
          d = '_em_i' + a,
          v = '_em_key' + a,
          m = '_em_keyProp' + a,
          g = '_em_err' + a,
          y = '_em_child' + a,
          b = '_em_childKeyword' + a,
          w = '_em_matches' + a,
          _ = '_em_isArray' + a,
          E = '_em_errors' + a,
          P = '_em_message' + a,
          S = '_em_paramsErrors' + a,
          x = '_em_propParam' + a,
          R = '_em_keywordPropParams' + a,
          O = '_em_templates' + a,
          k = r.util.toQuotedString(r.errSchemaPath)
        if (
          ((n +=
            ' if (errors > 0) { var ' +
            p +
            " = (dataPath || '') + " +
            r.errorPath +
            '; var ' +
            d +
            ', ' +
            g +
            ', ' +
            E +
            '; '),
          'object' == pe(i))
        ) {
          var T = {},
            A = {},
            j = {properties: {}, items: {}},
            I = !1,
            C = !1,
            L = !1
          for (var D in i)
            switch (D) {
              case 'properties':
                for (var F in i.properties) (C = !0), (j.properties[F] = [])
                break
              case 'items':
                for (var M = 0; M < i.items.length; M++)
                  (L = !0), (j.items[M] = [])
                break
              default:
                if ('object' == pe(i[D]))
                  for (var F in ((I = !0), (A[D] = {}), i[D])) A[D][F] = []
                else T[D] = []
            }
          var $ = li(T)
          if ($.length) {
            n +=
              ' ' + d + ' = 0; ' + E + ' = ' + Di(T) + ';  var ' + O + ' = { '
            var U = !1,
              N = $
            if (N)
              for (var z = -1, q = N.length - 1; z < q; )
                (D = N[(z += 1)]),
                  l.test(i[D]) &&
                    (U && (n += ','),
                    (n += r.util.toQuotedString(D) + ': ' + fe(i[D]) + ' '),
                    (U = !0))
            ;(n +=
              ' }; while (' +
              d +
              ' < errors) { ' +
              g +
              ' = vErrors[' +
              d +
              ']; if (  ' +
              g +
              ".keyword != '" +
              e +
              "' "),
              f.options.keepErrors && (n += ' && !' + g + '.emUsed '),
              (n +=
                ' && ' +
                g +
                '.keyword in ' +
                E +
                ' && ' +
                g +
                '.dataPath == ' +
                p +
                ' && ' +
                g +
                '.schemaPath.indexOf(' +
                k +
                ') == 0 && /^\\/[^\\/]*$/.test(' +
                g +
                '.schemaPath.slice(' +
                r.errSchemaPath.length +
                '))) { ' +
                E +
                '[' +
                g +
                '.keyword].push(' +
                g +
                ');  '),
              f.options.keepErrors
                ? (n += ' ' + g + '.emUsed = true; ')
                : (n += ' vErrors.splice(' + d + ', 1); errors--; '),
              (n += ' } else { ' + d + '++; } } '),
              f.options.singleError &&
                (n += ' var ' + P + " = ''; var " + S + ' = []; '),
              (n +=
                ' for (var ' +
                v +
                ' in ' +
                E +
                ') { if (' +
                E +
                '[' +
                v +
                '].length) { '),
              f.options.singleError
                ? ((n += ' if (' + P + ') { ' + P + ' += '),
                  'string' == typeof f.options.singleError
                    ? (n +=
                        ' ' +
                        r.util.toQuotedString(f.options.singleError) +
                        ' ')
                    : (n += " '; ' "),
                  (n +=
                    '; } ' +
                    P +
                    ' +=   ' +
                    v +
                    ' in ' +
                    O +
                    ' ? ' +
                    O +
                    '[' +
                    v +
                    '] () : validate.schema' +
                    s +
                    '[' +
                    v +
                    ']; ' +
                    S +
                    ' = ' +
                    S +
                    '.concat(' +
                    E +
                    '[' +
                    v +
                    ']); } } '))
                : (n +=
                    ' var ' +
                    P +
                    ' =   ' +
                    v +
                    ' in ' +
                    O +
                    ' ? ' +
                    O +
                    '[' +
                    v +
                    '] () : validate.schema' +
                    s +
                    '[' +
                    v +
                    ']; var ' +
                    S +
                    ' = ' +
                    E +
                    '[' +
                    v +
                    ']; '),
              (n +=
                "  var err = { keyword: '" +
                e +
                "' , dataPath: " +
                p +
                ' , schemaPath: ' +
                k +
                " + '/" +
                e +
                "' , params: { errors: " +
                S +
                ' } , message: ' +
                P +
                ' '),
              r.opts.verbose &&
                (n +=
                  ' , schema: validate.schema' +
                  s +
                  ' , parentSchema: validate.schema' +
                  r.schemaPath +
                  ' , data: ' +
                  u +
                  ' '),
              (n +=
                ' };  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
              f.options.singleError || (n += ' } } ')
          }
          if (I) {
            n +=
              ' ' +
              d +
              ' = 0; ' +
              E +
              ' = ' +
              Di(A) +
              '; var ' +
              S +
              ', ' +
              x +
              '; var ' +
              R +
              ' = ' +
              Di(f.KEYWORD_PROPERTY_PARAMS) +
              ';  var ' +
              O +
              ' = { '
            U = !1
            var B = li(A)
            if (B)
              for (var H = -1, V = B.length - 1; H < V; ) {
                var Q = i[(D = B[(H += 1)])]
                U && (n += ','), (n += r.util.toQuotedString(D) + ': { ')
                var G = !(U = !0),
                  K = li(Q)
                if (K)
                  for (var Y = -1, W = K.length - 1; Y < W; )
                    (F = K[(Y += 1)]),
                      l.test(Q[F]) &&
                        (G && (n += ','),
                        (n += r.util.toQuotedString(F) + ': ' + fe(Q[F]) + ' '),
                        (G = !0))
                n += ' } '
              }
            ;(n +=
              ' }; while (' +
              d +
              ' < errors) { ' +
              g +
              ' = vErrors[' +
              d +
              ']; if (  ' +
              g +
              ".keyword != '" +
              e +
              "' "),
              f.options.keepErrors && (n += ' && !' + g + '.emUsed '),
              (n +=
                ' && ' +
                g +
                '.keyword in ' +
                E +
                ' && ' +
                g +
                '.dataPath == ' +
                p +
                ' && ' +
                g +
                '.schemaPath.indexOf(' +
                k +
                ') == 0 && /^\\/[^\\/]*$/.test(' +
                g +
                '.schemaPath.slice(' +
                r.errSchemaPath.length +
                '))) { ' +
                x +
                ' = ' +
                R +
                '[' +
                g +
                '.keyword]; ' +
                S +
                ' = ' +
                E +
                '[' +
                g +
                '.keyword][' +
                g +
                '.params[' +
                x +
                ']]; if (' +
                S +
                ') { ' +
                S +
                '.push(' +
                g +
                ');  '),
              f.options.keepErrors
                ? (n += ' ' + g + '.emUsed = true; ')
                : (n += ' vErrors.splice(' + d + ', 1); errors--; '),
              (n +=
                ' } } else { ' +
                d +
                '++; } } for (var ' +
                v +
                ' in ' +
                E +
                ') { for (var ' +
                m +
                ' in ' +
                E +
                '[' +
                v +
                ']) { ' +
                S +
                ' = ' +
                E +
                '[' +
                v +
                '][' +
                m +
                ']; if (' +
                S +
                '.length) { var ' +
                P +
                ' =   ' +
                v +
                ' in ' +
                O +
                ' && ' +
                m +
                ' in ' +
                O +
                '[' +
                v +
                '] ? ' +
                O +
                '[' +
                v +
                '][' +
                m +
                '] () : validate.schema' +
                s +
                '[' +
                v +
                '][' +
                m +
                "];  var err = { keyword: '" +
                e +
                "' , dataPath: " +
                p +
                ' , schemaPath: ' +
                k +
                " + '/" +
                e +
                "' , params: { errors: " +
                S +
                ' } , message: ' +
                P +
                ' '),
              r.opts.verbose &&
                (n +=
                  ' , schema: validate.schema' +
                  s +
                  ' , parentSchema: validate.schema' +
                  r.schemaPath +
                  ' , data: ' +
                  u +
                  ' '),
              (n +=
                ' };  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } } ')
          }
          if (C || L) {
            if (
              ((n += ' var ' + _ + ' = Array.isArray(' + u + '); if '), C && L)
            ) {
              n += ' (typeof ' + u + " == 'object') { "
              var Z = '[' + b + ']'
              ;(n +=
                ' ' +
                d +
                ' = 0; if (' +
                _ +
                ') { var ' +
                b +
                " = 'items'; " +
                E +
                ' = ' +
                Di(j.items) +
                ';    '),
                (n += ' var ' + O + ' = { ')
              U = !1
              var J = li(j.items)
              if (J)
                for (var X = -1, ee = J.length - 1; X < ee; )
                  (D = J[(X += 1)]),
                    l.test(i.items[D]) &&
                      (U && (n += ','),
                      (n +=
                        r.util.toQuotedString(D) + ': ' + fe(i.items[D]) + ' '),
                      (U = !0))
              ;(n +=
                ' }; } else { var ' +
                b +
                " = 'properties'; " +
                E +
                ' =  ' +
                Di(j.properties) +
                ';    '),
                (n += ' var ' + O + ' = { ')
              U = !1
              var te = li(j.properties)
              if (te)
                for (var re = -1, ne = te.length - 1; re < ne; )
                  (D = te[(re += 1)]),
                    l.test(i.properties[D]) &&
                      (U && (n += ','),
                      (n +=
                        r.util.toQuotedString(D) +
                        ': ' +
                        fe(i.properties[D]) +
                        ' '),
                      (U = !0))
              n += ' }; } '
            } else if (C) {
              n += ' (typeof ' + u + " == 'object' && !" + _ + ') { '
              Z = '.properties'
              ;(n += ' ' + d + ' = 0; ' + E + ' = ' + Di(j.properties) + ';  '),
                (n += ' var ' + O + ' = { ')
              U = !1
              var ae = li(j.properties)
              if (ae)
                for (var oe = -1, ie = ae.length - 1; oe < ie; )
                  (D = ae[(oe += 1)]),
                    l.test(i.properties[D]) &&
                      (U && (n += ','),
                      (n +=
                        r.util.toQuotedString(D) +
                        ': ' +
                        fe(i.properties[D]) +
                        ' '),
                      (U = !0))
              n += ' }; '
            } else {
              n += ' (' + _ + ') { '
              Z = '.items'
              ;(n += ' ' + d + ' = 0; ' + E + ' = ' + Di(j.items) + ';  '),
                (n += ' var ' + O + ' = { ')
              U = !1
              var se = li(j.items)
              if (se)
                for (var ue = -1, le = se.length - 1; ue < le; )
                  (D = se[(ue += 1)]),
                    l.test(i.items[D]) &&
                      (U && (n += ','),
                      (n +=
                        r.util.toQuotedString(D) + ': ' + fe(i.items[D]) + ' '),
                      (U = !0))
              n += ' }; '
            }
            ;(n +=
              ' var ' +
              y +
              ', ' +
              w +
              '; while (' +
              d +
              ' < errors) { ' +
              g +
              ' = vErrors[' +
              d +
              ']; if (  ' +
              g +
              ".keyword != '" +
              e +
              "' "),
              f.options.keepErrors && (n += ' && !' + g + '.emUsed '),
              (n +=
                ' && ' +
                g +
                '.dataPath.indexOf(' +
                p +
                ') == 0 && (' +
                w +
                ' = ' +
                g +
                '.dataPath.slice(' +
                p +
                '.length).match(/^\\/([^\\/]*)(?:\\/|$)/), ' +
                y +
                ' = ' +
                w +
                ' && ' +
                w +
                "[1].replace(/~1/g, '/').replace(/~0/g, '~') ) !== undefined && " +
                y +
                ' in ' +
                E +
                ') { ' +
                E +
                '[' +
                y +
                '].push(' +
                g +
                ');  '),
              f.options.keepErrors
                ? (n += ' ' + g + '.emUsed = true; ')
                : (n += ' vErrors.splice(' + d + ', 1); errors--; '),
              (n +=
                ' } else { ' +
                d +
                '++; } } for (var ' +
                v +
                ' in ' +
                E +
                ') { if (' +
                E +
                '[' +
                v +
                "].length) { var err = { keyword: '" +
                e +
                "' , dataPath: " +
                p +
                " + '/' + " +
                v +
                ".replace(/~/g, '~0').replace(/\\//g, '~1') , schemaPath: " +
                k +
                " + '/" +
                e +
                "' , params: { errors: " +
                E +
                '[' +
                v +
                '] } , message: ' +
                v +
                ' in ' +
                O +
                ' ? ' +
                O +
                '[' +
                v +
                '] () : validate.schema' +
                s +
                Z +
                '[' +
                v +
                '] '),
              r.opts.verbose &&
                (n +=
                  ' , schema: validate.schema' +
                  s +
                  ' , parentSchema: validate.schema' +
                  r.schemaPath +
                  ' , data: ' +
                  u +
                  ' '),
              (n +=
                ' };  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } }  }  ')
          }
        }
        var he = 'string' == typeof i ? i : i._
        he &&
          ((n +=
            ' ' +
            d +
            ' = 0; ' +
            E +
            ' = []; while (' +
            d +
            ' < errors) { ' +
            g +
            ' = vErrors[' +
            d +
            ']; if (  ' +
            g +
            ".keyword != '" +
            e +
            "' "),
          f.options.keepErrors && (n += ' && !' + g + '.emUsed '),
          (n +=
            ' && (' +
            g +
            '.dataPath == ' +
            p +
            ' || (' +
            g +
            '.dataPath.indexOf(' +
            p +
            ') == 0 && ' +
            g +
            '.dataPath[' +
            p +
            ".length] == '/')) && " +
            g +
            '.schemaPath.indexOf(' +
            k +
            ') == 0 && ' +
            g +
            '.schemaPath[' +
            r.errSchemaPath.length +
            "] == '/') { " +
            E +
            '.push(' +
            g +
            ');  '),
          f.options.keepErrors
            ? (n += ' ' + g + '.emUsed = true; ')
            : (n += ' vErrors.splice(' + d + ', 1); errors--; '),
          (n +=
            ' } else { ' +
            d +
            '++; } } if (' +
            E +
            ".length) { var err = { keyword: '" +
            e +
            "' , dataPath: " +
            p +
            ' , schemaPath: ' +
            k +
            " + '/" +
            e +
            "' , params: { errors: " +
            E +
            ' } , message: ' +
            ce(he) +
            ' '),
          r.opts.verbose &&
            (n +=
              ' , schema: ' +
              r.util.toQuotedString(he) +
              ' , parentSchema: validate.schema' +
              r.schemaPath +
              ' , data: ' +
              u +
              ' '),
          (n +=
            ' };  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ')),
          (n += ' }')
      }
      function ce(e) {
        return (
          (e = r.util.escapeQuotes(e)),
          l.test(e)
            ? (
                "'" +
                e.replace(h, function(e, t) {
                  return (
                    "' + JSON.stringify(" +
                    r.util.getData(t, o, r.dataPathArr) +
                    ") + '"
                  )
                }) +
                "'"
              ).replace(c, '')
            : "'" + e + "'"
        )
      }
      function fe(e) {
        return 'function() { return ' + ce(e) + '; }'
      }
      return n
    },
    ip = function(e, t) {
      if (!e._opts.allErrors)
        throw new Error('ajv-errors: Ajv option allErrors must be true')
      return (
        e._opts.jsonPointers ||
          (console.warn('ajv-errors: Ajv option jsonPointers changed to true'),
          (e._opts.jsonPointers = !0)),
        e.addKeyword('errorMessage', {
          inline: op,
          statements: !0,
          valid: !0,
          errors: 'full',
          config: {
            KEYWORD_PROPERTY_PARAMS: {
              required: 'missingProperty',
              dependencies: 'property'
            },
            options: t || {}
          },
          metaSchema: {
            type: ['string', 'object'],
            properties: {
              properties: {$ref: '#/definitions/stringMap'},
              items: {$ref: '#/definitions/stringList'},
              required: {$ref: '#/definitions/stringOrMap'},
              dependencies: {$ref: '#/definitions/stringOrMap'}
            },
            additionalProperties: {type: 'string'},
            definitions: {
              stringMap: {
                type: ['object'],
                additionalProperties: {type: 'string'}
              },
              stringOrMap: {
                type: ['string', 'object'],
                additionalProperties: {type: 'string'}
              },
              stringList: {type: ['array'], items: {type: 'string'}}
            }
          }
        }),
        e
      )
    },
    sp = e(function(e) {
      var o, r
      ;(o = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'),
        (r = {
          rotl: function(e, t) {
            return (e << t) | (e >>> (32 - t))
          },
          rotr: function(e, t) {
            return (e << (32 - t)) | (e >>> t)
          },
          endian: function(e) {
            if (e.constructor == Number)
              return (16711935 & r.rotl(e, 8)) | (4278255360 & r.rotl(e, 24))
            for (var t = 0; t < e.length; t++) e[t] = r.endian(e[t])
            return e
          },
          randomBytes: function(e) {
            for (var t = []; 0 < e; e--) t.push(Math.floor(256 * Math.random()))
            return t
          },
          bytesToWords: function(e) {
            for (var t = [], r = 0, n = 0; r < e.length; r++, n += 8)
              t[n >>> 5] |= e[r] << (24 - (n % 32))
            return t
          },
          wordsToBytes: function(e) {
            for (var t = [], r = 0; r < 32 * e.length; r += 8)
              t.push((e[r >>> 5] >>> (24 - (r % 32))) & 255)
            return t
          },
          bytesToHex: function(e) {
            for (var t = [], r = 0; r < e.length; r++)
              t.push((e[r] >>> 4).toString(16)),
                t.push((15 & e[r]).toString(16))
            return t.join('')
          },
          hexToBytes: function(e) {
            for (var t = [], r = 0; r < e.length; r += 2)
              t.push(Na(e.substr(r, 2), 16))
            return t
          },
          bytesToBase64: function(e) {
            for (var t = [], r = 0; r < e.length; r += 3)
              for (
                var n = (e[r] << 16) | (e[r + 1] << 8) | e[r + 2], a = 0;
                a < 4;
                a++
              )
                8 * r + 6 * a <= 8 * e.length
                  ? t.push(o.charAt((n >>> (6 * (3 - a))) & 63))
                  : t.push('=')
            return t.join('')
          },
          base64ToBytes: function(e) {
            e = e.replace(/[^A-Z0-9+\/]/gi, '')
            for (var t = [], r = 0, n = 0; r < e.length; n = ++r % 4)
              0 != n &&
                t.push(
                  ((o.indexOf(e.charAt(r - 1)) &
                    (Math.pow(2, -2 * n + 8) - 1)) <<
                    (2 * n)) |
                    (o.indexOf(e.charAt(r)) >>> (6 - 2 * n))
                )
            return t
          }
        }),
        (e.exports = r)
    }),
    up = {
      utf8: {
        stringToBytes: function(e) {
          return up.bin.stringToBytes(unescape(encodeURIComponent(e)))
        },
        bytesToString: function(e) {
          return decodeURIComponent(escape(up.bin.bytesToString(e)))
        }
      },
      bin: {
        stringToBytes: function(e) {
          for (var t = [], r = 0; r < e.length; r++)
            t.push(255 & e.charCodeAt(r))
          return t
        },
        bytesToString: function(e) {
          for (var t = [], r = 0; r < e.length; r++)
            t.push(String.fromCharCode(e[r]))
          return t.join('')
        }
      }
    },
    lp = up,
    hp = function(e) {
      return (
        null != e &&
        (cp(e) ||
          ('function' == typeof (t = e).readFloatLE &&
            'function' == typeof t.slice &&
            cp(t.slice(0, 0))) ||
          !!e._isBuffer)
      )
      var t
    }
  function cp(e) {
    return (
      !!e.constructor &&
      'function' == typeof e.constructor.isBuffer &&
      e.constructor.isBuffer(e)
    )
  }
  var fp = e(function(e) {
      var y, b, w, _, n
      ;(y = sp),
        (b = lp.utf8),
        (w = hp),
        (_ = lp.bin),
        ((n = function e(t, r) {
          t.constructor == String
            ? (t =
                r && 'binary' === r.encoding
                  ? _.stringToBytes(t)
                  : b.stringToBytes(t))
            : w(t)
              ? (t = Array.prototype.slice.call(t, 0))
              : bn(t) || (t = t.toString())
          for (
            var n = y.bytesToWords(t),
              a = 8 * t.length,
              o = 1732584193,
              i = -271733879,
              s = -1732584194,
              u = 271733878,
              l = 0;
            l < n.length;
            l++
          )
            n[l] =
              (16711935 & ((n[l] << 8) | (n[l] >>> 24))) |
              (4278255360 & ((n[l] << 24) | (n[l] >>> 8)))
          ;(n[a >>> 5] |= 128 << a % 32), (n[14 + (((a + 64) >>> 9) << 4)] = a)
          var h = e._ff,
            c = e._gg,
            f = e._hh,
            p = e._ii
          for (l = 0; l < n.length; l += 16) {
            var d = o,
              v = i,
              m = s,
              g = u
            ;(i = p(
              (i = p(
                (i = p(
                  (i = p(
                    (i = f(
                      (i = f(
                        (i = f(
                          (i = f(
                            (i = c(
                              (i = c(
                                (i = c(
                                  (i = c(
                                    (i = h(
                                      (i = h(
                                        (i = h(
                                          (i = h(
                                            i,
                                            (s = h(
                                              s,
                                              (u = h(
                                                u,
                                                (o = h(
                                                  o,
                                                  i,
                                                  s,
                                                  u,
                                                  n[l + 0],
                                                  7,
                                                  -680876936
                                                )),
                                                i,
                                                s,
                                                n[l + 1],
                                                12,
                                                -389564586
                                              )),
                                              o,
                                              i,
                                              n[l + 2],
                                              17,
                                              606105819
                                            )),
                                            u,
                                            o,
                                            n[l + 3],
                                            22,
                                            -1044525330
                                          )),
                                          (s = h(
                                            s,
                                            (u = h(
                                              u,
                                              (o = h(
                                                o,
                                                i,
                                                s,
                                                u,
                                                n[l + 4],
                                                7,
                                                -176418897
                                              )),
                                              i,
                                              s,
                                              n[l + 5],
                                              12,
                                              1200080426
                                            )),
                                            o,
                                            i,
                                            n[l + 6],
                                            17,
                                            -1473231341
                                          )),
                                          u,
                                          o,
                                          n[l + 7],
                                          22,
                                          -45705983
                                        )),
                                        (s = h(
                                          s,
                                          (u = h(
                                            u,
                                            (o = h(
                                              o,
                                              i,
                                              s,
                                              u,
                                              n[l + 8],
                                              7,
                                              1770035416
                                            )),
                                            i,
                                            s,
                                            n[l + 9],
                                            12,
                                            -1958414417
                                          )),
                                          o,
                                          i,
                                          n[l + 10],
                                          17,
                                          -42063
                                        )),
                                        u,
                                        o,
                                        n[l + 11],
                                        22,
                                        -1990404162
                                      )),
                                      (s = h(
                                        s,
                                        (u = h(
                                          u,
                                          (o = h(
                                            o,
                                            i,
                                            s,
                                            u,
                                            n[l + 12],
                                            7,
                                            1804603682
                                          )),
                                          i,
                                          s,
                                          n[l + 13],
                                          12,
                                          -40341101
                                        )),
                                        o,
                                        i,
                                        n[l + 14],
                                        17,
                                        -1502002290
                                      )),
                                      u,
                                      o,
                                      n[l + 15],
                                      22,
                                      1236535329
                                    )),
                                    (s = c(
                                      s,
                                      (u = c(
                                        u,
                                        (o = c(
                                          o,
                                          i,
                                          s,
                                          u,
                                          n[l + 1],
                                          5,
                                          -165796510
                                        )),
                                        i,
                                        s,
                                        n[l + 6],
                                        9,
                                        -1069501632
                                      )),
                                      o,
                                      i,
                                      n[l + 11],
                                      14,
                                      643717713
                                    )),
                                    u,
                                    o,
                                    n[l + 0],
                                    20,
                                    -373897302
                                  )),
                                  (s = c(
                                    s,
                                    (u = c(
                                      u,
                                      (o = c(
                                        o,
                                        i,
                                        s,
                                        u,
                                        n[l + 5],
                                        5,
                                        -701558691
                                      )),
                                      i,
                                      s,
                                      n[l + 10],
                                      9,
                                      38016083
                                    )),
                                    o,
                                    i,
                                    n[l + 15],
                                    14,
                                    -660478335
                                  )),
                                  u,
                                  o,
                                  n[l + 4],
                                  20,
                                  -405537848
                                )),
                                (s = c(
                                  s,
                                  (u = c(
                                    u,
                                    (o = c(o, i, s, u, n[l + 9], 5, 568446438)),
                                    i,
                                    s,
                                    n[l + 14],
                                    9,
                                    -1019803690
                                  )),
                                  o,
                                  i,
                                  n[l + 3],
                                  14,
                                  -187363961
                                )),
                                u,
                                o,
                                n[l + 8],
                                20,
                                1163531501
                              )),
                              (s = c(
                                s,
                                (u = c(
                                  u,
                                  (o = c(
                                    o,
                                    i,
                                    s,
                                    u,
                                    n[l + 13],
                                    5,
                                    -1444681467
                                  )),
                                  i,
                                  s,
                                  n[l + 2],
                                  9,
                                  -51403784
                                )),
                                o,
                                i,
                                n[l + 7],
                                14,
                                1735328473
                              )),
                              u,
                              o,
                              n[l + 12],
                              20,
                              -1926607734
                            )),
                            (s = f(
                              s,
                              (u = f(
                                u,
                                (o = f(o, i, s, u, n[l + 5], 4, -378558)),
                                i,
                                s,
                                n[l + 8],
                                11,
                                -2022574463
                              )),
                              o,
                              i,
                              n[l + 11],
                              16,
                              1839030562
                            )),
                            u,
                            o,
                            n[l + 14],
                            23,
                            -35309556
                          )),
                          (s = f(
                            s,
                            (u = f(
                              u,
                              (o = f(o, i, s, u, n[l + 1], 4, -1530992060)),
                              i,
                              s,
                              n[l + 4],
                              11,
                              1272893353
                            )),
                            o,
                            i,
                            n[l + 7],
                            16,
                            -155497632
                          )),
                          u,
                          o,
                          n[l + 10],
                          23,
                          -1094730640
                        )),
                        (s = f(
                          s,
                          (u = f(
                            u,
                            (o = f(o, i, s, u, n[l + 13], 4, 681279174)),
                            i,
                            s,
                            n[l + 0],
                            11,
                            -358537222
                          )),
                          o,
                          i,
                          n[l + 3],
                          16,
                          -722521979
                        )),
                        u,
                        o,
                        n[l + 6],
                        23,
                        76029189
                      )),
                      (s = f(
                        s,
                        (u = f(
                          u,
                          (o = f(o, i, s, u, n[l + 9], 4, -640364487)),
                          i,
                          s,
                          n[l + 12],
                          11,
                          -421815835
                        )),
                        o,
                        i,
                        n[l + 15],
                        16,
                        530742520
                      )),
                      u,
                      o,
                      n[l + 2],
                      23,
                      -995338651
                    )),
                    (s = p(
                      s,
                      (u = p(
                        u,
                        (o = p(o, i, s, u, n[l + 0], 6, -198630844)),
                        i,
                        s,
                        n[l + 7],
                        10,
                        1126891415
                      )),
                      o,
                      i,
                      n[l + 14],
                      15,
                      -1416354905
                    )),
                    u,
                    o,
                    n[l + 5],
                    21,
                    -57434055
                  )),
                  (s = p(
                    s,
                    (u = p(
                      u,
                      (o = p(o, i, s, u, n[l + 12], 6, 1700485571)),
                      i,
                      s,
                      n[l + 3],
                      10,
                      -1894986606
                    )),
                    o,
                    i,
                    n[l + 10],
                    15,
                    -1051523
                  )),
                  u,
                  o,
                  n[l + 1],
                  21,
                  -2054922799
                )),
                (s = p(
                  s,
                  (u = p(
                    u,
                    (o = p(o, i, s, u, n[l + 8], 6, 1873313359)),
                    i,
                    s,
                    n[l + 15],
                    10,
                    -30611744
                  )),
                  o,
                  i,
                  n[l + 6],
                  15,
                  -1560198380
                )),
                u,
                o,
                n[l + 13],
                21,
                1309151649
              )),
              (s = p(
                s,
                (u = p(
                  u,
                  (o = p(o, i, s, u, n[l + 4], 6, -145523070)),
                  i,
                  s,
                  n[l + 11],
                  10,
                  -1120210379
                )),
                o,
                i,
                n[l + 2],
                15,
                718787259
              )),
              u,
              o,
              n[l + 9],
              21,
              -343485551
            )),
              (o = (o + d) >>> 0),
              (i = (i + v) >>> 0),
              (s = (s + m) >>> 0),
              (u = (u + g) >>> 0)
          }
          return y.endian([o, i, s, u])
        })._ff = function(e, t, r, n, a, o, i) {
          var s = e + ((t & r) | (~t & n)) + (a >>> 0) + i
          return ((s << o) | (s >>> (32 - o))) + t
        }),
        (n._gg = function(e, t, r, n, a, o, i) {
          var s = e + ((t & n) | (r & ~n)) + (a >>> 0) + i
          return ((s << o) | (s >>> (32 - o))) + t
        }),
        (n._hh = function(e, t, r, n, a, o, i) {
          var s = e + (t ^ r ^ n) + (a >>> 0) + i
          return ((s << o) | (s >>> (32 - o))) + t
        }),
        (n._ii = function(e, t, r, n, a, o, i) {
          var s = e + (r ^ (t | ~n)) + (a >>> 0) + i
          return ((s << o) | (s >>> (32 - o))) + t
        }),
        (n._blocksize = 16),
        (n._digestsize = 16),
        (e.exports = function(e, t) {
          if (null == e) throw new Error('Illegal argument ' + e)
          var r = y.wordsToBytes(n(e, t))
          return t && t.asBytes
            ? r
            : t && t.asString
              ? _.bytesToString(r)
              : y.bytesToHex(r)
        })
    }),
    pp = Uf({allErrors: !0, jsonPointers: !0})
  ip(pp)
  var dp = pp.compile({
      type: 'object',
      properties: {
        type: {
          type: 'string',
          pattern: '^([A-Z][a-zA-Z]*)+$',
          maxLength: 50,
          minLength: 1,
          errorMessage: {
            type:
              'Entity type must be a string that starts with a capital letter like [C]ar or [U]ser',
            maxLength:
              'Entity type must be a non-empty string of 50 characters or less',
            minLength:
              'Entity type must be a non-empty string of 50 characters or less'
          }
        },
        isGroup: {
          type: 'boolean',
          errorMessage: {type: '`isGroup` must be a boolean'}
        },
        id: {
          type: ['string', 'integer'],
          pattern: '^[ -~]+$',
          maxLength: 250,
          minLength: 1,
          errorMessage: {
            type:
              "An entity's `id` must be a string or integer. An integer `id` will be cast into a string.",
            maxLength:
              "An entity's `id` must be a non-empty string of 250 characters or less.",
            minLength:
              "An entity's `id` must be a non-empty string of 250 characters or less."
          }
        },
        displayName: {
          type: 'string',
          maxLength: 250,
          minLength: 1,
          errorMessage: {
            type: "An entity's `displayName` must be a string",
            maxLength:
              "An entity's `displayName` must be a non-empty string of 250 characters or less.",
            minLength:
              "An entity's `displayName` must be a non-empty string of 250 characters or less."
          }
        },
        attributes: {
          type: 'object',
          patternProperties: {
            '^[a-zA-Z]$|^[a-zA-Z_]{0,48}[a-zA-Z]$': {
              oneOf: [
                {
                  type: 'string',
                  maxLength: 3e3,
                  errorMessage: {
                    type:
                      "An entity's attribute value must be a string, boolean, or number.",
                    maxLength:
                      "An entity's string attribute must be 3000 characters or less."
                  }
                },
                {
                  type: 'boolean',
                  errorMessage: {
                    type:
                      "An entity's attribute value must be a string, boolean, or number."
                  }
                },
                {
                  type: 'number',
                  errorMessage: {
                    type:
                      "An entity's attribute value must be a string, boolean, or number."
                  }
                }
              ],
              errorMessage: {
                oneOf:
                  "An entity's attribute value must be a string, boolean, or number."
              }
            }
          },
          maxProperties: 100,
          additionalProperties: !1,
          errorMessage: {
            maxProperties:
              'There can only be up to 100 attributes for an entity.',
            additionalProperties:
              'Each attribute must begin and end with an alphabet letter (a-z, A-Z). In between, allowed characters are a-z, A-Z, and "_". For example: isStudent or is_student. Preceding or trailing underscore is not allowed (i.e., _is_student or is_student_). Each attribute value must be a number, string or boolean.'
          }
        },
        group: {
          type: ['object', 'null'],
          properties: {
            type: {
              type: 'string',
              pattern: '^([A-Z][a-zA-Z]*)+$',
              maxLength: 50,
              minLength: 1,
              errorMessage: {
                type:
                  'Group type must be a string that starts with a capital letter like [C]arGroup or [U]serGroup. Camel casing is used to separate words.',
                maxLength:
                  'Group type must be a non-empty string of 50 characters or less',
                minLength:
                  'Group type must be a non-empty string of 50 characters or less'
              }
            },
            isGroup: {
              type: 'boolean',
              enum: [!0],
              errorMessage: {
                type: '`isGroup` must be a boolean',
                enum: '`isGroup` must always be true for an group'
              }
            },
            id: {
              type: ['string', 'integer'],
              pattern: '^[ -~]+$',
              maxLength: 250,
              minLength: 1,
              errorMessage: {
                type:
                  "A group's `id` must be a string or integer. An integer `id` will be cast into a string.",
                maxLength:
                  "A group's `id` must be a non-empty string of 250 characters or less.",
                minLength:
                  "A group's `id` must be a non-empty string of 250 characters or less."
              }
            },
            displayName: {
              type: 'string',
              maxLength: 250,
              minLength: 1,
              errorMessage: {
                type: "A group's `displayName` must be a string",
                maxLength:
                  "A group's `displayName` must be a non-empty string of 250 characters or less.",
                minLength:
                  "A group's `displayName` must be a non-empty string of 250 characters or less."
              }
            },
            attributes: {
              type: 'object',
              patternProperties: {
                '^[a-zA-Z]$|^[a-zA-Z_]{0,48}[a-zA-Z]$': {
                  oneOf: [
                    {
                      type: 'string',
                      maxLength: 3e3,
                      errorMessage: {
                        type:
                          "A group's attribute value must be a string, boolean, or number.",
                        maxLength:
                          "A group's string attribute must be 3000 characters or less."
                      }
                    },
                    {
                      type: 'boolean',
                      errorMessage: {
                        type:
                          "A group's attribute value must be a string, boolean, or number."
                      }
                    },
                    {
                      type: 'number',
                      errorMessage: {
                        type:
                          "A group's attribute value must be a string, boolean, or number."
                      }
                    }
                  ],
                  errorMessage: {
                    oneOf:
                      "A group's attribute value must be a string, boolean, or number."
                  }
                }
              },
              maxProperties: 100,
              additionalProperties: !1,
              errorMessage: {
                additionalProperties:
                  'Each attribute must begin and end with an alphabet letter (a-z, A-Z). In between, allowed characters are a-z, A-Z, and "_". For example: isStudent or is_student. Preceding or trailing underscore is not allowed (i.e., _is_student or is_student_). Each attribute value must be a number, string or boolean.'
              }
            }
          },
          required: ['id'],
          additionalProperties: !1,
          errorMessage: {
            required: 'Each group must have an `id` field.',
            additionalProperties:
              'Allowed properties for a group are: `type`, `id`, `displayName`, `attributes`, and `isGroup`. `id` is required, rest are optional.'
          }
        }
      },
      required: ['id'],
      additionalProperties: !1,
      errorMessage: {
        type: 'An entity is represented using a dictionary',
        required: 'Each entity must have an `id` field.',
        additionalProperties:
          'Allowed properties for an entity are: `type`, `id`, `displayName`, `attributes`, `group`, and `isGroup`. `id` is required, rest are optional.'
      }
    }),
    vp = (function() {
      function r(e) {
        de(this, r)
        var t = r.isValidObject(e)
        t
          ? ((e = r._cloneObject(e)),
            (t = r._fillInFields(e)),
            (this.object = t ? e : null))
          : (this.object = null)
      }
      return (
        me(
          r,
          [
            {
              key: 'getHash',
              value: function() {
                return fp(
                  Rc(
                    ye({}, this.object, {
                      attributes: this.object.attributes || {},
                      group: ye({}, this.object.group, {
                        attributes:
                          (this.object.group && this.object.group.attributes) ||
                          {}
                      })
                    })
                  )
                )
              }
            },
            {
              key: 'getId',
              value: function() {
                var e = this.object
                return ''.concat(e.type, '_').concat(e.id)
              }
            },
            {
              key: 'isValid',
              value: function() {
                return null !== this.object
              }
            },
            {
              key: 'getRawObject',
              value: function() {
                return this.object
              }
            },
            {
              key: 'getObject',
              value: function() {
                var e = this.object,
                  t = ee({}, e)
                return delete t.group, new r(t)
              }
            },
            {
              key: 'getGroup',
              value: function() {
                var e = this.object.group || null
                return e && new r(e)
              }
            }
          ],
          [
            {
              key: 'isValidObject',
              value: function(e) {
                var t = dp(e)
                if (
                  (t ||
                    gn(
                      dp.errors.map(function(e) {
                        return e.message
                      })
                    ),
                  t)
                ) {
                  var r = void 0 !== e.isGroup && e.isGroup,
                    n = void 0 !== e.type ? e.type : 'User',
                    a = n.lastIndexOf('Group')
                  ;-1 === a ||
                    a !== n.length - 'Group'.length ||
                    r ||
                    (gn(
                      "An entity's type that ends with `Group` must be a group entity and therefore has to have an explicit `isGroup: true` property"
                    ),
                    (t = !1))
                }
                return t
              }
            },
            {
              key: '_cloneObject',
              value: function(e) {
                var t = ee({}, e)
                return (
                  void 0 !== e.attributes &&
                    (t.attributes = ee({}, e.attributes)),
                  void 0 !== e.group &&
                    ((t.group = ee({}, e.group)),
                    void 0 !== e.group.attributes &&
                      (t.group.attributes = ee({}, e.group.attributes))),
                  t
                )
              }
            },
            {
              key: '_fillInFields',
              value: function(e) {
                if (
                  (void 0 === e.type && (e.type = 'User'),
                  void 0 === e.displayName && (e.displayName = '' + e.id),
                  void 0 === e.isGroup && (e.isGroup = !1),
                  Eh(e.id))
                ) {
                  var t = '' + e.id
                  if (250 < t.length)
                    return gn('Integer id must have 250 digits or less'), !1
                  e.id = t
                }
                var r = null
                if (
                  (void 0 !== e.group && (r = e.group),
                  null !== r &&
                    void 0 === r.displayName &&
                    (r.displayName = '' + r.id),
                  null !== r &&
                    void 0 === r.type &&
                    (r.type = e.type + 'Group'),
                  null !== r && (r.isGroup = !0),
                  null !== r && Eh(r.id))
                ) {
                  var n = '' + r.id
                  if (250 < n.length)
                    return gn('Integer id must have 250 digits or less'), !1
                  r.id = n
                }
                return !0
              }
            }
          ]
        ),
        r
      )
    })(),
    mp = v.parseFloat,
    gp = Da.trim,
    yp =
      1 / mp(Ta + '-0') != -1 / 0
        ? function(e) {
            var t = gp(String(e), 3),
              r = mp(t)
            return 0 === r && '-' == t.charAt(0) ? -0 : r
          }
        : mp
  S(S.G + S.F * (parseFloat != yp), {parseFloat: yp})
  var bp,
    wp = m.parseFloat,
    _p = 'boolean',
    Ep = 'datetime',
    Pp = 'is',
    Sp = 'is_not',
    xp = 'in',
    Rp = 'not_in',
    Op = 'from',
    kp = 'until',
    Tp = 'after',
    Ap = 'before',
    jp = function(e) {
      return (1 * Na(fp(e), 16)) / 3402823669209385e23
    },
    Ip = (function() {
      function f(e) {
        de(this, f), (this.population = e)
      }
      return (
        me(
          f,
          [
            {
              key: '_ruleMatches',
              value: function(e, t) {
                var r = t.attributes || {}
                if (!r.hasOwnProperty(e.attributeName)) return !1
                var n = r[e.attributeName],
                  a = f.categorizeValueType(n),
                  o = ['int', 'float']
                if (-1 !== o.indexOf(a) && -1 !== o.indexOf(e.attributeType));
                else if (a !== e.attributeType) return !1
                var i = e.value,
                  s = e.valueList,
                  u = e.operator
                if ('string' === a)
                  return u === Pp
                    ? n === i
                    : u === Sp
                      ? n !== i
                      : u === xp
                        ? -1 !== s.indexOf(n)
                        : u === Rp
                          ? -1 === s.indexOf(n)
                          : (gn('Invalid rule operator encountered'), !1)
                if (-1 !== o.indexOf(a))
                  return u === Pp
                    ? n === i
                    : u === Sp
                      ? n !== i
                      : u === xp
                        ? -1 !== s.indexOf(n)
                        : u === Rp
                          ? -1 === s.indexOf(n)
                          : 'lt' === u
                            ? n < i
                            : 'lte' === u
                              ? n <= i
                              : 'gt' === u
                                ? i < n
                                : 'gte' === u
                                  ? i <= n
                                  : (gn('Invalid rule operator encountered'),
                                    !1)
                if (a === _p)
                  return u === Pp
                    ? n === i
                    : u === Sp
                      ? n !== i
                      : (gn('Invalid rule operator encountered'), !1)
                if ('date' !== a && a !== Ep)
                  return gn('Invalid attribute type encountered'), !1
                var l = i && new Date(i).getTime(),
                  h =
                    s &&
                    s.map(function(e) {
                      return new Date(e).getTime()
                    }),
                  c = new Date(n).getTime()
                return u === Pp
                  ? c === l
                  : u === Sp
                    ? c !== l
                    : u === xp
                      ? -1 !== h.indexOf(c)
                      : u === Rp
                        ? -1 === h.indexOf(c)
                        : u === Op
                          ? l <= c
                          : u === kp
                            ? c <= l
                            : u === Tp
                              ? l < c
                              : u === Ap
                                ? c < l
                                : (gn('Invalid rule operator encountered'), !1)
              }
            },
            {
              key: 'getGateValues',
              value: function(e, t, r, n) {
                var a = this.population
                if (this.population.entityType !== e.type) return {eligible: !1}
                for (
                  var o = n
                      ? this.population.universes[
                          Math.floor(Na(100 * this.population.percentage)) - 1
                        ]
                      : r.splits,
                    i = {},
                    s = 0;
                  s < o.length;
                  s++
                ) {
                  var u = o[s]
                  i[u.treatmentId] = u
                }
                for (var l = a.rules, h = !0, c = 0; c < l.length; c++) {
                  var f = l[c]
                  h = h && this._ruleMatches(f, e)
                }
                if (h) {
                  var p = 'SAMPLING:control_'
                    .concat(r.hashKey, ':env_')
                    .concat(t.hashKey, ':rule_set_')
                    .concat(this.population.hashKey, ':client_object_')
                    .concat(e.type, '_')
                    .concat(e.id)
                  if (jp(p) <= this.population.percentage) {
                    if (0 === this.population.percentage) return {eligible: !1}
                    for (
                      var d = 'DISTRIBUTION:control_'
                          .concat(r.hashKey, ':env_')
                          .concat(t.hashKey, ':client_object_')
                          .concat(e.type, '_')
                          .concat(e.id),
                        v = jp(d),
                        m = 0,
                        g = r.treatments.filter(function(e) {
                          return !e.isOffTreatment
                        }),
                        y = null,
                        b = 0;
                      b < g.length;
                      b++
                    ) {
                      var w = g[b]
                      if (
                        i.hasOwnProperty(w.treatmentId) &&
                        v <=
                          (m = wp((m + i[w.treatmentId].percentage).toFixed(3)))
                      ) {
                        y = w
                        break
                      }
                    }
                    return {treatment: y, eligible: !0}
                  }
                  return {eligible: !0}
                }
                return {eligible: !1}
              }
            }
          ],
          [
            {
              key: 'categorizeValueType',
              value: function(e) {
                if (!0 === e || !1 === e) return 'boolean'
                if ('number' == typeof e)
                  return 0 <= (e + '').indexOf('.') ? 'float' : 'int'
                if ('string' != typeof e)
                  return gn('Unexpected attribute value type encountered'), null
                var t = new Date(e).getTime()
                if (isNaN(t)) return 'string'
                var r = new Date(e).toISOString(),
                  n = r.lastIndexOf('T00:00:00.000Z')
                return -1 !== n && r.length - 'T00:00:00.000Z'.length === n
                  ? 'date'
                  : 'datetime'
              }
            }
          ]
        ),
        f
      )
    })(),
    Cp = W.f,
    Lp = ((bp = !1),
    function(e) {
      for (var t, r = T(e), n = K(r), a = n.length, o = 0, i = []; o < a; )
        Cp.call(r, (t = n[o++])) && i.push(bp ? [t, r[t]] : r[t])
      return i
    })
  S(S.S, 'Object', {
    values: function(e) {
      return Lp(e)
    }
  })
  var Dp = m.Object.values,
    Fp = (function() {
      function a(e, t) {
        if ((de(this, a), -1 === [a.TYPE_DURATION, a.TYPE_COUNT].indexOf(t)))
          throw 'Invalid stat type passed'
        ;(this.name = e),
          (this.type = t),
          (this.count = 0),
          (this.startTime = null),
          (this.averageDuration = 0)
      }
      return (
        me(a, null, [
          {
            key: 'compactStats',
            value: function(e) {
              var t = e.reduce(function(e, t) {
                var r = [t.name, t.type].join(',')
                return (e[r] = e[r] || []), e[r].push(t), e
              }, {})
              return Dp(t).map(function(e) {
                var t = new a(e[0].name, e[0].type)
                switch (t.type) {
                  case a.TYPE_DURATION:
                    var r = e.reduce(function(e, t) {
                        return e + t.averageDuration * t.count
                      }, 0),
                      n = e.reduce(function(e, t) {
                        return e + t.count
                      }, 0)
                    t.setAverageDuration(r / n), t.setCount(n)
                    break
                  case a.TYPE_COUNT:
                    t.setCount(
                      e.reduce(function(e, t) {
                        return e + t.count
                      }, 0)
                    )
                }
                return t
              })
            }
          }
        ]),
        me(a, [
          {
            key: 'start',
            value: function() {
              if (0 !== this.averageDuration)
                throw 'Duration already calculated'
              if (null !== this.startTime) throw 'Stat start() already called'
              return (this.startTime = ka.hrtime()), this
            }
          },
          {
            key: 'stop',
            value: function() {
              if (0 !== this.averageDuration)
                throw 'Duration already calculated'
              if (null === this.startTime)
                throw 'Stat start() has not been called'
              var e = ka.hrtime(this.startTime)
              return (
                (this.averageDuration = 1e9 * e[0] + e[1]),
                (this.count = 1),
                this
              )
            }
          },
          {
            key: 'setCount',
            value: function(e) {
              return (this.count = e), this
            }
          },
          {
            key: 'setAverageDuration',
            value: function(e) {
              return (this.averageDuration = e), this
            }
          },
          {
            key: 'getDuration',
            value: function() {
              return this.averageDuration
            }
          },
          {
            key: 'getStatsObj',
            value: function() {
              var e = {name: this.name}
              if (this.type === a.TYPE_DURATION) {
                if (0 !== this.averageDuration)
                  return (
                    (e.duration = this.averageDuration),
                    (e.unit = 'ns'),
                    (e.count = this.count),
                    e
                  )
              } else if (this.type === a.TYPE_COUNT)
                return (e.count = this.count), e
              return null
            }
          }
        ]),
        a
      )
    })()
  ;(Fp.TYPE_DURATION = 'stat_type__duration'),
    (Fp.TYPE_COUNT = 'stat_type__count')
  var Mp = (function() {
      function e() {
        de(this, e)
      }
      var t, r
      return (
        me(e, [
          {
            key: 'identify',
            value: function(e) {
              this.object = e
            }
          },
          {
            key: 'maybeIngest',
            value: ((r = fe(
              mn.mark(function e() {
                return mn.wrap(
                  function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                        case 'end':
                          return e.stop()
                      }
                  },
                  e,
                  this
                )
              })
            )),
            function() {
              return r.apply(this, arguments)
            })
          },
          {
            key: '_identifyObject',
            value: function(e) {
              return e instanceof vp ? e : new vp(e)
            }
          },
          {key: '_saveStat', value: function() {}},
          {key: '_saveExposure', value: function() {}},
          {
            key: 'publish',
            value: ((t = fe(
              mn.mark(function e(t) {
                return mn.wrap(
                  function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                        case 'end':
                          return e.stop()
                      }
                  },
                  e,
                  this
                )
              })
            )),
            function(e) {
              return t.apply(this, arguments)
            })
          },
          {key: 'shutdown', value: function() {}},
          {
            key: 'flag',
            value: function(e) {
              var t = this.router.getFlag(e)
              return t.setDelegate(this), t
            }
          },
          {
            key: '_getAllocation',
            value: function(e, t) {
              var r = e.offTreatment
              if (e.isArchived())
                return (
                  gn('The flag "'.concat(e.codename, '" has been archived')),
                  {treatment: r, eligible: !1}
                )
              if (e.isPaused) return {treatment: r, eligible: !1}
              if (!t) return {treatment: r, eligible: !1}
              var n = t.getId(),
                a = e.overrides[n]
              if (a) {
                var o = e.treatmentsMap[a.treatmentId]
                return {
                  treatment: o,
                  eligible: !o.isOffTreatment,
                  fromOverride: !0
                }
              }
              for (
                var i = t.getRawObject(),
                  s = 'experiment' === e.getType(),
                  u = e.populations,
                  l = null,
                  h = !1,
                  c = 0;
                c < u.length;
                c++
              ) {
                var f = new Ip(u[c]).getGateValues(
                  i,
                  this.router.getEnv(),
                  e,
                  s
                )
                if (((h = h || f.eligible), f.treatment)) {
                  l = f.treatment
                  break
                }
              }
              return {treatment: l || r, eligible: h}
            }
          },
          {
            key: '_resolveAllocations',
            value: function(e, t) {
              return e.fromOverride
                ? e
                : t.fromOverride
                  ? t
                  : e.treatment.isOffTreatment
                    ? t.treatment.isOffTreatment
                      ? e
                      : t
                    : e
            }
          },
          {
            key: '_getExposure',
            value: function(e, t) {
              var r = e.getRawObject()
              return {
                type: r.type,
                id: r.id,
                treatmentId: t.treatment.treatmentId,
                treatment: t.treatment.codename
              }
            }
          },
          {
            key: 'getTreatment',
            value: function(e, t) {
              var r = new Fp('duration__get_treatment', Fp.TYPE_DURATION)
              r.start(), (t = t || this.object)
              var n = this._identifyObject(t)
              if (!n.isValid() || e.isUncategorized()) return 'off'
              var a = this._getAllocation(e, n),
                o = this._getAllocation(e, n.getGroup()),
                i = this._resolveAllocations(a, o),
                s = this._getExposure(n, i)
              return (
                this._saveExposure(s),
                r.stop(),
                this._saveStat(r),
                i.treatment.codename
              )
            }
          },
          {
            key: 'getPayload',
            value: function(e, t) {
              var r = new Fp('duration__get_payload', Fp.TYPE_DURATION)
              r.start(), (t = t || this.object)
              var n = this._identifyObject(t)
              if (!n.isValid() || e.isUncategorized()) return null
              var a = this._getAllocation(e, n),
                o = this._getAllocation(e, n.getGroup()),
                i = this._resolveAllocations(a, o)
              return r.stop(), this._saveStat(r), i.treatment.payload
            }
          },
          {
            key: 'isEligible',
            value: function(e, t) {
              var r = new Fp('duration__is_eligible', Fp.TYPE_DURATION)
              r.start(), (t = t || this.object)
              var n = this._identifyObject(t)
              if (!n.isValid() || e.isUncategorized()) return !1
              var a = this._getAllocation(e, n),
                o = this._getAllocation(e, n.getGroup()),
                i = this._resolveAllocations(a, o)
              return r.stop(), this._saveStat(r), i.eligible
            }
          },
          {
            key: 'isEnabled',
            value: function(e, t) {
              var r = new Fp('duration__is_enabled', Fp.TYPE_DURATION)
              r.start(), (t = t || this.object)
              var n = this._identifyObject(t)
              if (!n.isValid() || e.isUncategorized()) return !1
              var a = this._getAllocation(e, n),
                o = this._getAllocation(e, n.getGroup()),
                i = this._resolveAllocations(a, o)
              return r.stop(), this._saveStat(r), !i.treatment.isOffTreatment
            }
          }
        ]),
        e
      )
    })(),
    $p = function e(t, r) {
      if ((de(this, e), null == t))
        throw 'Cannot have an undefined or null key for a LRUNode'
      if (null == r)
        throw 'Cannot have an undefined or null value for a LRUNode'
      ;(this.key = t), (this.value = r), (this.prev = null), (this.next = null)
    },
    Up = (function() {
      function t(e) {
        de(this, t),
          (this.size = 0),
          (this.limit = 'number' == typeof e ? e : 10),
          (this.map = {}),
          (this.head = null),
          (this.tail = null)
      }
      return (
        me(t, [
          {
            key: 'setHead',
            value: function(e) {
              ;(e.next = this.head),
                (e.prev = null) !== this.head && (this.head.prev = e),
                (this.head = e),
                null === this.tail && (this.tail = e),
                this.size++,
                (this.map[e.key] = e)
            }
          },
          {
            key: 'set',
            value: function(e, t) {
              var r = new $p(e, t)
              this.map[e]
                ? ((this.map[e].value = r.value), this.remove(r.key))
                : this.size >= this.limit &&
                  (delete this.map[this.tail.key],
                  this.size--,
                  (this.tail = this.tail.prev),
                  (this.tail.next = null)),
                this.setHead(r)
            }
          },
          {
            key: 'get',
            value: function(e) {
              if (this.map[e]) {
                var t = this.map[e].value,
                  r = new $p(e, t)
                return this.remove(e), this.setHead(r), t
              }
              return null
            }
          },
          {
            key: 'remove',
            value: function(e) {
              var t = this.map[e]
              null !== t.prev ? (t.prev.next = t.next) : (this.head = t.next),
                null !== t.next ? (t.next.prev = t.prev) : (this.tail = t.prev),
                delete this.map[e],
                this.size--
            }
          },
          {
            key: 'removeAll',
            value: function(e) {
              ;(this.size = 0),
                (this.map = {}),
                (this.head = null),
                (this.tail = null),
                'number' == typeof e && (this.limit = e)
            }
          },
          {
            key: 'forEach',
            value: function(e) {
              for (var t = this.head, r = 0; t; ) e(t, r), r++, (t = t.next)
            }
          }
        ]),
        t
      )
    })(),
    Np = (function() {
      function r(e, t) {
        de(this, r),
          'string' == typeof e
            ? ((this._isWild = !0), (this.flagName = e))
            : ((this.hashKey = e.hashKey),
              (this.flag = e),
              (this.codename = e.codename),
              (this.isPaused = e.isPaused),
              (this.offTreatment = e.offTreatment),
              (this.treatments = e.treatments),
              (this.treatmentsMap = e.treatmentsMap),
              (this.overrides = e.overrides),
              (this.populations = e.populations),
              (this.splits = e.splits)),
          (this.delegate = t)
      }
      return (
        me(r, [
          {
            key: 'isUncategorized',
            value: function() {
              return (
                Boolean(this._isWild) || 'uncategorized' === this.flag.flagType
              )
            }
          },
          {
            key: 'isWild',
            value: function() {
              return Boolean(this._isWild)
            }
          },
          {
            key: 'isArchived',
            value: function() {
              return 'archived' === this.flag.flagStatus
            }
          },
          {
            key: 'setDelegate',
            value: function(e) {
              this.delegate = e
            }
          },
          {
            key: 'getType',
            value: function() {
              if (this._isWild)
                return (
                  gn(
                    'Encountered uncategorized flag "'.concat(
                      this.flagName,
                      '". Visit Airship web app to convert it to a real flag'
                    )
                  ),
                  'uncategorized'
                )
              switch (this.flag.flagType) {
                case 'basic':
                  return 'basic'
                case 'experiment':
                  return 'experiment'
                case 'uncategorized':
                  return 'uncategorized'
                default:
                  return gn('Unexpected flag type encountered'), null
              }
            }
          },
          {
            key: 'getTreatment',
            value: function(e) {
              if (!this.delegate) throw 'Delegate not provided to flag'
              return this.delegate.getTreatment(this, e)
            }
          },
          {
            key: 'getPayload',
            value: function(e) {
              if (!this.delegate) throw 'Delegate not provided to flag'
              return this.delegate.getPayload(this, e)
            }
          },
          {
            key: 'isEligible',
            value: function(e) {
              if (!this.delegate) throw 'Delegate not provided to flag'
              return this.delegate.isEligible(this, e)
            }
          },
          {
            key: 'isEnabled',
            value: function(e) {
              if (!this.delegate) throw 'Delegate not provided to flag'
              return this.delegate.isEnabled(this, e)
            }
          }
        ]),
        r
      )
    })(),
    zp = (function() {
      function t(e) {
        de(this, t),
          (this.gatingInfo = e),
          (this.gatingInfoMap = this._getGatingInfoMap(this.gatingInfo))
      }
      return (
        me(t, [
          {
            key: '_getGatingInfoMap',
            value: function(e) {
              for (var t = {}, r = e.flags, n = 0; n < r.length; n++) {
                var a = ee({}, r[n])
                if (
                  'uncategorized' !== a.flagType &&
                  'archived' !== a.flagStatus
                ) {
                  for (var o = a.overrides, i = {}, s = 0; s < o.length; s++) {
                    var u = o[s]
                    i[''.concat(u.entityType, '_').concat(u.entityId)] = u
                  }
                  a.overrides = i
                  for (
                    var l = a.treatments, h = {}, c = null, f = 0;
                    f < l.length;
                    f++
                  ) {
                    var p = l[f]
                    ;(h[p.treatmentId] = p).isOffTreatment && (c = p)
                  }
                  ;(a.treatments = l),
                    (a.treatmentsMap = h),
                    (a.offTreatment = c),
                    (t[a.codename] = new Np(a))
                } else t[a.codename] = new Np(a)
              }
              return t
            }
          },
          {
            key: 'getIngestionMaxItem',
            value: function() {
              var e = this.gatingInfo.sdkInfo
              return e ? e.SDK_INGESTION_MAX_ITEMS : null
            }
          },
          {
            key: 'getIngestionInterval',
            value: function() {
              var e = this.gatingInfo.sdkInfo
              return e ? 1e3 * e.SDK_INGESTION_INTERVAL : null
            }
          },
          {
            key: 'getFlag',
            value: function(e) {
              return this.gatingInfoMap[e] || new Np(e)
            }
          },
          {
            key: 'getEnv',
            value: function() {
              return this.gatingInfo.env
            }
          },
          {
            key: 'isLocallyConfigured',
            value: function() {
              return null === this.getEnv().envKey
            }
          }
        ]),
        t
      )
    })(),
    qp = 'https://api.airshiphq.com',
    Bp = ''.concat(qp, '/v2/identify'),
    Hp = ''.concat(qp, '/v2/gating-info'),
    Vp = ''.concat('https://sse.airshiphq.com', '/v2/sse-events'),
    Qp = ''.concat('https://backup-api.airshiphq.com', '/v2/gating-info'),
    Gp = (function(e) {
      function r(e) {
        var t
        return (
          de(this, r),
          ((t = Pe(this, we(r).call(this))).gatingInfoListener = e),
          t
        )
      }
      var t, n, a, o, i, s
      return (
        be(r, Mp),
        me(r, [
          {
            key: 'init',
            value: function() {
              ;(this.ingestionMaxItems = 500),
                (this.ingestionInterval = 3e4),
                (this.objects = []),
                (this.stats = []),
                (this.exposures = []),
                (this.flags = new ta()),
                (this.oldFlags = new ta()),
                (this.objectLRUCache = new Up(500)),
                (this.firstIngestion = !0),
                this.restartIngestionWorker()
            }
          },
          {
            key: 'restartIngestionWorker',
            value: function() {
              var e = this
              this.ingestionWorker && clearInterval(this.ingestionWorker),
                (this.ingestionWorker = setInterval(function() {
                  e.maybeIngest(!0)
                }, this.ingestionInterval))
            }
          },
          {
            key: 'maybeIngest',
            value: ((s = fe(
              mn.mark(function e() {
                var t,
                  r,
                  n,
                  a,
                  o,
                  i,
                  s = this,
                  u = arguments
                return mn.wrap(
                  function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((t = 0 < u.length && void 0 !== u[0] && u[0]),
                            (r =
                              t ||
                              this.objects.length >= this.ingestionMaxItems ||
                              this.stats.length >= this.ingestionMaxItems ||
                              this.exposures.length >= this.ingestionMaxItems ||
                              0 < this.flags.size),
                            this.firstIngestion &&
                              ((r = r || 0 < this.objects.length),
                              (this.firstIngestion = !r)),
                            0 === this.objects.length &&
                              0 === this.stats.length &&
                              0 === this.exposures.length &&
                              0 === this.flags.size &&
                              (r = !1),
                            r)
                          )
                            return (
                              (n = this.objects),
                              (a = this.stats),
                              (o = this.exposures),
                              (i = qn(this.flags)).forEach(function(e) {
                                s.oldFlags.add(e)
                              }),
                              (this.objects = []),
                              (this.stats = []),
                              (this.exposures = []),
                              (this.flags = new ta()),
                              (e.next = 16),
                              wh
                                .post(Bp + '/' + this.envKey)
                                .type('application/json')
                                .timeout(1e4)
                                .send({
                                  objects: n,
                                  stats: a
                                    .map(function(e) {
                                      return e.getStatsObj()
                                    })
                                    .filter(function(e) {
                                      return null !== e
                                    }),
                                  exposures: o,
                                  flags: i,
                                  sdkInfo: {name: 'js', version: '2.0.1'}
                                })
                                .then(function(e) {
                                  e.ok ||
                                    gn('Something went wrong. Ingestion failed')
                                })
                                .catch(function(e) {
                                  gn(e.message)
                                })
                            )
                          e.next = 16
                          break
                        case 16:
                        case 'end':
                          return e.stop()
                      }
                  },
                  e,
                  this
                )
              })
            )),
            function() {
              return s.apply(this, arguments)
            })
          },
          {
            key: '_identifyObject',
            value: function(e) {
              var t = Mp.prototype._identifyObject.call(this, e)
              if (!t.isValid()) return t
              var r = t.getId(),
                n = t.getHash(),
                a = this.objectLRUCache.get(r)
              return (
                (null !== a && n === a) || this.objects.push(t.getRawObject()),
                this.objectLRUCache.set(r, n),
                this.maybeIngest(),
                t
              )
            }
          },
          {
            key: '_compactStats',
            value: function() {
              this.stats = Fp.compactStats(this.stats)
            }
          },
          {
            key: '_saveStat',
            value: function(e) {
              this.stats.push(e),
                this.stats.length >= this.ingestionMaxItems &&
                  this._compactStats(),
                this.maybeIngest()
            }
          },
          {
            key: '_saveExposure',
            value: function(e) {
              this.exposures.push(e), this.maybeIngest()
            }
          },
          {
            key: 'publish',
            value: ((i = fe(
              mn.mark(function e(t) {
                var r = this
                return mn.wrap(
                  function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (bn(t)) {
                            e.next = 3
                            break
                          }
                          return (
                            gn(
                              'The "publish" method takes an array of objects (aka entities).'
                            ),
                            e.abrupt('return')
                          )
                        case 3:
                          return (
                            t.forEach(function(e) {
                              r._identifyObject(e)
                            }),
                            (e.next = 6),
                            this.maybeIngest(!0)
                          )
                        case 6:
                        case 'end':
                          return e.stop()
                      }
                  },
                  e,
                  this
                )
              })
            )),
            function(e) {
              return i.apply(this, arguments)
            })
          },
          {
            key: '_getGatingInfo',
            value: ((o = fe(
              mn.mark(function e() {
                return mn.wrap(
                  function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt(
                            'return',
                            wh
                              .get(
                                ''
                                  .concat(Hp, '/')
                                  .concat(this.envKey, '?casing=camel')
                              )
                              .timeout(1e4)
                          )
                        case 1:
                        case 'end':
                          return e.stop()
                      }
                  },
                  e,
                  this
                )
              })
            )),
            function() {
              return o.apply(this, arguments)
            })
          },
          {
            key: '_getGatingInfoFromCloudFront',
            value: ((a = fe(
              mn.mark(function e() {
                return mn.wrap(
                  function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt(
                            'return',
                            wh
                              .get(
                                ''.concat(Qp, '/').concat(this.envKey, '-camel')
                              )
                              .timeout(1e4)
                          )
                        case 1:
                        case 'end':
                          return e.stop()
                      }
                  },
                  e,
                  this
                )
              })
            )),
            function() {
              return a.apply(this, arguments)
            })
          },
          {
            key: 'updateSDK',
            value: function() {
              var e = this.router.getIngestionMaxItem(),
                t = this.router.getIngestionInterval()
              'number' == typeof e && 0 < e && (this.ingestionMaxItems = e),
                'number' == typeof t &&
                  0 < t &&
                  t != this.ingestionInterval &&
                  ((this.ingestionInterval = t), this.restartIngestionWorker())
            }
          },
          {
            key: 'configure',
            value: ((n = fe(
              mn.mark(function e(t) {
                var r,
                  n,
                  a,
                  o,
                  i,
                  s,
                  u,
                  l,
                  h,
                  c = arguments
                return mn.wrap(
                  function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((r = !(1 < c.length && void 0 !== c[1]) || c[1]),
                            (n = /^[a-z0-9]{16}$/),
                            t.match(n))
                          ) {
                            e.next = 4
                            break
                          }
                          throw 'options["envKey"] should be a string of lowercase characters and digits. Double check on the Airship web app.'
                        case 4:
                          return (
                            (this.envKey = t),
                            this.init(),
                            (a = !1),
                            (e.prev = 7),
                            (o = new Fp(
                              'duration__gating_info',
                              Fp.TYPE_DURATION
                            )).start(),
                            (e.next = 12),
                            this._getGatingInfo()
                          )
                        case 12:
                          ;(i = e.sent),
                            (s = i.body),
                            (this.router = new zp(s)),
                            this.updateSDK(),
                            this.gatingInfoListener &&
                              this.gatingInfoListener(s),
                            (a = !0),
                            o.stop(),
                            this._saveStat(o),
                            (e.next = 26)
                          break
                        case 22:
                          ;(e.prev = 22),
                            (e.t0 = e.catch(7)),
                            gn(e.t0),
                            (a = !1)
                        case 26:
                          if (a) {
                            e.next = 46
                            break
                          }
                          return (
                            (e.prev = 27),
                            (u = new Fp(
                              'duration__cloudfront_gating_info',
                              Fp.TYPE_DURATION
                            )).start(),
                            (e.next = 32),
                            this._getGatingInfoFromCloudFront()
                          )
                        case 32:
                          ;(l = e.sent),
                            (h = l.body),
                            (this.router = new zp(h)),
                            this.updateSDK(),
                            this.gatingInfoListener &&
                              this.gatingInfoListener(h),
                            (a = !0),
                            u.stop(),
                            this._saveStat(u),
                            (e.next = 46)
                          break
                        case 42:
                          ;(e.prev = 42),
                            (e.t1 = e.catch(27)),
                            gn(e.t1),
                            (a = !1)
                        case 46:
                          if (a) {
                            e.next = 48
                            break
                          }
                          throw 'Failed to retrieve initial gating information'
                        case 48:
                          r && (this._subscribeToUpdates(), this._policeSSE())
                        case 49:
                        case 'end':
                          return e.stop()
                      }
                  },
                  e,
                  this,
                  [[7, 22], [27, 42]]
                )
              })
            )),
            function(e) {
              return n.apply(this, arguments)
            })
          },
          {
            key: 'shutdown',
            value: ((t = fe(
              mn.mark(function e() {
                return mn.wrap(
                  function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            this.ingestionWorker &&
                              clearInterval(this.ingestionWorker),
                            this._unpoliceSSE(),
                            this._unsubscribeFromUpdates(),
                            (e.next = 5),
                            this.maybeIngest(!0)
                          )
                        case 5:
                        case 'end':
                          return e.stop()
                      }
                  },
                  e,
                  this
                )
              })
            )),
            function() {
              return t.apply(this, arguments)
            })
          },
          {
            key: 'flag',
            value: function(e) {
              var t = Mp.prototype.flag.call(this, e)
              return (
                t.isWild() &&
                  (this.oldFlags.has(e) ||
                    (this.flags.add(e), this.maybeIngest())),
                t
              )
            }
          },
          {
            key: '_policeSSE',
            value: function() {
              var e = this
              this._unpoliceSSE(),
                (this.policeSSEInterval = setInterval(function() {
                  30 < (yn() - (e.lastSSEConnectTimestamp || yn())) / 1e3 &&
                    (gn(
                      'Did not receive a keepalive for more than 30 seconds. Reconnecting.'
                    ),
                    e._subscribeToUpdates())
                }, 5e3))
            }
          },
          {
            key: '_unpoliceSSE',
            value: function() {
              this.policeSSEInterval &&
                (clearInterval(this.policeSSEInterval),
                delete this.policeSSEInterval,
                this.lastSSEConnectTimestamp &&
                  delete this.lastSSEConnectTimestamp)
            }
          },
          {
            key: '_subscribeToUpdates',
            value: function() {
              var r = this
              this._unsubscribeFromUpdates(),
                (this.eventSource = new nh(
                  ''.concat(Vp, '?envkey=').concat(this.envKey, '&casing=camel')
                )),
                this.eventSource.addEventListener('gatingInfoUpdate', function(
                  e
                ) {
                  var t = JSON.parse(e.data)
                  ;(r.router = new zp(t)),
                    r.updateSDK(),
                    r.gatingInfoListener && r.gatingInfoListener(t),
                    (r.lastSSEConnectTimestamp = yn())
                }),
                this.eventSource.addEventListener('keepalive', function(e) {
                  r.lastSSEConnectTimestamp = yn()
                })
            }
          },
          {
            key: '_unsubscribeFromUpdates',
            value: function() {
              this.eventSource &&
                (this.eventSource.close(), delete this.eventSource)
            }
          }
        ]),
        r
      )
    })(),
    Kp = Uf({allErrors: !0, jsonPointers: !0})
  ip(Kp)
  var Yp,
    Wp = Kp.compile({
      type: 'object',
      patternProperties: {
        '^.{1,150}$': {
          type: 'object',
          properties: {
            whitelist: {
              type: 'array',
              items: {
                type: ['integer', 'string'],
                errorMessage: {
                  type:
                    'An ID can be a string or integer. Integer ID will be cast into a string.'
                }
              },
              errorMessage: {
                type: '`whitelist` must be an array of IDs (string|integer)'
              }
            },
            blacklist: {
              type: 'array',
              items: {
                type: ['integer', 'string'],
                errorMessage: {
                  type:
                    'An ID can be a string or integer. Integer ID will be cast into a string.'
                }
              },
              errorMessage: {
                type: '`blacklist` must be an array of IDs (string|integer)'
              }
            },
            population: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  attribute: {
                    type: 'string',
                    maxLength: 50,
                    errorMessage: {
                      type:
                        'A population\'s filter attribute must be a string of 50 characters or less. E.g., "age", "height", "birthDate", etc.',
                      maxLength:
                        'A population\'s filter attribute must be a string of 50 characters or less. E.g., "age", "height", "birthDate", etc.'
                    }
                  },
                  operator: {
                    type: 'string',
                    enum: [
                      'is',
                      'is_not',
                      'in',
                      'not_in',
                      'lt',
                      'lte',
                      'gt',
                      'gte',
                      'from',
                      'until',
                      'after',
                      'before'
                    ],
                    errorMessage: {
                      type:
                        'A population\'s filter operator must be a string and must be one of: ["is", "is_not", "in", "not_in", "lt", "lte", "gt", "gte", "from", "until", "after", "before"]',
                      enum:
                        'A population\'s filter operator must be a string and must be one of: ["is", "is_not", "in", "not_in", "lt", "lte", "gt", "gte", "from", "until", "after", "before"]'
                    }
                  },
                  value: {
                    type: ['number', 'string', 'boolean', 'array'],
                    maxLength: 3e3,
                    items: {
                      oneOf: [
                        {
                          type: 'number',
                          errorMessage: {
                            type:
                              "A population's filter valueList must contain numbers or strings."
                          }
                        },
                        {
                          type: 'string',
                          maxLength: 3e3,
                          errorMessage: {
                            maxLength:
                              'A string value for a population filter must be 3000 characters or less'
                          }
                        }
                      ]
                    },
                    minItems: 1,
                    errorMessage: {
                      type:
                        "A population's filter value is a number, string, or boolean or an array of numbers or strings.",
                      maxLength:
                        'A string value for a population filter must be 3000 characters or less',
                      minItems:
                        "A population's filter value must have at least one item if it is an array."
                    }
                  }
                },
                errorMessage: {
                  type:
                    'Each filter within a population is represented by an object of the form: {attribute: <attribute>, operator: <operator>, value/valueList: <value>/<valueList>}'
                }
              },
              errorMessage: {
                type:
                  '`population` must be an array of filters, each of the form: {attribute: <attribute>, operator: <operator>, value/valueList: <value>/<valueList>}'
              }
            },
            sample: {
              type: 'number',
              minimum: 0,
              maximum: 1,
              errorMessage: {
                type: '`sample` must be a float between 0.0 and 1.0, inclusive',
                minimum: '`sample` must be between 0.0 and 1.0, inclusive',
                maximum: '`sample` must be between 0.0 and 1.0, inclusive'
              }
            },
            active: {
              type: 'boolean',
              errorMessage: {type: '`active` must be a boolean'}
            }
          },
          additionalProperties: !1,
          errorMessage: {
            type:
              'flagConfig must be a dictionary of flag name keys to flag configuration values',
            additionalProperties:
              'Unexpected config option found. Please refer to the documentation.'
          }
        }
      },
      errorMessage: {
        patternProperties: 'Flag name must be strings of up to 150 characters.'
      }
    }),
    Zp = (ge((Yp = {}), 'string', new ta([Pp, Sp, xp, Rp])),
    ge(Yp, 'int', new ta([Pp, Sp, xp, Rp, 'lt', 'lte', 'gt', 'gte'])),
    ge(Yp, 'float', new ta([Pp, Sp, xp, Rp, 'lt', 'lte', 'gt', 'gte'])),
    ge(Yp, _p, new ta([Pp, Sp])),
    ge(Yp, 'date', new ta([Pp, Sp, xp, Rp, Op, kp, Tp, Ap])),
    ge(Yp, Ep, new ta([Pp, Sp, xp, Rp, Op, kp, Tp, Ap])),
    Yp),
    Jp = function(v) {
      if (
        ((e = Wp(v)) ||
          gn(
            Wp.errors.map(function(e) {
              return e.message
            })
          ),
        !e)
      )
        return null
      for (
        var e,
          m = [],
          g = li(v),
          t = function(e) {
            var t = g[e],
              r = v[t],
              n = {
                flagType: 'basic',
                hashKey: t,
                isPaused: !(void 0 === r.active || r.active),
                isWebAccessible: !0,
                codename: t,
                flagStatus: 'operational'
              },
              a = r.whitelist || [],
              o = r.blacklist || [],
              i = new ta(o),
              s = a.filter(function(e) {
                return !i.has(e)
              })
            if (
              ((n.treatments = [
                {
                  treatmentId: 'off-treatment',
                  codename: 'off',
                  isControl: !1,
                  isOffTreatment: !0
                },
                {
                  treatmentId: 'on-treatment',
                  codename: 'on',
                  isControl: !1,
                  isOffTreatment: !1
                }
              ]),
              (n.overrides = []),
              (n.overrides = n.overrides.concat(
                s.map(function(e) {
                  return {
                    treatmentId: 'on-treatment',
                    entityType: 'User',
                    entityId: e.toString()
                  }
                })
              )),
              (n.overrides = n.overrides.concat(
                o.map(function(e) {
                  return {
                    treatmentId: 'off-treatment',
                    entityType: 'User',
                    entityId: e.toString()
                  }
                })
              )),
              (n.splits = [{treatmentId: 'on-treatment', percentage: 1}]),
              r.population)
            ) {
              for (
                var u = r.population || [], l = [], h = 0;
                h < u.length;
                h++
              ) {
                var c = u[h],
                  f = void 0
                if (bn(c.value)) {
                  var p = new ta(
                    c.value.map(function(e) {
                      return Ip.categorizeValueType(e)
                    })
                  )
                  if (1 != p.size)
                    return (
                      gn(
                        "Population's filter criteria each should have a singular value type. In other words, do not mix strings with numbers in the same array, for example."
                      ),
                      {v: null}
                    )
                  f = qn(p)[0]
                } else f = Ip.categorizeValueType(c.value)
                var d = {
                  attributeName: c.attribute,
                  attributeType: f,
                  operator: c.operator,
                  value: bn(c.value) ? null : c.value,
                  valueList: bn(c.value) ? c.value : null
                }
                if (!Zp[f].has(c.operator))
                  return (
                    gn(
                      "Population's filter operator `"
                        .concat(
                          c.operator,
                          '` is not allowed for filter type `'
                        )
                        .concat(f, '`')
                    ),
                    {v: null}
                  )
                if (d.valueList) {
                  if (d.operator !== xp && d.operator !== Rp)
                    return (
                      gn(
                        "Population's filter operator must be `in` or `not_in` if the value is an array."
                      ),
                      {v: null}
                    )
                } else if (d.operator === xp && d.operator === Rp)
                  return (
                    gn(
                      "Population's filter operator must not be `in` or `not_in` if the value is a number, boolean or string."
                    ),
                    {v: null}
                  )
                l.push(d)
              }
              n.populations = [
                {
                  hashKey: 'population-1',
                  entityType: 'User',
                  percentage: r.sample || 0,
                  rules: l,
                  universes: []
                }
              ]
            } else
              n.populations = [
                {
                  hashKey: 'population-1',
                  entityType: 'User',
                  percentage: r.sample || 0,
                  rules: [],
                  universes: []
                }
              ]
            m.push(n)
          },
          r = 0;
        r < g.length;
        r++
      ) {
        var n = t(r)
        if ('object' === pe(n)) return n.v
      }
      return {flags: m, env: {hashKey: 'env-1', envKey: null}}
    },
    Xp = (function(e) {
      function t() {
        return de(this, t), Pe(this, we(t).apply(this, arguments))
      }
      var r
      return (
        be(t, Mp),
        me(t, [
          {
            key: 'configure',
            value: ((r = fe(
              mn.mark(function e(t) {
                var r
                return mn.wrap(
                  function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (null === (r = Jp(t)))
                            throw 'Failed to transform flagConfig into initial gating information'
                          e.next = 3
                          break
                        case 3:
                          this.router = new zp(r)
                        case 4:
                        case 'end':
                          return e.stop()
                      }
                  },
                  e,
                  this
                )
              })
            )),
            function(e) {
              return r.apply(this, arguments)
            })
          }
        ]),
        t
      )
    })(),
    ed = new Xp()
  ed.configure({})
  var td = (function() {
      function a() {
        de(this, a), (this.gatingInfoListeners = [])
      }
      var e, t, r
      return (
        me(
          a,
          [
            {
              key: 'publish',
              value: ((r = fe(
                mn.mark(function e(t) {
                  return mn.wrap(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (this.environment)
                              return (e.next = 3), this.environment.publish(t)
                            e.next = 5
                            break
                          case 3:
                            e.next = 6
                            break
                          case 5:
                            throw 'Airship must be configured first before `publish` can be called'
                          case 6:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    this
                  )
                })
              )),
              function(e) {
                return r.apply(this, arguments)
              })
            },
            {
              key: 'configure',
              value: ((t = fe(
                mn.mark(function e(t) {
                  var r, n
                  return mn.wrap(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (a._isDict(t)) {
                              e.next = 2
                              break
                            }
                            throw '<options> must be dictionary'
                          case 2:
                            if (((r = t.envKey), (n = t.flagConfig), r || n)) {
                              e.next = 6
                              break
                            }
                            throw '<options> must contain envKey corresponding to an environment key or a flagConfig dictionary'
                          case 6:
                            if (!r) {
                              e.next = 15
                              break
                            }
                            if (this.environment)
                              return (e.next = 10), this.environment.shutdown()
                            e.next = 10
                            break
                          case 10:
                            return (
                              (this.environment = new Gp(
                                this.handleGatingInfoUpdate.bind(this)
                              )),
                              (e.next = 13),
                              this.environment.configure(
                                r,
                                t.subscribeToUpdates
                              )
                            )
                          case 13:
                            e.next = 21
                            break
                          case 15:
                            if (this.environment)
                              return (e.next = 18), this.environment.shutdown()
                            e.next = 18
                            break
                          case 18:
                            return (
                              (this.environment = new Xp()),
                              (e.next = 21),
                              this.environment.configure(n)
                            )
                          case 21:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    this
                  )
                })
              )),
              function(e) {
                return t.apply(this, arguments)
              })
            },
            {
              key: 'shutdown',
              value: ((e = fe(
                mn.mark(function e() {
                  return mn.wrap(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (this.environment)
                              return (e.next = 3), this.environment.shutdown()
                            e.next = 6
                            break
                          case 3:
                            delete this.environment, (e.next = 7)
                            break
                          case 6:
                            throw 'Airship must be configured first before `shutdown` can be called'
                          case 7:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    this
                  )
                })
              )),
              function() {
                return e.apply(this, arguments)
              })
            },
            {
              key: 'flag',
              value: function(e) {
                return (this.environment || ed).flag(e)
              }
            },
            {
              key: 'setErrorListener',
              value: function(e) {
                gn = e
              }
            },
            {
              key: 'handleGatingInfoUpdate',
              value: function(t) {
                this.gatingInfoListeners.forEach(function(e) {
                  return e(t)
                })
              }
            },
            {
              key: 'addGatingInfoListener',
              value: function(e) {
                this.gatingInfoListeners.push(e)
              }
            },
            {
              key: 'removeGatingInfoListener',
              value: function(t) {
                this.gatingInfoListeners = this.gatingInfoListeners.filter(
                  function(e) {
                    return e !== t
                  }
                )
              }
            },
            {
              key: 'identify',
              value: function(e) {
                if (!this.environment)
                  throw 'Airship must be configured first before `identify` can be called'
                this.environment.identify(e),
                  this.environment._identifyObject(e),
                  this.environment.maybeIngest(!0)
              }
            }
          ],
          [
            {
              key: '_isDict',
              value: function(e) {
                return null != e && e.constructor === Object
              }
            }
          ]
        ),
        a
      )
    })(),
    rd = new td()
  return ee(rd, {FlaggerBase: td}), rd
})
//# sourceMappingURL=flagger.js.map
