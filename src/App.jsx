import * as React from 'react';

function getTitle(title) {
  return title;
}

const list = [
  {
    title: "React",
    author: "Jordan Walke",
    num_comment: 3,
    points: 4,
    objectId: 0,
  },
  {
    title: "Chocolate",
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
        Hello {getTitle("React")}
      </h1>
      
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" />
    </div>
  );

}

export default App;