/*! jQuery v1.11.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m="1.11.0",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(l.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:k&&!k.call("\ufeff\xa0")?function(a){return null==a?"":k.call(a)}:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||n.guid++,e):void 0},now:function(){return+new Date},support:l}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=a.document,A=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,B=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:A.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:z,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=z.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return y.find(a);this.length=1,this[0]=d}return this.context=z,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};B.prototype=n.fn,y=n(z);var C=/^(?:parents|prev(?:Until|All))/,D={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!n(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function E(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return E(a,"nextSibling")},prev:function(a){return E(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(D[a]||(e=n.unique(e)),C.test(a)&&(e=e.reverse())),this.pushStack(e)}});var F=/\S+/g,G={};function H(a){var b=G[a]={};return n.each(a.match(F)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?G[a]||H(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&n.each(arguments,function(a,c){var d;while((d=n.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){if(a===!0?!--n.readyWait:!n.isReady){if(!z.body)return setTimeout(n.ready);n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(z,[n]),n.fn.trigger&&n(z).trigger("ready").off("ready"))}}});function J(){z.addEventListener?(z.removeEventListener("DOMContentLoaded",K,!1),a.removeEventListener("load",K,!1)):(z.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(z.addEventListener||"load"===event.type||"complete"===z.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===z.readyState)setTimeout(n.ready);else if(z.addEventListener)z.addEventListener("DOMContentLoaded",K,!1),a.addEventListener("load",K,!1);else{z.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&z.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!n.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}J(),n.ready()}}()}return I.promise(b)};var L="undefined",M;for(M in n(l))break;l.ownLast="0"!==M,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c=z.getElementsByTagName("body")[0];c&&(a=z.createElement("div"),a.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",b=z.createElement("div"),c.appendChild(a).appendChild(b),typeof b.style.zoom!==L&&(b.style.cssText="border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1",(l.inlineBlockNeedsLayout=3===b.offsetWidth)&&(c.style.zoom=1)),c.removeChild(a),a=b=null)}),function(){var a=z.createElement("div");if(null==l.deleteExpando){l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}}a=null}(),n.acceptData=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(n.acceptData(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f
}}function S(a,b,c){if(n.acceptData(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d]));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},W=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},X=/^(?:checkbox|radio)$/i;!function(){var a=z.createDocumentFragment(),b=z.createElement("div"),c=z.createElement("input");if(b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a>",l.leadingWhitespace=3===b.firstChild.nodeType,l.tbody=!b.getElementsByTagName("tbody").length,l.htmlSerialize=!!b.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==z.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,a.appendChild(c),l.appendChecked=c.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,a.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){l.noCloneEvent=!1}),b.cloneNode(!0).click()),null==l.deleteExpando){l.deleteExpando=!0;try{delete b.test}catch(d){l.deleteExpando=!1}}a=b=c=null}(),function(){var b,c,d=z.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),l[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var Y=/^(?:input|select|textarea)$/i,Z=/^key/,$=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,ab=/^([^.]*)(?:\.(.+)|)$/;function bb(){return!0}function cb(){return!1}function db(){try{return z.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof n===L||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(F)||[""],h=b.length;while(h--)f=ab.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(F)||[""],j=b.length;while(j--)if(h=ab.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,m,o=[d||z],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||z,3!==d.nodeType&&8!==d.nodeType&&!_.test(p+n.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[n.expando]?b:new n.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),k=n.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!n.isWindow(d)){for(i=k.delegateType||p,_.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||z)&&o.push(l.defaultView||l.parentWindow||a)}m=0;while((h=o[m++])&&!b.isPropagationStopped())b.type=m>1?i:k.bindType||p,f=(n._data(h,"events")||{})[b.type]&&n._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&n.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&n.acceptData(d)&&g&&d[p]&&!n.isWindow(d)){l=d[g],l&&(d[g]=null),n.event.triggered=p;try{d[p]()}catch(r){}n.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((n.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?n(c,this).index(i)>=0:n.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=$.test(e)?this.mouseHooks:Z.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||z),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||z,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==db()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===db()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=z.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===L&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&(a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault())?bb:cb):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:cb,isPropagationStopped:cb,isImmediatePropagationStopped:cb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=bb,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=bb,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submitBubbles||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?b.form:void 0;c&&!n._data(c,"submitBubbles")&&(n.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),n._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.changeBubbles||(n.event.special.change={setup:function(){return Y.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),n.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),n.event.simulate("change",this,a,!0)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;Y.test(b.nodeName)&&!n._data(b,"changeBubbles")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a,!0)}),n._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!Y.test(this.nodeName)}}),l.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=cb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return n().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=cb),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});function eb(a){var b=fb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var fb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gb=/ jQuery\d+="(?:null|\d+)"/g,hb=new RegExp("<(?:"+fb+")[\\s/>]","i"),ib=/^\s+/,jb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,kb=/<([\w:]+)/,lb=/<tbody/i,mb=/<|&#?\w+;/,nb=/<(?:script|style|link)/i,ob=/checked\s*(?:[^=]|=\s*.checked.)/i,pb=/^$|\/(?:java|ecma)script/i,qb=/^true\/(.*)/,rb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,sb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},tb=eb(z),ub=tb.appendChild(z.createElement("div"));sb.optgroup=sb.option,sb.tbody=sb.tfoot=sb.colgroup=sb.caption=sb.thead,sb.th=sb.td;function vb(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==L?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==L?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,vb(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function wb(a){X.test(a.type)&&(a.defaultChecked=a.checked)}function xb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function yb(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function zb(a){var b=qb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ab(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}function Bb(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Cb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(yb(b).text=a.text,zb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&X.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}n.extend({clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!hb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ub.innerHTML=a.outerHTML,ub.removeChild(f=ub.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=vb(f),h=vb(a),g=0;null!=(e=h[g]);++g)d[g]&&Cb(e,d[g]);if(b)if(c)for(h=h||vb(a),d=d||vb(f),g=0;null!=(e=h[g]);g++)Bb(e,d[g]);else Bb(a,f);return d=vb(f,"script"),d.length>0&&Ab(d,!i&&vb(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k,m=a.length,o=eb(b),p=[],q=0;m>q;q++)if(f=a[q],f||0===f)if("object"===n.type(f))n.merge(p,f.nodeType?[f]:f);else if(mb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(kb.exec(f)||["",""])[1].toLowerCase(),k=sb[i]||sb._default,h.innerHTML=k[1]+f.replace(jb,"<$1></$2>")+k[2],e=k[0];while(e--)h=h.lastChild;if(!l.leadingWhitespace&&ib.test(f)&&p.push(b.createTextNode(ib.exec(f)[0])),!l.tbody){f="table"!==i||lb.test(f)?"<table>"!==k[1]||lb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)n.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}n.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),l.appendChecked||n.grep(vb(p,"input"),wb),q=0;while(f=p[q++])if((!d||-1===n.inArray(f,d))&&(g=n.contains(f.ownerDocument,f),h=vb(o.appendChild(f),"script"),g&&Ab(h),c)){e=0;while(f=h[e++])pb.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.deleteExpando,m=n.event.special;null!=(d=a[h]);h++)if((b||n.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k?delete d[i]:typeof d.removeAttribute!==L?d.removeAttribute(i):d[i]=null,c.push(f))}}}),n.fn.extend({text:function(a){return W(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||z).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(vb(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&Ab(vb(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(vb(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return W(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(gb,""):void 0;if(!("string"!=typeof a||nb.test(a)||!l.htmlSerialize&&hb.test(a)||!l.leadingWhitespace&&ib.test(a)||sb[(kb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(jb,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(vb(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(vb(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,o=k-1,p=a[0],q=n.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&ob.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(i=n.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=n.map(vb(i,"script"),yb),f=g.length;k>j;j++)d=i,j!==o&&(d=n.clone(d,!0,!0),f&&n.merge(g,vb(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,n.map(g,zb),j=0;f>j;j++)d=g[j],pb.test(d.type||"")&&!n._data(d,"globalEval")&&n.contains(h,d)&&(d.src?n._evalUrl&&n._evalUrl(d.src):n.globalEval((d.text||d.textContent||d.innerHTML||"").replace(rb,"")));i=c=null}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],g=n(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Db,Eb={};function Fb(b,c){var d=n(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:n.css(d[0],"display");return d.detach(),e}function Gb(a){var b=z,c=Eb[a];return c||(c=Fb(a,b),"none"!==c&&c||(Db=(Db||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Db[0].contentWindow||Db[0].contentDocument).document,b.write(),b.close(),c=Fb(a,b),Db.detach()),Eb[a]=c),c}!function(){var a,b,c=z.createElement("div"),d="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],a.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(a.style.opacity),l.cssFloat=!!a.style.cssFloat,c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===c.style.backgroundClip,a=c=null,l.shrinkWrapBlocks=function(){var a,c,e,f;if(null==b){if(a=z.getElementsByTagName("body")[0],!a)return;f="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",c=z.createElement("div"),e=z.createElement("div"),a.appendChild(c).appendChild(e),b=!1,typeof e.style.zoom!==L&&(e.style.cssText=d+";width:1px;padding:1px;zoom:1",e.innerHTML="<div></div>",e.firstChild.style.width="5px",b=3!==e.offsetWidth),a.removeChild(c),a=c=e=null}return b}}();var Hb=/^margin/,Ib=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Jb,Kb,Lb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Jb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),Ib.test(g)&&Hb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):z.documentElement.currentStyle&&(Jb=function(a){return a.currentStyle},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ib.test(g)&&!Lb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Mb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h=z.createElement("div"),i="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",j="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";h.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",b=h.getElementsByTagName("a")[0],b.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(b.style.opacity),l.cssFloat=!!b.style.cssFloat,h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,b=h=null,n.extend(l,{reliableHiddenOffsets:function(){if(null!=c)return c;var a,b,d,e=z.createElement("div"),f=z.getElementsByTagName("body")[0];if(f)return e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=z.createElement("div"),a.style.cssText=i,f.appendChild(a).appendChild(e),e.innerHTML="<table><tr><td></td><td>t</td></tr></table>",b=e.getElementsByTagName("td"),b[0].style.cssText="padding:0;margin:0;border:0;display:none",d=0===b[0].offsetHeight,b[0].style.display="",b[1].style.display="none",c=d&&0===b[0].offsetHeight,f.removeChild(a),e=f=null,c},boxSizing:function(){return null==d&&k(),d},boxSizingReliable:function(){return null==e&&k(),e},pixelPosition:function(){return null==f&&k(),f},reliableMarginRight:function(){var b,c,d,e;if(null==g&&a.getComputedStyle){if(b=z.getElementsByTagName("body")[0],!b)return;c=z.createElement("div"),d=z.createElement("div"),c.style.cssText=i,b.appendChild(c).appendChild(d),e=d.appendChild(z.createElement("div")),e.style.cssText=d.style.cssText=j,e.style.marginRight=e.style.width="0",d.style.width="1px",g=!parseFloat((a.getComputedStyle(e,null)||{}).marginRight),b.removeChild(c)}return g}});function k(){var b,c,h=z.getElementsByTagName("body")[0];h&&(b=z.createElement("div"),c=z.createElement("div"),b.style.cssText=i,h.appendChild(b).appendChild(c),c.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%",n.swap(h,null!=h.style.zoom?{zoom:1}:{},function(){d=4===c.offsetWidth}),e=!0,f=!1,g=!0,a.getComputedStyle&&(f="1%"!==(a.getComputedStyle(c,null)||{}).top,e="4px"===(a.getComputedStyle(c,null)||{width:"4px"}).width),h.removeChild(b),c=h=null)}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Nb=/alpha\([^)]*\)/i,Ob=/opacity\s*=\s*([^)]*)/,Pb=/^(none|table(?!-c[ea]).+)/,Qb=new RegExp("^("+T+")(.*)$","i"),Rb=new RegExp("^([+-])=("+T+")","i"),Sb={position:"absolute",visibility:"hidden",display:"block"},Tb={letterSpacing:0,fontWeight:400},Ub=["Webkit","O","Moz","ms"];function Vb(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ub.length;while(e--)if(b=Ub[e]+c,b in a)return b;return d}function Wb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=n._data(d,"olddisplay",Gb(d.nodeName)))):f[g]||(e=V(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Xb(a,b,c){var d=Qb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Yb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Zb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Jb(a),g=l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Kb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ib.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Yb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Kb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=Vb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Rb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]="",i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Vb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Kb(a,b,d)),"normal"===f&&b in Tb&&(f=Tb[b]),""===c||c?(e=parseFloat(f),c===!0||n.isNumeric(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&Pb.test(n.css(a,"display"))?n.swap(a,Sb,function(){return Zb(a,b,d)}):Zb(a,b,d):void 0},set:function(a,c,d){var e=d&&Jb(a);return Xb(a,c,d?Yb(a,b,d,l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Ob.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Nb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Nb.test(f)?f.replace(Nb,e):f+" "+e)}}),n.cssHooks.marginRight=Mb(l.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},Kb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Hb.test(a)||(n.cssHooks[a+b].set=Xb)}),n.fn.extend({css:function(a,b){return W(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Jb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)
},a,b,arguments.length>1)},show:function(){return Wb(this,!0)},hide:function(){return Wb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function $b(a,b,c,d,e){return new $b.prototype.init(a,b,c,d,e)}n.Tween=$b,$b.prototype={constructor:$b,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=$b.propHooks[this.prop];return a&&a.get?a.get(this):$b.propHooks._default.get(this)},run:function(a){var b,c=$b.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):$b.propHooks._default.set(this),this}},$b.prototype.init.prototype=$b.prototype,$b.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},$b.propHooks.scrollTop=$b.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=$b.prototype.init,n.fx.step={};var _b,ac,bc=/^(?:toggle|show|hide)$/,cc=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),dc=/queueHooks$/,ec=[jc],fc={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=cc.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&cc.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function gc(){return setTimeout(function(){_b=void 0}),_b=n.now()}function hc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=U[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function ic(a,b,c){for(var d,e=(fc[b]||[]).concat(fc["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function jc(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&V(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k=Gb(a.nodeName),"none"===j&&(j=k),"inline"===j&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==k?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],bc.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}if(!n.isEmptyObject(o)){r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=ic(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function kc(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function lc(a,b,c){var d,e,f=0,g=ec.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=_b||gc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:_b||gc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(kc(k,j.opts.specialEasing);g>f;f++)if(d=ec[f].call(j,a,k,j.opts))return d;return n.map(k,ic,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(lc,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],fc[c]=fc[c]||[],fc[c].unshift(b)},prefilter:function(a,b){b?ec.unshift(a):ec.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=lc(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&dc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(hc(b,!0),a,d,e)}}),n.each({slideDown:hc("show"),slideUp:hc("hide"),slideToggle:hc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(_b=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),_b=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ac||(ac=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(ac),ac=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e=z.createElement("div");e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=e.getElementsByTagName("a")[0],c=z.createElement("select"),d=c.appendChild(z.createElement("option")),b=e.getElementsByTagName("input")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==e.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=d.selected,l.enctype=!!z.createElement("form").enctype,c.disabled=!0,l.optDisabled=!d.disabled,b=z.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value,a=b=c=d=e=null}();var mc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(mc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.text(a)}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var nc,oc,pc=n.expr.attrHandle,qc=/^(?:checked|selected)$/i,rc=l.getSetAttribute,sc=l.input;n.fn.extend({attr:function(a,b){return W(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===L?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?oc:nc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(F);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?sc&&rc||!qc.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(rc?c:d)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),oc={set:function(a,b,c){return b===!1?n.removeAttr(a,c):sc&&rc||!qc.test(c)?a.setAttribute(!rc&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=pc[b]||n.find.attr;pc[b]=sc&&rc||!qc.test(b)?function(a,b,d){var e,f;return d||(f=pc[b],pc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,pc[b]=f),e}:function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),sc&&rc||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):nc&&nc.set(a,b,c)}}),rc||(nc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},pc.id=pc.name=pc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:nc.set},n.attrHooks.contenteditable={set:function(a,b,c){nc.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var tc=/^(?:input|select|textarea|button|object)$/i,uc=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return W(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):tc.test(a.nodeName)||uc.test(a.nodeName)&&a.href?0:-1}}}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var vc=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(F)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===L||"boolean"===c)&&(this.className&&n._data(this,"__className__",this.className),this.className=this.className||a===!1?"":n._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(vc," ").indexOf(b)>=0)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var wc=n.now(),xc=/\?/,yc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(yc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var zc,Ac,Bc=/#.*$/,Cc=/([?&])_=[^&]*/,Dc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Ec=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Fc=/^(?:GET|HEAD)$/,Gc=/^\/\//,Hc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ic={},Jc={},Kc="*/".concat("*");try{Ac=location.href}catch(Lc){Ac=z.createElement("a"),Ac.href="",Ac=Ac.href}zc=Hc.exec(Ac.toLowerCase())||[];function Mc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(F)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nc(a,b,c,d){var e={},f=a===Jc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Oc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Pc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Qc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ac,type:"GET",isLocal:Ec.test(zc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Oc(Oc(a,n.ajaxSettings),b):Oc(n.ajaxSettings,a)},ajaxPrefilter:Mc(Ic),ajaxTransport:Mc(Jc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Dc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||Ac)+"").replace(Bc,"").replace(Gc,zc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(F)||[""],null==k.crossDomain&&(c=Hc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===zc[1]&&c[2]===zc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(zc[3]||("http:"===zc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),Nc(Ic,k,b,v),2===t)return v;h=k.global,h&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Fc.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(xc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Cc.test(e)?e.replace(Cc,"$1_="+wc++):e+(xc.test(e)?"&":"?")+"_="+wc++)),k.ifModified&&(n.lastModified[e]&&v.setRequestHeader("If-Modified-Since",n.lastModified[e]),n.etag[e]&&v.setRequestHeader("If-None-Match",n.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Kc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Nc(Jc,k,b,v)){v.readyState=1,h&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Pc(k,v,c)),u=Qc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(n.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!l.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||n.css(a,"display"))},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var Rc=/%20/g,Sc=/\[\]$/,Tc=/\r?\n/g,Uc=/^(?:submit|button|image|reset|file)$/i,Vc=/^(?:input|select|textarea|keygen)/i;function Wc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Sc.test(a)?d(a,e):Wc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Wc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Wc(c,a[c],b,e);return d.join("&").replace(Rc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Vc.test(this.nodeName)&&!Uc.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Tc,"\r\n")}}):{name:b.name,value:c.replace(Tc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&$c()||_c()}:$c;var Xc=0,Yc={},Zc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Yc)Yc[a](void 0,!0)}),l.cors=!!Zc&&"withCredentials"in Zc,Zc=l.ajax=!!Zc,Zc&&n.ajaxTransport(function(a){if(!a.crossDomain||l.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Xc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Yc[g],b=void 0,f.onreadystatechange=n.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Yc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function $c(){try{return new a.XMLHttpRequest}catch(b){}}function _c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=z.head||n("head")[0]||z.documentElement;return{send:function(d,e){b=z.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var ad=[],bd=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=ad.pop()||n.expando+"_"+wc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(bd.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&bd.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(bd,"$1"+e):b.jsonp!==!1&&(b.url+=(xc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,ad.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||z;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var cd=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&cd)return cd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h,a.length),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&n.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var dd=a.document.documentElement;function ed(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?(typeof e.getBoundingClientRect!==L&&(d=e.getBoundingClientRect()),c=ed(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||dd;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||dd})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return W(this,function(a,d,e){var f=ed(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Mb(l.pixelPosition,function(a,c){return c?(c=Kb(a,b),Ib.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return W(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var fd=a.jQuery,gd=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=gd),b&&a.jQuery===n&&(a.jQuery=fd),n},typeof b===L&&(a.jQuery=a.$=n),n});

/*!
 * Bootstrap v3.0.3 (http://getbootstrap.com)
 * Copyright 2013 Twitter, Inc.
 * Licensed under http://www.apache.org/licenses/LICENSE-2.0
 */

if("undefined"==typeof jQuery)throw new Error("Bootstrap requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]}}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d)};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.is("input")?"val":"html",e=c.data();a+="Text",e.resetText||c.data("resetText",c[d]()),c[d](e[a]||this.options[a]),setTimeout(function(){"loadingText"==a?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.closest('[data-toggle="buttons"]'),b=!0;if(a.length){var c=this.$element.find("input");"radio"===c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?b=!1:a.find(".active").removeClass("active")),b&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}b&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition.end&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}this.sliding=!0,f&&this.pause();var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});if(!e.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(j),j.isDefaultPrevented())return;e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(600)}else{if(this.$element.trigger(j),j.isDefaultPrevented())return;d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")}return f&&this.cycle(),this}};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?(this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350),void 0):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(){a(d).remove(),a(e).each(function(b){var d=c(a(this));d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown")),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown"))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){if("ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b),f.trigger(d=a.Event("show.bs.dropdown")),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown"),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=a("[role=menu] li:not(.divider):visible a",f);if(h.length){var i=h.index(h.filter(":focus"));38==b.keyCode&&i>0&&i--,40==b.keyCode&&i<h.length-1&&i++,~i||(i=0),h.eq(i).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.load(this.options.remote)};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show(),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focus",i="hover"==g?"mouseleave":"blur";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show),void 0):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide),void 0):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this.tip();this.setContent(),this.options.animation&&c.addClass("fade");var d="function"==typeof this.options.placement?this.options.placement.call(this,c[0],this.$element[0]):this.options.placement,e=/\s?auto?\s?/i,f=e.test(d);f&&(d=d.replace(e,"")||"top"),c.detach().css({top:0,left:0,display:"block"}).addClass(d),this.options.container?c.appendTo(this.options.container):c.insertAfter(this.$element);var g=this.getPosition(),h=c[0].offsetWidth,i=c[0].offsetHeight;if(f){var j=this.$element.parent(),k=d,l=document.documentElement.scrollTop||document.body.scrollTop,m="body"==this.options.container?window.innerWidth:j.outerWidth(),n="body"==this.options.container?window.innerHeight:j.outerHeight(),o="body"==this.options.container?0:j.offset().left;d="bottom"==d&&g.top+g.height+i-l>n?"top":"top"==d&&g.top-l-i<0?"bottom":"right"==d&&g.right+h>m?"left":"left"==d&&g.left-h<o?"right":d,c.removeClass(k).addClass(d)}var p=this.getCalculatedOffset(d,g,h,i);this.applyPlacement(p,d),this.$element.trigger("shown.bs."+this.type)}},b.prototype.applyPlacement=function(a,b){var c,d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),a.top=a.top+g,a.left=a.left+h,d.offset(a).addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;if("top"==b&&j!=f&&(c=!0,a.top=a.top+f-j),/bottom|top/.test(b)){var k=0;a.left<0&&(k=-2*a.left,a.left=0,d.offset(a),i=d[0].offsetWidth,j=d[0].offsetHeight),this.replaceArrow(k-e+i,i,"left")}else this.replaceArrow(j-f,j,"top");c&&d.offset(a)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach()}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.$element.trigger("hidden.bs."+this.type),this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"html":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(c).is("body")?a(window):a(c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#\w/.test(e)&&a(e);return f&&f.length&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parents(".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top()),"function"==typeof h&&(h=f.bottom());var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;this.affixed!==i&&(this.unpin&&this.$element.css("top",""),this.affixed=i,this.unpin="bottom"==i?e.top-d:null,this.$element.removeClass(b.RESET).addClass("affix"+(i?"-"+i:"")),"bottom"==i&&this.$element.offset({top:document.body.offsetHeight-h-this.$element.height()}))}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);
jQuery(document).ready(function($) {
	
		// Color Changer
		$("#preset1" ).click(function(){
			$("#style-switch").attr("href", "css/presets/preset1.css" );
			return false;
		});
		$("#preset2" ).click(function(){
			$("#style-switch").attr("href", "css/presets/preset2.css" );
			return false;
		});
		$("#preset3" ).click(function(){
			$("#style-switch").attr("href", "css/presets/preset3.css" );
			return false;
		});
		$("#preset4" ).click(function(){
			$("#style-switch").attr("href", "css/presets/preset4.css" );
			return false;
		});
		$("#preset5" ).click(function(){
			$("#style-switch").attr("href", "css/presets/preset5.css" );
			return false;
		});
		$("#preset6" ).click(function(){
			$("#style-switch").attr("href", "css/presets/preset6.css" );
			return false;
		});

});
/*
 *  jQuery OwlCarousel v1.3.2
 *
 *  Copyright (c) 2013 Bartosz Wojciechowski
 *  http://www.owlgraphic.com/owlcarousel/
 *
 *  Licensed under MIT
 *
 */

/*JS Lint helpers: */
/*global dragMove: false, dragEnd: false, $, jQuery, alert, window, document */
/*jslint nomen: true, continue:true */

if (typeof Object.create !== "function") {
    Object.create = function (obj) {
        function F() {}
        F.prototype = obj;
        return new F();
    };
}
(function ($, window, document) {

    var Carousel = {
        init : function (options, el) {
            var base = this;

            base.$elem = $(el);
            base.options = $.extend({}, $.fn.owlCarousel.options, base.$elem.data(), options);

            base.userOptions = options;
            base.loadContent();
        },

        loadContent : function () {
            var base = this, url;

            function getData(data) {
                var i, content = "";
                if (typeof base.options.jsonSuccess === "function") {
                    base.options.jsonSuccess.apply(this, [data]);
                } else {
                    for (i in data.owl) {
                        if (data.owl.hasOwnProperty(i)) {
                            content += data.owl[i].item;
                        }
                    }
                    base.$elem.html(content);
                }
                base.logIn();
            }

            if (typeof base.options.beforeInit === "function") {
                base.options.beforeInit.apply(this, [base.$elem]);
            }

            if (typeof base.options.jsonPath === "string") {
                url = base.options.jsonPath;
                $.getJSON(url, getData);
            } else {
                base.logIn();
            }
        },

        logIn : function () {
            var base = this;

            base.$elem.data("owl-originalStyles", base.$elem.attr("style"))
                      .data("owl-originalClasses", base.$elem.attr("class"));

            base.$elem.css({opacity: 0});
            base.orignalItems = base.options.items;
            base.checkBrowser();
            base.wrapperWidth = 0;
            base.checkVisible = null;
            base.setVars();
        },

        setVars : function () {
            var base = this;
            if (base.$elem.children().length === 0) {return false; }
            base.baseClass();
            base.eventTypes();
            base.$userItems = base.$elem.children();
            base.itemsAmount = base.$userItems.length;
            base.wrapItems();
            base.$owlItems = base.$elem.find(".owl-item");
            base.$owlWrapper = base.$elem.find(".owl-wrapper");
            base.playDirection = "next";
            base.prevItem = 0;
            base.prevArr = [0];
            base.currentItem = 0;
            base.customEvents();
            base.onStartup();
        },

        onStartup : function () {
            var base = this;
            base.updateItems();
            base.calculateAll();
            base.buildControls();
            base.updateControls();
            base.response();
            base.moveEvents();
            base.stopOnHover();
            base.owlStatus();

            if (base.options.transitionStyle !== false) {
                base.transitionTypes(base.options.transitionStyle);
            }
            if (base.options.autoPlay === true) {
                base.options.autoPlay = 5000;
            }
            base.play();

            base.$elem.find(".owl-wrapper").css("display", "block");

            if (!base.$elem.is(":visible")) {
                base.watchVisibility();
            } else {
                base.$elem.css("opacity", 1);
            }
            base.onstartup = false;
            base.eachMoveUpdate();
            if (typeof base.options.afterInit === "function") {
                base.options.afterInit.apply(this, [base.$elem]);
            }
        },

        eachMoveUpdate : function () {
            var base = this;

            if (base.options.lazyLoad === true) {
                base.lazyLoad();
            }
            if (base.options.autoHeight === true) {
                base.autoHeight();
            }
            base.onVisibleItems();

            if (typeof base.options.afterAction === "function") {
                base.options.afterAction.apply(this, [base.$elem]);
            }
        },

        updateVars : function () {
            var base = this;
            if (typeof base.options.beforeUpdate === "function") {
                base.options.beforeUpdate.apply(this, [base.$elem]);
            }
            base.watchVisibility();
            base.updateItems();
            base.calculateAll();
            base.updatePosition();
            base.updateControls();
            base.eachMoveUpdate();
            if (typeof base.options.afterUpdate === "function") {
                base.options.afterUpdate.apply(this, [base.$elem]);
            }
        },

        reload : function () {
            var base = this;
            window.setTimeout(function () {
                base.updateVars();
            }, 0);
        },

        watchVisibility : function () {
            var base = this;

            if (base.$elem.is(":visible") === false) {
                base.$elem.css({opacity: 0});
                window.clearInterval(base.autoPlayInterval);
                window.clearInterval(base.checkVisible);
            } else {
                return false;
            }
            base.checkVisible = window.setInterval(function () {
                if (base.$elem.is(":visible")) {
                    base.reload();
                    base.$elem.animate({opacity: 1}, 200);
                    window.clearInterval(base.checkVisible);
                }
            }, 500);
        },

        wrapItems : function () {
            var base = this;
            base.$userItems.wrapAll("<div class=\"owl-wrapper\">").wrap("<div class=\"owl-item\"></div>");
            base.$elem.find(".owl-wrapper").wrap("<div class=\"owl-wrapper-outer\">");
            base.wrapperOuter = base.$elem.find(".owl-wrapper-outer");
            base.$elem.css("display", "block");
        },

        baseClass : function () {
            var base = this,
                hasBaseClass = base.$elem.hasClass(base.options.baseClass),
                hasThemeClass = base.$elem.hasClass(base.options.theme);

            if (!hasBaseClass) {
                base.$elem.addClass(base.options.baseClass);
            }

            if (!hasThemeClass) {
                base.$elem.addClass(base.options.theme);
            }
        },

        updateItems : function () {
            var base = this, width, i;

            if (base.options.responsive === false) {
                return false;
            }
            if (base.options.singleItem === true) {
                base.options.items = base.orignalItems = 1;
                base.options.itemsCustom = false;
                base.options.itemsDesktop = false;
                base.options.itemsDesktopSmall = false;
                base.options.itemsTablet = false;
                base.options.itemsTabletSmall = false;
                base.options.itemsMobile = false;
                return false;
            }

            width = $(base.options.responsiveBaseWidth).width();

            if (width > (base.options.itemsDesktop[0] || base.orignalItems)) {
                base.options.items = base.orignalItems;
            }
            if (base.options.itemsCustom !== false) {
                //Reorder array by screen size
                base.options.itemsCustom.sort(function (a, b) {return a[0] - b[0]; });

                for (i = 0; i < base.options.itemsCustom.length; i += 1) {
                    if (base.options.itemsCustom[i][0] <= width) {
                        base.options.items = base.options.itemsCustom[i][1];
                    }
                }

            } else {

                if (width <= base.options.itemsDesktop[0] && base.options.itemsDesktop !== false) {
                    base.options.items = base.options.itemsDesktop[1];
                }

                if (width <= base.options.itemsDesktopSmall[0] && base.options.itemsDesktopSmall !== false) {
                    base.options.items = base.options.itemsDesktopSmall[1];
                }

                if (width <= base.options.itemsTablet[0] && base.options.itemsTablet !== false) {
                    base.options.items = base.options.itemsTablet[1];
                }

                if (width <= base.options.itemsTabletSmall[0] && base.options.itemsTabletSmall !== false) {
                    base.options.items = base.options.itemsTabletSmall[1];
                }

                if (width <= base.options.itemsMobile[0] && base.options.itemsMobile !== false) {
                    base.options.items = base.options.itemsMobile[1];
                }
            }

            //if number of items is less than declared
            if (base.options.items > base.itemsAmount && base.options.itemsScaleUp === true) {
                base.options.items = base.itemsAmount;
            }
        },

        response : function () {
            var base = this,
                smallDelay,
                lastWindowWidth;

            if (base.options.responsive !== true) {
                return false;
            }
            lastWindowWidth = $(window).width();

            base.resizer = function () {
                if ($(window).width() !== lastWindowWidth) {
                    if (base.options.autoPlay !== false) {
                        window.clearInterval(base.autoPlayInterval);
                    }
                    window.clearTimeout(smallDelay);
                    smallDelay = window.setTimeout(function () {
                        lastWindowWidth = $(window).width();
                        base.updateVars();
                    }, base.options.responsiveRefreshRate);
                }
            };
            $(window).resize(base.resizer);
        },

        updatePosition : function () {
            var base = this;
            base.jumpTo(base.currentItem);
            if (base.options.autoPlay !== false) {
                base.checkAp();
            }
        },

        appendItemsSizes : function () {
            var base = this,
                roundPages = 0,
                lastItem = base.itemsAmount - base.options.items;

            base.$owlItems.each(function (index) {
                var $this = $(this);
                $this
                    .css({"width": base.itemWidth})
                    .data("owl-item", Number(index));

                if (index % base.options.items === 0 || index === lastItem) {
                    if (!(index > lastItem)) {
                        roundPages += 1;
                    }
                }
                $this.data("owl-roundPages", roundPages);
            });
        },

        appendWrapperSizes : function () {
            var base = this,
                width = base.$owlItems.length * base.itemWidth;

            base.$owlWrapper.css({
                "width": width * 2,
                "left": 0
            });
            base.appendItemsSizes();
        },

        calculateAll : function () {
            var base = this;
            base.calculateWidth();
            base.appendWrapperSizes();
            base.loops();
            base.max();
        },

        calculateWidth : function () {
            var base = this;
            base.itemWidth = Math.round(base.$elem.width() / base.options.items);
        },

        max : function () {
            var base = this,
                maximum = ((base.itemsAmount * base.itemWidth) - base.options.items * base.itemWidth) * -1;
            if (base.options.items > base.itemsAmount) {
                base.maximumItem = 0;
                maximum = 0;
                base.maximumPixels = 0;
            } else {
                base.maximumItem = base.itemsAmount - base.options.items;
                base.maximumPixels = maximum;
            }
            return maximum;
        },

        min : function () {
            return 0;
        },

        loops : function () {
            var base = this,
                prev = 0,
                elWidth = 0,
                i,
                item,
                roundPageNum;

            base.positionsInArray = [0];
            base.pagesInArray = [];

            for (i = 0; i < base.itemsAmount; i += 1) {
                elWidth += base.itemWidth;
                base.positionsInArray.push(-elWidth);

                if (base.options.scrollPerPage === true) {
                    item = $(base.$owlItems[i]);
                    roundPageNum = item.data("owl-roundPages");
                    if (roundPageNum !== prev) {
                        base.pagesInArray[prev] = base.positionsInArray[i];
                        prev = roundPageNum;
                    }
                }
            }
        },

        buildControls : function () {
            var base = this;
            if (base.options.navigation === true || base.options.pagination === true) {
                base.owlControls = $("<div class=\"owl-controls\"/>").toggleClass("clickable", !base.browser.isTouch).appendTo(base.$elem);
            }
            if (base.options.pagination === true) {
                base.buildPagination();
            }
            if (base.options.navigation === true) {
                base.buildButtons();
            }
        },

        buildButtons : function () {
            var base = this,
                buttonsWrapper = $("<div class=\"owl-buttons\"/>");
            base.owlControls.append(buttonsWrapper);

            base.buttonPrev = $("<div/>", {
                "class" : "owl-prev",
                "html" : base.options.navigationText[0] || ""
            });

            base.buttonNext = $("<div/>", {
                "class" : "owl-next",
                "html" : base.options.navigationText[1] || ""
            });

            buttonsWrapper
                .append(base.buttonPrev)
                .append(base.buttonNext);

            buttonsWrapper.on("touchstart.owlControls mousedown.owlControls", "div[class^=\"owl\"]", function (event) {
                event.preventDefault();
            });

            buttonsWrapper.on("touchend.owlControls mouseup.owlControls", "div[class^=\"owl\"]", function (event) {
                event.preventDefault();
                if ($(this).hasClass("owl-next")) {
                    base.next();
                } else {
                    base.prev();
                }
            });
        },

        buildPagination : function () {
            var base = this;

            base.paginationWrapper = $("<div class=\"owl-pagination\"/>");
            base.owlControls.append(base.paginationWrapper);

            base.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function (event) {
                event.preventDefault();
                if (Number($(this).data("owl-page")) !== base.currentItem) {
                    base.goTo(Number($(this).data("owl-page")), true);
                }
            });
        },

        updatePagination : function () {
            var base = this,
                counter,
                lastPage,
                lastItem,
                i,
                paginationButton,
                paginationButtonInner;

            if (base.options.pagination === false) {
                return false;
            }

            base.paginationWrapper.html("");

            counter = 0;
            lastPage = base.itemsAmount - base.itemsAmount % base.options.items;

            for (i = 0; i < base.itemsAmount; i += 1) {
                if (i % base.options.items === 0) {
                    counter += 1;
                    if (lastPage === i) {
                        lastItem = base.itemsAmount - base.options.items;
                    }
                    paginationButton = $("<div/>", {
                        "class" : "owl-page"
                    });
                    paginationButtonInner = $("<span></span>", {
                        "text": base.options.paginationNumbers === true ? counter : "",
                        "class": base.options.paginationNumbers === true ? "owl-numbers" : ""
                    });
                    paginationButton.append(paginationButtonInner);

                    paginationButton.data("owl-page", lastPage === i ? lastItem : i);
                    paginationButton.data("owl-roundPages", counter);

                    base.paginationWrapper.append(paginationButton);
                }
            }
            base.checkPagination();
        },
        checkPagination : function () {
            var base = this;
            if (base.options.pagination === false) {
                return false;
            }
            base.paginationWrapper.find(".owl-page").each(function () {
                if ($(this).data("owl-roundPages") === $(base.$owlItems[base.currentItem]).data("owl-roundPages")) {
                    base.paginationWrapper
                        .find(".owl-page")
                        .removeClass("active");
                    $(this).addClass("active");
                }
            });
        },

        checkNavigation : function () {
            var base = this;

            if (base.options.navigation === false) {
                return false;
            }
            if (base.options.rewindNav === false) {
                if (base.currentItem === 0 && base.maximumItem === 0) {
                    base.buttonPrev.addClass("disabled");
                    base.buttonNext.addClass("disabled");
                } else if (base.currentItem === 0 && base.maximumItem !== 0) {
                    base.buttonPrev.addClass("disabled");
                    base.buttonNext.removeClass("disabled");
                } else if (base.currentItem === base.maximumItem) {
                    base.buttonPrev.removeClass("disabled");
                    base.buttonNext.addClass("disabled");
                } else if (base.currentItem !== 0 && base.currentItem !== base.maximumItem) {
                    base.buttonPrev.removeClass("disabled");
                    base.buttonNext.removeClass("disabled");
                }
            }
        },

        updateControls : function () {
            var base = this;
            base.updatePagination();
            base.checkNavigation();
            if (base.owlControls) {
                if (base.options.items >= base.itemsAmount) {
                    base.owlControls.hide();
                } else {
                    base.owlControls.show();
                }
            }
        },

        destroyControls : function () {
            var base = this;
            if (base.owlControls) {
                base.owlControls.remove();
            }
        },

        next : function (speed) {
            var base = this;

            if (base.isTransition) {
                return false;
            }

            base.currentItem += base.options.scrollPerPage === true ? base.options.items : 1;
            if (base.currentItem > base.maximumItem + (base.options.scrollPerPage === true ? (base.options.items - 1) : 0)) {
                if (base.options.rewindNav === true) {
                    base.currentItem = 0;
                    speed = "rewind";
                } else {
                    base.currentItem = base.maximumItem;
                    return false;
                }
            }
            base.goTo(base.currentItem, speed);
        },

        prev : function (speed) {
            var base = this;

            if (base.isTransition) {
                return false;
            }

            if (base.options.scrollPerPage === true && base.currentItem > 0 && base.currentItem < base.options.items) {
                base.currentItem = 0;
            } else {
                base.currentItem -= base.options.scrollPerPage === true ? base.options.items : 1;
            }
            if (base.currentItem < 0) {
                if (base.options.rewindNav === true) {
                    base.currentItem = base.maximumItem;
                    speed = "rewind";
                } else {
                    base.currentItem = 0;
                    return false;
                }
            }
            base.goTo(base.currentItem, speed);
        },

        goTo : function (position, speed, drag) {
            var base = this,
                goToPixel;

            if (base.isTransition) {
                return false;
            }
            if (typeof base.options.beforeMove === "function") {
                base.options.beforeMove.apply(this, [base.$elem]);
            }
            if (position >= base.maximumItem) {
                position = base.maximumItem;
            } else if (position <= 0) {
                position = 0;
            }

            base.currentItem = base.owl.currentItem = position;
            if (base.options.transitionStyle !== false && drag !== "drag" && base.options.items === 1 && base.browser.support3d === true) {
                base.swapSpeed(0);
                if (base.browser.support3d === true) {
                    base.transition3d(base.positionsInArray[position]);
                } else {
                    base.css2slide(base.positionsInArray[position], 1);
                }
                base.afterGo();
                base.singleItemTransition();
                return false;
            }
            goToPixel = base.positionsInArray[position];

            if (base.browser.support3d === true) {
                base.isCss3Finish = false;

                if (speed === true) {
                    base.swapSpeed("paginationSpeed");
                    window.setTimeout(function () {
                        base.isCss3Finish = true;
                    }, base.options.paginationSpeed);

                } else if (speed === "rewind") {
                    base.swapSpeed(base.options.rewindSpeed);
                    window.setTimeout(function () {
                        base.isCss3Finish = true;
                    }, base.options.rewindSpeed);

                } else {
                    base.swapSpeed("slideSpeed");
                    window.setTimeout(function () {
                        base.isCss3Finish = true;
                    }, base.options.slideSpeed);
                }
                base.transition3d(goToPixel);
            } else {
                if (speed === true) {
                    base.css2slide(goToPixel, base.options.paginationSpeed);
                } else if (speed === "rewind") {
                    base.css2slide(goToPixel, base.options.rewindSpeed);
                } else {
                    base.css2slide(goToPixel, base.options.slideSpeed);
                }
            }
            base.afterGo();
        },

        jumpTo : function (position) {
            var base = this;
            if (typeof base.options.beforeMove === "function") {
                base.options.beforeMove.apply(this, [base.$elem]);
            }
            if (position >= base.maximumItem || position === -1) {
                position = base.maximumItem;
            } else if (position <= 0) {
                position = 0;
            }
            base.swapSpeed(0);
            if (base.browser.support3d === true) {
                base.transition3d(base.positionsInArray[position]);
            } else {
                base.css2slide(base.positionsInArray[position], 1);
            }
            base.currentItem = base.owl.currentItem = position;
            base.afterGo();
        },

        afterGo : function () {
            var base = this;

            base.prevArr.push(base.currentItem);
            base.prevItem = base.owl.prevItem = base.prevArr[base.prevArr.length - 2];
            base.prevArr.shift(0);

            if (base.prevItem !== base.currentItem) {
                base.checkPagination();
                base.checkNavigation();
                base.eachMoveUpdate();

                if (base.options.autoPlay !== false) {
                    base.checkAp();
                }
            }
            if (typeof base.options.afterMove === "function" && base.prevItem !== base.currentItem) {
                base.options.afterMove.apply(this, [base.$elem]);
            }
        },

        stop : function () {
            var base = this;
            base.apStatus = "stop";
            window.clearInterval(base.autoPlayInterval);
        },

        checkAp : function () {
            var base = this;
            if (base.apStatus !== "stop") {
                base.play();
            }
        },

        play : function () {
            var base = this;
            base.apStatus = "play";
            if (base.options.autoPlay === false) {
                return false;
            }
            window.clearInterval(base.autoPlayInterval);
            base.autoPlayInterval = window.setInterval(function () {
                base.next(true);
            }, base.options.autoPlay);
        },

        swapSpeed : function (action) {
            var base = this;
            if (action === "slideSpeed") {
                base.$owlWrapper.css(base.addCssSpeed(base.options.slideSpeed));
            } else if (action === "paginationSpeed") {
                base.$owlWrapper.css(base.addCssSpeed(base.options.paginationSpeed));
            } else if (typeof action !== "string") {
                base.$owlWrapper.css(base.addCssSpeed(action));
            }
        },

        addCssSpeed : function (speed) {
            return {
                "-webkit-transition": "all " + speed + "ms ease",
                "-moz-transition": "all " + speed + "ms ease",
                "-o-transition": "all " + speed + "ms ease",
                "transition": "all " + speed + "ms ease"
            };
        },

        removeTransition : function () {
            return {
                "-webkit-transition": "",
                "-moz-transition": "",
                "-o-transition": "",
                "transition": ""
            };
        },

        doTranslate : function (pixels) {
            return {
                "-webkit-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "-moz-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "-o-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "-ms-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "transform": "translate3d(" + pixels + "px, 0px,0px)"
            };
        },

        transition3d : function (value) {
            var base = this;
            base.$owlWrapper.css(base.doTranslate(value));
        },

        css2move : function (value) {
            var base = this;
            base.$owlWrapper.css({"left" : value});
        },

        css2slide : function (value, speed) {
            var base = this;

            base.isCssFinish = false;
            base.$owlWrapper.stop(true, true).animate({
                "left" : value
            }, {
                duration : speed || base.options.slideSpeed,
                complete : function () {
                    base.isCssFinish = true;
                }
            });
        },

        checkBrowser : function () {
            var base = this,
                translate3D = "translate3d(0px, 0px, 0px)",
                tempElem = document.createElement("div"),
                regex,
                asSupport,
                support3d,
                isTouch;

            tempElem.style.cssText = "  -moz-transform:" + translate3D +
                                  "; -ms-transform:"     + translate3D +
                                  "; -o-transform:"      + translate3D +
                                  "; -webkit-transform:" + translate3D +
                                  "; transform:"         + translate3D;
            regex = /translate3d\(0px, 0px, 0px\)/g;
            asSupport = tempElem.style.cssText.match(regex);
            support3d = (asSupport !== null && asSupport.length === 1);

            isTouch = "ontouchstart" in window || window.navigator.msMaxTouchPoints;

            base.browser = {
                "support3d" : support3d,
                "isTouch" : isTouch
            };
        },

        moveEvents : function () {
            var base = this;
            if (base.options.mouseDrag !== false || base.options.touchDrag !== false) {
                base.gestures();
                base.disabledEvents();
            }
        },

        eventTypes : function () {
            var base = this,
                types = ["s", "e", "x"];

            base.ev_types = {};

            if (base.options.mouseDrag === true && base.options.touchDrag === true) {
                types = [
                    "touchstart.owl mousedown.owl",
                    "touchmove.owl mousemove.owl",
                    "touchend.owl touchcancel.owl mouseup.owl"
                ];
            } else if (base.options.mouseDrag === false && base.options.touchDrag === true) {
                types = [
                    "touchstart.owl",
                    "touchmove.owl",
                    "touchend.owl touchcancel.owl"
                ];
            } else if (base.options.mouseDrag === true && base.options.touchDrag === false) {
                types = [
                    "mousedown.owl",
                    "mousemove.owl",
                    "mouseup.owl"
                ];
            }

            base.ev_types.start = types[0];
            base.ev_types.move = types[1];
            base.ev_types.end = types[2];
        },

        disabledEvents :  function () {
            var base = this;
            base.$elem.on("dragstart.owl", function (event) { event.preventDefault(); });
            base.$elem.on("mousedown.disableTextSelect", function (e) {
                return $(e.target).is('input, textarea, select, option');
            });
        },

        gestures : function () {
            /*jslint unparam: true*/
            var base = this,
                locals = {
                    offsetX : 0,
                    offsetY : 0,
                    baseElWidth : 0,
                    relativePos : 0,
                    position: null,
                    minSwipe : null,
                    maxSwipe: null,
                    sliding : null,
                    dargging: null,
                    targetElement : null
                };

            base.isCssFinish = true;

            function getTouches(event) {
                if (event.touches !== undefined) {
                    return {
                        x : event.touches[0].pageX,
                        y : event.touches[0].pageY
                    };
                }

                if (event.touches === undefined) {
                    if (event.pageX !== undefined) {
                        return {
                            x : event.pageX,
                            y : event.pageY
                        };
                    }
                    if (event.pageX === undefined) {
                        return {
                            x : event.clientX,
                            y : event.clientY
                        };
                    }
                }
            }

            function swapEvents(type) {
                if (type === "on") {
                    $(document).on(base.ev_types.move, dragMove);
                    $(document).on(base.ev_types.end, dragEnd);
                } else if (type === "off") {
                    $(document).off(base.ev_types.move);
                    $(document).off(base.ev_types.end);
                }
            }

            function dragStart(event) {
                var ev = event.originalEvent || event || window.event,
                    position;

                if (ev.which === 3) {
                    return false;
                }
                if (base.itemsAmount <= base.options.items) {
                    return;
                }
                if (base.isCssFinish === false && !base.options.dragBeforeAnimFinish) {
                    return false;
                }
                if (base.isCss3Finish === false && !base.options.dragBeforeAnimFinish) {
                    return false;
                }

                if (base.options.autoPlay !== false) {
                    window.clearInterval(base.autoPlayInterval);
                }

                if (base.browser.isTouch !== true && !base.$owlWrapper.hasClass("grabbing")) {
                    base.$owlWrapper.addClass("grabbing");
                }

                base.newPosX = 0;
                base.newRelativeX = 0;

                $(this).css(base.removeTransition());

                position = $(this).position();
                locals.relativePos = position.left;

                locals.offsetX = getTouches(ev).x - position.left;
                locals.offsetY = getTouches(ev).y - position.top;

                swapEvents("on");

                locals.sliding = false;
                locals.targetElement = ev.target || ev.srcElement;
            }

            function dragMove(event) {
                var ev = event.originalEvent || event || window.event,
                    minSwipe,
                    maxSwipe;

                base.newPosX = getTouches(ev).x - locals.offsetX;
                base.newPosY = getTouches(ev).y - locals.offsetY;
                base.newRelativeX = base.newPosX - locals.relativePos;

                if (typeof base.options.startDragging === "function" && locals.dragging !== true && base.newRelativeX !== 0) {
                    locals.dragging = true;
                    base.options.startDragging.apply(base, [base.$elem]);
                }

                if ((base.newRelativeX > 8 || base.newRelativeX < -8) && (base.browser.isTouch === true)) {
                    if (ev.preventDefault !== undefined) {
                        ev.preventDefault();
                    } else {
                        ev.returnValue = false;
                    }
                    locals.sliding = true;
                }

                if ((base.newPosY > 10 || base.newPosY < -10) && locals.sliding === false) {
                    $(document).off("touchmove.owl");
                }

                minSwipe = function () {
                    return base.newRelativeX / 5;
                };

                maxSwipe = function () {
                    return base.maximumPixels + base.newRelativeX / 5;
                };

                base.newPosX = Math.max(Math.min(base.newPosX, minSwipe()), maxSwipe());
                if (base.browser.support3d === true) {
                    base.transition3d(base.newPosX);
                } else {
                    base.css2move(base.newPosX);
                }
            }

            function dragEnd(event) {
                var ev = event.originalEvent || event || window.event,
                    newPosition,
                    handlers,
                    owlStopEvent;

                ev.target = ev.target || ev.srcElement;

                locals.dragging = false;

                if (base.browser.isTouch !== true) {
                    base.$owlWrapper.removeClass("grabbing");
                }

                if (base.newRelativeX < 0) {
                    base.dragDirection = base.owl.dragDirection = "left";
                } else {
                    base.dragDirection = base.owl.dragDirection = "right";
                }

                if (base.newRelativeX !== 0) {
                    newPosition = base.getNewPosition();
                    base.goTo(newPosition, false, "drag");
                    if (locals.targetElement === ev.target && base.browser.isTouch !== true) {
                        $(ev.target).on("click.disable", function (ev) {
                            ev.stopImmediatePropagation();
                            ev.stopPropagation();
                            ev.preventDefault();
                            $(ev.target).off("click.disable");
                        });
                        handlers = $._data(ev.target, "events").click;
                        owlStopEvent = handlers.pop();
                        handlers.splice(0, 0, owlStopEvent);
                    }
                }
                swapEvents("off");
            }
            base.$elem.on(base.ev_types.start, ".owl-wrapper", dragStart);
        },

        getNewPosition : function () {
            var base = this,
                newPosition = base.closestItem();

            if (newPosition > base.maximumItem) {
                base.currentItem = base.maximumItem;
                newPosition  = base.maximumItem;
            } else if (base.newPosX >= 0) {
                newPosition = 0;
                base.currentItem = 0;
            }
            return newPosition;
        },
        closestItem : function () {
            var base = this,
                array = base.options.scrollPerPage === true ? base.pagesInArray : base.positionsInArray,
                goal = base.newPosX,
                closest = null;

            $.each(array, function (i, v) {
                if (goal - (base.itemWidth / 20) > array[i + 1] && goal - (base.itemWidth / 20) < v && base.moveDirection() === "left") {
                    closest = v;
                    if (base.options.scrollPerPage === true) {
                        base.currentItem = $.inArray(closest, base.positionsInArray);
                    } else {
                        base.currentItem = i;
                    }
                } else if (goal + (base.itemWidth / 20) < v && goal + (base.itemWidth / 20) > (array[i + 1] || array[i] - base.itemWidth) && base.moveDirection() === "right") {
                    if (base.options.scrollPerPage === true) {
                        closest = array[i + 1] || array[array.length - 1];
                        base.currentItem = $.inArray(closest, base.positionsInArray);
                    } else {
                        closest = array[i + 1];
                        base.currentItem = i + 1;
                    }
                }
            });
            return base.currentItem;
        },

        moveDirection : function () {
            var base = this,
                direction;
            if (base.newRelativeX < 0) {
                direction = "right";
                base.playDirection = "next";
            } else {
                direction = "left";
                base.playDirection = "prev";
            }
            return direction;
        },

        customEvents : function () {
            /*jslint unparam: true*/
            var base = this;
            base.$elem.on("owl.next", function () {
                base.next();
            });
            base.$elem.on("owl.prev", function () {
                base.prev();
            });
            base.$elem.on("owl.play", function (event, speed) {
                base.options.autoPlay = speed;
                base.play();
                base.hoverStatus = "play";
            });
            base.$elem.on("owl.stop", function () {
                base.stop();
                base.hoverStatus = "stop";
            });
            base.$elem.on("owl.goTo", function (event, item) {
                base.goTo(item);
            });
            base.$elem.on("owl.jumpTo", function (event, item) {
                base.jumpTo(item);
            });
        },

        stopOnHover : function () {
            var base = this;
            if (base.options.stopOnHover === true && base.browser.isTouch !== true && base.options.autoPlay !== false) {
                base.$elem.on("mouseover", function () {
                    base.stop();
                });
                base.$elem.on("mouseout", function () {
                    if (base.hoverStatus !== "stop") {
                        base.play();
                    }
                });
            }
        },

        lazyLoad : function () {
            var base = this,
                i,
                $item,
                itemNumber,
                $lazyImg,
                follow;

            if (base.options.lazyLoad === false) {
                return false;
            }
            for (i = 0; i < base.itemsAmount; i += 1) {
                $item = $(base.$owlItems[i]);

                if ($item.data("owl-loaded") === "loaded") {
                    continue;
                }

                itemNumber = $item.data("owl-item");
                $lazyImg = $item.find(".lazyOwl");

                if (typeof $lazyImg.data("src") !== "string") {
                    $item.data("owl-loaded", "loaded");
                    continue;
                }
                if ($item.data("owl-loaded") === undefined) {
                    $lazyImg.hide();
                    $item.addClass("loading").data("owl-loaded", "checked");
                }
                if (base.options.lazyFollow === true) {
                    follow = itemNumber >= base.currentItem;
                } else {
                    follow = true;
                }
                if (follow && itemNumber < base.currentItem + base.options.items && $lazyImg.length) {
                    base.lazyPreload($item, $lazyImg);
                }
            }
        },

        lazyPreload : function ($item, $lazyImg) {
            var base = this,
                iterations = 0,
                isBackgroundImg;

            if ($lazyImg.prop("tagName") === "DIV") {
                $lazyImg.css("background-image", "url(" + $lazyImg.data("src") + ")");
                isBackgroundImg = true;
            } else {
                $lazyImg[0].src = $lazyImg.data("src");
            }

            function showImage() {
                $item.data("owl-loaded", "loaded").removeClass("loading");
                $lazyImg.removeAttr("data-src");
                if (base.options.lazyEffect === "fade") {
                    $lazyImg.fadeIn(400);
                } else {
                    $lazyImg.show();
                }
                if (typeof base.options.afterLazyLoad === "function") {
                    base.options.afterLazyLoad.apply(this, [base.$elem]);
                }
            }

            function checkLazyImage() {
                iterations += 1;
                if (base.completeImg($lazyImg.get(0)) || isBackgroundImg === true) {
                    showImage();
                } else if (iterations <= 100) {//if image loads in less than 10 seconds 
                    window.setTimeout(checkLazyImage, 100);
                } else {
                    showImage();
                }
            }

            checkLazyImage();
        },

        autoHeight : function () {
            var base = this,
                $currentimg = $(base.$owlItems[base.currentItem]).find("img"),
                iterations;

            function addHeight() {
                var $currentItem = $(base.$owlItems[base.currentItem]).height();
                base.wrapperOuter.css("height", $currentItem + "px");
                if (!base.wrapperOuter.hasClass("autoHeight")) {
                    window.setTimeout(function () {
                        base.wrapperOuter.addClass("autoHeight");
                    }, 0);
                }
            }

            function checkImage() {
                iterations += 1;
                if (base.completeImg($currentimg.get(0))) {
                    addHeight();
                } else if (iterations <= 100) { //if image loads in less than 10 seconds 
                    window.setTimeout(checkImage, 100);
                } else {
                    base.wrapperOuter.css("height", ""); //Else remove height attribute
                }
            }

            if ($currentimg.get(0) !== undefined) {
                iterations = 0;
                checkImage();
            } else {
                addHeight();
            }
        },

        completeImg : function (img) {
            var naturalWidthType;

            if (!img.complete) {
                return false;
            }
            naturalWidthType = typeof img.naturalWidth;
            if (naturalWidthType !== "undefined" && img.naturalWidth === 0) {
                return false;
            }
            return true;
        },

        onVisibleItems : function () {
            var base = this,
                i;

            if (base.options.addClassActive === true) {
                base.$owlItems.removeClass("active");
            }
            base.visibleItems = [];
            for (i = base.currentItem; i < base.currentItem + base.options.items; i += 1) {
                base.visibleItems.push(i);

                if (base.options.addClassActive === true) {
                    $(base.$owlItems[i]).addClass("active");
                }
            }
            base.owl.visibleItems = base.visibleItems;
        },

        transitionTypes : function (className) {
            var base = this;
            //Currently available: "fade", "backSlide", "goDown", "fadeUp"
            base.outClass = "owl-" + className + "-out";
            base.inClass = "owl-" + className + "-in";
        },

        singleItemTransition : function () {
            var base = this,
                outClass = base.outClass,
                inClass = base.inClass,
                $currentItem = base.$owlItems.eq(base.currentItem),
                $prevItem = base.$owlItems.eq(base.prevItem),
                prevPos = Math.abs(base.positionsInArray[base.currentItem]) + base.positionsInArray[base.prevItem],
                origin = Math.abs(base.positionsInArray[base.currentItem]) + base.itemWidth / 2,
                animEnd = 'webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend';

            base.isTransition = true;

            base.$owlWrapper
                .addClass('owl-origin')
                .css({
                    "-webkit-transform-origin" : origin + "px",
                    "-moz-perspective-origin" : origin + "px",
                    "perspective-origin" : origin + "px"
                });
            function transStyles(prevPos) {
                return {
                    "position" : "relative",
                    "left" : prevPos + "px"
                };
            }

            $prevItem
                .css(transStyles(prevPos, 10))
                .addClass(outClass)
                .on(animEnd, function () {
                    base.endPrev = true;
                    $prevItem.off(animEnd);
                    base.clearTransStyle($prevItem, outClass);
                });

            $currentItem
                .addClass(inClass)
                .on(animEnd, function () {
                    base.endCurrent = true;
                    $currentItem.off(animEnd);
                    base.clearTransStyle($currentItem, inClass);
                });
        },

        clearTransStyle : function (item, classToRemove) {
            var base = this;
            item.css({
                "position" : "",
                "left" : ""
            }).removeClass(classToRemove);

            if (base.endPrev && base.endCurrent) {
                base.$owlWrapper.removeClass('owl-origin');
                base.endPrev = false;
                base.endCurrent = false;
                base.isTransition = false;
            }
        },

        owlStatus : function () {
            var base = this;
            base.owl = {
                "userOptions"   : base.userOptions,
                "baseElement"   : base.$elem,
                "userItems"     : base.$userItems,
                "owlItems"      : base.$owlItems,
                "currentItem"   : base.currentItem,
                "prevItem"      : base.prevItem,
                "visibleItems"  : base.visibleItems,
                "isTouch"       : base.browser.isTouch,
                "browser"       : base.browser,
                "dragDirection" : base.dragDirection
            };
        },

        clearEvents : function () {
            var base = this;
            base.$elem.off(".owl owl mousedown.disableTextSelect");
            $(document).off(".owl owl");
            $(window).off("resize", base.resizer);
        },

        unWrap : function () {
            var base = this;
            if (base.$elem.children().length !== 0) {
                base.$owlWrapper.unwrap();
                base.$userItems.unwrap().unwrap();
                if (base.owlControls) {
                    base.owlControls.remove();
                }
            }
            base.clearEvents();
            base.$elem
                .attr("style", base.$elem.data("owl-originalStyles") || "")
                .attr("class", base.$elem.data("owl-originalClasses"));
        },

        destroy : function () {
            var base = this;
            base.stop();
            window.clearInterval(base.checkVisible);
            base.unWrap();
            base.$elem.removeData();
        },

        reinit : function (newOptions) {
            var base = this,
                options = $.extend({}, base.userOptions, newOptions);
            base.unWrap();
            base.init(options, base.$elem);
        },

        addItem : function (htmlString, targetPosition) {
            var base = this,
                position;

            if (!htmlString) {return false; }

            if (base.$elem.children().length === 0) {
                base.$elem.append(htmlString);
                base.setVars();
                return false;
            }
            base.unWrap();
            if (targetPosition === undefined || targetPosition === -1) {
                position = -1;
            } else {
                position = targetPosition;
            }
            if (position >= base.$userItems.length || position === -1) {
                base.$userItems.eq(-1).after(htmlString);
            } else {
                base.$userItems.eq(position).before(htmlString);
            }

            base.setVars();
        },

        removeItem : function (targetPosition) {
            var base = this,
                position;

            if (base.$elem.children().length === 0) {
                return false;
            }
            if (targetPosition === undefined || targetPosition === -1) {
                position = -1;
            } else {
                position = targetPosition;
            }

            base.unWrap();
            base.$userItems.eq(position).remove();
            base.setVars();
        }

    };

    $.fn.owlCarousel = function (options) {
        return this.each(function () {
            if ($(this).data("owl-init") === true) {
                return false;
            }
            $(this).data("owl-init", true);
            var carousel = Object.create(Carousel);
            carousel.init(options, this);
            $.data(this, "owlCarousel", carousel);
        });
    };

    $.fn.owlCarousel.options = {

        items : 5,
        itemsCustom : false,
        itemsDesktop : [1199, 4],
        itemsDesktopSmall : [979, 3],
        itemsTablet : [768, 2],
        itemsTabletSmall : false,
        itemsMobile : [479, 1],
        singleItem : false,
        itemsScaleUp : false,

        slideSpeed : 200,
        paginationSpeed : 800,
        rewindSpeed : 1000,

        autoPlay : false,
        stopOnHover : false,

        navigation : false,
        navigationText : ["prev", "next"],
        rewindNav : true,
        scrollPerPage : false,

        pagination : true,
        paginationNumbers : false,

        responsive : true,
        responsiveRefreshRate : 200,
        responsiveBaseWidth : window,

        baseClass : "owl-carousel",
        theme : "owl-theme",

        lazyLoad : false,
        lazyFollow : true,
        lazyEffect : "fade",

        autoHeight : false,

        jsonPath : false,
        jsonSuccess : false,

        dragBeforeAnimFinish : true,
        mouseDrag : true,
        touchDrag : true,

        addClassActive : false,
        transitionStyle : false,

        beforeUpdate : false,
        afterUpdate : false,
        beforeInit : false,
        afterInit : false,
        beforeMove : false,
        afterMove : false,
        afterAction : false,
        startDragging : false,
        afterLazyLoad: false
    };
}(jQuery, window, document));
/* ------------------------------------------------------------------------
	Class: prettyPhoto
	Use: Lightbox clone for jQuery
	Author: Stephane Caron (http://www.no-margin-for-errors.com)
	Version: 3.1.5
------------------------------------------------------------------------- */
(function(e){function t(){var e=location.href;hashtag=e.indexOf("#prettyPhoto")!==-1?decodeURI(e.substring(e.indexOf("#prettyPhoto")+1,e.length)):false;return hashtag}function n(){if(typeof theRel=="undefined")return;location.hash=theRel+"/"+rel_index+"/"}function r(){if(location.href.indexOf("#prettyPhoto")!==-1)location.hash="prettyPhoto"}function i(e,t){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var n="[\\?&]"+e+"=([^&#]*)";var r=new RegExp(n);var i=r.exec(t);return i==null?"":i[1]}e.prettyPhoto={version:"3.1.5"};e.fn.prettyPhoto=function(s){function g(){e(".pp_loaderIcon").hide();projectedTop=scroll_pos["scrollTop"]+(d/2-a["containerHeight"]/2);if(projectedTop<0)projectedTop=0;$ppt.fadeTo(settings.animation_speed,1);$pp_pic_holder.find(".pp_content").animate({height:a["contentHeight"],width:a["contentWidth"]},settings.animation_speed);$pp_pic_holder.animate({top:projectedTop,left:v/2-a["containerWidth"]/2<0?0:v/2-a["containerWidth"]/2,width:a["containerWidth"]},settings.animation_speed,function(){$pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(a["height"]).width(a["width"]);$pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed);if(isSet&&S(pp_images[set_position])=="image"){$pp_pic_holder.find(".pp_hoverContainer").show()}else{$pp_pic_holder.find(".pp_hoverContainer").hide()}if(settings.allow_expand){if(a["resized"]){e("a.pp_expand,a.pp_contract").show()}else{e("a.pp_expand").hide()}}if(settings.autoplay_slideshow&&!m&&!f)e.prettyPhoto.startSlideshow();settings.changepicturecallback();f=true});C();s.ajaxcallback()}function y(t){$pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility","hidden");$pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed,function(){e(".pp_loaderIcon").show();t()})}function b(t){t>1?e(".pp_nav").show():e(".pp_nav").hide()}function w(e,t){resized=false;E(e,t);imageWidth=e,imageHeight=t;if((p>v||h>d)&&doresize&&settings.allow_resize&&!u){resized=true,fitting=false;while(!fitting){if(p>v){imageWidth=v-200;imageHeight=t/e*imageWidth}else if(h>d){imageHeight=d-200;imageWidth=e/t*imageHeight}else{fitting=true}h=imageHeight,p=imageWidth}if(p>v||h>d){w(p,h)}E(imageWidth,imageHeight)}return{width:Math.floor(imageWidth),height:Math.floor(imageHeight),containerHeight:Math.floor(h),containerWidth:Math.floor(p)+settings.horizontal_padding*2,contentHeight:Math.floor(l),contentWidth:Math.floor(c),resized:resized}}function E(t,n){t=parseFloat(t);n=parseFloat(n);$pp_details=$pp_pic_holder.find(".pp_details");$pp_details.width(t);detailsHeight=parseFloat($pp_details.css("marginTop"))+parseFloat($pp_details.css("marginBottom"));$pp_details=$pp_details.clone().addClass(settings.theme).width(t).appendTo(e("body")).css({position:"absolute",top:-1e4});detailsHeight+=$pp_details.height();detailsHeight=detailsHeight<=34?36:detailsHeight;$pp_details.remove();$pp_title=$pp_pic_holder.find(".ppt");$pp_title.width(t);titleHeight=parseFloat($pp_title.css("marginTop"))+parseFloat($pp_title.css("marginBottom"));$pp_title=$pp_title.clone().appendTo(e("body")).css({position:"absolute",top:-1e4});titleHeight+=$pp_title.height();$pp_title.remove();l=n+detailsHeight;c=t;h=l+titleHeight+$pp_pic_holder.find(".pp_top").height()+$pp_pic_holder.find(".pp_bottom").height();p=t}function S(e){if(e.match(/youtube\.com\/watch/i)||e.match(/youtu\.be/i)){return"youtube"}else if(e.match(/vimeo\.com/i)){return"vimeo"}else if(e.match(/\b.mov\b/i)){return"quicktime"}else if(e.match(/\b.swf\b/i)){return"flash"}else if(e.match(/\biframe=true\b/i)){return"iframe"}else if(e.match(/\bajax=true\b/i)){return"ajax"}else if(e.match(/\bcustom=true\b/i)){return"custom"}else if(e.substr(0,1)=="#"){return"inline"}else{return"image"}}function x(){if(doresize&&typeof $pp_pic_holder!="undefined"){scroll_pos=T();contentHeight=$pp_pic_holder.height(),contentwidth=$pp_pic_holder.width();projectedTop=d/2+scroll_pos["scrollTop"]-contentHeight/2;if(projectedTop<0)projectedTop=0;if(contentHeight>d)return;$pp_pic_holder.css({top:projectedTop,left:v/2+scroll_pos["scrollLeft"]-contentwidth/2})}}function T(){if(self.pageYOffset){return{scrollTop:self.pageYOffset,scrollLeft:self.pageXOffset}}else if(document.documentElement&&document.documentElement.scrollTop){return{scrollTop:document.documentElement.scrollTop,scrollLeft:document.documentElement.scrollLeft}}else if(document.body){return{scrollTop:document.body.scrollTop,scrollLeft:document.body.scrollLeft}}}function N(){d=e(window).height(),v=e(window).width();if(typeof $pp_overlay!="undefined")$pp_overlay.height(e(document).height()).width(v)}function C(){if(isSet&&settings.overlay_gallery&&S(pp_images[set_position])=="image"){itemWidth=52+5;navWidth=settings.theme=="facebook"||settings.theme=="pp_default"?50:30;itemsPerPage=Math.floor((a["containerWidth"]-100-navWidth)/itemWidth);itemsPerPage=itemsPerPage<pp_images.length?itemsPerPage:pp_images.length;totalPage=Math.ceil(pp_images.length/itemsPerPage)-1;if(totalPage==0){navWidth=0;$pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()}else{$pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show()}galleryWidth=itemsPerPage*itemWidth;fullGalleryWidth=pp_images.length*itemWidth;$pp_gallery.css("margin-left",-(galleryWidth/2+navWidth/2)).find("div:first").width(galleryWidth+5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected");goToPage=Math.floor(set_position/itemsPerPage)<totalPage?Math.floor(set_position/itemsPerPage):totalPage;e.prettyPhoto.changeGalleryPage(goToPage);$pp_gallery_li.filter(":eq("+set_position+")").addClass("selected")}else{$pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave")}}function k(t){if(settings.social_tools)facebook_like_link=settings.social_tools.replace("{location_href}",encodeURIComponent(location.href));settings.markup=settings.markup.replace("{pp_social}","");e("body").append(settings.markup);$pp_pic_holder=e(".pp_pic_holder"),$ppt=e(".ppt"),$pp_overlay=e("div.pp_overlay");if(isSet&&settings.overlay_gallery){currentGalleryPage=0;toInject="";for(var n=0;n<pp_images.length;n++){if(!pp_images[n].match(/\b(jpg|jpeg|png|gif)\b/gi)){classname="default";img_src=""}else{classname="";img_src=pp_images[n]}toInject+="<li class='"+classname+"'><a href='#'><img src='"+img_src+"' width='50' alt='' /></a></li>"}toInject=settings.gallery_markup.replace(/{gallery}/g,toInject);$pp_pic_holder.find("#pp_full_res").after(toInject);$pp_gallery=e(".pp_pic_holder .pp_gallery"),$pp_gallery_li=$pp_gallery.find("li");$pp_gallery.find(".pp_arrow_next").click(function(){e.prettyPhoto.changeGalleryPage("next");e.prettyPhoto.stopSlideshow();return false});$pp_gallery.find(".pp_arrow_previous").click(function(){e.prettyPhoto.changeGalleryPage("previous");e.prettyPhoto.stopSlideshow();return false});$pp_pic_holder.find(".pp_content").hover(function(){$pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()},function(){$pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()});itemWidth=52+5;$pp_gallery_li.each(function(t){e(this).find("a").click(function(){e.prettyPhoto.changePage(t);e.prettyPhoto.stopSlideshow();return false})})}if(settings.slideshow){$pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>');$pp_pic_holder.find(".pp_nav .pp_play").click(function(){e.prettyPhoto.startSlideshow();return false})}$pp_pic_holder.attr("class","pp_pic_holder "+settings.theme);$pp_overlay.css({opacity:0,height:e(document).height(),width:e(window).width()}).bind("click",function(){if(!settings.modal)e.prettyPhoto.close()});e("a.pp_close").bind("click",function(){e.prettyPhoto.close();return false});if(settings.allow_expand){e("a.pp_expand").bind("click",function(t){if(e(this).hasClass("pp_expand")){e(this).removeClass("pp_expand").addClass("pp_contract");doresize=false}else{e(this).removeClass("pp_contract").addClass("pp_expand");doresize=true}y(function(){e.prettyPhoto.open()});return false})}$pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click",function(){e.prettyPhoto.changePage("previous");e.prettyPhoto.stopSlideshow();return false});$pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click",function(){e.prettyPhoto.changePage("next");e.prettyPhoto.stopSlideshow();return false});x()}s=jQuery.extend({hook:"rel",animation_speed:"fast",ajaxcallback:function(){},slideshow:5e3,autoplay_slideshow:false,opacity:.8,show_title:true,allow_resize:true,allow_expand:true,default_width:500,default_height:344,counter_separator_label:"/",theme:"pp_default",horizontal_padding:20,hideflash:false,wmode:"opaque",autoplay:true,modal:false,deeplinking:true,overlay_gallery:true,overlay_gallery_max:30,keyboard_shortcuts:true,changepicturecallback:function(){},callback:function(){},ie6_fallback:true,markup:'<div class="pp_pic_holder"> 						<div class="ppt"> </div> 						<div class="pp_top"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 						<div class="pp_content_container"> 							<div class="pp_left"> 							<div class="pp_right"> 								<div class="pp_content"> 									<div class="pp_loaderIcon"></div> 									<div class="pp_fade"> 										<a href="#" class="pp_expand" title="Expand the image">Expand</a> 										<div class="pp_hoverContainer"> 											<a class="pp_next" href="#">next</a> 											<a class="pp_previous" href="#">previous</a> 										</div> 										<div id="pp_full_res"></div> 										<div class="pp_details"> 											<div class="pp_nav"> 												<a href="#" class="pp_arrow_previous">Previous</a> 												<p class="currentTextHolder">0/0</p> 												<a href="#" class="pp_arrow_next">Next</a> 											</div> 											<p class="pp_description"></p> 											<div class="pp_social">{pp_social}</div> 											<a class="pp_close" href="#">Close</a> 										</div> 									</div> 								</div> 							</div> 							</div> 						</div> 						<div class="pp_bottom"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 					</div> 					<div class="pp_overlay"></div>',gallery_markup:'<div class="pp_gallery"> 								<a href="#" class="pp_arrow_previous">Previous</a> 								<div> 									<ul> 										{gallery} 									</ul> 								</div> 								<a href="#" class="pp_arrow_next">Next</a> 							</div>',image_markup:'<img id="fullResImage" src="{path}" />',flash_markup:'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',quicktime_markup:'<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',iframe_markup:'<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',inline_markup:'<div class="pp_inline">{content}</div>',custom_markup:"",social_tools:'<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&layout=button_count&show_faces=true&width=500&action=like&font&colorscheme=light&height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'},s);var o=this,u=false,a,f,l,c,h,p,d=e(window).height(),v=e(window).width(),m;doresize=true,scroll_pos=T();e(window).unbind("resize.prettyphoto").bind("resize.prettyphoto",function(){x();N()});if(s.keyboard_shortcuts){e(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto",function(t){if(typeof $pp_pic_holder!="undefined"){if($pp_pic_holder.is(":visible")){switch(t.keyCode){case 37:e.prettyPhoto.changePage("previous");t.preventDefault();break;case 39:e.prettyPhoto.changePage("next");t.preventDefault();break;case 27:if(!settings.modal)e.prettyPhoto.close();t.preventDefault();break}}}})}e.prettyPhoto.initialize=function(){settings=s;if(settings.theme=="pp_default")settings.horizontal_padding=16;theRel=e(this).attr(settings.hook);galleryRegExp=/\[(?:.*)\]/;isSet=galleryRegExp.exec(theRel)?true:false;pp_images=isSet?jQuery.map(o,function(t,n){if(e(t).attr(settings.hook).indexOf(theRel)!=-1)return e(t).attr("href")}):e.makeArray(e(this).attr("href"));pp_titles=isSet?jQuery.map(o,function(t,n){if(e(t).attr(settings.hook).indexOf(theRel)!=-1)return e(t).find("img").attr("alt")?e(t).find("img").attr("alt"):""}):e.makeArray(e(this).find("img").attr("alt"));pp_descriptions=isSet?jQuery.map(o,function(t,n){if(e(t).attr(settings.hook).indexOf(theRel)!=-1)return e(t).attr("title")?e(t).attr("title"):""}):e.makeArray(e(this).attr("title"));if(pp_images.length>settings.overlay_gallery_max)settings.overlay_gallery=false;set_position=jQuery.inArray(e(this).attr("href"),pp_images);rel_index=isSet?set_position:e("a["+settings.hook+"^='"+theRel+"']").index(e(this));k(this);if(settings.allow_resize)e(window).bind("scroll.prettyphoto",function(){x()});e.prettyPhoto.open();return false};e.prettyPhoto.open=function(t){if(typeof settings=="undefined"){settings=s;pp_images=e.makeArray(arguments[0]);pp_titles=arguments[1]?e.makeArray(arguments[1]):e.makeArray("");pp_descriptions=arguments[2]?e.makeArray(arguments[2]):e.makeArray("");isSet=pp_images.length>1?true:false;set_position=arguments[3]?arguments[3]:0;k(t.target)}if(settings.hideflash)e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility","hidden");b(e(pp_images).size());e(".pp_loaderIcon").show();if(settings.deeplinking)n();if(settings.social_tools){facebook_like_link=settings.social_tools.replace("{location_href}",encodeURIComponent(location.href));$pp_pic_holder.find(".pp_social").html(facebook_like_link)}if($ppt.is(":hidden"))$ppt.css("opacity",0).show();$pp_overlay.show().fadeTo(settings.animation_speed,settings.opacity);$pp_pic_holder.find(".currentTextHolder").text(set_position+1+settings.counter_separator_label+e(pp_images).size());if(typeof pp_descriptions[set_position]!="undefined"&&pp_descriptions[set_position]!=""){$pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position]))}else{$pp_pic_holder.find(".pp_description").hide()}movie_width=parseFloat(i("width",pp_images[set_position]))?i("width",pp_images[set_position]):settings.default_width.toString();movie_height=parseFloat(i("height",pp_images[set_position]))?i("height",pp_images[set_position]):settings.default_height.toString();u=false;if(movie_height.indexOf("%")!=-1){movie_height=parseFloat(e(window).height()*parseFloat(movie_height)/100-150);u=true}if(movie_width.indexOf("%")!=-1){movie_width=parseFloat(e(window).width()*parseFloat(movie_width)/100-150);u=true}$pp_pic_holder.fadeIn(function(){settings.show_title&&pp_titles[set_position]!=""&&typeof pp_titles[set_position]!="undefined"?$ppt.html(unescape(pp_titles[set_position])):$ppt.html(" ");imgPreloader="";skipInjection=false;switch(S(pp_images[set_position])){case"image":imgPreloader=new Image;nextImage=new Image;if(isSet&&set_position<e(pp_images).size()-1)nextImage.src=pp_images[set_position+1];prevImage=new Image;if(isSet&&pp_images[set_position-1])prevImage.src=pp_images[set_position-1];$pp_pic_holder.find("#pp_full_res")[0].innerHTML=settings.image_markup.replace(/{path}/g,pp_images[set_position]);imgPreloader.onload=function(){a=w(imgPreloader.width,imgPreloader.height);g()};imgPreloader.onerror=function(){alert("Image cannot be loaded. Make sure the path is correct and image exist.");e.prettyPhoto.close()};imgPreloader.src=pp_images[set_position];break;case"youtube":a=w(movie_width,movie_height);movie_id=i("v",pp_images[set_position]);if(movie_id==""){movie_id=pp_images[set_position].split("youtu.be/");movie_id=movie_id[1];if(movie_id.indexOf("?")>0)movie_id=movie_id.substr(0,movie_id.indexOf("?"));if(movie_id.indexOf("&")>0)movie_id=movie_id.substr(0,movie_id.indexOf("&"))}movie="http://www.youtube.com/embed/"+movie_id;i("rel",pp_images[set_position])?movie+="?rel="+i("rel",pp_images[set_position]):movie+="?rel=1";if(settings.autoplay)movie+="&autoplay=1";toInject=settings.iframe_markup.replace(/{width}/g,a["width"]).replace(/{height}/g,a["height"]).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,movie);break;case"vimeo":a=w(movie_width,movie_height);movie_id=pp_images[set_position];var t=/http(s?):\/\/(www\.)?vimeo.com\/(\d+)/;var n=movie_id.match(t);movie="http://player.vimeo.com/video/"+n[3]+"?title=0&byline=0&portrait=0";if(settings.autoplay)movie+="&autoplay=1;";vimeo_width=a["width"]+"/embed/?moog_width="+a["width"];toInject=settings.iframe_markup.replace(/{width}/g,vimeo_width).replace(/{height}/g,a["height"]).replace(/{path}/g,movie);break;case"quicktime":a=w(movie_width,movie_height);a["height"]+=15;a["contentHeight"]+=15;a["containerHeight"]+=15;toInject=settings.quicktime_markup.replace(/{width}/g,a["width"]).replace(/{height}/g,a["height"]).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,pp_images[set_position]).replace(/{autoplay}/g,settings.autoplay);break;case"flash":a=w(movie_width,movie_height);flash_vars=pp_images[set_position];flash_vars=flash_vars.substring(pp_images[set_position].indexOf("flashvars")+10,pp_images[set_position].length);filename=pp_images[set_position];filename=filename.substring(0,filename.indexOf("?"));toInject=settings.flash_markup.replace(/{width}/g,a["width"]).replace(/{height}/g,a["height"]).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,filename+"?"+flash_vars);break;case"iframe":a=w(movie_width,movie_height);frame_url=pp_images[set_position];frame_url=frame_url.substr(0,frame_url.indexOf("iframe")-1);toInject=settings.iframe_markup.replace(/{width}/g,a["width"]).replace(/{height}/g,a["height"]).replace(/{path}/g,frame_url);break;case"ajax":doresize=false;a=w(movie_width,movie_height);doresize=true;skipInjection=true;e.get(pp_images[set_position],function(e){toInject=settings.inline_markup.replace(/{content}/g,e);$pp_pic_holder.find("#pp_full_res")[0].innerHTML=toInject;g()});break;case"custom":a=w(movie_width,movie_height);toInject=settings.custom_markup;break;case"inline":myClone=e(pp_images[set_position]).clone().append('<br clear="all" />').css({width:settings.default_width}).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(e("body")).show();doresize=false;a=w(e(myClone).width(),e(myClone).height());doresize=true;e(myClone).remove();toInject=settings.inline_markup.replace(/{content}/g,e(pp_images[set_position]).html());break}if(!imgPreloader&&!skipInjection){$pp_pic_holder.find("#pp_full_res")[0].innerHTML=toInject;g()}});return false};e.prettyPhoto.changePage=function(t){currentGalleryPage=0;if(t=="previous"){set_position--;if(set_position<0)set_position=e(pp_images).size()-1}else if(t=="next"){set_position++;if(set_position>e(pp_images).size()-1)set_position=0}else{set_position=t}rel_index=set_position;if(!doresize)doresize=true;if(settings.allow_expand){e(".pp_contract").removeClass("pp_contract").addClass("pp_expand")}y(function(){e.prettyPhoto.open()})};e.prettyPhoto.changeGalleryPage=function(e){if(e=="next"){currentGalleryPage++;if(currentGalleryPage>totalPage)currentGalleryPage=0}else if(e=="previous"){currentGalleryPage--;if(currentGalleryPage<0)currentGalleryPage=totalPage}else{currentGalleryPage=e}slide_speed=e=="next"||e=="previous"?settings.animation_speed:0;slide_to=currentGalleryPage*itemsPerPage*itemWidth;$pp_gallery.find("ul").animate({left:-slide_to},slide_speed)};e.prettyPhoto.startSlideshow=function(){if(typeof m=="undefined"){$pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function(){e.prettyPhoto.stopSlideshow();return false});m=setInterval(e.prettyPhoto.startSlideshow,settings.slideshow)}else{e.prettyPhoto.changePage("next")}};e.prettyPhoto.stopSlideshow=function(){$pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function(){e.prettyPhoto.startSlideshow();return false});clearInterval(m);m=undefined};e.prettyPhoto.close=function(){if($pp_overlay.is(":animated"))return;e.prettyPhoto.stopSlideshow();$pp_pic_holder.stop().find("object,embed").css("visibility","hidden");e("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed,function(){e(this).remove()});$pp_overlay.fadeOut(settings.animation_speed,function(){if(settings.hideflash)e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility","visible");e(this).remove();e(window).unbind("scroll.prettyphoto");r();settings.callback();doresize=true;f=false;delete settings})};if(!pp_alreadyInitialized&&t()){pp_alreadyInitialized=true;hashIndex=t();hashRel=hashIndex;hashIndex=hashIndex.substring(hashIndex.indexOf("/")+1,hashIndex.length-1);hashRel=hashRel.substring(0,hashRel.indexOf("/"));setTimeout(function(){e("a["+s.hook+"^='"+hashRel+"']:eq("+hashIndex+")").trigger("click")},50)}return this.unbind("click.prettyphoto").bind("click.prettyphoto",e.prettyPhoto.initialize)};})(jQuery);var pp_alreadyInitialized=false
/*
 * jQuery FlexSlider v2.2.2
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
;
(function ($) {

  //FlexSlider: Object Instance
  $.flexslider = function(el, options) {
    var slider = $(el);

    // making variables public
    slider.vars = $.extend({}, $.flexslider.defaults, options);

    var namespace = slider.vars.namespace,
        msGesture = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
        touch = (( "ontouchstart" in window ) || msGesture || window.DocumentTouch && document instanceof DocumentTouch) && slider.vars.touch,
        // depricating this idea, as devices are being released with both of these events
        //eventType = (touch) ? "touchend" : "click",
        eventType = "click touchend MSPointerUp",
        watchedEvent = "",
        watchedEventClearTimer,
        vertical = slider.vars.direction === "vertical",
        reverse = slider.vars.reverse,
        carousel = (slider.vars.itemWidth > 0),
        fade = slider.vars.animation === "fade",
        asNav = slider.vars.asNavFor !== "",
        methods = {},
        focused = true;

    // Store a reference to the slider object
    $.data(el, "flexslider", slider);

    // Private slider methods
    methods = {
      init: function() {
        slider.animating = false;
        // Get current slide and make sure it is a number
        slider.currentSlide = parseInt( ( slider.vars.startAt ? slider.vars.startAt : 0), 10 );
        if ( isNaN( slider.currentSlide ) ) slider.currentSlide = 0;
        slider.animatingTo = slider.currentSlide;
        slider.atEnd = (slider.currentSlide === 0 || slider.currentSlide === slider.last);
        slider.containerSelector = slider.vars.selector.substr(0,slider.vars.selector.search(' '));
        slider.slides = $(slider.vars.selector, slider);
        slider.container = $(slider.containerSelector, slider);
        slider.count = slider.slides.length;
        // SYNC:
        slider.syncExists = $(slider.vars.sync).length > 0;
        // SLIDE:
        if (slider.vars.animation === "slide") slider.vars.animation = "swing";
        slider.prop = (vertical) ? "top" : "marginLeft";
        slider.args = {};
        // SLIDESHOW:
        slider.manualPause = false;
        slider.stopped = false;
        //PAUSE WHEN INVISIBLE
        slider.started = false;
        slider.startTimeout = null;
        // TOUCH/USECSS:
        slider.transitions = !slider.vars.video && !fade && slider.vars.useCSS && (function() {
          var obj = document.createElement('div'),
              props = ['perspectiveProperty', 'WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
          for (var i in props) {
            if ( obj.style[ props[i] ] !== undefined ) {
              slider.pfx = props[i].replace('Perspective','').toLowerCase();
              slider.prop = "-" + slider.pfx + "-transform";
              return true;
            }
          }
          return false;
        }());
        // CONTROLSCONTAINER:
        if (slider.vars.controlsContainer !== "") slider.controlsContainer = $(slider.vars.controlsContainer).length > 0 && $(slider.vars.controlsContainer);
        // MANUAL:
        if (slider.vars.manualControls !== "") slider.manualControls = $(slider.vars.manualControls).length > 0 && $(slider.vars.manualControls);

        // RANDOMIZE:
        if (slider.vars.randomize) {
          slider.slides.sort(function() { return (Math.round(Math.random())-0.5); });
          slider.container.empty().append(slider.slides);
        }

        slider.doMath();

        // INIT
        slider.setup("init");

        // CONTROLNAV:
        if (slider.vars.controlNav) methods.controlNav.setup();

        // DIRECTIONNAV:
        if (slider.vars.directionNav) methods.directionNav.setup();

        // KEYBOARD:
        if (slider.vars.keyboard && ($(slider.containerSelector).length === 1 || slider.vars.multipleKeyboard)) {
          $(document).bind('keyup', function(event) {
            var keycode = event.keyCode;
            if (!slider.animating && (keycode === 39 || keycode === 37)) {
              var target = (keycode === 39) ? slider.getTarget('next') :
                           (keycode === 37) ? slider.getTarget('prev') : false;
              slider.flexAnimate(target, slider.vars.pauseOnAction);
            }
          });
        }
        // MOUSEWHEEL:
        if (slider.vars.mousewheel) {
          slider.bind('mousewheel', function(event, delta, deltaX, deltaY) {
            event.preventDefault();
            var target = (delta < 0) ? slider.getTarget('next') : slider.getTarget('prev');
            slider.flexAnimate(target, slider.vars.pauseOnAction);
          });
        }

        // PAUSEPLAY
        if (slider.vars.pausePlay) methods.pausePlay.setup();

        //PAUSE WHEN INVISIBLE
        if (slider.vars.slideshow && slider.vars.pauseInvisible) methods.pauseInvisible.init();

        // SLIDSESHOW
        if (slider.vars.slideshow) {
          if (slider.vars.pauseOnHover) {
            slider.hover(function() {
              if (!slider.manualPlay && !slider.manualPause) slider.pause();
            }, function() {
              if (!slider.manualPause && !slider.manualPlay && !slider.stopped) slider.play();
            });
          }
          // initialize animation
          //If we're visible, or we don't use PageVisibility API
          if(!slider.vars.pauseInvisible || !methods.pauseInvisible.isHidden()) {
            (slider.vars.initDelay > 0) ? slider.startTimeout = setTimeout(slider.play, slider.vars.initDelay) : slider.play();
          }
        }

        // ASNAV:
        if (asNav) methods.asNav.setup();

        // TOUCH
        if (touch && slider.vars.touch) methods.touch();

        // FADE&&SMOOTHHEIGHT || SLIDE:
        if (!fade || (fade && slider.vars.smoothHeight)) $(window).bind("resize orientationchange focus", methods.resize);

        slider.find("img").attr("draggable", "false");

        // API: start() Callback
        setTimeout(function(){
          slider.vars.start(slider);
        }, 200);
      },
      asNav: {
        setup: function() {
          slider.asNav = true;
          slider.animatingTo = Math.floor(slider.currentSlide/slider.move);
          slider.currentItem = slider.currentSlide;
          slider.slides.removeClass(namespace + "active-slide").eq(slider.currentItem).addClass(namespace + "active-slide");
          if(!msGesture){
              slider.slides.on(eventType, function(e){
                e.preventDefault();
                var $slide = $(this),
                    target = $slide.index();
                var posFromLeft = $slide.offset().left - $(slider).scrollLeft(); // Find position of slide relative to left of slider container
                if( posFromLeft <= 0 && $slide.hasClass( namespace + 'active-slide' ) ) {
                  slider.flexAnimate(slider.getTarget("prev"), true);
                } else if (!$(slider.vars.asNavFor).data('flexslider').animating && !$slide.hasClass(namespace + "active-slide")) {
                  slider.direction = (slider.currentItem < target) ? "next" : "prev";
                  slider.flexAnimate(target, slider.vars.pauseOnAction, false, true, true);
                }
              });
          }else{
              el._slider = slider;
              slider.slides.each(function (){
                  var that = this;
                  that._gesture = new MSGesture();
                  that._gesture.target = that;
                  that.addEventListener("MSPointerDown", function (e){
                      e.preventDefault();
                      if(e.currentTarget._gesture)
                          e.currentTarget._gesture.addPointer(e.pointerId);
                  }, false);
                  that.addEventListener("MSGestureTap", function (e){
                      e.preventDefault();
                      var $slide = $(this),
                          target = $slide.index();
                      if (!$(slider.vars.asNavFor).data('flexslider').animating && !$slide.hasClass('active')) {
                          slider.direction = (slider.currentItem < target) ? "next" : "prev";
                          slider.flexAnimate(target, slider.vars.pauseOnAction, false, true, true);
                      }
                  });
              });
          }
        }
      },
      controlNav: {
        setup: function() {
          if (!slider.manualControls) {
            methods.controlNav.setupPaging();
          } else { // MANUALCONTROLS:
            methods.controlNav.setupManual();
          }
        },
        setupPaging: function() {
          var type = (slider.vars.controlNav === "thumbnails") ? 'control-thumbs' : 'control-paging',
              j = 1,
              item,
              slide;

          slider.controlNavScaffold = $('<ol class="'+ namespace + 'control-nav ' + namespace + type + '"></ol>');

          if (slider.pagingCount > 1) {
            for (var i = 0; i < slider.pagingCount; i++) {
              slide = slider.slides.eq(i);
              item = (slider.vars.controlNav === "thumbnails") ? '<img src="' + slide.attr( 'data-thumb' ) + '"/>' : '<a>' + j + '</a>';
              if ( 'thumbnails' === slider.vars.controlNav && true === slider.vars.thumbCaptions ) {
                var captn = slide.attr( 'data-thumbcaption' );
                if ( '' != captn && undefined != captn ) item += '<span class="' + namespace + 'caption">' + captn + '</span>';
              }
              slider.controlNavScaffold.append('<li>' + item + '</li>');
              j++;
            }
          }

          // CONTROLSCONTAINER:
          (slider.controlsContainer) ? $(slider.controlsContainer).append(slider.controlNavScaffold) : slider.append(slider.controlNavScaffold);
          methods.controlNav.set();

          methods.controlNav.active();

          slider.controlNavScaffold.delegate('a, img', eventType, function(event) {
            event.preventDefault();

            if (watchedEvent === "" || watchedEvent === event.type) {
              var $this = $(this),
                  target = slider.controlNav.index($this);

              if (!$this.hasClass(namespace + 'active')) {
                slider.direction = (target > slider.currentSlide) ? "next" : "prev";
                slider.flexAnimate(target, slider.vars.pauseOnAction);
              }
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();

          });
        },
        setupManual: function() {
          slider.controlNav = slider.manualControls;
          methods.controlNav.active();

          slider.controlNav.bind(eventType, function(event) {
            event.preventDefault();

            if (watchedEvent === "" || watchedEvent === event.type) {
              var $this = $(this),
                  target = slider.controlNav.index($this);

              if (!$this.hasClass(namespace + 'active')) {
                (target > slider.currentSlide) ? slider.direction = "next" : slider.direction = "prev";
                slider.flexAnimate(target, slider.vars.pauseOnAction);
              }
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        set: function() {
          var selector = (slider.vars.controlNav === "thumbnails") ? 'img' : 'a';
          slider.controlNav = $('.' + namespace + 'control-nav li ' + selector, (slider.controlsContainer) ? slider.controlsContainer : slider);
        },
        active: function() {
          slider.controlNav.removeClass(namespace + "active").eq(slider.animatingTo).addClass(namespace + "active");
        },
        update: function(action, pos) {
          if (slider.pagingCount > 1 && action === "add") {
            slider.controlNavScaffold.append($('<li><a>' + slider.count + '</a></li>'));
          } else if (slider.pagingCount === 1) {
            slider.controlNavScaffold.find('li').remove();
          } else {
            slider.controlNav.eq(pos).closest('li').remove();
          }
          methods.controlNav.set();
          (slider.pagingCount > 1 && slider.pagingCount !== slider.controlNav.length) ? slider.update(pos, action) : methods.controlNav.active();
        }
      },
      directionNav: {
        setup: function() {
          var directionNavScaffold = $('<ul class="' + namespace + 'direction-nav"><li><a class="' + namespace + 'prev" href="#">' + slider.vars.prevText + '</a></li><li><a class="' + namespace + 'next" href="#">' + slider.vars.nextText + '</a></li></ul>');

          // CONTROLSCONTAINER:
          if (slider.controlsContainer) {
            $(slider.controlsContainer).append(directionNavScaffold);
            slider.directionNav = $('.' + namespace + 'direction-nav li a', slider.controlsContainer);
          } else {
            slider.append(directionNavScaffold);
            slider.directionNav = $('.' + namespace + 'direction-nav li a', slider);
          }

          methods.directionNav.update();

          slider.directionNav.bind(eventType, function(event) {
            event.preventDefault();
            var target;

            if (watchedEvent === "" || watchedEvent === event.type) {
              target = ($(this).hasClass(namespace + 'next')) ? slider.getTarget('next') : slider.getTarget('prev');
              slider.flexAnimate(target, slider.vars.pauseOnAction);
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        update: function() {
          var disabledClass = namespace + 'disabled';
          if (slider.pagingCount === 1) {
            slider.directionNav.addClass(disabledClass).attr('tabindex', '-1');
          } else if (!slider.vars.animationLoop) {
            if (slider.animatingTo === 0) {
              slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "prev").addClass(disabledClass).attr('tabindex', '-1');
            } else if (slider.animatingTo === slider.last) {
              slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "next").addClass(disabledClass).attr('tabindex', '-1');
            } else {
              slider.directionNav.removeClass(disabledClass).removeAttr('tabindex');
            }
          } else {
            slider.directionNav.removeClass(disabledClass).removeAttr('tabindex');
          }
        }
      },
      pausePlay: {
        setup: function() {
          var pausePlayScaffold = $('<div class="' + namespace + 'pauseplay"><a></a></div>');

          // CONTROLSCONTAINER:
          if (slider.controlsContainer) {
            slider.controlsContainer.append(pausePlayScaffold);
            slider.pausePlay = $('.' + namespace + 'pauseplay a', slider.controlsContainer);
          } else {
            slider.append(pausePlayScaffold);
            slider.pausePlay = $('.' + namespace + 'pauseplay a', slider);
          }

          methods.pausePlay.update((slider.vars.slideshow) ? namespace + 'pause' : namespace + 'play');

          slider.pausePlay.bind(eventType, function(event) {
            event.preventDefault();

            if (watchedEvent === "" || watchedEvent === event.type) {
              if ($(this).hasClass(namespace + 'pause')) {
                slider.manualPause = true;
                slider.manualPlay = false;
                slider.pause();
              } else {
                slider.manualPause = false;
                slider.manualPlay = true;
                slider.play();
              }
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        update: function(state) {
          (state === "play") ? slider.pausePlay.removeClass(namespace + 'pause').addClass(namespace + 'play').html(slider.vars.playText) : slider.pausePlay.removeClass(namespace + 'play').addClass(namespace + 'pause').html(slider.vars.pauseText);
        }
      },
      touch: function() {
        var startX,
          startY,
          offset,
          cwidth,
          dx,
          startT,
          scrolling = false,
          localX = 0,
          localY = 0,
          accDx = 0;

        if(!msGesture){
            el.addEventListener('touchstart', onTouchStart, false);

            function onTouchStart(e) {
              if (slider.animating) {
                e.preventDefault();
              } else if ( ( window.navigator.msPointerEnabled ) || e.touches.length === 1 ) {
                slider.pause();
                // CAROUSEL:
                cwidth = (vertical) ? slider.h : slider. w;
                startT = Number(new Date());
                // CAROUSEL:

                // Local vars for X and Y points.
                localX = e.touches[0].pageX;
                localY = e.touches[0].pageY;

                offset = (carousel && reverse && slider.animatingTo === slider.last) ? 0 :
                         (carousel && reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) :
                         (carousel && slider.currentSlide === slider.last) ? slider.limit :
                         (carousel) ? ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.currentSlide :
                         (reverse) ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
                startX = (vertical) ? localY : localX;
                startY = (vertical) ? localX : localY;

                el.addEventListener('touchmove', onTouchMove, false);
                el.addEventListener('touchend', onTouchEnd, false);
              }
            }

            function onTouchMove(e) {
              // Local vars for X and Y points.

              localX = e.touches[0].pageX;
              localY = e.touches[0].pageY;

              dx = (vertical) ? startX - localY : startX - localX;
              scrolling = (vertical) ? (Math.abs(dx) < Math.abs(localX - startY)) : (Math.abs(dx) < Math.abs(localY - startY));

              var fxms = 500;

              if ( ! scrolling || Number( new Date() ) - startT > fxms ) {
                e.preventDefault();
                if (!fade && slider.transitions) {
                  if (!slider.vars.animationLoop) {
                    dx = dx/((slider.currentSlide === 0 && dx < 0 || slider.currentSlide === slider.last && dx > 0) ? (Math.abs(dx)/cwidth+2) : 1);
                  }
                  slider.setProps(offset + dx, "setTouch");
                }
              }
            }

            function onTouchEnd(e) {
              // finish the touch by undoing the touch session
              el.removeEventListener('touchmove', onTouchMove, false);

              if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
                var updateDx = (reverse) ? -dx : dx,
                    target = (updateDx > 0) ? slider.getTarget('next') : slider.getTarget('prev');

                if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth/2)) {
                  slider.flexAnimate(target, slider.vars.pauseOnAction);
                } else {
                  if (!fade) slider.flexAnimate(slider.currentSlide, slider.vars.pauseOnAction, true);
                }
              }
              el.removeEventListener('touchend', onTouchEnd, false);

              startX = null;
              startY = null;
              dx = null;
              offset = null;
            }
        }else{
            el.style.msTouchAction = "none";
            el._gesture = new MSGesture();
            el._gesture.target = el;
            el.addEventListener("MSPointerDown", onMSPointerDown, false);
            el._slider = slider;
            el.addEventListener("MSGestureChange", onMSGestureChange, false);
            el.addEventListener("MSGestureEnd", onMSGestureEnd, false);

            function onMSPointerDown(e){
                e.stopPropagation();
                if (slider.animating) {
                    e.preventDefault();
                }else{
                    slider.pause();
                    el._gesture.addPointer(e.pointerId);
                    accDx = 0;
                    cwidth = (vertical) ? slider.h : slider. w;
                    startT = Number(new Date());
                    // CAROUSEL:

                    offset = (carousel && reverse && slider.animatingTo === slider.last) ? 0 :
                        (carousel && reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) :
                            (carousel && slider.currentSlide === slider.last) ? slider.limit :
                                (carousel) ? ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.currentSlide :
                                    (reverse) ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
                }
            }

            function onMSGestureChange(e) {
                e.stopPropagation();
                var slider = e.target._slider;
                if(!slider){
                    return;
                }
                var transX = -e.translationX,
                    transY = -e.translationY;

                //Accumulate translations.
                accDx = accDx + ((vertical) ? transY : transX);
                dx = accDx;
                scrolling = (vertical) ? (Math.abs(accDx) < Math.abs(-transX)) : (Math.abs(accDx) < Math.abs(-transY));

                if(e.detail === e.MSGESTURE_FLAG_INERTIA){
                    setImmediate(function (){
                        el._gesture.stop();
                    });

                    return;
                }

                if (!scrolling || Number(new Date()) - startT > 500) {
                    e.preventDefault();
                    if (!fade && slider.transitions) {
                        if (!slider.vars.animationLoop) {
                            dx = accDx / ((slider.currentSlide === 0 && accDx < 0 || slider.currentSlide === slider.last && accDx > 0) ? (Math.abs(accDx) / cwidth + 2) : 1);
                        }
                        slider.setProps(offset + dx, "setTouch");
                    }
                }
            }

            function onMSGestureEnd(e) {
                e.stopPropagation();
                var slider = e.target._slider;
                if(!slider){
                    return;
                }
                if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
                    var updateDx = (reverse) ? -dx : dx,
                        target = (updateDx > 0) ? slider.getTarget('next') : slider.getTarget('prev');

                    if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth/2)) {
                        slider.flexAnimate(target, slider.vars.pauseOnAction);
                    } else {
                        if (!fade) slider.flexAnimate(slider.currentSlide, slider.vars.pauseOnAction, true);
                    }
                }

                startX = null;
                startY = null;
                dx = null;
                offset = null;
                accDx = 0;
            }
        }
      },
      resize: function() {
        if (!slider.animating && slider.is(':visible')) {
          if (!carousel) slider.doMath();

          if (fade) {
            // SMOOTH HEIGHT:
            methods.smoothHeight();
          } else if (carousel) { //CAROUSEL:
            slider.slides.width(slider.computedW);
            slider.update(slider.pagingCount);
            slider.setProps();
          }
          else if (vertical) { //VERTICAL:
            slider.viewport.height(slider.h);
            slider.setProps(slider.h, "setTotal");
          } else {
            // SMOOTH HEIGHT:
            if (slider.vars.smoothHeight) methods.smoothHeight();
            slider.newSlides.width(slider.computedW);
            slider.setProps(slider.computedW, "setTotal");
          }
        }
      },
      smoothHeight: function(dur) {
        if (!vertical || fade) {
          var $obj = (fade) ? slider : slider.viewport;
          (dur) ? $obj.animate({"height": slider.slides.eq(slider.animatingTo).height()}, dur) : $obj.height(slider.slides.eq(slider.animatingTo).height());
        }
      },
      sync: function(action) {
        var $obj = $(slider.vars.sync).data("flexslider"),
            target = slider.animatingTo;

        switch (action) {
          case "animate": $obj.flexAnimate(target, slider.vars.pauseOnAction, false, true); break;
          case "play": if (!$obj.playing && !$obj.asNav) { $obj.play(); } break;
          case "pause": $obj.pause(); break;
        }
      },
      uniqueID: function($clone) {
        $clone.find( '[id]' ).each(function() {
          var $this = $(this);
          $this.attr( 'id', $this.attr( 'id' ) + '_clone' );
        });
        return $clone;
      },
      pauseInvisible: {
        visProp: null,
        init: function() {
          var prefixes = ['webkit','moz','ms','o'];

          if ('hidden' in document) return 'hidden';
          for (var i = 0; i < prefixes.length; i++) {
            if ((prefixes[i] + 'Hidden') in document)
            methods.pauseInvisible.visProp = prefixes[i] + 'Hidden';
          }
          if (methods.pauseInvisible.visProp) {
            var evtname = methods.pauseInvisible.visProp.replace(/[H|h]idden/,'') + 'visibilitychange';
            document.addEventListener(evtname, function() {
              if (methods.pauseInvisible.isHidden()) {
                if(slider.startTimeout) clearTimeout(slider.startTimeout); //If clock is ticking, stop timer and prevent from starting while invisible
                else slider.pause(); //Or just pause
              }
              else {
                if(slider.started) slider.play(); //Initiated before, just play
                else (slider.vars.initDelay > 0) ? setTimeout(slider.play, slider.vars.initDelay) : slider.play(); //Didn't init before: simply init or wait for it
              }
            });
          }
        },
        isHidden: function() {
          return document[methods.pauseInvisible.visProp] || false;
        }
      },
      setToClearWatchedEvent: function() {
        clearTimeout(watchedEventClearTimer);
        watchedEventClearTimer = setTimeout(function() {
          watchedEvent = "";
        }, 3000);
      }
    };

    // public methods
    slider.flexAnimate = function(target, pause, override, withSync, fromNav) {
      if (!slider.vars.animationLoop && target !== slider.currentSlide) {
        slider.direction = (target > slider.currentSlide) ? "next" : "prev";
      }

      if (asNav && slider.pagingCount === 1) slider.direction = (slider.currentItem < target) ? "next" : "prev";

      if (!slider.animating && (slider.canAdvance(target, fromNav) || override) && slider.is(":visible")) {
        if (asNav && withSync) {
          var master = $(slider.vars.asNavFor).data('flexslider');
          slider.atEnd = target === 0 || target === slider.count - 1;
          master.flexAnimate(target, true, false, true, fromNav);
          slider.direction = (slider.currentItem < target) ? "next" : "prev";
          master.direction = slider.direction;

          if (Math.ceil((target + 1)/slider.visible) - 1 !== slider.currentSlide && target !== 0) {
            slider.currentItem = target;
            slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
            target = Math.floor(target/slider.visible);
          } else {
            slider.currentItem = target;
            slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
            return false;
          }
        }

        slider.animating = true;
        slider.animatingTo = target;

        // SLIDESHOW:
        if (pause) slider.pause();

        // API: before() animation Callback
        slider.vars.before(slider);

        // SYNC:
        if (slider.syncExists && !fromNav) methods.sync("animate");

        // CONTROLNAV
        if (slider.vars.controlNav) methods.controlNav.active();

        // !CAROUSEL:
        // CANDIDATE: slide active class (for add/remove slide)
        if (!carousel) slider.slides.removeClass(namespace + 'active-slide').eq(target).addClass(namespace + 'active-slide');

        // INFINITE LOOP:
        // CANDIDATE: atEnd
        slider.atEnd = target === 0 || target === slider.last;

        // DIRECTIONNAV:
        if (slider.vars.directionNav) methods.directionNav.update();

        if (target === slider.last) {
          // API: end() of cycle Callback
          slider.vars.end(slider);
          // SLIDESHOW && !INFINITE LOOP:
          if (!slider.vars.animationLoop) slider.pause();
        }

        // SLIDE:
        if (!fade) {
          var dimension = (vertical) ? slider.slides.filter(':first').height() : slider.computedW,
              margin, slideString, calcNext;

          // INFINITE LOOP / REVERSE:
          if (carousel) {
            //margin = (slider.vars.itemWidth > slider.w) ? slider.vars.itemMargin * 2 : slider.vars.itemMargin;
            margin = slider.vars.itemMargin;
            calcNext = ((slider.itemW + margin) * slider.move) * slider.animatingTo;
            slideString = (calcNext > slider.limit && slider.visible !== 1) ? slider.limit : calcNext;
          } else if (slider.currentSlide === 0 && target === slider.count - 1 && slider.vars.animationLoop && slider.direction !== "next") {
            slideString = (reverse) ? (slider.count + slider.cloneOffset) * dimension : 0;
          } else if (slider.currentSlide === slider.last && target === 0 && slider.vars.animationLoop && slider.direction !== "prev") {
            slideString = (reverse) ? 0 : (slider.count + 1) * dimension;
          } else {
            slideString = (reverse) ? ((slider.count - 1) - target + slider.cloneOffset) * dimension : (target + slider.cloneOffset) * dimension;
          }
          slider.setProps(slideString, "", slider.vars.animationSpeed);
          if (slider.transitions) {
            if (!slider.vars.animationLoop || !slider.atEnd) {
              slider.animating = false;
              slider.currentSlide = slider.animatingTo;
            }
            slider.container.unbind("webkitTransitionEnd transitionend");
            slider.container.bind("webkitTransitionEnd transitionend", function() {
              slider.wrapup(dimension);
            });
          } else {
            slider.container.animate(slider.args, slider.vars.animationSpeed, slider.vars.easing, function(){
              slider.wrapup(dimension);
            });
          }
        } else { // FADE:
          if (!touch) {
            //slider.slides.eq(slider.currentSlide).fadeOut(slider.vars.animationSpeed, slider.vars.easing);
            //slider.slides.eq(target).fadeIn(slider.vars.animationSpeed, slider.vars.easing, slider.wrapup);

            slider.slides.eq(slider.currentSlide).css({"zIndex": 1}).animate({"opacity": 0}, slider.vars.animationSpeed, slider.vars.easing);
            slider.slides.eq(target).css({"zIndex": 2}).animate({"opacity": 1}, slider.vars.animationSpeed, slider.vars.easing, slider.wrapup);

          } else {
            slider.slides.eq(slider.currentSlide).css({ "opacity": 0, "zIndex": 1 });
            slider.slides.eq(target).css({ "opacity": 1, "zIndex": 2 });
            slider.wrapup(dimension);
          }
        }
        // SMOOTH HEIGHT:
        if (slider.vars.smoothHeight) methods.smoothHeight(slider.vars.animationSpeed);
      }
    };
    slider.wrapup = function(dimension) {
      // SLIDE:
      if (!fade && !carousel) {
        if (slider.currentSlide === 0 && slider.animatingTo === slider.last && slider.vars.animationLoop) {
          slider.setProps(dimension, "jumpEnd");
        } else if (slider.currentSlide === slider.last && slider.animatingTo === 0 && slider.vars.animationLoop) {
          slider.setProps(dimension, "jumpStart");
        }
      }
      slider.animating = false;
      slider.currentSlide = slider.animatingTo;
      // API: after() animation Callback
      slider.vars.after(slider);
    };

    // SLIDESHOW:
    slider.animateSlides = function() {
      if (!slider.animating && focused ) slider.flexAnimate(slider.getTarget("next"));
    };
    // SLIDESHOW:
    slider.pause = function() {
      clearInterval(slider.animatedSlides);
      slider.animatedSlides = null;
      slider.playing = false;
      // PAUSEPLAY:
      if (slider.vars.pausePlay) methods.pausePlay.update("play");
      // SYNC:
      if (slider.syncExists) methods.sync("pause");
    };
    // SLIDESHOW:
    slider.play = function() {
      if (slider.playing) clearInterval(slider.animatedSlides);
      slider.animatedSlides = slider.animatedSlides || setInterval(slider.animateSlides, slider.vars.slideshowSpeed);
      slider.started = slider.playing = true;
      // PAUSEPLAY:
      if (slider.vars.pausePlay) methods.pausePlay.update("pause");
      // SYNC:
      if (slider.syncExists) methods.sync("play");
    };
    // STOP:
    slider.stop = function () {
      slider.pause();
      slider.stopped = true;
    };
    slider.canAdvance = function(target, fromNav) {
      // ASNAV:
      var last = (asNav) ? slider.pagingCount - 1 : slider.last;
      return (fromNav) ? true :
             (asNav && slider.currentItem === slider.count - 1 && target === 0 && slider.direction === "prev") ? true :
             (asNav && slider.currentItem === 0 && target === slider.pagingCount - 1 && slider.direction !== "next") ? false :
             (target === slider.currentSlide && !asNav) ? false :
             (slider.vars.animationLoop) ? true :
             (slider.atEnd && slider.currentSlide === 0 && target === last && slider.direction !== "next") ? false :
             (slider.atEnd && slider.currentSlide === last && target === 0 && slider.direction === "next") ? false :
             true;
    };
    slider.getTarget = function(dir) {
      slider.direction = dir;
      if (dir === "next") {
        return (slider.currentSlide === slider.last) ? 0 : slider.currentSlide + 1;
      } else {
        return (slider.currentSlide === 0) ? slider.last : slider.currentSlide - 1;
      }
    };

    // SLIDE:
    slider.setProps = function(pos, special, dur) {
      var target = (function() {
        var posCheck = (pos) ? pos : ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo,
            posCalc = (function() {
              if (carousel) {
                return (special === "setTouch") ? pos :
                       (reverse && slider.animatingTo === slider.last) ? 0 :
                       (reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) :
                       (slider.animatingTo === slider.last) ? slider.limit : posCheck;
              } else {
                switch (special) {
                  case "setTotal": return (reverse) ? ((slider.count - 1) - slider.currentSlide + slider.cloneOffset) * pos : (slider.currentSlide + slider.cloneOffset) * pos;
                  case "setTouch": return (reverse) ? pos : pos;
                  case "jumpEnd": return (reverse) ? pos : slider.count * pos;
                  case "jumpStart": return (reverse) ? slider.count * pos : pos;
                  default: return pos;
                }
              }
            }());

            return (posCalc * -1) + "px";
          }());

      if (slider.transitions) {
        target = (vertical) ? "translate3d(0," + target + ",0)" : "translate3d(" + target + ",0,0)";
        dur = (dur !== undefined) ? (dur/1000) + "s" : "0s";
        slider.container.css("-" + slider.pfx + "-transition-duration", dur);
         slider.container.css("transition-duration", dur);
      }

      slider.args[slider.prop] = target;
      if (slider.transitions || dur === undefined) slider.container.css(slider.args);

      slider.container.css('transform',target);
    };

    slider.setup = function(type) {
      // SLIDE:
      if (!fade) {
        var sliderOffset, arr;

        if (type === "init") {
          slider.viewport = $('<div class="' + namespace + 'viewport"></div>').css({"overflow": "hidden", "position": "relative"}).appendTo(slider).append(slider.container);
          // INFINITE LOOP:
          slider.cloneCount = 0;
          slider.cloneOffset = 0;
          // REVERSE:
          if (reverse) {
            arr = $.makeArray(slider.slides).reverse();
            slider.slides = $(arr);
            slider.container.empty().append(slider.slides);
          }
        }
        // INFINITE LOOP && !CAROUSEL:
        if (slider.vars.animationLoop && !carousel) {
          slider.cloneCount = 2;
          slider.cloneOffset = 1;
          // clear out old clones
          if (type !== "init") slider.container.find('.clone').remove();
          slider.container.append(slider.slides.first().clone().addClass('clone').attr('aria-hidden', 'true')).prepend(slider.slides.last().clone().addClass('clone').attr('aria-hidden', 'true'));
		      methods.uniqueID( slider.slides.first().clone().addClass('clone') ).appendTo( slider.container );
		      methods.uniqueID( slider.slides.last().clone().addClass('clone') ).prependTo( slider.container );
        }
        slider.newSlides = $(slider.vars.selector, slider);

        sliderOffset = (reverse) ? slider.count - 1 - slider.currentSlide + slider.cloneOffset : slider.currentSlide + slider.cloneOffset;
        // VERTICAL:
        if (vertical && !carousel) {
          slider.container.height((slider.count + slider.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
          setTimeout(function(){
            slider.newSlides.css({"display": "block"});
            slider.doMath();
            slider.viewport.height(slider.h);
            slider.setProps(sliderOffset * slider.h, "init");
          }, (type === "init") ? 100 : 0);
        } else {
          slider.container.width((slider.count + slider.cloneCount) * 200 + "%");
          slider.setProps(sliderOffset * slider.computedW, "init");
          setTimeout(function(){
            slider.doMath();
            slider.newSlides.css({"width": slider.computedW, "float": "left", "display": "block"});
            // SMOOTH HEIGHT:
            if (slider.vars.smoothHeight) methods.smoothHeight();
          }, (type === "init") ? 100 : 0);
        }
      } else { // FADE:
        slider.slides.css({"width": "100%", "float": "left", "marginRight": "-100%", "position": "relative"});
        if (type === "init") {
          if (!touch) {
            //slider.slides.eq(slider.currentSlide).fadeIn(slider.vars.animationSpeed, slider.vars.easing);
            slider.slides.css({ "opacity": 0, "display": "block", "zIndex": 1 }).eq(slider.currentSlide).css({"zIndex": 2}).animate({"opacity": 1},slider.vars.animationSpeed,slider.vars.easing);
          } else {
            slider.slides.css({ "opacity": 0, "display": "block", "webkitTransition": "opacity " + slider.vars.animationSpeed / 1000 + "s ease", "zIndex": 1 }).eq(slider.currentSlide).css({ "opacity": 1, "zIndex": 2});
          }
        }
        // SMOOTH HEIGHT:
        if (slider.vars.smoothHeight) methods.smoothHeight();
      }
      // !CAROUSEL:
      // CANDIDATE: active slide
      if (!carousel) slider.slides.removeClass(namespace + "active-slide").eq(slider.currentSlide).addClass(namespace + "active-slide");

      //FlexSlider: init() Callback
      slider.vars.init(slider);
    };

    slider.doMath = function() {
      var slide = slider.slides.first(),
          slideMargin = slider.vars.itemMargin,
          minItems = slider.vars.minItems,
          maxItems = slider.vars.maxItems;

      slider.w = (slider.viewport===undefined) ? slider.width() : slider.viewport.width();
      slider.h = slide.height();
      slider.boxPadding = slide.outerWidth() - slide.width();

      // CAROUSEL:
      if (carousel) {
        slider.itemT = slider.vars.itemWidth + slideMargin;
        slider.minW = (minItems) ? minItems * slider.itemT : slider.w;
        slider.maxW = (maxItems) ? (maxItems * slider.itemT) - slideMargin : slider.w;
        slider.itemW = (slider.minW > slider.w) ? (slider.w - (slideMargin * (minItems - 1)))/minItems :
                       (slider.maxW < slider.w) ? (slider.w - (slideMargin * (maxItems - 1)))/maxItems :
                       (slider.vars.itemWidth > slider.w) ? slider.w : slider.vars.itemWidth;

        slider.visible = Math.floor(slider.w/(slider.itemW));
        slider.move = (slider.vars.move > 0 && slider.vars.move < slider.visible ) ? slider.vars.move : slider.visible;
        slider.pagingCount = Math.ceil(((slider.count - slider.visible)/slider.move) + 1);
        slider.last =  slider.pagingCount - 1;
        slider.limit = (slider.pagingCount === 1) ? 0 :
                       (slider.vars.itemWidth > slider.w) ? (slider.itemW * (slider.count - 1)) + (slideMargin * (slider.count - 1)) : ((slider.itemW + slideMargin) * slider.count) - slider.w - slideMargin;
      } else {
        slider.itemW = slider.w;
        slider.pagingCount = slider.count;
        slider.last = slider.count - 1;
      }
      slider.computedW = slider.itemW - slider.boxPadding;
    };

    slider.update = function(pos, action) {
      slider.doMath();

      // update currentSlide and slider.animatingTo if necessary
      if (!carousel) {
        if (pos < slider.currentSlide) {
          slider.currentSlide += 1;
        } else if (pos <= slider.currentSlide && pos !== 0) {
          slider.currentSlide -= 1;
        }
        slider.animatingTo = slider.currentSlide;
      }

      // update controlNav
      if (slider.vars.controlNav && !slider.manualControls) {
        if ((action === "add" && !carousel) || slider.pagingCount > slider.controlNav.length) {
          methods.controlNav.update("add");
        } else if ((action === "remove" && !carousel) || slider.pagingCount < slider.controlNav.length) {
          if (carousel && slider.currentSlide > slider.last) {
            slider.currentSlide -= 1;
            slider.animatingTo -= 1;
          }
          methods.controlNav.update("remove", slider.last);
        }
      }
      // update directionNav
      if (slider.vars.directionNav) methods.directionNav.update();

    };

    slider.addSlide = function(obj, pos) {
      var $obj = $(obj);

      slider.count += 1;
      slider.last = slider.count - 1;

      // append new slide
      if (vertical && reverse) {
        (pos !== undefined) ? slider.slides.eq(slider.count - pos).after($obj) : slider.container.prepend($obj);
      } else {
        (pos !== undefined) ? slider.slides.eq(pos).before($obj) : slider.container.append($obj);
      }

      // update currentSlide, animatingTo, controlNav, and directionNav
      slider.update(pos, "add");

      // update slider.slides
      slider.slides = $(slider.vars.selector + ':not(.clone)', slider);
      // re-setup the slider to accomdate new slide
      slider.setup();

      //FlexSlider: added() Callback
      slider.vars.added(slider);
    };
    slider.removeSlide = function(obj) {
      var pos = (isNaN(obj)) ? slider.slides.index($(obj)) : obj;

      // update count
      slider.count -= 1;
      slider.last = slider.count - 1;

      // remove slide
      if (isNaN(obj)) {
        $(obj, slider.slides).remove();
      } else {
        (vertical && reverse) ? slider.slides.eq(slider.last).remove() : slider.slides.eq(obj).remove();
      }

      // update currentSlide, animatingTo, controlNav, and directionNav
      slider.doMath();
      slider.update(pos, "remove");

      // update slider.slides
      slider.slides = $(slider.vars.selector + ':not(.clone)', slider);
      // re-setup the slider to accomdate new slide
      slider.setup();

      // FlexSlider: removed() Callback
      slider.vars.removed(slider);
    };

    //FlexSlider: Initialize
    methods.init();
  };

  // Ensure the slider isn't focussed if the window loses focus.
  $( window ).blur( function ( e ) {
    focused = false;
  }).focus( function ( e ) {
    focused = true;
  });

  //FlexSlider: Default Settings
  $.flexslider.defaults = {
    namespace: "flex-",             //{NEW} String: Prefix string attached to the class of every element generated by the plugin
    selector: ".slides > li",       //{NEW} Selector: Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at your own peril
    animation: "fade",              //String: Select your animation type, "fade" or "slide"
    easing: "swing",                //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
    direction: "horizontal",        //String: Select the sliding direction, "horizontal" or "vertical"
    reverse: false,                 //{NEW} Boolean: Reverse the animation direction
    animationLoop: true,            //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
    smoothHeight: false,            //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
    startAt: 0,                     //Integer: The slide that the slider should start on. Array notation (0 = first slide)
    slideshow: true,                //Boolean: Animate slider automatically
    slideshowSpeed: 7000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
    animationSpeed: 600,            //Integer: Set the speed of animations, in milliseconds
    initDelay: 0,                   //{NEW} Integer: Set an initialization delay, in milliseconds
    randomize: false,               //Boolean: Randomize slide order
    thumbCaptions: false,           //Boolean: Whether or not to put captions on thumbnails when using the "thumbnails" controlNav.

    // Usability features
    pauseOnAction: true,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
    pauseOnHover: false,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
    pauseInvisible: true,   		//{NEW} Boolean: Pause the slideshow when tab is invisible, resume when visible. Provides better UX, lower CPU usage.
    useCSS: true,                   //{NEW} Boolean: Slider will use CSS3 transitions if available
    touch: true,                    //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
    video: false,                   //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches

    // Primary Controls
    controlNav: true,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
    directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
    prevText: "Previous",           //String: Set the text for the "previous" directionNav item
    nextText: "Next",               //String: Set the text for the "next" directionNav item

    // Secondary Navigation
    keyboard: true,                 //Boolean: Allow slider navigating via keyboard left/right keys
    multipleKeyboard: false,        //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
    mousewheel: false,              //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
    pausePlay: false,               //Boolean: Create pause/play dynamic element
    pauseText: "Pause",             //String: Set the text for the "pause" pausePlay item
    playText: "Play",               //String: Set the text for the "play" pausePlay item

    // Special properties
    controlsContainer: "",          //{UPDATED} jQuery Object/Selector: Declare which container the navigation elements should be appended too. Default container is the FlexSlider element. Example use would be $(".flexslider-container"). Property is ignored if given element is not found.
    manualControls: "",             //{UPDATED} jQuery Object/Selector: Declare custom control navigation. Examples would be $(".flex-control-nav li") or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
    sync: "",                       //{NEW} Selector: Mirror the actions performed on this slider with another slider. Use with care.
    asNavFor: "",                   //{NEW} Selector: Internal property exposed for turning the slider into a thumbnail navigation for another slider

    // Carousel Options
    itemWidth: 0,                   //{NEW} Integer: Box-model width of individual carousel items, including horizontal borders and padding.
    itemMargin: 0,                  //{NEW} Integer: Margin between carousel items.
    minItems: 1,                    //{NEW} Integer: Minimum number of carousel items that should be visible. Items will resize fluidly when below this.
    maxItems: 0,                    //{NEW} Integer: Maxmimum number of carousel items that should be visible. Items will resize fluidly when above this limit.
    move: 0,                        //{NEW} Integer: Number of carousel items that should move on animation. If 0, slider will move all visible items.
    allowOneSlide: true,           //{NEW} Boolean: Whether or not to allow a slider comprised of a single slide

    // Callback API
    start: function(){},            //Callback: function(slider) - Fires when the slider loads the first slide
    before: function(){},           //Callback: function(slider) - Fires asynchronously with each slider animation
    after: function(){},            //Callback: function(slider) - Fires after each slider animation completes
    end: function(){},              //Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
    added: function(){},            //{NEW} Callback: function(slider) - Fires after a slide is added
    removed: function(){},           //{NEW} Callback: function(slider) - Fires after a slide is removed
    init: function() {}             //{NEW} Callback: function(slider) - Fires after the slider is initially setup
  };

  //FlexSlider: Plugin Function
  $.fn.flexslider = function(options) {
    if (options === undefined) options = {};

    if (typeof options === "object") {
      return this.each(function() {
        var $this = $(this),
            selector = (options.selector) ? options.selector : ".slides > li",
            $slides = $this.find(selector);

      if ( ( $slides.length === 1 && options.allowOneSlide === true ) || $slides.length === 0 ) {
          $slides.fadeIn(400);
          if (options.start) options.start($this);
        } else if ($this.data('flexslider') === undefined) {
          new $.flexslider(this, options);
        }
      });
    } else {
      // Helper strings to quickly perform functions on the slider
      var $slider = $(this).data('flexslider');
      switch (options) {
        case "play": $slider.play(); break;
        case "pause": $slider.pause(); break;
        case "stop": $slider.stop(); break;
        case "next": $slider.flexAnimate($slider.getTarget("next"), true); break;
        case "prev":
        case "previous": $slider.flexAnimate($slider.getTarget("prev"), true); break;
        default: if (typeof options === "number") $slider.flexAnimate(options, true);
      }
    }
  };
})(jQuery);

/*!
 * Isotope PACKAGED v2.0.0
 * Filter & sort magical layouts
 * http://isotope.metafizzy.co
 */

(function(t){function e(){}function i(t){function i(e){e.prototype.option||(e.prototype.option=function(e){t.isPlainObject(e)&&(this.options=t.extend(!0,this.options,e))})}function n(e,i){t.fn[e]=function(n){if("string"==typeof n){for(var s=o.call(arguments,1),a=0,u=this.length;u>a;a++){var p=this[a],h=t.data(p,e);if(h)if(t.isFunction(h[n])&&"_"!==n.charAt(0)){var f=h[n].apply(h,s);if(void 0!==f)return f}else r("no such method '"+n+"' for "+e+" instance");else r("cannot call methods on "+e+" prior to initialization; "+"attempted to call '"+n+"'")}return this}return this.each(function(){var o=t.data(this,e);o?(o.option(n),o._init()):(o=new i(this,n),t.data(this,e,o))})}}if(t){var r="undefined"==typeof console?e:function(t){console.error(t)};return t.bridget=function(t,e){i(e),n(t,e)},t.bridget}}var o=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],i):i(t.jQuery)})(window),function(t){function e(e){var i=t.event;return i.target=i.target||i.srcElement||e,i}var i=document.documentElement,o=function(){};i.addEventListener?o=function(t,e,i){t.addEventListener(e,i,!1)}:i.attachEvent&&(o=function(t,i,o){t[i+o]=o.handleEvent?function(){var i=e(t);o.handleEvent.call(o,i)}:function(){var i=e(t);o.call(t,i)},t.attachEvent("on"+i,t[i+o])});var n=function(){};i.removeEventListener?n=function(t,e,i){t.removeEventListener(e,i,!1)}:i.detachEvent&&(n=function(t,e,i){t.detachEvent("on"+e,t[e+i]);try{delete t[e+i]}catch(o){t[e+i]=void 0}});var r={bind:o,unbind:n};"function"==typeof define&&define.amd?define("eventie/eventie",r):"object"==typeof exports?module.exports=r:t.eventie=r}(this),function(t){function e(t){"function"==typeof t&&(e.isReady?t():r.push(t))}function i(t){var i="readystatechange"===t.type&&"complete"!==n.readyState;if(!e.isReady&&!i){e.isReady=!0;for(var o=0,s=r.length;s>o;o++){var a=r[o];a()}}}function o(o){return o.bind(n,"DOMContentLoaded",i),o.bind(n,"readystatechange",i),o.bind(t,"load",i),e}var n=t.document,r=[];e.isReady=!1,"function"==typeof define&&define.amd?(e.isReady="function"==typeof requirejs,define("doc-ready/doc-ready",["eventie/eventie"],o)):t.docReady=o(t.eventie)}(this),function(){function t(){}function e(t,e){for(var i=t.length;i--;)if(t[i].listener===e)return i;return-1}function i(t){return function(){return this[t].apply(this,arguments)}}var o=t.prototype,n=this,r=n.EventEmitter;o.getListeners=function(t){var e,i,o=this._getEvents();if(t instanceof RegExp){e={};for(i in o)o.hasOwnProperty(i)&&t.test(i)&&(e[i]=o[i])}else e=o[t]||(o[t]=[]);return e},o.flattenListeners=function(t){var e,i=[];for(e=0;t.length>e;e+=1)i.push(t[e].listener);return i},o.getListenersAsObject=function(t){var e,i=this.getListeners(t);return i instanceof Array&&(e={},e[t]=i),e||i},o.addListener=function(t,i){var o,n=this.getListenersAsObject(t),r="object"==typeof i;for(o in n)n.hasOwnProperty(o)&&-1===e(n[o],i)&&n[o].push(r?i:{listener:i,once:!1});return this},o.on=i("addListener"),o.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},o.once=i("addOnceListener"),o.defineEvent=function(t){return this.getListeners(t),this},o.defineEvents=function(t){for(var e=0;t.length>e;e+=1)this.defineEvent(t[e]);return this},o.removeListener=function(t,i){var o,n,r=this.getListenersAsObject(t);for(n in r)r.hasOwnProperty(n)&&(o=e(r[n],i),-1!==o&&r[n].splice(o,1));return this},o.off=i("removeListener"),o.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},o.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},o.manipulateListeners=function(t,e,i){var o,n,r=t?this.removeListener:this.addListener,s=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(o=i.length;o--;)r.call(this,e,i[o]);else for(o in e)e.hasOwnProperty(o)&&(n=e[o])&&("function"==typeof n?r.call(this,o,n):s.call(this,o,n));return this},o.removeEvent=function(t){var e,i=typeof t,o=this._getEvents();if("string"===i)delete o[t];else if(t instanceof RegExp)for(e in o)o.hasOwnProperty(e)&&t.test(e)&&delete o[e];else delete this._events;return this},o.removeAllListeners=i("removeEvent"),o.emitEvent=function(t,e){var i,o,n,r,s=this.getListenersAsObject(t);for(n in s)if(s.hasOwnProperty(n))for(o=s[n].length;o--;)i=s[n][o],i.once===!0&&this.removeListener(t,i.listener),r=i.listener.apply(this,e||[]),r===this._getOnceReturnValue()&&this.removeListener(t,i.listener);return this},o.trigger=i("emitEvent"),o.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},o.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},o._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},o._getEvents=function(){return this._events||(this._events={})},t.noConflict=function(){return n.EventEmitter=r,t},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return t}):"object"==typeof module&&module.exports?module.exports=t:this.EventEmitter=t}.call(this),function(t){function e(t){if(t){if("string"==typeof o[t])return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e,n=0,r=i.length;r>n;n++)if(e=i[n]+t,"string"==typeof o[e])return e}}var i="Webkit Moz ms Ms O".split(" "),o=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return e}):"object"==typeof exports?module.exports=e:t.getStyleProperty=e}(window),function(t){function e(t){var e=parseFloat(t),i=-1===t.indexOf("%")&&!isNaN(e);return i&&e}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0,i=s.length;i>e;e++){var o=s[e];t[o]=0}return t}function o(t){function o(t){if("string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var o=r(t);if("none"===o.display)return i();var n={};n.width=t.offsetWidth,n.height=t.offsetHeight;for(var h=n.isBorderBox=!(!p||!o[p]||"border-box"!==o[p]),f=0,c=s.length;c>f;f++){var d=s[f],l=o[d];l=a(t,l);var y=parseFloat(l);n[d]=isNaN(y)?0:y}var m=n.paddingLeft+n.paddingRight,g=n.paddingTop+n.paddingBottom,v=n.marginLeft+n.marginRight,_=n.marginTop+n.marginBottom,I=n.borderLeftWidth+n.borderRightWidth,L=n.borderTopWidth+n.borderBottomWidth,z=h&&u,S=e(o.width);S!==!1&&(n.width=S+(z?0:m+I));var b=e(o.height);return b!==!1&&(n.height=b+(z?0:g+L)),n.innerWidth=n.width-(m+I),n.innerHeight=n.height-(g+L),n.outerWidth=n.width+v,n.outerHeight=n.height+_,n}}function a(t,e){if(n||-1===e.indexOf("%"))return e;var i=t.style,o=i.left,r=t.runtimeStyle,s=r&&r.left;return s&&(r.left=t.currentStyle.left),i.left=e,e=i.pixelLeft,i.left=o,s&&(r.left=s),e}var u,p=t("boxSizing");return function(){if(p){var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style[p]="border-box";var i=document.body||document.documentElement;i.appendChild(t);var o=r(t);u=200===e(o.width),i.removeChild(t)}}(),o}var n=t.getComputedStyle,r=n?function(t){return n(t,null)}:function(t){return t.currentStyle},s=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],o):"object"==typeof exports?module.exports=o(require("get-style-property")):t.getSize=o(t.getStyleProperty)}(window),function(t,e){function i(t,e){return t[a](e)}function o(t){if(!t.parentNode){var e=document.createDocumentFragment();e.appendChild(t)}}function n(t,e){o(t);for(var i=t.parentNode.querySelectorAll(e),n=0,r=i.length;r>n;n++)if(i[n]===t)return!0;return!1}function r(t,e){return o(t),i(t,e)}var s,a=function(){if(e.matchesSelector)return"matchesSelector";for(var t=["webkit","moz","ms","o"],i=0,o=t.length;o>i;i++){var n=t[i],r=n+"MatchesSelector";if(e[r])return r}}();if(a){var u=document.createElement("div"),p=i(u,"div");s=p?i:r}else s=n;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return s}):window.matchesSelector=s}(this,Element.prototype),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){for(var e in t)return!1;return e=null,!0}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function n(t,n,r){function a(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}var u=r("transition"),p=r("transform"),h=u&&p,f=!!r("perspective"),c={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[u],d=["transform","transition","transitionDuration","transitionProperty"],l=function(){for(var t={},e=0,i=d.length;i>e;e++){var o=d[e],n=r(o);n&&n!==o&&(t[o]=n)}return t}();e(a.prototype,t.prototype),a.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},a.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},a.prototype.getSize=function(){this.size=n(this.element)},a.prototype.css=function(t){var e=this.element.style;for(var i in t){var o=l[i]||i;e[o]=t[i]}},a.prototype.getPosition=function(){var t=s(this.element),e=this.layout.options,i=e.isOriginLeft,o=e.isOriginTop,n=parseInt(t[i?"left":"right"],10),r=parseInt(t[o?"top":"bottom"],10);n=isNaN(n)?0:n,r=isNaN(r)?0:r;var a=this.layout.size;n-=i?a.paddingLeft:a.paddingRight,r-=o?a.paddingTop:a.paddingBottom,this.position.x=n,this.position.y=r},a.prototype.layoutPosition=function(){var t=this.layout.size,e=this.layout.options,i={};e.isOriginLeft?(i.left=this.position.x+t.paddingLeft+"px",i.right=""):(i.right=this.position.x+t.paddingRight+"px",i.left=""),e.isOriginTop?(i.top=this.position.y+t.paddingTop+"px",i.bottom=""):(i.bottom=this.position.y+t.paddingBottom+"px",i.top=""),this.css(i),this.emitEvent("layout",[this])};var y=f?function(t,e){return"translate3d("+t+"px, "+e+"px, 0)"}:function(t,e){return"translate("+t+"px, "+e+"px)"};a.prototype._transitionTo=function(t,e){this.getPosition();var i=this.position.x,o=this.position.y,n=parseInt(t,10),r=parseInt(e,10),s=n===this.position.x&&r===this.position.y;if(this.setPosition(t,e),s&&!this.isTransitioning)return this.layoutPosition(),void 0;var a=t-i,u=e-o,p={},h=this.layout.options;a=h.isOriginLeft?a:-a,u=h.isOriginTop?u:-u,p.transform=y(a,u),this.transition({to:p,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},a.prototype.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},a.prototype.moveTo=h?a.prototype._transitionTo:a.prototype.goTo,a.prototype.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},a.prototype._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},a.prototype._transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return this._nonTransition(t),void 0;var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var o=this.element.offsetHeight;o=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var m=p&&o(p)+",opacity";a.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:m,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(c,this,!1))},a.prototype.transition=a.prototype[u?"_transition":"_nonTransition"],a.prototype.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},a.prototype.onotransitionend=function(t){this.ontransitionend(t)};var g={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};a.prototype.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,o=g[t.propertyName]||t.propertyName;if(delete e.ingProperties[o],i(e.ingProperties)&&this.disableTransition(),o in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[o]),o in e.onEnd){var n=e.onEnd[o];n.call(this),delete e.onEnd[o]}this.emitEvent("transitionEnd",[this])}},a.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(c,this,!1),this.isTransitioning=!1},a.prototype._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var v={transitionProperty:"",transitionDuration:""};return a.prototype.removeTransitionStyles=function(){this.css(v)},a.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.emitEvent("remove",[this])},a.prototype.remove=function(){if(!u||!parseFloat(this.layout.options.transitionDuration))return this.removeElem(),void 0;var t=this;this.on("transitionEnd",function(){return t.removeElem(),!0}),this.hide()},a.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options;this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0})},a.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options;this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:{opacity:function(){this.isHidden&&this.css({display:"none"})}}})},a.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},a}var r=t.getComputedStyle,s=r?function(t){return r(t,null)}:function(t){return t.currentStyle};"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property"],n):(t.Outlayer={},t.Outlayer.Item=n(t.EventEmitter,t.getSize,t.getStyleProperty))}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){return"[object Array]"===f.call(t)}function o(t){var e=[];if(i(t))e=t;else if(t&&"number"==typeof t.length)for(var o=0,n=t.length;n>o;o++)e.push(t[o]);else e.push(t);return e}function n(t,e){var i=d(e,t);-1!==i&&e.splice(i,1)}function r(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()}function s(i,s,f,d,l,y){function m(t,i){if("string"==typeof t&&(t=a.querySelector(t)),!t||!c(t))return u&&u.error("Bad "+this.constructor.namespace+" element: "+t),void 0;this.element=t,this.options=e({},this.constructor.defaults),this.option(i);var o=++g;this.element.outlayerGUID=o,v[o]=this,this._create(),this.options.isInitLayout&&this.layout()}var g=0,v={};return m.namespace="outlayer",m.Item=y,m.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e(m.prototype,f.prototype),m.prototype.option=function(t){e(this.options,t)},m.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},m.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},m.prototype._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,o=[],n=0,r=e.length;r>n;n++){var s=e[n],a=new i(s,this);o.push(a)}return o},m.prototype._filterFindItemElements=function(t){t=o(t);for(var e=this.options.itemSelector,i=[],n=0,r=t.length;r>n;n++){var s=t[n];if(c(s))if(e){l(s,e)&&i.push(s);for(var a=s.querySelectorAll(e),u=0,p=a.length;p>u;u++)i.push(a[u])}else i.push(s)}return i},m.prototype.getItemElements=function(){for(var t=[],e=0,i=this.items.length;i>e;e++)t.push(this.items[e].element);return t},m.prototype.layout=function(){this._resetLayout(),this._manageStamps();var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,t),this._isLayoutInited=!0},m.prototype._init=m.prototype.layout,m.prototype._resetLayout=function(){this.getSize()},m.prototype.getSize=function(){this.size=d(this.element)},m.prototype._getMeasurement=function(t,e){var i,o=this.options[t];o?("string"==typeof o?i=this.element.querySelector(o):c(o)&&(i=o),this[t]=i?d(i)[e]:o):this[t]=0},m.prototype.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},m.prototype._getItemsForLayout=function(t){for(var e=[],i=0,o=t.length;o>i;i++){var n=t[i];n.isIgnored||e.push(n)}return e},m.prototype._layoutItems=function(t,e){function i(){o.emitEvent("layoutComplete",[o,t])}var o=this;if(!t||!t.length)return i(),void 0;this._itemsOn(t,"layout",i);for(var n=[],r=0,s=t.length;s>r;r++){var a=t[r],u=this._getItemLayoutPosition(a);u.item=a,u.isInstant=e||a.isLayoutInstant,n.push(u)}this._processLayoutQueue(n)},m.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},m.prototype._processLayoutQueue=function(t){for(var e=0,i=t.length;i>e;e++){var o=t[e];this._positionItem(o.item,o.x,o.y,o.isInstant)}},m.prototype._positionItem=function(t,e,i,o){o?t.goTo(e,i):t.moveTo(e,i)},m.prototype._postLayout=function(){this.resizeContainer()},m.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var t=this._getContainerSize();t&&(this._setContainerMeasure(t.width,!0),this._setContainerMeasure(t.height,!1))}},m.prototype._getContainerSize=h,m.prototype._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},m.prototype._itemsOn=function(t,e,i){function o(){return n++,n===r&&i.call(s),!0}for(var n=0,r=t.length,s=this,a=0,u=t.length;u>a;a++){var p=t[a];p.on(e,o)}},m.prototype.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},m.prototype.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},m.prototype.stamp=function(t){if(t=this._find(t)){this.stamps=this.stamps.concat(t);for(var e=0,i=t.length;i>e;e++){var o=t[e];this.ignore(o)}}},m.prototype.unstamp=function(t){if(t=this._find(t))for(var e=0,i=t.length;i>e;e++){var o=t[e];n(o,this.stamps),this.unignore(o)}},m.prototype._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=o(t)):void 0},m.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var t=0,e=this.stamps.length;e>t;t++){var i=this.stamps[t];this._manageStamp(i)}}},m.prototype._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},m.prototype._manageStamp=h,m.prototype._getElementOffset=function(t){var e=t.getBoundingClientRect(),i=this._boundingRect,o=d(t),n={left:e.left-i.left-o.marginLeft,top:e.top-i.top-o.marginTop,right:i.right-e.right-o.marginRight,bottom:i.bottom-e.bottom-o.marginBottom};return n},m.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},m.prototype.bindResize=function(){this.isResizeBound||(i.bind(t,"resize",this),this.isResizeBound=!0)},m.prototype.unbindResize=function(){this.isResizeBound&&i.unbind(t,"resize",this),this.isResizeBound=!1},m.prototype.onresize=function(){function t(){e.resize(),delete e.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var e=this;this.resizeTimeout=setTimeout(t,100)},m.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},m.prototype.needsResizeLayout=function(){var t=d(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},m.prototype.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},m.prototype.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},m.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},m.prototype.reveal=function(t){var e=t&&t.length;if(e)for(var i=0;e>i;i++){var o=t[i];o.reveal()}},m.prototype.hide=function(t){var e=t&&t.length;if(e)for(var i=0;e>i;i++){var o=t[i];o.hide()}},m.prototype.getItem=function(t){for(var e=0,i=this.items.length;i>e;e++){var o=this.items[e];if(o.element===t)return o}},m.prototype.getItems=function(t){if(t&&t.length){for(var e=[],i=0,o=t.length;o>i;i++){var n=t[i],r=this.getItem(n);r&&e.push(r)}return e}},m.prototype.remove=function(t){t=o(t);var e=this.getItems(t);if(e&&e.length){this._itemsOn(e,"remove",function(){this.emitEvent("removeComplete",[this,e])});for(var i=0,r=e.length;r>i;i++){var s=e[i];s.remove(),n(s,this.items)}}},m.prototype.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="";for(var e=0,i=this.items.length;i>e;e++){var o=this.items[e];o.destroy()}this.unbindResize(),delete this.element.outlayerGUID,p&&p.removeData(this.element,this.constructor.namespace)},m.data=function(t){var e=t&&t.outlayerGUID;return e&&v[e]},m.create=function(t,i){function o(){m.apply(this,arguments)}return Object.create?o.prototype=Object.create(m.prototype):e(o.prototype,m.prototype),o.prototype.constructor=o,o.defaults=e({},m.defaults),e(o.defaults,i),o.prototype.settings={},o.namespace=t,o.data=m.data,o.Item=function(){y.apply(this,arguments)},o.Item.prototype=new y,s(function(){for(var e=r(t),i=a.querySelectorAll(".js-"+e),n="data-"+e+"-options",s=0,h=i.length;h>s;s++){var f,c=i[s],d=c.getAttribute(n);try{f=d&&JSON.parse(d)}catch(l){u&&u.error("Error parsing "+n+" on "+c.nodeName.toLowerCase()+(c.id?"#"+c.id:"")+": "+l);continue}var y=new o(c,f);p&&p.data(c,t,y)}}),p&&p.bridget&&p.bridget(t,o),o},m.Item=y,m}var a=t.document,u=t.console,p=t.jQuery,h=function(){},f=Object.prototype.toString,c="object"==typeof HTMLElement?function(t){return t instanceof HTMLElement}:function(t){return t&&"object"==typeof t&&1===t.nodeType&&"string"==typeof t.nodeName},d=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++)if(t[i]===e)return i;return-1};"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","doc-ready/doc-ready","eventEmitter/EventEmitter","get-size/get-size","matches-selector/matches-selector","./item"],s):t.Outlayer=s(t.eventie,t.docReady,t.EventEmitter,t.getSize,t.matchesSelector,t.Outlayer.Item)}(window),function(t){function e(t){function e(){t.Item.apply(this,arguments)}return e.prototype=new t.Item,e.prototype._create=function(){this.id=this.layout.itemGUID++,t.Item.prototype._create.call(this),this.sortData={}},e.prototype.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var o=e[i];this.sortData[i]=o(this.element,this)}}},e}"function"==typeof define&&define.amd?define("isotope/js/item",["outlayer/outlayer"],e):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window),function(t){function e(t,e){function i(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}return function(){function t(t){return function(){return e.prototype[t].apply(this.isotope,arguments)}}for(var o=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout"],n=0,r=o.length;r>n;n++){var s=o[n];i.prototype[s]=t(s)}}(),i.prototype.needsVerticalResizeLayout=function(){var e=t(this.isotope.element),i=this.isotope.size&&e;return i&&e.innerHeight!==this.isotope.size.innerHeight},i.prototype._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},i.prototype.getColumnWidth=function(){this.getSegmentSize("column","Width")},i.prototype.getRowHeight=function(){this.getSegmentSize("row","Height")},i.prototype.getSegmentSize=function(t,e){var i=t+e,o="outer"+e;if(this._getMeasurement(i,o),!this[i]){var n=this.getFirstItemSize();this[i]=n&&n[o]||this.isotope.size["inner"+e]}},i.prototype.getFirstItemSize=function(){var e=this.isotope.filteredItems[0];return e&&e.element&&t(e.element)},i.prototype.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},i.prototype.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},i.modes={},i.create=function(t,e){function o(){i.apply(this,arguments)}return o.prototype=new i,e&&(o.options=e),o.prototype.namespace=t,i.modes[t]=o,o},i}"function"==typeof define&&define.amd?define("isotope/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window),function(t){function e(t,e){var o=t.create("masonry");return o.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var t=this.cols;for(this.colYs=[];t--;)this.colYs.push(0);this.maxY=0},o.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}this.columnWidth+=this.gutter,this.cols=Math.floor((this.containerWidth+this.gutter)/this.columnWidth),this.cols=Math.max(this.cols,1)},o.prototype.getContainerWidth=function(){var t=this.options.isFitWidth?this.element.parentNode:this.element,i=e(t);this.containerWidth=i&&i.innerWidth},o.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,o=e&&1>e?"round":"ceil",n=Math[o](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var r=this._getColGroup(n),s=Math.min.apply(Math,r),a=i(r,s),u={x:this.columnWidth*a,y:s},p=s+t.size.outerHeight,h=this.cols+1-r.length,f=0;h>f;f++)this.colYs[a+f]=p;return u},o.prototype._getColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,o=0;i>o;o++){var n=this.colYs.slice(o,o+t);e[o]=Math.max.apply(Math,n)}return e},o.prototype._manageStamp=function(t){var i=e(t),o=this._getElementOffset(t),n=this.options.isOriginLeft?o.left:o.right,r=n+i.outerWidth,s=Math.floor(n/this.columnWidth);s=Math.max(0,s);var a=Math.floor(r/this.columnWidth);a-=r%this.columnWidth?0:1,a=Math.min(this.cols-1,a);for(var u=(this.options.isOriginTop?o.top:o.bottom)+i.outerHeight,p=s;a>=p;p++)this.colYs[p]=Math.max(u,this.colYs[p])},o.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this.options.isFitWidth&&(t.width=this._getContainerFitWidth()),t},o.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},o.prototype.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!==this.containerWidth},o}var i=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++){var n=t[i];if(n===e)return i}return-1};"function"==typeof define&&define.amd?define("masonry/masonry",["outlayer/outlayer","get-size/get-size"],e):t.Masonry=e(t.Outlayer,t.getSize)}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t,i){var o=t.create("masonry"),n=o.prototype._getElementOffset,r=o.prototype.layout,s=o.prototype._getMeasurement;e(o.prototype,i.prototype),o.prototype._getElementOffset=n,o.prototype.layout=r,o.prototype._getMeasurement=s;var a=o.prototype.measureColumns;o.prototype.measureColumns=function(){this.items=this.isotope.filteredItems,a.call(this)};var u=o.prototype._manageStamp;return o.prototype._manageStamp=function(){this.options.isOriginLeft=this.isotope.options.isOriginLeft,this.options.isOriginTop=this.isotope.options.isOriginTop,u.apply(this,arguments)},o}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/masonry",["../layout-mode","masonry/masonry"],i):i(t.Isotope.LayoutMode,t.Masonry)}(window),function(t){function e(t){var e=t.create("fitRows");return e.prototype._resetLayout=function(){this.x=0,this.y=0,this.maxY=0},e.prototype._getItemLayoutPosition=function(t){t.getSize(),0!==this.x&&t.size.outerWidth+this.x>this.isotope.size.innerWidth&&(this.x=0,this.y=this.maxY);var e={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=t.size.outerWidth,e},e.prototype._getContainerSize=function(){return{height:this.maxY}},e}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/fit-rows",["../layout-mode"],e):e(t.Isotope.LayoutMode)}(window),function(t){function e(t){var e=t.create("vertical",{horizontalAlignment:0});return e.prototype._resetLayout=function(){this.y=0},e.prototype._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},e.prototype._getContainerSize=function(){return{height:this.y}},e}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/vertical",["../layout-mode"],e):e(t.Isotope.LayoutMode)}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){return"[object Array]"===h.call(t)}function o(t){var e=[];if(i(t))e=t;else if(t&&"number"==typeof t.length)for(var o=0,n=t.length;n>o;o++)e.push(t[o]);else e.push(t);return e}function n(t,e){var i=f(e,t);-1!==i&&e.splice(i,1)}function r(t,i,r,u,h){function f(t,e){return function(i,o){for(var n=0,r=t.length;r>n;n++){var s=t[n],a=i.sortData[s],u=o.sortData[s];if(a>u||u>a){var p=void 0!==e[s]?e[s]:e,h=p?1:-1;return(a>u?1:-1)*h}}return 0}}var c=t.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});c.Item=u,c.LayoutMode=h,c.prototype._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),t.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var e in h.modes)this._initLayoutMode(e)},c.prototype.reloadItems=function(){this.itemGUID=0,t.prototype.reloadItems.call(this)},c.prototype._itemize=function(){for(var e=t.prototype._itemize.apply(this,arguments),i=0,o=e.length;o>i;i++){var n=e[i];n.id=this.itemGUID++}return this._updateItemsSortData(e),e},c.prototype._initLayoutMode=function(t){var i=h.modes[t],o=this.options[t]||{};this.options[t]=i.options?e(i.options,o):o,this.modes[t]=new i(this)},c.prototype.layout=function(){return!this._isLayoutInited&&this.options.isInitLayout?(this.arrange(),void 0):(this._layout(),void 0)},c.prototype._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},c.prototype.arrange=function(t){this.option(t),this._getIsInstant(),this.filteredItems=this._filter(this.items),this._sort(),this._layout()},c.prototype._init=c.prototype.arrange,c.prototype._getIsInstant=function(){var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;return this._isInstant=t,t},c.prototype._filter=function(t){function e(){f.reveal(n),f.hide(r)}var i=this.options.filter;i=i||"*";for(var o=[],n=[],r=[],s=this._getFilterTest(i),a=0,u=t.length;u>a;a++){var p=t[a];if(!p.isIgnored){var h=s(p);h&&o.push(p),h&&p.isHidden?n.push(p):h||p.isHidden||r.push(p)}}var f=this;return this._isInstant?this._noTransition(e):e(),o},c.prototype._getFilterTest=function(t){return s&&this.options.isJQueryFiltering?function(e){return s(e.element).is(t)}:"function"==typeof t?function(e){return t(e.element)}:function(e){return r(e.element,t)}},c.prototype.updateSortData=function(t){this._getSorters(),t=o(t);var e=this.getItems(t);e=e.length?e:this.items,this._updateItemsSortData(e)
},c.prototype._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=d(i)}},c.prototype._updateItemsSortData=function(t){for(var e=0,i=t.length;i>e;e++){var o=t[e];o.updateSortData()}};var d=function(){function t(t){if("string"!=typeof t)return t;var i=a(t).split(" "),o=i[0],n=o.match(/^\[(.+)\]$/),r=n&&n[1],s=e(r,o),u=c.sortDataParsers[i[1]];return t=u?function(t){return t&&u(s(t))}:function(t){return t&&s(t)}}function e(t,e){var i;return i=t?function(e){return e.getAttribute(t)}:function(t){var i=t.querySelector(e);return i&&p(i)}}return t}();c.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},c.prototype._sort=function(){var t=this.options.sortBy;if(t){var e=[].concat.apply(t,this.sortHistory),i=f(e,this.options.sortAscending);this.filteredItems.sort(i),t!==this.sortHistory[0]&&this.sortHistory.unshift(t)}},c.prototype._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw Error("No layout mode: "+t);return e.options=this.options[t],e},c.prototype._resetLayout=function(){t.prototype._resetLayout.call(this),this._mode()._resetLayout()},c.prototype._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},c.prototype._manageStamp=function(t){this._mode()._manageStamp(t)},c.prototype._getContainerSize=function(){return this._mode()._getContainerSize()},c.prototype.needsResizeLayout=function(){return this._mode().needsResizeLayout()},c.prototype.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},c.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps();var o=this._filterRevealAdded(e);this.layoutItems(i),this.filteredItems=o.concat(this.filteredItems)}},c.prototype._filterRevealAdded=function(t){var e=this._noTransition(function(){return this._filter(t)});return this.layoutItems(e,!0),this.reveal(e),t},c.prototype.insert=function(t){var e=this.addItems(t);if(e.length){var i,o,n=e.length;for(i=0;n>i;i++)o=e[i],this.element.appendChild(o.element);var r=this._filter(e);for(this._noTransition(function(){this.hide(r)}),i=0;n>i;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;n>i;i++)delete e[i].isLayoutInstant;this.reveal(r)}};var l=c.prototype.remove;return c.prototype.remove=function(t){t=o(t);var e=this.getItems(t);if(l.call(this,t),e&&e.length)for(var i=0,r=e.length;r>i;i++){var s=e[i];n(s,this.filteredItems)}},c.prototype._noTransition=function(t){var e=this.options.transitionDuration;this.options.transitionDuration=0;var i=t.call(this);return this.options.transitionDuration=e,i},c}var s=t.jQuery,a=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},u=document.documentElement,p=u.textContent?function(t){return t.textContent}:function(t){return t.innerText},h=Object.prototype.toString,f=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++)if(t[i]===e)return i;return-1};"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","matches-selector/matches-selector","isotope/js/item","isotope/js/layout-mode","isotope/js/layout-modes/masonry","isotope/js/layout-modes/fit-rows","isotope/js/layout-modes/vertical"],r):t.Isotope=r(t.Outlayer,t.getSize,t.matchesSelector,t.Isotope.Item,t.Isotope.LayoutMode)}(window);
jQuery(function($){

	//region Isotope
	if($.fn.isotope) {

		var $w = $(window);

		$w.load(function () {
			var $isotops = $('.isotope');

			$isotops.each(function () {
				var $el = $(this),
					id = $el.attr('id'),
					mode = $el.data('isotopeMode') || 'fitRows',
					tmt;


				$el.isotope({
					itemSelector: '.isotope-item',
					layoutMode: mode,
					animationOptions: {
						duration: 400,
						queue: false
					}
				});


				$w.resize(function(){
					clearTimeout(tmt);
					tmt = setTimeout(function(){
						$el.isotope('layout');
					}, 150);
				});

				var $menu = $('[data-isotope-nav="' + id + '"]');

				if ($menu.length) {
					$menu.find('a').click(function (e) {
						var $link = $(this);
						if(!$link.hasClass('active')){
							var selector = $link.attr('data-filter');
							$link.parents('ul').eq(0).find('.active').removeClass('active');
							$link.addClass('active');
							$el.isotope({ filter: selector });
						}
						e.preventDefault();
					});
				}

				$w.resize();

			});

		});

	}
	//endregion

});
/*! WOW - v0.1.4 - 2014-02-12
* Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT */(function(){var a,b=[].slice,c=function(a,b){return function(){return a.apply(b,arguments)}};a=function(){var c,d,e,f,g,h,i,j,k;for(e=arguments[0],c=2<=arguments.length?b.call(arguments,1):[],g=e||{},i=0,j=c.length;j>i;i++){f=c[i],k=f||{};for(d in k)h=k[d],"object"==typeof g[d]?g[d]=a(g[d],h):g[d]||(g[d]=h)}return g},this.WOW=function(){function b(b){null==b&&(b={}),this.scrollCallback=c(this.scrollCallback,this),this.scrollHandler=c(this.scrollHandler,this),this.start=c(this.start,this),this.config=a(b,this.defaults),this.scrolled=!0}return b.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0},b.prototype.init=function(){var a;return"interactive"===(a=document.readyState)||"complete"===a?this.start():document.addEventListener("DOMContentLoaded",this.start)},b.prototype.start=function(){var a,b,c,d;if(this.element=window.document.documentElement,this.boxes=this.element.getElementsByClassName(this.config.boxClass),this.boxes.length){for(d=this.boxes,b=0,c=d.length;c>b;b++)a=d[b],this.applyStyle(a,!0);return window.addEventListener("scroll",this.scrollHandler,!1),window.addEventListener("resize",this.scrollHandler,!1),this.interval=setInterval(this.scrollCallback,50)}},b.prototype.stop=function(){return window.removeEventListener("scroll",this.scrollHandler,!1),window.removeEventListener("resize",this.scrollHandler,!1),null!=this.interval?clearInterval(this.interval):void 0},b.prototype.show=function(a){return this.applyStyle(a),a.className=""+a.className+" "+this.config.animateClass},b.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),a.setAttribute("style",this.customStyle(b,d,c,e))},b.prototype.customStyle=function(a,b,c,d){var e;return e=a?"visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;":"visibility: visible;",b&&(e+="-webkit-animation-duration: "+b+"; -moz-animation-duration: "+b+"; animation-duration: "+b+";"),c&&(e+="-webkit-animation-delay: "+c+"; -moz-animation-delay: "+c+"; animation-delay: "+c+";"),d&&(e+="-webkit-animation-iteration-count: "+d+"; -moz-animation-iteration-count: "+d+"; animation-iteration-count: "+d+";"),e},b.prototype.scrollHandler=function(){return this.scrolled=!0},b.prototype.scrollCallback=function(){var a;return this.scrolled&&(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),!this.boxes.length)?this.stop():void 0},b.prototype.offsetTop=function(a){var b;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},b.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+this.element.clientHeight-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},b}()}).call(this);
// SmoothScroll v0.9.9
// Licensed under the terms of the MIT license.
// People involved
// - Balazs Galambosi: maintainer (CHANGELOG.txt)
// - Patrick Brunner (patrickb1991@gmail.com)
// - Michael Herf: ssc_pulse Algorithm

function ssc_init() {
  if (!document.body) return;
  var e = document.body;
  var t = document.documentElement;
  var n = window.innerHeight;
  var r = e.scrollHeight;
  ssc_root = document.compatMode.indexOf("CSS") >= 0 ? t : e;
  ssc_activeElement = e;
  ssc_initdone = true;
  if (top != self) {
    ssc_frame = true
  } else if (r > n && (e.offsetHeight <= n || t.offsetHeight <= n)) {
    ssc_root.style.height = "auto";
    if (ssc_root.offsetHeight <= n) {
      var i = document.createElement("div");
      i.style.clear = "both";
      e.appendChild(i)
    }
  }
  if (!ssc_fixedback) {
    e.style.backgroundAttachment = "scroll";
    t.style.backgroundAttachment = "scroll"
  }
  if (ssc_keyboardsupport) {
    ssc_addEvent("keydown", ssc_keydown)
  }
}

function ssc_scrollArray(e, t, n, r) {
  r || (r = 1e3);
  ssc_directionCheck(t, n);
  ssc_que.push({
    x: t,
    y: n,
    lastX: t < 0 ? .99 : -.99,
    lastY: n < 0 ? .99 : -.99,
    start: +(new Date)
  });
  if (ssc_pending) {
    return
  }
  var i = function() {
    var s = +(new Date);
    var o = 0;
    var u = 0;
    for (var a = 0; a < ssc_que.length; a++) {
      var f = ssc_que[a];
      var l = s - f.start;
      var c = l >= ssc_animtime;
      var h = c ? 1 : l / ssc_animtime;
      if (ssc_pulseAlgorithm) {
        h = ssc_pulse(h)
      }
      var p = f.x * h - f.lastX >> 0;
      var d = f.y * h - f.lastY >> 0;
      o += p;
      u += d;
      f.lastX += p;
      f.lastY += d;
      if (c) {
        ssc_que.splice(a, 1);
        a--
      }
    }
    if (t) {
      var v = e.scrollLeft;
      e.scrollLeft += o;
      if (o && e.scrollLeft === v) {
        t = 0
      }
    }
    if (n) {
      var m = e.scrollTop;
      e.scrollTop += u;
      if (u && e.scrollTop === m) {
        n = 0
      }
    }
    if (!t && !n) {
      ssc_que = []
    }
    if (ssc_que.length) {
      setTimeout(i, r / ssc_framerate + 1)
    } else {
      ssc_pending = false
    }
  };
  setTimeout(i, 0);
  ssc_pending = true
}

function ssc_wheel(e) {
  if (!ssc_initdone) {
    ssc_init()
  }
  var t = e.target;
  var n = ssc_overflowingAncestor(t);
  if (!n || e.defaultPrevented || ssc_isNodeName(ssc_activeElement, "embed") || ssc_isNodeName(t, "embed") && /\.pdf/i.test(t.src)) {
    return true
  }
  var r = e.wheelDeltaX || 0;
  var i = e.wheelDeltaY || 0;
  if (!r && !i) {
    i = e.wheelDelta || 0
  }
  if (Math.abs(r) > 1.2) {
    r *= ssc_stepsize / 120
  }
  if (Math.abs(i) > 1.2) {
    i *= ssc_stepsize / 120
  }
  ssc_scrollArray(n, -r, -i);
  e.preventDefault()
}

function ssc_keydown(e) {
  var t = e.target;
  var n = e.ctrlKey || e.altKey || e.metaKey;
  if (/input|textarea|embed/i.test(t.nodeName) || t.isContentEditable || e.defaultPrevented || n) {
    return true
  }
  if (ssc_isNodeName(t, "button") && e.keyCode === ssc_key.spacebar) {
    return true
  }
  var r, i = 0,
      s = 0;
  var o = ssc_overflowingAncestor(ssc_activeElement);
  var u = o.clientHeight;
  if (o == document.body) {
    u = window.innerHeight
  }
  switch (e.keyCode) {
  case ssc_key.up:
    s = -ssc_arrowscroll;
    break;
  case ssc_key.down:
    s = ssc_arrowscroll;
    break;
  case ssc_key.spacebar:
    r = e.shiftKey ? 1 : -1;
    s = -r * u * .9;
    break;
  case ssc_key.pageup:
    s = -u * .9;
    break;
  case ssc_key.pagedown:
    s = u * .9;
    break;
  case ssc_key.home:
    s = -o.scrollTop;
    break;
  case ssc_key.end:
    var a = o.scrollHeight - o.scrollTop - u;
    s = a > 0 ? a + 10 : 0;
    break;
  case ssc_key.left:
    i = -ssc_arrowscroll;
    break;
  case ssc_key.right:
    i = ssc_arrowscroll;
    break;
  default:
    return true
  }
  ssc_scrollArray(o, i, s);
  e.preventDefault()
}

function ssc_mousedown(e) {
  ssc_activeElement = e.target
}

function ssc_setCache(e, t) {
  for (var n = e.length; n--;) ssc_cache[ssc_uniqueID(e[n])] = t;
  return t
}

function ssc_overflowingAncestor(e) {
  var t = [];
  var n = ssc_root.scrollHeight;
  do {
    var r = ssc_cache[ssc_uniqueID(e)];
    if (r) {
      return ssc_setCache(t, r)
    }
    t.push(e);
    if (n === e.scrollHeight) {
      if (!ssc_frame || ssc_root.clientHeight + 10 < n) {
        return ssc_setCache(t, document.body)
      }
    } else if (e.clientHeight + 10 < e.scrollHeight) {
      overflow = getComputedStyle(e, "").getPropertyValue("overflow");
      if (overflow === "scroll" || overflow === "auto") {
        return ssc_setCache(t, e)
      }
    }
  } while (e = e.parentNode)
}

function ssc_addEvent(e, t, n) {
  window.addEventListener(e, t, n || false)
}

function ssc_removeEvent(e, t, n) {
  window.removeEventListener(e, t, n || false)
}

function ssc_isNodeName(e, t) {
  return e.nodeName.toLowerCase() === t.toLowerCase()
}

function ssc_directionCheck(e, t) {
  e = e > 0 ? 1 : -1;
  t = t > 0 ? 1 : -1;
  if (ssc_direction.x !== e || ssc_direction.y !== t) {
    ssc_direction.x = e;
    ssc_direction.y = t;
    ssc_que = []
  }
}

function ssc_pulse_(e) {
  var t, n, r;
  e = e * ssc_pulseScale;
  if (e < 1) {
    t = e - (1 - Math.exp(-e))
  } else {
    n = Math.exp(-1);
    e -= 1;
    r = 1 - Math.exp(-e);
    t = n + r * (1 - n)
  }
  return t * ssc_pulseNormalize
}

function ssc_pulse(e) {
  if (e >= 1) return 1;
  if (e <= 0) return 0;
  if (ssc_pulseNormalize == 1) {
    ssc_pulseNormalize /= ssc_pulse_(1)
  }
  return ssc_pulse_(e)
}

var ssc_framerate = 150;
var ssc_animtime = 500;
var ssc_stepsize = 150;
var ssc_pulseAlgorithm = true;
var ssc_pulseScale = 6;
var ssc_pulseNormalize = 1;
var ssc_keyboardsupport = true;
var ssc_arrowscroll = 50;
var ssc_frame = false;
var ssc_direction = {
  x: 0,
  y: 0
};

var ssc_initdone = false;
var ssc_fixedback = true;
var ssc_root = document.documentElement;
var ssc_activeElement;
var ssc_key = {
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  spacebar: 32,
  pageup: 33,
  pagedown: 34,
  end: 35,
  home: 36
};

var ssc_que = [];
var ssc_pending = false;
var ssc_cache = {};

setInterval(function() {
  ssc_cache = {}
}, 10 * 1e3);

var ssc_uniqueID = function() {
  var e = 0;
  return function(t) {
    return t.ssc_uniqueID || (t.ssc_uniqueID = e++)
  }
}();

var ischrome = /chrome/.test(navigator.userAgent.toLowerCase());

if (ischrome) {
  ssc_addEvent("mousedown", ssc_mousedown);
  ssc_addEvent("mousewheel", ssc_wheel);
  ssc_addEvent("load", ssc_init)
}
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
/*!
* jquery.counterup.js 1.0
*
* Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
* Released under the GPL v2 License
*
* Date: Nov 26, 2013
*/(function(e){"use strict";e.fn.counterUp=function(t){var n=e.extend({time:400,delay:10},t);return this.each(function(){var t=e(this),r=n,i=function(){var e=[],n=r.time/r.delay,i=t.text(),s=/[0-9]+,[0-9]+/.test(i);i=i.replace(/,/g,"");var o=/^[0-9]+$/.test(i),u=/^[0-9]+\.[0-9]+$/.test(i),a=u?(i.split(".")[1]||[]).length:0;for(var f=n;f>=1;f--){var l=parseInt(i/n*f);u&&(l=parseFloat(i/n*f).toFixed(a));if(s)while(/(\d+)(\d{3})/.test(l.toString()))l=l.toString().replace(/(\d+)(\d{3})/,"$1,$2");e.unshift(l)}t.data("counterup-nums",e);t.text("0");var c=function(){t.text(t.data("counterup-nums").shift());if(t.data("counterup-nums").length)setTimeout(t.data("counterup-func"),r.delay);else{delete t.data("counterup-nums");t.data("counterup-nums",null);t.data("counterup-func",null)}};t.data("counterup-func",c);setTimeout(t.data("counterup-func"),r.delay)};t.waypoint(i,{offset:"100%",triggerOnce:!0})})}})(jQuery);
// Generated by CoffeeScript 1.6.2
/*
jQuery Waypoints - v2.0.3
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(this,function(n,r){var i,o,l,s,f,u,a,c,h,d,p,y,v,w,g,m;i=n(r);c=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;a={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};t.data(u,this.id);a[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||c)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(c&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete a[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;r=n.extend({},n.fn[g].defaults,r);if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=t.data(w))!=null?o:[];i.push(this.id);t.data(w,i)}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=n(t).data(w);if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;if(e==null){e={}}if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=a[i.data(u)];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke(this,"disable")},enable:function(){return d._invoke(this,"enable")},destroy:function(){return d._invoke(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t,e){t.each(function(){var t;t=l.getWaypointsByElement(this);return n.each(t,function(t,n){n[e]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(a,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=a[n(t).data(u)])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=a[n(t).data(u)];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.load(function(){return n[m]("refresh")})})}).call(this);


window.google = window.google || {};
google.maps = google.maps || {};
(function() {
  
  function getScript(src) {
    document.write('<' + 'script src="' + src + '"><' + '/script>');
  }
  
  var modules = google.maps.modules = {};
  google.maps.__gjsload__ = function(name, text) {
    modules[name] = text;
  };
  
  google.maps.Load = function(apiLoad) {
    delete google.maps.Load;
    apiLoad([0.009999999776482582,[null,[["http://khm0.googleapis.com/kh?v=742\u0026hl=en-US\u0026","http://khm1.googleapis.com/kh?v=742\u0026hl=en-US\u0026"],null,null,null,1,"742",["https://khms0.google.com/kh?v=742\u0026hl=en-US\u0026","https://khms1.google.com/kh?v=742\u0026hl=en-US\u0026"]],null,null,null,null,[["http://cbk0.googleapis.com/cbk?","http://cbk1.googleapis.com/cbk?"]],[["http://khm0.googleapis.com/kh?v=109\u0026hl=en-US\u0026","http://khm1.googleapis.com/kh?v=109\u0026hl=en-US\u0026"],null,null,null,null,"109",["https://khms0.google.com/kh?v=109\u0026hl=en-US\u0026","https://khms1.google.com/kh?v=109\u0026hl=en-US\u0026"]],[["http://mt0.googleapis.com/mapslt?hl=en-US\u0026","http://mt1.googleapis.com/mapslt?hl=en-US\u0026"]],null,null,null,[["https://mts0.googleapis.com/mapslt?hl=en-US\u0026","https://mts1.googleapis.com/mapslt?hl=en-US\u0026"]]],["en-US","US",null,0,null,null,"http://maps.gstatic.com/mapfiles/","http://csi.gstatic.com","https://maps.googleapis.com","http://maps.googleapis.com",null,"https://maps.google.com","https://gg.google.com","http://maps.gstatic.com/maps-api-v3/api/images/","https://www.google.com/maps",0,"https://www.google.com"],["http://maps.google.com/maps-api-v3/api/js/30/7","3.30.7"],[1360750651],1,null,null,null,null,null,"",null,null,0,"http://khm.googleapis.com/mz?v=742\u0026",null,"https://earthbuilder.googleapis.com","https://earthbuilder.googleapis.com",null,"http://mt.googleapis.com/maps/vt/icon",[["http://maps.google.com/maps/vt"],["https://maps.google.com/maps/vt"],null,null,null,null,null,null,null,null,null,null,["https://www.google.com/maps/vt"],"/maps/vt",394000000,394],2,500,[null,null,null,null,"http://www.google.com/maps/preview/log204","","http://static.panoramio.com.storage.googleapis.com/photos/",["http://geo0.ggpht.com/cbk","http://geo1.ggpht.com/cbk","http://geo2.ggpht.com/cbk","http://geo3.ggpht.com/cbk"],"https://maps.googleapis.com/maps/api/js/GeoPhotoService.GetMetadata","https://maps.googleapis.com/maps/api/js/GeoPhotoService.SingleImageSearch",["https://lh3.ggpht.com/","https://lh4.ggpht.com/","https://lh5.ggpht.com/","https://lh6.ggpht.com/"]],["https://www.google.com/maps/api/js/master?pb=!1m2!1u30!2s7!2sen-US!3sUS!4s30/7","https://www.google.com/maps/api/js/widget?pb=!1m2!1u30!2s7!2sen-US"],null,0,null,"/maps/api/js/ApplicationService.GetEntityDetails",0,null,null,[null,null,null,null,null,null,null,null,null,[0,0]],null,[],["30.7"]], loadScriptTime);
  };
  var loadScriptTime = (new Date).getTime();
})();
// inlined
(function(_){var va,Ca,Aa,Da,Fa,Ga,Sa,Ta,Ya,bb,ib,ob,qb,tb,vb,Ab,zb,Bb,Cb,Tb,Vb,Zb,gc,ic,jc,lc,pc,sc,xc,Bc,Pc,Qc,Rc,Sc,Uc,Vc,Zc,bd,Yc,fd,md,rd,ud,wd,yd,Ad,Bd,Ld,Nd,Md,Td,Vd,Xd,be,ce,ee,ge,ie,de,fe,ke,me,ne,oe,Ge,He,Ie,Ke,Le,Ne,Oe,Se,Te,Ue,Ve,Ye,$e,af,mf,nf,of,pf,qf,rf,tf,uf,vf,Af,Ff,Hf,Of,Pf,Qf,dg,gg,hg,ig,jg,kg,lg,mg,ng,pg,qg,rg,sg,zg,xg,Ag,Bg,Dg,Gg,Ig,Hg,Kg,Og,Rg,Vg,$g,ch,dh,eh,fh,gh,ih,ya,xa,Pa,Qa;_.aa="ERROR";_.ba="INVALID_REQUEST";_.ca="MAX_DIMENSIONS_EXCEEDED";_.da="MAX_ELEMENTS_EXCEEDED";_.fa="MAX_WAYPOINTS_EXCEEDED";
_.ha="NOT_FOUND";_.ia="OK";_.ja="OVER_QUERY_LIMIT";_.ka="REQUEST_DENIED";_.la="UNKNOWN_ERROR";_.ma="ZERO_RESULTS";_.na=function(){return function(a){return a}};_.oa=function(){return function(){}};_.pa=function(a){return function(b){this[a]=b}};_.qa=function(a){return function(){return this[a]}};_.ra=function(a){return function(){return a}};_.ua=function(a){return function(){return _.sa[a].apply(this,arguments)}};va=function(){va=_.oa();_.wa.Symbol||(_.wa.Symbol=xa)};
Ca=function(){va();var a=_.wa.Symbol.iterator;a||(a=_.wa.Symbol.iterator=_.wa.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ya(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return Aa(this)}});Ca=_.oa()};Aa=function(a){var b=0;return Da(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})};Da=function(a){Ca();a={next:a};a[_.wa.Symbol.iterator]=function(){return this};return a};_.Ea=function(a){Ca();var b=a[window.Symbol.iterator];return b?b.call(a):Aa(a)};
Fa=function(a,b){if(b){var c=_.wa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ya(c,a,{configurable:!0,writable:!0,value:b})}};Ga=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};_.m=function(a){return void 0!==a};_.Ha=function(a){return"string"==typeof a};_.Ia=function(a){return"number"==typeof a};_.Ja=_.oa();
_.Ka=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};_.La=function(a){return"array"==_.Ka(a)};_.Ma=function(a){var b=_.Ka(a);return"array"==b||"object"==b&&"number"==typeof a.length};_.Na=function(a){return"function"==_.Ka(a)};_.Oa=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};_.Ra=function(a){return a[Pa]||(a[Pa]=++Qa)};Sa=function(a,b,c){return a.call.apply(a.bind,arguments)};
Ta=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};_.p=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?_.p=Sa:_.p=Ta;return _.p.apply(null,arguments)};_.Ua=function(){return+new Date};
_.t=function(a,b){function c(){}c.prototype=b.prototype;a.ob=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Le=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];b.prototype[c].apply(a,d)}};_.Va=function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};_.Xa=function(){return-1!=_.Wa.toLowerCase().indexOf("webkit")};
_.Za=function(a,b){var c=0;a=_.Va(String(a)).split(".");b=_.Va(String(b)).split(".");for(var d=Math.max(a.length,b.length),e=0;0==c&&e<d;e++){var f=a[e]||"",g=b[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==f[0].length&&0==g[0].length)break;c=Ya(0==f[1].length?0:(0,window.parseInt)(f[1],10),0==g[1].length?0:(0,window.parseInt)(g[1],10))||Ya(0==f[2].length,0==g[2].length)||Ya(f[2],g[2]);f=f[3];g=g[3]}while(0==c)}return c};
Ya=function(a,b){return a<b?-1:a>b?1:0};_.ab=function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(_.Ha(a))return _.Ha(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};_.u=function(a,b,c){for(var d=a.length,e=_.Ha(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};bb=function(a,b){for(var c=a.length,d=_.Ha(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return e;return-1};
_.db=function(a,b){b=_.ab(a,b);var c;(c=0<=b)&&_.cb(a,b);return c};_.cb=function(a,b){Array.prototype.splice.call(a,b,1)};_.eb=function(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)};_.fb=function(a){return-1!=_.Wa.indexOf(a)};_.gb=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};_.hb=function(){return _.fb("Trident")||_.fb("MSIE")};_.jb=function(){return _.fb("Safari")&&!(ib()||_.fb("Coast")||_.fb("Opera")||_.fb("Edge")||_.fb("Silk")||_.fb("Android"))};
ib=function(){return(_.fb("Chrome")||_.fb("CriOS"))&&!_.fb("Edge")};_.kb=function(){return _.fb("Android")&&!(ib()||_.fb("Firefox")||_.fb("Opera")||_.fb("Silk"))};_.lb=function(){return _.fb("iPhone")&&!_.fb("iPod")&&!_.fb("iPad")};_.mb=function(a){_.mb[" "](a);return a};ob=function(a,b){var c=nb;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};qb=function(){var a=_.pb.document;return a?a.documentMode:void 0};_.sb=function(a){return ob(a,function(){return 0<=_.Za(_.rb,a)})};
tb=function(a,b,c){this.l=c;this.j=a;this.m=b;this.f=0;this.b=null};_.ub=_.na();vb=function(a){_.pb.setTimeout(function(){throw a;},0)};Ab=function(){var a=_.wb.f;a=xb(a);!_.Na(_.pb.setImmediate)||_.pb.Window&&_.pb.Window.prototype&&!_.fb("Edge")&&_.pb.Window.prototype.setImmediate==_.pb.setImmediate?(yb||(yb=zb()),yb(a)):_.pb.setImmediate(a)};
zb=function(){var a=_.pb.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!_.fb("Presto")&&(a=function(){var a=window.document.createElement("IFRAME");a.style.display="none";a.src="";window.document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=(0,_.p)(function(a){if(("*"==
d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!_.hb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(_.m(c.next)){c=c.next;var a=c.zg;c.zg=null;a()}};return function(a){d.next={zg:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof window.document&&"onreadystatechange"in window.document.createElement("SCRIPT")?function(a){var b=window.document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};window.document.documentElement.appendChild(b)}:function(a){_.pb.setTimeout(a,0)}};Bb=function(){this.f=this.b=null};Cb=function(){this.next=this.b=this.Dc=null};_.wb=function(a,b){_.wb.b||_.wb.m();_.wb.j||(_.wb.b(),_.wb.j=!0);_.wb.l.add(a,b)};_.Db=function(a){return a*Math.PI/180};_.Eb=function(a){return 180*a/Math.PI};_.w=function(a){return a?a.length:0};
_.Gb=function(a,b){_.Fb(b,function(c){a[c]=b[c]})};_.Hb=function(a){for(var b in a)return!1;return!0};_.Ib=function(a,b,c){null!=b&&(a=Math.max(a,b));null!=c&&(a=Math.min(a,c));return a};_.Jb=function(a,b,c){c-=b;return((a-b)%c+c)%c+b};_.Kb=function(a,b,c){return Math.abs(a-b)<=(c||1E-9)};_.Lb=function(a,b){for(var c=[],d=_.w(a),e=0;e<d;++e)c.push(b(a[e],e));return c};_.Nb=function(a,b){for(var c=_.Mb(void 0,_.w(b)),d=_.Mb(void 0,0);d<c;++d)a.push(b[d])};_.x=function(a){return"number"==typeof a};
_.Ob=function(a){return"object"==typeof a};_.Mb=function(a,b){return null==a?b:a};_.Pb=function(a){return"string"==typeof a};_.Qb=function(a){return a===!!a};_.Fb=function(a,b){for(var c in a)b(c,a[c])};_.Sb=function(a){return function(){var b=this,c=arguments;_.Rb(function(){a.apply(b,c)})}};_.Rb=function(a){return window.setTimeout(a,0)};Tb=function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]};_.Ub=function(a){window.console&&window.console.error&&window.console.error(a)};
Vb=function(a){this.message=a;this.name="InvalidValueError";this.stack=Error().stack};_.Wb=function(a,b){var c="";if(null!=b){if(!(b instanceof Vb))return b;c=": "+b.message}return new Vb(a+c)};_.Xb=function(a){if(!(a instanceof Vb))throw a;_.Ub(a.name+": "+a.message)};
_.Yb=function(a,b){var c=c?c+": ":"";return function(d){if(!d||!_.Ob(d))throw _.Wb(c+"not an Object");var e={},f;for(f in d)if(e[f]=d[f],!b&&!a[f])throw _.Wb(c+"unknown property "+f);for(f in a)try{var g=a[f](e[f]);if(_.m(g)||Object.prototype.hasOwnProperty.call(d,f))e[f]=a[f](e[f])}catch(h){throw _.Wb(c+"in property "+f,h);}return e}};Zb=function(a){try{return!!a.cloneNode}catch(b){return!1}};
_.$b=function(a,b,c){return c?function(c){if(c instanceof a)return c;try{return new a(c)}catch(e){throw _.Wb("when calling new "+b,e);}}:function(c){if(c instanceof a)return c;throw _.Wb("not an instance of "+b);}};_.ac=function(a){return function(b){for(var c in a)if(a[c]==b)return b;throw _.Wb(b);}};_.bc=function(a){return function(b){if(!_.La(b))throw _.Wb("not an Array");return _.Lb(b,function(b,d){try{return a(b)}catch(e){throw _.Wb("at index "+d,e);}})}};
_.cc=function(a,b){return function(c){if(a(c))return c;throw _.Wb(b||""+c);}};_.dc=function(a){return function(b){for(var c=[],d=0,e=a.length;d<e;++d){var f=a[d];try{(f.Rf||f)(b)}catch(g){if(!(g instanceof Vb))throw g;c.push(g.message);continue}return(f.then||f)(b)}throw _.Wb(c.join("; and "));}};_.ec=function(a,b){return function(c){return b(a(c))}};_.fc=function(a){return function(b){return null==b?b:a(b)}};
gc=function(a){return function(b){if(b&&null!=b[a])return b;throw _.Wb("no "+a+" property");}};_.z=function(a,b){this.x=a;this.y=b};ic=function(a){if(a instanceof _.z)return a;try{_.Yb({x:_.hc,y:_.hc},!0)(a)}catch(b){throw _.Wb("not a Point",b);}return new _.z(a.x,a.y)};_.D=function(a,b,c,d){this.width=a;this.height=b;this.f=c||"px";this.b=d||"px"};jc=function(a){if(a instanceof _.D)return a;try{_.Yb({height:_.hc,width:_.hc},!0)(a)}catch(b){throw _.Wb("not a Size",b);}return new _.D(a.width,a.height)};
_.kc=function(a,b){this.b=a;this.f=b};lc=function(a,b,c){var d=Math.pow(2,Math.round(Math.log(a)/Math.LN2))/256;this.b=Math.round(a/d)*d;a=Math.cos(b*Math.PI/180);b=Math.cos(c*Math.PI/180);c=Math.sin(c*Math.PI/180);this.m11=this.b*b;this.m12=this.b*c;this.m21=-this.b*a*c;this.m22=this.b*a*b;this.f=this.m11*this.m22-this.m12*this.m21};pc=function(a,b){return new _.kc((a.m22*b.Na-a.m12*b.Oa)/a.f,(-a.m21*b.Na+a.m11*b.Oa)/a.f)};
_.qc=function(a){this.J=this.I=window.Infinity;this.L=this.K=-window.Infinity;_.u(a||[],this.extend,this)};_.rc=function(a,b,c,d){var e=new _.qc;e.I=a;e.J=b;e.K=c;e.L=d;return e};sc=function(a,b){-180==a&&180!=b&&(a=180);-180==b&&180!=a&&(b=180);this.b=a;this.f=b};_.tc=function(a){return a.b>a.f};_.uc=function(a,b){var c=b-a;return 0<=c?c:b+180-(a-180)};_.vc=function(a){return a.isEmpty()?0:_.tc(a)?360-(a.b-a.f):a.f-a.b};xc=function(a,b){this.b=a;this.f=b};
_.F=function(a,b,c){if(a&&(void 0!==a.lat||void 0!==a.lng))try{yc(a),b=a.lng,a=a.lat,c=!1}catch(d){_.Xb(d)}a-=0;b-=0;c||(a=_.Ib(a,-90,90),180!=b&&(b=_.Jb(b,-180,180)));this.lat=function(){return a};this.lng=function(){return b}};_.zc=function(a){return _.Db(a.lat())};_.Ac=function(a){return _.Db(a.lng())};Bc=function(a,b){b=Math.pow(10,b);return Math.round(a*b)/b};
_.Cc=function(a){try{if(a instanceof _.F)return a;a=yc(a);return new _.F(a.lat,a.lng)}catch(b){throw _.Wb("not a LatLng or LatLngLiteral",b);}};_.Dc=function(a,b){a=a&&_.Cc(a);b=b&&_.Cc(b);if(a){b=b||a;var c=_.Ib(a.lat(),-90,90),d=_.Ib(b.lat(),-90,90);this.f=new xc(c,d);a=a.lng();b=b.lng();360<=b-a?this.b=new sc(-180,180):(a=_.Jb(a,-180,180),b=_.Jb(b,-180,180),this.b=new sc(a,b))}else this.f=new xc(1,-1),this.b=new sc(180,-180)};_.Ec=function(a,b,c,d){return new _.Dc(new _.F(a,b,!0),new _.F(c,d,!0))};
_.Kc=function(a){if(a instanceof _.Dc)return a;try{return a=Fc(a),_.Ec(a.south,a.west,a.north,a.east)}catch(b){throw _.Wb("not a LatLngBounds or LatLngBoundsLiteral",b);}};_.Nc=function(a){a=a||window.event;_.Lc(a);_.Mc(a)};_.Lc=function(a){a.cancelBubble=!0;a.stopPropagation&&a.stopPropagation()};_.Mc=function(a){a.preventDefault&&_.m(a.defaultPrevented)?a.preventDefault():a.returnValue=!1};_.Oc=function(a){a.handled=!0;void 0===a.bubbles&&(a.returnValue="handled")};
Pc=function(a,b){a.__e3_||(a.__e3_={});a=a.__e3_;a[b]||(a[b]={});return a[b]};Qc=function(a,b){var c=a.__e3_||{};if(b)a=c[b]||{};else for(b in a={},c)_.Gb(a,c[b]);return a};Rc=function(a,b){return function(c){return b.call(a,c,this)}};Sc=function(a,b,c){return function(d){var e=[b,a];_.Nb(e,arguments);_.G.trigger.apply(this,e);c&&_.Oc.apply(null,arguments)}};Uc=function(a,b,c,d){this.f=a;this.j=b;this.b=c;this.l=d;this.id=++Tc;Pc(a,b)[this.id]=this};
Vc=function(a){return function(b){b||(b=window.event);if(b&&!b.target)try{b.target=b.srcElement}catch(d){}var c=a.b.apply(a.f,[b]);return b&&"click"==b.type&&(b=b.srcElement)&&"A"==b.tagName&&"javascript:void(0)"==b.href?!1:c}};_.Wc=function(a,b){this.f=a||0;this.j=b||0};_.Xc=function(a){return""+(_.Oa(a)?_.Ra(a):a)};_.K=_.oa();Zc=function(a,b){var c=b+"_changed";if(a[c])a[c]();else a.changed(b);c=Yc(a,b);for(var d in c){var e=c[d];Zc(e.Fc,e.nb)}_.G.trigger(a,b.toLowerCase()+"_changed")};
_.ad=function(a){return $c[a]||($c[a]=a.substr(0,1).toUpperCase()+a.substr(1))};bd=function(a){a.gm_accessors_||(a.gm_accessors_={});return a.gm_accessors_};Yc=function(a,b){a.gm_bindings_||(a.gm_bindings_={});a.gm_bindings_.hasOwnProperty(b)||(a.gm_bindings_[b]={});return a.gm_bindings_[b]};_.cd=function(a){return function(){return this.get(a)}};_.dd=function(a,b){return b?function(c){try{this.set(a,b(c))}catch(d){_.Xb(_.Wb("set"+_.ad(a),d))}}:function(b){this.set(a,b)}};
_.ed=function(a,b){_.Fb(b,function(b,d){var c=_.cd(b);a["get"+_.ad(b)]=c;d&&(d=_.dd(b,d),a["set"+_.ad(b)]=d)})};_.gd=function(a){this.b=a||[];fd(this)};fd=function(a){a.set("length",a.b.length)};_.hd=function(a){this.j=a||_.Xc;this.f={}};_.id=function(a,b){var c=a.f,d=a.j(b);c[d]||(c[d]=b,_.G.trigger(a,"insert",b),a.b&&a.b(b))};_.jd=_.pa("b");_.kd=function(a,b,c){this.heading=a;this.pitch=_.Ib(b,-90,90);this.zoom=Math.max(0,c)};_.ld=function(){this.__gm=new _.K;this.l=null};
md=function(a){this.P=[];this.b=a&&a.ld||_.Ja;this.f=a&&a.md||_.Ja};_.qd=function(a,b,c,d){function e(){_.u(f,function(a){b.call(c||null,function(b){if(a.once){if(a.once.xg)return;a.once.xg=!0;_.db(g.P,a);g.P.length||g.b()}a.Dc.call(a.context,b)})})}var f=a.P.slice(0),g=a;d&&d.sync?e():nd(e)};rd=function(a,b){return function(c){return c.Dc==a&&c.context==(b||null)}};_.sd=function(){this.P=new md({ld:(0,_.p)(this.ld,this),md:(0,_.p)(this.md,this)})};_.td=function(a){_.sd.call(this);this.m=!!a};
_.vd=function(a){return new ud(a,void 0)};ud=function(a,b){_.td.call(this,b);this.b=a};wd=_.oa();_.xd=function(a,b){a[b]||(a[b]=[]);return a[b]};_.zd=function(a,b){if(null==a||null==b)return null==a==(null==b);if(a.constructor!=Array&&a.constructor!=Object)throw Error("Invalid object type passed into jsproto.areObjectsEqual()");if(a===b)return!0;if(a.constructor!=b.constructor)return!1;for(var c in a)if(!(c in b&&yd(a[c],b[c])))return!1;for(var d in b)if(!(d in a))return!1;return!0};
yd=function(a,b){if(a===b||!(!0!==a&&1!==a||!0!==b&&1!==b)||!(!1!==a&&0!==a||!1!==b&&0!==b))return!0;if(a instanceof Object&&b instanceof Object){if(!_.zd(a,b))return!1}else return!1;return!0};Ad=function(a,b,c,d){this.type=a;this.label=b;this.Qk=c;this.Ac=d};Bd=function(a){switch(a){case "d":case "f":case "i":case "j":case "u":case "v":case "x":case "y":case "g":case "h":case "n":case "o":case "e":return 0;case "s":case "z":case "B":return"";case "b":return!1;default:return null}};
_.Cd=function(a,b,c){return new Ad(a,1,_.m(b)?b:Bd(a),c)};_.Fd=function(a,b,c){return new Ad(a,2,_.m(b)?b:Bd(a),c)};_.Gd=function(a){return _.Cd("i",a)};_.Hd=function(a){return _.Cd("v",a)};_.Id=function(a){return _.Cd("b",a)};_.Jd=function(a){return _.Cd("e",a)};_.L=function(a,b){return _.Cd("m",a,b)};_.Kd=function(a){return new Ad("m",3,void 0,a)};Ld=_.oa();
Nd=function(a,b,c){for(var d=1;d<b.A.length;++d){var e=b.A[d],f=a[d+b.b];if(e&&null!=f)if(3==e.label)for(var g=0;g<f.length;++g)Md(f[g],d,e,c);else Md(f,d,e,c)}};Md=function(a,b,c,d){if("m"==c.type){var e=d.length;Nd(a,c.Ac,d);d.splice(e,0,[b,"m",d.length-e].join(""))}else"b"==c.type&&(a=a?"1":"0"),a=[b,c.type,(0,window.encodeURIComponent)(a)].join(""),d.push(a)};_.M=function(a){this.data=a||[]};_.Od=function(a,b,c){a=a.data[b];return null!=a?a:c};_.N=function(a,b,c){return _.Od(a,b,c||0)};
_.O=function(a,b,c){return _.Od(a,b,c||"")};_.P=function(a,b){var c=a.data[b];c||(c=a.data[b]=[]);return c};_.Pd=function(a,b){return _.xd(a.data,b)};_.Qd=function(a,b,c){return _.Pd(a,b)[c]};_.Rd=function(a,b){var c=[];_.Pd(a,b).push(c);return c};_.Sd=function(a,b){return a.data[b]?a.data[b].length:0};Td=_.oa();_.Ud=_.pa("__gm");Vd=_.oa();_.Wd=function(a){this.b=_.Cc(a)};
Xd=function(a){if(a instanceof Vd)return a;try{return new _.Wd(_.Cc(a))}catch(b){}throw _.Wb("not a Geometry or LatLng or LatLngLiteral object");};_.$d=function(a,b){if(a)return function(){--a||b()};b();return _.Ja};_.ae=function(a,b,c){var d=a.getElementsByTagName("head")[0];a=a.createElement("script");a.type="text/javascript";a.charset="UTF-8";a.src=b;c&&(a.onerror=c);d.appendChild(a);return a};
be=function(a){for(var b="",c=0,d=arguments.length;c<d;++c){var e=arguments[c];e.length&&"/"==e[0]?b=e:(b&&"/"!=b[b.length-1]&&(b+="/"),b+=e)}return b};ce=function(a){this.j=window.document;this.b={};this.f=a};ee=function(){this.l={};this.f={};this.m={};this.b={};this.j=new de};ge=function(a,b){a.l[b]||(a.l[b]=!0,fe(a.j,function(c){for(var d=c.b[b],e=d?d.length:0,f=0;f<e;++f){var g=d[f];a.b[g]||ge(a,g)}c=c.j;c.b[b]||_.ae(c.j,be(c.f,b)+".js")}))};
ie=function(a,b){var c=he;this.j=a;this.b=c;a={};for(var d in c)for(var e=c[d],f=0,g=e.length;f<g;++f){var h=e[f];a[h]||(a[h]=[]);a[h].push(d)}this.l=a;this.f=b};de=function(){this.b=[]};fe=function(a,b){a.f?b(a.f):a.b.push(b)};_.Q=function(a,b,c){var d=ee.b();a=""+a;d.b[a]?b(d.b[a]):((d.f[a]=d.f[a]||[]).push(b),c||ge(d,a))};_.je=function(a,b){ee.b().b[""+a]=b};ke=function(a,b,c){var d=[],e=_.$d(a.length,function(){b.apply(null,d)});_.u(a,function(a,b){_.Q(a,function(a){d[b]=a;e()},c)})};
_.le=function(a){a=a||{};this.j=a.id;this.b=null;try{this.b=a.geometry?Xd(a.geometry):null}catch(b){_.Xb(b)}this.f=a.properties||{}};me=function(){this.b={};this.j={};this.f={}};ne=function(){this.b={}};oe=function(a){this.b=new ne;var b=this;_.G.addListenerOnce(a,"addfeature",function(){_.Q("data",function(c){c.b(b,a,b.b)})})};_.qe=function(a){this.b=[];try{this.b=pe(a)}catch(b){_.Xb(b)}};_.se=function(a){this.b=(0,_.re)(a)};_.te=function(a){this.b=(0,_.re)(a)};_.ve=function(a){this.b=ue(a)};
_.we=function(a){this.b=(0,_.re)(a)};_.Be=function(a){this.b=xe(a)};_.De=function(a){this.b=Ce(a)};
_.Ee=function(a,b,c){function d(a){if(!a)throw _.Wb("not a Feature");if("Feature"!=a.type)throw _.Wb('type != "Feature"');var b=a.geometry;try{b=null==b?null:e(b)}catch(H){throw _.Wb('in property "geometry"',H);}var d=a.properties||{};if(!_.Ob(d))throw _.Wb("properties is not an Object");var f=c.idPropertyName;a=f?d[f]:a.id;if(null!=a&&!_.x(a)&&!_.Pb(a))throw _.Wb((f||"id")+" is not a string or number");return{id:a,geometry:b,properties:d}}function e(a){if(null==a)throw _.Wb("is null");var b=(a.type+
"").toLowerCase(),c=a.coordinates;try{switch(b){case "point":return new _.Wd(h(c));case "multipoint":return new _.we(n(c));case "linestring":return g(c);case "multilinestring":return new _.ve(q(c));case "polygon":return f(c);case "multipolygon":return new _.De(v(c))}}catch(I){throw _.Wb('in property "coordinates"',I);}if("geometrycollection"==b)try{return new _.qe(C(a.geometries))}catch(I){throw _.Wb('in property "geometries"',I);}throw _.Wb("invalid type");}function f(a){return new _.Be(r(a))}function g(a){return new _.se(n(a))}
function h(a){a=l(a);return _.Cc({lat:a[1],lng:a[0]})}if(!b)return[];c=c||{};var l=_.bc(_.hc),n=_.bc(h),q=_.bc(g),r=_.bc(function(a){a=n(a);if(!a.length)throw _.Wb("contains no elements");if(!a[0].X(a[a.length-1]))throw _.Wb("first and last positions are not equal");return new _.te(a.slice(0,-1))}),v=_.bc(f),C=_.bc(e),A=_.bc(d);if("FeatureCollection"==b.type){b=b.features;try{return _.Lb(A(b),function(b){return a.add(b)})}catch(y){throw _.Wb('in property "features"',y);}}if("Feature"==b.type)return[a.add(d(b))];
throw _.Wb("not a Feature or FeatureCollection");};Ge=function(a){var b=this;a=a||{};this.setValues(a);this.b=new me;_.G.forward(this.b,"addfeature",this);_.G.forward(this.b,"removefeature",this);_.G.forward(this.b,"setgeometry",this);_.G.forward(this.b,"setproperty",this);_.G.forward(this.b,"removeproperty",this);this.f=new oe(this.b);this.f.bindTo("map",this);this.f.bindTo("style",this);_.u(_.Fe,function(a){_.G.forward(b.f,a,b)});this.j=!1};He=function(a){a.j||(a.j=!0,_.Q("drawing_impl",function(b){b.Nl(a)}))};
Ie=function(a){if(!a)return null;if(_.Ha(a)){var b=window.document.createElement("div");b.style.overflow="auto";b.innerHTML=a}else a.nodeType==window.Node.TEXT_NODE?(b=window.document.createElement("div"),b.appendChild(a)):b=a;return b};Ke=function(a){var b=Je,c=ee.b().j;a=c.f=new ie(new ce(a),b);b=0;for(var d=c.b.length;b<d;++b)c.b[b](a);c.b.length=0};Le=function(a){a=a||{};a.clickable=_.Mb(a.clickable,!0);a.visible=_.Mb(a.visible,!0);this.setValues(a);_.Q("marker",_.Ja)};
_.Me=function(a){this.__gm={set:null,Kd:null,Qb:{map:null,de:null}};Le.call(this,a)};Ne=function(a,b){this.b=a;this.f=b;a.addListener("map_changed",(0,_.p)(this.Jm,this));this.bindTo("map",a);this.bindTo("disableAutoPan",a);this.bindTo("maxWidth",a);this.bindTo("position",a);this.bindTo("zIndex",a);this.bindTo("internalAnchor",a,"anchor");this.bindTo("internalContent",a,"content");this.bindTo("internalPixelOffset",a,"pixelOffset")};Oe=function(a,b,c,d){c?a.bindTo(b,c,d):(a.unbind(b),a.set(b,void 0))};
_.Pe=function(a){function b(){e||(e=!0,_.Q("infowindow",function(a){a.nk(d)}))}window.setTimeout(function(){_.Q("infowindow",_.Ja)},100);a=a||{};var c=!!a.b;delete a.b;var d=new Ne(this,c),e=!1;_.G.addListenerOnce(this,"anchor_changed",b);_.G.addListenerOnce(this,"map_changed",b);this.setValues(a)};_.Re=function(a){_.Qe&&a&&_.Qe.push(a)};Se=function(a){this.setValues(a)};Te=_.oa();Ue=_.oa();Ve=_.oa();_.We=function(){_.Q("geocoder",_.Ja)};
_.Xe=function(a,b,c){this.H=null;this.set("url",a);this.set("bounds",_.fc(_.Kc)(b));this.setValues(c)};Ye=function(a,b){_.Pb(a)?(this.set("url",a),this.setValues(b)):this.setValues(a)};_.Ze=function(){var a=this;_.Q("layers",function(b){b.b(a)})};$e=function(a){this.setValues(a);var b=this;_.Q("layers",function(a){a.f(b)})};af=function(){var a=this;_.Q("layers",function(b){b.j(a)})};_.cf=function(){this.b="";this.f=_.bf};_.df=function(a){var b=new _.cf;b.b=a;return b};
_.gf=function(){this.af="";this.Hj=_.ff;this.b=null};_.hf=function(a,b){var c=new _.gf;c.af=a;c.b=b;return c};_.jf=function(a,b){b.parentNode&&b.parentNode.insertBefore(a,b.nextSibling)};_.kf=function(a){a&&a.parentNode&&a.parentNode.removeChild(a)};_.lf=_.oa();mf=function(a,b,c,d,e){this.b=!!b;this.node=null;this.f=0;this.j=!1;this.l=!c;a&&this.setPosition(a,d);this.depth=void 0!=e?e:this.f||0;this.b&&(this.depth*=-1)};nf=function(a,b,c,d){mf.call(this,a,b,c,null,d)};
of=function(a){this.data=a||[]};pf=function(a){this.data=a||[]};qf=function(a){this.data=a||[]};rf=function(a){this.data=a||[]};_.sf=function(a){this.data=a||[]};tf=function(a){this.data=a||[]};uf=function(a){this.data=a||[]};vf=function(a){this.data=a||[]};_.wf=function(a){return _.O(a,0)};_.xf=function(a){return _.O(a,1)};_.yf=function(){return _.O(_.R,16)};_.zf=function(a){return new rf(a.data[2])};
Af=function(a,b,c,d,e){var f=_.O(_.zf(_.R),7);this.b=a;this.f=d;this.j=_.m(e)?e:_.Ua();var g=f+"/csi?v=2&s=mapsapi3&v3v="+_.O(new vf(_.R.data[36]),0)+"&action="+a;_.gb(c,function(a,b){g+="&"+(0,window.encodeURIComponent)(b)+"="+(0,window.encodeURIComponent)(a)});b&&(g+="&e="+b);this.l=g};_.Cf=function(a,b){var c={};c[b]=void 0;_.Bf(a,c)};
_.Bf=function(a,b){var c="";_.gb(b,function(a,b){var d=(null!=a?a:_.Ua())-this.j;c&&(c+=",");c+=b+"."+Math.round(d);null==a&&window.performance&&window.performance.mark&&window.performance.mark("mapsapi:"+this.b+":"+b)},a);b=a.l+"&rt="+c;a.f.createElement("img").src=b;(a=_.pb.__gm_captureCSI)&&a(b)};
_.Df=function(a,b){b=b||{};var c=b.cn||{},d=_.Pd(_.R,12).join(",");d&&(c.libraries=d);d=_.O(_.R,6);var e=new of(_.R.data[33]),f=[];d&&f.push(d);_.u(e.data,function(a,b){a&&_.u(a,function(a,c){null!=a&&f.push(b+1+"_"+(c+1)+"_"+a)})});b.dl&&(f=f.concat(b.dl));return new Af(a,f.join(","),c,b.document||window.document,b.startTime)};Ff=function(){this.f=_.Df("apiboot2",{startTime:_.Ef});_.Cf(this.f,"main");this.b=!1};Hf=function(){var a=Gf;a.b||(a.b=!0,_.Cf(a.f,"firstmap"))};
_.If=function(a,b,c){this.size=a;this.b=b;this.heading=c;this.f=Math.cos(this.b/180*Math.PI)};_.Jf=function(){this.b=new _.z(128,128);this.j=256/360;this.l=256/(2*Math.PI);this.f=!0};_.Kf=function(a,b,c){if(a=a.fromLatLngToPoint(b))c=Math.pow(2,c),a.x*=c,a.y*=c;return a};
_.Lf=function(a,b){var c=a.lat()+_.Eb(b);90<c&&(c=90);var d=a.lat()-_.Eb(b);-90>d&&(d=-90);b=Math.sin(b);var e=Math.cos(_.Db(a.lat()));if(90==c||-90==d||1E-6>e)return new _.Dc(new _.F(d,-180),new _.F(c,180));b=_.Eb(Math.asin(b/e));return new _.Dc(new _.F(d,a.lng()-b),new _.F(c,a.lng()+b))};
Of=function(a,b){_.ld.call(this);_.Re(a);this.__gm=new _.K;this.f=null;b&&b.client&&(this.f=_.Mf[b.client]||null);var c=this.controls=[];_.Fb(_.Nf,function(a,b){c[b]=new _.gd});this.j=!0;this.b=a;this.m=!1;this.__gm.fa=b&&b.fa||new _.hd;this.set("standAlone",!0);this.setPov(new _.kd(0,0,1));b&&b.od&&!_.x(b.od.zoom)&&(b.od.zoom=_.x(b.zoom)?b.zoom:1);this.setValues(b);void 0==this.getVisible()&&this.setVisible(!0);_.G.addListenerOnce(this,"pano_changed",_.Sb(function(){_.Q("marker",(0,_.p)(function(a){a.b(this.__gm.fa,
this)},this))}))};Pf=function(){this.l=[];this.j=this.b=this.f=null};Qf=function(a,b,c){this.R=b;this.Rn=null;this.b=_.vd(new _.jd([]));this.B=new _.hd;new _.gd;this.D=new _.hd;this.F=new _.hd;this.l=new _.hd;var d=this.fa=new _.hd;d.b=function(){delete d.b;_.Q("marker",_.Sb(function(b){b.b(d,a)}))};this.j=new Of(c,{visible:!1,enableCloseButton:!0,fa:d});this.j.bindTo("reportErrorControl",a);this.j.j=!1;this.f=new Pf;this.overlayLayer=null};_.Rf=function(){this.P=new md};
_.Sf=function(a){this.jk=a||0;_.G.bind(this,"forceredraw",this,this.C)};_.Tf=function(a,b){a=a.style;a.width=b.width+b.f;a.height=b.height+b.b};_.cg=function(a){return new _.D(a.offsetWidth,a.offsetHeight)};dg=function(a){this.data=a||[]};gg=function(){eg||(eg={b:-1,A:[,_.fg,_.fg,_.fg,_.fg]});return eg};hg=function(a){this.data=a||[]};ig=function(a){this.data=a||[]};jg=function(a){this.data=a||[]};kg=function(a){this.data=a||[]};lg=function(a){this.data=a||[]};mg=function(a){this.data=a||[]};
ng=function(a,b,c,d,e){_.Sf.call(this);this.G=b;this.D=new _.Jf;this.N=c+"/maps/api/js/StaticMapService.GetMapImage";this.b=this.f=null;this.B=d;this.j=e?new ud(null,void 0):null;this.l=null;this.m=!1;this.set("div",a);this.set("loading",!0)};pg=function(a){var b=a.get("tilt")||_.w(a.get("styles"));a=a.get("mapTypeId");return b?null:og[a]};qg=function(a){a.parentNode&&a.parentNode.removeChild(a)};
rg=function(a,b){var c=a.b;c.onload=null;c.onerror=null;var d=a.get("size");d&&(b&&(c.parentNode||a.f.appendChild(c),a.j||_.Tf(c,d),_.G.trigger(a,"staticmaploaded"),a.B.set(_.Ua())),a.set("loading",!1))};sg=function(a,b){var c=a.b;b!=c.src?(a.j||qg(c),c.onload=function(){rg(a,!0)},c.onerror=function(){rg(a,!1)},c.src=b):!c.parentNode&&b&&a.f.appendChild(c)};_.ug=function(a){for(var b;b=a.firstChild;)_.tg(b),a.removeChild(b)};
_.tg=function(a){a=new nf(a);try{for(;;)_.G.clearInstanceListeners(a.next())}catch(b){if(b!==_.vg)throw b;}};
zg=function(a,b){var c=_.Ua();Gf&&Hf();var d=new _.Rf,e=b||{};e.noClear||_.ug(a);var f="undefined"==typeof window.document?null:window.document.createElement("div");f&&a.appendChild&&(a.appendChild(f),f.style.width=f.style.height="100%");if(![].forEach)throw _.Q("controls",function(b){b.Mf(a)}),Error("The Google Maps API does not support this browser.");_.Ud.call(this,new Qf(this,a,f));_.m(e.mapTypeId)||(e.mapTypeId="roadmap");this.setValues(e);this.Y=_.wg[15]&&e.noControlsOrLogging;this.mapTypes=
new Td;this.features=new _.K;_.Re(f);this.notify("streetView");b=_.cg(f);var g=null;_.R&&xg(e.useStaticMap,b)&&(g=new ng(f,_.yg,_.O(_.zf(_.R),9),new ud(null,void 0),!1),_.G.forward(g,"staticmaploaded",this),g.set("size",b),g.bindTo("center",this),g.bindTo("zoom",this),g.bindTo("mapTypeId",this),g.bindTo("styles",this));this.overlayMapTypes=new _.gd;var h=this.controls=[];_.Fb(_.Nf,function(a,b){h[b]=new _.gd});var l=this,n=!0;_.Q("map",function(a){l.getDiv()&&f&&a.f(l,e,f,g,n,c,d)});n=!1;this.data=
new Ge({map:this})};xg=function(a,b){if(_.m(a))return!!a;a=b.width;b=b.height;return 384E3>=a*b&&800>=a&&800>=b};Ag=function(){_.Q("maxzoom",_.Ja)};Bg=function(a,b){!a||_.Pb(a)||_.x(a)?(this.set("tableId",a),this.setValues(b)):this.setValues(a)};_.Cg=_.oa();Dg=function(a){a=a||{};a.visible=_.Mb(a.visible,!0);return a};_.Eg=function(a){return a&&a.radius||6378137};Gg=function(a){return a instanceof _.gd?Fg(a):new _.gd((0,_.re)(a))};
Ig=function(a){if(_.La(a)||a instanceof _.gd)if(0==_.w(a))var b=!0;else b=a instanceof _.gd?a.getAt(0):a[0],b=_.La(b)||b instanceof _.gd;else b=!1;return b?a instanceof _.gd?Hg(Fg)(a):new _.gd(_.bc(Gg)(a)):new _.gd([Gg(a)])};Hg=function(a){return function(b){if(!(b instanceof _.gd))throw _.Wb("not an MVCArray");b.forEach(function(b,d){try{a(b)}catch(e){throw _.Wb("at index "+d,e);}});return b}};_.Jg=function(a){this.setValues(Dg(a));_.Q("poly",_.Ja)};
Kg=function(a){this.set("latLngs",new _.gd([new _.gd]));this.setValues(Dg(a));_.Q("poly",_.Ja)};_.Lg=function(a){Kg.call(this,a)};_.Mg=function(a){Kg.call(this,a)};_.Ng=function(a){this.setValues(Dg(a));_.Q("poly",_.Ja)};Og=function(){this.b=null};_.Pg=function(){this.b=null};
_.Qg=function(a){var b=this;this.tileSize=a.tileSize||new _.D(256,256);this.name=a.name;this.alt=a.alt;this.minZoom=a.minZoom;this.maxZoom=a.maxZoom;this.j=(0,_.p)(a.getTileUrl,a);this.b=new _.hd;this.f=null;this.set("opacity",a.opacity);_.Q("map",function(a){var c=b.f=a.b,e=b.tileSize||new _.D(256,256);b.b.forEach(function(a){var d=a.__gmimt,f=d.Z,l=d.zoom,n=b.j(f,l);d.Sb=c({T:f.x,U:f.y,$:l},e,a,n,function(){return _.G.trigger(a,"load")})})})};
Rg=function(a){a=a.get("opacity");return"number"==typeof a?a:1};_.Sg=function(){_.Sg.Le(this,"constructor")};_.Tg=function(a,b){_.Tg.Le(this,"constructor");this.set("styles",a);a=b||{};this.f=a.baseMapTypeId||"roadmap";this.minZoom=a.minZoom;this.maxZoom=a.maxZoom||20;this.name=a.name;this.alt=a.alt;this.projection=null;this.tileSize=new _.D(256,256)};_.Ug=function(a,b){_.cc(Zb,"container is not a Node")(a);this.setValues(b);_.Q("controls",(0,_.p)(function(b){b.dm(this,a)},this))};Vg=_.pa("b");
$g=function(a,b,c){for(var d=Array(b.length),e=0,f=b.length;e<f;++e)d[e]=b.charCodeAt(e);d.unshift(c);a=a.b;c=b=0;for(e=d.length;c<e;++c)b*=1729,b+=d[c],b%=a;return b};ch=function(){var a=_.N(new tf(_.R.data[4]),0),b=new Vg(131071),c=(0,window.unescape)("%26%74%6F%6B%65%6E%3D");return function(d){d=d.replace(ah,"%27");var e=d+c;bh||(bh=/(?:https?:\/\/[^/]+)?(.*)/);d=bh.exec(d);return e+$g(b,d&&d[1],a)}};dh=function(){var a=new Vg(2147483647);return function(b){return $g(a,b,0)}};
eh=function(a){for(var b=a.split("."),c=window,d=window,e=0;e<b.length;e++)if(d=c,c=c[b[e]],!c)throw _.Wb(a+" is not a function");return function(){c.apply(d)}};fh=function(){for(var a in Object.prototype)window.console&&window.console.error("This site adds property <"+a+"> to Object.prototype. Extending Object.prototype breaks JavaScript for..in loops, which are used heavily in Google Maps API v3.")};
gh=function(a){(a="version"in a)&&window.console&&window.console.error("You have included the Google Maps API multiple times on this page. This may cause unexpected errors.");return a};_.sa=[];_.wa="undefined"!=typeof window&&window===this?this:"undefined"!=typeof window.global&&null!=window.global?window.global:this;_.hh="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};
if("function"==typeof Object.setPrototypeOf)ih=Object.setPrototypeOf;else{var jh;a:{var kh={ik:!0},lh={};try{lh.__proto__=kh;jh=lh.ik;break a}catch(a){}jh=!1}ih=jh?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}_.mh=ih;ya="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};xa=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
Fa("Array.prototype.findIndex",function(a){return a?a:function(a,c){a:{var b=this;b instanceof String&&(b=String(b));for(var e=b.length,f=0;f<e;f++)if(a.call(c,b[f],f,b)){a=f;break a}a=-1}return a}});
Fa("WeakMap",function(a){function b(a){this.b=(f+=Math.random()+1).toString();if(a){va();Ca();a=_.Ea(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}function c(a){Ga(a,e)||ya(a,e,{value:{}})}function d(a){var b=Object[a];b&&(Object[a]=function(a){c(a);return b(a)})}if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d["delete"](b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(n){return!1}}())return a;
var e="$jscomp_hidden_"+Math.random().toString().substring(2);d("freeze");d("preventExtensions");d("seal");var f=0;b.prototype.set=function(a,b){c(a);if(!Ga(a,e))throw Error("WeakMap key fail: "+a);a[e][this.b]=b;return this};b.prototype.get=function(a){return Ga(a,e)?a[e][this.b]:void 0};b.prototype.has=function(a){return Ga(a,e)&&Ga(a[e],this.b)};b.prototype["delete"]=function(a){return Ga(a,e)&&Ga(a[e],this.b)?delete a[e][this.b]:!1};return b});
Fa("Map",function(a){function b(){var a={};return a.Cb=a.next=a.head=a}function c(a,b){var c=a.b;return Da(function(){if(c){for(;c.head!=a.b;)c=c.Cb;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}function d(a,b){var c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++g,f.set(b,c)):c="p_"+b;var d=a.f[c];if(d&&Ga(a.f,c))for(a=0;a<d.length;a++){var e=d[a];if(b!==b&&e.key!==e.key||b===e.key)return{id:c,list:d,index:a,Ia:e}}return{id:c,
list:d,index:-1,Ia:void 0}}function e(a){this.f={};this.b=b();this.size=0;if(a){a=_.Ea(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}if(function(){if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(_.Ea([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||
!d.next().done?!1:!0}catch(r){return!1}}())return a;va();Ca();var f=new window.WeakMap;e.prototype.set=function(a,b){var c=d(this,a);c.list||(c.list=this.f[c.id]=[]);c.Ia?c.Ia.value=b:(c.Ia={next:this.b,Cb:this.b.Cb,head:this.b,key:a,value:b},c.list.push(c.Ia),this.b.Cb.next=c.Ia,this.b.Cb=c.Ia,this.size++);return this};e.prototype["delete"]=function(a){a=d(this,a);return a.Ia&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.f[a.id],a.Ia.Cb.next=a.Ia.next,a.Ia.next.Cb=a.Ia.Cb,a.Ia.head=
null,this.size--,!0):!1};e.prototype.clear=function(){this.f={};this.b=this.b.Cb=b();this.size=0};e.prototype.has=function(a){return!!d(this,a).Ia};e.prototype.get=function(a){return(a=d(this,a).Ia)&&a.value};e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};e.prototype.keys=function(){return c(this,function(a){return a.key})};e.prototype.values=function(){return c(this,function(a){return a.value})};e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=
d.value,a.call(b,d[1],d[0],this)};e.prototype[window.Symbol.iterator]=e.prototype.entries;var g=0;return e});Fa("Array.prototype.fill",function(a){return a?a:function(a,c,d){var b=this.length||0;0>c&&(c=Math.max(0,b+c));if(null==d||d>b)d=b;d=Number(d);0>d&&(d=Math.max(0,b+d));for(c=Number(c||0);c<d;c++)this[c]=a;return this}});_.pb=this;Pa="closure_uid_"+(1E9*Math.random()>>>0);Qa=0;a:{var nh=_.pb.navigator;if(nh){var oh=nh.userAgent;if(oh){_.Wa=oh;break a}}_.Wa=""};_.mb[" "]=_.Ja;var Bh,nb;_.ph=_.fb("Opera");_.qh=_.hb();_.rh=_.fb("Edge");_.sh=_.fb("Gecko")&&!(_.Xa()&&!_.fb("Edge"))&&!(_.fb("Trident")||_.fb("MSIE"))&&!_.fb("Edge");_.th=_.Xa()&&!_.fb("Edge");_.uh=_.fb("Macintosh");_.vh=_.fb("Windows");_.wh=_.fb("Linux")||_.fb("CrOS");_.xh=_.fb("Android");_.yh=_.lb();_.zh=_.fb("iPad");_.Ah=_.fb("iPod");
a:{var Ch="",Dh=function(){var a=_.Wa;if(_.sh)return/rv\:([^\);]+)(\)|;)/.exec(a);if(_.rh)return/Edge\/([\d\.]+)/.exec(a);if(_.qh)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(_.th)return/WebKit\/(\S+)/.exec(a);if(_.ph)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Dh&&(Ch=Dh?Dh[1]:"");if(_.qh){var Eh=qb();if(null!=Eh&&Eh>(0,window.parseFloat)(Ch)){Bh=String(Eh);break a}}Bh=Ch}_.rb=Bh;nb={};var Gh=_.pb.document;_.Fh=Gh&&_.qh?qb()||("CSS1Compat"==Gh.compatMode?(0,window.parseInt)(_.rb,10):5):void 0;_.Hh=_.fb("Firefox");_.Ih=_.lb()||_.fb("iPod");_.Jh=_.fb("iPad");_.Kh=_.kb();_.Lh=ib();_.Mh=_.jb()&&!(_.lb()||_.fb("iPad")||_.fb("iPod"));var Nh;Nh=_.sh||_.th&&!_.Mh||_.ph;_.Oh=Nh||"function"==typeof _.pb.btoa;_.Ph=Nh||!_.Mh&&!_.qh&&"function"==typeof _.pb.atob;tb.prototype.get=function(){if(0<this.f){this.f--;var a=this.b;this.b=a.next;a.next=null}else a=this.j();return a};var Qh=function(a){return function(){return a}}(null);var yb,xb=_.ub;var Rh=new tb(function(){return new Cb},function(a){a.reset()},100);Bb.prototype.add=function(a,b){var c=Rh.get();c.set(a,b);this.f?this.f.next=c:this.b=c;this.f=c};Bb.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};Cb.prototype.set=function(a,b){this.Dc=a;this.b=b;this.next=null};Cb.prototype.reset=function(){this.next=this.b=this.Dc=null};_.wb.m=function(){if(-1!=String(_.pb.Promise).indexOf("[native code]")){var a=_.pb.Promise.resolve(void 0);_.wb.b=function(){a.then(_.wb.f)}}else _.wb.b=function(){Ab()}};_.wb.B=function(a){_.wb.b=function(){Ab();a&&a(_.wb.f)}};_.wb.j=!1;_.wb.l=new Bb;_.wb.f=function(){for(var a;a=_.wb.l.remove();){try{a.Dc.call(a.b)}catch(b){vb(b)}Rh.m(a);Rh.f<Rh.l&&(Rh.f++,a.next=Rh.b,Rh.b=a)}_.wb.j=!1};_.Sh={ROADMAP:"roadmap",SATELLITE:"satellite",HYBRID:"hybrid",TERRAIN:"terrain"};_.Nf={TOP_LEFT:1,TOP_CENTER:2,TOP:2,TOP_RIGHT:3,LEFT_CENTER:4,LEFT_TOP:5,LEFT:5,LEFT_BOTTOM:6,RIGHT_TOP:7,RIGHT:7,RIGHT_CENTER:8,RIGHT_BOTTOM:9,BOTTOM_LEFT:10,BOTTOM_CENTER:11,BOTTOM:11,BOTTOM_RIGHT:12,CENTER:13};_.t(Vb,Error);var Th,Vh;_.hc=_.cc(_.x,"not a number");Th=_.ec(_.hc,function(a){if((0,window.isNaN)(a))throw _.Wb("NaN is not an accepted value");return a});_.Uh=_.cc(_.Pb,"not a string");Vh=_.cc(_.Qb,"not a boolean");_.Wh=_.fc(_.hc);_.Xh=_.fc(_.Uh);_.Yh=_.fc(Vh);_.Zh=new _.z(0,0);_.z.prototype.toString=function(){return"("+this.x+", "+this.y+")"};_.z.prototype.X=function(a){return a?a.x==this.x&&a.y==this.y:!1};_.z.prototype.equals=_.z.prototype.X;_.z.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y)};_.z.prototype.Pd=_.ua(0);_.$h=new _.D(0,0);_.D.prototype.toString=function(){return"("+this.width+", "+this.height+")"};_.D.prototype.X=function(a){return a?a.width==this.width&&a.height==this.height:!1};_.D.prototype.equals=_.D.prototype.X;_.kc.prototype.X=function(a){return a?this.b==a.b&&this.f==a.f:!1};lc.prototype.X=function(a){return a?this.m11==a.m11&&this.m12==a.m12&&this.m21==a.m21&&this.m22==a.m22:!1};_.qc.prototype.isEmpty=function(){return!(this.I<this.K&&this.J<this.L)};_.qc.prototype.extend=function(a){a&&(this.I=Math.min(this.I,a.x),this.K=Math.max(this.K,a.x),this.J=Math.min(this.J,a.y),this.L=Math.max(this.L,a.y))};_.qc.prototype.getCenter=function(){return new _.z((this.I+this.K)/2,(this.J+this.L)/2)};_.qc.prototype.X=function(a){return a?this.I==a.I&&this.J==a.J&&this.K==a.K&&this.L==a.L:!1};_.ai=_.rc(-window.Infinity,-window.Infinity,window.Infinity,window.Infinity);_.bi=_.rc(0,0,0,0);_.k=sc.prototype;_.k.isEmpty=function(){return 360==this.b-this.f};_.k.intersects=function(a){var b=this.b,c=this.f;return this.isEmpty()||a.isEmpty()?!1:_.tc(this)?_.tc(a)||a.b<=this.f||a.f>=b:_.tc(a)?a.b<=c||a.f>=b:a.b<=c&&a.f>=b};_.k.contains=function(a){-180==a&&(a=180);var b=this.b,c=this.f;return _.tc(this)?(a>=b||a<=c)&&!this.isEmpty():a>=b&&a<=c};_.k.extend=function(a){this.contains(a)||(this.isEmpty()?this.b=this.f=a:_.uc(a,this.b)<_.uc(this.f,a)?this.b=a:this.f=a)};
_.k.X=function(a){return 1E-9>=Math.abs(a.b-this.b)%360+Math.abs(_.vc(a)-_.vc(this))};_.k.Jb=function(){var a=(this.b+this.f)/2;_.tc(this)&&(a=_.Jb(a+180,-180,180));return a};_.k=xc.prototype;_.k.isEmpty=function(){return this.b>this.f};_.k.intersects=function(a){var b=this.b,c=this.f;return b<=a.b?a.b<=c&&a.b<=a.f:b<=a.f&&b<=c};_.k.contains=function(a){return a>=this.b&&a<=this.f};_.k.extend=function(a){this.isEmpty()?this.f=this.b=a:a<this.b?this.b=a:a>this.f&&(this.f=a)};
_.k.X=function(a){return this.isEmpty()?a.isEmpty():1E-9>=Math.abs(a.b-this.b)+Math.abs(this.f-a.f)};_.k.Jb=function(){return(this.f+this.b)/2};var yc=_.Yb({lat:_.hc,lng:_.hc},!0);_.F.prototype.toString=function(){return"("+this.lat()+", "+this.lng()+")"};_.F.prototype.toJSON=function(){return{lat:this.lat(),lng:this.lng()}};_.F.prototype.X=function(a){return a?_.Kb(this.lat(),a.lat())&&_.Kb(this.lng(),a.lng()):!1};_.F.prototype.equals=_.F.prototype.X;_.F.prototype.toUrlValue=function(a){a=_.m(a)?a:6;return Bc(this.lat(),a)+","+Bc(this.lng(),a)};_.re=_.bc(_.Cc);_.k=_.Dc.prototype;_.k.getCenter=function(){return new _.F(this.f.Jb(),this.b.Jb())};_.k.toString=function(){return"("+this.getSouthWest()+", "+this.getNorthEast()+")"};_.k.toJSON=function(){return{south:this.f.b,west:this.b.b,north:this.f.f,east:this.b.f}};_.k.toUrlValue=function(a){var b=this.getSouthWest(),c=this.getNorthEast();return[b.toUrlValue(a),c.toUrlValue(a)].join()};_.k.X=function(a){if(!a)return!1;a=_.Kc(a);return this.f.X(a.f)&&this.b.X(a.b)};_.Dc.prototype.equals=_.Dc.prototype.X;
_.k=_.Dc.prototype;_.k.contains=function(a){a=_.Cc(a);return this.f.contains(a.lat())&&this.b.contains(a.lng())};_.k.intersects=function(a){a=_.Kc(a);return this.f.intersects(a.f)&&this.b.intersects(a.b)};_.k.extend=function(a){a=_.Cc(a);this.f.extend(a.lat());this.b.extend(a.lng());return this};_.k.union=function(a){a=_.Kc(a);if(!a||a.isEmpty())return this;this.extend(a.getSouthWest());this.extend(a.getNorthEast());return this};_.k.getSouthWest=function(){return new _.F(this.f.b,this.b.b,!0)};
_.k.getNorthEast=function(){return new _.F(this.f.f,this.b.f,!0)};_.k.toSpan=function(){var a=this.f;a=a.isEmpty()?0:a.f-a.b;return new _.F(a,_.vc(this.b),!0)};_.k.isEmpty=function(){return this.f.isEmpty()||this.b.isEmpty()};var Fc=_.Yb({south:_.hc,west:_.hc,north:_.hc,east:_.hc},!1);var Tc;
_.G={addListener:function(a,b,c){return new Uc(a,b,c,0)},hasListeners:function(a,b){if(!a)return!1;b=(a=a.__e3_)&&a[b];return!!b&&!_.Hb(b)},removeListener:function(a){a&&a.remove()},clearListeners:function(a,b){_.Fb(Qc(a,b),function(a,b){b&&b.remove()})},clearInstanceListeners:function(a){_.Fb(Qc(a),function(a,c){c&&c.remove()})},trigger:function(a,b,c){if(_.G.hasListeners(a,b)){var d=_.eb(arguments,2),e=Qc(a,b),f;for(f in e){var g=e[f];g&&g.b.apply(g.f,d)}}},addDomListener:function(a,b,c,d){var e=
d?4:1;if(!a.addEventListener&&a.attachEvent)return c=new Uc(a,b,c,2),a.attachEvent("on"+b,Vc(c)),c;a.addEventListener&&a.addEventListener(b,c,d);return new Uc(a,b,c,e)},addDomListenerOnce:function(a,b,c,d){var e=_.G.addDomListener(a,b,function(){e.remove();return c.apply(this,arguments)},d);return e},W:function(a,b,c,d){return _.G.addDomListener(a,b,Rc(c,d))},bind:function(a,b,c,d){return _.G.addListener(a,b,(0,_.p)(d,c))},addListenerOnce:function(a,b,c){var d=_.G.addListener(a,b,function(){d.remove();
return c.apply(this,arguments)});return d},forward:function(a,b,c){return _.G.addListener(a,b,Sc(b,c))},Sa:function(a,b,c,d){return _.G.addDomListener(a,b,Sc(b,c,!d))}};Tc=0;Uc.prototype.remove=function(){if(this.f){if(this.f.removeEventListener)switch(this.l){case 1:this.f.removeEventListener(this.j,this.b,!1);break;case 4:this.f.removeEventListener(this.j,this.b,!0)}delete Pc(this.f,this.j)[this.id];this.b=this.f=null}};_.Wc.prototype.heading=_.qa("f");_.Wc.prototype.b=_.qa("j");_.Wc.prototype.toString=function(){return this.f+","+this.j};_.ci=new _.Wc;_.k=_.K.prototype;_.k.get=function(a){var b=bd(this);a+="";b=Tb(b,a);if(_.m(b)){if(b){a=b.nb;b=b.Fc;var c="get"+_.ad(a);return b[c]?b[c]():b.get(a)}return this[a]}};_.k.set=function(a,b){var c=bd(this);a+="";var d=Tb(c,a);if(d)if(a=d.nb,d=d.Fc,c="set"+_.ad(a),d[c])d[c](b);else d.set(a,b);else this[a]=b,c[a]=null,Zc(this,a)};_.k.notify=function(a){var b=bd(this);a+="";(b=Tb(b,a))?b.Fc.notify(b.nb):Zc(this,a)};
_.k.setValues=function(a){for(var b in a){var c=a[b],d="set"+_.ad(b);if(this[d])this[d](c);else this.set(b,c)}};_.k.setOptions=_.K.prototype.setValues;_.k.changed=_.oa();var $c={};_.K.prototype.bindTo=function(a,b,c,d){a+="";c=(c||a)+"";this.unbind(a);var e={Fc:this,nb:a},f={Fc:b,nb:c,wg:e};bd(this)[a]=f;Yc(b,c)[_.Xc(e)]=e;d||Zc(this,a)};_.K.prototype.unbind=function(a){var b=bd(this),c=b[a];c&&(c.wg&&delete Yc(c.Fc,c.nb)[_.Xc(c.wg)],this[a]=this.get(a),b[a]=null)};
_.K.prototype.unbindAll=function(){var a=(0,_.p)(this.unbind,this),b=bd(this),c;for(c in b)a(c)};_.K.prototype.addListener=function(a,b){return _.G.addListener(this,a,b)};_.t(_.gd,_.K);_.k=_.gd.prototype;_.k.getAt=function(a){return this.b[a]};_.k.indexOf=function(a){for(var b=0,c=this.b.length;b<c;++b)if(a===this.b[b])return b;return-1};_.k.forEach=function(a){for(var b=0,c=this.b.length;b<c;++b)a(this.b[b],b)};_.k.setAt=function(a,b){var c=this.b[a],d=this.b.length;if(a<d)this.b[a]=b,_.G.trigger(this,"set_at",a,c),this.l&&this.l(a,c);else{for(c=d;c<a;++c)this.insertAt(c,void 0);this.insertAt(a,b)}};
_.k.insertAt=function(a,b){this.b.splice(a,0,b);fd(this);_.G.trigger(this,"insert_at",a);this.f&&this.f(a)};_.k.removeAt=function(a){var b=this.b[a];this.b.splice(a,1);fd(this);_.G.trigger(this,"remove_at",a,b);this.j&&this.j(a,b);return b};_.k.push=function(a){this.insertAt(this.b.length,a);return this.b.length};_.k.pop=function(){return this.removeAt(this.b.length-1)};_.k.getArray=_.qa("b");_.k.clear=function(){for(;this.get("length");)this.pop()};_.ed(_.gd.prototype,{length:null});_.hd.prototype.remove=function(a){var b=this.f,c=this.j(a);b[c]&&(delete b[c],_.G.trigger(this,"remove",a),this.onRemove&&this.onRemove(a))};_.hd.prototype.contains=function(a){return!!this.f[this.j(a)]};_.hd.prototype.forEach=function(a){var b=this.f,c;for(c in b)a.call(this,b[c])};_.jd.prototype.gb=_.ua(1);_.jd.prototype.forEach=function(a,b){_.u(this.b,function(c,d){a.call(b,c,d)})};var di=_.Yb({zoom:_.fc(Th),heading:Th,pitch:Th});_.t(_.ld,_.K);md.prototype.addListener=function(a,b,c){c=c?{xg:!1}:null;var d=!this.P.length;var e=this.P;var f=bb(e,rd(a,b));(e=0>f?null:_.Ha(e)?e.charAt(f):e[f])?e.once=e.once&&c:this.P.push({Dc:a,context:b||null,once:c});d&&this.f();return a};md.prototype.addListenerOnce=function(a,b){this.addListener(a,b,!0);return a};md.prototype.removeListener=function(a,b){if(this.P.length){var c=this.P;a=bb(c,rd(a,b));0<=a&&_.cb(c,a);this.P.length||this.b()}};var nd=_.wb;_.k=_.sd.prototype;_.k.md=_.oa();_.k.ld=_.oa();_.k.addListener=function(a,b){return this.P.addListener(a,b)};_.k.addListenerOnce=function(a,b){return this.P.addListenerOnce(a,b)};_.k.removeListener=function(a,b){return this.P.removeListener(a,b)};_.k.notify=function(a){_.qd(this.P,function(a){a(this.get())},this,a)};_.t(_.td,_.sd);_.td.prototype.set=function(a){this.m&&this.get()===a||(this.Qh(a),this.notify())};_.t(ud,_.td);ud.prototype.get=_.qa("b");ud.prototype.Qh=_.pa("b");_.t(wd,_.K);_.ei=_.Cd("d",void 0);_.fi=_.Cd("f",void 0);_.S=_.Gd();_.gi=_.Fd("i",void 0);_.hi=new Ad("i",3,void 0,void 0);_.ii=new Ad("j",3,"",void 0);_.ji=_.Cd("u",void 0);_.fg=_.Fd("u",void 0);_.ki=new Ad("u",3,void 0,void 0);_.li=_.Hd();_.T=_.Id();_.U=_.Jd();_.mi=new Ad("e",3,void 0,void 0);_.V=_.Cd("s",void 0);_.ni=_.Fd("s",void 0);_.oi=new Ad("s",3,void 0,void 0);_.pi=_.Cd("B",void 0);_.qi=_.Cd("x",void 0);_.ri=_.Fd("x",void 0);_.si=new Ad("x",3,void 0,void 0);_.ti=new Ad("y",3,void 0,void 0);var vi;_.ui=new Ld;vi=/'/g;Ld.prototype.b=function(a,b){var c=[];Nd(a,b,c);return c.join("&").replace(vi,"%27")};_.M.prototype.X=function(a){return _.zd(this.data,a?(a&&a).data:null)};_.M.prototype.bi=_.ua(2);_.t(Td,_.K);Td.prototype.set=function(a,b){if(null!=b&&!(b&&_.x(b.maxZoom)&&b.tileSize&&b.tileSize.width&&b.tileSize.height&&b.getTile&&b.getTile.apply))throw Error("Expected value implementing google.maps.MapType");return _.K.prototype.set.apply(this,arguments)};_.t(_.Ud,_.K);_.t(_.Wd,Vd);_.Wd.prototype.getType=_.ra("Point");_.Wd.prototype.forEachLatLng=function(a){a(this.b)};_.Wd.prototype.get=_.qa("b");var pe=_.bc(Xd);ee.f=void 0;ee.b=function(){return ee.f?ee.f:ee.f=new ee};ee.prototype.na=function(a,b){var c=this,d=c.m;fe(c.j,function(e){for(var f=e.b[a]||[],g=e.l[a]||[],h=d[a]=_.$d(f.length,function(){delete d[a];b(e.f);for(var f=c.f[a],h=f?f.length:0,l=0;l<h;++l)f[l](c.b[a]);delete c.f[a];l=0;for(f=g.length;l<f;++l)h=g[l],d[h]&&d[h]()}),l=0,n=f.length;l<n;++l)c.b[f[l]]&&h()})};_.k=_.le.prototype;_.k.getId=_.qa("j");_.k.getGeometry=_.qa("b");_.k.setGeometry=function(a){var b=this.b;try{this.b=a?Xd(a):null}catch(c){_.Xb(c);return}_.G.trigger(this,"setgeometry",{feature:this,newGeometry:this.b,oldGeometry:b})};_.k.getProperty=function(a){return Tb(this.f,a)};_.k.setProperty=function(a,b){if(void 0===b)this.removeProperty(a);else{var c=this.getProperty(a);this.f[a]=b;_.G.trigger(this,"setproperty",{feature:this,name:a,newValue:b,oldValue:c})}};
_.k.removeProperty=function(a){var b=this.getProperty(a);delete this.f[a];_.G.trigger(this,"removeproperty",{feature:this,name:a,oldValue:b})};_.k.forEachProperty=function(a){for(var b in this.f)a(this.getProperty(b),b)};_.k.toGeoJson=function(a){var b=this;_.Q("data",function(c){c.f(b,a)})};var wi={So:"Point",Oo:"LineString",POLYGON:"Polygon"};var xi={CIRCLE:0,FORWARD_CLOSED_ARROW:1,FORWARD_OPEN_ARROW:2,BACKWARD_CLOSED_ARROW:3,BACKWARD_OPEN_ARROW:4};_.k=me.prototype;_.k.contains=function(a){return this.b.hasOwnProperty(_.Xc(a))};_.k.getFeatureById=function(a){return Tb(this.f,a)};
_.k.add=function(a){a=a||{};a=a instanceof _.le?a:new _.le(a);if(!this.contains(a)){var b=a.getId();if(b){var c=this.getFeatureById(b);c&&this.remove(c)}c=_.Xc(a);this.b[c]=a;b&&(this.f[b]=a);var d=_.G.forward(a,"setgeometry",this),e=_.G.forward(a,"setproperty",this),f=_.G.forward(a,"removeproperty",this);this.j[c]=function(){_.G.removeListener(d);_.G.removeListener(e);_.G.removeListener(f)};_.G.trigger(this,"addfeature",{feature:a})}return a};
_.k.remove=function(a){var b=_.Xc(a),c=a.getId();if(this.b[b]){delete this.b[b];c&&delete this.f[c];if(c=this.j[b])delete this.j[b],c();_.G.trigger(this,"removefeature",{feature:a})}};_.k.forEach=function(a){for(var b in this.b)a(this.b[b])};_.Fe="click dblclick mousedown mousemove mouseout mouseover mouseup rightclick".split(" ");ne.prototype.get=function(a){return this.b[a]};ne.prototype.set=function(a,b){var c=this.b;c[a]||(c[a]={});_.Gb(c[a],b);_.G.trigger(this,"changed",a)};ne.prototype.reset=function(a){delete this.b[a];_.G.trigger(this,"changed",a)};ne.prototype.forEach=function(a){_.Fb(this.b,a)};_.t(oe,_.K);oe.prototype.overrideStyle=function(a,b){this.b.set(_.Xc(a),b)};oe.prototype.revertStyle=function(a){a?this.b.reset(_.Xc(a)):this.b.forEach((0,_.p)(this.b.reset,this.b))};_.t(_.qe,Vd);_.k=_.qe.prototype;_.k.getType=_.ra("GeometryCollection");_.k.getLength=function(){return this.b.length};_.k.getAt=function(a){return this.b[a]};_.k.getArray=function(){return this.b.slice()};_.k.forEachLatLng=function(a){this.b.forEach(function(b){b.forEachLatLng(a)})};_.t(_.se,Vd);_.k=_.se.prototype;_.k.getType=_.ra("LineString");_.k.getLength=function(){return this.b.length};_.k.getAt=function(a){return this.b[a]};_.k.getArray=function(){return this.b.slice()};_.k.forEachLatLng=function(a){this.b.forEach(a)};var ue=_.bc(_.$b(_.se,"google.maps.Data.LineString",!0));_.t(_.te,Vd);_.k=_.te.prototype;_.k.getType=_.ra("LinearRing");_.k.getLength=function(){return this.b.length};_.k.getAt=function(a){return this.b[a]};_.k.getArray=function(){return this.b.slice()};_.k.forEachLatLng=function(a){this.b.forEach(a)};var xe=_.bc(_.$b(_.te,"google.maps.Data.LinearRing",!0));_.t(_.ve,Vd);_.k=_.ve.prototype;_.k.getType=_.ra("MultiLineString");_.k.getLength=function(){return this.b.length};_.k.getAt=function(a){return this.b[a]};_.k.getArray=function(){return this.b.slice()};_.k.forEachLatLng=function(a){this.b.forEach(function(b){b.forEachLatLng(a)})};_.t(_.we,Vd);_.k=_.we.prototype;_.k.getType=_.ra("MultiPoint");_.k.getLength=function(){return this.b.length};_.k.getAt=function(a){return this.b[a]};_.k.getArray=function(){return this.b.slice()};_.k.forEachLatLng=function(a){this.b.forEach(a)};_.t(_.Be,Vd);_.k=_.Be.prototype;_.k.getType=_.ra("Polygon");_.k.getLength=function(){return this.b.length};_.k.getAt=function(a){return this.b[a]};_.k.getArray=function(){return this.b.slice()};_.k.forEachLatLng=function(a){this.b.forEach(function(b){b.forEachLatLng(a)})};var Ce=_.bc(_.$b(_.Be,"google.maps.Data.Polygon",!0));_.t(_.De,Vd);_.k=_.De.prototype;_.k.getType=_.ra("MultiPolygon");_.k.getLength=function(){return this.b.length};_.k.getAt=function(a){return this.b[a]};_.k.getArray=function(){return this.b.slice()};_.k.forEachLatLng=function(a){this.b.forEach(function(b){b.forEachLatLng(a)})};_.yi=_.fc(_.$b(_.Ud,"Map"));_.t(Ge,_.K);_.k=Ge.prototype;_.k.contains=function(a){return this.b.contains(a)};_.k.getFeatureById=function(a){return this.b.getFeatureById(a)};_.k.add=function(a){return this.b.add(a)};_.k.remove=function(a){this.b.remove(a)};_.k.forEach=function(a){this.b.forEach(a)};_.k.addGeoJson=function(a,b){return _.Ee(this.b,a,b)};_.k.loadGeoJson=function(a,b,c){var d=this.b;_.Q("data",function(e){e.il(d,a,b,c)})};_.k.toGeoJson=function(a){var b=this.b;_.Q("data",function(c){c.cl(b,a)})};
_.k.overrideStyle=function(a,b){this.f.overrideStyle(a,b)};_.k.revertStyle=function(a){this.f.revertStyle(a)};_.k.controls_changed=function(){this.get("controls")&&He(this)};_.k.drawingMode_changed=function(){this.get("drawingMode")&&He(this)};_.ed(Ge.prototype,{map:_.yi,style:_.ub,controls:_.fc(_.bc(_.ac(wi))),controlPosition:_.fc(_.ac(_.Nf)),drawingMode:_.fc(_.ac(wi))});_.zi={METRIC:0,IMPERIAL:1};_.Ai={DRIVING:"DRIVING",WALKING:"WALKING",BICYCLING:"BICYCLING",TRANSIT:"TRANSIT"};_.Bi={BEST_GUESS:"bestguess",OPTIMISTIC:"optimistic",PESSIMISTIC:"pessimistic"};_.Ci={BUS:"BUS",RAIL:"RAIL",SUBWAY:"SUBWAY",TRAIN:"TRAIN",TRAM:"TRAM"};_.Di={LESS_WALKING:"LESS_WALKING",FEWER_TRANSFERS:"FEWER_TRANSFERS"};var Ei=_.Yb({routes:_.bc(_.cc(_.Ob))},!0);var he={main:[],common:["main"],util:["common"],adsense:["main"],controls:["util"],data:["util"],directions:["util","geometry"],distance_matrix:["util"],drawing:["main"],drawing_impl:["controls"],elevation:["util","geometry"],geocoder:["util"],geojson:["main"],imagery_viewer:["main"],geometry:["main"],infowindow:["util"],kml:["onion","util","map"],layers:["map"],map:["common"],marker:["util"],maxzoom:["util"],onion:["util","map"],overlay:["common"],panoramio:["main"],places:["main"],places_impl:["controls"],
poly:["util","map","geometry"],search:["main"],search_impl:["onion"],stats:["util"],streetview:["util","geometry"],usage:["util"],visualization:["main"],visualization_impl:["onion"],weather:["main"],zombie:["main"]};var Fi=_.pb.google.maps,Gi=ee.b(),Hi=(0,_.p)(Gi.na,Gi);Fi.__gjsload__=Hi;_.Fb(Fi.modules,Hi);delete Fi.modules;var Ii=_.Yb({source:_.Uh,webUrl:_.Xh,iosDeepLinkId:_.Xh});var Ji=_.ec(_.Yb({placeId:_.Xh,query:_.Xh,location:_.Cc}),function(a){if(a.placeId&&a.query)throw _.Wb("cannot set both placeId and query");if(!a.placeId&&!a.query)throw _.Wb("must set one of placeId or query");return a});_.t(Le,_.K);
_.ed(Le.prototype,{position:_.fc(_.Cc),title:_.Xh,icon:_.fc(_.dc([_.Uh,{Rf:gc("url"),then:_.Yb({url:_.Uh,scaledSize:_.fc(jc),size:_.fc(jc),origin:_.fc(ic),anchor:_.fc(ic),labelOrigin:_.fc(ic),path:_.cc(function(a){return null==a})},!0)},{Rf:gc("path"),then:_.Yb({path:_.dc([_.Uh,_.ac(xi)]),anchor:_.fc(ic),labelOrigin:_.fc(ic),fillColor:_.Xh,fillOpacity:_.Wh,rotation:_.Wh,scale:_.Wh,strokeColor:_.Xh,strokeOpacity:_.Wh,strokeWeight:_.Wh,url:_.cc(function(a){return null==a})},!0)}])),label:_.fc(_.dc([_.Uh,{Rf:gc("text"),
then:_.Yb({text:_.Uh,fontSize:_.Xh,fontWeight:_.Xh,fontFamily:_.Xh},!0)}])),shadow:_.ub,shape:_.ub,cursor:_.Xh,clickable:_.Yh,animation:_.ub,draggable:_.Yh,visible:_.Yh,flat:_.ub,zIndex:_.Wh,opacity:_.Wh,place:_.fc(Ji),attribution:_.fc(Ii)});var Ki=_.fc(_.$b(_.ld,"StreetViewPanorama"));_.t(_.Me,Le);_.Me.prototype.map_changed=function(){this.__gm.set&&this.__gm.set.remove(this);var a=this.get("map");this.__gm.set=a&&a.__gm.fa;this.__gm.set&&_.id(this.__gm.set,this)};_.Me.MAX_ZINDEX=1E6;_.ed(_.Me.prototype,{map:_.dc([_.yi,Ki])});_.t(Ne,_.K);_.k=Ne.prototype;_.k.internalAnchor_changed=function(){var a=this.get("internalAnchor");Oe(this,"attribution",a);Oe(this,"place",a);Oe(this,"internalAnchorMap",a,"map");Oe(this,"internalAnchorPoint",a,"anchorPoint");a instanceof _.Me?Oe(this,"internalAnchorPosition",a,"internalPosition"):Oe(this,"internalAnchorPosition",a,"position")};
_.k.internalAnchorPoint_changed=Ne.prototype.internalPixelOffset_changed=function(){var a=this.get("internalAnchorPoint")||_.Zh,b=this.get("internalPixelOffset")||_.$h;this.set("pixelOffset",new _.D(b.width+Math.round(a.x),b.height+Math.round(a.y)))};_.k.internalAnchorPosition_changed=function(){var a=this.get("internalAnchorPosition");a&&this.set("position",a)};_.k.internalAnchorMap_changed=function(){this.get("internalAnchor")&&this.b.set("map",this.get("internalAnchorMap"))};
_.k.Jm=function(){var a=this.get("internalAnchor");!this.b.get("map")&&a&&a.get("map")&&this.set("internalAnchor",null)};_.k.internalContent_changed=function(){this.set("content",Ie(this.get("internalContent")))};_.k.trigger=function(a){_.G.trigger(this.b,a)};_.k.close=function(){this.b.set("map",null)};_.t(_.Pe,_.K);_.ed(_.Pe.prototype,{content:_.dc([_.Xh,_.cc(Zb)]),position:_.fc(_.Cc),size:_.fc(jc),map:_.dc([_.yi,Ki]),anchor:_.fc(_.$b(_.K,"MVCObject")),zIndex:_.Wh});_.Pe.prototype.open=function(a,b){this.set("anchor",b);b?!this.get("map")&&a&&this.set("map",a):this.set("map",a)};_.Pe.prototype.close=function(){this.set("map",null)};_.Qe=[];_.t(Se,_.K);Se.prototype.changed=function(a){if("map"==a||"panel"==a){var b=this;_.Q("directions",function(c){c.Ol(b,a)})}"panel"==a&&_.Re(this.getPanel())};_.ed(Se.prototype,{directions:Ei,map:_.yi,panel:_.fc(_.cc(Zb)),routeIndex:_.Wh});Te.prototype.route=function(a,b){_.Q("directions",function(c){c.Ph(a,b,!0)})};Ue.prototype.getDistanceMatrix=function(a,b){_.Q("distance_matrix",function(c){c.b(a,b)})};Ve.prototype.getElevationAlongPath=function(a,b){_.Q("elevation",function(c){c.getElevationAlongPath(a,b)})};Ve.prototype.getElevationForLocations=function(a,b){_.Q("elevation",function(c){c.getElevationForLocations(a,b)})};_.Ti=_.$b(_.Dc,"LatLngBounds");_.We.prototype.geocode=function(a,b){_.Q("geocoder",function(c){c.geocode(a,b)})};_.t(_.Xe,_.K);_.Xe.prototype.map_changed=function(){var a=this;_.Q("kml",function(b){b.b(a)})};_.ed(_.Xe.prototype,{map:_.yi,url:null,bounds:null,opacity:_.Wh});_.Vi={UNKNOWN:"UNKNOWN",OK:_.ia,INVALID_REQUEST:_.ba,DOCUMENT_NOT_FOUND:"DOCUMENT_NOT_FOUND",FETCH_ERROR:"FETCH_ERROR",INVALID_DOCUMENT:"INVALID_DOCUMENT",DOCUMENT_TOO_LARGE:"DOCUMENT_TOO_LARGE",LIMITS_EXCEEDED:"LIMITS_EXECEEDED",TIMED_OUT:"TIMED_OUT"};_.t(Ye,_.K);_.k=Ye.prototype;_.k.yd=function(){var a=this;_.Q("kml",function(b){b.f(a)})};_.k.url_changed=Ye.prototype.yd;_.k.driveFileId_changed=Ye.prototype.yd;_.k.map_changed=Ye.prototype.yd;_.k.zIndex_changed=Ye.prototype.yd;_.ed(Ye.prototype,{map:_.yi,defaultViewport:null,metadata:null,status:null,url:_.Xh,screenOverlays:_.Yh,zIndex:_.Wh});_.t(_.Ze,_.K);_.ed(_.Ze.prototype,{map:_.yi});_.t($e,_.K);_.ed($e.prototype,{map:_.yi});_.t(af,_.K);_.ed(af.prototype,{map:_.yi});!_.sh&&!_.qh||_.qh&&9<=Number(_.Fh)||_.sh&&_.sb("1.9.1");_.qh&&_.sb("9");_.cf.prototype.Ld=!0;_.cf.prototype.zb=_.ua(4);_.cf.prototype.hh=!0;_.cf.prototype.Jd=_.ua(6);_.bf={};_.df("about:blank");_.gf.prototype.hh=!0;_.gf.prototype.Jd=_.ua(5);_.gf.prototype.Ld=!0;_.gf.prototype.zb=_.ua(3);_.ff={};_.hf("<!DOCTYPE html>",0);_.hf("",0);_.hf("<br>",0);_.vg="StopIteration"in _.pb?_.pb.StopIteration:{message:"StopIteration",stack:""};_.lf.prototype.next=function(){throw _.vg;};_.lf.prototype.He=function(){return this};_.t(mf,_.lf);mf.prototype.setPosition=function(a,b,c){if(this.node=a)this.f=_.Ia(b)?b:1!=this.node.nodeType?0:this.b?-1:1;_.Ia(c)&&(this.depth=c)};
mf.prototype.next=function(){if(this.j){if(!this.node||this.l&&0==this.depth)throw _.vg;var a=this.node;var b=this.b?-1:1;if(this.f==b){var c=this.b?a.lastChild:a.firstChild;c?this.setPosition(c):this.setPosition(a,-1*b)}else(c=this.b?a.previousSibling:a.nextSibling)?this.setPosition(c):this.setPosition(a.parentNode,-1*b);this.depth+=this.f*(this.b?-1:1)}else this.j=!0;a=this.node;if(!this.node)throw _.vg;return a};mf.prototype.X=function(a){return a.node==this.node&&(!this.node||a.f==this.f)};
mf.prototype.splice=function(a){var b=this.node,c=this.b?1:-1;this.f==c&&(this.f=-1*c,this.depth+=this.f*(this.b?-1:1));this.b=!this.b;mf.prototype.next.call(this);this.b=!this.b;c=_.Ma(arguments[0])?arguments[0]:arguments;for(var d=c.length-1;0<=d;d--)_.jf(c[d],b);_.kf(b)};_.t(nf,mf);nf.prototype.next=function(){do nf.ob.next.call(this);while(-1==this.f);return this.node};var Wi;_.t(of,_.M);var Xi;_.t(pf,_.M);var Yi;_.t(qf,_.M);_.t(rf,_.M);_.t(_.sf,_.M);_.t(tf,_.M);_.t(uf,_.M);_.t(vf,_.M);_.wg={};var Gf;_.$i=new _.If(new _.kc(256,256),0,0);_.Jf.prototype.fromLatLngToPoint=function(a,b){b=b||new _.z(0,0);var c=this.b;b.x=c.x+a.lng()*this.j;a=_.Ib(Math.sin(_.Db(a.lat())),-(1-1E-15),1-1E-15);b.y=c.y+.5*Math.log((1+a)/(1-a))*-this.l;return b};_.Jf.prototype.fromPointToLatLng=function(a,b){var c=this.b;return new _.F(_.Eb(2*Math.atan(Math.exp((a.y-c.y)/-this.l))-Math.PI/2),(a.x-c.x)/this.j,b)};_.Mf={japan_prequake:20,japan_postquake2010:24};_.aj={NEAREST:"nearest",BEST:"best"};_.bj={DEFAULT:"default",OUTDOOR:"outdoor"};_.t(Of,_.ld);Of.prototype.visible_changed=function(){var a=this;!a.m&&a.getVisible()&&(a.m=!0,_.Q("streetview",function(b){if(a.f)var c=a.f;b.an(a,c)}))};_.ed(Of.prototype,{visible:_.Yh,pano:_.Xh,position:_.fc(_.Cc),pov:_.fc(di),motionTracking:Vh,photographerPov:null,location:null,links:_.bc(_.cc(_.Ob)),status:null,zoom:_.Wh,enableCloseButton:_.Yh});Of.prototype.registerPanoProvider=function(a,b){this.set("panoProvider",{Gh:a,options:b||{}})};_.t(Qf,wd);_.Rf.prototype.addListener=function(a,b){this.P.addListener(a,b)};_.Rf.prototype.addListenerOnce=function(a,b){this.P.addListenerOnce(a,b)};_.Rf.prototype.removeListener=function(a,b){this.P.removeListener(a,b)};_.Rf.prototype.b=_.ua(7);_.t(_.Sf,_.K);_.Sf.prototype.O=function(){var a=this;a.F||(a.F=_.pb.setTimeout(function(){a.F=void 0;a.da()},a.jk))};_.Sf.prototype.C=function(){this.F&&_.pb.clearTimeout(this.F);this.F=void 0;this.da()};var eg;_.t(dg,_.M);var cj;_.t(hg,_.M);var dj;_.t(ig,_.M);var ej;_.t(jg,_.M);var fj;_.t(kg,_.M);var gj;_.t(lg,_.M);var hj;_.t(mg,_.M);mg.prototype.getZoom=function(){return _.N(this,2)};mg.prototype.setZoom=function(a){this.data[2]=a};_.t(ng,_.Sf);var og={roadmap:0,satellite:2,hybrid:3,terrain:4},ij={0:1,2:2,3:2,4:2};_.k=ng.prototype;_.k.Sg=_.cd("center");_.k.jg=_.cd("zoom");_.k.changed=function(){var a=this.Sg(),b=this.jg(),c=pg(this);if(a&&!a.X(this.V)||this.S!=b||this.ba!=c)this.j||qg(this.b),this.O(),this.S=b,this.ba=c;this.V=a};
_.k.da=function(){var a=pg(this);if(this.j&&this.m)this.l!=a&&qg(this.b);else{var b="",c=this.Sg(),d=this.jg(),e=this.get("size");if(e){if(c&&(0,window.isFinite)(c.lat())&&(0,window.isFinite)(c.lng())&&1<d&&null!=a&&e&&e.width&&e.height&&this.f){_.Tf(this.f,e);if(c=_.Kf(this.D,c,d)){var f=new _.qc;f.I=Math.round(c.x-e.width/2);f.K=f.I+e.width;f.J=Math.round(c.y-e.height/2);f.L=f.J+e.height}else f=null;c=ij[a];if(f){this.m=!0;this.l=a;this.j&&this.b&&(b=new lc(Math.pow(2,d),0,0),this.j.set({ab:this.b,
Ea:{min:pc(b,{Na:f.I,Oa:f.J}),max:pc(b,{Na:f.K,Oa:f.L})},size:{width:e.width,height:e.height}}));b=new mg;var g=new kg(_.P(b,0));g.data[0]=f.I;g.data[1]=f.J;b.data[1]=c;b.setZoom(d);d=new lg(_.P(b,3));d.data[0]=f.K-f.I;d.data[1]=f.L-f.J;d=new jg(_.P(b,4));d.data[0]=a;d.data[4]=_.wf(_.zf(_.R));d.data[5]=_.xf(_.zf(_.R)).toLowerCase();d.data[9]=!0;d.data[11]=!0;_.wg[13]&&(a=new hg(_.Rd(d,7)),a.data[0]=33,a.data[1]=3,a.data[7]=1);a=this.N+(0,window.unescape)("%3F");if(!hj){d=hj={b:-1,A:[]};c=new kg([]);
fj||(fj={b:-1,A:[,_.S,_.S]});c=_.L(c,fj);f=new lg([]);gj||(gj={b:-1,A:[]},gj.A=[,_.ji,_.ji,_.Jd(1)]);f=_.L(f,gj);g=new jg([]);if(!ej){var h=[];ej={b:-1,A:h};h[1]=_.U;h[2]=_.T;h[3]=_.T;h[5]=_.V;h[6]=_.V;cj||(cj={b:-1,A:[]},cj.A=[,_.U,_.Jd(1),_.ei,_.L(new dg([]),gg()),_.T,_.ei,_.ei,_.U,_.L(new dg([]),gg()),_.ei]);h[8]=_.Kd(cj);var l=new ig([]);dj||(dj={b:-1,A:[,_.mi,_.T]});h[9]=_.L(l,dj);h[10]=_.T;h[11]=_.T;h[12]=_.T;h[13]=_.mi;h[100]=_.T}g=_.L(g,ej);h=new of([]);if(!Wi){l=Wi={b:-1,A:[]};var n=new qf([]);
Yi||(Yi={b:-1,A:[,_.T,_.T]});n=_.L(n,Yi);var q=new pf([]);Xi||(Xi={b:-1,A:[,_.T]});l.A=[,,,,,,,,,,n,,_.L(q,Xi)]}d.A=[,c,_.U,_.ji,f,g,_.L(h,Wi)]}b=_.ui.b(b.data,hj);b=this.G(a+b)}}this.b&&(_.Tf(this.b,e),sg(this,b))}}};
_.k.div_changed=function(){var a=this.get("div"),b=this.f;if(a)if(b)a.appendChild(b);else{b=this.f=window.document.createElement("div");b.style.overflow="hidden";var c=this.b=window.document.createElement("img");_.G.addDomListener(b,"contextmenu",function(a){_.Mc(a);_.Oc(a)});c.ontouchstart=c.ontouchmove=c.ontouchend=c.ontouchcancel=function(a){_.Nc(a);_.Oc(a)};_.Tf(c,_.$h);a.appendChild(b);this.da()}else b&&(qg(b),this.f=null)};_.t(zg,_.Ud);_.k=zg.prototype;_.k.streetView_changed=function(){var a=this.get("streetView");a?a.set("standAlone",!1):this.set("streetView",this.__gm.j)};_.k.getDiv=function(){return this.__gm.R};_.k.panBy=function(a,b){var c=this.__gm;_.Q("map",function(){_.G.trigger(c,"panby",a,b)})};_.k.panTo=function(a){var b=this.__gm;a=_.Cc(a);_.Q("map",function(){_.G.trigger(b,"panto",a)})};_.k.panToBounds=function(a){var b=this.__gm,c=_.Kc(a);_.Q("map",function(){_.G.trigger(b,"pantolatlngbounds",c)})};
_.k.fitBounds=function(a,b){var c=this;a=_.Kc(a);_.Q("map",function(d){d.fitBounds(c,a,b)})};_.ed(zg.prototype,{bounds:null,streetView:Ki,center:_.fc(_.Cc),zoom:_.Wh,mapTypeId:_.Xh,projection:null,heading:_.Wh,tilt:_.Wh,clickableIcons:Vh});Ag.prototype.getMaxZoomAtLatLng=function(a,b){_.Q("maxzoom",function(c){c.getMaxZoomAtLatLng(a,b)})};_.t(Bg,_.K);Bg.prototype.changed=function(a){if("suppressInfoWindows"!=a&&"clickable"!=a){var b=this;_.Q("onion",function(a){a.b(b)})}};_.ed(Bg.prototype,{map:_.yi,tableId:_.Wh,query:_.fc(_.dc([_.Uh,_.cc(_.Ob,"not an Object")]))});_.t(_.Cg,_.K);_.Cg.prototype.map_changed=function(){var a=this;_.Q("overlay",function(b){b.qk(a)})};_.ed(_.Cg.prototype,{panes:null,projection:null,map:_.dc([_.yi,Ki])});var Fg=Hg(_.$b(_.F,"LatLng"));_.t(_.Jg,_.K);_.Jg.prototype.map_changed=_.Jg.prototype.visible_changed=function(){var a=this;_.Q("poly",function(b){b.b(a)})};_.Jg.prototype.center_changed=function(){_.G.trigger(this,"bounds_changed")};_.Jg.prototype.radius_changed=_.Jg.prototype.center_changed;_.Jg.prototype.getBounds=function(){var a=this.get("radius"),b=this.get("center");if(b&&_.x(a)){var c=this.get("map");c=c&&c.__gm.get("baseMapType");return _.Lf(b,a/_.Eg(c))}return null};
_.ed(_.Jg.prototype,{center:_.fc(_.Cc),draggable:_.Yh,editable:_.Yh,map:_.yi,radius:_.Wh,visible:_.Yh});_.t(Kg,_.K);Kg.prototype.map_changed=Kg.prototype.visible_changed=function(){var a=this;_.Q("poly",function(b){b.f(a)})};Kg.prototype.getPath=function(){return this.get("latLngs").getAt(0)};Kg.prototype.setPath=function(a){try{this.get("latLngs").setAt(0,Gg(a))}catch(b){_.Xb(b)}};_.ed(Kg.prototype,{draggable:_.Yh,editable:_.Yh,map:_.yi,visible:_.Yh});_.t(_.Lg,Kg);_.Lg.prototype.Ja=!0;_.Lg.prototype.getPaths=function(){return this.get("latLngs")};_.Lg.prototype.setPaths=function(a){this.set("latLngs",Ig(a))};_.t(_.Mg,Kg);_.Mg.prototype.Ja=!1;_.t(_.Ng,_.K);_.Ng.prototype.map_changed=_.Ng.prototype.visible_changed=function(){var a=this;_.Q("poly",function(b){b.j(a)})};_.ed(_.Ng.prototype,{draggable:_.Yh,editable:_.Yh,bounds:_.fc(_.Kc),map:_.yi,visible:_.Yh});_.t(Og,_.K);Og.prototype.map_changed=function(){var a=this;_.Q("streetview",function(b){b.pk(a)})};_.ed(Og.prototype,{map:_.yi});_.Pg.prototype.getPanorama=function(a,b){var c=this.b||void 0;_.Q("streetview",function(d){_.Q("geometry",function(e){d.ql(a,b,e.computeHeading,e.computeOffset,c)})})};_.Pg.prototype.getPanoramaByLocation=function(a,b,c){this.getPanorama({location:a,radius:b,preference:50>(b||0)?"best":"nearest"},c)};_.Pg.prototype.getPanoramaById=function(a,b){this.getPanorama({pano:a},b)};_.t(_.Qg,_.K);_.k=_.Qg.prototype;_.k.getTile=function(a,b,c){if(!a||!c)return null;var d=c.createElement("div");c={Z:a,zoom:b,Sb:null};d.__gmimt=c;_.id(this.b,d);var e=Rg(this);1!=e&&(d.style.opacity=e);if(this.f){e=this.tileSize||new _.D(256,256);var f=this.j(a,b);c.Sb=this.f({T:a.x,U:a.y,$:b},e,d,f,function(){_.G.trigger(d,"load")})}return d};_.k.releaseTile=function(a){a&&this.b.contains(a)&&(this.b.remove(a),(a=a.__gmimt.Sb)&&a.release())};_.k.Ve=_.ua(8);
_.k.opacity_changed=function(){var a=Rg(this);this.b.forEach(function(b){return b.style.opacity=a})};_.k.Oc=!0;_.ed(_.Qg.prototype,{opacity:_.Wh});_.t(_.Sg,_.K);_.Sg.prototype.getTile=Qh;_.Sg.prototype.tileSize=new _.D(256,256);_.Sg.prototype.Oc=!0;_.t(_.Tg,_.Sg);_.t(_.Ug,_.K);_.ed(_.Ug.prototype,{attribution:_.fc(Ii),place:_.fc(Ji)});var jj={Animation:{BOUNCE:1,DROP:2,Uo:3,Po:4},Circle:_.Jg,ControlPosition:_.Nf,Data:Ge,GroundOverlay:_.Xe,ImageMapType:_.Qg,InfoWindow:_.Pe,LatLng:_.F,LatLngBounds:_.Dc,MVCArray:_.gd,MVCObject:_.K,Map:zg,MapTypeControlStyle:{DEFAULT:0,HORIZONTAL_BAR:1,DROPDOWN_MENU:2,INSET:3,INSET_LARGE:4},MapTypeId:_.Sh,MapTypeRegistry:Td,Marker:_.Me,MarkerImage:function(a,b,c,d,e){this.url=a;this.size=b||e;this.origin=c;this.anchor=d;this.scaledSize=e;this.labelOrigin=null},NavigationControlStyle:{DEFAULT:0,SMALL:1,
ANDROID:2,ZOOM_PAN:3,Vo:4,Zj:5},OverlayView:_.Cg,Point:_.z,Polygon:_.Lg,Polyline:_.Mg,Rectangle:_.Ng,ScaleControlStyle:{DEFAULT:0},Size:_.D,StreetViewPreference:_.aj,StreetViewSource:_.bj,StrokePosition:{CENTER:0,INSIDE:1,OUTSIDE:2},SymbolPath:xi,ZoomControlStyle:{DEFAULT:0,SMALL:1,LARGE:2,Zj:3},event:_.G};
_.Gb(jj,{BicyclingLayer:_.Ze,DirectionsRenderer:Se,DirectionsService:Te,DirectionsStatus:{OK:_.ia,UNKNOWN_ERROR:_.la,OVER_QUERY_LIMIT:_.ja,REQUEST_DENIED:_.ka,INVALID_REQUEST:_.ba,ZERO_RESULTS:_.ma,MAX_WAYPOINTS_EXCEEDED:_.fa,NOT_FOUND:_.ha},DirectionsTravelMode:_.Ai,DirectionsUnitSystem:_.zi,DistanceMatrixService:Ue,DistanceMatrixStatus:{OK:_.ia,INVALID_REQUEST:_.ba,OVER_QUERY_LIMIT:_.ja,REQUEST_DENIED:_.ka,UNKNOWN_ERROR:_.la,MAX_ELEMENTS_EXCEEDED:_.da,MAX_DIMENSIONS_EXCEEDED:_.ca},DistanceMatrixElementStatus:{OK:_.ia,
NOT_FOUND:_.ha,ZERO_RESULTS:_.ma},ElevationService:Ve,ElevationStatus:{OK:_.ia,UNKNOWN_ERROR:_.la,OVER_QUERY_LIMIT:_.ja,REQUEST_DENIED:_.ka,INVALID_REQUEST:_.ba,Lo:"DATA_NOT_AVAILABLE"},FusionTablesLayer:Bg,Geocoder:_.We,GeocoderLocationType:{ROOFTOP:"ROOFTOP",RANGE_INTERPOLATED:"RANGE_INTERPOLATED",GEOMETRIC_CENTER:"GEOMETRIC_CENTER",APPROXIMATE:"APPROXIMATE"},GeocoderStatus:{OK:_.ia,UNKNOWN_ERROR:_.la,OVER_QUERY_LIMIT:_.ja,REQUEST_DENIED:_.ka,INVALID_REQUEST:_.ba,ZERO_RESULTS:_.ma,ERROR:_.aa},KmlLayer:Ye,
KmlLayerStatus:_.Vi,MaxZoomService:Ag,MaxZoomStatus:{OK:_.ia,ERROR:_.aa},SaveWidget:_.Ug,StreetViewCoverageLayer:Og,StreetViewPanorama:Of,StreetViewService:_.Pg,StreetViewStatus:{OK:_.ia,UNKNOWN_ERROR:_.la,ZERO_RESULTS:_.ma},StyledMapType:_.Tg,TrafficLayer:$e,TrafficModel:_.Bi,TransitLayer:af,TransitMode:_.Ci,TransitRoutePreference:_.Di,TravelMode:_.Ai,UnitSystem:_.zi});_.Gb(Ge,{Feature:_.le,Geometry:Vd,GeometryCollection:_.qe,LineString:_.se,LinearRing:_.te,MultiLineString:_.ve,MultiPoint:_.we,MultiPolygon:_.De,Point:_.Wd,Polygon:_.Be});_.je("main",{});var ah=/'/g,bh;var Je=arguments[0];
window.google.maps.Load(function(a,b){var c=window.google.maps;fh();var d=gh(c);_.R=new uf(a);_.kj=Math.random()<_.N(_.R,0,1);_.lj=Math.round(1E15*Math.random()).toString(36);_.yg=ch();_.Ui=dh();_.Zi=new _.gd;_.Ef=b;for(a=0;a<_.Sd(_.R,8);++a)_.wg[_.Qd(_.R,8,a)]=!0;a=new _.sf(_.R.data[3]);Ke(_.O(a,0));_.Fb(jj,function(a,b){c[a]=b});c.version=_.O(a,1);window.setTimeout(function(){ke(["util","stats"],function(a,b){a.f.b();a.j();d&&b.b.b({ev:"api_alreadyloaded",client:_.O(_.R,6),key:_.yf()})})},5E3);
Gf=new Ff;(a=_.O(_.R,11))&&ke(_.Pd(_.R,12),eh(a),!0)});}).call(this,{});


/*!
 *  GMAP3 Plugin for JQuery
 *  Version   : 5.1.1
 *  Date      : 2013-05-25
 *  Licence   : GPL v3 : http://www.gnu.org/licenses/gpl.html
 *  Author    : DEMONTE Jean-Baptiste
 *  Contact   : jbdemonte@gmail.com
 *  Web site  : http://gmap3.net
 */
(function(y,t){var z,i=0;function J(){if(!z){z={verbose:false,queryLimit:{attempt:5,delay:250,random:250},classes:{Map:google.maps.Map,Marker:google.maps.Marker,InfoWindow:google.maps.InfoWindow,Circle:google.maps.Circle,Rectangle:google.maps.Rectangle,OverlayView:google.maps.OverlayView,StreetViewPanorama:google.maps.StreetViewPanorama,KmlLayer:google.maps.KmlLayer,TrafficLayer:google.maps.TrafficLayer,BicyclingLayer:google.maps.BicyclingLayer,GroundOverlay:google.maps.GroundOverlay,StyledMapType:google.maps.StyledMapType,ImageMapType:google.maps.ImageMapType},map:{mapTypeId:google.maps.MapTypeId.ROADMAP,center:[46.578498,2.457275],zoom:2},overlay:{pane:"floatPane",content:"",offset:{x:0,y:0}},geoloc:{getCurrentPosition:{maximumAge:60000,timeout:5000}}}}}function k(M,L){return M!==t?M:"gmap3_"+(L?i+1:++i)}function d(L){var O=function(P){return parseInt(P,10)},N=google.maps.version.split(".").map(O),M;L=L.split(".").map(O);for(M=0;M<L.length;M++){if(N.hasOwnProperty(M)){if(N[M]<L[M]){return false}}else{return false}}return true}function n(P,L,N,Q,O){if(L.todo.events||L.todo.onces){var M={id:Q,data:L.todo.data,tag:L.todo.tag};if(L.todo.events){y.each(L.todo.events,function(R,U){var T=P,S=U;if(y.isArray(U)){T=U[0];S=U[1]}google.maps.event.addListener(N,R,function(V){S.apply(T,[O?O:N,V,M])})})}if(L.todo.onces){y.each(L.todo.onces,function(R,U){var T=P,S=U;if(y.isArray(U)){T=U[0];S=U[1]}google.maps.event.addListenerOnce(N,R,function(V){S.apply(T,[O?O:N,V,M])})})}}}function l(){var L=[];this.empty=function(){return !L.length};this.add=function(M){L.push(M)};this.get=function(){return L.length?L[0]:false};this.ack=function(){L.shift()}}function w(T,L,N){var R={},P=this,Q,S={latLng:{map:false,marker:false,infowindow:false,circle:false,overlay:false,getlatlng:false,getmaxzoom:false,getelevation:false,streetviewpanorama:false,getaddress:true},geoloc:{getgeoloc:true}};if(typeof N==="string"){N=M(N)}function M(V){var U={};U[V]={};return U}function O(){var U;for(U in N){if(U in R){continue}return U}}this.run=function(){var U,V;while(U=O()){if(typeof T[U]==="function"){Q=U;V=y.extend(true,{},z[U]||{},N[U].options||{});if(U in S.latLng){if(N[U].values){x(N[U].values,T,T[U],{todo:N[U],opts:V,session:R})}else{v(T,T[U],S.latLng[U],{todo:N[U],opts:V,session:R})}}else{if(U in S.geoloc){o(T,T[U],{todo:N[U],opts:V,session:R})}else{T[U].apply(T,[{todo:N[U],opts:V,session:R}])}}return}else{R[U]=null}}L.apply(T,[N,R])};this.ack=function(U){R[Q]=U;P.run.apply(P,[])}}function c(N){var L,M=[];for(L in N){M.push(L)}return M}function b(N,Q){var L={};if(N.todo){for(var M in N.todo){if((M!=="options")&&(M!=="values")){L[M]=N.todo[M]}}}var O,P=["data","tag","id","events","onces"];for(O=0;O<P.length;O++){A(L,P[O],Q,N.todo)}L.options=y.extend({},N.opts||{},Q.options||{});return L}function A(N,M){for(var L=2;L<arguments.length;L++){if(M in arguments[L]){N[M]=arguments[L][M];return}}}function r(){var L=[];this.get=function(S){if(L.length){var P,O,N,R,M,Q=c(S);for(P=0;P<L.length;P++){R=L[P];M=Q.length==R.keys.length;for(O=0;(O<Q.length)&&M;O++){N=Q[O];M=N in R.request;if(M){if((typeof S[N]==="object")&&("equals" in S[N])&&(typeof S[N]==="function")){M=S[N].equals(R.request[N])}else{M=S[N]===R.request[N]}}}if(M){return R.results}}}};this.store=function(N,M){L.push({request:N,keys:c(N),results:M})}}function e(Q,P,O,L){var N=this,M=[];z.classes.OverlayView.call(this);this.setMap(Q);this.onAdd=function(){var R=this.getPanes();if(P.pane in R){y(R[P.pane]).append(L)}y.each("dblclick click mouseover mousemove mouseout mouseup mousedown".split(" "),function(T,S){M.push(google.maps.event.addDomListener(L[0],S,function(U){y.Event(U).stopPropagation();google.maps.event.trigger(N,S,[U]);N.draw()}))});M.push(google.maps.event.addDomListener(L[0],"contextmenu",function(S){y.Event(S).stopPropagation();google.maps.event.trigger(N,"rightclick",[S]);N.draw()}))};this.getPosition=function(){return O};this.draw=function(){var R=this.getProjection().fromLatLngToDivPixel(O);L.css("left",(R.x+P.offset.x)+"px").css("top",(R.y+P.offset.y)+"px")};this.onRemove=function(){for(var R=0;R<M.length;R++){google.maps.event.removeListener(M[R])}L.remove()};this.hide=function(){L.hide()};this.show=function(){L.show()};this.toggle=function(){if(L){if(L.is(":visible")){this.show()}else{this.hide()}}};this.toggleDOM=function(){if(this.getMap()){this.setMap(null)}else{this.setMap(Q)}};this.getDOMElement=function(){return L[0]}}function f(O,L){function M(){this.onAdd=function(){};this.onRemove=function(){};this.draw=function(){};return z.classes.OverlayView.apply(this,[])}M.prototype=z.classes.OverlayView.prototype;var N=new M();N.setMap(O);return N}function F(ae,ao,aa){var an=false,ai=false,af=false,Z=false,W=true,V=this,N=[],T={},ad={},U={},aj=[],ah=[],O=[],ak=f(ao,aa.radius),Y,ap,am,P,Q;S();function L(aq){if(!aj[aq]){delete ah[aq].options.map;aj[aq]=new z.classes.Marker(ah[aq].options);n(ae,{todo:ah[aq]},aj[aq],ah[aq].id)}}this.getById=function(aq){if(aq in ad){L(ad[aq]);return aj[ad[aq]]}return false};this.rm=function(ar){var aq=ad[ar];if(aj[aq]){aj[aq].setMap(null)}delete aj[aq];aj[aq]=false;delete ah[aq];ah[aq]=false;delete O[aq];O[aq]=false;delete ad[ar];delete U[aq];ai=true};this.clearById=function(aq){if(aq in ad){this.rm(aq);return true}};this.clear=function(az,av,aA){var ar,ay,at,aw,au,ax=[],aq=C(aA);if(az){ar=ah.length-1;ay=-1;at=-1}else{ar=0;ay=ah.length;at=1}for(aw=ar;aw!=ay;aw+=at){if(ah[aw]){if(!aq||aq(ah[aw].tag)){ax.push(U[aw]);if(av||az){break}}}}for(au=0;au<ax.length;au++){this.rm(ax[au])}};this.add=function(aq,ar){aq.id=k(aq.id);this.clearById(aq.id);ad[aq.id]=aj.length;U[aj.length]=aq.id;aj.push(null);ah.push(aq);O.push(ar);ai=true};this.addMarker=function(ar,aq){aq=aq||{};aq.id=k(aq.id);this.clearById(aq.id);if(!aq.options){aq.options={}}aq.options.position=ar.getPosition();n(ae,{todo:aq},ar,aq.id);ad[aq.id]=aj.length;U[aj.length]=aq.id;aj.push(ar);ah.push(aq);O.push(aq.data||{});ai=true};this.todo=function(aq){return ah[aq]};this.value=function(aq){return O[aq]};this.marker=function(aq){if(aq in aj){L(aq);return aj[aq]}return false};this.markerIsSet=function(aq){return Boolean(aj[aq])};this.setMarker=function(ar,aq){aj[ar]=aq};this.store=function(aq,ar,at){T[aq.ref]={obj:ar,shadow:at}};this.free=function(){for(var aq=0;aq<N.length;aq++){google.maps.event.removeListener(N[aq])}N=[];y.each(T,function(ar){ac(ar)});T={};y.each(ah,function(ar){ah[ar]=null});ah=[];y.each(aj,function(ar){if(aj[ar]){aj[ar].setMap(null);delete aj[ar]}});aj=[];y.each(O,function(ar){delete O[ar]});O=[];ad={};U={}};this.filter=function(aq){am=aq;ag()};this.enable=function(aq){if(W!=aq){W=aq;ag()}};this.display=function(aq){P=aq};this.error=function(aq){Q=aq};this.beginUpdate=function(){an=true};this.endUpdate=function(){an=false;if(ai){ag()}};this.autofit=function(ar){for(var aq=0;aq<ah.length;aq++){if(ah[aq]){ar.extend(ah[aq].options.position)}}};function S(){ap=ak.getProjection();if(!ap){setTimeout(function(){S.apply(V,[])},25);return}Z=true;N.push(google.maps.event.addListener(ao,"zoom_changed",function(){al()}));N.push(google.maps.event.addListener(ao,"bounds_changed",function(){al()}));ag()}function ac(aq){if(typeof T[aq]==="object"){if(typeof(T[aq].obj.setMap)==="function"){T[aq].obj.setMap(null)}if(typeof(T[aq].obj.remove)==="function"){T[aq].obj.remove()}if(typeof(T[aq].shadow.remove)==="function"){T[aq].obj.remove()}if(typeof(T[aq].shadow.setMap)==="function"){T[aq].shadow.setMap(null)}delete T[aq].obj;delete T[aq].shadow}else{if(aj[aq]){aj[aq].setMap(null)}}delete T[aq]}function M(){var ay,ax,aw,au,av,at,ar,aq;if(arguments[0] instanceof google.maps.LatLng){ay=arguments[0].lat();aw=arguments[0].lng();if(arguments[1] instanceof google.maps.LatLng){ax=arguments[1].lat();au=arguments[1].lng()}else{ax=arguments[1];au=arguments[2]}}else{ay=arguments[0];aw=arguments[1];if(arguments[2] instanceof google.maps.LatLng){ax=arguments[2].lat();au=arguments[2].lng()}else{ax=arguments[2];au=arguments[3]}}av=Math.PI*ay/180;at=Math.PI*aw/180;ar=Math.PI*ax/180;aq=Math.PI*au/180;return 1000*6371*Math.acos(Math.min(Math.cos(av)*Math.cos(ar)*Math.cos(at)*Math.cos(aq)+Math.cos(av)*Math.sin(at)*Math.cos(ar)*Math.sin(aq)+Math.sin(av)*Math.sin(ar),1))}function R(){var aq=M(ao.getCenter(),ao.getBounds().getNorthEast()),ar=new google.maps.Circle({center:ao.getCenter(),radius:1.25*aq});return ar.getBounds()}function X(){var ar={},aq;for(aq in T){ar[aq]=true}return ar}function al(){clearTimeout(Y);Y=setTimeout(function(){ag()},25)}function ab(ar){var au=ap.fromLatLngToDivPixel(ar),at=ap.fromDivPixelToLatLng(new google.maps.Point(au.x+aa.radius,au.y-aa.radius)),aq=ap.fromDivPixelToLatLng(new google.maps.Point(au.x-aa.radius,au.y+aa.radius));return new google.maps.LatLngBounds(aq,at)}function ag(){if(an||af||!Z){return}var aE=[],aG={},aF=ao.getZoom(),aH=("maxZoom" in aa)&&(aF>aa.maxZoom),aw=X(),av,au,at,aA,ar=false,aq,aD,ay,az,aB,aC,ax;ai=false;if(aF>3){aq=R();ar=aq.getSouthWest().lng()<aq.getNorthEast().lng()}for(av=0;av<ah.length;av++){if(ah[av]&&(!ar||aq.contains(ah[av].options.position))&&(!am||am(O[av]))){aE.push(av)}}while(1){av=0;while(aG[av]&&(av<aE.length)){av++}if(av==aE.length){break}aA=[];if(W&&!aH){ax=10;do{az=aA;aA=[];ax--;if(az.length){ay=aq.getCenter()}else{ay=ah[aE[av]].options.position}aq=ab(ay);for(au=av;au<aE.length;au++){if(aG[au]){continue}if(aq.contains(ah[aE[au]].options.position)){aA.push(au)}}}while((az.length<aA.length)&&(aA.length>1)&&ax)}else{for(au=av;au<aE.length;au++){if(aG[au]){continue}aA.push(au);break}}aD={indexes:[],ref:[]};aB=aC=0;for(at=0;at<aA.length;at++){aG[aA[at]]=true;aD.indexes.push(aE[aA[at]]);aD.ref.push(aE[aA[at]]);aB+=ah[aE[aA[at]]].options.position.lat();aC+=ah[aE[aA[at]]].options.position.lng()}aB/=aA.length;aC/=aA.length;aD.latLng=new google.maps.LatLng(aB,aC);aD.ref=aD.ref.join("-");if(aD.ref in aw){delete aw[aD.ref]}else{if(aA.length===1){T[aD.ref]=true}P(aD)}}y.each(aw,function(aI){ac(aI)});af=false}}function a(M,L){this.id=function(){return M};this.filter=function(N){L.filter(N)};this.enable=function(){L.enable(true)};this.disable=function(){L.enable(false)};this.add=function(O,N,P){if(!P){L.beginUpdate()}L.addMarker(O,N);if(!P){L.endUpdate()}};this.getById=function(N){return L.getById(N)};this.clearById=function(P,O){var N;if(!O){L.beginUpdate()}N=L.clearById(P);if(!O){L.endUpdate()}return N};this.clear=function(P,Q,N,O){if(!O){L.beginUpdate()}L.clear(P,Q,N);if(!O){L.endUpdate()}}}function D(){var M={},N={};function L(P){return{id:P.id,name:P.name,object:P.obj,tag:P.tag,data:P.data}}this.add=function(R,Q,T,S){var P=R.todo||{},U=k(P.id);if(!M[Q]){M[Q]=[]}if(U in N){this.clearById(U)}N[U]={obj:T,sub:S,name:Q,id:U,tag:P.tag,data:P.data};M[Q].push(U);return U};this.getById=function(R,Q,P){if(R in N){if(Q){return N[R].sub}else{if(P){return L(N[R])}}return N[R].obj}return false};this.get=function(R,T,P,S){var V,U,Q=C(P);if(!M[R]||!M[R].length){return null}V=M[R].length;while(V){V--;U=M[R][T?V:M[R].length-V-1];if(U&&N[U]){if(Q&&!Q(N[U].tag)){continue}return S?L(N[U]):N[U].obj}}return null};this.all=function(S,Q,T){var P=[],R=C(Q),U=function(X){var V,W;for(V=0;V<M[X].length;V++){W=M[X][V];if(W&&N[W]){if(R&&!R(N[W].tag)){continue}P.push(T?L(N[W]):N[W].obj)}}};if(S in M){U(S)}else{if(S===t){for(S in M){U(S)}}}return P};function O(P){if(typeof(P.setMap)==="function"){P.setMap(null)}if(typeof(P.remove)==="function"){P.remove()}if(typeof(P.free)==="function"){P.free()}P=null}this.rm=function(S,Q,R){var P,T;if(!M[S]){return false}if(Q){if(R){for(P=M[S].length-1;P>=0;P--){T=M[S][P];if(Q(N[T].tag)){break}}}else{for(P=0;P<M[S].length;P++){T=M[S][P];if(Q(N[T].tag)){break}}}}else{P=R?M[S].length-1:0}if(!(P in M[S])){return false}return this.clearById(M[S][P],P)};this.clearById=function(S,P){if(S in N){var R,Q=N[S].name;for(R=0;P===t&&R<M[Q].length;R++){if(S===M[Q][R]){P=R}}O(N[S].obj);if(N[S].sub){O(N[S].sub)}delete N[S];M[Q].splice(P,1);return true}return false};this.objGetById=function(R){var Q;if(M.clusterer){for(var P in M.clusterer){if((Q=N[M.clusterer[P]].obj.getById(R))!==false){return Q}}}return false};this.objClearById=function(Q){if(M.clusterer){for(var P in M.clusterer){if(N[M.clusterer[P]].obj.clearById(Q)){return true}}}return null};this.clear=function(V,U,W,P){var R,T,S,Q=C(P);if(!V||!V.length){V=[];for(R in M){V.push(R)}}else{V=g(V)}for(T=0;T<V.length;T++){S=V[T];if(U){this.rm(S,Q,true)}else{if(W){this.rm(S,Q,false)}else{while(this.rm(S,Q,false)){}}}}};this.objClear=function(S,R,T,Q){if(M.clusterer&&(y.inArray("marker",S)>=0||!S.length)){for(var P in M.clusterer){N[M.clusterer[P]].obj.clear(R,T,Q)}}}}var m={},H=new r();function p(){if(!m.geocoder){m.geocoder=new google.maps.Geocoder()}return m.geocoder}function G(){if(!m.directionsService){m.directionsService=new google.maps.DirectionsService()}return m.directionsService}function h(){if(!m.elevationService){m.elevationService=new google.maps.ElevationService()}return m.elevationService}function q(){if(!m.maxZoomService){m.maxZoomService=new google.maps.MaxZoomService()}return m.maxZoomService}function B(){if(!m.distanceMatrixService){m.distanceMatrixService=new google.maps.DistanceMatrixService()}return m.distanceMatrixService}function u(){if(z.verbose){var L,M=[];if(window.console&&(typeof console.error==="function")){for(L=0;L<arguments.length;L++){M.push(arguments[L])}console.error.apply(console,M)}else{M="";for(L=0;L<arguments.length;L++){M+=arguments[L].toString()+" "}alert(M)}}}function E(L){return(typeof(L)==="number"||typeof(L)==="string")&&L!==""&&!isNaN(L)}function g(N){var M,L=[];if(N!==t){if(typeof(N)==="object"){if(typeof(N.length)==="number"){L=N}else{for(M in N){L.push(N[M])}}}else{L.push(N)}}return L}function C(L){if(L){if(typeof L==="function"){return L}L=g(L);return function(N){if(N===t){return false}if(typeof N==="object"){for(var M=0;M<N.length;M++){if(y.inArray(N[M],L)>=0){return true}}return false}return y.inArray(N,L)>=0}}}function I(M,O,L){var N=O?M:null;if(!M||(typeof M==="string")){return N}if(M.latLng){return I(M.latLng)}if(M instanceof google.maps.LatLng){return M}else{if(E(M.lat)){return new google.maps.LatLng(M.lat,M.lng)}else{if(!L&&y.isArray(M)){if(!E(M[0])||!E(M[1])){return N}return new google.maps.LatLng(M[0],M[1])}}}return N}function j(M){var N,L;if(!M||M instanceof google.maps.LatLngBounds){return M||null}if(y.isArray(M)){if(M.length==2){N=I(M[0]);L=I(M[1])}else{if(M.length==4){N=I([M[0],M[1]]);L=I([M[2],M[3]])}}}else{if(("ne" in M)&&("sw" in M)){N=I(M.ne);L=I(M.sw)}else{if(("n" in M)&&("e" in M)&&("s" in M)&&("w" in M)){N=I([M.n,M.e]);L=I([M.s,M.w])}}}if(N&&L){return new google.maps.LatLngBounds(L,N)}return null}function v(T,L,O,S,P){var N=O?I(S.todo,false,true):false,R=N?{latLng:N}:(S.todo.address?(typeof(S.todo.address)==="string"?{address:S.todo.address}:S.todo.address):false),M=R?H.get(R):false,Q=this;if(R){P=P||0;if(M){S.latLng=M.results[0].geometry.location;S.results=M.results;S.status=M.status;L.apply(T,[S])}else{if(R.location){R.location=I(R.location)}if(R.bounds){R.bounds=j(R.bounds)}p().geocode(R,function(V,U){if(U===google.maps.GeocoderStatus.OK){H.store(R,{results:V,status:U});S.latLng=V[0].geometry.location;S.results=V;S.status=U;L.apply(T,[S])}else{if((U===google.maps.GeocoderStatus.OVER_QUERY_LIMIT)&&(P<z.queryLimit.attempt)){setTimeout(function(){v.apply(Q,[T,L,O,S,P+1])},z.queryLimit.delay+Math.floor(Math.random()*z.queryLimit.random))}else{u("geocode failed",U,R);S.latLng=S.results=false;S.status=U;L.apply(T,[S])}}})}}else{S.latLng=I(S.todo,false,true);L.apply(T,[S])}}function x(Q,L,R,M){var O=this,N=-1;function P(){do{N++}while((N<Q.length)&&!("address" in Q[N]));if(N>=Q.length){R.apply(L,[M]);return}v(O,function(S){delete S.todo;y.extend(Q[N],S);P.apply(O,[])},true,{todo:Q[N]})}P()}function o(L,O,M){var N=false;if(navigator&&navigator.geolocation){navigator.geolocation.getCurrentPosition(function(P){if(N){return}N=true;M.latLng=new google.maps.LatLng(P.coords.latitude,P.coords.longitude);O.apply(L,[M])},function(){if(N){return}N=true;M.latLng=false;O.apply(L,[M])},M.opts.getCurrentPosition)}else{M.latLng=false;O.apply(L,[M])}}function K(T){var S=this,U=new l(),V=new D(),N=null,P;this._plan=function(Z){for(var Y=0;Y<Z.length;Y++){U.add(new w(S,R,Z[Y]))}Q()};function Q(){if(!P&&(P=U.get())){P.run()}}function R(){P=null;U.ack();Q.call(S)}function X(Y){if(Y.todo.callback){var Z=Array.prototype.slice.call(arguments,1);if(typeof Y.todo.callback==="function"){Y.todo.callback.apply(T,Z)}else{if(y.isArray(Y.todo.callback)){if(typeof Y.todo.callback[1]==="function"){Y.todo.callback[1].apply(Y.todo.callback[0],Z)}}}}}function O(Y,Z,aa){if(aa){n(T,Y,Z,aa)}X(Y,Z);P.ack(Z)}function L(aa,Y){Y=Y||{};if(N){if(Y.todo&&Y.todo.options){if(Y.todo.options.center){Y.todo.options.center=I(Y.todo.options.center)}N.setOptions(Y.todo.options)}}else{var Z=Y.opts||y.extend(true,{},z.map,Y.todo&&Y.todo.options?Y.todo.options:{});Z.center=aa||I(Z.center);N=new z.classes.Map(T.get(0),Z)}}this.map=function(Y){L(Y.latLng,Y);n(T,Y,N);O(Y,N)};this.destroy=function(Y){V.clear();T.empty();if(N){N=null}O(Y,true)};this.infowindow=function(Z){var aa=[],Y="values" in Z.todo;if(!Y){if(Z.latLng){Z.opts.position=Z.latLng}Z.todo.values=[{options:Z.opts}]}y.each(Z.todo.values,function(ac,ad){var af,ae,ab=b(Z,ad);ab.options.position=ab.options.position?I(ab.options.position):I(ad.latLng);if(!N){L(ab.options.position)}ae=new z.classes.InfoWindow(ab.options);if(ae&&((ab.open===t)||ab.open)){if(Y){ae.open(N,ab.anchor?ab.anchor:t)}else{ae.open(N,ab.anchor?ab.anchor:(Z.latLng?t:(Z.session.marker?Z.session.marker:t)))}}aa.push(ae);af=V.add({todo:ab},"infowindow",ae);n(T,{todo:ab},ae,af)});O(Z,Y?aa:aa[0])};this.circle=function(Z){var aa=[],Y="values" in Z.todo;if(!Y){Z.opts.center=Z.latLng||I(Z.opts.center);Z.todo.values=[{options:Z.opts}]}if(!Z.todo.values.length){O(Z,false);return}y.each(Z.todo.values,function(ac,ad){var af,ae,ab=b(Z,ad);ab.options.center=ab.options.center?I(ab.options.center):I(ad);if(!N){L(ab.options.center)}ab.options.map=N;ae=new z.classes.Circle(ab.options);aa.push(ae);af=V.add({todo:ab},"circle",ae);n(T,{todo:ab},ae,af)});O(Z,Y?aa:aa[0])};this.overlay=function(aa,Z){var ab=[],Y="values" in aa.todo;if(!Y){aa.todo.values=[{latLng:aa.latLng,options:aa.opts}]}if(!aa.todo.values.length){O(aa,false);return}if(!e.__initialised){e.prototype=new z.classes.OverlayView();e.__initialised=true}y.each(aa.todo.values,function(ae,af){var ah,ag,ac=b(aa,af),ad=y(document.createElement("div")).css({border:"none",borderWidth:"0px",position:"absolute"});ad.append(ac.options.content);ag=new e(N,ac.options,I(ac)||I(af),ad);ab.push(ag);ad=null;if(!Z){ah=V.add(aa,"overlay",ag);n(T,{todo:ac},ag,ah)}});if(Z){return ab[0]}O(aa,Y?ab:ab[0])};this.getaddress=function(Y){X(Y,Y.results,Y.status);P.ack()};this.getlatlng=function(Y){X(Y,Y.results,Y.status);P.ack()};this.getmaxzoom=function(Y){q().getMaxZoomAtLatLng(Y.latLng,function(Z){X(Y,Z.status===google.maps.MaxZoomStatus.OK?Z.zoom:false,status);P.ack()})};this.getelevation=function(Z){var aa,Y=[],ab=function(ad,ac){X(Z,ac===google.maps.ElevationStatus.OK?ad:false,ac);P.ack()};if(Z.latLng){Y.push(Z.latLng)}else{Y=g(Z.todo.locations||[]);for(aa=0;aa<Y.length;aa++){Y[aa]=I(Y[aa])}}if(Y.length){h().getElevationForLocations({locations:Y},ab)}else{if(Z.todo.path&&Z.todo.path.length){for(aa=0;aa<Z.todo.path.length;aa++){Y.push(I(Z.todo.path[aa]))}}if(Y.length){h().getElevationAlongPath({path:Y,samples:Z.todo.samples},ab)}else{P.ack()}}};this.defaults=function(Y){y.each(Y.todo,function(Z,aa){if(typeof z[Z]==="object"){z[Z]=y.extend({},z[Z],aa)}else{z[Z]=aa}});P.ack(true)};this.rectangle=function(Z){var aa=[],Y="values" in Z.todo;if(!Y){Z.todo.values=[{options:Z.opts}]}if(!Z.todo.values.length){O(Z,false);return}y.each(Z.todo.values,function(ac,ad){var af,ae,ab=b(Z,ad);ab.options.bounds=ab.options.bounds?j(ab.options.bounds):j(ad);if(!N){L(ab.options.bounds.getCenter())}ab.options.map=N;ae=new z.classes.Rectangle(ab.options);aa.push(ae);af=V.add({todo:ab},"rectangle",ae);n(T,{todo:ab},ae,af)});O(Z,Y?aa:aa[0])};function M(Z,aa,ab){var ac=[],Y="values" in Z.todo;if(!Y){Z.todo.values=[{options:Z.opts}]}if(!Z.todo.values.length){O(Z,false);return}L();y.each(Z.todo.values,function(af,ah){var aj,ag,ae,ai,ad=b(Z,ah);if(ad.options[ab]){if(ad.options[ab][0][0]&&y.isArray(ad.options[ab][0][0])){for(ag=0;ag<ad.options[ab].length;ag++){for(ae=0;ae<ad.options[ab][ag].length;ae++){ad.options[ab][ag][ae]=I(ad.options[ab][ag][ae])}}}else{for(ag=0;ag<ad.options[ab].length;ag++){ad.options[ab][ag]=I(ad.options[ab][ag])}}}ad.options.map=N;ai=new google.maps[aa](ad.options);ac.push(ai);aj=V.add({todo:ad},aa.toLowerCase(),ai);n(T,{todo:ad},ai,aj)});O(Z,Y?ac:ac[0])}this.polyline=function(Y){M(Y,"Polyline","path")};this.polygon=function(Y){M(Y,"Polygon","paths")};this.trafficlayer=function(Y){L();var Z=V.get("trafficlayer");if(!Z){Z=new z.classes.TrafficLayer();Z.setMap(N);V.add(Y,"trafficlayer",Z)}O(Y,Z)};this.bicyclinglayer=function(Y){L();var Z=V.get("bicyclinglayer");if(!Z){Z=new z.classes.BicyclingLayer();Z.setMap(N);V.add(Y,"bicyclinglayer",Z)}O(Y,Z)};this.groundoverlay=function(Y){Y.opts.bounds=j(Y.opts.bounds);if(Y.opts.bounds){L(Y.opts.bounds.getCenter())}var aa,Z=new z.classes.GroundOverlay(Y.opts.url,Y.opts.bounds,Y.opts.opts);Z.setMap(N);aa=V.add(Y,"groundoverlay",Z);O(Y,Z,aa)};this.streetviewpanorama=function(Y){if(!Y.opts.opts){Y.opts.opts={}}if(Y.latLng){Y.opts.opts.position=Y.latLng}else{if(Y.opts.opts.position){Y.opts.opts.position=I(Y.opts.opts.position)}}if(Y.todo.divId){Y.opts.container=document.getElementById(Y.todo.divId)}else{if(Y.opts.container){Y.opts.container=y(Y.opts.container).get(0)}}var aa,Z=new z.classes.StreetViewPanorama(Y.opts.container,Y.opts.opts);if(Z){N.setStreetView(Z)}aa=V.add(Y,"streetviewpanorama",Z);O(Y,Z,aa)};this.kmllayer=function(Z){var aa=[],Y="values" in Z.todo;if(!Y){Z.todo.values=[{options:Z.opts}]}if(!Z.todo.values.length){O(Z,false);return}y.each(Z.todo.values,function(ad,ae){var ag,af,ac,ab=b(Z,ae);if(!N){L()}ac=ab.options;if(ab.options.opts){ac=ab.options.opts;if(ab.options.url){ac.url=ab.options.url}}ac.map=N;if(d("3.10")){af=new z.classes.KmlLayer(ac)}else{af=new z.classes.KmlLayer(ac.url,ac)}aa.push(af);ag=V.add({todo:ab},"kmllayer",af);n(T,{todo:ab},af,ag)});O(Z,Y?aa:aa[0])};this.panel=function(ab){L();var ad,Y=0,ac=0,aa,Z=y(document.createElement("div"));Z.css({position:"absolute",zIndex:1000,visibility:"hidden"});if(ab.opts.content){aa=y(ab.opts.content);Z.append(aa);T.first().prepend(Z);if(ab.opts.left!==t){Y=ab.opts.left}else{if(ab.opts.right!==t){Y=T.width()-aa.width()-ab.opts.right}else{if(ab.opts.center){Y=(T.width()-aa.width())/2}}}if(ab.opts.top!==t){ac=ab.opts.top}else{if(ab.opts.bottom!==t){ac=T.height()-aa.height()-ab.opts.bottom}else{if(ab.opts.middle){ac=(T.height()-aa.height())/2}}}Z.css({top:ac,left:Y,visibility:"visible"})}ad=V.add(ab,"panel",Z);O(ab,Z,ad);Z=null};function W(aa){var af=new F(T,N,aa),Y={},ab={},ae=[],ad=/^[0-9]+$/,ac,Z;for(Z in aa){if(ad.test(Z)){ae.push(1*Z);ab[Z]=aa[Z];ab[Z].width=ab[Z].width||0;ab[Z].height=ab[Z].height||0}else{Y[Z]=aa[Z]}}ae.sort(function(ah,ag){return ah>ag});if(Y.calculator){ac=function(ag){var ah=[];y.each(ag,function(aj,ai){ah.push(af.value(ai))});return Y.calculator.apply(T,[ah])}}else{ac=function(ag){return ag.length}}af.error(function(){u.apply(S,arguments)});af.display(function(ag){var ai,aj,am,ak,al,ah=ac(ag.indexes);if(aa.force||ah>1){for(ai=0;ai<ae.length;ai++){if(ae[ai]<=ah){aj=ab[ae[ai]]}}}if(aj){al=aj.offset||[-aj.width/2,-aj.height/2];am=y.extend({},Y);am.options=y.extend({pane:"overlayLayer",content:aj.content?aj.content.replace("CLUSTER_COUNT",ah):"",offset:{x:("x" in al?al.x:al[0])||0,y:("y" in al?al.y:al[1])||0}},Y.options||{});ak=S.overlay({todo:am,opts:am.options,latLng:I(ag)},true);am.options.pane="floatShadow";am.options.content=y(document.createElement("div")).width(aj.width+"px").height(aj.height+"px").css({cursor:"pointer"});shadow=S.overlay({todo:am,opts:am.options,latLng:I(ag)},true);Y.data={latLng:I(ag),markers:[]};y.each(ag.indexes,function(ao,an){Y.data.markers.push(af.value(an));if(af.markerIsSet(an)){af.marker(an).setMap(null)}});n(T,{todo:Y},shadow,t,{main:ak,shadow:shadow});af.store(ag,ak,shadow)}else{y.each(ag.indexes,function(ao,an){af.marker(an).setMap(N)})}});return af}this.marker=function(aa){var Y="values" in aa.todo,ad=!N;if(!Y){aa.opts.position=aa.latLng||I(aa.opts.position);aa.todo.values=[{options:aa.opts}]}if(!aa.todo.values.length){O(aa,false);return}if(ad){L()}if(aa.todo.cluster&&!N.getBounds()){google.maps.event.addListenerOnce(N,"bounds_changed",function(){S.marker.apply(S,[aa])});return}if(aa.todo.cluster){var Z,ab;if(aa.todo.cluster instanceof a){Z=aa.todo.cluster;ab=V.getById(Z.id(),true)}else{ab=W(aa.todo.cluster);Z=new a(k(aa.todo.id,true),ab);V.add(aa,"clusterer",Z,ab)}ab.beginUpdate();y.each(aa.todo.values,function(af,ag){var ae=b(aa,ag);ae.options.position=ae.options.position?I(ae.options.position):I(ag);ae.options.map=N;if(ad){N.setCenter(ae.options.position);ad=false}ab.add(ae,ag)});ab.endUpdate();O(aa,Z)}else{var ac=[];y.each(aa.todo.values,function(af,ag){var ai,ah,ae=b(aa,ag);ae.options.position=ae.options.position?I(ae.options.position):I(ag);ae.options.map=N;if(ad){N.setCenter(ae.options.position);ad=false}ah=new z.classes.Marker(ae.options);ac.push(ah);ai=V.add({todo:ae},"marker",ah);n(T,{todo:ae},ah,ai)});O(aa,Y?ac:ac[0])}};this.getroute=function(Y){Y.opts.origin=I(Y.opts.origin,true);Y.opts.destination=I(Y.opts.destination,true);G().route(Y.opts,function(aa,Z){X(Y,Z==google.maps.DirectionsStatus.OK?aa:false,Z);P.ack()})};this.directionsrenderer=function(Y){Y.opts.map=N;var aa,Z=new google.maps.DirectionsRenderer(Y.opts);if(Y.todo.divId){Z.setPanel(document.getElementById(Y.todo.divId))}else{if(Y.todo.container){Z.setPanel(y(Y.todo.container).get(0))}}aa=V.add(Y,"directionsrenderer",Z);O(Y,Z,aa)};this.getgeoloc=function(Y){O(Y,Y.latLng)};this.styledmaptype=function(Y){L();var Z=new z.classes.StyledMapType(Y.todo.styles,Y.opts);N.mapTypes.set(Y.todo.id,Z);O(Y,Z)};this.imagemaptype=function(Y){L();var Z=new z.classes.ImageMapType(Y.opts);N.mapTypes.set(Y.todo.id,Z);O(Y,Z)};this.autofit=function(Y){var Z=new google.maps.LatLngBounds();y.each(V.all(),function(aa,ab){if(ab.getPosition){Z.extend(ab.getPosition())}else{if(ab.getBounds){Z.extend(ab.getBounds().getNorthEast());Z.extend(ab.getBounds().getSouthWest())}else{if(ab.getPaths){ab.getPaths().forEach(function(ac){ac.forEach(function(ad){Z.extend(ad)})})}else{if(ab.getPath){ab.getPath().forEach(function(ac){Z.extend(ac);""})}else{if(ab.getCenter){Z.extend(ab.getCenter())}else{if(ab instanceof a){ab=V.getById(ab.id(),true);if(ab){ab.autofit(Z)}}}}}}}});if(!Z.isEmpty()&&(!N.getBounds()||!N.getBounds().equals(Z))){if("maxZoom" in Y.todo){google.maps.event.addListenerOnce(N,"bounds_changed",function(){if(this.getZoom()>Y.todo.maxZoom){this.setZoom(Y.todo.maxZoom)}})}N.fitBounds(Z)}O(Y,true)};this.clear=function(Y){if(typeof Y.todo==="string"){if(V.clearById(Y.todo)||V.objClearById(Y.todo)){O(Y,true);return}Y.todo={name:Y.todo}}if(Y.todo.id){y.each(g(Y.todo.id),function(Z,aa){V.clearById(aa)||V.objClearById(aa)})}else{V.clear(g(Y.todo.name),Y.todo.last,Y.todo.first,Y.todo.tag);V.objClear(g(Y.todo.name),Y.todo.last,Y.todo.first,Y.todo.tag)}O(Y,true)};this.exec=function(Y){var Z=this;y.each(g(Y.todo.func),function(aa,ab){y.each(Z.get(Y.todo,true,Y.todo.hasOwnProperty("full")?Y.todo.full:true),function(ac,ad){ab.call(T,ad)})});O(Y,true)};this.get=function(aa,ad,ac){var Z,ab,Y=ad?aa:aa.todo;if(!ad){ac=Y.full}if(typeof Y==="string"){ab=V.getById(Y,false,ac)||V.objGetById(Y);if(ab===false){Z=Y;Y={}}}else{Z=Y.name}if(Z==="map"){ab=N}if(!ab){ab=[];if(Y.id){y.each(g(Y.id),function(ae,af){ab.push(V.getById(af,false,ac)||V.objGetById(af))});if(!y.isArray(Y.id)){ab=ab[0]}}else{y.each(Z?g(Z):[t],function(af,ag){var ae;if(Y.first){ae=V.get(ag,false,Y.tag,ac);if(ae){ab.push(ae)}}else{if(Y.all){y.each(V.all(ag,Y.tag,ac),function(ai,ah){ab.push(ah)})}else{ae=V.get(ag,true,Y.tag,ac);if(ae){ab.push(ae)}}}});if(!Y.all&&!y.isArray(Z)){ab=ab[0]}}}ab=y.isArray(ab)||!Y.all?ab:[ab];if(ad){return ab}else{O(aa,ab)}};this.getdistance=function(Y){var Z;Y.opts.origins=g(Y.opts.origins);for(Z=0;Z<Y.opts.origins.length;Z++){Y.opts.origins[Z]=I(Y.opts.origins[Z],true)}Y.opts.destinations=g(Y.opts.destinations);for(Z=0;Z<Y.opts.destinations.length;Z++){Y.opts.destinations[Z]=I(Y.opts.destinations[Z],true)}B().getDistanceMatrix(Y.opts,function(ab,aa){X(Y,aa===google.maps.DistanceMatrixStatus.OK?ab:false,aa);P.ack()})};this.trigger=function(Z){if(typeof Z.todo==="string"){google.maps.event.trigger(N,Z.todo)}else{var Y=[N,Z.todo.eventName];if(Z.todo.var_args){y.each(Z.todo.var_args,function(ab,aa){Y.push(aa)})}google.maps.event.trigger.apply(google.maps.event,Y)}X(Z);P.ack()}}function s(M){var L;if(!typeof M==="object"||!M.hasOwnProperty("get")){return false}for(L in M){if(L!=="get"){return false}}return !M.get.hasOwnProperty("callback")}y.fn.gmap3=function(){var M,O=[],N=true,L=[];J();for(M=0;M<arguments.length;M++){if(arguments[M]){O.push(arguments[M])}}if(!O.length){O.push("map")}y.each(this,function(){var P=y(this),Q=P.data("gmap3");N=false;if(!Q){Q=new K(P);P.data("gmap3",Q)}if(O.length===1&&(O[0]==="get"||s(O[0]))){if(O[0]==="get"){L.push(Q.get("map",true))}else{L.push(Q.get(O[0].get,true,O[0].get.full))}}else{Q._plan(O)}});if(L.length){if(L.length===1){return L[0]}else{return L}}return this}})(jQuery);
/*
  * @package Spike
  * @subpackage Spike HTML
  * 
  * Template Scripts
  * Created by Tripples
  
   1.    Style Switcher
   2.    Navigation
   3.    Fixed Header
   4.    Main Slideshow (Carousel)
   5.    Counter
   6.    Owl Carousel
   7.    Flex Slider
   8.    Wow Animation
   9.    Contact Map
   10.   Video Background
   11.   Back To Top

  
*/


jQuery(function($) {
  "use strict";


   /* ----------------------------------------------------------- */
   /*  Style Switcher
   /* ----------------------------------------------------------- */

    (function($) { "use strict";
       $(document).ready(function(){
           $('.style-switch-button').click(function(){
           $('.style-switch-wrapper').toggleClass('active');
           });
           $('a.close-styler').click(function(){
           $('.style-switch-wrapper').removeClass('active');
           });
      });
    })(jQuery);


    /* ----------------------------------------------------------- */
  /*  Header
  /* ----------------------------------------------------------- */

   $(function(){
      
      $('a.page-scroll').bind('click', function(event) {
         var $anchor = $(this);
         $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top -62
         }, 1000, 'easeInOutExpo');
         event.preventDefault();
      });
      $('body').scrollspy({ target: '#header', offset:72 });
   });

   if (window.location.hash){
     $('html, body').stop().animate({
      scrollTop: $(window.location.hash).offset().top -62
    }, 1000, 'easeInOutExpo');
   }




   /* ----------------------------------------------------------- */
   /*  Fixed header
   /* ----------------------------------------------------------- */

   $(window).on('scroll', function(){

        if( $(window).scrollTop()>100 ){

        $('.header').addClass('header-solid animated fadeInDown');
        } 
        else {

        $('.header').removeClass('header-solid animated fadeInDown');

        }

    }); 

   $(window).on('scroll', function(){

        if( $(window).scrollTop()>200 ){

        $('.header2').addClass('header-bgnone animated fadeInDown');
        } 
        else {

        $('.header2').removeClass('header-bgnone animated fadeInDown');

        }

    }); 


   
  /* ----------------------------------------------------------- */
  /*  Main slideshow
  /* ----------------------------------------------------------- */

   $('#main-slide').carousel({
      pause: true,
      interval: 100000,
   });


   /* ----------------------------------------------------------- */
   /*  Counter
   /* ----------------------------------------------------------- */

      $('.counter').counterUp({
       delay: 10,
       time: 1000
      });



  /* ----------------------------------------------------------- */
  /*  Owl Carousel
  /* ----------------------------------------------------------- */


    //Testimonial

    $("#testimonial-carousel").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 600,
      pagination:true,
      singleItem:true
 
    });

    // Custom Navigation Events
    var owl = $("#testimonial-carousel");


    // Custom Navigation Events
    $(".next").click(function(){
      owl.trigger('owl.next');
    })
    $(".prev").click(function(){
      owl.trigger('owl.prev');
    })
    $(".play").click(function(){
      owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
    })
    $(".stop").click(function(){
      owl.trigger('owl.stop');
    })
    

   //Clients

   $("#client-carousel").owlCarousel({

      navigation : false, // Show next and prev buttons
      slideSpeed : 400,
      pagination:false,
      items : 5,
      rewindNav: true,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
      stopOnHover:true,
      autoPlay:true

   });

   //App gallery
   $("#app-gallery-carousel").owlCarousel({

     navigation : false, // Show next and prev buttons
      slideSpeed : 400,
      pagination:true,
      items : 4,
      rewindNav: true,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
      stopOnHover:true
   });



   /* ----------------------------------------------------------- */
   /*  Flex slider
   /* ----------------------------------------------------------- */

      //Second item slider
      $(window).load(function() {
        $('.flexSlideshow').flexslider({
           animation: "fade",
           controlNav: false,
           directionNav: true ,
           slideshowSpeed: 8000
        });
      });


     //Portfolio item slider
      $(window).load(function() {
        $('.flexportfolio').flexslider({
           animation: "fade",
           controlNav: false,
           directionNav: true ,
           slideshowSpeed: 8000
        });
      });

     
   /* ----------------------------------------------------------- */
   /*  Animation
   /* ----------------------------------------------------------- */
        //Wow
        new WOW().init();


   /* ----------------------------------------------------------- */
   /*  Prettyphoto
   /* ----------------------------------------------------------- */

        $("a[data-rel^='prettyPhoto']").prettyPhoto();


/* ----------------------------------------------------------- */
   /*  Contact map
   /* ----------------------------------------------------------- */

      $("#map").gmap3({
        map:{
            options:{
               center:[-37.8152065,144.963937],
               zoom: 14,
               scrollwheel: false
            }
        },
        marker:{
          values:[
            {address:"Corner Swanston St & Flinders St, Melbourne VIC 3000, Australia", data:" Welcome To bizCraft ! ! ", 
             options:{icon: "http://themewinter.com/html/marker.png"}}
          ],
          options:{
            draggable: false
          },
          events:{
            mouseover: function(marker, event, context){
              var map = $(this).gmap3("get"),
                infowindow = $(this).gmap3({get:{name:"infowindow"}});
              if (infowindow){
                infowindow.open(map, marker);
                infowindow.setContent(context.data);
              } else {
                $(this).gmap3({
                  infowindow:{
                    anchor:marker, 
                    options:{content: context.data}
                  }
                });
              }
            },
            mouseout: function(){
              var infowindow = $(this).gmap3({get:{name:"infowindow"}});
              if (infowindow){
                infowindow.close();
              }
            }
          }
        }
      });

   /* ----------------------------------------------------------- */
   /* Video background
   /* ----------------------------------------------------------- */

    var resizeVideoBackground = function() {

        $( '.video-background' ).each(function( i, el ) {
          var $el       = $( el ),
              $section  = $el.parent(),
              min_w     = 300,
              video_w   = 16,
              video_h   = 9,
              section_w = $section.outerWidth(),
              section_h = $section.outerHeight(),
              scale_w   = section_w / video_w,
              scale_h   = section_h / video_h,
              scale     = scale_w > scale_h ? scale_w : scale_h,
              new_video_w, new_video_h, offet_top, offet_left;


          if ( scale * video_w < min_w ) {
            scale = min_w / video_w;
          };

          new_video_w = scale * video_w;
          new_video_h = scale * video_h;
          offet_left = ( new_video_w - section_w ) / 2 * -1;
          offet_top  = ( new_video_h - section_h ) / 2 * -1;

          $el.css( 'width', new_video_w );
          $el.css( 'height', new_video_h );
          $el.css( 'marginTop', offet_top );
          $el.css( 'marginLeft', offet_left );
        });

    };

    $( window ).on( 'resize', function() {
        resizeVideoBackground();
    });
    
    resizeVideoBackground();

   /* ----------------------------------------------------------- */
   /*  Back to top
   /* ----------------------------------------------------------- */

       $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
      // scroll body to 0px on click
      $('#back-to-top').click(function () {
          $('#back-to-top').tooltip('hide');
          $('body,html').animate({
              scrollTop: 0
          }, 800);
          return false;
      });
      
      $('#back-to-top').tooltip('hide');

});