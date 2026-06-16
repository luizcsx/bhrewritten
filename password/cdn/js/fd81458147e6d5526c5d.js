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
    "use strict";
    (self.webpackChunk = self.webpackChunk || []).push([[485], {
        6913: (y, a, e) => {
            var t = e(6726), u;
            window.BH = {
                sprite_sheets: {
                    events: "cdn/events/sprite-90b06ac7.svg",
                    landing: "cdn/sprites/landing/sprite-2e16fcdd.svg",
                    notifications: "cdn/notifications/sprite-200fa035.svg",
                    sets: "cdn/sprites/sets/sprite-1b6a2101.svg",
                    shop: "cdn/sprites/shop/sprite-81373e15.svg",
                    social: "cdn/sprites/social/sprite-b922c512.svg",
                    ui: "cdn/sprites/ui/sprite-2a214387.svg",
                    user: "cdn/sprites/user/sprite-57986dd5.svg"
                },
                loaded_sprite_sheets: {},
                storage_domain: "https://github.com/luizcsx/bh-rewritten/cdn",
                avatar_location: "https://web.archive.org/web/20230328123501/https://brkcdn.com/images/avatars/",
                item_location: "https://web.archive.org/web/20230328123501/https://brkcdn.com/v2/images/shop/thumbnails/",
                img_pending_512: "https://web.archive.org/web/20230328123501/https://brkcdn.com/default/pending.png",
                img_declined_512: "https://web.archive.org/web/20230328123501/https://brkcdn.com/default/declined.png",
                img_pending_set: "https://web.archive.org/web/20230328123501/https://brkcdn.com/default/pendingset.png",
                img_declined_set: "https://web.archive.org/web/20230328123501/https://brkcdn.com/default/declinedset.png",
                api_domain: "https://web.archive.org/web/20230328123501/https://api.brick-hill.com",
                main_account_id: Number(1003),
                stripe_public: "pk_live_EQ2PLKsNXj846MG8s6WEuStR00dbYJvUEd",
                csrf: (u = document.querySelector('meta[name="csrf-token"]')) == null ? void 0 : u.getAttribute("content"),
                user: g(),
                apiUrl: o => `${window.BH.api_domain}/${o}`,
                avatarImg: o => `${window.BH.api_domain}/v1/thumbnails/single?type=1&id=${o}`,
                assetImg: o => `${window.BH.item_location}${o}.png`
            };
            function g() {
                let o = Object.assign({}, (document.querySelector('meta[name="user-data"]') || {}).dataset);
                return o.authenticated !== "true" ? void 0 : {
                    id: Number(o.id),
                    username: o.username,
                    admin: o.admin === "true",
                    bits: Number(o.bits),
                    bucks: Number(o.bucks),
                    taxRate: Number(o.taxRate),
                    membership: Number(o.membership)
                }
            }
            const v = {
                Notification: () => Promise.resolve().then(e.bind(e, 895)),
                AreYouSure: () => Promise.resolve().then(e.bind(e, 7160)),
                Countdown: () => Promise.resolve().then(e.bind(e, 2639)),
                Dropdown: () => Promise.resolve().then(e.bind(e, 9674)),
                Modal: () => Promise.resolve().then(e.bind(e, 8122)),
                Tabs: () => Promise.resolve().then(e.bind(e, 8836)),
                Tab: () => Promise.resolve().then(e.bind(e, 5705)),
                SvgSprite: () => Promise.resolve().then(e.bind(e, 8900))
            }
              , f = {
                MainFooter: () => Promise.resolve().then(e.bind(e, 6817)),
                ShopPage: () => Promise.all([e.e(746), e.e(318)]).then(e.bind(e, 8454)),
                ItemPage: () => Promise.all([e.e(768), e.e(635), e.e(746), e.e(389)]).then(e.bind(e, 5501)),
                UploadItem: () => Promise.all([e.e(35), e.e(527), e.e(187)]).then(e.bind(e, 9187)),
                EditItem: () => Promise.all([e.e(35), e.e(527), e.e(332)]).then(e.bind(e, 9304)),
                Membership: () => e.e(479).then(e.bind(e, 9318)),
                DownloadClient: () => e.e(96).then(e.bind(e, 6096)),
                Transactions: () => e.e(140).then(e.bind(e, 2780)),
                AvatarEditor: () => Promise.all([e.e(913), e.e(778)]).then(e.bind(e, 4778)),
                Settings: () => e.e(605).then(e.bind(e, 3605)),
                TfaCard: () => e.e(843).then(e.bind(e, 1843)),
                BannedBilling: () => e.e(705).then(e.bind(e, 9705)),
                Trade: () => e.e(508).then(e.bind(e, 6508)),
                ViewTrades: () => e.e(767).then(e.bind(e, 767)),
                TradeList: () => e.e(858).then(e.bind(e, 4858)),
                ProfileDropdown: () => e.e(813).then(e.bind(e, 5813)),
                Crate: () => e.e(113).then(e.bind(e, 3113)),
                Sets: () => e.e(84).then(e.bind(e, 8084)),
                PlayPage: () => e.e(966).then(e.bind(e, 7966)),
                SetPage: () => Promise.all([e.e(635), e.e(720)]).then(e.bind(e, 344)),
                EditSet: () => Promise.all([e.e(35), e.e(972)]).then(e.bind(e, 4972)),
                Comments: () => Promise.all([e.e(635), e.e(721)]).then(e.bind(e, 4635)),
                Favorite: () => e.e(382).then(e.bind(e, 6382)),
                RedeemPromo: () => e.e(947).then(e.bind(e, 3947)),
                Mover: () => e.e(158).then(e.bind(e, 4158)),
                BlogCard: () => e.e(780).then(e.bind(e, 3780))
            };
            (0,
            t.Q)(f),
            (0,
            t.T)(v)
        }
        ,
        8030: (y, a, e) => {
            e.d(a, {
                Y: () => u
            });
            var t = e(3518);
            function u(g) {
                const v = (0,
                t.iH)([]);
                let f = (0,
                t.iH)(null);
                (0,
                t.JJ)("tabsProvider", (0,
                t.qj)({
                    tabs: v,
                    activeTabIndex: f
                })),
                (0,
                t.JJ)("addTab", s => {
                    v.value.push(s),
                    s.show && f.value === null && (g("loaded"),
                    o(s.name))
                }
                ),
                (0,
                t.JJ)("updateTab", s => {
                    v.value.forEach( (n, d) => {
                        var c;
                        n.name === s.name && (n.show = s.show,
                        n.show && d < ((c = f.value) != null ? c : 0) && o(n.name))
                    }
                    )
                }
                );
                const o = s => {
                    v.value.forEach( (n, d) => {
                        let c = n.name.toLowerCase() === s.toLowerCase();
                        c && (f.value = d),
                        n.isActive = c
                    }
                    )
                }
                  , i = (0,
                t.iH)(window.location.hash)
                  , h = (0,
                t.Fl)( () => decodeURI(i.value.substring(1)));
                return (0,
                t.bv)( () => {
                    v.value.length && (window.location.hash && o(h.value),
                    window.addEventListener("hashchange", () => {
                        i.value = window.location.hash,
                        o(h.value)
                    }
                    ))
                }
                ),
                {
                    tabs: v,
                    selectTab: o
                }
            }
        }
        ,
        6662: (y, a, e) => {
            e.d(a, {
                BH: () => t
            });
            const t = window.BH
        }
        ,
        9933: (y, a, e) => {
            e.d(a, {
                R: () => g
            });
            var t = e(9426);
            class u extends t.y {
                data() {
                    return {}
                }
                setNotification(f, o) {
                    this.state.notification = {
                        msg: f,
                        type: o
                    }
                }
            }
            const g = new u
        }
        ,
        9426: (y, a, e) => {
            e.d(a, {
                y: () => f
            });
            var t = e(3518)
              , u = Object.defineProperty
              , g = (o, i, h) => i in o ? u(o, i, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: h
            }) : o[i] = h
              , v = (o, i, h) => (g(o, typeof i != "symbol" ? i + "" : i, h),
            h);
            class f {
                constructor() {
                    v(this, "state");
                    let i = this.data();
                    this.state = (0,
                    t.qj)(i)
                }
                getState() {
                    return (0,
                    t.OT)(this.state)
                }
            }
        }
        ,
        7160: (y, a, e) => {
            e.r(a),
            e.d(a, {
                default: () => h
            });
            var t = e(3518)
              , u = e(8122);
            const g = ["disabled"]
              , v = {
                key: 0
            }
              , f = {
                class: "modal-buttons"
            }
              , h = (0,
            t.aZ)({
                __name: "AreYouSure",
                props: {
                    buttonDisabled: Boolean,
                    intercepted: Boolean,
                    buttonClass: {
                        type: String,
                        default: "green"
                    },
                    modalTitle: {
                        type: String,
                        default: "Are you sure?"
                    },
                    modalButtonClass: {
                        type: String,
                        default: "green"
                    },
                    modalButtonText: {
                        type: String,
                        default: "Yes"
                    }
                },
                emits: ["intercept", "accepted"],
                setup(s, {emit: n}) {
                    const d = s
                      , c = (0,
                    t.iH)(!1)
                      , r = (0,
                    t.iH)(!1);
                    function m() {
                        d.buttonDisabled || (n("intercept"),
                        c.value = !0)
                    }
                    function l() {
                        p(),
                        r.value || n("accepted"),
                        r.value = !0
                    }
                    function p() {
                        c.value = !1,
                        r.value = !1
                    }
                    return (T, C) => ((0,
                    t.wg)(),
                    (0,
                    t.iD)("div", null, [(0,
                    t._)("button", {
                        class: (0,
                        t.C_)(s.buttonClass),
                        onClick: m,
                        disabled: s.buttonDisabled
                    }, [(0,
                    t.WI)(T.$slots, "default"), (0,
                    t.WI)(T.$slots, "button")], 10, g), s.intercepted ? (0,
                    t.kq)("v-if", !0) : (0,
                    t.wy)(((0,
                    t.wg)(),
                    (0,
                    t.j4)(u.default, {
                        key: 0,
                        title: s.modalTitle,
                        onClose: C[1] || (C[1] = $ => p())
                    }, {
                        default: (0,
                        t.w5)( () => [typeof T.$slots.modal == "undefined" ? ((0,
                        t.wg)(),
                        (0,
                        t.iD)("div", v, " Are you sure you want to continue? ")) : (0,
                        t.kq)("v-if", !0), (0,
                        t.WI)(T.$slots, "modal"), (0,
                        t._)("div", f, [(0,
                        t._)("button", {
                            class: (0,
                            t.C_)([s.modalButtonClass, "button"]),
                            style: {
                                "margin-right": "10px"
                            },
                            onClick: l,
                            type: "button"
                        }, (0,
                        t.zw)(s.modalButtonText), 3), (0,
                        t._)("button", {
                            class: "cancel-button modal-close",
                            onClick: C[0] || (C[0] = $ => p()),
                            type: "button"
                        }, " Cancel ")])]),
                        _: 3
                    }, 8, ["title"])), [[t.F8, c.value]])]))
                }
            })
        }
        ,
        2639: (y, a, e) => {
            e.r(a),
            e.d(a, {
                default: () => i
            });
            var t = e(3518)
              , u = e(308);
            const g = ["title"]
              , v = (0,
            t.aZ)({
                __name: "Countdown",
                props: {
                    countdownTo: null,
                    reload: {
                        type: [String, Boolean]
                    },
                    shortForm: {
                        type: Boolean
                    },
                    addLeft: {
                        type: Boolean
                    }
                },
                emits: ["finished"],
                setup(h, {emit: s}) {
                    const n = h
                      , {t: d} = (0,
                    u.QT)();
                    let c = (0,
                    t.iH)(new Date(n.countdownTo));
                    (0,
                    t.bv)( () => {
                        setInterval( () => {
                            c.value = new Date(n.countdownTo)
                        }
                        , 1e3)
                    }
                    );
                    const r = (0,
                    t.Fl)( () => {
                        let l = c.value.getTime() - new Date().getTime()
                          , p = Math.floor(l / (1e3 * 60 * 60 * 24))
                          , T = Math.floor(l % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60))
                          , C = Math.floor(l % (1e3 * 60 * 60) / (1e3 * 60))
                          , $ = Math.floor(l % (1e3 * 60) / 1e3);
                        if ($ < 0)
                            return s("finished"),
                            n.reload && location.reload(),
                            "0 seconds";
                        let S = "";
                        return p >= 1 && (S += `${Math.floor(p)} `,
                        S += `${d("day", p)}, `),
                        T >= 1 && (S += `${T} `,
                        S += `${d("hour", T)}, `),
                        C >= 1 && (S += `${C} `,
                        S += `${d("minute", C)}, `),
                        S += `${$} `,
                        S += `${d("second", $)}`,
                        S
                    }
                    )
                      , m = (0,
                    t.Fl)( () => {
                        let l = r.value;
                        return n.shortForm && (l = l.split(",")[0]),
                        n.addLeft && (l += " left"),
                        l
                    }
                    );
                    return (l, p) => ((0,
                    t.wg)(),
                    (0,
                    t.iD)("span", {
                        title: (0,
                        t.SU)(r)
                    }, (0,
                    t.zw)((0,
                    t.SU)(m)), 9, g))
                }
            });
            function f(h) {
                h.__i18n = h.__i18n || [],
                h.__i18n.push({
                    locale: "en",
                    resource: {
                        second: s => {
                            const {normalize: n, plural: d} = s;
                            return d([n(["second"]), n(["seconds"])])
                        }
                        ,
                        minute: s => {
                            const {normalize: n, plural: d} = s;
                            return d([n(["minute"]), n(["minutes"])])
                        }
                        ,
                        hour: s => {
                            const {normalize: n, plural: d} = s;
                            return d([n(["hour"]), n(["hours"])])
                        }
                        ,
                        day: s => {
                            const {normalize: n, plural: d} = s;
                            return d([n(["day"]), n(["days"])])
                        }
                    }
                })
            }
            typeof f == "function" && f(v);
            const i = v
        }
        ,
        9674: (y, a, e) => {
            e.r(a),
            e.d(a, {
                default: () => o
            });
            var t = e(3518);
            const u = {
                key: 0
            }
              , g = (0,
            t._)("div", {
                class: "dropdown-arrow"
            }, null, -1)
              , o = (0,
            t.aZ)({
                __name: "Dropdown",
                props: {
                    activator: null,
                    contentclass: null
                },
                setup(i, {expose: h}) {
                    const s = i
                      , n = (0,
                    t.iH)()
                      , d = (0,
                    t.iH)()
                      , c = (0,
                    t.iH)();
                    let r = null;
                    const m = (0,
                    t.iH)(!1);
                    h({
                        isOpen: m,
                        show: E,
                        hide: B
                    }),
                    (0,
                    t.bv)( () => {
                        var b;
                        r = d.value || document.getElementById((b = s.activator) != null ? b : ""),
                        r.addEventListener("click", H),
                        document.body.addEventListener("click", l)
                    }
                    );
                    function l(b) {
                        var P;
                        !r.contains(b.target) && !((P = c.value) != null && P.contains(b.target)) && (m.value = !1)
                    }
                    const p = (0,
                    t.iH)(0)
                      , T = (0,
                    t.iH)(0)
                      , C = (0,
                    t.iH)(0)
                      , $ = (0,
                    t.iH)(0)
                      , S = (0,
                    t.iH)(-1);
                    function x() {
                        var b, P;
                        let D = r.getBoundingClientRect();
                        p.value = D.left + document.documentElement.scrollLeft,
                        T.value = D.top + document.documentElement.scrollTop,
                        $.value = D.width,
                        C.value = D.height,
                        S.value = (P = (b = c.value) == null ? void 0 : b.clientWidth) != null ? P : -1
                    }
                    function H(b) {
                        b.stopImmediatePropagation(),
                        x(),
                        m.value = !m.value
                    }
                    function E() {
                        x(),
                        m.value = !0
                    }
                    function B() {
                        m.value = !1
                    }
                    return (b, P) => ((0,
                    t.wg)(),
                    (0,
                    t.iD)("div", {
                        ref_key: "dropdown",
                        ref: n
                    }, [typeof i.activator == "undefined" ? ((0,
                    t.wg)(),
                    (0,
                    t.iD)("a", u, [(0,
                    t._)("i", {
                        ref_key: "arrowRef",
                        ref: d,
                        onClick: H,
                        class: "far fa-caret-square-down dropdown-arrow"
                    }, null, 512)])) : (0,
                    t.kq)("v-if", !0), ((0,
                    t.wg)(),
                    (0,
                    t.j4)(t.lR, {
                        to: "body"
                    }, [(0,
                    t._)("div", {
                        ref_key: "slot",
                        ref: c,
                        class: (0,
                        t.C_)(["dropdown-content", [i.contentclass, {
                            active: m.value
                        }]]),
                        style: (0,
                        t.j5)({
                            top: `${T.value + C.value + 20}px`,
                            left: `${p.value - S.value / 2 + $.value / 2}px`
                        })
                    }, [g, (0,
                    t.WI)(b.$slots, "default")], 6)]))], 512))
                }
            })
        }
        ,
        6817: (y, a, e) => {
            e.r(a),
            e.d(a, {
                default: () => $
            });
            var t = e(3518)
              , u = e(8900);
            const g = {
                class: "new-theme"
            }
              , v = {
                key: 0,
                class: "footer-social very-bold flex"
            }
              , f = (0,
            t._)("p", {
                class: "blue-text no-mobile"
            }, " FOLLOW US ", -1)
              , o = {
                href: "https://discord.gg",
                target: "_blank"
            }
              , i = {
                href: "https://x.com/bhrewritten",
                target: "_blank"
            }
              , h = {
                href: "https://github.com/luizcsx/bhrewritten",
                target: "_blank"
            }
              , s = {
                href: "https://www.youtube.com/@bhrewritten",
                target: "_blank"
            }
              , n = {
                href: "https://instagram.com/bhrewritten",
                target: "_blank"
            }
              , d = {
                href: "https://tiktok.com/@bhrewritten",
                target: "_blank"
            }
              , c = {
                class: "footer-links flex"
            }
              , r = {
                href: "https://bhrewritten.vercel.app/bhrewritten-team",
                target: "_blank",
                style: {
                    height: "60px",
                    "max-width": "360px"
                }
            }
              , m = (0,
            t.uE)('<a href="https://bhrewritten.vercel.app/terms">TERMS OF SERVICE</a><a href="https://bhrewritten.vercel.app/rules">RULES OF CONDUCT</a><a href="https://bhrewritten.vercel.app/privacy">PRIVACY POLICY</a><a href="https://bhrewritten.vercel.app/team">TEAM</a><a href="https://bhrewritten-blog.vercel.app">BLOG</a>', 5)
              , l = (0,
            t._)("div", {
                class: "footer-divider"
            }, null, -1)
              , p = {
                class: "footer-copyright"
            }
              , $ = (0,
            t.aZ)({
                __name: "MainFooter",
                setup(S) {
                    const x = (0,
                    t.Fl)( () => location.pathname === "/" && document.title === "Brick Hill Rewritten");
                    return (H, E) => ((0,
                    t.wg)(),
                    (0,
                    t.iD)("div", g, [(0,
                    t._)("footer", null, [(0,
                    t.SU)(x) ? ((0,
                    t.wg)(),
                    (0,
                    t.iD)("div", v, [f, (0,
                    t._)("a", o, [(0,
                    t.Wm)(u.default, {
                        svg: "social/discord.svg"
                    })]), (0,
                    t._)("a", i, [(0,
                    t.Wm)(u.default, {
                        svg: "social/x.svg"
                    })]), (0,
                    t._)("a", h, [(0,
                    t.Wm)(u.default, {
                        svg: "social/github.svg"
                    })]), (0,
                    t._)("a", s, [(0,
                    t.Wm)(u.default, {
                        svg: "social/youtube.svg"
                    })]), (0,
                    t._)("a", n, [(0,
                    t.Wm)(u.default, {
                        svg: "social/instagram.svg"
                    })]), (0,
                    t._)("a", d, [(0,
                    t.Wm)(u.default, {
                        svg: "social/tiktok.svg"
                    })])])) : (0,
                    t.kq)("v-if", !0), (0,
                    t._)("div", c, [(0,
                    t._)("a", r, [(0,
                    t.Wm)(u.default, {
                        svg: "social/bhrewritten-team.svg",
                        style: {
                            width: "100%",
                            height: "100%"
                        }
                    })]), m]), l, (0,
                    t._)("p", p, " \xA9 " + (0,
                    t.zw)(new Date().getFullYear()) + " Brick Hill Rewritten Team. Brick Hill&amp; is a registered trademark of Mooshimity, Ltd. We are not partners, sponsors, or affiliates of Mooshimity, Ltd. BHRewritten.vercel.app is a non-profit and completely free project with no attempt to generate any revenue. ", 1)])]))
                }
            })
        }
        ,
        8122: (y, a, e) => {
            e.r(a),
            e.d(a, {
                default: () => o
            });
            var t = e(3518);
            const u = {
                class: "modal-content",
                style: {
                    display: "block"
                }
            }
              , g = (0,
            t._)("hr", null, null, -1)
              , o = (0,
            t.aZ)({
                __name: "Modal",
                props: {
                    title: null
                },
                emits: ["close"],
                setup(i, {emit: h}) {
                    const s = (0,
                    t.iH)(!1)
                      , n = (0,
                    t.iH)(null);
                    function d(m) {
                        let l = m
                          , p = l.composedPath();
                        typeof p == "undefined" && (p = [l.target]),
                        p[0] === n.value ? s.value = !0 : s.value && (s.value = !1)
                    }
                    function c(m) {
                        let l = m
                          , p = l.composedPath();
                        typeof p == "undefined" && (p = [l.target]),
                        p[0] === n.value && s.value && (r(),
                        s.value = !1)
                    }
                    function r() {
                        h("close")
                    }
                    return (0,
                    t.wF)( () => {
                        document.body.addEventListener("mousedown", d),
                        document.body.addEventListener("mouseup", c)
                    }
                    ),
                    (m, l) => ((0,
                    t.wg)(),
                    (0,
                    t.iD)("div", {
                        ref_key: "modal",
                        ref: n,
                        class: "modal"
                    }, [(0,
                    t._)("div", u, [(0,
                    t._)("span", {
                        class: "close",
                        onClick: r
                    }, "\xD7"), (0,
                    t.Uk)(" " + (0,
                    t.zw)(i.title) + " ", 1), g, (0,
                    t.WI)(m.$slots, "default")])], 512))
                }
            })
        }
        ,
        895: (y, a, e) => {
            e.r(a),
            e.d(a, {
                default: () => i
            });
            var t = e(3518)
              , u = e(9933);
            const g = {
                class: "col-10-12 push-1-12 new-theme",
                style: {
                    position: "absolute"
                }
            }
              , v = {
                class: "notification-holder"
            }
              , i = (0,
            t.aZ)({
                __name: "Notification",
                setup(h) {
                    const s = u.R.getState()
                      , n = (0,
                    t.iH)("closed");
                    let d;
                    return (0,
                    t.YP)( () => s.notification, () => {
                        n.value = "open",
                        clearTimeout(d),
                        d = setTimeout( () => {
                            n.value = "closed"
                        }
                        , 5e3)
                    }
                    ),
                    (c, r) => {
                        var m, l;
                        return (0,
                        t.wg)(),
                        (0,
                        t.iD)("div", g, [(0,
                        t._)("div", v, [(0,
                        t._)("div", {
                            class: (0,
                            t.C_)(["alert transition", [((m = (0,
                            t.SU)(s).notification) == null ? void 0 : m.type) || "warning", n.value]])
                        }, (0,
                        t.zw)((l = (0,
                        t.SU)(s).notification) == null ? void 0 : l.msg), 3)])])
                    }
                }
            })
        }
        ,
        8900: (y, a, e) => {
            e.r(a),
            e.d(a, {
                default: () => h
            });
            var t = e(3518)
              , u = e(6662)
              , g = e(1817);
            const v = ["width", "height"]
              , f = ["href", "xlink-href"]
              , h = (0,
            t.aZ)({
                __name: "SvgSprite",
                props: {
                    square: null,
                    width: null,
                    height: null,
                    svg: null
                },
                setup(s) {
                    const n = s
                      , d = (0,
                    t.Fl)( () => {
                        let c = n.svg.substring(0, n.svg.indexOf("/"))
                          , r = n.svg.substring(n.svg.lastIndexOf("/") + 1).replace(".svg", "");
                        if (typeof u.BH.sprite_sheets[c] == "undefined")
                            throw new Error(`Invalid spritesheet generated for SVG ${c}: ${r}: ${n.svg}`);
                        return typeof u.BH.loaded_sprite_sheets[c] == "undefined" && (u.BH.loaded_sprite_sheets[c] = !0,
                        g.Z.get(u.BH.sprite_sheets[c], {
                            withCredentials: !1
                        }).then( ({data: m}) => {
                            let l = document.createElement("div");
                            l.style.display = "none",
                            l.innerHTML = m,
                            document.body.insertBefore(l, document.body.childNodes[0])
                        }
                        )),
                        `#${r}`
                    }
                    );
                    return (c, r) => ((0,
                    t.wg)(),
                    (0,
                    t.iD)("svg", {
                        width: s.width || s.square,
                        height: s.height || s.square,
                        style: (0,
                        t.j5)({
                            height: `${s.height || s.square}px`,
                            width: `${s.width || s.square}px`
                        })
                    }, [(0,
                    t._)("use", {
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        href: (0,
                        t.SU)(d),
                        "xlink-href": (0,
                        t.SU)(d)
                    }, null, 8, f)], 12, v))
                }
            })
        }
        ,
        5705: (y, a, e) => {
            e.r(a),
            e.d(a, {
                default: () => v
            });
            var t = e(3518);
            const v = (0,
            t.aZ)({
                __name: "Tab",
                props: {
                    name: {
                        type: String,
                        required: !0
                    },
                    show: {
                        type: Boolean,
                        default: !0
                    },
                    href: {
                        type: String
                    }
                },
                emits: ["selected", "selection-state"],
                setup(f, {emit: o}) {
                    const i = f
                      , h = (0,
                    t.iH)(!1)
                      , s = (0,
                    t.iH)("none")
                      , n = (0,
                    t.f3)("addTab");
                    (0,
                    t.wF)( () => {
                        n({
                            name: i.name,
                            show: i.show
                        })
                    }
                    );
                    const d = (0,
                    t.f3)("tabsProvider");
                    (0,
                    t.YP)(d, r => {
                        var m, l;
                        return h.value = i.name === ((l = r.tabs[(m = r.activeTabIndex) != null ? m : 0]) == null ? void 0 : l.name)
                    }
                    );
                    const c = (0,
                    t.f3)("updateTab");
                    return (0,
                    t.YP)( () => i.show, () => {
                        c({
                            name: i.name,
                            show: i.show
                        })
                    }
                    ),
                    (0,
                    t.YP)(h, r => {
                        o("selection-state", r),
                        r ? (i.href && (window.location.href = i.href),
                        o("selected"),
                        s.value = "inherit") : s.value = "none"
                    }
                    ),
                    (r, m) => ((0,
                    t.wg)(),
                    (0,
                    t.iD)("div", {
                        class: "tab-body",
                        style: (0,
                        t.j5)({
                            display: s.value
                        }),
                        ref: "body"
                    }, [(0,
                    t.wy)((0,
                    t._)("div", null, [(0,
                    t.WI)(r.$slots, "default")], 512), [[t.F8, h.value]])], 4))
                }
            })
        }
        ,
        8836: (y, a, e) => {
            e.r(a),
            e.d(a, {
                default: () => h
            });
            var t = e(3518)
              , u = e(8030);
            const g = ["onClick"]
              , v = {
                key: 0
            }
              , f = {
                class: "tab-holder"
            }
              , h = (0,
            t.aZ)({
                __name: "Tabs",
                props: {
                    tabsLoaded: {
                        type: Boolean,
                        default: !0
                    },
                    newTheme: Boolean,
                    smallText: Boolean
                },
                emits: ["loaded"],
                setup(s, {emit: n}) {
                    const {tabs: d, selectTab: c} = (0,
                    u.Y)(n);
                    return (r, m) => ((0,
                    t.wg)(),
                    (0,
                    t.iD)("div", {
                        class: (0,
                        t.C_)({
                            tabs: !s.newTheme,
                            "new-tabs": s.newTheme
                        })
                    }, [((0,
                    t.wg)(!0),
                    (0,
                    t.iD)(t.HY, null, (0,
                    t.Ko)((0,
                    t.SU)(d), (l, p) => ((0,
                    t.wg)(),
                    (0,
                    t.iD)("div", {
                        class: (0,
                        t.C_)(["no-pad", `col-1-${(0,
                        t.SU)(d).length}`]),
                        key: p,
                        onClick: T => (0,
                        t.SU)(c)(l.name)
                    }, [(0,
                    t._)("div", {
                        class: (0,
                        t.C_)(["tab", {
                            active: l.isActive,
                            "small-tab-text": s.smallText,
                            "last-tab": p == (0,
                            t.SU)(d).length - 1
                        }])
                    }, [(0,
                    t.WI)(r.$slots, l.name.replace(" ", "").toLowerCase()), typeof r.$slots[l.name.replace(" ", "").toLowerCase()] == "undefined" ? ((0,
                    t.wg)(),
                    (0,
                    t.iD)("span", v, (0,
                    t.zw)(l.name), 1)) : (0,
                    t.kq)("v-if", !0)], 2)], 10, g))), 128)), (0,
                    t.wy)((0,
                    t._)("div", f, [(0,
                    t.WI)(r.$slots, "default")], 512), [[t.F8, s.tabsLoaded]])], 2))
                }
            })
        }
    }, y => {
        var a = t => y(y.s = t);
        y.O(0, [685], () => a(6913));
        var e = y.O()
    }
    ]);
}
