import{Navbar,Form,Row,Col,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css'


function App() {
  return (
    <div className="App">
     <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Emka Med</Navbar.Brand>
    
    
  </Navbar>

  <br></br>
  
  
  <div className="styleform">
  <h2>Contact Form </h2>
  

  <Form>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="email"  />
  </Form.Group>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="email"  />
  </Form.Group>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email"  />
  </Form.Group>
  <Form.Group controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password"/>
  </Form.Group>
</Form>



  <Form.Row>
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text"  required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text"  required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text"  required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
     

      <br></br>

      <fieldset>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
        Gender
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Men"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="Women"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
       
      </Col>
    </Form.Group>

    <Form.Group>
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
        />
      </Form.Group>

  </fieldset>
      <Button type="submit">Submit form</Button>
    
<br></br>
<br></br>
<br></br>
<br></br>

  </div>

  <hr></hr>

<div className="footer">
  
  
  <h4>You can find us here</h4>
  
<p>Rue Abdallah Farhat <br></br>
5010 Ouerdanine <br></br>
Monastir, Tunisie</p>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

</div>


</div>




  );
}

export default App;
