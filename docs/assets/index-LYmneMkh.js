const __vite__fileDeps = ["./index-DuhjldRx.js", "./route-block-B_A1xBdJ.js", "./index-CuXtCPFo.js", "./index-BpQssvMS.css", "./turf-zfJtvhuX.js", "./turf-BApsEjuf.css", "./CaXxB6YD.js"],
  __vite__mapDeps = i => i.map(i => __vite__fileDeps[i]);
var oi = Object.defineProperty,
  ii = Object.defineProperties;
var li = Object.getOwnPropertyDescriptors;
var Lr = Object.getOwnPropertySymbols;
var ci = Object.prototype.hasOwnProperty,
  ui = Object.prototype.propertyIsEnumerable;
var $r = (e, t, n) => t in e ? oi(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
  }) : e[t] = n,
  Tn = (e, t) => {
    for (var n in t || (t = {})) ci.call(t, n) && $r(e, n, t[n]);
    if (Lr)
      for (var n of Lr(t)) ui.call(t, n) && $r(e, n, t[n]);
    return e
  },
  In = (e, t) => ii(e, li(t));
var Nr = (e, t, n) => new Promise((r, s) => {
  var o = l => {
      try {
        c(n.next(l))
      } catch (a) {
        s(a)
      }
    },
    i = l => {
      try {
        c(n.throw(l))
      } catch (a) {
        s(a)
      }
    },
    c = l => l.done ? r(l.value) : Promise.resolve(l.value).then(o, i);
  c((n = n.apply(e, t)).next())
});
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver(s => {
    for (const o of s)
      if (o.type === "childList")
        for (const i of o.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
  }).observe(document, {
    childList: !0,
    subtree: !0
  });

  function n(s) {
    const o = {};
    return s.integrity && (o.integrity = s.integrity), s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? o.credentials = "include" : s.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
  }

  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const o = n(s);
    fetch(s.href, o)
  }
})();
/**
 * @vue/shared v3.4.23
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
/*! #__NO_SIDE_EFFECTS__ */
function ir(e, t) {
  const n = new Set(e.split(","));
  return r => n.has(r)
}
const X = {},
  dt = [],
  xe = () => {},
  fi = () => !1,
  pn = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  lr = e => e.startsWith("onUpdate:"),
  ce = Object.assign,
  cr = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
  },
  ai = Object.prototype.hasOwnProperty,
  D = (e, t) => ai.call(e, t),
  F = Array.isArray,
  pt = e => gn(e) === "[object Map]",
  Hs = e => gn(e) === "[object Set]",
  B = e => typeof e == "function",
  re = e => typeof e == "string",
  lt = e => typeof e == "symbol",
  ee = e => e !== null && typeof e == "object",
  Vs = e => (ee(e) || B(e)) && B(e.then) && B(e.catch),
  Bs = Object.prototype.toString,
  gn = e => Bs.call(e),
  hi = e => gn(e).slice(8, -1),
  ks = e => gn(e) === "[object Object]",
  ur = e => re(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  At = ir(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
  mn = e => {
    const t = Object.create(null);
    return n => t[n] || (t[n] = e(n))
  },
  di = /-(\w)/g,
  Ne = mn(e => e.replace(di, (t, n) => n ? n.toUpperCase() : "")),
  pi = /\B([A-Z])/g,
  vt = mn(e => e.replace(pi, "-$1").toLowerCase()),
  _n = mn(e => e.charAt(0).toUpperCase() + e.slice(1)),
  Mn = mn(e => e ? `on${_n(e)}` : ""),
  Qe = (e, t) => !Object.is(e, t),
  Ln = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t)
  },
  Us = (e, t, n) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      value: n
    })
  },
  gi = e => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t
  };
let Fr;
const Ds = () => Fr || (Fr = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : typeof global != "undefined" ? global : {});

function fr(e) {
  if (F(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        s = re(r) ? bi(r) : fr(r);
      if (s)
        for (const o in s) t[o] = s[o]
    }
    return t
  } else if (re(e) || ee(e)) return e
}
const mi = /;(?![^(]*\))/g,
  _i = /:([^]+)/,
  yi = /\/\*[^]*?\*\//g;

function bi(e) {
  const t = {};
  return e.replace(yi, "").split(mi).forEach(n => {
    if (n) {
      const r = n.split(_i);
      r.length > 1 && (t[r[0].trim()] = r[1].trim())
    }
  }), t
}

function ar(e) {
  let t = "";
  if (re(e)) t = e;
  else if (F(e))
    for (let n = 0; n < e.length; n++) {
      const r = ar(e[n]);
      r && (t += r + " ")
    } else if (ee(e))
      for (const n in e) e[n] && (t += n + " ");
  return t.trim()
}
const vi = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Ei = ir(vi);

function Ks(e) {
  return !!e || e === ""
}
const bf = e => re(e) ? e : e == null ? "" : F(e) || ee(e) && (e.toString === Bs || !B(e.toString)) ? JSON.stringify(e, qs, 2) : String(e),
  qs = (e, t) => t && t.__v_isRef ? qs(e, t.value) : pt(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, s], o) => (n[$n(r, o) + " =>"] = s, n), {})
  } : Hs(t) ? {
    [`Set(${t.size})`]: [...t.values()].map(n => $n(n))
  } : lt(t) ? $n(t) : ee(t) && !F(t) && !ks(t) ? String(t) : t,
  $n = (e, t = "") => {
    var n;
    return lt(e) ? `Symbol(${(n=e.description)!=null?n:t})` : e
  };
