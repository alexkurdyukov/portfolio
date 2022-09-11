import './assets/scss/index.scss'
import Header from './components/Header';
import Intro from './components/Intro';

const App = () => {
	return (
    <div className='layout'>
      <Header/>
      <Intro/>
    </div>
  )
};

export default App;
