import React from 'react';
import './App.css';
import Body from './components/Body/Body';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import {Routes, Route} from 'react-router-dom'
import Notfound from './components/Notfound/Notfound';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
	
	return (
    <div className='App'>
      <Header />
      <Nav />

      <div className='wrapp'>
        <Routes>
          <Route path='/' element={<Body state={props.state.postPage} />} />
          <Route path='/body' element={<Body state={props.state.postPage} />} />
          <Route
            path='/dialogs'
            element={
              <Dialogs
                state={props.state.messagesPage}
              />
            }
          />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
      </div>
    </div>
  );};

export default App;
