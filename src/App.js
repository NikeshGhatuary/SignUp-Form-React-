import React from "react";
import ReactDOM from "react-dom";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { BrowserRouter } from "react-router-dom";

//import logo from './logo.svg';
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBModalFooter,
  MDBNav,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";

const FormPage = () => {
  return (
    <MDBContainer>
      <BrowserRouter>
        <MDBNav className="justify-content-center">
          <MDBNavItem>
            <MDBNavLink active to="#!">
              <img
                style={({ height: 60 + "px" }, { marginBottom: 5 + "px" })}
                src="./logo_1.png"
                alt="Online Travel Agency"
                title="Lowest Hotel Fairs in India"
                to="http://localhost:3000"
              />
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>
      </BrowserRouter>
      <MDBModalFooter className="mx-20 pt-0 mb-1"></MDBModalFooter>
      <MDBRow>
        <MDBCol md="10">
          <MDBCard className="cardform">
            <div className="text-center">
              <h5
                className="dark-grey-text mb-5"
                style={{ marginTop: 0 + "px" }}
              >
                <strong>SIGN UP</strong>
              </h5>
              <h2 className="dark-grey-text mb-5">Create your account</h2>
            </div>
            <div className="row my-3 d-flex justify-content-center">
              <MDBBtn
                type="button"
                color="white"
                rounded
                className="z-depth-1a"
              >
                <MDBIcon fab icon="google-plus-g" className="blue-text" />
                Sign up with Google
              </MDBBtn>
              <MDBBtn
                type="button"
                color="white"
                rounded
                className="mr-md-3 z-depth-1a"
              >
                <MDBIcon
                  fab
                  icon="facebook-f"
                  className="blue-text text-center"
                />
                Sign up with Facebook
              </MDBBtn>
            </div>
            <MDBModalFooter className="mx-5 pt-3 mb-1"></MDBModalFooter>
            <MDBCardBody className="mx-4">
              <input
                type="text"
                id="defaultFormEmailEx"
                required
                placeholder="First name"
                className="form-control"
              />
              <input
                type="text"
                id="defaultFormEmailEx"
                required
                placeholder="Last name"
                className="form-control"
              />
              <input
                type="email"
                required
                placeholder="Email Address"
                id="defaultFormPasswordEx"
                className="form-control"
                success="right"
              />
              <input
                type="password"
                required
                placeholder="Password"
                id="defaultFormPasswordEx"
                className="form-control"
                //containerClass="mb-0"
              />
              <p style={{ fontSize: 12 + "px" }}>
                By clicking Sign Up, you agree to our
                <a
                  href="#!"
                  className="blue-text ml-1"
                  style={{ paddingInlineEnd: 4 + "px" }}
                >
                  Terms of Use
                </a>
                and our
                <a href="#!" className="blue-text ml-1">
                  Privacy Policy
                </a>
              </p>
              <div className="text-center mb-3">
                <MDBBtn
                  type="button"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                >
                  Sign Up
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;
