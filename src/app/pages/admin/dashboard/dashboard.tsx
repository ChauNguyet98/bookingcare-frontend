import React from "react";
import { store } from "../../../store/store";
import { ApiService } from "../../../core";

class DashboardComponent extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    console.log(store.getState());
    ApiService.get("/users").then((data) => console.log(data));

    return (
      <>
        <div>Dashboard</div>
      </>
    );
  }
}

export default DashboardComponent;
