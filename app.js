const heading = React.createElement(
    "h1", {
        id:"headline"}, 
        "hello world from React");
// const heading = React.createElement("h1", {}, "hello world from React");

// {} the empty {} is used for giving the attributes

// this heading is the object
// or can say react element => which is a normal js
console.log(heading);
    



//this root.render job is take the object create the h1 obj whichthe browser understand& put inside the root element

/** 
 * <div id-"parent">
 * <div id="child">
 * <h1> i am a h1 tag</h1>
 * </div>
 * </div>
 * 
 * ReactElement(object)=> HTML(browser understand)
 */

const parent = React.createElement("div",{id:"paarent"}, React.createElement("div", {id:"child"}, 
React.createElement("h1", {}, "i am h1 tag")
));

// imorder to have two sibblings
/** 
* <div id-"parent">
* <div id="child">
* <h1> i am a h1 tag</h1>
* <h2> i am a h1 tag</h2>    =>to make this  type of sibblings youo can pass this in the form of array 
* </div>
* </div>

*/

const parent2 = React.createElement("div",{id:"paarent1"}, 
React.createElement("div", {id:"child1"}, [
    React.createElement("h1", {}, "i am h1 tag"),
    React.createElement("h2", {}, "i am h2 tag") ]
));

//this looks ugly so we use jsx 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent2);
























































