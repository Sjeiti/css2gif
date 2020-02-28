/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/animated_gif/dist/Animated_GIF.min.js":
/*!************************************************************!*\
  !*** ./node_modules/animated_gif/dist/Animated_GIF.min.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function GifWriter(r,e,t,a){function i(r){var e=r.length;if(e<2||e>256||e&e-1)throw"Invalid code/color length, must be power of 2 and 2 .. 256.";return e}var n=0,a=void 0===a?{}:a,o=void 0===a.loop?null:a.loop,l=void 0===a.palette?null:a.palette;if(e<=0||t<=0||e>65535||t>65535)throw"Width/Height invalid.";r[n++]=71,r[n++]=73,r[n++]=70,r[n++]=56,r[n++]=57,r[n++]=97;var f=0,d=0;if(null!==l){for(var h=i(l);h>>=1;)++f;if(h=1<<f,--f,void 0!==a.background){if(d=a.background,d>=h)throw"Background index out of range.";if(0===d)throw"Background index explicitly passed as 0."}}if(r[n++]=255&e,r[n++]=e>>8&255,r[n++]=255&t,r[n++]=t>>8&255,r[n++]=(null!==l?128:0)|f,r[n++]=d,r[n++]=0,null!==l)for(var u=0,s=l.length;u<s;++u){var v=l[u];r[n++]=v>>16&255,r[n++]=v>>8&255,r[n++]=255&v}if(null!==o){if(o<0||o>65535)throw"Loop count invalid.";r[n++]=33,r[n++]=255,r[n++]=11,r[n++]=78,r[n++]=69,r[n++]=84,r[n++]=83,r[n++]=67,r[n++]=65,r[n++]=80,r[n++]=69,r[n++]=50,r[n++]=46,r[n++]=48,r[n++]=3,r[n++]=1,r[n++]=255&o,r[n++]=o>>8&255,r[n++]=0}var c=!1;this.addFrame=function(e,t,a,o,f,d){if(c===!0&&(--n,c=!1),d=void 0===d?{}:d,e<0||t<0||e>65535||t>65535)throw"x/y invalid.";if(a<=0||o<=0||a>65535||o>65535)throw"Width/Height invalid.";if(f.length<a*o)throw"Not enough pixels for the frame size.";var h=!0,u=d.palette;if(void 0!==u&&null!==u||(h=!1,u=l),void 0===u||null===u)throw"Must supply either a local or global palette.";for(var s=i(u),v=0;s>>=1;)++v;s=1<<v;var g=void 0===d.delay?0:d.delay,p=void 0===d.disposal?0:d.disposal;if(p<0||p>3)throw"Disposal out of range.";var w=!1,x=0;if(void 0!==d.transparent&&null!==d.transparent&&(w=!0,x=d.transparent,x<0||x>=s))throw"Transparent color index.";if((0!==p||w||0!==g)&&(r[n++]=33,r[n++]=249,r[n++]=4,r[n++]=p<<2|(w===!0?1:0),r[n++]=255&g,r[n++]=g>>8&255,r[n++]=x,r[n++]=0),r[n++]=44,r[n++]=255&e,r[n++]=e>>8&255,r[n++]=255&t,r[n++]=t>>8&255,r[n++]=255&a,r[n++]=a>>8&255,r[n++]=255&o,r[n++]=o>>8&255,r[n++]=h===!0?128|v-1:0,h===!0)for(var k=0,b=u.length;k<b;++k){var m=u[k];r[n++]=m>>16&255,r[n++]=m>>8&255,r[n++]=255&m}n=GifWriterOutputLZWCodeStream(r,n,v<2?2:v,f)},this.end=function(){return c===!1&&(r[n++]=59,c=!0),n}}function GifWriterOutputLZWCodeStream(r,e,t,a){function i(t){for(;s>=t;)r[e++]=255&v,v>>=8,s-=8,e===o+256&&(r[o]=255,o=e++)}function n(r){v|=r<<s,s+=u,i(8)}r[e++]=t;var o=e++,l=1<<t,f=l-1,d=l+1,h=d+1,u=t+1,s=0,v=0,c=a[0]&f,g={};n(l);for(var p=1,w=a.length;p<w;++p){var x=a[p]&f,k=c<<8|x,b=g[k];if(void 0===b){for(v|=c<<s,s+=u;s>=8;)r[e++]=255&v,v>>=8,s-=8,e===o+256&&(r[o]=255,o=e++);4096===h?(n(l),h=d+1,u=t+1,g={}):(h>=1<<u&&++u,g[k]=h++),c=x}else c=b}return n(c),n(d),i(1),o+1===e?r[o]=0:(r[o]=e-o-1,r[e++]=0),e}function GifReader(r){var e=0;if(71!==r[e++]||73!==r[e++]||70!==r[e++]||56!==r[e++]||56!==(r[e++]+1&253)||97!==r[e++])throw"Invalid GIF 87a/89a header.";var t=r[e++]|r[e++]<<8,a=r[e++]|r[e++]<<8,i=r[e++],n=i>>7,o=7&i,l=1<<o+1;r[e++];r[e++];var f=null;n&&(f=e,e+=3*l);var d=!0,h=[],u=0,s=null,v=0,c=null;for(this.width=t,this.height=a;d&&e<r.length;)switch(r[e++]){case 33:switch(r[e++]){case 255:if(11!==r[e]||78==r[e+1]&&69==r[e+2]&&84==r[e+3]&&83==r[e+4]&&67==r[e+5]&&65==r[e+6]&&80==r[e+7]&&69==r[e+8]&&50==r[e+9]&&46==r[e+10]&&48==r[e+11]&&3==r[e+12]&&1==r[e+13]&&0==r[e+16])e+=14,c=r[e++]|r[e++]<<8,e++;else for(e+=12;;){var g=r[e++];if(0===g)break;e+=g}break;case 249:if(4!==r[e++]||0!==r[e+4])throw"Invalid graphics extension block.";var p=r[e++];u=r[e++]|r[e++]<<8,s=r[e++],0===(1&p)&&(s=null),v=p>>2&7,e++;break;case 254:for(;;){var g=r[e++];if(0===g)break;e+=g}break;default:throw"Unknown graphic control label: 0x"+r[e-1].toString(16)}break;case 44:var w=r[e++]|r[e++]<<8,x=r[e++]|r[e++]<<8,k=r[e++]|r[e++]<<8,b=r[e++]|r[e++]<<8,m=r[e++],y=m>>7,G=m>>6&1,W=7&m,_=1<<W+1,I=f,R=!1;if(y){var R=!0;I=e,e+=3*_}var A=e;for(e++;;){var g=r[e++];if(0===g)break;e+=g}h.push({x:w,y:x,width:k,height:b,has_local_palette:R,palette_offset:I,data_offset:A,data_length:e-A,transparent_index:s,interlaced:!!G,delay:u,disposal:v});break;case 59:d=!1;break;default:throw"Unknown gif block: 0x"+r[e-1].toString(16)}this.numFrames=function(){return h.length},this.loopCount=function(){return c},this.frameInfo=function(r){if(r<0||r>=h.length)throw"Frame index out of range.";return h[r]},this.decodeAndBlitFrameBGRA=function(e,a){var i=this.frameInfo(e),n=i.width*i.height,o=new Uint8Array(n);GifReaderLZWOutputIndexStream(r,i.data_offset,o,n);var l=i.palette_offset,f=i.transparent_index;null===f&&(f=256);var d=i.width,h=t-d,u=d,s=4*(i.y*t+i.x),v=4*((i.y+i.height)*t+i.x),c=s,g=4*h;i.interlaced===!0&&(g+=4*t*7);for(var p=8,w=0,x=o.length;w<x;++w){var k=o[w];if(0===u&&(c+=g,u=d,c>=v&&(g=4*h+4*t*(p-1),c=s+(d+h)*(p<<1),p>>=1)),k===f)c+=4;else{var b=r[l+3*k],m=r[l+3*k+1],y=r[l+3*k+2];a[c++]=y,a[c++]=m,a[c++]=b,a[c++]=255}--u}},this.decodeAndBlitFrameRGBA=function(e,a){var i=this.frameInfo(e),n=i.width*i.height,o=new Uint8Array(n);GifReaderLZWOutputIndexStream(r,i.data_offset,o,n);var l=i.palette_offset,f=i.transparent_index;null===f&&(f=256);var d=i.width,h=t-d,u=d,s=4*(i.y*t+i.x),v=4*((i.y+i.height)*t+i.x),c=s,g=4*h;i.interlaced===!0&&(g+=4*t*7);for(var p=8,w=0,x=o.length;w<x;++w){var k=o[w];if(0===u&&(c+=g,u=d,c>=v&&(g=4*h+4*t*(p-1),c=s+(d+h)*(p<<1),p>>=1)),k===f)c+=4;else{var b=r[l+3*k],m=r[l+3*k+1],y=r[l+3*k+2];a[c++]=b,a[c++]=m,a[c++]=y,a[c++]=255}--u}}}function GifReaderLZWOutputIndexStream(r,e,t,a){for(var i=r[e++],n=1<<i,o=n+1,l=o+1,f=i+1,d=(1<<f)-1,h=0,u=0,s=0,v=r[e++],c=new Int32Array(4096),g=null;;){for(;h<16&&0!==v;)u|=r[e++]<<h,h+=8,1===v?v=r[e++]:--v;if(h<f)break;var p=u&d;if(u>>=f,h-=f,p!==n){if(p===o)break;for(var w=p<l?p:g,x=0,k=w;k>n;)k=c[k]>>8,++x;var b=k,m=s+x+(w!==p?1:0);if(m>a)return void console.log("Warning, gif stream longer than expected.");t[s++]=b,s+=x;var y=s;for(w!==p&&(t[s++]=b),k=w;x--;)k=c[k],t[--y]=255&k,k>>=8;null!==g&&l<4096&&(c[l++]=g<<8|b,l>=d+1&&f<12&&(++f,d=d<<1|1)),g=p}else l=o+1,f=i+1,d=(1<<f)-1,g=null}return s!==a&&console.log("Warning, gif stream shorter than expected."),t}try{exports.GifWriter=GifWriter,exports.GifReader=GifReader}catch(r){}
},{}],2:[function(require,module,exports){
function Animated_GIF(n){"use strict";function t(){if(0===k.length)throw"No workers left!";return k.pop()}function e(n){k.push(n)}function i(n){w.length,P=n;for(var t=0;t<f&&t<w.length;t++)a(t)}function a(n){var i,a;return i=w[n],i.beingProcessed||i.done?(console.error("Frame already being processed or done!",i.position),void s()):(i.sampleInterval=d,i.beingProcessed=!0,a=t(),a.onmessage=function(n){var t=n.data;delete i.data,i.pixels=Array.prototype.slice.call(t.pixels),i.palette=Array.prototype.slice.call(t.palette),i.done=!0,i.beingProcessed=!1,e(a),s()},void a.postMessage(i))}function r(){for(var n=-1,t=0;t<w.length;t++){var e=w[t];if(!e.done&&!e.beingProcessed){n=t;break}}n>=0&&a(n)}function s(){var n=w.every(function(n){return!n.beingProcessed&&n.done});y++,j(.75*y/w.length),n?C||o(w,P):setTimeout(r,1)}function o(n,t){var e,i=[],a={loop:m};null!==v&&null!==c&&(e=c,a.palette=e);var r=new p(i,h,u,a);C=!0,n.forEach(function(t,i){var a;e||(a=t.palette),j(.75+.25*t.position*1/n.length),r.addFrame(0,0,h,u,t.pixels,{palette:a,delay:x})}),r.end(),j(1),n=[],C=!1,t(i)}function l(n){return 0!==n&&0===(n&n-1)}n=n||{};var d,f,p=require("omggif").GifWriter,h=n.width||160,u=n.height||120,v=n.dithering||null,c=n.palette||null,g=null,b=null,m=0,x=250,w=[],y=0,P=function(){},j=function(){},q=[],k=[],C=!1;if(c){if(!(c instanceof Array))throw c;if(c.length<2||c.length>256){for(console.error("Palette must hold only between 2 and 256 colours");c.length<2;)c.push(0);c.length>256&&(c=c.slice(0,256))}if(!l(c.length))for(console.error("Palette must have a power of two number of colours");!l(c.length);)c.splice(c.length-1,1)}n=n||{},d=n.sampleInterval||10,f=n.numWorkers||2;for(var I=0;I<f;I++){var z=new Worker(window.URL.createObjectURL(new Blob(['(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module \'"+o+"\'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){\n\nfunction colorClamp(value) {\n\tif(value < 0) return 0;\n\telse if(value > 255) return 255;\n\n\treturn value;\n}\n\nvar bayerMatrix8x8 = [\n\t[  1, 49, 13, 61,  4, 52, 16, 64 ],\n\t[ 33, 17, 45, 29, 36, 20, 48, 32 ],\n\t[  9, 57,  5, 53, 12, 60,  8, 56 ],\n\t[ 41, 25, 37, 21, 44, 28, 40, 24 ],\n\t[  3, 51, 15, 63,  2, 50, 14, 62 ],\n\t[ 35, 19, 47, 31, 34, 18, 46, 30 ],\n\t[ 11, 59,  7, 55, 10, 58,  6, 54 ],\n\t[ 43, 27, 39, 23, 42, 26, 38, 22 ]\n\t];\n\n\t// int r, int g, int b, int[][] palette, int paletteLength\n\tfunction getClosestPaletteColorIndex(r, g, b, palette, paletteLength) {\n\t\tvar minDistance = 195076;\n\t\tvar diffR, diffG, diffB;\n\t\tvar distanceSquared;\n\t\tvar bestIndex = 0;\n\t\tvar paletteChannels;\n\n\t\tfor(var i = 0; i < paletteLength; i++) {\n\n\t\t\tpaletteChannels = palette[i];\n\t\t\tdiffR = r - paletteChannels[0];\n\t\t\tdiffG = g - paletteChannels[1];\n\t\t\tdiffB = b - paletteChannels[2];\n\n\t\t\tdistanceSquared = diffR*diffR + diffG*diffG + diffB*diffB;\n\n\t\t\tif(distanceSquared < minDistance) {\n\t\t\t\tbestIndex = i;\n\t\t\t\tminDistance = distanceSquared;\n\t\t\t}\n\n\t\t}\n\n\t\treturn bestIndex;\n\t}\n\n// TODO: inPixels -> inComponents or inColors or something more accurate\nfunction BayerDithering(inPixels, width, height, palette) {\n\tvar offset = 0;\n\tvar indexedOffset = 0;\n\tvar r, g, b;\n\tvar pixel, threshold, index;\n\tvar paletteLength = palette.length;\n\tvar matrix = bayerMatrix8x8;\n\tvar indexedPixels = new Uint8Array( width * height );\n\n\tvar modI = 8;\n\tvar modJ = 8;\n\n\tfor(var j = 0; j < height; j++) {\n\t\tvar modj = j % modJ;\n\n\t\tfor(var i = 0; i < width; i++) {\n\n\t\t\tthreshold = matrix[i % modI][modj];\n\n\t\t\tr = colorClamp( inPixels[offset++] + threshold );\n\t\t\tg = colorClamp( inPixels[offset++] + threshold );\n\t\t\tb = colorClamp( inPixels[offset++] + threshold );\n\n\t\t\tindex = getClosestPaletteColorIndex(r, g, b, palette, paletteLength);\n\t\t\tindexedPixels[indexedOffset++] = index;\n\n\t\t}\n\t}\n\n\treturn indexedPixels;\n}\n\n\nfunction ClosestDithering(inPixels, width, height, palette) {\n\n\tvar offset = 0;\n\tvar indexedOffset = 0;\n\tvar r, g, b;\n\tvar index;\n\tvar paletteLength = palette.length;\n\tvar matrix = bayerMatrix8x8;\n\tvar numPixels = width * height;\n\tvar indexedPixels = new Uint8Array( numPixels );\n\n\tfor(var i = 0; i < numPixels; i++) {\n\n\t\tr = inPixels[offset++];\n\t\tg = inPixels[offset++];\n\t\tb = inPixels[offset++];\n\n\t\tindexedPixels[i] = getClosestPaletteColorIndex(r, g, b, palette, paletteLength);\n\n\t}\n\n\treturn indexedPixels;\n\n}\n\n\nfunction FloydSteinberg(inPixels, width, height, palette) {\n\tvar paletteLength = palette.length;\n\tvar offset = 0;\n\tvar indexedOffset = 0;\n\tvar r, g, b;\n\tvar widthLimit = width - 1;\n\tvar heightLimit = height - 1;\n\tvar offsetNextI, offsetNextJ;\n\tvar offsetPrevINextJ;\n\tvar channels, nextChannels;\n\tvar indexedPixels = new Uint8Array( width * height );\n\n\tfor(var j = 0; j < height; j++) {\n\t\tfor(var i = 0; i < width; i++) {\n\n\t\t\tr = colorClamp(inPixels[offset++]);\n\t\t\tg = colorClamp(inPixels[offset++]);\n\t\t\tb = colorClamp(inPixels[offset++]);\n\n\t\t\tvar colorIndex = getClosestPaletteColorIndex(r, g, b, palette, paletteLength);\n\t\t\tvar paletteColor = palette[colorIndex];\n\t\t\tvar closestColor = paletteColor[3];\n\n\t\t\t// We are done with finding the best value for this pixel\n\t\t\tindexedPixels[indexedOffset] = colorIndex;\n\n\t\t\t// Now find difference between assigned value and original color\n\t\t\t// and propagate that error forward\n\t\t\tvar errorR = r - paletteColor[0];\n\t\t\tvar errorG = g - paletteColor[1];\n\t\t\tvar errorB = b - paletteColor[2];\n\n\t\t\tif(i < widthLimit) {\n\n\t\t\t\toffsetNextI = offset + 1;\n\n\t\t\t\tinPixels[offsetNextI++] += (errorR * 7) >> 4;\n\t\t\t\tinPixels[offsetNextI++] += (errorG * 7) >> 4;\n\t\t\t\tinPixels[offsetNextI++] += (errorB * 7) >> 4;\n\n\t\t\t}\n\n\n\t\t\tif(j < heightLimit) {\n\n\t\t\t\tif(i > 0) {\n\n\t\t\t\t\toffsetPrevINextJ = offset - 1 + width;\n\n\t\t\t\t\tinPixels[offsetPrevINextJ++] += (errorR * 3) >> 4;\n\t\t\t\t\tinPixels[offsetPrevINextJ++] += (errorG * 3) >> 4;\n\t\t\t\t\tinPixels[offsetPrevINextJ++] += (errorB * 3) >> 4;\n\n\t\t\t\t}\n\n\t\t\t\toffsetNextJ = offset + width;\n\n\t\t\t\tinPixels[offsetNextJ++] += (errorR * 5) >> 4;\n\t\t\t\tinPixels[offsetNextJ++] += (errorG * 5) >> 4;\n\t\t\t\tinPixels[offsetNextJ++] += (errorB * 5) >> 4;\n\n\n\t\t\t\tif(i < widthLimit) {\n\n\t\t\t\t\tinPixels[offsetNextJ++] += errorR >> 4;\n\t\t\t\t\tinPixels[offsetNextJ++] += errorG >> 4;\n\t\t\t\t\tinPixels[offsetNextJ++] += errorB >> 4;\n\n\t\t\t\t}\n\n\t\t\t}\n\n\t\t\tindexedOffset++;\n\t\t}\n\t}\n\n\treturn indexedPixels;\n}\n\nmodule.exports = {\n\tBayer: BayerDithering,\n\tClosest: ClosestDithering,\n\tFloydSteinberg: FloydSteinberg\n};\n\n\n},{}],2:[function(require,module,exports){\nvar NeuQuant = require(\'./lib/NeuQuant\');\nvar Dithering = require(\'node-dithering\');\n\nfunction channelizePalette( palette ) {\n    var channelizedPalette = [];\n\n    for(var i = 0; i < palette.length; i++) {\n        var color = palette[i];\n\n        var r = (color & 0xFF0000) >> 16;\n        var g = (color & 0x00FF00) >>  8;\n        var b = (color & 0x0000FF);\n\n        channelizedPalette.push([ r, g, b, color ]);\n    }\n\n    return channelizedPalette;\n\n}\n\n\nfunction dataToRGB( data, width, height ) {\n    var i = 0;\n    var length = width * height * 4;\n    var rgb = [];\n\n    while(i < length) {\n        rgb.push( data[i++] );\n        rgb.push( data[i++] );\n        rgb.push( data[i++] );\n        i++; // for the alpha channel which we don\'t care about\n    }\n\n    return rgb;\n}\n\n\nfunction componentizedPaletteToArray(paletteRGB) {\n\n    var paletteArray = [];\n\n    for(var i = 0; i < paletteRGB.length; i += 3) {\n        var r = paletteRGB[ i ];\n        var g = paletteRGB[ i + 1 ];\n        var b = paletteRGB[ i + 2 ];\n        paletteArray.push(r << 16 | g << 8 | b);\n    }\n\n    return paletteArray;\n}\n\n\n// This is the "traditional" Animated_GIF style of going from RGBA to indexed color frames\nfunction processFrameWithQuantizer(imageData, width, height, sampleInterval) {\n\n    var rgbComponents = dataToRGB( imageData, width, height );\n    var nq = new NeuQuant(rgbComponents, rgbComponents.length, sampleInterval);\n    var paletteRGB = nq.process();\n    var paletteArray = new Uint32Array(componentizedPaletteToArray(paletteRGB));\n\n    var numberPixels = width * height;\n    var indexedPixels = new Uint8Array(numberPixels);\n\n    var k = 0;\n    for(var i = 0; i < numberPixels; i++) {\n        r = rgbComponents[k++];\n        g = rgbComponents[k++];\n        b = rgbComponents[k++];\n        indexedPixels[i] = nq.map(r, g, b);\n    }\n\n    return {\n        pixels: indexedPixels,\n        palette: paletteArray\n    };\n\n}\n\n\n// And this is a version that uses dithering against of quantizing\n// It can also use a custom palette if provided, or will build one otherwise\nfunction processFrameWithDithering(imageData, width, height, ditheringType, palette) {\n\n    // Extract component values from data\n    var rgbComponents = dataToRGB( imageData, width, height );\n\n\n    // Build palette if none provided\n    if(palette === null) {\n\n        var nq = new NeuQuant(rgbComponents, rgbComponents.length, 16);\n        var paletteRGB = nq.process();\n        palette = componentizedPaletteToArray(paletteRGB);\n\n    }\n\n    var paletteArray = new Uint32Array( palette );\n    var paletteChannels = channelizePalette( palette );\n\n    // Convert RGB image to indexed image\n    var ditheringFunction;\n\n    if(ditheringType === \'closest\') {\n        ditheringFunction = Dithering.Closest;\n    } else if(ditheringType === \'floyd\') {\n        ditheringFunction = Dithering.FloydSteinberg;\n    } else {\n        ditheringFunction = Dithering.Bayer;\n    }\n\n    pixels = ditheringFunction(rgbComponents, width, height, paletteChannels);\n\n    return ({\n        pixels: pixels,\n        palette: paletteArray\n    });\n\n}\n\n\n// ~~~\n\nfunction run(frame) {\n    var width = frame.width;\n    var height = frame.height;\n    var imageData = frame.data;\n    var dithering = frame.dithering;\n    var palette = frame.palette;\n    var sampleInterval = frame.sampleInterval;\n\n    if(dithering) {\n        return processFrameWithDithering(imageData, width, height, dithering, palette);\n    } else {\n        return processFrameWithQuantizer(imageData, width, height, sampleInterval);\n    }\n\n}\n\n\nself.onmessage = function(ev) {\n    var data = ev.data;\n    var response = run(data);\n    postMessage(response);\n};\n\n},{"./lib/NeuQuant":3,"node-dithering":1}],3:[function(require,module,exports){\n/*\n* NeuQuant Neural-Net Quantization Algorithm\n* ------------------------------------------\n*\n* Copyright (c) 1994 Anthony Dekker\n*\n* NEUQUANT Neural-Net quantization algorithm by Anthony Dekker, 1994. See\n* "Kohonen neural networks for optimal colour quantization" in "Network:\n* Computation in Neural Systems" Vol. 5 (1994) pp 351-367. for a discussion of\n* the algorithm.\n*\n* Any party obtaining a copy of these files from the author, directly or\n* indirectly, is granted, free of charge, a full and unrestricted irrevocable,\n* world-wide, paid up, royalty-free, nonexclusive right and license to deal in\n* this software and documentation files (the "Software"), including without\n* limitation the rights to use, copy, modify, merge, publish, distribute,\n* sublicense, and/or sell copies of the Software, and to permit persons who\n* receive copies from any such party to do so, with the only requirement being\n* that this copyright notice remain intact.\n*/\n\n/*\n* This class handles Neural-Net quantization algorithm\n* @author Kevin Weiner (original Java version - kweiner@fmsware.com)\n* @author Thibault Imbert (AS3 version - bytearray.org)\n* @version 0.1 AS3 implementation\n* @version 0.2 JS->AS3 "translation" by antimatter15\n* @version 0.3 JS clean up + using modern JS idioms by sole - http://soledadpenades.com\n* Also implement fix in color conversion described at http://stackoverflow.com/questions/16371712/neuquant-js-javascript-color-quantization-hidden-bug-in-js-conversion\n*/\n\nmodule.exports = function NeuQuant() {\n\n    var netsize = 256; // number of colours used\n\n    // four primes near 500 - assume no image has a length so large\n    // that it is divisible by all four primes\n    var prime1 = 499;\n    var prime2 = 491;\n    var prime3 = 487;\n    var prime4 = 503;\n\n    // minimum size for input image\n    var minpicturebytes = (3 * prime4);\n\n    // Network Definitions\n\n    var maxnetpos = (netsize - 1);\n    var netbiasshift = 4; // bias for colour values\n    var ncycles = 100; // no. of learning cycles\n\n    // defs for freq and bias\n    var intbiasshift = 16; // bias for fractions\n    var intbias = (1 << intbiasshift);\n    var gammashift = 10; // gamma = 1024\n    var gamma = (1 << gammashift);\n    var betashift = 10;\n    var beta = (intbias >> betashift); // beta = 1/1024\n    var betagamma = (intbias << (gammashift - betashift));\n\n    // defs for decreasing radius factor\n    // For 256 colors, radius starts at 32.0 biased by 6 bits\n    // and decreases by a factor of 1/30 each cycle\n    var initrad = (netsize >> 3);\n    var radiusbiasshift = 6;\n    var radiusbias = (1 << radiusbiasshift);\n    var initradius = (initrad * radiusbias);\n    var radiusdec = 30;\n\n    // defs for decreasing alpha factor\n    // Alpha starts at 1.0 biased by 10 bits\n    var alphabiasshift = 10;\n    var initalpha = (1 << alphabiasshift);\n    var alphadec;\n\n    // radbias and alpharadbias used for radpower calculation\n    var radbiasshift = 8;\n    var radbias = (1 << radbiasshift);\n    var alpharadbshift = (alphabiasshift + radbiasshift);\n    var alpharadbias = (1 << alpharadbshift);\n\n\n    // Input image\n    var thepicture;\n    // Height * Width * 3\n    var lengthcount;\n    // Sampling factor 1..30\n    var samplefac;\n\n    // The network itself\n    var network;\n    var netindex = [];\n\n    // for network lookup - really 256\n    var bias = [];\n\n    // bias and freq arrays for learning\n    var freq = [];\n    var radpower = [];\n\n    function NeuQuantConstructor(thepic, len, sample) {\n\n        var i;\n        var p;\n\n        thepicture = thepic;\n        lengthcount = len;\n        samplefac = sample;\n\n        network = new Array(netsize);\n\n        for (i = 0; i < netsize; i++) {\n            network[i] = new Array(4);\n            p = network[i];\n            p[0] = p[1] = p[2] = ((i << (netbiasshift + 8)) / netsize) | 0;\n            freq[i] = (intbias / netsize) | 0; // 1 / netsize\n            bias[i] = 0;\n        }\n\n    }\n\n    function colorMap() {\n        var map = [];\n        var index = new Array(netsize);\n        for (var i = 0; i < netsize; i++)\n            index[network[i][3]] = i;\n        var k = 0;\n        for (var l = 0; l < netsize; l++) {\n            var j = index[l];\n            map[k++] = (network[j][0]);\n            map[k++] = (network[j][1]);\n            map[k++] = (network[j][2]);\n        }\n        return map;\n    }\n\n    // Insertion sort of network and building of netindex[0..255]\n    // (to do after unbias)\n    function inxbuild() {\n        var i;\n        var j;\n        var smallpos;\n        var smallval;\n        var p;\n        var q;\n        var previouscol;\n        var startpos;\n\n        previouscol = 0;\n        startpos = 0;\n\n        for (i = 0; i < netsize; i++)\n        {\n\n            p = network[i];\n            smallpos = i;\n            smallval = p[1]; // index on g\n            // find smallest in i..netsize-1\n            for (j = i + 1; j < netsize; j++) {\n\n                q = network[j];\n\n                if (q[1] < smallval) { // index on g\n                    smallpos = j;\n                    smallval = q[1]; // index on g\n                }\n            }\n\n            q = network[smallpos];\n\n            // swap p (i) and q (smallpos) entries\n            if (i != smallpos) {\n                j = q[0];\n                q[0] = p[0];\n                p[0] = j;\n                j = q[1];\n                q[1] = p[1];\n                p[1] = j;\n                j = q[2];\n                q[2] = p[2];\n                p[2] = j;\n                j = q[3];\n                q[3] = p[3];\n                p[3] = j;\n            }\n\n            // smallval entry is now in position i\n            if (smallval != previouscol) {\n\n                netindex[previouscol] = (startpos + i) >> 1;\n\n                for (j = previouscol + 1; j < smallval; j++) {\n                    netindex[j] = i;\n                }\n\n                previouscol = smallval;\n                startpos = i;\n\n            }\n\n        }\n\n        netindex[previouscol] = (startpos + maxnetpos) >> 1;\n        for (j = previouscol + 1; j < 256; j++) {\n            netindex[j] = maxnetpos; // really 256\n        }\n\n    }\n\n\n    // Main Learning Loop\n\n    function learn() {\n        var i;\n        var j;\n        var b;\n        var g;\n        var r;\n        var radius;\n        var rad;\n        var alpha;\n        var step;\n        var delta;\n        var samplepixels;\n        var p;\n        var pix;\n        var lim;\n\n        if (lengthcount < minpicturebytes) {\n            samplefac = 1;\n        }\n\n        alphadec = 30 + ((samplefac - 1) / 3);\n        p = thepicture;\n        pix = 0;\n        lim = lengthcount;\n        samplepixels = lengthcount / (3 * samplefac);\n        delta = (samplepixels / ncycles) | 0;\n        alpha = initalpha;\n        radius = initradius;\n\n        rad = radius >> radiusbiasshift;\n        if (rad <= 1) {\n            rad = 0;\n        }\n\n        for (i = 0; i < rad; i++) {\n            radpower[i] = alpha * (((rad * rad - i * i) * radbias) / (rad * rad));\n        }\n\n\n        if (lengthcount < minpicturebytes) {\n            step = 3;\n        } else if ((lengthcount % prime1) !== 0) {\n            step = 3 * prime1;\n        } else {\n\n            if ((lengthcount % prime2) !== 0) {\n                step = 3 * prime2;\n            } else {\n                if ((lengthcount % prime3) !== 0) {\n                    step = 3 * prime3;\n                } else {\n                    step = 3 * prime4;\n                }\n            }\n\n        }\n\n        i = 0;\n\n        while (i < samplepixels) {\n\n            b = (p[pix + 0] & 0xff) << netbiasshift;\n            g = (p[pix + 1] & 0xff) << netbiasshift;\n            r = (p[pix + 2] & 0xff) << netbiasshift;\n            j = contest(b, g, r);\n\n            altersingle(alpha, j, b, g, r);\n\n            if (rad !== 0) {\n                // Alter neighbours\n                alterneigh(rad, j, b, g, r);\n            }\n\n            pix += step;\n\n            if (pix >= lim) {\n                pix -= lengthcount;\n            }\n\n            i++;\n\n            if (delta === 0) {\n                delta = 1;\n            }\n\n            if (i % delta === 0) {\n                alpha -= alpha / alphadec;\n                radius -= radius / radiusdec;\n                rad = radius >> radiusbiasshift;\n\n                if (rad <= 1) {\n                    rad = 0;\n                }\n\n                for (j = 0; j < rad; j++) {\n                    radpower[j] = alpha * (((rad * rad - j * j) * radbias) / (rad * rad));\n                }\n\n            }\n\n        }\n\n    }\n\n    // Search for BGR values 0..255 (after net is unbiased) and return colour index\n    function map(b, g, r) {\n        var i;\n        var j;\n        var dist;\n        var a;\n        var bestd;\n        var p;\n        var best;\n\n        // Biggest possible distance is 256 * 3\n        bestd = 1000;\n        best = -1;\n        i = netindex[g]; // index on g\n        j = i - 1; // start at netindex[g] and work outwards\n\n        while ((i < netsize) || (j >= 0)) {\n\n            if (i < netsize) {\n\n                p = network[i];\n\n                dist = p[1] - g; // inx key\n\n                if (dist >= bestd) {\n                    i = netsize; // stop iter\n                } else {\n\n                    i++;\n\n                    if (dist < 0) {\n                        dist = -dist;\n                    }\n\n                    a = p[0] - b;\n\n                    if (a < 0) {\n                        a = -a;\n                    }\n\n                    dist += a;\n\n                    if (dist < bestd) {\n                        a = p[2] - r;\n\n                        if (a < 0) {\n                            a = -a;\n                        }\n\n                        dist += a;\n\n                        if (dist < bestd) {\n                            bestd = dist;\n                            best = p[3];\n                        }\n                    }\n\n                }\n\n            }\n\n            if (j >= 0) {\n\n                p = network[j];\n\n                dist = g - p[1]; // inx key - reverse dif\n\n                if (dist >= bestd) {\n                    j = -1; // stop iter\n                } else {\n\n                    j--;\n                    if (dist < 0) {\n                        dist = -dist;\n                    }\n                    a = p[0] - b;\n                    if (a < 0) {\n                        a = -a;\n                    }\n                    dist += a;\n\n                    if (dist < bestd) {\n                        a = p[2] - r;\n                        if (a < 0) {\n                            a = -a;\n                        }\n                        dist += a;\n                        if (dist < bestd) {\n                            bestd = dist;\n                            best = p[3];\n                        }\n                    }\n\n                }\n\n            }\n\n        }\n\n        return (best);\n\n    }\n\n    function process() {\n        learn();\n        unbiasnet();\n        inxbuild();\n        return colorMap();\n    }\n\n    // Unbias network to give byte values 0..255 and record position i\n    // to prepare for sort\n    function unbiasnet() {\n        var i;\n        var j;\n\n        for (i = 0; i < netsize; i++) {\n            network[i][0] >>= netbiasshift;\n            network[i][1] >>= netbiasshift;\n            network[i][2] >>= netbiasshift;\n            network[i][3] = i; // record colour no\n        }\n    }\n\n    // Move adjacent neurons by precomputed alpha*(1-((i-j)^2/[r]^2))\n    // in radpower[|i-j|]\n    function alterneigh(rad, i, b, g, r) {\n\n        var j;\n        var k;\n        var lo;\n        var hi;\n        var a;\n        var m;\n\n        var p;\n\n        lo = i - rad;\n        if (lo < -1) {\n            lo = -1;\n        }\n\n        hi = i + rad;\n\n        if (hi > netsize) {\n            hi = netsize;\n        }\n\n        j = i + 1;\n        k = i - 1;\n        m = 1;\n\n        while ((j < hi) || (k > lo)) {\n\n            a = radpower[m++];\n\n            if (j < hi) {\n\n                p = network[j++];\n\n                try {\n\n                    p[0] -= ((a * (p[0] - b)) / alpharadbias) | 0;\n                    p[1] -= ((a * (p[1] - g)) / alpharadbias) | 0;\n                    p[2] -= ((a * (p[2] - r)) / alpharadbias) | 0;\n\n                } catch (e) {}\n\n            }\n\n            if (k > lo) {\n\n                p = network[k--];\n\n                try {\n\n                    p[0] -= ((a * (p[0] - b)) / alpharadbias) | 0;\n                    p[1] -= ((a * (p[1] - g)) / alpharadbias) | 0;\n                    p[2] -= ((a * (p[2] - r)) / alpharadbias) | 0;\n\n                } catch (e) {}\n\n            }\n\n        }\n\n    }\n\n\n    // Move neuron i towards biased (b,g,r) by factor alpha\n    function altersingle(alpha, i, b, g, r) {\n\n        // alter hit neuron\n        var n = network[i];\n        var alphaMult = alpha / initalpha;\n        n[0] -= ((alphaMult * (n[0] - b))) | 0;\n        n[1] -= ((alphaMult * (n[1] - g))) | 0;\n        n[2] -= ((alphaMult * (n[2] - r))) | 0;\n\n    }\n\n    // Search for biased BGR values\n    function contest(b, g, r) {\n\n        // finds closest neuron (min dist) and updates freq\n        // finds best neuron (min dist-bias) and returns position\n        // for frequently chosen neurons, freq[i] is high and bias[i] is negative\n        // bias[i] = gamma*((1/netsize)-freq[i])\n\n        var i;\n        var dist;\n        var a;\n        var biasdist;\n        var betafreq;\n        var bestpos;\n        var bestbiaspos;\n        var bestd;\n        var bestbiasd;\n        var n;\n\n        bestd = ~(1 << 31);\n        bestbiasd = bestd;\n        bestpos = -1;\n        bestbiaspos = bestpos;\n\n        for (i = 0; i < netsize; i++) {\n\n            n = network[i];\n            dist = n[0] - b;\n\n            if (dist < 0) {\n                dist = -dist;\n            }\n\n            a = n[1] - g;\n\n            if (a < 0) {\n                a = -a;\n            }\n\n            dist += a;\n\n            a = n[2] - r;\n\n            if (a < 0) {\n                a = -a;\n            }\n\n            dist += a;\n\n            if (dist < bestd) {\n                bestd = dist;\n                bestpos = i;\n            }\n\n            biasdist = dist - ((bias[i]) >> (intbiasshift - netbiasshift));\n\n            if (biasdist < bestbiasd) {\n                bestbiasd = biasdist;\n                bestbiaspos = i;\n            }\n\n            betafreq = (freq[i] >> betashift);\n            freq[i] -= betafreq;\n            bias[i] += (betafreq << gammashift);\n\n        }\n\n        freq[bestpos] += beta;\n        bias[bestpos] -= betagamma;\n        return (bestbiaspos);\n\n    }\n\n    NeuQuantConstructor.apply(this, arguments);\n\n    var exports = {};\n    exports.map = map;\n    exports.process = process;\n\n    return exports;\n}\n\n},{}]},{},[2])'],{type:"text/javascript"})));q.push(z),k.push(z)}var A=function(){for(var n=[],t=0;t<256;t++)n[t]=String.fromCharCode(t);return function(t){for(var e=t.length,i="",a=0;a<e;a++)i+=n[t[a]];return i}}();this.setSize=function(n,t){h=n,u=t,g=document.createElement("canvas"),g.width=n,g.height=t,b=g.getContext("2d")},this.setDelay=function(n){x=.1*n},this.setRepeat=function(n){m=n},this.addFrame=function(n){null===b&&this.setSize(h,u),b.drawImage(n,0,0,h,u);var t=b.getImageData(0,0,h,u);this.addFrameImageData(t)},this.addFrameImageData=function(n){var t=(n.length,new Uint8Array(n.data));w.push({data:t,width:n.width,height:n.height,palette:c,dithering:v,done:!1,beingProcessed:!1,position:w.length})},this.onRenderProgress=function(n){j=n},this.isRendering=function(){return C},this.getBase64GIF=function(n){var t=function(t){var e=A(t),i="data:image/gif;base64,"+btoa(e);n(i)};i(t)},this.getBlobGIF=function(n){var t=function(t){var e=new Uint8Array(t),i=new Blob([e],{type:"image/gif"});n(i)};i(t)},this.destroy=function(){q.forEach(function(n){n.terminate()})}}module.exports=Animated_GIF;
},{"omggif":1}]},{},[2])(2)
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js?!./src/styles.less":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js??ref--4-2!./src/styles.less ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":root {\n  --frame: 0;\n  --frames: 32;\n  --part: calc(var(--frame) / var(--frames));\n  --deg: calc(var(--part) * 360deg);\n  --size: 2rem;\n  --size2: calc(2*var(--size));\n  --size2sqrt: 5.66rem;\n  --size1sqrt: calc(0.5*var(--size2sqrt));\n  --size0sqrt: calc(0*var(--size2sqrt));\n}\n.panes {\n  display: flex;\n}\n.pane {\n  flex: 0 0 auto;\n  width: calc(8*var(--size2));\n  height: calc(8*var(--size2));\n  cbackground-image: repeating-linear-gradient(calc(var(--deg) + 90deg), transparent 0 var(--size), black 0 var(--size2)), repeating-linear-gradient(calc(var(--deg) - 45deg), transparent 0 var(--size0sqrt), royalblue 0 calc(var(--size0sqrt) + var(--size1sqrt)), transparent 0 var(--size2sqrt)), repeating-linear-gradient(var(--deg), black 0 var(--size), powderblue 0 var(--size2));\n}\n.currentFrame:before {\n  counter-reset: variable var(--frame);\n  content: counter(variable);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/mc_picker/dist/index.js":
/*!**********************************************!*\
  !*** ./node_modules/mc_picker/dist/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){if(void 0===r)var r={};r.brehaut||(r.brehaut={}),function(){"use strict";var t="(?:\\+|-)?\\d+",e="(?:\\+|-)?\\d*\\.\\d+",n="(?:"+t+")|(?:"+e+")";t="("+t+")",e="("+e+")";var i,a=(n="("+n+")")+"%",o=new RegExp(["^hsl(a?)\\(",n,",",a,",",a,"(,(",n,"))?\\)$"].join("\\s*?")),s=new RegExp(["^rgb(a?)\\(",t,",",t,",",t,"(,(",n,"))?\\)$"].join("\\s*?")),u=new RegExp(["^rgb(a?)\\(",a,",",a,",",a,"(,(",n,"))?\\)$"].join("\\s*?")),h=[],c={};this.object||(this.object=function(t){function e(){}return e.prototype=t,new e});var l=this.object;function f(t,e){t=t.toString();for(var n=[],r=0,i=Math.max(e-t.length,0);r<i;r++)n.push("0");return n.push(t),n.join("")}function p(t){return t.slice(0,1).toUpperCase()+t.slice(1)}function m(t){return t.replace(/^\s+|\s+$/g,"")}function d(t){return function(){var e=this.clone();return t.apply(e,arguments),e}}function v(t,e){var n=l(i),r=[],a="to"+p(t);function o(t){return function(){return t.apply(this[a](),arguments)}}for(var s in e)if(e.hasOwnProperty(s)){n[s]=e[s];var u=n[s];if("_"==s.slice(0,1))continue;if(s in i||"function"!=typeof u){if("function"!=typeof u){r.push(s);var f="get"+p(s),m="set"+p(s);i[f]=o(n[f]=function(t){return function(){return this[t]}}(s)),i[m]=o(n[m]=function(t){return function(e){var n=this.clone();return n[t]=e,n}}(s))}}else i[s]=o(u)}function d(){}function v(){return new d}return d.prototype=n,c[t]=v,n.clone=function(){for(var t=v(),e=0,n=r.length;e<n;e++){var i=r[e];t[i]=this[i]}return t},i[a]=function(){return v()},h.push(n),n}i={fromObject:function(t){if(!t)return l(i);for(var e=0,n=h.length;e<n;e++){var r=h[e].fromObject(t);if(r)return r}return l(i)},toString:function(){return this.toCSS()}};var g=null;function b(t){return i.fromObject(t)}v("RGB",{red:0,green:0,blue:0,alpha:0,getLuminance:function(){return.2126*this.red+.7152*this.green+.0722*this.blue},blend:function(t,e){t=t.toRGB(),e=Math.min(Math.max(e,0),1);var n=this.clone();return n.red=n.red*(1-e)+t.red*e,n.green=n.green*(1-e)+t.green*e,n.blue=n.blue*(1-e)+t.blue*e,n.alpha=n.alpha*(1-e)+t.alpha*e,n},fromObject:function(t){return t instanceof Array?this._fromRGBArray(t):"string"==typeof t?this._fromCSS(m(t)):t.hasOwnProperty("red")&&t.hasOwnProperty("green")&&t.hasOwnProperty("blue")?this._fromRGB(t):void 0},_stringParsers:[function(t){t=m(t);var e=n(s,255);return e||n(u,100);function n(e,n){var r=t.match(e);if(!r||!!r[1]+!!r[5]===1)return null;var i=c.RGB();return i.red=Math.min(1,Math.max(0,r[2]/n)),i.green=Math.min(1,Math.max(0,r[3]/n)),i.blue=Math.min(1,Math.max(0,r[4]/n)),i.alpha=r[5]?Math.min(Math.max(parseFloat(r[6]),0),1):1,i}},function(t){t.toLowerCase();if(t.match(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/)){var e=(t=t.replace(/^#/,"")).length/3,n=Math.pow(16,e)-1,r=c.RGB();return r.red=parseInt(t.slice(0,e),16)/n,r.green=parseInt(t.slice(1*e,2*e),16)/n,r.blue=parseInt(t.slice(2*e),16)/n,r.alpha=1,r}},function(t){if("transparent"===t.toLowerCase())return g}],_fromCSS:function(t){for(var e=null,n=0,r=this._stringParsers.length;n<r;n++)if(e=this._stringParsers[n](t))return e},_fromRGB:function(t){var e=c.RGB();return e.red=t.red,e.green=t.green,e.blue=t.blue,e.alpha=t.hasOwnProperty("alpha")?t.alpha:1,e},_fromRGBArray:function(t){var e=c.RGB();return e.red=Math.max(0,Math.min(1,t[0]/255)),e.green=Math.max(0,Math.min(1,t[1]/255)),e.blue=Math.max(0,Math.min(1,t[2]/255)),e.alpha=void 0!==t[3]?Math.max(0,Math.min(1,t[3])):1,e},toCSSHex:function(t){t=t||2;var e=Math.pow(16,t)-1;return["#",f(Math.round(this.red*e).toString(16).toUpperCase(),t),f(Math.round(this.green*e).toString(16).toUpperCase(),t),f(Math.round(this.blue*e).toString(16).toUpperCase(),t)].join("")},toCSS:function(t){if(1===this.alpha)return this.toCSSHex(t);return["rgba(",Math.max(0,Math.min(255,Math.round(255*this.red))),",",Math.max(0,Math.min(255,Math.round(255*this.green))),",",Math.max(0,Math.min(255,Math.round(255*this.blue))),",",Math.max(0,Math.min(1,this.alpha)),")"].join("")},toHSV:function(){var t,e,n,r=c.HSV();return t=Math.min(this.red,this.green,this.blue),e=Math.max(this.red,this.green,this.blue),r.value=e,0==(n=e-t)?r.hue=r.saturation=0:(r.saturation=n/e,this.red==e?r.hue=(this.green-this.blue)/n:this.green==e?r.hue=2+(this.blue-this.red)/n:r.hue=4+(this.red-this.green)/n,r.hue=(60*r.hue+360)%360),r.alpha=this.alpha,r},toHSL:function(){return this.toHSV().toHSL()},toRGB:function(){return this.clone()}}),g=i.fromObject({red:0,blue:0,green:0,alpha:0}),v("HSV",{hue:0,saturation:0,value:1,alpha:1,shiftHue:d((function(t){var e=(this.hue+t)%360;e<0&&(e=(360+e)%360),this.hue=e})),devalueByAmount:d((function(t){this.value=Math.min(1,Math.max(this.value-t,0))})),devalueByRatio:d((function(t){this.value=Math.min(1,Math.max(this.value*(1-t),0))})),valueByAmount:d((function(t){this.value=Math.min(1,Math.max(this.value+t,0))})),valueByRatio:d((function(t){this.value=Math.min(1,Math.max(this.value*(1+t),0))})),desaturateByAmount:d((function(t){this.saturation=Math.min(1,Math.max(this.saturation-t,0))})),desaturateByRatio:d((function(t){this.saturation=Math.min(1,Math.max(this.saturation*(1-t),0))})),saturateByAmount:d((function(t){this.saturation=Math.min(1,Math.max(this.saturation+t,0))})),saturateByRatio:d((function(t){this.saturation=Math.min(1,Math.max(this.saturation*(1+t),0))})),schemeFromDegrees:function(t){for(var e=[],n=0,r=t.length;n<r;n++){var i=this.clone();i.hue=(this.hue+t[n])%360,e.push(i)}return e},complementaryScheme:function(){return this.schemeFromDegrees([0,180])},splitComplementaryScheme:function(){return this.schemeFromDegrees([0,150,320])},splitComplementaryCWScheme:function(){return this.schemeFromDegrees([0,150,300])},splitComplementaryCCWScheme:function(){return this.schemeFromDegrees([0,60,210])},triadicScheme:function(){return this.schemeFromDegrees([0,120,240])},clashScheme:function(){return this.schemeFromDegrees([0,90,270])},tetradicScheme:function(){return this.schemeFromDegrees([0,90,180,270])},fourToneCWScheme:function(){return this.schemeFromDegrees([0,60,180,240])},fourToneCCWScheme:function(){return this.schemeFromDegrees([0,120,180,300])},fiveToneAScheme:function(){return this.schemeFromDegrees([0,115,155,205,245])},fiveToneBScheme:function(){return this.schemeFromDegrees([0,40,90,130,245])},fiveToneCScheme:function(){return this.schemeFromDegrees([0,50,90,205,320])},fiveToneDScheme:function(){return this.schemeFromDegrees([0,40,155,270,310])},fiveToneEScheme:function(){return this.schemeFromDegrees([0,115,230,270,320])},sixToneCWScheme:function(){return this.schemeFromDegrees([0,30,120,150,240,270])},sixToneCCWScheme:function(){return this.schemeFromDegrees([0,90,120,210,240,330])},neutralScheme:function(){return this.schemeFromDegrees([0,15,30,45,60,75])},analogousScheme:function(){return this.schemeFromDegrees([0,30,60,90,120,150])},fromObject:function(t){if(t.hasOwnProperty("hue")&&t.hasOwnProperty("saturation")&&t.hasOwnProperty("value")){var e=c.HSV();return e.hue=t.hue,e.saturation=t.saturation,e.value=t.value,e.alpha=t.hasOwnProperty("alpha")?t.alpha:1,e}return null},_normalise:function(){this.hue%=360,this.saturation=Math.min(Math.max(0,this.saturation),1),this.value=Math.min(Math.max(0,this.value)),this.alpha=Math.min(1,Math.max(0,this.alpha))},toRGB:function(){this._normalise();var t,e,n,r,i,a=c.RGB();if(0===this.saturation)return a.red=this.value,a.green=this.value,a.blue=this.value,a.alpha=this.alpha,a;var o=this.hue/60;switch(e=o-(t=Math.floor(o)),n=this.value*(1-this.saturation),r=this.value*(1-this.saturation*e),i=this.value*(1-this.saturation*(1-e)),t){case 0:a.red=this.value,a.green=i,a.blue=n;break;case 1:a.red=r,a.green=this.value,a.blue=n;break;case 2:a.red=n,a.green=this.value,a.blue=i;break;case 3:a.red=n,a.green=r,a.blue=this.value;break;case 4:a.red=i,a.green=n,a.blue=this.value;break;default:a.red=this.value,a.green=n,a.blue=r}return a.alpha=this.alpha,a},toHSL:function(){this._normalise();var t=c.HSL();t.hue=this.hue;var e=(2-this.saturation)*this.value,n=this.saturation*this.value;return e&&2-e&&(n/=e<=1?e:2-e),e/=2,t.saturation=n,t.lightness=e,t.alpha=this.alpha,t},toHSV:function(){return this.clone()}}),v("HSL",{hue:0,saturation:0,lightness:0,alpha:1,darkenByAmount:d((function(t){this.lightness=Math.min(1,Math.max(this.lightness-t,0))})),darkenByRatio:d((function(t){this.lightness=Math.min(1,Math.max(this.lightness*(1-t),0))})),lightenByAmount:d((function(t){this.lightness=Math.min(1,Math.max(this.lightness+t,0))})),lightenByRatio:d((function(t){this.lightness=Math.min(1,Math.max(this.lightness*(1+t),0))})),fromObject:function(t){return"string"==typeof t?this._fromCSS(t):t.hasOwnProperty("hue")&&t.hasOwnProperty("saturation")&&t.hasOwnProperty("lightness")?this._fromHSL(t):void 0},_fromCSS:function(t){var e=m(t).match(o);if(!e||!!e[1]+!!e[5]===1)return null;var n=c.HSL();return n.hue=(e[2]%360+360)%360,n.saturation=Math.max(0,Math.min(parseInt(e[3],10)/100,1)),n.lightness=Math.max(0,Math.min(parseInt(e[4],10)/100,1)),n.alpha=e[5]?Math.max(0,Math.min(1,parseFloat(e[6]))):1,n},_fromHSL:function(t){var e=c.HSL();return e.hue=t.hue,e.saturation=t.saturation,e.lightness=t.lightness,e.alpha=t.hasOwnProperty("alpha")?t.alpha:1,e},_normalise:function(){this.hue=(this.hue%360+360)%360,this.saturation=Math.min(Math.max(0,this.saturation),1),this.lightness=Math.min(Math.max(0,this.lightness)),this.alpha=Math.min(1,Math.max(0,this.alpha))},toHSL:function(){return this.clone()},toHSV:function(){this._normalise();var t=c.HSV();t.hue=this.hue;var e=2*this.lightness,n=this.saturation*(e<=1?e:2-e);return t.value=(e+n)/2,t.saturation=2*n/(e+n)||0,t.alpha=this.alpha,t},toRGB:function(){return this.toHSV().toRGB()}}),b.isValid=function(t){var e,n=b(t),r=0;for(e in n)n.hasOwnProperty(e)&&r++;return r>0},r.brehaut.Color=b}.call(r.brehaut),t.exports=r.brehaut.Color},function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r);n(2);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=t[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(t){i=!0,a=t}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function o(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var s="mcpicker",u=document,h=u.body,c=u.documentElement;h.appendChild(document.createElement("style"));var l=document.styleSheets[document.styleSheets.length-1],f=new Map,p="px",m="auto",d="click",v="mousedown",g="mouseup",b="mousemove",y="touchstart",M="touchend",x="touchmove",S="change",w="div",C="input";function j(t){o(f.values()).forEach((function(e){return e!==t&&e.remove()}))}document.addEventListener(d,(function(t){var e=t.target;if(e.matches("input[type=color]")){t.preventDefault();var n=function(t){var e=f.get(t),n=!!e,r=!!(null==e?void 0:e.parentNode);if(n&&r)e.remove();else if(n&&!r)h.appendChild(e);else{var o=function(t,e){var n=document.createElement(e);return t.appendChild(n),n},u=function(t){return l.insertRule(t,0),l.rules[0]},p=function(t){var e,n=T.getBoundingClientRect(),r=(null===(e=t.touches)||void 0===e?void 0:e[0])||t,i=r.clientX-n.left,a=r.clientY-n.top,o=L(i/n.width),s=L(1-a/n.height);W=W.setSaturation(o).setValue(s),R(),B(),E(),F(),A()},m=function(t){var e,n=U.getBoundingClientRect(),r=((null===(e=t.touches)||void 0===e?void 0:e[0])||t).clientX-n.left,i=360*L(r/n.width);W=W.setHue(i),z=z.setHue(i),k(),O(),B(),E(),F(),A()},j=function(){W=i()().fromObject(N.map((function(t){return t.value}))),z=W.setSaturation(1).setLightness(.5),D(),E(),A()},L=function(t){return Math.min(Math.max(t,0),1)},O=function(){J.style.background="linear-gradient(to top, black, rgba(0,0,0,0)),\n      linear-gradient(to left, ".concat(z.toString(),", white)")},R=function(){var t=W.getSaturation(),e=W.getValue();Y.style.left="".concat((100*t).toFixed(2),"%"),Y.style.bottom="".concat((100*e).toFixed(2),"%")},k=function(){var t=W.getHue()/360;K.style.left="".concat((100*t).toFixed(2),"%")},B=function(){var t=W.getLuminance()>.5;q.style.backgroundColor=W.toString(),Q.style.color=t?"#000":"#FFF",Z.style.boxShadow="1px 0 0 rgba(".concat(t?"0,0,0,0.3":"255,255,255,0.5",") inset"),tt.style.backgroundColor=t?W.lightenByAmount(.6).toString():W.darkenByAmount(.4).toString()},E=function(){P.value=W.toCSS()},F=function(){G.value=Math.round(255*W.getRed()),I.value=Math.round(255*W.getGreen()),V.value=Math.round(255*W.getBlue())},A=function(){t.value=W.toCSS(),H()},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!1),t.dispatchEvent(n)},D=function(){k(),O(),R(),B()},_=document.createElement(w);_.classList.add(s),f.set(t,_),_.remove=function(){H(S),Element.prototype.remove.apply(_)};var T=o(_,w),U=o(_,w),P=o(_,C);P.value=t.value;var G=o(_,C),I=o(_,C),V=o(_,C),N=[G,I,V];N.forEach((function(t){t.type="number",t.min=0,t.max=255})),h.appendChild(_);var $=function(t){var e=t.name||t.id||Math.round(Date.now()+1e3*Math.random()).toString(16);return"".concat(s,"_").concat(e)}(t);_.classList.add($);var W=i()(P.value),z=W.setSaturation(1).setLightness(.5),X=".".concat(s,".").concat($),q=u("".concat(X," {}")),J=u("".concat(X,">div:first-child {}")),Y=u("".concat(X,">div:first-child:after {}")),K=u("".concat(X,">div:first-child+div:after {}")),Q=u("".concat(X,">input {}")),Z=u("".concat(X,">input[type=number] {}")),tt=u("".concat(X,">input::selection {}"));T.addEventListener(d,p),U.addEventListener(d,m);var et=[[v,g,b],[y,M,x]];[[T,p],[U,m]].forEach((function(t){var e=a(t,2),n=e[0],r=e[1];et.forEach((function(t){var e=a(t,3),i=e[0],o=e[1],s=e[2];n.addEventListener(i,(function(t){c.addEventListener(s,r),t.preventDefault()})),c.addEventListener(o,(function(){return c.removeEventListener(s,r)}))}))})),P.addEventListener(C,(function(){W=i()(P.value),z=W.setSaturation(1).setLightness(.5),D(),F(),A()})),N.forEach((function(t){return t.addEventListener(C,j)})),D(),E(),F()}return f.get(t)}(e);j(n);var r=e.getBoundingClientRect(),o=r.right,u=r.bottom,L=r.top,O=t.clientX,R=t.clientY,k=document.documentElement,B=k.scrollTop,E=k.clientWidth,F=k.clientHeight,A=R/F;O/E<.5?(n.style.left=r.left+p,n.style.right=m):(n.style.left=m,n.style.right=E-o+p),A<.5?(n.style.top=u+B+p,n.style.bottom=m):(n.style.top=m,n.style.bottom=F-L-B+p)}else{var H=e.closest(".".concat(s));!(null==H?void 0:H.contains(e))&&j()}}))},function(t,e,n){var r=n(3);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(5)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(4)(!1)).push([t.i,".mcpicker {\n  position: absolute;\n  width: 14rem;\n  height: 8rem;\n  margin-bottom: 0.5rem;\n  z-index: 99;\n  box-shadow: 0 0 0 1px white, 0 2px 4px rgba(0, 0, 0, 0.4), 0 4px 8px rgba(0, 0, 0, 0.3);\n}\n.mcpicker > div:first-child {\n  position: relative;\n  width: 100%;\n  height: calc(100% - 2rem);\n  user-select: none;\n  background: linear-gradient(to top, black, rgba(0, 0, 0, 0)), linear-gradient(to left, red, white);\n}\n.mcpicker > div:first-child:after {\n  content: '';\n  display: block;\n  position: absolute;\n  width: 0.5rem;\n  height: 0.5rem;\n  border-radius: 1rem;\n  box-shadow: 0 0 0 1px black inset, 0 0 0 2px white inset;\n  transform: translate(-50%, 50%);\n  pointer-events: none;\n}\n.mcpicker > div:first-child + div {\n  position: relative;\n  height: 1rem;\n  user-select: none;\n  background: linear-gradient(to right, #F00, #FF0, #0F0, #0FF, #00F, #F0F, #F00);\n}\n.mcpicker > div:first-child + div:after {\n  content: '';\n  display: block;\n  position: absolute;\n  left: 50%;\n  top: 0;\n  width: 3px;\n  transform: translateX(-2px);\n  height: inherit;\n  box-shadow: 0 0 0 1px black inset, 0 0 0 2px white inset;\n  pointer-events: none;\n}\n.mcpicker input {\n  width: 40%;\n  height: 1rem;\n  display: block;\n  float: left;\n  margin: 0;\n  padding: 0.125rem 0.25rem;\n  border: 0;\n  border-radius: 0;\n  box-sizing: border-box;\n  outline: none;\n  box-shadow: none;\n  background-color: transparent;\n  font-size: 1rem;\n  line-height: 1rem;\n  font-family: monospace;\n  font-weight: 600;\n  text-align: center;\n}\n.mcpicker input::-webkit-outer-spin-button,\n.mcpicker input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.mcpicker input[type=number] {\n  -moz-appearance: textfield;\n  box-shadow: 1px 0 0 rgba(255, 255, 255, 0.5) inset;\n}\n.mcpicker input + input,\n.mcpicker input + input + input,\n.mcpicker input + input + input,\n.mcpicker input + input + input + input {\n  width: 20%;\n}\n",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=(o=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),a=r.sources.map((function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"}));return[n].concat(a).concat([i]).join("\n")}var o;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(r[a]=!0)}for(i=0;i<t.length;i++){var o=t[i];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},function(t,e,n){var r,i,a={},o=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),s=function(t,e){return e?e.querySelector(t):document.querySelector(t)},u=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=s.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),h=null,c=0,l=[],f=n(6);function p(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=a[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(y(r.parts[o],e))}else{var s=[];for(o=0;o<r.parts.length;o++)s.push(y(r.parts[o],e));a[r.id]={id:r.id,refs:1,parts:s}}}}function m(t,e){for(var n=[],r={},i=0;i<t.length;i++){var a=t[i],o=e.base?a[0]+e.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};r[o]?r[o].parts.push(s):n.push(r[o]={id:o,parts:[s]})}return n}function d(t,e){var n=u(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),l.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=u(t.insertAt.before,n);n.insertBefore(e,i)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=l.indexOf(t);e>=0&&l.splice(e,1)}function g(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return b(e,t.attrs),d(t,e),e}function b(t,e){Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])}))}function y(t,e){var n,r,i,a;if(e.transform&&t.css){if(!(a="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=a}if(e.singleton){var o=c++;n=h||(h=g(e)),r=S.bind(null,n,o,!1),i=S.bind(null,n,o,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",b(e,t.attrs),d(t,e),e}(e),r=C.bind(null,n,e),i=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(e),r=w.bind(null,n),i=function(){v(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=m(t,e);return p(n,e),function(t){for(var r=[],i=0;i<n.length;i++){var o=n[i];(s=a[o.id]).refs--,r.push(s)}t&&p(m(t,e),e);for(i=0;i<r.length;i++){var s;if(0===(s=r[i]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete a[s.id]}}}};var M,x=(M=[],function(t,e){return M[t]=e,M.filter(Boolean).join("\n")});function S(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(e,i);else{var a=document.createTextNode(i),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(a,o[e]):t.appendChild(a)}}function w(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function C(t,e,n){var r=n.css,i=n.sourceMap,a=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||a)&&(r=f(r)),i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var o=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(o),s&&URL.revokeObjectURL(s)}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var i,a=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?t:(i=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")}))}}]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mc_picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mc_picker */ "./node_modules/mc_picker/dist/index.js");
