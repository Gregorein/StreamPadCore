import{j as r}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as K}from"./index-CcnH5Kt0.js";import{an as A,ao as J,ai as ye,ap as ve,aq as xe}from"./index-DklxHRgB.js";import"./index-RYns6xqu.js";import"./iframe-DNxZ2y7q.js";import"../sb-preview/runtime.js";import"./index-D16Yfzz8.js";import"./index-BjYVqHGM.js";var je=Object.defineProperty,s=(e,t)=>je(e,"name",{value:t,configurable:!0});function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)({}).hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},y.apply(null,arguments)}s(y,"_extends");function Q(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}s(Q,"_assertThisInitialized");function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,n){return a.__proto__=n,a},v(e,t)}s(v,"_setPrototypeOf");function Z(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,v(e,t)}s(Z,"_inheritsLoose");function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},k(e)}s(k,"_getPrototypeOf");function W(e){try{return Function.toString.call(e).indexOf("[native code]")!==-1}catch{return typeof e=="function"}}s(W,"_isNativeFunction");function H(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(H=s(function(){return!!e},"_isNativeReflectConstruct"))()}s(H,"_isNativeReflectConstruct");function ee(e,t,a){if(H())return Reflect.construct.apply(null,arguments);var n=[null];n.push.apply(n,t);var o=new(e.bind.apply(e,n));return a&&v(o,a.prototype),o}s(ee,"_construct");function P(e){var t=typeof Map=="function"?new Map:void 0;return P=s(function(a){if(a===null||!W(a))return a;if(typeof a!="function")throw new TypeError("Super expression must either be null or a function");if(t!==void 0){if(t.has(a))return t.get(a);t.set(a,n)}function n(){return ee(a,arguments,k(this).constructor)}return s(n,"Wrapper"),n.prototype=Object.create(a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),v(n,a)},"_wrapNativeSuper"),P(e)}s(P,"_wrapNativeSuper");var Fe={1:`Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,2:`Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,3:`Passed an incorrect argument to a color function, please pass a string representation of a color.

`,4:`Couldn't generate valid rgb string from %s, it returned %s.

`,5:`Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,6:`Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,7:`Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,8:`Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,9:`Please provide a number of steps to the modularScale helper.

`,10:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,11:`Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,12:`Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,13:`Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,14:`Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,15:`Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,16:`You must provide a template to this method.

`,17:`You passed an unsupported selector state to this method.

`,18:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,19:`fromSize and toSize must be provided as stringified numbers with the same units.

`,20:`expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,21:"expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",22:"expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",23:`fontFace expects a name of a font-family.

`,24:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,25:`fontFace expects localFonts to be an array.

`,26:`fontFace expects fileFormats to be an array.

`,27:`radialGradient requries at least 2 color-stops to properly render.

`,28:`Please supply a filename to retinaImage() as the first argument.

`,29:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,30:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",31:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,32:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,33:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,34:`borderRadius expects a radius value as a string or number as the second argument.

`,35:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,36:`Property must be a string value.

`,37:`Syntax Error at %s.

`,38:`Formula contains a function that needs parentheses at %s.

`,39:`Formula is missing closing parenthesis at %s.

`,40:`Formula has too many closing parentheses at %s.

`,41:`All values in a formula must have the same unit or be unitless.

`,42:`Please provide a number of steps to the modularScale helper.

`,43:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,44:`Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,45:`Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,46:`Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,47:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,48:`fromSize and toSize must be provided as stringified numbers with the same units.

`,49:`Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,50:`Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,51:`Expects the first argument object to have the properties prop, fromSize, and toSize.

`,52:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,53:`fontFace expects localFonts to be an array.

`,54:`fontFace expects fileFormats to be an array.

`,55:`fontFace expects a name of a font-family.

`,56:`linearGradient requries at least 2 color-stops to properly render.

`,57:`radialGradient requries at least 2 color-stops to properly render.

`,58:`Please supply a filename to retinaImage() as the first argument.

`,59:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,60:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",61:`Property must be a string value.

`,62:`borderRadius expects a radius value as a string or number as the second argument.

`,63:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,64:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,65:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,66:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,67:`You must provide a template to this method.

`,68:`You passed an unsupported selector state to this method.

`,69:`Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,70:`Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,71:`Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,72:`Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,73:`Please provide a valid CSS variable.

`,74:`CSS variable not found and no default was provided.

`,75:`important requires a valid style object, got a %s instead.

`,76:`fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,77:`remToPx expects a value in "rem" but you provided it in "%s".

`,78:`base must be set in "px" or "%" but you set it in "%s".
`};function te(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var n=t[0],o=[],i;for(i=1;i<t.length;i+=1)o.push(t[i]);return o.forEach(function(d){n=n.replace(/%[a-z]/,d)}),n}s(te,"format");var h=function(e){Z(t,e);function t(a){for(var n,o=arguments.length,i=new Array(o>1?o-1:0),d=1;d<o;d++)i[d-1]=arguments[d];return n=e.call(this,te.apply(void 0,[Fe[a]].concat(i)))||this,Q(n)}return s(t,"PolishedError"),t}(P(Error));function w(e){return Math.round(e*255)}s(w,"colorToInt");function re(e,t,a){return w(e)+","+w(t)+","+w(a)}s(re,"convertToInt");function x(e,t,a,n){if(n===void 0&&(n=re),t===0)return n(a,a,a);var o=(e%360+360)%360/60,i=(1-Math.abs(2*a-1))*t,d=i*(1-Math.abs(o%2-1)),l=0,c=0,p=0;o>=0&&o<1?(l=i,c=d):o>=1&&o<2?(l=d,c=i):o>=2&&o<3?(c=i,p=d):o>=3&&o<4?(c=d,p=i):o>=4&&o<5?(l=d,p=i):o>=5&&o<6&&(l=i,p=d);var f=a-i/2,g=l+f,m=c+f,R=p+f;return n(g,m,R)}s(x,"hslToRgb");var L={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function ae(e){if(typeof e!="string")return e;var t=e.toLowerCase();return L[t]?"#"+L[t]:e}s(ae,"nameToHex");var Ce=/^#[a-fA-F0-9]{6}$/,we=/^#[a-fA-F0-9]{8}$/,Se=/^#[a-fA-F0-9]{3}$/,ke=/^#[a-fA-F0-9]{4}$/,M=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,Pe=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,Ie=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,Te=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function B(e){if(typeof e!="string")throw new h(3);var t=ae(e);if(t.match(Ce))return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16)};if(t.match(we)){var a=parseFloat((parseInt(""+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16),alpha:a}}if(t.match(Se))return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16)};if(t.match(ke)){var n=parseFloat((parseInt(""+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16),alpha:n}}var o=M.exec(t);if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10)};var i=Pe.exec(t.substring(0,50));if(i)return{red:parseInt(""+i[1],10),green:parseInt(""+i[2],10),blue:parseInt(""+i[3],10),alpha:parseFloat(""+i[4])>1?parseFloat(""+i[4])/100:parseFloat(""+i[4])};var d=Ie.exec(t);if(d){var l=parseInt(""+d[1],10),c=parseInt(""+d[2],10)/100,p=parseInt(""+d[3],10)/100,f="rgb("+x(l,c,p)+")",g=M.exec(f);if(!g)throw new h(4,t,f);return{red:parseInt(""+g[1],10),green:parseInt(""+g[2],10),blue:parseInt(""+g[3],10)}}var m=Te.exec(t.substring(0,50));if(m){var R=parseInt(""+m[1],10),be=parseInt(""+m[2],10)/100,ge=parseInt(""+m[3],10)/100,G="rgb("+x(R,be,ge)+")",C=M.exec(G);if(!C)throw new h(4,t,G);return{red:parseInt(""+C[1],10),green:parseInt(""+C[2],10),blue:parseInt(""+C[3],10),alpha:parseFloat(""+m[4])>1?parseFloat(""+m[4])/100:parseFloat(""+m[4])}}throw new h(5)}s(B,"parseToRgb");function ne(e){var t=e.red/255,a=e.green/255,n=e.blue/255,o=Math.max(t,a,n),i=Math.min(t,a,n),d=(o+i)/2;if(o===i)return e.alpha!==void 0?{hue:0,saturation:0,lightness:d,alpha:e.alpha}:{hue:0,saturation:0,lightness:d};var l,c=o-i,p=d>.5?c/(2-o-i):c/(o+i);switch(o){case t:l=(a-n)/c+(a<n?6:0);break;case a:l=(n-t)/c+2;break;default:l=(t-a)/c+4;break}return l*=60,e.alpha!==void 0?{hue:l,saturation:p,lightness:d,alpha:e.alpha}:{hue:l,saturation:p,lightness:d}}s(ne,"rgbToHsl");function q(e){return ne(B(e))}s(q,"parseToHsl");var Be=s(function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},"reduceHexValue"),N=Be;function b(e){var t=e.toString(16);return t.length===1?"0"+t:t}s(b,"numberToHex");function S(e){return b(Math.round(e*255))}s(S,"colorToHex");function oe(e,t,a){return N("#"+S(e)+S(t)+S(a))}s(oe,"convertToHex");function j(e,t,a){return x(e,t,a,oe)}s(j,"hslToHex");function se(e,t,a){if(typeof e=="number"&&typeof t=="number"&&typeof a=="number")return j(e,t,a);if(typeof e=="object"&&t===void 0&&a===void 0)return j(e.hue,e.saturation,e.lightness);throw new h(1)}s(se,"hsl");function ie(e,t,a,n){if(typeof e=="number"&&typeof t=="number"&&typeof a=="number"&&typeof n=="number")return n>=1?j(e,t,a):"rgba("+x(e,t,a)+","+n+")";if(typeof e=="object"&&t===void 0&&a===void 0&&n===void 0)return e.alpha>=1?j(e.hue,e.saturation,e.lightness):"rgba("+x(e.hue,e.saturation,e.lightness)+","+e.alpha+")";throw new h(2)}s(ie,"hsla");function I(e,t,a){if(typeof e=="number"&&typeof t=="number"&&typeof a=="number")return N("#"+b(e)+b(t)+b(a));if(typeof e=="object"&&t===void 0&&a===void 0)return N("#"+b(e.red)+b(e.green)+b(e.blue));throw new h(6)}s(I,"rgb");function F(e,t,a,n){if(typeof e=="string"&&typeof t=="number"){var o=B(e);return"rgba("+o.red+","+o.green+","+o.blue+","+t+")"}else{if(typeof e=="number"&&typeof t=="number"&&typeof a=="number"&&typeof n=="number")return n>=1?I(e,t,a):"rgba("+e+","+t+","+a+","+n+")";if(typeof e=="object"&&t===void 0&&a===void 0&&n===void 0)return e.alpha>=1?I(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")"}throw new h(7)}s(F,"rgba");var _e=s(function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},"isRgb"),Ee=s(function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&typeof e.alpha=="number"},"isRgba"),Re=s(function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},"isHsl"),Me=s(function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&typeof e.alpha=="number"},"isHsla");function $(e){if(typeof e!="object")throw new h(8);if(Ee(e))return F(e);if(_e(e))return I(e);if(Me(e))return ie(e);if(Re(e))return se(e);throw new h(8)}s($,"toColorString");function Y(e,t,a){return s(function(){var n=a.concat(Array.prototype.slice.call(arguments));return n.length>=t?e.apply(this,n):Y(e,t,n)},"fn")}s(Y,"curried");function _(e){return Y(e,e.length,[])}s(_,"curry");function E(e,t,a){return Math.max(e,Math.min(t,a))}s(E,"guard");function le(e,t){if(t==="transparent")return t;var a=q(t);return $(y({},a,{lightness:E(0,1,a.lightness-parseFloat(e))}))}s(le,"darken");var Oe=_(le),ze=Oe;function de(e,t){if(t==="transparent")return t;var a=q(t);return $(y({},a,{lightness:E(0,1,a.lightness+parseFloat(e))}))}s(de,"lighten");var De=_(de),Ne=De;function ue(e,t){if(t==="transparent")return t;var a=B(t),n=typeof a.alpha=="number"?a.alpha:1,o=y({},a,{alpha:E(0,1,+(n*100-parseFloat(e)*100).toFixed(2)/100)});return F(o)}s(ue,"transparentize");var Ae=_(ue),He=Ae,u={primary:"#FF4785",secondary:"#029CFD",tertiary:"#FAFBFC",ancillary:"#22a699",orange:"#FC521F",gold:"#FFAE00",green:"#66BF3C",seafoam:"#37D5D3",purple:"#6F2CAC",ultraviolet:"#2A0481",lightest:"#FFFFFF",lighter:"#F7FAFC",light:"#EEF3F6",mediumlight:"#ECF4F9",medium:"#D9E8F2",mediumdark:"#73828C",dark:"#5C6870",darker:"#454E54",darkest:"#2E3438",border:"hsla(203, 50%, 30%, 0.15)",positive:"#66BF3C",negative:"#FF4400",warning:"#E69D00",critical:"#FFFFFF",defaultText:"#2E3438",inverseText:"#FFFFFF",positiveText:"#448028",negativeText:"#D43900",warningText:"#A15C20"},U={app:"#F6F9FC",bar:u.lightest,content:u.lightest,preview:u.lightest,gridCellSize:10,hoverable:He(.9,u.secondary),positive:"#E1FFD4",negative:"#FEDED2",warning:"#FFF5CF",critical:"#FF4400"},T={fonts:{base:['"Nunito Sans"',"-apple-system",'".SFNSText-Regular"','"San Francisco"',"BlinkMacSystemFont",'"Segoe UI"','"Helvetica Neue"',"Helvetica","Arial","sans-serif"].join(", "),mono:["ui-monospace","Menlo","Monaco",'"Roboto Mono"','"Oxygen Mono"','"Ubuntu Monospace"','"Source Code Pro"','"Droid Sans Mono"','"Courier New"',"monospace"].join(", ")},weight:{regular:400,bold:700},size:{s1:12,s2:14,s3:16,m1:20,m2:24,m3:28,l1:32,l2:40,l3:48,code:90}},qe={base:"light",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:U.app,appContentBg:u.lightest,appPreviewBg:u.lightest,appBorderColor:u.border,appBorderRadius:4,fontBase:T.fonts.base,fontCode:T.fonts.mono,textColor:u.darkest,textInverseColor:u.lightest,textMutedColor:u.dark,barTextColor:u.mediumdark,barHoverColor:u.secondary,barSelectedColor:u.secondary,barBg:u.lightest,buttonBg:U.app,buttonBorder:u.medium,booleanBg:u.mediumlight,booleanSelectedBg:u.lightest,inputBg:u.lightest,inputBorder:u.border,inputTextColor:u.darkest,inputBorderRadius:4},V=qe,$e={base:"dark",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:"#222425",appContentBg:"#1B1C1D",appPreviewBg:u.lightest,appBorderColor:"rgba(255,255,255,.1)",appBorderRadius:4,fontBase:T.fonts.base,fontCode:T.fonts.mono,textColor:"#C9CDCF",textInverseColor:"#222425",textMutedColor:"#798186",barTextColor:u.mediumdark,barHoverColor:u.secondary,barSelectedColor:u.secondary,barBg:"#292C2E",buttonBg:"#222425",buttonBorder:"rgba(255,255,255,.1)",booleanBg:"#222425",booleanSelectedBg:"#2E3438",inputBg:"#1B1C1D",inputBorder:"rgba(255,255,255,.1)",inputTextColor:u.lightest,inputBorderRadius:4},Ye=$e,Ge=(()=>{let e;return typeof window<"u"?e=window:typeof globalThis<"u"?e=globalThis:typeof global<"u"?e=global:typeof self<"u"?e=self:e={},e})();const{logger:Le}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var{window:O}=Ge,Ue=s(e=>typeof e!="string"?(Le.warn(`Color passed to theme object should be a string. Instead ${e}(${typeof e}) was passed.`),!1):!0,"isColorString"),Ve=s(e=>!/(gradient|var|calc)/.test(e),"isValidColorForPolished"),Xe=s((e,t)=>e==="darken"?F(`${ze(1,t)}`,.95):e==="lighten"?F(`${Ne(1,t)}`,.95):t,"applyPolished"),pe=s(e=>t=>{if(!Ue(t)||!Ve(t))return t;try{return Xe(e,t)}catch{return t}},"colorFactory");pe("lighten");pe("darken");var Ke=s(()=>!O||!O.matchMedia?"light":O.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light","getPreferredColorScheme"),z={light:V,dark:Ye,normal:V},D=Ke(),Je=s((e={base:D},t)=>{let a={...z[D],...z[e.base]||{},...e,base:z[e.base]?e.base:D};return{...t,...a,barSelectedColor:e.barSelectedColor||a.colorSecondary}},"create");const Qe=Je({base:"dark",fontBase:'"Roboto", sans-serif',fontCode:'"Fira Code Variable", monospace',brandTitle:"StreampadCore",brandUrl:"https://streampad.website",brandImage:"https://raw.githubusercontent.com/Gregorein/StreamPadCore/master/public/logo.png",brandTarget:"_self",colorPrimary:"#0b6bcb",colorSecondary:"#0b6bcb",textColor:"#f0f4f8",textInverseColor:"#0b6bcb",appBg:"#0b0d0e",appContentBg:"#0b0d0e",appPreviewBg:"#181a1c",appBorderColor:"#32383e",appBorderRadius:6,barTextColor:"#97c3f0",barSelectedColor:"#12467b",barHoverColor:"#0a2744",barBg:"#0b0d0e",inputBg:"#0b0d0e",inputBorder:"#12467b",inputTextColor:"#c7dff7",inputBorderRadius:6}),ce=()=>{const{story:e}=A("story"),t=e.parameters.metadata;return r.jsxs(r.Fragment,{children:[r.jsxs("h2",{children:[r.jsx("code",{style:{padding:"0 8px",background:"#0b6bcb",borderRadius:4},children:t.name})," metadata"]}),r.jsxs("p",{children:[r.jsx("b",{children:"category:"})," ",t.category,r.jsx("br",{}),r.jsx("b",{children:"tags:"})," ",t.tags.join(", "),r.jsx("br",{}),r.jsx("b",{children:"version:"})," ",t.version,r.jsx("br",{}),r.jsx("b",{children:"author:"})," ",t.author,r.jsx("br",{}),r.jsx("b",{children:"license:"})," ",t.license,r.jsx("br",{})]})]})};ce.__docgenInfo={description:"",methods:[],displayName:"Metadata"};const fe=()=>r.jsxs(r.Fragment,{children:[r.jsx("h3",{children:"Component"}),r.jsx(J,{sourceState:"none"})]});fe.__docgenInfo={description:"",methods:[],displayName:"Component"};const he=()=>{const{csfFile:e}=A("meta"),t=e.moduleExports;return r.jsxs(r.Fragment,{children:[r.jsx("h3",{children:"Template"}),r.jsx(J,{of:t.TemplateStory,sourceState:"none"})]})};he.__docgenInfo={description:"",methods:[],displayName:"Template"};const me=()=>{const{story:e}=A("story"),t=e.parameters.metadata,a=t.api.filter(({apiType:o})=>o==="function"),n=t.api.filter(({apiType:o})=>o==="value");return!a.length&&!n.length?null:r.jsxs(r.Fragment,{children:[r.jsx("h2",{children:"API"}),a.length>0&&r.jsxs(r.Fragment,{children:[r.jsx("h3",{children:"Functions"}),r.jsx("style",{children:`
						.custom-table th {
							border: none !important;
							font-size: 14px !important
						}
						.custom-table tr {
							border: none !important;
						}
						.custom-table td {
							border: none !important;
						}
					`}),r.jsxs("table",{className:"custom-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Name"}),r.jsx("th",{children:"Description"}),r.jsx("th",{children:"Required"}),r.jsx("th",{children:"Return type"}),r.jsx("th",{children:"Arg name"}),r.jsx("th",{children:"description"}),r.jsx("th",{children:"type"}),r.jsx("th",{children:"default value"}),r.jsx("th",{children:"required"})]})}),r.jsx("tbody",{children:a.map(({name:o,description:i,required:d,args:l,returnType:c})=>r.jsxs("tr",{children:[r.jsx("td",{children:o}),r.jsx("td",{children:i}),r.jsx("td",{children:d?"Yes":"No"}),r.jsx("td",{children:c}),r.jsx("td",{children:r.jsx("ul",{children:l==null?void 0:l.map(({name:p},f)=>r.jsx("li",{children:p},f))})}),r.jsx("td",{children:r.jsx("ul",{children:l==null?void 0:l.map(({description:p},f)=>r.jsx("li",{children:p},f))})}),r.jsx("td",{children:r.jsx("ul",{children:l==null?void 0:l.map(({type:p},f)=>r.jsx("li",{children:p},f))})}),r.jsx("td",{children:r.jsx("ul",{children:l==null?void 0:l.map(({defaultValue:p},f)=>r.jsx("li",{children:String(p)},f))})}),r.jsx("td",{children:r.jsx("ul",{children:l==null?void 0:l.map(({required:p},f)=>r.jsx("li",{children:p?"Yes":"No"},f))})})]},o))})]})]}),n.length>0&&r.jsxs(r.Fragment,{children:[r.jsx("h3",{children:"Values"}),r.jsxs("table",{className:"custom-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Name"}),r.jsx("th",{children:"Description"}),r.jsx("th",{children:"Required"}),r.jsx("th",{children:"Type"}),r.jsx("th",{children:"Default value"})]})}),r.jsx("tbody",{children:n.map(({name:o,description:i,required:d,type:l,defaultValue:c})=>r.jsxs("tr",{children:[r.jsx("td",{children:o}),r.jsx("td",{children:i}),r.jsx("td",{children:d?"Yes":"No"}),r.jsx("td",{children:l}),r.jsx("td",{children:String(c)})]},o))})]})]})]})};me.__docgenInfo={description:"",methods:[],displayName:"API"};function X(e){const t={h2:"h2",...K(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(ye,{isTemplate:!0}),`
`,r.jsx(ve,{}),`
`,r.jsx(xe,{}),`
`,r.jsx(t.h2,{id:"preview",children:"Preview"}),`
`,r.jsx(fe,{}),`
`,r.jsx(he,{}),`
`,r.jsx(me,{}),`
`,r.jsx(ce,{})]})}function Ze(e={}){const{wrapper:t}={...K(),...e.components};return t?r.jsx(t,{...e,children:r.jsx(X,{...e})}):X(e)}const it={parameters:{controls:{disableSave:!0},layout:"centered",docs:{theme:Qe,page:Ze}},tags:["autodocs","!dev"]};export{it as default};
