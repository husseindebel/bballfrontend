(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){},25:function(e,t,a){e.exports=a(42)},30:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var s,r=a(0),o=a.n(r),l=a(16),n=a.n(l),d=(a(30),a(9)),m=a.t(d,2);!function(e){e[e.Complete=0]="Complete",e[e.Incomplete=1]="Incomplete"}(s||(s={}));var i,u=a(49),f=(a(10),a(8));!function(e){e[e.Open=0]="Open",e[e.Close=1]="Close"}(i||(i={}));var h=function(e){var t=e.matchData,a=t.matchStats;return o.a.createElement(u.a,{onClick:function(){return Object(f.b)("/bballfrontend/match/".concat(t.matchId))},className:"match-card"},o.a.createElement(u.a.Body,{className:"text-center"},o.a.createElement(u.a.Text,null,"Match: ",t.matchNumber," ",t.date),o.a.createElement(u.a.Text,null,o.a.createElement("span",null,t.homeTeam.name)," ",a.matchStatus===s.Complete&&o.a.createElement("span",null,a.homeTeamScore," - ",a.awayTeamScore)," ",a.matchStatus===s.Incomplete&&o.a.createElement("span",null,"VS")," ",o.a.createElement("span",null,t.awayTeam.name))))},c=a(43),p=a(44),b=a(45);function w(e){var t=e.seasonMatches.slice().reverse();return o.a.createElement("div",{className:"match-season"},o.a.createElement(c.a,null,t.map(function(e){return o.a.createElement(p.a,{key:e.matchId},o.a.createElement(b.a,null),o.a.createElement(b.a,{xs:10},o.a.createElement(h,{matchData:e})),o.a.createElement(b.a,null))})))}var A=a(24);function G(e){return e.default.map(function(e){"complete"===e.status?e.matchStats.matchStatus=s.Complete:e.matchStats.matchStatus=s.Incomplete}),e.default}var M=function(e){var t=G(m),a=parseInt(e),r=function(e,t){var a=e.flatMap(function(e){return e.matchStatus===s.Incomplete?[]:e.homeTeamStats.filter(function(e){return e.player.number===t})}).reduce(function(e,t){return{player:e.player,fieldGoalsAttempted:e.fieldGoalsAttempted+t.fieldGoalsAttempted,totalPoints:0,fieldGoalsMade:e.fieldGoalsMade+t.fieldGoalsMade,threePointsAttempted:e.threePointsAttempted+t.threePointsAttempted,threePointsMade:e.threePointsMade+t.threePointsMade,freeThrowsAttempted:e.freeThrowsAttempted+t.freeThrowsAttempted,freeThrowsMade:e.freeThrowsMade+t.freeThrowsMade,assists:e.assists+t.assists,rebounds:e.rebounds+t.rebounds,steals:e.steals+t.steals,blocks:e.blocks+t.blocks,turnovers:e.turnovers+t.turnovers,foulsDrawn:e.foulsDrawn+t.foulsDrawn,foulsGiven:e.foulsGiven+t.foulsGiven}});return Object(A.a)({},a,{totalPoints:3*a.threePointsMade+2*(a.fieldGoalsMade-a.threePointsMade)+a.freeThrowsMade})}(t.map(function(e){return e.matchStats}).filter(function(e){return e.matchStatus===s.Complete}),a);return{player:r.player,pointsPerGame:r.totalPoints/t.length,assistsPerGame:r.assists/t.length,reboundsPerGame:r.rebounds/t.length,blocksPerGame:r.blocks/t.length,stealsPerGame:r.steals/t.length,fieldGoalPercentage:r.fieldGoalsMade/r.fieldGoalsAttempted,threePointPercentage:r.threePointsMade/r.threePointsAttempted,freeThrowPercentage:r.freeThrowsMade/r.freeThrowsAttempted,fieldGoalsAttempted:r.fieldGoalsAttempted,fieldGoalsMade:r.fieldGoalsMade,threePointsAttempted:r.threePointsAttempted,threePointsMade:r.threePointsMade,freeThrowsMade:r.freeThrowsMade,freeThrowsAttempted:r.freeThrowsAttempted,turnoversPerGame:r.turnovers/t.length}},T=a(23),v=a(47),P=a(48),y=a(46),S=function(e){var t=e.matchStats;return o.a.createElement("div",{className:"match-table"},o.a.createElement(y.a,{responsive:!0,striped:!0,bordered:!0,hover:!0},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Player Name"),o.a.createElement("th",null,"PTS"),o.a.createElement("th",null,"REB"),o.a.createElement("th",null,"AST"),o.a.createElement("th",null,"STL"),o.a.createElement("th",null,"BLK"),o.a.createElement("th",null,"FGM"),o.a.createElement("th",null,"FGA"),o.a.createElement("th",null,"FG%"),o.a.createElement("th",null,"3PM"),o.a.createElement("th",null,"3PA"),o.a.createElement("th",null,"3P%"),o.a.createElement("th",null,"FTM"),o.a.createElement("th",null,"FTA"),o.a.createElement("th",null,"FT%"),o.a.createElement("th",null,"TOV"),o.a.createElement("th",null,"PF"))),o.a.createElement("tbody",null,t.homeTeamStats.map(function(e){return o.a.createElement("tr",{onClick:function(){return Object(f.b)("/bballfrontend/player/".concat(e.player.number.toString()))},key:e.player.number},o.a.createElement("td",null,e.player.number,". ",e.player.name),o.a.createElement("td",null,3*e.threePointsMade+2*(e.fieldGoalsMade-e.threePointsMade)+e.freeThrowsMade),o.a.createElement("td",null,e.rebounds),o.a.createElement("td",null,e.assists),o.a.createElement("td",null,e.steals),o.a.createElement("td",null,e.blocks),o.a.createElement("td",null,e.fieldGoalsMade),o.a.createElement("td",null,e.fieldGoalsAttempted),o.a.createElement("td",null,isNaN(e.fieldGoalsMade/e.fieldGoalsAttempted)?0:(e.fieldGoalsMade/e.fieldGoalsAttempted*100).toFixed(2)),o.a.createElement("td",null,e.threePointsMade),o.a.createElement("td",null,e.threePointsAttempted),o.a.createElement("td",null,isNaN(e.threePointsMade/e.threePointsAttempted)?0:(e.threePointsMade/e.threePointsAttempted*100).toFixed(2)),o.a.createElement("td",null,e.freeThrowsMade),o.a.createElement("td",null,e.freeThrowsAttempted),o.a.createElement("td",null,isNaN(e.freeThrowsMade/e.freeThrowsAttempted)?0:(e.freeThrowsMade/e.freeThrowsAttempted*100).toFixed(2)),o.a.createElement("td",null,e.turnovers),o.a.createElement("td",null,e.foulsGiven))}))))};function k(e){var t=function(e){if(e){var t=parseInt(e),a=G(m).filter(function(e){return e.matchId==t});return 0===a.length?void 0:a[0]}}(e.matchId),a=[{key:"1",name:"match-stats",label:"Match Stats"},{key:"2",name:"player-stats",label:"Player Stats"},{key:"3",name:"video",label:"Video"}],r=o.a.useState({activeTab:a[1]}),l=Object(T.a)(r,2),n=l[0],d=l[1];return o.a.createElement("div",{className:"match-panel"},t&&o.a.createElement("div",null,o.a.createElement(v.a,{className:"text-center"},o.a.createElement("span",null,t.homeTeam.name)," ",t.matchStats.matchStatus===s.Complete&&o.a.createElement("span",null,t.matchStats.homeTeamScore," - ",t.matchStats.awayTeamScore)," ",t.matchStats.matchStatus===s.Incomplete&&o.a.createElement("span",null,"VS")," ",o.a.createElement("span",null,t.awayTeam.name)),o.a.createElement(P.a,{variant:"pills",activeKey:n.activeTab.key,onSelect:function(e){return d({activeTab:a.filter(function(t){return t.key===e})[0]})}},a.map(function(e){return o.a.createElement(P.a.Item,{key:e.key},o.a.createElement(P.a.Link,{eventKey:e.key},e.label))})),o.a.createElement(c.a,null,o.a.createElement(b.a,null),o.a.createElement(b.a,null,"match-stats"===n.activeTab.name&&o.a.createElement("span",null,"Match Stats"),"player-stats"===n.activeTab.name&&t.matchStats.matchStatus===s.Complete&&o.a.createElement(S,{matchStats:t.matchStats})),o.a.createElement(b.a,null))))}var E=function(e){var t=e.playerId;if(!t)return null;var a=function(e){var t=M(e);return{number:t.player.number.toString(),name:t.player.name,stats:[{stat:t.pointsPerGame.toFixed(3),label:"PPG"},{stat:t.assistsPerGame.toFixed(3),label:"APG"},{stat:t.reboundsPerGame.toFixed(3),label:"RPG"},{stat:t.fieldGoalPercentage.toFixed(3),volume:{made:t.fieldGoalsMade.toString(),attempted:t.fieldGoalsAttempted.toString()},label:"FG%"},{stat:t.threePointPercentage.toFixed(3),label:"3PT%",volume:{made:t.threePointsMade.toString(),attempted:t.threePointsAttempted.toString()}},{stat:t.freeThrowPercentage.toFixed(3),label:"FT%",volume:{made:t.freeThrowsMade.toString(),attempted:t.freeThrowsAttempted.toString()}},{stat:t.stealsPerGame.toFixed(3),label:"SPG"},{stat:t.blocksPerGame.toFixed(3),label:"BPG"},{stat:t.turnoversPerGame.toFixed(3),label:"TOV"}]}}(t),s=[a.stats.filter(function(e){return"APG"===e.label||"PPG"===e.label||"RPG"===e.label}),a.stats.filter(function(e){return"FG%"===e.label||"3PT%"===e.label||"FT%"===e.label}),a.stats.filter(function(e){return"SPG"===e.label||"BPG"===e.label||"TOV"===e.label})];return o.a.createElement("div",null,o.a.createElement(v.a,null,o.a.createElement("h1",null,"#",a.number,". ",a.name)),o.a.createElement(c.a,null,s&&s.map(function(e){return o.a.createElement("div",{className:"player-score"},o.a.createElement(p.a,null,e&&e.map(function(e){return o.a.createElement(b.a,null,o.a.createElement("h2",null,e.stat),e.volume&&o.a.createElement("h5",null,"(",e.volume.made,"/",e.volume.attempted,")"),e.label)})))})))},D=function(e){e.path;var t=G(m);return o.a.createElement(w,{seasonMatches:t})},g=function(e){e.path;var t=e.matchId;return o.a.createElement(k,{matchId:t})},N=function(e){e.path;var t=e.playerId;return o.a.createElement(E,{playerId:t})},I=function(){return o.a.createElement(f.a,{basepath:"/bballfrontend"},o.a.createElement(D,{path:"/"}),o.a.createElement(g,{path:"/match/:matchId"}),o.a.createElement(N,{path:"/player/:playerId"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(o.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e){e.exports=[{matchId:1,homeTeam:{name:"Pilots",colour:"#9e9d24"},awayTeam:{name:"Willowdale Chargers",colour:"#ff5722"},date:"20/03/2019",status:"complete",matchNumber:"1",matchStats:{homeTeamScore:36,awayTeamScore:26,homeTeamStats:[{player:{number:4,name:"Alvin Soh"},fieldGoalsAttempted:5,fieldGoalsMade:3,threePointsAttempted:2,threePointsMade:1,freeThrowsAttempted:5,freeThrowsMade:1,foulsDrawn:4,foulsGiven:0,rebounds:5,steals:1,assists:0,turnovers:1,blocks:0},{player:{number:2,name:"Roy Aranda"},fieldGoalsAttempted:8,fieldGoalsMade:5,threePointsAttempted:3,threePointsMade:1,freeThrowsAttempted:9,freeThrowsMade:7,foulsDrawn:4,foulsGiven:1,rebounds:0,steals:4,assists:1,turnovers:5,blocks:0},{player:{number:21,name:"Hussein Debel"},fieldGoalsAttempted:3,fieldGoalsMade:0,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:0,foulsGiven:1,rebounds:1,steals:2,assists:3,turnovers:1,blocks:0},{player:{number:88,name:"Tavonga Nyoka"},fieldGoalsAttempted:2,fieldGoalsMade:0,threePointsAttempted:2,threePointsMade:0,freeThrowsAttempted:2,freeThrowsMade:0,foulsDrawn:2,foulsGiven:4,rebounds:3,steals:4,assists:1,turnovers:1,blocks:1},{player:{number:3,name:"Khatami Chau"},fieldGoalsAttempted:4,fieldGoalsMade:1,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:2,freeThrowsMade:2,foulsDrawn:3,foulsGiven:2,rebounds:8,steals:4,assists:2,turnovers:3,blocks:0},{player:{number:74,name:"Usman Haidar"},fieldGoalsAttempted:0,fieldGoalsMade:0,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:2,freeThrowsMade:1,foulsDrawn:1,foulsGiven:2,rebounds:2,steals:0,assists:0,turnovers:2,blocks:0},{player:{number:19,name:"Jeremy Soh"},fieldGoalsAttempted:6,fieldGoalsMade:2,threePointsAttempted:1,threePointsMade:0,freeThrowsAttempted:2,freeThrowsMade:1,foulsDrawn:2,foulsGiven:1,rebounds:4,steals:1,assists:0,turnovers:2,blocks:0}]}},{matchId:2,homeTeam:{name:"Pilots",colour:"#fce4ec"},awayTeam:{name:"Has Beens",colour:"#0277bd"},date:"27/03/2019",status:"complete",matchNumber:"2",matchStats:{homeTeamScore:51,awayTeamScore:16,homeTeamStats:[{player:{number:4,name:"Alvin Soh"},fieldGoalsAttempted:7,fieldGoalsMade:2,threePointsAttempted:1,threePointsMade:0,freeThrowsAttempted:4,freeThrowsMade:3,foulsDrawn:2,foulsGiven:0,rebounds:7,steals:1,assists:1,turnovers:3,blocks:0},{player:{number:2,name:"Roy Aranda"},fieldGoalsAttempted:11,fieldGoalsMade:6,threePointsAttempted:2,threePointsMade:0,freeThrowsAttempted:9,freeThrowsMade:7,foulsDrawn:4,foulsGiven:0,rebounds:0,steals:4,assists:0,turnovers:0,blocks:0},{player:{number:21,name:"Hussein Debel"},fieldGoalsAttempted:2,fieldGoalsMade:1,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:0,foulsGiven:0,rebounds:2,steals:6,assists:1,turnovers:2,blocks:0},{player:{number:88,name:"Tavonga Nyoka"},fieldGoalsAttempted:3,fieldGoalsMade:0,threePointsAttempted:1,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:0,foulsGiven:0,rebounds:9,steals:2,assists:2,turnovers:2,blocks:0},{player:{number:3,name:"Khatami Chau"},fieldGoalsAttempted:9,fieldGoalsMade:6,threePointsAttempted:3,threePointsMade:2,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:3,foulsGiven:0,rebounds:5,steals:3,assists:2,turnovers:4,blocks:0},{player:{number:74,name:"Usman Haidar"},fieldGoalsAttempted:4,fieldGoalsMade:1,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:2,freeThrowsMade:1,foulsDrawn:1,foulsGiven:0,rebounds:1,steals:0,assists:0,turnovers:1,blocks:0},{player:{number:19,name:"Jeremy Soh"},fieldGoalsAttempted:4,fieldGoalsMade:3,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:2,freeThrowsMade:0,foulsDrawn:2,foulsGiven:0,rebounds:4,steals:1,assists:0,turnovers:1,blocks:0}]}},{matchId:3,homeTeam:{name:"Pilots",colour:"#fce4ec"},awayTeam:{name:"Reapers",colour:"#311b92"},date:"03/04/2019",status:"complete",matchNumber:"3",matchStats:{homeTeamScore:49,awayTeamScore:30,homeTeamStats:[{player:{number:4,name:"Alvin Soh"},fieldGoalsAttempted:9,fieldGoalsMade:1,threePointsAttempted:1,threePointsMade:1,freeThrowsAttempted:4,freeThrowsMade:2,foulsDrawn:2,foulsGiven:0,rebounds:8,steals:4,assists:2,turnovers:0,blocks:0},{player:{number:2,name:"Roy Aranda"},fieldGoalsAttempted:16,fieldGoalsMade:9,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:1,freeThrowsMade:1,foulsDrawn:1,foulsGiven:0,rebounds:0,steals:3,assists:3,turnovers:1,blocks:0},{player:{number:21,name:"Hussein Debel"},fieldGoalsAttempted:1,fieldGoalsMade:0,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:0,foulsGiven:0,rebounds:0,steals:2,assists:0,turnovers:0,blocks:0},{player:{number:88,name:"Tavonga Nyoka"},fieldGoalsAttempted:8,fieldGoalsMade:1,threePointsAttempted:1,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:1,foulsGiven:0,rebounds:6,steals:1,assists:5,turnovers:4,blocks:1},{player:{number:3,name:"Khatami Chau"},fieldGoalsAttempted:7,fieldGoalsMade:5,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:4,freeThrowsMade:2,foulsDrawn:3,foulsGiven:0,rebounds:7,steals:2,assists:3,turnovers:2,blocks:0},{player:{number:74,name:"Usman Haidar"},fieldGoalsAttempted:2,fieldGoalsMade:1,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:0,foulsGiven:0,rebounds:0,steals:0,assists:1,turnovers:0,blocks:0},{player:{number:19,name:"Jeremy Soh"},fieldGoalsAttempted:7,fieldGoalsMade:4,threePointsAttempted:1,threePointsMade:1,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:4,foulsGiven:0,rebounds:5,steals:0,assists:0,turnovers:2,blocks:0}]}},{matchId:4,homeTeam:{name:"Pilots",colour:"#fce4ec"},awayTeam:{name:"Archers",colour:"#f50057"},date:"17/04/2019",status:"complete",matchNumber:"4",matchStats:{homeTeamScore:23,awayTeamScore:32,homeTeamStats:[{player:{number:4,name:"Alvin Soh"},fieldGoalsAttempted:6,fieldGoalsMade:3,threePointsAttempted:2,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:2,foulsGiven:0,rebounds:8,steals:6,assists:0,turnovers:0,blocks:0},{player:{number:2,name:"Roy Aranda"},fieldGoalsAttempted:12,fieldGoalsMade:1,threePointsAttempted:7,threePointsMade:1,freeThrowsAttempted:4,freeThrowsMade:2,foulsDrawn:2,foulsGiven:0,rebounds:3,steals:0,assists:3,turnovers:2,blocks:0},{player:{number:21,name:"Hussein Debel"},fieldGoalsAttempted:0,fieldGoalsMade:0,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:0,foulsGiven:0,rebounds:0,steals:1,assists:0,turnovers:0,blocks:0},{player:{number:88,name:"Tavonga Nyoka"},fieldGoalsAttempted:4,fieldGoalsMade:2,threePointsAttempted:2,threePointsMade:0,freeThrowsAttempted:2,freeThrowsMade:1,foulsDrawn:2,foulsGiven:0,rebounds:9,steals:0,assists:1,turnovers:2,blocks:1},{player:{number:3,name:"Khatami Chau"},fieldGoalsAttempted:11,fieldGoalsMade:2,threePointsAttempted:2,threePointsMade:0,freeThrowsAttempted:4,freeThrowsMade:1,foulsDrawn:4,foulsGiven:0,rebounds:8,steals:1,assists:1,turnovers:5,blocks:0},{player:{number:74,name:"Usman Haidar"},fieldGoalsAttempted:1,fieldGoalsMade:1,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:0,foulsGiven:0,rebounds:2,steals:1,assists:0,turnovers:0,blocks:0},{player:{number:19,name:"Jeremy Soh"},fieldGoalsAttempted:5,fieldGoalsMade:0,threePointsAttempted:2,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:1,foulsGiven:0,rebounds:2,steals:1,assists:0,turnovers:2,blocks:0}]}},{matchId:5,homeTeam:{name:"Pilots",colour:"#fce4ec"},awayTeam:{name:"Tanking for Zion",colour:"#fafafa"},date:"24/04/2019",status:"complete",matchNumber:"5",matchStats:{homeTeamScore:32,awayTeamScore:28,homeTeamStats:[{player:{number:4,name:"Alvin Soh"},fieldGoalsAttempted:9,fieldGoalsMade:2,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:6,freeThrowsMade:3,foulsDrawn:3,foulsGiven:0,rebounds:5,steals:2,assists:0,turnovers:1,blocks:0},{player:{number:2,name:"Roy Aranda"},fieldGoalsAttempted:12,fieldGoalsMade:5,threePointsAttempted:2,threePointsMade:1,freeThrowsAttempted:1,freeThrowsMade:0,foulsDrawn:2,foulsGiven:0,rebounds:2,steals:3,assists:0,turnovers:1,blocks:0},{player:{number:21,name:"Hussein Debel"},fieldGoalsAttempted:0,fieldGoalsMade:0,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:1,foulsGiven:0,rebounds:0,steals:1,assists:0,turnovers:0,blocks:0},{player:{number:88,name:"Tavonga Nyoka"},fieldGoalsAttempted:2,fieldGoalsMade:1,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:0,foulsGiven:0,rebounds:4,steals:0,assists:3,turnovers:2,blocks:1},{player:{number:3,name:"Khatami Chau"},fieldGoalsAttempted:7,fieldGoalsMade:3,threePointsAttempted:1,threePointsMade:0,freeThrowsAttempted:4,freeThrowsMade:2,foulsDrawn:2,foulsGiven:0,rebounds:10,steals:1,assists:2,turnovers:4,blocks:0},{player:{number:74,name:"Usman Haidar"},fieldGoalsAttempted:2,fieldGoalsMade:1,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:0,foulsGiven:0,rebounds:2,steals:1,assists:0,turnovers:3,blocks:0},{player:{number:19,name:"Jeremy Soh"},fieldGoalsAttempted:7,fieldGoalsMade:1,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:0,foulsGiven:0,rebounds:7,steals:1,assists:0,turnovers:1,blocks:0}]}},{matchId:6,homeTeam:{name:"Pilots",colour:"#fce4ec"},awayTeam:{name:"Willowdale Chargers",colour:"#ff5722"},date:"08/05/2019",status:"complete",matchNumber:"6",matchStats:{homeTeamScore:58,awayTeamScore:28,homeTeamStats:[{player:{number:4,name:"Alvin Soh"},fieldGoalsAttempted:10,fieldGoalsMade:6,threePointsAttempted:3,threePointsMade:1,freeThrowsAttempted:6,freeThrowsMade:3,foulsDrawn:3,foulsGiven:0,rebounds:11,steals:4,assists:2,turnovers:2,blocks:0},{player:{number:2,name:"Roy Aranda"},fieldGoalsAttempted:14,fieldGoalsMade:8,threePointsAttempted:1,threePointsMade:0,freeThrowsAttempted:4,freeThrowsMade:4,foulsDrawn:2,foulsGiven:1,rebounds:2,steals:5,assists:3,turnovers:3,blocks:0},{player:{number:21,name:"Hussein Debel"},fieldGoalsAttempted:6,fieldGoalsMade:1,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:2,freeThrowsMade:0,foulsDrawn:1,foulsGiven:0,rebounds:1,steals:4,assists:1,turnovers:2,blocks:0},{player:{number:88,name:"Tavonga Nyoka"},fieldGoalsAttempted:3,fieldGoalsMade:0,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:0,foulsGiven:0,rebounds:3,steals:3,assists:5,turnovers:2,blocks:1},{player:{number:3,name:"Khatami Chau"},fieldGoalsAttempted:5,fieldGoalsMade:3,threePointsAttempted:2,threePointsMade:0,freeThrowsAttempted:1,freeThrowsMade:0,foulsDrawn:1,foulsGiven:0,rebounds:6,steals:5,assists:3,turnovers:2,blocks:0},{player:{number:74,name:"Usman Haidar"},fieldGoalsAttempted:12,fieldGoalsMade:5,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:0,foulsGiven:0,rebounds:1,steals:1,assists:0,turnovers:1,blocks:0},{player:{number:19,name:"Jeremy Soh"},fieldGoalsAttempted:4,fieldGoalsMade:2,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:0,foulsGiven:0,rebounds:5,steals:1,assists:0,turnovers:2,blocks:0}]}},{matchId:7,homeTeam:{name:"Pilots",colour:"#fce4ec"},awayTeam:{name:"Redbacks",colour:"#d50000"},date:"08/05/2019",status:"complete",matchNumber:"7",matchStats:{homeTeamScore:51,awayTeamScore:38,homeTeamStats:[{player:{number:4,name:"Alvin Soh"},fieldGoalsAttempted:4,fieldGoalsMade:3,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:6,freeThrowsMade:3,foulsDrawn:3,foulsGiven:0,rebounds:8,steals:1,assists:1,turnovers:1,blocks:0},{player:{number:2,name:"Roy Aranda"},fieldGoalsAttempted:19,fieldGoalsMade:11,threePointsAttempted:4,threePointsMade:1,freeThrowsAttempted:6,freeThrowsMade:5,foulsDrawn:3,foulsGiven:0,rebounds:4,steals:1,assists:3,turnovers:0,blocks:0},{player:{number:21,name:"Hussein Debel"},fieldGoalsAttempted:3,fieldGoalsMade:0,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:2,freeThrowsMade:0,foulsDrawn:2,foulsGiven:0,rebounds:2,steals:2,assists:0,turnovers:2,blocks:0},{player:{number:88,name:"Tavonga Nyoka"},fieldGoalsAttempted:8,fieldGoalsMade:4,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:1,foulsGiven:0,rebounds:5,steals:3,assists:2,turnovers:2,blocks:2},{player:{number:3,name:"Khatami Chau"},fieldGoalsAttempted:3,fieldGoalsMade:2,threePointsAttempted:1,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:0,foulsGiven:0,rebounds:4,steals:2,assists:3,turnovers:3,blocks:0},{player:{number:74,name:"Usman Haidar"},fieldGoalsAttempted:4,fieldGoalsMade:1,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:2,freeThrowsMade:0,foulsDrawn:1,foulsGiven:0,rebounds:1,steals:1,assists:0,turnovers:1,blocks:0},{player:{number:19,name:"Jeremy Soh"},fieldGoalsAttempted:3,fieldGoalsMade:0,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:0,foulsGiven:0,rebounds:2,steals:1,assists:1,turnovers:1,blocks:1}]}},{matchId:8,homeTeam:{name:"Pilots",colour:"#fce4ec"},awayTeam:{name:"Bang Bros",colour:"#d50000"},date:"15/05/2019",status:"complete",matchNumber:"8",matchStats:{homeTeamScore:18,awayTeamScore:18,homeTeamStats:[{player:{number:4,name:"Alvin Soh"},fieldGoalsAttempted:7,fieldGoalsMade:1,threePointsAttempted:3,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:0,foulsGiven:0,rebounds:6,steals:1,assists:0,turnovers:3,blocks:0},{player:{number:2,name:"Roy Aranda"},fieldGoalsAttempted:11,fieldGoalsMade:3,threePointsAttempted:2,threePointsMade:0,freeThrowsAttempted:2,freeThrowsMade:2,foulsDrawn:2,foulsGiven:0,rebounds:3,steals:4,assists:0,turnovers:3,blocks:0},{player:{number:21,name:"Hussein Debel"},fieldGoalsAttempted:1,fieldGoalsMade:0,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:0,foulsGiven:0,rebounds:0,steals:1,assists:0,turnovers:1,blocks:0},{player:{number:88,name:"Tavonga Nyoka"},fieldGoalsAttempted:4,fieldGoalsMade:0,threePointsAttempted:1,threePointsMade:0,freeThrowsAttempted:2,freeThrowsMade:1,foulsDrawn:2,foulsGiven:0,rebounds:10,steals:1,assists:2,turnovers:4,blocks:2},{player:{number:3,name:"Khatami Chau"},fieldGoalsAttempted:3,fieldGoalsMade:1,threePointsAttempted:2,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:0,foulsGiven:0,rebounds:8,steals:1,assists:2,turnovers:1,blocks:0},{player:{number:74,name:"Usman Haidar"},fieldGoalsAttempted:4,fieldGoalsMade:1,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:0,foulsGiven:0,rebounds:0,steals:1,assists:0,turnovers:0,blocks:0},{player:{number:19,name:"Jeremy Soh"},fieldGoalsAttempted:10,fieldGoalsMade:1,threePointsAttempted:4,threePointsMade:1,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:1,foulsGiven:0,rebounds:4,steals:1,assists:0,turnovers:1,blocks:0}]}},{matchId:9,homeTeam:{name:"Pilots",colour:"#fce4ec"},awayTeam:{name:"Backcourt Violators",colour:"#d50000"},date:"08/05/2019",status:"complete",matchNumber:"9",matchStats:{homeTeamScore:50,awayTeamScore:25,homeTeamStats:[{player:{number:4,name:"Alvin Soh"},fieldGoalsAttempted:13,fieldGoalsMade:3,threePointsAttempted:4,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:0,foulsGiven:0,rebounds:11,steals:5,assists:1,turnovers:3,blocks:0},{player:{number:2,name:"Roy Aranda"},fieldGoalsAttempted:0,fieldGoalsMade:0,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:0,foulsGiven:0,rebounds:0,steals:0,assists:0,turnovers:0,blocks:0},{player:{number:21,name:"Hussein Debel"},fieldGoalsAttempted:5,fieldGoalsMade:0,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:0,foulsGiven:0,rebounds:3,steals:1,assists:1,turnovers:1,blocks:0},{player:{number:88,name:"Tavonga Nyoka"},fieldGoalsAttempted:15,fieldGoalsMade:7,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:3,freeThrowsMade:1,foulsDrawn:3,foulsGiven:0,rebounds:8,steals:4,assists:4,turnovers:1,blocks:1},{player:{number:3,name:"Khatami Chau"},fieldGoalsAttempted:15,fieldGoalsMade:7,threePointsAttempted:3,threePointsMade:1,freeThrowsAttempted:1,freeThrowsMade:1,foulsDrawn:1,foulsGiven:0,rebounds:11,steals:2,assists:5,turnovers:3,blocks:1},{player:{number:74,name:"Usman Haidar"},fieldGoalsAttempted:8,fieldGoalsMade:1,threePointsAttempted:0,threePointsMade:0,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:0,foulsGiven:0,rebounds:3,steals:1,assists:0,turnovers:3,blocks:0},{player:{number:19,name:"Jeremy Soh"},fieldGoalsAttempted:12,fieldGoalsMade:4,threePointsAttempted:6,threePointsMade:3,freeThrowsAttempted:0,freeThrowsMade:0,foulsDrawn:0,foulsGiven:0,rebounds:8,steals:5,assists:3,turnovers:3,blocks:0}]}}]}},[[25,1,2]]]);
//# sourceMappingURL=main.811fb2d7.chunk.js.map