/* harmony import */ var mc_picker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mc_picker__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var animated_gif_dist_Animated_GIF_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animated_gif/dist/Animated_GIF.min */ "./node_modules/animated_gif/dist/Animated_GIF.min.js");
/* harmony import */ var animated_gif_dist_Animated_GIF_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(animated_gif_dist_Animated_GIF_min__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.less */ "./src/styles.less");
/* harmony import */ var _styles_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_less__WEBPACK_IMPORTED_MODULE_2__);
 // import Animated_GIF from 'animated_gif'



var _document = document,
    head = _document.head,
    body = _document.body,
    styleSheets = _document.styleSheets;
var elm = document.querySelector.bind(document);
var rootRule = getRules(':root').pop(); //

var ANIMATION = 'animation'; //

var rootRules = getRules(':root');
var paneRule = getRules('.pane').pop(); // const paneRuleCustom = createStyleSheetRule()
// console.log('paneRuleCustom',paneRuleCustom) // todo: remove log

var customSheet = createStyleSheet();
console.log('customSheet', customSheet); // todo: remove log

var elmContent = elm('.content');
var elmFrame = elm('#frame');
var elmPane = elm('.pane');
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
var tempImg = document.createElement('img');
tempImg.addEventListener('load', onTempImageLoad);
tempImg.src = getForeignObject();
var targetImg = document.createElement('img');
var sequence = []; //

