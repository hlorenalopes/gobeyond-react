import './App.css';
import Profile from './Components/Profile/Profile';
import Contact from './Components/Contact/Contact';
import Tabs from './Components/Tabs/Tabs';

function App() {
  return (
    <main className='main'>
      <Profile />
      <Contact />
      <Tabs />
      {/* <Cards /> */}
    </main>
  );
}

export default App;
