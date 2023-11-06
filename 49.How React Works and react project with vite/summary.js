// 1. JSX (JavaScript XML)
/*

> JSX is a syntax extension for React JS
> Easier to read & write
> Gets transpiled to JavaScript with Babel
> JavaScript এর মধ্য HTML লিখা যাই

-> Rules of JSX
----------------
> This explains why you also cannot return two JSX tags without wrapping them into another tag <div></div> or Fragment <></>
> "class" becomes "className"
> onclick -> onClick, tabindex -> tabIndex

-> Whay can't browsers read JSX?
---------------------------------
> Browsers can only read JavaScript Objects
> JSX is not a regular JavaScript Object
> To enable a browser to read JSX , we need to transform JSX file into a JavaScript object using JSX transpiler like Babel and then pass it to the browser

*/


// 2. What are props?
/*

> We use props in React to pass data from one component to another (from a parent component to a child components)
> props এর মধ্য কে কোন value পাঠাতে পারি (number, string, boolean, array, function, components, any kind of value)
> Prop Drilling -> আগের project টা prop drilling এর উদাহরণ

*/



// 3. What is State?
/*

> The state is a built-in React that is used to contain data or information about the component
> A component's state can change over time; whenever it changes, the component re-renders
> The change in state can happen as a response to user action or system-generated events

*/


// 4. Hooks
/*

> Hooks allow function components to have access to state & other React features
> Hooks allow us "hook" into React features such as state & lifecycle methods

// 5. useState

> The useState Hook allows us to track state in a function componet.
> To use the useState hook, you need to know a few things
    1. You must import it from the React library
    2. You must invoke it inside a React component

> const [state, setState] = useState(initialValue);
  1. initialValue তে যে মান দিবো সেইটা এসে state এ সেট হবে
  2. তারপরে state এর মান পরিবর্তন বা কোন value লুপ করে নিয়ে আসতে চাইলে setState ব্যবহার করবো setState(newValue) 
  3. তারপরে সেই newValue টা state এ বসে যাবে 


// 6. useEffect Hook

> The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers.

> To use the useEffect hook, we need to know a few things
  1. We import useEffect from "react"
  2. We call it above the returned JSX in our component
  3. We usually pass two arguments: a function and an array

  userEffect( () => {
    effect function
  } ,[dependency list] )

*/



// InterView Questions:

/*

1. What is React?
------------------

React হলো একটি জাভাস্ক্রিপ্ট লাইব্রেরি যা উপযুক্ত এবং ইন্টারেক্টিভ ওয়েব পেজ তৈরি করার জন্য ব্যবহার হয়। এটি ওয়েব অ্যাপ্লিকেশন ডেভেলপমেন্টে ব্যবহৃত একটি বিশেষ টুল হিসেবে পরিচিত। React-এ কম্পোনেন্ট-ভিত্তিক ভাবে ওয়েব পেজ তৈরি করা হয়, যা আরেকটি পুনরাবৃত্তি এবং স্ক্যালেবল উপায়ে ওয়েব উপযোগী করে।

React-এ কম্পোনেন্ট হলো স্বাধীন এবং পুনরাবৃত্তিমূলক স্তরের পার্ট যা নির্দিষ্ট কাজ সম্পাদন করে। এটি কোনো একটি স্পেসিফিক পার্ট এর দায়িত্ব নেয়।

React ব্যবহার করে ডেভেলপাররা ইউজার ইন্টারফেস তৈরি করতে পারে এবং অ্যাপ্লিকেশনগুলি স্বচ্ছতার সাথে মেনে চলার জন্য ডাইনামিক ওয়েভে ডেভেলপ করতে পারে। এটি ওয়েব ডেভেলপমেন্টে বিশেষভাবে জনপ্রিয় এবং ব্যবহৃত।

React হলো একটি ওপেন সোর্স লাইব্রেরি এবং এটি ফেসবুক দ্বারা তৈরি করা হয়েছিল। এটি একটি প্রফেশনাল ওয়েব ডেভেলপমেন্টের জন্য উপযুক্ত এবং অনেক ডেভেলপাররা এটি ব্যবহার করে প্রযুক্তিগত অগ্রগতি করেন।


2. What is the different between React Virtual DOM vs Real DOM? 
--------------------------------------------------------------------

রিয়েল DOM (Real DOM):
---------------------
রিয়েল DOM হলো ওয়েব পেজের আসল/অর্জিত স্ট্রাকচার। যখন কোনো ওয়েব অ্যাপ্লিকেশনে কোনো পরিবর্তন ঘটে, তখন রিয়েল DOM এই পরিবর্তন প্রতিবিম্বন করে। এটি ওয়েব পেজের পুনর্নির্মাণ করার জন্য ডাটা এবং ডিজাইনের প্রতি পরিবর্তনের সাথে সাথে ব্রাউজার এবং মেমোরি সংক্রান্ত অতিরিক্ত সময় চাইতে পারে।

ভার্চুয়াল DOM (Virtual DOM):
-------------------------
ভার্চুয়াল DOM হলো একটি মিথ্যা/বাহ্যিক অনুকরণ যা React ফ্রেমওয়ার্কে ব্যবহার হয়। এটি রিয়েল DOM এর একটি অনুকরণ বা অনুমোদন করে এবং এটিতে পরিবর্তন হয়। পরিবর্তন ঘটলে, React ভার্চুয়াল DOM এ পরিবর্তন করে এবং এটি রিয়েল DOM এ প্রতিষ্ঠা করার জন্য কেবল প্রয়োজনীয় পরিবর্তনগুলি করে। এটি রিয়েল DOM এ প্রতিষ্ঠা করার জন্য সময় ও প্রদান করতে না হয়, যা অতিরিক্ত স্পীড ও কার্যকর করে।

এই দুটি প্রসেসের মধ্যে পার্থক্যটি হলো, রিয়েল DOM সত্যিকারে ওয়েব পেজের বিন্যাস এবং পরিবর্তন করে, কিন্তু ভার্চুয়াল DOM এ পরিবর্তন সহজ করে এবং শুধু প্রয়োজনীয় পরিবর্তনগুলি কে রিয়েল DOM এ প্রতিষ্ঠা করে। এটি রিয়েল টাইমে কিছু সুস্থ পরিবর্তন ও স্বচ্ছতা প্রদান করে যা ওয়েব অ্যাপ্লিকেশনের কার্যকরীতা বাড়াতে সাহায্য করে।


3. What is JSX?
----------------

JSX হলো একটি জাভাস্ক্রিপ্ট এক্সটেনশন যা React ফ্রেমওয়ার্কে ব্যবহার হয় এবং ওয়েব অ্যাপ্লিকেশন ডেভেলপমেন্টে ব্যবহৃত হয়। JSX এর মূল উদ্দেশ্য হলো জাভাস্ক্রিপ্ট কোড লিখা সহজ করা এবং ওয়েব পেজে ডাইনামিক ইন্টারফেস তৈরি করার সুবিধা প্রদান করা।

JSX কোডে আপনি জাভাস্ক্রিপ্টের মধ্যে HTML বা মার্কআপ শৈলীর কোড লিখতে পারেন। এটি একটি ব্রাউজারে ডাইনামিক ইন্টারফেস তৈরি করার জন্য একটি স্বচ্ছতা এবং সহজ পথ প্রদান করে। JSX ব্যবহার করে, আপনি React এর কম্পোনেন্ট তৈরি করতে এবং এই কম্পোনেন্টে ডাটা দেখাতে পারেন।

এটি এমন একটি উপায় যা আপনাকে সাধারণ জাভাস্ক্রিপ্ট কোডের সাথে মার্কআপ লিখতে সাহায্য করে, যা ওয়েব পেজে দেখানোর জন্য সুন্দর ও সাফ হতে সাহায্য করে। JSX কোড লেখার সময়, আপনি জাভাস্ক্রিপ্ট ফাংশন বা কম্পোনেন্টে HTML ট্যাগ বা অন্যান্য ইলিমেন্ট ব্যবহার করতে পারেন, যা সাধারণ জাভাস্ক্রিপ্ট নয় কিন্তু ওয়েব পেজের মার্কআপ সাথে মিলে যায়।

সারংশঃ JSX হলো একটি সিনট্যাক্স এবং টুল যা React ফ্রেমওয়ার্কের সাথে জুড়ে ওয়েব অ্যাপ্লিকেশন ডেভেলপমেন্ট সহজ এবং সুন্দর করে।



4. What is the difference between state and props?
---------------------------------------------------

React এর State এবং Props দুটি গুরুত্বপূর্ণ কনসেপ্ট, যা কম্পোনেন্ট মধ্যে ডাটা পাস করতে এবং ম্যানেজ করতে ব্যবহৃত হয়।

State (অবস্থা):
--------------

State হলো কোনো রিয়েক্ট কম্পোনেন্টের অবস্থাবিষয়ক ডাটা সংরক্ষণ করার জন্য ব্যবহৃত।
State কোম্পোনেন্টের আপডেট হওয়ার সময় পুনরাবৃত্তি হতে পারে এবং তা কোম্পোনেন্টের স্থায়ী তিনটি স্থিতির মধ্যে পরিস্থাপন করে।
State এর পরিবর্তন করার জন্য setState মেথড ব্যবহার করতে হয়, যা কম্পোনেন্টের স্থিতি পরিবর্তন করে এবং কম্পোনেন্ট পুনরাবৃত্তি করে।

Props (প্রোপস):
--------------

Props হলো কোম্পোনেন্টে থেকে থেকে ডাটা পাস করার উপায়।
Props কোম্পোনেন্টের একটি প্রপার্টি হিসেবে আসে এবং সাধারণভাবে প্যারেন্ট কম্পোনেন্ট থেকে চাইল্ড কম্পোনেন্টে ডাটা পাঠানোর উদ্দেশ্যে ব্যবহৃত হয়।
Props কোম্পোনেন্টে প্রিমিটিভ বা অব্জেক্ট ধরণের ডাটা পাস করতে পারে এবং তা রেড-ওয়াইট হতে সাহায্য করে, কারণ এটি ইমিউটেবল (Immutable)।
সারংশঃ State কোম্পোনেন্টের আপডেট সম্পর্কিত ডাটা সংরক্ষণ করে এবং পুনরাবৃত্তি তৈরি করতে ব্যবহৃত হয়, যখন Props ডাটা কোম্পোনেন্টে থেকে থেকে পাস করে, সাধারণভাবে প্যারেন্ট কম্পোনেন্ট থেকে চাইল্ড কম্পোনেন্টে ডাটা পাঠাতে ব্যবহৃত হয়। State এবং Props একই কম্পোনেন্টে ডাটা পাস করার জন্য ব্যবহৃত হতে পারে



*/