var inputEvent = new CustomEvent('input');
var frames;
var elmFrames = elm('#frames');

var setFrames = function setFrames() {
  return frames = parseInt(elmFrames.value, 10);
};

elmFrames.addEventListener('input', onInputFramesNum);
elmFrames.dispatchEvent(inputEvent);
elmFrame.addEventListener('input', onInputFrame);
var elmSize = elm('#size');
elmSize.addEventListener('input', onInputSize);
elmSize.dispatchEvent(inputEvent);
var elmTextarea = elm('textarea');
elmTextarea.addEventListener('input', onInputTextarea);
elmTextarea.dispatchEvent(inputEvent);
elm('#play').addEventListener('click', onPlayClick);
elm('#renderframe').addEventListener('click', onRenderFrameClick);
elm('#render').addEventListener('click', onRenderClick); //

function onInputSize(_ref) {
  var value = _ref.target.value;
  var size = 0.0625 * value;
  var size2 = 0.125 * value;
  var size2sqrt = Math.sqrt(2 * (size2 * size2));
  var size1sqrt = 0.5 * size2sqrt;
  var size0sqrt = 0.0 * size1sqrt;
  rootRule.style.setProperty('--size', "".concat(size, "rem"));
  rootRule.style.setProperty('--size2', "".concat(size2, "rem"));
  rootRule.style.setProperty('--size2sqrt', "".concat(size2sqrt, "rem"));
  rootRule.style.setProperty('--size1sqrt', "".concat(size1sqrt, "rem"));
  rootRule.style.setProperty('--size0sqrt', "".concat(size0sqrt, "rem"));
  setCanvasSize(elmPane.offsetHeight);
}

