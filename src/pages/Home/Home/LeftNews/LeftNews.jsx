import { Card, Col, Row } from 'react-bootstrap'
import first_img from "../../../../assets/1.png"
import second_img from "../../../../assets/2.png"
import third_img from "../../../../assets/3.png"

const LeftNews = () => {
  return (
    <Row xs={1} md={2} lg={1} className="g-4 mt-4">
    <Col>
      <Card>
        <Card.Img variant="top" src={first_img} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src={second_img} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src={third_img} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>
  )
}

export default LeftNews
