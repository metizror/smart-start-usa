(this.webpackJsonpnina=this.webpackJsonpnina||[]).push([[28],{103:function(e){e.exports=JSON.parse('[{"id":1,"title":"Children"},{"id":2,"title":"Museum"},{"id":3,"title":"Donation"},{"id":4,"title":"Paintings"},{"id":5,"title":"Antique"},{"id":6,"title":"Handicraft"},{"id":7,"title":"Ceramicart"}]')},104:function(e){e.exports=JSON.parse('[{"id":1,"title":"Donation"},{"id":2,"title":"Education"},{"id":3,"title":"Handicraft"},{"id":4,"title":"Paintings"},{"id":5,"title":"Medical"},{"id":6,"title":"Trending"},{"id":7,"title":"Health"},{"id":8,"title":"Luxury"},{"id":9,"title":"Rings"},{"id":10,"title":"Pearl"},{"id":11,"title":"Luxury"},{"id":12,"title":"Bestseller"},{"id":13,"title":"Low Cost"}]')},611:function(e,t,s){"use strict";s.r(t);var c=s(44),a=s(45),i=s(47),n=s(46),l=s(0),r=s(95),d=s.n(r),o=s(81),m=s(89),j=s(85),b=s(86),u=s(96),h=s(2),x=s(71),O=s(10),p=s(72),N=s(82),f=s(93),v=s(97),g=s(591),y=s(584),w=s(585),k=s(606),C=s(596),I=s(602),S=s(590),F=s(595),A=s(593),R=s(331),D=s(1),T=Object(D.jsx)(g.a,{children:"Quick View"}),M=Object(D.jsx)(g.a,{children:"Add to Wishlist"}),J={spaceBetween:15,loop:!0},q={spaceBetween:15,slidesPerView:5,freeMode:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0};F.a.use([A.a,R.a]);var L=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e)).IncrementItem=function(){a.setState({clicks:a.state.clicks+1})},a.DecreaseItem=function(){a.state.clicks<1?a.setState({clicks:0}):a.setState({clicks:a.state.clicks-1})},a.state={modalshow:!1,lastActiveBox:-1,clicks:1,thumbsSwiper:null},a.modalShow=a.modalShow.bind(Object(x.a)(a)),a.modalClose=a.modalClose.bind(Object(x.a)(a)),a}return Object(a.a)(s,[{key:"handleChange",value:function(e){this.setState({clicks:e.target.value})}},{key:"componentDidMount",value:function(){this.setState({thumbsSwiper:null})}},{key:"modalShow",value:function(e){this.setState({modalshow:!0,lastActiveBox:e})}},{key:"modalClose",value:function(){this.setState({modalshow:!1})}},{key:"render",value:function(){var e=this,t=this.props.productId,s=Object(p.c)(t);return Object(D.jsxs)(l.Fragment,{children:[Object(D.jsx)("section",{className:"section-padding bg-theme-primary",children:Object(D.jsx)("div",{className:"container",children:Object(D.jsxs)("div",{className:"row",children:[Object(D.jsx)("div",{className:"col-lg-5",children:Object(D.jsx)("div",{className:"shop-detail-image",children:Object(D.jsxs)("div",{className:"detail-slider",children:[Object(D.jsx)(I.a,Object(h.a)(Object(h.a)({className:"swiper-container gallery-top"},J),{},{navigation:!0,thumbs:{swiper:this.state.thumbsSwiper},children:s.image.map((function(e,t){return Object(D.jsxs)(S.a,{children:[Object(D.jsx)(O.b,{to:"#",className:"popup",children:Object(D.jsx)("img",{src:"/templatemonster/react/nina/"+e,className:"img-fluid full-width",alt:s.title})}),Object(D.jsxs)("div",{className:"shop-type-tag",children:[!0===s.sale?Object(D.jsx)("div",{className:"product-label new type-tag",children:Object(D.jsx)("span",{children:"Sale"})}):"",s.discount>0||""!==s.discount?Object(D.jsx)("div",{className:"product-label discount type-tag",children:Object(D.jsxs)("span",{children:["-",s.discount,"%"]})}):""]})]},t)}))})),Object(D.jsx)(I.a,Object(h.a)(Object(h.a)({className:"swiper-container gallery-thumbs"},q),{},{onSwiper:this.state.thumbsSwiper,children:s.image.map((function(e,t){return Object(D.jsx)(S.a,{children:Object(D.jsx)("img",{src:"/templatemonster/react/nina/"+e,className:"img-fluid full-width",alt:s.title})},t)}))}))]})})}),Object(D.jsx)("div",{className:"col-lg-7",children:Object(D.jsxs)("div",{className:"shop-detail-contents mb-md-40 mt-md-40",children:[Object(D.jsx)("div",{className:"shop-detail-content-wrapper",children:Object(D.jsx)("h6",{className:"text-custom-black",children:s.title})}),Object(D.jsxs)("div",{className:"ratings d-flex mb-xl-20",children:[Object(f.a)(s.rating),Object(D.jsxs)("div",{className:"pro-review",children:[" ",Object(D.jsxs)("span",{children:[s.reviews.length," Reviews"]})]})]}),Object(D.jsx)("div",{className:"price",children:Object(D.jsxs)("h5",{className:"text-light-green price-tag",children:[Object(D.jsxs)("span",{className:"text-custom-primary price-tag mr-2",children:["$",(new Intl.NumberFormat).format((s.price*(100-s.discount)/100).toFixed(2))]}),s.discount>0||""!==s.discount?Object(D.jsxs)("span",{className:"fw-400 fs-14",children:["$",(new Intl.NumberFormat).format(s.price.toFixed(2))]}):""]})}),Object(D.jsx)("div",{className:"product-full-des mb-20",children:Object(D.jsx)("p",{className:"mb-0",children:s.shortdesc})}),Object(D.jsx)("div",{className:"availibity mt-20",children:Object(D.jsxs)("p",{className:"text-custom-black fw-600",children:["Avability:",!0===s.stock?Object(D.jsx)("span",{className:"text-success ml-2",children:"In Stock"}):Object(D.jsx)("span",{className:"text-danger ml-2",children:"Out Of Stock"})]})}),Object(D.jsxs)("div",{className:"quantity mb-xl-20",children:[Object(D.jsx)("p",{className:"text-custom-black mb-0 mr-2 fw-600",children:"Qty:"}),Object(D.jsxs)("div",{className:"product-qty-input",children:[Object(D.jsxs)("button",{className:"minus-btn",type:"button",name:"button",onClick:this.DecreaseItem,children:[" ",Object(D.jsx)("i",{className:"fas fa-minus"})]}),Object(D.jsx)("input",{type:"text",className:"form-control form-control-qty text-center",name:"name",value:this.state.clicks,onChange:this.handleChange.bind(this),readOnly:!0}),Object(D.jsxs)("button",{className:"plus-btn",type:"button",name:"button",onClick:this.IncrementItem,children:[" ",Object(D.jsx)("i",{className:"fas fa-plus"})]})]})]}),Object(D.jsxs)("div",{className:"shop-bottom",children:[Object(D.jsxs)("div",{className:"shop-meta mt-20",children:[Object(D.jsx)("p",{className:"text-custom-black mb-0 fw-600",children:"Categories:"}),Object(D.jsx)("ul",{className:"list-inline ml-2",children:Object(p.a)(s.category).slice(0,3).map((function(e,t){return Object(D.jsx)("li",{className:"list-inline-item",children:Object(D.jsx)(O.b,{to:"/shop/cat/"+e.id,children:e.title})},t)}))})]}),Object(D.jsxs)("div",{className:"shop-meta mt-20",children:[Object(D.jsx)("p",{className:"text-custom-black mb-0 fw-600",children:"Tags:"}),Object(D.jsx)("ul",{className:"list-inline ml-2",children:Object(p.d)(s.tags).slice(0,3).map((function(e,t){return Object(D.jsx)("li",{className:"list-inline-item",children:Object(D.jsx)(O.b,{to:"/shop/tag/"+e.id,children:e.title})},t)}))})]}),Object(D.jsx)("div",{className:"product-btn mt-20",children:!0===s.stock?Object(D.jsx)("button",{type:"button",className:"btn-solid with-line ml-2",children:"Add To Cart"}):Object(D.jsx)("button",{type:"button",className:"btn-solid with-line ml-2",onClick:p.g,children:"Add To Cart "})})]})]})}),Object(D.jsx)("div",{className:"col-12",children:Object(D.jsx)("div",{className:"shop-detail-description-sec",children:Object(D.jsx)("div",{className:"tabs",children:Object(D.jsxs)(y.a.Container,{defaultActiveKey:"tab1",children:[Object(D.jsxs)(w.a,{variant:"tabs",children:[Object(D.jsx)(w.a.Item,{children:Object(D.jsx)(w.a.Link,{eventKey:"tab1",children:"Description"})}),Object(D.jsx)(w.a.Item,{children:Object(D.jsxs)(w.a.Link,{eventKey:"tab2",children:["Reviews (",s.reviews.length,")"]})})]}),Object(D.jsxs)(y.a.Content,{children:[Object(D.jsx)(y.a.Pane,{eventKey:"tab1",dangerouslySetInnerHTML:{__html:s.htmldesc}}),Object(D.jsx)(y.a.Pane,{eventKey:"tab2",children:Object(D.jsx)("div",{className:"comment-box p-relative",children:Object(D.jsx)("div",{id:"comment-box",children:Object(D.jsx)("ul",{className:"comments",children:s.reviews.map((function(e,t){return Object(D.jsxs)("li",{className:"comment",children:[Object(f.b)(e.user).map((function(t,s){return Object(D.jsxs)("article",{children:[Object(D.jsx)("div",{className:"comment-avatar ",children:Object(D.jsx)("img",{src:"/templatemonster/react/nina/"+t.image,className:"rounded-circle",alt:t.name})}),Object(D.jsxs)("div",{className:"comment-content",children:[Object(D.jsxs)("div",{className:"comment-meta",children:[Object(D.jsxs)("div",{className:"comment-meta-header",children:[Object(D.jsx)("h6",{className:"text-color-secondary fw-500 author mb-3",children:t.name}),Object(D.jsx)("div",{className:"post-date",children:Object(D.jsx)("div",{className:"date bg-custom-black",children:e.commentdate})})]}),Object(D.jsxs)("div",{className:"comment-meta-reply",children:[" ",Object(D.jsx)(O.b,{to:"#",className:"comment-reply-link btn-first red-btn text-custom-black",children:"Reply"})]})]}),Object(D.jsx)("div",{className:"comment",children:Object(D.jsx)("p",{children:e.comment})})]})]},s)})),Object(D.jsx)("ul",{className:"children",children:e.replies.map((function(e,t){return Object(D.jsx)("li",{className:"comment",children:Object(f.b)(e.user).map((function(t,s){return Object(D.jsxs)("article",{children:[Object(D.jsx)("div",{className:"comment-avatar ",children:Object(D.jsx)("img",{src:"/templatemonster/react/nina/"+t.image,className:"rounded-circle",alt:t.name})}),Object(D.jsxs)("div",{className:"comment-content",children:[Object(D.jsxs)("div",{className:"comment-meta",children:[Object(D.jsxs)("div",{className:"comment-meta-header",children:[Object(D.jsx)("h6",{className:"text-color-secondary fw-500 author mb-3",children:t.name}),Object(D.jsx)("div",{className:"post-date",children:Object(D.jsx)("div",{className:"date bg-custom-black",children:e.commentdate})})]}),Object(D.jsxs)("div",{className:"comment-meta-reply",children:[" ",Object(D.jsx)(O.b,{to:"#",className:"comment-reply-link btn-first red-btn text-custom-black",children:"Reply"})]})]}),Object(D.jsx)("div",{className:"comment",children:Object(D.jsx)("p",{children:e.comment})})]})]},s)}))},t)}))})]},t)}))})})})})]})]})})})})]})})}),Object(D.jsx)("section",{className:"section-padding shop-description",children:Object(D.jsx)("div",{className:"container",children:Object(D.jsxs)("div",{className:"row",children:[Object(D.jsx)("div",{className:"col-12",children:Object(D.jsxs)("div",{className:"section-header-left title",children:[Object(D.jsx)("h3",{className:"text-light-black header-title ",children:"Related Items"}),Object(D.jsx)("span",{className:"fs-14",children:Object(D.jsx)(O.b,{to:"/shop-left",children:"See all"})})]})}),N.filter((function(e){return parseInt(e.id)!==parseInt(t)&&e.category.some((function(e){return s.category.includes(e)}))})).slice(0,4).map((function(t,s){return Object(D.jsx)("div",{className:"col-xl-3 col-lg-3 col-md-6 col-sm-6",children:Object(D.jsxs)("div",{className:"product-box mb-md-20",children:[Object(D.jsxs)("div",{className:"product-img",children:[Object(D.jsx)(O.b,{to:"/shop-details/"+t.id,children:Object(D.jsx)("img",{src:"/templatemonster/react/nina/"+t.image[0],className:"img-fluid full-width",alt:t.title})}),Object(D.jsxs)("div",{className:"product-badge",children:[!0===t.sale?Object(D.jsx)("div",{className:"product-label new",children:Object(D.jsx)("span",{children:"Sale"})}):"",t.discount>0||""!==t.discount?Object(D.jsx)("div",{className:"product-label discount",children:Object(D.jsxs)("span",{children:["-",t.discount,"%"]})}):""]}),Object(D.jsxs)("div",{className:"button-group",children:[Object(D.jsx)(k.a,{placement:"left",overlay:M,children:Object(D.jsxs)(O.b,{to:"#",children:[" ",Object(D.jsx)("i",{className:"pe-7s-like"})," "]})}),Object(D.jsx)(k.a,{placement:"left",overlay:T,children:Object(D.jsxs)(O.b,{to:"#",onClick:function(s){return e.modalShow(t.id)},children:[" ",Object(D.jsx)("i",{className:"pe-7s-search"})," "]})})]}),Object(D.jsx)("div",{className:"cart-hover",children:!0===t.stock?Object(D.jsx)("button",{type:"button",className:"btn-cart fw-600",children:"Add To Cart"}):Object(D.jsx)("button",{type:"button",className:"btn-cart fw-600",onClick:p.g,children:"Add To Cart"})})]}),Object(D.jsxs)("div",{className:"product-caption text-center",children:[Object(D.jsxs)("div",{className:"product-status",children:[Object(D.jsxs)("ul",{className:"product-raised",children:[Object(D.jsxs)("li",{children:[Object(D.jsx)("strong",{children:"Distribute:"})," ",(new Intl.NumberFormat).format(t.sold)]}),Object(D.jsxs)("li",{children:[Object(D.jsx)("strong",{children:"Goal:"}),Object(D.jsxs)("span",{className:"text-highlight",children:[" ",(new Intl.NumberFormat).format(t.goal)]})]})]}),Object(D.jsx)("div",{className:"progress",children:Object(D.jsx)("div",{className:"progress-bar progress-bar-color",style:{width:100*t.sold/t.goal+"%"}})})]}),Object(D.jsx)("h6",{className:"product-title fw-500 mt-10",children:Object(D.jsx)(O.b,{to:"/shop-details/"+t.id,className:"text-color-secondary",children:t.title})}),Object(D.jsxs)("div",{className:"product-money mt-10",children:[Object(D.jsxs)("span",{className:"text-light-green fw-600 fs-16",children:["$",(new Intl.NumberFormat).format((t.price*(100-t.discount)/100).toFixed(2))]}),t.discount>0||""!==t.discount?Object(D.jsxs)("span",{className:"text-price",children:["$",(new Intl.NumberFormat).format(t.price.toFixed(2))]}):""]})]})]})},s)})),Object(D.jsx)(C.a,{show:this.state.modalshow,className:"quick-view-modal",onHide:this.modalClose,"aria-labelledby":"contained-modal-title-vcenter",size:"lg",centered:!0,children:Object(D.jsxs)(C.a.Body,{children:[Object(D.jsx)("button",{type:"button",className:"close",onClick:this.modalClose,children:"\xd7"}),Object(D.jsx)(v.a,{productId:this.state.lastActiveBox})]})})]})})})]})}}]),s}(l.Component),P="Shop Details",B=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){return Object(D.jsxs)(l.Fragment,{children:[Object(D.jsxs)(d.a,{children:[Object(D.jsxs)("title",{children:["Nina - Museum & Shop - React Template | ",P]}),Object(D.jsx)("meta",{name:"description",content:"#"})]}),Object(D.jsx)(o.a,{}),Object(D.jsx)(m.a,{}),Object(D.jsx)(u.a,{breadcrumb:{pagename:P}}),Object(D.jsx)(L,{productId:this.props.match.params.id}),Object(D.jsx)(b.a,{layout:"bg-theme-primary"}),Object(D.jsx)(j.a,{})]})}}]),s}(l.Component);t.default=B},72:function(e,t,s){"use strict";s.d(t,"c",(function(){return n})),s.d(t,"a",(function(){return l})),s.d(t,"d",(function(){return r})),s.d(t,"h",(function(){return d})),s.d(t,"g",(function(){return m})),s.d(t,"f",(function(){return j})),s.d(t,"e",(function(){return b})),s.d(t,"b",(function(){return o}));var c=s(82),a=s(103),i=s(104);function n(e){return c.filter((function(t){return t.id===parseInt(e)}))[0]}function l(e){return a.filter((function(t){return e.includes(t.id)}))}function r(e){return i.filter((function(t){return e.includes(t.id)}))}function d(){return c.filter((function(e){return e.timestamp<new Date(e.postdate)}))}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{cat:"",tag:"",searchQuery:"",priceFilter:[]},s=void 0!==t.cat&&null!==t.cat&&""!==t.cat,c=void 0!==t.tag&&null!==t.tag&&""!==t.tag,a=void 0!==t.priceFilter[0]&&void 0!==t.priceFilter[1]&&null!==t.priceFilter[0]&&null!=t.priceFilter[1]&&""!==t.priceFilter[0]&&""!==t.priceFilter[1];return s&&(e=e.filter((function(e){return void 0!==e.category&&null!==e.category&&e.category.includes(parseInt(t.cat))}))),c&&(e=e.filter((function(e){return void 0!==e.tags&&null!==e.tags&&e.tags.includes(parseInt(t.tag))}))),a&&(e=e.filter((function(e){return void 0!==e.price&&null!==e.price&&e.price>t.priceFilter[0]&&e.price<=t.priceFilter[1]}))),e}function m(){alert("Product Out of Stock")}function j(){alert("Are you sure you want to delete this item from your Wishlist?")}function b(){alert("Are you sure you want to delete all this item from your cart?")}!function(){for(var e=function(e){s=(s=c.filter((function(t){return t.category.includes(parseInt(a[e].id))}))).length,a[e].count=s},t=0;t<a.length;t++){var s;e(t)}}(),function(){var e=new Date;c.slice(0,4).map((function(t){var s;return t.timestamp=e.getTime()-2592e5,t.postdate="".concat(e.getDate()-2," ").concat((s=e.getMonth(),["January","February","March","April","May","June","July","August","September","October","November","December"][s]),", ").concat(e.getFullYear()),t}))}()},81:function(e,t,s){"use strict";var c=s(44),a=s(45),i=s(47),n=s(46),l=s(0),r=s(10),d=s(1),o=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"top-header",children:Object(d.jsx)("div",{className:"container-fluid custom-container",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-6",children:Object(d.jsx)("div",{className:"top-left",children:Object(d.jsxs)("ul",{className:"top-info",children:[Object(d.jsx)("li",{children:Object(d.jsxs)(r.b,{to:"#",children:[Object(d.jsx)("i",{className:"fas fa-phone-alt"})," +000 123 45678"]})}),Object(d.jsx)("li",{children:Object(d.jsxs)(r.b,{to:"#",children:[Object(d.jsx)("i",{className:"fas fa-envelope"})," info@example.com"]})})]})})}),Object(d.jsx)("div",{className:"col-md-6",children:Object(d.jsx)("div",{className:"righ-sec",children:Object(d.jsx)("div",{className:"top-right",children:Object(d.jsxs)("ul",{className:"list-inline",children:[Object(d.jsxs)("li",{className:"list-inline-item",children:[Object(d.jsx)(r.b,{to:"#",children:Object(d.jsx)("i",{className:"fab fa-facebook-square"})})," "]}),Object(d.jsxs)("li",{className:"list-inline-item",children:[Object(d.jsx)(r.b,{to:"#",children:Object(d.jsx)("i",{className:"fab fa-twitter-square"})})," "]}),Object(d.jsxs)("li",{className:"list-inline-item",children:[Object(d.jsx)(r.b,{to:"#",children:Object(d.jsx)("i",{className:"fab fa-instagram"})})," "]}),Object(d.jsxs)("li",{className:"list-inline-item",children:[Object(d.jsx)(r.b,{to:"#",children:Object(d.jsx)("i",{className:"fab fa-linkedin"})})," "]}),Object(d.jsxs)("li",{className:"list-inline-item",children:[Object(d.jsx)(r.b,{to:"#",children:Object(d.jsx)("i",{className:"fab fa-youtube"})})," "]})]})})})})]})})})}}]),s}(l.Component);t.a=o},93:function(e,t,s){"use strict";s.d(t,"a",(function(){return i})),s.d(t,"c",(function(){return l})),s.d(t,"b",(function(){return r}));var c=s(98),a=s(1);function i(e){for(var t=[],s=0;s<5;s++)t.push(Object(a.jsx)("span",{className:"text-dark-white",children:Object(a.jsx)("i",{className:"fas fa-star"})},s));if(e&&e>0)for(var c=0;c<=e-1;c++)t[c]=Object(a.jsx)("span",{className:"text-dark-white text-yellow",children:Object(a.jsx)("i",{className:"fas fa-star"})},c);return t}var n=window.location.href;function l(e){return[{title:"facebook",iconstyle:"fb",iconClass:"fab fa-facebook-f",link:"https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(n)},{title:"twitter",iconstyle:"tw",iconClass:"fab fa-twitter",link:"http://twitter.com/intent/tweet?text="+encodeURIComponent(e)+"&"+encodeURIComponent(n)},{title:"linkedin",iconstyle:"ln",iconClass:"fab fa-linkedin-in",link:"https://www.linkedin.com/shareArticle?mini=true&url="+encodeURIComponent(n)+"&title="+encodeURIComponent(e)},{title:"pinterest",iconstyle:"gg",iconClass:"fab fa-pinterest-p",link:"http://pinterest.com/pin/create/button/?url="+encodeURIComponent(n)}]}function r(e){return c.filter((function(t){return e.includes(t.id)}))}},96:function(e,t,s){"use strict";var c=s(44),a=s(45),i=s(47),n=s(46),l=s(0),r=s(10),d=s(1),o=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"breadcrumb-area",style:{backgroundImage:"url(/templatemonster/react/nina/assets/img/innerbanner.jpg)"},children:[Object(d.jsx)("div",{className:"overlay overlay-bg"}),Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"breadcrumb-content",children:[Object(d.jsx)("h2",{children:this.props.breadcrumb.pagename}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(r.b,{to:"/",children:"Home"})}),Object(d.jsx)("li",{className:"active",children:this.props.breadcrumb.pagename})]})]})})]})}}]),s}(l.Component);t.a=o},97:function(e,t,s){"use strict";var c=s(44),a=s(45),i=s(47),n=s(46),l=s(0),r=s(10),d=s(72),o=s(93),m=s(1),j=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e)).IncrementItem=function(){a.setState({clicks:a.state.clicks+1})},a.DecreaseItem=function(){a.state.clicks<1?a.setState({clicks:0}):a.setState({clicks:a.state.clicks-1})},a.state={clicks:1},a}return Object(a.a)(s,[{key:"handleChange",value:function(e){this.setState({clicks:e.target.value})}},{key:"render",value:function(){var e=this.props.productId,t=Object(d.c)(e);return Object(m.jsx)("div",{className:"product-details-inner",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-lg-5 align-self-center",children:Object(m.jsx)("div",{className:"shop-detail-image",children:Object(m.jsx)("div",{className:"detail-slider",children:Object(m.jsx)("div",{className:"swiper-container",children:Object(m.jsx)("div",{className:"swiper-wrapper",children:Object(m.jsx)("div",{className:"swiper-slide",children:Object(m.jsx)(r.b,{to:"/shop-details/"+t.id,className:"popup",children:Object(m.jsx)("img",{src:"/templatemonster/react/nina/"+t.image[0],className:"img-fluid full-width",alt:t.title})})})})})})})}),Object(m.jsx)("div",{className:"col-lg-7",children:Object(m.jsxs)("div",{className:"shop-detail-contents mb-md-40 mt-md-40",children:[Object(m.jsx)("div",{className:"shop-detail-content-wrapper",children:Object(m.jsx)("h3",{className:"text-custom-black",children:t.title})}),Object(m.jsxs)("div",{className:"ratings d-flex mb-xl-20",children:[Object(o.a)(t.rating),Object(m.jsxs)("div",{className:"pro-review",children:[" ",Object(m.jsxs)("span",{children:[t.reviews.length," Reviews"]})]})]}),Object(m.jsx)("div",{className:"price",children:Object(m.jsxs)("h4",{className:"text-custom-red price-tag",children:[Object(m.jsxs)("span",{className:"text-custom-red price-tag mr-2",children:["$",(new Intl.NumberFormat).format((t.price*(100-t.discount)/100).toFixed(2))]}),t.discount>0||""!==t.discount?Object(m.jsxs)("span",{className:"text-light-white fw-400 fs-14",children:["$",(new Intl.NumberFormat).format(t.price.toFixed(2))]}):""]})}),Object(m.jsx)("div",{className:"product-full-des mb-20",children:Object(m.jsx)("p",{className:"mb-0",children:t.shortdesc})}),Object(m.jsx)("div",{className:"availibity mt-20",children:Object(m.jsxs)("h6",{className:"text-custom-black fw-600",children:["Avability:",!0===t.stock?Object(m.jsx)("span",{className:"text-success ml-2",children:"In Stock"}):Object(m.jsx)("span",{className:"text-danger ml-2",children:"Out Of Stock"})]})}),Object(m.jsxs)("div",{className:"quantity mb-xl-20",children:[Object(m.jsx)("h6",{className:"text-custom-black mb-0 mr-2 fw-600",children:"Qty:"}),Object(m.jsxs)("div",{className:"product-qty-input",children:[Object(m.jsxs)("button",{className:"minus-btn",type:"button",name:"button",onClick:this.DecreaseItem,children:[" ",Object(m.jsx)("i",{className:"fas fa-minus"})]}),Object(m.jsx)("input",{type:"text",className:"form-control form-control-qty text-center",name:"name",value:this.state.clicks,onChange:this.handleChange.bind(this),readOnly:!0}),Object(m.jsxs)("button",{className:"plus-btn",type:"button",name:"button",onClick:this.IncrementItem,children:[" ",Object(m.jsx)("i",{className:"fas fa-plus"})]})]})]}),Object(m.jsxs)("div",{className:"shop-bottom",children:[Object(m.jsxs)("div",{className:"shop-meta mt-20",children:[Object(m.jsx)("h6",{className:"text-custom-black mb-0 fw-600",children:"Categories:"}),Object(m.jsx)("ul",{className:"list-inline ml-2",children:Object(d.a)(t.category).slice(0,3).map((function(e,t){return Object(m.jsx)("li",{className:"list-inline-item",children:Object(m.jsx)(r.b,{to:"/shop/cat/"+e.id,children:e.title})},t)}))})]}),Object(m.jsxs)("div",{className:"shop-meta mt-20",children:[Object(m.jsx)("h6",{className:"text-custom-black mb-0 fw-600",children:"Tags:"}),Object(m.jsx)("ul",{className:"list-inline ml-2",children:Object(d.d)(t.tags).slice(0,3).map((function(e,t){return Object(m.jsx)("li",{className:"list-inline-item",children:Object(m.jsx)(r.b,{to:"/shop/tag/"+e.id,children:e.title})},t)}))})]}),Object(m.jsx)("div",{className:"product-btn mt-20",children:!0===t.stock?Object(m.jsxs)("button",{type:"button",className:"btn-solid with-line ml-2",children:["Add To Cart ",Object(m.jsx)("i",{className:"pe-7s-cart"})]}):Object(m.jsxs)("button",{type:"button",className:"btn-solid with-line ml-2",onClick:d.g,children:["Add To Cart ",Object(m.jsx)("i",{className:"pe-7s-cart"})]})})]})]})})]})})}}]),s}(l.Component);t.a=j},98:function(e){e.exports=JSON.parse('[{"id":1,"image":"assets/img/user/user-1.png","name":"Martha","address":"NY"},{"id":2,"image":"assets/img/user/user-2.png","name":"Michle","address":"CA"},{"id":3,"image":"assets/img/user/user-3.png","name":"Adem","address":"LA"},{"id":4,"image":"assets/img/user/user-4.png","name":"Jimmy","address":"CA"},{"id":5,"image":"assets/img/user/user-1.png","name":"Nico","address":"FL"},{"id":6,"image":"assets/img/user/user-2.png","name":"Richa","address":"NY"},{"id":7,"image":"assets/img/user/user-3.png","name":"Jordan","address":"NY"},{"id":8,"image":"assets/img/user/user-4.png","name":"Hemlet","address":"NJ"},{"id":9,"image":"assets/img/user/user-1.png","name":"Ricky","address":"LA"},{"id":10,"image":"assets/img/user/user-2.png","name":"Casendra","address":"LA"},{"id":11,"image":"assets/img/user/user-3.png","name":"Rob","address":"CA"},{"id":12,"image":"assets/img/user/user-4.png","name":"Mily","address":"TX"}]')}}]);
//# sourceMappingURL=28.86f02b80.chunk.js.map