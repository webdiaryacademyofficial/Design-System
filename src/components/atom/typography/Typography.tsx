import React from "react";
import TypographyProps from "./type";

const Typography: React.FC<TypographyProps> = ({
  tag = "p",
  text,
  classes,
  children,
  style,
  role,
  ariaLabel,
  ariaLabelledBy,
}) => {
  return React.createElement(
    tag,
    {
      className: classes,
      style: style,
      role: role,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
    },
    <>
      {text}
      {children}
    </>
  );
};

export default Typography;
