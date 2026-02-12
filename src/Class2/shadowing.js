let person = {
  name: 'Adhyayan',
  age: 18,
  phone: 6369014985,
}

console.log(person);

let arr = [1,2,3,4,5]
console.log(arr);

// Array prototype already has one map mehtond and we added another! what will happen?
// no error! the new method overrides the original function!
Array.prototype.map = function(){
  console.log("this is my map function!")
}

arr.map()

// this issue is called is function/method shadowing!
// that's why we don't disturb the native prototypes!