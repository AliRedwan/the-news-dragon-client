import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import moment from "moment/moment";
import { FaRegBookmark, FaShareAlt, FaEye,FaStar,FaRegStar } from "react-icons/fa";
import Rating from "react-rating";

const NewsCard = ({ news }) => {
  const { _id, title, image_url, details, author, total_view, rating } = news;
  return (
    <Card className="mb-4">
      <Card.Header className="d-flex align-items-center">
        <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
        <div className="ps-2 flex-grow-1">
          <p className="mb-0">{author?.name}</p>
          <p>
            <small>
              {moment(author?.published_date).format("Do-MMM-YYYY")}{" "}
            </small>
          </p>
        </div>
        <div className="">
          <FaRegBookmark />
          <FaShareAlt />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length <= 250 ? (
            details
          ) : (
            <>
              {details.slice(0, 250)}...
              <Link to={`/news/${_id}`}>Read more</Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex ">
        <div className="flex-grow-1">
          <Rating
            placeholderRating={rating?.number}
            emptySymbol=
            {<FaRegStar className="text-warning"/>}
            readonly
            placeholderSymbol=
            {<FaStar className="text-warning"/>}
            fullSymbol=
            {<FaStar className="text-warning"/>}>
          </Rating>
          {rating?.number}
        </div>
        <div className="">
          <FaEye /> {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

NewsCard.propTypes = {
  news: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
  }).isRequired,
};
export default NewsCard;
