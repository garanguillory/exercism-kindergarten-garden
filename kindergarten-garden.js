// constructor function
// grass, clover, radishes, violets

var Garden = function(garden){
	var array = garden.split('\n');
	var row1 = array[0].split('');
	var row2 = array[1].split('');

	function plants(row){
		for(var i=0; i<row.length; i++){
				if(row[i] == 'R'){
					row[i] = 'radishes';
				} else if (row[i] == 'G'){
					row[i] = 'grass';
				} else if (row[i] == 'C'){
					row[i] = 'clover';
				} else {
					row[i] = 'violets';
				}
		}
	}

	plants(row1);
	plants(row2);

	this.alice = 
		row1.filter(function(element, index){return index <= 1 }).concat(row2.filter(function(element, index){return index <= 1 }));

	this.bob = 
		row1.filter(function(element, index){return index > 1 && index <= 3 }).concat(row2.filter(function(element, index){return index > 1 && index <= 3 }));

	this.charlie = 
		row1.filter(function(element, index){return index > 3 && index <= 5 }).concat(row2.filter(function(element, index){return index > 3 && index <= 5 }));

};


module.exports = Garden;

// function plants(row){
// 	for(var i=0; i<row.length; i++){
// 			if(row[i] == 'R'){
// 				row[i] = 'radishes';
// 			} else if (row[i] == 'G'){
// 				row[i] = 'grass';
// 			} else if (row[i] == 'C'){
// 				row[i] = 'clover';
// 			} else {
// 				row[i] = 'violets';
// 			}
// 	}
// }







