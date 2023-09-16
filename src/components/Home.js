import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ]);

  const [name, setName] = useState('mario');

  function handleDelete(id) {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
            setBlogs(data)
        })
  }, []);

  return (
    <div className="home">
      {/* <BlogList blogs={blogs} title="All blogs!" handleDelete={handleDelete}/>
      <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs" handleDelete={handleDelete}/>
      <button onClick ={() => setName('Luigi')}>change name </button>
      <p>{name}</p> */}
    </div>
  );
}
 
export default Home;