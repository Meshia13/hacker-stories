import * as React from 'react';


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

  // [stateful variable, setter function]
  const [searchTerm, setSearchTerm] = React.useState("");

  //  A callback handler gets  introduced as event handler (A)
  const handleSearch =(event)=> {
    // and calls back to the place it was introduced (D)
    // pass the state  updater function (setter function) to the Search component as callback handler 
    setSearchTerm(event.target.value)

  }

  const searchedStories = stories.filter(function (story) {
    return story.title.toLowerCase().includes(searchTerm.toLowerCase());
    
  });
  

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
      <List list ={searchedStories}/>
      

    </div>
  );

}

{/* creating List component
   retrieve the list from the List component’s function */}
const List = ({list}) => {

  return (

    <div>
      
      <ul>
      
   
        {list.map( (item) =>{

          return (

            <Item key={item.objectId} item={item} />
          )
        })}

      </ul>

  </div>

  )
}

// extract an Item component from the List component and pass each item in the map() method’s callback function to this new component. 
const Item = ({item}) => {

  return ( 

    <li >

      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comment}</span>
      <span>{item.points}</span>
      
    </li>
  )

}

{/* creating Search component */}
const Search = ({search, onSearch}) => {

  
  return (
    <>

    <form >
      <label htmlFor="search">Search: </label>
      {/* pass the state  updater function to the Search component as callback handler and use it to update the state when
          a user types into the input field.  */}
      <input type="text" 
      id="search" 
      value={search}
      onChange={onSearch}/>
      <input type='reset'/>
    
    </form>
    

    </>
  )
  
}
export default App;
