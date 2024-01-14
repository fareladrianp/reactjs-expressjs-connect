import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchUserData = () => {
    axios
      .get("http://localhost:8000/user")
      .then(({ data }) => setUser(data.user))
      .catch((err) => console.log(err));
  };

  // const fetchUserData = () => {
  //   fetch("http://localhost:8000/user", {
  //     method: "GET",
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => setUser(data.user))
  //     .catch((err) => console.log(err));
  // };

  const fetchData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setPosts(response.data);
  };

  return (
    <div className="container">
      {user &&
        user.map((user) => (
          <div className="alert alert-primary" key={user.id}>
            {user.nama} berusia {user.usia}
          </div>
        ))}
      <button onClick={fetchUserData} className="btn btn-primary">
        Ambil data!
      </button>

      {posts &&
        posts.map((post) => (
          <div className="alert alert-primary" key={post.id}>
            {post.title}
          </div>
        ))}
    </div>
  );
}

export default App;

// const [text, setText] = useState("");
// const [password, setPassword] = useState("");

// const handleSubmit = (event) => {
//   event.preventDefault();
//   console.log("DATA = ", text, password);
// };

// return (
//   <div className="container">
//     <h1 className="display-4 text-center">Selamat Datang di React</h1>
//     <br />

//     <div className="row">
//       <div className="col-md-6 offset-md-3">
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label className="form-label">Nama</label>
//             <input
//               value={text}
//               onChange={(event) => setText(event.target.value)}
//               className="form-control"
//               type="text"
//             />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Password</label>
//             <input
//               value={password}
//               onChange={(event) => setPassword(event.target.value)}
//               className="form-control"
//               type="password"
//             />
//           </div>
//           <button type="submit" className="btn btn-primary">
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   </div>
// );
