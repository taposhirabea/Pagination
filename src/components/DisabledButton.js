import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";
// import "./styles.css";
import { COUNTRIES } from './countries';
import { WithContext as ReactTags } from 'react-tag-input';
import '../styles.css';

export default function DisabledButton() {
  const [selected, setSelected] = useState(["papaya"]);

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

  return (
    <div>
      <h1>Add Fruits</h1>

      <pre>{JSON.stringify(selected)}</pre>

      <TagsInput
        value={selected}
        onChange={setSelected}
        name="fruits"
        placeHolder="enter fruits"
      />
      <em>press enter to add new tag</em>
     
    </div>
  );
}
