import LeftMain from "./components/left-main";
import RightMain from "./components/right-main";
import ResizeClass from "./components/resizeClass";
import { ProjectProvider } from "./components/ProjectListContext";
import { InformationProvider } from "./components/InformationContext";
import { Container, Row, Col } from "react-bootstrap";

const App = () => {
  return (
    <div className="App">
      <ProjectProvider>
        <InformationProvider>
          <ResizeClass>
            <Container fluid>
              <Row>
                <Col>
                  <LeftMain />
                </Col>
                <Col>
                  <RightMain />
                </Col>
              </Row>
            </Container>
          </ResizeClass>
        </InformationProvider>
      </ProjectProvider>
    </div>
  );
};

export default App;
