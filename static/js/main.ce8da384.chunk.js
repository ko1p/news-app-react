(this["webpackJsonpnews-app-react"]=this["webpackJsonpnews-app-react"]||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/image-03.11434dc4.jpg"},26:function(e,t,a){e.exports=a.p+"static/media/not-found.175a96ce.svg"},27:function(e,t,a){e.exports=a.p+"static/media/image-03-hq.2058fecc.jpg"},28:function(e,t,a){e.exports=a.p+"static/media/github.e189624a.svg"},29:function(e,t,a){e.exports=a.p+"static/media/fb.48a32645.svg"},30:function(e,t,a){e.exports=a(43)},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),l=a.n(c),s=a(7);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(35),a(36),a(37);var o=a(12),i=a(2),m=["\u042f\u043d\u0432\u0430\u0440\u044f","\u0424\u0435\u0432\u0440\u0430\u043b\u044f","\u041c\u0430\u0440\u0442\u0430","\u0410\u043f\u0440\u0435\u043b\u044f","\u041c\u0430\u044f","\u0418\u044e\u043d\u044f","\u0418\u044e\u043b\u044f","\u0410\u0432\u0433\u0443\u0441\u0442\u0430","\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044f","\u041e\u043a\u0442\u044f\u0431\u0440\u044f","\u041d\u043e\u044f\u0431\u0440\u044f","\u0414\u0435\u043a\u0430\u0431\u0440\u044f"],u={currentPath:"/",user:{name:"noName",email:"",isLoggedIn:!1,id:""},mobileMenu:{isOpen:!1},results:{isOpen:!1,noResults:!1,numOfRenderedCards:3},loader:{isOpen:!1},articles:[],savedArticles:[],popup:{isOpen:!1,type:"signin",serverError:""}},_=a(8),p=a(1),d=function(e,t){switch(t.type){case"SET_CURRENT_PATH":return Object(p.a)(Object(p.a)({},e),{},{currentPath:t.payload});case"SHOW_LOADER":return Object(p.a)(Object(p.a)({},e),{},{loader:{isOpen:!0}});case"HIDE_LOADER":return Object(p.a)(Object(p.a)({},e),{},{loader:{isOpen:!1}});case"TOGGLE_POPUP":return Object(p.a)(Object(p.a)({},e),{},{popup:Object(p.a)(Object(p.a)({},e.popup),{},{isOpen:!0,type:t.payload})});case"CLOSE_POPUP":return Object(p.a)(Object(p.a)({},e),{},{popup:Object(p.a)(Object(p.a)({},e.popup),{},{isOpen:!1})});case"OPEN_SIGNIN_POPUP":return Object(p.a)(Object(p.a)({},e),{},{popup:Object(p.a)(Object(p.a)({},e.popup),{},{isOpen:!0,type:"signin"})});case"OPEN_SIGNUP_POPUP":return Object(p.a)(Object(p.a)({},e),{},{popup:Object(p.a)(Object(p.a)({},e.popup),{},{isOpen:!0,type:"signup"})});case"OPEN_SUCCESS_POPUP":return Object(p.a)(Object(p.a)({},e),{},{popup:Object(p.a)(Object(p.a)({},e.popup),{},{isOpen:!0,type:"success"})});case"OPEN_MOBILE_MENU_POPUP":return Object(p.a)(Object(p.a)({},e),{},{popup:Object(p.a)(Object(p.a)({},e.popup),{},{isOpen:!0,type:"mobile-menu"})});case"GET_SAVED_ARTICLES":return Object(p.a)(Object(p.a)({},e),{},{savedArticles:t.payload});case"GET_ARTICLES":return Object(p.a)(Object(p.a)({},e),{},{articles:Object(_.a)(t.payload),results:Object(p.a)(Object(p.a)({},e.results),{},{isOpen:!0})});case"CLEAR_SEARCH_RESULTS":return Object(p.a)(Object(p.a)({},e),{},{articles:Object(_.a)(u.articles),results:Object(p.a)(Object(p.a)({},e.results),{},{isOpen:!1})});case"SET_SERVER_ERROR":return Object(p.a)(Object(p.a)({},e),{},{popup:Object(p.a)(Object(p.a)({},e.popup),{},{serverError:t.payload})});case"USER_LOGOUT":return Object(p.a)(Object(p.a)({},e),{},{user:{name:"noName",email:"",id:"",isLoggedIn:!1}});case"UPDATE_USER_INFO":return Object(p.a)(Object(p.a)({},e),{},{user:{name:t.payload.name,email:t.payload.email,id:t.payload.id,isLoggedIn:!0}});case"TOGGLE_SAVE_ARTICLE":return Object(p.a)(Object(p.a)({},e),{},{articles:Object(_.a)(t.payload)});case"REMOVE_CARD":return Object(p.a)(Object(p.a)({},e),{},{savedArticles:Object(_.a)(t.payload)});case"SHOW_MORE_ARTICLES":return Object(p.a)(Object(p.a)({},e),{},{results:Object(p.a)(Object(p.a)({},e.results),{},{numOfRenderedCards:e.results.numOfRenderedCards+3})});case"RESET_NUM_OF_RENDERED_CARDS":return Object(p.a)(Object(p.a)({},e),{},{results:Object(p.a)(Object(p.a)({},e.results),{},{numOfRenderedCards:3})});default:return e}},E=Object(n.createContext)();function f(){return r.a.createElement("h1",null,"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430")}var h=a(16),b=a(17),g=new(function(){function e(t){Object(h.a)(this,e),this.url=t}return Object(b.a)(e,[{key:"signup",value:function(e){return fetch("".concat(this.url,"/signup"),{method:"POST",headers:{authorization:localStorage.token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,email:e.email,password:e.password})})}},{key:"signin",value:function(e){return fetch("".concat(this.url,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email,password:e.password})})}},{key:"getUserData",value:function(e){return fetch("".concat(this.url,"/users/me"),{method:"GET",headers:{authorization:"Bearer ".concat(e)}})}},{key:"getArticles",value:function(){return fetch("".concat(this.url,"/articles"),{method:"GET",headers:{authorization:"Bearer ".concat(localStorage.token)}})}},{key:"createArticle",value:function(e){return fetch("".concat(this.url,"/articles"),{method:"POST",headers:{authorization:"Bearer ".concat(localStorage.token),"Content-Type":"application/json"},body:JSON.stringify({keyword:e.keyword,title:e.title,text:e.text,date:e.date,source:e.source,link:e.link,image:e.image})})}},{key:"removeArticle",value:function(e){return fetch("".concat(this.url,"/articles/").concat(e),{method:"DELETE",headers:{authorization:"Bearer ".concat(localStorage.token),"Content-Type":"application/json"}})}}]),e}())("https://api.newsapp.ga");function O(){var e=Object(n.useContext)(E),t=e.state,a=e.dispatch,c=t.currentPath,l=[];"/"===c?l.push("header header_black"):l.push("header header_white"),Object(n.useEffect)((function(){localStorage.getItem("token")&&g.getUserData(localStorage.token).then((function(e){return e.json()})).then((function(e){a({type:"UPDATE_USER_INFO",payload:{name:e.data.name,email:e.data.email,id:e.data._id}})})).catch((function(e){return console.log(e)}))}),[]);return r.a.createElement("header",{className:l.join(" ")},r.a.createElement("div",{className:"header__container header__container_black"},r.a.createElement("p",{className:"header__logo"},"NewsExplorer"),r.a.createElement("nav",{className:"header__navigation"},r.a.createElement(s.c,{className:"header__nav-link",exact:!0,to:"/",activeClassName:"header__nav-link_active"},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),t.user.isLoggedIn?r.a.createElement(r.a.Fragment,null,r.a.createElement(s.c,{className:"header__nav-link",activeClassName:"header__nav-link_active",to:"/articles",onClick:function(){a({type:"CLEAR_SEARCH_RESULTS"})}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u044c\u0438"),r.a.createElement("button",{onClick:function(){localStorage.clear(),a({type:"USER_LOGOUT"})},className:"btn btn__logout header__nav-link header__nav-logout"},t.user.name,r.a.createElement("svg",{className:"header__logout-image",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 6L6 6L6 18H10V20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4H10V6ZM17.5856 13L13.2927 17.1339L14.707 18.4958L21.4141 12.0371L14.707 5.57837L13.2927 6.9402L17.5856 11.0741H8V13H17.5856Z",fill:"currentColor"})))):r.a.createElement("button",{onClick:function(){return a({type:"OPEN_SIGNIN_POPUP"})},className:"btn btn__auth header__nav-link"},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f"),r.a.createElement("button",{className:"btn btn__mobile-menu",onClick:function(){a({type:"OPEN_MOBILE_MENU_POPUP"})}},r.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("rect",{x:"4",y:"8",width:"16",height:"2",fill:"/"===c?"white":"black"}),r.a.createElement("rect",{x:"4",y:"14",width:"16",height:"2",fill:"/"===c?"white":"black"}))))))}var N=function(){var e={now:function(){var e=new Date;return"".concat(e.getFullYear(),".").concat(e.getMonth()+1,".").concat(e.getDate())},daysAgo:function(e){var t=new Date(new Date-864e5*e);return"".concat(t.getFullYear(),".").concat(t.getMonth()+1,".").concat(t.getDate())},cardDateTransform:function(e){var t=new Date(Date.parse(e));return"".concat(t.getDate()," ").concat(m[t.getMonth()],", ").concat(t.getFullYear())}};return e}(),v=new(function(){function e(t,a,n){Object(h.a)(this,e),this.url=t,this.authorization=a,this.fromDate=N.daysAgo(n),this.toDate=N.now()}return Object(b.a)(e,[{key:"getNews",value:function(e){return fetch("".concat(this.url,"q=").concat(e,"&from=").concat(this.fromDate,"&to=").concat(this.toDate,"&sortBy=popularity&pageSize=20&apiKey=").concat(this.authorization))}}]),e}())("https://nomoreparties.co/news/v2/everything?","e0601510cc4543dfb6160589db7bf1ea",7);function j(){var e=Object(n.useContext)(E).dispatch,t=function(){e({type:"SHOW_LOADER"})},a=function(){e({type:"HIDE_LOADER"})};return r.a.createElement("div",{className:"search"},r.a.createElement("h1",{className:"search__heading"},"\u0427\u0442\u043e \u0432 \u043c\u0438\u0440\u0435 \u0442\u0432\u043e\u0440\u0438\u0442\u0441\u044f?"),r.a.createElement("p",{className:"search__paragraph"},"\u041d\u0430\u0445\u043e\u0434\u0438\u0442\u0435 \u0441\u0430\u043c\u044b\u0435 \u0441\u0432\u0435\u0436\u0438\u0435 \u0441\u0442\u0430\u0442\u044c\u0438 \u043d\u0430 \u043b\u044e\u0431\u0443\u044e \u0442\u0435\u043c\u0443 \u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0439\u0442\u0435 \u0432 \u0441\u0432\u043e\u0451\u043c \u043b\u0438\u0447\u043d\u043e\u043c \u043a\u0430\u0431\u0438\u043d\u0435\u0442\u0435."),r.a.createElement("form",{className:"search__form",onSubmit:function(n){n.preventDefault(),e({type:"CLEAR_SEARCH_RESULTS"}),e({type:"RESET_NUM_OF_RENDERED_CARDS"}),function(n){t(),v.getNews(n).then((function(e){return e.json()})).then((function(t){var r=t.articles,c=[];r.forEach((function(e,t){var a={keyword:n,title:e.title,text:e.description,date:N.cardDateTransform(e.publishedAt),source:e.source.name,link:e.url,image:e.urlToImage,isSaved:!1,index:t};c.push(a)})),a(),e({type:"GET_ARTICLES",payload:c})}))}(n.target.searchInput.value),n.target.searchInput.value=""}},r.a.createElement("input",{className:"search__imput",name:"searchInput",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043c\u0443 \u043d\u043e\u0432\u043e\u0441\u0442\u0438",required:!0,minLength:"1"}),r.a.createElement("button",{className:"btn search__btn",type:"submit"},"\u0418\u0441\u043a\u0430\u0442\u044c")))}function y(e){e.path;return r.a.createElement("section",{className:"header-cover"},r.a.createElement(O,null),r.a.createElement(j,null))}function S(){return Object(n.useContext)(E).state.loader.isOpen?r.a.createElement("div",{className:"preloader "},r.a.createElement("i",{className:"circle-preloader"}),r.a.createElement("p",{className:"preloader__text"},"\u0418\u0434\u0435\u0442 \u043f\u043e\u0438\u0441\u043a \u043d\u043e\u0432\u043e\u0441\u0442\u0435\u0439...")):null}var k=a(26),C=a.n(k);function w(){var e=Object(n.useContext)(E).state,t=r.a.createElement("div",{className:"no-articles no-articles_is-opened"},r.a.createElement("img",{className:"no-articles__image",src:C.a,alt:"\u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"}),r.a.createElement("h3",{className:"no-articles__heading"},"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"),r.a.createElement("p",{className:"no-articles__text"},"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e \u043f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e."));return e.results.noResults?t:null}function P(e){var t=e.article,a=Object(n.useContext)(E),c=a.state,l=a.dispatch,s=function(){t.isSaved?g.removeArticle(t._id).then((function(e){return e.json()})).then((function(e){if(e.message)throw new Error(e.message);var a=Object(_.a)(c.articles).map((function(e){return e.index===t.index?(e.isSaved=!1,e):e}));l({type:"TOGGLE_SAVE_ARTICLE",payload:a})})).catch((function(e){return console.error(e.message)})):g.createArticle(t).then((function(e){return e.json()})).then((function(e){return e.data})).then((function(e){var a=Object(_.a)(c.articles).map((function(a){return a.index===t.index?(a.isSaved=!0,a._id=e._id,a):a}));l({type:"TOGGLE_SAVE_ARTICLE",payload:a})})).catch((function(e){return console.error(e.message)}))};return"/"===c.currentPath?r.a.createElement("div",{className:"article","data-id":t._id||null},c.user.isLoggedIn?t.isSaved?r.a.createElement("div",{className:"article__icon article__icon_loggined article__icon_marked",onClick:s}):r.a.createElement("div",{className:"article__icon article__icon_loggined",onClick:s}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"article__icon article__icon_not-loggined"}),r.a.createElement("button",{className:"btn__notice "},"\u0412\u043e\u0439\u0434\u0438\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c \u0441\u0442\u0430\u0442\u044c\u0438")),r.a.createElement("a",{className:"article__link",href:t.link,rel:"noopener noreferrer",target:"_blank"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(t.image,")")},className:"article__image"}),r.a.createElement("div",{className:"article__container>"},r.a.createElement("p",{className:"article__date"},t.date),r.a.createElement("h3",{className:"article__heading"},t.title),r.a.createElement("p",{className:"article__text"},t.text)),r.a.createElement("p",{className:"article__source"},t.source))):r.a.createElement("div",{className:"article","data-id":t._id||null},r.a.createElement("div",{className:"btn__delete",onClick:function(){var e=Object(_.a)(c.savedArticles).filter((function(e){return e._id!==t._id}));g.removeArticle(t._id).then((function(e){return e.json()})).then((function(){l({type:"REMOVE_CARD",payload:e})})).catch((function(e){return console.error(e)}))}}),r.a.createElement("button",{className:"btn__keyword "},t.keyword),r.a.createElement("a",{className:"article__link",href:t.link,rel:"noopener noreferrer",target:"_blank"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(t.image,")")},className:"article__image"}),r.a.createElement("div",{className:"article__container>"},r.a.createElement("p",{className:"article__date"},t.date),r.a.createElement("h3",{className:"article__heading"},t.title),r.a.createElement("p",{className:"article__text"},t.text)),r.a.createElement("p",{className:"article__source"},t.source)))}function R(e){var t=e.articles,a=Object(n.useContext)(E),c=a.state,l=a.dispatch;return t?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"articles-list"},t.map((function(e,t){return t<=c.results.numOfRenderedCards-1?r.a.createElement(P,{key:"Article-".concat(t),article:e}):null}))),"/"===c.currentPath?r.a.createElement("button",{className:"btn results__more-btn",onClick:function(){l({type:"SHOW_MORE_ARTICLES"})}},"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0451"):null):null}function L(){var e=Object(n.useContext)(E).state;return e.results.isOpen?r.a.createElement("section",{className:"results results_is-opened"},r.a.createElement("h2",{className:"results__heading"},"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u043f\u043e\u0438\u0441\u043a\u0430"),r.a.createElement(R,{articles:e.articles})):null}var x=a(27),A=a.n(x),T=a(21),I=a.n(T);function U(){return r.a.createElement("section",{className:"author"},r.a.createElement("div",{className:"author__photo"},r.a.createElement("picture",null,r.a.createElement("source",{className:"author__photo-image",srcSet:A.a,media:"(max-width: 767px)"}),r.a.createElement("source",{className:"author__photo-image",srcSet:I.a,media:"(min-width: 768px)"}),r.a.createElement("img",{className:"author__photo-image",src:I.a,alt:"\u0444\u043e\u0442\u043e \u0430\u0432\u0442\u043e\u0440\u0430"}))),r.a.createElement("div",{className:"author__about"},r.a.createElement("h2",{className:"author__title"},"\u041e\u0431 \u0430\u0432\u0442\u043e\u0440\u0435"),r.a.createElement("p",{className:"author__paragraph"},"\u042d\u0442\u043e \u0431\u043b\u043e\u043a \u0441 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435\u043c \u0430\u0432\u0442\u043e\u0440\u0430 \u043f\u0440\u043e\u0435\u043a\u0442\u0430. \u0417\u0434\u0435\u0441\u044c \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0443\u043a\u0430\u0437\u0430\u0442\u044c, \u043a\u0430\u043a \u0432\u0430\u0441 \u0437\u043e\u0432\u0443\u0442, \u0447\u0435\u043c \u0432\u044b \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442\u0435\u0441\u044c, \u043a\u0430\u043a\u0438\u043c\u0438 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u044f\u043c\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0432\u043b\u0430\u0434\u0435\u0435\u0442\u0435."),r.a.createElement("p",{className:"author__paragraph"},"\u0422\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u0440\u0430\u0441\u0441\u043a\u0430\u0437\u0430\u0442\u044c \u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0432 \u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c\u0435, \u0447\u0435\u043c\u0443 \u0432\u044b \u0442\u0443\u0442 \u043d\u0430\u0443\u0447\u0438\u043b\u0438\u0441\u044c, \u0438 \u0447\u0435\u043c \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043c\u043e\u0447\u044c \u043f\u043e\u0442\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u043c \u0437\u0430\u043a\u0430\u0437\u0447\u0438\u043a\u0430\u043c.")))}var D=a(28),V=a.n(D),G=a(29),H=a.n(G);function F(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Supersite, Powered by News API"),r.a.createElement("div",{className:"footer__links"},r.a.createElement("ul",{className:"footer__nav"},r.a.createElement("li",{className:"footer__nav-item"},r.a.createElement(s.b,{className:"footer__link",to:"/"},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f")),r.a.createElement("li",{className:"footer__nav-item"},r.a.createElement("a",{className:"footer__link",href:"https://praktikum.yandex.ru/"},"\u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c"))),r.a.createElement("div",{className:"footer__social"},r.a.createElement("a",{className:"footer__social-link",href:"https://github.com/ko1p"},r.a.createElement("img",{src:V.a,alt:"\u0438\u043a\u043e\u043d\u043a\u0430 github"})),r.a.createElement("a",{className:"footer__social-link",href:"https://www.facebook.com/anton.belko.5"},r.a.createElement("img",{src:H.a,alt:"\u0438\u043a\u043e\u043d\u043a\u0430 facebook"})))))}var M=a(11),B=a(9),z=a.n(B);function q(){var e=Object(n.useContext)(E),t=e.state,a=e.dispatch,c=Object(n.useState)({isInputsValid:{email:!1,password:!1}}),l=Object(o.a)(c,2),s=l[0],i=l[1],m=function(){return Object.values(s.isInputsValid).every((function(e){return!0===e}))},u=function(e){var t=e.target.name,a=e.target.checkValidity();i(Object(p.a)(Object(p.a)({},s),{},{isInputsValid:Object(p.a)(Object(p.a)({},s.isInputsValid),{},Object(M.a)({},t,a))})),e.target.nextSibling.className=a?"form__error form__error_email":"form__error form__error_email form__error_active"};return r.a.createElement("div",{className:"popup__container"},r.a.createElement("img",{onClick:function(){a({type:"CLOSE_POPUP"})},className:"popup__close",src:z.a,alt:"\u043a\u043d\u043e\u043f\u043a\u0430 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f \u0444\u043e\u0440\u043c\u044b"}),r.a.createElement("form",{className:"form__signin",name:"signin",onSubmit:function(e){e.preventDefault();var t=Object.fromEntries(new FormData(e.target).entries());g.signin(t).then((function(e){return e.json()})).then((function(e){if(e.message)throw a({type:"SET_SERVER_ERROR",payload:e.message}),new Error(e.message);return localStorage.setItem("token",e.token),e})).then((function(){if(!localStorage.getItem("token"))throw new Error("\u0422\u043e\u043a\u0435\u043d \u043d\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d");g.getUserData(localStorage.token).then((function(e){return e.json()})).then((function(e){a({type:"UPDATE_USER_INFO",payload:{name:e.data.name,email:e.data.email,id:e.data._id}}),a({type:"CLOSE_POPUP"})})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.error(e)}))},onChange:m},r.a.createElement("h3",{className:"form__heading"},"\u0412\u0445\u043e\u0434"),r.a.createElement("fieldset",{className:"form__fieldset"},r.a.createElement("div",{className:"form__field"},r.a.createElement("label",{className:"form__label",htmlFor:"signin__email"},"Email"),r.a.createElement("input",{onChange:u,className:"form__input",type:"email",name:"email",id:"signin__email",pattern:"[a-z0-9-_]+[@]{1}\\w{2,}\\.\\w{2,}",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0447\u0442\u0443",required:!0}),r.a.createElement("span",{className:"form__error form__error_email"},"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 email")),r.a.createElement("div",{className:"form__field"},r.a.createElement("label",{className:"form__label",htmlFor:"signin__password"},"\u041f\u0430\u0440\u043e\u043b\u044c"),r.a.createElement("input",{onChange:u,className:"form__input",type:"password",name:"password",id:"signin__password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",required:!0,minLength:"8"}),r.a.createElement("span",{className:"form__error form__error_email"},"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u044f 8 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")),t.popup.serverError?r.a.createElement("span",{className:"form__error form__error_server form__error_active"},t.popup.serverError):null,r.a.createElement("button",{className:"btn form__btn",type:"submit",disabled:!m()},"\u0412\u043e\u0439\u0442\u0438")),r.a.createElement("p",{className:"form__reference"},"\u0438\u043b\u0438 ",r.a.createElement("span",{onClick:function(){var e=t.popup.type;a({type:"TOGGLE_POPUP",payload:function(e){return"signin"===e?"signup":"signin"}(e)})},className:"form__link form__link-signup"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"))))}function W(){var e=Object(n.useContext)(E),t=e.state,a=e.dispatch,c=Object(n.useState)({isInputsValid:{email:!1,password:!1}}),l=Object(o.a)(c,2),s=l[0],i=l[1],m=function(){return Object.values(s.isInputsValid).every((function(e){return!0===e}))},u=function(e){var t=e.target.name,a=e.target.checkValidity();i(Object(p.a)(Object(p.a)({},s),{},{isInputsValid:Object(p.a)(Object(p.a)({},s.isInputsValid),{},Object(M.a)({},t,a))})),e.target.nextSibling.className=a?"form__error form__error_email":"form__error form__error_email form__error_active"};return r.a.createElement("div",{className:"popup__container"},r.a.createElement("img",{onClick:function(){a({type:"CLOSE_POPUP"})},className:"popup__close",src:z.a,alt:"\u043a\u043d\u043e\u043f\u043a\u0430 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f \u0444\u043e\u0440\u043c\u044b"}),r.a.createElement("form",{className:"form__signup",name:"signin",onSubmit:function(e){e.preventDefault();var t=Object.fromEntries(new FormData(e.target).entries());console.log(t),g.signup(t).then((function(e){return e.json()})).then((function(e){if(e.data)a({type:"OPEN_SUCCESS_POPUP"});else if(e.message)throw a({type:"SET_SERVER_ERROR",payload:e.message}),new Error(e.message)})).catch((function(e){return console.error(e)}))},onChange:m},r.a.createElement("h3",{className:"form__heading"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),r.a.createElement("fieldset",{className:"form__fieldset"},r.a.createElement("div",{className:"form__field"},r.a.createElement("label",{className:"form__label",htmlFor:"signup__email"},"Email"),r.a.createElement("input",{onChange:u,className:"form__input",type:"email",name:"email",id:"signup__email",pattern:"[a-z0-9-_]+[@]{1}\\w{2,}\\.\\w{2,}",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0447\u0442\u0443",required:!0}),r.a.createElement("span",{className:"form__error form__error_email "},"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 email")),r.a.createElement("div",{className:"form__field"},r.a.createElement("label",{className:"form__label",htmlFor:"signup__password"},"\u041f\u0430\u0440\u043e\u043b\u044c"),r.a.createElement("input",{onChange:u,className:"form__input",type:"password",name:"password",id:"signup__password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",required:!0,minLength:"8"}),r.a.createElement("span",{className:"form__error form__error_email"},"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u044f 8 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")),r.a.createElement("div",{className:"form__field"},r.a.createElement("label",{className:"form__label",htmlFor:"signup__name"},"\u0418\u043c\u044f"),r.a.createElement("input",{onChange:u,className:"form__input",type:"text",name:"name",id:"signup__name",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0451 \u0438\u043c\u044f",required:!0,minLength:"2"}),r.a.createElement("span",{className:"form__error form__error_name"},"\u0418\u043c\u044f \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0434\u043b\u0438\u043d\u0435\u0435 1 \u0441\u0438\u043c\u0432\u043e\u043b\u0430")),t.popup.serverError?r.a.createElement("span",{className:"form__error form__error_server form__error_active"},t.popup.serverError):null,r.a.createElement("button",{className:"btn form__btn",type:"submit",disabled:!m()},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f")),r.a.createElement("p",{className:"form__reference"},"\u0438\u043b\u0438 ",r.a.createElement("span",{onClick:function(){var e=t.popup.type;a({type:"TOGGLE_POPUP",payload:function(e){return"signin"===e?"signup":"signin"}(e)})},className:"form__link form__link-signin"},"\u0412\u043e\u0439\u0442\u0438"))))}function J(){var e=Object(n.useContext)(E).dispatch;return r.a.createElement("div",{className:"popup__container"},r.a.createElement("img",{className:"popup__close",onClick:function(){e({type:"CLOSE_POPUP"})},src:z.a,alt:"\u043a\u043d\u043e\u043f\u043a\u0430 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f \u0444\u043e\u0440\u043c\u044b"}),r.a.createElement("h3",{className:"popup__heading"},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d"),r.a.createElement("span",{onClick:function(){e({type:"OPEN_SIGNIN_POPUP"})},className:"form__link form__link-success"},"\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0432\u0445\u043e\u0434"))}function Z(){var e=Object(n.useContext)(E).dispatch;return r.a.createElement("div",{className:"mobile-menu"},r.a.createElement("div",{className:"mobile-menu__header"},r.a.createElement("p",{className:"mobile-menu__logo"},"NewsExplorer"),r.a.createElement("img",{className:"mobile-menu__close",src:z.a,onClick:function(){e({type:"CLOSE_POPUP"})},alt:"\u043a\u043d\u043e\u043f\u043a\u0430 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f \u043c\u0435\u043d\u044e"})),r.a.createElement("nav",{className:"mobile-menu__links"},r.a.createElement(s.b,{className:"mobile-menu__link",to:"/",onClick:function(){e({type:"CLOSE_POPUP"})}},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),r.a.createElement(s.b,{className:"mobile-menu__link",to:"/articles",onClick:function(){e({type:"CLOSE_POPUP"}),e({type:"CLEAR_SEARCH_RESULTS"})}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u044c\u0438")),r.a.createElement("button",{className:"btn mobile-menu__btn mobile-menu__btn-auth mobile-menu__btn",onClick:function(){e({type:"OPEN_SIGNIN_POPUP"})}},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f"),r.a.createElement("button",{className:"btn mobile-menu__btn mobile-menu__btn-logout mobile-menu__btn_hide"},r.a.createElement("svg",{className:"header__logout-image",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 6L6 6L6 18H10V20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4H10V6ZM17.5856 13L13.2927 17.1339L14.707 18.4958L21.4141 12.0371L14.707 5.57837L13.2927 6.9402L17.5856 11.0741H8V13H17.5856Z",fill:"#FFF"}))))}function Y(){var e=Object(n.useContext)(E),t=e.state,a=e.dispatch;Object(n.useEffect)((function(){return document.addEventListener("click",l),document.addEventListener("keydown",c),function(){document.removeEventListener("click",l),document.removeEventListener("keydown",c)}}));var c=function(e){"Escape"===e.key&&a({type:"CLOSE_POPUP"})},l=function(e){e.target.classList.contains("popup")&&a({type:"CLOSE_POPUP"})};return r.a.createElement(r.a.Fragment,null,t.popup.isOpen?r.a.createElement("div",{className:"popup popup_is-opened"},function(e){switch(e){case"signin":return r.a.createElement(q,null);case"signup":return r.a.createElement(W,null);case"success":return r.a.createElement(J,null);case"mobile-menu":return r.a.createElement(Z,null);default:return t}}(t.popup.type)):null)}function K(e){var t=Object(n.useContext)(E).dispatch,a=e.location.pathname;return Object(n.useEffect)((function(){t({type:"SET_CURRENT_PATH",payload:a})}),[a,t]),r.a.createElement("main",{className:"page"},r.a.createElement(y,null),r.a.createElement(S,null),r.a.createElement(w,null),r.a.createElement(L,null),r.a.createElement(U,null),r.a.createElement(F,null),r.a.createElement(Y,null))}function $(){var e=Object(n.useContext)(E),t=e.state,a=e.dispatch;return Object(n.useEffect)((function(){g.getArticles().then((function(e){return e.json()})).then((function(e){a({type:"GET_SAVED_ARTICLES",payload:e.data})})).catch((function(e){return console.error(e)}))}),[a]),r.a.createElement("section",{className:"results results_is-opened"},r.a.createElement("div",{className:"results__info"},r.a.createElement("p",{className:"results__reference"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u044c\u0438"),r.a.createElement("h2",{className:"results__title"},"\u0423 \u0432\u0430\u0441 ",0===t.savedArticles.length?"\u043d\u0435\u0442":t.savedArticles.length," \u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0445 \u0441\u0442\u0430\u0442\u0435\u0439"),0===t.savedArticles.length?null:r.a.createElement("p",{className:"results__keywords"},"\u041f\u043e \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u043c \u0441\u043b\u043e\u0432\u0430\u043c: ",function(){var e,a=t.savedArticles.map((function(e){return e.keyword})).reduce((function(e,t){return e[t]?e[t]+=1:e[t]=1,e}),{}),n=Object.entries(a).sort((function(e,t){return t[1]-e[1]}));if(n.length<=3){var r="";n.forEach((function(e){r+="".concat(e[0],", ")})),e=r.slice(0,-2)}return n.length>3&&(e="".concat(n[0][0],", ").concat(n[1][0]," \u0438 ").concat(n.length-2," \u0434\u0440\u0443\u0433\u0438\u043c")),e}())),r.a.createElement(R,{articles:t.savedArticles}))}function Q(e){var t=Object(n.useContext)(E).dispatch,a=e.location.pathname;return Object(n.useEffect)((function(){t({type:"SET_CURRENT_PATH",payload:a})}),[a,t]),r.a.createElement("main",{className:"page"},r.a.createElement(O,null),r.a.createElement($,null),r.a.createElement(w,null),r.a.createElement(Y,null),r.a.createElement(F,null))}var X=function(){var e=Object(n.useReducer)(d,u),t=Object(o.a)(e,2),a=t[0],c=t[1];return r.a.createElement(E.Provider,{value:{state:a,dispatch:c}},r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/",component:K}),r.a.createElement(i.b,{exact:!0,path:"/articles"},a.user.isLoggedIn?Object(i.g)(Q):r.a.createElement(i.a,{to:"/"})),r.a.createElement(i.b,{component:f})))};l.a.render(r.a.createElement(s.a,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(X,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a.p+"static/media/close.d94383b5.svg"}},[[30,1,2]]]);
//# sourceMappingURL=main.ce8da384.chunk.js.map