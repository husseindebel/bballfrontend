(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{180:function(e,t,a){e.exports=a(301)},185:function(e,t,a){},300:function(e,t,a){},301:function(e,t,a){"use strict";a.r(t);var s,r=a(0),o=a.n(r),n=a(17),l=a.n(n),d=(a(185),a(37)),m=a(35),i=a.t(m,2),c=a(36),u=a(24);!function(e){e[e.Complete=0]="Complete",e[e.Incomplete=1]="Incomplete"}(s||(s={}));var h=a(23),f=a.n(h),p=a(16),b=a(1),w=a(93),A=a.n(w),G=a(7),M=a.n(G),T=Object(p.withStyles)(function(e){return Object(p.createStyles)({})})(function(e){var t=e.matchStats,a=e.handleModalAction;e.classes;return o.a.createElement(b.c,null,o.a.createElement(b.i,null,o.a.createElement(b.l,null,o.a.createElement(b.m,null,o.a.createElement(b.k,null,"Player Name"),o.a.createElement(b.k,{padding:"checkbox",align:"center"},"PTS"),o.a.createElement(b.k,{padding:"checkbox",align:"center"},"REB"),o.a.createElement(b.k,{padding:"checkbox",align:"center"},"AST"),o.a.createElement(b.k,{padding:"checkbox",align:"center"},"STL"),o.a.createElement(b.k,{padding:"checkbox",align:"center"},"BLK"),o.a.createElement(b.k,{padding:"checkbox",align:"center"},"FGM"),o.a.createElement(b.k,{padding:"checkbox",align:"center"},"FGA"),o.a.createElement(b.k,{padding:"checkbox",align:"center"},"FG%"),o.a.createElement(b.k,{padding:"checkbox",align:"center"},"3PM"),o.a.createElement(b.k,{padding:"checkbox",align:"center"},"3PA"),o.a.createElement(b.k,{padding:"checkbox",align:"center"},"3P%"),o.a.createElement(b.k,{padding:"checkbox",align:"center"},"FTM"),o.a.createElement(b.k,{padding:"checkbox",align:"center"},"FTA"),o.a.createElement(b.k,{padding:"checkbox",align:"center"},"FT%"),o.a.createElement(b.k,{padding:"checkbox",align:"center"},"TOV"),o.a.createElement(b.k,{padding:"checkbox",align:"center"},"PF"))),o.a.createElement(b.j,null,t.homeTeamStats.map(function(e){return o.a.createElement(b.m,{key:e.player.number},o.a.createElement(b.k,{padding:"checkbox",component:"th",scope:"row"},o.a.createElement(b.a,{size:"small",onClick:function(){return a(v.Open,e.player)}}," ",e.player.number,"  ",e.player.name)),o.a.createElement(b.k,{padding:"checkbox",align:"center"},3*e.threePointsMade+2*(e.fieldGoalsMade-e.threePointsMade)+e.freeThrowsMade),o.a.createElement(b.k,{padding:"checkbox",align:"center"},e.rebounds),o.a.createElement(b.k,{padding:"checkbox",align:"center"},e.assists),o.a.createElement(b.k,{padding:"checkbox",align:"center"},e.steals),o.a.createElement(b.k,{padding:"checkbox",align:"center"},e.blocks),o.a.createElement(b.k,{padding:"checkbox",align:"center"},e.fieldGoalsMade),o.a.createElement(b.k,{padding:"checkbox",align:"center"},e.fieldGoalsAttempted),o.a.createElement(b.k,{padding:"checkbox",align:"center"},isNaN(e.fieldGoalsMade/e.fieldGoalsAttempted)?0:(e.fieldGoalsMade/e.fieldGoalsAttempted*100).toFixed(2)),o.a.createElement(b.k,{padding:"checkbox",align:"center"},e.threePointsMade),o.a.createElement(b.k,{padding:"checkbox",align:"center"},e.threePointsAttempted),o.a.createElement(b.k,{padding:"checkbox",align:"center"},isNaN(e.threePointsMade/e.threePointsAttempted)?0:(e.threePointsMade/e.threePointsAttempted*100).toFixed(2)),o.a.createElement(b.k,{padding:"checkbox",align:"center"},e.freeThrowsMade),o.a.createElement(b.k,{padding:"checkbox",align:"center"},e.freeThrowsAttempted),o.a.createElement(b.k,{padding:"checkbox",align:"center"},isNaN(e.freeThrowsMade/e.freeThrowsAttempted)?0:(e.freeThrowsMade/e.freeThrowsAttempted*100).toFixed(2)),o.a.createElement(b.k,{padding:"checkbox",align:"center"},e.turnovers),o.a.createElement(b.k,{padding:"checkbox",align:"center"},e.foulsGiven))}))))});function P(e){return e.default.map(function(e){"complete"===e.status?e.matchStats.matchStatus=s.Complete:e.matchStats.matchStatus=s.Incomplete}),e.default}var v,y=function(e){var t=P(i),a=function(e,t){var a=e.flatMap(function(e){return e.matchStatus===s.Incomplete?[]:e.homeTeamStats.filter(function(e){return e.player.name===t})}).reduce(function(e,t){return{player:e.player,fieldGoalsAttempted:e.fieldGoalsAttempted+t.fieldGoalsAttempted,totalPoints:0,fieldGoalsMade:e.fieldGoalsMade+t.fieldGoalsMade,threePointsAttempted:e.threePointsAttempted+t.threePointsAttempted,threePointsMade:e.threePointsMade+t.threePointsMade,freeThrowsAttempted:e.freeThrowsAttempted+t.freeThrowsAttempted,freeThrowsMade:e.freeThrowsMade+t.freeThrowsMade,assists:e.assists+t.assists,rebounds:e.rebounds+t.rebounds,steals:e.steals+t.steals,blocks:e.blocks+t.blocks,turnovers:e.turnovers+t.turnovers,foulsDrawn:e.foulsDrawn+t.foulsDrawn,foulsGiven:e.foulsGiven+t.foulsGiven}});return Object(u.a)({},a,{totalPoints:3*a.threePointsMade+2*(a.fieldGoalsMade-a.threePointsMade)+a.freeThrowsMade})}(t.map(function(e){return e.matchStats}).filter(function(e){return e.matchStatus===s.Complete}),e);return{player:a.player,pointsPerGame:a.totalPoints/t.length,assistsPerGame:a.assists/t.length,reboundsPerGame:a.rebounds/t.length,blocksPerGame:a.blocks/t.length,stealsPerGame:a.steals/t.length,fieldGoalPercentage:a.fieldGoalsMade/a.fieldGoalsAttempted,threePointPercentage:a.threePointsMade/a.threePointsAttempted,freePointPercentage:a.freeThrowsMade/a.freeThrowsAttempted,fieldGoalsAttempted:a.fieldGoalsAttempted,fieldGoalsMade:a.fieldGoalsMade,threePointsAttempted:a.threePointsAttempted,threePointsMade:a.threePointsMade,turnoversPerGame:a.turnovers/t.length}},k=Object(p.withStyles)(function(e){return Object(p.createStyles)({root:{flexGrow:1},paper:{padding:2*e.spacing.unit,margin:"auto",backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],position:"fixed",width:50*e.spacing.unit,outline:"none",top:"45%",left:"45%",marginLeft:"-150px",marginTop:"-150px"}})})(function(e){var t=e.player,a=e.handleModalAction,s=e.classes,r=y(t.name);return o.a.createElement(b.g,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:!0,onClose:function(){return a(v.Close,void 0)}},o.a.createElement("div",{className:s.root},o.a.createElement(b.h,{className:s.paper},o.a.createElement(b.e,{container:!0,spacing:40,direction:"column"},o.a.createElement(b.e,{item:!0,xs:!0,container:!0},o.a.createElement(b.e,{item:!0},t.number,". ",t.name)),o.a.createElement(b.e,{item:!0,xs:!0,container:!0,direction:"row",spacing:24,justify:"space-evenly"},o.a.createElement(b.e,{item:!0},o.a.createElement(b.n,{style:{cursor:"pointer"}},"PPG"),o.a.createElement(b.n,{style:{cursor:"pointer"}},o.a.createElement("strong",null,r.pointsPerGame))),o.a.createElement(b.e,{item:!0},o.a.createElement(b.n,{style:{cursor:"pointer"}},"RPG"),o.a.createElement(b.n,{style:{cursor:"pointer"}},o.a.createElement("strong",null,r.reboundsPerGame))),o.a.createElement(b.e,{item:!0},o.a.createElement(b.n,{style:{cursor:"pointer"}},"APG"),o.a.createElement(b.n,{style:{cursor:"pointer"}},o.a.createElement("strong",null,r.assistsPerGame)))),o.a.createElement(b.e,{item:!0,xs:!0,container:!0,direction:"row",spacing:24,justify:"space-evenly"},o.a.createElement(b.e,{item:!0},o.a.createElement(b.n,{style:{cursor:"pointer"}},"FG%"),o.a.createElement(b.n,{style:{cursor:"pointer"}},o.a.createElement("strong",null,r.fieldGoalPercentage.toFixed(3)),"(",r.fieldGoalsMade,"/",r.fieldGoalsAttempted,")")),o.a.createElement(b.e,{item:!0},o.a.createElement(b.n,{style:{cursor:"pointer"}},"3PT%"),o.a.createElement(b.n,{style:{cursor:"pointer"}},o.a.createElement("strong",null,r.threePointPercentage.toFixed(3)),"(",r.threePointsMade,"/",r.threePointsAttempted,")")),o.a.createElement(b.e,{item:!0},o.a.createElement(b.n,{style:{cursor:"pointer"}},"FT%"),o.a.createElement(b.n,{style:{cursor:"pointer"}},o.a.createElement("strong",null,r.freePointPercentage.toFixed(3))))),o.a.createElement(b.e,{item:!0,xs:!0,container:!0,direction:"row",spacing:24,justify:"space-evenly"},o.a.createElement(b.e,{item:!0},o.a.createElement(b.n,{style:{cursor:"pointer"}},"SPG"),o.a.createElement(b.n,{style:{cursor:"pointer"}},o.a.createElement("strong",null,r.stealsPerGame))),o.a.createElement(b.e,{item:!0},o.a.createElement(b.n,{style:{cursor:"pointer"}},"BPG"),o.a.createElement(b.n,{style:{cursor:"pointer"}},o.a.createElement("strong",null,r.blocksPerGame))),o.a.createElement(b.e,{item:!0},o.a.createElement(b.n,{style:{cursor:"pointer"}},"TPG"),o.a.createElement(b.n,{style:{cursor:"pointer"}},o.a.createElement("strong",null,r.turnoversPerGame))))))))});!function(e){e[e.Open=0]="Open",e[e.Close=1]="Close"}(v||(v={}));var g=Object(p.withStyles)(function(e){return Object(p.createStyles)({root:{display:"flex",flexDirection:"column",padding:2*e.spacing.unit,margin:"50px"},matchCardRight:{textAlign:"right",backgroundColor:e.palette.secondary.main},matchCardMiddle:{textAlign:"center"},matchCardLeft:{backgroundColor:e.palette.primary.main},matchContainer:{margin:"-16px",width:"105%"},matchText:{padding:"20px",fontSize:"20px"},arrowIcon:{fontSize:"30px",padding:"0px"},expand:{transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),marginLeft:"auto"},expandOpen:{transform:"rotate(180deg)"}})})(function(e){var t=e.matchData,a=e.classes,r={expanded:!1,modalOpen:v.Close,currentPlayer:void 0},n=o.a.useState(r),l=Object(d.a)(n,2),m=l[0],i=l[1],h=t.matchStats,p=function(e,t){return i(Object(u.a)({},m,{modalOpen:e,currentPlayer:t}))};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,t.matchNumber," ",t.date),o.a.createElement(b.b,{className:a.root},o.a.createElement(b.e,{className:a.matchContainer,container:!0,spacing:24},o.a.createElement(b.e,{className:a.matchCardLeft,item:!0,xs:4},o.a.createElement(f.a,{className:a.matchText},t.homeTeam.name)),o.a.createElement(b.e,{className:a.matchCardMiddle,item:!0,xs:4},h.matchStatus===s.Complete&&o.a.createElement("div",{className:a.matchText},h.homeTeamScore," - ",h.awayTeamScore),h.matchStatus===s.Incomplete&&o.a.createElement("div",{className:a.matchText},"VS"),o.a.createElement(b.f,{className:M()(a.arrowIcon,a.expand,Object(c.a)({},a.expandOpen,m.expanded)),onClick:function(){return i(Object(u.a)({},m,{expanded:!m.expanded}))},"aria-expanded":m.expanded,"aria-label":"Show more"},o.a.createElement(A.a,{className:a.arrowIcon}))),o.a.createElement(b.e,{className:a.matchCardRight,item:!0,xs:4},o.a.createElement(f.a,{className:a.matchText},t.awayTeam.name))),o.a.createElement(b.d,{in:m.expanded,timeout:"auto",unmountOnExit:!0},h.matchStatus===s.Incomplete&&o.a.createElement("div",null,"Data Not Available"),h.matchStatus===s.Complete&&o.a.createElement(T,{matchStats:h,handleModalAction:p}))),m.modalOpen==v.Open&&m.currentPlayer&&o.a.createElement(k,{player:m.currentPlayer,handleModalAction:p}))});a(300);function E(e){var t=e.seasonMatches;return t.reverse(),console.log(y("Roy Aranda")),console.log(y("Alvin Soh")),console.log(y("Jeremy Soh")),console.log(y("Hussein Debel")),console.log(y("Usman Haidar")),console.log(y("Khatami Chau")),console.log(y("Tavonga Nyoka")),o.a.createElement("div",{className:"match-panel"},t.map(function(e){var t=Object(p.createMuiTheme)({palette:{primary:{main:e.homeTeam.colour},secondary:{light:"#0066ff",main:e.awayTeam.colour,contrastText:"#ffcc00"}}});return o.a.createElement(p.MuiThemeProvider,{key:e.matchId,theme:t},o.a.createElement(g,{matchData:e}))}))}var S=function(){var e=o.a.useState({openModal:!1}),t=Object(d.a)(e,2),a=t[0],s=(t[1],P(i));return a.openModal?o.a.createElement(o.a.Fragment,null):o.a.createElement(E,{seasonMatches:s})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},35:function(e){e.exports=[{matchId:1,homeTeam:{name:"Pilots",colour:"#9e9d24"},awayTeam:{name:"No Prescense",colour:"#9e9e9e"},date:"13/03/2019",status:"complete",matchNumber:"1",matchStats:{homeTeamScore:24,awayTeamScore:51,homeTeamStats:[{player:{number:4,name:"Alvin Soh"},fieldGoalsAttempted:14,fieldGoalsMade:4,threePointsAttempted:6,threePointsMade:2,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:0,foulsGiven:1,rebounds:5,steals:2,assists:1,turnovers:1,blocks:0},{player:{number:2,name:"Roy Aranda"},fieldGoalsAttempted:11,fieldGoalsMade:3,threePointsAttempted:3,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:2,foulsGiven:2,rebounds:1,steals:1,assists:2,turnovers:4,blocks:0},{player:{number:21,name:"Hussein Debel"},fieldGoalsAttempted:2,fieldGoalsMade:0,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:0,foulsGiven:1,rebounds:1,steals:2,assists:0,turnovers:1,blocks:1},{player:{number:88,name:"Tavonga Nyoka"},fieldGoalsAttempted:4,fieldGoalsMade:1,threePointsAttempted:2,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:0,foulsGiven:2,rebounds:5,steals:1,assists:1,turnovers:3,blocks:1},{player:{number:3,name:"Khatami Chau"},fieldGoalsAttempted:12,fieldGoalsMade:1,threePointsAttempted:7,threePointsMade:1,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:0,foulsGiven:6,rebounds:8,steals:0,assists:2,turnovers:0,blocks:0},{player:{number:74,name:"Usman Haidar"},fieldGoalsAttempted:6,fieldGoalsMade:0,threePointsAttempted:1,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:0,foulsGiven:1,rebounds:2,steals:1,assists:0,turnovers:0,blocks:0},{player:{number:19,name:"Jeremy Soh"},fieldGoalsAttempted:5,fieldGoalsMade:1,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:2,freeThrowsMade:1,foulsDrawn:1,foulsGiven:0,rebounds:2,steals:2,assists:0,turnovers:3,blocks:0}]}},{matchId:2,homeTeam:{name:"Pilots",colour:"#9e9d24"},awayTeam:{name:"Willowdale Chargers",colour:"#ff5722"},date:"20/03/2019",status:"complete",matchNumber:"2",matchStats:{homeTeamScore:36,awayTeamScore:26,homeTeamStats:[{player:{number:4,name:"Alvin Soh"},fieldGoalsAttempted:5,fieldGoalsMade:3,threePointsAttempted:2,threePointsMade:1,freeThrowsAttempted:5,freeThrowsMade:1,foulsDrawn:4,foulsGiven:0,rebounds:5,steals:1,assists:0,turnovers:1,blocks:0},{player:{number:2,name:"Roy Aranda"},fieldGoalsAttempted:8,fieldGoalsMade:5,threePointsAttempted:3,threePointsMade:1,freeThrowsAttempted:9,freeThrowsMade:7,foulsDrawn:4,foulsGiven:1,rebounds:0,steals:4,assists:1,turnovers:5,blocks:0},{player:{number:21,name:"Hussein Debel"},fieldGoalsAttempted:3,fieldGoalsMade:0,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:0,foulsGiven:1,rebounds:1,steals:2,assists:3,turnovers:1,blocks:0},{player:{number:88,name:"Tavonga Nyoka"},fieldGoalsAttempted:2,fieldGoalsMade:0,threePointsAttempted:2,threePointsMade:0,freeThrowsAttempted:2,freeThrowsMade:0,foulsDrawn:2,foulsGiven:4,rebounds:3,steals:4,assists:1,turnovers:1,blocks:1},{player:{number:3,name:"Khatami Chau"},fieldGoalsAttempted:4,fieldGoalsMade:1,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:2,freeThrowsMade:2,foulsDrawn:3,foulsGiven:2,rebounds:8,steals:4,assists:2,turnovers:3,blocks:0},{player:{number:74,name:"Usman Haidar"},fieldGoalsAttempted:0,fieldGoalsMade:0,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:2,freeThrowsMade:1,foulsDrawn:1,foulsGiven:2,rebounds:2,steals:0,assists:0,turnovers:2,blocks:0},{player:{number:19,name:"Jeremy Soh"},fieldGoalsAttempted:6,fieldGoalsMade:2,threePointsAttempted:1,threePointsMade:0,freeThrowsAttempted:2,freeThrowsMade:1,foulsDrawn:2,foulsGiven:1,rebounds:4,steals:1,assists:0,turnovers:2,blocks:0}]}},{matchId:3,homeTeam:{name:"Pilots",colour:"#fce4ec"},awayTeam:{name:"Has Beens",colour:"#0277bd"},date:"27/03/2019",status:"complete",matchNumber:"3",matchStats:{homeTeamScore:51,awayTeamScore:16,homeTeamStats:[{player:{number:4,name:"Alvin Soh"},fieldGoalsAttempted:7,fieldGoalsMade:2,threePointsAttempted:1,threePointsMade:0,freeThrowsAttempted:4,freeThrowsMade:3,foulsDrawn:2,foulsGiven:0,rebounds:7,steals:1,assists:1,turnovers:3,blocks:0},{player:{number:2,name:"Roy Aranda"},fieldGoalsAttempted:11,fieldGoalsMade:6,threePointsAttempted:2,threePointsMade:0,freeThrowsAttempted:9,freeThrowsMade:7,foulsDrawn:4,foulsGiven:0,rebounds:0,steals:4,assists:0,turnovers:0,blocks:0},{player:{number:21,name:"Hussein Debel"},fieldGoalsAttempted:2,fieldGoalsMade:1,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:0,foulsGiven:0,rebounds:2,steals:6,assists:1,turnovers:2,blocks:0},{player:{number:88,name:"Tavonga Nyoka"},fieldGoalsAttempted:3,fieldGoalsMade:0,threePointsAttempted:1,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:0,foulsGiven:0,rebounds:9,steals:2,assists:2,turnovers:2,blocks:0},{player:{number:3,name:"Khatami Chau"},fieldGoalsAttempted:9,fieldGoalsMade:6,threePointsAttempted:3,threePointsMade:2,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:3,foulsGiven:0,rebounds:5,steals:3,assists:2,turnovers:4,blocks:0},{player:{number:74,name:"Usman Haidar"},fieldGoalsAttempted:4,fieldGoalsMade:1,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:2,freeThrowsMade:1,foulsDrawn:1,foulsGiven:0,rebounds:1,steals:0,assists:0,turnovers:1,blocks:0},{player:{number:19,name:"Jeremy Soh"},fieldGoalsAttempted:4,fieldGoalsMade:3,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:2,freeThrowsMade:0,foulsDrawn:2,foulsGiven:0,rebounds:4,steals:1,assists:0,turnovers:1,blocks:0}]}},{matchId:4,homeTeam:{name:"Pilots",colour:"#fce4ec"},awayTeam:{name:"Reapers",colour:"#311b92"},date:"03/04/2019",status:"complete",matchNumber:"4",matchStats:{homeTeamScore:49,awayTeamScore:30,homeTeamStats:[{player:{number:4,name:"Alvin Soh"},fieldGoalsAttempted:9,fieldGoalsMade:1,threePointsAttempted:1,threePointsMade:1,freeThrowsAttempted:4,freeThrowsMade:2,foulsDrawn:2,foulsGiven:0,rebounds:8,steals:4,assists:2,turnovers:0,blocks:0},{player:{number:2,name:"Roy Aranda"},fieldGoalsAttempted:16,fieldGoalsMade:9,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:1,freeThrowsMade:1,foulsDrawn:1,foulsGiven:0,rebounds:0,steals:3,assists:3,turnovers:1,blocks:0},{player:{number:21,name:"Hussein Debel"},fieldGoalsAttempted:1,fieldGoalsMade:0,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:0,foulsGiven:0,rebounds:0,steals:2,assists:0,turnovers:0,blocks:0},{player:{number:88,name:"Tavonga Nyoka"},fieldGoalsAttempted:8,fieldGoalsMade:1,threePointsAttempted:1,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:1,foulsGiven:0,rebounds:6,steals:1,assists:5,turnovers:4,blocks:1},{player:{number:3,name:"Khatami Chau"},fieldGoalsAttempted:7,fieldGoalsMade:5,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:4,freeThrowsMade:2,foulsDrawn:3,foulsGiven:0,rebounds:7,steals:2,assists:3,turnovers:2,blocks:0},{player:{number:74,name:"Usman Haidar"},fieldGoalsAttempted:2,fieldGoalsMade:1,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:0,foulsGiven:0,rebounds:0,steals:0,assists:1,turnovers:0,blocks:0},{player:{number:19,name:"Jeremy Soh"},fieldGoalsAttempted:7,fieldGoalsMade:4,threePointsAttempted:1,threePointsMade:1,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:4,foulsGiven:0,rebounds:5,steals:0,assists:0,turnovers:2,blocks:0}]}},{matchId:5,homeTeam:{name:"Pilots",colour:"#fce4ec"},awayTeam:{name:"Archers",colour:"#f50057"},date:"17/04/2019",status:"complete",matchNumber:"5",matchStats:{homeTeamScore:23,awayTeamScore:32,homeTeamStats:[{player:{number:4,name:"Alvin Soh"},fieldGoalsAttempted:6,fieldGoalsMade:3,threePointsAttempted:2,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:2,foulsGiven:0,rebounds:8,steals:6,assists:0,turnovers:0,blocks:0},{player:{number:2,name:"Roy Aranda"},fieldGoalsAttempted:12,fieldGoalsMade:1,threePointsAttempted:7,threePointsMade:1,freeThrowsAttempted:4,freeThrowsMade:2,foulsDrawn:2,foulsGiven:0,rebounds:3,steals:0,assists:3,turnovers:2,blocks:0},{player:{number:21,name:"Hussein Debel"},fieldGoalsAttempted:0,fieldGoalsMade:0,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:0,foulsGiven:0,rebounds:0,steals:1,assists:0,turnovers:0,blocks:0},{player:{number:88,name:"Tavonga Nyoka"},fieldGoalsAttempted:4,fieldGoalsMade:2,threePointsAttempted:2,threePointsMade:0,freeThrowsAttempted:2,freeThrowsMade:1,foulsDrawn:2,foulsGiven:0,rebounds:9,steals:0,assists:1,turnovers:2,blocks:1},{player:{number:3,name:"Khatami Chau"},fieldGoalsAttempted:11,fieldGoalsMade:2,threePointsAttempted:2,threePointsMade:0,freeThrowsAttempted:4,freeThrowsMade:1,foulsDrawn:4,foulsGiven:0,rebounds:8,steals:1,assists:1,turnovers:5,blocks:0},{player:{number:74,name:"Usman Haidar"},fieldGoalsAttempted:1,fieldGoalsMade:1,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:0,foulsGiven:0,rebounds:2,steals:1,assists:0,turnovers:0,blocks:0},{player:{number:19,name:"Jeremy Soh"},fieldGoalsAttempted:5,fieldGoalsMade:0,threePointsAttempted:2,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:1,foulsGiven:0,rebounds:2,steals:1,assists:0,turnovers:2,blocks:0}]}},{matchId:6,homeTeam:{name:"Pilots",colour:"#fce4ec"},awayTeam:{name:"Tanking for Zion",colour:"#fafafa"},date:"24/04/2019",status:"complete",matchNumber:"6",matchStats:{homeTeamScore:32,awayTeamScore:28,homeTeamStats:[{player:{number:4,name:"Alvin Soh"},fieldGoalsAttempted:9,fieldGoalsMade:2,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:6,freeThrowsMade:3,foulsDrawn:3,foulsGiven:0,rebounds:5,steals:2,assists:0,turnovers:1,blocks:0},{player:{number:2,name:"Roy Aranda"},fieldGoalsAttempted:12,fieldGoalsMade:5,threePointsAttempted:2,threePointsMade:1,freeThrowsAttempted:1,freeThrowsMade:0,foulsDrawn:2,foulsGiven:0,rebounds:2,steals:3,assists:0,turnovers:1,blocks:0},{player:{number:21,name:"Hussein Debel"},fieldGoalsAttempted:0,fieldGoalsMade:0,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:1,foulsGiven:0,rebounds:0,steals:1,assists:0,turnovers:0,blocks:0},{player:{number:88,name:"Tavonga Nyoka"},fieldGoalsAttempted:2,fieldGoalsMade:1,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:0,foulsGiven:0,rebounds:4,steals:0,assists:3,turnovers:2,blocks:1},{player:{number:3,name:"Khatami Chau"},fieldGoalsAttempted:7,fieldGoalsMade:3,threePointsAttempted:1,threePointsMade:0,freeThrowsAttempted:4,freeThrowsMade:2,foulsDrawn:2,foulsGiven:0,rebounds:10,steals:1,assists:2,turnovers:4,blocks:0},{player:{number:74,name:"Usman Haidar"},fieldGoalsAttempted:2,fieldGoalsMade:1,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:0,foulsGiven:0,rebounds:2,steals:1,assists:0,turnovers:3,blocks:0},{player:{number:19,name:"Jeremy Soh"},fieldGoalsAttempted:7,fieldGoalsMade:1,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:0,foulsGiven:0,rebounds:7,steals:1,assists:0,turnovers:1,blocks:0}]}},{matchId:7,homeTeam:{name:"Pilots",colour:"#fce4ec"},awayTeam:{name:"Willowdale Chargers",colour:"#ff5722"},date:"08/05/2019",status:"complete",matchNumber:"7",matchStats:{homeTeamScore:58,awayTeamScore:28,homeTeamStats:[{player:{number:4,name:"Alvin Soh"},fieldGoalsAttempted:10,fieldGoalsMade:6,threePointsAttempted:3,threePointsMade:1,freeThrowsAttempted:6,freeThrowsMade:3,foulsDrawn:3,foulsGiven:0,rebounds:11,steals:4,assists:2,turnovers:2,blocks:0},{player:{number:2,name:"Roy Aranda"},fieldGoalsAttempted:14,fieldGoalsMade:8,threePointsAttempted:1,threePointsMade:0,freeThrowsAttempted:4,freeThrowsMade:4,foulsDrawn:2,foulsGiven:1,rebounds:2,steals:5,assists:3,turnovers:3,blocks:0},{player:{number:21,name:"Hussein Debel"},fieldGoalsAttempted:6,fieldGoalsMade:1,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:2,freeThrowsMade:0,foulsDrawn:1,foulsGiven:0,rebounds:1,steals:4,assists:1,turnovers:2,blocks:0},{player:{number:88,name:"Tavonga Nyoka"},fieldGoalsAttempted:3,fieldGoalsMade:0,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:0,foulsGiven:0,rebounds:3,steals:3,assists:5,turnovers:2,blocks:1},{player:{number:3,name:"Khatami Chau"},fieldGoalsAttempted:5,fieldGoalsMade:3,threePointsAttempted:2,threePointsMade:0,freeThrowsAttempted:1,freeThrowsMade:0,foulsDrawn:1,foulsGiven:0,rebounds:6,steals:5,assists:3,turnovers:2,blocks:0},{player:{number:74,name:"Usman Haidar"},fieldGoalsAttempted:12,fieldGoalsMade:5,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:0,foulsGiven:0,rebounds:1,steals:1,assists:0,turnovers:1,blocks:0},{player:{number:19,name:"Jeremy Soh"},fieldGoalsAttempted:4,fieldGoalsMade:2,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:0,foulsGiven:0,rebounds:5,steals:1,assists:0,turnovers:2,blocks:0}]}},{matchId:8,homeTeam:{name:"Pilots",colour:"#fce4ec"},awayTeam:{name:"Redbacks",colour:"#d50000"},date:"08/05/2019",status:"complete",matchNumber:"8",matchStats:{homeTeamScore:51,awayTeamScore:38,homeTeamStats:[{player:{number:4,name:"Alvin Soh"},fieldGoalsAttempted:4,fieldGoalsMade:3,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:6,freeThrowsMade:3,foulsDrawn:3,foulsGiven:0,rebounds:8,steals:1,assists:1,turnovers:1,blocks:0},{player:{number:2,name:"Roy Aranda"},fieldGoalsAttempted:19,fieldGoalsMade:11,threePointsAttempted:4,threePointsMade:1,freeThrowsAttempted:6,freeThrowsMade:5,foulsDrawn:3,foulsGiven:0,rebounds:4,steals:1,assists:3,turnovers:0,blocks:0},{player:{number:21,name:"Hussein Debel"},fieldGoalsAttempted:3,fieldGoalsMade:0,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:2,freeThrowsMade:0,foulsDrawn:2,foulsGiven:0,rebounds:2,steals:2,assists:0,turnovers:2,blocks:0},{player:{number:88,name:"Tavonga Nyoka"},fieldGoalsAttempted:8,fieldGoalsMade:4,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:1,foulsGiven:0,rebounds:5,steals:3,assists:2,turnovers:2,blocks:2},{player:{number:3,name:"Khatami Chau"},fieldGoalsAttempted:3,fieldGoalsMade:2,threePointsAttempted:1,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:0,foulsGiven:0,rebounds:4,steals:2,assists:3,turnovers:3,blocks:0},{player:{number:74,name:"Usman Haidar"},fieldGoalsAttempted:4,fieldGoalsMade:1,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:2,freeThrowsMade:0,foulsDrawn:1,foulsGiven:0,rebounds:1,steals:1,assists:0,turnovers:1,blocks:0},{player:{number:19,name:"Jeremy Soh"},fieldGoalsAttempted:3,fieldGoalsMade:0,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:0,foulsGiven:0,rebounds:2,steals:1,assists:1,turnovers:1,blocks:1}]}}]}},[[180,1,2]]]);
//# sourceMappingURL=main.fddb1b5a.chunk.js.map