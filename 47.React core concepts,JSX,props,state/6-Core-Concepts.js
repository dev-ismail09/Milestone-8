// 1. JavaScript XML(JSX)
/*

JSX is a syntax extension for JavaScript that lets you write HTML like markup inside a JavaScript file 
(React এর মধ্য HTML লেখার পরিবেশ তেরি করে)

Rules:
-------
> To return multiple elements from a component, wrap them with a single parent tag like <div></div> or <> </>
> "class" attribute becomes "className"
> Properties are written in camelCase -> onclick => onClick, tabindex => tabIndex
> tags must be closed : <h1></h1>, <img>

*/





// 2. Component

/*

> Components are the foundation upon which you build user interfaces(UI)
> In a React app, every piece of UI is a component
> React components are regular JavaScript function except:
  1. Their names always begin with a capital letter
  2.They return JSX markup
> How to build a component?
  1. Define & export the function
  2. Add markup. for example: 
            return(
                <div>
                  <h1> Example of component </h1>
                </div>
            );  

*/





// 3. Props -> HTML tag er attributes এর মত করে সেট করবো
/*

> React components use props to communicate with each other.
> Every parent component can pass some information to its child components by giving them props
> You can pass any JavaScript value through props, including objects, arrays & function

*/



// 4. userState
/*

> userState is a React Hook that lets you add a state variable to your component.
> Syntax:
   const [state, setState] = useState(initialState)
   const [current-state, function to update state] = [Initial value]

useState returns an array with exactly two values:
1. The current state, During the first render, it will match the initialState you have passed
2. The set function that lets you update the state to different value & trigger a re-render



*/


// 5. Event Handlers
/*

> In React, when an event handler updates the state of a component, it triggers a re-render of the component & its children

*/




// 6. useEffect

/*
> The useEffect Hook allows you to perform side effects in your components. One example of side effects are: fetching data
  useEffect(callback, dependencies)

> callback function: This function can perform any side effects, such as fetching data from an API
> dependencies: Dependencies is an optional array of values that the callback function relies on   
*/






