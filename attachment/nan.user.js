// ==UserScript==
// @name         NaN-AI
// @description  the AI of Not a Number
// @namespace    http://roosephu.github.io
// @include      http://iteratoradvance.github.io/
// @require      http://www.preludels.com/prelude-browser-min.js
// @version      1
// ==/UserScript==

(function(){
  '// ==UserScript==\n// @name         NaN-AI\n// @description  the AI of Not a Number\n// @namespace    http://roosephu.github.io\n// @include      http://iteratoradvance.github.io/\n// @require      http://www.preludels.com/prelude-browser-min.js\n// @version      1\n// ==/UserScript==';
  var globalSpace, key, ref$, val, mapSize, isPrime, rand, listToStr, AI, gameController, ui;
  globalSpace = typeof global != 'undefined' && global !== null ? global : window;
  for (key in ref$ = require('prelude-ls')) {
    val = ref$[key];
    globalSpace[key] = val;
  }
  mapSize = 5;
  isPrime = function(n){
    var i;
    if (n <= 0="" 10="" 1)="" {="" return="" false;="" }="" i="2;" while="" (i="" *="" <="n)" if="" (n="" %="" 0)="" +="1;" true;="" };="" rand="function(n){" floor(math.random()="" n);="" listtostr="function(path){" var="" s,="" i$,="" len$,="" idx;="" s="" ;="" for="" (i$="0," len$="path.length;" i$="" len$;="" ++i$)="" idx="path[i$];" ("["="" "]");="" s;="" ai="(function(){" ai.displayname="AI" prototype="AI.prototype," constructor="AI;" function="" ai(graph){="" this.graph="graph;" this.findrandompath="bind$(this," 'findrandompath',="" prototype);="" this.evaluate="bind$(this," 'evaluate',="" prototype.evaluate="function(path){" cur,="" x,="" y;="" cur="0;" (x="" in="" path)="" y="path[x];" this.graph[y[0]][y[1]];="" console.log("%d="" %d",="" this.analyzer.analyze(cur="" "").score);="" [path,="" "").score];="" prototype.find="function(){" res$,="" i;="" res$="[];" res$.push(i);="" x="res$;" this.analyzer="new" nan.analyzer;="" maximumby(at(1))(="" map(this.evaluate)(="" map(this.findrandompath)(="" x)));="" prototype.findrandompath="function(param){" ref$,="" y,="" ret,="" dx,="" dy,="" len,="" path,="" i,="" d,="" nx,="" ny;="" (;;)="" ref$="[rand(mapSize)," rand(mapsize)],="" (this.graph[x][y]="" !="=" break;="" ret="[[x," y]];="" dx="[-1," 1,="" 0,="" 0];="" dy="[0," -1];="" len="7" rand(2);="" path="[x" y];="" (ret.length="==" len)="" d="rand(4);" dx[d],="" dy[d]],="" nx="ref$[0]," ny="ref$[1];" (0="" &&="" mapsize="" !in$(nx="" ny,="" path))="" ret.push([nx,="" ny]);="" path.push(nx="" ny);="" ny],="" ret;="" ai;="" }());="" gamecontroller="(function(){" gamecontroller.displayname="gameController" gamecontroller(){="" this.simulate="bind$(this," 'simulate',="" this.play="bind$(this," 'play',="" this.round="0;" prototype.getstate="function(){" square,="" dom,="" pos,="" ref1$,="" results$="[];" res$.push([]);="" this.g="res$;" this.p="res$;" console.log($('.square').length);="" =="" $('.square')).length;="" square="ref$[i$];" dom="$(square);" pos="dom.position();" (pos.top="" 110)="" continue;="" ref1$="map(round," [(pos.top="" -="" 100,="" (pos.left="" 50)="" 100]),="" this.g[x][y]="parseInt(dom.children().text());" results$.push(this.p[x][y]="$(square));" results$;="" prototype.start="function(){" $('#welcome-screen').click();="" prototype.play="function(){" ai,="" value;="" console.debug("round:="" "="" this.round);="" this.getstate();="" ai(this.g);="" value="ref$[1];" console.debug("current="" value:="" value);="" this.simulate(path);="" console.log(this.g);="" this.next();="" prototype.simulate="function(path){" idx,="" key;="" path:="" listtostr(path));="" this.p[x][y].mousedown();="" (idx="" key="path[idx];" this.p[x][y].mouseover();="" this.p[x][y].mouseup();="" prototype.next="function(){" $('#number-show').click();="" settimeout(this.play,="" 1500);="" gamecontroller;="" ui="new" ui.start();="" settimeout(ui.play,="" 2000);="" bind$(obj,="" key,="" target){="" function(){="" (target="" ||="" obj)[key].apply(obj,="" arguments)="" in$(x,="" xs){="" l="xs.length">>> 0;
    while (++i < l) if (x === xs[i]) return true;
    return false;
  }
}).call(this);
</=>