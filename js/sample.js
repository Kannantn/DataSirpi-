//1 Declare a Integer Array
var arr1 = [50,60,65,90];
document.getElementById("declare").innerHTML = arr1;

//2 Print Sum of all elements in Array
	var arr2 = [4, 8, 7, 13, 12]
	var sum = 0;
	for (let i = 0; i < arr2.length; i++) {
		sum += arr2[i];
	}
  document.getElementById("total").innerHTML = sum;

//3 Declare a Linked List with 5 to 10 data

class Node{
    constructor()
    {
        this.data=0;
        this.next=null;
    }
}

function printList(n)
{
  let list ="";
  
    while(n !=null)
    {
      list+=(n.data + "")
        n = n.next;
    }
    document.getElementById("List").innerHTML = list;
}       

let head = null;
let second = null;
let third = null;
let fourth = null;
let fifth = null;

head = new Node();
second = new Node();
third = new Node();
fourth = new Node();
fifth = new Node();

head.data = 1;
head.next = second;

second.data = 2;
second.next = third;

third.data = 3;
third.next = fourth;

fourth.data = 4;
fourth.next = fifth;

fifth.data = 5;
fifth.next = null;
printList(head)

//4 Reverse the list with Stack
function Stack() {
    this.arr0 = [];
    this.top = 0;
  }
  
  Stack.prototype.push = function (val) {
    this.arr0[this.top] = val;
    this.top = this.top + 1;
  }
  
  Stack.prototype.pop = function () {
    if (this.is_empty()) {
      throw new Error("Underflow, stack is empty");
    }
  
    var topEl = this.arr0[this.top - 1];
  
    this.top = this.top - 1;
    this.arr0.pop();
  
    return topEl;
  }
  
  Stack.prototype.is_empty = function () {
    return this.top === 0;
  }
  
  Stack.prototype.reverse = function () {
    if (this.is_empty()) {
      throw new Error("Underflow, stack is empty");
    }
  
    var revStr = '';
  
    for (var i = this.top - 1; i >= 0; i--) {
      revStr += this.arr0[i];
    }
  
    return revStr;
  }
  
  
  var stack = new Stack();
  
  stack.push('a');
  stack.push('b');
  stack.push('c');
  
  //console.log("Reverse str : "+stack.reverse()); // cba
  document.getElementById("reverse").innerHTML = stack.reverse();

//5 Pass the even index elements into Queue

let array2 = [4,5,7,8,14,45,76];
function even(array2) {
    let ar = [];
    for(var i=0;i<array2.length;i++)
        if(array2[i]%2===0){
            ar.push(array2[i]);
            i++;
        }
        return ar;
}

document.getElementById("eve").innerHTML = even(array2);
//6 Create a Map and Pass the odd index elements in Map

        function odd(array1) {
            const result = array1.filter((value, i) => {
              if (i % 2 != 0) {
                if (value % 2 != 0) {
                  return value;
                }
              }
            })
            return result;
          }
          
          document.getElementById("odd").innerHTML = odd([1, 3, 5, 7, 9, 11]);


//7 Print Map, stack, queue, Linked List

//print stack
var stack = [];
stack.push(2);       
stack.push(5);       
var i = stack.pop();    
document.getElementById("stack") .innerHTML = i;        

//print queue
var queue = [];
queue.push(2);         
queue.push(5);         
var i = queue.shift(); 
document.getElementById("queue") .innerHTML = i;        

//print Map

  let map = new Map()
let num = "";
map.set("one", "first element, ");
map.set("two", "second element, ");
map.set(3, "third element, ");

for (let [key, value] of map) {
  num+=(key + " = " + value);
  }
  document.getElementById("Map") .innerHTML = num;
  
/*let items = new Map();
items.set('s', 'kan');
items.set('k', 'ste');
items.set('g', 'vel');
console.log(items);
document.getElementById("Map") .innerHTML = items;    */    


//8 Check the expression is valid or not using Stack

function isBalanced(str) {
  let ex = "";
  const stack = []
  
  for (let char of str) {
    if ( char === '(' ) {
      stack.push(char)
    } else if ( stack.pop() !== '(' ) {
      return false
    } 
  }
  
  return stack.length !== 0 ? false : true
}

// balanced
console.log("Balanced : " + this.isBalanced('') )
console.log("Balanced : " + this.isBalanced('()') )
document.getElementById("exp") .innerHTML = isBalanced('');        
document.getElementById("exp") .innerHTML = isBalanced('()');        


// not balanced

document.getElementById("exp") .innerHTML = isBalanced(' ');        
document.getElementById("exp") .innerHTML = isBalanced('(');        
document.getElementById("exp") .innerHTML = isBalanced(')');        


