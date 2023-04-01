import { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { BsPersonCircle } from "react-icons/bs";

class Login extends Component {
  constructor(props: any) {
    super(props);
  }

  state = {
    userName: "",
    password: "",
  };

  onUserNameChange = (event: any) => {
    this.setState({
      userName: event.target.value,
    });
  };

  onPasswordChange = (event: any) => {
    this.setState({
      password: event.target.value,
    });
  };

  submitForm = () => {
    console.log(this.state);
  };

  render() {
    const { userName, password } = this.state;

    return (
      <div className="login">
        <Form>
          <div className="login__title">Login</div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="login__label">Email address</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <BsPersonCircle />
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="UserName"
                value={userName}
                onChange={($event) => this.onUserNameChange($event)}
              />
            </InputGroup>
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="login__label">Password</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={($event) => this.onPasswordChange($event)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>
          <Button
            type="submit"
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

export default Login;
