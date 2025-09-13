import "./single.css"
import Sidebar from "../../components/sidebar/Sidebar"
import SinglePost from "../../components/singlePost/SinglePost"

export default function Single({ posts, setPosts }) {
  return (
    <div className="single">
      <SinglePost posts={posts} setPosts={setPosts} />
      <Sidebar />
    </div>
  );
}
