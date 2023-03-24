import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

export default function Weekly() {
    return (
        <div className="m-5">
            <Row xs={1} md={3} lg={5} className="g-4">
                {Array.from({ length: 7 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text
                                    below as a natural lead-in to additional
                                    content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}
