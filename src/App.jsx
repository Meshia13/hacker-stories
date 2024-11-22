import * as React from 'react';



const list = [
  {
    title: "React",
    url: 'https://reactjs.org/',
    author: "Jordan Walke",
    num_comment: 3,
    points: 4,
    objectId: 0,
  },
  {
    title: "Chocolate",
    url: 'https://redux.js.org/',
    author: "Willy Wonka, Charlie Boy",
    num_comment: 2,
    points: 5,
    objectId: 1,
  }
]

function App() {

  return (
    <div>

      <h1>
        My Hacker Stories
      </h1>
      
      <Search />

      <hr />

      <List />

    </div>
  );

}

function List() {

  return (

    <div>
      
      <ul>
      
        {list.map(function (item) {
          return ( 

            <li key={item.objectId}>

              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comment}</span>
              <span>{item.points}</span>
              
            </li>
          )
        })}
      </ul>

  </div>

  )
}

function Search() {

  return (
    <>

    <label htmlFor="search">Search: </label>
    <input type="text" id="search" />

    </>
  )
  
}



export default App;
