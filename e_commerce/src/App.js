import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [users,setUsers] = useState([]);
  const [sortByIdData, setSortByIdData] = useState([]);
  useEffect(()=>{
    const getUsers = async () => {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users");
      if(res.status===200){
        setUsers(res.data);
      }
    }
    getUsers();
  },[]);
  function handleAscending(){
    let sortedData = [...users].sort((a,b)=>a.id-b.id);
    // console.log(sortedData);
    setUsers(sortedData);
  }
  function handleDescending(){
    let sortedData = [...users].sort((a,b)=>b.id-a.id);
    setUsers(sortedData);
  }
  function handleNameAscending(){
    let sortedData = [...users].sort((a,b)=>a.name.localeCompare(b.name));
    console.log(sortedData);
    setUsers(sortedData);
  }
  function handleNameDescending(){
    let sortedData = [...users].sort((a,b)=>b.name.localeCompare(a.name));
    console.log(sortedData);
    setUsers(sortedData);
  }

  return <>
       <h1>hello</h1>
       <table>
        <thead>
          <tr>
            <th>ID <button onClick={handleAscending}>Asc</button><button onClick={handleDescending}>Des</button></th>
            <th>Name <button onClick={handleNameAscending}>Asc</button><button onClick={handleNameDescending}>Des</button></th>
            <th>Email</th>
            <th>UserName</th>
          </tr>
        </thead>
        <tbody>
          {users.length>0 && users.map((itm)=>{
            return <tr key={itm.id}>
              <td>{itm.id}</td>
              <td>{itm.name}</td>
              <td>{itm.email}</td>
              <td>{itm.username}</td>
              </tr>
          })}
        </tbody>
       </table>
  </>
}


export default App;
