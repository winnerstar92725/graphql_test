import React, { useState, useEffect } from 'react';
import './App.css';
import fetchGraphQL from './fetchGraphQL';
import Topic from './components/Topic';

function App() {
  const [topics, setTopics] = useState(null);
  useEffect(() => {
    fetchGraphQL().then(response => {
      const data = response.data;
      setTopics(data);
    }).catch(error => {
      console.error(error);
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <Topic data={topics} />
      </header>
    </div>
  );
}

export default App;
