import { useEffect, useState } from "react";
import { getUsers } from "./api";

function App() {
  const [users, setUsers] = useState()

  useEffect(() => {

    getUsers().then(res => setUsers(res.data))

  }, [])

  users && console.log(users)


  return (
    <div className="App">
      {users?.map((data, index) => (
        <li key={index}>{data.name}</li>
      ))}

    </div>
  );
}

export default App;
