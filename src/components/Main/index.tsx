import React from "react";

interface Props extends React.ComponentProps<"div"> {}

const Main = ({ children, ...props }: Props) => {
  return (
    <main className="main" {...props}>
      <header className="main-header">
        <h2 className="main-header-h2">feed</h2>
      </header>
      <div className="main-content">{children}</div>
    </main>
  );
};

export { Main };
