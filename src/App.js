
// import './App.css';
// import Pagination from './components/Pagination';
// import React from 'react';

// function App() {
//   return (
//     <div className="App">
//       <h1>Product List</h1>
//     <Pagination/>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import { COUNTRIES } from './components/countries';
import { WithContext as ReactTags } from 'react-tag-input';
import './styles.css';

const suggestions = COUNTRIES.map((country) => {
  return {
    id: country,
    text: country,
  };
});

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const App = () => {
  const [tags, setTags] = useState([
    { id: 'Thailand', text: 'Thailand' },
    { id: 'India', text: 'India' },
  ]);
  // const handleDelete = (i) => {
  //   // Prevent deletion of tags
  //   setTags(tags.filter((tag, index) => index !== i));
  // };
 
  const handleDelete = () => {
    if (tags.length > 0) {
      const randomIndex = Math.floor(Math.random() * tags.length);
      setTags((prevTags) => prevTags.filter((tag, index) => index !== randomIndex));
    }
  };
  

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = [...tags];
    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);
    setTags(newTags);
  };

  const handleTagClick = (index) => {
    console.log('The tag at index ' + index + ' was clicked');
  };

  return (
    <div className="app">
      <h1> React Tags Example </h1>
      <div>
        <ReactTags
          tags={tags}
          suggestions={suggestions}
          delimiters={delimiters}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          handleDrag={handleDrag}
          handleTagClick={handleTagClick}
          inputFieldPosition="bottom"
          autocomplete
          editable={false} // Set editable to false to disable tag removal
        />
      </div>
    </div>
  );
};

export default App;
