let tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = tutorials.map(element => { 
  let str = element.split(",");
  const NewFunction=str.map(element => {
    let string = element.split(" ");
    let arr ;
    let array= []
  for (let i = 0 ; i < string.length ; i++)
   {
    string[i]= string[i][0].toUpperCase()+string[i].substring(1);
    }
    arr = (string.join(" "));
 console.log(arr)
return str;
  } )
  return tutorials
})

titleCased;