import './App.css';
import Stars from './Stars';

function App() {
  return (
    <>
      <div className="card"><Stars/></div>
      <div className="card"><Stars count={1}/></div>
      <div className="card"><Stars count={2}/></div>
      <div className="card"><Stars count={3}/></div>
      <div className="card"><Stars count={4}/></div>
      <div className="card"><Stars count={5}/></div>
      <div className="card"><Stars count={5.5}/></div>
    </>
  );
}

export default App;