/**
 * @vue/reactivity v3.4.23
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
let Re;
class Ws {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Re, !t && Re && (this.index = (Re.scopes || (Re.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  run(t) {
    if (this._active) {
      const n = Re;
      try {
        return Re = this, t()
      } finally {
        Re = n
      }
    }
  }
  on() {
    Re = this
  }
  off() {
    Re = this.parent
  }
  stop(t) {
    if (this._active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index)
      }
      this.parent = void 0, this._active = !1
    }
  }
}

function xi(e) {
  return new Ws(e)
}

function wi(e, t = Re) {
  t && t.active && t.effects.push(e)
}

function Ri() {
  return Re
}
let ot;
class hr {
  constructor(t, n, r, s) {
    this.fn = t, this.trigger = n, this.scheduler = r, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, wi(this, s)
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Xe();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (Si(n.computed), this._dirtyLevel >= 4)) break
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), Ze()
    }
    return this._dirtyLevel >= 4
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0
  }
  run() {
    if (this._dirtyLevel = 0, !this.active) return this.fn();
    let t = Ge,
      n = ot;
    try {
      return Ge = !0, ot = this, this._runnings++, jr(this), this.fn()
    } finally {
      Hr(this), this._runnings--, ot = n, Ge = t
    }
  }
  stop() {
    var t;
    this.active && (jr(this), Hr(this), (t = this.onStop) == null || t.call(this), this.active = !1)
  }
}

function Si(e) {
  return e.value
}

function jr(e) {
  e._trackId++, e._depsLength = 0
}

function Hr(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) zs(e.deps[t], e);
    e.deps.length = e._depsLength
  }
}

function zs(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup())
}
let Ge = !0,
  Dn = 0;
const Gs = [];

function Xe() {
  Gs.push(Ge), Ge = !1
}

function Ze() {
  const e = Gs.pop();
  Ge = e === void 0 ? !0 : e
}

function dr() {
  Dn++
}

function pr() {
  for (Dn--; !Dn && Kn.length;) Kn.shift()()
}

function Js(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const r = e.deps[e._depsLength];
    r !== t ? (r && zs(r, e), e.deps[e._depsLength++] = t) : e._depsLength++
  }
}
const Kn = [];

function Qs(e, t, n) {
  dr();
  for (const r of e.keys()) {
    let s;
    r._dirtyLevel < t && (s != null ? s : s = e.get(r) === r._trackId) && (r._shouldSchedule || (r._shouldSchedule = r._dirtyLevel === 0), r._dirtyLevel = t), r._shouldSchedule && (s != null ? s : s = e.get(r) === r._trackId) && (r.trigger(), (!r._runnings || r.allowRecurse) && r._dirtyLevel !== 2 && (r._shouldSchedule = !1, r.scheduler && Kn.push(r.scheduler)))
  }
  pr()
}
const Ys = (e, t) => {
    const n = new Map;
    return n.cleanup = e, n.computed = t, n
  },
  ln = new WeakMap,
  it = Symbol(""),
  qn = Symbol("");

function _e(e, t, n) {
  if (Ge && ot) {
    let r = ln.get(e);
    r || ln.set(e, r = new Map);
    let s = r.get(n);
    s || r.set(n, s = Ys(() => r.delete(n))), Js(ot, s)
  }
}

function He(e, t, n, r, s, o) {
  const i = ln.get(e);
  if (!i) return;
  let c = [];
  if (t === "clear") c = [...i.values()];
  else if (n === "length" && F(e)) {
    const l = Number(r);
    i.forEach((a, f) => {
      (f === "length" || !lt(f) && f >= l) && c.push(a)
    })
  } else switch (n !== void 0 && c.push(i.get(n)), t) {
    case "add":
      F(e) ? ur(n) && c.push(i.get("length")) : (c.push(i.get(it)), pt(e) && c.push(i.get(qn)));
      break;
    case "delete":
      F(e) || (c.push(i.get(it)), pt(e) && c.push(i.get(qn)));
      break;
    case "set":
      pt(e) && c.push(i.get(it));
      break
  }
  dr();
  for (const l of c) l && Qs(l, 4);
  pr()
}

function Pi(e, t) {
  var n;
  return (n = ln.get(e)) == null ? void 0 : n.get(t)
}
const Ci = ir("__proto__,__v_isRef,__isVue"),
  Xs = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(lt)),
  Vr = Ai();

function Ai() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach(t => {
    e[t] = function (...n) {
      const r = K(this);
      for (let o = 0, i = this.length; o < i; o++) _e(r, "get", o + "");
      const s = r[t](...n);
      return s === -1 || s === !1 ? r[t](...n.map(K)) : s
    }
  }), ["push", "pop", "shift", "unshift", "splice"].forEach(t => {
    e[t] = function (...n) {
      Xe(), dr();
      const r = K(this)[t].apply(this, n);
      return pr(), Ze(), r
    }
  }), e
}

function Oi(e) {
  lt(e) || (e = String(e));
  const t = K(this);
  return _e(t, "has", e), t.hasOwnProperty(e)
}
class Zs {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n
  }
  get(t, n, r) {
    const s = this._isReadonly,
      o = this._isShallow;
    if (n === "__v_isReactive") return !s;
    if (n === "__v_isReadonly") return s;
    if (n === "__v_isShallow") return o;
    if (n === "__v_raw") return r === (s ? o ? Ui : ro : o ? no : to).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const i = F(t);
    if (!s) {
      if (i && D(Vr, n)) return Reflect.get(Vr, n, r);
      if (n === "hasOwnProperty") return Oi
    }
    const c = Reflect.get(t, n, r);
    return (lt(n) ? Xs.has(n) : Ci(n)) || (s || _e(t, "get", n), o) ? c : de(c) ? i && ur(n) ? c : c.value : ee(c) ? s ? oo(c) : bn(c) : c
  }
}
class eo extends Zs {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, r, s) {
    let o = t[n];
    if (!this._isShallow) {
      const l = jt(o);
      if (!cn(r) && !jt(r) && (o = K(o), r = K(r)), !F(t) && de(o) && !de(r)) return l ? !1 : (o.value = r, !0)
    }
    const i = F(t) && ur(n) ? Number(n) < t.length : D(t, n),
      c = Reflect.set(t, n, r, s);
    return t === K(s) && (i ? Qe(r, o) && He(t, "set", n, r) : He(t, "add", n, r)), c
  }
  deleteProperty(t, n) {
    const r = D(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && He(t, "delete", n, void 0), s
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!lt(n) || !Xs.has(n)) && _e(t, "has", n), r
  }
  ownKeys(t) {
    return _e(t, "iterate", F(t) ? "length" : it), Reflect.ownKeys(t)
  }
}
class Ti extends Zs {
  constructor(t = !1) {
    super(!0, t)
  }
  set(t, n) {
    return !0
  }
  deleteProperty(t, n) {
    return !0
  }
}
const Ii = new eo,
  Mi = new Ti,
  Li = new eo(!0),
  gr = e => e,
  yn = e => Reflect.getPrototypeOf(e);

function zt(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const s = K(e),
    o = K(t);
  n || (Qe(t, o) && _e(s, "get", t), _e(s, "get", o));
  const {
    has: i
  } = yn(s), c = r ? gr : n ? yr : Ht;
  if (i.call(s, t)) return c(e.get(t));
  if (i.call(s, o)) return c(e.get(o));
  e !== s && e.get(t)
}

function Gt(e, t = !1) {
  const n = this.__v_raw,
    r = K(n),
    s = K(e);
  return t || (Qe(e, s) && _e(r, "has", e), _e(r, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s)
}

function Jt(e, t = !1) {
  return e = e.__v_raw, !t && _e(K(e), "iterate", it), Reflect.get(e, "size", e)
}

function Br(e) {
  e = K(e);
  const t = K(this);
  return yn(t).has.call(t, e) || (t.add(e), He(t, "add", e, e)), this
}

function kr(e, t) {
  t = K(t);
  const n = K(this),
    {
      has: r,
      get: s
    } = yn(n);
  let o = r.call(n, e);
  o || (e = K(e), o = r.call(n, e));
  const i = s.call(n, e);
  return n.set(e, t), o ? Qe(t, i) && He(n, "set", e, t) : He(n, "add", e, t), this
}

function Ur(e) {
  const t = K(this),
    {
      has: n,
      get: r
    } = yn(t);
  let s = n.call(t, e);
  s || (e = K(e), s = n.call(t, e)), r && r.call(t, e);
  const o = t.delete(e);
  return s && He(t, "delete", e, void 0), o
}

function Dr() {
  const e = K(this),
    t = e.size !== 0,
    n = e.clear();
  return t && He(e, "clear", void 0, void 0), n
}

function Qt(e, t) {
  return function (r, s) {
    const o = this,
      i = o.__v_raw,
      c = K(i),
      l = t ? gr : e ? yr : Ht;
    return !e && _e(c, "iterate", it), i.forEach((a, f) => r.call(s, l(a), l(f), o))
  }
}

function Yt(e, t, n) {
  return function (...r) {
    const s = this.__v_raw,
      o = K(s),
      i = pt(o),
      c = e === "entries" || e === Symbol.iterator && i,
      l = e === "keys" && i,
      a = s[e](...r),
      f = n ? gr : t ? yr : Ht;
    return !t && _e(o, "iterate", l ? qn : it), {
      next() {
        const {
          value: p,
          done: d
        } = a.next();
        return d ? {
          value: p,
          done: d
        } : {
          value: c ? [f(p[0]), f(p[1])] : f(p),
          done: d
        }
      },
      [Symbol.iterator]() {
        return this
      }
    }
  }
}

function Ue(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this
  }
}

function $i() {
  const e = {
      get(o) {
        return zt(this, o)
      },
      get size() {
        return Jt(this)
      },
      has: Gt,
      add: Br,
      set: kr,
      delete: Ur,
      clear: Dr,
      forEach: Qt(!1, !1)
    },
    t = {
      get(o) {
        return zt(this, o, !1, !0)
      },
      get size() {
        return Jt(this)
      },
      has: Gt,
      add: Br,
      set: kr,
      delete: Ur,
      clear: Dr,
      forEach: Qt(!1, !0)
    },
    n = {
      get(o) {
        return zt(this, o, !0)
      },
      get size() {
        return Jt(this, !0)
      },
      has(o) {
        return Gt.call(this, o, !0)
      },
      add: Ue("add"),
      set: Ue("set"),
      delete: Ue("delete"),
      clear: Ue("clear"),
      forEach: Qt(!0, !1)
    },
    r = {
      get(o) {
        return zt(this, o, !0, !0)
      },
      get size() {
        return Jt(this, !0)
      },
      has(o) {
        return Gt.call(this, o, !0)
      },
      add: Ue("add"),
      set: Ue("set"),
      delete: Ue("delete"),
      clear: Ue("clear"),
      forEach: Qt(!0, !0)
    };
  return ["keys", "values", "entries", Symbol.iterator].forEach(o => {
    e[o] = Yt(o, !1, !1), n[o] = Yt(o, !0, !1), t[o] = Yt(o, !1, !0), r[o] = Yt(o, !0, !0)
  }), [e, n, t, r]
}
const [Ni, Fi, ji, Hi] = $i();

function mr(e, t) {
  const n = t ? e ? Hi : ji : e ? Fi : Ni;
  return (r, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(D(n, s) && s in r ? n : r, s, o)
}
const Vi = {
    get: mr(!1, !1)
  },
  Bi = {
    get: mr(!1, !0)
  },
  ki = {
    get: mr(!0, !1)
  },
  to = new WeakMap,
  no = new WeakMap,
  ro = new WeakMap,
  Ui = new WeakMap;

function Di(e) {
  switch (e) {
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
}

function Ki(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Di(hi(e))
}

function bn(e) {
  return jt(e) ? e : _r(e, !1, Ii, Vi, to)
}

function so(e) {
  return _r(e, !1, Li, Bi, no)
}

function oo(e) {
  return _r(e, !0, Mi, ki, ro)
}

function _r(e, t, n, r, s) {
  if (!ee(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
  const o = s.get(e);
  if (o) return o;
  const i = Ki(e);
  if (i === 0) return e;
  const c = new Proxy(e, i === 2 ? r : n);
  return s.set(e, c), c
}

function Ot(e) {
  return jt(e) ? Ot(e.__v_raw) : !!(e && e.__v_isReactive)
}

function jt(e) {
  return !!(e && e.__v_isReadonly)
}

function cn(e) {
  return !!(e && e.__v_isShallow)
}

function io(e) {
  return e ? !!e.__v_raw : !1
}

function K(e) {
  const t = e && e.__v_raw;
  return t ? K(t) : e
}

function lo(e) {
  return Object.isExtensible(e) && Us(e, "__v_skip", !0), e
}
const Ht = e => ee(e) ? bn(e) : e,
  yr = e => ee(e) ? oo(e) : e;
class co {
  constructor(t, n, r, s) {
    this.getter = t, this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new hr(() => t(this._value), () => en(this, this.effect._dirtyLevel === 2 ? 2 : 3)), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = r
  }
  get value() {
    const t = K(this);
    return (!t._cacheable || t.effect.dirty) && Qe(t._value, t._value = t.effect.run()) && en(t, 4), uo(t), t.effect._dirtyLevel >= 2 && en(t, 2), t._value
  }
  set value(t) {
    this._setter(t)
  }
  get _dirty() {
    return this.effect.dirty
  }
  set _dirty(t) {
    this.effect.dirty = t
  }
}

function qi(e, t, n = !1) {
  let r, s;
  const o = B(e);
  return o ? (r = e, s = xe) : (r = e.get, s = e.set), new co(r, s, o || !s, n)
}

function uo(e) {
  var t;
  Ge && ot && (e = K(e), Js(ot, (t = e.dep) != null ? t : e.dep = Ys(() => e.dep = void 0, e instanceof co ? e : void 0)))
}

function en(e, t = 4, n) {
  e = K(e);
  const r = e.dep;
  r && Qs(r, t)
}

function de(e) {
  return !!(e && e.__v_isRef === !0)
}

function fo(e) {
  return ao(e, !1)
}

function Wi(e) {
  return ao(e, !0)
}

function ao(e, t) {
  return de(e) ? e : new zi(e, t)
}
class zi {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : K(t), this._value = n ? t : Ht(t)
  }
  get value() {
    return uo(this), this._value
  }
  set value(t) {
    const n = this.__v_isShallow || cn(t) || jt(t);
    t = n ? t : K(t), Qe(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Ht(t), en(this, 4))
  }
}

function gt(e) {
  return de(e) ? e.value : e
}
const Gi = {
  get: (e, t, n) => gt(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return de(s) && !de(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r)
  }
};

function ho(e) {
  return Ot(e) ? e : new Proxy(e, Gi)
}

function vf(e) {
  const t = F(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = Qi(e, n);
  return t
}
class Ji {
  constructor(t, n, r) {
    this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = !0
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t
  }
  set value(t) {
    this._object[this._key] = t
  }
  get dep() {
    return Pi(K(this._object), this._key)
  }
}

function Qi(e, t, n) {
  const r = e[t];
  return de(r) ? r : new Ji(e, t, n)
}
/**
 * @vue/runtime-core v3.4.23
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
function Je(e, t, n, r) {
  try {
    return r ? e(...r) : e()
  } catch (s) {
    vn(s, t, n)
  }
}

function Ce(e, t, n, r) {
  if (B(e)) {
    const s = Je(e, t, n, r);
    return s && Vs(s) && s.catch(o => {
      vn(o, t, n)
    }), s
  }
  if (F(e)) {
    const s = [];
    for (let o = 0; o < e.length; o++) s.push(Ce(e[o], t, n, r));
    return s
  }
}

function vn(e, t, n, r = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy,
      c = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o;) {
      const a = o.ec;
      if (a) {
        for (let f = 0; f < a.length; f++)
          if (a[f](e, i, c) === !1) return
      }
      o = o.parent
    }
    const l = t.appContext.config.errorHandler;
    if (l) {
      Xe(), Je(l, null, 10, [e, i, c]), Ze();
      return
    }
  }
  Yi(e, n, s, r)
}

function Yi(e, t, n, r = !0) {
  console.error(e)
}
let Vt = !1,
  Wn = !1;
const fe = [];
let $e = 0;
const mt = [];
let Ke = null,
  rt = 0;
const po = Promise.resolve();
let br = null;

function go(e) {
  const t = br || po;
  return e ? t.then(this ? e.bind(this) : e) : t
}

function Xi(e) {
  let t = $e + 1,
    n = fe.length;
  for (; t < n;) {
    const r = t + n >>> 1,
      s = fe[r],
      o = Bt(s);
    o < e || o === e && s.pre ? t = r + 1 : n = r
  }
  return t
}

function vr(e) {
  (!fe.length || !fe.includes(e, Vt && e.allowRecurse ? $e + 1 : $e)) && (e.id == null ? fe.push(e) : fe.splice(Xi(e.id), 0, e), mo())
}

function mo() {
  !Vt && !Wn && (Wn = !0, br = po.then(yo))
}

function Zi(e) {
  const t = fe.indexOf(e);
  t > $e && fe.splice(t, 1)
}

function el(e) {
  F(e) ? mt.push(...e) : (!Ke || !Ke.includes(e, e.allowRecurse ? rt + 1 : rt)) && mt.push(e), mo()
}

function Kr(e, t, n = Vt ? $e + 1 : 0) {
  for (; n < fe.length; n++) {
    const r = fe[n];
    if (r && r.pre) {
      if (e && r.id !== e.uid) continue;
      fe.splice(n, 1), n--, r()
    }
  }
}

function _o(e) {
  if (mt.length) {
    const t = [...new Set(mt)].sort((n, r) => Bt(n) - Bt(r));
    if (mt.length = 0, Ke) {
      Ke.push(...t);
      return
    }
    for (Ke = t, rt = 0; rt < Ke.length; rt++) Ke[rt]();
    Ke = null, rt = 0
  }
}
const Bt = e => e.id == null ? 1 / 0 : e.id,
  tl = (e, t) => {
    const n = Bt(e) - Bt(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1
    }
    return n
  };

function yo(e) {
  Wn = !1, Vt = !0, fe.sort(tl);
  try {
    for ($e = 0; $e < fe.length; $e++) {
      const t = fe[$e];
      t && t.active !== !1 && Je(t, null, 14)
    }
  } finally {
    $e = 0, fe.length = 0, _o(), Vt = !1, br = null, (fe.length || mt.length) && yo()
  }
}

function nl(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || X;
  let s = n;
  const o = t.startsWith("update:"),
    i = o && t.slice(7);
  if (i && i in r) {
    const f = `${i==="modelValue"?"model":i}Modifiers`,
      {
        number: p,
        trim: d
      } = r[f] || X;
    d && (s = n.map(_ => re(_) ? _.trim() : _)), p && (s = n.map(gi))
  }
  let c, l = r[c = Mn(t)] || r[c = Mn(Ne(t))];
  !l && o && (l = r[c = Mn(vt(t))]), l && Ce(l, e, 6, s);
  const a = r[c + "Once"];
  if (a) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[c]) return;
    e.emitted[c] = !0, Ce(a, e, 6, s)
  }
}

function bo(e, t, n = !1) {
  const r = t.emitsCache,
    s = r.get(e);
  if (s !== void 0) return s;
  const o = e.emits;
  let i = {},
    c = !1;
  if (!B(e)) {
    const l = a => {
      const f = bo(a, t, !0);
      f && (c = !0, ce(i, f))
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l)
  }
  return !o && !c ? (ee(e) && r.set(e, null), null) : (F(o) ? o.forEach(l => i[l] = null) : ce(i, o), ee(e) && r.set(e, i), i)
}

function En(e, t) {
  return !e || !pn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), D(e, t[0].toLowerCase() + t.slice(1)) || D(e, vt(t)) || D(e, t))
}
let se = null,
  xn = null;

function un(e) {
  const t = se;
  return se = e, xn = e && e.type.__scopeId || null, t
}

function Ef(e) {
  xn = e
}

function xf() {
  xn = null
}

function rl(e, t = se, n) {
  if (!t || e._n) return e;
  const r = (...s) => {
    r._d && rs(-1);
    const o = un(t);
    let i;
    try {
      i = e(...s)
    } finally {
      un(o), r._d && rs(1)
    }
    return i
  };
  return r._n = !0, r._c = !0, r._d = !0, r
}

function Nn(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: s,
    props: o,
    propsOptions: [i],
    slots: c,
    attrs: l,
    emit: a,
    render: f,
    renderCache: p,
    data: d,
    setupState: _,
    ctx: P,
    inheritAttrs: O
  } = e;
  let H, T;
  const N = un(e);
  try {
    if (n.shapeFlag & 4) {
      const U = s || r,
        Q = U;
      H = Le(f.call(Q, U, p, o, _, d, P)), T = l
    } else {
      const U = t;
      H = Le(U.length > 1 ? U(o, {
        attrs: l,
        slots: c,
        emit: a
      }) : U(o, null)), T = t.props ? l : sl(l)
    }
  } catch (U) {
    $t.length = 0, vn(U, e, 1), H = he(Ye)
  }
  let V = H;
  if (T && O !== !1) {
    const U = Object.keys(T),
      {
        shapeFlag: Q
      } = V;
    U.length && Q & 7 && (i && U.some(lr) && (T = ol(T, i)), V = _t(V, T))
  }
  return n.dirs && (V = _t(V), V.dirs = V.dirs ? V.dirs.concat(n.dirs) : n.dirs), n.transition && (V.transition = n.transition), H = V, un(N), H
}
const sl = e => {
    let t;
    for (const n in e)(n === "class" || n === "style" || pn(n)) && ((t || (t = {}))[n] = e[n]);
    return t
  },
  ol = (e, t) => {
    const n = {};
    for (const r in e)(!lr(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n
  };

function il(e, t, n) {
  const {
    props: r,
    children: s,
    component: o
  } = e, {
    props: i,
    children: c,
    patchFlag: l
  } = t, a = o.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return r ? qr(r, i, a) : !!i;
    if (l & 8) {
      const f = t.dynamicProps;
      for (let p = 0; p < f.length; p++) {
        const d = f[p];
        if (i[d] !== r[d] && !En(a, d)) return !0
      }
    }
  } else return (s || c) && (!c || !c.$stable) ? !0 : r === i ? !1 : r ? i ? qr(r, i, a) : !0 : !!i;
  return !1
}

function qr(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let s = 0; s < r.length; s++) {
    const o = r[s];
    if (t[o] !== e[o] && !En(n, o)) return !0
  }
  return !1
}

function ll({
  vnode: e,
  parent: t
}, n) {
  for (; t;) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)(e = t.vnode).el = n, t = t.parent;
    else break
  }
}
const cl = "components";

function vo(e, t) {
  return fl(cl, e, !0, t) || e
}
const ul = Symbol.for("v-ndc");

function fl(e, t, n = !0, r = !1) {
  const s = se || le;
  if (s) {
    const o = s.type; {
      const c = cc(o, !1);
      if (c && (c === t || c === Ne(t) || c === _n(Ne(t)))) return o
    }
    const i = Wr(s[e] || o[e], t) || Wr(s.appContext[e], t);
    return !i && r ? o : i
  }
}

function Wr(e, t) {
  return e && (e[t] || e[Ne(t)] || e[_n(Ne(t))])
}
const al = e => e.__isSuspense;

function hl(e, t) {
  t && t.pendingBranch ? F(e) ? t.effects.push(...e) : t.effects.push(e) : el(e)
}
const dl = Symbol.for("v-scx"),
  pl = () => Ve(dl);

function wf(e, t) {
  return wn(e, null, t)
}

function gl(e, t) {
  return wn(e, null, {
    flush: "post"
  })
}
const Xt = {};

function tn(e, t, n) {
  return wn(e, t, n)
}

function wn(e, t, {
  immediate: n,
  deep: r,
  flush: s,
  once: o,
  onTrack: i,
  onTrigger: c
} = X) {
  if (t && o) {
    const $ = t;
    t = (...Y) => {
      $(...Y), Q()
    }
  }
  const l = le,
    a = $ => r === !0 ? $ : st($, r === !1 ? 1 : void 0);
  let f, p = !1,
    d = !1;
  if (de(e) ? (f = () => e.value, p = cn(e)) : Ot(e) ? (f = () => a(e), p = !0) : F(e) ? (d = !0, p = e.some($ => Ot($) || cn($)), f = () => e.map($ => {
      if (de($)) return $.value;
      if (Ot($)) return a($);
      if (B($)) return Je($, l, 2)
    })) : B(e) ? t ? f = () => Je(e, l, 2) : f = () => (_ && _(), Ce(e, l, 3, [P])) : f = xe, t && r) {
    const $ = f;
    f = () => st($())
  }
  let _, P = $ => {
      _ = V.onStop = () => {
        Je($, l, 4), _ = V.onStop = void 0
      }
    },
    O;
  if (Cn)
    if (P = xe, t ? n && Ce(t, l, 3, [f(), d ? [] : void 0, P]) : f(), s === "sync") {
      const $ = pl();
      O = $.__watcherHandles || ($.__watcherHandles = [])
    } else return xe;
  let H = d ? new Array(e.length).fill(Xt) : Xt;
  const T = () => {
    if (!(!V.active || !V.dirty))
      if (t) {
        const $ = V.run();
        (r || p || (d ? $.some((Y, ne) => Qe(Y, H[ne])) : Qe($, H))) && (_ && _(), Ce(t, l, 3, [$, H === Xt ? void 0 : d && H[0] === Xt ? [] : H, P]), H = $)
      } else V.run()
  };
  T.allowRecurse = !!t;
  let N;
  s === "sync" ? N = T : s === "post" ? N = () => me(T, l && l.suspense) : (T.pre = !0, l && (T.id = l.uid), N = () => vr(T));
  const V = new hr(f, xe, N),
    U = Ri(),
    Q = () => {
      V.stop(), U && cr(U.effects, V)
    };
  return t ? n ? T() : H = V.run() : s === "post" ? me(V.run.bind(V), l && l.suspense) : V.run(), O && O.push(Q), Q
}

function ml(e, t, n) {
  const r = this.proxy,
    s = re(e) ? e.includes(".") ? Eo(r, e) : () => r[e] : e.bind(r, r);
  let o;
  B(t) ? o = t : (o = t.handler, n = t);
  const i = qt(this),
    c = wn(s, o.bind(r), n);
  return i(), c
}

function Eo(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++) r = r[n[s]];
    return r
  }
}

function st(e, t, n = 0, r) {
  if (!ee(e) || e.__v_skip) return e;
  if (t && t > 0) {
    if (n >= t) return e;
    n++
  }
  if (r = r || new Set, r.has(e)) return e;
  if (r.add(e), de(e)) st(e.value, t, n, r);
  else if (F(e))
    for (let s = 0; s < e.length; s++) st(e[s], t, n, r);
  else if (Hs(e) || pt(e)) e.forEach(s => {
    st(s, t, n, r)
  });
  else if (ks(e))
    for (const s in e) st(e[s], t, n, r);
  return e
}

function Rf(e, t) {
  if (se === null) return e;
  const n = An(se) || se.proxy,
    r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [o, i, c, l = X] = t[s];
    o && (B(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && st(i), r.push({
      dir: o,
      instance: n,
      value: i,
      oldValue: void 0,
      arg: c,
      modifiers: l
    }))
  }
  return e
}

function tt(e, t, n, r) {
  const s = e.dirs,
    o = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    o && (c.oldValue = o[i].value);
    let l = c.dir[r];
    l && (Xe(), Ce(l, n, 8, [e.el, c, e, t]), Ze())
  }
} /*! #__NO_SIDE_EFFECTS__ */
function xo(e, t) {
  return B(e) ? ce({
    name: e.name
  }, t, {
    setup: e
  }) : e
}
const Tt = e => !!e.type.__asyncLoader,
  wo = e => e.type.__isKeepAlive;

function _l(e, t) {
  Ro(e, "a", t)
}

function yl(e, t) {
  Ro(e, "da", t)
}

function Ro(e, t, n = le) {
  const r = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s;) {
      if (s.isDeactivated) return;
      s = s.parent
    }
    return e()
  });
  if (Rn(t, r, n), n) {
    let s = n.parent;
    for (; s && s.parent;) wo(s.parent.vnode) && bl(r, t, n, s), s = s.parent
  }
}

function bl(e, t, n, r) {
  const s = Rn(t, e, r, !0);
  Er(() => {
    cr(r[t], s)
  }, n)
}

