import React from "react";
import { store } from "../../../store/store";
import { ApiService } from "../../../core";

class DashboardComponent extends React.Component {
  render() {
    console.log(store.getState());
    ApiService.get("/welcome", {}).then((data) => console.log(data));

    return <div>Dashboard</div>;
  }
}

export default DashboardComponent;
