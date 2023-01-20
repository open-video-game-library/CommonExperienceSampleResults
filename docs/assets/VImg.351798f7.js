import{D as Hn,p as fe,E as at,c as A,G as fn,H as va,J as eo,j as T,F as wa,K as to,h as Pe,n as gn,q as mn,L as Ea,M as Re,g as Vr,N as sh,d as ba,i as rh,s as Fr,t as yt,a as ih,O as Ta,o as oh,P as ah,Q as uh,f as lh,R as ch,S as hh,T as dh,U as fh,b as q,V as sr,W as gh,X as mh,r as ke,Y as $r,Z as ph,_ as yh,$ as no,u as _a,a0 as Sa,a1 as vh,a2 as so,I as wh,a3 as Br,a4 as Eh,a5 as rr,a6 as Ca,a7 as Ia,a8 as bh,a9 as Th,aa as _h,ab as Sh}from"./index.18dfeb5c.js";import{m as ut,a as Ve,u as Ch}from"./tag.b521259a.js";const Aa=["top","bottom"],Ih=["start","end","left","right"];function Ah(t,e){let[n,s]=t.split(" ");return s||(s=Hn(Aa,n)?"start":Hn(Ih,n)?"top":"center"),{side:ro(n,e),align:ro(s,e)}}function ro(t,e){return t==="start"?e?"right":"left":t==="end"?e?"left":"right":t}function mw(t){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[t.side],align:t.align}}function pw(t){return{side:t.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[t.align]}}function yw(t){return{side:t.align,align:t.side}}function vw(t){return Hn(Aa,t.side)?"y":"x"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},kh=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],u=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(u>>10)),e[s++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Da={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,u=r+2<t.length,l=u?t[r+2]:0,c=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;u||(f=64,o||(d=64)),s.push(n[c],n[h],n[d],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ka(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):kh(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw Error();const d=i<<2|a>>4;if(s.push(d),l!==64){const f=a<<4&240|l>>2;if(s.push(f),h!==64){const p=l<<6&192|h;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Dh=function(t){const e=ka(t);return Da.encodeByteArray(e,!0)},Gn=function(t){return Dh(t).replace(/\./g,"")},Rh=function(t){try{return Da.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Nh(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function xh(){try{return typeof indexedDB=="object"}catch{return!1}}function Lh(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function Oh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mh=()=>Oh().__FIREBASE_DEFAULTS__,Ph=()=>{if(typeof process>"u"||typeof{}>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Vh=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Rh(t[1]);return e&&JSON.parse(e)},Ra=()=>{try{return Mh()||Ph()||Vh()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Fh=t=>{var e,n;return(n=(e=Ra())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Na=t=>{const e=Fh(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},$h=()=>{var t;return(t=Ra())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Gn(JSON.stringify(n)),Gn(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh="FirebaseError";class lt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Uh,Object.setPrototypeOf(this,lt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,La.prototype.create)}}class La{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?qh(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new lt(r,a,s)}}function qh(t,e){return t.replace(jh,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const jh=/\{\$([^}]+)}/g;function ir(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(io(i)&&io(o)){if(!ir(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function io(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(t){return t&&t._delegate?t._delegate:t}class bt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Bh;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Gh(e))try{this.getOrInitializeService({instanceIdentifier:Qe})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Qe){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qe){return this.instances.has(e)}getOptions(e=Qe){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Hh(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Qe){return this.component?this.component.multipleInstances?e:Qe:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hh(t){return t===Qe?void 0:t}function Gh(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new zh(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var P;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(P||(P={}));const Wh={debug:P.DEBUG,verbose:P.VERBOSE,info:P.INFO,warn:P.WARN,error:P.ERROR,silent:P.SILENT},Qh=P.INFO,Xh={[P.DEBUG]:"log",[P.VERBOSE]:"log",[P.INFO]:"info",[P.WARN]:"warn",[P.ERROR]:"error"},Yh=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Xh[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Oa{constructor(e){this.name=e,this._logLevel=Qh,this._logHandler=Yh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in P))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Wh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,P.DEBUG,...e),this._logHandler(this,P.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,P.VERBOSE,...e),this._logHandler(this,P.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,P.INFO,...e),this._logHandler(this,P.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,P.WARN,...e),this._logHandler(this,P.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,P.ERROR,...e),this._logHandler(this,P.ERROR,...e)}}const Jh=(t,e)=>e.some(n=>t instanceof n);let oo,ao;function Zh(){return oo||(oo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ed(){return ao||(ao=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ma=new WeakMap,or=new WeakMap,Pa=new WeakMap,Vs=new WeakMap,Ur=new WeakMap;function td(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n($e(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ma.set(n,t)}).catch(()=>{}),Ur.set(e,t),e}function nd(t){if(or.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});or.set(t,e)}let ar={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return or.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Pa.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $e(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function sd(t){ar=t(ar)}function rd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Fs(this),e,...n);return Pa.set(s,e.sort?e.sort():[e]),$e(s)}:ed().includes(t)?function(...e){return t.apply(Fs(this),e),$e(Ma.get(this))}:function(...e){return $e(t.apply(Fs(this),e))}}function id(t){return typeof t=="function"?rd(t):(t instanceof IDBTransaction&&nd(t),Jh(t,Zh())?new Proxy(t,ar):t)}function $e(t){if(t instanceof IDBRequest)return td(t);if(Vs.has(t))return Vs.get(t);const e=id(t);return e!==t&&(Vs.set(t,e),Ur.set(e,t)),e}const Fs=t=>Ur.get(t);function od(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=$e(o);return s&&o.addEventListener("upgradeneeded",u=>{s($e(o.result),u.oldVersion,u.newVersion,$e(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(u=>{i&&u.addEventListener("close",()=>i()),r&&u.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const ad=["get","getKey","getAll","getAllKeys","count"],ud=["put","add","delete","clear"],$s=new Map;function uo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($s.get(e))return $s.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=ud.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||ad.includes(n)))return;const i=async function(o,...a){const u=this.transaction(o,r?"readwrite":"readonly");let l=u.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&u.done]))[0]};return $s.set(e,i),i}sd(t=>({...t,get:(e,n,s)=>uo(e,n)||t.get(e,n,s),has:(e,n)=>!!uo(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(cd(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function cd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ur="@firebase/app",lo="0.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st=new Oa("@firebase/app"),hd="@firebase/app-compat",dd="@firebase/analytics-compat",fd="@firebase/analytics",gd="@firebase/app-check-compat",md="@firebase/app-check",pd="@firebase/auth",yd="@firebase/auth-compat",vd="@firebase/database",wd="@firebase/database-compat",Ed="@firebase/functions",bd="@firebase/functions-compat",Td="@firebase/installations",_d="@firebase/installations-compat",Sd="@firebase/messaging",Cd="@firebase/messaging-compat",Id="@firebase/performance",Ad="@firebase/performance-compat",kd="@firebase/remote-config",Dd="@firebase/remote-config-compat",Rd="@firebase/storage",Nd="@firebase/storage-compat",xd="@firebase/firestore",Ld="@firebase/firestore-compat",Od="firebase",Md="9.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr="[DEFAULT]",Pd={[ur]:"fire-core",[hd]:"fire-core-compat",[fd]:"fire-analytics",[dd]:"fire-analytics-compat",[md]:"fire-app-check",[gd]:"fire-app-check-compat",[pd]:"fire-auth",[yd]:"fire-auth-compat",[vd]:"fire-rtdb",[wd]:"fire-rtdb-compat",[Ed]:"fire-fn",[bd]:"fire-fn-compat",[Td]:"fire-iid",[_d]:"fire-iid-compat",[Sd]:"fire-fcm",[Cd]:"fire-fcm-compat",[Id]:"fire-perf",[Ad]:"fire-perf-compat",[kd]:"fire-rc",[Dd]:"fire-rc-compat",[Rd]:"fire-gcs",[Nd]:"fire-gcs-compat",[xd]:"fire-fst",[Ld]:"fire-fst-compat","fire-js":"fire-js",[Od]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn=new Map,cr=new Map;function Vd(t,e){try{t.container.addComponent(e)}catch(n){st.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xt(t){const e=t.name;if(cr.has(e))return st.debug(`There were multiple attempts to register component ${e}.`),!1;cr.set(e,t);for(const n of Kn.values())Vd(n,t);return!0}function Va(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Be=new La("app","Firebase",Fd);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new bt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Be.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa=Md;function $a(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:lr,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Be.create("bad-app-name",{appName:String(r)});if(n||(n=$h()),!n)throw Be.create("no-options");const i=Kn.get(r);if(i){if(ir(n,i.options)&&ir(s,i.config))return i;throw Be.create("duplicate-app",{appName:r})}const o=new Kh(r);for(const u of cr.values())o.addComponent(u);const a=new $d(n,s,o);return Kn.set(r,a),a}function Ba(t=lr){const e=Kn.get(t);if(!e&&t===lr)return $a();if(!e)throw Be.create("no-app",{appName:t});return e}function Ue(t,e,n){var s;let r=(s=Pd[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),st.warn(a.join(" "));return}Xt(new bt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd="firebase-heartbeat-database",Ud=1,Yt="firebase-heartbeat-store";let Bs=null;function Ua(){return Bs||(Bs=od(Bd,Ud,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Yt)}}}).catch(t=>{throw Be.create("idb-open",{originalErrorMessage:t.message})})),Bs}async function qd(t){try{return(await Ua()).transaction(Yt).objectStore(Yt).get(qa(t))}catch(e){if(e instanceof lt)st.warn(e.message);else{const n=Be.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});st.warn(n.message)}}}async function co(t,e){try{const s=(await Ua()).transaction(Yt,"readwrite");return await s.objectStore(Yt).put(e,qa(t)),s.done}catch(n){if(n instanceof lt)st.warn(n.message);else{const s=Be.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});st.warn(s.message)}}}function qa(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd=1024,zd=30*24*60*60*1e3;class Hd{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Kd(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ho();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=zd}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ho(),{heartbeatsToSend:n,unsentEntries:s}=Gd(this._heartbeatsCache.heartbeats),r=Gn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ho(){return new Date().toISOString().substring(0,10)}function Gd(t,e=jd){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),fo(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),fo(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Kd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xh()?Lh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await qd(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return co(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return co(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function fo(t){return Gn(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(t){Xt(new bt("platform-logger",e=>new ld(e),"PRIVATE")),Xt(new bt("heartbeat",e=>new Hd(e),"PRIVATE")),Ue(ur,lo,t),Ue(ur,lo,"esm2017"),Ue("fire-js","")}Wd("");var Qd="firebase",Xd="9.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ue(Qd,Xd,"app");var Yd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},E,qr=qr||{},I=Yd||self;function Wn(){}function hs(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function pn(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Jd(t){return Object.prototype.hasOwnProperty.call(t,Us)&&t[Us]||(t[Us]=++Zd)}var Us="closure_uid_"+(1e9*Math.random()>>>0),Zd=0;function ef(t,e,n){return t.call.apply(t.bind,arguments)}function tf(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function ae(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ae=ef:ae=tf,ae.apply(null,arguments)}function xn(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function se(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Ge(){this.s=this.s,this.o=this.o}var nf=0;Ge.prototype.s=!1;Ge.prototype.na=function(){!this.s&&(this.s=!0,this.M(),nf!=0)&&Jd(this)};Ge.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ja=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function jr(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function go(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(hs(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function ue(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ue.prototype.h=function(){this.defaultPrevented=!0};var sf=function(){if(!I.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{I.addEventListener("test",Wn,e),I.removeEventListener("test",Wn,e)}catch{}return t}();function Qn(t){return/^[\s\xa0]*$/.test(t)}var mo=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function qs(t,e){return t<e?-1:t>e?1:0}function ds(){var t=I.navigator;return t&&(t=t.userAgent)?t:""}function _e(t){return ds().indexOf(t)!=-1}function zr(t){return zr[" "](t),t}zr[" "]=Wn;function rf(t){var e=uf;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var of=_e("Opera"),Tt=_e("Trident")||_e("MSIE"),za=_e("Edge"),hr=za||Tt,Ha=_e("Gecko")&&!(ds().toLowerCase().indexOf("webkit")!=-1&&!_e("Edge"))&&!(_e("Trident")||_e("MSIE"))&&!_e("Edge"),af=ds().toLowerCase().indexOf("webkit")!=-1&&!_e("Edge");function Ga(){var t=I.document;return t?t.documentMode:void 0}var Xn;e:{var js="",zs=function(){var t=ds();if(Ha)return/rv:([^\);]+)(\)|;)/.exec(t);if(za)return/Edge\/([\d\.]+)/.exec(t);if(Tt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(af)return/WebKit\/(\S+)/.exec(t);if(of)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(zs&&(js=zs?zs[1]:""),Tt){var Hs=Ga();if(Hs!=null&&Hs>parseFloat(js)){Xn=String(Hs);break e}}Xn=js}var uf={};function lf(){return rf(function(){let t=0;const e=mo(String(Xn)).split("."),n=mo("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=qs(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||qs(r[2].length==0,i[2].length==0)||qs(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var dr;if(I.document&&Tt){var po=Ga();dr=po||parseInt(Xn,10)||void 0}else dr=void 0;var cf=dr;function Jt(t,e){if(ue.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ha){e:{try{zr(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:hf[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Jt.X.h.call(this)}}se(Jt,ue);var hf={2:"touch",3:"pen",4:"mouse"};Jt.prototype.h=function(){Jt.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var yn="closure_listenable_"+(1e6*Math.random()|0),df=0;function ff(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++df,this.ba=this.ea=!1}function fs(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Hr(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Ka(t){const e={};for(const n in t)e[n]=t[n];return e}const yo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Wa(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<yo.length;i++)n=yo[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function gs(t){this.src=t,this.g={},this.h=0}gs.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=gr(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new ff(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function fr(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=ja(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(fs(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function gr(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var Gr="closure_lm_"+(1e6*Math.random()|0),Gs={};function Qa(t,e,n,s,r){if(s&&s.once)return Ya(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Qa(t,e[i],n,s,r);return null}return n=Qr(n),t&&t[yn]?t.N(e,n,pn(s)?!!s.capture:!!s,r):Xa(t,e,n,!1,s,r)}function Xa(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=pn(r)?!!r.capture:!!r,a=Wr(t);if(a||(t[Gr]=a=new gs(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=gf(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)sf||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Za(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function gf(){function t(n){return e.call(t.src,t.listener,n)}const e=mf;return t}function Ya(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ya(t,e[i],n,s,r);return null}return n=Qr(n),t&&t[yn]?t.O(e,n,pn(s)?!!s.capture:!!s,r):Xa(t,e,n,!0,s,r)}function Ja(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Ja(t,e[i],n,s,r);else s=pn(s)?!!s.capture:!!s,n=Qr(n),t&&t[yn]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=gr(i,n,s,r),-1<n&&(fs(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Wr(t))&&(e=t.g[e.toString()],t=-1,e&&(t=gr(e,n,s,r)),(n=-1<t?e[t]:null)&&Kr(n))}function Kr(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[yn])fr(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Za(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Wr(e))?(fr(n,t),n.h==0&&(n.src=null,e[Gr]=null)):fs(t)}}}function Za(t){return t in Gs?Gs[t]:Gs[t]="on"+t}function mf(t,e){if(t.ba)t=!0;else{e=new Jt(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Kr(t),t=n.call(s,e)}return t}function Wr(t){return t=t[Gr],t instanceof gs?t:null}var Ks="__closure_events_fn_"+(1e9*Math.random()>>>0);function Qr(t){return typeof t=="function"?t:(t[Ks]||(t[Ks]=function(e){return t.handleEvent(e)}),t[Ks])}function ee(){Ge.call(this),this.i=new gs(this),this.P=this,this.I=null}se(ee,Ge);ee.prototype[yn]=!0;ee.prototype.removeEventListener=function(t,e,n,s){Ja(this,t,e,n,s)};function ne(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new ue(e,t);else if(e instanceof ue)e.target=e.target||t;else{var r=e;e=new ue(s,t),Wa(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Ln(o,s,!0,e)&&r}if(o=e.g=t,r=Ln(o,s,!0,e)&&r,r=Ln(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Ln(o,s,!1,e)&&r}ee.prototype.M=function(){if(ee.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)fs(n[s]);delete t.g[e],t.h--}}this.I=null};ee.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};ee.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Ln(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,u=o.ha||o.src;o.ea&&fr(t.i,o),r=a.call(u,s)!==!1&&r}}return r&&!s.defaultPrevented}var Xr=I.JSON.stringify;function pf(){var t=nu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class yf{constructor(){this.h=this.g=null}add(e,n){const s=eu.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var eu=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new vf,t=>t.reset());class vf{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function wf(t){I.setTimeout(()=>{throw t},0)}function tu(t,e){mr||Ef(),pr||(mr(),pr=!0),nu.add(t,e)}var mr;function Ef(){var t=I.Promise.resolve(void 0);mr=function(){t.then(bf)}}var pr=!1,nu=new yf;function bf(){for(var t;t=pf();){try{t.h.call(t.g)}catch(n){wf(n)}var e=eu;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}pr=!1}function ms(t,e){ee.call(this),this.h=t||1,this.g=e||I,this.j=ae(this.lb,this),this.l=Date.now()}se(ms,ee);E=ms.prototype;E.ca=!1;E.R=null;E.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ne(this,"tick"),this.ca&&(Yr(this),this.start()))}};E.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Yr(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}E.M=function(){ms.X.M.call(this),Yr(this),delete this.g};function Jr(t,e,n){if(typeof t=="function")n&&(t=ae(t,n));else if(t&&typeof t.handleEvent=="function")t=ae(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:I.setTimeout(t,e||0)}function su(t){t.g=Jr(()=>{t.g=null,t.i&&(t.i=!1,su(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Tf extends Ge{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:su(this)}M(){super.M(),this.g&&(I.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zt(t){Ge.call(this),this.h=t,this.g={}}se(Zt,Ge);var vo=[];function ru(t,e,n,s){Array.isArray(n)||(n&&(vo[0]=n.toString()),n=vo);for(var r=0;r<n.length;r++){var i=Qa(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function iu(t){Hr(t.g,function(e,n){this.g.hasOwnProperty(n)&&Kr(e)},t),t.g={}}Zt.prototype.M=function(){Zt.X.M.call(this),iu(this)};Zt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ps(){this.g=!0}ps.prototype.Aa=function(){this.g=!1};function _f(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+l+"&"):o+(c+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function Sf(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function pt(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+If(t,n)+(s?" "+s:"")})}function Cf(t,e){t.info(function(){return"TIMEOUT: "+e})}ps.prototype.info=function(){};function If(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Xr(n)}catch{return e}}var ct={},wo=null;function ys(){return wo=wo||new ee}ct.Pa="serverreachability";function ou(t){ue.call(this,ct.Pa,t)}se(ou,ue);function en(t){const e=ys();ne(e,new ou(e))}ct.STAT_EVENT="statevent";function au(t,e){ue.call(this,ct.STAT_EVENT,t),this.stat=e}se(au,ue);function de(t){const e=ys();ne(e,new au(e,t))}ct.Qa="timingevent";function uu(t,e){ue.call(this,ct.Qa,t),this.size=e}se(uu,ue);function vn(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return I.setTimeout(function(){t()},e)}var vs={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},lu={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Zr(){}Zr.prototype.h=null;function Eo(t){return t.h||(t.h=t.i())}function cu(){}var wn={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ei(){ue.call(this,"d")}se(ei,ue);function ti(){ue.call(this,"c")}se(ti,ue);var yr;function ws(){}se(ws,Zr);ws.prototype.g=function(){return new XMLHttpRequest};ws.prototype.i=function(){return{}};yr=new ws;function En(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Zt(this),this.O=Af,t=hr?125:void 0,this.T=new ms(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new hu}function hu(){this.i=null,this.g="",this.h=!1}var Af=45e3,vr={},Yn={};E=En.prototype;E.setTimeout=function(t){this.O=t};function wr(t,e,n){t.K=1,t.v=bs(xe(e)),t.s=n,t.P=!0,du(t,null)}function du(t,e){t.F=Date.now(),bn(t),t.A=xe(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Eu(n.i,"t",s),t.C=0,n=t.l.H,t.h=new hu,t.g=Uu(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Tf(ae(t.La,t,t.g),t.N)),ru(t.S,t.g,"readystatechange",t.ib),e=t.H?Ka(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),en(),_f(t.j,t.u,t.A,t.m,t.U,t.s)}E.ib=function(t){t=t.target;const e=this.L;e&&De(t)==3?e.l():this.La(t)};E.La=function(t){try{if(t==this.g)e:{const c=De(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||hr||this.g&&(this.h.h||this.g.fa()||So(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?en(3):en(2)),Es(this);var n=this.g.aa();this.Y=n;t:if(fu(this)){var s=So(this.g);t="";var r=s.length,i=De(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Xe(this),zt(this);var o="";break t}this.h.i=new I.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Sf(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Qn(a)){var l=a;break t}}l=null}if(n=l)pt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Er(this,n);else{this.i=!1,this.o=3,de(12),Xe(this),zt(this);break e}}this.P?(gu(this,c,o),hr&&this.i&&c==3&&(ru(this.S,this.T,"tick",this.hb),this.T.start())):(pt(this.j,this.m,o,null),Er(this,o)),c==4&&Xe(this),this.i&&!this.I&&(c==4?Vu(this.l,this):(this.i=!1,bn(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,de(12)):(this.o=0,de(13)),Xe(this),zt(this)}}}catch{}finally{}};function fu(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function gu(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=kf(t,n),r==Yn){e==4&&(t.o=4,de(14),s=!1),pt(t.j,t.m,null,"[Incomplete Response]");break}else if(r==vr){t.o=4,de(15),pt(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else pt(t.j,t.m,r,null),Er(t,r);fu(t)&&r!=Yn&&r!=vr&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,de(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ui(e),e.K=!0,de(11))):(pt(t.j,t.m,n,"[Invalid Chunked Response]"),Xe(t),zt(t))}E.hb=function(){if(this.g){var t=De(this.g),e=this.g.fa();this.C<e.length&&(Es(this),gu(this,t,e),this.i&&t!=4&&bn(this))}};function kf(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Yn:(n=Number(e.substring(n,s)),isNaN(n)?vr:(s+=1,s+n>e.length?Yn:(e=e.substr(s,n),t.C=s+n,e)))}E.cancel=function(){this.I=!0,Xe(this)};function bn(t){t.V=Date.now()+t.O,mu(t,t.O)}function mu(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=vn(ae(t.gb,t),e)}function Es(t){t.B&&(I.clearTimeout(t.B),t.B=null)}E.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Cf(this.j,this.A),this.K!=2&&(en(),de(17)),Xe(this),this.o=2,zt(this)):mu(this,this.V-t)};function zt(t){t.l.G==0||t.I||Vu(t.l,t)}function Xe(t){Es(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Yr(t.T),iu(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Er(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||br(n.h,t))){if(!t.J&&br(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)es(n),Ss(n);else break e;ai(n),de(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=vn(ae(n.cb,n),6e3));if(1>=_u(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Ye(n,11)}else if((t.J||n.g==t)&&es(n),!Qn(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const c=l[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=t.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var i=s.h;i.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(ni(i,i.h),i.h=null))}if(s.D){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(s.za=y,B(s.F,s.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Bu(s,s.H?s.ka:null,s.V),o.J){Su(s.h,o);var a=o,u=s.J;u&&a.setTimeout(u),a.B&&(Es(a),bn(a)),s.g=o}else Mu(s);0<n.i.length&&Cs(n)}else l[0]!="stop"&&l[0]!="close"||Ye(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Ye(n,7):oi(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}en(4)}catch{}}function Df(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(hs(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Rf(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(hs(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function pu(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(hs(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Rf(t),s=Df(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var yu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Nf(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Ze(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ze){this.h=e!==void 0?e:t.h,Jn(this,t.j),this.s=t.s,this.g=t.g,Zn(this,t.m),this.l=t.l,e=t.i;var n=new tn;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),bo(this,n),this.o=t.o}else t&&(n=String(t).match(yu))?(this.h=!!e,Jn(this,n[1]||"",!0),this.s=Bt(n[2]||""),this.g=Bt(n[3]||"",!0),Zn(this,n[4]),this.l=Bt(n[5]||"",!0),bo(this,n[6]||"",!0),this.o=Bt(n[7]||"")):(this.h=!!e,this.i=new tn(null,this.h))}Ze.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ut(e,To,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ut(e,To,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ut(n,n.charAt(0)=="/"?Of:Lf,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ut(n,Pf)),t.join("")};function xe(t){return new Ze(t)}function Jn(t,e,n){t.j=n?Bt(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Zn(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function bo(t,e,n){e instanceof tn?(t.i=e,Vf(t.i,t.h)):(n||(e=Ut(e,Mf)),t.i=new tn(e,t.h))}function B(t,e,n){t.i.set(e,n)}function bs(t){return B(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Bt(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ut(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,xf),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function xf(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var To=/[#\/\?@]/g,Lf=/[#\?:]/g,Of=/[#\?]/g,Mf=/[#\?@]/g,Pf=/#/g;function tn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ke(t){t.g||(t.g=new Map,t.h=0,t.i&&Nf(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}E=tn.prototype;E.add=function(t,e){Ke(this),this.i=null,t=Rt(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function vu(t,e){Ke(t),e=Rt(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function wu(t,e){return Ke(t),e=Rt(t,e),t.g.has(e)}E.forEach=function(t,e){Ke(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};E.oa=function(){Ke(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};E.W=function(t){Ke(this);let e=[];if(typeof t=="string")wu(this,t)&&(e=e.concat(this.g.get(Rt(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};E.set=function(t,e){return Ke(this),this.i=null,t=Rt(this,t),wu(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};E.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Eu(t,e,n){vu(t,e),0<n.length&&(t.i=null,t.g.set(Rt(t,e),jr(n)),t.h+=n.length)}E.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Rt(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Vf(t,e){e&&!t.j&&(Ke(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(vu(this,s),Eu(this,r,n))},t)),t.j=e}var Ff=class{constructor(t,e){this.h=t,this.g=e}};function bu(t){this.l=t||$f,I.PerformanceNavigationTiming?(t=I.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(I.g&&I.g.Ga&&I.g.Ga()&&I.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var $f=10;function Tu(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function _u(t){return t.h?1:t.g?t.g.size:0}function br(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ni(t,e){t.g?t.g.add(e):t.h=e}function Su(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}bu.prototype.cancel=function(){if(this.i=Cu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Cu(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return jr(t.i)}function si(){}si.prototype.stringify=function(t){return I.JSON.stringify(t,void 0)};si.prototype.parse=function(t){return I.JSON.parse(t,void 0)};function Bf(){this.g=new si}function Uf(t,e,n){const s=n||"";try{pu(t,function(r,i){let o=r;pn(r)&&(o=Xr(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function qf(t,e){const n=new ps;if(I.Image){const s=new Image;s.onload=xn(On,n,s,"TestLoadImage: loaded",!0,e),s.onerror=xn(On,n,s,"TestLoadImage: error",!1,e),s.onabort=xn(On,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=xn(On,n,s,"TestLoadImage: timeout",!1,e),I.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function On(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Tn(t){this.l=t.ac||null,this.j=t.jb||!1}se(Tn,Zr);Tn.prototype.g=function(){return new Ts(this.l,this.j)};Tn.prototype.i=function(t){return function(){return t}}({});function Ts(t,e){ee.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ri,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}se(Ts,ee);var ri=0;E=Ts.prototype;E.open=function(t,e){if(this.readyState!=ri)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,nn(this)};E.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||I).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};E.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_n(this)),this.readyState=ri};E.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,nn(this)),this.g&&(this.readyState=3,nn(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof I.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Iu(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Iu(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}E.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?_n(this):nn(this),this.readyState==3&&Iu(this)}};E.Va=function(t){this.g&&(this.response=this.responseText=t,_n(this))};E.Ua=function(t){this.g&&(this.response=t,_n(this))};E.ga=function(){this.g&&_n(this)};function _n(t){t.readyState=4,t.l=null,t.j=null,t.A=null,nn(t)}E.setRequestHeader=function(t,e){this.v.append(t,e)};E.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};E.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function nn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ts.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var jf=I.JSON.parse;function j(t){ee.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Au,this.K=this.L=!1}se(j,ee);var Au="",zf=/^https?$/i,Hf=["POST","PUT"];E=j.prototype;E.Ka=function(t){this.L=t};E.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():yr.g(),this.C=this.u?Eo(this.u):Eo(yr),this.g.onreadystatechange=ae(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){_o(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=I.FormData&&t instanceof I.FormData,!(0<=ja(Hf,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ru(this),0<this.B&&((this.K=Gf(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ae(this.qa,this)):this.A=Jr(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){_o(this,i)}};function Gf(t){return Tt&&lf()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}E.qa=function(){typeof qr<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ne(this,"timeout"),this.abort(8))};function _o(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ku(t),_s(t)}function ku(t){t.D||(t.D=!0,ne(t,"complete"),ne(t,"error"))}E.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ne(this,"complete"),ne(this,"abort"),_s(this))};E.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),_s(this,!0)),j.X.M.call(this)};E.Ha=function(){this.s||(this.F||this.v||this.l?Du(this):this.fb())};E.fb=function(){Du(this)};function Du(t){if(t.h&&typeof qr<"u"&&(!t.C[1]||De(t)!=4||t.aa()!=2)){if(t.v&&De(t)==4)Jr(t.Ha,0,t);else if(ne(t,"readystatechange"),De(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(yu)[1]||null;if(!r&&I.self&&I.self.location){var i=I.self.location.protocol;r=i.substr(0,i.length-1)}s=!zf.test(r?r.toLowerCase():"")}n=s}if(n)ne(t,"complete"),ne(t,"success");else{t.m=6;try{var o=2<De(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",ku(t)}}finally{_s(t)}}}}function _s(t,e){if(t.g){Ru(t);const n=t.g,s=t.C[0]?Wn:null;t.g=null,t.C=null,e||ne(t,"ready");try{n.onreadystatechange=s}catch{}}}function Ru(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(I.clearTimeout(t.A),t.A=null)}function De(t){return t.g?t.g.readyState:0}E.aa=function(){try{return 2<De(this)?this.g.status:-1}catch{return-1}};E.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};E.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),jf(e)}};function So(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Au:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}E.Ea=function(){return this.m};E.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Nu(t){let e="";return Hr(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function ii(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Nu(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):B(t,e,n))}function Ft(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function xu(t){this.Ca=0,this.i=[],this.j=new ps,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ft("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ft("baseRetryDelayMs",5e3,t),this.bb=Ft("retryDelaySeedMs",1e4,t),this.$a=Ft("forwardChannelMaxRetries",2,t),this.ta=Ft("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new bu(t&&t.concurrentRequestLimit),this.Fa=new Bf,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}E=xu.prototype;E.ma=8;E.G=1;function oi(t){if(Lu(t),t.G==3){var e=t.U++,n=xe(t.F);B(n,"SID",t.I),B(n,"RID",e),B(n,"TYPE","terminate"),Sn(t,n),e=new En(t,t.j,e,void 0),e.K=2,e.v=bs(xe(n)),n=!1,I.navigator&&I.navigator.sendBeacon&&(n=I.navigator.sendBeacon(e.v.toString(),"")),!n&&I.Image&&(new Image().src=e.v,n=!0),n||(e.g=Uu(e.l,null),e.g.da(e.v)),e.F=Date.now(),bn(e)}$u(t)}function Ss(t){t.g&&(ui(t),t.g.cancel(),t.g=null)}function Lu(t){Ss(t),t.u&&(I.clearTimeout(t.u),t.u=null),es(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&I.clearTimeout(t.m),t.m=null)}function Cs(t){Tu(t.h)||t.m||(t.m=!0,tu(t.Ja,t),t.C=0)}function Kf(t,e){return _u(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=vn(ae(t.Ja,t,e),Fu(t,t.C)),t.C++,!0)}E.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new En(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=Ka(i),Wa(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Ou(this,r,e),n=xe(this.F),B(n,"RID",t),B(n,"CVER",22),this.D&&B(n,"X-HTTP-Session-Id",this.D),Sn(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Nu(i)))+"&"+e:this.o&&ii(n,this.o,i)),ni(this.h,r),this.Ya&&B(n,"TYPE","init"),this.O?(B(n,"$req",e),B(n,"SID","null"),r.Z=!0,wr(r,n,null)):wr(r,n,e),this.G=2}}else this.G==3&&(t?Co(this,t):this.i.length==0||Tu(this.h)||Co(this))};function Co(t,e){var n;e?n=e.m:n=t.U++;const s=xe(t.F);B(s,"SID",t.I),B(s,"RID",n),B(s,"AID",t.T),Sn(t,s),t.o&&t.s&&ii(s,t.o,t.s),n=new En(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Ou(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),ni(t.h,n),wr(n,s,e)}function Sn(t,e){t.ia&&Hr(t.ia,function(n,s){B(e,s,n)}),t.l&&pu({},function(n,s){B(e,s,n)})}function Ou(t,e,n){n=Math.min(t.i.length,n);var s=t.l?ae(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let u=0;u<n;u++){let l=r[u].h;const c=r[u].g;if(l-=i,0>l)i=Math.max(0,r[u].h-100),a=!1;else try{Uf(c,o,"req"+l+"_")}catch{s&&s(c)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Mu(t){t.g||t.u||(t.Z=1,tu(t.Ia,t),t.A=0)}function ai(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=vn(ae(t.Ia,t),Fu(t,t.A)),t.A++,!0)}E.Ia=function(){if(this.u=null,Pu(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=vn(ae(this.eb,this),t)}};E.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,de(10),Ss(this),Pu(this))};function ui(t){t.B!=null&&(I.clearTimeout(t.B),t.B=null)}function Pu(t){t.g=new En(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=xe(t.sa);B(e,"RID","rpc"),B(e,"SID",t.I),B(e,"CI",t.L?"0":"1"),B(e,"AID",t.T),B(e,"TYPE","xmlhttp"),Sn(t,e),t.o&&t.s&&ii(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=bs(xe(e)),n.s=null,n.P=!0,du(n,t)}E.cb=function(){this.v!=null&&(this.v=null,Ss(this),ai(this),de(19))};function es(t){t.v!=null&&(I.clearTimeout(t.v),t.v=null)}function Vu(t,e){var n=null;if(t.g==e){es(t),ui(t),t.g=null;var s=2}else if(br(t.h,e))n=e.D,Su(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=ys(),ne(s,new uu(s,n)),Cs(t)}else Mu(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&Kf(t,e)||s==2&&ai(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Ye(t,5);break;case 4:Ye(t,10);break;case 3:Ye(t,6);break;default:Ye(t,2)}}}function Fu(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Ye(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=ae(t.kb,t);n||(n=new Ze("//www.google.com/images/cleardot.gif"),I.location&&I.location.protocol=="http"||Jn(n,"https"),bs(n)),qf(n.toString(),s)}else de(2);t.G=0,t.l&&t.l.va(e),$u(t),Lu(t)}E.kb=function(t){t?(this.j.info("Successfully pinged google.com"),de(2)):(this.j.info("Failed to ping google.com"),de(1))};function $u(t){if(t.G=0,t.la=[],t.l){const e=Cu(t.h);(e.length!=0||t.i.length!=0)&&(go(t.la,e),go(t.la,t.i),t.h.i.length=0,jr(t.i),t.i.length=0),t.l.ua()}}function Bu(t,e,n){var s=n instanceof Ze?xe(n):new Ze(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Zn(s,s.m);else{var r=I.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Ze(null,void 0);s&&Jn(i,s),e&&(i.g=e),r&&Zn(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&B(s,n,e),B(s,"VER",t.ma),Sn(t,s),s}function Uu(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new j(new Tn({jb:!0})):new j(t.ra),e.Ka(t.H),e}function qu(){}E=qu.prototype;E.xa=function(){};E.wa=function(){};E.va=function(){};E.ua=function(){};E.Ra=function(){};function ts(){if(Tt&&!(10<=Number(cf)))throw Error("Environmental error: no available transport.")}ts.prototype.g=function(t,e){return new ve(t,e)};function ve(t,e){ee.call(this),this.g=new xu(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Qn(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Qn(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Nt(this)}se(ve,ee);ve.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;de(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Bu(t,null,t.V),Cs(t)};ve.prototype.close=function(){oi(this.g)};ve.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Xr(t),t=n);e.i.push(new Ff(e.ab++,t)),e.G==3&&Cs(e)};ve.prototype.M=function(){this.g.l=null,delete this.j,oi(this.g),delete this.g,ve.X.M.call(this)};function ju(t){ei.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}se(ju,ei);function zu(){ti.call(this),this.status=1}se(zu,ti);function Nt(t){this.g=t}se(Nt,qu);Nt.prototype.xa=function(){ne(this.g,"a")};Nt.prototype.wa=function(t){ne(this.g,new ju(t))};Nt.prototype.va=function(t){ne(this.g,new zu)};Nt.prototype.ua=function(){ne(this.g,"b")};ts.prototype.createWebChannel=ts.prototype.g;ve.prototype.send=ve.prototype.u;ve.prototype.open=ve.prototype.m;ve.prototype.close=ve.prototype.close;vs.NO_ERROR=0;vs.TIMEOUT=8;vs.HTTP_ERROR=6;lu.COMPLETE="complete";cu.EventType=wn;wn.OPEN="a";wn.CLOSE="b";wn.ERROR="c";wn.MESSAGE="d";ee.prototype.listen=ee.prototype.N;j.prototype.listenOnce=j.prototype.O;j.prototype.getLastError=j.prototype.Oa;j.prototype.getLastErrorCode=j.prototype.Ea;j.prototype.getStatus=j.prototype.aa;j.prototype.getResponseJson=j.prototype.Sa;j.prototype.getResponseText=j.prototype.fa;j.prototype.send=j.prototype.da;j.prototype.setWithCredentials=j.prototype.Ka;var Wf=function(){return new ts},Qf=function(){return ys()},Ws=vs,Xf=lu,Yf=ct,Io={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Jf=Tn,Mn=cu,Zf=j;const Ao="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}re.UNAUTHENTICATED=new re(null),re.GOOGLE_CREDENTIALS=new re("google-credentials-uid"),re.FIRST_PARTY=new re("first-party-uid"),re.MOCK_USER=new re("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xt="9.15.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt=new Oa("@firebase/firestore");function ko(){return rt.logLevel}function b(t,...e){if(rt.logLevel<=P.DEBUG){const n=e.map(li);rt.debug(`Firestore (${xt}): ${t}`,...n)}}function Le(t,...e){if(rt.logLevel<=P.ERROR){const n=e.map(li);rt.error(`Firestore (${xt}): ${t}`,...n)}}function Tr(t,...e){if(rt.logLevel<=P.WARN){const n=e.map(li);rt.warn(`Firestore (${xt}): ${t}`,...n)}}function li(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(t="Unexpected state"){const e=`FIRESTORE (${xt}) INTERNAL ASSERTION FAILED: `+t;throw Le(e),new Error(e)}function F(t,e){t||C()}function R(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends lt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class eg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(re.UNAUTHENTICATED))}shutdown(){}}class tg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ng{constructor(e){this.t=e,this.currentUser=re.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=u=>this.i!==s?(s=this.i,n(u)):Promise.resolve();let i=new et;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new et,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await r(this.currentUser)})},a=u=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new et)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(F(typeof s.accessToken=="string"),new Hu(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return F(e===null||typeof e=="string"),new re(e)}}class sg{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=re.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(F(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class rg{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new sg(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(re.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ig{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class og{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,b("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(F(typeof n.token=="string"),this.A=n.token,new ig(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ag(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=ag(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function V(t,e){return t<e?-1:t>e?1:0}function _t(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new w(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new w(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new w(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new w(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return X.fromMillis(Date.now())}static fromDate(e){return X.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new X(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?V(this.nanoseconds,e.nanoseconds):V(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.timestamp=e}static fromTimestamp(e){return new k(e)}static min(){return new k(new X(0,0))}static max(){return new k(new X(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,n,s){n===void 0?n=0:n>e.length&&C(),s===void 0?s=e.length-n:s>e.length-n&&C(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return sn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof sn?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class $ extends sn{construct(e,n,s){return new $(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new w(g.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new $(n)}static emptyPath(){return new $([])}}const ug=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class oe extends sn{construct(e,n,s){return new oe(e,n,s)}static isValidIdentifier(e){return ug.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),oe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new oe(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new w(g.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new w(g.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[r+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new w(g.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=u,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new w(g.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new oe(n)}static emptyPath(){return new oe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(e){this.path=e}static fromPath(e){return new _($.fromString(e))}static fromName(e){return new _($.fromString(e).popFirst(5))}static empty(){return new _($.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&$.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return $.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new _(new $(e.slice()))}}function lg(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=k.fromTimestamp(s===1e9?new X(n+1,0):new X(n,s));return new je(r,_.empty(),e)}function cg(t){return new je(t.readTime,t.key,-1)}class je{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new je(k.min(),_.empty(),-1)}static max(){return new je(k.max(),_.empty(),-1)}}function hg(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=_.comparator(t.documentKey,e.documentKey),n!==0?n:V(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cn(t){if(t.code!==g.FAILED_PRECONDITION||t.message!==dg)throw t;b("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&C(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new m((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof m?n:m.resolve(n)}catch(n){return m.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):m.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):m.reject(n)}static resolve(e){return new m((n,s)=>{n(e)})}static reject(e){return new m((n,s)=>{s(e)})}static waitFor(e){return new m((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},u=>s(u))}),o=!0,i===r&&n()})}static or(e){let n=m.resolve(!1);for(const s of e)n=n.next(r=>r?m.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new m((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let u=0;u<i;u++){const l=u;n(e[l]).next(c=>{o[l]=c,++a,a===i&&s(o)},c=>r(c))}})}static doWhile(e,n){return new m((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function In(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}ci.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e,n,s,r,i,o,a,u){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class rn{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new rn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof rn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Lt(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ku(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(t){return t==null}function ns(t){return t===0&&1/t==-1/0}function mg(t){return typeof t=="number"&&Number.isInteger(t)&&!ns(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new le(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new le(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return V(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}le.EMPTY_BYTE_STRING=new le("");const pg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ze(t){if(F(!!t),typeof t=="string"){let e=0;const n=pg.exec(t);if(F(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:K(t.seconds),nanos:K(t.nanos)}}function K(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function St(t){return typeof t=="string"?le.fromBase64String(t):le.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Qu(t){const e=t.mapValue.fields.__previous_value__;return Wu(e)?Qu(e):e}function on(t){const e=ze(t.mapValue.fields.__local_write_time__.timestampValue);return new X(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function it(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Wu(t)?4:yg(t)?9007199254740991:10:C()}function Ae(t,e){if(t===e)return!0;const n=it(t);if(n!==it(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return on(t).isEqual(on(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=ze(s.timestampValue),o=ze(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return St(s.bytesValue).isEqual(St(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return K(s.geoPointValue.latitude)===K(r.geoPointValue.latitude)&&K(s.geoPointValue.longitude)===K(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return K(s.integerValue)===K(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=K(s.doubleValue),o=K(r.doubleValue);return i===o?ns(i)===ns(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return _t(t.arrayValue.values||[],e.arrayValue.values||[],Ae);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Do(i)!==Do(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Ae(i[a],o[a])))return!1;return!0}(t,e);default:return C()}}function an(t,e){return(t.values||[]).find(n=>Ae(n,e))!==void 0}function Ct(t,e){if(t===e)return 0;const n=it(t),s=it(e);if(n!==s)return V(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return V(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=K(r.integerValue||r.doubleValue),a=K(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Ro(t.timestampValue,e.timestampValue);case 4:return Ro(on(t),on(e));case 5:return V(t.stringValue,e.stringValue);case 6:return function(r,i){const o=St(r),a=St(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let u=0;u<o.length&&u<a.length;u++){const l=V(o[u],a[u]);if(l!==0)return l}return V(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=V(K(r.latitude),K(i.latitude));return o!==0?o:V(K(r.longitude),K(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let u=0;u<o.length&&u<a.length;++u){const l=Ct(o[u],a[u]);if(l)return l}return V(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Pn.mapValue&&i===Pn.mapValue)return 0;if(r===Pn.mapValue)return 1;if(i===Pn.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),u=i.fields||{},l=Object.keys(u);a.sort(),l.sort();for(let c=0;c<a.length&&c<l.length;++c){const h=V(a[c],l[c]);if(h!==0)return h;const d=Ct(o[a[c]],u[l[c]]);if(d!==0)return d}return V(a.length,l.length)}(t.mapValue,e.mapValue);default:throw C()}}function Ro(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return V(t,e);const n=ze(t),s=ze(e),r=V(n.seconds,s.seconds);return r!==0?r:V(n.nanos,s.nanos)}function It(t){return _r(t)}function _r(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=ze(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?St(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,_.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=_r(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${_r(s.fields[a])}`;return i+"}"}(t.mapValue):C();var e,n}function No(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Sr(t){return!!t&&"integerValue"in t}function hi(t){return!!t&&"arrayValue"in t}function xo(t){return!!t&&"nullValue"in t}function Lo(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Un(t){return!!t&&"mapValue"in t}function Ht(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Lt(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Ht(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ht(t.arrayValue.values[n]);return e}return Object.assign({},t)}function yg(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,n){this.position=e,this.inclusive=n}}function Oo(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=_.comparator(_.fromName(o.referenceValue),n.key):s=Ct(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Mo(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ae(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{}class W extends Xu{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new Eg(e,n,s):n==="array-contains"?new _g(e,s):n==="in"?new Sg(e,s):n==="not-in"?new Cg(e,s):n==="array-contains-any"?new Ig(e,s):new W(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new bg(e,s):new Tg(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ct(n,this.value)):n!==null&&it(this.value)===it(n)&&this.matchesComparison(Ct(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return C()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Te extends Xu{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Te(e,n)}matches(e){return Yu(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Yu(t){return t.op==="and"}function vg(t){return wg(t)&&Yu(t)}function wg(t){for(const e of t.filters)if(e instanceof Te)return!1;return!0}function Ju(t){if(t instanceof W)return t.field.canonicalString()+t.op.toString()+It(t.value);{const e=t.filters.map(n=>Ju(n)).join(",");return`${t.op}(${e})`}}function Zu(t,e){return t instanceof W?function(n,s){return s instanceof W&&n.op===s.op&&n.field.isEqual(s.field)&&Ae(n.value,s.value)}(t,e):t instanceof Te?function(n,s){return s instanceof Te&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Zu(i,s.filters[o]),!0):!1}(t,e):void C()}function el(t){return t instanceof W?function(e){return`${e.field.canonicalString()} ${e.op} ${It(e.value)}`}(t):t instanceof Te?function(e){return e.op.toString()+" {"+e.getFilters().map(el).join(" ,")+"}"}(t):"Filter"}class Eg extends W{constructor(e,n,s){super(e,n,s),this.key=_.fromName(s.referenceValue)}matches(e){const n=_.comparator(e.key,this.key);return this.matchesComparison(n)}}class bg extends W{constructor(e,n){super(e,"in",n),this.keys=tl("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Tg extends W{constructor(e,n){super(e,"not-in",n),this.keys=tl("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function tl(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>_.fromName(s.referenceValue))}class _g extends W{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return hi(n)&&an(n.arrayValue,this.value)}}class Sg extends W{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&an(this.value.arrayValue,n)}}class Cg extends W{constructor(e,n){super(e,"not-in",n)}matches(e){if(an(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!an(this.value.arrayValue,n)}}class Ig extends W{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!hi(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>an(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,n="asc"){this.field=e,this.dir=n}}function Ag(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e,n){this.comparator=e,this.root=n||te.EMPTY}insert(e,n){return new J(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,te.BLACK,null,null))}remove(e){return new J(this.comparator,this.root.remove(e,this.comparator).copy(null,null,te.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Vn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Vn(this.root,e,this.comparator,!1)}getReverseIterator(){return new Vn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Vn(this.root,e,this.comparator,!0)}}class Vn{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class te{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:te.RED,this.left=r!=null?r:te.EMPTY,this.right=i!=null?i:te.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new te(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return te.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return te.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,te.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw C();const e=this.left.check();if(e!==this.right.check())throw C();return e+(this.isRed()?0:1)}}te.EMPTY=null,te.RED=!0,te.BLACK=!1;te.EMPTY=new class{constructor(){this.size=0}get key(){throw C()}get value(){throw C()}get color(){throw C()}get left(){throw C()}get right(){throw C()}copy(t,e,n,s,r){return this}insert(t,e,n){return new te(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.comparator=e,this.data=new J(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Po(this.data.getIterator())}getIteratorFrom(e){return new Po(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Y)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Y(this.comparator);return n.data=e,n}}class Po{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.fields=e,e.sort(oe.comparator)}static empty(){return new Ce([])}unionWith(e){let n=new Y(oe.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Ce(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return _t(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.value=e}static empty(){return new we({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Un(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ht(n)}setAll(e){let n=oe.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Ht(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Un(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ae(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Un(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Lt(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new we(Ht(this.value))}}function nl(t){const e=[];return Lt(t.fields,(n,s)=>{const r=new oe([n]);if(Un(s)){const i=nl(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Ce(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ie(e,0,k.min(),k.min(),k.min(),we.empty(),0)}static newFoundDocument(e,n,s,r){return new ie(e,1,n,k.min(),s,r,0)}static newNoDocument(e,n){return new ie(e,2,n,k.min(),k.min(),we.empty(),0)}static newUnknownDocument(e,n){return new ie(e,3,n,k.min(),k.min(),we.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(k.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=we.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=we.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=k.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ie&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ie(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function Vo(t,e=null,n=[],s=[],r=null,i=null,o=null){return new kg(t,e,n,s,r,i,o)}function di(t){const e=R(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Ju(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Is(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>It(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>It(s)).join(",")),e.ft=n}return e.ft}function fi(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Ag(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Zu(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Mo(t.startAt,e.startAt)&&Mo(t.endAt,e.endAt)}function Cr(t){return _.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.dt=null,this._t=null,this.startAt,this.endAt}}function Dg(t,e,n,s,r,i,o,a){return new Ot(t,e,n,s,r,i,o,a)}function gi(t){return new Ot(t)}function Fo(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function mi(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function As(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function sl(t){return t.collectionGroup!==null}function wt(t){const e=R(t);if(e.dt===null){e.dt=[];const n=As(e),s=mi(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new vt(n)),e.dt.push(new vt(oe.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new vt(oe.keyField(),i))}}}return e.dt}function Oe(t){const e=R(t);if(!e._t)if(e.limitType==="F")e._t=Vo(e.path,e.collectionGroup,wt(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of wt(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new vt(i.field,o))}const s=e.endAt?new ss(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new ss(e.startAt.position,e.startAt.inclusive):null;e._t=Vo(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function Ir(t,e){e.getFirstInequalityField(),As(t);const n=t.filters.concat([e]);return new Ot(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ar(t,e,n){return new Ot(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ks(t,e){return fi(Oe(t),Oe(e))&&t.limitType===e.limitType}function rl(t){return`${di(Oe(t))}|lt:${t.limitType}`}function kr(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>el(s)).join(", ")}]`),Is(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>It(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>It(s)).join(",")),`Target(${n})`}(Oe(t))}; limitType=${t.limitType})`}function pi(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):_.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of wt(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Oo(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,wt(n),s)||n.endAt&&!function(r,i,o){const a=Oo(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,wt(n),s))}(t,e)}function Rg(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function il(t){return(e,n)=>{let s=!1;for(const r of wt(t)){const i=Ng(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Ng(t,e,n){const s=t.field.isKeyField()?_.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),u=o.data.field(r);return a!==null&&u!==null?Ct(a,u):C()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return C()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ns(e)?"-0":e}}function al(t){return{integerValue:""+t}}function xg(t,e){return mg(e)?al(e):ol(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(){this._=void 0}}function Lg(t,e,n){return t instanceof un?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof ln?ll(t,e):t instanceof cn?cl(t,e):function(s,r){const i=ul(s,r),o=$o(i)+$o(s.gt);return Sr(i)&&Sr(s.gt)?al(o):ol(s.yt,o)}(t,e)}function Og(t,e,n){return t instanceof ln?ll(t,e):t instanceof cn?cl(t,e):n}function ul(t,e){return t instanceof rs?Sr(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class un extends Ds{}class ln extends Ds{constructor(e){super(),this.elements=e}}function ll(t,e){const n=hl(e);for(const s of t.elements)n.some(r=>Ae(r,s))||n.push(s);return{arrayValue:{values:n}}}class cn extends Ds{constructor(e){super(),this.elements=e}}function cl(t,e){let n=hl(e);for(const s of t.elements)n=n.filter(r=>!Ae(r,s));return{arrayValue:{values:n}}}class rs extends Ds{constructor(e,n){super(),this.yt=e,this.gt=n}}function $o(t){return K(t.integerValue||t.doubleValue)}function hl(t){return hi(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e,n){this.field=e,this.transform=n}}function Pg(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof ln&&s instanceof ln||n instanceof cn&&s instanceof cn?_t(n.elements,s.elements,Ae):n instanceof rs&&s instanceof rs?Ae(n.gt,s.gt):n instanceof un&&s instanceof un}(t.transform,e.transform)}class Vg{constructor(e,n){this.version=e,this.transformResults=n}}class Ne{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ne}static exists(e){return new Ne(void 0,e)}static updateTime(e){return new Ne(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function qn(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Rs{}function dl(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new gl(t.key,Ne.none()):new An(t.key,t.data,Ne.none());{const n=t.data,s=we.empty();let r=new Y(oe.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new ht(t.key,s,new Ce(r.toArray()),Ne.none())}}function Fg(t,e,n){t instanceof An?function(s,r,i){const o=s.value.clone(),a=Uo(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ht?function(s,r,i){if(!qn(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Uo(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(fl(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Gt(t,e,n,s){return t instanceof An?function(r,i,o,a){if(!qn(r.precondition,i))return o;const u=r.value.clone(),l=qo(r.fieldTransforms,a,i);return u.setAll(l),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),null}(t,e,n,s):t instanceof ht?function(r,i,o,a){if(!qn(r.precondition,i))return o;const u=qo(r.fieldTransforms,a,i),l=i.data;return l.setAll(fl(r)),l.setAll(u),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(c=>c.field))}(t,e,n,s):function(r,i,o){return qn(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function $g(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=ul(s.transform,r||null);i!=null&&(n===null&&(n=we.empty()),n.set(s.field,i))}return n||null}function Bo(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&_t(n,s,(r,i)=>Pg(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class An extends Rs{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ht extends Rs{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function fl(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Uo(t,e,n){const s=new Map;F(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,Og(o,a,n[r]))}return s}function qo(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Lg(i,o,e))}return s}class gl extends Rs{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Bg extends Rs{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G,x;function qg(t){switch(t){default:return C();case g.CANCELLED:case g.UNKNOWN:case g.DEADLINE_EXCEEDED:case g.RESOURCE_EXHAUSTED:case g.INTERNAL:case g.UNAVAILABLE:case g.UNAUTHENTICATED:return!1;case g.INVALID_ARGUMENT:case g.NOT_FOUND:case g.ALREADY_EXISTS:case g.PERMISSION_DENIED:case g.FAILED_PRECONDITION:case g.ABORTED:case g.OUT_OF_RANGE:case g.UNIMPLEMENTED:case g.DATA_LOSS:return!0}}function ml(t){if(t===void 0)return Le("GRPC error has no .code"),g.UNKNOWN;switch(t){case G.OK:return g.OK;case G.CANCELLED:return g.CANCELLED;case G.UNKNOWN:return g.UNKNOWN;case G.DEADLINE_EXCEEDED:return g.DEADLINE_EXCEEDED;case G.RESOURCE_EXHAUSTED:return g.RESOURCE_EXHAUSTED;case G.INTERNAL:return g.INTERNAL;case G.UNAVAILABLE:return g.UNAVAILABLE;case G.UNAUTHENTICATED:return g.UNAUTHENTICATED;case G.INVALID_ARGUMENT:return g.INVALID_ARGUMENT;case G.NOT_FOUND:return g.NOT_FOUND;case G.ALREADY_EXISTS:return g.ALREADY_EXISTS;case G.PERMISSION_DENIED:return g.PERMISSION_DENIED;case G.FAILED_PRECONDITION:return g.FAILED_PRECONDITION;case G.ABORTED:return g.ABORTED;case G.OUT_OF_RANGE:return g.OUT_OF_RANGE;case G.UNIMPLEMENTED:return g.UNIMPLEMENTED;case G.DATA_LOSS:return g.DATA_LOSS;default:return C()}}(x=G||(G={}))[x.OK=0]="OK",x[x.CANCELLED=1]="CANCELLED",x[x.UNKNOWN=2]="UNKNOWN",x[x.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",x[x.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",x[x.NOT_FOUND=5]="NOT_FOUND",x[x.ALREADY_EXISTS=6]="ALREADY_EXISTS",x[x.PERMISSION_DENIED=7]="PERMISSION_DENIED",x[x.UNAUTHENTICATED=16]="UNAUTHENTICATED",x[x.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",x[x.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",x[x.ABORTED=10]="ABORTED",x[x.OUT_OF_RANGE=11]="OUT_OF_RANGE",x[x.UNIMPLEMENTED=12]="UNIMPLEMENTED",x[x.INTERNAL=13]="INTERNAL",x[x.UNAVAILABLE=14]="UNAVAILABLE",x[x.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Lt(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Ku(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=new J(_.comparator);function Me(){return jg}const pl=new J(_.comparator);function qt(...t){let e=pl;for(const n of t)e=e.insert(n.key,n);return e}function yl(t){let e=pl;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Je(){return Kt()}function vl(){return Kt()}function Kt(){return new Mt(t=>t.toString(),(t,e)=>t.isEqual(e))}const zg=new J(_.comparator),Hg=new Y(_.comparator);function N(...t){let e=Hg;for(const n of t)e=e.add(n);return e}const Gg=new Y(V);function wl(){return Gg}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,kn.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Ns(k.min(),r,wl(),Me(),N())}}class kn{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new kn(s,n,N(),N(),N())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,n,s,r){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=r}}class El{constructor(e,n){this.targetId=e,this.Et=n}}class bl{constructor(e,n,s=le.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class jo{constructor(){this.At=0,this.Rt=Ho(),this.bt=le.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=N(),n=N(),s=N();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:C()}}),new kn(this.bt,this.Pt,e,n,s)}xt(){this.vt=!1,this.Rt=Ho()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class Kg{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Me(),this.qt=zo(),this.Ut=new Y(V)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const s=this.Wt(n);switch(e.state){case 0:this.zt(n)&&s.Dt(e.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:C()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.zt(r)&&n(r)})}Jt(e){const n=e.targetId,s=e.Et.count,r=this.Yt(n);if(r){const i=r.target;if(Cr(i))if(s===0){const o=new _(i.path);this.Qt(n,o,ie.newNoDocument(o,k.min()))}else F(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&Cr(a.target)){const u=new _(a.target.path);this.Lt.get(u)!==null||this.te(o,u)||this.Qt(o,u,ie.newNoDocument(u,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=N();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.Yt(u);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const r=new Ns(e,n,this.Ut,this.Lt,s);return this.Lt=Me(),this.qt=zo(),this.Ut=new Y(V),r}Gt(e,n){if(!this.zt(e))return;const s=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.zt(e))return;const r=this.Wt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new jo,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Y(V),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||b("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new jo),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function zo(){return new J(_.comparator)}function Ho(){return new J(_.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Qg=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Xg=(()=>({and:"AND",or:"OR"}))();class Yg{constructor(e,n){this.databaseId=e,this.wt=n}}function is(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Tl(t,e){return t.wt?e.toBase64():e.toUint8Array()}function Jg(t,e){return is(t,e.toTimestamp())}function Ie(t){return F(!!t),k.fromTimestamp(function(e){const n=ze(e);return new X(n.seconds,n.nanos)}(t))}function yi(t,e){return function(n){return new $(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function _l(t){const e=$.fromString(t);return F(Al(e)),e}function Dr(t,e){return yi(t.databaseId,e.path)}function Qs(t,e){const n=_l(e);if(n.get(1)!==t.databaseId.projectId)throw new w(g.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new w(g.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new _(Sl(n))}function Rr(t,e){return yi(t.databaseId,e)}function Zg(t){const e=_l(t);return e.length===4?$.emptyPath():Sl(e)}function Nr(t){return new $(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Sl(t){return F(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Go(t,e,n){return{name:Dr(t,e),fields:n.value.mapValue.fields}}function em(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:C()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(u,l){return u.wt?(F(l===void 0||typeof l=="string"),le.fromBase64String(l||"")):(F(l===void 0||l instanceof Uint8Array),le.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?g.UNKNOWN:ml(u.code);return new w(l,u.message||"")}(o);n=new bl(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Qs(t,s.document.name),i=Ie(s.document.updateTime),o=s.document.createTime?Ie(s.document.createTime):k.min(),a=new we({mapValue:{fields:s.document.fields}}),u=ie.newFoundDocument(r,i,o,a),l=s.targetIds||[],c=s.removedTargetIds||[];n=new jn(l,c,u.key,u)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Qs(t,s.document),i=s.readTime?Ie(s.readTime):k.min(),o=ie.newNoDocument(r,i),a=s.removedTargetIds||[];n=new jn([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Qs(t,s.document),i=s.removedTargetIds||[];n=new jn([],i,r,null)}else{if(!("filter"in e))return C();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new Ug(r),o=s.targetId;n=new El(o,i)}}return n}function tm(t,e){let n;if(e instanceof An)n={update:Go(t,e.key,e.value)};else if(e instanceof gl)n={delete:Dr(t,e.key)};else if(e instanceof ht)n={update:Go(t,e.key,e.data),updateMask:cm(e.fieldMask)};else{if(!(e instanceof Bg))return C();n={verify:Dr(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof un)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ln)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof cn)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof rs)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw C()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:Jg(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:C()}(t,e.precondition)),n}function nm(t,e){return t&&t.length>0?(F(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Ie(s.updateTime):Ie(r);return i.isEqual(k.min())&&(i=Ie(r)),new Vg(i,s.transformResults||[])}(n,e))):[]}function sm(t,e){return{documents:[Rr(t,e.path)]}}function rm(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Rr(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Rr(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(u){if(u.length!==0)return Il(Te.create(u,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(u){if(u.length!==0)return u.map(l=>function(c){return{field:gt(c.field),direction:am(c.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(u,l){return u.wt||Is(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),n}function im(t){let e=Zg(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){F(s===1);const c=n.from[0];c.allDescendants?r=c.collectionId:e=e.child(c.collectionId)}let i=[];n.where&&(i=function(c){const h=Cl(c);return h instanceof Te&&vg(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new vt(mt(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Is(h)?null:h}(n.limit));let u=null;n.startAt&&(u=function(c){const h=!!c.before,d=c.values||[];return new ss(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(c){const h=!c.before,d=c.values||[];return new ss(d,h)}(n.endAt)),Dg(e,r,o,i,a,"F",u,l)}function om(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return C()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Cl(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=mt(e.unaryFilter.field);return W.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=mt(e.unaryFilter.field);return W.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=mt(e.unaryFilter.field);return W.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=mt(e.unaryFilter.field);return W.create(i,"!=",{nullValue:"NULL_VALUE"});default:return C()}}(t):t.fieldFilter!==void 0?function(e){return W.create(mt(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return C()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Te.create(e.compositeFilter.filters.map(n=>Cl(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return C()}}(e.compositeFilter.op))}(t):C()}function am(t){return Wg[t]}function um(t){return Qg[t]}function lm(t){return Xg[t]}function gt(t){return{fieldPath:t.canonicalString()}}function mt(t){return oe.fromServerFormat(t.fieldPath)}function Il(t){return t instanceof W?function(e){if(e.op==="=="){if(Lo(e.value))return{unaryFilter:{field:gt(e.field),op:"IS_NAN"}};if(xo(e.value))return{unaryFilter:{field:gt(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Lo(e.value))return{unaryFilter:{field:gt(e.field),op:"IS_NOT_NAN"}};if(xo(e.value))return{unaryFilter:{field:gt(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gt(e.field),op:um(e.op),value:e.value}}}(t):t instanceof Te?function(e){const n=e.getFilters().map(s=>Il(s));return n.length===1?n[0]:{compositeFilter:{op:lm(e.op),filters:n}}}(t):C()}function cm(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Al(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Fg(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Gt(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Gt(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=vl();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const u=dl(o,a);u!==null&&s.set(r.key,u),o.isValidDocument()||o.convertToNoDocument(k.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),N())}isEqual(e){return this.batchId===e.batchId&&_t(this.mutations,e.mutations,(n,s)=>Bo(n,s))&&_t(this.baseMutations,e.baseMutations,(n,s)=>Bo(n,s))}}class vi{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){F(e.mutations.length===s.length);let r=zg;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new vi(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n,s,r,i=k.min(),o=k.min(),a=le.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new tt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new tt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new tt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e){this.ie=e}}function gm(t){const e=im({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ar(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(){this.Je=new pm}addToCollectionParentIndex(e,n){return this.Je.add(n),m.resolve()}getCollectionParents(e,n){return m.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return m.resolve()}deleteFieldIndex(e,n){return m.resolve()}getDocumentsMatchingTarget(e,n){return m.resolve(null)}getIndexType(e,n){return m.resolve(0)}getFieldIndexes(e,n){return m.resolve([])}getNextCollectionGroupToUpdate(e){return m.resolve(null)}getMinOffset(e,n){return m.resolve(je.min())}getMinOffsetFromCollectionGroup(e,n){return m.resolve(je.min())}updateCollectionGroup(e,n,s){return m.resolve()}updateIndexEntries(e,n){return m.resolve()}}class pm{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Y($.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Y($.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new At(0)}static vn(){return new At(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(){this.changes=new Mt(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ie.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?m.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Gt(s.mutation,r,Ce.empty(),X.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,N()).next(()=>s))}getLocalViewOfDocuments(e,n,s=N()){const r=Je();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=qt();return i.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Je();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,N()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Me();const o=Kt(),a=Kt();return n.forEach((u,l)=>{const c=s.get(l.key);r.has(l.key)&&(c===void 0||c.mutation instanceof ht)?i=i.insert(l.key,l):c!==void 0&&(o.set(l.key,c.mutation.getFieldMask()),Gt(c.mutation,l,c.mutation.getFieldMask(),X.now()))}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((l,c)=>o.set(l,c)),n.forEach((l,c)=>{var h;return a.set(l,new vm(c,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Kt();let r=new J((o,a)=>o-a),i=N();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const l=n.get(u);if(l===null)return;let c=s.get(u)||Ce.empty();c=a.applyToLocalView(l,c),s.set(u,c);const h=(r.get(a.batchId)||N()).add(u);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),l=u.key,c=u.value,h=vl();c.forEach(d=>{if(!i.has(d)){const f=dl(n.get(d),s.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return m.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return _.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):sl(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):m.resolve(Je());let a=-1,u=i;return o.next(l=>m.forEach(l,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(c)?m.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{u=u.insert(c,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,u,l,N())).next(c=>({batchId:a,changes:yl(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new _(n)).next(s=>{let r=qt();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=qt();return this.indexManager.getCollectionParents(e,r).next(o=>m.forEach(o,a=>{const u=function(l,c){return new Ot(c,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,u,s).next(l=>{l.forEach((c,h)=>{i=i.insert(c,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,u)=>{const l=u.getKey();r.get(l)===null&&(r=r.insert(l,ie.newInvalidDocument(l)))});let o=qt();return r.forEach((a,u)=>{const l=i.get(a);l!==void 0&&Gt(l.mutation,u,Ce.empty(),X.now()),pi(n,u)&&(o=o.insert(a,u))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return m.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Ie(s.createTime)}),m.resolve()}getNamedQuery(e,n){return m.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:gm(s.bundledQuery),readTime:Ie(s.readTime)}}(n)),m.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(){this.overlays=new J(_.comparator),this.es=new Map}getOverlay(e,n){return m.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Je();return m.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.oe(e,n,i)}),m.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),m.resolve()}getOverlaysForCollection(e,n,s){const r=Je(),i=n.length+1,o=new _(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,l=u.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&u.largestBatchId>s&&r.set(u.getKey(),u)}return m.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new J((l,c)=>l-c);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let c=i.get(l.largestBatchId);c===null&&(c=Je(),i=i.insert(l.largestBatchId,c)),c.set(l.getKey(),l)}}const a=Je(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((l,c)=>a.set(l,c)),!(a.size()>=r)););return m.resolve(a)}oe(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new dm(n,s));let i=this.es.get(n);i===void 0&&(i=N(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(){this.ns=new Y(Z.ss),this.rs=new Y(Z.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new Z(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new Z(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new _(new $([])),s=new Z(n,e),r=new Z(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new _(new $([])),s=new Z(n,e),r=new Z(n,e+1);let i=N();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Z(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Z{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return _.comparator(e.key,n.key)||V(e._s,n._s)}static os(e,n){return V(e._s,n._s)||_.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Y(Z.ss)}checkEmpty(e){return m.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new hm(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new Z(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return m.resolve(o)}lookupMutationBatch(e,n){return m.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return m.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return m.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return m.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Z(n,0),r=new Z(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),m.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Y(V);return n.forEach(r=>{const i=new Z(r,0),o=new Z(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),m.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;_.isDocumentKey(i)||(i=i.child(""));const o=new Z(new _(i),0);let a=new Y(V);return this.gs.forEachWhile(u=>{const l=u.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(u._s)),!0)},o),m.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){F(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return m.forEach(n.mutations,r=>{const i=new Z(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new Z(n,0),r=this.gs.firstAfterOrEqual(s);return m.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,m.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e){this.Es=e,this.docs=new J(_.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return m.resolve(s?s.document.mutableCopy():ie.newInvalidDocument(n))}getEntries(e,n){let s=Me();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():ie.newInvalidDocument(r))}),m.resolve(s)}getAllFromCollection(e,n,s){let r=Me();const i=new _(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:u}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||hg(cg(u),s)<=0||(r=r.insert(u.key,u.mutableCopy()))}return m.resolve(r)}getAllFromCollectionGroup(e,n,s,r){C()}As(e,n){return m.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Sm(this)}getSize(e){return m.resolve(this.size)}}class Sm extends ym{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),m.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e){this.persistence=e,this.Rs=new Mt(n=>di(n),fi),this.lastRemoteSnapshotVersion=k.min(),this.highestTargetId=0,this.bs=0,this.Ps=new wi,this.targetCount=0,this.vs=At.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),m.resolve()}getLastRemoteSnapshotVersion(e){return m.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return m.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),m.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),m.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new At(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,m.resolve()}updateTargetData(e,n){return this.Dn(n),m.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,m.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),m.waitFor(i).next(()=>r)}getTargetCount(e){return m.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return m.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),m.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),m.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),m.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return m.resolve(s)}containsKey(e,n){return m.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new ci(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new Cm(this),this.indexManager=new mm,this.remoteDocumentCache=function(s){return new _m(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new fm(n),this.Ns=new Em(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new bm,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new Tm(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){b("MemoryPersistence","Starting transaction:",e);const r=new Am(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(e,n){return m.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class Am extends fg{constructor(e){super(),this.currentSequenceNumber=e}}class Ei{constructor(e){this.persistence=e,this.Fs=new wi,this.$s=null}static Bs(e){return new Ei(e)}get Ls(){if(this.$s)return this.$s;throw C()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),m.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),m.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),m.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return m.forEach(this.Ls,s=>{const r=_.fromPath(s);return this.qs(e,r).next(i=>{i||n.removeEntry(r,k.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return m.or([()=>m.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=N(),r=N();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new bi(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Mi(e,n))}ki(e,n){if(Fo(n))return m.resolve(null);let s=Oe(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Ar(n,null,"F"),s=Oe(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=N(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(u=>{const l=this.Fi(n,a);return this.$i(n,l,o,u.readTime)?this.ki(e,Ar(n,null,"F")):this.Bi(e,l,n,u)}))})))}Oi(e,n,s,r){return Fo(n)||r.isEqual(k.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(e,n):(ko()<=P.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),kr(n)),this.Bi(e,o,n,lg(r,-1)))})}Fi(e,n){let s=new Y(il(e));return n.forEach((r,i)=>{pi(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,n){return ko()<=P.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",kr(n)),this.Ni.getDocumentsMatchingQuery(e,n,je.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.yt=r,this.qi=new J(V),this.Ui=new Mt(i=>di(i),fi),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new wm(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function Rm(t,e,n,s){return new Dm(t,e,n,s)}async function kl(t,e){const n=R(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let u=N();for(const l of r){o.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}for(const l of i){a.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}return n.localDocuments.getDocuments(s,u).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function Nm(t,e){const n=R(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,u,l){const c=u.batch,h=c.keys();let d=m.resolve();return h.forEach(f=>{d=d.next(()=>l.getEntry(a,f)).next(p=>{const y=u.docVersions.get(f);F(y!==null),p.version.compareTo(y)<0&&(c.applyToRemoteDocument(p,u),p.isValidDocument()&&(p.setReadTime(u.commitVersion),l.addEntry(p)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=N();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Dl(t){const e=R(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function xm(t,e){const n=R(t),s=e.snapshotVersion;let r=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.qi;const a=[];e.targetChanges.forEach((c,h)=>{const d=r.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(i,c.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,c.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(le.EMPTY_BYTE_STRING,k.min()).withLastLimboFreeSnapshotVersion(k.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,s)),r=r.insert(h,f),function(p,y,v){return p.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(d,f,c)&&a.push(n.Cs.updateTargetData(i,f))});let u=Me(),l=N();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,c))}),a.push(Lm(i,o,e.documentUpdates).next(c=>{u=c.Wi,l=c.zi})),!s.isEqual(k.min())){const c=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(c)}return m.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,l)).next(()=>u)}).then(i=>(n.qi=r,i))}function Lm(t,e,n){let s=N(),r=N();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Me();return n.forEach((a,u)=>{const l=i.get(a);u.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),u.isNoDocument()&&u.version.isEqual(k.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):b("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",u.version)}),{Wi:o,zi:r}})}function Om(t,e){const n=R(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Mm(t,e){const n=R(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,m.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new tt(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.qi.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(e,s.targetId)),s})}async function xr(t,e,n){const s=R(t),r=s.qi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!In(o))throw o;b("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qi=s.qi.remove(e),s.Ui.delete(r.target)}function Ko(t,e,n){const s=R(t);let r=k.min(),i=N();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,u,l){const c=R(a),h=c.Ui.get(l);return h!==void 0?m.resolve(c.qi.get(h)):c.Cs.getTargetData(u,l)}(s,o,Oe(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{i=u})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:k.min(),n?i:N())).next(a=>(Pm(s,Rg(e),a),{documents:a,Hi:i})))}function Pm(t,e,n){let s=t.Ki.get(e)||k.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class Wo{constructor(){this.activeTargetIds=wl()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Vm{constructor(){this.Lr=new Wo,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,s){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Wo,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){b("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){b("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,r,i){const o=this.ho(e,n);b("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(u=>(b("RestConnection","Received: ",u),u),u=>{throw Tr("RestConnection",`${e} failed with error: `,u,"url: ",o,"request:",s),u})}_o(e,n,s,r,i,o){return this.ao(e,n,s,r,i)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+xt,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,n){const s=$m[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,r){return new Promise((i,o)=>{const a=new Zf;a.setWithCredentials(!0),a.listenOnce(Xf.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ws.NO_ERROR:const l=a.getResponseJson();b("Connection","XHR received:",JSON.stringify(l)),i(l);break;case Ws.TIMEOUT:b("Connection",'RPC "'+e+'" timed out'),o(new w(g.DEADLINE_EXCEEDED,"Request time out"));break;case Ws.HTTP_ERROR:const c=a.getStatus();if(b("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const f=function(p){const y=p.toLowerCase().replace(/_/g,"-");return Object.values(g).indexOf(y)>=0?y:g.UNKNOWN}(d.status);o(new w(f,d.message))}else o(new w(g.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new w(g.UNAVAILABLE,"Connection failed."));break;default:C()}}finally{b("Connection",'RPC "'+e+'" completed.')}});const u=JSON.stringify(r);a.send(n,"POST",u,s,15)})}wo(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Wf(),o=Qf(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Jf({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const u=r.join("");b("Connection","Creating WebChannel: "+u,a);const l=i.createWebChannel(u,a);let c=!1,h=!1;const d=new Bm({Hr:p=>{h?b("Connection","Not sending because WebChannel is closed:",p):(c||(b("Connection","Opening WebChannel transport."),l.open(),c=!0),b("Connection","WebChannel sending:",p),l.send(p))},Jr:()=>l.close()}),f=(p,y,v)=>{p.listen(y,D=>{try{v(D)}catch(S){setTimeout(()=>{throw S},0)}})};return f(l,Mn.EventType.OPEN,()=>{h||b("Connection","WebChannel transport opened.")}),f(l,Mn.EventType.CLOSE,()=>{h||(h=!0,b("Connection","WebChannel transport closed"),d.io())}),f(l,Mn.EventType.ERROR,p=>{h||(h=!0,Tr("Connection","WebChannel transport errored:",p),d.io(new w(g.UNAVAILABLE,"The operation could not be completed")))}),f(l,Mn.EventType.MESSAGE,p=>{var y;if(!h){const v=p.data[0];F(!!v);const D=v,S=D.error||((y=D[0])===null||y===void 0?void 0:y.error);if(S){b("Connection","WebChannel received error:",S);const O=S.status;let M=function(ge){const Q=G[ge];if(Q!==void 0)return ml(Q)}(O),U=S.message;M===void 0&&(M=g.INTERNAL,U="Unknown error status: "+O+" with message "+S.message),h=!0,d.io(new w(M,U)),l.close()}else b("Connection","WebChannel received:",v),d.ro(v)}}),f(o,Yf.STAT_EVENT,p=>{p.stat===Io.PROXY?b("Connection","Detected buffering proxy"):p.stat===Io.NOPROXY&&b("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function Xs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(t){return new Yg(t,!0)}class Rl{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&b("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n,s,r,i,o,a,u){this.Hs=e,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Rl(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===g.RESOURCE_EXHAUSTED?(Le(n.toString()),Le("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===g.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{e(()=>{const r=new w(g.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return b("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(b("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class qm extends Nl{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.yt=i}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=em(this.yt,e),s=function(r){if(!("targetChange"in r))return k.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?k.min():i.readTime?Ie(i.readTime):k.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=Nr(this.yt),n.addTarget=function(r,i){let o;const a=i.target;return o=Cr(a)?{documents:sm(r,a)}:{query:rm(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Tl(r,i.resumeToken):i.snapshotVersion.compareTo(k.min())>0&&(o.readTime=is(r,i.snapshotVersion.toTimestamp())),o}(this.yt,e);const s=om(this.yt,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=Nr(this.yt),n.removeTarget=e,this.Bo(n)}}class jm extends Nl{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(F(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=nm(e.writeResults,e.commitTime),s=Ie(e.commitTime);return this.listener.Zo(s,n)}return F(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Nr(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>tm(this.yt,s))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.yt=r,this.nu=!1}su(){if(this.nu)throw new w(g.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new w(g.UNKNOWN,r.toString())})}_o(e,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new w(g.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class Hm{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Le(n),this.ou=!1):b("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{dt(this)&&(b("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=R(a);u._u.add(4),await Dn(u),u.gu.set("Unknown"),u._u.delete(4),await Ls(u)}(this))})}),this.gu=new Hm(s,r)}}async function Ls(t){if(dt(t))for(const e of t.wu)await e(!0)}async function Dn(t){for(const e of t.wu)await e(!1)}function xl(t,e){const n=R(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Si(n)?_i(n):Pt(n).ko()&&Ti(n,e))}function Ll(t,e){const n=R(t),s=Pt(n);n.du.delete(e),s.ko()&&Ol(n,e),n.du.size===0&&(s.ko()?s.Fo():dt(n)&&n.gu.set("Unknown"))}function Ti(t,e){t.yu.Ot(e.targetId),Pt(t).zo(e)}function Ol(t,e){t.yu.Ot(e),Pt(t).Ho(e)}function _i(t){t.yu=new Kg({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),Pt(t).start(),t.gu.uu()}function Si(t){return dt(t)&&!Pt(t).No()&&t.du.size>0}function dt(t){return R(t)._u.size===0}function Ml(t){t.yu=void 0}async function Km(t){t.du.forEach((e,n)=>{Ti(t,e)})}async function Wm(t,e){Ml(t),Si(t)?(t.gu.hu(e),_i(t)):t.gu.set("Unknown")}async function Qm(t,e,n){if(t.gu.set("Online"),e instanceof bl&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){b("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await os(t,s)}else if(e instanceof jn?t.yu.Kt(e):e instanceof El?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(k.min()))try{const s=await Dl(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.Zt(i);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.du.get(u);l&&r.du.set(u,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const u=r.du.get(a);if(!u)return;r.du.set(a,u.withResumeToken(le.EMPTY_BYTE_STRING,u.snapshotVersion)),Ol(r,a);const l=new tt(u.target,a,1,u.sequenceNumber);Ti(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){b("RemoteStore","Failed to raise snapshot:",s),await os(t,s)}}async function os(t,e,n){if(!In(e))throw e;t._u.add(1),await Dn(t),t.gu.set("Offline"),n||(n=()=>Dl(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{b("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Ls(t)})}function Pl(t,e){return e().catch(n=>os(t,n,e))}async function Os(t){const e=R(t),n=He(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;Xm(e);)try{const r=await Om(e.localStore,s);if(r===null){e.fu.length===0&&n.Fo();break}s=r.batchId,Ym(e,r)}catch(r){await os(e,r)}Vl(e)&&Fl(e)}function Xm(t){return dt(t)&&t.fu.length<10}function Ym(t,e){t.fu.push(e);const n=He(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function Vl(t){return dt(t)&&!He(t).No()&&t.fu.length>0}function Fl(t){He(t).start()}async function Jm(t){He(t).eu()}async function Zm(t){const e=He(t);for(const n of t.fu)e.Xo(n.mutations)}async function ep(t,e,n){const s=t.fu.shift(),r=vi.from(s,e,n);await Pl(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Os(t)}async function tp(t,e){e&&He(t).Yo&&await async function(n,s){if(r=s.code,qg(r)&&r!==g.ABORTED){const i=n.fu.shift();He(n).Mo(),await Pl(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Os(n)}var r}(t,e),Vl(t)&&Fl(t)}async function Xo(t,e){const n=R(t);n.asyncQueue.verifyOperationInProgress(),b("RemoteStore","RemoteStore received new credentials");const s=dt(n);n._u.add(3),await Dn(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Ls(n)}async function np(t,e){const n=R(t);e?(n._u.delete(2),await Ls(n)):e||(n._u.add(2),await Dn(n),n.gu.set("Unknown"))}function Pt(t){return t.pu||(t.pu=function(e,n,s){const r=R(e);return r.su(),new qm(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:Km.bind(null,t),Zr:Wm.bind(null,t),Wo:Qm.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Si(t)?_i(t):t.gu.set("Unknown")):(await t.pu.stop(),Ml(t))})),t.pu}function He(t){return t.Iu||(t.Iu=function(e,n,s){const r=R(e);return r.su(),new jm(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:Jm.bind(null,t),Zr:tp.bind(null,t),tu:Zm.bind(null,t),Zo:ep.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await Os(t)):(await t.Iu.stop(),t.fu.length>0&&(b("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new et,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Ci(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new w(g.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ii(t,e){if(Le("AsyncQueue",`${e}: ${t}`),In(t))return new w(g.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.comparator=e?(n,s)=>e(n,s)||_.comparator(n.key,s.key):(n,s)=>_.comparator(n.key,s.key),this.keyedMap=qt(),this.sortedSet=new J(this.comparator)}static emptySet(e){return new Et(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Et)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Et;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(){this.Tu=new J(_.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):C():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class kt{constructor(e,n,s,r,i,o,a,u,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new kt(e,n,Et.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ks(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(){this.Au=void 0,this.listeners=[]}}class rp{constructor(){this.queries=new Mt(e=>rl(e),ks),this.onlineState="Unknown",this.Ru=new Set}}async function ip(t,e){const n=R(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new sp),r)try{i.Au=await n.onListen(s)}catch(o){const a=Ii(o,`Initialization of query '${kr(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&Ai(n)}async function op(t,e){const n=R(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function ap(t,e){const n=R(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&Ai(n)}function up(t,e,n){const s=R(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Ai(t){t.Ru.forEach(e=>{e.next()})}class lp{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new kt(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=kt.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e){this.key=e}}class Bl{constructor(e){this.key=e}}class cp{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=N(),this.mutatedKeys=N(),this.Gu=il(e),this.Qu=new Et(this.Gu)}get ju(){return this.qu}Wu(e,n){const s=n?n.zu:new Yo,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const u=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((c,h)=>{const d=r.get(c),f=pi(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let v=!1;d&&f?d.data.isEqual(f.data)?p!==y&&(s.track({type:3,doc:f}),v=!0):this.Hu(d,f)||(s.track({type:2,doc:f}),v=!0,(u&&this.Gu(f,u)>0||l&&this.Gu(f,l)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),v=!0):d&&!f&&(s.track({type:1,doc:d}),v=!0,(u||l)&&(a=!0)),v&&(f?(o=o.add(f),i=y?i.add(c):i.delete(c)):(o=o.delete(c),i=i.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),i=i.delete(c.key),s.track({type:1,doc:c})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((l,c)=>function(h,d){const f=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return C()}};return f(h)-f(d)}(l.type,c.type)||this.Gu(l.doc,c.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,u=a!==this.Uu;return this.Uu=a,i.length!==0||u?{snapshot:new kt(this.query,e.Qu,r,i,e.mutatedKeys,a===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Yo,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=N(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new Bl(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new $l(s))}),n}tc(e){this.qu=e.Hi,this.Ku=N();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return kt.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class hp{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class dp{constructor(e){this.key=e,this.nc=!1}}class fp{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Mt(a=>rl(a),ks),this.rc=new Map,this.oc=new Set,this.uc=new J(_.comparator),this.cc=new Map,this.ac=new wi,this.hc={},this.lc=new Map,this.fc=At.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function gp(t,e){const n=Sp(t);let s,r;const i=n.ic.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await Mm(n.localStore,Oe(e));n.isPrimaryClient&&xl(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await mp(n,e,s,a==="current",o.resumeToken)}return r}async function mp(t,e,n,s,r){t._c=(h,d,f)=>async function(p,y,v,D){let S=y.view.Wu(v);S.$i&&(S=await Ko(p.localStore,y.query,!1).then(({documents:U})=>y.view.Wu(U,S)));const O=D&&D.targetChanges.get(y.targetId),M=y.view.applyChanges(S,p.isPrimaryClient,O);return Zo(p,y.targetId,M.Xu),M.snapshot}(t,h,d,f);const i=await Ko(t.localStore,e,!0),o=new cp(e,i.Hi),a=o.Wu(i.documents),u=kn.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,u);Zo(t,n,l.Xu);const c=new hp(e,n,o);return t.ic.set(e,c),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),l.snapshot}async function pp(t,e){const n=R(t),s=n.ic.get(e),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!ks(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await xr(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Ll(n.remoteStore,s.targetId),Lr(n,s.targetId)}).catch(Cn)):(Lr(n,s.targetId),await xr(n.localStore,s.targetId,!0))}async function yp(t,e,n){const s=Cp(t);try{const r=await function(i,o){const a=R(i),u=X.now(),l=o.reduce((d,f)=>d.add(f.key),N());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=Me(),p=N();return a.Gi.getEntries(d,l).next(y=>{f=y,f.forEach((v,D)=>{D.isValidDocument()||(p=p.add(v))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(y=>{c=y;const v=[];for(const D of o){const S=$g(D,c.get(D.key).overlayedDocument);S!=null&&v.push(new ht(D.key,S,nl(S.value.mapValue),Ne.exists(!0)))}return a.mutationQueue.addMutationBatch(d,u,v,o)}).next(y=>{h=y;const v=y.applyToLocalDocumentSet(c,p);return a.documentOverlayCache.saveOverlays(d,y.batchId,v)})}).then(()=>({batchId:h.batchId,changes:yl(c)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let u=i.hc[i.currentUser.toKey()];u||(u=new J(V)),u=u.insert(o,a),i.hc[i.currentUser.toKey()]=u}(s,r.batchId,n),await Rn(s,r.changes),await Os(s.remoteStore)}catch(r){const i=Ii(r,"Failed to persist write");n.reject(i)}}async function Ul(t,e){const n=R(t);try{const s=await xm(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&(F(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?F(o.nc):r.removedDocuments.size>0&&(F(o.nc),o.nc=!1))}),await Rn(n,s,e)}catch(s){await Cn(s)}}function Jo(t,e,n){const s=R(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=R(i);a.onlineState=o;let u=!1;a.queries.forEach((l,c)=>{for(const h of c.listeners)h.bu(o)&&(u=!0)}),u&&Ai(a)}(s.eventManager,e),r.length&&s.sc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function vp(t,e,n){const s=R(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.cc.get(e),i=r&&r.key;if(i){let o=new J(_.comparator);o=o.insert(i,ie.newNoDocument(i,k.min()));const a=N().add(i),u=new Ns(k.min(),new Map,new Y(V),o,a);await Ul(s,u),s.uc=s.uc.remove(i),s.cc.delete(e),ki(s)}else await xr(s.localStore,e,!1).then(()=>Lr(s,e,n)).catch(Cn)}async function wp(t,e){const n=R(t),s=e.batch.batchId;try{const r=await Nm(n.localStore,e);jl(n,s,null),ql(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Rn(n,r)}catch(r){await Cn(r)}}async function Ep(t,e,n){const s=R(t);try{const r=await function(i,o){const a=R(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return a.mutationQueue.lookupMutationBatch(u,o).next(c=>(F(c!==null),l=c.keys(),a.mutationQueue.removeMutationBatch(u,c))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>a.localDocuments.getDocuments(u,l))})}(s.localStore,e);jl(s,e,n),ql(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Rn(s,r)}catch(r){await Cn(r)}}function ql(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function jl(t,e,n){const s=R(t);let r=s.hc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.hc[s.currentUser.toKey()]=r}}function Lr(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||zl(t,s)})}function zl(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(Ll(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),ki(t))}function Zo(t,e,n){for(const s of n)s instanceof $l?(t.ac.addReference(s.key,e),bp(t,s)):s instanceof Bl?(b("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||zl(t,s.key)):C()}function bp(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(b("SyncEngine","New document in limbo: "+n),t.oc.add(s),ki(t))}function ki(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new _($.fromString(e)),s=t.fc.next();t.cc.set(s,new dp(n)),t.uc=t.uc.insert(n,s),xl(t.remoteStore,new tt(Oe(gi(n.path)),s,2,ci.at))}}async function Rn(t,e,n){const s=R(t),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,u)=>{o.push(s._c(u,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(u.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const c=bi.Ci(u.targetId,l);i.push(c)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,u){const l=R(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>m.forEach(u,h=>m.forEach(h.Si,d=>l.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>m.forEach(h.Di,d=>l.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!In(c))throw c;b("LocalStore","Failed to update sequence numbers: "+c)}for(const c of u){const h=c.targetId;if(!c.fromCache){const d=l.qi.get(h),f=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(f);l.qi=l.qi.insert(h,p)}}}(s.localStore,i))}async function Tp(t,e){const n=R(t);if(!n.currentUser.isEqual(e)){b("SyncEngine","User change. New user:",e.toKey());const s=await kl(n.localStore,e);n.currentUser=e,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new w(g.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Rn(n,s.ji)}}function _p(t,e){const n=R(t),s=n.cc.get(e);if(s&&s.nc)return N().add(s.key);{let r=N();const i=n.rc.get(e);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function Sp(t){const e=R(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ul.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_p.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=vp.bind(null,e),e.sc.Wo=ap.bind(null,e.eventManager),e.sc.wc=up.bind(null,e.eventManager),e}function Cp(t){const e=R(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=wp.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ep.bind(null,e),e}class Ip{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=xs(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return Rm(this.persistence,new km,e.initialUser,this.yt)}yc(e){return new Im(Ei.Bs,this.yt)}gc(e){return new Vm}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ap{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Jo(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Tp.bind(null,this.syncEngine),await np(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new rp}createDatastore(e){const n=xs(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new Um(r));var r;return function(i,o,a,u){return new zm(i,o,a,u)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Jo(this.syncEngine,a,0),o=Qo.C()?new Qo:new Fm,new Gm(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,u,l){const c=new fp(s,r,i,o,a,u);return l&&(c.dc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=R(e);b("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Dn(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(t,e,n){if(!n)throw new w(g.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function kp(t,e,n,s){if(e===!0&&s===!0)throw new w(g.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ea(t){if(!_.isDocumentKey(t))throw new w(g.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ta(t){if(_.isDocumentKey(t))throw new w(g.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ms(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":C()}function Wt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new w(g.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ms(t);throw new w(g.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na=new Map;class sa{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new w(g.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new w(g.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,kp("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sa({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new w(g.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new w(g.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sa(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new eg;switch(n.type){case"gapi":const s=n.client;return new rg(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new w(g.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=na.get(e);n&&(b("ComponentProvider","Removing Datastore"),na.delete(e),n.terminate())}(this),Promise.resolve()}}function Dp(t,e,n,s={}){var r;const i=(t=Wt(t,Ps))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Tr("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=re.MOCK_USER;else{o=xa(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new w(g.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new re(u)}t._authCredentials=new tg(new Hu(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qe(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ye(this.firestore,e,this._key)}}class ft{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ft(this.firestore,e,this._query)}}class qe extends ft{constructor(e,n,s){super(e,n,gi(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ye(this.firestore,null,new _(e))}withConverter(e){return new qe(this.firestore,e,this._path)}}function Rp(t,e,...n){if(t=be(t),Hl("collection","path",e),t instanceof Ps){const s=$.fromString(e,...n);return ta(s),new qe(t,null,s)}{if(!(t instanceof ye||t instanceof qe))throw new w(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child($.fromString(e,...n));return ta(s),new qe(t.firestore,null,s)}}function Np(t,e,...n){if(t=be(t),arguments.length===1&&(e=Gu.R()),Hl("doc","path",e),t instanceof Ps){const s=$.fromString(e,...n);return ea(s),new ye(t,null,new _(s))}{if(!(t instanceof ye||t instanceof qe))throw new w(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child($.fromString(e,...n));return ea(s),new ye(t.firestore,t instanceof qe?t.converter:null,new _(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Le("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=re.UNAUTHENTICATED,this.clientId=Gu.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{b("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(b("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(g.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new et;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Ii(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Op(t,e){t.asyncQueue.verifyOperationInProgress(),b("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await kl(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Mp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Pp(t);b("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Xo(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Xo(e.remoteStore,i)),t.onlineComponents=e}async function Pp(t){return t.offlineComponents||(b("FirestoreClient","Using default OfflineComponentProvider"),await Op(t,new Ip)),t.offlineComponents}async function Gl(t){return t.onlineComponents||(b("FirestoreClient","Using default OnlineComponentProvider"),await Mp(t,new Ap)),t.onlineComponents}function Vp(t){return Gl(t).then(e=>e.syncEngine)}async function ra(t){const e=await Gl(t),n=e.eventManager;return n.onListen=gp.bind(null,e.syncEngine),n.onUnlisten=pp.bind(null,e.syncEngine),n}class Fp{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Rl(this,"async_queue_retry"),this.Wc=()=>{const n=Xs();n&&b("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Xs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=Xs();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new et;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!In(e))throw e;b("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Le("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const r=Ci.createAndSchedule(this,e,n,s,i=>this.Yc(i));return this.Uc.push(r),r}zc(){this.Kc&&C()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function ia(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class as extends Ps{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new Fp,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Wl(this),this._firestoreClient.terminate()}}function $p(t,e){const n=typeof t=="object"?t:Ba(),s=typeof t=="string"?t:e||"(default)",r=Va(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Na("firestore");i&&Dp(r,...i)}return r}function Kl(t){return t._firestoreClient||Wl(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Wl(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new gg(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Lp(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Dt(le.fromBase64String(e))}catch(n){throw new w(g.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Dt(le.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new w(g.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new oe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new w(g.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new w(g.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return V(this._lat,e._lat)||V(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp=/^__.*__$/;class Up{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new ht(e,this.data,this.fieldMask,n,this.fieldTransforms):new An(e,this.data,n,this.fieldTransforms)}}function Ql(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw C()}}class xi{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new xi(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.ua(e),r}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return us(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(Ql(this.sa)&&Bp.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class qp{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=s||xs(e)}da(e,n,s,r=!1){return new xi({sa:e,methodName:n,fa:s,path:oe.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function Xl(t){const e=t._freezeSettings(),n=xs(t._databaseId);return new qp(t._databaseId,!!e.ignoreUndefinedProperties,n)}function jp(t,e,n,s,r,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,r);Zl("Data must be an object, but it was:",o,s);const a=Yl(s,o);let u,l;if(i.merge)u=new Ce(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const c=[];for(const h of i.mergeFields){const d=Hp(e,h,n);if(!o.contains(d))throw new w(g.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Kp(c,d)||c.push(d)}u=new Ce(c),l=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,l=o.fieldTransforms;return new Up(new we(a),u,l)}class Li extends Ri{_toFieldTransform(e){return new Mg(e.path,new un)}isEqual(e){return e instanceof Li}}function zp(t,e,n,s=!1){return Oi(n,t.da(s?4:3,e))}function Oi(t,e){if(Jl(t=be(t)))return Zl("Unsupported field value:",e,t),Yl(t,e);if(t instanceof Ri)return function(n,s){if(!Ql(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Oi(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=be(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return xg(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=X.fromDate(n);return{timestampValue:is(s.yt,r)}}if(n instanceof X){const r=new X(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:is(s.yt,r)}}if(n instanceof Ni)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Dt)return{bytesValue:Tl(s.yt,n._byteString)};if(n instanceof ye){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:yi(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${Ms(n)}`)}(t,e)}function Yl(t,e){const n={};return Ku(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Lt(t,(s,r)=>{const i=Oi(r,e.ra(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Jl(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof X||t instanceof Ni||t instanceof Dt||t instanceof ye||t instanceof Ri)}function Zl(t,e,n){if(!Jl(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Ms(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function Hp(t,e,n){if((e=be(e))instanceof Di)return e._internalPath;if(typeof e=="string")return ec(t,e);throw us("Field path arguments must be of type string or ",t,!1,void 0,n)}const Gp=new RegExp("[~\\*/\\[\\]]");function ec(t,e,n){if(e.search(Gp)>=0)throw us(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Di(...e.split("."))._internalPath}catch{throw us(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function us(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${s}`),o&&(u+=` in document ${r}`),u+=")"),new w(g.INVALID_ARGUMENT,a+t+u)}function Kp(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ye(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Wp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Mi("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Wp extends tc{data(){return super.data()}}function Mi(t,e){return typeof e=="string"?ec(t,e):e instanceof Di?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qp(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new w(g.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Pi{}class nc extends Pi{}function Xp(t,e,...n){let s=[];e instanceof Pi&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof Fi).length,o=r.filter(a=>a instanceof Vi).length;if(i>1||i>0&&o>0)throw new w(g.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class Vi extends nc{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Vi(e,n,s)}_apply(e){const n=this._parse(e);return sc(e._query,n),new ft(e.firestore,e.converter,Ir(e._query,n))}_parse(e){const n=Xl(e.firestore);return function(r,i,o,a,u,l,c){let h;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new w(g.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){aa(c,l);const d=[];for(const f of c)d.push(oa(a,r,f));h={arrayValue:{values:d}}}else h=oa(a,r,c)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||aa(c,l),h=zp(o,i,c,l==="in"||l==="not-in");return W.create(u,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Fi extends Pi{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Fi(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Te.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)sc(i,a),i=Ir(i,a)}(e._query,n),new ft(e.firestore,e.converter,Ir(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class $i extends nc{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new $i(e,n)}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new w(g.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new w(g.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new vt(r,i);return function(a,u){if(mi(a)===null){const l=As(a);l!==null&&rc(a,l,u.field)}}(s,o),o}(e._query,this._field,this._direction);return new ft(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new Ot(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function Yp(t,e="asc"){const n=e,s=Mi("orderBy",t);return $i._create(s,n)}function oa(t,e,n){if(typeof(n=be(n))=="string"){if(n==="")throw new w(g.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!sl(e)&&n.indexOf("/")!==-1)throw new w(g.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child($.fromString(n));if(!_.isDocumentKey(s))throw new w(g.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return No(t,new _(s))}if(n instanceof ye)return No(t,n._key);throw new w(g.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ms(n)}.`)}function aa(t,e){if(!Array.isArray(t)||t.length===0)throw new w(g.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new w(g.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function sc(t,e){if(e.isInequality()){const s=As(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new w(g.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=mi(t);i!==null&&rc(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new w(g.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new w(g.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function rc(t,e,n){if(!n.isEqual(e))throw new w(g.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Jp{convertValue(e,n="none"){switch(it(e)){case 0:return null;case 1:return e.booleanValue;case 2:return K(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(St(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw C()}}convertObject(e,n){const s={};return Lt(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Ni(K(e.latitude),K(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Qu(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(on(e));default:return null}}convertTimestamp(e){const n=ze(e);return new X(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=$.fromString(e);F(Al(s));const r=new rn(s.get(1),s.get(3)),i=new _(s.popFirst(5));return r.isEqual(n)||Le(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zp(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ic extends tc{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new zn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Mi("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class zn extends ic{data(e={}){return super.data(e)}}class ey{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new jt(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new zn(this._firestore,this._userDataWriter,s.key,s,new jt(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new w(g.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new zn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new jt(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new zn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new jt(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,l=-1;return o.type!==0&&(u=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:ty(o.type),doc:a,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ty(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return C()}}class oc extends Jp{constructor(e){super(),this.firestore=e}convertBytes(e){return new Dt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ye(this.firestore,null,n)}}function ny(t,e){const n=Wt(t.firestore,as),s=Np(t),r=Zp(t.converter,e);return ry(n,[jp(Xl(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,Ne.exists(!1))]).then(()=>s)}function sy(t,...e){var n,s,r;t=be(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||ia(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(ia(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let u,l,c;if(t instanceof ye)l=Wt(t.firestore,as),c=gi(t._key.path),u={next:h=>{e[o]&&e[o](iy(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Wt(t,ft);l=Wt(h.firestore,as),c=h._query;const d=new oc(l);u={next:f=>{e[o]&&e[o](new ey(l,d,h,f))},error:e[o+1],complete:e[o+2]},Qp(t._query)}return function(h,d,f,p){const y=new xp(p),v=new lp(d,y,f);return h.asyncQueue.enqueueAndForget(async()=>ip(await ra(h),v)),()=>{y.bc(),h.asyncQueue.enqueueAndForget(async()=>op(await ra(h),v))}}(Kl(l),c,a,u)}function ry(t,e){return function(n,s){const r=new et;return n.asyncQueue.enqueueAndForget(async()=>yp(await Vp(n),s,r)),r.promise}(Kl(t),e)}function iy(t,e,n){const s=n.docs.get(e._key),r=new oc(t);return new ic(t,r,e._key,s,new jt(n.hasPendingWrites,n.fromCache),e.converter)}function oy(){return new Li("serverTimestamp")}(function(t,e=!0){(function(n){xt=n})(Fa),Xt(new bt("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new as(new ng(n.getProvider("auth-internal")),new og(n.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new w(g.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new rn(a.options.projectId,u)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Ue(Ao,"3.8.0",t),Ue(Ao,"3.8.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac="firebasestorage.googleapis.com",uc="storageBucket",ay=2*60*1e3,uy=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z extends lt{constructor(e,n,s=0){super(Ys(e),`Firebase Storage: ${n} (${Ys(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,z.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ys(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Ys(t){return"storage/"+t}function Bi(){const t="An unknown error occurred, please check the error payload for server response.";return new z("unknown",t)}function ly(t){return new z("object-not-found","Object '"+t+"' does not exist.")}function cy(t){return new z("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function hy(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new z("unauthenticated",t)}function dy(){return new z("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function fy(t){return new z("unauthorized","User does not have permission to access '"+t+"'.")}function gy(){return new z("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function my(){return new z("canceled","User canceled the upload/download.")}function py(t){return new z("invalid-url","Invalid URL '"+t+"'.")}function yy(t){return new z("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function vy(){return new z("no-default-bucket","No default bucket found. Did you set the '"+uc+"' property when initializing the app?")}function wy(){return new z("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function Ey(){return new z("no-download-url","The given file does not have any download URLs.")}function by(t){return new z("unsupported-environment",`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Or(t){return new z("invalid-argument",t)}function lc(){return new z("app-deleted","The Firebase app was deleted.")}function Ty(t){return new z("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Qt(t,e){return new z("invalid-format","String does not match format '"+t+"': "+e)}function $t(t){throw new z("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=pe.makeFromUrl(e,n)}catch{return new pe(e,"")}if(s.path==="")return s;throw yy(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(M){M.path.charAt(M.path.length-1)==="/"&&(M.path_=M.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),u={bucket:1,path:3};function l(M){M.path_=decodeURIComponent(M.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${c}/b/${r}/o${d}`,"i"),p={bucket:1,path:3},y=n===ac?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",D=new RegExp(`^https?://${y}/${r}/${v}`,"i"),O=[{regex:a,indices:u,postModify:i},{regex:f,indices:p,postModify:l},{regex:D,indices:{bucket:1,path:2},postModify:l}];for(let M=0;M<O.length;M++){const U=O[M],ge=U.regex.exec(e);if(ge){const Q=ge[U.indices.bucket];let L=ge[U.indices.path];L||(L=""),s=new pe(Q,L),U.postModify(s);break}}if(s==null)throw py(e);return s}}class _y{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function u(){return a===2}let l=!1;function c(...v){l||(l=!0,e.apply(null,v))}function h(v){r=setTimeout(()=>{r=null,t(f,u())},v)}function d(){i&&clearTimeout(i)}function f(v,...D){if(l){d();return}if(v){d(),c.call(null,v,...D);return}if(u()||o){d(),c.call(null,v,...D);return}s<64&&(s*=2);let O;a===1?(a=2,O=0):O=(s+Math.random())*1e3,h(O)}let p=!1;function y(v){p||(p=!0,d(),!l&&(r!==null?(v||(a=2),clearTimeout(r),h(0)):v||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,y(!0)},n),y}function Cy(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iy(t){return t!==void 0}function Ay(t){return typeof t=="object"&&!Array.isArray(t)}function Ui(t){return typeof t=="string"||t instanceof String}function ua(t){return qi()&&t instanceof Blob}function qi(){return typeof Blob<"u"&&!Nh()}function la(t,e,n,s){if(s<e)throw Or(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Or(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function cc(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nt;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(nt||(nt={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ky(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e,n,s,r,i,o,a,u,l,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=l,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,p)=>{this.resolve_=f,this.reject_=p,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new Fn(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const u=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===nt.NO_ERROR,u=i.getStatus();if((!a||ky(u,this.additionalRetryCodes_))&&this.retry){const c=i.getErrorCode()===nt.ABORT;s(!1,new Fn(!1,null,c));return}const l=this.successCodes_.indexOf(u)!==-1;s(!0,new Fn(l,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());Iy(u)?i(u):i()}catch(u){o(u)}else if(a!==null){const u=Bi();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(r.canceled){const u=this.appDelete_?lc():my();o(u)}else{const u=gy();o(u)}};this.canceled_?n(!1,new Fn(!1,null,!0)):this.backoffId_=Sy(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Cy(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Fn{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function Ry(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Ny(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function xy(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Ly(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Oy(t,e,n,s,r,i,o=!0){const a=cc(t.urlParams),u=t.url+a,l=Object.assign({},t.headers);return xy(l,e),Ry(l,n),Ny(l,i),Ly(l,s),new Dy(u,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function My(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Py(...t){const e=My();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(qi())return new Blob(t);throw new z("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function Vy(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fy(t){if(typeof atob>"u")throw by("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Js{constructor(e,n){this.data=e,this.contentType=n||null}}function $y(t,e){switch(t){case Se.RAW:return new Js(hc(e));case Se.BASE64:case Se.BASE64URL:return new Js(dc(t,e));case Se.DATA_URL:return new Js(Uy(e),qy(e))}throw Bi()}function hc(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function By(t){let e;try{e=decodeURIComponent(t)}catch{throw Qt(Se.DATA_URL,"Malformed data URL.")}return hc(e)}function dc(t,e){switch(t){case Se.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw Qt(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case Se.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw Qt(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Fy(e)}catch(r){throw r.message.includes("polyfill")?r:Qt(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class fc{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Qt(Se.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=jy(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function Uy(t){const e=new fc(t);return e.base64?dc(Se.BASE64,e.rest):By(e.rest)}function qy(t){return new fc(t).contentType}function jy(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,n){let s=0,r="";ua(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(ua(this.data_)){const s=this.data_,r=Vy(s,e,n);return r===null?null:new Fe(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new Fe(s,!0)}}static getBlob(...e){if(qi()){const n=e.map(s=>s instanceof Fe?s.data_:s);return new Fe(Py.apply(null,n))}else{const n=e.map(o=>Ui(o)?$y(Se.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)r[i++]=o[a]}),new Fe(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(t){let e;try{e=JSON.parse(t)}catch{return null}return Ay(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zy(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Hy(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function mc(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gy(t,e){return e}class he{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||Gy}}let $n=null;function Ky(t){return!Ui(t)||t.length<2?t:mc(t)}function pc(){if($n)return $n;const t=[];t.push(new he("bucket")),t.push(new he("generation")),t.push(new he("metageneration")),t.push(new he("name","fullPath",!0));function e(i,o){return Ky(o)}const n=new he("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new he("size");return r.xform=s,t.push(r),t.push(new he("timeCreated")),t.push(new he("updated")),t.push(new he("md5Hash",null,!0)),t.push(new he("cacheControl",null,!0)),t.push(new he("contentDisposition",null,!0)),t.push(new he("contentEncoding",null,!0)),t.push(new he("contentLanguage",null,!0)),t.push(new he("contentType",null,!0)),t.push(new he("metadata","customMetadata",!0)),$n=t,$n}function Wy(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new pe(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function Qy(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return Wy(s,t),s}function yc(t,e,n){const s=gc(e);return s===null?null:Qy(t,s,n)}function Xy(t,e,n,s){const r=gc(e);if(r===null||!Ui(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),f=ji(d,n,s),p=cc({alt:"media",token:l});return f+p})[0]}function Yy(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class vc{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(t){if(!t)throw Bi()}function Jy(t,e){function n(s,r){const i=yc(t,r,e);return wc(i!==null),i}return n}function Zy(t,e){function n(s,r){const i=yc(t,r,e);return wc(i!==null),Xy(i,r,t.host,t._protocol)}return n}function Ec(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=dy():r=hy():n.getStatus()===402?r=cy(t.bucket):n.getStatus()===403?r=fy(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function ev(t){const e=Ec(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=ly(t.path)),i.serverResponse=r.serverResponse,i}return n}function tv(t,e,n){const s=e.fullServerUrl(),r=ji(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new vc(r,i,Zy(t,n),o);return a.errorHandler=ev(e),a}function nv(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function sv(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=nv(null,e)),s}function rv(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let O="";for(let M=0;M<2;M++)O=O+Math.random().toString().slice(2);return O}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const l=sv(e,s,r),c=Yy(l,n),h="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+u+`\r
Content-Type: `+l.contentType+`\r
\r
`,d=`\r
--`+u+"--",f=Fe.getBlob(h,s,d);if(f===null)throw wy();const p={name:l.fullPath},y=ji(i,t.host,t._protocol),v="POST",D=t.maxUploadRetryTime,S=new vc(y,v,Jy(t,n),D);return S.urlParams=p,S.headers=o,S.body=f.uploadData(),S.errorHandler=Ec(e),S}class iv{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=nt.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=nt.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=nt.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw $t("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw $t("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw $t("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw $t("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw $t("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class ov extends iv{initXhr(){this.xhr_.responseType="text"}}function bc(){return new ov}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,n){this._service=e,n instanceof pe?this._location=n:this._location=pe.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ot(e,n)}get root(){const e=new pe(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return mc(this._location.path)}get storage(){return this._service}get parent(){const e=zy(this._location.path);if(e===null)return null;const n=new pe(this._location.bucket,e);return new ot(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Ty(e)}}function av(t,e,n){t._throwIfRoot("uploadBytes");const s=rv(t.storage,t._location,pc(),new Fe(e,!0),n);return t.storage.makeRequestWithTokens(s,bc).then(r=>({metadata:r,ref:t}))}function uv(t){t._throwIfRoot("getDownloadURL");const e=tv(t.storage,t._location,pc());return t.storage.makeRequestWithTokens(e,bc).then(n=>{if(n===null)throw Ey();return n})}function lv(t,e){const n=Hy(t._location.path,e),s=new pe(t._location.bucket,n);return new ot(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cv(t){return/^[A-Za-z]+:\/\//.test(t)}function hv(t,e){return new ot(t,e)}function Tc(t,e){if(t instanceof zi){const n=t;if(n._bucket==null)throw vy();const s=new ot(n,n._bucket);return e!=null?Tc(s,e):s}else return e!==void 0?lv(t,e):t}function dv(t,e){if(e&&cv(e)){if(t instanceof zi)return hv(t,e);throw Or("To use ref(service, url), the first argument must be a Storage instance.")}else return Tc(t,e)}function ca(t,e){const n=e==null?void 0:e[uc];return n==null?null:pe.makeFromBucketSpec(n,t)}function fv(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:xa(r,t.app.options.projectId))}class zi{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=ac,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ay,this._maxUploadRetryTime=uy,this._requests=new Set,r!=null?this._bucket=pe.makeFromBucketSpec(r,this._host):this._bucket=ca(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=pe.makeFromBucketSpec(this._url,e):this._bucket=ca(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){la("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){la("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ot(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new _y(lc());{const o=Oy(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const ha="@firebase/storage",da="0.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c="storage";function gv(t,e,n){return t=be(t),av(t,e,n)}function mv(t){return t=be(t),uv(t)}function Hi(t,e){return t=be(t),dv(t,e)}function pv(t=Ba(),e){t=be(t);const s=Va(t,_c).getImmediate({identifier:e}),r=Na("storage");return r&&yv(s,...r),s}function yv(t,e,n,s={}){fv(t,e,n,s)}function vv(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new zi(n,s,r,e,Fa)}function wv(){Xt(new bt(_c,vv,"PUBLIC").setMultipleInstances(!0)),Ue(ha,da,""),Ue(ha,da,"esm2017")}wv();const Ev={apiKey:"AIzaSyDgH4QPlJ61gnIgICliPNmfWV8CoBk0Tl8",authDomain:"keitalab-opengame-test.firebaseapp.com",projectId:"keitalab-opengame-test",storageBucket:"keitalab-opengame-test.appspot.com",messagingSenderId:"372184905710",appId:"1:372184905710:web:2b430f03d184601007c0ff"},Sc=$a(Ev),bv=$p(Sc),Cc=pv(Sc),Ic=Rp(bv,"results_CommonExperienceSample"),Tv=Hi(Cc,"datas_CommonExperienceSample"),_v=Xp(Ic,Yp("timestamp","desc")),ww=(t,e,n)=>{sy(_v,s=>{s.docChanges().forEach(r=>{mv(Hi(Cc,`datas_CommonExperienceSample/${r.doc.id}/${r.doc.data().filename}`)).then(i=>{if(r.type==="added"){const o=r.doc.data();o.id=r.doc.id,o.downloadURL=i,t(o)}r.type==="modified"&&e(),r.type==="removed"&&n()})})})},Ew=t=>{ny(Ic,{sample:t.sample,device:t.device,filename:t.file[0].name,hmd:t.hmd,note:t.note,timestamp:oy()}).then(e=>{const n=Hi(Tv,`${e.id}/${t.file[0].name}`);gv(n,t.file[0])})};const Ac=fe({border:[Boolean,Number,String]},"border");function kc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:at();return{borderClasses:A(()=>{const s=fn(t)?t.value:t.border,r=[];if(s===!0||s==="")r.push(`${e}--border`);else if(typeof s=="string"||s===0)for(const i of String(s).split(" "))r.push(`border-${i}`);return r})}}const Sv=[null,"default","comfortable","compact"],Dc=fe({density:{type:String,default:"default",validator:t=>Sv.includes(t)}},"density");function Rc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:at();return{densityClasses:A(()=>`${e}--density-${t.density}`)}}const Nc=fe({elevation:{type:[Number,String],validator(t){const e=parseInt(t);return!isNaN(e)&&e>=0&&e<=24}}},"elevation");function xc(t){return{elevationClasses:A(()=>{const n=fn(t)?t.value:t.elevation,s=[];return n==null||s.push(`elevation-${n}`),s})}}const Gi=fe({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function Ki(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:at();return{roundedClasses:A(()=>{const s=fn(t)?t.value:t.rounded,r=[];if(s===!0||s==="")r.push(`${e}--rounded`);else if(typeof s=="string"||s===0)for(const i of String(s).split(" "))r.push(`rounded-${i}`);return r})}}function Wi(t){return va(()=>{const e=[],n={};return t.value.background&&(eo(t.value.background)?n.backgroundColor=t.value.background:e.push(`bg-${t.value.background}`)),t.value.text&&(eo(t.value.text)?(n.color=t.value.text,n.caretColor=t.value.text):e.push(`text-${t.value.text}`)),{colorClasses:e,colorStyles:n}})}function ls(t,e){const n=A(()=>({text:fn(t)?t.value:e?t[e]:null})),{colorClasses:s,colorStyles:r}=Wi(n);return{textColorClasses:s,textColorStyles:r}}function fa(t,e){const n=A(()=>({background:fn(t)?t.value:e?t[e]:null})),{colorClasses:s,colorStyles:r}=Wi(n);return{backgroundColorClasses:s,backgroundColorStyles:r}}const Cv=["elevated","flat","tonal","outlined","text","plain"];function Iv(t,e){return T(wa,null,[t&&T("span",{key:"overlay",class:`${e}__overlay`},null),T("span",{key:"underlay",class:`${e}__underlay`},null)])}const Lc=fe({color:String,variant:{type:String,default:"elevated",validator:t=>Cv.includes(t)}},"variant");function Av(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:at();const n=A(()=>{const{variant:i}=to(t);return`${e}--variant-${i}`}),{colorClasses:s,colorStyles:r}=Wi(A(()=>{const{variant:i,color:o}=to(t);return{[["elevated","flat"].includes(i)?"background":"text"]:o}}));return{colorClasses:s,colorStyles:r,variantClasses:n}}const kv=Pe({name:"VBtnGroup",props:{divided:Boolean,...Ac(),...Dc(),...Nc(),...Gi(),...ut(),...gn(),...Lc()},setup(t,e){let{slots:n}=e;const{themeClasses:s}=mn(t),{densityClasses:r}=Rc(t),{borderClasses:i}=kc(t),{elevationClasses:o}=xc(t),{roundedClasses:a}=Ki(t);Ea({VBtn:{height:"auto",color:Re(t,"color"),density:Re(t,"density"),flat:!0,variant:Re(t,"variant")}}),Ve(()=>T(t.tag,{class:["v-btn-group",{"v-btn-group--divided":t.divided},s.value,i.value,r.value,o.value,a.value]},n))}}),Dv=fe({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Rv=fe({value:null,disabled:Boolean,selectedClass:String},"group-item");function Nv(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const s=Vr("useGroupItem");if(!s)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const r=sh();ba(Symbol.for(`${e.description}:id`),r);const i=rh(e,null);if(!i){if(!n)return i;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${e.description}`)}const o=Re(t,"value"),a=A(()=>i.disabled.value||t.disabled);i.register({id:r,value:o,disabled:a},s),Fr(()=>{i.unregister(r)});const u=A(()=>i.isSelected(r)),l=A(()=>u.value&&[i.selectedClass.value,t.selectedClass]);return yt(u,c=>{s.emit("group:selected",{value:c})}),{id:r,isSelected:u,toggle:()=>i.select(r,!u.value),select:c=>i.select(r,c),selectedClass:l,value:o,disabled:a,group:i}}function xv(t,e){let n=!1;const s=ih([]),r=Ta(t,"modelValue",[],d=>d==null?[]:Oc(s,uh(d)),d=>{const f=Ov(s,d);return t.multiple?f:f[0]}),i=Vr("useGroup");function o(d,f){const p=d,y=Symbol.for(`${e.description}:id`),D=lh(y,i==null?void 0:i.vnode).indexOf(f);D>-1?s.splice(D,0,p):s.push(p)}function a(d){if(n)return;u();const f=s.findIndex(p=>p.id===d);s.splice(f,1)}function u(){const d=s.find(f=>!f.disabled);d&&t.mandatory==="force"&&!r.value.length&&(r.value=[d.id])}oh(()=>{u()}),Fr(()=>{n=!0});function l(d,f){const p=s.find(y=>y.id===d);if(!(f&&p!=null&&p.disabled))if(t.multiple){const y=r.value.slice(),v=y.findIndex(S=>S===d),D=~v;if(f=f!=null?f:!D,D&&t.mandatory&&y.length<=1||!D&&t.max!=null&&y.length+1>t.max)return;v<0&&f?y.push(d):v>=0&&!f&&y.splice(v,1),r.value=y}else{const y=r.value.includes(d);if(t.mandatory&&y)return;r.value=(f!=null?f:!y)?[d]:[]}}function c(d){if(t.multiple&&ch('This method is not supported when using "multiple" prop'),r.value.length){const f=r.value[0],p=s.findIndex(D=>D.id===f);let y=(p+d)%s.length,v=s[y];for(;v.disabled&&y!==p;)y=(y+d)%s.length,v=s[y];if(v.disabled)return;r.value=[s[y].id]}else{const f=s.find(p=>!p.disabled);f&&(r.value=[f.id])}}const h={register:o,unregister:a,selected:r,select:l,disabled:Re(t,"disabled"),prev:()=>c(s.length-1),next:()=>c(1),isSelected:d=>r.value.includes(d),selectedClass:A(()=>t.selectedClass),items:A(()=>s),getItemIndex:d=>Lv(s,d)};return ba(e,h),h}function Lv(t,e){const n=Oc(t,[e]);return n.length?t.findIndex(s=>s.id===n[0]):-1}function Oc(t,e){const n=[];for(let s=0;s<t.length;s++){const r=t[s];r.value!=null?e.find(i=>ah(i,r.value))!=null&&n.push(r.id):e.includes(s)&&n.push(r.id)}return n}function Ov(t,e){const n=[];for(let s=0;s<t.length;s++){const r=t[s];e.includes(r.id)&&n.push(r.value!=null?r.value:s)}return n}const Mc=Symbol.for("vuetify:v-btn-toggle");hh()({name:"VBtnToggle",props:Dv(),emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const{isSelected:s,next:r,prev:i,select:o,selected:a}=xv(t,Mc);return Ve(()=>{var u;return T(kv,{class:"v-btn-toggle"},{default:()=>[(u=n.default)==null?void 0:u.call(n,{isSelected:s,next:r,prev:i,select:o,selected:a})]})}),{next:r,prev:i,select:o}}});const Zs=dh({name:"VDefaultsProvider",props:{defaults:Object,reset:[Number,String],root:Boolean,scoped:Boolean},setup(t,e){let{slots:n}=e;const{defaults:s,reset:r,root:i,scoped:o}=fh(t);return Ea(s,{reset:r,root:i,scoped:o}),()=>{var a;return(a=n.default)==null?void 0:a.call(n)}}});const Mv=["x-small","small","default","large","x-large"],Qi=fe({size:{type:[String,Number],default:"default"}},"size");function Xi(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:at();return va(()=>{let n,s;return Hn(Mv,t.size)?n=`${e}--size-${t.size}`:t.size&&(s={width:q(t.size),height:q(t.size)}),{sizeClasses:n,sizeStyles:s}})}const Pv=fe({color:String,start:Boolean,end:Boolean,icon:sr,...Qi(),...ut({tag:"i"}),...gn()},"v-icon"),er=Pe({name:"VIcon",props:Pv(),setup(t,e){let{attrs:n,slots:s}=e,r;s.default&&(r=A(()=>{var c,h;const d=(c=s.default)==null?void 0:c.call(s);if(!!d)return(h=d.filter(f=>f.type===gh&&f.children&&typeof f.children=="string")[0])==null?void 0:h.children}));const{themeClasses:i}=mn(t),{iconData:o}=mh(r||t),{sizeClasses:a}=Xi(t),{textColorClasses:u,textColorStyles:l}=ls(Re(t,"color"));return Ve(()=>{var c;return T(o.value.component,{tag:t.tag,icon:o.value.icon,class:["v-icon","notranslate",i.value,a.value,u.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":t.start,"v-icon--end":t.end}],style:[a.value?void 0:{fontSize:q(t.size),height:q(t.size),width:q(t.size)},l.value],role:n.onClick?"button":void 0,"aria-hidden":!n.onClick},{default:()=>[(c=s.default)==null?void 0:c.call(s)]})}),{}}});function Pc(t){const e=ke(),n=ke(!1);if($r){const s=new IntersectionObserver(r=>{t==null||t(r,s),n.value=!!r.find(i=>i.isIntersecting)});Fr(()=>{s.disconnect()}),yt(e,(r,i)=>{i&&(s.unobserve(i),n.value=!1),r&&s.observe(r)},{flush:"post"})}return{intersectionRef:e,isIntersecting:n}}const Vv=Pe({name:"VProgressCircular",props:{bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...Qi(),...ut({tag:"div"}),...gn()},setup(t,e){let{slots:n}=e;const s=20,r=2*Math.PI*s,i=ke(),{themeClasses:o}=mn(t),{sizeClasses:a,sizeStyles:u}=Xi(t),{textColorClasses:l,textColorStyles:c}=ls(Re(t,"color")),{textColorClasses:h,textColorStyles:d}=ls(Re(t,"bgColor")),{intersectionRef:f,isIntersecting:p}=Pc(),{resizeRef:y,contentRect:v}=Ch(),D=A(()=>Math.max(0,Math.min(100,parseFloat(t.modelValue)))),S=A(()=>Number(t.width)),O=A(()=>u.value?Number(t.size):v.value?v.value.width:Math.max(S.value,32)),M=A(()=>s/(1-S.value/O.value)*2),U=A(()=>S.value/O.value*M.value),ge=A(()=>q((100-D.value)/100*r));return ph(()=>{f.value=i.value,y.value=i.value}),Ve(()=>T(t.tag,{ref:i,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!t.indeterminate,"v-progress-circular--visible":p.value,"v-progress-circular--disable-shrink":t.indeterminate==="disable-shrink"},o.value,a.value,l.value],style:[u.value,c.value],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":t.indeterminate?void 0:D.value},{default:()=>[T("svg",{style:{transform:`rotate(calc(-90deg + ${Number(t.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${M.value} ${M.value}`},[T("circle",{class:["v-progress-circular__underlay",h.value],style:d.value,fill:"transparent",cx:"50%",cy:"50%",r:s,"stroke-width":U.value,"stroke-dasharray":r,"stroke-dashoffset":0},null),T("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:s,"stroke-width":U.value,"stroke-dasharray":r,"stroke-dashoffset":ge.value},null)]),n.default&&T("div",{class:"v-progress-circular__content"},[n.default({value:D.value})])]})),{}}});const Mr=Symbol("rippleStop"),Fv=80;function ga(t,e){t.style.transform=e,t.style.webkitTransform=e}function tr(t,e){t.style.opacity=`calc(${e} * var(--v-theme-overlay-multiplier))`}function Pr(t){return t.constructor.name==="TouchEvent"}function Vc(t){return t.constructor.name==="KeyboardEvent"}const $v=function(t,e){var n;let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=0,i=0;if(!Vc(t)){const d=e.getBoundingClientRect(),f=Pr(t)?t.touches[t.touches.length-1]:t;r=f.clientX-d.left,i=f.clientY-d.top}let o=0,a=.3;(n=e._ripple)!=null&&n.circle?(a=.15,o=e.clientWidth/2,o=s.center?o:o+Math.sqrt((r-o)**2+(i-o)**2)/4):o=Math.sqrt(e.clientWidth**2+e.clientHeight**2)/2;const u=`${(e.clientWidth-o*2)/2}px`,l=`${(e.clientHeight-o*2)/2}px`,c=s.center?u:`${r-o}px`,h=s.center?l:`${i-o}px`;return{radius:o,scale:a,x:c,y:h,centerX:u,centerY:l}},cs={show(t,e){var n;let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!(e!=null&&(n=e._ripple)!=null&&n.enabled))return;const r=document.createElement("span"),i=document.createElement("span");r.appendChild(i),r.className="v-ripple__container",s.class&&(r.className+=` ${s.class}`);const{radius:o,scale:a,x:u,y:l,centerX:c,centerY:h}=$v(t,e,s),d=`${o*2}px`;i.className="v-ripple__animation",i.style.width=d,i.style.height=d,e.appendChild(r);const f=window.getComputedStyle(e);f&&f.position==="static"&&(e.style.position="relative",e.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),ga(i,`translate(${u}, ${l}) scale3d(${a},${a},${a})`),tr(i,0),i.dataset.activated=String(performance.now()),setTimeout(()=>{i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),ga(i,`translate(${c}, ${h}) scale3d(1,1,1)`),tr(i,.08)},0)},hide(t){var e;if(!(t!=null&&(e=t._ripple)!=null&&e.enabled))return;const n=t.getElementsByClassName("v-ripple__animation");if(n.length===0)return;const s=n[n.length-1];if(s.dataset.isHiding)return;s.dataset.isHiding="true";const r=performance.now()-Number(s.dataset.activated),i=Math.max(250-r,0);setTimeout(()=>{s.classList.remove("v-ripple__animation--in"),s.classList.add("v-ripple__animation--out"),tr(s,0),setTimeout(()=>{t.getElementsByClassName("v-ripple__animation").length===1&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),s.parentNode&&t.removeChild(s.parentNode)},300)},i)}};function Fc(t){return typeof t>"u"||!!t}function hn(t){const e={},n=t.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||t[Mr])){if(t[Mr]=!0,Pr(t))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(e.center=n._ripple.centered||Vc(t),n._ripple.class&&(e.class=n._ripple.class),Pr(t)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{cs.show(t,n,e)},n._ripple.showTimer=window.setTimeout(()=>{var s;n!=null&&(s=n._ripple)!=null&&s.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},Fv)}else cs.show(t,n,e)}}function ma(t){t[Mr]=!0}function me(t){const e=t.currentTarget;if(!(!e||!e._ripple)){if(window.clearTimeout(e._ripple.showTimer),t.type==="touchend"&&e._ripple.showTimerCommit){e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,e._ripple.showTimer=window.setTimeout(()=>{me(t)});return}window.setTimeout(()=>{e._ripple&&(e._ripple.touched=!1)}),cs.hide(e)}}function $c(t){const e=t.currentTarget;!e||!e._ripple||(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}let dn=!1;function Bc(t){!dn&&(t.keyCode===no.enter||t.keyCode===no.space)&&(dn=!0,hn(t))}function Uc(t){dn=!1,me(t)}function qc(t){dn&&(dn=!1,me(t))}function jc(t,e,n){var o;const{value:s,modifiers:r}=e,i=Fc(s);if(i||cs.hide(t),t._ripple=(o=t._ripple)!=null?o:{},t._ripple.enabled=i,t._ripple.centered=r.center,t._ripple.circle=r.circle,yh(s)&&s.class&&(t._ripple.class=s.class),i&&!n){if(r.stop){t.addEventListener("touchstart",ma,{passive:!0}),t.addEventListener("mousedown",ma);return}t.addEventListener("touchstart",hn,{passive:!0}),t.addEventListener("touchend",me,{passive:!0}),t.addEventListener("touchmove",$c,{passive:!0}),t.addEventListener("touchcancel",me),t.addEventListener("mousedown",hn),t.addEventListener("mouseup",me),t.addEventListener("mouseleave",me),t.addEventListener("keydown",Bc),t.addEventListener("keyup",Uc),t.addEventListener("blur",qc),t.addEventListener("dragstart",me,{passive:!0})}else!i&&n&&zc(t)}function zc(t){t.removeEventListener("mousedown",hn),t.removeEventListener("touchstart",hn),t.removeEventListener("touchend",me),t.removeEventListener("touchmove",$c),t.removeEventListener("touchcancel",me),t.removeEventListener("mouseup",me),t.removeEventListener("mouseleave",me),t.removeEventListener("keydown",Bc),t.removeEventListener("keyup",Uc),t.removeEventListener("dragstart",me),t.removeEventListener("blur",qc)}function Bv(t,e){jc(t,e,!1)}function Uv(t){delete t._ripple,zc(t)}function qv(t,e){if(e.value===e.oldValue)return;const n=Fc(e.oldValue);jc(t,e,n)}const jv={mounted:Bv,unmounted:Uv,updated:qv},Hc=fe({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Gc(t){return{dimensionStyles:A(()=>({height:q(t.height),maxHeight:q(t.maxHeight),maxWidth:q(t.maxWidth),minHeight:q(t.minHeight),minWidth:q(t.minWidth),width:q(t.width)}))}}const zv=Pe({name:"VProgressLinear",props:{active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...Gi(),...ut(),...gn()},emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const s=Ta(t,"modelValue"),{isRtl:r}=_a(),{themeClasses:i}=mn(t),{textColorClasses:o,textColorStyles:a}=ls(t,"color"),{backgroundColorClasses:u,backgroundColorStyles:l}=fa(A(()=>t.bgColor||t.color)),{backgroundColorClasses:c,backgroundColorStyles:h}=fa(t,"color"),{roundedClasses:d}=Ki(t),{intersectionRef:f,isIntersecting:p}=Pc(),y=A(()=>parseInt(t.max,10)),v=A(()=>parseInt(t.height,10)),D=A(()=>parseFloat(t.bufferValue)/y.value*100),S=A(()=>parseFloat(s.value)/y.value*100),O=A(()=>r.value!==t.reverse),M=A(()=>t.indeterminate?"fade-transition":"slide-x-transition"),U=A(()=>t.bgOpacity==null?t.bgOpacity:parseFloat(t.bgOpacity));function ge(Q){if(!f.value)return;const{left:L,right:H,width:ce}=f.value.getBoundingClientRect(),We=O.value?ce-Q.clientX+(H-ce):Q.clientX-L;s.value=Math.round(We/ce*y.value)}return Ve(()=>T(t.tag,{ref:f,class:["v-progress-linear",{"v-progress-linear--active":t.active&&p.value,"v-progress-linear--reverse":O.value,"v-progress-linear--rounded":t.rounded,"v-progress-linear--rounded-bar":t.roundedBar,"v-progress-linear--striped":t.striped},d.value,i.value],style:{height:t.active?q(v.value):0,"--v-progress-linear-height":q(v.value)},role:"progressbar","aria-hidden":t.active?"false":"true","aria-valuemin":"0","aria-valuemax":t.max,"aria-valuenow":t.indeterminate?void 0:S.value,onClick:t.clickable&&ge},{default:()=>[t.stream&&T("div",{key:"stream",class:["v-progress-linear__stream",o.value],style:{...a.value,[O.value?"left":"right"]:q(-v.value),borderTop:`${q(v.value/2)} dotted`,opacity:U.value,top:`calc(50% - ${q(v.value/4)})`,width:q(100-D.value,"%"),"--v-progress-linear-stream-to":q(v.value*(O.value?1:-1))}},null),T("div",{class:["v-progress-linear__background",u.value],style:[l.value,{opacity:U.value,width:q(t.stream?D.value:100,"%")}]},null),T(Sa,{name:M.value},{default:()=>[t.indeterminate?T("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(Q=>T("div",{key:Q,class:["v-progress-linear__indeterminate",Q,c.value],style:h.value},null))]):T("div",{class:["v-progress-linear__determinate",c.value],style:[h.value,{width:q(S.value,"%")}]},null)]}),n.default&&T("div",{class:"v-progress-linear__content"},[n.default({value:S.value,buffer:D.value})])]})),{}}}),Hv=fe({loading:[Boolean,String]},"loader");function Gv(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:at();return{loaderClasses:A(()=>({[`${e}--loading`]:t.loading}))}}function bw(t,e){var n;let{slots:s}=e;return T("div",{class:`${t.name}__loader`},[((n=s.default)==null?void 0:n.call(s,{color:t.color,isActive:t.active}))||T(zv,{active:t.active,color:t.color,height:"2",indeterminate:!0},null)])}const pa={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Kv=fe({location:String},"location");function Wv(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:s}=_a();return{locationStyles:A(()=>{if(!t.location)return{};const{side:i,align:o}=Ah(t.location.split(" ").length>1?t.location:`${t.location} center`,s.value);function a(l){return n?n(l):0}const u={};return i!=="center"&&(e?u[pa[i]]=`calc(100% - ${a(i)}px)`:u[i]=0),o!=="center"?e?u[pa[o]]=`calc(100% - ${a(o)}px)`:u[o]=0:(i==="center"?u.top=u.left="50%":u[{top:"left",bottom:"left",left:"top",right:"top"}[i]]="50%",u.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[i]),u})}}const Qv=["static","relative","fixed","absolute","sticky"],Xv=fe({position:{type:String,validator:t=>Qv.includes(t)}},"position");function Yv(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:at();return{positionClasses:A(()=>t.position?`${e}--${t.position}`:void 0)}}function Tw(){var t,e;return(t=Vr("useRouter"))==null||(e=t.proxy)==null?void 0:e.$router}function Jv(t,e){const n=vh("RouterLink"),s=A(()=>!!(t.href||t.to)),r=A(()=>(s==null?void 0:s.value)||so(e,"click")||so(t,"click"));if(typeof n=="string")return{isLink:s,isClickable:r,href:Re(t,"href")};const i=t.to?n.useLink(t):void 0;return{isLink:s,isClickable:r,route:i==null?void 0:i.route,navigate:i==null?void 0:i.navigate,isActive:i&&A(()=>{var o,a;return t.exact?(o=i.isExactActive)==null?void 0:o.value:(a=i.isActive)==null?void 0:a.value}),href:A(()=>t.to?i==null?void 0:i.route.value.href:t.href)}}const Zv=fe({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let nr=!1;function _w(t,e){let n=!1,s,r;wh&&(Br(()=>{window.addEventListener("popstate",i),s=t==null?void 0:t.beforeEach((o,a,u)=>{nr?n?e(u):u():setTimeout(()=>n?e(u):u()),nr=!0}),r=t==null?void 0:t.afterEach(()=>{nr=!1})}),Eh(()=>{var o,a;window.removeEventListener("popstate",i),(o=s)==null||o(),(a=r)==null||a()}));function i(o){var a;(a=o.state)!=null&&a.replaced||(n=!0,setTimeout(()=>n=!1))}}function ew(t,e){yt(()=>{var n;return(n=t.isActive)==null?void 0:n.value},n=>{t.isLink.value&&n&&e&&Br(()=>{e(!0)})},{immediate:!0})}const Sw=Pe({name:"VBtn",directives:{Ripple:jv},props:{active:{type:Boolean,default:void 0},symbol:{type:null,default:Mc},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:sr,appendIcon:sr,block:Boolean,stacked:Boolean,ripple:{type:Boolean,default:!0},...Ac(),...Gi(),...Dc(),...Hc(),...Nc(),...Rv(),...Hv(),...Kv(),...Xv(),...Zv(),...Qi(),...ut({tag:"button"}),...gn(),...Lc({variant:"elevated"})},emits:{"group:selected":t=>!0},setup(t,e){let{attrs:n,slots:s}=e;const{themeClasses:r}=mn(t),{borderClasses:i}=kc(t),{colorClasses:o,colorStyles:a,variantClasses:u}=Av(t),{densityClasses:l}=Rc(t),{dimensionStyles:c}=Gc(t),{elevationClasses:h}=xc(t),{loaderClasses:d}=Gv(t),{locationStyles:f}=Wv(t),{positionClasses:p}=Yv(t),{roundedClasses:y}=Ki(t),{sizeClasses:v,sizeStyles:D}=Xi(t),S=Nv(t,t.symbol,!1),O=Jv(t,n),M=A(()=>{var Q;return t.active!==!1&&(t.active||((Q=O.isActive)==null?void 0:Q.value)||(S==null?void 0:S.isSelected.value))}),U=A(()=>(S==null?void 0:S.disabled.value)||t.disabled),ge=A(()=>t.variant==="elevated"&&!(t.disabled||t.flat||t.border));return ew(O,S==null?void 0:S.select),Ve(()=>{var Q,L,H,ce;const We=O.isLink.value?"a":t.tag,Vt=!S||S.isSelected.value,th=!!(t.prependIcon||s.prepend),nh=!!(t.appendIcon||s.append),Zi=!!(t.icon&&t.icon!==!0);return rr(T(We,{type:We==="a"?void 0:"button",class:["v-btn",S==null?void 0:S.selectedClass.value,{"v-btn--active":M.value,"v-btn--block":t.block,"v-btn--disabled":U.value,"v-btn--elevated":ge.value,"v-btn--flat":t.flat,"v-btn--icon":!!t.icon,"v-btn--loading":t.loading,"v-btn--stacked":t.stacked},r.value,i.value,Vt?o.value:void 0,l.value,h.value,d.value,p.value,y.value,v.value,u.value],style:[Vt?a.value:void 0,c.value,f.value,D.value],disabled:U.value||void 0,href:O.href.value,onClick:Nn=>{var Ee;U.value||((Ee=O.navigate)==null||Ee.call(O,Nn),S==null||S.toggle())}},{default:()=>{var Nn;return[Iv(!0,"v-btn"),!t.icon&&th&&T(Zs,{key:"prepend",defaults:{VIcon:{icon:t.prependIcon}}},{default:()=>{var Ee;return[T("span",{class:"v-btn__prepend"},[(Ee=(Q=s.prepend)==null?void 0:Q.call(s))!=null?Ee:T(er,null,null)])]}}),T("span",{class:"v-btn__content","data-no-activator":""},[T(Zs,{key:"content",defaults:{VIcon:{icon:Zi?t.icon:void 0}}},{default:()=>{var Ee;return[(Ee=(L=s.default)==null?void 0:L.call(s))!=null?Ee:Zi&&T(er,{key:"icon"},null)]}})]),!t.icon&&nh&&T(Zs,{key:"append",defaults:{VIcon:{icon:t.appendIcon}}},{default:()=>{var Ee;return[T("span",{class:"v-btn__append"},[(Ee=(H=s.append)==null?void 0:H.call(s))!=null?Ee:T(er,null,null)])]}}),!!t.loading&&T("span",{key:"loader",class:"v-btn__loader"},[(Nn=(ce=s.loader)==null?void 0:ce.call(s))!=null?Nn:T(Vv,{color:typeof t.loading=="boolean"?void 0:t.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[Ca("ripple"),!U.value&&t.ripple,null]])}),{}}});const Cw=Pe({name:"VContainer",props:{fluid:{type:Boolean,default:!1},...ut()},setup(t,e){let{slots:n}=e;return Ve(()=>T(t.tag,{class:["v-container",{"v-container--fluid":t.fluid}]},n)),{}}}),tw=["sm","md","lg","xl","xxl"],Yi=["start","end","center"],Kc=["space-between","space-around","space-evenly"];function Ji(t,e){return tw.reduce((n,s)=>(n[t+bh(s)]=e(),n),{})}const nw=[...Yi,"baseline","stretch"],Wc=t=>nw.includes(t),Qc=Ji("align",()=>({type:String,default:null,validator:Wc})),sw=[...Yi,...Kc],Xc=t=>sw.includes(t),Yc=Ji("justify",()=>({type:String,default:null,validator:Xc})),rw=[...Yi,...Kc,"stretch"],Jc=t=>rw.includes(t),Zc=Ji("alignContent",()=>({type:String,default:null,validator:Jc})),ya={align:Object.keys(Qc),justify:Object.keys(Yc),alignContent:Object.keys(Zc)},iw={align:"align",justify:"justify",alignContent:"align-content"};function ow(t,e,n){let s=iw[t];if(n!=null){if(e){const r=e.replace(t,"");s+=`-${r}`}return s+=`-${n}`,s.toLowerCase()}}const Iw=Pe({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:Wc},...Qc,justify:{type:String,default:null,validator:Xc},...Yc,alignContent:{type:String,default:null,validator:Jc},...Zc,...ut()},setup(t,e){let{slots:n}=e;const s=A(()=>{const r=[];let i;for(i in ya)ya[i].forEach(o=>{const a=t[o],u=ow(i,o,a);u&&r.push(u)});return r.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),r});return()=>{var r;return Ia(t.tag,{class:["v-row",s.value]},(r=n.default)==null?void 0:r.call(n))}}});function aw(t){return{aspectStyles:A(()=>{const e=Number(t.aspectRatio);return e?{paddingBottom:String(1/e*100)+"%"}:void 0})}}const uw=Pe({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...Hc()},setup(t,e){let{slots:n}=e;const{aspectStyles:s}=aw(t),{dimensionStyles:r}=Gc(t);return Ve(()=>{var i;return T("div",{class:"v-responsive",style:r.value},[T("div",{class:"v-responsive__sizer",style:s.value},null),(i=n.additional)==null?void 0:i.call(n),n.default&&T("div",{class:["v-responsive__content",t.contentClass]},[n.default()])])}),{}}});function lw(t,e){if(!$r)return;const n=e.modifiers||{},s=e.value,{handler:r,options:i}=typeof s=="object"?s:{handler:s,options:{}},o=new IntersectionObserver(function(){var a;let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],l=arguments.length>1?arguments[1]:void 0;const c=(a=t._observe)==null?void 0:a[e.instance.$.uid];if(!c)return;const h=u.some(d=>d.isIntersecting);r&&(!n.quiet||c.init)&&(!n.once||h||c.init)&&r(h,u,l),h&&n.once?eh(t,e):c.init=!0},i);t._observe=Object(t._observe),t._observe[e.instance.$.uid]={init:!1,observer:o},o.observe(t)}function eh(t,e){var n;const s=(n=t._observe)==null?void 0:n[e.instance.$.uid];!s||(s.observer.unobserve(t),delete t._observe[e.instance.$.uid])}const cw={mounted:lw,unmounted:eh},hw=cw,dw=fe({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:t=>t!==!0}},"transition"),Bn=(t,e)=>{let{slots:n}=e;const{transition:s,...r}=t,{component:i=Sa,...o}=typeof s=="object"?s:{};return Ia(i,Th(typeof s=="string"?{name:s}:o,r),n)},Aw=Pe({name:"VImg",directives:{intersect:hw},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...dw()},emits:{loadstart:t=>!0,load:t=>!0,error:t=>!0},setup(t,e){let{emit:n,slots:s}=e;const r=ke(""),i=ke(),o=ke(t.eager?"loading":"idle"),a=ke(),u=ke(),l=A(()=>t.src&&typeof t.src=="object"?{src:t.src.src,srcset:t.srcset||t.src.srcset,lazySrc:t.lazySrc||t.src.lazySrc,aspect:Number(t.aspectRatio||t.src.aspect||0)}:{src:t.src,srcset:t.srcset,lazySrc:t.lazySrc,aspect:Number(t.aspectRatio||0)}),c=A(()=>l.value.aspect||a.value/u.value||0);yt(()=>t.src,()=>{h(o.value!=="idle")}),yt(c,(L,H)=>{!L&&H&&i.value&&v(i.value)}),_h(()=>h());function h(L){if(!(t.eager&&L)&&!($r&&!L&&!t.eager)){if(o.value="loading",l.value.lazySrc){const H=new Image;H.src=l.value.lazySrc,v(H,null)}!l.value.src||Br(()=>{var H,ce;if(n("loadstart",((H=i.value)==null?void 0:H.currentSrc)||l.value.src),(ce=i.value)!=null&&ce.complete){if(i.value.naturalWidth||f(),o.value==="error")return;c.value||v(i.value,null),d()}else c.value||v(i.value),p()})}}function d(){var L;p(),o.value="loaded",n("load",((L=i.value)==null?void 0:L.currentSrc)||l.value.src)}function f(){var L;o.value="error",n("error",((L=i.value)==null?void 0:L.currentSrc)||l.value.src)}function p(){const L=i.value;L&&(r.value=L.currentSrc||L.src)}let y=-1;function v(L){let H=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const ce=()=>{clearTimeout(y);const{naturalHeight:We,naturalWidth:Vt}=L;We||Vt?(a.value=Vt,u.value=We):!L.complete&&o.value==="loading"&&H!=null?y=window.setTimeout(ce,H):(L.currentSrc.endsWith(".svg")||L.currentSrc.startsWith("data:image/svg+xml"))&&(a.value=1,u.value=1)};ce()}const D=A(()=>({"v-img__img--cover":t.cover,"v-img__img--contain":!t.cover})),S=()=>{var L;if(!l.value.src||o.value==="idle")return null;const H=T("img",{class:["v-img__img",D.value],src:l.value.src,srcset:l.value.srcset,alt:"",sizes:t.sizes,ref:i,onLoad:d,onError:f},null),ce=(L=s.sources)==null?void 0:L.call(s);return T(Bn,{transition:t.transition,appear:!0},{default:()=>[rr(ce?T("picture",{class:"v-img__picture"},[ce,H]):H,[[Sh,o.value==="loaded"]])]})},O=()=>T(Bn,{transition:t.transition},{default:()=>[l.value.lazySrc&&o.value!=="loaded"&&T("img",{class:["v-img__img","v-img__img--preload",D.value],src:l.value.lazySrc,alt:""},null)]}),M=()=>s.placeholder?T(Bn,{transition:t.transition,appear:!0},{default:()=>[(o.value==="loading"||o.value==="error"&&!s.error)&&T("div",{class:"v-img__placeholder"},[s.placeholder()])]}):null,U=()=>s.error?T(Bn,{transition:t.transition,appear:!0},{default:()=>[o.value==="error"&&T("div",{class:"v-img__error"},[s.error()])]}):null,ge=()=>t.gradient?T("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${t.gradient})`}},null):null,Q=ke(!1);{const L=yt(c,H=>{H&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{Q.value=!0})}),L())})}return Ve(()=>rr(T(uw,{class:["v-img",{"v-img--booting":!Q.value}],style:{width:q(t.width==="auto"?a.value:t.width)},aspectRatio:c.value,"aria-label":t.alt,role:t.alt?"img":void 0},{additional:()=>T(wa,null,[T(S,null,null),T(O,null,null),T(ge,null,null),T(M,null,null),T(U,null,null)]),default:s.default}),[[Ca("intersect"),{handler:h,options:t.options},null,{once:!0}]])),{currentSrc:r,image:i,state:o,naturalWidth:a,naturalHeight:u}}});export{xc as A,Nv as B,Jv as C,Zs as D,Hc as E,Gc as F,Ah as G,mw as H,hw as I,pw as J,yw as K,bw as L,Bn as M,vw as N,Tw as O,_w as P,Ew as Q,jv as R,Aw as V,Cw as a,Iw as b,Sw as c,er as d,Hv as e,Gv as f,fa as g,ls as h,dw as i,Gi as j,Qi as k,Lc as l,Dc as m,Av as n,Ki as o,Xi as p,Iv as q,Dv as r,ww as s,xv as t,Rc as u,Ac as v,Nc as w,Rv as x,Zv as y,kc as z};
