import React from "react";

interface Props extends React.ComponentProps<"div"> {}

const Page = (props: Props) => {
  return <div className="wrapper" {...props}></div>;
};

export { Page };
