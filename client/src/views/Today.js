import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Alert } from 'react-bootstrap';

export default function Today() {
    const [weather, setWeather] = useState({});
    const [forecast, setForecast] = useState({});
    const [alerts, setAlerts] = useState({});
    const [location, setLocation] = useState({});

    useEffect(() => {
        const getWeather = async () => {
            try {
                const { data } = await axios.get('./api/weather/current');
                console.log('my data ', data);
                setWeather(data.current);
                setLocation(data.location);
                setForecast(data.forecast.forecastday[0]);
                setAlerts(data.alerts);
            } catch (err) {
                console.log(err);
            }
        };
        getWeather();
    }, []);
    if (!forecast.day) return <div>Loading!</div>;
    return (
        <Container>
            <Row>
                <Col className="d-flex flex-column mt-5" xs={8}>
                    <Card>
                        <Card.Header>
                            {location.name}, {location.country} As of{' '}
                            {weather.last_updated}
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <Card.Title>{weather.temp_f}°</Card.Title>
                                    <Card.Text className="mb-0">
                                        {weather.condition &&
                                            weather.condition.text}
                                    </Card.Text>
                                    <Card.Text>
                                        min: {forecast.day.mintemp_f}° | max:{' '}
                                        {forecast.day.maxtemp_f}°
                                    </Card.Text>
                                </Col>
                                <Col className="d-flex justify-content-end">
                                    <img
                                        src={forecast.day.condition.icon}
                                        alt=""
                                    />
                                </Col>
                            </Row>
                            <Alert
                                className="mt-5 p-1 text-center"
                                variant="dark"
                            >
                                {alerts.alert ? 'No Alerts' : alerts.alert}
                            </Alert>
                        </Card.Body>
                    </Card>
                    <Card className="mt-5">
                        <Card.Body>
                            <Card.Title>
                                Today Forecast for
                                {' ' + location.name + ', ' + location.country}
                            </Card.Title>
                            <Card.Text>HERE IS SOME INFO</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="mt-5">
                        <Card.Body>
                            <Card.Title>
                                Weather Today in
                                {' ' + location.name + ', ' + location.country}
                            </Card.Title>
                            <Card.Text>HERE IS SOME MORE STUFF</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="d-flex flex-column mt-5">
                    <Card>
                        <Card.Body>
                            <Card.Title>Wind</Card.Title>
                            <div>HERE I AM!!!!</div>
                        </Card.Body>
                    </Card>
                    <Card className="mt-5">
                        <Card.Body>
                            <Card.Title>Air Quality Index</Card.Title>
                            <div>HERE I AM!!!!</div>
                        </Card.Body>
                    </Card>
                    <Card className="mt-5">
                        <Card.Body>
                            <Card.Title>News</Card.Title>
                            <div>HERE I AM!!!!</div>
                        </Card.Body>
                    </Card>
                    <Card className="mt-5">
                        <Card.Body>
                            <Card.Title>Sports</Card.Title>
                            <div>HERE I AM!!!!</div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
