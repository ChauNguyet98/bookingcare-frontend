import { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import {
  BsFillEyeFill,
  BsFillEyeSlashFill,
  BsLockFill,
  BsPersonCircle,
} from "react-icons/bs";

import { ConnectedProps, connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Login } from "../../../models/auth.models";
import { AuthService } from "../../../services/authService";
import { LoginAction } from "../../../store/action";
import { SYSTEM_CONST } from "../../../utils";

class LoginComponent extends Component<Props> {
  constructor(props: Props) {
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

  onPasswordStatusChange = (status: boolean) => {
    this.setState({
      showPassword: status,
    });
  };

  submitForm = () => {
    const loginData: Login = {
      email: this.state.email,
      password: this.state.password,
    };

    AuthService.login(loginData)
      .then((data) => {
        this.props.loginSuccess(data.data.data.token);
        toast.success("Login success!");
      })
      .catch((error) => {
        if (error.response.data.error.message) {
          toast.error(error.response.data.error.message);
        }
      });
  };

  render() {
    const { email, password, showPassword } = this.state;

    return (
      <div className="login">
        {this.props.token && (
          <Navigate
            to={
              "/" +
              SYSTEM_CONST.ROUTE.ADMIN.ADMIN +
              "/" +
              SYSTEM_CONST.ROUTE.ADMIN.DASHBOARD
            }
            replace={true}
          />
        )}

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
                onClick={() => this.onPasswordStatusChange(!showPassword)}
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

const mapState = (state: any) => {
  return {
    // isOn: state.isOn
    token: state.login.token,
  };
};

const mapDispatch = (dispatch: any) => {
  return {
    // toggleOn: () => ({ type: 'TOGGLE_IS_ON' }),
    loginSuccess: (token: string) => dispatch(LoginAction.LoginSuccess(token)),
  };
};

const connector = connect(mapState, mapDispatch);

// The inferred type will look like:
// {isOn: boolean, toggleOn: () => void}
type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

export default connector(LoginComponent);