function Rn(e, t, n = le, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      o = t.__weh || (t.__weh = (...i) => {
        if (n.isUnmounted) return;
        Xe();
        const c = qt(n),
          l = Ce(t, n, e, i);
        return c(), Ze(), l
      });
    return r ? s.unshift(o) : s.push(o), o
  }
}
const Be = e => (t, n = le) => (!Cn || e === "sp") && Rn(e, (...r) => t(...r), n),
  vl = Be("bm"),
  So = Be("m"),
  El = Be("bu"),
  xl = Be("u"),
  wl = Be("bum"),
  Er = Be("um"),
  Rl = Be("sp"),
  Sl = Be("rtg"),
  Pl = Be("rtc");

function Cl(e, t = le) {
  Rn("ec", e, t)
}

function Sf(e, t, n, r) {
  let s;
  const o = n;
  if (F(e) || re(e)) {
    s = new Array(e.length);
    for (let i = 0, c = e.length; i < c; i++) s[i] = t(e[i], i, void 0, o)
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let i = 0; i < e; i++) s[i] = t(i + 1, i, void 0, o)
  } else if (ee(e))
    if (e[Symbol.iterator]) s = Array.from(e, (i, c) => t(i, c, void 0, o));
    else {
      const i = Object.keys(e);
      s = new Array(i.length);
      for (let c = 0, l = i.length; c < l; c++) {
        const a = i[c];
        s[c] = t(e[a], a, c, o)
      }
    }
  else s = [];
  return s
}

function Pf(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (F(r))
      for (let s = 0; s < r.length; s++) e[r[s].name] = r[s].fn;
    else r && (e[r.name] = r.key ? (...s) => {
      const o = r.fn(...s);
      return o && (o.key = r.key), o
    } : r.fn)
  }
  return e
}

function Cf(e, t, n = {}, r, s) {
  if (se.isCE || se.parent && Tt(se.parent) && se.parent.isCE) return t !== "default" && (n.name = t), he("slot", n, r && r());
  let o = e[t];
  o && o._c && (o._d = !1), Pn();
  const i = o && Po(o(n)),
    c = Sr(Ee, {
      key: n.key || i && i.key || `_${t}`
    }, i || (r ? r() : []), i && e._ === 1 ? 64 : -2);
  return o && o._c && (o._d = !0), c
}

function Po(e) {
  return e.some(t => an(t) ? !(t.type === Ye || t.type === Ee && !Po(t.children)) : !0) ? e : null
}
const zn = e => e ? Bo(e) ? An(e) || e.proxy : zn(e.parent) : null,
  It = ce(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => zn(e.parent),
    $root: e => zn(e.root),
    $emit: e => e.emit,
    $options: e => xr(e),
    $forceUpdate: e => e.f || (e.f = () => {
      e.effect.dirty = !0, vr(e.update)
    }),
    $nextTick: e => e.n || (e.n = go.bind(e.proxy)),
    $watch: e => ml.bind(e)
  }),
  Fn = (e, t) => e !== X && !e.__isScriptSetup && D(e, t),
  Al = {
    get({
      _: e
    }, t) {
      if (t === "__v_skip") return !0;
      const {
        ctx: n,
        setupState: r,
        data: s,
        props: o,
        accessCache: i,
        type: c,
        appContext: l
      } = e;
      let a;
      if (t[0] !== "$") {
        const _ = i[t];
        if (_ !== void 0) switch (_) {
          case 1:
            return r[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return o[t]
        } else {
          if (Fn(r, t)) return i[t] = 1, r[t];
          if (s !== X && D(s, t)) return i[t] = 2, s[t];
          if ((a = e.propsOptions[0]) && D(a, t)) return i[t] = 3, o[t];
          if (n !== X && D(n, t)) return i[t] = 4, n[t];
          Gn && (i[t] = 0)
        }
      }
      const f = It[t];
      let p, d;
      if (f) return t === "$attrs" && _e(e.attrs, "get", ""), f(e);
      if ((p = c.__cssModules) && (p = p[t])) return p;
      if (n !== X && D(n, t)) return i[t] = 4, n[t];
      if (d = l.config.globalProperties, D(d, t)) return d[t]
    },
    set({
      _: e
    }, t, n) {
      const {
        data: r,
        setupState: s,
        ctx: o
      } = e;
      return Fn(s, t) ? (s[t] = n, !0) : r !== X && D(r, t) ? (r[t] = n, !0) : D(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0)
    },
    has({
      _: {
        data: e,
        setupState: t,
        accessCache: n,
        ctx: r,
        appContext: s,
        propsOptions: o
      }
    }, i) {
      let c;
      return !!n[i] || e !== X && D(e, i) || Fn(t, i) || (c = o[0]) && D(c, i) || D(r, i) || D(It, i) || D(s.config.globalProperties, i)
    },
    defineProperty(e, t, n) {
      return n.get != null ? e._.accessCache[t] = 0 : D(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n)
    }
  };

function zr(e) {
  return F(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e
}
let Gn = !0;

function Ol(e) {
  const t = xr(e),
    n = e.proxy,
    r = e.ctx;
  Gn = !1, t.beforeCreate && Gr(t.beforeCreate, e, "bc");
  const {
    data: s,
    computed: o,
    methods: i,
    watch: c,
    provide: l,
    inject: a,
    created: f,
    beforeMount: p,
    mounted: d,
    beforeUpdate: _,
    updated: P,
    activated: O,
    deactivated: H,
    beforeDestroy: T,
    beforeUnmount: N,
    destroyed: V,
    unmounted: U,
    render: Q,
    renderTracked: $,
    renderTriggered: Y,
    errorCaptured: ne,
    serverPrefetch: ye,
    expose: pe,
    inheritAttrs: be,
    components: et,
    directives: Oe,
    filters: xt
  } = t;
  if (a && Tl(a, r, null), i)
    for (const G in i) {
      const q = i[G];
      B(q) && (r[G] = q.bind(n))
    }
  if (s) {
    const G = s.call(n, n);
    ee(G) && (e.data = bn(G))
  }
  if (Gn = !0, o)
    for (const G in o) {
      const q = o[G],
        Fe = B(q) ? q.bind(n, n) : B(q.get) ? q.get.bind(n, n) : xe,
        ke = !B(q) && B(q.set) ? q.set.bind(n) : xe,
        Te = Se({
          get: Fe,
          set: ke
        });
      Object.defineProperty(r, G, {
        enumerable: !0,
        configurable: !0,
        get: () => Te.value,
        set: ge => Te.value = ge
      })
    }
  if (c)
    for (const G in c) Co(c[G], r, n, G);
  if (l) {
    const G = B(l) ? l.call(n) : l;
    Reflect.ownKeys(G).forEach(q => {
      nn(q, G[q])
    })
  }
  f && Gr(f, e, "c");

  function oe(G, q) {
    F(q) ? q.forEach(Fe => G(Fe.bind(n))) : q && G(q.bind(n))
  }
  if (oe(vl, p), oe(So, d), oe(El, _), oe(xl, P), oe(_l, O), oe(yl, H), oe(Cl, ne), oe(Pl, $), oe(Sl, Y), oe(wl, N), oe(Er, U), oe(Rl, ye), F(pe))
    if (pe.length) {
      const G = e.exposed || (e.exposed = {});
      pe.forEach(q => {
        Object.defineProperty(G, q, {
          get: () => n[q],
          set: Fe => n[q] = Fe
        })
      })
    } else e.exposed || (e.exposed = {});
  Q && e.render === xe && (e.render = Q), be != null && (e.inheritAttrs = be), et && (e.components = et), Oe && (e.directives = Oe)
}

function Tl(e, t, n = xe) {
  F(e) && (e = Jn(e));
  for (const r in e) {
    const s = e[r];
    let o;
    ee(s) ? "default" in s ? o = Ve(s.from || r, s.default, !0) : o = Ve(s.from || r) : o = Ve(s), de(o) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: i => o.value = i
    }) : t[r] = o
  }
}

