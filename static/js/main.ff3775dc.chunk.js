(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t,n){"use strict";n.r(t);n(76),n(101);var o=n(0),a=n.n(o),s=n(16),i=n.n(s),l=n(12),r=n.n(l),c=n(7),d=n(8),m=n(10),p=n(9),u=n(11),h=n(26),v=n(1),y=(n(121),n(18)),g=n.n(y),f=n(14),C=n.n(f),E=n(31),k=n.n(E),R=n(32),I=n.n(R),S=(n(72),n(33)),b=n.n(S),U=n(34),w=n.n(U),_=(n(35),n(45),n(73)),x=(n(69),n(71),n(46)),O=n.n(x),j=Object(v.platform)(),P=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={title:"",text:"",mesto:"",stattime:"",owner_id:"",chatlink:"",type:"",igo:0,bookmark:0},n}return Object(u.a)(t,e),Object(d.a)(t,[{key:"get",value:function(e){var t=new XMLHttpRequest;return t.open("POST",e,!1),t.send(),t.responseText}},{key:"igo",value:function(){1==this.state.igo?this.setState({igo:0}):this.setState({igo:1})}},{key:"editbookmark",value:function(){1==this.state.bookmark?this.setState({bookmark:0}):this.setState({bookmark:1})}},{key:"componentDidMount",value:function(){var e=this.props,t=(e.title,e.text),n=(e.go,e.mesto,e.starttime,e.type,e.owner_id,a.a.createElement("br"),t.split("\n").join("<br/>"));this.setState({text:n})}},{key:"buttons",value:function(){var e=this;return 1==this.state.igo?a.a.createElement(v.Div,{style:{display:"flex"}},a.a.createElement(v.Button,{size:"l",stretched:!0,style:{marginRight:8},level:"outline",onClick:function(){return e.igo()}},"\u041d\u0435 \u043f\u043e\u0439\u0434\u0443"),a.a.createElement(v.Button,{size:"l",onClick:function(){return e.editbookmark()},stretched:!0,level:"secondary"},1==this.state.bookmark?"\u0423\u0431\u0440\u0430\u0442\u044c \u0438\u0437 \u0437\u0430\u043a\u043b\u0430\u0434\u043e\u043a":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438")):0==this.state.igo?a.a.createElement(v.Div,{style:{display:"flex"}},a.a.createElement(v.Button,{size:"l",stretched:!0,style:{marginRight:8},onClick:function(){return e.igo()}},"\u042f \u043f\u043e\u0439\u0434\u0443"),a.a.createElement(v.Button,{size:"l",onClick:function(){return e.editbookmark()},stretched:!0,level:"secondary"},1==this.state.bookmark?"\u0423\u0431\u0440\u0430\u0442\u044c \u0438\u0437 \u0437\u0430\u043a\u043b\u0430\u0434\u043e\u043a":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438")):void 0}},{key:"getOwner",value:function(){var e=this.props,t=(e.title,e.text,e.go,e.mesto,e.starttime,e.type,e.owner_id),n="https://vk.com/id"+t.toString();return"undefined"===t.toString()?"":a.a.createElement(v.Cell,null,a.a.createElement(v.InfoRow,{title:"\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0442\u043e\u0440"},a.a.createElement(v.Link,{href:n},"vk.com/id",t)))}},{key:"getChatlink",value:function(){var e=this.props,t=(e.title,e.text,e.go,e.mesto,e.starttime,e.type,e.owner_id,e.chatlink);return"undefined"===t.toString()||"null"===t.toString()||""===t.toString()?"":a.a.createElement(v.Cell,null,a.a.createElement(v.InfoRow,{title:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0447\u0430\u0442"},a.a.createElement(v.Link,{href:t},t)))}},{key:"getGroup",value:function(){var e=this.props,t=(e.title,e.text,e.go,e.mesto,e.starttime,e.type,e.owner_id,e.grouplink);return"undefined"===t.toString()||"null"===t.toString()||""===t.toString()?"":a.a.createElement(v.Cell,null,a.a.createElement(v.InfoRow,{title:"\u0413\u0440\u0443\u043f\u043f\u0430"},a.a.createElement(v.Link,{href:t},t)))}},{key:"agreed_admin",value:function(){var e=this.props,t=(e.title,e.text,e.go,e.mesto,e.starttime,e.type,e.owner_id,e.agreed_admin);return"undefined"===t.toString()||"null"===t.toString()?a.a.createElement(v.Cell,null,a.a.createElement(v.InfoRow,{title:"\u0421\u043e\u0433\u043b\u0430\u0441\u043e\u0432\u0430\u043d\u043d\u043e\u0441\u0442\u044c \u0441 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0435\u0439 \u0433\u043e\u0440\u043e\u0434\u0430"},"\u041d\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f")):a.a.createElement(v.Cell,null,a.a.createElement(v.InfoRow,{title:"\u0421\u043e\u0433\u043b\u0430\u0441\u043e\u0432\u0430\u043d\u043d\u043e\u0441\u0442\u044c \u0441 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0435\u0439 \u0433\u043e\u0440\u043e\u0434\u0430"},"1"===t?"\u0421\u043e\u0433\u043b\u0430\u0441\u043e\u0432\u0430\u043d\u043e":"\u041d\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u043e\u0432\u0430\u043d\u043e"))}},{key:"getEditButton",value:function(){var e=this,t=this.props;t.title,t.text,t.go,t.mesto,t.starttime,t.type,t.owner_id;return 0==t.can_edit?a.a.createElement(v.Div,{style:{display:"flex"}},a.a.createElement(v.Button,{size:"l",stretched:!0,style:{marginRight:8},level:"tertiary",onClick:function(){return e.igo()}},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c")):""}},{key:"render",value:function(){var e=this.props,t=e.title,n=(e.text,e.go),o=e.mesto,s=e.starttime,i=e.type;e.owner_id,e.can_edit,a.a.createElement(v.ModalRoot,{activeModal:"f"},a.a.createElement(v.ModalPage,{id:"f",onClose:this.modalBack},a.a.createElement(v.List,null,a.a.createElement(v.Cell,null,a.a.createElement(v.InfoRow,{title:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f"},"30 \u044f\u043d\u0432\u0430\u0440\u044f 1993")),a.a.createElement(v.Cell,null,a.a.createElement(v.InfoRow,{title:"\u0420\u043e\u0434\u043d\u043e\u0439 \u0433\u043e\u0440\u043e\u0434"},"\u0415\u0440\u0435\u0432\u0430\u043d")),a.a.createElement(v.Cell,null,a.a.createElement(v.InfoRow,{title:"\u041c\u0435\u0441\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u044b"},"\u041a\u043e\u043c\u0430\u043d\u0434\u0430 \u0412\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0435")))));return a.a.createElement(v.View,{id:"full",activePanel:"full"},a.a.createElement(v.Panel,{id:"full"},a.a.createElement(v.PanelHeader,{left:a.a.createElement(v.HeaderButton,{onClick:n,"data-to":"home"},j===v.IOS?a.a.createElement(g.a,null):a.a.createElement(C.a,null))},"\u0421\u043e\u0431\u044b\u0442\u0438\u0435"),a.a.createElement(v.Group,null,a.a.createElement(v.Div,null,t)),this.buttons(),this.getEditButton(),a.a.createElement(v.Group,null,a.a.createElement(v.Div,null,a.a.createElement(v.InfoRow,{title:"\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435",id:"prim"},Object(_.createElementsFromText)(this.state.text,{whitelistedHtmlTags:["br"]})))),a.a.createElement(v.Group,null,a.a.createElement(v.List,null,a.a.createElement(v.Cell,null,a.a.createElement(v.InfoRow,{title:"\u041c\u0435\u0441\u0442\u043e"},o)),a.a.createElement(v.Cell,null,a.a.createElement(v.InfoRow,{title:"\u041d\u0430\u0447\u0430\u043b\u043e"},s)),a.a.createElement(v.Cell,null,a.a.createElement(v.InfoRow,{title:"\u0422\u0438\u043f"},i)),a.a.createElement(v.ModalPage,{id:"f",header:a.a.createElement(v.ModalPageHeader,null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0443"),settlingHeight:80},a.a.createElement(v.FormLayout,null,a.a.createElement(v.Button,{level:"secondary",size:"xl"},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435"),a.a.createElement(v.FormLayoutGroup,null,a.a.createElement(v.Button,{level:"secondary",size:"xl"},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435")))),this.getOwner(),this.getChatlink(),this.getGroup(),this.agreed_admin()))))}}]),t}(a.a.Component),B=(Object(v.platform)(),a.a.Component,Object(v.platform)(),a.a.Component,n(74)),T=n.n(B),D=(Object(v.platform)(),a.a.Component,n(70),Object(v.platform)(),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).go=function(e){n.setState({activePanel:e.currentTarget.dataset.to})},n.state={activePanel:"home",fetchedUser:null,title:"",text:"",events:[],sevents:[],mesto:"",stattime:"",owner_id:"",activeStory:"feed",chatlink:"",type:"",token:"fd",grouplink:"",edt:"",agreed_admin:"",your_city:"",activeRoot:"glav",can_edit:0,city:[],popout:a.a.createElement(v.ScreenSpinner,null),test:null,sogl:1,stype:[],types:[]},n.onStoryChange=n.onStoryChange.bind(Object(h.a)(Object(h.a)(n))),n}return Object(u.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.load(),r.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data});break;case"VKWebAppAccessTokenReceived":var n=t.detail.data.access_token;e.setState({token:n});break;default:console.log(t.detail.type)}}),r.a.send("VKWebAppGetUserInfo",{}),r.a.send("VKWebAppGetAuthToken",{app_id:7077031,scope:""})}},{key:"load",value:function(){if(0==this.state.events.length){var e=this.get("https://api.finebot.site/events/events.get?token="+this.state.token);e=JSON.parse(e);for(var t=0;t<e.response.length;t++){console.log("\u0411\u0411\u0411\u0411\u0411\u0411\u0411\u0411");var n=e.response[t].country+", "+e.response[t].city+", "+e.response[t].street;this.state.events.push(encodeURIComponent(e.response[t].title)+"&&&"+encodeURIComponent(n)+"&&&"+encodeURIComponent(e.response[t].starttime)+"&&&"+encodeURIComponent(e.response[t].chatlink)+"&&&"+encodeURIComponent(e.response[t].owner_id)+"&&&"+encodeURIComponent(e.response[t].text)+"&&&"+encodeURIComponent(e.response[t].type)+"&&&"+encodeURIComponent(e.response[t].grouplink)+"&&&"+encodeURIComponent(e.response[t].agreed_admin)+"&&&"+e.response[t].can_edit)}this.setState({your_city:e.your_city,city:e.city,types:e.types})}this.setState({fetching:!1}),this.setState({popout:null}),0==this.state.events.length?(this.setState({test:a.a.createElement(v.Div,{style:{paddingTop:60,paddingBottom:60,color:"gray",width:"100%",textAlign:"center",fontSize:24}},"\u0422\u0443\u0442 \u043f\u0443\u0441\u0442\u043e :(")}),this.openDefault("\u041e\u0448\u0438\u0431\u043a\u0430","\u041c\u044b \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0448\u043b\u0438 \u0432 \u0412\u0430\u0448\u0435\u043c \u0433\u043e\u0440\u043e\u0434\u0435 :(")):this.setState({test:null})}},{key:"goo",value:function(e){var t=decodeURIComponent(decodeURIComponent(decodeURIComponent(this.state.events[e].split("&&&")[0]))).split("+").join(" "),n=decodeURIComponent(decodeURIComponent(this.state.events[e].split("&&&")[1])).split("+").join(" "),o=decodeURIComponent(decodeURIComponent(this.state.events[e].split("&&&")[2])),a=decodeURIComponent(decodeURIComponent(this.state.events[e].split("&&&")[3])),s=decodeURIComponent(decodeURIComponent(this.state.events[e].split("&&&")[4])),i=decodeURIComponent(decodeURIComponent(this.state.events[e].split("&&&")[5])).split("+").join(" "),l=decodeURIComponent(decodeURIComponent(this.state.events[e].split("&&&")[6])),r=decodeURIComponent(decodeURIComponent(this.state.events[e].split("&&&")[7])),c=decodeURIComponent(decodeURIComponent(this.state.events[e].split("&&&")[8])),d=decodeURIComponent(decodeURIComponent(this.state.events[e].split("&&&")[9]));this.setState({activeRoot:"full",title:t,text:i,mesto:n,starttime:o,owner_id:s,chatlink:a,type:l,grouplink:r,agreed_admin:c,can_edit:d})}},{key:"sgoo",value:function(e){var t=decodeURIComponent(decodeURIComponent(decodeURIComponent(this.state.sevents[e].split("&&&")[0]))).split("+").join(" "),n=decodeURIComponent(decodeURIComponent(this.state.sevents[e].split("&&&")[1])).split("+").join(" "),o=decodeURIComponent(decodeURIComponent(this.state.sevents[e].split("&&&")[2])),a=decodeURIComponent(decodeURIComponent(this.state.sevents[e].split("&&&")[3])),s=decodeURIComponent(decodeURIComponent(this.state.sevents[e].split("&&&")[4])),i=decodeURIComponent(decodeURIComponent(this.state.sevents[e].split("&&&")[5])).split("+").join(" "),l=decodeURIComponent(decodeURIComponent(this.state.sevents[e].split("&&&")[6])),r=decodeURIComponent(decodeURIComponent(this.state.sevents[e].split("&&&")[7])),c=decodeURIComponent(decodeURIComponent(this.state.sevents[e].split("&&&")[8])),d=decodeURIComponent(decodeURIComponent(this.state.sevents[e].split("&&&")[9]));this.setState({activePanel:"full",title:t,text:i,mesto:n,starttime:o,owner_id:s,chatlink:a,type:l,grouplink:r,agreed_admin:c,can_edit:d})}},{key:"getOwner",value:function(){var e="https://vk.com/id"+this.state.owner_id.toString();return"undefined"===this.state.owner_id.toString()?"":a.a.createElement(v.Cell,null,a.a.createElement(v.InfoRow,{title:"\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0442\u043e\u0440"},a.a.createElement(v.Link,{href:e},"vk.com/id",this.state.owner_id)))}},{key:"ret",value:function(e,t){var n=this,o=decodeURIComponent(decodeURIComponent(e.split("&&&")[0])).split("+").join(" "),s=decodeURIComponent(e.split("&&&")[1]),i=decodeURIComponent(e.split("&&&")[2]);this.props.go;return a.a.createElement(v.Group,null,a.a.createElement(v.Div,null,a.a.createElement("form",{style:{textAlign:"down",width:"100%",marginBottom:5}},o),a.a.createElement("form",{style:{fontSize:12,textAlign:"top",marginBottom:15}},decodeURIComponent(s).split("+").join(" "),a.a.createElement("br",null),i),a.a.createElement(v.Button,{onClick:function(){return n.goo(t)},"data-to":"full"},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c")))}},{key:"ret3",value:function(e,t){var n=this,o=decodeURIComponent(decodeURIComponent(e.split("&&&")[0])).split("+").join(" "),s=decodeURIComponent(e.split("&&&")[1]),i=decodeURIComponent(e.split("&&&")[2]);this.props.go;return a.a.createElement(v.Group,null,a.a.createElement(v.Div,null,a.a.createElement("form",{style:{textAlign:"down",width:"100%",marginBottom:5}},o),a.a.createElement("form",{style:{fontSize:12,textAlign:"top",marginBottom:15}},decodeURIComponent(s).split("+").join(" "),a.a.createElement("br",null),i),a.a.createElement(v.Button,{onClick:function(){return n.sgoo(t)},"data-to":"full"},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c")))}},{key:"get",value:function(e){var t=new XMLHttpRequest;return t.open("POST",e,!1),t.send(),t.responseText}},{key:"onStoryChange",value:function(e){this.setState({activeStory:e.currentTarget.dataset.story}),"discover"===e.currentTarget.dataset.story&&this.setState({mesto:"discover"})}},{key:"getHeader",value:function(){return"discover"===this.state.activeStory?a.a.createElement(v.PanelHeader,null,"\u041f\u043e\u0438\u0441\u043a"):"feed"==this.state.activeStory?a.a.createElement(v.PanelHeader,null,this.state.your_city):a.a.createElement(v.PanelHeader,null,"Events")}},{key:"closePopout",value:function(){this.setState({popout:""})}},{key:"openDefault",value:function(e,t){this.setState({popout:a.a.createElement(v.Alert,{actions:[{title:"\u041e\u041a",autoclose:!0,style:"cancel"}],onClose:this.closePopout.bind(this)},a.a.createElement("h2",null,e),a.a.createElement("p",null,t))})}},{key:"getty",value:function(e,t){var n=this,o=this.state.stype;return o.indexOf(t)>-1?a.a.createElement(v.Checkbox,{checked:!0,onClick:function(){if(o.indexOf(t)>-1){var e=o.indexOf(t);o.splice(e,1)}else o.push(t);n.setState({stype:o})}},e):a.a.createElement(v.Checkbox,{onClick:function(){if(o.indexOf(t)>-1){var e=o.indexOf(t);o.splice(e,1)}else o.push(t);n.setState({stype:o})}},e)}},{key:"onChange",value:function(){var e=this,t=this.state.edt;""===t?(this.setState({sevents:[]}),this.setState({test:null})):setTimeout(function(){var n=e.get("https://api.finebot.site/events/events.search?token="+e.state.token+"&title="+encodeURIComponent(t)+"&agreed="+e.state.sogl.toString()+"&type="+e.state.stype.join(",").toString());e.setState({sevents:[]}),n=JSON.parse(n);for(var o=0;o<n.response.length;o++){var a=n.response[o].country+", "+n.response[o].city+", "+n.response[o].street;e.state.sevents.push(encodeURIComponent(n.response[o].title)+"&&&"+encodeURIComponent(a)+"&&&"+encodeURIComponent(n.response[o].starttime)+"&&&"+encodeURIComponent(n.response[o].chatlink)+"&&&"+encodeURIComponent(n.response[o].owner_id)+"&&&"+encodeURIComponent(n.response[o].text)+"&&&"+encodeURIComponent(n.response[o].type)+"&&&"+encodeURIComponent(n.response[o].grouplink)+"&&&"+encodeURIComponent(n.response[o].agreed_admin)+"&&&"+encodeURIComponent(n.response[o].can_edit))}e.setState({your_city:n.your_city,city:n.city,types:n.types}),e.setState({fetching:!1}),e.setState({popout:null}),0==e.state.sevents.length||e.setState({test:null})})}},{key:"ret2",value:function(e,t){var n=this;return a.a.createElement(v.Cell,{onClick:function(){n.setState({activePanel:"home",fetchedUser:null,title:"",text:"",events:[],mesto:"",stattime:"",owner_id:"",activeStory:"feed",chatlink:"",type:"",token:"fd",your_city:"",city:[],popout:a.a.createElement(v.ScreenSpinner,null)}),n.get("https://api.finebot.site/events/account.editCity?token="+n.state.token+"&city="+e),n.componentDidMount()},"data-to":"home",asideContent:this.state.your_city===e?a.a.createElement(T.a,{fill:"var(--accent)"}):null},e)}},{key:"sse",value:function(){var e=this;if(0==this.state.sevents.length){var t=a.a.createElement(v.List,null,a.a.createElement(v.Cell,{id:"ch",asideContent:a.a.createElement(v.Switch,null),onClick:function(){0==e.state.sogl?e.setState({sogl:1}):1==e.state.sogl&&e.setState({sogl:0})}},"\u0421\u043e\u0433\u043b\u0430\u0441\u043e\u0432\u0430\u043d\u043d\u043e\u0441\u0442\u044c \u0441 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0435\u0439"));return 1==this.state.sogl&&(t=a.a.createElement(v.List,null,a.a.createElement(v.Cell,{id:"ch",asideContent:a.a.createElement(v.Switch,{defaultChecked:!0}),onClick:function(){0==e.state.sogl?e.setState({sogl:1}):1==e.state.sogl&&e.setState({sogl:0})}},"\u0421\u043e\u0433\u043b\u0430\u0441\u043e\u0432\u0430\u043d\u043d\u043e\u0441\u0442\u044c \u0441 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0435\u0439"))),a.a.createElement(v.Group,null,t,a.a.createElement(v.FormLayout,null,this.state.types.map(this.getty.bind(this))))}return a.a.createElement("div",{style:{marginBottom:60}},this.state.sevents.map(this.ret3.bind(this)))}},{key:"edt",value:function(e){this.setState({edt:e})}},{key:"render",value:function(){return a.a.createElement(v.Root,{activeView:this.state.activeRoot},a.a.createElement(v.View,{activePanel:this.state.activePanel,popout:this.state.popout,id:"glav"},a.a.createElement(v.Panel,{id:"home"},this.getHeader(),a.a.createElement(v.Epic,{activeStory:this.state.activeStory,tabbar:a.a.createElement(v.Tabbar,null,a.a.createElement(v.TabbarItem,{onClick:this.onStoryChange,selected:"feed"===this.state.activeStory,"data-story":"feed"},a.a.createElement(k.a,null)),a.a.createElement(v.TabbarItem,{onClick:this.onStoryChange,selected:"discover"===this.state.activeStory,"data-story":"discover"},a.a.createElement(I.a,null)),a.a.createElement(v.TabbarItem,{onClick:this.onStoryChange,selected:"messages"===this.state.activeStory,"data-story":"messages"},a.a.createElement(O.a,null)),a.a.createElement(v.TabbarItem,{onClick:this.onStoryChange,selected:"notifications"===this.state.activeStory,"data-story":"notifications"},a.a.createElement(b.a,null)),a.a.createElement(v.TabbarItem,{onClick:this.onStoryChange,selected:"more"===this.state.activeStory,"data-story":"more"},a.a.createElement(w.a,null)))},a.a.createElement(v.Root,{id:"feed",activePanel:"feed"},a.a.createElement("div",{style:{marginBottom:60}},this.state.events.map(this.ret.bind(this))),a.a.createElement(v.Div,{style:{display:"flex"}},this.state.test)),a.a.createElement(v.Root,{id:"discover"},a.a.createElement(v.Search,{value:this.state.edt,onChange:this.edt.bind(this)}),a.a.createElement(v.Div,{style:{display:"flex"}},a.a.createElement(v.Button,{size:"l",onClick:this.onChange.bind(this),stretched:!0,level:"secondary"},"\u041d\u0430\u0439\u0442\u0438")),this.sse(),a.a.createElement(v.Div,{style:{marginBottom:30}})),a.a.createElement(v.Root,{id:"messages",activePanel:"messages"}),a.a.createElement(v.Root,{id:"notifications",activePanel:"notifications"}),a.a.createElement(v.Root,{id:"more",activeView:"more"},a.a.createElement(v.View,{id:"more"},a.a.createElement(v.FormLayout,null,a.a.createElement(v.SelectMimicry,{top:"\u0412\u0430\u0448 \u0433\u043e\u0440\u043e\u0434","data-to":"other",placeholder:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d",onClick:this.go},this.state.your_city)))))),a.a.createElement(v.Panel,{id:"other"},a.a.createElement(v.PanelHeader,null,"\u0412\u044b\u0431\u043e\u0440 \u0433\u043e\u0440\u043e\u0434\u0430"),a.a.createElement(v.Group,null,a.a.createElement(v.List,null,this.state.city.map(this.ret2.bind(this)))))),a.a.createElement(P,{id:"full",go:this.go,title:this.state.title,text:this.state.text,mesto:this.state.mesto,starttime:this.state.starttime,agreed_admin:this.state.agreed_admin,grouplink:this.state.grouplink,type:this.state.type,owner_id:this.state.owner_id,chatlink:this.state.chatlink,can_edit:this.state.can_edit}))}}]),t}(a.a.Component));r.a.subscribe(function(e){switch(e.detail.type){case"VKWebAppUpdateConfig":var t=document.createAttribute("scheme");t.value=e.detail.data.scheme?e.detail.data.scheme:"client_light",document.body.attributes.setNamedItem(t);break;default:console.log(e.detail.type)}}),r.a.send("VKWebAppInit",{}),i.a.render(a.a.createElement(D,null),document.getElementById("root"))},35:function(e,t,n){e.exports=n.p+"static/media/persik.4e1ec840.png"},45:function(e,t,n){},75:function(e,t,n){e.exports=n(122)}},[[75,1,2]]]);
//# sourceMappingURL=main.ff3775dc.chunk.js.map