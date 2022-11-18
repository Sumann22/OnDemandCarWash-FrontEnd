import React from 'react';
import bodyWashVaccum from '../images/bodyWashVaccum.jpeg';
import quickWash from '../images/quickWash.jpg';
import snowFoamWash from '../images/snowFoamWash.jpg';
import greenWash from '../images/greenWash.jpg';
import silverWash from '../images/silverWash.png';
import goldWash from '../images/goldWash.jpeg';
import { Link } from 'react-router-dom';
import { Navbar, Container, Form, Button } from 'react-bootstrap';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

export default function WashPackages() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid style={{ height: '100px' }}>
          <Form className="d-flex">
            <Button variant="outline-primary">
              <Link to='/home'>Home</Link>
            </Button>
          </Form>
        </Container>
      </Navbar>
      <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
        <MDBCol>
          <MDBCard>
            <MDBCardImage
              src={greenWash}
              alt='...'
              position='top'
            />
            <MDBCardBody>
              <MDBCardTitle>Green Wash</MDBCardTitle>
              <MDBCardText>
                The outside body of the car is cleaned with steam generated using the steam machine.
                This application of hot steam on the hard dirt results in weakening of the grime and resulting in a cleaner and shinier surface.
              </MDBCardText>
              <MDBBtn>Add to cart</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard>
            <MDBCardImage
              src={quickWash}
              alt='...'
              position='top'
            />
            <MDBCardBody>
              <MDBCardTitle>Quick Wash</MDBCardTitle>
              <MDBCardText>
                When the outer body of the car is dirty and dusty, and there are time constraints for cleaning the car, we suggest a Quick Wash for quick Shine in less time (20min)
              </MDBCardText>
              <MDBBtn>Add to cart</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard>
            <MDBCardImage
              src={snowFoamWash}
              alt='...'
              position='top'
            />
            <MDBCardBody>
              <MDBCardTitle>Snow Foam Wash</MDBCardTitle>
              <MDBCardText>
                The outside body of the car is cleaned with heavy foam to remove dirt, dust, grease marks, light tar marks. We also perform cleaning of Under Chasis, Car Wheel and Wheel Arches in addition to exterior Foam cleaning.
                Special attention is given to Tyres by Polishing them.
              </MDBCardText>
              <MDBBtn>Add to cart</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard>
            <MDBCardImage
              src={bodyWashVaccum}
              alt='...'
              position='top'
            />
            <MDBCardBody>
              <MDBCardTitle>Body Wash and Vacuuming</MDBCardTitle>
              <MDBCardText>
                Cleaning of exterior paint surfaces, rubber, plastic, floor mats, wheel arches, and tyres (polishing and dressing) along with powerful dry vacuuming done on seats, carpets, boot, matting, and rear speaker tray.
              </MDBCardText>
              <MDBBtn>Add to cart</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard>
            <MDBCardImage
              src={silverWash}
              alt='...'
              position='top'
            />
            <MDBCardBody>
              <MDBCardTitle>Silver Wash</MDBCardTitle>
              <MDBCardText>
                Complete vacuuming of cars incl. seats and boot + Washing and cleaning of foot mats + Body Shampooing and washing including door frames + Tyre arches cleaning + Underbody wash + Engine hot water wash and dressing + Side doors cleaning + Dash board polishing + Car perfume spray
              </MDBCardText>
              <MDBBtn>Add to cart</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard>
            <MDBCardImage
              src={goldWash}
              alt='...'
              position='top'
            />
            <MDBCardBody>
              <MDBCardTitle>Gold Wash</MDBCardTitle>
              <MDBCardText>
                Complete vacuuming of cars incl. seats and boot + Washing and cleaning of foot mats + Body Shampooing and washing including door frames + Tyre arches cleaning + Underbody wash + Engine hot water wash and dressing + Side doors cleaning + Dash board cleaning and polishing + tires and alloy wheels treatment + Car perfume spray
              </MDBCardText>
              <MDBBtn>Add to cart</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </>
  );
}