import "./write.css";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Write({ posts, setPosts }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [categories, setCategories] = useState([]);
  const [file, setFile] = useState(null);
  const [imgUrl, setImgUrl] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const allCategories = ["Life", "Music", "Style", "Cinema", "Tech", "Sports"];

  // ✅ Check if editing
  const params = new URLSearchParams(location.search);
  const editId = params.get("edit");
  const editingPost = posts.find((p) => p.id === parseInt(editId));

  useEffect(() => {
    if (editingPost) {
      setTitle(editingPost.title);
      setDesc(editingPost.desc);
      setCategories(editingPost.categories);
      setImgUrl(editingPost.img);
    }
  }, [editingPost]);

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setCategories([...categories, value]);
    } else {
      setCategories(categories.filter((c) => c !== value));
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (err) => reject(err);
    });
  }
  const handlePublish = async (e) => {
    e.preventDefault();
     let finalImg = imgUrl || "https://via.placeholder.com/800x400?text=No+Image"
    if (file) {
      finalImg=await convertToBase64(file);
    }
    const newPost = {
      id: editingPost ? editingPost.id : posts.length + 1,
      title,
      desc,
      categories,
      date: new Date().toLocaleDateString(),
      img: finalImg,
    };

    if (editingPost) {
      // Update existing
      setPosts(posts.map((p) => (p.id === editingPost.id ? newPost : p)));
    } else {
      // Create new
     setPosts([newPost, ...posts]);  // ✅ recent first

    }

    navigate("/");
  };
  

  return (
    <div className="write">
      {(file || imgUrl) && (
        <img
          className="writeImg"
          src={file ? URL.createObjectURL(file) : imgUrl}
          alt="preview"
        />
      )}

      <form className="writeForm" onSubmit={handlePublish}>
        {/* Image Upload + URL */}
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder=" Upload file img  in + Or enter image URL..."
             autoFocus={true}
            className="writeInput"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
       
          />
          
  {file && <span className="successMsg">✔ File uploaded successfully</span>}
        </div>

        {/* Title */}
        <div className="writeFormGroup">
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
           
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Categories */}
        <div className="writeFormGroup">
          <span>Select Categories:</span>
          <div className="categoriesSelect">
            {allCategories.map((cat) => (
              <label key={cat}>
                <input
                  type="checkbox"
                  value={cat}
                  checked={categories.includes(cat)}
                  onChange={handleCategoryChange}
                />
                {cat}
              </label>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell Your Story...."
            type="text"
            className="writeInput writeText"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>

        <button className="writeSubmit" type="submit">
          {editingPost ? "Update Post" : "Publish"}
        </button>
      </form>
    </div>
  );
}
