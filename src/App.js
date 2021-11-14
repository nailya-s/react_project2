import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import  Search from './components/Search';
import Profiles from './components/Profiles/Profiles';
import Profile from './components/Profiles/Profile';


function App() {
  
  return (
    <>
    <Container className='containerStyle' fluid>
    <Search/>
    <Routes>
    <Route exact path='/' component={<Profiles/>}/>
    <Route exact path="/:profileId" component={<Profile/>}/>
    </Routes>
    </Container>
    </>
  );
}

export default App;