function Gr(e, t, n) {
  Ce(F(e) ? e.map(r => r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}

function Co(e, t, n, r) {
  const s = r.includes(".") ? Eo(n, r) : () => n[r];
  if (re(e)) {
    const o = t[e];
    B(o) && tn(s, o)
  } else if (B(e)) tn(s, e.bind(n));
  else if (ee(e))
    if (F(e)) e.forEach(o => Co(o, t, n, r));
    else {
      const o = B(e.handler) ? e.handler.bind(n) : t[e.handler];
      B(o) && tn(s, o, e)
    }
}

function xr(e) {
  const t = e.type,
    {
      mixins: n,
      extends: r
    } = t,
    {
      mixins: s,
      optionsCache: o,
      config: {
        optionMergeStrategies: i
      }
    } = e.appContext,
    c = o.get(t);
  let l;
  return c ? l = c : !s.length && !n && !r ? l = t : (l = {}, s.length && s.forEach(a => fn(l, a, i, !0)), fn(l, t, i)), ee(t) && o.set(t, l), l
}

function fn(e, t, n, r = !1) {
  const {
    mixins: s,
    extends: o
  } = t;
  o && fn(e, o, n, !0), s && s.forEach(i => fn(e, i, n, !0));
  for (const i in t)
    if (!(r && i === "expose")) {
      const c = Il[i] || n && n[i];
      e[i] = c ? c(e[i], t[i]) : t[i]
    } return e
}
const Il = {
  data: Jr,
  props: Qr,
  emits: Qr,
  methods: Ct,
  computed: Ct,
  beforeCreate: ae,
  created: ae,
  beforeMount: ae,
  mounted: ae,
  beforeUpdate: ae,
  updated: ae,
  beforeDestroy: ae,
  beforeUnmount: ae,
  destroyed: ae,
  unmounted: ae,
  activated: ae,
  deactivated: ae,
  errorCaptured: ae,
  serverPrefetch: ae,
  components: Ct,
  directives: Ct,
  watch: Ll,
  provide: Jr,
  inject: Ml
};

function Jr(e, t) {
  return t ? e ? function () {
    return ce(B(e) ? e.call(this, this) : e, B(t) ? t.call(this, this) : t)
  } : t : e
}

function Ml(e, t) {
  return Ct(Jn(e), Jn(t))
}

function Jn(e) {
  if (F(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t
  }
  return e
}

function ae(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}

function Ct(e, t) {
  return e ? ce(Object.create(null), e, t) : t
}

function Qr(e, t) {
  return e ? F(e) && F(t) ? [...new Set([...e, ...t])] : ce(Object.create(null), zr(e), zr(t != null ? t : {})) : t
}

function Ll(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ce(Object.create(null), e);
  for (const r in t) n[r] = ae(e[r], t[r]);
  return n
}

function Ao() {
  return {
    app: null,
    config: {
      isNativeTag: fi,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap,
    propsCache: new WeakMap,
    emitsCache: new WeakMap
  }
}
let $l = 0;

function Nl(e, t) {
  return function (r, s = null) {
    B(r) || (r = ce({}, r)), s != null && !ee(s) && (s = null);
    const o = Ao(),
      i = new WeakSet;
    let c = !1;
    const l = o.app = {
      _uid: $l++,
      _component: r,
      _props: s,
      _container: null,
      _context: o,
      _instance: null,
      version: fc,
      get config() {
        return o.config
      },
      set config(a) {},
      use(a, ...f) {
        return i.has(a) || (a && B(a.install) ? (i.add(a), a.install(l, ...f)) : B(a) && (i.add(a), a(l, ...f))), l
      },
      mixin(a) {
        return o.mixins.includes(a) || o.mixins.push(a), l
      },
      component(a, f) {
        return f ? (o.components[a] = f, l) : o.components[a]
      },
      directive(a, f) {
        return f ? (o.directives[a] = f, l) : o.directives[a]
      },
      mount(a, f, p) {
        if (!c) {
          const d = he(r, s);
          return d.appContext = o, p === !0 ? p = "svg" : p === !1 && (p = void 0), f && t ? t(d, a) : e(d, a, p), c = !0, l._container = a, a.__vue_app__ = l, An(d.component) || d.component.proxy
        }
      },
      unmount() {
        c && (e(null, l._container), delete l._container.__vue_app__)
      },
      provide(a, f) {
        return o.provides[a] = f, l
      },
      runWithContext(a) {
        const f = Mt;
        Mt = l;
        try {
          return a()
        } finally {
          Mt = f
        }
      }
    };
    return l
  }
}
let Mt = null;

function nn(e, t) {
  if (le) {
    let n = le.provides;
    const r = le.parent && le.parent.provides;
    r === n && (n = le.provides = Object.create(r)), n[e] = t
  }
}

function Ve(e, t, n = !1) {
  const r = le || se;
  if (r || Mt) {
    const s = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : Mt._context.provides;
    if (s && e in s) return s[e];
    if (arguments.length > 1) return n && B(t) ? t.call(r && r.proxy) : t
  }
}
const Oo = Object.create(null),
  Qn = () => Object.create(Oo),
  To = e => Object.getPrototypeOf(e) === Oo;

function Fl(e, t, n, r = !1) {
  const s = {},
    o = Qn();
  e.propsDefaults = Object.create(null), Io(e, t, s, o);
  for (const i in e.propsOptions[0]) i in s || (s[i] = void 0);
  n ? e.props = r ? s : so(s) : e.type.props ? e.props = s : e.props = o, e.attrs = o
}

function jl(e, t, n, r) {
  const {
    props: s,
    attrs: o,
    vnode: {
      patchFlag: i
    }
  } = e, c = K(s), [l] = e.propsOptions;
  let a = !1;
  if ((r || i > 0) && !(i & 16)) {
    if (i & 8) {
      const f = e.vnode.dynamicProps;
      for (let p = 0; p < f.length; p++) {
        let d = f[p];
        if (En(e.emitsOptions, d)) continue;
        const _ = t[d];
        if (l)
          if (D(o, d)) _ !== o[d] && (o[d] = _, a = !0);
          else {
            const P = Ne(d);
            s[P] = Yn(l, c, P, _, e, !1)
          }
        else _ !== o[d] && (o[d] = _, a = !0)
      }
    }
  } else {
    Io(e, t, s, o) && (a = !0);
    let f;
    for (const p in c)(!t || !D(t, p) && ((f = vt(p)) === p || !D(t, f))) && (l ? n && (n[p] !== void 0 || n[f] !== void 0) && (s[p] = Yn(l, c, p, void 0, e, !0)) : delete s[p]);
    if (o !== c)
      for (const p in o)(!t || !D(t, p)) && (delete o[p], a = !0)
  }
  a && He(e.attrs, "set", "")
}

function Io(e, t, n, r) {
  const [s, o] = e.propsOptions;
  let i = !1,
    c;
  if (t)
    for (let l in t) {
      if (At(l)) continue;
      const a = t[l];
      let f;
      s && D(s, f = Ne(l)) ? !o || !o.includes(f) ? n[f] = a : (c || (c = {}))[f] = a : En(e.emitsOptions, l) || (!(l in r) || a !== r[l]) && (r[l] = a, i = !0)
    }
  if (o) {
    const l = K(n),
      a = c || X;
    for (let f = 0; f < o.length; f++) {
      const p = o[f];
      n[p] = Yn(s, l, p, a[p], e, !D(a, p))
    }
  }
  return i
}

function Yn(e, t, n, r, s, o) {
  const i = e[n];
  if (i != null) {
    const c = D(i, "default");
    if (c && r === void 0) {
      const l = i.default;
      if (i.type !== Function && !i.skipFactory && B(l)) {
        const {
          propsDefaults: a
        } = s;
        if (n in a) r = a[n];
        else {
          const f = qt(s);
          r = a[n] = l.call(null, t), f()
        }
      } else r = l
    }
    i[0] && (o && !c ? r = !1 : i[1] && (r === "" || r === vt(n)) && (r = !0))
  }
  return r
}

function Mo(e, t, n = !1) {
  const r = t.propsCache,
    s = r.get(e);
  if (s) return s;
  const o = e.props,
    i = {},
    c = [];
  let l = !1;
  if (!B(e)) {
    const f = p => {
      l = !0;
      const [d, _] = Mo(p, t, !0);
      ce(i, d), _ && c.push(..._)
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f)
  }
  if (!o && !l) return ee(e) && r.set(e, dt), dt;
  if (F(o))
    for (let f = 0; f < o.length; f++) {
      const p = Ne(o[f]);
      Yr(p) && (i[p] = X)
    } else if (o)
      for (const f in o) {
        const p = Ne(f);
        if (Yr(p)) {
          const d = o[f],
            _ = i[p] = F(d) || B(d) ? {
              type: d
            } : ce({}, d);
          if (_) {
            const P = es(Boolean, _.type),
              O = es(String, _.type);
            _[0] = P > -1, _[1] = O < 0 || P < O, (P > -1 || D(_, "default")) && c.push(p)
          }
        }
      }
  const a = [i, c];
  return ee(e) && r.set(e, a), a
}

function Yr(e) {
  return e[0] !== "$" && !At(e)
}

function Xr(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || ""
}

function Zr(e, t) {
  return Xr(e) === Xr(t)
}

function es(e, t) {
  return F(t) ? t.findIndex(n => Zr(n, e)) : B(t) && Zr(t, e) ? 0 : -1
}
const Lo = e => e[0] === "_" || e === "$stable",
  wr = e => F(e) ? e.map(Le) : [Le(e)],
  Hl = (e, t, n) => {
    if (t._n) return t;
    const r = rl((...s) => wr(t(...s)), n);
    return r._c = !1, r
  },
  $o = (e, t, n) => {
    const r = e._ctx;
    for (const s in e) {
      if (Lo(s)) continue;
      const o = e[s];
      if (B(o)) t[s] = Hl(s, o, r);
      else if (o != null) {
        const i = wr(o);
        t[s] = () => i
      }
    }
  },
  No = (e, t) => {
    const n = wr(t);
    e.slots.default = () => n
  },
  Vl = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? (e.slots = K(t), Us(e.slots, "_", n)) : $o(t, e.slots = Qn())
    } else e.slots = Qn(), t && No(e, t)
  },
  Bl = (e, t, n) => {
    const {
      vnode: r,
      slots: s
    } = e;
    let o = !0,
      i = X;
    if (r.shapeFlag & 32) {
      const c = t._;
      c ? n && c === 1 ? o = !1 : (ce(s, t), !n && c === 1 && delete s._) : (o = !t.$stable, $o(t, s)), i = t
    } else t && (No(e, t), i = {
      default: 1
    });
    if (o)
      for (const c in s) !Lo(c) && i[c] == null && delete s[c]
  };

function Xn(e, t, n, r, s = !1) {
  if (F(e)) {
    e.forEach((d, _) => Xn(d, t && (F(t) ? t[_] : t), n, r, s));
    return
  }
  if (Tt(r) && !s) return;
  const o = r.shapeFlag & 4 ? An(r.component) || r.component.proxy : r.el,
    i = s ? null : o,
    {
      i: c,
      r: l
    } = e,
    a = t && t.r,
    f = c.refs === X ? c.refs = {} : c.refs,
    p = c.setupState;
  if (a != null && a !== l && (re(a) ? (f[a] = null, D(p, a) && (p[a] = null)) : de(a) && (a.value = null)), B(l)) Je(l, c, 12, [i, f]);
  else {
    const d = re(l),
      _ = de(l);
    if (d || _) {
      const P = () => {
        if (e.f) {
          const O = d ? D(p, l) ? p[l] : f[l] : l.value;
          s ? F(O) && cr(O, o) : F(O) ? O.includes(o) || O.push(o) : d ? (f[l] = [o], D(p, l) && (p[l] = f[l])) : (l.value = [o], e.k && (f[e.k] = l.value))
        } else d ? (f[l] = i, D(p, l) && (p[l] = i)) : _ && (l.value = i, e.k && (f[e.k] = i))
      };
      i ? (P.id = -1, me(P, n)) : P()
    }
  }
}
const me = hl;

function kl(e) {
  return Ul(e)
}

function Ul(e, t) {
  const n = Ds();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: s,
    patchProp: o,
    createElement: i,
    createText: c,
    createComment: l,
    setText: a,
    setElementText: f,
    parentNode: p,
    nextSibling: d,
    setScopeId: _ = xe,
    insertStaticContent: P
  } = e, O = (u, h, g, b = null, m = null, x = null, S = void 0, E = null, w = !!h.dynamicChildren) => {
    if (u === h) return;
    u && !Rt(u, h) && (b = y(u), ge(u, m, x, !0), u = null), h.patchFlag === -2 && (w = !1, h.dynamicChildren = null);
    const {
      type: v,
      ref: A,
      shapeFlag: L
    } = h;
    switch (v) {
      case Sn:
        H(u, h, g, b);
        break;
      case Ye:
        T(u, h, g, b);
        break;
      case rn:
        u == null && N(h, g, b, S);
        break;
      case Ee:
        et(u, h, g, b, m, x, S, E, w);
        break;
      default:
        L & 1 ? Q(u, h, g, b, m, x, S, E, w) : L & 6 ? Oe(u, h, g, b, m, x, S, E, w) : (L & 64 || L & 128) && v.process(u, h, g, b, m, x, S, E, w, I)
    }
    A != null && m && Xn(A, u && u.ref, x, h || u, !h)
  }, H = (u, h, g, b) => {
    if (u == null) r(h.el = c(h.children), g, b);
    else {
      const m = h.el = u.el;
      h.children !== u.children && a(m, h.children)
    }
  }, T = (u, h, g, b) => {
    u == null ? r(h.el = l(h.children || ""), g, b) : h.el = u.el
  }, N = (u, h, g, b) => {
    [u.el, u.anchor] = P(u.children, h, g, b, u.el, u.anchor)
  }, V = ({
    el: u,
    anchor: h
  }, g, b) => {
    let m;
    for (; u && u !== h;) m = d(u), r(u, g, b), u = m;
    r(h, g, b)
  }, U = ({
    el: u,
    anchor: h
  }) => {
    let g;
    for (; u && u !== h;) g = d(u), s(u), u = g;
    s(h)
  }, Q = (u, h, g, b, m, x, S, E, w) => {
    h.type === "svg" ? S = "svg" : h.type === "math" && (S = "mathml"), u == null ? $(h, g, b, m, x, S, E, w) : ye(u, h, m, x, S, E, w)
  }, $ = (u, h, g, b, m, x, S, E) => {
    let w, v;
    const {
      props: A,
      shapeFlag: L,
      transition: M,
      dirs: j
    } = u;
    if (w = u.el = i(u.type, x, A && A.is, A), L & 8 ? f(w, u.children) : L & 16 && ne(u.children, w, null, b, m, jn(u, x), S, E), j && tt(u, null, b, "created"), Y(w, u, u.scopeId, S, b), A) {
      for (const J in A) J !== "value" && !At(J) && o(w, J, null, A[J], x, u.children, b, m, ue);
      "value" in A && o(w, "value", null, A.value, x), (v = A.onVnodeBeforeMount) && Me(v, b, u)
    }
    j && tt(u, null, b, "beforeMount");
    const k = Dl(m, M);
    k && M.beforeEnter(w), r(w, h, g), ((v = A && A.onVnodeMounted) || k || j) && me(() => {
      v && Me(v, b, u), k && M.enter(w), j && tt(u, null, b, "mounted")
    }, m)
  }, Y = (u, h, g, b, m) => {
    if (g && _(u, g), b)
      for (let x = 0; x < b.length; x++) _(u, b[x]);
    if (m) {
      let x = m.subTree;
      if (h === x) {
        const S = m.vnode;
        Y(u, S, S.scopeId, S.slotScopeIds, m.parent)
      }
    }
  }, ne = (u, h, g, b, m, x, S, E, w = 0) => {
    for (let v = w; v < u.length; v++) {
      const A = u[v] = E ? qe(u[v]) : Le(u[v]);
      O(null, A, h, g, b, m, x, S, E)
    }
  }, ye = (u, h, g, b, m, x, S) => {
    const E = h.el = u.el;
    let {
      patchFlag: w,
      dynamicChildren: v,
      dirs: A
    } = h;
    w |= u.patchFlag & 16;
    const L = u.props || X,
      M = h.props || X;
    let j;
    if (g && nt(g, !1), (j = M.onVnodeBeforeUpdate) && Me(j, g, h, u), A && tt(h, u, g, "beforeUpdate"), g && nt(g, !0), v ? pe(u.dynamicChildren, v, E, g, b, jn(h, m), x) : S || q(u, h, E, null, g, b, jn(h, m), x, !1), w > 0) {
      if (w & 16) be(E, h, L, M, g, b, m);
      else if (w & 2 && L.class !== M.class && o(E, "class", null, M.class, m), w & 4 && o(E, "style", L.style, M.style, m), w & 8) {
        const k = h.dynamicProps;
        for (let J = 0; J < k.length; J++) {
          const Z = k[J],
            ie = L[Z],
            we = M[Z];
          (we !== ie || Z === "value") && o(E, Z, ie, we, m, u.children, g, b, ue)
        }
      }
      w & 1 && u.children !== h.children && f(E, h.children)
    } else !S && v == null && be(E, h, L, M, g, b, m);
    ((j = M.onVnodeUpdated) || A) && me(() => {
      j && Me(j, g, h, u), A && tt(h, u, g, "updated")
    }, b)
  }, pe = (u, h, g, b, m, x, S) => {
    for (let E = 0; E < h.length; E++) {
      const w = u[E],
        v = h[E],
        A = w.el && (w.type === Ee || !Rt(w, v) || w.shapeFlag & 70) ? p(w.el) : g;
      O(w, v, A, null, b, m, x, S, !0)
    }
  }, be = (u, h, g, b, m, x, S) => {
    if (g !== b) {
      if (g !== X)
        for (const E in g) !At(E) && !(E in b) && o(u, E, g[E], null, S, h.children, m, x, ue);
      for (const E in b) {
        if (At(E)) continue;
        const w = b[E],
          v = g[E];
        w !== v && E !== "value" && o(u, E, v, w, S, h.children, m, x, ue)
      }
      "value" in b && o(u, "value", g.value, b.value, S)
    }
  }, et = (u, h, g, b, m, x, S, E, w) => {
    const v = h.el = u ? u.el : c(""),
      A = h.anchor = u ? u.anchor : c("");
    let {
      patchFlag: L,
      dynamicChildren: M,
      slotScopeIds: j
    } = h;
    j && (E = E ? E.concat(j) : j), u == null ? (r(v, g, b), r(A, g, b), ne(h.children || [], g, A, m, x, S, E, w)) : L > 0 && L & 64 && M && u.dynamicChildren ? (pe(u.dynamicChildren, M, g, m, x, S, E), (h.key != null || m && h === m.subTree) && Rr(u, h, !0)) : q(u, h, g, A, m, x, S, E, w)
  }, Oe = (u, h, g, b, m, x, S, E, w) => {
    h.slotScopeIds = E, u == null ? h.shapeFlag & 512 ? m.ctx.activate(h, g, b, S, w) : xt(h, g, b, m, x, S, w) : ct(u, h, w)
  }, xt = (u, h, g, b, m, x, S) => {
    const E = u.component = nc(u, b, m);
    if (wo(u) && (E.ctx.renderer = I), sc(E), E.asyncDep) {
      if (m && m.registerDep(E, oe), !u.el) {
        const w = E.subTree = he(Ye);
        T(null, w, h, g)
      }
    } else oe(E, u, h, g, m, x, S)
  }, ct = (u, h, g) => {
    const b = h.component = u.component;
    if (il(u, h, g))
      if (b.asyncDep && !b.asyncResolved) {
        G(b, h, g);
        return
      } else b.next = h, Zi(b.update), b.effect.dirty = !0, b.update();
    else h.el = u.el, b.vnode = h
  }, oe = (u, h, g, b, m, x, S) => {
    const E = () => {
        if (u.isMounted) {
          let {
            next: A,
            bu: L,
            u: M,
            parent: j,
            vnode: k
          } = u; {
            const at = Fo(u);
            if (at) {
              A && (A.el = k.el, G(u, A, S)), at.asyncDep.then(() => {
                u.isUnmounted || E()
              });
              return
            }
          }
          let J = A,
            Z;
          nt(u, !1), A ? (A.el = k.el, G(u, A, S)) : A = k, L && Ln(L), (Z = A.props && A.props.onVnodeBeforeUpdate) && Me(Z, j, A, k), nt(u, !0);
          const ie = Nn(u),
            we = u.subTree;
          u.subTree = ie, O(we, ie, p(we.el), y(we), u, m, x), A.el = ie.el, J === null && ll(u, ie.el), M && me(M, m), (Z = A.props && A.props.onVnodeUpdated) && me(() => Me(Z, j, A, k), m)
        } else {
          let A;
          const {
            el: L,
            props: M
          } = h, {
            bm: j,
            m: k,
            parent: J
          } = u, Z = Tt(h);
          if (nt(u, !1), j && Ln(j), !Z && (A = M && M.onVnodeBeforeMount) && Me(A, J, h), nt(u, !0), L && te) {
            const ie = () => {
              u.subTree = Nn(u), te(L, u.subTree, u, m, null)
            };
            Z ? h.type.__asyncLoader().then(() => !u.isUnmounted && ie()) : ie()
          } else {
            const ie = u.subTree = Nn(u);
            O(null, ie, g, b, u, m, x), h.el = ie.el
          }
          if (k && me(k, m), !Z && (A = M && M.onVnodeMounted)) {
            const ie = h;
            me(() => Me(A, J, ie), m)
          }(h.shapeFlag & 256 || J && Tt(J.vnode) && J.vnode.shapeFlag & 256) && u.a && me(u.a, m), u.isMounted = !0, h = g = b = null
        }
      },
      w = u.effect = new hr(E, xe, () => vr(v), u.scope),
      v = u.update = () => {
        w.dirty && w.run()
      };
    v.id = u.uid, nt(u, !0), v()
  }, G = (u, h, g) => {
    h.component = u;
    const b = u.vnode.props;
    u.vnode = h, u.next = null, jl(u, h.props, b, g), Bl(u, h.children, g), Xe(), Kr(u), Ze()
  }, q = (u, h, g, b, m, x, S, E, w = !1) => {
    const v = u && u.children,
      A = u ? u.shapeFlag : 0,
      L = h.children,
      {
        patchFlag: M,
        shapeFlag: j
      } = h;
    if (M > 0) {
      if (M & 128) {
        ke(v, L, g, b, m, x, S, E, w);
        return
      } else if (M & 256) {
        Fe(v, L, g, b, m, x, S, E, w);
        return
      }
    }
    j & 8 ? (A & 16 && ue(v, m, x), L !== v && f(g, L)) : A & 16 ? j & 16 ? ke(v, L, g, b, m, x, S, E, w) : ue(v, m, x, !0) : (A & 8 && f(g, ""), j & 16 && ne(L, g, b, m, x, S, E, w))
  }, Fe = (u, h, g, b, m, x, S, E, w) => {
    u = u || dt, h = h || dt;
    const v = u.length,
      A = h.length,
      L = Math.min(v, A);
    let M;
    for (M = 0; M < L; M++) {
      const j = h[M] = w ? qe(h[M]) : Le(h[M]);
      O(u[M], j, g, null, m, x, S, E, w)
    }
    v > A ? ue(u, m, x, !0, !1, L) : ne(h, g, b, m, x, S, E, w, L)
  }, ke = (u, h, g, b, m, x, S, E, w) => {
    let v = 0;
    const A = h.length;
    let L = u.length - 1,
      M = A - 1;
    for (; v <= L && v <= M;) {
      const j = u[v],
        k = h[v] = w ? qe(h[v]) : Le(h[v]);
      if (Rt(j, k)) O(j, k, g, null, m, x, S, E, w);
      else break;
      v++
    }
    for (; v <= L && v <= M;) {
      const j = u[L],
        k = h[M] = w ? qe(h[M]) : Le(h[M]);
      if (Rt(j, k)) O(j, k, g, null, m, x, S, E, w);
      else break;
      L--, M--
    }
    if (v > L) {
      if (v <= M) {
        const j = M + 1,
          k = j < A ? h[j].el : b;
        for (; v <= M;) O(null, h[v] = w ? qe(h[v]) : Le(h[v]), g, k, m, x, S, E, w), v++
      }
    } else if (v > M)
      for (; v <= L;) ge(u[v], m, x, !0), v++;
    else {
      const j = v,
        k = v,
        J = new Map;
      for (v = k; v <= M; v++) {
        const ve = h[v] = w ? qe(h[v]) : Le(h[v]);
        ve.key != null && J.set(ve.key, v)
      }
      let Z, ie = 0;
      const we = M - k + 1;
      let at = !1,
        Tr = 0;
      const wt = new Array(we);
      for (v = 0; v < we; v++) wt[v] = 0;
      for (v = j; v <= L; v++) {
        const ve = u[v];
        if (ie >= we) {
          ge(ve, m, x, !0);
          continue
        }
        let Ie;
        if (ve.key != null) Ie = J.get(ve.key);
        else
          for (Z = k; Z <= M; Z++)
            if (wt[Z - k] === 0 && Rt(ve, h[Z])) {
              Ie = Z;
              break
            } Ie === void 0 ? ge(ve, m, x, !0) : (wt[Ie - k] = v + 1, Ie >= Tr ? Tr = Ie : at = !0, O(ve, h[Ie], g, null, m, x, S, E, w), ie++)
      }
      const Ir = at ? Kl(wt) : dt;
      for (Z = Ir.length - 1, v = we - 1; v >= 0; v--) {
        const ve = k + v,
          Ie = h[ve],
          Mr = ve + 1 < A ? h[ve + 1].el : b;
        wt[v] === 0 ? O(null, Ie, g, Mr, m, x, S, E, w) : at && (Z < 0 || v !== Ir[Z] ? Te(Ie, g, Mr, 2) : Z--)
      }
    }
  }, Te = (u, h, g, b, m = null) => {
    const {
      el: x,
      type: S,
      transition: E,
      children: w,
      shapeFlag: v
    } = u;
    if (v & 6) {
      Te(u.component.subTree, h, g, b);
      return
    }
    if (v & 128) {
      u.suspense.move(h, g, b);
      return
    }
    if (v & 64) {
      S.move(u, h, g, I);
      return
    }
    if (S === Ee) {
      r(x, h, g);
      for (let L = 0; L < w.length; L++) Te(w[L], h, g, b);
      r(u.anchor, h, g);
      return
    }
    if (S === rn) {
      V(u, h, g);
      return
    }
    if (b !== 2 && v & 1 && E)
      if (b === 0) E.beforeEnter(x), r(x, h, g), me(() => E.enter(x), m);
      else {
        const {
          leave: L,
          delayLeave: M,
          afterLeave: j
        } = E, k = () => r(x, h, g), J = () => {
          L(x, () => {
            k(), j && j()
          })
        };
        M ? M(x, k, J) : J()
      }
    else r(x, h, g)
  }, ge = (u, h, g, b = !1, m = !1) => {
    const {
      type: x,
      props: S,
      ref: E,
      children: w,
      dynamicChildren: v,
      shapeFlag: A,
      patchFlag: L,
      dirs: M
    } = u;
    if (E != null && Xn(E, null, g, u, !0), A & 256) {
      h.ctx.deactivate(u);
      return
    }
    const j = A & 1 && M,
      k = !Tt(u);
    let J;
    if (k && (J = S && S.onVnodeBeforeUnmount) && Me(J, h, u), A & 6) Wt(u.component, g, b);
    else {
      if (A & 128) {
        u.suspense.unmount(g, b);
        return
      }
      j && tt(u, null, h, "beforeUnmount"), A & 64 ? u.type.remove(u, h, g, m, I, b) : v && (x !== Ee || L > 0 && L & 64) ? ue(v, h, g, !1, !0) : (x === Ee && L & 384 || !m && A & 16) && ue(w, h, g), b && ut(u)
    }(k && (J = S && S.onVnodeUnmounted) || j) && me(() => {
      J && Me(J, h, u), j && tt(u, null, h, "unmounted")
    }, g)
  }, ut = u => {
    const {
      type: h,
      el: g,
      anchor: b,
      transition: m
    } = u;
    if (h === Ee) {
      ft(g, b);
      return
    }
    if (h === rn) {
      U(u);
      return
    }
    const x = () => {
      s(g), m && !m.persisted && m.afterLeave && m.afterLeave()
    };
    if (u.shapeFlag & 1 && m && !m.persisted) {
      const {
        leave: S,
        delayLeave: E
      } = m, w = () => S(g, x);
      E ? E(u.el, x, w) : w()
    } else x()
  }, ft = (u, h) => {
    let g;
    for (; u !== h;) g = d(u), s(u), u = g;
    s(h)
  }, Wt = (u, h, g) => {
    const {
      bum: b,
      scope: m,
      update: x,
      subTree: S,
      um: E
    } = u;
    b && Ln(b), m.stop(), x && (x.active = !1, ge(S, u, h, g)), E && me(E, h), me(() => {
      u.isUnmounted = !0
    }, h), h && h.pendingBranch && !h.isUnmounted && u.asyncDep && !u.asyncResolved && u.suspenseId === h.pendingId && (h.deps--, h.deps === 0 && h.resolve())
  }, ue = (u, h, g, b = !1, m = !1, x = 0) => {
    for (let S = x; S < u.length; S++) ge(u[S], h, g, b, m)
  }, y = u => u.shapeFlag & 6 ? y(u.component.subTree) : u.shapeFlag & 128 ? u.suspense.next() : d(u.anchor || u.el);
  let C = !1;
  const R = (u, h, g) => {
      u == null ? h._vnode && ge(h._vnode, null, null, !0) : O(h._vnode || null, u, h, null, null, null, g), C || (C = !0, Kr(), _o(), C = !1), h._vnode = u
    },
    I = {
      p: O,
      um: ge,
      m: Te,
      r: ut,
      mt: xt,
      mc: ne,
      pc: q,
      pbc: pe,
      n: y,
      o: e
    };
  let W, te;
  return {
    render: R,
    hydrate: W,
    createApp: Nl(R, W)
  }
}

function jn({
  type: e,
  props: t
}, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}

function nt({
  effect: e,
  update: t
}, n) {
  e.allowRecurse = t.allowRecurse = n
}

function Dl(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted
}

function Rr(e, t, n = !1) {
  const r = e.children,
    s = t.children;
  if (F(r) && F(s))
    for (let o = 0; o < r.length; o++) {
      const i = r[o];
      let c = s[o];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = s[o] = qe(s[o]), c.el = i.el), n || Rr(i, c)), c.type === Sn && (c.el = i.el)
    }
}

