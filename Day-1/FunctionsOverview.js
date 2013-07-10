var products = [
   {id : 121, name:"pen", cost:11,units:110},
   {id : 111, name:"ken", cost:18,units:120},
   {id : 171, name:"ten", cost:20,units:80},
   {id : 141, name:"den", cost:60,units:10},
   {id : 131, name:"hen", cost:7,units:70},
   {id : 161, name:"len", cost:19,units:60}
]

function groupBy(items, fieldName){
  var result = [];
  function getKeyedItem(key){
    for(var index in result){
      var keyedItem = result[index];
      if (keyedItem.key == key){
         return keyedItem.value;
      }
    }
    var keyedItem = { key : key , value :[] };
    result.push(keyedItem);
    return keyedItem.value;
  }
  for(var index in items){
    var item = items[index], groupKey = item[fieldName];
    var resultCollection = getKeyedItem(groupKey);
    resultCollection.push(item);
  }
  return result;
}

function groupBy2(items, fieldName){
  var result = {};
  for(var index in items){
    var item = items[index], groupKey = item[fieldName];
    if (!result[groupKey]) result[groupKey] = [];
    result[groupKey].push(item);
  }
  return result;
}

function sum(items,fieldSelector){
 	var result=0;
 	for(var index in items){
 		var item = items[index];
 		var value = fieldSelector(item);
 		result += value;
 	}
 	return result;
 }
function sum2(items,fieldName){
  var result=0;
 	for(var index in items){
 		var item = items[index];
 		var value = item[fieldName];
 		result += value;
 	}
 	return result;
 }
function Sort(items,comparator){
  for(var i=0;i<items.length-1;i++){
   for(var j=i+1;j<items.length;j++){
     var left = items[i], right = items[j];
     if (comparator(left,right)){
       var temp = left; 
       items[i] = items[j];
       items[j] = temp;
     }
    }
   }
 }

function filter(items,criteria){
  var result = [];
  for(var index in items){
   var item = items[index];
   if (criteria(item)) result.push(item);
  }
  return result;
}



var categories = [
 { id : 1, name : "stationary"},
 { id : 2, name : "confectionary"},
 { id : 9, name : "electronics"}
]

function join(innerList,outerList,innerKeyName,outerKeyName,resultFactory){
  var result  = [];
  for(var innerIndex in innerList){
   var innerItem = innerList[innerIndex];
   var innerKey = innerItem[innerKeyName];
   for(var outerIndex in outerList){
     var outerItem = outerList[outerIndex];
     var outerKey = outerItem[outerKeyName];   
     if (innerKey == outerKey)
       result.push(resultFactory(innerItem,outerItem));  
   }
  }
  return result;
}

var joinedProduct = join(products,categories,"category","id"
    ,function(p,c){ return { id : p.id, name : p.name, categoryName : c.name};})
