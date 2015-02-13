/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/





(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

	function sym_features() {
	
	
		// remove accidental text selection
		$('#Stage').css({
		'-webkit-user-select' : 'none',
		'-moz-user-select' : 'none',
		'-ms-user-select' : 'none',
		'user-select' : 'none'});
		if (sym_ie() == 9) {							// IE9 unselectable attribute
			makeUnselectable($('#Stage')[0]);
			function makeUnselectable(node) {
				if (node.nodeType == 1) node.setAttribute("unselectable", "on");
				var child = node.firstChild;
				while (child) {
					makeUnselectable(child);
					child = child.nextSibling;
				}
			}
		}
	}
	
	function sym_ie() {
		var version = false;
		if (navigator.appVersion.indexOf("MSIE") != -1)
			version = parseFloat(navigator.appVersion.split("MSIE")[1]);
		return version;
	}

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         //sym_features();
         var grid=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
         var score=0;
         
         sym.displayValues = function(){
         	for (var i = 0; i<4; i++){
         		for (var j = 0; j<4; j++){
         			var square = sym.getSymbol('GridSquare'+i+''+j);
         			if (grid[i][j]==3){
         				square.$('text').text('2');
         				square.play('3');
         				grid[i][j]=2;
         			}else if (grid[i][j]==5){
         				square.$('text').text('4');
         				square.play('5');
         				grid[i][j]=4;
         			}else if (grid[i][j]>1){
         				square.$('text').text(grid[i][j]);
         				square.stop(''+grid[i][j]);
         				if(grid[i][j]==2048){
         					sym.getComposition().getStage().getSymbol('gameWon').play();
         					sym.nextTurn= function(){}
         				}
         			}else if (grid[i][j]==0){
         				square.$('text').text("");
         				square.stop('0');
         			}else{
         				square.$('text').text("");
         				square.stop('block');
         			}
         		}
         	}
         	sym.$('score').text("Current Score: "+score);
         }
         
         $(document).keydown(function(event){
         
         	var keyPressed=String.fromCharCode(event.which);
         	if (keyPressed=="&"){sym.up()}
         	if (keyPressed=="%"){sym.left()}
         	if (keyPressed=="("){sym.down()}
         	if (keyPressed=="'"){sym.right()}
         })
         
         sym.spawn= function(){
         	do{
         		var x = Math.floor(Math.random()*4);
         		var y = Math.floor(Math.random()*4);
         	}while(grid[x][y]!=0);
         	if (Math.floor(Math.random()*100)<90){
         		grid[x][y]=3;
         	}else{
         		grid[x][y]=5;
         	}
         }
         
         sym.gameOver=function(){
         	return (!(sym.isRightPossible()||sym.isLeftPossible()||sym.isDownPossible()||sym.isUpPossible()));
         }
         
         sym.nextTurn = function(){
         	sym.spawn();
         	sym.displayValues();
         	if(sym.gameOver()){
         		sym.getComposition().getStage().getSymbol('gameOverBox').play(0);
         	}
         }
         
         sym.right = function(){
         	if (sym.isRightPossible()){
         		sym.moveRight();
         	}
         }
         sym.isRightPossible=function(){
         	var oldGrid= $.extend(true, [], grid);
         	var newGrid= $.extend(true, [], grid);
         	for (var i = 0; i<4; i++){
         		newGrid[i] = sym.combine(newGrid[i]);
         	}
         	return (!sym.arraysEqual(newGrid,oldGrid))
         }
         sym.moveRight=function(){
         	for (var i = 0; i<4; i++){
         		grid[i] = sym.combine(grid[i]);
         	}
         	sym.nextTurn();
         }
         
         
         sym.left = function(){
         	if (sym.isLeftPossible()){
         		sym.moveLeft();
         	}
         }
         sym.isLeftPossible=function(){
         	var oldGrid= $.extend(true, [], grid);
         	var newGrid= $.extend(true, [], grid);
         	for (var i = 0; i<4; i++){
         		newGrid[i] = (sym.combine(newGrid[i].reverse())).reverse();
         	}
         	return (!sym.arraysEqual(newGrid,oldGrid))
         }
         sym.moveLeft=function(){
         	for (var i = 0; i<4; i++){
         		grid[i] = (sym.combine(grid[i].reverse())).reverse();
         	}
         	sym.nextTurn();
         }
         
         
         sym.down = function(){
         	if (sym.isDownPossible()){
         		sym.moveDown();
         	}
         }
         sym.isDownPossible=function(){
         	var oldGrid= $.extend(true, [], grid);
         	var newGrid= $.extend(true, [], grid);
         	for (var i = 0; i<4; i++){
         		output=sym.combine([newGrid[0][i],newGrid[1][i],newGrid[2][i],newGrid[3][i]]);
         		for (var j = 0; j<4; j++){
         			newGrid[j][i]=output[j];
         		}
         	}
         	return (!sym.arraysEqual(newGrid,oldGrid))
         }
         sym.moveDown=function(){
         	for (var i = 0; i<4; i++){
         		output=sym.combine([grid[0][i],grid[1][i],grid[2][i],grid[3][i]]);
         		for (var j = 0; j<4; j++){
         			grid[j][i]=output[j];
         		}
         	}
         	sym.nextTurn();
         }
         
         
         sym.up = function(){
         	if (sym.isUpPossible()){
         		sym.moveUp();
         	}
         }
         sym.isUpPossible=function(){
         	var oldGrid= $.extend(true, [], grid);
         	var newGrid= $.extend(true, [], grid);
         	for (var i = 0; i<4; i++){
         		output=sym.combine([newGrid[3][i],newGrid[2][i],newGrid[1][i],newGrid[0][i]]);
         		for (var j = 0; j<4; j++){
         			newGrid[j][i]=output[3-j];
         		}
         	}
         	return (!sym.arraysEqual(newGrid,oldGrid))
         }
         sym.moveUp=function(){
         	for (var i = 0; i<4; i++){
         		output=sym.combine([grid[3][i],grid[2][i],grid[1][i],grid[0][i]]);
         		for (var j = 0; j<4; j++){
         			grid[j][i]=output[3-j];
         		}
         	}
         	sym.nextTurn();
         }
         
         
         sym.combine = function(input){
         	input = sym.pushLine(input);
         	if(input[2]==input[3]&&input[0]==input[1]){
         		score+=input[3]*2+input[1]*2;
         		input[3]=input[3]*2;
         		input[2]=input[1]*2;
         		input[1]=0;
         		input[0]=0;
         	}else	if(input[2]==input[3]){
         		score=score+input[3]*2;
         		input[3]=input[3]*2;
         		input[2]=input[1];
         		input[1]=input[0];
         		input[0]=0;
         	}else if(input[1]==input[2]){
         		score=score+input[2]*2;
         		input[2]=input[2]*2;
         		input[1]=input[0];
         		input[0]=0;
         	}else if (input[0]==input[1]){
         		score=score+input[1]*2;
         		input[1]=input[1]*2;
         		input[0]=0;
         	}
         	return input;
         }
         
         sym.pushLine = function(input){
         	for (var i = 0; i<3;i++){
         		if (input[3]==0){
         			input.splice(3,1);
         			input.unshift(0);
         		}else{
         			i=4;
         		}
         	}
         	for (var i = 0; i<2;i++){
         		if (input[2]==0){
         			input.splice(2,1);
         			input.unshift(0);
         		}else{
         			i=4;
         		}
         	}
         	if (input[1]==0){
         		input.splice(1,1);
         		input.unshift(0);
         	}	
         	return input;
         }
         
         sym.arraysEqual = function(a, b) {
         	for (var i = 0; i < a.length; i++) {
         		for (var j = 0; j<a[0].length;j++){
         			if (a[i][j] != b[i][j]) return false;
         		}
         	}
         	return true;
         }
         
         sym.block = function(){
         	do{
         		var x = Math.floor(Math.random()*4);
         		var y = Math.floor(Math.random()*4);
         	}while(grid[x][y]!=0);
         	grid[x][y]=1;
         }
         
         sym.cheat = function(){
         	do{
         		var x = Math.floor(Math.random()*4);
         		var y = Math.floor(Math.random()*4);
         	}while(grid[x][y]!=0);
         	grid[x][y]=1024;
         }

      });
      //Edge binding end

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_standardButton}", "click", function(sym, e) {
         sym.spawn();
         sym.spawn();
         sym.displayValues();
         sym.play('game');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_blockedButton}", "click", function(sym, e) {
         sym.block();
         sym.spawn();
         sym.spawn();
         sym.displayValues();
         sym.play('game');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_easyButton}", "click", function(sym, e) {
         sym.cheat();
         sym.spawn();
         sym.spawn();
         sym.displayValues();
         sym.play('game');

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'GridSquare'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2639, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("GridSquare");
   //Edge symbol end:'GridSquare'

   //=========================================================
   
   //Edge symbol: 'gameOver'
   (function(symbolName) {   
   
   })("gameOver");
   //Edge symbol end:'gameOver'

   //=========================================================
   
   //Edge symbol: 'gameOver_1'
   (function(symbolName) {   
   
      })("gameWon");
   //Edge symbol end:'gameWon'

})(jQuery, AdobeEdge, "EDGE-2361854");