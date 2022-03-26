import './App.css';
import Watch from './Components/Watch/Watch';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Question from './Components/Question&ans/Question';

function App() {

  return (
    <div className='m-4'>
      <Header></Header>
      <Watch></Watch>
      <Question></Question>
    </div>
  );
}

export default App;
