import{r as t,h as r}from"./p-349d399d.js";const n=({vchildren:t})=>Array.isArray(t),e=({vattrs:t},r=[])=>{return n=t,!Array.isArray(n)&&null!==n&&"object"==typeof n&&r.every(t.hasOwnProperty.bind(t));var n},o=({vtext:t})=>"string"==typeof t,i=t=>"object"==typeof t&&1===t.nodeType&&"object"==typeof t.ownerDocument,l=t=>({vattrs:t.t,vchildren:t.o,vkey:t.i,vname:t.l,vtag:t.u,vtext:t.v}),c=({vtag:t,vattrs:r,vchildren:n,vtext:e})=>{if(null!=e)return document.createTextNode(e);const o=document.createElement(t);if(null!=r)for(const t in r)o.setAttribute(t,r[t]);if(null!=n)for(const t of n)o.appendChild(c(l(t)));return o},s=t=>i(t)||(t=>Array.isArray(t)&&t.every(i))(t)&&2===t.length,u=t=>Array.isArray(t)?document.head.replaceChild(t[0],t[1]):document.head.appendChild(t),a={title:function(t,r){const e=(t.vchildren||[])[0];if(n(t)&&o(l(e)))return[c(t),r.querySelector("title")]},meta:function(t,r){var n,e,o;const i=(null===(n=t.vattrs)||void 0===n?void 0:n.property)?"property":"name",l=(null===(e=t.vattrs)||void 0===e?void 0:e.property)||(null===(o=t.vattrs)||void 0===o?void 0:o.name),s=r.querySelector(`meta[${i}="${l}"]`);return null!==s?[c(t),s]:c(t)},link:function(t){if(!n(t))return c(t)},style:function(t){const r=(t.vchildren||[])[0];if(n(t)&&o(l(r)))return c(t)},script:function(t){if(n(t)||e(t))return c(t)},base:function(t){if(!n(t)&&e(t))return c(t)},template:c,noscript:c},d=document&&document.head,v=Object.keys(a),f=t=>v.indexOf(t.u)>-1,m=(t,r,n)=>{if(!d)return null;const e=r.filter(f),o=[];return n.forEach(e,(t=>{var r;o.push(a[(r=t).vtag](r,document.head))})),o.filter(s).forEach(u),null},g=class{constructor(r){t(this,r)}render(){return r(m,null,r("script",null,function(t,r,n,e,o){t[e]=t[e]||[],t[e].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var i=r.getElementsByTagName(n)[0],l=r.createElement(n);l.async=!0,l.src="https://www.googletagmanager.com/gtm.js?id="+o,i.parentNode.insertBefore(l,i)}(window,document,"script","dataLayer",this.containerId)))}},h=class{constructor(r){t(this,r)}getText(){return(this.first||"")+((t=this.middle)?` ${t}`:"")+((r=this.last)?` ${r}`:"");var t,r}returnJsx(){return r("h1",void 0!==this.color?{style:{"--text-color":`${this.color}`}}:null,"Hello, World! I'm ",this.getText())}render(){return this.returnJsx()}};h.style=":host{display:block;font-size:x-large;text-align:center;--text-color:#1e1e1e}h1{color:var(--text-color)}";export{g as google_tag_manager,h as my_component}