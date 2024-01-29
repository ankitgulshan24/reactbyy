import React from "react";
import ReactDOM from "react-dom/client";

//React Elemenet

// React.createElement => Reactelement => which is a object => html element on render in the dom

const heading= React.createElement("h1", {id:"heading"}, "this is ankit from react🚀");

// this jsxheading is a react eelement 
const jsxheading= <h1 id="heading"> welcome to jsx part of react 🚀</h1>;


// this jsxheading is a react eelement 
const jsxheading2= (<h1 id="heading">
 welcome to jsx part of react 🚀
 </h1>);

 

// => for multiple line we add ()

// how to put react element in a react element 

// const elem = <span>react element </span>

// const jsxheading5= (<h1 id="heading">
//  welcome to jsx part of react 🚀
//  {elem} =? suppose this jsxheading 5 is a react componnet and this elem is a giving a data from the api directly , then this ifn there is functional component this means there is jsx and jsx will santizie all the data 
//  </h1>);

// now how to convert this react element into functional componenet

const Jsxheading3=()=> (<h1 id="heading">
 welcome to jsx part of react 🚀
 </h1>);

 // => just added arrow function and you  get the react component 
 //=> important to remember is use capital for react component 


// console.log(jsxheading);

//jsx is not html inside js but it  is html/ xml  like syntax

// JSX => babel transpiles it => React.createlement => react element js object => html element on render

// react componenet => 2 types
// class componenent  => old
// functional componenet => new


// => React functional component 
const number = 1000; 
const title1= ()=>{"thsi is ankit here starting here finally with react"}
//=> by applying {} you can write any piece of javascript file
//component composition => component inside component 
const HeadingComponent= ()=>{
    return <h1> hii i am functional component
     <h2>{number}</h2> 
     {jsxheading2}
     {title1()}


    <Jsxheading3/>
     </h1>
}
//=> here {jsxheading2} is written inside react component but inside it is react element so {} we can write it 

// can we use normal function declaration => answer is yes 
// const HeadingComponent1= function (){       => here funtion is defined normally
//     return <h1> hii i am functional component
//     <Jsxheading3/>
//      </h1>
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);
// how  to render this functional componet 
//=> just  do root.render(<HeadingCompon/>)
root.render(<HeadingComponent/>);















