function onInputFrame(_ref2) {
  var value = _ref2.target.value;
  rootRule.style.setProperty('--frame', value);
}

function onInputFramesNum() {
  setFrames();
  rootRule.style.setProperty('--frames', "".concat(frames));
  elmFrame.setAttribute('max', frames);
}

function onInputTextarea(_ref3) {
  var value = _ref3.target.value;
  customSheet.innerHTML = ".pane{\n  ".concat(value, "\n}");
  console.log('customSheet', customSheet); // todo: remove log
  // paneRuleCustom.cssText = `.pane{${target.innerText}}`
  // console.log('paneRuleCustom',paneRuleCustom) // todo: remove log
}

function onPlayClick() {
  animate(frames);
}

function onRenderFrameClick() {
  tempImg.src = getForeignObject(canvas.width);
}

function onRenderClick() {
  sequence.length = 0;
  animate(frames, function () {
    tempImg.src = getForeignObject(canvas.width);
  }, function () {
    var size = canvas.width;
    var ag = new animated_gif_dist_Animated_GIF_min__WEBPACK_IMPORTED_MODULE_1___default.a({
      palette: [0xFF0000, 0x0000FF, 0x00FF00, 0x000000] // doesn't work?

    });
    console.log('ag', ag); // todo: remove log
    // ag.onRenderProgress(cb)

    ag.setSize(size, size);
    ag.setDelay(40);
    sequence.forEach(ag.addFrame.bind(ag));
    var animatedImage = document.createElement('img');
    animatedImage.classList.add(ANIMATION);
    ag.getBase64GIF(function (src) {
      animatedImage.src = src;
      var prev = elmContent.querySelector(".".concat(ANIMATION));
      prev && elmContent.removeChild(prev);
      elmContent.appendChild(animatedImage);
    });
  });
}

