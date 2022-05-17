import React from "react";
import { Col, Row } from "react-bootstrap";

import BlogItem from "../blog-item/BlogItem";
import { useState, useEffect } from "react";

const BlogList = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    let response = await fetch(
      "https://authors-strive-project.herokuapp.com/authors"
    );
    if (response.ok) {
      let data = await response.json();
      console.log(data);
      setAuthors(data);
    }
  };
  return (
    <>
      <Row>
        {authors.map((author) => (
          <Col
            md={4}
            style={{
              marginBottom: 50,
            }}
            key={author.id}
          >
            <BlogItem authors={author} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default BlogList;
