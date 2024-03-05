import './App.css'
import Router from './components/Router'


function App() {
  return (
    <>
      <Router />
    </>
  );
}

export default App;



// No backendData compenent provided. Removed because redundancy. 


// function App() {
//   const [currentForm, setCurrentForm] = useState('login');
  
//   const toggleForm = (formName) => {
//     setCurrentForm(formName);
//   }


//   return (
//     <div className="App">
//       {
//         currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
//       }
//     </div>
//   );
// }

// export default App;