function onTempImageLoad(e) {
  ctx.drawImage(e.target, 0, 0);
  targetImg.src = canvas.toDataURL();
  sequence.push(targetImg.cloneNode());
}

function animate(frame, step, done) {
  var part = (frames - frame) / frames; //console.log('step',frame,part)

  rootRule.style.setProperty('--part', "".concat(part));
  rootRule.style.setProperty('--frame', "".concat(frame));
  step && step();
  frame !== 0 && requestAnimationFrame(animate.bind(null, frame - 1, step, done)) || done && done();
}

function createStyleSheet() {
  var sheet = document.createElement('style');
  sheet.setAttribute('type', 'text/css');
  head.appendChild(sheet);
  console.log('createStyleSheet', sheet); // todo: remove log

  return sheet;
} // function createStyleSheetRule(){
// 	// // body.appendChild(document.createElement('style'))
//   // console.log('paneRule',paneRule) // todo: remove log
// 	// const sheet = paneRule.parentStyleSheet//document.styleSheets[document.styleSheets.length-1]
// 	// sheet.insertRule('.asdfqwerfoo {}', sheet.rules.length)
// 	// return sheet.rules[sheet.rules.length-1]
// 	body.appendChild(document.createElement('style'))
// 	const sheet = document.styleSheets[document.styleSheets.length-1]
// 	sheet.insertRule('x {}', 0)
// 	return sheet.rules[0]
// }


