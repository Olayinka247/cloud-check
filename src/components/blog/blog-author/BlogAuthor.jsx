import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import "./styles.css";

const BlogAuthor = ({ authors }) => {
  return (
    <Row>
      <Col xs={2}>
        <Image className="blog-author" src={authors.avatar} />
      </Col>
      <Col>
        <div>by</div>
        <h6>{authors.name}</h6>
      </Col>
    </Row>
  );
};

export default BlogAuthor;
