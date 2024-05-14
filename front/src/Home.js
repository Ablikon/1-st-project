import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';

function Home() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/auth');
  };
  const handleRegisterClick = () => {
    navigate('/reg');
  };

  return (
    <Container className="mt-5">
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-4">Добро пожаловать!</h1>
          <p className="lead">Aurora.</p>
          <hr className="my-4" />
          <p>Если у вас нет аккаунта, то можете зарегестрироваться .</p>
          <Button variant="primary" size="lg" onClick={handleLoginClick}>Log In</Button>
          <Button variant="primary" size="lg" onClick={handleRegisterClick}>Register</Button>
        </div>
      </div>
      <Row className="mt-5">
        <Col>
          <h2>Раздел 1</h2>
          <p>Конструктор аналитических отчетов.</p>
        </Col>
        <Col>
          <h2>Раздел 2</h2>
          <p>Viewer аналитических отчетов.</p>
        </Col>
        <Col>
          <h2>Раздел 3</h2>
          <p>Загрузка и выгрузка данных.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;