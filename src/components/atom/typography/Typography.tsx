import React from "react";
import TypographyPropsType from "./type";

const Typography = ({
  tag = "p",
  text = "Text not provided",
  classes,
  children,
  style,
  ariaLabel,
  ariaLabelledBy,
}: TypographyPropsType) => {
  return React.createElement(
    tag,
    {
      className: classes,
      style: style,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
    },
    <>
      {text},{children}
    </>
  );
};

export default Typography;
