import LeftMain from "./components/left-main";
import RightMain from "./components/right-main";
 import ResizeClass from "./components/resizeClass";
import { ProjectProvider } from "./components/ProjectListContext";
import { InformationProvider } from "./components/InformationContext";
import { Container, Row, Col } from "react-bootstrap";

const App = () => {
  return (
    <ProjectProvider>
      <InformationProvider>
        <Container fluid>
          {/* <ResizeClass> */}
            <Row>
              <Col>
                <LeftMain />
              </Col>
              <Col>
                <RightMain />
              </Col>
            </Row>
          {/* </ResizeClass> */}
        </Container>
      </InformationProvider>
    </ProjectProvider>
  );
};

export default App;
