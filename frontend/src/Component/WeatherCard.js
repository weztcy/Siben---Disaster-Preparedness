import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../redux/actions/weatherActions";

const WeatherCard = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather.data);
  const loading = useSelector((state) => state.weather.loading);
  const error = useSelector((state) => state.weather.error);

  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const formatDateAndTime = (dateTime) => {
    const date = new Date(dateTime);
    const formattedDate = date.toLocaleDateString("id-ID", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    const formattedTime = date.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return { formattedDate, formattedTime };
  };

  return (
    <Container fluid style={{ maxWidth: "1280px" }}>
      <Row className="justify-content-center mt-5 g-4">
        {weatherData.map((data, index) => {
          const weatherImage = data.imageUrl || `/images/IconCuaca/${data.kodeCuaca}.png`;
          const { formattedDate, formattedTime } = formatDateAndTime(
            data.jamCuaca
          );

          return (
            <Col
              key={index}
              xs={12}
              sm={6}
              md={4}
              className="d-flex justify-content-center align-items-stretch"
            >
              <Card
                className="w-100"
                style={{
                  maxWidth: "24rem",
                  backgroundColor: "rgba(0, 0, 0, 0.45)",
                  backdropFilter: "blur(6px)",
                  borderRadius: "16px",
                  color: "white",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  padding: "16px",
                  transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.35)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ textAlign: "center", paddingTop: "10px", paddingBottom: "5px" }}>
                  <Card.Img
                    variant="top"
                    src={weatherImage}
                    alt="Weather icon"
                    style={{ width: "135px", height: "135px", objectFit: "contain", filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))" }}
                  />
                </div>
                <Card.Body>
                  <Card.Title
                    style={{ marginBottom: "20px", marginTop: "5px", textAlign: "center", fontWeight: "600" }}
                  >
                    Kota Semarang
                  </Card.Title>
                  <Card.Text style={{ textAlign: "left", fontSize: "15px" }}>
                    <div className="d-flex mb-2 justify-content-between">
                      <strong>Tanggal:</strong>
                      <span>{formattedDate}</span>
                    </div>
                    <div className="d-flex mb-2 justify-content-between">
                      <strong>Jam:</strong>
                      <span>{formattedTime}</span>
                    </div>
                    <div className="d-flex mb-2 justify-content-between">
                      <strong>Kondisi:</strong>
                      <span>{data.cuaca}</span>
                    </div>
                    <div className="d-flex mb-2 justify-content-between">
                      <strong>Kelembapan:</strong>
                      <span>{data.humidity}%</span>
                    </div>
                    <div className="d-flex mb-2 justify-content-between">
                      <strong>Temperatur:</strong>
                      <span>{data.tempC}°C / {data.tempF}°F</span>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default WeatherCard;
