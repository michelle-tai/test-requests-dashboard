import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar/Sidebar';
import RequestList from './RequestList';
import Search from './Search';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      {/* <Container>
            <Row>
              <Col>
                <div>hi</div>
              </Col>
              <Col>
                <div>bye</div>
              </Col>
            </Row>
            cv6 7 =t
          </Container> */}
          <div className="container sidebar">
                <Search />
                <RequestList />
            </div>


        

        <div className="container detail">
            hi
        </div>
    </div>
  );
}


export default App;
