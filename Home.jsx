import { useState, useEffect,} from "react";
import { createContext } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
export const dataContext = createContext();

function Home() {

  const [posts, setPosts] = useState(null);
  const data = "Datadata";

  useEffect(() => {

    const controller = new AbortController();
    const signal = controller.signal;
    
    setTimeout(() => {
    fetch("http://localhost:3001/posts", { signal })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        setPosts(data);
      })
      .catch(err => {
        console.log(err);
      });

    return () => {
      console.log("unmounted,cleaning up...");
      controller.abort();
    };
    },5000);

  }, []);

  return (
    <div className="container">
      <Link to="/login">Login</Link>
      <dataContext.Provider value={data}>
         <Login/>
        </dataContext.Provider>
     

      <div className="row justify-content-center m-3">
        {posts && posts.map(post => {
          return (
            <div key={post.id} className="card m-3" style={{ width: '18rem' }}>
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;