import React from "react";
import { Card } from "react-bootstrap";
// import { Link } from "react-router-dom";
import BlogAuthor from "../blog-author/BlogAuthor";
import "./styles.css";
const BlogItem = ({ authors }) => {
  return (
    <Card className="blog-card">
      <Card.Img variant="top" src={authors.avatar} className="blog-cover" />
      <Card.Body>
        <Card.Title>
          {authors.name} - {authors.surname}
        </Card.Title>
      </Card.Body>
      <Card.Footer>
        <BlogAuthor authors={authors} />
      </Card.Footer>
    </Card>
  );
};

export default BlogItem;
