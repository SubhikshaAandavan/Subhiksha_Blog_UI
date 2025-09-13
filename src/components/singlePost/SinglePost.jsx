import "./singlePost.css";
import { useParams, useNavigate } from "react-router-dom";

export default function SinglePost({ posts, setPosts }) {
  const { postId } = useParams();
  const navigate = useNavigate();

  const post = posts.find((p) => p.id === parseInt(postId));

  if (!post) return <h2>Post not found</h2>;

  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    if (confirmDelete) {
      setPosts(posts.filter((p) => p.id !== post.id));
      navigate("/"); 
    }
  };

  const handleEdit = () => {
    navigate(`/write?edit=${post.id}`);
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src={post.img} alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i 
              className="singlePostIcon fa-solid fa-pen-to-square" 
              onClick={handleEdit}
              style={{ cursor: "pointer" }}
            ></i>
            <i 
              className="singlePostIcon fa-solid fa-trash" 
              onClick={handleDelete}
              style={{ cursor: "pointer", marginLeft: "10px" }}
            ></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author : <b>Subhiksha A</b></span>
          <span className="singlePostDate">{post.date}</span>
        </div>
        <p className="singlePostDesc">{post.desc}</p>
      </div>
    </div>
  );
}
