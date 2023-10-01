/*! For license information please see main.js.LICENSE.txt */
(()=>{
    "use strict";
    var t, e = {
        15: ()=>{
            const t = "undefined" == typeof window ? function(t) {
                return t()
            }
            : window.requestAnimationFrame;
            function e(e, i, a) {
                const n = a || (t=>Array.prototype.slice.call(t));
                let s = !1
                  , r = [];
                return function(...a) {
                    r = n(a),
                    s || (s = !0,
                    t.call(window, (()=>{
                        s = !1,
                        e.apply(i, r)
                    }
                    )))
                }
            }
            const i = t=>"start" === t ? "left" : "end" === t ? "right" : "center"
              , a = (t,e,i)=>"start" === t ? e : "end" === t ? i : (e + i) / 2;
            function n() {}
            const s = function() {
                let t = 0;
                return function() {
                    return t++
                }
            }();
            function r(t) {
                return null == t
            }
            function o(t) {
                if (Array.isArray && Array.isArray(t))
                    return !0;
                const e = Object.prototype.toString.call(t);
                return "[object" === e.substr(0, 7) && "Array]" === e.substr(-6)
            }
            function l(t) {
                return null !== t && "[object Object]" === Object.prototype.toString.call(t)
            }
            const c = t=>("number" == typeof t || t instanceof Number) && isFinite(+t);
            function h(t, e) {
                return c(t) ? t : e
            }
            function d(t, e) {
                return void 0 === t ? e : t
            }
            const f = (t,e)=>"string" == typeof t && t.endsWith("%") ? parseFloat(t) / 100 * e : +t;
            function u(t, e, i) {
                if (t && "function" == typeof t.call)
                    return t.apply(i, e)
            }
            function m(t, e, i, a) {
                let n, s, r;
                if (o(t))
                    if (s = t.length,
                    a)
                        for (n = s - 1; n >= 0; n--)
                            e.call(i, t[n], n);
                    else
                        for (n = 0; n < s; n++)
                            e.call(i, t[n], n);
                else if (l(t))
                    for (r = Object.keys(t),
                    s = r.length,
                    n = 0; n < s; n++)
                        e.call(i, t[r[n]], r[n])
            }
            function p(t, e) {
                let i, a, n, s;
                if (!t || !e || t.length !== e.length)
                    return !1;
                for (i = 0,
                a = t.length; i < a; ++i)
                    if (n = t[i],
                    s = e[i],
                    n.datasetIndex !== s.datasetIndex || n.index !== s.index)
                        return !1;
                return !0
            }
            function g(t) {
                if (o(t))
                    return t.map(g);
                if (l(t)) {
                    const e = Object.create(null)
                      , i = Object.keys(t)
                      , a = i.length;
                    let n = 0;
                    for (; n < a; ++n)
                        e[i[n]] = g(t[i[n]]);
                    return e
                }
                return t
            }
            function b(t) {
                return -1 === ["__proto__", "prototype", "constructor"].indexOf(t)
            }
            function x(t, e, i, a) {
                if (!b(t))
                    return;
                const n = e[t]
                  , s = i[t];
                l(n) && l(s) ? y(n, s, a) : e[t] = g(s)
            }
            function y(t, e, i) {
                const a = o(e) ? e : [e]
                  , n = a.length;
                if (!l(t))
                    return t;
                const s = (i = i || {}).merger || x;
                for (let r = 0; r < n; ++r) {
                    if (!l(e = a[r]))
                        continue;
                    const n = Object.keys(e);
                    for (let a = 0, r = n.length; a < r; ++a)
                        s(n[a], t, e, i)
                }
                return t
            }
            function k(t, e) {
                return y(t, e, {
                    merger: _
                })
            }
            function _(t, e, i) {
                if (!b(t))
                    return;
                const a = e[t]
                  , n = i[t];
                l(a) && l(n) ? k(a, n) : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = g(n))
            }
            const w = ".";
            function v(t, e) {
                const i = t.indexOf(w, e);
                return -1 === i ? t.length : i
            }
            function O(t, e) {
                if ("" === e)
                    return t;
                let i = 0
                  , a = v(e, i);
                for (; t && a > i; )
                    t = t[e.substr(i, a - i)],
                    i = a + 1,
                    a = v(e, i);
                return t
            }
            function M(t) {
                return t.charAt(0).toUpperCase() + t.slice(1)
            }
            const S = t=>void 0 !== t
              , D = t=>"function" == typeof t
              , I = (t,e)=>{
                if (t.size !== e.size)
                    return !1;
                for (const i of t)
                    if (!e.has(i))
                        return !1;
                return !0
            }
              , R = Math.PI
              , L = 2 * R
              , P = L + R
              , C = Number.POSITIVE_INFINITY
              , A = R / 180
              , T = R / 2
              , E = R / 4
              , z = 2 * R / 3
              , B = Math.log10
              , X = Math.sign;
            function Y(t) {
                const e = Math.round(t);
                t = j(t, e, t / 1e3) ? e : t;
                const i = Math.pow(10, Math.floor(B(t)))
                  , a = t / i;
                return (a <= 1 ? 1 : a <= 2 ? 2 : a <= 5 ? 5 : 10) * i
            }
            function F(t) {
                return !isNaN(parseFloat(t)) && isFinite(t)
            }
            function j(t, e, i) {
                return Math.abs(t - e) < i
            }
            function N(t, e, i) {
                let a, n, s;
                for (a = 0,
                n = t.length; a < n; a++)
                    s = t[a][i],
                    isNaN(s) || (e.min = Math.min(e.min, s),
                    e.max = Math.max(e.max, s))
            }
            function Z(t) {
                return t * (R / 180)
            }
            function V(t) {
                return t * (180 / R)
            }
            function W(t) {
                if (!c(t))
                    return;
                let e = 1
                  , i = 0;
                for (; Math.round(t * e) / e !== t; )
                    e *= 10,
                    i++;
                return i
            }
            function U(t, e) {
                return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
            }
            function H(t, e) {
                return (t - e + P) % L - R
            }
            function $(t) {
                return (t % L + L) % L
            }
            function q(t, e, i, a) {
                const n = $(t)
                  , s = $(e)
                  , r = $(i)
                  , o = $(s - n)
                  , l = $(r - n)
                  , c = $(n - s)
                  , h = $(n - r);
                return n === s || n === r || a && s === r || o > l && c < h
            }
            function K(t, e, i) {
                return Math.max(e, Math.min(i, t))
            }
            function G(t, e, i, a=1e-6) {
                return t >= Math.min(e, i) - a && t <= Math.max(e, i) + a
            }
            const J = t=>0 === t || 1 === t
              , Q = (t,e,i)=>-Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * L / i)
              , tt = (t,e,i)=>Math.pow(2, -10 * t) * Math.sin((t - e) * L / i) + 1
              , et = {
                linear: t=>t,
                easeInQuad: t=>t * t,
                easeOutQuad: t=>-t * (t - 2),
                easeInOutQuad: t=>(t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1),
                easeInCubic: t=>t * t * t,
                easeOutCubic: t=>(t -= 1) * t * t + 1,
                easeInOutCubic: t=>(t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2),
                easeInQuart: t=>t * t * t * t,
                easeOutQuart: t=>-((t -= 1) * t * t * t - 1),
                easeInOutQuart: t=>(t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2),
                easeInQuint: t=>t * t * t * t * t,
                easeOutQuint: t=>(t -= 1) * t * t * t * t + 1,
                easeInOutQuint: t=>(t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2),
                easeInSine: t=>1 - Math.cos(t * T),
                easeOutSine: t=>Math.sin(t * T),
                easeInOutSine: t=>-.5 * (Math.cos(R * t) - 1),
                easeInExpo: t=>0 === t ? 0 : Math.pow(2, 10 * (t - 1)),
                easeOutExpo: t=>1 === t ? 1 : 1 - Math.pow(2, -10 * t),
                easeInOutExpo: t=>J(t) ? t : t < .5 ? .5 * Math.pow(2, 10 * (2 * t - 1)) : .5 * (2 - Math.pow(2, -10 * (2 * t - 1))),
                easeInCirc: t=>t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1),
                easeOutCirc: t=>Math.sqrt(1 - (t -= 1) * t),
                easeInOutCirc: t=>(t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
                easeInElastic: t=>J(t) ? t : Q(t, .075, .3),
                easeOutElastic: t=>J(t) ? t : tt(t, .075, .3),
                easeInOutElastic(t) {
                    const e = .1125;
                    return J(t) ? t : t < .5 ? .5 * Q(2 * t, e, .45) : .5 + .5 * tt(2 * t - 1, e, .45)
                },
                easeInBack(t) {
                    const e = 1.70158;
                    return t * t * ((e + 1) * t - e)
                },
                easeOutBack(t) {
                    const e = 1.70158;
                    return (t -= 1) * t * ((e + 1) * t + e) + 1
                },
                easeInOutBack(t) {
                    let e = 1.70158;
                    return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
                },
                easeInBounce: t=>1 - et.easeOutBounce(1 - t),
                easeOutBounce(t) {
                    const e = 7.5625
                      , i = 2.75;
                    return t < 1 / i ? e * t * t : t < 2 / i ? e * (t -= 1.5 / i) * t + .75 : t < 2.5 / i ? e * (t -= 2.25 / i) * t + .9375 : e * (t -= 2.625 / i) * t + .984375
                },
                easeInOutBounce: t=>t < .5 ? .5 * et.easeInBounce(2 * t) : .5 * et.easeOutBounce(2 * t - 1) + .5
            }
              , it = {
                0: 0,
                1: 1,
                2: 2,
                3: 3,
                4: 4,
                5: 5,
                6: 6,
                7: 7,
                8: 8,
                9: 9,
                A: 10,
                B: 11,
                C: 12,
                D: 13,
                E: 14,
                F: 15,
                a: 10,
                b: 11,
                c: 12,
                d: 13,
                e: 14,
                f: 15
            }
              , at = "0123456789ABCDEF"
              , nt = t=>at[15 & t]
              , st = t=>at[(240 & t) >> 4] + at[15 & t]
              , rt = t=>(240 & t) >> 4 == (15 & t);
            function ot(t) {
                var e = function(t) {
                    return rt(t.r) && rt(t.g) && rt(t.b) && rt(t.a)
                }(t) ? nt : st;
                return t ? "#" + e(t.r) + e(t.g) + e(t.b) + (t.a < 255 ? e(t.a) : "") : t
            }
            function lt(t) {
                return t + .5 | 0
            }
            const ct = (t,e,i)=>Math.max(Math.min(t, i), e);
            function ht(t) {
                return ct(lt(2.55 * t), 0, 255)
            }
            function dt(t) {
                return ct(lt(255 * t), 0, 255)
            }
            function ft(t) {
                return ct(lt(t / 2.55) / 100, 0, 1)
            }
            function ut(t) {
                return ct(lt(100 * t), 0, 100)
            }
            const mt = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
            const pt = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
            function gt(t, e, i) {
                const a = e * Math.min(i, 1 - i)
                  , n = (e,n=(e + t / 30) % 12)=>i - a * Math.max(Math.min(n - 3, 9 - n, 1), -1);
                return [n(0), n(8), n(4)]
            }
            function bt(t, e, i) {
                const a = (a,n=(a + t / 60) % 6)=>i - i * e * Math.max(Math.min(n, 4 - n, 1), 0);
                return [a(5), a(3), a(1)]
            }
            function xt(t, e, i) {
                const a = gt(t, 1, .5);
                let n;
                for (e + i > 1 && (n = 1 / (e + i),
                e *= n,
                i *= n),
                n = 0; n < 3; n++)
                    a[n] *= 1 - e - i,
                    a[n] += e;
                return a
            }
            function yt(t) {
                const e = t.r / 255
                  , i = t.g / 255
                  , a = t.b / 255
                  , n = Math.max(e, i, a)
                  , s = Math.min(e, i, a)
                  , r = (n + s) / 2;
                let o, l, c;
                return n !== s && (c = n - s,
                l = r > .5 ? c / (2 - n - s) : c / (n + s),
                o = n === e ? (i - a) / c + (i < a ? 6 : 0) : n === i ? (a - e) / c + 2 : (e - i) / c + 4,
                o = 60 * o + .5),
                [0 | o, l || 0, r]
            }
            function kt(t, e, i, a) {
                return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, i, a)).map(dt)
            }
            function _t(t, e, i) {
                return kt(gt, t, e, i)
            }
            function wt(t) {
                return (t % 360 + 360) % 360
            }
            function vt(t) {
                const e = pt.exec(t);
                let i, a = 255;
                if (!e)
                    return;
                e[5] !== i && (a = e[6] ? ht(+e[5]) : dt(+e[5]));
                const n = wt(+e[2])
                  , s = +e[3] / 100
                  , r = +e[4] / 100;
                return i = "hwb" === e[1] ? function(t, e, i) {
                    return kt(xt, t, e, i)
                }(n, s, r) : "hsv" === e[1] ? function(t, e, i) {
                    return kt(bt, t, e, i)
                }(n, s, r) : _t(n, s, r),
                {
                    r: i[0],
                    g: i[1],
                    b: i[2],
                    a
                }
            }
            const Ot = {
                x: "dark",
                Z: "light",
                Y: "re",
                X: "blu",
                W: "gr",
                V: "medium",
                U: "slate",
                A: "ee",
                T: "ol",
                S: "or",
                B: "ra",
                C: "lateg",
                D: "ights",
                R: "in",
                Q: "turquois",
                E: "hi",
                P: "ro",
                O: "al",
                N: "le",
                M: "de",
                L: "yello",
                F: "en",
                K: "ch",
                G: "arks",
                H: "ea",
                I: "ightg",
                J: "wh"
            }
              , Mt = {
                OiceXe: "f0f8ff",
                antiquewEte: "faebd7",
                aqua: "ffff",
                aquamarRe: "7fffd4",
                azuY: "f0ffff",
                beige: "f5f5dc",
                bisque: "ffe4c4",
                black: "0",
                blanKedOmond: "ffebcd",
                Xe: "ff",
                XeviTet: "8a2be2",
                bPwn: "a52a2a",
                burlywood: "deb887",
                caMtXe: "5f9ea0",
                KartYuse: "7fff00",
                KocTate: "d2691e",
                cSO: "ff7f50",
                cSnflowerXe: "6495ed",
                cSnsilk: "fff8dc",
                crimson: "dc143c",
                cyan: "ffff",
                xXe: "8b",
                xcyan: "8b8b",
                xgTMnPd: "b8860b",
                xWay: "a9a9a9",
                xgYF: "6400",
                xgYy: "a9a9a9",
                xkhaki: "bdb76b",
                xmagFta: "8b008b",
                xTivegYF: "556b2f",
                xSange: "ff8c00",
                xScEd: "9932cc",
                xYd: "8b0000",
                xsOmon: "e9967a",
                xsHgYF: "8fbc8f",
                xUXe: "483d8b",
                xUWay: "2f4f4f",
                xUgYy: "2f4f4f",
                xQe: "ced1",
                xviTet: "9400d3",
                dAppRk: "ff1493",
                dApskyXe: "bfff",
                dimWay: "696969",
                dimgYy: "696969",
                dodgerXe: "1e90ff",
                fiYbrick: "b22222",
                flSOwEte: "fffaf0",
                foYstWAn: "228b22",
                fuKsia: "ff00ff",
                gaRsbSo: "dcdcdc",
                ghostwEte: "f8f8ff",
                gTd: "ffd700",
                gTMnPd: "daa520",
                Way: "808080",
                gYF: "8000",
                gYFLw: "adff2f",
                gYy: "808080",
                honeyMw: "f0fff0",
                hotpRk: "ff69b4",
                RdianYd: "cd5c5c",
                Rdigo: "4b0082",
                ivSy: "fffff0",
                khaki: "f0e68c",
                lavFMr: "e6e6fa",
                lavFMrXsh: "fff0f5",
                lawngYF: "7cfc00",
                NmoncEffon: "fffacd",
                ZXe: "add8e6",
                ZcSO: "f08080",
                Zcyan: "e0ffff",
                ZgTMnPdLw: "fafad2",
                ZWay: "d3d3d3",
                ZgYF: "90ee90",
                ZgYy: "d3d3d3",
                ZpRk: "ffb6c1",
                ZsOmon: "ffa07a",
                ZsHgYF: "20b2aa",
                ZskyXe: "87cefa",
                ZUWay: "778899",
                ZUgYy: "778899",
                ZstAlXe: "b0c4de",
                ZLw: "ffffe0",
                lime: "ff00",
                limegYF: "32cd32",
                lRF: "faf0e6",
                magFta: "ff00ff",
                maPon: "800000",
                VaquamarRe: "66cdaa",
                VXe: "cd",
                VScEd: "ba55d3",
                VpurpN: "9370db",
                VsHgYF: "3cb371",
                VUXe: "7b68ee",
                VsprRggYF: "fa9a",
                VQe: "48d1cc",
                VviTetYd: "c71585",
                midnightXe: "191970",
                mRtcYam: "f5fffa",
                mistyPse: "ffe4e1",
                moccasR: "ffe4b5",
                navajowEte: "ffdead",
                navy: "80",
                Tdlace: "fdf5e6",
                Tive: "808000",
                TivedBb: "6b8e23",
                Sange: "ffa500",
                SangeYd: "ff4500",
                ScEd: "da70d6",
                pOegTMnPd: "eee8aa",
                pOegYF: "98fb98",
                pOeQe: "afeeee",
                pOeviTetYd: "db7093",
                papayawEp: "ffefd5",
                pHKpuff: "ffdab9",
                peru: "cd853f",
                pRk: "ffc0cb",
                plum: "dda0dd",
                powMrXe: "b0e0e6",
                purpN: "800080",
                YbeccapurpN: "663399",
                Yd: "ff0000",
                Psybrown: "bc8f8f",
                PyOXe: "4169e1",
                saddNbPwn: "8b4513",
                sOmon: "fa8072",
                sandybPwn: "f4a460",
                sHgYF: "2e8b57",
                sHshell: "fff5ee",
                siFna: "a0522d",
                silver: "c0c0c0",
                skyXe: "87ceeb",
                UXe: "6a5acd",
                UWay: "708090",
                UgYy: "708090",
                snow: "fffafa",
                sprRggYF: "ff7f",
                stAlXe: "4682b4",
                tan: "d2b48c",
                teO: "8080",
                tEstN: "d8bfd8",
                tomato: "ff6347",
                Qe: "40e0d0",
                viTet: "ee82ee",
                JHt: "f5deb3",
                wEte: "ffffff",
                wEtesmoke: "f5f5f5",
                Lw: "ffff00",
                LwgYF: "9acd32"
            };
            let St;
            function Dt(t) {
                St || (St = function() {
                    const t = {}
                      , e = Object.keys(Mt)
                      , i = Object.keys(Ot);
                    let a, n, s, r, o;
                    for (a = 0; a < e.length; a++) {
                        for (r = o = e[a],
                        n = 0; n < i.length; n++)
                            s = i[n],
                            o = o.replace(s, Ot[s]);
                        s = parseInt(Mt[r], 16),
                        t[o] = [s >> 16 & 255, s >> 8 & 255, 255 & s]
                    }
                    return t
                }(),
                St.transparent = [0, 0, 0, 0]);
                const e = St[t.toLowerCase()];
                return e && {
                    r: e[0],
                    g: e[1],
                    b: e[2],
                    a: 4 === e.length ? e[3] : 255
                }
            }
            function It(t, e, i) {
                if (t) {
                    let a = yt(t);
                    a[e] = Math.max(0, Math.min(a[e] + a[e] * i, 0 === e ? 360 : 1)),
                    a = _t(a),
                    t.r = a[0],
                    t.g = a[1],
                    t.b = a[2]
                }
            }
            function Rt(t, e) {
                return t ? Object.assign(e || {}, t) : t
            }
            function Lt(t) {
                var e = {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 255
                };
                return Array.isArray(t) ? t.length >= 3 && (e = {
                    r: t[0],
                    g: t[1],
                    b: t[2],
                    a: 255
                },
                t.length > 3 && (e.a = dt(t[3]))) : (e = Rt(t, {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 1
                })).a = dt(e.a),
                e
            }
            function Pt(t) {
                return "r" === t.charAt(0) ? function(t) {
                    const e = mt.exec(t);
                    let i, a, n, s = 255;
                    if (e) {
                        if (e[7] !== i) {
                            const t = +e[7];
                            s = 255 & (e[8] ? ht(t) : 255 * t)
                        }
                        return i = +e[1],
                        a = +e[3],
                        n = +e[5],
                        i = 255 & (e[2] ? ht(i) : i),
                        a = 255 & (e[4] ? ht(a) : a),
                        n = 255 & (e[6] ? ht(n) : n),
                        {
                            r: i,
                            g: a,
                            b: n,
                            a: s
                        }
                    }
                }(t) : vt(t)
            }
            class Ct {
                constructor(t) {
                    if (t instanceof Ct)
                        return t;
                    const e = typeof t;
                    let i;
                    var a, n, s;
                    "object" === e ? i = Lt(t) : "string" === e && (s = (a = t).length,
                    "#" === a[0] && (4 === s || 5 === s ? n = {
                        r: 255 & 17 * it[a[1]],
                        g: 255 & 17 * it[a[2]],
                        b: 255 & 17 * it[a[3]],
                        a: 5 === s ? 17 * it[a[4]] : 255
                    } : 7 !== s && 9 !== s || (n = {
                        r: it[a[1]] << 4 | it[a[2]],
                        g: it[a[3]] << 4 | it[a[4]],
                        b: it[a[5]] << 4 | it[a[6]],
                        a: 9 === s ? it[a[7]] << 4 | it[a[8]] : 255
                    })),
                    i = n || Dt(t) || Pt(t)),
                    this._rgb = i,
                    this._valid = !!i
                }
                get valid() {
                    return this._valid
                }
                get rgb() {
                    var t = Rt(this._rgb);
                    return t && (t.a = ft(t.a)),
                    t
                }
                set rgb(t) {
                    this._rgb = Lt(t)
                }
                rgbString() {
                    return this._valid ? (t = this._rgb) && (t.a < 255 ? `rgba(${t.r}, ${t.g}, ${t.b}, ${ft(t.a)})` : `rgb(${t.r}, ${t.g}, ${t.b})`) : this._rgb;
                    var t
                }
                hexString() {
                    return this._valid ? ot(this._rgb) : this._rgb
                }
                hslString() {
                    return this._valid ? function(t) {
                        if (!t)
                            return;
                        const e = yt(t)
                          , i = e[0]
                          , a = ut(e[1])
                          , n = ut(e[2]);
                        return t.a < 255 ? `hsla(${i}, ${a}%, ${n}%, ${ft(t.a)})` : `hsl(${i}, ${a}%, ${n}%)`
                    }(this._rgb) : this._rgb
                }
                mix(t, e) {
                    const i = this;
                    if (t) {
                        const a = i.rgb
                          , n = t.rgb;
                        let s;
                        const r = e === s ? .5 : e
                          , o = 2 * r - 1
                          , l = a.a - n.a
                          , c = ((o * l == -1 ? o : (o + l) / (1 + o * l)) + 1) / 2;
                        s = 1 - c,
                        a.r = 255 & c * a.r + s * n.r + .5,
                        a.g = 255 & c * a.g + s * n.g + .5,
                        a.b = 255 & c * a.b + s * n.b + .5,
                        a.a = r * a.a + (1 - r) * n.a,
                        i.rgb = a
                    }
                    return i
                }
                clone() {
                    return new Ct(this.rgb)
                }
                alpha(t) {
                    return this._rgb.a = dt(t),
                    this
                }
                clearer(t) {
                    return this._rgb.a *= 1 - t,
                    this
                }
                greyscale() {
                    const t = this._rgb
                      , e = lt(.3 * t.r + .59 * t.g + .11 * t.b);
                    return t.r = t.g = t.b = e,
                    this
                }
                opaquer(t) {
                    return this._rgb.a *= 1 + t,
                    this
                }
                negate() {
                    const t = this._rgb;
                    return t.r = 255 - t.r,
                    t.g = 255 - t.g,
                    t.b = 255 - t.b,
                    this
                }
                lighten(t) {
                    return It(this._rgb, 2, t),
                    this
                }
                darken(t) {
                    return It(this._rgb, 2, -t),
                    this
                }
                saturate(t) {
                    return It(this._rgb, 1, t),
                    this
                }
                desaturate(t) {
                    return It(this._rgb, 1, -t),
                    this
                }
                rotate(t) {
                    return function(t, e) {
                        var i = yt(t);
                        i[0] = wt(i[0] + e),
                        i = _t(i),
                        t.r = i[0],
                        t.g = i[1],
                        t.b = i[2]
                    }(this._rgb, t),
                    this
                }
            }
            function At(t) {
                return new Ct(t)
            }
            const Tt = t=>t instanceof CanvasGradient || t instanceof CanvasPattern;
            function Et(t) {
                return Tt(t) ? t : At(t)
            }
            function zt(t) {
                return Tt(t) ? t : At(t).saturate(.5).darken(.1).hexString()
            }
            const Bt = Object.create(null)
              , Xt = Object.create(null);
            function Yt(t, e) {
                if (!e)
                    return t;
                const i = e.split(".");
                for (let e = 0, a = i.length; e < a; ++e) {
                    const a = i[e];
                    t = t[a] || (t[a] = Object.create(null))
                }
                return t
            }
            function Ft(t, e, i) {
                return "string" == typeof e ? y(Yt(t, e), i) : y(Yt(t, ""), e)
            }
            var jt = new class {
                constructor(t) {
                    this.animation = void 0,
                    this.backgroundColor = "rgba(0,0,0,0.1)",
                    this.borderColor = "rgba(0,0,0,0.1)",
                    this.color = "#666",
                    this.datasets = {},
                    this.devicePixelRatio = t=>t.chart.platform.getDevicePixelRatio(),
                    this.elements = {},
                    this.events = ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
                    this.font = {
                        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                        size: 12,
                        style: "normal",
                        lineHeight: 1.2,
                        weight: null
                    },
                    this.hover = {},
                    this.hoverBackgroundColor = (t,e)=>zt(e.backgroundColor),
                    this.hoverBorderColor = (t,e)=>zt(e.borderColor),
                    this.hoverColor = (t,e)=>zt(e.color),
                    this.indexAxis = "x",
                    this.interaction = {
                        mode: "nearest",
                        intersect: !0
                    },
                    this.maintainAspectRatio = !0,
                    this.onHover = null,
                    this.onClick = null,
                    this.parsing = !0,
                    this.plugins = {},
                    this.responsive = !0,
                    this.scale = void 0,
                    this.scales = {},
                    this.showLine = !0,
                    this.describe(t)
                }
                set(t, e) {
                    return Ft(this, t, e)
                }
                get(t) {
                    return Yt(this, t)
                }
                describe(t, e) {
                    return Ft(Xt, t, e)
                }
                override(t, e) {
                    return Ft(Bt, t, e)
                }
                route(t, e, i, a) {
                    const n = Yt(this, t)
                      , s = Yt(this, i)
                      , r = "_" + e;
                    Object.defineProperties(n, {
                        [r]: {
                            value: n[e],
                            writable: !0
                        },
                        [e]: {
                            enumerable: !0,
                            get() {
                                const t = this[r]
                                  , e = s[a];
                                return l(t) ? Object.assign({}, e, t) : d(t, e)
                            },
                            set(t) {
                                this[r] = t
                            }
                        }
                    })
                }
            }
            ({
                _scriptable: t=>!t.startsWith("on"),
                _indexable: t=>"events" !== t,
                hover: {
                    _fallback: "interaction"
                },
                interaction: {
                    _scriptable: !1,
                    _indexable: !1
                }
            });
            function Nt(t, e, i, a, n) {
                let s = e[n];
                return s || (s = e[n] = t.measureText(n).width,
                i.push(n)),
                s > a && (a = s),
                a
            }
            function Zt(t, e, i, a) {
                let n = (a = a || {}).data = a.data || {}
                  , s = a.garbageCollect = a.garbageCollect || [];
                a.font !== e && (n = a.data = {},
                s = a.garbageCollect = [],
                a.font = e),
                t.save(),
                t.font = e;
                let r = 0;
                const l = i.length;
                let c, h, d, f, u;
                for (c = 0; c < l; c++)
                    if (f = i[c],
                    null != f && !0 !== o(f))
                        r = Nt(t, n, s, r, f);
                    else if (o(f))
                        for (h = 0,
                        d = f.length; h < d; h++)
                            u = f[h],
                            null == u || o(u) || (r = Nt(t, n, s, r, u));
                t.restore();
                const m = s.length / 2;
                if (m > i.length) {
                    for (c = 0; c < m; c++)
                        delete n[s[c]];
                    s.splice(0, m)
                }
                return r
            }
            function Vt(t, e, i) {
                const a = t.currentDevicePixelRatio
                  , n = 0 !== i ? Math.max(i / 2, .5) : 0;
                return Math.round((e - n) * a) / a + n
            }
            function Wt(t, e) {
                (e = e || t.getContext("2d")).save(),
                e.resetTransform(),
                e.clearRect(0, 0, t.width, t.height),
                e.restore()
            }
            function Ut(t, e, i, a) {
                let n, s, r, o, l;
                const c = e.pointStyle
                  , h = e.rotation
                  , d = e.radius;
                let f = (h || 0) * A;
                if (c && "object" == typeof c && (n = c.toString(),
                "[object HTMLImageElement]" === n || "[object HTMLCanvasElement]" === n))
                    return t.save(),
                    t.translate(i, a),
                    t.rotate(f),
                    t.drawImage(c, -c.width / 2, -c.height / 2, c.width, c.height),
                    void t.restore();
                if (!(isNaN(d) || d <= 0)) {
                    switch (t.beginPath(),
                    c) {
                    default:
                        t.arc(i, a, d, 0, L),
                        t.closePath();
                        break;
                    case "triangle":
                        t.moveTo(i + Math.sin(f) * d, a - Math.cos(f) * d),
                        f += z,
                        t.lineTo(i + Math.sin(f) * d, a - Math.cos(f) * d),
                        f += z,
                        t.lineTo(i + Math.sin(f) * d, a - Math.cos(f) * d),
                        t.closePath();
                        break;
                    case "rectRounded":
                        l = .516 * d,
                        o = d - l,
                        s = Math.cos(f + E) * o,
                        r = Math.sin(f + E) * o,
                        t.arc(i - s, a - r, l, f - R, f - T),
                        t.arc(i + r, a - s, l, f - T, f),
                        t.arc(i + s, a + r, l, f, f + T),
                        t.arc(i - r, a + s, l, f + T, f + R),
                        t.closePath();
                        break;
                    case "rect":
                        if (!h) {
                            o = Math.SQRT1_2 * d,
                            t.rect(i - o, a - o, 2 * o, 2 * o);
                            break
                        }
                        f += E;
                    case "rectRot":
                        s = Math.cos(f) * d,
                        r = Math.sin(f) * d,
                        t.moveTo(i - s, a - r),
                        t.lineTo(i + r, a - s),
                        t.lineTo(i + s, a + r),
                        t.lineTo(i - r, a + s),
                        t.closePath();
                        break;
                    case "crossRot":
                        f += E;
                    case "cross":
                        s = Math.cos(f) * d,
                        r = Math.sin(f) * d,
                        t.moveTo(i - s, a - r),
                        t.lineTo(i + s, a + r),
                        t.moveTo(i + r, a - s),
                        t.lineTo(i - r, a + s);
                        break;
                    case "star":
                        s = Math.cos(f) * d,
                        r = Math.sin(f) * d,
                        t.moveTo(i - s, a - r),
                        t.lineTo(i + s, a + r),
                        t.moveTo(i + r, a - s),
                        t.lineTo(i - r, a + s),
                        f += E,
                        s = Math.cos(f) * d,
                        r = Math.sin(f) * d,
                        t.moveTo(i - s, a - r),
                        t.lineTo(i + s, a + r),
                        t.moveTo(i + r, a - s),
                        t.lineTo(i - r, a + s);
                        break;
                    case "line":
                        s = Math.cos(f) * d,
                        r = Math.sin(f) * d,
                        t.moveTo(i - s, a - r),
                        t.lineTo(i + s, a + r);
                        break;
                    case "dash":
                        t.moveTo(i, a),
                        t.lineTo(i + Math.cos(f) * d, a + Math.sin(f) * d)
                    }
                    t.fill(),
                    e.borderWidth > 0 && t.stroke()
                }
            }
            function Ht(t, e, i) {
                return i = i || .5,
                !e || t && t.x > e.left - i && t.x < e.right + i && t.y > e.top - i && t.y < e.bottom + i
            }
            function $t(t, e) {
                t.save(),
                t.beginPath(),
                t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
                t.clip()
            }
            function qt(t) {
                t.restore()
            }
            function Kt(t, e, i, a, n) {
                if (!e)
                    return t.lineTo(i.x, i.y);
                if ("middle" === n) {
                    const a = (e.x + i.x) / 2;
                    t.lineTo(a, e.y),
                    t.lineTo(a, i.y)
                } else
                    "after" === n != !!a ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y);
                t.lineTo(i.x, i.y)
            }
            function Gt(t, e, i, a) {
                if (!e)
                    return t.lineTo(i.x, i.y);
                t.bezierCurveTo(a ? e.cp1x : e.cp2x, a ? e.cp1y : e.cp2y, a ? i.cp2x : i.cp1x, a ? i.cp2y : i.cp1y, i.x, i.y)
            }
            function Jt(t, e, i, a, n, s={}) {
                const l = o(e) ? e : [e]
                  , c = s.strokeWidth > 0 && "" !== s.strokeColor;
                let h, d;
                for (t.save(),
                t.font = n.string,
                function(t, e) {
                    e.translation && t.translate(e.translation[0], e.translation[1]);
                    r(e.rotation) || t.rotate(e.rotation);
                    e.color && (t.fillStyle = e.color);
                    e.textAlign && (t.textAlign = e.textAlign);
                    e.textBaseline && (t.textBaseline = e.textBaseline)
                }(t, s),
                h = 0; h < l.length; ++h)
                    d = l[h],
                    c && (s.strokeColor && (t.strokeStyle = s.strokeColor),
                    r(s.strokeWidth) || (t.lineWidth = s.strokeWidth),
                    t.strokeText(d, i, a, s.maxWidth)),
                    t.fillText(d, i, a, s.maxWidth),
                    Qt(t, i, a, d, s),
                    a += n.lineHeight;
                t.restore()
            }
            function Qt(t, e, i, a, n) {
                if (n.strikethrough || n.underline) {
                    const s = t.measureText(a)
                      , r = e - s.actualBoundingBoxLeft
                      , o = e + s.actualBoundingBoxRight
                      , l = i - s.actualBoundingBoxAscent
                      , c = i + s.actualBoundingBoxDescent
                      , h = n.strikethrough ? (l + c) / 2 : c;
                    t.strokeStyle = t.fillStyle,
                    t.beginPath(),
                    t.lineWidth = n.decorationWidth || 2,
                    t.moveTo(r, h),
                    t.lineTo(o, h),
                    t.stroke()
                }
            }
            function te(t, e) {
                const {x: i, y: a, w: n, h: s, radius: r} = e;
                t.arc(i + r.topLeft, a + r.topLeft, r.topLeft, -T, R, !0),
                t.lineTo(i, a + s - r.bottomLeft),
                t.arc(i + r.bottomLeft, a + s - r.bottomLeft, r.bottomLeft, R, T, !0),
                t.lineTo(i + n - r.bottomRight, a + s),
                t.arc(i + n - r.bottomRight, a + s - r.bottomRight, r.bottomRight, T, 0, !0),
                t.lineTo(i + n, a + r.topRight),
                t.arc(i + n - r.topRight, a + r.topRight, r.topRight, 0, -T, !0),
                t.lineTo(i + r.topLeft, a)
            }
            const ee = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/)
              , ie = new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);
            function ae(t, e) {
                const i = ("" + t).match(ee);
                if (!i || "normal" === i[1])
                    return 1.2 * e;
                switch (t = +i[2],
                i[3]) {
                case "px":
                    return t;
                case "%":
                    t /= 100
                }
                return e * t
            }
            const ne = t=>+t || 0;
            function se(t, e) {
                const i = {}
                  , a = l(e)
                  , n = a ? Object.keys(e) : e
                  , s = l(t) ? a ? i=>d(t[i], t[e[i]]) : e=>t[e] : ()=>t;
                for (const t of n)
                    i[t] = ne(s(t));
                return i
            }
            function re(t) {
                return se(t, {
                    top: "y",
                    right: "x",
                    bottom: "y",
                    left: "x"
                })
            }
            function oe(t) {
                return se(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"])
            }
            function le(t) {
                const e = re(t);
                return e.width = e.left + e.right,
                e.height = e.top + e.bottom,
                e
            }
            function ce(t, e) {
                t = t || {},
                e = e || jt.font;
                let i = d(t.size, e.size);
                "string" == typeof i && (i = parseInt(i, 10));
                let a = d(t.style, e.style);
                a && !("" + a).match(ie) && (console.warn('Invalid font style specified: "' + a + '"'),
                a = "");
                const n = {
                    family: d(t.family, e.family),
                    lineHeight: ae(d(t.lineHeight, e.lineHeight), i),
                    size: i,
                    style: a,
                    weight: d(t.weight, e.weight),
                    string: ""
                };
                return n.string = function(t) {
                    return !t || r(t.size) || r(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family
                }(n),
                n
            }
            function he(t, e, i, a) {
                let n, s, r, l = !0;
                for (n = 0,
                s = t.length; n < s; ++n)
                    if (r = t[n],
                    void 0 !== r && (void 0 !== e && "function" == typeof r && (r = r(e),
                    l = !1),
                    void 0 !== i && o(r) && (r = r[i % r.length],
                    l = !1),
                    void 0 !== r))
                        return a && !l && (a.cacheable = !1),
                        r
            }
            function de(t, e) {
                return Object.assign(Object.create(t), e)
            }
            function fe(t, e, i) {
                i = i || (i=>t[i] < e);
                let a, n = t.length - 1, s = 0;
                for (; n - s > 1; )
                    a = s + n >> 1,
                    i(a) ? s = a : n = a;
                return {
                    lo: s,
                    hi: n
                }
            }
            const ue = (t,e,i)=>fe(t, i, (a=>t[a][e] < i))
              , me = (t,e,i)=>fe(t, i, (a=>t[a][e] >= i));
            const pe = ["push", "pop", "shift", "splice", "unshift"];
            function ge(t, e) {
                const i = t._chartjs;
                if (!i)
                    return;
                const a = i.listeners
                  , n = a.indexOf(e);
                -1 !== n && a.splice(n, 1),
                a.length > 0 || (pe.forEach((e=>{
                    delete t[e]
                }
                )),
                delete t._chartjs)
            }
            function be(t) {
                const e = new Set;
                let i, a;
                for (i = 0,
                a = t.length; i < a; ++i)
                    e.add(t[i]);
                return e.size === a ? t : Array.from(e)
            }
            function xe(t, e=[""], i=t, a, n=(()=>t[0])) {
                S(a) || (a = Re("_fallback", t));
                const s = {
                    [Symbol.toStringTag]: "Object",
                    _cacheable: !0,
                    _scopes: t,
                    _rootScopes: i,
                    _fallback: a,
                    _getTarget: n,
                    override: n=>xe([n, ...t], e, i, a)
                };
                return new Proxy(s,{
                    deleteProperty: (e,i)=>(delete e[i],
                    delete e._keys,
                    delete t[0][i],
                    !0),
                    get: (i,a)=>ve(i, a, (()=>function(t, e, i, a) {
                        let n;
                        for (const s of e)
                            if (n = Re(_e(s, t), i),
                            S(n))
                                return we(t, n) ? De(i, a, t, n) : n
                    }(a, e, t, i))),
                    getOwnPropertyDescriptor: (t,e)=>Reflect.getOwnPropertyDescriptor(t._scopes[0], e),
                    getPrototypeOf: ()=>Reflect.getPrototypeOf(t[0]),
                    has: (t,e)=>Le(t).includes(e),
                    ownKeys: t=>Le(t),
                    set(t, e, i) {
                        const a = t._storage || (t._storage = n());
                        return t[e] = a[e] = i,
                        delete t._keys,
                        !0
                    }
                })
            }
            function ye(t, e, i, a) {
                const n = {
                    _cacheable: !1,
                    _proxy: t,
                    _context: e,
                    _subProxy: i,
                    _stack: new Set,
                    _descriptors: ke(t, a),
                    setContext: e=>ye(t, e, i, a),
                    override: n=>ye(t.override(n), e, i, a)
                };
                return new Proxy(n,{
                    deleteProperty: (e,i)=>(delete e[i],
                    delete t[i],
                    !0),
                    get: (t,e,i)=>ve(t, e, (()=>function(t, e, i) {
                        const {_proxy: a, _context: n, _subProxy: s, _descriptors: r} = t;
                        let c = a[e];
                        D(c) && r.isScriptable(e) && (c = function(t, e, i, a) {
                            const {_proxy: n, _context: s, _subProxy: r, _stack: o} = i;
                            if (o.has(t))
                                throw new Error("Recursion detected: " + Array.from(o).join("->") + "->" + t);
                            o.add(t),
                            e = e(s, r || a),
                            o.delete(t),
                            we(t, e) && (e = De(n._scopes, n, t, e));
                            return e
                        }(e, c, t, i));
                        o(c) && c.length && (c = function(t, e, i, a) {
                            const {_proxy: n, _context: s, _subProxy: r, _descriptors: o} = i;
                            if (S(s.index) && a(t))
                                e = e[s.index % e.length];
                            else if (l(e[0])) {
                                const i = e
                                  , a = n._scopes.filter((t=>t !== i));
                                e = [];
                                for (const l of i) {
                                    const i = De(a, n, t, l);
                                    e.push(ye(i, s, r && r[t], o))
                                }
                            }
                            return e
                        }(e, c, t, r.isIndexable));
                        we(e, c) && (c = ye(c, n, s && s[e], r));
                        return c
                    }(t, e, i))),
                    getOwnPropertyDescriptor: (e,i)=>e._descriptors.allKeys ? Reflect.has(t, i) ? {
                        enumerable: !0,
                        configurable: !0
                    } : void 0 : Reflect.getOwnPropertyDescriptor(t, i),
                    getPrototypeOf: ()=>Reflect.getPrototypeOf(t),
                    has: (e,i)=>Reflect.has(t, i),
                    ownKeys: ()=>Reflect.ownKeys(t),
                    set: (e,i,a)=>(t[i] = a,
                    delete e[i],
                    !0)
                })
            }
            function ke(t, e={
                scriptable: !0,
                indexable: !0
            }) {
                const {_scriptable: i=e.scriptable, _indexable: a=e.indexable, _allKeys: n=e.allKeys} = t;
                return {
                    allKeys: n,
                    scriptable: i,
                    indexable: a,
                    isScriptable: D(i) ? i : ()=>i,
                    isIndexable: D(a) ? a : ()=>a
                }
            }
            const _e = (t,e)=>t ? t + M(e) : e
              , we = (t,e)=>l(e) && "adapters" !== t && (null === Object.getPrototypeOf(e) || e.constructor === Object);
            function ve(t, e, i) {
                if (Object.prototype.hasOwnProperty.call(t, e))
                    return t[e];
                const a = i();
                return t[e] = a,
                a
            }
            function Oe(t, e, i) {
                return D(t) ? t(e, i) : t
            }
            const Me = (t,e)=>!0 === t ? e : "string" == typeof t ? O(e, t) : void 0;
            function Se(t, e, i, a) {
                for (const n of e) {
                    const e = Me(i, n);
                    if (e) {
                        t.add(e);
                        const n = Oe(e._fallback, i, e);
                        if (S(n) && n !== i && n !== a)
                            return n
                    } else if (!1 === e && S(a) && i !== a)
                        return null
                }
                return !1
            }
            function De(t, e, i, a) {
                const n = e._rootScopes
                  , s = Oe(e._fallback, i, a)
                  , r = [...t, ...n]
                  , c = new Set;
                c.add(a);
                let h = Ie(c, r, i, s || i);
                return null !== h && ((!S(s) || s === i || (h = Ie(c, r, s, h),
                null !== h)) && xe(Array.from(c), [""], n, s, (()=>function(t, e, i) {
                    const a = t._getTarget();
                    e in a || (a[e] = {});
                    const n = a[e];
                    if (o(n) && l(i))
                        return i;
                    return n
                }(e, i, a))))
            }
            function Ie(t, e, i, a) {
                for (; i; )
                    i = Se(t, e, i, a);
                return i
            }
            function Re(t, e) {
                for (const i of e) {
                    if (!i)
                        continue;
                    const e = i[t];
                    if (S(e))
                        return e
                }
            }
            function Le(t) {
                let e = t._keys;
                return e || (e = t._keys = function(t) {
                    const e = new Set;
                    for (const i of t)
                        for (const t of Object.keys(i).filter((t=>!t.startsWith("_"))))
                            e.add(t);
                    return Array.from(e)
                }(t._scopes)),
                e
            }
            const Pe = Number.EPSILON || 1e-14
              , Ce = (t,e)=>e < t.length && !t[e].skip && t[e]
              , Ae = t=>"x" === t ? "y" : "x";
            function Te(t, e, i, a) {
                const n = t.skip ? e : t
                  , s = e
                  , r = i.skip ? e : i
                  , o = U(s, n)
                  , l = U(r, s);
                let c = o / (o + l)
                  , h = l / (o + l);
                c = isNaN(c) ? 0 : c,
                h = isNaN(h) ? 0 : h;
                const d = a * c
                  , f = a * h;
                return {
                    previous: {
                        x: s.x - d * (r.x - n.x),
                        y: s.y - d * (r.y - n.y)
                    },
                    next: {
                        x: s.x + f * (r.x - n.x),
                        y: s.y + f * (r.y - n.y)
                    }
                }
            }
            function Ee(t, e="x") {
                const i = Ae(e)
                  , a = t.length
                  , n = Array(a).fill(0)
                  , s = Array(a);
                let r, o, l, c = Ce(t, 0);
                for (r = 0; r < a; ++r)
                    if (o = l,
                    l = c,
                    c = Ce(t, r + 1),
                    l) {
                        if (c) {
                            const t = c[e] - l[e];
                            n[r] = 0 !== t ? (c[i] - l[i]) / t : 0
                        }
                        s[r] = o ? c ? X(n[r - 1]) !== X(n[r]) ? 0 : (n[r - 1] + n[r]) / 2 : n[r - 1] : n[r]
                    }
                !function(t, e, i) {
                    const a = t.length;
                    let n, s, r, o, l, c = Ce(t, 0);
                    for (let h = 0; h < a - 1; ++h)
                        l = c,
                        c = Ce(t, h + 1),
                        l && c && (j(e[h], 0, Pe) ? i[h] = i[h + 1] = 0 : (n = i[h] / e[h],
                        s = i[h + 1] / e[h],
                        o = Math.pow(n, 2) + Math.pow(s, 2),
                        o <= 9 || (r = 3 / Math.sqrt(o),
                        i[h] = n * r * e[h],
                        i[h + 1] = s * r * e[h])))
                }(t, n, s),
                function(t, e, i="x") {
                    const a = Ae(i)
                      , n = t.length;
                    let s, r, o, l = Ce(t, 0);
                    for (let c = 0; c < n; ++c) {
                        if (r = o,
                        o = l,
                        l = Ce(t, c + 1),
                        !o)
                            continue;
                        const n = o[i]
                          , h = o[a];
                        r && (s = (n - r[i]) / 3,
                        o[`cp1 ${i}`] = n - s,
                        o[`cp1 ${a}`] = h - s * e[c]),
                        l && (s = (l[i] - n) / 3,
                        o[`cp2 ${i}`] = n + s,
                        o[`cp2 ${a}`] = h + s * e[c])
                    }
                }(t, s, e)
            }
            function ze(t, e, i) {
                return Math.max(Math.min(t, i), e)
            }
            function Be(t, e, i, a, n) {
                let s, r, o, l;
                if (e.spanGaps && (t = t.filter((t=>!t.skip))),
                "monotone" === e.cubicInterpolationMode)
                    Ee(t, n);
                else {
                    let i = a ? t[t.length - 1] : t[0];
                    for (s = 0,
                    r = t.length; s < r; ++s)
                        o = t[s],
                        l = Te(i, o, t[Math.min(s + 1, r - (a ? 0 : 1)) % r], e.tension),
                        o.cp1x = l.previous.x,
                        o.cp1y = l.previous.y,
                        o.cp2x = l.next.x,
                        o.cp2y = l.next.y,
                        i = o
                }
                e.capBezierPoints && function(t, e) {
                    let i, a, n, s, r, o = Ht(t[0], e);
                    for (i = 0,
                    a = t.length; i < a; ++i)
                        r = s,
                        s = o,
                        o = i < a - 1 && Ht(t[i + 1], e),
                        s && (n = t[i],
                        r && (n.cp1x = ze(n.cp1x, e.left, e.right),
                        n.cp1y = ze(n.cp1y, e.top, e.bottom)),
                        o && (n.cp2x = ze(n.cp2x, e.left, e.right),
                        n.cp2y = ze(n.cp2y, e.top, e.bottom)))
                }(t, i)
            }
            function Xe() {
                return "undefined" != typeof window && "undefined" != typeof document
            }
            function Ye(t) {
                let e = t.parentNode;
                return e && "[object ShadowRoot]" === e.toString() && (e = e.host),
                e
            }
            function Fe(t, e, i) {
                let a;
                return "string" == typeof t ? (a = parseInt(t, 10),
                -1 !== t.indexOf("%") && (a = a / 100 * e.parentNode[i])) : a = t,
                a
            }
            const je = t=>window.getComputedStyle(t, null);
            const Ne = ["top", "right", "bottom", "left"];
            function Ze(t, e, i) {
                const a = {};
                i = i ? "-" + i : "";
                for (let n = 0; n < 4; n++) {
                    const s = Ne[n];
                    a[s] = parseFloat(t[e + "-" + s + i]) || 0
                }
                return a.width = a.left + a.right,
                a.height = a.top + a.bottom,
                a
            }
            const Ve = (t,e,i)=>(t > 0 || e > 0) && (!i || !i.shadowRoot);
            function We(t, e) {
                const {canvas: i, currentDevicePixelRatio: a} = e
                  , n = je(i)
                  , s = "border-box" === n.boxSizing
                  , r = Ze(n, "padding")
                  , o = Ze(n, "border", "width")
                  , {x: l, y: c, box: h} = function(t, e) {
                    const i = t.native || t
                      , a = i.touches
                      , n = a && a.length ? a[0] : i
                      , {offsetX: s, offsetY: r} = n;
                    let o, l, c = !1;
                    if (Ve(s, r, i.target))
                        o = s,
                        l = r;
                    else {
                        const t = e.getBoundingClientRect();
                        o = n.clientX - t.left,
                        l = n.clientY - t.top,
                        c = !0
                    }
                    return {
                        x: o,
                        y: l,
                        box: c
                    }
                }(t, i)
                  , d = r.left + (h && o.left)
                  , f = r.top + (h && o.top);
                let {width: u, height: m} = e;
                return s && (u -= r.width + o.width,
                m -= r.height + o.height),
                {
                    x: Math.round((l - d) / u * i.width / a),
                    y: Math.round((c - f) / m * i.height / a)
                }
            }
            const Ue = t=>Math.round(10 * t) / 10;
            function He(t, e, i, a) {
                const n = je(t)
                  , s = Ze(n, "margin")
                  , r = Fe(n.maxWidth, t, "clientWidth") || C
                  , o = Fe(n.maxHeight, t, "clientHeight") || C
                  , l = function(t, e, i) {
                    let a, n;
                    if (void 0 === e || void 0 === i) {
                        const s = Ye(t);
                        if (s) {
                            const t = s.getBoundingClientRect()
                              , r = je(s)
                              , o = Ze(r, "border", "width")
                              , l = Ze(r, "padding");
                            e = t.width - l.width - o.width,
                            i = t.height - l.height - o.height,
                            a = Fe(r.maxWidth, s, "clientWidth"),
                            n = Fe(r.maxHeight, s, "clientHeight")
                        } else
                            e = t.clientWidth,
                            i = t.clientHeight
                    }
                    return {
                        width: e,
                        height: i,
                        maxWidth: a || C,
                        maxHeight: n || C
                    }
                }(t, e, i);
                let {width: c, height: h} = l;
                if ("content-box" === n.boxSizing) {
                    const t = Ze(n, "border", "width")
                      , e = Ze(n, "padding");
                    c -= e.width + t.width,
                    h -= e.height + t.height
                }
                return c = Math.max(0, c - s.width),
                h = Math.max(0, a ? Math.floor(c / a) : h - s.height),
                c = Ue(Math.min(c, r, l.maxWidth)),
                h = Ue(Math.min(h, o, l.maxHeight)),
                c && !h && (h = Ue(c / 2)),
                {
                    width: c,
                    height: h
                }
            }
            function $e(t, e, i) {
                const a = e || 1
                  , n = Math.floor(t.height * a)
                  , s = Math.floor(t.width * a);
                t.height = n / a,
                t.width = s / a;
                const r = t.canvas;
                return r.style && (i || !r.style.height && !r.style.width) && (r.style.height = `${t.height}px`,
                r.style.width = `${t.width}px`),
                (t.currentDevicePixelRatio !== a || r.height !== n || r.width !== s) && (t.currentDevicePixelRatio = a,
                r.height = n,
                r.width = s,
                t.ctx.setTransform(a, 0, 0, a, 0, 0),
                !0)
            }
            const qe = function() {
                let t = !1;
                try {
                    const e = {
                        get passive() {
                            return t = !0,
                            !1
                        }
                    };
                    window.addEventListener("test", null, e),
                    window.removeEventListener("test", null, e)
                } catch (t) {}
                return t
            }();
            function Ke(t, e) {
                const i = function(t, e) {
                    return je(t).getPropertyValue(e)
                }(t, e)
                  , a = i && i.match(/^(\d+)(\.\d+)?px$/);
                return a ? +a[1] : void 0
            }
            function Ge(t, e, i, a) {
                return {
                    x: t.x + i * (e.x - t.x),
                    y: t.y + i * (e.y - t.y)
                }
            }
            function Je(t, e, i, a) {
                return {
                    x: t.x + i * (e.x - t.x),
                    y: "middle" === a ? i < .5 ? t.y : e.y : "after" === a ? i < 1 ? t.y : e.y : i > 0 ? e.y : t.y
                }
            }
            function Qe(t, e, i, a) {
                const n = {
                    x: t.cp2x,
                    y: t.cp2y
                }
                  , s = {
                    x: e.cp1x,
                    y: e.cp1y
                }
                  , r = Ge(t, n, i)
                  , o = Ge(n, s, i)
                  , l = Ge(s, e, i)
                  , c = Ge(r, o, i)
                  , h = Ge(o, l, i);
                return Ge(c, h, i)
            }
            const ti = new Map;
            function ei(t, e, i) {
                return function(t, e) {
                    e = e || {};
                    const i = t + JSON.stringify(e);
                    let a = ti.get(i);
                    return a || (a = new Intl.NumberFormat(t,e),
                    ti.set(i, a)),
                    a
                }(e, i).format(t)
            }
            function ii(t, e, i) {
                return t ? function(t, e) {
                    return {
                        x: i=>t + t + e - i,
                        setWidth(t) {
                            e = t
                        },
                        textAlign: t=>"center" === t ? t : "right" === t ? "left" : "right",
                        xPlus: (t,e)=>t - e,
                        leftForLtr: (t,e)=>t - e
                    }
                }(e, i) : {
                    x: t=>t,
                    setWidth(t) {},
                    textAlign: t=>t,
                    xPlus: (t,e)=>t + e,
                    leftForLtr: (t,e)=>t
                }
            }
            function ai(t, e) {
                let i, a;
                "ltr" !== e && "rtl" !== e || (i = t.canvas.style,
                a = [i.getPropertyValue("direction"), i.getPropertyPriority("direction")],
                i.setProperty("direction", e, "important"),
                t.prevTextDirection = a)
            }
            function ni(t, e) {
                void 0 !== e && (delete t.prevTextDirection,
                t.canvas.style.setProperty("direction", e[0], e[1]))
            }
            function si(t) {
                return "angle" === t ? {
                    between: q,
                    compare: H,
                    normalize: $
                } : {
                    between: G,
                    compare: (t,e)=>t - e,
                    normalize: t=>t
                }
            }
            function ri({start: t, end: e, count: i, loop: a, style: n}) {
                return {
                    start: t % i,
                    end: e % i,
                    loop: a && (e - t + 1) % i == 0,
                    style: n
                }
            }
            function oi(t, e, i) {
                if (!i)
                    return [t];
                const {property: a, start: n, end: s} = i
                  , r = e.length
                  , {compare: o, between: l, normalize: c} = si(a)
                  , {start: h, end: d, loop: f, style: u} = function(t, e, i) {
                    const {property: a, start: n, end: s} = i
                      , {between: r, normalize: o} = si(a)
                      , l = e.length;
                    let c, h, {start: d, end: f, loop: u} = t;
                    if (u) {
                        for (d += l,
                        f += l,
                        c = 0,
                        h = l; c < h && r(o(e[d % l][a]), n, s); ++c)
                            d--,
                            f--;
                        d %= l,
                        f %= l
                    }
                    return f < d && (f += l),
                    {
                        start: d,
                        end: f,
                        loop: u,
                        style: t.style
                    }
                }(t, e, i)
                  , m = [];
                let p, g, b, x = !1, y = null;
                const k = ()=>x || l(n, b, p) && 0 !== o(n, b)
                  , _ = ()=>!x || 0 === o(s, p) || l(s, b, p);
                for (let t = h, i = h; t <= d; ++t)
                    g = e[t % r],
                    g.skip || (p = c(g[a]),
                    p !== b && (x = l(p, n, s),
                    null === y && k() && (y = 0 === o(p, n) ? t : i),
                    null !== y && _() && (m.push(ri({
                        start: y,
                        end: t,
                        loop: f,
                        count: r,
                        style: u
                    })),
                    y = null),
                    i = t,
                    b = p));
                return null !== y && m.push(ri({
                    start: y,
                    end: d,
                    loop: f,
                    count: r,
                    style: u
                })),
                m
            }
            function li(t, e) {
                const i = []
                  , a = t.segments;
                for (let n = 0; n < a.length; n++) {
                    const s = oi(a[n], t.points, e);
                    s.length && i.push(...s)
                }
                return i
            }
            function ci(t, e, i, a) {
                return a && a.setContext && i ? function(t, e, i, a) {
                    const n = t._chart.getContext()
                      , s = hi(t.options)
                      , {_datasetIndex: r, options: {spanGaps: o}} = t
                      , l = i.length
                      , c = [];
                    let h = s
                      , d = e[0].start
                      , f = d;
                    function u(t, e, a, n) {
                        const s = o ? -1 : 1;
                        if (t !== e) {
                            for (t += l; i[t % l].skip; )
                                t -= s;
                            for (; i[e % l].skip; )
                                e += s;
                            t % l != e % l && (c.push({
                                start: t % l,
                                end: e % l,
                                loop: a,
                                style: n
                            }),
                            h = n,
                            d = e % l)
                        }
                    }
                    for (const t of e) {
                        d = o ? d : t.start;
                        let e, s = i[d % l];
                        for (f = d + 1; f <= t.end; f++) {
                            const o = i[f % l];
                            e = hi(a.setContext(de(n, {
                                type: "segment",
                                p0: s,
                                p1: o,
                                p0DataIndex: (f - 1) % l,
                                p1DataIndex: f % l,
                                datasetIndex: r
                            }))),
                            di(e, h) && u(d, f - 1, t.loop, h),
                            s = o,
                            h = e
                        }
                        d < f - 1 && u(d, f - 1, t.loop, h)
                    }
                    return c
                }(t, e, i, a) : e
            }
            function hi(t) {
                return {
                    backgroundColor: t.backgroundColor,
                    borderCapStyle: t.borderCapStyle,
                    borderDash: t.borderDash,
                    borderDashOffset: t.borderDashOffset,
                    borderJoinStyle: t.borderJoinStyle,
                    borderWidth: t.borderWidth,
                    borderColor: t.borderColor
                }
            }
            function di(t, e) {
                return e && JSON.stringify(t) !== JSON.stringify(e)
            }
            var fi = new class {
                constructor() {
                    this._request = null,
                    this._charts = new Map,
                    this._running = !1,
                    this._lastDate = void 0
                }
                _notify(t, e, i, a) {
                    const n = e.listeners[a]
                      , s = e.duration;
                    n.forEach((a=>a({
                        chart: t,
                        initial: e.initial,
                        numSteps: s,
                        currentStep: Math.min(i - e.start, s)
                    })))
                }
                _refresh() {
                    this._request || (this._running = !0,
                    this._request = t.call(window, (()=>{
                        this._update(),
                        this._request = null,
                        this._running && this._refresh()
                    }
                    )))
                }
                _update(t=Date.now()) {
                    let e = 0;
                    this._charts.forEach(((i,a)=>{
                        if (!i.running || !i.items.length)
                            return;
                        const n = i.items;
                        let s, r = n.length - 1, o = !1;
                        for (; r >= 0; --r)
                            s = n[r],
                            s._active ? (s._total > i.duration && (i.duration = s._total),
                            s.tick(t),
                            o = !0) : (n[r] = n[n.length - 1],
                            n.pop());
                        o && (a.draw(),
                        this._notify(a, i, t, "progress")),
                        n.length || (i.running = !1,
                        this._notify(a, i, t, "complete"),
                        i.initial = !1),
                        e += n.length
                    }
                    )),
                    this._lastDate = t,
                    0 === e && (this._running = !1)
                }
                _getAnims(t) {
                    const e = this._charts;
                    let i = e.get(t);
                    return i || (i = {
                        running: !1,
                        initial: !0,
                        items: [],
                        listeners: {
                            complete: [],
                            progress: []
                        }
                    },
                    e.set(t, i)),
                    i
                }
                listen(t, e, i) {
                    this._getAnims(t).listeners[e].push(i)
                }
                add(t, e) {
                    e && e.length && this._getAnims(t).items.push(...e)
                }
                has(t) {
                    return this._getAnims(t).items.length > 0
                }
                start(t) {
                    const e = this._charts.get(t);
                    e && (e.running = !0,
                    e.start = Date.now(),
                    e.duration = e.items.reduce(((t,e)=>Math.max(t, e._duration)), 0),
                    this._refresh())
                }
                running(t) {
                    if (!this._running)
                        return !1;
                    const e = this._charts.get(t);
                    return !!(e && e.running && e.items.length)
                }
                stop(t) {
                    const e = this._charts.get(t);
                    if (!e || !e.items.length)
                        return;
                    const i = e.items;
                    let a = i.length - 1;
                    for (; a >= 0; --a)
                        i[a].cancel();
                    e.items = [],
                    this._notify(t, e, Date.now(), "complete")
                }
                remove(t) {
                    return this._charts.delete(t)
                }
            }
            ;
            const ui = "transparent"
              , mi = {
                boolean: (t,e,i)=>i > .5 ? e : t,
                color(t, e, i) {
                    const a = Et(t || ui)
                      , n = a.valid && Et(e || ui);
                    return n && n.valid ? n.mix(a, i).hexString() : e
                },
                number: (t,e,i)=>t + (e - t) * i
            };
            class pi {
                constructor(t, e, i, a) {
                    const n = e[i];
                    a = he([t.to, a, n, t.from]);
                    const s = he([t.from, n, a]);
                    this._active = !0,
                    this._fn = t.fn || mi[t.type || typeof s],
                    this._easing = et[t.easing] || et.linear,
                    this._start = Math.floor(Date.now() + (t.delay || 0)),
                    this._duration = this._total = Math.floor(t.duration),
                    this._loop = !!t.loop,
                    this._target = e,
                    this._prop = i,
                    this._from = s,
                    this._to = a,
                    this._promises = void 0
                }
                active() {
                    return this._active
                }
                update(t, e, i) {
                    if (this._active) {
                        this._notify(!1);
                        const a = this._target[this._prop]
                          , n = i - this._start
                          , s = this._duration - n;
                        this._start = i,
                        this._duration = Math.floor(Math.max(s, t.duration)),
                        this._total += n,
                        this._loop = !!t.loop,
                        this._to = he([t.to, e, a, t.from]),
                        this._from = he([t.from, a, e])
                    }
                }
                cancel() {
                    this._active && (this.tick(Date.now()),
                    this._active = !1,
                    this._notify(!1))
                }
                tick(t) {
                    const e = t - this._start
                      , i = this._duration
                      , a = this._prop
                      , n = this._from
                      , s = this._loop
                      , r = this._to;
                    let o;
                    if (this._active = n !== r && (s || e < i),
                    !this._active)
                        return this._target[a] = r,
                        void this._notify(!0);
                    e < 0 ? this._target[a] = n : (o = e / i % 2,
                    o = s && o > 1 ? 2 - o : o,
                    o = this._easing(Math.min(1, Math.max(0, o))),
                    this._target[a] = this._fn(n, r, o))
                }
                wait() {
                    const t = this._promises || (this._promises = []);
                    return new Promise(((e,i)=>{
                        t.push({
                            res: e,
                            rej: i
                        })
                    }
                    ))
                }
                _notify(t) {
                    const e = t ? "res" : "rej"
                      , i = this._promises || [];
                    for (let t = 0; t < i.length; t++)
                        i[t][e]()
                }
            }
            jt.set("animation", {
                delay: void 0,
                duration: 1e3,
                easing: "easeOutQuart",
                fn: void 0,
                from: void 0,
                loop: void 0,
                to: void 0,
                type: void 0
            });
            const gi = Object.keys(jt.animation);
            jt.describe("animation", {
                _fallback: !1,
                _indexable: !1,
                _scriptable: t=>"onProgress" !== t && "onComplete" !== t && "fn" !== t
            }),
            jt.set("animations", {
                colors: {
                    type: "color",
                    properties: ["color", "borderColor", "backgroundColor"]
                },
                numbers: {
                    type: "number",
                    properties: ["x", "y", "borderWidth", "radius", "tension"]
                }
            }),
            jt.describe("animations", {
                _fallback: "animation"
            }),
            jt.set("transitions", {
                active: {
                    animation: {
                        duration: 400
                    }
                },
                resize: {
                    animation: {
                        duration: 0
                    }
                },
                show: {
                    animations: {
                        colors: {
                            from: "transparent"
                        },
                        visible: {
                            type: "boolean",
                            duration: 0
                        }
                    }
                },
                hide: {
                    animations: {
                        colors: {
                            to: "transparent"
                        },
                        visible: {
                            type: "boolean",
                            easing: "linear",
                            fn: t=>0 | t
                        }
                    }
                }
            });
            class bi {
                constructor(t, e) {
                    this._chart = t,
                    this._properties = new Map,
                    this.configure(e)
                }
                configure(t) {
                    if (!l(t))
                        return;
                    const e = this._properties;
                    Object.getOwnPropertyNames(t).forEach((i=>{
                        const a = t[i];
                        if (!l(a))
                            return;
                        const n = {};
                        for (const t of gi)
                            n[t] = a[t];
                        (o(a.properties) && a.properties || [i]).forEach((t=>{
                            t !== i && e.has(t) || e.set(t, n)
                        }
                        ))
                    }
                    ))
                }
                _animateOptions(t, e) {
                    const i = e.options
                      , a = function(t, e) {
                        if (!e)
                            return;
                        let i = t.options;
                        if (!i)
                            return void (t.options = e);
                        i.$shared && (t.options = i = Object.assign({}, i, {
                            $shared: !1,
                            $animations: {}
                        }));
                        return i
                    }(t, i);
                    if (!a)
                        return [];
                    const n = this._createAnimations(a, i);
                    return i.$shared && function(t, e) {
                        const i = []
                          , a = Object.keys(e);
                        for (let e = 0; e < a.length; e++) {
                            const n = t[a[e]];
                            n && n.active() && i.push(n.wait())
                        }
                        return Promise.all(i)
                    }(t.options.$animations, i).then((()=>{
                        t.options = i
                    }
                    ), (()=>{}
                    )),
                    n
                }
                _createAnimations(t, e) {
                    const i = this._properties
                      , a = []
                      , n = t.$animations || (t.$animations = {})
                      , s = Object.keys(e)
                      , r = Date.now();
                    let o;
                    for (o = s.length - 1; o >= 0; --o) {
                        const l = s[o];
                        if ("$" === l.charAt(0))
                            continue;
                        if ("options" === l) {
                            a.push(...this._animateOptions(t, e));
                            continue
                        }
                        const c = e[l];
                        let h = n[l];
                        const d = i.get(l);
                        if (h) {
                            if (d && h.active()) {
                                h.update(d, c, r);
                                continue
                            }
                            h.cancel()
                        }
                        d && d.duration ? (n[l] = h = new pi(d,t,l,c),
                        a.push(h)) : t[l] = c
                    }
                    return a
                }
                update(t, e) {
                    if (0 === this._properties.size)
                        return void Object.assign(t, e);
                    const i = this._createAnimations(t, e);
                    return i.length ? (fi.add(this._chart, i),
                    !0) : void 0
                }
            }
            function xi(t, e) {
                const i = t && t.options || {}
                  , a = i.reverse
                  , n = void 0 === i.min ? e : 0
                  , s = void 0 === i.max ? e : 0;
                return {
                    start: a ? s : n,
                    end: a ? n : s
                }
            }
            function yi(t, e) {
                const i = []
                  , a = t._getSortedDatasetMetas(e);
                let n, s;
                for (n = 0,
                s = a.length; n < s; ++n)
                    i.push(a[n].index);
                return i
            }
            function ki(t, e, i, a={}) {
                const n = t.keys
                  , s = "single" === a.mode;
                let r, o, l, h;
                if (null !== e) {
                    for (r = 0,
                    o = n.length; r < o; ++r) {
                        if (l = +n[r],
                        l === i) {
                            if (a.all)
                                continue;
                            break
                        }
                        h = t.values[l],
                        c(h) && (s || 0 === e || X(e) === X(h)) && (e += h)
                    }
                    return e
                }
            }
            function _i(t, e) {
                const i = t && t.options.stacked;
                return i || void 0 === i && void 0 !== e.stack
            }
            function wi(t, e, i) {
                const a = t[e] || (t[e] = {});
                return a[i] || (a[i] = {})
            }
            function vi(t, e, i, a) {
                for (const n of e.getMatchingVisibleMetas(a).reverse()) {
                    const e = t[n.index];
                    if (i && e > 0 || !i && e < 0)
                        return n.index
                }
                return null
            }
            function Oi(t, e) {
                const {chart: i, _cachedMeta: a} = t
                  , n = i._stacks || (i._stacks = {})
                  , {iScale: s, vScale: r, index: o} = a
                  , l = s.axis
                  , c = r.axis
                  , h = function(t, e, i) {
                    return `${t.id}.${e.id}.${i.stack || i.type}`
                }(s, r, a)
                  , d = e.length;
                let f;
                for (let t = 0; t < d; ++t) {
                    const i = e[t]
                      , {[l]: s, [c]: d} = i;
                    f = (i._stacks || (i._stacks = {}))[c] = wi(n, h, s),
                    f[o] = d,
                    f._top = vi(f, r, !0, a.type),
                    f._bottom = vi(f, r, !1, a.type)
                }
            }
            function Mi(t, e) {
                const i = t.scales;
                return Object.keys(i).filter((t=>i[t].axis === e)).shift()
            }
            function Si(t, e) {
                const i = t.controller.index
                  , a = t.vScale && t.vScale.axis;
                if (a) {
                    e = e || t._parsed;
                    for (const t of e) {
                        const e = t._stacks;
                        if (!e || void 0 === e[a] || void 0 === e[a][i])
                            return;
                        delete e[a][i]
                    }
                }
            }
            const Di = t=>"reset" === t || "none" === t
              , Ii = (t,e)=>e ? t : Object.assign({}, t);
            class Ri {
                constructor(t, e) {
                    this.chart = t,
                    this._ctx = t.ctx,
                    this.index = e,
                    this._cachedDataOpts = {},
                    this._cachedMeta = this.getMeta(),
                    this._type = this._cachedMeta.type,
                    this.options = void 0,
                    this._parsing = !1,
                    this._data = void 0,
                    this._objectData = void 0,
                    this._sharedOptions = void 0,
                    this._drawStart = void 0,
                    this._drawCount = void 0,
                    this.enableOptionSharing = !1,
                    this.$context = void 0,
                    this._syncList = [],
                    this.initialize()
                }
                initialize() {
                    const t = this._cachedMeta;
                    this.configure(),
                    this.linkScales(),
                    t._stacked = _i(t.vScale, t),
                    this.addElements()
                }
                updateIndex(t) {
                    this.index !== t && Si(this._cachedMeta),
                    this.index = t
                }
                linkScales() {
                    const t = this.chart
                      , e = this._cachedMeta
                      , i = this.getDataset()
                      , a = (t,e,i,a)=>"x" === t ? e : "r" === t ? a : i
                      , n = e.xAxisID = d(i.xAxisID, Mi(t, "x"))
                      , s = e.yAxisID = d(i.yAxisID, Mi(t, "y"))
                      , r = e.rAxisID = d(i.rAxisID, Mi(t, "r"))
                      , o = e.indexAxis
                      , l = e.iAxisID = a(o, n, s, r)
                      , c = e.vAxisID = a(o, s, n, r);
                    e.xScale = this.getScaleForId(n),
                    e.yScale = this.getScaleForId(s),
                    e.rScale = this.getScaleForId(r),
                    e.iScale = this.getScaleForId(l),
                    e.vScale = this.getScaleForId(c)
                }
                getDataset() {
                    return this.chart.data.datasets[this.index]
                }
                getMeta() {
                    return this.chart.getDatasetMeta(this.index)
                }
                getScaleForId(t) {
                    return this.chart.scales[t]
                }
                _getOtherScale(t) {
                    const e = this._cachedMeta;
                    return t === e.iScale ? e.vScale : e.iScale
                }
                reset() {
                    this._update("reset")
                }
                _destroy() {
                    const t = this._cachedMeta;
                    this._data && ge(this._data, this),
                    t._stacked && Si(t)
                }
                _dataCheck() {
                    const t = this.getDataset()
                      , e = t.data || (t.data = [])
                      , i = this._data;
                    if (l(e))
                        this._data = function(t) {
                            const e = Object.keys(t)
                              , i = new Array(e.length);
                            let a, n, s;
                            for (a = 0,
                            n = e.length; a < n; ++a)
                                s = e[a],
                                i[a] = {
                                    x: s,
                                    y: t[s]
                                };
                            return i
                        }(e);
                    else if (i !== e) {
                        if (i) {
                            ge(i, this);
                            const t = this._cachedMeta;
                            Si(t),
                            t._parsed = []
                        }
                        e && Object.isExtensible(e) && (n = this,
                        (a = e)._chartjs ? a._chartjs.listeners.push(n) : (Object.defineProperty(a, "_chartjs", {
                            configurable: !0,
                            enumerable: !1,
                            value: {
                                listeners: [n]
                            }
                        }),
                        pe.forEach((t=>{
                            const e = "_onData" + M(t)
                              , i = a[t];
                            Object.defineProperty(a, t, {
                                configurable: !0,
                                enumerable: !1,
                                value(...t) {
                                    const n = i.apply(this, t);
                                    return a._chartjs.listeners.forEach((i=>{
                                        "function" == typeof i[e] && i[e](...t)
                                    }
                                    )),
                                    n
                                }
                            })
                        }
                        )))),
                        this._syncList = [],
                        this._data = e
                    }
                    var a, n
                }
                addElements() {
                    const t = this._cachedMeta;
                    this._dataCheck(),
                    this.datasetElementType && (t.dataset = new this.datasetElementType)
                }
                buildOrUpdateElements(t) {
                    const e = this._cachedMeta
                      , i = this.getDataset();
                    let a = !1;
                    this._dataCheck();
                    const n = e._stacked;
                    e._stacked = _i(e.vScale, e),
                    e.stack !== i.stack && (a = !0,
                    Si(e),
                    e.stack = i.stack),
                    this._resyncElements(t),
                    (a || n !== e._stacked) && Oi(this, e._parsed)
                }
                configure() {
                    const t = this.chart.config
                      , e = t.datasetScopeKeys(this._type)
                      , i = t.getOptionScopes(this.getDataset(), e, !0);
                    this.options = t.createResolver(i, this.getContext()),
                    this._parsing = this.options.parsing,
                    this._cachedDataOpts = {}
                }
                parse(t, e) {
                    const {_cachedMeta: i, _data: a} = this
                      , {iScale: n, _stacked: s} = i
                      , r = n.axis;
                    let c, h, d, f = 0 === t && e === a.length || i._sorted, u = t > 0 && i._parsed[t - 1];
                    if (!1 === this._parsing)
                        i._parsed = a,
                        i._sorted = !0,
                        d = a;
                    else {
                        d = o(a[t]) ? this.parseArrayData(i, a, t, e) : l(a[t]) ? this.parseObjectData(i, a, t, e) : this.parsePrimitiveData(i, a, t, e);
                        const n = ()=>null === h[r] || u && h[r] < u[r];
                        for (c = 0; c < e; ++c)
                            i._parsed[c + t] = h = d[c],
                            f && (n() && (f = !1),
                            u = h);
                        i._sorted = f
                    }
                    s && Oi(this, d)
                }
                parsePrimitiveData(t, e, i, a) {
                    const {iScale: n, vScale: s} = t
                      , r = n.axis
                      , o = s.axis
                      , l = n.getLabels()
                      , c = n === s
                      , h = new Array(a);
                    let d, f, u;
                    for (d = 0,
                    f = a; d < f; ++d)
                        u = d + i,
                        h[d] = {
                            [r]: c || n.parse(l[u], u),
                            [o]: s.parse(e[u], u)
                        };
                    return h
                }
                parseArrayData(t, e, i, a) {
                    const {xScale: n, yScale: s} = t
                      , r = new Array(a);
                    let o, l, c, h;
                    for (o = 0,
                    l = a; o < l; ++o)
                        c = o + i,
                        h = e[c],
                        r[o] = {
                            x: n.parse(h[0], c),
                            y: s.parse(h[1], c)
                        };
                    return r
                }
                parseObjectData(t, e, i, a) {
                    const {xScale: n, yScale: s} = t
                      , {xAxisKey: r="x", yAxisKey: o="y"} = this._parsing
                      , l = new Array(a);
                    let c, h, d, f;
                    for (c = 0,
                    h = a; c < h; ++c)
                        d = c + i,
                        f = e[d],
                        l[c] = {
                            x: n.parse(O(f, r), d),
                            y: s.parse(O(f, o), d)
                        };
                    return l
                }
                getParsed(t) {
                    return this._cachedMeta._parsed[t]
                }
                getDataElement(t) {
                    return this._cachedMeta.data[t]
                }
                applyStack(t, e, i) {
                    const a = this.chart
                      , n = this._cachedMeta
                      , s = e[t.axis];
                    return ki({
                        keys: yi(a, !0),
                        values: e._stacks[t.axis]
                    }, s, n.index, {
                        mode: i
                    })
                }
                updateRangeFromParsed(t, e, i, a) {
                    const n = i[e.axis];
                    let s = null === n ? NaN : n;
                    const r = a && i._stacks[e.axis];
                    a && r && (a.values = r,
                    s = ki(a, n, this._cachedMeta.index)),
                    t.min = Math.min(t.min, s),
                    t.max = Math.max(t.max, s)
                }
                getMinMax(t, e) {
                    const i = this._cachedMeta
                      , a = i._parsed
                      , n = i._sorted && t === i.iScale
                      , s = a.length
                      , r = this._getOtherScale(t)
                      , o = ((t,e,i)=>t && !e.hidden && e._stacked && {
                        keys: yi(i, !0),
                        values: null
                    })(e, i, this.chart)
                      , l = {
                        min: Number.POSITIVE_INFINITY,
                        max: Number.NEGATIVE_INFINITY
                    }
                      , {min: h, max: d} = function(t) {
                        const {min: e, max: i, minDefined: a, maxDefined: n} = t.getUserBounds();
                        return {
                            min: a ? e : Number.NEGATIVE_INFINITY,
                            max: n ? i : Number.POSITIVE_INFINITY
                        }
                    }(r);
                    let f, u;
                    function m() {
                        u = a[f];
                        const e = u[r.axis];
                        return !c(u[t.axis]) || h > e || d < e
                    }
                    for (f = 0; f < s && (m() || (this.updateRangeFromParsed(l, t, u, o),
                    !n)); ++f)
                        ;
                    if (n)
                        for (f = s - 1; f >= 0; --f)
                            if (!m()) {
                                this.updateRangeFromParsed(l, t, u, o);
                                break
                            }
                    return l
                }
                getAllParsedValues(t) {
                    const e = this._cachedMeta._parsed
                      , i = [];
                    let a, n, s;
                    for (a = 0,
                    n = e.length; a < n; ++a)
                        s = e[a][t.axis],
                        c(s) && i.push(s);
                    return i
                }
                getMaxOverflow() {
                    return !1
                }
                getLabelAndValue(t) {
                    const e = this._cachedMeta
                      , i = e.iScale
                      , a = e.vScale
                      , n = this.getParsed(t);
                    return {
                        label: i ? "" + i.getLabelForValue(n[i.axis]) : "",
                        value: a ? "" + a.getLabelForValue(n[a.axis]) : ""
                    }
                }
                _update(t) {
                    const e = this._cachedMeta;
                    this.update(t || "default"),
                    e._clip = function(t) {
                        let e, i, a, n;
                        return l(t) ? (e = t.top,
                        i = t.right,
                        a = t.bottom,
                        n = t.left) : e = i = a = n = t,
                        {
                            top: e,
                            right: i,
                            bottom: a,
                            left: n,
                            disabled: !1 === t
                        }
                    }(d(this.options.clip, function(t, e, i) {
                        if (!1 === i)
                            return !1;
                        const a = xi(t, i)
                          , n = xi(e, i);
                        return {
                            top: n.end,
                            right: a.end,
                            bottom: n.start,
                            left: a.start
                        }
                    }(e.xScale, e.yScale, this.getMaxOverflow())))
                }
                update(t) {}
                draw() {
                    const t = this._ctx
                      , e = this.chart
                      , i = this._cachedMeta
                      , a = i.data || []
                      , n = e.chartArea
                      , s = []
                      , r = this._drawStart || 0
                      , o = this._drawCount || a.length - r;
                    let l;
                    for (i.dataset && i.dataset.draw(t, n, r, o),
                    l = r; l < r + o; ++l) {
                        const e = a[l];
                        e.hidden || (e.active ? s.push(e) : e.draw(t, n))
                    }
                    for (l = 0; l < s.length; ++l)
                        s[l].draw(t, n)
                }
                getStyle(t, e) {
                    const i = e ? "active" : "default";
                    return void 0 === t && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(i) : this.resolveDataElementOptions(t || 0, i)
                }
                getContext(t, e, i) {
                    const a = this.getDataset();
                    let n;
                    if (t >= 0 && t < this._cachedMeta.data.length) {
                        const e = this._cachedMeta.data[t];
                        n = e.$context || (e.$context = function(t, e, i) {
                            return de(t, {
                                active: !1,
                                dataIndex: e,
                                parsed: void 0,
                                raw: void 0,
                                element: i,
                                index: e,
                                mode: "default",
                                type: "data"
                            })
                        }(this.getContext(), t, e)),
                        n.parsed = this.getParsed(t),
                        n.raw = a.data[t],
                        n.index = n.dataIndex = t
                    } else
                        n = this.$context || (this.$context = function(t, e) {
                            return de(t, {
                                active: !1,
                                dataset: void 0,
                                datasetIndex: e,
                                index: e,
                                mode: "default",
                                type: "dataset"
                            })
                        }(this.chart.getContext(), this.index)),
                        n.dataset = a,
                        n.index = n.datasetIndex = this.index;
                    return n.active = !!e,
                    n.mode = i,
                    n
                }
                resolveDatasetElementOptions(t) {
                    return this._resolveElementOptions(this.datasetElementType.id, t)
                }
                resolveDataElementOptions(t, e) {
                    return this._resolveElementOptions(this.dataElementType.id, e, t)
                }
                _resolveElementOptions(t, e="default", i) {
                    const a = "active" === e
                      , n = this._cachedDataOpts
                      , s = t + "-" + e
                      , r = n[s]
                      , o = this.enableOptionSharing && S(i);
                    if (r)
                        return Ii(r, o);
                    const l = this.chart.config
                      , c = l.datasetElementScopeKeys(this._type, t)
                      , h = a ? [`${t}Hover`, "hover", t, ""] : [t, ""]
                      , d = l.getOptionScopes(this.getDataset(), c)
                      , f = Object.keys(jt.elements[t])
                      , u = l.resolveNamedOptions(d, f, (()=>this.getContext(i, a)), h);
                    return u.$shared && (u.$shared = o,
                    n[s] = Object.freeze(Ii(u, o))),
                    u
                }
                _resolveAnimations(t, e, i) {
                    const a = this.chart
                      , n = this._cachedDataOpts
                      , s = `animation-${e}`
                      , r = n[s];
                    if (r)
                        return r;
                    let o;
                    if (!1 !== a.options.animation) {
                        const a = this.chart.config
                          , n = a.datasetAnimationScopeKeys(this._type, e)
                          , s = a.getOptionScopes(this.getDataset(), n);
                        o = a.createResolver(s, this.getContext(t, i, e))
                    }
                    const l = new bi(a,o && o.animations);
                    return o && o._cacheable && (n[s] = Object.freeze(l)),
                    l
                }
                getSharedOptions(t) {
                    if (t.$shared)
                        return this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
                }
                includeOptions(t, e) {
                    return !e || Di(t) || this.chart._animationsDisabled
                }
                updateElement(t, e, i, a) {
                    Di(a) ? Object.assign(t, i) : this._resolveAnimations(e, a).update(t, i)
                }
                updateSharedOptions(t, e, i) {
                    t && !Di(e) && this._resolveAnimations(void 0, e).update(t, i)
                }
                _setStyle(t, e, i, a) {
                    t.active = a;
                    const n = this.getStyle(e, a);
                    this._resolveAnimations(e, i, a).update(t, {
                        options: !a && this.getSharedOptions(n) || n
                    })
                }
                removeHoverStyle(t, e, i) {
                    this._setStyle(t, i, "active", !1)
                }
                setHoverStyle(t, e, i) {
                    this._setStyle(t, i, "active", !0)
                }
                _removeDatasetHoverStyle() {
                    const t = this._cachedMeta.dataset;
                    t && this._setStyle(t, void 0, "active", !1)
                }
                _setDatasetHoverStyle() {
                    const t = this._cachedMeta.dataset;
                    t && this._setStyle(t, void 0, "active", !0)
                }
                _resyncElements(t) {
                    const e = this._data
                      , i = this._cachedMeta.data;
                    for (const [t,e,i] of this._syncList)
                        this[t](e, i);
                    this._syncList = [];
                    const a = i.length
                      , n = e.length
                      , s = Math.min(n, a);
                    s && this.parse(0, s),
                    n > a ? this._insertElements(a, n - a, t) : n < a && this._removeElements(n, a - n)
                }
                _insertElements(t, e, i=!0) {
                    const a = this._cachedMeta
                      , n = a.data
                      , s = t + e;
                    let r;
                    const o = t=>{
                        for (t.length += e,
                        r = t.length - 1; r >= s; r--)
                            t[r] = t[r - e]
                    }
                    ;
                    for (o(n),
                    r = t; r < s; ++r)
                        n[r] = new this.dataElementType;
                    this._parsing && o(a._parsed),
                    this.parse(t, e),
                    i && this.updateElements(n, t, e, "reset")
                }
                updateElements(t, e, i, a) {}
                _removeElements(t, e) {
                    const i = this._cachedMeta;
                    if (this._parsing) {
                        const a = i._parsed.splice(t, e);
                        i._stacked && Si(i, a)
                    }
                    i.data.splice(t, e)
                }
                _sync(t) {
                    if (this._parsing)
                        this._syncList.push(t);
                    else {
                        const [e,i,a] = t;
                        this[e](i, a)
                    }
                    this.chart._dataChanges.push([this.index, ...t])
                }
                _onDataPush() {
                    const t = arguments.length;
                    this._sync(["_insertElements", this.getDataset().data.length - t, t])
                }
                _onDataPop() {
                    this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1])
                }
                _onDataShift() {
                    this._sync(["_removeElements", 0, 1])
                }
                _onDataSplice(t, e) {
                    e && this._sync(["_removeElements", t, e]);
                    const i = arguments.length - 2;
                    i && this._sync(["_insertElements", t, i])
                }
                _onDataUnshift() {
                    this._sync(["_insertElements", 0, arguments.length])
                }
            }
            function Li(t) {
                const e = t.iScale
                  , i = function(t, e) {
                    if (!t._cache.$bar) {
                        const i = t.getMatchingVisibleMetas(e);
                        let a = [];
                        for (let e = 0, n = i.length; e < n; e++)
                            a = a.concat(i[e].controller.getAllParsedValues(t));
                        t._cache.$bar = be(a.sort(((t,e)=>t - e)))
                    }
                    return t._cache.$bar
                }(e, t.type);
                let a, n, s, r, o = e._length;
                const l = ()=>{
                    32767 !== s && -32768 !== s && (S(r) && (o = Math.min(o, Math.abs(s - r) || o)),
                    r = s)
                }
                ;
                for (a = 0,
                n = i.length; a < n; ++a)
                    s = e.getPixelForValue(i[a]),
                    l();
                for (r = void 0,
                a = 0,
                n = e.ticks.length; a < n; ++a)
                    s = e.getPixelForTick(a),
                    l();
                return o
            }
            function Pi(t, e, i, a) {
                return o(t) ? function(t, e, i, a) {
                    const n = i.parse(t[0], a)
                      , s = i.parse(t[1], a)
                      , r = Math.min(n, s)
                      , o = Math.max(n, s);
                    let l = r
                      , c = o;
                    Math.abs(r) > Math.abs(o) && (l = o,
                    c = r),
                    e[i.axis] = c,
                    e._custom = {
                        barStart: l,
                        barEnd: c,
                        start: n,
                        end: s,
                        min: r,
                        max: o
                    }
                }(t, e, i, a) : e[i.axis] = i.parse(t, a),
                e
            }
            function Ci(t, e, i, a) {
                const n = t.iScale
                  , s = t.vScale
                  , r = n.getLabels()
                  , o = n === s
                  , l = [];
                let c, h, d, f;
                for (c = i,
                h = i + a; c < h; ++c)
                    f = e[c],
                    d = {},
                    d[n.axis] = o || n.parse(r[c], c),
                    l.push(Pi(f, d, s, c));
                return l
            }
            function Ai(t) {
                return t && void 0 !== t.barStart && void 0 !== t.barEnd
            }
            function Ti(t, e, i, a) {
                let n = e.borderSkipped;
                const s = {};
                if (!n)
                    return void (t.borderSkipped = s);
                const {start: r, end: o, reverse: l, top: c, bottom: h} = function(t) {
                    let e, i, a, n, s;
                    return t.horizontal ? (e = t.base > t.x,
                    i = "left",
                    a = "right") : (e = t.base < t.y,
                    i = "bottom",
                    a = "top"),
                    e ? (n = "end",
                    s = "start") : (n = "start",
                    s = "end"),
                    {
                        start: i,
                        end: a,
                        reverse: e,
                        top: n,
                        bottom: s
                    }
                }(t);
                "middle" === n && i && (t.enableBorderRadius = !0,
                (i._top || 0) === a ? n = c : (i._bottom || 0) === a ? n = h : (s[Ei(h, r, o, l)] = !0,
                n = c)),
                s[Ei(n, r, o, l)] = !0,
                t.borderSkipped = s
            }
            function Ei(t, e, i, a) {
                var n, s, r;
                return a ? (r = i,
                t = zi(t = (n = t) === (s = e) ? r : n === r ? s : n, i, e)) : t = zi(t, e, i),
                t
            }
            function zi(t, e, i) {
                return "start" === t ? e : "end" === t ? i : t
            }
            function Bi(t, {inflateAmount: e}, i) {
                t.inflateAmount = "auto" === e ? 1 === i ? .33 : 0 : e
            }
            Ri.defaults = {},
            Ri.prototype.datasetElementType = null,
            Ri.prototype.dataElementType = null;
            class Xi extends Ri {
                parsePrimitiveData(t, e, i, a) {
                    return Ci(t, e, i, a)
                }
                parseArrayData(t, e, i, a) {
                    return Ci(t, e, i, a)
                }
                parseObjectData(t, e, i, a) {
                    const {iScale: n, vScale: s} = t
                      , {xAxisKey: r="x", yAxisKey: o="y"} = this._parsing
                      , l = "x" === n.axis ? r : o
                      , c = "x" === s.axis ? r : o
                      , h = [];
                    let d, f, u, m;
                    for (d = i,
                    f = i + a; d < f; ++d)
                        m = e[d],
                        u = {},
                        u[n.axis] = n.parse(O(m, l), d),
                        h.push(Pi(O(m, c), u, s, d));
                    return h
                }
                updateRangeFromParsed(t, e, i, a) {
                    super.updateRangeFromParsed(t, e, i, a);
                    const n = i._custom;
                    n && e === this._cachedMeta.vScale && (t.min = Math.min(t.min, n.min),
                    t.max = Math.max(t.max, n.max))
                }
                getMaxOverflow() {
                    return 0
                }
                getLabelAndValue(t) {
                    const e = this._cachedMeta
                      , {iScale: i, vScale: a} = e
                      , n = this.getParsed(t)
                      , s = n._custom
                      , r = Ai(s) ? "[" + s.start + ", " + s.end + "]" : "" + a.getLabelForValue(n[a.axis]);
                    return {
                        label: "" + i.getLabelForValue(n[i.axis]),
                        value: r
                    }
                }
                initialize() {
                    this.enableOptionSharing = !0,
                    super.initialize();
                    this._cachedMeta.stack = this.getDataset().stack
                }
                update(t) {
                    const e = this._cachedMeta;
                    this.updateElements(e.data, 0, e.data.length, t)
                }
                updateElements(t, e, i, a) {
                    const n = "reset" === a
                      , {index: s, _cachedMeta: {vScale: o}} = this
                      , l = o.getBasePixel()
                      , c = o.isHorizontal()
                      , h = this._getRuler()
                      , d = this.resolveDataElementOptions(e, a)
                      , f = this.getSharedOptions(d)
                      , u = this.includeOptions(a, f);
                    this.updateSharedOptions(f, a, d);
                    for (let d = e; d < e + i; d++) {
                        const e = this.getParsed(d)
                          , i = n || r(e[o.axis]) ? {
                            base: l,
                            head: l
                        } : this._calculateBarValuePixels(d)
                          , m = this._calculateBarIndexPixels(d, h)
                          , p = (e._stacks || {})[o.axis]
                          , g = {
                            horizontal: c,
                            base: i.base,
                            enableBorderRadius: !p || Ai(e._custom) || s === p._top || s === p._bottom,
                            x: c ? i.head : m.center,
                            y: c ? m.center : i.head,
                            height: c ? m.size : Math.abs(i.size),
                            width: c ? Math.abs(i.size) : m.size
                        };
                        u && (g.options = f || this.resolveDataElementOptions(d, t[d].active ? "active" : a));
                        const b = g.options || t[d].options;
                        Ti(g, b, p, s),
                        Bi(g, b, h.ratio),
                        this.updateElement(t[d], d, g, a)
                    }
                }
                _getStacks(t, e) {
                    const i = this._cachedMeta.iScale
                      , a = i.getMatchingVisibleMetas(this._type)
                      , n = i.options.stacked
                      , s = a.length
                      , o = [];
                    let l, c;
                    for (l = 0; l < s; ++l)
                        if (c = a[l],
                        c.controller.options.grouped) {
                            if (void 0 !== e) {
                                const t = c.controller.getParsed(e)[c.controller._cachedMeta.vScale.axis];
                                if (r(t) || isNaN(t))
                                    continue
                            }
                            if ((!1 === n || -1 === o.indexOf(c.stack) || void 0 === n && void 0 === c.stack) && o.push(c.stack),
                            c.index === t)
                                break
                        }
                    return o.length || o.push(void 0),
                    o
                }
                _getStackCount(t) {
                    return this._getStacks(void 0, t).length
                }
                _getStackIndex(t, e, i) {
                    const a = this._getStacks(t, i)
                      , n = void 0 !== e ? a.indexOf(e) : -1;
                    return -1 === n ? a.length - 1 : n
                }
                _getRuler() {
                    const t = this.options
                      , e = this._cachedMeta
                      , i = e.iScale
                      , a = [];
                    let n, s;
                    for (n = 0,
                    s = e.data.length; n < s; ++n)
                        a.push(i.getPixelForValue(this.getParsed(n)[i.axis], n));
                    const r = t.barThickness;
                    return {
                        min: r || Li(e),
                        pixels: a,
                        start: i._startPixel,
                        end: i._endPixel,
                        stackCount: this._getStackCount(),
                        scale: i,
                        grouped: t.grouped,
                        ratio: r ? 1 : t.categoryPercentage * t.barPercentage
                    }
                }
                _calculateBarValuePixels(t) {
                    const {_cachedMeta: {vScale: e, _stacked: i}, options: {base: a, minBarLength: n}} = this
                      , s = a || 0
                      , o = this.getParsed(t)
                      , l = o._custom
                      , c = Ai(l);
                    let h, d, f = o[e.axis], u = 0, m = i ? this.applyStack(e, o, i) : f;
                    m !== f && (u = m - f,
                    m = f),
                    c && (f = l.barStart,
                    m = l.barEnd - l.barStart,
                    0 !== f && X(f) !== X(l.barEnd) && (u = 0),
                    u += f);
                    const p = r(a) || c ? u : a;
                    let g = e.getPixelForValue(p);
                    if (h = this.chart.getDataVisibility(t) ? e.getPixelForValue(u + m) : g,
                    d = h - g,
                    Math.abs(d) < n && (d = function(t, e, i) {
                        return 0 !== t ? X(t) : (e.isHorizontal() ? 1 : -1) * (e.min >= i ? 1 : -1)
                    }(d, e, s) * n,
                    f === s && (g -= d / 2),
                    h = g + d),
                    g === e.getPixelForValue(s)) {
                        const t = X(d) * e.getLineWidthForValue(s) / 2;
                        g += t,
                        d -= t
                    }
                    return {
                        size: d,
                        base: g,
                        head: h,
                        center: h + d / 2
                    }
                }
                _calculateBarIndexPixels(t, e) {
                    const i = e.scale
                      , a = this.options
                      , n = a.skipNull
                      , s = d(a.maxBarThickness, 1 / 0);
                    let o, l;
                    if (e.grouped) {
                        const i = n ? this._getStackCount(t) : e.stackCount
                          , c = "flex" === a.barThickness ? function(t, e, i, a) {
                            const n = e.pixels
                              , s = n[t];
                            let r = t > 0 ? n[t - 1] : null
                              , o = t < n.length - 1 ? n[t + 1] : null;
                            const l = i.categoryPercentage;
                            null === r && (r = s - (null === o ? e.end - e.start : o - s)),
                            null === o && (o = s + s - r);
                            const c = s - (s - Math.min(r, o)) / 2 * l;
                            return {
                                chunk: Math.abs(o - r) / 2 * l / a,
                                ratio: i.barPercentage,
                                start: c
                            }
                        }(t, e, a, i) : function(t, e, i, a) {
                            const n = i.barThickness;
                            let s, o;
                            return r(n) ? (s = e.min * i.categoryPercentage,
                            o = i.barPercentage) : (s = n * a,
                            o = 1),
                            {
                                chunk: s / a,
                                ratio: o,
                                start: e.pixels[t] - s / 2
                            }
                        }(t, e, a, i)
                          , h = this._getStackIndex(this.index, this._cachedMeta.stack, n ? t : void 0);
                        o = c.start + c.chunk * h + c.chunk / 2,
                        l = Math.min(s, c.chunk * c.ratio)
                    } else
                        o = i.getPixelForValue(this.getParsed(t)[i.axis], t),
                        l = Math.min(s, e.min * e.ratio);
                    return {
                        base: o - l / 2,
                        head: o + l / 2,
                        center: o,
                        size: l
                    }
                }
                draw() {
                    const t = this._cachedMeta
                      , e = t.vScale
                      , i = t.data
                      , a = i.length;
                    let n = 0;
                    for (; n < a; ++n)
                        null !== this.getParsed(n)[e.axis] && i[n].draw(this._ctx)
                }
            }
            Xi.id = "bar",
            Xi.defaults = {
                datasetElementType: !1,
                dataElementType: "bar",
                categoryPercentage: .8,
                barPercentage: .9,
                grouped: !0,
                animations: {
                    numbers: {
                        type: "number",
                        properties: ["x", "y", "base", "width", "height"]
                    }
                }
            },
            Xi.overrides = {
                scales: {
                    _index_: {
                        type: "category",
                        offset: !0,
                        grid: {
                            offset: !0
                        }
                    },
                    _value_: {
                        type: "linear",
                        beginAtZero: !0
                    }
                }
            };
            class Yi extends Ri {
                initialize() {
                    this.enableOptionSharing = !0,
                    super.initialize()
                }
                parsePrimitiveData(t, e, i, a) {
                    const n = super.parsePrimitiveData(t, e, i, a);
                    for (let t = 0; t < n.length; t++)
                        n[t]._custom = this.resolveDataElementOptions(t + i).radius;
                    return n
                }
                parseArrayData(t, e, i, a) {
                    const n = super.parseArrayData(t, e, i, a);
                    for (let t = 0; t < n.length; t++) {
                        const a = e[i + t];
                        n[t]._custom = d(a[2], this.resolveDataElementOptions(t + i).radius)
                    }
                    return n
                }
                parseObjectData(t, e, i, a) {
                    const n = super.parseObjectData(t, e, i, a);
                    for (let t = 0; t < n.length; t++) {
                        const a = e[i + t];
                        n[t]._custom = d(a && a.r && +a.r, this.resolveDataElementOptions(t + i).radius)
                    }
                    return n
                }
                getMaxOverflow() {
                    const t = this._cachedMeta.data;
                    let e = 0;
                    for (let i = t.length - 1; i >= 0; --i)
                        e = Math.max(e, t[i].size(this.resolveDataElementOptions(i)) / 2);
                    return e > 0 && e
                }
                getLabelAndValue(t) {
                    const e = this._cachedMeta
                      , {xScale: i, yScale: a} = e
                      , n = this.getParsed(t)
                      , s = i.getLabelForValue(n.x)
                      , r = a.getLabelForValue(n.y)
                      , o = n._custom;
                    return {
                        label: e.label,
                        value: "(" + s + ", " + r + (o ? ", " + o : "") + ")"
                    }
                }
                update(t) {
                    const e = this._cachedMeta.data;
                    this.updateElements(e, 0, e.length, t)
                }
                updateElements(t, e, i, a) {
                    const n = "reset" === a
                      , {iScale: s, vScale: r} = this._cachedMeta
                      , o = this.resolveDataElementOptions(e, a)
                      , l = this.getSharedOptions(o)
                      , c = this.includeOptions(a, l)
                      , h = s.axis
                      , d = r.axis;
                    for (let o = e; o < e + i; o++) {
                        const e = t[o]
                          , i = !n && this.getParsed(o)
                          , l = {}
                          , f = l[h] = n ? s.getPixelForDecimal(.5) : s.getPixelForValue(i[h])
                          , u = l[d] = n ? r.getBasePixel() : r.getPixelForValue(i[d]);
                        l.skip = isNaN(f) || isNaN(u),
                        c && (l.options = this.resolveDataElementOptions(o, e.active ? "active" : a),
                        n && (l.options.radius = 0)),
                        this.updateElement(e, o, l, a)
                    }
                    this.updateSharedOptions(l, a, o)
                }
                resolveDataElementOptions(t, e) {
                    const i = this.getParsed(t);
                    let a = super.resolveDataElementOptions(t, e);
                    a.$shared && (a = Object.assign({}, a, {
                        $shared: !1
                    }));
                    const n = a.radius;
                    return "active" !== e && (a.radius = 0),
                    a.radius += d(i && i._custom, n),
                    a
                }
            }
            Yi.id = "bubble",
            Yi.defaults = {
                datasetElementType: !1,
                dataElementType: "point",
                animations: {
                    numbers: {
                        type: "number",
                        properties: ["x", "y", "borderWidth", "radius"]
                    }
                }
            },
            Yi.overrides = {
                scales: {
                    x: {
                        type: "linear"
                    },
                    y: {
                        type: "linear"
                    }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            title: ()=>""
                        }
                    }
                }
            };
            class Fi extends Ri {
                constructor(t, e) {
                    super(t, e),
                    this.enableOptionSharing = !0,
                    this.innerRadius = void 0,
                    this.outerRadius = void 0,
                    this.offsetX = void 0,
                    this.offsetY = void 0
                }
                linkScales() {}
                parse(t, e) {
                    const i = this.getDataset().data
                      , a = this._cachedMeta;
                    if (!1 === this._parsing)
                        a._parsed = i;
                    else {
                        let n, s, r = t=>+i[t];
                        if (l(i[t])) {
                            const {key: t="value"} = this._parsing;
                            r = e=>+O(i[e], t)
                        }
                        for (n = t,
                        s = t + e; n < s; ++n)
                            a._parsed[n] = r(n)
                    }
                }
                _getRotation() {
                    return Z(this.options.rotation - 90)
                }
                _getCircumference() {
                    return Z(this.options.circumference)
                }
                _getRotationExtents() {
                    let t = L
                      , e = -L;
                    for (let i = 0; i < this.chart.data.datasets.length; ++i)
                        if (this.chart.isDatasetVisible(i)) {
                            const a = this.chart.getDatasetMeta(i).controller
                              , n = a._getRotation()
                              , s = a._getCircumference();
                            t = Math.min(t, n),
                            e = Math.max(e, n + s)
                        }
                    return {
                        rotation: t,
                        circumference: e - t
                    }
                }
                update(t) {
                    const e = this.chart
                      , {chartArea: i} = e
                      , a = this._cachedMeta
                      , n = a.data
                      , s = this.getMaxBorderWidth() + this.getMaxOffset(n) + this.options.spacing
                      , r = Math.max((Math.min(i.width, i.height) - s) / 2, 0)
                      , o = Math.min((l = this.options.cutout,
                    c = r,
                    "string" == typeof l && l.endsWith("%") ? parseFloat(l) / 100 : l / c), 1);
                    var l, c;
                    const h = this._getRingWeight(this.index)
                      , {circumference: d, rotation: u} = this._getRotationExtents()
                      , {ratioX: m, ratioY: p, offsetX: g, offsetY: b} = function(t, e, i) {
                        let a = 1
                          , n = 1
                          , s = 0
                          , r = 0;
                        if (e < L) {
                            const o = t
                              , l = o + e
                              , c = Math.cos(o)
                              , h = Math.sin(o)
                              , d = Math.cos(l)
                              , f = Math.sin(l)
                              , u = (t,e,a)=>q(t, o, l, !0) ? 1 : Math.max(e, e * i, a, a * i)
                              , m = (t,e,a)=>q(t, o, l, !0) ? -1 : Math.min(e, e * i, a, a * i)
                              , p = u(0, c, d)
                              , g = u(T, h, f)
                              , b = m(R, c, d)
                              , x = m(R + T, h, f);
                            a = (p - b) / 2,
                            n = (g - x) / 2,
                            s = -(p + b) / 2,
                            r = -(g + x) / 2
                        }
                        return {
                            ratioX: a,
                            ratioY: n,
                            offsetX: s,
                            offsetY: r
                        }
                    }(u, d, o)
                      , x = (i.width - s) / m
                      , y = (i.height - s) / p
                      , k = Math.max(Math.min(x, y) / 2, 0)
                      , _ = f(this.options.radius, k)
                      , w = (_ - Math.max(_ * o, 0)) / this._getVisibleDatasetWeightTotal();
                    this.offsetX = g * _,
                    this.offsetY = b * _,
                    a.total = this.calculateTotal(),
                    this.outerRadius = _ - w * this._getRingWeightOffset(this.index),
                    this.innerRadius = Math.max(this.outerRadius - w * h, 0),
                    this.updateElements(n, 0, n.length, t)
                }
                _circumference(t, e) {
                    const i = this.options
                      , a = this._cachedMeta
                      , n = this._getCircumference();
                    return e && i.animation.animateRotate || !this.chart.getDataVisibility(t) || null === a._parsed[t] || a.data[t].hidden ? 0 : this.calculateCircumference(a._parsed[t] * n / L)
                }
                updateElements(t, e, i, a) {
                    const n = "reset" === a
                      , s = this.chart
                      , r = s.chartArea
                      , o = s.options.animation
                      , l = (r.left + r.right) / 2
                      , c = (r.top + r.bottom) / 2
                      , h = n && o.animateScale
                      , d = h ? 0 : this.innerRadius
                      , f = h ? 0 : this.outerRadius
                      , u = this.resolveDataElementOptions(e, a)
                      , m = this.getSharedOptions(u)
                      , p = this.includeOptions(a, m);
                    let g, b = this._getRotation();
                    for (g = 0; g < e; ++g)
                        b += this._circumference(g, n);
                    for (g = e; g < e + i; ++g) {
                        const e = this._circumference(g, n)
                          , i = t[g]
                          , s = {
                            x: l + this.offsetX,
                            y: c + this.offsetY,
                            startAngle: b,
                            endAngle: b + e,
                            circumference: e,
                            outerRadius: f,
                            innerRadius: d
                        };
                        p && (s.options = m || this.resolveDataElementOptions(g, i.active ? "active" : a)),
                        b += e,
                        this.updateElement(i, g, s, a)
                    }
                    this.updateSharedOptions(m, a, u)
                }
                calculateTotal() {
                    const t = this._cachedMeta
                      , e = t.data;
                    let i, a = 0;
                    for (i = 0; i < e.length; i++) {
                        const n = t._parsed[i];
                        null === n || isNaN(n) || !this.chart.getDataVisibility(i) || e[i].hidden || (a += Math.abs(n))
                    }
                    return a
                }
                calculateCircumference(t) {
                    const e = this._cachedMeta.total;
                    return e > 0 && !isNaN(t) ? L * (Math.abs(t) / e) : 0
                }
                getLabelAndValue(t) {
                    const e = this._cachedMeta
                      , i = this.chart
                      , a = i.data.labels || []
                      , n = ei(e._parsed[t], i.options.locale);
                    return {
                        label: a[t] || "",
                        value: n
                    }
                }
                getMaxBorderWidth(t) {
                    let e = 0;
                    const i = this.chart;
                    let a, n, s, r, o;
                    if (!t)
                        for (a = 0,
                        n = i.data.datasets.length; a < n; ++a)
                            if (i.isDatasetVisible(a)) {
                                s = i.getDatasetMeta(a),
                                t = s.data,
                                r = s.controller;
                                break
                            }
                    if (!t)
                        return 0;
                    for (a = 0,
                    n = t.length; a < n; ++a)
                        o = r.resolveDataElementOptions(a),
                        "inner" !== o.borderAlign && (e = Math.max(e, o.borderWidth || 0, o.hoverBorderWidth || 0));
                    return e
                }
                getMaxOffset(t) {
                    let e = 0;
                    for (let i = 0, a = t.length; i < a; ++i) {
                        const t = this.resolveDataElementOptions(i);
                        e = Math.max(e, t.offset || 0, t.hoverOffset || 0)
                    }
                    return e
                }
                _getRingWeightOffset(t) {
                    let e = 0;
                    for (let i = 0; i < t; ++i)
                        this.chart.isDatasetVisible(i) && (e += this._getRingWeight(i));
                    return e
                }
                _getRingWeight(t) {
                    return Math.max(d(this.chart.data.datasets[t].weight, 1), 0)
                }
                _getVisibleDatasetWeightTotal() {
                    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1
                }
            }
            Fi.id = "doughnut",
            Fi.defaults = {
                datasetElementType: !1,
                dataElementType: "arc",
                animation: {
                    animateRotate: !0,
                    animateScale: !1
                },
                animations: {
                    numbers: {
                        type: "number",
                        properties: ["circumference", "endAngle", "innerRadius", "outerRadius", "startAngle", "x", "y", "offset", "borderWidth", "spacing"]
                    }
                },
                cutout: "50%",
                rotation: 0,
                circumference: 360,
                radius: "100%",
                spacing: 0,
                indexAxis: "r"
            },
            Fi.descriptors = {
                _scriptable: t=>"spacing" !== t,
                _indexable: t=>"spacing" !== t
            },
            Fi.overrides = {
                aspectRatio: 1,
                plugins: {
                    legend: {
                        labels: {
                            generateLabels(t) {
                                const e = t.data;
                                if (e.labels.length && e.datasets.length) {
                                    const {labels: {pointStyle: i}} = t.legend.options;
                                    return e.labels.map(((e,a)=>{
                                        const n = t.getDatasetMeta(0).controller.getStyle(a);
                                        return {
                                            text: e,
                                            fillStyle: n.backgroundColor,
                                            strokeStyle: n.borderColor,
                                            lineWidth: n.borderWidth,
                                            pointStyle: i,
                                            hidden: !t.getDataVisibility(a),
                                            index: a
                                        }
                                    }
                                    ))
                                }
                                return []
                            }
                        },
                        onClick(t, e, i) {
                            i.chart.toggleDataVisibility(e.index),
                            i.chart.update()
                        }
                    },
                    tooltip: {
                        callbacks: {
                            title: ()=>"",
                            label(t) {
                                let e = t.label;
                                const i = ": " + t.formattedValue;
                                return o(e) ? (e = e.slice(),
                                e[0] += i) : e += i,
                                e
                            }
                        }
                    }
                }
            };
            class ji extends Ri {
                initialize() {
                    this.enableOptionSharing = !0,
                    super.initialize()
                }
                update(t) {
                    const e = this._cachedMeta
                      , {dataset: i, data: a=[], _dataset: n} = e
                      , s = this.chart._animationsDisabled;
                    let {start: r, count: o} = function(t, e, i) {
                        const a = e.length;
                        let n = 0
                          , s = a;
                        if (t._sorted) {
                            const {iScale: r, _parsed: o} = t
                              , l = r.axis
                              , {min: c, max: h, minDefined: d, maxDefined: f} = r.getUserBounds();
                            d && (n = K(Math.min(ue(o, r.axis, c).lo, i ? a : ue(e, l, r.getPixelForValue(c)).lo), 0, a - 1)),
                            s = f ? K(Math.max(ue(o, r.axis, h).hi + 1, i ? 0 : ue(e, l, r.getPixelForValue(h)).hi + 1), n, a) - n : a - n
                        }
                        return {
                            start: n,
                            count: s
                        }
                    }(e, a, s);
                    this._drawStart = r,
                    this._drawCount = o,
                    function(t) {
                        const {xScale: e, yScale: i, _scaleRanges: a} = t
                          , n = {
                            xmin: e.min,
                            xmax: e.max,
                            ymin: i.min,
                            ymax: i.max
                        };
                        if (!a)
                            return t._scaleRanges = n,
                            !0;
                        const s = a.xmin !== e.min || a.xmax !== e.max || a.ymin !== i.min || a.ymax !== i.max;
                        return Object.assign(a, n),
                        s
                    }(e) && (r = 0,
                    o = a.length),
                    i._chart = this.chart,
                    i._datasetIndex = this.index,
                    i._decimated = !!n._decimated,
                    i.points = a;
                    const l = this.resolveDatasetElementOptions(t);
                    this.options.showLine || (l.borderWidth = 0),
                    l.segment = this.options.segment,
                    this.updateElement(i, void 0, {
                        animated: !s,
                        options: l
                    }, t),
                    this.updateElements(a, r, o, t)
                }
                updateElements(t, e, i, a) {
                    const n = "reset" === a
                      , {iScale: s, vScale: o, _stacked: l, _dataset: c} = this._cachedMeta
                      , h = this.resolveDataElementOptions(e, a)
                      , d = this.getSharedOptions(h)
                      , f = this.includeOptions(a, d)
                      , u = s.axis
                      , m = o.axis
                      , {spanGaps: p, segment: g} = this.options
                      , b = F(p) ? p : Number.POSITIVE_INFINITY
                      , x = this.chart._animationsDisabled || n || "none" === a;
                    let y = e > 0 && this.getParsed(e - 1);
                    for (let h = e; h < e + i; ++h) {
                        const e = t[h]
                          , i = this.getParsed(h)
                          , p = x ? e : {}
                          , k = r(i[m])
                          , _ = p[u] = s.getPixelForValue(i[u], h)
                          , w = p[m] = n || k ? o.getBasePixel() : o.getPixelForValue(l ? this.applyStack(o, i, l) : i[m], h);
                        p.skip = isNaN(_) || isNaN(w) || k,
                        p.stop = h > 0 && i[u] - y[u] > b,
                        g && (p.parsed = i,
                        p.raw = c.data[h]),
                        f && (p.options = d || this.resolveDataElementOptions(h, e.active ? "active" : a)),
                        x || this.updateElement(e, h, p, a),
                        y = i
                    }
                    this.updateSharedOptions(d, a, h)
                }
                getMaxOverflow() {
                    const t = this._cachedMeta
                      , e = t.dataset
                      , i = e.options && e.options.borderWidth || 0
                      , a = t.data || [];
                    if (!a.length)
                        return i;
                    const n = a[0].size(this.resolveDataElementOptions(0))
                      , s = a[a.length - 1].size(this.resolveDataElementOptions(a.length - 1));
                    return Math.max(i, n, s) / 2
                }
                draw() {
                    const t = this._cachedMeta;
                    t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis),
                    super.draw()
                }
            }
            ji.id = "line",
            ji.defaults = {
                datasetElementType: "line",
                dataElementType: "point",
                showLine: !0,
                spanGaps: !1
            },
            ji.overrides = {
                scales: {
                    _index_: {
                        type: "category"
                    },
                    _value_: {
                        type: "linear"
                    }
                }
            };
            class Ni extends Ri {
                constructor(t, e) {
                    super(t, e),
                    this.innerRadius = void 0,
                    this.outerRadius = void 0
                }
                getLabelAndValue(t) {
                    const e = this._cachedMeta
                      , i = this.chart
                      , a = i.data.labels || []
                      , n = ei(e._parsed[t].r, i.options.locale);
                    return {
                        label: a[t] || "",
                        value: n
                    }
                }
                update(t) {
                    const e = this._cachedMeta.data;
                    this._updateRadius(),
                    this.updateElements(e, 0, e.length, t)
                }
                _updateRadius() {
                    const t = this.chart
                      , e = t.chartArea
                      , i = t.options
                      , a = Math.min(e.right - e.left, e.bottom - e.top)
                      , n = Math.max(a / 2, 0)
                      , s = (n - Math.max(i.cutoutPercentage ? n / 100 * i.cutoutPercentage : 1, 0)) / t.getVisibleDatasetCount();
                    this.outerRadius = n - s * this.index,
                    this.innerRadius = this.outerRadius - s
                }
                updateElements(t, e, i, a) {
                    const n = "reset" === a
                      , s = this.chart
                      , r = this.getDataset()
                      , o = s.options.animation
                      , l = this._cachedMeta.rScale
                      , c = l.xCenter
                      , h = l.yCenter
                      , d = l.getIndexAngle(0) - .5 * R;
                    let f, u = d;
                    const m = 360 / this.countVisibleElements();
                    for (f = 0; f < e; ++f)
                        u += this._computeAngle(f, a, m);
                    for (f = e; f < e + i; f++) {
                        const e = t[f];
                        let i = u
                          , p = u + this._computeAngle(f, a, m)
                          , g = s.getDataVisibility(f) ? l.getDistanceFromCenterForValue(r.data[f]) : 0;
                        u = p,
                        n && (o.animateScale && (g = 0),
                        o.animateRotate && (i = p = d));
                        const b = {
                            x: c,
                            y: h,
                            innerRadius: 0,
                            outerRadius: g,
                            startAngle: i,
                            endAngle: p,
                            options: this.resolveDataElementOptions(f, e.active ? "active" : a)
                        };
                        this.updateElement(e, f, b, a)
                    }
                }
                countVisibleElements() {
                    const t = this.getDataset()
                      , e = this._cachedMeta;
                    let i = 0;
                    return e.data.forEach(((e,a)=>{
                        !isNaN(t.data[a]) && this.chart.getDataVisibility(a) && i++
                    }
                    )),
                    i
                }
                _computeAngle(t, e, i) {
                    return this.chart.getDataVisibility(t) ? Z(this.resolveDataElementOptions(t, e).angle || i) : 0
                }
            }
            Ni.id = "polarArea",
            Ni.defaults = {
                dataElementType: "arc",
                animation: {
                    animateRotate: !0,
                    animateScale: !0
                },
                animations: {
                    numbers: {
                        type: "number",
                        properties: ["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"]
                    }
                },
                indexAxis: "r",
                startAngle: 0
            },
            Ni.overrides = {
                aspectRatio: 1,
                plugins: {
                    legend: {
                        labels: {
                            generateLabels(t) {
                                const e = t.data;
                                if (e.labels.length && e.datasets.length) {
                                    const {labels: {pointStyle: i}} = t.legend.options;
                                    return e.labels.map(((e,a)=>{
                                        const n = t.getDatasetMeta(0).controller.getStyle(a);
                                        return {
                                            text: e,
                                            fillStyle: n.backgroundColor,
                                            strokeStyle: n.borderColor,
                                            lineWidth: n.borderWidth,
                                            pointStyle: i,
                                            hidden: !t.getDataVisibility(a),
                                            index: a
                                        }
                                    }
                                    ))
                                }
                                return []
                            }
                        },
                        onClick(t, e, i) {
                            i.chart.toggleDataVisibility(e.index),
                            i.chart.update()
                        }
                    },
                    tooltip: {
                        callbacks: {
                            title: ()=>"",
                            label: t=>t.chart.data.labels[t.dataIndex] + ": " + t.formattedValue
                        }
                    }
                },
                scales: {
                    r: {
                        type: "radialLinear",
                        angleLines: {
                            display: !1
                        },
                        beginAtZero: !0,
                        grid: {
                            circular: !0
                        },
                        pointLabels: {
                            display: !1
                        },
                        startAngle: 0
                    }
                }
            };
            class Zi extends Fi {
            }
            Zi.id = "pie",
            Zi.defaults = {
                cutout: 0,
                rotation: 0,
                circumference: 360,
                radius: "100%"
            };
            class Vi extends Ri {
                getLabelAndValue(t) {
                    const e = this._cachedMeta.vScale
                      , i = this.getParsed(t);
                    return {
                        label: e.getLabels()[t],
                        value: "" + e.getLabelForValue(i[e.axis])
                    }
                }
                update(t) {
                    const e = this._cachedMeta
                      , i = e.dataset
                      , a = e.data || []
                      , n = e.iScale.getLabels();
                    if (i.points = a,
                    "resize" !== t) {
                        const e = this.resolveDatasetElementOptions(t);
                        this.options.showLine || (e.borderWidth = 0);
                        const s = {
                            _loop: !0,
                            _fullLoop: n.length === a.length,
                            options: e
                        };
                        this.updateElement(i, void 0, s, t)
                    }
                    this.updateElements(a, 0, a.length, t)
                }
                updateElements(t, e, i, a) {
                    const n = this.getDataset()
                      , s = this._cachedMeta.rScale
                      , r = "reset" === a;
                    for (let o = e; o < e + i; o++) {
                        const e = t[o]
                          , i = this.resolveDataElementOptions(o, e.active ? "active" : a)
                          , l = s.getPointPositionForValue(o, n.data[o])
                          , c = r ? s.xCenter : l.x
                          , h = r ? s.yCenter : l.y
                          , d = {
                            x: c,
                            y: h,
                            angle: l.angle,
                            skip: isNaN(c) || isNaN(h),
                            options: i
                        };
                        this.updateElement(e, o, d, a)
                    }
                }
            }
            Vi.id = "radar",
            Vi.defaults = {
                datasetElementType: "line",
                dataElementType: "point",
                indexAxis: "r",
                showLine: !0,
                elements: {
                    line: {
                        fill: "start"
                    }
                }
            },
            Vi.overrides = {
                aspectRatio: 1,
                scales: {
                    r: {
                        type: "radialLinear"
                    }
                }
            };
            class Wi extends ji {
            }
            Wi.id = "scatter",
            Wi.defaults = {
                showLine: !1,
                fill: !1
            },
            Wi.overrides = {
                interaction: {
                    mode: "point"
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            title: ()=>"",
                            label: t=>"(" + t.label + ", " + t.formattedValue + ")"
                        }
                    }
                },
                scales: {
                    x: {
                        type: "linear"
                    },
                    y: {
                        type: "linear"
                    }
                }
            };
            var Ui = Object.freeze({
                __proto__: null,
                BarController: Xi,
                BubbleController: Yi,
                DoughnutController: Fi,
                LineController: ji,
                PolarAreaController: Ni,
                PieController: Zi,
                RadarController: Vi,
                ScatterController: Wi
            });
            function Hi() {
                throw new Error("This method is not implemented: Check that a complete date adapter is provided.")
            }
            class $i {
                constructor(t) {
                    this.options = t || {}
                }
                formats() {
                    return Hi()
                }
                parse(t, e) {
                    return Hi()
                }
                format(t, e) {
                    return Hi()
                }
                add(t, e, i) {
                    return Hi()
                }
                diff(t, e, i) {
                    return Hi()
                }
                startOf(t, e, i) {
                    return Hi()
                }
                endOf(t, e) {
                    return Hi()
                }
            }
            $i.override = function(t) {
                Object.assign($i.prototype, t)
            }
            ;
            var qi = {
                _date: $i
            };
            function Ki(t, e) {
                return "native"in t ? {
                    x: t.x,
                    y: t.y
                } : We(t, e)
            }
            function Gi(t, e, i, a) {
                const {controller: n, data: s, _sorted: r} = t
                  , o = n._cachedMeta.iScale;
                if (o && e === o.axis && r && s.length) {
                    const t = o._reversePixels ? me : ue;
                    if (!a)
                        return t(s, e, i);
                    if (n._sharedOptions) {
                        const a = s[0]
                          , n = "function" == typeof a.getRange && a.getRange(e);
                        if (n) {
                            const a = t(s, e, i - n)
                              , r = t(s, e, i + n);
                            return {
                                lo: a.lo,
                                hi: r.hi
                            }
                        }
                    }
                }
                return {
                    lo: 0,
                    hi: s.length - 1
                }
            }
            function Ji(t, e, i, a, n) {
                const s = t.getSortedVisibleDatasetMetas()
                  , r = i[e];
                for (let t = 0, i = s.length; t < i; ++t) {
                    const {index: i, data: o} = s[t]
                      , {lo: l, hi: c} = Gi(s[t], e, r, n);
                    for (let t = l; t <= c; ++t) {
                        const e = o[t];
                        e.skip || a(e, i, t)
                    }
                }
            }
            function Qi(t, e, i, a) {
                const n = [];
                if (!Ht(e, t.chartArea, t._minPadding))
                    return n;
                return Ji(t, i, e, (function(t, i, s) {
                    t.inRange(e.x, e.y, a) && n.push({
                        element: t,
                        datasetIndex: i,
                        index: s
                    })
                }
                ), !0),
                n
            }
            function ta(t, e, i, a, n) {
                const s = function(t) {
                    const e = -1 !== t.indexOf("x")
                      , i = -1 !== t.indexOf("y");
                    return function(t, a) {
                        const n = e ? Math.abs(t.x - a.x) : 0
                          , s = i ? Math.abs(t.y - a.y) : 0;
                        return Math.sqrt(Math.pow(n, 2) + Math.pow(s, 2))
                    }
                }(i);
                let r = Number.POSITIVE_INFINITY
                  , o = [];
                if (!Ht(e, t.chartArea, t._minPadding))
                    return o;
                return Ji(t, i, e, (function(i, l, c) {
                    if (a && !i.inRange(e.x, e.y, n))
                        return;
                    const h = i.getCenterPoint(n);
                    if (!Ht(h, t.chartArea, t._minPadding) && !i.inRange(e.x, e.y, n))
                        return;
                    const d = s(e, h);
                    d < r ? (o = [{
                        element: i,
                        datasetIndex: l,
                        index: c
                    }],
                    r = d) : d === r && o.push({
                        element: i,
                        datasetIndex: l,
                        index: c
                    })
                }
                )),
                o
            }
            function ea(t, e, i, a) {
                const n = Ki(e, t)
                  , s = []
                  , r = i.axis
                  , o = "x" === r ? "inXRange" : "inYRange";
                let l = !1;
                return function(t, e) {
                    const i = t.getSortedVisibleDatasetMetas();
                    let a, n, s;
                    for (let t = 0, r = i.length; t < r; ++t) {
                        ({index: a, data: n} = i[t]);
                        for (let t = 0, i = n.length; t < i; ++t)
                            s = n[t],
                            s.skip || e(s, a, t)
                    }
                }(t, ((t,e,i)=>{
                    t[o](n[r], a) && s.push({
                        element: t,
                        datasetIndex: e,
                        index: i
                    }),
                    t.inRange(n.x, n.y, a) && (l = !0)
                }
                )),
                i.intersect && !l ? [] : s
            }
            var ia = {
                modes: {
                    index(t, e, i, a) {
                        const n = Ki(e, t)
                          , s = i.axis || "x"
                          , r = i.intersect ? Qi(t, n, s, a) : ta(t, n, s, !1, a)
                          , o = [];
                        return r.length ? (t.getSortedVisibleDatasetMetas().forEach((t=>{
                            const e = r[0].index
                              , i = t.data[e];
                            i && !i.skip && o.push({
                                element: i,
                                datasetIndex: t.index,
                                index: e
                            })
                        }
                        )),
                        o) : []
                    },
                    dataset(t, e, i, a) {
                        const n = Ki(e, t)
                          , s = i.axis || "xy";
                        let r = i.intersect ? Qi(t, n, s, a) : ta(t, n, s, !1, a);
                        if (r.length > 0) {
                            const e = r[0].datasetIndex
                              , i = t.getDatasetMeta(e).data;
                            r = [];
                            for (let t = 0; t < i.length; ++t)
                                r.push({
                                    element: i[t],
                                    datasetIndex: e,
                                    index: t
                                })
                        }
                        return r
                    },
                    point: (t,e,i,a)=>Qi(t, Ki(e, t), i.axis || "xy", a),
                    nearest: (t,e,i,a)=>ta(t, Ki(e, t), i.axis || "xy", i.intersect, a),
                    x: (t,e,i,a)=>ea(t, e, {
                        axis: "x",
                        intersect: i.intersect
                    }, a),
                    y: (t,e,i,a)=>ea(t, e, {
                        axis: "y",
                        intersect: i.intersect
                    }, a)
                }
            };
            const aa = ["left", "top", "right", "bottom"];
            function na(t, e) {
                return t.filter((t=>t.pos === e))
            }
            function sa(t, e) {
                return t.filter((t=>-1 === aa.indexOf(t.pos) && t.box.axis === e))
            }
            function ra(t, e) {
                return t.sort(((t,i)=>{
                    const a = e ? i : t
                      , n = e ? t : i;
                    return a.weight === n.weight ? a.index - n.index : a.weight - n.weight
                }
                ))
            }
            function oa(t, e) {
                const i = function(t) {
                    const e = {};
                    for (const i of t) {
                        const {stack: t, pos: a, stackWeight: n} = i;
                        if (!t || !aa.includes(a))
                            continue;
                        const s = e[t] || (e[t] = {
                            count: 0,
                            placed: 0,
                            weight: 0,
                            size: 0
                        });
                        s.count++,
                        s.weight += n
                    }
                    return e
                }(t)
                  , {vBoxMaxWidth: a, hBoxMaxHeight: n} = e;
                let s, r, o;
                for (s = 0,
                r = t.length; s < r; ++s) {
                    o = t[s];
                    const {fullSize: r} = o.box
                      , l = i[o.stack]
                      , c = l && o.stackWeight / l.weight;
                    o.horizontal ? (o.width = c ? c * a : r && e.availableWidth,
                    o.height = n) : (o.width = a,
                    o.height = c ? c * n : r && e.availableHeight)
                }
                return i
            }
            function la(t, e, i, a) {
                return Math.max(t[i], e[i]) + Math.max(t[a], e[a])
            }
            function ca(t, e) {
                t.top = Math.max(t.top, e.top),
                t.left = Math.max(t.left, e.left),
                t.bottom = Math.max(t.bottom, e.bottom),
                t.right = Math.max(t.right, e.right)
            }
            function ha(t, e, i, a) {
                const {pos: n, box: s} = i
                  , r = t.maxPadding;
                if (!l(n)) {
                    i.size && (t[n] -= i.size);
                    const e = a[i.stack] || {
                        size: 0,
                        count: 1
                    };
                    e.size = Math.max(e.size, i.horizontal ? s.height : s.width),
                    i.size = e.size / e.count,
                    t[n] += i.size
                }
                s.getPadding && ca(r, s.getPadding());
                const o = Math.max(0, e.outerWidth - la(r, t, "left", "right"))
                  , c = Math.max(0, e.outerHeight - la(r, t, "top", "bottom"))
                  , h = o !== t.w
                  , d = c !== t.h;
                return t.w = o,
                t.h = c,
                i.horizontal ? {
                    same: h,
                    other: d
                } : {
                    same: d,
                    other: h
                }
            }
            function da(t, e) {
                const i = e.maxPadding;
                function a(t) {
                    const a = {
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0
                    };
                    return t.forEach((t=>{
                        a[t] = Math.max(e[t], i[t])
                    }
                    )),
                    a
                }
                return a(t ? ["left", "right"] : ["top", "bottom"])
            }
            function fa(t, e, i, a) {
                const n = [];
                let s, r, o, l, c, h;
                for (s = 0,
                r = t.length,
                c = 0; s < r; ++s) {
                    o = t[s],
                    l = o.box,
                    l.update(o.width || e.w, o.height || e.h, da(o.horizontal, e));
                    const {same: r, other: d} = ha(e, i, o, a);
                    c |= r && n.length,
                    h = h || d,
                    l.fullSize || n.push(o)
                }
                return c && fa(n, e, i, a) || h
            }
            function ua(t, e, i, a, n) {
                t.top = i,
                t.left = e,
                t.right = e + a,
                t.bottom = i + n,
                t.width = a,
                t.height = n
            }
            function ma(t, e, i, a) {
                const n = i.padding;
                let {x: s, y: r} = e;
                for (const o of t) {
                    const t = o.box
                      , l = a[o.stack] || {
                        count: 1,
                        placed: 0,
                        weight: 1
                    }
                      , c = o.stackWeight / l.weight || 1;
                    if (o.horizontal) {
                        const a = e.w * c
                          , s = l.size || t.height;
                        S(l.start) && (r = l.start),
                        t.fullSize ? ua(t, n.left, r, i.outerWidth - n.right - n.left, s) : ua(t, e.left + l.placed, r, a, s),
                        l.start = r,
                        l.placed += a,
                        r = t.bottom
                    } else {
                        const a = e.h * c
                          , r = l.size || t.width;
                        S(l.start) && (s = l.start),
                        t.fullSize ? ua(t, s, n.top, r, i.outerHeight - n.bottom - n.top) : ua(t, s, e.top + l.placed, r, a),
                        l.start = s,
                        l.placed += a,
                        s = t.right
                    }
                }
                e.x = s,
                e.y = r
            }
            jt.set("layout", {
                autoPadding: !0,
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            });
            var pa = {
                addBox(t, e) {
                    t.boxes || (t.boxes = []),
                    e.fullSize = e.fullSize || !1,
                    e.position = e.position || "top",
                    e.weight = e.weight || 0,
                    e._layers = e._layers || function() {
                        return [{
                            z: 0,
                            draw(t) {
                                e.draw(t)
                            }
                        }]
                    }
                    ,
                    t.boxes.push(e)
                },
                removeBox(t, e) {
                    const i = t.boxes ? t.boxes.indexOf(e) : -1;
                    -1 !== i && t.boxes.splice(i, 1)
                },
                configure(t, e, i) {
                    e.fullSize = i.fullSize,
                    e.position = i.position,
                    e.weight = i.weight
                },
                update(t, e, i, a) {
                    if (!t)
                        return;
                    const n = le(t.options.layout.padding)
                      , s = Math.max(e - n.width, 0)
                      , r = Math.max(i - n.height, 0)
                      , o = function(t) {
                        const e = function(t) {
                            const e = [];
                            let i, a, n, s, r, o;
                            for (i = 0,
                            a = (t || []).length; i < a; ++i)
                                n = t[i],
                                ({position: s, options: {stack: r, stackWeight: o=1}} = n),
                                e.push({
                                    index: i,
                                    box: n,
                                    pos: s,
                                    horizontal: n.isHorizontal(),
                                    weight: n.weight,
                                    stack: r && s + r,
                                    stackWeight: o
                                });
                            return e
                        }(t)
                          , i = ra(e.filter((t=>t.box.fullSize)), !0)
                          , a = ra(na(e, "left"), !0)
                          , n = ra(na(e, "right"))
                          , s = ra(na(e, "top"), !0)
                          , r = ra(na(e, "bottom"))
                          , o = sa(e, "x")
                          , l = sa(e, "y");
                        return {
                            fullSize: i,
                            leftAndTop: a.concat(s),
                            rightAndBottom: n.concat(l).concat(r).concat(o),
                            chartArea: na(e, "chartArea"),
                            vertical: a.concat(n).concat(l),
                            horizontal: s.concat(r).concat(o)
                        }
                    }(t.boxes)
                      , l = o.vertical
                      , c = o.horizontal;
                    m(t.boxes, (t=>{
                        "function" == typeof t.beforeLayout && t.beforeLayout()
                    }
                    ));
                    const h = l.reduce(((t,e)=>e.box.options && !1 === e.box.options.display ? t : t + 1), 0) || 1
                      , d = Object.freeze({
                        outerWidth: e,
                        outerHeight: i,
                        padding: n,
                        availableWidth: s,
                        availableHeight: r,
                        vBoxMaxWidth: s / 2 / h,
                        hBoxMaxHeight: r / 2
                    })
                      , f = Object.assign({}, n);
                    ca(f, le(a));
                    const u = Object.assign({
                        maxPadding: f,
                        w: s,
                        h: r,
                        x: n.left,
                        y: n.top
                    }, n)
                      , p = oa(l.concat(c), d);
                    fa(o.fullSize, u, d, p),
                    fa(l, u, d, p),
                    fa(c, u, d, p) && fa(l, u, d, p),
                    function(t) {
                        const e = t.maxPadding;
                        function i(i) {
                            const a = Math.max(e[i] - t[i], 0);
                            return t[i] += a,
                            a
                        }
                        t.y += i("top"),
                        t.x += i("left"),
                        i("right"),
                        i("bottom")
                    }(u),
                    ma(o.leftAndTop, u, d, p),
                    u.x += u.w,
                    u.y += u.h,
                    ma(o.rightAndBottom, u, d, p),
                    t.chartArea = {
                        left: u.left,
                        top: u.top,
                        right: u.left + u.w,
                        bottom: u.top + u.h,
                        height: u.h,
                        width: u.w
                    },
                    m(o.chartArea, (e=>{
                        const i = e.box;
                        Object.assign(i, t.chartArea),
                        i.update(u.w, u.h, {
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0
                        })
                    }
                    ))
                }
            };
            class ga {
                acquireContext(t, e) {}
                releaseContext(t) {
                    return !1
                }
                addEventListener(t, e, i) {}
                removeEventListener(t, e, i) {}
                getDevicePixelRatio() {
                    return 1
                }
                getMaximumSize(t, e, i, a) {
                    return e = Math.max(0, e || t.width),
                    i = i || t.height,
                    {
                        width: e,
                        height: Math.max(0, a ? Math.floor(e / a) : i)
                    }
                }
                isAttached(t) {
                    return !0
                }
                updateConfig(t) {}
            }
            class ba extends ga {
                acquireContext(t) {
                    return t && t.getContext && t.getContext("2d") || null
                }
                updateConfig(t) {
                    t.options.animation = !1
                }
            }
            const xa = "$chartjs"
              , ya = {
                touchstart: "mousedown",
                touchmove: "mousemove",
                touchend: "mouseup",
                pointerenter: "mouseenter",
                pointerdown: "mousedown",
                pointermove: "mousemove",
                pointerup: "mouseup",
                pointerleave: "mouseout",
                pointerout: "mouseout"
            }
              , ka = t=>null === t || "" === t;
            const _a = !!qe && {
                passive: !0
            };
            function wa(t, e, i) {
                t.canvas.removeEventListener(e, i, _a)
            }
            function va(t, e) {
                for (const i of t)
                    if (i === e || i.contains(e))
                        return !0
            }
            function Oa(t, e, i) {
                const a = t.canvas
                  , n = new MutationObserver((t=>{
                    let e = !1;
                    for (const i of t)
                        e = e || va(i.addedNodes, a),
                        e = e && !va(i.removedNodes, a);
                    e && i()
                }
                ));
                return n.observe(document, {
                    childList: !0,
                    subtree: !0
                }),
                n
            }
            function Ma(t, e, i) {
                const a = t.canvas
                  , n = new MutationObserver((t=>{
                    let e = !1;
                    for (const i of t)
                        e = e || va(i.removedNodes, a),
                        e = e && !va(i.addedNodes, a);
                    e && i()
                }
                ));
                return n.observe(document, {
                    childList: !0,
                    subtree: !0
                }),
                n
            }
            const Sa = new Map;
            let Da = 0;
            function Ia() {
                const t = window.devicePixelRatio;
                t !== Da && (Da = t,
                Sa.forEach(((e,i)=>{
                    i.currentDevicePixelRatio !== t && e()
                }
                )))
            }
            function Ra(t, i, a) {
                const n = t.canvas
                  , s = n && Ye(n);
                if (!s)
                    return;
                const r = e(((t,e)=>{
                    const i = s.clientWidth;
                    a(t, e),
                    i < s.clientWidth && a()
                }
                ), window)
                  , o = new ResizeObserver((t=>{
                    const e = t[0]
                      , i = e.contentRect.width
                      , a = e.contentRect.height;
                    0 === i && 0 === a || r(i, a)
                }
                ));
                return o.observe(s),
                function(t, e) {
                    Sa.size || window.addEventListener("resize", Ia),
                    Sa.set(t, e)
                }(t, r),
                o
            }
            function La(t, e, i) {
                i && i.disconnect(),
                "resize" === e && function(t) {
                    Sa.delete(t),
                    Sa.size || window.removeEventListener("resize", Ia)
                }(t)
            }
            function Pa(t, i, a) {
                const n = t.canvas
                  , s = e((e=>{
                    null !== t.ctx && a(function(t, e) {
                        const i = ya[t.type] || t.type
                          , {x: a, y: n} = We(t, e);
                        return {
                            type: i,
                            chart: e,
                            native: t,
                            x: void 0 !== a ? a : null,
                            y: void 0 !== n ? n : null
                        }
                    }(e, t))
                }
                ), t, (t=>{
                    const e = t[0];
                    return [e, e.offsetX, e.offsetY]
                }
                ));
                return function(t, e, i) {
                    t.addEventListener(e, i, _a)
                }(n, i, s),
                s
            }
            class Ca extends ga {
                acquireContext(t, e) {
                    const i = t && t.getContext && t.getContext("2d");
                    return i && i.canvas === t ? (function(t, e) {
                        const i = t.style
                          , a = t.getAttribute("height")
                          , n = t.getAttribute("width");
                        if (t[xa] = {
                            initial: {
                                height: a,
                                width: n,
                                style: {
                                    display: i.display,
                                    height: i.height,
                                    width: i.width
                                }
                            }
                        },
                        i.display = i.display || "block",
                        i.boxSizing = i.boxSizing || "border-box",
                        ka(n)) {
                            const e = Ke(t, "width");
                            void 0 !== e && (t.width = e)
                        }
                        if (ka(a))
                            if ("" === t.style.height)
                                t.height = t.width / (e || 2);
                            else {
                                const e = Ke(t, "height");
                                void 0 !== e && (t.height = e)
                            }
                    }(t, e),
                    i) : null
                }
                releaseContext(t) {
                    const e = t.canvas;
                    if (!e[xa])
                        return !1;
                    const i = e[xa].initial;
                    ["height", "width"].forEach((t=>{
                        const a = i[t];
                        r(a) ? e.removeAttribute(t) : e.setAttribute(t, a)
                    }
                    ));
                    const a = i.style || {};
                    return Object.keys(a).forEach((t=>{
                        e.style[t] = a[t]
                    }
                    )),
                    e.width = e.width,
                    delete e[xa],
                    !0
                }
                addEventListener(t, e, i) {
                    this.removeEventListener(t, e);
                    const a = t.$proxies || (t.$proxies = {})
                      , n = {
                        attach: Oa,
                        detach: Ma,
                        resize: Ra
                    }[e] || Pa;
                    a[e] = n(t, e, i)
                }
                removeEventListener(t, e) {
                    const i = t.$proxies || (t.$proxies = {})
                      , a = i[e];
                    if (!a)
                        return;
                    ({
                        attach: La,
                        detach: La,
                        resize: La
                    }[e] || wa)(t, e, a),
                    i[e] = void 0
                }
                getDevicePixelRatio() {
                    return window.devicePixelRatio
                }
                getMaximumSize(t, e, i, a) {
                    return He(t, e, i, a)
                }
                isAttached(t) {
                    const e = Ye(t);
                    return !(!e || !e.isConnected)
                }
            }
            class Aa {
                constructor() {
                    this.x = void 0,
                    this.y = void 0,
                    this.active = !1,
                    this.options = void 0,
                    this.$animations = void 0
                }
                tooltipPosition(t) {
                    const {x: e, y: i} = this.getProps(["x", "y"], t);
                    return {
                        x: e,
                        y: i
                    }
                }
                hasValue() {
                    return F(this.x) && F(this.y)
                }
                getProps(t, e) {
                    const i = this.$animations;
                    if (!e || !i)
                        return this;
                    const a = {};
                    return t.forEach((t=>{
                        a[t] = i[t] && i[t].active() ? i[t]._to : this[t]
                    }
                    )),
                    a
                }
            }
            Aa.defaults = {},
            Aa.defaultRoutes = void 0;
            const Ta = {
                values: t=>o(t) ? t : "" + t,
                numeric(t, e, i) {
                    if (0 === t)
                        return "0";
                    const a = this.chart.options.locale;
                    let n, s = t;
                    if (i.length > 1) {
                        const e = Math.max(Math.abs(i[0].value), Math.abs(i[i.length - 1].value));
                        (e < 1e-4 || e > 1e15) && (n = "scientific"),
                        s = function(t, e) {
                            let i = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
                            Math.abs(i) >= 1 && t !== Math.floor(t) && (i = t - Math.floor(t));
                            return i
                        }(t, i)
                    }
                    const r = B(Math.abs(s))
                      , o = Math.max(Math.min(-1 * Math.floor(r), 20), 0)
                      , l = {
                        notation: n,
                        minimumFractionDigits: o,
                        maximumFractionDigits: o
                    };
                    return Object.assign(l, this.options.ticks.format),
                    ei(t, a, l)
                },
                logarithmic(t, e, i) {
                    if (0 === t)
                        return "0";
                    const a = t / Math.pow(10, Math.floor(B(t)));
                    return 1 === a || 2 === a || 5 === a ? Ta.numeric.call(this, t, e, i) : ""
                }
            };
            var Ea = {
                formatters: Ta
            };
            function za(t, e) {
                const i = t.options.ticks
                  , a = i.maxTicksLimit || function(t) {
                    const e = t.options.offset
                      , i = t._tickSize()
                      , a = t._length / i + (e ? 0 : 1)
                      , n = t._maxLength / i;
                    return Math.floor(Math.min(a, n))
                }(t)
                  , n = i.major.enabled ? function(t) {
                    const e = [];
                    let i, a;
                    for (i = 0,
                    a = t.length; i < a; i++)
                        t[i].major && e.push(i);
                    return e
                }(e) : []
                  , s = n.length
                  , o = n[0]
                  , l = n[s - 1]
                  , c = [];
                if (s > a)
                    return function(t, e, i, a) {
                        let n, s = 0, r = i[0];
                        for (a = Math.ceil(a),
                        n = 0; n < t.length; n++)
                            n === r && (e.push(t[n]),
                            s++,
                            r = i[s * a])
                    }(e, c, n, s / a),
                    c;
                const h = function(t, e, i) {
                    const a = function(t) {
                        const e = t.length;
                        let i, a;
                        if (e < 2)
                            return !1;
                        for (a = t[0],
                        i = 1; i < e; ++i)
                            if (t[i] - t[i - 1] !== a)
                                return !1;
                        return a
                    }(t)
                      , n = e.length / i;
                    if (!a)
                        return Math.max(n, 1);
                    const s = function(t) {
                        const e = []
                          , i = Math.sqrt(t);
                        let a;
                        for (a = 1; a < i; a++)
                            t % a == 0 && (e.push(a),
                            e.push(t / a));
                        return i === (0 | i) && e.push(i),
                        e.sort(((t,e)=>t - e)).pop(),
                        e
                    }(a);
                    for (let t = 0, e = s.length - 1; t < e; t++) {
                        const e = s[t];
                        if (e > n)
                            return e
                    }
                    return Math.max(n, 1)
                }(n, e, a);
                if (s > 0) {
                    let t, i;
                    const a = s > 1 ? Math.round((l - o) / (s - 1)) : null;
                    for (Ba(e, c, h, r(a) ? 0 : o - a, o),
                    t = 0,
                    i = s - 1; t < i; t++)
                        Ba(e, c, h, n[t], n[t + 1]);
                    return Ba(e, c, h, l, r(a) ? e.length : l + a),
                    c
                }
                return Ba(e, c, h),
                c
            }
            function Ba(t, e, i, a, n) {
                const s = d(a, 0)
                  , r = Math.min(d(n, t.length), t.length);
                let o, l, c, h = 0;
                for (i = Math.ceil(i),
                n && (o = n - a,
                i = o / Math.floor(o / i)),
                c = s; c < 0; )
                    h++,
                    c = Math.round(s + h * i);
                for (l = Math.max(s, 0); l < r; l++)
                    l === c && (e.push(t[l]),
                    h++,
                    c = Math.round(s + h * i))
            }
            jt.set("scale", {
                display: !0,
                offset: !1,
                reverse: !1,
                beginAtZero: !1,
                bounds: "ticks",
                grace: 0,
                grid: {
                    display: !0,
                    lineWidth: 1,
                    drawBorder: !0,
                    drawOnChartArea: !0,
                    drawTicks: !0,
                    tickLength: 8,
                    tickWidth: (t,e)=>e.lineWidth,
                    tickColor: (t,e)=>e.color,
                    offset: !1,
                    borderDash: [],
                    borderDashOffset: 0,
                    borderWidth: 1
                },
                title: {
                    display: !1,
                    text: "",
                    padding: {
                        top: 4,
                        bottom: 4
                    }
                },
                ticks: {
                    minRotation: 0,
                    maxRotation: 50,
                    mirror: !1,
                    textStrokeWidth: 0,
                    textStrokeColor: "",
                    padding: 3,
                    display: !0,
                    autoSkip: !0,
                    autoSkipPadding: 3,
                    labelOffset: 0,
                    callback: Ea.formatters.values,
                    minor: {},
                    major: {},
                    align: "center",
                    crossAlign: "near",
                    showLabelBackdrop: !1,
                    backdropColor: "rgba(255, 255, 255, 0.75)",
                    backdropPadding: 2
                }
            }),
            jt.route("scale.ticks", "color", "", "color"),
            jt.route("scale.grid", "color", "", "borderColor"),
            jt.route("scale.grid", "borderColor", "", "borderColor"),
            jt.route("scale.title", "color", "", "color"),
            jt.describe("scale", {
                _fallback: !1,
                _scriptable: t=>!t.startsWith("before") && !t.startsWith("after") && "callback" !== t && "parser" !== t,
                _indexable: t=>"borderDash" !== t && "tickBorderDash" !== t
            }),
            jt.describe("scales", {
                _fallback: "scale"
            }),
            jt.describe("scale.ticks", {
                _scriptable: t=>"backdropPadding" !== t && "callback" !== t,
                _indexable: t=>"backdropPadding" !== t
            });
            const Xa = (t,e,i)=>"top" === e || "left" === e ? t[e] + i : t[e] - i;
            function Ya(t, e) {
                const i = []
                  , a = t.length / e
                  , n = t.length;
                let s = 0;
                for (; s < n; s += a)
                    i.push(t[Math.floor(s)]);
                return i
            }
            function Fa(t, e, i) {
                const a = t.ticks.length
                  , n = Math.min(e, a - 1)
                  , s = t._startPixel
                  , r = t._endPixel
                  , o = 1e-6;
                let l, c = t.getPixelForTick(n);
                if (!(i && (l = 1 === a ? Math.max(c - s, r - c) : 0 === e ? (t.getPixelForTick(1) - c) / 2 : (c - t.getPixelForTick(n - 1)) / 2,
                c += n < e ? l : -l,
                c < s - o || c > r + o)))
                    return c
            }
            function ja(t) {
                return t.drawTicks ? t.tickLength : 0
            }
            function Na(t, e) {
                if (!t.display)
                    return 0;
                const i = ce(t.font, e)
                  , a = le(t.padding);
                return (o(t.text) ? t.text.length : 1) * i.lineHeight + a.height
            }
            function Za(t, e, a) {
                let n = i(t);
                return (a && "right" !== e || !a && "right" === e) && (n = (t=>"left" === t ? "right" : "right" === t ? "left" : t)(n)),
                n
            }
            class Va extends Aa {
                constructor(t) {
                    super(),
                    this.id = t.id,
                    this.type = t.type,
                    this.options = void 0,
                    this.ctx = t.ctx,
                    this.chart = t.chart,
                    this.top = void 0,
                    this.bottom = void 0,
                    this.left = void 0,
                    this.right = void 0,
                    this.width = void 0,
                    this.height = void 0,
                    this._margins = {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    },
                    this.maxWidth = void 0,
                    this.maxHeight = void 0,
                    this.paddingTop = void 0,
                    this.paddingBottom = void 0,
                    this.paddingLeft = void 0,
                    this.paddingRight = void 0,
                    this.axis = void 0,
                    this.labelRotation = void 0,
                    this.min = void 0,
                    this.max = void 0,
                    this._range = void 0,
                    this.ticks = [],
                    this._gridLineItems = null,
                    this._labelItems = null,
                    this._labelSizes = null,
                    this._length = 0,
                    this._maxLength = 0,
                    this._longestTextCache = {},
                    this._startPixel = void 0,
                    this._endPixel = void 0,
                    this._reversePixels = !1,
                    this._userMax = void 0,
                    this._userMin = void 0,
                    this._suggestedMax = void 0,
                    this._suggestedMin = void 0,
                    this._ticksLength = 0,
                    this._borderValue = 0,
                    this._cache = {},
                    this._dataLimitsCached = !1,
                    this.$context = void 0
                }
                init(t) {
                    this.options = t.setContext(this.getContext()),
                    this.axis = t.axis,
                    this._userMin = this.parse(t.min),
                    this._userMax = this.parse(t.max),
                    this._suggestedMin = this.parse(t.suggestedMin),
                    this._suggestedMax = this.parse(t.suggestedMax)
                }
                parse(t, e) {
                    return t
                }
                getUserBounds() {
                    let {_userMin: t, _userMax: e, _suggestedMin: i, _suggestedMax: a} = this;
                    return t = h(t, Number.POSITIVE_INFINITY),
                    e = h(e, Number.NEGATIVE_INFINITY),
                    i = h(i, Number.POSITIVE_INFINITY),
                    a = h(a, Number.NEGATIVE_INFINITY),
                    {
                        min: h(t, i),
                        max: h(e, a),
                        minDefined: c(t),
                        maxDefined: c(e)
                    }
                }
                getMinMax(t) {
                    let e, {min: i, max: a, minDefined: n, maxDefined: s} = this.getUserBounds();
                    if (n && s)
                        return {
                            min: i,
                            max: a
                        };
                    const r = this.getMatchingVisibleMetas();
                    for (let o = 0, l = r.length; o < l; ++o)
                        e = r[o].controller.getMinMax(this, t),
                        n || (i = Math.min(i, e.min)),
                        s || (a = Math.max(a, e.max));
                    return i = s && i > a ? a : i,
                    a = n && i > a ? i : a,
                    {
                        min: h(i, h(a, i)),
                        max: h(a, h(i, a))
                    }
                }
                getPadding() {
                    return {
                        left: this.paddingLeft || 0,
                        top: this.paddingTop || 0,
                        right: this.paddingRight || 0,
                        bottom: this.paddingBottom || 0
                    }
                }
                getTicks() {
                    return this.ticks
                }
                getLabels() {
                    const t = this.chart.data;
                    return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || []
                }
                beforeLayout() {
                    this._cache = {},
                    this._dataLimitsCached = !1
                }
                beforeUpdate() {
                    u(this.options.beforeUpdate, [this])
                }
                update(t, e, i) {
                    const {beginAtZero: a, grace: n, ticks: s} = this.options
                      , r = s.sampleSize;
                    this.beforeUpdate(),
                    this.maxWidth = t,
                    this.maxHeight = e,
                    this._margins = i = Object.assign({
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }, i),
                    this.ticks = null,
                    this._labelSizes = null,
                    this._gridLineItems = null,
                    this._labelItems = null,
                    this.beforeSetDimensions(),
                    this.setDimensions(),
                    this.afterSetDimensions(),
                    this._maxLength = this.isHorizontal() ? this.width + i.left + i.right : this.height + i.top + i.bottom,
                    this._dataLimitsCached || (this.beforeDataLimits(),
                    this.determineDataLimits(),
                    this.afterDataLimits(),
                    this._range = function(t, e, i) {
                        const {min: a, max: n} = t
                          , s = f(e, (n - a) / 2)
                          , r = (t,e)=>i && 0 === t ? 0 : t + e;
                        return {
                            min: r(a, -Math.abs(s)),
                            max: r(n, s)
                        }
                    }(this, n, a),
                    this._dataLimitsCached = !0),
                    this.beforeBuildTicks(),
                    this.ticks = this.buildTicks() || [],
                    this.afterBuildTicks();
                    const o = r < this.ticks.length;
                    this._convertTicksToLabels(o ? Ya(this.ticks, r) : this.ticks),
                    this.configure(),
                    this.beforeCalculateLabelRotation(),
                    this.calculateLabelRotation(),
                    this.afterCalculateLabelRotation(),
                    s.display && (s.autoSkip || "auto" === s.source) && (this.ticks = za(this, this.ticks),
                    this._labelSizes = null),
                    o && this._convertTicksToLabels(this.ticks),
                    this.beforeFit(),
                    this.fit(),
                    this.afterFit(),
                    this.afterUpdate()
                }
                configure() {
                    let t, e, i = this.options.reverse;
                    this.isHorizontal() ? (t = this.left,
                    e = this.right) : (t = this.top,
                    e = this.bottom,
                    i = !i),
                    this._startPixel = t,
                    this._endPixel = e,
                    this._reversePixels = i,
                    this._length = e - t,
                    this._alignToPixels = this.options.alignToPixels
                }
                afterUpdate() {
                    u(this.options.afterUpdate, [this])
                }
                beforeSetDimensions() {
                    u(this.options.beforeSetDimensions, [this])
                }
                setDimensions() {
                    this.isHorizontal() ? (this.width = this.maxWidth,
                    this.left = 0,
                    this.right = this.width) : (this.height = this.maxHeight,
                    this.top = 0,
                    this.bottom = this.height),
                    this.paddingLeft = 0,
                    this.paddingTop = 0,
                    this.paddingRight = 0,
                    this.paddingBottom = 0
                }
                afterSetDimensions() {
                    u(this.options.afterSetDimensions, [this])
                }
                _callHooks(t) {
                    this.chart.notifyPlugins(t, this.getContext()),
                    u(this.options[t], [this])
                }
                beforeDataLimits() {
                    this._callHooks("beforeDataLimits")
                }
                determineDataLimits() {}
                afterDataLimits() {
                    this._callHooks("afterDataLimits")
                }
                beforeBuildTicks() {
                    this._callHooks("beforeBuildTicks")
                }
                buildTicks() {
                    return []
                }
                afterBuildTicks() {
                    this._callHooks("afterBuildTicks")
                }
                beforeTickToLabelConversion() {
                    u(this.options.beforeTickToLabelConversion, [this])
                }
                generateTickLabels(t) {
                    const e = this.options.ticks;
                    let i, a, n;
                    for (i = 0,
                    a = t.length; i < a; i++)
                        n = t[i],
                        n.label = u(e.callback, [n.value, i, t], this)
                }
                afterTickToLabelConversion() {
                    u(this.options.afterTickToLabelConversion, [this])
                }
                beforeCalculateLabelRotation() {
                    u(this.options.beforeCalculateLabelRotation, [this])
                }
                calculateLabelRotation() {
                    const t = this.options
                      , e = t.ticks
                      , i = this.ticks.length
                      , a = e.minRotation || 0
                      , n = e.maxRotation;
                    let s, r, o, l = a;
                    if (!this._isVisible() || !e.display || a >= n || i <= 1 || !this.isHorizontal())
                        return void (this.labelRotation = a);
                    const c = this._getLabelSizes()
                      , h = c.widest.width
                      , d = c.highest.height
                      , f = K(this.chart.width - h, 0, this.maxWidth);
                    s = t.offset ? this.maxWidth / i : f / (i - 1),
                    h + 6 > s && (s = f / (i - (t.offset ? .5 : 1)),
                    r = this.maxHeight - ja(t.grid) - e.padding - Na(t.title, this.chart.options.font),
                    o = Math.sqrt(h * h + d * d),
                    l = V(Math.min(Math.asin(K((c.highest.height + 6) / s, -1, 1)), Math.asin(K(r / o, -1, 1)) - Math.asin(K(d / o, -1, 1)))),
                    l = Math.max(a, Math.min(n, l))),
                    this.labelRotation = l
                }
                afterCalculateLabelRotation() {
                    u(this.options.afterCalculateLabelRotation, [this])
                }
                beforeFit() {
                    u(this.options.beforeFit, [this])
                }
                fit() {
                    const t = {
                        width: 0,
                        height: 0
                    }
                      , {chart: e, options: {ticks: i, title: a, grid: n}} = this
                      , s = this._isVisible()
                      , r = this.isHorizontal();
                    if (s) {
                        const s = Na(a, e.options.font);
                        if (r ? (t.width = this.maxWidth,
                        t.height = ja(n) + s) : (t.height = this.maxHeight,
                        t.width = ja(n) + s),
                        i.display && this.ticks.length) {
                            const {first: e, last: a, widest: n, highest: s} = this._getLabelSizes()
                              , o = 2 * i.padding
                              , l = Z(this.labelRotation)
                              , c = Math.cos(l)
                              , h = Math.sin(l);
                            if (r) {
                                const e = i.mirror ? 0 : h * n.width + c * s.height;
                                t.height = Math.min(this.maxHeight, t.height + e + o)
                            } else {
                                const e = i.mirror ? 0 : c * n.width + h * s.height;
                                t.width = Math.min(this.maxWidth, t.width + e + o)
                            }
                            this._calculatePadding(e, a, h, c)
                        }
                    }
                    this._handleMargins(),
                    r ? (this.width = this._length = e.width - this._margins.left - this._margins.right,
                    this.height = t.height) : (this.width = t.width,
                    this.height = this._length = e.height - this._margins.top - this._margins.bottom)
                }
                _calculatePadding(t, e, i, a) {
                    const {ticks: {align: n, padding: s}, position: r} = this.options
                      , o = 0 !== this.labelRotation
                      , l = "top" !== r && "x" === this.axis;
                    if (this.isHorizontal()) {
                        const r = this.getPixelForTick(0) - this.left
                          , c = this.right - this.getPixelForTick(this.ticks.length - 1);
                        let h = 0
                          , d = 0;
                        o ? l ? (h = a * t.width,
                        d = i * e.height) : (h = i * t.height,
                        d = a * e.width) : "start" === n ? d = e.width : "end" === n ? h = t.width : (h = t.width / 2,
                        d = e.width / 2),
                        this.paddingLeft = Math.max((h - r + s) * this.width / (this.width - r), 0),
                        this.paddingRight = Math.max((d - c + s) * this.width / (this.width - c), 0)
                    } else {
                        let i = e.height / 2
                          , a = t.height / 2;
                        "start" === n ? (i = 0,
                        a = t.height) : "end" === n && (i = e.height,
                        a = 0),
                        this.paddingTop = i + s,
                        this.paddingBottom = a + s
                    }
                }
                _handleMargins() {
                    this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left),
                    this._margins.top = Math.max(this.paddingTop, this._margins.top),
                    this._margins.right = Math.max(this.paddingRight, this._margins.right),
                    this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom))
                }
                afterFit() {
                    u(this.options.afterFit, [this])
                }
                isHorizontal() {
                    const {axis: t, position: e} = this.options;
                    return "top" === e || "bottom" === e || "x" === t
                }
                isFullSize() {
                    return this.options.fullSize
                }
                _convertTicksToLabels(t) {
                    let e, i;
                    for (this.beforeTickToLabelConversion(),
                    this.generateTickLabels(t),
                    e = 0,
                    i = t.length; e < i; e++)
                        r(t[e].label) && (t.splice(e, 1),
                        i--,
                        e--);
                    this.afterTickToLabelConversion()
                }
                _getLabelSizes() {
                    let t = this._labelSizes;
                    if (!t) {
                        const e = this.options.ticks.sampleSize;
                        let i = this.ticks;
                        e < i.length && (i = Ya(i, e)),
                        this._labelSizes = t = this._computeLabelSizes(i, i.length)
                    }
                    return t
                }
                _computeLabelSizes(t, e) {
                    const {ctx: i, _longestTextCache: a} = this
                      , n = []
                      , s = [];
                    let l, c, h, d, f, u, p, g, b, x, y, k = 0, _ = 0;
                    for (l = 0; l < e; ++l) {
                        if (d = t[l].label,
                        f = this._resolveTickFontOptions(l),
                        i.font = u = f.string,
                        p = a[u] = a[u] || {
                            data: {},
                            gc: []
                        },
                        g = f.lineHeight,
                        b = x = 0,
                        r(d) || o(d)) {
                            if (o(d))
                                for (c = 0,
                                h = d.length; c < h; ++c)
                                    y = d[c],
                                    r(y) || o(y) || (b = Nt(i, p.data, p.gc, b, y),
                                    x += g)
                        } else
                            b = Nt(i, p.data, p.gc, b, d),
                            x = g;
                        n.push(b),
                        s.push(x),
                        k = Math.max(b, k),
                        _ = Math.max(x, _)
                    }
                    !function(t, e) {
                        m(t, (t=>{
                            const i = t.gc
                              , a = i.length / 2;
                            let n;
                            if (a > e) {
                                for (n = 0; n < a; ++n)
                                    delete t.data[i[n]];
                                i.splice(0, a)
                            }
                        }
                        ))
                    }(a, e);
                    const w = n.indexOf(k)
                      , v = s.indexOf(_)
                      , O = t=>({
                        width: n[t] || 0,
                        height: s[t] || 0
                    });
                    return {
                        first: O(0),
                        last: O(e - 1),
                        widest: O(w),
                        highest: O(v),
                        widths: n,
                        heights: s
                    }
                }
                getLabelForValue(t) {
                    return t
                }
                getPixelForValue(t, e) {
                    return NaN
                }
                getValueForPixel(t) {}
                getPixelForTick(t) {
                    const e = this.ticks;
                    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value)
                }
                getPixelForDecimal(t) {
                    this._reversePixels && (t = 1 - t);
                    const e = this._startPixel + t * this._length;
                    return K(this._alignToPixels ? Vt(this.chart, e, 0) : e, -32768, 32767)
                }
                getDecimalForPixel(t) {
                    const e = (t - this._startPixel) / this._length;
                    return this._reversePixels ? 1 - e : e
                }
                getBasePixel() {
                    return this.getPixelForValue(this.getBaseValue())
                }
                getBaseValue() {
                    const {min: t, max: e} = this;
                    return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0
                }
                getContext(t) {
                    const e = this.ticks || [];
                    if (t >= 0 && t < e.length) {
                        const i = e[t];
                        return i.$context || (i.$context = function(t, e, i) {
                            return de(t, {
                                tick: i,
                                index: e,
                                type: "tick"
                            })
                        }(this.getContext(), t, i))
                    }
                    return this.$context || (this.$context = de(this.chart.getContext(), {
                        scale: this,
                        type: "scale"
                    }))
                }
                _tickSize() {
                    const t = this.options.ticks
                      , e = Z(this.labelRotation)
                      , i = Math.abs(Math.cos(e))
                      , a = Math.abs(Math.sin(e))
                      , n = this._getLabelSizes()
                      , s = t.autoSkipPadding || 0
                      , r = n ? n.widest.width + s : 0
                      , o = n ? n.highest.height + s : 0;
                    return this.isHorizontal() ? o * i > r * a ? r / i : o / a : o * a < r * i ? o / i : r / a
                }
                _isVisible() {
                    const t = this.options.display;
                    return "auto" !== t ? !!t : this.getMatchingVisibleMetas().length > 0
                }
                _computeGridLineItems(t) {
                    const e = this.axis
                      , i = this.chart
                      , a = this.options
                      , {grid: n, position: s} = a
                      , r = n.offset
                      , o = this.isHorizontal()
                      , c = this.ticks.length + (r ? 1 : 0)
                      , h = ja(n)
                      , f = []
                      , u = n.setContext(this.getContext())
                      , m = u.drawBorder ? u.borderWidth : 0
                      , p = m / 2
                      , g = function(t) {
                        return Vt(i, t, m)
                    };
                    let b, x, y, k, _, w, v, O, M, S, D, I;
                    if ("top" === s)
                        b = g(this.bottom),
                        w = this.bottom - h,
                        O = b - p,
                        S = g(t.top) + p,
                        I = t.bottom;
                    else if ("bottom" === s)
                        b = g(this.top),
                        S = t.top,
                        I = g(t.bottom) - p,
                        w = b + p,
                        O = this.top + h;
                    else if ("left" === s)
                        b = g(this.right),
                        _ = this.right - h,
                        v = b - p,
                        M = g(t.left) + p,
                        D = t.right;
                    else if ("right" === s)
                        b = g(this.left),
                        M = t.left,
                        D = g(t.right) - p,
                        _ = b + p,
                        v = this.left + h;
                    else if ("x" === e) {
                        if ("center" === s)
                            b = g((t.top + t.bottom) / 2 + .5);
                        else if (l(s)) {
                            const t = Object.keys(s)[0]
                              , e = s[t];
                            b = g(this.chart.scales[t].getPixelForValue(e))
                        }
                        S = t.top,
                        I = t.bottom,
                        w = b + p,
                        O = w + h
                    } else if ("y" === e) {
                        if ("center" === s)
                            b = g((t.left + t.right) / 2);
                        else if (l(s)) {
                            const t = Object.keys(s)[0]
                              , e = s[t];
                            b = g(this.chart.scales[t].getPixelForValue(e))
                        }
                        _ = b - p,
                        v = _ - h,
                        M = t.left,
                        D = t.right
                    }
                    const R = d(a.ticks.maxTicksLimit, c)
                      , L = Math.max(1, Math.ceil(c / R));
                    for (x = 0; x < c; x += L) {
                        const t = n.setContext(this.getContext(x))
                          , e = t.lineWidth
                          , a = t.color
                          , s = n.borderDash || []
                          , l = t.borderDashOffset
                          , c = t.tickWidth
                          , h = t.tickColor
                          , d = t.tickBorderDash || []
                          , u = t.tickBorderDashOffset;
                        y = Fa(this, x, r),
                        void 0 !== y && (k = Vt(i, y, e),
                        o ? _ = v = M = D = k : w = O = S = I = k,
                        f.push({
                            tx1: _,
                            ty1: w,
                            tx2: v,
                            ty2: O,
                            x1: M,
                            y1: S,
                            x2: D,
                            y2: I,
                            width: e,
                            color: a,
                            borderDash: s,
                            borderDashOffset: l,
                            tickWidth: c,
                            tickColor: h,
                            tickBorderDash: d,
                            tickBorderDashOffset: u
                        }))
                    }
                    return this._ticksLength = c,
                    this._borderValue = b,
                    f
                }
                _computeLabelItems(t) {
                    const e = this.axis
                      , i = this.options
                      , {position: a, ticks: n} = i
                      , s = this.isHorizontal()
                      , r = this.ticks
                      , {align: c, crossAlign: h, padding: d, mirror: f} = n
                      , u = ja(i.grid)
                      , m = u + d
                      , p = f ? -d : m
                      , g = -Z(this.labelRotation)
                      , b = [];
                    let x, y, k, _, w, v, O, M, S, D, I, R, L = "middle";
                    if ("top" === a)
                        v = this.bottom - p,
                        O = this._getXAxisLabelAlignment();
                    else if ("bottom" === a)
                        v = this.top + p,
                        O = this._getXAxisLabelAlignment();
                    else if ("left" === a) {
                        const t = this._getYAxisLabelAlignment(u);
                        O = t.textAlign,
                        w = t.x
                    } else if ("right" === a) {
                        const t = this._getYAxisLabelAlignment(u);
                        O = t.textAlign,
                        w = t.x
                    } else if ("x" === e) {
                        if ("center" === a)
                            v = (t.top + t.bottom) / 2 + m;
                        else if (l(a)) {
                            const t = Object.keys(a)[0]
                              , e = a[t];
                            v = this.chart.scales[t].getPixelForValue(e) + m
                        }
                        O = this._getXAxisLabelAlignment()
                    } else if ("y" === e) {
                        if ("center" === a)
                            w = (t.left + t.right) / 2 - m;
                        else if (l(a)) {
                            const t = Object.keys(a)[0]
                              , e = a[t];
                            w = this.chart.scales[t].getPixelForValue(e)
                        }
                        O = this._getYAxisLabelAlignment(u).textAlign
                    }
                    "y" === e && ("start" === c ? L = "top" : "end" === c && (L = "bottom"));
                    const P = this._getLabelSizes();
                    for (x = 0,
                    y = r.length; x < y; ++x) {
                        k = r[x],
                        _ = k.label;
                        const t = n.setContext(this.getContext(x));
                        M = this.getPixelForTick(x) + n.labelOffset,
                        S = this._resolveTickFontOptions(x),
                        D = S.lineHeight,
                        I = o(_) ? _.length : 1;
                        const e = I / 2
                          , i = t.color
                          , l = t.textStrokeColor
                          , c = t.textStrokeWidth;
                        let d;
                        if (s ? (w = M,
                        R = "top" === a ? "near" === h || 0 !== g ? -I * D + D / 2 : "center" === h ? -P.highest.height / 2 - e * D + D : -P.highest.height + D / 2 : "near" === h || 0 !== g ? D / 2 : "center" === h ? P.highest.height / 2 - e * D : P.highest.height - I * D,
                        f && (R *= -1)) : (v = M,
                        R = (1 - I) * D / 2),
                        t.showLabelBackdrop) {
                            const e = le(t.backdropPadding)
                              , i = P.heights[x]
                              , a = P.widths[x];
                            let n = v + R - e.top
                              , s = w - e.left;
                            switch (L) {
                            case "middle":
                                n -= i / 2;
                                break;
                            case "bottom":
                                n -= i
                            }
                            switch (O) {
                            case "center":
                                s -= a / 2;
                                break;
                            case "right":
                                s -= a
                            }
                            d = {
                                left: s,
                                top: n,
                                width: a + e.width,
                                height: i + e.height,
                                color: t.backdropColor
                            }
                        }
                        b.push({
                            rotation: g,
                            label: _,
                            font: S,
                            color: i,
                            strokeColor: l,
                            strokeWidth: c,
                            textOffset: R,
                            textAlign: O,
                            textBaseline: L,
                            translation: [w, v],
                            backdrop: d
                        })
                    }
                    return b
                }
                _getXAxisLabelAlignment() {
                    const {position: t, ticks: e} = this.options;
                    if (-Z(this.labelRotation))
                        return "top" === t ? "left" : "right";
                    let i = "center";
                    return "start" === e.align ? i = "left" : "end" === e.align && (i = "right"),
                    i
                }
                _getYAxisLabelAlignment(t) {
                    const {position: e, ticks: {crossAlign: i, mirror: a, padding: n}} = this.options
                      , s = t + n
                      , r = this._getLabelSizes().widest.width;
                    let o, l;
                    return "left" === e ? a ? (l = this.right + n,
                    "near" === i ? o = "left" : "center" === i ? (o = "center",
                    l += r / 2) : (o = "right",
                    l += r)) : (l = this.right - s,
                    "near" === i ? o = "right" : "center" === i ? (o = "center",
                    l -= r / 2) : (o = "left",
                    l = this.left)) : "right" === e ? a ? (l = this.left + n,
                    "near" === i ? o = "right" : "center" === i ? (o = "center",
                    l -= r / 2) : (o = "left",
                    l -= r)) : (l = this.left + s,
                    "near" === i ? o = "left" : "center" === i ? (o = "center",
                    l += r / 2) : (o = "right",
                    l = this.right)) : o = "right",
                    {
                        textAlign: o,
                        x: l
                    }
                }
                _computeLabelArea() {
                    if (this.options.ticks.mirror)
                        return;
                    const t = this.chart
                      , e = this.options.position;
                    return "left" === e || "right" === e ? {
                        top: 0,
                        left: this.left,
                        bottom: t.height,
                        right: this.right
                    } : "top" === e || "bottom" === e ? {
                        top: this.top,
                        left: 0,
                        bottom: this.bottom,
                        right: t.width
                    } : void 0
                }
                drawBackground() {
                    const {ctx: t, options: {backgroundColor: e}, left: i, top: a, width: n, height: s} = this;
                    e && (t.save(),
                    t.fillStyle = e,
                    t.fillRect(i, a, n, s),
                    t.restore())
                }
                getLineWidthForValue(t) {
                    const e = this.options.grid;
                    if (!this._isVisible() || !e.display)
                        return 0;
                    const i = this.ticks.findIndex((e=>e.value === t));
                    if (i >= 0) {
                        return e.setContext(this.getContext(i)).lineWidth
                    }
                    return 0
                }
                drawGrid(t) {
                    const e = this.options.grid
                      , i = this.ctx
                      , a = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
                    let n, s;
                    const r = (t,e,a)=>{
                        a.width && a.color && (i.save(),
                        i.lineWidth = a.width,
                        i.strokeStyle = a.color,
                        i.setLineDash(a.borderDash || []),
                        i.lineDashOffset = a.borderDashOffset,
                        i.beginPath(),
                        i.moveTo(t.x, t.y),
                        i.lineTo(e.x, e.y),
                        i.stroke(),
                        i.restore())
                    }
                    ;
                    if (e.display)
                        for (n = 0,
                        s = a.length; n < s; ++n) {
                            const t = a[n];
                            e.drawOnChartArea && r({
                                x: t.x1,
                                y: t.y1
                            }, {
                                x: t.x2,
                                y: t.y2
                            }, t),
                            e.drawTicks && r({
                                x: t.tx1,
                                y: t.ty1
                            }, {
                                x: t.tx2,
                                y: t.ty2
                            }, {
                                color: t.tickColor,
                                width: t.tickWidth,
                                borderDash: t.tickBorderDash,
                                borderDashOffset: t.tickBorderDashOffset
                            })
                        }
                }
                drawBorder() {
                    const {chart: t, ctx: e, options: {grid: i}} = this
                      , a = i.setContext(this.getContext())
                      , n = i.drawBorder ? a.borderWidth : 0;
                    if (!n)
                        return;
                    const s = i.setContext(this.getContext(0)).lineWidth
                      , r = this._borderValue;
                    let o, l, c, h;
                    this.isHorizontal() ? (o = Vt(t, this.left, n) - n / 2,
                    l = Vt(t, this.right, s) + s / 2,
                    c = h = r) : (c = Vt(t, this.top, n) - n / 2,
                    h = Vt(t, this.bottom, s) + s / 2,
                    o = l = r),
                    e.save(),
                    e.lineWidth = a.borderWidth,
                    e.strokeStyle = a.borderColor,
                    e.beginPath(),
                    e.moveTo(o, c),
                    e.lineTo(l, h),
                    e.stroke(),
                    e.restore()
                }
                drawLabels(t) {
                    if (!this.options.ticks.display)
                        return;
                    const e = this.ctx
                      , i = this._computeLabelArea();
                    i && $t(e, i);
                    const a = this._labelItems || (this._labelItems = this._computeLabelItems(t));
                    let n, s;
                    for (n = 0,
                    s = a.length; n < s; ++n) {
                        const t = a[n]
                          , i = t.font
                          , s = t.label;
                        t.backdrop && (e.fillStyle = t.backdrop.color,
                        e.fillRect(t.backdrop.left, t.backdrop.top, t.backdrop.width, t.backdrop.height)),
                        Jt(e, s, 0, t.textOffset, i, t)
                    }
                    i && qt(e)
                }
                drawTitle() {
                    const {ctx: t, options: {position: e, title: i, reverse: n}} = this;
                    if (!i.display)
                        return;
                    const s = ce(i.font)
                      , r = le(i.padding)
                      , c = i.align;
                    let h = s.lineHeight / 2;
                    "bottom" === e || "center" === e || l(e) ? (h += r.bottom,
                    o(i.text) && (h += s.lineHeight * (i.text.length - 1))) : h += r.top;
                    const {titleX: d, titleY: f, maxWidth: u, rotation: m} = function(t, e, i, n) {
                        const {top: s, left: r, bottom: o, right: c, chart: h} = t
                          , {chartArea: d, scales: f} = h;
                        let u, m, p, g = 0;
                        const b = o - s
                          , x = c - r;
                        if (t.isHorizontal()) {
                            if (m = a(n, r, c),
                            l(i)) {
                                const t = Object.keys(i)[0]
                                  , a = i[t];
                                p = f[t].getPixelForValue(a) + b - e
                            } else
                                p = "center" === i ? (d.bottom + d.top) / 2 + b - e : Xa(t, i, e);
                            u = c - r
                        } else {
                            if (l(i)) {
                                const t = Object.keys(i)[0]
                                  , a = i[t];
                                m = f[t].getPixelForValue(a) - x + e
                            } else
                                m = "center" === i ? (d.left + d.right) / 2 - x + e : Xa(t, i, e);
                            p = a(n, o, s),
                            g = "left" === i ? -T : T
                        }
                        return {
                            titleX: m,
                            titleY: p,
                            maxWidth: u,
                            rotation: g
                        }
                    }(this, h, e, c);
                    Jt(t, i.text, 0, 0, s, {
                        color: i.color,
                        maxWidth: u,
                        rotation: m,
                        textAlign: Za(c, e, n),
                        textBaseline: "middle",
                        translation: [d, f]
                    })
                }
                draw(t) {
                    this._isVisible() && (this.drawBackground(),
                    this.drawGrid(t),
                    this.drawBorder(),
                    this.drawTitle(),
                    this.drawLabels(t))
                }
                _layers() {
                    const t = this.options
                      , e = t.ticks && t.ticks.z || 0
                      , i = d(t.grid && t.grid.z, -1);
                    return this._isVisible() && this.draw === Va.prototype.draw ? [{
                        z: i,
                        draw: t=>{
                            this.drawBackground(),
                            this.drawGrid(t),
                            this.drawTitle()
                        }
                    }, {
                        z: i + 1,
                        draw: ()=>{
                            this.drawBorder()
                        }
                    }, {
                        z: e,
                        draw: t=>{
                            this.drawLabels(t)
                        }
                    }] : [{
                        z: e,
                        draw: t=>{
                            this.draw(t)
                        }
                    }]
                }
                getMatchingVisibleMetas(t) {
                    const e = this.chart.getSortedVisibleDatasetMetas()
                      , i = this.axis + "AxisID"
                      , a = [];
                    let n, s;
                    for (n = 0,
                    s = e.length; n < s; ++n) {
                        const s = e[n];
                        s[i] !== this.id || t && s.type !== t || a.push(s)
                    }
                    return a
                }
                _resolveTickFontOptions(t) {
                    return ce(this.options.ticks.setContext(this.getContext(t)).font)
                }
                _maxDigits() {
                    const t = this._resolveTickFontOptions(0).lineHeight;
                    return (this.isHorizontal() ? this.width : this.height) / t
                }
            }
            class Wa {
                constructor(t, e, i) {
                    this.type = t,
                    this.scope = e,
                    this.override = i,
                    this.items = Object.create(null)
                }
                isForType(t) {
                    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype)
                }
                register(t) {
                    const e = Object.getPrototypeOf(t);
                    let i;
                    (function(t) {
                        return "id"in t && "defaults"in t
                    }
                    )(e) && (i = this.register(e));
                    const a = this.items
                      , n = t.id
                      , s = this.scope + "." + n;
                    if (!n)
                        throw new Error("class does not have id: " + t);
                    return n in a || (a[n] = t,
                    function(t, e, i) {
                        const a = y(Object.create(null), [i ? jt.get(i) : {}, jt.get(e), t.defaults]);
                        jt.set(e, a),
                        t.defaultRoutes && function(t, e) {
                            Object.keys(e).forEach((i=>{
                                const a = i.split(".")
                                  , n = a.pop()
                                  , s = [t].concat(a).join(".")
                                  , r = e[i].split(".")
                                  , o = r.pop()
                                  , l = r.join(".");
                                jt.route(s, n, l, o)
                            }
                            ))
                        }(e, t.defaultRoutes);
                        t.descriptors && jt.describe(e, t.descriptors)
                    }(t, s, i),
                    this.override && jt.override(t.id, t.overrides)),
                    s
                }
                get(t) {
                    return this.items[t]
                }
                unregister(t) {
                    const e = this.items
                      , i = t.id
                      , a = this.scope;
                    i in e && delete e[i],
                    a && i in jt[a] && (delete jt[a][i],
                    this.override && delete Bt[i])
                }
            }
            var Ua = new class {
                constructor() {
                    this.controllers = new Wa(Ri,"datasets",!0),
                    this.elements = new Wa(Aa,"elements"),
                    this.plugins = new Wa(Object,"plugins"),
                    this.scales = new Wa(Va,"scales"),
                    this._typedRegistries = [this.controllers, this.scales, this.elements]
                }
                add(...t) {
                    this._each("register", t)
                }
                remove(...t) {
                    this._each("unregister", t)
                }
                addControllers(...t) {
                    this._each("register", t, this.controllers)
                }
                addElements(...t) {
                    this._each("register", t, this.elements)
                }
                addPlugins(...t) {
                    this._each("register", t, this.plugins)
                }
                addScales(...t) {
                    this._each("register", t, this.scales)
                }
                getController(t) {
                    return this._get(t, this.controllers, "controller")
                }
                getElement(t) {
                    return this._get(t, this.elements, "element")
                }
                getPlugin(t) {
                    return this._get(t, this.plugins, "plugin")
                }
                getScale(t) {
                    return this._get(t, this.scales, "scale")
                }
                removeControllers(...t) {
                    this._each("unregister", t, this.controllers)
                }
                removeElements(...t) {
                    this._each("unregister", t, this.elements)
                }
                removePlugins(...t) {
                    this._each("unregister", t, this.plugins)
                }
                removeScales(...t) {
                    this._each("unregister", t, this.scales)
                }
                _each(t, e, i) {
                    [...e].forEach((e=>{
                        const a = i || this._getRegistryForType(e);
                        i || a.isForType(e) || a === this.plugins && e.id ? this._exec(t, a, e) : m(e, (e=>{
                            const a = i || this._getRegistryForType(e);
                            this._exec(t, a, e)
                        }
                        ))
                    }
                    ))
                }
                _exec(t, e, i) {
                    const a = M(t);
                    u(i["before" + a], [], i),
                    e[t](i),
                    u(i["after" + a], [], i)
                }
                _getRegistryForType(t) {
                    for (let e = 0; e < this._typedRegistries.length; e++) {
                        const i = this._typedRegistries[e];
                        if (i.isForType(t))
                            return i
                    }
                    return this.plugins
                }
                _get(t, e, i) {
                    const a = e.get(t);
                    if (void 0 === a)
                        throw new Error('"' + t + '" is not a registered ' + i + ".");
                    return a
                }
            }
            ;
            class Ha {
                constructor() {
                    this._init = []
                }
                notify(t, e, i, a) {
                    "beforeInit" === e && (this._init = this._createDescriptors(t, !0),
                    this._notify(this._init, t, "install"));
                    const n = a ? this._descriptors(t).filter(a) : this._descriptors(t)
                      , s = this._notify(n, t, e, i);
                    return "destroy" === e && (this._notify(n, t, "stop"),
                    this._notify(this._init, t, "uninstall")),
                    s
                }
                _notify(t, e, i, a) {
                    a = a || {};
                    for (const n of t) {
                        const t = n.plugin;
                        if (!1 === u(t[i], [e, a, n.options], t) && a.cancelable)
                            return !1
                    }
                    return !0
                }
                invalidate() {
                    r(this._cache) || (this._oldCache = this._cache,
                    this._cache = void 0)
                }
                _descriptors(t) {
                    if (this._cache)
                        return this._cache;
                    const e = this._cache = this._createDescriptors(t);
                    return this._notifyStateChanges(t),
                    e
                }
                _createDescriptors(t, e) {
                    const i = t && t.config
                      , a = d(i.options && i.options.plugins, {})
                      , n = function(t) {
                        const e = []
                          , i = Object.keys(Ua.plugins.items);
                        for (let t = 0; t < i.length; t++)
                            e.push(Ua.getPlugin(i[t]));
                        const a = t.plugins || [];
                        for (let t = 0; t < a.length; t++) {
                            const i = a[t];
                            -1 === e.indexOf(i) && e.push(i)
                        }
                        return e
                    }(i);
                    return !1 !== a || e ? function(t, e, i, a) {
                        const n = []
                          , s = t.getContext();
                        for (let r = 0; r < e.length; r++) {
                            const o = e[r]
                              , l = $a(i[o.id], a);
                            null !== l && n.push({
                                plugin: o,
                                options: qa(t.config, o, l, s)
                            })
                        }
                        return n
                    }(t, n, a, e) : []
                }
                _notifyStateChanges(t) {
                    const e = this._oldCache || []
                      , i = this._cache
                      , a = (t,e)=>t.filter((t=>!e.some((e=>t.plugin.id === e.plugin.id))));
                    this._notify(a(e, i), t, "stop"),
                    this._notify(a(i, e), t, "start")
                }
            }
            function $a(t, e) {
                return e || !1 !== t ? !0 === t ? {} : t : null
            }
            function qa(t, e, i, a) {
                const n = t.pluginScopeKeys(e)
                  , s = t.getOptionScopes(i, n);
                return t.createResolver(s, a, [""], {
                    scriptable: !1,
                    indexable: !1,
                    allKeys: !0
                })
            }
            function Ka(t, e) {
                const i = jt.datasets[t] || {};
                return ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || i.indexAxis || "x"
            }
            function Ga(t, e) {
                return "x" === t || "y" === t ? t : e.axis || ("top" === (i = e.position) || "bottom" === i ? "x" : "left" === i || "right" === i ? "y" : void 0) || t.charAt(0).toLowerCase();
                var i
            }
            function Ja(t) {
                const e = t.options || (t.options = {});
                e.plugins = d(e.plugins, {}),
                e.scales = function(t, e) {
                    const i = Bt[t.type] || {
                        scales: {}
                    }
                      , a = e.scales || {}
                      , n = Ka(t.type, e)
                      , s = Object.create(null)
                      , r = Object.create(null);
                    return Object.keys(a).forEach((t=>{
                        const e = a[t];
                        if (!l(e))
                            return console.error(`Invalid scale configuration for scale: ${t}`);
                        if (e._proxy)
                            return console.warn(`Ignoring resolver passed as options for scale: ${t}`);
                        const o = Ga(t, e)
                          , c = function(t, e) {
                            return t === e ? "_index_" : "_value_"
                        }(o, n)
                          , h = i.scales || {};
                        s[o] = s[o] || t,
                        r[t] = k(Object.create(null), [{
                            axis: o
                        }, e, h[o], h[c]])
                    }
                    )),
                    t.data.datasets.forEach((i=>{
                        const n = i.type || t.type
                          , o = i.indexAxis || Ka(n, e)
                          , l = (Bt[n] || {}).scales || {};
                        Object.keys(l).forEach((t=>{
                            const e = function(t, e) {
                                let i = t;
                                return "_index_" === t ? i = e : "_value_" === t && (i = "x" === e ? "y" : "x"),
                                i
                            }(t, o)
                              , n = i[e + "AxisID"] || s[e] || e;
                            r[n] = r[n] || Object.create(null),
                            k(r[n], [{
                                axis: e
                            }, a[n], l[t]])
                        }
                        ))
                    }
                    )),
                    Object.keys(r).forEach((t=>{
                        const e = r[t];
                        k(e, [jt.scales[e.type], jt.scale])
                    }
                    )),
                    r
                }(t, e)
            }
            function Qa(t) {
                return (t = t || {}).datasets = t.datasets || [],
                t.labels = t.labels || [],
                t
            }
            const tn = new Map
              , en = new Set;
            function an(t, e) {
                let i = tn.get(t);
                return i || (i = e(),
                tn.set(t, i),
                en.add(i)),
                i
            }
            const nn = (t,e,i)=>{
                const a = O(e, i);
                void 0 !== a && t.add(a)
            }
            ;
            class sn {
                constructor(t) {
                    this._config = function(t) {
                        return (t = t || {}).data = Qa(t.data),
                        Ja(t),
                        t
                    }(t),
                    this._scopeCache = new Map,
                    this._resolverCache = new Map
                }
                get platform() {
                    return this._config.platform
                }
                get type() {
                    return this._config.type
                }
                set type(t) {
                    this._config.type = t
                }
                get data() {
                    return this._config.data
                }
                set data(t) {
                    this._config.data = Qa(t)
                }
                get options() {
                    return this._config.options
                }
                set options(t) {
                    this._config.options = t
                }
                get plugins() {
                    return this._config.plugins
                }
                update() {
                    const t = this._config;
                    this.clearCache(),
                    Ja(t)
                }
                clearCache() {
                    this._scopeCache.clear(),
                    this._resolverCache.clear()
                }
                datasetScopeKeys(t) {
                    return an(t, (()=>[[`datasets.${t}`, ""]]))
                }
                datasetAnimationScopeKeys(t, e) {
                    return an(`${t}.transition.${e}`, (()=>[[`datasets.${t}.transitions.${e}`, `transitions.${e}`], [`datasets.${t}`, ""]]))
                }
                datasetElementScopeKeys(t, e) {
                    return an(`${t}-${e}`, (()=>[[`datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, ""]]))
                }
                pluginScopeKeys(t) {
                    const e = t.id;
                    return an(`${this.type}-plugin-${e}`, (()=>[[`plugins.${e}`, ...t.additionalOptionScopes || []]]))
                }
                _cachedScopes(t, e) {
                    const i = this._scopeCache;
                    let a = i.get(t);
                    return a && !e || (a = new Map,
                    i.set(t, a)),
                    a
                }
                getOptionScopes(t, e, i) {
                    const {options: a, type: n} = this
                      , s = this._cachedScopes(t, i)
                      , r = s.get(e);
                    if (r)
                        return r;
                    const o = new Set;
                    e.forEach((e=>{
                        t && (o.add(t),
                        e.forEach((e=>nn(o, t, e)))),
                        e.forEach((t=>nn(o, a, t))),
                        e.forEach((t=>nn(o, Bt[n] || {}, t))),
                        e.forEach((t=>nn(o, jt, t))),
                        e.forEach((t=>nn(o, Xt, t)))
                    }
                    ));
                    const l = Array.from(o);
                    return 0 === l.length && l.push(Object.create(null)),
                    en.has(e) && s.set(e, l),
                    l
                }
                chartOptionScopes() {
                    const {options: t, type: e} = this;
                    return [t, Bt[e] || {}, jt.datasets[e] || {}, {
                        type: e
                    }, jt, Xt]
                }
                resolveNamedOptions(t, e, i, a=[""]) {
                    const n = {
                        $shared: !0
                    }
                      , {resolver: s, subPrefixes: r} = rn(this._resolverCache, t, a);
                    let l = s;
                    if (function(t, e) {
                        const {isScriptable: i, isIndexable: a} = ke(t);
                        for (const n of e) {
                            const e = i(n)
                              , s = a(n)
                              , r = (s || e) && t[n];
                            if (e && (D(r) || on(r)) || s && o(r))
                                return !0
                        }
                        return !1
                    }(s, e)) {
                        n.$shared = !1;
                        l = ye(s, i = D(i) ? i() : i, this.createResolver(t, i, r))
                    }
                    for (const t of e)
                        n[t] = l[t];
                    return n
                }
                createResolver(t, e, i=[""], a) {
                    const {resolver: n} = rn(this._resolverCache, t, i);
                    return l(e) ? ye(n, e, void 0, a) : n
                }
            }
            function rn(t, e, i) {
                let a = t.get(e);
                a || (a = new Map,
                t.set(e, a));
                const n = i.join();
                let s = a.get(n);
                if (!s) {
                    s = {
                        resolver: xe(e, i),
                        subPrefixes: i.filter((t=>!t.toLowerCase().includes("hover")))
                    },
                    a.set(n, s)
                }
                return s
            }
            const on = t=>l(t) && Object.getOwnPropertyNames(t).reduce(((e,i)=>e || D(t[i])), !1);
            const ln = ["top", "bottom", "left", "right", "chartArea"];
            function cn(t, e) {
                return "top" === t || "bottom" === t || -1 === ln.indexOf(t) && "x" === e
            }
            function hn(t, e) {
                return function(i, a) {
                    return i[t] === a[t] ? i[e] - a[e] : i[t] - a[t]
                }
            }
            function dn(t) {
                const e = t.chart
                  , i = e.options.animation;
                e.notifyPlugins("afterRender"),
                u(i && i.onComplete, [t], e)
            }
            function fn(t) {
                const e = t.chart
                  , i = e.options.animation;
                u(i && i.onProgress, [t], e)
            }
            function un(t) {
                return Xe() && "string" == typeof t ? t = document.getElementById(t) : t && t.length && (t = t[0]),
                t && t.canvas && (t = t.canvas),
                t
            }
            const mn = {}
              , pn = t=>{
                const e = un(t);
                return Object.values(mn).filter((t=>t.canvas === e)).pop()
            }
            ;
            function gn(t, e, i) {
                const a = Object.keys(t);
                for (const n of a) {
                    const a = +n;
                    if (a >= e) {
                        const s = t[n];
                        delete t[n],
                        (i > 0 || a > e) && (t[a + i] = s)
                    }
                }
            }
            class bn {
                constructor(t, e) {
                    const i = this.config = new sn(e)
                      , a = un(t)
                      , n = pn(a);
                    if (n)
                        throw new Error("Canvas is already in use. Chart with ID '" + n.id + "' must be destroyed before the canvas can be reused.");
                    const r = i.createResolver(i.chartOptionScopes(), this.getContext());
                    this.platform = new (i.platform || function(t) {
                        return !Xe() || "undefined" != typeof OffscreenCanvas && t instanceof OffscreenCanvas ? ba : Ca
                    }(a)),
                    this.platform.updateConfig(i);
                    const o = this.platform.acquireContext(a, r.aspectRatio)
                      , l = o && o.canvas
                      , c = l && l.height
                      , h = l && l.width;
                    this.id = s(),
                    this.ctx = o,
                    this.canvas = l,
                    this.width = h,
                    this.height = c,
                    this._options = r,
                    this._aspectRatio = this.aspectRatio,
                    this._layers = [],
                    this._metasets = [],
                    this._stacks = void 0,
                    this.boxes = [],
                    this.currentDevicePixelRatio = void 0,
                    this.chartArea = void 0,
                    this._active = [],
                    this._lastEvent = void 0,
                    this._listeners = {},
                    this._responsiveListeners = void 0,
                    this._sortedMetasets = [],
                    this.scales = {},
                    this._plugins = new Ha,
                    this.$proxies = {},
                    this._hiddenIndices = {},
                    this.attached = !1,
                    this._animationsDisabled = void 0,
                    this.$context = void 0,
                    this._doResize = function(t, e) {
                        let i;
                        return function(...a) {
                            return e ? (clearTimeout(i),
                            i = setTimeout(t, e, a)) : t.apply(this, a),
                            e
                        }
                    }((t=>this.update(t)), r.resizeDelay || 0),
                    this._dataChanges = [],
                    mn[this.id] = this,
                    o && l ? (fi.listen(this, "complete", dn),
                    fi.listen(this, "progress", fn),
                    this._initialize(),
                    this.attached && this.update()) : console.error("Failed to create chart: can't acquire context from the given item")
                }
                get aspectRatio() {
                    const {options: {aspectRatio: t, maintainAspectRatio: e}, width: i, height: a, _aspectRatio: n} = this;
                    return r(t) ? e && n ? n : a ? i / a : null : t
                }
                get data() {
                    return this.config.data
                }
                set data(t) {
                    this.config.data = t
                }
                get options() {
                    return this._options
                }
                set options(t) {
                    this.config.options = t
                }
                _initialize() {
                    return this.notifyPlugins("beforeInit"),
                    this.options.responsive ? this.resize() : $e(this, this.options.devicePixelRatio),
                    this.bindEvents(),
                    this.notifyPlugins("afterInit"),
                    this
                }
                clear() {
                    return Wt(this.canvas, this.ctx),
                    this
                }
                stop() {
                    return fi.stop(this),
                    this
                }
                resize(t, e) {
                    fi.running(this) ? this._resizeBeforeDraw = {
                        width: t,
                        height: e
                    } : this._resize(t, e)
                }
                _resize(t, e) {
                    const i = this.options
                      , a = this.canvas
                      , n = i.maintainAspectRatio && this.aspectRatio
                      , s = this.platform.getMaximumSize(a, t, e, n)
                      , r = i.devicePixelRatio || this.platform.getDevicePixelRatio()
                      , o = this.width ? "resize" : "attach";
                    this.width = s.width,
                    this.height = s.height,
                    this._aspectRatio = this.aspectRatio,
                    $e(this, r, !0) && (this.notifyPlugins("resize", {
                        size: s
                    }),
                    u(i.onResize, [this, s], this),
                    this.attached && this._doResize(o) && this.render())
                }
                ensureScalesHaveIDs() {
                    m(this.options.scales || {}, ((t,e)=>{
                        t.id = e
                    }
                    ))
                }
                buildOrUpdateScales() {
                    const t = this.options
                      , e = t.scales
                      , i = this.scales
                      , a = Object.keys(i).reduce(((t,e)=>(t[e] = !1,
                    t)), {});
                    let n = [];
                    e && (n = n.concat(Object.keys(e).map((t=>{
                        const i = e[t]
                          , a = Ga(t, i)
                          , n = "r" === a
                          , s = "x" === a;
                        return {
                            options: i,
                            dposition: n ? "chartArea" : s ? "bottom" : "left",
                            dtype: n ? "radialLinear" : s ? "category" : "linear"
                        }
                    }
                    )))),
                    m(n, (e=>{
                        const n = e.options
                          , s = n.id
                          , r = Ga(s, n)
                          , o = d(n.type, e.dtype);
                        void 0 !== n.position && cn(n.position, r) === cn(e.dposition) || (n.position = e.dposition),
                        a[s] = !0;
                        let l = null;
                        if (s in i && i[s].type === o)
                            l = i[s];
                        else {
                            l = new (Ua.getScale(o))({
                                id: s,
                                type: o,
                                ctx: this.ctx,
                                chart: this
                            }),
                            i[l.id] = l
                        }
                        l.init(n, t)
                    }
                    )),
                    m(a, ((t,e)=>{
                        t || delete i[e]
                    }
                    )),
                    m(i, (t=>{
                        pa.configure(this, t, t.options),
                        pa.addBox(this, t)
                    }
                    ))
                }
                _updateMetasets() {
                    const t = this._metasets
                      , e = this.data.datasets.length
                      , i = t.length;
                    if (t.sort(((t,e)=>t.index - e.index)),
                    i > e) {
                        for (let t = e; t < i; ++t)
                            this._destroyDatasetMeta(t);
                        t.splice(e, i - e)
                    }
                    this._sortedMetasets = t.slice(0).sort(hn("order", "index"))
                }
                _removeUnreferencedMetasets() {
                    const {_metasets: t, data: {datasets: e}} = this;
                    t.length > e.length && delete this._stacks,
                    t.forEach(((t,i)=>{
                        0 === e.filter((e=>e === t._dataset)).length && this._destroyDatasetMeta(i)
                    }
                    ))
                }
                buildOrUpdateControllers() {
                    const t = []
                      , e = this.data.datasets;
                    let i, a;
                    for (this._removeUnreferencedMetasets(),
                    i = 0,
                    a = e.length; i < a; i++) {
                        const a = e[i];
                        let n = this.getDatasetMeta(i);
                        const s = a.type || this.config.type;
                        if (n.type && n.type !== s && (this._destroyDatasetMeta(i),
                        n = this.getDatasetMeta(i)),
                        n.type = s,
                        n.indexAxis = a.indexAxis || Ka(s, this.options),
                        n.order = a.order || 0,
                        n.index = i,
                        n.label = "" + a.label,
                        n.visible = this.isDatasetVisible(i),
                        n.controller)
                            n.controller.updateIndex(i),
                            n.controller.linkScales();
                        else {
                            const e = Ua.getController(s)
                              , {datasetElementType: a, dataElementType: r} = jt.datasets[s];
                            Object.assign(e.prototype, {
                                dataElementType: Ua.getElement(r),
                                datasetElementType: a && Ua.getElement(a)
                            }),
                            n.controller = new e(this,i),
                            t.push(n.controller)
                        }
                    }
                    return this._updateMetasets(),
                    t
                }
                _resetElements() {
                    m(this.data.datasets, ((t,e)=>{
                        this.getDatasetMeta(e).controller.reset()
                    }
                    ), this)
                }
                reset() {
                    this._resetElements(),
                    this.notifyPlugins("reset")
                }
                update(t) {
                    const e = this.config;
                    e.update();
                    const i = this._options = e.createResolver(e.chartOptionScopes(), this.getContext())
                      , a = this._animationsDisabled = !i.animation;
                    if (this._updateScales(),
                    this._checkEventBindings(),
                    this._updateHiddenIndices(),
                    this._plugins.invalidate(),
                    !1 === this.notifyPlugins("beforeUpdate", {
                        mode: t,
                        cancelable: !0
                    }))
                        return;
                    const n = this.buildOrUpdateControllers();
                    this.notifyPlugins("beforeElementsUpdate");
                    let s = 0;
                    for (let t = 0, e = this.data.datasets.length; t < e; t++) {
                        const {controller: e} = this.getDatasetMeta(t)
                          , i = !a && -1 === n.indexOf(e);
                        e.buildOrUpdateElements(i),
                        s = Math.max(+e.getMaxOverflow(), s)
                    }
                    s = this._minPadding = i.layout.autoPadding ? s : 0,
                    this._updateLayout(s),
                    a || m(n, (t=>{
                        t.reset()
                    }
                    )),
                    this._updateDatasets(t),
                    this.notifyPlugins("afterUpdate", {
                        mode: t
                    }),
                    this._layers.sort(hn("z", "_idx")),
                    this._lastEvent && this._eventHandler(this._lastEvent, !0),
                    this.render()
                }
                _updateScales() {
                    m(this.scales, (t=>{
                        pa.removeBox(this, t)
                    }
                    )),
                    this.ensureScalesHaveIDs(),
                    this.buildOrUpdateScales()
                }
                _checkEventBindings() {
                    const t = this.options
                      , e = new Set(Object.keys(this._listeners))
                      , i = new Set(t.events);
                    I(e, i) && !!this._responsiveListeners === t.responsive || (this.unbindEvents(),
                    this.bindEvents())
                }
                _updateHiddenIndices() {
                    const {_hiddenIndices: t} = this
                      , e = this._getUniformDataChanges() || [];
                    for (const {method: i, start: a, count: n} of e) {
                        gn(t, a, "_removeElements" === i ? -n : n)
                    }
                }
                _getUniformDataChanges() {
                    const t = this._dataChanges;
                    if (!t || !t.length)
                        return;
                    this._dataChanges = [];
                    const e = this.data.datasets.length
                      , i = e=>new Set(t.filter((t=>t[0] === e)).map(((t,e)=>e + "," + t.splice(1).join(","))))
                      , a = i(0);
                    for (let t = 1; t < e; t++)
                        if (!I(a, i(t)))
                            return;
                    return Array.from(a).map((t=>t.split(","))).map((t=>({
                        method: t[1],
                        start: +t[2],
                        count: +t[3]
                    })))
                }
                _updateLayout(t) {
                    if (!1 === this.notifyPlugins("beforeLayout", {
                        cancelable: !0
                    }))
                        return;
                    pa.update(this, this.width, this.height, t);
                    const e = this.chartArea
                      , i = e.width <= 0 || e.height <= 0;
                    this._layers = [],
                    m(this.boxes, (t=>{
                        i && "chartArea" === t.position || (t.configure && t.configure(),
                        this._layers.push(...t._layers()))
                    }
                    ), this),
                    this._layers.forEach(((t,e)=>{
                        t._idx = e
                    }
                    )),
                    this.notifyPlugins("afterLayout")
                }
                _updateDatasets(t) {
                    if (!1 !== this.notifyPlugins("beforeDatasetsUpdate", {
                        mode: t,
                        cancelable: !0
                    })) {
                        for (let t = 0, e = this.data.datasets.length; t < e; ++t)
                            this.getDatasetMeta(t).controller.configure();
                        for (let e = 0, i = this.data.datasets.length; e < i; ++e)
                            this._updateDataset(e, D(t) ? t({
                                datasetIndex: e
                            }) : t);
                        this.notifyPlugins("afterDatasetsUpdate", {
                            mode: t
                        })
                    }
                }
                _updateDataset(t, e) {
                    const i = this.getDatasetMeta(t)
                      , a = {
                        meta: i,
                        index: t,
                        mode: e,
                        cancelable: !0
                    };
                    !1 !== this.notifyPlugins("beforeDatasetUpdate", a) && (i.controller._update(e),
                    a.cancelable = !1,
                    this.notifyPlugins("afterDatasetUpdate", a))
                }
                render() {
                    !1 !== this.notifyPlugins("beforeRender", {
                        cancelable: !0
                    }) && (fi.has(this) ? this.attached && !fi.running(this) && fi.start(this) : (this.draw(),
                    dn({
                        chart: this
                    })))
                }
                draw() {
                    let t;
                    if (this._resizeBeforeDraw) {
                        const {width: t, height: e} = this._resizeBeforeDraw;
                        this._resize(t, e),
                        this._resizeBeforeDraw = null
                    }
                    if (this.clear(),
                    this.width <= 0 || this.height <= 0)
                        return;
                    if (!1 === this.notifyPlugins("beforeDraw", {
                        cancelable: !0
                    }))
                        return;
                    const e = this._layers;
                    for (t = 0; t < e.length && e[t].z <= 0; ++t)
                        e[t].draw(this.chartArea);
                    for (this._drawDatasets(); t < e.length; ++t)
                        e[t].draw(this.chartArea);
                    this.notifyPlugins("afterDraw")
                }
                _getSortedDatasetMetas(t) {
                    const e = this._sortedMetasets
                      , i = [];
                    let a, n;
                    for (a = 0,
                    n = e.length; a < n; ++a) {
                        const n = e[a];
                        t && !n.visible || i.push(n)
                    }
                    return i
                }
                getSortedVisibleDatasetMetas() {
                    return this._getSortedDatasetMetas(!0)
                }
                _drawDatasets() {
                    if (!1 === this.notifyPlugins("beforeDatasetsDraw", {
                        cancelable: !0
                    }))
                        return;
                    const t = this.getSortedVisibleDatasetMetas();
                    for (let e = t.length - 1; e >= 0; --e)
                        this._drawDataset(t[e]);
                    this.notifyPlugins("afterDatasetsDraw")
                }
                _drawDataset(t) {
                    const e = this.ctx
                      , i = t._clip
                      , a = !i.disabled
                      , n = this.chartArea
                      , s = {
                        meta: t,
                        index: t.index,
                        cancelable: !0
                    };
                    !1 !== this.notifyPlugins("beforeDatasetDraw", s) && (a && $t(e, {
                        left: !1 === i.left ? 0 : n.left - i.left,
                        right: !1 === i.right ? this.width : n.right + i.right,
                        top: !1 === i.top ? 0 : n.top - i.top,
                        bottom: !1 === i.bottom ? this.height : n.bottom + i.bottom
                    }),
                    t.controller.draw(),
                    a && qt(e),
                    s.cancelable = !1,
                    this.notifyPlugins("afterDatasetDraw", s))
                }
                getElementsAtEventForMode(t, e, i, a) {
                    const n = ia.modes[e];
                    return "function" == typeof n ? n(this, t, i, a) : []
                }
                getDatasetMeta(t) {
                    const e = this.data.datasets[t]
                      , i = this._metasets;
                    let a = i.filter((t=>t && t._dataset === e)).pop();
                    return a || (a = {
                        type: null,
                        data: [],
                        dataset: null,
                        controller: null,
                        hidden: null,
                        xAxisID: null,
                        yAxisID: null,
                        order: e && e.order || 0,
                        index: t,
                        _dataset: e,
                        _parsed: [],
                        _sorted: !1
                    },
                    i.push(a)),
                    a
                }
                getContext() {
                    return this.$context || (this.$context = de(null, {
                        chart: this,
                        type: "chart"
                    }))
                }
                getVisibleDatasetCount() {
                    return this.getSortedVisibleDatasetMetas().length
                }
                isDatasetVisible(t) {
                    const e = this.data.datasets[t];
                    if (!e)
                        return !1;
                    const i = this.getDatasetMeta(t);
                    return "boolean" == typeof i.hidden ? !i.hidden : !e.hidden
                }
                setDatasetVisibility(t, e) {
                    this.getDatasetMeta(t).hidden = !e
                }
                toggleDataVisibility(t) {
                    this._hiddenIndices[t] = !this._hiddenIndices[t]
                }
                getDataVisibility(t) {
                    return !this._hiddenIndices[t]
                }
                _updateVisibility(t, e, i) {
                    const a = i ? "show" : "hide"
                      , n = this.getDatasetMeta(t)
                      , s = n.controller._resolveAnimations(void 0, a);
                    S(e) ? (n.data[e].hidden = !i,
                    this.update()) : (this.setDatasetVisibility(t, i),
                    s.update(n, {
                        visible: i
                    }),
                    this.update((e=>e.datasetIndex === t ? a : void 0)))
                }
                hide(t, e) {
                    this._updateVisibility(t, e, !1)
                }
                show(t, e) {
                    this._updateVisibility(t, e, !0)
                }
                _destroyDatasetMeta(t) {
                    const e = this._metasets[t];
                    e && e.controller && e.controller._destroy(),
                    delete this._metasets[t]
                }
                _stop() {
                    let t, e;
                    for (this.stop(),
                    fi.remove(this),
                    t = 0,
                    e = this.data.datasets.length; t < e; ++t)
                        this._destroyDatasetMeta(t)
                }
                destroy() {
                    const {canvas: t, ctx: e} = this;
                    this._stop(),
                    this.config.clearCache(),
                    t && (this.unbindEvents(),
                    Wt(t, e),
                    this.platform.releaseContext(e),
                    this.canvas = null,
                    this.ctx = null),
                    this.notifyPlugins("destroy"),
                    delete mn[this.id]
                }
                toBase64Image(...t) {
                    return this.canvas.toDataURL(...t)
                }
                bindEvents() {
                    this.bindUserEvents(),
                    this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0
                }
                bindUserEvents() {
                    const t = this._listeners
                      , e = this.platform
                      , i = (i,a)=>{
                        e.addEventListener(this, i, a),
                        t[i] = a
                    }
                      , a = (t,e,i)=>{
                        t.offsetX = e,
                        t.offsetY = i,
                        this._eventHandler(t)
                    }
                    ;
                    m(this.options.events, (t=>i(t, a)))
                }
                bindResponsiveEvents() {
                    this._responsiveListeners || (this._responsiveListeners = {});
                    const t = this._responsiveListeners
                      , e = this.platform
                      , i = (i,a)=>{
                        e.addEventListener(this, i, a),
                        t[i] = a
                    }
                      , a = (i,a)=>{
                        t[i] && (e.removeEventListener(this, i, a),
                        delete t[i])
                    }
                      , n = (t,e)=>{
                        this.canvas && this.resize(t, e)
                    }
                    ;
                    let s;
                    const r = ()=>{
                        a("attach", r),
                        this.attached = !0,
                        this.resize(),
                        i("resize", n),
                        i("detach", s)
                    }
                    ;
                    s = ()=>{
                        this.attached = !1,
                        a("resize", n),
                        this._stop(),
                        this._resize(0, 0),
                        i("attach", r)
                    }
                    ,
                    e.isAttached(this.canvas) ? r() : s()
                }
                unbindEvents() {
                    m(this._listeners, ((t,e)=>{
                        this.platform.removeEventListener(this, e, t)
                    }
                    )),
                    this._listeners = {},
                    m(this._responsiveListeners, ((t,e)=>{
                        this.platform.removeEventListener(this, e, t)
                    }
                    )),
                    this._responsiveListeners = void 0
                }
                updateHoverStyle(t, e, i) {
                    const a = i ? "set" : "remove";
                    let n, s, r, o;
                    for ("dataset" === e && (n = this.getDatasetMeta(t[0].datasetIndex),
                    n.controller["_" + a + "DatasetHoverStyle"]()),
                    r = 0,
                    o = t.length; r < o; ++r) {
                        s = t[r];
                        const e = s && this.getDatasetMeta(s.datasetIndex).controller;
                        e && e[a + "HoverStyle"](s.element, s.datasetIndex, s.index)
                    }
                }
                getActiveElements() {
                    return this._active || []
                }
                setActiveElements(t) {
                    const e = this._active || []
                      , i = t.map((({datasetIndex: t, index: e})=>{
                        const i = this.getDatasetMeta(t);
                        if (!i)
                            throw new Error("No dataset found at index " + t);
                        return {
                            datasetIndex: t,
                            element: i.data[e],
                            index: e
                        }
                    }
                    ));
                    !p(i, e) && (this._active = i,
                    this._updateHoverStyles(i, e))
                }
                notifyPlugins(t, e, i) {
                    return this._plugins.notify(this, t, e, i)
                }
                _updateHoverStyles(t, e, i) {
                    const a = this.options.hover
                      , n = (t,e)=>t.filter((t=>!e.some((e=>t.datasetIndex === e.datasetIndex && t.index === e.index))))
                      , s = n(e, t)
                      , r = i ? t : n(t, e);
                    s.length && this.updateHoverStyle(s, a.mode, !1),
                    r.length && a.mode && this.updateHoverStyle(r, a.mode, !0)
                }
                _eventHandler(t, e) {
                    const i = {
                        event: t,
                        replay: e,
                        cancelable: !0
                    }
                      , a = e=>(e.options.events || this.options.events).includes(t.native.type);
                    if (!1 === this.notifyPlugins("beforeEvent", i, a))
                        return;
                    const n = this._handleEvent(t, e);
                    return i.cancelable = !1,
                    this.notifyPlugins("afterEvent", i, a),
                    (n || i.changed) && this.render(),
                    this
                }
                _handleEvent(t, e) {
                    const {_active: i=[], options: a} = this
                      , n = a.hover
                      , s = e;
                    let r = []
                      , o = !1
                      , l = null;
                    return "mouseout" !== t.type && (r = this.getElementsAtEventForMode(t, n.mode, n, s),
                    l = "click" === t.type ? this._lastEvent : t),
                    this._lastEvent = null,
                    Ht(t, this.chartArea, this._minPadding) && (u(a.onHover, [t, r, this], this),
                    "mouseup" !== t.type && "click" !== t.type && "contextmenu" !== t.type || u(a.onClick, [t, r, this], this)),
                    o = !p(r, i),
                    (o || e) && (this._active = r,
                    this._updateHoverStyles(r, i, e)),
                    this._lastEvent = l,
                    o
                }
            }
            const xn = ()=>m(bn.instances, (t=>t._plugins.invalidate()))
              , yn = !0;
            function kn(t, e, i) {
                const {startAngle: a, pixelMargin: n, x: s, y: r, outerRadius: o, innerRadius: l} = e;
                let c = n / o;
                t.beginPath(),
                t.arc(s, r, o, a - c, i + c),
                l > n ? (c = n / l,
                t.arc(s, r, l, i + c, a - c, !0)) : t.arc(s, r, n, i + T, a - T),
                t.closePath(),
                t.clip()
            }
            function _n(t, e, i, a) {
                const n = se(t.options.borderRadius, ["outerStart", "outerEnd", "innerStart", "innerEnd"]);
                const s = (i - e) / 2
                  , r = Math.min(s, a * e / 2)
                  , o = t=>{
                    const e = (i - Math.min(s, t)) * a / 2;
                    return K(t, 0, Math.min(s, e))
                }
                ;
                return {
                    outerStart: o(n.outerStart),
                    outerEnd: o(n.outerEnd),
                    innerStart: K(n.innerStart, 0, r),
                    innerEnd: K(n.innerEnd, 0, r)
                }
            }
            function wn(t, e, i, a) {
                return {
                    x: i + t * Math.cos(e),
                    y: a + t * Math.sin(e)
                }
            }
            function vn(t, e, i, a, n) {
                const {x: s, y: r, startAngle: o, pixelMargin: l, innerRadius: c} = e
                  , h = Math.max(e.outerRadius + a + i - l, 0)
                  , d = c > 0 ? c + a + i + l : 0;
                let f = 0;
                const u = n - o;
                if (a) {
                    const t = ((c > 0 ? c - a : 0) + (h > 0 ? h - a : 0)) / 2;
                    f = (u - (0 !== t ? u * t / (t + a) : u)) / 2
                }
                const m = (u - Math.max(.001, u * h - i / R) / h) / 2
                  , p = o + m + f
                  , g = n - m - f
                  , {outerStart: b, outerEnd: x, innerStart: y, innerEnd: k} = _n(e, d, h, g - p)
                  , _ = h - b
                  , w = h - x
                  , v = p + b / _
                  , O = g - x / w
                  , M = d + y
                  , S = d + k
                  , D = p + y / M
                  , I = g - k / S;
                if (t.beginPath(),
                t.arc(s, r, h, v, O),
                x > 0) {
                    const e = wn(w, O, s, r);
                    t.arc(e.x, e.y, x, O, g + T)
                }
                const L = wn(S, g, s, r);
                if (t.lineTo(L.x, L.y),
                k > 0) {
                    const e = wn(S, I, s, r);
                    t.arc(e.x, e.y, k, g + T, I + Math.PI)
                }
                if (t.arc(s, r, d, g - k / d, p + y / d, !0),
                y > 0) {
                    const e = wn(M, D, s, r);
                    t.arc(e.x, e.y, y, D + Math.PI, p - T)
                }
                const P = wn(_, p, s, r);
                if (t.lineTo(P.x, P.y),
                b > 0) {
                    const e = wn(_, v, s, r);
                    t.arc(e.x, e.y, b, p - T, v)
                }
                t.closePath()
            }
            function On(t, e, i, a, n) {
                const {options: s} = e
                  , r = "inner" === s.borderAlign;
                s.borderWidth && (r ? (t.lineWidth = 2 * s.borderWidth,
                t.lineJoin = "round") : (t.lineWidth = s.borderWidth,
                t.lineJoin = "bevel"),
                e.fullCircles && function(t, e, i) {
                    const {x: a, y: n, startAngle: s, pixelMargin: r, fullCircles: o} = e
                      , l = Math.max(e.outerRadius - r, 0)
                      , c = e.innerRadius + r;
                    let h;
                    for (i && kn(t, e, s + L),
                    t.beginPath(),
                    t.arc(a, n, c, s + L, s, !0),
                    h = 0; h < o; ++h)
                        t.stroke();
                    for (t.beginPath(),
                    t.arc(a, n, l, s, s + L),
                    h = 0; h < o; ++h)
                        t.stroke()
                }(t, e, r),
                r && kn(t, e, n),
                vn(t, e, i, a, n),
                t.stroke())
            }
            Object.defineProperties(bn, {
                defaults: {
                    enumerable: yn,
                    value: jt
                },
                instances: {
                    enumerable: yn,
                    value: mn
                },
                overrides: {
                    enumerable: yn,
                    value: Bt
                },
                registry: {
                    enumerable: yn,
                    value: Ua
                },
                version: {
                    enumerable: yn,
                    value: "3.6.2"
                },
                getChart: {
                    enumerable: yn,
                    value: pn
                },
                register: {
                    enumerable: yn,
                    value: (...t)=>{
                        Ua.add(...t),
                        xn()
                    }
                },
                unregister: {
                    enumerable: yn,
                    value: (...t)=>{
                        Ua.remove(...t),
                        xn()
                    }
                }
            });
            class Mn extends Aa {
                constructor(t) {
                    super(),
                    this.options = void 0,
                    this.circumference = void 0,
                    this.startAngle = void 0,
                    this.endAngle = void 0,
                    this.innerRadius = void 0,
                    this.outerRadius = void 0,
                    this.pixelMargin = 0,
                    this.fullCircles = 0,
                    t && Object.assign(this, t)
                }
                inRange(t, e, i) {
                    const a = this.getProps(["x", "y"], i)
                      , {angle: n, distance: s} = function(t, e) {
                        const i = e.x - t.x
                          , a = e.y - t.y
                          , n = Math.sqrt(i * i + a * a);
                        let s = Math.atan2(a, i);
                        return s < -.5 * R && (s += L),
                        {
                            angle: s,
                            distance: n
                        }
                    }(a, {
                        x: t,
                        y: e
                    })
                      , {startAngle: r, endAngle: o, innerRadius: l, outerRadius: c, circumference: h} = this.getProps(["startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], i)
                      , f = this.options.spacing / 2
                      , u = d(h, o - r) >= L || q(n, r, o)
                      , m = G(s, l + f, c + f);
                    return u && m
                }
                getCenterPoint(t) {
                    const {x: e, y: i, startAngle: a, endAngle: n, innerRadius: s, outerRadius: r} = this.getProps(["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], t)
                      , {offset: o, spacing: l} = this.options
                      , c = (a + n) / 2
                      , h = (s + r + l + o) / 2;
                    return {
                        x: e + Math.cos(c) * h,
                        y: i + Math.sin(c) * h
                    }
                }
                tooltipPosition(t) {
                    return this.getCenterPoint(t)
                }
                draw(t) {
                    const {options: e, circumference: i} = this
                      , a = (e.offset || 0) / 2
                      , n = (e.spacing || 0) / 2;
                    if (this.pixelMargin = "inner" === e.borderAlign ? .33 : 0,
                    this.fullCircles = i > L ? Math.floor(i / L) : 0,
                    0 === i || this.innerRadius < 0 || this.outerRadius < 0)
                        return;
                    t.save();
                    let s = 0;
                    if (a) {
                        s = a / 2;
                        const e = (this.startAngle + this.endAngle) / 2;
                        t.translate(Math.cos(e) * s, Math.sin(e) * s),
                        this.circumference >= R && (s = a)
                    }
                    t.fillStyle = e.backgroundColor,
                    t.strokeStyle = e.borderColor;
                    const r = function(t, e, i, a) {
                        const {fullCircles: n, startAngle: s, circumference: r} = e;
                        let o = e.endAngle;
                        if (n) {
                            vn(t, e, i, a, s + L);
                            for (let e = 0; e < n; ++e)
                                t.fill();
                            isNaN(r) || (o = s + r % L,
                            r % L == 0 && (o += L))
                        }
                        return vn(t, e, i, a, o),
                        t.fill(),
                        o
                    }(t, this, s, n);
                    On(t, this, s, n, r),
                    t.restore()
                }
            }
            function Sn(t, e, i=e) {
                t.lineCap = d(i.borderCapStyle, e.borderCapStyle),
                t.setLineDash(d(i.borderDash, e.borderDash)),
                t.lineDashOffset = d(i.borderDashOffset, e.borderDashOffset),
                t.lineJoin = d(i.borderJoinStyle, e.borderJoinStyle),
                t.lineWidth = d(i.borderWidth, e.borderWidth),
                t.strokeStyle = d(i.borderColor, e.borderColor)
            }
            function Dn(t, e, i) {
                t.lineTo(i.x, i.y)
            }
            function In(t, e, i={}) {
                const a = t.length
                  , {start: n=0, end: s=a - 1} = i
                  , {start: r, end: o} = e
                  , l = Math.max(n, r)
                  , c = Math.min(s, o)
                  , h = n < r && s < r || n > o && s > o;
                return {
                    count: a,
                    start: l,
                    loop: e.loop,
                    ilen: c < l && !h ? a + c - l : c - l
                }
            }
            function Rn(t, e, i, a) {
                const {points: n, options: s} = e
                  , {count: r, start: o, loop: l, ilen: c} = In(n, i, a)
                  , h = function(t) {
                    return t.stepped ? Kt : t.tension || "monotone" === t.cubicInterpolationMode ? Gt : Dn
                }(s);
                let d, f, u, {move: m=!0, reverse: p} = a || {};
                for (d = 0; d <= c; ++d)
                    f = n[(o + (p ? c - d : d)) % r],
                    f.skip || (m ? (t.moveTo(f.x, f.y),
                    m = !1) : h(t, u, f, p, s.stepped),
                    u = f);
                return l && (f = n[(o + (p ? c : 0)) % r],
                h(t, u, f, p, s.stepped)),
                !!l
            }
            function Ln(t, e, i, a) {
                const n = e.points
                  , {count: s, start: r, ilen: o} = In(n, i, a)
                  , {move: l=!0, reverse: c} = a || {};
                let h, d, f, u, m, p, g = 0, b = 0;
                const x = t=>(r + (c ? o - t : t)) % s
                  , y = ()=>{
                    u !== m && (t.lineTo(g, m),
                    t.lineTo(g, u),
                    t.lineTo(g, p))
                }
                ;
                for (l && (d = n[x(0)],
                t.moveTo(d.x, d.y)),
                h = 0; h <= o; ++h) {
                    if (d = n[x(h)],
                    d.skip)
                        continue;
                    const e = d.x
                      , i = d.y
                      , a = 0 | e;
                    a === f ? (i < u ? u = i : i > m && (m = i),
                    g = (b * g + e) / ++b) : (y(),
                    t.lineTo(e, i),
                    f = a,
                    b = 0,
                    u = m = i),
                    p = i
                }
                y()
            }
            function Pn(t) {
                const e = t.options
                  , i = e.borderDash && e.borderDash.length;
                return !(t._decimated || t._loop || e.tension || "monotone" === e.cubicInterpolationMode || e.stepped || i) ? Ln : Rn
            }
            Mn.id = "arc",
            Mn.defaults = {
                borderAlign: "center",
                borderColor: "#fff",
                borderRadius: 0,
                borderWidth: 2,
                offset: 0,
                spacing: 0,
                angle: void 0
            },
            Mn.defaultRoutes = {
                backgroundColor: "backgroundColor"
            };
            const Cn = "function" == typeof Path2D;
            function An(t, e, i, a) {
                Cn && !e.options.segment ? function(t, e, i, a) {
                    let n = e._path;
                    n || (n = e._path = new Path2D,
                    e.path(n, i, a) && n.closePath()),
                    Sn(t, e.options),
                    t.stroke(n)
                }(t, e, i, a) : function(t, e, i, a) {
                    const {segments: n, options: s} = e
                      , r = Pn(e);
                    for (const o of n)
                        Sn(t, s, o.style),
                        t.beginPath(),
                        r(t, e, o, {
                            start: i,
                            end: i + a - 1
                        }) && t.closePath(),
                        t.stroke()
                }(t, e, i, a)
            }
            class Tn extends Aa {
                constructor(t) {
                    super(),
                    this.animated = !0,
                    this.options = void 0,
                    this._chart = void 0,
                    this._loop = void 0,
                    this._fullLoop = void 0,
                    this._path = void 0,
                    this._points = void 0,
                    this._segments = void 0,
                    this._decimated = !1,
                    this._pointsUpdated = !1,
                    this._datasetIndex = void 0,
                    t && Object.assign(this, t)
                }
                updateControlPoints(t, e) {
                    const i = this.options;
                    if ((i.tension || "monotone" === i.cubicInterpolationMode) && !i.stepped && !this._pointsUpdated) {
                        const a = i.spanGaps ? this._loop : this._fullLoop;
                        Be(this._points, i, t, a, e),
                        this._pointsUpdated = !0
                    }
                }
                set points(t) {
                    this._points = t,
                    delete this._segments,
                    delete this._path,
                    this._pointsUpdated = !1
                }
                get points() {
                    return this._points
                }
                get segments() {
                    return this._segments || (this._segments = function(t, e) {
                        const i = t.points
                          , a = t.options.spanGaps
                          , n = i.length;
                        if (!n)
                            return [];
                        const s = !!t._loop
                          , {start: r, end: o} = function(t, e, i, a) {
                            let n = 0
                              , s = e - 1;
                            if (i && !a)
                                for (; n < e && !t[n].skip; )
                                    n++;
                            for (; n < e && t[n].skip; )
                                n++;
                            for (n %= e,
                            i && (s += n); s > n && t[s % e].skip; )
                                s--;
                            return s %= e,
                            {
                                start: n,
                                end: s
                            }
                        }(i, n, s, a);
                        return ci(t, !0 === a ? [{
                            start: r,
                            end: o,
                            loop: s
                        }] : function(t, e, i, a) {
                            const n = t.length
                              , s = [];
                            let r, o = e, l = t[e];
                            for (r = e + 1; r <= i; ++r) {
                                const i = t[r % n];
                                i.skip || i.stop ? l.skip || (a = !1,
                                s.push({
                                    start: e % n,
                                    end: (r - 1) % n,
                                    loop: a
                                }),
                                e = o = i.stop ? r : null) : (o = r,
                                l.skip && (e = r)),
                                l = i
                            }
                            return null !== o && s.push({
                                start: e % n,
                                end: o % n,
                                loop: a
                            }),
                            s
                        }(i, r, o < r ? o + n : o, !!t._fullLoop && 0 === r && o === n - 1), i, e)
                    }(this, this.options.segment))
                }
                first() {
                    const t = this.segments
                      , e = this.points;
                    return t.length && e[t[0].start]
                }
                last() {
                    const t = this.segments
                      , e = this.points
                      , i = t.length;
                    return i && e[t[i - 1].end]
                }
                interpolate(t, e) {
                    const i = this.options
                      , a = t[e]
                      , n = this.points
                      , s = li(this, {
                        property: e,
                        start: a,
                        end: a
                    });
                    if (!s.length)
                        return;
                    const r = []
                      , o = function(t) {
                        return t.stepped ? Je : t.tension || "monotone" === t.cubicInterpolationMode ? Qe : Ge
                    }(i);
                    let l, c;
                    for (l = 0,
                    c = s.length; l < c; ++l) {
                        const {start: c, end: h} = s[l]
                          , d = n[c]
                          , f = n[h];
                        if (d === f) {
                            r.push(d);
                            continue
                        }
                        const u = o(d, f, Math.abs((a - d[e]) / (f[e] - d[e])), i.stepped);
                        u[e] = t[e],
                        r.push(u)
                    }
                    return 1 === r.length ? r[0] : r
                }
                pathSegment(t, e, i) {
                    return Pn(this)(t, this, e, i)
                }
                path(t, e, i) {
                    const a = this.segments
                      , n = Pn(this);
                    let s = this._loop;
                    e = e || 0,
                    i = i || this.points.length - e;
                    for (const r of a)
                        s &= n(t, this, r, {
                            start: e,
                            end: e + i - 1
                        });
                    return !!s
                }
                draw(t, e, i, a) {
                    const n = this.options || {};
                    (this.points || []).length && n.borderWidth && (t.save(),
                    An(t, this, i, a),
                    t.restore()),
                    this.animated && (this._pointsUpdated = !1,
                    this._path = void 0)
                }
            }
            function En(t, e, i, a) {
                const n = t.options
                  , {[i]: s} = t.getProps([i], a);
                return Math.abs(e - s) < n.radius + n.hitRadius
            }
            Tn.id = "line",
            Tn.defaults = {
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0,
                borderJoinStyle: "miter",
                borderWidth: 3,
                capBezierPoints: !0,
                cubicInterpolationMode: "default",
                fill: !1,
                spanGaps: !1,
                stepped: !1,
                tension: 0
            },
            Tn.defaultRoutes = {
                backgroundColor: "backgroundColor",
                borderColor: "borderColor"
            },
            Tn.descriptors = {
                _scriptable: !0,
                _indexable: t=>"borderDash" !== t && "fill" !== t
            };
            class zn extends Aa {
                constructor(t) {
                    super(),
                    this.options = void 0,
                    this.parsed = void 0,
                    this.skip = void 0,
                    this.stop = void 0,
                    t && Object.assign(this, t)
                }
                inRange(t, e, i) {
                    const a = this.options
                      , {x: n, y: s} = this.getProps(["x", "y"], i);
                    return Math.pow(t - n, 2) + Math.pow(e - s, 2) < Math.pow(a.hitRadius + a.radius, 2)
                }
                inXRange(t, e) {
                    return En(this, t, "x", e)
                }
                inYRange(t, e) {
                    return En(this, t, "y", e)
                }
                getCenterPoint(t) {
                    const {x: e, y: i} = this.getProps(["x", "y"], t);
                    return {
                        x: e,
                        y: i
                    }
                }
                size(t) {
                    let e = (t = t || this.options || {}).radius || 0;
                    e = Math.max(e, e && t.hoverRadius || 0);
                    return 2 * (e + (e && t.borderWidth || 0))
                }
                draw(t, e) {
                    const i = this.options;
                    this.skip || i.radius < .1 || !Ht(this, e, this.size(i) / 2) || (t.strokeStyle = i.borderColor,
                    t.lineWidth = i.borderWidth,
                    t.fillStyle = i.backgroundColor,
                    Ut(t, i, this.x, this.y))
                }
                getRange() {
                    const t = this.options || {};
                    return t.radius + t.hitRadius
                }
            }
            function Bn(t, e) {
                const {x: i, y: a, base: n, width: s, height: r} = t.getProps(["x", "y", "base", "width", "height"], e);
                let o, l, c, h, d;
                return t.horizontal ? (d = r / 2,
                o = Math.min(i, n),
                l = Math.max(i, n),
                c = a - d,
                h = a + d) : (d = s / 2,
                o = i - d,
                l = i + d,
                c = Math.min(a, n),
                h = Math.max(a, n)),
                {
                    left: o,
                    top: c,
                    right: l,
                    bottom: h
                }
            }
            function Xn(t, e, i, a) {
                return t ? 0 : K(e, i, a)
            }
            function Yn(t) {
                const e = Bn(t)
                  , i = e.right - e.left
                  , a = e.bottom - e.top
                  , n = function(t, e, i) {
                    const a = t.options.borderWidth
                      , n = t.borderSkipped
                      , s = re(a);
                    return {
                        t: Xn(n.top, s.top, 0, i),
                        r: Xn(n.right, s.right, 0, e),
                        b: Xn(n.bottom, s.bottom, 0, i),
                        l: Xn(n.left, s.left, 0, e)
                    }
                }(t, i / 2, a / 2)
                  , s = function(t, e, i) {
                    const {enableBorderRadius: a} = t.getProps(["enableBorderRadius"])
                      , n = t.options.borderRadius
                      , s = oe(n)
                      , r = Math.min(e, i)
                      , o = t.borderSkipped
                      , c = a || l(n);
                    return {
                        topLeft: Xn(!c || o.top || o.left, s.topLeft, 0, r),
                        topRight: Xn(!c || o.top || o.right, s.topRight, 0, r),
                        bottomLeft: Xn(!c || o.bottom || o.left, s.bottomLeft, 0, r),
                        bottomRight: Xn(!c || o.bottom || o.right, s.bottomRight, 0, r)
                    }
                }(t, i / 2, a / 2);
                return {
                    outer: {
                        x: e.left,
                        y: e.top,
                        w: i,
                        h: a,
                        radius: s
                    },
                    inner: {
                        x: e.left + n.l,
                        y: e.top + n.t,
                        w: i - n.l - n.r,
                        h: a - n.t - n.b,
                        radius: {
                            topLeft: Math.max(0, s.topLeft - Math.max(n.t, n.l)),
                            topRight: Math.max(0, s.topRight - Math.max(n.t, n.r)),
                            bottomLeft: Math.max(0, s.bottomLeft - Math.max(n.b, n.l)),
                            bottomRight: Math.max(0, s.bottomRight - Math.max(n.b, n.r))
                        }
                    }
                }
            }
            function Fn(t, e, i, a) {
                const n = null === e
                  , s = null === i
                  , r = t && !(n && s) && Bn(t, a);
                return r && (n || G(e, r.left, r.right)) && (s || G(i, r.top, r.bottom))
            }
            function jn(t, e) {
                t.rect(e.x, e.y, e.w, e.h)
            }
            function Nn(t, e, i={}) {
                const a = t.x !== i.x ? -e : 0
                  , n = t.y !== i.y ? -e : 0
                  , s = (t.x + t.w !== i.x + i.w ? e : 0) - a
                  , r = (t.y + t.h !== i.y + i.h ? e : 0) - n;
                return {
                    x: t.x + a,
                    y: t.y + n,
                    w: t.w + s,
                    h: t.h + r,
                    radius: t.radius
                }
            }
            zn.id = "point",
            zn.defaults = {
                borderWidth: 1,
                hitRadius: 1,
                hoverBorderWidth: 1,
                hoverRadius: 4,
                pointStyle: "circle",
                radius: 3,
                rotation: 0
            },
            zn.defaultRoutes = {
                backgroundColor: "backgroundColor",
                borderColor: "borderColor"
            };
            class Zn extends Aa {
                constructor(t) {
                    super(),
                    this.options = void 0,
                    this.horizontal = void 0,
                    this.base = void 0,
                    this.width = void 0,
                    this.height = void 0,
                    this.inflateAmount = void 0,
                    t && Object.assign(this, t)
                }
                draw(t) {
                    const {inflateAmount: e, options: {borderColor: i, backgroundColor: a}} = this
                      , {inner: n, outer: s} = Yn(this)
                      , r = (o = s.radius).topLeft || o.topRight || o.bottomLeft || o.bottomRight ? te : jn;
                    var o;
                    t.save(),
                    s.w === n.w && s.h === n.h || (t.beginPath(),
                    r(t, Nn(s, e, n)),
                    t.clip(),
                    r(t, Nn(n, -e, s)),
                    t.fillStyle = i,
                    t.fill("evenodd")),
                    t.beginPath(),
                    r(t, Nn(n, e)),
                    t.fillStyle = a,
                    t.fill(),
                    t.restore()
                }
                inRange(t, e, i) {
                    return Fn(this, t, e, i)
                }
                inXRange(t, e) {
                    return Fn(this, t, null, e)
                }
                inYRange(t, e) {
                    return Fn(this, null, t, e)
                }
                getCenterPoint(t) {
                    const {x: e, y: i, base: a, horizontal: n} = this.getProps(["x", "y", "base", "horizontal"], t);
                    return {
                        x: n ? (e + a) / 2 : e,
                        y: n ? i : (i + a) / 2
                    }
                }
                getRange(t) {
                    return "x" === t ? this.width / 2 : this.height / 2
                }
            }
            Zn.id = "bar",
            Zn.defaults = {
                borderSkipped: "start",
                borderWidth: 0,
                borderRadius: 0,
                inflateAmount: "auto",
                pointStyle: void 0
            },
            Zn.defaultRoutes = {
                backgroundColor: "backgroundColor",
                borderColor: "borderColor"
            };
            var Vn = Object.freeze({
                __proto__: null,
                ArcElement: Mn,
                LineElement: Tn,
                PointElement: zn,
                BarElement: Zn
            });
            function Wn(t) {
                if (t._decimated) {
                    const e = t._data;
                    delete t._decimated,
                    delete t._data,
                    Object.defineProperty(t, "data", {
                        value: e
                    })
                }
            }
            function Un(t) {
                t.data.datasets.forEach((t=>{
                    Wn(t)
                }
                ))
            }
            var Hn = {
                id: "decimation",
                defaults: {
                    algorithm: "min-max",
                    enabled: !1
                },
                beforeElementsUpdate: (t,e,i)=>{
                    if (!i.enabled)
                        return void Un(t);
                    const a = t.width;
                    t.data.datasets.forEach(((e,n)=>{
                        const {_data: s, indexAxis: o} = e
                          , l = t.getDatasetMeta(n)
                          , c = s || e.data;
                        if ("y" === he([o, t.options.indexAxis]))
                            return;
                        if ("line" !== l.type)
                            return;
                        const h = t.scales[l.xAxisID];
                        if ("linear" !== h.type && "time" !== h.type)
                            return;
                        if (t.options.parsing)
                            return;
                        let {start: d, count: f} = function(t, e) {
                            const i = e.length;
                            let a, n = 0;
                            const {iScale: s} = t
                              , {min: r, max: o, minDefined: l, maxDefined: c} = s.getUserBounds();
                            return l && (n = K(ue(e, s.axis, r).lo, 0, i - 1)),
                            a = c ? K(ue(e, s.axis, o).hi + 1, n, i) - n : i - n,
                            {
                                start: n,
                                count: a
                            }
                        }(l, c);
                        if (f <= (i.threshold || 4 * a))
                            return void Wn(e);
                        let u;
                        switch (r(s) && (e._data = c,
                        delete e.data,
                        Object.defineProperty(e, "data", {
                            configurable: !0,
                            enumerable: !0,
                            get: function() {
                                return this._decimated
                            },
                            set: function(t) {
                                this._data = t
                            }
                        })),
                        i.algorithm) {
                        case "lttb":
                            u = function(t, e, i, a, n) {
                                const s = n.samples || a;
                                if (s >= i)
                                    return t.slice(e, e + i);
                                const r = []
                                  , o = (i - 2) / (s - 2);
                                let l = 0;
                                const c = e + i - 1;
                                let h, d, f, u, m, p = e;
                                for (r[l++] = t[p],
                                h = 0; h < s - 2; h++) {
                                    let a, n = 0, s = 0;
                                    const c = Math.floor((h + 1) * o) + 1 + e
                                      , g = Math.min(Math.floor((h + 2) * o) + 1, i) + e
                                      , b = g - c;
                                    for (a = c; a < g; a++)
                                        n += t[a].x,
                                        s += t[a].y;
                                    n /= b,
                                    s /= b;
                                    const x = Math.floor(h * o) + 1 + e
                                      , y = Math.min(Math.floor((h + 1) * o) + 1, i) + e
                                      , {x: k, y: _} = t[p];
                                    for (f = u = -1,
                                    a = x; a < y; a++)
                                        u = .5 * Math.abs((k - n) * (t[a].y - _) - (k - t[a].x) * (s - _)),
                                        u > f && (f = u,
                                        d = t[a],
                                        m = a);
                                    r[l++] = d,
                                    p = m
                                }
                                return r[l++] = t[c],
                                r
                            }(c, d, f, a, i);
                            break;
                        case "min-max":
                            u = function(t, e, i, a) {
                                let n, s, o, l, c, h, d, f, u, m, p = 0, g = 0;
                                const b = []
                                  , x = e + i - 1
                                  , y = t[e].x
                                  , k = t[x].x - y;
                                for (n = e; n < e + i; ++n) {
                                    s = t[n],
                                    o = (s.x - y) / k * a,
                                    l = s.y;
                                    const e = 0 | o;
                                    if (e === c)
                                        l < u ? (u = l,
                                        h = n) : l > m && (m = l,
                                        d = n),
                                        p = (g * p + s.x) / ++g;
                                    else {
                                        const i = n - 1;
                                        if (!r(h) && !r(d)) {
                                            const e = Math.min(h, d)
                                              , a = Math.max(h, d);
                                            e !== f && e !== i && b.push({
                                                ...t[e],
                                                x: p
                                            }),
                                            a !== f && a !== i && b.push({
                                                ...t[a],
                                                x: p
                                            })
                                        }
                                        n > 0 && i !== f && b.push(t[i]),
                                        b.push(s),
                                        c = e,
                                        g = 0,
                                        u = m = l,
                                        h = d = f = n
                                    }
                                }
                                return b
                            }(c, d, f, a);
                            break;
                        default:
                            throw new Error(`Unsupported decimation algorithm '${i.algorithm}'`)
                        }
                        e._decimated = u
                    }
                    ))
                }
                ,
                destroy(t) {
                    Un(t)
                }
            };
            function $n(t, e, i) {
                const a = function(t) {
                    const e = t.options
                      , i = e.fill;
                    let a = d(i && i.target, i);
                    return void 0 === a && (a = !!e.backgroundColor),
                    !1 !== a && null !== a && (!0 === a ? "origin" : a)
                }(t);
                if (l(a))
                    return !isNaN(a.value) && a;
                let n = parseFloat(a);
                return c(n) && Math.floor(n) === n ? ("-" !== a[0] && "+" !== a[0] || (n = e + n),
                !(n === e || n < 0 || n >= i) && n) : ["origin", "start", "end", "stack", "shape"].indexOf(a) >= 0 && a
            }
            class qn {
                constructor(t) {
                    this.x = t.x,
                    this.y = t.y,
                    this.radius = t.radius
                }
                pathSegment(t, e, i) {
                    const {x: a, y: n, radius: s} = this;
                    return e = e || {
                        start: 0,
                        end: L
                    },
                    t.arc(a, n, s, e.end, e.start, !0),
                    !i.bounds
                }
                interpolate(t) {
                    const {x: e, y: i, radius: a} = this
                      , n = t.angle;
                    return {
                        x: e + Math.cos(n) * a,
                        y: i + Math.sin(n) * a,
                        angle: n
                    }
                }
            }
            function Kn(t) {
                return (t.scale || {}).getPointPositionForValue ? function(t) {
                    const {scale: e, fill: i} = t
                      , a = e.options
                      , n = e.getLabels().length
                      , s = []
                      , r = a.reverse ? e.max : e.min
                      , o = a.reverse ? e.min : e.max;
                    let c, h, d;
                    if (d = "start" === i ? r : "end" === i ? o : l(i) ? i.value : e.getBaseValue(),
                    a.grid.circular)
                        return h = e.getPointPositionForValue(0, r),
                        new qn({
                            x: h.x,
                            y: h.y,
                            radius: e.getDistanceFromCenterForValue(d)
                        });
                    for (c = 0; c < n; ++c)
                        s.push(e.getPointPositionForValue(c, d));
                    return s
                }(t) : function(t) {
                    const {scale: e={}, fill: i} = t;
                    let a, n = null;
                    return "start" === i ? n = e.bottom : "end" === i ? n = e.top : l(i) ? n = e.getPixelForValue(i.value) : e.getBasePixel && (n = e.getBasePixel()),
                    c(n) ? (a = e.isHorizontal(),
                    {
                        x: a ? n : null,
                        y: a ? null : n
                    }) : null
                }(t)
            }
            function Gn(t, e, i) {
                for (; e > t; e--) {
                    const t = i[e];
                    if (!isNaN(t.x) && !isNaN(t.y))
                        break
                }
                return e
            }
            function Jn(t, e, i) {
                const a = [];
                for (let n = 0; n < i.length; n++) {
                    const s = i[n]
                      , {first: r, last: o, point: l} = Qn(s, e, "x");
                    if (!(!l || r && o))
                        if (r)
                            a.unshift(l);
                        else if (t.push(l),
                        !o)
                            break
                }
                t.push(...a)
            }
            function Qn(t, e, i) {
                const a = t.interpolate(e, i);
                if (!a)
                    return {};
                const n = a[i]
                  , s = t.segments
                  , r = t.points;
                let o = !1
                  , l = !1;
                for (let t = 0; t < s.length; t++) {
                    const e = s[t]
                      , a = r[e.start][i]
                      , c = r[e.end][i];
                    if (G(n, a, c)) {
                        o = n === a,
                        l = n === c;
                        break
                    }
                }
                return {
                    first: o,
                    last: l,
                    point: a
                }
            }
            function ts(t) {
                const {chart: e, fill: i, line: a} = t;
                if (c(i))
                    return function(t, e) {
                        const i = t.getDatasetMeta(e);
                        return i && t.isDatasetVisible(e) ? i.dataset : null
                    }(e, i);
                if ("stack" === i)
                    return function(t) {
                        const {scale: e, index: i, line: a} = t
                          , n = []
                          , s = a.segments
                          , r = a.points
                          , o = function(t, e) {
                            const i = []
                              , a = t.getMatchingVisibleMetas("line");
                            for (let t = 0; t < a.length; t++) {
                                const n = a[t];
                                if (n.index === e)
                                    break;
                                n.hidden || i.unshift(n.dataset)
                            }
                            return i
                        }(e, i);
                        o.push(es({
                            x: null,
                            y: e.bottom
                        }, a));
                        for (let t = 0; t < s.length; t++) {
                            const e = s[t];
                            for (let t = e.start; t <= e.end; t++)
                                Jn(n, r[t], o)
                        }
                        return new Tn({
                            points: n,
                            options: {}
                        })
                    }(t);
                if ("shape" === i)
                    return !0;
                const n = Kn(t);
                return n instanceof qn ? n : es(n, a)
            }
            function es(t, e) {
                let i = []
                  , a = !1;
                return o(t) ? (a = !0,
                i = t) : i = function(t, e) {
                    const {x: i=null, y: a=null} = t || {}
                      , n = e.points
                      , s = [];
                    return e.segments.forEach((({start: t, end: e})=>{
                        e = Gn(t, e, n);
                        const r = n[t]
                          , o = n[e];
                        null !== a ? (s.push({
                            x: r.x,
                            y: a
                        }),
                        s.push({
                            x: o.x,
                            y: a
                        })) : null !== i && (s.push({
                            x: i,
                            y: r.y
                        }),
                        s.push({
                            x: i,
                            y: o.y
                        }))
                    }
                    )),
                    s
                }(t, e),
                i.length ? new Tn({
                    points: i,
                    options: {
                        tension: 0
                    },
                    _loop: a,
                    _fullLoop: a
                }) : null
            }
            function is(t, e, i) {
                let a = t[e].fill;
                const n = [e];
                let s;
                if (!i)
                    return a;
                for (; !1 !== a && -1 === n.indexOf(a); ) {
                    if (!c(a))
                        return a;
                    if (s = t[a],
                    !s)
                        return !1;
                    if (s.visible)
                        return a;
                    n.push(a),
                    a = s.fill
                }
                return !1
            }
            function as(t, e, i) {
                t.beginPath(),
                e.path(t),
                t.lineTo(e.last().x, i),
                t.lineTo(e.first().x, i),
                t.closePath(),
                t.clip()
            }
            function ns(t, e, i, a) {
                if (a)
                    return;
                let n = e[t]
                  , s = i[t];
                return "angle" === t && (n = $(n),
                s = $(s)),
                {
                    property: t,
                    start: n,
                    end: s
                }
            }
            function ss(t, e, i, a) {
                return t && e ? a(t[i], e[i]) : t ? t[i] : e ? e[i] : 0
            }
            function rs(t, e, i) {
                const {top: a, bottom: n} = e.chart.chartArea
                  , {property: s, start: r, end: o} = i || {};
                "x" === s && (t.beginPath(),
                t.rect(r, a, o - r, n - a),
                t.clip())
            }
            function os(t, e, i, a) {
                const n = e.interpolate(i, a);
                n && t.lineTo(n.x, n.y)
            }
            function ls(t, e) {
                const {line: i, target: a, property: n, color: s, scale: r} = e
                  , o = function(t, e, i) {
                    const a = t.segments
                      , n = t.points
                      , s = e.points
                      , r = [];
                    for (const t of a) {
                        let {start: a, end: o} = t;
                        o = Gn(a, o, n);
                        const l = ns(i, n[a], n[o], t.loop);
                        if (!e.segments) {
                            r.push({
                                source: t,
                                target: l,
                                start: n[a],
                                end: n[o]
                            });
                            continue
                        }
                        const c = li(e, l);
                        for (const e of c) {
                            const a = ns(i, s[e.start], s[e.end], e.loop)
                              , o = oi(t, n, a);
                            for (const t of o)
                                r.push({
                                    source: t,
                                    target: e,
                                    start: {
                                        [i]: ss(l, a, "start", Math.max)
                                    },
                                    end: {
                                        [i]: ss(l, a, "end", Math.min)
                                    }
                                })
                        }
                    }
                    return r
                }(i, a, n);
                for (const {source: e, target: l, start: c, end: h} of o) {
                    const {style: {backgroundColor: o=s}={}} = e
                      , d = !0 !== a;
                    t.save(),
                    t.fillStyle = o,
                    rs(t, r, d && ns(n, c, h)),
                    t.beginPath();
                    const f = !!i.pathSegment(t, e);
                    let u;
                    if (d) {
                        f ? t.closePath() : os(t, a, h, n);
                        const e = !!a.pathSegment(t, l, {
                            move: f,
                            reverse: !0
                        });
                        u = f && e,
                        u || os(t, a, c, n)
                    }
                    t.closePath(),
                    t.fill(u ? "evenodd" : "nonzero"),
                    t.restore()
                }
            }
            function cs(t, e, i) {
                const a = ts(e)
                  , {line: n, scale: s, axis: r} = e
                  , o = n.options
                  , l = o.fill
                  , c = o.backgroundColor
                  , {above: h=c, below: d=c} = l || {};
                a && n.points.length && ($t(t, i),
                function(t, e) {
                    const {line: i, target: a, above: n, below: s, area: r, scale: o} = e
                      , l = i._loop ? "angle" : e.axis;
                    t.save(),
                    "x" === l && s !== n && (as(t, a, r.top),
                    ls(t, {
                        line: i,
                        target: a,
                        color: n,
                        scale: o,
                        property: l
                    }),
                    t.restore(),
                    t.save(),
                    as(t, a, r.bottom)),
                    ls(t, {
                        line: i,
                        target: a,
                        color: s,
                        scale: o,
                        property: l
                    }),
                    t.restore()
                }(t, {
                    line: n,
                    target: a,
                    above: h,
                    below: d,
                    area: i,
                    scale: s,
                    axis: r
                }),
                qt(t))
            }
            var hs = {
                id: "filler",
                afterDatasetsUpdate(t, e, i) {
                    const a = (t.data.datasets || []).length
                      , n = [];
                    let s, r, o, l;
                    for (r = 0; r < a; ++r)
                        s = t.getDatasetMeta(r),
                        o = s.dataset,
                        l = null,
                        o && o.options && o instanceof Tn && (l = {
                            visible: t.isDatasetVisible(r),
                            index: r,
                            fill: $n(o, r, a),
                            chart: t,
                            axis: s.controller.options.indexAxis,
                            scale: s.vScale,
                            line: o
                        }),
                        s.$filler = l,
                        n.push(l);
                    for (r = 0; r < a; ++r)
                        l = n[r],
                        l && !1 !== l.fill && (l.fill = is(n, r, i.propagate))
                },
                beforeDraw(t, e, i) {
                    const a = "beforeDraw" === i.drawTime
                      , n = t.getSortedVisibleDatasetMetas()
                      , s = t.chartArea;
                    for (let e = n.length - 1; e >= 0; --e) {
                        const i = n[e].$filler;
                        i && (i.line.updateControlPoints(s, i.axis),
                        a && cs(t.ctx, i, s))
                    }
                },
                beforeDatasetsDraw(t, e, i) {
                    if ("beforeDatasetsDraw" !== i.drawTime)
                        return;
                    const a = t.getSortedVisibleDatasetMetas();
                    for (let e = a.length - 1; e >= 0; --e) {
                        const i = a[e].$filler;
                        i && cs(t.ctx, i, t.chartArea)
                    }
                },
                beforeDatasetDraw(t, e, i) {
                    const a = e.meta.$filler;
                    a && !1 !== a.fill && "beforeDatasetDraw" === i.drawTime && cs(t.ctx, a, t.chartArea)
                },
                defaults: {
                    propagate: !0,
                    drawTime: "beforeDatasetDraw"
                }
            };
            const ds = (t,e)=>{
                let {boxHeight: i=e, boxWidth: a=e} = t;
                return t.usePointStyle && (i = Math.min(i, e),
                a = Math.min(a, e)),
                {
                    boxWidth: a,
                    boxHeight: i,
                    itemHeight: Math.max(e, i)
                }
            }
            ;
            class fs extends Aa {
                constructor(t) {
                    super(),
                    this._added = !1,
                    this.legendHitBoxes = [],
                    this._hoveredItem = null,
                    this.doughnutMode = !1,
                    this.chart = t.chart,
                    this.options = t.options,
                    this.ctx = t.ctx,
                    this.legendItems = void 0,
                    this.columnSizes = void 0,
                    this.lineWidths = void 0,
                    this.maxHeight = void 0,
                    this.maxWidth = void 0,
                    this.top = void 0,
                    this.bottom = void 0,
                    this.left = void 0,
                    this.right = void 0,
                    this.height = void 0,
                    this.width = void 0,
                    this._margins = void 0,
                    this.position = void 0,
                    this.weight = void 0,
                    this.fullSize = void 0
                }
                update(t, e, i) {
                    this.maxWidth = t,
                    this.maxHeight = e,
                    this._margins = i,
                    this.setDimensions(),
                    this.buildLabels(),
                    this.fit()
                }
                setDimensions() {
                    this.isHorizontal() ? (this.width = this.maxWidth,
                    this.left = this._margins.left,
                    this.right = this.width) : (this.height = this.maxHeight,
                    this.top = this._margins.top,
                    this.bottom = this.height)
                }
                buildLabels() {
                    const t = this.options.labels || {};
                    let e = u(t.generateLabels, [this.chart], this) || [];
                    t.filter && (e = e.filter((e=>t.filter(e, this.chart.data)))),
                    t.sort && (e = e.sort(((e,i)=>t.sort(e, i, this.chart.data)))),
                    this.options.reverse && e.reverse(),
                    this.legendItems = e
                }
                fit() {
                    const {options: t, ctx: e} = this;
                    if (!t.display)
                        return void (this.width = this.height = 0);
                    const i = t.labels
                      , a = ce(i.font)
                      , n = a.size
                      , s = this._computeTitleHeight()
                      , {boxWidth: r, itemHeight: o} = ds(i, n);
                    let l, c;
                    e.font = a.string,
                    this.isHorizontal() ? (l = this.maxWidth,
                    c = this._fitRows(s, n, r, o) + 10) : (c = this.maxHeight,
                    l = this._fitCols(s, n, r, o) + 10),
                    this.width = Math.min(l, t.maxWidth || this.maxWidth),
                    this.height = Math.min(c, t.maxHeight || this.maxHeight)
                }
                _fitRows(t, e, i, a) {
                    const {ctx: n, maxWidth: s, options: {labels: {padding: r}}} = this
                      , o = this.legendHitBoxes = []
                      , l = this.lineWidths = [0]
                      , c = a + r;
                    let h = t;
                    n.textAlign = "left",
                    n.textBaseline = "middle";
                    let d = -1
                      , f = -c;
                    return this.legendItems.forEach(((t,u)=>{
                        const m = i + e / 2 + n.measureText(t.text).width;
                        (0 === u || l[l.length - 1] + m + 2 * r > s) && (h += c,
                        l[l.length - (u > 0 ? 0 : 1)] = 0,
                        f += c,
                        d++),
                        o[u] = {
                            left: 0,
                            top: f,
                            row: d,
                            width: m,
                            height: a
                        },
                        l[l.length - 1] += m + r
                    }
                    )),
                    h
                }
                _fitCols(t, e, i, a) {
                    const {ctx: n, maxHeight: s, options: {labels: {padding: r}}} = this
                      , o = this.legendHitBoxes = []
                      , l = this.columnSizes = []
                      , c = s - t;
                    let h = r
                      , d = 0
                      , f = 0
                      , u = 0
                      , m = 0;
                    return this.legendItems.forEach(((t,s)=>{
                        const p = i + e / 2 + n.measureText(t.text).width;
                        s > 0 && f + a + 2 * r > c && (h += d + r,
                        l.push({
                            width: d,
                            height: f
                        }),
                        u += d + r,
                        m++,
                        d = f = 0),
                        o[s] = {
                            left: u,
                            top: f,
                            col: m,
                            width: p,
                            height: a
                        },
                        d = Math.max(d, p),
                        f += a + r
                    }
                    )),
                    h += d,
                    l.push({
                        width: d,
                        height: f
                    }),
                    h
                }
                adjustHitBoxes() {
                    if (!this.options.display)
                        return;
                    const t = this._computeTitleHeight()
                      , {legendHitBoxes: e, options: {align: i, labels: {padding: n}, rtl: s}} = this
                      , r = ii(s, this.left, this.width);
                    if (this.isHorizontal()) {
                        let s = 0
                          , o = a(i, this.left + n, this.right - this.lineWidths[s]);
                        for (const l of e)
                            s !== l.row && (s = l.row,
                            o = a(i, this.left + n, this.right - this.lineWidths[s])),
                            l.top += this.top + t + n,
                            l.left = r.leftForLtr(r.x(o), l.width),
                            o += l.width + n
                    } else {
                        let s = 0
                          , o = a(i, this.top + t + n, this.bottom - this.columnSizes[s].height);
                        for (const l of e)
                            l.col !== s && (s = l.col,
                            o = a(i, this.top + t + n, this.bottom - this.columnSizes[s].height)),
                            l.top = o,
                            l.left += this.left + n,
                            l.left = r.leftForLtr(r.x(l.left), l.width),
                            o += l.height + n
                    }
                }
                isHorizontal() {
                    return "top" === this.options.position || "bottom" === this.options.position
                }
                draw() {
                    if (this.options.display) {
                        const t = this.ctx;
                        $t(t, this),
                        this._draw(),
                        qt(t)
                    }
                }
                _draw() {
                    const {options: t, columnSizes: e, lineWidths: i, ctx: n} = this
                      , {align: s, labels: r} = t
                      , o = jt.color
                      , l = ii(t.rtl, this.left, this.width)
                      , c = ce(r.font)
                      , {color: h, padding: f} = r
                      , u = c.size
                      , m = u / 2;
                    let p;
                    this.drawTitle(),
                    n.textAlign = l.textAlign("left"),
                    n.textBaseline = "middle",
                    n.lineWidth = .5,
                    n.font = c.string;
                    const {boxWidth: g, boxHeight: b, itemHeight: x} = ds(r, u)
                      , y = this.isHorizontal()
                      , k = this._computeTitleHeight();
                    p = y ? {
                        x: a(s, this.left + f, this.right - i[0]),
                        y: this.top + f + k,
                        line: 0
                    } : {
                        x: this.left + f,
                        y: a(s, this.top + k + f, this.bottom - e[0].height),
                        line: 0
                    },
                    ai(this.ctx, t.textDirection);
                    const _ = x + f;
                    this.legendItems.forEach(((w,v)=>{
                        n.strokeStyle = w.fontColor || h,
                        n.fillStyle = w.fontColor || h;
                        const O = n.measureText(w.text).width
                          , M = l.textAlign(w.textAlign || (w.textAlign = r.textAlign))
                          , S = g + m + O;
                        let D = p.x
                          , I = p.y;
                        l.setWidth(this.width),
                        y ? v > 0 && D + S + f > this.right && (I = p.y += _,
                        p.line++,
                        D = p.x = a(s, this.left + f, this.right - i[p.line])) : v > 0 && I + _ > this.bottom && (D = p.x = D + e[p.line].width + f,
                        p.line++,
                        I = p.y = a(s, this.top + k + f, this.bottom - e[p.line].height));
                        !function(t, e, i) {
                            if (isNaN(g) || g <= 0 || isNaN(b) || b < 0)
                                return;
                            n.save();
                            const a = d(i.lineWidth, 1);
                            if (n.fillStyle = d(i.fillStyle, o),
                            n.lineCap = d(i.lineCap, "butt"),
                            n.lineDashOffset = d(i.lineDashOffset, 0),
                            n.lineJoin = d(i.lineJoin, "miter"),
                            n.lineWidth = a,
                            n.strokeStyle = d(i.strokeStyle, o),
                            n.setLineDash(d(i.lineDash, [])),
                            r.usePointStyle) {
                                const s = {
                                    radius: g * Math.SQRT2 / 2,
                                    pointStyle: i.pointStyle,
                                    rotation: i.rotation,
                                    borderWidth: a
                                }
                                  , r = l.xPlus(t, g / 2);
                                Ut(n, s, r, e + m)
                            } else {
                                const s = e + Math.max((u - b) / 2, 0)
                                  , r = l.leftForLtr(t, g)
                                  , o = oe(i.borderRadius);
                                n.beginPath(),
                                Object.values(o).some((t=>0 !== t)) ? te(n, {
                                    x: r,
                                    y: s,
                                    w: g,
                                    h: b,
                                    radius: o
                                }) : n.rect(r, s, g, b),
                                n.fill(),
                                0 !== a && n.stroke()
                            }
                            n.restore()
                        }(l.x(D), I, w),
                        D = ((t,e,i,a)=>t === (a ? "left" : "right") ? i : "center" === t ? (e + i) / 2 : e)(M, D + g + m, y ? D + S : this.right, t.rtl),
                        function(t, e, i) {
                            Jt(n, i.text, t, e + x / 2, c, {
                                strikethrough: i.hidden,
                                textAlign: l.textAlign(i.textAlign)
                            })
                        }(l.x(D), I, w),
                        y ? p.x += S + f : p.y += _
                    }
                    )),
                    ni(this.ctx, t.textDirection)
                }
                drawTitle() {
                    const t = this.options
                      , e = t.title
                      , n = ce(e.font)
                      , s = le(e.padding);
                    if (!e.display)
                        return;
                    const r = ii(t.rtl, this.left, this.width)
                      , o = this.ctx
                      , l = e.position
                      , c = n.size / 2
                      , h = s.top + c;
                    let d, f = this.left, u = this.width;
                    if (this.isHorizontal())
                        u = Math.max(...this.lineWidths),
                        d = this.top + h,
                        f = a(t.align, f, this.right - u);
                    else {
                        const e = this.columnSizes.reduce(((t,e)=>Math.max(t, e.height)), 0);
                        d = h + a(t.align, this.top, this.bottom - e - t.labels.padding - this._computeTitleHeight())
                    }
                    const m = a(l, f, f + u);
                    o.textAlign = r.textAlign(i(l)),
                    o.textBaseline = "middle",
                    o.strokeStyle = e.color,
                    o.fillStyle = e.color,
                    o.font = n.string,
                    Jt(o, e.text, m, d, n)
                }
                _computeTitleHeight() {
                    const t = this.options.title
                      , e = ce(t.font)
                      , i = le(t.padding);
                    return t.display ? e.lineHeight + i.height : 0
                }
                _getLegendItemAt(t, e) {
                    let i, a, n;
                    if (G(t, this.left, this.right) && G(e, this.top, this.bottom))
                        for (n = this.legendHitBoxes,
                        i = 0; i < n.length; ++i)
                            if (a = n[i],
                            G(t, a.left, a.left + a.width) && G(e, a.top, a.top + a.height))
                                return this.legendItems[i];
                    return null
                }
                handleEvent(t) {
                    const e = this.options;
                    if (!function(t, e) {
                        if ("mousemove" === t && (e.onHover || e.onLeave))
                            return !0;
                        if (e.onClick && ("click" === t || "mouseup" === t))
                            return !0;
                        return !1
                    }(t.type, e))
                        return;
                    const i = this._getLegendItemAt(t.x, t.y);
                    if ("mousemove" === t.type) {
                        const s = this._hoveredItem
                          , r = (n = i,
                        null !== (a = s) && null !== n && a.datasetIndex === n.datasetIndex && a.index === n.index);
                        s && !r && u(e.onLeave, [t, s, this], this),
                        this._hoveredItem = i,
                        i && !r && u(e.onHover, [t, i, this], this)
                    } else
                        i && u(e.onClick, [t, i, this], this);
                    var a, n
                }
            }
            var us = {
                id: "legend",
                _element: fs,
                start(t, e, i) {
                    const a = t.legend = new fs({
                        ctx: t.ctx,
                        options: i,
                        chart: t
                    });
                    pa.configure(t, a, i),
                    pa.addBox(t, a)
                },
                stop(t) {
                    pa.removeBox(t, t.legend),
                    delete t.legend
                },
                beforeUpdate(t, e, i) {
                    const a = t.legend;
                    pa.configure(t, a, i),
                    a.options = i
                },
                afterUpdate(t) {
                    const e = t.legend;
                    e.buildLabels(),
                    e.adjustHitBoxes()
                },
                afterEvent(t, e) {
                    e.replay || t.legend.handleEvent(e.event)
                },
                defaults: {
                    display: !0,
                    position: "top",
                    align: "center",
                    fullSize: !0,
                    reverse: !1,
                    weight: 1e3,
                    onClick(t, e, i) {
                        const a = e.datasetIndex
                          , n = i.chart;
                        n.isDatasetVisible(a) ? (n.hide(a),
                        e.hidden = !0) : (n.show(a),
                        e.hidden = !1)
                    },
                    onHover: null,
                    onLeave: null,
                    labels: {
                        color: t=>t.chart.options.color,
                        boxWidth: 40,
                        padding: 10,
                        generateLabels(t) {
                            const e = t.data.datasets
                              , {labels: {usePointStyle: i, pointStyle: a, textAlign: n, color: s}} = t.legend.options;
                            return t._getSortedDatasetMetas().map((t=>{
                                const r = t.controller.getStyle(i ? 0 : void 0)
                                  , o = le(r.borderWidth);
                                return {
                                    text: e[t.index].label,
                                    fillStyle: r.backgroundColor,
                                    fontColor: s,
                                    hidden: !t.visible,
                                    lineCap: r.borderCapStyle,
                                    lineDash: r.borderDash,
                                    lineDashOffset: r.borderDashOffset,
                                    lineJoin: r.borderJoinStyle,
                                    lineWidth: (o.width + o.height) / 4,
                                    strokeStyle: r.borderColor,
                                    pointStyle: a || r.pointStyle,
                                    rotation: r.rotation,
                                    textAlign: n || r.textAlign,
                                    borderRadius: 0,
                                    datasetIndex: t.index
                                }
                            }
                            ), this)
                        }
                    },
                    title: {
                        color: t=>t.chart.options.color,
                        display: !1,
                        position: "center",
                        text: ""
                    }
                },
                descriptors: {
                    _scriptable: t=>!t.startsWith("on"),
                    labels: {
                        _scriptable: t=>!["generateLabels", "filter", "sort"].includes(t)
                    }
                }
            };
            class ms extends Aa {
                constructor(t) {
                    super(),
                    this.chart = t.chart,
                    this.options = t.options,
                    this.ctx = t.ctx,
                    this._padding = void 0,
                    this.top = void 0,
                    this.bottom = void 0,
                    this.left = void 0,
                    this.right = void 0,
                    this.width = void 0,
                    this.height = void 0,
                    this.position = void 0,
                    this.weight = void 0,
                    this.fullSize = void 0
                }
                update(t, e) {
                    const i = this.options;
                    if (this.left = 0,
                    this.top = 0,
                    !i.display)
                        return void (this.width = this.height = this.right = this.bottom = 0);
                    this.width = this.right = t,
                    this.height = this.bottom = e;
                    const a = o(i.text) ? i.text.length : 1;
                    this._padding = le(i.padding);
                    const n = a * ce(i.font).lineHeight + this._padding.height;
                    this.isHorizontal() ? this.height = n : this.width = n
                }
                isHorizontal() {
                    const t = this.options.position;
                    return "top" === t || "bottom" === t
                }
                _drawArgs(t) {
                    const {top: e, left: i, bottom: n, right: s, options: r} = this
                      , o = r.align;
                    let l, c, h, d = 0;
                    return this.isHorizontal() ? (c = a(o, i, s),
                    h = e + t,
                    l = s - i) : ("left" === r.position ? (c = i + t,
                    h = a(o, n, e),
                    d = -.5 * R) : (c = s - t,
                    h = a(o, e, n),
                    d = .5 * R),
                    l = n - e),
                    {
                        titleX: c,
                        titleY: h,
                        maxWidth: l,
                        rotation: d
                    }
                }
                draw() {
                    const t = this.ctx
                      , e = this.options;
                    if (!e.display)
                        return;
                    const a = ce(e.font)
                      , n = a.lineHeight / 2 + this._padding.top
                      , {titleX: s, titleY: r, maxWidth: o, rotation: l} = this._drawArgs(n);
                    Jt(t, e.text, 0, 0, a, {
                        color: e.color,
                        maxWidth: o,
                        rotation: l,
                        textAlign: i(e.align),
                        textBaseline: "middle",
                        translation: [s, r]
                    })
                }
            }
            var ps = {
                id: "title",
                _element: ms,
                start(t, e, i) {
                    !function(t, e) {
                        const i = new ms({
                            ctx: t.ctx,
                            options: e,
                            chart: t
                        });
                        pa.configure(t, i, e),
                        pa.addBox(t, i),
                        t.titleBlock = i
                    }(t, i)
                },
                stop(t) {
                    const e = t.titleBlock;
                    pa.removeBox(t, e),
                    delete t.titleBlock
                },
                beforeUpdate(t, e, i) {
                    const a = t.titleBlock;
                    pa.configure(t, a, i),
                    a.options = i
                },
                defaults: {
                    align: "center",
                    display: !1,
                    font: {
                        weight: "bold"
                    },
                    fullSize: !0,
                    padding: 10,
                    position: "top",
                    text: "",
                    weight: 2e3
                },
                defaultRoutes: {
                    color: "color"
                },
                descriptors: {
                    _scriptable: !0,
                    _indexable: !1
                }
            };
            const gs = new WeakMap;
            var bs = {
                id: "subtitle",
                start(t, e, i) {
                    const a = new ms({
                        ctx: t.ctx,
                        options: i,
                        chart: t
                    });
                    pa.configure(t, a, i),
                    pa.addBox(t, a),
                    gs.set(t, a)
                },
                stop(t) {
                    pa.removeBox(t, gs.get(t)),
                    gs.delete(t)
                },
                beforeUpdate(t, e, i) {
                    const a = gs.get(t);
                    pa.configure(t, a, i),
                    a.options = i
                },
                defaults: {
                    align: "center",
                    display: !1,
                    font: {
                        weight: "normal"
                    },
                    fullSize: !0,
                    padding: 0,
                    position: "top",
                    text: "",
                    weight: 1500
                },
                defaultRoutes: {
                    color: "color"
                },
                descriptors: {
                    _scriptable: !0,
                    _indexable: !1
                }
            };
            const xs = {
                average(t) {
                    if (!t.length)
                        return !1;
                    let e, i, a = 0, n = 0, s = 0;
                    for (e = 0,
                    i = t.length; e < i; ++e) {
                        const i = t[e].element;
                        if (i && i.hasValue()) {
                            const t = i.tooltipPosition();
                            a += t.x,
                            n += t.y,
                            ++s
                        }
                    }
                    return {
                        x: a / s,
                        y: n / s
                    }
                },
                nearest(t, e) {
                    if (!t.length)
                        return !1;
                    let i, a, n, s = e.x, r = e.y, o = Number.POSITIVE_INFINITY;
                    for (i = 0,
                    a = t.length; i < a; ++i) {
                        const a = t[i].element;
                        if (a && a.hasValue()) {
                            const t = U(e, a.getCenterPoint());
                            t < o && (o = t,
                            n = a)
                        }
                    }
                    if (n) {
                        const t = n.tooltipPosition();
                        s = t.x,
                        r = t.y
                    }
                    return {
                        x: s,
                        y: r
                    }
                }
            };
            function ys(t, e) {
                return e && (o(e) ? Array.prototype.push.apply(t, e) : t.push(e)),
                t
            }
            function ks(t) {
                return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t
            }
            function _s(t, e) {
                const {element: i, datasetIndex: a, index: n} = e
                  , s = t.getDatasetMeta(a).controller
                  , {label: r, value: o} = s.getLabelAndValue(n);
                return {
                    chart: t,
                    label: r,
                    parsed: s.getParsed(n),
                    raw: t.data.datasets[a].data[n],
                    formattedValue: o,
                    dataset: s.getDataset(),
                    dataIndex: n,
                    datasetIndex: a,
                    element: i
                }
            }
            function ws(t, e) {
                const i = t._chart.ctx
                  , {body: a, footer: n, title: s} = t
                  , {boxWidth: r, boxHeight: o} = e
                  , l = ce(e.bodyFont)
                  , c = ce(e.titleFont)
                  , h = ce(e.footerFont)
                  , d = s.length
                  , f = n.length
                  , u = a.length
                  , p = le(e.padding);
                let g = p.height
                  , b = 0
                  , x = a.reduce(((t,e)=>t + e.before.length + e.lines.length + e.after.length), 0);
                if (x += t.beforeBody.length + t.afterBody.length,
                d && (g += d * c.lineHeight + (d - 1) * e.titleSpacing + e.titleMarginBottom),
                x) {
                    g += u * (e.displayColors ? Math.max(o, l.lineHeight) : l.lineHeight) + (x - u) * l.lineHeight + (x - 1) * e.bodySpacing
                }
                f && (g += e.footerMarginTop + f * h.lineHeight + (f - 1) * e.footerSpacing);
                let y = 0;
                const k = function(t) {
                    b = Math.max(b, i.measureText(t).width + y)
                };
                return i.save(),
                i.font = c.string,
                m(t.title, k),
                i.font = l.string,
                m(t.beforeBody.concat(t.afterBody), k),
                y = e.displayColors ? r + 2 + e.boxPadding : 0,
                m(a, (t=>{
                    m(t.before, k),
                    m(t.lines, k),
                    m(t.after, k)
                }
                )),
                y = 0,
                i.font = h.string,
                m(t.footer, k),
                i.restore(),
                b += p.width,
                {
                    width: b,
                    height: g
                }
            }
            function vs(t, e, i, a) {
                const {x: n, width: s} = i
                  , {width: r, chartArea: {left: o, right: l}} = t;
                let c = "center";
                return "center" === a ? c = n <= (o + l) / 2 ? "left" : "right" : n <= s / 2 ? c = "left" : n >= r - s / 2 && (c = "right"),
                function(t, e, i, a) {
                    const {x: n, width: s} = a
                      , r = i.caretSize + i.caretPadding;
                    return "left" === t && n + s + r > e.width || "right" === t && n - s - r < 0 || void 0
                }(c, t, e, i) && (c = "center"),
                c
            }
            function Os(t, e, i) {
                const a = e.yAlign || function(t, e) {
                    const {y: i, height: a} = e;
                    return i < a / 2 ? "top" : i > t.height - a / 2 ? "bottom" : "center"
                }(t, i);
                return {
                    xAlign: e.xAlign || vs(t, e, i, a),
                    yAlign: a
                }
            }
            function Ms(t, e, i, a) {
                const {caretSize: n, caretPadding: s, cornerRadius: r} = t
                  , {xAlign: o, yAlign: l} = i
                  , c = n + s
                  , {topLeft: h, topRight: d, bottomLeft: f, bottomRight: u} = oe(r);
                let m = function(t, e) {
                    let {x: i, width: a} = t;
                    return "right" === e ? i -= a : "center" === e && (i -= a / 2),
                    i
                }(e, o);
                const p = function(t, e, i) {
                    let {y: a, height: n} = t;
                    return "top" === e ? a += i : a -= "bottom" === e ? n + i : n / 2,
                    a
                }(e, l, c);
                return "center" === l ? "left" === o ? m += c : "right" === o && (m -= c) : "left" === o ? m -= Math.max(h, f) + n : "right" === o && (m += Math.max(d, u) + n),
                {
                    x: K(m, 0, a.width - e.width),
                    y: K(p, 0, a.height - e.height)
                }
            }
            function Ss(t, e, i) {
                const a = le(i.padding);
                return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - a.right : t.x + a.left
            }
            function Ds(t) {
                return ys([], ks(t))
            }
            function Is(t, e) {
                const i = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
                return i ? t.override(i) : t
            }
            class Rs extends Aa {
                constructor(t) {
                    super(),
                    this.opacity = 0,
                    this._active = [],
                    this._chart = t._chart,
                    this._eventPosition = void 0,
                    this._size = void 0,
                    this._cachedAnimations = void 0,
                    this._tooltipItems = [],
                    this.$animations = void 0,
                    this.$context = void 0,
                    this.options = t.options,
                    this.dataPoints = void 0,
                    this.title = void 0,
                    this.beforeBody = void 0,
                    this.body = void 0,
                    this.afterBody = void 0,
                    this.footer = void 0,
                    this.xAlign = void 0,
                    this.yAlign = void 0,
                    this.x = void 0,
                    this.y = void 0,
                    this.height = void 0,
                    this.width = void 0,
                    this.caretX = void 0,
                    this.caretY = void 0,
                    this.labelColors = void 0,
                    this.labelPointStyles = void 0,
                    this.labelTextColors = void 0
                }
                initialize(t) {
                    this.options = t,
                    this._cachedAnimations = void 0,
                    this.$context = void 0
                }
                _resolveAnimations() {
                    const t = this._cachedAnimations;
                    if (t)
                        return t;
                    const e = this._chart
                      , i = this.options.setContext(this.getContext())
                      , a = i.enabled && e.options.animation && i.animations
                      , n = new bi(this._chart,a);
                    return a._cacheable && (this._cachedAnimations = Object.freeze(n)),
                    n
                }
                getContext() {
                    return this.$context || (this.$context = (t = this._chart.getContext(),
                    e = this,
                    i = this._tooltipItems,
                    de(t, {
                        tooltip: e,
                        tooltipItems: i,
                        type: "tooltip"
                    })));
                    var t, e, i
                }
                getTitle(t, e) {
                    const {callbacks: i} = e
                      , a = i.beforeTitle.apply(this, [t])
                      , n = i.title.apply(this, [t])
                      , s = i.afterTitle.apply(this, [t]);
                    let r = [];
                    return r = ys(r, ks(a)),
                    r = ys(r, ks(n)),
                    r = ys(r, ks(s)),
                    r
                }
                getBeforeBody(t, e) {
                    return Ds(e.callbacks.beforeBody.apply(this, [t]))
                }
                getBody(t, e) {
                    const {callbacks: i} = e
                      , a = [];
                    return m(t, (t=>{
                        const e = {
                            before: [],
                            lines: [],
                            after: []
                        }
                          , n = Is(i, t);
                        ys(e.before, ks(n.beforeLabel.call(this, t))),
                        ys(e.lines, n.label.call(this, t)),
                        ys(e.after, ks(n.afterLabel.call(this, t))),
                        a.push(e)
                    }
                    )),
                    a
                }
                getAfterBody(t, e) {
                    return Ds(e.callbacks.afterBody.apply(this, [t]))
                }
                getFooter(t, e) {
                    const {callbacks: i} = e
                      , a = i.beforeFooter.apply(this, [t])
                      , n = i.footer.apply(this, [t])
                      , s = i.afterFooter.apply(this, [t]);
                    let r = [];
                    return r = ys(r, ks(a)),
                    r = ys(r, ks(n)),
                    r = ys(r, ks(s)),
                    r
                }
                _createItems(t) {
                    const e = this._active
                      , i = this._chart.data
                      , a = []
                      , n = []
                      , s = [];
                    let r, o, l = [];
                    for (r = 0,
                    o = e.length; r < o; ++r)
                        l.push(_s(this._chart, e[r]));
                    return t.filter && (l = l.filter(((e,a,n)=>t.filter(e, a, n, i)))),
                    t.itemSort && (l = l.sort(((e,a)=>t.itemSort(e, a, i)))),
                    m(l, (e=>{
                        const i = Is(t.callbacks, e);
                        a.push(i.labelColor.call(this, e)),
                        n.push(i.labelPointStyle.call(this, e)),
                        s.push(i.labelTextColor.call(this, e))
                    }
                    )),
                    this.labelColors = a,
                    this.labelPointStyles = n,
                    this.labelTextColors = s,
                    this.dataPoints = l,
                    l
                }
                update(t, e) {
                    const i = this.options.setContext(this.getContext())
                      , a = this._active;
                    let n, s = [];
                    if (a.length) {
                        const t = xs[i.position].call(this, a, this._eventPosition);
                        s = this._createItems(i),
                        this.title = this.getTitle(s, i),
                        this.beforeBody = this.getBeforeBody(s, i),
                        this.body = this.getBody(s, i),
                        this.afterBody = this.getAfterBody(s, i),
                        this.footer = this.getFooter(s, i);
                        const e = this._size = ws(this, i)
                          , r = Object.assign({}, t, e)
                          , o = Os(this._chart, i, r)
                          , l = Ms(i, r, o, this._chart);
                        this.xAlign = o.xAlign,
                        this.yAlign = o.yAlign,
                        n = {
                            opacity: 1,
                            x: l.x,
                            y: l.y,
                            width: e.width,
                            height: e.height,
                            caretX: t.x,
                            caretY: t.y
                        }
                    } else
                        0 !== this.opacity && (n = {
                            opacity: 0
                        });
                    this._tooltipItems = s,
                    this.$context = void 0,
                    n && this._resolveAnimations().update(this, n),
                    t && i.external && i.external.call(this, {
                        chart: this._chart,
                        tooltip: this,
                        replay: e
                    })
                }
                drawCaret(t, e, i, a) {
                    const n = this.getCaretPosition(t, i, a);
                    e.lineTo(n.x1, n.y1),
                    e.lineTo(n.x2, n.y2),
                    e.lineTo(n.x3, n.y3)
                }
                getCaretPosition(t, e, i) {
                    const {xAlign: a, yAlign: n} = this
                      , {caretSize: s, cornerRadius: r} = i
                      , {topLeft: o, topRight: l, bottomLeft: c, bottomRight: h} = oe(r)
                      , {x: d, y: f} = t
                      , {width: u, height: m} = e;
                    let p, g, b, x, y, k;
                    return "center" === n ? (y = f + m / 2,
                    "left" === a ? (p = d,
                    g = p - s,
                    x = y + s,
                    k = y - s) : (p = d + u,
                    g = p + s,
                    x = y - s,
                    k = y + s),
                    b = p) : (g = "left" === a ? d + Math.max(o, c) + s : "right" === a ? d + u - Math.max(l, h) - s : this.caretX,
                    "top" === n ? (x = f,
                    y = x - s,
                    p = g - s,
                    b = g + s) : (x = f + m,
                    y = x + s,
                    p = g + s,
                    b = g - s),
                    k = x),
                    {
                        x1: p,
                        x2: g,
                        x3: b,
                        y1: x,
                        y2: y,
                        y3: k
                    }
                }
                drawTitle(t, e, i) {
                    const a = this.title
                      , n = a.length;
                    let s, r, o;
                    if (n) {
                        const l = ii(i.rtl, this.x, this.width);
                        for (t.x = Ss(this, i.titleAlign, i),
                        e.textAlign = l.textAlign(i.titleAlign),
                        e.textBaseline = "middle",
                        s = ce(i.titleFont),
                        r = i.titleSpacing,
                        e.fillStyle = i.titleColor,
                        e.font = s.string,
                        o = 0; o < n; ++o)
                            e.fillText(a[o], l.x(t.x), t.y + s.lineHeight / 2),
                            t.y += s.lineHeight + r,
                            o + 1 === n && (t.y += i.titleMarginBottom - r)
                    }
                }
                _drawColorBox(t, e, i, a, n) {
                    const s = this.labelColors[i]
                      , r = this.labelPointStyles[i]
                      , {boxHeight: o, boxWidth: l, boxPadding: c} = n
                      , h = ce(n.bodyFont)
                      , d = Ss(this, "left", n)
                      , f = a.x(d)
                      , u = o < h.lineHeight ? (h.lineHeight - o) / 2 : 0
                      , m = e.y + u;
                    if (n.usePointStyle) {
                        const e = {
                            radius: Math.min(l, o) / 2,
                            pointStyle: r.pointStyle,
                            rotation: r.rotation,
                            borderWidth: 1
                        }
                          , i = a.leftForLtr(f, l) + l / 2
                          , c = m + o / 2;
                        t.strokeStyle = n.multiKeyBackground,
                        t.fillStyle = n.multiKeyBackground,
                        Ut(t, e, i, c),
                        t.strokeStyle = s.borderColor,
                        t.fillStyle = s.backgroundColor,
                        Ut(t, e, i, c)
                    } else {
                        t.lineWidth = s.borderWidth || 1,
                        t.strokeStyle = s.borderColor,
                        t.setLineDash(s.borderDash || []),
                        t.lineDashOffset = s.borderDashOffset || 0;
                        const e = a.leftForLtr(f, l - c)
                          , i = a.leftForLtr(a.xPlus(f, 1), l - c - 2)
                          , r = oe(s.borderRadius);
                        Object.values(r).some((t=>0 !== t)) ? (t.beginPath(),
                        t.fillStyle = n.multiKeyBackground,
                        te(t, {
                            x: e,
                            y: m,
                            w: l,
                            h: o,
                            radius: r
                        }),
                        t.fill(),
                        t.stroke(),
                        t.fillStyle = s.backgroundColor,
                        t.beginPath(),
                        te(t, {
                            x: i,
                            y: m + 1,
                            w: l - 2,
                            h: o - 2,
                            radius: r
                        }),
                        t.fill()) : (t.fillStyle = n.multiKeyBackground,
                        t.fillRect(e, m, l, o),
                        t.strokeRect(e, m, l, o),
                        t.fillStyle = s.backgroundColor,
                        t.fillRect(i, m + 1, l - 2, o - 2))
                    }
                    t.fillStyle = this.labelTextColors[i]
                }
                drawBody(t, e, i) {
                    const {body: a} = this
                      , {bodySpacing: n, bodyAlign: s, displayColors: r, boxHeight: o, boxWidth: l, boxPadding: c} = i
                      , h = ce(i.bodyFont);
                    let d = h.lineHeight
                      , f = 0;
                    const u = ii(i.rtl, this.x, this.width)
                      , p = function(i) {
                        e.fillText(i, u.x(t.x + f), t.y + d / 2),
                        t.y += d + n
                    }
                      , g = u.textAlign(s);
                    let b, x, y, k, _, w, v;
                    for (e.textAlign = s,
                    e.textBaseline = "middle",
                    e.font = h.string,
                    t.x = Ss(this, g, i),
                    e.fillStyle = i.bodyColor,
                    m(this.beforeBody, p),
                    f = r && "right" !== g ? "center" === s ? l / 2 + c : l + 2 + c : 0,
                    k = 0,
                    w = a.length; k < w; ++k) {
                        for (b = a[k],
                        x = this.labelTextColors[k],
                        e.fillStyle = x,
                        m(b.before, p),
                        y = b.lines,
                        r && y.length && (this._drawColorBox(e, t, k, u, i),
                        d = Math.max(h.lineHeight, o)),
                        _ = 0,
                        v = y.length; _ < v; ++_)
                            p(y[_]),
                            d = h.lineHeight;
                        m(b.after, p)
                    }
                    f = 0,
                    d = h.lineHeight,
                    m(this.afterBody, p),
                    t.y -= n
                }
                drawFooter(t, e, i) {
                    const a = this.footer
                      , n = a.length;
                    let s, r;
                    if (n) {
                        const o = ii(i.rtl, this.x, this.width);
                        for (t.x = Ss(this, i.footerAlign, i),
                        t.y += i.footerMarginTop,
                        e.textAlign = o.textAlign(i.footerAlign),
                        e.textBaseline = "middle",
                        s = ce(i.footerFont),
                        e.fillStyle = i.footerColor,
                        e.font = s.string,
                        r = 0; r < n; ++r)
                            e.fillText(a[r], o.x(t.x), t.y + s.lineHeight / 2),
                            t.y += s.lineHeight + i.footerSpacing
                    }
                }
                drawBackground(t, e, i, a) {
                    const {xAlign: n, yAlign: s} = this
                      , {x: r, y: o} = t
                      , {width: l, height: c} = i
                      , {topLeft: h, topRight: d, bottomLeft: f, bottomRight: u} = oe(a.cornerRadius);
                    e.fillStyle = a.backgroundColor,
                    e.strokeStyle = a.borderColor,
                    e.lineWidth = a.borderWidth,
                    e.beginPath(),
                    e.moveTo(r + h, o),
                    "top" === s && this.drawCaret(t, e, i, a),
                    e.lineTo(r + l - d, o),
                    e.quadraticCurveTo(r + l, o, r + l, o + d),
                    "center" === s && "right" === n && this.drawCaret(t, e, i, a),
                    e.lineTo(r + l, o + c - u),
                    e.quadraticCurveTo(r + l, o + c, r + l - u, o + c),
                    "bottom" === s && this.drawCaret(t, e, i, a),
                    e.lineTo(r + f, o + c),
                    e.quadraticCurveTo(r, o + c, r, o + c - f),
                    "center" === s && "left" === n && this.drawCaret(t, e, i, a),
                    e.lineTo(r, o + h),
                    e.quadraticCurveTo(r, o, r + h, o),
                    e.closePath(),
                    e.fill(),
                    a.borderWidth > 0 && e.stroke()
                }
                _updateAnimationTarget(t) {
                    const e = this._chart
                      , i = this.$animations
                      , a = i && i.x
                      , n = i && i.y;
                    if (a || n) {
                        const i = xs[t.position].call(this, this._active, this._eventPosition);
                        if (!i)
                            return;
                        const s = this._size = ws(this, t)
                          , r = Object.assign({}, i, this._size)
                          , o = Os(e, t, r)
                          , l = Ms(t, r, o, e);
                        a._to === l.x && n._to === l.y || (this.xAlign = o.xAlign,
                        this.yAlign = o.yAlign,
                        this.width = s.width,
                        this.height = s.height,
                        this.caretX = i.x,
                        this.caretY = i.y,
                        this._resolveAnimations().update(this, l))
                    }
                }
                draw(t) {
                    const e = this.options.setContext(this.getContext());
                    let i = this.opacity;
                    if (!i)
                        return;
                    this._updateAnimationTarget(e);
                    const a = {
                        width: this.width,
                        height: this.height
                    }
                      , n = {
                        x: this.x,
                        y: this.y
                    };
                    i = Math.abs(i) < .001 ? 0 : i;
                    const s = le(e.padding)
                      , r = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
                    e.enabled && r && (t.save(),
                    t.globalAlpha = i,
                    this.drawBackground(n, t, a, e),
                    ai(t, e.textDirection),
                    n.y += s.top,
                    this.drawTitle(n, t, e),
                    this.drawBody(n, t, e),
                    this.drawFooter(n, t, e),
                    ni(t, e.textDirection),
                    t.restore())
                }
                getActiveElements() {
                    return this._active || []
                }
                setActiveElements(t, e) {
                    const i = this._active
                      , a = t.map((({datasetIndex: t, index: e})=>{
                        const i = this._chart.getDatasetMeta(t);
                        if (!i)
                            throw new Error("Cannot find a dataset at index " + t);
                        return {
                            datasetIndex: t,
                            element: i.data[e],
                            index: e
                        }
                    }
                    ))
                      , n = !p(i, a)
                      , s = this._positionChanged(a, e);
                    (n || s) && (this._active = a,
                    this._eventPosition = e,
                    this.update(!0))
                }
                handleEvent(t, e) {
                    const i = this.options
                      , a = this._active || [];
                    let n = !1
                      , s = [];
                    "mouseout" !== t.type && (s = this._chart.getElementsAtEventForMode(t, i.mode, i, e),
                    i.reverse && s.reverse());
                    const r = this._positionChanged(s, t);
                    return n = e || !p(s, a) || r,
                    n && (this._active = s,
                    (i.enabled || i.external) && (this._eventPosition = {
                        x: t.x,
                        y: t.y
                    },
                    this.update(!0, e))),
                    n
                }
                _positionChanged(t, e) {
                    const {caretX: i, caretY: a, options: n} = this
                      , s = xs[n.position].call(this, t, e);
                    return !1 !== s && (i !== s.x || a !== s.y)
                }
            }
            Rs.positioners = xs;
            var Ls = {
                id: "tooltip",
                _element: Rs,
                positioners: xs,
                afterInit(t, e, i) {
                    i && (t.tooltip = new Rs({
                        _chart: t,
                        options: i
                    }))
                },
                beforeUpdate(t, e, i) {
                    t.tooltip && t.tooltip.initialize(i)
                },
                reset(t, e, i) {
                    t.tooltip && t.tooltip.initialize(i)
                },
                afterDraw(t) {
                    const e = t.tooltip
                      , i = {
                        tooltip: e
                    };
                    !1 !== t.notifyPlugins("beforeTooltipDraw", i) && (e && e.draw(t.ctx),
                    t.notifyPlugins("afterTooltipDraw", i))
                },
                afterEvent(t, e) {
                    if (t.tooltip) {
                        const i = e.replay;
                        t.tooltip.handleEvent(e.event, i) && (e.changed = !0)
                    }
                },
                defaults: {
                    enabled: !0,
                    external: null,
                    position: "average",
                    backgroundColor: "rgba(0,0,0,0.8)",
                    titleColor: "#fff",
                    titleFont: {
                        weight: "bold"
                    },
                    titleSpacing: 2,
                    titleMarginBottom: 6,
                    titleAlign: "left",
                    bodyColor: "#fff",
                    bodySpacing: 2,
                    bodyFont: {},
                    bodyAlign: "left",
                    footerColor: "#fff",
                    footerSpacing: 2,
                    footerMarginTop: 6,
                    footerFont: {
                        weight: "bold"
                    },
                    footerAlign: "left",
                    padding: 6,
                    caretPadding: 2,
                    caretSize: 5,
                    cornerRadius: 6,
                    boxHeight: (t,e)=>e.bodyFont.size,
                    boxWidth: (t,e)=>e.bodyFont.size,
                    multiKeyBackground: "#fff",
                    displayColors: !0,
                    boxPadding: 0,
                    borderColor: "rgba(0,0,0,0)",
                    borderWidth: 0,
                    animation: {
                        duration: 400,
                        easing: "easeOutQuart"
                    },
                    animations: {
                        numbers: {
                            type: "number",
                            properties: ["x", "y", "width", "height", "caretX", "caretY"]
                        },
                        opacity: {
                            easing: "linear",
                            duration: 200
                        }
                    },
                    callbacks: {
                        beforeTitle: n,
                        title(t) {
                            if (t.length > 0) {
                                const e = t[0]
                                  , i = e.chart.data.labels
                                  , a = i ? i.length : 0;
                                if (this && this.options && "dataset" === this.options.mode)
                                    return e.dataset.label || "";
                                if (e.label)
                                    return e.label;
                                if (a > 0 && e.dataIndex < a)
                                    return i[e.dataIndex]
                            }
                            return ""
                        },
                        afterTitle: n,
                        beforeBody: n,
                        beforeLabel: n,
                        label(t) {
                            if (this && this.options && "dataset" === this.options.mode)
                                return t.label + ": " + t.formattedValue || t.formattedValue;
                            let e = t.dataset.label || "";
                            e && (e += ": ");
                            const i = t.formattedValue;
                            return r(i) || (e += i),
                            e
                        },
                        labelColor(t) {
                            const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
                            return {
                                borderColor: e.borderColor,
                                backgroundColor: e.backgroundColor,
                                borderWidth: e.borderWidth,
                                borderDash: e.borderDash,
                                borderDashOffset: e.borderDashOffset,
                                borderRadius: 0
                            }
                        },
                        labelTextColor() {
                            return this.options.bodyColor
                        },
                        labelPointStyle(t) {
                            const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
                            return {
                                pointStyle: e.pointStyle,
                                rotation: e.rotation
                            }
                        },
                        afterLabel: n,
                        afterBody: n,
                        beforeFooter: n,
                        footer: n,
                        afterFooter: n
                    }
                },
                defaultRoutes: {
                    bodyFont: "font",
                    footerFont: "font",
                    titleFont: "font"
                },
                descriptors: {
                    _scriptable: t=>"filter" !== t && "itemSort" !== t && "external" !== t,
                    _indexable: !1,
                    callbacks: {
                        _scriptable: !1,
                        _indexable: !1
                    },
                    animation: {
                        _fallback: !1
                    },
                    animations: {
                        _fallback: "animation"
                    }
                },
                additionalOptionScopes: ["interaction"]
            }
              , Ps = Object.freeze({
                __proto__: null,
                Decimation: Hn,
                Filler: hs,
                Legend: us,
                SubTitle: bs,
                Title: ps,
                Tooltip: Ls
            });
            function Cs(t, e, i, a) {
                const n = t.indexOf(e);
                if (-1 === n)
                    return ((t,e,i,a)=>("string" == typeof e ? (i = t.push(e) - 1,
                    a.unshift({
                        index: i,
                        label: e
                    })) : isNaN(e) && (i = null),
                    i))(t, e, i, a);
                return n !== t.lastIndexOf(e) ? i : n
            }
            class As extends Va {
                constructor(t) {
                    super(t),
                    this._startValue = void 0,
                    this._valueRange = 0,
                    this._addedLabels = []
                }
                init(t) {
                    const e = this._addedLabels;
                    if (e.length) {
                        const t = this.getLabels();
                        for (const {index: i, label: a} of e)
                            t[i] === a && t.splice(i, 1);
                        this._addedLabels = []
                    }
                    super.init(t)
                }
                parse(t, e) {
                    if (r(t))
                        return null;
                    const i = this.getLabels();
                    return ((t,e)=>null === t ? null : K(Math.round(t), 0, e))(e = isFinite(e) && i[e] === t ? e : Cs(i, t, d(e, t), this._addedLabels), i.length - 1)
                }
                determineDataLimits() {
                    const {minDefined: t, maxDefined: e} = this.getUserBounds();
                    let {min: i, max: a} = this.getMinMax(!0);
                    "ticks" === this.options.bounds && (t || (i = 0),
                    e || (a = this.getLabels().length - 1)),
                    this.min = i,
                    this.max = a
                }
                buildTicks() {
                    const t = this.min
                      , e = this.max
                      , i = this.options.offset
                      , a = [];
                    let n = this.getLabels();
                    n = 0 === t && e === n.length - 1 ? n : n.slice(t, e + 1),
                    this._valueRange = Math.max(n.length - (i ? 0 : 1), 1),
                    this._startValue = this.min - (i ? .5 : 0);
                    for (let i = t; i <= e; i++)
                        a.push({
                            value: i
                        });
                    return a
                }
                getLabelForValue(t) {
                    const e = this.getLabels();
                    return t >= 0 && t < e.length ? e[t] : t
                }
                configure() {
                    super.configure(),
                    this.isHorizontal() || (this._reversePixels = !this._reversePixels)
                }
                getPixelForValue(t) {
                    return "number" != typeof t && (t = this.parse(t)),
                    null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
                }
                getPixelForTick(t) {
                    const e = this.ticks;
                    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value)
                }
                getValueForPixel(t) {
                    return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange)
                }
                getBasePixel() {
                    return this.bottom
                }
            }
            function Ts(t, e) {
                const i = []
                  , {bounds: a, step: n, min: s, max: o, precision: l, count: c, maxTicks: h, maxDigits: d, includeBounds: f} = t
                  , u = n || 1
                  , m = h - 1
                  , {min: p, max: g} = e
                  , b = !r(s)
                  , x = !r(o)
                  , y = !r(c)
                  , k = (g - p) / (d + 1);
                let _, w, v, O, M = Y((g - p) / m / u) * u;
                if (M < 1e-14 && !b && !x)
                    return [{
                        value: p
                    }, {
                        value: g
                    }];
                O = Math.ceil(g / M) - Math.floor(p / M),
                O > m && (M = Y(O * M / m / u) * u),
                r(l) || (_ = Math.pow(10, l),
                M = Math.ceil(M * _) / _),
                "ticks" === a ? (w = Math.floor(p / M) * M,
                v = Math.ceil(g / M) * M) : (w = p,
                v = g),
                b && x && n && function(t, e) {
                    const i = Math.round(t);
                    return i - e <= t && i + e >= t
                }((o - s) / n, M / 1e3) ? (O = Math.round(Math.min((o - s) / M, h)),
                M = (o - s) / O,
                w = s,
                v = o) : y ? (w = b ? s : w,
                v = x ? o : v,
                O = c - 1,
                M = (v - w) / O) : (O = (v - w) / M,
                O = j(O, Math.round(O), M / 1e3) ? Math.round(O) : Math.ceil(O));
                const S = Math.max(W(M), W(w));
                _ = Math.pow(10, r(l) ? S : l),
                w = Math.round(w * _) / _,
                v = Math.round(v * _) / _;
                let D = 0;
                for (b && (f && w !== s ? (i.push({
                    value: s
                }),
                w < s && D++,
                j(Math.round((w + D * M) * _) / _, s, Es(s, k, t)) && D++) : w < s && D++); D < O; ++D)
                    i.push({
                        value: Math.round((w + D * M) * _) / _
                    });
                return x && f && v !== o ? i.length && j(i[i.length - 1].value, o, Es(o, k, t)) ? i[i.length - 1].value = o : i.push({
                    value: o
                }) : x && v !== o || i.push({
                    value: v
                }),
                i
            }
            function Es(t, e, {horizontal: i, minRotation: a}) {
                const n = Z(a)
                  , s = (i ? Math.sin(n) : Math.cos(n)) || .001
                  , r = .75 * e * ("" + t).length;
                return Math.min(e / s, r)
            }
            As.id = "category",
            As.defaults = {
                ticks: {
                    callback: As.prototype.getLabelForValue
                }
            };
            class zs extends Va {
                constructor(t) {
                    super(t),
                    this.start = void 0,
                    this.end = void 0,
                    this._startValue = void 0,
                    this._endValue = void 0,
                    this._valueRange = 0
                }
                parse(t, e) {
                    return r(t) || ("number" == typeof t || t instanceof Number) && !isFinite(+t) ? null : +t
                }
                handleTickRangeOptions() {
                    const {beginAtZero: t} = this.options
                      , {minDefined: e, maxDefined: i} = this.getUserBounds();
                    let {min: a, max: n} = this;
                    const s = t=>a = e ? a : t
                      , r = t=>n = i ? n : t;
                    if (t) {
                        const t = X(a)
                          , e = X(n);
                        t < 0 && e < 0 ? r(0) : t > 0 && e > 0 && s(0)
                    }
                    if (a === n) {
                        let e = 1;
                        (n >= Number.MAX_SAFE_INTEGER || a <= Number.MIN_SAFE_INTEGER) && (e = Math.abs(.05 * n)),
                        r(n + e),
                        t || s(a - e)
                    }
                    this.min = a,
                    this.max = n
                }
                getTickLimit() {
                    const t = this.options.ticks;
                    let e, {maxTicksLimit: i, stepSize: a} = t;
                    return a ? (e = Math.ceil(this.max / a) - Math.floor(this.min / a) + 1,
                    e > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${a} would result generating up to ${e} ticks. Limiting to 1000.`),
                    e = 1e3)) : (e = this.computeTickLimit(),
                    i = i || 11),
                    i && (e = Math.min(i, e)),
                    e
                }
                computeTickLimit() {
                    return Number.POSITIVE_INFINITY
                }
                buildTicks() {
                    const t = this.options
                      , e = t.ticks;
                    let i = this.getTickLimit();
                    i = Math.max(2, i);
                    const a = Ts({
                        maxTicks: i,
                        bounds: t.bounds,
                        min: t.min,
                        max: t.max,
                        precision: e.precision,
                        step: e.stepSize,
                        count: e.count,
                        maxDigits: this._maxDigits(),
                        horizontal: this.isHorizontal(),
                        minRotation: e.minRotation || 0,
                        includeBounds: !1 !== e.includeBounds
                    }, this._range || this);
                    return "ticks" === t.bounds && N(a, this, "value"),
                    t.reverse ? (a.reverse(),
                    this.start = this.max,
                    this.end = this.min) : (this.start = this.min,
                    this.end = this.max),
                    a
                }
                configure() {
                    const t = this.ticks;
                    let e = this.min
                      , i = this.max;
                    if (super.configure(),
                    this.options.offset && t.length) {
                        const a = (i - e) / Math.max(t.length - 1, 1) / 2;
                        e -= a,
                        i += a
                    }
                    this._startValue = e,
                    this._endValue = i,
                    this._valueRange = i - e
                }
                getLabelForValue(t) {
                    return ei(t, this.chart.options.locale, this.options.ticks.format)
                }
            }
            class Bs extends zs {
                determineDataLimits() {
                    const {min: t, max: e} = this.getMinMax(!0);
                    this.min = c(t) ? t : 0,
                    this.max = c(e) ? e : 1,
                    this.handleTickRangeOptions()
                }
                computeTickLimit() {
                    const t = this.isHorizontal()
                      , e = t ? this.width : this.height
                      , i = Z(this.options.ticks.minRotation)
                      , a = (t ? Math.sin(i) : Math.cos(i)) || .001
                      , n = this._resolveTickFontOptions(0);
                    return Math.ceil(e / Math.min(40, n.lineHeight / a))
                }
                getPixelForValue(t) {
                    return null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
                }
                getValueForPixel(t) {
                    return this._startValue + this.getDecimalForPixel(t) * this._valueRange
                }
            }
            function Xs(t) {
                return 1 === t / Math.pow(10, Math.floor(B(t)))
            }
            Bs.id = "linear",
            Bs.defaults = {
                ticks: {
                    callback: Ea.formatters.numeric
                }
            };
            class Ys extends Va {
                constructor(t) {
                    super(t),
                    this.start = void 0,
                    this.end = void 0,
                    this._startValue = void 0,
                    this._valueRange = 0
                }
                parse(t, e) {
                    const i = zs.prototype.parse.apply(this, [t, e]);
                    if (0 !== i)
                        return c(i) && i > 0 ? i : null;
                    this._zero = !0
                }
                determineDataLimits() {
                    const {min: t, max: e} = this.getMinMax(!0);
                    this.min = c(t) ? Math.max(0, t) : null,
                    this.max = c(e) ? Math.max(0, e) : null,
                    this.options.beginAtZero && (this._zero = !0),
                    this.handleTickRangeOptions()
                }
                handleTickRangeOptions() {
                    const {minDefined: t, maxDefined: e} = this.getUserBounds();
                    let i = this.min
                      , a = this.max;
                    const n = e=>i = t ? i : e
                      , s = t=>a = e ? a : t
                      , r = (t,e)=>Math.pow(10, Math.floor(B(t)) + e);
                    i === a && (i <= 0 ? (n(1),
                    s(10)) : (n(r(i, -1)),
                    s(r(a, 1)))),
                    i <= 0 && n(r(a, -1)),
                    a <= 0 && s(r(i, 1)),
                    this._zero && this.min !== this._suggestedMin && i === r(this.min, 0) && n(r(i, -1)),
                    this.min = i,
                    this.max = a
                }
                buildTicks() {
                    const t = this.options
                      , e = function(t, e) {
                        const i = Math.floor(B(e.max))
                          , a = Math.ceil(e.max / Math.pow(10, i))
                          , n = [];
                        let s = h(t.min, Math.pow(10, Math.floor(B(e.min))))
                          , r = Math.floor(B(s))
                          , o = Math.floor(s / Math.pow(10, r))
                          , l = r < 0 ? Math.pow(10, Math.abs(r)) : 1;
                        do {
                            n.push({
                                value: s,
                                major: Xs(s)
                            }),
                            ++o,
                            10 === o && (o = 1,
                            ++r,
                            l = r >= 0 ? 1 : l),
                            s = Math.round(o * Math.pow(10, r) * l) / l
                        } while (r < i || r === i && o < a);
                        const c = h(t.max, s);
                        return n.push({
                            value: c,
                            major: Xs(s)
                        }),
                        n
                    }({
                        min: this._userMin,
                        max: this._userMax
                    }, this);
                    return "ticks" === t.bounds && N(e, this, "value"),
                    t.reverse ? (e.reverse(),
                    this.start = this.max,
                    this.end = this.min) : (this.start = this.min,
                    this.end = this.max),
                    e
                }
                getLabelForValue(t) {
                    return void 0 === t ? "0" : ei(t, this.chart.options.locale, this.options.ticks.format)
                }
                configure() {
                    const t = this.min;
                    super.configure(),
                    this._startValue = B(t),
                    this._valueRange = B(this.max) - B(t)
                }
                getPixelForValue(t) {
                    return void 0 !== t && 0 !== t || (t = this.min),
                    null === t || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : (B(t) - this._startValue) / this._valueRange)
                }
                getValueForPixel(t) {
                    const e = this.getDecimalForPixel(t);
                    return Math.pow(10, this._startValue + e * this._valueRange)
                }
            }
            function Fs(t) {
                const e = t.ticks;
                if (e.display && t.display) {
                    const t = le(e.backdropPadding);
                    return d(e.font && e.font.size, jt.font.size) + t.height
                }
                return 0
            }
            function js(t, e, i, a, n) {
                return t === a || t === n ? {
                    start: e - i / 2,
                    end: e + i / 2
                } : t < a || t > n ? {
                    start: e - i,
                    end: e
                } : {
                    start: e,
                    end: e + i
                }
            }
            function Ns(t) {
                const e = {
                    l: 0,
                    r: t.width,
                    t: 0,
                    b: t.height - t.paddingTop
                }
                  , i = {}
                  , a = []
                  , n = []
                  , s = t.getLabels().length;
                for (let h = 0; h < s; h++) {
                    const s = t.options.pointLabels.setContext(t.getPointLabelContext(h));
                    n[h] = s.padding;
                    const d = t.getPointPosition(h, t.drawingArea + n[h])
                      , f = ce(s.font)
                      , u = (r = t.ctx,
                    l = f,
                    c = o(c = t._pointLabels[h]) ? c : [c],
                    {
                        w: Zt(r, l.string, c),
                        h: c.length * l.lineHeight
                    });
                    a[h] = u;
                    const m = t.getIndexAngle(h)
                      , p = V(m)
                      , g = js(p, d.x, u.w, 0, 180)
                      , b = js(p, d.y, u.h, 90, 270);
                    g.start < e.l && (e.l = g.start,
                    i.l = m),
                    g.end > e.r && (e.r = g.end,
                    i.r = m),
                    b.start < e.t && (e.t = b.start,
                    i.t = m),
                    b.end > e.b && (e.b = b.end,
                    i.b = m)
                }
                var r, l, c;
                t._setReductions(t.drawingArea, e, i),
                t._pointLabelItems = function(t, e, i) {
                    const a = []
                      , n = t.getLabels().length
                      , s = t.options
                      , r = Fs(s)
                      , o = t.getDistanceFromCenterForValue(s.ticks.reverse ? t.min : t.max);
                    for (let s = 0; s < n; s++) {
                        const n = 0 === s ? r / 2 : 0
                          , l = t.getPointPosition(s, o + n + i[s])
                          , c = V(t.getIndexAngle(s))
                          , h = e[s]
                          , d = Ws(l.y, h.h, c)
                          , f = Zs(c)
                          , u = Vs(l.x, h.w, f);
                        a.push({
                            x: l.x,
                            y: d,
                            textAlign: f,
                            left: u,
                            top: d,
                            right: u + h.w,
                            bottom: d + h.h
                        })
                    }
                    return a
                }(t, a, n)
            }
            function Zs(t) {
                return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right"
            }
            function Vs(t, e, i) {
                return "right" === i ? t -= e : "center" === i && (t -= e / 2),
                t
            }
            function Ws(t, e, i) {
                return 90 === i || 270 === i ? t -= e / 2 : (i > 270 || i < 90) && (t -= e),
                t
            }
            function Us(t, e, i, a) {
                const {ctx: n} = t;
                if (i)
                    n.arc(t.xCenter, t.yCenter, e, 0, L);
                else {
                    let i = t.getPointPosition(0, e);
                    n.moveTo(i.x, i.y);
                    for (let s = 1; s < a; s++)
                        i = t.getPointPosition(s, e),
                        n.lineTo(i.x, i.y)
                }
            }
            function Hs(t) {
                return F(t) ? t : 0
            }
            Ys.id = "logarithmic",
            Ys.defaults = {
                ticks: {
                    callback: Ea.formatters.logarithmic,
                    major: {
                        enabled: !0
                    }
                }
            };
            class $s extends zs {
                constructor(t) {
                    super(t),
                    this.xCenter = void 0,
                    this.yCenter = void 0,
                    this.drawingArea = void 0,
                    this._pointLabels = [],
                    this._pointLabelItems = []
                }
                setDimensions() {
                    this.width = this.maxWidth,
                    this.height = this.maxHeight,
                    this.paddingTop = Fs(this.options) / 2,
                    this.xCenter = Math.floor(this.width / 2),
                    this.yCenter = Math.floor((this.height - this.paddingTop) / 2),
                    this.drawingArea = Math.min(this.height - this.paddingTop, this.width) / 2
                }
                determineDataLimits() {
                    const {min: t, max: e} = this.getMinMax(!1);
                    this.min = c(t) && !isNaN(t) ? t : 0,
                    this.max = c(e) && !isNaN(e) ? e : 0,
                    this.handleTickRangeOptions()
                }
                computeTickLimit() {
                    return Math.ceil(this.drawingArea / Fs(this.options))
                }
                generateTickLabels(t) {
                    zs.prototype.generateTickLabels.call(this, t),
                    this._pointLabels = this.getLabels().map(((t,e)=>{
                        const i = u(this.options.pointLabels.callback, [t, e], this);
                        return i || 0 === i ? i : ""
                    }
                    ))
                }
                fit() {
                    const t = this.options;
                    t.display && t.pointLabels.display ? Ns(this) : this.setCenterPoint(0, 0, 0, 0)
                }
                _setReductions(t, e, i) {
                    let a = e.l / Math.sin(i.l)
                      , n = Math.max(e.r - this.width, 0) / Math.sin(i.r)
                      , s = -e.t / Math.cos(i.t)
                      , r = -Math.max(e.b - (this.height - this.paddingTop), 0) / Math.cos(i.b);
                    a = Hs(a),
                    n = Hs(n),
                    s = Hs(s),
                    r = Hs(r),
                    this.drawingArea = Math.max(t / 2, Math.min(Math.floor(t - (a + n) / 2), Math.floor(t - (s + r) / 2))),
                    this.setCenterPoint(a, n, s, r)
                }
                setCenterPoint(t, e, i, a) {
                    const n = this.width - e - this.drawingArea
                      , s = t + this.drawingArea
                      , r = i + this.drawingArea
                      , o = this.height - this.paddingTop - a - this.drawingArea;
                    this.xCenter = Math.floor((s + n) / 2 + this.left),
                    this.yCenter = Math.floor((r + o) / 2 + this.top + this.paddingTop)
                }
                getIndexAngle(t) {
                    return $(t * (L / this.getLabels().length) + Z(this.options.startAngle || 0))
                }
                getDistanceFromCenterForValue(t) {
                    if (r(t))
                        return NaN;
                    const e = this.drawingArea / (this.max - this.min);
                    return this.options.reverse ? (this.max - t) * e : (t - this.min) * e
                }
                getValueForDistanceFromCenter(t) {
                    if (r(t))
                        return NaN;
                    const e = t / (this.drawingArea / (this.max - this.min));
                    return this.options.reverse ? this.max - e : this.min + e
                }
                getPointLabelContext(t) {
                    const e = this._pointLabels || [];
                    if (t >= 0 && t < e.length) {
                        const i = e[t];
                        return function(t, e, i) {
                            return de(t, {
                                label: i,
                                index: e,
                                type: "pointLabel"
                            })
                        }(this.getContext(), t, i)
                    }
                }
                getPointPosition(t, e) {
                    const i = this.getIndexAngle(t) - T;
                    return {
                        x: Math.cos(i) * e + this.xCenter,
                        y: Math.sin(i) * e + this.yCenter,
                        angle: i
                    }
                }
                getPointPositionForValue(t, e) {
                    return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
                }
                getBasePosition(t) {
                    return this.getPointPositionForValue(t || 0, this.getBaseValue())
                }
                getPointLabelPosition(t) {
                    const {left: e, top: i, right: a, bottom: n} = this._pointLabelItems[t];
                    return {
                        left: e,
                        top: i,
                        right: a,
                        bottom: n
                    }
                }
                drawBackground() {
                    const {backgroundColor: t, grid: {circular: e}} = this.options;
                    if (t) {
                        const i = this.ctx;
                        i.save(),
                        i.beginPath(),
                        Us(this, this.getDistanceFromCenterForValue(this._endValue), e, this.getLabels().length),
                        i.closePath(),
                        i.fillStyle = t,
                        i.fill(),
                        i.restore()
                    }
                }
                drawGrid() {
                    const t = this.ctx
                      , e = this.options
                      , {angleLines: i, grid: a} = e
                      , n = this.getLabels().length;
                    let s, o, l;
                    if (e.pointLabels.display && function(t, e) {
                        const {ctx: i, options: {pointLabels: a}} = t;
                        for (let n = e - 1; n >= 0; n--) {
                            const e = a.setContext(t.getPointLabelContext(n))
                              , s = ce(e.font)
                              , {x: o, y: l, textAlign: c, left: h, top: d, right: f, bottom: u} = t._pointLabelItems[n]
                              , {backdropColor: m} = e;
                            if (!r(m)) {
                                const t = le(e.backdropPadding);
                                i.fillStyle = m,
                                i.fillRect(h - t.left, d - t.top, f - h + t.width, u - d + t.height)
                            }
                            Jt(i, t._pointLabels[n], o, l + s.lineHeight / 2, s, {
                                color: e.color,
                                textAlign: c,
                                textBaseline: "middle"
                            })
                        }
                    }(this, n),
                    a.display && this.ticks.forEach(((t,e)=>{
                        if (0 !== e) {
                            o = this.getDistanceFromCenterForValue(t.value);
                            !function(t, e, i, a) {
                                const n = t.ctx
                                  , s = e.circular
                                  , {color: r, lineWidth: o} = e;
                                !s && !a || !r || !o || i < 0 || (n.save(),
                                n.strokeStyle = r,
                                n.lineWidth = o,
                                n.setLineDash(e.borderDash),
                                n.lineDashOffset = e.borderDashOffset,
                                n.beginPath(),
                                Us(t, i, s, a),
                                n.closePath(),
                                n.stroke(),
                                n.restore())
                            }(this, a.setContext(this.getContext(e - 1)), o, n)
                        }
                    }
                    )),
                    i.display) {
                        for (t.save(),
                        s = this.getLabels().length - 1; s >= 0; s--) {
                            const a = i.setContext(this.getPointLabelContext(s))
                              , {color: n, lineWidth: r} = a;
                            r && n && (t.lineWidth = r,
                            t.strokeStyle = n,
                            t.setLineDash(a.borderDash),
                            t.lineDashOffset = a.borderDashOffset,
                            o = this.getDistanceFromCenterForValue(e.ticks.reverse ? this.min : this.max),
                            l = this.getPointPosition(s, o),
                            t.beginPath(),
                            t.moveTo(this.xCenter, this.yCenter),
                            t.lineTo(l.x, l.y),
                            t.stroke())
                        }
                        t.restore()
                    }
                }
                drawBorder() {}
                drawLabels() {
                    const t = this.ctx
                      , e = this.options
                      , i = e.ticks;
                    if (!i.display)
                        return;
                    const a = this.getIndexAngle(0);
                    let n, s;
                    t.save(),
                    t.translate(this.xCenter, this.yCenter),
                    t.rotate(a),
                    t.textAlign = "center",
                    t.textBaseline = "middle",
                    this.ticks.forEach(((a,r)=>{
                        if (0 === r && !e.reverse)
                            return;
                        const o = i.setContext(this.getContext(r))
                          , l = ce(o.font);
                        if (n = this.getDistanceFromCenterForValue(this.ticks[r].value),
                        o.showLabelBackdrop) {
                            t.font = l.string,
                            s = t.measureText(a.label).width,
                            t.fillStyle = o.backdropColor;
                            const e = le(o.backdropPadding);
                            t.fillRect(-s / 2 - e.left, -n - l.size / 2 - e.top, s + e.width, l.size + e.height)
                        }
                        Jt(t, a.label, 0, -n, l, {
                            color: o.color
                        })
                    }
                    )),
                    t.restore()
                }
                drawTitle() {}
            }
            $s.id = "radialLinear",
            $s.defaults = {
                display: !0,
                animate: !0,
                position: "chartArea",
                angleLines: {
                    display: !0,
                    lineWidth: 1,
                    borderDash: [],
                    borderDashOffset: 0
                },
                grid: {
                    circular: !1
                },
                startAngle: 0,
                ticks: {
                    showLabelBackdrop: !0,
                    callback: Ea.formatters.numeric
                },
                pointLabels: {
                    backdropColor: void 0,
                    backdropPadding: 2,
                    display: !0,
                    font: {
                        size: 10
                    },
                    callback: t=>t,
                    padding: 5
                }
            },
            $s.defaultRoutes = {
                "angleLines.color": "borderColor",
                "pointLabels.color": "color",
                "ticks.color": "color"
            },
            $s.descriptors = {
                angleLines: {
                    _fallback: "grid"
                }
            };
            const qs = {
                millisecond: {
                    common: !0,
                    size: 1,
                    steps: 1e3
                },
                second: {
                    common: !0,
                    size: 1e3,
                    steps: 60
                },
                minute: {
                    common: !0,
                    size: 6e4,
                    steps: 60
                },
                hour: {
                    common: !0,
                    size: 36e5,
                    steps: 24
                },
                day: {
                    common: !0,
                    size: 864e5,
                    steps: 30
                },
                week: {
                    common: !1,
                    size: 6048e5,
                    steps: 4
                },
                month: {
                    common: !0,
                    size: 2628e6,
                    steps: 12
                },
                quarter: {
                    common: !1,
                    size: 7884e6,
                    steps: 4
                },
                year: {
                    common: !0,
                    size: 3154e7
                }
            }
              , Ks = Object.keys(qs);
            function Gs(t, e) {
                return t - e
            }
            function Js(t, e) {
                if (r(e))
                    return null;
                const i = t._adapter
                  , {parser: a, round: n, isoWeekday: s} = t._parseOpts;
                let o = e;
                return "function" == typeof a && (o = a(o)),
                c(o) || (o = "string" == typeof a ? i.parse(o, a) : i.parse(o)),
                null === o ? null : (n && (o = "week" !== n || !F(s) && !0 !== s ? i.startOf(o, n) : i.startOf(o, "isoWeek", s)),
                +o)
            }
            function Qs(t, e, i, a) {
                const n = Ks.length;
                for (let s = Ks.indexOf(t); s < n - 1; ++s) {
                    const t = qs[Ks[s]]
                      , n = t.steps ? t.steps : Number.MAX_SAFE_INTEGER;
                    if (t.common && Math.ceil((i - e) / (n * t.size)) <= a)
                        return Ks[s]
                }
                return Ks[n - 1]
            }
            function tr(t, e, i) {
                if (i) {
                    if (i.length) {
                        const {lo: a, hi: n} = fe(i, e);
                        t[i[a] >= e ? i[a] : i[n]] = !0
                    }
                } else
                    t[e] = !0
            }
            function er(t, e, i) {
                const a = []
                  , n = {}
                  , s = e.length;
                let r, o;
                for (r = 0; r < s; ++r)
                    o = e[r],
                    n[o] = r,
                    a.push({
                        value: o,
                        major: !1
                    });
                return 0 !== s && i ? function(t, e, i, a) {
                    const n = t._adapter
                      , s = +n.startOf(e[0].value, a)
                      , r = e[e.length - 1].value;
                    let o, l;
                    for (o = s; o <= r; o = +n.add(o, 1, a))
                        l = i[o],
                        l >= 0 && (e[l].major = !0);
                    return e
                }(t, a, n, i) : a
            }
            class ir extends Va {
                constructor(t) {
                    super(t),
                    this._cache = {
                        data: [],
                        labels: [],
                        all: []
                    },
                    this._unit = "day",
                    this._majorUnit = void 0,
                    this._offsets = {},
                    this._normalized = !1,
                    this._parseOpts = void 0
                }
                init(t, e) {
                    const i = t.time || (t.time = {})
                      , a = this._adapter = new qi._date(t.adapters.date);
                    k(i.displayFormats, a.formats()),
                    this._parseOpts = {
                        parser: i.parser,
                        round: i.round,
                        isoWeekday: i.isoWeekday
                    },
                    super.init(t),
                    this._normalized = e.normalized
                }
                parse(t, e) {
                    return void 0 === t ? null : Js(this, t)
                }
                beforeLayout() {
                    super.beforeLayout(),
                    this._cache = {
                        data: [],
                        labels: [],
                        all: []
                    }
                }
                determineDataLimits() {
                    const t = this.options
                      , e = this._adapter
                      , i = t.time.unit || "day";
                    let {min: a, max: n, minDefined: s, maxDefined: r} = this.getUserBounds();
                    function o(t) {
                        s || isNaN(t.min) || (a = Math.min(a, t.min)),
                        r || isNaN(t.max) || (n = Math.max(n, t.max))
                    }
                    s && r || (o(this._getLabelBounds()),
                    "ticks" === t.bounds && "labels" === t.ticks.source || o(this.getMinMax(!1))),
                    a = c(a) && !isNaN(a) ? a : +e.startOf(Date.now(), i),
                    n = c(n) && !isNaN(n) ? n : +e.endOf(Date.now(), i) + 1,
                    this.min = Math.min(a, n - 1),
                    this.max = Math.max(a + 1, n)
                }
                _getLabelBounds() {
                    const t = this.getLabelTimestamps();
                    let e = Number.POSITIVE_INFINITY
                      , i = Number.NEGATIVE_INFINITY;
                    return t.length && (e = t[0],
                    i = t[t.length - 1]),
                    {
                        min: e,
                        max: i
                    }
                }
                buildTicks() {
                    const t = this.options
                      , e = t.time
                      , i = t.ticks
                      , a = "labels" === i.source ? this.getLabelTimestamps() : this._generate();
                    "ticks" === t.bounds && a.length && (this.min = this._userMin || a[0],
                    this.max = this._userMax || a[a.length - 1]);
                    const n = this.min
                      , s = function(t, e, i) {
                        let a = 0
                          , n = t.length;
                        for (; a < n && t[a] < e; )
                            a++;
                        for (; n > a && t[n - 1] > i; )
                            n--;
                        return a > 0 || n < t.length ? t.slice(a, n) : t
                    }(a, n, this.max);
                    return this._unit = e.unit || (i.autoSkip ? Qs(e.minUnit, this.min, this.max, this._getLabelCapacity(n)) : function(t, e, i, a, n) {
                        for (let s = Ks.length - 1; s >= Ks.indexOf(i); s--) {
                            const i = Ks[s];
                            if (qs[i].common && t._adapter.diff(n, a, i) >= e - 1)
                                return i
                        }
                        return Ks[i ? Ks.indexOf(i) : 0]
                    }(this, s.length, e.minUnit, this.min, this.max)),
                    this._majorUnit = i.major.enabled && "year" !== this._unit ? function(t) {
                        for (let e = Ks.indexOf(t) + 1, i = Ks.length; e < i; ++e)
                            if (qs[Ks[e]].common)
                                return Ks[e]
                    }(this._unit) : void 0,
                    this.initOffsets(a),
                    t.reverse && s.reverse(),
                    er(this, s, this._majorUnit)
                }
                initOffsets(t) {
                    let e, i, a = 0, n = 0;
                    this.options.offset && t.length && (e = this.getDecimalForValue(t[0]),
                    a = 1 === t.length ? 1 - e : (this.getDecimalForValue(t[1]) - e) / 2,
                    i = this.getDecimalForValue(t[t.length - 1]),
                    n = 1 === t.length ? i : (i - this.getDecimalForValue(t[t.length - 2])) / 2);
                    const s = t.length < 3 ? .5 : .25;
                    a = K(a, 0, s),
                    n = K(n, 0, s),
                    this._offsets = {
                        start: a,
                        end: n,
                        factor: 1 / (a + 1 + n)
                    }
                }
                _generate() {
                    const t = this._adapter
                      , e = this.min
                      , i = this.max
                      , a = this.options
                      , n = a.time
                      , s = n.unit || Qs(n.minUnit, e, i, this._getLabelCapacity(e))
                      , r = d(n.stepSize, 1)
                      , o = "week" === s && n.isoWeekday
                      , l = F(o) || !0 === o
                      , c = {};
                    let h, f, u = e;
                    if (l && (u = +t.startOf(u, "isoWeek", o)),
                    u = +t.startOf(u, l ? "day" : s),
                    t.diff(i, e, s) > 1e5 * r)
                        throw new Error(e + " and " + i + " are too far apart with stepSize of " + r + " " + s);
                    const m = "data" === a.ticks.source && this.getDataTimestamps();
                    for (h = u,
                    f = 0; h < i; h = +t.add(h, r, s),
                    f++)
                        tr(c, h, m);
                    return h !== i && "ticks" !== a.bounds && 1 !== f || tr(c, h, m),
                    Object.keys(c).sort(((t,e)=>t - e)).map((t=>+t))
                }
                getLabelForValue(t) {
                    const e = this._adapter
                      , i = this.options.time;
                    return i.tooltipFormat ? e.format(t, i.tooltipFormat) : e.format(t, i.displayFormats.datetime)
                }
                _tickFormatFunction(t, e, i, a) {
                    const n = this.options
                      , s = n.time.displayFormats
                      , r = this._unit
                      , o = this._majorUnit
                      , l = r && s[r]
                      , c = o && s[o]
                      , h = i[e]
                      , d = o && c && h && h.major
                      , f = this._adapter.format(t, a || (d ? c : l))
                      , m = n.ticks.callback;
                    return m ? u(m, [f, e, i], this) : f
                }
                generateTickLabels(t) {
                    let e, i, a;
                    for (e = 0,
                    i = t.length; e < i; ++e)
                        a = t[e],
                        a.label = this._tickFormatFunction(a.value, e, t)
                }
                getDecimalForValue(t) {
                    return null === t ? NaN : (t - this.min) / (this.max - this.min)
                }
                getPixelForValue(t) {
                    const e = this._offsets
                      , i = this.getDecimalForValue(t);
                    return this.getPixelForDecimal((e.start + i) * e.factor)
                }
                getValueForPixel(t) {
                    const e = this._offsets
                      , i = this.getDecimalForPixel(t) / e.factor - e.end;
                    return this.min + i * (this.max - this.min)
                }
                _getLabelSize(t) {
                    const e = this.options.ticks
                      , i = this.ctx.measureText(t).width
                      , a = Z(this.isHorizontal() ? e.maxRotation : e.minRotation)
                      , n = Math.cos(a)
                      , s = Math.sin(a)
                      , r = this._resolveTickFontOptions(0).size;
                    return {
                        w: i * n + r * s,
                        h: i * s + r * n
                    }
                }
                _getLabelCapacity(t) {
                    const e = this.options.time
                      , i = e.displayFormats
                      , a = i[e.unit] || i.millisecond
                      , n = this._tickFormatFunction(t, 0, er(this, [t], this._majorUnit), a)
                      , s = this._getLabelSize(n)
                      , r = Math.floor(this.isHorizontal() ? this.width / s.w : this.height / s.h) - 1;
                    return r > 0 ? r : 1
                }
                getDataTimestamps() {
                    let t, e, i = this._cache.data || [];
                    if (i.length)
                        return i;
                    const a = this.getMatchingVisibleMetas();
                    if (this._normalized && a.length)
                        return this._cache.data = a[0].controller.getAllParsedValues(this);
                    for (t = 0,
                    e = a.length; t < e; ++t)
                        i = i.concat(a[t].controller.getAllParsedValues(this));
                    return this._cache.data = this.normalize(i)
                }
                getLabelTimestamps() {
                    const t = this._cache.labels || [];
                    let e, i;
                    if (t.length)
                        return t;
                    const a = this.getLabels();
                    for (e = 0,
                    i = a.length; e < i; ++e)
                        t.push(Js(this, a[e]));
                    return this._cache.labels = this._normalized ? t : this.normalize(t)
                }
                normalize(t) {
                    return be(t.sort(Gs))
                }
            }
            function ar(t, e, i) {
                let a, n, s, r, o = 0, l = t.length - 1;
                i ? (e >= t[o].pos && e <= t[l].pos && ({lo: o, hi: l} = ue(t, "pos", e)),
                ({pos: a, time: s} = t[o]),
                ({pos: n, time: r} = t[l])) : (e >= t[o].time && e <= t[l].time && ({lo: o, hi: l} = ue(t, "time", e)),
                ({time: a, pos: s} = t[o]),
                ({time: n, pos: r} = t[l]));
                const c = n - a;
                return c ? s + (r - s) * (e - a) / c : s
            }
            ir.id = "time",
            ir.defaults = {
                bounds: "data",
                adapters: {},
                time: {
                    parser: !1,
                    unit: !1,
                    round: !1,
                    isoWeekday: !1,
                    minUnit: "millisecond",
                    displayFormats: {}
                },
                ticks: {
                    source: "auto",
                    major: {
                        enabled: !1
                    }
                }
            };
            class nr extends ir {
                constructor(t) {
                    super(t),
                    this._table = [],
                    this._minPos = void 0,
                    this._tableRange = void 0
                }
                initOffsets() {
                    const t = this._getTimestampsForTable()
                      , e = this._table = this.buildLookupTable(t);
                    this._minPos = ar(e, this.min),
                    this._tableRange = ar(e, this.max) - this._minPos,
                    super.initOffsets(t)
                }
                buildLookupTable(t) {
                    const {min: e, max: i} = this
                      , a = []
                      , n = [];
                    let s, r, o, l, c;
                    for (s = 0,
                    r = t.length; s < r; ++s)
                        l = t[s],
                        l >= e && l <= i && a.push(l);
                    if (a.length < 2)
                        return [{
                            time: e,
                            pos: 0
                        }, {
                            time: i,
                            pos: 1
                        }];
                    for (s = 0,
                    r = a.length; s < r; ++s)
                        c = a[s + 1],
                        o = a[s - 1],
                        l = a[s],
                        Math.round((c + o) / 2) !== l && n.push({
                            time: l,
                            pos: s / (r - 1)
                        });
                    return n
                }
                _getTimestampsForTable() {
                    let t = this._cache.all || [];
                    if (t.length)
                        return t;
                    const e = this.getDataTimestamps()
                      , i = this.getLabelTimestamps();
                    return t = e.length && i.length ? this.normalize(e.concat(i)) : e.length ? e : i,
                    t = this._cache.all = t,
                    t
                }
                getDecimalForValue(t) {
                    return (ar(this._table, t) - this._minPos) / this._tableRange
                }
                getValueForPixel(t) {
                    const e = this._offsets
                      , i = this.getDecimalForPixel(t) / e.factor - e.end;
                    return ar(this._table, i * this._tableRange + this._minPos, !0)
                }
            }
            nr.id = "timeseries",
            nr.defaults = ir.defaults;
            const sr = [Ui, Vn, Ps, Object.freeze({
                __proto__: null,
                CategoryScale: As,
                LinearScale: Bs,
                LogarithmicScale: Ys,
                RadialLinearScale: $s,
                TimeScale: ir,
                TimeSeriesScale: nr
            })];
            bn.register(...sr);
            const rr = bn;
            new rr(document.getElementById("barChart"),{
                type: "bar",
                data: {
                    labels: ["", "", "", "", "", "", "", ""],
                    datasets: [{
                        data: [12, 11, 13, 15, 12, 10, 11, 14],
                        responsive: !0,
                        backgroundColor: "#fff",
                        borderRadius: 100,
                        barPercentage: .1
                    }]
                },
                options: {
                    scales: {
                        x: {
                            grid: {
                                display: !1,
                                drawBorder: !1,
                                drawOnChartArea: !1,
                                drawTicks: !1
                            },
                            ticks: {
                                display: !1
                            }
                        },
                        y: {
                            grid: {
                                display: !1,
                                drawBorder: !1,
                                drawOnChartArea: !1,
                                drawTicks: !1
                            },
                            ticks: {
                                color: "#fff"
                            }
                        }
                    },
                    layout: {
                        padding: 30
                    },
                    plugins: {
                        legend: {
                            display: !1
                        }
                    }
                }
            }),
            new rr(document.getElementById("lineChart"),{
                type: "line",
                data: {
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    datasets: [{
                        responsive: !0,
                        label: "My First Dataset",
                        data: [80, 65, 60, 50, 40, 40, 50, 60, 65, 60, 50, 40],
                        fill: !0,
                        radius: 0,
                        borderColor: "rgb(72, 79, 90)",
                        backgroundColor: "rgba(72, 79, 90, 0.3)",
                        tension: .5
                    }, {
                        responsive: !0,
                        label: "My First Dataset",
                        data: [65, 50, 60, 45, 70, 65, 30, 40, 20, 60, 45, 70],
                        fill: !0,
                        radius: 0,
                        borderColor: "rgb(75, 192, 192)",
                        backgroundColor: "rgba(75, 192, 192, 0.4)",
                        tension: .5
                    }]
                },
                options: {
                    scales: {
                        x: {
                            grid: {
                                display: !1,
                                drawBorder: !1,
                                drawOnChartArea: !1,
                                drawTicks: !1
                            },
                            ticks: {
                                padding: 15
                            }
                        },
                        y: {
                            beginAtZero: !0,
                            grid: {
                                drawBorder: !0,
                                drawOnChartArea: !0,
                                drawTicks: !0,
                                borderDash: [5, 8]
                            },
                            ticks: {
                                padding: 15
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: !1
                        }
                    }
                }
            }),
            new rr(document.getElementById("line2Chart"),{
                type: "line",
                data: {
                    labels: ["", "", "", "", "", "", "", ""],
                    datasets: [{
                        data: [12, 11, 13, 15, 12, 10, 11, 14],
                        borderColor: "#64748b",
                        backgroundColor: "#475569"
                    }, {
                        data: [24, 18, 6, 8, 11, 14, 6, 20],
                        borderColor: "#14b8a6",
                        backgroundColor: "#0d9488"
                    }, {
                        data: [20, 15, 29, 25, 18, 16, 9, 12],
                        borderColor: "#6366f1",
                        backgroundColor: "#4f46e5"
                    }]
                },
                options: {
                    responsive: !0,
                    plugins: {
                        legend: {
                            display: !1
                        },
                        title: {
                            display: !0
                        }
                    }
                }
            }),
            new rr(document.getElementById("doughnutChart"),{
                type: "doughnut",
                data: {
                    labels: ["Jun", "Feb", "Mar", "Apr"],
                    datasets: [{
                        label: "Dataset 1",
                        data: [5, 6, 1, 2],
                        backgroundColor: ["RGB(83, 187, 187)", "RGB(41, 40, 107)", "RGB(201, 202, 206)", "rgba(50,64,144,1)"]
                    }]
                },
                options: {
                    responsive: !0,
                    plugins: {
                        legend: {
                            display: !0,
                            position: "bottom"
                        }
                    }
                }
            })
        }
        ,
        235: (t,e,i)=>{
            var a, n, s, r, o = Object.create, l = Object.defineProperty, c = Object.getPrototypeOf, h = Object.prototype.hasOwnProperty, d = Object.getOwnPropertyNames, f = Object.getOwnPropertyDescriptor, u = (t,e)=>()=>(e || t((e = {
                exports: {}
            }).exports, e),
            e.exports), m = u((t=>{
                function e(t, e) {
                    const i = Object.create(null)
                      , a = t.split(",");
                    for (let t = 0; t < a.length; t++)
                        i[a[t]] = !0;
                    return e ? t=>!!i[t.toLowerCase()] : t=>!!i[t]
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var a = {
                    1: "TEXT",
                    2: "CLASS",
                    4: "STYLE",
                    8: "PROPS",
                    16: "FULL_PROPS",
                    32: "HYDRATE_EVENTS",
                    64: "STABLE_FRAGMENT",
                    128: "KEYED_FRAGMENT",
                    256: "UNKEYED_FRAGMENT",
                    512: "NEED_PATCH",
                    1024: "DYNAMIC_SLOTS",
                    2048: "DEV_ROOT_FRAGMENT",
                    [-1]: "HOISTED",
                    [-2]: "BAIL"
                }
                  , n = {
                    1: "STABLE",
                    2: "DYNAMIC",
                    3: "FORWARDED"
                }
                  , s = e("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt");
                var r = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
                  , o = e(r)
                  , l = e(r + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected")
                  , c = /[>/="'\u0009\u000a\u000c\u0020]/
                  , h = {};
                var d = e("animation-iteration-count,border-image-outset,border-image-slice,border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,stroke-miterlimit,stroke-opacity,stroke-width")
                  , f = e("accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap");
                var u = /;(?![^(]*\))/g
                  , m = /:(.+)/;
                function p(t) {
                    const e = {};
                    return t.split(u).forEach((t=>{
                        if (t) {
                            const i = t.split(m);
                            i.length > 1 && (e[i[0].trim()] = i[1].trim())
                        }
                    }
                    )),
                    e
                }
                var g = e("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot")
                  , b = e("svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view")
                  , x = e("area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr")
                  , y = /["'&<>]/;
                var k = /^-?>|<!--|-->|--!>|<!-$/g;
                function _(t, e) {
                    if (t === e)
                        return !0;
                    let i = C(t)
                      , a = C(e);
                    if (i || a)
                        return !(!i || !a) && t.getTime() === e.getTime();
                    if (i = R(t),
                    a = R(e),
                    i || a)
                        return !(!i || !a) && function(t, e) {
                            if (t.length !== e.length)
                                return !1;
                            let i = !0;
                            for (let a = 0; i && a < t.length; a++)
                                i = _(t[a], e[a]);
                            return i
                        }(t, e);
                    if (i = E(t),
                    a = E(e),
                    i || a) {
                        if (!i || !a)
                            return !1;
                        if (Object.keys(t).length !== Object.keys(e).length)
                            return !1;
                        for (const i in t) {
                            const a = t.hasOwnProperty(i)
                              , n = e.hasOwnProperty(i);
                            if (a && !n || !a && n || !_(t[i], e[i]))
                                return !1
                        }
                    }
                    return String(t) === String(e)
                }
                var w, v = (t,e)=>L(e) ? {
                    [`Map(${e.size})`]: [...e.entries()].reduce(((t,[e,i])=>(t[`${e} =>`] = i,
                    t)), {})
                } : P(e) ? {
                    [`Set(${e.size})`]: [...e.values()]
                } : !E(e) || R(e) || X(e) ? e : String(e), O = Object.freeze({}), M = Object.freeze([]), S = /^on[^a-z]/, D = Object.assign, I = Object.prototype.hasOwnProperty, R = Array.isArray, L = t=>"[object Map]" === B(t), P = t=>"[object Set]" === B(t), C = t=>t instanceof Date, A = t=>"function" == typeof t, T = t=>"string" == typeof t, E = t=>null !== t && "object" == typeof t, z = Object.prototype.toString, B = t=>z.call(t), X = t=>"[object Object]" === B(t), Y = e(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), F = t=>{
                    const e = Object.create(null);
                    return i=>e[i] || (e[i] = t(i))
                }
                , j = /-(\w)/g, N = F((t=>t.replace(j, ((t,e)=>e ? e.toUpperCase() : "")))), Z = /\B([A-Z])/g, V = F((t=>t.replace(Z, "-$1").toLowerCase())), W = F((t=>t.charAt(0).toUpperCase() + t.slice(1))), U = F((t=>t ? `on ${W(t)}` : ""));
                t.EMPTY_ARR = M,
                t.EMPTY_OBJ = O,
                t.NO = ()=>!1,
                t.NOOP = ()=>{}
                ,
                t.PatchFlagNames = a,
                t.babelParserDefaultPlugins = ["bigInt", "optionalChaining", "nullishCoalescingOperator"],
                t.camelize = N,
                t.capitalize = W,
                t.def = (t,e,i)=>{
                    Object.defineProperty(t, e, {
                        configurable: !0,
                        enumerable: !1,
                        value: i
                    })
                }
                ,
                t.escapeHtml = function(t) {
                    const e = "" + t
                      , i = y.exec(e);
                    if (!i)
                        return e;
                    let a, n, s = "", r = 0;
                    for (n = i.index; n < e.length; n++) {
                        switch (e.charCodeAt(n)) {
                        case 34:
                            a = "&quot;";
                            break;
                        case 38:
                            a = "&amp;";
                            break;
                        case 39:
                            a = "&#39;";
                            break;
                        case 60:
                            a = "&lt;";
                            break;
                        case 62:
                            a = "&gt;";
                            break;
                        default:
                            continue
                        }
                        r !== n && (s += e.substring(r, n)),
                        r = n + 1,
                        s += a
                    }
                    return r !== n ? s + e.substring(r, n) : s
                }
                ,
                t.escapeHtmlComment = function(t) {
                    return t.replace(k, "")
                }
                ,
                t.extend = D,
                t.generateCodeFrame = function(t, e=0, i=t.length) {
                    const a = t.split(/\r?\n/);
                    let n = 0;
                    const s = [];
                    for (let t = 0; t < a.length; t++)
                        if (n += a[t].length + 1,
                        n >= e) {
                            for (let r = t - 2; r <= t + 2 || i > n; r++) {
                                if (r < 0 || r >= a.length)
                                    continue;
                                const o = r + 1;
                                s.push(`${o}${" ".repeat(Math.max(3 - String(o).length, 0))}|  ${a[r]}`);
                                const l = a[r].length;
                                if (r === t) {
                                    const t = e - (n - l) + 1
                                      , a = Math.max(1, i > n ? l - t : i - e);
                                    s.push("   |  " + " ".repeat(t) + "^".repeat(a))
                                } else if (r > t) {
                                    if (i > n) {
                                        const t = Math.max(Math.min(i - n, l), 1);
                                        s.push("   |  " + "^".repeat(t))
                                    }
                                    n += l + 1
                                }
                            }
                            break
                        }
                    return s.join("\n")
                }
                ,
                t.getGlobalThis = ()=>w || (w = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== i.g ? i.g : {}),
                t.hasChanged = (t,e)=>t !== e && (t == t || e == e),
                t.hasOwn = (t,e)=>I.call(t, e),
                t.hyphenate = V,
                t.invokeArrayFns = (t,e)=>{
                    for (let i = 0; i < t.length; i++)
                        t[i](e)
                }
                ,
                t.isArray = R,
                t.isBooleanAttr = l,
                t.isDate = C,
                t.isFunction = A,
                t.isGloballyWhitelisted = s,
                t.isHTMLTag = g,
                t.isIntegerKey = t=>T(t) && "NaN" !== t && "-" !== t[0] && "" + parseInt(t, 10) === t,
                t.isKnownAttr = f,
                t.isMap = L,
                t.isModelListener = t=>t.startsWith("onUpdate:"),
                t.isNoUnitNumericStyleProp = d,
                t.isObject = E,
                t.isOn = t=>S.test(t),
                t.isPlainObject = X,
                t.isPromise = t=>E(t) && A(t.then) && A(t.catch),
                t.isReservedProp = Y,
                t.isSSRSafeAttrName = function(t) {
                    if (h.hasOwnProperty(t))
                        return h[t];
                    const e = c.test(t);
                    return e && console.error(`unsafe attribute name: ${t}`),
                    h[t] = !e
                }
                ,
                t.isSVGTag = b,
                t.isSet = P,
                t.isSpecialBooleanAttr = o,
                t.isString = T,
                t.isSymbol = t=>"symbol" == typeof t,
                t.isVoidTag = x,
                t.looseEqual = _,
                t.looseIndexOf = function(t, e) {
                    return t.findIndex((t=>_(t, e)))
                }
                ,
                t.makeMap = e,
                t.normalizeClass = function t(e) {
                    let i = "";
                    if (T(e))
                        i = e;
                    else if (R(e))
                        for (let a = 0; a < e.length; a++) {
                            const n = t(e[a]);
                            n && (i += n + " ")
                        }
                    else if (E(e))
                        for (const t in e)
                            e[t] && (i += t + " ");
                    return i.trim()
                }
                ,
                t.normalizeStyle = function t(e) {
                    if (R(e)) {
                        const i = {};
                        for (let a = 0; a < e.length; a++) {
                            const n = e[a]
                              , s = t(T(n) ? p(n) : n);
                            if (s)
                                for (const t in s)
                                    i[t] = s[t]
                        }
                        return i
                    }
                    if (E(e))
                        return e
                }
                ,
                t.objectToString = z,
                t.parseStringStyle = p,
                t.propsToAttrMap = {
                    acceptCharset: "accept-charset",
                    className: "class",
                    htmlFor: "for",
                    httpEquiv: "http-equiv"
                },
                t.remove = (t,e)=>{
                    const i = t.indexOf(e);
                    i > -1 && t.splice(i, 1)
                }
                ,
                t.slotFlagsText = n,
                t.stringifyStyle = function(t) {
                    let e = "";
                    if (!t)
                        return e;
                    for (const i in t) {
                        const a = t[i]
                          , n = i.startsWith("--") ? i : V(i);
                        (T(a) || "number" == typeof a && d(n)) && (e += `${n}:${a};`)
                    }
                    return e
                }
                ,
                t.toDisplayString = t=>null == t ? "" : E(t) ? JSON.stringify(t, v, 2) : String(t),
                t.toHandlerKey = U,
                t.toNumber = t=>{
                    const e = parseFloat(t);
                    return isNaN(e) ? t : e
                }
                ,
                t.toRawType = t=>B(t).slice(8, -1),
                t.toTypeString = B
            }
            )), p = u(((t,e)=>{
                e.exports = m()
            }
            )), g = u((t=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var e, i = p(), a = new WeakMap, n = [], s = Symbol("iterate"), r = Symbol("Map key iterate");
                function o(t, a=i.EMPTY_OBJ) {
                    (function(t) {
                        return t && !0 === t._isEffect
                    }
                    )(t) && (t = t.raw);
                    const s = function(t, i) {
                        const a = function() {
                            if (!a.active)
                                return t();
                            if (!n.includes(a)) {
                                c(a);
                                try {
                                    return u(),
                                    n.push(a),
                                    e = a,
                                    t()
                                } finally {
                                    n.pop(),
                                    m(),
                                    e = n[n.length - 1]
                                }
                            }
                        };
                        return a.id = l++,
                        a.allowRecurse = !!i.allowRecurse,
                        a._isEffect = !0,
                        a.active = !0,
                        a.raw = t,
                        a.deps = [],
                        a.options = i,
                        a
                    }(t, a);
                    return a.lazy || s(),
                    s
                }
                var l = 0;
                function c(t) {
                    const {deps: e} = t;
                    if (e.length) {
                        for (let i = 0; i < e.length; i++)
                            e[i].delete(t);
                        e.length = 0
                    }
                }
                var h = !0
                  , d = [];
                function f() {
                    d.push(h),
                    h = !1
                }
                function u() {
                    d.push(h),
                    h = !0
                }
                function m() {
                    const t = d.pop();
                    h = void 0 === t || t
                }
                function g(t, i, n) {
                    if (!h || void 0 === e)
                        return;
                    let s = a.get(t);
                    s || a.set(t, s = new Map);
                    let r = s.get(n);
                    r || s.set(n, r = new Set),
                    r.has(e) || (r.add(e),
                    e.deps.push(r),
                    e.options.onTrack && e.options.onTrack({
                        effect: e,
                        target: t,
                        type: i,
                        key: n
                    }))
                }
                function b(t, n, o, l, c, h) {
                    const d = a.get(t);
                    if (!d)
                        return;
                    const f = new Set
                      , u = t=>{
                        t && t.forEach((t=>{
                            (t !== e || t.allowRecurse) && f.add(t)
                        }
                        ))
                    }
                    ;
                    if ("clear" === n)
                        d.forEach(u);
                    else if ("length" === o && i.isArray(t))
                        d.forEach(((t,e)=>{
                            ("length" === e || e >= l) && u(t)
                        }
                        ));
                    else
                        switch (void 0 !== o && u(d.get(o)),
                        n) {
                        case "add":
                            i.isArray(t) ? i.isIntegerKey(o) && u(d.get("length")) : (u(d.get(s)),
                            i.isMap(t) && u(d.get(r)));
                            break;
                        case "delete":
                            i.isArray(t) || (u(d.get(s)),
                            i.isMap(t) && u(d.get(r)));
                            break;
                        case "set":
                            i.isMap(t) && u(d.get(s))
                        }
                    f.forEach((e=>{
                        e.options.onTrigger && e.options.onTrigger({
                            effect: e,
                            target: t,
                            key: o,
                            type: n,
                            newValue: l,
                            oldValue: c,
                            oldTarget: h
                        }),
                        e.options.scheduler ? e.options.scheduler(e) : e()
                    }
                    ))
                }
                var x = i.makeMap("__proto__,__v_isRef,__isVue")
                  , y = new Set(Object.getOwnPropertyNames(Symbol).map((t=>Symbol[t])).filter(i.isSymbol))
                  , k = M()
                  , _ = M(!1, !0)
                  , w = M(!0)
                  , v = M(!0, !0)
                  , O = {};
                function M(t=!1, e=!1) {
                    return function(a, n, s) {
                        if ("__v_isReactive" === n)
                            return !t;
                        if ("__v_isReadonly" === n)
                            return t;
                        if ("__v_raw" === n && s === (t ? e ? rt : st : e ? nt : at).get(a))
                            return a;
                        const r = i.isArray(a);
                        if (!t && r && i.hasOwn(O, n))
                            return Reflect.get(O, n, s);
                        const o = Reflect.get(a, n, s);
                        if (i.isSymbol(n) ? y.has(n) : x(n))
                            return o;
                        if (t || g(a, "get", n),
                        e)
                            return o;
                        if (pt(o)) {
                            return !r || !i.isIntegerKey(n) ? o.value : o
                        }
                        return i.isObject(o) ? t ? lt(o) : ot(o) : o
                    }
                }
                ["includes", "indexOf", "lastIndexOf"].forEach((t=>{
                    const e = Array.prototype[t];
                    O[t] = function(...t) {
                        const i = ut(this);
                        for (let t = 0, e = this.length; t < e; t++)
                            g(i, "get", t + "");
                        const a = e.apply(i, t);
                        return -1 === a || !1 === a ? e.apply(i, t.map(ut)) : a
                    }
                }
                )),
                ["push", "pop", "shift", "unshift", "splice"].forEach((t=>{
                    const e = Array.prototype[t];
                    O[t] = function(...t) {
                        f();
                        const i = e.apply(this, t);
                        return m(),
                        i
                    }
                }
                ));
                var S = I()
                  , D = I(!0);
                function I(t=!1) {
                    return function(e, a, n, s) {
                        let r = e[a];
                        if (!t && (n = ut(n),
                        r = ut(r),
                        !i.isArray(e) && pt(r) && !pt(n)))
                            return r.value = n,
                            !0;
                        const o = i.isArray(e) && i.isIntegerKey(a) ? Number(a) < e.length : i.hasOwn(e, a)
                          , l = Reflect.set(e, a, n, s);
                        return e === ut(s) && (o ? i.hasChanged(n, r) && b(e, "set", a, n, r) : b(e, "add", a, n)),
                        l
                    }
                }
                var R = {
                    get: k,
                    set: S,
                    deleteProperty: function(t, e) {
                        const a = i.hasOwn(t, e)
                          , n = t[e]
                          , s = Reflect.deleteProperty(t, e);
                        return s && a && b(t, "delete", e, void 0, n),
                        s
                    },
                    has: function(t, e) {
                        const a = Reflect.has(t, e);
                        return i.isSymbol(e) && y.has(e) || g(t, "has", e),
                        a
                    },
                    ownKeys: function(t) {
                        return g(t, "iterate", i.isArray(t) ? "length" : s),
                        Reflect.ownKeys(t)
                    }
                }
                  , L = {
                    get: w,
                    set: (t,e)=>(console.warn(`Set operation on key "${String(e)}" failed: target is readonly.`, t),
                    !0),
                    deleteProperty: (t,e)=>(console.warn(`Delete operation on key "${String(e)}" failed: target is readonly.`, t),
                    !0)
                }
                  , P = i.extend({}, R, {
                    get: _,
                    set: D
                })
                  , C = i.extend({}, L, {
                    get: v
                })
                  , A = t=>i.isObject(t) ? ot(t) : t
                  , T = t=>i.isObject(t) ? lt(t) : t
                  , E = t=>t
                  , z = t=>Reflect.getPrototypeOf(t);
                function B(t, e, i=!1, a=!1) {
                    const n = ut(t = t.__v_raw)
                      , s = ut(e);
                    e !== s && !i && g(n, "get", e),
                    !i && g(n, "get", s);
                    const {has: r} = z(n)
                      , o = a ? E : i ? T : A;
                    return r.call(n, e) ? o(t.get(e)) : r.call(n, s) ? o(t.get(s)) : void (t !== n && t.get(e))
                }
                function X(t, e=!1) {
                    const i = this.__v_raw
                      , a = ut(i)
                      , n = ut(t);
                    return t !== n && !e && g(a, "has", t),
                    !e && g(a, "has", n),
                    t === n ? i.has(t) : i.has(t) || i.has(n)
                }
                function Y(t, e=!1) {
                    return t = t.__v_raw,
                    !e && g(ut(t), "iterate", s),
                    Reflect.get(t, "size", t)
                }
                function F(t) {
                    t = ut(t);
                    const e = ut(this);
                    return z(e).has.call(e, t) || (e.add(t),
                    b(e, "add", t, t)),
                    this
                }
                function j(t, e) {
                    e = ut(e);
                    const a = ut(this)
                      , {has: n, get: s} = z(a);
                    let r = n.call(a, t);
                    r ? it(a, n, t) : (t = ut(t),
                    r = n.call(a, t));
                    const o = s.call(a, t);
                    return a.set(t, e),
                    r ? i.hasChanged(e, o) && b(a, "set", t, e, o) : b(a, "add", t, e),
                    this
                }
                function N(t) {
                    const e = ut(this)
                      , {has: i, get: a} = z(e);
                    let n = i.call(e, t);
                    n ? it(e, i, t) : (t = ut(t),
                    n = i.call(e, t));
                    const s = a ? a.call(e, t) : void 0
                      , r = e.delete(t);
                    return n && b(e, "delete", t, void 0, s),
                    r
                }
                function Z() {
                    const t = ut(this)
                      , e = 0 !== t.size
                      , a = i.isMap(t) ? new Map(t) : new Set(t)
                      , n = t.clear();
                    return e && b(t, "clear", void 0, void 0, a),
                    n
                }
                function V(t, e) {
                    return function(i, a) {
                        const n = this
                          , r = n.__v_raw
                          , o = ut(r)
                          , l = e ? E : t ? T : A;
                        return !t && g(o, "iterate", s),
                        r.forEach(((t,e)=>i.call(a, l(t), l(e), n)))
                    }
                }
                function W(t, e, a) {
                    return function(...n) {
                        const o = this.__v_raw
                          , l = ut(o)
                          , c = i.isMap(l)
                          , h = "entries" === t || t === Symbol.iterator && c
                          , d = "keys" === t && c
                          , f = o[t](...n)
                          , u = a ? E : e ? T : A;
                        return !e && g(l, "iterate", d ? r : s),
                        {
                            next() {
                                const {value: t, done: e} = f.next();
                                return e ? {
                                    value: t,
                                    done: e
                                } : {
                                    value: h ? [u(t[0]), u(t[1])] : u(t),
                                    done: e
                                }
                            },
                            [Symbol.iterator]() {
                                return this
                            }
                        }
                    }
                }
                function U(t) {
                    return function(...e) {
                        {
                            const a = e[0] ? `on key "${e[0]}" ` : "";
                            console.warn(`${i.capitalize(t)} operation ${a}failed: target is readonly.`, ut(this))
                        }
                        return "delete" !== t && this
                    }
                }
                var H = {
                    get(t) {
                        return B(this, t)
                    },
                    get size() {
                        return Y(this)
                    },
                    has: X,
                    add: F,
                    set: j,
                    delete: N,
                    clear: Z,
                    forEach: V(!1, !1)
                }
                  , $ = {
                    get(t) {
                        return B(this, t, !1, !0)
                    },
                    get size() {
                        return Y(this)
                    },
                    has: X,
                    add: F,
                    set: j,
                    delete: N,
                    clear: Z,
                    forEach: V(!1, !0)
                }
                  , q = {
                    get(t) {
                        return B(this, t, !0)
                    },
                    get size() {
                        return Y(this, !0)
                    },
                    has(t) {
                        return X.call(this, t, !0)
                    },
                    add: U("add"),
                    set: U("set"),
                    delete: U("delete"),
                    clear: U("clear"),
                    forEach: V(!0, !1)
                }
                  , K = {
                    get(t) {
                        return B(this, t, !0, !0)
                    },
                    get size() {
                        return Y(this, !0)
                    },
                    has(t) {
                        return X.call(this, t, !0)
                    },
                    add: U("add"),
                    set: U("set"),
                    delete: U("delete"),
                    clear: U("clear"),
                    forEach: V(!0, !0)
                };
                function G(t, e) {
                    const a = e ? t ? K : $ : t ? q : H;
                    return (e,n,s)=>"__v_isReactive" === n ? !t : "__v_isReadonly" === n ? t : "__v_raw" === n ? e : Reflect.get(i.hasOwn(a, n) && n in e ? a : e, n, s)
                }
                ["keys", "values", "entries", Symbol.iterator].forEach((t=>{
                    H[t] = W(t, !1, !1),
                    q[t] = W(t, !0, !1),
                    $[t] = W(t, !1, !0),
                    K[t] = W(t, !0, !0)
                }
                ));
                var J = {
                    get: G(!1, !1)
                }
                  , Q = {
                    get: G(!1, !0)
                }
                  , tt = {
                    get: G(!0, !1)
                }
                  , et = {
                    get: G(!0, !0)
                };
                function it(t, e, a) {
                    const n = ut(a);
                    if (n !== a && e.call(t, n)) {
                        const e = i.toRawType(t);
                        console.warn(`Reactive ${e} contains both the raw and reactive versions of the same object ${"Map" === e ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)
                    }
                }
                var at = new WeakMap
                  , nt = new WeakMap
                  , st = new WeakMap
                  , rt = new WeakMap;
                function ot(t) {
                    return t && t.__v_isReadonly ? t : ct(t, !1, R, J, at)
                }
                function lt(t) {
                    return ct(t, !0, L, tt, st)
                }
                function ct(t, e, a, n, s) {
                    if (!i.isObject(t))
                        return console.warn(`value cannot be made reactive: ${String(t)}`),
                        t;
                    if (t.__v_raw && (!e || !t.__v_isReactive))
                        return t;
                    const r = s.get(t);
                    if (r)
                        return r;
                    const o = (l = t).__v_skip || !Object.isExtensible(l) ? 0 : function(t) {
                        switch (t) {
                        case "Object":
                        case "Array":
                            return 1;
                        case "Map":
                        case "Set":
                        case "WeakMap":
                        case "WeakSet":
                            return 2;
                        default:
                            return 0
                        }
                    }(i.toRawType(l));
                    var l;
                    if (0 === o)
                        return t;
                    const c = new Proxy(t,2 === o ? n : a);
                    return s.set(t, c),
                    c
                }
                function ht(t) {
                    return dt(t) ? ht(t.__v_raw) : !(!t || !t.__v_isReactive)
                }
                function dt(t) {
                    return !(!t || !t.__v_isReadonly)
                }
                function ft(t) {
                    return ht(t) || dt(t)
                }
                function ut(t) {
                    return t && ut(t.__v_raw) || t
                }
                var mt = t=>i.isObject(t) ? ot(t) : t;
                function pt(t) {
                    return Boolean(t && !0 === t.__v_isRef)
                }
                var gt = class {
                    constructor(t, e=!1) {
                        this._rawValue = t,
                        this._shallow = e,
                        this.__v_isRef = !0,
                        this._value = e ? t : mt(t)
                    }
                    get value() {
                        return g(ut(this), "get", "value"),
                        this._value
                    }
                    set value(t) {
                        i.hasChanged(ut(t), this._rawValue) && (this._rawValue = t,
                        this._value = this._shallow ? t : mt(t),
                        b(ut(this), "set", "value", t))
                    }
                }
                ;
                function bt(t, e=!1) {
                    return pt(t) ? t : new gt(t,e)
                }
                function xt(t) {
                    return pt(t) ? t.value : t
                }
                var yt = {
                    get: (t,e,i)=>xt(Reflect.get(t, e, i)),
                    set: (t,e,i,a)=>{
                        const n = t[e];
                        return pt(n) && !pt(i) ? (n.value = i,
                        !0) : Reflect.set(t, e, i, a)
                    }
                };
                var kt = class {
                    constructor(t, e) {
                        this._object = t,
                        this._key = e,
                        this.__v_isRef = !0
                    }
                    get value() {
                        return this._object[this._key]
                    }
                    set value(t) {
                        this._object[this._key] = t
                    }
                }
                ;
                function _t(t, e) {
                    return pt(t[e]) ? t[e] : new kt(t,e)
                }
                t.ITERATE_KEY = s,
                t.computed = function(t) {
                    let e, a;
                    return i.isFunction(t) ? (e = t,
                    a = ()=>{
                        console.warn("Write operation failed: computed value is readonly")
                    }
                    ) : (e = t.get,
                    a = t.set),
                    new class {
                        constructor(t, e, i) {
                            this._setter = e,
                            this._dirty = !0,
                            this.__v_isRef = !0,
                            this.effect = o(t, {
                                lazy: !0,
                                scheduler: ()=>{
                                    this._dirty || (this._dirty = !0,
                                    b(ut(this), "set", "value"))
                                }
                            }),
                            this.__v_isReadonly = i
                        }
                        get value() {
                            const t = ut(this);
                            return t._dirty && (t._value = this.effect(),
                            t._dirty = !1),
                            g(t, "get", "value"),
                            t._value
                        }
                        set value(t) {
                            this._setter(t)
                        }
                    }
                    (e,a,i.isFunction(t) || !t.set)
                }
                ,
                t.customRef = function(t) {
                    return new class {
                        constructor(t) {
                            this.__v_isRef = !0;
                            const {get: e, set: i} = t((()=>g(this, "get", "value")), (()=>b(this, "set", "value")));
                            this._get = e,
                            this._set = i
                        }
                        get value() {
                            return this._get()
                        }
                        set value(t) {
                            this._set(t)
                        }
                    }
                    (t)
                }
                ,
                t.effect = o,
                t.enableTracking = u,
                t.isProxy = ft,
                t.isReactive = ht,
                t.isReadonly = dt,
                t.isRef = pt,
                t.markRaw = function(t) {
                    return i.def(t, "__v_skip", !0),
                    t
                }
                ,
                t.pauseTracking = f,
                t.proxyRefs = function(t) {
                    return ht(t) ? t : new Proxy(t,yt)
                }
                ,
                t.reactive = ot,
                t.readonly = lt,
                t.ref = function(t) {
                    return bt(t)
                }
                ,
                t.resetTracking = m,
                t.shallowReactive = function(t) {
                    return ct(t, !1, P, Q, nt)
                }
                ,
                t.shallowReadonly = function(t) {
                    return ct(t, !0, C, et, rt)
                }
                ,
                t.shallowRef = function(t) {
                    return bt(t, !0)
                }
                ,
                t.stop = function(t) {
                    t.active && (c(t),
                    t.options.onStop && t.options.onStop(),
                    t.active = !1)
                }
                ,
                t.toRaw = ut,
                t.toRef = _t,
                t.toRefs = function(t) {
                    ft(t) || console.warn("toRefs() expects a reactive object but received a plain one.");
                    const e = i.isArray(t) ? new Array(t.length) : {};
                    for (const i in t)
                        e[i] = _t(t, i);
                    return e
                }
                ,
                t.track = g,
                t.trigger = b,
                t.triggerRef = function(t) {
                    b(ut(t), "set", "value", t.value)
                }
                ,
                t.unref = xt
            }
            )), b = u(((t,e)=>{
                e.exports = g()
            }
            )), x = !1, y = !1, k = [];
            function _(t) {
                !function(t) {
                    k.includes(t) || k.push(t);
                    y || x || (x = !0,
                    queueMicrotask(w))
                }(t)
            }
            function w() {
                x = !1,
                y = !0;
                for (let t = 0; t < k.length; t++)
                    k[t]();
                k.length = 0,
                y = !1
            }
            var v = !0;
            function O(t) {
                n = t
            }
            var M = []
              , S = []
              , D = [];
            function I(t, e) {
                t._x_attributeCleanups && Object.entries(t._x_attributeCleanups).forEach((([i,a])=>{
                    (void 0 === e || e.includes(i)) && (a.forEach((t=>t())),
                    delete t._x_attributeCleanups[i])
                }
                ))
            }
            var R = new MutationObserver(X)
              , L = !1;
            function P() {
                R.observe(document, {
                    subtree: !0,
                    childList: !0,
                    attributes: !0,
                    attributeOldValue: !0
                }),
                L = !0
            }
            function C() {
                (A = A.concat(R.takeRecords())).length && !T && (T = !0,
                queueMicrotask((()=>{
                    X(A),
                    A.length = 0,
                    T = !1
                }
                ))),
                R.disconnect(),
                L = !1
            }
            var A = []
              , T = !1;
            function E(t) {
                if (!L)
                    return t();
                C();
                let e = t();
                return P(),
                e
            }
            var z = !1
              , B = [];
            function X(t) {
                if (z)
                    return void (B = B.concat(t));
                let e = []
                  , i = []
                  , a = new Map
                  , n = new Map;
                for (let s = 0; s < t.length; s++)
                    if (!t[s].target._x_ignoreMutationObserver && ("childList" === t[s].type && (t[s].addedNodes.forEach((t=>1 === t.nodeType && e.push(t))),
                    t[s].removedNodes.forEach((t=>1 === t.nodeType && i.push(t)))),
                    "attributes" === t[s].type)) {
                        let e = t[s].target
                          , i = t[s].attributeName
                          , r = t[s].oldValue
                          , o = ()=>{
                            a.has(e) || a.set(e, []),
                            a.get(e).push({
                                name: i,
                                value: e.getAttribute(i)
                            })
                        }
                          , l = ()=>{
                            n.has(e) || n.set(e, []),
                            n.get(e).push(i)
                        }
                        ;
                        e.hasAttribute(i) && null === r ? o() : e.hasAttribute(i) ? (l(),
                        o()) : l()
                    }
                n.forEach(((t,e)=>{
                    I(e, t)
                }
                )),
                a.forEach(((t,e)=>{
                    M.forEach((i=>i(e, t)))
                }
                ));
                for (let t of i)
                    e.includes(t) || S.forEach((e=>e(t)));
                e.forEach((t=>{
                    t._x_ignoreSelf = !0,
                    t._x_ignore = !0
                }
                ));
                for (let t of e)
                    i.includes(t) || t.isConnected && (delete t._x_ignoreSelf,
                    delete t._x_ignore,
                    D.forEach((e=>e(t))),
                    t._x_ignore = !0,
                    t._x_ignoreSelf = !0);
                e.forEach((t=>{
                    delete t._x_ignoreSelf,
                    delete t._x_ignore
                }
                )),
                e = null,
                i = null,
                a = null,
                n = null
            }
            function Y(t, e, i) {
                return t._x_dataStack = [e, ...j(i || t)],
                ()=>{
                    t._x_dataStack = t._x_dataStack.filter((t=>t !== e))
                }
            }
            function F(t, e) {
                let i = t._x_dataStack[0];
                Object.entries(e).forEach((([t,e])=>{
                    i[t] = e
                }
                ))
            }
            function j(t) {
                return t._x_dataStack ? t._x_dataStack : "function" == typeof ShadowRoot && t instanceof ShadowRoot ? j(t.host) : t.parentNode ? j(t.parentNode) : []
            }
            function N(t) {
                let e = new Proxy({},{
                    ownKeys: ()=>Array.from(new Set(t.flatMap((t=>Object.keys(t))))),
                    has: (e,i)=>t.some((t=>t.hasOwnProperty(i))),
                    get: (i,a)=>(t.find((t=>{
                        if (t.hasOwnProperty(a)) {
                            let i = Object.getOwnPropertyDescriptor(t, a);
                            if (i.get && i.get._x_alreadyBound || i.set && i.set._x_alreadyBound)
                                return !0;
                            if ((i.get || i.set) && i.enumerable) {
                                let n = i.get
                                  , s = i.set
                                  , r = i;
                                n = n && n.bind(e),
                                s = s && s.bind(e),
                                n && (n._x_alreadyBound = !0),
                                s && (s._x_alreadyBound = !0),
                                Object.defineProperty(t, a, {
                                    ...r,
                                    get: n,
                                    set: s
                                })
                            }
                            return !0
                        }
                        return !1
                    }
                    )) || {})[a],
                    set: (e,i,a)=>{
                        let n = t.find((t=>t.hasOwnProperty(i)));
                        return n ? n[i] = a : t[t.length - 1][i] = a,
                        !0
                    }
                });
                return e
            }
            function Z(t) {
                let e = (i,a="")=>{
                    Object.entries(Object.getOwnPropertyDescriptors(i)).forEach((([n,{value: s, enumerable: r}])=>{
                        if (!1 === r || void 0 === s)
                            return;
                        let o = "" === a ? n : `${a}.${n}`;
                        var l;
                        "object" == typeof s && null !== s && s._x_interceptor ? i[n] = s.initialize(t, o, n) : "object" != typeof (l = s) || Array.isArray(l) || null === l || s === i || s instanceof Element || e(s, o)
                    }
                    ))
                }
                ;
                return e(t)
            }
            function V(t, e=(()=>{}
            )) {
                let i = {
                    initialValue: void 0,
                    _x_interceptor: !0,
                    initialize(e, i, a) {
                        return t(this.initialValue, (()=>function(t, e) {
                            return e.split(".").reduce(((t,e)=>t[e]), t)
                        }(e, i)), (t=>W(e, i, t)), i, a)
                    }
                };
                return e(i),
                t=>{
                    if ("object" == typeof t && null !== t && t._x_interceptor) {
                        let e = i.initialize.bind(i);
                        i.initialize = (a,n,s)=>{
                            let r = t.initialize(a, n, s);
                            return i.initialValue = r,
                            e(a, n, s)
                        }
                    } else
                        i.initialValue = t;
                    return i
                }
            }
            function W(t, e, i) {
                if ("string" == typeof e && (e = e.split(".")),
                1 !== e.length) {
                    if (0 === e.length)
                        throw error;
                    return t[e[0]] || (t[e[0]] = {}),
                    W(t[e[0]], e.slice(1), i)
                }
                t[e[0]] = i
            }
            var U = {};
            function H(t, e) {
                U[t] = e
            }
            function $(t, e) {
                return Object.entries(U).forEach((([i,a])=>{
                    Object.defineProperty(t, `$ ${i}`, {
                        get: ()=>a(e, {
                            Alpine: Qt,
                            interceptor: V
                        }),
                        enumerable: !1
                    })
                }
                )),
                t
            }
            function q(t, e, i, ...a) {
                try {
                    return i(...a)
                } catch (i) {
                    K(i, t, e)
                }
            }
            function K(t, e, i=undefined) {
                Object.assign(t, {
                    el: e,
                    expression: i
                }),
                console.warn(`Alpine Expression Error: ${t.message}\n\n ${i ? 'Expression: "' + i + '"\n\n' : ""}`, e),
                setTimeout((()=>{
                    throw t
                }
                ), 0)
            }
            function G(t, e, i={}) {
                let a;
                return J(t, e)((t=>a = t), i),
                a
            }
            function J(...t) {
                return Q(...t)
            }
            var Q = tt;
            function tt(t, e) {
                let i = {};
                $(i, t);
                let a = [i, ...j(t)];
                if ("function" == typeof e)
                    return function(t, e) {
                        return (i=(()=>{}
                        ),{scope: a={}, params: n=[]}={})=>{
                            it(i, e.apply(N([a, ...t]), n))
                        }
                    }(a, e);
                let n = function(t, e, i) {
                    let a = function(t, e) {
                        if (et[t])
                            return et[t];
                        let i = Object.getPrototypeOf((async function() {}
                        )).constructor
                          , a = /^[\n\s]*if.*\(.*\)/.test(t) || /^(let|const)\s/.test(t) ? `(() => { ${t} })()` : t;
                        const n = ()=>{
                            try {
                                return new i(["__self", "scope"],`with (scope) { __self.result = ${a} }; __self.finished = true; return __self.result;`)
                            } catch (i) {
                                return K(i, e, t),
                                Promise.resolve()
                            }
                        }
                        ;
                        let s = n();
                        return et[t] = s,
                        s
                    }(e, i);
                    return (n=(()=>{}
                    ),{scope: s={}, params: r=[]}={})=>{
                        a.result = void 0,
                        a.finished = !1;
                        let o = N([s, ...t]);
                        if ("function" == typeof a) {
                            let t = a(a, o).catch((t=>K(t, i, e)));
                            a.finished ? (it(n, a.result, o, r, i),
                            a.result = void 0) : t.then((t=>{
                                it(n, t, o, r, i)
                            }
                            )).catch((t=>K(t, i, e))).finally((()=>a.result = void 0))
                        }
                    }
                }(a, e, t);
                return q.bind(null, t, e, n)
            }
            var et = {};
            function it(t, e, i, a, n) {
                if ("function" == typeof e) {
                    let s = e.apply(i, a);
                    s instanceof Promise ? s.then((e=>it(t, e, i, a))).catch((t=>K(t, n, e))) : t(s)
                } else
                    t(e)
            }
            var at = "x-";
            function nt(t="") {
                return at + t
            }
            var st = {};
            function rt(t, e) {
                st[t] = e
            }
            function ot(t, e, i) {
                let a = {}
                  , r = Array.from(e).map(ft(((t,e)=>a[t] = e))).filter(pt).map(function(t, e) {
                    return ({name: i, value: a})=>{
                        let n = i.match(gt())
                          , s = i.match(/:([a-zA-Z0-9\-:]+)/)
                          , r = i.match(/\.[^.\]]+(?=[^\]]*$)/g) || []
                          , o = e || t[i] || i;
                        return {
                            type: n ? n[1] : null,
                            value: s ? s[1] : null,
                            modifiers: r.map((t=>t.replace(".", ""))),
                            expression: a,
                            original: o
                        }
                    }
                }(a, i)).sort(yt);
                return r.map((e=>function(t, e) {
                    let i = ()=>{}
                      , a = st[e.type] || i
                      , r = []
                      , o = t=>r.push(t)
                      , [l,c] = function(t) {
                        let e = ()=>{}
                        ;
                        return [i=>{
                            let a = n(i);
                            t._x_effects || (t._x_effects = new Set,
                            t._x_runEffects = ()=>{
                                t._x_effects.forEach((t=>t()))
                            }
                            ),
                            t._x_effects.add(a),
                            e = ()=>{
                                void 0 !== a && (t._x_effects.delete(a),
                                s(a))
                            }
                        }
                        , ()=>{
                            e()
                        }
                        ]
                    }(t);
                    r.push(c);
                    let h = {
                        Alpine: Qt,
                        effect: l,
                        cleanup: o,
                        evaluateLater: J.bind(J, t),
                        evaluate: G.bind(G, t)
                    }
                      , d = ()=>r.forEach((t=>t()));
                    !function(t, e, i) {
                        t._x_attributeCleanups || (t._x_attributeCleanups = {}),
                        t._x_attributeCleanups[e] || (t._x_attributeCleanups[e] = []),
                        t._x_attributeCleanups[e].push(i)
                    }(t, e.original, d);
                    let f = ()=>{
                        t._x_ignore || t._x_ignoreSelf || (a.inline && a.inline(t, e, h),
                        a = a.bind(a, t, e, h),
                        lt ? ct.get(ht).push(a) : a())
                    }
                    ;
                    return f.runCleanups = d,
                    f
                }(t, e)))
            }
            var lt = !1
              , ct = new Map
              , ht = Symbol();
            var dt = (t,e)=>({name: i, value: a})=>(i.startsWith(t) && (i = i.replace(t, e)),
            {
                name: i,
                value: a
            });
            function ft(t=(()=>{}
            )) {
                return ({name: e, value: i})=>{
                    let {name: a, value: n} = ut.reduce(((t,e)=>e(t)), {
                        name: e,
                        value: i
                    });
                    return a !== e && t(a, e),
                    {
                        name: a,
                        value: n
                    }
                }
            }
            var ut = [];
            function mt(t) {
                ut.push(t)
            }
            function pt({name: t}) {
                return gt().test(t)
            }
            var gt = ()=>new RegExp(`^${at}([^:^.]+)\\b`);
            var bt = "DEFAULT"
              , xt = ["ignore", "ref", "data", "id", "bind", "init", "for", "model", "transition", "show", "if", bt, "teleport", "element"];
            function yt(t, e) {
                let i = -1 === xt.indexOf(t.type) ? bt : t.type
                  , a = -1 === xt.indexOf(e.type) ? bt : e.type;
                return xt.indexOf(i) - xt.indexOf(a)
            }
            function kt(t, e, i={}) {
                t.dispatchEvent(new CustomEvent(e,{
                    detail: i,
                    bubbles: !0,
                    composed: !0,
                    cancelable: !0
                }))
            }
            var _t = []
              , wt = !1;
            function vt(t) {
                _t.push(t),
                queueMicrotask((()=>{
                    wt || setTimeout((()=>{
                        Ot()
                    }
                    ))
                }
                ))
            }
            function Ot() {
                for (wt = !1; _t.length; )
                    _t.shift()()
            }
            function Mt(t, e) {
                if ("function" == typeof ShadowRoot && t instanceof ShadowRoot)
                    return void Array.from(t.children).forEach((t=>Mt(t, e)));
                let i = !1;
                if (e(t, (()=>i = !0)),
                i)
                    return;
                let a = t.firstElementChild;
                for (; a; )
                    Mt(a, e),
                    a = a.nextElementSibling
            }
            function St(t, ...e) {
                console.warn(`Alpine Warning: ${t}`, ...e)
            }
            var Dt = []
              , It = [];
            function Rt() {
                return Dt.map((t=>t()))
            }
            function Lt() {
                return Dt.concat(It).map((t=>t()))
            }
            function Pt(t) {
                Dt.push(t)
            }
            function Ct(t) {
                It.push(t)
            }
            function At(t, e=!1) {
                return Tt(t, (t=>{
                    if ((e ? Lt() : Rt()).some((e=>t.matches(e))))
                        return !0
                }
                ))
            }
            function Tt(t, e) {
                if (t) {
                    if (e(t))
                        return t;
                    if (t._x_teleportBack && (t = t._x_teleportBack),
                    t.parentElement)
                        return Tt(t.parentElement, e)
                }
            }
            function Et(t, e=Mt) {
                !function(t) {
                    lt = !0;
                    let e = Symbol();
                    ht = e,
                    ct.set(e, []);
                    let i = ()=>{
                        for (; ct.get(e).length; )
                            ct.get(e).shift()();
                        ct.delete(e)
                    }
                    ;
                    t(i),
                    lt = !1,
                    i()
                }((()=>{
                    e(t, ((t,e)=>{
                        ot(t, t.attributes).forEach((t=>t())),
                        t._x_ignore && e()
                    }
                    ))
                }
                ))
            }
            function zt(t, e) {
                return Array.isArray(e) ? Bt(t, e.join(" ")) : "object" == typeof e && null !== e ? function(t, e) {
                    let i = t=>t.split(" ").filter(Boolean)
                      , a = Object.entries(e).flatMap((([t,e])=>!!e && i(t))).filter(Boolean)
                      , n = Object.entries(e).flatMap((([t,e])=>!e && i(t))).filter(Boolean)
                      , s = []
                      , r = [];
                    return n.forEach((e=>{
                        t.classList.contains(e) && (t.classList.remove(e),
                        r.push(e))
                    }
                    )),
                    a.forEach((e=>{
                        t.classList.contains(e) || (t.classList.add(e),
                        s.push(e))
                    }
                    )),
                    ()=>{
                        r.forEach((e=>t.classList.add(e))),
                        s.forEach((e=>t.classList.remove(e)))
                    }
                }(t, e) : "function" == typeof e ? zt(t, e()) : Bt(t, e)
            }
            function Bt(t, e) {
                return e = !0 === e ? e = "" : e || "",
                i = e.split(" ").filter((e=>!t.classList.contains(e))).filter(Boolean),
                t.classList.add(...i),
                ()=>{
                    t.classList.remove(...i)
                }
                ;
                var i
            }
            function Xt(t, e) {
                return "object" == typeof e && null !== e ? function(t, e) {
                    let i = {};
                    return Object.entries(e).forEach((([e,a])=>{
                        i[e] = t.style[e],
                        t.style.setProperty(e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), a)
                    }
                    )),
                    setTimeout((()=>{
                        0 === t.style.length && t.removeAttribute("style")
                    }
                    )),
                    ()=>{
                        Xt(t, i)
                    }
                }(t, e) : function(t, e) {
                    let i = t.getAttribute("style", e);
                    return t.setAttribute("style", e),
                    ()=>{
                        t.setAttribute("style", i)
                    }
                }(t, e)
            }
            function Yt(t, e=(()=>{}
            )) {
                let i = !1;
                return function() {
                    i ? e.apply(this, arguments) : (i = !0,
                    t.apply(this, arguments))
                }
            }
            function Ft(t, e, i={}) {
                t._x_transition || (t._x_transition = {
                    enter: {
                        during: i,
                        start: i,
                        end: i
                    },
                    leave: {
                        during: i,
                        start: i,
                        end: i
                    },
                    in(i=(()=>{}
                    ), a=(()=>{}
                    )) {
                        Nt(t, e, {
                            during: this.enter.during,
                            start: this.enter.start,
                            end: this.enter.end
                        }, i, a)
                    },
                    out(i=(()=>{}
                    ), a=(()=>{}
                    )) {
                        Nt(t, e, {
                            during: this.leave.during,
                            start: this.leave.start,
                            end: this.leave.end
                        }, i, a)
                    }
                })
            }
            function jt(t) {
                let e = t.parentNode;
                if (e)
                    return e._x_hidePromise ? e : jt(e)
            }
            function Nt(t, e, {during: i, start: a, end: n}={}, s=(()=>{}
            ), r=(()=>{}
            )) {
                if (t._x_transitioning && t._x_transitioning.cancel(),
                0 === Object.keys(i).length && 0 === Object.keys(a).length && 0 === Object.keys(n).length)
                    return s(),
                    void r();
                let o, l, c;
                !function(t, e) {
                    let i, a, n, s = Yt((()=>{
                        E((()=>{
                            i = !0,
                            a || e.before(),
                            n || (e.end(),
                            Ot()),
                            e.after(),
                            t.isConnected && e.cleanup(),
                            delete t._x_transitioning
                        }
                        ))
                    }
                    ));
                    t._x_transitioning = {
                        beforeCancels: [],
                        beforeCancel(t) {
                            this.beforeCancels.push(t)
                        },
                        cancel: Yt((function() {
                            for (; this.beforeCancels.length; )
                                this.beforeCancels.shift()();
                            s()
                        }
                        )),
                        finish: s
                    },
                    E((()=>{
                        e.start(),
                        e.during()
                    }
                    )),
                    wt = !0,
                    requestAnimationFrame((()=>{
                        if (i)
                            return;
                        let s = 1e3 * Number(getComputedStyle(t).transitionDuration.replace(/,.*/, "").replace("s", ""))
                          , r = 1e3 * Number(getComputedStyle(t).transitionDelay.replace(/,.*/, "").replace("s", ""));
                        0 === s && (s = 1e3 * Number(getComputedStyle(t).animationDuration.replace("s", ""))),
                        E((()=>{
                            e.before()
                        }
                        )),
                        a = !0,
                        requestAnimationFrame((()=>{
                            i || (E((()=>{
                                e.end()
                            }
                            )),
                            Ot(),
                            setTimeout(t._x_transitioning.finish, s + r),
                            n = !0)
                        }
                        ))
                    }
                    ))
                }(t, {
                    start() {
                        o = e(t, a)
                    },
                    during() {
                        l = e(t, i)
                    },
                    before: s,
                    end() {
                        o(),
                        c = e(t, n)
                    },
                    after: r,
                    cleanup() {
                        l(),
                        c()
                    }
                })
            }
            function Zt(t, e, i) {
                if (-1 === t.indexOf(e))
                    return i;
                const a = t[t.indexOf(e) + 1];
                if (!a)
                    return i;
                if ("scale" === e && isNaN(a))
                    return i;
                if ("duration" === e) {
                    let t = a.match(/([0-9]+)ms/);
                    if (t)
                        return t[1]
                }
                return "origin" === e && ["top", "right", "left", "center", "bottom"].includes(t[t.indexOf(e) + 2]) ? [a, t[t.indexOf(e) + 2]].join(" ") : a
            }
            rt("transition", ((t,{value: e, modifiers: i, expression: a},{evaluate: n})=>{
                "function" == typeof a && (a = n(a)),
                a ? function(t, e, i) {
                    Ft(t, zt, "");
                    let a = {
                        enter: e=>{
                            t._x_transition.enter.during = e
                        }
                        ,
                        "enter-start": e=>{
                            t._x_transition.enter.start = e
                        }
                        ,
                        "enter-end": e=>{
                            t._x_transition.enter.end = e
                        }
                        ,
                        leave: e=>{
                            t._x_transition.leave.during = e
                        }
                        ,
                        "leave-start": e=>{
                            t._x_transition.leave.start = e
                        }
                        ,
                        "leave-end": e=>{
                            t._x_transition.leave.end = e
                        }
                    };
                    a[i](e)
                }(t, a, e) : function(t, e, i) {
                    Ft(t, Xt);
                    let a = !e.includes("in") && !e.includes("out") && !i
                      , n = a || e.includes("in") || ["enter"].includes(i)
                      , s = a || e.includes("out") || ["leave"].includes(i);
                    e.includes("in") && !a && (e = e.filter(((t,i)=>i < e.indexOf("out"))));
                    e.includes("out") && !a && (e = e.filter(((t,i)=>i > e.indexOf("out"))));
                    let r = !e.includes("opacity") && !e.includes("scale")
                      , o = r || e.includes("opacity")
                      , l = r || e.includes("scale")
                      , c = o ? 0 : 1
                      , h = l ? Zt(e, "scale", 95) / 100 : 1
                      , d = Zt(e, "delay", 0)
                      , f = Zt(e, "origin", "center")
                      , u = "opacity, transform"
                      , m = Zt(e, "duration", 150) / 1e3
                      , p = Zt(e, "duration", 75) / 1e3
                      , g = "cubic-bezier(0.4, 0.0, 0.2, 1)";
                    n && (t._x_transition.enter.during = {
                        transformOrigin: f,
                        transitionDelay: d,
                        transitionProperty: u,
                        transitionDuration: `${m}s`,
                        transitionTimingFunction: g
                    },
                    t._x_transition.enter.start = {
                        opacity: c,
                        transform: `scale(${h})`
                    },
                    t._x_transition.enter.end = {
                        opacity: 1,
                        transform: "scale(1)"
                    });
                    s && (t._x_transition.leave.during = {
                        transformOrigin: f,
                        transitionDelay: d,
                        transitionProperty: u,
                        transitionDuration: `${p}s`,
                        transitionTimingFunction: g
                    },
                    t._x_transition.leave.start = {
                        opacity: 1,
                        transform: "scale(1)"
                    },
                    t._x_transition.leave.end = {
                        opacity: c,
                        transform: `scale(${h})`
                    })
                }(t, i, e)
            }
            )),
            window.Element.prototype._x_toggleAndCascadeWithTransitions = function(t, e, i, a) {
                let n = ()=>{
                    "visible" === document.visibilityState ? requestAnimationFrame(i) : setTimeout(i)
                }
                ;
                e ? t._x_transition && (t._x_transition.enter || t._x_transition.leave) ? t._x_transition.enter && (Object.entries(t._x_transition.enter.during).length || Object.entries(t._x_transition.enter.start).length || Object.entries(t._x_transition.enter.end).length) ? t._x_transition.in(i) : n() : t._x_transition ? t._x_transition.in(i) : n() : (t._x_hidePromise = t._x_transition ? new Promise(((e,i)=>{
                    t._x_transition.out((()=>{}
                    ), (()=>e(a))),
                    t._x_transitioning.beforeCancel((()=>i({
                        isFromCancelledTransition: !0
                    })))
                }
                )) : Promise.resolve(a),
                queueMicrotask((()=>{
                    let e = jt(t);
                    e ? (e._x_hideChildren || (e._x_hideChildren = []),
                    e._x_hideChildren.push(t)) : queueMicrotask((()=>{
                        let e = t=>{
                            let i = Promise.all([t._x_hidePromise, ...(t._x_hideChildren || []).map(e)]).then((([t])=>t()));
                            return delete t._x_hidePromise,
                            delete t._x_hideChildren,
                            i
                        }
                        ;
                        e(t).catch((t=>{
                            if (!t.isFromCancelledTransition)
                                throw t
                        }
                        ))
                    }
                    ))
                }
                )))
            }
            ;
            var Vt = !1;
            function Wt(t, e=(()=>{}
            )) {
                return (...i)=>Vt ? e(...i) : t(...i)
            }
            function Ut(t, e) {
                var i;
                return function() {
                    var a = this
                      , n = arguments;
                    clearTimeout(i),
                    i = setTimeout((function() {
                        i = null,
                        t.apply(a, n)
                    }
                    ), e)
                }
            }
            function Ht(t, e) {
                let i;
                return function() {
                    let a = this
                      , n = arguments;
                    i || (t.apply(a, n),
                    i = !0,
                    setTimeout((()=>i = !1), e))
                }
            }
            var $t = {}
              , qt = !1;
            var Kt = {};
            var Gt, Jt, Qt = {
                get reactive() {
                    return a
                },
                get release() {
                    return s
                },
                get effect() {
                    return n
                },
                get raw() {
                    return r
                },
                version: "3.7.0",
                flushAndStopDeferringMutations: function() {
                    z = !1,
                    X(B),
                    B = []
                },
                disableEffectScheduling: function(t) {
                    v = !1,
                    t(),
                    v = !0
                },
                setReactivityEngine: function(t) {
                    a = t.reactive,
                    s = t.release,
                    n = e=>t.effect(e, {
                        scheduler: t=>{
                            v ? _(t) : t()
                        }
                    }),
                    r = t.raw
                },
                closestDataStack: j,
                skipDuringClone: Wt,
                addRootSelector: Pt,
                addInitSelector: Ct,
                addScopeToNode: Y,
                deferMutations: function() {
                    z = !0
                },
                mapAttributes: mt,
                evaluateLater: J,
                setEvaluator: function(t) {
                    Q = t
                },
                mergeProxies: N,
                closestRoot: At,
                interceptor: V,
                transition: Nt,
                setStyles: Xt,
                mutateDom: E,
                directive: rt,
                throttle: Ht,
                debounce: Ut,
                evaluate: G,
                initTree: Et,
                nextTick: vt,
                prefixed: nt,
                prefix: function(t) {
                    at = t
                },
                plugin: function(t) {
                    t(Qt)
                },
                magic: H,
                store: function(t, e) {
                    if (qt || ($t = a($t),
                    qt = !0),
                    void 0 === e)
                        return $t[t];
                    $t[t] = e,
                    "object" == typeof e && null !== e && e.hasOwnProperty("init") && "function" == typeof e.init && $t[t].init(),
                    Z($t[t])
                },
                start: function() {
                    var t;
                    document.body || St("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),
                    kt(document, "alpine:init"),
                    kt(document, "alpine:initializing"),
                    P(),
                    t = t=>Et(t, Mt),
                    D.push(t),
                    function(t) {
                        S.push(t)
                    }((t=>{
                        Mt(t, (t=>I(t)))
                    }
                    )),
                    function(t) {
                        M.push(t)
                    }(((t,e)=>{
                        ot(t, e).forEach((t=>t()))
                    }
                    )),
                    Array.from(document.querySelectorAll(Lt())).filter((t=>!At(t.parentElement, !0))).forEach((t=>{
                        Et(t)
                    }
                    )),
                    kt(document, "alpine:initialized")
                },
                clone: function(t, e) {
                    e._x_dataStack || (e._x_dataStack = t._x_dataStack),
                    Vt = !0,
                    function(t) {
                        let e = n;
                        O(((t,i)=>{
                            let a = e(t);
                            return s(a),
                            ()=>{}
                        }
                        )),
                        t(),
                        O(e)
                    }((()=>{
                        !function(t) {
                            let e = !1;
                            Et(t, ((t,i)=>{
                                Mt(t, ((t,a)=>{
                                    if (e && function(t) {
                                        return Rt().some((e=>t.matches(e)))
                                    }(t))
                                        return a();
                                    e = !0,
                                    i(t, a)
                                }
                                ))
                            }
                            ))
                        }(e)
                    }
                    )),
                    Vt = !1
                },
                data: function(t, e) {
                    Kt[t] = e
                }
            }, te = (Gt = b(),
            ((t,e,i)=>{
                if (e && "object" == typeof e || "function" == typeof e)
                    for (let a of d(e))
                        h.call(t, a) || "default" === a || l(t, a, {
                            get: ()=>e[a],
                            enumerable: !(i = f(e, a)) || i.enumerable
                        });
                return t
            }
            )((Jt = l(null != Gt ? o(c(Gt)) : {}, "default", Gt && Gt.__esModule && "default"in Gt ? {
                get: ()=>Gt.default,
                enumerable: !0
            } : {
                value: Gt,
                enumerable: !0
            }),
            l(Jt, "__esModule", {
                value: !0
            })), Gt));
            H("nextTick", (()=>vt)),
            H("dispatch", (t=>kt.bind(kt, t))),
            H("watch", (t=>(e,i)=>{
                let a, s = J(t, e), r = !0;
                n((()=>s((t=>{
                    document.createElement("div").dataset.throwAway = t,
                    r ? a = t : queueMicrotask((()=>{
                        i(t, a),
                        a = t
                    }
                    )),
                    r = !1
                }
                ))))
            }
            )),
            H("store", (function() {
                return $t
            }
            )),
            H("data", (t=>N(j(t)))),
            H("root", (t=>At(t))),
            H("refs", (t=>(t._x_refs_proxy || (t._x_refs_proxy = N(function(t) {
                let e = []
                  , i = t;
                for (; i; )
                    i._x_refs && e.push(i._x_refs),
                    i = i.parentNode;
                return e
            }(t))),
            t._x_refs_proxy)));
            var ee = {};
            function ie(t) {
                return ee[t] || (ee[t] = 0),
                ++ee[t]
            }
            H("id", (t=>(e,i=null)=>{
                let a = function(t, e) {
                    return Tt(t, (t=>{
                        if (t._x_ids && t._x_ids[e])
                            return !0
                    }
                    ))
                }(t, e)
                  , n = a ? a._x_ids[e] : ie(e);
                return new ae(i ? `${e}-${n}-${i}` : `${e}-${n}`)
            }
            ));
            var ae = class {
                constructor(t) {
                    this.id = t
                }
                toString() {
                    return this.id
                }
            }
            ;
            H("el", (t=>t)),
            rt("teleport", ((t,{expression: e},{cleanup: i})=>{
                let a = document.querySelector(e)
                  , n = t.content.cloneNode(!0).firstElementChild;
                t._x_teleport = n,
                n._x_teleportBack = t,
                t._x_forwardEvents && t._x_forwardEvents.forEach((e=>{
                    n.addEventListener(e, (e=>{
                        e.stopPropagation(),
                        t.dispatchEvent(new e.constructor(e.type,e))
                    }
                    ))
                }
                )),
                Y(n, {}, t),
                E((()=>{
                    a.appendChild(n),
                    Et(n),
                    n._x_ignore = !0
                }
                )),
                i((()=>n.remove()))
            }
            ));
            var ne = ()=>{}
            ;
            function se(t, e, i, n=[]) {
                switch (t._x_bindings || (t._x_bindings = a({})),
                t._x_bindings[e] = i,
                e = n.includes("camel") ? e.toLowerCase().replace(/-(\w)/g, ((t,e)=>e.toUpperCase())) : e) {
                case "value":
                    !function(t, e) {
                        if ("radio" === t.type)
                            void 0 === t.attributes.value && (t.value = e),
                            window.fromModel && (t.checked = re(t.value, e));
                        else if ("checkbox" === t.type)
                            Number.isInteger(e) ? t.value = e : Number.isInteger(e) || Array.isArray(e) || "boolean" == typeof e || [null, void 0].includes(e) ? Array.isArray(e) ? t.checked = e.some((e=>re(e, t.value))) : t.checked = !!e : t.value = String(e);
                        else if ("SELECT" === t.tagName)
                            !function(t, e) {
                                const i = [].concat(e).map((t=>t + ""));
                                Array.from(t.options).forEach((t=>{
                                    t.selected = i.includes(t.value)
                                }
                                ))
                            }(t, e);
                        else {
                            if (t.value === e)
                                return;
                            t.value = e
                        }
                    }(t, i);
                    break;
                case "style":
                    !function(t, e) {
                        t._x_undoAddedStyles && t._x_undoAddedStyles();
                        t._x_undoAddedStyles = Xt(t, e)
                    }(t, i);
                    break;
                case "class":
                    !function(t, e) {
                        t._x_undoAddedClasses && t._x_undoAddedClasses();
                        t._x_undoAddedClasses = zt(t, e)
                    }(t, i);
                    break;
                default:
                    !function(t, e, i) {
                        [null, void 0, !1].includes(i) && function(t) {
                            return !["aria-pressed", "aria-checked", "aria-expanded"].includes(t)
                        }(e) ? t.removeAttribute(e) : (["disabled", "checked", "required", "readonly", "hidden", "open", "selected", "autofocus", "itemscope", "multiple", "novalidate", "allowfullscreen", "allowpaymentrequest", "formnovalidate", "autoplay", "controls", "loop", "muted", "playsinline", "default", "ismap", "reversed", "async", "defer", "nomodule"].includes(e) && (i = e),
                        function(t, e, i) {
                            t.getAttribute(e) != i && t.setAttribute(e, i)
                        }(t, e, i))
                    }(t, e, i)
                }
            }
            function re(t, e) {
                return t == e
            }
            function oe(t, e, i, a) {
                let n = t
                  , s = t=>a(t)
                  , r = {}
                  , o = (t,e)=>i=>e(t, i);
                if (i.includes("dot") && (e = e.replace(/-/g, ".")),
                i.includes("camel") && (e = function(t) {
                    return t.toLowerCase().replace(/-(\w)/g, ((t,e)=>e.toUpperCase()))
                }(e)),
                i.includes("passive") && (r.passive = !0),
                i.includes("capture") && (r.capture = !0),
                i.includes("window") && (n = window),
                i.includes("document") && (n = document),
                i.includes("prevent") && (s = o(s, ((t,e)=>{
                    e.preventDefault(),
                    t(e)
                }
                ))),
                i.includes("stop") && (s = o(s, ((t,e)=>{
                    e.stopPropagation(),
                    t(e)
                }
                ))),
                i.includes("self") && (s = o(s, ((e,i)=>{
                    i.target === t && e(i)
                }
                ))),
                (i.includes("away") || i.includes("outside")) && (n = document,
                s = o(s, ((e,i)=>{
                    t.contains(i.target) || t.offsetWidth < 1 && t.offsetHeight < 1 || !1 !== t._x_isShown && e(i)
                }
                ))),
                s = o(s, ((t,a)=>{
                    (function(t) {
                        return ["keydown", "keyup"].includes(t)
                    }
                    )(e) && function(t, e) {
                        let i = e.filter((t=>!["window", "document", "prevent", "stop", "once"].includes(t)));
                        if (i.includes("debounce")) {
                            let t = i.indexOf("debounce");
                            i.splice(t, le((i[t + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1)
                        }
                        if (0 === i.length)
                            return !1;
                        if (1 === i.length && ce(t.key).includes(i[0]))
                            return !1;
                        const a = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter((t=>i.includes(t)));
                        if (i = i.filter((t=>!a.includes(t))),
                        a.length > 0) {
                            if (a.filter((e=>("cmd" !== e && "super" !== e || (e = "meta"),
                            t[`${e}Key`]))).length === a.length && ce(t.key).includes(i[0]))
                                return !1
                        }
                        return !0
                    }(a, i) || t(a)
                }
                )),
                i.includes("debounce")) {
                    let t = i[i.indexOf("debounce") + 1] || "invalid-wait"
                      , e = le(t.split("ms")[0]) ? Number(t.split("ms")[0]) : 250;
                    s = Ut(s, e)
                }
                if (i.includes("throttle")) {
                    let t = i[i.indexOf("throttle") + 1] || "invalid-wait"
                      , e = le(t.split("ms")[0]) ? Number(t.split("ms")[0]) : 250;
                    s = Ht(s, e)
                }
                return i.includes("once") && (s = o(s, ((t,i)=>{
                    t(i),
                    n.removeEventListener(e, s, r)
                }
                ))),
                n.addEventListener(e, s, r),
                ()=>{
                    n.removeEventListener(e, s, r)
                }
            }
            function le(t) {
                return !Array.isArray(t) && !isNaN(t)
            }
            function ce(t) {
                if (!t)
                    return [];
                t = t.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
                let e = {
                    ctrl: "control",
                    slash: "/",
                    space: "-",
                    spacebar: "-",
                    cmd: "meta",
                    esc: "escape",
                    up: "arrow-up",
                    down: "arrow-down",
                    left: "arrow-left",
                    right: "arrow-right",
                    period: ".",
                    equal: "="
                };
                return e[t] = t,
                Object.keys(e).map((i=>{
                    if (e[i] === t)
                        return i
                }
                )).filter((t=>t))
            }
            function he(t) {
                let e = t ? parseFloat(t) : null;
                return i = e,
                Array.isArray(i) || isNaN(i) ? t : e;
                var i
            }
            function de(t, e, i, a) {
                let n = {};
                if (/^\[.*\]$/.test(t.item) && Array.isArray(e)) {
                    t.item.replace("[", "").replace("]", "").split(",").map((t=>t.trim())).forEach(((t,i)=>{
                        n[t] = e[i]
                    }
                    ))
                } else if (/^\{.*\}$/.test(t.item) && !Array.isArray(e) && "object" == typeof e) {
                    t.item.replace("{", "").replace("}", "").split(",").map((t=>t.trim())).forEach((t=>{
                        n[t] = e[t]
                    }
                    ))
                } else
                    n[t.item] = e;
                return t.index && (n[t.index] = i),
                t.collection && (n[t.collection] = a),
                n
            }
            function fe() {}
            ne.inline = (t,{modifiers: e},{cleanup: i})=>{
                e.includes("self") ? t._x_ignoreSelf = !0 : t._x_ignore = !0,
                i((()=>{
                    e.includes("self") ? delete t._x_ignoreSelf : delete t._x_ignore
                }
                ))
            }
            ,
            rt("ignore", ne),
            rt("effect", ((t,{expression: e},{effect: i})=>i(J(t, e)))),
            rt("model", ((t,{modifiers: e, expression: i},{effect: a, cleanup: n})=>{
                let s = J(t, i)
                  , r = J(t, `${i} = rightSideOfExpression($event, ${i})`);
                var o = "select" === t.tagName.toLowerCase() || ["checkbox", "radio"].includes(t.type) || e.includes("lazy") ? "change" : "input";
                let l = function(t, e, i) {
                    "radio" === t.type && E((()=>{
                        t.hasAttribute("name") || t.setAttribute("name", i)
                    }
                    ));
                    return (i,a)=>E((()=>{
                        if (i instanceof CustomEvent && void 0 !== i.detail)
                            return i.detail || i.target.value;
                        if ("checkbox" === t.type) {
                            if (Array.isArray(a)) {
                                let t = e.includes("number") ? he(i.target.value) : i.target.value;
                                return i.target.checked ? a.concat([t]) : a.filter((e=>!(e == t)))
                            }
                            return i.target.checked
                        }
                        if ("select" === t.tagName.toLowerCase() && t.multiple)
                            return e.includes("number") ? Array.from(i.target.selectedOptions).map((t=>he(t.value || t.text))) : Array.from(i.target.selectedOptions).map((t=>t.value || t.text));
                        {
                            let t = i.target.value;
                            return e.includes("number") ? he(t) : e.includes("trim") ? t.trim() : t
                        }
                    }
                    ))
                }(t, e, i)
                  , c = oe(t, o, e, (t=>{
                    r((()=>{}
                    ), {
                        scope: {
                            $event: t,
                            rightSideOfExpression: l
                        }
                    })
                }
                ));
                n((()=>c()));
                let h = J(t, `${i} = __placeholder`);
                t._x_model = {
                    get() {
                        let t;
                        return s((e=>t = e)),
                        t
                    },
                    set(t) {
                        h((()=>{}
                        ), {
                            scope: {
                                __placeholder: t
                            }
                        })
                    }
                },
                t._x_forceModelUpdate = ()=>{
                    s((e=>{
                        void 0 === e && i.match(/\./) && (e = ""),
                        window.fromModel = !0,
                        E((()=>se(t, "value", e))),
                        delete window.fromModel
                    }
                    ))
                }
                ,
                a((()=>{
                    e.includes("unintrusive") && document.activeElement.isSameNode(t) || t._x_forceModelUpdate()
                }
                ))
            }
            )),
            rt("cloak", (t=>queueMicrotask((()=>E((()=>t.removeAttribute(nt("cloak")))))))),
            Ct((()=>`[${nt("init")}]`)),
            rt("init", Wt(((t,{expression: e})=>"string" == typeof e ? !!e.trim() && G(t, e, {}) : G(t, e, {})))),
            rt("text", ((t,{expression: e},{effect: i, evaluateLater: a})=>{
                let n = a(e);
                i((()=>{
                    n((e=>{
                        E((()=>{
                            t.textContent = e
                        }
                        ))
                    }
                    ))
                }
                ))
            }
            )),
            rt("html", ((t,{expression: e},{effect: i, evaluateLater: a})=>{
                let n = a(e);
                i((()=>{
                    n((e=>{
                        t.innerHTML = e
                    }
                    ))
                }
                ))
            }
            )),
            mt(dt(":", nt("bind:"))),
            rt("bind", ((t,{value: e, modifiers: i, expression: a, original: n},{effect: s})=>{
                if (!e)
                    return function(t, e, i, a) {
                        let n = J(t, e)
                          , s = [];
                        a((()=>{
                            for (; s.length; )
                                s.pop()();
                            n((e=>{
                                let a = Object.entries(e).map((([t,e])=>({
                                    name: t,
                                    value: e
                                })));
                                a = a.filter((t=>!("object" == typeof t.value && !Array.isArray(t.value) && null !== t.value)));
                                let n = function(t) {
                                    return Array.from(t).map(ft()).filter((t=>!pt(t)))
                                }(a);
                                a = a.map((t=>n.find((e=>e.name === t.name)) ? {
                                    name: `x-bind:${t.name}`,
                                    value: `"${t.value}"`
                                } : t)),
                                ot(t, a, i).map((t=>{
                                    s.push(t.runCleanups),
                                    t()
                                }
                                ))
                            }
                            ))
                        }
                        ))
                    }(t, a, n, s);
                if ("key" === e)
                    return function(t, e) {
                        t._x_keyExpression = e
                    }(t, a);
                let r = J(t, a);
                s((()=>r((n=>{
                    void 0 === n && a.match(/\./) && (n = ""),
                    E((()=>se(t, e, n, i)))
                }
                ))))
            }
            )),
            Pt((()=>`[${nt("data")}]`)),
            rt("data", Wt(((t,{expression: e},{cleanup: i})=>{
                e = "" === e ? "{}" : e;
                let n = {};
                $(n, t);
                let s = {};
                var r, o;
                r = s,
                o = n,
                Object.entries(Kt).forEach((([t,e])=>{
                    Object.defineProperty(r, t, {
                        get: ()=>(...t)=>e.bind(o)(...t),
                        enumerable: !1
                    })
                }
                ));
                let l = G(t, e, {
                    scope: s
                });
                void 0 === l && (l = {}),
                $(l, t);
                let c = a(l);
                Z(c);
                let h = Y(t, c);
                c.init && G(t, c.init),
                i((()=>{
                    h(),
                    c.destroy && G(t, c.destroy)
                }
                ))
            }
            ))),
            rt("show", ((t,{modifiers: e, expression: i},{effect: a})=>{
                let n, s = J(t, i), r = ()=>E((()=>{
                    t.style.display = "none",
                    t._x_isShown = !1
                }
                )), o = ()=>E((()=>{
                    1 === t.style.length && "none" === t.style.display ? t.removeAttribute("style") : t.style.removeProperty("display"),
                    t._x_isShown = !0
                }
                )), l = ()=>setTimeout(o), c = Yt((t=>t ? o() : r()), (e=>{
                    "function" == typeof t._x_toggleAndCascadeWithTransitions ? t._x_toggleAndCascadeWithTransitions(t, e, o, r) : e ? l() : r()
                }
                )), h = !0;
                a((()=>s((t=>{
                    (h || t !== n) && (e.includes("immediate") && (t ? l() : r()),
                    c(t),
                    n = t,
                    h = !1)
                }
                ))))
            }
            )),
            rt("for", ((t,{expression: e},{effect: i, cleanup: n})=>{
                let s = function(t) {
                    let e = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/
                      , i = /^\s*\(|\)\s*$/g
                      , a = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/
                      , n = t.match(a);
                    if (!n)
                        return;
                    let s = {};
                    s.items = n[2].trim();
                    let r = n[1].replace(i, "").trim()
                      , o = r.match(e);
                    o ? (s.item = r.replace(e, "").trim(),
                    s.index = o[1].trim(),
                    o[2] && (s.collection = o[2].trim())) : s.item = r;
                    return s
                }(e)
                  , r = J(t, s.items)
                  , o = J(t, t._x_keyExpression || "index");
                t._x_prevKeys = [],
                t._x_lookup = {},
                i((()=>function(t, e, i, n) {
                    let s = t=>"object" == typeof t && !Array.isArray(t)
                      , r = t;
                    i((i=>{
                        var o;
                        o = i,
                        !Array.isArray(o) && !isNaN(o) && i >= 0 && (i = Array.from(Array(i).keys(), (t=>t + 1))),
                        void 0 === i && (i = []);
                        let l = t._x_lookup
                          , c = t._x_prevKeys
                          , h = []
                          , d = [];
                        if (s(i))
                            i = Object.entries(i).map((([t,a])=>{
                                let s = de(e, a, t, i);
                                n((t=>d.push(t)), {
                                    scope: {
                                        index: t,
                                        ...s
                                    }
                                }),
                                h.push(s)
                            }
                            ));
                        else
                            for (let t = 0; t < i.length; t++) {
                                let a = de(e, i[t], t, i);
                                n((t=>d.push(t)), {
                                    scope: {
                                        index: t,
                                        ...a
                                    }
                                }),
                                h.push(a)
                            }
                        let f = []
                          , u = []
                          , m = []
                          , p = [];
                        for (let t = 0; t < c.length; t++) {
                            let e = c[t];
                            -1 === d.indexOf(e) && m.push(e)
                        }
                        c = c.filter((t=>!m.includes(t)));
                        let g = "template";
                        for (let t = 0; t < d.length; t++) {
                            let e = d[t]
                              , i = c.indexOf(e);
                            if (-1 === i)
                                c.splice(t, 0, e),
                                f.push([g, t]);
                            else if (i !== t) {
                                let e = c.splice(t, 1)[0]
                                  , a = c.splice(i - 1, 1)[0];
                                c.splice(t, 0, a),
                                c.splice(i, 0, e),
                                u.push([e, a])
                            } else
                                p.push(e);
                            g = e
                        }
                        for (let t = 0; t < m.length; t++) {
                            let e = m[t];
                            l[e].remove(),
                            l[e] = null,
                            delete l[e]
                        }
                        for (let t = 0; t < u.length; t++) {
                            let[e,i] = u[t]
                              , a = l[e]
                              , n = l[i]
                              , s = document.createElement("div");
                            E((()=>{
                                n.after(s),
                                a.after(n),
                                n._x_currentIfEl && n.after(n._x_currentIfEl),
                                s.before(a),
                                a._x_currentIfEl && a.after(a._x_currentIfEl),
                                s.remove()
                            }
                            )),
                            F(n, h[d.indexOf(i)])
                        }
                        for (let t = 0; t < f.length; t++) {
                            let[e,i] = f[t]
                              , n = "template" === e ? r : l[e];
                            n._x_currentIfEl && (n = n._x_currentIfEl);
                            let s = h[i]
                              , o = d[i]
                              , c = document.importNode(r.content, !0).firstElementChild;
                            Y(c, a(s), r),
                            E((()=>{
                                n.after(c),
                                Et(c)
                            }
                            )),
                            "object" == typeof o && St("x-for key cannot be an object, it must be a string or an integer", r),
                            l[o] = c
                        }
                        for (let t = 0; t < p.length; t++)
                            F(l[p[t]], h[d.indexOf(p[t])]);
                        r._x_prevKeys = d
                    }
                    ))
                }(t, s, r, o))),
                n((()=>{
                    Object.values(t._x_lookup).forEach((t=>t.remove())),
                    delete t._x_prevKeys,
                    delete t._x_lookup
                }
                ))
            }
            )),
            fe.inline = (t,{expression: e},{cleanup: i})=>{
                let a = At(t);
                a._x_refs || (a._x_refs = {}),
                a._x_refs[e] = t,
                i((()=>delete a._x_refs[e]))
            }
            ,
            rt("ref", fe),
            rt("if", ((t,{expression: e},{effect: i, cleanup: a})=>{
                let n = J(t, e);
                i((()=>n((e=>{
                    e ? (()=>{
                        if (t._x_currentIfEl)
                            return t._x_currentIfEl;
                        let e = t.content.cloneNode(!0).firstElementChild;
                        Y(e, {}, t),
                        E((()=>{
                            t.after(e),
                            Et(e)
                        }
                        )),
                        t._x_currentIfEl = e,
                        t._x_undoIf = ()=>{
                            e.remove(),
                            delete t._x_currentIfEl
                        }
                    }
                    )() : t._x_undoIf && (t._x_undoIf(),
                    delete t._x_undoIf)
                }
                )))),
                a((()=>t._x_undoIf && t._x_undoIf()))
            }
            )),
            rt("id", ((t,{expression: e},{evaluate: i})=>{
                i(e).forEach((e=>function(t, e) {
                    t._x_ids || (t._x_ids = {}),
                    t._x_ids[e] || (t._x_ids[e] = ie(e))
                }(t, e)))
            }
            )),
            mt(dt("@", nt("on:"))),
            rt("on", Wt(((t,{value: e, modifiers: i, expression: a},{cleanup: n})=>{
                let s = a ? J(t, a) : ()=>{}
                ;
                "template" === t.tagName.toLowerCase() && (t._x_forwardEvents || (t._x_forwardEvents = []),
                t._x_forwardEvents.includes(e) || t._x_forwardEvents.push(e));
                let r = oe(t, e, i, (t=>{
                    s((()=>{}
                    ), {
                        scope: {
                            $event: t
                        },
                        params: [t]
                    })
                }
                ));
                n((()=>r()))
            }
            ))),
            Qt.setEvaluator(tt),
            Qt.setReactivityEngine({
                reactive: te.reactive,
                effect: te.effect,
                release: te.stop,
                raw: te.toRaw
            });
            var ue = Qt
              , me = i(446)
              , pe = i.n(me)
              , ge = i(495)
              , be = {
                insert: "head",
                singleton: !1
            };
            pe()(ge.Z, be);
            ge.Z.locals;
            window.Alpine = ue,
            ue.start()
        }
        ,
        495: (t,e,i)=>{
            i.d(e, {
                Z: ()=>s
            });
            var a = i(519)
              , n = i.n(a)()((function(t) {
                return t[1]
            }
            ));
            n.push([t.id, "/*!\n * animate.css - https://animate.style/\n * Version - 4.1.1\n * Licensed under the MIT license - http://opensource.org/licenses/MIT\n *\n * Copyright (c) 2020 Animate.css\n */:root{--animate-duration:1s;--animate-delay:1s;--animate-repeat:1}.animate__animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-duration:var(--animate-duration);animation-duration:var(--animate-duration);-webkit-animation-fill-mode:both;animation-fill-mode:both}.animate__animated.animate__infinite{-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.animate__animated.animate__repeat-1{-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-iteration-count:var(--animate-repeat);animation-iteration-count:var(--animate-repeat)}.animate__animated.animate__repeat-2{-webkit-animation-iteration-count:2;animation-iteration-count:2;-webkit-animation-iteration-count:calc(var(--animate-repeat)*2);animation-iteration-count:calc(var(--animate-repeat)*2)}.animate__animated.animate__repeat-3{-webkit-animation-iteration-count:3;animation-iteration-count:3;-webkit-animation-iteration-count:calc(var(--animate-repeat)*3);animation-iteration-count:calc(var(--animate-repeat)*3)}.animate__animated.animate__delay-1s{-webkit-animation-delay:1s;animation-delay:1s;-webkit-animation-delay:var(--animate-delay);animation-delay:var(--animate-delay)}.animate__animated.animate__delay-2s{-webkit-animation-delay:2s;animation-delay:2s;-webkit-animation-delay:calc(var(--animate-delay)*2);animation-delay:calc(var(--animate-delay)*2)}.animate__animated.animate__delay-3s{-webkit-animation-delay:3s;animation-delay:3s;-webkit-animation-delay:calc(var(--animate-delay)*3);animation-delay:calc(var(--animate-delay)*3)}.animate__animated.animate__delay-4s{-webkit-animation-delay:4s;animation-delay:4s;-webkit-animation-delay:calc(var(--animate-delay)*4);animation-delay:calc(var(--animate-delay)*4)}.animate__animated.animate__delay-5s{-webkit-animation-delay:5s;animation-delay:5s;-webkit-animation-delay:calc(var(--animate-delay)*5);animation-delay:calc(var(--animate-delay)*5)}.animate__animated.animate__faster{-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-duration:calc(var(--animate-duration)/2);animation-duration:calc(var(--animate-duration)/2)}.animate__animated.animate__fast{-webkit-animation-duration:.8s;animation-duration:.8s;-webkit-animation-duration:calc(var(--animate-duration)*.8);animation-duration:calc(var(--animate-duration)*.8)}.animate__animated.animate__slow{-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-duration:calc(var(--animate-duration)*2);animation-duration:calc(var(--animate-duration)*2)}.animate__animated.animate__slower{-webkit-animation-duration:3s;animation-duration:3s;-webkit-animation-duration:calc(var(--animate-duration)*3);animation-duration:calc(var(--animate-duration)*3)}@media (prefers-reduced-motion:reduce),print{.animate__animated{-webkit-animation-duration:1ms!important;animation-duration:1ms!important;-webkit-animation-iteration-count:1!important;animation-iteration-count:1!important;-webkit-transition-duration:1ms!important;transition-duration:1ms!important}.animate__animated[class*=Out]{opacity:0}}@-webkit-keyframes bounce{0%,20%,53%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1);-webkit-transform:translateZ(0);transform:translateZ(0)}40%,43%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-30px,0) scaleY(1.1);transform:translate3d(0,-30px,0) scaleY(1.1)}70%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-15px,0) scaleY(1.05);transform:translate3d(0,-15px,0) scaleY(1.05)}80%{-webkit-transform:translateZ(0) scaleY(.95);transform:translateZ(0) scaleY(.95);-webkit-transition-timing-function:cubic-bezier(.215,.61,.355,1);transition-timing-function:cubic-bezier(.215,.61,.355,1)}90%{-webkit-transform:translate3d(0,-4px,0) scaleY(1.02);transform:translate3d(0,-4px,0) scaleY(1.02)}}@keyframes bounce{0%,20%,53%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1);-webkit-transform:translateZ(0);transform:translateZ(0)}40%,43%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-30px,0) scaleY(1.1);transform:translate3d(0,-30px,0) scaleY(1.1)}70%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-15px,0) scaleY(1.05);transform:translate3d(0,-15px,0) scaleY(1.05)}80%{-webkit-transform:translateZ(0) scaleY(.95);transform:translateZ(0) scaleY(.95);-webkit-transition-timing-function:cubic-bezier(.215,.61,.355,1);transition-timing-function:cubic-bezier(.215,.61,.355,1)}90%{-webkit-transform:translate3d(0,-4px,0) scaleY(1.02);transform:translate3d(0,-4px,0) scaleY(1.02)}}.animate__bounce{-webkit-animation-name:bounce;animation-name:bounce;-webkit-transform-origin:center bottom;transform-origin:center bottom}@-webkit-keyframes flash{0%,50%,to{opacity:1}25%,75%{opacity:0}}@keyframes flash{0%,50%,to{opacity:1}25%,75%{opacity:0}}.animate__flash{-webkit-animation-name:flash;animation-name:flash}@-webkit-keyframes pulse{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}50%{-webkit-transform:scale3d(1.05,1.05,1.05);transform:scale3d(1.05,1.05,1.05)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes pulse{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}50%{-webkit-transform:scale3d(1.05,1.05,1.05);transform:scale3d(1.05,1.05,1.05)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.animate__pulse{-webkit-animation-name:pulse;animation-name:pulse;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}@-webkit-keyframes rubberBand{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}30%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}40%{-webkit-transform:scale3d(.75,1.25,1);transform:scale3d(.75,1.25,1)}50%{-webkit-transform:scale3d(1.15,.85,1);transform:scale3d(1.15,.85,1)}65%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}75%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes rubberBand{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}30%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}40%{-webkit-transform:scale3d(.75,1.25,1);transform:scale3d(.75,1.25,1)}50%{-webkit-transform:scale3d(1.15,.85,1);transform:scale3d(1.15,.85,1)}65%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}75%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.animate__rubberBand{-webkit-animation-name:rubberBand;animation-name:rubberBand}@-webkit-keyframes shakeX{0%,to{-webkit-transform:translateZ(0);transform:translateZ(0)}10%,30%,50%,70%,90%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}20%,40%,60%,80%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}}@keyframes shakeX{0%,to{-webkit-transform:translateZ(0);transform:translateZ(0)}10%,30%,50%,70%,90%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}20%,40%,60%,80%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}}.animate__shakeX{-webkit-animation-name:shakeX;animation-name:shakeX}@-webkit-keyframes shakeY{0%,to{-webkit-transform:translateZ(0);transform:translateZ(0)}10%,30%,50%,70%,90%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}20%,40%,60%,80%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}}@keyframes shakeY{0%,to{-webkit-transform:translateZ(0);transform:translateZ(0)}10%,30%,50%,70%,90%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}20%,40%,60%,80%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}}.animate__shakeY{-webkit-animation-name:shakeY;animation-name:shakeY}@-webkit-keyframes headShake{0%{-webkit-transform:translateX(0);transform:translateX(0)}6.5%{-webkit-transform:translateX(-6px) rotateY(-9deg);transform:translateX(-6px) rotateY(-9deg)}18.5%{-webkit-transform:translateX(5px) rotateY(7deg);transform:translateX(5px) rotateY(7deg)}31.5%{-webkit-transform:translateX(-3px) rotateY(-5deg);transform:translateX(-3px) rotateY(-5deg)}43.5%{-webkit-transform:translateX(2px) rotateY(3deg);transform:translateX(2px) rotateY(3deg)}50%{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes headShake{0%{-webkit-transform:translateX(0);transform:translateX(0)}6.5%{-webkit-transform:translateX(-6px) rotateY(-9deg);transform:translateX(-6px) rotateY(-9deg)}18.5%{-webkit-transform:translateX(5px) rotateY(7deg);transform:translateX(5px) rotateY(7deg)}31.5%{-webkit-transform:translateX(-3px) rotateY(-5deg);transform:translateX(-3px) rotateY(-5deg)}43.5%{-webkit-transform:translateX(2px) rotateY(3deg);transform:translateX(2px) rotateY(3deg)}50%{-webkit-transform:translateX(0);transform:translateX(0)}}.animate__headShake{-webkit-animation-name:headShake;animation-name:headShake;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}@-webkit-keyframes swing{20%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}40%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}60%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}80%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@keyframes swing{20%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}40%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}60%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}80%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}.animate__swing{-webkit-animation-name:swing;animation-name:swing;-webkit-transform-origin:top center;transform-origin:top center}@-webkit-keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.9,.9,.9) rotate(-3deg);transform:scale3d(.9,.9,.9) rotate(-3deg)}30%,50%,70%,90%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate(3deg);transform:scale3d(1.1,1.1,1.1) rotate(3deg)}40%,60%,80%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate(-3deg);transform:scale3d(1.1,1.1,1.1) rotate(-3deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.9,.9,.9) rotate(-3deg);transform:scale3d(.9,.9,.9) rotate(-3deg)}30%,50%,70%,90%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate(3deg);transform:scale3d(1.1,1.1,1.1) rotate(3deg)}40%,60%,80%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate(-3deg);transform:scale3d(1.1,1.1,1.1) rotate(-3deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.animate__tada{-webkit-animation-name:tada;animation-name:tada}@-webkit-keyframes wobble{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-25%,0,0) rotate(-5deg);transform:translate3d(-25%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(20%,0,0) rotate(3deg);transform:translate3d(20%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-15%,0,0) rotate(-3deg);transform:translate3d(-15%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(10%,0,0) rotate(2deg);transform:translate3d(10%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-5%,0,0) rotate(-1deg);transform:translate3d(-5%,0,0) rotate(-1deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes wobble{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-25%,0,0) rotate(-5deg);transform:translate3d(-25%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(20%,0,0) rotate(3deg);transform:translate3d(20%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-15%,0,0) rotate(-3deg);transform:translate3d(-15%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(10%,0,0) rotate(2deg);transform:translate3d(10%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-5%,0,0) rotate(-1deg);transform:translate3d(-5%,0,0) rotate(-1deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__wobble{-webkit-animation-name:wobble;animation-name:wobble}@-webkit-keyframes jello{0%,11.1%,to{-webkit-transform:translateZ(0);transform:translateZ(0)}22.2%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-webkit-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-webkit-transform:skewX(.390625deg) skewY(.390625deg);transform:skewX(.390625deg) skewY(.390625deg)}88.8%{-webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}@keyframes jello{0%,11.1%,to{-webkit-transform:translateZ(0);transform:translateZ(0)}22.2%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-webkit-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-webkit-transform:skewX(.390625deg) skewY(.390625deg);transform:skewX(.390625deg) skewY(.390625deg)}88.8%{-webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}.animate__jello{-webkit-animation-name:jello;animation-name:jello;-webkit-transform-origin:center;transform-origin:center}@-webkit-keyframes heartBeat{0%{-webkit-transform:scale(1);transform:scale(1)}14%{-webkit-transform:scale(1.3);transform:scale(1.3)}28%{-webkit-transform:scale(1);transform:scale(1)}42%{-webkit-transform:scale(1.3);transform:scale(1.3)}70%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes heartBeat{0%{-webkit-transform:scale(1);transform:scale(1)}14%{-webkit-transform:scale(1.3);transform:scale(1.3)}28%{-webkit-transform:scale(1);transform:scale(1)}42%{-webkit-transform:scale(1.3);transform:scale(1.3)}70%{-webkit-transform:scale(1);transform:scale(1)}}.animate__heartBeat{-webkit-animation-duration:1.3s;animation-duration:1.3s;-webkit-animation-duration:calc(var(--animate-duration)*1.3);animation-duration:calc(var(--animate-duration)*1.3);-webkit-animation-name:heartBeat;animation-name:heartBeat;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}@-webkit-keyframes backInDown{0%{opacity:.7;-webkit-transform:translateY(-1200px) scale(.7);transform:translateY(-1200px) scale(.7)}80%{opacity:.7;-webkit-transform:translateY(0) scale(.7);transform:translateY(0) scale(.7)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes backInDown{0%{opacity:.7;-webkit-transform:translateY(-1200px) scale(.7);transform:translateY(-1200px) scale(.7)}80%{opacity:.7;-webkit-transform:translateY(0) scale(.7);transform:translateY(0) scale(.7)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}.animate__backInDown{-webkit-animation-name:backInDown;animation-name:backInDown}@-webkit-keyframes backInLeft{0%{opacity:.7;-webkit-transform:translateX(-2000px) scale(.7);transform:translateX(-2000px) scale(.7)}80%{opacity:.7;-webkit-transform:translateX(0) scale(.7);transform:translateX(0) scale(.7)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes backInLeft{0%{opacity:.7;-webkit-transform:translateX(-2000px) scale(.7);transform:translateX(-2000px) scale(.7)}80%{opacity:.7;-webkit-transform:translateX(0) scale(.7);transform:translateX(0) scale(.7)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}.animate__backInLeft{-webkit-animation-name:backInLeft;animation-name:backInLeft}@-webkit-keyframes backInRight{0%{opacity:.7;-webkit-transform:translateX(2000px) scale(.7);transform:translateX(2000px) scale(.7)}80%{opacity:.7;-webkit-transform:translateX(0) scale(.7);transform:translateX(0) scale(.7)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes backInRight{0%{opacity:.7;-webkit-transform:translateX(2000px) scale(.7);transform:translateX(2000px) scale(.7)}80%{opacity:.7;-webkit-transform:translateX(0) scale(.7);transform:translateX(0) scale(.7)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}.animate__backInRight{-webkit-animation-name:backInRight;animation-name:backInRight}@-webkit-keyframes backInUp{0%{opacity:.7;-webkit-transform:translateY(1200px) scale(.7);transform:translateY(1200px) scale(.7)}80%{opacity:.7;-webkit-transform:translateY(0) scale(.7);transform:translateY(0) scale(.7)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes backInUp{0%{opacity:.7;-webkit-transform:translateY(1200px) scale(.7);transform:translateY(1200px) scale(.7)}80%{opacity:.7;-webkit-transform:translateY(0) scale(.7);transform:translateY(0) scale(.7)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}.animate__backInUp{-webkit-animation-name:backInUp;animation-name:backInUp}@-webkit-keyframes backOutDown{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}20%{opacity:.7;-webkit-transform:translateY(0) scale(.7);transform:translateY(0) scale(.7)}to{opacity:.7;-webkit-transform:translateY(700px) scale(.7);transform:translateY(700px) scale(.7)}}@keyframes backOutDown{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}20%{opacity:.7;-webkit-transform:translateY(0) scale(.7);transform:translateY(0) scale(.7)}to{opacity:.7;-webkit-transform:translateY(700px) scale(.7);transform:translateY(700px) scale(.7)}}.animate__backOutDown{-webkit-animation-name:backOutDown;animation-name:backOutDown}@-webkit-keyframes backOutLeft{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}20%{opacity:.7;-webkit-transform:translateX(0) scale(.7);transform:translateX(0) scale(.7)}to{opacity:.7;-webkit-transform:translateX(-2000px) scale(.7);transform:translateX(-2000px) scale(.7)}}@keyframes backOutLeft{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}20%{opacity:.7;-webkit-transform:translateX(0) scale(.7);transform:translateX(0) scale(.7)}to{opacity:.7;-webkit-transform:translateX(-2000px) scale(.7);transform:translateX(-2000px) scale(.7)}}.animate__backOutLeft{-webkit-animation-name:backOutLeft;animation-name:backOutLeft}@-webkit-keyframes backOutRight{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}20%{opacity:.7;-webkit-transform:translateX(0) scale(.7);transform:translateX(0) scale(.7)}to{opacity:.7;-webkit-transform:translateX(2000px) scale(.7);transform:translateX(2000px) scale(.7)}}@keyframes backOutRight{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}20%{opacity:.7;-webkit-transform:translateX(0) scale(.7);transform:translateX(0) scale(.7)}to{opacity:.7;-webkit-transform:translateX(2000px) scale(.7);transform:translateX(2000px) scale(.7)}}.animate__backOutRight{-webkit-animation-name:backOutRight;animation-name:backOutRight}@-webkit-keyframes backOutUp{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}20%{opacity:.7;-webkit-transform:translateY(0) scale(.7);transform:translateY(0) scale(.7)}to{opacity:.7;-webkit-transform:translateY(-700px) scale(.7);transform:translateY(-700px) scale(.7)}}@keyframes backOutUp{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}20%{opacity:.7;-webkit-transform:translateY(0) scale(.7);transform:translateY(0) scale(.7)}to{opacity:.7;-webkit-transform:translateY(-700px) scale(.7);transform:translateY(-700px) scale(.7)}}.animate__backOutUp{-webkit-animation-name:backOutUp;animation-name:backOutUp}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}.animate__bounceIn{-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-duration:calc(var(--animate-duration)*.75);animation-duration:calc(var(--animate-duration)*.75);-webkit-animation-name:bounceIn;animation-name:bounceIn}@-webkit-keyframes bounceInDown{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(0,-3000px,0) scaleY(3);transform:translate3d(0,-3000px,0) scaleY(3)}60%{opacity:1;-webkit-transform:translate3d(0,25px,0) scaleY(.9);transform:translate3d(0,25px,0) scaleY(.9)}75%{-webkit-transform:translate3d(0,-10px,0) scaleY(.95);transform:translate3d(0,-10px,0) scaleY(.95)}90%{-webkit-transform:translate3d(0,5px,0) scaleY(.985);transform:translate3d(0,5px,0) scaleY(.985)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes bounceInDown{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(0,-3000px,0) scaleY(3);transform:translate3d(0,-3000px,0) scaleY(3)}60%{opacity:1;-webkit-transform:translate3d(0,25px,0) scaleY(.9);transform:translate3d(0,25px,0) scaleY(.9)}75%{-webkit-transform:translate3d(0,-10px,0) scaleY(.95);transform:translate3d(0,-10px,0) scaleY(.95)}90%{-webkit-transform:translate3d(0,5px,0) scaleY(.985);transform:translate3d(0,5px,0) scaleY(.985)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__bounceInDown{-webkit-animation-name:bounceInDown;animation-name:bounceInDown}@-webkit-keyframes bounceInLeft{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(-3000px,0,0) scaleX(3);transform:translate3d(-3000px,0,0) scaleX(3)}60%{opacity:1;-webkit-transform:translate3d(25px,0,0) scaleX(1);transform:translate3d(25px,0,0) scaleX(1)}75%{-webkit-transform:translate3d(-10px,0,0) scaleX(.98);transform:translate3d(-10px,0,0) scaleX(.98)}90%{-webkit-transform:translate3d(5px,0,0) scaleX(.995);transform:translate3d(5px,0,0) scaleX(.995)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes bounceInLeft{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(-3000px,0,0) scaleX(3);transform:translate3d(-3000px,0,0) scaleX(3)}60%{opacity:1;-webkit-transform:translate3d(25px,0,0) scaleX(1);transform:translate3d(25px,0,0) scaleX(1)}75%{-webkit-transform:translate3d(-10px,0,0) scaleX(.98);transform:translate3d(-10px,0,0) scaleX(.98)}90%{-webkit-transform:translate3d(5px,0,0) scaleX(.995);transform:translate3d(5px,0,0) scaleX(.995)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__bounceInLeft{-webkit-animation-name:bounceInLeft;animation-name:bounceInLeft}@-webkit-keyframes bounceInRight{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(3000px,0,0) scaleX(3);transform:translate3d(3000px,0,0) scaleX(3)}60%{opacity:1;-webkit-transform:translate3d(-25px,0,0) scaleX(1);transform:translate3d(-25px,0,0) scaleX(1)}75%{-webkit-transform:translate3d(10px,0,0) scaleX(.98);transform:translate3d(10px,0,0) scaleX(.98)}90%{-webkit-transform:translate3d(-5px,0,0) scaleX(.995);transform:translate3d(-5px,0,0) scaleX(.995)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes bounceInRight{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(3000px,0,0) scaleX(3);transform:translate3d(3000px,0,0) scaleX(3)}60%{opacity:1;-webkit-transform:translate3d(-25px,0,0) scaleX(1);transform:translate3d(-25px,0,0) scaleX(1)}75%{-webkit-transform:translate3d(10px,0,0) scaleX(.98);transform:translate3d(10px,0,0) scaleX(.98)}90%{-webkit-transform:translate3d(-5px,0,0) scaleX(.995);transform:translate3d(-5px,0,0) scaleX(.995)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__bounceInRight{-webkit-animation-name:bounceInRight;animation-name:bounceInRight}@-webkit-keyframes bounceInUp{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(0,3000px,0) scaleY(5);transform:translate3d(0,3000px,0) scaleY(5)}60%{opacity:1;-webkit-transform:translate3d(0,-20px,0) scaleY(.9);transform:translate3d(0,-20px,0) scaleY(.9)}75%{-webkit-transform:translate3d(0,10px,0) scaleY(.95);transform:translate3d(0,10px,0) scaleY(.95)}90%{-webkit-transform:translate3d(0,-5px,0) scaleY(.985);transform:translate3d(0,-5px,0) scaleY(.985)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes bounceInUp{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(0,3000px,0) scaleY(5);transform:translate3d(0,3000px,0) scaleY(5)}60%{opacity:1;-webkit-transform:translate3d(0,-20px,0) scaleY(.9);transform:translate3d(0,-20px,0) scaleY(.9)}75%{-webkit-transform:translate3d(0,10px,0) scaleY(.95);transform:translate3d(0,10px,0) scaleY(.95)}90%{-webkit-transform:translate3d(0,-5px,0) scaleY(.985);transform:translate3d(0,-5px,0) scaleY(.985)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__bounceInUp{-webkit-animation-name:bounceInUp;animation-name:bounceInUp}@-webkit-keyframes bounceOut{20%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}50%,55%{opacity:1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}to{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}}@keyframes bounceOut{20%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}50%,55%{opacity:1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}to{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}}.animate__bounceOut{-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-duration:calc(var(--animate-duration)*.75);animation-duration:calc(var(--animate-duration)*.75);-webkit-animation-name:bounceOut;animation-name:bounceOut}@-webkit-keyframes bounceOutDown{20%{-webkit-transform:translate3d(0,10px,0) scaleY(.985);transform:translate3d(0,10px,0) scaleY(.985)}40%,45%{opacity:1;-webkit-transform:translate3d(0,-20px,0) scaleY(.9);transform:translate3d(0,-20px,0) scaleY(.9)}to{opacity:0;-webkit-transform:translate3d(0,2000px,0) scaleY(3);transform:translate3d(0,2000px,0) scaleY(3)}}@keyframes bounceOutDown{20%{-webkit-transform:translate3d(0,10px,0) scaleY(.985);transform:translate3d(0,10px,0) scaleY(.985)}40%,45%{opacity:1;-webkit-transform:translate3d(0,-20px,0) scaleY(.9);transform:translate3d(0,-20px,0) scaleY(.9)}to{opacity:0;-webkit-transform:translate3d(0,2000px,0) scaleY(3);transform:translate3d(0,2000px,0) scaleY(3)}}.animate__bounceOutDown{-webkit-animation-name:bounceOutDown;animation-name:bounceOutDown}@-webkit-keyframes bounceOutLeft{20%{opacity:1;-webkit-transform:translate3d(20px,0,0) scaleX(.9);transform:translate3d(20px,0,0) scaleX(.9)}to{opacity:0;-webkit-transform:translate3d(-2000px,0,0) scaleX(2);transform:translate3d(-2000px,0,0) scaleX(2)}}@keyframes bounceOutLeft{20%{opacity:1;-webkit-transform:translate3d(20px,0,0) scaleX(.9);transform:translate3d(20px,0,0) scaleX(.9)}to{opacity:0;-webkit-transform:translate3d(-2000px,0,0) scaleX(2);transform:translate3d(-2000px,0,0) scaleX(2)}}.animate__bounceOutLeft{-webkit-animation-name:bounceOutLeft;animation-name:bounceOutLeft}@-webkit-keyframes bounceOutRight{20%{opacity:1;-webkit-transform:translate3d(-20px,0,0) scaleX(.9);transform:translate3d(-20px,0,0) scaleX(.9)}to{opacity:0;-webkit-transform:translate3d(2000px,0,0) scaleX(2);transform:translate3d(2000px,0,0) scaleX(2)}}@keyframes bounceOutRight{20%{opacity:1;-webkit-transform:translate3d(-20px,0,0) scaleX(.9);transform:translate3d(-20px,0,0) scaleX(.9)}to{opacity:0;-webkit-transform:translate3d(2000px,0,0) scaleX(2);transform:translate3d(2000px,0,0) scaleX(2)}}.animate__bounceOutRight{-webkit-animation-name:bounceOutRight;animation-name:bounceOutRight}@-webkit-keyframes bounceOutUp{20%{-webkit-transform:translate3d(0,-10px,0) scaleY(.985);transform:translate3d(0,-10px,0) scaleY(.985)}40%,45%{opacity:1;-webkit-transform:translate3d(0,20px,0) scaleY(.9);transform:translate3d(0,20px,0) scaleY(.9)}to{opacity:0;-webkit-transform:translate3d(0,-2000px,0) scaleY(3);transform:translate3d(0,-2000px,0) scaleY(3)}}@keyframes bounceOutUp{20%{-webkit-transform:translate3d(0,-10px,0) scaleY(.985);transform:translate3d(0,-10px,0) scaleY(.985)}40%,45%{opacity:1;-webkit-transform:translate3d(0,20px,0) scaleY(.9);transform:translate3d(0,20px,0) scaleY(.9)}to{opacity:0;-webkit-transform:translate3d(0,-2000px,0) scaleY(3);transform:translate3d(0,-2000px,0) scaleY(3)}}.animate__bounceOutUp{-webkit-animation-name:bounceOutUp;animation-name:bounceOutUp}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.animate__fadeIn{-webkit-animation-name:fadeIn;animation-name:fadeIn}@-webkit-keyframes fadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__fadeInDown{-webkit-animation-name:fadeInDown;animation-name:fadeInDown}@-webkit-keyframes fadeInDownBig{0%{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInDownBig{0%{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__fadeInDownBig{-webkit-animation-name:fadeInDownBig;animation-name:fadeInDownBig}@-webkit-keyframes fadeInLeft{0%{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInLeft{0%{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__fadeInLeft{-webkit-animation-name:fadeInLeft;animation-name:fadeInLeft}@-webkit-keyframes fadeInLeftBig{0%{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInLeftBig{0%{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__fadeInLeftBig{-webkit-animation-name:fadeInLeftBig;animation-name:fadeInLeftBig}@-webkit-keyframes fadeInRight{0%{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInRight{0%{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__fadeInRight{-webkit-animation-name:fadeInRight;animation-name:fadeInRight}@-webkit-keyframes fadeInRightBig{0%{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInRightBig{0%{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__fadeInRightBig{-webkit-animation-name:fadeInRightBig;animation-name:fadeInRightBig}@-webkit-keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__fadeInUp{-webkit-animation-name:fadeInUp;animation-name:fadeInUp}@-webkit-keyframes fadeInUpBig{0%{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInUpBig{0%{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__fadeInUpBig{-webkit-animation-name:fadeInUpBig;animation-name:fadeInUpBig}@-webkit-keyframes fadeInTopLeft{0%{opacity:0;-webkit-transform:translate3d(-100%,-100%,0);transform:translate3d(-100%,-100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInTopLeft{0%{opacity:0;-webkit-transform:translate3d(-100%,-100%,0);transform:translate3d(-100%,-100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__fadeInTopLeft{-webkit-animation-name:fadeInTopLeft;animation-name:fadeInTopLeft}@-webkit-keyframes fadeInTopRight{0%{opacity:0;-webkit-transform:translate3d(100%,-100%,0);transform:translate3d(100%,-100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInTopRight{0%{opacity:0;-webkit-transform:translate3d(100%,-100%,0);transform:translate3d(100%,-100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__fadeInTopRight{-webkit-animation-name:fadeInTopRight;animation-name:fadeInTopRight}@-webkit-keyframes fadeInBottomLeft{0%{opacity:0;-webkit-transform:translate3d(-100%,100%,0);transform:translate3d(-100%,100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInBottomLeft{0%{opacity:0;-webkit-transform:translate3d(-100%,100%,0);transform:translate3d(-100%,100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__fadeInBottomLeft{-webkit-animation-name:fadeInBottomLeft;animation-name:fadeInBottomLeft}@-webkit-keyframes fadeInBottomRight{0%{opacity:0;-webkit-transform:translate3d(100%,100%,0);transform:translate3d(100%,100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInBottomRight{0%{opacity:0;-webkit-transform:translate3d(100%,100%,0);transform:translate3d(100%,100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__fadeInBottomRight{-webkit-animation-name:fadeInBottomRight;animation-name:fadeInBottomRight}@-webkit-keyframes fadeOut{0%{opacity:1}to{opacity:0}}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}.animate__fadeOut{-webkit-animation-name:fadeOut;animation-name:fadeOut}@-webkit-keyframes fadeOutDown{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@keyframes fadeOutDown{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}.animate__fadeOutDown{-webkit-animation-name:fadeOutDown;animation-name:fadeOutDown}@-webkit-keyframes fadeOutDownBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}}@keyframes fadeOutDownBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}}.animate__fadeOutDownBig{-webkit-animation-name:fadeOutDownBig;animation-name:fadeOutDownBig}@-webkit-keyframes fadeOutLeft{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes fadeOutLeft{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}.animate__fadeOutLeft{-webkit-animation-name:fadeOutLeft;animation-name:fadeOutLeft}@-webkit-keyframes fadeOutLeftBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}}@keyframes fadeOutLeftBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}}.animate__fadeOutLeftBig{-webkit-animation-name:fadeOutLeftBig;animation-name:fadeOutLeftBig}@-webkit-keyframes fadeOutRight{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@keyframes fadeOutRight{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}.animate__fadeOutRight{-webkit-animation-name:fadeOutRight;animation-name:fadeOutRight}@-webkit-keyframes fadeOutRightBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}}@keyframes fadeOutRightBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}}.animate__fadeOutRightBig{-webkit-animation-name:fadeOutRightBig;animation-name:fadeOutRightBig}@-webkit-keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}.animate__fadeOutUp{-webkit-animation-name:fadeOutUp;animation-name:fadeOutUp}@-webkit-keyframes fadeOutUpBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}}@keyframes fadeOutUpBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}}.animate__fadeOutUpBig{-webkit-animation-name:fadeOutUpBig;animation-name:fadeOutUpBig}@-webkit-keyframes fadeOutTopLeft{0%{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}to{opacity:0;-webkit-transform:translate3d(-100%,-100%,0);transform:translate3d(-100%,-100%,0)}}@keyframes fadeOutTopLeft{0%{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}to{opacity:0;-webkit-transform:translate3d(-100%,-100%,0);transform:translate3d(-100%,-100%,0)}}.animate__fadeOutTopLeft{-webkit-animation-name:fadeOutTopLeft;animation-name:fadeOutTopLeft}@-webkit-keyframes fadeOutTopRight{0%{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}to{opacity:0;-webkit-transform:translate3d(100%,-100%,0);transform:translate3d(100%,-100%,0)}}@keyframes fadeOutTopRight{0%{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}to{opacity:0;-webkit-transform:translate3d(100%,-100%,0);transform:translate3d(100%,-100%,0)}}.animate__fadeOutTopRight{-webkit-animation-name:fadeOutTopRight;animation-name:fadeOutTopRight}@-webkit-keyframes fadeOutBottomRight{0%{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}to{opacity:0;-webkit-transform:translate3d(100%,100%,0);transform:translate3d(100%,100%,0)}}@keyframes fadeOutBottomRight{0%{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}to{opacity:0;-webkit-transform:translate3d(100%,100%,0);transform:translate3d(100%,100%,0)}}.animate__fadeOutBottomRight{-webkit-animation-name:fadeOutBottomRight;animation-name:fadeOutBottomRight}@-webkit-keyframes fadeOutBottomLeft{0%{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}to{opacity:0;-webkit-transform:translate3d(-100%,100%,0);transform:translate3d(-100%,100%,0)}}@keyframes fadeOutBottomLeft{0%{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}to{opacity:0;-webkit-transform:translate3d(-100%,100%,0);transform:translate3d(-100%,100%,0)}}.animate__fadeOutBottomLeft{-webkit-animation-name:fadeOutBottomLeft;animation-name:fadeOutBottomLeft}@-webkit-keyframes flip{0%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-transform:perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn);transform:perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn)}40%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-transform:perspective(400px) scaleX(1) translateZ(150px) rotateY(-190deg);transform:perspective(400px) scaleX(1) translateZ(150px) rotateY(-190deg)}50%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:perspective(400px) scaleX(1) translateZ(150px) rotateY(-170deg);transform:perspective(400px) scaleX(1) translateZ(150px) rotateY(-170deg)}80%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:perspective(400px) scale3d(.95,.95,.95) translateZ(0) rotateY(0deg);transform:perspective(400px) scale3d(.95,.95,.95) translateZ(0) rotateY(0deg)}to{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:perspective(400px) scaleX(1) translateZ(0) rotateY(0deg);transform:perspective(400px) scaleX(1) translateZ(0) rotateY(0deg)}}@keyframes flip{0%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-transform:perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn);transform:perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn)}40%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-transform:perspective(400px) scaleX(1) translateZ(150px) rotateY(-190deg);transform:perspective(400px) scaleX(1) translateZ(150px) rotateY(-190deg)}50%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:perspective(400px) scaleX(1) translateZ(150px) rotateY(-170deg);transform:perspective(400px) scaleX(1) translateZ(150px) rotateY(-170deg)}80%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:perspective(400px) scale3d(.95,.95,.95) translateZ(0) rotateY(0deg);transform:perspective(400px) scale3d(.95,.95,.95) translateZ(0) rotateY(0deg)}to{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:perspective(400px) scaleX(1) translateZ(0) rotateY(0deg);transform:perspective(400px) scaleX(1) translateZ(0) rotateY(0deg)}}.animate__animated.animate__flip{-webkit-animation-name:flip;animation-name:flip;-webkit-backface-visibility:visible;backface-visibility:visible}@-webkit-keyframes flipInX{0%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0;-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg)}40%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg)}60%{opacity:1;-webkit-transform:perspective(400px) rotateX(10deg);transform:perspective(400px) rotateX(10deg)}80%{-webkit-transform:perspective(400px) rotateX(-5deg);transform:perspective(400px) rotateX(-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}@keyframes flipInX{0%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0;-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg)}40%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg)}60%{opacity:1;-webkit-transform:perspective(400px) rotateX(10deg);transform:perspective(400px) rotateX(10deg)}80%{-webkit-transform:perspective(400px) rotateX(-5deg);transform:perspective(400px) rotateX(-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}.animate__flipInX{-webkit-animation-name:flipInX;animation-name:flipInX;-webkit-backface-visibility:visible!important;backface-visibility:visible!important}@-webkit-keyframes flipInY{0%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0;-webkit-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg)}40%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:perspective(400px) rotateY(-20deg);transform:perspective(400px) rotateY(-20deg)}60%{opacity:1;-webkit-transform:perspective(400px) rotateY(10deg);transform:perspective(400px) rotateY(10deg)}80%{-webkit-transform:perspective(400px) rotateY(-5deg);transform:perspective(400px) rotateY(-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}@keyframes flipInY{0%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0;-webkit-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg)}40%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:perspective(400px) rotateY(-20deg);transform:perspective(400px) rotateY(-20deg)}60%{opacity:1;-webkit-transform:perspective(400px) rotateY(10deg);transform:perspective(400px) rotateY(10deg)}80%{-webkit-transform:perspective(400px) rotateY(-5deg);transform:perspective(400px) rotateY(-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}.animate__flipInY{-webkit-animation-name:flipInY;animation-name:flipInY;-webkit-backface-visibility:visible!important;backface-visibility:visible!important}@-webkit-keyframes flipOutX{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{opacity:1;-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg)}to{opacity:0;-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg)}}@keyframes flipOutX{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{opacity:1;-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg)}to{opacity:0;-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg)}}.animate__flipOutX{-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-duration:calc(var(--animate-duration)*.75);animation-duration:calc(var(--animate-duration)*.75);-webkit-animation-name:flipOutX;animation-name:flipOutX;-webkit-backface-visibility:visible!important;backface-visibility:visible!important}@-webkit-keyframes flipOutY{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{opacity:1;-webkit-transform:perspective(400px) rotateY(-15deg);transform:perspective(400px) rotateY(-15deg)}to{opacity:0;-webkit-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg)}}@keyframes flipOutY{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{opacity:1;-webkit-transform:perspective(400px) rotateY(-15deg);transform:perspective(400px) rotateY(-15deg)}to{opacity:0;-webkit-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg)}}.animate__flipOutY{-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-duration:calc(var(--animate-duration)*.75);animation-duration:calc(var(--animate-duration)*.75);-webkit-animation-name:flipOutY;animation-name:flipOutY;-webkit-backface-visibility:visible!important;backface-visibility:visible!important}@-webkit-keyframes lightSpeedInRight{0%{opacity:0;-webkit-transform:translate3d(100%,0,0) skewX(-30deg);transform:translate3d(100%,0,0) skewX(-30deg)}60%{opacity:1;-webkit-transform:skewX(20deg);transform:skewX(20deg)}80%{-webkit-transform:skewX(-5deg);transform:skewX(-5deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes lightSpeedInRight{0%{opacity:0;-webkit-transform:translate3d(100%,0,0) skewX(-30deg);transform:translate3d(100%,0,0) skewX(-30deg)}60%{opacity:1;-webkit-transform:skewX(20deg);transform:skewX(20deg)}80%{-webkit-transform:skewX(-5deg);transform:skewX(-5deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__lightSpeedInRight{-webkit-animation-name:lightSpeedInRight;animation-name:lightSpeedInRight;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}@-webkit-keyframes lightSpeedInLeft{0%{opacity:0;-webkit-transform:translate3d(-100%,0,0) skewX(30deg);transform:translate3d(-100%,0,0) skewX(30deg)}60%{opacity:1;-webkit-transform:skewX(-20deg);transform:skewX(-20deg)}80%{-webkit-transform:skewX(5deg);transform:skewX(5deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes lightSpeedInLeft{0%{opacity:0;-webkit-transform:translate3d(-100%,0,0) skewX(30deg);transform:translate3d(-100%,0,0) skewX(30deg)}60%{opacity:1;-webkit-transform:skewX(-20deg);transform:skewX(-20deg)}80%{-webkit-transform:skewX(5deg);transform:skewX(5deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__lightSpeedInLeft{-webkit-animation-name:lightSpeedInLeft;animation-name:lightSpeedInLeft;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}@-webkit-keyframes lightSpeedOutRight{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(100%,0,0) skewX(30deg);transform:translate3d(100%,0,0) skewX(30deg)}}@keyframes lightSpeedOutRight{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(100%,0,0) skewX(30deg);transform:translate3d(100%,0,0) skewX(30deg)}}.animate__lightSpeedOutRight{-webkit-animation-name:lightSpeedOutRight;animation-name:lightSpeedOutRight;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}@-webkit-keyframes lightSpeedOutLeft{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(-100%,0,0) skewX(-30deg);transform:translate3d(-100%,0,0) skewX(-30deg)}}@keyframes lightSpeedOutLeft{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(-100%,0,0) skewX(-30deg);transform:translate3d(-100%,0,0) skewX(-30deg)}}.animate__lightSpeedOutLeft{-webkit-animation-name:lightSpeedOutLeft;animation-name:lightSpeedOutLeft;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}@-webkit-keyframes rotateIn{0%{opacity:0;-webkit-transform:rotate(-200deg);transform:rotate(-200deg)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes rotateIn{0%{opacity:0;-webkit-transform:rotate(-200deg);transform:rotate(-200deg)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__rotateIn{-webkit-animation-name:rotateIn;animation-name:rotateIn;-webkit-transform-origin:center;transform-origin:center}@-webkit-keyframes rotateInDownLeft{0%{opacity:0;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes rotateInDownLeft{0%{opacity:0;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__rotateInDownLeft{-webkit-animation-name:rotateInDownLeft;animation-name:rotateInDownLeft;-webkit-transform-origin:left bottom;transform-origin:left bottom}@-webkit-keyframes rotateInDownRight{0%{opacity:0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes rotateInDownRight{0%{opacity:0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__rotateInDownRight{-webkit-animation-name:rotateInDownRight;animation-name:rotateInDownRight;-webkit-transform-origin:right bottom;transform-origin:right bottom}@-webkit-keyframes rotateInUpLeft{0%{opacity:0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes rotateInUpLeft{0%{opacity:0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__rotateInUpLeft{-webkit-animation-name:rotateInUpLeft;animation-name:rotateInUpLeft;-webkit-transform-origin:left bottom;transform-origin:left bottom}@-webkit-keyframes rotateInUpRight{0%{opacity:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes rotateInUpRight{0%{opacity:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__rotateInUpRight{-webkit-animation-name:rotateInUpRight;animation-name:rotateInUpRight;-webkit-transform-origin:right bottom;transform-origin:right bottom}@-webkit-keyframes rotateOut{0%{opacity:1}to{opacity:0;-webkit-transform:rotate(200deg);transform:rotate(200deg)}}@keyframes rotateOut{0%{opacity:1}to{opacity:0;-webkit-transform:rotate(200deg);transform:rotate(200deg)}}.animate__rotateOut{-webkit-animation-name:rotateOut;animation-name:rotateOut;-webkit-transform-origin:center;transform-origin:center}@-webkit-keyframes rotateOutDownLeft{0%{opacity:1}to{opacity:0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}}@keyframes rotateOutDownLeft{0%{opacity:1}to{opacity:0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}}.animate__rotateOutDownLeft{-webkit-animation-name:rotateOutDownLeft;animation-name:rotateOutDownLeft;-webkit-transform-origin:left bottom;transform-origin:left bottom}@-webkit-keyframes rotateOutDownRight{0%{opacity:1}to{opacity:0;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}}@keyframes rotateOutDownRight{0%{opacity:1}to{opacity:0;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}}.animate__rotateOutDownRight{-webkit-animation-name:rotateOutDownRight;animation-name:rotateOutDownRight;-webkit-transform-origin:right bottom;transform-origin:right bottom}@-webkit-keyframes rotateOutUpLeft{0%{opacity:1}to{opacity:0;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}}@keyframes rotateOutUpLeft{0%{opacity:1}to{opacity:0;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}}.animate__rotateOutUpLeft{-webkit-animation-name:rotateOutUpLeft;animation-name:rotateOutUpLeft;-webkit-transform-origin:left bottom;transform-origin:left bottom}@-webkit-keyframes rotateOutUpRight{0%{opacity:1}to{opacity:0;-webkit-transform:rotate(90deg);transform:rotate(90deg)}}@keyframes rotateOutUpRight{0%{opacity:1}to{opacity:0;-webkit-transform:rotate(90deg);transform:rotate(90deg)}}.animate__rotateOutUpRight{-webkit-animation-name:rotateOutUpRight;animation-name:rotateOutUpRight;-webkit-transform-origin:right bottom;transform-origin:right bottom}@-webkit-keyframes hinge{0%{-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}20%,60%{-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-transform:rotate(80deg);transform:rotate(80deg)}40%,80%{-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;opacity:1;-webkit-transform:rotate(60deg);transform:rotate(60deg)}to{opacity:0;-webkit-transform:translate3d(0,700px,0);transform:translate3d(0,700px,0)}}@keyframes hinge{0%{-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}20%,60%{-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-transform:rotate(80deg);transform:rotate(80deg)}40%,80%{-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;opacity:1;-webkit-transform:rotate(60deg);transform:rotate(60deg)}to{opacity:0;-webkit-transform:translate3d(0,700px,0);transform:translate3d(0,700px,0)}}.animate__hinge{-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-duration:calc(var(--animate-duration)*2);animation-duration:calc(var(--animate-duration)*2);-webkit-animation-name:hinge;animation-name:hinge;-webkit-transform-origin:top left;transform-origin:top left}@-webkit-keyframes jackInTheBox{0%{opacity:0;-webkit-transform:scale(.1) rotate(30deg);transform:scale(.1) rotate(30deg);-webkit-transform-origin:center bottom;transform-origin:center bottom}50%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}70%{-webkit-transform:rotate(3deg);transform:rotate(3deg)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes jackInTheBox{0%{opacity:0;-webkit-transform:scale(.1) rotate(30deg);transform:scale(.1) rotate(30deg);-webkit-transform-origin:center bottom;transform-origin:center bottom}50%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}70%{-webkit-transform:rotate(3deg);transform:rotate(3deg)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}.animate__jackInTheBox{-webkit-animation-name:jackInTheBox;animation-name:jackInTheBox}@-webkit-keyframes rollIn{0%{opacity:0;-webkit-transform:translate3d(-100%,0,0) rotate(-120deg);transform:translate3d(-100%,0,0) rotate(-120deg)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes rollIn{0%{opacity:0;-webkit-transform:translate3d(-100%,0,0) rotate(-120deg);transform:translate3d(-100%,0,0) rotate(-120deg)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__rollIn{-webkit-animation-name:rollIn;animation-name:rollIn}@-webkit-keyframes rollOut{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(100%,0,0) rotate(120deg);transform:translate3d(100%,0,0) rotate(120deg)}}@keyframes rollOut{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(100%,0,0) rotate(120deg);transform:translate3d(100%,0,0) rotate(120deg)}}.animate__rollOut{-webkit-animation-name:rollOut;animation-name:rollOut}@-webkit-keyframes zoomIn{0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes zoomIn{0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}50%{opacity:1}}.animate__zoomIn{-webkit-animation-name:zoomIn;animation-name:zoomIn}@-webkit-keyframes zoomInDown{0%{-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19);opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0)}60%{-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1);opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0)}}@keyframes zoomInDown{0%{-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19);opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0)}60%{-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1);opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0)}}.animate__zoomInDown{-webkit-animation-name:zoomInDown;animation-name:zoomInDown}@-webkit-keyframes zoomInLeft{0%{-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19);opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0)}60%{-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1);opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(10px,0,0);transform:scale3d(.475,.475,.475) translate3d(10px,0,0)}}@keyframes zoomInLeft{0%{-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19);opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0)}60%{-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1);opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(10px,0,0);transform:scale3d(.475,.475,.475) translate3d(10px,0,0)}}.animate__zoomInLeft{-webkit-animation-name:zoomInLeft;animation-name:zoomInLeft}@-webkit-keyframes zoomInRight{0%{-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19);opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(1000px,0,0)}60%{-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1);opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);transform:scale3d(.475,.475,.475) translate3d(-10px,0,0)}}@keyframes zoomInRight{0%{-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19);opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(1000px,0,0)}60%{-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1);opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);transform:scale3d(.475,.475,.475) translate3d(-10px,0,0)}}.animate__zoomInRight{-webkit-animation-name:zoomInRight;animation-name:zoomInRight}@-webkit-keyframes zoomInUp{0%{-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19);opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,1000px,0)}60%{-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1);opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0)}}@keyframes zoomInUp{0%{-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19);opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,1000px,0)}60%{-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1);opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0)}}.animate__zoomInUp{-webkit-animation-name:zoomInUp;animation-name:zoomInUp}@-webkit-keyframes zoomOut{0%{opacity:1}50%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}to{opacity:0}}@keyframes zoomOut{0%{opacity:1}50%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}to{opacity:0}}.animate__zoomOut{-webkit-animation-name:zoomOut;animation-name:zoomOut}@-webkit-keyframes zoomOutDown{40%{-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19);opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0)}to{-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1);opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);transform:scale3d(.1,.1,.1) translate3d(0,2000px,0)}}@keyframes zoomOutDown{40%{-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19);opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0)}to{-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1);opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);transform:scale3d(.1,.1,.1) translate3d(0,2000px,0)}}.animate__zoomOutDown{-webkit-animation-name:zoomOutDown;animation-name:zoomOutDown;-webkit-transform-origin:center bottom;transform-origin:center bottom}@-webkit-keyframes zoomOutLeft{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(42px,0,0);transform:scale3d(.475,.475,.475) translate3d(42px,0,0)}to{opacity:0;-webkit-transform:scale(.1) translate3d(-2000px,0,0);transform:scale(.1) translate3d(-2000px,0,0)}}@keyframes zoomOutLeft{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(42px,0,0);transform:scale3d(.475,.475,.475) translate3d(42px,0,0)}to{opacity:0;-webkit-transform:scale(.1) translate3d(-2000px,0,0);transform:scale(.1) translate3d(-2000px,0,0)}}.animate__zoomOutLeft{-webkit-animation-name:zoomOutLeft;animation-name:zoomOutLeft;-webkit-transform-origin:left center;transform-origin:left center}@-webkit-keyframes zoomOutRight{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-42px,0,0);transform:scale3d(.475,.475,.475) translate3d(-42px,0,0)}to{opacity:0;-webkit-transform:scale(.1) translate3d(2000px,0,0);transform:scale(.1) translate3d(2000px,0,0)}}@keyframes zoomOutRight{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-42px,0,0);transform:scale3d(.475,.475,.475) translate3d(-42px,0,0)}to{opacity:0;-webkit-transform:scale(.1) translate3d(2000px,0,0);transform:scale(.1) translate3d(2000px,0,0)}}.animate__zoomOutRight{-webkit-animation-name:zoomOutRight;animation-name:zoomOutRight;-webkit-transform-origin:right center;transform-origin:right center}@-webkit-keyframes zoomOutUp{40%{-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19);opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0)}to{-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1);opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0)}}@keyframes zoomOutUp{40%{-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19);opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0)}to{-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1);opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0)}}.animate__zoomOutUp{-webkit-animation-name:zoomOutUp;animation-name:zoomOutUp;-webkit-transform-origin:center bottom;transform-origin:center bottom}@-webkit-keyframes slideInDown{0%{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInDown{0%{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__slideInDown{-webkit-animation-name:slideInDown;animation-name:slideInDown}@-webkit-keyframes slideInLeft{0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInLeft{0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__slideInLeft{-webkit-animation-name:slideInLeft;animation-name:slideInLeft}@-webkit-keyframes slideInRight{0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInRight{0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__slideInRight{-webkit-animation-name:slideInRight;animation-name:slideInRight}@-webkit-keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__slideInUp{-webkit-animation-name:slideInUp;animation-name:slideInUp}@-webkit-keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:hidden}}@keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:hidden}}.animate__slideOutDown{-webkit-animation-name:slideOutDown;animation-name:slideOutDown}@-webkit-keyframes slideOutLeft{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);visibility:hidden}}@keyframes slideOutLeft{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);visibility:hidden}}.animate__slideOutLeft{-webkit-animation-name:slideOutLeft;animation-name:slideOutLeft}@-webkit-keyframes slideOutRight{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);visibility:hidden}}@keyframes slideOutRight{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);visibility:hidden}}.animate__slideOutRight{-webkit-animation-name:slideOutRight;animation-name:slideOutRight}@-webkit-keyframes slideOutUp{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);visibility:hidden}}@keyframes slideOutUp{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);visibility:hidden}}.animate__slideOutUp{-webkit-animation-name:slideOutUp;animation-name:slideOutUp}", ""]);
            const s = n
        }
        ,
        519: t=>{
            t.exports = function(t) {
                var e = [];
                return e.toString = function() {
                    return this.map((function(e) {
                        var i = t(e);
                        return e[2] ? "@media ".concat(e[2], " {").concat(i, "}") : i
                    }
                    )).join("")
                }
                ,
                e.i = function(t, i, a) {
                    "string" == typeof t && (t = [[null, t, ""]]);
                    var n = {};
                    if (a)
                        for (var s = 0; s < this.length; s++) {
                            var r = this[s][0];
                            null != r && (n[r] = !0)
                        }
                    for (var o = 0; o < t.length; o++) {
                        var l = [].concat(t[o]);
                        a && n[l[0]] || (i && (l[2] ? l[2] = "".concat(i, " and ").concat(l[2]) : l[2] = i),
                        e.push(l))
                    }
                }
                ,
                e
            }
        }
        ,
        446: (t,e,i)=>{
            var a, n = function() {
                return void 0 === a && (a = Boolean(window && document && document.all && !window.atob)),
                a
            }, s = function() {
                var t = {};
                return function(e) {
                    if (void 0 === t[e]) {
                        var i = document.querySelector(e);
                        if (window.HTMLIFrameElement && i instanceof window.HTMLIFrameElement)
                            try {
                                i = i.contentDocument.head
                            } catch (t) {
                                i = null
                            }
                        t[e] = i
                    }
                    return t[e]
                }
            }(), r = [];
            function o(t) {
                for (var e = -1, i = 0; i < r.length; i++)
                    if (r[i].identifier === t) {
                        e = i;
                        break
                    }
                return e
            }
            function l(t, e) {
                for (var i = {}, a = [], n = 0; n < t.length; n++) {
                    var s = t[n]
                      , l = e.base ? s[0] + e.base : s[0]
                      , c = i[l] || 0
                      , h = "".concat(l, " ").concat(c);
                    i[l] = c + 1;
                    var d = o(h)
                      , f = {
                        css: s[1],
                        media: s[2],
                        sourceMap: s[3]
                    };
                    -1 !== d ? (r[d].references++,
                    r[d].updater(f)) : r.push({
                        identifier: h,
                        updater: g(f, e),
                        references: 1
                    }),
                    a.push(h)
                }
                return a
            }
            function c(t) {
                var e = document.createElement("style")
                  , a = t.attributes || {};
                if (void 0 === a.nonce) {
                    var n = i.nc;
                    n && (a.nonce = n)
                }
                if (Object.keys(a).forEach((function(t) {
                    e.setAttribute(t, a[t])
                }
                )),
                "function" == typeof t.insert)
                    t.insert(e);
                else {
                    var r = s(t.insert || "head");
                    if (!r)
                        throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    r.appendChild(e)
                }
                return e
            }
            var h, d = (h = [],
            function(t, e) {
                return h[t] = e,
                h.filter(Boolean).join("\n")
            }
            );
            function f(t, e, i, a) {
                var n = i ? "" : a.media ? "@media ".concat(a.media, " {").concat(a.css, "}") : a.css;
                if (t.styleSheet)
                    t.styleSheet.cssText = d(e, n);
                else {
                    var s = document.createTextNode(n)
                      , r = t.childNodes;
                    r[e] && t.removeChild(r[e]),
                    r.length ? t.insertBefore(s, r[e]) : t.appendChild(s)
                }
            }
            function u(t, e, i) {
                var a = i.css
                  , n = i.media
                  , s = i.sourceMap;
                if (n ? t.setAttribute("media", n) : t.removeAttribute("media"),
                s && "undefined" != typeof btoa && (a += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s)))), " */")),
                t.styleSheet)
                    t.styleSheet.cssText = a;
                else {
                    for (; t.firstChild; )
                        t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(a))
                }
            }
            var m = null
              , p = 0;
            function g(t, e) {
                var i, a, n;
                if (e.singleton) {
                    var s = p++;
                    i = m || (m = c(e)),
                    a = f.bind(null, i, s, !1),
                    n = f.bind(null, i, s, !0)
                } else
                    i = c(e),
                    a = u.bind(null, i, e),
                    n = function() {
                        !function(t) {
                            if (null === t.parentNode)
                                return !1;
                            t.parentNode.removeChild(t)
                        }(i)
                    }
                    ;
                return a(t),
                function(e) {
                    if (e) {
                        if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap)
                            return;
                        a(t = e)
                    } else
                        n()
                }
            }
            t.exports = function(t, e) {
                (e = e || {}).singleton || "boolean" == typeof e.singleton || (e.singleton = n());
                var i = l(t = t || [], e);
                return function(t) {
                    if (t = t || [],
                    "[object Array]" === Object.prototype.toString.call(t)) {
                        for (var a = 0; a < i.length; a++) {
                            var n = o(i[a]);
                            r[n].references--
                        }
                        for (var s = l(t, e), c = 0; c < i.length; c++) {
                            var h = o(i[c]);
                            0 === r[h].references && (r[h].updater(),
                            r.splice(h, 1))
                        }
                        i = s
                    }
                }
            }
        }
        ,
        559: ()=>{}
    }, i = {};
    function a(t) {
        var n = i[t];
        if (void 0 !== n)
            return n.exports;
        var s = i[t] = {
            id: t,
            exports: {}
        };
        return e[t](s, s.exports, a),
        s.exports
    }
    a.m = e,
    t = [],
    a.O = (e,i,n,s)=>{
        if (!i) {
            var r = 1 / 0;
            for (h = 0; h < t.length; h++) {
                for (var [i,n,s] = t[h], o = !0, l = 0; l < i.length; l++)
                    (!1 & s || r >= s) && Object.keys(a.O).every((t=>a.O[t](i[l]))) ? i.splice(l--, 1) : (o = !1,
                    s < r && (r = s));
                if (o) {
                    t.splice(h--, 1);
                    var c = n();
                    void 0 !== c && (e = c)
                }
            }
            return e
        }
        s = s || 0;
        for (var h = t.length; h > 0 && t[h - 1][2] > s; h--)
            t[h] = t[h - 1];
        t[h] = [i, n, s]
    }
    ,
    a.n = t=>{
        var e = t && t.__esModule ? ()=>t.default : ()=>t;
        return a.d(e, {
            a: e
        }),
        e
    }
    ,
    a.d = (t,e)=>{
        for (var i in e)
            a.o(e, i) && !a.o(t, i) && Object.defineProperty(t, i, {
                enumerable: !0,
                get: e[i]
            })
    }
    ,
    a.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window)
                return window
        }
    }(),
    a.o = (t,e)=>Object.prototype.hasOwnProperty.call(t, e),
    (()=>{
        var t = {
            522: 0,
            870: 0
        };
        a.O.j = e=>0 === t[e];
        var e = (e,i)=>{
            var n, s, [r,o,l] = i, c = 0;
            if (r.some((e=>0 !== t[e]))) {
                for (n in o)
                    a.o(o, n) && (a.m[n] = o[n]);
                if (l)
                    var h = l(a)
            }
            for (e && e(i); c < r.length; c++)
                s = r[c],
                a.o(t, s) && t[s] && t[s][0](),
                t[s] = 0;
            return a.O(h)
        }
          , i = self.webpackChunk = self.webpackChunk || [];
        i.forEach(e.bind(null, 0)),
        i.push = e.bind(null, i.push.bind(i))
    }
    )(),
    a.nc = void 0,
    a.O(void 0, [870], (()=>a(235))),
    a.O(void 0, [870], (()=>a(15)));
    var n = a.O(void 0, [870], (()=>a(559)));
    n = a.O(n)
}
)();
