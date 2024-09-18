/**
 * 
 * <div id="parent">
 *    <div id="child">
 *      <h1></h1>
 *      <h2></h2>
 *      </div>
 * </div>
 * 
 * 
 * reactelement(object) ==> HTML (BROWSER UNDDERSTANDS)
 * 
 * 
 * 
 */
const parent = React.createElement(  //parent
    "div",
    { id: "parent" }, 
    React.createElement("div",{ id: "child"}, [  //arrays of children
       React.createElement("h1", {}, " IM THE H1 TAG"),
       React.createElement("h2", {}, " IM THE H2 TAG"),
       
    ])
   );
   
   /*const heading = React.createElement(  //react.createelement is an object
       "h1",
        { id: "heading", xyz: "abc" } ,  //here this is an attribute goes as an attribute inside these tags
         "Hello world from React"
   );
   
   
   
   console.log(heading)// object
   
   const root = ReactDOM.createRoot(document.getElementById("root"));
   
   root.render(heading);  //the work of render is to create the object  create the h1 tag which is inside the browser understands and put that inside the root that root element that you put in over above line  and also render is responsible for linking the dom
   */
   console.log(parent);   // object
   
   const root = ReactDOM.createRoot(document.getElementById("root"));
   
   root.render(parent);
   
   
   