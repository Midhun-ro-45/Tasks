import "./App.css"
import ProductSelection from "./components/ProductSelection/ProductSelection";
import ProductShow from "./components/ProductShow/ProductShow";

// function App() {
//   const [users, setUsers] = useState()

//   useEffect(() => {

//     getUsers().then(res => setUsers(res.data))

//   }, [])

//   users && console.log(users)


//   return (
//     <div className="App">
//       {users?.map((data, index) => (
//         <li key={index}>{data.name}</li>
//       ))}

//     </div>
//   );
// }

// export default App;















function App() {

  return (
    <div className="App">
      <ProductSelection />
      <ProductShow />
    </div>
  );
}

export default App;
