(this.webpackJsonpnina=this.webpackJsonpnina||[]).push([[23],{165:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.MetaContext=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0));function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=(0,r.createContext)({});t.MetaContext=s;var f=function(e){function t(){return c(this,t),a(this,u(t).apply(this,arguments))}var n,o,f;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){return r.default.createElement(s.Provider,{value:{extract:this.props.extract}},r.Children.only(this.props.children))}}])&&i(n.prototype,o),f&&i(n,f),t}(r.Component);t.default=f},166:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),c=(r=n(15))&&r.__esModule?r:{default:r},i=n(226),a=n(165);function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(){return l(this,t),f(this,p(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&c.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var n=o.default.createElement("div",{className:"react-head-temp"},t);c.default.render(n,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var n=e.temporaryElement.querySelector(".react-head-temp");if(null!==n){var r=Array.prototype.slice.call(n.children),o=document.head,c=o.innerHTML;(r=(r=r.filter((function(e){return-1===c.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var n=(0,i.getDuplicateTitle)();n&&(0,i.removeChild)(o,n)}else if(e.id){var r=(0,i.getDuplicateElementById)(e);r&&(0,i.removeChild)(o,r)}else if("meta"===t){var c=(0,i.getDuplicateMeta)(e);c&&(0,i.removeChild)(o,c)}else if("link"===t&&"canonical"===e.rel){var a=(0,i.getDuplicateCanonical)(e);a&&(0,i.removeChild)(o,a)}})),(0,i.appendChild)(document.head,r)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&s(n.prototype,r),a&&s(n,a),t}(o.Component);!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(b,"contextType",a.MetaContext);var m=b;t.default=m,e.exports=t.default},226:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,n=null,r=[],i=[];return e.forEach((function(e){var o=e.type,c=e.props;"title"===o?t=e:"link"===o&&"canonical"===c.rel?n=e:"meta"===o?r.push(e):i.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};c.forEach((function(e){t[e]=[]}));for(var n=[],r=function(r){var i=e[r],a=i.props.id;(a?!t.id[a]:0===o.filter((function(e){var n=i.props[e],r=t[e][n];return r&&!r.props.id})).length)&&(n.unshift(i),c.forEach((function(e){var n=i.props[e];n&&(t[e][n]=i)})))},i=e.length-1;i>=0;i--)r(i);return n}(r)),[n],i)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateElementById=function(e){var t=e.id;return t&&document.head.querySelector("#".concat(t))},t.getDuplicateMeta=function(e){var t=document.head;return r.reduce((function(n,r){var o,c=e.getAttribute(r);return c?n.concat((o=t.querySelectorAll("[".concat(r,' = "').concat(c,'"]')),(o=Array.prototype.slice.call(o||[])).filter((function(e){return!e.id})))):n}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var n=document.createDocumentFragment(),r=0,o=t.length;r<o;r++)n.appendChild(t[r]);e.appendChild(n)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var n=0,r=t.length;n<r;n++)e.removeChild(t[n])};var r=["property","name","itemprop"],o=r.concat(["itemProp"]),c=o.concat(["id"])},227:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),c=(r=n(166))&&r.__esModule?r:{default:r};function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return a(this,t),l(this,s(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){return o.default.createElement(c.default,null,o.default.createElement("title",null,this.props.title))}}])&&u(n.prototype,r),i&&u(n,i),t}(o.Component);t.default=p,e.exports=t.default},44:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},45:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return o}))},46:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return a}));var c=n(71);function i(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?Object(c.a)(e):t}function a(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=r(e);if(t){var c=r(this).constructor;n=Reflect.construct(o,arguments,c)}else n=o.apply(this,arguments);return i(this,n)}}},47:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return o}))},617:function(e,t,n){"use strict";n.r(t);var r=n(44),o=n(45),c=n(47),i=n(46),a=n(0),u=n(95),l=n.n(u),s=n(10),f=n(1),p=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"inner-wrapper",children:Object(f.jsx)("div",{className:"container-fluid no-padding",children:Object(f.jsxs)("div",{className:"row no-gutters overflow-auto",children:[Object(f.jsx)("div",{className:"col-md-6",children:Object(f.jsx)("div",{className:"main-banner",children:Object(f.jsx)("img",{src:"/templatemonster/react/nina/assets/img/slider.jpg",className:"img-fluid full-width main-img",alt:"banner"})})}),Object(f.jsx)("div",{className:"col-md-6",children:Object(f.jsx)("div",{className:"section-2 user-page main-padding",children:Object(f.jsx)("div",{className:"login-sec",children:Object(f.jsx)("div",{className:"login-box",children:Object(f.jsxs)("form",{children:[Object(f.jsx)("h4",{className:"text-light-black fw-600",children:"Sign in with your Ecom account"}),Object(f.jsx)("div",{className:"row",children:Object(f.jsxs)("div",{className:"col-12",children:[Object(f.jsxs)("p",{className:"text-light-black",children:["Have a corporate username? ",Object(f.jsx)(s.b,{to:"#",children:"Click here"})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{className:"text-light-white fs-14",children:"Email"}),Object(f.jsx)("input",{type:"email",name:"#",className:"form-control form-control-submit",placeholder:"Email I'd",required:!0})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{className:"text-light-white fs-14",children:"Password"}),Object(f.jsx)("input",{type:"password",id:"password-field",name:"#",className:"form-control form-control-submit",defaultValue:"password",placeholder:"Password",required:!0}),Object(f.jsx)("div",{"data-name":"#password-field",className:"fa fa-fw fa-eye field-icon toggle-password"})]}),Object(f.jsxs)("div",{className:"form-group checkbox-reset",children:[Object(f.jsxs)("label",{className:"custom-checkbox mb-0",children:[Object(f.jsx)("input",{type:"checkbox",name:"#"})," ",Object(f.jsx)("span",{className:"checkmark"})," Keep me signed in"]})," ",Object(f.jsx)(s.b,{to:"#",children:"Reset password"})]}),Object(f.jsx)("div",{className:"form-group",children:Object(f.jsx)("button",{type:"submit",className:"btn-second-2 btn-submit full-width",children:"Sign in"})}),Object(f.jsxs)("div",{className:"form-group text-center",children:[" ",Object(f.jsx)("span",{children:"or"})]}),Object(f.jsx)("div",{className:"form-group",children:Object(f.jsxs)("button",{type:"submit",className:"btn-second-2 btn-facebook full-width",children:[Object(f.jsx)("img",{src:"/templatemonster/react/nina/assets/img/facebook-logo.svg",alt:"btn logo"}),"Continue with Facebook"]})}),Object(f.jsx)("div",{className:"form-group",children:Object(f.jsxs)("button",{type:"submit",className:"btn-second-2 btn-google full-width",children:[Object(f.jsx)("img",{src:"/templatemonster/react/nina/assets/img/google-logo.png",alt:"btn logo"}),"Continue with Google"]})}),Object(f.jsxs)("div",{className:"form-group text-center mb-0",children:[" ",Object(f.jsx)(s.b,{to:"/register",children:"Create your account"})]})]})})]})})})})})]})})})}}]),n}(a.Component),d=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsxs)(a.Fragment,{children:[Object(f.jsxs)(l.a,{children:[Object(f.jsxs)("title",{children:["Nina - Museum & Shop - React Template | ","Login"]}),Object(f.jsx)("meta",{name:"description",content:"#"})]}),Object(f.jsx)(p,{})]})}}]),n}(a.Component);t.default=d},71:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},95:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return c.default}}),t.default=void 0;var r=i(n(165)),o=i(n(166)),c=i(n(227));function i(e){return e&&e.__esModule?e:{default:e}}var a=o.default;t.default=a}}]);
//# sourceMappingURL=23.b04b7fb6.chunk.js.map