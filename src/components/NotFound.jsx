import { Fragment } from "react";
import Header from "./Header";

const NotFound = () => {
  return (
    <Fragment>
      <Header />
      <div className="not-found">
        <h1>Not Found</h1>
      </div>
    </Fragment>
  );
};

export default NotFound;
