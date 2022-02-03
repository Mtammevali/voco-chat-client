//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import voco from './voco.svg';
import Button from 'react-bootstrap/button';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';



function App() {
  return (



    <div className="App">

      <header className="App-header">
        <img src={voco} className="App-logo" alt="logo" />

        <Card style={{ background: '#000000',borderRadius:'20px' }}>
          <Card.Body  className="card-body" style={{ color: 'white', width:"50rem", height: '40rem' }}>
            <Card.Title>VOCO-CHAT 1.0.1</Card.Title>
            <Card.Text>
              <blockquote style={{ background: '#D3D3D3',color: 'black', borderRadius:'10px', textAlign:'left' }} className="blockquote mb-0">
                <p>

                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                  erat a ante.
                </p>
                  <p className="text-muted" style={{color: 'mintcream', fontSize:'15px', paddingLeft:'10px'}}>John Doe| 01.02.2022 15:24 </p>

              </blockquote>
                <br>
                </br>
              <blockquote style={{ background: '#D3D3D3',color: 'black', borderRadius:'10px', textAlign:'left' }} className="blockquote mb-0">
                <p style={{ textAlign:'left'}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <p className="text-muted" style={{color: 'mintcream', fontSize:'15px', paddingLeft:'10px'}}>John Doe | 01.02.2022 15:24 </p>

              </blockquote>
              <br>
              </br>
              <blockquote style={{ background: '#D3D3D3',color: 'black', borderRadius:'10px', textAlign:'left' }} className="blockquote mb-0">
                <p>

                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                  erat a ante.
                </p>
                <p className="text-muted" style={{color: 'mintcream', fontSize:'15px', paddingLeft:'10px'}}>John Doe | 01.02.2022 15:24 </p>

              </blockquote>
              <br>
              </br>
              <blockquote style={{ background: '#D3D3D3',color: 'black', borderRadius:'10px', textAlign:'left' }} className="blockquote mb-0">
                <p>

                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                  erat a ante.
                </p>
                <p className="text-muted" style={{color: 'mintcream', fontSize:'15px', paddingLeft:'10px'}}>John Doe | 01.02.2022 15:24 </p>

              </blockquote>


            </Card.Text>
          </Card.Body>
          <InputGroup >
            <InputGroup.Text>Guest3367</InputGroup.Text>
            <FormControl as="textarea" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                  erat a ante."  aria-label="@username" />
          </InputGroup>

        </Card>
        <Button variant="outline-light" style={{marginLeft:'725px', marginTop:'10px'}}>Send</Button>
      </header>
    </div>



  );
}



export default App;
