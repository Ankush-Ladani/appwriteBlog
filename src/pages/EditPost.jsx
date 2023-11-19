import React, { useState, useEffect } from "react";
import appWriteService from "../appwrite/config";
import { PostForm, Container } from "../components";
import { useParams, useNavigate } from "react-router-dom";

function EditPost() {
  const [post, setPost] = useState([]);

  const navigate = useNavigate();

  const { slug } = useParams();

  useEffect(() => {
    appWriteService.getPost(slug).then((post) => {
      if (post) {
        setPost(post);
        console.log("Post ", post);
      } else {
        navigate("/");
      }
    });
  }, [slug, navigate]);

  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
}

export default EditPost;
