!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],t):t((e=e||self).Proxi={},e.Vue)}(this,(function(e,t){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var r=Object.prototype.hasOwnProperty,n=function(e,t){return r.call(e,t)},i=/-(\w)/g;var o={functional:!0,props:{proxiKey:{type:[Symbol,String],required:!0}},render:function(e,r){var n=r.props.proxiKey;if(n){var i=r.data;!function(e,r,n){e._provided||(e._provided={}),e._provided[r]?Object.assign(e._provided[r],n):e._provided[r]=t.observable(n)}(r.parent,n,{data:i})}return r.slots().default}},u=Object.freeze({}),f={class:void 0,listeners:u,attrs:u,props:u};e.ProxiInject=function(e){var t,r=void 0===e?{}:e,o=r.from,u=r.props,c=void 0===u?[]:u;return{inject:(t={},t._proxi_={from:o,default:void 0},t),created:function(){var e=(this._proxi_||{}).data;if(e)for(var t in e.on)n(e.on,t)&&this.$on(t,e.on[t])},computed:c.reduce((function(e,t){return e[t]=function(){return this.$$.props[t]},e}),{$$:function(){var e=(this._proxi_||{}).data,t=Object.create(f);return e?Object.assign(t,{class:e.staticClass||e.class?[e.staticClass,e.class]:void 0,listeners:e.on},function(e,t){var r={};for(var o in t)if(n(t,o)){var u=o.replace(i,(function(e,t){return t?t.toUpperCase():""})),f=t[o];e.includes(u)&&(r[u]=f,delete t[o])}return{attrs:t,props:r}}(c,Object.assign({},e.attrs))):t}})}},e.default=o,Object.defineProperty(e,"__esModule",{value:!0})}));
