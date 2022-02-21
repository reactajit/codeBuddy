// level {2}
 const removeEven=(num)=>num.filter((n)=>n%2 !==0);


 const odd = removeEven([1,2,3,4,5]);
  console.log(odd)


//   replace vowel

var strings = ["bongo drums", "guitar", "flute", "double bass",
               "xylophone","piano"];
string = strings.map(x=>x.replace( /[aeiou]/g, toUpperCase(strings) ));
console.log(string);



// max num in an array

const maxFunc=(num)=>{
const res =num.reduce((a,b)=> Math.max(a,b))
return res;
}
console.log(maxFunc([1,2,3,4]))

 