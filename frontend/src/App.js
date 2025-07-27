import './App.css';
import axios from 'axios';
import { useEffect,useState} from 'react';

function App() {
  const [listOfUsers, setListOfUsers] = useState([]); //useState is a hook to manage state in functional components
  useEffect(() => {
    axios.get('http://localhost:3001/users').then((response)=>{
      setListOfUsers(response.data); //setListOfUsers is a function to update the state with the data received from the server
    })
  }, []);
  return (
    <div className="App">
     {listOfUsers.map((value, key) => {    //mapping the list of users to display them
        return <div className="user">
          <div className="id">{value.id}</div> 
          <div className="name">{value.name}</div> 
          <div className="email">{value.email}</div> 
          <div className="role">{value.role}</div> 
        </div>
      })}
    </div>
  );
}

export default App;
