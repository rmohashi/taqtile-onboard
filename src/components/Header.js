import React from 'react';

const header = (props) => {
  return (
    <div>
      <h1 style={headerStyle}>{props.children}</h1>
      <hr style={lineStyle} />
    </div>
  );
}

const headerStyle = {
  "textAlign": "left",
  "textTransform": "uppercase",
  "fontSize": "24px",
  "color": "#555555",
  "marginBottom": "0px",
  "paddingLeft": "10px",
}

const lineStyle = {
  "marginBottom": "15px",
}

export default header;
