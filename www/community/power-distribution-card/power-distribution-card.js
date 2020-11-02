/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function t(t,e,r,n){var i,s=arguments.length,o=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(o=(s<3?i(o):s>3?i(e,r,o):i(e,r))||o);return s>3&&o&&Object.defineProperty(e,r,o),o
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,r=(t,e,r=null)=>{for(;e!==r;){const r=e.nextSibling;t.removeChild(e),e=r}},n=`{{lit-${String(Math.random()).slice(2)}}}`,i=`\x3c!--${n}--\x3e`,s=new RegExp(`${n}|${i}`);class o{constructor(t,e){this.parts=[],this.element=e;const r=[],i=[],o=document.createTreeWalker(e.content,133,null,!1);let l=0,u=-1,h=0;const{strings:p,values:{length:m}}=t;for(;h<m;){const t=o.nextNode();if(null!==t){if(u++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:r}=e;let n=0;for(let t=0;t<r;t++)a(e[t].name,"$lit$")&&n++;for(;n-- >0;){const e=p[h],r=d.exec(e)[2],n=r.toLowerCase()+"$lit$",i=t.getAttribute(n);t.removeAttribute(n);const o=i.split(s);this.parts.push({type:"attribute",index:u,name:r,strings:o}),h+=o.length-1}}"TEMPLATE"===t.tagName&&(i.push(t),o.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(n)>=0){const n=t.parentNode,i=e.split(s),o=i.length-1;for(let e=0;e<o;e++){let r,s=i[e];if(""===s)r=c();else{const t=d.exec(s);null!==t&&a(t[2],"$lit$")&&(s=s.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),r=document.createTextNode(s)}n.insertBefore(r,t),this.parts.push({type:"node",index:++u})}""===i[o]?(n.insertBefore(c(),t),r.push(t)):t.data=i[o],h+=o}}else if(8===t.nodeType)if(t.data===n){const e=t.parentNode;null!==t.previousSibling&&u!==l||(u++,e.insertBefore(c(),t)),l=u,this.parts.push({type:"node",index:u}),null===t.nextSibling?t.data="":(r.push(t),u--),h++}else{let e=-1;for(;-1!==(e=t.data.indexOf(n,e+1));)this.parts.push({type:"node",index:-1}),h++}}else o.currentNode=i.pop()}for(const t of r)t.parentNode.removeChild(t)}}const a=(t,e)=>{const r=t.length-e.length;return r>=0&&t.slice(r)===e},l=t=>-1!==t.index,c=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function u(t,e){const{element:{content:r},parts:n}=t,i=document.createTreeWalker(r,133,null,!1);let s=p(n),o=n[s],a=-1,l=0;const c=[];let d=null;for(;i.nextNode();){a++;const t=i.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(c.push(t),null===d&&(d=t)),null!==d&&l++;void 0!==o&&o.index===a;)o.index=null!==d?-1:o.index-l,s=p(n,s),o=n[s]}c.forEach((t=>t.parentNode.removeChild(t)))}const h=t=>{let e=11===t.nodeType?0:1;const r=document.createTreeWalker(t,133,null,!1);for(;r.nextNode();)e++;return e},p=(t,e=-1)=>{for(let r=e+1;r<t.length;r++){const e=t[r];if(l(e))return r}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const m=new WeakMap,f=t=>"function"==typeof t&&m.has(t),g={},y={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class _{constructor(t,e,r){this.__parts=[],this.template=t,this.processor=e,this.options=r}update(t){let e=0;for(const r of this.__parts)void 0!==r&&r.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),r=[],n=this.template.parts,i=document.createTreeWalker(t,133,null,!1);let s,o=0,a=0,c=i.nextNode();for(;o<n.length;)if(s=n[o],l(s)){for(;a<s.index;)a++,"TEMPLATE"===c.nodeName&&(r.push(c),i.currentNode=c.content),null===(c=i.nextNode())&&(i.currentNode=r.pop(),c=i.nextNode());if("node"===s.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(c.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,s.name,s.strings,this.options));o++}else this.__parts.push(void 0),o++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const v=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),w=` ${n} `;class b{constructor(t,e,r,n){this.strings=t,this.values=e,this.type=r,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",r=!1;for(let s=0;s<t;s++){const t=this.strings[s],o=t.lastIndexOf("\x3c!--");r=(o>-1||r)&&-1===t.indexOf("--\x3e",o+1);const a=d.exec(t);e+=null===a?t+(r?w:i):t.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+n}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==v&&(e=v.createHTML(e)),t.innerHTML=e,t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const S=t=>null===t||!("object"==typeof t||"function"==typeof t),x=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class P{constructor(t,e,r){this.dirty=!0,this.element=t,this.name=e,this.strings=r,this.parts=[];for(let t=0;t<r.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new N(this)}_getValue(){const t=this.strings,e=t.length-1,r=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=r[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!x(t))return t}let n="";for(let i=0;i<e;i++){n+=t[i];const e=r[i];if(void 0!==e){const t=e.value;if(S(t)||!x(t))n+="string"==typeof t?t:String(t);else for(const e of t)n+="string"==typeof e?e:String(e)}}return n+=t[e],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class N{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===g||S(t)&&t===this.value||(this.value=t,f(t)||(this.committer.dirty=!0))}commit(){for(;f(this.value);){const t=this.value;this.value=g,t(this)}this.value!==g&&this.committer.commit()}}class C{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(c()),this.endNode=t.appendChild(c())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=c()),t.__insert(this.endNode=c())}insertAfterPart(t){t.__insert(this.startNode=c()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=g,t(this)}const t=this.__pendingValue;t!==g&&(S(t)?t!==this.value&&this.__commitText(t):t instanceof b?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):x(t)?this.__commitIterable(t):t===y?(this.value=y,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,r="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=r:this.__commitNode(document.createTextNode(r)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof _&&this.value.template===e)this.value.update(t.values);else{const r=new _(e,t.processor,this.options),n=r._clone();r.update(t.values),this.__commitNode(n),this.value=r}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let r,n=0;for(const i of t)r=e[n],void 0===r&&(r=new C(this.options),e.push(r),0===n?r.appendIntoPart(this):r.insertAfterPart(e[n-1])),r.setValue(i),r.commit(),n++;n<e.length&&(e.length=n,this.clear(r&&r.endNode))}clear(t=this.startNode){r(this.startNode.parentNode,t.nextSibling,this.endNode)}}class M{constructor(t,e,r){if(this.value=void 0,this.__pendingValue=void 0,2!==r.length||""!==r[0]||""!==r[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=r}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=g,t(this)}if(this.__pendingValue===g)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=g}}class E extends P{constructor(t,e,r){super(t,e,r),this.single=2===r.length&&""===r[0]&&""===r[1]}_createPart(){return new T(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class T extends N{}let k=!1;(()=>{try{const t={get capture(){return k=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class A{constructor(t,e,r){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=r,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=g,t(this)}if(this.__pendingValue===g)return;const t=this.__pendingValue,e=this.value,r=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=$(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=g}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const $=t=>t&&(k?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function D(t){let e=O.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},O.set(t.type,e));let r=e.stringsArray.get(t.strings);if(void 0!==r)return r;const i=t.strings.join(n);return r=e.keyString.get(i),void 0===r&&(r=new o(t,t.getTemplateElement()),e.keyString.set(i,r)),e.stringsArray.set(t.strings,r),r}const O=new Map,V=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Y=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,r,n){const i=e[0];if("."===i){return new E(t,e.slice(1),r).parts}if("@"===i)return[new A(t,e.slice(1),n.eventContext)];if("?"===i)return[new M(t,e.slice(1),r)];return new P(t,e,r).parts}handleTextExpression(t){return new C(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const U=(t,...e)=>new b(t,e,"html",Y)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,R=(t,e)=>`${t}--${e}`;let H=!0;void 0===window.ShadyCSS?H=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),H=!1);const j=t=>e=>{const r=R(e.type,t);let i=O.get(r);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},O.set(r,i));let s=i.stringsArray.get(e.strings);if(void 0!==s)return s;const a=e.strings.join(n);if(s=i.keyString.get(a),void 0===s){const r=e.getTemplateElement();H&&window.ShadyCSS.prepareTemplateDom(r,t),s=new o(e,r),i.keyString.set(a,s)}return i.stringsArray.set(e.strings,s),s},I=["html","svg"],W=new Set,F=(t,e,r)=>{W.add(t);const n=r?r.element:document.createElement("template"),i=e.querySelectorAll("style"),{length:s}=i;if(0===s)return void window.ShadyCSS.prepareTemplateStyles(n,t);const o=document.createElement("style");for(let t=0;t<s;t++){const e=i[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{I.forEach((e=>{const r=O.get(R(e,t));void 0!==r&&r.keyString.forEach((t=>{const{element:{content:e}}=t,r=new Set;Array.from(e.querySelectorAll("style")).forEach((t=>{r.add(t)})),u(t,r)}))}))})(t);const a=n.content;r?function(t,e,r=null){const{element:{content:n},parts:i}=t;if(null==r)return void n.appendChild(e);const s=document.createTreeWalker(n,133,null,!1);let o=p(i),a=0,l=-1;for(;s.nextNode();)for(l++,s.currentNode===r&&(a=h(e),r.parentNode.insertBefore(e,r));-1!==o&&i[o].index===l;){if(a>0){for(;-1!==o;)i[o].index+=a,o=p(i,o);return}o=p(i,o)}}(r,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(n,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(r){a.insertBefore(o,a.firstChild);const t=new Set;t.add(o),u(r,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const L={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},z=(t,e)=>e!==t&&(e==e||t==t),q={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:z};class B extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach(((e,r)=>{const n=this._attributeNameForProperty(r,e);void 0!==n&&(this._attributeToPropertyMap.set(n,r),t.push(n))})),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(((t,e)=>this._classProperties.set(e,t)))}}static createProperty(t,e=q){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const r="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,r,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(n){const i=this[t];this[e]=n,this.requestUpdateInternal(t,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||q}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const r of e)this.createProperty(r,t[r])}}static _attributeNameForProperty(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,r=z){return r(t,e)}static _propertyValueFromAttribute(t,e){const r=e.type,n=e.converter||L,i="function"==typeof n?n:n.fromAttribute;return i?i(t,r):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const r=e.type,n=e.converter;return(n&&n.toAttribute||L.toAttribute)(t,r)}initialize(){this._updateState=0,this._updatePromise=new Promise((t=>this._enableUpdatingResolver=t)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((t,e)=>this[e]=t)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,r){e!==r&&this._attributeToProperty(t,r)}_propertyToAttribute(t,e,r=q){const n=this.constructor,i=n._attributeNameForProperty(t,r);if(void 0!==i){const t=n._propertyValueToAttribute(e,r);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(i):this.setAttribute(i,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const r=this.constructor,n=r._attributeToPropertyMap.get(t);if(void 0!==n){const t=r.getPropertyOptions(n);this._updateState=16|this._updateState,this[n]=r._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,r){let n=!0;if(void 0!==t){const i=this.constructor;r=r||i.getPropertyOptions(t),i._valueHasChanged(this[t],e,r.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==r.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,r))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((t,e)=>this._propertyToAttribute(e,this[e],t))),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}B.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const J=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(r){r.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}};function X(t){return(e,r)=>void 0!==r?((t,e,r)=>{e.constructor.createProperty(r,t)})(t,e,r):J(t,e)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Z=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol();class K{constructor(t,e){if(e!==G)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(Z?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const Q={};class tt extends B{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,r)=>t.reduceRight(((t,r)=>Array.isArray(r)?e(r,t):(t.add(r),t)),r),r=e(t,new Set),n=[];r.forEach((t=>n.unshift(t))),this._styles=n}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map((t=>{if(t instanceof CSSStyleSheet&&!Z){const e=Array.prototype.slice.call(t.cssRules).reduce(((t,e)=>t+e.cssText),"");return new K(String(e),G)}return t}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Z?this.renderRoot.adoptedStyleSheets=t.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((t=>t.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==Q&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)})))}render(){return Q}}tt.finalized=!0,tt.render=(t,e,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const i=n.scopeName,s=V.has(e),o=H&&11===e.nodeType&&!!e.host,a=o&&!W.has(i),l=a?document.createDocumentFragment():e;if(((t,e,n)=>{let i=V.get(e);void 0===i&&(r(e,e.firstChild),V.set(e,i=new C(Object.assign({templateFactory:D},n))),i.appendInto(e)),i.setValue(t),i.commit()})(t,l,Object.assign({templateFactory:j(i)},n)),a){const t=V.get(l);V.delete(l);const n=t.value instanceof _?t.value.template:void 0;F(i,l,n),r(e,e.firstChild),e.appendChild(l),V.set(e,t)}!s&&o&&window.ShadyCSS.styleElement(e.host)};var et=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,rt="[^\\s]+",nt=/\[([^]*?)\]/gm;function it(t,e){for(var r=[],n=0,i=t.length;n<i;n++)r.push(t[n].substr(0,e));return r}var st=function(t){return function(e,r){var n=r[t].map((function(t){return t.toLowerCase()})).indexOf(e.toLowerCase());return n>-1?n:null}};function ot(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];for(var n=0,i=e;n<i.length;n++){var s=i[n];for(var o in s)t[o]=s[o]}return t}var at=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],lt=["January","February","March","April","May","June","July","August","September","October","November","December"],ct=it(lt,3),dt={dayNamesShort:it(at,3),dayNames:at,monthNamesShort:ct,monthNames:lt,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10?1:0)*t%10]}},ut=ot({},dt),ht=function(t,e){for(void 0===e&&(e=2),t=String(t);t.length<e;)t="0"+t;return t},pt={D:function(t){return String(t.getDate())},DD:function(t){return ht(t.getDate())},Do:function(t,e){return e.DoFn(t.getDate())},d:function(t){return String(t.getDay())},dd:function(t){return ht(t.getDay())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return String(t.getMonth()+1)},MM:function(t){return ht(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},YY:function(t){return ht(String(t.getFullYear()),4).substr(2)},YYYY:function(t){return ht(t.getFullYear(),4)},h:function(t){return String(t.getHours()%12||12)},hh:function(t){return ht(t.getHours()%12||12)},H:function(t){return String(t.getHours())},HH:function(t){return ht(t.getHours())},m:function(t){return String(t.getMinutes())},mm:function(t){return ht(t.getMinutes())},s:function(t){return String(t.getSeconds())},ss:function(t){return ht(t.getSeconds())},S:function(t){return String(Math.round(t.getMilliseconds()/100))},SS:function(t){return ht(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return ht(t.getMilliseconds(),3)},a:function(t,e){return t.getHours()<12?e.amPm[0]:e.amPm[1]},A:function(t,e){return t.getHours()<12?e.amPm[0].toUpperCase():e.amPm[1].toUpperCase()},ZZ:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+ht(100*Math.floor(Math.abs(e)/60)+Math.abs(e)%60,4)},Z:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+ht(Math.floor(Math.abs(e)/60),2)+":"+ht(Math.abs(e)%60,2)}},mt=function(t){return+t-1},ft=[null,"[1-9]\\d?"],gt=[null,rt],yt=["isPm",rt,function(t,e){var r=t.toLowerCase();return r===e.amPm[0]?0:r===e.amPm[1]?1:null}],_t=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(t){var e=(t+"").match(/([+-]|\d\d)/gi);if(e){var r=60*+e[1]+parseInt(e[2],10);return"+"===e[0]?r:-r}return 0}],vt=(st("monthNamesShort"),st("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var wt=function(t,e,r){if(void 0===e&&(e=vt.default),void 0===r&&(r={}),"number"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date pass to format");var n=[];e=(e=vt[e]||e).replace(nt,(function(t,e){return n.push(e),"@@@"}));var i=ot(ot({},ut),r);return(e=e.replace(et,(function(e){return pt[e](t,i)}))).replace(/@@@/g,(function(){return n.shift()}))},bt=(function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}}(),function(t,e,r,n){n=n||{},r=null==r?{}:r;var i=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return i.detail=r,t.dispatchEvent(i),i}),St=new Set(["call-service","divider","section","weblink","cast","select"]),xt={alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"};const Pt=["battery","car_charger","consumer","grid","home","hydro","pool","producer","solar","wind"],Nt={battery:{consumer:!0,icon:"mdi:battery-outline",name:"battery",producer:!0},car_charger:{consumer:!0,icon:"mdi:car-electric",name:"car"},consumer:{consumer:!0,icon:"mdi:lightbulb",name:"consumer"},grid:{icon:"mdi:transmission-tower",name:"grid"},home:{consumer:!0,icon:"mdi:home-assistant",name:"home"},hydro:{icon:"mdi:hydro-power",name:"hydro",producer:!0},pool:{consumer:!0,icon:"mdi:pool",name:"pool"},producer:{icon:"mdi:lightning-bolt-outline",name:"producer",producer:!0},solar:{icon:"mdi:solar-power",name:"solar",producer:!0},wind:{icon:"mdi:wind-turbine",name:"wind",producer:!0}},Ct={decimals:2,display_abs:!0,name:"",unit_of_display:"W"},Mt={type:"",title:void 0,animation:"flash",entities:[]},Et=((t,...e)=>{const r=e.reduce(((e,r,n)=>e+(t=>{if(t instanceof K)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(r)+t[n+1]),t[0]);return new K(r,G)})`
  * {
    box-sizing: border-box;
  }

  p {
    margin: 4px 0 4px 0;

    text-align: center;
  }

  .card-content {
    display: grid;
    overflow: auto;

    grid-template-columns: 1.5fr 1fr 1.5fr;
    column-gap: 10px;
  }

  #center-panel {
    display: flex;

    height: 100%;

    align-items: center;
    justify-content: center;
    grid-column: 2;
    flex-wrap: wrap;
  }

  #center-panel > div {
    display: flex;
    overflow: hidden;

    width: 100%;
    height: 100%;
    max-height: 200px;

    flex-basis: 50%;
    flex-flow: column;
  }

  #center-panel > div > p {
    flex: 0 1 auto;
  }

  .bar-wrapper {
    position: relative;

    width: 50%;
    height: 80%;
    margin: auto;

    flex: 1 1 auto;
  }

  bar {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
  }

  item {
    display: block;
    overflow: hidden;

    margin-bottom: 10px;

    cursor: pointer;
  }

  #right-panel > item > value {
    float: left;
  }

  #right-panel > item > badge {
    float: right;
  }

  badge {
    float: left;

    width: 50%;
    padding: 4px;

    border: 1px solid;
    border-color: var(--disabled-text-color);
    border-radius: 1em;
  }

  icon > ha-icon {
    display: block;

    width: 24px;
    margin: 0 auto;

    color: var(--paper-item-icon-color);
  }

  value {
    float: right;
  }

  /**********
  Mobile View
  **********/
  @media only screen and (max-width: 450px) {
    .card-content {
      grid-template-columns: 1fr 1fr 1fr;
    }
    item > badge,
    item > value {
      display: block;
      float: none !important;

      width: 72px;
      margin: 0 auto;
    }

    .arrow {
      margin: 0px 8px;
    }
  }

  /**************
  ARROW ANIMATION
  **************/

  .blank {
    width: 54px;
    height: 4px;
    margin: 8px auto 8px auto;
    opacity: 0.3;
    background-color: var(--secondary-text-color);
  }

  .arrow-color {
    fill: var(--secondary-text-color);
    fill-opacity: 0.8;
  }

  #a-flash {
    animation: flash 3s infinite steps(1);
    fill: var(--secondary-text-color);
    fill-opacity: 0.3;
  }

  @keyframes flash {
    0%,
    66% {
      fill-opacity: 0.3;
      fill: var(--secondary-text-color);
    }
    33% {
      fill-opacity: 0.8;
      fill: var(--secondary-text-color);
    }
  }

  #a-slide-right {
    animation: slide-right 3s linear infinite both;
  }
  @keyframes slide-right {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      -webkit-transform: translateX(48px);
      transform: translateX(48px);
    }
  }
  #a-slide-left {
    animation: slide-left 3s linear infinite both;
  }
  @keyframes slide-left {
    0% {
      -webkit-transform: translateX(48px);
      transform: translateX(48px);
    }
    100% {
      -webkit-transform: translateX(0px);
      transform: translateX(0px);
    }
  }
`;console.info("%c POWER-DISTRIBUTION-CARD %c 1.7.0","font-weight: 500; color: white; background: #03a9f4;","font-weight: 500; color: #03a9f4; background: white;");let Tt=class extends tt{constructor(){super(...arguments),this._entities=[]}static async getConfigElement(){return document.createElement("power-distribution-card-editor")}static getStubConfig(){return{entities:[{solar:"sensor.solar"},{grid:"sensor.grid"},{home:"sensor.home"}]}}async setConfig(t){if(t.disable_animation&&(console.warn("DEPRACATION: The disable_animation setting is considered deprecated! Please use 'animation: none' instead"),t.animation="none"),this._config=Object.assign({},Mt,t),!t.entities)throw new Error("You need to set a entities attribute!");this._entities=[],t.entities.forEach((t=>{for(const[e,r]of Object.entries(t)){let t;if(t="string"==typeof r?{entity:r}:r,!Pt.includes(e))throw new Error("The preset `"+e+"` is not a valid entry. Please choose a Preset from the List.");{if(!t.entity)throw new Error("You need to pass a entity_id to an item for it to work!");const r=Object.assign({},Ct,Nt[e],t);r.preset=e,this._entities.push(r)}}}))}firstUpdated(){if(this._configFinished)return;const t=this._config;this._entities.forEach(((t,e)=>{if(!t.entity)return;const r=this.hass.states[t.entity].attributes.unit_of_measurement;t.unit_of_measurement||(this._entities[e].unit_of_measurement=r||"W")}));const e=this._config.center;if("none"!==e&&"object"==typeof e&&e.type)this._card=this._createCardElement(e);else if("none"!==e){const r=[];null==e||e.forEach((e=>{const n=Object.keys(e)[0];if("autarky"!==n&&"ratio"!==n)throw new Error("You cannot add Bar: "+n);"string"==typeof e[n]&&t.center?r.push({[n]:{entity:e[n]}}):r.push(e)})),this._config.center=r}this._configFinished=!0}showWarning(t){return U` <hui-warning>${t}</hui-warning> `}static get styles(){return Et}_val(t){let e=t.invert_value?-1:1;"kW"==t.unit_of_measurement&&(e*=1e3);const r=t.attribute||null,n=t.entity?Number(r?this.hass.states[t.entity].attributes[r]:this.hass.states[t.entity].state):0;return t.entity?n*e:0}render(){const t=[],e=[],r=[];let n=0,i=0;this._entities.forEach(((e,s)=>{const o=this._val(e);e.calc_excluded||(e.producer&&o>0&&(i+=o),e.consumer&&o<0&&(n-=o));const a=this._render_item(o,e,s);switch(s%2){case 0:t.push(a);break;case 1:r.push(a)}}));const s=this._config.center;return"none"===s||("object"==typeof s&&s.type?e.push(this._createCardElement(s)):e.push(this._render_bars(n,i))),U`<ha-card .header=${this._config.title}>
      <div class="card-content">
        <div id="left-panel">${t}</div>
        <div id="center-panel">${e}</div>
        <div id="right-panel">${r}</div>
      </div>
    </ha-card>`}_moreInfo(t){bt(this,"hass-more-info",{entityId:t.currentTarget.entity})}_render_item(t,e,r){const n=e.invert_arrow?-1*t:t;t=e.display_abs?Math.abs(t):t;let i="W";switch(e.unit_of_display){case"kW":case"kWh":t/=1e3,i=e.unit_of_display;break;case"adaptive":t>999?(t/=1e3,i="kW"):i="W"}const s=10**(e.decimals||0==e.decimals?e.decimals:2);return t=Math.round(t*s)/s,U`
      <item .entity=${e.entity} @click="${this._moreInfo}">
        <badge>
          <icon>
            <ha-icon data-state="${0==t?"unavaiable":"on"}" icon="${e.icon}"></ha-icon>
          </icon>
          <p class="subtitle">${e.name}</p>
        </badge>
        <value>
          <p>${t} ${i}</p>
          ${this._render_arrow(0==n?"none":r%2==0?n>0?"right":"left":n>0?"left":"right",r)}
        <value
      </item>
    `}_render_arrow(t,e){const r=this._config.animation;return"none"==t?U` <div class="blank"></div> `:U`
        <svg width="57" height="18" class="arrow">
          <defs>
            <polygon id="arrow-right" points="0 0, 0 16, 16 8" />
            <polygon id="arrow-left" points="16 0, 16 16, 0 8" />
            <g id="slide-${e}" class="arrow-color">
              <use href="#arrow-${t}" x="-36" />
              <use href="#arrow-${t}" x="-12" />
              <use href="#arrow-${t}" x="12" />
              <use href="#arrow-${t}" x="36" />
            </g>
            <g id="flash-${e}">
              <use
                href="#arrow-${t}"
                x="0"
                style="animation-delay: ${"right"==t?0:2}s;"
                id="a-flash"
              />
              <use href="#arrow-${t}" x="20" style="animation-delay: 1s;" id="a-flash" />
              <use
                href="#arrow-${t}"
                x="40"
                style="animation-delay: ${"right"==t?2:0}s;"
                id="a-flash"
              />
            </g>
            <g id="none-${e}" class="arrow-color">
              <use href="#arrow-${t}" x="0" />
              <use href="#arrow-${t}" x="20" />
              <use href="#arrow-${t}" x="40" />
            </g>
          </defs>
          <use href="#${r}-${e}" id="a-${r}-${t}" />
        </svg>
      `}_render_bars(t,e){var r;if("none"==this._config.center)return U``;let n,i,s={},o={};return null===(r=this._config.center)||void 0===r||r.forEach((t=>{t.autarky&&(s=t.autarky),t.ratio&&(o=t.ratio)})),n=o.entity?this._val(o):0!=e?Math.min(Math.round(100*Math.abs(t)/e),100):0,i=s.entity?this._val(s):0!=t?Math.min(Math.round(100*e/Math.abs(t)),100):0,U`
      <div class="ratio-bar">
        <p id="ratio-percentage">${n}%</p>
        <div class="bar-wrapper">
          <bar style="height:${n}%; background-color:${o.bar_color||"var(--dark-color)"};" />
        </div>
        <p id="ratio">${o.name||"ratio"}</p>
      </div>
      <div class="autarky-bar">
        <p id="autarky-percentage">${i}%</p>
        <div class="bar-wrapper">
          <bar style="height:${i}%; background-color:${s.bar_color||"var(--dark-color)"};" />
        </div>
        <p id="autarky">${s.name||"autarky"}</p>
      </div>
    `}_createCardElement(t){const e=function(t,e){void 0===e&&(e=!1);var r=function(t,e){return n("hui-error-card",{type:"error",error:t,config:e})},n=function(t,e){var n=window.document.createElement(t);try{n.setConfig(e)}catch(n){return console.error(t,n),r(n.message,e)}return n};if(!t||"object"!=typeof t||!e&&!t.type)return r("No type defined",t);var i=t.type;if(i&&i.startsWith("custom:"))i=i.substr("custom:".length);else if(e)if(St.has(i))i="hui-"+i+"-row";else{if(!t.entity)return r("Invalid config given.",t);var s=t.entity.split(".",1)[0];i="hui-"+(xt[s]||"text")+"-entity-row"}else i="hui-"+i+"-card";if(customElements.get(i))return n(i,t);var o=r("Custom element doesn't exist: "+t.type+".",t);o.style.display="None";var a=setTimeout((function(){o.style.display=""}),2e3);return customElements.whenDefined(t.type).then((function(){clearTimeout(a),bt(o,"ll-rebuild",{},o)})),o}(t);return this.hass&&(e.hass=this.hass),e.addEventListener("ll-rebuild",(r=>{r.stopPropagation(),this._rebuildCard(e,t)}),{once:!0}),e}_rebuildCard(t,e){const r=this._createCardElement(e);t.parentElement&&t.parentElement.replaceChild(r,t),this._card===t&&(this._card=r)}};var kt;t([X()],Tt.prototype,"hass",void 0),t([X()],Tt.prototype,"_configFinished",void 0),t([X()],Tt.prototype,"_config",void 0),t([X()],Tt.prototype,"_card",void 0),Tt=t([(kt="power-distribution-card",t=>"function"==typeof t?((t,e)=>(window.customElements.define(t,e),e))(kt,t):((t,e)=>{const{kind:r,elements:n}=e;return{kind:r,elements:n,finisher(e){window.customElements.define(t,e)}}})(kt,t))],Tt);export{Tt as PowerDistributionCard};
