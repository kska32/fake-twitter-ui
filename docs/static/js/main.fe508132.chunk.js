(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1758:function(e,t,a){},1759:function(e,t,a){},1760:function(e,t,a){},1761:function(e,t,a){},1799:function(e,t,a){},1800:function(e,t,a){},1803:function(e,t,a){"use strict";a.r(t);a(355),a(568);var n=a(0),l=a.n(n),r=a(80),c=a.n(r),s=(a(573),a(27)),i=a(28),o=a(33),m=a(32),u=a(34),d=(a(574),a(104)),E=a(1811),h=a(1812),p=a(30),v=(a(575),function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"Navbar"},l.a.createElement("div",{className:"NavbarWrapper"},l.a.createElement("div",{className:"leftPart"},l.a.createElement(p.b,{to:"/home"},l.a.createElement(d.a,{name:"home",link:!0}),l.a.createElement("span",null,"\ud648")),l.a.createElement(p.b,{to:"/notifications"},l.a.createElement(d.a,{name:"bell outline",link:!0}),l.a.createElement("span",null,"\uc54c\ub9bc")),l.a.createElement(p.b,{to:"/mail"},l.a.createElement(d.a,{name:"mail outline",link:!0}),l.a.createElement("span",null,"\ucabd\uc9c0"))),l.a.createElement(d.a,{name:"twitter",size:"large",color:"blue",link:!0,onClick:function(){window.scrollTo({top:0,behavior:"smooth"})}}),l.a.createElement("div",{className:"rightPart"},l.a.createElement(E.a,{placeholder:"\ud2b8\uc704\ud130 \uac80\uc0c9\ud558\uae30",showNoResults:!1,size:"mini"}),l.a.createElement(d.a,{name:"smile outline",size:"big"}),l.a.createElement(h.a,{circular:!0,color:"yellow",size:"tiny"},"\ud2b8\uc717\ud558\uae30"))))}}]),t}(n.Component)),f=a(1814),w=a(345),N=(a(711),a(14)),b=a.n(N);Object.defineProperty(window,"faker",{value:b.a,writable:!0,configurable:!0,enumerable:!0});var C=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(f.a,Object.assign({className:"profileCard"},this.props),l.a.createElement(f.a.Row,{columns:1,className:"topPart"},l.a.createElement(f.a.Column,{width:16},l.a.createElement(w.a,{src:b.a.image.image()}))),l.a.createElement(f.a.Row,{className:"middlePart"},l.a.createElement(f.a.Column,{className:"avatar",width:5},l.a.createElement(w.a,{src:b.a.internet.avatar(),circular:!0,bordered:!0})),l.a.createElement(f.a.Column,{className:"userinfo"},l.a.createElement("div",{className:"nickname"},b.a.internet.userName()),l.a.createElement("div",{className:"contactName"},"@",b.a.internet.userName()))),l.a.createElement(f.a.Row,{className:"bottomPart",columns:"equal"},l.a.createElement(f.a.Column,{className:"tweetArea"},l.a.createElement("div",{className:"tweet"},"\ud2b8\uc717"),l.a.createElement("div",{className:"count"},b.a.random.number())),l.a.createElement(f.a.Column,{className:"followingArea"},l.a.createElement("div",{className:"following"},"\ud314\ub85c\uc789"),l.a.createElement("div",{className:"count"},b.a.random.number())),l.a.createElement(f.a.Column,{className:"followerArea"},l.a.createElement("div",{className:"follower"},"\ud314\ub85c\uc6cc"),l.a.createElement("div",{className:"count"},b.a.random.number()))))}}]),t}(n.Component),g=(a(1758),function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(f.a,{className:"TrendsCard"},l.a.createElement(f.a.Column,{width:16,textAlign:"left",className:"titleArea"},l.a.createElement("span",{className:"title"},"\uc804 \uc138\uacc4 \uc9c0\uc5ed \ud2b8\ub80c\ub4dc"),"\xb7",l.a.createElement(p.b,{to:"#"},l.a.createElement("span",{className:"fixinfo"},"\ubcc0\uacbd\ud558\uae30"))),[1,2,3,4,5,6,7,8].map(function(e,t){return l.a.createElement(k,{key:t})}))}}]),t}(n.Component)),k=function(e){var t=e.keyword,a=void 0===t?b.a.random.word():t,n=e.tweetCount,r=void 0===n?b.a.random.number():n;return l.a.createElement(f.a.Column,{width:16,textAlign:"left",className:"trendsCol"},l.a.createElement(p.b,{to:"/search?q=".concat(a,"&src=tren")},l.a.createElement("div",{className:"keyword"},"#",a),parseInt(r.toString())>=100&&l.a.createElement("div",{className:"tweetCount"},r.toString().toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),"\ud2b8\uc717")))},y=(a(1759),function(e){function t(e){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(f.a,{className:"FollowerRcmd",divided:"vertically"},l.a.createElement(f.a.Column,{width:16,textAlign:"left",className:"titleArea"},l.a.createElement("span",{className:"rcmd"},"\ud314\ub85c\uc6b0 \ucd94\ucc9c"),"\xb7",l.a.createElement(p.b,{to:"/refresh"},l.a.createElement("span",{className:"refresh"},"\uc0c8\ub85c \uace0\uce68")),"\xb7",l.a.createElement(p.b,{to:"/seeall"},l.a.createElement("span",{className:"seeall"},"\ubaa8\ub450 \ubcf4\uae30"))),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,{className:"lastCol"}),l.a.createElement(f.a.Row,{className:"firstPart"},l.a.createElement(f.a.Column,{width:3,className:"firstPartColImg",textAlign:"left"},l.a.createElement(p.b,{to:"/signInMail"},l.a.createElement("div",{className:"imgWrapper"},l.a.createElement("div",{className:"imageMail"})))),l.a.createElement(f.a.Column,{width:13,className:"firstPartColTxt",textAlign:"left"},l.a.createElement(p.b,{to:"./signInMail"},l.a.createElement("div",{className:"title"},"\uc9c0\uc778\ub4e4\uc744 \ucc3e\uc544\ubcf4\uc138\uc694"),l.a.createElement("div",{className:"littletitle"},"Gmail\uc5d0\uc11c \uc5f0\ub77d\ucc98 \uac00\uc838\uc624\uae30")))),l.a.createElement(f.a.Row,{className:"secondPart",textAlign:"left"},l.a.createElement(f.a.Column,{width:16,className:"secondPartCol"},l.a.createElement(p.b,{to:"/welcome?ref=gl-tw-tw-twitter-webtimeline"},"\ub2e4\ub978 \uc8fc\uc18c\ub85d \uc5f0\uacb0\ud558\uae30"))))}}]),t}(n.Component)),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={_avatar:b.a.internet.avatar(),_nickname:b.a.internet.userName(),_username:b.a.internet.userName(),isWhite:!1,isFollowed:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"closeIt",value:function(e){var t=this;this.setState({isWhite:!0}),window.setTimeout(function(){t.setState({_avatar:b.a.internet.avatar(),_nickname:b.a.name.findName(),_username:b.a.internet.userName()})},300),window.setTimeout(function(){t.setState({isWhite:!1,isFollowed:!1})},600)}},{key:"mouseEnterLink",value:function(e,t,a,n){console.log(t,a,n)}},{key:"clickFollowBt",value:function(e,t){var a=this;this.setState({isFollowed:!t}),window.setTimeout(function(){a.closeIt(e)},1e3)}},{key:"render",value:function(){var e=this,t=this.props,a=t.avatar,n=t.nickname,r=t.idname,c=this.state,s=c._avatar,i=c._nickname,o=c._username,m=c.isWhite,u=c.isFollowed,d=a||s,E=(n||i).slice(0,10),v=(r||o).slice(0,10>E.length?10-E.length+4:4);return v=(E+v).length>=14?v+"...":v,l.a.createElement(f.a.Row,{className:"rcmdCol "+(this.props.className||"")+(m?" whiteBoard":""),style:this.props.style},l.a.createElement(f.a.Column,{width:4,className:"avatar"},l.a.createElement(p.b,{to:"/id/"+E,onMouseEnter:function(t){e.mouseEnterLink(t,d,E,v)}},l.a.createElement(w.a,{src:d,circular:!0,bordered:!0,size:"tiny"}))),l.a.createElement(f.a.Column,{width:12,className:"avatarInfo",textAlign:"left"},l.a.createElement("div",{className:"nameArea"},l.a.createElement(p.b,{to:"/id/"+E,onMouseEnter:function(t){e.mouseEnterLink(t,d,E,v)}},l.a.createElement("span",{className:"nickname"},E),l.a.createElement("span",{className:"idname"},"@",v)),l.a.createElement("span",{className:"close",onClick:function(t){e.closeIt(t)}},"\xd7")),l.a.createElement(h.a,{color:"yellow",size:"mini",circular:!0,basic:!0,className:"followBt"+(u?" followed":""),content:u?"\ud314\ub85c\uc789":"\ud314\ub85c\uc6b0",onClick:function(t){e.clickFollowBt(t,u)}})))}}]),t}(n.Component),j=(a(1760),[{title:"\ud68c\uc0ac\uc18c\uac1c",href:"/about"},{title:"\uace0\uac1d\uc13c\ud130",href:"/support"},{title:"\uc774\uc6a9\uc57d\uad00",href:"/tos"},{title:"\uac1c\uc778\uc815\ubcf4 \ucc98\ub9ac\ubc29\uce68",href:"/privacy"},{title:"\ucfe0\ud0a4",href:"/cookie"},{title:"\uad11\uace0 \uc815\ubcf4",href:"/ads"},{title:"\ube0c\ub79c\ub4dc",href:"/brands"},{title:"\ube14\ub85c\uadf8",href:"/korea"},{title:"\uc2dc\uc2a4\ud15c \ud604\ud669",href:"/systemstatus"},{title:"\uc560\ud50c\ub9ac\ucf00\uc774\uc158",href:"/products"},{title:"\uc778\uc7ac\ucc44\uc6a9",href:"/careers"},{title:"\ub9c8\ucf00\ud305",href:"/marketing"},{title:"\ube44\uc988\ub2c8\uc2a4",href:"/business"},{title:"\uac1c\ubc1c\uc790",href:"/developer"}]),S=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(f.a,{className:"FooterCard",textAlign:"left"},l.a.createElement(f.a.Column,{width:16,className:"firstPart"},l.a.createElement("ul",null,l.a.createElement("li",null,"\xa9 2019 Twitter"),j.map(function(e,t){return l.a.createElement("li",{key:t},l.a.createElement(p.b,{to:e.href},e.title))}))),l.a.createElement(f.a.Column,{width:16,className:"secondPart"},l.a.createElement(p.b,{to:"/welcome?ref=gl-tw-tw-twitter-webtimeline"},l.a.createElement(d.a,{name:"external square"}),"\ud2b8\uc704\ud130\ub85c \uad11\uace0\ud558\uc138\uc694")))}}]),t}(n.Component),x=(a(1761),a(346)),A=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={avatar:b.a.internet.avatar(),inputValLenPer:0,downCounter:-999,inputText:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"inputHandle",value:function(e){e.persist();var t=e.target,a=t.textContent?t.textContent.length:0;(0===a||t.childNodes[0]&&"BR"===t.childNodes[0].nodeName.toUpperCase())&&t.childNodes[0]&&t.childNodes[0].remove(),this.setState({inputValLenPer:Math.round(a/260*100),inputValLen:a,downCounter:a-260})}},{key:"render",value:function(){var e=this.state,t=e.avatar,a=e.inputValLenPer,n=e.downCounter;e.inputText;return l.a.createElement(f.a.Row,{className:"tweetBox"},l.a.createElement(f.a.Column,{width:2,className:"avatar"},l.a.createElement(w.a,{src:t,circular:!0,bordered:!0,size:"mini"})),l.a.createElement(f.a.Column,{width:14,className:"inputBox"},l.a.createElement("div",{className:"inputBoxWrapper"},l.a.createElement("div",{contentEditable:!0,className:"inputBoxCore",id:"greenX",placeholder:"\ubb34\uc2a8 \uc77c\uc774 \uc77c\uc5b4\ub098\uace0 \uc788\ub098\uc694?",onInput:this.inputHandle.bind(this)}),l.a.createElement(d.a,{name:"smile outline",className:"faces"}),l.a.createElement("div",{className:"counter"},n>=-10?-n:""),l.a.createElement(x.a,{className:"progCircle",percent:a,strokeColor:a<100?"#2AA6F2":100===a?"#FFAD1F":"#E0245E",strokeWidth:"12",strokeLinecap:"square",trailColor:"#DBE2E7",trailWidth:"5"}),l.a.createElement("div",{className:"toolbar"},l.a.createElement("div",{className:"leftPart"},l.a.createElement(d.a,{name:"picture",className:"photo",color:"yellow",size:"large"},l.a.createElement("span",null,"\uc0ac\uc9c4 \ub610\ub294 \ub3d9\uc601\uc0c1 \ucd94\uac00\ud558\uae30")),l.a.createElement(d.a,{name:"trello",className:"gif",color:"yellow",size:"large"},l.a.createElement("span",null,"GIF \ud30c\uc77c \ucd94\uac00\ud558\uae30")),l.a.createElement(d.a,{name:"sheqel",className:"poll",color:"yellow",size:"large"},l.a.createElement("span",null,"\ud22c\ud45c \ucd94\uac00\ud558\uae30")),l.a.createElement(d.a,{name:"map marker alternate",className:"gps",color:"yellow",size:"large"},l.a.createElement("span",null,"\uc704\uce58\uc815\ubcf4 \uc0ac\uc6a9\uc548\ud568"))),l.a.createElement("div",{className:"rightPart"},l.a.createElement(d.a,{name:"add",className:"plusbt",color:"yellow",size:"large",circular:!0},l.a.createElement("span",null,"\ub2e4\ub978 \ud2b8\uc717 \ucd94\uac00\ud558\uae30")),l.a.createElement(h.a,{circular:!0,color:"yellow",size:"tiny",className:"dotweet"},"\ud2b8\uc717\ud558\uae30"))))))}}]),t}(n.Component),I=(a(1799),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={avatar:b.a.internet.avatar(),idname:b.a.name.findName(),nickname:b.a.internet.userName(),sentences:b.a.lorem.sentences(),sentenceImg:b.a.random.image(),timestamp:b.a.random.number(),replyCount:Math.round(b.a.random.number()/100),retweetCount:Math.round(b.a.random.number()/100),iloveitCount:Math.round(b.a.random.number()/100),replied:!1,retweeted:!1,ilovedit:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.avatar,n=t.nickname,r=t.idname,c=t.sentences,s=t.sentenceImg,i=t.timestamp,o=this.state,m=o.replyCount,u=o.retweetCount,E=o.iloveitCount,h=this.state,p=h.replied,v=h.retweeted,f=h.ilovedit;return l.a.createElement("div",{className:"newsStreamCard"},l.a.createElement("span",{className:"avatar"},l.a.createElement("img",{src:a})),l.a.createElement("span",{className:"newsContent"},l.a.createElement("div",{className:"title"},l.a.createElement("span",{className:"nickname"},n),l.a.createElement("span",{className:"idname"},"@",r),l.a.createElement("span",{className:"timestamp"},"\u30fb",i,"min "),l.a.createElement(d.a,{className:"chevron down dropBt",tabIndex:"-1"},l.a.createElement("span",{className:"dropMenu"},l.a.createElement("div",null,"\ud2b8\uc717 \ub9c1\ud06c \ubcf5\uc0ac\ud558\uae30"),l.a.createElement("div",null,"\ud2b8\uc717 \ub2f4\uc544\uac00\uae30"),l.a.createElement("div",null,"@yonhaptweet \ub2d8 \ubba4\ud2b8\ud558\uae30"),l.a.createElement("div",null,"@yonhaptweet \ub2d8 \ucc28\ub2e8\ud558\uae30"),l.a.createElement("div",null,"\ud2b8\uc717 \uc2e0\uace0\ud558\uae30"),l.a.createElement("div",null,"\ud2b8\uc717\uc774 \ub9c8\uc74c\uc5d0 \ub4e4\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4"),l.a.createElement("div",null,"\uc0c8 \ubaa8\uba58\ud2b8\uc5d0 \ucd94\uac00\ud558\uae30")))),l.a.createElement("div",{className:"textContent"},c),l.a.createElement("div",{className:"translateit"},"\ud2b8\uc717 \ubc88\uc5ed\ud558\uae30"),l.a.createElement("div",{className:"freeStyleContent"},l.a.createElement("img",{src:s})),l.a.createElement("div",{className:"actionList"},l.a.createElement("span",{className:"reply"+(p?" replied":""),onClick:function(){!p&&e.setState({replyCount:m+1,replied:!p}),p&&e.setState({replyCount:m-1,replied:!p})}},l.a.createElement(d.a,{name:"comment outline"},l.a.createElement("span",null,"\ub2f5\uae00\ud558\uae30")),l.a.createElement("span",null,m)),l.a.createElement("span",{className:"retweet"+(v?" retweeted":""),onClick:function(){!v&&e.setState({retweetCount:u+1,retweeted:!v}),v&&e.setState({retweetCount:u-1,retweeted:!v})}},l.a.createElement(d.a,{name:"retweet"},l.a.createElement("span",null,"\ub9ac\ud2b8\uc717")),l.a.createElement("span",null,u)),l.a.createElement("span",{className:"iloveit"+(f?" ilovedit":""),onClick:function(){!f&&e.setState({iloveitCount:E+1,ilovedit:!f}),f&&e.setState({iloveitCount:E-1,ilovedit:!f})}},l.a.createElement(d.a,{name:"heart outline"},l.a.createElement("span",null,"\ub9c8\uc74c\uc5d0 \ub4e4\uc5b4\uc694")),l.a.createElement("span",null,E)),l.a.createElement("span",{className:"sendmsg"},l.a.createElement(d.a,{name:"mail outline"},l.a.createElement("span",null,"\ucabd\uc9c0"))))))}}]),t}(n.Component)),P=a(1810),B=(a(1800),function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isLoading,a=e.className;return l.a.createElement(f.a.Row,{className:"gototop "+(a||"")},l.a.createElement(P.a,{active:!!t,size:"medium"}),l.a.createElement("div",{className:"message"+(t?" hide":""),onClick:function(){window.scrollTo({top:0,behavior:"smooth"})}},l.a.createElement(d.a,{name:"twitter",color:"black",size:"large",className:"birdIcon"}),l.a.createElement("div",null,"\uc704\ub85c \uac00\uae30 \u2191")))}}]),t}(n.Component)),z=a(129),L=a.n(z),F=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={newsStreamCardQueue:["0","1","2","3"],isLoading:!1},console.log("Twitter-Faker V1.0.0"),console.log("Coded by kska32@gmail.com - 2019"),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.state.newsStreamCardQueue;new IntersectionObserver(function(a){a.forEach(function(a){a.isIntersecting&&(e.setState({isLoading:!0}),setTimeout(function(){t.push(L()()),t.push(L()()),t.push(L()()),t.push(L()()),e.setState({newsStreamCardQueue:t,isLoading:!1})},1e3))})}).observe(document.querySelector(".theBottom"))}},{key:"render",value:function(){var e=this.state,t=e.newsStreamCardQueue,a=e.isLoading;return l.a.createElement(p.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(v,null),l.a.createElement(f.a,{className:"mainDashboard"},l.a.createElement(f.a.Column,{width:4,className:"leftDashboard"},l.a.createElement(C,null),l.a.createElement(g,null),l.a.createElement(y,null),l.a.createElement(S,null)),l.a.createElement(f.a.Column,{width:8,className:"contentDashboard"},l.a.createElement(f.a,{className:"tweetStreamingArea"},l.a.createElement(A,null),t.map(function(e,t){return l.a.createElement(I,{key:e})}),l.a.createElement(B,{isLoading:a,className:"theBottom"}))),l.a.createElement(f.a.Column,{width:4,className:"rightDashboard"},l.a.createElement(y,null),l.a.createElement(S,null)))))}}]),t}(n.Component),T=function(){function e(){Object(s.a)(this,e)}return Object(i.a)(e,null,[{key:"avoidAccidentalEquivalence",value:function(e){}},{key:"useEquivalence",value:function(e){}}]),e}(),q={type:"CustomerId",value:1},M=function(e){return{type:"ProductId",value:e}}(5);T.avoidAccidentalEquivalence(q),T.useEquivalence(q.value),T.useEquivalence(M.value);console.log(12345567);var R=F;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},354:function(e,t,a){e.exports=a(1803)},573:function(e,t,a){},574:function(e,t,a){},575:function(e,t,a){},711:function(e,t,a){}},[[354,1,2]]]);
//# sourceMappingURL=main.fe508132.chunk.js.map