(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{16:function(t,e,n){"use strict";n.d(e,"c",function(){return c}),n.d(e,"d",function(){return l}),n.d(e,"a",function(){return u}),n.d(e,"b",function(){return m}),n.d(e,"f",function(){return h}),n.d(e,"e",function(){return p});const s=/#.*$/,i=/\.(md|html)$/,o=/\/$/,a=/^(https?:|mailto:)/;function r(t){return t.replace(s,"").replace(i,"")}function c(t){return a.test(t)}function l(t){return/^mailto:/.test(t)}function u(t){if(c(t))return t;const e=t.match(s),n=e?e[0]:"",i=r(t);return o.test(i)?t:i+".html"+n}function m(t,e){const n=t.hash,i=function(t){const e=t.match(s);if(e)return e[0]}(e);if(i&&n!==i)return!1;const a=r(t.path),c=r(e);return o.test(a)||o.test(c)?a===c:0===a.indexOf(c)}function h(t,e,n){n&&(e=function(t,e,n){const s=t.charAt(0);if("/"===s)return t;if("?"===s||"#"===s)return e+t;const i=e.split("/");n&&i[i.length-1]||i.pop();const o=t.replace(/^\//,"").split("/");for(let t=0;t<o.length;t++){const e=o[t];".."===e?i.pop():"."!==e&&i.push(e)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));const s=r(e);for(let n=0;n<t.length;n++)if(r(t[n].path)===s)return Object.assign({},t[n],{type:"page",path:u(e)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function p(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}Date.prototype.Format=function(t){var e={"y+":this.getFullYear(),"M+":this.getMonth()+1,"d+":this.getDate(),"H+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var n in t||(t="yyyy-MM-dd HH:mm:ss"),/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),e)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[n]:("00"+e[n]).substr((""+e[n]).length)));return t}},18:function(t,e,n){},181:function(t){t.exports={init:"Gitalk 加载中 ...","no-found-related":"未找到相关的 %{link} 进行评论","please-contact":"请联系 %{user} 初始化创建","init-issue":"初始化 Issue","leave-a-comment":"说点什么",preview:"预览",edit:"编辑",comment:"评论","support-markdown":"支持 Markdown 语法","login-with-github":"使用 GitHub 登录","first-comment-person":"来做第一个留言的人吧！",commented:"发表于","load-more":"加载更多",counts:"%{counts} 条评论","sort-asc":"从旧到新排序","sort-desc":"从新到旧排序",logout:"注销",anonymous:"未登录用户"}},182:function(t){t.exports={init:"Gitalk 載入中…","no-found-related":"未找到相關的 %{link}","please-contact":"請聯絡 %{user} 初始化評論","init-issue":"初始化 Issue","leave-a-comment":"寫點什麼",preview:"預覽",edit:"編輯",comment:"評論","support-markdown":"支援 Markdown 語法","login-with-github":"使用 GitHub 登入","first-comment-person":"成為首個留言的人吧！",commented:"評論於","load-more":"載入更多",counts:"%{counts} 筆評論","sort-asc":"從舊至新排序","sort-desc":"從新至舊排序",logout:"登出",anonymous:"訪客"}},183:function(t){t.exports={init:"Gitalking ...","no-found-related":"Related %{link} not found","please-contact":"Please contact %{user} to initialize the comment","init-issue":"Init Issue","leave-a-comment":"Leave a comment",preview:"Preview",edit:"Edit",comment:"Comment","support-markdown":"Markdown is supported","login-with-github":"Login with GitHub","first-comment-person":"Be the first guy leaving a comment!",commented:"commented","load-more":"Load more",counts:"%{counts} comment |||| %{counts} comments","sort-asc":"Sort by Oldest","sort-desc":"Sort by Latest",logout:"Logout",anonymous:"Anonymous"}},184:function(t){t.exports={init:"Gitalking ...","no-found-related":"Link %{link} no encontrado","please-contact":"Por favor contacta con %{user} para inicializar el comentario","init-issue":"Iniciar Issue","leave-a-comment":"Deja un comentario",preview:"Avance",edit:"Editar",comment:"Comentario","support-markdown":"Markdown es soportado","login-with-github":"Entrar con GitHub","first-comment-person":"Sé el primero en dejar un comentario!",commented:"comentó","load-more":"Cargar más",counts:"%{counts} comentario |||| %{counts} comentarios","sort-asc":"Ordenar por Antiguos","sort-desc":"Ordenar por Recientes",logout:"Salir",anonymous:"Anónimo"}},185:function(t){t.exports={init:"Gitalking ...","no-found-related":"Lien %{link} non trouvé","please-contact":"S’il vous plaît contactez %{user} pour initialiser les commentaires","init-issue":"Initialisation des issues","leave-a-comment":"Laisser un commentaire",preview:"Aperçu",edit:"Modifier",comment:"Commentaire","support-markdown":"Markdown est supporté","login-with-github":"Se connecter avec GitHub","first-comment-person":"Être le premier à laisser un commentaire !",commented:"commenter","load-more":"Charger plus",counts:"%{counts} commentaire |||| %{counts} commentaires","sort-asc":"Trier par plus ancien","sort-desc":"Trier par plus récent",logout:"Déconnexion",anonymous:"Anonyme"}},186:function(t){t.exports={init:"Gitalking ...","no-found-related":"Связанные %{link} не найдены","please-contact":"Пожалуйста, свяжитесь с %{user} чтобы инициализировать комментарий","init-issue":"Выпуск инициализации","leave-a-comment":"Оставить комментарий",preview:"Предварительный просмотр",edit:"Pедактировать",comment:"Комментарий","support-markdown":"Поддерживается Markdown","login-with-github":"Вход через GitHub","first-comment-person":"Будьте первым, кто оставил комментарий",commented:"прокомментированный","load-more":"Загрузить ещё",counts:"%{counts} комментарий |||| %{counts} комментарьев","sort-asc":"Сортировать по старым","sort-desc":"Сортировать по последним",logout:"Выход",anonymous:"Анонимный"}},188:function(t,e,n){var s={"./arrow_down.svg":189,"./edit.svg":190,"./github.svg":191,"./heart.svg":192,"./heart_on.svg":193,"./reply.svg":194,"./tip.svg":195};function i(t){var e=o(t);return n(e)}function o(t){var e=s[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}i.keys=function(){return Object.keys(s)},i.resolve=o,t.exports=i,i.id=188},189:function(t,e){t.exports='<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="1619"><path d="M511.872 676.8c-0.003 0-0.006 0-0.008 0-9.137 0-17.379-3.829-23.21-9.97l-251.277-265.614c-5.415-5.72-8.743-13.464-8.744-21.984 0-17.678 14.33-32.008 32.008-32.008 9.157 0 17.416 3.845 23.25 10.009l228.045 241.103 228.224-241.088c5.855-6.165 14.113-10.001 23.266-10.001 8.516 0 16.256 3.32 21.998 8.736 12.784 12.145 13.36 32.434 1.264 45.233l-251.52 265.6c-5.844 6.155-14.086 9.984-23.223 9.984-0.025 0-0.051 0-0.076 0z" p-id="1620"></path></svg>'},19:function(t,e,n){},190:function(t,e){t.exports='<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\n  <path d="M785.333333 85.333333C774.666667 85.333333 763.2 90.133333 754.666667 98.666667L682.666667 170.666667 853.333333 341.333333 925.333333 269.333333C942.4 252.266667 942.4 222.133333 925.333333 209.333333L814.666667 98.666667C806.133333 90.133333 796 85.333333 785.333333 85.333333zM640 217.333333 85.333333 768 85.333333 938.666667 256 938.666667 806.666667 384 640 217.333333z"></path>\n</svg>\n'},191:function(t,e){t.exports='<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">\n  <path d="M64 524C64 719.602 189.356 885.926 364.113 947.017 387.65799 953 384 936.115 384 924.767L384 847.107C248.118 863.007 242.674 773.052 233.5 758.001 215 726.501 171.5 718.501 184.5 703.501 215.5 687.501 247 707.501 283.5 761.501 309.956 800.642 361.366 794.075 387.658 787.497 393.403 763.997 405.637 743.042 422.353 726.638 281.774 701.609 223 615.67 223 513.5 223 464.053 239.322 418.406 271.465 381.627 251.142 320.928 273.421 269.19 276.337 261.415 334.458 256.131 394.888 302.993 399.549 306.685 432.663 297.835 470.341 293 512.5 293 554.924 293 592.81 297.896 626.075 306.853 637.426 298.219 693.46 258.054 747.5 262.966 750.382 270.652 772.185 321.292 753.058 381.083 785.516 417.956 802 463.809 802 513.5 802 615.874 742.99 701.953 601.803 726.786 625.381 750.003 640 782.295 640 818.008L640 930.653C640.752 939.626 640 948.664978 655.086 948.665 832.344 888.962 960 721.389 960 524 960 276.576 759.424 76 512 76 264.577 76 64 276.576 64 524Z"></path>\n</svg>\n'},192:function(t,e){t.exports='<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <path d="M527.061333 166.528A277.333333 277.333333 0 0 1 1000.618667 362.666667a277.333333 277.333333 0 0 1-81.28 196.138666l-377.173334 377.173334a42.666667 42.666667 0 0 1-60.330666 0l-377.173334-377.173334a277.376 277.376 0 0 1 392.277334-392.277333l15.061333 15.061333 15.061333-15.061333z m286.72 377.173333l45.226667-45.226666a192 192 0 0 0-135.808-327.893334 192 192 0 0 0-135.808 56.32l-45.226667 45.226667a42.666667 42.666667 0 0 1-60.330666 0l-45.226667-45.226667a192.042667 192.042667 0 0 0-271.616 271.573334L512 845.482667l301.781333-301.781334z"></path>\n</svg>\n'},193:function(t,e){t.exports='<svg t="1512463363724" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <path d="M527.061333 166.528A277.333333 277.333333 0 0 1 1000.618667 362.666667a277.333333 277.333333 0 0 1-81.28 196.138666l-377.173334 377.173334a42.666667 42.666667 0 0 1-60.330666 0l-377.173334-377.173334a277.376 277.376 0 0 1 392.277334-392.277333l15.061333 15.061333 15.061333-15.061333z"></path>\n</svg>\n'},194:function(t,e){t.exports='<svg viewBox="0 0 1332 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">\n  <path d="M529.066665 273.066666 529.066665 0 51.2 477.866666 529.066665 955.733335 529.066665 675.84C870.4 675.84 1109.333335 785.066665 1280 1024 1211.733335 682.666665 1006.933335 341.333334 529.066665 273.066666"></path>\n</svg>\n'},195:function(t,e){t.exports='<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">\n  <path d="M512 366.949535c-16.065554 0-29.982212 13.405016-29.982212 29.879884l0 359.070251c0 16.167882 13.405016 29.879884 29.982212 29.879884 15.963226 0 29.879884-13.405016 29.879884-29.879884L541.879884 396.829419C541.879884 380.763865 528.474868 366.949535 512 366.949535L512 366.949535z"\n    p-id="3083"></path>\n  <path d="M482.017788 287.645048c0-7.776956 3.274508-15.553912 8.80024-21.181973 5.525732-5.525732 13.302688-8.80024 21.181973-8.80024 7.776956 0 15.553912 3.274508 21.079644 8.80024 5.525732 5.62806 8.80024 13.405016 8.80024 21.181973 0 7.776956-3.274508 15.656241-8.80024 21.181973-5.525732 5.525732-13.405016 8.697911-21.079644 8.697911-7.879285 0-15.656241-3.274508-21.181973-8.697911C485.292295 303.301289 482.017788 295.524333 482.017788 287.645048L482.017788 287.645048z"\n    p-id="3084"></path>\n  <path d="M512 946.844409c-239.8577 0-434.895573-195.037873-434.895573-434.895573 0-239.8577 195.037873-434.895573 434.895573-434.895573 239.755371 0 434.895573 195.037873 434.895573 434.895573C946.895573 751.806535 751.755371 946.844409 512 946.844409zM512 126.17088c-212.740682 0-385.880284 173.037274-385.880284 385.777955 0 212.740682 173.037274 385.777955 385.880284 385.777955 212.740682 0 385.777955-173.037274 385.777955-385.777955C897.777955 299.208154 724.740682 126.17088 512 126.17088z"\n    p-id="3085"></path>\n</svg>\n'},211:function(t,e,n){"use strict";var s=n(58);n.n(s).a},212:function(t,e,n){"use strict";var s=n(59);n.n(s).a},213:function(t,e,n){"use strict";var s=n(60);n.n(s).a},238:function(t,e,n){"use strict";n.r(e);var s=n(146),i=n.n(s);const o=t=>{return Object.keys(t).map(e=>`${e}=${encodeURIComponent(t[e]||"")}`).join("&")},a=i.a.create({headers:{Accept:"application/json"}}),r=i.a.create({baseURL:"https://api.github.com",headers:{Accept:"application/json"}}),c=(t,e)=>{e||(e="content");const n=document.querySelector(`meta[name='${t}']`);return n&&n.getAttribute(e)},l=t=>{let e="Error: ";return t.response&&t.response.data&&t.response.data.message?(e+=`${t.response.data.message}. `,t.response.data.errors&&(e+=t.response.data.errors.map(t=>t.message).join(", "))):e+=t.message,e},u=(t,...e)=>{let n=!1;if(void 0===t.className)return!1;const s=t.className.split(" ");return e.forEach((t,e)=>{n=n||s.indexOf(t)>=0}),n||t.parentNode&&u(t.parentNode,e)};var m=n(165),h=n.n(m),p=n(181);const d={zh:p,"zh-CN":p,"zh-TW":n(182),en:n(183),"es-ES":n(184),fr:n(185),ru:n(186)};var g=function(t){return new h.a({phrases:d[t]||d.en,locale:t})},v=n(187),C=n.n(v);const f=(t,e)=>{const n="last"===e?"before":"after",s=`\n    query getIssueAndComments(\n      $owner: String!,\n      $repo: String!,\n      $id: Int!,\n      $cursor: String,\n      $pageSize: Int!\n    ) {\n      repository(owner: $owner, name: $repo) {\n        issue(number: $id) {\n          title\n          url\n          bodyHTML\n          createdAt\n          comments(${e}: $pageSize, ${n}: $cursor) {\n            totalCount\n            pageInfo {\n              ${"last"===e?"hasPreviousPage":"hasNextPage"}\n              ${"before"===n?"startCursor":"endCursor"}\n            }\n            nodes {\n              id\n              databaseId\n              author {\n                avatarUrl\n                login\n                url\n              }\n              bodyHTML\n              body\n              createdAt\n              reactions(first: 100, content: HEART) {\n                totalCount\n                viewerHasReacted\n                pageInfo{\n                  hasNextPage\n                }\n                nodes {\n                  id\n                  databaseId\n                  user {\n                    login\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n    `;return null===t.cursor&&delete t.cursor,{operationName:"getIssueAndComments",query:s,variables:t}};var _=function(t){const{owner:e,repo:n,perPage:s,pagerDirection:i,defaultAuthor:o}=this.options;return r.post("/graphql",f({owner:e,repo:n,id:t.number,pageSize:s,cursor:this.cursor},i),{headers:{Authorization:`bearer ${this.accessToken}`}}).then(s=>{const a=s.data.data.repository.issue.comments,r=a.nodes.map(s=>{const i=s.author||o;return{id:s.databaseId,gId:s.id,user:{avatar_url:i.avatarUrl,login:i.login,html_url:i.url},created_at:s.createdAt,body_html:s.bodyHTML,body:s.body,html_url:`https://github.com/${e}/${n}/issues/${t.number}#issuecomment-${s.databaseId}`,reactions:s.reactions}});let c;c="last"===i?[...r,...this.comments]:[...this.comments,...r];const l=!1===a.pageInfo.hasPreviousPage||!1===a.pageInfo.hasNextPage;return this.comments=c,this.isLoadOver=l,this.cursor=a.pageInfo.startCursor||a.pageInfo.endCursor,c})};var w={data:()=>({user:null,issue:null,comments:[],localComments:[],comment:"",page:1,pagerDirection:"last",cursor:null,previewHtml:"",isNoInit:!1,isIniting:!0,isCreating:!1,isLoading:!1,isLoadMore:!1,isLoadOver:!1,isIssueCreating:!1,isPopupVisible:!1,isInputFocused:!1,isPreview:!1,isOccurError:!1,errorMsg:"",_accessToken:null,options:{},i18n:g("en"),commentEL:null}),mounted(){this.$nextTick(()=>{this.commentEL=this.$refs.commentEL,this.storedComment&&(this.comment=decodeURIComponent(this.storedComment),localStorage.removeItem("GT_COMMENT")),this.options=Object.assign(this.options,{id:document.title,number:-1,labels:["Gitalk"],title:document.title,body:"",language:navigator.language||navigator.userLanguage,perPage:10,pagerDirection:"last",createIssueManually:!1,distractionFreeMode:!1,proxy:"https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token",enableHotKey:!0,url:location.href,defaultAuthor:{avatarUrl:"//avatars1.githubusercontent.com/u/29697133?s=50",login:"null",url:""},updateCountCallback:null},this.$site.themeConfig.comment),this.i18n=g(this.options.language),this.initial()})},computed:{isAdmin(){const{admin:t}=this.options;return this.user&&~[].concat(t).map(t=>t.toLowerCase()).indexOf(this.user.login.toLowerCase())},accessToken:{get:function(){return"undefined"==typeof window?this._accessToken:this._accessToken||localStorage.getItem("GT_ACCESS_TOKEN")},set:function(t){this._accessToken=t,"undefined"!=typeof window&&localStorage.setItem("GT_ACCESS_TOKEN",t)}},loginLink(){const{clientID:t}=this.options,e={client_id:t,redirect_uri:location.href,scope:"public_repo"};return`http://github.com/login/oauth/authorize?${o(e)}`}},methods:{initial(){const t=this.$route.query;if(t.code){const e=t.code;delete this.$route.query.code;const n=`${location.origin}${location.pathname}${o(t)}${location.hash}`;history.replaceState(null,null,n),this.options=Object.assign({},this.options,{url:n,id:n},this.$site.themeConfig.comment),this.commentInital(e)}else this.getInit().then(()=>{this.isIniting=!1}).catch(t=>{console.log("err:",t),this.isIniting=!1,this.isOccurError=!0,this.errorMsg=l(t)})},commentInital(t){a.post(this.options.proxy,{code:t,client_id:this.options.clientID,client_secret:this.options.clientSecret}).then(t=>{t.data&&t.data.access_token?(this.accessToken=t.data.access_token,this.getInit().then(()=>{this.isIniting=!1}).catch(t=>{console.log("init err:",t),this.isIniting=!1,this.isOccurError=!0,this.errorMsg=l(t)})):(console.log("res.data err:",t.data),this.isOccurError=!0,this.errorMsg=l(new Error("no access token")))}).catch(t=>{console.log("err: ",t),this.isOccurError=!0,this.errorMsg=l(t)})},getInit(){return this.getUserInfo().then(()=>this.getIssue()).then(t=>this.getComments(t))},getIssue(){const{number:t}=this.options;return this.issue?(this.isNoInit=!1,Promise.resolve(this.issue)):"number"==typeof t&&t>0?this.getIssueById().then(t=>t||this.getIssueByLabels()):this.getIssueByLabels()},getIssueById(){const{owner:t,repo:e,number:n,clientID:s,clientSecret:i}=this.options,o=`/repos/${t}/${e}/issues/${n}`;return new Promise((t,e)=>{r.get(o,{params:{client_id:s,client_secret:i,t:Date.now()}}).then(e=>{let s=null;e&&e.data&&e.data.number===n&&(s=e.data,this.issue=s,this.isNoInit=!1),t(s)}).catch(n=>{404===n.response.status&&t(null),e(n)})})},getIssueByLabels(){const{owner:t,repo:e,id:n,labels:s,clientID:i,clientSecret:o}=this.options;return r.get(`/repos/${t}/${e}/issues`,{params:{client_id:i,client_secret:o,labels:s.concat(n).join(","),t:Date.now()}}).then(t=>{const{createIssueManually:e}=this.options;let n=!1,s=null;if(t&&t.data&&t.data.length)s=t.data[0];else{if(!e&&this.isAdmin)return this.createIssue();n=!0}return this.issue=s,this.isNoInit=n,s})},createIssue(){const{owner:t,repo:e,title:n,body:s,id:i,labels:o,url:a}=this.options;return r.post(`/repos/${t}/${e}/issues`,{title:n,labels:o.concat(i),body:s||`${a} \n\n ${c("description")||c("description","og:description")||""}`},{headers:{Authorization:`token ${this.accessToken}`}}).then(t=>(this.issue=t.data,t.data))},getComments(t){if(t)return this.accessToken?_.call(this,t):this.getCommentsV3(t)},createComment(){return this.getIssue().then(t=>r.post(t.comments_url,{body:this.comment},{headers:{Accept:"application/vnd.github.v3.full+json",Authorization:`token ${this.accessToken}`}})).then(t=>{this.comment="",this.comments=this.comments.concat(t.data),this.localComments=this.localComments.concat(t.data)})},getCommentsV3(t){const{clientID:e,clientSecret:n,perPage:s}=this.options;return this.getIssue().then(t=>{if(t)return r.get(t.comments_url,{headers:{Accept:"application/vnd.github.v3.full+json"},params:{client_id:e,client_secret:n,per_page:s,page:this.page}}).then(t=>{let e=!1;const n=this.comments.concat(t.data);return(n.length>=this.issue.comments||t.data.length<s)&&(e=!0),this.comments=n,this.isLoadOver=e,this.page=this.page+1,n})})},reply(t){const e=this.comment;let n=t.body.split("\n");n.unshift(`@${t.user.login}`),(n=n.map(t=>`> ${t}`)).push(""),n.push(""),e&&n.unshift(""),this.comment=e+n.join("\n"),C.a.update(this.commentEL),this.commentEL.focus()},like(t){const{owner:e,repo:n}=this.options;let s=this.comments,i=this.user;r.post(`/repos/${e}/${n}/issues/comments/${t.id}/reactions`,{content:"heart"},{headers:{Authorization:`token ${this.accessToken}`,Accept:"application/vnd.github.squirrel-girl-preview"}}).then(e=>{s=s.map(n=>(n.id===t.id&&(n.reactions?~n.reactions.nodes.findIndex(t=>t.user.login===i.login)||(n.reactions.totalCount+=1):(n.reactions={nodes:[]},n.reactions.totalCount=1),n.reactions.nodes.push(e.data),n.reactions.viewerHasReacted=!0),n)),this.comments=s})},unLike(t){let e=this.comments,n=this.user;r.post("/graphql",(t=>({operationName:"RemoveReaction",query:`\n                  mutation RemoveReaction{\n                    removeReaction (input:{\n                      subjectId: "${t}",\n                      content: HEART\n                    }) {\n                      reaction {\n                        content\n                      }\n                    }\n                  }\n                `}))(t.gId),{headers:{Authorization:`bearer ${this.accessToken}`}}).then(s=>{s.data&&(e=e.map(e=>{if(e.id===t.id){const t=e.reactions.nodes.findIndex(t=>t.user.login===n.login);~t&&(e.reactions.totalCount-=1,e.reactions.nodes.splice(t,1)),e.reactions.viewerHasReacted=!1}return e}),this.comments=e)})},handleLogin(){localStorage.setItem("GT_COMMENT",encodeURIComponent(this.comment)),location.href=this.loginLink},handleIssueCreate(){this.isIssueCreating=!0,this.createIssue().then(t=>(this.isIssueCreating=!1,this.isOccurError=!1,this.getComments(t))).catch(t=>{this.isIssueCreating=!1,this.isOccurError=!0,this.errorMsg=l(t)})},handleCommentCreate(t){if(!this.comment.length)return t&&t.preventDefault(),void this.commentEL.focus();this.isCreating=!0,this.createComment().then(()=>{this.isCreating=!1,this.isOccurError=!1}).catch(t=>{this.isCreating=!1,this.isOccurError=!0,this.errorMsg=l(t)})},handleCommentPreview(){this.isPreview=!this.isPreview,r.post("/markdown",{text:this.comment},{headers:this.accessToken&&{Authorization:`token ${this.accessToken}`}}).then(t=>{this.previewHtml=t.data}).catch(t=>{this.isOccurError=!0,this.errorMsg=l(t)})},handleCommentLoad(){this.isLoadMore||(this.isLoadMore=!0,this.getComments(this.issue).then(()=>{this.isLoadMore=!1}))},handleLogout(){this.logout(),location.reload()},handleCommentFocus(t){const{distractionFreeMode:e}=this.options;if(!e)return t&&t.preventDefault();this.isInputFocused=!0},handleCommentBlur(t){const{distractionFreeMode:e}=this.options;if(!e)return t&&t.preventDefault();this.isInputFocused=!1},handleSort(t){this.pagerDirection=t},handlePopup(){const t=!this.isPopupVisible,e=t=>{u(t.target,"gt-user","gt-popup")||(document.removeEventListener("click",e),this.isPopupVisible=!1)};this.isPopupVisible=t,t?document.addEventListener("click",e):document.removeEventListener("click",e)},handleCommentKeyDown(){const{enableHotKey:t}=this.options;t&&this.handleCommentCreate()},getUserInfo(){const t=this._accessToken||localStorage.getItem("GT_ACCESS_TOKEN");return r.get("/user",{headers:{Authorization:`token ${t}`}}).then(t=>{this.user=t.data}).catch(t=>{this.logout()})},logout(){this.user=null,localStorage.removeItem("GT_ACCESS_TOKEN")}}},k={props:["text","name"],methods:{svgHtml(){return n(188)(`./${this.name}.svg`)}}},b=n(1),I=Object(b.a)(k,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"gt-ico"},[n("span",{staticClass:"gt-svg",domProps:{innerHTML:t._s(t.svgHtml())}}),t._v(" "),t.text?n("span",{staticClass:"gt-ico-text"},[t._v(t._s(t.text))]):t._e()])},[],!1,null,null,null);I.options.__file="Svg.vue";var x=I.exports,$={props:["isLoading"],methods:{click(){this.$emit("click")}}},y=Object(b.a)($,function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"gt-btn",on:{click:this.click}},[this._t("default"),this._v(" "),this.isLoading?e("span",{staticClass:"gt-btn-loading gt-spinner"}):this._e()],2)},[],!1,null,null,null);y.options.__file="Button.vue";var L=y.exports,M={props:["text"],methods:{click(){this.$emit("click")}}},S=Object(b.a)(M,function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"gt-action",on:{click:this.click}},[e("span",{staticClass:"gt-action-text"},[this._v(this._s(this.text))])])},[],!1,null,null,null);S.options.__file="Action.vue";var E=S.exports,T=n(196),A=n.n(T),O=n(209),P=n.n(O);n(210);const H=P()();var D={components:{SvgSpinner:x},props:{user:{default:null},comment:{default:null},language:{default:"en"},commentedText:{default:""},admin:{default:()=>[]}},computed:{enableEdit(){return!!this.user&&this.comment.user.login===this.user.login},avatarUrl(){return this.comment.user?this.comment.user.avatar_url:null},userInfoUrl(){return this.comment.user?this.comment.user.html_url:null},userName(){return this.comment.user?this.comment.user.login:""},commentDate(){A()(this.comment.created_at,{addSuffix:!0,locale:{distanceInWords:H}})},reactions(){return this.comment.reactions},reactionCount(){let t=0;const e=this.reactions;return e&&e.totalCount&&(t=e.totalCount,100===e.totalCount&&e.pageInfo&&e.pageInfo.hasNextPage&&(t="100+")),t},isAdmin(){return~[].concat(this.admin).map(t=>t.toLowerCase()).indexOf(this.comment.user.login.toLowerCase())},commentClass(){return["gt-comment",{"gt-comment-admin":this.isAdmin}]}},methods:{reply(){this.$emit("reply",this.comment)},likeAction(){this.reactions&&this.reactions.viewerHasReacted?this.$emit("unlike",this.comment):this.$emit("like",this.comment)}}},j=Object(b.a)(D,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.commentClass},[n("div",{staticClass:"gt-avatar gt-comment-avatar"},[n("img",{attrs:{src:t.avatarUrl,alt:"avatar"}})]),t._v(" "),n("div",{staticClass:"gt-comment-content"},[n("div",{staticClass:"gt-comment-header"},[n("a",{staticClass:"gt-comment-username",attrs:{href:t.userInfoUrl}},[t._v("\n                "+t._s(t.userName)+"\n            ")]),t._v(" "),n("span",{staticClass:"gt-comment-text"},[t._v("\n                "+t._s(t.commentedText)+"\n            ")]),t._v(" "),n("span",{staticClass:"gt-comment-date"},[t._v("\n                "+t._s(t.commentDate)+"\n            ")]),t._v(" "),t.reactions?n("a",{staticClass:"gt-comment-like",on:{click:t.likeAction}},[t.reactions.viewerHasReacted?n("SvgSpinner",{staticClass:"gt-ico-heart",attrs:{name:"heart_on",text:t.reactionCount}}):n("SvgSpinner",{staticClass:"gt-ico-heart",attrs:{name:"heart",text:t.reactionCount}})],1):t._e(),t._v(" "),t.enableEdit?n("a",{staticClass:"gt-comment-edit",attrs:{href:t.comment.html_url,target:"_blank"}},[n("SvgSpinner",{staticClass:"gt-ico-edit",attrs:{name:"edit"}})],1):n("a",{staticClass:"gt-comment-reply",on:{click:t.reply}},[n("SvgSpinner",{staticClass:"gt-ico-reply",attrs:{name:"reply"}})],1)]),t._v(" "),n("div",{staticClass:"gt-comment-body markdown-body",domProps:{innerHTML:t._s(t.comment.body_html)}})])])},[],!1,null,null,null);j.options.__file="Comment.vue";var N={mixins:[w],components:{SvgSpiner:x,Button:L,Comment:j.exports,Action:E},computed:{isDesc(){return"last"===this.pagerDirection},totalComments(){const t=this.comments.concat([]);return this.isDesc&&this.accessToken&&t.reverse(),t},storedComment:()=>localStorage.getItem("GT_COMMENT"),editOrPreview(){return this.isPreview?this.i18n.t("edit"):this.i18n.t("preview")},containerClass(){return["gt-container",{"gt-input-focused":this.isInputFocused}]},contentClasses(){return["gt-header-textarea",{hide:this.isPreview}]},previewClasses(){return["gt-header-preview","markdown-body",{hide:!this.isPreview}]},descClasses(){return["gt-action","gt-action-sortdesc",{"is--active":this.isDesc}]},ascClasses(){return["gt-action","gt-action-sortasc",{"is--active":!this.isDesc}]},userInnerClass(){return["gt-user-inner",{"is--poping":this.isPopupVisible}]}},methods:{countHtml(){return this.i18n.t("counts",{counts:`<a class="gt-link gt-link-counts" href="${this.issue&&this.issue.html_url}" target="_blank">${this.count()}</a>`,smart_count:this.count()})},noInitHtml(){const{owner:t,repo:e}=this.options;return this.i18n.t("no-found-related",{link:`<a href="https://github.com/${t}/${e}/issues">Issues</a>`})},concatAuthorHtml(){const{owner:t,repo:e,admin:n}=this.options;return this.i18n.t("please-contact",{user:[].concat(n).map(t=>`@${t}`).join(" ")})},count(){const{user:t,issue:e,isPopupVisible:n,pagerDirection:s,localComments:i}=this,o=(e&&e.comments)+i.length,{updateCountCallback:a}=this.options;if(a&&"[object Function]"===Object.toString.call(a))try{a(o)}catch(t){console.log("An error occurred executing the updateCountCallback:",t)}return o}}},z=(n(211),n(212),Object(b.a)(N,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.containerClass},[t.isIniting?n("div",{staticClass:"gt-initing"},[n("i",{staticClass:"gt-loader"}),t._v(" "),n("p",{staticClass:"gt-initing-text"},[t._v(t._s(t.i18n.t("init")))])]):t._e(),t._v(" "),t.isIniting||t.isNoInit?t._e():n("div",{key:"meta",staticClass:"gt-meta"},[n("span",{staticClass:"gt-counts",domProps:{innerHTML:t._s(t.countHtml())}}),t._v(" "),t.isPopupVisible?n("div",{staticClass:"gt-popup"},[t.user?n("Action",{class:t.ascClasses,attrs:{text:t.i18n.t("sort-asc")},on:{click:function(e){t.handleSort("first")}}}):t._e(),t._v(" "),t.user?n("Action",{class:t.descClasses,attrs:{text:t.i18n.t("sort-desc")},on:{click:function(e){t.handleSort("last")}}}):t._e(),t._v(" "),t.user?n("Action",{staticClass:"gt-action-logout",attrs:{text:t.i18n.t("logout")},on:{click:t.handleLogout}}):n("a",{staticClass:"gt-action gt-action-login",on:{click:t.handleLogin}},[t._v("\n        "+t._s(t.i18n.t("login-with-github"))+"\n      ")]),t._v(" "),t._m(0)],1):t._e(),t._v(" "),n("div",{staticClass:"gt-user"},[t.user?n("div",{class:t.userInnerClass,on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.handlePopup(e)}}},[n("span",{staticClass:"gt-user-name"},[t._v(t._s(t.user.login))]),t._v(" "),n("SvgSpiner",{staticClass:"gt-ico-arrdown",attrs:{name:"arrow_down"}})],1):n("div",{class:t.userInnerClass,on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.handlePopup(e)}}},[n("span",{staticClass:"gt-user-name"},[t._v(t._s(t.i18n.t("anonymous")))]),t._v(" "),n("SvgSpiner",{staticClass:"gt-ico-arrdown",attrs:{name:"arrow_down"}})],1)])]),t._v(" "),t.isOccurError?n("div",{staticClass:"gt-error"},[t._v("\n    "+t._s(t.errorMsg)+"\n  ")]):t._e(),t._v(" "),!t.isIniting&&t.isNoInit?n("div",{key:"no-init",staticClass:"gt-no-init"},[n("p",{domProps:{innerHTML:t._s(t.noInitHtml())}}),t._v(" "),n("p",{domProps:{innerHTML:t._s(t.concatAuthorHtml())}}),t._v(" "),t.isAdmin?n("p",[n("Button",{attrs:{isLoading:t.isIssueCreating},on:{click:t.handleIssueCreate}},[n("span",{staticClass:"gt-btn-text"},[t._v(t._s(t.i18n.t("init-issue")))])])],1):t._e(),t._v(" "),t.user?t._e():n("Button",{staticClass:"gt-btn-login",on:{click:t.handleLogin}},[n("span",{staticClass:"gt-btn-text"},[t._v(t._s(t.i18n.t("login-with-github")))])])],1):n("div",[n("div",{key:"header",staticClass:"gt-header"},[t.user?n("div",{staticClass:"gt-avatar gt-header-avatar"},[n("img",{attrs:{src:t.user.avatar_url,alt:"avatar"}})]):n("a",{staticClass:"gt-avatar-github",on:{click:t.handleLogin}},[n("SvgSpiner",{staticClass:"gt-ico-github",attrs:{name:"github"}})],1),t._v(" "),n("div",{staticClass:"gt-header-comment"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],ref:"commentEL",class:t.contentClasses,attrs:{placeholder:t.i18n.t("leave-a-comment")},domProps:{value:t.comment},on:{focus:t.handleCommentFocus,blur:t.handleCommentBlur,keydown:[function(e){return("button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter"))&&e.metaKey?t.handleCommentKeyDown(e):null},function(e){return("button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter"))&&e.ctrlKey?t.handleCommentKeyDown(e):null}],input:function(e){e.target.composing||(t.comment=e.target.value)}}}),t._v(" "),n("div",{class:t.previewClasses,domProps:{innerHTML:t._s(t.previewHtml)}}),t._v(" "),n("div",{staticClass:"gt-header-controls"},[n("a",{staticClass:"gt-header-controls-tip",attrs:{href:"https://guides.github.com/features/mastering-markdown/",target:"_blank"}},[n("SvgSpiner",{staticClass:"gt-ico-tip",attrs:{name:"tip",text:t.i18n.t("support-markdown")}})],1),t._v(" "),t.user?n("Button",{staticClass:"gt-btn-public",attrs:{isLoading:t.isCreating},on:{click:t.handleCommentCreate}},[n("span",{staticClass:"gt-btn-text"},[t._v(t._s(t.i18n.t("comment")))])]):t._e(),t._v(" "),n("Button",{staticClass:"gt-btn-preview",on:{click:t.handleCommentPreview}},[n("span",{staticClass:"gt-btn-text"},[t._v(t._s(t.editOrPreview))])]),t._v(" "),t.user?t._e():n("Button",{staticClass:"gt-btn-login",on:{click:t.handleLogin}},[n("span",{staticClass:"gt-btn-text"},[t._v(t._s(t.i18n.t("login-with-github")))])])],1)])]),t._v(" "),n("div",{key:"comments",staticClass:"gt-comments"},[n("transition-group",{attrs:{name:"flip-list"}},t._l(t.totalComments,function(e){return n("Comment",{key:e.id,attrs:{comment:e,user:t.user,language:t.options.language,commentedText:t.i18n.t("commented"),admin:t.options.admin},on:{like:t.like,unlike:t.unLike,reply:t.reply}})}),1),t._v(" "),t.totalComments.length?t._e():n("p",{staticClass:"gt-comments-null"},[t._v("\n          "+t._s(t.i18n.t("first-comment-person"))+"\n      ")]),t._v(" "),!t.isLoadOver&&t.totalComments.length?n("div",{staticClass:"gt-comments-controls"},[n("Button",{staticClass:"gt-btn-loadmore",attrs:{isLoading:t.isLoadMore},on:{click:t.handleCommentLoad}},[n("span",{staticClass:"gt-btn-text"},[t._v(t._s(t.i18n.t("load-more")))])])],1):t._e()],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"gt-copyright"},[e("a",{staticClass:"gt-link gt-link-project",attrs:{href:"https://github.com/gitalk/gitalk",target:"_blank"}},[this._v("\n          Gitalk\n        ")])])}],!1,null,null,null));z.options.__file="index.vue";var B=z.exports,R=n(16);function G(t,e,n){for(let s=0;s<e.length;s++)if(e[s].key===t){if(n<0&&0===s)return!1;if(n>0&&s===e.length-1)return!1;const t=e[s+n];return"/"!==t.path&&t}}var F={components:{Comment:B},props:["sidebarItems"],computed:{prev(){const t=this.$page.frontmatter.prev;return!1===t?void 0:t?Object(R.f)(this.$pagination.all,t,this.$route.name):(e=this.$route.name,n=this.$pagination.all,G(e,n,-1));var e,n},next(){const t=this.$page.frontmatter.next;return!1===t?void 0:t?Object(R.f)(this.$pagination.all,t,this.$route.name):(e=this.$route.name,n=this.$pagination.all,G(e,n,1));var e,n},title(){return this.$page.frontmatter.title},isComment(){return this.$site.themeConfig.comment&&"post"===this.$page.type},createTime(){const t=this.$page.frontmatter.date,e=this.$site.themeConfig.date_format;return t&&e?new Date(t).Format(e):""},overrideStyle(){const t=this.$site.themeConfig.accentColor;return t?{color:t}:{}}}},K=(n(38),n(39),n(213),Object(b.a)(F,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("LayoutContainer",[n("div",{staticClass:"card"},[n("div",{staticClass:"content-header"},[t.title?n("h1",{staticClass:"page-title"},[t._v("\n        "+t._s(t.title)+"\n      ")]):t._e(),t._v(" "),n("span",{staticClass:"page-timestamp"},[t._v(t._s(t.createTime))])]),t._v(" "),n("Content",{attrs:{custom:!1}}),t._v(" "),t.prev||t.next?n("div",{staticClass:"content page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n          ← "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n            "+t._s(t.prev.title||t.prev.path)+"\n          ")]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v("\n            "+t._s(t.next.title||t.next.path)+"\n          ")]):t._e(),t._v(" →\n        ")],1):t._e()])]):t._e()],1),t._v(" "),t.isComment?n("div",{attrs:{id:"comment-container"}},[n("Comment")],1):t._e()])},[],!1,null,null,null));K.options.__file="Page.vue";e.default=K.exports},38:function(t,e,n){"use strict";var s=n(18);n.n(s).a},39:function(t,e,n){"use strict";var s=n(19);n.n(s).a},58:function(t,e,n){},59:function(t,e,n){},60:function(t,e,n){}}]);