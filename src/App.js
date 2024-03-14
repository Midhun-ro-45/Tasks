import "./App.css"
import ProductSelection from "./components/1.Filtering Task/ProductSelection/ProductSelection";
import ProductShow from "./components/1.Filtering Task/ProductShow/ProductShow";
import Login from "./components/2.Form Validation/Login";
import Loingpage from "./components/2.Form Validation/Loingpage";

function App() {
  // const [users, setUsers] = useState()

  // useEffect(() => {

  //   getUsers().then(res => setUsers(res.data))

  // }, [])

  // users && console.log(users)


  return (

    // <div className="App">                        // data fetching taks
    //   {users?.map((data, index) => (  
    //     <li key={index}>{data.name}</li>
    //   ))}
    // </div>


    <div style={{ display: "flex" }}>
      <ProductSelection />
      <ProductShow />
    </div>


    // <Loingpage />                                               // Form validation

  );
}

export default App;

