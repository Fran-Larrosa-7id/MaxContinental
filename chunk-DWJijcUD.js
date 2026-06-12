import {x as xt,K as Kr$1,j as jr$1}from'./chunk-D6hnm9_W.js';import {l as le$1,j,B,b as N,q as qt,Q as Qt$1}from'./chunk-zPVHpczD.js';import {Z as Zt,X as Xt,s as st$1,g as gt,c as ct$1,y as yt}from'./chunk-DjPk1b9Q.js';import {aE as IL,E as EL,f as fi$1,$ as $w,a as KE,b as $i,S as Sw,w as wu,L as Lh,V as VI,R as Rh,u as uE,e as wD,J as Jh,H as HI,g as bu,x as xh,h as dE,a7 as Fw,r as C$1,s as ns$1,I as Ir$1,N as Hf,a6 as Eh,y,P as Y$1,v as mu,aF as Fh,a9 as Ah,A as hC,al as lg,ar as bs$1,aG as Im,a8 as Rc,T as bL,an as JI,ao as ew,q as qh,aH as Hh,aI as nw,aJ as rw,aK as Vh,t as qn$1,aL as ee,aM as wL,aN as CL,a0 as ne,Q as Fd,ae as ml$1,a2 as le$2,aO as Nm,ad as ht$1,aP as Rm,aQ as SL,aR as AC,aS as wh,aT as $h,aU as ow,aV as Uh,Z as Zp,aW as Fr$1,d as $I,U as UI,z as zI,aX as Pw,Y as YI,p as pd,aY as iw,j as hd,i as KI,aZ as os$1,ap as mw,a_ as Sd,a$ as Md,aj as We$1,D as pe$1,b0 as Xn,az as z,X as Xe,am as Ss$1,M as Xv,ax as b,aA as A,b1 as yE,a5 as Wo$1,b2 as Oh,b3 as Rr$1,b4 as hj,b5 as xr$1,b6 as Cu,b7 as Tu,b8 as un$1,b9 as Pt$1,W,B as B$1,ba as ln$1,F as Yr$1,bb as Cg,bc as Iy,aB as J,bd as ym,be as bo$1,bf as xm,bg as Cm,bh as x,bi as rg,bj as ng,bk as Or$1,bl as jh,bm as wm,aC as ML,bn as _L,bo as Am,k as eg,bp as sr$1,bq as Tm,o as Wh,br as xw,bs as Vw}from'./main-H4SWSLID.js';var wt=new C$1("MAT_DATE_LOCALE",{providedIn:"root",factory:()=>y(os$1)}),qe="Method not implemented",ie=class{locale;_localeChanges=new ne;localeChanges=this._localeChanges;setTime(a,e,t,n){throw new Error(qe)}getHours(a){throw new Error(qe)}getMinutes(a){throw new Error(qe)}getSeconds(a){throw new Error(qe)}parseTime(a,e){throw new Error(qe)}addSeconds(a,e){throw new Error(qe)}getValidDateOrNull(a){return this.isDateInstance(a)&&this.isValid(a)?a:null}deserialize(a){return a==null||this.isDateInstance(a)&&this.isValid(a)?a:this.invalid()}setLocale(a){this.locale=a,this._localeChanges.next();}compareDate(a,e){return this.getYear(a)-this.getYear(e)||this.getMonth(a)-this.getMonth(e)||this.getDate(a)-this.getDate(e)}compareTime(a,e){return this.getHours(a)-this.getHours(e)||this.getMinutes(a)-this.getMinutes(e)||this.getSeconds(a)-this.getSeconds(e)}sameDate(a,e){if(a&&e){let t=this.isValid(a),n=this.isValid(e);return t&&n?!this.compareDate(a,e):t==n}return a==e}sameTime(a,e){if(a&&e){let t=this.isValid(a),n=this.isValid(e);return t&&n?!this.compareTime(a,e):t==n}return a==e}clampDate(a,e,t){return e&&this.compareDate(a,e)<0?e:t&&this.compareDate(a,t)>0?t:a}},Ve=new C$1("mat-date-formats");var ba=(()=>{class i{isErrorState(e,t){return !!(e&&e.invalid&&(e.touched||t&&t.submitted))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=We$1({token:i,factory:i.\u0275fac})}return i})();var Zn;try{Zn=typeof Intl<"u"&&Intl.v8BreakIterator;}catch{Zn=false;}var C=(()=>{class i{_platformId=y(Rr$1);isBrowser=this._platformId?hj(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Zn)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static \u0275fac=function(t){return new(t||i)};static \u0275prov=We$1({token:i,factory:i.\u0275fac})}return i})();function Ke(i){return Array.isArray(i)?i:[i]}var va=new Set,je,$e=(()=>{class i{_platform=y(C);_nonce=y(Or$1,{optional:true});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):io;}matchMedia(e){return (this._platform.WEBKIT||this._platform.BLINK)&&no(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=We$1({token:i,factory:i.\u0275fac})}return i})();function no(i,a){if(!va.has(i))try{je||(je=document.createElement("style"),a&&je.setAttribute("nonce",a),je.setAttribute("type","text/css"),document.head.appendChild(je)),je.sheet&&(je.sheet.insertRule(`@media ${i} {body{ }}`,0),va.add(i));}catch(e){console.error(e);}}function io(i){return {matches:i==="all"||i==="",media:i,addListener:()=>{},removeListener:()=>{}}}var qn=(()=>{class i{_mediaMatcher=y($e);_zone=y(ee);_queries=new Map;_destroySubject=new ne;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete();}isMatched(e){return ya(Ke(e)).some(n=>this._registerQuery(n).mql.matches)}observe(e){let n=ya(Ke(e)).map(o=>this._registerQuery(o).observable),r=ym(n);return r=bo$1(r.pipe(Ss$1(1)),r.pipe(xm(1),Cm(0))),r.pipe(le$2(o=>{let l={matches:false,breakpoints:{}};return o.forEach(({matches:c,query:p})=>{l.matches=l.matches||c,l.breakpoints[p]=c;}),l}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),r={observable:new x(o=>{let l=c=>this._zone.run(()=>o.next(c));return t.addListener(l),()=>{t.removeListener(l);}}).pipe(ml$1(t),le$2(({matches:o})=>({query:e,matches:o})),Rm(this._destroySubject)),mql:t};return this._queries.set(e,r),r}static \u0275fac=function(t){return new(t||i)};static \u0275prov=We$1({token:i,factory:i.\u0275fac})}return i})();function ya(i){return i.map(a=>a.split(",")).reduce((a,e)=>a.concat(e)).map(a=>a.trim())}var ao=new C$1("MATERIAL_ANIMATIONS"),xa=null;function ro(){return y(ao,{optional:true})?.animationsDisabled||y(Iy,{optional:true})==="NoopAnimations"?"di-disabled":(xa??=y($e).matchMedia("(prefers-reduced-motion)").matches,xa?"reduced-motion":"enabled")}function ve(){return ro()!=="enabled"}function Dt(i){return i.buttons===0||i.detail===0}function Ct(i){let a=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return !!a&&a.identifier===-1&&(a.radiusX==null||a.radiusX===1)&&(a.radiusY==null||a.radiusY===1)}var Kn;function wa(){if(Kn==null){let i=typeof document<"u"?document.head:null;Kn=!!(i&&(i.createShadowRoot||i.attachShadow));}return Kn}function $n(i){if(wa()){let a=i.getRootNode?i.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&a instanceof ShadowRoot)return a}return null}function Qe(){let i=typeof document<"u"&&document?document.activeElement:null;for(;i&&i.shadowRoot;){let a=i.shadowRoot.activeElement;if(a===i)break;i=a;}return i}function le(i){return i.composedPath?i.composedPath()[0]:i.target}var Et;function Da(){if(Et==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Et=!0}));}finally{Et=Et||false;}return Et}function Je(i){return Da()?i:!!i.capture}function et(i,a=0){return Ca(i)?Number(i):arguments.length===2?a:0}function Ca(i){return !isNaN(parseFloat(i))&&!isNaN(Number(i))}function pe(i){return i instanceof qn$1?i.nativeElement:i}var Ea=new C$1("cdk-input-modality-detector-options"),Sa={ignoreKeys:[18,17,224,91,16]},Ma=650,Qn={passive:true,capture:true},ka=(()=>{class i{_platform=y(C);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new sr$1(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=le(e));};_onMousedown=e=>{Date.now()-this._lastTouchMs<Ma||(this._modality.next(Dt(e)?"keyboard":"mouse"),this._mostRecentTarget=le(e));};_onTouchstart=e=>{if(Ct(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=le(e);};constructor(){let e=y(ee),t=y(z),n=y(Ea,{optional:true});if(this._options=B$1(B$1({},Sa),n),this.modalityDetected=this._modality.pipe(xm(1)),this.modalityChanged=this.modalityDetected.pipe(Tm()),this._platform.isBrowser){let r=y(un$1).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[r.listen(t,"keydown",this._onKeydown,Qn),r.listen(t,"mousedown",this._onMousedown,Qn),r.listen(t,"touchstart",this._onTouchstart,Qn)]);}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e());}static \u0275fac=function(t){return new(t||i)};static \u0275prov=We$1({token:i,factory:i.\u0275fac})}return i})(),St=(function(i){return i[i.IMMEDIATE=0]="IMMEDIATE",i[i.EVENTUAL=1]="EVENTUAL",i})(St||{}),Aa=new C$1("cdk-focus-monitor-default-options"),Qt=Je({passive:true,capture:true}),tt=(()=>{class i{_ngZone=y(ee);_platform=y(C);_inputModalityDetector=y(ka);_origin=null;_lastFocusOrigin=null;_windowFocused=false;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=false;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=true,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=false);};_document=y(z);_stopInputModalityDetector=new ne;constructor(){let e=y(Aa,{optional:true});this._detectionMode=e?.detectionMode||St.IMMEDIATE;}_rootNodeFocusAndBlurListener=e=>{let t=le(e);for(let n=t;n;n=n.parentElement)e.type==="focus"?this._onFocus(e,n):this._onBlur(e,n);};monitor(e,t=false){let n=pe(e);if(!this._platform.isBrowser||n.nodeType!==1)return bs$1();let r=$n(n)||this._document,o=this._elementInfo.get(n);if(o)return t&&(o.checkChildren=true),o.subject;let l={checkChildren:t,subject:new ne,rootNode:r};return this._elementInfo.set(n,l),this._registerGlobalListeners(l),l.subject}stopMonitoring(e){let t=pe(e),n=this._elementInfo.get(t);n&&(n.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(n));}focusVia(e,t,n){let r=pe(e),o=this._document.activeElement;r===o?this._getClosestElementsInfo(r).forEach(([l,c])=>this._originChanged(l,t,c)):(this._setOrigin(t),typeof r.focus=="function"&&r.focus(n));}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t));}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===St.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program");}_setOrigin(e,t=false){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===St.IMMEDIATE){clearTimeout(this._originTimeoutId);let n=this._originFromTouchInteraction?Ma:1;this._originTimeoutId=setTimeout(()=>this._origin=null,n);}});}_onFocus(e,t){let n=this._elementInfo.get(t),r=le(e);!n||!n.checkChildren&&t!==r||this._originChanged(t,this._getFocusOrigin(r),n);}_onBlur(e,t){let n=this._elementInfo.get(t);!n||n.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(n,null));}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t));}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,n=this._rootNodeFocusListenerCount.get(t)||0;n||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,Qt),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,Qt);}),this._rootNodeFocusListenerCount.set(t,n+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener);}),this._inputModalityDetector.modalityDetected.pipe(Rm(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,true);}));}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let n=this._rootNodeFocusListenerCount.get(t);n>1?this._rootNodeFocusListenerCount.set(t,n-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Qt),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Qt),this._rootNodeFocusListenerCount.delete(t));}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId));}_originChanged(e,t,n){this._setClasses(e,t),this._emitOrigin(n,t),this._lastFocusOrigin=t;}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((n,r)=>{(r===e||n.checkChildren&&r.contains(e))&&t.push([r,n]);}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:n}=this._inputModalityDetector;if(n!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return  false;let r=e.labels;if(r){for(let o=0;o<r.length;o++)if(r[o].contains(t))return  true}return  false}static \u0275fac=function(t){return new(t||i)};static \u0275prov=We$1({token:i,factory:i.\u0275fac})}return i})(),Jn=(()=>{class i{_elementRef=y(qn$1);_focusMonitor=y(tt);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new Xe;get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(t=>{this._focusOrigin=t,this.cdkFocusChange.emit(t);});}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe();}static \u0275fac=function(t){return new(t||i)};static \u0275dir=mu({type:i,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return i})();var oo=(()=>{class i{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=We$1({token:i,factory:i.\u0275fac})}return i})();var Jt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=ns$1({type:i});static \u0275inj=Ir$1({providers:[oo]})}return i})();var so=(()=>{class i{_platform=y(C);isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return co(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return  false;let t=lo(bo(e));if(t&&(Ra(t)===-1||!this.isVisible(t)))return  false;let n=e.nodeName.toLowerCase(),r=Ra(e);return e.hasAttribute("contenteditable")?r!==-1:n==="iframe"||n==="object"||this._platform.WEBKIT&&this._platform.IOS&&!_o(e)?false:n==="audio"?e.hasAttribute("controls")?r!==-1:false:n==="video"?r===-1?false:r!==null?true:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,t){return go(e)&&!this.isDisabled(e)&&(t?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=We$1({token:i,factory:i.\u0275fac})}return i})();function lo(i){try{return i.frameElement}catch{return null}}function co(i){return !!(i.offsetWidth||i.offsetHeight||typeof i.getClientRects=="function"&&i.getClientRects().length)}function mo(i){let a=i.nodeName.toLowerCase();return a==="input"||a==="select"||a==="button"||a==="textarea"}function uo(i){return po(i)&&i.type=="hidden"}function ho(i){return fo(i)&&i.hasAttribute("href")}function po(i){return i.nodeName.toLowerCase()=="input"}function fo(i){return i.nodeName.toLowerCase()=="a"}function Ia(i){if(!i.hasAttribute("tabindex")||i.tabIndex===void 0)return  false;let a=i.getAttribute("tabindex");return !!(a&&!isNaN(parseInt(a,10)))}function Ra(i){if(!Ia(i))return null;let a=parseInt(i.getAttribute("tabindex")||"",10);return isNaN(a)?-1:a}function _o(i){let a=i.nodeName.toLowerCase(),e=a==="input"&&i.type;return e==="text"||e==="password"||a==="select"||a==="textarea"}function go(i){return uo(i)?false:mo(i)||ho(i)||i.hasAttribute("contenteditable")||Ia(i)}function bo(i){return i.ownerDocument&&i.ownerDocument.defaultView||window}var ti=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=false;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(a){this._enabled=a,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(a,this._startAnchor),this._toggleAnchorTabIndex(a,this._endAnchor));}_enabled=true;constructor(a,e,t,n,r=false,o){this._element=a,this._checker=e,this._ngZone=t,this._document=n,this._injector=o,r||this.attachAnchors();}destroy(){let a=this._startAnchor,e=this._endAnchor;a&&(a.removeEventListener("focus",this.startAnchorListener),a.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=false;}attachAnchors(){return this._hasAttached?true:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener));}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=true),this._hasAttached)}focusInitialElementWhenReady(a){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(a)));})}focusFirstTabbableElementWhenReady(a){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(a)));})}focusLastTabbableElementWhenReady(a){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(a)));})}_getRegionBoundary(a){let e=this._element.querySelectorAll(`[cdk-focus-region-${a}], [cdkFocusRegion${a}], [cdk-focus-${a}]`);return a=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(a){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let t=this._getFirstTabbableElement(e);return t?.focus(a),!!t}return e.focus(a),true}return this.focusFirstTabbableElement(a)}focusFirstTabbableElement(a){let e=this._getRegionBoundary("start");return e&&e.focus(a),!!e}focusLastTabbableElement(a){let e=this._getRegionBoundary("end");return e&&e.focus(a),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(a){if(this._checker.isFocusable(a)&&this._checker.isTabbable(a))return a;let e=a.children;for(let t=0;t<e.length;t++){let n=e[t].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[t]):null;if(n)return n}return null}_getLastTabbableElement(a){if(this._checker.isFocusable(a)&&this._checker.isTabbable(a))return a;let e=a.children;for(let t=e.length-1;t>=0;t--){let n=e[t].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[t]):null;if(n)return n}return null}_createAnchor(){let a=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,a),a.classList.add("cdk-visually-hidden"),a.classList.add("cdk-focus-trap-anchor"),a.setAttribute("aria-hidden","true"),a}_toggleAnchorTabIndex(a,e){a?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex");}toggleAnchors(a){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(a,this._startAnchor),this._toggleAnchorTabIndex(a,this._endAnchor));}_executeOnStable(a){Xv(a,{injector:this._injector});}},Fa=(()=>{class i{_checker=y(so);_ngZone=y(ee);_document=y(z);_injector=y(pe$1);constructor(){y(ct$1).load(yt);}create(e,t=false){return new ti(e,this._checker,this._ngZone,this._document,t,this._injector)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=We$1({token:i,factory:i.\u0275fac})}return i})(),ni=(()=>{class i{_elementRef=y(qn$1);_focusTrapFactory=y(Fa);focusTrap=void 0;_previouslyFocusedElement=null;get enabled(){return this.focusTrap?.enabled||false}set enabled(e){this.focusTrap&&(this.focusTrap.enabled=e);}autoCapture=false;constructor(){y(C).isBrowser&&(this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,true));}ngOnDestroy(){this.focusTrap?.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null);}ngAfterContentInit(){this.focusTrap?.attachAnchors(),this.autoCapture&&this._captureFocus();}ngDoCheck(){this.focusTrap&&!this.focusTrap.hasAttached()&&this.focusTrap.attachAnchors();}ngOnChanges(e){let t=e.autoCapture;t&&!t.firstChange&&this.autoCapture&&this.focusTrap?.hasAttached()&&this._captureFocus();}_captureFocus(){this._previouslyFocusedElement=Qe(),this.focusTrap?.focusInitialElementWhenReady();}static \u0275fac=function(t){return new(t||i)};static \u0275dir=mu({type:i,selectors:[["","cdkTrapFocus",""]],inputs:{enabled:[2,"cdkTrapFocus","enabled",bL],autoCapture:[2,"cdkTrapFocusAutoCapture","autoCapture",bL]},exportAs:["cdkTrapFocus"],features:[Rc]})}return i})();var Be=(function(i){return i[i.NONE=0]="NONE",i[i.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",i[i.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",i})(Be||{}),Ta="cdk-high-contrast-black-on-white",Oa="cdk-high-contrast-white-on-black",ei="cdk-high-contrast-active",Pa=(()=>{class i{_platform=y(C);_hasCheckedHighContrastMode=false;_document=y(z);_breakpointSubscription;constructor(){this._breakpointSubscription=y(qn).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=false,this._applyBodyHighContrastModeCssClasses());});}getHighContrastMode(){if(!this._platform.isBrowser)return Be.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let t=this._document.defaultView||window,n=t&&t.getComputedStyle?t.getComputedStyle(e):null,r=(n&&n.backgroundColor||"").replace(/ /g,"");switch(e.remove(),r){case "rgb(0,0,0)":case "rgb(45,50,54)":case "rgb(32,32,32)":return Be.WHITE_ON_BLACK;case "rgb(255,255,255)":case "rgb(255,250,239)":return Be.BLACK_ON_WHITE}return Be.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe();}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(ei,Ta,Oa),this._hasCheckedHighContrastMode=true;let t=this.getHighContrastMode();t===Be.BLACK_ON_WHITE?e.add(ei,Ta):t===Be.WHITE_ON_BLACK&&e.add(ei,Oa);}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=We$1({token:i,factory:i.\u0275fac})}return i})(),ii=(()=>{class i{constructor(){y(Pa)._applyBodyHighContrastModeCssClasses();}static \u0275fac=function(t){return new(t||i)};static \u0275mod=ns$1({type:i});static \u0275inj=Ir$1({imports:[Jt]})}return i})();function Ae(i,...a){return a.length?a.some(e=>i[e]):i.altKey||i.shiftKey||i.ctrlKey||i.metaKey}var La=new Map,de=class i{_appId=y(xr$1);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(a,e=false){this._appId!=="ng"&&(a+=this._appId);let t=La.get(a);return t===void 0?t=0:t++,La.set(a,t),`${a}${e?i._infix+"-":""}${t}`}static \u0275fac=function(e){return new(e||i)};static \u0275prov=We$1({token:i,factory:i.\u0275fac})};var Va=" ";function vo(i,a,e){let t=tn(i,a);e=e.trim(),!t.some(n=>n.trim()===e)&&(t.push(e),i.setAttribute(a,t.join(Va)));}function yo(i,a,e){let t=tn(i,a);e=e.trim();let n=t.filter(r=>r!==e);n.length?i.setAttribute(a,n.join(Va)):i.removeAttribute(a);}function tn(i,a){return i.getAttribute(a)?.match(/\S+/g)??[]}var Ba="cdk-describedby-message",en="cdk-describedby-host",ri=0,za=(()=>{class i{_platform=y(C);_document=y(z);_messageRegistry=new Map;_messagesContainer=null;_id=`${ri++}`;constructor(){y(ct$1).load(yt),this._id=y(xr$1)+"-"+ri++;}describe(e,t,n){if(!this._canBeDescribed(e,t))return;let r=ai(t,n);typeof t!="string"?(Na(t,this._id),this._messageRegistry.set(r,{messageElement:t,referenceCount:0})):this._messageRegistry.has(r)||this._createMessageElement(t,n),this._isElementDescribedByMessage(e,r)||this._addMessageReference(e,r);}removeDescription(e,t,n){if(!t||!this._isElementNode(e))return;let r=ai(t,n);if(this._isElementDescribedByMessage(e,r)&&this._removeMessageReference(e,r),typeof t=="string"){let o=this._messageRegistry.get(r);o&&o.referenceCount===0&&this._deleteMessageElement(r);}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null);}ngOnDestroy(){let e=this._document.querySelectorAll(`[${en}="${this._id}"]`);for(let t=0;t<e.length;t++)this._removeCdkDescribedByReferenceIds(e[t]),e[t].removeAttribute(en);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear();}_createMessageElement(e,t){let n=this._document.createElement("div");Na(n,this._id),n.textContent=e,t&&n.setAttribute("role",t),this._createMessagesContainer(),this._messagesContainer.appendChild(n),this._messageRegistry.set(ai(e,t),{messageElement:n,referenceCount:0});}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e);}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",t=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let r=0;r<t.length;r++)t[r].remove();let n=this._document.createElement("div");n.style.visibility="hidden",n.classList.add(e),n.classList.add("cdk-visually-hidden"),this._platform.isBrowser||n.setAttribute("platform","server"),this._document.body.appendChild(n),this._messagesContainer=n;}_removeCdkDescribedByReferenceIds(e){let t=tn(e,"aria-describedby").filter(n=>n.indexOf(Ba)!=0);e.setAttribute("aria-describedby",t.join(" "));}_addMessageReference(e,t){let n=this._messageRegistry.get(t);vo(e,"aria-describedby",n.messageElement.id),e.setAttribute(en,this._id),n.referenceCount++;}_removeMessageReference(e,t){let n=this._messageRegistry.get(t);n.referenceCount--,yo(e,"aria-describedby",n.messageElement.id),e.removeAttribute(en);}_isElementDescribedByMessage(e,t){let n=tn(e,"aria-describedby"),r=this._messageRegistry.get(t),o=r&&r.messageElement.id;return !!o&&n.indexOf(o)!=-1}_canBeDescribed(e,t){if(!this._isElementNode(e))return  false;if(t&&typeof t=="object")return  true;let n=t==null?"":`${t}`.trim(),r=e.getAttribute("aria-label");return n?!r||r.trim()!==n:false}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(t){return new(t||i)};static \u0275prov=We$1({token:i,factory:i.\u0275fac})}return i})();function ai(i,a){return typeof i=="string"?`${a||""}/${i}`:i}function Na(i,a){i.id||(i.id=`${Ba}-${a}-${ri++}`);}var We;function Ha(){if(We==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return We=false,We;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)We=true;else {let i=Element.prototype.scrollTo;i?We=!/\{\s*\[native code\]\s*\}/.test(i.toString()):We=false;}}return We}function oi(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var nt,Ya=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function si(){if(nt)return nt;if(typeof document!="object"||!document)return nt=new Set(Ya),nt;let i=document.createElement("input");return nt=new Set(Ya.filter(a=>(i.setAttribute("type",a),i.type===a))),nt}function Y(i){return i==null?"":typeof i=="string"?i:`${i}px`}function Re(i){return i!=null&&`${i}`!="false"}function ja(i,a=/\s+/){let e=[];if(i!=null){let t=Array.isArray(i)?i:`${i}`.split(a);for(let n of t){let r=`${n}`.trim();r&&e.push(r);}}return e}var ye=(function(i){return i[i.FADING_IN=0]="FADING_IN",i[i.VISIBLE=1]="VISIBLE",i[i.FADING_OUT=2]="FADING_OUT",i[i.HIDDEN=3]="HIDDEN",i})(ye||{}),li=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=ye.HIDDEN;constructor(a,e,t,n=false){this._renderer=a,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=n;}fadeOut(){this._renderer.fadeOutRipple(this);}},Wa=Je({passive:true,capture:true}),di=class{_events=new Map;addHandler(a,e,t,n){let r=this._events.get(e);if(r){let o=r.get(t);o?o.add(n):r.set(t,new Set([n]));}else this._events.set(e,new Map([[t,new Set([n])]])),a.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Wa);});}removeHandler(a,e,t){let n=this._events.get(a);if(!n)return;let r=n.get(e);r&&(r.delete(t),r.size===0&&n.delete(e),n.size===0&&(this._events.delete(a),document.removeEventListener(a,this._delegateEventHandler,Wa)));}_delegateEventHandler=a=>{let e=le(a);e&&this._events.get(a.type)?.forEach((t,n)=>{(n===e||n.contains(e))&&t.forEach(r=>r.handleEvent(a));});}},Mt={enterDuration:225,exitDuration:150},xo=800,Ua=Je({passive:true,capture:true}),Xa=["mousedown","touchstart"],Ga=["mouseup","mouseleave","touchend","touchcancel"],wo=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=KE({type:i,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,n){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return i})(),nn=class i{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=false;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=false;_containerRect=null;static _eventManager=new di;constructor(a,e,t,n,r){this._target=a,this._ngZone=e,this._platform=n,n.isBrowser&&(this._containerElement=pe(t)),r&&r.get(ct$1).load(wo);}fadeInRipple(a,e,t={}){let n=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=B$1(B$1({},Mt),t.animation);t.centered&&(a=n.left+n.width/2,e=n.top+n.height/2);let o=t.radius||Do(a,e,n),l=a-n.left,c=e-n.top,p=r.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${l-o}px`,u.style.top=`${c-o}px`,u.style.height=`${o*2}px`,u.style.width=`${o*2}px`,t.color!=null&&(u.style.backgroundColor=t.color),u.style.transitionDuration=`${p}ms`,this._containerElement.appendChild(u);let w=window.getComputedStyle(u),K=w.transitionProperty,$=w.transitionDuration,X=K==="none"||$==="0s"||$==="0s, 0s"||n.width===0&&n.height===0,j=new li(this,u,t,X);u.style.transform="scale3d(1, 1, 1)",j.state=ye.FADING_IN,t.persistent||(this._mostRecentTransientRipple=j);let He=null;return !X&&(p||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let zi=()=>{He&&(He.fallbackTimer=null),clearTimeout(Hi),this._finishRippleTransition(j);},Rn=()=>this._destroyRipple(j),Hi=setTimeout(Rn,p+100);u.addEventListener("transitionend",zi),u.addEventListener("transitioncancel",Rn),He={onTransitionEnd:zi,onTransitionCancel:Rn,fallbackTimer:Hi};}),this._activeRipples.set(j,He),(X||!p)&&this._finishRippleTransition(j),j}fadeOutRipple(a){if(a.state===ye.FADING_OUT||a.state===ye.HIDDEN)return;let e=a.element,t=B$1(B$1({},Mt),a.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",a.state=ye.FADING_OUT,(a._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(a);}fadeOutAll(){this._getActiveRipples().forEach(a=>a.fadeOut());}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(a=>{a.config.persistent||a.fadeOut();});}setupTriggerEvents(a){let e=pe(a);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Xa.forEach(t=>{i._eventManager.addHandler(this._ngZone,t,e,this);}));}handleEvent(a){a.type==="mousedown"?this._onMousedown(a):a.type==="touchstart"?this._onTouchStart(a):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Ga.forEach(e=>{this._triggerElement.addEventListener(e,this,Ua);});}),this._pointerUpEventsRegistered=true);}_finishRippleTransition(a){a.state===ye.FADING_IN?this._startFadeOutTransition(a):a.state===ye.FADING_OUT&&this._destroyRipple(a);}_startFadeOutTransition(a){let e=a===this._mostRecentTransientRipple,{persistent:t}=a.config;a.state=ye.VISIBLE,!t&&(!e||!this._isPointerDown)&&a.fadeOut();}_destroyRipple(a){let e=this._activeRipples.get(a)??null;this._activeRipples.delete(a),this._activeRipples.size||(this._containerRect=null),a===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),a.state=ye.HIDDEN,e!==null&&(a.element.removeEventListener("transitionend",e.onTransitionEnd),a.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),a.element.remove();}_onMousedown(a){let e=Dt(a),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+xo;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=true,this.fadeInRipple(a.clientX,a.clientY,this._target.rippleConfig));}_onTouchStart(a){if(!this._target.rippleDisabled&&!Ct(a)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=true;let e=a.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig);}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=false,this._getActiveRipples().forEach(a=>{let e=a.state===ye.VISIBLE||a.config.terminateOnPointerUp&&a.state===ye.FADING_IN;!a.config.persistent&&e&&a.fadeOut();}));}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let a=this._triggerElement;a&&(Xa.forEach(e=>i._eventManager.removeHandler(e,a,this)),this._pointerUpEventsRegistered&&(Ga.forEach(e=>a.removeEventListener(e,this,Ua)),this._pointerUpEventsRegistered=false));}};function Do(i,a,e){let t=Math.max(Math.abs(i-e.left),Math.abs(i-e.right)),n=Math.max(Math.abs(a-e.top),Math.abs(a-e.bottom));return Math.sqrt(t*t+n*n)}var Za=new C$1("mat-ripple-global-options");var an=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=KE({type:i,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,n){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2})}return i})();var qa=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=ns$1({type:i});static \u0275inj=Ir$1({imports:[st$1]})}return i})();var Co={capture:true},Eo=["focus","mousedown","mouseenter","touchstart"],ci="mat-ripple-loader-uninitialized",mi="mat-ripple-loader-class-name",Ka="mat-ripple-loader-centered",rn="mat-ripple-loader-disabled",$a=(()=>{class i{_document=y(z);_animationsDisabled=ve();_globalRippleOptions=y(Za,{optional:true});_platform=y(C);_ngZone=y(ee);_injector=y(pe$1);_eventCleanups;_hosts=new Map;constructor(){let e=y(un$1).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Eo.map(t=>e.listen(this._document,t,this._onInteraction,Co)));}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t());}configureRipple(e,t){e.setAttribute(ci,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(mi))&&e.setAttribute(mi,t.className||""),t.centered&&e.setAttribute(Ka,""),t.disabled&&e.setAttribute(rn,"");}setDisabled(e,t){let n=this._hosts.get(e);n?(n.target.rippleDisabled=t,!t&&!n.hasSetUpEvents&&(n.hasSetUpEvents=true,n.renderer.setupTriggerEvents(e))):t?e.setAttribute(rn,""):e.removeAttribute(rn);}_onInteraction=e=>{let t=le(e);if(t instanceof HTMLElement){let n=t.closest(`[${ci}="${this._globalRippleOptions?.namespace??""}"]`);n&&this._createRipple(n);}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(mi)),e.append(t);let n=this._globalRippleOptions,r=this._animationsDisabled?0:n?.animation?.enterDuration??Mt.enterDuration,o=this._animationsDisabled?0:n?.animation?.exitDuration??Mt.exitDuration,l={rippleDisabled:this._animationsDisabled||n?.disabled||e.hasAttribute(rn),rippleConfig:{centered:e.hasAttribute(Ka),terminateOnPointerUp:n?.terminateOnPointerUp,animation:{enterDuration:r,exitDuration:o}}},c=new nn(l,this._ngZone,t,this._platform,this._injector),p=!l.rippleDisabled;p&&c.setupTriggerEvents(e),this._hosts.set(e,{target:l,renderer:c,hasSetUpEvents:p}),e.removeAttribute(ci);}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e));}static \u0275fac=function(t){return new(t||i)};static \u0275prov=We$1({token:i,factory:i.\u0275fac})}return i})();var on=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=false;matcher;constructor(a,e,t,n,r){this._defaultMatcher=a,this.ngControl=e,this._parentFormGroup=t,this._parentForm=n,this._stateChanges=r;}updateErrorState(){let a=this.errorState,e=this._parentFormGroup||this._parentForm,t=this.matcher||this._defaultMatcher,n=this.ngControl?this.ngControl.control:null,r=t?.isErrorState(n,e)??false;r!==a&&(this.errorState=r,this._stateChanges.next());}};var So=/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/,Mo=/^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;function ui(i,a){let e=Array(i);for(let t=0;t<i;t++)e[t]=a(t);return e}var ko=(()=>{class i extends ie{_matDateLocale=y(wt,{optional:true});constructor(){super();let e=y(wt,{optional:true});e!==void 0&&(this._matDateLocale=e),super.setLocale(this._matDateLocale);}getYear(e){return e.getFullYear()}getMonth(e){return e.getMonth()}getDate(e){return e.getDate()}getDayOfWeek(e){return e.getDay()}getMonthNames(e){let t=new Intl.DateTimeFormat(this.locale,{month:e,timeZone:"utc"});return ui(12,n=>this._format(t,new Date(2017,n,1)))}getDateNames(){let e=new Intl.DateTimeFormat(this.locale,{day:"numeric",timeZone:"utc"});return ui(31,t=>this._format(e,new Date(2017,0,t+1)))}getDayOfWeekNames(e){let t=new Intl.DateTimeFormat(this.locale,{weekday:e,timeZone:"utc"});return ui(7,n=>this._format(t,new Date(2017,0,n+1)))}getYearName(e){let t=new Intl.DateTimeFormat(this.locale,{year:"numeric",timeZone:"utc"});return this._format(t,e)}getFirstDayOfWeek(){if(typeof Intl<"u"&&Intl.Locale){let e=new Intl.Locale(this.locale),t=(e.getWeekInfo?.()||e.weekInfo)?.firstDay??0;return t===7?0:t}return 0}getNumDaysInMonth(e){return this.getDate(this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+1,0))}clone(e){return new Date(e.getTime())}createDate(e,t,n){let r=this._createDateWithOverflow(e,t,n);return r.getMonth()!=t,r}today(){return new Date}parse(e,t){return typeof e=="number"?new Date(e):e?new Date(Date.parse(e)):null}format(e,t){if(!this.isValid(e))throw Error("NativeDateAdapter: Cannot format invalid date.");let n=new Intl.DateTimeFormat(this.locale,W(B$1({},t),{timeZone:"utc"}));return this._format(n,e)}addCalendarYears(e,t){return this.addCalendarMonths(e,t*12)}addCalendarMonths(e,t){let n=this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+t,this.getDate(e));return this.getMonth(n)!=((this.getMonth(e)+t)%12+12)%12&&(n=this._createDateWithOverflow(this.getYear(n),this.getMonth(n),0)),n}addCalendarDays(e,t){return this._createDateWithOverflow(this.getYear(e),this.getMonth(e),this.getDate(e)+t)}toIso8601(e){return [e.getUTCFullYear(),this._2digit(e.getUTCMonth()+1),this._2digit(e.getUTCDate())].join("-")}deserialize(e){if(typeof e=="string"){if(!e)return null;if(So.test(e)){let t=new Date(e);if(this.isValid(t))return t}}return super.deserialize(e)}isDateInstance(e){return e instanceof Date}isValid(e){return !isNaN(e.getTime())}invalid(){return new Date(NaN)}setTime(e,t,n,r){let o=this.clone(e);return o.setHours(t,n,r,0),o}getHours(e){return e.getHours()}getMinutes(e){return e.getMinutes()}getSeconds(e){return e.getSeconds()}parseTime(e,t){if(typeof e!="string")return e instanceof Date?new Date(e.getTime()):null;let n=e.trim();if(n.length===0)return null;let r=this._parseTimeString(n);if(r===null){let o=n.replace(/[^0-9:(AM|PM)]/gi,"").trim();o.length>0&&(r=this._parseTimeString(o));}return r||this.invalid()}addSeconds(e,t){return new Date(e.getTime()+t*1e3)}_createDateWithOverflow(e,t,n){let r=new Date;return r.setFullYear(e,t,n),r.setHours(0,0,0,0),r}_2digit(e){return ("00"+e).slice(-2)}_format(e,t){let n=new Date;return n.setUTCFullYear(t.getFullYear(),t.getMonth(),t.getDate()),n.setUTCHours(t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()),e.format(n)}_parseTimeString(e){let t=e.toUpperCase().match(Mo);if(t){let n=parseInt(t[1]),r=parseInt(t[2]),o=t[3]==null?void 0:parseInt(t[3]),l=t[4];if(n===12?n=l==="AM"?0:n:l==="PM"&&(n+=12),hi(n,0,23)&&hi(r,0,59)&&(o==null||hi(o,0,59)))return this.setTime(this.today(),n,r,o||0)}return null}static \u0275fac=function(t){return new(t||i)};static \u0275prov=We$1({token:i,factory:i.\u0275fac,autoProvided:false})}return i})();function hi(i,a,e){return !isNaN(i)&&i>=a&&i<=e}var Ao={parse:{dateInput:null,timeInput:null},display:{dateInput:{year:"numeric",month:"numeric",day:"numeric"},timeInput:{hour:"numeric",minute:"numeric"},monthYearLabel:{year:"numeric",month:"short"},dateA11yLabel:{year:"numeric",month:"long",day:"numeric"},monthYearA11yLabel:{year:"numeric",month:"long"},timeOptionLabel:{hour:"numeric",minute:"numeric"}}};function Qa(i=Ao){return [{provide:ie,useClass:ko},{provide:Ve,useValue:i}]}var Ro=20,it=(()=>{class i{_ngZone=y(ee);_platform=y(C);_renderer=y(un$1).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new ne;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)));}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e));}scrolled(e=Ro){return this._platform.isBrowser?new x(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let n=e>0?this._scrolled.pipe(wm(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{n.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0);}}):bs$1()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete();}ancestorScrolled(e,t){let n=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(ht$1(r=>!r||n.indexOf(r)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((n,r)=>{this._targetContainsElement(r,e)&&t.push(r);}),t}_targetContainsElement(e,t){let n=pe(t),r=e.getElementRef().nativeElement;do if(n==r)return  true;while(n=n.parentElement);return  false}static \u0275fac=function(t){return new(t||i)};static \u0275prov=We$1({token:i,factory:i.\u0275fac})}return i})();var To=20,at=(()=>{class i{_platform=y(C);_listeners;_viewportSize=null;_change=new ne;_document=y(z);constructor(){let e=y(ee),t=y(un$1).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let n=r=>this._change.next(r);this._listeners=[t.listen("window","resize",n),t.listen("window","orientationchange",n)];}this.change().subscribe(()=>this._viewportSize=null);});}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete();}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:n}=this.getViewportSize();return {top:e.top,left:e.left,bottom:e.top+n,right:e.left+t,height:n,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return {top:0,left:0};let e=this._document,t=this._getWindow(),n=e.documentElement,r=n.getBoundingClientRect(),o=-r.top||e.body?.scrollTop||t.scrollY||n.scrollTop||0,l=-r.left||e.body?.scrollLeft||t.scrollX||n.scrollLeft||0;return {top:o,left:l}}change(e=To){return e>0?this._change.pipe(wm(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0};}static \u0275fac=function(t){return new(t||i)};static \u0275prov=We$1({token:i,factory:i.\u0275fac})}return i})();var kt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=ns$1({type:i});static \u0275inj=Ir$1({})}return i})(),fi=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=ns$1({type:i});static \u0275inj=Ir$1({imports:[st$1,kt,st$1,kt]})}return i})();var At=class{_attachedHost=null;attach(a){return this._attachedHost=a,a.attach(this)}detach(){let a=this._attachedHost;a!=null&&(this._attachedHost=null,a.detach());}get isAttached(){return this._attachedHost!=null}setAttachedHost(a){this._attachedHost=a;}},ze=class extends At{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(a,e,t,n,r,o){super(),this.component=a,this.viewContainerRef=e,this.injector=t,this.projectableNodes=n,this.bindings=r||null,this.directives=o||null;}},Rt=class extends At{templateRef;viewContainerRef;context;injector;constructor(a,e,t,n){super(),this.templateRef=a,this.viewContainerRef=e,this.context=t,this.injector=n;}get origin(){return this.templateRef.elementRef}attach(a,e=this.context){return this.context=e,super.attach(a)}detach(){return this.context=void 0,super.detach()}},_i=class extends At{element;constructor(a){super(),this.element=a instanceof qn$1?a.nativeElement:a;}},sn=class{_attachedPortal=null;_disposeFn=null;_isDisposed=false;hasAttached(){return !!this._attachedPortal}attach(a){if(a instanceof ze)return this._attachedPortal=a,this.attachComponentPortal(a);if(a instanceof Rt)return this._attachedPortal=a,this.attachTemplatePortal(a);if(this.attachDomPortal&&a instanceof _i)return this._attachedPortal=a,this.attachDomPortal(a)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn();}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=true;}setDisposeFn(a){this._disposeFn=a;}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null);}},ln=class extends sn{outletElement;_appRef;_defaultInjector;constructor(a,e,t){super(),this.outletElement=a,this._appRef=e,this._defaultInjector=t;}attachComponentPortal(a){let e;if(a.viewContainerRef){let t=a.injector||a.viewContainerRef.injector,n=t.get(ln$1,null,{optional:true})||void 0;e=a.viewContainerRef.createComponent(a.component,{index:a.viewContainerRef.length,injector:t,ngModuleRef:n,projectableNodes:a.projectableNodes||void 0,bindings:a.bindings||void 0,directives:a.directives||void 0}),this.setDisposeFn(()=>e.destroy());}else {let t=this._appRef,n=a.injector||this._defaultInjector||pe$1.NULL,r=n.get(J,t.injector);e=ML(a.component,{elementInjector:n,environmentInjector:r,projectableNodes:a.projectableNodes||void 0,bindings:a.bindings||void 0,directives:a.directives||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy();});}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=a,e}attachTemplatePortal(a){let e=a.viewContainerRef,t=e.createEmbeddedView(a.templateRef,a.context,{injector:a.injector});return t.rootNodes.forEach(n=>this.outletElement.appendChild(n)),t.detectChanges(),this.setDisposeFn(()=>{let n=e.indexOf(t);n!==-1&&e.remove(n);}),this._attachedPortal=a,t}attachDomPortal=a=>{let e=a.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=a,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t);});};dispose(){super.dispose(),this.outletElement.remove();}_getComponentRootNode(a){return a.hostView.rootNodes[0]}};var gi=(()=>{class i extends sn{_moduleRef=y(ln$1,{optional:true});_document=y(z);_viewContainerRef=y(Xn);_isInitialized=false;_attachedRef=null;get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null);}attached=new Xe;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=true;}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null;}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,n=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0});return t!==this._viewContainerRef&&this._getRootNode().appendChild(n.hostView.rootNodes[0]),super.setDisposeFn(()=>n.destroy()),this._attachedPortal=e,this._attachedRef=n,this.attached.emit(n),n}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let n=this._document.createComment("dom-portal");e.setAttachedHost(this),t.parentNode.insertBefore(n,t),this._getRootNode().appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{n.parentNode&&n.parentNode.replaceChild(t,n);});};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=(()=>{let e;return function(n){return (e||(e=Hf(i)))(n||i)}})();static \u0275dir=mu({type:i,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[Eh]})}return i})(),dn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=ns$1({type:i});static \u0275inj=Ir$1({})}return i})();var Ja=Ha();function _n(i){return new cn(i.get(at),i.get(z))}var cn=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=false;_document;constructor(a,e){this._viewportRuler=a,this._document=e;}attach(){}enable(){if(this._canBeEnabled()){let a=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=a.style.left||"",this._previousHTMLStyles.top=a.style.top||"",a.style.left=Y(-this._previousScrollPosition.left),a.style.top=Y(-this._previousScrollPosition.top),a.classList.add("cdk-global-scrollblock"),this._isEnabled=true;}}disable(){if(this._isEnabled){let a=this._document.documentElement,e=this._document.body,t=a.style,n=e.style,r=t.scrollBehavior||"",o=n.scrollBehavior||"";this._isEnabled=false,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,a.classList.remove("cdk-global-scrollblock"),Ja&&(t.scrollBehavior=n.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Ja&&(t.scrollBehavior=r,n.scrollBehavior=o);}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return  false;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function or(i,a){return new mn(i.get(it),i.get(ee),i.get(at),a)}var mn=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(a,e,t,n){this._scrollDispatcher=a,this._ngZone=e,this._viewportRuler=t,this._config=n;}attach(a){this._overlayRef,this._overlayRef=a;}enable(){if(this._scrollSubscription)return;let a=this._scrollDispatcher.scrolled(0).pipe(ht$1(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=a.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition();})):this._scrollSubscription=a.subscribe(this._detach);}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null);}detach(){this.disable(),this._overlayRef=null;}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach());}};var Tt=class{enable(){}disable(){}attach(){}};function bi(i,a){return a.some(e=>{let t=i.bottom<e.top,n=i.top>e.bottom,r=i.right<e.left,o=i.left>e.right;return t||n||r||o})}function er(i,a){return a.some(e=>{let t=i.top<e.top,n=i.bottom>e.bottom,r=i.left<e.left,o=i.right>e.right;return t||n||r||o})}function st(i,a){return new un(i.get(it),i.get(at),i.get(ee),a)}var un=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(a,e,t,n){this._scrollDispatcher=a,this._viewportRuler=e,this._ngZone=t,this._config=n;}attach(a){this._overlayRef,this._overlayRef=a;}enable(){if(!this._scrollSubscription){let a=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(a).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:n}=this._viewportRuler.getViewportSize();bi(e,[{width:t,height:n,bottom:n,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()));}});}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null);}detach(){this.disable(),this._overlayRef=null;}},sr=(()=>{class i{_injector=y(pe$1);noop=()=>new Tt;close=e=>or(this._injector,e);block=()=>_n(this._injector);reposition=e=>st(this._injector,e);static \u0275fac=function(t){return new(t||i)};static \u0275prov=We$1({token:i,factory:i.\u0275fac})}return i})(),rt=class{positionStrategy;scrollStrategy=new Tt;panelClass="";hasBackdrop=false;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=false;usePopover;eventPredicate;constructor(a){if(a){let e=Object.keys(a);for(let t of e)a[t]!==void 0&&(this[t]=a[t]);}}};var hn=class{connectionPair;scrollableViewProperties;constructor(a,e){this.connectionPair=a,this.scrollableViewProperties=e;}};var lr=(()=>{class i{_attachedOverlays=[];_document=y(z);_isAttached=false;ngOnDestroy(){this.detach();}add(e){this.remove(e),this._attachedOverlays.push(e);}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach();}canReceiveEvent(e,t,n){return n.observers.length<1?false:e.eventPredicate?e.eventPredicate(t):true}static \u0275fac=function(t){return new(t||i)};static \u0275prov=We$1({token:i,factory:i.\u0275fac})}return i})(),dr=(()=>{class i extends lr{_ngZone=y(ee);_renderer=y(un$1).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener);}),this._isAttached=true);}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=false);}_keydownListener=e=>{let t=this._attachedOverlays;for(let n=t.length-1;n>-1;n--){let r=t[n];if(this.canReceiveEvent(r,e,r._keydownEvents)){this._ngZone.run(()=>r._keydownEvents.next(e));break}}};static \u0275fac=function(t){return new(t||i)};static \u0275prov=We$1({token:i,factory:i.\u0275fac})}return i})(),cr=(()=>{class i extends lr{_platform=y(C);_ngZone=y(ee);_renderer=y(un$1).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=false;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,n={capture:true},r=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[r.listen(t,"pointerdown",this._pointerDownListener,n),r.listen(t,"click",this._clickListener,n),r.listen(t,"auxclick",this._clickListener,n),r.listen(t,"contextmenu",this._clickListener,n)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=true),this._isAttached=true;}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=false),this._isAttached=false);}_pointerDownListener=e=>{this._pointerDownEventTarget=le(e);};_clickListener=e=>{let t=le(e),n=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let r=this._attachedOverlays.slice();for(let o=r.length-1;o>-1;o--){let l=r[o],c=l._outsidePointerEvents;if(!(!l.hasAttached()||!this.canReceiveEvent(l,e,c))){if(tr(l.overlayElement,t)||tr(l.overlayElement,n))break;this._ngZone?this._ngZone.run(()=>c.next(e)):c.next(e);}}};static \u0275fac=function(t){return new(t||i)};static \u0275prov=We$1({token:i,factory:i.\u0275fac})}return i})();function tr(i,a){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=a;for(;t;){if(t===i)return  true;t=e&&t instanceof ShadowRoot?t.host:t.parentNode;}return  false}var mr=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=KE({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,n){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return i})(),ur=(()=>{class i{_platform=y(C);_containerElement;_document=y(z);_styleLoader=y(ct$1);ngOnDestroy(){this._containerElement?.remove();}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||oi()){let n=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let r=0;r<n.length;r++)n[r].remove();}let t=this._document.createElement("div");t.classList.add(e),oi()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t;}_loadStyles(){this._styleLoader.load(mr);}static \u0275fac=function(t){return new(t||i)};static \u0275prov=We$1({token:i,factory:i.\u0275fac})}return i})(),vi=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(a,e,t,n){this._renderer=e,this._ngZone=t,this.element=a.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",n);}detach(){this._ngZone.runOutsideAngular(()=>{let a=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(a,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),a.style.pointerEvents="none",a.classList.remove("cdk-overlay-backdrop-showing");});}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove();}};function yi(i){return i&&i.nodeType===1}var pn=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new ne;_attachments=new ne;_detachments=new ne;_positionStrategy;_scrollStrategy;_locationChanges=Y$1.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=false;_previousHostParent;_keydownEvents=new ne;_outsidePointerEvents=new ne;_afterNextRenderRef;constructor(a,e,t,n,r,o,l,c,p,u=false,w,K){this._portalOutlet=a,this._host=e,this._pane=t,this._config=n,this._ngZone=r,this._keyboardDispatcher=o,this._document=l,this._location=c,this._outsideClickDispatcher=p,this._animationsDisabled=u,this._injector=w,this._renderer=K,n.scrollStrategy&&(this._scrollStrategy=n.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=n.positionStrategy;}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(a){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(a);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Xv(()=>{this.hasAttached()&&this.updatePosition();},{injector:this._injector}),this._togglePointerEvents(true),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,true),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()));}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(false),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let a=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),a}dispose(){if(this._disposed)return;let a=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,a&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=true;}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply();}updatePositionStrategy(a){a!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=a,this.hasAttached()&&(a.attach(this),this.updatePosition()));}updateSize(a){this._config=B$1(B$1({},this._config),a),this._updateElementSize();}setDirection(a){this._config=W(B$1({},this._config),{direction:a}),this._updateElementDirection();}addPanelClass(a){this._pane&&this._toggleClasses(this._pane,a,true);}removePanelClass(a){this._pane&&this._toggleClasses(this._pane,a,false);}getDirection(){let a=this._config.direction;return a?typeof a=="string"?a:a.value:"ltr"}updateScrollStrategy(a){a!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=a,this.hasAttached()&&(a.attach(this),a.enable()));}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection());}_updateElementSize(){if(!this._pane)return;let a=this._pane.style;a.width=Y(this._config.width),a.height=Y(this._config.height),a.minWidth=Y(this._config.minWidth),a.minHeight=Y(this._config.minHeight),a.maxWidth=Y(this._config.maxWidth),a.maxHeight=Y(this._config.maxHeight);}_togglePointerEvents(a){this._pane.style.pointerEvents=a?"":"none";}_attachHost(){if(!this._host.parentElement){let a=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;yi(a)?a.after(this._host):a?.type==="parent"?a.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host);}if(this._config.usePopover)try{this._host.showPopover();}catch{}}_attachBackdrop(){let a="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new vi(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e);}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,true),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(a));}):this._backdropRef.element.classList.add(a);}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host);}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach();}_toggleClasses(a,e,t){let n=Ke(e||[]).filter(r=>!!r);n.length&&(t?a.classList.add(...n):a.classList.remove(...n));}_detachContentWhenEmpty(){let a=false;try{this._detachContentAfterRenderRef=Xv(()=>{a=!0,this._detachContent();},{injector:this._injector});}catch(e){if(a)throw e;this._detachContent();}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent();}),this._detachContentMutationObserver.observe(this._pane,{childList:true}));}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,false),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent());}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect();}_disposeScrollStrategy(){let a=this._scrollStrategy;a?.disable(),a?.detach?.();}},nr="cdk-overlay-connected-position-bounding-box",Oo=/([A-Za-z%]+)$/;function lt(i,a){return new ot(a,i.get(at),i.get(z),i.get(C),i.get(ur))}var ot=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=false;_lastBoundingBoxSize={width:0,height:0};_isPushed=false;_canPush=true;_growAfterOpen=false;_hasFlexibleDimensions=true;_positionLocked=false;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=false;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new ne;_resizeSubscription=Y$1.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(a,e,t,n,r){this._viewportRuler=e,this._document=t,this._platform=n,this._overlayContainer=r,this.setOrigin(a);}attach(a){this._overlayRef&&this._overlayRef,this._validatePositions(),a.hostElement.classList.add(nr),this._overlayRef=a,this._boundingBox=a.hostElement,this._pane=a.overlayElement,this._isDisposed=false,this._isInitialRender=true,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=true,this.apply();});}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let a=this._originRect,e=this._overlayRect,t=this._viewportRect,n=this._containerRect,r=[],o;for(let l of this._preferredPositions){let c=this._getOriginPoint(a,n,l),p=this._getOverlayPoint(c,e,l),u=this._getOverlayFit(p,e,t,l);if(u.isCompletelyWithinViewport){this._isPushed=false,this._applyPosition(l,c);return}if(this._canFitWithFlexibleDimensions(u,p,t)){r.push({position:l,origin:c,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(c,l)});continue}(!o||o.overlayFit.visibleArea<u.visibleArea)&&(o={overlayFit:u,overlayPoint:p,originPoint:c,position:l,overlayRect:e});}if(r.length){let l=null,c=-1;for(let p of r){let u=p.boundingBoxRect.width*p.boundingBoxRect.height*(p.position.weight||1);u>c&&(c=u,l=p);}this._isPushed=false,this._applyPosition(l.position,l.origin);return}if(this._canPush){this._isPushed=true,this._applyPosition(o.position,o.originPoint);return}this._applyPosition(o.position,o.originPoint);}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe();}dispose(){this._isDisposed||(this._boundingBox&&Ue(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(nr),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=true);}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let a=this._lastPosition;a?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(a,this._getOriginPoint(this._originRect,this._containerRect,a))):this.apply();}withScrollableContainers(a){return this._scrollables=a,this}withPositions(a){return this._preferredPositions=a,a.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(a){return this._viewportMargin=a,this}withFlexibleDimensions(a=true){return this._hasFlexibleDimensions=a,this}withGrowAfterOpen(a=true){return this._growAfterOpen=a,this}withPush(a=true){return this._canPush=a,this}withLockedPosition(a=true){return this._positionLocked=a,this}setOrigin(a){return this._origin=a,this}withDefaultOffsetX(a){return this._offsetX=a,this}withDefaultOffsetY(a){return this._offsetY=a,this}withTransformOriginOn(a){return this._transformOriginSelector=a,this}withPopoverLocation(a){return this._popoverLocation=a,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof qn$1?this._origin.nativeElement:yi(this._origin)?this._origin:null}_getOriginPoint(a,e,t){let n;if(t.originX=="center")n=a.left+a.width/2;else {let o=this._isRtl()?a.right:a.left,l=this._isRtl()?a.left:a.right;n=t.originX=="start"?o:l;}e.left<0&&(n-=e.left);let r;return t.originY=="center"?r=a.top+a.height/2:r=t.originY=="top"?a.top:a.bottom,e.top<0&&(r-=e.top),{x:n,y:r}}_getOverlayPoint(a,e,t){let n;t.overlayX=="center"?n=-e.width/2:t.overlayX==="start"?n=this._isRtl()?-e.width:0:n=this._isRtl()?0:-e.width;let r;return t.overlayY=="center"?r=-e.height/2:r=t.overlayY=="top"?0:-e.height,{x:a.x+n,y:a.y+r}}_getOverlayFit(a,e,t,n){let r=ar(e),{x:o,y:l}=a,c=this._getOffset(n,"x"),p=this._getOffset(n,"y");c&&(o+=c),p&&(l+=p);let u=0-o,w=o+r.width-t.width,K=0-l,$=l+r.height-t.height,X=this._subtractOverflows(r.width,u,w),j=this._subtractOverflows(r.height,K,$),He=X*j;return {visibleArea:He,isCompletelyWithinViewport:r.width*r.height===He,fitsInViewportVertically:j===r.height,fitsInViewportHorizontally:X==r.width}}_canFitWithFlexibleDimensions(a,e,t){if(this._hasFlexibleDimensions){let n=t.bottom-e.y,r=t.right-e.x,o=ir(this._overlayRef.getConfig().minHeight),l=ir(this._overlayRef.getConfig().minWidth),c=a.fitsInViewportVertically||o!=null&&o<=n,p=a.fitsInViewportHorizontally||l!=null&&l<=r;return c&&p}return  false}_pushOverlayOnScreen(a,e,t){if(this._previousPushAmount&&this._positionLocked)return {x:a.x+this._previousPushAmount.x,y:a.y+this._previousPushAmount.y};let n=ar(e),r=this._viewportRect,o=Math.max(a.x+n.width-r.width,0),l=Math.max(a.y+n.height-r.height,0),c=Math.max(r.top-t.top-a.y,0),p=Math.max(r.left-t.left-a.x,0),u=0,w=0;return n.width<=r.width?u=p||-o:u=a.x<this._getViewportMarginStart()?r.left-t.left-a.x:0,n.height<=r.height?w=c||-l:w=a.y<this._getViewportMarginTop()?r.top-t.top-a.y:0,this._previousPushAmount={x:u,y:w},{x:a.x+u,y:a.y+w}}_applyPosition(a,e){if(this._setTransformOrigin(a),this._setOverlayElementStyles(e,a),this._setBoundingBoxStyles(e,a),a.panelClass&&this._addPanelClasses(a.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(a!==this._lastPosition||!this._lastScrollVisibility||!Io(this._lastScrollVisibility,t)){let n=new hn(a,t);this._positionChanges.next(n);}this._lastScrollVisibility=t;}this._lastPosition=a,this._isInitialRender=false;}_setTransformOrigin(a){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,n=a.overlayY;a.overlayX==="center"?t="center":this._isRtl()?t=a.overlayX==="start"?"right":"left":t=a.overlayX==="start"?"left":"right";for(let r=0;r<e.length;r++)e[r].style.transformOrigin=`${t} ${n}`;}_calculateBoundingBoxRect(a,e){let t=this._viewportRect,n=this._isRtl(),r,o,l;if(e.overlayY==="top")o=a.y,r=t.height-o+this._getViewportMarginBottom();else if(e.overlayY==="bottom")l=t.height-a.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),r=t.height-l+this._getViewportMarginTop();else {let $=Math.min(t.bottom-a.y+t.top,a.y),X=this._lastBoundingBoxSize.height;r=$*2,o=a.y-$,r>X&&!this._isInitialRender&&!this._growAfterOpen&&(o=a.y-X/2);}let c=e.overlayX==="start"&&!n||e.overlayX==="end"&&n,p=e.overlayX==="end"&&!n||e.overlayX==="start"&&n,u,w,K;if(p)K=t.width-a.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),u=a.x-this._getViewportMarginStart();else if(c)w=a.x,u=t.right-a.x-this._getViewportMarginEnd();else {let $=Math.min(t.right-a.x+t.left,a.x),X=this._lastBoundingBoxSize.width;u=$*2,w=a.x-$,u>X&&!this._isInitialRender&&!this._growAfterOpen&&(w=a.x-X/2);}return {top:o,left:w,bottom:l,right:K,width:u,height:r}}_setBoundingBoxStyles(a,e){let t=this._calculateBoundingBoxRect(a,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let n={};if(this._hasExactPosition())n.top=n.left="0",n.bottom=n.right="auto",n.maxHeight=n.maxWidth="",n.width=n.height="100%";else {let r=this._overlayRef.getConfig().maxHeight,o=this._overlayRef.getConfig().maxWidth;n.width=Y(t.width),n.height=Y(t.height),n.top=Y(t.top)||"auto",n.bottom=Y(t.bottom)||"auto",n.left=Y(t.left)||"auto",n.right=Y(t.right)||"auto",e.overlayX==="center"?n.alignItems="center":n.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?n.justifyContent="center":n.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",r&&(n.maxHeight=Y(r)),o&&(n.maxWidth=Y(o));}this._lastBoundingBoxSize=t,Ue(this._boundingBox.style,n);}_resetBoundingBoxStyles(){Ue(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""});}_resetOverlayElementStyles(){Ue(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""});}_setOverlayElementStyles(a,e){let t={},n=this._hasExactPosition(),r=this._hasFlexibleDimensions,o=this._overlayRef.getConfig();if(n){let u=this._viewportRuler.getViewportScrollPosition();Ue(t,this._getExactOverlayY(e,a,u)),Ue(t,this._getExactOverlayX(e,a,u));}else t.position="static";let l="",c=this._getOffset(e,"x"),p=this._getOffset(e,"y");c&&(l+=`translateX(${c}px) `),p&&(l+=`translateY(${p}px)`),t.transform=l.trim(),o.maxHeight&&(n?t.maxHeight=Y(o.maxHeight):r&&(t.maxHeight="")),o.maxWidth&&(n?t.maxWidth=Y(o.maxWidth):r&&(t.maxWidth="")),Ue(this._pane.style,t);}_getExactOverlayY(a,e,t){let n={top:"",bottom:""},r=this._getOverlayPoint(e,this._overlayRect,a);if(this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t)),a.overlayY==="bottom"){let o=this._document.documentElement.clientHeight;n.bottom=`${o-(r.y+this._overlayRect.height)}px`;}else n.top=Y(r.y);return n}_getExactOverlayX(a,e,t){let n={left:"",right:""},r=this._getOverlayPoint(e,this._overlayRect,a);this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t));let o;if(this._isRtl()?o=a.overlayX==="end"?"left":"right":o=a.overlayX==="end"?"right":"left",o==="right"){let l=this._document.documentElement.clientWidth;n.right=`${l-(r.x+this._overlayRect.width)}px`;}else n.left=Y(r.x);return n}_getScrollVisibility(){let a=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(n=>n.getElementRef().nativeElement.getBoundingClientRect());return {isOriginClipped:er(a,t),isOriginOutsideView:bi(a,t),isOverlayClipped:er(e,t),isOverlayOutsideView:bi(e,t)}}_subtractOverflows(a,...e){return e.reduce((t,n)=>t-Math.max(n,0),a)}_getNarrowedViewportRect(){let a=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return {top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+a-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:a-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return !this._hasFlexibleDimensions||this._isPushed}_getOffset(a,e){return e==="x"?a.offsetX==null?this._offsetX:a.offsetX:a.offsetY==null?this._offsetY:a.offsetY}_validatePositions(){}_addPanelClasses(a){this._pane&&Ke(a).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e));});}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(a=>{this._pane.classList.remove(a);}),this._appliedPanelClasses=[]);}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let a=this._origin;if(a instanceof qn$1)return a.nativeElement.getBoundingClientRect();if(a instanceof Element)return a.getBoundingClientRect();let e=a.width||0,t=a.height||0;return {top:a.y,bottom:a.y+t,left:a.x,right:a.x+e,height:t,width:e}}_getContainerRect(){let a=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();a&&(e.style.display="block");let t=e.getBoundingClientRect();return a&&(e.style.display=""),t}};function Ue(i,a){for(let e in a)a.hasOwnProperty(e)&&(i[e]=a[e]);return i}function ir(i){if(typeof i!="number"&&i!=null){let[a,e]=i.split(Oo);return !e||e==="px"?parseFloat(a):null}return i||null}function ar(i){return {top:Math.floor(i.top),right:Math.floor(i.right),bottom:Math.floor(i.bottom),left:Math.floor(i.left),width:Math.floor(i.width),height:Math.floor(i.height)}}function Io(i,a){return i===a?true:i.isOriginClipped===a.isOriginClipped&&i.isOriginOutsideView===a.isOriginOutsideView&&i.isOverlayClipped===a.isOverlayClipped&&i.isOverlayOutsideView===a.isOverlayOutsideView}var rr="cdk-global-overlay-wrapper";function gn(i){return new fn}var fn=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=false;attach(a){let e=a.getConfig();this._overlayRef=a,this._width&&!e.width&&a.updateSize({width:this._width}),this._height&&!e.height&&a.updateSize({height:this._height}),a.hostElement.classList.add(rr),this._isDisposed=false;}top(a=""){return this._bottomOffset="",this._topOffset=a,this._alignItems="flex-start",this}left(a=""){return this._xOffset=a,this._xPosition="left",this}bottom(a=""){return this._topOffset="",this._bottomOffset=a,this._alignItems="flex-end",this}right(a=""){return this._xOffset=a,this._xPosition="right",this}start(a=""){return this._xOffset=a,this._xPosition="start",this}end(a=""){return this._xOffset=a,this._xPosition="end",this}width(a=""){return this._overlayRef?this._overlayRef.updateSize({width:a}):this._width=a,this}height(a=""){return this._overlayRef?this._overlayRef.updateSize({height:a}):this._height=a,this}centerHorizontally(a=""){return this.left(a),this._xPosition="center",this}centerVertically(a=""){return this.top(a),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let a=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:n,height:r,maxWidth:o,maxHeight:l}=t,c=(n==="100%"||n==="100vw")&&(!o||o==="100%"||o==="100vw"),p=(r==="100%"||r==="100vh")&&(!l||l==="100%"||l==="100vh"),u=this._xPosition,w=this._xOffset,K=this._overlayRef.getConfig().direction==="rtl",$="",X="",j="";c?j="flex-start":u==="center"?(j="center",K?X=w:$=w):K?u==="left"||u==="end"?(j="flex-end",$=w):(u==="right"||u==="start")&&(j="flex-start",X=w):u==="left"||u==="start"?(j="flex-start",$=w):(u==="right"||u==="end")&&(j="flex-end",X=w),a.position=this._cssPosition,a.marginLeft=c?"0":$,a.marginTop=p?"0":this._topOffset,a.marginBottom=this._bottomOffset,a.marginRight=c?"0":X,e.justifyContent=j,e.alignItems=p?"flex-start":this._alignItems;}dispose(){if(this._isDisposed||!this._overlayRef)return;let a=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(rr),t.justifyContent=t.alignItems=a.marginTop=a.marginBottom=a.marginLeft=a.marginRight=a.position="",this._overlayRef=null,this._isDisposed=true;}},hr=(()=>{class i{_injector=y(pe$1);global(){return gn()}flexibleConnectedTo(e){return lt(this._injector,e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=We$1({token:i,factory:i.\u0275fac})}return i})(),pr=new C$1("OVERLAY_DEFAULT_CONFIG");function dt(i,a){i.get(ct$1).load(mr);let e=i.get(ur),t=i.get(z),n=i.get(de),r=i.get(Yr$1),o=i.get(gt),l=i.get(Zp,null,{optional:true})||i.get(un$1).createRenderer(null,null),c=new rt(a),p=i.get(pr,null,{optional:true})?.usePopover??true;c.direction=c.direction||o.value,"showPopover"in t.body?c.usePopover=a?.usePopover??p:c.usePopover=false;let u=t.createElement("div"),w=t.createElement("div");u.id=n.getId("cdk-overlay-"),u.classList.add("cdk-overlay-pane"),w.appendChild(u),c.usePopover&&(w.setAttribute("popover","manual"),w.classList.add("cdk-overlay-popover"));let K=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return yi(K)?K.after(w):K?.type==="parent"?K.element.appendChild(w):e.getContainerElement().appendChild(w),new pn(new ln(u,r,i),w,u,c,i.get(ee),i.get(dr),t,i.get(Cg),i.get(cr),a?.disableAnimations??i.get(Iy,null,{optional:true})==="NoopAnimations",i.get(J),l)}var fr=(()=>{class i{scrollStrategies=y(sr);_positionBuilder=y(hr);_injector=y(pe$1);create(e){return dt(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(t){return new(t||i)};static \u0275prov=We$1({token:i,factory:i.\u0275fac})}return i})();var xi=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=ns$1({type:i});static \u0275inj=Ir$1({providers:[fr],imports:[st$1,dn,fi,fi]})}return i})();var Fo=["*",[["","progressIndicator",""]]],Po=["*","[progressIndicator]"];function Lo(i,a){i&1&&(Cu(0,"div",1),ew(1,1),Tu());}var No=new C$1("MAT_BUTTON_CONFIG");function _r(i){return i==null?void 0:_L(i)}var wi=(()=>{class i{_elementRef=y(qn$1);_ngZone=y(ee);_animationsDisabled=ve();_config=y(No,{optional:true});_focusMonitor=y(tt);_cleanupClick;_renderer=y(Zp);_rippleLoader=y($a);_isAnchor;_isFab=false;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled();}_disableRipple=false;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled();}_disabled=false;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e;}showProgress=IL(false,{transform:bL});constructor(){y(ct$1).load(an);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??false,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"});}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,true),this._isAnchor&&this._setupAsAnchor();}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement);}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t);}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?true:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:true}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled);}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation());}));}static \u0275fac=function(t){return new(t||i)};static \u0275dir=mu({type:i,hostAttrs:[1,"mat-mdc-button-base"],hostVars:15,hostBindings:function(t,n){t&2&&(Ah("disabled",n._getDisabledAttribute())("aria-disabled",n._getAriaDisabled())("tabindex",n._getTabIndex()),mw(n.color?"mat-"+n.color:""),qh("mat-mdc-button-progress-indicator-shown",n.showProgress())("mat-mdc-button-disabled",n.disabled)("mat-mdc-button-disabled-interactive",n.disabledInteractive)("mat-unthemed",!n.color)("_mat-animation-noopable",n._animationsDisabled));},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",bL],disabled:[2,"disabled","disabled",bL],ariaDisabled:[2,"aria-disabled","ariaDisabled",bL],disabledInteractive:[2,"disabledInteractive","disabledInteractive",bL],tabIndex:[2,"tabIndex","tabIndex",_r],_tabindex:[2,"tabindex","_tabindex",_r],showProgress:[1,"showProgress"]}})}return i})(),bn=(()=>{class i extends wi{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:true});}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=KE({type:i,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[Eh],ngContentSelectors:Po,decls:5,vars:1,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,n){t&1&&(JI(Fo),Oh(0,"span",0),ew(1),VI(2,Lo,2,0,"div",1),Oh(3,"span",2)(4,"span",3)),t&2&&(wD(2),HI(n.showProgress()?2:-1));},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__determinate-circle-graphic {
  width: inherit;
  height: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__indeterminate-circle-graphic {
  height: 100%;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return i})();var Vo=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]],[["","progressIndicator",""]]],Bo=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]","[progressIndicator]"];function zo(i,a){i&1&&(Cu(0,"div",2),ew(1,3),Tu());}var gr=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Di=(()=>{class i extends wi{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text");}_appearance=null;constructor(){super();let e=Ho(this._elementRef.nativeElement);e&&this.setAppearance(e);}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,n=this._appearance?gr.get(this._appearance):null,r=gr.get(e);n&&t.remove(...n),t.add(...r),this._appearance=e;}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=KE({type:i,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Eh],ngContentSelectors:Bo,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,n){t&1&&(JI(Vo),Oh(0,"span",0),ew(1),Cu(2,"span",1),ew(3,1),Tu(),ew(4,2),VI(5,zo,2,0,"div",2),Oh(6,"span",3)(7,"span",4)),t&2&&(qh("mdc-button__ripple",!n._isFab)("mdc-fab__ripple",n._isFab),wD(5),HI(n.showProgress()?5:-1));},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --mat-progress-spinner-active-indicator-color: var(--mat-button-filled-progress-active-indicator-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return i})();function Ho(i){return i.hasAttribute("mat-raised-button")?"elevated":i.hasAttribute("mat-stroked-button")?"outlined":i.hasAttribute("mat-flat-button")?"filled":i.hasAttribute("mat-button")?"text":null}var br=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=ns$1({type:i});static \u0275inj=Ir$1({imports:[qa,st$1]})}return i})();var Yo=["tooltip"],jo=20;var Wo=new C$1("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let i=y(pe$1);return ()=>st(i,{scrollThrottle:jo})}}),Uo=new C$1("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var vr="tooltip-panel",Xo={passive:true},Go=8,Zo=8,qo=24,Ko=200,yr=(()=>{class i{_elementRef=y(qn$1);_ngZone=y(ee);_platform=y(C);_ariaDescriber=y(za);_focusMonitor=y(tt);_dir=y(gt);_injector=y(pe$1);_viewContainerRef=y(Xn);_mediaMatcher=y($e);_document=y(z);_renderer=y(Zp);_animationsDisabled=ve();_defaultOptions=y(Uo,{optional:true});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=false;_disabled=false;_tooltipClass;_viewInitialized=false;_pointerExitEventsInitialized=false;_tooltipComponent=$o;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=false;_dirSubscribed=false;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()));}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=Re(e),this._detach(),this._overlayRef=null;}get disabled(){return this._disabled}set disabled(e){let t=Re(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message));}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=et(e);}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=et(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay);}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t);}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass);}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new ne;_isDestroyed=false;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=Go;}ngAfterViewInit(){this._viewInitialized=true,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(Rm(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0));});}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=true,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e);}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let n=this._createOverlay(t);this._detach(),this._portal=this._portal||new ze(this._tooltipComponent,this._viewContainerRef);let r=this._tooltipInstance=n.attach(this._portal).instance;r._triggerElement=this._elementRef.nativeElement,r._mouseLeaveHideDelay=this._hideDelay,r.afterHidden().pipe(Rm(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),r.show(e);}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()));}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e);}_isTooltipVisible(){return !!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let o=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&o._origin instanceof qn$1)return this._overlayRef;this._detach();}let t=this._injector.get(it).getAncestorScrollContainers(this._elementRef),n=`${this._cssClassPrefix}-${vr}`,r=lt(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(false).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation("global");return r.positionChanges.pipe(Rm(this._destroyed)).subscribe(o=>{this._updateCurrentPositionClass(o.connectionPair),this._tooltipInstance&&o.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0));}),this._overlayRef=dt(this._injector,{direction:this._dir,positionStrategy:r,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,n]:n,scrollStrategy:this._injector.get(Wo)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(Rm(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(Rm(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(Rm(this._destroyed)).subscribe(o=>{o.preventDefault(),o.stopPropagation(),this._ngZone.run(()=>this.hide(0));}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=true,this._dir.change.pipe(Rm(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef);})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null;}_updatePosition(e){let t=e.getConfig().positionStrategy,n=this._getOrigin(),r=this._getOverlayPosition();t.withPositions([this._addOffset(B$1(B$1({},n.main),r.main)),this._addOffset(B$1(B$1({},n.fallback),r.fallback))]);}_addOffset(e){let t=Zo,n=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-t:e.originY==="bottom"?e.offsetY=t:e.originX==="start"?e.offsetX=n?-t:t:e.originX==="end"&&(e.offsetX=n?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",t=this.position,n;t=="above"||t=="below"?n={originX:"center",originY:t=="above"?"top":"bottom"}:t=="before"||t=="left"&&e||t=="right"&&!e?n={originX:"start",originY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(n={originX:"end",originY:"center"});let{x:r,y:o}=this._invertPosition(n.originX,n.originY);return {main:n,fallback:{originX:r,originY:o}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",t=this.position,n;t=="above"?n={overlayX:"center",overlayY:"bottom"}:t=="below"?n={overlayX:"center",overlayY:"top"}:t=="before"||t=="left"&&e||t=="right"&&!e?n={overlayX:"end",overlayY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(n={overlayX:"start",overlayY:"center"});let{x:r,y:o}=this._invertPosition(n.overlayX,n.overlayY);return {main:n,fallback:{overlayX:r,overlayY:o}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Xv(()=>{this._tooltipInstance&&this._overlayRef.updatePosition();},{injector:this._injector}));}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck());}_invertPosition(e,t){return this.position==="above"||this.position==="below"?t==="top"?t="bottom":t==="bottom"&&(t="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:n,originY:r}=e,o;if(t==="center"?this._dir&&this._dir.value==="rtl"?o=n==="end"?"left":"right":o=n==="start"?"left":"right":o=t==="bottom"&&r==="top"?"above":"below",o!==this._currentPosition){let l=this._overlayRef;if(l){let c=`${this._cssClassPrefix}-${vr}-`;l.removePanelClass(c+this._currentPosition),l.addPanelClass(c+o);}this._currentPosition=o;}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let t=e.targetTouches?.[0],n=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let r=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,n);},this._defaultOptions?.touchLongPressShowDelay??r);})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t);}));}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=true,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide();}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),n=this._elementRef.nativeElement;t!==n&&!n.contains(t)&&this.hide();}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay);};this._addListener("touchend",e),this._addListener("touchcancel",e);}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,Xo));}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?true:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:false}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let t=this._elementRef.nativeElement,n=t.style;(e==="on"||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA")&&(n.userSelect=n.msUserSelect=n.webkitUserSelect=n.MozUserSelect="none"),(e==="on"||!t.draggable)&&(n.webkitUserDrag="none"),n.touchAction="none",n.webkitTapHighlightColor="transparent";}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=true,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||Xv({write:()=>{this._ariaDescriptionPending=false,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip");}},{injector:this._injector}));}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!Ae(e):true;static \u0275fac=function(t){return new(t||i)};static \u0275dir=mu({type:i,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(t,n){t&2&&qh("mat-mdc-tooltip-disabled",n.disabled);},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return i})(),$o=(()=>{class i{_changeDetectorRef=y(hC);_elementRef=y(qn$1);_isMultiline=false;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=ve();_tooltip;_closeOnInteraction=false;_isVisible=false;_onHide=new ne;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(true),this._showTimeoutId=void 0;},e);}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(false),this._hideTimeoutId=void 0;},e);}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null;}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0);}_markForCheck(){this._changeDetectorRef.markForCheck();}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(false));}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck();}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>qo&&e.width>=Ko}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation);}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0;}_finalizeAnimation(e){e?this._closeOnInteraction=true:this.isVisible()||this._onHide.next();}_toggleVisibility(e){let t=this._tooltip.nativeElement,n=this._showAnimation,r=this._hideAnimation;if(t.classList.remove(e?r:n),t.classList.add(e?n:r),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let o=getComputedStyle(t);(o.getPropertyValue("animation-duration")==="0s"||o.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=true);}e&&this._onShow(),this._animationsDisabled&&(t.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e));}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=KE({type:i,selectors:[["mat-tooltip-component"]],viewQuery:function(t,n){if(t&1&&Hh(Yo,7),t&2){let r;nw(r=rw())&&(n._tooltip=r.first);}},hostAttrs:["aria-hidden","true"],hostBindings:function(t,n){t&1&&Lh("mouseleave",function(o){return n._handleMouseLeave(o)});},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(t,n){t&1&&(Cu(0,"div",1,0),jh("animationend",function(o){return n._handleAnimationEnd(o)}),Cu(2,"div",2),Sw(3),Tu()()),t&2&&(mw(n.tooltipClass),qh("mdc-tooltip--multiline",n._isMultiline),wD(3),Jh(n.message));},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2})}return i})();var yn=new C$1("MAT_INPUT_VALUE_ACCESSOR");var Ci=class{_box;_destroyed=new ne;_resizeSubject=new ne;_resizeObserver;_elementObservables=new Map;constructor(a){this._box=a,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)));}observe(a){return this._elementObservables.has(a)||this._elementObservables.set(a,new x(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(a,{box:this._box}),()=>{this._resizeObserver?.unobserve(a),t.unsubscribe(),this._elementObservables.delete(a);}}).pipe(ht$1(e=>e.some(t=>t.target===a)),Am({bufferSize:1,refCount:true}),Rm(this._destroyed))),this._elementObservables.get(a)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear();}},xr=(()=>{class i{_cleanupErrorListener;_observers=new Map;_ngZone=y(ee);constructor(){}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.();}observe(e,t){let n=t?.box||"content-box";return this._observers.has(n)||this._observers.set(n,new Ci(n)),this._observers.get(n).observe(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=We$1({token:i,factory:i.\u0275fac})}return i})();var Qo=["notch"],Jo=["*"],wr=["iconPrefixContainer"],Dr=["textPrefixContainer"],Cr=["iconSuffixContainer"],Er=["textSuffixContainer"],es=["textField"],ts=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],ns=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function is(i,a){i&1&&Rh(0,"span",21);}function as(i,a){if(i&1&&($i(0,"label",20),ew(1,1),VI(2,is,1,0,"span",21),wu()),i&2){let e=KI(2);xh("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),Ah("for",e._control.disableAutomaticLabeling?null:e._control.id),wD(2),HI(!e.hideRequiredMarker&&e._control.required?2:-1);}}function rs(i,a){if(i&1&&VI(0,as,3,5,"label",20),i&2){let e=KI();HI(e._hasFloatingLabel()?0:-1);}}function os(i,a){i&1&&Rh(0,"div",7);}function ss(i,a){}function ls(i,a){if(i&1&&wh(0,ss,0,0,"ng-template",13),i&2){KI(2);let e=iw(1);xh("ngTemplateOutlet",e);}}function ds(i,a){if(i&1&&($i(0,"div",9),VI(1,ls,1,1,null,13),wu()),i&2){let e=KI();xh("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),wD(),HI(e._forceDisplayInfixLabel()?-1:1);}}function cs(i,a){i&1&&($i(0,"div",10,2),ew(2,2),wu());}function ms(i,a){i&1&&($i(0,"div",11,3),ew(2,3),wu());}function us(i,a){}function hs(i,a){if(i&1&&wh(0,us,0,0,"ng-template",13),i&2){KI();let e=iw(1);xh("ngTemplateOutlet",e);}}function ps(i,a){i&1&&($i(0,"div",14,4),ew(2,4),wu());}function fs(i,a){i&1&&($i(0,"div",15,5),ew(2,5),wu());}function _s(i,a){i&1&&Rh(0,"div",16);}function gs(i,a){i&1&&($i(0,"div",18),ew(1,6),wu());}function bs(i,a){if(i&1&&($i(0,"mat-hint",22),Sw(1),wu()),i&2){let e=KI(2);xh("id",e._hintLabelId),wD(),Jh(e.hintLabel);}}function vs(i,a){if(i&1&&($i(0,"div",19),VI(1,bs,2,2,"mat-hint",22),ew(2,7),Rh(3,"div",23),ew(4,8),wu()),i&2){let e=KI();wD(),HI(e.hintLabel?1:-1);}}var Ei=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=mu({type:i,selectors:[["mat-label"]]})}return i})(),ys=new C$1("MatError");var Si=(()=>{class i{align="start";id=y(de).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||i)};static \u0275dir=mu({type:i,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,n){t&2&&(Fh("id",n.id),Ah("align",null),qh("mat-mdc-form-field-hint-end",n.align==="end"));},inputs:{align:"align",id:"id"}})}return i})(),Or=new C$1("MatPrefix"),Mi=(()=>{class i{set _isTextSelector(e){this._isText=true;}_isText=false;static \u0275fac=function(t){return new(t||i)};static \u0275dir=mu({type:i,selectors:[["","matPrefix",""],["","matIconPrefix",""],["","matTextPrefix",""]],inputs:{_isTextSelector:[0,"matTextPrefix","_isTextSelector"]},features:[Fw([{provide:Or,useExisting:i}])]})}return i})(),Ir=new C$1("MatSuffix"),ki=(()=>{class i{set _isTextSelector(e){this._isText=true;}_isText=false;static \u0275fac=function(t){return new(t||i)};static \u0275dir=mu({type:i,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[Fw([{provide:Ir,useExisting:i}])]})}return i})(),Fr=new C$1("FloatingLabelParent"),Sr=(()=>{class i{_elementRef=y(qn$1);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize();}_floating=false;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe();}_monitorResize=false;_resizeObserver=y(xr);_ngZone=y(ee);_parent=y(Fr);_resizeSubscription=new Y$1;ngOnDestroy(){this._resizeSubscription.unsubscribe();}getWidth(){return xs(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized());}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize());});}static \u0275fac=function(t){return new(t||i)};static \u0275dir=mu({type:i,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,n){t&2&&qh("mdc-floating-label--float-above",n.floating);},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return i})();function xs(i){let a=i;if(a.offsetParent!==null)return a.scrollWidth;let e=a.cloneNode(true);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var Mr="mdc-line-ripple--active",xn="mdc-line-ripple--deactivating",kr=(()=>{class i{_elementRef=y(qn$1);_cleanupTransitionEnd;constructor(){let e=y(ee),t=y(Zp);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd);});}activate(){let e=this._elementRef.nativeElement.classList;e.remove(xn),e.add(Mr);}deactivate(){this._elementRef.nativeElement.classList.add(xn);}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,n=t.contains(xn);e.propertyName==="opacity"&&n&&t.remove(Mr,xn);};ngOnDestroy(){this._cleanupTransitionEnd();}static \u0275fac=function(t){return new(t||i)};static \u0275dir=mu({type:i,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return i})(),Ar=(()=>{class i{_elementRef=y(qn$1);_ngZone=y(ee);open=false;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="");}))):e.classList.add("mdc-notched-outline--no-label");}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`;}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`);}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=KE({type:i,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,n){if(t&1&&Hh(Qo,5),t&2){let r;nw(r=rw())&&(n._notch=r.first);}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,n){t&2&&qh("mdc-notched-outline--notched",n.open);},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},ngContentSelectors:Jo,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,n){t&1&&(JI(),Oh(0,"div",1),Cu(1,"div",2,0),ew(3),Tu(),Oh(4,"div",3));},encapsulation:2})}return i})(),wn=(()=>{class i{value=null;stateChanges;id;placeholder;ngControl=null;focused=false;empty=false;shouldLabelFloat=false;required=false;disabled=false;errorState=false;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||i)};static \u0275dir=mu({type:i})}return i})();var Ot=new C$1("MatFormField"),ws=new C$1("MAT_FORM_FIELD_DEFAULT_OPTIONS"),Rr="fill",Ds="auto",Tr="fixed",Cs="translateY(-50%)",Dn=(()=>{class i{_elementRef=y(qn$1);_changeDetectorRef=y(hC);_platform=y(C);_idGenerator=y(de);_ngZone=y(ee);_defaults=y(ws,{optional:true});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=wL("iconPrefixContainer");_textPrefixContainerSignal=wL("textPrefixContainer");_iconSuffixContainerSignal=wL("iconSuffixContainer");_textSuffixContainerSignal=wL("textSuffixContainer");_prefixSuffixContainers=$w(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=CL(Ei);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Re(e);}_hideRequiredMarker=false;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Ds}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck());}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||Rr;this._appearanceSignal.set(t);}_appearanceSignal=fi$1(Rr);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Tr}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Tr;}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints();}_hintLabel="";_hasIconPrefix=false;_hasTextPrefix=false;_hasIconSuffix=false;_hasTextSuffix=false;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e;}_destroyed=new ne;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=ve();constructor(){let e=this._defaults,t=y(gt);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Fd(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset();}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled");},300);}),this._changeDetectorRef.detectChanges();}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix();}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck();}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete();}getLabelId=$w(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always");}_initializeControl(e){let t=this._control,n="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(n+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(n+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck();}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(ml$1([void 0,void 0]),le$2(()=>[t.errorState,t.userAriaDescribedBy]),Nm(),ht$1(([[r,o],[l,c]])=>r!==l||o!==c)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(Rm(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()));}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText);}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Im(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck();});}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck();}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck();}),this._validateHints(),this._syncDescribedByIds();}_assertFormFieldControl(){this._control;}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=true,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=false,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e);}_syncOutlineLabelOffset(){SL({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset());});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"});}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())});}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return !this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=$w(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():false}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth();}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth());}_processHints(){this._validateHints(),this._syncDescribedByIds();}_validateHints(){this._hintChildren;}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let r=this._hintChildren?this._hintChildren.find(l=>l.align==="start"):null,o=this._hintChildren?this._hintChildren.find(l=>l.align==="end"):null;r?e.push(r.id):this._hintLabel&&e.push(this._hintLabelId),o&&e.push(o.id);}else this._errorChildren&&e.push(...this._errorChildren.map(r=>r.id));let t=this._control.describedByIds,n;if(t){let r=this._describedByIds||e;n=e.concat(t.filter(o=>o&&!r.includes(o)));}else n=e;this._control.setDescribedByIds(n),this._describedByIds=e;}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return ["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,n=this._iconSuffixContainer?.nativeElement,r=this._textSuffixContainer?.nativeElement,o=e?.getBoundingClientRect().width??0,l=t?.getBoundingClientRect().width??0,c=n?.getBoundingClientRect().width??0,p=r?.getBoundingClientRect().width??0,u=this._currentDirection==="rtl"?"-1":"1",w=`${o+l}px`,$=`calc(${u} * (${w} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,X=`var(--mat-mdc-form-field-label-transform, ${Cs} translateX(${$}))`,j=o+l+c+p;return [X,j]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,n]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),n!==null&&this._notchedOutline?._setMaxWidth(n);}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=KE({type:i,selectors:[["mat-form-field"]],contentQueries:function(t,n,r){if(t&1&&(Uh(r,n._labelChild,Ei,5),Vh(r,wn,5)(r,Or,5)(r,Ir,5)(r,ys,5)(r,Si,5)),t&2){ow();let o;nw(o=rw())&&(n._formFieldControl=o.first),nw(o=rw())&&(n._prefixChildren=o),nw(o=rw())&&(n._suffixChildren=o),nw(o=rw())&&(n._errorChildren=o),nw(o=rw())&&(n._hintChildren=o);}},viewQuery:function(t,n){if(t&1&&($h(n._iconPrefixContainerSignal,wr,5)(n._textPrefixContainerSignal,Dr,5)(n._iconSuffixContainerSignal,Cr,5)(n._textSuffixContainerSignal,Er,5),Hh(es,5)(wr,5)(Dr,5)(Cr,5)(Er,5)(Sr,5)(Ar,5)(kr,5)),t&2){ow(4);let r;nw(r=rw())&&(n._textField=r.first),nw(r=rw())&&(n._iconPrefixContainer=r.first),nw(r=rw())&&(n._textPrefixContainer=r.first),nw(r=rw())&&(n._iconSuffixContainer=r.first),nw(r=rw())&&(n._textSuffixContainer=r.first),nw(r=rw())&&(n._floatingLabel=r.first),nw(r=rw())&&(n._notchedOutline=r.first),nw(r=rw())&&(n._lineRipple=r.first);}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,n){t&2&&qh("mat-mdc-form-field-label-always-float",n._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",n._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",n._hasIconSuffix)("mat-form-field-invalid",n._control.errorState)("mat-form-field-disabled",n._control.disabled)("mat-form-field-autofilled",n._control.autofilled)("mat-form-field-appearance-fill",n.appearance=="fill")("mat-form-field-appearance-outline",n.appearance=="outline")("mat-form-field-hide-placeholder",n._hasFloatingLabel()&&!n._shouldLabelFloat())("mat-primary",n.color!=="accent"&&n.color!=="warn")("mat-accent",n.color==="accent")("mat-warn",n.color==="warn")("ng-untouched",n._shouldForward("untouched"))("ng-touched",n._shouldForward("touched"))("ng-pristine",n._shouldForward("pristine"))("ng-dirty",n._shouldForward("dirty"))("ng-valid",n._shouldForward("valid"))("ng-invalid",n._shouldForward("invalid"))("ng-pending",n._shouldForward("pending"));},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Fw([{provide:Ot,useExisting:i},{provide:Fr,useExisting:i}])],ngContentSelectors:ns,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,n){if(t&1&&(JI(ts),wh(0,rs,1,1,"ng-template",null,0,Vw),$i(2,"div",6,1),Lh("click",function(o){return n._control.onContainerClick(o)}),VI(4,os,1,0,"div",7),$i(5,"div",8),VI(6,ds,2,2,"div",9),VI(7,cs,3,0,"div",10),VI(8,ms,3,0,"div",11),$i(9,"div",12),VI(10,hs,1,1,null,13),ew(11),wu(),VI(12,ps,3,0,"div",14),VI(13,fs,3,0,"div",15),wu(),VI(14,_s,1,0,"div",16),wu(),$i(15,"div",17),VI(16,gs,2,0,"div",18)(17,vs,5,1,"div",19),wu()),t&2){let r;wD(2),qh("mdc-text-field--filled",!n._hasOutline())("mdc-text-field--outlined",n._hasOutline())("mdc-text-field--no-label",!n._hasFloatingLabel())("mdc-text-field--disabled",n._control.disabled)("mdc-text-field--invalid",n._control.errorState),wD(2),HI(!n._hasOutline()&&!n._control.disabled?4:-1),wD(2),HI(n._hasOutline()?6:-1),wD(),HI(n._hasIconPrefix?7:-1),wD(),HI(n._hasTextPrefix?8:-1),wD(2),HI(!n._hasOutline()||n._forceDisplayInfixLabel()?10:-1),wD(2),HI(n._hasTextSuffix?12:-1),wD(),HI(n._hasIconSuffix?13:-1),wD(),HI(n._hasOutline()?-1:14),wD(),qh("mat-mdc-form-field-subscript-dynamic-size",n.subscriptSizing==="dynamic");let o=n._getSubscriptMessageType();wD(),HI((r=o)==="error"?16:r==="hint"?17:-1);}},dependencies:[Sr,Ar,AC,kr,Si],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2})}return i})();function Es(i,a){return this._trackRow(a)}var Hr=(i,a)=>a.id;function Ss(i,a){if(i&1&&(Cu(0,"tr",0)(1,"td",3),Sw(2),Tu()()),i&2){let e=KI();wD(),Wh("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),Ah("colspan",e.numCols),wD(),bu(" ",e.label," ");}}function Ms(i,a){if(i&1&&(Cu(0,"td",3),Sw(1),Tu()),i&2){let e=KI(2);Wh("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),Ah("colspan",e._firstRowOffset),wD(),bu(" ",e._firstRowOffset>=e.labelMinRequiredCells?e.label:""," ");}}function ks(i,a){if(i&1){let e=YI();Cu(0,"td",6)(1,"button",7),jh("click",function(n){let r=pd(e).$implicit,o=KI(2);return hd(o._cellClicked(r,n))})("focus",function(n){let r=pd(e).$implicit,o=KI(2);return hd(o._emitActiveDateChange(r,n))}),Cu(2,"span",8),Sw(3),Tu(),Oh(4,"span",9),Tu()();}if(i&2){let e=a.$implicit,t=a.$index,n=KI().$index,r=KI();Wh("width",r._cellWidth)("padding-top",r._cellPadding)("padding-bottom",r._cellPadding),Ah("data-mat-row",n)("data-mat-col",t),wD(),mw(e.cssClasses),qh("mat-calendar-body-disabled",!e.enabled)("mat-calendar-body-active",r._isActiveCell(n,t))("mat-calendar-body-range-start",r._isRangeStart(e.compareValue))("mat-calendar-body-range-end",r._isRangeEnd(e.compareValue))("mat-calendar-body-in-range",r._isInRange(e.compareValue))("mat-calendar-body-comparison-bridge-start",r._isComparisonBridgeStart(e.compareValue,n,t))("mat-calendar-body-comparison-bridge-end",r._isComparisonBridgeEnd(e.compareValue,n,t))("mat-calendar-body-comparison-start",r._isComparisonStart(e.compareValue))("mat-calendar-body-comparison-end",r._isComparisonEnd(e.compareValue))("mat-calendar-body-in-comparison-range",r._isInComparisonRange(e.compareValue))("mat-calendar-body-preview-start",r._isPreviewStart(e.compareValue))("mat-calendar-body-preview-end",r._isPreviewEnd(e.compareValue))("mat-calendar-body-in-preview",r._isInPreview(e.compareValue)),Fh("tabIndex",r._isActiveCell(n,t)?0:-1),Ah("aria-label",e.ariaLabel)("aria-disabled",!e.enabled||null)("aria-pressed",r._isSelected(e.compareValue))("aria-current",r.todayValue===e.compareValue?"date":null)("aria-describedby",r._getDescribedby(e.compareValue)),wD(),qh("mat-calendar-body-selected",r._isSelected(e.compareValue))("mat-calendar-body-comparison-identical",r._isComparisonIdentical(e.compareValue))("mat-calendar-body-today",r.todayValue===e.compareValue),wD(),bu(" ",e.displayValue," ");}}function As(i,a){if(i&1&&(Cu(0,"tr",1),VI(1,Ms,2,6,"td",4),$I(2,ks,5,49,"td",5,Hr),Tu()),i&2){let e=a.$implicit,t=a.$index,n=KI();wD(),HI(t===0&&n._firstRowOffset?1:-1),wD(),zI(e);}}function Rs(i,a){if(i&1&&($i(0,"th",2)(1,"span",6),Sw(2),wu(),$i(3,"span",3),Sw(4),wu()()),i&2){let e=a.$implicit;wD(2),Jh(e.long),wD(2),Jh(e.narrow);}}var Ts=["*"];function Os(i,a){}function Is(i,a){if(i&1){let e=YI();$i(0,"mat-month-view",4),rg("activeDateChange",function(n){pd(e);let r=KI();return xw(r.activeDate,n)||(r.activeDate=n),hd(n)}),Lh("_userSelection",function(n){pd(e);let r=KI();return hd(r._dateSelected(n))})("dragStarted",function(n){pd(e);let r=KI();return hd(r._dragStarted(n))})("dragEnded",function(n){pd(e);let r=KI();return hd(r._dragEnded(n))}),wu();}if(i&2){let e=KI();ng("activeDate",e.activeDate),xh("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)("comparisonStart",e.comparisonStart)("comparisonEnd",e.comparisonEnd)("startDateAccessibleName",e.startDateAccessibleName)("endDateAccessibleName",e.endDateAccessibleName)("activeDrag",e._activeDrag);}}function Fs(i,a){if(i&1){let e=YI();$i(0,"mat-year-view",5),rg("activeDateChange",function(n){pd(e);let r=KI();return xw(r.activeDate,n)||(r.activeDate=n),hd(n)}),Lh("monthSelected",function(n){pd(e);let r=KI();return hd(r._monthSelectedInYearView(n))})("selectedChange",function(n){pd(e);let r=KI();return hd(r._goToDateInView(n,"month"))}),wu();}if(i&2){let e=KI();ng("activeDate",e.activeDate),xh("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass);}}function Ps(i,a){if(i&1){let e=YI();$i(0,"mat-multi-year-view",6),rg("activeDateChange",function(n){pd(e);let r=KI();return xw(r.activeDate,n)||(r.activeDate=n),hd(n)}),Lh("yearSelected",function(n){pd(e);let r=KI();return hd(r._yearSelectedInMultiYearView(n))})("selectedChange",function(n){pd(e);let r=KI();return hd(r._goToDateInView(n,"year"))}),wu();}if(i&2){let e=KI();ng("activeDate",e.activeDate),xh("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass);}}function Ls(i,a){}var Ns=["button"],Vs=[[["","matDatepickerToggleIcon",""]]],Bs=["[matDatepickerToggleIcon]"];function zs(i,a){i&1&&(Sd(),$i(0,"svg",2),Rh(1,"path",3),wu());}var pt=(()=>{class i{changes=new ne;calendarLabel="Calendar";openCalendarLabel="Open calendar";closeCalendarLabel="Close calendar";prevMonthLabel="Previous month";nextMonthLabel="Next month";prevYearLabel="Previous year";nextYearLabel="Next year";prevMultiYearLabel="Previous 24 years";nextMultiYearLabel="Next 24 years";switchToMonthViewLabel="Choose date";switchToMultiYearViewLabel="Choose month and year";startDateLabel="Start date";endDateLabel="End date";comparisonDateLabel="Comparison range";formatYearRange(e,t){return `${e} \u2013 ${t}`}formatYearRangeLabel(e,t){return `${e} to ${t}`}static \u0275fac=function(t){return new(t||i)};static \u0275prov=We$1({token:i,factory:i.\u0275fac})}return i})(),Hs=0,Pt=class{value;displayValue;ariaLabel;enabled;compareValue;rawValue;id=Hs++;cssClasses;constructor(a,e,t,n,r,o=a,l){this.value=a,this.displayValue=e,this.ariaLabel=t,this.enabled=n,this.compareValue=o,this.rawValue=l,this.cssClasses=r instanceof Set?Array.from(r):r;}},Ys={passive:false,capture:true},Cn={passive:true,capture:true},Pr={passive:true},ht=(()=>{class i{_elementRef=y(qn$1);_ngZone=y(ee);_platform=y(C);_intl=y(pt);_eventCleanups;_skipNextFocus=false;_focusActiveCellAfterViewChecked=false;label;rows;todayValue;startValue;endValue;labelMinRequiredCells;numCols=7;activeCell=0;ngAfterViewChecked(){this._focusActiveCellAfterViewChecked&&(this._focusActiveCell(),this._focusActiveCellAfterViewChecked=false);}isRange=false;cellAspectRatio=1;comparisonStart=null;comparisonEnd=null;previewStart=null;previewEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedValueChange=new Xe;previewChange=new Xe;activeDateChange=new Xe;dragStarted=new Xe;dragEnded=new Xe;_firstRowOffset;_cellPadding;_cellWidth;_startDateLabelId;_endDateLabelId;_comparisonStartDateLabelId;_comparisonEndDateLabelId;_didDragSinceMouseDown=false;_injector=y(pe$1);comparisonDateAccessibleName=this._intl.comparisonDateLabel;_trackRow=e=>e;constructor(){let e=y(Zp),t=y(de);this._startDateLabelId=t.getId("mat-calendar-body-start-"),this._endDateLabelId=t.getId("mat-calendar-body-end-"),this._comparisonStartDateLabelId=t.getId("mat-calendar-body-comparison-start-"),this._comparisonEndDateLabelId=t.getId("mat-calendar-body-comparison-end-"),y(ct$1).load(an),this._ngZone.runOutsideAngular(()=>{let n=this._elementRef.nativeElement,r=[e.listen(n,"touchmove",this._touchmoveHandler,Ys),e.listen(n,"mouseenter",this._enterHandler,Cn),e.listen(n,"focus",this._enterHandler,Cn),e.listen(n,"mouseleave",this._leaveHandler,Cn),e.listen(n,"blur",this._leaveHandler,Cn),e.listen(n,"mousedown",this._mousedownHandler,Pr),e.listen(n,"touchstart",this._mousedownHandler,Pr)];this._platform.isBrowser&&r.push(e.listen("window","mouseup",this._mouseupHandler),e.listen("window","touchend",this._touchendHandler)),this._eventCleanups=r;});}_cellClicked(e,t){this._didDragSinceMouseDown||e.enabled&&this.selectedValueChange.emit({value:e.value,event:t});}_emitActiveDateChange(e,t){e.enabled&&this.activeDateChange.emit({value:e.value,event:t});}_isSelected(e){return this.startValue===e||this.endValue===e}ngOnChanges(e){let t=e.numCols,{rows:n,numCols:r}=this;(e.rows||t)&&(this._firstRowOffset=n&&n.length&&n[0].length?r-n[0].length:0),(e.cellAspectRatio||t||!this._cellPadding)&&(this._cellPadding=`${50*this.cellAspectRatio/r}%`),(t||!this._cellWidth)&&(this._cellWidth=`${100/r}%`);}ngOnDestroy(){this._eventCleanups.forEach(e=>e());}_isActiveCell(e,t){let n=e*this.numCols+t;return e&&(n-=this._firstRowOffset),n==this.activeCell}_focusActiveCell(e=true){Xv(()=>{setTimeout(()=>{let t=this._elementRef.nativeElement.querySelector(".mat-calendar-body-active");t&&(e||(this._skipNextFocus=true),t.focus());});},{injector:this._injector});}_scheduleFocusActiveCellAfterViewChecked(){this._focusActiveCellAfterViewChecked=true;}_isRangeStart(e){return Ti(e,this.startValue,this.endValue)}_isRangeEnd(e){return Oi(e,this.startValue,this.endValue)}_isInRange(e){return Ii(e,this.startValue,this.endValue,this.isRange)}_isComparisonStart(e){return Ti(e,this.comparisonStart,this.comparisonEnd)}_isComparisonBridgeStart(e,t,n){if(!this._isComparisonStart(e)||this._isRangeStart(e)||!this._isInRange(e))return  false;let r=this.rows[t][n-1];if(!r){let o=this.rows[t-1];r=o&&o[o.length-1];}return r&&!this._isRangeEnd(r.compareValue)}_isComparisonBridgeEnd(e,t,n){if(!this._isComparisonEnd(e)||this._isRangeEnd(e)||!this._isInRange(e))return  false;let r=this.rows[t][n+1];if(!r){let o=this.rows[t+1];r=o&&o[0];}return r&&!this._isRangeStart(r.compareValue)}_isComparisonEnd(e){return Oi(e,this.comparisonStart,this.comparisonEnd)}_isInComparisonRange(e){return Ii(e,this.comparisonStart,this.comparisonEnd,this.isRange)}_isComparisonIdentical(e){return this.comparisonStart===this.comparisonEnd&&e===this.comparisonStart}_isPreviewStart(e){return Ti(e,this.previewStart,this.previewEnd)}_isPreviewEnd(e){return Oi(e,this.previewStart,this.previewEnd)}_isInPreview(e){return Ii(e,this.previewStart,this.previewEnd,this.isRange)}_getDescribedby(e){if(!this.isRange)return null;if(this.startValue===e&&this.endValue===e)return `${this._startDateLabelId} ${this._endDateLabelId}`;if(this.startValue===e)return this._startDateLabelId;if(this.endValue===e)return this._endDateLabelId;if(this.comparisonStart!==null&&this.comparisonEnd!==null){if(e===this.comparisonStart&&e===this.comparisonEnd)return `${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;if(e===this.comparisonStart)return this._comparisonStartDateLabelId;if(e===this.comparisonEnd)return this._comparisonEndDateLabelId}return null}_enterHandler=e=>{if(this._skipNextFocus&&e.type==="focus"){this._skipNextFocus=false;return}if(e.target&&this.isRange){let t=this._getCellFromElement(e.target);t&&this._ngZone.run(()=>this.previewChange.emit({value:t.enabled?t:null,event:e}));}};_touchmoveHandler=e=>{if(!this.isRange)return;let t=Lr(e),n=t?this._getCellFromElement(t):null;t!==e.target&&(this._didDragSinceMouseDown=true),Ri(e.target)&&e.preventDefault(),this._ngZone.run(()=>this.previewChange.emit({value:n?.enabled?n:null,event:e}));};_leaveHandler=e=>{this.previewEnd!==null&&this.isRange&&(e.type!=="blur"&&(this._didDragSinceMouseDown=true),e.target&&this._getCellFromElement(e.target)&&!(e.relatedTarget&&this._getCellFromElement(e.relatedTarget))&&this._ngZone.run(()=>this.previewChange.emit({value:null,event:e})));};_mousedownHandler=e=>{if(!this.isRange)return;this._didDragSinceMouseDown=false;let t=e.target&&this._getCellFromElement(e.target);!t||!this._isInRange(t.compareValue)||this._ngZone.run(()=>{this.dragStarted.emit({value:t.rawValue,event:e});});};_mouseupHandler=e=>{if(!this.isRange)return;let t=Ri(e.target);if(!t){this._ngZone.run(()=>{this.dragEnded.emit({value:null,event:e});});return}t.closest(".mat-calendar-body")===this._elementRef.nativeElement&&this._ngZone.run(()=>{let n=this._getCellFromElement(t);this.dragEnded.emit({value:n?.rawValue??null,event:e});});};_touchendHandler=e=>{let t=Lr(e);t&&this._mouseupHandler({target:t});};_getCellFromElement(e){let t=Ri(e);if(t){let n=t.getAttribute("data-mat-row"),r=t.getAttribute("data-mat-col");if(n&&r)return this.rows[parseInt(n)]?.[parseInt(r)]||null}return null}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=KE({type:i,selectors:[["","mat-calendar-body",""]],hostAttrs:[1,"mat-calendar-body"],inputs:{label:"label",rows:"rows",todayValue:"todayValue",startValue:"startValue",endValue:"endValue",labelMinRequiredCells:"labelMinRequiredCells",numCols:"numCols",activeCell:"activeCell",isRange:"isRange",cellAspectRatio:"cellAspectRatio",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",previewStart:"previewStart",previewEnd:"previewEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedValueChange:"selectedValueChange",previewChange:"previewChange",activeDateChange:"activeDateChange",dragStarted:"dragStarted",dragEnded:"dragEnded"},exportAs:["matCalendarBody"],features:[Rc],decls:11,vars:11,consts:[["aria-hidden","true"],["role","row"],[1,"mat-calendar-body-hidden-label",3,"id"],[1,"mat-calendar-body-label"],[1,"mat-calendar-body-label",3,"paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container",3,"width","paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container"],["type","button",1,"mat-calendar-body-cell",3,"click","focus","tabindex"],[1,"mat-calendar-body-cell-content","mat-focus-indicator"],["aria-hidden","true",1,"mat-calendar-body-cell-preview"]],template:function(t,n){t&1&&(VI(0,Ss,3,6,"tr",0),$I(1,As,4,1,"tr",1,Es,true),Cu(3,"span",2),Sw(4),Tu(),Cu(5,"span",2),Sw(6),Tu(),Cu(7,"span",2),Sw(8),Tu(),Cu(9,"span",2),Sw(10),Tu()),t&2&&(HI(n._firstRowOffset<n.labelMinRequiredCells?0:-1),wD(),zI(n.rows),wD(2),Fh("id",n._startDateLabelId),wD(),bu(" ",n.startDateAccessibleName,`
`),wD(),Fh("id",n._endDateLabelId),wD(),bu(" ",n.endDateAccessibleName,`
`),wD(),Fh("id",n._comparisonStartDateLabelId),wD(),eg(" ",n.comparisonDateAccessibleName," ",n.startDateAccessibleName,`
`),wD(),Fh("id",n._comparisonEndDateLabelId),wD(),eg(" ",n.comparisonDateAccessibleName," ",n.endDateAccessibleName,`
`));},styles:[`.mat-calendar-body {
  min-width: 224px;
}

.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-label {
  height: 0;
  line-height: 0;
  text-align: start;
  padding-left: 4.7142857143%;
  padding-right: 4.7142857143%;
  font-size: var(--mat-datepicker-calendar-body-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-body-label-text-weight, var(--mat-sys-title-small-weight));
  color: var(--mat-datepicker-calendar-body-label-text-color, var(--mat-sys-on-surface));
}

.mat-calendar-body-hidden-label {
  display: none;
}

.mat-calendar-body-cell-container {
  position: relative;
  height: 0;
  line-height: 0;
}

.mat-calendar-body-cell {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
  text-align: center;
  outline: none;
  margin: 0;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-calendar-body-cell::-moz-focus-inner {
  border: 0;
}

.mat-calendar-body-cell::before,
.mat-calendar-body-cell::after,
.mat-calendar-body-cell-preview {
  content: "";
  position: absolute;
  top: 5%;
  left: 0;
  z-index: 0;
  box-sizing: border-box;
  display: block;
  height: 90%;
  width: 100%;
}

.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-start::after,
.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
.mat-calendar-body-comparison-start::after,
.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 5%;
  width: 95%;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
[dir=rtl] .mat-calendar-body-comparison-start::after,
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 0;
  border-radius: 0;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
.mat-calendar-body-comparison-end::after,
.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
[dir=rtl] .mat-calendar-body-comparison-end::after,
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  left: 5%;
  border-radius: 0;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}

[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after, [dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after {
  width: 90%;
}

.mat-calendar-body-in-preview {
  color: var(--mat-datepicker-calendar-date-preview-state-outline-color, var(--mat-sys-primary));
}
.mat-calendar-body-in-preview .mat-calendar-body-cell-preview {
  border-top: dashed 1px;
  border-bottom: dashed 1px;
}

.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: 0;
  border-right: dashed 1px;
}

.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: 0;
  border-left: dashed 1px;
}

.mat-calendar-body-disabled {
  cursor: default;
}
.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  color: var(--mat-datepicker-calendar-date-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-disabled-state-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-calendar-body-disabled {
    opacity: 0.5;
  }
}

.mat-calendar-body-cell-content {
  top: 5%;
  left: 5%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 90%;
  height: 90%;
  line-height: 1;
  border-width: 1px;
  border-style: solid;
  border-radius: 999px;
  color: var(--mat-datepicker-calendar-date-text-color, var(--mat-sys-on-surface));
  border-color: var(--mat-datepicker-calendar-date-outline-color, transparent);
}
.mat-calendar-body-cell-content.mat-focus-indicator {
  position: absolute;
}
@media (forced-colors: active) {
  .mat-calendar-body-cell-content {
    border: none;
  }
}

.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  background-color: var(--mat-datepicker-calendar-date-focus-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}

@media (hover: hover) {
  .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
    background-color: var(--mat-datepicker-calendar-date-hover-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
  }
}
.mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-state-background-color, var(--mat-sys-primary));
  color: var(--mat-datepicker-calendar-date-selected-state-text-color, var(--mat-sys-on-primary));
}
.mat-calendar-body-disabled > .mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-selected.mat-calendar-body-today {
  box-shadow: inset 0 0 0 1px var(--mat-datepicker-calendar-date-today-selected-state-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-in-range::before {
  background: var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-bridge-start::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-end::before {
  background: linear-gradient(to right, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-comparison-bridge-end::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-start::before {
  background: linear-gradient(to left, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-in-range > .mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-state-background-color, var(--mat-sys-secondary-container));
}

.mat-calendar-body-comparison-identical.mat-calendar-body-selected,
.mat-calendar-body-in-comparison-range > .mat-calendar-body-selected {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color, var(--mat-sys-secondary));
}

@media (forced-colors: active) {
  .mat-datepicker-popup:not(:empty),
  .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected {
    outline: solid 1px;
  }
  .mat-calendar-body-today {
    outline: dotted 1px;
  }
  .mat-calendar-body-cell::before,
  .mat-calendar-body-cell::after,
  .mat-calendar-body-selected {
    background: none;
  }
  .mat-calendar-body-in-range::before,
  .mat-calendar-body-comparison-bridge-start::before,
  .mat-calendar-body-comparison-bridge-end::before {
    border-top: solid 1px;
    border-bottom: solid 1px;
  }
  .mat-calendar-body-range-start::before {
    border-left: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-start::before {
    border-left: 0;
    border-right: solid 1px;
  }
  .mat-calendar-body-range-end::before {
    border-right: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-end::before {
    border-right: 0;
    border-left: solid 1px;
  }
  .mat-calendar-body-in-comparison-range::before {
    border-top: dashed 1px;
    border-bottom: dashed 1px;
  }
  .mat-calendar-body-comparison-start::before {
    border-left: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-start::before {
    border-left: 0;
    border-right: dashed 1px;
  }
  .mat-calendar-body-comparison-end::before {
    border-right: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-end::before {
    border-right: 0;
    border-left: dashed 1px;
  }
}
`],encapsulation:2})}return i})();function Ai(i){return i?.nodeName==="TD"}function Ri(i){let a;return Ai(i)?a=i:Ai(i.parentNode)?a=i.parentNode:Ai(i.parentNode?.parentNode)&&(a=i.parentNode.parentNode),a?.getAttribute("data-mat-row")!=null?a:null}function Ti(i,a,e){return e!==null&&a!==e&&i<e&&i===a}function Oi(i,a,e){return a!==null&&a!==e&&i>=a&&i===e}function Ii(i,a,e,t){return t&&a!==null&&e!==null&&a!==e&&i>=a&&i<=e}function Lr(i){let a=i.changedTouches[0];return document.elementFromPoint(a.clientX,a.clientY)}var xe=class{start;end;_disableStructuralEquivalency;constructor(a,e){this.start=a,this.end=e;}},Lt=(()=>{class i{selection;_adapter;_selectionChanged=new ne;selectionChanged=this._selectionChanged;constructor(e,t){this.selection=e,this._adapter=t,this.selection=e;}updateSelection(e,t){let n=this.selection;this.selection=e,this._selectionChanged.next({selection:e,source:t,oldValue:n});}ngOnDestroy(){this._selectionChanged.complete();}_isValidDateInstance(e){return this._adapter.isDateInstance(e)&&this._adapter.isValid(e)}static \u0275fac=function(t){yE();};static \u0275prov=A({token:i,factory:i.\u0275fac})}return i})(),js=(()=>{class i extends Lt{constructor(e){super(null,e);}add(e){super.updateSelection(e,this);}isValid(){return this.selection!=null&&this._isValidDateInstance(this.selection)}isComplete(){return this.selection!=null}clone(){let e=new i(this._adapter);return e.updateSelection(this.selection,this),e}static \u0275fac=function(t){return new(t||i)(b(ie))};static \u0275prov=A({token:i,factory:i.\u0275fac})}return i})();var Yr={provide:Lt,useFactory:()=>y(Lt,{optional:true,skipSelf:true})||new js(y(ie))};var jr=new C$1("MAT_DATE_RANGE_SELECTION_STRATEGY");var Fi=7,Ws=0,Nr=(()=>{class i{_changeDetectorRef=y(hC);_dateFormats=y(Ve,{optional:true});_dateAdapter=y(ie,{optional:true});_dir=y(gt,{optional:true});_rangeStrategy=y(jr,{optional:true});_rerenderSubscription=Y$1.EMPTY;_selectionKeyPressed=false;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,n=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(n,this.minDate,this.maxDate),this._hasSameMonthAndYear(t,this._activeDate)||this._init();}_activeDate;get selected(){return this._selected}set selected(e){e instanceof xe?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setRanges(this._selected);}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;activeDrag=null;selectedChange=new Xe;_userSelection=new Xe;dragStarted=new Xe;dragEnded=new Xe;activeDateChange=new Xe;_matCalendarBody;_monthLabel=fi$1("");_weeks=fi$1([]);_firstWeekOffset=fi$1(0);_rangeStart=fi$1(null);_rangeEnd=fi$1(null);_comparisonRangeStart=fi$1(null);_comparisonRangeEnd=fi$1(null);_previewStart=fi$1(null);_previewEnd=fi$1(null);_isRange=fi$1(false);_todayDate=fi$1(null);_weekdays=fi$1([]);constructor(){y(ct$1).load(yt),this._activeDate=this._dateAdapter.today();}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(ml$1(null)).subscribe(()=>this._init());}ngOnChanges(e){let t=e.comparisonStart||e.comparisonEnd;t&&!t.firstChange&&this._setRanges(this.selected),e.activeDrag&&!this.activeDrag&&this._clearPreview();}ngOnDestroy(){this._rerenderSubscription.unsubscribe();}_dateSelected(e){let t=e.value,n=this._getDateFromDayOfMonth(t),r,o;this._selected instanceof xe?(r=this._getDateInCurrentMonth(this._selected.start),o=this._getDateInCurrentMonth(this._selected.end)):r=o=this._getDateInCurrentMonth(this._selected),(r!==t||o!==t)&&this.selectedChange.emit(n),this._userSelection.emit({value:n,event:e.event}),this._clearPreview(),this._changeDetectorRef.markForCheck();}_updateActiveDate(e){let t=e.value,n=this._activeDate;this.activeDate=this._getDateFromDayOfMonth(t),this._dateAdapter.compareDate(n,this.activeDate)&&this.activeDateChange.emit(this._activeDate);}_handleCalendarBodyKeydown(e){let t=this._activeDate,n=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,n?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,n?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,-7);break;case 40:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,7);break;case 36:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,1-this._dateAdapter.getDate(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,this._dateAdapter.getNumDaysInMonth(this._activeDate)-this._dateAdapter.getDate(this._activeDate));break;case 33:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,-1):this._dateAdapter.addCalendarMonths(this._activeDate,-1);break;case 34:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,1):this._dateAdapter.addCalendarMonths(this._activeDate,1);break;case 13:case 32:this._selectionKeyPressed=true,this._canSelect(this._activeDate)&&e.preventDefault();return;case 27:this._previewEnd()!=null&&!Ae(e)&&(this._clearPreview(),this.activeDrag?this.dragEnded.emit({value:null,event:e}):(this.selectedChange.emit(null),this._userSelection.emit({value:null,event:e})),e.preventDefault(),e.stopPropagation());return;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault();}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._canSelect(this._activeDate)&&this._dateSelected({value:this._dateAdapter.getDate(this._activeDate),event:e}),this._selectionKeyPressed=false);}_init(){this._setRanges(this.selected),this._todayDate.set(this._getCellCompareValue(this._dateAdapter.today())),this._monthLabel.set(this._dateFormats.display.monthLabel?this._dateAdapter.format(this.activeDate,this._dateFormats.display.monthLabel):this._dateAdapter.getMonthNames("short")[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase());let e=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),1);this._firstWeekOffset.set((Fi+this._dateAdapter.getDayOfWeek(e)-this._dateAdapter.getFirstDayOfWeek())%Fi),this._initWeekdays(),this._createWeekCells(),this._changeDetectorRef.markForCheck();}_focusActiveCell(e){this._matCalendarBody._focusActiveCell(e);}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked();}_previewChanged({event:e,value:t}){if(this._rangeStrategy){let n=t?t.rawValue:null,r=this._rangeStrategy.createPreview(n,this.selected,e);if(this._previewStart.set(this._getCellCompareValue(r.start)),this._previewEnd.set(this._getCellCompareValue(r.end)),this.activeDrag&&n){let o=this._rangeStrategy.createDrag?.(this.activeDrag.value,this.selected,n,e);o&&(this._previewStart.set(this._getCellCompareValue(o.start)),this._previewEnd.set(this._getCellCompareValue(o.end)));}}}_dragEnded(e){if(this.activeDrag)if(e.value){let t=this._rangeStrategy?.createDrag?.(this.activeDrag.value,this.selected,e.value,e.event);this.dragEnded.emit({value:t??null,event:e.event});}else this.dragEnded.emit({value:null,event:e.event});}_getDateFromDayOfMonth(e){return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),e)}_initWeekdays(){let e=this._dateAdapter.getFirstDayOfWeek(),t=this._dateAdapter.getDayOfWeekNames("narrow"),r=this._dateAdapter.getDayOfWeekNames("long").map((o,l)=>({long:o,narrow:t[l],id:Ws++}));this._weekdays.set(r.slice(e).concat(r.slice(0,e)));}_createWeekCells(){let e=this._dateAdapter.getNumDaysInMonth(this.activeDate),t=this._dateAdapter.getDateNames(),n=[[]];for(let r=0,o=this._firstWeekOffset();r<e;r++,o++){o==Fi&&(n.push([]),o=0);let l=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),r+1),c=this._shouldEnableDate(l),p=this._dateAdapter.format(l,this._dateFormats.display.dateA11yLabel),u=this.dateClass?this.dateClass(l,"month"):void 0;n[n.length-1].push(new Pt(r+1,t[r],p,c,u,this._getCellCompareValue(l),l));}this._weeks.set(n);}_shouldEnableDate(e){return !!e&&(!this.minDate||this._dateAdapter.compareDate(e,this.minDate)>=0)&&(!this.maxDate||this._dateAdapter.compareDate(e,this.maxDate)<=0)&&(!this.dateFilter||this.dateFilter(e))}_getDateInCurrentMonth(e){return e&&this._hasSameMonthAndYear(e,this.activeDate)?this._dateAdapter.getDate(e):null}_hasSameMonthAndYear(e,t){return !!(e&&t&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t)&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t))}_getCellCompareValue(e){if(e){let t=this._dateAdapter.getYear(e),n=this._dateAdapter.getMonth(e),r=this._dateAdapter.getDate(e);return new Date(t,n,r).getTime()}return null}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setRanges(e){e instanceof xe?(this._rangeStart.set(this._getCellCompareValue(e.start)),this._rangeEnd.set(this._getCellCompareValue(e.end)),this._isRange.set(true)):(this._rangeStart.set(this._getCellCompareValue(e)),this._rangeEnd.set(this._rangeStart()),this._isRange.set(false)),this._comparisonRangeStart.set(this._getCellCompareValue(this.comparisonStart)),this._comparisonRangeEnd.set(this._getCellCompareValue(this.comparisonEnd));}_canSelect(e){return !this.dateFilter||this.dateFilter(e)}_clearPreview(){this._previewStart.set(null),this._previewEnd.set(null);}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=KE({type:i,selectors:[["mat-month-view"]],viewQuery:function(t,n){if(t&1&&Hh(ht,5),t&2){let r;nw(r=rw())&&(n._matCalendarBody=r.first);}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName",activeDrag:"activeDrag"},outputs:{selectedChange:"selectedChange",_userSelection:"_userSelection",dragStarted:"dragStarted",dragEnded:"dragEnded",activeDateChange:"activeDateChange"},exportAs:["matMonthView"],features:[Rc],decls:8,vars:14,consts:[["role","grid",1,"mat-calendar-table"],[1,"mat-calendar-table-header"],["scope","col"],["aria-hidden","true"],["colspan","7",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","previewChange","dragStarted","dragEnded","keyup","keydown","label","rows","todayValue","startValue","endValue","comparisonStart","comparisonEnd","previewStart","previewEnd","isRange","labelMinRequiredCells","activeCell","startDateAccessibleName","endDateAccessibleName"],[1,"cdk-visually-hidden"]],template:function(t,n){t&1&&($i(0,"table",0)(1,"thead",1)(2,"tr"),$I(3,Rs,5,2,"th",2,Hr),wu(),$i(5,"tr",3),Rh(6,"th",4),wu()(),$i(7,"tbody",5),Lh("selectedValueChange",function(o){return n._dateSelected(o)})("activeDateChange",function(o){return n._updateActiveDate(o)})("previewChange",function(o){return n._previewChanged(o)})("dragStarted",function(o){return n.dragStarted.emit(o)})("dragEnded",function(o){return n._dragEnded(o)})("keyup",function(o){return n._handleCalendarBodyKeyup(o)})("keydown",function(o){return n._handleCalendarBodyKeydown(o)}),wu()()),t&2&&(wD(3),zI(n._weekdays()),wD(4),xh("label",n._monthLabel())("rows",n._weeks())("todayValue",n._todayDate())("startValue",n._rangeStart())("endValue",n._rangeEnd())("comparisonStart",n._comparisonRangeStart())("comparisonEnd",n._comparisonRangeEnd())("previewStart",n._previewStart())("previewEnd",n._previewEnd())("isRange",n._isRange())("labelMinRequiredCells",3)("activeCell",n._dateAdapter.getDate(n.activeDate)-1)("startDateAccessibleName",n.startDateAccessibleName)("endDateAccessibleName",n.endDateAccessibleName));},dependencies:[ht],encapsulation:2})}return i})(),fe=24,Pi=4,Vr=(()=>{class i{_changeDetectorRef=y(hC);_dateAdapter=y(ie,{optional:true});_dir=y(gt,{optional:true});_rerenderSubscription=Y$1.EMPTY;_selectionKeyPressed=false;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,n=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(n,this.minDate,this.maxDate),Wr(this._dateAdapter,t,this._activeDate,this.minDate,this.maxDate)||this._init();}_activeDate;get selected(){return this._selected}set selected(e){e instanceof xe?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedYear(e);}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));}_maxDate=null;dateFilter;dateClass;selectedChange=new Xe;yearSelected=new Xe;activeDateChange=new Xe;_matCalendarBody;_years=fi$1([]);_todayYear=fi$1(0);_selectedYear=fi$1(null);constructor(){this._dateAdapter,this._activeDate=this._dateAdapter.today();}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(ml$1(null)).subscribe(()=>this._init());}ngOnDestroy(){this._rerenderSubscription.unsubscribe();}_init(){this._todayYear.set(this._dateAdapter.getYear(this._dateAdapter.today()));let t=this._dateAdapter.getYear(this._activeDate)-It(this._dateAdapter,this.activeDate,this.minDate,this.maxDate),n=[];for(let r=0,o=[];r<fe;r++)o.push(t+r),o.length==Pi&&(n.push(o.map(l=>this._createCellForYear(l))),o=[]);this._years.set(n),this._changeDetectorRef.markForCheck();}_yearSelected(e){let t=e.value,n=this._dateAdapter.createDate(t,0,1),r=this._getDateFromYear(t);this.yearSelected.emit(n),this.selectedChange.emit(r);}_updateActiveDate(e){let t=e.value,n=this._activeDate;this.activeDate=this._getDateFromYear(t),this._dateAdapter.compareDate(n,this.activeDate)&&this.activeDateChange.emit(this.activeDate);}_handleCalendarBodyKeydown(e){let t=this._activeDate,n=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,n?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,n?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Pi);break;case 40:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,Pi);break;case 36:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-It(this._dateAdapter,this.activeDate,this.minDate,this.maxDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,fe-It(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)-1);break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-fe*10:-fe);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?fe*10:fe);break;case 13:case 32:this._selectionKeyPressed=true;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked(),e.preventDefault();}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._yearSelected({value:this._dateAdapter.getYear(this._activeDate),event:e}),this._selectionKeyPressed=false);}_getActiveCell(){return It(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)}_focusActiveCell(){this._matCalendarBody._focusActiveCell();}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked();}_getDateFromYear(e){let t=this._dateAdapter.getMonth(this.activeDate),n=this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(e,t,1));return this._dateAdapter.createDate(e,t,Math.min(this._dateAdapter.getDate(this.activeDate),n))}_createCellForYear(e){let t=this._dateAdapter.createDate(e,0,1),n=this._dateAdapter.getYearName(t),r=this.dateClass?this.dateClass(t,"multi-year"):void 0;return new Pt(e,n,n,this._shouldEnableYear(e),r)}_shouldEnableYear(e){if(e==null||this.maxDate&&e>this._dateAdapter.getYear(this.maxDate)||this.minDate&&e<this._dateAdapter.getYear(this.minDate))return  false;if(!this.dateFilter)return  true;let t=this._dateAdapter.createDate(e,0,1);for(let n=t;this._dateAdapter.getYear(n)==e;n=this._dateAdapter.addCalendarDays(n,1))if(this.dateFilter(n))return  true;return  false}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedYear(e){if(this._selectedYear.set(null),e instanceof xe){let t=e.start||e.end;t&&this._selectedYear.set(this._dateAdapter.getYear(t));}else e&&this._selectedYear.set(this._dateAdapter.getYear(e));}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=KE({type:i,selectors:[["mat-multi-year-view"]],viewQuery:function(t,n){if(t&1&&Hh(ht,5),t&2){let r;nw(r=rw())&&(n._matCalendarBody=r.first);}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",activeDateChange:"activeDateChange"},exportAs:["matMultiYearView"],decls:5,vars:7,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","rows","todayValue","startValue","endValue","numCols","cellAspectRatio","activeCell"]],template:function(t,n){t&1&&($i(0,"table",0)(1,"thead",1)(2,"tr"),Rh(3,"th",2),wu()(),$i(4,"tbody",3),Lh("selectedValueChange",function(o){return n._yearSelected(o)})("activeDateChange",function(o){return n._updateActiveDate(o)})("keyup",function(o){return n._handleCalendarBodyKeyup(o)})("keydown",function(o){return n._handleCalendarBodyKeydown(o)}),wu()()),t&2&&(wD(4),xh("rows",n._years())("todayValue",n._todayYear())("startValue",n._selectedYear())("endValue",n._selectedYear())("numCols",4)("cellAspectRatio",4/7)("activeCell",n._getActiveCell()));},dependencies:[ht],encapsulation:2})}return i})();function Wr(i,a,e,t,n){let r=i.getYear(a),o=i.getYear(e),l=Ur(i,t,n);return Math.floor((r-l)/fe)===Math.floor((o-l)/fe)}function It(i,a,e,t){let n=i.getYear(a);return Us(n-Ur(i,e,t),fe)}function Ur(i,a,e){let t=0;return e?t=i.getYear(e)-fe+1:a&&(t=i.getYear(a)),t}function Us(i,a){return (i%a+a)%a}var Br=(()=>{class i{_changeDetectorRef=y(hC);_dateFormats=y(Ve,{optional:true});_dateAdapter=y(ie,{optional:true});_dir=y(gt,{optional:true});_rerenderSubscription=Y$1.EMPTY;_selectionKeyPressed=false;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,n=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(n,this.minDate,this.maxDate),this._dateAdapter.getYear(t)!==this._dateAdapter.getYear(this._activeDate)&&this._init();}_activeDate;get selected(){return this._selected}set selected(e){e instanceof xe?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedMonth(e);}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));}_maxDate=null;dateFilter;dateClass;selectedChange=new Xe;monthSelected=new Xe;activeDateChange=new Xe;_matCalendarBody;_months=fi$1([]);_yearLabel=fi$1("");_todayMonth=fi$1(null);_selectedMonth=fi$1(null);constructor(){this._activeDate=this._dateAdapter.today();}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(ml$1(null)).subscribe(()=>this._init());}ngOnDestroy(){this._rerenderSubscription.unsubscribe();}_monthSelected(e){let t=e.value,n=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),t,1);this.monthSelected.emit(n);let r=this._getDateFromMonth(t);this.selectedChange.emit(r);}_updateActiveDate(e){let t=e.value,n=this._activeDate;this.activeDate=this._getDateFromMonth(t),this._dateAdapter.compareDate(n,this.activeDate)&&this.activeDateChange.emit(this.activeDate);}_handleCalendarBodyKeydown(e){let t=this._activeDate,n=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,n?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,n?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-4);break;case 40:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,4);break;case 36:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-this._dateAdapter.getMonth(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,11-this._dateAdapter.getMonth(this._activeDate));break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-10:-1);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?10:1);break;case 13:case 32:this._selectionKeyPressed=true;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault();}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._monthSelected({value:this._dateAdapter.getMonth(this._activeDate),event:e}),this._selectionKeyPressed=false);}_init(){this._setSelectedMonth(this.selected),this._todayMonth.set(this._getMonthInCurrentYear(this._dateAdapter.today())),this._yearLabel.set(this._dateAdapter.getYearName(this.activeDate));let e=this._dateAdapter.getMonthNames("short");this._months.set([[0,1,2,3],[4,5,6,7],[8,9,10,11]].map(t=>t.map(n=>this._createCellForMonth(n,e[n])))),this._changeDetectorRef.markForCheck();}_focusActiveCell(){this._matCalendarBody._focusActiveCell();}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked();}_getMonthInCurrentYear(e){return e&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(this.activeDate)?this._dateAdapter.getMonth(e):null}_getDateFromMonth(e){let t=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),n=this._dateAdapter.getNumDaysInMonth(t);return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,Math.min(this._dateAdapter.getDate(this.activeDate),n))}_createCellForMonth(e,t){let n=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),r=this._dateAdapter.format(n,this._dateFormats.display.monthYearA11yLabel),o=this.dateClass?this.dateClass(n,"year"):void 0;return new Pt(e,t.toLocaleUpperCase(),r,this._shouldEnableMonth(e),o)}_shouldEnableMonth(e){let t=this._dateAdapter.getYear(this.activeDate);if(e==null||this._isYearAndMonthAfterMaxDate(t,e)||this._isYearAndMonthBeforeMinDate(t,e))return  false;if(!this.dateFilter)return  true;let n=this._dateAdapter.createDate(t,e,1);for(let r=n;this._dateAdapter.getMonth(r)==e;r=this._dateAdapter.addCalendarDays(r,1))if(this.dateFilter(r))return  true;return  false}_isYearAndMonthAfterMaxDate(e,t){if(this.maxDate){let n=this._dateAdapter.getYear(this.maxDate),r=this._dateAdapter.getMonth(this.maxDate);return e>n||e===n&&t>r}return  false}_isYearAndMonthBeforeMinDate(e,t){if(this.minDate){let n=this._dateAdapter.getYear(this.minDate),r=this._dateAdapter.getMonth(this.minDate);return e<n||e===n&&t<r}return  false}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedMonth(e){e instanceof xe?this._selectedMonth.set(this._getMonthInCurrentYear(e.start)||this._getMonthInCurrentYear(e.end)):this._selectedMonth.set(this._getMonthInCurrentYear(e));}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=KE({type:i,selectors:[["mat-year-view"]],viewQuery:function(t,n){if(t&1&&Hh(ht,5),t&2){let r;nw(r=rw())&&(n._matCalendarBody=r.first);}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",monthSelected:"monthSelected",activeDateChange:"activeDateChange"},exportAs:["matYearView"],decls:5,vars:9,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","label","rows","todayValue","startValue","endValue","labelMinRequiredCells","numCols","cellAspectRatio","activeCell"]],template:function(t,n){t&1&&($i(0,"table",0)(1,"thead",1)(2,"tr"),Rh(3,"th",2),wu()(),$i(4,"tbody",3),Lh("selectedValueChange",function(o){return n._monthSelected(o)})("activeDateChange",function(o){return n._updateActiveDate(o)})("keyup",function(o){return n._handleCalendarBodyKeyup(o)})("keydown",function(o){return n._handleCalendarBodyKeydown(o)}),wu()()),t&2&&(wD(4),xh("label",n._yearLabel())("rows",n._months())("todayValue",n._todayMonth())("startValue",n._selectedMonth())("endValue",n._selectedMonth())("labelMinRequiredCells",2)("numCols",4)("cellAspectRatio",4/7)("activeCell",n._dateAdapter.getMonth(n.activeDate)));},dependencies:[ht],encapsulation:2})}return i})(),Xr=(()=>{class i{_intl=y(pt);calendar=y(Li);_dateAdapter=y(ie,{optional:true});_dateFormats=y(Ve,{optional:true});_periodButtonText;_periodButtonDescription;_periodButtonLabel;_prevButtonLabel;_nextButtonLabel;constructor(){y(ct$1).load(yt);let e=y(hC);this._updateLabels(),this.calendar.stateChanges.subscribe(()=>{this._updateLabels(),e.markForCheck();});}get periodButtonText(){return this._periodButtonText}get periodButtonDescription(){return this._periodButtonDescription}get periodButtonLabel(){return this._periodButtonLabel}get prevButtonLabel(){return this._prevButtonLabel}get nextButtonLabel(){return this._nextButtonLabel}currentPeriodClicked(){this.calendar.currentView=this.calendar.currentView=="month"?"multi-year":"month";}previousClicked(){this.previousEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?-1:-fe));}nextClicked(){this.nextEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?1:fe));}previousEnabled(){return this.calendar.minDate?!this.calendar.minDate||!this._isSameView(this.calendar.activeDate,this.calendar.minDate):true}nextEnabled(){return !this.calendar.maxDate||!this._isSameView(this.calendar.activeDate,this.calendar.maxDate)}_updateLabels(){let e=this.calendar,t=this._intl,n=this._dateAdapter;e.currentView==="month"?(this._periodButtonText=n.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonDescription=n.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonLabel=t.switchToMultiYearViewLabel,this._prevButtonLabel=t.prevMonthLabel,this._nextButtonLabel=t.nextMonthLabel):e.currentView==="year"?(this._periodButtonText=n.getYearName(e.activeDate),this._periodButtonDescription=n.getYearName(e.activeDate),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevYearLabel,this._nextButtonLabel=t.nextYearLabel):(this._periodButtonText=t.formatYearRange(...this._formatMinAndMaxYearLabels()),this._periodButtonDescription=t.formatYearRangeLabel(...this._formatMinAndMaxYearLabels()),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevMultiYearLabel,this._nextButtonLabel=t.nextMultiYearLabel);}_isSameView(e,t){return this.calendar.currentView=="month"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t)&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t):this.calendar.currentView=="year"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t):Wr(this._dateAdapter,e,t,this.calendar.minDate,this.calendar.maxDate)}_formatMinAndMaxYearLabels(){let t=this._dateAdapter.getYear(this.calendar.activeDate)-It(this._dateAdapter,this.calendar.activeDate,this.calendar.minDate,this.calendar.maxDate),n=t+fe-1,r=this._dateAdapter.getYearName(this._dateAdapter.createDate(t,0,1)),o=this._dateAdapter.getYearName(this._dateAdapter.createDate(n,0,1));return [r,o]}_periodButtonLabelId=y(de).getId("mat-calendar-period-label-");static \u0275fac=function(t){return new(t||i)};static \u0275cmp=KE({type:i,selectors:[["mat-calendar-header"]],exportAs:["matCalendarHeader"],ngContentSelectors:Ts,decls:17,vars:13,consts:[[1,"mat-calendar-header"],[1,"mat-calendar-controls"],["aria-live","polite",1,"cdk-visually-hidden",3,"id"],["matButton","","type","button",1,"mat-calendar-period-button",3,"click"],["aria-hidden","true"],["viewBox","0 0 10 5","focusable","false","aria-hidden","true",1,"mat-calendar-arrow"],["points","0,0 5,5 10,0"],[1,"mat-calendar-spacer"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-previous-button",3,"click","disabled","matTooltip"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-next-button",3,"click","disabled","matTooltip"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]],template:function(t,n){t&1&&(JI(),$i(0,"div",0)(1,"div",1)(2,"span",2),Sw(3),wu(),$i(4,"button",3),Lh("click",function(){return n.currentPeriodClicked()}),$i(5,"span",4),Sw(6),wu(),Sd(),$i(7,"svg",5),Rh(8,"polygon",6),wu()(),Md(),Rh(9,"div",7),ew(10),$i(11,"button",8),Lh("click",function(){return n.previousClicked()}),Sd(),$i(12,"svg",9),Rh(13,"path",10),wu()(),Md(),$i(14,"button",11),Lh("click",function(){return n.nextClicked()}),Sd(),$i(15,"svg",9),Rh(16,"path",12),wu()()()()),t&2&&(wD(2),xh("id",n._periodButtonLabelId),wD(),Jh(n.periodButtonDescription),wD(),Ah("aria-label",n.periodButtonLabel)("aria-describedby",n._periodButtonLabelId),wD(2),Jh(n.periodButtonText),wD(),qh("mat-calendar-invert",n.calendar.currentView!=="month"),wD(4),xh("disabled",!n.previousEnabled())("matTooltip",n.prevButtonLabel),Ah("aria-label",n.prevButtonLabel),wD(3),xh("disabled",!n.nextEnabled())("matTooltip",n.nextButtonLabel),Ah("aria-label",n.nextButtonLabel));},dependencies:[Di,bn,yr],encapsulation:2})}return i})(),Li=(()=>{class i{_dateAdapter=y(ie,{optional:true});_dateFormats=y(Ve,{optional:true});_changeDetectorRef=y(hC);_elementRef=y(qn$1);headerComponent;_calendarHeaderPortal;_intlChanges;_moveFocusOnNextTick=false;get startAt(){return this._startAt}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));}_startAt=null;startView="month";get selected(){return this._selected}set selected(e){e instanceof xe?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedChange=new Xe;yearSelected=new Xe;monthSelected=new Xe;viewChanged=new Xe(true);_userSelection=new Xe;_userDragDrop=new Xe;monthView;yearView;multiYearView;get activeDate(){return this._clampedActiveDate}set activeDate(e){this._clampedActiveDate=this._dateAdapter.clampDate(e,this.minDate,this.maxDate),this.stateChanges.next(),this._changeDetectorRef.markForCheck();}_clampedActiveDate;get currentView(){return this._currentView}set currentView(e){let t=this._currentView!==e?e:null;this._currentView=e,this._moveFocusOnNextTick=true,this._changeDetectorRef.markForCheck(),t&&(this.stateChanges.next(),this.viewChanged.emit(t));}_currentView;_activeDrag=null;stateChanges=new ne;constructor(){this._intlChanges=y(pt).changes.subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next();});}ngAfterContentInit(){this._calendarHeaderPortal=new ze(this.headerComponent||Xr),this.activeDate=this.startAt||this._dateAdapter.today(),this._currentView=this.startView;}ngAfterViewChecked(){this._moveFocusOnNextTick&&(this._moveFocusOnNextTick=false,this.focusActiveCell());}ngOnDestroy(){this._intlChanges.unsubscribe(),this.stateChanges.complete();}ngOnChanges(e){let t=e.minDate&&!this._dateAdapter.sameDate(e.minDate.previousValue,e.minDate.currentValue)?e.minDate:void 0,n=e.maxDate&&!this._dateAdapter.sameDate(e.maxDate.previousValue,e.maxDate.currentValue)?e.maxDate:void 0,r=t||n||e.dateFilter;if(r&&!r.firstChange){let o=this._getCurrentViewComponent();o&&(this._elementRef.nativeElement.contains(Qe())&&(this._moveFocusOnNextTick=true),this._changeDetectorRef.detectChanges(),o._init());}this.stateChanges.next();}focusActiveCell(){this._getCurrentViewComponent()?._focusActiveCell(false);}updateTodaysDate(){this._getCurrentViewComponent()?._init();}_dateSelected(e){let t=e.value;(this.selected instanceof xe||t&&!this._dateAdapter.sameDate(t,this.selected))&&this.selectedChange.emit(t),this._userSelection.emit(e);}_yearSelectedInMultiYearView(e){this.yearSelected.emit(e);}_monthSelectedInYearView(e){this.monthSelected.emit(e);}_goToDateInView(e,t){this.activeDate=e,this.currentView=t;}_dragStarted(e){this._activeDrag=e;}_dragEnded(e){this._activeDrag&&(e.value&&this._userDragDrop.emit(e),this._activeDrag=null);}_getCurrentViewComponent(){return this.monthView||this.yearView||this.multiYearView}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=KE({type:i,selectors:[["mat-calendar"]],viewQuery:function(t,n){if(t&1&&Hh(Nr,5)(Br,5)(Vr,5),t&2){let r;nw(r=rw())&&(n.monthView=r.first),nw(r=rw())&&(n.yearView=r.first),nw(r=rw())&&(n.multiYearView=r.first);}},hostAttrs:[1,"mat-calendar"],inputs:{headerComponent:"headerComponent",startAt:"startAt",startView:"startView",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",_userSelection:"_userSelection",_userDragDrop:"_userDragDrop"},exportAs:["matCalendar"],features:[Fw([Yr]),Rc],decls:5,vars:2,consts:[[3,"cdkPortalOutlet"],["cdkMonitorSubtreeFocus","","tabindex","-1",1,"mat-calendar-content"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","_userSelection","dragStarted","dragEnded","activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDateChange","monthSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","yearSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"]],template:function(t,n){if(t&1&&(wh(0,Os,0,0,"ng-template",0),$i(1,"div",1),VI(2,Is,1,11,"mat-month-view",2)(3,Fs,1,6,"mat-year-view",3)(4,Ps,1,6,"mat-multi-year-view",3),wu()),t&2){let r;xh("cdkPortalOutlet",n._calendarHeaderPortal),wD(2),HI((r=n.currentView)==="month"?2:r==="year"?3:r==="multi-year"?4:-1);}},dependencies:[gi,Jn,Nr,Br,Vr],styles:[`.mat-calendar {
  display: block;
  line-height: normal;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
}

.mat-calendar-header {
  padding: 8px 8px 0 8px;
}

.mat-calendar-content {
  padding: 0 8px 8px 8px;
  outline: none;
}

.mat-calendar-controls {
  display: flex;
  align-items: center;
  margin: 5% calc(4.7142857143% - 16px);
}

.mat-calendar-spacer {
  flex: 1 1 auto;
}

.mat-calendar-period-button {
  min-width: 0;
  margin: 0 8px;
  font-size: var(--mat-datepicker-calendar-period-button-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-period-button-text-weight, var(--mat-sys-title-small-weight));
  --mat-button-text-label-text-color: var(--mat-datepicker-calendar-period-button-text-color, var(--mat-sys-on-surface-variant));
}

.mat-calendar-arrow {
  display: inline-block;
  width: 10px;
  height: 5px;
  margin: 0 0 0 5px;
  vertical-align: middle;
  fill: var(--mat-datepicker-calendar-period-button-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-calendar-arrow.mat-calendar-invert {
  transform: rotate(180deg);
}
[dir=rtl] .mat-calendar-arrow {
  margin: 0 5px 0 0;
}
@media (forced-colors: active) {
  .mat-calendar-arrow {
    fill: CanvasText;
  }
}

.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),
.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled) {
  color: var(--mat-datepicker-calendar-navigation-button-icon-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-calendar-previous-button,
[dir=rtl] .mat-calendar-next-button {
  transform: rotate(180deg);
}

.mat-calendar-table {
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
}

.mat-calendar-table-header th {
  text-align: center;
  padding: 0 0 8px 0;
  color: var(--mat-datepicker-calendar-header-text-color, var(--mat-sys-on-surface-variant));
  font-size: var(--mat-datepicker-calendar-header-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-header-text-weight, var(--mat-sys-title-small-weight));
}

.mat-calendar-table-header-divider {
  position: relative;
  height: 1px;
}
.mat-calendar-table-header-divider::after {
  content: "";
  position: absolute;
  top: 0;
  left: -8px;
  right: -8px;
  height: 1px;
  background: var(--mat-datepicker-calendar-header-divider-color, transparent);
}

.mat-calendar-body-cell-content::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-calendar-body-cell:focus-visible .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return i})(),Xs=new C$1("mat-datepicker-scroll-strategy",{providedIn:"root",factory:()=>{let i=y(pe$1);return ()=>st(i)}}),Gr=(()=>{class i{_elementRef=y(qn$1);_animationsDisabled=ve();_changeDetectorRef=y(hC);_globalModel=y(Lt);_dateAdapter=y(ie);_ngZone=y(ee);_rangeSelectionStrategy=y(jr,{optional:true});_stateChanges;_model;_eventCleanups;_animationFallback;_calendar;color;datepicker;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;_isAbove=false;_animationDone=new ne;_isAnimating=false;_closeButtonText;_closeButtonFocused=false;_actionsPortal=null;_dialogLabelId=null;constructor(){if(y(ct$1).load(yt),this._closeButtonText=y(pt).closeCalendarLabel,!this._animationsDisabled){let e=this._elementRef.nativeElement,t=y(Zp);this._eventCleanups=this._ngZone.runOutsideAngular(()=>[t.listen(e,"animationstart",this._handleAnimationEvent),t.listen(e,"animationend",this._handleAnimationEvent),t.listen(e,"animationcancel",this._handleAnimationEvent)]);}}ngAfterViewInit(){this._stateChanges=this.datepicker.stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck();}),this._calendar.focusActiveCell();}ngOnDestroy(){clearTimeout(this._animationFallback),this._eventCleanups?.forEach(e=>e()),this._stateChanges?.unsubscribe(),this._animationDone.complete();}_handleUserSelection(e){let t=this._model.selection,n=e.value,r=t instanceof xe;if(r&&this._rangeSelectionStrategy){let o=this._rangeSelectionStrategy.selectionFinished(n,t,e.event);this._model.updateSelection(o,this);}else n&&(r||!this._dateAdapter.sameDate(n,t))&&this._model.add(n);(!this._model||this._model.isComplete())&&!this._actionsPortal&&this.datepicker.close();}_handleUserDragDrop(e){this._model.updateSelection(e.value,this);}_startExitAnimation(){this._elementRef.nativeElement.classList.add("mat-datepicker-content-exit"),this._animationsDisabled?this._animationDone.next():(clearTimeout(this._animationFallback),this._animationFallback=setTimeout(()=>{this._isAnimating||this._animationDone.next();},200));}_handleAnimationEvent=e=>{let t=this._elementRef.nativeElement;e.target!==t||!e.animationName.startsWith("_mat-datepicker-content")||(clearTimeout(this._animationFallback),this._isAnimating=e.type==="animationstart",t.classList.toggle("mat-datepicker-content-animating",this._isAnimating),this._isAnimating||this._animationDone.next());};_getSelected(){return this._model.selection}_applyPendingSelection(){this._model!==this._globalModel&&this._globalModel.updateSelection(this._model.selection,this);}_assignActions(e,t){this._model=e?this._globalModel.clone():this._globalModel,this._actionsPortal=e,t&&this._changeDetectorRef.detectChanges();}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=KE({type:i,selectors:[["mat-datepicker-content"]],viewQuery:function(t,n){if(t&1&&Hh(Li,5),t&2){let r;nw(r=rw())&&(n._calendar=r.first);}},hostAttrs:[1,"mat-datepicker-content"],hostVars:6,hostBindings:function(t,n){t&2&&(mw(n.color?"mat-"+n.color:""),qh("mat-datepicker-content-touch",n.datepicker.touchUi)("mat-datepicker-content-animations-enabled",!n._animationsDisabled));},inputs:{color:"color"},exportAs:["matDatepickerContent"],decls:5,vars:26,consts:[["cdkTrapFocus","","role","dialog",1,"mat-datepicker-content-container"],[3,"yearSelected","monthSelected","viewChanged","_userSelection","_userDragDrop","id","startAt","startView","minDate","maxDate","dateFilter","headerComponent","selected","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName"],[3,"cdkPortalOutlet"],["type","button","matButton","elevated",1,"mat-datepicker-close-button",3,"focus","blur","click","color"]],template:function(t,n){t&1&&($i(0,"div",0)(1,"mat-calendar",1),Lh("yearSelected",function(o){return n.datepicker._selectYear(o)})("monthSelected",function(o){return n.datepicker._selectMonth(o)})("viewChanged",function(o){return n.datepicker._viewChanged(o)})("_userSelection",function(o){return n._handleUserSelection(o)})("_userDragDrop",function(o){return n._handleUserDragDrop(o)}),wu(),wh(2,Ls,0,0,"ng-template",2),$i(3,"button",3),Lh("focus",function(){return n._closeButtonFocused=true})("blur",function(){return n._closeButtonFocused=false})("click",function(){return n.datepicker.close()}),Sw(4),wu()()),t&2&&(qh("mat-datepicker-content-container-with-custom-header",n.datepicker.calendarHeaderComponent)("mat-datepicker-content-container-with-actions",n._actionsPortal),Ah("aria-modal",true)("aria-labelledby",n._dialogLabelId??void 0),wD(),mw(n.datepicker.panelClass),xh("id",n.datepicker.id)("startAt",n.datepicker.startAt)("startView",n.datepicker.startView)("minDate",n.datepicker._getMinDate())("maxDate",n.datepicker._getMaxDate())("dateFilter",n.datepicker._getDateFilter())("headerComponent",n.datepicker.calendarHeaderComponent)("selected",n._getSelected())("dateClass",n.datepicker.dateClass)("comparisonStart",n.comparisonStart)("comparisonEnd",n.comparisonEnd)("startDateAccessibleName",n.startDateAccessibleName)("endDateAccessibleName",n.endDateAccessibleName),wD(),xh("cdkPortalOutlet",n._actionsPortal),wD(),qh("cdk-visually-hidden",!n._closeButtonFocused),xh("color",n.color||"primary"),wD(),Jh(n._closeButtonText));},dependencies:[ni,Li,gi,Di],styles:[`@keyframes _mat-datepicker-content-dropdown-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-dialog-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-datepicker-content {
  display: block;
  background-color: var(--mat-datepicker-calendar-container-background-color, var(--mat-sys-surface-container-high));
  color: var(--mat-datepicker-calendar-container-text-color, var(--mat-sys-on-surface));
  box-shadow: var(--mat-datepicker-calendar-container-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-shape, var(--mat-sys-corner-large));
}
.mat-datepicker-content.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dropdown-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content .mat-calendar {
  width: 296px;
  height: 354px;
}
.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar {
  height: auto;
}
.mat-datepicker-content .mat-datepicker-close-button {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
}
.mat-datepicker-content-animating .mat-datepicker-content .mat-datepicker-close-button {
  display: none;
}

.mat-datepicker-content-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mat-datepicker-content-touch {
  display: block;
  max-height: 80vh;
  box-shadow: var(--mat-datepicker-calendar-container-touch-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-touch-shape, var(--mat-sys-corner-extra-large));
  position: relative;
  overflow: visible;
  min-height: fit-content;
}
.mat-datepicker-content-touch.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dialog-enter 150ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content-touch .mat-datepicker-content-container {
  min-height: 312px;
  max-height: 788px;
  min-width: 250px;
  max-width: 750px;
}
.mat-datepicker-content-touch .mat-calendar {
  width: 100%;
  height: auto;
}

.mat-datepicker-content-exit.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-exit 100ms linear;
}

@media all and (orientation: landscape) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 64vh;
    height: 80vh;
  }
}
@media all and (orientation: portrait) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 80vw;
    height: 100vw;
  }
  .mat-datepicker-content-touch .mat-datepicker-content-container-with-actions {
    height: 115vw;
  }
}
`],encapsulation:2})}return i})(),zr=(()=>{class i{_injector=y(pe$1);_viewContainerRef=y(Xn);_dateAdapter=y(ie,{optional:true});_dir=y(gt,{optional:true});_model=y(Lt);_animationsDisabled=ve();_scrollStrategy=y(Xs);_inputStateChanges=Y$1.EMPTY;_document=y(z);calendarHeaderComponent;get startAt(){return this._startAt||(this.datepickerInput?this.datepickerInput.getStartValue():null)}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));}_startAt=null;startView="month";get color(){return this._color||(this.datepickerInput?this.datepickerInput.getThemePalette():void 0)}set color(e){this._color=e;}_color;touchUi=false;get disabled(){return this._disabled===void 0&&this.datepickerInput?this.datepickerInput.disabled:!!this._disabled}set disabled(e){e!==this._disabled&&(this._disabled=e,this.stateChanges.next(void 0));}_disabled;xPosition="start";yPosition="below";restoreFocus=true;yearSelected=new Xe;monthSelected=new Xe;viewChanged=new Xe(true);dateClass;openedStream=new Xe;closedStream=new Xe;get panelClass(){return this._panelClass}set panelClass(e){this._panelClass=ja(e);}_panelClass;get opened(){return this._opened}set opened(e){e?this.open():this.close();}_opened=false;id=y(de).getId("mat-datepicker-");_getMinDate(){return this.datepickerInput&&this.datepickerInput.min}_getMaxDate(){return this.datepickerInput&&this.datepickerInput.max}_getDateFilter(){return this.datepickerInput&&this.datepickerInput.dateFilter}_overlayRef=null;_componentRef=null;_focusedElementBeforeOpen=null;_backdropHarnessClass=`${this.id}-backdrop`;_actionsPortal=null;datepickerInput;stateChanges=new ne;_changeDetectorRef=y(hC);constructor(){this._dateAdapter,this._model.selectionChanged.subscribe(()=>{this._changeDetectorRef.markForCheck();});}ngOnChanges(e){let t=e.xPosition||e.yPosition;if(t&&!t.firstChange&&this._overlayRef){let n=this._overlayRef.getConfig().positionStrategy;n instanceof ot&&(this._setConnectedPositions(n),this.opened&&this._overlayRef.updatePosition());}this.stateChanges.next(void 0);}ngOnDestroy(){this._destroyOverlay(),this.close(),this._inputStateChanges.unsubscribe(),this.stateChanges.complete();}select(e){this._model.add(e);}_selectYear(e){this.yearSelected.emit(e);}_selectMonth(e){this.monthSelected.emit(e);}_viewChanged(e){this.viewChanged.emit(e);}registerInput(e){return this.datepickerInput,this._inputStateChanges.unsubscribe(),this.datepickerInput=e,this._inputStateChanges=e.stateChanges.subscribe(()=>this.stateChanges.next(void 0)),this._model}registerActions(e){this._actionsPortal,this._actionsPortal=e,this._componentRef?.instance._assignActions(e,true);}removeActions(e){e===this._actionsPortal&&(this._actionsPortal=null,this._componentRef?.instance._assignActions(null,true));}open(){this._opened||this.disabled||this._componentRef?.instance._isAnimating||(this.datepickerInput,this._focusedElementBeforeOpen=Qe(),this._openOverlay(),this._opened=true,this.openedStream.emit());}close(){if(!this._opened||this._componentRef?.instance._isAnimating)return;let e=this.restoreFocus&&this._focusedElementBeforeOpen&&typeof this._focusedElementBeforeOpen.focus=="function",t=()=>{this._opened&&(this._opened=false,this.closedStream.emit());};if(this._componentRef){let{instance:n,location:r}=this._componentRef;n._animationDone.pipe(Ss$1(1)).subscribe(()=>{let o=this._document.activeElement;e&&(!o||o===this._document.activeElement||r.nativeElement.contains(o))&&this._focusedElementBeforeOpen.focus(),this._focusedElementBeforeOpen=null,this._destroyOverlay();}),n._startExitAnimation();}e?setTimeout(t):t();}_applyPendingSelection(){this._componentRef?.instance?._applyPendingSelection();}_forwardContentValues(e){e.datepicker=this,e.color=this.color,e._dialogLabelId=this.datepickerInput.getOverlayLabelId(),e._assignActions(this._actionsPortal,false);}_openOverlay(){this._destroyOverlay();let e=this.touchUi,t=new ze(Gr,this._viewContainerRef),n=this._overlayRef=dt(this._injector,new rt({positionStrategy:e?this._getDialogStrategy():this._getDropdownStrategy(),hasBackdrop:true,backdropClass:[e?"cdk-overlay-dark-backdrop":"mat-overlay-transparent-backdrop",this._backdropHarnessClass],direction:this._dir||"ltr",scrollStrategy:e?_n(this._injector):this._scrollStrategy(),panelClass:`mat-datepicker-${e?"dialog":"popup"}`,disableAnimations:this._animationsDisabled}));this._getCloseStream(n).subscribe(r=>{r&&r.preventDefault(),this.close();}),n.keydownEvents().subscribe(r=>{let o=r.keyCode;(o===38||o===40||o===37||o===39||o===33||o===34)&&r.preventDefault();}),this._componentRef=n.attach(t),this._forwardContentValues(this._componentRef.instance),e||Xv(()=>{n.updatePosition();},{injector:this._injector});}_destroyOverlay(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=this._componentRef=null);}_getDialogStrategy(){return gn(this._injector).centerHorizontally().centerVertically()}_getDropdownStrategy(){let e=lt(this._injector,this.datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn(".mat-datepicker-content").withFlexibleDimensions(false).withViewportMargin(8).withLockedPosition();return this._setConnectedPositions(e)}_setConnectedPositions(e){let t=this.xPosition==="end"?"end":"start",n=t==="start"?"end":"start",r=this.yPosition==="above"?"bottom":"top",o=r==="top"?"bottom":"top";return e.withPositions([{originX:t,originY:o,overlayX:t,overlayY:r},{originX:t,originY:r,overlayX:t,overlayY:o},{originX:n,originY:o,overlayX:n,overlayY:r},{originX:n,originY:r,overlayX:n,overlayY:o}])}_getCloseStream(e){let t=["ctrlKey","shiftKey","metaKey"];return Im(e.backdropClick(),e.detachments(),e.keydownEvents().pipe(ht$1(n=>n.keyCode===27&&!Ae(n)||this.datepickerInput&&Ae(n,"altKey")&&n.keyCode===38&&t.every(r=>!Ae(n,r)))))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=mu({type:i,inputs:{calendarHeaderComponent:"calendarHeaderComponent",startAt:"startAt",startView:"startView",color:"color",touchUi:[2,"touchUi","touchUi",bL],disabled:[2,"disabled","disabled",bL],xPosition:"xPosition",yPosition:"yPosition",restoreFocus:[2,"restoreFocus","restoreFocus",bL],dateClass:"dateClass",panelClass:"panelClass",opened:[2,"opened","opened",bL]},outputs:{yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",openedStream:"opened",closedStream:"closed"},features:[Rc]})}return i})(),Zr=(()=>{class i extends zr{static \u0275fac=(()=>{let e;return function(n){return (e||(e=Hf(i)))(n||i)}})();static \u0275cmp=KE({type:i,selectors:[["mat-datepicker"]],exportAs:["matDatepicker"],features:[Fw([Yr,{provide:zr,useExisting:i}]),Eh],decls:0,vars:0,template:function(t,n){},encapsulation:2})}return i})(),ct=class{target;targetElement;value=null;constructor(a,e){this.target=a,this.targetElement=e,this.value=this.target.value;}},Gs=(()=>{class i{_elementRef=y(qn$1);_dateAdapter=y(ie,{optional:true});_dateFormats=y(Ve,{optional:true});_isInitialized=false;get value(){return this._model?this._getValueFromModel(this._model.selection):this._pendingValue}set value(e){this._assignValueProgrammatically(e,true);}_model;get disabled(){return !!this._disabled||this._parentDisabled()}set disabled(e){let t=e,n=this._elementRef.nativeElement;this._disabled!==t&&(this._disabled=t,this.stateChanges.next(void 0)),t&&this._isInitialized&&n.blur&&n.blur();}_disabled;dateChange=new Xe;dateInput=new Xe;stateChanges=new ne;_onTouched=()=>{};_validatorOnChange=()=>{};_cvaOnChange=()=>{};_valueChangesSubscription=Y$1.EMPTY;_localeSubscription=Y$1.EMPTY;_pendingValue=null;_parseValidator=()=>this._lastValueValid?null:{matDatepickerParse:{text:this._elementRef.nativeElement.value}};_filterValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value));return !t||this._matchesFilter(t)?null:{matDatepickerFilter:true}};_minValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),n=this._getMinDate();return !n||!t||this._dateAdapter.compareDate(n,t)<=0?null:{matDatepickerMin:{min:n,actual:t}}};_maxValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),n=this._getMaxDate();return !n||!t||this._dateAdapter.compareDate(n,t)>=0?null:{matDatepickerMax:{max:n,actual:t}}};_getValidators(){return [this._parseValidator,this._minValidator,this._maxValidator,this._filterValidator]}_registerModel(e){this._model=e,this._valueChangesSubscription.unsubscribe(),this._pendingValue&&this._assignValue(this._pendingValue),this._valueChangesSubscription=this._model.selectionChanged.subscribe(t=>{if(this._shouldHandleChangeEvent(t)){let n=this._getValueFromModel(t.selection);this._lastValueValid=this._isValidValue(n),this._cvaOnChange(n),this._onTouched(),this._formatValue(n),this.dateInput.emit(new ct(this,this._elementRef.nativeElement)),this.dateChange.emit(new ct(this,this._elementRef.nativeElement));}});}_lastValueValid=false;constructor(){this._localeSubscription=this._dateAdapter.localeChanges.subscribe(()=>{this._assignValueProgrammatically(this.value,true);});}ngAfterViewInit(){this._isInitialized=true;}ngOnChanges(e){Zs(e,this._dateAdapter)&&this.stateChanges.next(void 0);}ngOnDestroy(){this._valueChangesSubscription.unsubscribe(),this._localeSubscription.unsubscribe(),this.stateChanges.complete();}registerOnValidatorChange(e){this._validatorOnChange=e;}validate(e){return this._validator?this._validator(e):null}writeValue(e){this._assignValueProgrammatically(e,e!==this.value);}registerOnChange(e){this._cvaOnChange=e;}registerOnTouched(e){this._onTouched=e;}setDisabledState(e){this.disabled=e;}_onKeydown(e){let t=["ctrlKey","shiftKey","metaKey"];Ae(e,"altKey")&&e.keyCode===40&&t.every(r=>!Ae(e,r))&&!this._elementRef.nativeElement.readOnly&&(this._openPopup(),e.preventDefault());}_onInput(e){let t=e.target.value,n=this._lastValueValid,r=this._dateAdapter.parse(t,this._dateFormats.parse.dateInput);this._lastValueValid=this._isValidValue(r),r=this._dateAdapter.getValidDateOrNull(r);let o=!this._dateAdapter.sameDate(r,this.value);!r||o?this._cvaOnChange(r):(t&&!this.value&&this._cvaOnChange(r),n!==this._lastValueValid&&this._validatorOnChange()),o&&(this._assignValue(r),this.dateInput.emit(new ct(this,this._elementRef.nativeElement)));}_onChange(){this.dateChange.emit(new ct(this,this._elementRef.nativeElement));}_onBlur(){this.value&&this._formatValue(this.value),this._onTouched();}_formatValue(e){this._elementRef.nativeElement.value=e!=null?this._dateAdapter.format(e,this._dateFormats.display.dateInput):"";}_assignValue(e){this._model?(this._assignValueToModel(e),this._pendingValue=null):this._pendingValue=e;}_isValidValue(e){return !e||this._dateAdapter.isValid(e)}_parentDisabled(){return  false}_assignValueProgrammatically(e,t){e=this._dateAdapter.deserialize(e),this._lastValueValid=this._isValidValue(e),e=this._dateAdapter.getValidDateOrNull(e),this._assignValue(e),t&&this._formatValue(e);}_matchesFilter(e){let t=this._getDateFilter();return !t||t(e)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=mu({type:i,inputs:{value:"value",disabled:[2,"disabled","disabled",bL]},outputs:{dateChange:"dateChange",dateInput:"dateInput"},features:[Rc]})}return i})();function Zs(i,a){let e=Object.keys(i);for(let t of e){let{previousValue:n,currentValue:r}=i[t];if(a.isDateInstance(n)&&a.isDateInstance(r)){if(!a.sameDate(n,r))return  true}else return  true}return  false}var qs={provide:j,useExisting:Wo$1(()=>An),multi:true},Ks={provide:B,useExisting:Wo$1(()=>An),multi:true},An=(()=>{class i extends Gs{_formField=y(Ot,{optional:true});_closedSubscription=Y$1.EMPTY;_openedSubscription=Y$1.EMPTY;set matDatepicker(e){e&&(this._datepicker=e,this._ariaOwns.set(e.opened?e.id:null),this._closedSubscription=e.closedStream.subscribe(()=>{this._onTouched(),this._ariaOwns.set(null);}),this._openedSubscription=e.openedStream.subscribe(()=>{this._ariaOwns.set(e.id);}),this._registerModel(e.registerInput(this)));}_datepicker;_ariaOwns=fi$1(null);get min(){return this._min}set min(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._min)||(this._min=t,this._validatorOnChange());}_min=null;get max(){return this._max}set max(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._max)||(this._max=t,this._validatorOnChange());}_max=null;get dateFilter(){return this._dateFilter}set dateFilter(e){let t=this._matchesFilter(this.value);this._dateFilter=e,this._matchesFilter(this.value)!==t&&this._validatorOnChange();}_dateFilter;_validator=null;constructor(){super(),this._validator=le$1.compose(super._getValidators());}getConnectedOverlayOrigin(){return this._formField?this._formField.getConnectedOverlayOrigin():this._elementRef}getOverlayLabelId(){return this._formField?this._formField.getLabelId():this._elementRef.nativeElement.getAttribute("aria-labelledby")}getThemePalette(){return this._formField?this._formField.color:void 0}getStartValue(){return this.value}ngOnDestroy(){super.ngOnDestroy(),this._closedSubscription.unsubscribe(),this._openedSubscription.unsubscribe();}_openPopup(){this._datepicker&&this._datepicker.open();}_getValueFromModel(e){return e}_assignValueToModel(e){this._model&&this._model.updateSelection(e,this);}_getMinDate(){return this._min}_getMaxDate(){return this._max}_getDateFilter(){return this._dateFilter}_shouldHandleChangeEvent(e){return e.source!==this}static \u0275fac=function(t){return new(t||i)};static \u0275dir=mu({type:i,selectors:[["input","matDatepicker",""]],hostAttrs:[1,"mat-datepicker-input"],hostVars:6,hostBindings:function(t,n){t&1&&Lh("input",function(o){return n._onInput(o)})("change",function(){return n._onChange()})("blur",function(){return n._onBlur()})("keydown",function(o){return n._onKeydown(o)}),t&2&&(Fh("disabled",n.disabled),Ah("aria-haspopup",n._datepicker?"dialog":null)("aria-owns",n._ariaOwns())("min",n.min?n._dateAdapter.toIso8601(n.min):null)("max",n.max?n._dateAdapter.toIso8601(n.max):null)("data-mat-calendar",n._datepicker?n._datepicker.id:null));},inputs:{matDatepicker:"matDatepicker",min:"min",max:"max",dateFilter:[0,"matDatepickerFilter","dateFilter"]},exportAs:["matDatepickerInput"],features:[Fw([qs,Ks,{provide:yn,useExisting:i}]),Eh]})}return i})(),$s=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=mu({type:i,selectors:[["","matDatepickerToggleIcon",""]]})}return i})(),Bi=(()=>{class i{_intl=y(pt);_changeDetectorRef=y(hC);_stateChanges=Y$1.EMPTY;datepicker;tabIndex=null;ariaLabel;get disabled(){return this._disabled===void 0&&this.datepicker?this.datepicker.disabled:!!this._disabled}set disabled(e){this._disabled=e;}_disabled;disableRipple=false;_customIcon;_button;constructor(){let e=y(new lg("tabindex"),{optional:true}),t=Number(e);this.tabIndex=t||t===0?t:null;}ngOnChanges(e){e.datepicker&&this._watchStateChanges();}ngOnDestroy(){this._stateChanges.unsubscribe();}ngAfterContentInit(){this._watchStateChanges();}_open(e){this.datepicker&&!this.disabled&&(this.datepicker.open(),e.stopPropagation());}_watchStateChanges(){let e=this.datepicker?this.datepicker.stateChanges:bs$1(),t=this.datepicker&&this.datepicker.datepickerInput?this.datepicker.datepickerInput.stateChanges:bs$1(),n=this.datepicker?Im(this.datepicker.openedStream,this.datepicker.closedStream):bs$1();this._stateChanges.unsubscribe(),this._stateChanges=Im(this._intl.changes,e,t,n).subscribe(()=>this._changeDetectorRef.markForCheck());}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=KE({type:i,selectors:[["mat-datepicker-toggle"]],contentQueries:function(t,n,r){if(t&1&&Vh(r,$s,5),t&2){let o;nw(o=rw())&&(n._customIcon=o.first);}},viewQuery:function(t,n){if(t&1&&Hh(Ns,5),t&2){let r;nw(r=rw())&&(n._button=r.first);}},hostAttrs:[1,"mat-datepicker-toggle"],hostVars:8,hostBindings:function(t,n){t&1&&Lh("click",function(o){return n._open(o)}),t&2&&(Ah("tabindex",null)("data-mat-calendar",n.datepicker?n.datepicker.id:null),qh("mat-datepicker-toggle-active",n.datepicker&&n.datepicker.opened)("mat-accent",n.datepicker&&n.datepicker.color==="accent")("mat-warn",n.datepicker&&n.datepicker.color==="warn"));},inputs:{datepicker:[0,"for","datepicker"],tabIndex:"tabIndex",ariaLabel:[0,"aria-label","ariaLabel"],disabled:[2,"disabled","disabled",bL],disableRipple:"disableRipple"},exportAs:["matDatepickerToggle"],features:[Rc],ngContentSelectors:Bs,decls:4,vars:7,consts:[["button",""],["matIconButton","","type","button",3,"tabIndex","disabled","disableRipple"],["viewBox","0 0 24 24","width","24px","height","24px","fill","currentColor","focusable","false","aria-hidden","true",1,"mat-datepicker-toggle-default-icon"],["d","M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],template:function(t,n){t&1&&(JI(Vs),$i(0,"button",1,0),VI(2,zs,2,0,":svg:svg",2),ew(3),wu()),t&2&&(xh("tabIndex",n.disabled?-1:n.tabIndex)("disabled",n.disabled)("disableRipple",n.disableRipple),Ah("aria-haspopup",n.datepicker?"dialog":null)("aria-label",n.ariaLabel||n._intl.openCalendarLabel)("aria-expanded",n.datepicker?n.datepicker.opened:null),wD(2),HI(n._customIcon?-1:2));},dependencies:[bn],styles:[`.mat-datepicker-toggle {
  pointer-events: auto;
  color: var(--mat-datepicker-toggle-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-datepicker-toggle button {
  color: inherit;
}

.mat-datepicker-toggle-active {
  color: var(--mat-datepicker-toggle-active-state-icon-color, var(--mat-sys-primary));
}

@media (forced-colors: active) {
  .mat-datepicker-toggle-default-icon {
    color: CanvasText;
  }
}
`],encapsulation:2})}return i})();var qr=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=ns$1({type:i});static \u0275inj=Ir$1({providers:[pt],imports:[br,xi,ii,dn,Gr,Bi,Xr,st$1,kt]})}return i})();var Vt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=ns$1({type:i});static \u0275inj=Ir$1({imports:[Jt,Dn,st$1]})}return i})();var el=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=KE({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,n){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2})}return i})(),tl={passive:true},Kr=(()=>{class i{_platform=y(C);_ngZone=y(ee);_renderer=y(un$1).createRenderer(null,null);_styleLoader=y(ct$1);_monitoredElements=new Map;monitor(e){if(!this._platform.isBrowser)return Pt$1;this._styleLoader.load(el);let t=pe(e),n=this._monitoredElements.get(t);if(n)return n.subject;let r=new ne,o="cdk-text-field-autofilled",l=p=>{p.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(o)?(t.classList.add(o),this._ngZone.run(()=>r.next({target:p.target,isAutofilled:true}))):p.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(o)&&(t.classList.remove(o),this._ngZone.run(()=>r.next({target:p.target,isAutofilled:false})));},c=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",l,tl)));return this._monitoredElements.set(t,{subject:r,unlisten:c}),r}stopMonitoring(e){let t=pe(e),n=this._monitoredElements.get(t);n&&(n.unlisten(),n.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t));}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t));}static \u0275fac=function(t){return new(t||i)};static \u0275prov=We$1({token:i,factory:i.\u0275fac})}return i})();var $r=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=ns$1({type:i});static \u0275inj=Ir$1({})}return i})();var nl=["button","checkbox","file","hidden","image","radio","range","reset","submit"],il=new C$1("MAT_INPUT_CONFIG"),Qr=(()=>{class i{_elementRef=y(qn$1);_platform=y(C);ngControl=y(N,{optional:true,self:true});_autofillMonitor=y(Kr);_ngZone=y(ee);_formField=y(Ot,{optional:true});_renderer=y(Zp);_uid=y(de).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=y(il,{optional:true});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=false;_isNativeSelect=false;_isTextarea=false;_isInFormField=false;focused=false;stateChanges=new ne;controlType="mat-input";autofilled=false;get disabled(){return this._disabled}set disabled(e){this._disabled=Re(e),this.focused&&(this.focused=false,this.stateChanges.next());}_disabled=false;get id(){return this._id}set id(e){this._id=e||this._uid;}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(le$1.required)??false}set required(e){this._required=Re(e);}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&si().has(this._type)&&(this._elementRef.nativeElement.type=this._type);}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e;}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next());}get readonly(){return this._readonly}set readonly(e){this._readonly=Re(e);}_readonly=false;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e;}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>si().has(e));constructor(){let e=y(qt,{optional:true}),t=y(Qt$1,{optional:true}),n=y(ba),r=y(yn,{optional:true,self:true}),o=this._elementRef.nativeElement,l=o.nodeName.toLowerCase();r?Fr$1(r.value)?this._signalBasedValueAccessor=r:this._inputValueAccessor=r:this._inputValueAccessor=o,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(o,"keyup",this._iOSKeyupListener);}),this._errorStateTracker=new on(n,this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=l==="select",this._isTextarea=l==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||false,this._isNativeSelect&&(this.controlType=o.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&Fd(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next();});}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next();});}ngOnChanges(){this.stateChanges.next();}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.();}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder();}focus(e){this._elementRef.nativeElement.focus(e);}updateErrorState(){this._errorStateTracker.updateErrorState();}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0);}this.focused=e,this.stateChanges.next();}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next());}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder");}}_getPlaceholder(){return this.placeholder||null}_validateType(){nl.indexOf(this._type)>-1;}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return !this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby");}onContainerClick(){this.focused||this.focus();}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0));};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||i)};static \u0275dir=mu({type:i,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,n){t&1&&Lh("focus",function(){return n._focusChanged(true)})("blur",function(){return n._focusChanged(false)})("input",function(){return n._onInput()}),t&2&&(Fh("id",n.id)("disabled",n.disabled&&!n.disabledInteractive)("required",n.required),Ah("name",n.name||null)("readonly",n._getReadonlyAttribute())("aria-disabled",n.disabled&&n.disabledInteractive?"true":null)("aria-invalid",n.empty&&n.required?null:n.errorState)("aria-required",n.required)("id",n.id),qh("mat-input-server",n._isServer)("mat-mdc-form-field-textarea-control",n._isInFormField&&n._isTextarea)("mat-mdc-form-field-input-control",n._isInFormField)("mat-mdc-input-disabled-interactive",n.disabledInteractive)("mdc-text-field__input",n._isInFormField)("mat-mdc-native-select-inline",n._isInlineSelect()));},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",bL]},exportAs:["matInput"],features:[Fw([{provide:wn,useExisting:i}]),Rc]})}return i})(),Jr=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=ns$1({type:i});static \u0275inj=Ir$1({imports:[Vt,Vt,$r,st$1]})}return i})();var rl=()=>["Aprobada","Rechazada","Mas plazo"],to=(i,a)=>a.kind;function ol(i,a){if(i&1){let e=YI();$i(0,"button",19),Lh("click",function(){let n=pd(e).$implicit,r=KI(2);return hd(r.selectResolution(n))}),Sw(1),wu();}if(i&2){let e=a.$implicit,t=KI(2);qh("bg-white",t.transitionModel().resolution===e)("text-[#203f75]",t.transitionModel().resolution===e)("shadow-sm",t.transitionModel().resolution===e)("text-slate-500",t.transitionModel().resolution!==e),wD(),bu(" ",e==="Mas plazo"?"M\xE1s plazo":e," ");}}function sl(i,a){i&1&&($i(0,"fieldset")(1,"legend",16),Sw(2,"Resoluci\xF3n"),wu(),$i(3,"div",17),$I(4,ol,2,9,"button",18,UI),wu()()),i&2&&(wD(4),zI(Pw(0,rl)));}function ll(i,a){if(i&1&&($i(0,"p",28),Sw(1),wu()),i&2){let e=a.$implicit;wD(),Jh(e.message);}}function dl(i,a){if(i&1&&$I(0,ll,2,1,"p",28,to),i&2){let e=KI(2);zI(e.transitionForm.estimatedDate().errors());}}function cl(i,a){if(i&1){let e=YI();$i(0,"div")(1,"span",20),Sw(2),wu(),$i(3,"mat-form-field",21)(4,"mat-icon",22),Sw(5,"event"),wu(),$i(6,"input",23),Lh("click",function(){pd(e);let n=iw(9);return hd(n.open())}),wu(),uE(),Rh(7,"mat-datepicker-toggle",24)(8,"mat-datepicker",25,0),wu(),VI(10,dl,2,0),$i(11,"p",26)(12,"mat-icon",27),Sw(13,"touch_app"),wu(),Sw(14," Toque el campo para elegir una fecha "),wu()();}if(i&2){let e=iw(9),t=KI();wD(2),bu(" ",t.dateLabel()," "),wD(4),xh("matDatepicker",e)("max",t.maximumDate())("formField",t.transitionForm.estimatedDate),dE(),wD(),xh("for",e),wD(3),HI(t.transitionForm.estimatedDate().touched()&&t.transitionForm.estimatedDate().invalid()?10:-1);}}function ml(i,a){if(i&1&&($i(0,"p",8)(1,"mat-icon",29),Sw(2,"event_available"),wu(),Sw(3),wu()),i&2){let e=KI();wD(3),bu(" ",e.automaticDateMessage()," ");}}function ul(i,a){i&1&&($i(0,"span",11),Sw(1,"*"),wu());}function hl(i,a){if(i&1&&($i(0,"p",28),Sw(1),wu()),i&2){let e=a.$implicit;wD(),Jh(e.message);}}function pl(i,a){if(i&1&&$I(0,hl,2,1,"p",28,to),i&2){let e=KI();zI(e.transitionForm.observation().errors());}}var eo=class i{item=IL.required();supply=IL.required();closed=EL();confirmed=EL();transitionModel=fi$1({estimatedDate:null,observation:"",resolution:"Aprobada"});isEvaluation=$w(()=>this.item().status==="Entregado");requiresDate=$w(()=>!this.isEvaluation()||this.transitionModel().resolution==="Mas plazo");requiresObservation=$w(()=>this.isEvaluation()&&this.transitionModel().resolution!=="Mas plazo");transitionForm=xt(this.transitionModel,a=>{Kr$1(a.estimatedDate,{message:"Seleccione una fecha.",when:()=>this.requiresDate()}),Kr$1(a.observation,{message:"Agregue una observaci\xF3n para cerrar el seguimiento.",when:()=>this.requiresObservation()});});title=$w(()=>({Pedido:"Marcar muestra como enviada",Enviado:"Confirmar recepci\xF3n",Recibido:"Confirmar entrega",Entregado:"Evaluar muestra",Aprobada:"Muestra aprobada",Rechazada:"Muestra rechazada"})[this.item().status]);dateLabel=$w(()=>this.item().status==="Pedido"?"Fecha estimada de recepci\xF3n":this.item().status==="Enviado"?"Fecha de visita al cliente":"Fecha m\xE1xima de seguimiento");maximumDate=$w(()=>this.item().status==="Recibido"||this.item().status==="Entregado"&&this.transitionModel().resolution==="Mas plazo"?this.addDays(new Date,15):null);automaticDateMessage=$w(()=>({Pedido:"La fecha del pedido se registr\xF3 autom\xE1ticamente al crearlo.",Enviado:"La fecha de recepci\xF3n se registrar\xE1 autom\xE1ticamente al confirmar.",Recibido:"La fecha de entrega se registrar\xE1 autom\xE1ticamente. Puede definir un seguimiento de hasta 15 d\xEDas.",Entregado:"El plazo puede extenderse hasta un m\xE1ximo de 15 d\xEDas. El feedback quedar\xE1 guardado en el historial.",Aprobada:"",Rechazada:""})[this.item().status]);ngOnInit(){this.item().status==="Recibido"&&this.transitionForm.estimatedDate().value.set(this.addDays(new Date,15));}selectResolution(a){if(this.transitionForm.resolution().value.set(a),a!=="Mas plazo")return;let e=this.parseDisplayDate(this.item().followUpMaxAt),t=e&&e.getTime()>Date.now()?e:new Date;this.transitionForm.estimatedDate().value.set(this.minimumDate(this.addDays(t,5),this.addDays(new Date,15)));}submit(){if(this.transitionForm().invalid())return;let a=this.transitionModel();this.confirmed.emit({estimatedDate:this.toInputDate(a.estimatedDate),observation:a.observation.trim(),resolution:this.isEvaluation()?a.resolution:void 0});}parseDisplayDate(a){if(!a)return null;let[e,t,n]=a.split("/").map(Number);return new Date(n,t-1,e)}addDays(a,e){let t=new Date(a.getFullYear(),a.getMonth(),a.getDate());return t.setDate(t.getDate()+e),t}minimumDate(a,e){return a.getTime()<=e.getTime()?a:e}toInputDate(a){if(!a)return "";let e=new Date(a.getFullYear(),a.getMonth(),a.getDate()),t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return `${t}-${n}-${r}`}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=KE({type:i,selectors:[["app-sample-transition-dialog"]],inputs:{item:[1,"item"],supply:[1,"supply"]},outputs:{closed:"closed",confirmed:"confirmed"},features:[Fw([{provide:wt,useValue:"es-AR"},Qa()])],decls:25,vars:11,consts:[["datePicker",""],[1,"mc-dialog","overflow-hidden","rounded-lg","bg-white","text-[#082653]","shadow-2xl"],[1,"flex","items-start","justify-between","border-b","border-slate-200","px-5","py-4"],[1,"min-w-0","pr-3"],[1,"text-lg","font-black"],[1,"mt-1","truncate","text-sm","text-slate-500"],["type","button","aria-label","Cerrar",1,"flex","size-9","shrink-0","items-center","justify-center","rounded-md","text-slate-400","transition","hover:bg-slate-100","hover:text-slate-700",3,"click"],[1,"space-y-4","px-5","py-5"],[1,"flex","items-start","gap-2","rounded-md","border","border-blue-100","bg-blue-50","px-3","py-2","text-xs","font-medium","text-blue-800"],[1,"block"],[1,"mb-1.5","block","text-xs","font-black","uppercase","text-slate-500"],[1,"text-red-600"],["rows","3",1,"w-full","resize-none","rounded-md","border","border-slate-200","px-3","py-2","text-sm","outline-none","transition","focus:border-[#45658f]",3,"placeholder","formField"],[1,"flex","justify-end","gap-3","border-t","border-slate-200","px-5","py-4"],["type","button",1,"h-10","rounded-md","border","border-slate-300","px-4","text-sm","font-bold","text-slate-600","transition","hover:bg-slate-50",3,"click"],["type","button",1,"h-10","rounded-md","bg-[#45658f]","px-5","text-sm","font-bold","text-white","transition","hover:bg-[#31547f]","disabled:cursor-not-allowed","disabled:opacity-50",3,"click","disabled"],[1,"mb-2","text-xs","font-black","uppercase","text-slate-500"],[1,"grid","grid-cols-3","rounded-md","bg-slate-100","p-1"],["type","button",1,"min-h-9","rounded","px-2","text-xs","font-bold","transition",3,"bg-white","text-[#203f75]","shadow-sm","text-slate-500"],["type","button",1,"min-h-9","rounded","px-2","text-xs","font-bold","transition",3,"click"],[1,"mb-2","block","text-xs","font-black","uppercase","text-slate-500"],["appearance","outline","subscriptSizing","dynamic",1,"mc-date-field","w-full"],["matPrefix",""],["matInput","","readonly","","placeholder","Seleccionar fecha",3,"click","matDatepicker","max","formField"],["matIconSuffix","",3,"for"],["panelClass","mc-date-picker","startView","month"],[1,"mt-1.5","flex","items-center","gap-1.5","text-[11px]","font-medium","text-slate-400"],[1,"!text-[15px]"],[1,"mt-1.5","text-xs","font-semibold","text-red-600"],[1,"!text-[17px]"]],template:function(e,t){e&1&&($i(0,"section",1)(1,"header",2)(2,"div",3)(3,"h2",4),Sw(4),wu(),$i(5,"p",5),Sw(6),wu()(),$i(7,"button",6),Lh("click",function(){return t.closed.emit()}),$i(8,"mat-icon"),Sw(9,"close"),wu()()(),$i(10,"div",7),VI(11,sl,6,1,"fieldset"),VI(12,cl,15,6,"div"),VI(13,ml,4,1,"p",8),$i(14,"label",9)(15,"span",10),Sw(16),VI(17,ul,2,0,"span",11),wu(),Rh(18,"textarea",12),uE(),VI(19,pl,2,0),wu()(),$i(20,"footer",13)(21,"button",14),Lh("click",function(){return t.closed.emit()}),Sw(22," Cancelar "),wu(),$i(23,"button",15),Lh("click",function(){return t.submit()}),Sw(24," Confirmar "),wu()()()),e&2&&(wD(4),Jh(t.title()),wD(2),Jh(t.supply().name),wD(5),HI(t.isEvaluation()?11:-1),wD(),HI(t.requiresDate()?12:-1),wD(),HI(t.automaticDateMessage()?13:-1),wD(3),bu(" ",t.isEvaluation()?"Feedback del cliente":"Observaci\xF3n"," "),wD(),HI(t.requiresObservation()?17:-1),wD(),xh("placeholder",t.requiresObservation()?"Describa el motivo de la resoluci\xF3n...":"Agregue un comentario sobre la gesti\xF3n...")("formField",t.transitionForm.observation),dE(),wD(),HI(t.transitionForm.observation().touched()&&t.transitionForm.observation().invalid()?19:-1),wD(4),xh("disabled",t.transitionForm().invalid()));},dependencies:[jr$1,qr,Zr,An,Bi,Vt,Dn,Mi,ki,Zt,Xt,Jr,Qr],encapsulation:2})};export{eo as SampleTransitionDialog};