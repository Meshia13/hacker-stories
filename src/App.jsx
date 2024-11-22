import * as React from 'react';

// const list = [
//   {
//     title: "React",
//     url: 'https://reactjs.org/',
//     author: "Jordan Walke",
//     num_comment: 3,
//     points: 4,
//     objectId: 0,
//   },
//   {
//     title: "Chocolate",
//     url: 'https://redux.js.org/',
//     author: "Willy Wonka, Charlie Boy",
//     num_comment: 2,
//     points: 5,
//     objectId: 1,
//   }
// ]


{/* creating App component */}
// arrow function expression
const App = () => {

  const stories = [
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

  //  A callback handler gets  introduced as event handler (A)
  const handleSearch =(event)=> {
    // and calls back to the place it was introduced (D)
    console.log(event.target.value)

  }

  return (
    <div>

      <h1>
        My Hacker Stories
      </h1>

      {/* handler is passed as function in props to another component (B) */}
      <Search onSearch={handleSearch} />

      <hr />
      {/* creating an instance of List component 
        passing stories in the List component */}
      <List list ={stories}/>
      

    </div>
  );

}

{/* creating List component
   retrieve the list from the List component’s function */}
const List = (props) => {

  return (

    <div>
      
      <ul>
      
      {/* arrow function expression refractoring would look like "list.map((item) {...})"
       retrieve the list from the List component’s function */}
        {props.list.map(function (item) {

          return (

            <Item key={item.objectId} item={item} />
          )
        })}
      </ul>

  </div>

  )
}

// extract an Item component from the List component and pass each item in the map() method’s callback function to this new component. 
const Item = (props) => {

  return ( 

    <li >

      <span>
        <a href={props.item.url}>{props.item.title}</a>
      </span>
      <span>{props.item.author}</span>
      <span>{props.item.num_comment}</span>
      <span>{props.item.points}</span>
      
    </li>
  )

}

{/* creating Search component */}
const Search = (props) => {

  const [searchTerm, setSearchTerm] = React.useState("");

  // Event Handler
  const handleChange = (event) => {
    // Re-renders the component as the state changes
    setSearchTerm(event.target.value);

     // is executed there as callback handler (C)
    props.onSearch(event);
  }
  
  
    return (
      <>

    <form >
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" onChange={handleChange}/>
      {/* clears the input field */}
      <input type='reset'/>
    </form>

    <p>
      {searchTerm}
    </p>

    </>
  )
  
}



export default App;
