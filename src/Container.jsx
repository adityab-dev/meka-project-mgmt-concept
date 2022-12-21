import React from "react";

import "./Container.css";

function Container() {
  return (
    <div className="container">
      <div className="container-header">
        <div className="container-header-left">
          <div>dot</div>
          <div>design system</div>
        </div>

        <div className="container-header-right">
          <div>3dots</div>
        </div>
      </div>

      <div className="container-heading">Hero Section</div>

      <div className="container-content">
        <p>
          Create a design system for a hero section in 2 different variants. Create a simple
          presentation with these components.
        </p>
      </div>

      <div className="container-footer">
        <div>1</div>
        <div>2</div>
      </div>
    </div>
  );
}

export default Container;
