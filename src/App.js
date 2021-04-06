import LeftMain from "./components/left-main";
import RightMain from "./components/right-main";
import { ProjectProvider } from "./components/ProjectListContext";
import { InformationProvider } from "./components/InformationContext";
import { Container, Row, Col } from "react-bootstrap";

const App = () => {
  return (
    <ProjectProvider>
      <InformationProvider>
        <Container fluid>
          <Row>
            <Col>
              <LeftMain className="left-pane" />
            </Col>
            <Col>
              <RightMain />
            </Col>
          </Row>
        </Container>
      </InformationProvider>
    </ProjectProvider>
  );
};

export default App;
