import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({Title, Text, ImgPath, DescriptionPageRoute, ProjectDescription}) {
  return (
    <Card bg='dark' text="white" border="success" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ImgPath} />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Text>
          {Text}
        </Card.Text>
        <Button variant="success" onClick={""}>View Details</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;