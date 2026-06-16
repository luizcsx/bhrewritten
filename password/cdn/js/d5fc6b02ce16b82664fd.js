var _____WB$wombat$assign$function_____ = function(name) {
    return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name)) || globalThis[name];
};
if (!globalThis.__WB_pmw) {
    globalThis.__WB_pmw = function(obj) {
        this.__WB_source = obj;
        return this;
    }
}
{
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");
    (self.webpackChunk = self.webpackChunk || []).push([[736], {
        296: ke => {
            function Ae(he, oe, W) {
                var ie, S, A, i, s;
                oe == null && (oe = 100);
                function d() {
                    var y = Date.now() - i;
                    y < oe && y >= 0 ? ie = setTimeout(d, oe - y) : (ie = null,
                    W || (s = he.apply(A, S),
                    A = S = null))
                }
                var h = function() {
                    A = this,
                    S = arguments,
                    i = Date.now();
                    var y = W && !ie;
                    return ie || (ie = setTimeout(d, oe)),
                    y && (s = he.apply(A, S),
                    A = S = null),
                    s
                };
                return h.clear = function() {
                    ie && (clearTimeout(ie),
                    ie = null)
                }
                ,
                h.flush = function() {
                    ie && (s = he.apply(A, S),
                    A = S = null,
                    clearTimeout(ie),
                    ie = null)
                }
                ,
                h
            }
            Ae.debounce = Ae,
            ke.exports = Ae
        }
        ,
        3984: (ke, Ae, he) => {
            "use strict";
            window.$ = he(9755),
            window.debounce = he(296),
            window.slick = he(9154)
        }
        ,
        9755: function(ke, Ae) {
            var he, oe;
            /*!
* jQuery JavaScript Library v3.6.3
* https://jquery.com/
*
* Includes Sizzle.js
* https://sizzlejs.com/
*
* Copyright OpenJS Foundation and other contributors
* Released under the MIT license
* https://jquery.org/license
*
* Date: 2022-12-20T21:28Z
*/
            (function(W, ie) {
                "use strict";
                typeof ke.exports == "object" ? ke.exports = W.document ? ie(W, !0) : function(S) {
                    if (!S.document)
                        throw new Error("jQuery requires a window with a document");
                    return ie(S)
                }
                : ie(W)
            }
            )(typeof window != "undefined" ? window : this, function(W, ie) {
                "use strict";
                var S = []
                  , A = Object.getPrototypeOf
                  , i = S.slice
                  , s = S.flat ? function(e) {
                    return S.flat.call(e)
                }
                : function(e) {
                    return S.concat.apply([], e)
                }
                  , d = S.push
                  , h = S.indexOf
                  , y = {}
                  , $ = y.toString
                  , j = y.hasOwnProperty
                  , Y = j.toString
                  , N = Y.call(Object)
                  , U = {}
                  , R = function(t) {
                    return typeof t == "function" && typeof t.nodeType != "number" && typeof t.item != "function"
                }
                  , le = function(t) {
                    return t != null && t === t.window
                }
                  , X = W.document
                  , ct = {
                    type: !0,
                    src: !0,
                    nonce: !0,
                    noModule: !0
                };
                function Ze(e, t, n) {
                    n = n || X;
                    var r, a, l = n.createElement("script");
                    if (l.text = e,
                    t)
                        for (r in ct)
                            a = t[r] || t.getAttribute && t.getAttribute(r),
                            a && l.setAttribute(r, a);
                    n.head.appendChild(l).parentNode.removeChild(l)
                }
                function Ee(e) {
                    return e == null ? e + "" : typeof e == "object" || typeof e == "function" ? y[$.call(e)] || "object" : typeof e
                }
                var Jt = "3.6.3"
                  , o = function(e, t) {
                    return new o.fn.init(e,t)
                };
                o.fn = o.prototype = {
                    jquery: Jt,
                    constructor: o,
                    length: 0,
                    toArray: function() {
                        return i.call(this)
                    },
                    get: function(e) {
                        return e == null ? i.call(this) : e < 0 ? this[e + this.length] : this[e]
                    },
                    pushStack: function(e) {
                        var t = o.merge(this.constructor(), e);
                        return t.prevObject = this,
                        t
                    },
                    each: function(e) {
                        return o.each(this, e)
                    },
                    map: function(e) {
                        return this.pushStack(o.map(this, function(t, n) {
                            return e.call(t, n, t)
                        }))
                    },
                    slice: function() {
                        return this.pushStack(i.apply(this, arguments))
                    },
                    first: function() {
                        return this.eq(0)
                    },
                    last: function() {
                        return this.eq(-1)
                    },
                    even: function() {
                        return this.pushStack(o.grep(this, function(e, t) {
                            return (t + 1) % 2
                        }))
                    },
                    odd: function() {
                        return this.pushStack(o.grep(this, function(e, t) {
                            return t % 2
                        }))
                    },
                    eq: function(e) {
                        var t = this.length
                          , n = +e + (e < 0 ? t : 0);
                        return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                    },
                    end: function() {
                        return this.prevObject || this.constructor()
                    },
                    push: d,
                    sort: S.sort,
                    splice: S.splice
                },
                o.extend = o.fn.extend = function() {
                    var e, t, n, r, a, l, u = arguments[0] || {}, g = 1, c = arguments.length, w = !1;
                    for (typeof u == "boolean" && (w = u,
                    u = arguments[g] || {},
                    g++),
                    typeof u != "object" && !R(u) && (u = {}),
                    g === c && (u = this,
                    g--); g < c; g++)
                        if ((e = arguments[g]) != null)
                            for (t in e)
                                r = e[t],
                                !(t === "__proto__" || u === r) && (w && r && (o.isPlainObject(r) || (a = Array.isArray(r))) ? (n = u[t],
                                a && !Array.isArray(n) ? l = [] : !a && !o.isPlainObject(n) ? l = {} : l = n,
                                a = !1,
                                u[t] = o.extend(w, l, r)) : r !== void 0 && (u[t] = r));
                    return u
                }
                ,
                o.extend({
                    expando: "jQuery" + (Jt + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function(e) {
                        throw new Error(e)
                    },
                    noop: function() {},
                    isPlainObject: function(e) {
                        var t, n;
                        return !e || $.call(e) !== "[object Object]" ? !1 : (t = A(e),
                        t ? (n = j.call(t, "constructor") && t.constructor,
                        typeof n == "function" && Y.call(n) === N) : !0)
                    },
                    isEmptyObject: function(e) {
                        var t;
                        for (t in e)
                            return !1;
                        return !0
                    },
                    globalEval: function(e, t, n) {
                        Ze(e, {
                            nonce: t && t.nonce
                        }, n)
                    },
                    each: function(e, t) {
                        var n, r = 0;
                        if (Et(e))
                            for (n = e.length; r < n && t.call(e[r], r, e[r]) !== !1; r++)
                                ;
                        else
                            for (r in e)
                                if (t.call(e[r], r, e[r]) === !1)
                                    break;
                        return e
                    },
                    makeArray: function(e, t) {
                        var n = t || [];
                        return e != null && (Et(Object(e)) ? o.merge(n, typeof e == "string" ? [e] : e) : d.call(n, e)),
                        n
                    },
                    inArray: function(e, t, n) {
                        return t == null ? -1 : h.call(t, e, n)
                    },
                    merge: function(e, t) {
                        for (var n = +t.length, r = 0, a = e.length; r < n; r++)
                            e[a++] = t[r];
                        return e.length = a,
                        e
                    },
                    grep: function(e, t, n) {
                        for (var r, a = [], l = 0, u = e.length, g = !n; l < u; l++)
                            r = !t(e[l], l),
                            r !== g && a.push(e[l]);
                        return a
                    },
                    map: function(e, t, n) {
                        var r, a, l = 0, u = [];
                        if (Et(e))
                            for (r = e.length; l < r; l++)
                                a = t(e[l], l, n),
                                a != null && u.push(a);
                        else
                            for (l in e)
                                a = t(e[l], l, n),
                                a != null && u.push(a);
                        return s(u)
                    },
                    guid: 1,
                    support: U
                }),
                typeof Symbol == "function" && (o.fn[Symbol.iterator] = S[Symbol.iterator]),
                o.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
                    y["[object " + t + "]"] = t.toLowerCase()
                });
                function Et(e) {
                    var t = !!e && "length"in e && e.length
                      , n = Ee(e);
                    return R(e) || le(e) ? !1 : n === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in e
                }
                var Le = function(e) {
                    var t, n, r, a, l, u, g, c, w, T, E, b, k, H, B, P, re, ne, ge, K = "sizzle" + 1 * new Date, F = e.document, ce = 0, G = 0, te = kt(), lt = kt(), bt = kt(), ye = kt(), ze = function(f, p) {
                        return f === p && (E = !0),
                        0
                    }, We = {}.hasOwnProperty, pe = [], Pe = pe.pop, Te = pe.push, He = pe.push, qi = pe.slice, Re = function(f, p) {
                        for (var v = 0, C = f.length; v < C; v++)
                            if (f[v] === p)
                                return v;
                        return -1
                    }, Bt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", Q = "[\\x20\\t\\r\\n\\f]", Fe = "(?:\\\\[\\da-fA-F]{1,6}" + Q + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", Mi = "\\[" + Q + "*(" + Fe + ")(?:" + Q + "*([*^$|!~]?=)" + Q + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + Fe + "))|)" + Q + "*\\]", Ut = ":(" + Fe + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + Mi + ")*)|.*)\\)|)", Bn = new RegExp(Q + "+","g"), Tt = new RegExp("^" + Q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Q + "+$","g"), Un = new RegExp("^" + Q + "*," + Q + "*"), Ii = new RegExp("^" + Q + "*([>+~]|" + Q + ")" + Q + "*"), Xn = new RegExp(Q + "|>"), Vn = new RegExp(Ut), Yn = new RegExp("^" + Fe + "$"), St = {
                        ID: new RegExp("^#(" + Fe + ")"),
                        CLASS: new RegExp("^\\.(" + Fe + ")"),
                        TAG: new RegExp("^(" + Fe + "|[*])"),
                        ATTR: new RegExp("^" + Mi),
                        PSEUDO: new RegExp("^" + Ut),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + Q + "*(even|odd|(([+-]|)(\\d*)n|)" + Q + "*(?:([+-]|)" + Q + "*(\\d+)|))" + Q + "*\\)|)","i"),
                        bool: new RegExp("^(?:" + Bt + ")$","i"),
                        needsContext: new RegExp("^" + Q + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + Q + "*((?:-\\d)?\\d*)" + Q + "*\\)|)(?=[^-]|$)","i")
                    }, Gn = /HTML$/i, Qn = /^(?:input|select|textarea|button)$/i, Kn = /^h\d$/i, ut = /^[^{]+\{\s*\[native \w/, Jn = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Xt = /[+~]/, _e = new RegExp("\\\\[\\da-fA-F]{1,6}" + Q + "?|\\\\([^\\r\\n\\f])","g"), je = function(f, p) {
                        var v = "0x" + f.slice(1) - 65536;
                        return p || (v < 0 ? String.fromCharCode(v + 65536) : String.fromCharCode(v >> 10 | 55296, v & 1023 | 56320))
                    }, zi = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, Wi = function(f, p) {
                        return p ? f === "\0" ? "\uFFFD" : f.slice(0, -1) + "\\" + f.charCodeAt(f.length - 1).toString(16) + " " : "\\" + f
                    }, Ri = function() {
                        b()
                    }, Zn = xt(function(f) {
                        return f.disabled === !0 && f.nodeName.toLowerCase() === "fieldset"
                    }, {
                        dir: "parentNode",
                        next: "legend"
                    });
                    try {
                        He.apply(pe = qi.call(F.childNodes), F.childNodes),
                        pe[F.childNodes.length].nodeType
                    } catch (f) {
                        He = {
                            apply: pe.length ? function(p, v) {
                                Te.apply(p, qi.call(v))
                            }
                            : function(p, v) {
                                for (var C = p.length, m = 0; p[C++] = v[m++]; )
                                    ;
                                p.length = C - 1
                            }
                        }
                    }
                    function J(f, p, v, C) {
                        var m, x, D, O, _, M, L, z = p && p.ownerDocument, V = p ? p.nodeType : 9;
                        if (v = v || [],
                        typeof f != "string" || !f || V !== 1 && V !== 9 && V !== 11)
                            return v;
                        if (!C && (b(p),
                        p = p || k,
                        B)) {
                            if (V !== 11 && (_ = Jn.exec(f)))
                                if (m = _[1]) {
                                    if (V === 9)
                                        if (D = p.getElementById(m)) {
                                            if (D.id === m)
                                                return v.push(D),
                                                v
                                        } else
                                            return v;
                                    else if (z && (D = z.getElementById(m)) && ge(p, D) && D.id === m)
                                        return v.push(D),
                                        v
                                } else {
                                    if (_[2])
                                        return He.apply(v, p.getElementsByTagName(f)),
                                        v;
                                    if ((m = _[3]) && n.getElementsByClassName && p.getElementsByClassName)
                                        return He.apply(v, p.getElementsByClassName(m)),
                                        v
                                }
                            if (n.qsa && !ye[f + " "] && (!P || !P.test(f)) && (V !== 1 || p.nodeName.toLowerCase() !== "object")) {
                                if (L = f,
                                z = p,
                                V === 1 && (Xn.test(f) || Ii.test(f))) {
                                    for (z = Xt.test(f) && Yt(p.parentNode) || p,
                                    (z !== p || !n.scope) && ((O = p.getAttribute("id")) ? O = O.replace(zi, Wi) : p.setAttribute("id", O = K)),
                                    M = u(f),
                                    x = M.length; x--; )
                                        M[x] = (O ? "#" + O : ":scope") + " " + Ct(M[x]);
                                    L = M.join(",")
                                }
                                try {
                                    if (n.cssSupportsSelector && !CSS.supports("selector(:is(" + L + "))"))
                                        throw new Error;
                                    return He.apply(v, z.querySelectorAll(L)),
                                    v
                                } catch (Z) {
                                    ye(f, !0)
                                } finally {
                                    O === K && p.removeAttribute("id")
                                }
                            }
                        }
                        return c(f.replace(Tt, "$1"), p, v, C)
                    }
                    function kt() {
                        var f = [];
                        function p(v, C) {
                            return f.push(v + " ") > r.cacheLength && delete p[f.shift()],
                            p[v + " "] = C
                        }
                        return p
                    }
                    function xe(f) {
                        return f[K] = !0,
                        f
                    }
                    function Se(f) {
                        var p = k.createElement("fieldset");
                        try {
                            return !!f(p)
                        } catch (v) {
                            return !1
                        } finally {
                            p.parentNode && p.parentNode.removeChild(p),
                            p = null
                        }
                    }
                    function Vt(f, p) {
                        for (var v = f.split("|"), C = v.length; C--; )
                            r.attrHandle[v[C]] = p
                    }
                    function Fi(f, p) {
                        var v = p && f
                          , C = v && f.nodeType === 1 && p.nodeType === 1 && f.sourceIndex - p.sourceIndex;
                        if (C)
                            return C;
                        if (v) {
                            for (; v = v.nextSibling; )
                                if (v === p)
                                    return -1
                        }
                        return f ? 1 : -1
                    }
                    function er(f) {
                        return function(p) {
                            var v = p.nodeName.toLowerCase();
                            return v === "input" && p.type === f
                        }
                    }
                    function tr(f) {
                        return function(p) {
                            var v = p.nodeName.toLowerCase();
                            return (v === "input" || v === "button") && p.type === f
                        }
                    }
                    function Bi(f) {
                        return function(p) {
                            return "form"in p ? p.parentNode && p.disabled === !1 ? "label"in p ? "label"in p.parentNode ? p.parentNode.disabled === f : p.disabled === f : p.isDisabled === f || p.isDisabled !== !f && Zn(p) === f : p.disabled === f : "label"in p ? p.disabled === f : !1
                        }
                    }
                    function Be(f) {
                        return xe(function(p) {
                            return p = +p,
                            xe(function(v, C) {
                                for (var m, x = f([], v.length, p), D = x.length; D--; )
                                    v[m = x[D]] && (v[m] = !(C[m] = v[m]))
                            })
                        })
                    }
                    function Yt(f) {
                        return f && typeof f.getElementsByTagName != "undefined" && f
                    }
                    n = J.support = {},
                    l = J.isXML = function(f) {
                        var p = f && f.namespaceURI
                          , v = f && (f.ownerDocument || f).documentElement;
                        return !Gn.test(p || v && v.nodeName || "HTML")
                    }
                    ,
                    b = J.setDocument = function(f) {
                        var p, v, C = f ? f.ownerDocument || f : F;
                        return C == k || C.nodeType !== 9 || !C.documentElement || (k = C,
                        H = k.documentElement,
                        B = !l(k),
                        F != k && (v = k.defaultView) && v.top !== v && (v.addEventListener ? v.addEventListener("unload", Ri, !1) : v.attachEvent && v.attachEvent("onunload", Ri)),
                        n.scope = Se(function(m) {
                            return H.appendChild(m).appendChild(k.createElement("div")),
                            typeof m.querySelectorAll != "undefined" && !m.querySelectorAll(":scope fieldset div").length
                        }),
                        n.cssSupportsSelector = Se(function() {
                            return CSS.supports("selector(*)") && k.querySelectorAll(":is(:jqfake)") && !CSS.supports("selector(:is(*,:jqfake))")
                        }),
                        n.attributes = Se(function(m) {
                            return m.className = "i",
                            !m.getAttribute("className")
                        }),
                        n.getElementsByTagName = Se(function(m) {
                            return m.appendChild(k.createComment("")),
                            !m.getElementsByTagName("*").length
                        }),
                        n.getElementsByClassName = ut.test(k.getElementsByClassName),
                        n.getById = Se(function(m) {
                            return H.appendChild(m).id = K,
                            !k.getElementsByName || !k.getElementsByName(K).length
                        }),
                        n.getById ? (r.filter.ID = function(m) {
                            var x = m.replace(_e, je);
                            return function(D) {
                                return D.getAttribute("id") === x
                            }
                        }
                        ,
                        r.find.ID = function(m, x) {
                            if (typeof x.getElementById != "undefined" && B) {
                                var D = x.getElementById(m);
                                return D ? [D] : []
                            }
                        }
                        ) : (r.filter.ID = function(m) {
                            var x = m.replace(_e, je);
                            return function(D) {
                                var O = typeof D.getAttributeNode != "undefined" && D.getAttributeNode("id");
                                return O && O.value === x
                            }
                        }
                        ,
                        r.find.ID = function(m, x) {
                            if (typeof x.getElementById != "undefined" && B) {
                                var D, O, _, M = x.getElementById(m);
                                if (M) {
                                    if (D = M.getAttributeNode("id"),
                                    D && D.value === m)
                                        return [M];
                                    for (_ = x.getElementsByName(m),
                                    O = 0; M = _[O++]; )
                                        if (D = M.getAttributeNode("id"),
                                        D && D.value === m)
                                            return [M]
                                }
                                return []
                            }
                        }
                        ),
                        r.find.TAG = n.getElementsByTagName ? function(m, x) {
                            if (typeof x.getElementsByTagName != "undefined")
                                return x.getElementsByTagName(m);
                            if (n.qsa)
                                return x.querySelectorAll(m)
                        }
                        : function(m, x) {
                            var D, O = [], _ = 0, M = x.getElementsByTagName(m);
                            if (m === "*") {
                                for (; D = M[_++]; )
                                    D.nodeType === 1 && O.push(D);
                                return O
                            }
                            return M
                        }
                        ,
                        r.find.CLASS = n.getElementsByClassName && function(m, x) {
                            if (typeof x.getElementsByClassName != "undefined" && B)
                                return x.getElementsByClassName(m)
                        }
                        ,
                        re = [],
                        P = [],
                        (n.qsa = ut.test(k.querySelectorAll)) && (Se(function(m) {
                            var x;
                            H.appendChild(m).innerHTML = "<a id='" + K + "'></a><select id='" + K + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                            m.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + Q + `*(?:''|"")`),
                            m.querySelectorAll("[selected]").length || P.push("\\[" + Q + "*(?:value|" + Bt + ")"),
                            m.querySelectorAll("[id~=" + K + "-]").length || P.push("~="),
                            x = k.createElement("input"),
                            x.setAttribute("name", ""),
                            m.appendChild(x),
                            m.querySelectorAll("[name='']").length || P.push("\\[" + Q + "*name" + Q + "*=" + Q + `*(?:''|"")`),
                            m.querySelectorAll(":checked").length || P.push(":checked"),
                            m.querySelectorAll("a#" + K + "+*").length || P.push(".#.+[+~]"),
                            m.querySelectorAll("\\\f"),
                            P.push("[\\r\\n\\f]")
                        }),
                        Se(function(m) {
                            m.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var x = k.createElement("input");
                            x.setAttribute("type", "hidden"),
                            m.appendChild(x).setAttribute("name", "D"),
                            m.querySelectorAll("[name=d]").length && P.push("name" + Q + "*[*^$|!~]?="),
                            m.querySelectorAll(":enabled").length !== 2 && P.push(":enabled", ":disabled"),
                            H.appendChild(m).disabled = !0,
                            m.querySelectorAll(":disabled").length !== 2 && P.push(":enabled", ":disabled"),
                            m.querySelectorAll("*,:x"),
                            P.push(",.*:")
                        })),
                        (n.matchesSelector = ut.test(ne = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && Se(function(m) {
                            n.disconnectedMatch = ne.call(m, "*"),
                            ne.call(m, "[s!='']:x"),
                            re.push("!=", Ut)
                        }),
                        n.cssSupportsSelector || P.push(":has"),
                        P = P.length && new RegExp(P.join("|")),
                        re = re.length && new RegExp(re.join("|")),
                        p = ut.test(H.compareDocumentPosition),
                        ge = p || ut.test(H.contains) ? function(m, x) {
                            var D = m.nodeType === 9 && m.documentElement || m
                              , O = x && x.parentNode;
                            return m === O || !!(O && O.nodeType === 1 && (D.contains ? D.contains(O) : m.compareDocumentPosition && m.compareDocumentPosition(O) & 16))
                        }
                        : function(m, x) {
                            if (x) {
                                for (; x = x.parentNode; )
                                    if (x === m)
                                        return !0
                            }
                            return !1
                        }
                        ,
                        ze = p ? function(m, x) {
                            if (m === x)
                                return E = !0,
                                0;
                            var D = !m.compareDocumentPosition - !x.compareDocumentPosition;
                            return D || (D = (m.ownerDocument || m) == (x.ownerDocument || x) ? m.compareDocumentPosition(x) : 1,
                            D & 1 || !n.sortDetached && x.compareDocumentPosition(m) === D ? m == k || m.ownerDocument == F && ge(F, m) ? -1 : x == k || x.ownerDocument == F && ge(F, x) ? 1 : T ? Re(T, m) - Re(T, x) : 0 : D & 4 ? -1 : 1)
                        }
                        : function(m, x) {
                            if (m === x)
                                return E = !0,
                                0;
                            var D, O = 0, _ = m.parentNode, M = x.parentNode, L = [m], z = [x];
                            if (!_ || !M)
                                return m == k ? -1 : x == k ? 1 : _ ? -1 : M ? 1 : T ? Re(T, m) - Re(T, x) : 0;
                            if (_ === M)
                                return Fi(m, x);
                            for (D = m; D = D.parentNode; )
                                L.unshift(D);
                            for (D = x; D = D.parentNode; )
                                z.unshift(D);
                            for (; L[O] === z[O]; )
                                O++;
                            return O ? Fi(L[O], z[O]) : L[O] == F ? -1 : z[O] == F ? 1 : 0
                        }
                        ),
                        k
                    }
                    ,
                    J.matches = function(f, p) {
                        return J(f, null, null, p)
                    }
                    ,
                    J.matchesSelector = function(f, p) {
                        if (b(f),
                        n.matchesSelector && B && !ye[p + " "] && (!re || !re.test(p)) && (!P || !P.test(p)))
                            try {
                                var v = ne.call(f, p);
                                if (v || n.disconnectedMatch || f.document && f.document.nodeType !== 11)
                                    return v
                            } catch (C) {
                                ye(p, !0)
                            }
                        return J(p, k, null, [f]).length > 0
                    }
                    ,
                    J.contains = function(f, p) {
                        return (f.ownerDocument || f) != k && b(f),
                        ge(f, p)
                    }
                    ,
                    J.attr = function(f, p) {
                        (f.ownerDocument || f) != k && b(f);
                        var v = r.attrHandle[p.toLowerCase()]
                          , C = v && We.call(r.attrHandle, p.toLowerCase()) ? v(f, p, !B) : void 0;
                        return C !== void 0 ? C : n.attributes || !B ? f.getAttribute(p) : (C = f.getAttributeNode(p)) && C.specified ? C.value : null
                    }
                    ,
                    J.escape = function(f) {
                        return (f + "").replace(zi, Wi)
                    }
                    ,
                    J.error = function(f) {
                        throw new Error("Syntax error, unrecognized expression: " + f)
                    }
                    ,
                    J.uniqueSort = function(f) {
                        var p, v = [], C = 0, m = 0;
                        if (E = !n.detectDuplicates,
                        T = !n.sortStable && f.slice(0),
                        f.sort(ze),
                        E) {
                            for (; p = f[m++]; )
                                p === f[m] && (C = v.push(m));
                            for (; C--; )
                                f.splice(v[C], 1)
                        }
                        return T = null,
                        f
                    }
                    ,
                    a = J.getText = function(f) {
                        var p, v = "", C = 0, m = f.nodeType;
                        if (m) {
                            if (m === 1 || m === 9 || m === 11) {
                                if (typeof f.textContent == "string")
                                    return f.textContent;
                                for (f = f.firstChild; f; f = f.nextSibling)
                                    v += a(f)
                            } else if (m === 3 || m === 4)
                                return f.nodeValue
                        } else
                            for (; p = f[C++]; )
                                v += a(p);
                        return v
                    }
                    ,
                    r = J.selectors = {
                        cacheLength: 50,
                        createPseudo: xe,
                        match: St,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(f) {
                                return f[1] = f[1].replace(_e, je),
                                f[3] = (f[3] || f[4] || f[5] || "").replace(_e, je),
                                f[2] === "~=" && (f[3] = " " + f[3] + " "),
                                f.slice(0, 4)
                            },
                            CHILD: function(f) {
                                return f[1] = f[1].toLowerCase(),
                                f[1].slice(0, 3) === "nth" ? (f[3] || J.error(f[0]),
                                f[4] = +(f[4] ? f[5] + (f[6] || 1) : 2 * (f[3] === "even" || f[3] === "odd")),
                                f[5] = +(f[7] + f[8] || f[3] === "odd")) : f[3] && J.error(f[0]),
                                f
                            },
                            PSEUDO: function(f) {
                                var p, v = !f[6] && f[2];
                                return St.CHILD.test(f[0]) ? null : (f[3] ? f[2] = f[4] || f[5] || "" : v && Vn.test(v) && (p = u(v, !0)) && (p = v.indexOf(")", v.length - p) - v.length) && (f[0] = f[0].slice(0, p),
                                f[2] = v.slice(0, p)),
                                f.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(f) {
                                var p = f.replace(_e, je).toLowerCase();
                                return f === "*" ? function() {
                                    return !0
                                }
                                : function(v) {
                                    return v.nodeName && v.nodeName.toLowerCase() === p
                                }
                            },
                            CLASS: function(f) {
                                var p = te[f + " "];
                                return p || (p = new RegExp("(^|" + Q + ")" + f + "(" + Q + "|$)")) && te(f, function(v) {
                                    return p.test(typeof v.className == "string" && v.className || typeof v.getAttribute != "undefined" && v.getAttribute("class") || "")
                                })
                            },
                            ATTR: function(f, p, v) {
                                return function(C) {
                                    var m = J.attr(C, f);
                                    return m == null ? p === "!=" : p ? (m += "",
                                    p === "=" ? m === v : p === "!=" ? m !== v : p === "^=" ? v && m.indexOf(v) === 0 : p === "*=" ? v && m.indexOf(v) > -1 : p === "$=" ? v && m.slice(-v.length) === v : p === "~=" ? (" " + m.replace(Bn, " ") + " ").indexOf(v) > -1 : p === "|=" ? m === v || m.slice(0, v.length + 1) === v + "-" : !1) : !0
                                }
                            },
                            CHILD: function(f, p, v, C, m) {
                                var x = f.slice(0, 3) !== "nth"
                                  , D = f.slice(-4) !== "last"
                                  , O = p === "of-type";
                                return C === 1 && m === 0 ? function(_) {
                                    return !!_.parentNode
                                }
                                : function(_, M, L) {
                                    var z, V, Z, I, se, ae, ve = x !== D ? "nextSibling" : "previousSibling", ee = _.parentNode, ft = O && _.nodeName.toLowerCase(), dt = !L && !O, me = !1;
                                    if (ee) {
                                        if (x) {
                                            for (; ve; ) {
                                                for (I = _; I = I[ve]; )
                                                    if (O ? I.nodeName.toLowerCase() === ft : I.nodeType === 1)
                                                        return !1;
                                                ae = ve = f === "only" && !ae && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (ae = [D ? ee.firstChild : ee.lastChild],
                                        D && dt) {
                                            for (I = ee,
                                            Z = I[K] || (I[K] = {}),
                                            V = Z[I.uniqueID] || (Z[I.uniqueID] = {}),
                                            z = V[f] || [],
                                            se = z[0] === ce && z[1],
                                            me = se && z[2],
                                            I = se && ee.childNodes[se]; I = ++se && I && I[ve] || (me = se = 0) || ae.pop(); )
                                                if (I.nodeType === 1 && ++me && I === _) {
                                                    V[f] = [ce, se, me];
                                                    break
                                                }
                                        } else if (dt && (I = _,
                                        Z = I[K] || (I[K] = {}),
                                        V = Z[I.uniqueID] || (Z[I.uniqueID] = {}),
                                        z = V[f] || [],
                                        se = z[0] === ce && z[1],
                                        me = se),
                                        me === !1)
                                            for (; (I = ++se && I && I[ve] || (me = se = 0) || ae.pop()) && !((O ? I.nodeName.toLowerCase() === ft : I.nodeType === 1) && ++me && (dt && (Z = I[K] || (I[K] = {}),
                                            V = Z[I.uniqueID] || (Z[I.uniqueID] = {}),
                                            V[f] = [ce, me]),
                                            I === _)); )
                                                ;
                                        return me -= m,
                                        me === C || me % C === 0 && me / C >= 0
                                    }
                                }
                            },
                            PSEUDO: function(f, p) {
                                var v, C = r.pseudos[f] || r.setFilters[f.toLowerCase()] || J.error("unsupported pseudo: " + f);
                                return C[K] ? C(p) : C.length > 1 ? (v = [f, f, "", p],
                                r.setFilters.hasOwnProperty(f.toLowerCase()) ? xe(function(m, x) {
                                    for (var D, O = C(m, p), _ = O.length; _--; )
                                        D = Re(m, O[_]),
                                        m[D] = !(x[D] = O[_])
                                }) : function(m) {
                                    return C(m, 0, v)
                                }
                                ) : C
                            }
                        },
                        pseudos: {
                            not: xe(function(f) {
                                var p = []
                                  , v = []
                                  , C = g(f.replace(Tt, "$1"));
                                return C[K] ? xe(function(m, x, D, O) {
                                    for (var _, M = C(m, null, O, []), L = m.length; L--; )
                                        (_ = M[L]) && (m[L] = !(x[L] = _))
                                }) : function(m, x, D) {
                                    return p[0] = m,
                                    C(p, null, D, v),
                                    p[0] = null,
                                    !v.pop()
                                }
                            }),
                            has: xe(function(f) {
                                return function(p) {
                                    return J(f, p).length > 0
                                }
                            }),
                            contains: xe(function(f) {
                                return f = f.replace(_e, je),
                                function(p) {
                                    return (p.textContent || a(p)).indexOf(f) > -1
                                }
                            }),
                            lang: xe(function(f) {
                                return Yn.test(f || "") || J.error("unsupported lang: " + f),
                                f = f.replace(_e, je).toLowerCase(),
                                function(p) {
                                    var v;
                                    do
                                        if (v = B ? p.lang : p.getAttribute("xml:lang") || p.getAttribute("lang"))
                                            return v = v.toLowerCase(),
                                            v === f || v.indexOf(f + "-") === 0;
                                    while ((p = p.parentNode) && p.nodeType === 1);
                                    return !1
                                }
                            }),
                            target: function(f) {
                                var p = e.location && e.location.hash;
                                return p && p.slice(1) === f.id
                            },
                            root: function(f) {
                                return f === H
                            },
                            focus: function(f) {
                                return f === k.activeElement && (!k.hasFocus || k.hasFocus()) && !!(f.type || f.href || ~f.tabIndex)
                            },
                            enabled: Bi(!1),
                            disabled: Bi(!0),
                            checked: function(f) {
                                var p = f.nodeName.toLowerCase();
                                return p === "input" && !!f.checked || p === "option" && !!f.selected
                            },
                            selected: function(f) {
                                return f.parentNode && f.parentNode.selectedIndex,
                                f.selected === !0
                            },
                            empty: function(f) {
                                for (f = f.firstChild; f; f = f.nextSibling)
                                    if (f.nodeType < 6)
                                        return !1;
                                return !0
                            },
                            parent: function(f) {
                                return !r.pseudos.empty(f)
                            },
                            header: function(f) {
                                return Kn.test(f.nodeName)
                            },
                            input: function(f) {
                                return Qn.test(f.nodeName)
                            },
                            button: function(f) {
                                var p = f.nodeName.toLowerCase();
                                return p === "input" && f.type === "button" || p === "button"
                            },
                            text: function(f) {
                                var p;
                                return f.nodeName.toLowerCase() === "input" && f.type === "text" && ((p = f.getAttribute("type")) == null || p.toLowerCase() === "text")
                            },
                            first: Be(function() {
                                return [0]
                            }),
                            last: Be(function(f, p) {
                                return [p - 1]
                            }),
                            eq: Be(function(f, p, v) {
                                return [v < 0 ? v + p : v]
                            }),
                            even: Be(function(f, p) {
                                for (var v = 0; v < p; v += 2)
                                    f.push(v);
                                return f
                            }),
                            odd: Be(function(f, p) {
                                for (var v = 1; v < p; v += 2)
                                    f.push(v);
                                return f
                            }),
                            lt: Be(function(f, p, v) {
                                for (var C = v < 0 ? v + p : v > p ? p : v; --C >= 0; )
                                    f.push(C);
                                return f
                            }),
                            gt: Be(function(f, p, v) {
                                for (var C = v < 0 ? v + p : v; ++C < p; )
                                    f.push(C);
                                return f
                            })
                        }
                    },
                    r.pseudos.nth = r.pseudos.eq;
                    for (t in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    })
                        r.pseudos[t] = er(t);
                    for (t in {
                        submit: !0,
                        reset: !0
                    })
                        r.pseudos[t] = tr(t);
                    function Ui() {}
                    Ui.prototype = r.filters = r.pseudos,
                    r.setFilters = new Ui,
                    u = J.tokenize = function(f, p) {
                        var v, C, m, x, D, O, _, M = lt[f + " "];
                        if (M)
                            return p ? 0 : M.slice(0);
                        for (D = f,
                        O = [],
                        _ = r.preFilter; D; ) {
                            (!v || (C = Un.exec(D))) && (C && (D = D.slice(C[0].length) || D),
                            O.push(m = [])),
                            v = !1,
                            (C = Ii.exec(D)) && (v = C.shift(),
                            m.push({
                                value: v,
                                type: C[0].replace(Tt, " ")
                            }),
                            D = D.slice(v.length));
                            for (x in r.filter)
                                (C = St[x].exec(D)) && (!_[x] || (C = _[x](C))) && (v = C.shift(),
                                m.push({
                                    value: v,
                                    type: x,
                                    matches: C
                                }),
                                D = D.slice(v.length));
                            if (!v)
                                break
                        }
                        return p ? D.length : D ? J.error(f) : lt(f, O).slice(0)
                    }
                    ;
                    function Ct(f) {
                        for (var p = 0, v = f.length, C = ""; p < v; p++)
                            C += f[p].value;
                        return C
                    }
                    function xt(f, p, v) {
                        var C = p.dir
                          , m = p.next
                          , x = m || C
                          , D = v && x === "parentNode"
                          , O = G++;
                        return p.first ? function(_, M, L) {
                            for (; _ = _[C]; )
                                if (_.nodeType === 1 || D)
                                    return f(_, M, L);
                            return !1
                        }
                        : function(_, M, L) {
                            var z, V, Z, I = [ce, O];
                            if (L) {
                                for (; _ = _[C]; )
                                    if ((_.nodeType === 1 || D) && f(_, M, L))
                                        return !0
                            } else
                                for (; _ = _[C]; )
                                    if (_.nodeType === 1 || D)
                                        if (Z = _[K] || (_[K] = {}),
                                        V = Z[_.uniqueID] || (Z[_.uniqueID] = {}),
                                        m && m === _.nodeName.toLowerCase())
                                            _ = _[C] || _;
                                        else {
                                            if ((z = V[x]) && z[0] === ce && z[1] === O)
                                                return I[2] = z[2];
                                            if (V[x] = I,
                                            I[2] = f(_, M, L))
                                                return !0
                                        }
                            return !1
                        }
                    }
                    function Gt(f) {
                        return f.length > 1 ? function(p, v, C) {
                            for (var m = f.length; m--; )
                                if (!f[m](p, v, C))
                                    return !1;
                            return !0
                        }
                        : f[0]
                    }
                    function ir(f, p, v) {
                        for (var C = 0, m = p.length; C < m; C++)
                            J(f, p[C], v);
                        return v
                    }
                    function At(f, p, v, C, m) {
                        for (var x, D = [], O = 0, _ = f.length, M = p != null; O < _; O++)
                            (x = f[O]) && (!v || v(x, C, m)) && (D.push(x),
                            M && p.push(O));
                        return D
                    }
                    function Qt(f, p, v, C, m, x) {
                        return C && !C[K] && (C = Qt(C)),
                        m && !m[K] && (m = Qt(m, x)),
                        xe(function(D, O, _, M) {
                            var L, z, V, Z = [], I = [], se = O.length, ae = D || ir(p || "*", _.nodeType ? [_] : _, []), ve = f && (D || !p) ? At(ae, Z, f, _, M) : ae, ee = v ? m || (D ? f : se || C) ? [] : O : ve;
                            if (v && v(ve, ee, _, M),
                            C)
                                for (L = At(ee, I),
                                C(L, [], _, M),
                                z = L.length; z--; )
                                    (V = L[z]) && (ee[I[z]] = !(ve[I[z]] = V));
                            if (D) {
                                if (m || f) {
                                    if (m) {
                                        for (L = [],
                                        z = ee.length; z--; )
                                            (V = ee[z]) && L.push(ve[z] = V);
                                        m(null, ee = [], L, M)
                                    }
                                    for (z = ee.length; z--; )
                                        (V = ee[z]) && (L = m ? Re(D, V) : Z[z]) > -1 && (D[L] = !(O[L] = V))
                                }
                            } else
                                ee = At(ee === O ? ee.splice(se, ee.length) : ee),
                                m ? m(null, O, ee, M) : He.apply(O, ee)
                        })
                    }
                    function Kt(f) {
                        for (var p, v, C, m = f.length, x = r.relative[f[0].type], D = x || r.relative[" "], O = x ? 1 : 0, _ = xt(function(z) {
                            return z === p
                        }, D, !0), M = xt(function(z) {
                            return Re(p, z) > -1
                        }, D, !0), L = [function(z, V, Z) {
                            var I = !x && (Z || V !== w) || ((p = V).nodeType ? _(z, V, Z) : M(z, V, Z));
                            return p = null,
                            I
                        }
                        ]; O < m; O++)
                            if (v = r.relative[f[O].type])
                                L = [xt(Gt(L), v)];
                            else {
                                if (v = r.filter[f[O].type].apply(null, f[O].matches),
                                v[K]) {
                                    for (C = ++O; C < m && !r.relative[f[C].type]; C++)
                                        ;
                                    return Qt(O > 1 && Gt(L), O > 1 && Ct(f.slice(0, O - 1).concat({
                                        value: f[O - 2].type === " " ? "*" : ""
                                    })).replace(Tt, "$1"), v, O < C && Kt(f.slice(O, C)), C < m && Kt(f = f.slice(C)), C < m && Ct(f))
                                }
                                L.push(v)
                            }
                        return Gt(L)
                    }
                    function nr(f, p) {
                        var v = p.length > 0
                          , C = f.length > 0
                          , m = function(x, D, O, _, M) {
                            var L, z, V, Z = 0, I = "0", se = x && [], ae = [], ve = w, ee = x || C && r.find.TAG("*", M), ft = ce += ve == null ? 1 : Math.random() || .1, dt = ee.length;
                            for (M && (w = D == k || D || M); I !== dt && (L = ee[I]) != null; I++) {
                                if (C && L) {
                                    for (z = 0,
                                    !D && L.ownerDocument != k && (b(L),
                                    O = !B); V = f[z++]; )
                                        if (V(L, D || k, O)) {
                                            _.push(L);
                                            break
                                        }
                                    M && (ce = ft)
                                }
                                v && ((L = !V && L) && Z--,
                                x && se.push(L))
                            }
                            if (Z += I,
                            v && I !== Z) {
                                for (z = 0; V = p[z++]; )
                                    V(se, ae, D, O);
                                if (x) {
                                    if (Z > 0)
                                        for (; I--; )
                                            se[I] || ae[I] || (ae[I] = Pe.call(_));
                                    ae = At(ae)
                                }
                                He.apply(_, ae),
                                M && !x && ae.length > 0 && Z + p.length > 1 && J.uniqueSort(_)
                            }
                            return M && (ce = ft,
                            w = ve),
                            se
                        };
                        return v ? xe(m) : m
                    }
                    return g = J.compile = function(f, p) {
                        var v, C = [], m = [], x = bt[f + " "];
                        if (!x) {
                            for (p || (p = u(f)),
                            v = p.length; v--; )
                                x = Kt(p[v]),
                                x[K] ? C.push(x) : m.push(x);
                            x = bt(f, nr(m, C)),
                            x.selector = f
                        }
                        return x
                    }
                    ,
                    c = J.select = function(f, p, v, C) {
                        var m, x, D, O, _, M = typeof f == "function" && f, L = !C && u(f = M.selector || f);
                        if (v = v || [],
                        L.length === 1) {
                            if (x = L[0] = L[0].slice(0),
                            x.length > 2 && (D = x[0]).type === "ID" && p.nodeType === 9 && B && r.relative[x[1].type]) {
                                if (p = (r.find.ID(D.matches[0].replace(_e, je), p) || [])[0],
                                p)
                                    M && (p = p.parentNode);
                                else
                                    return v;
                                f = f.slice(x.shift().value.length)
                            }
                            for (m = St.needsContext.test(f) ? 0 : x.length; m-- && (D = x[m],
                            !r.relative[O = D.type]); )
                                if ((_ = r.find[O]) && (C = _(D.matches[0].replace(_e, je), Xt.test(x[0].type) && Yt(p.parentNode) || p))) {
                                    if (x.splice(m, 1),
                                    f = C.length && Ct(x),
                                    !f)
                                        return He.apply(v, C),
                                        v;
                                    break
                                }
                        }
                        return (M || g(f, L))(C, p, !B, v, !p || Xt.test(f) && Yt(p.parentNode) || p),
                        v
                    }
                    ,
                    n.sortStable = K.split("").sort(ze).join("") === K,
                    n.detectDuplicates = !!E,
                    b(),
                    n.sortDetached = Se(function(f) {
                        return f.compareDocumentPosition(k.createElement("fieldset")) & 1
                    }),
                    Se(function(f) {
                        return f.innerHTML = "<a href='#'></a>",
                        f.firstChild.getAttribute("href") === "#"
                    }) || Vt("type|href|height|width", function(f, p, v) {
                        if (!v)
                            return f.getAttribute(p, p.toLowerCase() === "type" ? 1 : 2)
                    }),
                    (!n.attributes || !Se(function(f) {
                        return f.innerHTML = "<input/>",
                        f.firstChild.setAttribute("value", ""),
                        f.firstChild.getAttribute("value") === ""
                    })) && Vt("value", function(f, p, v) {
                        if (!v && f.nodeName.toLowerCase() === "input")
                            return f.defaultValue
                    }),
                    Se(function(f) {
                        return f.getAttribute("disabled") == null
                    }) || Vt(Bt, function(f, p, v) {
                        var C;
                        if (!v)
                            return f[p] === !0 ? p.toLowerCase() : (C = f.getAttributeNode(p)) && C.specified ? C.value : null
                    }),
                    J
                }(W);
                o.find = Le,
                o.expr = Le.selectors,
                o.expr[":"] = o.expr.pseudos,
                o.uniqueSort = o.unique = Le.uniqueSort,
                o.text = Le.getText,
                o.isXMLDoc = Le.isXML,
                o.contains = Le.contains,
                o.escapeSelector = Le.escape;
                var Ue = function(e, t, n) {
                    for (var r = [], a = n !== void 0; (e = e[t]) && e.nodeType !== 9; )
                        if (e.nodeType === 1) {
                            if (a && o(e).is(n))
                                break;
                            r.push(e)
                        }
                    return r
                }
                  , Zt = function(e, t) {
                    for (var n = []; e; e = e.nextSibling)
                        e.nodeType === 1 && e !== t && n.push(e);
                    return n
                }
                  , ei = o.expr.match.needsContext;
                function we(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                }
                var ti = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
                function Dt(e, t, n) {
                    return R(t) ? o.grep(e, function(r, a) {
                        return !!t.call(r, a, r) !== n
                    }) : t.nodeType ? o.grep(e, function(r) {
                        return r === t !== n
                    }) : typeof t != "string" ? o.grep(e, function(r) {
                        return h.call(t, r) > -1 !== n
                    }) : o.filter(t, e, n)
                }
                o.filter = function(e, t, n) {
                    var r = t[0];
                    return n && (e = ":not(" + e + ")"),
                    t.length === 1 && r.nodeType === 1 ? o.find.matchesSelector(r, e) ? [r] : [] : o.find.matches(e, o.grep(t, function(a) {
                        return a.nodeType === 1
                    }))
                }
                ,
                o.fn.extend({
                    find: function(e) {
                        var t, n, r = this.length, a = this;
                        if (typeof e != "string")
                            return this.pushStack(o(e).filter(function() {
                                for (t = 0; t < r; t++)
                                    if (o.contains(a[t], this))
                                        return !0
                            }));
                        for (n = this.pushStack([]),
                        t = 0; t < r; t++)
                            o.find(e, a[t], n);
                        return r > 1 ? o.uniqueSort(n) : n
                    },
                    filter: function(e) {
                        return this.pushStack(Dt(this, e || [], !1))
                    },
                    not: function(e) {
                        return this.pushStack(Dt(this, e || [], !0))
                    },
                    is: function(e) {
                        return !!Dt(this, typeof e == "string" && ei.test(e) ? o(e) : e || [], !1).length
                    }
                });
                var ii, Xi = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, Vi = o.fn.init = function(e, t, n) {
                    var r, a;
                    if (!e)
                        return this;
                    if (n = n || ii,
                    typeof e == "string")
                        if (e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3 ? r = [null, e, null] : r = Xi.exec(e),
                        r && (r[1] || !t))
                            if (r[1]) {
                                if (t = t instanceof o ? t[0] : t,
                                o.merge(this, o.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : X, !0)),
                                ti.test(r[1]) && o.isPlainObject(t))
                                    for (r in t)
                                        R(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                                return this
                            } else
                                return a = X.getElementById(r[2]),
                                a && (this[0] = a,
                                this.length = 1),
                                this;
                        else
                            return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    else {
                        if (e.nodeType)
                            return this[0] = e,
                            this.length = 1,
                            this;
                        if (R(e))
                            return n.ready !== void 0 ? n.ready(e) : e(o)
                    }
                    return o.makeArray(e, this)
                }
                ;
                Vi.prototype = o.fn,
                ii = o(X);
                var Yi = /^(?:parents|prev(?:Until|All))/
                  , Gi = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
                o.fn.extend({
                    has: function(e) {
                        var t = o(e, this)
                          , n = t.length;
                        return this.filter(function() {
                            for (var r = 0; r < n; r++)
                                if (o.contains(this, t[r]))
                                    return !0
                        })
                    },
                    closest: function(e, t) {
                        var n, r = 0, a = this.length, l = [], u = typeof e != "string" && o(e);
                        if (!ei.test(e)) {
                            for (; r < a; r++)
                                for (n = this[r]; n && n !== t; n = n.parentNode)
                                    if (n.nodeType < 11 && (u ? u.index(n) > -1 : n.nodeType === 1 && o.find.matchesSelector(n, e))) {
                                        l.push(n);
                                        break
                                    }
                        }
                        return this.pushStack(l.length > 1 ? o.uniqueSort(l) : l)
                    },
                    index: function(e) {
                        return e ? typeof e == "string" ? h.call(o(e), this[0]) : h.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                    },
                    add: function(e, t) {
                        return this.pushStack(o.uniqueSort(o.merge(this.get(), o(e, t))))
                    },
                    addBack: function(e) {
                        return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
                    }
                });
                function ni(e, t) {
                    for (; (e = e[t]) && e.nodeType !== 1; )
                        ;
                    return e
                }
                o.each({
                    parent: function(e) {
                        var t = e.parentNode;
                        return t && t.nodeType !== 11 ? t : null
                    },
                    parents: function(e) {
                        return Ue(e, "parentNode")
                    },
                    parentsUntil: function(e, t, n) {
                        return Ue(e, "parentNode", n)
                    },
                    next: function(e) {
                        return ni(e, "nextSibling")
                    },
                    prev: function(e) {
                        return ni(e, "previousSibling")
                    },
                    nextAll: function(e) {
                        return Ue(e, "nextSibling")
                    },
                    prevAll: function(e) {
                        return Ue(e, "previousSibling")
                    },
                    nextUntil: function(e, t, n) {
                        return Ue(e, "nextSibling", n)
                    },
                    prevUntil: function(e, t, n) {
                        return Ue(e, "previousSibling", n)
                    },
                    siblings: function(e) {
                        return Zt((e.parentNode || {}).firstChild, e)
                    },
                    children: function(e) {
                        return Zt(e.firstChild)
                    },
                    contents: function(e) {
                        return e.contentDocument != null && A(e.contentDocument) ? e.contentDocument : (we(e, "template") && (e = e.content || e),
                        o.merge([], e.childNodes))
                    }
                }, function(e, t) {
                    o.fn[e] = function(n, r) {
                        var a = o.map(this, t, n);
                        return e.slice(-5) !== "Until" && (r = n),
                        r && typeof r == "string" && (a = o.filter(r, a)),
                        this.length > 1 && (Gi[e] || o.uniqueSort(a),
                        Yi.test(e) && a.reverse()),
                        this.pushStack(a)
                    }
                });
                var De = /[^\x20\t\r\n\f]+/g;
                function Qi(e) {
                    var t = {};
                    return o.each(e.match(De) || [], function(n, r) {
                        t[r] = !0
                    }),
                    t
                }
                o.Callbacks = function(e) {
                    e = typeof e == "string" ? Qi(e) : o.extend({}, e);
                    var t, n, r, a, l = [], u = [], g = -1, c = function() {
                        for (a = a || e.once,
                        r = t = !0; u.length; g = -1)
                            for (n = u.shift(); ++g < l.length; )
                                l[g].apply(n[0], n[1]) === !1 && e.stopOnFalse && (g = l.length,
                                n = !1);
                        e.memory || (n = !1),
                        t = !1,
                        a && (n ? l = [] : l = "")
                    }, w = {
                        add: function() {
                            return l && (n && !t && (g = l.length - 1,
                            u.push(n)),
                            function T(E) {
                                o.each(E, function(b, k) {
                                    R(k) ? (!e.unique || !w.has(k)) && l.push(k) : k && k.length && Ee(k) !== "string" && T(k)
                                })
                            }(arguments),
                            n && !t && c()),
                            this
                        },
                        remove: function() {
                            return o.each(arguments, function(T, E) {
                                for (var b; (b = o.inArray(E, l, b)) > -1; )
                                    l.splice(b, 1),
                                    b <= g && g--
                            }),
                            this
                        },
                        has: function(T) {
                            return T ? o.inArray(T, l) > -1 : l.length > 0
                        },
                        empty: function() {
                            return l && (l = []),
                            this
                        },
                        disable: function() {
                            return a = u = [],
                            l = n = "",
                            this
                        },
                        disabled: function() {
                            return !l
                        },
                        lock: function() {
                            return a = u = [],
                            !n && !t && (l = n = ""),
                            this
                        },
                        locked: function() {
                            return !!a
                        },
                        fireWith: function(T, E) {
                            return a || (E = E || [],
                            E = [T, E.slice ? E.slice() : E],
                            u.push(E),
                            t || c()),
                            this
                        },
                        fire: function() {
                            return w.fireWith(this, arguments),
                            this
                        },
                        fired: function() {
                            return !!r
                        }
                    };
                    return w
                }
                ;
                function Xe(e) {
                    return e
                }
                function pt(e) {
                    throw e
                }
                function ri(e, t, n, r) {
                    var a;
                    try {
                        e && R(a = e.promise) ? a.call(e).done(t).fail(n) : e && R(a = e.then) ? a.call(e, t, n) : t.apply(void 0, [e].slice(r))
                    } catch (l) {
                        n.apply(void 0, [l])
                    }
                }
                o.extend({
                    Deferred: function(e) {
                        var t = [["notify", "progress", o.Callbacks("memory"), o.Callbacks("memory"), 2], ["resolve", "done", o.Callbacks("once memory"), o.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", o.Callbacks("once memory"), o.Callbacks("once memory"), 1, "rejected"]]
                          , n = "pending"
                          , r = {
                            state: function() {
                                return n
                            },
                            always: function() {
                                return a.done(arguments).fail(arguments),
                                this
                            },
                            catch: function(l) {
                                return r.then(null, l)
                            },
                            pipe: function() {
                                var l = arguments;
                                return o.Deferred(function(u) {
                                    o.each(t, function(g, c) {
                                        var w = R(l[c[4]]) && l[c[4]];
                                        a[c[1]](function() {
                                            var T = w && w.apply(this, arguments);
                                            T && R(T.promise) ? T.promise().progress(u.notify).done(u.resolve).fail(u.reject) : u[c[0] + "With"](this, w ? [T] : arguments)
                                        })
                                    }),
                                    l = null
                                }).promise()
                            },
                            then: function(l, u, g) {
                                var c = 0;
                                function w(T, E, b, k) {
                                    return function() {
                                        var H = this
                                          , B = arguments
                                          , P = function() {
                                            var ne, ge;
                                            if (!(T < c)) {
                                                if (ne = b.apply(H, B),
                                                ne === E.promise())
                                                    throw new TypeError("Thenable self-resolution");
                                                ge = ne && (typeof ne == "object" || typeof ne == "function") && ne.then,
                                                R(ge) ? k ? ge.call(ne, w(c, E, Xe, k), w(c, E, pt, k)) : (c++,
                                                ge.call(ne, w(c, E, Xe, k), w(c, E, pt, k), w(c, E, Xe, E.notifyWith))) : (b !== Xe && (H = void 0,
                                                B = [ne]),
                                                (k || E.resolveWith)(H, B))
                                            }
                                        }
                                          , re = k ? P : function() {
                                            try {
                                                P()
                                            } catch (ne) {
                                                o.Deferred.exceptionHook && o.Deferred.exceptionHook(ne, re.stackTrace),
                                                T + 1 >= c && (b !== pt && (H = void 0,
                                                B = [ne]),
                                                E.rejectWith(H, B))
                                            }
                                        }
                                        ;
                                        T ? re() : (o.Deferred.getStackHook && (re.stackTrace = o.Deferred.getStackHook()),
                                        W.setTimeout(re))
                                    }
                                }
                                return o.Deferred(function(T) {
                                    t[0][3].add(w(0, T, R(g) ? g : Xe, T.notifyWith)),
                                    t[1][3].add(w(0, T, R(l) ? l : Xe)),
                                    t[2][3].add(w(0, T, R(u) ? u : pt))
                                }).promise()
                            },
                            promise: function(l) {
                                return l != null ? o.extend(l, r) : r
                            }
                        }
                          , a = {};
                        return o.each(t, function(l, u) {
                            var g = u[2]
                              , c = u[5];
                            r[u[1]] = g.add,
                            c && g.add(function() {
                                n = c
                            }, t[3 - l][2].disable, t[3 - l][3].disable, t[0][2].lock, t[0][3].lock),
                            g.add(u[3].fire),
                            a[u[0]] = function() {
                                return a[u[0] + "With"](this === a ? void 0 : this, arguments),
                                this
                            }
                            ,
                            a[u[0] + "With"] = g.fireWith
                        }),
                        r.promise(a),
                        e && e.call(a, a),
                        a
                    },
                    when: function(e) {
                        var t = arguments.length
                          , n = t
                          , r = Array(n)
                          , a = i.call(arguments)
                          , l = o.Deferred()
                          , u = function(g) {
                            return function(c) {
                                r[g] = this,
                                a[g] = arguments.length > 1 ? i.call(arguments) : c,
                                --t || l.resolveWith(r, a)
                            }
                        };
                        if (t <= 1 && (ri(e, l.done(u(n)).resolve, l.reject, !t),
                        l.state() === "pending" || R(a[n] && a[n].then)))
                            return l.then();
                        for (; n--; )
                            ri(a[n], u(n), l.reject);
                        return l.promise()
                    }
                });
                var Ki = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                o.Deferred.exceptionHook = function(e, t) {
                    W.console && W.console.warn && e && Ki.test(e.name) && W.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
                }
                ,
                o.readyException = function(e) {
                    W.setTimeout(function() {
                        throw e
                    })
                }
                ;
                var Nt = o.Deferred();
                o.fn.ready = function(e) {
                    return Nt.then(e).catch(function(t) {
                        o.readyException(t)
                    }),
                    this
                }
                ,
                o.extend({
                    isReady: !1,
                    readyWait: 1,
                    ready: function(e) {
                        (e === !0 ? --o.readyWait : o.isReady) || (o.isReady = !0,
                        !(e !== !0 && --o.readyWait > 0) && Nt.resolveWith(X, [o]))
                    }
                }),
                o.ready.then = Nt.then;
                function ht() {
                    X.removeEventListener("DOMContentLoaded", ht),
                    W.removeEventListener("load", ht),
                    o.ready()
                }
                X.readyState === "complete" || X.readyState !== "loading" && !X.documentElement.doScroll ? W.setTimeout(o.ready) : (X.addEventListener("DOMContentLoaded", ht),
                W.addEventListener("load", ht));
                var $e = function(e, t, n, r, a, l, u) {
                    var g = 0
                      , c = e.length
                      , w = n == null;
                    if (Ee(n) === "object") {
                        a = !0;
                        for (g in n)
                            $e(e, t, g, n[g], !0, l, u)
                    } else if (r !== void 0 && (a = !0,
                    R(r) || (u = !0),
                    w && (u ? (t.call(e, r),
                    t = null) : (w = t,
                    t = function(T, E, b) {
                        return w.call(o(T), b)
                    }
                    )),
                    t))
                        for (; g < c; g++)
                            t(e[g], n, u ? r : r.call(e[g], g, t(e[g], n)));
                    return a ? e : w ? t.call(e) : c ? t(e[0], n) : l
                }
                  , Ji = /^-ms-/
                  , Zi = /-([a-z])/g;
                function en(e, t) {
                    return t.toUpperCase()
                }
                function Ne(e) {
                    return e.replace(Ji, "ms-").replace(Zi, en)
                }
                var et = function(e) {
                    return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType
                };
                function tt() {
                    this.expando = o.expando + tt.uid++
                }
                tt.uid = 1,
                tt.prototype = {
                    cache: function(e) {
                        var t = e[this.expando];
                        return t || (t = {},
                        et(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0
                        }))),
                        t
                    },
                    set: function(e, t, n) {
                        var r, a = this.cache(e);
                        if (typeof t == "string")
                            a[Ne(t)] = n;
                        else
                            for (r in t)
                                a[Ne(r)] = t[r];
                        return a
                    },
                    get: function(e, t) {
                        return t === void 0 ? this.cache(e) : e[this.expando] && e[this.expando][Ne(t)]
                    },
                    access: function(e, t, n) {
                        return t === void 0 || t && typeof t == "string" && n === void 0 ? this.get(e, t) : (this.set(e, t, n),
                        n !== void 0 ? n : t)
                    },
                    remove: function(e, t) {
                        var n, r = e[this.expando];
                        if (r !== void 0) {
                            if (t !== void 0)
                                for (Array.isArray(t) ? t = t.map(Ne) : (t = Ne(t),
                                t = t in r ? [t] : t.match(De) || []),
                                n = t.length; n--; )
                                    delete r[t[n]];
                            (t === void 0 || o.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                        }
                    },
                    hasData: function(e) {
                        var t = e[this.expando];
                        return t !== void 0 && !o.isEmptyObject(t)
                    }
                };
                var q = new tt
                  , ue = new tt
                  , tn = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
                  , nn = /[A-Z]/g;
                function rn(e) {
                    return e === "true" ? !0 : e === "false" ? !1 : e === "null" ? null : e === +e + "" ? +e : tn.test(e) ? JSON.parse(e) : e
                }
                function si(e, t, n) {
                    var r;
                    if (n === void 0 && e.nodeType === 1)
                        if (r = "data-" + t.replace(nn, "-$&").toLowerCase(),
                        n = e.getAttribute(r),
                        typeof n == "string") {
                            try {
                                n = rn(n)
                            } catch (a) {}
                            ue.set(e, t, n)
                        } else
                            n = void 0;
                    return n
                }
                o.extend({
                    hasData: function(e) {
                        return ue.hasData(e) || q.hasData(e)
                    },
                    data: function(e, t, n) {
                        return ue.access(e, t, n)
                    },
                    removeData: function(e, t) {
                        ue.remove(e, t)
                    },
                    _data: function(e, t, n) {
                        return q.access(e, t, n)
                    },
                    _removeData: function(e, t) {
                        q.remove(e, t)
                    }
                }),
                o.fn.extend({
                    data: function(e, t) {
                        var n, r, a, l = this[0], u = l && l.attributes;
                        if (e === void 0) {
                            if (this.length && (a = ue.get(l),
                            l.nodeType === 1 && !q.get(l, "hasDataAttrs"))) {
                                for (n = u.length; n--; )
                                    u[n] && (r = u[n].name,
                                    r.indexOf("data-") === 0 && (r = Ne(r.slice(5)),
                                    si(l, r, a[r])));
                                q.set(l, "hasDataAttrs", !0)
                            }
                            return a
                        }
                        return typeof e == "object" ? this.each(function() {
                            ue.set(this, e)
                        }) : $e(this, function(g) {
                            var c;
                            if (l && g === void 0)
                                return c = ue.get(l, e),
                                c !== void 0 || (c = si(l, e),
                                c !== void 0) ? c : void 0;
                            this.each(function() {
                                ue.set(this, e, g)
                            })
                        }, null, t, arguments.length > 1, null, !0)
                    },
                    removeData: function(e) {
                        return this.each(function() {
                            ue.remove(this, e)
                        })
                    }
                }),
                o.extend({
                    queue: function(e, t, n) {
                        var r;
                        if (e)
                            return t = (t || "fx") + "queue",
                            r = q.get(e, t),
                            n && (!r || Array.isArray(n) ? r = q.access(e, t, o.makeArray(n)) : r.push(n)),
                            r || []
                    },
                    dequeue: function(e, t) {
                        t = t || "fx";
                        var n = o.queue(e, t)
                          , r = n.length
                          , a = n.shift()
                          , l = o._queueHooks(e, t)
                          , u = function() {
                            o.dequeue(e, t)
                        };
                        a === "inprogress" && (a = n.shift(),
                        r--),
                        a && (t === "fx" && n.unshift("inprogress"),
                        delete l.stop,
                        a.call(e, u, l)),
                        !r && l && l.empty.fire()
                    },
                    _queueHooks: function(e, t) {
                        var n = t + "queueHooks";
                        return q.get(e, n) || q.access(e, n, {
                            empty: o.Callbacks("once memory").add(function() {
                                q.remove(e, [t + "queue", n])
                            })
                        })
                    }
                }),
                o.fn.extend({
                    queue: function(e, t) {
                        var n = 2;
                        return typeof e != "string" && (t = e,
                        e = "fx",
                        n--),
                        arguments.length < n ? o.queue(this[0], e) : t === void 0 ? this : this.each(function() {
                            var r = o.queue(this, e, t);
                            o._queueHooks(this, e),
                            e === "fx" && r[0] !== "inprogress" && o.dequeue(this, e)
                        })
                    },
                    dequeue: function(e) {
                        return this.each(function() {
                            o.dequeue(this, e)
                        })
                    },
                    clearQueue: function(e) {
                        return this.queue(e || "fx", [])
                    },
                    promise: function(e, t) {
                        var n, r = 1, a = o.Deferred(), l = this, u = this.length, g = function() {
                            --r || a.resolveWith(l, [l])
                        };
                        for (typeof e != "string" && (t = e,
                        e = void 0),
                        e = e || "fx"; u--; )
                            n = q.get(l[u], e + "queueHooks"),
                            n && n.empty && (r++,
                            n.empty.add(g));
                        return g(),
                        a.promise(t)
                    }
                });
                var oi = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
                  , it = new RegExp("^(?:([+-])=|)(" + oi + ")([a-z%]*)$","i")
                  , Oe = ["Top", "Right", "Bottom", "Left"]
                  , qe = X.documentElement
                  , Ve = function(e) {
                    return o.contains(e.ownerDocument, e)
                }
                  , sn = {
                    composed: !0
                };
                qe.getRootNode && (Ve = function(e) {
                    return o.contains(e.ownerDocument, e) || e.getRootNode(sn) === e.ownerDocument
                }
                );
                var gt = function(e, t) {
                    return e = t || e,
                    e.style.display === "none" || e.style.display === "" && Ve(e) && o.css(e, "display") === "none"
                };
                function ai(e, t, n, r) {
                    var a, l, u = 20, g = r ? function() {
                        return r.cur()
                    }
                    : function() {
                        return o.css(e, t, "")
                    }
                    , c = g(), w = n && n[3] || (o.cssNumber[t] ? "" : "px"), T = e.nodeType && (o.cssNumber[t] || w !== "px" && +c) && it.exec(o.css(e, t));
                    if (T && T[3] !== w) {
                        for (c = c / 2,
                        w = w || T[3],
                        T = +c || 1; u--; )
                            o.style(e, t, T + w),
                            (1 - l) * (1 - (l = g() / c || .5)) <= 0 && (u = 0),
                            T = T / l;
                        T = T * 2,
                        o.style(e, t, T + w),
                        n = n || []
                    }
                    return n && (T = +T || +c || 0,
                    a = n[1] ? T + (n[1] + 1) * n[2] : +n[2],
                    r && (r.unit = w,
                    r.start = T,
                    r.end = a)),
                    a
                }
                var li = {};
                function on(e) {
                    var t, n = e.ownerDocument, r = e.nodeName, a = li[r];
                    return a || (t = n.body.appendChild(n.createElement(r)),
                    a = o.css(t, "display"),
                    t.parentNode.removeChild(t),
                    a === "none" && (a = "block"),
                    li[r] = a,
                    a)
                }
                function Ye(e, t) {
                    for (var n, r, a = [], l = 0, u = e.length; l < u; l++)
                        r = e[l],
                        r.style && (n = r.style.display,
                        t ? (n === "none" && (a[l] = q.get(r, "display") || null,
                        a[l] || (r.style.display = "")),
                        r.style.display === "" && gt(r) && (a[l] = on(r))) : n !== "none" && (a[l] = "none",
                        q.set(r, "display", n)));
                    for (l = 0; l < u; l++)
                        a[l] != null && (e[l].style.display = a[l]);
                    return e
                }
                o.fn.extend({
                    show: function() {
                        return Ye(this, !0)
                    },
                    hide: function() {
                        return Ye(this)
                    },
                    toggle: function(e) {
                        return typeof e == "boolean" ? e ? this.show() : this.hide() : this.each(function() {
                            gt(this) ? o(this).show() : o(this).hide()
                        })
                    }
                });
                var nt = /^(?:checkbox|radio)$/i
                  , ui = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
                  , fi = /^$|^module$|\/(?:java|ecma)script/i;
                (function() {
                    var e = X.createDocumentFragment()
                      , t = e.appendChild(X.createElement("div"))
                      , n = X.createElement("input");
                    n.setAttribute("type", "radio"),
                    n.setAttribute("checked", "checked"),
                    n.setAttribute("name", "t"),
                    t.appendChild(n),
                    U.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
                    t.innerHTML = "<textarea>x</textarea>",
                    U.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue,
                    t.innerHTML = "<option></option>",
                    U.option = !!t.lastChild
                }
                )();
                var be = {
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };
                be.tbody = be.tfoot = be.colgroup = be.caption = be.thead,
                be.th = be.td,
                U.option || (be.optgroup = be.option = [1, "<select multiple='multiple'>", "</select>"]);
                function fe(e, t) {
                    var n;
                    return typeof e.getElementsByTagName != "undefined" ? n = e.getElementsByTagName(t || "*") : typeof e.querySelectorAll != "undefined" ? n = e.querySelectorAll(t || "*") : n = [],
                    t === void 0 || t && we(e, t) ? o.merge([e], n) : n
                }
                function $t(e, t) {
                    for (var n = 0, r = e.length; n < r; n++)
                        q.set(e[n], "globalEval", !t || q.get(t[n], "globalEval"))
                }
                var an = /<|&#?\w+;/;
                function di(e, t, n, r, a) {
                    for (var l, u, g, c, w, T, E = t.createDocumentFragment(), b = [], k = 0, H = e.length; k < H; k++)
                        if (l = e[k],
                        l || l === 0)
                            if (Ee(l) === "object")
                                o.merge(b, l.nodeType ? [l] : l);
                            else if (!an.test(l))
                                b.push(t.createTextNode(l));
                            else {
                                for (u = u || E.appendChild(t.createElement("div")),
                                g = (ui.exec(l) || ["", ""])[1].toLowerCase(),
                                c = be[g] || be._default,
                                u.innerHTML = c[1] + o.htmlPrefilter(l) + c[2],
                                T = c[0]; T--; )
                                    u = u.lastChild;
                                o.merge(b, u.childNodes),
                                u = E.firstChild,
                                u.textContent = ""
                            }
                    for (E.textContent = "",
                    k = 0; l = b[k++]; ) {
                        if (r && o.inArray(l, r) > -1) {
                            a && a.push(l);
                            continue
                        }
                        if (w = Ve(l),
                        u = fe(E.appendChild(l), "script"),
                        w && $t(u),
                        n)
                            for (T = 0; l = u[T++]; )
                                fi.test(l.type || "") && n.push(l)
                    }
                    return E
                }
                var ci = /^([^.]*)(?:\.(.+)|)/;
                function Ge() {
                    return !0
                }
                function Qe() {
                    return !1
                }
                function ln(e, t) {
                    return e === un() == (t === "focus")
                }
                function un() {
                    try {
                        return X.activeElement
                    } catch (e) {}
                }
                function Ot(e, t, n, r, a, l) {
                    var u, g;
                    if (typeof t == "object") {
                        typeof n != "string" && (r = r || n,
                        n = void 0);
                        for (g in t)
                            Ot(e, g, n, r, t[g], l);
                        return e
                    }
                    if (r == null && a == null ? (a = n,
                    r = n = void 0) : a == null && (typeof n == "string" ? (a = r,
                    r = void 0) : (a = r,
                    r = n,
                    n = void 0)),
                    a === !1)
                        a = Qe;
                    else if (!a)
                        return e;
                    return l === 1 && (u = a,
                    a = function(c) {
                        return o().off(c),
                        u.apply(this, arguments)
                    }
                    ,
                    a.guid = u.guid || (u.guid = o.guid++)),
                    e.each(function() {
                        o.event.add(this, t, a, r, n)
                    })
                }
                o.event = {
                    global: {},
                    add: function(e, t, n, r, a) {
                        var l, u, g, c, w, T, E, b, k, H, B, P = q.get(e);
                        if (et(e))
                            for (n.handler && (l = n,
                            n = l.handler,
                            a = l.selector),
                            a && o.find.matchesSelector(qe, a),
                            n.guid || (n.guid = o.guid++),
                            (c = P.events) || (c = P.events = Object.create(null)),
                            (u = P.handle) || (u = P.handle = function(re) {
                                return typeof o != "undefined" && o.event.triggered !== re.type ? o.event.dispatch.apply(e, arguments) : void 0
                            }
                            ),
                            t = (t || "").match(De) || [""],
                            w = t.length; w--; )
                                g = ci.exec(t[w]) || [],
                                k = B = g[1],
                                H = (g[2] || "").split(".").sort(),
                                k && (E = o.event.special[k] || {},
                                k = (a ? E.delegateType : E.bindType) || k,
                                E = o.event.special[k] || {},
                                T = o.extend({
                                    type: k,
                                    origType: B,
                                    data: r,
                                    handler: n,
                                    guid: n.guid,
                                    selector: a,
                                    needsContext: a && o.expr.match.needsContext.test(a),
                                    namespace: H.join(".")
                                }, l),
                                (b = c[k]) || (b = c[k] = [],
                                b.delegateCount = 0,
                                (!E.setup || E.setup.call(e, r, H, u) === !1) && e.addEventListener && e.addEventListener(k, u)),
                                E.add && (E.add.call(e, T),
                                T.handler.guid || (T.handler.guid = n.guid)),
                                a ? b.splice(b.delegateCount++, 0, T) : b.push(T),
                                o.event.global[k] = !0)
                    },
                    remove: function(e, t, n, r, a) {
                        var l, u, g, c, w, T, E, b, k, H, B, P = q.hasData(e) && q.get(e);
                        if (!(!P || !(c = P.events))) {
                            for (t = (t || "").match(De) || [""],
                            w = t.length; w--; ) {
                                if (g = ci.exec(t[w]) || [],
                                k = B = g[1],
                                H = (g[2] || "").split(".").sort(),
                                !k) {
                                    for (k in c)
                                        o.event.remove(e, k + t[w], n, r, !0);
                                    continue
                                }
                                for (E = o.event.special[k] || {},
                                k = (r ? E.delegateType : E.bindType) || k,
                                b = c[k] || [],
                                g = g[2] && new RegExp("(^|\\.)" + H.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                u = l = b.length; l--; )
                                    T = b[l],
                                    (a || B === T.origType) && (!n || n.guid === T.guid) && (!g || g.test(T.namespace)) && (!r || r === T.selector || r === "**" && T.selector) && (b.splice(l, 1),
                                    T.selector && b.delegateCount--,
                                    E.remove && E.remove.call(e, T));
                                u && !b.length && ((!E.teardown || E.teardown.call(e, H, P.handle) === !1) && o.removeEvent(e, k, P.handle),
                                delete c[k])
                            }
                            o.isEmptyObject(c) && q.remove(e, "handle events")
                        }
                    },
                    dispatch: function(e) {
                        var t, n, r, a, l, u, g = new Array(arguments.length), c = o.event.fix(e), w = (q.get(this, "events") || Object.create(null))[c.type] || [], T = o.event.special[c.type] || {};
                        for (g[0] = c,
                        t = 1; t < arguments.length; t++)
                            g[t] = arguments[t];
                        if (c.delegateTarget = this,
                        !(T.preDispatch && T.preDispatch.call(this, c) === !1)) {
                            for (u = o.event.handlers.call(this, c, w),
                            t = 0; (a = u[t++]) && !c.isPropagationStopped(); )
                                for (c.currentTarget = a.elem,
                                n = 0; (l = a.handlers[n++]) && !c.isImmediatePropagationStopped(); )
                                    (!c.rnamespace || l.namespace === !1 || c.rnamespace.test(l.namespace)) && (c.handleObj = l,
                                    c.data = l.data,
                                    r = ((o.event.special[l.origType] || {}).handle || l.handler).apply(a.elem, g),
                                    r !== void 0 && (c.result = r) === !1 && (c.preventDefault(),
                                    c.stopPropagation()));
                            return T.postDispatch && T.postDispatch.call(this, c),
                            c.result
                        }
                    },
                    handlers: function(e, t) {
                        var n, r, a, l, u, g = [], c = t.delegateCount, w = e.target;
                        if (c && w.nodeType && !(e.type === "click" && e.button >= 1)) {
                            for (; w !== this; w = w.parentNode || this)
                                if (w.nodeType === 1 && !(e.type === "click" && w.disabled === !0)) {
                                    for (l = [],
                                    u = {},
                                    n = 0; n < c; n++)
                                        r = t[n],
                                        a = r.selector + " ",
                                        u[a] === void 0 && (u[a] = r.needsContext ? o(a, this).index(w) > -1 : o.find(a, this, null, [w]).length),
                                        u[a] && l.push(r);
                                    l.length && g.push({
                                        elem: w,
                                        handlers: l
                                    })
                                }
                        }
                        return w = this,
                        c < t.length && g.push({
                            elem: w,
                            handlers: t.slice(c)
                        }),
                        g
                    },
                    addProp: function(e, t) {
                        Object.defineProperty(o.Event.prototype, e, {
                            enumerable: !0,
                            configurable: !0,
                            get: R(t) ? function() {
                                if (this.originalEvent)
                                    return t(this.originalEvent)
                            }
                            : function() {
                                if (this.originalEvent)
                                    return this.originalEvent[e]
                            }
                            ,
                            set: function(n) {
                                Object.defineProperty(this, e, {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: n
                                })
                            }
                        })
                    },
                    fix: function(e) {
                        return e[o.expando] ? e : new o.Event(e)
                    },
                    special: {
                        load: {
                            noBubble: !0
                        },
                        click: {
                            setup: function(e) {
                                var t = this || e;
                                return nt.test(t.type) && t.click && we(t, "input") && yt(t, "click", Ge),
                                !1
                            },
                            trigger: function(e) {
                                var t = this || e;
                                return nt.test(t.type) && t.click && we(t, "input") && yt(t, "click"),
                                !0
                            },
                            _default: function(e) {
                                var t = e.target;
                                return nt.test(t.type) && t.click && we(t, "input") && q.get(t, "click") || we(t, "a")
                            }
                        },
                        beforeunload: {
                            postDispatch: function(e) {
                                e.result !== void 0 && e.originalEvent && (e.originalEvent.returnValue = e.result)
                            }
                        }
                    }
                };
                function yt(e, t, n) {
                    if (!n) {
                        q.get(e, t) === void 0 && o.event.add(e, t, Ge);
                        return
                    }
                    q.set(e, t, !1),
                    o.event.add(e, t, {
                        namespace: !1,
                        handler: function(r) {
                            var a, l, u = q.get(this, t);
                            if (r.isTrigger & 1 && this[t]) {
                                if (u.length)
                                    (o.event.special[t] || {}).delegateType && r.stopPropagation();
                                else if (u = i.call(arguments),
                                q.set(this, t, u),
                                a = n(this, t),
                                this[t](),
                                l = q.get(this, t),
                                u !== l || a ? q.set(this, t, !1) : l = {},
                                u !== l)
                                    return r.stopImmediatePropagation(),
                                    r.preventDefault(),
                                    l && l.value
                            } else
                                u.length && (q.set(this, t, {
                                    value: o.event.trigger(o.extend(u[0], o.Event.prototype), u.slice(1), this)
                                }),
                                r.stopImmediatePropagation())
                        }
                    })
                }
                o.removeEvent = function(e, t, n) {
                    e.removeEventListener && e.removeEventListener(t, n)
                }
                ,
                o.Event = function(e, t) {
                    if (!(this instanceof o.Event))
                        return new o.Event(e,t);
                    e && e.type ? (this.originalEvent = e,
                    this.type = e.type,
                    this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === void 0 && e.returnValue === !1 ? Ge : Qe,
                    this.target = e.target && e.target.nodeType === 3 ? e.target.parentNode : e.target,
                    this.currentTarget = e.currentTarget,
                    this.relatedTarget = e.relatedTarget) : this.type = e,
                    t && o.extend(this, t),
                    this.timeStamp = e && e.timeStamp || Date.now(),
                    this[o.expando] = !0
                }
                ,
                o.Event.prototype = {
                    constructor: o.Event,
                    isDefaultPrevented: Qe,
                    isPropagationStopped: Qe,
                    isImmediatePropagationStopped: Qe,
                    isSimulated: !1,
                    preventDefault: function() {
                        var e = this.originalEvent;
                        this.isDefaultPrevented = Ge,
                        e && !this.isSimulated && e.preventDefault()
                    },
                    stopPropagation: function() {
                        var e = this.originalEvent;
                        this.isPropagationStopped = Ge,
                        e && !this.isSimulated && e.stopPropagation()
                    },
                    stopImmediatePropagation: function() {
                        var e = this.originalEvent;
                        this.isImmediatePropagationStopped = Ge,
                        e && !this.isSimulated && e.stopImmediatePropagation(),
                        this.stopPropagation()
                    }
                },
                o.each({
                    altKey: !0,
                    bubbles: !0,
                    cancelable: !0,
                    changedTouches: !0,
                    ctrlKey: !0,
                    detail: !0,
                    eventPhase: !0,
                    metaKey: !0,
                    pageX: !0,
                    pageY: !0,
                    shiftKey: !0,
                    view: !0,
                    char: !0,
                    code: !0,
                    charCode: !0,
                    key: !0,
                    keyCode: !0,
                    button: !0,
                    buttons: !0,
                    clientX: !0,
                    clientY: !0,
                    offsetX: !0,
                    offsetY: !0,
                    pointerId: !0,
                    pointerType: !0,
                    screenX: !0,
                    screenY: !0,
                    targetTouches: !0,
                    toElement: !0,
                    touches: !0,
                    which: !0
                }, o.event.addProp),
                o.each({
                    focus: "focusin",
                    blur: "focusout"
                }, function(e, t) {
                    o.event.special[e] = {
                        setup: function() {
                            return yt(this, e, ln),
                            !1
                        },
                        trigger: function() {
                            return yt(this, e),
                            !0
                        },
                        _default: function(n) {
                            return q.get(n.target, e)
                        },
                        delegateType: t
                    }
                }),
                o.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    pointerenter: "pointerover",
                    pointerleave: "pointerout"
                }, function(e, t) {
                    o.event.special[e] = {
                        delegateType: t,
                        bindType: t,
                        handle: function(n) {
                            var r, a = this, l = n.relatedTarget, u = n.handleObj;
                            return (!l || l !== a && !o.contains(a, l)) && (n.type = u.origType,
                            r = u.handler.apply(this, arguments),
                            n.type = t),
                            r
                        }
                    }
                }),
                o.fn.extend({
                    on: function(e, t, n, r) {
                        return Ot(this, e, t, n, r)
                    },
                    one: function(e, t, n, r) {
                        return Ot(this, e, t, n, r, 1)
                    },
                    off: function(e, t, n) {
                        var r, a;
                        if (e && e.preventDefault && e.handleObj)
                            return r = e.handleObj,
                            o(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                            this;
                        if (typeof e == "object") {
                            for (a in e)
                                this.off(a, t, e[a]);
                            return this
                        }
                        return (t === !1 || typeof t == "function") && (n = t,
                        t = void 0),
                        n === !1 && (n = Qe),
                        this.each(function() {
                            o.event.remove(this, e, n, t)
                        })
                    }
                });
                var fn = /<script|<style|<link/i
                  , dn = /checked\s*(?:[^=]|=\s*.checked.)/i
                  , cn = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
                function pi(e, t) {
                    return we(e, "table") && we(t.nodeType !== 11 ? t : t.firstChild, "tr") && o(e).children("tbody")[0] || e
                }
                function pn(e) {
                    return e.type = (e.getAttribute("type") !== null) + "/" + e.type,
                    e
                }
                function hn(e) {
                    return (e.type || "").slice(0, 5) === "true/" ? e.type = e.type.slice(5) : e.removeAttribute("type"),
                    e
                }
                function hi(e, t) {
                    var n, r, a, l, u, g, c;
                    if (t.nodeType === 1) {
                        if (q.hasData(e) && (l = q.get(e),
                        c = l.events,
                        c)) {
                            q.remove(t, "handle events");
                            for (a in c)
                                for (n = 0,
                                r = c[a].length; n < r; n++)
                                    o.event.add(t, a, c[a][n])
                        }
                        ue.hasData(e) && (u = ue.access(e),
                        g = o.extend({}, u),
                        ue.set(t, g))
                    }
                }
                function gn(e, t) {
                    var n = t.nodeName.toLowerCase();
                    n === "input" && nt.test(e.type) ? t.checked = e.checked : (n === "input" || n === "textarea") && (t.defaultValue = e.defaultValue)
                }
                function Ke(e, t, n, r) {
                    t = s(t);
                    var a, l, u, g, c, w, T = 0, E = e.length, b = E - 1, k = t[0], H = R(k);
                    if (H || E > 1 && typeof k == "string" && !U.checkClone && dn.test(k))
                        return e.each(function(B) {
                            var P = e.eq(B);
                            H && (t[0] = k.call(this, B, P.html())),
                            Ke(P, t, n, r)
                        });
                    if (E && (a = di(t, e[0].ownerDocument, !1, e, r),
                    l = a.firstChild,
                    a.childNodes.length === 1 && (a = l),
                    l || r)) {
                        for (u = o.map(fe(a, "script"), pn),
                        g = u.length; T < E; T++)
                            c = a,
                            T !== b && (c = o.clone(c, !0, !0),
                            g && o.merge(u, fe(c, "script"))),
                            n.call(e[T], c, T);
                        if (g)
                            for (w = u[u.length - 1].ownerDocument,
                            o.map(u, hn),
                            T = 0; T < g; T++)
                                c = u[T],
                                fi.test(c.type || "") && !q.access(c, "globalEval") && o.contains(w, c) && (c.src && (c.type || "").toLowerCase() !== "module" ? o._evalUrl && !c.noModule && o._evalUrl(c.src, {
                                    nonce: c.nonce || c.getAttribute("nonce")
                                }, w) : Ze(c.textContent.replace(cn, ""), c, w))
                    }
                    return e
                }
                function gi(e, t, n) {
                    for (var r, a = t ? o.filter(t, e) : e, l = 0; (r = a[l]) != null; l++)
                        !n && r.nodeType === 1 && o.cleanData(fe(r)),
                        r.parentNode && (n && Ve(r) && $t(fe(r, "script")),
                        r.parentNode.removeChild(r));
                    return e
                }
                o.extend({
                    htmlPrefilter: function(e) {
                        return e
                    },
                    clone: function(e, t, n) {
                        var r, a, l, u, g = e.cloneNode(!0), c = Ve(e);
                        if (!U.noCloneChecked && (e.nodeType === 1 || e.nodeType === 11) && !o.isXMLDoc(e))
                            for (u = fe(g),
                            l = fe(e),
                            r = 0,
                            a = l.length; r < a; r++)
                                gn(l[r], u[r]);
                        if (t)
                            if (n)
                                for (l = l || fe(e),
                                u = u || fe(g),
                                r = 0,
                                a = l.length; r < a; r++)
                                    hi(l[r], u[r]);
                            else
                                hi(e, g);
                        return u = fe(g, "script"),
                        u.length > 0 && $t(u, !c && fe(e, "script")),
                        g
                    },
                    cleanData: function(e) {
                        for (var t, n, r, a = o.event.special, l = 0; (n = e[l]) !== void 0; l++)
                            if (et(n)) {
                                if (t = n[q.expando]) {
                                    if (t.events)
                                        for (r in t.events)
                                            a[r] ? o.event.remove(n, r) : o.removeEvent(n, r, t.handle);
                                    n[q.expando] = void 0
                                }
                                n[ue.expando] && (n[ue.expando] = void 0)
                            }
                    }
                }),
                o.fn.extend({
                    detach: function(e) {
                        return gi(this, e, !0)
                    },
                    remove: function(e) {
                        return gi(this, e)
                    },
                    text: function(e) {
                        return $e(this, function(t) {
                            return t === void 0 ? o.text(this) : this.empty().each(function() {
                                (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = t)
                            })
                        }, null, e, arguments.length)
                    },
                    append: function() {
                        return Ke(this, arguments, function(e) {
                            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                                var t = pi(this, e);
                                t.appendChild(e)
                            }
                        })
                    },
                    prepend: function() {
                        return Ke(this, arguments, function(e) {
                            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                                var t = pi(this, e);
                                t.insertBefore(e, t.firstChild)
                            }
                        })
                    },
                    before: function() {
                        return Ke(this, arguments, function(e) {
                            this.parentNode && this.parentNode.insertBefore(e, this)
                        })
                    },
                    after: function() {
                        return Ke(this, arguments, function(e) {
                            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                        })
                    },
                    empty: function() {
                        for (var e, t = 0; (e = this[t]) != null; t++)
                            e.nodeType === 1 && (o.cleanData(fe(e, !1)),
                            e.textContent = "");
                        return this
                    },
                    clone: function(e, t) {
                        return e = e == null ? !1 : e,
                        t = t == null ? e : t,
                        this.map(function() {
                            return o.clone(this, e, t)
                        })
                    },
                    html: function(e) {
                        return $e(this, function(t) {
                            var n = this[0] || {}
                              , r = 0
                              , a = this.length;
                            if (t === void 0 && n.nodeType === 1)
                                return n.innerHTML;
                            if (typeof t == "string" && !fn.test(t) && !be[(ui.exec(t) || ["", ""])[1].toLowerCase()]) {
                                t = o.htmlPrefilter(t);
                                try {
                                    for (; r < a; r++)
                                        n = this[r] || {},
                                        n.nodeType === 1 && (o.cleanData(fe(n, !1)),
                                        n.innerHTML = t);
                                    n = 0
                                } catch (l) {}
                            }
                            n && this.empty().append(t)
                        }, null, e, arguments.length)
                    },
                    replaceWith: function() {
                        var e = [];
                        return Ke(this, arguments, function(t) {
                            var n = this.parentNode;
                            o.inArray(this, e) < 0 && (o.cleanData(fe(this)),
                            n && n.replaceChild(t, this))
                        }, e)
                    }
                }),
                o.each({
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith"
                }, function(e, t) {
                    o.fn[e] = function(n) {
                        for (var r, a = [], l = o(n), u = l.length - 1, g = 0; g <= u; g++)
                            r = g === u ? this : this.clone(!0),
                            o(l[g])[t](r),
                            d.apply(a, r.get());
                        return this.pushStack(a)
                    }
                });
                var _t = new RegExp("^(" + oi + ")(?!px)[a-z%]+$","i")
                  , jt = /^--/
                  , vt = function(e) {
                    var t = e.ownerDocument.defaultView;
                    return (!t || !t.opener) && (t = W),
                    t.getComputedStyle(e)
                }
                  , yi = function(e, t, n) {
                    var r, a, l = {};
                    for (a in t)
                        l[a] = e.style[a],
                        e.style[a] = t[a];
                    r = n.call(e);
                    for (a in t)
                        e.style[a] = l[a];
                    return r
                }
                  , yn = new RegExp(Oe.join("|"),"i")
                  , vi = "[\\x20\\t\\r\\n\\f]"
                  , vn = new RegExp("^" + vi + "+|((?:^|[^\\\\])(?:\\\\.)*)" + vi + "+$","g");
                (function() {
                    function e() {
                        if (w) {
                            c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                            w.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                            qe.appendChild(c).appendChild(w);
                            var T = W.getComputedStyle(w);
                            n = T.top !== "1%",
                            g = t(T.marginLeft) === 12,
                            w.style.right = "60%",
                            l = t(T.right) === 36,
                            r = t(T.width) === 36,
                            w.style.position = "absolute",
                            a = t(w.offsetWidth / 3) === 12,
                            qe.removeChild(c),
                            w = null
                        }
                    }
                    function t(T) {
                        return Math.round(parseFloat(T))
                    }
                    var n, r, a, l, u, g, c = X.createElement("div"), w = X.createElement("div");
                    w.style && (w.style.backgroundClip = "content-box",
                    w.cloneNode(!0).style.backgroundClip = "",
                    U.clearCloneStyle = w.style.backgroundClip === "content-box",
                    o.extend(U, {
                        boxSizingReliable: function() {
                            return e(),
                            r
                        },
                        pixelBoxStyles: function() {
                            return e(),
                            l
                        },
                        pixelPosition: function() {
                            return e(),
                            n
                        },
                        reliableMarginLeft: function() {
                            return e(),
                            g
                        },
                        scrollboxSize: function() {
                            return e(),
                            a
                        },
                        reliableTrDimensions: function() {
                            var T, E, b, k;
                            return u == null && (T = X.createElement("table"),
                            E = X.createElement("tr"),
                            b = X.createElement("div"),
                            T.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
                            E.style.cssText = "border:1px solid",
                            E.style.height = "1px",
                            b.style.height = "9px",
                            b.style.display = "block",
                            qe.appendChild(T).appendChild(E).appendChild(b),
                            k = W.getComputedStyle(E),
                            u = parseInt(k.height, 10) + parseInt(k.borderTopWidth, 10) + parseInt(k.borderBottomWidth, 10) === E.offsetHeight,
                            qe.removeChild(T)),
                            u
                        }
                    }))
                }
                )();
                function rt(e, t, n) {
                    var r, a, l, u, g = jt.test(t), c = e.style;
                    return n = n || vt(e),
                    n && (u = n.getPropertyValue(t) || n[t],
                    g && u && (u = u.replace(vn, "$1") || void 0),
                    u === "" && !Ve(e) && (u = o.style(e, t)),
                    !U.pixelBoxStyles() && _t.test(u) && yn.test(t) && (r = c.width,
                    a = c.minWidth,
                    l = c.maxWidth,
                    c.minWidth = c.maxWidth = c.width = u,
                    u = n.width,
                    c.width = r,
                    c.minWidth = a,
                    c.maxWidth = l)),
                    u !== void 0 ? u + "" : u
                }
                function mi(e, t) {
                    return {
                        get: function() {
                            if (e()) {
                                delete this.get;
                                return
                            }
                            return (this.get = t).apply(this, arguments)
                        }
                    }
                }
                var wi = ["Webkit", "Moz", "ms"]
                  , bi = X.createElement("div").style
                  , Ti = {};
                function mn(e) {
                    for (var t = e[0].toUpperCase() + e.slice(1), n = wi.length; n--; )
                        if (e = wi[n] + t,
                        e in bi)
                            return e
                }
                function Pt(e) {
                    var t = o.cssProps[e] || Ti[e];
                    return t || (e in bi ? e : Ti[e] = mn(e) || e)
                }
                var wn = /^(none|table(?!-c[ea]).+)/
                  , bn = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                }
                  , Si = {
                    letterSpacing: "0",
                    fontWeight: "400"
                };
                function ki(e, t, n) {
                    var r = it.exec(t);
                    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
                }
                function Ht(e, t, n, r, a, l) {
                    var u = t === "width" ? 1 : 0
                      , g = 0
                      , c = 0;
                    if (n === (r ? "border" : "content"))
                        return 0;
                    for (; u < 4; u += 2)
                        n === "margin" && (c += o.css(e, n + Oe[u], !0, a)),
                        r ? (n === "content" && (c -= o.css(e, "padding" + Oe[u], !0, a)),
                        n !== "margin" && (c -= o.css(e, "border" + Oe[u] + "Width", !0, a))) : (c += o.css(e, "padding" + Oe[u], !0, a),
                        n !== "padding" ? c += o.css(e, "border" + Oe[u] + "Width", !0, a) : g += o.css(e, "border" + Oe[u] + "Width", !0, a));
                    return !r && l >= 0 && (c += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - l - c - g - .5)) || 0),
                    c
                }
                function Ci(e, t, n) {
                    var r = vt(e)
                      , a = !U.boxSizingReliable() || n
                      , l = a && o.css(e, "boxSizing", !1, r) === "border-box"
                      , u = l
                      , g = rt(e, t, r)
                      , c = "offset" + t[0].toUpperCase() + t.slice(1);
                    if (_t.test(g)) {
                        if (!n)
                            return g;
                        g = "auto"
                    }
                    return (!U.boxSizingReliable() && l || !U.reliableTrDimensions() && we(e, "tr") || g === "auto" || !parseFloat(g) && o.css(e, "display", !1, r) === "inline") && e.getClientRects().length && (l = o.css(e, "boxSizing", !1, r) === "border-box",
                    u = c in e,
                    u && (g = e[c])),
                    g = parseFloat(g) || 0,
                    g + Ht(e, t, n || (l ? "border" : "content"), u, r, g) + "px"
                }
                o.extend({
                    cssHooks: {
                        opacity: {
                            get: function(e, t) {
                                if (t) {
                                    var n = rt(e, "opacity");
                                    return n === "" ? "1" : n
                                }
                            }
                        }
                    },
                    cssNumber: {
                        animationIterationCount: !0,
                        columnCount: !0,
                        fillOpacity: !0,
                        flexGrow: !0,
                        flexShrink: !0,
                        fontWeight: !0,
                        gridArea: !0,
                        gridColumn: !0,
                        gridColumnEnd: !0,
                        gridColumnStart: !0,
                        gridRow: !0,
                        gridRowEnd: !0,
                        gridRowStart: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0
                    },
                    cssProps: {},
                    style: function(e, t, n, r) {
                        if (!(!e || e.nodeType === 3 || e.nodeType === 8 || !e.style)) {
                            var a, l, u, g = Ne(t), c = jt.test(t), w = e.style;
                            if (c || (t = Pt(g)),
                            u = o.cssHooks[t] || o.cssHooks[g],
                            n !== void 0) {
                                if (l = typeof n,
                                l === "string" && (a = it.exec(n)) && a[1] && (n = ai(e, t, a),
                                l = "number"),
                                n == null || n !== n)
                                    return;
                                l === "number" && !c && (n += a && a[3] || (o.cssNumber[g] ? "" : "px")),
                                !U.clearCloneStyle && n === "" && t.indexOf("background") === 0 && (w[t] = "inherit"),
                                (!u || !("set"in u) || (n = u.set(e, n, r)) !== void 0) && (c ? w.setProperty(t, n) : w[t] = n)
                            } else
                                return u && "get"in u && (a = u.get(e, !1, r)) !== void 0 ? a : w[t]
                        }
                    },
                    css: function(e, t, n, r) {
                        var a, l, u, g = Ne(t), c = jt.test(t);
                        return c || (t = Pt(g)),
                        u = o.cssHooks[t] || o.cssHooks[g],
                        u && "get"in u && (a = u.get(e, !0, n)),
                        a === void 0 && (a = rt(e, t, r)),
                        a === "normal" && t in Si && (a = Si[t]),
                        n === "" || n ? (l = parseFloat(a),
                        n === !0 || isFinite(l) ? l || 0 : a) : a
                    }
                }),
                o.each(["height", "width"], function(e, t) {
                    o.cssHooks[t] = {
                        get: function(n, r, a) {
                            if (r)
                                return wn.test(o.css(n, "display")) && (!n.getClientRects().length || !n.getBoundingClientRect().width) ? yi(n, bn, function() {
                                    return Ci(n, t, a)
                                }) : Ci(n, t, a)
                        },
                        set: function(n, r, a) {
                            var l, u = vt(n), g = !U.scrollboxSize() && u.position === "absolute", c = g || a, w = c && o.css(n, "boxSizing", !1, u) === "border-box", T = a ? Ht(n, t, a, w, u) : 0;
                            return w && g && (T -= Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(u[t]) - Ht(n, t, "border", !1, u) - .5)),
                            T && (l = it.exec(r)) && (l[3] || "px") !== "px" && (n.style[t] = r,
                            r = o.css(n, t)),
                            ki(n, r, T)
                        }
                    }
                }),
                o.cssHooks.marginLeft = mi(U.reliableMarginLeft, function(e, t) {
                    if (t)
                        return (parseFloat(rt(e, "marginLeft")) || e.getBoundingClientRect().left - yi(e, {
                            marginLeft: 0
                        }, function() {
                            return e.getBoundingClientRect().left
                        })) + "px"
                }),
                o.each({
                    margin: "",
                    padding: "",
                    border: "Width"
                }, function(e, t) {
                    o.cssHooks[e + t] = {
                        expand: function(n) {
                            for (var r = 0, a = {}, l = typeof n == "string" ? n.split(" ") : [n]; r < 4; r++)
                                a[e + Oe[r] + t] = l[r] || l[r - 2] || l[0];
                            return a
                        }
                    },
                    e !== "margin" && (o.cssHooks[e + t].set = ki)
                }),
                o.fn.extend({
                    css: function(e, t) {
                        return $e(this, function(n, r, a) {
                            var l, u, g = {}, c = 0;
                            if (Array.isArray(r)) {
                                for (l = vt(n),
                                u = r.length; c < u; c++)
                                    g[r[c]] = o.css(n, r[c], !1, l);
                                return g
                            }
                            return a !== void 0 ? o.style(n, r, a) : o.css(n, r)
                        }, e, t, arguments.length > 1)
                    }
                });
                function de(e, t, n, r, a) {
                    return new de.prototype.init(e,t,n,r,a)
                }
                o.Tween = de,
                de.prototype = {
                    constructor: de,
                    init: function(e, t, n, r, a, l) {
                        this.elem = e,
                        this.prop = n,
                        this.easing = a || o.easing._default,
                        this.options = t,
                        this.start = this.now = this.cur(),
                        this.end = r,
                        this.unit = l || (o.cssNumber[n] ? "" : "px")
                    },
                    cur: function() {
                        var e = de.propHooks[this.prop];
                        return e && e.get ? e.get(this) : de.propHooks._default.get(this)
                    },
                    run: function(e) {
                        var t, n = de.propHooks[this.prop];
                        return this.options.duration ? this.pos = t = o.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                        this.now = (this.end - this.start) * t + this.start,
                        this.options.step && this.options.step.call(this.elem, this.now, this),
                        n && n.set ? n.set(this) : de.propHooks._default.set(this),
                        this
                    }
                },
                de.prototype.init.prototype = de.prototype,
                de.propHooks = {
                    _default: {
                        get: function(e) {
                            var t;
                            return e.elem.nodeType !== 1 || e.elem[e.prop] != null && e.elem.style[e.prop] == null ? e.elem[e.prop] : (t = o.css(e.elem, e.prop, ""),
                            !t || t === "auto" ? 0 : t)
                        },
                        set: function(e) {
                            o.fx.step[e.prop] ? o.fx.step[e.prop](e) : e.elem.nodeType === 1 && (o.cssHooks[e.prop] || e.elem.style[Pt(e.prop)] != null) ? o.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                        }
                    }
                },
                de.propHooks.scrollTop = de.propHooks.scrollLeft = {
                    set: function(e) {
                        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                    }
                },
                o.easing = {
                    linear: function(e) {
                        return e
                    },
                    swing: function(e) {
                        return .5 - Math.cos(e * Math.PI) / 2
                    },
                    _default: "swing"
                },
                o.fx = de.prototype.init,
                o.fx.step = {};
                var Je, mt, Tn = /^(?:toggle|show|hide)$/, Sn = /queueHooks$/;
                function Lt() {
                    mt && (X.hidden === !1 && W.requestAnimationFrame ? W.requestAnimationFrame(Lt) : W.setTimeout(Lt, o.fx.interval),
                    o.fx.tick())
                }
                function xi() {
                    return W.setTimeout(function() {
                        Je = void 0
                    }),
                    Je = Date.now()
                }
                function wt(e, t) {
                    var n, r = 0, a = {
                        height: e
                    };
                    for (t = t ? 1 : 0; r < 4; r += 2 - t)
                        n = Oe[r],
                        a["margin" + n] = a["padding" + n] = e;
                    return t && (a.opacity = a.width = e),
                    a
                }
                function Ai(e, t, n) {
                    for (var r, a = (Ce.tweeners[t] || []).concat(Ce.tweeners["*"]), l = 0, u = a.length; l < u; l++)
                        if (r = a[l].call(n, t, e))
                            return r
                }
                function kn(e, t, n) {
                    var r, a, l, u, g, c, w, T, E = "width"in t || "height"in t, b = this, k = {}, H = e.style, B = e.nodeType && gt(e), P = q.get(e, "fxshow");
                    n.queue || (u = o._queueHooks(e, "fx"),
                    u.unqueued == null && (u.unqueued = 0,
                    g = u.empty.fire,
                    u.empty.fire = function() {
                        u.unqueued || g()
                    }
                    ),
                    u.unqueued++,
                    b.always(function() {
                        b.always(function() {
                            u.unqueued--,
                            o.queue(e, "fx").length || u.empty.fire()
                        })
                    }));
                    for (r in t)
                        if (a = t[r],
                        Tn.test(a)) {
                            if (delete t[r],
                            l = l || a === "toggle",
                            a === (B ? "hide" : "show"))
                                if (a === "show" && P && P[r] !== void 0)
                                    B = !0;
                                else
                                    continue;
                            k[r] = P && P[r] || o.style(e, r)
                        }
                    if (c = !o.isEmptyObject(t),
                    !(!c && o.isEmptyObject(k))) {
                        E && e.nodeType === 1 && (n.overflow = [H.overflow, H.overflowX, H.overflowY],
                        w = P && P.display,
                        w == null && (w = q.get(e, "display")),
                        T = o.css(e, "display"),
                        T === "none" && (w ? T = w : (Ye([e], !0),
                        w = e.style.display || w,
                        T = o.css(e, "display"),
                        Ye([e]))),
                        (T === "inline" || T === "inline-block" && w != null) && o.css(e, "float") === "none" && (c || (b.done(function() {
                            H.display = w
                        }),
                        w == null && (T = H.display,
                        w = T === "none" ? "" : T)),
                        H.display = "inline-block")),
                        n.overflow && (H.overflow = "hidden",
                        b.always(function() {
                            H.overflow = n.overflow[0],
                            H.overflowX = n.overflow[1],
                            H.overflowY = n.overflow[2]
                        })),
                        c = !1;
                        for (r in k)
                            c || (P ? "hidden"in P && (B = P.hidden) : P = q.access(e, "fxshow", {
                                display: w
                            }),
                            l && (P.hidden = !B),
                            B && Ye([e], !0),
                            b.done(function() {
                                B || Ye([e]),
                                q.remove(e, "fxshow");
                                for (r in k)
                                    o.style(e, r, k[r])
                            })),
                            c = Ai(B ? P[r] : 0, r, b),
                            r in P || (P[r] = c.start,
                            B && (c.end = c.start,
                            c.start = 0))
                    }
                }
                function Cn(e, t) {
                    var n, r, a, l, u;
                    for (n in e)
                        if (r = Ne(n),
                        a = t[r],
                        l = e[n],
                        Array.isArray(l) && (a = l[1],
                        l = e[n] = l[0]),
                        n !== r && (e[r] = l,
                        delete e[n]),
                        u = o.cssHooks[r],
                        u && "expand"in u) {
                            l = u.expand(l),
                            delete e[r];
                            for (n in l)
                                n in e || (e[n] = l[n],
                                t[n] = a)
                        } else
                            t[r] = a
                }
                function Ce(e, t, n) {
                    var r, a, l = 0, u = Ce.prefilters.length, g = o.Deferred().always(function() {
                        delete c.elem
                    }), c = function() {
                        if (a)
                            return !1;
                        for (var E = Je || xi(), b = Math.max(0, w.startTime + w.duration - E), k = b / w.duration || 0, H = 1 - k, B = 0, P = w.tweens.length; B < P; B++)
                            w.tweens[B].run(H);
                        return g.notifyWith(e, [w, H, b]),
                        H < 1 && P ? b : (P || g.notifyWith(e, [w, 1, 0]),
                        g.resolveWith(e, [w]),
                        !1)
                    }, w = g.promise({
                        elem: e,
                        props: o.extend({}, t),
                        opts: o.extend(!0, {
                            specialEasing: {},
                            easing: o.easing._default
                        }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: Je || xi(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(E, b) {
                            var k = o.Tween(e, w.opts, E, b, w.opts.specialEasing[E] || w.opts.easing);
                            return w.tweens.push(k),
                            k
                        },
                        stop: function(E) {
                            var b = 0
                              , k = E ? w.tweens.length : 0;
                            if (a)
                                return this;
                            for (a = !0; b < k; b++)
                                w.tweens[b].run(1);
                            return E ? (g.notifyWith(e, [w, 1, 0]),
                            g.resolveWith(e, [w, E])) : g.rejectWith(e, [w, E]),
                            this
                        }
                    }), T = w.props;
                    for (Cn(T, w.opts.specialEasing); l < u; l++)
                        if (r = Ce.prefilters[l].call(w, e, T, w.opts),
                        r)
                            return R(r.stop) && (o._queueHooks(w.elem, w.opts.queue).stop = r.stop.bind(r)),
                            r;
                    return o.map(T, Ai, w),
                    R(w.opts.start) && w.opts.start.call(e, w),
                    w.progress(w.opts.progress).done(w.opts.done, w.opts.complete).fail(w.opts.fail).always(w.opts.always),
                    o.fx.timer(o.extend(c, {
                        elem: e,
                        anim: w,
                        queue: w.opts.queue
                    })),
                    w
                }
                o.Animation = o.extend(Ce, {
                    tweeners: {
                        "*": [function(e, t) {
                            var n = this.createTween(e, t);
                            return ai(n.elem, e, it.exec(t), n),
                            n
                        }
                        ]
                    },
                    tweener: function(e, t) {
                        R(e) ? (t = e,
                        e = ["*"]) : e = e.match(De);
                        for (var n, r = 0, a = e.length; r < a; r++)
                            n = e[r],
                            Ce.tweeners[n] = Ce.tweeners[n] || [],
                            Ce.tweeners[n].unshift(t)
                    },
                    prefilters: [kn],
                    prefilter: function(e, t) {
                        t ? Ce.prefilters.unshift(e) : Ce.prefilters.push(e)
                    }
                }),
                o.speed = function(e, t, n) {
                    var r = e && typeof e == "object" ? o.extend({}, e) : {
                        complete: n || !n && t || R(e) && e,
                        duration: e,
                        easing: n && t || t && !R(t) && t
                    };
                    return o.fx.off ? r.duration = 0 : typeof r.duration != "number" && (r.duration in o.fx.speeds ? r.duration = o.fx.speeds[r.duration] : r.duration = o.fx.speeds._default),
                    (r.queue == null || r.queue === !0) && (r.queue = "fx"),
                    r.old = r.complete,
                    r.complete = function() {
                        R(r.old) && r.old.call(this),
                        r.queue && o.dequeue(this, r.queue)
                    }
                    ,
                    r
                }
                ,
                o.fn.extend({
                    fadeTo: function(e, t, n, r) {
                        return this.filter(gt).css("opacity", 0).show().end().animate({
                            opacity: t
                        }, e, n, r)
                    },
                    animate: function(e, t, n, r) {
                        var a = o.isEmptyObject(e)
                          , l = o.speed(t, n, r)
                          , u = function() {
                            var g = Ce(this, o.extend({}, e), l);
                            (a || q.get(this, "finish")) && g.stop(!0)
                        };
                        return u.finish = u,
                        a || l.queue === !1 ? this.each(u) : this.queue(l.queue, u)
                    },
                    stop: function(e, t, n) {
                        var r = function(a) {
                            var l = a.stop;
                            delete a.stop,
                            l(n)
                        };
                        return typeof e != "string" && (n = t,
                        t = e,
                        e = void 0),
                        t && this.queue(e || "fx", []),
                        this.each(function() {
                            var a = !0
                              , l = e != null && e + "queueHooks"
                              , u = o.timers
                              , g = q.get(this);
                            if (l)
                                g[l] && g[l].stop && r(g[l]);
                            else
                                for (l in g)
                                    g[l] && g[l].stop && Sn.test(l) && r(g[l]);
                            for (l = u.length; l--; )
                                u[l].elem === this && (e == null || u[l].queue === e) && (u[l].anim.stop(n),
                                a = !1,
                                u.splice(l, 1));
                            (a || !n) && o.dequeue(this, e)
                        })
                    },
                    finish: function(e) {
                        return e !== !1 && (e = e || "fx"),
                        this.each(function() {
                            var t, n = q.get(this), r = n[e + "queue"], a = n[e + "queueHooks"], l = o.timers, u = r ? r.length : 0;
                            for (n.finish = !0,
                            o.queue(this, e, []),
                            a && a.stop && a.stop.call(this, !0),
                            t = l.length; t--; )
                                l[t].elem === this && l[t].queue === e && (l[t].anim.stop(!0),
                                l.splice(t, 1));
                            for (t = 0; t < u; t++)
                                r[t] && r[t].finish && r[t].finish.call(this);
                            delete n.finish
                        })
                    }
                }),
                o.each(["toggle", "show", "hide"], function(e, t) {
                    var n = o.fn[t];
                    o.fn[t] = function(r, a, l) {
                        return r == null || typeof r == "boolean" ? n.apply(this, arguments) : this.animate(wt(t, !0), r, a, l)
                    }
                }),
                o.each({
                    slideDown: wt("show"),
                    slideUp: wt("hide"),
                    slideToggle: wt("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, function(e, t) {
                    o.fn[e] = function(n, r, a) {
                        return this.animate(t, n, r, a)
                    }
                }),
                o.timers = [],
                o.fx.tick = function() {
                    var e, t = 0, n = o.timers;
                    for (Je = Date.now(); t < n.length; t++)
                        e = n[t],
                        !e() && n[t] === e && n.splice(t--, 1);
                    n.length || o.fx.stop(),
                    Je = void 0
                }
                ,
                o.fx.timer = function(e) {
                    o.timers.push(e),
                    o.fx.start()
                }
                ,
                o.fx.interval = 13,
                o.fx.start = function() {
                    mt || (mt = !0,
                    Lt())
                }
                ,
                o.fx.stop = function() {
                    mt = null
                }
                ,
                o.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                },
                o.fn.delay = function(e, t) {
                    return e = o.fx && o.fx.speeds[e] || e,
                    t = t || "fx",
                    this.queue(t, function(n, r) {
                        var a = W.setTimeout(n, e);
                        r.stop = function() {
                            W.clearTimeout(a)
                        }
                    })
                }
                ,
                function() {
                    var e = X.createElement("input")
                      , t = X.createElement("select")
                      , n = t.appendChild(X.createElement("option"));
                    e.type = "checkbox",
                    U.checkOn = e.value !== "",
                    U.optSelected = n.selected,
                    e = X.createElement("input"),
                    e.value = "t",
                    e.type = "radio",
                    U.radioValue = e.value === "t"
                }();
                var Ei, st = o.expr.attrHandle;
                o.fn.extend({
                    attr: function(e, t) {
                        return $e(this, o.attr, e, t, arguments.length > 1)
                    },
                    removeAttr: function(e) {
                        return this.each(function() {
                            o.removeAttr(this, e)
                        })
                    }
                }),
                o.extend({
                    attr: function(e, t, n) {
                        var r, a, l = e.nodeType;
                        if (!(l === 3 || l === 8 || l === 2)) {
                            if (typeof e.getAttribute == "undefined")
                                return o.prop(e, t, n);
                            if ((l !== 1 || !o.isXMLDoc(e)) && (a = o.attrHooks[t.toLowerCase()] || (o.expr.match.bool.test(t) ? Ei : void 0)),
                            n !== void 0) {
                                if (n === null) {
                                    o.removeAttr(e, t);
                                    return
                                }
                                return a && "set"in a && (r = a.set(e, n, t)) !== void 0 ? r : (e.setAttribute(t, n + ""),
                                n)
                            }
                            return a && "get"in a && (r = a.get(e, t)) !== null ? r : (r = o.find.attr(e, t),
                            r == null ? void 0 : r)
                        }
                    },
                    attrHooks: {
                        type: {
                            set: function(e, t) {
                                if (!U.radioValue && t === "radio" && we(e, "input")) {
                                    var n = e.value;
                                    return e.setAttribute("type", t),
                                    n && (e.value = n),
                                    t
                                }
                            }
                        }
                    },
                    removeAttr: function(e, t) {
                        var n, r = 0, a = t && t.match(De);
                        if (a && e.nodeType === 1)
                            for (; n = a[r++]; )
                                e.removeAttribute(n)
                    }
                }),
                Ei = {
                    set: function(e, t, n) {
                        return t === !1 ? o.removeAttr(e, n) : e.setAttribute(n, n),
                        n
                    }
                },
                o.each(o.expr.match.bool.source.match(/\w+/g), function(e, t) {
                    var n = st[t] || o.find.attr;
                    st[t] = function(r, a, l) {
                        var u, g, c = a.toLowerCase();
                        return l || (g = st[c],
                        st[c] = u,
                        u = n(r, a, l) != null ? c : null,
                        st[c] = g),
                        u
                    }
                });
                var xn = /^(?:input|select|textarea|button)$/i
                  , An = /^(?:a|area)$/i;
                o.fn.extend({
                    prop: function(e, t) {
                        return $e(this, o.prop, e, t, arguments.length > 1)
                    },
                    removeProp: function(e) {
                        return this.each(function() {
                            delete this[o.propFix[e] || e]
                        })
                    }
                }),
                o.extend({
                    prop: function(e, t, n) {
                        var r, a, l = e.nodeType;
                        if (!(l === 3 || l === 8 || l === 2))
                            return (l !== 1 || !o.isXMLDoc(e)) && (t = o.propFix[t] || t,
                            a = o.propHooks[t]),
                            n !== void 0 ? a && "set"in a && (r = a.set(e, n, t)) !== void 0 ? r : e[t] = n : a && "get"in a && (r = a.get(e, t)) !== null ? r : e[t]
                    },
                    propHooks: {
                        tabIndex: {
                            get: function(e) {
                                var t = o.find.attr(e, "tabindex");
                                return t ? parseInt(t, 10) : xn.test(e.nodeName) || An.test(e.nodeName) && e.href ? 0 : -1
                            }
                        }
                    },
                    propFix: {
                        for: "htmlFor",
                        class: "className"
                    }
                }),
                U.optSelected || (o.propHooks.selected = {
                    get: function(e) {
                        var t = e.parentNode;
                        return t && t.parentNode && t.parentNode.selectedIndex,
                        null
                    },
                    set: function(e) {
                        var t = e.parentNode;
                        t && (t.selectedIndex,
                        t.parentNode && t.parentNode.selectedIndex)
                    }
                }),
                o.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                    o.propFix[this.toLowerCase()] = this
                });
                function Me(e) {
                    var t = e.match(De) || [];
                    return t.join(" ")
                }
                function Ie(e) {
                    return e.getAttribute && e.getAttribute("class") || ""
                }
                function qt(e) {
                    return Array.isArray(e) ? e : typeof e == "string" ? e.match(De) || [] : []
                }
                o.fn.extend({
                    addClass: function(e) {
                        var t, n, r, a, l, u;
                        return R(e) ? this.each(function(g) {
                            o(this).addClass(e.call(this, g, Ie(this)))
                        }) : (t = qt(e),
                        t.length ? this.each(function() {
                            if (r = Ie(this),
                            n = this.nodeType === 1 && " " + Me(r) + " ",
                            n) {
                                for (l = 0; l < t.length; l++)
                                    a = t[l],
                                    n.indexOf(" " + a + " ") < 0 && (n += a + " ");
                                u = Me(n),
                                r !== u && this.setAttribute("class", u)
                            }
                        }) : this)
                    },
                    removeClass: function(e) {
                        var t, n, r, a, l, u;
                        return R(e) ? this.each(function(g) {
                            o(this).removeClass(e.call(this, g, Ie(this)))
                        }) : arguments.length ? (t = qt(e),
                        t.length ? this.each(function() {
                            if (r = Ie(this),
                            n = this.nodeType === 1 && " " + Me(r) + " ",
                            n) {
                                for (l = 0; l < t.length; l++)
                                    for (a = t[l]; n.indexOf(" " + a + " ") > -1; )
                                        n = n.replace(" " + a + " ", " ");
                                u = Me(n),
                                r !== u && this.setAttribute("class", u)
                            }
                        }) : this) : this.attr("class", "")
                    },
                    toggleClass: function(e, t) {
                        var n, r, a, l, u = typeof e, g = u === "string" || Array.isArray(e);
                        return R(e) ? this.each(function(c) {
                            o(this).toggleClass(e.call(this, c, Ie(this), t), t)
                        }) : typeof t == "boolean" && g ? t ? this.addClass(e) : this.removeClass(e) : (n = qt(e),
                        this.each(function() {
                            if (g)
                                for (l = o(this),
                                a = 0; a < n.length; a++)
                                    r = n[a],
                                    l.hasClass(r) ? l.removeClass(r) : l.addClass(r);
                            else
                                (e === void 0 || u === "boolean") && (r = Ie(this),
                                r && q.set(this, "__className__", r),
                                this.setAttribute && this.setAttribute("class", r || e === !1 ? "" : q.get(this, "__className__") || ""))
                        }))
                    },
                    hasClass: function(e) {
                        var t, n, r = 0;
                        for (t = " " + e + " "; n = this[r++]; )
                            if (n.nodeType === 1 && (" " + Me(Ie(n)) + " ").indexOf(t) > -1)
                                return !0;
                        return !1
                    }
                });
                var En = /\r/g;
                o.fn.extend({
                    val: function(e) {
                        var t, n, r, a = this[0];
                        return arguments.length ? (r = R(e),
                        this.each(function(l) {
                            var u;
                            this.nodeType === 1 && (r ? u = e.call(this, l, o(this).val()) : u = e,
                            u == null ? u = "" : typeof u == "number" ? u += "" : Array.isArray(u) && (u = o.map(u, function(g) {
                                return g == null ? "" : g + ""
                            })),
                            t = o.valHooks[this.type] || o.valHooks[this.nodeName.toLowerCase()],
                            (!t || !("set"in t) || t.set(this, u, "value") === void 0) && (this.value = u))
                        })) : a ? (t = o.valHooks[a.type] || o.valHooks[a.nodeName.toLowerCase()],
                        t && "get"in t && (n = t.get(a, "value")) !== void 0 ? n : (n = a.value,
                        typeof n == "string" ? n.replace(En, "") : n == null ? "" : n)) : void 0
                    }
                }),
                o.extend({
                    valHooks: {
                        option: {
                            get: function(e) {
                                var t = o.find.attr(e, "value");
                                return t != null ? t : Me(o.text(e))
                            }
                        },
                        select: {
                            get: function(e) {
                                var t, n, r, a = e.options, l = e.selectedIndex, u = e.type === "select-one", g = u ? null : [], c = u ? l + 1 : a.length;
                                for (l < 0 ? r = c : r = u ? l : 0; r < c; r++)
                                    if (n = a[r],
                                    (n.selected || r === l) && !n.disabled && (!n.parentNode.disabled || !we(n.parentNode, "optgroup"))) {
                                        if (t = o(n).val(),
                                        u)
                                            return t;
                                        g.push(t)
                                    }
                                return g
                            },
                            set: function(e, t) {
                                for (var n, r, a = e.options, l = o.makeArray(t), u = a.length; u--; )
                                    r = a[u],
                                    (r.selected = o.inArray(o.valHooks.option.get(r), l) > -1) && (n = !0);
                                return n || (e.selectedIndex = -1),
                                l
                            }
                        }
                    }
                }),
                o.each(["radio", "checkbox"], function() {
                    o.valHooks[this] = {
                        set: function(e, t) {
                            if (Array.isArray(t))
                                return e.checked = o.inArray(o(e).val(), t) > -1
                        }
                    },
                    U.checkOn || (o.valHooks[this].get = function(e) {
                        return e.getAttribute("value") === null ? "on" : e.value
                    }
                    )
                }),
                U.focusin = "onfocusin"in W;
                var Di = /^(?:focusinfocus|focusoutblur)$/
                  , Ni = function(e) {
                    e.stopPropagation()
                };
                o.extend(o.event, {
                    trigger: function(e, t, n, r) {
                        var a, l, u, g, c, w, T, E, b = [n || X], k = j.call(e, "type") ? e.type : e, H = j.call(e, "namespace") ? e.namespace.split(".") : [];
                        if (l = E = u = n = n || X,
                        !(n.nodeType === 3 || n.nodeType === 8) && !Di.test(k + o.event.triggered) && (k.indexOf(".") > -1 && (H = k.split("."),
                        k = H.shift(),
                        H.sort()),
                        c = k.indexOf(":") < 0 && "on" + k,
                        e = e[o.expando] ? e : new o.Event(k,typeof e == "object" && e),
                        e.isTrigger = r ? 2 : 3,
                        e.namespace = H.join("."),
                        e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + H.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                        e.result = void 0,
                        e.target || (e.target = n),
                        t = t == null ? [e] : o.makeArray(t, [e]),
                        T = o.event.special[k] || {},
                        !(!r && T.trigger && T.trigger.apply(n, t) === !1))) {
                            if (!r && !T.noBubble && !le(n)) {
                                for (g = T.delegateType || k,
                                Di.test(g + k) || (l = l.parentNode); l; l = l.parentNode)
                                    b.push(l),
                                    u = l;
                                u === (n.ownerDocument || X) && b.push(u.defaultView || u.parentWindow || W)
                            }
                            for (a = 0; (l = b[a++]) && !e.isPropagationStopped(); )
                                E = l,
                                e.type = a > 1 ? g : T.bindType || k,
                                w = (q.get(l, "events") || Object.create(null))[e.type] && q.get(l, "handle"),
                                w && w.apply(l, t),
                                w = c && l[c],
                                w && w.apply && et(l) && (e.result = w.apply(l, t),
                                e.result === !1 && e.preventDefault());
                            return e.type = k,
                            !r && !e.isDefaultPrevented() && (!T._default || T._default.apply(b.pop(), t) === !1) && et(n) && c && R(n[k]) && !le(n) && (u = n[c],
                            u && (n[c] = null),
                            o.event.triggered = k,
                            e.isPropagationStopped() && E.addEventListener(k, Ni),
                            n[k](),
                            e.isPropagationStopped() && E.removeEventListener(k, Ni),
                            o.event.triggered = void 0,
                            u && (n[c] = u)),
                            e.result
                        }
                    },
                    simulate: function(e, t, n) {
                        var r = o.extend(new o.Event, n, {
                            type: e,
                            isSimulated: !0
                        });
                        o.event.trigger(r, null, t)
                    }
                }),
                o.fn.extend({
                    trigger: function(e, t) {
                        return this.each(function() {
                            o.event.trigger(e, t, this)
                        })
                    },
                    triggerHandler: function(e, t) {
                        var n = this[0];
                        if (n)
                            return o.event.trigger(e, t, n, !0)
                    }
                }),
                U.focusin || o.each({
                    focus: "focusin",
                    blur: "focusout"
                }, function(e, t) {
                    var n = function(r) {
                        o.event.simulate(t, r.target, o.event.fix(r))
                    };
                    o.event.special[t] = {
                        setup: function() {
                            var r = this.ownerDocument || this.document || this
                              , a = q.access(r, t);
                            a || r.addEventListener(e, n, !0),
                            q.access(r, t, (a || 0) + 1)
                        },
                        teardown: function() {
                            var r = this.ownerDocument || this.document || this
                              , a = q.access(r, t) - 1;
                            a ? q.access(r, t, a) : (r.removeEventListener(e, n, !0),
                            q.remove(r, t))
                        }
                    }
                });
                var ot = W.location
                  , $i = {
                    guid: Date.now()
                }
                  , Mt = /\?/;
                o.parseXML = function(e) {
                    var t, n;
                    if (!e || typeof e != "string")
                        return null;
                    try {
                        t = new W.DOMParser().parseFromString(e, "text/xml")
                    } catch (r) {}
                    return n = t && t.getElementsByTagName("parsererror")[0],
                    (!t || n) && o.error("Invalid XML: " + (n ? o.map(n.childNodes, function(r) {
                        return r.textContent
                    }).join(`
`) : e)),
                    t
                }
                ;
                var Dn = /\[\]$/
                  , Oi = /\r?\n/g
                  , Nn = /^(?:submit|button|image|reset|file)$/i
                  , $n = /^(?:input|select|textarea|keygen)/i;
                function It(e, t, n, r) {
                    var a;
                    if (Array.isArray(t))
                        o.each(t, function(l, u) {
                            n || Dn.test(e) ? r(e, u) : It(e + "[" + (typeof u == "object" && u != null ? l : "") + "]", u, n, r)
                        });
                    else if (!n && Ee(t) === "object")
                        for (a in t)
                            It(e + "[" + a + "]", t[a], n, r);
                    else
                        r(e, t)
                }
                o.param = function(e, t) {
                    var n, r = [], a = function(l, u) {
                        var g = R(u) ? u() : u;
                        r[r.length] = encodeURIComponent(l) + "=" + encodeURIComponent(g == null ? "" : g)
                    };
                    if (e == null)
                        return "";
                    if (Array.isArray(e) || e.jquery && !o.isPlainObject(e))
                        o.each(e, function() {
                            a(this.name, this.value)
                        });
                    else
                        for (n in e)
                            It(n, e[n], t, a);
                    return r.join("&")
                }
                ,
                o.fn.extend({
                    serialize: function() {
                        return o.param(this.serializeArray())
                    },
                    serializeArray: function() {
                        return this.map(function() {
                            var e = o.prop(this, "elements");
                            return e ? o.makeArray(e) : this
                        }).filter(function() {
                            var e = this.type;
                            return this.name && !o(this).is(":disabled") && $n.test(this.nodeName) && !Nn.test(e) && (this.checked || !nt.test(e))
                        }).map(function(e, t) {
                            var n = o(this).val();
                            return n == null ? null : Array.isArray(n) ? o.map(n, function(r) {
                                return {
                                    name: t.name,
                                    value: r.replace(Oi, `\r
`)
                                }
                            }) : {
                                name: t.name,
                                value: n.replace(Oi, `\r
`)
                            }
                        }).get()
                    }
                });
                var On = /%20/g
                  , _n = /#.*$/
                  , jn = /([?&])_=[^&]*/
                  , Pn = /^(.*?):[ \t]*([^\r\n]*)$/mg
                  , Hn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
                  , Ln = /^(?:GET|HEAD)$/
                  , qn = /^\/\//
                  , _i = {}
                  , zt = {}
                  , ji = "*/".concat("*")
                  , Wt = X.createElement("a");
                Wt.href = ot.href;
                function Pi(e) {
                    return function(t, n) {
                        typeof t != "string" && (n = t,
                        t = "*");
                        var r, a = 0, l = t.toLowerCase().match(De) || [];
                        if (R(n))
                            for (; r = l[a++]; )
                                r[0] === "+" ? (r = r.slice(1) || "*",
                                (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                    }
                }
                function Hi(e, t, n, r) {
                    var a = {}
                      , l = e === zt;
                    function u(g) {
                        var c;
                        return a[g] = !0,
                        o.each(e[g] || [], function(w, T) {
                            var E = T(t, n, r);
                            if (typeof E == "string" && !l && !a[E])
                                return t.dataTypes.unshift(E),
                                u(E),
                                !1;
                            if (l)
                                return !(c = E)
                        }),
                        c
                    }
                    return u(t.dataTypes[0]) || !a["*"] && u("*")
                }
                function Rt(e, t) {
                    var n, r, a = o.ajaxSettings.flatOptions || {};
                    for (n in t)
                        t[n] !== void 0 && ((a[n] ? e : r || (r = {}))[n] = t[n]);
                    return r && o.extend(!0, e, r),
                    e
                }
                function Mn(e, t, n) {
                    for (var r, a, l, u, g = e.contents, c = e.dataTypes; c[0] === "*"; )
                        c.shift(),
                        r === void 0 && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r) {
                        for (a in g)
                            if (g[a] && g[a].test(r)) {
                                c.unshift(a);
                                break
                            }
                    }
                    if (c[0]in n)
                        l = c[0];
                    else {
                        for (a in n) {
                            if (!c[0] || e.converters[a + " " + c[0]]) {
                                l = a;
                                break
                            }
                            u || (u = a)
                        }
                        l = l || u
                    }
                    if (l)
                        return l !== c[0] && c.unshift(l),
                        n[l]
                }
                function In(e, t, n, r) {
                    var a, l, u, g, c, w = {}, T = e.dataTypes.slice();
                    if (T[1])
                        for (u in e.converters)
                            w[u.toLowerCase()] = e.converters[u];
                    for (l = T.shift(); l; )
                        if (e.responseFields[l] && (n[e.responseFields[l]] = t),
                        !c && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        c = l,
                        l = T.shift(),
                        l) {
                            if (l === "*")
                                l = c;
                            else if (c !== "*" && c !== l) {
                                if (u = w[c + " " + l] || w["* " + l],
                                !u) {
                                    for (a in w)
                                        if (g = a.split(" "),
                                        g[1] === l && (u = w[c + " " + g[0]] || w["* " + g[0]],
                                        u)) {
                                            u === !0 ? u = w[a] : w[a] !== !0 && (l = g[0],
                                            T.unshift(g[1]));
                                            break
                                        }
                                }
                                if (u !== !0)
                                    if (u && e.throws)
                                        t = u(t);
                                    else
                                        try {
                                            t = u(t)
                                        } catch (E) {
                                            return {
                                                state: "parsererror",
                                                error: u ? E : "No conversion from " + c + " to " + l
                                            }
                                        }
                            }
                        }
                    return {
                        state: "success",
                        data: t
                    }
                }
                o.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: ot.href,
                        type: "GET",
                        isLocal: Hn.test(ot.protocol),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: {
                            "*": ji,
                            text: "text/plain",
                            html: "text/html",
                            xml: "application/xml, text/xml",
                            json: "application/json, text/javascript"
                        },
                        contents: {
                            xml: /\bxml\b/,
                            html: /\bhtml/,
                            json: /\bjson\b/
                        },
                        responseFields: {
                            xml: "responseXML",
                            text: "responseText",
                            json: "responseJSON"
                        },
                        converters: {
                            "* text": String,
                            "text html": !0,
                            "text json": JSON.parse,
                            "text xml": o.parseXML
                        },
                        flatOptions: {
                            url: !0,
                            context: !0
                        }
                    },
                    ajaxSetup: function(e, t) {
                        return t ? Rt(Rt(e, o.ajaxSettings), t) : Rt(o.ajaxSettings, e)
                    },
                    ajaxPrefilter: Pi(_i),
                    ajaxTransport: Pi(zt),
                    ajax: function(e, t) {
                        typeof e == "object" && (t = e,
                        e = void 0),
                        t = t || {};
                        var n, r, a, l, u, g, c, w, T, E, b = o.ajaxSetup({}, t), k = b.context || b, H = b.context && (k.nodeType || k.jquery) ? o(k) : o.event, B = o.Deferred(), P = o.Callbacks("once memory"), re = b.statusCode || {}, ne = {}, ge = {}, K = "canceled", F = {
                            readyState: 0,
                            getResponseHeader: function(G) {
                                var te;
                                if (c) {
                                    if (!l)
                                        for (l = {}; te = Pn.exec(a); )
                                            l[te[1].toLowerCase() + " "] = (l[te[1].toLowerCase() + " "] || []).concat(te[2]);
                                    te = l[G.toLowerCase() + " "]
                                }
                                return te == null ? null : te.join(", ")
                            },
                            getAllResponseHeaders: function() {
                                return c ? a : null
                            },
                            setRequestHeader: function(G, te) {
                                return c == null && (G = ge[G.toLowerCase()] = ge[G.toLowerCase()] || G,
                                ne[G] = te),
                                this
                            },
                            overrideMimeType: function(G) {
                                return c == null && (b.mimeType = G),
                                this
                            },
                            statusCode: function(G) {
                                var te;
                                if (G)
                                    if (c)
                                        F.always(G[F.status]);
                                    else
                                        for (te in G)
                                            re[te] = [re[te], G[te]];
                                return this
                            },
                            abort: function(G) {
                                var te = G || K;
                                return n && n.abort(te),
                                ce(0, te),
                                this
                            }
                        };
                        if (B.promise(F),
                        b.url = ((e || b.url || ot.href) + "").replace(qn, ot.protocol + "//"),
                        b.type = t.method || t.type || b.method || b.type,
                        b.dataTypes = (b.dataType || "*").toLowerCase().match(De) || [""],
                        b.crossDomain == null) {
                            g = X.createElement("a");
                            try {
                                g.href = b.url,
                                g.href = g.href,
                                b.crossDomain = Wt.protocol + "//" + Wt.host != g.protocol + "//" + g.host
                            } catch (G) {
                                b.crossDomain = !0
                            }
                        }
                        if (b.data && b.processData && typeof b.data != "string" && (b.data = o.param(b.data, b.traditional)),
                        Hi(_i, b, t, F),
                        c)
                            return F;
                        w = o.event && b.global,
                        w && o.active++ === 0 && o.event.trigger("ajaxStart"),
                        b.type = b.type.toUpperCase(),
                        b.hasContent = !Ln.test(b.type),
                        r = b.url.replace(_n, ""),
                        b.hasContent ? b.data && b.processData && (b.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (b.data = b.data.replace(On, "+")) : (E = b.url.slice(r.length),
                        b.data && (b.processData || typeof b.data == "string") && (r += (Mt.test(r) ? "&" : "?") + b.data,
                        delete b.data),
                        b.cache === !1 && (r = r.replace(jn, "$1"),
                        E = (Mt.test(r) ? "&" : "?") + "_=" + $i.guid++ + E),
                        b.url = r + E),
                        b.ifModified && (o.lastModified[r] && F.setRequestHeader("If-Modified-Since", o.lastModified[r]),
                        o.etag[r] && F.setRequestHeader("If-None-Match", o.etag[r])),
                        (b.data && b.hasContent && b.contentType !== !1 || t.contentType) && F.setRequestHeader("Content-Type", b.contentType),
                        F.setRequestHeader("Accept", b.dataTypes[0] && b.accepts[b.dataTypes[0]] ? b.accepts[b.dataTypes[0]] + (b.dataTypes[0] !== "*" ? ", " + ji + "; q=0.01" : "") : b.accepts["*"]);
                        for (T in b.headers)
                            F.setRequestHeader(T, b.headers[T]);
                        if (b.beforeSend && (b.beforeSend.call(k, F, b) === !1 || c))
                            return F.abort();
                        if (K = "abort",
                        P.add(b.complete),
                        F.done(b.success),
                        F.fail(b.error),
                        n = Hi(zt, b, t, F),
                        !n)
                            ce(-1, "No Transport");
                        else {
                            if (F.readyState = 1,
                            w && H.trigger("ajaxSend", [F, b]),
                            c)
                                return F;
                            b.async && b.timeout > 0 && (u = W.setTimeout(function() {
                                F.abort("timeout")
                            }, b.timeout));
                            try {
                                c = !1,
                                n.send(ne, ce)
                            } catch (G) {
                                if (c)
                                    throw G;
                                ce(-1, G)
                            }
                        }
                        function ce(G, te, lt, bt) {
                            var ye, ze, We, pe, Pe, Te = te;
                            c || (c = !0,
                            u && W.clearTimeout(u),
                            n = void 0,
                            a = bt || "",
                            F.readyState = G > 0 ? 4 : 0,
                            ye = G >= 200 && G < 300 || G === 304,
                            lt && (pe = Mn(b, F, lt)),
                            !ye && o.inArray("script", b.dataTypes) > -1 && o.inArray("json", b.dataTypes) < 0 && (b.converters["text script"] = function() {}
                            ),
                            pe = In(b, pe, F, ye),
                            ye ? (b.ifModified && (Pe = F.getResponseHeader("Last-Modified"),
                            Pe && (o.lastModified[r] = Pe),
                            Pe = F.getResponseHeader("etag"),
                            Pe && (o.etag[r] = Pe)),
                            G === 204 || b.type === "HEAD" ? Te = "nocontent" : G === 304 ? Te = "notmodified" : (Te = pe.state,
                            ze = pe.data,
                            We = pe.error,
                            ye = !We)) : (We = Te,
                            (G || !Te) && (Te = "error",
                            G < 0 && (G = 0))),
                            F.status = G,
                            F.statusText = (te || Te) + "",
                            ye ? B.resolveWith(k, [ze, Te, F]) : B.rejectWith(k, [F, Te, We]),
                            F.statusCode(re),
                            re = void 0,
                            w && H.trigger(ye ? "ajaxSuccess" : "ajaxError", [F, b, ye ? ze : We]),
                            P.fireWith(k, [F, Te]),
                            w && (H.trigger("ajaxComplete", [F, b]),
                            --o.active || o.event.trigger("ajaxStop")))
                        }
                        return F
                    },
                    getJSON: function(e, t, n) {
                        return o.get(e, t, n, "json")
                    },
                    getScript: function(e, t) {
                        return o.get(e, void 0, t, "script")
                    }
                }),
                o.each(["get", "post"], function(e, t) {
                    o[t] = function(n, r, a, l) {
                        return R(r) && (l = l || a,
                        a = r,
                        r = void 0),
                        o.ajax(o.extend({
                            url: n,
                            type: t,
                            dataType: l,
                            data: r,
                            success: a
                        }, o.isPlainObject(n) && n))
                    }
                }),
                o.ajaxPrefilter(function(e) {
                    var t;
                    for (t in e.headers)
                        t.toLowerCase() === "content-type" && (e.contentType = e.headers[t] || "")
                }),
                o._evalUrl = function(e, t, n) {
                    return o.ajax({
                        url: e,
                        type: "GET",
                        dataType: "script",
                        cache: !0,
                        async: !1,
                        global: !1,
                        converters: {
                            "text script": function() {}
                        },
                        dataFilter: function(r) {
                            o.globalEval(r, t, n)
                        }
                    })
                }
                ,
                o.fn.extend({
                    wrapAll: function(e) {
                        var t;
                        return this[0] && (R(e) && (e = e.call(this[0])),
                        t = o(e, this[0].ownerDocument).eq(0).clone(!0),
                        this[0].parentNode && t.insertBefore(this[0]),
                        t.map(function() {
                            for (var n = this; n.firstElementChild; )
                                n = n.firstElementChild;
                            return n
                        }).append(this)),
                        this
                    },
                    wrapInner: function(e) {
                        return R(e) ? this.each(function(t) {
                            o(this).wrapInner(e.call(this, t))
                        }) : this.each(function() {
                            var t = o(this)
                              , n = t.contents();
                            n.length ? n.wrapAll(e) : t.append(e)
                        })
                    },
                    wrap: function(e) {
                        var t = R(e);
                        return this.each(function(n) {
                            o(this).wrapAll(t ? e.call(this, n) : e)
                        })
                    },
                    unwrap: function(e) {
                        return this.parent(e).not("body").each(function() {
                            o(this).replaceWith(this.childNodes)
                        }),
                        this
                    }
                }),
                o.expr.pseudos.hidden = function(e) {
                    return !o.expr.pseudos.visible(e)
                }
                ,
                o.expr.pseudos.visible = function(e) {
                    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
                }
                ,
                o.ajaxSettings.xhr = function() {
                    try {
                        return new W.XMLHttpRequest
                    } catch (e) {}
                }
                ;
                var zn = {
                    0: 200,
                    1223: 204
                }
                  , at = o.ajaxSettings.xhr();
                U.cors = !!at && "withCredentials"in at,
                U.ajax = at = !!at,
                o.ajaxTransport(function(e) {
                    var t, n;
                    if (U.cors || at && !e.crossDomain)
                        return {
                            send: function(r, a) {
                                var l, u = e.xhr();
                                if (u.open(e.type, e.url, e.async, e.username, e.password),
                                e.xhrFields)
                                    for (l in e.xhrFields)
                                        u[l] = e.xhrFields[l];
                                e.mimeType && u.overrideMimeType && u.overrideMimeType(e.mimeType),
                                !e.crossDomain && !r["X-Requested-With"] && (r["X-Requested-With"] = "XMLHttpRequest");
                                for (l in r)
                                    u.setRequestHeader(l, r[l]);
                                t = function(g) {
                                    return function() {
                                        t && (t = n = u.onload = u.onerror = u.onabort = u.ontimeout = u.onreadystatechange = null,
                                        g === "abort" ? u.abort() : g === "error" ? typeof u.status != "number" ? a(0, "error") : a(u.status, u.statusText) : a(zn[u.status] || u.status, u.statusText, (u.responseType || "text") !== "text" || typeof u.responseText != "string" ? {
                                            binary: u.response
                                        } : {
                                            text: u.responseText
                                        }, u.getAllResponseHeaders()))
                                    }
                                }
                                ,
                                u.onload = t(),
                                n = u.onerror = u.ontimeout = t("error"),
                                u.onabort !== void 0 ? u.onabort = n : u.onreadystatechange = function() {
                                    u.readyState === 4 && W.setTimeout(function() {
                                        t && n()
                                    })
                                }
                                ,
                                t = t("abort");
                                try {
                                    u.send(e.hasContent && e.data || null)
                                } catch (g) {
                                    if (t)
                                        throw g
                                }
                            },
                            abort: function() {
                                t && t()
                            }
                        }
                }),
                o.ajaxPrefilter(function(e) {
                    e.crossDomain && (e.contents.script = !1)
                }),
                o.ajaxSetup({
                    accepts: {
                        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                    },
                    contents: {
                        script: /\b(?:java|ecma)script\b/
                    },
                    converters: {
                        "text script": function(e) {
                            return o.globalEval(e),
                            e
                        }
                    }
                }),
                o.ajaxPrefilter("script", function(e) {
                    e.cache === void 0 && (e.cache = !1),
                    e.crossDomain && (e.type = "GET")
                }),
                o.ajaxTransport("script", function(e) {
                    if (e.crossDomain || e.scriptAttrs) {
                        var t, n;
                        return {
                            send: function(r, a) {
                                t = o("<script>").attr(e.scriptAttrs || {}).prop({
                                    charset: e.scriptCharset,
                                    src: e.url
                                }).on("load error", n = function(l) {
                                    t.remove(),
                                    n = null,
                                    l && a(l.type === "error" ? 404 : 200, l.type)
                                }
                                ),
                                X.head.appendChild(t[0])
                            },
                            abort: function() {
                                n && n()
                            }
                        }
                    }
                });
                var Li = []
                  , Ft = /(=)\?(?=&|$)|\?\?/;
                o.ajaxSetup({
                    jsonp: "callback",
                    jsonpCallback: function() {
                        var e = Li.pop() || o.expando + "_" + $i.guid++;
                        return this[e] = !0,
                        e
                    }
                }),
                o.ajaxPrefilter("json jsonp", function(e, t, n) {
                    var r, a, l, u = e.jsonp !== !1 && (Ft.test(e.url) ? "url" : typeof e.data == "string" && (e.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && Ft.test(e.data) && "data");
                    if (u || e.dataTypes[0] === "jsonp")
                        return r = e.jsonpCallback = R(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                        u ? e[u] = e[u].replace(Ft, "$1" + r) : e.jsonp !== !1 && (e.url += (Mt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                        e.converters["script json"] = function() {
                            return l || o.error(r + " was not called"),
                            l[0]
                        }
                        ,
                        e.dataTypes[0] = "json",
                        a = W[r],
                        W[r] = function() {
                            l = arguments
                        }
                        ,
                        n.always(function() {
                            a === void 0 ? o(W).removeProp(r) : W[r] = a,
                            e[r] && (e.jsonpCallback = t.jsonpCallback,
                            Li.push(r)),
                            l && R(a) && a(l[0]),
                            l = a = void 0
                        }),
                        "script"
                }),
                U.createHTMLDocument = function() {
                    var e = X.implementation.createHTMLDocument("").body;
                    return e.innerHTML = "<form></form><form></form>",
                    e.childNodes.length === 2
                }(),
                o.parseHTML = function(e, t, n) {
                    if (typeof e != "string")
                        return [];
                    typeof t == "boolean" && (n = t,
                    t = !1);
                    var r, a, l;
                    return t || (U.createHTMLDocument ? (t = X.implementation.createHTMLDocument(""),
                    r = t.createElement("base"),
                    r.href = X.location.href,
                    t.head.appendChild(r)) : t = X),
                    a = ti.exec(e),
                    l = !n && [],
                    a ? [t.createElement(a[1])] : (a = di([e], t, l),
                    l && l.length && o(l).remove(),
                    o.merge([], a.childNodes))
                }
                ,
                o.fn.load = function(e, t, n) {
                    var r, a, l, u = this, g = e.indexOf(" ");
                    return g > -1 && (r = Me(e.slice(g)),
                    e = e.slice(0, g)),
                    R(t) ? (n = t,
                    t = void 0) : t && typeof t == "object" && (a = "POST"),
                    u.length > 0 && o.ajax({
                        url: e,
                        type: a || "GET",
                        dataType: "html",
                        data: t
                    }).done(function(c) {
                        l = arguments,
                        u.html(r ? o("<div>").append(o.parseHTML(c)).find(r) : c)
                    }).always(n && function(c, w) {
                        u.each(function() {
                            n.apply(this, l || [c.responseText, w, c])
                        })
                    }
                    ),
                    this
                }
                ,
                o.expr.pseudos.animated = function(e) {
                    return o.grep(o.timers, function(t) {
                        return e === t.elem
                    }).length
                }
                ,
                o.offset = {
                    setOffset: function(e, t, n) {
                        var r, a, l, u, g, c, w, T = o.css(e, "position"), E = o(e), b = {};
                        T === "static" && (e.style.position = "relative"),
                        g = E.offset(),
                        l = o.css(e, "top"),
                        c = o.css(e, "left"),
                        w = (T === "absolute" || T === "fixed") && (l + c).indexOf("auto") > -1,
                        w ? (r = E.position(),
                        u = r.top,
                        a = r.left) : (u = parseFloat(l) || 0,
                        a = parseFloat(c) || 0),
                        R(t) && (t = t.call(e, n, o.extend({}, g))),
                        t.top != null && (b.top = t.top - g.top + u),
                        t.left != null && (b.left = t.left - g.left + a),
                        "using"in t ? t.using.call(e, b) : E.css(b)
                    }
                },
                o.fn.extend({
                    offset: function(e) {
                        if (arguments.length)
                            return e === void 0 ? this : this.each(function(a) {
                                o.offset.setOffset(this, e, a)
                            });
                        var t, n, r = this[0];
                        if (r)
                            return r.getClientRects().length ? (t = r.getBoundingClientRect(),
                            n = r.ownerDocument.defaultView,
                            {
                                top: t.top + n.pageYOffset,
                                left: t.left + n.pageXOffset
                            }) : {
                                top: 0,
                                left: 0
                            }
                    },
                    position: function() {
                        if (this[0]) {
                            var e, t, n, r = this[0], a = {
                                top: 0,
                                left: 0
                            };
                            if (o.css(r, "position") === "fixed")
                                t = r.getBoundingClientRect();
                            else {
                                for (t = this.offset(),
                                n = r.ownerDocument,
                                e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && o.css(e, "position") === "static"; )
                                    e = e.parentNode;
                                e && e !== r && e.nodeType === 1 && (a = o(e).offset(),
                                a.top += o.css(e, "borderTopWidth", !0),
                                a.left += o.css(e, "borderLeftWidth", !0))
                            }
                            return {
                                top: t.top - a.top - o.css(r, "marginTop", !0),
                                left: t.left - a.left - o.css(r, "marginLeft", !0)
                            }
                        }
                    },
                    offsetParent: function() {
                        return this.map(function() {
                            for (var e = this.offsetParent; e && o.css(e, "position") === "static"; )
                                e = e.offsetParent;
                            return e || qe
                        })
                    }
                }),
                o.each({
                    scrollLeft: "pageXOffset",
                    scrollTop: "pageYOffset"
                }, function(e, t) {
                    var n = t === "pageYOffset";
                    o.fn[e] = function(r) {
                        return $e(this, function(a, l, u) {
                            var g;
                            if (le(a) ? g = a : a.nodeType === 9 && (g = a.defaultView),
                            u === void 0)
                                return g ? g[t] : a[l];
                            g ? g.scrollTo(n ? g.pageXOffset : u, n ? u : g.pageYOffset) : a[l] = u
                        }, e, r, arguments.length)
                    }
                }),
                o.each(["top", "left"], function(e, t) {
                    o.cssHooks[t] = mi(U.pixelPosition, function(n, r) {
                        if (r)
                            return r = rt(n, t),
                            _t.test(r) ? o(n).position()[t] + "px" : r
                    })
                }),
                o.each({
                    Height: "height",
                    Width: "width"
                }, function(e, t) {
                    o.each({
                        padding: "inner" + e,
                        content: t,
                        "": "outer" + e
                    }, function(n, r) {
                        o.fn[r] = function(a, l) {
                            var u = arguments.length && (n || typeof a != "boolean")
                              , g = n || (a === !0 || l === !0 ? "margin" : "border");
                            return $e(this, function(c, w, T) {
                                var E;
                                return le(c) ? r.indexOf("outer") === 0 ? c["inner" + e] : c.document.documentElement["client" + e] : c.nodeType === 9 ? (E = c.documentElement,
                                Math.max(c.body["scroll" + e], E["scroll" + e], c.body["offset" + e], E["offset" + e], E["client" + e])) : T === void 0 ? o.css(c, w, g) : o.style(c, w, T, g)
                            }, t, u ? a : void 0, u)
                        }
                    })
                }),
                o.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
                    o.fn[t] = function(n) {
                        return this.on(t, n)
                    }
                }),
                o.fn.extend({
                    bind: function(e, t, n) {
                        return this.on(e, null, t, n)
                    },
                    unbind: function(e, t) {
                        return this.off(e, null, t)
                    },
                    delegate: function(e, t, n, r) {
                        return this.on(t, e, n, r)
                    },
                    undelegate: function(e, t, n) {
                        return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
                    },
                    hover: function(e, t) {
                        return this.mouseenter(e).mouseleave(t || e)
                    }
                }),
                o.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
                    o.fn[t] = function(n, r) {
                        return arguments.length > 0 ? this.on(t, null, n, r) : this.trigger(t)
                    }
                });
                var Wn = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
                o.proxy = function(e, t) {
                    var n, r, a;
                    if (typeof t == "string" && (n = e[t],
                    t = e,
                    e = n),
                    !!R(e))
                        return r = i.call(arguments, 2),
                        a = function() {
                            return e.apply(t || this, r.concat(i.call(arguments)))
                        }
                        ,
                        a.guid = e.guid = e.guid || o.guid++,
                        a
                }
                ,
                o.holdReady = function(e) {
                    e ? o.readyWait++ : o.ready(!0)
                }
                ,
                o.isArray = Array.isArray,
                o.parseJSON = JSON.parse,
                o.nodeName = we,
                o.isFunction = R,
                o.isWindow = le,
                o.camelCase = Ne,
                o.type = Ee,
                o.now = Date.now,
                o.isNumeric = function(e) {
                    var t = o.type(e);
                    return (t === "number" || t === "string") && !isNaN(e - parseFloat(e))
                }
                ,
                o.trim = function(e) {
                    return e == null ? "" : (e + "").replace(Wn, "$1")
                }
                ,
                he = [],
                oe = function() {
                    return o
                }
                .apply(Ae, he),
                oe !== void 0 && (ke.exports = oe);
                var Rn = W.jQuery
                  , Fn = W.$;
                return o.noConflict = function(e) {
                    return W.$ === o && (W.$ = Fn),
                    e && W.jQuery === o && (W.jQuery = Rn),
                    o
                }
                ,
                typeof ie == "undefined" && (W.jQuery = W.$ = o),
                o
            })
        },
        9154: (ke, Ae, he) => {
            var oe, W, ie;
            (function(S) {
                "use strict";
                W = [he(9755)],
                oe = S,
                ie = typeof oe == "function" ? oe.apply(Ae, W) : oe,
                ie !== void 0 && (ke.exports = ie)
            }
            )(function(S) {
                "use strict";
                var A = window.Slick || {};
                A = function() {
                    var i = 0;
                    function s(d, h) {
                        var y = this, $;
                        y.defaults = {
                            accessibility: !0,
                            adaptiveHeight: !1,
                            appendArrows: S(d),
                            appendDots: S(d),
                            arrows: !0,
                            asNavFor: null,
                            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                            nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                            autoplay: !1,
                            autoplaySpeed: 3e3,
                            centerMode: !1,
                            centerPadding: "50px",
                            cssEase: "ease",
                            customPaging: function(j, Y) {
                                return S('<button type="button" />').text(Y + 1)
                            },
                            dots: !1,
                            dotsClass: "slick-dots",
                            draggable: !0,
                            easing: "linear",
                            edgeFriction: .35,
                            fade: !1,
                            focusOnSelect: !1,
                            focusOnChange: !1,
                            infinite: !0,
                            initialSlide: 0,
                            lazyLoad: "ondemand",
                            mobileFirst: !1,
                            pauseOnHover: !0,
                            pauseOnFocus: !0,
                            pauseOnDotsHover: !1,
                            respondTo: "window",
                            responsive: null,
                            rows: 1,
                            rtl: !1,
                            slide: "",
                            slidesPerRow: 1,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            speed: 500,
                            swipe: !0,
                            swipeToSlide: !1,
                            touchMove: !0,
                            touchThreshold: 5,
                            useCSS: !0,
                            useTransform: !0,
                            variableWidth: !1,
                            vertical: !1,
                            verticalSwiping: !1,
                            waitForAnimate: !0,
                            zIndex: 1e3
                        },
                        y.initials = {
                            animating: !1,
                            dragging: !1,
                            autoPlayTimer: null,
                            currentDirection: 0,
                            currentLeft: null,
                            currentSlide: 0,
                            direction: 1,
                            $dots: null,
                            listWidth: null,
                            listHeight: null,
                            loadIndex: 0,
                            $nextArrow: null,
                            $prevArrow: null,
                            scrolling: !1,
                            slideCount: null,
                            slideWidth: null,
                            $slideTrack: null,
                            $slides: null,
                            sliding: !1,
                            slideOffset: 0,
                            swipeLeft: null,
                            swiping: !1,
                            $list: null,
                            touchObject: {},
                            transformsEnabled: !1,
                            unslicked: !1
                        },
                        S.extend(y, y.initials),
                        y.activeBreakpoint = null,
                        y.animType = null,
                        y.animProp = null,
                        y.breakpoints = [],
                        y.breakpointSettings = [],
                        y.cssTransitions = !1,
                        y.focussed = !1,
                        y.interrupted = !1,
                        y.hidden = "hidden",
                        y.paused = !0,
                        y.positionProp = null,
                        y.respondTo = null,
                        y.rowCount = 1,
                        y.shouldClick = !0,
                        y.$slider = S(d),
                        y.$slidesCache = null,
                        y.transformType = null,
                        y.transitionType = null,
                        y.visibilityChange = "visibilitychange",
                        y.windowWidth = 0,
                        y.windowTimer = null,
                        $ = S(d).data("slick") || {},
                        y.options = S.extend({}, y.defaults, h, $),
                        y.currentSlide = y.options.initialSlide,
                        y.originalSettings = y.options,
                        typeof document.mozHidden != "undefined" ? (y.hidden = "mozHidden",
                        y.visibilityChange = "mozvisibilitychange") : typeof document.webkitHidden != "undefined" && (y.hidden = "webkitHidden",
                        y.visibilityChange = "webkitvisibilitychange"),
                        y.autoPlay = S.proxy(y.autoPlay, y),
                        y.autoPlayClear = S.proxy(y.autoPlayClear, y),
                        y.autoPlayIterator = S.proxy(y.autoPlayIterator, y),
                        y.changeSlide = S.proxy(y.changeSlide, y),
                        y.clickHandler = S.proxy(y.clickHandler, y),
                        y.selectHandler = S.proxy(y.selectHandler, y),
                        y.setPosition = S.proxy(y.setPosition, y),
                        y.swipeHandler = S.proxy(y.swipeHandler, y),
                        y.dragHandler = S.proxy(y.dragHandler, y),
                        y.keyHandler = S.proxy(y.keyHandler, y),
                        y.instanceUid = i++,
                        y.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
                        y.registerBreakpoints(),
                        y.init(!0)
                    }
                    return s
                }(),
                A.prototype.activateADA = function() {
                    var i = this;
                    i.$slideTrack.find(".slick-active").attr({
                        "aria-hidden": "false"
                    }).find("a, input, button, select").attr({
                        tabindex: "0"
                    })
                }
                ,
                A.prototype.addSlide = A.prototype.slickAdd = function(i, s, d) {
                    var h = this;
                    if (typeof s == "boolean")
                        d = s,
                        s = null;
                    else if (s < 0 || s >= h.slideCount)
                        return !1;
                    h.unload(),
                    typeof s == "number" ? s === 0 && h.$slides.length === 0 ? S(i).appendTo(h.$slideTrack) : d ? S(i).insertBefore(h.$slides.eq(s)) : S(i).insertAfter(h.$slides.eq(s)) : d === !0 ? S(i).prependTo(h.$slideTrack) : S(i).appendTo(h.$slideTrack),
                    h.$slides = h.$slideTrack.children(this.options.slide),
                    h.$slideTrack.children(this.options.slide).detach(),
                    h.$slideTrack.append(h.$slides),
                    h.$slides.each(function(y, $) {
                        S($).attr("data-slick-index", y)
                    }),
                    h.$slidesCache = h.$slides,
                    h.reinit()
                }
                ,
                A.prototype.animateHeight = function() {
                    var i = this;
                    if (i.options.slidesToShow === 1 && i.options.adaptiveHeight === !0 && i.options.vertical === !1) {
                        var s = i.$slides.eq(i.currentSlide).outerHeight(!0);
                        i.$list.animate({
                            height: s
                        }, i.options.speed)
                    }
                }
                ,
                A.prototype.animateSlide = function(i, s) {
                    var d = {}
                      , h = this;
                    h.animateHeight(),
                    h.options.rtl === !0 && h.options.vertical === !1 && (i = -i),
                    h.transformsEnabled === !1 ? h.options.vertical === !1 ? h.$slideTrack.animate({
                        left: i
                    }, h.options.speed, h.options.easing, s) : h.$slideTrack.animate({
                        top: i
                    }, h.options.speed, h.options.easing, s) : h.cssTransitions === !1 ? (h.options.rtl === !0 && (h.currentLeft = -h.currentLeft),
                    S({
                        animStart: h.currentLeft
                    }).animate({
                        animStart: i
                    }, {
                        duration: h.options.speed,
                        easing: h.options.easing,
                        step: function(y) {
                            y = Math.ceil(y),
                            h.options.vertical === !1 ? (d[h.animType] = "translate(" + y + "px, 0px)",
                            h.$slideTrack.css(d)) : (d[h.animType] = "translate(0px," + y + "px)",
                            h.$slideTrack.css(d))
                        },
                        complete: function() {
                            s && s.call()
                        }
                    })) : (h.applyTransition(),
                    i = Math.ceil(i),
                    h.options.vertical === !1 ? d[h.animType] = "translate3d(" + i + "px, 0px, 0px)" : d[h.animType] = "translate3d(0px," + i + "px, 0px)",
                    h.$slideTrack.css(d),
                    s && setTimeout(function() {
                        h.disableTransition(),
                        s.call()
                    }, h.options.speed))
                }
                ,
                A.prototype.getNavTarget = function() {
                    var i = this
                      , s = i.options.asNavFor;
                    return s && s !== null && (s = S(s).not(i.$slider)),
                    s
                }
                ,
                A.prototype.asNavFor = function(i) {
                    var s = this
                      , d = s.getNavTarget();
                    d !== null && typeof d == "object" && d.each(function() {
                        var h = S(this).slick("getSlick");
                        h.unslicked || h.slideHandler(i, !0)
                    })
                }
                ,
                A.prototype.applyTransition = function(i) {
                    var s = this
                      , d = {};
                    s.options.fade === !1 ? d[s.transitionType] = s.transformType + " " + s.options.speed + "ms " + s.options.cssEase : d[s.transitionType] = "opacity " + s.options.speed + "ms " + s.options.cssEase,
                    s.options.fade === !1 ? s.$slideTrack.css(d) : s.$slides.eq(i).css(d)
                }
                ,
                A.prototype.autoPlay = function() {
                    var i = this;
                    i.autoPlayClear(),
                    i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
                }
                ,
                A.prototype.autoPlayClear = function() {
                    var i = this;
                    i.autoPlayTimer && clearInterval(i.autoPlayTimer)
                }
                ,
                A.prototype.autoPlayIterator = function() {
                    var i = this
                      , s = i.currentSlide + i.options.slidesToScroll;
                    !i.paused && !i.interrupted && !i.focussed && (i.options.infinite === !1 && (i.direction === 1 && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : i.direction === 0 && (s = i.currentSlide - i.options.slidesToScroll,
                    i.currentSlide - 1 === 0 && (i.direction = 1))),
                    i.slideHandler(s))
                }
                ,
                A.prototype.buildArrows = function() {
                    var i = this;
                    i.options.arrows === !0 && (i.$prevArrow = S(i.options.prevArrow).addClass("slick-arrow"),
                    i.$nextArrow = S(i.options.nextArrow).addClass("slick-arrow"),
                    i.slideCount > i.options.slidesToShow ? (i.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                    i.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                    i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.prependTo(i.options.appendArrows),
                    i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.appendTo(i.options.appendArrows),
                    i.options.infinite !== !0 && i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : i.$prevArrow.add(i.$nextArrow).addClass("slick-hidden").attr({
                        "aria-disabled": "true",
                        tabindex: "-1"
                    }))
                }
                ,
                A.prototype.buildDots = function() {
                    var i = this, s, d;
                    if (i.options.dots === !0 && i.slideCount > i.options.slidesToShow) {
                        for (i.$slider.addClass("slick-dotted"),
                        d = S("<ul />").addClass(i.options.dotsClass),
                        s = 0; s <= i.getDotCount(); s += 1)
                            d.append(S("<li />").append(i.options.customPaging.call(this, i, s)));
                        i.$dots = d.appendTo(i.options.appendDots),
                        i.$dots.find("li").first().addClass("slick-active")
                    }
                }
                ,
                A.prototype.buildOut = function() {
                    var i = this;
                    i.$slides = i.$slider.children(i.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
                    i.slideCount = i.$slides.length,
                    i.$slides.each(function(s, d) {
                        S(d).attr("data-slick-index", s).data("originalStyling", S(d).attr("style") || "")
                    }),
                    i.$slider.addClass("slick-slider"),
                    i.$slideTrack = i.slideCount === 0 ? S('<div class="slick-track"/>').appendTo(i.$slider) : i.$slides.wrapAll('<div class="slick-track"/>').parent(),
                    i.$list = i.$slideTrack.wrap('<div class="slick-list"/>').parent(),
                    i.$slideTrack.css("opacity", 0),
                    (i.options.centerMode === !0 || i.options.swipeToSlide === !0) && (i.options.slidesToScroll = 1),
                    S("img[data-lazy]", i.$slider).not("[src]").addClass("slick-loading"),
                    i.setupInfinite(),
                    i.buildArrows(),
                    i.buildDots(),
                    i.updateDots(),
                    i.setSlideClasses(typeof i.currentSlide == "number" ? i.currentSlide : 0),
                    i.options.draggable === !0 && i.$list.addClass("draggable")
                }
                ,
                A.prototype.buildRows = function() {
                    var i = this, s, d, h, y, $, j, Y;
                    if (y = document.createDocumentFragment(),
                    j = i.$slider.children(),
                    i.options.rows > 0) {
                        for (Y = i.options.slidesPerRow * i.options.rows,
                        $ = Math.ceil(j.length / Y),
                        s = 0; s < $; s++) {
                            var N = document.createElement("div");
                            for (d = 0; d < i.options.rows; d++) {
                                var U = document.createElement("div");
                                for (h = 0; h < i.options.slidesPerRow; h++) {
                                    var R = s * Y + (d * i.options.slidesPerRow + h);
                                    j.get(R) && U.appendChild(j.get(R))
                                }
                                N.appendChild(U)
                            }
                            y.appendChild(N)
                        }
                        i.$slider.empty().append(y),
                        i.$slider.children().children().children().css({
                            width: 100 / i.options.slidesPerRow + "%",
                            display: "inline-block"
                        })
                    }
                }
                ,
                A.prototype.checkResponsive = function(i, s) {
                    var d = this, h, y, $, j = !1, Y = d.$slider.width(), N = window.innerWidth || S(window).width();
                    if (d.respondTo === "window" ? $ = N : d.respondTo === "slider" ? $ = Y : d.respondTo === "min" && ($ = Math.min(N, Y)),
                    d.options.responsive && d.options.responsive.length && d.options.responsive !== null) {
                        y = null;
                        for (h in d.breakpoints)
                            d.breakpoints.hasOwnProperty(h) && (d.originalSettings.mobileFirst === !1 ? $ < d.breakpoints[h] && (y = d.breakpoints[h]) : $ > d.breakpoints[h] && (y = d.breakpoints[h]));
                        y !== null ? d.activeBreakpoint !== null ? (y !== d.activeBreakpoint || s) && (d.activeBreakpoint = y,
                        d.breakpointSettings[y] === "unslick" ? d.unslick(y) : (d.options = S.extend({}, d.originalSettings, d.breakpointSettings[y]),
                        i === !0 && (d.currentSlide = d.options.initialSlide),
                        d.refresh(i)),
                        j = y) : (d.activeBreakpoint = y,
                        d.breakpointSettings[y] === "unslick" ? d.unslick(y) : (d.options = S.extend({}, d.originalSettings, d.breakpointSettings[y]),
                        i === !0 && (d.currentSlide = d.options.initialSlide),
                        d.refresh(i)),
                        j = y) : d.activeBreakpoint !== null && (d.activeBreakpoint = null,
                        d.options = d.originalSettings,
                        i === !0 && (d.currentSlide = d.options.initialSlide),
                        d.refresh(i),
                        j = y),
                        !i && j !== !1 && d.$slider.trigger("breakpoint", [d, j])
                    }
                }
                ,
                A.prototype.changeSlide = function(i, s) {
                    var d = this, h = S(i.currentTarget), y, $, j;
                    switch (h.is("a") && i.preventDefault(),
                    h.is("li") || (h = h.closest("li")),
                    j = d.slideCount % d.options.slidesToScroll !== 0,
                    y = j ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll,
                    i.data.message) {
                    case "previous":
                        $ = y === 0 ? d.options.slidesToScroll : d.options.slidesToShow - y,
                        d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - $, !1, s);
                        break;
                    case "next":
                        $ = y === 0 ? d.options.slidesToScroll : y,
                        d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + $, !1, s);
                        break;
                    case "index":
                        var Y = i.data.index === 0 ? 0 : i.data.index || h.index() * d.options.slidesToScroll;
                        d.slideHandler(d.checkNavigable(Y), !1, s),
                        h.children().trigger("focus");
                        break;
                    default:
                        return
                    }
                }
                ,
                A.prototype.checkNavigable = function(i) {
                    var s = this, d, h;
                    if (d = s.getNavigableIndexes(),
                    h = 0,
                    i > d[d.length - 1])
                        i = d[d.length - 1];
                    else
                        for (var y in d) {
                            if (i < d[y]) {
                                i = h;
                                break
                            }
                            h = d[y]
                        }
                    return i
                }
                ,
                A.prototype.cleanUpEvents = function() {
                    var i = this;
                    i.options.dots && i.$dots !== null && (S("li", i.$dots).off("click.slick", i.changeSlide).off("mouseenter.slick", S.proxy(i.interrupt, i, !0)).off("mouseleave.slick", S.proxy(i.interrupt, i, !1)),
                    i.options.accessibility === !0 && i.$dots.off("keydown.slick", i.keyHandler)),
                    i.$slider.off("focus.slick blur.slick"),
                    i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow && i.$prevArrow.off("click.slick", i.changeSlide),
                    i.$nextArrow && i.$nextArrow.off("click.slick", i.changeSlide),
                    i.options.accessibility === !0 && (i.$prevArrow && i.$prevArrow.off("keydown.slick", i.keyHandler),
                    i.$nextArrow && i.$nextArrow.off("keydown.slick", i.keyHandler))),
                    i.$list.off("touchstart.slick mousedown.slick", i.swipeHandler),
                    i.$list.off("touchmove.slick mousemove.slick", i.swipeHandler),
                    i.$list.off("touchend.slick mouseup.slick", i.swipeHandler),
                    i.$list.off("touchcancel.slick mouseleave.slick", i.swipeHandler),
                    i.$list.off("click.slick", i.clickHandler),
                    S(document).off(i.visibilityChange, i.visibility),
                    i.cleanUpSlideEvents(),
                    i.options.accessibility === !0 && i.$list.off("keydown.slick", i.keyHandler),
                    i.options.focusOnSelect === !0 && S(i.$slideTrack).children().off("click.slick", i.selectHandler),
                    S(window).off("orientationchange.slick.slick-" + i.instanceUid, i.orientationChange),
                    S(window).off("resize.slick.slick-" + i.instanceUid, i.resize),
                    S("[draggable!=true]", i.$slideTrack).off("dragstart", i.preventDefault),
                    S(window).off("load.slick.slick-" + i.instanceUid, i.setPosition)
                }
                ,
                A.prototype.cleanUpSlideEvents = function() {
                    var i = this;
                    i.$list.off("mouseenter.slick", S.proxy(i.interrupt, i, !0)),
                    i.$list.off("mouseleave.slick", S.proxy(i.interrupt, i, !1))
                }
                ,
                A.prototype.cleanUpRows = function() {
                    var i = this, s;
                    i.options.rows > 0 && (s = i.$slides.children().children(),
                    s.removeAttr("style"),
                    i.$slider.empty().append(s))
                }
                ,
                A.prototype.clickHandler = function(i) {
                    var s = this;
                    s.shouldClick === !1 && (i.stopImmediatePropagation(),
                    i.stopPropagation(),
                    i.preventDefault())
                }
                ,
                A.prototype.destroy = function(i) {
                    var s = this;
                    s.autoPlayClear(),
                    s.touchObject = {},
                    s.cleanUpEvents(),
                    S(".slick-cloned", s.$slider).detach(),
                    s.$dots && s.$dots.remove(),
                    s.$prevArrow && s.$prevArrow.length && (s.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
                    s.htmlExpr.test(s.options.prevArrow) && s.$prevArrow.remove()),
                    s.$nextArrow && s.$nextArrow.length && (s.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
                    s.htmlExpr.test(s.options.nextArrow) && s.$nextArrow.remove()),
                    s.$slides && (s.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                        S(this).attr("style", S(this).data("originalStyling"))
                    }),
                    s.$slideTrack.children(this.options.slide).detach(),
                    s.$slideTrack.detach(),
                    s.$list.detach(),
                    s.$slider.append(s.$slides)),
                    s.cleanUpRows(),
                    s.$slider.removeClass("slick-slider"),
                    s.$slider.removeClass("slick-initialized"),
                    s.$slider.removeClass("slick-dotted"),
                    s.unslicked = !0,
                    i || s.$slider.trigger("destroy", [s])
                }
                ,
                A.prototype.disableTransition = function(i) {
                    var s = this
                      , d = {};
                    d[s.transitionType] = "",
                    s.options.fade === !1 ? s.$slideTrack.css(d) : s.$slides.eq(i).css(d)
                }
                ,
                A.prototype.fadeSlide = function(i, s) {
                    var d = this;
                    d.cssTransitions === !1 ? (d.$slides.eq(i).css({
                        zIndex: d.options.zIndex
                    }),
                    d.$slides.eq(i).animate({
                        opacity: 1
                    }, d.options.speed, d.options.easing, s)) : (d.applyTransition(i),
                    d.$slides.eq(i).css({
                        opacity: 1,
                        zIndex: d.options.zIndex
                    }),
                    s && setTimeout(function() {
                        d.disableTransition(i),
                        s.call()
                    }, d.options.speed))
                }
                ,
                A.prototype.fadeSlideOut = function(i) {
                    var s = this;
                    s.cssTransitions === !1 ? s.$slides.eq(i).animate({
                        opacity: 0,
                        zIndex: s.options.zIndex - 2
                    }, s.options.speed, s.options.easing) : (s.applyTransition(i),
                    s.$slides.eq(i).css({
                        opacity: 0,
                        zIndex: s.options.zIndex - 2
                    }))
                }
                ,
                A.prototype.filterSlides = A.prototype.slickFilter = function(i) {
                    var s = this;
                    i !== null && (s.$slidesCache = s.$slides,
                    s.unload(),
                    s.$slideTrack.children(this.options.slide).detach(),
                    s.$slidesCache.filter(i).appendTo(s.$slideTrack),
                    s.reinit())
                }
                ,
                A.prototype.focusHandler = function() {
                    var i = this;
                    i.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(s) {
                        s.stopImmediatePropagation();
                        var d = S(this);
                        setTimeout(function() {
                            i.options.pauseOnFocus && (i.focussed = d.is(":focus"),
                            i.autoPlay())
                        }, 0)
                    })
                }
                ,
                A.prototype.getCurrent = A.prototype.slickCurrentSlide = function() {
                    var i = this;
                    return i.currentSlide
                }
                ,
                A.prototype.getDotCount = function() {
                    var i = this
                      , s = 0
                      , d = 0
                      , h = 0;
                    if (i.options.infinite === !0)
                        if (i.slideCount <= i.options.slidesToShow)
                            ++h;
                        else
                            for (; s < i.slideCount; )
                                ++h,
                                s = d + i.options.slidesToScroll,
                                d += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
                    else if (i.options.centerMode === !0)
                        h = i.slideCount;
                    else if (!i.options.asNavFor)
                        h = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
                    else
                        for (; s < i.slideCount; )
                            ++h,
                            s = d + i.options.slidesToScroll,
                            d += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
                    return h - 1
                }
                ,
                A.prototype.getLeft = function(i) {
                    var s = this, d, h, y = 0, $, j;
                    return s.slideOffset = 0,
                    h = s.$slides.first().outerHeight(!0),
                    s.options.infinite === !0 ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1,
                    j = -1,
                    s.options.vertical === !0 && s.options.centerMode === !0 && (s.options.slidesToShow === 2 ? j = -1.5 : s.options.slidesToShow === 1 && (j = -2)),
                    y = h * s.options.slidesToShow * j),
                    s.slideCount % s.options.slidesToScroll !== 0 && i + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (i > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (i - s.slideCount)) * s.slideWidth * -1,
                    y = (s.options.slidesToShow - (i - s.slideCount)) * h * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1,
                    y = s.slideCount % s.options.slidesToScroll * h * -1))) : i + s.options.slidesToShow > s.slideCount && (s.slideOffset = (i + s.options.slidesToShow - s.slideCount) * s.slideWidth,
                    y = (i + s.options.slidesToShow - s.slideCount) * h),
                    s.slideCount <= s.options.slidesToShow && (s.slideOffset = 0,
                    y = 0),
                    s.options.centerMode === !0 && s.slideCount <= s.options.slidesToShow ? s.slideOffset = s.slideWidth * Math.floor(s.options.slidesToShow) / 2 - s.slideWidth * s.slideCount / 2 : s.options.centerMode === !0 && s.options.infinite === !0 ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : s.options.centerMode === !0 && (s.slideOffset = 0,
                    s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)),
                    s.options.vertical === !1 ? d = i * s.slideWidth * -1 + s.slideOffset : d = i * h * -1 + y,
                    s.options.variableWidth === !0 && (s.slideCount <= s.options.slidesToShow || s.options.infinite === !1 ? $ = s.$slideTrack.children(".slick-slide").eq(i) : $ = s.$slideTrack.children(".slick-slide").eq(i + s.options.slidesToShow),
                    s.options.rtl === !0 ? $[0] ? d = (s.$slideTrack.width() - $[0].offsetLeft - $.width()) * -1 : d = 0 : d = $[0] ? $[0].offsetLeft * -1 : 0,
                    s.options.centerMode === !0 && (s.slideCount <= s.options.slidesToShow || s.options.infinite === !1 ? $ = s.$slideTrack.children(".slick-slide").eq(i) : $ = s.$slideTrack.children(".slick-slide").eq(i + s.options.slidesToShow + 1),
                    s.options.rtl === !0 ? $[0] ? d = (s.$slideTrack.width() - $[0].offsetLeft - $.width()) * -1 : d = 0 : d = $[0] ? $[0].offsetLeft * -1 : 0,
                    d += (s.$list.width() - $.outerWidth()) / 2)),
                    d
                }
                ,
                A.prototype.getOption = A.prototype.slickGetOption = function(i) {
                    var s = this;
                    return s.options[i]
                }
                ,
                A.prototype.getNavigableIndexes = function() {
                    var i = this, s = 0, d = 0, h = [], y;
                    for (i.options.infinite === !1 ? y = i.slideCount : (s = i.options.slidesToScroll * -1,
                    d = i.options.slidesToScroll * -1,
                    y = i.slideCount * 2); s < y; )
                        h.push(s),
                        s = d + i.options.slidesToScroll,
                        d += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
                    return h
                }
                ,
                A.prototype.getSlick = function() {
                    return this
                }
                ,
                A.prototype.getSlideCount = function() {
                    var i = this, s, d, h;
                    return h = i.options.centerMode === !0 ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0,
                    i.options.swipeToSlide === !0 ? (i.$slideTrack.find(".slick-slide").each(function(y, $) {
                        if ($.offsetLeft - h + S($).outerWidth() / 2 > i.swipeLeft * -1)
                            return d = $,
                            !1
                    }),
                    s = Math.abs(S(d).attr("data-slick-index") - i.currentSlide) || 1,
                    s) : i.options.slidesToScroll
                }
                ,
                A.prototype.goTo = A.prototype.slickGoTo = function(i, s) {
                    var d = this;
                    d.changeSlide({
                        data: {
                            message: "index",
                            index: parseInt(i)
                        }
                    }, s)
                }
                ,
                A.prototype.init = function(i) {
                    var s = this;
                    S(s.$slider).hasClass("slick-initialized") || (S(s.$slider).addClass("slick-initialized"),
                    s.buildRows(),
                    s.buildOut(),
                    s.setProps(),
                    s.startLoad(),
                    s.loadSlider(),
                    s.initializeEvents(),
                    s.updateArrows(),
                    s.updateDots(),
                    s.checkResponsive(!0),
                    s.focusHandler()),
                    i && s.$slider.trigger("init", [s]),
                    s.options.accessibility === !0 && s.initADA(),
                    s.options.autoplay && (s.paused = !1,
                    s.autoPlay())
                }
                ,
                A.prototype.initADA = function() {
                    var i = this
                      , s = Math.ceil(i.slideCount / i.options.slidesToShow)
                      , d = i.getNavigableIndexes().filter(function($) {
                        return $ >= 0 && $ < i.slideCount
                    });
                    i.$slides.add(i.$slideTrack.find(".slick-cloned")).attr({
                        "aria-hidden": "true",
                        tabindex: "-1"
                    }).find("a, input, button, select").attr({
                        tabindex: "-1"
                    }),
                    i.$dots !== null && (i.$slides.not(i.$slideTrack.find(".slick-cloned")).each(function($) {
                        var j = d.indexOf($);
                        if (S(this).attr({
                            role: "tabpanel",
                            id: "slick-slide" + i.instanceUid + $,
                            tabindex: -1
                        }),
                        j !== -1) {
                            var Y = "slick-slide-control" + i.instanceUid + j;
                            S("#" + Y).length && S(this).attr({
                                "aria-describedby": Y
                            })
                        }
                    }),
                    i.$dots.attr("role", "tablist").find("li").each(function($) {
                        var j = d[$];
                        S(this).attr({
                            role: "presentation"
                        }),
                        S(this).find("button").first().attr({
                            role: "tab",
                            id: "slick-slide-control" + i.instanceUid + $,
                            "aria-controls": "slick-slide" + i.instanceUid + j,
                            "aria-label": $ + 1 + " of " + s,
                            "aria-selected": null,
                            tabindex: "-1"
                        })
                    }).eq(i.currentSlide).find("button").attr({
                        "aria-selected": "true",
                        tabindex: "0"
                    }).end());
                    for (var h = i.currentSlide, y = h + i.options.slidesToShow; h < y; h++)
                        i.options.focusOnChange ? i.$slides.eq(h).attr({
                            tabindex: "0"
                        }) : i.$slides.eq(h).removeAttr("tabindex");
                    i.activateADA()
                }
                ,
                A.prototype.initArrowEvents = function() {
                    var i = this;
                    i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
                        message: "previous"
                    }, i.changeSlide),
                    i.$nextArrow.off("click.slick").on("click.slick", {
                        message: "next"
                    }, i.changeSlide),
                    i.options.accessibility === !0 && (i.$prevArrow.on("keydown.slick", i.keyHandler),
                    i.$nextArrow.on("keydown.slick", i.keyHandler)))
                }
                ,
                A.prototype.initDotEvents = function() {
                    var i = this;
                    i.options.dots === !0 && i.slideCount > i.options.slidesToShow && (S("li", i.$dots).on("click.slick", {
                        message: "index"
                    }, i.changeSlide),
                    i.options.accessibility === !0 && i.$dots.on("keydown.slick", i.keyHandler)),
                    i.options.dots === !0 && i.options.pauseOnDotsHover === !0 && i.slideCount > i.options.slidesToShow && S("li", i.$dots).on("mouseenter.slick", S.proxy(i.interrupt, i, !0)).on("mouseleave.slick", S.proxy(i.interrupt, i, !1))
                }
                ,
                A.prototype.initSlideEvents = function() {
                    var i = this;
                    i.options.pauseOnHover && (i.$list.on("mouseenter.slick", S.proxy(i.interrupt, i, !0)),
                    i.$list.on("mouseleave.slick", S.proxy(i.interrupt, i, !1)))
                }
                ,
                A.prototype.initializeEvents = function() {
                    var i = this;
                    i.initArrowEvents(),
                    i.initDotEvents(),
                    i.initSlideEvents(),
                    i.$list.on("touchstart.slick mousedown.slick", {
                        action: "start"
                    }, i.swipeHandler),
                    i.$list.on("touchmove.slick mousemove.slick", {
                        action: "move"
                    }, i.swipeHandler),
                    i.$list.on("touchend.slick mouseup.slick", {
                        action: "end"
                    }, i.swipeHandler),
                    i.$list.on("touchcancel.slick mouseleave.slick", {
                        action: "end"
                    }, i.swipeHandler),
                    i.$list.on("click.slick", i.clickHandler),
                    S(document).on(i.visibilityChange, S.proxy(i.visibility, i)),
                    i.options.accessibility === !0 && i.$list.on("keydown.slick", i.keyHandler),
                    i.options.focusOnSelect === !0 && S(i.$slideTrack).children().on("click.slick", i.selectHandler),
                    S(window).on("orientationchange.slick.slick-" + i.instanceUid, S.proxy(i.orientationChange, i)),
                    S(window).on("resize.slick.slick-" + i.instanceUid, S.proxy(i.resize, i)),
                    S("[draggable!=true]", i.$slideTrack).on("dragstart", i.preventDefault),
                    S(window).on("load.slick.slick-" + i.instanceUid, i.setPosition),
                    S(i.setPosition)
                }
                ,
                A.prototype.initUI = function() {
                    var i = this;
                    i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(),
                    i.$nextArrow.show()),
                    i.options.dots === !0 && i.slideCount > i.options.slidesToShow && i.$dots.show()
                }
                ,
                A.prototype.keyHandler = function(i) {
                    var s = this;
                    i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (i.keyCode === 37 && s.options.accessibility === !0 ? s.changeSlide({
                        data: {
                            message: s.options.rtl === !0 ? "next" : "previous"
                        }
                    }) : i.keyCode === 39 && s.options.accessibility === !0 && s.changeSlide({
                        data: {
                            message: s.options.rtl === !0 ? "previous" : "next"
                        }
                    }))
                }
                ,
                A.prototype.lazyLoad = function() {
                    var i = this, s, d, h, y;
                    function $(R) {
                        S("img[data-lazy]", R).each(function() {
                            var le = S(this)
                              , X = S(this).attr("data-lazy")
                              , ct = S(this).attr("data-srcset")
                              , Ze = S(this).attr("data-sizes") || i.$slider.attr("data-sizes")
                              , Ee = document.createElement("img");
                            Ee.onload = function() {
                                le.animate({
                                    opacity: 0
                                }, 100, function() {
                                    ct && (le.attr("srcset", ct),
                                    Ze && le.attr("sizes", Ze)),
                                    le.attr("src", X).animate({
                                        opacity: 1
                                    }, 200, function() {
                                        le.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                                    }),
                                    i.$slider.trigger("lazyLoaded", [i, le, X])
                                })
                            }
                            ,
                            Ee.onerror = function() {
                                le.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                                i.$slider.trigger("lazyLoadError", [i, le, X])
                            }
                            ,
                            Ee.src = X
                        })
                    }
                    if (i.options.centerMode === !0 ? i.options.infinite === !0 ? (h = i.currentSlide + (i.options.slidesToShow / 2 + 1),
                    y = h + i.options.slidesToShow + 2) : (h = Math.max(0, i.currentSlide - (i.options.slidesToShow / 2 + 1)),
                    y = 2 + (i.options.slidesToShow / 2 + 1) + i.currentSlide) : (h = i.options.infinite ? i.options.slidesToShow + i.currentSlide : i.currentSlide,
                    y = Math.ceil(h + i.options.slidesToShow),
                    i.options.fade === !0 && (h > 0 && h--,
                    y <= i.slideCount && y++)),
                    s = i.$slider.find(".slick-slide").slice(h, y),
                    i.options.lazyLoad === "anticipated")
                        for (var j = h - 1, Y = y, N = i.$slider.find(".slick-slide"), U = 0; U < i.options.slidesToScroll; U++)
                            j < 0 && (j = i.slideCount - 1),
                            s = s.add(N.eq(j)),
                            s = s.add(N.eq(Y)),
                            j--,
                            Y++;
                    $(s),
                    i.slideCount <= i.options.slidesToShow ? (d = i.$slider.find(".slick-slide"),
                    $(d)) : i.currentSlide >= i.slideCount - i.options.slidesToShow ? (d = i.$slider.find(".slick-cloned").slice(0, i.options.slidesToShow),
                    $(d)) : i.currentSlide === 0 && (d = i.$slider.find(".slick-cloned").slice(i.options.slidesToShow * -1),
                    $(d))
                }
                ,
                A.prototype.loadSlider = function() {
                    var i = this;
                    i.setPosition(),
                    i.$slideTrack.css({
                        opacity: 1
                    }),
                    i.$slider.removeClass("slick-loading"),
                    i.initUI(),
                    i.options.lazyLoad === "progressive" && i.progressiveLazyLoad()
                }
                ,
                A.prototype.next = A.prototype.slickNext = function() {
                    var i = this;
                    i.changeSlide({
                        data: {
                            message: "next"
                        }
                    })
                }
                ,
                A.prototype.orientationChange = function() {
                    var i = this;
                    i.checkResponsive(),
                    i.setPosition()
                }
                ,
                A.prototype.pause = A.prototype.slickPause = function() {
                    var i = this;
                    i.autoPlayClear(),
                    i.paused = !0
                }
                ,
                A.prototype.play = A.prototype.slickPlay = function() {
                    var i = this;
                    i.autoPlay(),
                    i.options.autoplay = !0,
                    i.paused = !1,
                    i.focussed = !1,
                    i.interrupted = !1
                }
                ,
                A.prototype.postSlide = function(i) {
                    var s = this;
                    if (!s.unslicked && (s.$slider.trigger("afterChange", [s, i]),
                    s.animating = !1,
                    s.slideCount > s.options.slidesToShow && s.setPosition(),
                    s.swipeLeft = null,
                    s.options.autoplay && s.autoPlay(),
                    s.options.accessibility === !0 && (s.initADA(),
                    s.options.focusOnChange))) {
                        var d = S(s.$slides.get(s.currentSlide));
                        d.attr("tabindex", 0).focus()
                    }
                }
                ,
                A.prototype.prev = A.prototype.slickPrev = function() {
                    var i = this;
                    i.changeSlide({
                        data: {
                            message: "previous"
                        }
                    })
                }
                ,
                A.prototype.preventDefault = function(i) {
                    i.preventDefault()
                }
                ,
                A.prototype.progressiveLazyLoad = function(i) {
                    i = i || 1;
                    var s = this, d = S("img[data-lazy]", s.$slider), h, y, $, j, Y;
                    d.length ? (h = d.first(),
                    y = h.attr("data-lazy"),
                    $ = h.attr("data-srcset"),
                    j = h.attr("data-sizes") || s.$slider.attr("data-sizes"),
                    Y = document.createElement("img"),
                    Y.onload = function() {
                        $ && (h.attr("srcset", $),
                        j && h.attr("sizes", j)),
                        h.attr("src", y).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
                        s.options.adaptiveHeight === !0 && s.setPosition(),
                        s.$slider.trigger("lazyLoaded", [s, h, y]),
                        s.progressiveLazyLoad()
                    }
                    ,
                    Y.onerror = function() {
                        i < 3 ? setTimeout(function() {
                            s.progressiveLazyLoad(i + 1)
                        }, 500) : (h.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                        s.$slider.trigger("lazyLoadError", [s, h, y]),
                        s.progressiveLazyLoad())
                    }
                    ,
                    Y.src = y) : s.$slider.trigger("allImagesLoaded", [s])
                }
                ,
                A.prototype.refresh = function(i) {
                    var s = this, d, h;
                    h = s.slideCount - s.options.slidesToShow,
                    !s.options.infinite && s.currentSlide > h && (s.currentSlide = h),
                    s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
                    d = s.currentSlide,
                    s.destroy(!0),
                    S.extend(s, s.initials, {
                        currentSlide: d
                    }),
                    s.init(),
                    i || s.changeSlide({
                        data: {
                            message: "index",
                            index: d
                        }
                    }, !1)
                }
                ,
                A.prototype.registerBreakpoints = function() {
                    var i = this, s, d, h, y = i.options.responsive || null;
                    if (S.type(y) === "array" && y.length) {
                        i.respondTo = i.options.respondTo || "window";
                        for (s in y)
                            if (h = i.breakpoints.length - 1,
                            y.hasOwnProperty(s)) {
                                for (d = y[s].breakpoint; h >= 0; )
                                    i.breakpoints[h] && i.breakpoints[h] === d && i.breakpoints.splice(h, 1),
                                    h--;
                                i.breakpoints.push(d),
                                i.breakpointSettings[d] = y[s].settings
                            }
                        i.breakpoints.sort(function($, j) {
                            return i.options.mobileFirst ? $ - j : j - $
                        })
                    }
                }
                ,
                A.prototype.reinit = function() {
                    var i = this;
                    i.$slides = i.$slideTrack.children(i.options.slide).addClass("slick-slide"),
                    i.slideCount = i.$slides.length,
                    i.currentSlide >= i.slideCount && i.currentSlide !== 0 && (i.currentSlide = i.currentSlide - i.options.slidesToScroll),
                    i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0),
                    i.registerBreakpoints(),
                    i.setProps(),
                    i.setupInfinite(),
                    i.buildArrows(),
                    i.updateArrows(),
                    i.initArrowEvents(),
                    i.buildDots(),
                    i.updateDots(),
                    i.initDotEvents(),
                    i.cleanUpSlideEvents(),
                    i.initSlideEvents(),
                    i.checkResponsive(!1, !0),
                    i.options.focusOnSelect === !0 && S(i.$slideTrack).children().on("click.slick", i.selectHandler),
                    i.setSlideClasses(typeof i.currentSlide == "number" ? i.currentSlide : 0),
                    i.setPosition(),
                    i.focusHandler(),
                    i.paused = !i.options.autoplay,
                    i.autoPlay(),
                    i.$slider.trigger("reInit", [i])
                }
                ,
                A.prototype.resize = function() {
                    var i = this;
                    S(window).width() !== i.windowWidth && (clearTimeout(i.windowDelay),
                    i.windowDelay = window.setTimeout(function() {
                        i.windowWidth = S(window).width(),
                        i.checkResponsive(),
                        i.unslicked || i.setPosition()
                    }, 50))
                }
                ,
                A.prototype.removeSlide = A.prototype.slickRemove = function(i, s, d) {
                    var h = this;
                    if (typeof i == "boolean" ? (s = i,
                    i = s === !0 ? 0 : h.slideCount - 1) : i = s === !0 ? --i : i,
                    h.slideCount < 1 || i < 0 || i > h.slideCount - 1)
                        return !1;
                    h.unload(),
                    d === !0 ? h.$slideTrack.children().remove() : h.$slideTrack.children(this.options.slide).eq(i).remove(),
                    h.$slides = h.$slideTrack.children(this.options.slide),
                    h.$slideTrack.children(this.options.slide).detach(),
                    h.$slideTrack.append(h.$slides),
                    h.$slidesCache = h.$slides,
                    h.reinit()
                }
                ,
                A.prototype.setCSS = function(i) {
                    var s = this, d = {}, h, y;
                    s.options.rtl === !0 && (i = -i),
                    h = s.positionProp == "left" ? Math.ceil(i) + "px" : "0px",
                    y = s.positionProp == "top" ? Math.ceil(i) + "px" : "0px",
                    d[s.positionProp] = i,
                    s.transformsEnabled === !1 ? s.$slideTrack.css(d) : (d = {},
                    s.cssTransitions === !1 ? (d[s.animType] = "translate(" + h + ", " + y + ")",
                    s.$slideTrack.css(d)) : (d[s.animType] = "translate3d(" + h + ", " + y + ", 0px)",
                    s.$slideTrack.css(d)))
                }
                ,
                A.prototype.setDimensions = function() {
                    var i = this;
                    i.options.vertical === !1 ? i.options.centerMode === !0 && i.$list.css({
                        padding: "0px " + i.options.centerPadding
                    }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow),
                    i.options.centerMode === !0 && i.$list.css({
                        padding: i.options.centerPadding + " 0px"
                    })),
                    i.listWidth = i.$list.width(),
                    i.listHeight = i.$list.height(),
                    i.options.vertical === !1 && i.options.variableWidth === !1 ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow),
                    i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : i.options.variableWidth === !0 ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth),
                    i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
                    var s = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
                    i.options.variableWidth === !1 && i.$slideTrack.children(".slick-slide").width(i.slideWidth - s)
                }
                ,
                A.prototype.setFade = function() {
                    var i = this, s;
                    i.$slides.each(function(d, h) {
                        s = i.slideWidth * d * -1,
                        i.options.rtl === !0 ? S(h).css({
                            position: "relative",
                            right: s,
                            top: 0,
                            zIndex: i.options.zIndex - 2,
                            opacity: 0
                        }) : S(h).css({
                            position: "relative",
                            left: s,
                            top: 0,
                            zIndex: i.options.zIndex - 2,
                            opacity: 0
                        })
                    }),
                    i.$slides.eq(i.currentSlide).css({
                        zIndex: i.options.zIndex - 1,
                        opacity: 1
                    })
                }
                ,
                A.prototype.setHeight = function() {
                    var i = this;
                    if (i.options.slidesToShow === 1 && i.options.adaptiveHeight === !0 && i.options.vertical === !1) {
                        var s = i.$slides.eq(i.currentSlide).outerHeight(!0);
                        i.$list.css("height", s)
                    }
                }
                ,
                A.prototype.setOption = A.prototype.slickSetOption = function() {
                    var i = this, s, d, h, y, $ = !1, j;
                    if (S.type(arguments[0]) === "object" ? (h = arguments[0],
                    $ = arguments[1],
                    j = "multiple") : S.type(arguments[0]) === "string" && (h = arguments[0],
                    y = arguments[1],
                    $ = arguments[2],
                    arguments[0] === "responsive" && S.type(arguments[1]) === "array" ? j = "responsive" : typeof arguments[1] != "undefined" && (j = "single")),
                    j === "single")
                        i.options[h] = y;
                    else if (j === "multiple")
                        S.each(h, function(Y, N) {
                            i.options[Y] = N
                        });
                    else if (j === "responsive")
                        for (d in y)
                            if (S.type(i.options.responsive) !== "array")
                                i.options.responsive = [y[d]];
                            else {
                                for (s = i.options.responsive.length - 1; s >= 0; )
                                    i.options.responsive[s].breakpoint === y[d].breakpoint && i.options.responsive.splice(s, 1),
                                    s--;
                                i.options.responsive.push(y[d])
                            }
                    $ && (i.unload(),
                    i.reinit())
                }
                ,
                A.prototype.setPosition = function() {
                    var i = this;
                    i.setDimensions(),
                    i.setHeight(),
                    i.options.fade === !1 ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(),
                    i.$slider.trigger("setPosition", [i])
                }
                ,
                A.prototype.setProps = function() {
                    var i = this
                      , s = document.body.style;
                    i.positionProp = i.options.vertical === !0 ? "top" : "left",
                    i.positionProp === "top" ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"),
                    (s.WebkitTransition !== void 0 || s.MozTransition !== void 0 || s.msTransition !== void 0) && i.options.useCSS === !0 && (i.cssTransitions = !0),
                    i.options.fade && (typeof i.options.zIndex == "number" ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex),
                    s.OTransform !== void 0 && (i.animType = "OTransform",
                    i.transformType = "-o-transform",
                    i.transitionType = "OTransition",
                    s.perspectiveProperty === void 0 && s.webkitPerspective === void 0 && (i.animType = !1)),
                    s.MozTransform !== void 0 && (i.animType = "MozTransform",
                    i.transformType = "-moz-transform",
                    i.transitionType = "MozTransition",
                    s.perspectiveProperty === void 0 && s.MozPerspective === void 0 && (i.animType = !1)),
                    s.webkitTransform !== void 0 && (i.animType = "webkitTransform",
                    i.transformType = "-webkit-transform",
                    i.transitionType = "webkitTransition",
                    s.perspectiveProperty === void 0 && s.webkitPerspective === void 0 && (i.animType = !1)),
                    s.msTransform !== void 0 && (i.animType = "msTransform",
                    i.transformType = "-ms-transform",
                    i.transitionType = "msTransition",
                    s.msTransform === void 0 && (i.animType = !1)),
                    s.transform !== void 0 && i.animType !== !1 && (i.animType = "transform",
                    i.transformType = "transform",
                    i.transitionType = "transition"),
                    i.transformsEnabled = i.options.useTransform && i.animType !== null && i.animType !== !1
                }
                ,
                A.prototype.setSlideClasses = function(i) {
                    var s = this, d, h, y, $;
                    if (h = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
                    s.$slides.eq(i).addClass("slick-current"),
                    s.options.centerMode === !0) {
                        var j = s.options.slidesToShow % 2 === 0 ? 1 : 0;
                        d = Math.floor(s.options.slidesToShow / 2),
                        s.options.infinite === !0 && (i >= d && i <= s.slideCount - 1 - d ? s.$slides.slice(i - d + j, i + d + 1).addClass("slick-active").attr("aria-hidden", "false") : (y = s.options.slidesToShow + i,
                        h.slice(y - d + 1 + j, y + d + 2).addClass("slick-active").attr("aria-hidden", "false")),
                        i === 0 ? h.eq(h.length - 1 - s.options.slidesToShow).addClass("slick-center") : i === s.slideCount - 1 && h.eq(s.options.slidesToShow).addClass("slick-center")),
                        s.$slides.eq(i).addClass("slick-center")
                    } else
                        i >= 0 && i <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(i, i + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : h.length <= s.options.slidesToShow ? h.addClass("slick-active").attr("aria-hidden", "false") : ($ = s.slideCount % s.options.slidesToShow,
                        y = s.options.infinite === !0 ? s.options.slidesToShow + i : i,
                        s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - i < s.options.slidesToShow ? h.slice(y - (s.options.slidesToShow - $), y + $).addClass("slick-active").attr("aria-hidden", "false") : h.slice(y, y + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
                    (s.options.lazyLoad === "ondemand" || s.options.lazyLoad === "anticipated") && s.lazyLoad()
                }
                ,
                A.prototype.setupInfinite = function() {
                    var i = this, s, d, h;
                    if (i.options.fade === !0 && (i.options.centerMode = !1),
                    i.options.infinite === !0 && i.options.fade === !1 && (d = null,
                    i.slideCount > i.options.slidesToShow)) {
                        for (i.options.centerMode === !0 ? h = i.options.slidesToShow + 1 : h = i.options.slidesToShow,
                        s = i.slideCount; s > i.slideCount - h; s -= 1)
                            d = s - 1,
                            S(i.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - i.slideCount).prependTo(i.$slideTrack).addClass("slick-cloned");
                        for (s = 0; s < h + i.slideCount; s += 1)
                            d = s,
                            S(i.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + i.slideCount).appendTo(i.$slideTrack).addClass("slick-cloned");
                        i.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                            S(this).attr("id", "")
                        })
                    }
                }
                ,
                A.prototype.interrupt = function(i) {
                    var s = this;
                    i || s.autoPlay(),
                    s.interrupted = i
                }
                ,
                A.prototype.selectHandler = function(i) {
                    var s = this
                      , d = S(i.target).is(".slick-slide") ? S(i.target) : S(i.target).parents(".slick-slide")
                      , h = parseInt(d.attr("data-slick-index"));
                    if (h || (h = 0),
                    s.slideCount <= s.options.slidesToShow) {
                        s.slideHandler(h, !1, !0);
                        return
                    }
                    s.slideHandler(h)
                }
                ,
                A.prototype.slideHandler = function(i, s, d) {
                    var h, y, $, j, Y = null, N = this, U;
                    if (s = s || !1,
                    !(N.animating === !0 && N.options.waitForAnimate === !0) && !(N.options.fade === !0 && N.currentSlide === i)) {
                        if (s === !1 && N.asNavFor(i),
                        h = i,
                        Y = N.getLeft(h),
                        j = N.getLeft(N.currentSlide),
                        N.currentLeft = N.swipeLeft === null ? j : N.swipeLeft,
                        N.options.infinite === !1 && N.options.centerMode === !1 && (i < 0 || i > N.getDotCount() * N.options.slidesToScroll)) {
                            N.options.fade === !1 && (h = N.currentSlide,
                            d !== !0 && N.slideCount > N.options.slidesToShow ? N.animateSlide(j, function() {
                                N.postSlide(h)
                            }) : N.postSlide(h));
                            return
                        } else if (N.options.infinite === !1 && N.options.centerMode === !0 && (i < 0 || i > N.slideCount - N.options.slidesToScroll)) {
                            N.options.fade === !1 && (h = N.currentSlide,
                            d !== !0 && N.slideCount > N.options.slidesToShow ? N.animateSlide(j, function() {
                                N.postSlide(h)
                            }) : N.postSlide(h));
                            return
                        }
                        if (N.options.autoplay && clearInterval(N.autoPlayTimer),
                        h < 0 ? N.slideCount % N.options.slidesToScroll !== 0 ? y = N.slideCount - N.slideCount % N.options.slidesToScroll : y = N.slideCount + h : h >= N.slideCount ? N.slideCount % N.options.slidesToScroll !== 0 ? y = 0 : y = h - N.slideCount : y = h,
                        N.animating = !0,
                        N.$slider.trigger("beforeChange", [N, N.currentSlide, y]),
                        $ = N.currentSlide,
                        N.currentSlide = y,
                        N.setSlideClasses(N.currentSlide),
                        N.options.asNavFor && (U = N.getNavTarget(),
                        U = U.slick("getSlick"),
                        U.slideCount <= U.options.slidesToShow && U.setSlideClasses(N.currentSlide)),
                        N.updateDots(),
                        N.updateArrows(),
                        N.options.fade === !0) {
                            d !== !0 ? (N.fadeSlideOut($),
                            N.fadeSlide(y, function() {
                                N.postSlide(y)
                            })) : N.postSlide(y),
                            N.animateHeight();
                            return
                        }
                        d !== !0 && N.slideCount > N.options.slidesToShow ? N.animateSlide(Y, function() {
                            N.postSlide(y)
                        }) : N.postSlide(y)
                    }
                }
                ,
                A.prototype.startLoad = function() {
                    var i = this;
                    i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(),
                    i.$nextArrow.hide()),
                    i.options.dots === !0 && i.slideCount > i.options.slidesToShow && i.$dots.hide(),
                    i.$slider.addClass("slick-loading")
                }
                ,
                A.prototype.swipeDirection = function() {
                    var i, s, d, h, y = this;
                    return i = y.touchObject.startX - y.touchObject.curX,
                    s = y.touchObject.startY - y.touchObject.curY,
                    d = Math.atan2(s, i),
                    h = Math.round(d * 180 / Math.PI),
                    h < 0 && (h = 360 - Math.abs(h)),
                    h <= 45 && h >= 0 || h <= 360 && h >= 315 ? y.options.rtl === !1 ? "left" : "right" : h >= 135 && h <= 225 ? y.options.rtl === !1 ? "right" : "left" : y.options.verticalSwiping === !0 ? h >= 35 && h <= 135 ? "down" : "up" : "vertical"
                }
                ,
                A.prototype.swipeEnd = function(i) {
                    var s = this, d, h;
                    if (s.dragging = !1,
                    s.swiping = !1,
                    s.scrolling)
                        return s.scrolling = !1,
                        !1;
                    if (s.interrupted = !1,
                    s.shouldClick = !(s.touchObject.swipeLength > 10),
                    s.touchObject.curX === void 0)
                        return !1;
                    if (s.touchObject.edgeHit === !0 && s.$slider.trigger("edge", [s, s.swipeDirection()]),
                    s.touchObject.swipeLength >= s.touchObject.minSwipe) {
                        switch (h = s.swipeDirection(),
                        h) {
                        case "left":
                        case "down":
                            d = s.options.swipeToSlide ? s.checkNavigable(s.currentSlide + s.getSlideCount()) : s.currentSlide + s.getSlideCount(),
                            s.currentDirection = 0;
                            break;
                        case "right":
                        case "up":
                            d = s.options.swipeToSlide ? s.checkNavigable(s.currentSlide - s.getSlideCount()) : s.currentSlide - s.getSlideCount(),
                            s.currentDirection = 1;
                            break;
                        default:
                        }
                        h != "vertical" && (s.slideHandler(d),
                        s.touchObject = {},
                        s.$slider.trigger("swipe", [s, h]))
                    } else
                        s.touchObject.startX !== s.touchObject.curX && (s.slideHandler(s.currentSlide),
                        s.touchObject = {})
                }
                ,
                A.prototype.swipeHandler = function(i) {
                    var s = this;
                    if (!(s.options.swipe === !1 || "ontouchend"in document && s.options.swipe === !1) && !(s.options.draggable === !1 && i.type.indexOf("mouse") !== -1))
                        switch (s.touchObject.fingerCount = i.originalEvent && i.originalEvent.touches !== void 0 ? i.originalEvent.touches.length : 1,
                        s.touchObject.minSwipe = s.listWidth / s.options.touchThreshold,
                        s.options.verticalSwiping === !0 && (s.touchObject.minSwipe = s.listHeight / s.options.touchThreshold),
                        i.data.action) {
                        case "start":
                            s.swipeStart(i);
                            break;
                        case "move":
                            s.swipeMove(i);
                            break;
                        case "end":
                            s.swipeEnd(i);
                            break
                        }
                }
                ,
                A.prototype.swipeMove = function(i) {
                    var s = this, d = !1, h, y, $, j, Y, N;
                    if (Y = i.originalEvent !== void 0 ? i.originalEvent.touches : null,
                    !s.dragging || s.scrolling || Y && Y.length !== 1)
                        return !1;
                    if (h = s.getLeft(s.currentSlide),
                    s.touchObject.curX = Y !== void 0 ? Y[0].pageX : i.clientX,
                    s.touchObject.curY = Y !== void 0 ? Y[0].pageY : i.clientY,
                    s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))),
                    N = Math.round(Math.sqrt(Math.pow(s.touchObject.curY - s.touchObject.startY, 2))),
                    !s.options.verticalSwiping && !s.swiping && N > 4)
                        return s.scrolling = !0,
                        !1;
                    if (s.options.verticalSwiping === !0 && (s.touchObject.swipeLength = N),
                    y = s.swipeDirection(),
                    i.originalEvent !== void 0 && s.touchObject.swipeLength > 4 && (s.swiping = !0,
                    i.preventDefault()),
                    j = (s.options.rtl === !1 ? 1 : -1) * (s.touchObject.curX > s.touchObject.startX ? 1 : -1),
                    s.options.verticalSwiping === !0 && (j = s.touchObject.curY > s.touchObject.startY ? 1 : -1),
                    $ = s.touchObject.swipeLength,
                    s.touchObject.edgeHit = !1,
                    s.options.infinite === !1 && (s.currentSlide === 0 && y === "right" || s.currentSlide >= s.getDotCount() && y === "left") && ($ = s.touchObject.swipeLength * s.options.edgeFriction,
                    s.touchObject.edgeHit = !0),
                    s.options.vertical === !1 ? s.swipeLeft = h + $ * j : s.swipeLeft = h + $ * (s.$list.height() / s.listWidth) * j,
                    s.options.verticalSwiping === !0 && (s.swipeLeft = h + $ * j),
                    s.options.fade === !0 || s.options.touchMove === !1)
                        return !1;
                    if (s.animating === !0)
                        return s.swipeLeft = null,
                        !1;
                    s.setCSS(s.swipeLeft)
                }
                ,
                A.prototype.swipeStart = function(i) {
                    var s = this, d;
                    if (s.interrupted = !0,
                    s.touchObject.fingerCount !== 1 || s.slideCount <= s.options.slidesToShow)
                        return s.touchObject = {},
                        !1;
                    i.originalEvent !== void 0 && i.originalEvent.touches !== void 0 && (d = i.originalEvent.touches[0]),
                    s.touchObject.startX = s.touchObject.curX = d !== void 0 ? d.pageX : i.clientX,
                    s.touchObject.startY = s.touchObject.curY = d !== void 0 ? d.pageY : i.clientY,
                    s.dragging = !0
                }
                ,
                A.prototype.unfilterSlides = A.prototype.slickUnfilter = function() {
                    var i = this;
                    i.$slidesCache !== null && (i.unload(),
                    i.$slideTrack.children(this.options.slide).detach(),
                    i.$slidesCache.appendTo(i.$slideTrack),
                    i.reinit())
                }
                ,
                A.prototype.unload = function() {
                    var i = this;
                    S(".slick-cloned", i.$slider).remove(),
                    i.$dots && i.$dots.remove(),
                    i.$prevArrow && i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove(),
                    i.$nextArrow && i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove(),
                    i.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
                }
                ,
                A.prototype.unslick = function(i) {
                    var s = this;
                    s.$slider.trigger("unslick", [s, i]),
                    s.destroy()
                }
                ,
                A.prototype.updateArrows = function() {
                    var i = this, s;
                    s = Math.floor(i.options.slidesToShow / 2),
                    i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                    i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                    i.currentSlide === 0 ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
                    i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (i.currentSlide >= i.slideCount - i.options.slidesToShow && i.options.centerMode === !1 || i.currentSlide >= i.slideCount - 1 && i.options.centerMode === !0) && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
                    i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
                }
                ,
                A.prototype.updateDots = function() {
                    var i = this;
                    i.$dots !== null && (i.$dots.find("li").removeClass("slick-active").end(),
                    i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"))
                }
                ,
                A.prototype.visibility = function() {
                    var i = this;
                    i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1)
                }
                ,
                S.fn.slick = function() {
                    var i = this, s = arguments[0], d = Array.prototype.slice.call(arguments, 1), h = i.length, y, $;
                    for (y = 0; y < h; y++)
                        if (typeof s == "object" || typeof s == "undefined" ? i[y].slick = new A(i[y],s) : $ = i[y].slick[s].apply(i[y].slick, d),
                        typeof $ != "undefined")
                            return $;
                    return i
                }
            })
        }
    }, ke => {
        var Ae = oe => ke(ke.s = oe)
          , he = Ae(3984)
    }
    ]);
}
