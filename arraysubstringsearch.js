/*finds items in array that contain a particular substring and pushes them to new array*/

var flavors = ["chocolate","cherry","vanilla","mint","framboise", "creme de menthe","strawberry","grape","orange","limon","yuzu","macha"];


function extractFlavor(list,substring){
	var shortlist=[];
	
	for(var i = 0; i<list.length; i++){
	if(list[i].search(substring) != -1){
		shortlist.push(list[i]);
  }
}
	return shortlist;
}

extractFlavor(flavors,"e"); // returns ["chocolate", "vanilla", "framboise", "strawberry", "grape", "orange", "macha"]
extractFlavor(flavors,"an"); //returns ["vanilla", "orange"]
