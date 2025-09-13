import TopBar from "./components/topbar/TopBar"
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";
import Home from "./pages/home/Home"
import Single from "./pages/single/Single";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [user, setUser] = useState(false);
   const [searchTerm, setSearchTerm] = useState("");

  const [posts, setPosts] = useState(() => {
    
    
    const savedPosts = localStorage.getItem("posts");
    if(savedPosts){
      console.log("Loaded posts from localStorage:", JSON.parse(savedPosts));
    }
    
    
    return savedPosts ? JSON.parse(savedPosts) : [];
  });

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  return (
    <Router>
      <TopBar user={user} setUser={setUser} setSearchTerm={setSearchTerm} />
      <Routes>
        <Route path="/" element={<Home posts={posts}searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>} />
        <Route path="/register" element={user ? <Home posts={posts} /> : <Register />} />
        <Route path="/login" element={user ? <Home posts={posts} /> : <Login setUser={setUser} />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/write" element={user ? <Write setPosts={setPosts} posts={posts} /> : <Register />} />
        <Route path="/post/:postId" element={<Single posts={posts} setPosts={setPosts} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

