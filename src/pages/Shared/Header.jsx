import logo from "../../assets/logo.png";
import moment from "moment";
import { Button, Container} from "react-bootstrap";
import Marquee from "react-fast-marquee";


const Header = () => {
  return (
    <Container>
      <div className="text-center mb-5">
        <img className="mt-5" src={logo} alt="" />
        <p>
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex">
        <Button className="me-4" variant="danger">
          Letest
        </Button>
        <Marquee className="text-danger" speed={90}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
      
    </Container>
  );
};

export default Header;