function Kl(e) {
  const t = e.slice(),
    n = [0];
  let r, s, o, i, c;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const a = e[r];
    if (a !== 0) {
      if (s = n[n.length - 1], e[s] < a) {
        t[r] = s, n.push(r);
        continue
      }
      for (o = 0, i = n.length - 1; o < i;) c = o + i >> 1, e[n[c]] < a ? o = c + 1 : i = c;
      a < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), n[o] = r)
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0;) n[o] = i, i = t[i];
  return n
}

function Fo(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Fo(t)
}
const ql = e => e.__isTeleport,
  Lt = e => e && (e.disabled || e.disabled === ""),
  ts = e => typeof SVGElement != "undefined" && e instanceof SVGElement,
  ns = e => typeof MathMLElement == "function" && e instanceof MathMLElement,
  Zn = (e, t) => {
    const n = e && e.to;
    return re(n) ? t ? t(n) : null : n
  },
  Wl = {
    name: "Teleport",
    __isTeleport: !0,
    process(e, t, n, r, s, o, i, c, l, a) {
      const {
        mc: f,
        pc: p,
        pbc: d,
        o: {
          insert: _,
          querySelector: P,
          createText: O,
          createComment: H
        }
      } = a, T = Lt(t.props);
      let {
        shapeFlag: N,
        children: V,
        dynamicChildren: U
      } = t;
      if (e == null) {
        const Q = t.el = O(""),
          $ = t.anchor = O("");
        _(Q, n, r), _($, n, r);
        const Y = t.target = Zn(t.props, P),
          ne = t.targetAnchor = O("");
        Y && (_(ne, Y), i === "svg" || ts(Y) ? i = "svg" : (i === "mathml" || ns(Y)) && (i = "mathml"));
        const ye = (pe, be) => {
          N & 16 && f(V, pe, be, s, o, i, c, l)
        };
        T ? ye(n, $) : Y && ye(Y, ne)
      } else {
        t.el = e.el;
        const Q = t.anchor = e.anchor,
          $ = t.target = e.target,
          Y = t.targetAnchor = e.targetAnchor,
          ne = Lt(e.props),
          ye = ne ? n : $,
          pe = ne ? Q : Y;
        if (i === "svg" || ts($) ? i = "svg" : (i === "mathml" || ns($)) && (i = "mathml"), U ? (d(e.dynamicChildren, U, ye, s, o, i, c), Rr(e, t, !0)) : l || p(e, t, ye, pe, s, o, i, c, !1), T) ne ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Zt(t, n, Q, a, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const be = t.target = Zn(t.props, P);
          be && Zt(t, be, null, a, 0)
        } else ne && Zt(t, $, Y, a, 1)
      }
      jo(t)
    },
    remove(e, t, n, r, {
      um: s,
      o: {
        remove: o
      }
    }, i) {
      const {
        shapeFlag: c,
        children: l,
        anchor: a,
        targetAnchor: f,
        target: p,
        props: d
      } = e;
      if (p && o(f), i && o(a), c & 16) {
        const _ = i || !Lt(d);
        for (let P = 0; P < l.length; P++) {
          const O = l[P];
          s(O, t, n, _, !!O.dynamicChildren)
        }
      }
    },
    move: Zt,
    hydrate: zl
  };

function Zt(e, t, n, {
  o: {
    insert: r
  },
  m: s
}, o = 2) {
  o === 0 && r(e.targetAnchor, t, n);
  const {
    el: i,
    anchor: c,
    shapeFlag: l,
    children: a,
    props: f
  } = e, p = o === 2;
  if (p && r(i, t, n), (!p || Lt(f)) && l & 16)
    for (let d = 0; d < a.length; d++) s(a[d], t, n, 2);
  p && r(c, t, n)
}

function zl(e, t, n, r, s, o, {
  o: {
    nextSibling: i,
    parentNode: c,
    querySelector: l
  }
}, a) {
  const f = t.target = Zn(t.props, l);
  if (f) {
    const p = f._lpa || f.firstChild;
    if (t.shapeFlag & 16)
      if (Lt(t.props)) t.anchor = a(i(e), t, c(e), n, r, s, o), t.targetAnchor = p;
      else {
        t.anchor = i(e);
        let d = p;
        for (; d;)
          if (d = i(d), d && d.nodeType === 8 && d.data === "teleport anchor") {
            t.targetAnchor = d, f._lpa = t.targetAnchor && i(t.targetAnchor);
            break
          } a(p, t, f, n, r, s, o)
      } jo(t)
  }
  return t.anchor && i(t.anchor)
}
const Af = Wl;

function jo(e) {
  const t = e.ctx;
  if (t && t.ut) {
    let n = e.children[0].el;
    for (; n && n !== e.targetAnchor;) n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid), n = n.nextSibling;
    t.ut()
  }
}
const Ee = Symbol.for("v-fgt"),
  Sn = Symbol.for("v-txt"),
  Ye = Symbol.for("v-cmt"),
  rn = Symbol.for("v-stc"),
  $t = [];
let Pe = null;

function Pn(e = !1) {
  $t.push(Pe = e ? null : [])
}

function Gl() {
  $t.pop(), Pe = $t[$t.length - 1] || null
}
let kt = 1;

function rs(e) {
  kt += e
}

function Ho(e) {
  return e.dynamicChildren = kt > 0 ? Pe || dt : null, Gl(), kt > 0 && Pe && Pe.push(e), e
}

function Jl(e, t, n, r, s, o) {
  return Ho(Kt(e, t, n, r, s, o, !0))
}

function Sr(e, t, n, r, s) {
  return Ho(he(e, t, n, r, s, !0))
}

function an(e) {
  return e ? e.__v_isVNode === !0 : !1
}

function Rt(e, t) {
  return e.type === t.type && e.key === t.key
}
const Vo = ({
    key: e
  }) => e != null ? e : null,
  sn = ({
    ref: e,
    ref_key: t,
    ref_for: n
  }) => (typeof e == "number" && (e = "" + e), e != null ? re(e) || de(e) || B(e) ? {
    i: se,
    r: e,
    k: t,
    f: !!n
  } : e : null);

function Kt(e, t = null, n = null, r = 0, s = null, o = e === Ee ? 0 : 1, i = !1, c = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Vo(t),
    ref: t && sn(t),
    scopeId: xn,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: se
  };
  return c ? (Pr(l, n), o & 128 && e.normalize(l)) : n && (l.shapeFlag |= re(n) ? 8 : 16), kt > 0 && !i && Pe && (l.patchFlag > 0 || o & 6) && l.patchFlag !== 32 && Pe.push(l), l
}
const he = Ql;

function Ql(e, t = null, n = null, r = 0, s = null, o = !1) {
  if ((!e || e === ul) && (e = Ye), an(e)) {
    const c = _t(e, t, !0);
    return n && Pr(c, n), kt > 0 && !o && Pe && (c.shapeFlag & 6 ? Pe[Pe.indexOf(e)] = c : Pe.push(c)), c.patchFlag |= -2, c
  }
  if (uc(e) && (e = e.__vccOpts), t) {
    t = Yl(t);
    let {
      class: c,
      style: l
    } = t;
    c && !re(c) && (t.class = ar(c)), ee(l) && (io(l) && !F(l) && (l = ce({}, l)), t.style = fr(l))
  }
  const i = re(e) ? 1 : al(e) ? 128 : ql(e) ? 64 : ee(e) ? 4 : B(e) ? 2 : 0;
  return Kt(e, t, n, r, s, i, o, !0)
}

function Yl(e) {
  return e ? io(e) || To(e) ? ce({}, e) : e : null
}

function _t(e, t, n = !1) {
  const {
    props: r,
    ref: s,
    patchFlag: o,
    children: i
  } = e, c = t ? Zl(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Vo(c),
    ref: t && t.ref ? n && s ? F(s) ? s.concat(sn(t)) : [s, sn(t)] : sn(t) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Ee ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && _t(e.ssContent),
    ssFallback: e.ssFallback && _t(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  }
}

function Xl(e = " ", t = 0) {
  return he(Sn, null, e, t)
}

function Of(e = "", t = !1) {
  return t ? (Pn(), Sr(Ye, null, e)) : he(Ye, null, e)
}

function Le(e) {
  return e == null || typeof e == "boolean" ? he(Ye) : F(e) ? he(Ee, null, e.slice()) : typeof e == "object" ? qe(e) : he(Sn, null, String(e))
}

function qe(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : _t(e)
}

function Pr(e, t) {
  let n = 0;
  const {
    shapeFlag: r
  } = e;
  if (t == null) t = null;
  else if (F(t)) n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Pr(e, s()), s._c && (s._d = !0));
      return
    } else {
      n = 32;
      const s = t._;
      !s && !To(t) ? t._ctx = se : s === 3 && se && (se.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
    }
  else B(t) ? (t = {
    default: t,
    _ctx: se
  }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Xl(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n
}

function Zl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class") t.class !== r.class && (t.class = ar([t.class, r.class]));
      else if (s === "style") t.style = fr([t.style, r.style]);
    else if (pn(s)) {
      const o = t[s],
        i = r[s];
      i && o !== i && !(F(o) && o.includes(i)) && (t[s] = o ? [].concat(o, i) : i)
    } else s !== "" && (t[s] = r[s])
  }
  return t
}

function Me(e, t, n, r = null) {
  Ce(e, t, 7, [n, r])
}
const ec = Ao();
let tc = 0;

function nc(e, t, n) {
  const r = e.type,
    s = (t ? t.appContext : e.appContext) || ec,
    o = {
      uid: tc++,
      vnode: e,
      type: r,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Ws(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(s.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Mo(r, s),
      emitsOptions: bo(r, s),
      emit: null,
      emitted: null,
      propsDefaults: X,
      inheritAttrs: r.inheritAttrs,
      ctx: X,
      data: X,
      props: X,
      attrs: X,
      slots: X,
      refs: X,
      setupState: X,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    };
  return o.ctx = {
    _: o
  }, o.root = t ? t.root : o, o.emit = nl.bind(null, o), e.ce && e.ce(o), o
}
let le = null;
const rc = () => le || se;
let hn, er; {
  const e = Ds(),
    t = (n, r) => {
      let s;
      return (s = e[n]) || (s = e[n] = []), s.push(r), o => {
        s.length > 1 ? s.forEach(i => i(o)) : s[0](o)
      }
    };
  hn = t("__VUE_INSTANCE_SETTERS__", n => le = n), er = t("__VUE_SSR_SETTERS__", n => Cn = n)
}
const qt = e => {
    const t = le;
    return hn(e), e.scope.on(), () => {
      e.scope.off(), hn(t)
    }
  },
  ss = () => {
    le && le.scope.off(), hn(null)
  };

function Bo(e) {
  return e.vnode.shapeFlag & 4
}
let Cn = !1;

function sc(e, t = !1) {
  t && er(t);
  const {
    props: n,
    children: r
  } = e.vnode, s = Bo(e);
  Fl(e, n, s, t), Vl(e, r);
  const o = s ? oc(e, t) : void 0;
  return t && er(!1), o
}

function oc(e, t) {
  const n = e.type;
  e.accessCache = Object.create(null), e.proxy = new Proxy(e.ctx, Al);
  const {
    setup: r
  } = n;
  if (r) {
    const s = e.setupContext = r.length > 1 ? lc(e) : null,
      o = qt(e);
    Xe();
    const i = Je(r, e, 0, [e.props, s]);
    if (Ze(), o(), Vs(i)) {
      if (i.then(ss, ss), t) return i.then(c => {
        os(e, c, t)
      }).catch(c => {
        vn(c, e, 0)
      });
      e.asyncDep = i
    } else os(e, i, t)
  } else ko(e, t)
}

function os(e, t, n) {
  B(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ee(t) && (e.setupState = ho(t)), ko(e, n)
}
let is;

function ko(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && is && !r.render) {
      const s = r.template || xr(e).template;
      if (s) {
        const {
          isCustomElement: o,
          compilerOptions: i
        } = e.appContext.config, {
          delimiters: c,
          compilerOptions: l
        } = r, a = ce(ce({
          isCustomElement: o,
          delimiters: c
        }, i), l);
        r.render = is(s, a)
      }
    }
    e.render = r.render || xe
  } {
    const s = qt(e);
    Xe();
    try {
      Ol(e)
    } finally {
      Ze(), s()
    }
  }
}
const ic = {
  get(e, t) {
    return _e(e, "get", ""), e[t]
  }
};

function lc(e) {
  const t = n => {
    e.exposed = n || {}
  };
  return {
    attrs: new Proxy(e.attrs, ic),
    slots: e.slots,
    emit: e.emit,
    expose: t
  }
}

function An(e) {
  if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(ho(lo(e.exposed)), {
    get(t, n) {
      if (n in t) return t[n];
      if (n in It) return It[n](e)
    },
    has(t, n) {
      return n in t || n in It
    }
  }))
}

function cc(e, t = !0) {
  return B(e) ? e.displayName || e.name : e.name || t && e.__name
}

function uc(e) {
  return B(e) && "__vccOpts" in e
}
const Se = (e, t) => qi(e, t, Cn);

