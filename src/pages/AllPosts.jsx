import React, { useState, useEffect } from "react";
import appWriteService from "../appwrite/config";
import { PostCard, Container } from "../components";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appWriteService
      .getPosts()
      .then((posts) => {
        if (posts) {
          setPosts(posts.documents);
        }
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="w-full py-8">
      {posts.length > 0 && (
        <Container>
          <div className="flex flex-wrap">
            {posts.map((post) => (
              <div key={post.$id} className="p-2 w-1/4">
                <PostCard post={post} />
              </div>
            ))}
          </div>
        </Container>
      )}
    </div>
  );
}

export default AllPosts;
