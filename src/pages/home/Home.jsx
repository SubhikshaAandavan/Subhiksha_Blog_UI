import "./home.css"
import Posts from "../../components/posts/Posts"
import Header from "../../components/header/Header"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Home({ posts,searchTerm,setSearchTerm  }) {
  const filteredPosts = searchTerm
    ? posts.filter((p) =>
        p.categories.some((cat) =>
          cat.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    : posts;

  return (
    <>
      <Header />
       <div className="home">
    
    {filteredPosts.length === 0 ? (
      <p
        style={{
          textAlign: "center",justifyContent:"center",
          marginTop: "20px",
         
        }}
      >
        <b>No Posts found . </b> <br /><br /><br />This platform is built to share knowledge, experiences, and inspiration across categories like Life, Music, Style, Cinema, Tech, and Sports.Whether you’re here to learn, share your story, or just explore, this blog provides a simple yet powerful way to connect through words.Our Mission To inspire and empower readers by creating meaningful content that resonates with real people and real lives.
      </p>
    ) : (
      <Posts posts={filteredPosts} />
    )}
    <Sidebar setSearchTerm={setSearchTerm} />
  </div>
</>
     
    
  )
}
