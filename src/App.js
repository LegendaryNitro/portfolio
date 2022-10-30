import react, { useState, useRef } from "react";
import "./App.css";

import Skills from "./skills.json";
import ScrollToTop from "./components/ScrollToTop";
import ProjectModal from "./components/projectModal";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";

import img1 from "./bg1.JPG";
import img2 from "./bg2.JPG";
import Projects from "./projects";

function App() {
  const skills = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);
  const [show, setShow] = useState(false);
  const [tempData, setTempData] = useState([])

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  const getData = (name, desc, bgImg) => {
    setShow(true);
    let tempData = [name, desc, bgImg];
    setTempData(item => [1, ...tempData])
  };

  return (

    <div className="App">
      <ScrollToTop />

      <div className="hero">
        <ul>
          <li onClick={() => scrollToSection(skills)} className="link">
            skills
          </li>
          <li onClick={() => scrollToSection(projects)} className="link">
            projects
          </li>
          <li onClick={() => scrollToSection(contact)} className="link">
            talk to me
          </li>
        </ul>

    <Container>
      <Col  style={{height: "100vh"}}>
      <Col lg={{span: 7}} >
      <Card className="box1" style={{marginBottom: 10, textAlign: "left" , borderWidth: 0}}>
          <Card.Body>
            <Card.Text>
            <h2 className="fullname">Hi... My name is Nkululeko Comfort Mzobe</h2>
            <h6 className="versitilemobile">
                        Versitile full stack developer comfortable in different
                        technologies, adaptive in all kinds of situations in the
                        developement phases in projects. I am based in South Africa
                        </h6>
                        <Row class="justify-content-center">
                          <Col class="but">
                            <Button onClick={() => scrollToSection(contact)}
                            className="button1" style={{backgroundColor: "transparent"}}>talk to me</Button>
                        </Col>
                        </Row>

           
            
            </Card.Text>
          
            
           

          </Card.Body>
      </Card>
          </Col>
        

          </Col>
          <br />
        </Container>

      </div>


      <div ref={skills} className="skills">
        <h3  class="skilltitle">Skills</h3>
        <Col>
          <Row xs={1} md={2} className="g-4">
            {Skills.map((skill) => (
              <div key={skill.id}>
                <Col class="skillback">
                  <Card
                    style={{ border: "none", backgroundColor: "transparent" }}
                    
                  >
                    <Card.Body>
                      <Card.Title class="skillname">{skill.name}</Card.Title>
                      <ProgressBar
                      class="progress"
                        variant="primary"
                        label={`${skill.label}/5`}
                        now={skill.level}
                      />
                    </Card.Body>
                  </Card>
                </Col>
              </div>
            ))}
          </Row>
        </Col>
        <br />
      </div>





      <div ref={projects} className="blog">
        <h3 style={{color: 'white'}}>projects</h3>
        <Row xs={1} md={2} className="g-4">
          {Projects.map((projectz, index) => (
            <div key={index}>
              <Col>
                <Card style={{backgroundColor: 'transparent', color: 'white', borderWidth: 0}}>
                  <Card.Img 
                  style={{backgroundColor: 'transparent', color: 'white', }}
                  variant="top" 
                  src={projectz.mainImg} 
                  alt='' 
                  class="projectimg"/>
                  <Card.Body>
                    <Card.Title
                     
                      onClick={() =>
                        getData(
                          projectz.name,
                          projectz.desc,
                          projectz.mainImg
                        )
                      }
                    >
                      {projectz.name}
                    </Card.Title>
                    <Card.Text class="text-center">{projectz.desc}</Card.Text>
                  </Card.Body>
                </Card>


                <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              
            </Modal.Title>
          </Modal.Header>
          <Modal.Body></Modal.Body>
        </Modal>
              </Col>
            </div>
          ))}
        </Row>
        <br />
      </div>









      <div ref={contact} className="contact">
        <p className="contactheader">talk to me</p>
        <p className="contactP">Whatsapp or Call me: +27 74 079 9417</p>
        <p className="contactP">Email: nkululekomzobe@zamambo.co.za / unkululekoc@gmail.com</p>
        <br />
      </div>

    </div>

  );
}

export default App;
