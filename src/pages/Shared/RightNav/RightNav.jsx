import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import Qzone from "../QZone/Qzone";
import bg from "../../../assets/bg.png";

const RightNav = () => {
  return (
    <div className="mt-5">
      <h4 className="mb-4">Login With</h4>
      <Button className="mb-2" variant="outline-primary">
        <FaGoogle className="me-2" />
        Login with Google
      </Button>
      <Button variant="outline-secondary">
        <FaGithub className="me-2" />
        Login with GitHub
      </Button>
      <div className="mt-5">
        <h4>Find Us On</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <Qzone />
      <div className="">
        <Card className="bg-dark text-white ">
          <Card.Img src={bg} alt="Card image" />
          <Card.ImgOverlay className="text-center d-flex justify-content-center align-items-center">
            <div >
              <div className="mb-4">
                <Card.Title>
                  <h1>Create an Amazing Newspaper</h1>
                </Card.Title>
              </div>
              <div className="mb-4">
                <Card.Text>
                  Discover thousands of options, easy to customize layouts,
                  one-click to import demo and much more.
                </Card.Text>
              </div>
              <div className="">
                <Button variant="danger">Learn More</Button>
              </div>
            </div>
          </Card.ImgOverlay>
        </Card>
      </div>
    </div>
  );
};

export default RightNav;
