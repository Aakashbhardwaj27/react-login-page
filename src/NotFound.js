import React from "react";
import "./index.css";
export default function NotFound() {
  return (
    <div className="container">

      <p>Page not found</p>
      <alert className="notfound">Error 404</alert>
      <alert className="alert-info">Opps!!,we could not find anything relevant ,We will bake it for you next time</alert>
       <a href="/"> Go Back</a>
    </div>
  );
}
