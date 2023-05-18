import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import AddTask from './AddTask';

import './App.css';
import TaskList from './TaskList';

function App() {
  return (
    <Container>

      <Row md={12}>
        <div className="flex-container">
          <Col md={6} className="top-div" >
            <h3>Student Registration</h3>
            <AddTask />
          </Col>
        </div>
      </Row>

      <Row md={12}>
        <div className="flex-container">
          <Col md={6} className="student-details" >
            <h3>Student Registration</h3>
            <TaskList />
          </Col>
        </div>
      </Row>



    </Container>
  );
}

export default App;
