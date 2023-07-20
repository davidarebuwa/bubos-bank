import React from "react";
import "./styles.css";

function Description({logo, title, description}) {
  return (
    <div class="split-cover-section">
      <div class="split-cover-section-left">
        <img
          src={logo}
          alt="split-cover-left"
          loading="lazy"
          class="split-cover-image-left"
        />
      </div>
      <div class="split-cover-section-right">
        <div class="split-cover-section-right-content">
          <div class="content-title">{title}</div>
          <div class="content-description">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
