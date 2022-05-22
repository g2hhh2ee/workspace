import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post";

function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );

  console.log(posts);
  // useEffect(() => {
  //   const unsubscribe = onSnapshot(
  //     query(collection(db, "posts"), orderBy("timestamp", "desc")),
  //     (snapshot) => {
  //       setPosts(snapshot.docs);
  //     }
  //   );
  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().userImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
}

export default Posts;

// const posts = [
//   {
//     id: "123",
//     username: "g2hhh2ee",
//     userImg: "https://avatars.githubusercontent.com/u/57996351?s=96&v=4",
//     // img: "https://avatars.githubusercontent.com/u/57996351?s=96&v=4",
//     img: "/assets/images/posts/1.jpg",
//     caption: "First project with Tailwind and it is super lit",
//   },
//   {
//     id: "123",
//     username: "g2hhh2ee",
//     userImg: "https://avatars.githubusercontent.com/u/57996351?s=96&v=4",
//     img: "/assets/images/posts/2.jpg",
//     caption: "THIS IS DOPE",
//   },
//   {
//     id: "123",
//     username: "g2hhh2ee",
//     userImg: "https://avatars.githubusercontent.com/u/57996351?s=96&v=4",
//     img: "/assets/images/posts/4.jpg",
//     caption: "THIS IS DOPE",
//   },
// ];

// return (
//   <div>
//     {posts.map((post) => (
//       <Post
//         key={post.id}
//         id={post.id}
//         username={post.username}
//         userImg={post.userImg}
//         img={post.img}
//         caption={post.caption}
//       />
//     ))}
//   </div>
// );
// }
