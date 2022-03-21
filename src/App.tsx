import React from 'react';
import EmojiTab from "./components/EmojiTab";
import  "./index.scss";

function App() {
  return (
    <div className="app">
      <div className={'tabs'}>
        <EmojiTab/>
        <EmojiTab/>
        <EmojiTab/>
        <EmojiTab/>
        <EmojiTab/>
        <EmojiTab/>
        <EmojiTab/>
      </div>
      <div className={'search'}>
        <input/>
      </div>
      <div className={'emoji'}>
        emoji
      </div>
    </div>
  );
}

export default App;
