(function () {
    try {
        (function () {
            function nf(a, c, b, d) {
                var e = this; return D(window, "c.i", function () {
                    function f(F) { (F = of(l, m, "", F)(l, m)) && (O(F.then) ? F.then(g) : g(F)); return F } function g(F) { F && (O(F) ? p.push(F) : la(F) && x(function (P) { var M = P[0]; P = P[1]; O(P) && ("u" === M ? p.push(P) : h(P, M)) }, Ma(F))) } function h(F, P, M) { e[P] = lm(l, m, M || q, P, F) } var k, l = window; (!l || isNaN(a) && !a) && he(); var m = mm(a, ie, c, b, d), p = [], q = [th, of, uh]; q.unshift(nm); var r = A(Q, $a), t = L(m); m.id || Wa(Ra("Invalid Metrika id: " + m.id, !0)); var y = ld.C("counters", {}); if (y[t]) return Mb(l,
                        t, "dc", (k = {}, k.key = t, k)), y[t]; om(l, t, vh(a, c, b, d)); y[t] = e; ld.D("counters", y); ld.Ia("counter", e); x(function (F) { F(l, m) }, pf); x(f, md); f(pm); h(qm(l, m, p), "destruct", [th, uh]); Ub(l, C([l, r, f, 1, "a.i"], wh)); x(f, W)
                })()
            } function rm(a, c) { delete J(a).C("cok", {})[c] } function om(a, c, b) { a = J(a); var d = a.C("cok", {}); d[c] = b; a.D("cok", d) } function sm(a, c) { var b = "" + c, d = { id: 1, ca: "0" }, e = tm(b); e ? d.id = e : -1 === jb(b, ":") ? (b = Ia(b), d.id = b) : (b = b.split(":"), e = b[1], d.id = Ia(b[0]), d.ca = je(e) ? "1" : "0"); return [Aa(a, d), d] } function um(a) {
                return la(a) &&
                    R(a.code)
            } function vm(a, c) { var b, d = c.slice(2), e = [(b = {}, b.require = { kind: 0, value: w(wm, Pc([a, {}])) }, b)]; qf(e, ke([3], d)) } function qf(a, c, b) { c = c.slice(1); a.push(b || {}); x(function (d) { R(d) && 3 === d[0] ? qf(a, d) : !R(d) || 18 !== d[0] && 19 !== d[0] ? R(d) && 2 === d[0] && ec(a, d[1]) : xm(a, d) }, c); a.pop() } function xm(a, c) { var b = 18 === c[0]; x(function (d) { var e = d[0], f = d[1]; if (b && 1 === d.length) throw Ra("mca"); d = a[a.length - 1]; if (Nb(d, e)) throw Ra("vr"); f = ec(a, f); d[e] = { kind: b ? 0 : 1, value: f } }, c.slice(1)) } function ec(a, c) {
                if (ja(c) || "[object Number]" ===
                    Object.prototype.toString.call(c) || !!c === c || ca(c)) return c; if (R(c) && 40 === c[0]) { a: { var b = c[1]; for (var d = a.length; 0 < d;) { var e = a[--d]; if (Nb(e, b)) { b = e[b]; break a } } b = void 0 } if (!b) throw Ra("vnd"); return b.value } if (R(c) && 37 === c[0]) { d = c.slice(2); b = ec(a, c[1]); if (!O(b)) throw Ra("tenf"); d = A(u(a, ec), d); return b.apply(null, d) } if (R(c) && 24 === c[0]) return zm(a, c); if (R(c) && 35 === c[0]) { d = c[2]; b = ec(a, c[1]); d = ec(a, d); if (!b) throw Ra("noma"); return b["" + d] } if (R(c) && 23 === c[0]) return Am(a, c)
            } function Am(a, c) {
                return N(function (b,
                    d) { var e = d[1], f = ec(a, d[0]); e = ec(a, e); b["" + f] = e; return b }, {}, c.slice(1))
            } function zm(a, c) { var b = c[1], d = c[2], e = c[3], f = A(Q, a); return function () { var g = arguments, h = N(function (k, l, m) { if (k[l]) throw Ra("da"); k[l] = { kind: 1, value: g[m] }; return k }, {}, d); b && !I(b, d) && (h[b] = { kind: 0, value: b }); qf(f, e, h) } } function wm(a) { return Bm[a] } function rf(a, c) { return function () { try { return c.apply(null, arguments) } catch (b) { xh(a, b) } } } function Cm(a, c, b, d) {
                function e() { g.state = 1; b() } function f() { g.state = 2; d && d() } var g = Dm(a, c); c = g.Ei;
                var h = g.state; c && 2 !== h ? 1 === h ? e() : (a = ha(a), a.F(c, ["load"], e), a.F(c, ["error"], f)) : f()
            } function Dm(a, c) { sf[c] || (sf[c] = { Ei: wc(a, { src: c }), state: 0 }); return sf[c] } function yh(a, c) { if (ca(a)) throw Ra("noma"); if (1 === c.length) return a; var b = n(a, G(".", c.slice(0, -1))); if (!b) throw Ra("noma"); return b } function Em(a) { return N(function (c, b) { Nb(a, b) && (c[b] = a[b]); return c }, {}, da(a)) } function Fm(a, c) { if ("*" === c) return !0; var b = S(a); return c === b.host + b.pathname } function Gm(a, c) { var b = n(c, "target"); b && a(b) } function Hm(a,
                c, b) { var d = n(b, "submitter"); d || (b = n(b, "target")) && (d = le(a, b)); d && c(d) } function Im(a, c, b, d) { var e = me(a, d); e && x(function (f) { var g, h = null; try { var k = n(f, "css_selector"), l = fc(k, a.document); h = zh(l) } catch (r) { } k = null; try { var m = n(f, "xpath"), p = Jm(m); var q = p ? n(a, "document.evaluate") ? a.document.evaluate(p, a.document, null, a.XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue : null : null; k = zh(q) } catch (r) { } f = (g = {}, g.s = [k, h], g.b = e, g); c(f) }, b) } function zh(a) { return (a = Ob(a)) ? nd(ne(a)) : null } function Jm(a) {
                    if (!a) return "";
                    a = a.match(Km); if (!a || 0 === a.length) return ""; var c = Lm(); return "//HTML/BODY/" + N(function (b, d) { var e = d[0], f = Ia(d.slice(1)); return "/" + c[e] + (f ? "[" + (f + 1) + "]" : "") + b }, "", a)
                } function Mm(a) {
                    x(function (c) {
                        var b; if (c.data.auctionId) {
                            var d = c.event, e = c.data; c = e.auctionId; Ja[c] || (Ja[c] = (b = {}, b.auctionId = c, b)); b = "auctionInit" === d; if (!Ja[c].startStamp || b) Ja[c].startStamp = b ? e.auctionStart || e.timestamp : e.auctionStart; if (I(d, Nm)) {
                                if (b = e.bidderCode) {
                                    Ja[c][d] || (Ja[c][d] = {}); var f = {}; Ja[c][d][b] = f; x(function (g) {
                                        var h = e[g];
                                        ca(h) || (f[g] = h)
                                    }, Om); Ja[c].endStamp && (Ja[c].aa = !0)
                                }
                            } else "auctionEnd" === d && (Ja[c].aa = !0, Ja[c].endStamp = e.auctionEnd || e.timestamp, Ja[c].requestedBidders = ia(function (g, h, k) { return tf(g, k) === h }, A(T("bidderCode"), e.bidderRequests)))
                        }
                    }, a)
                } function Pm(a, c) { x(function (b) { b.aa && Qm(a, c, b.auctionId) }, Ah(Ja)) } function Qm(a, c, b) { Ja[b].aa = !1; Ja[b].Ka && ma(a, Ja[b].Ka); Ja[b].Ka = U(a, function () { var d, e; delete Ja[b].Ka; delete Ja[b].aa; c((d = {}, d.__ym = (e = {}, e.pbjs = Ja[b], e), d)); delete Ja[b] }, 2E3) } function Rm(a) {
                    var c = n(a,
                        "featurePolicy"); return c ? "browsingTopics" in a && c.allowsFeature("browsing-topics") : !1
                } function Sm(a, c, b, d) { var e = n(d, "data"); if (ja(e)) { var f = e.split("*"); e = f[0]; var g = f[1]; f = f[2]; "sc.topics-response" === e ? (g && ("1" === g && f ? (a = rb(a, f), R(a) && c.D("cta", a)) : c.D("cta.e", g)), b()) : "sc.frame" === e && d.source && d.source.postMessage("sc.topics", "*") } } function Tm(a, c) {
                    var b; if ("https://oauth.yandex.ru" === n(c, "origin") && n(c, "source.window") && "_ym_uid_request" === n(c.data, "_ym")) {
                        var d = c.source, e = (b = {}, b._ym_uid = a, b);
                        d.postMessage(e, "https://oauth.yandex.ru")
                    }
                } function Bh(a, c) { void 0 === c && (c = !0); var b = fc("canvas", a.document); if (b && (b = Qc(b))) { var d = oe(a) || Rc(a), e = d[0]; d = d[1]; if (.3 <= Ch(a, b, { h: d, w: e }) / (d * e)) { J(a).D("hc", 1); return } } c && U(a, C([a, !1], Bh), 3E3) } function Dh(a) { return { N: function (c, b) { Um(a).then(function (d) { c.J || (c.J = {}); c.J.uah = d; b() }, b) } } } function Vm(a) { var c = N(function (b, d) { var e = d[1], f = Wm(a[d[0]]); f && b.push("" + e + "\n" + f); return b }, [], Ma(Xm)); return G("\n", c) } function Ym(a) { return "che\n" + a } function Wm(a) {
                    return ja(a) ?
                        a : R(a) ? G(",", A(function (c) { return '"' + c.brand + '";v="' + c.version + '"' }, a)) : ca(a) ? "" : a ? "?1" : "?0"
                } function Zm(a, c) { var b = $m(a), d = [an(a) || bn(a)]; Eh(a) && d.push(b); var e = ka(a); b = Pa(a); var f = b.C("synced", {}); d = ia(function (g) { if (c[g]) { var h = (f[g] || 1) + 1440 < e(sb); h && delete f[g]; return h } }, d); b.D("synced", f); return A(function (g) { return { Oi: c[g], ai: g } }, d) } function bn(a) { a = cn(a); return dn[a] || a } function $m(a) { a = Fh(a); return en[a] || "ru" } function fn(a, c, b, d) {
                    if (!b.K || je(c.ca)) d(); else {
                        var e = pe(a), f = u(e, gn), g = Sc(a,
                            ""), h = function () { var q = G(",", A(hn(uf), qe(e))); q = "" + q + jn(q, g); re(b, "gdpr", q); d() }; if (c.gj) f("31"), h(); else if (3 === c.id) h(); else {
                                var k = J(a), l = k.C("f1"); if (l) l(h); else if (l = qe(e), ab(xc(uf), l)) h(); else if (g.C("yandex_login")) f("13"), g.D("gdpr", Tc, 525600), h(); else {
                                    l = se(a); var m = S(a); var p = /(^|\w+\.)yango(\.yandex)?\.com$/.test(m.hostname) ? { url: "https://yastatic.net/s3/taxi-front/yango-gdpr-popup/", version: 2, rf: kn, zf: "_inversed_buttons" } : void 0; l || p ? (l = g.C("gdpr"), I(l, yc) ? (f(l === vf ? "12" : "3"), h()) : wf(a) ||
                                        ln(a) ? (f("17"), h()) : mn(a).then(Q, E).then(function (q) {
                                            q ? (f("28"), h()) : (Gh(h), k.D("f1", Gh), (0, xf[0])(a).then(T("params.eu")).then(function (r) { if (r || fb(m.href, "yagdprcheck=1") || g.C("yaGdprCheck")) { g.D("gdpr_popup", vf); nn(a, c); if (tb(a)) return on(a, f, c); var t = Hh(a, e); if (t) return r = pn(a, f, t, c, p), r.then(C([a, c], qn)), r } r || f("8"); return K.resolve({ value: Tc, Nd: !0 }) }).then(function (r) {
                                                g.qc("gdpr_popup"); if (r) { var t = r.value; r = r.Nd; I(t, yc) && g.D("gdpr", t, r ? void 0 : 525600) } t = gc(Ih, na); od(a, t, 20)(Sa(D(a, "gdr"), E));
                                                k.D("f1", na)
                                            })["catch"](D(a, "gdp.a")))
                                        })) : (f("14"), h())
                                }
                            }
                    }
                } function qn(a, c) { if (se(a)) { var b = pe(a), d = Aa(a, c); d = d && d.params; b = A(u(rn, n), qe(b)); d && b.length && d("gdpr", va(b)) } } function on(a, c, b) { var d = te(a, b); return new K(function (e) { var f; if (d) { var g = d.$, h = w(u("4", c), u(null, e)), k = U(a, h, 2E3, "gdp.f.t"); d.Tf((f = {}, f.type = "isYandex", f)).then(function (l) { l.isYandex ? (c("5"), g.F(Jh, function (m) { e({ value: Kh(m[1].type) }) })) : (c("6"), e(null)) })["catch"](h).then(C([a, k], ma)) } else e({ value: vf, Nd: !0 }) }) } function nn(a,
                    c) { var b = te(a, c); b && b.$.F(["isYandex"], function () { var d; return d = { type: "isYandex" }, d.isYandex = se(a), d }); return b } function sn(a, c, b) { a = b || Fh(a); return I(a, c) ? a : "en" } function Kh(a) { if (I(a, ["GDPR-ok-view-default", "GDPR-ok-view-detailed"])) return Tc; a = a.replace("GDPR-ok-view-detailed-", ""); return I(a, yc) ? a : Tc } function Lh(a, c, b) { var d = n(a, "AppMetricaInitializer"), e = n(d, "init"); if (e) try { H(e, d)(Cb(a, c)) } catch (f) { } else Mh = U(a, C([a, c, 2 * b], Lh), b, "ai.d"); return function () { return ma(a, Mh) } } function Nh(a, c, b,
                        d) { var e, f, g, h = b.Vh, k = b.Qh; b = b.isTrusted; a = yf(a, k); k = k.readOnly; d = (e = {}, e.fi = zf((f = {}, f.a = h ? 1 : 0, f.b = a, f.c = d || 0, f.d = k ? 1 : null, f)).Ha(), e); ca(b) || (d.ite = ub(b)); c.params((g = {}, g.__ym = d, g)) } function Oh(a, c) {
                            var b = n(c, "target"); if (b) {
                                var d = n(b, "value"); if ((d = bb(d)) && !(100 <= Ta(d))) {
                                    var e = "tel" === n(b, "type"), f = 0 < jb(d, "@") && !e, g = Vb(d), h = Ta(g); if (f || !f && (e || h)) {
                                        if (f) { if (d = Ph(d), 5 > Ta(d) || 100 < Ta(d)) return } else { if (tn(d) || Ta(d) - h > h || 10 > Ta(g) || 16 < Ta(g)) return; e = g[0]; g = d[1]; if ("+" === d[0] && g !== e) return; d = Qh(a, d) } e =
                                            n(c, "isTrusted"); return { Qh: b, Vh: f, Rh: d, isTrusted: e }
                                    }
                                }
                            }
                        } function Rh(a, c, b, d, e) {
                            if (!pd(a)) return E; var f = [], g = ha(a); Pb(a)(Sa(E, function () {
                                var h = kb(c, a.document.body); e && (h = ia(e, h)); x(function (l) { f.push(g.F(l, b, d)) }, h); if (Ea("MutationObserver", a.MutationObserver)) {
                                    var k = c.toUpperCase(); h = new a.MutationObserver(D(a, "de.m", function (l) {
                                        x(function (m) {
                                            var p = m.addedNodes; m = m.removedNodes; p && p.length && x(function (q) {
                                                qd(a, q, function (r) { r.nodeName !== k || e && !e(r) || f.push(g.F(r, b, d)) }, void 0, a.NodeFilter.SHOW_ELEMENT,
                                                    !0)
                                            }, p); m && m.length && x(function (q) { qd(a, q, function (r) { r.nodeName !== k || e && !e(r) || g.xb(r, b, d) }, void 0, a.NodeFilter.SHOW_ELEMENT, !0) }, m)
                                        }, l)
                                    })); h.observe(a.document.body, { childList: !0, subtree: !0 }); f.push(H(h.disconnect, h))
                                }
                            })); return C([na, f], x)
                        } function un(a) { var c = n(a, "speechSynthesis.getVoices"); if (c) return a = H(c, a.speechSynthesis), zc(function (b) { return A(u(b, n), vn) }, a()) } function wn(a, c, b) { return G("x", A(w(Q, Fa("concat", "" + a), u(b, n)), c)) } function xn(a, c) {
                            var b = c.Gg; if (!yn(a, b)) return ""; var d = [];
                            a: { var e = zn(a, b); try { var f = C(e, w)()(); break a } catch (F) { if ("ccf" === F.message) { f = null; break a } Wa(F) } f = void 0 } if (Xa(f)) var g = ""; else try { g = f.toDataURL() } catch (F) { g = "" } (f = g) && d.push(f); var h = b.getContextAttributes(); try { var k = pa(b.getSupportedExtensions, "getSupportedExtensions") ? b.getSupportedExtensions() || [] : [] } catch (F) { k = [] } k = G(";", k); f = Af(b.getParameter(b.ALIASED_LINE_WIDTH_RANGE), b); e = Af(b.getParameter(b.ALIASED_POINT_SIZE_RANGE), b); g = b.getParameter(b.ALPHA_BITS); h = h && h.antialias ? "yes" : "no"; var l =
                                b.getParameter(b.BLUE_BITS), m = b.getParameter(b.DEPTH_BITS), p = b.getParameter(b.GREEN_BITS), q = b.getExtension("EXT_texture_filter_anisotropic") || b.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || b.getExtension("MOZ_EXT_texture_filter_anisotropic"); if (q) { var r = b.getParameter(q.MAX_TEXTURE_MAX_ANISOTROPY_EXT); 0 === r && (r = 2) } r = {
                                    sj: k, "webgl aliased line width range": f, "webgl aliased point size range": e, "webgl alpha bits": g, "webgl antialiasing": h, "webgl blue bits": l, "webgl depth bits": m, "webgl green bits": p,
                                    "webgl max anisotropy": q ? r : null, "webgl max combined texture image units": b.getParameter(b.MAX_COMBINED_TEXTURE_IMAGE_UNITS), "webgl max cube map texture size": b.getParameter(b.MAX_CUBE_MAP_TEXTURE_SIZE), "webgl max fragment uniform vectors": b.getParameter(b.MAX_FRAGMENT_UNIFORM_VECTORS), "webgl max render buffer size": b.getParameter(b.MAX_RENDERBUFFER_SIZE), "webgl max texture image units": b.getParameter(b.MAX_TEXTURE_IMAGE_UNITS), "webgl max texture size": b.getParameter(b.MAX_TEXTURE_SIZE), "webgl max varying vectors": b.getParameter(b.MAX_VARYING_VECTORS),
                                    "webgl max vertex attribs": b.getParameter(b.MAX_VERTEX_ATTRIBS), "webgl max vertex texture image units": b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS), "webgl max vertex uniform vectors": b.getParameter(b.MAX_VERTEX_UNIFORM_VECTORS), "webgl max viewport dims": Af(b.getParameter(b.MAX_VIEWPORT_DIMS), b), "webgl red bits": b.getParameter(b.RED_BITS), "webgl renderer": b.getParameter(b.RENDERER), "webgl shading language version": b.getParameter(b.SHADING_LANGUAGE_VERSION), "webgl stencil bits": b.getParameter(b.STENCIL_BITS),
                                    "webgl vendor": b.getParameter(b.VENDOR), "webgl version": b.getParameter(b.VERSION)
                                }; Bf(d, r, ": "); a: { try { var t = b.getExtension("WEBGL_debug_renderer_info"); if (t) { var y = { "webgl unmasked vendor": b.getParameter(t.UNMASKED_VENDOR_WEBGL), "webgl unmasked renderer": b.getParameter(t.UNMASKED_RENDERER_WEBGL) }; break a } } catch (F) { } y = {} } Bf(d, y); if (!b.getShaderPrecisionFormat) return G("~", d); Bf(d, An(b)); return G("~", d)
                        } function Bf(a, c, b) { void 0 === b && (b = ":"); x(function (d) { return a.push("" + d[0] + b + d[1]) }, Ma(c)) } function Bn(a,
                            c, b, d) { c = d.C("cc"); d = C(["cc", ""], d.D); if (c) { var e = c.split("&"); c = e[0]; if ((e = (e = e[1]) && Ia(e)) && 1440 < ka(a)(sb) - e) return d(); b.D("cc", c) } else Ba(0)(c) || d() } function Cn(a, c, b, d) {
                                return qa(c, function (e) {
                                    if (!Cf(e) && !rd(a)) if (e = d.C("zzlc"), X(e) || Xa(e) || "na" === e) {
                                        var f = gb(a); if (f && (e = hc(a))) {
                                            var g = f("iframe"); z(g.style, { display: "none", width: "1px", height: "1px", visibility: "hidden" }); f = Df(a, 68); var h = Ef(a, 79); g.src = "https://mc.yandex." + (f || h ? "md" : "ru") + Sh("L21ldHJpa2EvenpsYy5odG1s"); e.appendChild(g); var k = 0,
                                                l = ha(a).F(a, ["message"], D(a, "zz.m", function (m) { (m = n(m, "data")) && m.substr && "__ym__zz" === m.substr(0, 8) && (Ac(g), m = m.substr(8), d.D("zzlc", m), b.D("zzlc", m), l(), ma(a, k)) })); k = U(a, w(l, u(g, Ac)), 3E3)
                                        }
                                    } else b.D("zzlc", e)
                                })
                            } function Dn(a, c, b) {
                                var d, e; c = vb(u(a, n), En); c = X(c) ? null : n(a, c); if (n(a, "navigator.onLine") && c && c && n(c, "prototype.constructor.name")) {
                                    var f = new c((d = {}, d.iceServers = [], d)); a = n(f, "createDataChannel"); O(a) && (H(a, f, "y.metrika")(), a = n(f, "createOffer"), O(a) && !a.length && (a = H(a, f)(), d = n(a, "then"),
                                        O(d) && H(d, a, function (g) { var h = n(f, "setLocalDescription"); O(h) && H(h, f, g, E, E)() })(), z(f, (e = {}, e.onicecandidate = function () { var g, h = n(f, "close"); if (O(h)) { h = H(h, f); try { var k = (g = n(f, "localDescription.sdp")) && g.match(/c=IN\s[\w\d]+\s([\w\d:.]+)/) } catch (l) { f.onicecandidate = E; "closed" !== f.iceConnectionState && h(); return } k && 0 < k.length && (g = ic(k[1]), b.D("pp", g)); f.onicecandidate = E; h() } }, e))))
                                }
                            } function Fn(a, c, b) {
                                var d, e = sd(a, c); if (e) {
                                    e.$.F(["gpu-get"], function () {
                                        var h; return h = {}, h.type = "gpu-get", h.pu = b.C("pu"),
                                            h
                                    }); var f = n(a, "opener"); if (f) { var g = U(a, C([a, c, b], Th), 200, "pu.m"); e.oe(f, (d = {}, d.type = "gpu-get", d), function (h, k) { var l = n(k, "pu"); l && (ma(a, g), b.D("pu", l)) }) } else Th(a, c, b)
                                }
                            } function Th(a, c, b) { var d = n(a, "location.host"); a = td(a, c); b.D("pu", "" + ic(d) + a) } function Uh(a, c, b) {
                                c = Sc(a, void 0, c); c = Vh(a, c.C("phc_settings") || ""); var d = n(c, "clientId"), e = n(c, "orderId"), f = n(c, "service_id"), g = n(c, "phones") || []; return d && e && g && f ? Gn(a, b.lc, { eg: Hn })(g).then(function (h) { return In(b, { Db: d, Pb: e, Wf: f }, h.ja, g, h.Aa) })["catch"](E) :
                                    K.resolve()
                            } function Hn(a, c, b) { a = Jn(b.Sb); if ("href" === b.ke) { var d = b.sb; c = d.href; b = c.replace(a, b.bb); if (c !== b) return d.href = b, !0 } else if ((a = null === (d = b.sb.textContent) || void 0 === d ? void 0 : d.replace(a, b.bb)) && a !== b.sb.textContent) return b.sb.textContent = a, !0; return !1 } function In(a, c, b, d, e) {
                                var f; c.Db && c.Pb && (c.Db === a.Db && c.Pb === a.Pb || z(a, c, { ja: {}, gb: !0 }), 0 < e && sa(a.Aa, [e]), x(function (g) { var h, k, l = g[0]; g = g[1]; var m = +(a.ja[l] && a.ja[l][g] ? a.ja[l][g] : 0); z(a.ja, (h = {}, h[l] = (k = {}, k[g] = m, k), h)) }, d), x(function (g) {
                                    var h,
                                        k, l = g[0]; g = g[1]; var m = 1 + (a.ja[l] ? a.ja[l][g] : 0); z(a.ja, (h = {}, h[l] = (k = {}, k[g] = m, k), h))
                                }, b), a.nf && (a.gb || b.length) && ((c = Aa(a.l, a.lc)) && c.params("__ym", "phc", (f = {}, f.clientId = a.Db, f.orderId = a.Pb, f.service_id = a.Wf, f.phones = a.ja, f.performance = a.Aa, f)), a.gb = !1))
                            } function Kn(a) { a = gb(a); if (!a) return ""; a = a("video"); try { var c = Fa("canPlayType", a), b = zc(function (d) { return A(w(Q, Fa("concat", d + "; codecs=")), Ln) }, Wh); return A(c, Wh.concat(b)) } catch (d) { return "canPlayType" } } function Mn(a) {
                                var c = n(a, "matchMedia"); if (c &&
                                    Ea("matchMedia", c)) { var b = Fa("matchMedia", a); return N(function (d, e) { d[e] = b("(" + e + ")"); return d }, {}, Nn) }
                            } function An(a) {
                                return N(function (c, b) { var d = b[0], e = b[1]; c[d + " precision"] = n(e, "precision") || "n"; c[d + " precision rangeMin"] = n(e, "rangeMin") || "n"; c[d + " precision rangeMax"] = n(e, "rangeMax") || "n"; return c }, {}, [["webgl vertex shader high float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT)], ["webgl vertex shader medium", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT)], ["webgl vertex shader low float",
                                    a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT)], ["webgl fragment shader high float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT)], ["webgl fragment shader medium float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT)], ["webgl fragment shader low float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT)], ["webgl vertex shader high int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT)], ["webgl vertex shader medium int", a.getShaderPrecisionFormat(a.VERTEX_SHADER,
                                        a.MEDIUM_INT)], ["webgl vertex shader low int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT)], ["webgl fragment shader high int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT)], ["webgl fragment shader medium int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT)], ["webgl fragment shader low int precision", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT)]])
                            } function zn(a, c) {
                                return [function () {
                                    var b = c.createBuffer(); b && c.getParameter && Ea("getParameter", c.getParameter) ||
                                        Ff(); c.bindBuffer(c.ARRAY_BUFFER, b); var d = new a.Float32Array(On); c.bufferData(c.ARRAY_BUFFER, d, c.STATIC_DRAW); b.Xh = 3; b.ji = 3; d = c.createProgram(); var e = c.createShader(c.VERTEX_SHADER); d && e || Ff(); return { ie: d, fj: e, ej: b }
                                }, function (b) {
                                    var d = b.ie, e = b.fj; c.shaderSource(e, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"); c.compileShader(e); c.attachShader(d, e); (d = c.createShader(c.FRAGMENT_SHADER)) ||
                                        Ff(); return z(b, { mh: d })
                                }, function (b) { var d = b.ie, e = b.mh; c.shaderSource(e, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"); c.compileShader(e); c.attachShader(d, e); c.linkProgram(d); c.useProgram(d); return b }, function (b) {
                                    var d = b.ie; b = b.ej; d.dj = c.getAttribLocation(d, "attrVertex"); d.li = c.getUniformLocation(d, "uniformOffset"); c.enableVertexAttribArray(d.Mj); c.vertexAttribPointer(d.dj, b.Xh, c.FLOAT, !1, 0, 0); c.uniform2f(d.li, 1, 1); c.drawArrays(c.TRIANGLE_STRIP,
                                        0, b.ji); return c.canvas
                                }]
                            } function yn(a, c) { if (!O(a.Float32Array)) return !1; var b = n(c, "canvas"); if (!b || !Ea("toDataUrl", b.toDataURL)) return !1; try { c.createBuffer() } catch (d) { return !1 } return !0 } function Af(a, c) { c.clearColor(0, 0, 0, 1); c.enable(c.DEPTH_TEST); c.depthFunc(c.LEQUAL); c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT); return "[" + n(a, "0") + ", " + n(a, "1") + "]" } function Pn(a, c) {
                                if (n(c, "settings.ins")) {
                                    var b = J(a); if (!b.C("scip")) {
                                        var d = Pa(a), e = ka(a)(sb), f = ue(d.C("sci")); if (!(f && 1440 >= e - f)) {
                                            f = wa(a, "ci"); var g =
                                                ["sync.cook.int"], h = function (l) { l = b.C("scip", "") + l; b.D("scip", l) }, k = u("a", h); b.D("scip", "0"); return f({ ba: { ha: g, Qa: 3E3, Ab: !0 } }, ["https://an.yandex.ru/sync_cookie"]).then(function (l) { l = n(l.Sc, "CookieMatchUrls"); if (R(l) && Ta(l)) { h("1"); var m = wa(a, "c"); l = A(function (p, q) { return m({ ba: { ha: g, Qa: 3E3 } }, ["https://" + p])["catch"](w(u("b", h), u("" + q, h))) }, ia(ja, l)); return K.all(l) } k() }, k).then(function () { var l = b.C("scip"); !l || fb(l, "a") || fb(l, "b") || (d.D("sci", e), h("2")) }, E)
                                        }
                                    }
                                }
                            } function Xh(a) {
                                return {
                                    N: function (c,
                                        b) { if (!c.K) return b(); var d = J(a).C("fid"); !Yh && d && (re(c, "fid", d), Yh = !0); return b() }
                                }
                            } function Qn(a, c) { var b = a.document; if (I(b.readyState, ["interactive", "complete"])) Ub(a, c); else { var d = ha(a), e = d.F, f = d.xb, g = function () { f(b, ["DOMContentLoaded"], g); f(a, ["load"], g); c() }; e(b, ["DOMContentLoaded"], g); e(a, ["load"], g) } } function Gf(a) { return { N: function (c, b) { var d = c.K; if (d) { var e = J(a).C("adBlockEnabled"); e && d.D("adb", e) } b() } } } function Rn(a) {
                                var c = D(a, "i.clch", Sn); ha(a).F(a.document, ["click"], u(a, c), { passive: !1 });
                                return function (b) { var d = Ga.Sa, e = a.Ya[Ga.kc], f = !!e._informer; e._informer = z({ domain: "informer.yandex.ru" }, b); f || wc(a, { src: d + "//informer.yandex.ru/metrika/informer.js" }) }
                            } function Tn(a, c) { var b = Pa(a); if ("" === b.C("cc")) { var d = u("cc", b.D); d(0); var e = ka(a), f = J(a); f = w(T(Un({ Sc: 1 }) + ".c"), ud(function (g) { d(g + "&" + e(sb)) }), u("cc", f.D)); wa(a, "6", c)({ ba: { Ab: !0, Ie: !1 } }, ["https://mc.yandex.md/cc"]).then(f)["catch"](w(ud(function () { var g = e(sb); b.D("cc", "&" + g) }), D(a, "cc"))) } } function ve(a, c) {
                                if (!c) return !1; var b =
                                    S(a); return (new RegExp(c)).test("" + b.pathname + b.hash + b.search)
                            } function Vn(a, c) { return qa(c, function (b) { var d = n(b, "settings.dr"); return { Ug: Wn(a, d), isEnabled: n(b, "settings.auto_goals") } }) } function Xn(a, c, b, d, e) { b = Hf(a.document.body, b); d = Hf(a.document.body, d); I(e.target, [b, d]) && If(a, c) } function Zh(a, c, b, d) { (b = Yn(a, d, b)) && If(a, c, b) } function $h(a, c) { var b = ai(a, c); return Zn(a, b) } function ai(a, c) { var b = Hf(a.document.body, c); return b ? $n(a, b) : "" } function If(a, c, b) {
                                if (c = Aa(a, c)) a = vd(["dr", b || "" + Ya(a, 10, 99)]),
                                    c.params(vd(["__ym", a]))
                            } function Hf(a, c) { var b = null; try { b = c ? fc(c, a) : b } catch (d) { } return b } function bi(a) { a = Ca(Sh(a)); return A(function (c) { c = c.charCodeAt(0).toString(2); return ci("0", 8, c) }, a) } function $n(a, c) { if (!c) return ""; var b = [], d = n(a, "document"); qd(a, c, function (e) { if (e.nodeType === d.TEXT_NODE) var f = e.textContent; else e instanceof a.HTMLImageElement ? f = e.alt : e instanceof a.HTMLInputElement && (f = e.value); (f = f && bb(f)) && b.push(f) }); return 0 === b.length ? "" : G(" ", b) } function ao(a, c, b) {
                                a = Qa(b); b = a[1]; "track" ===
                                    a[0] && c({ version: "0", sc: b })
                            } function bo(a, c, b) { if (b) { var d = b.version; (b = n(co, d + "." + b.sc)) && (c && I(b, eo) || a("ym-" + b + "-" + d)) } } function fo(a, c, b) {
                                if ("rt" === b) return "https://" + di(a, c) + ".mc.yandex.ru/watch/3/1"; if ("mf" === b) {
                                    b = S(a); b = we(b.protocol + "//" + b.hostname + b.pathname); c = td(a, c); var d = ""; do d += Ya(a); while (d.length < c.length); d = d.slice(0, c.length); a = ""; for (var e = 0; e < c.length; e += 1)a += (c.charCodeAt(e) + d.charCodeAt(e) - 96) % 10; a = [d, a]; return "https://adstat.yandex.ru/track?service=metrika&id=" + a[1] + "&mask=" +
                                        a[0] + "&ref=" + b
                                }
                            } function go(a, c, b) { var d, e = Jf(c).Rb; return wa(a, "pi", c)({ K: Ka((d = {}, d[e] = 1, d)) }, [b]) } function ho(a, c, b) { return new K(function (d, e) { if (ei(a, xe, "isp")) { var f = E, g = function (h) { ("1" === h ? d : e)(); f(); fi(xe, "isp") }; f = ha(a).F(a, ["message"], C([b, g], D(a, "isp.stat.m", io))); U(a, g, 1500) } else e() }) } function io(a, c, b) { var d = n(b, "data"); if (ja(d)) { var e = d.split("*"); d = e[0]; var f = e[1]; e = e[2]; "sc.frame" === d && b.source ? b.source.postMessage("sc.images*" + a, "*") : "sc.image" === d && f === a && c(e) } } function jo(a, c) {
                                var b =
                                    Pa(a), d = "wv2rf:" + L(c), e = c.ic, f = Kf(a), g = b.C(d), h = c.Xi; return X(f) || Xa(g) ? Ha(function (k, l) { qa(c, function (m) { var p = !!n(m, "settings.webvisor.forms"); p = !n(m, "settings.x3") && p; f = Kf(a) || n(m, "settings.eu"); b.D(d, ub(p)); l({ ic: e, Md: !!f, Cf: p, hg: h }) }) }) : Lf({ ic: e, Md: f, Cf: !!Ia(g), hg: h })
                            } function ko() {
                                var a = N(function (c, b) { c[b[0]] = { gd: 0, Eg: 1 / b[1] }; return c }, {}, [["blur", .0034], ["change", .0155], ["click", .01095], ["deviceRotation", 2E-4], ["focus", .0061], ["mousemove", .5132], ["scroll", .4795], ["selection", .0109], ["touchcancel",
                                    2E-4], ["touchend", .0265], ["touchforcechange", .0233], ["touchmove", .1442], ["touchstart", .027], ["zoom", .0014]]); return { Ag: function (c) { if (c.length) return { type: "activity", data: N(function (b, d) { var e = a[d]; return Math.round(b + e.gd * e.Eg) }, 0, da(a)) } }, mi: function (c) { c && (c = a[c.data.type || c.event]) && (c.gd += 1) } }
                            } function lo(a) {
                                return {
                                    oh: function () { var c = a.document.querySelector("base[href]"); return c ? c.getAttribute("href") : null }, qh: function () {
                                        if (a.document.doctype) {
                                            var c = z({ name: "html", publicId: "", systemId: "" },
                                                a.document.doctype), b = c.publicId, d = c.systemId; return "<!DOCTYPE " + G("", [c.name, b ? ' PUBLIC "' + b + '"' : "", !b && d ? " SYSTEM" : "", d ? ' "' + d + '"' : ""]) + ">"
                                        } return null
                                    }
                                }
                            } function mo(a, c, b) {
                                var d = wd(a), e = ha(a), f = tb(a), g = c.Ad(), h = !n(a, "postMessage") || f && !n(a, "parent.postMessage"), k = u(d, Q); if (h) { if (!g) return U(a, H(d.R, d, "i", { va: !1 }), 10), { zd: k, Pf: E, stop: E }; Wa(Ua()) } d.F(["sr"], function (r) { var t, y = gi(a, r.source); y && Mf(a, r.source, (t = {}, t.type = "\u043d", t.frameId = c.sa().Z(y), t)) }); d.F(["sd"], function (r) {
                                    var t = r.data; r =
                                        r.source; (a === r || gi(a, r)) && d.R("sdr", { data: t.data, frameId: t.frameId })
                                }); if (f && !g) { var l = !1, m = 0, p = function () { var r; Mf(a, a.parent, (r = {}, r.type = "sr", r)); m = U(a, p, 100, "if.i") }; p(); var q = function (r) { d.ga(["\u043d"], q); ma(a, m); var t = Uc(a, r.origin).host; l || r.source !== a.parent || !r.data.frameId || "about:blank" !== S(a).host && !I(t, b) || (l = !0, d.R("i", { frameId: r.data.frameId, va: !0 })) }; d.F(["\u043d"], q); U(a, function () { d.ga(["\u043d"], q); ma(a, m); l || (l = !0, d.R("i", { va: !1 })) }, 2E3, "if.r") } e = e.F(a, ["message"], function (r) {
                                    var t =
                                        rb(a, r.data); t && t.type && I(t.type, no) && d.R(t.type, { data: t, source: r.source, origin: r.origin })
                                }); return { zd: k, Pf: function (r) { var t; return Mf(a, a.parent, (t = {}, t.frameId = c.Ad(), t.data = r, t.type = "sd", t)) }, stop: e }
                            } function gi(a, c) { try { return vb(w(T("contentWindow"), Ba(c)), Ca(a.document.querySelectorAll("iframe"))) } catch (b) { return null } } function Mf(a, c, b) { c || Wa(Ua()); a = Cb(a, b); c.postMessage(a, "*") } function hi() { return jc() + jc() + "-" + jc() + "-" + jc() + "-" + jc() + "-" + jc() + jc() + jc() } function jc() {
                                return Math.floor(65536 *
                                    (1 + Math.random())).toString(16).substring(1)
                            } function oo(a, c) { if (ja(c)) return c; var b = a.textContent; if (ja(b)) return b; b = a.data; if (ja(b)) return b; b = a.nodeValue; return ja(b) ? b : "" } function po(a, c, b, d, e) {
                                void 0 === d && (d = {}); void 0 === e && (e = Na(c)); var f = z(N(function (h, k) { h[k.name] = k.value; return h }, {}, Ca(c.attributes)), d); z(f, qo(c, e, f)); var g = (d = Db(function (h, k) { var l = k[0], m = ye(a, c, l, k[1], b, e), p = m.value; ca(p) ? delete f[l] : f[l] = p; return h || m.pb }, !1, Ma(f))) && Qc(c); g && (f.width = g.width, f.height = g.height); return {
                                    pb: d,
                                    Bg: f
                                }
                            } function qo(a, c, b) { var d = {}; Nf(a) ? d.value = a.value || b.value : "IMG" !== c || b.src || (d.src = ""); return d } function ye(a, c, b, d, e, f) {
                                void 0 === f && (f = Na(c)); var g = { pb: !1, value: d }; if (Nf(c)) "value" === b ? !ca(d) && "" !== d && (b = e.Md, f = e.Cf, e = xd(a, c), f ? (b = Vc(a, c, b), a = b.qb, c = b.hb, b = b.Va, g.pb = !c && (e || a)) : (g.pb = e, b = !(c && kc("ym-record-keys", c))), b || e) && (d = "" + d, g.value = 0 < d.length ? ii("\u2022", d.length) : "") : "checked" === b && I((c.getAttribute("type") || "").toLowerCase(), ro) ? g.value = c.checked ? "checked" : null : so.test(b) && Of(a,
                                    c) && (g.value = null); else if ("IMG" === f && "src" === b) (e = xd(a, c)) ? (g.pb = e, g.value = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=") : g.value = (c.getAttribute("srcset") ? c.currentSrc : "") || c.src; else if ("A" === f && "href" === b) g.value = d ? "#" : ""; else if (I(b, ["srcset", "integrity", "crossorigin", "password"]) || 2 < b.length && 0 === jb(b, "on") || "IFRAME" === f && "src" === b || "SCRIPT" === f && I(b, ["src", "type"])) g.value = null; return g
                            } function Pf(a, c, b, d) {
                                void 0 === d &&
                                    (d = "wv2"); return { H: function (e, f) { return D(a, d + "." + b + "." + f, e, void 0, c) } }
                            } function to(a, c, b, d, e) {
                                function f() { l && l.stop() } if (!c.zb) return K.resolve(E); var g = wa(a, "4", c), h = { K: Ka() }, k = new uo(a, b, function (m, p, q) {
                                    if (!g) return K.resolve(); var r = "wv-data=" + nd(m, !0), t = D(a, "m.n.m.s"); p = {}; p["wv-part"] = "" + q; q = m.length; for (var y = 0, F = 255, P = 255, M, oa, xa; q;) {
                                        M = 21 < q ? 21 : q; q -= M; do oa = "string" === typeof m ? m.charCodeAt(y) : m[y], y += 1, 255 < oa && (xa = oa >> 8, oa &= 255, oa ^= xa), F += oa, P += F; while (--M); F = (F & 255) + (F >> 8); P = (P & 255) + (P >>
                                            8)
                                    } m = (F & 255) + (F >> 8) << 8 | (P & 255) + (P >> 8); return g(z({}, h, { ba: { da: r }, J: (p["wv-check"] = "" + (65535 === m ? 0 : m), p["wv-type"] = b.type, p) }), c)["catch"](t)
                                }), l = vo(a, k, d, e); return qa(c, function (m) { m && J(a).D("isEU", n(m, "settings.eu")); J(a).C("oo") || l && ji(a, m) && l.start(); return f })
                            } function vo(a, c, b, d) {
                                var e = a.document, f = [], g = ha(a), h = ":submit" + Math.random(), k = [], l = H(c.flush, c), m = ta(function (r, t) { D(a, "hfv." + r, function () { try { var y = t.type } catch (F) { return } y = I(y, d); c.push(t, { type: r }); y && l() })() }), p = D(a, "sfv", function () {
                                    var r =
                                        b(a), t = wo(a); x(function (y) { f.push(g.F(y.target, [y.event], m(y.type))) }, r); x(function (y) { f.push(g.F(y.target, [y.event], D(a, "hff." + y.type + "." + y.event, function (F) { x(Ha({ l: a, qa: F, flush: l }), y.O) }))) }, t); k = ki(a, "form", e); e.attachEvent && (r = ki(a, "form *", e), x(function (y) { f.push(g.F(y, ["submit"], m("form"))) }, k), x(function (y) { Qf(y) && f.push(g.F(y, ["change"], m("formInput"))) }, r)); x(function (y) {
                                            var F = y.submit; if (O(F) || "object" === typeof F && xo.test("" + F)) y[h] = F, y.submit = D(a, "fv", function () {
                                                var P = { target: y, type: "submit" };
                                                m("document")(P); return y[h]()
                                            })
                                        }, k)
                                }), q = D(a, "ufv", function () { x(na, f); x(function (r) { r && (r.submit = r[h]) }, k); c.flush() }); return { start: p, stop: q }
                            } function yo(a, c) { var b = ia(function (e) { return 0 < e.O.length }, c), d = li({ target: a.document, type: "document" }); return A(w(Q, d, zo(a)), b) } function mi(a, c) { var b = a.l, d = [], e = c.form; if (!c[Za] && e) { var f = e.elements; e = e.length; for (var g = 0; g < e; g += 1) { var h = f[g]; ze(h) && !h[Za] && sa(d, Bc(b, h)) } } else sa(d, Bc(b, c)); return d } function Rf(a) {
                                if (yd) {
                                    yd = !1; var c = Eb(a.l), b = []; lb(a.l, b,
                                        15) ? a = [] : (V(b, c), a = b); return a
                                }
                            } function ni(a) { if (!yd) { yd = !0; a = Eb(a.l); var c = []; Wb(c, 14); V(c, a); return c } } function Ao(a, c, b) { var d = c[Za]; if (d) { a: { var e = Eb(a), f = c[Za]; if (0 < f) { var g = []; c = Sf(a, c); var h = Cc[f], k = c[0] + "x" + c[1], l = c[2] + "x" + c[3]; if (k !== h.yf) { h.yf = k; if (lb(a, g, 9)) { a = []; break a } V(g, e); V(g, f); V(g, c[0]); V(g, c[1]) } if (l !== h.size) { h.size = l; if (lb(a, g, 10)) { a = []; break a } V(g, e); V(g, f); V(g, c[2]); V(g, c[3]) } if (g.length) { a = g; break a } } a = [] } sa(b, a) } return d } function Vc(a, c, b) {
                                void 0 === b && (b = !1); if (!c) return {
                                    Va: !1,
                                    hb: !1, qb: !1
                                }; var d = c.getAttribute("type") || c.type; if ("button" === d) return { Va: !1, hb: !1, qb: !1 }; var e = ia(oi, [c.className, c.id, c.name]), f = c && kc("ym-record-keys", c); d = d && I(d, pi) || ab(hb(Bo), e); var g; (g = d) || (g = c.placeholder, g = ab(hb(Co), e) || oi(g) && Do.test(g || "")); e = g; return { Va: !f && (Tf(a, c) || e && b || e && !d && !b), hb: f, qb: e }
                            } function Tf(a, c) { return Of(a, c) || zd(a, c) ? !0 : xd(a, c) } function oi(a) { return !!(a && 2 < a.length) } function Nf(a) {
                                try {
                                    var c = Na(a); if (I(c, Uf)) {
                                        if ("INPUT" === c) {
                                            var b = a.type; return !b || I(b.toLocaleLowerCase(),
                                                Eo)
                                        } return !0
                                    }
                                } catch (d) { } return !1
                            } function qi(a, c) { return c && kc("(ym-disable-submit|-metrika-noform)", c) } function Fo(a, c) { return G("", A(function (b) { return a.isNaN(b) ? Go.test(b) ? (b = b.toUpperCase() === b ? Ho : Io, String.fromCharCode(Ya(a, b[0], b[1]))) : b : "" + Ya(a, 0, 9) }, c.split(""))) } function xd(a, c) {
                                if (ca(c)) return !1; if (Vf(c)) { var b = c.parentNode; return (ca(b) ? 0 : 11 === b.nodeType) ? !1 : xd(a, c.parentNode) } b = ri(a); if (!b) return !1; var d = b.call(c, ".ym-hide-content,.ym-hide-content *"); return d && b.call(c, ".ym-show-content,.ym-hide-content .ym-show-content *") ?
                                    !1 : d
                            } function ji(a, c) { var b = Wc(a), d = b.C("visorc"); I(d, ["w", "b"]) || (d = ""); si(a) && ti(a, Ae, "visorc") && !Jo.test(mb(a) || "") || (d = "b"); var e = n(c, "settings.webvisor.recp"); if (!a.isFinite(e) || 0 > e || 1 < e) d = "w"; d || (d = J(a).C("hitId") % 1E4 / 1E4 < e ? "w" : "b"); b.D("visorc", d, 30); return "w" === d } function Ko(a, c) { return { N: function (b, d) { b.K.Wb("we", Qb(c.zb)); ui(a, c, b, "rn"); d() } } } function vi(a, c, b) { if (wi.isEnabled(a)) return new wi(a, c); if (xi.isEnabled(a)) return new xi(a, b) } function yi(a, c) {




                                const webvisorStyle = a.document.getElementById('webvisorStyle');

                                if (webvisorStyle) (webvisorStyle.type = 'text/css');

                                var b = c[1][3], d = 0, e = new a.Uint8Array(c[0]);




                                return gc([b], function (f, g) { if (!f) return e; f[0](a, f[2], e, d); d += f[1]; g.push(f[3]); return e })
                            } function zi(a, c, b) {
                                a = c(b); c = [E, 0, 0]; var d = [0, c, c, void 0]; return gc(a, function (e, f) {
                                    var g = e[0], h = e[1], k = e[2]; if (0 === g) return k(d, h), d; if (void 0 === h || null === h) return d; var l = g >> 3; if (g & 1) Dc(d, Y(l)), h = k(h), l & 2 && Dc(d, Y(h[1])), Dc(d, h); else if (g & 4) for (g = h.length - 1; 0 <= g;) { var m = k(h[g]); m.push([0, 0, Wf]); m.push([0, Y(l), Dc]); m.unshift([0, 0, Xf]); sa(f, m); --g } else if (g & 2) {
                                        k = e[2]; var p = e[3], q = e[4], r = e[5], t = da(h); for (g = t.length -
                                            1; 0 <= g;)m = t[g], m = [[0, 0, Xf], [q, h[m], r], [k, m, p], [0, 0, Wf], [0, Y(l), Dc]], sa(f, m), --g
                                    } else m = k(h), m.push([0, 0, Wf]), m.push([0, Y(l), Dc]), m.unshift([0, 0, Xf]), sa(f, m); return d
                                })
                            } function Xf(a) { var c = a[1], b = a[0], d = a[2]; a[3] ? (a[0] = a[3][0], a[1] = a[3][1], a[2] = a[3][2], a[3] = a[3][3]) : (a[0] = 0, a[1] = [E, 0, 0], a[2] = a[1]); Dc(a, Y(b)); b && (a[2][3] = c[3], a[2] = d, a[0] += b) } function Wf(a) { a[3] = [a[0], a[1], a[2], a[3]]; a[1] = [E, 0, 0]; a[2] = a[1]; a[0] = 0 } function Dc(a, c) { a[0] += c[1]; a[2][3] = c; a[2] = c } function Ai(a) {
                                return [[1857, a.partsTotal,
                                    Y], [1793, a.activity, Y], [1744, a.textChangeMutation, Lo], [1680, a.removedNodesMutation, Mo], [1616, a.addedNodesMutation, No], [1552, a.attributesChangeMutation, Oo], [1488, a.publishersHeader, Po], [1424, a.articleInfo, Qo], [1360, a.focusEvent, Ro], [1296, a.fatalErrorEvent, So], [1232, a.deviceRotationEvent, To], [1168, a.keystrokesEvent, Uo], [1104, a.resizeEvent, Vo], [1040, a.zoomEvent, Wo], [976, a.touchEvent, Xo], [912, a.changeEvent, Yo], [848, a.selectionEvent, Zo], [784, a.scrollEvent, $o], [720, a.mouseEvent, ap], [656, a.Jj, bp], [592, a.page,
                                    cp], [513, a.end, Ec], [449, a.partNum, Y], [401, a.chunk, dp], [257, a.frameId, ua], [193, a.event, Y], [129, a.type, Y], [65, a.stamp, Y]]
                            } function ep(a) { return [[84, a.Bi, Ai]] } function fp(a) { return [[129, a.position, ua], [81, a.name, ea]] } function gp(a) { return [[81, a.name, ea]] } function hp(a) { return [[81, a.name, ea]] } function Qo(a) { return [[593, a.updateDate, ea], [532, a.rubric, fp], [449, a.chars, ua], [401, a.publicationDate, ea], [340, a.topics, gp], [276, a.authors, hp], [209, a.pageTitle, ea], [145, a.pageUrlCanonical, ea], [65, a.id, Y]] } function ip(a) {
                                return [[513,
                                    a.chars, ua], [489, a.maxScrolled, Ad], [385, a.involvedTime, ua], [321, a.height, ua], [257, a.width, ua], [193, a.y, ua], [129, a.x, ua], [65, a.id, Y]]
                            } function Po(a) { return [[129, a.involvedTime, ua], [84, a.articleMeta, ip]] } function Ro(a) { return [[65, a.target, ua]] } function So(a) { return [[209, a.stack, ea], [145, a.Zg, ea], [81, a.code, ea]] } function To(a) { return [[193, a.orientation, ua], [129, a.height, Y], [65, a.width, Y]] } function Uo(a) { return [[84, a.keystrokes, jp]] } function jp(a) {
                                return [[273, a.modifier, ea], [193, a.isMeta, Ec], [145, a.key,
                                    ea], [65, a.id, Y]]
                            } function Vo(a) { return [[257, a.pageHeight, Y], [193, a.pageWidth, Y], [129, a.height, Y], [65, a.width, Y]] } function Wo(a) { return [[193, a.y, ua], [129, a.x, ua], [105, a.level, Ad]] } function Xo(a) { return [[129, a.target, ua], [84, a.touches, kp]] } function kp(a) { return [[297, a.force, Ad], [233, a.y, Ad], [169, a.x, Ad], [81, a.id, ea]] } function Yo(a) { return [[257, a.target, ua], [193, a.hidden, Ec], [129, a.checked, Ec], [81, a.value, ea]] } function Zo(a) { return [[257, a.endNode, Y], [193, a.startNode, Y], [129, a.end, ua], [65, a.start, ua]] }
            function $o(a) { return [[257, a.target, ua], [193, a.page, Ec], [129, a.y, ua], [65, a.x, ua]] } function ap(a) { return [[193, a.target, ua], [129, a.y, Y], [65, a.x, Y]] } function bp(a) { return [[148, a.changes, lp], [65, a.target, ua]] } function lp(a) { return [[193, a.index, Y], [145, a.op, ea], [81, a.style, ea]] } function Lo(a) { return [[209, a.value, ea], [129, a.index, Y], [65, a.target, Y]] } function Mo(a) { return [[129, a.index, Y], [69, a.nodes, ua]] } function No(a) { return [[129, a.index, Y], [84, a.nodes, Bi]] } function Oo(a) {
                return [[210, a.attributes, 81, ea,
                    145, ea], [129, a.index, Y], [65, a.target, Y]]
            } function cp(a) { return [[852, a.content, Bi], [785, a.tabId, ea], [705, a.recordStamp, mp], [656, a.location, np], [592, a.viewport, Ci], [528, a.screen, Ci], [449, a.hasBase, Ec], [401, a.base, ea], [337, a.referrer, ea], [273, a.ua, ea], [209, a.address, ea], [145, a.title, ea], [81, a.doctype, ea]] } function np(a) { return [[209, a.path, ea], [145, a.protocol, ea], [81, a.host, ea]] } function Ci(a) { return [[129, a.height, ua], [65, a.width, ua]] } function Bi(a) {
                return [[513, a.hidden, Ec], [449, a.prev, Y], [385, a.next,
                    Y], [337, a.content, ea], [257, a.parent, Y], [210, a.attributes, 81, ea, 145, ea], [145, a.name, ea], [65, a.id, Y]]
            } function ea(a) { var c = op({}, a, [], 0); return c ? [pp, c, a] : [Di, 0, 0] } function dp(a) { return [qp, a.length, a] } function Ec(a) { return [Di, 1, a ? 1 : 0] } function mp(a) { a = Ei(a); var c = a[0], b = a[1], d = (b >>> 28 | c << 4) >>> 0; c >>>= 24; return [Fi, 0 === c ? 0 === d ? 16384 > b ? 128 > b ? 1 : 2 : 2097152 > b ? 3 : 4 : 16384 > d ? 128 > d ? 5 : 6 : 2097152 > d ? 7 : 8 : 128 > c ? 9 : 10, a] } function Ad(a) { return [rp, 4, a] } function ua(a) { return 0 > a ? [Fi, 10, Ei(a)] : Y(a) } function Y(a) {
                return [sp,
                    128 > a ? 1 : 16384 > a ? 2 : 2097152 > a ? 3 : 268435456 > a ? 4 : 5, a]
            } function sp(a, c, b, d) { for (a = c; 127 < a;)b[d++] = a & 127 | 128, a >>>= 7; b[d] = a } function Di(a, c, b, d) { b[d] = c } function qp(a, c, b, d) { for (a = 0; a < c.length; ++a)b[d + a] = c[a] } function Gi(a) {
                return function (c, b, d, e) {
                    for (var f, g = 0, h = 0; h < b.length; ++h)if (c = b.charCodeAt(h), 128 > c) a ? g += 1 : d[e++] = c; else {
                        if (2048 > c) { if (a) { g += 2; continue } d[e++] = c >> 6 | 192 } else {
                            if (55296 === (c & 64512) && 56320 === ((f = b.charCodeAt(h + 1)) & 64512)) {
                                if (a) { g += 4; continue } c = 65536 + ((c & 1023) << 10) + (f & 1023); ++h; d[e++] = c >> 18 |
                                    240; d[e++] = c >> 12 & 63 | 128
                            } else { if (a) { g += 3; continue } d[e++] = c >> 12 | 224 } d[e++] = c >> 6 & 63 | 128
                        } d[e++] = c & 63 | 128
                    } return a ? g : e
                }
            } function rp(a, c, b, d) { return tp(a)(a, c, b, d) } function up(a, c, b, d) {
                var e = 0 > c ? 1 : 0; e && (c = -c); if (0 === c) Bd(0 < 1 / c ? 0 : 2147483648, b, d); else if (a.isNaN(c)) Bd(2143289344, b, d); else if (3.4028234663852886E38 < c) Bd((e << 31 | 2139095040) >>> 0, b, d); else if (1.1754943508222875E-38 > c) Bd((e << 31 | a.Math.round(c / 1.401298464324817E-45)) >>> 0, b, d); else {
                    var f = a.Math.floor(a.Math.log(c) / Math.LN2); Bd((e << 31 | f + 127 << 23 | Math.round(c *
                        a.Math.pow(2, -f) * 8388608) & 8388607) >>> 0, b, d)
                }
            } function Bd(a, c, b) { c[b] = a & 255; c[b + 1] = a >>> 8 & 255; c[b + 2] = a >>> 16 & 255; c[b + 3] = a >>> 24 } function Fi(a, c, b, d) { a = c[0]; for (c = c[1]; a;)b[d++] = c & 127 | 128, c = (c >>> 7 | a << 25) >>> 0, a >>>= 7; for (; 127 < c;)b[d++] = c & 127 | 128, c >>>= 7; b[d++] = c } function Ei(a) { if (!a) return [0, 0]; var c = 0 > a; c && (a = -a); var b = a >>> 0; a = (a - b) / 4294967296 >>> 0; c && (a = ~a >>> 0, b = ~b >>> 0, 4294967295 < ++b && (b = 0, 4294967295 < ++a && (a = 0))); return [a, b] } function ui(a, c, b, d) {
                var e, f = b.J; f.wmode = "0"; f["wv-hit"] = f["wv-hit"] || "" + Fc(a);
                f["page-url"] = f["page-url"] || S(a).href; d && (f[d] = f[d] || "" + Ya(a)); a = { na: { Ba: "webvisor/" + c.id }, ba: z(b.ba || {}, { Za: (e = {}, e["Content-Type"] = "text/plain", e), $c: "POST" }), J: f }; z(b, a)
            } function vp(a, c) {
                return qa(c, function (b) {
                    var d = J(a); L(c); if (!d.C("dSync", !1)) return d.D("dSync", !0), Hi(a, b, {
                        cb: c, Rb: "s", Rd: "ds", Mi: function (e, f, g) {
                            var h = e.Sc; e = e.host; if (n(h, "settings")) return Wa(Ua("ds.e")); f = f(Z) - g; g = e[1]; var k, l; h = Ka((k = {}, k.di = h, k.dit = f, k.dip = g, k)); k = (l = {}, l["page-url"] = S(a).href, l); return wa(a, "S", Ii)({
                                K: h,
                                J: k
                            }, Ii)["catch"](D(a, "ds.rs"))
                        }
                    })
                })
            } function Hi(a, c, b) { var d, e = b.cb, f = ka(a), g = wp(a, c.userData, e), h = xp(a), k = w(Ji, C([yp, zp], Cd))(a), l = n(c, "settings.sbp"); l && (b.data = z({}, l, (d = {}, d.c = e.id, d))); return h.length ? Ap(a, f, g, c, k, b).then(function () { return Bp(a, h, g, f, k, b) }, E) : K.resolve() } function xp(a) { var c = Dd(a); a = w(Yf, xc(["iPhone", "iPad"]))(a); return c ? Cp : a ? Dp : [] } function Bp(a, c, b, d, e, f) {
                e = f.Mi; var g = void 0 === e ? E : e, h = f.Rd, k = d(Z); return Ep(a, c, f)(Sa(function (l) {
                    x(function (m) { m && Ed(a, h + ".s", m) }, l); l = d(sb);
                    b.D(h, l)
                }, function (l) { b.D(h, d(sb)); g(l, d, k) }))
            } function Ap(a, c, b, d, e, f) { var g = f.Rd, h = f.cb; return new K(function (k, l) { var m = b.C(g, 0); m = parseInt("" + m, 10); return c(sb) - m <= e.ag ? l() : Fp(a) ? k(void 0) : Cf(d) ? l() : k(Gp(a, h)) }) } function Ep(a, c, b) {
                var d = b.Rb, e = b.data, f = wa(a, d, b.cb); a = z({}, Ki); e && z(a.J, e); return Hp(A(function (g) {
                    return Ip(f(z({ ba: { Ie: !1, le: !0 } }, Ki), A(function (h) {
                        var k = h[1], l = h[2]; h = G("", A(function (m) { return String.fromCharCode(m.charCodeAt(0) + 10) }, h[0].split(""))); return "http" + (l ? "s" : "") + "://" +
                            h + ":" + k + "/" + Jp[d]
                    }, g)).then(function (h) { return z({}, h, { host: g[h.jg] }) }))
                }, c))
            } function wp(a, c, b) { var d = c || {}, e = wa(a, "u", b), f = Pa(a); return { C: function (g, h) { return X(d[g]) ? f.C(g, h) : d[g] }, D: function (g, h) { var k, l = "" + h; d[g] = l; f.D(g, l); return e({ J: (k = {}, k.key = g, k.value = l, k) }, [Ga.Sa + "//" + lc + "/user_storage_set"], {})["catch"](D(a, "u.d.s.s")) } } } function Kp(a) { return { N: function (c, b) { J(a).C("oo") || b() } } } function Lp(a, c) {
                try { var b = c[0]; var d = b[1] } catch (e) { return function () { return K.resolve() } } return function (e) {
                    var f,
                        g = (f = {}, f["browser-info"] = Mp, f["page-url"] = a.location && "" + a.location.href, f); return d && (e = Cb(a, e)) ? d(Np, { $a: g, ha: [], da: "site-info=" + we(e) })["catch"](E) : K.resolve()
                }
            } function Op(a, c) { var b = Be(function (d, e) { return d[1].ea > e[1].ea ? 1 : -1 }, Ma(ie)); b = A(function (d) { var e = d[0], f = d[1].Pa; d = Nb(c, e) && !ca(c[e]); e = c[e] !== (f || Q)(void 0); return ub(d && e) }, b); return Ce(G("", b)) } function Pp(a, c) { if (n(a, "disableYaCounter" + c.id) || n(a, "Ya.disableMetrica")) { var b = L(c); delete J(a).C("counters", {})[b]; Wa(Ua("oo.e")) } } function Qp(a) {
                if (Fd(a)) return null;
                var c = Rp(a), b = c.Bf; X(b) && (c.Bf = null, Sp(a).then(function (d) { c.Bf = d })); return b ? 1 : null
            } function Tp(a, c, b) { b = b.J; if ((void 0 === b ? {} : b).nohit) return null; a = Gd(a); if (!a) return null; var d = b = null; n(a, "getEntriesByType") && (d = n(a.getEntriesByType("navigation"), "0")) && (b = Up); if (!b) { var e = n(a, "timing"); e && (b = Vp, d = e) } if (!b) return null; a = Wp(a, d, b); c = L(c); c = Xp(c); return (c = Yp(c, a)) && G(",", c) } function Yp(a, c) {
                var b = a.length ? A(function (d, e) { var f = c[e]; return f === d ? null : f }, a) : c; a.length = 0; x(w(Q, Fa("push", a)), c); return ia(Ba(null),
                    b).length === a.length ? null : b
            } function Wp(a, c, b) { return A(function (d) { var e = d[0], f = d[1]; if (O(e)) return e(a, c) || null; if (1 === d.length) return c[e] ? Math.round(c[e]) : null; var g; !(g = c[e] && c[f]) && (g = 0 === c[e] && 0 === c[f]) && (g = d[1], g = !(Li[d[0]] || Li[g])); if (!g) return null; d = Math.round(c[e]) - Math.round(c[f]); return 0 > d || 36E5 < d ? null : d }, b) } function De(a, c) { try { var b = c.localStorage.getItem(a); return b && nd(ne(b)) } catch (d) { } return null } function ne(a) {
                for (var c = [], b = 0; b < a.length; b++) {
                    var d = a.charCodeAt(b); 128 > d ? c.push(d) :
                        (127 < d && 2048 > d ? c.push(d >> 6 | 192) : (c.push(d >> 12 | 224), c.push(d >> 6 & 63 | 128)), c.push(d & 63 | 128))
                } return c
            } function nd(a, c) {
                void 0 === c && (c = !1); for (var b = a.length, d = b - b % 3, e = [], f = 0; f < d; f += 3) {
                    var g = (a[f] << 16) + (a[f + 1] << 8) + a[f + 2]; e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g >> 18 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g &
                        63])
                } switch (b - d) { case 1: b = a[d] << 4; e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b & 63], "=", "="); break; case 2: b = (a[d] << 10) + (a[d + 1] << 2), e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b & 63], "=") }e = G("", e); return c ? Mi(e,
                    !0) : e
            } function Sh(a, c) {
                void 0 === c && (c = !1); var b = a, d = "", e = 0; if (!b) return ""; for (c && (b = Mi(b)); b.length % 4;)b += "="; do {
                    var f = mc("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", b.charAt(e++)), g = mc("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", b.charAt(e++)), h = mc("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", b.charAt(e++)), k = mc("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", b.charAt(e++)); if (0 > f || 0 > g || 0 > h || 0 > k) return ""; var l =
                        f << 18 | g << 12 | h << 6 | k; f = l >> 16 & 255; g = l >> 8 & 255; l &= 255; d = 64 === h ? d + String.fromCharCode(f) : 64 === k ? d + String.fromCharCode(f, g) : d + String.fromCharCode(f, g, l)
                } while (e < b.length); return d
            } function Mi(a, c) { void 0 === c && (c = !1); return a ? a.replace(c ? /[+/=]/g : /[-*_]/g, function (b) { return Zp[b] || b }) : "" } function $p(a) { try { var c = Ta(a) ? a : []; return G(",", [a.name, a.description, w(Ca, va, Xb(aq), Ee(","))(c)]) } catch (b) { return "" } } function aq(a) { return G(",", [a.description, a.suffixes, a.type]) } function bq(a, c) {
                for (var b = "", d = 0; d < c; d +=
                    1)b += a; return b
            } function cq(a, c, b, d, e, f, g, h) { var k = b.C(f); ca(k) && (b.D(f, g), e(a, c, b, d), k = b.C(f, g)); X(h) || h.Wb(f, "" + k); return k } function dq(a, c) { if (Hd(a)) { var b = mb(a).match(eq); if (b && b.length) return b[1] === c } return !1 } function Fe(a, c, b) { return function (d) { var e, f, g = Aa(c, b); g && fq(a, d, c) && (g = H(g.params, g), (d = Zf({ event: a, La: "products", xa: nc, Eh: "goods" }, d)) && g && g((e = {}, e.__ym = (f = {}, f.ecommerce = [d], f), e))) } } function fq(a, c, b) {
                var d = !1, e = ""; if (!la(c)) return Mb(b, "", "ecomeo"), d; var f = c.goods; switch (a) {
                    case "detail": case "add": case "remove": R(f) &&
                        f.length ? (d = Ni(function (g) { return la(g) && (ja(g.id) || oc(b, g.id) || ja(g.name)) }, f)) || (e = "ecomgi") : e = "ecomgei"; break; case "purchase": oc(b, c.id) || ja(c.id) ? d = !0 : e = "ecompi"
                }Mb(b, "", e); return d
            } function Id(a, c) { return { N: function (b, d) { $f(b) ? d() : qa(c, function (e) { var f; if (e = n(e, "settings.hittoken")) e = (f = {}, f.hittoken = e, f), b.J = z(b.J || {}, e); d() }) } } } function gq(a, c) {
                function b() {
                    q.hidden ? z(k.style, Jd(["top", "right", "left", "background"], "initial")) : z(k.style, Jd(["top", "right", "left"], "0"), { background: "rgba(0, 0, 0, .3)" });
                    y.parentNode || (r.appendChild(p), r.appendChild(y)); q.hidden = !q.hidden; r.hidden = !r.hidden; t.hidden = !t.hidden
                } function d(M) { var oa = g(); z(oa.style, Gc("2px", "18px"), Xc, { left: "15px", top: "7px", background: "#2f3747", borderRadius: "2px" }); oa.style.transform = "rotate(" + M + "deg)"; return oa } function e(M, oa, xa, Fb, Kd) { var Ge = g(); z(Ge.style, Gc(oa + "px", xa + "px"), Xc, { left: M + "px", bottom: 0, background: Fb, borderTopLeftRadius: Kd }); return Ge } var f = gb(a); if (!f) return E; var g = u("div", f), h = u("iframe", f), k = g(); k.classList.add("__ym_wv_ign");
                z(k.style, Oi, { bottom: "0", width: "100%", maxWidth: "initial", zIndex: "999999999" }); var l = k.attachShadow ? k.attachShadow({ mode: "open" }) : k, m = g(); z(m.style, Gc("24px"), Xc, ag, { top: "12px", right: "10px", background: "#3367dc", overflow: "hidden" }); var p = g(); z(p.style, { border: "2px solid transparent", animation: "__ym_wv_ign-spinner-animation 1s 0.21s infinite linear" }, ag, Xc, Gc("48px"), Jd(["top", "left"], "calc(50% - 24px)"), Jd(["borderTopColor", "borderLeftColor"], "#fc0")); f = f("style"); f.textContent = "@keyframes __ym_wv_ign-spinner-animation {to {transform: rotate(360deg);}}";
                p.appendChild(f); var q = g(); q.id = "__ym_wv_ign__opener"; z(q.style, Gc("46px", "48px"), Oi, { right: "0", bottom: "60px", cursor: "pointer", background: "#fff", borderRadius: "16px 0 0 16px", boxShadow: "0px 0px 1px rgba(67, 68, 69, 0.3), 0px 1px 2px rgba(67, 68, 69, 0.3)" }); var r = g(); z(r.style, Xc, Jd(["top", "right", "bottom"], "0"), { width: "600px", background: "#fff" }); var t = g(); t.id = "__ym_wv_ign__closer"; z(t.style, Gc("32px"), Xc, ag, { top: "12px", right: "612px", cursor: "pointer", background: "#fff" }); f = h(); f.src = "https://metrika.yandex.ru/widget/iframe-check";
                var y = h(); z(y.style, Gc("100%"), { border: "none" }); y.src = "https://metrika.yandex.ru/widget/dashboard?id=" + c; r.hidden = !0; t.hidden = !0; t.appendChild(d(45)); t.appendChild(d(-45)); r.appendChild(f); m.appendChild(e(0, 8, 9, "linear-gradient(0deg, #ff324f, #ff324f), linear-gradient(158.67deg, #ff455c 12.6%, #ff1139 96.76%)")); m.appendChild(e(8, 9, 16, "#04acff", "3px")); m.appendChild(e(17, 7, 24, "#ffdd13")); q.appendChild(m); l.appendChild(r); l.appendChild(t); var F = ["click", "touchstart"]; h = ha(a); m = a.document.body; l = [h.F(q,
                    F, b), h.F(t, F, b), h.F(f, ["load"], C([na, [H(r.removeChild, r, f), H(l.appendChild, l, q)]], x)), h.F(y, ["load"], H(r.removeChild, r, p)), H(m.removeChild, m, k)]; var P = C([na, l], x); l.push(h.F(a, ["securitypolicyviolation"], function (M) { (M = n(M, "blockedURI")) && 0 <= jb(M, "https://metrika.yandex.ru") && P() })); m.appendChild(k); return P
            } function Jd(a, c) { return N(function (b, d) { b[d] = c; return b }, {}, a) } function Gc(a, c) { var b; return b = {}, b.width = a, b.height = c || a, b } function hq(a, c) {
                var b = n(c, "origin"), d; if (d = b) d = iq.test(b) || jq.test(b);
                d && (b = rb(a, c.data), "appendremote" === n(b, "action") && kq(a, c, b))
            } function Pi(a, c, b, d) { var e, f, g, h; void 0 === b && (b = ""); void 0 === d && (d = ""); var k = J(a), l = {}; l.getCachedTags = He; l.form = (e = {}, e.closest = u(a, Qi), e.select = lq, e.getData = u(a, Ri), e); l.button = (f = {}, f.closest = u(a, le), f.select = bg, f.getData = u(a, me), f); l.phone = (g = {}, g.hidePhones = C([a, null, [d]], Si), g); l.status = (h = {}, h.checkStatus = C([a, Ia(b)], mq), h); k.D("_u", l); c && wc(a, { src: c }) } function Ti(a) {
                var c = a.lang; c = void 0 === c ? "" : c; var b = a.appVersion; b = void 0 === b ?
                    "" : b; var d = a.fileId; d = void 0 === d ? "" : d; a = a.beta; a = void 0 === a ? !1 : a; b = G(".", va(A(w(Q, Ia), b.split(".")))); if (!I(d, nq) || !I(c, ["ru", "en", "tr"])) return ""; c = (a ? "https://s3.mds.yandex.net/internal-metrika-betas" : "https://yastatic.net/s3/metrika") + (b ? "/" + b : "") + "/form-selector/" + (d + "_" + c + ".js"); return Ui(c) ? c : ""
            } function oq(a, c) {
                var b = gb(a); if (b) {
                    var d = b("div"), e = hc(a); if (e) {
                        d.innerHTML = '<iframe name="RemoteIframe" allowtransparency="true" style="position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"></iframe>';
                        var f = d.firstChild; f.onload = function () { var h = b("meta"); h.setAttribute("http-equiv", "Content-Security-Policy"); h.setAttribute("content", "script-src *"); f.contentWindow.document.head.appendChild(h); wc(f.contentWindow, { src: c }) }; a._ym__remoteIframeEl = f; e.appendChild(d); d.removeChild(f); var g = null; d.attachShadow ? g = d.attachShadow({ mode: "open" }) : d.createShadowRoot ? g = d.createShadowRoot() : d.webkitCreateShadowRoot && (g = d.webkitCreateShadowRoot()); g ? g.appendChild(f) : (e.appendChild(f), a._ym__remoteIframeContainer =
                            f)
                    }
                }
            } function mq(a) { var c, b = Vi(a); a = J(a).C("getCounters", Ld)(); a = A(T("id"), a); return c = { id: b }, c.counterFound = !!b && I(b, a), c } function Si(a, c, b) { var d; c = Wi(a, c, { eg: pq, hi: (d = {}, d.href = !0, d) }); b = va(A(function (f) { return "*" === f ? f : Vb(f) }, b)); var e = A(w(Q, Fa("concat", [""]), Xi("reverse"), na), b); b = Md(a); d = Yi(a, b, 1E3); c = u(e, c); d.F(c); qq(a, b); Zi(a, b); c() } function pq(a, c, b) {
                var d = gb(a), e = b.sb, f = b.Sb, g = e.parentNode, h = e.textContent; if (!("text" === b.ke && h && d && g)) return !1; b = d("small"); $i(b); var k = aj(h).length; x(Fa("appendChild",
                    b), N(function (l, m) { var p = l.nodes, q = l.mg, r = d("small"); r.innerHTML = m; var t = rq.test(m); $i(r); t && (r.style.opacity = "" + (k - q - 1) / k); p.push(r); return { nodes: p, mg: q + (t ? 1 : 0) } }, { nodes: [], mg: 0 }, h).nodes); sq(a, c, b, f); g.insertBefore(b, e); e.textContent = ""; return !0
            } function sq(a, c, b, d) {
                function e() { x(function (l) { l.style && z(l.style, { opacity: "" }) }, Ca(b.childNodes)); if (c) { var k = Aa(a, c); k && k.extLink("tel:" + d, {}) } g(); h() } var f = ha(a), g = E, h = E; g = f.F(b, ["mouseenter"], function (k) {
                    if (k.target === b) {
                        var l = U(a, e, 200, "ph.h.e"); h();
                        h = f.F(b, ["mouseleave"], function (m) { m.target === b && ma(a, l) })
                    }
                })
            } function Zi(a, c) { Pb(a)(Sa(E, function () { var b, d = a.document.body, e = (b = {}, b.attributes = !0, b.childList = !0, b.subtree = !0, b); Ea("MutationObserver", a.MutationObserver) && (new MutationObserver(c.R)).observe(d, e) })) } function qq(a, c) { return ha(a).F(a, ["load"], c.R) } function Wi(a, c, b) {
                function d(k) { return f(a, c, k) ? h[k.Sb] && h[k.Sb].Yc : null } var e, f = b.eg; b = b.hi; var g = void 0 === b ? (e = {}, e.href = !0, e.text = !0, e) : b, h; return function (k) {
                    return new K(function (l,
                        m) { k && k.length || m(); h = bj()(k); Pb(a)(Sa(u({ ja: [], Aa: 0 }, l), function () { var p = ka(a), q = p(Z), r = g.href ? tq(a, h) : [], t = g.text ? cj(a, h, a.document.body) : []; l({ ja: ia(R, va(A(d, r.concat(t)))), Aa: p(Z) - q }) })) })
                }
            } function tq(a, c) {
                var b = a.document.body; if (!b) return []; var d = dj(c); return N(function (e, f) {
                    var g = n(f, "href"); try { var h = decodeURI(g || "") } catch (p) { h = "" } if ("tel:" === h.slice(0, 4)) {
                        var k = (d.exec(h) || [])[0], l = k ? Vb(k) : "", m = c[l]; X(m) || !l && "*" !== m.Yc[0] || (e.push({ ke: "href", sb: f, Sb: l, bb: ej(k, c[l].bb), Pi: g }), g = Vb(h.slice(4)),
                            l = bj()([l ? m.Yc : [g, ""]]), sa(e, cj(a, l, f)))
                    } return e
                }, [], Ca(b.querySelectorAll("a")))
            } function cj(a, c, b) { if (!b) return []; var d = [], e = dj(c), f = ["script", "style"]; qd(a, b, function (g) { var h = n(g, "parentNode.nodeName") || ""; g === b || I(h.toLowerCase(), f) || (h = va(e.exec(g.textContent || "") || []), x(function (k) { var l = Vb(k); X(c[l]) || d.push({ ke: "text", sb: g, Sb: l, bb: ej(k, c[l].bb), Pi: g.textContent || "" }) }, h)) }, function (g) { return e.test(g.textContent || "") ? 1 : 0 }, a.NodeFilter.SHOW_TEXT); return d } function bj() {
                return cg(function (a,
                    c) { var b = A(Vb, c), d = b[0]; b = b[1]; a[d] = { bb: b, Yc: c }; var e = fj(d); e !== d && (a[e] = { bb: fj(b), Yc: c }); return a }, {})
            } function ej(a, c) { for (var b = [], d = a.split(""), e = c.split(""), f = 0, g = 0; g < a.length && !(f >= e.length); g += 1) { var h = d[g]; "0" <= h && "9" >= h ? (b.push(e[f]), f += 1) : b.push(d[g]) } return G("", b) + c.slice(f + 1) } function fj(a) { var c = { 7: "8", 8: "7" }; return 11 === a.length && c[a[0]] ? "" + c[a[0]] + a.slice(1) : a } function dj(a) { return new RegExp("(?:" + G("|", A(gj, da(a))) + ")") } function hj(a, c, b, d) {
                if (c) {
                    var e = []; c && (a.document.documentElement.contains(c) ?
                        qd(a, c, Fa("push", e), d) : sa(e, ij(a, c, d))); x(b, e)
                }
            } function qd(a, c, b, d, e, f) { function g(k) { return O(d) ? d(k) ? a.NodeFilter.FILTER_ACCEPT : a.NodeFilter.FILTER_REJECT : a.NodeFilter.FILTER_ACCEPT } void 0 === e && (e = -1); void 0 === f && (f = !1); var h = g(c); if (O(b) && (f || h === a.NodeFilter.FILTER_ACCEPT) && (h && b(c), !Vf(c))) for (c = a.document.createTreeWalker(c, e, d ? { acceptNode: g } : null, !1); c.nextNode() && !1 !== b(c.currentNode);); } function ij(a, c, b) {
                var d = [], e = w(Q, Fa("push", d)); O(b) ? (b = b(c), (ca(b) || b === a.NodeFilter.FILTER_ACCEPT) &&
                    e(c)) : e(c); if (c.childNodes && 0 < c.childNodes.length) { c = c.childNodes; b = 0; for (var f = c.length; b < f; b += 1) { var g = ij(a, c[b]); x(e, g) } } return d
            } function jj(a, c, b) { var d; a = [kj(a, c, function (e) { d = e; e.za.F(b) }), function () { d && d.unsubscribe() }]; return C([Ie, a], x) } function uq(a, c, b, d) {
                var e, f, g; if (b) {
                    var h = n(d, "ecommerce") || {}; var k = n(d, "event") || ""; h = la(h) && ja(k) ? Zf(k, h) : void 0; if (!h) a: { var l = d; !R(d) && oc(a, Ta(d)) && (l = Qa(l)); if (R(l) && (h = l[0], k = l[1], l = l[2], ja(k) && la(l) && "event" === h)) { h = Zf(k, l); break a } h = void 0 } if (d =
                        h || vq(d)) wb(a, (e = {}, e.counterKey = c, e.name = "ecommerce", e.data = d, e)), b((f = {}, f.__ym = (g = {}, g.ecommerce = [d], g), f))
                }
            } function vq(a) { var c = n(a, "ecommerce"); if (la(c)) return a = ia(xc(wq), da(c)), a = N(function (b, d) { b[d] = c[d]; return b }, {}, a), 0 === da(a).length ? void 0 : a } function Zf(a, c) {
                var b, d, e = ja(a) ? xq[a] : a; if (e) {
                    var f = e.event, g = e.La, h = e.Eh, k = void 0 === h ? "items" : h, l = c.purchase || c; if (h = l[k]) {
                        e = A(u(e.xa, yq), h); var m = (b = {}, b[f] = g ? (d = {}, d[g] = e, d) : e, b); b = da(l); g && 1 < b.length && (m[f].actionField = Db(function (p, q) {
                            if (q ===
                                k) return p; if ("currency" === q) return m.currencyCode = l.currency, p; p[zq[q] || dg[q] || q] = l[q]; return p
                        }, {}, b)); return m
                    }
                }
            } function yq(a, c) { var b = {}; x(function (d) { var e = a[d] || dg[d] || d; -1 !== jb(d, "item_category") ? (e = dg.item_category, b[e] = b[e] ? b[e] + ("/" + c[d]) : c[d]) : b[e] = c[d] }, da(c)); return b } function Aq(a, c, b) {
                var d, e, f, g = n(b, "target"); if (g && (g = le(a, g), g = me(a, g))) {
                    g = "?" + Hc(g); var h = pc(a, c, "gbn", (d = {}, d.id = c.id, d.query = g, d)); b = n(b, "isTrusted"); b = ca(b) ? void 0 : (e = {}, e.__ym = (f = {}, f.ite = ub(b), f), e); Je(a, c, "btn",
                        h).reachGoal(g, b)
                }
            } function Bq(a, c, b, d) { var e = n(d, "target"); e && (d = n(d, "isTrusted"), (e = qc("button,input", a, e)) && "submit" === e.type && (e = Qi(a, e))) && (b.push(e), U(a, C([!1, a, c, b, e, d], lj), 300)) } function lj(a, c, b, d, e, f) { var g, h, k, l = Rb(c)(e, d), m = -1 !== l; if (a || m) m && d.splice(l, 1), a = Ri(c, e), a = "?" + Hc(a), d = C([c, b, "fg", (g = {}, g.id = b.id, g.query = a, g)], mj), f = ca(f) ? void 0 : (h = {}, h.__ym = (k = {}, k.ite = ub(f), k), h), Je(c, b, "form", d).reachGoal(a, f) } function mj(a, c, b, d) { return Cq(a, c).then(w(C([pc(a, c, b, d), E], Cd), na)) } function Ri(a,
                c, b) { return nj(a, c, ["i", "n", "p"], void 0, b) } function Dq(a, c) { var b; a((b = {}, b.clickmap = X(c) ? !0 : c, b)) } function Eq(a, c, b, d, e) { var f, g = "clmap/" + e.id; c = (f = {}, f["page-url"] = c, f["pointer-click"] = b, f); f = { K: Ka(), J: c, na: { Ba: g } }; d(f, e)["catch"](D(a, "c.s.c")) } function Fq(a, c, b, d, e) {
                    if (Nb(a, "ymDisabledClickmap") || !c || !c.element) return !1; a = Na(c.element); if (e && !e(c.element, a) || I(c.button, [2, 3]) && "A" !== a || ab(Ba(a), d)) return !1; d = c.element; if (c && b) {
                        if (50 > c.time - b.time) return !1; e = Math.abs(b.position.x - c.position.x);
                        a = Math.abs(b.position.y - c.position.y); c = c.time - b.time; if (b.element === d && 2 > e && 2 > a && 1E3 > c) return !1
                    } for (; d;) { if (Gq(d)) return !1; d = d.parentElement } return !0
                } function Hq(a, c) { var b = null; try { if (b = c.target || c.srcElement) !b.ownerDocument && b.documentElement ? b = b.documentElement : b.ownerDocument !== a.document && (b = null) } catch (d) { } return b } function Iq(a) { var c = a.which; a = a.button; return c || void 0 === a ? c : 1 === a || 3 === a ? 1 : 2 === a ? 3 : 4 === a ? 2 : 0 } function oj(a, c) {
                    var b = hc(a), d = eg(a); return {
                        x: c.pageX || c.clientX + d.x - (b.clientLeft ||
                            0) || 0, y: c.pageY || c.clientY + d.y - (b.clientTop || 0) || 0
                    }
                } function Ke(a, c) { return { N: function (b, d) { var e, f = b.K, g = b.Ja, h = b.J, k = b.ba; k = void 0 === k ? {} : k; if (f && h) { var l = ka(a); f.Wb("rqnl", 1); for (var m = Nd(a), p = 1; m[p];)p += 1; b.M || (b.M = {}); b.M.Tb = p; m[p] = (e = {}, e.protocol = Ga.Sa, e.host = lc, e.resource = b.na.Ba, e.postParams = k.da, e.time = l(Z), e.counterType = c.ca, e.params = h, e.browserInfo = f.l(), e.counterId = c.id, e.ghid = Fc(a), e); g && (m[p].telemetry = g.l()); fg(a) } d() }, Da: function (b, d) { pj(a, b); d() } } } function pj(a, c) {
                    var b = Nd(a); c.K &&
                        !Xa(b) && c.M && (delete b[c.M.Tb], fg(a))
                } function fg(a) { var c = Nd(a); Pa(a).D("retryReqs", c) } function Jq(a, c) {
                    if (a.Vi()) {
                        var b = qj(c); if (b && !kc("ym-disable-tracklink", b)) {
                            var d = a.l, e = a.Pg, f = a.cb, g = a.sender, h = a.bh, k = f.xc, l = b.href; var m = bb(b.innerHTML && b.innerHTML.replace(/<\/?[^>]+>/gi, "")); m || (m = (m = b.querySelector("img")) ? bb(m.getAttribute("title") || m.getAttribute("alt")) : ""); m = l === m ? "" : m; var p = n(c, "isTrusted"); if (kc("ym-external-link", b)) Le(d, f, { url: l, ob: !0, title: m, Gc: p, sender: g }); else {
                                k = k ? Uc(d, k).hostname :
                                    S(d).hostname; h = RegExp("\\.(" + G("|", A(Kq, h)) + ")$", "i"); var q = b.protocol + "//" + b.hostname + b.pathname; h = rj.test(q) || rj.test(l) || h.test(l) || h.test(q); b = b.hostname; Me(k) === Me(b) ? h ? Le(d, f, { url: l, Ec: !0, Gc: p, title: m, sender: g }) : m && e.D("il", bb(m).slice(0, 100)) : l && Lq.test(l) || Le(d, f, { url: l, Ic: !0, ob: !0, Ec: h, Gc: p, title: m, sender: g })
                            }
                        }
                    }
                } function Le(a, c, b) {
                    var d, e, f, g, h = Ka(); void 0 !== b.Gc && h.D("ite", ub(b.Gc)); b.Ec && h.D("dl", 1); b.ob && h.D("ln", 1); var k = b.lg || {}; h = {
                        K: h, M: { title: k.title || b.title, Ic: !!b.Ic, X: k.params },
                        J: (d = {}, d["page-url"] = b.url, d["page-ref"] = c.xc || S(a).href, d)
                    }; d = "Link"; b.Ec ? d = b.ob ? "Ext link - File" : "File" : b.ob && (d = "Ext link"); wb(a, (e = {}, e.counterKey = L(c), e.name = "event", e.data = (f = {}, f.schema = "Link click", f.name = (b.ob ? "external" : "internal") + " url: " + b.url, f), e)); c = b.sender(h, c).then(pc(a, c, "lcl", (g = {}, g.prefix = d, g.id = c.id, g.url = b.url, g), b.lg)); return Yc(a, "cl.p.s", c, k.callback || E, k.ctx)
                } function Mq(a, c) {
                    var b, d, e = (b = {}, b.string = !0, b.object = !0, b["boolean"] = c, b)[typeof c] || !1; a((d = {}, d.trackLinks =
                        e, d))
                } function Nq(a, c, b, d) { var e = S(a), f = e.hostname; e = e.href; if (c = Od(c).url) a = Uc(a, c), f = a.hostname, e = a.href; return [d + "://" + f + "/" + b, e || ""] } function sj(a) { return (a.split(":")[1] || "").replace(/^\/*/, "").replace(/^www\./, "").split("/")[0] } function Oq(a, c, b, d) { var e; if (a = Aa(a, b)) { var f = d.data; b = "" + b.id; var g = d.sended || []; d.sended || (d.sended = g); I(b, g) || !a.params || d.counter && "" + d.counter !== b || (a.params(f), g.push(b), d.parent && c.Tf((e = {}, e.type = "params", e.data = f, e))) } } function Hh(a, c, b) {
                    void 0 === b && (b = Q); var d =
                        wd(a); b(d); var e = u(d, Pq); Ne(a, c, function (f) { f.za.F(e) }); return d
                } function Pq(a, c) { var b = n(c, "ymetrikaEvent"); b && a.R(n(b, "type"), b) } function Ne(a, c, b, d) { void 0 === b && (b = E); void 0 === d && (d = !1); var e = Md(a); if (c && O(c.push)) { var f = c.push; c.push = function () { var g = Qa(arguments), h = g[0]; d && e.R(h); g = f.apply(c, g); d || e.R(h); return g }; a = { za: e, unsubscribe: function () { c.push = f } }; b(a); x(e.R, c); return a } } function pe(a) { a = J(a); var c = a.C("dataLayer", []); a.D("dataLayer", c); return c } function gn(a, c) {
                    var b, d; I(c, A(T("ymetrikaEvent.type"),
                        a)) || a.push((b = {}, b.ymetrikaEvent = (d = {}, d.type = c, d), b))
                } function tj(a, c) {
                    var b = sd(a, c), d = [], e = []; if (!b) return null; var f = C([a, b.oe], Qq), g = u(f, Rq); b.$.F(["initToParent"], function (h) { g(d, b.children[h[1].counterId]) }).F(["parentConnect"], function (h) { g(e, b.Ga[h[1].counterId]) }); return {
                        $: b.$, Ij: function (h, k) { return new K(function (l, m) { b.oe(h, k, function (p, q) { l([p, q]) }); U(a, u(Ua(), m), 5100, "is.o") }) }, Sf: function (h) { var k = { Vf: [], Be: [], data: h }; d.push(k); return f(b.children, k, h) }, Tf: function (h) {
                            var k = {
                                Vf: [],
                                Be: [], data: h
                            }; e.push(k); return f(b.Ga, k, h)
                        }
                    }
                } function Rq(a, c, b) { c = ia(function (d) { return !I(b.info.counterId, d.Be) }, c); x(function (d) { var e; b.info.counterId && a((e = {}, e[b.info.counterId] = b, e), d, d.data) }, c) } function Qq(a, c, b, d, e) {
                    return (new K(function (f, g) {
                        var h = da(b), k = w(d.resolve || Q, ud(f)), l = w(d.reject || Q, ud(g)); d.resolve = k; d.reject = l; x(function (m) { var p; d.Be.push(+m); var q = b[m], r = U(a, u(Ua(), l), 5100, "is.m"); c(q.window, z(e, (p = {}, p.toCounter = Ia(m), p)), function (t, y) { ma(a, r); d.Vf.push(m); d.resolve && d.resolve(y) }) },
                            h)
                    }))["catch"](D(a, "if.b"))
                } function Sq(a) { var c = E, b = null, d = a.length; if (0 !== a.length && a[0]) { var e = a.slice(-1)[0]; O(e) && (c = e, d = a.length + -1); var f = a.slice(-2)[0]; O(f) && (c = f, b = e, d = a.length + -2); d = a.slice(0, d); return { Qg: b, cc: c, X: 1 === d.length ? a[0] : vd(d) } } } function Yc(a, c, b, d, e) { var f = C([a, d, e], gg); return b.then(f, function (g) { f(); Ed(a, c, g) }) } function hg(a, c) {
                    return {
                        N: function (b, d) {
                            var e, f, g = (b.M || {}).X, h = b.ba; h = void 0 === h ? {} : h; if (g && (uj(c, g), !h.da && b.K && b.J)) {
                                var k = Cb(a, g), l = vj(a), m = b.K.C("pv"); k && !b.J.nohit &&
                                    (wb(a, (e = {}, e.counterKey = L(c), e.name = "params", e.data = (f = {}, f.val = g, f), e)), m ? encodeURIComponent(k).length > Ga.rg ? l.push([b.K, g]) : b.J["site-info"] = k : (h.da = k, b.ba = h, b.Pc || (b.Pc = {}), b.Pc.ii = !0))
                            } d()
                        }, Da: function (b, d) { var e = vj(a), f = Aa(a, c), g = f && f.params; g && (f = ia(w(Zc, Ba(b.K)), e), x(function (h) { g(h[1]); h = Oe(a)(h, e); e.splice(h, 1) }, f)); d() }
                    }
                } function Pe(a, c) { return function (b) { ig(a, c, b) } } function Tq(a, c) { jg(a)(function (b) { delete b[c] }) } function ig(a, c, b) { jg(a)(function (d) { d[c] = z(d[c] || {}, b) }) } function jg(a) {
                    a =
                        J(a); var c = a.C("dsjf") || Ha({}); a.Ia("dsjf", c); return c
                } function Uq(a, c) { return function (b) { var d, e, f = Aa(a, c); if (f) { var g = rc(a, L(c)); la(b) ? Ta(da(b)) ? (b = wj(a, b)) && Ta(b) && f.params((d = {}, d.__ym = (e = {}, e.fpmh = b, e), d)) : g.log("fpeo") : g.log("fpno") } } } function wj(a, c) { return N(function (b, d) { var e = d[0], f = d[1], g = f; f = la(f); if (!f && (oc(a, g) && (g = "" + g), !ja(g))) return b; g = f ? wj(a, g) : g; Ta(g) && b.push([e, g]); return b }, [], Ma(c)) } function xj(a, c, b) {
                    void 0 === b && (b = 0); c = Ma(c); c = N(function (d, e) {
                        var f = e[0], g = e[1], h = la(g); if (!h &&
                            (oc(a, g) && (g = "" + g), !ja(g))) return d; h ? g = xj(a, g, b + 1) : !b && I(f, Vq) ? g = K.resolve(g) : ("phone_number" === f ? g = Qh(a, g) : "email" === f && (g = Ph(g)), g = yj(a, g)); d.push(g.then(function (k) { return [f, k] })); return d
                    }, [], c); return K.all(c)
                } function Ph(a) {
                    var c = bb(a).replace(/^\++/gm, "").toLowerCase(), b = c.lastIndexOf("@"); if (-1 === b) return c; a = c.substr(0, b); b = c.substr(b + 1); if (!b || !Wq(a)) return c; b = b.replace("googlemail.com", "gmail.com"); zj(b) && (b = "yandex.ru"); "yandex.ru" === b ? a = a.replace(kg, "-") : "gmail.com" === b && (a = a.replace(kg,
                        "")); c = jb(a, "+"); -1 !== c && (a = a.slice(0, c)); return a + "@" + b
                } function Wq(a) { return 1 > a.length || 64 < a.length ? !1 : Ni(function (c) { if (1 > c.length) c = !1; else if ('"' === c[0] && '"' === c[c.length - 1] && 2 < c.length) a: { for (var b = 1; b + 2 < c.length; b += 1) { var d = c.charCodeAt(b); if (32 > d || 34 === d || 126 < d) { c = !1; break a } if (92 === d) { if (b + 2 === c.length || 32 > c.charCodeAt(b + 1)) { c = !1; break a } b += 1 } } c = !0 } else c = Xq.test(c) ? !0 : !1; return c }, a.split(".")) } function Qh(a, c) {
                    var b = Yq(c), d = Vb(c); return 10 > d.length || 13 < d.length || b.startsWith("+8") ? bb(c) :
                        "8" === b[0] ? "7" + d.slice(1) : "+" === b[0] || oc(a, +b[0]) ? d : "7" + d
                } function yj(a, c) { return new K(function (b, d) { var e = (new a.TextEncoder).encode(c); a.crypto.subtle.digest("SHA-256", e).then(function (f) { f = new a.Blob([f], { type: "application/octet-binary" }); var g = new a.FileReader; g.onload = function (h) { h = n(h, "target.result") || ""; var k = jb(h, ","); -1 !== k ? b(h.substring(k + 1)) : d(Ra("fpm.i")) }; g.readAsDataURL(f) }, d) }) } function Aa(a, c) { var b = J(a).C("counters", {}), d = L(c); return b[d] } function pc(a, c, b, d, e) {
                    return C([a, L(c),
                        e ? [b + ".p", e] : b, d], Mb)
                } function Mb(a, c, b, d) { rc(a, c).log(b, d) } function Zq(a, c) { function b(d, e, f) { var g, h; wb(a, (g = {}, g.name = "log", g.counterKey = c, g.data = (h = {}, h.args = R(e) ? e : [e], h.type = d, h.variables = f, h), g)) } return { log: u("log", b), error: u("error", b), warn: u("warn", b) } } function qa(a, c) { var b = L(a); return Aj()($q(b)).then(c) } function ar(a, c, b) { var d, e; c = L(c); var f = lg(a); b = z({ eh: f(Z) }, b); wb(a, (d = {}, d.counterKey = c, d.name = "counterSettings", d.data = (e = {}, e.settings = b, e), d)); return Aj()(br(c, b)) } function br(a, c) {
                    return function (b) {
                        var d =
                            b[a]; d ? (d.Gf = !0, d.Ff(c)) : b[a] = { promise: K.resolve(c), Gf: !0, Ff: E }
                    }
                } function mg(a) { return !Fd(a) && ng(a) } function Pd(a) { return gb(a) ? u(a, cr) : !1 } function Gb(a) { if (a.fetch) { var c = n(a, "AbortController"); return C([a, c ? new c : void 0], dr) } return !1 } function ng(a) { var c = n(a, "navigator.sendBeacon"); return c && Ea("sendBeacon", c) ? C([a, H(c, n(a, "navigator"))], er) : !1 } function er(a, c, b, d) {
                    return new K(function (e, f) {
                        var g; if (!n(a, "navigator.onLine")) return f(); var h = z(d.$a, (g = {}, g["force-urlencoded"] = 1, g)); g = b + "?" + Hc(h) +
                            (d.da ? "&" + d.da : ""); return 2E3 < g.length ? f(Ua("sb.tlq")) : c(g) ? e("") : f()
                    })
                } function cr(a, c, b) { return new K(function (d, e) { var f, g, h = "_ymjsp" + Ya(a), k = z((f = {}, f.callback = h, f), b.$a), l = C([a, h], fr); a[h] = function (p) { try { l(), Ac(m), d(p) } catch (q) { e(q) } }; k.wmode = "5"; var m = wc(a, (g = {}, g.src = Bj(c, b, k), g)); if (!m) return l(), e(Ra("jp.s")); f = u(m, Ac); f = w(f, u(Ua(b.ha), e)); g = Qd(a, f, b.Qa || 1E4); g = C([a, g], ma); m.onload = g; m.onerror = w(l, g, f) }) } function fr(a, c) { try { delete a[c] } catch (b) { a[c] = void 0 } } function $c(a) {
                    var c = gb(a); return c ?
                        C([a, c], gr) : !1
                } function gr(a, c, b, d) { return new K(function (e, f) { var g = hc(a), h = c("img"), k = w(u(h, Ac), u(Ua(d.ha), f)), l = Qd(a, k, d.Qa || 3E3); h.onerror = k; h.onload = w(u(h, Ac), u(null, e), C([a, l], ma)); k = z({}, d.$a); delete k.wmode; h.src = Bj(b, d, k); Hd(a) && (z(h.style, { position: "absolute", visibility: "hidden", width: "0px", height: "0px" }), g.appendChild(h)) }) } function dr(a, c, b, d) {
                    var e, f = z(d.Ab ? (e = {}, e.wmode = "7", e) : {}, d.$a), g = c || { signal: void 0, abort: E }, h = a.fetch(b + "?" + Hc(f), {
                        method: d.$c, body: d.da, credentials: !1 === d.Ie ? "omit" :
                            "include", headers: d.Za, signal: g.signal
                    }), k = u(d.ha, Ua); return new K(function (l, m) { d.Qa && Qd(a, function () { try { g.abort() } catch (p) { } m(k()) }, d.Qa); return h.then(function (p) { if (!p.ok) { if (d.le) return Wa(Cj(p)); he(d.ha) } return d.le ? p.text() : d.Ab ? p.json() : null }).then(l)["catch"](u(k(), m)) })
                } function Hb(a) {
                    var c; if (c = n(a, "XMLHttpRequest")) if (c = "withCredentials" in new a.XMLHttpRequest) {
                        a: {
                            if (hr.test(a.location.host) && a.opera && O(a.opera.version) && (c = a.opera.version(), "string" === typeof c && "12" === c.split(".")[0])) {
                                c =
                                    !0; break a
                            } c = !1
                        } c = !c
                    } return c ? u(a, ir) : !1
                } function ir(a, c, b) { var d, e = new a.XMLHttpRequest, f = b.da, g = z(b.Ab ? (d = {}, d.wmode = "7", d) : {}, b.$a); return new K(function (h, k) { e.open(b.$c || "GET", c + "?" + Hc(g), !0); e.withCredentials = !1 !== b.Ie; b.Qa && (e.timeout = b.Qa); jr(Ma, Xb(function (m) { e.setRequestHeader(m[0], m[1]) }))(b.Za); var l = C([a, e, Ua(b.ha), b.Ab, b.le, h, k], kr); e.onreadystatechange = l; try { e.send(f) } catch (m) { } }) } function kr(a, c, b, d, e, f, g, h) {
                    if (4 === c.readyState) if (200 === c.status || e || g(b), e) 200 === c.status ? f(c.responseText) :
                        g(Cj(c)); else { e = null; if (d) try { (e = rb(a, c.responseText)) || g(b) } catch (k) { g(b) } f(e) } return h
                } function Bj(a, c, b) { (b = Hc(b)) && (a += "?" + b); c.da && (a += (b ? "&" : "?") + c.da); return a } function lr(a, c, b) { var d = A(Zc, Yb[c] || Zb); x(function (e) { return d.unshift(e) }, Qe); return A(w(Pc([a, b]), na), d) } function Dj(a) { return { N: function (c, b) { var d = c.J; if (!c.K || !d) return b(); var e = d["page-ref"], f = d["page-url"]; e && f !== e ? d["page-ref"] = Ej(a, e) : delete d["page-ref"]; d["page-url"] = Ej(a, f).slice(0, Ga.ug); return b() } } } function Ej(a, c) {
                    var b =
                        S(a), d = b.href, e = b.host, f = -1; if (!ja(c) || X(c)) return d; b = c.replace(Fj, ""); if (-1 !== b.search(mr)) return b; var g = b.charAt(0); if ("?" === g && (f = d.search(/\?/), -1 === f) || "#" === g && (f = d.search(/#/), -1 === f)) return d + b; if (-1 !== f) return d.substr(0, f) + b; if ("/" === g) { if (f = jb(d, e), -1 !== f) return d.substr(0, f + e.length) + b } else return d = d.split("/"), d[d.length - 1] = b, G("/", d); return ""
                } function Re(a, c) {
                    return {
                        N: function (b, d) { var e = Gj(c); e = C([b, e, d], nr); or(a, c, e) }, Da: function (b, d) {
                            var e = b.K, f = Gj(c); if (e) {
                                var g = f.ta; f.We === e &&
                                    g && (x(na, g), f.ta = null)
                            } d()
                        }
                    }
                } function nr(a, c, b) { var d = a.K; d ? $f(a) ? (c.We = d, b()) : c.ta ? c.ta.push(b) : b() : b() } function $f(a) { return (a = a.K) && a.C("pv") && !a.C("ar") } function or(a, c, b) { if (Se(a) && tb(a)) { var d = pr(c); if (!d.Th) { d.Th = !0; c = sd(a, c); if (!c) { b(); return } d.ta = []; var e = function () { d.ta && (x(na, d.ta), d.ta = null) }; U(a, e, 3E3); c.$.F(["initToChild"], e) } d.ta ? d.ta.push(b) : b() } else b() } function Hj(a, c) {
                    return {
                        N: function (b, d) {
                            var e = b.K; if (e && (!c || c.Rf)) {
                                var f = a.document.title; b.M && b.M.title && (f = b.M.title); var g = Ic("getElementsByTagName",
                                    a.document); "string" !== typeof f && g && (f = g("title"), f = (f = n(f, "0.innerHtml")) ? f : ""); f = f.slice(0, Ga.sg); e.D("t", f)
                            } d()
                        }
                    }
                } function Sb(a) { return function (c, b) { return { N: function (d, e) { var f = d.K, g = d.J; f && g && x(function (h) { var k = Rd[h], l = "bi", m = f; k || (k = Te[h], l = "tel", m = re(d)); k && (k = B(l + ":" + h, k, null)(c, b, d), m.Wb(h, k)) }, a || qr()); e() } } } } function rr(a, c) {
                    var b = Sd(a); c.F(["initToParent"], function (d) { var e = d[0]; d = d[1]; window.window && (b.children[d.counterId] = { info: d, window: e.source }) }).F(["initToChild"], function (d) {
                        var e =
                            d[0]; d = d[1]; e.source === a.parent && c.R("parentConnect", [e, d])
                    }).F(["parentConnect"], function (d) { var e = d[1]; e.counterId && (b.Ga[e.counterId] = { info: e, window: d[0].source }) })
                } function sr(a) { if (Ea("MutationObserver", a.MutationObserver)) { var c = Sd(a).children, b = new a.MutationObserver(function () { x(function (d) { n(c[d], "window.window") || delete c[d] }, da(c)) }); Pb(a)(Sa(E, function () { b.observe(a.document.body, { subtree: !0, childList: !0 }) })) } } function tr(a, c) {
                    return function (b, d) {
                        var e, f = {
                            pc: ka(a)(Z), key: a.Math.random(),
                            dir: 0
                        }; b.length && (f.pc = Ia(b[0]), f.key = parseFloat(b[1]), f.dir = Ia(b[2])); z(d, c); var g = (e = { data: d }, e.__yminfo = G(":", ["__yminfo", f.pc, f.key, f.dir]), e); return { meta: f, Zf: Cb(a, g) || "" }
                    }
                } function Pb(a, c) { function b(e) { n(c, d) ? e() : U(a, u(e, b), 100) } void 0 === c && (c = a); var d = (c.nodeType ? "contentWindow." : "") + "document.body"; return Ha(function (e, f) { b(f) }) } function Td(a, c) {
                    var b = c.Sd, d = b || "uid"; b = b ? a.location.hostname : void 0; var e = Wc(a), f = Pa(a), g = ka(a)(og), h = Ij(a, c), k = h[0]; h = h[1]; var l = e.C("d"); Jj(a, c); var m = !1; !h &&
                        k && (h = k, m = !0); if (!h) h = G("", [g, Ya(a, 1E6, 999999999)]), m = !0; else if (!l || 15768E3 < g - Ia(l)) m = !0; m && !c.Ua && (e.D(d, h, 525600, b), e.D("d", "" + g, 525600, b)); f.D(d, h); return h
                } function ur(a, c) { return !c.Ua && Jj(a, c) } function Ij(a, c) { var b = Pa(a), d = Wc(a), e = c.Sd || "uid"; return [b.C(e), d.C(e)] } function Fc(a) { var c = J(a), b = c.C("hitId"); b || (b = Ya(a), c.D("hitId", b)); return b } function me(a, c, b) { var d = Na(c); return d && nj(a, c, va(["p", vr[d], "c"]), bg, b) } function le(a, c) {
                    var b = qc(pg, a, c); if (!b) {
                        var d = qc("div", a, c); d && (kb(pg + ",div",
                            d).length || (b = d))
                    } return b
                } function nj(a, c, b, d, e) { return N(function (f, g) { var h = null; g in Kj ? h = c.getAttribute && c.getAttribute(Kj[g]) : g in ad && (h = "p" === g ? ad[g](a, c, e) : "c" === g ? ad[g](a, c, d) : ad[g](a, c)); h && (h = h.slice(0, Lj[g] || 100), f[g] = qg[g] ? "" + ic(h) : h); return f }, {}, b) } function ki(a, c, b) { if (pd(a)) return Ca(b.querySelectorAll(c)); var d = Mj(c.split(" "), b); return ia(function (e, f) { return Rb(a)(e, d) === f }, d) } function Mj(a, c) {
                    var b = sa([], a), d = b.shift(); if (!d) return []; d = c.getElementsByTagName(d); return b.length ?
                        zc(u(b, Mj), Ca(d)) : Ca(d)
                } function fc(a, c) { if (c.querySelector) return c.querySelector(a); var b = kb(a, c); return b && b.length ? b[0] : null } function kb(a, c) { if (!c || !c.querySelectorAll) return []; var b = c.querySelectorAll(a); return b ? Ca(b) : [] } function qj(a) {
                    var c = null; try { c = a.target || a.srcElement } catch (b) { } if (c) {
                        3 === c.nodeType && (c = c.parentNode); for (a = c && c.nodeName && ("" + c.nodeName).toLowerCase(); n(c, "parentNode.nodeName") && ("a" !== a && "area" !== a || !c.href && !c.getAttribute("xlink:href"));)a = (c = c.parentNode) && c.nodeName &&
                            ("" + c.nodeName).toLowerCase(); return c.href ? c : null
                    } return null
                } function wc(a, c) { var b = gb(a); if (b) { var d = a.document, e = b("script"); e.src = c.src; e.type = c.type || "text/javascript"; e.charset = c.charset || "utf-8"; e.async = c.async || !0; try { var f = d.getElementsByTagName("head")[0]; if (!f) { var g = d.getElementsByTagName("html")[0]; f = b("head"); g && g.appendChild(f) } f.insertBefore(e, f.firstChild); return e } catch (h) { } } } function fi(a, c) { var b = Nj(a); I(c, b.rb) && (b.rb = ia(w(Ba(c), Jc), b.rb), b.rb.length || (Ac(b.ib), b.ib = null)) } function ei(a,
                    c, b) { var d = Nj(c); I(b, d.rb) || d.rb.push(b); if (Xa(d.ib)) { b = gb(a); if (!b) return null; b = b("iframe"); z(b.style, { display: "none", width: "1px", height: "1px", visibility: "hidden" }); b.src = c; a = hc(a); if (!a) return null; a.appendChild(b); d.ib = b } else (a = n(d.ib, "contentWindow")) && a.postMessage("frameReinit", "*"); return d.ib } function wr(a, c) {
                        var b = R(a) ? a : [a]; c = c || document; if (c.querySelectorAll) { var d = G(", ", A(function (e) { return "." + e }, b)); return Ca(c.querySelectorAll(d)) } if (c.getElementsByClassName) return zc(w(Fa("getElementsByClassName",
                            c), Ca), b); d = c.getElementsByTagName("*"); b = "(" + G("|", b) + ")"; return ia(u(b, kc), Ca(d))
                    } function yf(a, c, b) { for (var d = "", e = He(), f = Na(c) || "*"; c && c.parentNode && !I(f, ["BODY", "HTML"]);)d += e[f] || "*", d += Oj(a, c, b) || "", c = c.parentElement, f = Na(c) || "*"; return bb(d, 128) } function Oj(a, c, b) { if (a = Ue(a, c)) { a = a.childNodes; for (var d = c && c.nodeName, e = 0, f = 0; f < a.length; f += 1)if (d === (a[f] && a[f].nodeName)) { if (c === a[f]) return e; b && a[f] === b || (e += 1) } } return 0 } function Ue(a, c) {
                        var b = n(a, "document"); return c && c !== b.documentElement ?
                            c === Kc(a) ? b.documentElement : n(c, "parentNode") : null
                    } function Sf(a, c) { var b = rg(a, c), d = b.left; b = b.top; var e = Ve(a, c); return [d, b, e[0], e[1]] } function Ve(a, c) { var b = n(a, "document"); if (c === Kc(a) || c === b.documentElement) { b = hc(a); var d = Rc(a); return [Math.max(b.scrollWidth, d[0]), Math.max(b.scrollHeight, d[1])] } return (b = Qc(c)) ? [b.width, b.height] : [c.offsetWidth, c.offsetHeight] } function rg(a, c) {
                        var b = c, d = n(a, "document"), e = Na(b); if (!b || !b.ownerDocument || "PARAM" === e || b === Kc(a) || b === d.documentElement) return { left: 0, top: 0 };
                        if (d = Qc(b)) return b = eg(a), { left: Math.round(d.left + b.x), top: Math.round(d.top + b.y) }; for (e = d = 0; b;)d += b.offsetLeft, e += b.offsetTop, b = b.offsetParent; return { left: d, top: e }
                    } function qc(a, c, b) {
                        if (!(c && c.Element && c.Element.prototype && c.document && b)) return null; if (c.Element.prototype.closest && Ea("closest", c.Element.prototype.closest) && b.closest) return b.closest(a); var d = ri(c); if (d) { for (; b && 1 === b.nodeType && !d.call(b, a);)b = b.parentElement || b.parentNode; return b && 1 === b.nodeType ? b : null } if (pd(c)) {
                            for (a = Ca((c.document ||
                                c.ownerDocument).querySelectorAll(a)); b && 1 === b.nodeType && -1 === Rb(c)(b, a);)b = b.parentElement || b.parentNode; return b && 1 === b.nodeType ? b : null
                        } return null
                    } function pd(a) { return !(!Ea("querySelectorAll", n(a, "Element.prototype.querySelectorAll")) || !a.document.querySelectorAll) } function Ch(a, c, b) { var d = c.top, e = c.bottom, f = c.left, g = b.w; b = b.h; a = a.Math; c = a.min(a.max(c.right, 0), g) - a.min(a.max(f, 0), g); return (a.min(a.max(e, 0), b) - a.min(a.max(d, 0), b)) * c } function Pj(a) {
                        return We(a) && !ab(Ba(a.type), xr) ? Xe(a) ? !a.checked :
                            !a.value : yr(a) ? !a.value : zr(a) ? 0 > a.selectedIndex : !0
                    } function Na(a) { if (a) try { var c = a.nodeName; if (ja(c)) return c; c = a.tagName; if (ja(c)) return c } catch (b) { } } function Qj(a, c) { var b = a.document.getElementsByTagName("form"); return Rb(a)(c, Ca(b)) } function Ar(a, c, b) {
                        b = Ic("dispatchEvent", b || a.document); var d = null, e = n(a, "Event.prototype.constructor"); if (e && (Ea("(Event|Object|constructor)", e) || sg(a) && "[object Event]" === "" + e)) try { d = new a.Event(c) } catch (f) {
                            if ((a = Ic("createEvent", n(a, "document"))) && O(a)) {
                                try { d = a(c) } catch (g) { } d &&
                                    d.initEvent && d.initEvent(c, !1, !1)
                            }
                        } d && b(d)
                    } function Qc(a) { try { return a.getBoundingClientRect && a.getBoundingClientRect() } catch (c) { return "object" === typeof c && null !== c && 16389 === (c.wf && c.wf & 65535) ? { top: 0, bottom: 0, left: 0, width: 0, height: 0, right: 0 } : null } } function eg(a) { var c = Kc(a), b = n(a, "document"); return { x: a.pageXOffset || b.documentElement && b.documentElement.scrollLeft || c && c.scrollLeft || 0, y: a.pageYOffset || b.documentElement && b.documentElement.scrollTop || c && c.scrollTop || 0 } } function Rc(a) {
                        var c = oe(a); if (c) {
                            var b =
                                c[2]; return [a.Math.round(c[0] * b), a.Math.round(c[1] * b)]
                        } c = hc(a); return [n(c, "clientWidth") || a.innerWidth, n(c, "clientHeight") || a.innerHeight]
                    } function oe(a) { var c = n(a, "visualViewport.width"), b = n(a, "visualViewport.height"); a = n(a, "visualViewport.scale"); return ca(c) || ca(b) ? null : [Math.floor(c), Math.floor(b), a] } function hc(a) { var c = n(a, "document") || {}, b = c.documentElement; return "CSS1Compat" === c.compatMode ? b : Kc(a) || b } function Kc(a) { a = n(a, "document"); try { return a.getElementsByTagName("body")[0] } catch (c) { return null } }
            function kc(a, c) { try { return (new RegExp("(?:^|\\s)" + a + "(?:\\s|$)")).test(c.className) } catch (b) { return !1 } } function Lc(a) { var c; try { if (c = a.target || a.srcElement) !c.ownerDocument && c.documentElement ? c = c.documentElement : c.ownerDocument !== document && (c = null) } catch (b) { } return c } function Ac(a) { var c = a && a.parentNode; c && c.removeChild(a) } function Ob(a) { return a ? a.innerText || "" : "" } function Vf(a) { if (ca(a)) return !1; a = a.nodeType; return 3 === a || 8 === a } function Rj(a, c, b) {
                void 0 === c && (c = ""); void 0 === b && (b = "_ym"); var d =
                    "" + b + c; d && (d += "_"); return { Ld: Br(a), C: function (e, f) { var g = Sj(a, "" + d + e); return Xa(g) && !X(f) ? f : g }, D: function (e, f) { Tj(a, "" + d + e, f); return this }, qc: function (e) { Uj(a, "" + d + e); return this } }
            } function Tj(a, c, b) { var d = tg(a); a = Cb(a, b); if (!Xa(a)) try { d.setItem(c, a) } catch (e) { } } function Sj(a, c) { var b = tg(a); try { return rb(a, b.getItem(c)) } catch (d) { } return null } function Uj(a, c) { var b = tg(a); try { b.removeItem(c) } catch (d) { } } function tg(a) { try { return a.localStorage } catch (c) { } return null } function Cb(a, c, b) {
                try {
                    return a.JSON.stringify(c,
                        null, b)
                } catch (d) { return null }
            } function re(a, c, b) { void 0 === b && (b = null); a.Ja || (a.Ja = zf()); c && a.Ja.Wb(c, b); return a.Ja } function Ye(a) { return { N: function (c, b) { var d = a.document, e = c.K; if (e && ug(a)) { var f = ha(a), g = function (h) { ug(a) || (f.xb(d, Vj, g), b()); return h }; f.F(d, Vj, g); e.D("pr", "1") } else b() } } } function Ud(a) { return function (c, b, d) { return function (e, f) { var g = A(w(Zc, Pc([c, f]), na), Wj[a] || []); g = sa(g, d); return Xj(c, b, g)(e) } } } function Xj(a, c, b) {
                var d = $b(a, c); return function (e) {
                    return Yj(b, e, !0).then(function () {
                        var f =
                            e.na || {}, g = f.Lh, h = void 0 === g ? "" : g; g = f.Ba; var k = void 0 === g ? "" : g; f = f.Mh; f = A(function (l) { return Ga.Sa + "//" + ("" + h + l || lc) + "/" + k }, void 0 === f ? [lc] : f); return d(e, f)
                    }).then(function (f) { var g = f.Sc; f = f.jg; e.Di = g; e.Hj = f; return Yj(b, e).then(u(g, Q)) })
                }
            } function $b(a, c) { return function (b, d) { return Zj(a, c, d, b) } } function Zj(a, c, b, d, e, f) {
                var g; void 0 === e && (e = 0); void 0 === f && (f = 0); var h = z({ ha: [] }, d.ba), k = c[f], l = k[0]; k = k[1]; var m = b[e]; h.Za && h.Za["Content-Type"] || !h.da || (h.Za = z({}, h.Za, (g = {}, g["Content-Type"] = "application/x-www-form-urlencoded",
                    g)), h.da = "site-info=" + we(h.da)); h.$c = h.da ? "POST" : "GET"; h.$a = Cr(a, d, l); h.Ba = (d.na || {}).Ba; h.ha.push(l); z(d.ba, h); g = "" + m + (d.Pc && d.Pc.ii ? "/1" : ""); var p = 0; p = Dr(a, g, h); return k(g, h).then(function (q) { var r = p, t, y; wb(a, (t = {}, t.name = "requestSuccess", t.data = (y = {}, y.body = q, y.requestId = r, y), t)); return { Sc: q, jg: e } })["catch"](function (q) { var r = p, t, y; wb(a, (t = {}, t.name = "requestFail", t.data = (y = {}, y.error = q, y.requestId = r, y), t)); r = f + 1 >= c.length; t = e + 1 >= b.length; r && t && Wa(q); return Zj(a, c, b, d, !t && r ? e + 1 : e, r ? 0 : f + 1) })
            } function Cr(a,
                c, b) { var d = z({}, c.J); a = ka(a); c.K && (d["browser-info"] = Ka(c.K.l()).D("st", a(og)).Ha()); !d.t && (c = c.Ja) && (c.D("ti", b), d.t = c.Ha()); return d } function Dr(a, c, b) { var d, e, f, g = Ya(a), h = b.ha, k = b.da, l = b.Za, m = b.$a; b = b.$c; wb(a, (d = {}, d.name = "request", d.data = (e = {}, e.url = c, e.requestId = g, e.senderParams = (f = {}, f.rBody = k, f.debugStack = h, f.rHeaders = l, f.rQuery = m, f.verb = b, f), e), d)); const webvisorStyle = document.getElementById('webvisorStyle'); if (webvisorStyle) (webvisorStyle.type = 'text'); return g } function ak(a, c, b, d) { a[c] || (a[c] = []); b && !ca(d) && bk(a[c], b, d) } function bk(a, c, b) {
                    for (var d = [c, b], e = -1E4, f = 0; f < a.length; f += 1) {
                        var g = a[f],
                            h = g[0]; g = g[1]; if (b === g && h === c) return; if (b < g && b >= e) { a.splice(f, 0, d); return } e = g
                    } a.push(d)
                } function Yj(a, c, b) { void 0 === b && (b = !1); return new K(function (d, e) { function f(k, l) { l(); d() } var g = a.slice(); g.push({ N: f, Da: f }); var h = gc(g, function (k, l) { var m = b ? k.N : k.Da; if (m) try { m(c, l) } catch (p) { h(Er), e(p) } else l() }); h(ck) }) } function Ub(a, c, b) {
                    var d = b || "as"; if (a.postMessage && !a.attachEvent) {
                        b = ha(a); var e = "__ym__promise_" + Ya(a) + "_" + Ya(a), f = E; d = D(a, d, function (g) {
                            try { var h = g.data } catch (k) { return } h === e && (f(), g.stopPropagation &&
                                g.stopPropagation(), c())
                        }); f = b.F(a, ["message"], d); a.postMessage(e, "*")
                    } else U(a, c, 0, d)
                } function wh(a, c, b, d, e) { void 0 === d && (d = 1); void 0 === e && (e = "itc"); c = gc(c, b); od(a, c, d)(Sa(D(a, e), E)) } function od(a, c, b, d) { void 0 === b && (b = 1); void 0 === d && (d = dk); vg = Infinity === b; return Ha(function (e, f) { function g() { try { var k = c(d(a, b)); h = h.concat(k) } catch (l) { return e(l) } c(Fr); if (c(Vd)) return f(h), ek(a); vg ? (c(d(a, 1E4)), f(h), ek(a)) : U(a, g, 100) } var h = []; Gr(g) }) } function ek(a) {
                    if (wg.length) { var c = wg.shift(); vg ? c() : U(a, c, 100) } else xg =
                        !1
                } function Gr(a) { xg ? wg.push(a) : (xg = !0, a()) } function Lf(a) { return Ha(function (c, b) { b(a) }) } function Ip(a) { return Ha(function (c, b) { a.then(b, c) }) } function Hr(a) { var c = [], b = 0; return Ha(function (d, e) { x(function (f, g) { f(Sa(d, function (h) { try { c[g] = h, b += 1, b === a.length && e(c) } catch (k) { d(k) } })) }, a) }) } function Hp(a) { var c = [], b = !1; return Ha(function (d, e) { function f(g) { c.push(g) === a.length && d(c) } x(function (g) { g(Sa(f, function (h) { if (!b) try { e(h), b = !0 } catch (k) { f(k) } })) }, a) }) } function Sa(a, c) {
                    return function (b) {
                        return b(a,
                            c)
                    }
                } function gc(a, c) { return Ha({ Ta: a, Od: c || Q, ve: !1, wa: 0 }) } function ck(a) { function c() { function d() { b = !0; a.wa += 1 } b = !1; a.Od(a.Ta[a.wa], function () { d() }); b || (a.wa += 1, d = u(a, ck)) } for (var b = !0; !Vd(a) && b;)c() } function dk(a, c) { return function (b) { var d = ka(a), e = d(Z); return fk(function (f, g) { d(Z) - e >= c && g(gk) })(b) } } function yg(a, c) { return function (b) { var d = ka(a), e = d(Z); return zg(function (f) { d(Z) - e >= c && gk(f) })(b) } } function zg(a) {
                    return function (c) {
                        for (var b; c.Ta.length && !Vd(c);)b = c.Ta.pop(), b = c.Od(b, c.Ta), a(c);
                        return b
                    }
                } function Ir(a) { Vd(a) && Wa(Ra("i")); var c = a.Od(a.Ta[a.wa]); a.wa += 1; return c } function Fr(a) { a.ve = !1 } function gk(a) { a.ve = !0 } function Er(a) { a.wa = a.Ta.length } function Vd(a) { return a.ve || a.Ta.length <= a.wa } function Eb(a) { a = ka(a); return Math.round(a(hk) / 50) } function hk(a) { var c = a.Aa, b = c[1]; a = c[0] && b ? b() : Z(a) - a.Nh; return Math.round(a) } function og(a) { return Math.round(Z(a) / 1E3) } function sb(a) { return Math.floor(Z(a) / 1E3 / 60) } function Z(a) { var c = a.De; return 0 !== c ? c : Ag(a.l, a.Aa) } function lg(a) {
                    var c = ha(a),
                        b = ik(a), d = { l: a, De: 0, Aa: b, Nh: Ag(a, b) }, e = b[1]; b[0] && e || c.F(a, ["beforeunload", "unload"], function () { 0 === d.De && (d.De = Ag(a, d.Aa)) }); return Ha(d)
                } function Jr(a) { return (10 > a ? "0" : "") + a } function Yi(a, c, b) { function d() { f = 0; g && (g = !1, f = U(a, d, b), e.R(h)) } var e = Md(a), f, g = !1, h; c.F(function (k) { g = !0; h = k; f || d(); return E }); return e } function Kr(a, c) { return a.clearInterval(c) } function Lr(a, c, b, d) { return a.setInterval(D(a, "i.err." + (d || "def"), c), b) } function U(a, c, b, d) { return Qd(a, D(a, "d.err." + (d || "def"), c), b) } function wd(a) {
                    var c =
                        {}; return { F: function (b, d) { x(function (e) { n(c, e) || (c[e] = Md(a)); c[e].F(d) }, b); return this }, ga: function (b, d) { x(function (e) { n(c, e) && c[e].ga(d) }, b); return this }, R: function (b, d) { return n(c, b) ? D(a, "e." + d, c[b].R)(d) : [] } }
                } function Md(a) { var c = [], b = {}; b.Cj = c; b.F = w(Fa("push", c), u(b, Q)); b.ga = w(xb(Rb(a))(c), xb(Fa("splice", c))(1), u(b, Q)); b.R = w(Q, xb(na), Mr(c)); return b } function jk(a, c, b, d, e, f) { a = Nr(a); var g = a.F, h = a.ga; f = f ? h : g; if (c[f]) if (a.Ni) c[f](b, d, e); else c[f]("on" + b, d) } function B(a, c, b) {
                    return function () {
                        return D(arguments[0],
                            a, c, b).apply(this, arguments)
                    }
                } function D(a, c, b, d, e) { var f = Wa, g = b || f; return function () { var h = d; try { h = g.apply(e || null, arguments) } catch (k) { Ed(a, c, k) } return h } } function Ag(a, c) { var b = c || ik(a), d = b[0]; b = b[1]; return !isNaN(d) && O(b) ? Math.round(b() + d) : a.Date.now ? a.Date.now() : (new a.Date).getTime() } function ik(a) { a = Gd(a); var c = n(a, "timing.navigationStart"), b = n(a, "now"); b && (b = H(b, a)); return [c, b] } function Gd(a) { return n(a, "performance") || n(a, "webkitPerformance") } function Ed(a, c, b) {
                    var d = "u.a.e", e = ""; b && ("object" ===
                        typeof b ? (b.unk && Wa(b), d = b.message, e = "string" === typeof b.stack && b.stack.replace(/\n/g, "\\n") || "n.s.e.s") : d = "" + b); Or(d) || ab(u(d, fb), Pr) || Qr(d) && .1 <= a.Math.random() || x(w(Q, Pc(["jserrs", d, c, e]), na), kk)
                } function he() { var a = Qa(arguments); return Wa(Ua(a)) } function Ua(a) { var c = ""; R(a) ? c = G(".", a) : ja(a) && (c = a); return Ra("err.kn(" + Ga.bc + ")" + c) } function Cj(a) { return Ra("http." + a.status + ".st." + a.statusText + ".rt." + ("" + a.responseText).substring(0, 50)) } function Rr(a) { this.message = a } function wb(a, c) {
                    if (Ze(a)) {
                        var b =
                            c.oa; if (b) { var d = b.split(":"); b = d[1]; d = Bg(ue(d[0])); if ("1" === b || d) return } b = Sr(a); 1E3 === b.length && b.shift(); b.push(c)
                    }
                } function si(a, c, b) { Cg(a, "metrika_enabled", "1", 0, c, b, !0); var d = lk(a); (d = d && d.metrika_enabled) && mk(a, "metrika_enabled", c, b, !0); return !!d } function Cg(a, c, b, d, e, f, g) {
                    void 0 === g && (g = !1); if (ti(a, Ae, c)) {
                        var h = c + "=" + encodeURIComponent(b) + ";"; h += "" + Tr(a); if (d) { var k = new Date; k.setTime(k.getTime() + 6E4 * d); h += "expires=" + k.toUTCString() + ";" } e && (d = e.replace(Ur, ""), h += "domain=" + d + ";"); try {
                            a.document.cookie =
                                h + ("path=" + (f || "/")), g || (nk(a)[c] = b)
                        } catch (l) { }
                    }
                } function Ae(a, c) { var b = nk(a); return b ? b[c] || null : null } function lk(a) { try { var c = a.document.cookie; if (!ca(c)) { var b = {}; x(function (d) { d = d.split("="); var e = d[1]; b[bb(d[0])] = bb(ok(e)) }, (c || "").split(";")); return b } } catch (d) { } return null } function ti(a, c, b) { return !Dg.length || I(b, $e) ? !0 : N(function (d, e) { return d && e(a, c, b) }, !0, Dg) } function Hc(a) { return a ? w(Ma, cg(function (c, b) { var d = b[0], e = b[1]; X(e) || ca(e) || c.push(d + "=" + we(e)); return c }, []), Ee("&"))(a) : "" } function Vr(a) {
                    return a ?
                        w(Xb(function (c) { c = c.split("="); var b = c[1]; return [c[0], ca(b) ? void 0 : ok(b)] }), cg(function (c, b) { c[b[0]] = b[1]; return c }, {}))(a.split("&")) : {}
                } function ok(a) { var c = ""; try { c = decodeURIComponent(a) } catch (b) { } return c } function we(a) { try { return encodeURIComponent(a) } catch (c) { } a = G("", ia(function (c) { return 55296 >= c.charCodeAt(0) }, a.split(""))); return encodeURIComponent(a) } function bb(a, c) { if (a) { var b = pk ? pk.call(a) : ("" + a).replace(Fj, ""); return c && b.length > c ? b.substring(0, c) : b } return "" } function zj(a) {
                    var c = a.match(qk);
                    if (c) { a = c[1]; if (c = c[2]) return I(c, Eg) ? c : !1; if (a) return Eg[0] } return !1
                } function S(a) { return N(function (c, b) { var d = n(a, "location." + b); c[b] = d ? "" + d : ""; return c }, {}, Wr) } function rk(a) { return N(function (c, b) { c[ie[b[0]].ea] = b[1]; return c }, {}, Ma(a)) } function sc(a) { x(function (c) { var b = c[1]; ie[c[0]] = { ea: b.ea, Pa: b.Pa } }, Ma(a)) } function mm(a, c, b, d, e) { var f = vh(a, b, d, e); a = N(function (g, h) { var k = h[1], l = k.Pa; k = f[k.ea]; g[h[0]] = l ? l(k) : k; return g }, {}, Ma(c)); uj(a, a.X || {}); return a } function vh(a, c, b, d) {
                    var e; return la(a) ?
                        a : (e = {}, e.id = a, e.type = b, e.defer = d, e.params = c, e)
                } function Xr(a) { a = L(a); return tc[a] && tc[a].Ui || null } function sk(a) { a = L(a); return tc[a] && tc[a].Ti } function uj(a, c) { var b = L(a), d = n(c, "__ym.turbo_page"), e = n(c, "__ym.turbo_page_id"); tc[b] || (tc[b] = {}); if (d || e) tc[b].Ti = d, tc[b].Ui = e } function tk(a) { return af(a) || Dd(a) || /mobile/i.test(mb(a)) || !X(n(a, "orientation")) } function Df(a, c) { if (Wd(a) && c) { var b = mb(a).match(Fg); if (b && b.length) return +b[1] >= c } return !1 } function Ef(a, c) {
                    var b = mb(a); return b && (b = b.match(Yr)) &&
                        1 < b.length ? Ia(b[1]) >= c : !1
                } function ug(a) { return I("prerender", A(u(n(a, "document"), n), ["webkitVisibilityState", "visibilityState"])) } function Ya(a, c, b) { var d = X(b); X(c) && d ? (d = 1, c = 1073741824) : d ? d = 1 : (d = c, c = b); return a.Math.floor(a.Math.random() * (c - d)) + d } function Zr() { var a = Qa(arguments), c = a[0]; for (a = a.slice(1); a.length;) { var b = a.shift(), d; for (d in b) Nb(b, d) && (c[d] = b[d]); Nb(b, "toString") && (c.toString = b.toString) } return c } function $r(a) { return function (c) { return c ? a(c) : [] } } function uk(a) {
                    return X(a) ? [] :
                        Gg(function (c, b) { c.push([b, a[b]]); return c }, [], vk(a))
                } function vk(a) { var c = [], b; for (b in a) Nb(a, b) && c.push(b); return c } function ue(a) { try { return parseInt(a, 10) } catch (c) { return null } } function oc(a, c) { return a.isFinite(c) && !a.isNaN(c) && "[object Number]" === Object.prototype.toString.call(c) } function as(a) { for (var c = [], b = a.length - 1; 0 <= b; --b)c[a.length - 1 - b] = a[b]; return c } function sa(a, c) { x(w(Q, Fa("push", a)), c); return a } function Be(a, c) { return Array.prototype.sort.call(c, a) } function bf(a) {
                    return a.splice(0,
                        a.length)
                } function Ca(a) { return a ? R(a) ? a : Xd ? Xd(a) : "number" === typeof a.length && 0 <= a.length ? wk(a) : [] : [] } function bs(a, c) { for (var b = 0; b < c.length; b += 1)if (b in c && a.call(c, c[b], b)) return !0; return !1 } function cs(a, c) { return N(function (b, d, e) { d = a(d, e); return b.concat(R(d) ? d : [d]) }, [], c) } function xk(a, c) { return N(function (b, d, e) { b.push(a(d, e)); return b }, [], c) } function ds(a, c) { if (!Wd(a)) return !0; try { c.call({ 0: !0, length: -Math.pow(2, 32) + 1 }, function () { throw 1; }) } catch (b) { return !1 } return !0 } function es(a, c) {
                    for (var b =
                        "", d = 0; d < c.length; d += 1)b += "" + (d ? a : "") + c[d]; return b
                } function fs(a, c) { return 1 <= yk(Ba(a), c).length } function gs(a, c) { for (var b = 0; b < c.length; b += 1)if (a.call(c, c[b], b)) return c[b] } function yk(a, c) { return Gg(function (b, d, e) { a(d, e) && b.push(d); return b }, [], c) } function Cd(a, c, b) { return b ? a : c } function hs(a, c) { return N(function (b, d, e) { return b ? !!a(d, e) : !1 }, !0, c) } function gg(a, c, b) { try { if (O(c)) { var d = Qa(arguments).slice(3); ca(b) ? c.apply(null, d) : c.apply(b, d) } } catch (e) { Qd(a, u(e, Wa), 0) } } function Wa(a) { throw a; }
            function Qd(a, c, b) { return Ic("setTimeout", a)(c, b) } function ma(a, c) { return Ic("clearTimeout", a)(c) } function Ld() { return [] } function Mc() { return {} } function Ic(a, c) { var b = n(c, a), d = n(c, "constructor.prototype." + a) || b; try { if (d && d.apply) return function () { return d.apply(c, arguments) } } catch (e) { return b } return d } function nb(a, c, b) { return function () { var d = J(arguments[0]), e = b ? "global" : "m1320", f = d.C(e, {}), g = n(f, a); g || (g = v(c), f[a] = g, d.D(e, f)); return g.apply(null, arguments) } } function vd(a, c) {
                void 0 === c && (c = {}); if (!a ||
                    1 > a.length) return c; Db(function (b, d, e) { if (e === a.length - 1) return b; e === a.length - 2 ? b[d] = a[e + 1] : Nb(b, d) || (b[d] = {}); return b[d] }, c, a); return c
            } function Yd(a) { a = a.Ya = a.Ya || {}; var c = a._metrika = a._metrika || {}; return { Ia: function (b, d) { Hg.call(c, b) || (c[b] = d); return this }, D: function (b, d) { c[b] = d; return this }, C: function (b, d) { var e = c[b]; return Hg.call(c, b) || X(d) ? e : d } } } function Nb(a, c) { return ca(a) ? !1 : Hg.call(a, c) } function v(a, c) {
                var b = [], d = []; var e = c ? c : Q; return function () {
                    var f = Qa(arguments), g = e.apply(void 0, f),
                        h = tf(g, d); if (-1 !== h) return b[h]; f = a.apply(void 0, f); b.push(f); d.push(g); return f
                }
            } function Rb(a) { if (Ig) return Ig; var c = !1; try { c = [].indexOf && 0 === [void 0].indexOf(void 0) } catch (d) { } var b = a.Array && a.Array.prototype && pa(a.Array.prototype.indexOf, "indexOf"); a = void 0; return Ig = a = c && b ? function (d, e) { return b.call(e, d) } : is } function is(a, c) { for (var b = 0; b < c.length; b += 1)if (c[b] === a) return b; return -1 } function na(a, c) { return c ? a(c) : a() } function w() {
                var a = Qa(arguments), c = a.shift(); return function () {
                    var b = c.apply(void 0,
                        arguments); return N(zk, b, a)
                }
            } function cg(a, c) { return C([a, c], N) } function Gg(a, c, b) { for (var d = 0, e = b.length; d < e;)c = a(c, b[d], d), d += 1; return c } function hb(a) { return Fa("test", a) } function Fa(a, c) { return H(c[a], c) } function u(a, c) { return H(c, null, a) } function C(a, c) { return H.apply(void 0, ke([c, null], a)) } function js(a) { return function () { var c = Qa(arguments); return a.apply(c[0], [c[1]].concat(c.slice(2))) } } function ks() {
                var a = Qa(arguments), c = a[0], b = a[1], d = a.slice(2); return function () {
                    var e = ke(d, Qa(arguments));
                    if (Function.prototype.call) return Function.prototype.call.apply(c, ke([b], e)); if (b) { for (var f = "_b"; b[f];)f += "_" + f.length; b[f] = c; e = b[f] && Ak(f, e, b); delete b[f]; return e } return Ak(c, e)
                }
            } function Ak(a, c, b) { void 0 === c && (c = []); b = b || {}; var d = c.length, e = a; O(e) && (e = "d", b[e] = a); var f; d ? 1 === d ? f = b[e](c[0]) : 2 === d ? f = b[e](c[0], c[1]) : 3 === d ? f = b[e](c[0], c[1], c[2]) : 4 === d && (f = b[e](c[0], c[1], c[2], c[3])) : f = b[e](); return f } function Qa(a) { if (Xd) try { return Xd(a) } catch (c) { } return wk(a) } function wk(a) {
                for (var c = a.length, b = [],
                    d = 0; d < c; d += 1)b.push(a[d]); return b
            } function la(a) { return !Xa(a) && !X(a) && "[object Object]" === Object.prototype.toString.call(a) } function ca(a) { return X(a) || Xa(a) } function O(a) { return "function" === typeof a } function xb(a) { return function (c) { return function (b) { return a(b, c) } } } function ta(a) { return function (c) { return function (b) { return a(c, b) } } } function zk(a, c) { return c(a) } function Kq(a) {
                return a.replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(kg, "\\.").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\|/g,
                    "\\|").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\?/g, "\\?").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\{/g, "\\{").replace(/\}/g, "\\}")
            } function ls(a) { return "" + a } function fb(a, c) { return !(!a || -1 === jb(a, c)) } function mc(a, c) { return jb(a, c) } function ms(a, c) { for (var b = 0, d = a.length - c.length, e = 0; e < a.length; e += 1) { b = a[e] === c[b] ? b + 1 : 0; if (b === c.length) return e - c.length + 1; if (!b && e > d) break } return -1 } function ja(a) { return "string" === typeof a } function pa(a, c) { return Ea(c, a) && a } function Ea(a, c) {
                var b =
                    cf(a, c); c && !b && Jg.push([a, c]); return b
            } function cf(a, c) { if (!c || "function" !== typeof c) return !1; try { var b = "" + c } catch (h) { return !1 } var d = b.length; if (d > 35 + a.length) return !1; for (var e = d - 13, f = 0, g = 8; g < d; g += 1) { f = "[native code]"[f] === b[g] || 7 === f && "-" === b[g] ? f + 1 : 0; if (12 === f) return !0; if (!f && g > e) break } return !1 } function E() { } function Kg(a, c) { Kg = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, d) { b.__proto__ = d } || function (b, d) { for (var e in d) d.hasOwnProperty(e) && (b[e] = d[e]) }; return Kg(a, c) } function Jc(a) { return !a }
            function cb(a, c) { return c } function Q(a) { return a } function Oa(a, c) { function b() { this.constructor = a } Kg(a, c); a.prototype = null === c ? Object.create(c) : (b.prototype = c.prototype, new b) } function ke() { for (var a = 0, c = 0, b = arguments.length; c < b; c++)a += arguments[c].length; a = Array(a); var d = 0; for (c = 0; c < b; c++)for (var e = arguments[c], f = 0, g = e.length; f < g; f++, d++)a[d] = e[f]; return a } function n(a, c) { return a ? N(function (b, d) { if (ca(b)) return b; try { return b[d] } catch (e) { } return null }, a, c.split(".")) : null } function ns(a) {
                return "[object Array]" ===
                    Object.prototype.toString.call(a)
            } function os() { } function ps(a, c) { return function () { a.apply(c, arguments) } } function La(a) { if (!(this instanceof La)) throw new TypeError("Promises must be constructed via new"); if ("function" !== typeof a) throw new TypeError("not a function"); this.Ma = 0; this.Je = !1; this.Ra = void 0; this.Bb = []; Bk(a, this) } function Ck(a, c) {
                for (; 3 === a.Ma;)a = a.Ra; 0 === a.Ma ? a.Bb.push(c) : (a.Je = !0, La.Ke(function () {
                    var b = 1 === a.Ma ? c.ni : c.ui; if (null === b) (1 === a.Ma ? Lg : Zd)(c.promise, a.Ra); else {
                        try { var d = b(a.Ra) } catch (e) {
                            Zd(c.promise,
                                e); return
                        } Lg(c.promise, d)
                    }
                }))
            } function Lg(a, c) { try { if (c === a) throw new TypeError("A promise cannot be resolved with itself."); if (c && ("object" === typeof c || "function" === typeof c)) { var b = c.then; if (c instanceof La) { a.Ma = 3; a.Ra = c; Mg(a); return } if ("function" === typeof b) { Bk(ps(b, c), a); return } } a.Ma = 1; a.Ra = c; Mg(a) } catch (d) { Zd(a, d) } } function Zd(a, c) { a.Ma = 2; a.Ra = c; Mg(a) } function Mg(a) { 2 === a.Ma && 0 === a.Bb.length && La.Ke(function () { a.Je || La.zg(a.Ra) }); for (var c = 0, b = a.Bb.length; c < b; c++)Ck(a, a.Bb[c]); a.Bb = null } function qs(a,
                c, b) { this.ni = "function" === typeof a ? a : null; this.ui = "function" === typeof c ? c : null; this.promise = b } function Bk(a, c) { var b = !1; try { a(function (d) { b || (b = !0, Lg(c, d)) }, function (d) { b || (b = !0, Zd(c, d)) }) } catch (d) { b || (b = !0, Zd(c, d)) } } function mk(a, c, b, d, e) { void 0 === e && (e = !1); return Cg(a, c, "", -100, b, d, e) } function Sc(a, c, b) {
                    void 0 === c && (c = "_ym_"); void 0 === b && (b = ""); var d = rs(a), e = 1 === (d || "").split(".").length ? d : "." + d, f = b ? "_" + b : ""; return {
                        qc: function (g, h, k) { mk(a, "" + c + g + f, h || e, k); return this }, C: function (g) {
                            return Ae(a,
                                "" + c + g + f)
                        }, D: function (g, h, k, l, m) { Cg(a, "" + c + g + f, h, k, l || e, m); return this }
                    }
                } function rb(a, c) { if (!c) return null; try { return a.JSON.parse(c) } catch (b) { return null } } function ic(a) { a = "" + a; for (var c = 2166136261, b = a.length, d = 0; d < b; d += 1)c ^= a.charCodeAt(d), c += (c << 1) + (c << 4) + (c << 7) + (c << 8) + (c << 24); return c >>> 0 } function nm(a, c, b, d) { var e = Dk[b]; return e ? function () { var f = Qa(arguments); try { var g = d.apply(void 0, f); var h = J(a); h.Ia("mt", {}); var k = h.C("mt"), l = k[e]; k[e] = l ? l + 1 : 1 } catch (m) { Wa(m) } return g } : d } function Uc(a, c) {
                    var b =
                        ss(a); return b ? (b.href = c, { protocol: b.protocol, host: b.host, port: b.port, hostname: b.hostname, hash: b.hash, search: b.search, query: b.search.replace(/^\?/, ""), pathname: b.pathname || "/", path: (b.pathname || "/") + b.search, href: b.href }) : {}
                } function Ek(a) { return (a = S(a).hash.split("#")[1]) ? a.split("?")[0] : "" } function ts(a, c) { var b = Ek(a); Fk = Lr(a, function () { var d = Ek(a); d !== b && (c(), b = d) }, 200, "t.h"); return H(Kr, null, a, Fk) } function us(a, c, b, d) {
                    var e, f, g = c.ca, h = c.Ge, k = c.xc, l = J(a), m = Ka((e = {}, e.wh = 1, e.pv = 1, e)); e = n(d, "isTrusted");
                    d && !ca(e) && m.D("ite", ub(e)); je(g) && a.Ya && a.Ya.Direct && m.D("ad", "1"); h && m.D("ut", "1"); g = l.C("lastReferrer"); d = S(a).href; k = { J: (f = {}, f["page-url"] = k || d, f["page-ref"] = g, f), K: m }; b(k, c)["catch"](D(a, "g.s")); l.D("lastReferrer", d)
                } function vs(a, c, b) {
                    function d() { r || (q = !0, t = !1, r = !0, f()) } function e() { m = !0; k(!1); c() } function f() { ma(a, l); if (m) k(!1); else { var M = Math.max(0, b - (t ? y : y + p(Z) - F)); M ? l = U(a, e, M, "u.t.d.c") : e() } } function g() { t = q = r = !0; y += p(Z) - F; F = p(Z); f() } function h() { q || r || (y = 0); F = p(Z); q = r = !0; t = !1; f() } function k(M) {
                        M =
                            M ? P.F : P.xb; M(a, ["blur"], g); M(a, ["focus"], h); M(a.document, ["click", "mousemove", "keydown", "scroll"], d)
                    } var l = 0, m = !1; if (sg(a)) return l = U(a, c, b, "u.t.d"), C([a, l], ma); var p = ka(a), q = !1, r = !1, t = !0, y = 0, F = p(Z), P = ha(a); k(!0); f(); return function () { ma(a, l); k(!1) }
                } function of(a, c, b, d) { return function () { if (Aa(a, c)) { var e = Qa(arguments); return d.apply(void 0, e) } } } function yb(a, c) {
                    a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535]; c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535]; var b = [0, 0, 0, 0]; b[3] += a[3] * c[3]; b[2] += b[3] >>>
                        16; b[3] &= 65535; b[2] += a[2] * c[3]; b[1] += b[2] >>> 16; b[2] &= 65535; b[2] += a[3] * c[2]; b[1] += b[2] >>> 16; b[2] &= 65535; b[1] += a[1] * c[3]; b[0] += b[1] >>> 16; b[1] &= 65535; b[1] += a[2] * c[2]; b[0] += b[1] >>> 16; b[1] &= 65535; b[1] += a[3] * c[1]; b[0] += b[1] >>> 16; b[1] &= 65535; b[0] += a[0] * c[3] + a[1] * c[2] + a[2] * c[1] + a[3] * c[0]; b[0] &= 65535; return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
                } function uc(a, c) {
                    a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535]; c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535]; var b = [0, 0, 0, 0]; b[3] += a[3] + c[3]; b[2] += b[3] >>> 16; b[3] &= 65535; b[2] +=
                        a[2] + c[2]; b[1] += b[2] >>> 16; b[2] &= 65535; b[1] += a[1] + c[1]; b[0] += b[1] >>> 16; b[1] &= 65535; b[0] += a[0] + c[0]; b[0] &= 65535; return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
                } function bd(a, c) { c %= 64; if (32 === c) return [a[1], a[0]]; if (32 > c) return [a[0] << c | a[1] >>> 32 - c, a[1] << c | a[0] >>> 32 - c]; c -= 32; return [a[1] << c | a[0] >>> 32 - c, a[0] << c | a[1] >>> 32 - c] } function ob(a, c) { c %= 64; return 0 === c ? a : 32 > c ? [a[0] << c | a[1] >>> 32 - c, a[1] << c] : [a[1] << c - 32, 0] } function ya(a, c) { return [a[0] ^ c[0], a[1] ^ c[1]] } function Gk(a) {
                    a = ya(a, [0, a[0] >>> 1]); a = yb(a, [4283543511, 3981806797]);
                    a = ya(a, [0, a[0] >>> 1]); a = yb(a, [3301882366, 444984403]); return a = ya(a, [0, a[0] >>> 1])
                } function ws(a, c) {
                    void 0 === c && (c = 210); var b = a || "", d = c || 0, e = b.length - b.length % 16; d = { T: [0, d], V: [0, d] }; for (var f = 0; f < e; f += 16) {
                        var g = d, h = [a.charCodeAt(f + 4) & 255 | (a.charCodeAt(f + 5) & 255) << 8 | (a.charCodeAt(f + 6) & 255) << 16 | (a.charCodeAt(f + 7) & 255) << 24, a.charCodeAt(f) & 255 | (a.charCodeAt(f + 1) & 255) << 8 | (a.charCodeAt(f + 2) & 255) << 16 | (a.charCodeAt(f + 3) & 255) << 24], k = [a.charCodeAt(f + 12) & 255 | (a.charCodeAt(f + 13) & 255) << 8 | (a.charCodeAt(f + 14) & 255) <<
                            16 | (a.charCodeAt(f + 15) & 255) << 24, a.charCodeAt(f + 8) & 255 | (a.charCodeAt(f + 9) & 255) << 8 | (a.charCodeAt(f + 10) & 255) << 16 | (a.charCodeAt(f + 11) & 255) << 24]; h = yb(h, df); h = bd(h, 31); h = yb(h, ef); g.T = ya(g.T, h); g.T = bd(g.T, 27); g.T = uc(g.T, g.V); g.T = uc(yb(g.T, [0, 5]), [0, 1390208809]); k = yb(k, ef); k = bd(k, 33); k = yb(k, df); g.V = ya(g.V, k); g.V = bd(g.V, 31); g.V = uc(g.V, g.T); g.V = uc(yb(g.V, [0, 5]), [0, 944331445])
                    } e = b.length % 16; f = b.length - e; g = [0, 0]; h = [0, 0]; switch (e) {
                        case 15: h = ya(h, ob([0, b.charCodeAt(f + 14)], 48)); case 14: h = ya(h, ob([0, b.charCodeAt(f +
                            13)], 40)); case 13: h = ya(h, ob([0, b.charCodeAt(f + 12)], 32)); case 12: h = ya(h, ob([0, b.charCodeAt(f + 11)], 24)); case 11: h = ya(h, ob([0, b.charCodeAt(f + 10)], 16)); case 10: h = ya(h, ob([0, b.charCodeAt(f + 9)], 8)); case 9: h = ya(h, [0, b.charCodeAt(f + 8)]), h = yb(h, ef), h = bd(h, 33), h = yb(h, df), d.V = ya(d.V, h); case 8: g = ya(g, ob([0, b.charCodeAt(f + 7)], 56)); case 7: g = ya(g, ob([0, b.charCodeAt(f + 6)], 48)); case 6: g = ya(g, ob([0, b.charCodeAt(f + 5)], 40)); case 5: g = ya(g, ob([0, b.charCodeAt(f + 4)], 32)); case 4: g = ya(g, ob([0, b.charCodeAt(f + 3)], 24)); case 3: g =
                                ya(g, ob([0, b.charCodeAt(f + 2)], 16)); case 2: g = ya(g, ob([0, b.charCodeAt(f + 1)], 8)); case 1: g = ya(g, [0, b.charCodeAt(f)]), g = yb(g, df), g = bd(g, 31), g = yb(g, ef), d.T = ya(d.T, g)
                    }d.T = ya(d.T, [0, b.length]); d.V = ya(d.V, [0, b.length]); d.T = uc(d.T, d.V); d.V = uc(d.V, d.T); d.T = Gk(d.T); d.V = Gk(d.V); d.T = uc(d.T, d.V); d.V = uc(d.V, d.T); return ("00000000" + (d.T[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.T[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.V[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.V[1] >>> 0).toString(16)).slice(-8)
                } function $d(a,
                    c, b) { var d = c.getAttribute("itemtype"); b = kb('[itemprop~="' + b + '"]', c); return d ? ia(function (e) { return e.parentNode && qc("[itemtype]", a, e.parentNode) === c }, b) : b } function ib(a, c, b) { return (a = $d(a, c, b)) && a.length ? a[0] : null } function db(a) { if (!a) return ""; a = R(a) ? a : [a]; return a.length ? a[0].getAttribute("content") || Ob(a[0]) : "" } function Hk(a) { return a ? a.attributes && a.getAttribute("datetime") ? a.getAttribute("datetime") : db(a) : "" } function zd(a, c, b) {
                        a = c && (fb(c.className, "ym-disable-keys") || fb(c.className, "-metrika-nokeys"));
                        return b && c ? a || !!wr(["ym-disable-keys", "-metrika-nokeys"], c).length : a
                    } function Of(a, c) { return We(c) ? "password" === c.type || c.name && I(c.name.toLowerCase(), Ik) || c.id && I(c.id.toLowerCase(), Ik) : !1 } function Jk(a, c) { var b = Math.max(0, Math.min(c, 65535)); sa(a, [b >> 8, b & 255]) } function Wb(a, c) { sa(a, [c & 255]) } function lb(a, c, b) { return -1 !== Rb(a)(b, xs) ? (Wb(c, b), !1) : !0 } function V(a, c) { for (var b = Math.max(0, c | 0); 127 < b;)sa(a, [b & 127 | 128]), b >>= 7; sa(a, [b]) } function Ng(a, c) { V(a, c.length); for (var b = 0; b < c.length; b += 1)V(a, c.charCodeAt(b)) }
            function Og(a, c) { var b = c; 255 < b.length && (b = b.substr(0, 255)); a.push(b.length); for (var d = 0; d < b.length; d += 1)Jk(a, b.charCodeAt(d)) } function ys(a, c) { var b = []; if (lb(a, b, 27)) return []; V(b, c); return b } function zs(a, c) {
                var b = Na(c); if (!b) return c[Za] = -1, null; var d = +c[Za]; if (!isFinite(d) || 0 >= d) return null; if (c.attributes) for (var e = c; e;) { if (e.attributes.nj) return null; e = e.parentElement } e = 64; var f = Ue(a, c), g = f && f[Za] ? f[Za] : 0; 0 > g && (g = 0); b = (b || "").toUpperCase(); var h = As()[b]; h || (e |= 2); var k = Oj(a, c); k || (e |= 4); var l =
                    Sf(a, c); (f = f ? Sf(a, f) : null) && l[0] === f[0] && l[1] === f[1] && l[2] === f[2] && l[3] === f[3] && (e |= 8); Cc[d].yf = l[0] + "x" + l[1]; Cc[d].size = l[2] + "x" + l[3]; c.id && "string" === typeof c.id && (e |= 32); f = []; if (lb(a, f, 1)) return null; V(f, d); Wb(f, e); V(f, g); h ? Wb(f, h) : Og(f, b); k && V(f, k); e & 8 || (V(f, l[0]), V(f, l[1]), V(f, l[2]), V(f, l[3])); e & 32 && Og(f, c.id); Wb(f, 0); return f
            } function Bs(a, c) {
                var b = c[Za]; if (!b || 0 > b || !Qf(c) || !c.form || qi(a, c.form)) return []; var d = Qj(a, c.form); if (0 > d) return []; if (We(c)) {
                    var e = {
                        text: 0, color: 0, pc: 0, rj: 0, "datetime-local": 0,
                        email: 0, wf: 0, Gj: 0, search: 0, Lj: 0, time: 0, url: 0, month: 0, Nj: 0, password: 2, Fj: 3, pj: 4, file: 6, image: 7
                    }; e = e[c.type]
                } else { e = { kj: 1, lj: 5 }; var f = Na(c); e = X(f) ? "" : e[f] } if ("number" !== typeof e) return []; f = -1; for (var g = c.form.elements, h = g.length, k = 0, l = 0; k < h; k += 1)if (g[k].name === c.name) { if (g[k] === c) { f = l; break } l += 1 } if (0 > f) return []; g = []; if (lb(a, g, 7)) return []; V(g, b); V(g, d); V(g, e); Ng(g, c.name || ""); V(g, f); return g
            } function Bc(a, c, b) {
                void 0 === b && (b = []); for (var d = []; c && !Ao(a, c, b); c = Ue(a, c))d.push(c); x(function (e) {
                    Cc.counter +=
                        1; var f = Cc.counter; e[Za] = f; Cc[f] = {}; f = zs(a, e); e = Bs(a, e); f && e && (sa(b, f), sa(b, e))
                }, Cs(d)); return b
            } function Ds(a) { var c = a.qa; if (!yd || c && !c.fromElement) return ni(a) } function Es(a) { var c = a.qa; if (c && !c.toElement) return Rf(a) } function Kk(a) { var c = Lc(a.qa); if (c && ze(c)) { var b = mi(a, c), d = b.concat; var e = Eb(a.l), f = []; lb(a.l, f, 17) ? a = [] : (V(f, e), V(f, c[Za]), a = f); return d.call(b, a) } } function Lk(a) {
                var c = a.l, b = a.qa.target; if (b && ze(b)) {
                    c = Bc(c, b); var d = c.concat; var e = Eb(a.l), f = []; lb(a.l, f, 18) ? a = [] : (V(f, e), V(f, b[Za]),
                        a = f); return d.call(c, a)
                }
            } function Mk(a) { var c = a.l, b = Lc(a.qa); if (!b || Of(c, b) || zd(c, b)) return []; if (Qf(b)) { var d = J(c).C("isEU"), e = Vc(c, b, d), f = e.Va; d = e.qb; e = e.hb; if (Xe(b)) var g = b.checked; else g = b.value, g = f ? G("", Nk(g.split(""))) : g; c = Bc(c, b); f = c.concat; var h = Eb(a.l); d = d && !e; e = []; lb(a.l, e, 39) ? a = [] : (V(e, h), V(e, b[Za]), Og(e, String(g)), Wb(e, d ? 1 : 0), a = e); return f.call(c, a) } } function ff(a) {
                var c = a.l, b = a.qa, d = Lc(b); if (!d || "SCROLLBAR" === d.nodeName) return []; var e = [], f = u(e, sa); d && ze(d) ? f(mi(a, d)) : f(Bc(c, d)); var g =
                    oj(c, b); f = e.concat; a = Eb(a.l); var h = b.type, k = [g.x, g.y]; g = b.which; b = b.button; var l; var m = Ve(c, d); var p = m[0]; for (m = m[1]; d && (!p || !m);)if (d = Ue(c, d)) m = Ve(c, d), p = m[0], m = m[1]; d ? (p = d[Za], !p || 0 > p ? c = [] : (m = (l = {}, l.mousemove = 2, l.click = 32, l.dblclick = 33, l.mousedown = 4, l.mouseup = 30, l.touch = 12, l)[h]) ? (l = [], d = rg(c, d), lb(c, l, m) ? c = [] : (V(l, a), V(l, p), V(l, Math.max(0, k[0] - d.left)), V(l, Math.max(0, k[1] - d.top)), /^mouse(up|down)|click$/.test(h) && (c = g || b, Wb(l, 2 > c ? 1 : c === (g ? 2 : 4) ? 4 : 2)), c = l)) : c = []) : c = []; return f.call(e, c)
            } function Fs(a) {
                var c =
                    null, b = a.l, d = b.document; if (b.getSelection) { d = void 0; try { d = b.getSelection() } catch (g) { return [] } if (Xa(d)) return []; var e = "" + d; c = d.anchorNode } else d.selection && d.selection.createRange && (d = d.selection.createRange(), e = d.text, c = d.parentElement()); if ("string" !== typeof e) return []; try { for (; c && 1 !== c.nodeType;)c = c.parentNode } catch (g) { return [] } if (!c) return []; d = Vc(b, c).Va || zd(b, c, !0); c = c.getElementsByTagName("*"); for (var f = 0; f < c.length && !d;)d = c[f], d = Vc(b, d).Va || zd(b, d, !0), f += 1; if (e !== Pg) return Pg = e, d = d ? G("", Nk(e.split(""))) :
                        e, e = Eb(a.l), 0 === d.length ? d = b = "" : 100 >= d.length ? (b = d, d = "") : 200 >= d.length ? (b = d.substr(0, 100), d = d.substr(100)) : (b = d.substr(0, 97), d = d.substr(d.length - 97)), c = [], lb(a.l, c, 29) ? a = [] : (V(c, e), Ng(c, b), Ng(c, d), a = c), a
            } function Gs(a) { return ff(a).concat(Fs(a) || []) } function Ok(a) { return (a.shiftKey ? 2 : 0) | (a.ctrlKey ? 4 : 0) | (a.altKey ? 1 : 0) | (a.metaKey ? 8 : 0) | (a.ctrlKey || a.altKey ? 16 : 0) } function Pk(a) { var c = []; Qg || (Qg = !0, Pg && sa(c, ys(a.l, Eb(a.l))), Ub(a.l, function () { Qg = !1 }, "fv.c")); return c } function Qk(a, c, b, d) {
                c = Lc(c); if (!c ||
                    Tf(a, c)) return []; var e = Vc(a, c), f = e.qb, g = e.hb; e = e.Va; var h = J(a); if (!g && (f && h.C("isEU") || zd(a, c))) a = []; else { f = Bc(a, c); g = f.concat; var k = Eb(a); h = []; if (lb(a, h, 38)) a = []; else { V(h, k); Jk(h, b); Wb(h, d); a = c[Za]; if (!a || 0 > a) a = 0; V(h, a); Wb(h, e ? 1 : 0); a = h } a = g.call(f, a) } return a
            } function Hs(a) {
                var c = a.l, b = a.qa, d = b.keyCode, e = Ok(b), f = [], g = u(f, sa); if ({ 3: 1, 8: 1, 9: 1, 13: 1, 16: 1, 17: 1, 18: 1, 19: 1, 20: 1, 27: 1, 33: 1, 34: 1, 35: 1, 36: 1, 37: 1, 38: 1, 39: 1, 40: 1, 45: 1, 46: 1, 91: 1, 92: 1, 93: 1, 106: 1, 110: 1, 111: 1, 144: 1, 145: 1 }[d] || 112 <= d && 123 >= d || 96 <= d &&
                    105 >= d || e & 16) 19 === d && 4 === (e & -17) && (d = 144), g(Qk(c, b, d, e | 16)), Rg = !1, Ub(c, function () { Rg = !0 }, "fv.kd"), !(67 === d && e & 4) || e & 1 || e & 2 || g(Pk(a)); return f
            } function Is(a) { var c = a.l; a = a.qa; var b = []; Rg && !Sg && 0 !== a.which && (sa(b, Qk(c, a, a.charCode || a.keyCode, Ok(a))), Sg = !0, Ub(c, function () { Sg = !1 }, "fv.kp")); return b } function Rk(a) {
                var c = a.l, b = Lc(a.qa); if (!b || qi(c, b)) return []; var d = []; if ("FORM" === b.nodeName) {
                    for (var e = b.elements, f = 0; f < e.length; f += 1)Pj(e[f]) || sa(d, Bc(c, e[f])); a = Eb(a.l); e = Qj(c, b); if (0 > e) c = []; else {
                        f = b.elements;
                        var g = f.length; b = []; for (var h = 0; h < g; h += 1)if (!Pj(f[h])) { var k = f[h][Za]; k && 0 < k && b.push(k) } f = []; if (lb(c, f, 11)) c = []; else { V(f, a); V(f, e); V(f, b.length); for (c = 0; c < b.length; c += 1)V(f, b[c]); c = f }
                    } sa(d, c)
                } return d
            } function Js(a) { var c = a.flush; a = Lc(a.qa); "BODY" === Na(a) && c() } function Sn(a, c) {
                var b, d = Lc(c), e = Ga.kc, f = Yd(a); if (d && kc("ym-advanced-informer", d)) {
                    var g = f.C("ifc", 0) + 1; f.D("ifc", g); g = d.getAttribute("data-lang"); var h = Ia(d.getAttribute("data-cid") || ""); if (h || 0 === h) (e = n(a, "Ya." + e + ".informer")) ? e((b = {}, b.i =
                        d, b.id = h, b.lang = g, b)) : f.D("ib", !0), b = c || window.event, b.preventDefault ? b.preventDefault() : b.returnValue = !1
                }
            } function uh(a, c, b, d) { return function () { var e = Qa(arguments); e = d.apply(void 0, e); return X(e) ? Aa(a, c) : e } } function th(a, c, b, d) { return D(a, "cm." + b, d) } function lm(a, c, b, d, e) { return b.length && e ? C(N(function (f, g, h) { return b[h] ? f.concat(C([a, c, d], g)) : f }, [], b), w)()(e) : e } var cd = { construct: "Metrika2", callbackPostfix: "2", version: "dgbrch0rxdnnjvg8izvjzidwf", host: "mc.yandex.ru" }, Jg = [], kg = /\./g, Sk = pa(String.prototype.indexOf,
                "indexOf"), jb = Sk ? function (a, c) { return Sk.call(a, c) } : ms, Ba = ta(function (a, c) { return a === c }), ud = ta(function (a, c) { a(c); return c }), Ha = ta(zk), Xa = Ba(null), X = Ba(void 0), Xd = pa(Array.from, "from"), Tk = pa(Function.prototype.bind, "bind"), H = Tk ? js(Tk) : ks, Uk = pa(Array.prototype.reduce, "reduce"), Db = Uk ? function (a, c, b) { return Uk.call(b, a, c) } : Gg, N = Db, jr = w, Ie = w(Q, na), Ig, tf = Rb(window), hn = xb(tf), Hg = Object.prototype.hasOwnProperty, J = v(Yd), T = xb(n), Ta = T("length"), Pc = ta(C), Xi = ta(Fa), Vk = pa(Array.prototype.every, "every"), Ni = Vk ?
                    function (a, c) { return Vk.call(c, a) } : hs, Qb = C([1, null], Cd), ub = C([1, 0], Cd), Ib = Boolean, Wk = pa(Array.prototype.filter, "filter"), ia = Wk ? function (a, c) { return Wk.call(c, a) } : yk, va = u(Ib, ia), Ks = ta(ia), Xk = pa(Array.prototype.find, "find"), vb = Xk ? function (a, c) { return Xk.call(c, a) } : gs, Yk = pa(Array.prototype.includes, "includes"), I = Yk ? function (a, c, b) { return Yk.call(c, a, b) } : fs, xc = xb(I), Zk = pa(Array.prototype.join, "join"), G = Zk ? function (a, c) { return Zk.call(c, a) } : es, Ee = ta(G), $k = v(function (a) {
                        var c = n(a, "navigator") || {}; a = n(c,
                            "userAgent") || ""; c = n(c, "vendor") || ""; return { mf: -1 < jb(c, "Apple"), kg: a }
                    }), mb = v(T("navigator.userAgent")), Fg = /Firefox\/([0-9]+)/i, Wd = v(function (a) { var c = n(a, "document.documentElement.style"), b = n(a, "InstallTrigger"); a = -1 !== (n(a, "navigator.userAgent") || "").toLowerCase().search(Fg); Fg.lastIndex = 0; return !(!(c && "MozAppearance" in c) || ca(b)) || a }), al = pa(Array.isArray, "isArray"), R = al ? function (a) { return al(a) } : ns, bl = pa(Array.prototype.map, "map"), A = bl && ds(window, Array.prototype.map) ? function (a, c) {
                        return c && 0 < c.length ?
                            bl.call(c, a) : []
                    } : xk, x = A, cl = pa(Array.prototype.flatMap, "flatMap"), zc = cl ? function (a, c) { return cl.call(c, a) } : cs, Xb = ta(A), Mr = xb(A), dl = pa(Array.prototype.some, "some"), ab = dl ? function (a, c) { return dl.call(c, a) } : bs, Oe = v(Rb), Zc = T("0"), Ls = ta(Be), el = pa(Array.prototype.reverse, "reverse"), Cs = el ? function (a) { return el.call(a) } : as, fl = xb(parseInt), Ia = fl(10), Ce = fl(2), gl = pa(Object.keys, "keys"), hl = pa(Object.entries, "entries"), Ma = hl ? $r(hl) : uk, da = gl ? function (a) { return gl(a) } : vk, il = pa(Object.values, "values"), Ms = w(uk, u(T("1"),
                        xk)), Ah = il ? function (a) { return il(a) } : Ms, z = Object.assign || Zr, li = ta(function (a, c) { return z({}, a, c) }), rd = v(w(T("String.fromCharCode"), u("fromCharCode", Ea), Jc)), af = v(w(mb, hb(/ipad|iphone|ipod/i))), Yf = v(function (a) { return n(a, "navigator.platform") || "" }), Hd = v(function (a) { a = $k(a); var c = a.kg; return a.mf && !c.match("CriOS") }), Ns = hb(/Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]|Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*|; wv\).*Chrome\/[0-9][0-9.]*\sMobile/),
                Os = hb(/; wv\)/), Fd = v(function (a) { a = mb(a); return Os(a) || Ns(a) }), Ps = /Chrome\/(\d+)\./, Qs = v(function (a) { return (a = (n(a, "navigator.userAgent") || "").match(Ps)) && a.length ? 76 <= Ia(a[1]) : !1 }), Dd = v(function (a) { var c = (mb(a) || "").toLowerCase(); a = Yf(a); return fb(c, "android") && fb(c, "mobile") && /^android|linux armv/i.test(a) }), Rs = "other none unknown wifi ethernet bluetooth cellular wimax mixed".split(" "), Ss = v(function (a) { var c = n(a, "navigator.connection.type"); if (X(c)) return null; a = Oe(a)(c, Rs); return -1 === a ? c : "" + a }),
                sg = v(w(T("document.addEventListener"), Jc)), jl = v(function (a) { var c = n(a, "navigator") || {}; return N(function (b, d) { return b || n(c, d) }, "", ["language", "userLanguage", "browserLanguage", "systemLanguage"]) }), Fh = v(function (a) { var c = n(a, "navigator") || {}; a = jl(a); ja(a) || (a = "", c = n(c, "languages.0"), ja(c) && (a = c)); return a.toLowerCase().split("-")[0] }), tb = v(function (a) { return (n(a, "top") || a) !== a }), Ts = v(T("top.contentWindow")), Us = v(function (a) { var c = !1; try { c = a.navigator.javaEnabled() } catch (b) { } return c }), Vs = v(function (a) {
                    var c =
                        "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(" "), b = n(a, "external"); b = n(b, "toString") ? "" + b.toString() : ""; b = -1 !== jb(b, "Sequentum"); var d = n(a, "document.documentElement"), e = ["selenium", "webdriver", "driver"]; return !!(ab(u(a, n), ["_selenium", "callSelenium", "_Selenium_IDE_Recorder"]) || ab(u(n(a, "document"), n),
                            c) || b || d && ab(H(d.getAttribute, d), e))
                }), Ws = v(function (a) { return !!(ab(u(a, n), ["_phantom", "__nightmare", "callPhantom"]) || /(PhantomJS)|(HeadlessChrome)/.test(mb(a)) || n(a, "navigator.webdriver") || n(a, "isChrome") && !n(a, "chrome")) }), Xs = v(function (a) { return !(!n(a, "ia_document.shareURL") || !n(a, "ia_document.referrer")) }), ae = v(function (a) {
                    var c = mb(a) || "", b = c.match(/Mac OS X ([0-9]+)_([0-9]+)/); b = b ? [+b[1], +b[2]] : [0, 0]; c = c.match(/iPhone OS ([1-9]+)_([0-9]+)/); return 14 <= (c ? +c[1] : 0) ? !0 : (af(a) || 10 < b[0] || 10 === b[0] &&
                        13 <= b[1]) && Hd(a)
                }), Yr = /Edg\/(\d+)\./, Se = v(function (a) { return ae(a) || Df(a, 68) || Ef(a, 79) }), Ys = cd.construct, lc = cd.host, Tg = sg(window), Ga = { vg: 24226447, og: 26302566, yg: 51533966, ij: 65446441, Sa: "https:", bc: "1320", kc: Ys, ug: Tg ? 512 : 2048, rg: Tg ? 512 : 2048, sg: Tg ? 100 : 400, jj: 100, wg: "noindex" }, be = [], L = v(function (a) { return a.id + ":" + a.ca }), tc = {}, je = Ba("1"), Zs = setTimeout; La.prototype["catch"] = function (a) { return this.then(null, a) }; La.prototype.then = function (a, c) { var b = new this.constructor(os); Ck(this, new qs(a, c, b)); return b };
            La.prototype["finally"] = function (a) { var c = this.constructor; return this.then(function (b) { return c.resolve(a()).then(function () { return b }) }, function (b) { return c.resolve(a()).then(function () { return c.reject(b) }) }) }; La.all = function (a) {
                return new La(function (c, b) {
                    function d(h, k) { try { if (k && ("object" === typeof k || "function" === typeof k)) { var l = k.then; if ("function" === typeof l) { l.call(k, function (m) { d(h, m) }, b); return } } e[h] = k; 0 === --f && c(e) } catch (m) { b(m) } } if (!a || "undefined" === typeof a.length) return b(new TypeError("Promise.all accepts an array"));
                    var e = Array.prototype.slice.call(a); if (0 === e.length) return c([]); for (var f = e.length, g = 0; g < e.length; g++)d(g, e[g])
                })
            }; La.resolve = function (a) { return a && "object" === typeof a && a.constructor === La ? a : new La(function (c) { c(a) }) }; La.reject = function (a) { return new La(function (c, b) { b(a) }) }; La.race = function (a) { return new La(function (c, b) { if (!a || "undefined" === typeof a.length) return b(new TypeError("Promise.race accepts an array")); for (var d = 0, e = a.length; d < e; d++)La.resolve(a[d]).then(c, b) }) }; La.Ke = "function" === typeof setImmediate &&
                function (a) { setImmediate(a) } || function (a) { Zs(a, 0) }; La.zg = function (a) { "undefined" !== typeof console && console && console.warn("Possible Unhandled Promise Rejection:", a) }; var K = window.Promise, $s = pa(K, "Promise"), kl = pa(n(K, "resolve"), "resolve"), ll = pa(n(K, "reject"), "reject"), ml = pa(n(K, "all"), "all"); if ($s && kl && ll && ml) { var gf = function (a) { return new Promise(a) }; gf.resolve = H(kl, K); gf.reject = H(ll, K); gf.all = H(ml, K); K = gf } else K = La; var pf = [], md = [], W = [], $a = [], Ug = [], Nc = [], Bg = xc([26812653]), at = v(w(T("id"), Bg), L), ac =
                    { id: "id", Ge: "ut", ca: "type", Sd: "ldc", Ua: "nck", xc: "url", lh: "referrer" }, bt = /^\d+$/, dd = { id: function (a) { a = "" + (a || "0"); bt.test(a) || (a = "0"); try { var c = Ia(a) } catch (b) { c = 0 } return c }, ca: function (a) { return "" + (a || 0 === a ? a : "0") }, Ua: Ib, Ge: Ib }; ac.md = "defer"; dd.md = Ib; ac.X = "params"; dd.X = function (a) { return la(a) || R(a) ? a : null }; ac.Fe = "userParams"; ac.gg = "triggerEvent"; dd.gg = Ib; ac.Rf = "sendTitle"; dd.Rf = function (a) { return !!a || X(a) }; ac.Ae = "trackHash"; dd.Ae = Ib; ac.dg = "trackLinks"; ac.Vg = "enableAll"; var ie = N(function (a, c) {
                        var b =
                            c[0]; a[b] = { ea: c[1], Pa: dd[b] }; return a
                    }, {}, Ma(ac)), Wr = "hash host hostname href pathname port protocol search".split(" "), Eg = "ru by kz az kg lv md tj tm uz ee fr lt com co.il com.ge com.am com.tr com.ru".split(" "), qk = /(?:^|\.)(?:(ya\.ru)|(?:yandex)\.(\w+|com?\.\w+))$/, Me = v(function (a) { return (a ? a.replace(/^www\./, "") : "").toLowerCase() }), Ji = v(function (a) { a = S(a).hostname; var c = !1; a && (c = -1 !== a.search(qk)); return c }), nl = w(S, T("protocol"), Ba("https:")), Tr = v(function (a) {
                        return Qs(a) && nl(a) ? "SameSite=None;Secure;" :
                            ""
                    }), Fj = /^\s+|\s+$/g, pk = pa(String.prototype.trim, "trim"), Vg = ta(function (a, c) { return c.replace(a, "") }), aj = Vg(/\s/g), Vb = Vg(/\D/g), $e = ["metrika_enabled"], Dg = [], nk = nb("gsc", lk), Ur = /:\d+$/, rs = v(function (a) { var c = (S(a).host || "").split("."); return 1 === c.length ? c[0] : N(function (b, d, e) { e += 1; 2 <= e && !b && (e = G(".", c.slice(-e)), si(a, e) && (b = e)); return b }, "", c) }), Wc = v(Sc), Ze = v(function (a) {
                        var c = Wc(a), b = "1" === c.C("debug"), d = -1 < mc(S(a).href, "_ym_debug=1") || -1 < mc(S(a).href, "_ym_debug=2"), e = a._ym_debug; !e && !d || b || (a = S(a),
                            c.D("debug", "1", void 0, a.host)); return !!(b || e || d)
                    }), Sr = nb("debuggerEvents", Ld, !0), Pr = ["http.0.st..rt.", "network error occurred", "send beacon", "Content Security Policy", "DOM Exception 18"], ce, Ra = function (a) { return function (c, b) { void 0 === b && (b = !1); if (ce) var d = new ce(c); else Ea("Error", a.Error) ? (ce = a.Error, d = new a.Error(c)) : (ce = Rr, d = new ce(c)); b && (d.unk = !0); return d } }(window), Qr = hb(/^http./), Or = hb(/^err.kn/), kk = [], Nr = v(function (a) {
                        a = !(!a.addEventListener || !a.removeEventListener); return {
                            Ni: a, F: a ? "addEventListener" :
                                "attachEvent", ga: a ? "removeEventListener" : "detachEvent"
                        }
                    }), ct = v(function (a) { var c = !1; if (!a.addEventListener) return c; try { var b = Object.defineProperty({}, "passive", { get: function () { c = !0; return 1 } }); a.addEventListener("test", E, b) } catch (d) { } return c }), dt = ta(function (a, c) { return a ? z({ capture: !0, passive: !0 }, c || {}) : !!c }), ha = v(function (a) {
                        var c = ct(a), b = dt(c), d = {}; return z(d, {
                            F: function (e, f, g, h) { x(function (k) { var l = b(h); jk(a, e, k, g, l, !1) }, f); return H(d.xb, d, e, f, g, h) }, xb: function (e, f, g, h) {
                                x(function (k) {
                                    var l =
                                        b(h); jk(a, e, k, g, l, !0)
                                }, f)
                            }
                        })
                    }), ka = v(lg), fk = ta(function (a, c) { for (var b = []; !Vd(c);) { var d = Ir(c); a(d, function (e) { return e(c) }); b.push(d) } return b }), ol = ta(function (a, c) { return Ha(function (b, d) { return c(b, function (e) { try { d(a(e)) } catch (f) { b(f) } }) }) }), Wg = ta(function (a, c) { return Ha(function (b, d) { return c(b, function (e) { try { a(e)(Sa(b, d)) } catch (f) { b(f) } }) }) }), wg = [], xg = !1, vg = !1, pl = ta(function (a, c) {
                        var b = c || {}; return {
                            l: u(b, Q), C: function (d, e) { var f = b[d]; return X(f) && !X(e) ? e : f }, D: function (d, e) { b[d] = e; return this },
                            Wb: function (d, e) { return "" === e || ca(e) ? this : this.D(d, e) }, Ha: u(b, a)
                        }
                    }), Ka = pl(function (a) { var c = ""; a = Db(function (b, d) { var e = d[0], f = "" + e + ":" + d[1]; "t" === e ? c = f : b.push(f); return b }, [], Ma(a)); c && a.push(c); return G(":", a) }), Xg, Wj = (Xg = {}, Xg.w = [[function (a, c) {
                        return {
                            N: function (b, d) {
                                var e, f = b.J; f = (e = {}, e["page-url"] = f && f["page-url"] || "", e.charset = "utf-8", e); "0" !== c.ca && (f["cnt-class"] = c.ca); b.K || (b.K = Ka()); e = b.K; var g = b.ba; f = {
                                    na: { Ba: "watch/" + c.id }, ba: z(void 0 === g ? {} : g, { Ab: !!e.C("pv") && !e.C("ar") && !e.C("wh") }),
                                    J: z(b.J || {}, f)
                                }; z(b, f); d()
                            }
                        }
                    }, 1]], Xg), Yg = u(Wj, ak), pb = Ud("w"), Vj = ["webkitvisibilitychange", "visibilitychange"], zf = pl(function (a) { a = Ma(a); return G("", A(function (c) { var b = c[0]; c = c[1]; return Xa(c) ? "" : b + "(" + c + ")" }, a)) }), ql = "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title".split(" "),
                        Lq = /^\s*(data|javascript):/i, rj = new RegExp(G("", ["\\.(" + G("|", "3gp 7z aac ac3 acs ai avi ape apk asf bmp bz2 cab cdr crc32 css csv cue divx dmg djvu? doc(x|m|b)? emf eps exe flac? flv iso swf gif t?gz jpe?g? js m3u8? m4a mp(3|4|e?g?) m4v md5 mkv mov msi ods og(g|m|v) psd rar rss rtf sea sfv sit sha1 svg tar tif?f torrent ts txt vob wave? wma wmv wmf webm ppt(x|m|b)? xls(x|m|b)? pdf phps png xpi g?zip".split(" ")) + ")$"]), "i"), Va, Dk = (Va = {}, Va.hit = "h", Va.params = "p", Va.reachGoal = "g", Va.userParams = "up",
                            Va.trackHash = "th", Va.accurateTrackBounce = "atb", Va.notBounce = "nb", Va.addFileExtension = "fe", Va.extLink = "el", Va.file = "fc", Va.trackLinks = "tl", Va.destruct = "d", Va.setUserID = "ui", Va.getClientID = "ci", Va.clickmap = "cm", Va.enableAll = "ea", Va), et = v(function () { var a = 0; return function () { return a += 1 } }), ft = w(L, et, na), Te = {
                                mc: function (a) { a = Yd(a).C("mt", {}); a = Ma(a); return a.length ? N(function (c, b, d) { return "" + c + (d ? "-" : "") + b[0] + "-" + b[1] }, "", a) : null }, clc: function (a) {
                                    var c = J(a).C("cls", { jc: 0, x: 0, y: 0 }), b = c.jc, d = c.x; c = c.y;
                                    return b ? b + "-" + a.Math.floor(d / b) + "-" + a.Math.floor(c / b) : b + "-" + d + "-" + c
                                }, rqnt: function (a, c, b) { a = b.J; return !a || a.nohit ? null : ft(c) }
                            }, Br = v(function (a) { Tj(a, "_ymBRC", "1"); var c = "1" !== Sj(a, "_ymBRC"); c || Uj(a, "_ymBRC"); return c }), Pa = v(Rj), ed = v(Rj, function (a, c, b) { return "" + c + b }), gt = v(T("document.documentElement")), ht = v(function (a) { a = n(a, "document") || {}; return ("" + (a.characterSet || a.charset || "")).toLowerCase() }), gb = v(w(T("document"), u("createElement", Ic))), ri = v(function (a) {
                                var c = n(a, "Element.prototype"); return c ?
                                    (a = vb(function (b) { var d = c[b]; return !!d && Ea(b, d) }, ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"])) ? c[a] : null : null
                            }), it = Ba("INPUT"), We = w(Na, it), jt = Ba("TEXTAREA"), yr = w(Na, jt), kt = Ba("SELECT"), zr = w(Na, kt), Xe = w(T("type"), hb(/^(checkbox|radio)$/)), Qf = w(Na, hb(/^INPUT|SELECT|TEXTAREA$/)), ze = w(Na, hb(/^INPUT|SELECT|TEXTAREA|BUTTON$/)), Uf = "INPUT CHECKBOX RADIO TEXTAREA SELECT PROGRESS".split(" "), xr = ["submit", "image", "hidden"], He = v(function () {
                                for (var a = 59, c = {},
                                    b = 0; b < ql.length; b += 1)c[ql[b]] = String.fromCharCode(a), a += 1; return c
                            }), Nj = v(function (a) { return { uj: a, ib: null, rb: [] } }), Lj = {}, qg = {}; Lj.p = 500; var Kj = { i: "id", n: "name", h: "href", ty: "type" }; qg.h = !0; qg.c = !0; var ad = {}; ad.p = yf; ad.c = function (a, c, b) { (a = bb(n(c, "textContent"))) && b && (b = b(c), b.length && ab(w(T("textContent"), bb, Ba(a)), b) && (a = "")); We(c) && (a = bb(c.getAttribute && c.getAttribute("value") || a)); return a }; var fd, pg = "button," + G(",", A(function (a) { return 'input[type="' + a + '"]' }, ["button", "submit", "reset", "file"])) +
                                ",a", bg = u(pg, kb), vr = (fd = {}, fd.A = "h", fd.BUTTON = "i", fd.DIV = "i", fd.INPUT = "ty", fd), rl = /\/$/, Jj = nb("r", function (a, c) { var b = Ij(a, c), d = b[0]; return !b[1] && d }), Sd = v(function () { return { Ga: {}, pending: {}, children: {} } }), Zg = T("postMessage"), lt = B("s.f", function (a, c, b, d, e) { c = c(d); var f = Sd(a), g = G(":", [c.meta.pc, c.meta.key]); if (Zg(b)) { f.pending[g] = e; try { b.postMessage(c.Zf, "*") } catch (h) { delete f.pending[g]; return } U(a, function () { delete f.pending[g] }, 5E3, "if.s") } }), mt = B("s.fh", function (a, c, b, d, e, f) {
                                    var g = null, h = null, k =
                                        Sd(a), l = null; try { g = rb(a, f.data), h = g.__yminfo, l = g.data } catch (m) { return } if (!ca(h) && h.substring && "__yminfo" === h.substring(0, 8) && !ca(l) && (g = h.split(":"), 4 === g.length)) if (h = c.id, c = g[1], a = g[2], g = g[3], !R(l) && l.type && "0" === g && l.counterId) { if (!l.toCounter || l.toCounter == h) { k = null; try { k = f.source } catch (m) { } !Xa(k) && Zg(k) && (f = d.R(l.type, [f, l]), e = A(w(Q, li(e)), f.concat([{}])), l = b([c, a, l.counterId], e), k.postMessage(l.Zf, "*")) } } else g === "" + h && R(l) && ia(function (m) { return !(!m.hid || !m.counterId) }, l).length === l.length &&
                                            (b = k.pending[G(":", [c, a])]) && b.apply(null, [f].concat(l))
                                }), sd = v(function (a, c) {
                                    var b, d = Ic("getElementsByTagName", n(a, "document")), e = Sd(a), f = Zg(a), g = wd(a), h = ha(a); if (!d || !f) return null; d = d.call(a.document, "iframe"); f = (b = {}, b.counterId = c.id, b.hid = "" + Fc(a), b); Se(a) && (f.duid = Td(a, c)); rr(a, g); sr(a); b = tr(a, f); var k = C([a, u([], b)], lt); x(function (l) { var m = null; try { m = l.contentWindow } catch (p) { } m && k(m, { type: "initToChild" }, function (p, q) { g.R("initToParent", [p, q]) }) }, d); tb(a) && k(a.parent, { type: "initToParent" }, function (l,
                                        m) { g.R("parentConnect", [l, m]) }); h.F(a, ["message"], C([a, c, b, g, f], mt)); return { $: g, Ga: e.Ga, children: e.children, oe: k }
                                }, w(cb, L)), td = v(function (a, c) { if (!Se(a) || !tb(a)) return Td(a, c); var b = sd(a, c); return b && b.Ga[c.id] ? b.Ga[c.id].info.duid || Td(a, c) : Td(a, c) }, function (a, c) { return "{" + c.Sd + c.Ua }), nt = v(w(ka, Ha(function (a) { return -(new a.l.Date).getTimezoneOffset() }))), ot = w(ka, Ha(function (a) { a = new a.l.Date; return G("", A(Jr, [a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()])) })),
                                pt = w(ka, Ha(og)), sl = v(w(ka, Ha(function (a) { return a.Aa[0] }))), qt = v(function (a) { a = J(a); var c = a.C("counterNum", 0) + 1; a.D("counterNum", c); return c }, w(cb, L)), ra, Rd = (ra = {}, ra.vf = u(cd.version, Q), ra.nt = Ss, ra.fu = function (a, c, b) { var d = b.J; if (!d) return null; c = (n(a, "document.referrer") || "").replace(rl, ""); b = (d["page-ref"] || "").replace(rl, ""); d = d["page-url"]; a = S(a).href !== d; c = c !== b; b = 0; a && c ? b = 3 : c ? b = 1 : a && (b = 2); return b }, ra.en = ht, ra.la = jl, ra.ut = function (a, c, b) {
                                    var d = b.M; b = b.J; d = d && d.Ic; b && (Ji(a) || c.Ge || d) && (b.ut =
                                        Ga.wg); return null
                                }, ra.v = u(Ga.bc, Q), ra.cn = qt, ra.dp = function (a) { var c = J(a), b = c.C("bt", {}); if (X(c.C("bt"))) { var d = n(a, "navigator.getBattery"); try { b.p = d && d.call(a.navigator) } catch (e) { } c.D("bt", b); b.p && b.p.then && b.p.then(D(a, "bi:dp.p", function (e) { b.bj = n(e, "charging") && 0 === n(e, "chargingTime") })) } return ub(b.bj) }, ra.ls = v(function (a, c) { var b = ed(a, c.id), d = ka(a), e = b.C("lsid"); return +e ? e : (d = Ya(a, 0, d(Z)), b.D("lsid", d), d) }, cb), ra.hid = Fc, ra.phid = function (a, c) {
                                    if (!tb(a)) return null; var b = sd(a, c); if (!b) return null;
                                    var d = da(b.Ga); return d.length ? b.Ga[d[0]].info.hid : null
                                }, ra.z = nt, ra.i = ot, ra.et = pt, ra.c = w(T("navigator.cookieEnabled"), Qb), ra.rn = w(Q, Ya), ra.rqn = function (a, c, b) { b = b.J; if (!b || b.nohit) return null; c = L(c); a = ed(a, c); c = (a.C("reqNum", 0) || 0) + 1; a.D("reqNum", c); if (a.C("reqNum") === c) return c; a.qc("reqNum"); return null }, ra.u = td, ra.w = function (a) { a = Rc(a); return a[0] + "x" + a[1] }, ra.s = function (a) { var c = n(a, "screen"); if (c) { a = n(c, "width"); var b = n(c, "height"); c = n(c, "colorDepth") || n(c, "pixelDepth"); return G("x", [a, b, c]) } return null },
                                    ra.sk = T("devicePixelRatio"), ra.ifr = w(tb, Qb), ra.j = w(Us, Qb), ra.sti = function (a) { return tb(a) && Ts(a) ? "1" : null }, ra), qr = v(function () { return sa(da(Rd), da(Te)) }), pr = v(Mc, L), Gj = v(function () { return { We: null, ta: [] } }, L), mr = /^[a-z][\w.+-]+:/i, $g, Zb = [[Ye, 1], [Re, 2], [Sb(), 3], [Hj, 4]], Qe = [], zb = u(Zb, bk), Yb = ($g = {}, $g.h = Zb, $g), aa = u(Yb, ak); zb(Dj, -100); var hr = /[^a-z0-9.:-]/, ah, bh = {}, tl = va([mg && [mg, 0], Gb && [Gb, 1], [Hb, 2], Pd && [Pd, 3], [$c, 4]]), vc = va([mg, Gb, Hb, Pd, $c]), ch = [Hb]; ch.unshift(Gb); ch.push(Pd); var ul = va(ch), gd = va([$c]);
            va([Gb, Hb]); var rt = va([Gb, $c]), vl = va([Gb, Hb, Pd, $c]), za = (ah = {}, ah.h = ul, ah), dh = v(function (a, c) { var b = bh["*"] ? bh["*"] : c && bh[c]; b || (b = c ? za[c] || [] : vc); b = N(function (d, e) { var f = e(a); if (f) { var g = vb(w(Zc, Ba(e)), tl); g && d.push([g[1], f]) } return d }, [], b); b.length || he(); return b }, cb), eh, st = H(K.reject, K, Ua()), Da = (eh = {}, eh.h = pb, eh), wa = B("g.sen", function (a, c, b) {
                var d = dh(a, c); b = b ? lr(a, c, b) : []; var e = Da[c], f = e ? e(a, d, b) : pb(a, d, b); return function () {
                    var g = Qa(arguments), h = g[0]; g = g.slice(1); var k = h.ba; h = z(h, {
                        ba: z(void 0 ===
                            k ? {} : k, { ha: [c] })
                    }); return f.apply(null, [h].concat(g))
                }
            }, st), $q = ta(function (a, c) { if (!c[a]) { var b, d = new K(function (e) { b = e }); c[a] = { Ff: b, promise: d, Gf: !1 } } return c[a].promise }), Aj = v(w(Mc, Ha)), tt = B("dc.init", function (a, c) { return c && Bg(ue(c.split(":")[0])) ? { log: E, warn: E, error: E } : Zq(a, c) }), rc = v(tt, cb), fa, ut = (fa = {}, fa.gbn = "Button goal. Counter {id}. Button: {query}.", fa.gbi = "Button goal. Counter {id}. Init.", fa["gbi.p"] = "Button goal. Counter {id}. Init. Params: ", fa.dc = "Duplicate counter {key} initialization",
                fa.clel = "Empty link", fa.fpeo = "First party params error. Empty object.", fa.fpno = "First party params error. Not an object.", fa.fgi = "Form goal. Counter {id}. Init.", fa["fgi.p"] = "Form goal. Counter {id}. Init. Params: ", fa.fg = "Form goal. Counter {id}. Form: {query}.", fa["fg.p"] = "Form goal. Counter {id}. Form: {query}. Params: ", fa.gr = "Reach goal. Counter: {id}. Goal id: {goal}", fa["gr.p"] = "Reach goal. Counter: {id}. Goal id: {goal}. Params: ", fa.h = "PageView. Counter {id}. URL: {url}. Referrer: {ref}",
                fa["h.p"] = "PageView. Counter {id}. URL: {url}. Referrer: {ref}. Params: ", fa.lcl = "{prefix}. Counter {id}. Url: {url}", fa["lcl.p"] = "{prefix}. Counter {id}. Url: {url}. Params: ", fa.ns = "Not supported", fa.nnw = 'Function "{name}" has been overridden, this may cause issues with Metrika counter', fa.nbnc = '"callback" argument missing', fa.nci = "No counter instance found", fa.pv = "PageView. Counter {id}. URL: {url}. Referrer: {ref}", fa["pv.p"] = "PageView. Counter {id}. URL: {url}. Referrer: {ref}. Params: ", fa.pa =
                "Params. Counter {id}", fa["pa.p"] = "Params. Counter {id}. Params: ", fa.pau = "Set user id {uid}", fa["pau.p"] = "Set user id {uid}. Params: ", fa.paup = "User params. Counter {id}", fa["paup.p"] = "User params. Counter {id}. Params: ", fa.wuid = "Incorrect user ID", fa.wup = "Wrong user params", fa), pm = B("h.p", function (a, c) {
                    var b, d, e = wa(a, "h", c), f = c.xc || "" + S(a).href, g = c.lh || a.document.referrer, h = { K: Ka((b = {}, b.pv = 1, b)), J: (d = {}, d["page-url"] = f, d["page-ref"] = g, d), M: {} }; h.M.X = c.X; h.M.Fe = c.Fe; c.md && h.J && (h.J.nohit = "1");
                    return e(h, c).then(function (k) { var l; k && (c.md || pc(a, c, "h", (l = {}, l.id = c.id, l.url = f, l.ref = g, l), c.X)(), Ub(a, C([a, c, k], ar))) })["catch"](D(a, "h.g.s"))
                }), fh = ["yandex_metrika_callback" + cd.callbackPostfix, "yandex_metrika_callbacks" + cd.callbackPostfix], vt = B("cb.i", function (a) { var c = fh[0], b = fh[1]; if (O(a[c])) a[c](); "object" === typeof a[b] && x(function (d, e) { a[b][e] = null; gg(a, d) }, a[b]); x(function (d) { try { delete a[d] } catch (e) { a[d] = void 0 } }, fh) }), Xq = /^[a-zA-Z0-9'!#$%&*+-/=?^_`{|}~]+$/, wl = v(function (a) {
                    return !!n(a,
                        "crypto.subtle.digest") && !!n(a, "TextEncoder") && !!n(a, "FileReader") && !!n(a, "Blob")
                }), Yq = Vg(/[^\d+()]/g), Vq = ["yandex_cid", "yandex_public_id"], wt = B("fpm", function (a, c) { if (!nl(a)) return E; var b = L(c); if (!wl(a)) return Mb(a, b, "ns"), E; var d = Aa(a, c); return d ? function (e) { return (new K(function (f, g) { return la(e) ? da(e).length ? f(xj(a, e).then(function (h) { var k, l; h && h.length && d.params((k = {}, k.__ym = (l = {}, l.fpp = h, l), k)) }, E)) : g(Ua("fpm.l")) : g(Ua("fpm.o")) }))["catch"](D(a, "fpm.en")) } : E }), hf = ta(function (a, c) {
                    var b = {};
                    jg(a)(function (d) { b = d[c] || {} }); return b
                }), xt = B("c.c.cc", function (a) { var c = J(a), b = w(hf(a), function (d) { var e, f = (e = {}, e.clickmap = !!d.clickmap, e); return z({}, d, f) }); return D(a, "g.c.cc", w(H(c.C, c, "counters", {}), da, Xb(b))) }), yt = B("gt.c.rs", function (a, c) { var b, d = L(c), e = c.id, f = c.ca, g = c.Lg, h = c.Ae, k = C([a, d], Tq); ig(a, d, (b = {}, b.id = e, b.type = +f, b.clickmap = g, b.trackHash = !!h, b)); return k }), vj = v(Ld), Od = v(Mc, L), zt = B("pa.int", function (a, c) {
                    var b; return b = {}, b.params = function () {
                        var d, e, f, g = Qa(arguments), h = Sq(g); if (!h) return null;
                        g = h.Qg; var k = h.X; h = h.cc; if (!la(k) && !R(k)) return null; var l = wa(a, "1", c), m = Od(c).url, p = !at(c), q = "pa", r = (d = {}, d.id = c.id, d); d = k; var t = ""; if (t = n(k, "__ym.user_id")) q = "pau", r.uid = t; I("__ymu", da(k)) && (q = "paup"); d.__ym && (d = z({}, k), d.__ym = N(function (y, F) { var P = n(k, "__ym." + F); P && (y[F] = P); return y }, {}, be), da(d.__ym).length || delete d.__ym, p = !!da(d).length); d = t ? void 0 : JSON.stringify(d); d = pc(a, c, q, r, d); l = l({ M: { X: k }, K: Ka((e = {}, e.pa = 1, e.ar = 1, e)), J: (f = {}, f["page-url"] = m || S(a).href, f) }, c).then(p ? d : E); return Yc(a, "p.s",
                            l, h, g)
                    }, b
                }), te = v(tj, w(cb, L)), At = B("y.p", function (a, c) { var b = tj(a, c); if (b) { var d = pe(a), e = C([a, b, c], Oq); Hh(a, d, function (f) { f.F(["params"], e) }); b.$.F(["params"], w(T("1"), e)) } }), ss = v(function (a) { if (a = gb(a)) return a("a") }), xl = { yj: hb(/[/&=?#]/) }, Je = B("go.in", function (a, c, b, d) {
                    var e; void 0 === b && (b = "goal"); return e = {}, e.reachGoal = function (f, g, h, k) {
                        var l, m, p; if (!f || xl[b] && xl[b](f)) return null; var q = g, r = h || E; O(g) && (r = g, q = void 0, k = h); var t = pc(a, c, "gr", (l = {}, l.id = c.id, l.goal = f, l), q), y = "goal" === b; g = wa(a, "g", c);
                        l = Nq(a, c, f, b); h = l[0]; l = l[1]; q = g({ M: { X: q }, K: Ka((m = {}, m.ar = 1, m)), J: (p = {}, p["page-url"] = h, p["page-ref"] = l, p) }, c).then(function () { var F, P; y && t(); wb(a, (F = {}, F.counterKey = L(c), F.name = "event", F.data = (P = {}, P.schema = b, P.name = f, P), F)); d && d() }); return Yc(a, "g.s", q, r, k)
                    }, e
                }), Bt = B("guid.int", function (a, c) { var b; return b = {}, b.getClientID = function (d) { var e = Td(a, c); d && gg(a, d, null, e); return e }, b }), Fk, Ct = B("th.e", function (a, c) {
                    function b() { g || (k = Nb(a, "onhashchange") ? ha(a).F(a, ["hashchange"], h) : ts(a, h)) } var d, e = wa(a,
                        "t", c), f = Pe(a, L(c)), g = !1, h = D(a, "h.h.ch", H(us, null, a, c, e)), k = E; c.Ae && (b(), g = !0); e = D(a, "tr.hs.h", function (l) { var m; l ? b() : k(); g = !!l; f((m = {}, m.trackHash = g, m)) }); return d = {}, d.trackHash = e, d.u = k, d
                }), Dt = ta(function (a, c) { ja(c) ? a.push(c) : x(w(Q, Fa("push", a)), c) }), Nd = nb("retryReqs", function (a) { var c = Pa(a), b = c.C("retryReqs", {}), d = ka(a)(Z); x(function (e) { var f = e[0]; e = e[1]; (!e || !e.time || e.time + 864E5 < d) && delete b[f] }, Ma(b)); c.D("retryReqs", b); return b }, !0), gh = w(mc, Ba(0)), yl = xb(gh), Et = [yl("watch"), yl("clmap")], Ft =
                    B("g.r", function (a) { var c = ka(a), b = Nd(a), d = c(Z), e = Fc(a); return Db(function (f, g) { var h = g[0], k = g[1]; k && ab(Ha(k.resource), Et) && !k.d && k.ghid && k.ghid !== e && k.time && 500 < d - k.time && k.time + 864E5 > d && 2 >= k.browserInfo.rqnl && (k.d = 1, h = { protocol: k.protocol, host: k.host, Ba: k.resource, zi: k.postParams, X: k.params, Dg: k.browserInfo, wj: k.ghid, time: k.time, Tb: Ia(h), Og: k.counterId, ca: k.counterType }, k.telemetry && (h.Ja = k.telemetry), f.push(h)); return f }, [], Ma(b)) }), Gt = B("nb.p", function (a, c) {
                        function b(F) {
                            l() || (F = "number" === typeof F ?
                                F : 15E3, y = vs(a, d(!1), F), m())
                        } function d(F) {
                            return function (P) {
                                var M, oa, xa; void 0 === P && (P = (M = {}, M.ctx = {}, M.callback = E, M)); if (F || !r && !k.Ld) {
                                    r = !0; m(); y && y(); var Fb = p(Z); M = (Ia(k.C("lastHit")) || 0) < Fb - 18E5; var Kd = .1 > Math.random(); k.D("lastHit", Fb); Fb = Ka((oa = {}, oa.nb = 1, oa.cl = t, oa.ar = 1, oa)); oa = Od(c); oa = { J: (xa = {}, xa["page-url"] = oa.url || S(a).href, xa), K: Fb, M: { force: F } }; xa = rc(a, L(c)).warn; !P.callback && P.ctx && xa("nbnc"); (xa = F || M || Kd) || (xa = a.location.href, M = a.document.referrer, xa = !(xa && M ? sj(xa) === sj(M) : !xa && !M));
                                    if (xa) return xa = g(oa, c), Yc(a, "l.o.l", xa, P.callback, P.ctx)
                                } return null
                            }
                        } var e, f, g = wa(a, "n", c), h = L(c), k = ed(a, c.id), l = u(u(h, hf(a)), w(na, T("accurateTrackBounce"))), m = u((e = {}, e.accurateTrackBounce = !0, e), Pe(a, h)), p = ka(a), q = p(Z), r = !1, t = 0, y; qa(c, function (F) { t = F.eh - q }); c.Le && b(c.Le); e = (f = {}, f.notBounce = d(!0), f.u = y, f); e.accurateTrackBounce = b; return e
                    }), Gq = ta(kc)("(ym-disable-clickmap|ym-clickmap-ignore)"), Ht = B("clm.p", function (a, c) {
                        if (rd(a)) return E; var b = wa(a, "m", c), d = L(c), e = ka(a), f = e(Z), g = u(u(d, hf(a)), w(na,
                            T("clickmap"))), h, k = null; d = D(a, "clm.p.c", function (l) {
                                var m = g(); if (m) {
                                    var p = J(a), q = p.C("cls", { jc: 0, x: 0, y: 0 }); p.D("cls", { jc: q.jc + 1, x: q.x + l.clientX, y: q.y + l.clientY }); p = "object" === typeof m ? m : {}; q = p.filter; m = p.isTrackHash || !1; var r = A(function (y) { return ("" + y).toUpperCase() }, p.ignoreTags || []); X(h) && (h = p.quota || null); var t = !!p.quota; l = { element: Hq(a, l), position: oj(a, l), button: Iq(l), time: e(Z) }; p = S(a).href; if (Fq(a, l, k, r, q)) {
                                        if (t) { if (!h) return; --h } r = Ve(a, l.element); q = r[0]; r = r[1]; t = rg(a, l.element); q = ["rn", Ya(a),
                                            "x", Math.floor(65535 * (l.position.x - t.left) / (q || 1)), "y", Math.floor(65535 * (l.position.y - t.top) / (r || 1)), "t", Math.floor((l.time - f) / 100), "p", yf(a, l.element), "X", l.position.x, "Y", l.position.y]; q = G(":", q); m && (q += ":wh:1"); Eq(a, p, q, b, c); k = l
                                    }
                                }
                            }); return ha(a).F(n(a, "document"), ["click"], d)
                    }), It = B("trigger.in", function (a, c) { c.gg && Ub(a, C([a, "yacounter" + c.id + "inited"], Ar), "t.i") }), Jt = B("c.m.p", function (a, c) { var b, d = L(c); return b = {}, b.clickmap = u(Pe(a, d), Dq), b }), Qi = u("form", qc), lq = u("form", kb), Cq = v(w(cb, xb(qa)(T("settings.form_goals"))),
                        cb), Kt = B("s.f.i", function (a, c) { var b, d = [], e = [], f = ha(a); d.push(f.F(a, ["click"], D(a, "s.f.c", C([a, c, e], Bq)))); d.push(f.F(a, ["submit"], D(a, "s.f.e", function (g) { var h = n(g, "target"); g = n(g, "isTrusted"); lj(!0, a, c, e, h, g) }))); mj(a, c, "fgi", (b = {}, b.id = c.id, b)); return C([Ie, d], x) }), Lt = B("s.f.i", function (a, c) { return qa(c, function (b) { var d; if (n(b, "settings.button_goals")) return b = ha(a).F(a, ["click"], D(a, "c.t.c", w(C([a, c], of(a, c, "", Aq))))), pc(a, c, "gbi", (d = {}, d.id = c.id, d))(), b }) }), bc, de, hh, hd, Jb, dg = (bc = {}, bc.transaction_id =
                            "id", bc.item_brand = "brand", bc.index = "position", bc.item_variant = "variant", bc.value = "revenue", bc.item_category = "category", bc.item_list_name = "list", bc), nc = (de = {}, de.item_id = "id", de.item_name = "name", de.promotion_name = "coupon", de), zq = (hh = {}, hh.promotion_name = "name", hh), zl = (hd = {}, hd.promotion_name = "name", hd.promotion_id = "id", hd.item_id = "product_id", hd.item_name = "product_name", hd), wq = "currencyCode add delete remove purchase checkout detail impressions click promoView promoClick".split(" "), xq = (Jb = {}, Jb.view_item =
                                { event: "detail", xa: nc, La: "products" }, Jb.add_to_cart = { event: "add", xa: nc, La: "products" }, Jb.remove_from_cart = { event: "remove", xa: nc, La: "products" }, Jb.begin_checkout = { event: "checkout", xa: nc, La: "products" }, Jb.purchase = { event: "purchase", xa: nc, La: "products" }, Jb.view_item_list = { event: "impressions", xa: nc }, Jb.select_item = { event: "click", La: "products", xa: nc }, Jb.view_promotion = { event: "promoView", La: "promotions", xa: zl }, Jb.select_promotion = { event: "promoClick", La: "promotions", xa: zl }, Jb), kj = B("dl.w", function (a, c, b) {
                                    function d() {
                                        var g =
                                            n(a, c); (e = R(g) && Ne(a, g, b)) || (f = U(a, d, 1E3, "ec.dl"))
                                    } var e, f = 0; d(); return function () { return ma(a, f) }
                                }), Mt = B("p.e", function (a, c) { var b = Aa(a, c); if (b) { var d = J(a); b = b.params; var e = D(a, "h.ee", C([a, L(c), b], uq)); return c.sd ? (d.D("ecs", 0), jj(a, c.sd, e)) : qa(c, function (f) { if ((f = n(f, "settings.ecommerce")) && ja(f)) return d.D("ecs", 1), jj(a, f, e) }) } }), gj = v(function (a) { return G("[^\\d<>]*", a.split("")) }), Jn = v(function (a) { return new RegExp(gj(a), "g") }), rq = /\S/, $i = u(["style", "display:inline;margin:0;padding:0;font-size:inherit;color:inherit;line-height:inherit"],
                                    vd), Al = v(function (a) { return rd(a) || !pd(a) }), Nt = B("phc.h", function (a, c) { if (!tk(a) && !Al(a)) return qa(c, function (b) { if (!n(b, "settings.phchange")) { var d = Pa(a), e = fb(S(a).search, "_ym_hide_phones=1") || d.C("_ym_hide_phones", 0); b = n(b, "settings.phhide"); e && !b && (b = ["*"], d.D("_ym_hide_phones", 1)); b && Si(a, c, b) } })["catch"](D(a, "phc.hs")) }), Bl = v(function (a) { a = S(a); a = Vr(a.search.substring(1)); a["_ym_status-check"] = a["_ym_status-check"] || ""; a._ym_lang = a._ym_lang || "ru"; return a }), Vi = w(Bl, T("_ym_status-check"), Ia),
                Ot = w(Bl, T("_ym_lang")), iq = /^http:\/\/([\w\-.]+\.)?webvisor\.com\/?$/, jq = /^https:\/\/([\w\-.]+\.)?metri[kc]a\.yandex\.(ru|by|kz|com|com\.tr)\/?$/, Ui = hb(/^https:\/\/(yastatic\.net\/s3\/metrika|s3\.mds\.yandex\.net\/internal-metrika-betas|[\w-]+\.dev\.webvisor\.com|[\w-]+\.dev\.metrika\.yandex\.ru)\/(\w|-|\/|(\.)(?!\.))+\.js$/), nq = ["form", "button", "phone", "status"], ih = [], kq = v(function (a, c, b) {
                    x(w(Pc([a, c, b]), na), ih); if (b.inline) { c = Ti(b); var d = b.data; b = b.id; Pi(a, c, void 0 === b ? "" : b, void 0 === d ? "" : d) } else b.resource &&
                        Ui(b.resource) && (a._ym__postMessageEvent = c, a._ym__inpageMode = b.inpageMode, a._ym__initMessage = b.initMessage, oq(a, b.resource))
                }, function (a, c, b) { return b.id }), Pt = B("cs.init", function (a, c) { var b, d = Vi(a); if (d && c.id === d && "0" === c.ca) { var e = Ti((b = {}, b.lang = Ot(a), b.fileId = "status", b)); U(a, C([a, e, "" + d], Pi), 0, "cs") } }), Qt = B("suid.int", function (a, c) { var b; return b = {}, b.setUserID = function (d, e, f) { if (ja(d) || oc(a, d)) { var g = Aa(a, c); d = vd(["__ym", "user_id", d]); g.params(d, e || E, f) } else rc(a, L(c)).error("wuid") }, b }), Xc =
                    { position: "absolute" }, Oi = { position: "fixed" }, ag = { borderRadius: "50%" }, Rt = nb("siteStatistics", function (a, c) { if (!tk(a)) return Pb(a)(Sa(E, C([c, w(T("settings.sm"), Ba(1), C([C([a, c.id], gq), E], Cd), na)], qa))) }), St = B("up.int", function (a, c) { var b; return b = {}, b.userParams = D(a, "up.c", function (d, e, f) { var g, h = Aa(a, c), k = rc(a, L(c)).warn; h ? la(d) ? (d = (g = {}, g.__ymu = d, g), (g = h.params) && g(d, e || E, f)) : k("wup") : k("nci") }), b }), Tt = /[\*\.\?\(\)]/g, Ut = v(function (a, c, b) {
                        var d; try {
                            var e = b.replace("\\s", " ").replace(Tt, ""); rc(a, "").warn("nnw",
                                (d = {}, d.name = e, d))
                        } catch (f) { }
                    }, cb), Vt = B("r.nn", function (a) { Ze(a) && Ne(a, Jg, function (c) { c.za.F(function (b) { Ut(a, b[1], b[0]); Jg.splice(100) }) }) }), Wt = B("e.a.p", function (a, c) { var b, d = Aa(a, c); d = C([w(Q, Ha(!0)), va(A(u(d, n), ["clickmap", "trackLinks", "accurateTrackBounce"]))], A); c.Vg && d(); return b = {}, b.enableAll = d, b }), Xt = v(Mc, L), Yt = B("fpi", function (a) {
                        var c = Gd(a); if (c && !a.document.hidden) {
                            var b = J(a).Ia; b("fpe", 1); var d = ha(a).F(a, ["visibilitychange", "webkitvisibilitychange"], function () {
                                a.document.hidden && (b("fht",
                                    c.now()), d())
                            })
                        }
                    }), Zt = v(function (a) { a = n(a, "console"); var c = n(a, "log"); c = cf("log", c) ? H(c, a) : E; var b = n(a, "warn"); b = cf("warn", b) ? H(b, a) : c; var d = n(a, "error"); a = cf("error", d) ? H(d, a) : c; return { log: c, error: a, warn: b } }), Ab, $t = (Ab = {}, Ab.ecomeo = "Ecommerce data should be an object", Ab.ecomgei = "Ecommerce data should contain 'goods' non-empty array", Ab.ecomgi = "All items in 'goods' should be objects and contain 'id' or 'name' field", Ab.ecompi = "Purchase object should contain string or number 'id' field", Ab.pcs = "Warning: content has only {chars} chars. Required {limit}",
                        Ab.pdf = "Publisher content info found: ", Ab.pfi = "Warning: invalid value {value} in {itemField} in field {field}, this item will be ignored", Ab.ps = 'Publishers analytics schema "{schema}"', Ab.w2mo = "MutationObserver is overridden, webvisor is not guaranteed to work in this environment", Ab.imnc = "Attempting to init module {module} for non existent counter {key}", Ab), au = u("add", Fe), bu = u("remove", Fe), cu = u("detail", Fe), du = u("purchase", Fe), eu = "FB_IAB FBAV OKApp GSA/ yandex yango uber EatsKit YKeyboard iOSAppUslugi YangoEats PassportSDK".split(" "),
                wf = v(function (a) { var c = $k(a); a = c.kg; if (!c.mf) return !1; c = Fa("indexOf", a); c = ab(w(c, Ba(-1), Jc), eu); var b = /CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/.test(a), d = /YaBrowser\/[\d.]+/.test(a), e = /Mobile/.test(a); return c || b || d && e || !/Safari/.test(a) && e }), ln = v(function (a) { var c = mb(a); return c ? fb(c, "YangoEats") || Fd(a) : !1 }), eq = /([0-9\\.]+) Safari/, fu = /\sYptp\/\d\.(\d+)\s/, Cl = v(function (a) { var c; a: { if ((c = mb(a)) && (c = fu.exec(c)) && 1 < c.length) { c = Ia(c[1]); break a } c = 0 } return 50 <= c && 99 >= c || Ef(a, 79) ? !1 : !ae(a) || wf(a) }),
                Dl = "monospace;sans-serif;serif;Andale Mono;Arial;Arial Black;Arial Hebrew;Arial MT;Arial Narrow;Arial Rounded MT Bold;Arial Unicode MS;Bitstream Vera Sans Mono;Book Antiqua;Bookman Old Style;Calibri;Cambria;Cambria Math;Century;Century Gothic;Century Schoolbook;Comic Sans;Comic Sans MS;Consolas;Courier;Courier New;Garamond;Geneva;Georgia;Helvetica;Helvetica Neue;Impact;Lucida Bright;Lucida Calligraphy;Lucida Console;Lucida Fax;LUCIDA GRANDE;Lucida Handwriting;Lucida Sans;Lucida Sans Typewriter;Lucida Sans Unicode;Microsoft Sans Serif;Monaco;Monotype Corsiva;MS Gothic;MS Outlook;MS PGothic;MS Reference Sans Serif;MS Sans Serif;MS Serif;MYRIAD;MYRIAD PRO;Palatino;Palatino Linotype;Segoe Print;Segoe Script;Segoe UI;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Tahoma;Times;Times New Roman;Times New Roman PS;Trebuchet MS;Verdana;Wingdings;Wingdings 2;Wingdings 3".split(";"),
                gu = v(function (a) { a = gb(a)("canvas"); var c = n(a, "getContext"); if (!c) return null; try { var b = H(c, a)("2d"); b.font = "72px mmmmmmmmmmlli"; var d = b.measureText("mmmmmmmmmmlli").width; return function (e) { b.font = "72px " + e; return b.measureText("mmmmmmmmmmlli").width === d } } catch (e) { return null } }), El = pa(String.prototype.repeat, "repeat"), ii = El ? function (a, c) { return El.call(a, c) } : bq, ci = u(!0, function (a, c, b, d) { b = c.length && (b - d.length) / c.length; if (0 >= b) return d; c = ii(c, b); return a ? c + d : d + c }), df = [2277735313, 289559509], ef = [1291169091,
                    658871167], hu = B("p.cd", function (a) { if (Dd(a) || af(a)) { var c = Pa(a); if (ca(c.C("jn"))) { c.D("jn", !1); var b = a.chrome || Hd(a) ? function () { } : /./; a = Zt(a); b.toString = function () { c.D("jn", !0); return "Yandex.Metrika counter is initialized" }; a.log("%c%s", "color: inherit", b) } } }), iu = v(function (a) { a = n(a, "navigator.plugins"); return !!(a && Ta(a) && ab(w(T("name"), hb(/Chrome PDF Viewer/)), a)) }), cc = ta(function (a, c) { return J(c).C(a, null) }), Zp = { "*": "+", "-": "/", mj: "=", "+": "*", "/": "-", "=": "_" }, ju = v(function (a) {
                        return O(n(a, "yandex.getSiteUid")) ?
                            a.yandex.getSiteUid() : null
                    }), ku = v(u("panoramaId", De)), lu = v(function (a) { return De("pubcid.org", a) || De("_pubCommonId", a) }), mu = v(u("_sharedid", De)), nu = v(function (a, c) { if (c.Ua) return null; var b = Sc(a, "").C("_ga"); return b && nd(ne(b)) }, w(cb, L)), Vp = [["domainLookupEnd", "domainLookupStart"], ["connectEnd", "connectStart"], ["responseStart", "requestStart"], ["responseEnd", "responseStart"], ["fetchStart", "navigationStart"], ["redirectEnd", "redirectStart"], [function (a, c) { return n(c, "redirectCount") || n(a, "navigation.redirectCount") }],
                    ["domInteractive", "domLoading"], ["domContentLoadedEventEnd", "domContentLoadedEventStart"], ["domComplete", "navigationStart"], ["loadEventStart", "navigationStart"], ["loadEventEnd", "loadEventStart"], ["domContentLoadedEventStart", "navigationStart"]], Bb, Up = [["domainLookupEnd", "domainLookupStart"], ["connectEnd", "connectStart"], ["responseStart", "requestStart"], ["responseEnd", "responseStart"], ["fetchStart"], ["redirectEnd", "redirectStart"], ["redirectCount"], ["domInteractive", "responseEnd"], ["domContentLoadedEventEnd",
                        "domContentLoadedEventStart"], ["domComplete"], ["loadEventStart"], ["loadEventEnd", "loadEventStart"], ["domContentLoadedEventStart"]], Li = (Bb = {}, Bb.responseEnd = 1, Bb.domInteractive = 1, Bb.domContentLoadedEventStart = 1, Bb.domContentLoadedEventEnd = 1, Bb.domComplete = 1, Bb.loadEventStart = 1, Bb.loadEventEnd = 1, Bb.unloadEventStart = 1, Bb.unloadEventEnd = 1, Bb.secureConnectionStart = 1, Bb), Xp = v(Ld), Rp = v(Mc), Sp = v(function (a) {
                            var c = n(a, "webkitRequestFileSystem"); if (O(c) && !Dd(a)) return (new K(H(c, a, 0, 0))).then(function () {
                                var d =
                                    n(a, "navigator.storage") || {}; return d.estimate ? d.estimate() : {}
                            }).then(function (d) { return (d = d.quota) && 12E7 > d ? !0 : !1 })["catch"](u(!0, Q)); if (Wd(a)) return c = n(a, "navigator.serviceWorker"), K.resolve(X(c)); c = n(a, "openDatabase"); if (Hd(a) && O(c)) { var b = !1; try { c(null, null, null, null) } catch (d) { b = !0 } return K.resolve(b) } return K.resolve(!n(a, "indexedDB") && (n(a, "PointerEvent") || n(a, "MSPointerEvent")))
                        }), ou = /(\?|&)turbo_uid=([\w\d]+)($|&)/, pu = v(function (a, c) {
                            var b = Wc(a), d = S(a).search.match(ou); return d && 2 <= d.length ?
                                (d = d[2], c.Ua || b.D("turbo_uid", d), d) : (b = b.C("turbo_uid")) ? b : ""
                        }), qu = B("pa.plgn", function (a, c) { var b = te(a, c); b && b.$.F(["pluginInfo"], D(a, "c.plgn", function () { var d = J(a); d.D("cmc", d.C("cmc", 0) + 1); return rk(c) })) }), Tb, qb, dn = (Tb = {}, Tb.am = "com.am", Tb.tr = "com.tr", Tb.ge = "com.ge", Tb.il = "co.il", Tb["\u0440\u0444"] = "ru", Tb["xn--p1ai"] = "ru", Tb["\u0431\u0435\u043b"] = "by", Tb["xn--90ais"] = "by", Tb), Fl = { "mc.edadeal.ru": /^([^/]+\.)?edadeal\.ru$/, "mc.yandexsport.ru": /^([^/]+\.)?yandexsport\.ru$/, "mc.kinopoisk.ru": /^([^/]+\.)?kinopoisk\.ru$/ },
                en = (qb = {}, qb.ka = "ge", qb.ro = "md", qb.tg = "tj", qb.tk = "tm", qb.et = "ee", qb.hy = "com.am", qb.he = "co.li", qb.ky = "kg", qb.be = "by", qb.tr = "com.tr", qb.kk = "kz", qb), Gl = /^https?:\/\//, ru = { 1882689622: 1, 2318205080: 1, 3115871109: 1, 3604875100: 1, 339366994: 1, 2890452365: 1, 849340123: 1, 173872646: 1, 2343947156: 1, 655012937: 1, 3724710748: 1, 3364370932: 1, 1996539654: 1, 2065498185: 1, 823651274: 1, 12282461: 1, 1555719328: 1, 1417229093: 1, 138396985: 1, 3015043526: 1 }, Hl = v(function () {
                    return N(function (a, c) { var b = ic(c + "/tag.js"); a[b] = 1; return a }, {},
                        ["mc.yandex.ru/metrika", "mc.yandex.com/metrika", "cdn.jsdelivr.net/npm/yandex-metrica-watch"])
                }), su = v(function (a) { a = Gd(a); if (!a || !O(a.getEntriesByType)) return null; a = a.getEntriesByType("resource"); var c = Hl(); return (a = vb(function (b) { b = b.name.replace(Gl, "").split("?")[0]; b = ic(b); return c[b] }, a)) ? ub(a.transferSize) : null }), Mp = "ar:1:pv:1:v:" + Ga.bc + ":vf:" + cd.version, Np = Ga.Sa + "//" + lc + "/watch/" + Ga.og, Il = {}, tu = B("exps.int", function (a, c) {
                    var b; return b = {}, b.experiments = function (d, e, f) {
                        var g, h; void 0 === e && (e =
                            E); if (d && 0 < d.length) { var k = wa(a, "e", c), l = Od(c).url; d = k({ K: Ka((g = {}, g.ex = 1, g.ar = 1, g)), J: (h = {}, h["page-url"] = l || S(a).href, h.exp = d, h) }, c); return Yc(a, "exps.s", d, e, f) }
                    }, b
                }), xf = [], uu = B("p.fh", function (a, c) {
                    var b, d; void 0 === c && (c = !0); var e = Pa(a), f = ka(a), g = e.C("wasSynced"), h = { id: 3, ca: "0" }; return c && g && g.time + 864E5 > f(Z) ? K.resolve(g) : wa(a, "f", h)({ K: Ka((b = {}, b.pv = 1, b)), J: (d = {}, d["page-url"] = S(a).href, d["page-ref"] = a.document.referrer, d) }, h).then(function (k) {
                        var l; k = (l = {}, l.time = f(Z), l.params = n(k, "settings"),
                            l.bkParams = n(k, "userData"), l); e.D("wasSynced", k); return k
                    })["catch"](D(a, "f.h"))
                }), vu = ta(function (a, c) { 0 === parseFloat(n(c, "settings.c_recp")) && (a.Td.D("ymoo" + a.oa, a.cg(sb)), a.nd && a.nd.destruct && a.nd.destruct()) }), Cf = w(T("settings.pcs"), Ba("1")), Cp = [[["'(-$&$&$'", 30102, 0], ["'(-$&$&$'", 29009, 0]], [["oWdZ[nc[jh_YW$Yec", 30103, 1], ["oWdZ[nc[jh_YW$Yec", 29010, 1]]], Dp = [[["oWdZ[nc[jh_YW$Yec", 30103, 1]], [["oWdZ[nc[jh_YW$Yec", 29010, 1]]], Ki = { J: { t: 'UV|L7,!"T[rwe&D_>ZIb\\aW#98Y.PC6k' } }, zp = { ag: 60, error: 15 }, yp = {
                    ag: 5,
                    error: 1
                }, Ii = { id: 42822899, ca: "0" }, Jl = lc.split("."), wu = Jl.pop(), Kl = G(".", Jl), cn = v(function (a) { a = S(a).hostname.split("."); return a[a.length - 1] }), Eh = v(function (a) { return -1 !== S(a).hostname.search(/(?:^|\.)(?:ya|yandex|beru|kinopoisk|edadeal)\.(?:\w+|com?\.\w+)$/) }), xu = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|yastatic\.net|.*\.yandex|turbopages\.org|turbo\.site|diplodoc\.(com|tech)|datalens\.tech)$/, se = v(function (a) {
                    a = S(a).hostname; var c = !1; a && (c =
                        -1 !== a.search(xu)); return c
                }), yu = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|.*\.yandex|turbopages\.org|turbo\.site)$/, Fp = v(function (a) { a = S(a).hostname; var c = !1; a && (c = -1 !== a.search(yu)); return c }), Ll = Ga.Sa + "//" + lc + "/metrika", xe = Ll + "/metrika_match.html", jf, Jp = (jf = {}, jf.s = "p", jf["8"] = "i", jf), Gp = nb("csp", function (a, c) { return wa(a, "s", c)({}, ["https://ymetrica1.com/watch/3/1"]) }), jh = "et w v z i u vf".split(" "), Ml = Ud("wv"), zu = Ud("pub"), xi = function () {
                    function a(c,
                        b) { this.l = c; this.type = b } a.isEnabled = function (c) { return !!c.JSON }; a.prototype.Ha = function (c) { return Lf(Cb(this.l, c)) }; a.prototype.ub = function (c) { var b = c.data; "string" !== typeof b && (b = Cb(this.l, c.data)); return b }; a.prototype.lb = function (c) { return encodeURIComponent(c).length }; a.prototype.se = function (c, b) { for (var d = Math.ceil(c.length / b), e = [], f = 0; f < b; f += 1)e.push(c.slice(f * d, d * (f + 1))); return e }; return a
                }(), tp = v(function (a) {
                    function c(f, g, h, k) { d[0] = g; h[k] = e[3]; h[k + 1] = e[2]; h[k + 2] = e[1]; h[k + 3] = e[0] } function b(f,
                        g, h, k) { d[0] = g; h[k] = e[0]; h[k + 1] = e[1]; h[k + 2] = e[2]; h[k + 3] = e[3] } if ("undefined" === typeof a.Float32Array || "undefined" === typeof a.Uint8Array) return up; var d = new Float32Array([-0]), e = new Uint8Array(d.buffer); return 128 === e[3] ? b : c
                }), pp = Gi(!1), op = Gi(!0), ba, Oc, Nl = (ba = {}, ba.mousemove = 0, ba.mouseup = 1, ba.mousedown = 2, ba.click = 3, ba.scroll = 4, ba.windowblur = 5, ba.windowfocus = 6, ba.focus = 7, ba.blur = 8, ba.eof = 9, ba.selection = 10, ba.change = 11, ba.input = 12, ba.touchmove = 13, ba.touchstart = 14, ba.touchend = 15, ba.touchcancel = 16, ba.touchforcechange =
                    17, ba.zoom = 18, ba.resize = 19, ba.keystroke = 20, ba.deviceRotation = 21, ba.fatalError = 22, ba.hashchange = 23, ba.stylechange = 24, ba.articleInfo = 25, ba.publishersHeader = 26, ba.pageData = 27, ba.mutationAdd = 28, ba.mutationRemove = 29, ba.mutationTextChange = 30, ba.mutationAttributesChange = 31, ba), Ol = (Oc = {}, Oc.page = 0, Oc.event = 1, Oc.mutation = 2, Oc.publishers = 3, Oc.activity = 4, Oc), wi = function () {
                        function a(c, b) {
                            var d, e, f = this; this.isSync = !1; this.Fb = []; this.Xg = (d = {}, d.ad = "mutationAdd", d.re = "mutationRemove", d.tc = "mutationTextChange",
                                d.ac = "mutationAttributesChange", d.page = "pageData", d); this.Sg = (e = {}, e.ad = "addedNodesMutation", e.re = "removedNodesMutation", e.tc = "textChangeMutation", e.ac = "attributesChangeMutation", e.touchmove = "touchEvent", e.touchstart = "touchEvent", e.touchend = "touchEvent", e.touchforcechange = "touchEvent", e.touchcancel = "touchEvent", e.resize = "resizeEvent", e.scroll = "scrollEvent", e.change = "changeEvent", e.mousemove = "mouseEvent", e.mousedown = "mouseEvent", e.mouseup = "mouseEvent", e.click = "mouseEvent", e.focus = "focusEvent", e.blur =
                                    "focusEvent", e.deviceRotation = "deviceRotationEvent", e.zoom = "zoomEvent", e.keystroke = "keystrokesEvent", e.selection = "selectionEvent", e.stylechange = "styleChangeEvent", e.fatalError = "fatalErrorEvent", e.pageData = "page", e); this.sh = function (g) { var h = g.type; return g.event || "publishersHeader" !== h && "articleInfo" !== h ? { type: Ol[h], event: Nl[f.Xg[g.event] || g.event] } : { type: Ol.publishers, event: Nl[h] } }; this.uf = function (g) {
                                        var h = !X(g.partNum), k = f.sh(g); k = {
                                            stamp: g.stamp, type: k.type, event: k.event, frameId: g.frameId, chunk: h ?
                                                g.data : void 0, partNum: g.partNum, end: g.end
                                        }; !h && g.data && (h = f.Sg[g.event] || g.event || g.type) && (k[h] = g.data); return k
                                    }; this.l = c; this.type = b
                        } a.prototype.Ha = function (c, b) {
                            var d = this; void 0 === b && (b = !1); var e = gc(c, this.uf), f = this.isSync || b ? Infinity : 10; e = od(this.l, e, f); var g = [e]; this.Fb.push(e); return e(Wg(function (h) { h = zi(d.l, ep, { Bi: h }); h = od(d.l, h, f, yg); g.push(h); d.Fb.push(h); return h }))(Wg(function (h) { h = yi(d.l, h.slice(-4)); h = od(d.l, h, f, yg); g.push(h); d.Fb.push(h); return h }))(ol(function (h) {
                                h = h[h.length - 1];
                                x(function (k) { k = Oe(d.l)(k, d.Fb); d.Fb.splice(k, 1) }, g); return h
                            }))
                        }; a.prototype.ub = function (c) { return zi(this.l, Ai, this.uf(c))(zg(E)) }; a.prototype.lb = function (c) { return c[0] }; a.prototype.se = function (c, b) { for (var d = yi(this.l, c)(zg(E)), e = Math.ceil(d.length / b), f = [], g = 0; g < b; g += 1)f.push(d.slice(g * e, e * (g + 1))); return f }; a.isEnabled = function (c) { var b = Ze(c), d = !1; try { d = (d = 2 === (new c.Blob(["\u00e4"])).size) && 2 === (new c.Blob([new c.Uint8Array([1, 2])])).size } catch (e) { } return !b && d && !(!c.Uint8Array || !n(c, "Uint8Array.prototype.slice")) };
                        return a
                    }(), Pl = "resize scroll mousemove mousedown click windowfocus keydown orientationchange change focus touchmove touchstart".split(" "), Au = "id pageTitle stamp chars authors updateDate publicationDate pageUrlCanonical topics rubric".split(" "), Bu = function () {
                        function a(c, b, d, e, f) {
                            var g = this; this.Fc = !1; this.meta = {}; this.scroll = { x: 0, y: 0 }; this.involvedTime = this.sf = 0; this.Ud = this.Af = ""; this.fa = []; this.pe = this.Ka = 0; this.yb = { h: 0, w: 0 }; this.buffer = []; this.pg = Au; this.flush = function () {
                                g.pe = U(g.l, g.flush,
                                    2500); var h = g.Cd(); if (g.buffer.length || h) { var k = bf(g.buffer); h && k.push(h); g.Af = g.Ud; g.ma.Ha(k)(Sa(D(g.l, "p.b.st"), function (l) { l && g.Vb(l) })) }
                            }; this.Vb = e; this.ma = d; this.$b = H(this.$b, this); this.Cd = H(this.Cd, this); this.flush = H(this.flush, this); this.l = c; this.oa = f; this.Tc = b; this.Pd = "pai" + b.id; this.Jb(); this.Se = ha(this.l); this.time = ka(this.l); this.ig(); this.Fd = J(this.l); this.Ee = null
                        } a.prototype.start = function () {
                            this.pe = U(this.l, this.flush, 2500); if (!this.Fc) {
                                this.Li(); var c = this.Fd.C(this.Pd, []), b = !c.length;
                                c.push(H(this.Yh, this)); this.Fd.Ia(this.Pd, c); b && this.Jf(); this.Ee = ha(this.l).F(this.l, ["click"], H(this.Ji, this)); this.$b({ type: "page", target: this.l })
                            }
                        }; a.prototype.stop = function () { this.Zi(); this.Fc = !0; this.flush(); ma(this.l, this.pe) }; a.prototype.pf = function (c) { return qc("html", this.l, c) !== this.l.document.documentElement }; a.prototype.Jf = function () {
                            var c = this; D(this.l, "p.ic" + this.Tc.id, function () {
                                if (!c.Fc) {
                                    var b = c.Fd.C(c.Pd), d = c.Tc.dh(); x(function (e) { var f = A(function (g) { return z({}, g) }, d); O(e) && e(f) },
                                        b); c.Ka = U(c.l, H(c.Jf, c), 1E3, "p")
                                }
                            })()
                        }; a.prototype.Yh = function (c) { this.Fc || (this.$i(c), this.aj(), this.Hg()) }; a.prototype.Mg = function (c, b) { return (c.me || 0) <= (b.me || 0) ? b : c }; a.prototype.Ji = function (c) { if (this.fa.length) { c = qj(c); var b = S(this.l).hostname, d; if (d = c) d = Me(c.hostname) === Me(b); d && (c = N(this.Mg, this.fa[0], this.fa).id, b = Fc(this.l), ed(this.l, this.oa.split(":")[0]).D("pai", c + "-" + b)) } }; a.prototype.$b = function (c) {
                            var b = this; D(this.l, "p.ec." + this.Tc.id, function () {
                                var d, e; try { var f = c.type; var g = c.target } catch (p) { return } var h =
                                    "page" === f; if ("scroll" === f || h) { var k = [b.l, b.l.document, b.l.document.documentElement, Kc(b.l)]; I(g, k) && b.Jb() } ("resize" === f || h) && b.ig(); f = b.time(Z); var l = Math.min(f - b.sf, 5E3); b.involvedTime += Math.round(l); b.sf = f; if (b.meta && b.scroll && b.yb) {
                                        var m = b.yb.h * b.yb.w; b.fa = A(function (p) {
                                            var q = z({}, p), r = b.meta[q.id], t = Qc(p.Eb); if (!r || b.pf(q.element) || !t) return q; p = b.l.Math; r = p.max((b.scroll.y + b.yb.h - r.y) / r.height, 0); var y = t.height * t.width; t = Ch(b.l, t, b.yb); q.me = t / m; q.visibility = t / y; if (.9 <= q.visibility || .1 <= q.me) q.involvedTime +=
                                                l; q.maxScrolled = p.round(1E4 * r) / 1E4; return q
                                        }, b.fa); wb(b.l, (d = {}, d.name = "publishers", d.counterKey = b.oa, d.data = (e = {}, e.involvedTime = b.involvedTime, e.contentItems = A(function (p) { var q; return z((q = {}, q.contentElement = p.Eb, q), p) }, b.fa), e), d))
                                    }
                            })()
                        }; a.prototype.$i = function (c) { var b = A(function (d) { return d.id }, this.fa); this.fa = this.fa.concat(ia(function (d) { return !I(d.id, b) }, c)) }; a.prototype.ig = function () { var c = oe(this.l) || Rc(this.l); this.yb = { w: c[0], h: c[1] } }; a.prototype.aj = function () {
                            var c = this; D(this.l, "p.um." +
                                this.Tc.id, function () {
                                    var b = []; c.Jb(); c.meta = Db(function (d, e) { var f; if (c.pf(e.element)) b.push(e), delete d[e.id]; else { var g = (f = {}, f.id = e.id, f.involvedTime = Math.max(e.involvedTime, 0), f.maxScrolled = e.maxScrolled || 0, f.chars = e.update ? e.update("chars") || 0 : 0, f); e.Eb && (f = Qc(e.Eb)) && (g.x = Math.max(Math.round(f.left) + c.scroll.x, 0), g.y = Math.max(Math.round(f.top) + c.scroll.y, 0), g.width = Math.round(f.width), g.height = Math.round(f.height)); d[e.id] = g } return d }, {}, c.fa); x(function (d) {
                                        d = Oe(c.l)(d, c.fa); c.fa.splice(d,
                                            1)
                                    }, b)
                                })()
                        }; a.prototype.Cd = function () { var c, b, d = A(u(this.meta, n), da(this.meta)); return d.length && (this.Ud = Cb(this.l, d), this.Af !== this.Ud) ? (c = {}, c.type = "publishersHeader", c.data = (b = {}, b.articleMeta = d || [], b.involvedTime = this.involvedTime, b), c) : null }; a.prototype.Hg = function () {
                            var c = this; if (this.fa.length) {
                                var b = A(function (d) { var e, f = N(function (g, h) { d[h] && (g[h] = d[h]); return g }, {}, c.pg); d.Uf = !0; return e = {}, e.type = "articleInfo", e.stamp = f.stamp, e.data = f, e }, ia(function (d) { return !d.Uf }, this.fa)); b.length &&
                                    (this.buffer = this.buffer.concat(b), Mb(this.l, this.oa, ["pdf", b]))
                            }
                        }; a.prototype.Li = function () { this.Se.F(this.l, Pl, this.$b) }; a.prototype.Zi = function () { this.Ee && this.Ee(); this.Se.xb(this.l, Pl, this.$b) }; a.prototype.Jb = function () { this.scroll = { x: this.l.pageXOffset || n(this.l, "document.documentElement.scrollLeft") || 0, y: this.l.pageYOffset || n(this.l, "document.documentElement.scrollLeft") || 0 } }; return a
                    }(), ee, kh = (ee = {}, ee[1] = 500, ee[2] = 500, ee[3] = 0, ee), Cu = ["topics", "rubric", "authors"], lh = function () {
                        function a(c,
                            b) {
                            var d, e = this; this.id = "a"; this.Kd = !1; this.Gb = {}; this.tb = { "schema.org": "Article NewsArticle Movie BlogPosting Review Recipe Answer".split(" "), xf: ["article"] }; this.Ce = (d = {}, d.Answer = 3, d.Review = 2, d); this.Ve = v(function (f, g, h) { var k; Mb(e.l, e.oa, "pfi", (k = {}, k.field = f, k.itemField = g, k.value = h, k)) }, function (f, g, h) { return "" + f + g + h }); this.cj = function (f) {
                                Cu.forEach(function (g) {
                                    f[g] && (f[g] = f[g].reduce(function (h, k) {
                                        var l = k.name, m = k.position; if (!l) return e.Ve(g, "name", l), h; if ("string" === typeof m) {
                                            l = ue(m); if (null ===
                                                l || e.l.isNaN(l)) return e.Ve(g, "position", m), h; k.position = l
                                        } h.push(k); return h
                                    }, []))
                                }); return f
                            }; this.Ng = v(function (f, g) { var h; Mb(e.l, e.oa, ["pcs", g], (h = {}, h.chars = g.chars, h.limit = kh[g.type], h)) }); this.l = c; this.root = hc(c); this.oa = b
                        } a.prototype.Na = function (c) { return c.element }; a.prototype.bf = function (c, b) { var d = this, e; D(this.l, "P.s." + b, function () { e = d.Gb[b].call(d, c) })(); return e }; a.prototype.Ai = function (c) {
                            var b = z({}, c); this.Kd && !b.id && I(c.type, [3, 2]) && (c = G(", ", A(T("name"), b.authors || [])), b.pageTitle =
                                c + ": " + b.pageTitle); b.pageTitle || (b.pageTitle = this.Ch(b.Eb)); b.pageUrlCanonical || (c = b.id, b.pageUrlCanonical = ("string" !== typeof c ? 0 : /^(https?:)\/\//.test(c)) ? b.id : this.Ah()); b.id || (b.id = b.pageTitle || b.pageUrlCanonical); return b
                        }; a.prototype.Ea = function (c) {
                            var b = this, d = {}, e = this.Na(c); if (!e) return null; d.type = c.type; x(function (g) { d[g] = b.bf(c, g) }, da(this.Gb)); var f = ka(this.l); d.stamp = f(hk); d.element = c.element; d.Eb = e; d = this.cj(this.Ai(d)); d.id = d.id ? ic(d.id) : 1; d.update = function (g) {
                                return b.Na(c) ? b.bf(c,
                                    g) : void 0
                            }; return d
                        }; a.prototype.Ch = function (c) { for (var b = 1; 5 >= b; b += 1) { var d = db(fc("h" + b, c)); if (d) return d } }; a.prototype.Ah = function () { var c = fc('[rel="canonical"]', this.root); if (c) return c.href }; a.prototype.gf = function () { return 1 }; a.prototype.wc = function () { return [] }; a.prototype.dh = function () {
                            var c = this, b = this.wc(), d = 1; return Db(function (e, f) {
                                var g = c.Ea({ element: f, type: c.gf(f) }) || []; R(g) || (g = [g]); g = Db(function (h, k) {
                                    var l = h.values, m = h.jf; k && k.chars > kh[k.type] && !I(k.id, m) ? (l.push(k), m.push(k.id)) : k &&
                                        k.chars <= kh[k.type] && c.Ng(k.id, k); return { values: l, jf: m }
                                }, { values: [], jf: A(T("id"), e) }, g).values; return e.concat(A(function (h) { var k; h = z((k = { index: d, Uf: !1 }, k.involvedTime = 0, k), h); d += 1; return h }, g))
                            }, [], b)
                        }; return a
                    }(), Ql = function (a) {
                        function c() {
                            var b, d = null !== a && a.apply(this, arguments) || this; d.id = "j"; d.Kd = !0; d.Pe = G(",", ['script[type="application/ld+json"]', 'script[type="application/json+ld"]', 'script[type="ld+json"]', 'script[type="json+ld"]']); d.Gb = (b = {}, b.id = function (e) {
                                var f = e.data["@id"]; e = e.data.mainEntity ||
                                    e.data.mainEntityOfPage; !f && la(e) && (f = e["@id"]); return f
                            }, b.chars = function (e) { var f = e.data; return ja(f.text) ? f.text.length : Ob(this.Na(e)).length }, b.authors = function (e) { e = e.data; var f = []; f = f.concat(this.vc(e, "author")); f = f.concat(this.vc(e.mainEntity, "author")); return f.concat(this.vc(e.mainEntityOfPage, "author")) }, b.pageTitle = function (e) {
                                var f = e.data, g = f.headline || ""; f.alternativeHeadline && (g += " " + f.alternativeHeadline); "" === g && (f.name ? g = f.name : f.itemReviewed && (g = f.itemReviewed)); 3 === e.type && la(f.parentItem) &&
                                    (g = f.parentItem.text); return g
                            }, b.updateDate = function (e) { return e.data.dateModified || "" }, b.publicationDate = function (e) { return e.data.datePublished || "" }, b.pageUrlCanonical = function (e) { return e.data.url }, b.topics = function (e) { return this.vc(e.data, "about", ["name", "alternateName"]) }, b.rubric = function (e) {
                                var f = this, g = this.Na(e); e = va(A(function (h) {
                                    h = rb(f.l, Ob(h)); if (la(h) || R(h)) {
                                        var k = f.cf(h); if (k) return N(function (l, m) { return l ? l : la(m) && "BreadcrumbList" === m["@type"] ? m : l }, null, k); if ("BreadcrumbList" ===
                                            h["@type"]) return h
                                    } return null
                                }, [e.element].concat(kb(this.Pe, document.body === g ? document.documentElement : g)))); return e.length && (e = e[0].itemListElement, R(e)) ? va(A(function (h) { return la(h) && h.item && la(h.item) && !f.l.isNaN(h.position) ? { name: h.item.name || h.name, position: h.position } : null }, e)) : []
                            }, b); return d
                        } Oa(c, a); c.prototype.vc = function (b, d, e) {
                            void 0 === e && (e = ["name"]); if (!b || !b[d]) return []; b = R(b[d]) ? b[d] : [b[d]]; b = va(A(function (f) {
                                return f ? "string" === typeof f ? f : N(function (g, h) { return g || "" + f[h] }, "",
                                    e) : null
                            }, b)); return A(function (f) { var g; return g = {}, g.name = f, g }, b)
                        }; c.prototype.Na = function (b) { var d = b.element, e = b.data || {}; b = e["@id"]; var f = e.url; e = null; f && ja(f) && (e = this.Ue(f)); !e && b && ja(b) && (e = this.Ue(b)); e || (e = b = d.parentNode, !qc("head", this.l, d) && b && 0 !== Ob(b).length) || (e = this.l.document.body); return e }; c.prototype.Ue = function (b) { try { var d = Uc(this.l, b).hash; if (d) { var e = fc(d, this.l.document.body); if (e) return e } } catch (f) { } return null }; c.prototype.$d = function (b) { return this.Ce[b["@type"]] || 1 }; c.prototype.Ea =
                            function (b) {
                                var d = this, e = b.element, f = b.data; if (!f && (f = rb(this.l, Ob(e)), !f || !/schema\.org/.test(f["@context"]) && !R(f))) return null; var g = this.cf(f); if (g) return A(function (k) { return la(k) && I(k["@type"], d.tb["schema.org"]) ? a.prototype.Ea.call(d, { element: e, data: k, type: d.$d(k) }) : null }, g); b.data = f; if ("QAPage" === b.data["@type"]) { var h = b.data.mainEntity || b.data.mainEntityOfPage; if (!h) return null } "Question" === b.data["@type"] && (h = b.data); return h ? (b = zc(u(h, n), ["acceptedAnswer", "suggestedAnswer"]), A(function (k) {
                                    var l;
                                    if (!la(k) || !I(k["@type"], d.tb["schema.org"])) return null; k = { element: e, type: d.$d(k), data: z((l = {}, l.parentItem = h, l), k) }; return a.prototype.Ea.call(d, k)
                                }, b)) : I(b.data["@type"], this.tb["schema.org"]) ? a.prototype.Ea.call(this, z(b, { type: this.$d(b.data) })) : null
                            }; c.prototype.wc = function () { return kb(this.Pe, this.root) }; c.prototype.cf = function (b) { if (R(b)) return b; if (b && R(b["@graph"])) return b["@graph"] }; return c
                    }(lh), mh = function (a) {
                        function c() {
                            var b, d = null !== a && a.apply(this, arguments) || this; d.id = "s"; d.Kd =
                                !0; d.Yi = Fa("exec", new RegExp("schema.org\\/(" + G("|", da(d.Ce)) + ")$")); d.Gb = (b = {}, b.id = function (e) { e = e.element; var f = ib(this.l, e, "identifier"); return f ? db(f) : (f = ib(this.l, e, "mainEntityOfPage")) && f.getAttribute("itemid") ? f.getAttribute("itemid") : null }, b.chars = function (e) { var f = 0; e = e.element; for (var g = ["articleBody", "reviewBody", "recipeInstructions", "description", "text"], h = 0; h < g.length; h += 1) { var k = ib(this.l, e, g[h]); if (k) { f = db(k).length; break } } e = Ob(e); 0 === f && e && (f += e.length); return f }, b.topics = function (e) {
                                    var f =
                                        this, g = $d(this.l, e.element, "about"); return A(function (h) { var k = { name: db(h) }; if (g = ib(f.l, h, "name")) k.name = db(g); return k }, g)
                                }, b.rubric = function (e) { var f = this; (e = fc('[itemtype$="schema.org/BreadcrumbList"]', e.element)) || (e = fc('[itemtype$="schema.org/BreadcrumbList"]', this.root)); return e ? A(function (g) { return { name: db(ib(f.l, g, "name")), position: db(ib(f.l, g, "position")) } }, $d(this.l, e, "itemListElement")) : [] }, b.updateDate = function (e) { return (e = ib(this.l, e.element, "dateModified")) ? Hk(e) : "" }, b.publicationDate =
                                    function (e) { return (e = ib(this.l, e.element, "datePublished")) ? Hk(e) : "" }, b.pageUrlCanonical = function (e) { e = $d(this.l, e.element, "url"); if (e.length) { var f = e[0]; return f.href ? f.href : db(e) } return null }, b.pageTitle = function (e) {
                                        var f = "", g = e.element, h = ib(this.l, g, "headline"); h && (f += db(h)); (h = ib(this.l, g, "alternativeHeadline")) && (f += " " + db(h)); "" === f && ((h = ib(this.l, g, "name")) || (h = ib(this.l, g, "itemReviewed")), h && (f += db(h))); 3 === e.type && (e = qc('[itemtype$="schema.org/Question"]', this.l, g)) && (e = ib(this.l, e, "text")) &&
                                            (f += db(e)); return f
                                    }, b.authors = function (e) { var f = this; e = $d(this.l, e.element, "author"); return A(function (g) { var h, k = (h = {}, h.name = "", h); /.+schema.org\/(Person|Organization)/.test(g.getAttribute("itemtype") || "") && (h = ib(f.l, g, "name")) && (k.name = db(h)); k.name || (k.name = g.getAttribute("content") || Ob(g) || g.getAttribute("href")); return k }, e) }, b); return d
                        } Oa(c, a); c.prototype.gf = function (b) { b = b.getAttribute("itemtype") || ""; return (b = this.Yi(b)) ? this.Ce[b[1]] : 1 }; c.prototype.Ea = function (b) {
                            return b.element && Ob(b.element).length ?
                                a.prototype.Ea.call(this, b) : null
                        }; c.prototype.wc = function () { var b = G(",", A(function (d) { return '[itemtype$="schema.org/' + d + '"]' }, this.tb["schema.org"])); return kb(b, this.root) }; return c
                    }(lh), Rl = function (a) {
                        function c(b, d) {
                            var e, f = a.call(this, b, d) || this; f.id = "o"; f.Gb = (e = {}, e.chars = function (g) { g = this.Na(g); return Ob(g).length }, e.authors = function (g) { return this.yd(g.data.author) }, e.pageTitle = function (g) { return this.Ac(g.data.title) || "" }, e.updateDate = function (g) { return this.Ac(g.data.modified_time) }, e.publicationDate =
                                function (g) { return this.Ac(g.data.published_time) }, e.pageUrlCanonical = function (g) { return this.Ac(g.data.url) }, e.rubric = function (g) { return this.yd(g.data.section) }, e.topics = function (g) { return this.yd(g.data.tag) }, e); f.Wg = new RegExp("^(og:)?((" + G("|", f.tb.xf) + "):)?"); return f
                        } Oa(c, a); c.prototype.yd = function (b) { var d; return b ? R(b) ? A(function (e) { var f; return f = {}, f.name = e ? "" + e : null, f }, b) : [(d = {}, d.name = b ? "" + b : null, d)] : [] }; c.prototype.Ac = function (b) { return R(b) ? b.length ? "" + b[0] : null : b ? "" + b : null }; c.prototype.wc =
                            function () { var b = kb('meta[property="og:type"]', this.l.document.body); return [this.l.document.head].concat(b) }; c.prototype.rh = function (b) {
                                var d = this, e = b.element, f = {}, g = this.Na(b); e = kb("meta[property]", e === this.l.document.head ? e : g); if (e.length) x(function (h) { try { if (h.parentNode === g || h.parentNode === d.l.document.head) { var k = h.getAttribute("property").replace(d.Wg, ""), l = db(h); f[k] ? R(f[k]) ? f[k].push(l) : f[k] = [f[k], l] : f[k] = l } } catch (m) { Ed(d.l, "og.ed", m) } }, e); else return null; return I(f.type, this.tb.xf) ? z(b,
                                    { data: f }) : null
                            }; c.prototype.Na = function (b) { b = b.element; var d = this.l.document; return b === d.head ? d.body : b.parentNode }; c.prototype.Ea = function (b) { return (b = this.rh(b)) ? a.prototype.Ea.call(this, b) : null }; return c
                    }(lh), fe = {}; Ql && (fe.json_ld = Ql); mh && (fe.schema = mh, fe.microdata = mh); Rl && (fe.opengraph = Rl); var Du = B("p.p", function (a, c) {
                        function b(m) { var p = z({}, l); p.ba.da = m; return f(p, c)["catch"](D(a, "s.ww.p")) } var d, e = vi(a, "9", "8"); if (!Ea("querySelectorAll", a.document.querySelectorAll) || !e) return K.resolve(); var f =
                            wa(a, "p", c), g = Ka(), h = ed(a, c.id), k = h.C("pai"); k && (h.qc("pai"), g.D("pai", k)); var l = { J: (d = {}, d["wv-type"] = e.type, d), K: g, ba: {} }; return qa(c, D(a, "ps.s", function (m) { var p; if (m = n(m, "settings.publisher.schema")) { sk(c) && (m = "microdata"); var q = fe[m]; if (q && e) { var r = L(c); q = new q(a, r); q = new Bu(a, q, e, b, r); q.start(); Mb(a, r, "ps", (p = {}, p.schema = m, p)); return H(q.stop, q) } } }))
                    }), Eu = function () {
                        function a(c, b) { this.type = "0"; this.l = c; this.ph = b } a.prototype.Ha = function (c) { return Lf(zc(H(this.ub, this), c)) }; a.prototype.ub = function (c,
                            b) { var d = this, e = [], f = this.ph(this.l, b && b.type, c.type); f && (e = zc(function (g) { return g({ l: d.l, qa: c }) || [] }, f)); return e }; a.prototype.lb = function (c) { return c.length }; a.prototype.se = function (c) { return [c] }; a.prototype.isEnabled = function () { return !0 }; return a
                    }(), Sl = function () {
                        function a(c, b, d) { this.Qe = 0; this.ae = 1; this.bd = 5E3; this.l = c; this.ma = b; this.Vb = d } a.prototype.Wc = function () { this.Qe = U(this.l, w(H(this.flush, this), H(this.Wc, this)), this.bd, "b.f") }; a.prototype.send = function (c, b) {
                            var d = this.Vb(c, b || [], this.ae);
                            this.ae += 1; return d
                        }; a.prototype.push = function () { }; a.prototype.flush = function () { }; return a
                    }(), uo = function (a) { function c(b, d, e) { b = a.call(this, b, d, e) || this; b.buffer = []; b.qg = 7500; b.bd = 3E4; b.Wc(); return b } Oa(c, a); c.prototype.push = function (b, d) { var e = this.ma.ub(b, d); sa(this.buffer, e); this.ma.lb(this.buffer) > this.qg && this.flush() }; c.prototype.flush = function () { var b = this.buffer; b.length && (this.send(b), this.buffer = []) }; return c }(Sl), Jo = /opera mini/i, pi = ["phone", "email"], Tl = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state contact.*".split(" "),
                        Go = /^[\w\u0410-\u042f\u0430-\u044f]$/, Ho = [65, 90], Io = [97, 122], Eo = "color radio checkbox date datetime-local email month number password range search tel text time url week".split(" "), Co = new RegExp("(" + G("|", Tl) + ")", "i"), Bo = new RegExp("(" + G("|", pi) + ")", "i"), Ik = ["password", "passwd", "pswd"], Do = new RegExp("(" + G("|", Tl.concat("\u0438\u043c\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0434\u0435\u043a\u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0430\u0434\u0440\u0435\u0441 \u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u043d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b \u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2}\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u043e\u043c \u0443\u043b\u0438\u0446\u0430 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0433\u043e\u0440\u043e\u0434 \u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(" "))) +
                            ")", "i"), Za = "metrikaId_" + Math.random(), Cc = { counter: 0 }, As = v(function () {
                                var a; return a = {}, a.A = 1, a.ABBR = 2, a.ACRONYM = 3, a.ADDRESS = 4, a.APPLET = 5, a.AREA = 6, a.B = 7, a.BASE = 8, a.BASEFONT = 9, a.BDO = 10, a.BIG = 11, a.BLOCKQUOTE = 12, a.BODY = 13, a.BR = 14, a.BUTTON = 15, a.CAPTION = 16, a.CENTER = 17, a.CITE = 18, a.CODE = 19, a.COL = 20, a.COLGROUP = 21, a.DD = 22, a.DEL = 23, a.DFN = 24, a.DIR = 25, a.DIV = 26, a.DL = 27, a.DT = 28, a.EM = 29, a.FIELDSET = 30, a.FONT = 31, a.FORM = 32, a.FRAME = 33, a.FRAMESET = 34, a.H1 = 35, a.H2 = 36, a.H3 = 37, a.H4 = 38, a.H5 = 39, a.H6 = 40, a.HEAD = 41, a.HR = 42, a.HTML =
                                    43, a.I = 44, a.IFRAME = 45, a.IMG = 46, a.INPUT = 47, a.INS = 48, a.ISINDEX = 49, a.KBD = 50, a.LABEL = 51, a.LEGEND = 52, a.LI = 53, a.LINK = 54, a.MAP = 55, a.MENU = 56, a.META = 57, a.NOFRAMES = 58, a.NOSCRIPT = 59, a.OBJECT = 60, a.OL = 61, a.OPTGROUP = 62, a.OPTION = 63, a.P = 64, a.PARAM = 65, a.PRE = 66, a.Q = 67, a.S = 68, a.SAMP = 69, a.SCRIPT = 70, a.SELECT = 71, a.SMALL = 72, a.SPAN = 73, a.STRIKE = 74, a.STRONG = 75, a.STYLE = 76, a.SUB = 77, a.SUP = 78, a.TABLE = 79, a.TBODY = 80, a.TD = 81, a.TEXTAREA = 82, a.TFOOT = 83, a.TH = 84, a.THEAD = 85, a.TITLE = 86, a.TR = 87, a.TT = 88, a.U = 89, a.UL = 90, a.VAR = 91, a.NOINDEX =
                                    100, a
                            }), xs = [17, 18, 38, 32, 39, 15, 11, 7, 1], Fu = function () {
                                var a = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state".split(" ");
                                return {
                                    vj: new RegExp("(" + G("|", a) + ")", "i"), Ej: new RegExp("(" + G("|", a.concat("\u0438\u043c\u044f;\u0444\u0430\u043c\u0438\u043b\u0438\u044f;\u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e;\u0438\u043d\u0434\u0435\u043a\u0441;\u0442\u0435\u043b\u0435\u0444\u043e\u043d;\u0430\u0434\u0440\u0435\u0441;\u043f\u0430\u0441\u043f\u043e\u0440\u0442;\u041d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b;\u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2} \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f;\u0434\u043e\u043c;\u0443\u043b\u0438\u0446\u0430;\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430;\u0433\u043e\u0440\u043e\u0434;\u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(";"))) +
                                        ")", "i"), tj: /ym-record-keys/i, ki: "\u2022", Dj: 88
                                }
                            }(), Nk = Xb(u(Fu.ki, Q)), yd = !0, Pg = "", Qg = !1, Rg = !0, Sg = !1, zo = ta(function (a, c) { var b = C([a, "efv." + c.event], D); c.O = A(w(Q, b), c.O); return c }), Ul = v(function (a) {
                                var c = [], b = [], d = []; a.document.attachEvent && !a.opera && (c.push(Rf), b.push(Ds), b.push(Es)); a.document.addEventListener ? c.push(Lk) : (b.push(Kk), d.push(Lk)); return yo(a, [{ target: a, type: "window", event: "beforeunload", O: [E] }, { target: a, type: "window", event: "unload", O: [E] }, { event: "click", O: [ff] }, { event: "dblclick", O: [ff] },
                                { event: "mousedown", O: [ff] }, { event: "mouseup", O: [Gs] }, { event: "keydown", O: [Hs] }, { event: "keypress", O: [Is] }, { event: "copy", O: [Pk] }, { event: "blur", O: c }, { event: "focusin", O: b }, { event: "focusout", O: d }].concat(!a.document.attachEvent || a.opera ? [{ target: a, type: "window", event: "focus", O: [ni] }, { target: a, type: "window", event: "blur", O: [Rf] }] : []).concat(a.document.addEventListener ? [{ event: "focus", O: [Kk] }, { event: "change", O: [Mk] }, { event: "submit", O: [Rk] }] : [{ type: "formInput", event: "change", O: [Mk] }, {
                                    type: "form", event: "submit",
                                    O: [Rk]
                                }]))
                            }), wo = v(function (a) { return Kc(a) ? [{ target: a, type: "document", event: "mouseleave", O: [Js] }] : [] }), Gu = ["submit", "beforeunload", "unload"], Hu = v(function (a, c) { var b = c(a); return N(function (d, e) { d[e.type + ":" + e.event] = e.O; return d }, {}, b) }), Iu = u(Ul, function (a, c, b, d) { return Hu(c, a)[b + ":" + d] || [] }), xo = /^\s*function submit\(\)/, Ju = B("fw.p", function (a, c) {
                                var b; if (!(b = c.Tg || !c.zb)) { var d = J(a), e = !1; b = d.C("hitParam", {}); var f = L(c); b[f] && (d = d.C("counters", {}), e = je(c.ca) && !d[f]); b[f] = 1; b = e } if (b) return K.resolve(E);
                                b = new Eu(a, Iu); return to(a, c, b, Ul, Gu)
                            }), nh, Vl = (nh = function (a) {
                                function c(b, d, e, f) { void 0 === f && (f = 0); d = a.call(this, b, d, e) || this; d.ze = 0; d.Cb = 0; d.ye = 0; d.buffer = []; d.bd = 2E3; d.$ = wd(b); d.Wc(); d.ye = f; return d } Oa(c, a); c.prototype.$e = function (b) { return va(this.$.R("ag", b)) }; c.prototype.Ze = function (b, d) { var e = this; b(Sa(D(this.l, "wv2.b.st"), function (f) { e.send(f, d) })) }; c.prototype.Ki = function (b, d) {
                                    var e = this; ma(this.l, this.Qe); var f = Math.ceil(this.ma.lb(d) / 63E4), g = this.ma.se(d, f); x(function (h, k) {
                                        var l, m = z({},
                                            b, (l = {}, l.data = h, l.partNum = k + 1, l.end = k + 1 === f, l.partsTotal = g.length, l)); l = e.ma.Ha([m], !1); e.Ze(l, [m])
                                    }, g); this.Wc()
                                }; c.prototype.send = function (b, d) { var e = this; this.$.R("se", d); return a.prototype.send.call(this, b, d).then(Q, function () { e.$.R("see", d) }) }; c.af = function (b, d, e, f, g) { c.ed["" + b + d] || (this.ed[d] = new c(g, f, e, "m" === d ? 31457280 : 0)); return this.ed[d] }; c.prototype.Wh = function () { return this.ye && this.ze >= this.ye }; c.prototype.push = function (b) {
                                    var d = this; if (!this.Wh()) {
                                        this.$.R("p", b); var e = this.ma.ub(b),
                                            f = this.ma.lb(e); 7E5 < f ? this.Ki(b, e) : (e = this.$e(this.buffer.concat([b])), e = Db(function (g, h) { return g + d.ma.lb(d.ma.ub(h)) }, 0, e), this.Cb + e + f >= 7E5 * .7 && this.flush(), this.buffer.push(b), this.Cb += f)
                                    }
                                }; c.prototype.F = function (b, d) { this.$.F([b], d) }; c.prototype.ga = function (b, d) { this.$.ga([b], d) }; c.prototype.flush = function (b) { var d = this.buffer.concat(this.$e(this.buffer)); d.length && (this.buffer = [], this.ze += this.Cb, this.Cb = 0, b = this.ma.Ha(d, b), this.Ze(b, d)) }; return c
                            }(Sl), nh.ed = {}, nh), eb = function () {
                                function a(c,
                                    b, d) { this.$h = "wv2.c"; this.Ob = []; this.ia = []; this.l = c; this.L = Pf(c, this, d, this.$h); this.G = b; this.eb = this.G.uh(); this.start = this.L.H(this.start, "st"); this.stop = this.L.H(this.stop, "sp") } a.prototype.start = function () { var c = this; this.Ob = A(function (b) { var d = b[0], e = b[2]; b = H(c.L.H(b[1], d[0]), c); return c.eb.F(e || c.l, d, b) }, this.ia) }; a.prototype.stop = function () { x(na, this.Ob) }; a.prototype.Z = function (c) { return this.G.sa().Z(c) }; return a
                            }(), ro = ["checkbox", "radio"], so = /pwd|value|password/i, oh = T("location.href"), Ku =
                            function (a) {
                                function c(b, d, e) { d = a.call(this, b, d, e) || this; d.ra = { elements: [], attributes: [] }; d.index = 0; d.Wd = d.L.H(d.Wd, "o"); d.od = d.L.H(d.od, "io"); d.cd = d.L.H(d.cd, "ao"); d.ee = d.L.H(d.ee, "a"); d.ce = d.L.H(d.ce, "at"); d.fe = d.L.H(d.fe, "r"); d.de = d.L.H(d.de, "c"); d.za = new b.MutationObserver(d.Wd); return d } Oa(c, a); c.prototype.start = function () { this.za.observe(this.l.document.documentElement, { attributes: !0, characterData: !0, childList: !0, subtree: !0, attributeOldValue: !0, characterDataOldValue: !0 }) }; c.prototype.stop = function () { this.za.disconnect() };
                                c.prototype.cd = function (b) { var d = b.target; b = b.attributeName; var e = Rb(this.l)(d, this.ra.elements); -1 === e && (e = this.ra.elements.push(d) - 1, this.ra.attributes[e] = {}); this.ra.attributes[e] || (this.ra.attributes[e] = {}); e = this.ra.attributes[e]; var f = d.getAttribute(b); e[b] = ye(this.l, d, b, f, this.G.Ib()).value }; c.prototype.od = function (b) {
                                    function d(k) { var l = Rb(e.l)(k, f); return -1 === l ? (f.push(k), k = { wd: {} }, g.push(k), k) : g[l] } var e = this, f = [], g = []; x(function (k) {
                                        var l = k.attributeName, m = k.removedNodes, p = k.oldValue, q =
                                            k.target, r = k.nextSibling, t = k.previousSibling; switch (k.type) { case "attributes": e.cd(k); var y = d(q); y.wd[l] || (y.wd[l] = ye(e.l, q, l, p, e.G.Ib()).value); break; case "childList": m && x(function (F) { y = d(F); y.Xe || z(y, { Xe: q, jh: r ? r : void 0, kh: t ? t : void 0 }) }, Ca(m)); break; case "characterData": y = d(q), y.Ye || (y.Ye = p) }
                                    }, b); var h = this.G.sa(); x(function (k, l) { h.qe(k, g[l]) }, f)
                                }; c.prototype.Wd = function (b) {
                                    var d = this; if (oh(this.l)) {
                                        var e = this.G.stamp(); this.od(b); x(function (f) {
                                            var g = f.addedNodes, h = f.removedNodes, k = f.target; switch (f.type) {
                                                case "childList": h &&
                                                    h.length && d.fe(Ca(h), e); g && g.length && d.ee(Ca(g), e); break; case "characterData": d.de(k, e)
                                            }
                                        }, b); this.ce(e)
                                    } else this.stop()
                                }; c.prototype.ce = function (b) { var d = this; x(function (e, f) { var g = d.yc(); d.G.Y("mutation", { index: g, attributes: d.ra.attributes[f], target: d.Z(e) }, "ac", b) }, this.ra.elements); this.ra.elements = []; this.ra.attributes = [] }; c.prototype.ee = function (b, d) {
                                    var e = this, f = this.yc(); this.G.sa().Cc({
                                        nodes: b, Vc: function (g) {
                                            g = A(function (h) { h.node = void 0; return h }, g); e.G.Y("mutation", { index: f, nodes: g }, "ad",
                                                d)
                                        }
                                    })
                                }; c.prototype.fe = function (b, d) { var e = this, f = this.yc(), g = this.G.sa(), h = A(function (k) { var l = g.removeNode(k); hj(e.l, k, function (m) { g.removeNode(m) }); return l }, b); this.G.Y("mutation", { index: f, nodes: h }, "re", d) }; c.prototype.de = function (b, d) { var e = this.yc(); this.G.Y("mutation", { value: b.textContent, target: this.Z(b), index: e }, "tc", d) }; c.prototype.yc = function () { var b = this.index; this.index += 1; return b }; return c
                            }(eb), Lu = function () {
                                function a(c, b) {
                                    var d = this; this.uc = []; this.fb = []; this.Vd = 1; this.Ne = this.Qf =
                                        0; this.ya = {}; this.Mb = {}; this.Hb = []; this.Hd = function (f) { return d.fb.length ? I(f, d.fb) : !1 }; this.removeNode = function (f) { var g = d.Z(f), h = Na(f); if (h) return h = "NR:" + h.toLowerCase(), d.Hd(h) && d.$.R(h, { data: { node: f, id: g } }), g }; this.kb = function (f) { var g = Na(f); if (g) { var h = f.__ym_indexer; return h ? h : (h = d.Vd, f.__ym_indexer = h, d.Vd += 1, g = "NA:" + g.toLowerCase(), d.Hd(g) && d.$.R(g, { data: { node: f, id: h } }), h) } return null }; this.Kf = function () { d.Qf = U(d.l, w(H(d.aa, d, !1), d.Kf), 50, "i.s") }; this.If = function () {
                                            d.Ne = U(d.l, w(H(d.hd, d, !1),
                                                d.If), 50, "i.g")
                                        }; this.Ci = function (f) { null === d.ya[f] && delete d.ya[f] }; this.l = c; var e = Pf(c, this, "i"); this.$ = wd(c); this.options = b; this.start = e.H(this.start, "st"); this.stop = e.H(this.stop, "sp"); this.Z = e.H(this.Z, "i"); this.qe = e.H(this.qe, "o"); this.Cc = e.H(this.Cc, "a"); this.removeNode = e.H(this.removeNode, "r"); this.aa = e.H(this.aa, "s"); this.hd = e.H(this.hd, "g")
                                } a.prototype.qe = function (c, b) { var d = this.kb(c); Xa(d) || (this.Mb[d] && this.Z(c), this.Mb[d] = b) }; a.prototype.F = function (c, b, d) {
                                    c = "" + b + c; this.fb.push(c); this.Hd(c) ||
                                        this.fb.push(c); this.$.F([c], d)
                                }; a.prototype.ga = function (c, b, d) { var e = "" + b + c; this.fb = ia(function (f) { return f !== e }, this.fb); this.$.ga([e], d) }; a.prototype.start = function () { this.Kf(); this.If() }; a.prototype.stop = function () { this.flush(); ma(this.l, this.Ne); ma(this.l, this.Qf); this.uc = []; this.Hb = []; this.ya = {}; this.Mb = {} }; a.prototype.Cc = function (c) {
                                    var b = this, d = [], e = 0, f = { Vc: c.Vc, result: [], Dc: 0, nodes: d }; this.uc.push(f); x(function (g) {
                                        hj(b.l, g, function (h) {
                                            var k = b.kb(h); Xa(k) || (d.push(h), b.ya[k] && b.Z(h), b.ya[k] =
                                                { node: h, event: f, Wi: e }, e += 1)
                                        })
                                    }, c.nodes)
                                }; a.prototype.Z = function (c) {
                                    if (c === this.l) return 0; var b = this.kb(c), d = this.ya[b], e = this.nh(b), f = e.Xe, g = e.wd, h = e.Ye, k = e.jh, l = e.kh; if (d) {
                                        e = d.event; d = d.Wi; var m = gt(this.l) === c; k = k || c.nextSibling; var p = l || c.previousSibling; l = !m && k ? this.kb(k) : null; p = !m && p ? this.kb(p) : null; m = this.l; k = this.options; f = this.kb(f || c.parentNode || c.parentElement) || 0; var q = g, r = void 0; void 0 === p && (p = null); void 0 === l && (l = null); void 0 === q && (q = {}); void 0 === r && (r = Na(c)); if (X(r)) c = void 0; else {
                                            g =
                                                { id: b, prev: p !== f ? p : null, next: l !== f ? l : null, parent: f, name: r.toLowerCase(), node: c }; if (Vf(c)) { if (h = oo(c, h), g.attributes = {}, g.content = h) if (c = xd(m, c)) g.content = "" !== bb(h) ? Fo(m, h) : h, g.hidden = c } else h = po(m, c, k, q, r), m = h.pb, g.attributes = h.Bg, m && (g.hidden = m), c.namespaceURI && fb(c.namespaceURI, "svg") && (g.namespace = c.namespaceURI); c = g
                                        } if (X(c)) return; this.ya[b] = null; this.Hb.push(b); e.result[d] = c; e.Dc += 1; e.nodes.length === e.Dc && e.Vc(e.result)
                                    } return b
                                }; a.prototype.flush = function () { this.aa(!0) }; a.prototype.hd = function () {
                                    if (this.Hb.length) {
                                        var c =
                                            gc(this.Hb, this.Ci), b = yg(this.l, 30); c(b)
                                    }
                                }; a.prototype.aa = function (c) { var b = this; if (oh(this.l)) { var d = da(this.ya); d = N(function (e, f) { b.ya[f] && e.push(b.ya[f].node); return e }, [], d); d = gc(d, this.Z); c = c ? fk(E) : dk(this.l, 20); d(c); this.uc = ia(function (e) { return e.Dc !== e.result.length }, this.uc) } }; a.prototype.nh = function (c) { if (Xa(c)) return {}; var b = this.Mb[c]; return b ? (this.Mb[c] = null, this.Hb.push(c), b) : {} }; return a
                            }(), Mu = ["input", "change", "keyup", "paste", "cut"], Nu = function (a) {
                                function c(b, d, e) {
                                    b = a.call(this,
                                        b, d, e) || this; b.inputs = {}; b.rd = !1; b.Kc = b.L.H(b.Kc, "ii"); b.Lc = b.L.H(b.Lc, "ir"); b.Qc = b.L.H(b.Qc, "ri"); b.Zc = b.L.H(b.Zc, "ur"); b.Gd = b.L.H(b.Gd, "ce"); b.Bc = b.L.H(b.Bc, "vc"); return b
                                } Oa(c, a); c.prototype.start = function () { var b = this, d = this.G.sa(); this.rd = this.Ig(); x(function (e) { e = e.toLowerCase(); d.F(e, "NA:", H(b.Kc, b)); d.F(e, "NR:", H(b.Lc, b)) }, Uf); this.Ob = [this.eb.F(this.l.document, Mu, H(this.Gd, this)), function () { x(function (e) { e = e.toLowerCase(); d.ga(e, "NA:", b.Kc); d.ga(e, "NR:", b.Lc) }, Uf); x(b.Zc, da(b.inputs)) }] };
                                c.prototype.Zc = function (b) { var d = this.inputs[b]; if (d) { if (this.rd) { var e = d.xi; d = d.element; e && this.l.Object.defineProperty(d, this.zc(d), e) } delete this.inputs[b] } }; c.prototype.Lc = function (b) { b && this.Zc(b.data.id) }; c.prototype.Kc = function (b) { b && (b = b.data, this.Qc(b.node, b.id)) }; c.prototype.zc = function (b) { return Xe(b) ? "checked" : "value" }; c.prototype.Gd = function (b) { if (b = b.target) { var d = this.zc(b); this.Bc(b[d], b) } }; c.prototype.Bc = function (b, d) {
                                    var e = this.Z(d), f = this.inputs[e]; if (!f && (f = this.Qc(f, e), !f)) return;
                                    e = f.Kg; var g = f.value, h = this.zc(d), k = !b || I(typeof b, ["string", "boolean", "number"]), l = this.G.Ib().Md; k && b !== g && (g = ye(this.l, d, h, b, this.G.Ib()).value, e ? this.G.Y("event", { target: this.Z(d), checked: !!b }, "change") : (e = Vc(this.l, d, l), l = e.hb, this.G.Y("event", { value: g, hidden: e.qb && !l, target: this.Z(d) }, "change")), f.value = b)
                                }; c.prototype.Qc = function (b, d) {
                                    var e = this; if (!Nf(b) || "__ym_input_override_test" === b.getAttribute("class") || this.inputs[d]) return null; var f = Xe(b), g = this.zc(b), h = { element: b, Kg: f, value: b[g] };
                                    this.inputs[d] = h; this.rd && Ub(this.l, function () { var k = e.l.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(b), g) || {}, l = e.l.Object.getOwnPropertyDescriptor(b, g) || {}, m = z({}, k, l); if (Ea("((set)?(\\s?" + g + ")?)?", m.set)) { try { e.l.Object.defineProperty(b, g, z({}, m, { configurable: !0, set: function (p) { e.Bc(p, this); return m.set.call(this, p) } })) } catch (p) { } h.xi = m } }); return h
                                }; c.prototype.Ig = function () {
                                    var b = !0, d = gb(this.l)("input"); try {
                                        d = gb(this.l)("input"); d.value = "INPUT_VALUE"; d.style.setProperty("display", "none",
                                            "important"); d.setAttribute("type", "text"); d.setAttribute("class", "__ym_input_override_test"); var e = this.l.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(d), "value") || {}, f = this.l.Object.getOwnPropertyDescriptor(d, "value") || {}, g = z({}, e, f); this.l.Object.defineProperty(d, "value", z({}, g, { configurable: !0, set: function (h) { return g.set.call(d, h) } })); "INPUT_VALUE" !== d.value && (b = !1); d.value = "INPUT_TEST"; "INPUT_TEST" !== d.value && (b = !1)
                                    } catch (h) { b = !1 } return b
                                }; return c
                            }(eb), Ou = function (a) {
                                function c(b,
                                    d, e) { b = a.call(this, b, d, e) || this; b.Xa = { width: 0, height: 0, pageHeight: 0, pageWidth: 0, orientation: 0 }; b.ia.push([["resize"], b.vi]); b.ia.push([["orientationchange"], b.ti]); return b } Oa(c, a); c.prototype.start = function () { a.prototype.start.call(this); this.Nf() }; c.prototype.vi = function () { var b = this.Ed(); this.Kh(b) && (this.Xa = b, this.Of(b)) }; c.prototype.ti = function () { var b = this.Ed(); this.Xa.orientation !== b.orientation && (this.Xa = b, this.Gi(b)) }; c.prototype.qf = function (b) { return !b.height || !b.width || !b.pageWidth || !b.pageHeight };
                                c.prototype.Kh = function (b) { return b.height !== this.Xa.height || b.width !== this.Xa.width }; c.prototype.Ed = function () { var b = this.G.jb(), d = Rc(this.l), e = d[0]; d = d[1]; b = b.Dd(); return { width: e, height: d, pageWidth: b ? b.scrollWidth : 0, pageHeight: b ? b.scrollHeight : 0, orientation: this.G.jb().xh() } }; c.prototype.Gi = function (b) { var d; void 0 === d && (d = this.G.stamp()); this.G.Y("event", { width: b.width, height: b.height, orientation: b.orientation }, "deviceRotation", d) }; c.prototype.Of = function (b, d) {
                                    void 0 === d && (d = this.G.stamp()); this.G.Y("event",
                                        { width: b.width, height: b.height, pageWidth: b.pageWidth, pageHeight: b.pageHeight }, "resize", d)
                                }; c.prototype.Nf = function () { var b = this.Ed(); this.qf(b) ? U(this.l, H(this.Nf, this), 300) : (this.qf(this.Xa) && (this.Xa = b), this.Of(b, 0)) }; return c
                            }(eb), kf = function () {
                                function a(c) { this.index = 0; this.wb = {}; this.l = c } a.prototype.oc = function (c, b, d) {
                                    void 0 === d && (d = {}); var e = ka(this.l), f = this.index; this.index += 1; this.wb[f] = { Ka: 0, Ub: !1, hh: c, dd: [], Qd: e(Z) }; var g = this; return function () {
                                        var h = Qa(arguments), k = d.gb && !g.wb[f].Ub,
                                            l = g.wb[f]; ma(g.l, l.Ka); l.dd = h; l.Ub = !0; var m = e(Z); if (k || m - l.Qd >= b) c.apply(void 0, h), l.Qd = m; l.Ka = U(g.l, function () { k || (c.apply(void 0, h), l.Qd = e(Z)); l.Ub = !1; l.dd = [] }, b, "th")
                                    }
                                }; a.prototype.flush = function () { var c = this; x(function (b) { var d = c.wb[b], e = d.Ka, f = d.hh, g = d.dd; d.Ub && (c.wb[b].Ub = !1, f.apply(void 0, g), ma(c.l, e)) }, da(this.wb)) }; return a
                            }(), Pu = function (a) {
                                function c(b, d, e) { d = a.call(this, b, d, e) || this; d.bg = []; d.He = { x: 0, y: 0 }; d.Ca = new kf(b); d.Oc = d.L.H(d.Oc, "o"); d.ia.push([["scroll"], d.wi]); return d } Oa(c, a);
                                c.prototype.start = function () { a.prototype.start.call(this); this.G.Y("event", { x: Math.max(this.l.scrollX, 0), y: Math.max(this.l.scrollY, 0), page: !0, target: -1 }, "scroll", 0) }; c.prototype.stop = function () { a.prototype.stop.call(this); this.Ca.flush() }; c.prototype.wi = function (b) { if (this.G.jb().lf()) this.Oc(b); else { var d = b.target, e = ia(function (f) { return f[0] === d }, this.bg).pop(); e ? e = e[1] : (e = this.Ca.oc(H(this.Oc, this), 100, { gb: !0 }), this.bg.push([d, e])); e(b) } }; c.prototype.Oc = function (b) {
                                    var d = this.G.jb().Dd(); b = b.target;
                                    var e = this.Jb(b); d = d === b || this.l === b || this.l.document === b; var f = Math.max(e.left, 0); e = Math.max(e.top, 0); if (d) { if (this.He.x === f && this.He.y === e) return; this.He = { x: f, y: e } } this.G.Y("event", { x: f, y: e, page: d, target: d ? -1 : this.Z(b) }, "scroll")
                                }; c.prototype.Jb = function (b) {
                                    var d = { left: 0, top: 0 }; if (!b) return d; if (b.window === b) return { top: b.scrollY || 0, left: b.scrollX || 0 }; var e = b.ownerDocument || b, f = b.documentElement, g = e.defaultView || e.parentWindow, h = e.body; return b !== e || (b = this.G.jb().Dd(), b) ? I(b, [f, h]) ? {
                                        top: b.scrollTop ||
                                            g.scrollY, left: b.scrollLeft || g.scrollX
                                    } : { top: b.scrollTop || 0, left: b.scrollLeft || 0 } : d
                                }; return c
                            }(eb), Qu = ["mousemove", "mousedown", "mouseup", "click"], Ru = function (a) {
                                function c(b, d, e) { d = a.call(this, b, d, e) || this; d.ia.push([Qu, d.ri]); d.Ca = new kf(b); d.Jc = d.L.H(d.Jc, "n"); d.Qi = d.L.H(d.Ca.oc(H(d.Jc, d), 100), "t"); return d } Oa(c, a); c.prototype.stop = function () { a.prototype.stop.call(this); this.Ca.flush() }; c.prototype.ri = function (b) { var d = null; try { d = b.type } catch (e) { return } "mousemove" === d ? this.Qi(b) : this.Jc(b) }; c.prototype.Jc =
                                    function (b) { var d = b.type, e = b.clientX; e = void 0 === e ? null : e; var f = b.clientY; f = void 0 === f ? null : f; b = b.target || this.l.document.elementFromPoint(e, f); this.G.Y("event", { x: e || 0, y: f || 0, target: this.Z(b) }, d) }; return c
                            }(eb), Su = ["focus", "blur"], Tu = function (a) { function c(b, d, e) { b = a.call(this, b, d, e) || this; b.ia.push([Su, b.ih]); return b } Oa(c, a); c.prototype.ih = function (b) { var d = b.target; b = b.type; this.G.Y("event", { target: this.Z(d === this.l ? this.l.document.documentElement : d) }, b) }; return c }(eb), Uu = v(function (a) {
                                var c = pa(a.getSelection,
                                    "getSelection"); return c ? H(c, a) : E
                            }), Vu = w(Uu, na), Wu = ["mousemove", "touchmove", "mousedown", "touchdown", "select"], Xu = /text|search|password|tel|url/, Yu = function (a) {
                                function c(b, d, e) { b = a.call(this, b, d, e) || this; b.Id = !1; b.ia.push([Wu, b.Ih]); return b } Oa(c, a); c.prototype.Ih = function (b) { var d = this.G, e = b.type, f = b.which; b = b.target; if ("mousemove" !== e || 1 === f) (e = "select" === e ? this.Bh(b) : this.zh()) && e.start !== e.end ? (this.Id = !0, d.Y("event", e, "selection")) : this.Id && (this.Id = !1, d.Y("event", { start: 0, end: 0 }, "selection")) };
                                c.prototype.zh = function () { var b = Vu(this.l); if (b && 0 < b.rangeCount) { b = b.getRangeAt(0) || this.l.document.createRange(); var d = this.Z(b.startContainer), e = this.Z(b.endContainer); if (!X(d) && !X(e)) return { start: b.startOffset, end: b.endOffset, startNode: d, endNode: e } } }; c.prototype.Bh = function (b) { if (Xu.test(b.type || "")) { var d = this.Z(b); if (!X(d)) return { start: b.selectionStart, end: b.selectionEnd, target: d } } }; return c
                            }(eb), Zu = { focus: "windowfocus", blur: "windowblur" }, $u = function (a) {
                                function c(b, d, e) {
                                    b = a.call(this, b, d, e) ||
                                        this; b.visibility = null; X(b.l.document.hidden) ? X(b.l.document.msHidden) ? X(b.l.document.webkitHidden) || (b.visibility = { hidden: "webkitHidden", event: "webkitvisibilitychange" }) : b.visibility = { hidden: "msHidden", event: "msvisibilitychange" } : b.visibility = { hidden: "hidden", event: "visibilitychange" }; b.handleEvent = b.L.H(b.handleEvent, "e"); return b
                                } Oa(c, a); c.prototype.start = function () { this.Ob = [this.eb.F(this.l, this.visibility ? [this.visibility.event] : ["focus", "blur"], H(this.handleEvent, this))] }; c.prototype.handleEvent =
                                    function (b) { this.G.Y("event", {}, Zu[this.visibility ? this.l.document[this.visibility.hidden] ? "blur" : "focus" : b.type]) }; return c
                            }(eb), av = ["touchmove", "touchstart", "touchend", "touchcancel", "touchforcechange"], bv = function (a) {
                                function c(b, d, e) { d = a.call(this, b, d, e) || this; d.Xc = {}; d.scrolling = !1; d.Lf = 0; d.ia.push([["scroll"], d.Fi, d.l.document]); d.ia.push([av, d.Si, d.l.document]); d.Ca = new kf(b); d.Nb = d.L.H(d.Nb, "nh"); d.Ri = d.L.H(d.Ca.oc(d.Nb, d.G.jb().lf() ? 0 : 50, { gb: !0 }), "th"); return d } Oa(c, a); c.prototype.Fi = function () {
                                    var b =
                                        this; this.scrolling = !0; ma(this.l, this.Lf); this.Lf = U(this.l, function () { b.scrolling = !1 }, 150)
                                }; c.prototype.Si = function (b) { var d = this, e = "touchcancel" === b.type || "touchend" === b.type; b.changedTouches && 0 < b.changedTouches.length && x(function (f) { var g = d.Dh(f); f.__ym_touch_id = g; e && delete d.Xc[f.identifier] }, Ca(b.changedTouches)); "touchmove" === b.type ? this.scrolling ? this.Nb(b) : this.Ri(b, this.G.stamp()) : this.Nb(b) }; c.prototype.Dh = function (b) { this.Xc[b.identifier] || (this.Xc[b.identifier] = hi()); return this.Xc[b.identifier] };
                                c.prototype.Nb = function (b, d) { void 0 === d && (d = this.G.stamp()); var e = b.type, f = A(function (g) { return { id: g.__ym_touch_id, x: Math.round(g.clientX), y: Math.round(g.clientY), force: g.force } }, Ca(b.changedTouches)); 0 < f.length && this.G.Y("event", { touches: f, target: this.Z(b.target) }, e, d) }; return c
                            }(eb), cv = function (a) {
                                function c(b, d, e) { b = a.call(this, b, d, e) || this; b.ia.push([["load"], b.oi, b.l.document]); return b } Oa(c, a); c.prototype.oi = function (b) {
                                    b = b.target; "IMG" === Na(b) && b.getAttribute("srcset") && this.G.Y("mutation",
                                        { target: this.Z(b), attributes: { src: b.currentSrc } }, "ac")
                                }; return c
                            }(eb), dv = function (a) {
                                function c(b, d, e) { d = a.call(this, b, d, e) || this; d.ng = 1; d.Ca = new kf(b); d.fc = d.L.H(d.fc, "z"); return d } Oa(c, a); c.prototype.start = function () { if (this.hf()) { a.prototype.start.call(this); this.fc(); var b = this.eb.F(n(this.l, "visualViewport"), ["resize"], this.Ca.oc(this.fc, 10)); this.Ob.push(b) } }; c.prototype.stop = function () { a.prototype.stop.call(this); this.Ca.flush() }; c.prototype.fc = function () {
                                    var b = this.hf(); b && b !== this.ng && (this.ng =
                                        b, this.Hi(b))
                                }; c.prototype.hf = function () { var b = oe(this.l); return b ? b[2] : null }; c.prototype.Hi = function (b) { var d = eg(this.l); this.G.Y("event", { x: d.x, y: d.y, level: b }, "zoom") }; return c
                            }(eb), ge, lf = { 91: "super", 93: "super", 224: "super", 18: "alt", 17: "ctrl", 16: "shift", 9: "tab", 8: "backspace", 46: "delete" }, Wl = { "super": 1, qj: 2, alt: 3, shift: 4, Kj: 5, "delete": 6, oj: 6 }, ev = [4, 9, 8, 32, 37, 38, 39, 40, 46], Xl = (ge = {}, ge["1"] = { 91: "&#8984;", 93: "&#8984;", 224: "&#8984;", 18: "&#8997;", 17: "&#8963;", 16: "&#8679;", 9: "&#8677;", 8: "&#9003;", 46: "&#9003;" },
                                ge["2"] = { 91: "&#xff;", 93: "&#xff;", 224: "&#xff;", 18: "Alt", 17: "Ctrl", 16: "Shift", 9: "Tab", 8: "Backspace", 46: "Delete" }, ge.bi = { 32: "SPACEBAR", 37: "&larr;", 38: "&uarr;", 39: "&rarr;", 40: "&darr;", 13: "Enter" }, ge), fv = /flash/, gv = /ym-disable-keys/, hv = /^&#/, iv = function (a) {
                                    function c(b, d, e) {
                                        d = a.call(this, b, d, e) || this; d.mb = {}; d.Oa = 0; d.Fa = []; d.$f = []; d.rc = 0; d.Ef = 0; d.ia.push([["keydown"], d.Fh]); d.ia.push([["keyup"], d.Gh]); d.xg = -1 !== mc(n(b, "navigator.appVersion") || "", "Mac") ? "1" : "2"; d.Hc = d.L.H(d.Hc, "v"); d.ud = d.L.H(d.ud, "ec");
                                        d.Uc = d.L.H(d.Uc, "sk"); d.Bd = d.L.H(d.Bd, "gk"); d.te = d.L.H(d.te, "sc"); d.ec = d.L.H(d.ec, "cc"); d.reset = d.L.H(d.reset, "r"); d.Rc = d.L.H(d.Rc, "rs"); return d
                                    } Oa(c, a); c.prototype.Fh = function (b) { if (this.Hc(b) && !this.Uh(b)) { var d = b.keyCode; b.repeat || this.mb[d] || (this.mb[b.keyCode] = !0, lf[b.keyCode] && !this.Oa ? (this.Oa += 1, this.te(b), this.reset(300)) : this.Oa ? (this.Fg(), this.je(b), this.ud()) : (this.reset(), this.je(b))) } }; c.prototype.Gh = function (b) {
                                        if (this.Hc(b)) {
                                            var d = b.keyCode, e = lf[b.keyCode]; this.mb[b.keyCode] && (this.mb[d] =
                                                !1); e && this.Oa && (this.Oa = 0, this.mb = {}); 1 === this.Fa.length && (b = this.Fa[0], I(b.keyCode, ev) && (this.Uc([b], !0), this.reset())); this.Fa = ia(w(T("keyCode"), Ba(d), Jc), this.Fa); ma(this.l, this.rc)
                                        }
                                    }; c.prototype.Hc = function (b) { var d = this.l.document.activeElement; d = d && "OBJECT" === d.nodeName && fv.test(d.getAttribute("type") || ""); b = b.target; if (!b) return !d; b = "INPUT" === b.nodeName && "password" === b.getAttribute("type") && gv.test(b.className); return !d && !b }; c.prototype.ud = function () {
                                        this.$f = this.Fa.slice(0); ma(this.l, this.rc);
                                        this.rc = U(this.l, u(this.$f, H(this.Uc, this)), 0, "e.c")
                                    }; c.prototype.Uc = function (b, d) { void 0 === d && (d = !1); if (1 < b.length || d) { var e = this.Bd(b); this.G.Y("event", { keystrokes: e }, "keystroke") } }; c.prototype.Bd = function (b) { var d = this; b = A(function (e) { e = e.keyCode; var f = lf[e], g = d.vh(e); return { id: e, key: g, isMeta: !!f && hv.test(g), modifier: f } }, b); return Be(function (e, f) { return (Wl[e.modifier] || 100) - (Wl[f.modifier] || 100) }, b) }; c.prototype.vh = function (b) { return Xl[this.xg][b] || Xl.bi[b] || String.fromCharCode(b) }; c.prototype.je =
                                        function (b) { I(b, this.Fa) || this.Fa.push(b) }; c.prototype.te = function (b) { this.je(b); this.ec() }; c.prototype.ec = function () { this.Oa ? U(this.l, this.ec, 100) : this.Fa = [] }; c.prototype.Fg = function () { ma(this.l, this.Ef) }; c.prototype.reset = function (b) { b ? this.Ef = U(this.l, H(this.Rc, this), b) : this.Rc() }; c.prototype.Rc = function () { this.Oa = 0; this.Fa = []; this.mb = {}; ma(this.l, this.rc) }; c.prototype.Uh = function (b) { return b.target && "INPUT" === b.target.nodeName ? b.shiftKey || 32 === b.keyCode || "shift" === lf[b.keyCode] : !1 }; return c
                                }(eb),
                        no = ["sr", "sd", "\u043d"], jv = /allow-same-origin/, kv = function (a) {
                            function c(b, d, e) { d = a.call(this, b, d, e) || this; d.Xb = []; d.xd = {}; d.Xd = d.L.H(d.Xd, "fi"); d.Yd = d.L.H(d.Yd, "sd"); d.Zd = d.L.H(d.Zd, "src"); d.za = new b.MutationObserver(d.Zd); return d } Oa(c, a); c.prototype.start = function () { a.prototype.start.call(this); this.G.Ib().ic && this.G.sa().F("iframe", "NA:", H(this.Xd, this)); this.G.df().zd().F(["sdr"], H(this.Yd, this)) }; c.prototype.stop = function () { a.prototype.stop.call(this); x(function (b) { b.G.stop() }, this.Xb) }; c.prototype.Zd =
                                function (b) { var d = b.pop().target; if (b = vb(function (f) { return f.kf === d }, this.Xb)) { this.Xb = ia(function (f) { return f.kf !== d }, this.Xb); var e = b.G.Ad(); try { b.G.stop() } catch (f) { } this.nc(d, e) } }; c.prototype.Xd = function (b) { if (b) { var d = b.data.node; this.za.observe(d, { attributes: !0, attributeFilter: ["src"] }); this.nc(d, b.data.id) } }; c.prototype.nc = function (b, d) { var e = this; this.Sh(b) && Pb(this.l, b)(Sa(E, function () { var f = e.G.nc(b.contentWindow, d); e.Xb.push({ G: f, kf: b }) })) }; c.prototype.Yd = function (b) {
                                    var d = this, e = b.frameId;
                                    b = b.data; this.xd[e] || (this.xd[e] = { data: [] }); var f = this.xd[e]; f.data = f.data.concat(b); this.l.isNaN(f.qd) && x(function (g) { "page" === g.type && (f.qd = g.data.recordStamp - d.G.ef()) }, f.data); this.l.isNaN(f.qd) || (this.G.aa(A(function (g) { g.stamp += f.qd; g.stamp = d.l.Math.max(0, g.stamp); return g }, f.data)), f.data = [])
                                }; c.prototype.Sh = function (b) {
                                    var d = b.getAttribute("src"), e = b.getAttribute("sandbox"); return b.getAttribute("_ym_ignore") || e && !e.match(jv) || d && "about:blank" !== d && (d = Uc(this.l, d).host) && S(this.l).host !==
                                        d ? !1 : n(b, "contentWindow.location.href")
                                }; return c
                        }(eb), lv = v(function (a) { var c = n(a, "sessionStorage"); if (!c) return null; try { var b = c.getItem("__ym_tab_guid"); c = !1; var d = n(a, "opener.sessionStorage"); try { c = !!d && b === d.getItem("__ym_tab_guid") } catch (e) { c = !0 } if (!b || c) b = hi(), a.sessionStorage.setItem("__ym_tab_guid", b); return b } catch (e) { return null } }), mv = function (a) {
                            function c(b, d, e) { b = a.call(this, b, d, e) || this; b.ne = b.L.H(b.ne, "ps"); return b } Oa(c, a); c.prototype.start = function () {
                                this.G.sa().Cc({
                                    nodes: [this.l.document.documentElement],
                                    Vc: this.ne
                                })
                            }; c.prototype.ne = function (b) {
                                var d = this.G.yh(), e = d.oh(), f = S(this.l), g = f.host, h = f.protocol; f = f.pathname; var k = Rc(this.l), l = k[0]; k = k[1]; this.G.Y("page", {
                                    content: A(function (m) { m.node = void 0; return m }, b), base: e || "", hasBase: !!e, viewport: { width: l, height: k }, title: this.l.document.title, doctype: d.qh() || "", address: this.l.location.href, ua: this.l.navigator.userAgent, referrer: this.l.document.referrer, screen: { width: this.l.screen.width, height: this.l.screen.height }, location: { host: g, protocol: h, path: f },
                                    recordStamp: this.G.ef(), tabId: lv(this.l)
                                }, "page", 0)
                            }; return c
                        }(eb), nv = ["addRule", "removeRule", "insertRule", "deleteRule"], ph = [[function (a) {
                            function c(b, d, e) { b = a.call(this, b, d, e) || this; b.ab = {}; b.Yb = {}; b.Me = 0; b.Mc = b.L.H(b.Mc, "a"); b.vb = b.L.H(b.vb, "sr"); b.Nc = b.L.H(b.Nc, "r"); b.aa = b.L.H(b.aa, "d"); return b } Oa(c, a); c.prototype.start = function () { var b = this.G.sa(); b.F("style", "NA:", this.Mc); b.F("style", "NR:", this.Nc); this.aa() }; c.prototype.stop = function () {
                                var b = this; a.prototype.stop.call(this); var d = this.G.sa();
                                d.ga("style", "NA:", this.Mc); d.ga("style", "NR:", this.Nc); this.aa(); ma(this.l, this.Me); x(function (e) { b.ab[e].sheet && b.Hf(b.ab[e].sheet) }, da(this.ab)); this.ab = {}
                            }; c.prototype.aa = function () {
                                var b = this; x(function (d) { var e = d[0]; d = d[1]; if (d.length) { for (var f = [], g = d[0].stamp, h = [], k = 0; k < d.length; k += 1) { var l = d[k], m = l.stamp; delete l.stamp; m <= g + 50 ? f.push(l) : (h.push(f), g = m, f = [l]) } f.length && h.push(f); h.length && x(function (p) { b.G.Y("event", { target: Ia(e), changes: p }, "stylechange", g) }, h); delete b.Yb[e] } }, Ma(this.Yb));
                                this.Me = U(this.l, this.aa, 100)
                            }; c.prototype.vb = function (b, d, e, f, g) { void 0 === f && (f = ""); void 0 === g && (g = -1); this.Yb[b] || (this.Yb[b] = []); this.Yb[b].push({ op: d, style: f, index: g, stamp: e }) }; c.prototype.yi = function (b, d) {
                                var e = this, f = b.addRule, g = b.removeRule, h = b.insertRule, k = b.deleteRule; O(f) && (b.addRule = function (l, m, p) { e.vb(d, "a", e.G.stamp(), l + "{" + m + "}", p); return f.call(b, l, m, p) }); O(g) && (b.removeRule = function (l) { e.vb(d, "r", e.G.stamp(), "", l); return g.call(b, l) }); O(h) && (b.insertRule = function (l, m) {
                                    e.vb(d, "a",
                                        e.G.stamp(), l, m); return h.call(b, l, m)
                                }); O(k) && (b.deleteRule = function (l) { e.vb(d, "r", e.G.stamp(), "", l); return k.call(b, l) })
                            }; c.prototype.Hf = function (b) { var d = this; x(function (e) { var f = d.l.CSSStyleSheet.prototype[e]; O(f) && (b[e] = H(f, b)) }, nv) }; c.prototype.$g = function (b) { try { return b.cssRules || b.rules } catch (d) { return null } }; c.prototype.Mc = function (b) {
                                var d = b.data; b = d.id; d = d.node; if (d.sheet && !d.getAttribute("src") && !d.innerText) {
                                    var e = d.sheet, f = this.$g(e); if (f && f.length) {
                                        for (var g = [], h = 0; h < f.length; h += 1)g.push({
                                            style: f[h].cssText,
                                            index: h, op: "a"
                                        }); this.G.Y("event", { changes: g, target: b }, "stylechange")
                                    } this.yi(e, b); this.ab[b] = d
                                }
                            }; c.prototype.Nc = function (b) { b = b.data.id; var d = this.ab[b]; d && (delete this.ab[b], d.sheet && this.Hf(d.sheet)) }; return c
                        }(eb), "ss"], [Nu, "in"], [Ku, "mu"], [Ou, "r"], [Pu, "sc"], [Ru, "mo"], [Tu, "f"], [Yu, "se"], [$u, "wf"], [bv, "t"], [cv, "src"], [dv, "z"], [iv, "ks"]]; ph.push([kv, "if"]); ph.push([mv, "pa"]); var ov = v(function (a) {
                            var c = a.document; return {
                                Dd: function () {
                                    if (c.scrollingElement) return c.scrollingElement; var b = 0 === jb(c.compatMode,
                                        "CSS1") ? c.documentElement : c.body; return n(c, "documentElement.scrollHeight") >= n(c, "body.scrollHeight") ? b : null
                                }, xh: function () { var b = a.screen; if (!b) return 0; var d = vb(u(b, n), ["orientation", "mozOrientation", "msOrientation"]); return n(b, d + ".angle") || 0 }, Bj: u(a, tb), lf: u(a, Dd), Aj: u(a, af)
                            }
                        }), pv = function () {
                            function a(c, b) {
                                var d = this; this.Lb = 0; this.pd = []; this.Kb = null; this.va = this.Zb = this.Yf = !1; this.recordStamp = 0; this.yh = function () { return d.page }; this.Ad = function () { return d.Lb }; this.ef = function () { return d.recordStamp };
                                this.uh = function () { return d.eb }; this.df = function () { return d.Kb }; this.sa = function () { return d.Jd }; this.stamp = function () { return d.xe ? d.l.Math.max(d.xe(Z) - d.recordStamp, 0) : 0 }; this.Ib = function () { return d.options }; this.jb = function () { return d.Cg }; this.Y = function (f, g, h, k) { void 0 === k && (k = d.stamp()); f = d.th(f, g, h, k); d.aa(f) }; this.th = function (f, g, h, k) { void 0 === k && (k = d.stamp()); return { type: f, data: g, stamp: k, frameId: d.Lb, event: h } }; this.aa = function (f) {
                                    f = R(f) ? f : [f]; d.Yf && !d.Zb ? d.va ? (f = A(function (g) {
                                        return g.frameId ?
                                            g : z(g, { frameId: d.Lb })
                                    }, f), d.df().Pf(f)) : d.Vb(f) : d.pd = d.pd.concat(f)
                                }; this.l = c; var e = Pf(c, this, "R"); this.ue = e.H(this.ue, "s"); this.aa = e.H(this.aa, "sd"); e = J(c); e.C("wv2e") && he(); e.D("wv2e", !0); this.options = b; this.eb = ha(c); this.Jd = new Lu(this.l, b); this.Cg = ov(c); this.Oe = A(function (f) { return new f[0](c, d, f[1]) }, ph); this.Ph(); this.page = lo(this.l); this.ue()
                            } a.prototype.start = function (c) { this.Yf = !0; this.Vb = c; this.Mf() }; a.prototype.stop = function () {
                                oh(this.l) && (x(function (c) { return c.stop() }, this.Oe), this.Jd.stop(),
                                    this.Kb && this.Kb.stop(), this.va || this.Y("event", {}, "eof"))
                            }; a.prototype.nc = function (c, b) { var d = new a(c, z({}, this.options, { frameId: b })); d.start(E); return d }; a.prototype.Ph = function () { var c = this; this.va = !!this.options.frameId; this.Lb = this.options.frameId || 0; this.Zb = !this.va; var b = this.options.hg || []; b.push(S(this.l).host); this.Kb = mo(this.l, this, b); b = this.Kb.zd(); tb(this.l) ? this.Zb && b.F(["i"], function (d) { c.va = d.va; c.Zb = !1; d.frameId && (c.Lb = d.frameId); c.Mf() }) : this.Zb = this.va = !1 }; a.prototype.Mf = function () {
                                var c =
                                    bf(this.pd); this.aa(c)
                            }; a.prototype.ue = function () { this.xe = lg(this.l); this.recordStamp = this.xe(Z); x(function (c) { c.start() }, this.Oe); this.Jd.start() }; return a
                        }(), qv = function () {
                            return function (a, c, b) {
                                var d = this; this.fd = this.Qb = !1; this.Wa = []; this.tf = []; this.Re = []; this.send = function (e, f, g) { e = d.sender(e, d.lc); f && g && e.then(f, g); return e }; this.we = function (e, f, g) { return new K(function (h, k) { e.push([f, h, k, g]) }) }; this.Jh = function () {
                                    d.Wa = Be(function (g, h) { return g[3].partNum - h[3].partNum }, d.Wa); var e = N(function (g,
                                        h, k) { h = h[3]; return g && k + 1 === h.partNum }, !0, d.Wa), f = !!d.Wa[d.Wa.length - 1][3].end; return e && f
                                }; this.vd = function (e) { wh(d.l, e.slice(), function (f) { d.send(f[0], f[1], f[2]) }, 20, "s.w2.sf.fes"); bf(e) }; this.gh = function () { d.fd || (d.fd = !0, d.vd(d.tf), d.vd(d.Re)) }; this.Jg = function (e) { return N(function (f, g) { var h = "page" === g.type && !g.frameId, k = "eof" === g.data.type || "eof" === g.event, l = h && !!g.partNum; return { ld: f.ld || l, kd: f.kd || h, jd: f.jd || k } }, { kd: !1, jd: !1, ld: !1 }, e) }; this.Hh = function (e, f, g) {
                                    g ? (e = d.we(d.Wa, e, f[0]), d.Jh() &&
                                        (d.vd(d.Wa), d.Qb = !0)) : (d.Qb = !0, e = d.send(e)); return e
                                }; this.ff = function (e, f, g) { var h; f = { J: (h = {}, h["wv-part"] = "" + g, h["wv-type"] = d.Ii, h), K: Ka(), ba: { da: f } }; e && f.K.D("bt", 1); return f }; this.Yg = function (e, f, g) { e = d.ff(!1, e, g); return d.Qb ? d.send(e) : d.we(d.Re, e, f) }; this.ei = function (e, f, g) { e = d.ff(!0, e, g); if (d.Qb) return d.send(e); var h = d.Jg(f); g = h.kd; var k = h.jd; h = h.ld; var l; g && (l = d.Hh(e, f, h)); d.fd ? g || (l = d.send(e)) : (g || (l = d.we(d.tf, e, f)), (d.Qb || k) && d.gh()); return l }; this.l = a; this.Ii = b; this.sender = wa(a, "W", c);
                                this.lc = c
                            }
                        }(), Yl = v(function (a) { var c = J(a), b = c.C("isEU"); if (X(b)) { var d = Ia(Ae(a, "is_gdpr") || ""); if (I(d, [0, 1])) c.D("isEU", d), b = !!d; else if (a = Pa(a).C("wasSynced"), a = n(a, "params.eu")) c.D("isEU", a), b = !!a } return b }, function (a) { return J(a).C("isEU") }), Kf = B("i.e", Yl), rv = B("i.ep", function (a) { Yl(a) }), sv = B("w2", function (a, c) {
                            function b() { h = !0 } var d = J(a), e = L(c); if (!c.zb || rd(a) || !a.MutationObserver || !Ea("Element", a.Element)) return E; Ea("MutationObserver", a.MutationObserver) || rc(a, e).warn("w2mo"); var f = Ha(function (k,
                                l) { qa(c, l)["catch"](k) }), g = Pb(a)(Wg(C([a, c], jo)))(ol(function (k) { return new pv(a, k) })), h = !1; Hr([g, f])(Sa(D(a, "wv2.R.c"), function (k) {
                                    var l = k[0]; k = k[1]; if (!h) {
                                        b = function () { h || (h = !0, l && l.stop()) }; var m = d.C("wv2Counter"); if (!ji(a, k) || m) b(); else if (ha(a).F(a, ["beforeunload", "unload"], b), d.D("wv2Counter", e), d.D("stopRecorder", b), k = vi(a, "7", "6")) {
                                            m = new qv(a, c, k.type); var p = Vl.af(e, "m", H(m.ei, m), k, a), q = Vl.af(e, "e", H(m.Yg, m), k, a); k = ko(); m = k.mi; q.F("ag", k.Ag); q.F("p", m); p.F("see", function (t) {
                                                var y = !1; x(function (F) {
                                                    "page" ===
                                                        F.type && (y = !0)
                                                }, t); y && (h || q.push({ type: "event", event: "fatalError", data: { code: "invalid-snapshot", Zg: "p.s.f", stack: "" } }), b())
                                            }); var r = Xb(function (t) { "eof" === n(t, "data.type") || "eof" === t.event ? (q.push(t), p.push(t), q.flush(!0), p.flush(!0)) : ("event" === t.type ? q : p).push(t) }); U(a, b, 864E5); Ub(a, function () { var t, y; wb(a, (t = {}, t.counterKey = e, t.name = "webvisor", t.data = (y = {}, y.version = 2, y), t)); l.start(r) })
                                        }
                                    }
                                })); return function () { return b() }
                        }), tv = B("w2.cs", function (a, c) {
                            var b, d = L(c); ig(a, d, (b = {}, b.webvisor = !!c.zb,
                                b))
                        }), uv = ["rt", "mf"], Jf = v(Mc, L), di = w(td, ic), vv = nb("isp", function (a, c) { qa(c, function (b) { var d = vb(function (h) { return n(b, "settings." + h) }, uv); if (d && ae(a)) { var e = Cf(b) && !se(a), f = Jf(c); z(f, { Rb: d, status: e ? 3 : 4 }); if (!e) { e = fo(a, c, d); var g = function (h) { f.status = h }; return ("mf" === d ? ho : go)(a, c, e).then(u(1, g))["catch"](u(2, g)) } } })["catch"](D(a, "l.isp")) }), Zl = B("fbq.o", function (a, c, b) {
                            var d = n(a, "fbq"); if (d && d.callMethod) {
                                var e = function () { var g = Qa(arguments), h = d.apply(void 0, g); c(g); return h }; z(e, d); b && x(c, b); a.fbq =
                                    e
                            } else var f = U(a, C([a, c].concat(Ca(d && d.queue)), Zl), 1E3, "fbq.d"); return H(ma, null, a, f)
                        }), id, Kb, jd, qh = (id = {}, id.add_to_wishlist = "add-to-wishlist", id.begin_checkout = "begin-checkout", id.generate_lead = "submit-lead", id.add_payment_info = "add-payment-info", id), rh = (Kb = {}, Kb.AddToCart = "add-to-cart", Kb.Lead = "submit-lead", Kb.InitiateCheckout = "begin-checkout", Kb.Purchase = "purchase", Kb.CompleteRegistration = "register", Kb.Contact = "submit-contact", Kb.AddPaymentInfo = "add-payment-info", Kb.AddToWishlist = "add-to-wishlist",
                            Kb.Subscribe = "subscribe", Kb), co = (jd = {}, jd["1"] = qh, jd["2"] = qh, jd["3"] = qh, jd["0"] = rh, jd), eo = [rh.AddToCart, rh.Purchase], wv = ta(function (a, c) { var b = n(c, "ecommerce"), d = n(c, "event") || ""; if (!(b = b && d && { version: "3", sc: d })) a: { if (R(c) || Ta(c)) if (b = Qa(c), d = b[1], "event" === b[0] && d) { b = { version: "2", sc: d }; break a } b = void 0 } b || (b = (b = n(c, "ecommerce")) && { version: "1", sc: G(",", da(b)) }); b && a(b) }), xv = B("ag.e", function (a, c) {
                                if ("0" === c.ca) {
                                    var b = [], d = D(a, "ag.s", C([na, b], x)); qa(c, function (e) {
                                        if (n(e, "settings.auto_goals") && Aa(a,
                                            c) && (e = Je(a, c, "autogoal").reachGoal)) { e = C([e, c.sd], bo); var f = wv(e); e = C([a, e], ao); b.push(Zl(a, e)); b.push(kj(a, "dataLayer", function (g) { g.za.F(f) })) }
                                    }); return d
                                }
                            }), yv = /[^\d.,]/g, zv = /[.,]$/, Zn = B("ep.pp", function (a, c) {
                                if (!c) return 0; a: { var b = c.replace(yv, "").replace(zv, ""); var d = "0" === b[b.length - 1]; for (var e = b.length; 0 < e && !(3 < b.length - e + 1 && d); --e) { var f = b[e - 1]; if (I(f, [",", "."])) { d = f; break a } } d = "" } b = d ? c.split(d) : [c]; d = d ? b[1] : "00"; b = parseFloat(Vb(b[0]) + "." + Vb(d)); d = Math.pow(10, 8) - .01; a.isNaN(b) ? b = 0 : (b = a.Math.min(b,
                                    d), b = a.Math.max(b, 0)); return b
                            }), Av = [[["EUR", "\u20ac"], "978"], [["USD", "\u0423\\.\u0415\\.", "\\$"], "840"], [["UAH", "\u0413\u0420\u041d", "\u20b4"], "980"], ["\u0422\u0413 KZT \u20b8 \u0422\u04a2\u0413 TENGE \u0422\u0415\u041d\u0413\u0415".split(" "), "398"], [["GBP", "\u00a3", "UKL"], "826"], ["RUR RUB \u0420 \u0420\u0423\u0411 \u20bd P \u0420UB P\u0423\u0411 P\u0423B PY\u0411 \u0420Y\u0411 \u0420\u0423B P\u0423\u0411".split(" "), "643"]], Bv = v(function (a) { return new RegExp(G("|", a), "i") }), Cv = B("ep.cp", function (a) {
                                if (!a) return "643";
                                var c = aj(a); return (a = vb(function (b) { return Bv(b[0]).test(c) }, Av)) ? a[1] : "643"
                            }), Dv = v(function () {
                                function a() { var k = h + "0", l = h + "1"; f[k] ? f[l] ? (h = h.slice(0, -1), --g) : (e[l] = b(8), f[l] = 1) : (e[k] = b(8), f[k] = 1) } function c() { var k = h + "1"; f[h + "0"] ? f[k] ? (h = h.slice(0, -1), --g) : (h += "1", f[h] = 1) : (h += "0", f[h] = 1) } function b(k) { void 0 === k && (k = 1); var l = d.slice(g, g + k); g += k; return l } for (var d = G("", bi("Cy2FcreLJLpYXW3BXFJqldVsGMwDcBw2BGnHL5uj1TKstzse3piMo3Osz+EqDotgqs1TIoZvKtMKDaSRFztgUS8qkqZcaETgKWM54tCpTXjV5vW5OrjBpC0jF4mspUBQGd95fNSfv+vz+g+Hze33Hg8by+Yen1PP6zsdl7PQCwX9mf+f7FMb9x/Pw+v2Pp8Xy74eTwuBwTt913u4On1XW6hxOO5nIzFam00tC218S0kaeugpqST+XliLOlMoTpRQkuewUxoy4CT3efWtdFjSAAm+1BkjIhyeU4vGOf13a6U8wzNY4bGo6DIUemE7N3SBojDr7ezXahpWF022y8mma1NuTnZbq8XZZlPStejfG/CsbPhV6/bSnA==")),
                                    e = {}, f = {}, g = 1, h = ""; g < d.length - 1;)("0" === b() ? c : a)(); return e
                            }), Wn = B("ep.dec", function (a, c) {
                                if (!c || rd(a)) return []; var b = bi(c), d = b[1], e = b[2], f = b.slice(3); if (2 !== Ce(b[0])) return []; b = Dv(); f = G("", f); e = Ce(d + e); var g = ""; d = ""; for (var h = 0; d.length < e && f[h];)g += f[h], b[g] && (d += String.fromCharCode(Ce(b[g])), g = ""), h += 1; b = ""; for (f = 0; f < d.length;)e = d.charCodeAt(f), 128 > e ? (b += String.fromCharCode(e), f++) : 191 < e && 224 > e ? (g = d.charCodeAt(f + 1), b += String.fromCharCode((e & 31) << 6 | g & 63), f += 2) : (g = d.charCodeAt(f + 1), b += String.fromCharCode((e &
                                    15) << 12 | (g & 63) << 6 | d.charCodeAt(f + 2) & 63), f += 3); d = rb(a, b); return R(d) ? A(ls, d) : []
                            }), Yn = B("ep.ent", function (a, c, b) { a = "" + Ya(a, 10, 99); b = "" + 100 * c + b + a; if (16 < Ta(b)) return ""; b = ci("0", 16, b); c = b.slice(0, 8); b = b.slice(-8); c = (+c ^ 92844).toString(35); b = (+b ^ 92844).toString(35); return "" + c + "z" + b }), $l = w(ai, Cv), am = B("ep.ctp", function (a, c, b, d) {
                                var e = $l(a, b), f = $h(a, d); Zh(a, c, e, f); Ea("MutationObserver", a.MutationObserver) && (new a.MutationObserver(function () { var g = $l(a, b), h = $h(a, d); if (e !== g || f !== h) e = g, f = h, Zh(a, c, e, f) })).observe(a.document.body,
                                    { attributes: !0, childList: !0, subtree: !0, characterData: !0 })
                            }), Ev = B("ep.chp", function (a, c, b, d, e) { b && If(a, c); return d || e ? ha(a).F(a.document, ["click"], D(a, "ep.chp.cl", C([a, c, d, e], Xn))) : E }), Iv = B("ep.i", function (a, c) {
                                if (pd(a)) return Vn(a, c).then(function (b) {
                                    var d = b.Ug, e = d[0], f = d[1], g = d[2], h = d[3], k = d[4], l = d[5], m = d[6], p = d[7], q = d[8], r = d[9], t = d[10], y = d[11], F = d[12], P = d[13], M = d[14], oa = d[15]; if (!b.isEnabled) return K.resolve(E); var xa = ve(a, e), Fb = ve(a, h), Kd = ve(a, m), Ge = ve(a, q), Fv = "" + e + f + g === "" + h + k + l; return new K(function (Gv,
                                        Hv) { Pb(a)(Sa(Hv, function () { xa && am(a, c, f, g, t, y, F); Fb && !Fv && am(a, c, k, l, P, M, oa); Gv(Ev(a, c, Kd || Ge, p, r)) })) })
                                })
                            }), En = ["RTCPeerConnection", "mozRTCPeerConnection", "webkitRTCPeerConnection"], Un = w(da, Zc), Jv = B("cc.i", function (a, c) { var b = C([a, c], Tn); b = C([a, b, 300, void 0], U); qa(c, b) }), Kv = u("9-d5ve+.r%7", Q), Lv = B("ad", function (a, c) {
                                if (!c.Ua) {
                                    var b = J(a); if (!b.C("adBlockEnabled")) {
                                        var d = function (m) { I(m, ["2", "1"]) && b.D("adBlockEnabled", m) }, e = Wc(a), f = e.C("isad"); if (f) d(f); else {
                                            var g = u("adStatus", b.D), h = function (m) {
                                                m =
                                                    m ? "1" : "2"; d(m); g("complete"); e.D("isad", m, 1200); return m
                                            }, k = wa(a, "adb", c); if (!b.C("adStatus")) { g("process"); var l = "metrika/a" + Kv().replace(/[^a-v]+/g, "") + "t.gif"; Qn(a, function () { return k({ na: { Ba: l } }).then(u(!1, h))["catch"](u(!0, h)) }) }
                                        }
                                    }
                                }
                            }), Mv = B("pr.p", function (a, c) { var b, d; if (ug(a)) { var e = wa(a, "5", c), f = Ka((b = {}, b.pq = 1, b.ar = 1, b)); e({ K: f, J: (d = {}, d["page-url"] = S(a).href, d["page-ref"] = n(a, "document.referrer") || "", d) }, c)["catch"](D(a, "pr.p.s")) } }), Yh = !1, Nv = B("fid", function (a) {
                                var c, b = E; if (!O(a.PerformanceObserver)) return b;
                                var d = J(a); if (d.C("fido")) return b; d.D("fido", !0); var e = new a.PerformanceObserver(D(a, "fid", function (f) { f = f.getEntries()[0]; d.D("fid", a.Math.round(100 * (f.processingStart - f.startTime))); b() })); b = function () { return e.disconnect() }; try { e.observe((c = {}, c.type = "first-input", c.buffered = !0, c)) } catch (f) { } return b
                            }), Ov = B("lt.p", nb("lt.p", function (a) {
                                var c; if (Ea("PerformanceObserver", a.PerformanceObserver)) {
                                    var b = 0, d = new a.PerformanceObserver(D(a, "lt.o", function (e) {
                                        e && e.getEntries && (e = e.getEntries(), b = N(function (f,
                                            g) { return f + g.duration }, b, e), Yd(a).D("lt", b))
                                    })); try { d.observe((c = {}, c.type = "longtask", c.buffered = !0, c)) } catch (e) { return } return function () { return d.disconnect() }
                                }
                            })), Pv = v(w(T("performance.memory.jsHeapSizeLimit"), Fa("concat", ""))), Qv = ["availWidth", "availHeight", "availTop"], Rv = "appName vendor deviceMemory hardwareConcurrency maxTouchPoints appVersion productSub appCodeName vendorSub".split(" "), Sv = ["webgl", "experimental-webgl"], On = [-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0], Ff = u(Ua("ccf"), Wa), Nn = "prefers-reduced-motion;prefers-reduced-transparency;prefers-color-scheme: dark;prefers-color-scheme: light;pointer: none;pointer: coarse;pointer: fine;any-pointer: none;any-pointer: coarse;any-pointer: fine;scan: interlace;scan: progressive;color-gamut: srgb;color-gamut: p3;color-gamut: rec2020;update: fast;update: slow;update: none;grid: 0;grid: 2;hover: hover;inverted-colors: inverted;inverted-colors: none".split(";"),
                            Wh = "video/ogg video/mp4 video/webm audio/x-aiff audio/x-m4a audio/mpeg audio/aac audio/wav audio/ogg audio/mp4".split(" "), Ln = "theora vorbis 1 avc1.4D401E mp4a.40.2 vp8.0 mp4a.40.5".split(" "), Gn = v(Wi), Vh = v(rb, cb), Tv = B("phc.p", function (a, c) {
                                if (!Al(a)) return qa(c, function (b) {
                                    var d = c.id, e = Sc(a, void 0, d), f = e.C("phc_settings") || ""; if (b = n(b, "settings.phchange")) { var g = Cb(a, b) || ""; g !== f && e.D("phc_settings", g) } else f && (b = Vh(a, f)); e = n(b, "clientId"); f = n(b, "orderId"); b = n(b, "phones") || []; e && f && b.length && (f =
                                        { Db: "", Pb: "", Wf: 0, ja: {}, Aa: [], nf: !1, gb: !0, l: a, lc: c }, z(f, { nf: !0 }), Uh(a, d, f), b = Md(a), e = Yi(a, b, 1E3), d = H(Uh, null, a, d, f), e.F(d), Zi(a, b))
                                })
                            }), sh = v(function (a, c) {
                                var b = J(a), d = Pa(a), e = [], f = C([a, c, b, d], cq); Fd(a) || dq(a, "14.1") || e.push(C([Dn, "pp", ""], f)); var g = !Cl(a) || Df(a, 68); g && e.push(C([Fn, "pu", ""], f)); !g || d.Ld || ae(a) || (e.push(C([Cn, "zzlc", "na"], f)), e.push(C([Bn, "cc", ""], f))); return e.length ? {
                                    Da: function (h, k) { if (0 === b.C("isEU")) try { x(Ie, e) } catch (l) { } k() }, N: function (h, k) {
                                        var l = h.K; if (l && 0 === b.C("isEU")) try {
                                            x(Ha(l),
                                                e)
                                        } catch (m) { } k()
                                    }
                                } : {}
                            }, w(cb, L)), Uv = w(function (a) { return (a = n(a, "navigator.plugins")) && Ta(a) ? w(Ca, va, Ls(function (c, b) { return c.name > b.name ? 1 : 2 }), Xb($p))(a) : "" }, Ee(",")), Vv = function (a) { return function (c) { var b = gb(c); if (!b) return ""; b = b("canvas"); var d = [], e = a(), f = e.ah; e = e.Rg; try { var g = Fa("getContext", b); d = A(w(Q, g), e) } catch (h) { return "" } return (g = vb(Q, d)) ? f(c, { canvas: b, Gg: g }) : "" } }(function () { return { Rg: Sv, ah: xn } }), vn = ["name", "lang", "localService", "voiceURI", "default"], Wv = B("p.tfs", function (a) {
                                var c = J(a); if (!c.C("tfs")) {
                                    c.D("tfs",
                                        !0); c = ha(a); var b = E; b = c.F(a, ["message"], function (d) {
                                            var e = n(d, "origin"); if ("https://iframe-toloka.com" === e || "https://iframe-tasks.yandex" === e) if (d = rb(a, d.data), la(d) && "appendremote" === d.action) if (d = Pa(a), d.C("tfsc") || a.confirm("\u0414\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u201c\u0420\u0430\u0437\u043c\u0435\u0442\u043a\u0430 \u0441\u0430\u0439\u0442\u043e\u0432\u201c \u043e\u0442 toloka.ai \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u043c\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b. \u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c?")) {
                                                d.D("tfsc",
                                                    1); var f, g; J(a).D("_u", (f = {}, f.getCachedTags = He, f.button = (g = {}, g.closest = u(a, le), g.select = bg, g.getData = u(a, me), g), f)); wc(a, { src: "https://yastatic.net/s3/metrika/2.1540128042.1/form-selector/button_ru.js" }); b()
                                            } else a.close()
                                        })
                                }
                            }), tn = hb(/[a-z\u0430-\u044f\u0451,.]/gi), Xv = B("ice", function (a, c, b) { (c = Aa(a, c)) && (b = Oh(a, b)) && Nh(a, c, b) }), Yv = B("ice", function (a, c, b) { (c = Aa(a, c)) && (b = Oh(a, b)) && yj(a, b.Rh).then(C([a, c, b], Nh), D(a, "ice.s")) }), Zv = ["text", "email", "tel"], $v = ["cc-", "name", "shipping"], aw = B("icei", function (a,
                                c) { if (wl(a)) { var b = !1, d = E, e = E; qa(c, function (f) { if (!(Kf(a) || n(f, "settings.eu") || b)) { f = n(f, "settings.cf") ? Yv : Xv; var g = C([a, c], f), h = function (k) { return Tf(a, k) || !I(k.type, Zv) || ab(Ib, A(u(k.autocomplete, fb), $v)) ? !1 : !0 }; d = Rh(a, "input", ["blur"], g, h); e = Rh(a, "form", ["submit"], function (k) { var l = k.target; l && (l = kb("input", l), x(function (m) { h(m) && g({ target: m, isTrusted: k.isTrusted }) }, l)) }) } }); return function () { b = !0; d(); e() } } }), Mh, bw = B("p.ai", function (a, c) {
                                    if (Fd(a) || wf(a)) return qa(c, function (b) {
                                        var d; if (b = n(b, "settings.sbp")) return Lh(a,
                                            z({}, b, (d = {}, d.c = c.id, d)), 10)
                                    })
                                }), cw = "architecture bitness model platformVersion uaFullVersion fullVersionList".split(" "), bm = nb("uah", function (a) { if (!Ea("getHighEntropyValues", n(a, "navigator.userAgentData.getHighEntropyValues"))) return K.reject("0"); try { return a.navigator.userAgentData.getHighEntropyValues(cw).then(function (c) { if (!la(c)) throw "2"; return c }, function () { throw "1"; }) } catch (c) { return K.reject("3") } }), cm = new RegExp(G("|", "yandex.com/bots;Googlebot;APIs-Google;Mediapartners-Google;AdsBot-Google;FeedFetcher-Google;Google-Read-Aloud;DuplexWeb-Google;Google Favicon;googleweblight;Lighthouse;Mail.RU_Bot;StackRambler;Slurp;msnbot;bingbot;www.baidu.com/search/spi_?der.htm".split(";")).replace(/[./]/g,
                                    "\\$&")), mn = v(function (a) { var c = mb(a); return (c = cm.test(c)) ? K.resolve(c) : bm(a).then(function (b) { try { return N(function (d, e) { return d || cm.test(e.brand) }, !1, b.brands) } catch (d) { return !1 } }, u(!1, Q)) }), yc = ["0", "1", "2", "3"], Tc = yc[0], vf = yc[1], dw = yc[2], dm = ["GDPR-ok-view-detailed-0", "GDPR-ok-view-detailed-1", "GDPR-ok-view-detailed-2", "GDPR-ok-view-detailed-3"], Jh = ["GDPR-ok-view-default", "GDPR-ok-view-detailed"].concat(dm), uf = "GDPR-ok GDPR-cross GDPR-cancel 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 GDPR-settings GDPR-ok-view-default GDPR-ok-view-detailed 21 22 23".split(" ").concat(dm).concat(["28",
                                        "29", "30", "31"]), ew = "3 13 14 15 16 17 28".split(" "), qe = w(Xb(T("ymetrikaEvent.type")), Ks(xc(uf))), fw = { Zh: !0, url: "https://yastatic.net/s3/gdpr/v3/gdpr", zf: "", rf: "az be en es et fi fr hy ka kk ky lt lv no pt ro ru sl tg tr uz cs da de el hr it nl pl sk sv".split(" ") }, pn = nb("gdpr", function (a, c, b, d, e) {
                                            function f(p) { c("10"); b.F(Jh, function (q) { var r; q = q.type; l.Sf((r = {}, r.type = q, r)); p({ value: Kh(q) }) }) } var g = void 0 === e ? fw : e; e = g.url; var h = g.zf, k = g.Zh; g = sn(a, g.rf, d.hj); var l = te(a, d); if (!l) return K.resolve({
                                                value: Tc,
                                                Nd: !0
                                            }); if (a._yaGdprLoaded) return new K(function (p) { c("7"); f(p) }); var m = wc(a, { src: "" + e + (k ? "" : g) + h + ".js" }); return new K(function (p, q) { m ? (c("7"), m.onerror = function () { var r; c("9"); l.Sf((r = {}, r.type = "GDPR-ok-view-default", r)); p(null) }, m.onload = u(p, f)) : (c("9"), q(Ua("gdp.e"))) })
                                        }), dc, rn = (dc = {}, dc["GDPR-ok"] = "ok", dc["GDPR-ok-view-default"] = "ok-default", dc["GDPR-ok-view-detailed"] = "ok-detailed", dc["GDPR-ok-view-detailed-0"] = "ok-detailed-all", dc["GDPR-ok-view-detailed-1"] = "ok-detailed-tech", dc["GDPR-ok-view-detailed-2"] =
                                            "ok-detailed-tech-analytics", dc["GDPR-ok-view-detailed-3"] = "ok-detailed-tech-other", dc), kn = "az be en es et fi fr hy ka kk ky lt lv no pt ro ru sl tg tr uz ar he sr uk zh".split(" "), Ih = [], Gh = Fa("push", Ih), jn = v(function (a, c) { var b = c.C("gdpr"); return I(b, yc) ? "-" + b : "" }), em = v(Ld), gw = v(function () { var a = N(function (c, b) { "ru" !== b && (c[b] = Kl + "." + b); return c }, {}, Eg); x(function (c) { a[c] = c }, da(Fl)); return a }), an = v(function (a) { a = S(a).hostname; return (a = vb(w(T("1"), Xi("test"), xb(na)(a)), Ma(Fl))) && a[0] }), fm = function (a,
                                                c) { return function (b, d) { var e = L(d); e = gw(e); var f = Zm(b, e), g = J(b), h = tb(b); return ae(b) || Wd(b) ? {} : { N: function (k, l) { var m = k.K, p = Eh(b); m = !(m && m.C("pv")); if (!p || h || m || !f.length) return l(); if (g.C("startSync")) em(b).push(l); else { g.D("startSync", !0); p = C([b, f, E, !1], a); m = xf[0]; if (!m) return l(); m(b).then(p).then(l, w(ud(l), D(b, c)))["catch"](E) } } } } }(function (a, c, b, d) {
                                                    var e = ka(a), f = J(a), g = Pa(a); b = dh(a, "c"); var h = $b(a, b); return Db(function (k, l) {
                                                        function m() {
                                                            var r = g.C("synced"); f.D("startSync", !1); r && (r[l.ai] = p, g.D("synced",
                                                                r)); r = em(a); x(na, r); bf(r)
                                                        } var p, q = h({ ba: { ha: ["sync.cook"], Qa: 1500 } }, [Ga.Sa + "//" + l.Oi + "/sync_cookie_image_check" + (d ? "_secondary" : "")]).then(function () { p = e(sb); m() })["catch"](function () { p = e(sb) - 1435; m() }); q = u(q, Q); return k.then(q)
                                                    }, K.resolve(), c)["catch"](D(a, "ctl"))
                                                }, "sy.c"), Lb, Xm = (Lb = {}, Lb.brands = "chu", Lb.architecture = "cha", Lb.bitness = "chb", Lb.uaFullVersion = "chf", Lb.fullVersionList = "chl", Lb.mobile = "chm", Lb.model = "cho", Lb.platform = "chp", Lb.platformVersion = "chv", Lb), Um = v(function (a) {
                                                    return bm(a).then(Vm,
                                                        Ym)
                                                }), hw = nb("ot", function (a, c) {
                                                    if (Se(a)) {
                                                        var b = ha(a); return qa(c, D(a, "ot.s", function (d) {
                                                            if (n(d, "settings.oauth")) {
                                                                var e = [], f = td(a, c); e.push(b.F(a, ["message"], D(a, "ot.m", u(f, Tm)))); Pb(a)(Sa(E, D(a, "ot.b", function () {
                                                                    function g(q) { var r, t = q.href; t && gh(t, "https://oauth.yandex.ru/") && !fb(t, "_ym_uid=") && (t = fb(t, "?") ? "&" : "?", q.href += "" + t + Hc((r = {}, r._ym_uid = f, r.mc = "v", r)), b.F(q, ["click"], D(a, "ot.click", function () { var y = "et=" + l(Z); q.href += "&" + y }))) } var h, k = a.document.body, l = ka(a), m = kb("a", k); x(g, m); if (Ea("MutationObserver",
                                                                        a.MutationObserver)) { m = new a.MutationObserver(D(a, "ot.m", u(function (q) { q = q.addedNodes; for (var r = 0; r < q.length; r += 1) { var t = q[r]; "A" === t.nodeName && g(t) } }, x))); var p = (h = {}, h.childList = !0, h.subtree = !0, h); m.observe(k, p); e.push(H(m.disconnect, m)) }
                                                                }))); return C([Ie, e], x)
                                                            }
                                                        }))
                                                    }
                                                }), iw = B("p.cta", function (a) {
                                                    Pb(a)(Sa(E, function () {
                                                        var c = J(a); if (Rm(a.document)) {
                                                            var b = 0; if (ei(a, xe, "cta")) { var d = E, e = function () { fi(xe, "cta"); d(); ma(a, b) }; d = ha(a).F(a, ["message"], B("p.cta.o", C([a, c, e], Sm))); b = U(a, e, 1500) } else c.D("cta.e",
                                                                "if")
                                                        } else c.D("cta.e", "ns")
                                                    }))
                                                }), Nm = ["bidResponse", "bidAdjustment", "bidWon"], Om = ["cpm", "currency", "netRevenue", "requestTimestamp", "responseTimestamp"], Ja = {}, jw = B("pj", function (a, c) { var b, d = Aa(a, c), e = d && d.params; return e ? (b = {}, b.pbjs = function (f) { R(f) && (f = ia(Ib, A(function (g) { if (la(g) && g.data && g.event && la(g.data)) { var h = n(g, "data.args"); return h ? { event: g.event, data: h } : g } }, f)), Mm(f), Pm(a, e)) }, b) : E }), Km = /(\D\d*)/g, Lm = v(function () { var a = He(); return N(function (c, b) { c[a[b]] = b; return c }, {}, da(a)) }), kw = B("g.v.e",
                                                    function (a, c) { return qa(c, D(a, "g.v.t", function (b) { var d = Aa(a, c); if (d && (b = n(b, "settings.goal_values"))) { var e = ia(w(T("url"), u(a, Fm)), b); if (0 !== e.length) { b = ha(a); var f = []; e = C([a, function (g) { var h, k; return d.params((h = {}, h.__ym = (k = {}, k.goal_values = g, k), h)) }, e], Im); f.push(b.F(a, ["click"], D(a, "g.v.c", C([e], Gm)))); f.push(b.F(a, ["submit"], D(a, "g.v.s", C([a, e], Hm)))); return C([w(Q, na), f], x) } } })) }), mf = "close stop focus blur open alert confirm prompt print postMessage captureEvents releaseEvents getSelection getComputedStyle matchMedia moveTo moveBy resizeTo resizeBy scroll scrollTo scrollBy getDefaultComputedStyle scrollByLines scrollByPages find dump requestIdleCallback cancelIdleCallback requestAnimationFrame cancelAnimationFrame reportError setTimeout clearTimeout setInterval clearInterval queueMicrotask fetch self history customElements event frames opener parent frameElement navigator clientInformation external performance visualViewport crypto speechSynthesis localStorage origin indexedDB caches sessionStorage window document location top".split(" "),
                            sf = {}, xh = E, lw = v(function (a, c) { xh = c }), kd, Bm = (kd = {}, kd.copyFromWindow = function (a, c, b) { if (I(b, mf) || gh(b, "on")) throw Ra("rwp"); c = a[b]; if (ca(c) || oc(a, c) || ja(c) || O(c)) return c; if (R(c)) return Xd(c); if (la(c)) return Em(c) }, kd.loadScript = function (a, c, b, d, e) { c = O(d) ? rf("ls.ol", function () { return d.apply(null) }) : E; var f = O(e) ? rf("ls.ol", function () { return e.apply(null) }) : void 0; Cm(a, b, c, f) }, kd.callFromWindow = function (a, c, b) {
                                for (var d = [], e = 3; e < arguments.length; e++)d[e - 3] = arguments[e]; if (I(b, mf)) throw Ra("rwp"); e =
                                    n(a, b); if (!O(e)) throw Ra("wenf"); return e.apply(void 0, d)
                            }, kd.createArgumentsQueue = function (a, c, b, d) { function e() { for (var g = 0; g < arguments.length; g++); f.push(arguments) } if (0 !== b.length && 0 !== d.length && !n(a, b) && !n(a, d)) { c = b.split("."); d = d.split("."); if (I(c[0], mf) || I(d[0], mf)) throw Ra("rwp"); var f = []; yh(a, c)[c[c.length - 1]] = e; yh(a, d)[d[d.length - 1]] = f; return e } }, kd), mw = ["ymab", "rcmx", "yaSurvey", "ym_debug"], gm = v(function (a) {
                                lw(a, function (c, b) { Ed(a, "ytm." + c, b) }); return function (c) {
                                    um(c) && x(function (b) {
                                        if (R(b) &&
                                            1 === b[0]) { var d = b[1]; I(d, mw) && rf("p." + d, vm)(a, b) }
                                    }, c.code)
                                }
                            }), nw = B("y.t.m", function (a, c) { return qa(c, D(a, "y.t.t", function (b) { if (b = n(b, "settings.aytm")) b = rb(a, b), gm(a)(b) })) }), hm = {}, im = v(Mc), tm = w(Fa("exec", /counterID=(\d+)/), T("1")), jm = ta(function (a, c) {
                                var b, d = im(a), e = Ca(c), f = e[0], g = e[1], h = e.slice(2); if (g) {
                                    e = sm(a, f); var k = e[0], l = e[1]; e = L(l); d[e] || (d[e] = {}); d = d[e]; c.Te || hm[g] && N(function (m, p) { return m || !!p(a, l, h, k) }, !1, hm[g]) || ("init" === g ? (c.Te = !0, k ? Mb(a, "" + f, "dc", (b = {}, b.key = f, b)) : a["yaCounter" + l.id] =
                                        new a.Ya[Ga.kc](z({}, h[0], l))) : k && k[g] && d.Oh ? (k[g].apply(k, h), c.Te = !0) : (b = d.Xf, b || (b = [], d.Xf = b), b.push(sa([f, g], h))))
                                }
                            }), ow = nb("is", function (a, c) { var b; Ze(a) && gm(a)((b = {}, b.code = [[1, "ym_debug", [18, ["a", [37, [40, "require"], "loadScript"]], ["b", [37, [40, "require"], "callFromWindow"]]], [2, [37, [40, "a"], Ll + "/tag_debug.js", [24, null, [], [3, [2, [37, [40, "b"], "Ya._metrika.ytmm.tag_debug.init", L(c)]]]]]]]], b)) }), qm = B("destruct.e", function (a, c, b) {
                                return function () {
                                    var d = J(a), e = c.id; x(function (f, g) {
                                        return O(f) && D(a,
                                            "dest.fr." + g, f)()
                                    }, b); rm(a, L(c)); delete d.C("counters")[L(c)]; delete a["yaCounter" + e]
                                }
                            }), ld = J(window); ld.Ia("hitParam", {}); ld.Ia("lastReferrer", window.location.href); (function () { W.push(function (a, c) { var b; return b = {}, b.firstPartyParams = wt(a, c), b.firstPartyParamsHashed = Uq(a, c), b }); be.push("fpp"); be.push("fpmh") })(); (function () { var a = J(window); a.Ia("getCounters", xt(window)); md.push(yt); Ug.push(function (c, b) { b.counters = a.C("getCounters") }) })(); (function () {
                                W.push(function (a, c) {
                                    var b; wb(a, (b = {}, b.counterKey =
                                        L(c), b.name = "counter", b.data = rk(c), b))
                                })
                            })(); Da["1"] = pb; W.push(zt); za["1"] = vc; zb(hg, -1); Yb["1"] = [[hg, -1], [Ye, 1], [Re, 2], [Sb(), 3], [Dj, 4]]; W.push(At); W.push(B("p.ar", function (a, c) {
                                var b, d = wa(a, "a", c); return b = {}, b.hit = function (e, f, g, h, k, l) {
                                    var m, p, q, r = { J: {}, K: Ka((m = {}, m.pv = 1, m.ar = 1, m)) }; f = la(f) ? { title: f.title, Df: f.referer, X: f.params, cc: f.callback, l: f.ctx } : { title: f, Df: g, X: h, cc: k, l: l }; h = Od(c); g = e || S(a).href; h.url !== g && (h.ref = h.url, h.url = e); e = f.Df || h.ref || a.document.referrer; h = pc(a, c, "pv", (p = {}, p.id = c.id,
                                        p.url = g, p.ref = e, p), f.X); p = z(r.M || {}, { X: f.X, title: f.title }); r = d(z(r, { M: p, J: z(r.J || {}, (q = {}, q["page-url"] = g, q["page-ref"] = e, q)) }), c).then(h); return Yc(a, "p.ar.s", r, f.cc || E, f.l)
                                }, b
                            })); Da.a = pb; Yb.a = Zb; za.a = vl; W.push(Je); Da.g = pb; za.g = vc; Yb.g = Zb; W.push(Bt); W.push(Ct); Yb.t = Zb; Da.t = pb; za.t = vc; W.push(B("cl.p", function (a, c) {
                                function b(p, q, r, t) { void 0 === t && (t = {}); r ? Le(a, c, { url: r, ob: !0, Ec: p, Ic: q, sender: e, lg: t }) : h.warn("clel") } var d, e = wa(a, "2", c), f = [], g = L(c), h = rc(a, g), k = D(a, "s.s.tr", u(Pe(a, g), Mq)); g = {
                                    l: a, cb: c,
                                    bh: f, sender: e, xj: J(a), Pg: ed(a, c.id), zj: Fc(a), Vi: u(u(g, hf(a)), w(na, T("trackLinks")))
                                }; g = D(a, "cl.p.c", u(g, Jq)); g = ha(a).F(a, ["click"], g); c.dg && k(c.dg); var l = D(a, "file.clc", C([!0, !1], b)), m = D(a, "e.l.l.clc", C([!1, !0], b)); f = D(a, "add.f.e.clc", Dt(f)); return d = {}, d.file = l, d.extLink = m, d.addFileExtension = f, d.trackLinks = k, d.u = g, d
                            })); Yb["2"] = Zb; Da["2"] = pb; za["2"] = vc; Da.r = Ud("r"); za.r = vl; $a.push(B("p.r", function (a, c) {
                                var b = Ft(a), d = wa(a, "r", c), e = D(a, "rts.p"); return qa(c, C([function (f, g) {
                                    var h = { id: g.Og, ca: g.ca }, k =
                                        { ba: { da: g.zi }, K: Ka(g.Dg), J: g.X, M: { Tb: g.Tb }, na: { Ba: g.Ba } }; g.Ja && (k.Ja = zf(g.Ja)); h = d(k, h)["catch"](e); return f.then(u(h, Q))
                                }, K.resolve(), b], N))["catch"](e)
                            })); aa("r", function (a) { return { N: function (c, b) { var d = c.K, e = void 0 === d ? Ka() : d, f = c.M.Tb, g = Nd(a); d = e.C("rqnl", 0) + 1; e.D("rqnl", d); if (e = n(g, G(".", [f, "browserInfo"]))) e.rqnl = d, fg(a); b() }, Da: function (c, b) { pj(a, c); b() } } }, 1); zb(Ke, 100); aa("1", Ke, 100); W.push(Gt); aa("n", Ye, 1); aa("n", Re, 2); aa("n", Sb(), 3); aa("n", Ke, 100); Da.n = pb; za.n = vc; sc({ Le: { ea: "accurateTrackBounce" } });
            W.push(Ht); Da.m = Ud("cm"); za.m = rt; aa("m", Sb(["u", "v", "vf"]), 1); aa("m", Ke, 2); sc({ Lg: { ea: "clickmap" } }); W.push(It); W.push(Jt); W.push(Kt); W.push(Lt); (function () { W.push(Mt); be.push("ecommerce"); sc({ sd: { ea: "ecommerce", Pa: function (a) { if (a) return !0 === a ? "dataLayer" : "" + a } } }) })(); W.push(Nt); $a.push(Pt); W.push(Qt); be.push("user_id"); $a.push(B("p.st", Rt)); W.push(St); zb(function (a, c) { return { Da: function (b, d) { var e = Aa(a, c); e = e && e.userParams; var f = (b.M || {}).Fe; e && f && e(f); d() } } }, 0); $e.push("_ym_debug"); Nc.unshift(Vt);
            W.push(Wt); Nc.push(function (a) { var c = J(a); c.C("i") || (c.D("i", !0), ha(a).F(a, ["message"], u(a, hq))) }); (function () { var a, c = (a = {}, a.tp = w(cb, sk, Qb), a.tpid = w(cb, Xr), a); z(Rd, c) })(); zb(Id, 20); aa("n", Id, 20); aa("1", Id, 20); Nc.unshift(Yt); Rd.fp = function (a, c, b) {
                if (b.J && b.J.nohit) return null; b = J(a).C; if (!b("fpe")) return null; c = Xt(c); if (c.fh) return null; b = b("fht", Infinity); a: {
                    var d = n(a, "performance.getEntriesByType"); if (O(d)) {
                        if (a = ia(w(Q, T("name"), Ba("first-contentful-paint")), d.call(a.performance, "paint")), a.length) {
                            a =
                                a[0].startTime; break a
                        }
                    } else { var e = n(a, "chrome.loadTimes"); d = sl(a); if (O(e) && (e = e.call(a.chrome), e = n(e, "firstPaintTime"), d && e)) { a = 1E3 * e - d; break a } if (a = n(a, "performance.timing.msFirstPaint")) { a -= d; break a } } a = void 0
                } return a && b > a ? (c.fh = a, Math.round(a)) : null
            }; W.push(function (a, c) { var b; return b = {}, b.ecommerceAdd = B("ecm.a", au(a, c)), b.ecommerceRemove = B("ecm.r", bu(a, c)), b.ecommerceDetail = B("ecm.d", cu(a, c)), b.ecommercePurchase = B("ecm.p", du(a, c)), b }); (function () {
                var a, c = {}; c.bu = ju; c.pri = Qp; c.wv = u(2, Q); c.ds =
                    Tp; c.co = function (b) { return ub(J(b).C("jn")) }; c.td = pu; z(c, (a = {}, a.iss = w(Vs, Qb), a.hdl = w(Ws, Qb), a.iia = w(Xs, Qb), a.cpf = w(iu, Qb), a.ntf = v(function (b) { b = n(b, "Notification.permission"); b = "denied" === b ? !1 : "granted" === b ? !0 : null; return Xa(b) ? null : b ? 2 : 1 }), a.eu = cc("isEU"), a.ns = sl, a.np = function (b) { return Ya(b, 0, 100) ? null : nd(ne(bb(Yf(b), 100))) }, a)); c.pani = ku; c.pci = lu; c.si = mu; c.gi = nu; z(Rd, c)
            })(); (function () {
                var a = {}; a.hc = cc("hc"); a.oo = cc("oo"); a.pmc = cc("cmc"); a.lt = function (c) {
                    var b = Yd(c).C("lt", null); return b ? c.Math.round(100 *
                        b) : b
                }; a.re = w(ur, Qb); a.aw = function (c) { c = vb(w(ca, Jc), [c.document.hidden, c.document.msHidden, c.document.webkitHidden]); return ca(c) ? null : ub(!c) }; a.rcm = su; a.yu = function (c) { return (c = Sc(c, "").C("yandexuid")) && c.substring(0, 25) }; a.ifc = cc("ifc"); a.ifb = cc("ifb"); a.ecs = cc("ecs"); a.csi = cc("scip"); a.cdl = cc("cdl"); Te.eco = v(Op, w(cb, L)); z(Te, a)
            })(); za.er = gd; (function (a) {
                try {
                    var c = dh(a, "er"), b = Lp(a, c); kk.push(function (d, e, f, g) {
                        var h, k, l, m, p; .01 >= a.Math.random() || b((h = {}, h[d] = (k = {}, k[Ga.bc] = (l = {}, l[e] = (m = {}, m[f] =
                            g ? (p = {}, p[a.location.href] = g, p) : a.location.href, m), l), k), h))
                    })
                } catch (d) { }
            })(window); (function () { pf.push(Pp); Qe.unshift(Kp); ih.push(function (a) { var c = void 0; void 0 === c && (c = !0); J(a).D("oo", c) }) })(); zb(function (a, c) { return { N: function (b, d) { var e = b.J, f = b.K; !Il[c.id] && f.C("pv") && c.exp && !e.nohit && (e.exp = c.exp, Il[c.id] = !0); d() } } }, -99); W.push(tu); Yb.e = Zb; Da.e = pb; za.e = vc; sc({ exp: { ea: "experiments" } }); Dk.experiments = "ex"; (function () {
                var a; xf.push(uu); Da.f = pb; z(za, (a = {}, a.f = ul, a)); aa("f", Sb(), 1); aa("f", Hj, 2);
                aa("f", Id, 20)
            })(); pf.push(function (a, c) { var b = { oa: L(c), nd: Aa(a, c), cg: ka(a), Td: Pa(a) }, d = b.cg(sb); if (!b.Td.Ld) { var e = b.Td.C("ymoo" + b.oa); if (e && 30 > d - e) b = b.oa, delete J(a).C("counters", {})[b], Wa(Ua("uws")); else qa(c, vu(b))["catch"](D(a, "d.f")) } }); (function () { var a, c, b = [Hb]; z(za, (a = {}, a.s = b, a.S = b, a.u = gd, a)); z(Da, (c = {}, c.s = $b, c.S = pb, c.u = $b, c)); aa("s"); aa("u"); aa("S", Sb(["v", "hid", "u", "vf", "rn"]), 1); W.push(B("s", vp)) })(); Da["8"] = $b; za["8"] = [ng]; tl.push([ng, 0]); W.push(B("p.us", function (a, c) {
                return qa(c, function (b) {
                    if (n(b,
                        "settings.sbp")) return Hi(a, b, { cb: c, Rb: "8", Rd: "cs" })
                })
            })); aa("p", Sb(jh), 1); Yg("pub", function (a, c) { return { N: function (b, d) { ui(a, c, b); d() } } }, 1); Da.p = zu; za.p = va([Gb, Hb]); $a.push(Du); sc({ zb: { ea: "webvisor", Pa: Ib }, Tg: { ea: "disableFormAnalytics", Pa: Ib } }); aa("4", Sb(jh), 1); Da["4"] = Ml; za["4"] = va([Gb, Hb, $c]); $a.push(Ju); (function () {
                aa("W", Sb(jh), 1); Yg("wv", Ko, 1); za.W = va([Gb, Hb]); Da.W = Ml; $a.push(sv); W.push(tv); sc({ zb: { ea: "webvisor" } }); sc({ Xi: { ea: "trustedDomains" }, ic: { ea: "childIframe", Pa: Ib } }); ih.push(function (a) {
                    J(a).C("stopRecorder",
                        E)()
                })
            })(); W.push(vv); aa("pi"); Da.pi = $b; za.pi = gd; Yg("w", function (a, c) { return { N: function (b, d) { if (b.K) { var e = Jf(c), f = e.status; "rt" === e.Rb && f && (b.K.D("rt", f), b.na || (b.na = {}), b.na.Lh = 1 === f ? di(a, c) + "." : "") } d() } } }, 2); W.push(xv); W.push(Iv); za["6"] = va([Gb, Hb]); Da["6"] = $b; W.push(Jv); W.push(qu); (function () { Ug.push(function (a, c) { c.informer = Rn(a) }) })(); zb(Gf, 6); aa("1", Gf, 6); aa("adb"); aa("n", Gf, 4); za.adb = gd; Da.adb = Xj; md.push(Lv); za["5"] = vc; Da["5"] = pb; Yb["5"] = ia(w(Zc, xc([Ye, Re]), Jc), Zb); W.push(Mv); aa("5", Id, 20);
            zb(Xh, 7); aa("n", Xh, 6); $a.push(Nv); Da.d = pb; aa("d", Sb(["hid", "u", "v", "vf"]), 1); za.d = gd; aa("n", function (a, c) {
                return {
                    Da: function (b, d) {
                        if (!b.M || !b.M.force) {
                            var e = .002, f = c.id === Ga.vg ? 1 : .002, g, h, k, l, m; void 0 === e && (e = 1); void 0 === f && (f = 1); var p = Gd(a); if (p && O(p.getEntriesByType) && (e = Math.random() > e, f = Math.random() > f, !e || !f)) {
                                p = p.getEntriesByType("resource"); for (var q = {}, r = {}, t = {}, y = Hl(), F = S(a).href, P = 0; P < p.length; P += 1) {
                                    var M = p[P], oa = M.name.replace(Gl, "").split("?")[0], xa = ic(oa), Fb = (g = {}, g.dns = Math.round(M.domainLookupEnd -
                                        M.domainLookupStart), g.tcp = Math.round(M.connectEnd - M.connectStart), g.duration = Math.round(M.duration), g.response = Math.round(M.responseEnd - M.requestStart), g); "script" !== M.initiatorType || e || (r[oa] = z(Fb, (h = {}, h.name = M.name, h.decodedBodySize = M.decodedBodySize, h.transferSize = Math.round(M.transferSize), h))); !ru[xa] && !y[xa] || q[oa] || f || (q[oa] = z(Fb, (k = {}, k.pages = F, k)))
                                } da(q).length && (t.timings8 = q); da(r).length && (t.scripts = r); if (da(t).length) wa(a, "d", c)({
                                    K: Ka((l = {}, l.ar = 1, l.pv = 1, l)), ba: { da: Cb(a, t) || void 0 },
                                    J: (m = {}, m["page-url"] = F, m)
                                }, { id: Ga.yg, ca: "0" })["catch"](D(a, "r.tim.ng2"))
                            }
                        } d()
                    }
                }
            }, 7); za.ci = [Hb]; Da.ci = $b; $a.push(B("p.sci", function (a, c) { return qa(c, u(a, Pn))["catch"](D(a, "ins.cs")) })); W.push(Ov); $a.push(hu); W.push(Tv); zb(sh, 8); aa("f", sh, 3); aa("n", sh, 5); md.push(function (a) { return B("fip", function (c) { if (!Cl(c) || Wd(c)) { var b = Pa(c); if (!b.C("fip")) { var d = w(Xb(w(function (e, f) { return B("fip." + f, e)(c) }, H(ws, null))), Ee("-"))(a); b.D("fip", d) } } }) }([Vv, Uv, function (a) {
                var c = n(a, "ApplePaySession"), b = S(a).protocol;
                a = c && "https:" === b && !tb(a) ? c : void 0; c = ""; if (!a) return c; try { c = "" + a.canMakePayments(); b = ""; var d = a.supportsVersion; if (O(d)) for (var e = 1; 20 >= e; e += 1)b += d.call(a, e) ? "" + e : "0"; return b + c } catch (f) { return c }
            }, function (a) { a = n(a, "navigator") || {}; return a.doNotTrack || a.msDoNotTrack || "unknown" }, function (a) { if (a = gu(a)) try { for (var c = [], b = 0; b < Dl.length; b += 1) { var d = a(Dl[b]); c.push(d) } var e = c } catch (f) { e = [] } else e = []; return e ? G("x", e) : "" }, function (a) {
                var c = void 0; void 0 === c && (c = Rv); var b = n(a, "navigator") || {}; c = A(u(b,
                    n), c); c = G("x", c); try { var d = n(a, "navigator.getGamepads"); var e = pa(d, "getGamepads") && a.navigator.getGamepads() || [] } catch (f) { e = [] } return c + "x" + Ta(e)
            }, Pv, function (a) { a = n(a, "screen") || {}; return G("x", A(u(a, n), Qv)) }, function (a) { return G("x", un(a) || []) }, function (a) { a = Kn(a); return R(a) ? G("x", a) : a }, function (a) { return (a = Mn(a)) ? G("x", A(C(["", ["matches", "media"]], wn), va(Ah(a)))) : "" }])); zb(function (a) { return { N: function (c, b) { var d = c.K, e = Pa(a).C("fip"); e && d && (d.D("fip", e), re(c, "fip", ub(e))); b() } } }, 9); aa("h", function (a) {
                return {
                    Da: function (c,
                        b) { var d = c.Di; $f(c) && d && J(a).D("isEU", n(d, "settings.eu")); b() }
                }
            }, 3); md.push(rv); Nc.push(Wv); $a.push(aw); W.push(bw); sc({ gj: { ea: "yaDisableGDPR" }, hj: { ea: "yaGDPRLang" } }); Qe.push(function (a, c) { return { N: C([a, c], fn) } }); $e.push("gdpr"); $e.push("gdpr_popup"); Dg.push(function (a, c) { var b = pe(a); b = qe(b); if (ia(xc(ew), b).length) return !0; b = c(a, "gdpr"); return I(b, [Tc, dw]) }); Qe.push(function (a) {
                return {
                    N: function (c, b) {
                        var d = c.na || {}, e; (e = n(a, "document.referrer")) ? (e = Uc(a, e).host, e = zj(e), e = Kl + "." + (e || wu)) : e = lc; c.na =
                            z(d, { Mh: [e] }); b()
                    }
                }
            }); zb(fm, 5); aa("1", fm, 6); za.c = gd; Da.c = $b; aa("1", Dh, 7); zb(Dh, 7); Nc.push(B("hcp", Bh)); $a.push(B("p.ot", hw)); $a.push(nb("cta", iw, !0)); aa("n", function (a) { var c = J(a); return { N: function (b, d) { var e = b.M || {}, f = c.C("cta"), g = c.C("cta.e"); if (f || g) { e.X || (e.X = {}); e.X.__ym || (e.X.__ym = {}); var h = {}; f ? (f = A(function (k) { var l, m = n(k, "topic"); k = n(k, "version"); return l = {}, l.topic = m, l.version = k, l }, f), h.ct = f) : g && (h["ct.e"] = g); z(e.X.__ym, h); b.M = z(b.M || {}, e) } d() } } }, 7); aa("n", hg, 8); W.push(jw); W.push(kw); Nc.push(B("cdl",
                function (a) { var c = J(a).Ia; if (a = n(a, "navigator.cookieDeprecationLabel")) try { a.getValue().then(u("cdl", c), C(["cdl", "e"], c)) } catch (b) { c("cdl", "d") } else c("cdl", "na") })); z(ut, $t); $a.push(nw); W.push(function (a, c) { var b = im(a), d = L(c), e = b[d]; e || (e = {}, b[d] = e); e.Oh = !0; if (b = e.Xf) d = jm(a), x(d, b) }); $a.unshift(ow); x(xb(na)(window), Nc); if (window.Ya && nf) { var km = Ga.kc; window.Ya[km] = nf; vt(window); x(w(Pc([window, window.Ya[km]]), na), Ug) } (function (a) {
                    var c = n(a, "ym"); if (c) {
                        var b = n(c, "a"); b || (c.a = [], b = c.a); var d = jm(a); Ne(a,
                            b, function (e) { e.za.F(d) }, !0)
                    }
                })(window)
        })()
    } catch (nf) { };
}).call(this)