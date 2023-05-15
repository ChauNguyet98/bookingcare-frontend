import React from "react";

class DashboardComponent extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    // ApiService.get("/users").then((data) => console.log(data));

    return (
      <>
        <div className="w-full h-full bg-white rounded-lg shadow-md">
          Dashboard
        </div>
      </>
    );
  }
}

export default DashboardComponent;
