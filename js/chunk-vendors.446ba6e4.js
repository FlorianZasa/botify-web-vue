(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"04f8":function(e,t,n){var i=n("2d00"),r=n("d039");e.exports=!!Object.getOwnPropertySymbols&&!r((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&i&&i<41}))},"06cf":function(e,t,n){var i=n("83ab"),r=n("c65b"),s=n("d1e7"),o=n("5c6c"),a=n("fc6a"),l=n("a04b"),c=n("1a2d"),h=n("0cfb"),u=Object.getOwnPropertyDescriptor;t.f=i?u:function(e,t){if(e=a(e),t=l(t),h)try{return u(e,t)}catch(n){}if(c(e,t))return o(!r(s.f,e,t),e[t])}},"07fa":function(e,t,n){var i=n("50c4");e.exports=function(e){return i(e.length)}},"0829":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Dh})),n.d(t,"b",(function(){return Tc})),n.d(t,"c",(function(){return fc})),n.d(t,"d",(function(){return nc})),n.d(t,"e",(function(){return ah})),n.d(t,"f",(function(){return Ic})),n.d(t,"g",(function(){return S})),n.d(t,"h",(function(){return Oc})),n.d(t,"i",(function(){return lh})),n.d(t,"j",(function(){return ch})),n.d(t,"k",(function(){return j})),n.d(t,"l",(function(){return Mh})),n.d(t,"m",(function(){return Me})),n.d(t,"n",(function(){return X})),n.d(t,"o",(function(){return W})),n.d(t,"p",(function(){return Ql})),n.d(t,"q",(function(){return x})),n.d(t,"r",(function(){return Ce})),n.d(t,"s",(function(){return m})),n.d(t,"t",(function(){return Gl})),n.d(t,"u",(function(){return qh})),n.d(t,"v",(function(){return ru})),n.d(t,"w",(function(){return iu})),n.d(t,"x",(function(){return xc})),n.d(t,"y",(function(){return sc})),n.d(t,"z",(function(){return oc})),n.d(t,"A",(function(){return tc})),n.d(t,"B",(function(){return Gh})),n.d(t,"C",(function(){return tu})),n.d(t,"D",(function(){return Sc})),n.d(t,"E",(function(){return ac})),n.d(t,"F",(function(){return vc})),n.d(t,"G",(function(){return bc})),n.d(t,"H",(function(){return kc})),n.d(t,"I",(function(){return Ih})),n.d(t,"J",(function(){return Ch})),n.d(t,"K",(function(){return gc})),n.d(t,"L",(function(){return Qh})),n.d(t,"M",(function(){return jh})),n.d(t,"N",(function(){return zh})),n.d(t,"O",(function(){return Bh})),n.d(t,"P",(function(){return Hh})),n.d(t,"Q",(function(){return Wh})),n.d(t,"R",(function(){return Xh})),n.d(t,"S",(function(){return su})),n.d(t,"T",(function(){return xh})),n.d(t,"U",(function(){return wh})),n.d(t,"V",(function(){return _c})),n.d(t,"W",(function(){return Ac})),n.d(t,"X",(function(){return $h})),n.d(t,"Y",(function(){return Kh})),n.d(t,"Z",(function(){return bh})),n.d(t,"ab",(function(){return ph})),n.d(t,"bb",(function(){return cc})),n.d(t,"cb",(function(){return lc})),n.d(t,"db",(function(){return eu})),n.d(t,"eb",(function(){return nu})),n.d(t,"fb",(function(){return Uh})),n.d(t,"gb",(function(){return f})),n.d(t,"hb",(function(){return uh})),n.d(t,"ib",(function(){return _h})),n.d(t,"jb",(function(){return Sh})),n.d(t,"kb",(function(){return Yh})),n.d(t,"lb",(function(){return wc})),n.d(t,"mb",(function(){return mh}));var i=n("589b"),r=n("22e5"),s=n("e691"),o=n("1fd5"),a=n("8f6b");const l="@firebase/firestore";
/**
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
 */class c{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}c.UNAUTHENTICATED=new c(null),c.GOOGLE_CREDENTIALS=new c("google-credentials-uid"),c.FIRST_PARTY=new c("first-party-uid"),c.MOCK_USER=new c("mock-user");
/**
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
 */
let h="9.10.0";
/**
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
 */const u=new s["b"]("@firebase/firestore");function d(){return u.logLevel}function f(e){u.setLogLevel(e)}function p(e,...t){if(u.logLevel<=s["a"].DEBUG){const n=t.map(v);u.debug(`Firestore (${h}): ${e}`,...n)}}function g(e,...t){if(u.logLevel<=s["a"].ERROR){const n=t.map(v);u.error(`Firestore (${h}): ${e}`,...n)}}function m(e,...t){if(u.logLevel<=s["a"].WARN){const n=t.map(v);u.warn(`Firestore (${h}): ${e}`,...n)}}function v(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
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
 */var t}
/**
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
 */function b(e="Unexpected state"){const t=`FIRESTORE (${h}) INTERNAL ASSERTION FAILED: `+e;throw g(t),new Error(t)}function y(e,t){e||b()}function x(e,t){e||b()}function w(e,t){return e}
/**
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
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class S extends o["c"]{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
 */class _{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
/**
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
 */class A{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer "+e)}}class C{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(c.UNAUTHENTICATED))}shutdown(){}}class I{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class T{constructor(e){this.t=e,this.currentUser=c.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const i=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let r=new _;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new _,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const t=r;e.enqueueRetryable(async()=>{await t.promise,await i(this.currentUser)})},o=e=>{p("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(p("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new _)}},0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(p("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(y("string"==typeof t.accessToken),new A(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return y(null===e||"string"==typeof e),new c(e)}}class E{constructor(e,t,n,i){this.h=e,this.l=t,this.m=n,this.g=i,this.type="FirstParty",this.user=c.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(y(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class O{constructor(e,t,n,i){this.h=e,this.l=t,this.m=n,this.g=i}getToken(){return Promise.resolve(new E(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable(()=>t(c.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class P{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class L{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){const n=e=>{null!=e.error&&p("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: "+e.error.message);const n=e.token!==this.A;return this.A=e.token,p("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};const i=e=>{p("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit(e=>i(e)),setTimeout(()=>{if(!this.appCheck){const e=this.T.getImmediate({optional:!0});e?i(e):p("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(y("string"==typeof e.token),this.A=e.token,new P(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
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
 */
function D(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let i=0;i<e;i++)n[i]=Math.floor(256*Math.random());return n}
/**
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
 */class N{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=D(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<t&&(n+=e.charAt(i[r]%e.length))}return n}}function R(e,t){return e<t?-1:e>t?1:0}function M(e,t,n){return e.length===t.length&&e.every((e,i)=>n(e,t[i]))}function F(e){return e+"\0"}
/**
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
 */class j{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new S(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new S(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new S(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new S(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return j.fromMillis(Date.now())}static fromDate(e){return j.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new j(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?R(this.nanoseconds,e.nanoseconds):R(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
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
 */class V{constructor(e){this.timestamp=e}static fromTimestamp(e){return new V(e)}static min(){return new V(new j(0,0))}static max(){return new V(new j(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
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
 */class z{constructor(e,t,n){void 0===t?t=0:t>e.length&&b(),void 0===n?n=e.length-t:n>e.length-t&&b(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===z.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof z?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const n=e.get(i),r=t.get(i);if(n<r)return-1;if(n>r)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class B extends z{construct(e,t,n){return new B(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new S(k.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new B(t)}static emptyPath(){return new B([])}}const H=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class W extends z{construct(e,t,n){return new W(e,t,n)}static isValidIdentifier(e){return H.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),W.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new W(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const r=()=>{if(0===n.length)throw new S(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;i<e.length;){const t=e[i];if("\\"===t){if(i+1===e.length)throw new S(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[i+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new S(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,i+=2}else"`"===t?(s=!s,i++):"."!==t||s?(n+=t,i++):(r(),i++)}if(r(),s)throw new S(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new W(t)}static emptyPath(){return new W([])}}
/**
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
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(B.fromString(e))}static fromName(e){return new X(B.fromString(e).popFirst(5))}static empty(){return new X(B.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===B.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return B.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new B(e.slice()))}}
/**
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
 */class U{constructor(e,t,n,i){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=i}}function Y(e){return e.fields.find(e=>2===e.kind)}function G(e){return e.fields.filter(e=>2!==e.kind)}U.UNKNOWN_ID=-1;class q{constructor(e,t){this.fieldPath=e,this.kind=t}}class ${constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new $(0,Z.min())}}function K(e,t){const n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1,r=V.fromTimestamp(1e9===i?new j(n+1,0):new j(n,i));return new Z(r,X.empty(),t)}function Q(e){return new Z(e.readTime,e.key,-1)}class Z{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Z(V.min(),X.empty(),-1)}static max(){return new Z(V.max(),X.empty(),-1)}}function J(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=X.comparator(e.documentKey,t.documentKey),0!==n?n:R(e.largestBatchId,t.largestBatchId))}
/**
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
 */const ee="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class te{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}
/**
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
 */async function ne(e){if(e.code!==k.FAILED_PRECONDITION||e.message!==ee)throw e;p("LocalStore","Unexpectedly lost primary lease")}
/**
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
 */class ie{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&b(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ie((n,i)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,i)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof ie?t:ie.resolve(t)}catch(e){return ie.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):ie.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):ie.reject(t)}static resolve(e){return new ie((t,n)=>{t(e)})}static reject(e){return new ie((t,n)=>{n(e)})}static waitFor(e){return new ie((t,n)=>{let i=0,r=0,s=!1;e.forEach(e=>{++i,e.next(()=>{++r,s&&r===i&&t()},e=>n(e))}),s=!0,r===i&&t()})}static or(e){let t=ie.resolve(!1);for(const n of e)t=t.next(e=>e?ie.resolve(e):n());return t}static forEach(e,t){const n=[];return e.forEach((e,i)=>{n.push(t.call(this,e,i))}),this.waitFor(n)}static mapArray(e,t){return new ie((n,i)=>{const r=e.length,s=new Array(r);let o=0;for(let a=0;a<r;a++){const l=a;t(e[l]).next(e=>{s[l]=e,++o,o===r&&n(s)},e=>i(e))}})}static doWhile(e,t){return new ie((n,i)=>{const r=()=>{!0===e()?t().next(()=>{r()},i):n()};r()})}}
/**
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
 */class re{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.P=new _,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{t.error?this.P.reject(new ae(e,t.error)):this.P.resolve()},this.transaction.onerror=t=>{const n=de(t.target.error);this.P.reject(new ae(e,n))}}static open(e,t,n,i){try{return new re(t,e.transaction(i,n))}catch(e){throw new ae(t,e)}}get v(){return this.P.promise}abort(e){e&&this.P.reject(e),this.aborted||(p("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new ce(t)}}class se{constructor(e,t,n){this.name=e,this.version=t,this.S=n,12.2===se.D(Object(o["m"])())&&g("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return p("SimpleDb","Removing database:",e),he(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!Object(o["r"])())return!1;if(se.N())return!0;const e=Object(o["m"])(),t=se.D(e),n=0<t&&t<10,i=se.k(e),r=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||r)}static N(){var t;return"undefined"!=typeof e&&"YES"===(null===(t=Object({NODE_ENV:"production",BASE_URL:"/botify-web-vue/"}))||void 0===t?void 0:t.M)}static O(e,t){return e.store(t)}static D(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static k(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async F(e){return this.db||(p("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=e=>{const n=e.target.result;t(n)},i.onblocked=()=>{n(new ae(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=t=>{const i=t.target.error;"VersionError"===i.name?n(new S(k.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===i.name?n(new S(k.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+i)):n(new ae(e,i))},i.onupgradeneeded=e=>{p("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.S.$(t,i.transaction,e.oldVersion,this.version).next(()=>{p("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=e=>this.B(e)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,i){const r="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.F(e);const t=re.open(this.db,e,r?"readonly":"readwrite",n),s=i(t).next(e=>(t.V(),e)).catch(e=>(t.abort(e),ie.reject(e))).toPromise();return s.catch(()=>{}),await t.v,s}catch(e){const t=e,n="FirebaseError"!==t.name&&s<3;if(p("SimpleDb","Transaction failed with error:",t.message,"Retrying:",n),this.close(),!n)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class oe{constructor(e){this.U=e,this.q=!1,this.K=null}get isDone(){return this.q}get G(){return this.K}set cursor(e){this.U=e}done(){this.q=!0}j(e){this.K=e}delete(){return he(this.U.delete())}}class ae extends S{constructor(e,t){super(k.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function le(e){return"IndexedDbTransactionError"===e.name}class ce{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(p("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(p("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),he(n)}add(e){return p("SimpleDb","ADD",this.store.name,e,e),he(this.store.add(e))}get(e){return he(this.store.get(e)).next(t=>(void 0===t&&(t=null),p("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return p("SimpleDb","DELETE",this.store.name,e),he(this.store.delete(e))}count(){return p("SimpleDb","COUNT",this.store.name),he(this.store.count())}W(e,t){const n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){const e=this.cursor(n),t=[];return this.H(e,(e,n)=>{t.push(n)}).next(()=>t)}{const e=this.store.getAll(n.range);return new ie((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}})}}J(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new ie((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}})}Y(e,t){p("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.X=!1;const i=this.cursor(n);return this.H(i,(e,t,n)=>n.delete())}Z(e,t){let n;t?n=e:(n={},t=e);const i=this.cursor(n);return this.H(i,t)}tt(e){const t=this.cursor({});return new ie((n,i)=>{t.onerror=e=>{const t=de(e.target.error);i(t)},t.onsuccess=t=>{const i=t.target.result;i?e(i.primaryKey,i.value).next(e=>{e?i.continue():n()}):n()}})}H(e,t){const n=[];return new ie((i,r)=>{e.onerror=e=>{r(e.target.error)},e.onsuccess=e=>{const r=e.target.result;if(!r)return void i();const s=new oe(r),o=t(r.primaryKey,r.value,s);if(o instanceof ie){const e=o.catch(e=>(s.done(),ie.reject(e)));n.push(e)}s.isDone?i():null===s.G?r.continue():r.continue(s.G)}}).next(()=>ie.waitFor(n))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.X?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function he(e){return new ie((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=de(e.target.error);n(t)}})}let ue=!1;function de(e){const t=se.D(Object(o["m"])());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new S("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ue||(ue=!0,setTimeout(()=>{throw e},0)),e}}return e}class fe{constructor(e,t){this.asyncQueue=e,this.et=t,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}nt(e){p("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{p("IndexBackiller","Documents written: "+await this.et.st())}catch(e){le(e)?p("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await ne(e)}await this.nt(6e4)})}}class pe{constructor(e,t){this.localStore=e,this.persistence=t}async st(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.it(t,e))}it(e,t){const n=new Set;let i=t,r=!0;return ie.doWhile(()=>!0===r&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(t=>{if(null!==t&&!n.has(t))return p("IndexBackiller","Processing collection: "+t),this.rt(e,t,i).next(e=>{i-=e,n.add(t)});r=!1})).next(()=>t-i)}rt(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,n).next(n=>{const r=n.changes;return this.localStore.indexManager.updateIndexEntries(e,r).next(()=>this.ot(i,n)).next(n=>(p("IndexBackiller","Updating offset: "+n),this.localStore.indexManager.updateCollectionGroup(e,t,n))).next(()=>r.size)}))}ot(e,t){let n=e;return t.changes.forEach((e,t)=>{const i=Q(t);J(i,n)>0&&(n=i)}),new Z(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}
/**
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
 */class ge{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ut(e),this.ct=e=>t.writeSequenceNumber(e))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}
/**
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
 */function me(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ve(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function be(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
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
 */ge.at=-1;class ye{constructor(e,t){this.comparator=e,this.root=t||we.EMPTY}insert(e,t){return new ye(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,we.BLACK,null,null))}remove(e){return new ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,we.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(0===i)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xe(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xe(this.root,e,this.comparator,!1)}getReverseIterator(){return new xe(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xe(this.root,e,this.comparator,!0)}}class xe{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(0===r){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class we{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:we.RED,this.left=null!=i?i:we.EMPTY,this.right=null!=r?r:we.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,r){return new we(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return we.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===t(e,i.key)){if(i.right.isEmpty())return we.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,we.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,we.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw b();if(this.right.isRed())throw b();const e=this.left.check();if(e!==this.right.check())throw b();return e+(this.isRed()?0:1)}}we.EMPTY=null,we.RED=!0,we.BLACK=!1,we.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(e,t,n,i,r){return this}insert(e,t,n){return new we(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
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
 */
class ke{constructor(e){this.comparator=e,this.data=new ye(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Se(this.data.getIterator())}getIteratorFrom(e){return new Se(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof ke))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(e,i))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ke(this.comparator);return t.data=e,t}}class Se{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function _e(e){return e.hasNext()?e.getNext():void 0}
/**
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
 */class Ae{constructor(e){this.fields=e,e.sort(W.comparator)}static empty(){return new Ae([])}unionWith(e){let t=new ke(W.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Ae(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return M(this.fields,e.fields,(e,t)=>e.isEqual(t))}}
/**
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
 */function Ce(){return"undefined"!=typeof atob}
/**
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
 */class Ie{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new Ie(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Ie(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return R(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ie.EMPTY_BYTE_STRING=new Ie("");const Te=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ee(e){if(y(!!e),"string"==typeof e){let t=0;const n=Te.exec(e);if(y(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:Oe(e.seconds),nanos:Oe(e.nanos)}}function Oe(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Pe(e){return"string"==typeof e?Ie.fromBase64String(e):Ie.fromUint8Array(e)}
/**
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
 */function Le(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function De(e){const t=e.mapValue.fields.__previous_value__;return Le(t)?De(t):t}function Ne(e){const t=Ee(e.mapValue.fields.__local_write_time__.timestampValue);return new j(t.seconds,t.nanos)}
/**
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
 */class Re{constructor(e,t,n,i,r,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Me{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Me("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Me&&e.projectId===this.projectId&&e.database===this.database}}function Fe(e){return null==e}function je(e){return 0===e&&1/e==-1/0}function Ve(e){return"number"==typeof e&&Number.isInteger(e)&&!je(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
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
 */const ze={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Be={nullValue:"NULL_VALUE"};function He(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Le(e)?4:nt(e)?9007199254740991:10:b()}function We(e,t){if(e===t)return!0;const n=He(e);if(n!==He(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ne(e).isEqual(Ne(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Ee(e.timestampValue),i=Ee(t.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Pe(e.bytesValue).isEqual(Pe(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Oe(e.geoPointValue.latitude)===Oe(t.geoPointValue.latitude)&&Oe(e.geoPointValue.longitude)===Oe(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Oe(e.integerValue)===Oe(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Oe(e.doubleValue),i=Oe(t.doubleValue);return n===i?je(n)===je(i):isNaN(n)&&isNaN(i)}return!1}(e,t);case 9:return M(e.arrayValue.values||[],t.arrayValue.values||[],We);case 10:return function(e,t){const n=e.mapValue.fields||{},i=t.mapValue.fields||{};if(me(n)!==me(i))return!1;for(const r in n)if(n.hasOwnProperty(r)&&(void 0===i[r]||!We(n[r],i[r])))return!1;return!0}(e,t);default:return b()}}function Xe(e,t){return void 0!==(e.values||[]).find(e=>We(e,t))}function Ue(e,t){if(e===t)return 0;const n=He(e),i=He(t);if(n!==i)return R(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return R(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Oe(e.integerValue||e.doubleValue),i=Oe(t.integerValue||t.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(e,t);case 3:return Ye(e.timestampValue,t.timestampValue);case 4:return Ye(Ne(e),Ne(t));case 5:return R(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Pe(e),i=Pe(t);return n.compareTo(i)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),i=t.split("/");for(let r=0;r<n.length&&r<i.length;r++){const e=R(n[r],i[r]);if(0!==e)return e}return R(n.length,i.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=R(Oe(e.latitude),Oe(t.latitude));return 0!==n?n:R(Oe(e.longitude),Oe(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],i=t.values||[];for(let r=0;r<n.length&&r<i.length;++r){const e=Ue(n[r],i[r]);if(e)return e}return R(n.length,i.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===ze.mapValue&&t===ze.mapValue)return 0;if(e===ze.mapValue)return 1;if(t===ze.mapValue)return-1;const n=e.fields||{},i=Object.keys(n),r=t.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let o=0;o<i.length&&o<s.length;++o){const e=R(i[o],s[o]);if(0!==e)return e;const t=Ue(n[i[o]],r[s[o]]);if(0!==t)return t}return R(i.length,s.length)}(e.mapValue,t.mapValue);default:throw b()}}function Ye(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return R(e,t);const n=Ee(e),i=Ee(t),r=R(n.seconds,i.seconds);return 0!==r?r:R(n.nanos,i.nanos)}function Ge(e){return qe(e)}function qe(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Ee(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Pe(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,X.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const i of e.values||[])n?n=!1:t+=",",t+=qe(i);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",i=!0;for(const r of t)i?i=!1:n+=",",n+=`${r}:${qe(e.fields[r])}`;return n+"}"}(e.mapValue):b();var t,n}function $e(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Ke(e){return!!e&&"integerValue"in e}function Qe(e){return!!e&&"arrayValue"in e}function Ze(e){return!!e&&"nullValue"in e}function Je(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function et(e){return!!e&&"mapValue"in e}function tt(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return ve(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=tt(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=tt(e.arrayValue.values[n]);return t}return Object.assign({},e)}function nt(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function it(e){return"nullValue"in e?Be:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?$e(Me.empty(),X.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?{mapValue:{}}:b()}function rt(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?$e(Me.empty(),X.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?{mapValue:{}}:"mapValue"in e?ze:b()}function st(e,t){const n=Ue(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function ot(e,t){const n=Ue(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}
/**
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
 */class at{constructor(e){this.value=e}static empty(){return new at({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!et(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=tt(t)}setAll(e){let t=W.emptyPath(),n={},i=[];e.forEach((e,r)=>{if(!t.isImmediateParentOf(r)){const e=this.getFieldsMap(t);this.applyChanges(e,n,i),n={},i=[],t=r.popLast()}e?n[r.lastSegment()]=tt(e):i.push(r.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,n,i)}delete(e){const t=this.field(e.popLast());et(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return We(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];et(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){ve(t,(t,n)=>e[t]=n);for(const i of n)delete e[i]}clone(){return new at(tt(this.value))}}function lt(e){const t=[];return ve(e.fields,(e,n)=>{const i=new W([e]);if(et(n)){const e=lt(n.mapValue).fields;if(0===e.length)t.push(i);else for(const n of e)t.push(i.child(n))}else t.push(i)}),new Ae(t)
/**
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
 */}class ct{constructor(e,t,n,i,r,s){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.data=r,this.documentState=s}static newInvalidDocument(e){return new ct(e,0,V.min(),V.min(),at.empty(),0)}static newFoundDocument(e,t,n){return new ct(e,1,t,V.min(),n,0)}static newNoDocument(e,t){return new ct(e,2,t,V.min(),at.empty(),0)}static newUnknownDocument(e,t){return new ct(e,3,t,V.min(),at.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=at.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=at.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=V.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
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
 */class ht{constructor(e,t=null,n=[],i=[],r=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.ht=null}}function ut(e,t=null,n=[],i=[],r=null,s=null,o=null){return new ht(e,t,n,i,r,s,o)}function dt(e){const t=w(e);if(null===t.ht){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>{return(t=e).field.canonicalString()+t.op.toString()+Ge(t.value);var t}).join(","),e+="|ob:",e+=t.orderBy.map(e=>function(e){return e.field.canonicalString()+e.dir}(e)).join(","),Fe(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(e=>Ge(e)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(e=>Ge(e)).join(",")),t.ht=e}return t.ht}function ft(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>{return`${(t=e).field.canonicalString()} ${t.op} ${Ge(t.value)}`;var t}).join(", ")}]`),Fe(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>Ge(e)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>Ge(e)).join(",")),`Target(${t})`}function pt(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let r=0;r<e.orderBy.length;r++)if(!Ot(e.orderBy[r],t.orderBy[r]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(n=e.filters[r],i=t.filters[r],n.op!==i.op||!n.field.isEqual(i.field)||!We(n.value,i.value))return!1;var n,i;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Lt(e.startAt,t.startAt)&&Lt(e.endAt,t.endAt)}function gt(e){return X.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function mt(e,t){return e.filters.filter(e=>e instanceof yt&&e.field.isEqual(t))}function vt(e,t,n){let i=Be,r=!0;for(const s of mt(e,t)){let e=Be,t=!0;switch(s.op){case"<":case"<=":e=it(s.value);break;case"==":case"in":case">=":e=s.value;break;case">":e=s.value,t=!1;break;case"!=":case"not-in":e=Be}st({value:i,inclusive:r},{value:e,inclusive:t})<0&&(i=e,r=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];st({value:i,inclusive:r},{value:e,inclusive:n.inclusive})<0&&(i=e,r=n.inclusive);break}return{value:i,inclusive:r}}function bt(e,t,n){let i=ze,r=!0;for(const s of mt(e,t)){let e=ze,t=!0;switch(s.op){case">=":case">":e=rt(s.value),t=!1;break;case"==":case"in":case"<=":e=s.value;break;case"<":e=s.value,t=!1;break;case"!=":case"not-in":e=ze}ot({value:i,inclusive:r},{value:e,inclusive:t})>0&&(i=e,r=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];ot({value:i,inclusive:r},{value:e,inclusive:n.inclusive})>0&&(i=e,r=n.inclusive);break}return{value:i,inclusive:r}}class yt extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.lt(e,t,n):new xt(e,t,n):"array-contains"===t?new _t(e,n):"in"===t?new At(e,n):"not-in"===t?new Ct(e,n):"array-contains-any"===t?new It(e,n):new yt(e,t,n)}static lt(e,t,n){return"in"===t?new wt(e,n):new kt(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.ft(Ue(t,this.value)):null!==t&&He(this.value)===He(t)&&this.ft(Ue(t,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return b()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class xt extends yt{constructor(e,t,n){super(e,t,n),this.key=X.fromName(n.referenceValue)}matches(e){const t=X.comparator(e.key,this.key);return this.ft(t)}}class wt extends yt{constructor(e,t){super(e,"in",t),this.keys=St("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class kt extends yt{constructor(e,t){super(e,"not-in",t),this.keys=St("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function St(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>X.fromName(e.referenceValue))}class _t extends yt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Qe(t)&&Xe(t.arrayValue,this.value)}}class At extends yt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Xe(this.value.arrayValue,t)}}class Ct extends yt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Xe(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Xe(this.value.arrayValue,t)}}class It extends yt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Qe(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>Xe(this.value.arrayValue,e))}}class Tt{constructor(e,t){this.position=e,this.inclusive=t}}class Et{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ot(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Pt(e,t,n){let i=0;for(let r=0;r<e.position.length;r++){const s=t[r],o=e.position[r];if(i=s.field.isKeyField()?X.comparator(X.fromName(o.referenceValue),n.key):Ue(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return i}function Lt(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!We(e.position[n],t.position[n]))return!1;return!0}
/**
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
 */class Dt{constructor(e,t=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this._t=null,this.wt=null,this.startAt,this.endAt}}function Nt(e,t,n,i,r,s,o,a){return new Dt(e,t,n,i,r,s,o,a)}function Rt(e){return new Dt(e)}function Mt(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Ft(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function jt(e){for(const t of e.filters)if(t.dt())return t.field;return null}function Vt(e){return null!==e.collectionGroup}function zt(e){const t=w(e);if(null===t._t){t._t=[];const e=jt(t),n=Ft(t);if(null!==e&&null===n)e.isKeyField()||t._t.push(new Et(e)),t._t.push(new Et(W.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t._t.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t._t.push(new Et(W.keyField(),e))}}}return t._t}function Bt(e){const t=w(e);if(!t.wt)if("F"===t.limitType)t.wt=ut(t.path,t.collectionGroup,zt(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const r of zt(t)){const t="desc"===r.dir?"asc":"desc";e.push(new Et(r.field,t))}const n=t.endAt?new Tt(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new Tt(t.startAt.position,t.startAt.inclusive):null;t.wt=ut(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}return t.wt}function Ht(e,t,n){return new Dt(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Wt(e,t){return pt(Bt(e),Bt(t))&&e.limitType===t.limitType}function Xt(e){return`${dt(Bt(e))}|lt:${e.limitType}`}function Ut(e){return`Query(target=${ft(Bt(e))}; limitType=${e.limitType})`}function Yt(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):X.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const i=Pt(e,t,n);return e.inclusive?i<=0:i<0}(e.startAt,zt(e),t))&&!(e.endAt&&!function(e,t,n){const i=Pt(e,t,n);return e.inclusive?i>=0:i>0}(e.endAt,zt(e),t))}(e,t)}function Gt(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function qt(e){return(t,n)=>{let i=!1;for(const r of zt(e)){const e=$t(r,t,n);if(0!==e)return e;i=i||r.field.isKeyField()}return 0}}function $t(e,t,n){const i=e.field.isKeyField()?X.comparator(t.key,n.key):function(e,t,n){const i=t.data.field(e),r=n.data.field(e);return null!==i&&null!==r?Ue(i,r):b()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return b()}}
/**
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
 */function Kt(e,t){if(e.gt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:je(t)?"-0":t}}function Qt(e){return{integerValue:""+e}}function Zt(e,t){return Ve(t)?Qt(t):Kt(e,t)}
/**
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
 */class Jt{constructor(){this._=void 0}}function en(e,t,n){return e instanceof rn?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof sn?on(e,t):e instanceof an?ln(e,t):function(e,t){const n=nn(e,t),i=hn(n)+hn(e.yt);return Ke(n)&&Ke(e.yt)?Qt(i):Kt(e.It,i)}(e,t)}function tn(e,t,n){return e instanceof sn?on(e,t):e instanceof an?ln(e,t):n}function nn(e,t){return e instanceof cn?Ke(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class rn extends Jt{}class sn extends Jt{constructor(e){super(),this.elements=e}}function on(e,t){const n=un(t);for(const i of e.elements)n.some(e=>We(e,i))||n.push(i);return{arrayValue:{values:n}}}class an extends Jt{constructor(e){super(),this.elements=e}}function ln(e,t){let n=un(t);for(const i of e.elements)n=n.filter(e=>!We(e,i));return{arrayValue:{values:n}}}class cn extends Jt{constructor(e,t){super(),this.It=e,this.yt=t}}function hn(e){return Oe(e.integerValue||e.doubleValue)}function un(e){return Qe(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
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
 */class dn{constructor(e,t){this.field=e,this.transform=t}}function fn(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof sn&&t instanceof sn||e instanceof an&&t instanceof an?M(e.elements,t.elements,We):e instanceof cn&&t instanceof cn?We(e.yt,t.yt):e instanceof rn&&t instanceof rn}(e.transform,t.transform)}class pn{constructor(e,t){this.version=e,this.transformResults=t}}class gn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new gn}static exists(e){return new gn(void 0,e)}static updateTime(e){return new gn(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function mn(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class vn{}function bn(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Tn(e.key,gn.none()):new Sn(e.key,e.data,gn.none());{const n=e.data,i=at.empty();let r=new ke(W.comparator);for(let e of t.fields)if(!r.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?i.delete(e):i.set(e,t),r=r.add(e)}return new _n(e.key,i,new Ae(r.toArray()),gn.none())}}function yn(e,t,n){e instanceof Sn?function(e,t,n){const i=e.value.clone(),r=Cn(e.fieldTransforms,t,n.transformResults);i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):e instanceof _n?function(e,t,n){if(!mn(e.precondition,t))return void t.convertToUnknownDocument(n.version);const i=Cn(e.fieldTransforms,t,n.transformResults),r=t.data;r.setAll(An(e)),r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function xn(e,t,n,i){return e instanceof Sn?function(e,t,n,i){if(!mn(e.precondition,t))return n;const r=e.value.clone(),s=In(e.fieldTransforms,i,t);return r.setAll(s),t.convertToFoundDocument(t.version,r).setHasLocalMutations(),null}(e,t,n,i):e instanceof _n?function(e,t,n,i){if(!mn(e.precondition,t))return n;const r=In(e.fieldTransforms,i,t),s=t.data;return s.setAll(An(e)),s.setAll(r),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,i):function(e,t,n){return mn(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function wn(e,t){let n=null;for(const i of e.fieldTransforms){const e=t.data.field(i.field),r=nn(i.transform,e||null);null!=r&&(null===n&&(n=at.empty()),n.set(i.field,r))}return n||null}function kn(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&M(e,t,(e,t)=>fn(e,t))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Sn extends vn{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class _n extends vn{constructor(e,t,n,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function An(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}}),t}function Cn(e,t,n){const i=new Map;y(e.length===n.length);for(let r=0;r<n.length;r++){const s=e[r],o=s.transform,a=t.data.field(s.field);i.set(s.field,tn(o,a,n[r]))}return i}function In(e,t,n){const i=new Map;for(const r of e){const e=r.transform,s=n.data.field(r.field);i.set(r.field,en(e,s,t))}return i}class Tn extends vn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class En extends vn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
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
 */class On{constructor(e){this.count=e}}
/**
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
 */var Pn,Ln;function Dn(e){switch(e){default:return b();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function Nn(e){if(void 0===e)return g("GRPC error has no .code"),k.UNKNOWN;switch(e){case Pn.OK:return k.OK;case Pn.CANCELLED:return k.CANCELLED;case Pn.UNKNOWN:return k.UNKNOWN;case Pn.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case Pn.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case Pn.INTERNAL:return k.INTERNAL;case Pn.UNAVAILABLE:return k.UNAVAILABLE;case Pn.UNAUTHENTICATED:return k.UNAUTHENTICATED;case Pn.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case Pn.NOT_FOUND:return k.NOT_FOUND;case Pn.ALREADY_EXISTS:return k.ALREADY_EXISTS;case Pn.PERMISSION_DENIED:return k.PERMISSION_DENIED;case Pn.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case Pn.ABORTED:return k.ABORTED;case Pn.OUT_OF_RANGE:return k.OUT_OF_RANGE;case Pn.UNIMPLEMENTED:return k.UNIMPLEMENTED;case Pn.DATA_LOSS:return k.DATA_LOSS;default:return b()}}(Ln=Pn||(Pn={}))[Ln.OK=0]="OK",Ln[Ln.CANCELLED=1]="CANCELLED",Ln[Ln.UNKNOWN=2]="UNKNOWN",Ln[Ln.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ln[Ln.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ln[Ln.NOT_FOUND=5]="NOT_FOUND",Ln[Ln.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ln[Ln.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ln[Ln.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ln[Ln.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ln[Ln.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ln[Ln.ABORTED=10]="ABORTED",Ln[Ln.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ln[Ln.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ln[Ln.INTERNAL=13]="INTERNAL",Ln[Ln.UNAVAILABLE=14]="UNAVAILABLE",Ln[Ln.DATA_LOSS=15]="DATA_LOSS";
/**
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
 */
class Rn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[i,r]of n)if(this.equalsFn(i,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(void 0===i)return this.inner[n]=[[e,t]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return 1===n.length?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ve(this.inner,(t,n)=>{for(const[i,r]of n)e(i,r)})}isEmpty(){return be(this.inner)}size(){return this.innerSize}}
/**
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
 */const Mn=new ye(X.comparator);function Fn(){return Mn}const jn=new ye(X.comparator);function Vn(...e){let t=jn;for(const n of e)t=t.insert(n.key,n);return t}function zn(e){let t=jn;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function Bn(){return Wn()}function Hn(){return Wn()}function Wn(){return new Rn(e=>e.toString(),(e,t)=>e.isEqual(t))}const Xn=new ye(X.comparator),Un=new ke(X.comparator);function Yn(...e){let t=Un;for(const n of e)t=t.add(n);return t}const Gn=new ke(R);function qn(){return Gn}
/**
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
 */class $n{constructor(e,t,n,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,Kn.createSynthesizedTargetChangeForCurrentChange(e,t)),new $n(V.min(),n,qn(),Fn(),Yn())}}class Kn{constructor(e,t,n,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t){return new Kn(Ie.EMPTY_BYTE_STRING,t,Yn(),Yn(),Yn())}}
/**
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
 */class Qn{constructor(e,t,n,i){this.Tt=e,this.removedTargetIds=t,this.key=n,this.Et=i}}class Zn{constructor(e,t){this.targetId=e,this.At=t}}class Jn{constructor(e,t,n=Ie.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class ei{constructor(){this.Rt=0,this.bt=ii(),this.Pt=Ie.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return 0!==this.Rt}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=Yn(),t=Yn(),n=Yn();return this.bt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:b()}}),new Kn(this.Pt,this.vt,e,t,n)}Nt(){this.Vt=!1,this.bt=ii()}kt(e,t){this.Vt=!0,this.bt=this.bt.insert(e,t)}Mt(e){this.Vt=!0,this.bt=this.bt.remove(e)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class ti{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=Fn(),this.qt=ni(),this.Kt=new ke(R)}Gt(e){for(const t of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(t,e.Et):this.jt(t,e.key,e.Et);for(const t of e.removedTargetIds)this.jt(t,e.key,e.Et)}Wt(e){this.forEachTarget(e,t=>{const n=this.zt(t);switch(e.state){case 0:this.Ht(t)&&n.Ct(e.resumeToken);break;case 1:n.Ft(),n.St||n.Nt(),n.Ct(e.resumeToken);break;case 2:n.Ft(),n.St||this.removeTarget(t);break;case 3:this.Ht(t)&&(n.$t(),n.Ct(e.resumeToken));break;case 4:this.Ht(t)&&(this.Jt(t),n.Ct(e.resumeToken));break;default:b()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Lt.forEach((e,n)=>{this.Ht(n)&&t(n)})}Yt(e){const t=e.targetId,n=e.At.count,i=this.Xt(t);if(i){const e=i.target;if(gt(e))if(0===n){const n=new X(e.path);this.jt(t,n,ct.newNoDocument(n,V.min()))}else y(1===n);else this.Zt(t)!==n&&(this.Jt(t),this.Kt=this.Kt.add(t))}}te(e){const t=new Map;this.Lt.forEach((n,i)=>{const r=this.Xt(i);if(r){if(n.current&&gt(r.target)){const t=new X(r.target.path);null!==this.Ut.get(t)||this.ee(i,t)||this.jt(i,t,ct.newNoDocument(t,e))}n.Dt&&(t.set(i,n.xt()),n.Nt())}});let n=Yn();this.qt.forEach((e,t)=>{let i=!0;t.forEachWhile(e=>{const t=this.Xt(e);return!t||2===t.purpose||(i=!1,!1)}),i&&(n=n.add(e))}),this.Ut.forEach((t,n)=>n.setReadTime(e));const i=new $n(e,t,this.Kt,this.Ut,n);return this.Ut=Fn(),this.qt=ni(),this.Kt=new ke(R),i}Qt(e,t){if(!this.Ht(e))return;const n=this.ee(e,t.key)?2:0;this.zt(e).kt(t.key,n),this.Ut=this.Ut.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ne(t.key).add(e))}jt(e,t,n){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,t)?i.kt(t,1):i.Mt(t),this.qt=this.qt.insert(t,this.ne(t).delete(e)),n&&(this.Ut=this.Ut.insert(t,n))}removeTarget(e){this.Lt.delete(e)}Zt(e){const t=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.zt(e).Ot()}zt(e){let t=this.Lt.get(e);return t||(t=new ei,this.Lt.set(e,t)),t}ne(e){let t=this.qt.get(e);return t||(t=new ke(R),this.qt=this.qt.insert(e,t)),t}Ht(e){const t=null!==this.Xt(e);return t||p("WatchChangeAggregator","Detected inactive target",e),t}Xt(e){const t=this.Lt.get(e);return t&&t.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new ei),this.Bt.getRemoteKeysForTarget(e).forEach(t=>{this.jt(e,t,null)})}ee(e,t){return this.Bt.getRemoteKeysForTarget(e).has(t)}}function ni(){return new ye(X.comparator)}function ii(){return new ye(X.comparator)}
/**
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
 */const ri=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),si=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})();class oi{constructor(e,t){this.databaseId=e,this.gt=t}}function ai(e,t){return e.gt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function li(e,t){return e.gt?t.toBase64():t.toUint8Array()}function ci(e,t){return ai(e,t.toTimestamp())}function hi(e){return y(!!e),V.fromTimestamp(function(e){const t=Ee(e);return new j(t.seconds,t.nanos)}(e))}function ui(e,t){return function(e){return new B(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function di(e){const t=B.fromString(e);return y(ji(t)),t}function fi(e,t){return ui(e.databaseId,t.path)}function pi(e,t){const n=di(t);if(n.get(1)!==e.databaseId.projectId)throw new S(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new S(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new X(bi(n))}function gi(e,t){return ui(e.databaseId,t)}function mi(e){const t=di(e);return 4===t.length?B.emptyPath():bi(t)}function vi(e){return new B(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function bi(e){return y(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function yi(e,t,n){return{name:fi(e,t),fields:n.value.mapValue.fields}}function xi(e,t,n){const i=pi(e,t.name),r=hi(t.updateTime),s=new at({mapValue:{fields:t.fields}}),o=ct.newFoundDocument(i,r,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function wi(e,t){return"found"in t?function(e,t){y(!!t.found),t.found.name,t.found.updateTime;const n=pi(e,t.found.name),i=hi(t.found.updateTime),r=new at({mapValue:{fields:t.found.fields}});return ct.newFoundDocument(n,i,r)}(e,t):"missing"in t?function(e,t){y(!!t.missing),y(!!t.readTime);const n=pi(e,t.missing),i=hi(t.readTime);return ct.newNoDocument(n,i)}(e,t):b()}function ki(e,t){let n;if("targetChange"in t){t.targetChange;const i=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:b()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],s=function(e,t){return e.gt?(y(void 0===t||"string"==typeof t),Ie.fromBase64String(t||"")):(y(void 0===t||t instanceof Uint8Array),Ie.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?k.UNKNOWN:Nn(e.code);return new S(t,e.message||"")}(o);n=new Jn(i,r,s,a||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const r=pi(e,i.document.name),s=hi(i.document.updateTime),o=new at({mapValue:{fields:i.document.fields}}),a=ct.newFoundDocument(r,s,o),l=i.targetIds||[],c=i.removedTargetIds||[];n=new Qn(l,c,a.key,a)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const r=pi(e,i.document),s=i.readTime?hi(i.readTime):V.min(),o=ct.newNoDocument(r,s),a=i.removedTargetIds||[];n=new Qn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const r=pi(e,i.document),s=i.removedTargetIds||[];n=new Qn([],s,r,null)}else{if(!("filter"in t))return b();{t.filter;const e=t.filter;e.targetId;const i=e.count||0,r=new On(i),s=e.targetId;n=new Zn(s,r)}}return n}function Si(e,t){let n;if(t instanceof Sn)n={update:yi(e,t.key,t.value)};else if(t instanceof Tn)n={delete:fi(e,t.key)};else if(t instanceof _n)n={update:yi(e,t.key,t.data),updateMask:Fi(t.fieldMask)};else{if(!(t instanceof En))return b();n={verify:fi(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>function(e,t){const n=t.transform;if(n instanceof rn)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof sn)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof an)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof cn)return{fieldPath:t.field.canonicalString(),increment:n.yt};throw b()}(0,e))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:ci(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:b()}(e,t.precondition)),n}function _i(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?gn.updateTime(hi(e.updateTime)):void 0!==e.exists?gn.exists(e.exists):gn.none()}(t.currentDocument):gn.none(),i=t.updateTransforms?t.updateTransforms.map(t=>function(e,t){let n=null;if("setToServerValue"in t)y("REQUEST_TIME"===t.setToServerValue),n=new rn;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new sn(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new an(e)}else"increment"in t?n=new cn(e,t.increment):b();const i=W.fromServerFormat(t.fieldPath);return new dn(i,n)}(e,t)):[];if(t.update){t.update.name;const r=pi(e,t.update.name),s=new at({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new Ae(t.map(e=>W.fromServerFormat(e)))}(t.updateMask);return new _n(r,s,e,n,i)}return new Sn(r,s,n,i)}if(t.delete){const i=pi(e,t.delete);return new Tn(i,n)}if(t.verify){const i=pi(e,t.verify);return new En(i,n)}return b()}function Ai(e,t){return e&&e.length>0?(y(void 0!==t),e.map(e=>function(e,t){let n=e.updateTime?hi(e.updateTime):hi(t);return n.isEqual(V.min())&&(n=hi(t)),new pn(n,e.transformResults||[])}(e,t))):[]}function Ci(e,t){return{documents:[gi(e,t.path)]}}function Ii(e,t){const n={structuredQuery:{}},i=t.path;null!==t.collectionGroup?(n.parent=gi(e,i),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=gi(e,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(e){if(0===e.length)return;const t=e.map(e=>function(e){if("=="===e.op){if(Je(e.value))return{unaryFilter:{field:Di(e.field),op:"IS_NAN"}};if(Ze(e.value))return{unaryFilter:{field:Di(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Je(e.value))return{unaryFilter:{field:Di(e.field),op:"IS_NOT_NAN"}};if(Ze(e.value))return{unaryFilter:{field:Di(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Di(e.field),op:Li(e.op),value:e.value}}}(e));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);r&&(n.structuredQuery.where=r);const s=function(e){if(0!==e.length)return e.map(e=>function(e){return{field:Di(e.field),direction:Pi(e.dir)}}(e))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(e,t){return e.gt||Fe(t)?t:{value:t}}(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function Ti(e){let t=mi(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){y(1===i);const e=n.from[0];e.allDescendants?r=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=Oi(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(e=>function(e){return new Et(Ni(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e)));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Fe(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new Tt(n,t)}(n.startAt));let c=null;return n.endAt&&(c=function(e){const t=!e.before,n=e.values||[];return new Tt(n,t)}(n.endAt)),Nt(t,r,o,s,a,"F",l,c)}function Ei(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return b()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function Oi(e){return e?void 0!==e.unaryFilter?[Mi(e)]:void 0!==e.fieldFilter?[Ri(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map(e=>Oi(e)).reduce((e,t)=>e.concat(t)):b():[]}function Pi(e){return ri[e]}function Li(e){return si[e]}function Di(e){return{fieldPath:e.canonicalString()}}function Ni(e){return W.fromServerFormat(e.fieldPath)}function Ri(e){return yt.create(Ni(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return b()}}(e.fieldFilter.op),e.fieldFilter.value)}function Mi(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Ni(e.unaryFilter.field);return yt.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Ni(e.unaryFilter.field);return yt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ni(e.unaryFilter.field);return yt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Ni(e.unaryFilter.field);return yt.create(r,"!=",{nullValue:"NULL_VALUE"});default:return b()}}function Fi(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function ji(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
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
 */function Vi(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=Bi(t)),t=zi(e.get(n),t);return Bi(t)}function zi(e,t){let n=t;const i=e.length;for(let r=0;r<i;r++){const t=e.charAt(r);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function Bi(e){return e+""}function Hi(e){const t=e.length;if(y(t>=2),2===t)return y(""===e.charAt(0)&&""===e.charAt(1)),B.emptyPath();const n=t-2,i=[];let r="";for(let s=0;s<t;){const t=e.indexOf("",s);switch((t<0||t>n)&&b(),e.charAt(t+1)){case"":const n=e.substring(s,t);let o;0===r.length?o=n:(r+=n,o=r,r=""),i.push(o);break;case"":r+=e.substring(s,t),r+="\0";break;case"":r+=e.substring(s,t+1);break;default:b()}s=t+2}return new B(i)}
/**
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
 */const Wi=["userId","batchId"];
/**
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
 */function Xi(e,t){return[e,Vi(t)]}function Ui(e,t,n){return[e,Vi(t),n]}const Yi={},Gi=["prefixPath","collectionGroup","readTime","documentId"],qi=["prefixPath","collectionGroup","documentId"],$i=["collectionGroup","readTime","prefixPath","documentId"],Ki=["canonicalId","targetId"],Qi=["targetId","path"],Zi=["path","targetId"],Ji=["collectionId","parent"],er=["indexId","uid"],tr=["uid","sequenceNumber"],nr=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],ir=["indexId","uid","orderedDocumentKey"],rr=["userId","collectionPath","documentId"],sr=["userId","collectionPath","largestBatchId"],or=["userId","collectionGroup","largestBatchId"],ar=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],lr=[...ar,"documentOverlays"],cr=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],hr=cr,ur=[...hr,"indexConfiguration","indexState","indexEntries"];
/**
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
 */class dr extends te{constructor(e,t){super(),this.ie=e,this.currentSequenceNumber=t}}function fr(e,t){const n=w(e);return se.O(n.ie,t)}
/**
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
 */class pr{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const t=this.mutations[i];t.key.isEqual(e.key)&&yn(t,e,n[i])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=xn(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=xn(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Hn();return this.mutations.forEach(i=>{const r=e.get(i.key),s=r.overlayedDocument;let o=this.applyToLocalView(s,r.mutatedFields);o=t.has(i.key)?null:o;const a=bn(s,o);null!==a&&n.set(i.key,a),s.isValidDocument()||s.convertToNoDocument(V.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Yn())}isEqual(e){return this.batchId===e.batchId&&M(this.mutations,e.mutations,(e,t)=>kn(e,t))&&M(this.baseMutations,e.baseMutations,(e,t)=>kn(e,t))}}class gr{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){y(e.mutations.length===n.length);let i=Xn;const r=e.mutations;for(let s=0;s<r.length;s++)i=i.insert(r[s].key,n[s].version);return new gr(e,t,n,i)}}
/**
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
 */class mr{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
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
 */class vr{constructor(e,t,n,i,r=V.min(),s=V.min(),o=Ie.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new vr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new vr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
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
 */class br{constructor(e){this.re=e}}function yr(e,t){let n;if(t.document)n=xi(e.re,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=X.fromSegments(t.noDocument.path),i=Sr(t.noDocument.readTime);n=ct.newNoDocument(e,i),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return b();{const e=X.fromSegments(t.unknownDocument.path),i=Sr(t.unknownDocument.version);n=ct.newUnknownDocument(e,i)}}return t.readTime&&n.setReadTime(function(e){const t=new j(e[0],e[1]);return V.fromTimestamp(t)}(t.readTime)),n}function xr(e,t){const n=t.key,i={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:wr(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())i.document=function(e,t){return{name:fi(e,t.key),fields:t.data.value.mapValue.fields,updateTime:ai(e,t.version.toTimestamp())}}(e.re,t);else if(t.isNoDocument())i.noDocument={path:n.path.toArray(),readTime:kr(t.version)};else{if(!t.isUnknownDocument())return b();i.unknownDocument={path:n.path.toArray(),version:kr(t.version)}}return i}function wr(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function kr(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function Sr(e){const t=new j(e.seconds,e.nanoseconds);return V.fromTimestamp(t)}function _r(e,t){const n=(t.baseMutations||[]).map(t=>_i(e.re,t));for(let s=0;s<t.mutations.length-1;++s){const e=t.mutations[s];if(s+1<t.mutations.length&&void 0!==t.mutations[s+1].transform){const n=t.mutations[s+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const i=t.mutations.map(t=>_i(e.re,t)),r=j.fromMillis(t.localWriteTimeMs);return new pr(t.batchId,r,n,i)}function Ar(e){const t=Sr(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?Sr(e.lastLimboFreeSnapshotVersion):V.min();let i;var r;return void 0!==e.query.documents?(y(1===(r=e.query).documents.length),i=Bt(Rt(mi(r.documents[0])))):i=function(e){return Bt(Ti(e))}(e.query),new vr(i,e.targetId,0,e.lastListenSequenceNumber,t,n,Ie.fromBase64String(e.resumeToken))}function Cr(e,t){const n=kr(t.snapshotVersion),i=kr(t.lastLimboFreeSnapshotVersion);let r;r=gt(t.target)?Ci(e.re,t.target):Ii(e.re,t.target);const s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:dt(t.target),readTime:n,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:i,query:r}}function Ir(e){const t=Ti({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Ht(t,t.limit,"L"):t}function Tr(e,t){return new mr(t.largestBatchId,_i(e.re,t.overlayMutation))}function Er(e,t){const n=t.path.lastSegment();return[e,Vi(t.path.popLast()),n]}function Or(e,t,n,i){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:kr(i.readTime),documentKey:Vi(i.documentKey.path),largestBatchId:i.largestBatchId}}
/**
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
 */class Pr{getBundleMetadata(e,t){return Lr(e).get(t).next(e=>{if(e)return{id:(t=e).bundleId,createTime:Sr(t.createTime),version:t.version};var t})}saveBundleMetadata(e,t){return Lr(e).put({bundleId:(n=t).id,createTime:kr(hi(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return Dr(e).get(t).next(e=>{if(e)return{name:(t=e).name,query:Ir(t.bundledQuery),readTime:Sr(t.readTime)};var t})}saveNamedQuery(e,t){return Dr(e).put(function(e){return{name:e.name,readTime:kr(hi(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function Lr(e){return fr(e,"bundles")}function Dr(e){return fr(e,"namedQueries")}
/**
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
 */class Nr{constructor(e,t){this.It=e,this.userId=t}static oe(e,t){const n=t.uid||"";return new Nr(e,n)}getOverlay(e,t){return Rr(e).get(Er(this.userId,t)).next(e=>e?Tr(this.It,e):null)}getOverlays(e,t){const n=Bn();return ie.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){const i=[];return n.forEach((n,r)=>{const s=new mr(t,r);i.push(this.ue(e,s))}),ie.waitFor(i)}removeOverlaysForBatchId(e,t,n){const i=new Set;t.forEach(e=>i.add(Vi(e.getCollectionPath())));const r=[];return i.forEach(t=>{const i=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);r.push(Rr(e).Y("collectionPathOverlayIndex",i))}),ie.waitFor(r)}getOverlaysForCollection(e,t,n){const i=Bn(),r=Vi(t),s=IDBKeyRange.bound([this.userId,r,n],[this.userId,r,Number.POSITIVE_INFINITY],!0);return Rr(e).W("collectionPathOverlayIndex",s).next(e=>{for(const t of e){const e=Tr(this.It,t);i.set(e.getKey(),e)}return i})}getOverlaysForCollectionGroup(e,t,n,i){const r=Bn();let s;const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Rr(e).Z({index:"collectionGroupOverlayIndex",range:o},(e,t,n)=>{const o=Tr(this.It,t);r.size()<i||o.largestBatchId===s?(r.set(o.getKey(),o),s=o.largestBatchId):n.done()}).next(()=>r)}ue(e,t){return Rr(e).put(function(e,t,n){const[i,r,s]=Er(t,n.mutation.key);return{userId:t,collectionPath:r,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:Si(e.re,n.mutation)}}(this.It,this.userId,t))}}function Rr(e){return fr(e,"documentOverlays")}
/**
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
 */class Mr{constructor(){}ce(e,t){this.ae(e,t),t.he()}ae(e,t){if("nullValue"in e)this.le(t,5);else if("booleanValue"in e)this.le(t,10),t.fe(e.booleanValue?1:0);else if("integerValue"in e)this.le(t,15),t.fe(Oe(e.integerValue));else if("doubleValue"in e){const n=Oe(e.doubleValue);isNaN(n)?this.le(t,13):(this.le(t,15),je(n)?t.fe(0):t.fe(n))}else if("timestampValue"in e){const n=e.timestampValue;this.le(t,20),"string"==typeof n?t.de(n):(t.de(""+(n.seconds||"")),t.fe(n.nanos||0))}else if("stringValue"in e)this._e(e.stringValue,t),this.we(t);else if("bytesValue"in e)this.le(t,30),t.me(Pe(e.bytesValue)),this.we(t);else if("referenceValue"in e)this.ge(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.le(t,45),t.fe(n.latitude||0),t.fe(n.longitude||0)}else"mapValue"in e?nt(e)?this.le(t,Number.MAX_SAFE_INTEGER):(this.ye(e.mapValue,t),this.we(t)):"arrayValue"in e?(this.pe(e.arrayValue,t),this.we(t)):b()}_e(e,t){this.le(t,25),this.Ie(e,t)}Ie(e,t){t.de(e)}ye(e,t){const n=e.fields||{};this.le(t,55);for(const i of Object.keys(n))this._e(i,t),this.ae(n[i],t)}pe(e,t){const n=e.values||[];this.le(t,50);for(const i of n)this.ae(i,t)}ge(e,t){this.le(t,37),X.fromName(e).path.forEach(e=>{this.le(t,60),this.Ie(e,t)})}le(e,t){e.fe(t)}we(e){e.fe(2)}}function Fr(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}function jr(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const i=Fr(255&e[n]);if(t+=i,8!==i)break}return t}(e);return Math.ceil(t/8)}Mr.Te=new Mr;class Vr{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ee(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ae(n.value),n=t.next();this.Re()}be(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Pe(n.value),n=t.next();this.ve()}Ve(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Ae(e);else if(e<2048)this.Ae(960|e>>>6),this.Ae(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ae(480|e>>>12),this.Ae(128|63&e>>>6),this.Ae(128|63&e);else{const e=t.codePointAt(0);this.Ae(240|e>>>18),this.Ae(128|63&e>>>12),this.Ae(128|63&e>>>6),this.Ae(128|63&e)}}this.Re()}Se(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Pe(e);else if(e<2048)this.Pe(960|e>>>6),this.Pe(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Pe(480|e>>>12),this.Pe(128|63&e>>>6),this.Pe(128|63&e);else{const e=t.codePointAt(0);this.Pe(240|e>>>18),this.Pe(128|63&e>>>12),this.Pe(128|63&e>>>6),this.Pe(128|63&e)}}this.ve()}De(e){const t=this.Ce(e),n=jr(t);this.xe(1+n),this.buffer[this.position++]=255&n;for(let i=t.length-n;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Ne(e){const t=this.Ce(e),n=jr(t);this.xe(1+n),this.buffer[this.position++]=~(255&n);for(let i=t.length-n;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}ke(){this.Me(255),this.Me(255)}Oe(){this.Fe(255),this.Fe(255)}reset(){this.position=0}seed(e){this.xe(e.length),this.buffer.set(e,this.position),this.position+=e.length}$e(){return this.buffer.slice(0,this.position)}Ce(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let i=1;i<t.length;++i)t[i]^=n?255:0;return t}Ae(e){const t=255&e;0===t?(this.Me(0),this.Me(255)):255===t?(this.Me(255),this.Me(0)):this.Me(t)}Pe(e){const t=255&e;0===t?(this.Fe(0),this.Fe(255)):255===t?(this.Fe(255),this.Fe(0)):this.Fe(e)}Re(){this.Me(0),this.Me(1)}ve(){this.Fe(0),this.Fe(1)}Me(e){this.xe(1),this.buffer[this.position++]=e}Fe(e){this.xe(1),this.buffer[this.position++]=~e}xe(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const i=new Uint8Array(n);i.set(this.buffer),this.buffer=i}}class zr{constructor(e){this.Be=e}me(e){this.Be.Ee(e)}de(e){this.Be.Ve(e)}fe(e){this.Be.De(e)}he(){this.Be.ke()}}class Br{constructor(e){this.Be=e}me(e){this.Be.be(e)}de(e){this.Be.Se(e)}fe(e){this.Be.Ne(e)}he(){this.Be.Oe()}}class Hr{constructor(){this.Be=new Vr,this.Le=new zr(this.Be),this.Ue=new Br(this.Be)}seed(e){this.Be.seed(e)}qe(e){return 0===e?this.Le:this.Ue}$e(){return this.Be.$e()}reset(){this.Be.reset()}}
/**
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
 */class Wr{constructor(e,t,n,i){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=i}Ke(){const e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new Wr(this.indexId,this.documentKey,this.arrayValue,n)}}function Xr(e,t){let n=e.indexId-t.indexId;return 0!==n?n:(n=Ur(e.arrayValue,t.arrayValue),0!==n?n:(n=Ur(e.directionalValue,t.directionalValue),0!==n?n:X.comparator(e.documentKey,t.documentKey)))}function Ur(e,t){for(let n=0;n<e.length&&n<t.length;++n){const i=e[n]-t[n];if(0!==i)return i}return e.length-t.length}
/**
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
 */class Yr{constructor(e){this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Ge=e.orderBy,this.Qe=[];for(const t of e.filters){const e=t;e.dt()?this.je=e:this.Qe.push(e)}}We(e){const t=Y(e);if(void 0!==t&&!this.ze(t))return!1;const n=G(e);let i=0,r=0;for(;i<n.length&&this.ze(n[i]);++i);if(i===n.length)return!0;if(void 0!==this.je){const e=n[i];if(!this.He(this.je,e)||!this.Je(this.Ge[r++],e))return!1;++i}for(;i<n.length;++i){const e=n[i];if(r>=this.Ge.length||!this.Je(this.Ge[r++],e))return!1}return!0}ze(e){for(const t of this.Qe)if(this.He(t,e))return!0;return!1}He(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}Je(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
/**
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
 */class Gr{constructor(){this.Ye=new qr}addToCollectionParentIndex(e,t){return this.Ye.add(t),ie.resolve()}getCollectionParents(e,t){return ie.resolve(this.Ye.getEntries(t))}addFieldIndex(e,t){return ie.resolve()}deleteFieldIndex(e,t){return ie.resolve()}getDocumentsMatchingTarget(e,t){return ie.resolve(null)}getIndexType(e,t){return ie.resolve(0)}getFieldIndexes(e,t){return ie.resolve([])}getNextCollectionGroupToUpdate(e){return ie.resolve(null)}getMinOffset(e,t){return ie.resolve(Z.min())}getMinOffsetFromCollectionGroup(e,t){return ie.resolve(Z.min())}updateCollectionGroup(e,t,n){return ie.resolve()}updateIndexEntries(e,t){return ie.resolve()}}class qr{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new ke(B.comparator),r=!i.has(n);return this.index[t]=i.add(n),r}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new ke(B.comparator)).toArray()}}
/**
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
 */const $r=new Uint8Array(0);class Kr{constructor(e,t){this.user=e,this.databaseId=t,this.Xe=new qr,this.Ze=new Rn(e=>dt(e),(e,t)=>pt(e,t)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Xe.has(t)){const n=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.Xe.add(t)});const r={collectionId:n,parent:Vi(i)};return Qr(e).put(r)}return ie.resolve()}getCollectionParents(e,t){const n=[],i=IDBKeyRange.bound([t,""],[F(t),""],!1,!0);return Qr(e).W(i).next(e=>{for(const i of e){if(i.collectionId!==t)break;n.push(Hi(i.parent))}return n})}addFieldIndex(e,t){const n=Jr(e),i=function(e){return{indexId:e.indexId,collectionGroup:e.collectionGroup,fields:e.fields.map(e=>[e.fieldPath.canonicalString(),e.kind])}}(t);delete i.indexId;const r=n.add(i);if(t.indexState){const n=es(e);return r.next(e=>{n.put(Or(e,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return r.next()}deleteFieldIndex(e,t){const n=Jr(e),i=es(e),r=Zr(e);return n.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const n=Zr(e);let i=!0;const r=new Map;return ie.forEach(this.tn(t),t=>this.en(e,t).next(e=>{i&&(i=!!e),r.set(t,e)})).next(()=>{if(i){let e=Yn();const i=[];return ie.forEach(r,(r,s)=>{var o;p("IndexedDbIndexManager",`Using index ${o=r,`id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map(e=>`${e.fieldPath}:${e.kind}`).join(",")}`} to execute ${dt(t)}`);const a=function(e,t){const n=Y(t);if(void 0===n)return null;for(const i of mt(e,n.fieldPath))switch(i.op){case"array-contains-any":return i.value.arrayValue.values||[];case"array-contains":return[i.value]}return null}(s,r),l=function(e,t){const n=new Map;for(const i of G(t))for(const t of mt(e,i.fieldPath))switch(t.op){case"==":case"in":n.set(i.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(i.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(s,r),c=function(e,t){const n=[];let i=!0;for(const r of G(t)){const t=0===r.kind?vt(e,r.fieldPath,e.startAt):bt(e,r.fieldPath,e.startAt);n.push(t.value),i&&(i=t.inclusive)}return new Tt(n,i)}(s,r),h=function(e,t){const n=[];let i=!0;for(const r of G(t)){const t=0===r.kind?bt(e,r.fieldPath,e.endAt):vt(e,r.fieldPath,e.endAt);n.push(t.value),i&&(i=t.inclusive)}return new Tt(n,i)}(s,r),u=this.nn(r,s,c),d=this.nn(r,s,h),f=this.sn(r,s,l),g=this.rn(r.indexId,a,u,c.inclusive,d,h.inclusive,f);return ie.forEach(g,r=>n.J(r,t.limit).next(t=>{t.forEach(t=>{const n=X.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),i.push(n))})}))}).next(()=>i)}return ie.resolve(null)})}tn(e){let t=this.Ze.get(e);return t||(t=[e],this.Ze.set(e,t),t)}rn(e,t,n,i,r,s,o){const a=(null!=t?t.length:1)*Math.max(n.length,r.length),l=a/(null!=t?t.length:1),c=[];for(let h=0;h<a;++h){const a=t?this.on(t[h/l]):$r,u=this.un(e,a,n[h%l],i),d=this.cn(e,a,r[h%l],s),f=o.map(t=>this.un(e,a,t,!0));c.push(...this.createRange(u,d,f))}return c}un(e,t,n,i){const r=new Wr(e,X.empty(),t,n);return i?r:r.Ke()}cn(e,t,n,i){const r=new Wr(e,X.empty(),t,n);return i?r.Ke():r}en(e,t){const n=new Yr(t),i=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(e=>{let t=null;for(const i of e)n.We(i)&&(!t||i.fields.length>t.fields.length)&&(t=i);return t})}getIndexType(e,t){let n=2;return ie.forEach(this.tn(t),t=>this.en(e,t).next(e=>{e?0!==n&&e.fields.length<function(e){let t=new ke(W.comparator),n=!1;for(const i of e.filters){const e=i;e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field))}for(const i of e.orderBy)i.field.isKeyField()||(t=t.add(i.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})).next(()=>n)}an(e,t){const n=new Hr;for(const i of G(e)){const e=t.data.field(i.fieldPath);if(null==e)return null;const r=n.qe(i.kind);Mr.Te.ce(e,r)}return n.$e()}on(e){const t=new Hr;return Mr.Te.ce(e,t.qe(0)),t.$e()}hn(e,t){const n=new Hr;return Mr.Te.ce($e(this.databaseId,t),n.qe(function(e){const t=G(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.$e()}sn(e,t,n){if(null===n)return[];let i=[];i.push(new Hr);let r=0;for(const s of G(e)){const e=n[r++];for(const n of i)if(this.ln(t,s.fieldPath)&&Qe(e))i=this.fn(i,s,e);else{const t=n.qe(s.kind);Mr.Te.ce(e,t)}}return this.dn(i)}nn(e,t,n){return this.sn(e,t,n.position)}dn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].$e();return t}fn(e,t,n){const i=[...e],r=[];for(const s of n.arrayValue.values||[])for(const e of i){const n=new Hr;n.seed(e.$e()),Mr.Te.ce(s,n.qe(t.kind)),r.push(n)}return r}ln(e,t){return!!e.filters.find(e=>e instanceof yt&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op))}getFieldIndexes(e,t){const n=Jr(e),i=es(e);return(t?n.W("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.W()).next(e=>{const t=[];return ie.forEach(e,e=>i.get([e.indexId,this.uid]).next(n=>{t.push(function(e,t){const n=t?new $(t.sequenceNumber,new Z(Sr(t.readTime),new X(Hi(t.documentKey)),t.largestBatchId)):$.empty(),i=e.fields.map(([e,t])=>new q(W.fromServerFormat(e),t));return new U(e.indexId,e.collectionGroup,i,n)}(e,n))})).next(()=>t)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(e=>0===e.length?null:(e.sort((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:R(e.collectionGroup,t.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(e,t,n){const i=Jr(e),r=es(e);return this._n(e).next(e=>i.W("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(t=>ie.forEach(t,t=>r.put(Or(t.indexId,this.user,e,n)))))}updateIndexEntries(e,t){const n=new Map;return ie.forEach(t,(t,i)=>{const r=n.get(t.collectionGroup);return(r?ie.resolve(r):this.getFieldIndexes(e,t.collectionGroup)).next(r=>(n.set(t.collectionGroup,r),ie.forEach(r,n=>this.wn(e,t,n).next(t=>{const r=this.mn(i,n);return t.isEqual(r)?ie.resolve():this.gn(e,i,n,t,r)}))))})}yn(e,t,n,i){return Zr(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.hn(n,t.key),documentKey:t.key.path.toArray()})}pn(e,t,n,i){return Zr(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.hn(n,t.key),t.key.path.toArray()])}wn(e,t,n){const i=Zr(e);let r=new ke(Xr);return i.Z({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.hn(n,t)])},(e,i)=>{r=r.add(new Wr(n.indexId,t,i.arrayValue,i.directionalValue))}).next(()=>r)}mn(e,t){let n=new ke(Xr);const i=this.an(t,e);if(null==i)return n;const r=Y(t);if(null!=r){const s=e.data.field(r.fieldPath);if(Qe(s))for(const r of s.arrayValue.values||[])n=n.add(new Wr(t.indexId,e.key,this.on(r),i))}else n=n.add(new Wr(t.indexId,e.key,$r,i));return n}gn(e,t,n,i,r){p("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const s=[];return function(e,t,n,i,r){const s=e.getIterator(),o=t.getIterator();let a=_e(s),l=_e(o);for(;a||l;){let e=!1,t=!1;if(a&&l){const i=n(a,l);i<0?t=!0:i>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(i(l),l=_e(o)):t?(r(a),a=_e(s)):(a=_e(s),l=_e(o))}}(i,r,Xr,i=>{s.push(this.yn(e,t,n,i))},i=>{s.push(this.pn(e,t,n,i))}),ie.waitFor(s)}_n(e){let t=1;return es(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(e,n,i)=>{i.done(),t=n.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((e,t)=>Xr(e,t)).filter((e,t,n)=>!t||0!==Xr(e,n[t-1]));const i=[];i.push(e);for(const s of n){const n=Xr(s,e),r=Xr(s,t);if(0===n)i[0]=e.Ke();else if(n>0&&r<0)i.push(s),i.push(s.Ke());else if(r>0)break}i.push(t);const r=[];for(let s=0;s<i.length;s+=2)r.push(IDBKeyRange.bound([i[s].indexId,this.uid,i[s].arrayValue,i[s].directionalValue,$r,[]],[i[s+1].indexId,this.uid,i[s+1].arrayValue,i[s+1].directionalValue,$r,[]]));return r}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(ts)}getMinOffset(e,t){return ie.mapArray(this.tn(t),t=>this.en(e,t).next(e=>e||b())).next(ts)}}function Qr(e){return fr(e,"collectionParents")}function Zr(e){return fr(e,"indexEntries")}function Jr(e){return fr(e,"indexConfiguration")}function es(e){return fr(e,"indexState")}function ts(e){y(0!==e.length);let t=e[0].indexState.offset,n=t.largestBatchId;for(let i=1;i<e.length;i++){const r=e[i].indexState.offset;J(r,t)<0&&(t=r),n<r.largestBatchId&&(n=r.largestBatchId)}return new Z(t.readTime,t.documentKey,n)}
/**
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
 */const ns={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class is{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new is(e,is.DEFAULT_COLLECTION_PERCENTILE,is.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
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
 */function rs(e,t,n){const i=e.store("mutations"),r=e.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=i.Z({range:o},(e,t,n)=>(a++,n.delete()));s.push(l.next(()=>{y(1===a)}));const c=[];for(const h of n.mutations){const e=Ui(t,h.key.path,n.batchId);s.push(r.delete(e)),c.push(h.key)}return ie.waitFor(s).next(()=>c)}function ss(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw b();t=e.noDocument}return JSON.stringify(t).length}
/**
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
 */is.DEFAULT_COLLECTION_PERCENTILE=10,is.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,is.DEFAULT=new is(41943040,is.DEFAULT_COLLECTION_PERCENTILE,is.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),is.DISABLED=new is(-1,0,0);class os{constructor(e,t,n,i){this.userId=e,this.It=t,this.indexManager=n,this.referenceDelegate=i,this.In={}}static oe(e,t,n,i){y(""!==e.uid);const r=e.isAuthenticated()?e.uid:"";return new os(r,t,n,i)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ls(e).Z({index:"userMutationsIndex",range:n},(e,n,i)=>{t=!1,i.done()}).next(()=>t)}addMutationBatch(e,t,n,i){const r=cs(e),s=ls(e);return s.add({}).next(o=>{y("number"==typeof o);const a=new pr(o,t,n,i),l=function(e,t,n){const i=n.baseMutations.map(t=>Si(e.re,t)),r=n.mutations.map(t=>Si(e.re,t));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:i,mutations:r}}(this.It,this.userId,a),c=[];let h=new ke((e,t)=>R(e.canonicalString(),t.canonicalString()));for(const e of i){const t=Ui(this.userId,e.key.path,o);h=h.add(e.key.path.popLast()),c.push(s.put(l)),c.push(r.put(t,Yi))}return h.forEach(t=>{c.push(this.indexManager.addToCollectionParentIndex(e,t))}),e.addOnCommittedListener(()=>{this.In[o]=a.keys()}),ie.waitFor(c).next(()=>a)})}lookupMutationBatch(e,t){return ls(e).get(t).next(e=>e?(y(e.userId===this.userId),_r(this.It,e)):null)}Tn(e,t){return this.In[t]?ie.resolve(this.In[t]):this.lookupMutationBatch(e,t).next(e=>{if(e){const n=e.keys();return this.In[t]=n,n}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=IDBKeyRange.lowerBound([this.userId,n]);let r=null;return ls(e).Z({index:"userMutationsIndex",range:i},(e,t,i)=>{t.userId===this.userId&&(y(t.batchId>=n),r=_r(this.It,t)),i.done()}).next(()=>r)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return ls(e).Z({index:"userMutationsIndex",range:t,reverse:!0},(e,t,i)=>{n=t.batchId,i.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return ls(e).W("userMutationsIndex",t).next(e=>e.map(e=>_r(this.It,e)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=Xi(this.userId,t.path),i=IDBKeyRange.lowerBound(n),r=[];return cs(e).Z({range:i},(n,i,s)=>{const[o,a,l]=n,c=Hi(a);if(o===this.userId&&t.path.isEqual(c))return ls(e).get(l).next(e=>{if(!e)throw b();y(e.userId===this.userId),r.push(_r(this.It,e))});s.done()}).next(()=>r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ke(R);const i=[];return t.forEach(t=>{const r=Xi(this.userId,t.path),s=IDBKeyRange.lowerBound(r),o=cs(e).Z({range:s},(e,i,r)=>{const[s,o,a]=e,l=Hi(o);s===this.userId&&t.path.isEqual(l)?n=n.add(a):r.done()});i.push(o)}),ie.waitFor(i).next(()=>this.En(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1,r=Xi(this.userId,n),s=IDBKeyRange.lowerBound(r);let o=new ke(R);return cs(e).Z({range:s},(e,t,r)=>{const[s,a,l]=e,c=Hi(a);s===this.userId&&n.isPrefixOf(c)?c.length===i&&(o=o.add(l)):r.done()}).next(()=>this.En(e,o))}En(e,t){const n=[],i=[];return t.forEach(t=>{i.push(ls(e).get(t).next(e=>{if(null===e)throw b();y(e.userId===this.userId),n.push(_r(this.It,e))}))}),ie.waitFor(i).next(()=>n)}removeMutationBatch(e,t){return rs(e.ie,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.An(t.batchId)}),ie.forEach(n,t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))}An(e){delete this.In[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return ie.resolve();const n=IDBKeyRange.lowerBound([this.userId]),i=[];return cs(e).Z({range:n},(e,t,n)=>{if(e[0]===this.userId){const t=Hi(e[1]);i.push(t)}else n.done()}).next(()=>{y(0===i.length)})})}containsKey(e,t){return as(e,this.userId,t)}Rn(e){return hs(e).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function as(e,t,n){const i=Xi(t,n.path),r=i[1],s=IDBKeyRange.lowerBound(i);let o=!1;return cs(e).Z({range:s,X:!0},(e,n,i)=>{const[s,a,l]=e;s===t&&a===r&&(o=!0),i.done()}).next(()=>o)}function ls(e){return fr(e,"mutations")}function cs(e){return fr(e,"documentMutations")}function hs(e){return fr(e,"mutationQueues")}
/**
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
 */class us{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new us(0)}static vn(){return new us(-1)}}
/**
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
 */class ds{constructor(e,t){this.referenceDelegate=e,this.It=t}allocateTargetId(e){return this.Vn(e).next(t=>{const n=new us(t.highestTargetId);return t.highestTargetId=n.next(),this.Sn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Vn(e).next(e=>V.fromTimestamp(new j(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Vn(e).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.Vn(e).next(i=>(i.highestListenSequenceNumber=t,n&&(i.lastRemoteSnapshotVersion=n.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Sn(e,i)))}addTargetData(e,t){return this.Dn(e,t).next(()=>this.Vn(e).next(n=>(n.targetCount+=1,this.Cn(t,n),this.Sn(e,n))))}updateTargetData(e,t){return this.Dn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>fs(e).delete(t.targetId)).next(()=>this.Vn(e)).next(t=>(y(t.targetCount>0),t.targetCount-=1,this.Sn(e,t)))}removeTargets(e,t,n){let i=0;const r=[];return fs(e).Z((s,o)=>{const a=Ar(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(i++,r.push(this.removeTargetData(e,a)))}).next(()=>ie.waitFor(r)).next(()=>i)}forEachTarget(e,t){return fs(e).Z((e,n)=>{const i=Ar(n);t(i)})}Vn(e){return ps(e).get("targetGlobalKey").next(e=>(y(null!==e),e))}Sn(e,t){return ps(e).put("targetGlobalKey",t)}Dn(e,t){return fs(e).put(Cr(this.It,t))}Cn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.Vn(e).next(e=>e.targetCount)}getTargetData(e,t){const n=dt(t),i=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let r=null;return fs(e).Z({range:i,index:"queryTargetsIndex"},(e,n,i)=>{const s=Ar(n);pt(t,s.target)&&(r=s,i.done())}).next(()=>r)}addMatchingKeys(e,t,n){const i=[],r=gs(e);return t.forEach(t=>{const s=Vi(t.path);i.push(r.put({targetId:n,path:s})),i.push(this.referenceDelegate.addReference(e,n,t))}),ie.waitFor(i)}removeMatchingKeys(e,t,n){const i=gs(e);return ie.forEach(t,t=>{const r=Vi(t.path);return ie.waitFor([i.delete([n,r]),this.referenceDelegate.removeReference(e,n,t)])})}removeMatchingKeysForTargetId(e,t){const n=gs(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(i)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),i=gs(e);let r=Yn();return i.Z({range:n,X:!0},(e,t,n)=>{const i=Hi(e[1]),s=new X(i);r=r.add(s)}).next(()=>r)}containsKey(e,t){const n=Vi(t.path),i=IDBKeyRange.bound([n],[F(n)],!1,!0);let r=0;return gs(e).Z({index:"documentTargetsIndex",X:!0,range:i},([e,t],n,i)=>{0!==e&&(r++,i.done())}).next(()=>r>0)}se(e,t){return fs(e).get(t).next(e=>e?Ar(e):null)}}function fs(e){return fr(e,"targets")}function ps(e){return fr(e,"targetGlobal")}function gs(e){return fr(e,"targetDocuments")}
/**
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
 */function ms([e,t],[n,i]){const r=R(e,n);return 0===r?R(t,i):r}class vs{constructor(e){this.xn=e,this.buffer=new ke(ms),this.Nn=0}kn(){return++this.Nn}Mn(e){const t=[e,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();ms(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class bs{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.On=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Fn(6e4)}stop(){this.On&&(this.On.cancel(),this.On=null)}get started(){return null!==this.On}Fn(e){p("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.On=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.On=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){le(e)?p("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await ne(e)}await this.Fn(3e5)})}}class ys{constructor(e,t){this.$n=e,this.params=t}calculateTargetCount(e,t){return this.$n.Bn(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return ie.resolve(ge.at);const n=new vs(t);return this.$n.forEachTarget(e,e=>n.Mn(e.sequenceNumber)).next(()=>this.$n.Ln(e,e=>n.Mn(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.$n.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.$n.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector","Garbage collection skipped; disabled"),ie.resolve(ns)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ns):this.Un(e,t))}getCacheSize(e){return this.$n.getCacheSize(e)}Un(e,t){let n,i,r,o,a,l,c;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(p("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),i=this.params.maximumSequenceNumbersToCollect):i=t,o=Date.now(),this.nthSequenceNumber(e,i))).next(i=>(n=i,a=Date.now(),this.removeTargets(e,n,t))).next(t=>(r=t,l=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(c=Date.now(),d()<=s["a"].DEBUG&&p("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${o-h}ms\n\tDetermined least recently used ${i} in `+(a-o)+"ms\n"+`\tRemoved ${r} targets in `+(l-a)+"ms\n"+`\tRemoved ${e} documents in `+(c-l)+"ms\n"+`Total Duration: ${c-h}ms`),ie.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:r,documentsRemoved:e})))}}
/**
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
 */class xs{constructor(e,t){this.db=e,this.garbageCollector=function(e,t){return new ys(e,t)}(this,t)}Bn(e){const t=this.qn(e);return this.db.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}qn(e){let t=0;return this.Ln(e,e=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Ln(e,t){return this.Kn(e,(e,n)=>t(n))}addReference(e,t,n){return ws(e,n)}removeReference(e,t,n){return ws(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return ws(e,t)}Gn(e,t){return function(e,t){let n=!1;return hs(e).tt(i=>as(e,i,t).next(e=>(e&&(n=!0),ie.resolve(!e)))).next(()=>n)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let r=0;return this.Kn(e,(s,o)=>{if(o<=t){const t=this.Gn(e,s).next(t=>{if(!t)return r++,n.getEntry(e,s).next(()=>(n.removeEntry(s,V.min()),gs(e).delete([0,Vi(s.path)])))});i.push(t)}}).next(()=>ie.waitFor(i)).next(()=>n.apply(e)).next(()=>r)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return ws(e,t)}Kn(e,t){const n=gs(e);let i,r=ge.at;return n.Z({index:"documentTargetsIndex"},([e,n],{path:s,sequenceNumber:o})=>{0===e?(r!==ge.at&&t(new X(Hi(i)),r),r=o,i=s):r=ge.at}).next(()=>{r!==ge.at&&t(new X(Hi(i)),r)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function ws(e,t){return gs(e).put(function(e,t){return{targetId:0,path:Vi(e.path),sequenceNumber:t}}(t,e.currentSequenceNumber))}
/**
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
 */class ks{constructor(){this.changes=new Rn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?ie.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
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
 */class Ss{constructor(e){this.It=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Is(e).put(n)}removeEntry(e,t,n){return Is(e).delete(function(e,t){const n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],wr(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.Qn(e,n)))}getEntry(e,t){let n=ct.newInvalidDocument(t);return Is(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Ts(t))},(e,i)=>{n=this.jn(t,i)}).next(()=>n)}Wn(e,t){let n={size:0,document:ct.newInvalidDocument(t)};return Is(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Ts(t))},(e,i)=>{n={document:this.jn(t,i),size:ss(i)}}).next(()=>n)}getEntries(e,t){let n=Fn();return this.zn(e,t,(e,t)=>{const i=this.jn(e,t);n=n.insert(e,i)}).next(()=>n)}Hn(e,t){let n=Fn(),i=new ye(X.comparator);return this.zn(e,t,(e,t)=>{const r=this.jn(e,t);n=n.insert(e,r),i=i.insert(e,ss(t))}).next(()=>({documents:n,Jn:i}))}zn(e,t,n){if(t.isEmpty())return ie.resolve();let i=new ke(Os);t.forEach(e=>i=i.add(e));const r=IDBKeyRange.bound(Ts(i.first()),Ts(i.last())),s=i.getIterator();let o=s.getNext();return Is(e).Z({index:"documentKeyIndex",range:r},(e,t,i)=>{const r=X.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;o&&Os(o,r)<0;)n(o,null),o=s.getNext();o&&o.isEqual(r)&&(n(o,t),o=s.hasNext()?s.getNext():null),o?i.j(Ts(o)):i.done()}).next(()=>{for(;o;)n(o,null),o=s.hasNext()?s.getNext():null})}getAllFromCollection(e,t,n){const i=[t.popLast().toArray(),t.lastSegment(),wr(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],r=[t.popLast().toArray(),t.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Is(e).W(IDBKeyRange.bound(i,r,!0)).next(e=>{let t=Fn();for(const n of e){const e=this.jn(X.fromSegments(n.prefixPath.concat(n.collectionGroup,n.documentId)),n);t=t.insert(e.key,e)}return t})}getAllFromCollectionGroup(e,t,n,i){let r=Fn();const s=Es(t,n),o=Es(t,Z.max());return Is(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(s,o,!0)},(e,t,n)=>{const s=this.jn(X.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);r=r.insert(s.key,s),r.size===i&&n.done()}).next(()=>r)}newChangeBuffer(e){return new As(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(e=>e.byteSize)}getMetadata(e){return Cs(e).get("remoteDocumentGlobalKey").next(e=>(y(!!e),e))}Qn(e,t){return Cs(e).put("remoteDocumentGlobalKey",t)}jn(e,t){if(t){const e=yr(this.It,t);if(!e.isNoDocument()||!e.version.isEqual(V.min()))return e}return ct.newInvalidDocument(e)}}function _s(e){return new Ss(e)}class As extends ks{constructor(e,t){super(),this.Yn=e,this.trackRemovals=t,this.Xn=new Rn(e=>e.toString(),(e,t)=>e.isEqual(t))}applyChanges(e){const t=[];let n=0,i=new ke((e,t)=>R(e.canonicalString(),t.canonicalString()));return this.changes.forEach((r,s)=>{const o=this.Xn.get(r);if(t.push(this.Yn.removeEntry(e,r,o.readTime)),s.isValidDocument()){const a=xr(this.Yn.It,s);i=i.add(r.path.popLast());const l=ss(a);n+=l-o.size,t.push(this.Yn.addEntry(e,r,a))}else if(n-=o.size,this.trackRemovals){const n=xr(this.Yn.It,s.convertToNoDocument(V.min()));t.push(this.Yn.addEntry(e,r,n))}}),i.forEach(n=>{t.push(this.Yn.indexManager.addToCollectionParentIndex(e,n))}),t.push(this.Yn.updateMetadata(e,n)),ie.waitFor(t)}getFromCache(e,t){return this.Yn.Wn(e,t).next(e=>(this.Xn.set(t,{size:e.size,readTime:e.document.readTime}),e.document))}getAllFromCache(e,t){return this.Yn.Hn(e,t).next(({documents:e,Jn:t})=>(t.forEach((t,n)=>{this.Xn.set(t,{size:n,readTime:e.get(t).readTime})}),e))}}function Cs(e){return fr(e,"remoteDocumentGlobal")}function Is(e){return fr(e,"remoteDocumentsV14")}function Ts(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function Es(e,t){const n=t.documentKey.path.toArray();return[e,wr(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Os(e,t){const n=e.path.toArray(),i=t.path.toArray();let r=0;for(let s=0;s<n.length-2&&s<i.length-2;++s)if(r=R(n[s],i[s]),r)return r;return r=R(n.length,i.length),r||(r=R(n[n.length-2],i[i.length-2]),r||R(n[n.length-1],i[i.length-1]))
/**
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
 */
/**
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
 */}class Ps{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
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
 */class Ls{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(n=i,this.getBaseDocument(e,t,n))).next(e=>(null!==n&&xn(n.mutation,e,Ae.empty(),j.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,Yn()).next(()=>t))}getLocalViewOfDocuments(e,t,n=Yn()){const i=Bn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,n).next(e=>{let t=Vn();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){const n=Bn();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,Yn()))}populateOverlays(e,t,n){const i=[];return n.forEach(e=>{t.has(e)||i.push(e)}),this.documentOverlayCache.getOverlays(e,i).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,i){let r=Fn();const s=Wn(),o=Wn();return t.forEach((e,t)=>{const o=n.get(t.key);i.has(t.key)&&(void 0===o||o.mutation instanceof _n)?r=r.insert(t.key,t):void 0!==o&&(s.set(t.key,o.mutation.getFieldMask()),xn(o.mutation,t,o.mutation.getFieldMask(),j.now()))}),this.recalculateAndSaveOverlays(e,r).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return o.set(e,new Ps(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),o))}recalculateAndSaveOverlays(e,t){const n=Wn();let i=new ye((e,t)=>e-t),r=Yn();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(const r of e)r.keys().forEach(e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||Ae.empty();o=r.applyToLocalView(s,o),n.set(e,o);const a=(i.get(r.batchId)||Yn()).add(e);i=i.insert(r.batchId,a)})}).next(()=>{const s=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,l=i.value,c=Hn();l.forEach(e=>{if(!r.has(e)){const i=bn(t.get(e),n.get(e));null!==i&&c.set(e,i),r=r.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,a,c))}return ie.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n){return function(e){return X.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Vt(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next(r=>{const s=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-r.size):ie.resolve(Bn());let o=-1,a=r;return s.next(t=>ie.forEach(t,(t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(t)?ie.resolve():this.getBaseDocument(e,t,n).next(e=>{a=a.insert(t,e)}))).next(()=>this.populateOverlays(e,t,r)).next(()=>this.computeViews(e,a,t,Yn())).next(e=>({batchId:o,changes:zn(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new X(t)).next(e=>{let t=Vn();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n){const i=t.collectionGroup;let r=Vn();return this.indexManager.getCollectionParents(e,i).next(s=>ie.forEach(s,s=>{const o=function(e,t){return new Dt(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(i));return this.getDocumentsMatchingCollectionQuery(e,o,n).next(e=>{e.forEach((e,t)=>{r=r.insert(e,t)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,t,n){let i;return this.remoteDocumentCache.getAllFromCollection(e,t.path,n).next(r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId))).next(e=>{e.forEach((e,t)=>{const n=t.getKey();null===i.get(n)&&(i=i.insert(n,ct.newInvalidDocument(n)))});let n=Vn();return i.forEach((i,r)=>{const s=e.get(i);void 0!==s&&xn(s.mutation,r,Ae.empty(),j.now()),Yt(t,r)&&(n=n.insert(i,r))}),n})}getBaseDocument(e,t,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(e,t):ie.resolve(ct.newInvalidDocument(t))}}
/**
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
 */class Ds{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return ie.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var n;return this.Zn.set(t.id,{id:(n=t).id,version:n.version,createTime:hi(n.createTime)}),ie.resolve()}getNamedQuery(e,t){return ie.resolve(this.ts.get(t))}saveNamedQuery(e,t){return this.ts.set(t.name,function(e){return{name:e.name,query:Ir(e.bundledQuery),readTime:hi(e.readTime)}}(t)),ie.resolve()}}
/**
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
 */class Ns{constructor(){this.overlays=new ye(X.comparator),this.es=new Map}getOverlay(e,t){return ie.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Bn();return ie.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,i)=>{this.ue(e,t,i)}),ie.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.es.get(n);return void 0!==i&&(i.forEach(e=>this.overlays=this.overlays.remove(e)),this.es.delete(n)),ie.resolve()}getOverlaysForCollection(e,t,n){const i=Bn(),r=t.length+1,s=new X(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===r&&e.largestBatchId>n&&i.set(e.getKey(),e)}return ie.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let r=new ye((e,t)=>e-t);const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=r.get(e.largestBatchId);null===t&&(t=Bn(),r=r.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Bn(),a=r.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach((e,t)=>o.set(e,t)),o.size()>=i)break;return ie.resolve(o)}ue(e,t,n){const i=this.overlays.get(n.key);if(null!==i){const e=this.es.get(i.largestBatchId).delete(n.key);this.es.set(i.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new mr(t,n));let r=this.es.get(t);void 0===r&&(r=Yn(),this.es.set(t,r)),this.es.set(t,r.add(n.key))}}
/**
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
 */class Rs{constructor(){this.ns=new ke(Ms.ss),this.rs=new ke(Ms.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){const n=new Ms(e,t);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.cs(new Ms(e,t))}hs(e,t){e.forEach(e=>this.removeReference(e,t))}ls(e){const t=new X(new B([])),n=new Ms(t,e),i=new Ms(t,e+1),r=[];return this.rs.forEachInRange([n,i],e=>{this.cs(e),r.push(e.key)}),r}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const t=new X(new B([])),n=new Ms(t,e),i=new Ms(t,e+1);let r=Yn();return this.rs.forEachInRange([n,i],e=>{r=r.add(e.key)}),r}containsKey(e){const t=new Ms(e,0),n=this.ns.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Ms{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return X.comparator(e.key,t.key)||R(e._s,t._s)}static os(e,t){return R(e._s,t._s)||X.comparator(e.key,t.key)}}
/**
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
 */class Fs{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new ke(Ms.ss)}checkEmpty(e){return ie.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new pr(r,t,n,i);this.mutationQueue.push(s);for(const o of i)this.gs=this.gs.add(new Ms(o.key,r)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return ie.resolve(s)}lookupMutationBatch(e,t){return ie.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.ps(n),r=i<0?0:i;return ie.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return ie.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return ie.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Ms(t,0),i=new Ms(t,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([n,i],e=>{const t=this.ys(e._s);r.push(t)}),ie.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ke(R);return t.forEach(e=>{const t=new Ms(e,0),i=new Ms(e,Number.POSITIVE_INFINITY);this.gs.forEachInRange([t,i],e=>{n=n.add(e._s)})}),ie.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let r=n;X.isDocumentKey(r)||(r=r.child(""));const s=new Ms(new X(r),0);let o=new ke(R);return this.gs.forEachWhile(e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===i&&(o=o.add(e._s)),!0)},s),ie.resolve(this.Is(o))}Is(e){const t=[];return e.forEach(e=>{const n=this.ys(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){y(0===this.Ts(t.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return ie.forEach(t.mutations,i=>{const r=new Ms(i.key,t.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=n})}An(e){}containsKey(e,t){const n=new Ms(t,0),i=this.gs.firstAfterOrEqual(n);return ie.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,ie.resolve()}Ts(e,t){return this.ps(e)}ps(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}ys(e){const t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
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
 */class js{constructor(e){this.Es=e,this.docs=new ye(X.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),r=i?i.size:0,s=this.Es(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return ie.resolve(n?n.document.mutableCopy():ct.newInvalidDocument(t))}getEntries(e,t){let n=Fn();return t.forEach(e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():ct.newInvalidDocument(e))}),ie.resolve(n)}getAllFromCollection(e,t,n){let i=Fn();const r=new X(t.child("")),s=this.docs.getIteratorFrom(r);for(;s.hasNext();){const{key:e,value:{document:r}}=s.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||J(Q(r),n)<=0||(i=i.insert(r.key,r.mutableCopy()))}return ie.resolve(i)}getAllFromCollectionGroup(e,t,n,i){b()}As(e,t){return ie.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new Vs(this)}getSize(e){return ie.resolve(this.size)}}class Vs extends ks{constructor(e){super(),this.Yn=e}applyChanges(e){const t=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?t.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(n)}),ie.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}
/**
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
 */class zs{constructor(e){this.persistence=e,this.Rs=new Rn(e=>dt(e),pt),this.lastRemoteSnapshotVersion=V.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Rs,this.targetCount=0,this.vs=us.Pn()}forEachTarget(e,t){return this.Rs.forEach((e,n)=>t(n)),ie.resolve()}getLastRemoteSnapshotVersion(e){return ie.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ie.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),ie.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.bs&&(this.bs=t),ie.resolve()}Dn(e){this.Rs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.vs=new us(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,ie.resolve()}updateTargetData(e,t){return this.Dn(t),ie.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,ie.resolve()}removeTargets(e,t,n){let i=0;const r=[];return this.Rs.forEach((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Rs.delete(s),r.push(this.removeMatchingKeysForTargetId(e,o.targetId)),i++)}),ie.waitFor(r).next(()=>i)}getTargetCount(e){return ie.resolve(this.targetCount)}getTargetData(e,t){const n=this.Rs.get(t)||null;return ie.resolve(n)}addMatchingKeys(e,t,n){return this.Ps.us(t,n),ie.resolve()}removeMatchingKeys(e,t,n){this.Ps.hs(t,n);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach(t=>{r.push(i.markPotentiallyOrphaned(e,t))}),ie.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),ie.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Ps.ds(t);return ie.resolve(n)}containsKey(e,t){return ie.resolve(this.Ps.containsKey(t))}}
/**
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
 */class Bs{constructor(e,t){this.Vs={},this.overlays={},this.Ss=new ge(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new zs(this),this.indexManager=new Gr,this.remoteDocumentCache=function(e){return new js(e)}(e=>this.referenceDelegate.xs(e)),this.It=new br(t),this.Ns=new Ds(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ns,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Vs[e.toKey()];return n||(n=new Fs(t,this.referenceDelegate),this.Vs[e.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,n){p("MemoryPersistence","Starting transaction:",e);const i=new Hs(this.Ss.next());return this.referenceDelegate.ks(),n(i).next(e=>this.referenceDelegate.Ms(i).next(()=>e)).toPromise().then(e=>(i.raiseOnCommittedEvent(),e))}Os(e,t){return ie.or(Object.values(this.Vs).map(n=>()=>n.containsKey(e,t)))}}class Hs extends te{constructor(e){super(),this.currentSequenceNumber=e}}class Ws{constructor(e){this.persistence=e,this.Fs=new Rs,this.$s=null}static Bs(e){return new Ws(e)}get Ls(){if(this.$s)return this.$s;throw b()}addReference(e,t,n){return this.Fs.addReference(n,t),this.Ls.delete(n.toString()),ie.resolve()}removeReference(e,t,n){return this.Fs.removeReference(n,t),this.Ls.add(n.toString()),ie.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),ie.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach(e=>this.Ls.add(e.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Ls.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}ks(){this.$s=new Set}Ms(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ie.forEach(this.Ls,n=>{const i=X.fromPath(n);return this.Us(e,i).next(e=>{e||t.removeEntry(i,V.min())})}).next(()=>(this.$s=null,t.apply(e)))}updateLimboDocument(e,t){return this.Us(e,t).next(e=>{e?this.Ls.delete(t.toString()):this.Ls.add(t.toString())})}xs(e){return 0}Us(e,t){return ie.or([()=>ie.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Os(e,t)])}}
/**
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
 */class Xs{constructor(e){this.It=e}$(e,t,n,i){const r=new re("createOrUpgrade",t);n<1&&i>=1&&(function(e){e.createObjectStore("owner")}(e),function(e){e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Wi,{unique:!0}),e.createObjectStore("documentMutations")}(e),Us(e),function(e){e.createObjectStore("remoteDocuments")}(e));let s=ie.resolve();return n<3&&i>=3&&(0!==n&&(function(e){e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal")}(e),Us(e)),s=s.next(()=>function(e){const t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:V.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)}(r))),n<4&&i>=4&&(0!==n&&(s=s.next(()=>function(e,t){return t.store("mutations").W().next(n=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Wi,{unique:!0});const i=t.store("mutations"),r=n.map(e=>i.put(e));return ie.waitFor(r)})}(e,r))),s=s.next(()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)})),n<5&&i>=5&&(s=s.next(()=>this.qs(r))),n<6&&i>=6&&(s=s.next(()=>(function(e){e.createObjectStore("remoteDocumentGlobal")}(e),this.Ks(r)))),n<7&&i>=7&&(s=s.next(()=>this.Gs(r))),n<8&&i>=8&&(s=s.next(()=>this.Qs(e,r))),n<9&&i>=9&&(s=s.next(()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)})),n<10&&i>=10&&(s=s.next(()=>this.js(r))),n<11&&i>=11&&(s=s.next(()=>{!function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})}(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),n<12&&i>=12&&(s=s.next(()=>{!function(e){const t=e.createObjectStore("documentOverlays",{keyPath:rr});t.createIndex("collectionPathOverlayIndex",sr,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",or,{unique:!1})}(e)})),n<13&&i>=13&&(s=s.next(()=>function(e){const t=e.createObjectStore("remoteDocumentsV14",{keyPath:Gi});t.createIndex("documentKeyIndex",qi),t.createIndex("collectionGroupIndex",$i)}(e)).next(()=>this.Ws(e,r)).next(()=>e.deleteObjectStore("remoteDocuments"))),n<14&&i>=14&&(s=s.next(()=>this.zs(e,r))),n<15&&i>=15&&(s=s.next(()=>function(e){e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:er}).createIndex("sequenceNumberIndex",tr,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:nr}).createIndex("documentKeyIndex",ir,{unique:!1})}(e))),s}Ks(e){let t=0;return e.store("remoteDocuments").Z((e,n)=>{t+=ss(n)}).next(()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}qs(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.W().next(t=>ie.forEach(t,t=>{const i=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.W("userMutationsIndex",i).next(n=>ie.forEach(n,n=>{y(n.userId===t.userId);const i=_r(this.It,n);return rs(e,t.userId,i).next(()=>{})}))}))}Gs(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(e=>{const i=[];return n.Z((n,r)=>{const s=new B(n),o=function(e){return[0,Vi(e)]}(s);i.push(t.get(o).next(n=>n?ie.resolve():(n=>t.put({targetId:0,path:Vi(n),sequenceNumber:e.highestListenSequenceNumber}))(s)))}).next(()=>ie.waitFor(i))})}Qs(e,t){e.createObjectStore("collectionParents",{keyPath:Ji});const n=t.store("collectionParents"),i=new qr,r=e=>{if(i.add(e)){const t=e.lastSegment(),i=e.popLast();return n.put({collectionId:t,parent:Vi(i)})}};return t.store("remoteDocuments").Z({X:!0},(e,t)=>{const n=new B(e);return r(n.popLast())}).next(()=>t.store("documentMutations").Z({X:!0},([e,t,n],i)=>{const s=Hi(t);return r(s.popLast())}))}js(e){const t=e.store("targets");return t.Z((e,n)=>{const i=Ar(n),r=Cr(this.It,i);return t.put(r)})}Ws(e,t){const n=t.store("remoteDocuments"),i=[];return n.Z((e,n)=>{const r=t.store("remoteDocumentsV14"),s=(o=n,o.document?new X(B.fromString(o.document.name).popFirst(5)):o.noDocument?X.fromSegments(o.noDocument.path):o.unknownDocument?X.fromSegments(o.unknownDocument.path):b()).path.toArray();var o;
/**
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
 */const a={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};i.push(r.put(a))}).next(()=>ie.waitFor(i))}zs(e,t){const n=t.store("mutations"),i=_s(this.It),r=new Bs(Ws.Bs,this.It.re);return n.W().next(e=>{const n=new Map;return e.forEach(e=>{var t;let i=null!==(t=n.get(e.userId))&&void 0!==t?t:Yn();_r(this.It,e).keys().forEach(e=>i=i.add(e)),n.set(e.userId,i)}),ie.forEach(n,(e,n)=>{const s=new c(n),o=Nr.oe(this.It,s),a=r.getIndexManager(s),l=os.oe(s,this.It,a,r.referenceDelegate);return new Ls(i,l,o,a).recalculateAndSaveOverlaysForDocumentKeys(new dr(t,ge.at),e).next()})})}}function Us(e){e.createObjectStore("targetDocuments",{keyPath:Qi}).createIndex("documentTargetsIndex",Zi,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Ki,{unique:!0}),e.createObjectStore("targetGlobal")}const Ys="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Gs{constructor(e,t,n,i,r,s,o,a,l,c,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Hs=r,this.window=s,this.document=o,this.Js=l,this.Ys=c,this.Xs=h,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=e=>Promise.resolve(),!Gs.C())throw new S(k.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new xs(this,i),this.ii=t+"main",this.It=new br(a),this.ri=new se(this.ii,this.Xs,new Xs(this.It)),this.Cs=new ds(this.referenceDelegate,this.It),this.remoteDocumentCache=_s(this.It),this.Ns=new Pr,this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,!1===c&&g("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ui().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new S(k.FAILED_PRECONDITION,Ys);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Cs.getHighestSequenceNumber(e))}).then(e=>{this.Ss=new ge(e,this.Js)}).then(()=>{this.Ds=!0}).catch(e=>(this.ri&&this.ri.close(),Promise.reject(e)))}li(e){return this.si=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ri.L(async t=>{null===t.newVersion&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Hs.enqueueAndForget(async()=>{this.started&&await this.ui()}))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>$s(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(e=>{e||(this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)))})}).next(()=>this.di(e)).next(t=>this.isPrimary&&!t?this._i(e).next(()=>!1):!!t&&this.wi(e).next(()=>!0))).catch(e=>{if(le(e))return p("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return p("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Hs.enqueueRetryable(()=>this.si(e)),this.isPrimary=e})}fi(e){return qs(e).get("owner").next(e=>ie.resolve(this.mi(e)))}gi(e){return $s(e).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const t=fr(e,"clientMetadata");return t.W().next(e=>{const n=this.Ii(e,18e5),i=e.filter(e=>-1===n.indexOf(e));return ie.forEach(i,e=>t.delete(e.clientId)).next(()=>i)})}).catch(()=>[]);if(this.oi)for(const t of e)this.oi.removeItem(this.Ti(t.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ui().then(()=>this.yi()).then(()=>this.hi()))}mi(e){return!!e&&e.ownerId===this.clientId}di(e){return this.Ys?ie.resolve(!0):qs(e).get("owner").next(t=>{if(null!==t&&this.pi(t.leaseTimestampMs,5e3)&&!this.Ei(t.ownerId)){if(this.mi(t)&&this.networkEnabled)return!0;if(!this.mi(t)){if(!t.allowTabSynchronization)throw new S(k.FAILED_PRECONDITION,Ys);return!1}}return!(!this.networkEnabled||!this.inForeground)||$s(e).W().next(e=>void 0===this.Ii(e,5e3).find(e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,i=this.networkEnabled===e.networkEnabled;if(t||n&&i)return!0}return!1}))}).next(e=>(this.isPrimary!==e&&p("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new dr(e,ge.at);return this._i(t).next(()=>this.gi(t))}),this.ri.close(),this.Pi()}Ii(e,t){return e.filter(e=>this.pi(e.updateTimeMs,t)&&!this.Ei(e.clientId))}vi(){return this.runTransaction("getActiveClients","readonly",e=>$s(e).W().next(e=>this.Ii(e,18e5).map(e=>e.clientId)))}get started(){return this.Ds}getMutationQueue(e,t){return os.oe(e,this.It,t,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Kr(e,this.It.re.databaseId)}getDocumentOverlayCache(e){return Nr.oe(this.It,e)}getBundleCache(){return this.Ns}runTransaction(e,t,n){p("IndexedDbPersistence","Starting transaction:",e);const i="readonly"===t?"readonly":"readwrite",r=15===(s=this.Xs)?ur:14===s?hr:13===s?cr:12===s?lr:11===s?ar:void b();var s;let o;return this.ri.runTransaction(e,i,r,i=>(o=new dr(i,this.Ss?this.Ss.next():ge.at),"readwrite-primary"===t?this.fi(o).next(e=>!!e||this.di(o)).next(t=>{if(!t)throw g(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)),new S(k.FAILED_PRECONDITION,ee);return n(o)}).next(e=>this.wi(o).next(()=>e)):this.Vi(o).next(()=>n(o)))).then(e=>(o.raiseOnCommittedEvent(),e))}Vi(e){return qs(e).get("owner").next(e=>{if(null!==e&&this.pi(e.leaseTimestampMs,5e3)&&!this.Ei(e.ownerId)&&!this.mi(e)&&!(this.Ys||this.allowTabSynchronization&&e.allowTabSynchronization))throw new S(k.FAILED_PRECONDITION,Ys)})}wi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return qs(e).put("owner",t)}static C(){return se.C()}_i(e){const t=qs(e);return t.get("owner").next(e=>this.mi(e)?(p("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):ie.resolve())}pi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(g(`Detected an update time that is in the future: ${e} > ${n}`),!1))}ci(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.ti=()=>{this.Hs.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.ui()))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground="visible"===this.document.visibilityState)}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.Zs=()=>{this.Ai(),Object(o["v"])()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(e){var t;try{const n=null!==(null===(t=this.oi)||void 0===t?void 0:t.getItem(this.Ti(e)));return p("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return g("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(e){g("Failed to set zombie client id.",e)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch(e){}}Ti(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function qs(e){return fr(e,"owner")}function $s(e){return fr(e,"clientMetadata")}function Ks(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
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
 */}class Qs{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Si=n,this.Di=i}static Ci(e,t){let n=Yn(),i=Yn();for(const r of t.docChanges)switch(r.type){case 0:n=n.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Qs(e,t.fromCache,n,i)}}
/**
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
 */class Zs{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,n,i){return this.ki(e,t).next(r=>r||this.Mi(e,t,i,n)).next(n=>n||this.Oi(e,t))}ki(e,t){if(Mt(t))return ie.resolve(null);let n=Bt(t);return this.indexManager.getIndexType(e,n).next(i=>0===i?null:(null!==t.limit&&1===i&&(t=Ht(t,null,"F"),n=Bt(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(i=>{const r=Yn(...i);return this.Ni.getDocuments(e,r).next(i=>this.indexManager.getMinOffset(e,n).next(n=>{const s=this.Fi(t,i);return this.$i(t,s,r,n.readTime)?this.ki(e,Ht(t,null,"F")):this.Bi(e,s,t,n)}))})))}Mi(e,t,n,i){return Mt(t)||i.isEqual(V.min())?this.Oi(e,t):this.Ni.getDocuments(e,n).next(r=>{const o=this.Fi(t,r);return this.$i(t,o,n,i)?this.Oi(e,t):(d()<=s["a"].DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ut(t)),this.Bi(e,o,t,K(i,-1)))})}Fi(e,t){let n=new ke(qt(e));return t.forEach((t,i)=>{Yt(e,i)&&(n=n.add(i))}),n}$i(e,t,n,i){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const r="F"===e.limitType?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Oi(e,t){return d()<=s["a"].DEBUG&&p("QueryEngine","Using full collection scan to execute query:",Ut(t)),this.Ni.getDocumentsMatchingQuery(e,t,Z.min())}Bi(e,t,n,i){return this.Ni.getDocumentsMatchingQuery(e,n,i).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}
/**
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
 */class Js{constructor(e,t,n,i){this.persistence=e,this.Li=t,this.It=i,this.Ui=new ye(R),this.qi=new Rn(e=>dt(e),pt),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(n)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ls(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ui))}}function eo(e,t,n,i){return new Js(e,t,n,i)}async function to(e,t){const n=w(e);return await n.persistence.runTransaction("Handle user change","readonly",e=>{let i;return n.mutationQueue.getAllMutationBatches(e).next(r=>(i=r,n.Qi(t),n.mutationQueue.getAllMutationBatches(e))).next(t=>{const r=[],s=[];let o=Yn();for(const e of i){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next(e=>({ji:e,removedBatchIds:r,addedBatchIds:s}))})})}function no(e,t){const n=w(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{const i=t.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,i){const r=n.batch,s=r.keys();let o=ie.resolve();return s.forEach(e=>{o=o.next(()=>i.getEntry(t,e)).next(t=>{const s=n.docVersions.get(e);y(null!==s),t.version.compareTo(s)<0&&(r.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),i.addEntry(t)))})}),o.next(()=>e.mutationQueue.removeMutationBatch(t,r))}(n,e,t,r).next(()=>r.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Yn();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,i))})}function io(e){const t=w(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Cs.getLastRemoteSnapshotVersion(e))}function ro(e,t){const n=w(e),i=t.snapshotVersion;let r=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{const s=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.Ui;const o=[];t.targetChanges.forEach((s,a)=>{const l=r.get(a);if(!l)return;o.push(n.Cs.removeMatchingKeys(e,s.removedDocuments,a).next(()=>n.Cs.addMatchingKeys(e,s.addedDocuments,a)));let c=l.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?c=c.withResumeToken(Ie.EMPTY_BYTE_STRING,V.min()).withLastLimboFreeSnapshotVersion(V.min()):s.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(s.resumeToken,i)),r=r.insert(a,c),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(l,c,s)&&o.push(n.Cs.updateTargetData(e,c))});let a=Fn(),l=Yn();if(t.documentUpdates.forEach(i=>{t.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,i))}),o.push(so(e,s,t.documentUpdates).next(e=>{a=e.Wi,l=e.zi})),!i.isEqual(V.min())){const t=n.Cs.getLastRemoteSnapshotVersion(e).next(t=>n.Cs.setTargetsMetadata(e,e.currentSequenceNumber,i));o.push(t)}return ie.waitFor(o).next(()=>s.apply(e)).next(()=>n.localDocuments.getLocalViewOfDocuments(e,a,l)).next(()=>a)}).then(e=>(n.Ui=r,e))}function so(e,t,n){let i=Yn(),r=Yn();return n.forEach(e=>i=i.add(e)),t.getEntries(e,i).next(e=>{let i=Fn();return n.forEach((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(r=r.add(n)),s.isNoDocument()&&s.version.isEqual(V.min())?(t.removeEntry(n,s.readTime),i=i.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),i=i.insert(n,s)):p("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)}),{Wi:i,zi:r}})}function oo(e,t){const n=w(e);return n.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t)))}function ao(e,t){const n=w(e);return n.persistence.runTransaction("Allocate target","readwrite",e=>{let i;return n.Cs.getTargetData(e,t).next(r=>r?(i=r,ie.resolve(i)):n.Cs.allocateTargetId(e).next(r=>(i=new vr(t,r,0,e.currentSequenceNumber),n.Cs.addTargetData(e,i).next(()=>i))))}).then(e=>{const i=n.Ui.get(e.targetId);return(null===i||e.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(e.targetId,e),n.qi.set(t,e.targetId)),e})}async function lo(e,t,n){const i=w(e),r=i.Ui.get(t),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,e=>i.persistence.referenceDelegate.removeTarget(e,r))}catch(e){if(!le(e))throw e;p("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}i.Ui=i.Ui.remove(t),i.qi.delete(r.target)}function co(e,t,n){const i=w(e);let r=V.min(),s=Yn();return i.persistence.runTransaction("Execute query","readonly",e=>function(e,t,n){const i=w(e),r=i.qi.get(n);return void 0!==r?ie.resolve(i.Ui.get(r)):i.Cs.getTargetData(t,n)}(i,e,Bt(t)).next(t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,i.Cs.getMatchingKeysForTargetId(e,t.targetId).next(e=>{s=e})}).next(()=>i.Li.getDocumentsMatchingQuery(e,t,n?r:V.min(),n?s:Yn())).next(e=>(fo(i,Gt(t),e),{documents:e,Hi:s})))}function ho(e,t){const n=w(e),i=w(n.Cs),r=n.Ui.get(t);return r?Promise.resolve(r.target):n.persistence.runTransaction("Get target data","readonly",e=>i.se(e,t).next(e=>e?e.target:null))}function uo(e,t){const n=w(e),i=n.Ki.get(t)||V.min();return n.persistence.runTransaction("Get new document changes","readonly",e=>n.Gi.getAllFromCollectionGroup(e,t,K(i,-1),Number.MAX_SAFE_INTEGER)).then(e=>(fo(n,t,e),e))}function fo(e,t,n){let i=V.min();n.forEach((e,t)=>{t.readTime.compareTo(i)>0&&(i=t.readTime)}),e.Ki.set(t,i)}async function po(e,t,n,i){const r=w(e);let s=Yn(),o=Fn();for(const c of n){const e=t.Ji(c.metadata.name);c.document&&(s=s.add(e));const n=t.Yi(c);n.setReadTime(t.Xi(c.metadata.readTime)),o=o.insert(e,n)}const a=r.Gi.newChangeBuffer({trackRemovals:!0}),l=await ao(r,function(e){return Bt(Rt(B.fromString("__bundle__/docs/"+e)))}(i));return r.persistence.runTransaction("Apply bundle documents","readwrite",e=>so(e,a,o).next(t=>(a.apply(e),t)).next(t=>r.Cs.removeMatchingKeysForTargetId(e,l.targetId).next(()=>r.Cs.addMatchingKeys(e,s,l.targetId)).next(()=>r.localDocuments.getLocalViewOfDocuments(e,t.Wi,t.zi)).next(()=>t.Wi)))}async function go(e,t,n=Yn()){const i=await ao(e,Bt(Ir(t.bundledQuery))),r=w(e);return r.persistence.runTransaction("Save named query","readwrite",e=>{const s=hi(t.readTime);if(i.snapshotVersion.compareTo(s)>=0)return r.Ns.saveNamedQuery(e,t);const o=i.withResumeToken(Ie.EMPTY_BYTE_STRING,s);return r.Ui=r.Ui.insert(o.targetId,o),r.Cs.updateTargetData(e,o).next(()=>r.Cs.removeMatchingKeysForTargetId(e,i.targetId)).next(()=>r.Cs.addMatchingKeys(e,n,i.targetId)).next(()=>r.Ns.saveNamedQuery(e,t))})}function mo(e,t){return`firestore_clients_${e}_${t}`}function vo(e,t,n){let i=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(i+="_"+t.uid),i}function bo(e,t){return`firestore_targets_${e}_${t}`}class yo{constructor(e,t,n,i){this.user=e,this.batchId=t,this.state=n,this.error=i}static Zi(e,t,n){const i=JSON.parse(n);let r,s="object"==typeof i&&-1!==["pending","acknowledged","rejected"].indexOf(i.state)&&(void 0===i.error||"object"==typeof i.error);return s&&i.error&&(s="string"==typeof i.error.message&&"string"==typeof i.error.code,s&&(r=new S(i.error.code,i.error.message))),s?new yo(e,t,i.state,r):(g("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class xo{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Zi(e,t){const n=JSON.parse(t);let i,r="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return r&&n.error&&(r="string"==typeof n.error.message&&"string"==typeof n.error.code,r&&(i=new S(n.error.code,n.error.message))),r?new xo(e,n.state,i):(g("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class wo{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Zi(e,t){const n=JSON.parse(t);let i="object"==typeof n&&n.activeTargetIds instanceof Array,r=qn();for(let s=0;i&&s<n.activeTargetIds.length;++s)i=Ve(n.activeTargetIds[s]),r=r.add(n.activeTargetIds[s]);return i?new wo(e,r):(g("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class ko{constructor(e,t){this.clientId=e,this.onlineState=t}static Zi(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new ko(t.clientId,t.onlineState):(g("SharedClientState","Failed to parse online state: "+e),null)}}class So{constructor(){this.activeTargetIds=qn()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class _o{constructor(e,t,n,i,r){this.window=e,this.Hs=t,this.persistenceKey=n,this.sr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ir=this.rr.bind(this),this.ur=new ye(R),this.started=!1,this.cr=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=r,this.ar=mo(this.persistenceKey,this.sr),this.hr=function(e){return"firestore_sequence_number_"+e}
/**
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
 */(this.persistenceKey),this.ur=this.ur.insert(this.sr,new So),this.lr=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.dr=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this._r=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.wr=function(e){return"firestore_online_state_"+e}(this.persistenceKey),this.mr=function(e){return"firestore_bundle_loaded_v2_"+e}(this.persistenceKey),this.window.addEventListener("storage",this.ir)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.vi();for(const n of e){if(n===this.sr)continue;const e=this.getItem(mo(this.persistenceKey,n));if(e){const t=wo.Zi(n,e);t&&(this.ur=this.ur.insert(t.clientId,t))}}this.gr();const t=this.storage.getItem(this.wr);if(t){const e=this.yr(t);e&&this.pr(e)}for(const n of this.cr)this.rr(n);this.cr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.hr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ir(this.ur)}isActiveQueryTarget(e){let t=!1;return this.ur.forEach((n,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Tr(e,"pending")}updateMutationState(e,t,n){this.Tr(e,t,n),this.Er(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(bo(this.persistenceKey,e));if(n){const i=xo.Zi(e,n);i&&(t=i.state)}}return this.Ar.er(e),this.gr(),t}removeLocalQueryTarget(e){this.Ar.nr(e),this.gr()}isLocalQueryTarget(e){return this.Ar.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(bo(this.persistenceKey,e))}updateQueryState(e,t,n){this.Rr(e,t,n)}handleUserChange(e,t,n){t.forEach(e=>{this.Er(e)}),this.currentUser=e,n.forEach(e=>{this.addPendingMutation(e)})}setOnlineState(e){this.br(e)}notifyBundleLoaded(e){this.Pr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ir),this.removeItem(this.ar),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return p("SharedClientState","READ",e,t),t}setItem(e,t){p("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){p("SharedClientState","REMOVE",e),this.storage.removeItem(e)}rr(e){const t=e;if(t.storageArea===this.storage){if(p("SharedClientState","EVENT",t.key,t.newValue),t.key===this.ar)return void g("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Hs.enqueueRetryable(async()=>{if(this.started){if(null!==t.key)if(this.lr.test(t.key)){if(null==t.newValue){const e=this.vr(t.key);return this.Vr(e,null)}{const e=this.Sr(t.key,t.newValue);if(e)return this.Vr(e.clientId,e)}}else if(this.dr.test(t.key)){if(null!==t.newValue){const e=this.Dr(t.key,t.newValue);if(e)return this.Cr(e)}}else if(this._r.test(t.key)){if(null!==t.newValue){const e=this.Nr(t.key,t.newValue);if(e)return this.kr(e)}}else if(t.key===this.wr){if(null!==t.newValue){const e=this.yr(t.newValue);if(e)return this.pr(e)}}else if(t.key===this.hr){const e=function(e){let t=ge.at;if(null!=e)try{const n=JSON.parse(e);y("number"==typeof n),t=n}catch(e){g("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==ge.at&&this.sequenceNumberHandler(e)}else if(t.key===this.mr){const e=this.Mr(t.newValue);await Promise.all(e.map(e=>this.syncEngine.Or(e)))}}else this.cr.push(t)})}}get Ar(){return this.ur.get(this.sr)}gr(){this.setItem(this.ar,this.Ar.tr())}Tr(e,t,n){const i=new yo(this.currentUser,e,t,n),r=vo(this.persistenceKey,this.currentUser,e);this.setItem(r,i.tr())}Er(e){const t=vo(this.persistenceKey,this.currentUser,e);this.removeItem(t)}br(e){const t={clientId:this.sr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(t))}Rr(e,t,n){const i=bo(this.persistenceKey,e),r=new xo(e,t,n);this.setItem(i,r.tr())}Pr(e){const t=JSON.stringify(Array.from(e));this.setItem(this.mr,t)}vr(e){const t=this.lr.exec(e);return t?t[1]:null}Sr(e,t){const n=this.vr(e);return wo.Zi(n,t)}Dr(e,t){const n=this.dr.exec(e),i=Number(n[1]),r=void 0!==n[2]?n[2]:null;return yo.Zi(new c(r),i,t)}Nr(e,t){const n=this._r.exec(e),i=Number(n[1]);return xo.Zi(i,t)}yr(e){return ko.Zi(e)}Mr(e){return JSON.parse(e)}async Cr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Fr(e.batchId,e.state,e.error);p("SharedClientState","Ignoring mutation for non-active user "+e.user.uid)}kr(e){return this.syncEngine.$r(e.targetId,e.state,e.error)}Vr(e,t){const n=t?this.ur.insert(e,t):this.ur.remove(e),i=this.Ir(this.ur),r=this.Ir(n),s=[],o=[];return r.forEach(e=>{i.has(e)||s.push(e)}),i.forEach(e=>{r.has(e)||o.push(e)}),this.syncEngine.Br(s,o).then(()=>{this.ur=n})}pr(e){this.ur.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ir(e){let t=qn();return e.forEach((e,n)=>{t=t.unionWith(n.activeTargetIds)}),t}}class Ao{constructor(){this.Lr=new So,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,t,n){this.Ur[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new So,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
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
 */class Co{qr(e){}shutdown(){}}
/**
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
 */class Io{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){p("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){p("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
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
 */const To={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
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
 */class Eo{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}
/**
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
 */class Oo extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,t,n,i,r){const s=this.ao(e,t);p("RestConnection","Sending: ",s,n);const o={};return this.ho(o,i,r),this.lo(e,s,o,n).then(e=>(p("RestConnection","Received: ",e),e),t=>{throw m("RestConnection",e+" failed with error: ",t,"url: ",s,"request:",n),t})}fo(e,t,n,i,r,s){return this.co(e,t,n,i,r)}ho(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+h,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}ao(e,t){const n=To[e];return`${this.oo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,t,n,i){return new Promise((r,s)=>{const o=new a["g"];o.listenOnce(a["c"].COMPLETE,()=>{try{switch(o.getLastErrorCode()){case a["a"].NO_ERROR:const t=o.getResponseJson();p("Connection","XHR received:",JSON.stringify(t)),r(t);break;case a["a"].TIMEOUT:p("Connection",'RPC "'+e+'" timed out'),s(new S(k.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=o.getStatus();if(p("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(t)>=0?t:k.UNKNOWN}(e.status);s(new S(t,e.message))}else s(new S(k.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new S(k.UNAVAILABLE,"Connection failed."));break;default:b()}}finally{p("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);o.send(t,"POST",l,n,15)})}_o(e,t,n){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=Object(a["h"])(),s=Object(a["i"])(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new a["d"]({})),this.ho(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;const l=i.join("");p("Connection","Creating WebChannel: "+l,o);const c=r.createWebChannel(l,o);let h=!1,u=!1;const d=new Eo({Hr:e=>{u?p("Connection","Not sending because WebChannel is closed:",e):(h||(p("Connection","Opening WebChannel transport."),c.open(),h=!0),p("Connection","WebChannel sending:",e),c.send(e))},Jr:()=>c.close()}),f=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return f(c,a["f"].EventType.OPEN,()=>{u||p("Connection","WebChannel transport opened.")}),f(c,a["f"].EventType.CLOSE,()=>{u||(u=!0,p("Connection","WebChannel transport closed"),d.io())}),f(c,a["f"].EventType.ERROR,e=>{u||(u=!0,m("Connection","WebChannel transport errored:",e),d.io(new S(k.UNAVAILABLE,"The operation could not be completed")))}),f(c,a["f"].EventType.MESSAGE,e=>{var t;if(!u){const n=e.data[0];y(!!n);const i=n,r=i.error||(null===(t=i[0])||void 0===t?void 0:t.error);if(r){p("Connection","WebChannel received error:",r);const e=r.status;let t=function(e){const t=Pn[e];if(void 0!==t)return Nn(t)}(e),n=r.message;void 0===t&&(t=k.INTERNAL,n="Unknown error status: "+e+" with message "+r.message),u=!0,d.io(new S(t,n)),c.close()}else p("Connection","WebChannel received:",n),d.ro(n)}}),f(s,a["b"].STAT_EVENT,e=>{e.stat===a["e"].PROXY?p("Connection","Detected buffering proxy"):e.stat===a["e"].NOPROXY&&p("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}
/**
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
 */
/**
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
 */function Po(){return"undefined"!=typeof window?window:null}function Lo(){return"undefined"!=typeof document?document:null}
/**
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
 */function Do(e){return new oi(e,!0)}class No{constructor(e,t,n=1e3,i=1.5,r=6e4){this.Hs=e,this.timerId=t,this.wo=n,this.mo=i,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const t=Math.floor(this.po+this.Ro()),n=Math.max(0,Date.now()-this.To),i=Math.max(0,t-n);i>0&&p("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){null!==this.Io&&(this.Io.skipDelay(),this.Io=null)}cancel(){null!==this.Io&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}
/**
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
 */class Ro{constructor(e,t,n,i,r,s,o,a){this.Hs=e,this.Po=n,this.vo=i,this.Vo=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new No(e,t)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,4!==e?this.xo.reset():t&&t.code===k.RESOURCE_EXHAUSTED?(g(t.toString()),g("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):t&&t.code===k.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.So===t&&this.Go(e,n)},t=>{e(()=>{const e=new S(k.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Qo(e)})})}Go(e,t){const n=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr(()=>{n(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(e=>{n(()=>this.Qo(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}Mo(){this.state=5,this.xo.Ao(async()=>{this.state=0,this.start()})}Qo(e){return p("PersistentStream","close with error: "+e),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget(()=>this.So===e?t():(p("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Mo extends Ro{constructor(e,t,n,i,r,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,s),this.It=r}jo(e,t){return this.Vo._o("Listen",e,t)}onMessage(e){this.xo.reset();const t=ki(this.It,e),n=function(e){if(!("targetChange"in e))return V.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?V.min():t.readTime?hi(t.readTime):V.min()}(e);return this.listener.Wo(t,n)}zo(e){const t={};t.database=vi(this.It),t.addTarget=function(e,t){let n;const i=t.target;return n=gt(i)?{documents:Ci(e,i)}:{query:Ii(e,i)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=li(e,t.resumeToken):t.snapshotVersion.compareTo(V.min())>0&&(n.readTime=ai(e,t.snapshotVersion.toTimestamp())),n}(this.It,e);const n=Ei(this.It,e);n&&(t.labels=n),this.Bo(t)}Ho(e){const t={};t.database=vi(this.It),t.removeTarget=e,this.Bo(t)}}class Fo extends Ro{constructor(e,t,n,i,r,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,s),this.It=r,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,t){return this.Vo._o("Write",e,t)}onMessage(e){if(y(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const t=Ai(e.writeResults,e.commitTime),n=hi(e.commitTime);return this.listener.Zo(n,t)}return y(!e.writeResults||0===e.writeResults.length),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=vi(this.It),this.Bo(e)}Xo(e){const t={streamToken:this.lastStreamToken,writes:e.map(e=>Si(this.It,e))};this.Bo(t)}}
/**
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
 */class jo extends class{}{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.Vo=n,this.It=i,this.nu=!1}su(){if(this.nu)throw new S(k.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,t,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.Vo.co(e,t,n,i,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new S(k.UNKNOWN,e.toString())})}fo(e,t,n,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.Vo.fo(e,t,n,r,s,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new S(k.UNKNOWN,e.toString())})}terminate(){this.nu=!0}}class Vo{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au("Connection failed 1 times. Most recent error: "+e.toString()),this.cu("Offline")))}set(e){this.lu(),this.iu=0,"Online"===e&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(g(t),this.ou=!1):p("OnlineStateTracker",t)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}
/**
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
 */class zo{constructor(e,t,n,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.qr(e=>{n.enqueueAndForget(async()=>{$o(this)&&(p("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=w(e);t._u.add(4),await Ho(t),t.gu.set("Unknown"),t._u.delete(4),await Bo(t)}(this))})}),this.gu=new Vo(n,i)}}async function Bo(e){if($o(e))for(const t of e.wu)await t(!0)}async function Ho(e){for(const t of e.wu)await t(!1)}function Wo(e,t){const n=w(e);n.du.has(t.targetId)||(n.du.set(t.targetId,t),qo(n)?Go(n):fa(n).ko()&&Uo(n,t))}function Xo(e,t){const n=w(e),i=fa(n);n.du.delete(t),i.ko()&&Yo(n,t),0===n.du.size&&(i.ko()?i.Fo():$o(n)&&n.gu.set("Unknown"))}function Uo(e,t){e.yu.Ot(t.targetId),fa(e).zo(t)}function Yo(e,t){e.yu.Ot(t),fa(e).Ho(t)}function Go(e){e.yu=new ti({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),se:t=>e.du.get(t)||null}),fa(e).start(),e.gu.uu()}function qo(e){return $o(e)&&!fa(e).No()&&e.du.size>0}function $o(e){return 0===w(e)._u.size}function Ko(e){e.yu=void 0}async function Qo(e){e.du.forEach((t,n)=>{Uo(e,t)})}async function Zo(e,t){Ko(e),qo(e)?(e.gu.hu(t),Go(e)):e.gu.set("Unknown")}async function Jo(e,t,n){if(e.gu.set("Online"),t instanceof Jn&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const i of t.targetIds)e.du.has(i)&&(await e.remoteSyncer.rejectListen(i,n),e.du.delete(i),e.yu.removeTarget(i))}(e,t)}catch(n){p("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await ea(e,n)}else if(t instanceof Qn?e.yu.Gt(t):t instanceof Zn?e.yu.Yt(t):e.yu.Wt(t),!n.isEqual(V.min()))try{const t=await io(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.yu.te(t);return n.targetChanges.forEach((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const r=e.du.get(i);r&&e.du.set(i,r.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach(t=>{const n=e.du.get(t);if(!n)return;e.du.set(t,n.withResumeToken(Ie.EMPTY_BYTE_STRING,n.snapshotVersion)),Yo(e,t);const i=new vr(n.target,t,1,n.sequenceNumber);Uo(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){p("RemoteStore","Failed to raise snapshot:",t),await ea(e,t)}}async function ea(e,t,n){if(!le(t))throw t;e._u.add(1),await Ho(e),e.gu.set("Offline"),n||(n=()=>io(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{p("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await Bo(e)})}function ta(e,t){return t().catch(n=>ea(e,n,t))}async function na(e){const t=w(e),n=pa(t);let i=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;ia(t);)try{const e=await oo(t.localStore,i);if(null===e){0===t.fu.length&&n.Fo();break}i=e.batchId,ra(t,e)}catch(e){await ea(t,e)}sa(t)&&oa(t)}function ia(e){return $o(e)&&e.fu.length<10}function ra(e,t){e.fu.push(t);const n=pa(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function sa(e){return $o(e)&&!pa(e).No()&&e.fu.length>0}function oa(e){pa(e).start()}async function aa(e){pa(e).eu()}async function la(e){const t=pa(e);for(const n of e.fu)t.Xo(n.mutations)}async function ca(e,t,n){const i=e.fu.shift(),r=gr.from(i,t,n);await ta(e,()=>e.remoteSyncer.applySuccessfulWrite(r)),await na(e)}async function ha(e,t){t&&pa(e).Yo&&await async function(e,t){if(n=t.code,Dn(n)&&n!==k.ABORTED){const n=e.fu.shift();pa(e).Oo(),await ta(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await na(e)}var n}(e,t),sa(e)&&oa(e)}async function ua(e,t){const n=w(e);n.asyncQueue.verifyOperationInProgress(),p("RemoteStore","RemoteStore received new credentials");const i=$o(n);n._u.add(3),await Ho(n),i&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await Bo(n)}async function da(e,t){const n=w(e);t?(n._u.delete(2),await Bo(n)):t||(n._u.add(2),await Ho(n),n.gu.set("Unknown"))}function fa(e){return e.pu||(e.pu=function(e,t,n){const i=w(e);return i.su(),new Mo(t,i.Vo,i.authCredentials,i.appCheckCredentials,i.It,n)
/**
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
 */}(e.datastore,e.asyncQueue,{Yr:Qo.bind(null,e),Zr:Zo.bind(null,e),Wo:Jo.bind(null,e)}),e.wu.push(async t=>{t?(e.pu.Oo(),qo(e)?Go(e):e.gu.set("Unknown")):(await e.pu.stop(),Ko(e))})),e.pu}function pa(e){return e.Iu||(e.Iu=function(e,t,n){const i=w(e);return i.su(),new Fo(t,i.Vo,i.authCredentials,i.appCheckCredentials,i.It,n)}(e.datastore,e.asyncQueue,{Yr:aa.bind(null,e),Zr:ha.bind(null,e),tu:la.bind(null,e),Zo:ca.bind(null,e)}),e.wu.push(async t=>{t?(e.Iu.Oo(),await na(e)):(await e.Iu.stop(),e.fu.length>0&&(p("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))})),e.Iu
/**
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
 */}class ga{constructor(e,t,n,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new _,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,n,i,r){const s=Date.now()+n,o=new ga(e,t,s,i,r);return o.start(n),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new S(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ma(e,t){if(g("AsyncQueue",`${t}: ${e}`),le(e))return new S(k.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
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
 */class va{constructor(e){this.comparator=e?(t,n)=>e(t,n)||X.comparator(t.key,n.key):(e,t)=>X.comparator(e.key,t.key),this.keyedMap=Vn(),this.sortedSet=new ye(this.comparator)}static emptySet(e){return new va(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof va))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(!e.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new va;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
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
 */class ba{constructor(){this.Tu=new ye(X.comparator)}track(e){const t=e.doc.key,n=this.Tu.get(t);n?0!==e.type&&3===n.type?this.Tu=this.Tu.insert(t,e):3===e.type&&1!==n.type?this.Tu=this.Tu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Tu=this.Tu.remove(t):1===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):b():this.Tu=this.Tu.insert(t,e)}Eu(){const e=[];return this.Tu.inorderTraversal((t,n)=>{e.push(n)}),e}}class ya{constructor(e,t,n,i,r,s,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=r,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,i){const r=[];return t.forEach(e=>{r.push({type:0,doc:e})}),new ya(e,t,va.emptySet(t),r,n,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wt(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==n[i].type||!t[i].doc.isEqual(n[i].doc))return!1;return!0}}
/**
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
 */class xa{constructor(){this.Au=void 0,this.listeners=[]}}class wa{constructor(){this.queries=new Rn(e=>Xt(e),Wt),this.onlineState="Unknown",this.Ru=new Set}}async function ka(e,t){const n=w(e),i=t.query;let r=!1,s=n.queries.get(i);if(s||(r=!0,s=new xa),r)try{s.Au=await n.onListen(i)}catch(e){const n=ma(e,`Initialization of query '${Ut(t.query)}' failed`);return void t.onError(n)}n.queries.set(i,s),s.listeners.push(t),t.bu(n.onlineState),s.Au&&t.Pu(s.Au)&&Ca(n)}async function Sa(e,t){const n=w(e),i=t.query;let r=!1;const s=n.queries.get(i);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),r=0===s.listeners.length)}if(r)return n.queries.delete(i),n.onUnlisten(i)}function _a(e,t){const n=w(e);let i=!1;for(const r of t){const e=r.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.Pu(r)&&(i=!0);t.Au=r}}i&&Ca(n)}function Aa(e,t,n){const i=w(e),r=i.queries.get(t);if(r)for(const s of r.listeners)s.onError(n);i.queries.delete(t)}function Ca(e){e.Ru.forEach(e=>{e.next()})}class Ia{constructor(e,t,n){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}Pu(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new ya(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),t=!0):this.Cu(e,this.onlineState)&&(this.xu(e),t=!0),this.Su=e,t}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Nu||!n)&&(!e.docs.isEmpty()||"Offline"===t)}Du(e){if(e.docChanges.length>0)return!0;const t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}xu(e){e=ya.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Vu=!0,this.vu.next(e)}}
/**
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
 */class Ta{constructor(e,t){this.payload=e,this.byteLength=t}ku(){return"metadata"in this.payload}}
/**
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
 */class Ea{constructor(e){this.It=e}Ji(e){return pi(this.It,e)}Yi(e){return e.metadata.exists?xi(this.It,e.document,!1):ct.newNoDocument(this.Ji(e.metadata.name),this.Xi(e.metadata.readTime))}Xi(e){return hi(e)}}class Oa{constructor(e,t,n){this.Mu=e,this.localStore=t,this.It=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Pa(e)}Ou(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.payload.namedQuery)this.queries.push(e.payload.namedQuery);else if(e.payload.documentMetadata){this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++t;const n=B.fromString(e.payload.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Fu(e){const t=new Map,n=new Ea(this.It);for(const i of e)if(i.metadata.queries){const e=n.Ji(i.metadata.name);for(const n of i.metadata.queries){const i=(t.get(n)||Yn()).add(e);t.set(n,i)}}return t}async complete(){const e=await po(this.localStore,new Ea(this.It),this.documents,this.Mu.id),t=this.Fu(this.documents);for(const n of this.queries)await go(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",{progress:this.progress,$u:this.collectionGroups,Bu:e}}}function Pa(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
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
 */class La{constructor(e){this.key=e}}class Da{constructor(e){this.key=e}}class Na{constructor(e,t){this.query=e,this.Lu=t,this.Uu=null,this.current=!1,this.qu=Yn(),this.mutatedKeys=Yn(),this.Ku=qt(e),this.Gu=new va(this.Ku)}get Qu(){return this.Lu}ju(e,t){const n=t?t.Wu:new ba,i=t?t.Gu:this.Gu;let r=t?t.mutatedKeys:this.mutatedKeys,s=i,o=!1;const a="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,l="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((e,t)=>{const c=i.get(e),h=Yt(this.query,t)?t:null,u=!!c&&this.mutatedKeys.has(c.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;c&&h?c.data.isEqual(h.data)?u!==d&&(n.track({type:3,doc:h}),f=!0):this.zu(c,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.Ku(h,a)>0||l&&this.Ku(h,l)<0)&&(o=!0)):!c&&h?(n.track({type:0,doc:h}),f=!0):c&&!h&&(n.track({type:1,doc:c}),f=!0,(a||l)&&(o=!0)),f&&(h?(s=s.add(h),r=d?r.add(e):r.delete(e)):(s=s.delete(e),r=r.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),r=r.delete(e.key),n.track({type:1,doc:e})}return{Gu:s,Wu:n,$i:o,mutatedKeys:r}}zu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const r=e.Wu.Eu();r.sort((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return b()}};return n(e)-n(t)}
/**
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
 */(e.type,t.type)||this.Ku(e.doc,t.doc)),this.Hu(n);const s=t?this.Ju():[],o=0===this.qu.size&&this.current?1:0,a=o!==this.Uu;return this.Uu=o,0!==r.length||a?{snapshot:new ya(this.query,e.Gu,i,r,e.mutatedKeys,0===o,a,!1),Yu:s}:{Yu:s}}bu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new ba,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(e=>this.Lu=this.Lu.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Lu=this.Lu.delete(e)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.qu;this.qu=Yn(),this.Gu.forEach(e=>{this.Xu(e.key)&&(this.qu=this.qu.add(e.key))});const t=[];return e.forEach(e=>{this.qu.has(e)||t.push(new Da(e))}),this.qu.forEach(n=>{e.has(n)||t.push(new La(n))}),t}Zu(e){this.Lu=e.Hi,this.qu=Yn();const t=this.ju(e.documents);return this.applyChanges(t,!0)}tc(){return ya.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,0===this.Uu)}}class Ra{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Ma{constructor(e){this.key=e,this.ec=!1}}class Fa{constructor(e,t,n,i,r,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.nc={},this.sc=new Rn(e=>Xt(e),Wt),this.ic=new Map,this.rc=new Set,this.oc=new ye(X.comparator),this.uc=new Map,this.cc=new Rs,this.ac={},this.hc=new Map,this.lc=us.vn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return!0===this.fc}}async function ja(e,t){const n=fl(e);let i,r;const s=n.sc.get(t);if(s)i=s.targetId,n.sharedClientState.addLocalQueryTarget(i),r=s.view.tc();else{const e=await ao(n.localStore,Bt(t));n.isPrimaryClient&&Wo(n.remoteStore,e);const s=n.sharedClientState.addLocalQueryTarget(e.targetId);i=e.targetId,r=await Va(n,t,i,"current"===s)}return r}async function Va(e,t,n,i){e.dc=(t,n,i)=>async function(e,t,n,i){let r=t.view.ju(n);r.$i&&(r=await co(e.localStore,t.query,!1).then(({documents:e})=>t.view.ju(e,r)));const s=i&&i.targetChanges.get(t.targetId),o=t.view.applyChanges(r,e.isPrimaryClient,s);return Za(e,t.targetId,o.Yu),o.snapshot}(e,t,n,i);const r=await co(e.localStore,t,!0),s=new Na(t,r.Hi),o=s.ju(r.documents),a=Kn.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==e.onlineState),l=s.applyChanges(o,e.isPrimaryClient,a);Za(e,n,l.Yu);const c=new Ra(t,n,s);return e.sc.set(t,c),e.ic.has(n)?e.ic.get(n).push(t):e.ic.set(n,[t]),l.snapshot}async function za(e,t){const n=w(e),i=n.sc.get(t),r=n.ic.get(i.targetId);if(r.length>1)return n.ic.set(i.targetId,r.filter(e=>!Wt(e,t))),void n.sc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await lo(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),Xo(n.remoteStore,i.targetId),Ka(n,i.targetId)}).catch(ne)):(Ka(n,i.targetId),await lo(n.localStore,i.targetId,!0))}async function Ba(e,t,n){const i=pl(e);try{const e=await function(e,t){const n=w(e),i=j.now(),r=t.reduce((e,t)=>e.add(t.key),Yn());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",e=>{let a=Fn(),l=Yn();return n.Gi.getEntries(e,r).next(e=>{a=e,a.forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>n.localDocuments.getOverlayedDocuments(e,a)).next(r=>{s=r;const o=[];for(const e of t){const t=wn(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new _n(e.key,t,lt(t.value.mapValue),gn.exists(!0)))}return n.mutationQueue.addMutationBatch(e,i,o,t)}).next(t=>{o=t;const i=t.applyToLocalDocumentSet(s,l);return n.documentOverlayCache.saveOverlays(e,t.batchId,i)})}).then(()=>({batchId:o.batchId,changes:zn(s)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let i=e.ac[e.currentUser.toKey()];i||(i=new ye(R)),i=i.insert(t,n),e.ac[e.currentUser.toKey()]=i}(i,e.batchId,n),await tl(i,e.changes),await na(i.remoteStore)}catch(e){const t=ma(e,"Failed to persist write");n.reject(t)}}async function Ha(e,t){const n=w(e);try{const e=await ro(n.localStore,t);t.targetChanges.forEach((e,t)=>{const i=n.uc.get(t);i&&(y(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?i.ec=!0:e.modifiedDocuments.size>0?y(i.ec):e.removedDocuments.size>0&&(y(i.ec),i.ec=!1))}),await tl(n,e,t)}catch(e){await ne(e)}}function Wa(e,t,n){const i=w(e);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const e=[];i.sc.forEach((n,i)=>{const r=i.view.bu(t);r.snapshot&&e.push(r.snapshot)}),function(e,t){const n=w(e);n.onlineState=t;let i=!1;n.queries.forEach((e,n)=>{for(const r of n.listeners)r.bu(t)&&(i=!0)}),i&&Ca(n)}(i.eventManager,t),e.length&&i.nc.Wo(e),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function Xa(e,t,n){const i=w(e);i.sharedClientState.updateQueryState(t,"rejected",n);const r=i.uc.get(t),s=r&&r.key;if(s){let e=new ye(X.comparator);e=e.insert(s,ct.newNoDocument(s,V.min()));const n=Yn().add(s),r=new $n(V.min(),new Map,new ke(R),e,n);await Ha(i,r),i.oc=i.oc.remove(s),i.uc.delete(t),el(i)}else await lo(i.localStore,t,!1).then(()=>Ka(i,t,n)).catch(ne)}async function Ua(e,t){const n=w(e),i=t.batch.batchId;try{const e=await no(n.localStore,t);$a(n,i,null),qa(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await tl(n,e)}catch(e){await ne(e)}}async function Ya(e,t,n){const i=w(e);try{const e=await function(e,t){const n=w(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let i;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(y(null!==t),i=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,i)).next(()=>n.localDocuments.getDocuments(e,i))})}(i.localStore,t);$a(i,t,n),qa(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await tl(i,e)}catch(n){await ne(n)}}async function Ga(e,t){const n=w(e);$o(n.remoteStore)||p("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=w(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",e=>t.mutationQueue.getHighestUnacknowledgedBatchId(e))}(n.localStore);if(-1===e)return void t.resolve();const i=n.hc.get(e)||[];i.push(t),n.hc.set(e,i)}catch(e){const n=ma(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}function qa(e,t){(e.hc.get(t)||[]).forEach(e=>{e.resolve()}),e.hc.delete(t)}function $a(e,t,n){const i=w(e);let r=i.ac[i.currentUser.toKey()];if(r){const e=r.get(t);e&&(n?e.reject(n):e.resolve(),r=r.remove(t)),i.ac[i.currentUser.toKey()]=r}}function Ka(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const i of e.ic.get(t))e.sc.delete(i),n&&e.nc._c(i,n);e.ic.delete(t),e.isPrimaryClient&&e.cc.ls(t).forEach(t=>{e.cc.containsKey(t)||Qa(e,t)})}function Qa(e,t){e.rc.delete(t.path.canonicalString());const n=e.oc.get(t);null!==n&&(Xo(e.remoteStore,n),e.oc=e.oc.remove(t),e.uc.delete(n),el(e))}function Za(e,t,n){for(const i of n)i instanceof La?(e.cc.addReference(i.key,t),Ja(e,i)):i instanceof Da?(p("SyncEngine","Document no longer in limbo: "+i.key),e.cc.removeReference(i.key,t),e.cc.containsKey(i.key)||Qa(e,i.key)):b()}function Ja(e,t){const n=t.key,i=n.path.canonicalString();e.oc.get(n)||e.rc.has(i)||(p("SyncEngine","New document in limbo: "+n),e.rc.add(i),el(e))}function el(e){for(;e.rc.size>0&&e.oc.size<e.maxConcurrentLimboResolutions;){const t=e.rc.values().next().value;e.rc.delete(t);const n=new X(B.fromString(t)),i=e.lc.next();e.uc.set(i,new Ma(n)),e.oc=e.oc.insert(n,i),Wo(e.remoteStore,new vr(Bt(Rt(n.path)),i,2,ge.at))}}async function tl(e,t,n){const i=w(e),r=[],s=[],o=[];i.sc.isEmpty()||(i.sc.forEach((e,a)=>{o.push(i.dc(a,t,n).then(e=>{if(e){i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),r.push(e);const t=Qs.Ci(a.targetId,e);s.push(t)}}))}),await Promise.all(o),i.nc.Wo(r),await async function(e,t){const n=w(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>ie.forEach(t,t=>ie.forEach(t.Si,i=>n.persistence.referenceDelegate.addReference(e,t.targetId,i)).next(()=>ie.forEach(t.Di,i=>n.persistence.referenceDelegate.removeReference(e,t.targetId,i)))))}catch(e){if(!le(e))throw e;p("LocalStore","Failed to update sequence numbers: "+e)}for(const i of t){const e=i.targetId;if(!i.fromCache){const t=n.Ui.get(e),i=t.snapshotVersion,r=t.withLastLimboFreeSnapshotVersion(i);n.Ui=n.Ui.insert(e,r)}}}(i.localStore,s))}async function nl(e,t){const n=w(e);if(!n.currentUser.isEqual(t)){p("SyncEngine","User change. New user:",t.toKey());const e=await to(n.localStore,t);n.currentUser=t,function(e,t){e.hc.forEach(e=>{e.forEach(e=>{e.reject(new S(k.CANCELLED,t))})}),e.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await tl(n,e.ji)}}function il(e,t){const n=w(e),i=n.uc.get(t);if(i&&i.ec)return Yn().add(i.key);{let e=Yn();const i=n.ic.get(t);if(!i)return e;for(const t of i){const i=n.sc.get(t);e=e.unionWith(i.view.Qu)}return e}}async function rl(e,t){const n=w(e),i=await co(n.localStore,t.query,!0),r=t.view.Zu(i);return n.isPrimaryClient&&Za(n,t.targetId,r.Yu),r}async function sl(e,t){const n=w(e);return uo(n.localStore,t).then(e=>tl(n,e))}async function ol(e,t,n,i){const r=w(e),s=await function(e,t){const n=w(e),i=w(n.mutationQueue);return n.persistence.runTransaction("Lookup mutation documents","readonly",e=>i.Tn(e,t).next(t=>t?n.localDocuments.getDocuments(e,t):ie.resolve(null)))}(r.localStore,t);null!==s?("pending"===n?await na(r.remoteStore):"acknowledged"===n||"rejected"===n?($a(r,t,i||null),qa(r,t),function(e,t){w(w(e).mutationQueue).An(t)}(r.localStore,t)):b(),await tl(r,s)):p("SyncEngine","Cannot apply mutation batch with id: "+t)}async function al(e,t){const n=w(e);if(fl(n),pl(n),!0===t&&!0!==n.fc){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await ll(n,e.toArray());n.fc=!0,await da(n.remoteStore,!0);for(const i of t)Wo(n.remoteStore,i)}else if(!1===t&&!1!==n.fc){const e=[];let t=Promise.resolve();n.ic.forEach((i,r)=>{n.sharedClientState.isLocalQueryTarget(r)?e.push(r):t=t.then(()=>(Ka(n,r),lo(n.localStore,r,!0))),Xo(n.remoteStore,r)}),await t,await ll(n,e),function(e){const t=w(e);t.uc.forEach((e,n)=>{Xo(t.remoteStore,n)}),t.cc.fs(),t.uc=new Map,t.oc=new ye(X.comparator)}(n),n.fc=!1,await da(n.remoteStore,!1)}}async function ll(e,t,n){const i=w(e),r=[],s=[];for(const o of t){let e;const t=i.ic.get(o);if(t&&0!==t.length){e=await ao(i.localStore,Bt(t[0]));for(const e of t){const t=i.sc.get(e),n=await rl(i,t);n.snapshot&&s.push(n.snapshot)}}else{const t=await ho(i.localStore,o);e=await ao(i.localStore,t),await Va(i,cl(t),o,!1)}r.push(e)}return i.nc.Wo(s),r}function cl(e){return Nt(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function hl(e){const t=w(e);return w(w(t.localStore).persistence).vi()}async function ul(e,t,n,i){const r=w(e);if(r.fc)return void p("SyncEngine","Ignoring unexpected query state notification.");const s=r.ic.get(t);if(s&&s.length>0)switch(n){case"current":case"not-current":{const e=await uo(r.localStore,Gt(s[0])),i=$n.createSynthesizedRemoteEventForCurrentChange(t,"current"===n);await tl(r,e,i);break}case"rejected":await lo(r.localStore,t,!0),Ka(r,t,i);break;default:b()}}async function dl(e,t,n){const i=fl(e);if(i.fc){for(const e of t){if(i.ic.has(e)){p("SyncEngine","Adding an already active target "+e);continue}const t=await ho(i.localStore,e),n=await ao(i.localStore,t);await Va(i,cl(t),n.targetId,!1),Wo(i.remoteStore,n)}for(const e of n)i.ic.has(e)&&await lo(i.localStore,e,!1).then(()=>{Xo(i.remoteStore,e),Ka(i,e)}).catch(ne)}}function fl(e){const t=w(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ha.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=il.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Xa.bind(null,t),t.nc.Wo=_a.bind(null,t.eventManager),t.nc._c=Aa.bind(null,t.eventManager),t}function pl(e){const t=w(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Ua.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Ya.bind(null,t),t}function gl(e,t,n){const i=w(e);(async function(e,t,n){try{const i=await t.getMetadata();if(await function(e,t){const n=w(e),i=hi(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",e=>n.Ns.getBundleMetadata(e,t.id)).then(e=>!!e&&e.createTime.compareTo(i)>=0)}(e.localStore,i))return await t.close(),n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(i)),Promise.resolve(new Set);n._updateProgress(Pa(i));const r=new Oa(i,e.localStore,t.It);let s=await t.wc();for(;s;){const e=await r.Ou(s);e&&n._updateProgress(e),s=await t.wc()}const o=await r.complete();return await tl(e,o.Bu,void 0),await function(e,t){const n=w(e);return n.persistence.runTransaction("Save bundle","readwrite",e=>n.Ns.saveBundleMetadata(e,t))}(e.localStore,i),n._completeWith(o.progress),Promise.resolve(o.$u)}catch(e){return m("SyncEngine","Loading bundle failed with "+e),n._failWith(e),Promise.resolve(new Set)}}
/**
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
 */)(i,t,n).then(e=>{i.sharedClientState.notifyBundleLoaded(e)})}class ml{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=Do(e.databaseInfo.databaseId),this.sharedClientState=this.mc(e),this.persistence=this.gc(e),await this.persistence.start(),this.localStore=this.yc(e),this.gcScheduler=this.Ic(e,this.localStore),this.indexBackfillerScheduler=this.Tc(e,this.localStore)}Ic(e,t){return null}Tc(e,t){return null}yc(e){return eo(this.persistence,new Zs,e.initialUser,this.It)}gc(e){return new Bs(Ws.Bs,this.It)}mc(e){return new Ao}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class vl extends ml{constructor(e,t,n){super(),this.Ec=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ec.initialize(this,e),await pl(this.Ec.syncEngine),await na(this.Ec.remoteStore),await this.persistence.li(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}yc(e){return eo(this.persistence,new Zs,e.initialUser,this.It)}Ic(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new bs(n,e.asyncQueue,t)}Tc(e,t){const n=new pe(t,this.persistence);return new fe(e.asyncQueue,n)}gc(e){const t=Ks(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?is.withCacheSize(this.cacheSizeBytes):is.DEFAULT;return new Gs(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Po(),Lo(),this.It,this.sharedClientState,!!this.forceOwnership)}mc(e){return new Ao}}class bl extends vl{constructor(e,t){super(e,t,!1),this.Ec=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ec.syncEngine;this.sharedClientState instanceof _o&&(this.sharedClientState.syncEngine={Fr:ol.bind(null,t),$r:ul.bind(null,t),Br:dl.bind(null,t),vi:hl.bind(null,t),Or:sl.bind(null,t)},await this.sharedClientState.start()),await this.persistence.li(async e=>{await al(this.Ec.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())})}mc(e){const t=Po();if(!_o.C(t))throw new S(k.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Ks(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new _o(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class yl{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Wa(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=nl.bind(null,this.syncEngine),await da(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new wa}createDatastore(e){const t=Do(e.databaseInfo.databaseId),n=(i=e.databaseInfo,new Oo(i));var i;return function(e,t,n,i){return new jo(e,t,n,i)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,i=e.asyncQueue,r=e=>Wa(this.syncEngine,e,0),s=Io.C()?new Io:new Co,new zo(t,n,i,r,s);var t,n,i,r,s}createSyncEngine(e,t){return function(e,t,n,i,r,s,o){const a=new Fa(e,t,n,i,r,s);return o&&(a.fc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=w(e);p("RemoteStore","RemoteStore shutting down."),t._u.add(5),await Ho(t),t.mu.shutdown(),t.gu.set("Unknown")}(this.remoteStore)}}
/**
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
 */function xl(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const i={value:e.slice(n,n+t),done:!1};return n+=t,i}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
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
 */
/**
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
 */class wl{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ac(this.observer.next,e)}error(e){this.observer.error?this.Ac(this.observer.error,e):g("Uncaught Error in snapshot listener:",e)}Rc(){this.muted=!0}Ac(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}
/**
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
 */class kl{constructor(e,t){this.bc=e,this.It=t,this.metadata=new _,this.buffer=new Uint8Array,this.Pc=new TextDecoder("utf-8"),this.vc().then(e=>{e&&e.ku()?this.metadata.resolve(e.payload.metadata):this.metadata.reject(new Error("The first element of the bundle is not a metadata, it is\n             "+JSON.stringify(null==e?void 0:e.payload)))},e=>this.metadata.reject(e))}close(){return this.bc.cancel()}async getMetadata(){return this.metadata.promise}async wc(){return await this.getMetadata(),this.vc()}async vc(){const e=await this.Vc();if(null===e)return null;const t=this.Pc.decode(e),n=Number(t);isNaN(n)&&this.Sc(`length string (${t}) is not valid number`);const i=await this.Dc(n);return new Ta(JSON.parse(i),e.length+n)}Cc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Vc(){for(;this.Cc()<0;)if(await this.xc())break;if(0===this.buffer.length)return null;const e=this.Cc();e<0&&this.Sc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Dc(e){for(;this.buffer.length<e;)await this.xc()&&this.Sc("Reached the end of bundle when more is expected.");const t=this.Pc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Sc(e){throw this.bc.cancel(),new Error("Invalid bundle format: "+e)}async xc(){const e=await this.bc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
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
 */class Sl{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new S(k.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=w(e),i=vi(n.It)+"/documents",r={documents:t.map(e=>fi(n.It,e))},s=await n.fo("BatchGetDocuments",i,r,t.length),o=new Map;s.forEach(e=>{const t=wi(n.It,e);o.set(t.key.toString(),t)});const a=[];return t.forEach(e=>{const t=o.get(e.toString());y(!!t),a.push(t)}),a}(this.datastore,e);return t.forEach(e=>this.recordVersion(e)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new Tn(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((e,t)=>{const n=X.fromPath(t);this.mutations.push(new En(n,this.precondition(n)))}),await async function(e,t){const n=w(e),i=vi(n.It)+"/documents",r={writes:t.map(e=>Si(n.It,e))};await n.co("Commit",i,r)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw b();t=V.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new S(k.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(V.min())?gn.exists(!1):gn.updateTime(t):gn.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(V.min()))throw new S(k.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return gn.updateTime(t)}return gn.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
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
 */class _l{constructor(e,t,n,i,r){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=i,this.deferred=r,this.Nc=n.maxAttempts,this.xo=new No(this.asyncQueue,"transaction_retry")}run(){this.Nc-=1,this.kc()}kc(){this.xo.Ao(async()=>{const e=new Sl(this.datastore),t=this.Mc(e);t&&t.then(t=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(t)}).catch(e=>{this.Oc(e)}))}).catch(e=>{this.Oc(e)})})}Mc(e){try{const t=this.updateFunction(e);return!Fe(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Oc(e){this.Nc>0&&this.Fc(e)?(this.Nc-=1,this.asyncQueue.enqueueAndForget(()=>(this.kc(),Promise.resolve()))):this.deferred.reject(e)}Fc(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||!Dn(t)}return!1}}
/**
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
 */class Al{constructor(e,t,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=c.UNAUTHENTICATED,this.clientId=N.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{p("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(p("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new S(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=ma(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function Cl(e,t){e.asyncQueue.verifyOperationInProgress(),p("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener(async e=>{i.isEqual(e)||(await to(t.localStore,e),i=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function Il(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Tl(e);p("FirestoreClient","Initializing OnlineComponentProvider");const i=await e.getConfiguration();await t.initialize(n,i),e.setCredentialChangeListener(e=>ua(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>ua(t.remoteStore,n)),e.onlineComponents=t}async function Tl(e){return e.offlineComponents||(p("FirestoreClient","Using default OfflineComponentProvider"),await Cl(e,new ml)),e.offlineComponents}async function El(e){return e.onlineComponents||(p("FirestoreClient","Using default OnlineComponentProvider"),await Il(e,new yl)),e.onlineComponents}function Ol(e){return Tl(e).then(e=>e.persistence)}function Pl(e){return Tl(e).then(e=>e.localStore)}function Ll(e){return El(e).then(e=>e.remoteStore)}function Dl(e){return El(e).then(e=>e.syncEngine)}async function Nl(e){const t=await El(e),n=t.eventManager;return n.onListen=ja.bind(null,t.syncEngine),n.onUnlisten=za.bind(null,t.syncEngine),n}function Rl(e){return e.asyncQueue.enqueue(async()=>{const t=await Ol(e),n=await Ll(e);return t.setNetworkEnabled(!0),function(e){const t=w(e);return t._u.delete(0),Bo(t)}(n)})}function Ml(e){return e.asyncQueue.enqueue(async()=>{const t=await Ol(e),n=await Ll(e);return t.setNetworkEnabled(!1),async function(e){const t=w(e);t._u.add(0),await Ho(t),t.gu.set("Offline")}(n)})}function Fl(e,t){const n=new _;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,n){try{const i=await function(e,t){const n=w(e);return n.persistence.runTransaction("read document","readonly",e=>n.localDocuments.getDocument(e,t))}(e,t);i.isFoundDocument()?n.resolve(i):i.isNoDocument()?n.resolve(null):n.reject(new S(k.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const i=ma(e,`Failed to get document '${t} from cache`);n.reject(i)}}(await Pl(e),t,n)),n.promise}function jl(e,t,n={}){const i=new _;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,i,r){const s=new wl({next:s=>{t.enqueueAndForget(()=>Sa(e,o));const a=s.docs.has(n);!a&&s.fromCache?r.reject(new S(k.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&i&&"server"===i.source?r.reject(new S(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):r.resolve(s)},error:e=>r.reject(e)}),o=new Ia(Rt(n.path),s,{includeMetadataChanges:!0,Nu:!0});return ka(e,o)}(await Nl(e),e.asyncQueue,t,n,i)),i.promise}function Vl(e,t){const n=new _;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,n){try{const i=await co(e,t,!0),r=new Na(t,i.Hi),s=r.ju(i.documents),o=r.applyChanges(s,!1);n.resolve(o.snapshot)}catch(e){const i=ma(e,`Failed to execute query '${t} against cache`);n.reject(i)}}(await Pl(e),t,n)),n.promise}function zl(e,t,n={}){const i=new _;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,i,r){const s=new wl({next:n=>{t.enqueueAndForget(()=>Sa(e,o)),n.fromCache&&"server"===i.source?r.reject(new S(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(n)},error:e=>r.reject(e)}),o=new Ia(n,s,{includeMetadataChanges:!0,Nu:!0});return ka(e,o)}(await Nl(e),e.asyncQueue,t,n,i)),i.promise}function Bl(e,t){const n=new wl(t);return e.asyncQueue.enqueueAndForget(async()=>function(e,t){w(e).Ru.add(t),t.next()}(await Nl(e),n)),()=>{n.Rc(),e.asyncQueue.enqueueAndForget(async()=>function(e,t){w(e).Ru.delete(t)}(await Nl(e),n))}}function Hl(e,t,n){const i=new _;return e.asyncQueue.enqueueAndForget(async()=>{const r=await function(e){return El(e).then(e=>e.datastore)}(e);new _l(e.asyncQueue,r,n,t,i).run()}),i.promise}function Wl(e,t,n,i){const r=function(e,t){let n;return n="string"==typeof e?(new TextEncoder).encode(e):e,function(e,t){return new kl(e,t)}(function(e,t){if(e instanceof Uint8Array)return xl(e,t);if(e instanceof ArrayBuffer)return xl(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),t)}
/**
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
 */(n,Do(t));e.asyncQueue.enqueueAndForget(async()=>{gl(await Dl(e),r,i)})}function Xl(e,t){return e.asyncQueue.enqueue(async()=>function(e,t){const n=w(e);return n.persistence.runTransaction("Get named query","readonly",e=>n.Ns.getNamedQuery(e,t))}(await Pl(e),t))}const Ul=new Map;
/**
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
 */function Yl(e,t,n){if(!n)throw new S(k.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Gl(e,t,n,i){if(!0===t&&!0===i)throw new S(k.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function ql(e){if(!X.isDocumentKey(e))throw new S(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function $l(e){if(X.isDocumentKey(e))throw new S(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Kl(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=e.substring(0,20)+"..."),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":b()}function Ql(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new S(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Kl(e);throw new S(k.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function Zl(e,t){if(t<=0)throw new S(k.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
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
 */class Jl{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new S(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new S(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Gl("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
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
 */class ec{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new S(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new S(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jl(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new C;switch(e.type){case"gapi":const t=e.client;return new O(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new S(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Ul.get(e);t&&(p("ComponentProvider","Removing Datastore"),Ul.delete(e),t.terminate())}(this),Promise.resolve()}}function tc(e,t,n,i={}){var r;const s=(e=Ql(e,ec))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&m("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),i.mockUserToken){let t,n;if("string"==typeof i.mockUserToken)t=i.mockUserToken,n=c.MOCK_USER;else{t=Object(o["g"])(i.mockUserToken,null===(r=e._app)||void 0===r?void 0:r.options.projectId);const s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new S(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new c(s)}e._authCredentials=new I(new A(t,n))}}
/**
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
 */class nc{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rc(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new nc(this.firestore,e,this._key)}}class ic{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new ic(this.firestore,e,this._query)}}class rc extends ic{constructor(e,t,n){super(e,t,Rt(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new nc(this.firestore,null,new X(e))}withConverter(e){return new rc(this.firestore,e,this._path)}}function sc(e,t,...n){if(e=Object(o["l"])(e),Yl("collection","path",t),e instanceof ec){const i=B.fromString(t,...n);return $l(i),new rc(e,null,i)}{if(!(e instanceof nc||e instanceof rc))throw new S(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(B.fromString(t,...n));return $l(i),new rc(e.firestore,null,i)}}function oc(e,t){if(e=Ql(e,ec),Yl("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new S(k.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new ic(e,null,function(e){return new Dt(B.emptyPath(),e)}(t))}function ac(e,t,...n){if(e=Object(o["l"])(e),1===arguments.length&&(t=N.R()),Yl("doc","path",t),e instanceof ec){const i=B.fromString(t,...n);return ql(i),new nc(e,null,new X(i))}{if(!(e instanceof nc||e instanceof rc))throw new S(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(B.fromString(t,...n));return ql(i),new nc(e.firestore,e instanceof rc?e.converter:null,new X(i))}}function lc(e,t){return e=Object(o["l"])(e),t=Object(o["l"])(t),(e instanceof nc||e instanceof rc)&&(t instanceof nc||t instanceof rc)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function cc(e,t){return e=Object(o["l"])(e),t=Object(o["l"])(t),e instanceof ic&&t instanceof ic&&e.firestore===t.firestore&&Wt(e._query,t._query)&&e.converter===t.converter
/**
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
 */}class hc{constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new No(this,"async_queue_retry"),this.jc=()=>{const e=Lo();e&&p("AsyncQueue","Visibility state changed to "+e.visibilityState),this.xo.bo()};const e=Lo();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Wc(),this.zc(e)}enterRestrictedMode(e){if(!this.Lc){this.Lc=!0,this.Gc=e||!1;const t=Lo();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Wc(),this.Lc)return new Promise(()=>{});const t=new _;return this.zc(()=>this.Lc&&this.Gc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Bc.push(e),this.Hc()))}async Hc(){if(0!==this.Bc.length){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(e){if(!le(e))throw e;p("AsyncQueue","Operation failed with retryable error: "+e)}this.Bc.length>0&&this.xo.Ao(()=>this.Hc())}}zc(e){const t=this.$c.then(()=>(this.Kc=!0,e().catch(e=>{this.qc=e,this.Kc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
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
 */(e);throw g("INTERNAL UNHANDLED ERROR: ",t),e}).then(e=>(this.Kc=!1,e))));return this.$c=t,t}enqueueAfterDelay(e,t,n){this.Wc(),this.Qc.indexOf(e)>-1&&(t=0);const i=ga.createAndSchedule(this,e,t,n,e=>this.Jc(e));return this.Uc.push(i),i}Wc(){this.qc&&b()}verifyOperationInProgress(){}async Yc(){let e;do{e=this.$c,await e}while(e!==this.$c)}Xc(e){for(const t of this.Uc)if(t.timerId===e)return!0;return!1}Zc(e){return this.Yc().then(()=>{this.Uc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.Uc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Yc()})}ta(e){this.Qc.push(e)}Jc(e){const t=this.Uc.indexOf(e);this.Uc.splice(t,1)}}function uc(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const i of t)if(i in n&&"function"==typeof n[i])return!0;return!1}
/**
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
 */(e,["next","error","complete"])}class dc{constructor(){this._progressObserver={},this._taskCompletionResolver=new _,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
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
 */const fc=-1;class pc extends ec{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new hc,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||mc(this),this._firestoreClient.terminate()}}function gc(e){return e._firestoreClient||mc(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function mc(e){var t;const n=e._freezeSettings(),i=function(e,t,n,i){return new Re(e,t,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Al(e._authCredentials,e._appCheckCredentials,e._queue,i)}function vc(e,t){Cc(e=Ql(e,pc));const n=gc(e),i=e._freezeSettings(),r=new yl;return yc(n,r,new vl(r,i.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function bc(e){Cc(e=Ql(e,pc));const t=gc(e),n=e._freezeSettings(),i=new yl;return yc(t,i,new bl(i,n.cacheSizeBytes))}function yc(e,t,n){const i=new _;return e.asyncQueue.enqueue(async()=>{try{await Cl(e,n),await Il(e,t),i.resolve()}catch(e){const n=e;if(!function(e){return"FirebaseError"===e.name?e.code===k.FAILED_PRECONDITION||e.code===k.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||(22===e.code||20===e.code||11===e.code)}(n))throw n;m("Error enabling offline persistence. Falling back to persistence disabled: "+n),i.reject(n)}}).then(()=>i.promise)}function xc(e){if(e._initialized&&!e._terminated)throw new S(k.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new _;return e._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(e){if(!se.C())return Promise.resolve();const t=e+"main";await se.delete(t)}
/**
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
 */(Ks(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}}),t.promise}function wc(e){return function(e){const t=new _;return e.asyncQueue.enqueueAndForget(async()=>Ga(await Dl(e),t)),t.promise}(gc(e=Ql(e,pc)))}function kc(e){return Rl(gc(e=Ql(e,pc)))}function Sc(e){return Ml(gc(e=Ql(e,pc)))}function _c(e,t){const n=gc(e=Ql(e,pc)),i=new dc;return Wl(n,e._databaseId,t,i),i}function Ac(e,t){return Xl(gc(e=Ql(e,pc)),t).then(t=>t?new ic(e,null,t.query):null)}function Cc(e){if(e._initialized||e._terminated)throw new S(k.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
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
 */
/**
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
 */class Ic{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new S(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new W(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
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
 */
class Tc{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Tc(Ie.fromBase64String(e))}catch(e){throw new S(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Tc(Ie.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
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
 */class Ec{constructor(e){this._methodName=e}}
/**
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
 */class Oc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new S(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new S(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return R(this._lat,e._lat)||R(this._long,e._long)}}
/**
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
 */const Pc=/^__.*__$/;class Lc{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new _n(e,this.data,this.fieldMask,t,this.fieldTransforms):new Sn(e,this.data,t,this.fieldTransforms)}}class Dc{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new _n(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Nc(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b()}}class Rc{constructor(e,t,n,i,r,s){this.settings=e,this.databaseId=t,this.It=n,this.ignoreUndefinedProperties=i,void 0===r&&this.ea(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get na(){return this.settings.na}sa(e){return new Rc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ia(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.sa({path:n,ra:!1});return i.oa(e),i}ua(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.sa({path:n,ra:!1});return i.ea(),i}ca(e){return this.sa({path:void 0,ra:!0})}aa(e){return th(e,this.settings.methodName,this.settings.ha||!1,this.path,this.settings.la)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}ea(){if(this.path)for(let e=0;e<this.path.length;e++)this.oa(this.path.get(e))}oa(e){if(0===e.length)throw this.aa("Document fields must not be empty");if(Nc(this.na)&&Pc.test(e))throw this.aa('Document fields cannot begin and end with "__"')}}class Mc{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.It=n||Do(e)}fa(e,t,n,i=!1){return new Rc({na:e,methodName:t,la:n,path:W.emptyPath(),ra:!1,ha:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function Fc(e){const t=e._freezeSettings(),n=Do(e._databaseId);return new Mc(e._databaseId,!!t.ignoreUndefinedProperties,n)}function jc(e,t,n,i,r,s={}){const o=e.fa(s.merge||s.mergeFields?2:0,t,n,r);Qc("Data must be an object, but it was:",o,i);const a=$c(i,o);let l,c;if(s.merge)l=new Ae(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const i of s.mergeFields){const r=Zc(t,i,n);if(!o.contains(r))throw new S(k.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);nh(e,r)||e.push(r)}l=new Ae(e),c=o.fieldTransforms.filter(e=>l.covers(e.field))}else l=null,c=o.fieldTransforms;return new Lc(new at(a),l,c)}class Vc extends Ec{_toFieldTransform(e){if(2!==e.na)throw 1===e.na?e.aa(this._methodName+"() can only appear at the top level of your update data"):e.aa(this._methodName+"() cannot be used with set() unless you pass {merge:true}");return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Vc}}function zc(e,t,n){return new Rc({na:3,la:t.settings.la,methodName:e._methodName,ra:n},t.databaseId,t.It,t.ignoreUndefinedProperties)}class Bc extends Ec{_toFieldTransform(e){return new dn(e.path,new rn)}isEqual(e){return e instanceof Bc}}class Hc extends Ec{constructor(e,t){super(e),this.da=t}_toFieldTransform(e){const t=zc(this,e,!0),n=this.da.map(e=>qc(e,t)),i=new sn(n);return new dn(e.path,i)}isEqual(e){return this===e}}class Wc extends Ec{constructor(e,t){super(e),this.da=t}_toFieldTransform(e){const t=zc(this,e,!0),n=this.da.map(e=>qc(e,t)),i=new an(n);return new dn(e.path,i)}isEqual(e){return this===e}}class Xc extends Ec{constructor(e,t){super(e),this._a=t}_toFieldTransform(e){const t=new cn(e.It,Zt(e.It,this._a));return new dn(e.path,t)}isEqual(e){return this===e}}function Uc(e,t,n,i){const r=e.fa(1,t,n);Qc("Data must be an object, but it was:",r,i);const s=[],a=at.empty();ve(i,(e,i)=>{const l=eh(t,e,n);i=Object(o["l"])(i);const c=r.ua(l);if(i instanceof Vc)s.push(l);else{const e=qc(i,c);null!=e&&(s.push(l),a.set(l,e))}});const l=new Ae(s);return new Dc(a,l,r.fieldTransforms)}function Yc(e,t,n,i,r,s){const a=e.fa(1,t,n),l=[Zc(t,i,n)],c=[r];if(s.length%2!=0)throw new S(k.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let o=0;o<s.length;o+=2)l.push(Zc(t,s[o])),c.push(s[o+1]);const h=[],u=at.empty();for(let f=l.length-1;f>=0;--f)if(!nh(h,l[f])){const e=l[f];let t=c[f];t=Object(o["l"])(t);const n=a.ua(e);if(t instanceof Vc)h.push(e);else{const i=qc(t,n);null!=i&&(h.push(e),u.set(e,i))}}const d=new Ae(h);return new Dc(u,d,a.fieldTransforms)}function Gc(e,t,n,i=!1){return qc(n,e.fa(i?4:3,t))}function qc(e,t){if(Kc(e=Object(o["l"])(e)))return Qc("Unsupported field value:",t,e),$c(e,t);if(e instanceof Ec)return function(e,t){if(!Nc(t.na))throw t.aa(e._methodName+"() can only be used with update() and set()");if(!t.path)throw t.aa(e._methodName+"() is not currently supported inside arrays");const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ra&&4!==t.na)throw t.aa("Nested arrays are not supported");return function(e,t){const n=[];let i=0;for(const r of e){let e=qc(r,t.ca(i));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),i++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Object(o["l"])(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Zt(t.It,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=j.fromDate(e);return{timestampValue:ai(t.It,n)}}if(e instanceof j){const n=new j(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:ai(t.It,n)}}if(e instanceof Oc)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Tc)return{bytesValue:li(t.It,e._byteString)};if(e instanceof nc){const n=t.databaseId,i=e.firestore._databaseId;if(!i.isEqual(n))throw t.aa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ui(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.aa("Unsupported field value: "+Kl(e))}(e,t)}function $c(e,t){const n={};return be(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ve(e,(e,i)=>{const r=qc(i,t.ia(e));null!=r&&(n[e]=r)}),{mapValue:{fields:n}}}function Kc(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof j||e instanceof Oc||e instanceof Tc||e instanceof nc||e instanceof Ec)}function Qc(e,t,n){if(!Kc(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const i=Kl(n);throw"an object"===i?t.aa(e+" a custom object"):t.aa(e+" "+i)}}function Zc(e,t,n){if((t=Object(o["l"])(t))instanceof Ic)return t._internalPath;if("string"==typeof t)return eh(e,t);throw th("Field path arguments must be of type string or ",e,!1,void 0,n)}const Jc=new RegExp("[~\\*/\\[\\]]");function eh(e,t,n){if(t.search(Jc)>=0)throw th(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Ic(...t.split("."))._internalPath}catch(i){throw th(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function th(e,t,n,i,r){const s=i&&!i.isEmpty(),o=void 0!==r;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=" in field "+i),o&&(l+=" in document "+r),l+=")"),new S(k.INVALID_ARGUMENT,a+e+l)}function nh(e,t){return e.some(e=>e.isEqual(t))}
/**
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
 */class ih{constructor(e,t,n,i,r){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new nc(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new rh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(sh("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class rh extends ih{data(){return super.data()}}function sh(e,t){return"string"==typeof t?eh(e,t):t instanceof Ic?t._internalPath:t._delegate._internalPath}
/**
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
 */class oh{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ah extends ih{constructor(e,t,n,i,r,s){super(e,t,n,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new lh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(sh("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class lh extends ah{data(e={}){return super.data(e)}}class ch{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new oh(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new lh(this._firestore,this._userDataWriter,n.key,n,new oh(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new S(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>({type:"added",doc:new lh(e._firestore,e._userDataWriter,n.doc.key,n.doc,new oh(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const i=new lh(e._firestore,e._userDataWriter,t.doc.key,t.doc,new oh(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let r=-1,s=-1;return 0!==t.type&&(r=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:hh(t.type),doc:i,oldIndex:r,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function hh(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return b()}}function uh(e,t){return e instanceof ah&&t instanceof ah?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof ch&&t instanceof ch&&e._firestore===t._firestore&&cc(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
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
 */function dh(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new S(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fh{}function ph(e,...t){for(const n of t)e=n._apply(e);return e}class gh extends fh{constructor(e,t,n){super(),this.wa=e,this.ma=t,this.ga=n,this.type="where"}_apply(e){const t=Fc(e.firestore),n=function(e,t,n,i,r,s,o){let a;if(r.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new S(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){Oh(o,s);const t=[];for(const n of o)t.push(Eh(i,e,n));a={arrayValue:{values:t}}}else a=Eh(i,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Oh(o,s),a=Gc(n,t,o,"in"===s||"not-in"===s);const l=yt.create(r,s,a);return function(e,t){if(t.dt()){const n=jt(e);if(null!==n&&!n.isEqual(t.field))throw new S(k.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const i=Ft(e);null!==i&&Ph(e,t.field,i)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new S(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new S(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,l),l}(e._query,"where",t,e.firestore._databaseId,this.wa,this.ma,this.ga);return new ic(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new Dt(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}function mh(e,t,n){const i=t,r=sh("where",e);return new gh(r,i,n)}class vh extends fh{constructor(e,t){super(),this.wa=e,this.ya=t,this.type="orderBy"}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new S(k.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new S(k.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const i=new Et(t,n);return function(e,t){if(null===Ft(e)){const n=jt(e);null!==n&&Ph(e,n,t.field)}}(e,i),i}(e._query,this.wa,this.ya);return new ic(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new Dt(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function bh(e,t="asc"){const n=t,i=sh("orderBy",e);return new vh(i,n)}class yh extends fh{constructor(e,t,n){super(),this.type=e,this.pa=t,this.Ia=n}_apply(e){return new ic(e.firestore,e.converter,Ht(e._query,this.pa,this.Ia))}}function xh(e){return Zl("limit",e),new yh("limit",e,"F")}function wh(e){return Zl("limitToLast",e),new yh("limitToLast",e,"L")}class kh extends fh{constructor(e,t,n){super(),this.type=e,this.Ta=t,this.Ea=n}_apply(e){const t=Th(e,this.type,this.Ta,this.Ea);return new ic(e.firestore,e.converter,function(e,t){return new Dt(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function Sh(...e){return new kh("startAt",e,!0)}function _h(...e){return new kh("startAfter",e,!1)}class Ah extends fh{constructor(e,t,n){super(),this.type=e,this.Ta=t,this.Ea=n}_apply(e){const t=Th(e,this.type,this.Ta,this.Ea);return new ic(e.firestore,e.converter,function(e,t){return new Dt(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function Ch(...e){return new Ah("endBefore",e,!1)}function Ih(...e){return new Ah("endAt",e,!0)}function Th(e,t,n,i){if(n[0]=Object(o["l"])(n[0]),n[0]instanceof ih)return function(e,t,n,i,r){if(!i)throw new S(k.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const o of zt(e))if(o.field.isKeyField())s.push($e(t,i.key));else{const e=i.data.field(o.field);if(Le(e))throw new S(k.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=o.field.canonicalString();throw new S(k.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new Tt(s,r)}(e._query,e.firestore._databaseId,t,n[0]._document,i);{const r=Fc(e.firestore);return function(e,t,n,i,r,s){const o=e.explicitOrderBy;if(r.length>o.length)throw new S(k.INVALID_ARGUMENT,`Too many arguments provided to ${i}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let l=0;l<r.length;l++){const s=r[l];if(o[l].field.isKeyField()){if("string"!=typeof s)throw new S(k.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${i}(), but got a ${typeof s}`);if(!Vt(e)&&-1!==s.indexOf("/"))throw new S(k.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${i}() must be a plain document ID, but '${s}' contains a slash.`);const n=e.path.child(B.fromString(s));if(!X.isDocumentKey(n))throw new S(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${i}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const r=new X(n);a.push($e(t,r))}else{const e=Gc(n,i,s);a.push(e)}}return new Tt(a,s)}(e._query,e.firestore._databaseId,r,t,n,i)}}function Eh(e,t,n){if("string"==typeof(n=Object(o["l"])(n))){if(""===n)throw new S(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Vt(t)&&-1!==n.indexOf("/"))throw new S(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=t.path.child(B.fromString(n));if(!X.isDocumentKey(i))throw new S(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return $e(e,new X(i))}if(n instanceof nc)return $e(e,n._key);throw new S(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Kl(n)}.`)}function Oh(e,t){if(!Array.isArray(e)||0===e.length)throw new S(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new S(k.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function Ph(e,t,n){if(!n.isEqual(t))throw new S(k.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
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
 */const Lh={maxAttempts:5};
/**
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
 */class Dh{convertValue(e,t="none"){switch(He(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Pe(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw b()}}convertObject(e,t){const n={};return ve(e.fields,(e,i)=>{n[e]=this.convertValue(i,t)}),n}convertGeoPoint(e){return new Oc(Oe(e.latitude),Oe(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=De(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Ne(e));default:return null}}convertTimestamp(e){const t=Ee(e);return new j(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=B.fromString(e);y(ji(n));const i=new Me(n.get(1),n.get(3)),r=new X(n.popFirst(5));return i.isEqual(t)||g(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}
/**
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
 */function Nh(e,t,n){let i;return i=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,i}class Rh extends Dh{constructor(e){super(),this.firestore=e}convertBytes(e){return new Tc(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new nc(this.firestore,null,t)}}
/**
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
 */class Mh{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Fc(e)}set(e,t,n){this._verifyNotCommitted();const i=Fh(e,this._firestore),r=Nh(i.converter,t,n),s=jc(this._dataReader,"WriteBatch.set",i._key,r,null!==i.converter,n);return this._mutations.push(s.toMutation(i._key,gn.none())),this}update(e,t,n,...i){this._verifyNotCommitted();const r=Fh(e,this._firestore);let s;return s="string"==typeof(t=Object(o["l"])(t))||t instanceof Ic?Yc(this._dataReader,"WriteBatch.update",r._key,t,n,i):Uc(this._dataReader,"WriteBatch.update",r._key,t),this._mutations.push(s.toMutation(r._key,gn.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Fh(e,this._firestore);return this._mutations=this._mutations.concat(new Tn(t._key,gn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new S(k.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Fh(e,t){if((e=Object(o["l"])(e)).firestore!==t)throw new S(k.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
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
 */
/**
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
 */function jh(e){e=Ql(e,nc);const t=Ql(e.firestore,pc);return jl(gc(t),e._key).then(n=>Zh(t,e,n))}class Vh extends Dh{constructor(e){super(),this.firestore=e}convertBytes(e){return new Tc(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new nc(this.firestore,null,t)}}function zh(e){e=Ql(e,nc);const t=Ql(e.firestore,pc),n=gc(t),i=new Vh(t);return Fl(n,e._key).then(n=>new ah(t,i,e._key,n,new oh(null!==n&&n.hasLocalMutations,!0),e.converter))}function Bh(e){e=Ql(e,nc);const t=Ql(e.firestore,pc);return jl(gc(t),e._key,{source:"server"}).then(n=>Zh(t,e,n))}function Hh(e){e=Ql(e,ic);const t=Ql(e.firestore,pc),n=gc(t),i=new Vh(t);return dh(e._query),zl(n,e._query).then(n=>new ch(t,i,e,n))}function Wh(e){e=Ql(e,ic);const t=Ql(e.firestore,pc),n=gc(t),i=new Vh(t);return Vl(n,e._query).then(n=>new ch(t,i,e,n))}function Xh(e){e=Ql(e,ic);const t=Ql(e.firestore,pc),n=gc(t),i=new Vh(t);return zl(n,e._query,{source:"server"}).then(n=>new ch(t,i,e,n))}function Uh(e,t,n){e=Ql(e,nc);const i=Ql(e.firestore,pc),r=Nh(e.converter,t,n);return Qh(i,[jc(Fc(i),"setDoc",e._key,r,null!==e.converter,n).toMutation(e._key,gn.none())])}function Yh(e,t,n,...i){e=Ql(e,nc);const r=Ql(e.firestore,pc),s=Fc(r);let a;return a="string"==typeof(t=Object(o["l"])(t))||t instanceof Ic?Yc(s,"updateDoc",e._key,t,n,i):Uc(s,"updateDoc",e._key,t),Qh(r,[a.toMutation(e._key,gn.exists(!0))])}function Gh(e){return Qh(Ql(e.firestore,pc),[new Tn(e._key,gn.none())])}function qh(e,t){const n=Ql(e.firestore,pc),i=ac(e),r=Nh(e.converter,t);return Qh(n,[jc(Fc(e.firestore),"addDoc",i._key,r,null!==e.converter,{}).toMutation(i._key,gn.exists(!1))]).then(()=>i)}function $h(e,...t){var n,i,r;e=Object(o["l"])(e);let s={includeMetadataChanges:!1},a=0;"object"!=typeof t[a]||uc(t[a])||(s=t[a],a++);const l={includeMetadataChanges:s.includeMetadataChanges};if(uc(t[a])){const e=t[a];t[a]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[a+1]=null===(i=e.error)||void 0===i?void 0:i.bind(e),t[a+2]=null===(r=e.complete)||void 0===r?void 0:r.bind(e)}let c,h,u;if(e instanceof nc)h=Ql(e.firestore,pc),u=Rt(e._key.path),c={next:n=>{t[a]&&t[a](Zh(h,e,n))},error:t[a+1],complete:t[a+2]};else{const n=Ql(e,ic);h=Ql(n.firestore,pc),u=n._query;const i=new Vh(h);c={next:e=>{t[a]&&t[a](new ch(h,i,n,e))},error:t[a+1],complete:t[a+2]},dh(e._query)}return function(e,t,n,i){const r=new wl(i),s=new Ia(t,r,n);return e.asyncQueue.enqueueAndForget(async()=>ka(await Nl(e),s)),()=>{r.Rc(),e.asyncQueue.enqueueAndForget(async()=>Sa(await Nl(e),s))}}(gc(h),u,l,c)}function Kh(e,t){return Bl(gc(e=Ql(e,pc)),uc(t)?t:{next:t})}function Qh(e,t){return function(e,t){const n=new _;return e.asyncQueue.enqueueAndForget(async()=>Ba(await Dl(e),t,n)),n.promise}(gc(e),t)}function Zh(e,t,n){const i=n.docs.get(t._key),r=new Vh(e);return new ah(e,r,t._key,i,new oh(n.hasPendingWrites,n.fromCache),t.converter)}
/**
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
 */class Jh extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Fc(e)}get(e){const t=Fh(e,this._firestore),n=new Rh(this._firestore);return this._transaction.lookup([t._key]).then(e=>{if(!e||1!==e.length)return b();const i=e[0];if(i.isFoundDocument())return new ih(this._firestore,n,i.key,i,t.converter);if(i.isNoDocument())return new ih(this._firestore,n,t._key,null,t.converter);throw b()})}set(e,t,n){const i=Fh(e,this._firestore),r=Nh(i.converter,t,n),s=jc(this._dataReader,"Transaction.set",i._key,r,null!==i.converter,n);return this._transaction.set(i._key,s),this}update(e,t,n,...i){const r=Fh(e,this._firestore);let s;return s="string"==typeof(t=Object(o["l"])(t))||t instanceof Ic?Yc(this._dataReader,"Transaction.update",r._key,t,n,i):Uc(this._dataReader,"Transaction.update",r._key,t),this._transaction.update(r._key,s),this}delete(e){const t=Fh(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Fh(e,this._firestore),n=new Vh(this._firestore);return super.get(e).then(e=>new ah(this._firestore,n,t._key,e._document,new oh(!1,!1),t.converter))}}function eu(e,t,n){e=Ql(e,pc);const i=Object.assign(Object.assign({},Lh),n);return function(e){if(e.maxAttempts<1)throw new S(k.INVALID_ARGUMENT,"Max attempts must be at least 1")}(i),Hl(gc(e),n=>t(new Jh(e,n)),i)}
/**
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
 */function tu(){return new Vc("deleteField")}function nu(){return new Bc("serverTimestamp")}function iu(...e){return new Hc("arrayUnion",e)}function ru(...e){return new Wc("arrayRemove",e)}function su(e){return new Xc("increment",e)}
/**
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
 */!function(e,t=!0){!function(e){h=e}(i["SDK_VERSION"]),Object(i["_registerComponent"])(new r["a"]("firestore",(e,{instanceIdentifier:n,options:i})=>{const r=e.getProvider("app").getImmediate(),s=new pc(new T(e.getProvider("auth-internal")),new L(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new S(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Me(e.options.projectId,t)}
/**
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
 */(r,n),r);return i=Object.assign({useFetchStreams:t},i),s._setSettings(i),s},"PUBLIC").setMultipleInstances(!0)),Object(i["registerVersion"])(l,"3.5.0",e),Object(i["registerVersion"])(l,"3.5.0","esm2017")}()}).call(this,n("4362"))},"0cfb":function(e,t,n){var i=n("83ab"),r=n("d039"),s=n("cc12");e.exports=!i&&!r((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(e,t){var n=String;e.exports=function(e){try{return n(e)}catch(t){return"Object"}}},"13d2":function(e,t,n){var i=n("d039"),r=n("1626"),s=n("1a2d"),o=n("83ab"),a=n("5e77").CONFIGURABLE,l=n("8925"),c=n("69f3"),h=c.enforce,u=c.get,d=Object.defineProperty,f=o&&!i((function(){return 8!==d((function(){}),"length",{value:8}).length})),p=String(String).split("String"),g=e.exports=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!s(e,"name")||a&&e.name!==t)&&(o?d(e,"name",{value:t,configurable:!0}):e.name=t),f&&n&&s(n,"arity")&&e.length!==n.arity&&d(e,"length",{value:n.arity});try{n&&s(n,"constructor")&&n.constructor?o&&d(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(r){}var i=h(e);return s(i,"source")||(i.source=p.join("string"==typeof t?t:"")),e};Function.prototype.toString=g((function(){return r(this)&&u(this).source||l(this)}),"toString")},"14d9":function(e,t,n){"use strict";var i=n("23e7"),r=n("7b0b"),s=n("07fa"),o=n("3a34"),a=n("3511"),l=n("d039"),c=l((function(){return 4294967297!==[].push.call({length:4294967296},1)})),h=!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}}();i({target:"Array",proto:!0,arity:1,forced:c||h},{push:function(e){var t=r(this),n=s(t),i=arguments.length;a(n+i);for(var l=0;l<i;l++)t[n]=arguments[l],n++;return o(t,n),n}})},1626:function(e,t,n){var i=n("8ea1"),r=i.all;e.exports=i.IS_HTMLDDA?function(e){return"function"==typeof e||e===r}:function(e){return"function"==typeof e}},1862:function(e,t,n){"use strict";var i=n("7ded"),r=n("0829"),s=n("1fd5"),o=n("22e5");const a="@firebase/firestore-compat",l="0.1.25";
/**
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
 */
function c(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new r["g"]("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
/**
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
 */function h(){if("undefined"===typeof Uint8Array)throw new r["g"]("unimplemented","Uint8Arrays are not available in this environment.")}function u(){if(!Object(r["r"])())throw new r["g"]("unimplemented","Blobs are unavailable in Firestore in this environment.")}class d{constructor(e){this._delegate=e}static fromBase64String(e){return u(),new d(r["b"].fromBase64String(e))}static fromUint8Array(e){return h(),new d(r["b"].fromUint8Array(e))}toBase64(){return u(),this._delegate.toBase64()}toUint8Array(){return h(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
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
 */function f(e){return p(e,["next","error","complete"])}function p(e,t){if("object"!==typeof e||null===e)return!1;const n=e;for(const i of t)if(i in n&&"function"===typeof n[i])return!0;return!1}
/**
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
 */class g{enableIndexedDbPersistence(e,t){return Object(r["F"])(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return Object(r["G"])(e._delegate)}clearIndexedDbPersistence(e){return Object(r["x"])(e._delegate)}}class m{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof r["m"]||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||Object(r["s"])("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){Object(r["A"])(this._delegate,e,t,n)}enableNetwork(){return Object(r["H"])(this._delegate)}disableNetwork(){return Object(r["D"])(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,Object(r["t"])("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Object(r["lb"])(this._delegate)}onSnapshotsInSync(e){return Object(r["Y"])(this._delegate,e)}get app(){if(!this._appCompat)throw new r["g"]("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new P(this,Object(r["y"])(this._delegate,e))}catch(t){throw S(t,"collection()","Firestore.collection()")}}doc(e){try{return new k(this,Object(r["E"])(this._delegate,e))}catch(t){throw S(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new T(this,Object(r["z"])(this._delegate,e))}catch(t){throw S(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Object(r["db"])(this._delegate,t=>e(new y(this,t)))}batch(){return Object(r["K"])(this._delegate),new x(new r["l"](this._delegate,e=>Object(r["L"])(this._delegate,e)))}loadBundle(e){return Object(r["V"])(this._delegate,e)}namedQuery(e){return Object(r["W"])(this._delegate,e).then(e=>e?new T(this,e):null)}}class v extends r["a"]{constructor(e){super(),this.firestore=e}convertBytes(e){return new d(new r["b"](e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return k.forKey(t,this.firestore,null)}}function b(e){Object(r["gb"])(e)}class y{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new v(e)}get(e){const t=L(e);return this._delegate.get(t).then(e=>new C(this._firestore,new r["e"](this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter)))}set(e,t,n){const i=L(e);return n?(c("Transaction.set",n),this._delegate.set(i,t,n)):this._delegate.set(i,t),this}update(e,t,n,...i){const r=L(e);return 2===arguments.length?this._delegate.update(r,t):this._delegate.update(r,t,n,...i),this}delete(e){const t=L(e);return this._delegate.delete(t),this}}class x{constructor(e){this._delegate=e}set(e,t,n){const i=L(e);return n?(c("WriteBatch.set",n),this._delegate.set(i,t,n)):this._delegate.set(i,t),this}update(e,t,n,...i){const r=L(e);return 2===arguments.length?this._delegate.update(r,t):this._delegate.update(r,t,n,...i),this}delete(e){const t=L(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class w{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new r["i"](this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new I(this._firestore,n),null!==t&&void 0!==t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=w.INSTANCES;let i=n.get(e);i||(i=new WeakMap,n.set(e,i));let r=i.get(t);return r||(r=new w(e,new v(e),t),i.set(t,r)),r}}w.INSTANCES=new WeakMap;class k{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new v(e)}static forPath(e,t,n){if(e.length%2!==0)throw new r["g"]("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new k(t,new r["d"](t._delegate,n,new r["n"](e)))}static forKey(e,t,n){return new k(t,new r["d"](t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new P(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new P(this.firestore,Object(r["y"])(this._delegate,e))}catch(t){throw S(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=Object(s["l"])(e),e instanceof r["d"]&&Object(r["cb"])(this._delegate,e)}set(e,t){t=c("DocumentReference.set",t);try{return t?Object(r["fb"])(this._delegate,e,t):Object(r["fb"])(this._delegate,e)}catch(n){throw S(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?Object(r["kb"])(this._delegate,e):Object(r["kb"])(this._delegate,e,t,...n)}catch(i){throw S(i,"updateDoc()","DocumentReference.update()")}}delete(){return Object(r["B"])(this._delegate)}onSnapshot(...e){const t=_(e),n=A(e,e=>new C(this.firestore,new r["e"](this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter)));return Object(r["X"])(this._delegate,t,n)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?Object(r["N"])(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?Object(r["O"])(this._delegate):Object(r["M"])(this._delegate),t.then(e=>new C(this.firestore,new r["e"](this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter)))}withConverter(e){return new k(this.firestore,e?this._delegate.withConverter(w.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function S(e,t,n){return e.message=e.message.replace(t,n),e}function _(e){for(const t of e)if("object"===typeof t&&!f(t))return t;return{}}function A(e,t){var n,i;let r;return r=f(e[0])?e[0]:f(e[1])?e[1]:"function"===typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{r.next&&r.next(t(e))},error:null===(n=r.error)||void 0===n?void 0:n.bind(r),complete:null===(i=r.complete)||void 0===i?void 0:i.bind(r)}}class C{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new k(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Object(r["hb"])(this._delegate,e._delegate)}}class I extends C{data(e){const t=this._delegate.data(e);return Object(r["q"])(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class T{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new v(e)}where(e,t,n){try{return new T(this.firestore,Object(r["ab"])(this._delegate,Object(r["mb"])(e,t,n)))}catch(i){throw S(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new T(this.firestore,Object(r["ab"])(this._delegate,Object(r["Z"])(e,t)))}catch(n){throw S(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new T(this.firestore,Object(r["ab"])(this._delegate,Object(r["T"])(e)))}catch(t){throw S(t,"limit()","Query.limit()")}}limitToLast(e){try{return new T(this.firestore,Object(r["ab"])(this._delegate,Object(r["U"])(e)))}catch(t){throw S(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new T(this.firestore,Object(r["ab"])(this._delegate,Object(r["jb"])(...e)))}catch(t){throw S(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new T(this.firestore,Object(r["ab"])(this._delegate,Object(r["ib"])(...e)))}catch(t){throw S(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new T(this.firestore,Object(r["ab"])(this._delegate,Object(r["J"])(...e)))}catch(t){throw S(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new T(this.firestore,Object(r["ab"])(this._delegate,Object(r["I"])(...e)))}catch(t){throw S(t,"endAt()","Query.endAt()")}}isEqual(e){return Object(r["bb"])(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?Object(r["Q"])(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?Object(r["R"])(this._delegate):Object(r["P"])(this._delegate),t.then(e=>new O(this.firestore,new r["j"](this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot)))}onSnapshot(...e){const t=_(e),n=A(e,e=>new O(this.firestore,new r["j"](this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot)));return Object(r["X"])(this._delegate,t,n)}withConverter(e){return new T(this.firestore,e?this._delegate.withConverter(w.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class E{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new I(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class O{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new T(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new I(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(e=>new E(this._firestore,e))}forEach(e,t){this._delegate.forEach(n=>{e.call(t,new I(this._firestore,n))})}isEqual(e){return Object(r["hb"])(this._delegate,e._delegate)}}class P extends T{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new k(this.firestore,e):null}doc(e){try{return new k(this.firestore,void 0===e?Object(r["E"])(this._delegate):Object(r["E"])(this._delegate,e))}catch(t){throw S(t,"doc()","CollectionReference.doc()")}}add(e){return Object(r["u"])(this._delegate,e).then(e=>new k(this.firestore,e))}isEqual(e){return Object(r["cb"])(this._delegate,e._delegate)}withConverter(e){return new P(this.firestore,e?this._delegate.withConverter(w.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function L(e){return Object(r["p"])(e,r["d"])}
/**
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
 */class D{constructor(...e){this._delegate=new r["f"](...e)}static documentId(){return new D(r["o"].keyField().canonicalString())}isEqual(e){return e=Object(s["l"])(e),e instanceof r["f"]&&this._delegate._internalPath.isEqual(e._internalPath)}}
/**
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
 */class N{constructor(e){this._delegate=e}static serverTimestamp(){const e=Object(r["eb"])();return e._methodName="FieldValue.serverTimestamp",new N(e)}static delete(){const e=Object(r["C"])();return e._methodName="FieldValue.delete",new N(e)}static arrayUnion(...e){const t=Object(r["w"])(...e);return t._methodName="FieldValue.arrayUnion",new N(t)}static arrayRemove(...e){const t=Object(r["v"])(...e);return t._methodName="FieldValue.arrayRemove",new N(t)}static increment(e){const t=Object(r["S"])(e);return t._methodName="FieldValue.increment",new N(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
/**
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
 */const R={Firestore:m,GeoPoint:r["h"],Timestamp:r["k"],Blob:d,Transaction:y,WriteBatch:x,DocumentReference:k,DocumentSnapshot:C,Query:T,QueryDocumentSnapshot:I,QuerySnapshot:O,CollectionReference:P,FieldPath:D,FieldValue:N,setLogLevel:b,CACHE_SIZE_UNLIMITED:r["c"]};function M(e,t){e.INTERNAL.registerComponent(new o["a"]("firestore-compat",e=>{const n=e.getProvider("app-compat").getImmediate(),i=e.getProvider("firestore").getImmediate();return t(n,i)},"PUBLIC").setServiceProps(Object.assign({},R)))}
/**
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
 */function F(e){M(e,(e,t)=>new m(e,t,new g)),e.registerVersion(a,l)}F(i["a"])},"1a2d":function(e,t,n){var i=n("e330"),r=n("7b0b"),s=i({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(r(e),t)}},"1d80":function(e,t,n){var i=n("7234"),r=TypeError;e.exports=function(e){if(i(e))throw r("Can't call method on "+e);return e}},"1f5a":function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return Ve})),n.d(t,"c",(function(){return ht})),n.d(t,"d",(function(){return pt})),n.d(t,"e",(function(){return mt})),n.d(t,"f",(function(){return gt})),n.d(t,"g",(function(){return et})),n.d(t,"h",(function(){return ft})),n.d(t,"i",(function(){return Di})),n.d(t,"j",(function(){return qr})),n.d(t,"k",(function(){return l})),n.d(t,"l",(function(){return Ai})),n.d(t,"m",(function(){return bt})),n.d(t,"n",(function(){return xt})),n.d(t,"o",(function(){return wt})),n.d(t,"p",(function(){return k})),n.d(t,"q",(function(){return Le})),n.d(t,"r",(function(){return v})),n.d(t,"s",(function(){return Mn})),n.d(t,"t",(function(){return C})),n.d(t,"u",(function(){return ar})),n.d(t,"v",(function(){return Qi})),n.d(t,"w",(function(){return fe})),n.d(t,"y",(function(){return Xt})),n.d(t,"z",(function(){return Pn})),n.d(t,"A",(function(){return Ur})),n.d(t,"B",(function(){return Dn})),n.d(t,"C",(function(){return Ut})),n.d(t,"D",(function(){return Wt})),n.d(t,"E",(function(){return Ne})),n.d(t,"G",(function(){return Gt})),n.d(t,"H",(function(){return d})),n.d(t,"I",(function(){return Jt})),n.d(t,"J",(function(){return gn})),n.d(t,"K",(function(){return bn})),n.d(t,"L",(function(){return or})),n.d(t,"M",(function(){return de})),n.d(t,"N",(function(){return ri})),n.d(t,"O",(function(){return Kt})),n.d(t,"P",(function(){return Rt})),n.d(t,"Q",(function(){return Ei})),n.d(t,"R",(function(){return Wi})),n.d(t,"S",(function(){return rr})),n.d(t,"T",(function(){return _n})),n.d(t,"U",(function(){return Mt})),n.d(t,"V",(function(){return Oi})),n.d(t,"W",(function(){return Hi})),n.d(t,"X",(function(){return nr})),n.d(t,"Y",(function(){return en})),n.d(t,"Z",(function(){return Ht})),n.d(t,"ab",(function(){return $t})),n.d(t,"bb",(function(){return At})),n.d(t,"cb",(function(){return Nt})),n.d(t,"db",(function(){return jt})),n.d(t,"eb",(function(){return qt})),n.d(t,"fb",(function(){return Qt})),n.d(t,"gb",(function(){return Ti})),n.d(t,"hb",(function(){return Bi})),n.d(t,"ib",(function(){return er})),n.d(t,"jb",(function(){return Et})),n.d(t,"kb",(function(){return sn})),n.d(t,"lb",(function(){return on})),n.d(t,"mb",(function(){return Li})),n.d(t,"nb",(function(){return rn})),n.d(t,"ob",(function(){return tn})),n.d(t,"pb",(function(){return Yt})),n.d(t,"x",(function(){return As})),n.d(t,"F",(function(){return Ss}));var i=n("1fd5"),r=n("589b");function s(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create;var o=n("e691"),a=n("22e5");
/**
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
 */
const l={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},c={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
/**
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
 */
function h(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function u(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const d=h,f=u,p=new i["b"]("auth","Firebase",u()),g=new o["b"]("@firebase/auth");function m(e,...t){g.logLevel<=o["a"].ERROR&&g.error(`Auth (${r["SDK_VERSION"]}): ${e}`,...t)}
/**
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
 */function v(e,...t){throw w(e,...t)}function b(e,...t){return w(e,...t)}function y(e,t,n){const r=Object.assign(Object.assign({},f()),{[t]:n}),s=new i["b"]("auth","Firebase",r);return s.create(t,{appName:e.name})}function x(e,t,n){const i=n;if(!(t instanceof i))throw i.name!==t.constructor.name&&v(e,"argument-error"),y(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function w(e,...t){if("string"!==typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return p.create(e,...t)}function k(e,t,...n){if(!e)throw w(t,...n)}function S(e){const t="INTERNAL ASSERTION FAILED: "+e;throw m(t),new Error(t)}function _(e,t){e||S(t)}
/**
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
 */const A=new Map;function C(e){_(e instanceof Function,"Expected a class definition");let t=A.get(e);return t?(_(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,A.set(e,t),t)}
/**
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
 */function I(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(C);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
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
 */function T(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function E(){return"http:"===O()||"https:"===O()}function O(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
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
 */function P(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(E()||Object(i["o"])()||"connection"in navigator))||navigator.onLine}function L(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
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
 */class D{constructor(e,t){this.shortDelay=e,this.longDelay=t,_(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(i["s"])()||Object(i["u"])()}get(){return P()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
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
 */function N(e,t){_(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
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
 */class R{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void S("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void S("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void S("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
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
 */const M={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},F=new D(3e4,6e4);
/**
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
 */function j(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function V(e,t,n,r,s={}){return z(e,s,async()=>{let s={},o={};r&&("GET"===t?o=r:s={body:JSON.stringify(r)});const a=Object(i["w"])(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),R.fetch()(H(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function z(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},M),t);try{const t=new W(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw X(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw X(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw X(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw X(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw y(e,a,o);v(e,a)}}catch(s){if(s instanceof i["c"])throw s;v(e,"network-request-failed")}}async function B(e,t,n,i,r={}){const s=await V(e,t,n,i,r);return"mfaPendingCredential"in s&&v(e,"multi-factor-auth-required",{_serverResponse:s}),s}function H(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?N(e.config,r):`${e.config.apiScheme}://${r}`}class W{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(b(this.auth,"network-request-failed")),F.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function X(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=b(e,t,i);return r.customData._tokenResponse=n,r}
/**
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
 */async function U(e,t){return V(e,"POST","/v1/accounts:delete",t)}async function Y(e,t){return V(e,"POST","/v1/accounts:update",t)}async function G(e,t){return V(e,"POST","/v1/accounts:lookup",t)}
/**
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
 */function q(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
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
 */async function $(e,t=!1){const n=Object(i["l"])(e),r=await n.getIdToken(t),s=Q(r);k(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:r,authTime:q(K(s.auth_time)),issuedAtTime:q(K(s.iat)),expirationTime:q(K(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function K(e){return 1e3*Number(e)}function Q(e){var t;const[n,r,s]=e.split(".");if(void 0===n||void 0===r||void 0===s)return m("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(i["d"])(r);return e?JSON.parse(e):(m("Failed to decode base64 JWT payload"),null)}catch(o){return m("Caught error parsing JWT payload as JSON",null===(t=o)||void 0===t?void 0:t.toString()),null}}function Z(e){const t=Q(e);return k(t,"internal-error"),k("undefined"!==typeof t.exp,"internal-error"),k("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
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
 */async function J(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof i["c"]&&ee(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function ee({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
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
 */class te{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
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
 */class ne{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=q(this.lastLoginAt),this.creationTime=q(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
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
 */async function ie(e){var t;const n=e.auth,i=await e.getIdToken(),r=await J(e,G(n,{idToken:i}));k(null===r||void 0===r?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?oe(s.providerUserInfo):[],a=se(e.providerData,o),l=e.isAnonymous,c=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),h=!!l&&c,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ne(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(e,u)}async function re(e){const t=Object(i["l"])(e);await ie(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function se(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}function oe(e){return e.map(e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
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
 */async function ae(e,t){const n=await z(e,{},async()=>{const n=Object(i["w"])({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,o=H(e,r,"/v1/token","key="+s),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",R.fetch()(o,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
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
 */class le{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){k(e.idToken,"internal-error"),k("undefined"!==typeof e.idToken,"internal-error"),k("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):Z(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return k(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await ae(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new le;return n&&(k("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(k("string"===typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(k("number"===typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new le,this.toJSON())}_performRefresh(){return S("not implemented")}}
/**
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
 */function ce(e,t){k("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class he{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new te(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ne(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await J(this,this.stsTokenManager.getToken(this.auth,e));return k(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return $(this,e)}reload(){return re(this)}_assign(e){this!==e&&(k(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new he(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){k(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ie(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await J(this,U(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,o,a,l,c;const h=null!==(n=t.displayName)&&void 0!==n?n:void 0,u=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:b,emailVerified:y,isAnonymous:x,providerData:w,stsTokenManager:S}=t;k(b&&S,e,"internal-error");const _=le.fromJSON(this.name,S);k("string"===typeof b,e,"internal-error"),ce(h,e.name),ce(u,e.name),k("boolean"===typeof y,e,"internal-error"),k("boolean"===typeof x,e,"internal-error"),ce(d,e.name),ce(f,e.name),ce(p,e.name),ce(g,e.name),ce(m,e.name),ce(v,e.name);const A=new he({uid:b,auth:e,email:u,emailVerified:y,displayName:h,isAnonymous:x,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:_,createdAt:m,lastLoginAt:v});return w&&Array.isArray(w)&&(A.providerData=w.map(e=>Object.assign({},e))),g&&(A._redirectEventId=g),A}static async _fromIdTokenResponse(e,t,n=!1){const i=new le;i.updateFromServerResponse(t);const r=new he({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await ie(r),r}}
/**
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
 */class ue{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ue.type="NONE";const de=ue;
/**
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
 */function fe(e,t,n){return`firebase:${e}:${t}:${n}`}class pe{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=fe(this.userKey,i.apiKey,r),this.fullPersistenceKey=fe("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?he._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new pe(C(de),e,n);const i=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let r=i[0]||C(de);const s=fe(n,e.config.apiKey,e.name);let o=null;for(const c of t)try{const t=await c._get(s);if(t){const n=he._fromJSON(e,t);c!==r&&(o=n),r=c;break}}catch(l){}const a=i.filter(e=>e._shouldAllowMigration);return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==r)try{await e._remove(s)}catch(l){}})),new pe(r,e,n)):new pe(r,e,n)}}
/**
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
 */function ge(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ye(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(me(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(we(t))return"Blackberry";if(ke(t))return"Webos";if(ve(t))return"Safari";if((t.includes("chrome/")||be(t))&&!t.includes("edge/"))return"Chrome";if(xe(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function me(e=Object(i["m"])()){return/firefox\//i.test(e)}function ve(e=Object(i["m"])()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function be(e=Object(i["m"])()){return/crios\//i.test(e)}function ye(e=Object(i["m"])()){return/iemobile/i.test(e)}function xe(e=Object(i["m"])()){return/android/i.test(e)}function we(e=Object(i["m"])()){return/blackberry/i.test(e)}function ke(e=Object(i["m"])()){return/webos/i.test(e)}function Se(e=Object(i["m"])()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function _e(e=Object(i["m"])()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function Ae(e=Object(i["m"])()){var t;return Se(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Ce(){return Object(i["q"])()&&10===document.documentMode}function Ie(e=Object(i["m"])()){return Se(e)||xe(e)||ke(e)||we(e)||/windows phone/i.test(e)||ye(e)}function Te(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
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
 */function Ee(e,t=[]){let n;switch(e){case"Browser":n=ge(Object(i["m"])());break;case"Worker":n=`${ge(Object(i["m"])())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${r["SDK_VERSION"]}/${s}`}
/**
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
 */class Oe{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise((n,i)=>{try{const i=e(t);n(i)}catch(r){i(r)}});n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(i){n.reverse();for(const e of n)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=i)||void 0===t?void 0:t.message})}}}
/**
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
 */class Pe{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new De(this),this.idTokenSubscription=new De(this),this.beforeStateQueue=new Oe(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=p,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=C(t)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await pe.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(r){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null===i||void 0===i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(i=o.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return k(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await ie(e)}catch(n){if("auth/network-request-failed"!==(null===(t=n)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=L()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(i["l"])(e):null;return t&&k(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&k(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(C(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i["b"]("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&C(e)||this._popupRedirectResolver;k(t,this,"argument-error"),this.redirectPersistenceManager=await pe.create(this,[C(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return k(s,this,"internal-error"),s.then(()=>r(this.currentUser)),"function"===typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return k(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ee(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Le(e){return Object(i["l"])(e)}class De{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(i["h"])(e=>this.observer=e)}get next(){return k(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Ne(e,t,n){const i=Le(e);k(i._canInitEmulator,i,"emulator-config-failed"),k(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const r=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Re(t),{host:o,port:a}=Me(t),l=null===a?"":":"+a;i.config.emulator={url:`${s}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||je()}function Re(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Me(e){const t=Re(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const e=r[1];return{host:e,port:Fe(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:Fe(t)}}}function Fe(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function je(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
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
 */class Ve{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return S("not implemented")}_getIdTokenResponse(e){return S("not implemented")}_linkToIdToken(e,t){return S("not implemented")}_getReauthenticationResolver(e){return S("not implemented")}}
/**
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
 */async function ze(e,t){return V(e,"POST","/v1/accounts:resetPassword",j(e,t))}async function Be(e,t){return V(e,"POST","/v1/accounts:update",t)}async function He(e,t){return V(e,"POST","/v1/accounts:update",j(e,t))}
/**
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
 */async function We(e,t){return B(e,"POST","/v1/accounts:signInWithPassword",j(e,t))}async function Xe(e,t){return V(e,"POST","/v1/accounts:sendOobCode",j(e,t))}async function Ue(e,t){return Xe(e,t)}async function Ye(e,t){return Xe(e,t)}async function Ge(e,t){return Xe(e,t)}async function qe(e,t){return Xe(e,t)}
/**
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
 */async function $e(e,t){return B(e,"POST","/v1/accounts:signInWithEmailLink",j(e,t))}async function Ke(e,t){return B(e,"POST","/v1/accounts:signInWithEmailLink",j(e,t))}
/**
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
 */class Qe extends Ve{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Qe(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Qe(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return We(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return $e(e,{email:this._email,oobCode:this._password});default:v(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Be(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ke(e,{idToken:t,email:this._email,oobCode:this._password});default:v(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
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
 */async function Ze(e,t){return B(e,"POST","/v1/accounts:signInWithIdp",j(e,t))}
/**
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
 */const Je="http://localhost";class et extends Ve{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new et(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):v("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=s(t,["providerId","signInMethod"]);if(!n||!i)return null;const o=new et(n,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ze(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ze(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ze(e,t)}buildRequest(){const e={requestUri:Je,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=Object(i["w"])(t)}return e}}
/**
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
 */async function tt(e,t){return V(e,"POST","/v1/accounts:sendVerificationCode",j(e,t))}async function nt(e,t){return B(e,"POST","/v1/accounts:signInWithPhoneNumber",j(e,t))}async function it(e,t){const n=await B(e,"POST","/v1/accounts:signInWithPhoneNumber",j(e,t));if(n.temporaryProof)throw X(e,"account-exists-with-different-credential",n);return n}const rt={["USER_NOT_FOUND"]:"user-not-found"};async function st(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return B(e,"POST","/v1/accounts:signInWithPhoneNumber",j(e,n),rt)}
/**
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
 */class ot extends Ve{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new ot({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new ot({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return nt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return it(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return st(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new ot({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
/**
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
 */function at(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function lt(e){const t=Object(i["x"])(Object(i["k"])(e))["link"],n=t?Object(i["x"])(Object(i["k"])(t))["deep_link_id"]:null,r=Object(i["x"])(Object(i["k"])(e))["deep_link_id"],s=r?Object(i["x"])(Object(i["k"])(r))["link"]:null;return s||r||n||t||e}class ct{constructor(e){var t,n,r,s,o,a;const l=Object(i["x"])(Object(i["k"])(e)),c=null!==(t=l["apiKey"])&&void 0!==t?t:null,h=null!==(n=l["oobCode"])&&void 0!==n?n:null,u=at(null!==(r=l["mode"])&&void 0!==r?r:null);k(c&&h&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=h,this.continueUrl=null!==(s=l["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=l["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=l["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=lt(e);try{return new ct(t)}catch(n){return null}}}
/**
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
 */
class ht{constructor(){this.providerId=ht.PROVIDER_ID}static credential(e,t){return Qe._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ct.parseLink(t);return k(n,"argument-error"),Qe._fromEmailAndCode(e,n.code,n.tenantId)}}ht.PROVIDER_ID="password",ht.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ht.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
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
 */
class ut{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
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
 */class dt extends ut{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ft extends dt{static credentialFromJSON(e){const t="string"===typeof e?JSON.parse(e):e;return k("providerId"in t&&"signInMethod"in t,"argument-error"),et._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return k(e.idToken||e.accessToken,"argument-error"),et._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return ft.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ft.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:i,pendingToken:r,nonce:s,providerId:o}=e;if(!n&&!i&&!t&&!r)return null;if(!o)return null;try{return new ft(o)._credential({idToken:t,accessToken:n,nonce:s,pendingToken:r})}catch(a){return null}}}
/**
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
 */class pt extends dt{constructor(){super("facebook.com")}static credential(e){return et._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return pt.credential(e.oauthAccessToken)}catch(t){return null}}}pt.FACEBOOK_SIGN_IN_METHOD="facebook.com",pt.PROVIDER_ID="facebook.com";
/**
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
 */
class gt extends dt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return et._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return gt.credential(t,n)}catch(i){return null}}}gt.GOOGLE_SIGN_IN_METHOD="google.com",gt.PROVIDER_ID="google.com";
/**
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
 */
class mt extends dt{constructor(){super("github.com")}static credential(e){return et._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch(t){return null}}}mt.GITHUB_SIGN_IN_METHOD="github.com",mt.PROVIDER_ID="github.com";
/**
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
 */
const vt="http://localhost";class bt extends Ve{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Ze(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ze(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ze(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i,pendingToken:r}=t;return n&&i&&r&&n===i?new bt(n,r):null}static _create(e,t){return new bt(e,t)}buildRequest(){return{requestUri:vt,returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
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
 */const yt="saml.";class xt extends ut{constructor(e){k(e.startsWith(yt),"argument-error"),super(e)}static credentialFromResult(e){return xt.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return xt.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=bt.fromJSON(e);return k(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return bt._create(n,t)}catch(i){return null}}}
/**
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
 */class wt extends dt{constructor(){super("twitter.com")}static credential(e,t){return et._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return wt.credential(t,n)}catch(i){return null}}}
/**
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
 */
async function kt(e,t){return B(e,"POST","/v1/accounts:signUp",j(e,t))}
/**
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
 */wt.TWITTER_SIGN_IN_METHOD="twitter.com",wt.PROVIDER_ID="twitter.com";class St{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const r=await he._fromIdTokenResponse(e,n,i),s=_t(n),o=new St({user:r,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=_t(n);return new St({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function _t(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
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
 */async function At(e){var t;const n=Le(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new St({user:n.currentUser,providerId:null,operationType:"signIn"});const i=await kt(n,{returnSecureToken:!0}),r=await St._fromIdTokenResponse(n,"signIn",i,!0);return await n._updateCurrentUser(r.user),r}
/**
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
 */class Ct extends i["c"]{constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Ct.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Ct(e,t,n,i)}}function It(e,t,n,i){const r="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return r.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw Ct._fromErrorAndOperation(e,n,t,i);throw n})}
/**
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
 */function Tt(e){return new Set(e.map(({providerId:e})=>e).filter(e=>!!e))}
/**
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
 */async function Et(e,t){const n=Object(i["l"])(e);await Pt(!0,n,t);const{providerUserInfo:r}=await Y(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),s=Tt(r||[]);return n.providerData=n.providerData.filter(e=>s.has(e.providerId)),s.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Ot(e,t,n=!1){const i=await J(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return St._forOperation(e,"link",i)}async function Pt(e,t,n){await ie(t);const i=Tt(t.providerData),r=!1===e?"provider-already-linked":"no-such-provider";k(i.has(n)===e,t.auth,r)}
/**
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
 */async function Lt(e,t,n=!1){var i;const{auth:r}=e,s="reauthenticate";try{const i=await J(e,It(r,s,t,e),n);k(i.idToken,r,"internal-error");const o=Q(i.idToken);k(o,r,"internal-error");const{sub:a}=o;return k(e.uid===a,r,"user-mismatch"),St._forOperation(e,s,i)}catch(o){throw"auth/user-not-found"===(null===(i=o)||void 0===i?void 0:i.code)&&v(r,"user-mismatch"),o}}
/**
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
 */async function Dt(e,t,n=!1){const i="signIn",r=await It(e,i,t),s=await St._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}async function Nt(e,t){return Dt(Le(e),t)}async function Rt(e,t){const n=Object(i["l"])(e);return await Pt(!1,n,t.providerId),Ot(n,t)}async function Mt(e,t){return Lt(Object(i["l"])(e),t)}
/**
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
 */async function Ft(e,t){return B(e,"POST","/v1/accounts:signInWithCustomToken",j(e,t))}
/**
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
 */async function jt(e,t){const n=Le(e),i=await Ft(n,{token:t,returnSecureToken:!0}),r=await St._fromIdTokenResponse(n,"signIn",i);return await n._updateCurrentUser(r.user),r}
/**
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
 */class Vt{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?zt._fromServerResponse(e,t):v(e,"internal-error")}}class zt extends Vt{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new zt(t)}}
/**
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
 */function Bt(e,t,n){var i;k((null===(i=n.url)||void 0===i?void 0:i.length)>0,e,"invalid-continue-uri"),k("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(k(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(k(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
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
 */async function Ht(e,t,n){const r=Object(i["l"])(e),s={requestType:"PASSWORD_RESET",email:t};n&&Bt(r,s,n),await Ye(r,s)}async function Wt(e,t,n){await ze(Object(i["l"])(e),{oobCode:t,newPassword:n})}async function Xt(e,t){await He(Object(i["l"])(e),{oobCode:t})}async function Ut(e,t){const n=Object(i["l"])(e),r=await ze(n,{oobCode:t}),s=r.requestType;switch(k(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":k(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":k(r.mfaInfo,n,"internal-error");default:k(r.email,n,"internal-error")}let o=null;return r.mfaInfo&&(o=Vt._fromServerResponse(Le(n),r.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.newEmail:r.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.email:r.newEmail)||null,multiFactorInfo:o},operation:s}}async function Yt(e,t){const{data:n}=await Ut(Object(i["l"])(e),t);return n.email}async function Gt(e,t,n){const i=Le(e),r=await kt(i,{returnSecureToken:!0,email:t,password:n}),s=await St._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s}function qt(e,t,n){return Nt(Object(i["l"])(e),ht.credential(t,n))}
/**
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
 */async function $t(e,t,n){const r=Object(i["l"])(e),s={requestType:"EMAIL_SIGNIN",email:t};k(n.handleCodeInApp,r,"argument-error"),n&&Bt(r,s,n),await Ge(r,s)}function Kt(e,t){const n=ct.parseLink(t);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function Qt(e,t,n){const r=Object(i["l"])(e),s=ht.credentialWithLink(t,n||T());return k(s._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Nt(r,s)}
/**
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
 */async function Zt(e,t){return V(e,"POST","/v1/accounts:createAuthUri",j(e,t))}
/**
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
 */async function Jt(e,t){const n=E()?T():"http://localhost",r={identifier:t,continueUri:n},{signinMethods:s}=await Zt(Object(i["l"])(e),r);return s||[]}async function en(e,t){const n=Object(i["l"])(e),r=await e.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:r};t&&Bt(n.auth,s,t);const{email:o}=await Ue(n.auth,s);o!==e.email&&await e.reload()}async function tn(e,t,n){const r=Object(i["l"])(e),s=await e.getIdToken(),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:s,newEmail:t};n&&Bt(r.auth,o,n);const{email:a}=await qe(r.auth,o);a!==e.email&&await e.reload()}
/**
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
 */async function nn(e,t){return V(e,"POST","/v1/accounts:update",t)}
/**
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
 */async function rn(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=Object(i["l"])(e),s=await r.getIdToken(),o={idToken:s,displayName:t,photoUrl:n,returnSecureToken:!0},a=await J(r,nn(r.auth,o));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const l=r.providerData.find(({providerId:e})=>"password"===e);l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function sn(e,t){return an(Object(i["l"])(e),t,null)}function on(e,t){return an(Object(i["l"])(e),null,t)}async function an(e,t,n){const{auth:i}=e,r=await e.getIdToken(),s={idToken:r,returnSecureToken:!0};t&&(s.email=t),n&&(s.password=n);const o=await J(e,Be(i,s));await e._updateTokensIfNecessary(o,!0)}
/**
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
 */function ln(e){var t,n;if(!e)return null;const{providerId:i}=e,r=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!i&&(null===e||void 0===e?void 0:e.idToken)){const i=null===(n=null===(t=Q(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n["sign_in_provider"];if(i){const e="anonymous"!==i&&"custom"!==i?i:null;return new cn(s,e)}}if(!i)return null;switch(i){case"facebook.com":return new un(s,r);case"github.com":return new dn(s,r);case"google.com":return new fn(s,r);case"twitter.com":return new pn(s,r,e.screenName||null);case"custom":case"anonymous":return new cn(s,null);default:return new cn(s,i,r)}}class cn{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class hn extends cn{constructor(e,t,n,i){super(e,t,n),this.username=i}}class un extends cn{constructor(e,t){super(e,"facebook.com",t)}}class dn extends hn{constructor(e,t){super(e,"github.com",t,"string"===typeof(null===t||void 0===t?void 0:t.login)?null===t||void 0===t?void 0:t.login:null)}}class fn extends cn{constructor(e,t){super(e,"google.com",t)}}class pn extends hn{constructor(e,t,n){super(e,"twitter.com",t,n)}}function gn(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:ln(n)}
/**
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
 */class mn{constructor(e,t,n){this.type=e,this.credential=t,this.auth=n}static _fromIdtoken(e,t){return new mn("enroll",e,t)}static _fromMfaPendingCredential(e){return new mn("signin",e)}toJSON(){const e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,n;if(null===e||void 0===e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return mn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return mn._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
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
 */class vn{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=Le(e),i=t.customData._serverResponse,r=(i.mfaInfo||[]).map(e=>Vt._fromServerResponse(n,e));k(i.mfaPendingCredential,n,"internal-error");const s=mn._fromMfaPendingCredential(i.mfaPendingCredential);return new vn(s,r,async e=>{const r=await e._process(n,s);delete i.mfaInfo,delete i.mfaPendingCredential;const o=Object.assign(Object.assign({},i),{idToken:r.idToken,refreshToken:r.refreshToken});switch(t.operationType){case"signIn":const e=await St._fromIdTokenResponse(n,t.operationType,o);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return k(t.user,n,"internal-error"),St._forOperation(t.user,t.operationType,o);default:v(n,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function bn(e,t){var n;const r=Object(i["l"])(e),s=t;return k(t.customData.operationType,r,"argument-error"),k(null===(n=s.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,r,"argument-error"),vn._fromError(r,s)}
/**
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
 */function yn(e,t){return V(e,"POST","/v2/accounts/mfaEnrollment:start",j(e,t))}function xn(e,t){return V(e,"POST","/v2/accounts/mfaEnrollment:finalize",j(e,t))}function wn(e,t){return V(e,"POST","/v2/accounts/mfaEnrollment:withdraw",j(e,t))}class kn{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(t=>Vt._fromServerResponse(e.auth,t)))})}static _fromUser(e){return new kn(e)}async getSession(){return mn._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const n=e,i=await this.getSession(),r=await J(this.user,n._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(r),this.user.reload()}async unenroll(e){var t;const n="string"===typeof e?e:e.uid,i=await this.user.getIdToken(),r=await J(this.user,wn(this.user.auth,{idToken:i,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:e})=>e!==n),await this.user._updateTokensIfNecessary(r);try{await this.user.reload()}catch(s){if("auth/user-token-expired"!==(null===(t=s)||void 0===t?void 0:t.code))throw s}}}const Sn=new WeakMap;function _n(e){const t=Object(i["l"])(e);return Sn.has(t)||Sn.set(t,kn._fromUser(t)),Sn.get(t)}const An="__sak";
/**
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
 */class Cn{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(An,"1"),this.storage.removeItem(An),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
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
 */function In(){const e=Object(i["m"])();return ve(e)||Se(e)}const Tn=1e3,En=10;class On extends Cn{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=In()&&Te(),this.fallbackToPolling=Ie(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);Ce()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,En):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},Tn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}On.type="LOCAL";const Pn=On;
/**
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
 */class Ln extends Cn{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ln.type="SESSION";const Dn=Ln;
/**
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
 */function Nn(e){return Promise.all(e.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}
/**
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
 */class Rn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new Rn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,s=this.handlersMap[i];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map(async e=>e(t.origin,r)),a=await Nn(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
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
 */
function Mn(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(10*Math.random());return e+n}
/**
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
 */Rn.receivers=[];class Fn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise((o,a)=>{const l=Mn("",20);i.port1.start();const c=setTimeout(()=>{a(new Error("unsupported_event"))},n);s={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),r=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(c),clearTimeout(r),a(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
/**
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
 */function jn(){return window}function Vn(e){jn().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function zn(){return"undefined"!==typeof jn()["WorkerGlobalScope"]&&"function"===typeof jn()["importScripts"]}async function Bn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Hn(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Wn(){return zn()?self:null}
/**
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
 */const Xn="firebaseLocalStorageDb",Un=1,Yn="firebaseLocalStorage",Gn="fbase_key";class qn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function $n(e,t){return e.transaction([Yn],t?"readwrite":"readonly").objectStore(Yn)}function Kn(){const e=indexedDB.deleteDatabase(Xn);return new qn(e).toPromise()}function Qn(){const e=indexedDB.open(Xn,Un);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(Yn,{keyPath:Gn})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(Yn)?t(n):(n.close(),await Kn(),t(await Qn()))})})}async function Zn(e,t,n){const i=$n(e,!0).put({[Gn]:t,value:n});return new qn(i).toPromise()}async function Jn(e,t){const n=$n(e,!1).get(t),i=await new qn(n).toPromise();return void 0===i?null:i.value}function ei(e,t){const n=$n(e,!0).delete(t);return new qn(n).toPromise()}const ti=800,ni=3;class ii{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Qn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>ni)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rn._getInstance(Wn()),this.receiver._subscribe("keyChanged",async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Bn(),!this.activeServiceWorker)return;this.sender=new Fn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Hn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qn();return await Zn(e,An,"1"),await ei(e,An),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zn(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>Jn(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ei(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=$n(e,!1).getAll();return new qn(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ti)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ii.type="LOCAL";const ri=ii;
/**
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
 */function si(e,t){return V(e,"POST","/v2/accounts/mfaSignIn:start",j(e,t))}function oi(e,t){return V(e,"POST","/v2/accounts/mfaSignIn:finalize",j(e,t))}
/**
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
 */async function ai(e){return(await V(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}
/**
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
 */function li(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function ci(e){return new Promise((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=b("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",li().appendChild(i)})}function hi(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
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
 */const ui=500,di=6e4,fi=1e12;class pi{constructor(e){this.auth=e,this.counter=fi,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new gi(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||fi;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||fi;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||fi;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class gi{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i="string"===typeof e?document.getElementById(e):e;k(i,"argument-error",{appName:t}),this.container=i,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout(()=>{this.responseToken=mi(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(n){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(n){}this.isVisible&&this.execute()},di)},ui))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function mi(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<e;i++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
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
 */const vi=hi("rcb"),bi=new D(3e4,6e4),yi="https://www.google.com/recaptcha/api.js?";class xi{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(null===(e=jn().grecaptcha)||void 0===e?void 0:e.render)}load(e,t=""){return k(wi(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(jn().grecaptcha):new Promise((n,r)=>{const s=jn().setTimeout(()=>{r(b(e,"network-request-failed"))},bi.get());jn()[vi]=()=>{jn().clearTimeout(s),delete jn()[vi];const i=jn().grecaptcha;if(!i)return void r(b(e,"internal-error"));const o=i.render;i.render=(e,t)=>{const n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(i)};const o=`${yi}?${Object(i["w"])({onload:vi,render:"explicit",hl:t})}`;ci(o).catch(()=>{clearTimeout(s),r(b(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(null===(t=jn().grecaptcha)||void 0===t?void 0:t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function wi(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class ki{async load(e){return new pi(e)}clearedOneInstance(){}}
/**
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
 */const Si="recaptcha",_i={theme:"light",type:"image"};class Ai{constructor(e,t=Object.assign({},_i),n){this.parameters=t,this.type=Si,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Le(n),this.isInvisible="invisible"===this.parameters.size,k("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const i="string"===typeof e?document.getElementById(e):e;k(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new ki:new xi,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise(n=>{const i=e=>{e&&(this.tokenChangeListeners.delete(i),n(e))};this.tokenChangeListeners.add(i),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e})),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){k(!this.parameters.sitekey,this.auth,"argument-error"),k(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),k("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(e=>e(t)),"function"===typeof e)e(t);else if("string"===typeof e){const n=jn()[e];"function"===typeof n&&n(t)}}}assertNotDestroyed(){k(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){k(E()&&!zn(),this.auth,"internal-error"),await Ci(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await ai(this.auth);k(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return k(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Ci(){let e=null;return new Promise(t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()}).catch(t=>{throw e&&window.removeEventListener("load",e),t})}
/**
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
 */class Ii{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=ot._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Ti(e,t,n){const r=Le(e),s=await Pi(r,t,Object(i["l"])(n));return new Ii(s,e=>Nt(r,e))}async function Ei(e,t,n){const r=Object(i["l"])(e);await Pt(!1,r,"phone");const s=await Pi(r.auth,t,Object(i["l"])(n));return new Ii(s,e=>Rt(r,e))}async function Oi(e,t,n){const r=Object(i["l"])(e),s=await Pi(r.auth,t,Object(i["l"])(n));return new Ii(s,e=>Mt(r,e))}async function Pi(e,t,n){var i;const r=await n.verify();try{let s;if(k("string"===typeof r,e,"argument-error"),k(n.type===Si,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){k("enroll"===t.type,e,"internal-error");const n=await yn(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{k("signin"===t.type,e,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;k(n,e,"missing-multi-factor-info");const o=await si(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await tt(e,{phoneNumber:s.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}async function Li(e,t){await Ot(Object(i["l"])(e),t)}
/**
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
 */class Di{constructor(e){this.providerId=Di.PROVIDER_ID,this.auth=Le(e)}verifyPhoneNumber(e,t){return Pi(this.auth,e,Object(i["l"])(t))}static credential(e,t){return ot._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Di.credentialFromTaggedObject(t)}static credentialFromError(e){return Di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?ot._fromTokenResponse(t,n):null}}
/**
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
 */
function Ni(e,t){return t?C(t):(k(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
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
 */Di.PROVIDER_ID="phone",Di.PHONE_SIGN_IN_METHOD="phone";class Ri extends Ve{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ze(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ze(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ze(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Mi(e){return Dt(e.auth,new Ri(e),e.bypassAuthState)}function Fi(e){const{auth:t,user:n}=e;return k(n,t,"internal-error"),Lt(n,new Ri(e),e.bypassAuthState)}async function ji(e){const{auth:t,user:n}=e;return k(n,t,"internal-error"),Ot(n,new Ri(e),e.bypassAuthState)}
/**
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
 */class Vi{constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Mi;case"linkViaPopup":case"linkViaRedirect":return ji;case"reauthViaPopup":case"reauthViaRedirect":return Fi;default:v(this.auth,"internal-error")}}resolve(e){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
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
 */const zi=new D(2e3,1e4);async function Bi(e,t,n){const i=Le(e);x(e,t,ut);const r=Ni(i,n),s=new Xi(i,"signInViaPopup",t,r);return s.executeNotNull()}async function Hi(e,t,n){const r=Object(i["l"])(e);x(r.auth,t,ut);const s=Ni(r.auth,n),o=new Xi(r.auth,"reauthViaPopup",t,s,r);return o.executeNotNull()}async function Wi(e,t,n){const r=Object(i["l"])(e);x(r.auth,t,ut);const s=Ni(r.auth,n),o=new Xi(r.auth,"linkViaPopup",t,s,r);return o.executeNotNull()}class Xi extends Vi{constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,Xi.currentPopupAction&&Xi.currentPopupAction.cancel(),Xi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return k(e,this.auth,"internal-error"),e}async onExecution(){_(1===this.filter.length,"Popup operations only handle one event");const e=Mn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(b(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(b(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(b(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,zi.get())};e()}}Xi.currentPopupAction=null;
/**
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
 */
const Ui="pendingRedirect",Yi=new Map;class Gi extends Vi{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Yi.get(this.auth._key());if(!e){try{const t=await qi(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Yi.set(this.auth._key(),e)}return this.bypassAuthState||Yi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function qi(e,t){const n=Ji(t),i=Zi(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}async function $i(e,t){return Zi(e)._set(Ji(t),"true")}function Ki(){Yi.clear()}function Qi(e,t){Yi.set(e._key(),t)}function Zi(e){return C(e._redirectPersistence)}function Ji(e){return fe(Ui,e.config.apiKey,e.name)}
/**
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
 */function er(e,t,n){return tr(e,t,n)}async function tr(e,t,n){const i=Le(e);x(e,t,ut);const r=Ni(i,n);return await $i(r,i),r._openRedirect(i,t,"signInViaRedirect")}function nr(e,t,n){return ir(e,t,n)}async function ir(e,t,n){const r=Object(i["l"])(e);x(r.auth,t,ut);const s=Ni(r.auth,n);await $i(s,r.auth);const o=await lr(r);return s._openRedirect(r.auth,t,"reauthViaRedirect",o)}function rr(e,t,n){return sr(e,t,n)}async function sr(e,t,n){const r=Object(i["l"])(e);x(r.auth,t,ut);const s=Ni(r.auth,n);await Pt(!1,r,t.providerId),await $i(s,r.auth);const o=await lr(r);return s._openRedirect(r.auth,t,"linkViaRedirect",o)}async function or(e,t){return await Le(e)._initializationPromise,ar(e,t,!1)}async function ar(e,t,n=!1){const i=Le(e),r=Ni(i,t),s=new Gi(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}async function lr(e){const t=Mn(e.uid+":::");return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
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
 */const cr=6e5;class hr{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fr(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!dr(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(b(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=cr&&this.cachedEventUids.clear(),this.cachedEventUids.has(ur(e))}saveEventToCache(e){this.cachedEventUids.add(ur(e)),this.lastProcessedEventTime=Date.now()}}function ur(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function dr({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function fr(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dr(e);default:return!1}}
/**
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
 */async function pr(e,t={}){return V(e,"GET","/v1/projects",t)}
/**
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
 */const gr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mr=/^https?/;async function vr(e){if(e.config.emulator)return;const{authorizedDomains:t}=await pr(e);for(const i of t)try{if(br(i))return}catch(n){}v(e,"unauthorized-domain")}function br(e){const t=T(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!mr.test(n))return!1;if(gr.test(e))return i===e;const r=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+r+"|"+r+")$","i");return s.test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const yr=new D(3e4,6e4);function xr(){const e=jn().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function wr(e){return new Promise((t,n)=>{var i,r,s;function o(){xr(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{xr(),n(b(e,"network-request-failed"))},timeout:yr.get()})}if(null===(r=null===(i=jn().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=jn().gapi)||void 0===s?void 0:s.load)){const t=hi("iframefcb");return jn()[t]=()=>{gapi.load?o():n(b(e,"network-request-failed"))},ci("https://apis.google.com/js/api.js?onload="+t).catch(e=>n(e))}o()}}).catch(e=>{throw kr=null,e})}let kr=null;function Sr(e){return kr=kr||wr(e),kr}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const _r=new D(5e3,15e3),Ar="__/auth/iframe",Cr="emulator/auth/iframe",Ir={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Tr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Er(e){const t=e.config;k(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?N(t,Cr):`https://${e.config.authDomain}/${Ar}`,s={apiKey:t.apiKey,appName:e.name,v:r["SDK_VERSION"]},o=Tr.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${Object(i["w"])(s).slice(1)}`}async function Or(e){const t=await Sr(e),n=jn().gapi;return k(n,e,"internal-error"),t.open({where:document.body,url:Er(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ir,dontclear:!0},t=>new Promise(async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=b(e,"network-request-failed"),s=jn().setTimeout(()=>{i(r)},_r.get());function o(){jn().clearTimeout(s),n(t)}t.ping(o).then(o,()=>{i(r)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Pr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Lr=500,Dr=600,Nr="_blank",Rr="http://localhost";class Mr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Fr(e,t,n,r=Lr,s=Dr){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Pr),{width:r.toString(),height:s.toString(),top:o,left:a}),h=Object(i["m"])().toLowerCase();n&&(l=be(h)?Nr:n),me(h)&&(t=t||Rr,c.scrollbars="yes");const u=Object.entries(c).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(Ae(h)&&"_self"!==l)return jr(t||"",l),new Mr(null);const d=window.open(t||"",l,u);k(d,e,"popup-blocked");try{d.focus()}catch(f){}return new Mr(d)}function jr(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
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
 */const Vr="__/auth/handler",zr="emulator/auth/handler";function Br(e,t,n,s,o,a){k(e.config.authDomain,e,"auth-domain-config-required"),k(e.config.apiKey,e,"invalid-api-key");const l={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:r["SDK_VERSION"],eventId:o};if(t instanceof ut){t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",Object(i["p"])(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))l[e]=t}if(t instanceof dt){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(l.scopes=e.join(","))}e.tenantId&&(l.tid=e.tenantId);const c=l;for(const i of Object.keys(c))void 0===c[i]&&delete c[i];return`${Hr(e)}?${Object(i["w"])(c).slice(1)}`}function Hr({config:e}){return e.emulator?N(e,zr):`https://${e.authDomain}/${Vr}`}
/**
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
 */const Wr="webStorageSupport";class Xr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dn,this._completeRedirectFn=ar,this._overrideRedirectResult=Qi}async _openPopup(e,t,n,i){var r;_(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");const s=Br(e,t,n,T(),i);return Fr(e,s,Mn())}async _openRedirect(e,t,n,i){return await this._originValidation(e),Vn(Br(e,t,n,T(),i)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(_(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Or(e),n=new hr(e);return t.register("authEvent",t=>{k(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const i=n.onEvent(t.authEvent);return{status:i?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Wr,{type:Wr},n=>{var i;const r=null===(i=null===n||void 0===n?void 0:n[0])||void 0===i?void 0:i[Wr];void 0!==r&&t(!!r),v(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=vr(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ie()||ve()||Se()}}const Ur=Xr;class Yr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return S("unexpected MultiFactorSessionType")}}}class Gr extends Yr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Gr(e)}_finalizeEnroll(e,t,n){return xn(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return oi(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class qr{constructor(){}static assertion(e){return Gr._fromCredential(e)}}qr.FACTOR_ID="phone";var $r="@firebase/auth",Kr="0.20.7";
/**
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
 */
class Qr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){k(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
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
 */function Zr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Jr(e){Object(r["_registerComponent"])(new a["a"]("auth",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),{apiKey:s,authDomain:o}=i.options;return((t,i)=>{k(s&&!s.includes(":"),"invalid-api-key",{appName:t.name}),k(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:t.name});const r={apiKey:s,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ee(e)},a=new Pe(t,i,r);return I(a,n),a})(i,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{const i=e.getProvider("auth-internal");i.initialize()})),Object(r["_registerComponent"])(new a["a"]("auth-internal",e=>{const t=Le(e.getProvider("auth").getImmediate());return(e=>new Qr(e))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(r["registerVersion"])($r,Kr,Zr(e)),Object(r["registerVersion"])($r,Kr,"esm2017")}
/**
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
 */
/**
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
 */
function es(){return window}
/**
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
 */Jr("Browser");const ts=2e3;async function ns(e,t,n){var i;const{BuildInfo:r}=es();_(t.sessionId,"AuthEvent did not contain a session ID");const s=await as(t.sessionId),o={};return Se()?o["ibi"]=r.packageName:xe()?o["apn"]=r.packageName:v(e,"operation-not-supported-in-this-environment"),r.displayName&&(o["appDisplayName"]=r.displayName),o["sessionId"]=s,Br(e,n,t.type,void 0,null!==(i=t.eventId)&&void 0!==i?i:void 0,o)}async function is(e){const{BuildInfo:t}=es(),n={};Se()?n.iosBundleId=t.packageName:xe()?n.androidPackageName=t.packageName:v(e,"operation-not-supported-in-this-environment"),await pr(e,n)}function rs(e){const{cordova:t}=es();return new Promise(n=>{t.plugins.browsertab.isAvailable(i=>{let r=null;i?t.plugins.browsertab.openUrl(e):r=t.InAppBrowser.open(e,_e()?"_blank":"_system","location=yes"),n(r)})})}async function ss(e,t,n){const{cordova:i}=es();let r=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var e;s();const t=null===(e=i.plugins.browsertab)||void 0===e?void 0:e.close;"function"===typeof t&&t(),"function"===typeof(null===n||void 0===n?void 0:n.close)&&n.close()}function c(){a||(a=window.setTimeout(()=>{o(b(e,"redirect-cancelled-by-user"))},ts))}function h(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&c()}t.addPassiveListener(l),document.addEventListener("resume",c,!1),xe()&&document.addEventListener("visibilitychange",h,!1),r=()=>{t.removePassiveListener(l),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",h,!1),a&&window.clearTimeout(a)}})}finally{r()}}function os(e){var t,n,i,r,s,o,a,l,c,h;const u=es();k("function"===typeof(null===(t=null===u||void 0===u?void 0:u.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),k("undefined"!==typeof(null===(n=null===u||void 0===u?void 0:u.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),k("function"===typeof(null===(s=null===(r=null===(i=null===u||void 0===u?void 0:u.cordova)||void 0===i?void 0:i.plugins)||void 0===r?void 0:r.browsertab)||void 0===s?void 0:s.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),k("function"===typeof(null===(l=null===(a=null===(o=null===u||void 0===u?void 0:u.cordova)||void 0===o?void 0:o.plugins)||void 0===a?void 0:a.browsertab)||void 0===l?void 0:l.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),k("function"===typeof(null===(h=null===(c=null===u||void 0===u?void 0:u.cordova)||void 0===c?void 0:c.InAppBrowser)||void 0===h?void 0:h.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function as(e){const t=ls(e),n=await crypto.subtle.digest("SHA-256",t),i=Array.from(new Uint8Array(n));return i.map(e=>e.toString(16).padStart(2,"0")).join("")}function ls(e){if(_(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}
/**
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
 */const cs=20;class hs extends hr{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function us(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:gs(),postBody:null,tenantId:e.tenantId,error:b(e,"no-auth-event")}}function ds(e,t){return ms()._set(vs(e),t)}async function fs(e){const t=await ms()._get(vs(e));return t&&await ms()._remove(vs(e)),t}function ps(e,t){var n,i;const r=ys(t);if(r.includes("/__/auth/callback")){const t=xs(r),s=t["firebaseError"]?bs(decodeURIComponent(t["firebaseError"])):null,o=null===(i=null===(n=null===s||void 0===s?void 0:s["code"])||void 0===n?void 0:n.split("auth/"))||void 0===i?void 0:i[1],a=o?b(o):null;return a?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:a,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:r,postBody:null}}return null}function gs(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<cs;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function ms(){return C(Pn)}function vs(e){return fe("authEvent",e.config.apiKey,e.name)}function bs(e){try{return JSON.parse(e)}catch(t){return null}}function ys(e){const t=xs(e),n=t["link"]?decodeURIComponent(t["link"]):void 0,i=xs(n)["link"],r=t["deep_link_id"]?decodeURIComponent(t["deep_link_id"]):void 0,s=xs(r)["link"];return s||r||i||n||e}function xs(e){if(!(null===e||void 0===e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return Object(i["x"])(n.join("?"))}
/**
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
 */const ws=500;class ks{constructor(){this._redirectPersistence=Dn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=ar,this._overrideRedirectResult=Qi}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new hs(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){v(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,i){os(e);const r=await this._initialize(e);await r.initialized(),r.resetRedirect(),Ki(),await this._originValidation(e);const s=us(e,n,i);await ds(e,s);const o=await ns(e,s,t),a=await rs(o);return ss(e,r,a)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=is(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:i,BuildInfo:r}=es(),s=setTimeout(async()=>{await fs(e),t.onEvent(_s())},ws),o=async n=>{clearTimeout(s);const i=await fs(e);let r=null;i&&(null===n||void 0===n?void 0:n["url"])&&(r=ps(i,n["url"])),t.onEvent(r||_s())};"undefined"!==typeof n&&"function"===typeof n.subscribe&&n.subscribe(null,o);const a=i,l=r.packageName.toLowerCase()+"://";es().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(l)&&o({url:e}),"function"===typeof a)try{a(e)}catch(t){console.error(t)}}}}const Ss=ks;function _s(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:b("no-auth-event")}}
/**
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
 */function As(e,t){Le(e)._logFramework(t)}},"1fd5":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return A})),n.d(t,"c",(function(){return _})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return a})),n.d(t,"f",(function(){return T})),n.d(t,"g",(function(){return d})),n.d(t,"h",(function(){return R})),n.d(t,"i",(function(){return O})),n.d(t,"j",(function(){return c})),n.d(t,"k",(function(){return N})),n.d(t,"l",(function(){return V})),n.d(t,"m",(function(){return f})),n.d(t,"n",(function(){return m})),n.d(t,"o",(function(){return v})),n.d(t,"p",(function(){return E})),n.d(t,"q",(function(){return y})),n.d(t,"r",(function(){return w})),n.d(t,"s",(function(){return p})),n.d(t,"t",(function(){return g})),n.d(t,"u",(function(){return b})),n.d(t,"v",(function(){return x})),n.d(t,"w",(function(){return L})),n.d(t,"x",(function(){return D})),n.d(t,"y",(function(){return k}));
/**
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
 */
const i=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296===(64512&r)&&i+1<e.length&&56320===(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},r=function(e){const t=[];let n=0,i=0;while(n<e.length){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=e[n++],o=e[n++],a=e[n++],l=((7&r)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[i++]=String.fromCharCode(55296+(l>>10)),t[i++]=String.fromCharCode(56320+(1023&l))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const t=e[r],s=r+1<e.length,o=s?e[r+1]:0,a=r+2<e.length,l=a?e[r+2]:0,c=t>>2,h=(3&t)<<4|o>>4;let u=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(u=64)),i.push(n[c],n[h],n[u],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):r(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const t=n[e.charAt(r++)],s=r<e.length,o=s?n[e.charAt(r)]:0;++r;const a=r<e.length,l=a?n[e.charAt(r)]:64;++r;const c=r<e.length,h=c?n[e.charAt(r)]:64;if(++r,null==t||null==o||null==l||null==h)throw Error();const u=t<<2|o>>4;if(i.push(u),64!==l){const e=o<<4&240|l>>2;if(i.push(e),64!==h){const e=l<<6&192|h;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},o=function(e){const t=i(e);return s.encodeByteArray(t,!0)},a=function(e){return o(e).replace(/\./g,"")},l=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
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
 */function c(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&h(n)&&(e[n]=c(e[n],t[n]));return e}function h(e){return"__proto__"!==e}
/**
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
 */class u{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
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
 */function d(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",r=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:"https://securetoken.google.com/"+i,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),l="";return[a(JSON.stringify(n)),a(JSON.stringify(o)),l].join(".")}
/**
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
 */function f(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function p(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(f())}function g(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(t){return!1}}function m(){return"object"===typeof self&&self.self===self}function v(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function b(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function y(){const e=f();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function x(){return!g()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function w(){return"object"===typeof indexedDB}function k(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}})}
/**
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
 */
const S="FirebaseError";class _ extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=S,Object.setPrototypeOf(this,_.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,A.prototype.create)}}class A{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?C(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`,a=new _(i,o,n);return a}}function C(e,t){return e.replace(I,(e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`})}const I=/\{\$([^}]+)}/g;
/**
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
 */
/**
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
 */
function T(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function E(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function O(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(P(n)&&P(s)){if(!O(n,s))return!1}else if(n!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function P(e){return null!==e&&"object"===typeof e}
/**
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
 */
/**
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
 */
function L(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function D(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}}),t}function N(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
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
 */function R(e,t){const n=new M(e,t);return n.subscribe.bind(n)}class M{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=F(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=j),void 0===i.error&&(i.error=j),void 0===i.complete&&(i.complete=j);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}}),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function F(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function j(){}
/**
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
 */
/**
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
 */
function V(e){return e&&e._delegate?e._delegate:e}}).call(this,n("c8ba"))},"22e5":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));var i=n("1fd5");class r{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
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
 */const s="[DEFAULT]";
/**
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
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new i["a"];if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),i=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(l(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:i});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[r,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(r);n===e&&s.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function l(e){return"EAGER"===e.instantiationMode}
/**
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
 */class c{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},"23cb":function(e,t,n){var i=n("5926"),r=Math.max,s=Math.min;e.exports=function(e,t){var n=i(e);return n<0?r(n+t,0):s(n,t)}},"23e7":function(e,t,n){var i=n("da84"),r=n("06cf").f,s=n("9112"),o=n("cb2d"),a=n("6374"),l=n("e893"),c=n("94ca");e.exports=function(e,t){var n,h,u,d,f,p,g=e.target,m=e.global,v=e.stat;if(h=m?i:v?i[g]||a(g,{}):(i[g]||{}).prototype,h)for(u in t){if(f=t[u],e.dontCallGetSet?(p=r(h,u),d=p&&p.value):d=h[u],n=c(m?u:g+(v?".":"#")+u,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;l(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(h,u,f,e)}}},"241c":function(e,t,n){var i=n("ca84"),r=n("7839"),s=r.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return i(e,s)}},"256a":function(e,t,n){"use strict";n("5994")},"2d00":function(e,t,n){var i,r,s=n("da84"),o=n("342f"),a=s.process,l=s.Deno,c=a&&a.versions||l&&l.version,h=c&&c.v8;h&&(i=h.split("."),r=i[0]>0&&i[0]<4?1:+(i[0]+i[1])),!r&&o&&(i=o.match(/Edge\/(\d+)/),(!i||i[1]>=74)&&(i=o.match(/Chrome\/(\d+)/),i&&(r=+i[1]))),e.exports=r},"342f":function(e,t,n){var i=n("d066");e.exports=i("navigator","userAgent")||""},3511:function(e,t){var n=TypeError,i=9007199254740991;e.exports=function(e){if(e>i)throw n("Maximum allowed index exceeded");return e}},"3a34":function(e,t,n){"use strict";var i=n("83ab"),r=n("e8b5"),s=TypeError,o=Object.getOwnPropertyDescriptor,a=i&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(r(e)&&!o(e,"length").writable)throw s("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},"3a9b":function(e,t,n){var i=n("e330");e.exports=i({}.isPrototypeOf)},"40d5":function(e,t,n){var i=n("d039");e.exports=!i((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},4362:function(e,t,n){t.nextTick=function(e){var t=Array.prototype.slice.call(arguments);t.shift(),setTimeout((function(){e.apply(null,t)}),0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,i="/";t.cwd=function(){return i},t.chdir=function(t){e||(e=n("df7c")),i=e.resolve(t,i)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},"44ad":function(e,t,n){var i=n("e330"),r=n("d039"),s=n("c6b6"),o=Object,a=i("".split);e.exports=r((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"==s(e)?a(e,""):o(e)}:o},"485a":function(e,t,n){var i=n("c65b"),r=n("1626"),s=n("861d"),o=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&r(n=e.toString)&&!s(a=i(n,e)))return a;if(r(n=e.valueOf)&&!s(a=i(n,e)))return a;if("string"!==t&&r(n=e.toString)&&!s(a=i(n,e)))return a;throw o("Can't convert object to primitive value")}},"4d64":function(e,t,n){var i=n("fc6a"),r=n("23cb"),s=n("07fa"),o=function(e){return function(t,n,o){var a,l=i(t),c=s(l),h=r(o,c);if(e&&n!=n){while(c>h)if(a=l[h++],a!=a)return!0}else for(;c>h;h++)if((e||h in l)&&l[h]===n)return e||h||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},"4f60":function(e,t,n){"use strict";var i=n("7ded");n.d(t,"a",(function(){return i["a"]}));var r="firebase",s="9.10.0";
/**
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
 */
i["a"].registerVersion(r,s,"app-compat")},"50c4":function(e,t,n){var i=n("5926"),r=Math.min;e.exports=function(e){return e>0?r(i(e),9007199254740991):0}},5134:function(e,t,n){"use strict";(function(e){let i,r;function s(){var t;return void 0!==i||("undefined"!==typeof window&&window.performance?(i=!0,r=window.performance):"undefined"!==typeof e&&(null===(t=e.perf_hooks)||void 0===t?void 0:t.performance)?(i=!0,r=e.perf_hooks.performance):i=!1),i}function o(){return s()?r.now():Date.now()}n.d(t,"a",(function(){return o}))}).call(this,n("c8ba"))},5692:function(e,t,n){var i=n("c430"),r=n("c6cd");(e.exports=function(e,t){return r[e]||(r[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.25.2",mode:i?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.25.2/LICENSE",source:"https://github.com/zloirock/core-js"})},"56ef":function(e,t,n){var i=n("d066"),r=n("e330"),s=n("241c"),o=n("7418"),a=n("825a"),l=r([].concat);e.exports=i("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?l(t,n(e)):t}},"589b":function(e,t,n){"use strict";n.r(t),n.d(t,"FirebaseError",(function(){return s["c"]})),n.d(t,"SDK_VERSION",(function(){return be})),n.d(t,"_DEFAULT_ENTRY_NAME",(function(){return se})),n.d(t,"_addComponent",(function(){return ce})),n.d(t,"_addOrOverwriteComponent",(function(){return he})),n.d(t,"_apps",(function(){return ae})),n.d(t,"_clearComponents",(function(){return pe})),n.d(t,"_components",(function(){return le})),n.d(t,"_getProvider",(function(){return de})),n.d(t,"_registerComponent",(function(){return ue})),n.d(t,"_removeServiceInstance",(function(){return fe})),n.d(t,"deleteApp",(function(){return ke})),n.d(t,"getApp",(function(){return xe})),n.d(t,"getApps",(function(){return we})),n.d(t,"initializeApp",(function(){return ye})),n.d(t,"onLog",(function(){return _e})),n.d(t,"registerVersion",(function(){return Se})),n.d(t,"setLogLevel",(function(){return Ae}));var i=n("22e5"),r=n("e691"),s=n("1fd5");const o=(e,t)=>t.some(t=>e instanceof t);let a,l;function c(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function h(){return l||(l=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const u=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,g=new WeakMap;function m(e){const t=new Promise((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(k(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&u.set(t,e)}).catch(()=>{}),g.set(t,e),t}function v(e){if(d.has(e))return;const t=new Promise((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)});d.set(e,t)}let b={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return k(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function y(e){b=e(b)}function x(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?h().includes(e)?function(...t){return e.apply(S(this),t),k(u.get(this))}:function(...t){return k(e.apply(S(this),t))}:function(t,...n){const i=e.call(S(this),t,...n);return f.set(i,t.sort?t.sort():[t]),k(i)}}function w(e){return"function"===typeof e?x(e):(e instanceof IDBTransaction&&v(e),o(e,c())?new Proxy(e,b):e)}function k(e){if(e instanceof IDBRequest)return m(e);if(p.has(e))return p.get(e);const t=w(e);return t!==e&&(p.set(e,t),g.set(t,e)),t}const S=e=>g.get(e);function _(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),a=k(o);return i&&o.addEventListener("upgradeneeded",e=>{i(k(o.result),e.oldVersion,e.newVersion,k(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(e=>{s&&e.addEventListener("close",()=>s()),r&&e.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const A=["get","getKey","getAll","getAllKeys","count"],C=["put","add","delete","clear"],I=new Map;function T(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(I.get(t))return I.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=C.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!A.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return I.set(t,s),s}y(e=>({...e,get:(t,n,i)=>T(t,n)||e.get(t,n,i),has:(t,n)=>!!T(t,n)||e.has(t,n)}));
/**
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
 */
class E{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(O(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function O(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const P="@firebase/app",L="0.7.33",D=new r["b"]("@firebase/app"),N="@firebase/app-compat",R="@firebase/analytics-compat",M="@firebase/analytics",F="@firebase/app-check-compat",j="@firebase/app-check",V="@firebase/auth",z="@firebase/auth-compat",B="@firebase/database",H="@firebase/database-compat",W="@firebase/functions",X="@firebase/functions-compat",U="@firebase/installations",Y="@firebase/installations-compat",G="@firebase/messaging",q="@firebase/messaging-compat",$="@firebase/performance",K="@firebase/performance-compat",Q="@firebase/remote-config",Z="@firebase/remote-config-compat",J="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",ie="firebase",re="9.10.0",se="[DEFAULT]",oe={[P]:"fire-core",[N]:"fire-core-compat",[M]:"fire-analytics",[R]:"fire-analytics-compat",[j]:"fire-app-check",[F]:"fire-app-check-compat",[V]:"fire-auth",[z]:"fire-auth-compat",[B]:"fire-rtdb",[H]:"fire-rtdb-compat",[W]:"fire-fn",[X]:"fire-fn-compat",[U]:"fire-iid",[Y]:"fire-iid-compat",[G]:"fire-fcm",[q]:"fire-fcm-compat",[$]:"fire-perf",[K]:"fire-perf-compat",[Q]:"fire-rc",[Z]:"fire-rc-compat",[J]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[ie]:"fire-js-all"},ae=new Map,le=new Map;function ce(e,t){try{e.container.addComponent(t)}catch(n){D.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function he(e,t){e.container.addOrOverwriteComponent(t)}function ue(e){const t=e.name;if(le.has(t))return D.debug(`There were multiple attempts to register component ${t}.`),!1;le.set(t,e);for(const n of ae.values())ce(n,e);return!0}function de(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function fe(e,t,n=se){de(e,t).clearInstance(n)}function pe(){le.clear()}
/**
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
 */const ge={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},me=new s["b"]("app","Firebase",ge);
/**
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
 */
class ve{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw me.create("app-deleted",{appName:this._name})}}
/**
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
 */const be=re;function ye(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:se,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!==typeof r||!r)throw me.create("bad-app-name",{appName:String(r)});const o=ae.get(r);if(o){if(Object(s["i"])(e,o.options)&&Object(s["i"])(n,o.config))return o;throw me.create("duplicate-app",{appName:r})}const a=new i["b"](r);for(const i of le.values())a.addComponent(i);const l=new ve(e,n,a);return ae.set(r,l),l}function xe(e=se){const t=ae.get(e);if(!t)throw me.create("no-app",{appName:e});return t}function we(){return Array.from(ae.values())}async function ke(e){const t=e.name;ae.has(t)&&(ae.delete(t),await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function Se(e,t,n){var r;let s=null!==(r=oe[e])&&void 0!==r?r:e;n&&(s+="-"+n);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void D.warn(e.join(" "))}ue(new i["a"](s+"-version",()=>({library:s,version:t}),"VERSION"))}function _e(e,t){if(null!==e&&"function"!==typeof e)throw me.create("invalid-log-argument");Object(r["d"])(e,t)}function Ae(e){Object(r["c"])(e)}
/**
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
 */const Ce="firebase-heartbeat-database",Ie=1,Te="firebase-heartbeat-store";let Ee=null;function Oe(){return Ee||(Ee=_(Ce,Ie,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Te)}}}).catch(e=>{throw me.create("idb-open",{originalErrorMessage:e.message})})),Ee}async function Pe(e){var t;try{const t=await Oe();return t.transaction(Te).objectStore(Te).get(De(e))}catch(n){if(n instanceof s["c"])D.warn(n.message);else{const e=me.create("idb-get",{originalErrorMessage:null===(t=n)||void 0===t?void 0:t.message});D.warn(e.message)}}}async function Le(e,t){var n;try{const n=await Oe(),i=n.transaction(Te,"readwrite"),r=i.objectStore(Te);return await r.put(t,De(e)),i.done}catch(i){if(i instanceof s["c"])D.warn(i.message);else{const e=me.create("idb-set",{originalErrorMessage:null===(n=i)||void 0===n?void 0:n.message});D.warn(e.message)}}}function De(e){return`${e.name}!${e.options.appId}`}
/**
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
 */const Ne=1024,Re=2592e6;class Me{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ve(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Fe();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some(e=>e.date===n))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Re}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Fe(),{heartbeatsToSend:t,unsentEntries:n}=je(this._heartbeatsCache.heartbeats),i=Object(s["e"])(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Fe(){const e=new Date;return e.toISOString().substring(0,10)}function je(e,t=Ne){const n=[];let i=e.slice();for(const r of e){const e=n.find(e=>e.agent===r.agent);if(e){if(e.dates.push(r.date),ze(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ze(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Ve{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(s["r"])()&&Object(s["y"])().then(()=>!0).catch(()=>!1)}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Pe(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Le(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Le(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function ze(e){return Object(s["e"])(JSON.stringify({version:2,heartbeats:e})).length}
/**
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
 */function Be(e){ue(new i["a"]("platform-logger",e=>new E(e),"PRIVATE")),ue(new i["a"]("heartbeat",e=>new Me(e),"PRIVATE")),Se(P,L,e),Se(P,L,"esm2017"),Se("fire-js","")}Be("")},5926:function(e,t,n){var i=n("b42e");e.exports=function(e){var t=+e;return t!==t||0===t?0:i(t)}},5994:function(e,t,n){"use strict";(function(e){var t=n("7ded"),i=n("1f5a"),r=n("22e5"),s=n("1fd5"),o="@firebase/auth-compat",a="0.2.20";
/**
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
 */
const l=1e3;function c(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function h(){return"http:"===c()||"https:"===c()}function u(e=Object(s["m"])()){return!("file:"!==c()&&"ionic:"!==c()&&"capacitor:"!==c()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function d(){return Object(s["u"])()||Object(s["t"])()}function f(){return Object(s["q"])()&&11===(null===document||void 0===document?void 0:document.documentMode)}function p(e=Object(s["m"])()){return/Edge\/\d+/.test(e)}function g(e=Object(s["m"])()){return f()||p(e)}function m(){try{const e=self.localStorage,t=i["s"]();if(e)return e["setItem"](t,"1"),e["removeItem"](t),!g()||Object(s["r"])()}catch(e){return v()&&Object(s["r"])()}return!1}function v(){return"undefined"!==typeof e&&"WorkerGlobalScope"in e&&"importScripts"in e}function b(){return(h()||Object(s["o"])()||u())&&!d()&&m()&&!v()}function y(){return u()&&"undefined"!==typeof document}async function x(){return!!y()&&new Promise(e=>{const t=setTimeout(()=>{e(!1)},l);document.addEventListener("deviceready",()=>{clearTimeout(t),e(!0)})})}function w(){return"undefined"!==typeof window?window:null}
/**
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
 */const k={LOCAL:"local",NONE:"none",SESSION:"session"},S=i["p"],_="persistence";function A(e,t){S(Object.values(k).includes(t),e,"invalid-persistence-type"),Object(s["u"])()?S(t!==k.SESSION,e,"unsupported-persistence-type"):Object(s["t"])()?S(t===k.NONE,e,"unsupported-persistence-type"):v()?S(t===k.NONE||t===k.LOCAL&&Object(s["r"])(),e,"unsupported-persistence-type"):S(t===k.NONE||m(),e,"unsupported-persistence-type")}async function C(e){await e._initializationPromise;const t=T(),n=i["w"](_,e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function I(e,t){const n=T();if(!n)return[];const r=i["w"](_,e,t),s=n.getItem(r);switch(s){case k.NONE:return[i["M"]];case k.LOCAL:return[i["N"],i["B"]];case k.SESSION:return[i["B"]];default:return[]}}function T(){var e;try{return(null===(e=w())||void 0===e?void 0:e.sessionStorage)||null}catch(t){return null}}
/**
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
 */const E=i["p"];class O{constructor(){this.browserResolver=i["t"](i["A"]),this.cordovaResolver=i["t"](i["F"]),this.underlyingResolver=null,this._redirectPersistence=i["B"],this._completeRedirectFn=i["u"],this._overrideRedirectResult=i["v"]}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,i)}async _openRedirect(e,t,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return y()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return E(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await x();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
/**
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
 */function P(e){return e.unwrap()}function L(e){return e.wrapped()}
/**
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
 */function D(e){return R(e)}function N(e,t){var n,r;const s=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===(null===(r=t)||void 0===r?void 0:r.code)){const n=t;n.resolver=new j(e,i["K"](e,t))}else if(s){const e=R(t),n=t;e&&(n.credential=e,n.tenantId=s.tenantId||void 0,n.email=s.email||void 0,n.phoneNumber=s.phoneNumber||void 0)}}function R(e){const{_tokenResponse:t}=e instanceof s["c"]?e.customData:e;if(!t)return null;if(!(e instanceof s["c"])&&"temporaryProof"in t&&"phoneNumber"in t)return i["i"].credentialFromResult(e);const n=t.providerId;if(!n||n===i["k"].PASSWORD)return null;let r;switch(n){case i["k"].GOOGLE:r=i["f"];break;case i["k"].FACEBOOK:r=i["d"];break;case i["k"].GITHUB:r=i["e"];break;case i["k"].TWITTER:r=i["o"];break;default:const{oauthIdToken:e,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=t;return s||o||e||a?a?n.startsWith("saml.")?i["m"]._create(n,a):i["g"]._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:e,accessToken:s}):new i["h"](n).credential({idToken:e,accessToken:s,rawNonce:l}):null}return e instanceof s["c"]?r.credentialFromError(e):r.credentialFromResult(e)}function M(e,t){return t.catch(t=>{throw t instanceof s["c"]&&N(e,t),t}).then(e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:D(e),additionalUserInfo:i["J"](e),user:V.getOrCreate(n)}})}async function F(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>M(e,n.confirm(t))}}class j{constructor(e,t){this.resolver=t,this.auth=L(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return M(P(this.auth),this.resolver.resolveSignIn(e))}}
/**
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
 */class V{constructor(e){this._delegate=e,this.multiFactor=i["T"](e)}static getOrCreate(e){return V.USER_MAP.has(e)||V.USER_MAP.set(e,new V(e)),V.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return M(this.auth,i["P"](this._delegate,e))}async linkWithPhoneNumber(e,t){return F(this.auth,i["Q"](this._delegate,e,t))}async linkWithPopup(e){return M(this.auth,i["R"](this._delegate,e,O))}async linkWithRedirect(e){return await C(i["q"](this.auth)),i["S"](this._delegate,e,O)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return M(this.auth,i["U"](this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return F(this.auth,i["V"](this._delegate,e,t))}reauthenticateWithPopup(e){return M(this.auth,i["W"](this._delegate,e,O))}async reauthenticateWithRedirect(e){return await C(i["q"](this.auth)),i["X"](this._delegate,e,O)}sendEmailVerification(e){return i["Y"](this._delegate,e)}async unlink(e){return await i["jb"](this._delegate,e),this}updateEmail(e){return i["kb"](this._delegate,e)}updatePassword(e){return i["lb"](this._delegate,e)}updatePhoneNumber(e){return i["mb"](this._delegate,e)}updateProfile(e){return i["nb"](this._delegate,e)}verifyBeforeUpdateEmail(e,t){return i["ob"](this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}V.USER_MAP=new WeakMap;
/**
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
 */
const z=i["p"];class B{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;z(n,"invalid-api-key",{appName:e.name}),z(n,"invalid-api-key",{appName:e.name});const r="undefined"!==typeof window?O:void 0;this._delegate=t.initialize({options:{persistence:W(n,e.name),popupRedirectResolver:r}}),this._delegate._updateErrorMap(i["H"]),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?V.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){i["E"](this._delegate,e,t)}applyActionCode(e){return i["y"](this._delegate,e)}checkActionCode(e){return i["C"](this._delegate,e)}confirmPasswordReset(e,t){return i["D"](this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return M(this._delegate,i["G"](this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return i["I"](this._delegate,e)}isSignInWithEmailLink(e){return i["O"](this._delegate,e)}async getRedirectResult(){z(b(),this._delegate,"operation-not-supported-in-this-environment");const e=await i["L"](this._delegate,O);return e?M(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){i["x"](this._delegate,e)}onAuthStateChanged(e,t,n){const{next:i,error:r,complete:s}=H(e,t,n);return this._delegate.onAuthStateChanged(i,r,s)}onIdTokenChanged(e,t,n){const{next:i,error:r,complete:s}=H(e,t,n);return this._delegate.onIdTokenChanged(i,r,s)}sendSignInLinkToEmail(e,t){return i["ab"](this._delegate,e,t)}sendPasswordResetEmail(e,t){return i["Z"](this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(A(this._delegate,e),e){case k.SESSION:t=i["B"];break;case k.LOCAL:const e=await i["t"](i["N"])._isAvailable();t=e?i["N"]:i["z"];break;case k.NONE:t=i["M"];break;default:return i["r"]("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return M(this._delegate,i["bb"](this._delegate))}signInWithCredential(e){return M(this._delegate,i["cb"](this._delegate,e))}signInWithCustomToken(e){return M(this._delegate,i["db"](this._delegate,e))}signInWithEmailAndPassword(e,t){return M(this._delegate,i["eb"](this._delegate,e,t))}signInWithEmailLink(e,t){return M(this._delegate,i["fb"](this._delegate,e,t))}signInWithPhoneNumber(e,t){return F(this._delegate,i["gb"](this._delegate,e,t))}async signInWithPopup(e){return z(b(),this._delegate,"operation-not-supported-in-this-environment"),M(this._delegate,i["hb"](this._delegate,e,O))}async signInWithRedirect(e){return z(b(),this._delegate,"operation-not-supported-in-this-environment"),await C(this._delegate),i["ib"](this._delegate,e,O)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return i["pb"](this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function H(e,t,n){let i=e;"function"!==typeof e&&({next:i,error:t,complete:n}=e);const r=i,s=e=>r(e&&V.getOrCreate(e));return{next:s,error:t,complete:n}}function W(e,t){const n=I(e,t);if("undefined"===typeof self||n.includes(i["N"])||n.push(i["N"]),"undefined"!==typeof window)for(const r of[i["z"],i["B"]])n.includes(r)||n.push(r);return n.includes(i["M"])||n.push(i["M"]),n}
/**
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
 */B.Persistence=k;class X{constructor(){this.providerId="phone",this._delegate=new i["i"](P(t["a"].auth()))}static credential(e,t){return i["i"].credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}X.PHONE_SIGN_IN_METHOD=i["i"].PHONE_SIGN_IN_METHOD,X.PROVIDER_ID=i["i"].PROVIDER_ID;
/**
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
 */
const U=i["p"];class Y{constructor(e,n,r=t["a"].app()){var s;U(null===(s=r.options)||void 0===s?void 0:s.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new i["l"](e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
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
 */const G="auth-compat";function q(e){e.INTERNAL.registerComponent(new r["a"](G,e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new B(t,n)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:i["a"].EMAIL_SIGNIN,PASSWORD_RESET:i["a"].PASSWORD_RESET,RECOVER_EMAIL:i["a"].RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:i["a"].REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:i["a"].VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:i["a"].VERIFY_EMAIL}},EmailAuthProvider:i["c"],FacebookAuthProvider:i["d"],GithubAuthProvider:i["e"],GoogleAuthProvider:i["f"],OAuthProvider:i["h"],SAMLAuthProvider:i["n"],PhoneAuthProvider:X,PhoneMultiFactorGenerator:i["j"],RecaptchaVerifier:Y,TwitterAuthProvider:i["o"],Auth:B,AuthCredential:i["b"],Error:s["c"]}).setInstantiationMode("LAZY").setMultipleInstances(!1)),e.registerVersion(o,a)}q(t["a"])}).call(this,n("c8ba"))},"59ed":function(e,t,n){var i=n("1626"),r=n("0d51"),s=TypeError;e.exports=function(e){if(i(e))return e;throw s(r(e)+" is not a function")}},"5c6c":function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"5e77":function(e,t,n){var i=n("83ab"),r=n("1a2d"),s=Function.prototype,o=i&&Object.getOwnPropertyDescriptor,a=r(s,"name"),l=a&&"something"===function(){}.name,c=a&&(!i||i&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:l,CONFIGURABLE:c}},6374:function(e,t,n){var i=n("da84"),r=Object.defineProperty;e.exports=function(e,t){try{r(i,e,{value:t,configurable:!0,writable:!0})}catch(n){i[e]=t}return t}},6605:function(e,t,n){"use strict";n.d(t,"a",(function(){return tt})),n.d(t,"b",(function(){return V}));var i=n("7a23");n("abc5");n("5134");
/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const r="undefined"!==typeof window;function s(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const o=Object.assign;function a(e,t){const n={};for(const i in t){const r=t[i];n[i]=c(r)?r.map(e):e(r)}return n}const l=()=>{},c=Array.isArray;const h=/\/$/,u=e=>e.replace(h,"");function d(e,t,n="/"){let i,r={},s="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=t.slice(0,l),s=t.slice(l+1,a>-1?a:t.length),r=e(s)),a>-1&&(i=i||t.slice(0,a),o=t.slice(a,t.length)),i=x(null!=i?i:t,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function f(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function p(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function g(e,t,n){const i=t.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&m(t.matched[i],n.matched[r])&&v(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function m(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function v(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!b(e[n],t[n]))return!1;return!0}function b(e,t){return c(e)?y(e,t):c(t)?y(t,e):e===t}function y(e,t){return c(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):1===e.length&&e[0]===t}function x(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),i=e.split("/");let r,s,o=n.length-1;for(r=0;r<i.length;r++)if(s=i[r],"."!==s){if(".."!==s)break;o>1&&o--}return n.slice(0,o).join("/")+"/"+i.slice(r-(r===i.length?1:0)).join("/")}var w,k;(function(e){e["pop"]="pop",e["push"]="push"})(w||(w={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(k||(k={}));function S(e){if(!e)if(r){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),u(e)}const _=/^[^#]+#/;function A(e,t){return e.replace(_,"#")+t}function C(e,t){const n=document.documentElement.getBoundingClientRect(),i=e.getBoundingClientRect();return{behavior:t.behavior,left:i.left-n.left-(t.left||0),top:i.top-n.top-(t.top||0)}}const I=()=>({left:window.pageXOffset,top:window.pageYOffset});function T(e){let t;if("el"in e){const n=e.el,i="string"===typeof n&&n.startsWith("#");0;const r="string"===typeof n?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=C(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function E(e,t){const n=history.state?history.state.position-t:-1;return n+e}const O=new Map;function P(e,t){O.set(e,t)}function L(e){const t=O.get(e);return O.delete(e),t}let D=()=>location.protocol+"//"+location.host;function N(e,t){const{pathname:n,search:i,hash:r}=t,s=e.indexOf("#");if(s>-1){let t=r.includes(e.slice(s))?e.slice(s).length:1,n=r.slice(t);return"/"!==n[0]&&(n="/"+n),p(n,"")}const o=p(n,e);return o+i+r}function R(e,t,n,i){let r=[],s=[],a=null;const l=({state:s})=>{const o=N(e,location),l=n.value,c=t.value;let h=0;if(s){if(n.value=o,t.value=s,a&&a===l)return void(a=null);h=c?s.position-c.position:0}else i(o);r.forEach(e=>{e(n.value,l,{delta:h,type:w.pop,direction:h?h>0?k.forward:k.back:k.unknown})})};function c(){a=n.value}function h(e){r.push(e);const t=()=>{const t=r.indexOf(e);t>-1&&r.splice(t,1)};return s.push(t),t}function u(){const{history:e}=window;e.state&&e.replaceState(o({},e.state,{scroll:I()}),"")}function d(){for(const e of s)e();s=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:h,destroy:d}}function M(e,t,n,i=!1,r=!1){return{back:e,current:t,forward:n,replaced:i,position:window.history.length,scroll:r?I():null}}function F(e){const{history:t,location:n}=window,i={value:N(e,n)},r={value:t.state};function s(i,s,o){const a=e.indexOf("#"),l=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+i:D()+e+i;try{t[o?"replaceState":"pushState"](s,"",l),r.value=s}catch(c){console.error(c),n[o?"replace":"assign"](l)}}function a(e,n){const a=o({},t.state,M(r.value.back,e,r.value.forward,!0),n,{position:r.value.position});s(e,a,!0),i.value=e}function l(e,n){const a=o({},r.value,t.state,{forward:e,scroll:I()});s(a.current,a,!0);const l=o({},M(i.value,e,null),{position:a.position+1},n);s(e,l,!1),i.value=e}return r.value||s(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:i,state:r,push:l,replace:a}}function j(e){e=S(e);const t=F(e),n=R(e,t.state,t.location,t.replace);function i(e,t=!0){t||n.pauseListeners(),history.go(e)}const r=o({location:"",base:e,go:i,createHref:A.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function V(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),j(e)}function z(e){return"string"===typeof e||e&&"object"===typeof e}function B(e){return"string"===typeof e||"symbol"===typeof e}const H={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},W=Symbol("");var X;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(X||(X={}));function U(e,t){return o(new Error,{type:e,[W]:!0},t)}function Y(e,t){return e instanceof Error&&W in e&&(null==t||!!(e.type&t))}const G="[^/]+?",q={sensitive:!1,strict:!1,start:!0,end:!0},$=/[.+*?^${}()[\]/\\]/g;function K(e,t){const n=o({},q,t),i=[];let r=n.start?"^":"";const s=[];for(const o of e){const e=o.length?[]:[90];n.strict&&!o.length&&(r+="/");for(let t=0;t<o.length;t++){const i=o[t];let a=40+(n.sensitive?.25:0);if(0===i.type)t||(r+="/"),r+=i.value.replace($,"\\$&"),a+=40;else if(1===i.type){const{value:e,repeatable:n,optional:l,regexp:c}=i;s.push({name:e,repeatable:n,optional:l});const h=c||G;if(h!==G){a+=10;try{new RegExp(`(${h})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${e}" (${h}): `+u.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;t||(d=l&&o.length<2?`(?:/${d})`:"/"+d),l&&(d+="?"),r+=d,a+=20,l&&(a+=-8),n&&(a+=-20),".*"===h&&(a+=-50)}e.push(a)}i.push(e)}if(n.strict&&n.end){const e=i.length-1;i[e][i[e].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const a=new RegExp(r,n.sensitive?"":"i");function l(e){const t=e.match(a),n={};if(!t)return null;for(let i=1;i<t.length;i++){const e=t[i]||"",r=s[i-1];n[r.name]=e&&r.repeatable?e.split("/"):e}return n}function h(t){let n="",i=!1;for(const r of e){i&&n.endsWith("/")||(n+="/"),i=!1;for(const e of r)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,l=s in t?t[s]:"";if(c(l)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const h=c(l)?l.join("/"):l;if(!h){if(!a)throw new Error(`Missing required param "${s}"`);r.length<2&&(n.endsWith("/")?n=n.slice(0,-1):i=!0)}n+=h}}return n||"/"}return{re:a,score:i,keys:s,parse:l,stringify:h}}function Q(e,t){let n=0;while(n<e.length&&n<t.length){const i=t[n]-e[n];if(i)return i;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function Z(e,t){let n=0;const i=e.score,r=t.score;while(n<i.length&&n<r.length){const e=Q(i[n],r[n]);if(e)return e;n++}if(1===Math.abs(r.length-i.length)){if(J(i))return 1;if(J(r))return-1}return r.length-i.length}function J(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const ee={type:0,value:""},te=/[a-zA-Z0-9_]/;function ne(e){if(!e)return[[]];if("/"===e)return[[ee]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${c}": ${e}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a,l=0,c="",h="";function u(){c&&(0===n?s.push({type:0,value:c}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:h,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),c="")}function d(){c+=a}while(l<e.length)if(a=e[l++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(c&&u(),o()):":"===a?(u(),n=1):d();break;case 4:d(),n=i;break;case 1:"("===a?n=2:te.test(a)?d():(u(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--);break;case 2:")"===a?"\\"==h[h.length-1]?h=h.slice(0,-1)+a:n=3:h+=a;break;case 3:u(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--,h="";break;default:t("Unknown state");break}else i=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${c}"`),u(),o(),r}function ie(e,t,n){const i=K(ne(e.path),n);const r=o(i,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf===!t.record.aliasOf&&t.children.push(r),r}function re(e,t){const n=[],i=new Map;function r(e){return i.get(e)}function s(e,n,i){const r=!i,c=oe(e);c.aliasOf=i&&i.record;const u=he(t,e),d=[c];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)d.push(o({},c,{components:i?i.record.components:c.components,path:e,aliasOf:i?i.record:c}))}let f,p;for(const t of d){const{path:o}=t;if(n&&"/"!==o[0]){const e=n.record.path,i="/"===e[e.length-1]?"":"/";t.path=n.record.path+(o&&i+o)}if(f=ie(t,n,u),i?i.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),r&&e.name&&!le(f)&&a(e.name)),c.children){const e=c.children;for(let t=0;t<e.length;t++)s(e[t],f,i&&i.children[t])}i=i||f,h(f)}return p?()=>{a(p)}:l}function a(e){if(B(e)){const t=i.get(e);t&&(i.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(a),t.alias.forEach(a))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&i.delete(e.record.name),e.children.forEach(a),e.alias.forEach(a))}}function c(){return n}function h(e){let t=0;while(t<n.length&&Z(e,n[t])>=0&&(e.record.path!==n[t].record.path||!ue(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!le(e)&&i.set(e.record.name,e)}function u(e,t){let r,s,a,l={};if("name"in e&&e.name){if(r=i.get(e.name),!r)throw U(1,{location:e});0,a=r.record.name,l=o(se(t.params,r.keys.filter(e=>!e.optional).map(e=>e.name)),e.params&&se(e.params,r.keys.map(e=>e.name))),s=r.stringify(l)}else if("path"in e)s=e.path,r=n.find(e=>e.re.test(s)),r&&(l=r.parse(s),a=r.record.name);else{if(r=t.name?i.get(t.name):n.find(e=>e.re.test(t.path)),!r)throw U(1,{location:e,currentLocation:t});a=r.record.name,l=o({},t.params,e.params),s=r.stringify(l)}const c=[];let h=r;while(h)c.unshift(h.record),h=h.parent;return{name:a,path:s,params:l,matched:c,meta:ce(c)}}return t=he({strict:!1,end:!0,sensitive:!1},t),e.forEach(e=>s(e)),{addRoute:s,resolve:u,removeRoute:a,getRoutes:c,getRecordMatcher:r}}function se(e,t){const n={};for(const i of t)i in e&&(n[i]=e[i]);return n}function oe(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ae(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function ae(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const i in e.components)t[i]="boolean"===typeof n?n:n[i];return t}function le(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ce(e){return e.reduce((e,t)=>o(e,t.meta),{})}function he(e,t){const n={};for(const i in e)n[i]=i in t?t[i]:e[i];return n}function ue(e,t){return t.children.some(t=>t===e||ue(e,t))}const de=/#/g,fe=/&/g,pe=/\//g,ge=/=/g,me=/\?/g,ve=/\+/g,be=/%5B/g,ye=/%5D/g,xe=/%5E/g,we=/%60/g,ke=/%7B/g,Se=/%7C/g,_e=/%7D/g,Ae=/%20/g;function Ce(e){return encodeURI(""+e).replace(Se,"|").replace(be,"[").replace(ye,"]")}function Ie(e){return Ce(e).replace(ke,"{").replace(_e,"}").replace(xe,"^")}function Te(e){return Ce(e).replace(ve,"%2B").replace(Ae,"+").replace(de,"%23").replace(fe,"%26").replace(we,"`").replace(ke,"{").replace(_e,"}").replace(xe,"^")}function Ee(e){return Te(e).replace(ge,"%3D")}function Oe(e){return Ce(e).replace(de,"%23").replace(me,"%3F")}function Pe(e){return null==e?"":Oe(e).replace(pe,"%2F")}function Le(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function De(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],i=(n?e.slice(1):e).split("&");for(let r=0;r<i.length;++r){const e=i[r].replace(ve," "),n=e.indexOf("="),s=Le(n<0?e:e.slice(0,n)),o=n<0?null:Le(e.slice(n+1));if(s in t){let e=t[s];c(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function Ne(e){let t="";for(let n in e){const i=e[n];if(n=Ee(n),null==i){void 0!==i&&(t+=(t.length?"&":"")+n);continue}const r=c(i)?i.map(e=>e&&Te(e)):[i&&Te(i)];r.forEach(e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))})}return t}function Re(e){const t={};for(const n in e){const i=e[n];void 0!==i&&(t[n]=c(i)?i.map(e=>null==e?null:""+e):null==i?i:""+i)}return t}const Me=Symbol(""),Fe=Symbol(""),je=Symbol(""),Ve=Symbol(""),ze=Symbol("");function Be(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function He(e,t,n,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=e=>{!1===e?a(U(4,{from:n,to:t})):e instanceof Error?a(e):z(e)?a(U(2,{from:t,to:e})):(s&&i.enterCallbacks[r]===s&&"function"===typeof e&&s.push(e),o())},c=e.call(i&&i.instances[r],t,n,l);let h=Promise.resolve(c);e.length<3&&(h=h.then(l)),h.catch(e=>a(e))})}function We(e,t,n,i){const r=[];for(const o of e){0;for(const e in o.components){let a=o.components[e];if("beforeRouteEnter"===t||o.instances[e])if(Xe(a)){const s=a.__vccOpts||a,l=s[t];l&&r.push(He(l,n,i,o,e))}else{let l=a();0,r.push(()=>l.then(r=>{if(!r)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${o.path}"`));const a=s(r)?r.default:r;o.components[e]=a;const l=a.__vccOpts||a,c=l[t];return c&&He(c,n,i,o,e)()}))}}}return r}function Xe(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function Ue(e){const t=Object(i["inject"])(je),n=Object(i["inject"])(Ve),r=Object(i["computed"])(()=>t.resolve(Object(i["unref"])(e.to))),s=Object(i["computed"])(()=>{const{matched:e}=r.value,{length:t}=e,i=e[t-1],s=n.matched;if(!i||!s.length)return-1;const o=s.findIndex(m.bind(null,i));if(o>-1)return o;const a=Ke(e[t-2]);return t>1&&Ke(i)===a&&s[s.length-1].path!==a?s.findIndex(m.bind(null,e[t-2])):o}),o=Object(i["computed"])(()=>s.value>-1&&$e(n.params,r.value.params)),a=Object(i["computed"])(()=>s.value>-1&&s.value===n.matched.length-1&&v(n.params,r.value.params));function c(n={}){return qe(n)?t[Object(i["unref"])(e.replace)?"replace":"push"](Object(i["unref"])(e.to)).catch(l):Promise.resolve()}return{route:r,href:Object(i["computed"])(()=>r.value.href),isActive:o,isExactActive:a,navigate:c}}const Ye=Object(i["defineComponent"])({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ue,setup(e,{slots:t}){const n=Object(i["reactive"])(Ue(e)),{options:r}=Object(i["inject"])(je),s=Object(i["computed"])(()=>({[Qe(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Qe(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&t.default(n);return e.custom?r:Object(i["h"])("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),Ge=Ye;function qe(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function $e(e,t){for(const n in t){const i=t[n],r=e[n];if("string"===typeof i){if(i!==r)return!1}else if(!c(r)||r.length!==i.length||i.some((e,t)=>e!==r[t]))return!1}return!0}function Ke(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Qe=(e,t,n)=>null!=e?e:null!=t?t:n,Ze=Object(i["defineComponent"])({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Object(i["inject"])(ze),s=Object(i["computed"])(()=>e.route||r.value),a=Object(i["inject"])(Fe,0),l=Object(i["computed"])(()=>{let e=Object(i["unref"])(a);const{matched:t}=s.value;let n;while((n=t[e])&&!n.components)e++;return e}),c=Object(i["computed"])(()=>s.value.matched[l.value]);Object(i["provide"])(Fe,Object(i["computed"])(()=>l.value+1)),Object(i["provide"])(Me,c),Object(i["provide"])(ze,s);const h=Object(i["ref"])();return Object(i["watch"])(()=>[h.value,c.value,e.name],([e,t,n],[i,r,s])=>{t&&(t.instances[n]=e,r&&r!==t&&e&&e===i&&(t.leaveGuards.size||(t.leaveGuards=r.leaveGuards),t.updateGuards.size||(t.updateGuards=r.updateGuards))),!e||!t||r&&m(t,r)&&i||(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:"post"}),()=>{const r=s.value,a=e.name,l=c.value,u=l&&l.components[a];if(!u)return Je(n.default,{Component:u,route:r});const d=l.props[a],f=d?!0===d?r.params:"function"===typeof d?d(r):d:null,p=e=>{e.component.isUnmounted&&(l.instances[a]=null)},g=Object(i["h"])(u,o({},f,t,{onVnodeUnmounted:p,ref:h}));return Je(n.default,{Component:g,route:r})||g}}});function Je(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const et=Ze;function tt(e){const t=re(e.routes,e),n=e.parseQuery||De,s=e.stringifyQuery||Ne,h=e.history;const u=Be(),p=Be(),m=Be(),v=Object(i["shallowRef"])(H);let b=H;r&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const y=a.bind(null,e=>""+e),x=a.bind(null,Pe),k=a.bind(null,Le);function S(e,n){let i,r;return B(e)?(i=t.getRecordMatcher(e),r=n):r=e,t.addRoute(r,i)}function _(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function A(){return t.getRoutes().map(e=>e.record)}function C(e){return!!t.getRecordMatcher(e)}function O(e,i){if(i=o({},i||v.value),"string"===typeof e){const r=d(n,e,i.path),s=t.resolve({path:r.path},i),a=h.createHref(r.fullPath);return o(r,s,{params:k(s.params),hash:Le(r.hash),redirectedFrom:void 0,href:a})}let r;if("path"in e)r=o({},e,{path:d(n,e.path,i.path).path});else{const t=o({},e.params);for(const e in t)null==t[e]&&delete t[e];r=o({},e,{params:x(e.params)}),i.params=x(i.params)}const a=t.resolve(r,i),l=e.hash||"";a.params=y(k(a.params));const c=f(s,o({},e,{hash:Ie(l),path:a.path})),u=h.createHref(c);return o({fullPath:c,hash:l,query:s===Ne?Re(e.query):e.query||{}},a,{redirectedFrom:void 0,href:u})}function D(e){return"string"===typeof e?d(n,e,v.value.path):o({},e)}function N(e,t){if(b!==e)return U(8,{from:t,to:e})}function R(e){return j(e)}function M(e){return R(o(D(e),{replace:!0}))}function F(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let i="function"===typeof n?n(e):n;return"string"===typeof i&&(i=i.includes("?")||i.includes("#")?i=D(i):{path:i},i.params={}),o({query:e.query,hash:e.hash,params:"path"in i?{}:e.params},i)}}function j(e,t){const n=b=O(e),i=v.value,r=e.state,a=e.force,l=!0===e.replace,c=F(n);if(c)return j(o(D(c),{state:"object"===typeof c?o({},r,c.state):r,force:a,replace:l}),t||n);const h=n;let u;return h.redirectedFrom=t,!a&&g(s,i,n)&&(u=U(16,{to:h,from:i}),te(i,i,!0,!1)),(u?Promise.resolve(u):z(h,i)).catch(e=>Y(e)?Y(e,2)?e:ee(e):Z(e,h,i)).then(e=>{if(e){if(Y(e,2))return j(o({replace:l},D(e.to),{state:"object"===typeof e.to?o({},r,e.to.state):r,force:a}),t||h)}else e=X(h,i,!0,l,r);return W(h,i,e),e})}function V(e,t){const n=N(e,t);return n?Promise.reject(n):Promise.resolve()}function z(e,t){let n;const[i,r,s]=it(e,t);n=We(i.reverse(),"beforeRouteLeave",e,t);for(const a of i)a.leaveGuards.forEach(i=>{n.push(He(i,e,t))});const o=V.bind(null,e,t);return n.push(o),nt(n).then(()=>{n=[];for(const i of u.list())n.push(He(i,e,t));return n.push(o),nt(n)}).then(()=>{n=We(r,"beforeRouteUpdate",e,t);for(const i of r)i.updateGuards.forEach(i=>{n.push(He(i,e,t))});return n.push(o),nt(n)}).then(()=>{n=[];for(const i of e.matched)if(i.beforeEnter&&!t.matched.includes(i))if(c(i.beforeEnter))for(const r of i.beforeEnter)n.push(He(r,e,t));else n.push(He(i.beforeEnter,e,t));return n.push(o),nt(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=We(s,"beforeRouteEnter",e,t),n.push(o),nt(n))).then(()=>{n=[];for(const i of p.list())n.push(He(i,e,t));return n.push(o),nt(n)}).catch(e=>Y(e,8)?e:Promise.reject(e))}function W(e,t,n){for(const i of m.list())i(e,t,n)}function X(e,t,n,i,s){const a=N(e,t);if(a)return a;const l=t===H,c=r?history.state:{};n&&(i||l?h.replace(e.fullPath,o({scroll:l&&c&&c.scroll},s)):h.push(e.fullPath,s)),v.value=e,te(e,t,n,l),ee()}let G;function q(){G||(G=h.listen((e,t,n)=>{if(!oe.listening)return;const i=O(e),s=F(i);if(s)return void j(o(s,{replace:!0}),i).catch(l);b=i;const a=v.value;r&&P(E(a.fullPath,n.delta),I()),z(i,a).catch(e=>Y(e,12)?e:Y(e,2)?(j(e.to,i).then(e=>{Y(e,20)&&!n.delta&&n.type===w.pop&&h.go(-1,!1)}).catch(l),Promise.reject()):(n.delta&&h.go(-n.delta,!1),Z(e,i,a))).then(e=>{e=e||X(i,a,!1),e&&(n.delta&&!Y(e,8)?h.go(-n.delta,!1):n.type===w.pop&&Y(e,20)&&h.go(-1,!1)),W(i,a,e)}).catch(l)}))}let $,K=Be(),Q=Be();function Z(e,t,n){ee(e);const i=Q.list();return i.length?i.forEach(i=>i(e,t,n)):console.error(e),Promise.reject(e)}function J(){return $&&v.value!==H?Promise.resolve():new Promise((e,t)=>{K.add([e,t])})}function ee(e){return $||($=!e,q(),K.list().forEach(([t,n])=>e?n(e):t()),K.reset()),e}function te(t,n,s,o){const{scrollBehavior:a}=e;if(!r||!a)return Promise.resolve();const l=!s&&L(E(t.fullPath,0))||(o||!s)&&history.state&&history.state.scroll||null;return Object(i["nextTick"])().then(()=>a(t,n,l)).then(e=>e&&T(e)).catch(e=>Z(e,t,n))}const ne=e=>h.go(e);let ie;const se=new Set,oe={currentRoute:v,listening:!0,addRoute:S,removeRoute:_,hasRoute:C,getRoutes:A,resolve:O,options:e,push:R,replace:M,go:ne,back:()=>ne(-1),forward:()=>ne(1),beforeEach:u.add,beforeResolve:p.add,afterEach:m.add,onError:Q.add,isReady:J,install(e){const t=this;e.component("RouterLink",Ge),e.component("RouterView",et),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>Object(i["unref"])(v)}),r&&!ie&&v.value===H&&(ie=!0,R(h.location).catch(e=>{0}));const n={};for(const r in H)n[r]=Object(i["computed"])(()=>v.value[r]);e.provide(je,t),e.provide(Ve,Object(i["reactive"])(n)),e.provide(ze,v);const s=e.unmount;se.add(e),e.unmount=function(){se.delete(e),se.size<1&&(b=H,G&&G(),G=null,v.value=H,ie=!1,$=!1),s()}}};return oe}function nt(e){return e.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function it(e,t){const n=[],i=[],r=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find(e=>m(e,s))?i.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find(e=>m(e,a))||r.push(a))}return[n,i,r]}},"69f3":function(e,t,n){var i,r,s,o=n("cdce"),a=n("da84"),l=n("e330"),c=n("861d"),h=n("9112"),u=n("1a2d"),d=n("c6cd"),f=n("f772"),p=n("d012"),g="Object already initialized",m=a.TypeError,v=a.WeakMap,b=function(e){return s(e)?r(e):i(e,{})},y=function(e){return function(t){var n;if(!c(t)||(n=r(t)).type!==e)throw m("Incompatible receiver, "+e+" required");return n}};if(o||d.state){var x=d.state||(d.state=new v),w=l(x.get),k=l(x.has),S=l(x.set);i=function(e,t){if(k(x,e))throw m(g);return t.facade=e,S(x,e,t),t},r=function(e){return w(x,e)||{}},s=function(e){return k(x,e)}}else{var _=f("state");p[_]=!0,i=function(e,t){if(u(e,_))throw m(g);return t.facade=e,h(e,_,t),t},r=function(e){return u(e,_)?e[_]:{}},s=function(e){return u(e,_)}}e.exports={set:i,get:r,has:s,enforce:b,getterFor:y}},"6b0d":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t)=>{const n=e.__vccOpts||e;for(const[i,r]of t)n[i]=r;return n}},7234:function(e,t){e.exports=function(e){return null===e||void 0===e}},7418:function(e,t){t.f=Object.getOwnPropertySymbols},7839:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7a23":function(e,t,n){"use strict";n.r(t),n.d(t,"EffectScope",(function(){return s})),n.d(t,"ReactiveEffect",(function(){return k})),n.d(t,"customRef",(function(){return Je})),n.d(t,"effect",(function(){return _})),n.d(t,"effectScope",(function(){return o})),n.d(t,"getCurrentScope",(function(){return l})),n.d(t,"isProxy",(function(){return Me})),n.d(t,"isReactive",(function(){return De})),n.d(t,"isReadonly",(function(){return Ne})),n.d(t,"isRef",(function(){return We})),n.d(t,"isShallow",(function(){return Re})),n.d(t,"markRaw",(function(){return je})),n.d(t,"onScopeDispose",(function(){return c})),n.d(t,"proxyRefs",(function(){return Qe})),n.d(t,"reactive",(function(){return Te})),n.d(t,"readonly",(function(){return Oe})),n.d(t,"ref",(function(){return Xe})),n.d(t,"shallowReactive",(function(){return Ee})),n.d(t,"shallowReadonly",(function(){return Pe})),n.d(t,"shallowRef",(function(){return Ue})),n.d(t,"stop",(function(){return A})),n.d(t,"toRaw",(function(){return Fe})),n.d(t,"toRef",(function(){return nt})),n.d(t,"toRefs",(function(){return et})),n.d(t,"triggerRef",(function(){return qe})),n.d(t,"unref",(function(){return $e})),n.d(t,"camelize",(function(){return i["e"]})),n.d(t,"capitalize",(function(){return i["f"]})),n.d(t,"normalizeClass",(function(){return i["J"]})),n.d(t,"normalizeProps",(function(){return i["K"]})),n.d(t,"normalizeStyle",(function(){return i["L"]})),n.d(t,"toDisplayString",(function(){return i["N"]})),n.d(t,"toHandlerKey",(function(){return i["O"]})),n.d(t,"BaseTransition",(function(){return Pn})),n.d(t,"Comment",(function(){return Pr})),n.d(t,"Fragment",(function(){return Er})),n.d(t,"KeepAlive",(function(){return Xn})),n.d(t,"Static",(function(){return Lr})),n.d(t,"Suspense",(function(){return an})),n.d(t,"Teleport",(function(){return Tr})),n.d(t,"Text",(function(){return Or})),n.d(t,"callWithAsyncErrorHandling",(function(){return pt})),n.d(t,"callWithErrorHandling",(function(){return ft})),n.d(t,"cloneVNode",(function(){return Jr})),n.d(t,"compatUtils",(function(){return eo})),n.d(t,"computed",(function(){return Ds})),n.d(t,"createBlock",(function(){return Hr})),n.d(t,"createCommentVNode",(function(){return ns})),n.d(t,"createElementBlock",(function(){return Br})),n.d(t,"createElementVNode",(function(){return $r})),n.d(t,"createHydrationRenderer",(function(){return mr})),n.d(t,"createPropsRestProxy",(function(){return Hs})),n.d(t,"createRenderer",(function(){return gr})),n.d(t,"createSlots",(function(){return wi})),n.d(t,"createStaticVNode",(function(){return ts})),n.d(t,"createTextVNode",(function(){return es})),n.d(t,"createVNode",(function(){return Kr})),n.d(t,"defineAsyncComponent",(function(){return zn})),n.d(t,"defineComponent",(function(){return jn})),n.d(t,"defineEmits",(function(){return Rs})),n.d(t,"defineExpose",(function(){return Ms})),n.d(t,"defineProps",(function(){return Ns})),n.d(t,"devtools",(function(){return Ft})),n.d(t,"getCurrentInstance",(function(){return ds})),n.d(t,"getTransitionRawChildren",(function(){return Fn})),n.d(t,"guardReactiveProps",(function(){return Zr})),n.d(t,"h",(function(){return Xs})),n.d(t,"handleError",(function(){return gt})),n.d(t,"initCustomFormatter",(function(){return Gs})),n.d(t,"inject",(function(){return bn})),n.d(t,"isMemoSame",(function(){return $s})),n.d(t,"isRuntimeOnly",(function(){return Ss})),n.d(t,"isVNode",(function(){return Wr})),n.d(t,"mergeDefaults",(function(){return Bs})),n.d(t,"mergeProps",(function(){return os})),n.d(t,"nextTick",(function(){return Ct})),n.d(t,"onActivated",(function(){return Yn})),n.d(t,"onBeforeMount",(function(){return ei})),n.d(t,"onBeforeUnmount",(function(){return ri})),n.d(t,"onBeforeUpdate",(function(){return ni})),n.d(t,"onDeactivated",(function(){return Gn})),n.d(t,"onErrorCaptured",(function(){return ci})),n.d(t,"onMounted",(function(){return ti})),n.d(t,"onRenderTracked",(function(){return li})),n.d(t,"onRenderTriggered",(function(){return ai})),n.d(t,"onServerPrefetch",(function(){return oi})),n.d(t,"onUnmounted",(function(){return si})),n.d(t,"onUpdated",(function(){return ii})),n.d(t,"openBlock",(function(){return Rr})),n.d(t,"popScopeId",(function(){return qt})),n.d(t,"provide",(function(){return vn})),n.d(t,"pushScopeId",(function(){return Gt})),n.d(t,"queuePostFlushCb",(function(){return Pt})),n.d(t,"registerRuntimeCompiler",(function(){return ks})),n.d(t,"renderList",(function(){return xi})),n.d(t,"renderSlot",(function(){return ki})),n.d(t,"resolveComponent",(function(){return pi})),n.d(t,"resolveDirective",(function(){return vi})),n.d(t,"resolveDynamicComponent",(function(){return mi})),n.d(t,"resolveFilter",(function(){return Js})),n.d(t,"resolveTransitionHooks",(function(){return Dn})),n.d(t,"setBlockTracking",(function(){return Vr})),n.d(t,"setDevtoolsHook",(function(){return zt})),n.d(t,"setTransitionHooks",(function(){return Mn})),n.d(t,"ssrContextKey",(function(){return Us})),n.d(t,"ssrUtils",(function(){return Zs})),n.d(t,"toHandlers",(function(){return _i})),n.d(t,"transformVNodeArgs",(function(){return Ur})),n.d(t,"useAttrs",(function(){return Vs})),n.d(t,"useSSRContext",(function(){return Ys})),n.d(t,"useSlots",(function(){return js})),n.d(t,"useTransitionState",(function(){return Tn})),n.d(t,"version",(function(){return Ks})),n.d(t,"warn",(function(){return at})),n.d(t,"watch",(function(){return Sn})),n.d(t,"watchEffect",(function(){return yn})),n.d(t,"watchPostEffect",(function(){return xn})),n.d(t,"watchSyncEffect",(function(){return wn})),n.d(t,"withAsyncContext",(function(){return Ws})),n.d(t,"withCtx",(function(){return Kt})),n.d(t,"withDefaults",(function(){return Fs})),n.d(t,"withDirectives",(function(){return hi})),n.d(t,"withMemo",(function(){return qs})),n.d(t,"withScopeId",(function(){return $t})),n.d(t,"Transition",(function(){return Ho})),n.d(t,"TransitionGroup",(function(){return la})),n.d(t,"VueElement",(function(){return Ro})),n.d(t,"createApp",(function(){return Wa})),n.d(t,"createSSRApp",(function(){return Xa})),n.d(t,"defineCustomElement",(function(){return Lo})),n.d(t,"defineSSRCustomElement",(function(){return Do})),n.d(t,"hydrate",(function(){return Ha})),n.d(t,"initDirectivesForSSR",(function(){return Ga})),n.d(t,"render",(function(){return Ba})),n.d(t,"useCssModule",(function(){return Mo})),n.d(t,"useCssVars",(function(){return Fo})),n.d(t,"vModelCheckbox",(function(){return va})),n.d(t,"vModelDynamic",(function(){return _a})),n.d(t,"vModelRadio",(function(){return ya})),n.d(t,"vModelSelect",(function(){return xa})),n.d(t,"vModelText",(function(){return ma})),n.d(t,"vShow",(function(){return Da})),n.d(t,"withKeys",(function(){return La})),n.d(t,"withModifiers",(function(){return Oa})),n.d(t,"compile",(function(){return qa}));var i=n("9ff4");let r;class s{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&r&&(this.parent=r,this.index=(r.scopes||(r.scopes=[])).push(this)-1)}run(e){if(this.active){const t=r;try{return r=this,e()}finally{r=t}}else 0}on(){r=this}off(){r=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function o(e){return new s(e)}function a(e,t=r){t&&t.active&&t.effects.push(e)}function l(){return r}function c(e){r&&r.cleanups.push(e)}const h=e=>{const t=new Set(e);return t.w=0,t.n=0,t},u=e=>(e.w&v)>0,d=e=>(e.n&v)>0,f=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=v},p=e=>{const{deps:t}=e;if(t.length){let n=0;for(let i=0;i<t.length;i++){const r=t[i];u(r)&&!d(r)?r.delete(e):t[n++]=r,r.w&=~v,r.n&=~v}t.length=n}},g=new WeakMap;let m=0,v=1;const b=30;let y;const x=Symbol(""),w=Symbol("");class k{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,a(this,n)}run(){if(!this.active)return this.fn();let e=y,t=C;while(e){if(e===this)return;e=e.parent}try{return this.parent=y,y=this,C=!0,v=1<<++m,m<=b?f(this):S(this),this.fn()}finally{m<=b&&p(this),v=1<<--m,y=this.parent,C=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){y===this?this.deferStop=!0:this.active&&(S(this),this.onStop&&this.onStop(),this.active=!1)}}function S(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}function _(e,t){e.effect&&(e=e.effect.fn);const n=new k(e);t&&(Object(i["h"])(n,t),t.scope&&a(n,t.scope)),t&&t.lazy||n.run();const r=n.run.bind(n);return r.effect=n,r}function A(e){e.effect.stop()}let C=!0;const I=[];function T(){I.push(C),C=!1}function E(){const e=I.pop();C=void 0===e||e}function O(e,t,n){if(C&&y){let t=g.get(e);t||g.set(e,t=new Map);let i=t.get(n);i||t.set(n,i=h());const r=void 0;P(i,r)}}function P(e,t){let n=!1;m<=b?d(e)||(e.n|=v,n=!u(e)):n=!e.has(y),n&&(e.add(y),y.deps.push(e))}function L(e,t,n,r,s,o){const a=g.get(e);if(!a)return;let l=[];if("clear"===t)l=[...a.values()];else if("length"===n&&Object(i["o"])(e))a.forEach((e,t)=>{("length"===t||t>=r)&&l.push(e)});else switch(void 0!==n&&l.push(a.get(n)),t){case"add":Object(i["o"])(e)?Object(i["t"])(n)&&l.push(a.get("length")):(l.push(a.get(x)),Object(i["u"])(e)&&l.push(a.get(w)));break;case"delete":Object(i["o"])(e)||(l.push(a.get(x)),Object(i["u"])(e)&&l.push(a.get(w)));break;case"set":Object(i["u"])(e)&&l.push(a.get(x));break}if(1===l.length)l[0]&&D(l[0]);else{const e=[];for(const t of l)t&&e.push(...t);D(h(e))}}function D(e,t){const n=Object(i["o"])(e)?e:[...e];for(const i of n)i.computed&&N(i,t);for(const i of n)i.computed||N(i,t)}function N(e,t){(e!==y||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const R=Object(i["I"])("__proto__,__v_isRef,__isVue"),M=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>"arguments"!==e&&"caller"!==e).map(e=>Symbol[e]).filter(i["F"])),F=W(),j=W(!1,!0),V=W(!0),z=W(!0,!0),B=H();function H(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...e){const n=Fe(this);for(let t=0,r=this.length;t<r;t++)O(n,"get",t+"");const i=n[t](...e);return-1===i||!1===i?n[t](...e.map(Fe)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...e){T();const n=Fe(this)[t].apply(this,e);return E(),n}}),e}function W(e=!1,t=!1){return function(n,r,s){if("__v_isReactive"===r)return!e;if("__v_isReadonly"===r)return e;if("__v_isShallow"===r)return t;if("__v_raw"===r&&s===(e?t?Ae:_e:t?Se:ke).get(n))return n;const o=Object(i["o"])(n);if(!e&&o&&Object(i["k"])(B,r))return Reflect.get(B,r,s);const a=Reflect.get(n,r,s);return(Object(i["F"])(r)?M.has(r):R(r))?a:(e||O(n,"get",r),t?a:We(a)?o&&Object(i["t"])(r)?a:a.value:Object(i["w"])(a)?e?Oe(a):Te(a):a)}}const X=Y(),U=Y(!0);function Y(e=!1){return function(t,n,r,s){let o=t[n];if(Ne(o)&&We(o)&&!We(r))return!1;if(!e&&(Re(r)||Ne(r)||(o=Fe(o),r=Fe(r)),!Object(i["o"])(t)&&We(o)&&!We(r)))return o.value=r,!0;const a=Object(i["o"])(t)&&Object(i["t"])(n)?Number(n)<t.length:Object(i["k"])(t,n),l=Reflect.set(t,n,r,s);return t===Fe(s)&&(a?Object(i["j"])(r,o)&&L(t,"set",n,r,o):L(t,"add",n,r)),l}}function G(e,t){const n=Object(i["k"])(e,t),r=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&L(e,"delete",t,void 0,r),s}function q(e,t){const n=Reflect.has(e,t);return Object(i["F"])(t)&&M.has(t)||O(e,"has",t),n}function $(e){return O(e,"iterate",Object(i["o"])(e)?"length":x),Reflect.ownKeys(e)}const K={get:F,set:X,deleteProperty:G,has:q,ownKeys:$},Q={get:V,set(e,t){return!0},deleteProperty(e,t){return!0}},Z=Object(i["h"])({},K,{get:j,set:U}),J=Object(i["h"])({},Q,{get:z}),ee=e=>e,te=e=>Reflect.getPrototypeOf(e);function ne(e,t,n=!1,i=!1){e=e["__v_raw"];const r=Fe(e),s=Fe(t);n||(t!==s&&O(r,"get",t),O(r,"get",s));const{has:o}=te(r),a=i?ee:n?ze:Ve;return o.call(r,t)?a(e.get(t)):o.call(r,s)?a(e.get(s)):void(e!==r&&e.get(t))}function ie(e,t=!1){const n=this["__v_raw"],i=Fe(n),r=Fe(e);return t||(e!==r&&O(i,"has",e),O(i,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function re(e,t=!1){return e=e["__v_raw"],!t&&O(Fe(e),"iterate",x),Reflect.get(e,"size",e)}function se(e){e=Fe(e);const t=Fe(this),n=te(t),i=n.has.call(t,e);return i||(t.add(e),L(t,"add",e,e)),this}function oe(e,t){t=Fe(t);const n=Fe(this),{has:r,get:s}=te(n);let o=r.call(n,e);o||(e=Fe(e),o=r.call(n,e));const a=s.call(n,e);return n.set(e,t),o?Object(i["j"])(t,a)&&L(n,"set",e,t,a):L(n,"add",e,t),this}function ae(e){const t=Fe(this),{has:n,get:i}=te(t);let r=n.call(t,e);r||(e=Fe(e),r=n.call(t,e));const s=i?i.call(t,e):void 0,o=t.delete(e);return r&&L(t,"delete",e,void 0,s),o}function le(){const e=Fe(this),t=0!==e.size,n=void 0,i=e.clear();return t&&L(e,"clear",void 0,void 0,n),i}function ce(e,t){return function(n,i){const r=this,s=r["__v_raw"],o=Fe(s),a=t?ee:e?ze:Ve;return!e&&O(o,"iterate",x),s.forEach((e,t)=>n.call(i,a(e),a(t),r))}}function he(e,t,n){return function(...r){const s=this["__v_raw"],o=Fe(s),a=Object(i["u"])(o),l="entries"===e||e===Symbol.iterator&&a,c="keys"===e&&a,h=s[e](...r),u=n?ee:t?ze:Ve;return!t&&O(o,"iterate",c?w:x),{next(){const{value:e,done:t}=h.next();return t?{value:e,done:t}:{value:l?[u(e[0]),u(e[1])]:u(e),done:t}},[Symbol.iterator](){return this}}}}function ue(e){return function(...t){return"delete"!==e&&this}}function de(){const e={get(e){return ne(this,e)},get size(){return re(this)},has:ie,add:se,set:oe,delete:ae,clear:le,forEach:ce(!1,!1)},t={get(e){return ne(this,e,!1,!0)},get size(){return re(this)},has:ie,add:se,set:oe,delete:ae,clear:le,forEach:ce(!1,!0)},n={get(e){return ne(this,e,!0)},get size(){return re(this,!0)},has(e){return ie.call(this,e,!0)},add:ue("add"),set:ue("set"),delete:ue("delete"),clear:ue("clear"),forEach:ce(!0,!1)},i={get(e){return ne(this,e,!0,!0)},get size(){return re(this,!0)},has(e){return ie.call(this,e,!0)},add:ue("add"),set:ue("set"),delete:ue("delete"),clear:ue("clear"),forEach:ce(!0,!0)},r=["keys","values","entries",Symbol.iterator];return r.forEach(r=>{e[r]=he(r,!1,!1),n[r]=he(r,!0,!1),t[r]=he(r,!1,!0),i[r]=he(r,!0,!0)}),[e,n,t,i]}const[fe,pe,ge,me]=de();function ve(e,t){const n=t?e?me:ge:e?pe:fe;return(t,r,s)=>"__v_isReactive"===r?!e:"__v_isReadonly"===r?e:"__v_raw"===r?t:Reflect.get(Object(i["k"])(n,r)&&r in t?n:t,r,s)}const be={get:ve(!1,!1)},ye={get:ve(!1,!0)},xe={get:ve(!0,!1)},we={get:ve(!0,!0)};const ke=new WeakMap,Se=new WeakMap,_e=new WeakMap,Ae=new WeakMap;function Ce(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ie(e){return e["__v_skip"]||!Object.isExtensible(e)?0:Ce(Object(i["Q"])(e))}function Te(e){return Ne(e)?e:Le(e,!1,K,be,ke)}function Ee(e){return Le(e,!1,Z,ye,Se)}function Oe(e){return Le(e,!0,Q,xe,_e)}function Pe(e){return Le(e,!0,J,we,Ae)}function Le(e,t,n,r,s){if(!Object(i["w"])(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=Ie(e);if(0===a)return e;const l=new Proxy(e,2===a?r:n);return s.set(e,l),l}function De(e){return Ne(e)?De(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Ne(e){return!(!e||!e["__v_isReadonly"])}function Re(e){return!(!e||!e["__v_isShallow"])}function Me(e){return De(e)||Ne(e)}function Fe(e){const t=e&&e["__v_raw"];return t?Fe(t):e}function je(e){return Object(i["g"])(e,"__v_skip",!0),e}const Ve=e=>Object(i["w"])(e)?Te(e):e,ze=e=>Object(i["w"])(e)?Oe(e):e;function Be(e){C&&y&&(e=Fe(e),P(e.dep||(e.dep=h())))}function He(e,t){e=Fe(e),e.dep&&D(e.dep)}function We(e){return!(!e||!0!==e.__v_isRef)}function Xe(e){return Ye(e,!1)}function Ue(e){return Ye(e,!0)}function Ye(e,t){return We(e)?e:new Ge(e,t)}class Ge{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Fe(e),this._value=t?e:Ve(e)}get value(){return Be(this),this._value}set value(e){const t=this.__v_isShallow||Re(e)||Ne(e);e=t?e:Fe(e),Object(i["j"])(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Ve(e),He(this,e))}}function qe(e){He(e,void 0)}function $e(e){return We(e)?e.value:e}const Ke={get:(e,t,n)=>$e(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const r=e[t];return We(r)&&!We(n)?(r.value=n,!0):Reflect.set(e,t,n,i)}};function Qe(e){return De(e)?e:new Proxy(e,Ke)}class Ze{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:t,set:n}=e(()=>Be(this),()=>He(this));this._get=t,this._set=n}get value(){return this._get()}set value(e){this._set(e)}}function Je(e){return new Ze(e)}function et(e){const t=Object(i["o"])(e)?new Array(e.length):{};for(const n in e)t[n]=nt(e,n);return t}class tt{constructor(e,t,n){this._object=e,this._key=t,this._defaultValue=n,this.__v_isRef=!0}get value(){const e=this._object[this._key];return void 0===e?this._defaultValue:e}set value(e){this._object[this._key]=e}}function nt(e,t,n){const i=e[t];return We(i)?i:new tt(e,t,n)}var it;class rt{constructor(e,t,n,i){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[it]=!1,this._dirty=!0,this.effect=new k(e,()=>{this._dirty||(this._dirty=!0,He(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this["__v_isReadonly"]=n}get value(){const e=Fe(this);return Be(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function st(e,t,n=!1){let r,s;const o=Object(i["q"])(e);o?(r=e,s=i["d"]):(r=e.get,s=e.set);const a=new rt(r,s,o||!s,n);return a}it="__v_isReadonly";const ot=[];function at(e,...t){T();const n=ot.length?ot[ot.length-1].component:null,i=n&&n.appContext.config.warnHandler,r=lt();if(i)ft(i,n,11,[e+t.join(""),n&&n.proxy,r.map(({vnode:e})=>`at <${Ps(n,e.type)}>`).join("\n"),r]);else{const n=["[Vue warn]: "+e,...t];r.length&&n.push("\n",...ct(r)),console.warn(...n)}E()}function lt(){let e=ot[ot.length-1];if(!e)return[];const t=[];while(e){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const i=e.component&&e.component.parent;e=i&&i.vnode}return t}function ct(e){const t=[];return e.forEach((e,n)=>{t.push(...0===n?[]:["\n"],...ht(e))}),t}function ht({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",i=!!e.component&&null==e.component.parent,r=" at <"+Ps(e.component,e.type,i),s=">"+n;return e.props?[r,...ut(e.props),s]:[r+s]}function ut(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(n=>{t.push(...dt(n,e[n]))}),n.length>3&&t.push(" ..."),t}function dt(e,t,n){return Object(i["E"])(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):"number"===typeof t||"boolean"===typeof t||null==t?n?t:[`${e}=${t}`]:We(t)?(t=dt(e,Fe(t.value),!0),n?t:[e+"=Ref<",t,">"]):Object(i["q"])(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=Fe(t),n?t:[e+"=",t])}function ft(e,t,n,i){let r;try{r=i?e(...i):e()}catch(s){gt(s,t,n)}return r}function pt(e,t,n,r){if(Object(i["q"])(e)){const s=ft(e,t,n,r);return s&&Object(i["z"])(s)&&s.catch(e=>{gt(e,t,n)}),s}const s=[];for(let i=0;i<e.length;i++)s.push(pt(e[i],t,n,r));return s}function gt(e,t,n,i=!0){const r=t?t.vnode:null;if(t){let i=t.parent;const r=t.proxy,s=n;while(i){const t=i.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,r,s))return;i=i.parent}const o=t.appContext.config.errorHandler;if(o)return void ft(o,null,10,[e,r,s])}mt(e,n,r,i)}function mt(e,t,n,i=!0){console.error(e)}let vt=!1,bt=!1;const yt=[];let xt=0;const wt=[];let kt=null,St=0;const _t=Promise.resolve();let At=null;function Ct(e){const t=At||_t;return e?t.then(this?e.bind(this):e):t}function It(e){let t=xt+1,n=yt.length;while(t<n){const i=t+n>>>1,r=Nt(yt[i]);r<e?t=i+1:n=i}return t}function Tt(e){yt.length&&yt.includes(e,vt&&e.allowRecurse?xt+1:xt)||(null==e.id?yt.push(e):yt.splice(It(e.id),0,e),Et())}function Et(){vt||bt||(bt=!0,At=_t.then(Mt))}function Ot(e){const t=yt.indexOf(e);t>xt&&yt.splice(t,1)}function Pt(e){Object(i["o"])(e)?wt.push(...e):kt&&kt.includes(e,e.allowRecurse?St+1:St)||wt.push(e),Et()}function Lt(e,t=(vt?xt+1:0)){for(0;t<yt.length;t++){const e=yt[t];e&&e.pre&&(yt.splice(t,1),t--,e())}}function Dt(e){if(wt.length){const e=[...new Set(wt)];if(wt.length=0,kt)return void kt.push(...e);for(kt=e,kt.sort((e,t)=>Nt(e)-Nt(t)),St=0;St<kt.length;St++)kt[St]();kt=null,St=0}}const Nt=e=>null==e.id?1/0:e.id,Rt=(e,t)=>{const n=Nt(e)-Nt(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Mt(e){bt=!1,vt=!0,yt.sort(Rt);i["d"];try{for(xt=0;xt<yt.length;xt++){const e=yt[xt];e&&!1!==e.active&&ft(e,null,14)}}finally{xt=0,yt.length=0,Dt(e),vt=!1,At=null,(yt.length||wt.length)&&Mt(e)}}new Set;new Map;let Ft,jt=[],Vt=!1;function zt(e,t){var n,i;if(Ft=e,Ft)Ft.enabled=!0,jt.forEach(({event:e,args:t})=>Ft.emit(e,...t)),jt=[];else if("undefined"!==typeof window&&window.HTMLElement&&!(null===(i=null===(n=window.navigator)||void 0===n?void 0:n.userAgent)||void 0===i?void 0:i.includes("jsdom"))){const e=t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[];e.push(e=>{zt(e,t)}),setTimeout(()=>{Ft||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Vt=!0,jt=[])},3e3)}else Vt=!0,jt=[]}function Bt(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i["b"];let s=n;const o=t.startsWith("update:"),a=o&&t.slice(7);if(a&&a in r){const e=("modelValue"===a?"model":a)+"Modifiers",{number:t,trim:o}=r[e]||i["b"];o&&(s=n.map(e=>e.trim())),t&&(s=n.map(i["P"]))}let l;let c=r[l=Object(i["O"])(t)]||r[l=Object(i["O"])(Object(i["e"])(t))];!c&&o&&(c=r[l=Object(i["O"])(Object(i["l"])(t))]),c&&pt(c,e,6,s);const h=r[l+"Once"];if(h){if(e.emitted){if(e.emitted[l])return}else e.emitted={};e.emitted[l]=!0,pt(h,e,6,s)}}function Ht(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(void 0!==s)return s;const o=e.emits;let a={},l=!1;if(!Object(i["q"])(e)){const r=e=>{const n=Ht(e,t,!0);n&&(l=!0,Object(i["h"])(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return o||l?(Object(i["o"])(o)?o.forEach(e=>a[e]=null):Object(i["h"])(a,o),Object(i["w"])(e)&&r.set(e,a),a):(Object(i["w"])(e)&&r.set(e,null),null)}function Wt(e,t){return!(!e||!Object(i["x"])(t))&&(t=t.slice(2).replace(/Once$/,""),Object(i["k"])(e,t[0].toLowerCase()+t.slice(1))||Object(i["k"])(e,Object(i["l"])(t))||Object(i["k"])(e,t))}let Xt=null,Ut=null;function Yt(e){const t=Xt;return Xt=e,Ut=e&&e.type.__scopeId||null,t}function Gt(e){Ut=e}function qt(){Ut=null}const $t=e=>Kt;function Kt(e,t=Xt,n){if(!t)return e;if(e._n)return e;const i=(...n)=>{i._d&&Vr(-1);const r=Yt(t),s=e(...n);return Yt(r),i._d&&Vr(1),s};return i._n=!0,i._c=!0,i._d=!0,i}function Qt(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[a],slots:l,attrs:c,emit:h,render:u,renderCache:d,data:f,setupState:p,ctx:g,inheritAttrs:m}=e;let v,b;const y=Yt(e);try{if(4&n.shapeFlag){const e=s||r;v=is(u.call(e,e,d,o,p,f,g)),b=c}else{const e=t;0,v=is(e.length>1?e(o,{attrs:c,slots:l,emit:h}):e(o,null)),b=t.props?c:Jt(c)}}catch(w){Dr.length=0,gt(w,e,1),v=Kr(Pr)}let x=v;if(b&&!1!==m){const e=Object.keys(b),{shapeFlag:t}=x;e.length&&7&t&&(a&&e.some(i["v"])&&(b=en(b,a)),x=Jr(x,b))}return n.dirs&&(x=Jr(x),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&(x.transition=n.transition),v=x,Yt(y),v}function Zt(e){let t;for(let n=0;n<e.length;n++){const i=e[n];if(!Wr(i))return;if(i.type!==Pr||"v-if"===i.children){if(t)return;t=i}}return t}const Jt=e=>{let t;for(const n in e)("class"===n||"style"===n||Object(i["x"])(n))&&((t||(t={}))[n]=e[n]);return t},en=(e,t)=>{const n={};for(const r in e)Object(i["v"])(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function tn(e,t,n){const{props:i,children:r,component:s}=e,{props:o,children:a,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&l>=0))return!(!r&&!a||a&&a.$stable)||i!==o&&(i?!o||nn(i,o,c):!!o);if(1024&l)return!0;if(16&l)return i?nn(i,o,c):!!o;if(8&l){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==i[n]&&!Wt(c,n))return!0}}return!1}function nn(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(t[s]!==e[s]&&!Wt(n,s))return!0}return!1}function rn({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const sn=e=>e.__isSuspense,on={name:"Suspense",__isSuspense:!0,process(e,t,n,i,r,s,o,a,l,c){null==e?cn(t,n,i,r,s,o,a,l,c):hn(e,t,n,i,r,o,a,l,c)},hydrate:dn,create:un,normalize:fn},an=on;function ln(e,t){const n=e.props&&e.props[t];Object(i["q"])(n)&&n()}function cn(e,t,n,i,r,s,o,a,l){const{p:c,o:{createElement:h}}=l,u=h("div"),d=e.suspense=un(e,r,i,t,u,n,s,o,a,l);c(null,d.pendingBranch=e.ssContent,u,null,i,d,s,o),d.deps>0?(ln(e,"onPending"),ln(e,"onFallback"),c(null,e.ssFallback,t,n,i,null,s,o),mn(d,e.ssFallback)):d.resolve()}function hn(e,t,n,i,r,s,o,a,{p:l,um:c,o:{createElement:h}}){const u=t.suspense=e.suspense;u.vnode=t,t.el=e.el;const d=t.ssContent,f=t.ssFallback,{activeBranch:p,pendingBranch:g,isInFallback:m,isHydrating:v}=u;if(g)u.pendingBranch=d,Xr(d,g)?(l(g,d,u.hiddenContainer,null,r,u,s,o,a),u.deps<=0?u.resolve():m&&(l(p,f,n,i,r,null,s,o,a),mn(u,f))):(u.pendingId++,v?(u.isHydrating=!1,u.activeBranch=g):c(g,r,u),u.deps=0,u.effects.length=0,u.hiddenContainer=h("div"),m?(l(null,d,u.hiddenContainer,null,r,u,s,o,a),u.deps<=0?u.resolve():(l(p,f,n,i,r,null,s,o,a),mn(u,f))):p&&Xr(d,p)?(l(p,d,n,i,r,u,s,o,a),u.resolve(!0)):(l(null,d,u.hiddenContainer,null,r,u,s,o,a),u.deps<=0&&u.resolve()));else if(p&&Xr(d,p))l(p,d,n,i,r,u,s,o,a),mn(u,d);else if(ln(t,"onPending"),u.pendingBranch=d,u.pendingId++,l(null,d,u.hiddenContainer,null,r,u,s,o,a),u.deps<=0)u.resolve();else{const{timeout:e,pendingId:t}=u;e>0?setTimeout(()=>{u.pendingId===t&&u.fallback(f)},e):0===e&&u.fallback(f)}}function un(e,t,n,r,s,o,a,l,c,h,u=!1){const{p:d,m:f,um:p,n:g,o:{parentNode:m,remove:v}}=h,b=Object(i["P"])(e.props&&e.props.timeout),y={vnode:e,parent:t,parentComponent:n,isSVG:a,container:r,hiddenContainer:s,anchor:o,deps:0,pendingId:0,timeout:"number"===typeof b?b:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(e=!1){const{vnode:t,activeBranch:n,pendingBranch:i,pendingId:r,effects:s,parentComponent:o,container:a}=y;if(y.isHydrating)y.isHydrating=!1;else if(!e){const e=n&&i.transition&&"out-in"===i.transition.mode;e&&(n.transition.afterLeave=()=>{r===y.pendingId&&f(i,a,t,0)});let{anchor:t}=y;n&&(t=g(n),p(n,o,y,!0)),e||f(i,a,t,0)}mn(y,i),y.pendingBranch=null,y.isInFallback=!1;let l=y.parent,c=!1;while(l){if(l.pendingBranch){l.effects.push(...s),c=!0;break}l=l.parent}c||Pt(s),y.effects=[],ln(t,"onResolve")},fallback(e){if(!y.pendingBranch)return;const{vnode:t,activeBranch:n,parentComponent:i,container:r,isSVG:s}=y;ln(t,"onFallback");const o=g(n),a=()=>{y.isInFallback&&(d(null,e,r,o,i,null,s,l,c),mn(y,e))},h=e.transition&&"out-in"===e.transition.mode;h&&(n.transition.afterLeave=a),y.isInFallback=!0,p(n,i,null,!0),h||a()},move(e,t,n){y.activeBranch&&f(y.activeBranch,e,t,n),y.container=e},next(){return y.activeBranch&&g(y.activeBranch)},registerDep(e,t){const n=!!y.pendingBranch;n&&y.deps++;const i=e.vnode.el;e.asyncDep.catch(t=>{gt(t,e,0)}).then(r=>{if(e.isUnmounted||y.isUnmounted||y.pendingId!==e.suspenseId)return;e.asyncResolved=!0;const{vnode:s}=e;ws(e,r,!1),i&&(s.el=i);const o=!i&&e.subTree.el;t(e,s,m(i||e.subTree.el),i?null:g(e.subTree),y,a,c),o&&v(o),rn(e,s.el),n&&0===--y.deps&&y.resolve()})},unmount(e,t){y.isUnmounted=!0,y.activeBranch&&p(y.activeBranch,n,e,t),y.pendingBranch&&p(y.pendingBranch,n,e,t)}};return y}function dn(e,t,n,i,r,s,o,a,l){const c=t.suspense=un(t,i,n,e.parentNode,document.createElement("div"),null,r,s,o,a,!0),h=l(e,c.pendingBranch=t.ssContent,n,c,s,o);return 0===c.deps&&c.resolve(),h}function fn(e){const{shapeFlag:t,children:n}=e,i=32&t;e.ssContent=pn(i?n.default:n),e.ssFallback=i?pn(n.fallback):Kr(Pr)}function pn(e){let t;if(Object(i["q"])(e)){const n=jr&&e._c;n&&(e._d=!1,Rr()),e=e(),n&&(e._d=!0,t=Nr,Mr())}if(Object(i["o"])(e)){const t=Zt(e);0,e=t}return e=is(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(t=>t!==e)),e}function gn(e,t){t&&t.pendingBranch?Object(i["o"])(e)?t.effects.push(...e):t.effects.push(e):Pt(e)}function mn(e,t){e.activeBranch=t;const{vnode:n,parentComponent:i}=e,r=n.el=t.el;i&&i.subTree===n&&(i.vnode.el=r,rn(i,r))}function vn(e,t){if(us){let n=us.provides;const i=us.parent&&us.parent.provides;i===n&&(n=us.provides=Object.create(i)),n[e]=t}else 0}function bn(e,t,n=!1){const r=us||Xt;if(r){const s=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&Object(i["q"])(t)?t.call(r.proxy):t}else 0}function yn(e,t){return _n(e,null,t)}function xn(e,t){return _n(e,null,{flush:"post"})}function wn(e,t){return _n(e,null,{flush:"sync"})}const kn={};function Sn(e,t,n){return _n(e,t,n)}function _n(e,t,{immediate:n,deep:r,flush:s,onTrack:o,onTrigger:a}=i["b"]){const l=us;let c,h,u=!1,d=!1;if(We(e)?(c=()=>e.value,u=Re(e)):De(e)?(c=()=>e,r=!0):Object(i["o"])(e)?(d=!0,u=e.some(e=>De(e)||Re(e)),c=()=>e.map(e=>We(e)?e.value:De(e)?In(e):Object(i["q"])(e)?ft(e,l,2):void 0)):c=Object(i["q"])(e)?t?()=>ft(e,l,2):()=>{if(!l||!l.isUnmounted)return h&&h(),pt(e,l,3,[f])}:i["d"],t&&r){const e=c;c=()=>In(e())}let f=e=>{h=v.onStop=()=>{ft(e,l,4)}};if(bs)return f=i["d"],t?n&&pt(t,l,3,[c(),d?[]:void 0,f]):c(),i["d"];let p=d?[]:kn;const g=()=>{if(v.active)if(t){const e=v.run();(r||u||(d?e.some((e,t)=>Object(i["j"])(e,p[t])):Object(i["j"])(e,p)))&&(h&&h(),pt(t,l,3,[e,p===kn?void 0:p,f]),p=e)}else v.run()};let m;g.allowRecurse=!!t,"sync"===s?m=g:"post"===s?m=()=>pr(g,l&&l.suspense):(g.pre=!0,l&&(g.id=l.uid),m=()=>Tt(g));const v=new k(c,m);return t?n?g():p=v.run():"post"===s?pr(v.run.bind(v),l&&l.suspense):v.run(),()=>{v.stop(),l&&l.scope&&Object(i["M"])(l.scope.effects,v)}}function An(e,t,n){const r=this.proxy,s=Object(i["E"])(e)?e.includes(".")?Cn(r,e):()=>r[e]:e.bind(r,r);let o;Object(i["q"])(t)?o=t:(o=t.handler,n=t);const a=us;fs(this);const l=_n(s,o.bind(r),n);return a?fs(a):ps(),l}function Cn(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function In(e,t){if(!Object(i["w"])(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),We(e))In(e.value,t);else if(Object(i["o"])(e))for(let n=0;n<e.length;n++)In(e[n],t);else if(Object(i["C"])(e)||Object(i["u"])(e))e.forEach(e=>{In(e,t)});else if(Object(i["y"])(e))for(const n in e)In(e[n],t);return e}function Tn(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ti(()=>{e.isMounted=!0}),ri(()=>{e.isUnmounting=!0}),e}const En=[Function,Array],On={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:En,onEnter:En,onAfterEnter:En,onEnterCancelled:En,onBeforeLeave:En,onLeave:En,onAfterLeave:En,onLeaveCancelled:En,onBeforeAppear:En,onAppear:En,onAfterAppear:En,onAppearCancelled:En},setup(e,{slots:t}){const n=ds(),i=Tn();let r;return()=>{const s=t.default&&Fn(t.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){let e=!1;for(const t of s)if(t.type!==Pr){0,o=t,e=!0;break}}const a=Fe(e),{mode:l}=a;if(i.isLeaving)return Nn(o);const c=Rn(o);if(!c)return Nn(o);const h=Dn(c,a,i,n);Mn(c,h);const u=n.subTree,d=u&&Rn(u);let f=!1;const{getTransitionKey:p}=c.type;if(p){const e=p();void 0===r?r=e:e!==r&&(r=e,f=!0)}if(d&&d.type!==Pr&&(!Xr(c,d)||f)){const e=Dn(d,a,i,n);if(Mn(d,e),"out-in"===l)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,n.update()},Nn(o);"in-out"===l&&c.type!==Pr&&(e.delayLeave=(e,t,n)=>{const r=Ln(i,d);r[String(d.key)]=d,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return o}}},Pn=On;function Ln(e,t){const{leavingVNodes:n}=e;let i=n.get(t.type);return i||(i=Object.create(null),n.set(t.type,i)),i}function Dn(e,t,n,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:h,onEnterCancelled:u,onBeforeLeave:d,onLeave:f,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:m,onAppear:v,onAfterAppear:b,onAppearCancelled:y}=t,x=String(e.key),w=Ln(n,e),k=(e,t)=>{e&&pt(e,r,9,t)},S=(e,t)=>{const n=t[1];k(e,t),Object(i["o"])(e)?e.every(e=>e.length<=1)&&n():e.length<=1&&n()},_={mode:o,persisted:a,beforeEnter(t){let i=l;if(!n.isMounted){if(!s)return;i=m||l}t._leaveCb&&t._leaveCb(!0);const r=w[x];r&&Xr(e,r)&&r.el._leaveCb&&r.el._leaveCb(),k(i,[t])},enter(e){let t=c,i=h,r=u;if(!n.isMounted){if(!s)return;t=v||c,i=b||h,r=y||u}let o=!1;const a=e._enterCb=t=>{o||(o=!0,k(t?r:i,[e]),_.delayedLeave&&_.delayedLeave(),e._enterCb=void 0)};t?S(t,[e,a]):a()},leave(t,i){const r=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return i();k(d,[t]);let s=!1;const o=t._leaveCb=n=>{s||(s=!0,i(),k(n?g:p,[t]),t._leaveCb=void 0,w[r]===e&&delete w[r])};w[r]=e,f?S(f,[t,o]):o()},clone(e){return Dn(e,t,n,r)}};return _}function Nn(e){if(Hn(e))return e=Jr(e),e.children=null,e}function Rn(e){return Hn(e)?e.children?e.children[0]:void 0:e}function Mn(e,t){6&e.shapeFlag&&e.component?Mn(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Fn(e,t=!1,n){let i=[],r=0;for(let s=0;s<e.length;s++){let o=e[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===Er?(128&o.patchFlag&&r++,i=i.concat(Fn(o.children,t,a))):(t||o.type!==Pr)&&i.push(null!=a?Jr(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function jn(e){return Object(i["q"])(e)?{setup:e,name:e.name}:e}const Vn=e=>!!e.type.__asyncLoader;function zn(e){Object(i["q"])(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:r,delay:s=200,timeout:o,suspensible:a=!0,onError:l}=e;let c,h=null,u=0;const d=()=>(u++,h=null,f()),f=()=>{let e;return h||(e=h=t().catch(e=>{if(e=e instanceof Error?e:new Error(String(e)),l)return new Promise((t,n)=>{const i=()=>t(d()),r=()=>n(e);l(e,i,r,u+1)});throw e}).then(t=>e!==h&&h?h:(t&&(t.__esModule||"Module"===t[Symbol.toStringTag])&&(t=t.default),c=t,t)))};return jn({name:"AsyncComponentWrapper",__asyncLoader:f,get __asyncResolved(){return c},setup(){const e=us;if(c)return()=>Bn(c,e);const t=t=>{h=null,gt(t,e,13,!r)};if(a&&e.suspense||bs)return f().then(t=>()=>Bn(t,e)).catch(e=>(t(e),()=>r?Kr(r,{error:e}):null));const i=Xe(!1),l=Xe(),u=Xe(!!s);return s&&setTimeout(()=>{u.value=!1},s),null!=o&&setTimeout(()=>{if(!i.value&&!l.value){const e=new Error(`Async component timed out after ${o}ms.`);t(e),l.value=e}},o),f().then(()=>{i.value=!0,e.parent&&Hn(e.parent.vnode)&&Tt(e.parent.update)}).catch(e=>{t(e),l.value=e}),()=>i.value&&c?Bn(c,e):l.value&&r?Kr(r,{error:l.value}):n&&!u.value?Kr(n):void 0}})}function Bn(e,{vnode:{ref:t,props:n,children:i,shapeFlag:r},parent:s}){const o=Kr(e,n,i);return o.ref=t,o}const Hn=e=>e.type.__isKeepAlive,Wn={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=ds(),r=n.ctx;if(!r.renderer)return()=>{const e=t.default&&t.default();return e&&1===e.length?e[0]:e};const s=new Map,o=new Set;let a=null;const l=n.suspense,{renderer:{p:c,m:h,um:u,o:{createElement:d}}}=r,f=d("div");function p(e){Kn(e),u(e,n,l,!0)}function g(e){s.forEach((t,n)=>{const i=Os(t.type);!i||e&&e(i)||m(n)})}function m(e){const t=s.get(e);a&&t.type===a.type?a&&Kn(a):p(t),s.delete(e),o.delete(e)}r.activate=(e,t,n,r,s)=>{const o=e.component;h(e,t,n,0,l),c(o.vnode,e,t,n,o,l,r,e.slotScopeIds,s),pr(()=>{o.isDeactivated=!1,o.a&&Object(i["n"])(o.a);const t=e.props&&e.props.onVnodeMounted;t&&as(t,o.parent,e)},l)},r.deactivate=e=>{const t=e.component;h(e,f,null,1,l),pr(()=>{t.da&&Object(i["n"])(t.da);const n=e.props&&e.props.onVnodeUnmounted;n&&as(n,t.parent,e),t.isDeactivated=!0},l)},Sn(()=>[e.include,e.exclude],([e,t])=>{e&&g(t=>Un(e,t)),t&&g(e=>!Un(t,e))},{flush:"post",deep:!0});let v=null;const b=()=>{null!=v&&s.set(v,Qn(n.subTree))};return ti(b),ii(b),ri(()=>{s.forEach(e=>{const{subTree:t,suspense:i}=n,r=Qn(t);if(e.type!==r.type)p(e);else{Kn(r);const e=r.component.da;e&&pr(e,i)}})}),()=>{if(v=null,!t.default)return null;const n=t.default(),i=n[0];if(n.length>1)return a=null,n;if(!Wr(i)||!(4&i.shapeFlag)&&!(128&i.shapeFlag))return a=null,i;let r=Qn(i);const l=r.type,c=Os(Vn(r)?r.type.__asyncResolved||{}:l),{include:h,exclude:u,max:d}=e;if(h&&(!c||!Un(h,c))||u&&c&&Un(u,c))return a=r,i;const f=null==r.key?l:r.key,p=s.get(f);return r.el&&(r=Jr(r),128&i.shapeFlag&&(i.ssContent=r)),v=f,p?(r.el=p.el,r.component=p.component,r.transition&&Mn(r,r.transition),r.shapeFlag|=512,o.delete(f),o.add(f)):(o.add(f),d&&o.size>parseInt(d,10)&&m(o.values().next().value)),r.shapeFlag|=256,a=r,sn(i.type)?i:r}}},Xn=Wn;function Un(e,t){return Object(i["o"])(e)?e.some(e=>Un(e,t)):Object(i["E"])(e)?e.split(",").includes(t):!!e.test&&e.test(t)}function Yn(e,t){qn(e,"a",t)}function Gn(e,t){qn(e,"da",t)}function qn(e,t,n=us){const i=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(Zn(t,i,n),n){let e=n.parent;while(e&&e.parent)Hn(e.parent.vnode)&&$n(i,t,n,e),e=e.parent}}function $n(e,t,n,r){const s=Zn(t,e,r,!0);si(()=>{Object(i["M"])(r[t],s)},n)}function Kn(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function Qn(e){return 128&e.shapeFlag?e.ssContent:e}function Zn(e,t,n=us,i=!1){if(n){const r=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;T(),fs(n);const r=pt(t,n,e,i);return ps(),E(),r});return i?r.unshift(s):r.push(s),s}}const Jn=e=>(t,n=us)=>(!bs||"sp"===e)&&Zn(e,t,n),ei=Jn("bm"),ti=Jn("m"),ni=Jn("bu"),ii=Jn("u"),ri=Jn("bum"),si=Jn("um"),oi=Jn("sp"),ai=Jn("rtg"),li=Jn("rtc");function ci(e,t=us){Zn("ec",e,t)}function hi(e,t){const n=Xt;if(null===n)return e;const r=Is(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,n,a,l=i["b"]]=t[o];Object(i["q"])(e)&&(e={mounted:e,updated:e}),e.deep&&In(n),s.push({dir:e,instance:r,value:n,oldValue:void 0,arg:a,modifiers:l})}return e}function ui(e,t,n,i){const r=e.dirs,s=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(T(),pt(l,n,8,[e.el,a,e,t]),E())}}const di="components",fi="directives";function pi(e,t){return bi(di,e,!0,t)||e}const gi=Symbol();function mi(e){return Object(i["E"])(e)?bi(di,e,!1)||e:e||gi}function vi(e){return bi(fi,e)}function bi(e,t,n=!0,r=!1){const s=Xt||us;if(s){const n=s.type;if(e===di){const e=Os(n,!1);if(e&&(e===t||e===Object(i["e"])(t)||e===Object(i["f"])(Object(i["e"])(t))))return n}const o=yi(s[e]||n[e],t)||yi(s.appContext[e],t);return!o&&r?n:o}}function yi(e,t){return e&&(e[t]||e[Object(i["e"])(t)]||e[Object(i["f"])(Object(i["e"])(t))])}function xi(e,t,n,r){let s;const o=n&&n[r];if(Object(i["o"])(e)||Object(i["E"])(e)){s=new Array(e.length);for(let n=0,i=e.length;n<i;n++)s[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,o&&o[n])}else if(Object(i["w"])(e))if(e[Symbol.iterator])s=Array.from(e,(e,n)=>t(e,n,void 0,o&&o[n]));else{const n=Object.keys(e);s=new Array(n.length);for(let i=0,r=n.length;i<r;i++){const r=n[i];s[i]=t(e[r],r,i,o&&o[i])}}else s=[];return n&&(n[r]=s),s}function wi(e,t){for(let n=0;n<t.length;n++){const r=t[n];if(Object(i["o"])(r))for(let t=0;t<r.length;t++)e[r[t].name]=r[t].fn;else r&&(e[r.name]=r.key?(...e)=>{const t=r.fn(...e);return t.key=r.key,t}:r.fn)}return e}function ki(e,t,n={},i,r){if(Xt.isCE||Xt.parent&&Vn(Xt.parent)&&Xt.parent.isCE)return Kr("slot","default"===t?null:{name:t},i&&i());let s=e[t];s&&s._c&&(s._d=!1),Rr();const o=s&&Si(s(n)),a=Hr(Er,{key:n.key||o&&o.key||"_"+t},o||(i?i():[]),o&&1===e._?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function Si(e){return e.some(e=>!Wr(e)||e.type!==Pr&&!(e.type===Er&&!Si(e.children)))?e:null}function _i(e,t){const n={};for(const r in e)n[t&&/[A-Z]/.test(r)?"on:"+r:Object(i["O"])(r)]=e[r];return n}const Ai=e=>e?gs(e)?Is(e)||e.proxy:Ai(e.parent):null,Ci=Object(i["h"])(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ai(e.parent),$root:e=>Ai(e.root),$emit:e=>e.emit,$options:e=>Ni(e),$forceUpdate:e=>e.f||(e.f=()=>Tt(e.update)),$nextTick:e=>e.n||(e.n=Ct.bind(e.proxy)),$watch:e=>An.bind(e)}),Ii={get({_:e},t){const{ctx:n,setupState:r,data:s,props:o,accessCache:a,type:l,appContext:c}=e;let h;if("$"!==t[0]){const l=a[t];if(void 0!==l)switch(l){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return o[t]}else{if(r!==i["b"]&&Object(i["k"])(r,t))return a[t]=1,r[t];if(s!==i["b"]&&Object(i["k"])(s,t))return a[t]=2,s[t];if((h=e.propsOptions[0])&&Object(i["k"])(h,t))return a[t]=3,o[t];if(n!==i["b"]&&Object(i["k"])(n,t))return a[t]=4,n[t];Ei&&(a[t]=0)}}const u=Ci[t];let d,f;return u?("$attrs"===t&&O(e,"get",t),u(e)):(d=l.__cssModules)&&(d=d[t])?d:n!==i["b"]&&Object(i["k"])(n,t)?(a[t]=4,n[t]):(f=c.config.globalProperties,Object(i["k"])(f,t)?f[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return s!==i["b"]&&Object(i["k"])(s,t)?(s[t]=n,!0):r!==i["b"]&&Object(i["k"])(r,t)?(r[t]=n,!0):!Object(i["k"])(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let l;return!!n[a]||e!==i["b"]&&Object(i["k"])(e,a)||t!==i["b"]&&Object(i["k"])(t,a)||(l=o[0])&&Object(i["k"])(l,a)||Object(i["k"])(r,a)||Object(i["k"])(Ci,a)||Object(i["k"])(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:Object(i["k"])(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};const Ti=Object(i["h"])({},Ii,{get(e,t){if(t!==Symbol.unscopables)return Ii.get(e,t,e)},has(e,t){const n="_"!==t[0]&&!Object(i["r"])(t);return n}});let Ei=!0;function Oi(e){const t=Ni(e),n=e.proxy,r=e.ctx;Ei=!1,t.beforeCreate&&Li(t.beforeCreate,e,"bc");const{data:s,computed:o,methods:a,watch:l,provide:c,inject:h,created:u,beforeMount:d,mounted:f,beforeUpdate:p,updated:g,activated:m,deactivated:v,beforeDestroy:b,beforeUnmount:y,destroyed:x,unmounted:w,render:k,renderTracked:S,renderTriggered:_,errorCaptured:A,serverPrefetch:C,expose:I,inheritAttrs:T,components:E,directives:O,filters:P}=t,L=null;if(h&&Pi(h,r,L,e.appContext.config.unwrapInjectedRef),a)for(const N in a){const e=a[N];Object(i["q"])(e)&&(r[N]=e.bind(n))}if(s){0;const t=s.call(n,n);0,Object(i["w"])(t)&&(e.data=Te(t))}if(Ei=!0,o)for(const N in o){const e=o[N],t=Object(i["q"])(e)?e.bind(n,n):Object(i["q"])(e.get)?e.get.bind(n,n):i["d"];0;const s=!Object(i["q"])(e)&&Object(i["q"])(e.set)?e.set.bind(n):i["d"],a=Ds({get:t,set:s});Object.defineProperty(r,N,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(l)for(const i in l)Di(l[i],r,n,i);if(c){const e=Object(i["q"])(c)?c.call(n):c;Reflect.ownKeys(e).forEach(t=>{vn(t,e[t])})}function D(e,t){Object(i["o"])(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(u&&Li(u,e,"c"),D(ei,d),D(ti,f),D(ni,p),D(ii,g),D(Yn,m),D(Gn,v),D(ci,A),D(li,S),D(ai,_),D(ri,y),D(si,w),D(oi,C),Object(i["o"])(I))if(I.length){const t=e.exposed||(e.exposed={});I.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})})}else e.exposed||(e.exposed={});k&&e.render===i["d"]&&(e.render=k),null!=T&&(e.inheritAttrs=T),E&&(e.components=E),O&&(e.directives=O)}function Pi(e,t,n=i["d"],r=!1){Object(i["o"])(e)&&(e=Vi(e));for(const s in e){const n=e[s];let o;o=Object(i["w"])(n)?"default"in n?bn(n.from||s,n.default,!0):bn(n.from||s):bn(n),We(o)&&r?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:e=>o.value=e}):t[s]=o}}function Li(e,t,n){pt(Object(i["o"])(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Di(e,t,n,r){const s=r.includes(".")?Cn(n,r):()=>n[r];if(Object(i["E"])(e)){const n=t[e];Object(i["q"])(n)&&Sn(s,n)}else if(Object(i["q"])(e))Sn(s,e.bind(n));else if(Object(i["w"])(e))if(Object(i["o"])(e))e.forEach(e=>Di(e,t,n,r));else{const r=Object(i["q"])(e.handler)?e.handler.bind(n):t[e.handler];Object(i["q"])(r)&&Sn(s,r,e)}else 0}function Ni(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,l=o.get(t);let c;return l?c=l:s.length||n||r?(c={},s.length&&s.forEach(e=>Ri(c,e,a,!0)),Ri(c,t,a)):c=t,Object(i["w"])(t)&&o.set(t,c),c}function Ri(e,t,n,i=!1){const{mixins:r,extends:s}=t;s&&Ri(e,s,n,!0),r&&r.forEach(t=>Ri(e,t,n,!0));for(const o in t)if(i&&"expose"===o);else{const i=Mi[o]||n&&n[o];e[o]=i?i(e[o],t[o]):t[o]}return e}const Mi={data:Fi,props:Bi,emits:Bi,methods:Bi,computed:Bi,beforeCreate:zi,created:zi,beforeMount:zi,mounted:zi,beforeUpdate:zi,updated:zi,beforeDestroy:zi,beforeUnmount:zi,destroyed:zi,unmounted:zi,activated:zi,deactivated:zi,errorCaptured:zi,serverPrefetch:zi,components:Bi,directives:Bi,watch:Hi,provide:Fi,inject:ji};function Fi(e,t){return t?e?function(){return Object(i["h"])(Object(i["q"])(e)?e.call(this,this):e,Object(i["q"])(t)?t.call(this,this):t)}:t:e}function ji(e,t){return Bi(Vi(e),Vi(t))}function Vi(e){if(Object(i["o"])(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function zi(e,t){return e?[...new Set([].concat(e,t))]:t}function Bi(e,t){return e?Object(i["h"])(Object(i["h"])(Object.create(null),e),t):t}function Hi(e,t){if(!e)return t;if(!t)return e;const n=Object(i["h"])(Object.create(null),e);for(const i in t)n[i]=zi(e[i],t[i]);return n}function Wi(e,t,n,r=!1){const s={},o={};Object(i["g"])(o,Yr,1),e.propsDefaults=Object.create(null),Ui(e,t,s,o);for(const i in e.propsOptions[0])i in s||(s[i]=void 0);n?e.props=r?s:Ee(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function Xi(e,t,n,r){const{props:s,attrs:o,vnode:{patchFlag:a}}=e,l=Fe(s),[c]=e.propsOptions;let h=!1;if(!(r||a>0)||16&a){let r;Ui(e,t,s,o)&&(h=!0);for(const o in l)t&&(Object(i["k"])(t,o)||(r=Object(i["l"])(o))!==o&&Object(i["k"])(t,r))||(c?!n||void 0===n[o]&&void 0===n[r]||(s[o]=Yi(c,l,o,void 0,e,!0)):delete s[o]);if(o!==l)for(const e in o)t&&Object(i["k"])(t,e)||(delete o[e],h=!0)}else if(8&a){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let a=n[r];if(Wt(e.emitsOptions,a))continue;const u=t[a];if(c)if(Object(i["k"])(o,a))u!==o[a]&&(o[a]=u,h=!0);else{const t=Object(i["e"])(a);s[t]=Yi(c,l,t,u,e,!1)}else u!==o[a]&&(o[a]=u,h=!0)}}h&&L(e,"set","$attrs")}function Ui(e,t,n,r){const[s,o]=e.propsOptions;let a,l=!1;if(t)for(let c in t){if(Object(i["A"])(c))continue;const h=t[c];let u;s&&Object(i["k"])(s,u=Object(i["e"])(c))?o&&o.includes(u)?(a||(a={}))[u]=h:n[u]=h:Wt(e.emitsOptions,c)||c in r&&h===r[c]||(r[c]=h,l=!0)}if(o){const t=Fe(n),r=a||i["b"];for(let a=0;a<o.length;a++){const l=o[a];n[l]=Yi(s,t,l,r[l],e,!Object(i["k"])(r,l))}}return l}function Yi(e,t,n,r,s,o){const a=e[n];if(null!=a){const e=Object(i["k"])(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&Object(i["q"])(e)){const{propsDefaults:i}=s;n in i?r=i[n]:(fs(s),r=i[n]=e.call(null,t),ps())}else r=e}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==Object(i["l"])(n)||(r=!0))}return r}function Gi(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,a={},l=[];let c=!1;if(!Object(i["q"])(e)){const r=e=>{c=!0;const[n,r]=Gi(e,t,!0);Object(i["h"])(a,n),r&&l.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!c)return Object(i["w"])(e)&&r.set(e,i["a"]),i["a"];if(Object(i["o"])(o))for(let u=0;u<o.length;u++){0;const e=Object(i["e"])(o[u]);qi(e)&&(a[e]=i["b"])}else if(o){0;for(const e in o){const t=Object(i["e"])(e);if(qi(t)){const n=o[e],r=a[t]=Object(i["o"])(n)||Object(i["q"])(n)?{type:n}:n;if(r){const e=Qi(Boolean,r.type),n=Qi(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||Object(i["k"])(r,"default"))&&l.push(t)}}}}const h=[a,l];return Object(i["w"])(e)&&r.set(e,h),h}function qi(e){return"$"!==e[0]}function $i(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function Ki(e,t){return $i(e)===$i(t)}function Qi(e,t){return Object(i["o"])(t)?t.findIndex(t=>Ki(t,e)):Object(i["q"])(t)&&Ki(t,e)?0:-1}const Zi=e=>"_"===e[0]||"$stable"===e,Ji=e=>Object(i["o"])(e)?e.map(is):[is(e)],er=(e,t,n)=>{if(t._n)return t;const i=Kt((...e)=>Ji(t(...e)),n);return i._c=!1,i},tr=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Zi(s))continue;const n=e[s];if(Object(i["q"])(n))t[s]=er(s,n,r);else if(null!=n){0;const e=Ji(n);t[s]=()=>e}}},nr=(e,t)=>{const n=Ji(t);e.slots.default=()=>n},ir=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=Fe(t),Object(i["g"])(t,"_",n)):tr(t,e.slots={})}else e.slots={},t&&nr(e,t);Object(i["g"])(e.slots,Yr,1)},rr=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,a=i["b"];if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:(Object(i["h"])(s,t),n||1!==e||delete s._):(o=!t.$stable,tr(t,s)),a=t}else t&&(nr(e,t),a={default:1});if(o)for(const i in s)Zi(i)||i in a||delete s[i]};function sr(){return{app:null,config:{isNativeTag:i["c"],performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let or=0;function ar(e,t){return function(n,r=null){Object(i["q"])(n)||(n=Object.assign({},n)),null==r||Object(i["w"])(r)||(r=null);const s=sr(),o=new Set;let a=!1;const l=s.app={_uid:or++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Ks,get config(){return s.config},set config(e){0},use(e,...t){return o.has(e)||(e&&Object(i["q"])(e.install)?(o.add(e),e.install(l,...t)):Object(i["q"])(e)&&(o.add(e),e(l,...t))),l},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),l},component(e,t){return t?(s.components[e]=t,l):s.components[e]},directive(e,t){return t?(s.directives[e]=t,l):s.directives[e]},mount(i,o,c){if(!a){0;const h=Kr(n,r);return h.appContext=s,o&&t?t(h,i):e(h,i,c),a=!0,l._container=i,i.__vue_app__=l,Is(h.component)||h.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return s.provides[e]=t,l}};return l}}function lr(e,t,n,r,s=!1){if(Object(i["o"])(e))return void e.forEach((e,o)=>lr(e,t&&(Object(i["o"])(t)?t[o]:t),n,r,s));if(Vn(r)&&!s)return;const o=4&r.shapeFlag?Is(r.component)||r.component.proxy:r.el,a=s?null:o,{i:l,r:c}=e;const h=t&&t.r,u=l.refs===i["b"]?l.refs={}:l.refs,d=l.setupState;if(null!=h&&h!==c&&(Object(i["E"])(h)?(u[h]=null,Object(i["k"])(d,h)&&(d[h]=null)):We(h)&&(h.value=null)),Object(i["q"])(c))ft(c,l,12,[a,u]);else{const t=Object(i["E"])(c),r=We(c);if(t||r){const l=()=>{if(e.f){const n=t?u[c]:c.value;s?Object(i["o"])(n)&&Object(i["M"])(n,o):Object(i["o"])(n)?n.includes(o)||n.push(o):t?(u[c]=[o],Object(i["k"])(d,c)&&(d[c]=u[c])):(c.value=[o],e.k&&(u[e.k]=c.value))}else t?(u[c]=a,Object(i["k"])(d,c)&&(d[c]=a)):r&&(c.value=a,e.k&&(u[e.k]=a))};a?(l.id=-1,pr(l,n)):l()}else 0}}let cr=!1;const hr=e=>/svg/.test(e.namespaceURI)&&"foreignObject"!==e.tagName,ur=e=>8===e.nodeType;function dr(e){const{mt:t,p:n,o:{patchProp:r,createText:s,nextSibling:o,parentNode:a,remove:l,insert:c,createComment:h}}=e,u=(e,t)=>{if(!t.hasChildNodes())return n(null,e,t),Dt(),void(t._vnode=e);cr=!1,d(t.firstChild,e,null,null,null),Dt(),t._vnode=e,cr&&console.error("Hydration completed but contains mismatches.")},d=(n,i,r,l,h,u=!1)=>{const b=ur(n)&&"["===n.data,y=()=>m(n,i,r,l,h,b),{type:x,ref:w,shapeFlag:k,patchFlag:S}=i,_=n.nodeType;i.el=n,-2===S&&(u=!1,i.dynamicChildren=null);let A=null;switch(x){case Or:3!==_?""===i.children?(c(i.el=s(""),a(n),n),A=n):A=y():(n.data!==i.children&&(cr=!0,n.data=i.children),A=o(n));break;case Pr:A=8!==_||b?y():o(n);break;case Lr:if(1===_||3===_){A=n;const e=!i.children.length;for(let t=0;t<i.staticCount;t++)e&&(i.children+=1===A.nodeType?A.outerHTML:A.data),t===i.staticCount-1&&(i.anchor=A),A=o(A);return A}A=y();break;case Er:A=b?g(n,i,r,l,h,u):y();break;default:if(1&k)A=1!==_||i.type.toLowerCase()!==n.tagName.toLowerCase()?y():f(n,i,r,l,h,u);else if(6&k){i.slotScopeIds=h;const e=a(n);if(t(i,e,null,r,l,hr(e),u),A=b?v(n):o(n),A&&ur(A)&&"teleport end"===A.data&&(A=o(A)),Vn(i)){let t;b?(t=Kr(Er),t.anchor=A?A.previousSibling:e.lastChild):t=3===n.nodeType?es(""):Kr("div"),t.el=n,i.component.subTree=t}}else 64&k?A=8!==_?y():i.type.hydrate(n,i,r,l,h,u,e,p):128&k&&(A=i.type.hydrate(n,i,r,l,hr(a(n)),h,u,e,d))}return null!=w&&lr(w,null,l,i),A},f=(e,t,n,s,o,a)=>{a=a||!!t.dynamicChildren;const{type:c,props:h,patchFlag:u,shapeFlag:d,dirs:f}=t,g="input"===c&&f||"option"===c;if(g||-1!==u){if(f&&ui(t,null,n,"created"),h)if(g||!a||48&u)for(const t in h)(g&&t.endsWith("value")||Object(i["x"])(t)&&!Object(i["A"])(t))&&r(e,t,null,h[t],!1,void 0,n);else h.onClick&&r(e,"onClick",null,h.onClick,!1,void 0,n);let c;if((c=h&&h.onVnodeBeforeMount)&&as(c,n,t),f&&ui(t,null,n,"beforeMount"),((c=h&&h.onVnodeMounted)||f)&&gn(()=>{c&&as(c,n,t),f&&ui(t,null,n,"mounted")},s),16&d&&(!h||!h.innerHTML&&!h.textContent)){let i=p(e.firstChild,t,e,n,s,o,a);while(i){cr=!0;const e=i;i=i.nextSibling,l(e)}}else 8&d&&e.textContent!==t.children&&(cr=!0,e.textContent=t.children)}return e.nextSibling},p=(e,t,i,r,s,o,a)=>{a=a||!!t.dynamicChildren;const l=t.children,c=l.length;for(let h=0;h<c;h++){const t=a?l[h]:l[h]=is(l[h]);if(e)e=d(e,t,r,s,o,a);else{if(t.type===Or&&!t.children)continue;cr=!0,n(null,t,i,null,r,s,hr(i),o)}}return e},g=(e,t,n,i,r,s)=>{const{slotScopeIds:l}=t;l&&(r=r?r.concat(l):l);const u=a(e),d=p(o(e),t,u,n,i,r,s);return d&&ur(d)&&"]"===d.data?o(t.anchor=d):(cr=!0,c(t.anchor=h("]"),u,d),d)},m=(e,t,i,r,s,c)=>{if(cr=!0,t.el=null,c){const t=v(e);while(1){const n=o(e);if(!n||n===t)break;l(n)}}const h=o(e),u=a(e);return l(e),n(null,t,u,h,i,r,hr(u),s),h},v=e=>{let t=0;while(e)if(e=o(e),e&&ur(e)&&("["===e.data&&t++,"]"===e.data)){if(0===t)return o(e);t--}return e};return[u,d]}function fr(){}const pr=gn;function gr(e){return vr(e)}function mr(e){return vr(e,dr)}function vr(e,t){fr();const n=Object(i["i"])();n.__VUE__=!0;const{insert:r,remove:s,patchProp:o,createElement:a,createText:l,createComment:c,setText:h,setElementText:u,parentNode:d,nextSibling:f,setScopeId:p=i["d"],cloneNode:g,insertStaticContent:m}=e,v=(e,t,n,i=null,r=null,s=null,o=!1,a=null,l=!!t.dynamicChildren)=>{if(e===t)return;e&&!Xr(e,t)&&(i=q(e),W(e,r,s,!0),e=null),-2===t.patchFlag&&(l=!1,t.dynamicChildren=null);const{type:c,ref:h,shapeFlag:u}=t;switch(c){case Or:b(e,t,n,i);break;case Pr:y(e,t,n,i);break;case Lr:null==e&&x(t,n,i,o);break;case Er:D(e,t,n,i,r,s,o,a,l);break;default:1&u?_(e,t,n,i,r,s,o,a,l):6&u?N(e,t,n,i,r,s,o,a,l):(64&u||128&u)&&c.process(e,t,n,i,r,s,o,a,l,K)}null!=h&&r&&lr(h,e&&e.ref,s,t||e,!t)},b=(e,t,n,i)=>{if(null==e)r(t.el=l(t.children),n,i);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},y=(e,t,n,i)=>{null==e?r(t.el=c(t.children||""),n,i):t.el=e.el},x=(e,t,n,i)=>{[e.el,e.anchor]=m(e.children,t,n,i,e.el,e.anchor)},w=({el:e,anchor:t},n,i)=>{let s;while(e&&e!==t)s=f(e),r(e,n,i),e=s;r(t,n,i)},S=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=f(e),s(e),e=n;s(t)},_=(e,t,n,i,r,s,o,a,l)=>{o=o||"svg"===t.type,null==e?A(t,n,i,r,s,o,a,l):O(e,t,r,s,o,a,l)},A=(e,t,n,s,l,c,h,d)=>{let f,p;const{type:m,props:v,shapeFlag:b,transition:y,patchFlag:x,dirs:w}=e;if(e.el&&void 0!==g&&-1===x)f=e.el=g(e.el);else{if(f=e.el=a(e.type,c,v&&v.is,v),8&b?u(f,e.children):16&b&&I(e.children,f,null,s,l,c&&"foreignObject"!==m,h,d),w&&ui(e,null,s,"created"),v){for(const t in v)"value"===t||Object(i["A"])(t)||o(f,t,null,v[t],c,e.children,s,l,G);"value"in v&&o(f,"value",null,v.value),(p=v.onVnodeBeforeMount)&&as(p,s,e)}C(f,e,e.scopeId,h,s)}w&&ui(e,null,s,"beforeMount");const k=(!l||l&&!l.pendingBranch)&&y&&!y.persisted;k&&y.beforeEnter(f),r(f,t,n),((p=v&&v.onVnodeMounted)||k||w)&&pr(()=>{p&&as(p,s,e),k&&y.enter(f),w&&ui(e,null,s,"mounted")},l)},C=(e,t,n,i,r)=>{if(n&&p(e,n),i)for(let s=0;s<i.length;s++)p(e,i[s]);if(r){let n=r.subTree;if(t===n){const t=r.vnode;C(e,t,t.scopeId,t.slotScopeIds,r.parent)}}},I=(e,t,n,i,r,s,o,a,l=0)=>{for(let c=l;c<e.length;c++){const l=e[c]=a?rs(e[c]):is(e[c]);v(null,l,t,n,i,r,s,o,a)}},O=(e,t,n,r,s,a,l)=>{const c=t.el=e.el;let{patchFlag:h,dynamicChildren:d,dirs:f}=t;h|=16&e.patchFlag;const p=e.props||i["b"],g=t.props||i["b"];let m;n&&br(n,!1),(m=g.onVnodeBeforeUpdate)&&as(m,n,t,e),f&&ui(t,e,n,"beforeUpdate"),n&&br(n,!0);const v=s&&"foreignObject"!==t.type;if(d?P(e.dynamicChildren,d,c,n,r,v,a):l||V(e,t,c,null,n,r,v,a,!1),h>0){if(16&h)L(c,t,p,g,n,r,s);else if(2&h&&p.class!==g.class&&o(c,"class",null,g.class,s),4&h&&o(c,"style",p.style,g.style,s),8&h){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const a=i[t],l=p[a],h=g[a];h===l&&"value"!==a||o(c,a,l,h,s,e.children,n,r,G)}}1&h&&e.children!==t.children&&u(c,t.children)}else l||null!=d||L(c,t,p,g,n,r,s);((m=g.onVnodeUpdated)||f)&&pr(()=>{m&&as(m,n,t,e),f&&ui(t,e,n,"updated")},r)},P=(e,t,n,i,r,s,o)=>{for(let a=0;a<t.length;a++){const l=e[a],c=t[a],h=l.el&&(l.type===Er||!Xr(l,c)||70&l.shapeFlag)?d(l.el):n;v(l,c,h,null,i,r,s,o,!0)}},L=(e,t,n,r,s,a,l)=>{if(n!==r){for(const c in r){if(Object(i["A"])(c))continue;const h=r[c],u=n[c];h!==u&&"value"!==c&&o(e,c,u,h,l,t.children,s,a,G)}if(n!==i["b"])for(const c in n)Object(i["A"])(c)||c in r||o(e,c,n[c],null,l,t.children,s,a,G);"value"in r&&o(e,"value",n.value,r.value)}},D=(e,t,n,i,s,o,a,c,h)=>{const u=t.el=e?e.el:l(""),d=t.anchor=e?e.anchor:l("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:g}=t;g&&(c=c?c.concat(g):g),null==e?(r(u,n,i),r(d,n,i),I(t.children,n,d,s,o,a,c,h)):f>0&&64&f&&p&&e.dynamicChildren?(P(e.dynamicChildren,p,n,s,o,a,c),(null!=t.key||s&&t===s.subTree)&&yr(e,t,!0)):V(e,t,n,d,s,o,a,c,h)},N=(e,t,n,i,r,s,o,a,l)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?r.ctx.activate(t,n,i,o,l):R(t,n,i,r,s,o,l):M(e,t,l)},R=(e,t,n,i,r,s,o)=>{const a=e.component=hs(e,i,r);if(Hn(e)&&(a.ctx.renderer=K),ys(a),a.asyncDep){if(r&&r.registerDep(a,F),!e.el){const e=a.subTree=Kr(Pr);y(null,e,t,n)}}else F(a,e,t,n,r,s,o)},M=(e,t,n)=>{const i=t.component=e.component;if(tn(e,t,n)){if(i.asyncDep&&!i.asyncResolved)return void j(i,t,n);i.next=t,Ot(i.update),i.update()}else t.el=e.el,i.vnode=t},F=(e,t,n,r,s,o,a)=>{const l=()=>{if(e.isMounted){let t,{next:n,bu:r,u:l,parent:c,vnode:h}=e,u=n;0,br(e,!1),n?(n.el=h.el,j(e,n,a)):n=h,r&&Object(i["n"])(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&as(t,c,n,h),br(e,!0);const f=Qt(e);0;const p=e.subTree;e.subTree=f,v(p,f,d(p.el),q(p),e,s,o),n.el=f.el,null===u&&rn(e,f.el),l&&pr(l,s),(t=n.props&&n.props.onVnodeUpdated)&&pr(()=>as(t,c,n,h),s)}else{let a;const{el:l,props:c}=t,{bm:h,m:u,parent:d}=e,f=Vn(t);if(br(e,!1),h&&Object(i["n"])(h),!f&&(a=c&&c.onVnodeBeforeMount)&&as(a,d,t),br(e,!0),l&&Z){const n=()=>{e.subTree=Qt(e),Z(l,e.subTree,e,s,null)};f?t.type.__asyncLoader().then(()=>!e.isUnmounted&&n()):n()}else{0;const i=e.subTree=Qt(e);0,v(null,i,n,r,e,s,o),t.el=i.el}if(u&&pr(u,s),!f&&(a=c&&c.onVnodeMounted)){const e=t;pr(()=>as(a,d,e),s)}(256&t.shapeFlag||d&&Vn(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&pr(e.a,s),e.isMounted=!0,t=n=r=null}},c=e.effect=new k(l,()=>Tt(h),e.scope),h=e.update=()=>c.run();h.id=e.uid,br(e,!0),h()},j=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,Xi(e,t.props,i,n),rr(e,t.children,n),T(),Lt(),E()},V=(e,t,n,i,r,s,o,a,l=!1)=>{const c=e&&e.children,h=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void B(c,d,n,i,r,s,o,a,l);if(256&f)return void z(c,d,n,i,r,s,o,a,l)}8&p?(16&h&&G(c,r,s),d!==c&&u(n,d)):16&h?16&p?B(c,d,n,i,r,s,o,a,l):G(c,r,s,!0):(8&h&&u(n,""),16&p&&I(d,n,i,r,s,o,a,l))},z=(e,t,n,r,s,o,a,l,c)=>{e=e||i["a"],t=t||i["a"];const h=e.length,u=t.length,d=Math.min(h,u);let f;for(f=0;f<d;f++){const i=t[f]=c?rs(t[f]):is(t[f]);v(e[f],i,n,null,s,o,a,l,c)}h>u?G(e,s,o,!0,!1,d):I(t,n,r,s,o,a,l,c,d)},B=(e,t,n,r,s,o,a,l,c)=>{let h=0;const u=t.length;let d=e.length-1,f=u-1;while(h<=d&&h<=f){const i=e[h],r=t[h]=c?rs(t[h]):is(t[h]);if(!Xr(i,r))break;v(i,r,n,null,s,o,a,l,c),h++}while(h<=d&&h<=f){const i=e[d],r=t[f]=c?rs(t[f]):is(t[f]);if(!Xr(i,r))break;v(i,r,n,null,s,o,a,l,c),d--,f--}if(h>d){if(h<=f){const e=f+1,i=e<u?t[e].el:r;while(h<=f)v(null,t[h]=c?rs(t[h]):is(t[h]),n,i,s,o,a,l,c),h++}}else if(h>f)while(h<=d)W(e[h],s,o,!0),h++;else{const p=h,g=h,m=new Map;for(h=g;h<=f;h++){const e=t[h]=c?rs(t[h]):is(t[h]);null!=e.key&&m.set(e.key,h)}let b,y=0;const x=f-g+1;let w=!1,k=0;const S=new Array(x);for(h=0;h<x;h++)S[h]=0;for(h=p;h<=d;h++){const i=e[h];if(y>=x){W(i,s,o,!0);continue}let r;if(null!=i.key)r=m.get(i.key);else for(b=g;b<=f;b++)if(0===S[b-g]&&Xr(i,t[b])){r=b;break}void 0===r?W(i,s,o,!0):(S[r-g]=h+1,r>=k?k=r:w=!0,v(i,t[r],n,null,s,o,a,l,c),y++)}const _=w?xr(S):i["a"];for(b=_.length-1,h=x-1;h>=0;h--){const e=g+h,i=t[e],d=e+1<u?t[e+1].el:r;0===S[h]?v(null,i,n,d,s,o,a,l,c):w&&(b<0||h!==_[b]?H(i,n,d,2):b--)}}},H=(e,t,n,i,s=null)=>{const{el:o,type:a,transition:l,children:c,shapeFlag:h}=e;if(6&h)return void H(e.component.subTree,t,n,i);if(128&h)return void e.suspense.move(t,n,i);if(64&h)return void a.move(e,t,n,K);if(a===Er){r(o,t,n);for(let e=0;e<c.length;e++)H(c[e],t,n,i);return void r(e.anchor,t,n)}if(a===Lr)return void w(e,t,n);const u=2!==i&&1&h&&l;if(u)if(0===i)l.beforeEnter(o),r(o,t,n),pr(()=>l.enter(o),s);else{const{leave:e,delayLeave:i,afterLeave:s}=l,a=()=>r(o,t,n),c=()=>{e(o,()=>{a(),s&&s()})};i?i(o,a,c):c()}else r(o,t,n)},W=(e,t,n,i=!1,r=!1)=>{const{type:s,props:o,ref:a,children:l,dynamicChildren:c,shapeFlag:h,patchFlag:u,dirs:d}=e;if(null!=a&&lr(a,null,n,e,!0),256&h)return void t.ctx.deactivate(e);const f=1&h&&d,p=!Vn(e);let g;if(p&&(g=o&&o.onVnodeBeforeUnmount)&&as(g,t,e),6&h)Y(e.component,n,i);else{if(128&h)return void e.suspense.unmount(n,i);f&&ui(e,null,t,"beforeUnmount"),64&h?e.type.remove(e,t,n,r,K,i):c&&(s!==Er||u>0&&64&u)?G(c,t,n,!1,!0):(s===Er&&384&u||!r&&16&h)&&G(l,t,n),i&&X(e)}(p&&(g=o&&o.onVnodeUnmounted)||f)&&pr(()=>{g&&as(g,t,e),f&&ui(e,null,t,"unmounted")},n)},X=e=>{const{type:t,el:n,anchor:i,transition:r}=e;if(t===Er)return void U(n,i);if(t===Lr)return void S(e);const o=()=>{s(n),r&&!r.persisted&&r.afterLeave&&r.afterLeave()};if(1&e.shapeFlag&&r&&!r.persisted){const{leave:t,delayLeave:i}=r,s=()=>t(n,o);i?i(e.el,o,s):s()}else o()},U=(e,t)=>{let n;while(e!==t)n=f(e),s(e),e=n;s(t)},Y=(e,t,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:l}=e;r&&Object(i["n"])(r),s.stop(),o&&(o.active=!1,W(a,e,t,n)),l&&pr(l,t),pr(()=>{e.isUnmounted=!0},t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},G=(e,t,n,i=!1,r=!1,s=0)=>{for(let o=s;o<e.length;o++)W(e[o],t,n,i,r)},q=e=>6&e.shapeFlag?q(e.component.subTree):128&e.shapeFlag?e.suspense.next():f(e.anchor||e.el),$=(e,t,n)=>{null==e?t._vnode&&W(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),Lt(),Dt(),t._vnode=e},K={p:v,um:W,m:H,r:X,mt:R,mc:I,pc:V,pbc:P,n:q,o:e};let Q,Z;return t&&([Q,Z]=t(K)),{render:$,hydrate:Q,createApp:ar($,Q)}}function br({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function yr(e,t,n=!1){const r=e.children,s=t.children;if(Object(i["o"])(r)&&Object(i["o"])(s))for(let i=0;i<r.length;i++){const e=r[i];let t=s[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[i]=rs(s[i]),t.el=e.el),n||yr(e,t))}}function xr(e){const t=e.slice(),n=[0];let i,r,s,o,a;const l=e.length;for(i=0;i<l;i++){const l=e[i];if(0!==l){if(r=n[n.length-1],e[r]<l){t[i]=r,n.push(i);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<l?s=a+1:o=a;l<e[n[s]]&&(s>0&&(t[i]=n[s-1]),n[s]=i)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}const wr=e=>e.__isTeleport,kr=e=>e&&(e.disabled||""===e.disabled),Sr=e=>"undefined"!==typeof SVGElement&&e instanceof SVGElement,_r=(e,t)=>{const n=e&&e.to;if(Object(i["E"])(n)){if(t){const e=t(n);return e}return null}return n},Ar={__isTeleport:!0,process(e,t,n,i,r,s,o,a,l,c){const{mc:h,pc:u,pbc:d,o:{insert:f,querySelector:p,createText:g,createComment:m}}=c,v=kr(t.props);let{shapeFlag:b,children:y,dynamicChildren:x}=t;if(null==e){const e=t.el=g(""),c=t.anchor=g("");f(e,n,i),f(c,n,i);const u=t.target=_r(t.props,p),d=t.targetAnchor=g("");u&&(f(d,u),o=o||Sr(u));const m=(e,t)=>{16&b&&h(y,e,t,r,s,o,a,l)};v?m(n,c):u&&m(u,d)}else{t.el=e.el;const i=t.anchor=e.anchor,h=t.target=e.target,f=t.targetAnchor=e.targetAnchor,g=kr(e.props),m=g?n:h,b=g?i:f;if(o=o||Sr(h),x?(d(e.dynamicChildren,x,m,r,s,o,a),yr(e,t,!0)):l||u(e,t,m,b,r,s,o,a,!1),v)g||Cr(t,n,i,c,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const e=t.target=_r(t.props,p);e&&Cr(t,e,null,c,0)}else g&&Cr(t,h,f,c,1)}},remove(e,t,n,i,{um:r,o:{remove:s}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:h,target:u,props:d}=e;if(u&&s(h),(o||!kr(d))&&(s(c),16&a))for(let f=0;f<l.length;f++){const e=l[f];r(e,t,n,!0,!!e.dynamicChildren)}},move:Cr,hydrate:Ir};function Cr(e,t,n,{o:{insert:i},m:r},s=2){0===s&&i(e.targetAnchor,t,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:h}=e,u=2===s;if(u&&i(o,t,n),(!u||kr(h))&&16&l)for(let d=0;d<c.length;d++)r(c[d],t,n,2);u&&i(a,t,n)}function Ir(e,t,n,i,r,s,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const h=t.target=_r(t.props,l);if(h){const l=h._lpa||h.firstChild;if(16&t.shapeFlag)if(kr(t.props))t.anchor=c(o(e),t,a(e),n,i,r,s),t.targetAnchor=l;else{t.anchor=o(e);let a=l;while(a)if(a=o(a),a&&8===a.nodeType&&"teleport anchor"===a.data){t.targetAnchor=a,h._lpa=t.targetAnchor&&o(t.targetAnchor);break}c(l,t,h,n,i,r,s)}}return t.anchor&&o(t.anchor)}const Tr=Ar,Er=Symbol(void 0),Or=Symbol(void 0),Pr=Symbol(void 0),Lr=Symbol(void 0),Dr=[];let Nr=null;function Rr(e=!1){Dr.push(Nr=e?null:[])}function Mr(){Dr.pop(),Nr=Dr[Dr.length-1]||null}let Fr,jr=1;function Vr(e){jr+=e}function zr(e){return e.dynamicChildren=jr>0?Nr||i["a"]:null,Mr(),jr>0&&Nr&&Nr.push(e),e}function Br(e,t,n,i,r,s){return zr($r(e,t,n,i,r,s,!0))}function Hr(e,t,n,i,r){return zr(Kr(e,t,n,i,r,!0))}function Wr(e){return!!e&&!0===e.__v_isVNode}function Xr(e,t){return e.type===t.type&&e.key===t.key}function Ur(e){Fr=e}const Yr="__vInternal",Gr=({key:e})=>null!=e?e:null,qr=({ref:e,ref_key:t,ref_for:n})=>null!=e?Object(i["E"])(e)||We(e)||Object(i["q"])(e)?{i:Xt,r:e,k:t,f:!!n}:e:null;function $r(e,t=null,n=null,r=0,s=null,o=(e===Er?0:1),a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Gr(t),ref:t&&qr(t),scopeId:Ut,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return l?(ss(c,n),128&o&&e.normalize(c)):n&&(c.shapeFlag|=Object(i["E"])(n)?8:16),jr>0&&!a&&Nr&&(c.patchFlag>0||6&o)&&32!==c.patchFlag&&Nr.push(c),c}const Kr=Qr;function Qr(e,t=null,n=null,r=0,s=null,o=!1){if(e&&e!==gi||(e=Pr),Wr(e)){const i=Jr(e,t,!0);return n&&ss(i,n),jr>0&&!o&&Nr&&(6&i.shapeFlag?Nr[Nr.indexOf(e)]=i:Nr.push(i)),i.patchFlag|=-2,i}if(Ls(e)&&(e=e.__vccOpts),t){t=Zr(t);let{class:e,style:n}=t;e&&!Object(i["E"])(e)&&(t.class=Object(i["J"])(e)),Object(i["w"])(n)&&(Me(n)&&!Object(i["o"])(n)&&(n=Object(i["h"])({},n)),t.style=Object(i["L"])(n))}const a=Object(i["E"])(e)?1:sn(e)?128:wr(e)?64:Object(i["w"])(e)?4:Object(i["q"])(e)?2:0;return $r(e,t,n,r,s,a,o,!0)}function Zr(e){return e?Me(e)||Yr in e?Object(i["h"])({},e):e:null}function Jr(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=e,l=t?os(r||{},t):r,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Gr(l),ref:t&&t.ref?n&&s?Object(i["o"])(s)?s.concat(qr(t)):[s,qr(t)]:qr(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Er?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Jr(e.ssContent),ssFallback:e.ssFallback&&Jr(e.ssFallback),el:e.el,anchor:e.anchor};return c}function es(e=" ",t=0){return Kr(Or,null,e,t)}function ts(e,t){const n=Kr(Lr,null,e);return n.staticCount=t,n}function ns(e="",t=!1){return t?(Rr(),Hr(Pr,null,e)):Kr(Pr,null,e)}function is(e){return null==e||"boolean"===typeof e?Kr(Pr):Object(i["o"])(e)?Kr(Er,null,e.slice()):"object"===typeof e?rs(e):Kr(Or,null,String(e))}function rs(e){return null===e.el||e.memo?e:Jr(e)}function ss(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if(Object(i["o"])(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),ss(e,n()),n._c&&(n._d=!0)))}{n=32;const i=t._;i||Yr in t?3===i&&Xt&&(1===Xt.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=Xt}}else Object(i["q"])(t)?(t={default:t,_ctx:Xt},n=32):(t=String(t),64&r?(n=16,t=[es(t)]):n=8);e.children=t,e.shapeFlag|=n}function os(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=Object(i["J"])([t.class,r.class]));else if("style"===e)t.style=Object(i["L"])([t.style,r.style]);else if(Object(i["x"])(e)){const n=t[e],s=r[e];!s||n===s||Object(i["o"])(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=r[e])}return t}function as(e,t,n,i=null){pt(e,t,7,[n,i])}const ls=sr();let cs=0;function hs(e,t,n){const r=e.type,o=(t?t.appContext:e.appContext)||ls,a={uid:cs++,vnode:e,type:r,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new s(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gi(r,o),emitsOptions:Ht(r,o),emit:null,emitted:null,propsDefaults:i["b"],inheritAttrs:r.inheritAttrs,ctx:i["b"],data:i["b"],props:i["b"],attrs:i["b"],slots:i["b"],refs:i["b"],setupState:i["b"],setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=Bt.bind(null,a),e.ce&&e.ce(a),a}let us=null;const ds=()=>us||Xt,fs=e=>{us=e,e.scope.on()},ps=()=>{us&&us.scope.off(),us=null};function gs(e){return 4&e.vnode.shapeFlag}let ms,vs,bs=!1;function ys(e,t=!1){bs=t;const{props:n,children:i}=e.vnode,r=gs(e);Wi(e,n,r,t),ir(e,i);const s=r?xs(e,t):void 0;return bs=!1,s}function xs(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=je(new Proxy(e.ctx,Ii));const{setup:r}=n;if(r){const n=e.setupContext=r.length>1?Cs(e):null;fs(e),T();const s=ft(r,e,0,[e.props,n]);if(E(),ps(),Object(i["z"])(s)){if(s.then(ps,ps),t)return s.then(n=>{ws(e,n,t)}).catch(t=>{gt(t,e,0)});e.asyncDep=s}else ws(e,s,t)}else _s(e,t)}function ws(e,t,n){Object(i["q"])(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Object(i["w"])(t)&&(e.setupState=Qe(t)),_s(e,n)}function ks(e){ms=e,vs=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,Ti))}}const Ss=()=>!ms;function _s(e,t,n){const r=e.type;if(!e.render){if(!t&&ms&&!r.render){const t=r.template||Ni(e).template;if(t){0;const{isCustomElement:n,compilerOptions:s}=e.appContext.config,{delimiters:o,compilerOptions:a}=r,l=Object(i["h"])(Object(i["h"])({isCustomElement:n,delimiters:o},s),a);r.render=ms(t,l)}}e.render=r.render||i["d"],vs&&vs(e)}fs(e),T(),Oi(e),E(),ps()}function As(e){return new Proxy(e.attrs,{get(t,n){return O(e,"get","$attrs"),t[n]}})}function Cs(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=As(e))},slots:e.slots,emit:e.emit,expose:t}}function Is(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Qe(je(e.exposed)),{get(t,n){return n in t?t[n]:n in Ci?Ci[n](e):void 0}}))}const Ts=/(?:^|[-_])(\w)/g,Es=e=>e.replace(Ts,e=>e.toUpperCase()).replace(/[-_]/g,"");function Os(e,t=!0){return Object(i["q"])(e)?e.displayName||e.name:e.name||t&&e.__name}function Ps(e,t,n=!1){let i=Os(t);if(!i&&t.__file){const e=t.__file.match(/([^/\\]+)\.\w+$/);e&&(i=e[1])}if(!i&&e&&e.parent){const n=e=>{for(const n in e)if(e[n]===t)return n};i=n(e.components||e.parent.type.components)||n(e.appContext.components)}return i?Es(i):n?"App":"Anonymous"}function Ls(e){return Object(i["q"])(e)&&"__vccOpts"in e}const Ds=(e,t)=>st(e,t,bs);function Ns(){return null}function Rs(){return null}function Ms(e){0}function Fs(e,t){return null}function js(){return zs().slots}function Vs(){return zs().attrs}function zs(){const e=ds();return e.setupContext||(e.setupContext=Cs(e))}function Bs(e,t){const n=Object(i["o"])(e)?e.reduce((e,t)=>(e[t]={},e),{}):e;for(const r in t){const e=n[r];e?Object(i["o"])(e)||Object(i["q"])(e)?n[r]={type:e,default:t[r]}:e.default=t[r]:null===e&&(n[r]={default:t[r]})}return n}function Hs(e,t){const n={};for(const i in e)t.includes(i)||Object.defineProperty(n,i,{enumerable:!0,get:()=>e[i]});return n}function Ws(e){const t=ds();let n=e();return ps(),Object(i["z"])(n)&&(n=n.catch(e=>{throw fs(t),e})),[n,()=>fs(t)]}function Xs(e,t,n){const r=arguments.length;return 2===r?Object(i["w"])(t)&&!Object(i["o"])(t)?Wr(t)?Kr(e,null,[t]):Kr(e,t):Kr(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Wr(n)&&(n=[n]),Kr(e,t,n))}const Us=Symbol(""),Ys=()=>{{const e=bn(Us);return e||at("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}};function Gs(){return void 0}function qs(e,t,n,i){const r=n[i];if(r&&$s(r,e))return r;const s=t();return s.memo=e.slice(),n[i]=s}function $s(e,t){const n=e.memo;if(n.length!=t.length)return!1;for(let r=0;r<n.length;r++)if(Object(i["j"])(n[r],t[r]))return!1;return jr>0&&Nr&&Nr.push(e),!0}const Ks="3.2.39",Qs={createComponentInstance:hs,setupComponent:ys,renderComponentRoot:Qt,setCurrentRenderingInstance:Yt,isVNode:Wr,normalizeVNode:is},Zs=Qs,Js=null,eo=null,to="http://www.w3.org/2000/svg",no="undefined"!==typeof document?document:null,io=no&&no.createElement("template"),ro={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const r=t?no.createElementNS(to,e):no.createElement(e,n?{is:n}:void 0);return"select"===e&&i&&null!=i.multiple&&r.setAttribute("multiple",i.multiple),r},createText:e=>no.createTextNode(e),createComment:e=>no.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>no.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,i,r,s){const o=n?n.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling)){while(1)if(t.insertBefore(r.cloneNode(!0),n),r===s||!(r=r.nextSibling))break}else{io.innerHTML=i?`<svg>${e}</svg>`:e;const r=io.content;if(i){const e=r.firstChild;while(e.firstChild)r.appendChild(e.firstChild);r.removeChild(e)}t.insertBefore(r,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function so(e,t,n){const i=e._vtc;i&&(t=(t?[t,...i]:[...i]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function oo(e,t,n){const r=e.style,s=Object(i["E"])(n);if(n&&!s){for(const e in n)lo(r,e,n[e]);if(t&&!Object(i["E"])(t))for(const e in t)null==n[e]&&lo(r,e,"")}else{const i=r.display;s?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const ao=/\s*!important$/;function lo(e,t,n){if(Object(i["o"])(n))n.forEach(n=>lo(e,t,n));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=uo(e,t);ao.test(n)?e.setProperty(Object(i["l"])(r),n.replace(ao,""),"important"):e[r]=n}}const co=["Webkit","Moz","ms"],ho={};function uo(e,t){const n=ho[t];if(n)return n;let r=Object(i["e"])(t);if("filter"!==r&&r in e)return ho[t]=r;r=Object(i["f"])(r);for(let i=0;i<co.length;i++){const n=co[i]+r;if(n in e)return ho[t]=n}return t}const fo="http://www.w3.org/1999/xlink";function po(e,t,n,r,s){if(r&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(fo,t.slice(6,t.length)):e.setAttributeNS(fo,t,n);else{const r=Object(i["D"])(t);null==n||r&&!Object(i["m"])(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function go(e,t,n,r,s,o,a){if("innerHTML"===t||"textContent"===t)return r&&a(r,s,o),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const i=null==n?"":n;return e.value===i&&"OPTION"!==e.tagName||(e.value=i),void(null==n&&e.removeAttribute(t))}let l=!1;if(""===n||null==n){const r=typeof e[t];"boolean"===r?n=Object(i["m"])(n):null==n&&"string"===r?(n="",l=!0):"number"===r&&(n=0,l=!0)}try{e[t]=n}catch(c){0}l&&e.removeAttribute(t)}const[mo,vo]=(()=>{let e=Date.now,t=!1;if("undefined"!==typeof window){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let bo=0;const yo=Promise.resolve(),xo=()=>{bo=0},wo=()=>bo||(yo.then(xo),bo=mo());function ko(e,t,n,i){e.addEventListener(t,n,i)}function So(e,t,n,i){e.removeEventListener(t,n,i)}function _o(e,t,n,i,r=null){const s=e._vei||(e._vei={}),o=s[t];if(i&&o)o.value=i;else{const[n,a]=Co(t);if(i){const o=s[t]=Io(i,r);ko(e,n,o,a)}else o&&(So(e,n,o,a),s[t]=void 0)}}const Ao=/(?:Once|Passive|Capture)$/;function Co(e){let t;if(Ao.test(e)){let n;t={};while(n=e.match(Ao))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):Object(i["l"])(e.slice(2));return[n,t]}function Io(e,t){const n=e=>{const i=e.timeStamp||mo();(vo||i>=n.attached-1)&&pt(To(e,n.value),t,5,[e])};return n.value=e,n.attached=wo(),n}function To(e,t){if(Object(i["o"])(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e&&e(t))}return t}const Eo=/^on[a-z]/,Oo=(e,t,n,r,s=!1,o,a,l,c)=>{"class"===t?so(e,r,s):"style"===t?oo(e,n,r):Object(i["x"])(t)?Object(i["v"])(t)||_o(e,t,n,r,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):Po(e,t,r,s))?go(e,t,r,o,a,l,c):("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),po(e,t,r,s))};function Po(e,t,n,r){return r?"innerHTML"===t||"textContent"===t||!!(t in e&&Eo.test(t)&&Object(i["q"])(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!Eo.test(t)||!Object(i["E"])(n))&&t in e))))}function Lo(e,t){const n=jn(e);class i extends Ro{constructor(e){super(n,e,t)}}return i.def=n,i}const Do=e=>Lo(e,Ha),No="undefined"!==typeof HTMLElement?HTMLElement:class{};class Ro extends No{constructor(e,t={},n){super(),this._def=e,this._props=t,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&n?n(this._createVNode(),this.shadowRoot):this.attachShadow({mode:"open"})}connectedCallback(){this._connected=!0,this._instance||this._resolveDef()}disconnectedCallback(){this._connected=!1,Ct(()=>{this._connected||(Ba(null,this.shadowRoot),this._instance=null)})}_resolveDef(){if(this._resolved)return;this._resolved=!0;for(let n=0;n<this.attributes.length;n++)this._setAttr(this.attributes[n].name);new MutationObserver(e=>{for(const t of e)this._setAttr(t.attributeName)}).observe(this,{attributes:!0});const e=e=>{const{props:t,styles:n}=e,r=!Object(i["o"])(t),s=t?r?Object.keys(t):t:[];let o;if(r)for(const a in this._props){const e=t[a];(e===Number||e&&e.type===Number)&&(this._props[a]=Object(i["P"])(this._props[a]),(o||(o=Object.create(null)))[a]=!0)}this._numberProps=o;for(const i of Object.keys(this))"_"!==i[0]&&this._setProp(i,this[i],!0,!1);for(const a of s.map(i["e"]))Object.defineProperty(this,a,{get(){return this._getProp(a)},set(e){this._setProp(a,e)}});this._applyStyles(n),this._update()},t=this._def.__asyncLoader;t?t().then(e):e(this._def)}_setAttr(e){let t=this.getAttribute(e);this._numberProps&&this._numberProps[e]&&(t=Object(i["P"])(t)),this._setProp(Object(i["e"])(e),t,!1)}_getProp(e){return this._props[e]}_setProp(e,t,n=!0,r=!0){t!==this._props[e]&&(this._props[e]=t,r&&this._instance&&this._update(),n&&(!0===t?this.setAttribute(Object(i["l"])(e),""):"string"===typeof t||"number"===typeof t?this.setAttribute(Object(i["l"])(e),t+""):t||this.removeAttribute(Object(i["l"])(e))))}_update(){Ba(this._createVNode(),this.shadowRoot)}_createVNode(){const e=Kr(this._def,Object(i["h"])({},this._props));return this._instance||(e.ce=e=>{this._instance=e,e.isCE=!0,e.emit=(e,...t)=>{this.dispatchEvent(new CustomEvent(e,{detail:t}))};let t=this;while(t=t&&(t.parentNode||t.host))if(t instanceof Ro){e.parent=t._instance;break}}),e}_applyStyles(e){e&&e.forEach(e=>{const t=document.createElement("style");t.textContent=e,this.shadowRoot.appendChild(t)})}}function Mo(e="$style"){{const t=ds();if(!t)return i["b"];const n=t.type.__cssModules;if(!n)return i["b"];const r=n[e];return r||i["b"]}}function Fo(e){const t=ds();if(!t)return;const n=()=>jo(t.subTree,e(t.proxy));xn(n),ti(()=>{const e=new MutationObserver(n);e.observe(t.subTree.el.parentNode,{childList:!0}),si(()=>e.disconnect())})}function jo(e,t){if(128&e.shapeFlag){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{jo(n.activeBranch,t)})}while(e.component)e=e.component.subTree;if(1&e.shapeFlag&&e.el)Vo(e.el,t);else if(e.type===Er)e.children.forEach(e=>jo(e,t));else if(e.type===Lr){let{el:n,anchor:i}=e;while(n){if(Vo(n,t),n===i)break;n=n.nextSibling}}}function Vo(e,t){if(1===e.nodeType){const n=e.style;for(const e in t)n.setProperty("--"+e,t[e])}}const zo="transition",Bo="animation",Ho=(e,{slots:t})=>Xs(Pn,Go(e),t);Ho.displayName="Transition";const Wo={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Xo=Ho.props=Object(i["h"])({},Pn.props,Wo),Uo=(e,t=[])=>{Object(i["o"])(e)?e.forEach(e=>e(...t)):e&&e(...t)},Yo=e=>!!e&&(Object(i["o"])(e)?e.some(e=>e.length>1):e.length>1);function Go(e){const t={};for(const i in e)i in Wo||(t[i]=e[i]);if(!1===e.css)return t;const{name:n="v",type:r,duration:s,enterFromClass:o=n+"-enter-from",enterActiveClass:a=n+"-enter-active",enterToClass:l=n+"-enter-to",appearFromClass:c=o,appearActiveClass:h=a,appearToClass:u=l,leaveFromClass:d=n+"-leave-from",leaveActiveClass:f=n+"-leave-active",leaveToClass:p=n+"-leave-to"}=e,g=qo(s),m=g&&g[0],v=g&&g[1],{onBeforeEnter:b,onEnter:y,onEnterCancelled:x,onLeave:w,onLeaveCancelled:k,onBeforeAppear:S=b,onAppear:_=y,onAppearCancelled:A=x}=t,C=(e,t,n)=>{Qo(e,t?u:l),Qo(e,t?h:a),n&&n()},I=(e,t)=>{e._isLeaving=!1,Qo(e,d),Qo(e,p),Qo(e,f),t&&t()},T=e=>(t,n)=>{const i=e?_:y,s=()=>C(t,e,n);Uo(i,[t,s]),Zo(()=>{Qo(t,e?c:o),Ko(t,e?u:l),Yo(i)||ea(t,r,m,s)})};return Object(i["h"])(t,{onBeforeEnter(e){Uo(b,[e]),Ko(e,o),Ko(e,a)},onBeforeAppear(e){Uo(S,[e]),Ko(e,c),Ko(e,h)},onEnter:T(!1),onAppear:T(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>I(e,t);Ko(e,d),ra(),Ko(e,f),Zo(()=>{e._isLeaving&&(Qo(e,d),Ko(e,p),Yo(w)||ea(e,r,v,n))}),Uo(w,[e,n])},onEnterCancelled(e){C(e,!1),Uo(x,[e])},onAppearCancelled(e){C(e,!0),Uo(A,[e])},onLeaveCancelled(e){I(e),Uo(k,[e])}})}function qo(e){if(null==e)return null;if(Object(i["w"])(e))return[$o(e.enter),$o(e.leave)];{const t=$o(e);return[t,t]}}function $o(e){const t=Object(i["P"])(e);return t}function Ko(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=new Set)).add(t)}function Qo(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Zo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Jo=0;function ea(e,t,n,i){const r=e._endId=++Jo,s=()=>{r===e._endId&&i()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=ta(e,t);if(!o)return i();const c=o+"end";let h=0;const u=()=>{e.removeEventListener(c,d),s()},d=t=>{t.target===e&&++h>=l&&u()};setTimeout(()=>{h<l&&u()},a+1),e.addEventListener(c,d)}function ta(e,t){const n=window.getComputedStyle(e),i=e=>(n[e]||"").split(", "),r=i(zo+"Delay"),s=i(zo+"Duration"),o=na(r,s),a=i(Bo+"Delay"),l=i(Bo+"Duration"),c=na(a,l);let h=null,u=0,d=0;t===zo?o>0&&(h=zo,u=o,d=s.length):t===Bo?c>0&&(h=Bo,u=c,d=l.length):(u=Math.max(o,c),h=u>0?o>c?zo:Bo:null,d=h?h===zo?s.length:l.length:0);const f=h===zo&&/\b(transform|all)(,|$)/.test(n[zo+"Property"]);return{type:h,timeout:u,propCount:d,hasTransform:f}}function na(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map((t,n)=>ia(t)+ia(e[n])))}function ia(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function ra(){return document.body.offsetHeight}const sa=new WeakMap,oa=new WeakMap,aa={name:"TransitionGroup",props:Object(i["h"])({},Xo,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=ds(),i=Tn();let r,s;return ii(()=>{if(!r.length)return;const t=e.moveClass||(e.name||"v")+"-move";if(!da(r[0].el,n.vnode.el,t))return;r.forEach(ca),r.forEach(ha);const i=r.filter(ua);ra(),i.forEach(e=>{const n=e.el,i=n.style;Ko(n,t),i.transform=i.webkitTransform=i.transitionDuration="";const r=n._moveCb=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",r),n._moveCb=null,Qo(n,t))};n.addEventListener("transitionend",r)})}),()=>{const o=Fe(e),a=Go(o);let l=o.tag||Er;r=s,s=t.default?Fn(t.default()):[];for(let e=0;e<s.length;e++){const t=s[e];null!=t.key&&Mn(t,Dn(t,a,i,n))}if(r)for(let e=0;e<r.length;e++){const t=r[e];Mn(t,Dn(t,a,i,n)),sa.set(t,t.el.getBoundingClientRect())}return Kr(l,null,s)}}},la=aa;function ca(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function ha(e){oa.set(e,e.el.getBoundingClientRect())}function ua(e){const t=sa.get(e),n=oa.get(e),i=t.left-n.left,r=t.top-n.top;if(i||r){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${i}px,${r}px)`,t.transitionDuration="0s",e}}function da(e,t,n){const i=e.cloneNode();e._vtc&&e._vtc.forEach(e=>{e.split(/\s+/).forEach(e=>e&&i.classList.remove(e))}),n.split(/\s+/).forEach(e=>e&&i.classList.add(e)),i.style.display="none";const r=1===t.nodeType?t:t.parentNode;r.appendChild(i);const{hasTransform:s}=ta(i);return r.removeChild(i),s}const fa=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Object(i["o"])(t)?e=>Object(i["n"])(t,e):t};function pa(e){e.target.composing=!0}function ga(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ma={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e._assign=fa(s);const o=r||s.props&&"number"===s.props.type;ko(e,t?"change":"input",t=>{if(t.target.composing)return;let r=e.value;n&&(r=r.trim()),o&&(r=Object(i["P"])(r)),e._assign(r)}),n&&ko(e,"change",()=>{e.value=e.value.trim()}),t||(ko(e,"compositionstart",pa),ko(e,"compositionend",ga),ko(e,"change",ga))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:s}},o){if(e._assign=fa(o),e.composing)return;if(document.activeElement===e&&"range"!==e.type){if(n)return;if(r&&e.value.trim()===t)return;if((s||"number"===e.type)&&Object(i["P"])(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}},va={deep:!0,created(e,t,n){e._assign=fa(n),ko(e,"change",()=>{const t=e._modelValue,n=ka(e),r=e.checked,s=e._assign;if(Object(i["o"])(t)){const e=Object(i["H"])(t,n),o=-1!==e;if(r&&!o)s(t.concat(n));else if(!r&&o){const n=[...t];n.splice(e,1),s(n)}}else if(Object(i["C"])(t)){const e=new Set(t);r?e.add(n):e.delete(n),s(e)}else s(Sa(e,r))})},mounted:ba,beforeUpdate(e,t,n){e._assign=fa(n),ba(e,t,n)}};function ba(e,{value:t,oldValue:n},r){e._modelValue=t,Object(i["o"])(t)?e.checked=Object(i["H"])(t,r.props.value)>-1:Object(i["C"])(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=Object(i["G"])(t,Sa(e,!0)))}const ya={created(e,{value:t},n){e.checked=Object(i["G"])(t,n.props.value),e._assign=fa(n),ko(e,"change",()=>{e._assign(ka(e))})},beforeUpdate(e,{value:t,oldValue:n},r){e._assign=fa(r),t!==n&&(e.checked=Object(i["G"])(t,r.props.value))}},xa={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const s=Object(i["C"])(t);ko(e,"change",()=>{const t=Array.prototype.filter.call(e.options,e=>e.selected).map(e=>n?Object(i["P"])(ka(e)):ka(e));e._assign(e.multiple?s?new Set(t):t:t[0])}),e._assign=fa(r)},mounted(e,{value:t}){wa(e,t)},beforeUpdate(e,t,n){e._assign=fa(n)},updated(e,{value:t}){wa(e,t)}};function wa(e,t){const n=e.multiple;if(!n||Object(i["o"])(t)||Object(i["C"])(t)){for(let r=0,s=e.options.length;r<s;r++){const s=e.options[r],o=ka(s);if(n)Object(i["o"])(t)?s.selected=Object(i["H"])(t,o)>-1:s.selected=t.has(o);else if(Object(i["G"])(ka(s),t))return void(e.selectedIndex!==r&&(e.selectedIndex=r))}n||-1===e.selectedIndex||(e.selectedIndex=-1)}}function ka(e){return"_value"in e?e._value:e.value}function Sa(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const _a={created(e,t,n){Ca(e,t,n,null,"created")},mounted(e,t,n){Ca(e,t,n,null,"mounted")},beforeUpdate(e,t,n,i){Ca(e,t,n,i,"beforeUpdate")},updated(e,t,n,i){Ca(e,t,n,i,"updated")}};function Aa(e,t){switch(e){case"SELECT":return xa;case"TEXTAREA":return ma;default:switch(t){case"checkbox":return va;case"radio":return ya;default:return ma}}}function Ca(e,t,n,i,r){const s=Aa(e.tagName,n.props&&n.props.type),o=s[r];o&&o(e,t,n,i)}function Ia(){ma.getSSRProps=({value:e})=>({value:e}),ya.getSSRProps=({value:e},t)=>{if(t.props&&Object(i["G"])(t.props.value,e))return{checked:!0}},va.getSSRProps=({value:e},t)=>{if(Object(i["o"])(e)){if(t.props&&Object(i["H"])(e,t.props.value)>-1)return{checked:!0}}else if(Object(i["C"])(e)){if(t.props&&e.has(t.props.value))return{checked:!0}}else if(e)return{checked:!0}},_a.getSSRProps=(e,t)=>{if("string"!==typeof t.type)return;const n=Aa(t.type.toUpperCase(),t.props&&t.props.type);return n.getSSRProps?n.getSSRProps(e,t):void 0}}const Ta=["ctrl","shift","alt","meta"],Ea={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>Ta.some(n=>e[n+"Key"]&&!t.includes(n))},Oa=(e,t)=>(n,...i)=>{for(let e=0;e<t.length;e++){const i=Ea[t[e]];if(i&&i(n,t))return}return e(n,...i)},Pa={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},La=(e,t)=>n=>{if(!("key"in n))return;const r=Object(i["l"])(n.key);return t.some(e=>e===r||Pa[e]===r)?e(n):void 0},Da={beforeMount(e,{value:t},{transition:n}){e._vod="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):Na(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:i}){!t!==!n&&(i?t?(i.beforeEnter(e),Na(e,!0),i.enter(e)):i.leave(e,()=>{Na(e,!1)}):Na(e,t))},beforeUnmount(e,{value:t}){Na(e,t)}};function Na(e,t){e.style.display=t?e._vod:"none"}function Ra(){Da.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}}}const Ma=Object(i["h"])({patchProp:Oo},ro);let Fa,ja=!1;function Va(){return Fa||(Fa=gr(Ma))}function za(){return Fa=ja?Fa:mr(Ma),ja=!0,Fa}const Ba=(...e)=>{Va().render(...e)},Ha=(...e)=>{za().hydrate(...e)},Wa=(...e)=>{const t=Va().createApp(...e);const{mount:n}=t;return t.mount=e=>{const r=Ua(e);if(!r)return;const s=t._component;Object(i["q"])(s)||s.render||s.template||(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t},Xa=(...e)=>{const t=za().createApp(...e);const{mount:n}=t;return t.mount=e=>{const t=Ua(e);if(t)return n(t,!0,t instanceof SVGElement)},t};function Ua(e){if(Object(i["E"])(e)){const t=document.querySelector(e);return t}return e}let Ya=!1;const Ga=()=>{Ya||(Ya=!0,Ia(),Ra())};const qa=()=>{0}},"7b0b":function(e,t,n){var i=n("1d80"),r=Object;e.exports=function(e){return r(i(e))}},"7b17":function(e,t,n){"use strict";var i={};n.r(i),n.d(i,"top",(function(){return r})),n.d(i,"bottom",(function(){return s})),n.d(i,"right",(function(){return o})),n.d(i,"left",(function(){return a})),n.d(i,"auto",(function(){return l})),n.d(i,"basePlacements",(function(){return c})),n.d(i,"start",(function(){return h})),n.d(i,"end",(function(){return u})),n.d(i,"clippingParents",(function(){return d})),n.d(i,"viewport",(function(){return f})),n.d(i,"popper",(function(){return p})),n.d(i,"reference",(function(){return g})),n.d(i,"variationPlacements",(function(){return m})),n.d(i,"placements",(function(){return v})),n.d(i,"beforeRead",(function(){return b})),n.d(i,"read",(function(){return y})),n.d(i,"afterRead",(function(){return x})),n.d(i,"beforeMain",(function(){return w})),n.d(i,"main",(function(){return k})),n.d(i,"afterMain",(function(){return S})),n.d(i,"beforeWrite",(function(){return _})),n.d(i,"write",(function(){return A})),n.d(i,"afterWrite",(function(){return C})),n.d(i,"modifierPhases",(function(){return I})),n.d(i,"applyStyles",(function(){return R})),n.d(i,"arrow",(function(){return ae})),n.d(i,"computeStyles",(function(){return fe})),n.d(i,"eventListeners",(function(){return me})),n.d(i,"flip",(function(){return je})),n.d(i,"hide",(function(){return He})),n.d(i,"offset",(function(){return Ue})),n.d(i,"popperOffsets",(function(){return Ge})),n.d(i,"preventOverflow",(function(){return Ke})),n.d(i,"popperGenerator",(function(){return at})),n.d(i,"detectOverflow",(function(){return Ne})),n.d(i,"createPopperBase",(function(){return lt})),n.d(i,"createPopper",(function(){return ht})),n.d(i,"createPopperLite",(function(){return dt}));var r="top",s="bottom",o="right",a="left",l="auto",c=[r,s,o,a],h="start",u="end",d="clippingParents",f="viewport",p="popper",g="reference",m=c.reduce((function(e,t){return e.concat([t+"-"+h,t+"-"+u])}),[]),v=[].concat(c,[l]).reduce((function(e,t){return e.concat([t,t+"-"+h,t+"-"+u])}),[]),b="beforeRead",y="read",x="afterRead",w="beforeMain",k="main",S="afterMain",_="beforeWrite",A="write",C="afterWrite",I=[b,y,x,w,k,S,_,A,C];function T(e){return e?(e.nodeName||"").toLowerCase():null}function E(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function O(e){var t=E(e).Element;return e instanceof t||e instanceof Element}function P(e){var t=E(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function L(e){if("undefined"===typeof ShadowRoot)return!1;var t=E(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function D(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},i=t.attributes[e]||{},r=t.elements[e];P(r)&&T(r)&&(Object.assign(r.style,n),Object.keys(i).forEach((function(e){var t=i[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)})))}))}function N(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var i=t.elements[e],r=t.attributes[e]||{},s=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]),o=s.reduce((function(e,t){return e[t]="",e}),{});P(i)&&T(i)&&(Object.assign(i.style,o),Object.keys(r).forEach((function(e){i.removeAttribute(e)})))}))}}var R={name:"applyStyles",enabled:!0,phase:"write",fn:D,effect:N,requires:["computeStyles"]};function M(e){return e.split("-")[0]}var F=Math.max,j=Math.min,V=Math.round;function z(){var e=navigator.userAgentData;return null!=e&&e.brands?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function B(){return!/^((?!chrome|android).)*safari/i.test(z())}function H(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var i=e.getBoundingClientRect(),r=1,s=1;t&&P(e)&&(r=e.offsetWidth>0&&V(i.width)/e.offsetWidth||1,s=e.offsetHeight>0&&V(i.height)/e.offsetHeight||1);var o=O(e)?E(e):window,a=o.visualViewport,l=!B()&&n,c=(i.left+(l&&a?a.offsetLeft:0))/r,h=(i.top+(l&&a?a.offsetTop:0))/s,u=i.width/r,d=i.height/s;return{width:u,height:d,top:h,right:c+u,bottom:h+d,left:c,x:c,y:h}}function W(e){var t=H(e),n=e.offsetWidth,i=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-i)<=1&&(i=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:i}}function X(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&L(n)){var i=t;do{if(i&&e.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function U(e){return E(e).getComputedStyle(e)}function Y(e){return["table","td","th"].indexOf(T(e))>=0}function G(e){return((O(e)?e.ownerDocument:e.document)||window.document).documentElement}function q(e){return"html"===T(e)?e:e.assignedSlot||e.parentNode||(L(e)?e.host:null)||G(e)}function $(e){return P(e)&&"fixed"!==U(e).position?e.offsetParent:null}function K(e){var t=/firefox/i.test(z()),n=/Trident/i.test(z());if(n&&P(e)){var i=U(e);if("fixed"===i.position)return null}var r=q(e);L(r)&&(r=r.host);while(P(r)&&["html","body"].indexOf(T(r))<0){var s=U(r);if("none"!==s.transform||"none"!==s.perspective||"paint"===s.contain||-1!==["transform","perspective"].indexOf(s.willChange)||t&&"filter"===s.willChange||t&&s.filter&&"none"!==s.filter)return r;r=r.parentNode}return null}function Q(e){var t=E(e),n=$(e);while(n&&Y(n)&&"static"===U(n).position)n=$(n);return n&&("html"===T(n)||"body"===T(n)&&"static"===U(n).position)?t:n||K(e)||t}function Z(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function J(e,t,n){return F(e,j(t,n))}function ee(e,t,n){var i=J(e,t,n);return i>n?n:i}function te(){return{top:0,right:0,bottom:0,left:0}}function ne(e){return Object.assign({},te(),e)}function ie(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var re=function(e,t){return e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e,ne("number"!==typeof e?e:ie(e,c))};function se(e){var t,n=e.state,i=e.name,l=e.options,c=n.elements.arrow,h=n.modifiersData.popperOffsets,u=M(n.placement),d=Z(u),f=[a,o].indexOf(u)>=0,p=f?"height":"width";if(c&&h){var g=re(l.padding,n),m=W(c),v="y"===d?r:a,b="y"===d?s:o,y=n.rects.reference[p]+n.rects.reference[d]-h[d]-n.rects.popper[p],x=h[d]-n.rects.reference[d],w=Q(c),k=w?"y"===d?w.clientHeight||0:w.clientWidth||0:0,S=y/2-x/2,_=g[v],A=k-m[p]-g[b],C=k/2-m[p]/2+S,I=J(_,C,A),T=d;n.modifiersData[i]=(t={},t[T]=I,t.centerOffset=I-C,t)}}function oe(e){var t=e.state,n=e.options,i=n.element,r=void 0===i?"[data-popper-arrow]":i;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r),r))&&X(t.elements.popper,r)&&(t.elements.arrow=r)}var ae={name:"arrow",enabled:!0,phase:"main",fn:se,effect:oe,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function le(e){return e.split("-")[1]}var ce={top:"auto",right:"auto",bottom:"auto",left:"auto"};function he(e){var t=e.x,n=e.y,i=window,r=i.devicePixelRatio||1;return{x:V(t*r)/r||0,y:V(n*r)/r||0}}function ue(e){var t,n=e.popper,i=e.popperRect,l=e.placement,c=e.variation,h=e.offsets,d=e.position,f=e.gpuAcceleration,p=e.adaptive,g=e.roundOffsets,m=e.isFixed,v=h.x,b=void 0===v?0:v,y=h.y,x=void 0===y?0:y,w="function"===typeof g?g({x:b,y:x}):{x:b,y:x};b=w.x,x=w.y;var k=h.hasOwnProperty("x"),S=h.hasOwnProperty("y"),_=a,A=r,C=window;if(p){var I=Q(n),T="clientHeight",O="clientWidth";if(I===E(n)&&(I=G(n),"static"!==U(I).position&&"absolute"===d&&(T="scrollHeight",O="scrollWidth")),I=I,l===r||(l===a||l===o)&&c===u){A=s;var P=m&&I===C&&C.visualViewport?C.visualViewport.height:I[T];x-=P-i.height,x*=f?1:-1}if(l===a||(l===r||l===s)&&c===u){_=o;var L=m&&I===C&&C.visualViewport?C.visualViewport.width:I[O];b-=L-i.width,b*=f?1:-1}}var D,N=Object.assign({position:d},p&&ce),R=!0===g?he({x:b,y:x}):{x:b,y:x};return b=R.x,x=R.y,f?Object.assign({},N,(D={},D[A]=S?"0":"",D[_]=k?"0":"",D.transform=(C.devicePixelRatio||1)<=1?"translate("+b+"px, "+x+"px)":"translate3d("+b+"px, "+x+"px, 0)",D)):Object.assign({},N,(t={},t[A]=S?x+"px":"",t[_]=k?b+"px":"",t.transform="",t))}function de(e){var t=e.state,n=e.options,i=n.gpuAcceleration,r=void 0===i||i,s=n.adaptive,o=void 0===s||s,a=n.roundOffsets,l=void 0===a||a,c={placement:M(t.placement),variation:le(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ue(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:l})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ue(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var fe={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:de,data:{}},pe={passive:!0};function ge(e){var t=e.state,n=e.instance,i=e.options,r=i.scroll,s=void 0===r||r,o=i.resize,a=void 0===o||o,l=E(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&c.forEach((function(e){e.addEventListener("scroll",n.update,pe)})),a&&l.addEventListener("resize",n.update,pe),function(){s&&c.forEach((function(e){e.removeEventListener("scroll",n.update,pe)})),a&&l.removeEventListener("resize",n.update,pe)}}var me={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:ge,data:{}},ve={left:"right",right:"left",bottom:"top",top:"bottom"};function be(e){return e.replace(/left|right|bottom|top/g,(function(e){return ve[e]}))}var ye={start:"end",end:"start"};function xe(e){return e.replace(/start|end/g,(function(e){return ye[e]}))}function we(e){var t=E(e),n=t.pageXOffset,i=t.pageYOffset;return{scrollLeft:n,scrollTop:i}}function ke(e){return H(G(e)).left+we(e).scrollLeft}function Se(e,t){var n=E(e),i=G(e),r=n.visualViewport,s=i.clientWidth,o=i.clientHeight,a=0,l=0;if(r){s=r.width,o=r.height;var c=B();(c||!c&&"fixed"===t)&&(a=r.offsetLeft,l=r.offsetTop)}return{width:s,height:o,x:a+ke(e),y:l}}function _e(e){var t,n=G(e),i=we(e),r=null==(t=e.ownerDocument)?void 0:t.body,s=F(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),o=F(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),a=-i.scrollLeft+ke(e),l=-i.scrollTop;return"rtl"===U(r||n).direction&&(a+=F(n.clientWidth,r?r.clientWidth:0)-s),{width:s,height:o,x:a,y:l}}function Ae(e){var t=U(e),n=t.overflow,i=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+i)}function Ce(e){return["html","body","#document"].indexOf(T(e))>=0?e.ownerDocument.body:P(e)&&Ae(e)?e:Ce(q(e))}function Ie(e,t){var n;void 0===t&&(t=[]);var i=Ce(e),r=i===(null==(n=e.ownerDocument)?void 0:n.body),s=E(i),o=r?[s].concat(s.visualViewport||[],Ae(i)?i:[]):i,a=t.concat(o);return r?a:a.concat(Ie(q(o)))}function Te(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Ee(e,t){var n=H(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function Oe(e,t,n){return t===f?Te(Se(e,n)):O(t)?Ee(t,n):Te(_e(G(e)))}function Pe(e){var t=Ie(q(e)),n=["absolute","fixed"].indexOf(U(e).position)>=0,i=n&&P(e)?Q(e):e;return O(i)?t.filter((function(e){return O(e)&&X(e,i)&&"body"!==T(e)})):[]}function Le(e,t,n,i){var r="clippingParents"===t?Pe(e):[].concat(t),s=[].concat(r,[n]),o=s[0],a=s.reduce((function(t,n){var r=Oe(e,n,i);return t.top=F(r.top,t.top),t.right=j(r.right,t.right),t.bottom=j(r.bottom,t.bottom),t.left=F(r.left,t.left),t}),Oe(e,o,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function De(e){var t,n=e.reference,i=e.element,l=e.placement,c=l?M(l):null,d=l?le(l):null,f=n.x+n.width/2-i.width/2,p=n.y+n.height/2-i.height/2;switch(c){case r:t={x:f,y:n.y-i.height};break;case s:t={x:f,y:n.y+n.height};break;case o:t={x:n.x+n.width,y:p};break;case a:t={x:n.x-i.width,y:p};break;default:t={x:n.x,y:n.y}}var g=c?Z(c):null;if(null!=g){var m="y"===g?"height":"width";switch(d){case h:t[g]=t[g]-(n[m]/2-i[m]/2);break;case u:t[g]=t[g]+(n[m]/2-i[m]/2);break;default:}}return t}function Ne(e,t){void 0===t&&(t={});var n=t,i=n.placement,a=void 0===i?e.placement:i,l=n.strategy,h=void 0===l?e.strategy:l,u=n.boundary,m=void 0===u?d:u,v=n.rootBoundary,b=void 0===v?f:v,y=n.elementContext,x=void 0===y?p:y,w=n.altBoundary,k=void 0!==w&&w,S=n.padding,_=void 0===S?0:S,A=ne("number"!==typeof _?_:ie(_,c)),C=x===p?g:p,I=e.rects.popper,T=e.elements[k?C:x],E=Le(O(T)?T:T.contextElement||G(e.elements.popper),m,b,h),P=H(e.elements.reference),L=De({reference:P,element:I,strategy:"absolute",placement:a}),D=Te(Object.assign({},I,L)),N=x===p?D:P,R={top:E.top-N.top+A.top,bottom:N.bottom-E.bottom+A.bottom,left:E.left-N.left+A.left,right:N.right-E.right+A.right},M=e.modifiersData.offset;if(x===p&&M){var F=M[a];Object.keys(R).forEach((function(e){var t=[o,s].indexOf(e)>=0?1:-1,n=[r,s].indexOf(e)>=0?"y":"x";R[e]+=F[n]*t}))}return R}function Re(e,t){void 0===t&&(t={});var n=t,i=n.placement,r=n.boundary,s=n.rootBoundary,o=n.padding,a=n.flipVariations,l=n.allowedAutoPlacements,h=void 0===l?v:l,u=le(i),d=u?a?m:m.filter((function(e){return le(e)===u})):c,f=d.filter((function(e){return h.indexOf(e)>=0}));0===f.length&&(f=d);var p=f.reduce((function(t,n){return t[n]=Ne(e,{placement:n,boundary:r,rootBoundary:s,padding:o})[M(n)],t}),{});return Object.keys(p).sort((function(e,t){return p[e]-p[t]}))}function Me(e){if(M(e)===l)return[];var t=be(e);return[xe(e),t,xe(t)]}function Fe(e){var t=e.state,n=e.options,i=e.name;if(!t.modifiersData[i]._skip){for(var c=n.mainAxis,u=void 0===c||c,d=n.altAxis,f=void 0===d||d,p=n.fallbackPlacements,g=n.padding,m=n.boundary,v=n.rootBoundary,b=n.altBoundary,y=n.flipVariations,x=void 0===y||y,w=n.allowedAutoPlacements,k=t.options.placement,S=M(k),_=S===k,A=p||(_||!x?[be(k)]:Me(k)),C=[k].concat(A).reduce((function(e,n){return e.concat(M(n)===l?Re(t,{placement:n,boundary:m,rootBoundary:v,padding:g,flipVariations:x,allowedAutoPlacements:w}):n)}),[]),I=t.rects.reference,T=t.rects.popper,E=new Map,O=!0,P=C[0],L=0;L<C.length;L++){var D=C[L],N=M(D),R=le(D)===h,F=[r,s].indexOf(N)>=0,j=F?"width":"height",V=Ne(t,{placement:D,boundary:m,rootBoundary:v,altBoundary:b,padding:g}),z=F?R?o:a:R?s:r;I[j]>T[j]&&(z=be(z));var B=be(z),H=[];if(u&&H.push(V[N]<=0),f&&H.push(V[z]<=0,V[B]<=0),H.every((function(e){return e}))){P=D,O=!1;break}E.set(D,H)}if(O)for(var W=x?3:1,X=function(e){var t=C.find((function(t){var n=E.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return P=t,"break"},U=W;U>0;U--){var Y=X(U);if("break"===Y)break}t.placement!==P&&(t.modifiersData[i]._skip=!0,t.placement=P,t.reset=!0)}}var je={name:"flip",enabled:!0,phase:"main",fn:Fe,requiresIfExists:["offset"],data:{_skip:!1}};function Ve(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ze(e){return[r,o,s,a].some((function(t){return e[t]>=0}))}function Be(e){var t=e.state,n=e.name,i=t.rects.reference,r=t.rects.popper,s=t.modifiersData.preventOverflow,o=Ne(t,{elementContext:"reference"}),a=Ne(t,{altBoundary:!0}),l=Ve(o,i),c=Ve(a,r,s),h=ze(l),u=ze(c);t.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:h,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":h,"data-popper-escaped":u})}var He={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Be};function We(e,t,n){var i=M(e),s=[a,r].indexOf(i)>=0?-1:1,l="function"===typeof n?n(Object.assign({},t,{placement:e})):n,c=l[0],h=l[1];return c=c||0,h=(h||0)*s,[a,o].indexOf(i)>=0?{x:h,y:c}:{x:c,y:h}}function Xe(e){var t=e.state,n=e.options,i=e.name,r=n.offset,s=void 0===r?[0,0]:r,o=v.reduce((function(e,n){return e[n]=We(n,t.rects,s),e}),{}),a=o[t.placement],l=a.x,c=a.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=c),t.modifiersData[i]=o}var Ue={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Xe};function Ye(e){var t=e.state,n=e.name;t.modifiersData[n]=De({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var Ge={name:"popperOffsets",enabled:!0,phase:"read",fn:Ye,data:{}};function qe(e){return"x"===e?"y":"x"}function $e(e){var t=e.state,n=e.options,i=e.name,l=n.mainAxis,c=void 0===l||l,u=n.altAxis,d=void 0!==u&&u,f=n.boundary,p=n.rootBoundary,g=n.altBoundary,m=n.padding,v=n.tether,b=void 0===v||v,y=n.tetherOffset,x=void 0===y?0:y,w=Ne(t,{boundary:f,rootBoundary:p,padding:m,altBoundary:g}),k=M(t.placement),S=le(t.placement),_=!S,A=Z(k),C=qe(A),I=t.modifiersData.popperOffsets,T=t.rects.reference,E=t.rects.popper,O="function"===typeof x?x(Object.assign({},t.rects,{placement:t.placement})):x,P="number"===typeof O?{mainAxis:O,altAxis:O}:Object.assign({mainAxis:0,altAxis:0},O),L=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,D={x:0,y:0};if(I){if(c){var N,R="y"===A?r:a,V="y"===A?s:o,z="y"===A?"height":"width",B=I[A],H=B+w[R],X=B-w[V],U=b?-E[z]/2:0,Y=S===h?T[z]:E[z],G=S===h?-E[z]:-T[z],q=t.elements.arrow,$=b&&q?W(q):{width:0,height:0},K=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:te(),ne=K[R],ie=K[V],re=J(0,T[z],$[z]),se=_?T[z]/2-U-re-ne-P.mainAxis:Y-re-ne-P.mainAxis,oe=_?-T[z]/2+U+re+ie+P.mainAxis:G+re+ie+P.mainAxis,ae=t.elements.arrow&&Q(t.elements.arrow),ce=ae?"y"===A?ae.clientTop||0:ae.clientLeft||0:0,he=null!=(N=null==L?void 0:L[A])?N:0,ue=B+se-he-ce,de=B+oe-he,fe=J(b?j(H,ue):H,B,b?F(X,de):X);I[A]=fe,D[A]=fe-B}if(d){var pe,ge="x"===A?r:a,me="x"===A?s:o,ve=I[C],be="y"===C?"height":"width",ye=ve+w[ge],xe=ve-w[me],we=-1!==[r,a].indexOf(k),ke=null!=(pe=null==L?void 0:L[C])?pe:0,Se=we?ye:ve-T[be]-E[be]-ke+P.altAxis,_e=we?ve+T[be]+E[be]-ke-P.altAxis:xe,Ae=b&&we?ee(Se,ve,_e):J(b?Se:ye,ve,b?_e:xe);I[C]=Ae,D[C]=Ae-ve}t.modifiersData[i]=D}}var Ke={name:"preventOverflow",enabled:!0,phase:"main",fn:$e,requiresIfExists:["offset"]};function Qe(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Ze(e){return e!==E(e)&&P(e)?Qe(e):we(e)}function Je(e){var t=e.getBoundingClientRect(),n=V(t.width)/e.offsetWidth||1,i=V(t.height)/e.offsetHeight||1;return 1!==n||1!==i}function et(e,t,n){void 0===n&&(n=!1);var i=P(t),r=P(t)&&Je(t),s=G(t),o=H(e,r,n),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(i||!i&&!n)&&(("body"!==T(t)||Ae(s))&&(a=Ze(t)),P(t)?(l=H(t,!0),l.x+=t.clientLeft,l.y+=t.clientTop):s&&(l.x=ke(s))),{x:o.left+a.scrollLeft-l.x,y:o.top+a.scrollTop-l.y,width:o.width,height:o.height}}function tt(e){var t=new Map,n=new Set,i=[];function r(e){n.add(e.name);var s=[].concat(e.requires||[],e.requiresIfExists||[]);s.forEach((function(e){if(!n.has(e)){var i=t.get(e);i&&r(i)}})),i.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||r(e)})),i}function nt(e){var t=tt(e);return I.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}function it(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}function rt(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}var st={placement:"bottom",modifiers:[],strategy:"absolute"};function ot(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function at(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,i=void 0===n?[]:n,r=t.defaultOptions,s=void 0===r?st:r;return function(e,t,n){void 0===n&&(n=s);var r={placement:"bottom",orderedModifiers:[],options:Object.assign({},st,s),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},o=[],a=!1,l={state:r,setOptions:function(n){var o="function"===typeof n?n(r.options):n;h(),r.options=Object.assign({},s,r.options,o),r.scrollParents={reference:O(e)?Ie(e):e.contextElement?Ie(e.contextElement):[],popper:Ie(t)};var a=nt(rt([].concat(i,r.options.modifiers)));return r.orderedModifiers=a.filter((function(e){return e.enabled})),c(),l.update()},forceUpdate:function(){if(!a){var e=r.elements,t=e.reference,n=e.popper;if(ot(t,n)){r.rects={reference:et(t,Q(n),"fixed"===r.options.strategy),popper:W(n)},r.reset=!1,r.placement=r.options.placement,r.orderedModifiers.forEach((function(e){return r.modifiersData[e.name]=Object.assign({},e.data)}));for(var i=0;i<r.orderedModifiers.length;i++)if(!0!==r.reset){var s=r.orderedModifiers[i],o=s.fn,c=s.options,h=void 0===c?{}:c,u=s.name;"function"===typeof o&&(r=o({state:r,options:h,name:u,instance:l})||r)}else r.reset=!1,i=-1}}},update:it((function(){return new Promise((function(e){l.forceUpdate(),e(r)}))})),destroy:function(){h(),a=!0}};if(!ot(e,t))return l;function c(){r.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,i=void 0===n?{}:n,s=e.effect;if("function"===typeof s){var a=s({state:r,name:t,instance:l,options:i}),c=function(){};o.push(a||c)}}))}function h(){o.forEach((function(e){return e()})),o=[]}return l.setOptions(n).then((function(e){!a&&n.onFirstUpdate&&n.onFirstUpdate(e)})),l}}var lt=at(),ct=[me,Ge,fe,R,Ue,je,Ke,ae,He],ht=at({defaultModifiers:ct}),ut=[me,Ge,fe,R],dt=at({defaultModifiers:ut});
/*!
  * Bootstrap v5.2.1 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
const ft=1e6,pt=1e3,gt="transitionend",mt=e=>null===e||void 0===e?""+e:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),vt=e=>{do{e+=Math.floor(Math.random()*ft)}while(document.getElementById(e));return e},bt=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n="#"+n.split("#")[1]),t=n&&"#"!==n?n.trim():null}return t},yt=e=>{const t=bt(e);return t&&document.querySelector(t)?t:null},xt=e=>{const t=bt(e);return t?document.querySelector(t):null},wt=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const i=Number.parseFloat(t),r=Number.parseFloat(n);return i||r?(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*pt):0},kt=e=>{e.dispatchEvent(new Event(gt))},St=e=>!(!e||"object"!==typeof e)&&("undefined"!==typeof e.jquery&&(e=e[0]),"undefined"!==typeof e.nodeType),_t=e=>St(e)?e.jquery?e[0]:e:"string"===typeof e&&e.length>0?document.querySelector(e):null,At=e=>{if(!St(e)||0===e.getClientRects().length)return!1;const t="visible"===getComputedStyle(e).getPropertyValue("visibility"),n=e.closest("details:not([open])");if(!n)return t;if(n!==e){const t=e.closest("summary");if(t&&t.parentNode!==n)return!1;if(null===t)return!1}return t},Ct=e=>!e||e.nodeType!==Node.ELEMENT_NODE||(!!e.classList.contains("disabled")||("undefined"!==typeof e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled"))),It=e=>{if(!document.documentElement.attachShadow)return null;if("function"===typeof e.getRootNode){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?It(e.parentNode):null},Tt=()=>{},Et=e=>{e.offsetHeight},Ot=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,Pt=[],Lt=e=>{"loading"===document.readyState?(Pt.length||document.addEventListener("DOMContentLoaded",()=>{for(const e of Pt)e()}),Pt.push(e)):e()},Dt=()=>"rtl"===document.documentElement.dir,Nt=e=>{Lt(()=>{const t=Ot();if(t){const n=e.NAME,i=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=i,e.jQueryInterface)}})},Rt=e=>{"function"===typeof e&&e()},Mt=(e,t,n=!0)=>{if(!n)return void Rt(e);const i=5,r=wt(t)+i;let s=!1;const o=({target:n})=>{n===t&&(s=!0,t.removeEventListener(gt,o),Rt(e))};t.addEventListener(gt,o),setTimeout(()=>{s||kt(t)},r)},Ft=(e,t,n,i)=>{const r=e.length;let s=e.indexOf(t);return-1===s?!n&&i?e[r-1]:e[0]:(s+=n?1:-1,i&&(s=(s+r)%r),e[Math.max(0,Math.min(s,r-1))])},jt=/[^.]*(?=\..*)\.|.*/,Vt=/\..*/,zt=/::\d+$/,Bt={};let Ht=1;const Wt={mouseenter:"mouseover",mouseleave:"mouseout"},Xt=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Ut(e,t){return t&&`${t}::${Ht++}`||e.uidEvent||Ht++}function Yt(e){const t=Ut(e);return e.uidEvent=t,Bt[t]=Bt[t]||{},Bt[t]}function Gt(e,t){return function n(i){return nn(i,{delegateTarget:e}),n.oneOff&&tn.off(e,i.type,t),t.apply(e,[i])}}function qt(e,t,n){return function i(r){const s=e.querySelectorAll(t);for(let{target:o}=r;o&&o!==this;o=o.parentNode)for(const a of s)if(a===o)return nn(r,{delegateTarget:o}),i.oneOff&&tn.off(e,r.type,t,n),n.apply(o,[r])}}function $t(e,t,n=null){return Object.values(e).find(e=>e.callable===t&&e.delegationSelector===n)}function Kt(e,t,n){const i="string"===typeof t,r=i?n:t||n;let s=en(e);return Xt.has(s)||(s=e),[i,r,s]}function Qt(e,t,n,i,r){if("string"!==typeof t||!e)return;let[s,o,a]=Kt(t,n,i);if(t in Wt){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};o=e(o)}const l=Yt(e),c=l[a]||(l[a]={}),h=$t(c,o,s?n:null);if(h)return void(h.oneOff=h.oneOff&&r);const u=Ut(o,t.replace(jt,"")),d=s?qt(e,n,o):Gt(e,o);d.delegationSelector=s?n:null,d.callable=o,d.oneOff=r,d.uidEvent=u,c[u]=d,e.addEventListener(a,d,s)}function Zt(e,t,n,i,r){const s=$t(t[n],i,r);s&&(e.removeEventListener(n,s,Boolean(r)),delete t[n][s.uidEvent])}function Jt(e,t,n,i){const r=t[n]||{};for(const s of Object.keys(r))if(s.includes(i)){const i=r[s];Zt(e,t,n,i.callable,i.delegationSelector)}}function en(e){return e=e.replace(Vt,""),Wt[e]||e}const tn={on(e,t,n,i){Qt(e,t,n,i,!1)},one(e,t,n,i){Qt(e,t,n,i,!0)},off(e,t,n,i){if("string"!==typeof t||!e)return;const[r,s,o]=Kt(t,n,i),a=o!==t,l=Yt(e),c=l[o]||{},h=t.startsWith(".");if("undefined"===typeof s){if(h)for(const n of Object.keys(l))Jt(e,l,n,t.slice(1));for(const n of Object.keys(c)){const i=n.replace(zt,"");if(!a||t.includes(i)){const t=c[n];Zt(e,l,o,t.callable,t.delegationSelector)}}}else{if(!Object.keys(c).length)return;Zt(e,l,o,s,r?n:null)}},trigger(e,t,n){if("string"!==typeof t||!e)return null;const i=Ot(),r=en(t),s=t!==r;let o=null,a=!0,l=!0,c=!1;s&&i&&(o=i.Event(t,n),i(e).trigger(o),a=!o.isPropagationStopped(),l=!o.isImmediatePropagationStopped(),c=o.isDefaultPrevented());let h=new Event(t,{bubbles:a,cancelable:!0});return h=nn(h,n),c&&h.preventDefault(),l&&e.dispatchEvent(h),h.defaultPrevented&&o&&o.preventDefault(),h}};function nn(e,t){for(const[i,r]of Object.entries(t||{}))try{e[i]=r}catch(n){Object.defineProperty(e,i,{configurable:!0,get(){return r}})}return e}const rn=new Map,sn={set(e,t,n){rn.has(e)||rn.set(e,new Map);const i=rn.get(e);i.has(t)||0===i.size?i.set(t,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)},get(e,t){return rn.has(e)&&rn.get(e).get(t)||null},remove(e,t){if(!rn.has(e))return;const n=rn.get(e);n.delete(t),0===n.size&&rn.delete(e)}};function on(e){if("true"===e)return!0;if("false"===e)return!1;if(e===Number(e).toString())return Number(e);if(""===e||"null"===e)return null;if("string"!==typeof e)return e;try{return JSON.parse(decodeURIComponent(e))}catch(t){return e}}function an(e){return e.replace(/[A-Z]/g,e=>"-"+e.toLowerCase())}const ln={setDataAttribute(e,t,n){e.setAttribute("data-bs-"+an(t),n)},removeDataAttribute(e,t){e.removeAttribute("data-bs-"+an(t))},getDataAttributes(e){if(!e)return{};const t={},n=Object.keys(e.dataset).filter(e=>e.startsWith("bs")&&!e.startsWith("bsConfig"));for(const i of n){let n=i.replace(/^bs/,"");n=n.charAt(0).toLowerCase()+n.slice(1,n.length),t[n]=on(e.dataset[i])}return t},getDataAttribute(e,t){return on(e.getAttribute("data-bs-"+an(t)))}};class cn{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,t){const n=St(t)?ln.getDataAttribute(t,"config"):{};return{...this.constructor.Default,..."object"===typeof n?n:{},...St(t)?ln.getDataAttributes(t):{},..."object"===typeof e?e:{}}}_typeCheckConfig(e,t=this.constructor.DefaultType){for(const n of Object.keys(t)){const i=t[n],r=e[n],s=St(r)?"element":mt(r);if(!new RegExp(i).test(s))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${s}" but expected type "${i}".`)}}}const hn="5.2.1";class un extends cn{constructor(e,t){super(),e=_t(e),e&&(this._element=e,this._config=this._getConfig(t),sn.set(this._element,this.constructor.DATA_KEY,this))}dispose(){sn.remove(this._element,this.constructor.DATA_KEY),tn.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,t,n=!0){Mt(e,t,n)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return sn.get(_t(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"===typeof t?t:null)}static get VERSION(){return hn}static get DATA_KEY(){return"bs."+this.NAME}static get EVENT_KEY(){return"."+this.DATA_KEY}static eventName(e){return`${e}${this.EVENT_KEY}`}}const dn=(e,t="hide")=>{const n="click.dismiss"+e.EVENT_KEY,i=e.NAME;tn.on(document,n,`[data-bs-dismiss="${i}"]`,(function(n){if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),Ct(this))return;const r=xt(this)||this.closest("."+i),s=e.getOrCreateInstance(r);s[t]()}))},fn="alert",pn="bs.alert",gn="."+pn,mn="close"+gn,vn="closed"+gn,bn="fade",yn="show";class xn extends un{static get NAME(){return fn}close(){const e=tn.trigger(this._element,mn);if(e.defaultPrevented)return;this._element.classList.remove(yn);const t=this._element.classList.contains(bn);this._queueCallback(()=>this._destroyElement(),this._element,t)}_destroyElement(){this._element.remove(),tn.trigger(this._element,vn),this.dispose()}static jQueryInterface(e){return this.each((function(){const t=xn.getOrCreateInstance(this);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}dn(xn,"close"),Nt(xn);const wn="button",kn="bs.button",Sn="."+kn,_n=".data-api",An="active",Cn='[data-bs-toggle="button"]',In=`click${Sn}${_n}`;class Tn extends un{static get NAME(){return wn}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(An))}static jQueryInterface(e){return this.each((function(){const t=Tn.getOrCreateInstance(this);"toggle"===e&&t[e]()}))}}tn.on(document,In,Cn,e=>{e.preventDefault();const t=e.target.closest(Cn),n=Tn.getOrCreateInstance(t);n.toggle()}),Nt(Tn);const En={find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){return[].concat(...e.children).filter(e=>e.matches(t))},parents(e,t){const n=[];let i=e.parentNode.closest(t);while(i)n.push(i),i=i.parentNode.closest(t);return n},prev(e,t){let n=e.previousElementSibling;while(n){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;while(n){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>e+':not([tabindex^="-"])').join(",");return this.find(t,e).filter(e=>!Ct(e)&&At(e))}},On="swipe",Pn=".bs.swipe",Ln="touchstart"+Pn,Dn="touchmove"+Pn,Nn="touchend"+Pn,Rn="pointerdown"+Pn,Mn="pointerup"+Pn,Fn="touch",jn="pen",Vn="pointer-event",zn=40,Bn={endCallback:null,leftCallback:null,rightCallback:null},Hn={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Wn extends cn{constructor(e,t){super(),this._element=e,e&&Wn.isSupported()&&(this._config=this._getConfig(t),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return Bn}static get DefaultType(){return Hn}static get NAME(){return On}dispose(){tn.off(this._element,Pn)}_start(e){this._supportPointerEvents?this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX):this._deltaX=e.touches[0].clientX}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),Rt(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=zn)return;const t=e/this._deltaX;this._deltaX=0,t&&Rt(t>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(tn.on(this._element,Rn,e=>this._start(e)),tn.on(this._element,Mn,e=>this._end(e)),this._element.classList.add(Vn)):(tn.on(this._element,Ln,e=>this._start(e)),tn.on(this._element,Dn,e=>this._move(e)),tn.on(this._element,Nn,e=>this._end(e)))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&(e.pointerType===jn||e.pointerType===Fn)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const Xn="carousel",Un="bs.carousel",Yn="."+Un,Gn=".data-api",qn="ArrowLeft",$n="ArrowRight",Kn=500,Qn="next",Zn="prev",Jn="left",ei="right",ti="slide"+Yn,ni="slid"+Yn,ii="keydown"+Yn,ri="mouseenter"+Yn,si="mouseleave"+Yn,oi="dragstart"+Yn,ai=`load${Yn}${Gn}`,li=`click${Yn}${Gn}`,ci="carousel",hi="active",ui="slide",di="carousel-item-end",fi="carousel-item-start",pi="carousel-item-next",gi="carousel-item-prev",mi=".active",vi=".carousel-item",bi=mi+vi,yi=".carousel-item img",xi=".carousel-indicators",wi="[data-bs-slide], [data-bs-slide-to]",ki='[data-bs-ride="carousel"]',Si={[qn]:ei,[$n]:Jn},_i={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Ai={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Ci extends un{constructor(e,t){super(e,t),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=En.findOne(xi,this._element),this._addEventListeners(),this._config.ride===ci&&this.cycle()}static get Default(){return _i}static get DefaultType(){return Ai}static get NAME(){return Xn}next(){this._slide(Qn)}nextWhenVisible(){!document.hidden&&At(this._element)&&this.next()}prev(){this._slide(Zn)}pause(){this._isSliding&&kt(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?tn.one(this._element,ni,()=>this.cycle()):this.cycle())}to(e){const t=this._getItems();if(e>t.length-1||e<0)return;if(this._isSliding)return void tn.one(this._element,ni,()=>this.to(e));const n=this._getItemIndex(this._getActive());if(n===e)return;const i=e>n?Qn:Zn;this._slide(i,t[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&tn.on(this._element,ii,e=>this._keydown(e)),"hover"===this._config.pause&&(tn.on(this._element,ri,()=>this.pause()),tn.on(this._element,si,()=>this._maybeEnableCycle())),this._config.touch&&Wn.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const n of En.find(yi,this._element))tn.on(n,oi,e=>e.preventDefault());const e=()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),Kn+this._config.interval))},t={leftCallback:()=>this._slide(this._directionToOrder(Jn)),rightCallback:()=>this._slide(this._directionToOrder(ei)),endCallback:e};this._swipeHelper=new Wn(this._element,t)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const t=Si[e.key];t&&(e.preventDefault(),this._slide(this._directionToOrder(t)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;const t=En.findOne(mi,this._indicatorsElement);t.classList.remove(hi),t.removeAttribute("aria-current");const n=En.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);n&&(n.classList.add(hi),n.setAttribute("aria-current","true"))}_updateInterval(){const e=this._activeElement||this._getActive();if(!e)return;const t=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=t||this._config.defaultInterval}_slide(e,t=null){if(this._isSliding)return;const n=this._getActive(),i=e===Qn,r=t||Ft(this._getItems(),n,i,this._config.wrap);if(r===n)return;const s=this._getItemIndex(r),o=t=>tn.trigger(this._element,t,{relatedTarget:r,direction:this._orderToDirection(e),from:this._getItemIndex(n),to:s}),a=o(ti);if(a.defaultPrevented)return;if(!n||!r)return;const l=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(s),this._activeElement=r;const c=i?fi:di,h=i?pi:gi;r.classList.add(h),Et(r),n.classList.add(c),r.classList.add(c);const u=()=>{r.classList.remove(c,h),r.classList.add(hi),n.classList.remove(hi,h,c),this._isSliding=!1,o(ni)};this._queueCallback(u,n,this._isAnimated()),l&&this.cycle()}_isAnimated(){return this._element.classList.contains(ui)}_getActive(){return En.findOne(bi,this._element)}_getItems(){return En.find(vi,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return Dt()?e===Jn?Zn:Qn:e===Jn?Qn:Zn}_orderToDirection(e){return Dt()?e===Zn?Jn:ei:e===Zn?ei:Jn}static jQueryInterface(e){return this.each((function(){const t=Ci.getOrCreateInstance(this,e);if("number"!==typeof e){if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e]()}}else t.to(e)}))}}tn.on(document,li,wi,(function(e){const t=xt(this);if(!t||!t.classList.contains(ci))return;e.preventDefault();const n=Ci.getOrCreateInstance(t),i=this.getAttribute("data-bs-slide-to");return i?(n.to(i),void n._maybeEnableCycle()):"next"===ln.getDataAttribute(this,"slide")?(n.next(),void n._maybeEnableCycle()):(n.prev(),void n._maybeEnableCycle())})),tn.on(window,ai,()=>{const e=En.find(ki);for(const t of e)Ci.getOrCreateInstance(t)}),Nt(Ci);const Ii="collapse",Ti="bs.collapse",Ei="."+Ti,Oi=".data-api",Pi="show"+Ei,Li="shown"+Ei,Di="hide"+Ei,Ni="hidden"+Ei,Ri=`click${Ei}${Oi}`,Mi="show",Fi="collapse",ji="collapsing",Vi="collapsed",zi=`:scope .${Fi} .${Fi}`,Bi="collapse-horizontal",Hi="width",Wi="height",Xi=".collapse.show, .collapse.collapsing",Ui='[data-bs-toggle="collapse"]',Yi={parent:null,toggle:!0},Gi={parent:"(null|element)",toggle:"boolean"};class qi extends un{constructor(e,t){super(e,t),this._isTransitioning=!1,this._triggerArray=[];const n=En.find(Ui);for(const i of n){const e=yt(i),t=En.find(e).filter(e=>e===this._element);null!==e&&t.length&&this._triggerArray.push(i)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Yi}static get DefaultType(){return Gi}static get NAME(){return Ii}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(Xi).filter(e=>e!==this._element).map(e=>qi.getOrCreateInstance(e,{toggle:!1}))),e.length&&e[0]._isTransitioning)return;const t=tn.trigger(this._element,Pi);if(t.defaultPrevented)return;for(const o of e)o.hide();const n=this._getDimension();this._element.classList.remove(Fi),this._element.classList.add(ji),this._element.style[n]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(ji),this._element.classList.add(Fi,Mi),this._element.style[n]="",tn.trigger(this._element,Li)},r=n[0].toUpperCase()+n.slice(1),s="scroll"+r;this._queueCallback(i,this._element,!0),this._element.style[n]=this._element[s]+"px"}hide(){if(this._isTransitioning||!this._isShown())return;const e=tn.trigger(this._element,Di);if(e.defaultPrevented)return;const t=this._getDimension();this._element.style[t]=this._element.getBoundingClientRect()[t]+"px",Et(this._element),this._element.classList.add(ji),this._element.classList.remove(Fi,Mi);for(const i of this._triggerArray){const e=xt(i);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([i],!1)}this._isTransitioning=!0;const n=()=>{this._isTransitioning=!1,this._element.classList.remove(ji),this._element.classList.add(Fi),tn.trigger(this._element,Ni)};this._element.style[t]="",this._queueCallback(n,this._element,!0)}_isShown(e=this._element){return e.classList.contains(Mi)}_configAfterMerge(e){return e.toggle=Boolean(e.toggle),e.parent=_t(e.parent),e}_getDimension(){return this._element.classList.contains(Bi)?Hi:Wi}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren(Ui);for(const t of e){const e=xt(t);e&&this._addAriaAndCollapsedClass([t],this._isShown(e))}}_getFirstLevelChildren(e){const t=En.find(zi,this._config.parent);return En.find(e,this._config.parent).filter(e=>!t.includes(e))}_addAriaAndCollapsedClass(e,t){if(e.length)for(const n of e)n.classList.toggle(Vi,!t),n.setAttribute("aria-expanded",t)}static jQueryInterface(e){const t={};return"string"===typeof e&&/show|hide/.test(e)&&(t.toggle=!1),this.each((function(){const n=qi.getOrCreateInstance(this,t);if("string"===typeof e){if("undefined"===typeof n[e])throw new TypeError(`No method named "${e}"`);n[e]()}}))}}tn.on(document,Ri,Ui,(function(e){("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault();const t=yt(this),n=En.find(t);for(const i of n)qi.getOrCreateInstance(i,{toggle:!1}).toggle()})),Nt(qi);const $i="dropdown",Ki="bs.dropdown",Qi="."+Ki,Zi=".data-api",Ji="Escape",er="Tab",tr="ArrowUp",nr="ArrowDown",ir=2,rr="hide"+Qi,sr="hidden"+Qi,or="show"+Qi,ar="shown"+Qi,lr=`click${Qi}${Zi}`,cr=`keydown${Qi}${Zi}`,hr=`keyup${Qi}${Zi}`,ur="show",dr="dropup",fr="dropend",pr="dropstart",gr="dropup-center",mr="dropdown-center",vr='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',br=`${vr}.${ur}`,yr=".dropdown-menu",xr=".navbar",wr=".navbar-nav",kr=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Sr=Dt()?"top-end":"top-start",_r=Dt()?"top-start":"top-end",Ar=Dt()?"bottom-end":"bottom-start",Cr=Dt()?"bottom-start":"bottom-end",Ir=Dt()?"left-start":"right-start",Tr=Dt()?"right-start":"left-start",Er="top",Or="bottom",Pr={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Lr={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Dr extends un{constructor(e,t){super(e,t),this._popper=null,this._parent=this._element.parentNode,this._menu=En.next(this._element,yr)[0]||En.prev(this._element,yr)[0],this._inNavbar=this._detectNavbar()}static get Default(){return Pr}static get DefaultType(){return Lr}static get NAME(){return $i}toggle(){return this._isShown()?this.hide():this.show()}show(){if(Ct(this._element)||this._isShown())return;const e={relatedTarget:this._element},t=tn.trigger(this._element,or,e);if(!t.defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(wr))for(const e of[].concat(...document.body.children))tn.on(e,"mouseover",Tt);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(ur),this._element.classList.add(ur),tn.trigger(this._element,ar,e)}}hide(){if(Ct(this._element)||!this._isShown())return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){const t=tn.trigger(this._element,rr,e);if(!t.defaultPrevented){if("ontouchstart"in document.documentElement)for(const e of[].concat(...document.body.children))tn.off(e,"mouseover",Tt);this._popper&&this._popper.destroy(),this._menu.classList.remove(ur),this._element.classList.remove(ur),this._element.setAttribute("aria-expanded","false"),ln.removeDataAttribute(this._menu,"popper"),tn.trigger(this._element,sr,e)}}_getConfig(e){if(e=super._getConfig(e),"object"===typeof e.reference&&!St(e.reference)&&"function"!==typeof e.reference.getBoundingClientRect)throw new TypeError($i.toUpperCase()+': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');return e}_createPopper(){if("undefined"===typeof i)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;"parent"===this._config.reference?e=this._parent:St(this._config.reference)?e=_t(this._config.reference):"object"===typeof this._config.reference&&(e=this._config.reference);const t=this._getPopperConfig();this._popper=ht(e,this._menu,t)}_isShown(){return this._menu.classList.contains(ur)}_getPlacement(){const e=this._parent;if(e.classList.contains(fr))return Ir;if(e.classList.contains(pr))return Tr;if(e.classList.contains(gr))return Er;if(e.classList.contains(mr))return Or;const t="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return e.classList.contains(dr)?t?_r:Sr:t?Cr:Ar}_detectNavbar(){return null!==this._element.closest(xr)}_getOffset(){const{offset:e}=this._config;return"string"===typeof e?e.split(",").map(e=>Number.parseInt(e,10)):"function"===typeof e?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||"static"===this._config.display)&&(ln.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,..."function"===typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_selectMenuItem({key:e,target:t}){const n=En.find(kr,this._menu).filter(e=>At(e));n.length&&Ft(n,t,e===nr,!n.includes(t)).focus()}static jQueryInterface(e){return this.each((function(){const t=Dr.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}static clearMenus(e){if(e.button===ir||"keyup"===e.type&&e.key!==er)return;const t=En.find(br);for(const n of t){const t=Dr.getInstance(n);if(!t||!1===t._config.autoClose)continue;const i=e.composedPath(),r=i.includes(t._menu);if(i.includes(t._element)||"inside"===t._config.autoClose&&!r||"outside"===t._config.autoClose&&r)continue;if(t._menu.contains(e.target)&&("keyup"===e.type&&e.key===er||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;const s={relatedTarget:t._element};"click"===e.type&&(s.clickEvent=e),t._completeHide(s)}}static dataApiKeydownHandler(e){const t=/input|textarea/i.test(e.target.tagName),n=e.key===Ji,i=[tr,nr].includes(e.key);if(!i&&!n)return;if(t&&!n)return;e.preventDefault();const r=this.matches(vr)?this:En.prev(this,vr)[0]||En.next(this,vr)[0],s=Dr.getOrCreateInstance(r);if(i)return e.stopPropagation(),s.show(),void s._selectMenuItem(e);s._isShown()&&(e.stopPropagation(),s.hide(),r.focus())}}tn.on(document,cr,vr,Dr.dataApiKeydownHandler),tn.on(document,cr,yr,Dr.dataApiKeydownHandler),tn.on(document,lr,Dr.clearMenus),tn.on(document,hr,Dr.clearMenus),tn.on(document,lr,vr,(function(e){e.preventDefault(),Dr.getOrCreateInstance(this).toggle()})),Nt(Dr);const Nr=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Rr=".sticky-top",Mr="padding-right",Fr="margin-right";class jr{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Mr,t=>t+e),this._setElementAttributes(Nr,Mr,t=>t+e),this._setElementAttributes(Rr,Fr,t=>t-e)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Mr),this._resetElementAttributes(Nr,Mr),this._resetElementAttributes(Rr,Fr)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,n){const i=this.getWidth(),r=e=>{if(e!==this._element&&window.innerWidth>e.clientWidth+i)return;this._saveInitialAttribute(e,t);const r=window.getComputedStyle(e).getPropertyValue(t);e.style.setProperty(t,n(Number.parseFloat(r))+"px")};this._applyManipulationCallback(e,r)}_saveInitialAttribute(e,t){const n=e.style.getPropertyValue(t);n&&ln.setDataAttribute(e,t,n)}_resetElementAttributes(e,t){const n=e=>{const n=ln.getDataAttribute(e,t);null!==n?(ln.removeDataAttribute(e,t),e.style.setProperty(t,n)):e.style.removeProperty(t)};this._applyManipulationCallback(e,n)}_applyManipulationCallback(e,t){if(St(e))t(e);else for(const n of En.find(e,this._element))t(n)}}const Vr="backdrop",zr="fade",Br="show",Hr="mousedown.bs."+Vr,Wr={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Xr={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Ur extends cn{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return Wr}static get DefaultType(){return Xr}static get NAME(){return Vr}show(e){if(!this._config.isVisible)return void Rt(e);this._append();const t=this._getElement();this._config.isAnimated&&Et(t),t.classList.add(Br),this._emulateAnimation(()=>{Rt(e)})}hide(e){this._config.isVisible?(this._getElement().classList.remove(Br),this._emulateAnimation(()=>{this.dispose(),Rt(e)})):Rt(e)}dispose(){this._isAppended&&(tn.off(this._element,Hr),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(zr),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=_t(e.rootElement),e}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),tn.on(e,Hr,()=>{Rt(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(e){Mt(e,this._getElement(),this._config.isAnimated)}}const Yr="focustrap",Gr="bs.focustrap",qr="."+Gr,$r="focusin"+qr,Kr="keydown.tab"+qr,Qr="Tab",Zr="forward",Jr="backward",es={autofocus:!0,trapElement:null},ts={autofocus:"boolean",trapElement:"element"};class ns extends cn{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return es}static get DefaultType(){return ts}static get NAME(){return Yr}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),tn.off(document,qr),tn.on(document,$r,e=>this._handleFocusin(e)),tn.on(document,Kr,e=>this._handleKeydown(e)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,tn.off(document,qr))}_handleFocusin(e){const{trapElement:t}=this._config;if(e.target===document||e.target===t||t.contains(e.target))return;const n=En.focusableChildren(t);0===n.length?t.focus():this._lastTabNavDirection===Jr?n[n.length-1].focus():n[0].focus()}_handleKeydown(e){e.key===Qr&&(this._lastTabNavDirection=e.shiftKey?Jr:Zr)}}const is="modal",rs="bs.modal",ss="."+rs,os=".data-api",as="Escape",ls="hide"+ss,cs="hidePrevented"+ss,hs="hidden"+ss,us="show"+ss,ds="shown"+ss,fs="resize"+ss,ps="click.dismiss"+ss,gs="mousedown.dismiss"+ss,ms="keydown.dismiss"+ss,vs=`click${ss}${os}`,bs="modal-open",ys="fade",xs="show",ws="modal-static",ks=".modal.show",Ss=".modal-dialog",_s=".modal-body",As='[data-bs-toggle="modal"]',Cs={backdrop:!0,focus:!0,keyboard:!0},Is={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Ts extends un{constructor(e,t){super(e,t),this._dialog=En.findOne(Ss,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new jr,this._addEventListeners()}static get Default(){return Cs}static get DefaultType(){return Is}static get NAME(){return is}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||this._isTransitioning)return;const t=tn.trigger(this._element,us,{relatedTarget:e});t.defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(bs),this._adjustDialog(),this._backdrop.show(()=>this._showElement(e)))}hide(){if(!this._isShown||this._isTransitioning)return;const e=tn.trigger(this._element,ls);e.defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(xs),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){for(const e of[window,this._dialog])tn.off(e,ss);this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Ur({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new ns({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const t=En.findOne(_s,this._dialog);t&&(t.scrollTop=0),Et(this._element),this._element.classList.add(xs);const n=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,tn.trigger(this._element,ds,{relatedTarget:e})};this._queueCallback(n,this._dialog,this._isAnimated())}_addEventListeners(){tn.on(this._element,ms,e=>{if(e.key===as)return this._config.keyboard?(e.preventDefault(),void this.hide()):void this._triggerBackdropTransition()}),tn.on(window,fs,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),tn.on(this._element,gs,e=>{tn.one(this._element,ps,t=>{this._dialog.contains(e.target)||this._dialog.contains(t.target)||("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(bs),this._resetAdjustments(),this._scrollBar.reset(),tn.trigger(this._element,hs)})}_isAnimated(){return this._element.classList.contains(ys)}_triggerBackdropTransition(){const e=tn.trigger(this._element,cs);if(e.defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight,n=this._element.style.overflowY;"hidden"===n||this._element.classList.contains(ws)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(ws),this._queueCallback(()=>{this._element.classList.remove(ws),this._queueCallback(()=>{this._element.style.overflowY=n},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),n=t>0;if(n&&!e){const e=Dt()?"paddingLeft":"paddingRight";this._element.style[e]=t+"px"}if(!n&&e){const e=Dt()?"paddingRight":"paddingLeft";this._element.style[e]=t+"px"}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,t){return this.each((function(){const n=Ts.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof n[e])throw new TypeError(`No method named "${e}"`);n[e](t)}}))}}tn.on(document,vs,As,(function(e){const t=xt(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),tn.one(t,us,e=>{e.defaultPrevented||tn.one(t,hs,()=>{At(this)&&this.focus()})});const n=En.findOne(ks);n&&Ts.getInstance(n).hide();const i=Ts.getOrCreateInstance(t);i.toggle(this)})),dn(Ts),Nt(Ts);const Es="offcanvas",Os="bs.offcanvas",Ps="."+Os,Ls=".data-api",Ds=`load${Ps}${Ls}`,Ns="Escape",Rs="show",Ms="showing",Fs="hiding",js="offcanvas-backdrop",Vs=".offcanvas.show",zs="show"+Ps,Bs="shown"+Ps,Hs="hide"+Ps,Ws="hidePrevented"+Ps,Xs="hidden"+Ps,Us="resize"+Ps,Ys=`click${Ps}${Ls}`,Gs="keydown.dismiss"+Ps,qs='[data-bs-toggle="offcanvas"]',$s={backdrop:!0,keyboard:!0,scroll:!1},Ks={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Qs extends un{constructor(e,t){super(e,t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return $s}static get DefaultType(){return Ks}static get NAME(){return Es}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown)return;const t=tn.trigger(this._element,zs,{relatedTarget:e});if(t.defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||(new jr).hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Ms);const n=()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(Rs),this._element.classList.remove(Ms),tn.trigger(this._element,Bs,{relatedTarget:e})};this._queueCallback(n,this._element,!0)}hide(){if(!this._isShown)return;const e=tn.trigger(this._element,Hs);if(e.defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Fs),this._backdrop.hide();const t=()=>{this._element.classList.remove(Rs,Fs),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||(new jr).reset(),tn.trigger(this._element,Xs)};this._queueCallback(t,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const e=()=>{"static"!==this._config.backdrop?this.hide():tn.trigger(this._element,Ws)},t=Boolean(this._config.backdrop);return new Ur({className:js,isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?e:null})}_initializeFocusTrap(){return new ns({trapElement:this._element})}_addEventListeners(){tn.on(this._element,Gs,e=>{e.key===Ns&&(this._config.keyboard?this.hide():tn.trigger(this._element,Ws))})}static jQueryInterface(e){return this.each((function(){const t=Qs.getOrCreateInstance(this,e);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}tn.on(document,Ys,qs,(function(e){const t=xt(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),Ct(this))return;tn.one(t,Xs,()=>{At(this)&&this.focus()});const n=En.findOne(Vs);n&&n!==t&&Qs.getInstance(n).hide();const i=Qs.getOrCreateInstance(t);i.toggle(this)})),tn.on(window,Ds,()=>{for(const e of En.find(Vs))Qs.getOrCreateInstance(e).show()}),tn.on(window,Us,()=>{for(const e of En.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(e).position&&Qs.getOrCreateInstance(e).hide()}),dn(Qs),Nt(Qs);const Zs=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Js=/^aria-[\w-]*$/i,eo=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,to=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,no=(e,t)=>{const n=e.nodeName.toLowerCase();return t.includes(n)?!Zs.has(n)||Boolean(eo.test(e.nodeValue)||to.test(e.nodeValue)):t.filter(e=>e instanceof RegExp).some(e=>e.test(n))},io={"*":["class","dir","id","lang","role",Js],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function ro(e,t,n){if(!e.length)return e;if(n&&"function"===typeof n)return n(e);const i=new window.DOMParser,r=i.parseFromString(e,"text/html"),s=[].concat(...r.body.querySelectorAll("*"));for(const o of s){const e=o.nodeName.toLowerCase();if(!Object.keys(t).includes(e)){o.remove();continue}const n=[].concat(...o.attributes),i=[].concat(t["*"]||[],t[e]||[]);for(const t of n)no(t,i)||o.removeAttribute(t.nodeName)}return r.body.innerHTML}const so="TemplateFactory",oo={allowList:io,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},ao={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},lo={entry:"(string|element|function|null)",selector:"(string|element)"};class co extends cn{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return oo}static get DefaultType(){return ao}static get NAME(){return so}getContent(){return Object.values(this._config.content).map(e=>this._resolvePossibleFunction(e)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){const e=document.createElement("div");e.innerHTML=this._maybeSanitize(this._config.template);for(const[i,r]of Object.entries(this._config.content))this._setContent(e,r,i);const t=e.children[0],n=this._resolvePossibleFunction(this._config.extraClass);return n&&t.classList.add(...n.split(" ")),t}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(const[t,n]of Object.entries(e))super._typeCheckConfig({selector:t,entry:n},lo)}_setContent(e,t,n){const i=En.findOne(n,e);i&&(t=this._resolvePossibleFunction(t),t?St(t)?this._putElementInTemplate(_t(t),i):this._config.html?i.innerHTML=this._maybeSanitize(t):i.textContent=t:i.remove())}_maybeSanitize(e){return this._config.sanitize?ro(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return"function"===typeof e?e(this):e}_putElementInTemplate(e,t){if(this._config.html)return t.innerHTML="",void t.append(e);t.textContent=e.textContent}}const ho="tooltip",uo=new Set(["sanitize","allowList","sanitizeFn"]),fo="fade",po="modal",go="show",mo=".tooltip-inner",vo="."+po,bo="hide.bs.modal",yo="hover",xo="focus",wo="click",ko="manual",So="hide",_o="hidden",Ao="show",Co="shown",Io="inserted",To="click",Eo="focusin",Oo="focusout",Po="mouseenter",Lo="mouseleave",Do={AUTO:"auto",TOP:"top",RIGHT:Dt()?"left":"right",BOTTOM:"bottom",LEFT:Dt()?"right":"left"},No={allowList:io,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,0],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Ro={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Mo extends un{constructor(e,t){if("undefined"===typeof i)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e,t),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners()}static get Default(){return No}static get DefaultType(){return Ro}static get NAME(){return ho}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(e){if(this._isEnabled){if(e){const t=this._initializeOnDelegatedTarget(e);return t._activeTrigger.click=!t._activeTrigger.click,void(t._isWithActiveTrigger()?t._enter():t._leave())}this._isShown()?this._leave():this._enter()}}dispose(){clearTimeout(this._timeout),tn.off(this._element.closest(vo),bo,this._hideModalHandler),this.tip&&this.tip.remove(),this._config.originalTitle&&this._element.setAttribute("title",this._config.originalTitle),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const e=tn.trigger(this._element,this.constructor.eventName(Ao)),t=It(this._element),n=(t||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!n)return;this.tip&&(this.tip.remove(),this.tip=null);const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:r}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(r.append(i),tn.trigger(this._element,this.constructor.eventName(Io))),this._popper?this._popper.update():this._popper=this._createPopper(i),i.classList.add(go),"ontouchstart"in document.documentElement)for(const o of[].concat(...document.body.children))tn.on(o,"mouseover",Tt);const s=()=>{tn.trigger(this._element,this.constructor.eventName(Co)),!1===this._isHovered&&this._leave(),this._isHovered=!1};this._queueCallback(s,this.tip,this._isAnimated())}hide(){if(!this._isShown())return;const e=tn.trigger(this._element,this.constructor.eventName(So));if(e.defaultPrevented)return;const t=this._getTipElement();if(t.classList.remove(go),"ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))tn.off(i,"mouseover",Tt);this._activeTrigger[wo]=!1,this._activeTrigger[xo]=!1,this._activeTrigger[yo]=!1,this._isHovered=null;const n=()=>{this._isWithActiveTrigger()||(this._isHovered||t.remove(),this._element.removeAttribute("aria-describedby"),tn.trigger(this._element,this.constructor.eventName(_o)),this._disposePopper())};this._queueCallback(n,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(e){const t=this._getTemplateFactory(e).toHtml();if(!t)return null;t.classList.remove(fo,go),t.classList.add(`bs-${this.constructor.NAME}-auto`);const n=vt(this.constructor.NAME).toString();return t.setAttribute("id",n),this._isAnimated()&&t.classList.add(fo),t}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new co({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[mo]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._config.originalTitle}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(fo)}_isShown(){return this.tip&&this.tip.classList.contains(go)}_createPopper(e){const t="function"===typeof this._config.placement?this._config.placement.call(this,e,this._element):this._config.placement,n=Do[t.toUpperCase()];return ht(this._element,e,this._getPopperConfig(n))}_getOffset(){const{offset:e}=this._config;return"string"===typeof e?e.split(",").map(e=>Number.parseInt(e,10)):"function"===typeof e?t=>e(t,this._element):e}_resolvePossibleFunction(e){return"function"===typeof e?e.call(this._element):e}_getPopperConfig(e){const t={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:e=>{this._getTipElement().setAttribute("data-popper-placement",e.state.placement)}}]};return{...t,..."function"===typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}_setListeners(){const e=this._config.trigger.split(" ");for(const t of e)if("click"===t)tn.on(this._element,this.constructor.eventName(To),this._config.selector,e=>this.toggle(e));else if(t!==ko){const e=t===yo?this.constructor.eventName(Po):this.constructor.eventName(Eo),n=t===yo?this.constructor.eventName(Lo):this.constructor.eventName(Oo);tn.on(this._element,e,this._config.selector,e=>{const t=this._initializeOnDelegatedTarget(e);t._activeTrigger["focusin"===e.type?xo:yo]=!0,t._enter()}),tn.on(this._element,n,this._config.selector,e=>{const t=this._initializeOnDelegatedTarget(e);t._activeTrigger["focusout"===e.type?xo:yo]=t._element.contains(e.relatedTarget),t._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},tn.on(this._element.closest(vo),bo,this._hideModalHandler),this._config.selector?this._config={...this._config,trigger:"manual",selector:""}:this._fixTitle()}_fixTitle(){const e=this._config.originalTitle;e&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",e),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(e,t){clearTimeout(this._timeout),this._timeout=setTimeout(e,t)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){const t=ln.getDataAttributes(this._element);for(const n of Object.keys(t))uo.has(n)&&delete t[n];return e={...t,..."object"===typeof e&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=!1===e.container?document.body:_t(e.container),"number"===typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e.originalTitle=this._element.getAttribute("title")||"","number"===typeof e.title&&(e.title=e.title.toString()),"number"===typeof e.content&&(e.content=e.content.toString()),e}_getDelegateConfig(){const e={};for(const t in this._config)this.constructor.Default[t]!==this._config[t]&&(e[t]=this._config[t]);return e}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null)}static jQueryInterface(e){return this.each((function(){const t=Mo.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}Nt(Mo);const Fo="popover",jo=".popover-header",Vo=".popover-body",zo={...Mo.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Bo={...Mo.DefaultType,content:"(null|string|element|function)"};class Ho extends Mo{static get Default(){return zo}static get DefaultType(){return Bo}static get NAME(){return Fo}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[jo]:this._getTitle(),[Vo]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each((function(){const t=Ho.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}Nt(Ho);const Wo="scrollspy",Xo="bs.scrollspy",Uo="."+Xo,Yo=".data-api",Go="activate"+Uo,qo="click"+Uo,$o=`load${Uo}${Yo}`,Ko="dropdown-item",Qo="active",Zo='[data-bs-spy="scroll"]',Jo="[href]",ea=".nav, .list-group",ta=".nav-link",na=".nav-item",ia=".list-group-item",ra=`${ta}, ${na} > ${ta}, ${ia}`,sa=".dropdown",oa=".dropdown-toggle",aa={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},la={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class ca extends un{constructor(e,t){super(e,t),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement="visible"===getComputedStyle(this._element).overflowY?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return aa}static get DefaultType(){return la}static get NAME(){return Wo}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=_t(e.target)||document.body,e.rootMargin=e.offset?e.offset+"px 0px -30%":e.rootMargin,"string"===typeof e.threshold&&(e.threshold=e.threshold.split(",").map(e=>Number.parseFloat(e))),e}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(tn.off(this._config.target,qo),tn.on(this._config.target,qo,Jo,e=>{const t=this._observableSections.get(e.target.hash);if(t){e.preventDefault();const n=this._rootElement||window,i=t.offsetTop-this._element.offsetTop;if(n.scrollTo)return void n.scrollTo({top:i,behavior:"smooth"});n.scrollTop=i}}))}_getNewObserver(){const e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(e=>this._observerCallback(e),e)}_observerCallback(e){const t=e=>this._targetLinks.get("#"+e.target.id),n=e=>{this._previousScrollData.visibleEntryTop=e.target.offsetTop,this._process(t(e))},i=(this._rootElement||document.documentElement).scrollTop,r=i>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=i;for(const s of e){if(!s.isIntersecting){this._activeTarget=null,this._clearActiveClass(t(s));continue}const e=s.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(r&&e){if(n(s),!i)return}else r||e||n(s)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const e=En.find(Jo,this._config.target);for(const t of e){if(!t.hash||Ct(t))continue;const e=En.findOne(t.hash,this._element);At(e)&&(this._targetLinks.set(t.hash,t),this._observableSections.set(t.hash,e))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(Qo),this._activateParents(e),tn.trigger(this._element,Go,{relatedTarget:e}))}_activateParents(e){if(e.classList.contains(Ko))En.findOne(oa,e.closest(sa)).classList.add(Qo);else for(const t of En.parents(e,ea))for(const e of En.prev(t,ra))e.classList.add(Qo)}_clearActiveClass(e){e.classList.remove(Qo);const t=En.find(`${Jo}.${Qo}`,e);for(const n of t)n.classList.remove(Qo)}static jQueryInterface(e){return this.each((function(){const t=ca.getOrCreateInstance(this,e);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e]()}}))}}tn.on(window,$o,()=>{for(const e of En.find(Zo))ca.getOrCreateInstance(e)}),Nt(ca);const ha="tab",ua="bs.tab",da="."+ua,fa="hide"+da,pa="hidden"+da,ga="show"+da,ma="shown"+da,va="click"+da,ba="keydown"+da,ya="load"+da,xa="ArrowLeft",wa="ArrowRight",ka="ArrowUp",Sa="ArrowDown",_a="active",Aa="fade",Ca="show",Ia="dropdown",Ta=".dropdown-toggle",Ea=".dropdown-menu",Oa=".dropdown-item",Pa=":not(.dropdown-toggle)",La='.list-group, .nav, [role="tablist"]',Da=".nav-item, .list-group-item",Na=`.nav-link${Pa}, .list-group-item${Pa}, [role="tab"]${Pa}`,Ra='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Ma=`${Na}, ${Ra}`,Fa=`.${_a}[data-bs-toggle="tab"], .${_a}[data-bs-toggle="pill"], .${_a}[data-bs-toggle="list"]`;class ja extends un{constructor(e){super(e),this._parent=this._element.closest(La),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),tn.on(this._element,ba,e=>this._keydown(e)))}static get NAME(){return ha}show(){const e=this._element;if(this._elemIsActive(e))return;const t=this._getActiveElem(),n=t?tn.trigger(t,fa,{relatedTarget:e}):null,i=tn.trigger(e,ga,{relatedTarget:t});i.defaultPrevented||n&&n.defaultPrevented||(this._deactivate(t,e),this._activate(e,t))}_activate(e,t){if(!e)return;e.classList.add(_a),this._activate(xt(e));const n=()=>{"tab"===e.getAttribute("role")?(e.focus(),e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!0),this._toggleDropDown(e,!0),tn.trigger(e,ma,{relatedTarget:t})):e.classList.add(Ca)};this._queueCallback(n,e,e.classList.contains(Aa))}_deactivate(e,t){if(!e)return;e.classList.remove(_a),e.blur(),this._deactivate(xt(e));const n=()=>{"tab"===e.getAttribute("role")?(e.setAttribute("aria-selected",!1),e.setAttribute("tabindex","-1"),this._toggleDropDown(e,!1),tn.trigger(e,pa,{relatedTarget:t})):e.classList.remove(Ca)};this._queueCallback(n,e,e.classList.contains(Aa))}_keydown(e){if(![xa,wa,ka,Sa].includes(e.key))return;e.stopPropagation(),e.preventDefault();const t=[wa,Sa].includes(e.key),n=Ft(this._getChildren().filter(e=>!Ct(e)),e.target,t,!0);n&&ja.getOrCreateInstance(n).show()}_getChildren(){return En.find(Ma,this._parent)}_getActiveElem(){return this._getChildren().find(e=>this._elemIsActive(e))||null}_setInitialAttributes(e,t){this._setAttributeIfNotExists(e,"role","tablist");for(const n of t)this._setInitialAttributesOnChild(n)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);const t=this._elemIsActive(e),n=this._getOuterElement(e);e.setAttribute("aria-selected",t),n!==e&&this._setAttributeIfNotExists(n,"role","presentation"),t||e.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(e,"role","tab"),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){const t=xt(e);t&&(this._setAttributeIfNotExists(t,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(t,"aria-labelledby","#"+e.id))}_toggleDropDown(e,t){const n=this._getOuterElement(e);if(!n.classList.contains(Ia))return;const i=(e,i)=>{const r=En.findOne(e,n);r&&r.classList.toggle(i,t)};i(Ta,_a),i(Ea,Ca),i(Oa,_a),n.setAttribute("aria-expanded",t)}_setAttributeIfNotExists(e,t,n){e.hasAttribute(t)||e.setAttribute(t,n)}_elemIsActive(e){return e.classList.contains(_a)}_getInnerElement(e){return e.matches(Ma)?e:En.findOne(Ma,e)}_getOuterElement(e){return e.closest(Da)||e}static jQueryInterface(e){return this.each((function(){const t=ja.getOrCreateInstance(this);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e]()}}))}}tn.on(document,va,Ra,(function(e){["A","AREA"].includes(this.tagName)&&e.preventDefault(),Ct(this)||ja.getOrCreateInstance(this).show()})),tn.on(window,ya,()=>{for(const e of En.find(Fa))ja.getOrCreateInstance(e)}),Nt(ja);const Va="toast",za="bs.toast",Ba="."+za,Ha="mouseover"+Ba,Wa="mouseout"+Ba,Xa="focusin"+Ba,Ua="focusout"+Ba,Ya="hide"+Ba,Ga="hidden"+Ba,qa="show"+Ba,$a="shown"+Ba,Ka="fade",Qa="hide",Za="show",Ja="showing",el={animation:"boolean",autohide:"boolean",delay:"number"},tl={animation:!0,autohide:!0,delay:5e3};class nl extends un{constructor(e,t){super(e,t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return tl}static get DefaultType(){return el}static get NAME(){return Va}show(){const e=tn.trigger(this._element,qa);if(e.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(Ka);const t=()=>{this._element.classList.remove(Ja),tn.trigger(this._element,$a),this._maybeScheduleHide()};this._element.classList.remove(Qa),Et(this._element),this._element.classList.add(Za,Ja),this._queueCallback(t,this._element,this._config.animation)}hide(){if(!this.isShown())return;const e=tn.trigger(this._element,Ya);if(e.defaultPrevented)return;const t=()=>{this._element.classList.add(Qa),this._element.classList.remove(Ja,Za),tn.trigger(this._element,Ga)};this._element.classList.add(Ja),this._queueCallback(t,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Za),super.dispose()}isShown(){return this._element.classList.contains(Za)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":this._hasMouseInteraction=t;break;case"focusin":case"focusout":this._hasKeyboardInteraction=t;break}if(t)return void this._clearTimeout();const n=e.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){tn.on(this._element,Ha,e=>this._onInteraction(e,!0)),tn.on(this._element,Wa,e=>this._onInteraction(e,!1)),tn.on(this._element,Xa,e=>this._onInteraction(e,!0)),tn.on(this._element,Ua,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each((function(){const t=nl.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}dn(nl),Nt(nl)},"7ded":function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var i=n("1fd5"),r=n("22e5"),s=n("589b"),o=n("e691");
/**
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
 */
class a{constructor(e,t){this._delegate=e,this.firebase=t,Object(s["_addComponent"])(e,new r["a"]("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Object(s["deleteApp"])(this._delegate)))}_getService(e,t=s["_DEFAULT_ENTRY_NAME"]){var n;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return i.isInitialized()||"EXPLICIT"!==(null===(n=i.getComponent())||void 0===n?void 0:n.instantiationMode)||i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=s["_DEFAULT_ENTRY_NAME"]){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Object(s["_addComponent"])(this._delegate,e)}_addOrOverwriteComponent(e){Object(s["_addOrOverwriteComponent"])(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
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
 */const l={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},c=new i["b"]("app-compat","Firebase",l);
/**
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
 */
function h(e){const t={},n={__esModule:!0,initializeApp:a,app:o,registerVersion:s["registerVersion"],setLogLevel:s["setLogLevel"],onLog:s["onLog"],apps:null,SDK_VERSION:s["SDK_VERSION"],INTERNAL:{registerComponent:h,removeApp:r,useAsService:u,modularAPIs:s}};function r(e){delete t[e]}function o(e){if(e=e||s["_DEFAULT_ENTRY_NAME"],!Object(i["f"])(t,e))throw c.create("no-app",{appName:e});return t[e]}function a(r,o={}){const a=s["initializeApp"](r,o);if(Object(i["f"])(t,a.name))return t[a.name];const l=new e(a,n);return t[a.name]=l,l}function l(){return Object.keys(t).map(e=>t[e])}function h(t){const r=t.name,a=r.replace("-compat","");if(s["_registerComponent"](t)&&"PUBLIC"===t.type){const s=(e=o())=>{if("function"!==typeof e[a])throw c.create("invalid-app-argument",{appName:r});return e[a]()};void 0!==t.serviceProps&&Object(i["j"])(s,t.serviceProps),n[a]=s,e.prototype[a]=function(...e){const n=this._getService.bind(this,r);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[a]:null}function u(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:l}),o["App"]=e,n}
/**
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
 */function u(){const e=h(a);function t(t){Object(i["j"])(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:u,extendNamespace:t,createSubscribe:i["h"],ErrorFactory:i["b"],deepExtend:i["j"]}),e}const d=u(),f=new o["b"]("@firebase/app-compat"),p="@firebase/app-compat",g="0.1.34";
/**
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
 */
/**
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
 */
function m(e){Object(s["registerVersion"])(p,g,e)}
/**
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
 */if(Object(i["n"])()&&void 0!==self.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const v=d;m()},"825a":function(e,t,n){var i=n("861d"),r=String,s=TypeError;e.exports=function(e){if(i(e))return e;throw s(r(e)+" is not an object")}},"83ab":function(e,t,n){var i=n("d039");e.exports=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"861d":function(e,t,n){var i=n("1626"),r=n("8ea1"),s=r.all;e.exports=r.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:i(e)||e===s}:function(e){return"object"==typeof e?null!==e:i(e)}},8925:function(e,t,n){var i=n("e330"),r=n("1626"),s=n("c6cd"),o=i(Function.toString);r(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},"8ea1":function(e,t){var n="object"==typeof document&&document.all,i="undefined"==typeof n&&void 0!==n;e.exports={all:n,IS_HTMLDDA:i}},"8f6b":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return vi})),n.d(t,"b",(function(){return yi})),n.d(t,"c",(function(){return bi})),n.d(t,"d",(function(){return wi})),n.d(t,"e",(function(){return xi})),n.d(t,"f",(function(){return ki})),n.d(t,"g",(function(){return Si})),n.d(t,"h",(function(){return gi})),n.d(t,"i",(function(){return mi}));var i,r="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof e?e:"undefined"!==typeof self?self:{},s={},o=o||{},a=r||self;function l(){}function c(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function h(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function u(e){return Object.prototype.hasOwnProperty.call(e,d)&&e[d]||(e[d]=++f)}var d="closure_uid_"+(1e9*Math.random()>>>0),f=0;function p(e,t,n){return e.call.apply(e.bind,arguments)}function g(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function m(e,t,n){return m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:g,m.apply(null,arguments)}function v(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function b(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return t.prototype[n].apply(e,r)}}function y(){this.s=this.s,this.o=this.o}var x=0,w={};y.prototype.s=!1,y.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=x)){var e=u(this);delete w[e]}},y.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const k=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function S(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function _(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(c(t)){const n=e.length||0,i=t.length||0;e.length=n+i;for(let r=0;r<i;r++)e[n+r]=t[r]}else e.push(t)}}function A(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var C=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{a.addEventListener("test",l,t),a.removeEventListener("test",l,t)}catch(n){}return e}();function I(e){return/^[\s\xa0]*$/.test(e)}var T=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function E(e,t){return e<t?-1:e>t?1:0}function O(){var e=a.navigator;return e&&(e=e.userAgent)?e:""}function P(e){return-1!=O().indexOf(e)}function L(e){return L[" "](e),e}function D(e){var t=Y;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}L[" "]=l;var N,R=P("Opera"),M=P("Trident")||P("MSIE"),F=P("Edge"),j=F||M,V=P("Gecko")&&!(-1!=O().toLowerCase().indexOf("webkit")&&!P("Edge"))&&!(P("Trident")||P("MSIE"))&&!P("Edge"),z=-1!=O().toLowerCase().indexOf("webkit")&&!P("Edge");function B(){var e=a.document;return e?e.documentMode:void 0}e:{var H="",W=function(){var e=O();return V?/rv:([^\);]+)(\)|;)/.exec(e):F?/Edge\/([\d\.]+)/.exec(e):M?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):z?/WebKit\/(\S+)/.exec(e):R?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(W&&(H=W?W[1]:""),M){var X=B();if(null!=X&&X>parseFloat(H)){N=String(X);break e}}N=H}var U,Y={};function G(){return D((function(){let e=0;const t=T(String(N)).split("."),n=T("9").split("."),i=Math.max(t.length,n.length);for(let o=0;0==e&&o<i;o++){var r=t[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==r[0].length&&0==s[0].length)break;e=E(0==r[1].length?0:parseInt(r[1],10),0==s[1].length?0:parseInt(s[1],10))||E(0==r[2].length,0==s[2].length)||E(r[2],s[2]),r=r[3],s=s[3]}while(0==e)}return 0<=e}))}if(a.document&&M){var q=B();U=q||(parseInt(N,10)||void 0)}else U=void 0;var $=U;function K(e,t){if(A.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(V){e:{try{L(t.nodeName);var r=!0;break e}catch(s){}r=!1}r||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:Q[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&K.X.h.call(this)}}b(K,A);var Q={2:"touch",3:"pen",4:"mouse"};K.prototype.h=function(){K.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Z="closure_listenable_"+(1e6*Math.random()|0),J=0;function ee(e,t,n,i,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.ha=r,this.key=++J,this.ba=this.ea=!1}function te(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function ne(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function ie(e){const t={};for(const n in e)t[n]=e[n];return t}const re="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function se(e,t){let n,i;for(let r=1;r<arguments.length;r++){for(n in i=arguments[r],i)e[n]=i[n];for(let t=0;t<re.length;t++)n=re[t],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function oe(e){this.src=e,this.g={},this.h=0}function ae(e,t){var n=t.type;if(n in e.g){var i,r=e.g[n],s=k(r,t);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(te(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function le(e,t,n,i){for(var r=0;r<e.length;++r){var s=e[r];if(!s.ba&&s.listener==t&&s.capture==!!n&&s.ha==i)return r}return-1}oe.prototype.add=function(e,t,n,i,r){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=le(e,t,i,r);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new ee(t,this.src,s,!!i,r),t.ea=n,e.push(t)),t};var ce="closure_lm_"+(1e6*Math.random()|0),he={};function ue(e,t,n,i,r){if(i&&i.once)return pe(e,t,n,i,r);if(Array.isArray(t)){for(var s=0;s<t.length;s++)ue(e,t[s],n,i,r);return null}return n=we(n),e&&e[Z]?e.N(t,n,h(i)?!!i.capture:!!i,r):de(e,t,n,!1,i,r)}function de(e,t,n,i,r,s){if(!t)throw Error("Invalid event type");var o=h(r)?!!r.capture:!!r,a=ye(e);if(a||(e[ce]=a=new oe(e)),n=a.add(t,n,i,o,s),n.proxy)return n;if(i=fe(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)C||(r=o),void 0===r&&(r=!1),e.addEventListener(t.toString(),i,r);else if(e.attachEvent)e.attachEvent(ve(t.toString()),i);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(i)}return n}function fe(){function e(n){return t.call(e.src,e.listener,n)}const t=be;return e}function pe(e,t,n,i,r){if(Array.isArray(t)){for(var s=0;s<t.length;s++)pe(e,t[s],n,i,r);return null}return n=we(n),e&&e[Z]?e.O(t,n,h(i)?!!i.capture:!!i,r):de(e,t,n,!0,i,r)}function ge(e,t,n,i,r){if(Array.isArray(t))for(var s=0;s<t.length;s++)ge(e,t[s],n,i,r);else i=h(i)?!!i.capture:!!i,n=we(n),e&&e[Z]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=le(s,n,i,r),-1<n&&(te(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=ye(e))&&(t=e.g[t.toString()],e=-1,t&&(e=le(t,n,i,r)),(n=-1<e?t[e]:null)&&me(n))}function me(e){if("number"!==typeof e&&e&&!e.ba){var t=e.src;if(t&&t[Z])ae(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(ve(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=ye(t))?(ae(n,e),0==n.h&&(n.src=null,t[ce]=null)):te(e)}}}function ve(e){return e in he?he[e]:he[e]="on"+e}function be(e,t){if(e.ba)e=!0;else{t=new K(t,this);var n=e.listener,i=e.ha||e.src;e.ea&&me(e),e=n.call(i,t)}return e}function ye(e){return e=e[ce],e instanceof oe?e:null}var xe="__closure_events_fn_"+(1e9*Math.random()>>>0);function we(e){return"function"===typeof e?e:(e[xe]||(e[xe]=function(t){return e.handleEvent(t)}),e[xe])}function ke(){y.call(this),this.i=new oe(this),this.P=this,this.I=null}function Se(e,t){var n,i=e.I;if(i)for(n=[];i;i=i.I)n.push(i);if(e=e.P,i=t.type||t,"string"===typeof t)t=new A(t,e);else if(t instanceof A)t.target=t.target||e;else{var r=t;t=new A(i,e),se(t,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];r=_e(o,i,!0,t)&&r}if(o=t.g=e,r=_e(o,i,!0,t)&&r,r=_e(o,i,!1,t)&&r,n)for(s=0;s<n.length;s++)o=t.g=n[s],r=_e(o,i,!1,t)&&r}function _e(e,t,n,i){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&ae(e.i,o),r=!1!==a.call(l,i)&&r}}return r&&!i.defaultPrevented}b(ke,y),ke.prototype[Z]=!0,ke.prototype.removeEventListener=function(e,t,n,i){ge(this,e,t,n,i)},ke.prototype.M=function(){if(ke.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)te(n[i]);delete t.g[e],t.h--}}this.I=null},ke.prototype.N=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)},ke.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};var Ae=a.JSON.stringify;function Ce(){var e=Re;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Ie{constructor(){this.h=this.g=null}add(e,t){const n=Ee.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Te,Ee=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Oe,e=>e.reset());class Oe{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Pe(e){a.setTimeout(()=>{throw e},0)}function Le(e,t){Te||De(),Ne||(Te(),Ne=!0),Re.add(e,t)}function De(){var e=a.Promise.resolve(void 0);Te=function(){e.then(Me)}}var Ne=!1,Re=new Ie;function Me(){for(var e;e=Ce();){try{e.h.call(e.g)}catch(n){Pe(n)}var t=Ee;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ne=!1}function Fe(e,t){ke.call(this),this.h=e||1,this.g=t||a,this.j=m(this.kb,this),this.l=Date.now()}function je(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function Ve(e,t,n){if("function"===typeof e)n&&(e=m(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=m(e.handleEvent,e)}return 2147483647<Number(t)?-1:a.setTimeout(e,t||0)}function ze(e){e.g=Ve(()=>{e.g=null,e.i&&(e.i=!1,ze(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}b(Fe,ke),i=Fe.prototype,i.ca=!1,i.R=null,i.kb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Se(this,"tick"),this.ca&&(je(this),this.start()))}},i.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},i.M=function(){Fe.X.M.call(this),je(this),delete this.g};class Be extends y{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ze(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function He(e){y.call(this),this.h=e,this.g={}}b(He,y);var We=[];function Xe(e,t,n,i){Array.isArray(n)||(n&&(We[0]=n.toString()),n=We);for(var r=0;r<n.length;r++){var s=ue(t,n[r],i||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Ue(e){ne(e.g,(function(e,t){this.g.hasOwnProperty(t)&&me(e)}),e),e.g={}}function Ye(){this.g=!0}function Ge(e,t,n,i,r,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var h=c[0];c=c[1];var u=h.split("_");o=2<=u.length&&"type"==u[1]?o+(h+"=")+c+"&":o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+t+"\n"+n+"\n"+o}))}function qe(e,t,n,i,r,s,o){e.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function $e(e,t,n,i){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+Qe(e,n)+(i?" "+i:"")}))}function Ke(e,t){e.info((function(){return"TIMEOUT: "+t}))}function Qe(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return Ae(n)}catch(a){return t}}He.prototype.M=function(){He.X.M.call(this),Ue(this)},He.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ye.prototype.Aa=function(){this.g=!1},Ye.prototype.info=function(){};var Ze={},Je=null;function et(){return Je=Je||new ke}function tt(e){A.call(this,Ze.Oa,e)}function nt(e){const t=et();Se(t,new tt(t,e))}function it(e,t){A.call(this,Ze.STAT_EVENT,e),this.stat=t}function rt(e){const t=et();Se(t,new it(t,e))}function st(e,t){A.call(this,Ze.Pa,e),this.size=t}function ot(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){e()}),t)}Ze.Oa="serverreachability",b(tt,A),Ze.STAT_EVENT="statevent",b(it,A),Ze.Pa="timingevent",b(st,A);var at={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,La:7,TIMEOUT:8,Cb:9},lt={qb:"complete",Mb:"success",Ma:"error",La:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ct(){}function ht(e){return e.h||(e.h=e.i())}function ut(){}ct.prototype.h=null;var dt,ft={OPEN:"a",pb:"b",Ma:"c",Bb:"d"};function pt(){A.call(this,"d")}function gt(){A.call(this,"c")}function mt(){}function vt(e,t,n,i){this.l=e,this.j=t,this.m=n,this.U=i||1,this.S=new He(this),this.O=yt,e=j?125:void 0,this.T=new Fe(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new bt}function bt(){this.i=null,this.g="",this.h=!1}b(pt,A),b(gt,A),b(mt,ct),mt.prototype.g=function(){return new XMLHttpRequest},mt.prototype.i=function(){return{}},dt=new mt;var yt=45e3,xt={},wt={};function kt(e,t,n){e.K=1,e.v=Xt(Vt(t)),e.s=n,e.P=!0,St(e,null)}function St(e,t){e.F=Date.now(),It(e),e.A=Vt(e.v);var n=e.A,i=e.U;Array.isArray(i)||(i=[String(i)]),rn(n.i,"t",i),e.C=0,n=e.l.H,e.h=new bt,e.g=li(e.l,n?t:null,!e.s),0<e.N&&(e.L=new Be(m(e.Ka,e,e.g),e.N)),Xe(e.S,e.g,"readystatechange",e.hb),t=e.H?ie(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),nt(1),Ge(e.j,e.u,e.A,e.m,e.U,e.s)}function _t(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function At(e,t,n){let i,r=!0;for(;!e.I&&e.C<n.length;){if(i=Ct(e,n),i==wt){4==t&&(e.o=4,rt(14),r=!1),$e(e.j,e.m,null,"[Incomplete Response]");break}if(i==xt){e.o=4,rt(15),$e(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}$e(e.j,e.m,i,null),Lt(e,i)}_t(e)&&i!=wt&&i!=xt&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,rt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ei(t),t.K=!0,rt(11))):($e(e.j,e.m,n,"[Invalid Chunked Response]"),Pt(e),Ot(e))}function Ct(e,t){var n=e.C,i=t.indexOf("\n",n);return-1==i?wt:(n=Number(t.substring(n,i)),isNaN(n)?xt:(i+=1,i+n>t.length?wt:(t=t.substr(i,n),e.C=i+n,t)))}function It(e){e.V=Date.now()+e.O,Tt(e,e.O)}function Tt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=ot(m(e.fb,e),t)}function Et(e){e.B&&(a.clearTimeout(e.B),e.B=null)}function Ot(e){0==e.l.G||e.I||ii(e.l,e)}function Pt(e){Et(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,je(e.T),Ue(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Lt(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||dn(n.h,e)))if(!e.J&&dn(n.h,e)&&3==n.G){try{var i=n.Fa.g.parse(t)}catch(c){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;ni(n),Un(n)}Jn(n),rt(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&0==n.A&&!n.v&&(n.v=ot(m(n.bb,n),6e3));if(1>=un(n.h)&&n.ja){try{n.ja()}catch(c){}n.ja=void 0}}else si(n,11)}else if((e.J||n.g==e)&&ni(n),!I(t))for(r=n.Fa.g.parse(t),t=0;t<r.length;t++){let c=r[t];if(n.T=c[0],c=c[1],2==n.G)if("c"==c[0]){n.I=c[1],n.ka=c[2];const t=c[3];null!=t&&(n.ma=t,n.j.info("VER="+n.ma));const r=c[4];null!=r&&(n.Ca=r,n.j.info("SVER="+n.Ca));const h=c[5];null!=h&&"number"===typeof h&&0<h&&(i=1.5*h,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const u=e.g;if(u){const e=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=i.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(fn(s,s.h),s.h=null))}if(i.D){const e=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(i.za=e,Wt(i.F,i.D,e))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),i=n;var o=e;if(i.sa=ai(i,i.H?i.ka:null,i.V),o.J){pn(i.h,o);var a=o,l=i.J;l&&a.setTimeout(l),a.B&&(Et(a),It(a)),i.g=o}else Zn(i);0<n.i.length&&Gn(n)}else"stop"!=c[0]&&"close"!=c[0]||si(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?si(n,7):Xn(n):"noop"!=c[0]&&n.l&&n.l.wa(c),n.A=0)}nt(4)}catch(c){}}function Dt(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(c(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}for(i in t=[],n=0,e)t[n++]=e[i];return t}function Nt(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(c(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const i in e)t[n++]=i;return t}}}function Rt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(c(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=Nt(e),i=Dt(e),r=i.length,s=0;s<r;s++)t.call(void 0,i[s],n&&n[s],e)}i=vt.prototype,i.setTimeout=function(e){this.O=e},i.hb=function(e){e=e.target;const t=this.L;t&&3==jn(e)?t.l():this.Ka(e)},i.Ka=function(e){try{if(e==this.g)e:{const u=jn(this.g);var t=this.g.Ea();const d=this.g.aa();if(!(3>u)&&(3!=u||j||this.g&&(this.h.h||this.g.fa()||Vn(this.g)))){this.I||4!=u||7==t||nt(8==t||0>=d?3:2),Et(this);var n=this.g.aa();this.Y=n;t:if(_t(this)){var i=Vn(this.g);e="";var r=i.length,s=4==jn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Pt(this),Ot(this);var o="";break t}this.h.i=new a.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:s&&t==r-1});i.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,qe(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var l,c=this.g;if((l=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(l)){var h=l;break t}}h=null}if(!(n=h)){this.i=!1,this.o=3,rt(12),Pt(this),Ot(this);break e}$e(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Lt(this,n)}this.P?(At(this,u,o),j&&this.i&&3==u&&(Xe(this.S,this.T,"tick",this.gb),this.T.start())):($e(this.j,this.m,o,null),Lt(this,o)),4==u&&Pt(this),this.i&&!this.I&&(4==u?ii(this.l,this):(this.i=!1,It(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,rt(12)):(this.o=0,rt(13)),Pt(this),Ot(this)}}}catch(u){}},i.gb=function(){if(this.g){var e=jn(this.g),t=this.g.fa();this.C<t.length&&(Et(this),At(this,e,t),this.i&&4!=e&&It(this))}},i.cancel=function(){this.I=!0,Pt(this)},i.fb=function(){this.B=null;const e=Date.now();0<=e-this.V?(Ke(this.j,this.A),2!=this.K&&(nt(3),rt(17)),Pt(this),this.o=2,Ot(this)):Tt(this,this.V-e)};var Mt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ft(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),r=null;if(0<=i){var s=e[n].substring(0,i);r=e[n].substring(i+1)}else s=e[n];t(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function jt(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof jt){this.h=void 0!==t?t:e.h,zt(this,e.j),this.s=e.s,this.g=e.g,Bt(this,e.m),this.l=e.l,t=e.i;var n=new Jt;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Ht(this,n),this.o=e.o}else e&&(n=String(e).match(Mt))?(this.h=!!t,zt(this,n[1]||"",!0),this.s=Ut(n[2]||""),this.g=Ut(n[3]||"",!0),Bt(this,n[4]),this.l=Ut(n[5]||"",!0),Ht(this,n[6]||"",!0),this.o=Ut(n[7]||"")):(this.h=!!t,this.i=new Jt(null,this.h))}function Vt(e){return new jt(e)}function zt(e,t,n){e.j=n?Ut(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Bt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ht(e,t,n){t instanceof Jt?(e.i=t,on(e.i,e.h)):(n||(t=Yt(t,Qt)),e.i=new Jt(t,e.h))}function Wt(e,t,n){e.i.set(t,n)}function Xt(e){return Wt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ut(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Yt(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Gt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Gt(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}jt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Yt(t,qt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Yt(t,qt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Yt(n,"/"==n.charAt(0)?Kt:$t,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Yt(n,Zt)),e.join("")};var qt=/[#\/\?@]/g,$t=/[#\?:]/g,Kt=/[#\?]/g,Qt=/[#\?@]/g,Zt=/#/g;function Jt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function en(e){e.g||(e.g=new Map,e.h=0,e.i&&Ft(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function tn(e,t){en(e),t=sn(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function nn(e,t){return en(e),t=sn(e,t),e.g.has(t)}function rn(e,t,n){tn(e,t),0<n.length&&(e.i=null,e.g.set(sn(e,t),S(n)),e.h+=n.length)}function sn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function on(e,t){t&&!e.j&&(en(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(tn(this,t),rn(this,n,e))}),e)),e.j=t}i=Jt.prototype,i.add=function(e,t){en(this),this.i=null,e=sn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},i.forEach=function(e,t){en(this),this.g.forEach((function(n,i){n.forEach((function(n){e.call(t,n,i,this)}),this)}),this)},i.oa=function(){en(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let i=0;i<t.length;i++){const r=e[i];for(let e=0;e<r.length;e++)n.push(t[i])}return n},i.W=function(e){en(this);let t=[];if("string"===typeof e)nn(this,e)&&(t=t.concat(this.g.get(sn(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},i.set=function(e,t){return en(this),this.i=null,e=sn(this,e),nn(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},i.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t},i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var i=t[n];const s=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var r=s;""!==o[i]&&(r+="="+encodeURIComponent(String(o[i]))),e.push(r)}}return this.i=e.join("&")};var an=class{constructor(e,t){this.h=e,this.g=t}};function ln(e){this.l=e||cn,a.PerformanceNavigationTiming?(e=a.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(a.g&&a.g.Ga&&a.g.Ga()&&a.g.Ga().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var cn=10;function hn(e){return!!e.h||!!e.g&&e.g.size>=e.j}function un(e){return e.h?1:e.g?e.g.size:0}function dn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function fn(e,t){e.g?e.g.add(t):e.h=t}function pn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function gn(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return S(e.i)}function mn(){}function vn(){this.g=new mn}function bn(e,t,n){const i=n||"";try{Rt(e,(function(e,n){let r=e;h(e)&&(r=Ae(e)),t.push(i+n+"="+encodeURIComponent(r))}))}catch(r){throw t.push(i+"type="+encodeURIComponent("_badmap")),r}}function yn(e,t){const n=new Ye;if(a.Image){const i=new Image;i.onload=v(xn,n,i,"TestLoadImage: loaded",!0,t),i.onerror=v(xn,n,i,"TestLoadImage: error",!1,t),i.onabort=v(xn,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=v(xn,n,i,"TestLoadImage: timeout",!1,t),a.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=e}else t(!1)}function xn(e,t,n,i,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(i)}catch(s){}}function wn(e){this.l=e.$b||null,this.j=e.ib||!1}function kn(e,t){ke.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Sn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ln.prototype.cancel=function(){if(this.i=gn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},mn.prototype.stringify=function(e){return a.JSON.stringify(e,void 0)},mn.prototype.parse=function(e){return a.JSON.parse(e,void 0)},b(wn,ct),wn.prototype.g=function(){return new kn(this.l,this.j)},wn.prototype.i=function(e){return function(){return e}}({}),b(kn,ke);var Sn=0;function _n(e){e.j.read().then(e.Sa.bind(e)).catch(e.ga.bind(e))}function An(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Cn(e)}function Cn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}i=kn.prototype,i.open=function(e,t){if(this.readyState!=Sn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Cn(this)},i.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||a).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,An(this)),this.readyState=Sn},i.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Cn(this)),this.g&&(this.readyState=3,Cn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ga.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;_n(this)}else e.text().then(this.Ua.bind(this),this.ga.bind(this))},i.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?An(this):Cn(this),3==this.readyState&&_n(this)}},i.Ua=function(e){this.g&&(this.response=this.responseText=e,An(this))},i.Ta=function(e){this.g&&(this.response=e,An(this))},i.ga=function(){this.g&&An(this)},i.setRequestHeader=function(e,t){this.v.append(e,t)},i.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(kn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var In=a.JSON.parse;function Tn(e){ke.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=En,this.K=this.L=!1}b(Tn,ke);var En="",On=/^https?$/i,Pn=["POST","PUT"];function Ln(e){return M&&G()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Dn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Nn(e),Mn(e)}function Nn(e){e.D||(e.D=!0,Se(e,"complete"),Se(e,"error"))}function Rn(e){if(e.h&&"undefined"!=typeof o&&(!e.C[1]||4!=jn(e)||2!=e.aa()))if(e.v&&4==jn(e))Ve(e.Ha,0,e);else if(Se(e,"readystatechange"),4==jn(e)){e.h=!1;try{const o=e.aa();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=0===o){var r=String(e.H).match(Mt)[1]||null;if(!r&&a.self&&a.self.location){var s=a.self.location.protocol;r=s.substr(0,s.length-1)}i=!On.test(r?r.toLowerCase():"")}n=i}if(n)Se(e,"complete"),Se(e,"success");else{e.m=6;try{var l=2<jn(e)?e.g.statusText:""}catch(c){l=""}e.j=l+" ["+e.aa()+"]",Nn(e)}}finally{Mn(e)}}}function Mn(e,t){if(e.g){Fn(e);const i=e.g,r=e.C[0]?l:null;e.g=null,e.C=null,t||Se(e,"ready");try{i.onreadystatechange=r}catch(n){}}}function Fn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(a.clearTimeout(e.A),e.A=null)}function jn(e){return e.g?e.g.readyState:0}function Vn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case En:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function zn(e){let t="";return ne(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Bn(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=zn(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):Wt(e,t,n))}function Hn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Wn(e){this.Ca=0,this.i=[],this.j=new Ye,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.$a=this.U=0,this.Ya=Hn("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Wa=Hn("baseRetryDelayMs",5e3,e),this.ab=Hn("retryDelaySeedMs",1e4,e),this.Za=Hn("forwardChannelMaxRetries",2,e),this.ta=Hn("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Yb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new ln(e&&e.concurrentRequestLimit),this.Fa=new vn,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Xa=e&&e.Wb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Xn(e){if(Yn(e),3==e.G){var t=e.U++,n=Vt(e.F);Wt(n,"SID",e.I),Wt(n,"RID",t),Wt(n,"TYPE","terminate"),Kn(e,n),t=new vt(e,e.j,t,void 0),t.K=2,t.v=Xt(Vt(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(t.v.toString(),"")),!n&&a.Image&&((new Image).src=t.v,n=!0),n||(t.g=li(t.l,null),t.g.da(t.v)),t.F=Date.now(),It(t)}oi(e)}function Un(e){e.g&&(ei(e),e.g.cancel(),e.g=null)}function Yn(e){Un(e),e.u&&(a.clearTimeout(e.u),e.u=null),ni(e),e.h.cancel(),e.m&&("number"===typeof e.m&&a.clearTimeout(e.m),e.m=null)}function Gn(e){hn(e.h)||e.m||(e.m=!0,Le(e.Ja,e),e.C=0)}function qn(e,t){return!(un(e.h)>=e.h.j-(e.m?1:0))&&(e.m?(e.i=t.D.concat(e.i),!0):!(1==e.G||2==e.G||e.C>=(e.Ya?0:e.Za))&&(e.m=ot(m(e.Ja,e,t),ri(e,e.C)),e.C++,!0))}function $n(e,t){var n;n=t?t.m:e.U++;const i=Vt(e.F);Wt(i,"SID",e.I),Wt(i,"RID",n),Wt(i,"AID",e.T),Kn(e,i),e.o&&e.s&&Bn(i,e.o,e.s),n=new vt(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=Qn(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),fn(e.h,n),kt(n,i,t)}function Kn(e,t){e.ia&&ne(e.ia,(function(e,n){Wt(t,n,e)})),e.l&&Rt({},(function(e,n){Wt(t,n,e)}))}function Qn(e,t,n){n=Math.min(e.i.length,n);var i=e.l?m(e.l.Qa,e.l,e):null;e:{var r=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=r[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let a=0;a<n;a++){let n=r[a].h;const l=r[a].g;if(n-=t,0>n)t=Math.max(0,r[a].h-100),o=!1;else try{bn(l,e,"req"+n+"_")}catch(s){i&&i(l)}}if(o){i=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,i}function Zn(e){e.g||e.u||(e.Z=1,Le(e.Ia,e),e.A=0)}function Jn(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=ot(m(e.Ia,e),ri(e,e.A)),e.A++,!0)}function ei(e){null!=e.B&&(a.clearTimeout(e.B),e.B=null)}function ti(e){e.g=new vt(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=Vt(e.sa);Wt(t,"RID","rpc"),Wt(t,"SID",e.I),Wt(t,"CI",e.L?"0":"1"),Wt(t,"AID",e.T),Wt(t,"TYPE","xmlhttp"),Kn(e,t),e.o&&e.s&&Bn(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Xt(Vt(t)),n.s=null,n.P=!0,St(n,e)}function ni(e){null!=e.v&&(a.clearTimeout(e.v),e.v=null)}function ii(e,t){var n=null;if(e.g==t){ni(e),ei(e),e.g=null;var i=2}else{if(!dn(e.h,t))return;n=t.D,pn(e.h,t),i=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==i){n=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;i=et(),Se(i,new st(i,n,t,r)),Gn(e)}else Zn(e);else if(r=t.o,3==r||0==r&&0<e.pa||!(1==i&&qn(e,t)||2==i&&Jn(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),r){case 1:si(e,5);break;case 4:si(e,10);break;case 3:si(e,6);break;default:si(e,2)}}function ri(e,t){let n=e.Wa+Math.floor(Math.random()*e.ab);return e.l||(n*=2),n*t}function si(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var i=m(e.jb,e);n||(n=new jt("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||zt(n,"https"),Xt(n)),yn(n.toString(),i)}else rt(2);e.G=0,e.l&&e.l.va(t),oi(e),Yn(e)}function oi(e){if(e.G=0,e.la=[],e.l){const t=gn(e.h);0==t.length&&0==e.i.length||(_(e.la,t),_(e.la,e.i),e.h.i.length=0,S(e.i),e.i.length=0),e.l.ua()}}function ai(e,t,n){var i=n instanceof jt?Vt(n):new jt(n,void 0);if(""!=i.g)t&&(i.g=t+"."+i.g),Bt(i,i.m);else{var r=a.location;i=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var s=new jt(null,void 0);i&&zt(s,i),t&&(s.g=t),r&&Bt(s,r),n&&(s.l=n),i=s}return n=e.D,t=e.za,n&&t&&Wt(i,n,t),Wt(i,"VER",e.ma),Kn(e,i),i}function li(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new Tn(new wn({ib:!0})):new Tn(e.ra),t.L=e.H,t}function ci(){}function hi(){if(M&&!(10<=Number($)))throw Error("Environmental error: no available transport.")}function ui(e,t){ke.call(this),this.g=new Wn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Xb)&&!I(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!I(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new pi(this)}function di(e){pt.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function fi(){gt.call(this),this.status=1}function pi(e){this.g=e}i=Tn.prototype,i.da=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():dt.g(),this.C=this.u?ht(this.u):ht(dt),this.g.onreadystatechange=m(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){return void Dn(this,s)}if(e=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else{if("function"!==typeof i.keys||"function"!==typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const e of i.keys())n.set(e,i.get(e))}i=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),r=a.FormData&&e instanceof a.FormData,!(0<=k(Pn,t))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Fn(this),0<this.B&&((this.K=Ln(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.qa,this)):this.A=Ve(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Dn(this,s)}},i.qa=function(){"undefined"!=typeof o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Se(this,"timeout"),this.abort(8))},i.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Se(this,"complete"),Se(this,"abort"),Mn(this))},i.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Mn(this,!0)),Tn.X.M.call(this)},i.Ha=function(){this.s||(this.F||this.v||this.l?Rn(this):this.eb())},i.eb=function(){Rn(this)},i.aa=function(){try{return 2<jn(this)?this.g.status:-1}catch(e){return-1}},i.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},i.Ra=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),In(t)}},i.Ea=function(){return this.m},i.Na=function(){return"string"===typeof this.j?this.j:String(this.j)},i=Wn.prototype,i.ma=8,i.G=1,i.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const r=new vt(this,this.j,e,void 0);let s=this.s;if(this.S&&(s?(s=ie(s),se(s,this.S)):s=this.S),null!==this.o||this.N||(r.H=s,s=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){var i=this.i[n];if(i="__data__"in i.g&&(i=i.g.__data__,"string"===typeof i)?i.length:void 0,void 0===i)break;if(t+=i,4096<t){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Qn(this,r,t),n=Vt(this.F),Wt(n,"RID",e),Wt(n,"CVER",22),this.D&&Wt(n,"X-HTTP-Session-Id",this.D),Kn(this,n),s&&(this.N?t="headers="+encodeURIComponent(String(zn(s)))+"&"+t:this.o&&Bn(n,this.o,s)),fn(this.h,r),this.Xa&&Wt(n,"TYPE","init"),this.O?(Wt(n,"$req",t),Wt(n,"SID","null"),r.Z=!0,kt(r,n,null)):kt(r,n,t),this.G=2}}else 3==this.G&&(e?$n(this,e):0==this.i.length||hn(this.h)||$n(this))},i.Ia=function(){if(this.u=null,ti(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=ot(m(this.cb,this),e)}},i.cb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,rt(10),Un(this),ti(this))},i.bb=function(){null!=this.v&&(this.v=null,Un(this),Jn(this),rt(19))},i.jb=function(e){e?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))},i=ci.prototype,i.xa=function(){},i.wa=function(){},i.va=function(){},i.ua=function(){},i.Qa=function(){},hi.prototype.g=function(e,t){return new ui(e,t)},b(ui,ke),ui.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;rt(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=ai(e,null,e.V),Gn(e)},ui.prototype.close=function(){Xn(this.g)},ui.prototype.u=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Ae(e),e=n);t.i.push(new an(t.$a++,e)),3==t.G&&Gn(t)},ui.prototype.M=function(){this.g.l=null,delete this.j,Xn(this.g),delete this.g,ui.X.M.call(this)},b(di,pt),b(fi,gt),b(pi,ci),pi.prototype.xa=function(){Se(this.g,"a")},pi.prototype.wa=function(e){Se(this.g,new di(e))},pi.prototype.va=function(e){Se(this.g,new fi(e))},pi.prototype.ua=function(){Se(this.g,"b")},hi.prototype.createWebChannel=hi.prototype.g,ui.prototype.send=ui.prototype.u,ui.prototype.open=ui.prototype.m,ui.prototype.close=ui.prototype.close,at.NO_ERROR=0,at.TIMEOUT=8,at.HTTP_ERROR=6,lt.COMPLETE="complete",ut.EventType=ft,ft.OPEN="a",ft.CLOSE="b",ft.ERROR="c",ft.MESSAGE="d",ke.prototype.listen=ke.prototype.N,Tn.prototype.listenOnce=Tn.prototype.O,Tn.prototype.getLastError=Tn.prototype.Na,Tn.prototype.getLastErrorCode=Tn.prototype.Ea,Tn.prototype.getStatus=Tn.prototype.aa,Tn.prototype.getResponseJson=Tn.prototype.Ra,Tn.prototype.getResponseText=Tn.prototype.fa,Tn.prototype.send=Tn.prototype.da;var gi=s.createWebChannelTransport=function(){return new hi},mi=s.getStatEventTarget=function(){return et()},vi=s.ErrorCode=at,bi=s.EventType=lt,yi=s.Event=Ze,xi=s.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},wi=s.FetchXmlHttpFactory=wn,ki=s.WebChannel=ut,Si=s.XhrIo=Tn}).call(this,n("c8ba"))},"90e3":function(e,t,n){var i=n("e330"),r=0,s=Math.random(),o=i(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++r+s,36)}},9112:function(e,t,n){var i=n("83ab"),r=n("9bf2"),s=n("5c6c");e.exports=i?function(e,t,n){return r.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},"94ca":function(e,t,n){var i=n("d039"),r=n("1626"),s=/#|\.prototype\./,o=function(e,t){var n=l[a(e)];return n==h||n!=c&&(r(t)?i(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},l=o.data={},c=o.NATIVE="N",h=o.POLYFILL="P";e.exports=o},"9bf2":function(e,t,n){var i=n("83ab"),r=n("0cfb"),s=n("aed9"),o=n("825a"),a=n("a04b"),l=TypeError,c=Object.defineProperty,h=Object.getOwnPropertyDescriptor,u="enumerable",d="configurable",f="writable";t.f=i?s?function(e,t,n){if(o(e),t=a(t),o(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var i=h(e,t);i&&i[f]&&(e[t]=n.value,n={configurable:d in n?n[d]:i[d],enumerable:u in n?n[u]:i[u],writable:!1})}return c(e,t,n)}:c:function(e,t,n){if(o(e),t=a(t),o(n),r)try{return c(e,t,n)}catch(i){}if("get"in n||"set"in n)throw l("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},"9ff4":function(e,t,n){"use strict";(function(e){function i(e,t){const n=Object.create(null),i=e.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,"a",(function(){return A})),n.d(t,"b",(function(){return _})),n.d(t,"c",(function(){return I})),n.d(t,"d",(function(){return C})),n.d(t,"e",(function(){return J})),n.d(t,"f",(function(){return ne})),n.d(t,"g",(function(){return oe})),n.d(t,"h",(function(){return P})),n.d(t,"i",(function(){return ce})),n.d(t,"j",(function(){return re})),n.d(t,"k",(function(){return N})),n.d(t,"l",(function(){return te})),n.d(t,"m",(function(){return l})),n.d(t,"n",(function(){return se})),n.d(t,"o",(function(){return R})),n.d(t,"p",(function(){return K})),n.d(t,"q",(function(){return V})),n.d(t,"r",(function(){return s})),n.d(t,"s",(function(){return v})),n.d(t,"t",(function(){return q})),n.d(t,"u",(function(){return M})),n.d(t,"v",(function(){return O})),n.d(t,"w",(function(){return H})),n.d(t,"x",(function(){return E})),n.d(t,"y",(function(){return G})),n.d(t,"z",(function(){return W})),n.d(t,"A",(function(){return $})),n.d(t,"B",(function(){return b})),n.d(t,"C",(function(){return F})),n.d(t,"D",(function(){return a})),n.d(t,"E",(function(){return z})),n.d(t,"F",(function(){return B})),n.d(t,"G",(function(){return x})),n.d(t,"H",(function(){return w})),n.d(t,"I",(function(){return i})),n.d(t,"J",(function(){return f})),n.d(t,"K",(function(){return p})),n.d(t,"L",(function(){return c})),n.d(t,"M",(function(){return L})),n.d(t,"N",(function(){return k})),n.d(t,"O",(function(){return ie})),n.d(t,"P",(function(){return ae})),n.d(t,"Q",(function(){return Y}));const r="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=i(r);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=i(o);function l(e){return!!e||""===e}function c(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],r=z(i)?d(i):c(i);if(r)for(const e in r)t[e]=r[e]}return t}return z(e)||H(e)?e:void 0}const h=/;(?![^(]*\))/g,u=/:(.+)/;function d(e){const t={};return e.split(h).forEach(e=>{if(e){const n=e.split(u);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function f(e){let t="";if(z(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const i=f(e[n]);i&&(t+=i+" ")}else if(H(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function p(e){if(!e)return null;let{class:t,style:n}=e;return t&&!z(t)&&(e.class=f(t)),n&&(e.style=c(n)),e}const g="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",m="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",v=i(g),b=i(m);function y(e,t){if(e.length!==t.length)return!1;let n=!0;for(let i=0;n&&i<e.length;i++)n=x(e[i],t[i]);return n}function x(e,t){if(e===t)return!0;let n=j(e),i=j(t);if(n||i)return!(!n||!i)&&e.getTime()===t.getTime();if(n=B(e),i=B(t),n||i)return e===t;if(n=R(e),i=R(t),n||i)return!(!n||!i)&&y(e,t);if(n=H(e),i=H(t),n||i){if(!n||!i)return!1;const r=Object.keys(e).length,s=Object.keys(t).length;if(r!==s)return!1;for(const n in e){const i=e.hasOwnProperty(n),r=t.hasOwnProperty(n);if(i&&!r||!i&&r||!x(e[n],t[n]))return!1}}return String(e)===String(t)}function w(e,t){return e.findIndex(e=>x(e,t))}const k=e=>z(e)?e:null==e?"":R(e)||H(e)&&(e.toString===X||!V(e.toString))?JSON.stringify(e,S,2):String(e),S=(e,t)=>t&&t.__v_isRef?S(e,t.value):M(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n])=>(e[t+" =>"]=n,e),{})}:F(t)?{[`Set(${t.size})`]:[...t.values()]}:!H(t)||R(t)||G(t)?t:String(t),_={},A=[],C=()=>{},I=()=>!1,T=/^on[^a-z]/,E=e=>T.test(e),O=e=>e.startsWith("onUpdate:"),P=Object.assign,L=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},D=Object.prototype.hasOwnProperty,N=(e,t)=>D.call(e,t),R=Array.isArray,M=e=>"[object Map]"===U(e),F=e=>"[object Set]"===U(e),j=e=>"[object Date]"===U(e),V=e=>"function"===typeof e,z=e=>"string"===typeof e,B=e=>"symbol"===typeof e,H=e=>null!==e&&"object"===typeof e,W=e=>H(e)&&V(e.then)&&V(e.catch),X=Object.prototype.toString,U=e=>X.call(e),Y=e=>U(e).slice(8,-1),G=e=>"[object Object]"===U(e),q=e=>z(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,$=i(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),K=i("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Q=e=>{const t=Object.create(null);return n=>{const i=t[n];return i||(t[n]=e(n))}},Z=/-(\w)/g,J=Q(e=>e.replace(Z,(e,t)=>t?t.toUpperCase():"")),ee=/\B([A-Z])/g,te=Q(e=>e.replace(ee,"-$1").toLowerCase()),ne=Q(e=>e.charAt(0).toUpperCase()+e.slice(1)),ie=Q(e=>e?"on"+ne(e):""),re=(e,t)=>!Object.is(e,t),se=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},oe=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ae=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let le;const ce=()=>le||(le="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:{})}).call(this,n("c8ba"))},a04b:function(e,t,n){var i=n("c04e"),r=n("d9b5");e.exports=function(e){var t=i(e,"string");return r(t)?t:t+""}},ab8b:function(e,t,n){},abc5:function(e,t,n){"use strict";(function(e){function i(){return r().__VUE_DEVTOOLS_GLOBAL_HOOK__}function r(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof e?e:{}}n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return s}));const s="function"===typeof Proxy}).call(this,n("c8ba"))},ae27:function(e,t,n){e.exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="fb15")}({8875:function(e,t,n){var i,r,s;(function(n,o){r=[],i=o,s="function"===typeof i?i.apply(t,r):i,void 0===s||(e.exports=s)})("undefined"!==typeof self&&self,(function(){function e(){var t=Object.getOwnPropertyDescriptor(document,"currentScript");if(!t&&"currentScript"in document&&document.currentScript)return document.currentScript;if(t&&t.get!==e&&document.currentScript)return document.currentScript;try{throw new Error}catch(f){var n,i,r,s=/.*at [^(]*\((.*):(.+):(.+)\)$/gi,o=/@([^@]*):(\d+):(\d+)\s*$/gi,a=s.exec(f.stack)||o.exec(f.stack),l=a&&a[1]||!1,c=a&&a[2]||!1,h=document.location.href.replace(document.location.hash,""),u=document.getElementsByTagName("script");l===h&&(n=document.documentElement.outerHTML,i=new RegExp("(?:[^\\n]+?\\n){0,"+(c-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),r=n.replace(i,"$1").trim());for(var d=0;d<u.length;d++){if("interactive"===u[d].readyState)return u[d];if(u[d].src===l)return u[d];if(l===h&&u[d].innerHTML&&u[d].innerHTML.trim()===r)return u[d]}return null}}return e}))},"8bbf":function(e,t){e.exports=n("7a23")},"95e6":function(e,t){e.exports=n("ba30")},fb15:function(e,t,n){"use strict";if(n.r(t),"undefined"!==typeof window){var i=window.document.currentScript,r=n("8875");i=r(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:r});var s=i&&i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);s&&(n.p=s[1])}var o=n("8bbf"),a=n("95e6"),l=n.n(a);const c=["animationEnd","beforeMount","mounted","updated","click","mouseMove","legendClick","markerClick","selection","dataPointSelection","dataPointMouseEnter","dataPointMouseLeave","beforeZoom","beforeResetZoom","zoomed","scrolled","scrolled"],h=Object(o["defineComponent"])({name:"apexchart",props:{options:{type:Object},type:{type:String},series:{type:Array,required:!0},width:{default:"100%"},height:{default:"auto"}},emits:c,setup(e,{emit:t}){const n=Object(o["ref"])(null),i=Object(o["ref"])(null),r=e=>e&&"object"===typeof e&&!Array.isArray(e)&&null!=e,s=(e,t)=>{"function"!==typeof Object.assign&&function(){Object.assign=function(e){if(void 0===e||null===e)throw new TypeError("Cannot convert undefined or null to object");let t=Object(e);for(let n=1;n<arguments.length;n++){let e=arguments[n];if(void 0!==e&&null!==e)for(let n in e)e.hasOwnProperty(n)&&(t[n]=e[n])}return t}}();let n=Object.assign({},e);return r(e)&&r(t)&&Object.keys(t).forEach(i=>{r(t[i])?i in e?n[i]=s(e[i],t[i]):Object.assign(n,{[i]:t[i]}):Object.assign(n,{[i]:t[i]})}),n},a=async()=>{await Object(o["nextTick"])();const r={chart:{type:e.type||e.options.chart.type||"line",height:e.height,width:e.width,events:{}},series:e.series};c.forEach(e=>{let n=(...n)=>t(e,...n);r.chart.events[e]=n});const a=s(e.options,r);return i.value=new l.a(n.value,a),i.value.render()},h=()=>(u(),a()),u=()=>{i.value.destroy()},d=(e,t)=>i.value.updateSeries(e,t),f=(e,t,n,r)=>i.value.updateOptions(e,t,n,r),p=e=>i.value.toggleSeries(e),g=e=>{i.value.showSeries(e)},m=e=>{i.value.hideSeries(e)},v=(e,t)=>i.value.appendSeries(e,t),b=()=>{i.value.resetSeries()},y=(e,t)=>{i.value.toggleDataPointSelection(e,t)},x=e=>i.value.appendData(e),w=(e,t)=>i.value.zoomX(e,t),k=()=>i.value.dataURI(),S=(e,t)=>{i.value.addXaxisAnnotation(e,t)},_=(e,t)=>{i.value.addYaxisAnnotation(e,t)},A=(e,t)=>{i.value.addPointAnnotation(e,t)},C=(e,t)=>{i.value.removeAnnotation(e,t)},I=()=>{i.value.clearAnnotations()};Object(o["onBeforeMount"])(()=>{window.ApexCharts=l.a}),Object(o["onMounted"])(()=>{n.value=Object(o["getCurrentInstance"])().proxy.$el,a()}),Object(o["onBeforeUnmount"])(()=>{i.value&&u()});const T=Object(o["toRefs"])(e);return Object(o["watch"])(T.options,()=>{!i.value&&e.options?a():i.value.updateOptions(e.options)}),Object(o["watch"])(T.series,()=>{!i.value&&e.series?a():i.value.updateSeries(e.series)},{deep:!0}),Object(o["watch"])(T.type,()=>{h()}),Object(o["watch"])(T.width,()=>{h()}),Object(o["watch"])(T.height,()=>{h()}),{chart:i,init:a,refresh:h,destroy:u,updateOptions:f,updateSeries:d,toggleSeries:p,showSeries:g,hideSeries:m,resetSeries:b,zoomX:w,toggleDataPointSelection:y,appendData:x,appendSeries:v,addXaxisAnnotation:S,addYaxisAnnotation:_,addPointAnnotation:A,removeAnnotation:C,clearAnnotations:I,dataURI:k}},render(){return Object(o["h"])("div",{class:"vue-apexcharts"})}});var u=h;const d=e=>{e.component(u.name,u)};u.install=d;var f=u;t["default"]=f}})},aed9:function(e,t,n){var i=n("83ab"),r=n("d039");e.exports=i&&r((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},b42e:function(e,t){var n=Math.ceil,i=Math.floor;e.exports=Math.trunc||function(e){var t=+e;return(t>0?i:n)(t)}},b622:function(e,t,n){var i=n("da84"),r=n("5692"),s=n("1a2d"),o=n("90e3"),a=n("04f8"),l=n("fdbf"),c=r("wks"),h=i.Symbol,u=h&&h["for"],d=l?h:h&&h.withoutSetter||o;e.exports=function(e){if(!s(c,e)||!a&&"string"!=typeof c[e]){var t="Symbol."+e;a&&s(h,e)?c[e]=h[e]:c[e]=l&&u?u(t):d(t)}return c[e]}},ba30:function(e,t,n){"use strict";var i;
/*!
 * ApexCharts v3.35.5
 * (c) 2018-2022 ApexCharts
 * Released under the MIT License.
/*! svg.filter.js - v2.0.2 - 2016-02-24
* https://github.com/wout/svg.filter.js
* Copyright (c) 2016 Wout Fierens; Licensed MIT */
function(){SVG.Filter=SVG.invent({create:"filter",inherit:SVG.Parent,extend:{source:"SourceGraphic",sourceAlpha:"SourceAlpha",background:"BackgroundImage",backgroundAlpha:"BackgroundAlpha",fill:"FillPaint",stroke:"StrokePaint",autoSetIn:!0,put:function(e,t){return this.add(e,t),!e.attr("in")&&this.autoSetIn&&e.attr("in",this.source),e.attr("result")||e.attr("result",e),e},blend:function(e,t,n){return this.put(new SVG.BlendEffect(e,t,n))},colorMatrix:function(e,t){return this.put(new SVG.ColorMatrixEffect(e,t))},convolveMatrix:function(e){return this.put(new SVG.ConvolveMatrixEffect(e))},componentTransfer:function(e){return this.put(new SVG.ComponentTransferEffect(e))},composite:function(e,t,n){return this.put(new SVG.CompositeEffect(e,t,n))},flood:function(e,t){return this.put(new SVG.FloodEffect(e,t))},offset:function(e,t){return this.put(new SVG.OffsetEffect(e,t))},image:function(e){return this.put(new SVG.ImageEffect(e))},merge:function(){var e=[void 0];for(var t in arguments)e.push(arguments[t]);return this.put(new(SVG.MergeEffect.bind.apply(SVG.MergeEffect,e)))},gaussianBlur:function(e,t){return this.put(new SVG.GaussianBlurEffect(e,t))},morphology:function(e,t){return this.put(new SVG.MorphologyEffect(e,t))},diffuseLighting:function(e,t,n){return this.put(new SVG.DiffuseLightingEffect(e,t,n))},displacementMap:function(e,t,n,i,r){return this.put(new SVG.DisplacementMapEffect(e,t,n,i,r))},specularLighting:function(e,t,n,i){return this.put(new SVG.SpecularLightingEffect(e,t,n,i))},tile:function(){return this.put(new SVG.TileEffect)},turbulence:function(e,t,n,i,r){return this.put(new SVG.TurbulenceEffect(e,t,n,i,r))},toString:function(){return"url(#"+this.attr("id")+")"}}}),SVG.extend(SVG.Defs,{filter:function(e){var t=this.put(new SVG.Filter);return"function"==typeof e&&e.call(t,t),t}}),SVG.extend(SVG.Container,{filter:function(e){return this.defs().filter(e)}}),SVG.extend(SVG.Element,SVG.G,SVG.Nested,{filter:function(e){return this.filterer=e instanceof SVG.Element?e:this.doc().filter(e),this.doc()&&this.filterer.doc()!==this.doc()&&this.doc().defs().add(this.filterer),this.attr("filter",this.filterer),this.filterer},unfilter:function(e){return this.filterer&&!0===e&&this.filterer.remove(),delete this.filterer,this.attr("filter",null)}}),SVG.Effect=SVG.invent({create:function(){this.constructor.call(this)},inherit:SVG.Element,extend:{in:function(e){return null==e?this.parent()&&this.parent().select('[result="'+this.attr("in")+'"]').get(0)||this.attr("in"):this.attr("in",e)},result:function(e){return null==e?this.attr("result"):this.attr("result",e)},toString:function(){return this.result()}}}),SVG.ParentEffect=SVG.invent({create:function(){this.constructor.call(this)},inherit:SVG.Parent,extend:{in:function(e){return null==e?this.parent()&&this.parent().select('[result="'+this.attr("in")+'"]').get(0)||this.attr("in"):this.attr("in",e)},result:function(e){return null==e?this.attr("result"):this.attr("result",e)},toString:function(){return this.result()}}});var e={blend:function(e,t){return this.parent()&&this.parent().blend(this,e,t)},colorMatrix:function(e,t){return this.parent()&&this.parent().colorMatrix(e,t).in(this)},convolveMatrix:function(e){return this.parent()&&this.parent().convolveMatrix(e).in(this)},componentTransfer:function(e){return this.parent()&&this.parent().componentTransfer(e).in(this)},composite:function(e,t){return this.parent()&&this.parent().composite(this,e,t)},flood:function(e,t){return this.parent()&&this.parent().flood(e,t)},offset:function(e,t){return this.parent()&&this.parent().offset(e,t).in(this)},image:function(e){return this.parent()&&this.parent().image(e)},merge:function(){return this.parent()&&this.parent().merge.apply(this.parent(),[this].concat(arguments))},gaussianBlur:function(e,t){return this.parent()&&this.parent().gaussianBlur(e,t).in(this)},morphology:function(e,t){return this.parent()&&this.parent().morphology(e,t).in(this)},diffuseLighting:function(e,t,n){return this.parent()&&this.parent().diffuseLighting(e,t,n).in(this)},displacementMap:function(e,t,n,i){return this.parent()&&this.parent().displacementMap(this,e,t,n,i)},specularLighting:function(e,t,n,i){return this.parent()&&this.parent().specularLighting(e,t,n,i).in(this)},tile:function(){return this.parent()&&this.parent().tile().in(this)},turbulence:function(e,t,n,i,r){return this.parent()&&this.parent().turbulence(e,t,n,i,r).in(this)}};SVG.extend(SVG.Effect,e),SVG.extend(SVG.ParentEffect,e),SVG.ChildEffect=SVG.invent({create:function(){this.constructor.call(this)},inherit:SVG.Element,extend:{in:function(e){this.attr("in",e)}}});var t={blend:function(e,t,n){this.attr({in:e,in2:t,mode:n||"normal"})},colorMatrix:function(e,t){"matrix"==e&&(t=r(t)),this.attr({type:e,values:void 0===t?null:t})},convolveMatrix:function(e){e=r(e),this.attr({order:Math.sqrt(e.split(" ").length),kernelMatrix:e})},composite:function(e,t,n){this.attr({in:e,in2:t,operator:n})},flood:function(e,t){this.attr("flood-color",e),null!=t&&this.attr("flood-opacity",t)},offset:function(e,t){this.attr({dx:e,dy:t})},image:function(e){this.attr("href",e,SVG.xlink)},displacementMap:function(e,t,n,i,r){this.attr({in:e,in2:t,scale:n,xChannelSelector:i,yChannelSelector:r})},gaussianBlur:function(e,t){null!=e||null!=t?this.attr("stdDeviation",s(Array.prototype.slice.call(arguments))):this.attr("stdDeviation","0 0")},morphology:function(e,t){this.attr({operator:e,radius:t})},tile:function(){},turbulence:function(e,t,n,i,r){this.attr({numOctaves:t,seed:n,stitchTiles:i,baseFrequency:e,type:r})}},n={merge:function(){var e;if(arguments[0]instanceof SVG.Set){var t=this;arguments[0].each((function(e){this instanceof SVG.MergeNode?t.put(this):(this instanceof SVG.Effect||this instanceof SVG.ParentEffect)&&t.put(new SVG.MergeNode(this))}))}else{e=Array.isArray(arguments[0])?arguments[0]:arguments;for(var n=0;n<e.length;n++)e[n]instanceof SVG.MergeNode?this.put(e[n]):this.put(new SVG.MergeNode(e[n]))}},componentTransfer:function(e){if(this.rgb=new SVG.Set,["r","g","b","a"].forEach(function(e){this[e]=new(SVG["Func"+e.toUpperCase()])("identity"),this.rgb.add(this[e]),this.node.appendChild(this[e].node)}.bind(this)),e)for(var t in e.rgb&&(["r","g","b"].forEach(function(t){this[t].attr(e.rgb)}.bind(this)),delete e.rgb),e)this[t].attr(e[t])},diffuseLighting:function(e,t,n){this.attr({surfaceScale:e,diffuseConstant:t,kernelUnitLength:n})},specularLighting:function(e,t,n,i){this.attr({surfaceScale:e,diffuseConstant:t,specularExponent:n,kernelUnitLength:i})}},i={distantLight:function(e,t){this.attr({azimuth:e,elevation:t})},pointLight:function(e,t,n){this.attr({x:e,y:t,z:n})},spotLight:function(e,t,n,i,r,s){this.attr({x:e,y:t,z:n,pointsAtX:i,pointsAtY:r,pointsAtZ:s})},mergeNode:function(e){this.attr("in",e)}};function r(e){return Array.isArray(e)&&(e=new SVG.Array(e)),e.toString().replace(/^\s+/,"").replace(/\s+$/,"").replace(/\s+/g," ")}function s(e){if(!Array.isArray(e))return e;for(var t=0,n=e.length,i=[];t<n;t++)i.push(e[t]);return i.join(" ")}function o(){var e=function(){};for(var t in"function"==typeof arguments[arguments.length-1]&&(e=arguments[arguments.length-1],Array.prototype.splice.call(arguments,arguments.length-1,1)),arguments)for(var n in arguments[t])e(arguments[t][n],n,arguments[t])}["r","g","b","a"].forEach((function(e){i["Func"+e.toUpperCase()]=function(e){switch(this.attr("type",e),e){case"table":this.attr("tableValues",arguments[1]);break;case"linear":this.attr("slope",arguments[1]),this.attr("intercept",arguments[2]);break;case"gamma":this.attr("amplitude",arguments[1]),this.attr("exponent",arguments[2]),this.attr("offset",arguments[2])}}})),o(t,(function(e,t){var n=t.charAt(0).toUpperCase()+t.slice(1);SVG[n+"Effect"]=SVG.invent({create:function(){this.constructor.call(this,SVG.create("fe"+n)),e.apply(this,arguments),this.result(this.attr("id")+"Out")},inherit:SVG.Effect,extend:{}})})),o(n,(function(e,t){var n=t.charAt(0).toUpperCase()+t.slice(1);SVG[n+"Effect"]=SVG.invent({create:function(){this.constructor.call(this,SVG.create("fe"+n)),e.apply(this,arguments),this.result(this.attr("id")+"Out")},inherit:SVG.ParentEffect,extend:{}})})),o(i,(function(e,t){var n=t.charAt(0).toUpperCase()+t.slice(1);SVG[n]=SVG.invent({create:function(){this.constructor.call(this,SVG.create("fe"+n)),e.apply(this,arguments)},inherit:SVG.ChildEffect,extend:{}})})),SVG.extend(SVG.MergeEffect,{in:function(e){return e instanceof SVG.MergeNode?this.add(e,0):this.add(new SVG.MergeNode(e),0),this}}),SVG.extend(SVG.CompositeEffect,SVG.BlendEffect,SVG.DisplacementMapEffect,{in2:function(e){return null==e?this.parent()&&this.parent().select('[result="'+this.attr("in2")+'"]').get(0)||this.attr("in2"):this.attr("in2",e)}}),SVG.filter={sepiatone:[.343,.669,.119,0,0,.249,.626,.13,0,0,.172,.334,.111,0,0,0,0,0,1,0]}}.call(void 0),function(){function e(e,r,s,o,a,l,c){for(var h=e.slice(r,s||c),u=o.slice(a,l||c),d=0,f={pos:[0,0],start:[0,0]},p={pos:[0,0],start:[0,0]};;){if(h[d]=t.call(f,h[d]),u[d]=t.call(p,u[d]),h[d][0]!=u[d][0]||"M"==h[d][0]||"A"==h[d][0]&&(h[d][4]!=u[d][4]||h[d][5]!=u[d][5])?(Array.prototype.splice.apply(h,[d,1].concat(i.call(f,h[d]))),Array.prototype.splice.apply(u,[d,1].concat(i.call(p,u[d])))):(h[d]=n.call(f,h[d]),u[d]=n.call(p,u[d])),++d==h.length&&d==u.length)break;d==h.length&&h.push(["C",f.pos[0],f.pos[1],f.pos[0],f.pos[1],f.pos[0],f.pos[1]]),d==u.length&&u.push(["C",p.pos[0],p.pos[1],p.pos[0],p.pos[1],p.pos[0],p.pos[1]])}return{start:h,dest:u}}function t(e){switch(e[0]){case"z":case"Z":e[0]="L",e[1]=this.start[0],e[2]=this.start[1];break;case"H":e[0]="L",e[2]=this.pos[1];break;case"V":e[0]="L",e[2]=e[1],e[1]=this.pos[0];break;case"T":e[0]="Q",e[3]=e[1],e[4]=e[2],e[1]=this.reflection[1],e[2]=this.reflection[0];break;case"S":e[0]="C",e[6]=e[4],e[5]=e[3],e[4]=e[2],e[3]=e[1],e[2]=this.reflection[1],e[1]=this.reflection[0]}return e}function n(e){var t=e.length;return this.pos=[e[t-2],e[t-1]],-1!="SCQT".indexOf(e[0])&&(this.reflection=[2*this.pos[0]-e[t-4],2*this.pos[1]-e[t-3]]),e}function i(e){var t=[e];switch(e[0]){case"M":return this.pos=this.start=[e[1],e[2]],t;case"L":e[5]=e[3]=e[1],e[6]=e[4]=e[2],e[1]=this.pos[0],e[2]=this.pos[1];break;case"Q":e[6]=e[4],e[5]=e[3],e[4]=1*e[4]/3+2*e[2]/3,e[3]=1*e[3]/3+2*e[1]/3,e[2]=1*this.pos[1]/3+2*e[2]/3,e[1]=1*this.pos[0]/3+2*e[1]/3;break;case"A":e=(t=function(e,t){var n,i,r,s,o,a,l,c,h,u,d,f,p,g,m,v,b,y,x,w,k,S,_,A,C,I,T=Math.abs(t[1]),E=Math.abs(t[2]),O=t[3]%360,P=t[4],L=t[5],D=t[6],N=t[7],R=new SVG.Point(e),M=new SVG.Point(D,N),F=[];if(0===T||0===E||R.x===M.x&&R.y===M.y)return[["C",R.x,R.y,M.x,M.y,M.x,M.y]];for(n=new SVG.Point((R.x-M.x)/2,(R.y-M.y)/2).transform((new SVG.Matrix).rotate(O)),(i=n.x*n.x/(T*T)+n.y*n.y/(E*E))>1&&(T*=i=Math.sqrt(i),E*=i),r=(new SVG.Matrix).rotate(O).scale(1/T,1/E).rotate(-O),R=R.transform(r),M=M.transform(r),s=[M.x-R.x,M.y-R.y],a=s[0]*s[0]+s[1]*s[1],o=Math.sqrt(a),s[0]/=o,s[1]/=o,l=a<4?Math.sqrt(1-a/4):0,P===L&&(l*=-1),c=new SVG.Point((M.x+R.x)/2+l*-s[1],(M.y+R.y)/2+l*s[0]),h=new SVG.Point(R.x-c.x,R.y-c.y),u=new SVG.Point(M.x-c.x,M.y-c.y),d=Math.acos(h.x/Math.sqrt(h.x*h.x+h.y*h.y)),h.y<0&&(d*=-1),f=Math.acos(u.x/Math.sqrt(u.x*u.x+u.y*u.y)),u.y<0&&(f*=-1),L&&d>f&&(f+=2*Math.PI),!L&&d<f&&(f-=2*Math.PI),g=Math.ceil(2*Math.abs(d-f)/Math.PI),v=[],b=d,p=(f-d)/g,m=4*Math.tan(p/4)/3,k=0;k<=g;k++)x=Math.cos(b),y=Math.sin(b),w=new SVG.Point(c.x+x,c.y+y),v[k]=[new SVG.Point(w.x+m*y,w.y-m*x),w,new SVG.Point(w.x-m*y,w.y+m*x)],b+=p;for(v[0][0]=v[0][1].clone(),v[v.length-1][2]=v[v.length-1][1].clone(),r=(new SVG.Matrix).rotate(O).scale(T,E).rotate(-O),k=0,S=v.length;k<S;k++)v[k][0]=v[k][0].transform(r),v[k][1]=v[k][1].transform(r),v[k][2]=v[k][2].transform(r);for(k=1,S=v.length;k<S;k++)_=(w=v[k-1][2]).x,A=w.y,C=(w=v[k][0]).x,I=w.y,D=(w=v[k][1]).x,N=w.y,F.push(["C",_,A,C,I,D,N]);return F}(this.pos,e))[0]}return e[0]="C",this.pos=[e[5],e[6]],this.reflection=[2*e[5]-e[3],2*e[6]-e[4]],t}function r(e,t){if(!1===t)return!1;for(var n=t,i=e.length;n<i;++n)if("M"==e[n][0])return n;return!1}SVG.extend(SVG.PathArray,{morph:function(t){for(var n=this.value,i=this.parse(t),s=0,o=0,a=!1,l=!1;!1!==s||!1!==o;){var c;a=r(n,!1!==s&&s+1),l=r(i,!1!==o&&o+1),!1===s&&(s=0==(c=new SVG.PathArray(h.start).bbox()).height||0==c.width?n.push(n[0])-1:n.push(["M",c.x+c.width/2,c.y+c.height/2])-1),!1===o&&(o=0==(c=new SVG.PathArray(h.dest).bbox()).height||0==c.width?i.push(i[0])-1:i.push(["M",c.x+c.width/2,c.y+c.height/2])-1);var h=e(n,s,a,i,o,l);n=n.slice(0,s).concat(h.start,!1===a?[]:n.slice(a)),i=i.slice(0,o).concat(h.dest,!1===l?[]:i.slice(l)),s=!1!==a&&s+h.start.length,o=!1!==l&&o+h.dest.length}return this.value=n,this.destination=new SVG.PathArray,this.destination.value=i,this}})}(),
/*! svg.draggable.js - v2.2.2 - 2019-01-08
* https://github.com/svgdotjs/svg.draggable.js
* Copyright (c) 2019 Wout Fierens; Licensed MIT */
function(){function e(e){e.remember("_draggable",this),this.el=e}e.prototype.init=function(e,t){var n=this;this.constraint=e,this.value=t,this.el.on("mousedown.drag",(function(e){n.start(e)})),this.el.on("touchstart.drag",(function(e){n.start(e)}))},e.prototype.transformPoint=function(e,t){var n=(e=e||window.event).changedTouches&&e.changedTouches[0]||e;return this.p.x=n.clientX-(t||0),this.p.y=n.clientY,this.p.matrixTransform(this.m)},e.prototype.getBBox=function(){var e=this.el.bbox();return this.el instanceof SVG.Nested&&(e=this.el.rbox()),(this.el instanceof SVG.G||this.el instanceof SVG.Use||this.el instanceof SVG.Nested)&&(e.x=this.el.x(),e.y=this.el.y()),e},e.prototype.start=function(e){if("click"!=e.type&&"mousedown"!=e.type&&"mousemove"!=e.type||1==(e.which||e.buttons)){var t=this;if(this.el.fire("beforedrag",{event:e,handler:this}),!this.el.event().defaultPrevented){e.preventDefault(),e.stopPropagation(),this.parent=this.parent||this.el.parent(SVG.Nested)||this.el.parent(SVG.Doc),this.p=this.parent.node.createSVGPoint(),this.m=this.el.node.getScreenCTM().inverse();var n,i=this.getBBox();if(this.el instanceof SVG.Text)switch(n=this.el.node.getComputedTextLength(),this.el.attr("text-anchor")){case"middle":n/=2;break;case"start":n=0}this.startPoints={point:this.transformPoint(e,n),box:i,transform:this.el.transform()},SVG.on(window,"mousemove.drag",(function(e){t.drag(e)})),SVG.on(window,"touchmove.drag",(function(e){t.drag(e)})),SVG.on(window,"mouseup.drag",(function(e){t.end(e)})),SVG.on(window,"touchend.drag",(function(e){t.end(e)})),this.el.fire("dragstart",{event:e,p:this.startPoints.point,m:this.m,handler:this})}}},e.prototype.drag=function(e){var t=this.getBBox(),n=this.transformPoint(e),i=this.startPoints.box.x+n.x-this.startPoints.point.x,r=this.startPoints.box.y+n.y-this.startPoints.point.y,s=this.constraint,o=n.x-this.startPoints.point.x,a=n.y-this.startPoints.point.y;if(this.el.fire("dragmove",{event:e,p:n,m:this.m,handler:this}),this.el.event().defaultPrevented)return n;if("function"==typeof s){var l=s.call(this.el,i,r,this.m);"boolean"==typeof l&&(l={x:l,y:l}),!0===l.x?this.el.x(i):!1!==l.x&&this.el.x(l.x),!0===l.y?this.el.y(r):!1!==l.y&&this.el.y(l.y)}else"object"==typeof s&&(null!=s.minX&&i<s.minX?o=(i=s.minX)-this.startPoints.box.x:null!=s.maxX&&i>s.maxX-t.width&&(o=(i=s.maxX-t.width)-this.startPoints.box.x),null!=s.minY&&r<s.minY?a=(r=s.minY)-this.startPoints.box.y:null!=s.maxY&&r>s.maxY-t.height&&(a=(r=s.maxY-t.height)-this.startPoints.box.y),null!=s.snapToGrid&&(i-=i%s.snapToGrid,r-=r%s.snapToGrid,o-=o%s.snapToGrid,a-=a%s.snapToGrid),this.el instanceof SVG.G?this.el.matrix(this.startPoints.transform).transform({x:o,y:a},!0):this.el.move(i,r));return n},e.prototype.end=function(e){var t=this.drag(e);this.el.fire("dragend",{event:e,p:t,m:this.m,handler:this}),SVG.off(window,"mousemove.drag"),SVG.off(window,"touchmove.drag"),SVG.off(window,"mouseup.drag"),SVG.off(window,"touchend.drag")},SVG.extend(SVG.Element,{draggable:function(t,n){"function"!=typeof t&&"object"!=typeof t||(n=t,t=!0);var i=this.remember("_draggable")||new e(this);return(t=void 0===t||t)?i.init(n||{},t):(this.off("mousedown.drag"),this.off("touchstart.drag")),this}})}.call(void 0),function(){function e(e){this.el=e,e.remember("_selectHandler",this),this.pointSelection={isSelected:!1},this.rectSelection={isSelected:!1},this.pointsList={lt:[0,0],rt:["width",0],rb:["width","height"],lb:[0,"height"],t:["width",0],r:["width","height"],b:["width","height"],l:[0,"height"]},this.pointCoord=function(e,t,n){var i="string"!=typeof e?e:t[e];return n?i/2:i},this.pointCoords=function(e,t){var n=this.pointsList[e];return{x:this.pointCoord(n[0],t,"t"===e||"b"===e),y:this.pointCoord(n[1],t,"r"===e||"l"===e)}}}e.prototype.init=function(e,t){var n=this.el.bbox();this.options={};var i=this.el.selectize.defaults.points;for(var r in this.el.selectize.defaults)this.options[r]=this.el.selectize.defaults[r],void 0!==t[r]&&(this.options[r]=t[r]);var s=["points","pointsExclude"];for(var r in s){var o=this.options[s[r]];"string"==typeof o?o=o.length>0?o.split(/\s*,\s*/i):[]:"boolean"==typeof o&&"points"===s[r]&&(o=o?i:[]),this.options[s[r]]=o}this.options.points=[i,this.options.points].reduce((function(e,t){return e.filter((function(e){return t.indexOf(e)>-1}))})),this.options.points=[this.options.points,this.options.pointsExclude].reduce((function(e,t){return e.filter((function(e){return t.indexOf(e)<0}))})),this.parent=this.el.parent(),this.nested=this.nested||this.parent.group(),this.nested.matrix(new SVG.Matrix(this.el).translate(n.x,n.y)),this.options.deepSelect&&-1!==["line","polyline","polygon"].indexOf(this.el.type)?this.selectPoints(e):this.selectRect(e),this.observe(),this.cleanup()},e.prototype.selectPoints=function(e){return this.pointSelection.isSelected=e,this.pointSelection.set||(this.pointSelection.set=this.parent.set(),this.drawPoints()),this},e.prototype.getPointArray=function(){var e=this.el.bbox();return this.el.array().valueOf().map((function(t){return[t[0]-e.x,t[1]-e.y]}))},e.prototype.drawPoints=function(){for(var e=this,t=this.getPointArray(),n=0,i=t.length;n<i;++n){var r=function(t){return function(n){(n=n||window.event).preventDefault?n.preventDefault():n.returnValue=!1,n.stopPropagation();var i=n.pageX||n.touches[0].pageX,r=n.pageY||n.touches[0].pageY;e.el.fire("point",{x:i,y:r,i:t,event:n})}}(n),s=this.drawPoint(t[n][0],t[n][1]).addClass(this.options.classPoints).addClass(this.options.classPoints+"_point").on("touchstart",r).on("mousedown",r);this.pointSelection.set.add(s)}},e.prototype.drawPoint=function(e,t){var n=this.options.pointType;switch(n){case"circle":return this.drawCircle(e,t);case"rect":return this.drawRect(e,t);default:if("function"==typeof n)return n.call(this,e,t);throw new Error("Unknown "+n+" point type!")}},e.prototype.drawCircle=function(e,t){return this.nested.circle(this.options.pointSize).center(e,t)},e.prototype.drawRect=function(e,t){return this.nested.rect(this.options.pointSize,this.options.pointSize).center(e,t)},e.prototype.updatePointSelection=function(){var e=this.getPointArray();this.pointSelection.set.each((function(t){this.cx()===e[t][0]&&this.cy()===e[t][1]||this.center(e[t][0],e[t][1])}))},e.prototype.updateRectSelection=function(){var e=this,t=this.el.bbox();if(this.rectSelection.set.get(0).attr({width:t.width,height:t.height}),this.options.points.length&&this.options.points.map((function(n,i){var r=e.pointCoords(n,t);e.rectSelection.set.get(i+1).center(r.x,r.y)})),this.options.rotationPoint){var n=this.rectSelection.set.length();this.rectSelection.set.get(n-1).center(t.width/2,20)}},e.prototype.selectRect=function(e){var t=this,n=this.el.bbox();function i(e){return function(n){(n=n||window.event).preventDefault?n.preventDefault():n.returnValue=!1,n.stopPropagation();var i=n.pageX||n.touches[0].pageX,r=n.pageY||n.touches[0].pageY;t.el.fire(e,{x:i,y:r,event:n})}}if(this.rectSelection.isSelected=e,this.rectSelection.set=this.rectSelection.set||this.parent.set(),this.rectSelection.set.get(0)||this.rectSelection.set.add(this.nested.rect(n.width,n.height).addClass(this.options.classRect)),this.options.points.length&&this.rectSelection.set.length()<2&&(this.options.points.map((function(e,r){var s=t.pointCoords(e,n),o=t.drawPoint(s.x,s.y).attr("class",t.options.classPoints+"_"+e).on("mousedown",i(e)).on("touchstart",i(e));t.rectSelection.set.add(o)})),this.rectSelection.set.each((function(){this.addClass(t.options.classPoints)}))),this.options.rotationPoint&&(this.options.points&&!this.rectSelection.set.get(9)||!this.options.points&&!this.rectSelection.set.get(1))){var r=function(e){(e=e||window.event).preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation();var n=e.pageX||e.touches[0].pageX,i=e.pageY||e.touches[0].pageY;t.el.fire("rot",{x:n,y:i,event:e})},s=this.drawPoint(n.width/2,20).attr("class",this.options.classPoints+"_rot").on("touchstart",r).on("mousedown",r);this.rectSelection.set.add(s)}},e.prototype.handler=function(){var e=this.el.bbox();this.nested.matrix(new SVG.Matrix(this.el).translate(e.x,e.y)),this.rectSelection.isSelected&&this.updateRectSelection(),this.pointSelection.isSelected&&this.updatePointSelection()},e.prototype.observe=function(){var e=this;if(MutationObserver)if(this.rectSelection.isSelected||this.pointSelection.isSelected)this.observerInst=this.observerInst||new MutationObserver((function(){e.handler()})),this.observerInst.observe(this.el.node,{attributes:!0});else try{this.observerInst.disconnect(),delete this.observerInst}catch(e){}else this.el.off("DOMAttrModified.select"),(this.rectSelection.isSelected||this.pointSelection.isSelected)&&this.el.on("DOMAttrModified.select",(function(){e.handler()}))},e.prototype.cleanup=function(){!this.rectSelection.isSelected&&this.rectSelection.set&&(this.rectSelection.set.each((function(){this.remove()})),this.rectSelection.set.clear(),delete this.rectSelection.set),!this.pointSelection.isSelected&&this.pointSelection.set&&(this.pointSelection.set.each((function(){this.remove()})),this.pointSelection.set.clear(),delete this.pointSelection.set),this.pointSelection.isSelected||this.rectSelection.isSelected||(this.nested.remove(),delete this.nested)},SVG.extend(SVG.Element,{selectize:function(t,n){return"object"==typeof t&&(n=t,t=!0),(this.remember("_selectHandler")||new e(this)).init(void 0===t||t,n||{}),this}}),SVG.Element.prototype.selectize.defaults={points:["lt","rt","rb","lb","t","r","b","l"],pointsExclude:[],classRect:"svg_select_boundingRect",classPoints:"svg_select_points",pointSize:7,rotationPoint:!0,deepSelect:!1,pointType:"circle"}}(),function(){(function(){function e(e){e.remember("_resizeHandler",this),this.el=e,this.parameters={},this.lastUpdateCall=null,this.p=e.doc().node.createSVGPoint()}e.prototype.transformPoint=function(e,t,n){return this.p.x=e-(this.offset.x-window.pageXOffset),this.p.y=t-(this.offset.y-window.pageYOffset),this.p.matrixTransform(n||this.m)},e.prototype._extractPosition=function(e){return{x:null!=e.clientX?e.clientX:e.touches[0].clientX,y:null!=e.clientY?e.clientY:e.touches[0].clientY}},e.prototype.init=function(e){var t=this;if(this.stop(),"stop"!==e){for(var n in this.options={},this.el.resize.defaults)this.options[n]=this.el.resize.defaults[n],void 0!==e[n]&&(this.options[n]=e[n]);this.el.on("lt.resize",(function(e){t.resize(e||window.event)})),this.el.on("rt.resize",(function(e){t.resize(e||window.event)})),this.el.on("rb.resize",(function(e){t.resize(e||window.event)})),this.el.on("lb.resize",(function(e){t.resize(e||window.event)})),this.el.on("t.resize",(function(e){t.resize(e||window.event)})),this.el.on("r.resize",(function(e){t.resize(e||window.event)})),this.el.on("b.resize",(function(e){t.resize(e||window.event)})),this.el.on("l.resize",(function(e){t.resize(e||window.event)})),this.el.on("rot.resize",(function(e){t.resize(e||window.event)})),this.el.on("point.resize",(function(e){t.resize(e||window.event)})),this.update()}},e.prototype.stop=function(){return this.el.off("lt.resize"),this.el.off("rt.resize"),this.el.off("rb.resize"),this.el.off("lb.resize"),this.el.off("t.resize"),this.el.off("r.resize"),this.el.off("b.resize"),this.el.off("l.resize"),this.el.off("rot.resize"),this.el.off("point.resize"),this},e.prototype.resize=function(e){var t=this;this.m=this.el.node.getScreenCTM().inverse(),this.offset={x:window.pageXOffset,y:window.pageYOffset};var n=this._extractPosition(e.detail.event);if(this.parameters={type:this.el.type,p:this.transformPoint(n.x,n.y),x:e.detail.x,y:e.detail.y,box:this.el.bbox(),rotation:this.el.transform().rotation},"text"===this.el.type&&(this.parameters.fontSize=this.el.attr()["font-size"]),void 0!==e.detail.i){var i=this.el.array().valueOf();this.parameters.i=e.detail.i,this.parameters.pointCoords=[i[e.detail.i][0],i[e.detail.i][1]]}switch(e.type){case"lt":this.calc=function(e,t){var n=this.snapToGrid(e,t);if(this.parameters.box.width-n[0]>0&&this.parameters.box.height-n[1]>0){if("text"===this.parameters.type)return this.el.move(this.parameters.box.x+n[0],this.parameters.box.y),void this.el.attr("font-size",this.parameters.fontSize-n[0]);n=this.checkAspectRatio(n),this.el.move(this.parameters.box.x+n[0],this.parameters.box.y+n[1]).size(this.parameters.box.width-n[0],this.parameters.box.height-n[1])}};break;case"rt":this.calc=function(e,t){var n=this.snapToGrid(e,t,2);if(this.parameters.box.width+n[0]>0&&this.parameters.box.height-n[1]>0){if("text"===this.parameters.type)return this.el.move(this.parameters.box.x-n[0],this.parameters.box.y),void this.el.attr("font-size",this.parameters.fontSize+n[0]);n=this.checkAspectRatio(n,!0),this.el.move(this.parameters.box.x,this.parameters.box.y+n[1]).size(this.parameters.box.width+n[0],this.parameters.box.height-n[1])}};break;case"rb":this.calc=function(e,t){var n=this.snapToGrid(e,t,0);if(this.parameters.box.width+n[0]>0&&this.parameters.box.height+n[1]>0){if("text"===this.parameters.type)return this.el.move(this.parameters.box.x-n[0],this.parameters.box.y),void this.el.attr("font-size",this.parameters.fontSize+n[0]);n=this.checkAspectRatio(n),this.el.move(this.parameters.box.x,this.parameters.box.y).size(this.parameters.box.width+n[0],this.parameters.box.height+n[1])}};break;case"lb":this.calc=function(e,t){var n=this.snapToGrid(e,t,1);if(this.parameters.box.width-n[0]>0&&this.parameters.box.height+n[1]>0){if("text"===this.parameters.type)return this.el.move(this.parameters.box.x+n[0],this.parameters.box.y),void this.el.attr("font-size",this.parameters.fontSize-n[0]);n=this.checkAspectRatio(n,!0),this.el.move(this.parameters.box.x+n[0],this.parameters.box.y).size(this.parameters.box.width-n[0],this.parameters.box.height+n[1])}};break;case"t":this.calc=function(e,t){var n=this.snapToGrid(e,t,2);if(this.parameters.box.height-n[1]>0){if("text"===this.parameters.type)return;this.el.move(this.parameters.box.x,this.parameters.box.y+n[1]).height(this.parameters.box.height-n[1])}};break;case"r":this.calc=function(e,t){var n=this.snapToGrid(e,t,0);if(this.parameters.box.width+n[0]>0){if("text"===this.parameters.type)return;this.el.move(this.parameters.box.x,this.parameters.box.y).width(this.parameters.box.width+n[0])}};break;case"b":this.calc=function(e,t){var n=this.snapToGrid(e,t,0);if(this.parameters.box.height+n[1]>0){if("text"===this.parameters.type)return;this.el.move(this.parameters.box.x,this.parameters.box.y).height(this.parameters.box.height+n[1])}};break;case"l":this.calc=function(e,t){var n=this.snapToGrid(e,t,1);if(this.parameters.box.width-n[0]>0){if("text"===this.parameters.type)return;this.el.move(this.parameters.box.x+n[0],this.parameters.box.y).width(this.parameters.box.width-n[0])}};break;case"rot":this.calc=function(e,t){var n=e+this.parameters.p.x,i=t+this.parameters.p.y,r=Math.atan2(this.parameters.p.y-this.parameters.box.y-this.parameters.box.height/2,this.parameters.p.x-this.parameters.box.x-this.parameters.box.width/2),s=Math.atan2(i-this.parameters.box.y-this.parameters.box.height/2,n-this.parameters.box.x-this.parameters.box.width/2),o=this.parameters.rotation+180*(s-r)/Math.PI+this.options.snapToAngle/2;this.el.center(this.parameters.box.cx,this.parameters.box.cy).rotate(o-o%this.options.snapToAngle,this.parameters.box.cx,this.parameters.box.cy)};break;case"point":this.calc=function(e,t){var n=this.snapToGrid(e,t,this.parameters.pointCoords[0],this.parameters.pointCoords[1]),i=this.el.array().valueOf();i[this.parameters.i][0]=this.parameters.pointCoords[0]+n[0],i[this.parameters.i][1]=this.parameters.pointCoords[1]+n[1],this.el.plot(i)}}this.el.fire("resizestart",{dx:this.parameters.x,dy:this.parameters.y,event:e}),SVG.on(window,"touchmove.resize",(function(e){t.update(e||window.event)})),SVG.on(window,"touchend.resize",(function(){t.done()})),SVG.on(window,"mousemove.resize",(function(e){t.update(e||window.event)})),SVG.on(window,"mouseup.resize",(function(){t.done()}))},e.prototype.update=function(e){if(e){var t=this._extractPosition(e),n=this.transformPoint(t.x,t.y),i=n.x-this.parameters.p.x,r=n.y-this.parameters.p.y;this.lastUpdateCall=[i,r],this.calc(i,r),this.el.fire("resizing",{dx:i,dy:r,event:e})}else this.lastUpdateCall&&this.calc(this.lastUpdateCall[0],this.lastUpdateCall[1])},e.prototype.done=function(){this.lastUpdateCall=null,SVG.off(window,"mousemove.resize"),SVG.off(window,"mouseup.resize"),SVG.off(window,"touchmove.resize"),SVG.off(window,"touchend.resize"),this.el.fire("resizedone")},e.prototype.snapToGrid=function(e,t,n,i){var r;return void 0!==i?r=[(n+e)%this.options.snapToGrid,(i+t)%this.options.snapToGrid]:(n=null==n?3:n,r=[(this.parameters.box.x+e+(1&n?0:this.parameters.box.width))%this.options.snapToGrid,(this.parameters.box.y+t+(2&n?0:this.parameters.box.height))%this.options.snapToGrid]),e<0&&(r[0]-=this.options.snapToGrid),t<0&&(r[1]-=this.options.snapToGrid),e-=Math.abs(r[0])<this.options.snapToGrid/2?r[0]:r[0]-(e<0?-this.options.snapToGrid:this.options.snapToGrid),t-=Math.abs(r[1])<this.options.snapToGrid/2?r[1]:r[1]-(t<0?-this.options.snapToGrid:this.options.snapToGrid),this.constraintToBox(e,t,n,i)},e.prototype.constraintToBox=function(e,t,n,i){var r,s,o=this.options.constraint||{};return void 0!==i?(r=n,s=i):(r=this.parameters.box.x+(1&n?0:this.parameters.box.width),s=this.parameters.box.y+(2&n?0:this.parameters.box.height)),void 0!==o.minX&&r+e<o.minX&&(e=o.minX-r),void 0!==o.maxX&&r+e>o.maxX&&(e=o.maxX-r),void 0!==o.minY&&s+t<o.minY&&(t=o.minY-s),void 0!==o.maxY&&s+t>o.maxY&&(t=o.maxY-s),[e,t]},e.prototype.checkAspectRatio=function(e,t){if(!this.options.saveAspectRatio)return e;var n=e.slice(),i=this.parameters.box.width/this.parameters.box.height,r=this.parameters.box.width+e[0],s=this.parameters.box.height-e[1],o=r/s;return o<i?(n[1]=r/i-this.parameters.box.height,t&&(n[1]=-n[1])):o>i&&(n[0]=this.parameters.box.width-s*i,t&&(n[0]=-n[0])),n},SVG.extend(SVG.Element,{resize:function(t){return(this.remember("_resizeHandler")||new e(this)).init(t||{}),this}}),SVG.Element.prototype.resize.defaults={snapToAngle:.1,snapToGrid:1,constraint:{},saveAspectRatio:!1}}).call(this)}(),void 0===window.Apex&&(window.Apex={});var ze=function(){function e(t){a(this,e),this.ctx=t,this.w=t.w}return c(e,[{key:"initModules",value:function(){this.ctx.publicMethods=["updateOptions","updateSeries","appendData","appendSeries","toggleSeries","showSeries","hideSeries","setLocale","resetSeries","zoomX","toggleDataPointSelection","dataURI","exportToCSV","addXaxisAnnotation","addYaxisAnnotation","addPointAnnotation","clearAnnotations","removeAnnotation","paper","destroy"],this.ctx.eventList=["click","mousedown","mousemove","mouseleave","touchstart","touchmove","touchleave","mouseup","touchend"],this.ctx.animations=new w(this.ctx),this.ctx.axes=new ie(this.ctx),this.ctx.core=new je(this.ctx.el,this.ctx),this.ctx.config=new W({}),this.ctx.data=new Y(this.ctx),this.ctx.grid=new Q(this.ctx),this.ctx.graphics=new S(this.ctx),this.ctx.coreUtils=new _(this.ctx),this.ctx.crosshairs=new re(this.ctx),this.ctx.events=new te(this.ctx),this.ctx.exports=new $(this.ctx),this.ctx.localization=new ne(this.ctx),this.ctx.options=new O,this.ctx.responsive=new se(this.ctx),this.ctx.series=new F(this.ctx),this.ctx.theme=new oe(this.ctx),this.ctx.formatters=new G(this.ctx),this.ctx.titleSubtitle=new ae(this.ctx),this.ctx.legend=new pe(this.ctx),this.ctx.toolbar=new ge(this.ctx),this.ctx.dimensions=new de(this.ctx),this.ctx.updateHelpers=new Ve(this.ctx),this.ctx.zoomPanSelection=new me(this.ctx),this.ctx.w.globals.tooltip=new Se(this.ctx)}}]),e}(),Be=function(){function e(t){a(this,e),this.ctx=t,this.w=t.w}return c(e,[{key:"clear",value:function(e){var t=e.isUpdating;this.ctx.zoomPanSelection&&this.ctx.zoomPanSelection.destroy(),this.ctx.toolbar&&this.ctx.toolbar.destroy(),this.ctx.animations=null,this.ctx.axes=null,this.ctx.annotations=null,this.ctx.core=null,this.ctx.data=null,this.ctx.grid=null,this.ctx.series=null,this.ctx.responsive=null,this.ctx.theme=null,this.ctx.formatters=null,this.ctx.titleSubtitle=null,this.ctx.legend=null,this.ctx.dimensions=null,this.ctx.options=null,this.ctx.crosshairs=null,this.ctx.zoomPanSelection=null,this.ctx.updateHelpers=null,this.ctx.toolbar=null,this.ctx.localization=null,this.ctx.w.globals.tooltip=null,this.clearDomElements({isUpdating:t})}},{key:"killSVG",value:function(e){e.each((function(e,t){this.removeClass("*"),this.off(),this.stop()}),!0),e.ungroup(),e.clear()}},{key:"clearDomElements",value:function(e){var t=this,n=e.isUpdating,i=this.w.globals.dom.Paper.node;i.parentNode&&i.parentNode.parentNode&&!n&&(i.parentNode.parentNode.style.minHeight="unset");var r=this.w.globals.dom.baseEl;r&&this.ctx.eventList.forEach((function(e){r.removeEventListener(e,t.ctx.events.documentEvent)}));var s=this.w.globals.dom;if(null!==this.ctx.el)for(;this.ctx.el.firstChild;)this.ctx.el.removeChild(this.ctx.el.firstChild);this.killSVG(s.Paper),s.Paper.remove(),s.elWrap=null,s.elGraphical=null,s.elAnnotations=null,s.elLegendWrap=null,s.baseEl=null,s.elGridRect=null,s.elGridRectMask=null,s.elGridRectMarkerMask=null,s.elForecastMask=null,s.elNonForecastMask=null,s.elDefs=null}}]),e}(),He=new WeakMap,We=function(){function e(t,n){a(this,e),this.opts=n,this.ctx=this,this.w=new U(n).init(),this.el=t,this.w.globals.cuid=x.randomId(),this.w.globals.chartID=this.w.config.chart.id?x.escapeString(this.w.config.chart.id):this.w.globals.cuid,new ze(this).initModules(),this.create=x.bind(this.create,this),this.windowResizeHandler=this._windowResizeHandler.bind(this),this.parentResizeHandler=this._parentResizeCallback.bind(this)}return c(e,[{key:"render",value:function(){var e=this;return new Promise((function(t,n){if(null!==e.el){void 0===Apex._chartInstances&&(Apex._chartInstances=[]),e.w.config.chart.id&&Apex._chartInstances.push({id:e.w.globals.chartID,group:e.w.config.chart.group,chart:e}),e.setLocale(e.w.config.chart.defaultLocale);var i=e.w.config.chart.events.beforeMount;if("function"==typeof i&&i(e,e.w),e.events.fireEvent("beforeMount",[e,e.w]),window.addEventListener("resize",e.windowResizeHandler),function(e,t){var n=!1;if(e.nodeType!==Node.DOCUMENT_FRAGMENT_NODE){var i=e.getBoundingClientRect();"none"!==e.style.display&&0!==i.width||(n=!0)}var r=new ResizeObserver((function(i){n&&t.call(e,i),n=!0}));e.nodeType===Node.DOCUMENT_FRAGMENT_NODE?Array.from(e.children).forEach((function(e){return r.observe(e)})):r.observe(e),He.set(t,r)}(e.el.parentNode,e.parentResizeHandler),!e.css){var r=e.el.getRootNode&&e.el.getRootNode(),s=x.is("ShadowRoot",r),o=e.el.ownerDocument,a=o.getElementById("apexcharts-css");!s&&a||(e.css=document.createElement("style"),e.css.id="apexcharts-css",e.css.textContent='.apexcharts-canvas {\n  position: relative;\n  user-select: none;\n  /* cannot give overflow: hidden as it will crop tooltips which overflow outside chart area */\n}\n\n\n/* scrollbar is not visible by default for legend, hence forcing the visibility */\n.apexcharts-canvas ::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 6px;\n}\n\n.apexcharts-canvas ::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: rgba(0, 0, 0, .5);\n  box-shadow: 0 0 1px rgba(255, 255, 255, .5);\n  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5);\n}\n\n\n.apexcharts-inner {\n  position: relative;\n}\n\n.apexcharts-text tspan {\n  font-family: inherit;\n}\n\n.legend-mouseover-inactive {\n  transition: 0.15s ease all;\n  opacity: 0.20;\n}\n\n.apexcharts-series-collapsed {\n  opacity: 0;\n}\n\n.apexcharts-tooltip {\n  border-radius: 5px;\n  box-shadow: 2px 2px 6px -4px #999;\n  cursor: default;\n  font-size: 14px;\n  left: 62px;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 20px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  white-space: nowrap;\n  z-index: 12;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-tooltip.apexcharts-active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-tooltip.apexcharts-theme-light {\n  border: 1px solid #e3e3e3;\n  background: rgba(255, 255, 255, 0.96);\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark {\n  color: #fff;\n  background: rgba(30, 30, 30, 0.8);\n}\n\n.apexcharts-tooltip * {\n  font-family: inherit;\n}\n\n\n.apexcharts-tooltip-title {\n  padding: 6px;\n  font-size: 15px;\n  margin-bottom: 4px;\n}\n\n.apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title {\n  background: #ECEFF1;\n  border-bottom: 1px solid #ddd;\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-title {\n  background: rgba(0, 0, 0, 0.7);\n  border-bottom: 1px solid #333;\n}\n\n.apexcharts-tooltip-text-y-value,\n.apexcharts-tooltip-text-goals-value,\n.apexcharts-tooltip-text-z-value {\n  display: inline-block;\n  font-weight: 600;\n  margin-left: 5px;\n}\n\n.apexcharts-tooltip-title:empty,\n.apexcharts-tooltip-text-y-label:empty,\n.apexcharts-tooltip-text-y-value:empty,\n.apexcharts-tooltip-text-goals-label:empty,\n.apexcharts-tooltip-text-goals-value:empty,\n.apexcharts-tooltip-text-z-value:empty {\n  display: none;\n}\n\n.apexcharts-tooltip-text-y-value,\n.apexcharts-tooltip-text-goals-value,\n.apexcharts-tooltip-text-z-value {\n  font-weight: 600;\n}\n\n.apexcharts-tooltip-text-goals-label, \n.apexcharts-tooltip-text-goals-value {\n  padding: 6px 0 5px;\n}\n\n.apexcharts-tooltip-goals-group, \n.apexcharts-tooltip-text-goals-label, \n.apexcharts-tooltip-text-goals-value {\n  display: flex;\n}\n.apexcharts-tooltip-text-goals-label:not(:empty),\n.apexcharts-tooltip-text-goals-value:not(:empty) {\n  margin-top: -6px;\n}\n\n.apexcharts-tooltip-marker {\n  width: 12px;\n  height: 12px;\n  position: relative;\n  top: 0px;\n  margin-right: 10px;\n  border-radius: 50%;\n}\n\n.apexcharts-tooltip-series-group {\n  padding: 0 10px;\n  display: none;\n  text-align: left;\n  justify-content: left;\n  align-items: center;\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active .apexcharts-tooltip-marker {\n  opacity: 1;\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active,\n.apexcharts-tooltip-series-group:last-child {\n  padding-bottom: 4px;\n}\n\n.apexcharts-tooltip-series-group-hidden {\n  opacity: 0;\n  height: 0;\n  line-height: 0;\n  padding: 0 !important;\n}\n\n.apexcharts-tooltip-y-group {\n  padding: 6px 0 5px;\n}\n\n.apexcharts-tooltip-box, .apexcharts-custom-tooltip {\n  padding: 4px 8px;\n}\n\n.apexcharts-tooltip-boxPlot {\n  display: flex;\n  flex-direction: column-reverse;\n}\n\n.apexcharts-tooltip-box>div {\n  margin: 4px 0;\n}\n\n.apexcharts-tooltip-box span.value {\n  font-weight: bold;\n}\n\n.apexcharts-tooltip-rangebar {\n  padding: 5px 8px;\n}\n\n.apexcharts-tooltip-rangebar .category {\n  font-weight: 600;\n  color: #777;\n}\n\n.apexcharts-tooltip-rangebar .series-name {\n  font-weight: bold;\n  display: block;\n  margin-bottom: 5px;\n}\n\n.apexcharts-xaxistooltip {\n  opacity: 0;\n  padding: 9px 10px;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n  background: #ECEFF1;\n  border: 1px solid #90A4AE;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-xaxistooltip.apexcharts-theme-dark {\n  background: rgba(0, 0, 0, 0.7);\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  color: #fff;\n}\n\n.apexcharts-xaxistooltip:after,\n.apexcharts-xaxistooltip:before {\n  left: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n}\n\n.apexcharts-xaxistooltip:after {\n  border-color: rgba(236, 239, 241, 0);\n  border-width: 6px;\n  margin-left: -6px;\n}\n\n.apexcharts-xaxistooltip:before {\n  border-color: rgba(144, 164, 174, 0);\n  border-width: 7px;\n  margin-left: -7px;\n}\n\n.apexcharts-xaxistooltip-bottom:after,\n.apexcharts-xaxistooltip-bottom:before {\n  bottom: 100%;\n}\n\n.apexcharts-xaxistooltip-top:after,\n.apexcharts-xaxistooltip-top:before {\n  top: 100%;\n}\n\n.apexcharts-xaxistooltip-bottom:after {\n  border-bottom-color: #ECEFF1;\n}\n\n.apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #90A4AE;\n}\n\n.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:after {\n  border-bottom-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:before {\n  border-bottom-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-xaxistooltip-top:after {\n  border-top-color: #ECEFF1\n}\n\n.apexcharts-xaxistooltip-top:before {\n  border-top-color: #90A4AE;\n}\n\n.apexcharts-xaxistooltip-top.apexcharts-theme-dark:after {\n  border-top-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-xaxistooltip-top.apexcharts-theme-dark:before {\n  border-top-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-xaxistooltip.apexcharts-active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-yaxistooltip {\n  opacity: 0;\n  padding: 4px 10px;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n  background: #ECEFF1;\n  border: 1px solid #90A4AE;\n}\n\n.apexcharts-yaxistooltip.apexcharts-theme-dark {\n  background: rgba(0, 0, 0, 0.7);\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  color: #fff;\n}\n\n.apexcharts-yaxistooltip:after,\n.apexcharts-yaxistooltip:before {\n  top: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n}\n\n.apexcharts-yaxistooltip:after {\n  border-color: rgba(236, 239, 241, 0);\n  border-width: 6px;\n  margin-top: -6px;\n}\n\n.apexcharts-yaxistooltip:before {\n  border-color: rgba(144, 164, 174, 0);\n  border-width: 7px;\n  margin-top: -7px;\n}\n\n.apexcharts-yaxistooltip-left:after,\n.apexcharts-yaxistooltip-left:before {\n  left: 100%;\n}\n\n.apexcharts-yaxistooltip-right:after,\n.apexcharts-yaxistooltip-right:before {\n  right: 100%;\n}\n\n.apexcharts-yaxistooltip-left:after {\n  border-left-color: #ECEFF1;\n}\n\n.apexcharts-yaxistooltip-left:before {\n  border-left-color: #90A4AE;\n}\n\n.apexcharts-yaxistooltip-left.apexcharts-theme-dark:after {\n  border-left-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-yaxistooltip-left.apexcharts-theme-dark:before {\n  border-left-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-yaxistooltip-right:after {\n  border-right-color: #ECEFF1;\n}\n\n.apexcharts-yaxistooltip-right:before {\n  border-right-color: #90A4AE;\n}\n\n.apexcharts-yaxistooltip-right.apexcharts-theme-dark:after {\n  border-right-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-yaxistooltip-right.apexcharts-theme-dark:before {\n  border-right-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-yaxistooltip.apexcharts-active {\n  opacity: 1;\n}\n\n.apexcharts-yaxistooltip-hidden {\n  display: none;\n}\n\n.apexcharts-xcrosshairs,\n.apexcharts-ycrosshairs {\n  pointer-events: none;\n  opacity: 0;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-xcrosshairs.apexcharts-active,\n.apexcharts-ycrosshairs.apexcharts-active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-ycrosshairs-hidden {\n  opacity: 0;\n}\n\n.apexcharts-selection-rect {\n  cursor: move;\n}\n\n.svg_select_boundingRect, .svg_select_points_rot {\n  pointer-events: none;\n  opacity: 0;\n  visibility: hidden;\n}\n.apexcharts-selection-rect + g .svg_select_boundingRect,\n.apexcharts-selection-rect + g .svg_select_points_rot {\n  opacity: 0;\n  visibility: hidden;\n}\n\n.apexcharts-selection-rect + g .svg_select_points_l,\n.apexcharts-selection-rect + g .svg_select_points_r {\n  cursor: ew-resize;\n  opacity: 1;\n  visibility: visible;\n}\n\n.svg_select_points {\n  fill: #efefef;\n  stroke: #333;\n  rx: 2;\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-zoom {\n  cursor: crosshair\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-pan {\n  cursor: move\n}\n\n.apexcharts-zoom-icon,\n.apexcharts-zoomin-icon,\n.apexcharts-zoomout-icon,\n.apexcharts-reset-icon,\n.apexcharts-pan-icon,\n.apexcharts-selection-icon,\n.apexcharts-menu-icon,\n.apexcharts-toolbar-custom-icon {\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  line-height: 24px;\n  color: #6E8192;\n  text-align: center;\n}\n\n.apexcharts-zoom-icon svg,\n.apexcharts-zoomin-icon svg,\n.apexcharts-zoomout-icon svg,\n.apexcharts-reset-icon svg,\n.apexcharts-menu-icon svg {\n  fill: #6E8192;\n}\n\n.apexcharts-selection-icon svg {\n  fill: #444;\n  transform: scale(0.76)\n}\n\n.apexcharts-theme-dark .apexcharts-zoom-icon svg,\n.apexcharts-theme-dark .apexcharts-zoomin-icon svg,\n.apexcharts-theme-dark .apexcharts-zoomout-icon svg,\n.apexcharts-theme-dark .apexcharts-reset-icon svg,\n.apexcharts-theme-dark .apexcharts-pan-icon svg,\n.apexcharts-theme-dark .apexcharts-selection-icon svg,\n.apexcharts-theme-dark .apexcharts-menu-icon svg,\n.apexcharts-theme-dark .apexcharts-toolbar-custom-icon svg {\n  fill: #f3f4f5;\n}\n\n.apexcharts-canvas .apexcharts-zoom-icon.apexcharts-selected svg,\n.apexcharts-canvas .apexcharts-selection-icon.apexcharts-selected svg,\n.apexcharts-canvas .apexcharts-reset-zoom-icon.apexcharts-selected svg {\n  fill: #008FFB;\n}\n\n.apexcharts-theme-light .apexcharts-selection-icon:not(.apexcharts-selected):hover svg,\n.apexcharts-theme-light .apexcharts-zoom-icon:not(.apexcharts-selected):hover svg,\n.apexcharts-theme-light .apexcharts-zoomin-icon:hover svg,\n.apexcharts-theme-light .apexcharts-zoomout-icon:hover svg,\n.apexcharts-theme-light .apexcharts-reset-icon:hover svg,\n.apexcharts-theme-light .apexcharts-menu-icon:hover svg {\n  fill: #333;\n}\n\n.apexcharts-selection-icon,\n.apexcharts-menu-icon {\n  position: relative;\n}\n\n.apexcharts-reset-icon {\n  margin-left: 5px;\n}\n\n.apexcharts-zoom-icon,\n.apexcharts-reset-icon,\n.apexcharts-menu-icon {\n  transform: scale(0.85);\n}\n\n.apexcharts-zoomin-icon,\n.apexcharts-zoomout-icon {\n  transform: scale(0.7)\n}\n\n.apexcharts-zoomout-icon {\n  margin-right: 3px;\n}\n\n.apexcharts-pan-icon {\n  transform: scale(0.62);\n  position: relative;\n  left: 1px;\n  top: 0px;\n}\n\n.apexcharts-pan-icon svg {\n  fill: #fff;\n  stroke: #6E8192;\n  stroke-width: 2;\n}\n\n.apexcharts-pan-icon.apexcharts-selected svg {\n  stroke: #008FFB;\n}\n\n.apexcharts-pan-icon:not(.apexcharts-selected):hover svg {\n  stroke: #333;\n}\n\n.apexcharts-toolbar {\n  position: absolute;\n  z-index: 11;\n  max-width: 176px;\n  text-align: right;\n  border-radius: 3px;\n  padding: 0px 6px 2px 6px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.apexcharts-menu {\n  background: #fff;\n  position: absolute;\n  top: 100%;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  padding: 3px;\n  right: 10px;\n  opacity: 0;\n  min-width: 110px;\n  transition: 0.15s ease all;\n  pointer-events: none;\n}\n\n.apexcharts-menu.apexcharts-menu-open {\n  opacity: 1;\n  pointer-events: all;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-menu-item {\n  padding: 6px 7px;\n  font-size: 12px;\n  cursor: pointer;\n}\n\n.apexcharts-theme-light .apexcharts-menu-item:hover {\n  background: #eee;\n}\n\n.apexcharts-theme-dark .apexcharts-menu {\n  background: rgba(0, 0, 0, 0.7);\n  color: #fff;\n}\n\n@media screen and (min-width: 768px) {\n  .apexcharts-canvas:hover .apexcharts-toolbar {\n    opacity: 1;\n  }\n}\n\n.apexcharts-datalabel.apexcharts-element-hidden {\n  opacity: 0;\n}\n\n.apexcharts-pie-label,\n.apexcharts-datalabels,\n.apexcharts-datalabel,\n.apexcharts-datalabel-label,\n.apexcharts-datalabel-value {\n  cursor: default;\n  pointer-events: none;\n}\n\n.apexcharts-pie-label-delay {\n  opacity: 0;\n  animation-name: opaque;\n  animation-duration: 0.3s;\n  animation-fill-mode: forwards;\n  animation-timing-function: ease;\n}\n\n.apexcharts-canvas .apexcharts-element-hidden {\n  opacity: 0;\n}\n\n.apexcharts-hide .apexcharts-series-points {\n  opacity: 0;\n}\n\n.apexcharts-gridline,\n.apexcharts-annotation-rect,\n.apexcharts-xaxis-annotation-label,\n.apexcharts-yaxis-annotation-label,\n.apexcharts-point-annotation-label,\n.apexcharts-tooltip .apexcharts-marker,\n.apexcharts-area-series .apexcharts-area,\n.apexcharts-line,\n.apexcharts-zoom-rect,\n.apexcharts-toolbar svg,\n.apexcharts-area-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,\n.apexcharts-line-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,\n.apexcharts-radar-series path,\n.apexcharts-radar-series polygon {\n  pointer-events: none;\n}\n\n\n/* markers */\n\n.apexcharts-marker {\n  transition: 0.15s ease all;\n}\n\n@keyframes opaque {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n\n/* Resize generated styles */\n\n@keyframes resizeanim {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.resize-triggers {\n  animation: 1ms resizeanim;\n  visibility: hidden;\n  opacity: 0;\n}\n\n.resize-triggers,\n.resize-triggers>div,\n.contract-trigger:before {\n  content: " ";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n}\n\n.resize-triggers>div {\n  background: #eee;\n  overflow: auto;\n}\n\n.contract-trigger:before {\n  width: 200%;\n  height: 200%;\n}',s?r.prepend(e.css):o.head.appendChild(e.css))}var l=e.create(e.w.config.series,{});if(!l)return t(e);e.mount(l).then((function(){"function"==typeof e.w.config.chart.events.mounted&&e.w.config.chart.events.mounted(e,e.w),e.events.fireEvent("mounted",[e,e.w]),t(l)})).catch((function(e){n(e)}))}else n(new Error("Element not found"))}))}},{key:"create",value:function(e,t){var n=this.w;new ze(this).initModules();var i=this.w.globals;if(i.noData=!1,i.animationEnded=!1,this.responsive.checkResponsiveConfig(t),n.config.xaxis.convertedCatToNumeric&&new H(n.config).convertCatToNumericXaxis(n.config,this.ctx),null===this.el)return i.animationEnded=!0,null;if(this.core.setupElements(),"treemap"===n.config.chart.type&&(n.config.grid.show=!1,n.config.yaxis[0].show=!1),0===i.svgWidth)return i.animationEnded=!0,null;var r=_.checkComboSeries(e);i.comboCharts=r.comboCharts,i.comboBarCount=r.comboBarCount;var s=e.every((function(e){return e.data&&0===e.data.length}));(0===e.length||s)&&this.series.handleNoData(),this.events.setupEventHandlers(),this.data.parseData(e),this.theme.init(),new D(this).setGlobalMarkerSize(),this.formatters.setLabelFormatters(),this.titleSubtitle.draw(),i.noData&&i.collapsedSeries.length!==i.series.length&&!n.config.legend.showForSingleSeries||this.legend.init(),this.series.hasAllSeriesEqualX(),i.axisCharts&&(this.core.coreCalculations(),"category"!==n.config.xaxis.type&&this.formatters.setLabelFormatters(),this.ctx.toolbar.minX=n.globals.minX,this.ctx.toolbar.maxX=n.globals.maxX),this.formatters.heatmapLabelFormatters(),new _(this).getLargestMarkerSize(),this.dimensions.plotCoords();var o=this.core.xySettings();this.grid.createGridMask();var a=this.core.plotChartType(e,o),l=new R(this);l.bringForward(),n.config.dataLabels.background.enabled&&l.dataLabelsBackground(),this.core.shiftGraphPosition();var c={plot:{left:n.globals.translateX,top:n.globals.translateY,width:n.globals.gridWidth,height:n.globals.gridHeight}};return{elGraph:a,xyRatios:o,elInner:n.globals.dom.elGraphical,dimensions:c}}},{key:"mount",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=this,i=n.w;return new Promise((function(r,s){if(null===n.el)return s(new Error("Not enough data to display or target element not found"));(null===t||i.globals.allSeriesCollapsed)&&n.series.handleNoData(),"treemap"!==i.config.chart.type&&n.axes.drawAxis(i.config.chart.type,t.xyRatios),n.grid=new Q(n);var o=n.grid.drawGrid();n.annotations=new P(n),n.annotations.drawImageAnnos(),n.annotations.drawTextAnnos(),"back"===i.config.grid.position&&o&&i.globals.dom.elGraphical.add(o.el);var a=new K(e.ctx),l=new ee(e.ctx);if(null!==o&&(a.xAxisLabelCorrections(o.xAxisTickWidth),l.setYAxisTextAlignments(),i.config.yaxis.map((function(e,t){-1===i.globals.ignoreYAxisIndexes.indexOf(t)&&l.yAxisTitleRotate(t,e.opposite)}))),"back"===i.config.annotations.position&&(i.globals.dom.Paper.add(i.globals.dom.elAnnotations),n.annotations.drawAxesAnnotations()),Array.isArray(t.elGraph))for(var c=0;c<t.elGraph.length;c++)i.globals.dom.elGraphical.add(t.elGraph[c]);else i.globals.dom.elGraphical.add(t.elGraph);if("front"===i.config.grid.position&&o&&i.globals.dom.elGraphical.add(o.el),"front"===i.config.xaxis.crosshairs.position&&n.crosshairs.drawXCrosshairs(),"front"===i.config.yaxis[0].crosshairs.position&&n.crosshairs.drawYCrosshairs(),"front"===i.config.annotations.position&&(i.globals.dom.Paper.add(i.globals.dom.elAnnotations),n.annotations.drawAxesAnnotations()),!i.globals.noData){if(i.config.tooltip.enabled&&!i.globals.noData&&n.w.globals.tooltip.drawTooltip(t.xyRatios),i.globals.axisCharts&&(i.globals.isXNumeric||i.config.xaxis.convertedCatToNumeric||i.globals.isRangeBar))(i.config.chart.zoom.enabled||i.config.chart.selection&&i.config.chart.selection.enabled||i.config.chart.pan&&i.config.chart.pan.enabled)&&n.zoomPanSelection.init({xyRatios:t.xyRatios});else{var h=i.config.chart.toolbar.tools;["zoom","zoomin","zoomout","selection","pan","reset"].forEach((function(e){h[e]=!1}))}i.config.chart.toolbar.show&&!i.globals.allSeriesCollapsed&&n.toolbar.createToolbar()}i.globals.memory.methodsToExec.length>0&&i.globals.memory.methodsToExec.forEach((function(e){e.method(e.params,!1,e.context)})),i.globals.axisCharts||i.globals.noData||n.core.resizeNonAxisCharts(),r(n)}))}},{key:"destroy",value:function(){var e,t;window.removeEventListener("resize",this.windowResizeHandler),this.el.parentNode,e=this.parentResizeHandler,(t=He.get(e))&&(t.disconnect(),He.delete(e));var n=this.w.config.chart.id;n&&Apex._chartInstances.forEach((function(e,t){e.id===x.escapeString(n)&&Apex._chartInstances.splice(t,1)})),new Be(this.ctx).clear({isUpdating:!1})}},{key:"updateOptions",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],s=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],o=this.w;return o.globals.selection=void 0,e.series&&(this.series.resetSeries(!1,!0,!1),e.series.length&&e.series[0].data&&(e.series=e.series.map((function(e,n){return t.updateHelpers._extendSeries(e,n)}))),this.updateHelpers.revertDefaultAxisMinMax()),e.xaxis&&(e=this.updateHelpers.forceXAxisUpdate(e)),e.yaxis&&(e=this.updateHelpers.forceYAxisUpdate(e)),o.globals.collapsedSeriesIndices.length>0&&this.series.clearPreviousPaths(),e.theme&&(e=this.theme.updateThemeOptions(e)),this.updateHelpers._updateOptions(e,n,i,r,s)}},{key:"updateSeries",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return this.series.resetSeries(!1),this.updateHelpers.revertDefaultAxisMinMax(),this.updateHelpers._updateSeries(e,t,n)}},{key:"appendSeries",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=this.w.config.series.slice();return i.push(e),this.series.resetSeries(!1),this.updateHelpers.revertDefaultAxisMinMax(),this.updateHelpers._updateSeries(i,t,n)}},{key:"appendData",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this;n.w.globals.dataChanged=!0,n.series.getPreviousPaths();for(var i=n.w.config.series.slice(),r=0;r<i.length;r++)if(null!==e[r]&&void 0!==e[r])for(var s=0;s<e[r].data.length;s++)i[r].data.push(e[r].data[s]);return n.w.config.series=i,t&&(n.w.globals.initialSeries=x.clone(n.w.config.series)),this.update()}},{key:"update",value:function(e){var t=this;return new Promise((function(n,i){new Be(t.ctx).clear({isUpdating:!0});var r=t.create(t.w.config.series,e);if(!r)return n(t);t.mount(r).then((function(){"function"==typeof t.w.config.chart.events.updated&&t.w.config.chart.events.updated(t,t.w),t.events.fireEvent("updated",[t,t.w]),t.w.globals.isDirty=!0,n(t)})).catch((function(e){i(e)}))}))}},{key:"getSyncedCharts",value:function(){var e=this.getGroupedCharts(),t=[this];return e.length&&(t=[],e.forEach((function(e){t.push(e)}))),t}},{key:"getGroupedCharts",value:function(){var e=this;return Apex._chartInstances.filter((function(e){if(e.group)return!0})).map((function(t){return e.w.config.chart.group===t.group?t.chart:e}))}},{key:"toggleSeries",value:function(e){return this.series.toggleSeries(e)}},{key:"highlightSeriesOnLegendHover",value:function(e,t){return this.series.toggleSeriesOnHover(e,t)}},{key:"showSeries",value:function(e){this.series.showSeries(e)}},{key:"hideSeries",value:function(e){this.series.hideSeries(e)}},{key:"resetSeries",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.series.resetSeries(e,t)}},{key:"addEventListener",value:function(e,t){this.events.addEventListener(e,t)}},{key:"removeEventListener",value:function(e,t){this.events.removeEventListener(e,t)}},{key:"addXaxisAnnotation",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,i=this;n&&(i=n),i.annotations.addXaxisAnnotationExternal(e,t,i)}},{key:"addYaxisAnnotation",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,i=this;n&&(i=n),i.annotations.addYaxisAnnotationExternal(e,t,i)}},{key:"addPointAnnotation",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,i=this;n&&(i=n),i.annotations.addPointAnnotationExternal(e,t,i)}},{key:"clearAnnotations",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,t=this;e&&(t=e),t.annotations.clearAnnotations(t)}},{key:"removeAnnotation",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=this;t&&(n=t),n.annotations.removeAnnotation(n,e)}},{key:"getChartArea",value:function(){return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner")}},{key:"getSeriesTotalXRange",value:function(e,t){return this.coreUtils.getSeriesTotalsXRange(e,t)}},{key:"getHighestValueInSeries",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=new J(this.ctx);return t.getMinYMaxY(e).highestY}},{key:"getLowestValueInSeries",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=new J(this.ctx);return t.getMinYMaxY(e).lowestY}},{key:"getSeriesTotal",value:function(){return this.w.globals.seriesTotals}},{key:"toggleDataPointSelection",value:function(e,t){return this.updateHelpers.toggleDataPointSelection(e,t)}},{key:"zoomX",value:function(e,t){this.ctx.toolbar.zoomUpdateOptions(e,t)}},{key:"setLocale",value:function(e){this.localization.setCurrentLocaleValues(e)}},{key:"dataURI",value:function(e){return new $(this.ctx).dataURI(e)}},{key:"exportToCSV",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=new $(this.ctx);return t.exportToCSV(e)}},{key:"paper",value:function(){return this.w.globals.dom.Paper}},{key:"_parentResizeCallback",value:function(){this.w.globals.animationEnded&&this.w.config.chart.redrawOnParentResize&&this._windowResize()}},{key:"_windowResize",value:function(){var e=this;clearTimeout(this.w.globals.resizeTimer),this.w.globals.resizeTimer=window.setTimeout((function(){e.w.globals.resized=!0,e.w.globals.dataChanged=!1,e.ctx.update()}),150)}},{key:"_windowResizeHandler",value:function(){var e=this.w.config.chart.redrawOnWindowResize;"function"==typeof e&&(e=e()),e&&this._windowResize()}}],[{key:"getChartByID",value:function(e){var t=x.escapeString(e),n=Apex._chartInstances.filter((function(e){return e.id===t}))[0];return n&&n.chart}},{key:"initOnLoad",value:function(){for(var t=document.querySelectorAll("[data-apexcharts]"),n=0;n<t.length;n++)new e(t[n],JSON.parse(t[n].getAttribute("data-options"))).render()}},{key:"exec",value:function(e,t){var n=this.getChartByID(e);if(n){n.w.globals.isExecCalled=!0;var i=null;if(-1!==n.publicMethods.indexOf(t)){for(var r=arguments.length,s=new Array(r>2?r-2:0),o=2;o<r;o++)s[o-2]=arguments[o];i=n[t].apply(n,s)}return i}}},{key:"merge",value:function(e,t){return x.extend(e,t)}}]),e}();e.exports=We},c04e:function(e,t,n){var i=n("c65b"),r=n("861d"),s=n("d9b5"),o=n("dc4a"),a=n("485a"),l=n("b622"),c=TypeError,h=l("toPrimitive");e.exports=function(e,t){if(!r(e)||s(e))return e;var n,l=o(e,h);if(l){if(void 0===t&&(t="default"),n=i(l,e,t),!r(n)||s(n))return n;throw c("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},c430:function(e,t){e.exports=!1},c65b:function(e,t,n){var i=n("40d5"),r=Function.prototype.call;e.exports=i?r.bind(r):function(){return r.apply(r,arguments)}},c6b6:function(e,t,n){var i=n("e330"),r=i({}.toString),s=i("".slice);e.exports=function(e){return s(r(e),8,-1)}},c6cd:function(e,t,n){var i=n("da84"),r=n("6374"),s="__core-js_shared__",o=i[s]||r(s,{});e.exports=o},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(i){"object"===typeof window&&(n=window)}e.exports=n},ca84:function(e,t,n){var i=n("e330"),r=n("1a2d"),s=n("fc6a"),o=n("4d64").indexOf,a=n("d012"),l=i([].push);e.exports=function(e,t){var n,i=s(e),c=0,h=[];for(n in i)!r(a,n)&&r(i,n)&&l(h,n);while(t.length>c)r(i,n=t[c++])&&(~o(h,n)||l(h,n));return h}},cb2d:function(e,t,n){var i=n("1626"),r=n("9bf2"),s=n("13d2"),o=n("6374");e.exports=function(e,t,n,a){a||(a={});var l=a.enumerable,c=void 0!==a.name?a.name:t;if(i(n)&&s(n,c,a),a.global)l?e[t]=n:o(t,n);else{try{a.unsafe?e[t]&&(l=!0):delete e[t]}catch(h){}l?e[t]=n:r.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},cc12:function(e,t,n){var i=n("da84"),r=n("861d"),s=i.document,o=r(s)&&r(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},cd74:function(e,t,n){},cdce:function(e,t,n){var i=n("da84"),r=n("1626"),s=i.WeakMap;e.exports=r(s)&&/native code/.test(String(s))},d012:function(e,t){e.exports={}},d039:function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},d066:function(e,t,n){var i=n("da84"),r=n("1626"),s=function(e){return r(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(i[e]):i[e]&&i[e][t]}},d1e7:function(e,t,n){"use strict";var i={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,s=r&&!i.call({1:2},1);t.f=s?function(e){var t=r(this,e);return!!t&&t.enumerable}:i},d9b5:function(e,t,n){var i=n("d066"),r=n("1626"),s=n("3a9b"),o=n("fdbf"),a=Object;e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=i("Symbol");return r(t)&&s(t.prototype,a(e))}},da84:function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dc4a:function(e,t,n){var i=n("59ed"),r=n("7234");e.exports=function(e,t){var n=e[t];return r(n)?void 0:i(n)}},df7c:function(e,t,n){(function(e){function n(e,t){for(var n=0,i=e.length-1;i>=0;i--){var r=e[i];"."===r?e.splice(i,1):".."===r?(e.splice(i,1),n++):n&&(e.splice(i,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function i(e){"string"!==typeof e&&(e+="");var t,n=0,i=-1,r=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!r){n=t+1;break}}else-1===i&&(r=!1,i=t+1);return-1===i?"":e.slice(n,i)}function r(e,t){if(e.filter)return e.filter(t);for(var n=[],i=0;i<e.length;i++)t(e[i],i,e)&&n.push(e[i]);return n}t.resolve=function(){for(var t="",i=!1,s=arguments.length-1;s>=-1&&!i;s--){var o=s>=0?arguments[s]:e.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(t=o+"/"+t,i="/"===o.charAt(0))}return t=n(r(t.split("/"),(function(e){return!!e})),!i).join("/"),(i?"/":"")+t||"."},t.normalize=function(e){var i=t.isAbsolute(e),o="/"===s(e,-1);return e=n(r(e.split("/"),(function(e){return!!e})),!i).join("/"),e||i||(e="."),e&&o&&(e+="/"),(i?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(r(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function i(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var n=e.length-1;n>=0;n--)if(""!==e[n])break;return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var r=i(e.split("/")),s=i(n.split("/")),o=Math.min(r.length,s.length),a=o,l=0;l<o;l++)if(r[l]!==s[l]){a=l;break}var c=[];for(l=a;l<r.length;l++)c.push("..");return c=c.concat(s.slice(a)),c.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,i=-1,r=!0,s=e.length-1;s>=1;--s)if(t=e.charCodeAt(s),47===t){if(!r){i=s;break}}else r=!1;return-1===i?n?"/":".":n&&1===i?"/":e.slice(0,i)},t.basename=function(e,t){var n=i(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,n=0,i=-1,r=!0,s=0,o=e.length-1;o>=0;--o){var a=e.charCodeAt(o);if(47!==a)-1===i&&(r=!1,i=o+1),46===a?-1===t?t=o:1!==s&&(s=1):-1!==t&&(s=-1);else if(!r){n=o+1;break}}return-1===t||-1===i||0===s||1===s&&t===i-1&&t===n+1?"":e.slice(t,i)};var s="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("4362"))},e330:function(e,t,n){var i=n("40d5"),r=Function.prototype,s=r.bind,o=r.call,a=i&&s.bind(o,o);e.exports=i?function(e){return e&&a(e)}:function(e){return e&&function(){return o.apply(e,arguments)}}},e691:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return u}));
/**
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
 */
const i=[];var r;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(r||(r={}));const s={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,a={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},l=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=a[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class c{constructor(e){this.name=e,this._logLevel=o,this._logHandler=l,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}}function h(e){i.forEach(t=>{t.setLogLevel(e)})}function u(e,t){for(const n of i){let i=null;t&&t.level&&(i=s[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map(e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}}).filter(e=>e).join(" ");n>=(null!==i&&void 0!==i?i:t.logLevel)&&e({level:r[n].toLowerCase(),message:o,args:s,type:t.name})}}}},e893:function(e,t,n){var i=n("1a2d"),r=n("56ef"),s=n("06cf"),o=n("9bf2");e.exports=function(e,t,n){for(var a=r(t),l=o.f,c=s.f,h=0;h<a.length;h++){var u=a[h];i(e,u)||n&&i(n,u)||l(e,u,c(t,u))}}},e8b5:function(e,t,n){var i=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==i(e)}},f772:function(e,t,n){var i=n("5692"),r=n("90e3"),s=i("keys");e.exports=function(e){return s[e]||(s[e]=r(e))}},fc6a:function(e,t,n){var i=n("44ad"),r=n("1d80");e.exports=function(e){return i(r(e))}},fdbf:function(e,t,n){var i=n("04f8");e.exports=i&&!Symbol.sham&&"symbol"==typeof Symbol.iterator}}]);
//# sourceMappingURL=chunk-vendors.446ba6e4.js.map