function Uo(e, t, n) {
  const r = arguments.length;
  return r === 2 ? ee(t) && !F(t) ? an(t) ? he(e, null, [t]) : he(e, t) : he(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && an(n) && (n = [n]), he(e, t, n))
}
const fc = "3.4.23";
/**
 * @vue/runtime-dom v3.4.23
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
const ac = "http://www.w3.org/2000/svg",
  hc = "http://www.w3.org/1998/Math/MathML",
  We = typeof document != "undefined" ? document : null,
  ls = We && We.createElement("template"),
  dc = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: e => {
      const t = e.parentNode;
      t && t.removeChild(e)
    },
    createElement: (e, t, n, r) => {
      const s = t === "svg" ? We.createElementNS(ac, e) : t === "mathml" ? We.createElementNS(hc, e) : We.createElement(e, n ? {
        is: n
      } : void 0);
      return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s
    },
    createText: e => We.createTextNode(e),
    createComment: e => We.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: e => e.parentNode,
    nextSibling: e => e.nextSibling,
    querySelector: e => We.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "")
    },
    insertStaticContent(e, t, n, r, s, o) {
      const i = n ? n.previousSibling : t.lastChild;
      if (s && (s === o || s.nextSibling))
        for (; t.insertBefore(s.cloneNode(!0), n), !(s === o || !(s = s.nextSibling)););
      else {
        ls.innerHTML = r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e;
        const c = ls.content;
        if (r === "svg" || r === "mathml") {
          const l = c.firstChild;
          for (; l.firstChild;) c.appendChild(l.firstChild);
          c.removeChild(l)
        }
        t.insertBefore(c, n)
      }
      return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    }
  },
  pc = Symbol("_vtc");

function gc(e, t, n) {
  const r = e[pc];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
const dn = Symbol("_vod"),
  Do = Symbol("_vsh"),
  Tf = {
    beforeMount(e, {
      value: t
    }, {
      transition: n
    }) {
      e[dn] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : St(e, t)
    },
    mounted(e, {
      value: t
    }, {
      transition: n
    }) {
      n && t && n.enter(e)
    },
    updated(e, {
      value: t,
      oldValue: n
    }, {
      transition: r
    }) {
      !t != !n && (r ? t ? (r.beforeEnter(e), St(e, !0), r.enter(e)) : r.leave(e, () => {
        St(e, !1)
      }) : St(e, t))
    },
    beforeUnmount(e, {
      value: t
    }) {
      St(e, t)
    }
  };

function St(e, t) {
  e.style.display = t ? e[dn] : "none", e[Do] = !t
}
const Ko = Symbol("");

function If(e) {
  const t = rc();
  if (!t) return;
  const n = t.ut = (s = e(t.proxy)) => {
      Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach(o => nr(o, s))
    },
    r = () => {
      const s = e(t.proxy);
      tr(t.subTree, s), n(s)
    };
  So(() => {
    gl(r);
    const s = new MutationObserver(r);
    s.observe(t.subTree.el.parentNode, {
      childList: !0
    }), Er(() => s.disconnect())
  })
}

function tr(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      tr(n.activeBranch, t)
    })
  }
  for (; e.component;) e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el) nr(e.el, t);
  else if (e.type === Ee) e.children.forEach(n => tr(n, t));
  else if (e.type === rn) {
    let {
      el: n,
      anchor: r
    } = e;
    for (; n && (nr(n, t), n !== r);) n = n.nextSibling
  }
}

function nr(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let r = "";
    for (const s in t) n.setProperty(`--${s}`, t[s]), r += `--${s}: ${t[s]};`;
    n[Ko] = r
  }
}
const mc = /(^|;)\s*display\s*:/;

function _c(e, t, n) {
  const r = e.style,
    s = re(n);
  let o = !1;
  if (n && !s) {
    if (t)
      if (re(t))
        for (const i of t.split(";")) {
          const c = i.slice(0, i.indexOf(":")).trim();
          n[c] == null && on(r, c, "")
        } else
          for (const i in t) n[i] == null && on(r, i, "");
    for (const i in n) i === "display" && (o = !0), on(r, i, n[i])
  } else if (s) {
    if (t !== n) {
      const i = r[Ko];
      i && (n += ";" + i), r.cssText = n, o = mc.test(n)
    }
  } else t && e.removeAttribute("style");
  dn in e && (e[dn] = o ? r.display : "", e[Do] && (r.display = "none"))
}
const cs = /\s*!important$/;

function on(e, t, n) {
  if (F(n)) n.forEach(r => on(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
  else {
    const r = yc(e, t);
    cs.test(n) ? e.setProperty(vt(r), n.replace(cs, ""), "important") : e[r] = n
  }
}
const us = ["Webkit", "Moz", "ms"],
  Hn = {};

function yc(e, t) {
  const n = Hn[t];
  if (n) return n;
  let r = Ne(t);
  if (r !== "filter" && r in e) return Hn[t] = r;
  r = _n(r);
  for (let s = 0; s < us.length; s++) {
    const o = us[s] + r;
    if (o in e) return Hn[t] = o
  }
  return t
}
const fs = "http://www.w3.org/1999/xlink";

function bc(e, t, n, r, s) {
  if (r && t.startsWith("xlink:")) n == null ? e.removeAttributeNS(fs, t.slice(6, t.length)) : e.setAttributeNS(fs, t, n);
  else {
    const o = Ei(t);
    n == null || o && !Ks(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n)
  }
}

function vc(e, t, n, r, s, o, i) {
  if (t === "innerHTML" || t === "textContent") {
    r && i(r, s, o), e[t] = n == null ? "" : n;
    return
  }
  const c = e.tagName;
  if (t === "value" && c !== "PROGRESS" && !c.includes("-")) {
    const a = c === "OPTION" ? e.getAttribute("value") || "" : e.value,
      f = n == null ? "" : n;
    (a !== f || !("_value" in e)) && (e.value = f), n == null && e.removeAttribute(t), e._value = n;
    return
  }
  let l = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = Ks(n) : n == null && a === "string" ? (n = "", l = !0) : a === "number" && (n = 0, l = !0)
  }
  try {
    e[t] = n
  } catch (a) {}
  l && e.removeAttribute(t)
}

function Ec(e, t, n, r) {
  e.addEventListener(t, n, r)
}

function xc(e, t, n, r) {
  e.removeEventListener(t, n, r)
}
const as = Symbol("_vei");

function wc(e, t, n, r, s = null) {
  const o = e[as] || (e[as] = {}),
    i = o[t];
  if (r && i) i.value = r;
  else {
    const [c, l] = Rc(t);
    if (r) {
      const a = o[t] = Cc(r, s);
      Ec(e, c, a, l)
    } else i && (xc(e, c, i, l), o[t] = void 0)
  }
}
const hs = /(?:Once|Passive|Capture)$/;

function Rc(e) {
  let t;
  if (hs.test(e)) {
    t = {};
    let r;
    for (; r = e.match(hs);) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0
  }
  return [e[2] === ":" ? e.slice(3) : vt(e.slice(2)), t]
}
let Vn = 0;
const Sc = Promise.resolve(),
  Pc = () => Vn || (Sc.then(() => Vn = 0), Vn = Date.now());

function Cc(e, t) {
  const n = r => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    Ce(Ac(r, n.value), t, 5, [r])
  };
  return n.value = e, n.attached = Pc(), n
}

function Ac(e, t) {
  if (F(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0
    }, t.map(r => s => !s._stopped && r && r(s))
  } else return t
}
const ds = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123,
  Oc = (e, t, n, r, s, o, i, c, l) => {
    const a = s === "svg";
    t === "class" ? gc(e, r, a) : t === "style" ? _c(e, n, r) : pn(t) ? lr(t) || wc(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Tc(e, t, r, a)) ? vc(e, t, r, o, i, c, l) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), bc(e, t, r, a))
  };

function Tc(e, t, n, r) {
  if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && ds(t) && B(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE") return !1
  }
  return ds(t) && re(n) ? !1 : t in e
}
const Ic = ce({
  patchProp: Oc
}, dc);
let ps;

function Mc() {
  return ps || (ps = kl(Ic))
}
const Lc = (...e) => {
  const t = Mc().createApp(...e),
    {
      mount: n
    } = t;
  return t.mount = r => {
    const s = Nc(r);
    if (!s) return;
    const o = t._component;
    !B(o) && !o.render && !o.template && (o.template = s.innerHTML), s.innerHTML = "";
    const i = n(s, !1, $c(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), i
  }, t
};

function $c(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml"
}

function Nc(e) {
  return re(e) ? document.querySelector(e) : e
}
var Fc = !1;
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
const jc = Symbol();
var gs;
(function (e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function"
})(gs || (gs = {}));

function Hc() {
  const e = xi(!0),
    t = e.run(() => fo({}));
  let n = [],
    r = [];
  const s = lo({
    install(o) {
      s._a = o, o.provide(jc, s), o.config.globalProperties.$pinia = s, r.forEach(i => n.push(i)), r = []
    },
    use(o) {
      return !this._a && !Fc ? r.push(o) : n.push(o), this
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map,
    state: t
  });
  return s
}

function Vc(e) {
  return typeof e == "object" && e !== null
}

function ms(e, t) {
  return e = Vc(e) ? e : Object.create(null), new Proxy(e, {
    get(n, r, s) {
      return r === "key" ? Reflect.get(n, r, s) : Reflect.get(n, r, s) || Reflect.get(t, r, s)
    }
  })
}

function Bc(e, t) {
  return t.reduce((n, r) => n == null ? void 0 : n[r], e)
}

function kc(e, t, n) {
  return t.slice(0, -1).reduce((r, s) => /^(__proto__)$/.test(s) ? {} : r[s] = r[s] || {}, e)[t[t.length - 1]] = n, e
}

function Uc(e, t) {
  return t.reduce((n, r) => {
    const s = r.split(".");
    return kc(n, s, Bc(e, s))
  }, {})
}

function Dc(e, t) {
  return n => {
    var r;
    try {
      const {
        storage: s = localStorage,
        beforeRestore: o = void 0,
        afterRestore: i = void 0,
        serializer: c = {
          serialize: JSON.stringify,
          deserialize: JSON.parse
        },
        key: l = t.$id,
        paths: a = null,
        debug: f = !1
      } = n;
      return {
        storage: s,
        beforeRestore: o,
        afterRestore: i,
        serializer: c,
        key: ((r = e.key) != null ? r : p => p)(typeof l == "string" ? l : l(t.$id)),
        paths: a,
        debug: f
      }
    } catch (s) {
      return n.debug && console.error("[pinia-plugin-persistedstate]", s), null
    }
  }
}

function _s(e, {
  storage: t,
  serializer: n,
  key: r,
  debug: s
}) {
  try {
    const o = t == null ? void 0 : t.getItem(r);
    o && e.$patch(n == null ? void 0 : n.deserialize(o))
  } catch (o) {
    s && console.error("[pinia-plugin-persistedstate]", o)
  }
}

function ys(e, {
  storage: t,
  serializer: n,
  key: r,
  paths: s,
  debug: o
}) {
  try {
    const i = Array.isArray(s) ? Uc(e, s) : e;
    t.setItem(r, n.serialize(i))
  } catch (i) {
    o && console.error("[pinia-plugin-persistedstate]", i)
  }
}

function Kc(e = {}) {
  return t => {
    const {
      auto: n = !1
    } = e, {
      options: {
        persist: r = n
      },
      store: s,
      pinia: o
    } = t;
    if (!r) return;
    if (!(s.$id in o.state.value)) {
      const c = o._s.get(s.$id.replace("__hot:", ""));
      c && Promise.resolve().then(() => c.$persist());
      return
    }
    const i = (Array.isArray(r) ? r.map(c => ms(c, e)) : [ms(r, e)]).map(Dc(e, s)).filter(Boolean);
    s.$persist = () => {
      i.forEach(c => {
        ys(s.$state, c)
      })
    }, s.$hydrate = ({
      runHooks: c = !0
    } = {}) => {
      i.forEach(l => {
        const {
          beforeRestore: a,
          afterRestore: f
        } = l;
        c && (a == null || a(t)), _s(s, l), c && (f == null || f(t))
      })
    }, i.forEach(c => {
      const {
        beforeRestore: l,
        afterRestore: a
      } = c;
      l == null || l(t), _s(s, c), a == null || a(t), s.$subscribe((f, p) => {
        ys(p, c)
      }, {
        detached: !0
      })
    })
  }
}
var qc = Kc();
const qo = Hc();
qo.use(qc);
const Wo = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, s] of t) n[r] = s;
    return n
  },
  Wc = {};

function zc(e, t) {
  const n = vo("router-view");
  return Pn(), Sr(n)
}
const Gc = Wo(Wc, [
    ["render", zc]
  ]),
  Jc = "modulepreload",
  Qc = function (e, t) {
    return new URL(e, t).href
  },
  bs = {},
  Et = function (t, n, r) {
    let s = Promise.resolve();
    if (n && n.length > 0) {
      const o = document.getElementsByTagName("link"),
        i = document.querySelector("meta[property=csp-nonce]"),
        c = (i == null ? void 0 : i.nonce) || (i == null ? void 0 : i.getAttribute("nonce"));
      s = Promise.all(n.map(l => {
        if (l = Qc(l, r), l in bs) return;
        bs[l] = !0;
        const a = l.endsWith(".css"),
          f = a ? '[rel="stylesheet"]' : "";
        if (!!r)
          for (let _ = o.length - 1; _ >= 0; _--) {
            const P = o[_];
            if (P.href === l && (!a || P.rel === "stylesheet")) return
          } else if (document.querySelector(`link[href="${l}"]${f}`)) return;
        const d = document.createElement("link");
        if (d.rel = a ? "stylesheet" : Jc, a || (d.as = "script", d.crossOrigin = ""), d.href = l, c && d.setAttribute("nonce", c), document.head.appendChild(d), a) return new Promise((_, P) => {
          d.addEventListener("load", _), d.addEventListener("error", () => P(new Error(`Unable to preload CSS for ${l}`)))
        })
      }))
    }
    return s.then(() => t()).catch(o => {
      const i = new Event("vite:preloadError", {
        cancelable: !0
      });
      if (i.payload = o, window.dispatchEvent(i), !i.defaultPrevented) throw o
    })
  };
/*!
 * vue-router v4.3.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */
const ht = typeof document != "undefined";

function Yc(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module"
}
const z = Object.assign;

function Bn(e, t) {
  const n = {};
  for (const r in t) {
    const s = t[r];
    n[r] = Ae(s) ? s.map(e) : e(s)
  }
  return n
}
const Nt = () => {},
  Ae = Array.isArray,
  zo = /#/g,
  Xc = /&/g,
  Zc = /\//g,
  eu = /=/g,
  tu = /\?/g,
  Go = /\+/g,
  nu = /%5B/g,
  ru = /%5D/g,
  Jo = /%5E/g,
  su = /%60/g,
  Qo = /%7B/g,
  ou = /%7C/g,
  Yo = /%7D/g,
  iu = /%20/g;

function Cr(e) {
  return encodeURI("" + e).replace(ou, "|").replace(nu, "[").replace(ru, "]")
}

function lu(e) {
  return Cr(e).replace(Qo, "{").replace(Yo, "}").replace(Jo, "^")
}

function rr(e) {
  return Cr(e).replace(Go, "%2B").replace(iu, "+").replace(zo, "%23").replace(Xc, "%26").replace(su, "`").replace(Qo, "{").replace(Yo, "}").replace(Jo, "^")
}

function cu(e) {
  return rr(e).replace(eu, "%3D")
}

function uu(e) {
  return Cr(e).replace(zo, "%23").replace(tu, "%3F")
}

function fu(e) {
  return e == null ? "" : uu(e).replace(Zc, "%2F")
}

function Ut(e) {
  try {
    return decodeURIComponent("" + e)
  } catch (t) {}
  return "" + e
}
const au = /\/$/,
  hu = e => e.replace(au, "");

function kn(e, t, n = "/") {
  let r, s = {},
    o = "",
    i = "";
  const c = t.indexOf("#");
  let l = t.indexOf("?");
  return c < l && c >= 0 && (l = -1), l > -1 && (r = t.slice(0, l), o = t.slice(l + 1, c > -1 ? c : t.length), s = e(o)), c > -1 && (r = r || t.slice(0, c), i = t.slice(c, t.length)), r = mu(r != null ? r : t, n), {
    fullPath: r + (o && "?") + o + i,
    path: r,
    query: s,
    hash: Ut(i)
  }
}

function du(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "")
}

function vs(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}

function pu(e, t, n) {
  const r = t.matched.length - 1,
    s = n.matched.length - 1;
  return r > -1 && r === s && yt(t.matched[r], n.matched[s]) && Xo(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}

function yt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}

function Xo(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e)
    if (!gu(e[n], t[n])) return !1;
  return !0
}

function gu(e, t) {
  return Ae(e) ? Es(e, t) : Ae(t) ? Es(t, e) : e === t
}

