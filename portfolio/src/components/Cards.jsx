import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cards({ Title, Text, ImgPath, DescriptionPageRoute }) {
  return (
    <Card bg="dark" text="white" border="success" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={ImgPath} />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Text>{Text}</Card.Text>

        <Link to={DescriptionPageRoute}>
          <Button variant="success">View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Cards;