function setCanvasSize(size) {
  canvas.width = canvas.height = size;
}

function getForeignObject(size) {
  return 'data:image/svg+xml,' + encodeURIComponent("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"".concat(size, "\" height=\"").concat(size, "\">\n\t<foreignObject width=\"100%\" height=\"100%\">\n\t<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t<style>\n\t\t\t").concat(rootRules.reduce(function (acc, rule) {
    return acc + rule.cssText;
  }, ''), "\n\t\t\t").concat(paneRule.cssText, "\n\t\t\t").concat(customSheet.innerHTML, "\n\t\t</style>\n\t\t<div class=\"pane\"></div>\n\t</div>\n\t</foreignObject></svg>"));
}
/**
 * Traverse styleSheets in search of selector
 * @param selector {string}
 * @return {number}
 */


function getRules(selector) {
  var foundRules = [];
  Array.from(document.styleSheets).forEach(function (sheet) {
    try {
      Array.from(sheet.rules).forEach(function (rule) {
        return rule.selectorText === selector && foundRules.push(rule);
      });
    } catch (err) {
      /*fails for sheet.rules on external sheets (fonts)*/
    }
  });
  return foundRules;
}

/***/ }),

/***/ "./src/styles.less":
/*!*************************!*\
  !*** ./src/styles.less ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/less-loader/dist/cjs.js??ref--4-2!./styles.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js?!./src/styles.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=index.js.map