function Es(e, t) {
  return Ae(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t
}

function mu(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"),
    r = e.split("/"),
    s = r[r.length - 1];
  (s === ".." || s === ".") && r.push("");
  let o = n.length - 1,
    i, c;
  for (i = 0; i < r.length; i++)
    if (c = r[i], c !== ".")
      if (c === "..") o > 1 && o--;
      else break;
  return n.slice(0, o).join("/") + "/" + r.slice(i).join("/")
}
var Dt;
(function (e) {
  e.pop = "pop", e.push = "push"
})(Dt || (Dt = {}));
var Ft;
(function (e) {
  e.back = "back", e.forward = "forward", e.unknown = ""
})(Ft || (Ft = {}));

function _u(e) {
  if (!e)
    if (ht) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "")
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), hu(e)
}
const yu = /^[^#]+#/;

function bu(e, t) {
  return e.replace(yu, "#") + t
}

function vu(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0)
  }
}
const On = () => ({
  left: window.scrollX,
  top: window.scrollY
});

function Eu(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      r = typeof n == "string" && n.startsWith("#"),
      s = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!s) return;
    t = vu(s, e)
  } else t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY)
}

function xs(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const sr = new Map;

function xu(e, t) {
  sr.set(e, t)
}

function wu(e) {
  const t = sr.get(e);
  return sr.delete(e), t
}
let Ru = () => location.protocol + "//" + location.host;

function Zo(e, t) {
  const {
    pathname: n,
    search: r,
    hash: s
  } = t, o = e.indexOf("#");
  if (o > -1) {
    let c = s.includes(e.slice(o)) ? e.slice(o).length : 1,
      l = s.slice(c);
    return l[0] !== "/" && (l = "/" + l), vs(l, "")
  }
  return vs(n, e) + r + s
}

function Su(e, t, n, r) {
  let s = [],
    o = [],
    i = null;
  const c = ({
    state: d
  }) => {
    const _ = Zo(e, location),
      P = n.value,
      O = t.value;
    let H = 0;
    if (d) {
      if (n.value = _, t.value = d, i && i === P) {
        i = null;
        return
      }
      H = O ? d.position - O.position : 0
    } else r(_);
    s.forEach(T => {
      T(n.value, P, {
        delta: H,
        type: Dt.pop,
        direction: H ? H > 0 ? Ft.forward : Ft.back : Ft.unknown
      })
    })
  };

  function l() {
    i = n.value
  }

  function a(d) {
    s.push(d);
    const _ = () => {
      const P = s.indexOf(d);
      P > -1 && s.splice(P, 1)
    };
    return o.push(_), _
  }

  function f() {
    const {
      history: d
    } = window;
    d.state && d.replaceState(z({}, d.state, {
      scroll: On()
    }), "")
  }

  function p() {
    for (const d of o) d();
    o = [], window.removeEventListener("popstate", c), window.removeEventListener("beforeunload", f)
  }
  return window.addEventListener("popstate", c), window.addEventListener("beforeunload", f, {
    passive: !0
  }), {
    pauseListeners: l,
    listen: a,
    destroy: p
  }
}

function ws(e, t, n, r = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: s ? On() : null
  }
}

function Pu(e) {
  const {
    history: t,
    location: n
  } = window, r = {
    value: Zo(e, n)
  }, s = {
    value: t.state
  };
  s.value || o(r.value, {
    back: null,
    current: r.value,
    forward: null,
    position: t.length - 1,
    replaced: !0,
    scroll: null
  }, !0);

  function o(l, a, f) {
    const p = e.indexOf("#"),
      d = p > -1 ? (n.host && document.querySelector("base") ? e : e.slice(p)) + l : Ru() + e + l;
    try {
      t[f ? "replaceState" : "pushState"](a, "", d), s.value = a
    } catch (_) {
      console.error(_), n[f ? "replace" : "assign"](d)
    }
  }

  function i(l, a) {
    const f = z({}, t.state, ws(s.value.back, l, s.value.forward, !0), a, {
      position: s.value.position
    });
    o(l, f, !0), r.value = l
  }

  function c(l, a) {
    const f = z({}, s.value, t.state, {
      forward: l,
      scroll: On()
    });
    o(f.current, f, !0);
    const p = z({}, ws(r.value, l, null), {
      position: f.position + 1
    }, a);
    o(l, p, !1), r.value = l
  }
  return {
    location: r,
    state: s,
    push: c,
    replace: i
  }
}

function Cu(e) {
  e = _u(e);
  const t = Pu(e),
    n = Su(e, t.state, t.location, t.replace);

  function r(o, i = !0) {
    i || n.pauseListeners(), history.go(o)
  }
  const s = z({
    location: "",
    base: e,
    go: r,
    createHref: bu.bind(null, e)
  }, t, n);
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(s, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), s
}

function Au(e) {
  return typeof e == "string" || e && typeof e == "object"
}

function ei(e) {
  return typeof e == "string" || typeof e == "symbol"
}
const De = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
  },
  ti = Symbol("");
var Rs;
(function (e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated"
})(Rs || (Rs = {}));

function bt(e, t) {
  return z(new Error, {
    type: e,
    [ti]: !0
  }, t)
}

function je(e, t) {
  return e instanceof Error && ti in e && (t == null || !!(e.type & t))
}
const Ss = "[^/]+?",
  Ou = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
  },
  Tu = /[.+*?^${}()[\]/\\]/g;

function Iu(e, t) {
  const n = z({}, Ou, t),
    r = [];
  let s = n.start ? "^" : "";
  const o = [];
  for (const a of e) {
    const f = a.length ? [] : [90];
    n.strict && !a.length && (s += "/");
    for (let p = 0; p < a.length; p++) {
      const d = a[p];
      let _ = 40 + (n.sensitive ? .25 : 0);
      if (d.type === 0) p || (s += "/"), s += d.value.replace(Tu, "\\$&"), _ += 40;
      else if (d.type === 1) {
        const {
          value: P,
          repeatable: O,
          optional: H,
          regexp: T
        } = d;
        o.push({
          name: P,
          repeatable: O,
          optional: H
        });
        const N = T || Ss;
        if (N !== Ss) {
          _ += 10;
          try {
            new RegExp(`(${N})`)
          } catch (U) {
            throw new Error(`Invalid custom RegExp for param "${P}" (${N}): ` + U.message)
          }
        }
        let V = O ? `((?:${N})(?:/(?:${N}))*)` : `(${N})`;
        p || (V = H && a.length < 2 ? `(?:/${V})` : "/" + V), H && (V += "?"), s += V, _ += 20, H && (_ += -8), O && (_ += -20), N === ".*" && (_ += -50)
      }
      f.push(_)
    }
    r.push(f)
  }
  if (n.strict && n.end) {
    const a = r.length - 1;
    r[a][r[a].length - 1] += .7000000000000001
  }
  n.strict || (s += "/?"), n.end ? s += "$" : n.strict && (s += "(?:/|$)");
  const i = new RegExp(s, n.sensitive ? "" : "i");

  function c(a) {
    const f = a.match(i),
      p = {};
    if (!f) return null;
    for (let d = 1; d < f.length; d++) {
      const _ = f[d] || "",
        P = o[d - 1];
      p[P.name] = _ && P.repeatable ? _.split("/") : _
    }
    return p
  }

  function l(a) {
    let f = "",
      p = !1;
    for (const d of e) {
      (!p || !f.endsWith("/")) && (f += "/"), p = !1;
      for (const _ of d)
        if (_.type === 0) f += _.value;
        else if (_.type === 1) {
        const {
          value: P,
          repeatable: O,
          optional: H
        } = _, T = P in a ? a[P] : "";
        if (Ae(T) && !O) throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);
        const N = Ae(T) ? T.join("/") : T;
        if (!N)
          if (H) d.length < 2 && (f.endsWith("/") ? f = f.slice(0, -1) : p = !0);
          else throw new Error(`Missing required param "${P}"`);
        f += N
      }
    }
    return f || "/"
  }
  return {
    re: i,
    score: r,
    keys: o,
    parse: c,
    stringify: l
  }
}

function Mu(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length;) {
    const r = t[n] - e[n];
    if (r) return r;
    n++
  }
  return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0
}

function Lu(e, t) {
  let n = 0;
  const r = e.score,
    s = t.score;
  for (; n < r.length && n < s.length;) {
    const o = Mu(r[n], s[n]);
    if (o) return o;
    n++
  }
  if (Math.abs(s.length - r.length) === 1) {
    if (Ps(r)) return 1;
    if (Ps(s)) return -1
  }
  return s.length - r.length
}

function Ps(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0
}
const $u = {
    type: 0,
    value: ""
  },
  Nu = /[a-zA-Z0-9_]/;

function Fu(e) {
  if (!e) return [
    []
  ];
  if (e === "/") return [
    [$u]
  ];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);

  function t(_) {
    throw new Error(`ERR (${n})/"${a}": ${_}`)
  }
  let n = 0,
    r = n;
  const s = [];
  let o;

  function i() {
    o && s.push(o), o = []
  }
  let c = 0,
    l, a = "",
    f = "";

  function p() {
    a && (n === 0 ? o.push({
      type: 0,
      value: a
    }) : n === 1 || n === 2 || n === 3 ? (o.length > 1 && (l === "*" || l === "+") && t(`A repeatable param (${a}) must be alone in its segment. eg: '/:ids+.`), o.push({
      type: 1,
      value: a,
      regexp: f,
      repeatable: l === "*" || l === "+",
      optional: l === "*" || l === "?"
    })) : t("Invalid state to consume buffer"), a = "")
  }

  function d() {
    a += l
  }
  for (; c < e.length;) {
    if (l = e[c++], l === "\\" && n !== 2) {
      r = n, n = 4;
      continue
    }
    switch (n) {
      case 0:
        l === "/" ? (a && p(), i()) : l === ":" ? (p(), n = 1) : d();
        break;
      case 4:
        d(), n = r;
        break;
      case 1:
        l === "(" ? n = 2 : Nu.test(l) ? d() : (p(), n = 0, l !== "*" && l !== "?" && l !== "+" && c--);
        break;
      case 2:
        l === ")" ? f[f.length - 1] == "\\" ? f = f.slice(0, -1) + l : n = 3 : f += l;
        break;
      case 3:
        p(), n = 0, l !== "*" && l !== "?" && l !== "+" && c--, f = "";
        break;
      default:
        t("Unknown state");
        break
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${a}"`), p(), i(), s
}

function ju(e, t, n) {
  const r = Iu(Fu(e.path), n),
    s = z(r, {
      record: e,
      parent: t,
      children: [],
      alias: []
    });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s
}

function Hu(e, t) {
  const n = [],
    r = new Map;
  t = Os({
    strict: !1,
    end: !0,
    sensitive: !1
  }, t);

  function s(f) {
    return r.get(f)
  }

  function o(f, p, d) {
    const _ = !d,
      P = Vu(f);
    P.aliasOf = d && d.record;
    const O = Os(t, f),
      H = [P];
    if ("alias" in f) {
      const V = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const U of V) H.push(z({}, P, {
        components: d ? d.record.components : P.components,
        path: U,
        aliasOf: d ? d.record : P
      }))
    }
    let T, N;
    for (const V of H) {
      const {
        path: U
      } = V;
      if (p && U[0] !== "/") {
        const Q = p.record.path,
          $ = Q[Q.length - 1] === "/" ? "" : "/";
        V.path = p.record.path + (U && $ + U)
      }
      if (T = ju(V, p, O), d ? d.alias.push(T) : (N = N || T, N !== T && N.alias.push(T), _ && f.name && !As(T) && i(f.name)), P.children) {
        const Q = P.children;
        for (let $ = 0; $ < Q.length; $++) o(Q[$], T, d && d.children[$])
      }
      d = d || T, (T.record.components && Object.keys(T.record.components).length || T.record.name || T.record.redirect) && l(T)
    }
    return N ? () => {
      i(N)
    } : Nt
  }

  function i(f) {
    if (ei(f)) {
      const p = r.get(f);
      p && (r.delete(f), n.splice(n.indexOf(p), 1), p.children.forEach(i), p.alias.forEach(i))
    } else {
      const p = n.indexOf(f);
      p > -1 && (n.splice(p, 1), f.record.name && r.delete(f.record.name), f.children.forEach(i), f.alias.forEach(i))
    }
  }

  function c() {
    return n
  }

  function l(f) {
    let p = 0;
    for (; p < n.length && Lu(f, n[p]) >= 0 && (f.record.path !== n[p].record.path || !ni(f, n[p]));) p++;
    n.splice(p, 0, f), f.record.name && !As(f) && r.set(f.record.name, f)
  }

  function a(f, p) {
    let d, _ = {},
      P, O;
    if ("name" in f && f.name) {
      if (d = r.get(f.name), !d) throw bt(1, {
        location: f
      });
      O = d.record.name, _ = z(Cs(p.params, d.keys.filter(N => !N.optional).concat(d.parent ? d.parent.keys.filter(N => N.optional) : []).map(N => N.name)), f.params && Cs(f.params, d.keys.map(N => N.name))), P = d.stringify(_)
    } else if (f.path != null) P = f.path, d = n.find(N => N.re.test(P)), d && (_ = d.parse(P), O = d.record.name);
    else {
      if (d = p.name ? r.get(p.name) : n.find(N => N.re.test(p.path)), !d) throw bt(1, {
        location: f,
        currentLocation: p
      });
      O = d.record.name, _ = z({}, p.params, f.params), P = d.stringify(_)
    }
    const H = [];
    let T = d;
    for (; T;) H.unshift(T.record), T = T.parent;
    return {
      name: O,
      path: P,
      params: _,
      matched: H,
      meta: ku(H)
    }
  }
  return e.forEach(f => o(f)), {
    addRoute: o,
    resolve: a,
    removeRoute: i,
    getRoutes: c,
    getRecordMatcher: s
  }
}

function Cs(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n
}

function Vu(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Bu(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set,
    updateGuards: new Set,
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && {
      default: e.component
    }
  }
}

function Bu(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else
    for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n;
  return t
}

function As(e) {
  for (; e;) {
    if (e.record.aliasOf) return !0;
    e = e.parent
  }
  return !1
}

function ku(e) {
  return e.reduce((t, n) => z(t, n.meta), {})
}

function Os(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n
}

function ni(e, t) {
  return t.children.some(n => n === e || ni(e, n))
}

function Uu(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const r = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < r.length; ++s) {
    const o = r[s].replace(Go, " "),
      i = o.indexOf("="),
      c = Ut(i < 0 ? o : o.slice(0, i)),
      l = i < 0 ? null : Ut(o.slice(i + 1));
    if (c in t) {
      let a = t[c];
      Ae(a) || (a = t[c] = [a]), a.push(l)
    } else t[c] = l
  }
  return t
}

function Ts(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (n = cu(n), r == null) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue
    }(Ae(r) ? r.map(o => o && rr(o)) : [r && rr(r)]).forEach(o => {
      o !== void 0 && (t += (t.length ? "&" : "") + n, o != null && (t += "=" + o))
    })
  }
  return t
}

function Du(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 && (t[n] = Ae(r) ? r.map(s => s == null ? null : "" + s) : r == null ? r : "" + r)
  }
  return t
}
const Ku = Symbol(""),
  Is = Symbol(""),
  Ar = Symbol(""),
  ri = Symbol(""),
  or = Symbol("");

function Pt() {
  let e = [];

  function t(r) {
    return e.push(r), () => {
      const s = e.indexOf(r);
      s > -1 && e.splice(s, 1)
    }
  }

  function n() {
    e = []
  }
  return {
    add: t,
    list: () => e.slice(),
    reset: n
  }
}

function ze(e, t, n, r, s, o = i => i()) {
  const i = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
  return () => new Promise((c, l) => {
    const a = d => {
        d === !1 ? l(bt(4, {
          from: n,
          to: t
        })) : d instanceof Error ? l(d) : Au(d) ? l(bt(2, {
          from: t,
          to: d
        })) : (i && r.enterCallbacks[s] === i && typeof d == "function" && i.push(d), c())
      },
      f = o(() => e.call(r && r.instances[s], t, n, a));
    let p = Promise.resolve(f);
    e.length < 3 && (p = p.then(a)), p.catch(d => l(d))
  })
}

function Un(e, t, n, r, s = o => o()) {
  const o = [];
  for (const i of e)
    for (const c in i.components) {
      let l = i.components[c];
      if (!(t !== "beforeRouteEnter" && !i.instances[c]))
        if (qu(l)) {
          const f = (l.__vccOpts || l)[t];
          f && o.push(ze(f, n, r, i, c, s))
        } else {
          let a = l();
          o.push(() => a.then(f => {
            if (!f) return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${i.path}"`));
            const p = Yc(f) ? f.default : f;
            i.components[c] = p;
            const _ = (p.__vccOpts || p)[t];
            return _ && ze(_, n, r, i, c, s)()
          }))
        }
    }
  return o
}

function qu(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e
}

