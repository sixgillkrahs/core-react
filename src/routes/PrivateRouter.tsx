import React, { Fragment } from "react";

const PrivateRouter = ({ children }: { children: React.ReactNode }) => {
  return <Fragment>{children}</Fragment>;
};

export default PrivateRouter;
