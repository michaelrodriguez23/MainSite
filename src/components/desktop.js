import LeftMain from "./left-main";
import RightMain from "./right-main";
 import ResizeClass from "./resizeClass";
import { ProjectProvider } from "./ProjectListContext";
import { InformationProvider } from "./InformationContext";
import { Container, Row, Col } from "react-bootstrap";


const Desktop = () => {



  return (
    <div className="App">
 
    <ProjectProvider>
      <InformationProvider>
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
      </InformationProvider>
    </ProjectProvider>
    </div>
  );
};

export default Desktop;
