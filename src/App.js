import {Route, Routes} from 'react-router-dom';
import AllMeetup from './pages/AllMeetups';
import NewMeetup from './pages/NewMeetup';
import Favourites from './pages/Favourites';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element ={<AllMeetup/>}/>
        <Route path='/new-meetup' element={<NewMeetup/>}/>
        <Route path='/favourites' element={ <Favourites/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
