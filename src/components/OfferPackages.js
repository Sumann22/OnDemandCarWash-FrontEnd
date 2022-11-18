import React from "react";
import carCards from '../images/carCards.jpg';
import carCards2 from '../images/carCards2.jpg';
import carCards3 from '../images/carCards3.jpg';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

function OfferPackages() {
  return (
    <MDBContainer fluid className="my-5">
      <MDBRow>
        <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
          <MDBCard>
            <div className="d-flex justify-content-between p-3">
              <p className="lead mb-0">Today's Offer</p>
              <div
                className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                style={{ width: "35px", height: "35px" }}
              >
                <p className="text-white mb-0 small">x4</p>
              </div>
            </div>
            <MDBCardImage
              src={carCards}
              position="top"
              alt="Laptop" />
            <MDBCardBody>
              <div className="d-flex justify-content-between">
                <p className="small">
                  <a href="#!" className="text-muted">
                    Services
                  </a>
                </p>
                <p className="small text-danger">
                  <s>Rs.1800</s>
                </p>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">Quick Wash</h5>
                <h5 className="text-dark mb-0">Rs.800</h5>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <p className="text-muted mb-0">
                  Available Now
                </p>
                <div className="ms-auto text-warning">
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                </div>
              </div>
              <MDBBtn>Add to cart</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
          <MDBCard>
            <div className="d-flex justify-content-between p-3">
              <p className="lead mb-0">Today's Offer</p>
              <div
                className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                style={{ width: "35px", height: "35px" }}
              >
                <p className="text-white mb-0 small">x2</p>
              </div>
            </div>
            <MDBCardImage
              src={carCards2}
              position="top"
              alt="Laptop" />
            <MDBCardBody>
              <div className="d-flex justify-content-between">
                <p className="small">
                  <a href="#!" className="text-muted">
                    Complete Service
                  </a>
                </p>
                <p className="small text-danger">
                  <s>Rs.3500</s>
                </p>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">Silver Wash</h5>
                <h5 className="text-dark mb-0">Rs.2200</h5>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <p className="text-muted mb-0">
                  Available Now
                </p>
                <div className="ms-auto text-warning">
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon far icon="star" />
                </div>
              </div>
              <MDBBtn>Add to cart</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
          <MDBCard>
            <div className="d-flex justify-content-between p-3">
              <p className="lead mb-0">Today's Offer</p>
              <div
                className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                style={{ width: "35px", height: "35px" }}
              >
                <p className="text-white mb-0 small">x3</p>
              </div>
            </div>
            <MDBCardImage
              src={carCards3}
              position="top"
              alt="Gaming Laptop" />
            <MDBCardBody>
              <div className="d-flex justify-content-between">
                <p className="small">
                  <a href="#!" className="text-muted">
                    Internal and External Services
                  </a>
                </p>
                <p className="small text-danger">
                  <s>Rs.5000</s>
                </p>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">Gold Wash</h5>
                <h5 className="text-dark mb-0">Rs.3500</h5>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <p className="text-muted mb-0">
                  Available Now
                </p>
                <div className="ms-auto text-warning">
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star-half-alt" />
                </div>
              </div>
              <MDBBtn>Add to cart</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default OfferPackages;