// Posts.jsx
import "./posts.css"
import POST from "../post/POST"

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((p) => (
        <POST key={p.id} post={p} />
      ))}
    </div>
  )
}
