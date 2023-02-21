import { Link } from "react-router-dom";

function Button({
  to,
  href,
  primary = false,
  outline = false,
  leftIcon = false,
  children,
  className = false,
  onClick,
  ...passProps
}) {
  let Component = "button";

  const props = {
    onClick,
    ...passProps,
  };
  if (to) {
    props.to = to;
    Component = Link;
  } else if (href) {
    props.href = href;
    Component = "a";
  }

  const classPrimary = primary
    ? " bg-primary min-h-[36px] text-white rounded-[4px] hover:bg-[#ef2950] justify-center min-w-[100px] "
    : "";
  const classOutline = outline
    ? " min-w-[110px] min-h-[36px] rounded-[2px] border-[1px] border-solid border-[#1618231f] hover:bg-grayLight justify-center "
    : "";
  const classClassName = className ? className : "";
  const classes =
    "flex items-center  bg-white  text-16 font-bold " +
    classPrimary +
    classOutline +
    classClassName;
  return (
    <Component className={classes} {...props}>
      {leftIcon && <span className="mr-[8px]">{leftIcon}</span>}
      <span className="flex items-center gap-x-[8px]">{children}</span>
    </Component>
  );
}

export default Button;
