import { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import {
  BsPersonCircle,
  BsLockFill,
  BsFillEyeFill,
  BsFillEyeSlashFill,
} from "react-icons/bs";

import AuthService from "../../../services/authService";
import { Login } from "../../../models/auth.models";
import axios from "axios";
import { toast } from "react-toastify";

class LoginComponent extends Component {
  constructor(props: any) {
    super(props);
  }

  state = {
    email: "",
    password: "",
    showPassword: false,
  };

  onEmailChange = (event: any) => {
    this.setState({
      email: event.target.value,
    });
  };

  onPasswordChange = (event: any) => {
    this.setState({
      password: event.target.value,
    });
  };

  onPasswordSatatusChange = (status: boolean) => {
    this.setState({
      showPassword: status,
    });
  };

  submitForm = () => {
    console.log(this.state);
    const loginData: Login = {
      email: this.state.email,
      password: this.state.password,
    };

    AuthService.login(loginData)
      .then((data) => {
        console.log(data);
        toast.success("Login success!");
      })
      .catch((error) => {
        console.log(error);
        if (error.response.data.error.message) {
          toast.error(error.response.data.error.message);
        }
      });
  };

  render() {
    const { email, password, showPassword } = this.state;

    return (
      <div className="login">
        <Form>
          <div className="login__title">Login</div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="login__label">Email</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <BsPersonCircle />
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Email"
                value={email}
                onChange={($event) => this.onEmailChange($event)}
              />
            </InputGroup>
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>

          <Form.Group
            className="mb-3 login__password"
            controlId="formBasicPassword"
          >
            <Form.Label className="login__label">Password</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <BsLockFill />
              </InputGroup.Text>
              <Form.Control
                type={!showPassword ? "password" : "text"}
                placeholder="Password"
                value={password}
                onChange={($event) => this.onPasswordChange($event)}
              />
              <div
                className="login__password--icon"
                onClick={() => this.onPasswordSatatusChange(!showPassword)}
              >
                {!showPassword ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
              </div>
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>
          <Button
            type="button"
            className="login__btn"
            onClick={() => this.submitForm()}
          >
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

export default LoginComponent;