function Ms(e) {
  const t = Ve(Ar),
    n = Ve(ri),
    r = Se(() => {
      const l = gt(e.to);
      return t.resolve(l)
    }),
    s = Se(() => {
      const {
        matched: l
      } = r.value, {
        length: a
      } = l, f = l[a - 1], p = n.matched;
      if (!f || !p.length) return -1;
      const d = p.findIndex(yt.bind(null, f));
      if (d > -1) return d;
      const _ = Ls(l[a - 2]);
      return a > 1 && Ls(f) === _ && p[p.length - 1].path !== _ ? p.findIndex(yt.bind(null, l[a - 2])) : d
    }),
    o = Se(() => s.value > -1 && Ju(n.params, r.value.params)),
    i = Se(() => s.value > -1 && s.value === n.matched.length - 1 && Xo(n.params, r.value.params));

  function c(l = {}) {
    return Gu(l) ? t[gt(e.replace) ? "replace" : "push"](gt(e.to)).catch(Nt) : Promise.resolve()
  }
  return {
    route: r,
    href: Se(() => r.value.href),
    isActive: o,
    isExactActive: i,
    navigate: c
  }
}
const Wu = xo({
    name: "RouterLink",
    compatConfig: {
      MODE: 3
    },
    props: {
      to: {
        type: [String, Object],
        required: !0
      },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: {
        type: String,
        default: "page"
      }
    },
    useLink: Ms,
    setup(e, {
      slots: t
    }) {
      const n = bn(Ms(e)),
        {
          options: r
        } = Ve(Ar),
        s = Se(() => ({
          [$s(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
          [$s(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
        }));
      return () => {
        const o = t.default && t.default(n);
        return e.custom ? o : Uo("a", {
          "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
          href: n.href,
          onClick: n.navigate,
          class: s.value
        }, o)
      }
    }
  }),
  zu = Wu;

function Gu(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return
    }
    return e.preventDefault && e.preventDefault(), !0
  }
}

function Ju(e, t) {
  for (const n in t) {
    const r = t[n],
      s = e[n];
    if (typeof r == "string") {
      if (r !== s) return !1
    } else if (!Ae(s) || s.length !== r.length || r.some((o, i) => o !== s[i])) return !1
  }
  return !0
}

function Ls(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const $s = (e, t, n) => e != null ? e : t != null ? t : n,
  Qu = xo({
    name: "RouterView",
    inheritAttrs: !1,
    props: {
      name: {
        type: String,
        default: "default"
      },
      route: Object
    },
    compatConfig: {
      MODE: 3
    },
    setup(e, {
      attrs: t,
      slots: n
    }) {
      const r = Ve(or),
        s = Se(() => e.route || r.value),
        o = Ve(Is, 0),
        i = Se(() => {
          let a = gt(o);
          const {
            matched: f
          } = s.value;
          let p;
          for (;
            (p = f[a]) && !p.components;) a++;
          return a
        }),
        c = Se(() => s.value.matched[i.value]);
      nn(Is, Se(() => i.value + 1)), nn(Ku, c), nn(or, s);
      const l = fo();
      return tn(() => [l.value, c.value, e.name], ([a, f, p], [d, _, P]) => {
        f && (f.instances[p] = a, _ && _ !== f && a && a === d && (f.leaveGuards.size || (f.leaveGuards = _.leaveGuards), f.updateGuards.size || (f.updateGuards = _.updateGuards))), a && f && (!_ || !yt(f, _) || !d) && (f.enterCallbacks[p] || []).forEach(O => O(a))
      }, {
        flush: "post"
      }), () => {
        const a = s.value,
          f = e.name,
          p = c.value,
          d = p && p.components[f];
        if (!d) return Ns(n.default, {
          Component: d,
          route: a
        });
        const _ = p.props[f],
          P = _ ? _ === !0 ? a.params : typeof _ == "function" ? _(a) : _ : null,
          H = Uo(d, z({}, P, t, {
            onVnodeUnmounted: T => {
              T.component.isUnmounted && (p.instances[f] = null)
            },
            ref: l
          }));
        return Ns(n.default, {
          Component: H,
          route: a
        }) || H
      }
    }
  });

function Ns(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n
}
const Yu = Qu;

function Xu(e) {
  const t = Hu(e.routes, e),
    n = e.parseQuery || Uu,
    r = e.stringifyQuery || Ts,
    s = e.history,
    o = Pt(),
    i = Pt(),
    c = Pt(),
    l = Wi(De);
  let a = De;
  ht && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const f = Bn.bind(null, y => "" + y),
    p = Bn.bind(null, fu),
    d = Bn.bind(null, Ut);

  function _(y, C) {
    let R, I;
    return ei(y) ? (R = t.getRecordMatcher(y), I = C) : I = y, t.addRoute(I, R)
  }

  function P(y) {
    const C = t.getRecordMatcher(y);
    C && t.removeRoute(C)
  }

  function O() {
    return t.getRoutes().map(y => y.record)
  }

  function H(y) {
    return !!t.getRecordMatcher(y)
  }

  function T(y, C) {
    if (C = z({}, C || l.value), typeof y == "string") {
      const h = kn(n, y, C.path),
        g = t.resolve({
          path: h.path
        }, C),
        b = s.createHref(h.fullPath);
      return z(h, g, {
        params: d(g.params),
        hash: Ut(h.hash),
        redirectedFrom: void 0,
        href: b
      })
    }
    let R;
    if (y.path != null) R = z({}, y, {
      path: kn(n, y.path, C.path).path
    });
    else {
      const h = z({}, y.params);
      for (const g in h) h[g] == null && delete h[g];
      R = z({}, y, {
        params: p(h)
      }), C.params = p(C.params)
    }
    const I = t.resolve(R, C),
      W = y.hash || "";
    I.params = f(d(I.params));
    const te = du(r, z({}, y, {
        hash: lu(W),
        path: I.path
      })),
      u = s.createHref(te);
    return z({
      fullPath: te,
      hash: W,
      query: r === Ts ? Du(y.query) : y.query || {}
    }, I, {
      redirectedFrom: void 0,
      href: u
    })
  }

  function N(y) {
    return typeof y == "string" ? kn(n, y, l.value.path) : z({}, y)
  }

  function V(y, C) {
    if (a !== y) return bt(8, {
      from: C,
      to: y
    })
  }

  function U(y) {
    return Y(y)
  }

  function Q(y) {
    return U(z(N(y), {
      replace: !0
    }))
  }

  function $(y) {
    const C = y.matched[y.matched.length - 1];
    if (C && C.redirect) {
      const {
        redirect: R
      } = C;
      let I = typeof R == "function" ? R(y) : R;
      return typeof I == "string" && (I = I.includes("?") || I.includes("#") ? I = N(I) : {
        path: I
      }, I.params = {}), z({
        query: y.query,
        hash: y.hash,
        params: I.path != null ? {} : y.params
      }, I)
    }
  }

  function Y(y, C) {
    const R = a = T(y),
      I = l.value,
      W = y.state,
      te = y.force,
      u = y.replace === !0,
      h = $(R);
    if (h) return Y(z(N(h), {
      state: typeof h == "object" ? z({}, W, h.state) : W,
      force: te,
      replace: u
    }), C || R);
    const g = R;
    g.redirectedFrom = C;
    let b;
    return !te && pu(r, I, R) && (b = bt(16, {
      to: g,
      from: I
    }), Te(I, I, !0, !1)), (b ? Promise.resolve(b) : pe(g, I)).catch(m => je(m) ? je(m, 2) ? m : ke(m) : q(m, g, I)).then(m => {
      if (m) {
        if (je(m, 2)) return Y(z({
          replace: u
        }, N(m.to), {
          state: typeof m.to == "object" ? z({}, W, m.to.state) : W,
          force: te
        }), C || g)
      } else m = et(g, I, !0, u, W);
      return be(g, I, m), m
    })
  }

  function ne(y, C) {
    const R = V(y, C);
    return R ? Promise.reject(R) : Promise.resolve()
  }

  function ye(y) {
    const C = ft.values().next().value;
    return C && typeof C.runWithContext == "function" ? C.runWithContext(y) : y()
  }

  function pe(y, C) {
    let R;
    const [I, W, te] = Zu(y, C);
    R = Un(I.reverse(), "beforeRouteLeave", y, C);
    for (const h of I) h.leaveGuards.forEach(g => {
      R.push(ze(g, y, C))
    });
    const u = ne.bind(null, y, C);
    return R.push(u), ue(R).then(() => {
      R = [];
      for (const h of o.list()) R.push(ze(h, y, C));
      return R.push(u), ue(R)
    }).then(() => {
      R = Un(W, "beforeRouteUpdate", y, C);
      for (const h of W) h.updateGuards.forEach(g => {
        R.push(ze(g, y, C))
      });
      return R.push(u), ue(R)
    }).then(() => {
      R = [];
      for (const h of te)
        if (h.beforeEnter)
          if (Ae(h.beforeEnter))
            for (const g of h.beforeEnter) R.push(ze(g, y, C));
          else R.push(ze(h.beforeEnter, y, C));
      return R.push(u), ue(R)
    }).then(() => (y.matched.forEach(h => h.enterCallbacks = {}), R = Un(te, "beforeRouteEnter", y, C, ye), R.push(u), ue(R))).then(() => {
      R = [];
      for (const h of i.list()) R.push(ze(h, y, C));
      return R.push(u), ue(R)
    }).catch(h => je(h, 8) ? h : Promise.reject(h))
  }

  function be(y, C, R) {
    c.list().forEach(I => ye(() => I(y, C, R)))
  }

  function et(y, C, R, I, W) {
    const te = V(y, C);
    if (te) return te;
    const u = C === De,
      h = ht ? history.state : {};
    R && (I || u ? s.replace(y.fullPath, z({
      scroll: u && h && h.scroll
    }, W)) : s.push(y.fullPath, W)), l.value = y, Te(y, C, R, u), ke()
  }
  let Oe;

  function xt() {
    Oe || (Oe = s.listen((y, C, R) => {
      if (!Wt.listening) return;
      const I = T(y),
        W = $(I);
      if (W) {
        Y(z(W, {
          replace: !0
        }), I).catch(Nt);
        return
      }
      a = I;
      const te = l.value;
      ht && xu(xs(te.fullPath, R.delta), On()), pe(I, te).catch(u => je(u, 12) ? u : je(u, 2) ? (Y(u.to, I).then(h => {
        je(h, 20) && !R.delta && R.type === Dt.pop && s.go(-1, !1)
      }).catch(Nt), Promise.reject()) : (R.delta && s.go(-R.delta, !1), q(u, I, te))).then(u => {
        u = u || et(I, te, !1), u && (R.delta && !je(u, 8) ? s.go(-R.delta, !1) : R.type === Dt.pop && je(u, 20) && s.go(-1, !1)), be(I, te, u)
      }).catch(Nt)
    }))
  }
  let ct = Pt(),
    oe = Pt(),
    G;

  function q(y, C, R) {
    ke(y);
    const I = oe.list();
    return I.length ? I.forEach(W => W(y, C, R)) : console.error(y), Promise.reject(y)
  }

  function Fe() {
    return G && l.value !== De ? Promise.resolve() : new Promise((y, C) => {
      ct.add([y, C])
    })
  }

  function ke(y) {
    return G || (G = !y, xt(), ct.list().forEach(([C, R]) => y ? R(y) : C()), ct.reset()), y
  }

  function Te(y, C, R, I) {
    const {
      scrollBehavior: W
    } = e;
    if (!ht || !W) return Promise.resolve();
    const te = !R && wu(xs(y.fullPath, 0)) || (I || !R) && history.state && history.state.scroll || null;
    return go().then(() => W(y, C, te)).then(u => u && Eu(u)).catch(u => q(u, y, C))
  }
  const ge = y => s.go(y);
  let ut;
  const ft = new Set,
    Wt = {
      currentRoute: l,
      listening: !0,
      addRoute: _,
      removeRoute: P,
      hasRoute: H,
      getRoutes: O,
      resolve: T,
      options: e,
      push: U,
      replace: Q,
      go: ge,
      back: () => ge(-1),
      forward: () => ge(1),
      beforeEach: o.add,
      beforeResolve: i.add,
      afterEach: c.add,
      onError: oe.add,
      isReady: Fe,
      install(y) {
        const C = this;
        y.component("RouterLink", zu), y.component("RouterView", Yu), y.config.globalProperties.$router = C, Object.defineProperty(y.config.globalProperties, "$route", {
          enumerable: !0,
          get: () => gt(l)
        }), ht && !ut && l.value === De && (ut = !0, U(s.location).catch(W => {}));
        const R = {};
        for (const W in De) Object.defineProperty(R, W, {
          get: () => l.value[W],
          enumerable: !0
        });
        y.provide(Ar, C), y.provide(ri, so(R)), y.provide(or, l);
        const I = y.unmount;
        ft.add(y), y.unmount = function () {
          ft.delete(y), ft.size < 1 && (a = De, Oe && Oe(), Oe = null, l.value = De, ut = !1, G = !1), I()
        }
      }
    };

  function ue(y) {
    return y.reduce((C, R) => C.then(() => ye(R)), Promise.resolve())
  }
  return Wt
}

function Zu(e, t) {
  const n = [],
    r = [],
    s = [],
    o = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < o; i++) {
    const c = t.matched[i];
    c && (e.matched.find(a => yt(a, c)) ? r.push(c) : n.push(c));
    const l = e.matched[i];
    l && (t.matched.find(a => yt(a, l)) || s.push(l))
  }
  return [n, r, s]
}
let Fs = [];

function ef() {
  Fs.forEach(e => {
    e.cancel()
  }), Fs = []
}

function tf(e, t, n, r) {
  return Nr(this, null, function* () {
    e.meta.title && (document.title = `${e.meta.title||""}`), ef(), n()
  })
}
const nf = () => Et(() => import("./index-DuhjldRx.js"), __vite__mapDeps([0, 1]),
    import.meta.url),
  rf = () => Et(() => import("./index-CuXtCPFo.js"), __vite__mapDeps([2, 3]),
    import.meta.url),
  sf = () => Et(() => import("./turf-zfJtvhuX.js"), __vite__mapDeps([4, 5]),
    import.meta.url),
  of = () => Et(() => import("./CaXxB6YD.js"), __vite__mapDeps([6, 1]),
    import.meta.url),
  lf = [{
    name: "c-login",
    path: "/login",
    component: nf,
    props: !0,
    meta: {
      title: "登录页标题"
    }
  }, {
    name: "home",
    path: "/home",
    component: rf,
    props: !0
  }, {
    name: "turf",
    path: "/turf",
    component: sf,
    props: !0
  }, {
    name: "all",
    path: "/:all(.*)*",
    component: of ,
    props: !0,
    meta: {
      title: "404"
    }
  }],
  cf = {},
  uf = {
    class: "h-[100vh] flex flex-col"
  },
  ff = Kt("div", {
    class: "header h-[50px] bg-pink text-center"
  }, "Header", -1),
  af = {
    class: "main flex flex-1 bg-[lavenderblush]"
  },
  hf = Kt("div", {
    class: "footer h-[50px] bg-[paleturquoise] text-center"
  }, "Footer", -1);

function df(e, t) {
  const n = vo("router-view");
  return Pn(), Jl("div", uf, [ff, Kt("div", af, [he(n)]), hf])
}
const pf = Wo(cf, [
    ["render", df]
  ]),
  js = {
    default: pf,
    headers: () => Et(() => import("./headers-CqSMCELP.js"), [],
      import.meta.url)
  };

function gf(e) {
  function t(n, r = !0) {
    return n.map(s => {
      var o, i, c, l, a, f;
      if (((o = s.children) == null ? void 0 : o.length) > 0 && (s.children = t(s.children, !1)), r) {
        if (!s.component && ((i = s.children) == null ? void 0 : i.find(d => {
            var _;
            return (d.path === "" || d.path === "/") && ((_ = d.meta) == null ? void 0 : _.isLayout)
          }))) return s;
        if (((c = s.meta) == null ? void 0 : c.layout) !== !1) return {
          path: s.path,
          component: js[((l = s.meta) == null ? void 0 : l.layout) || "default"],
          children: s.path === "/" ? [s] : [In(Tn({}, s), {
            path: ""
          })],
          meta: {
            isLayout: !0
          }
        }
      }
      return (a = s.meta) != null && a.layout ? {
        path: s.path,
        component: js[(f = s.meta) == null ? void 0 : f.layout],
        children: [In(Tn({}, s), {
          path: ""
        })],
        meta: {
          isLayout: !0
        }
      } : s
    })
  }
  return t(e)
}
const mf = gf(lf),
  _f = [{
    path: "/",
    name: "Home",
    meta: {
      title: "主页"
    },
    component: () => Et(() => import("./index-CuXtCPFo.js"), __vite__mapDeps([2, 3]),
      import.meta.url)
  }, ...mf],
  si = Xu({
    history: Cu("./"),
    routes: _f
  });
si.beforeEach((e, t, n) => {
  tf(e, t, n)
});
const Or = Lc(Gc);
Or.use(qo);
Or.use(si);
Or.mount("#app");
export {
  ar as A, Cf as B, Sr as C, Of as D, Pf as E, Ee as F, rl as G, Rf as H, Tf as I, Xl as J, Ef as K, xf as L, vo as M, Af as T, Wo as _, bn as a, yl as b, Se as c, de as d, So as e, _l as f, rc as g, an as h, Ve as i, he as j, xo as k, wf as l, Zl as m, go as n, Er as o, nn as p, Pn as q, fo as r, Jl as s, Kt as t, gt as u, If as v, tn as w, vf as x, Sf as y, bf as z
};