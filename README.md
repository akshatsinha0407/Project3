//npm i react-router-dom axios react-player react-infinte-scroll-component @reduxjs/toolkit react-redux

//npm i bta , routes samjaha , custom titile in index , 

//sidenav bna (Heading, NAv1 horizontal line , NAv2) Link tag use kia hai..?
The Link tag from react-router-dom to enable client-side navigation between different routes in your React application. Unlike a regular <a> tag, Link prevents full page reloads and keeps your app fast and responsive by updating the URL and rendering the corresponding component without refreshing the browser.

//top nav - ek search bar hai , or ek drop down hai jo ki kuch likne per aata hai , cross se saraa data clear hota hai ek customise scroller dia hua hai , if no image then custom image hai  how..?
*query: Stores the current search input.
searches: Stores the array of search results.
*GetSerches:- FunctionAsync function that calls the /search/multi API with the current query.Updates searches with the results.
useEffect:-Runs GetSerches every time query changes (i.e., on every keystroke).
*Return JSX:-Container <div>: Styles the top navigation bar.
Search Icon: Decorative icon.  Input Field:Updates query on change Displays current query.
Close Icon:Only shows if query.length > 0. Clicking it clears the search input.
Suggestions Dropdown:
Always visible (currently). Maps over searches and displays each result as a clickable Link. Shows an image (from API or fallback) and the title/name.

//headers:- kn poster hai ,paragraph hai ,realse date etc hai, or watch now button hai.Get random wallpaper ka code App.jsx me hai, vaha se data props k through aata hai..

// trending and Dropdown button
-> trending k lie we have created horizontal cards..
-> horizontal card me photo laga di , title laga dia , paragrah jod di, jada bada tha to limit dedi , ".slice" se.. , data is again comming from props
->dropdown bna dia hai :- we have( title, options , func )
title = tile bta rha hai orrr ye select se wrapped hai
titles se jo options aa rahe hai un per map laga dia
or data props se aa rha hai jiska na func hai
















 