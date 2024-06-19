import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Career = () => {
  return (
    <div>
      <h1 style={{textAlign:'center' , margin: '3rem 0'}} >Career</h1>

<CardGroup style={{gap:'5rem' , margin: '2rem 4rem' }}>
      <Card style={{ width: '18rem' , border: '1px solid black' , padding: '7px'}}>
      <Card.Img variant="top" src="/Dark.jpg/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' , border: '1px solid black' , padding:'7px'}}>
      <Card.Img variant="top" src="/Dark.jpg/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' , border: '1px solid black' , padding:'7px'}}>
      <Card.Img variant="top" src="/Dark.jpg/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </CardGroup>

    </div>
  );
};


export default Career;