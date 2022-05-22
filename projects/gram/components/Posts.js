import React from "react";
import Post from "./Post";

const posts = [
  {
    id: "123",
    username: "g2hhh2ee",
    userImg: "https://avatars.githubusercontent.com/u/57996351?s=96&v=4",
    // img: "https://avatars.githubusercontent.com/u/57996351?s=96&v=4",
    img: "/assets/images/posts/1.jpg",
    caption: "First project with Tailwind and it is super lit",
  },
  {
    id: "123",
    username: "g2hhh2ee",
    userImg: "https://avatars.githubusercontent.com/u/57996351?s=96&v=4",
    img: "/assets/images/posts/2.jpg",
    caption: "THIS IS DOPE",
  },
  {
    id: "123",
    username: "g2hhh2ee",
    userImg: "https://avatars.githubusercontent.com/u/57996351?s=96&v=4",
    img: "/assets/images/posts/4.jpg",
    caption: "THIS IS DOPE",
  },
];

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
