import React from "react";
import { cn } from "../../lib/utils";

const Button = ({
  className,
  title,
  icon,
}: {
  className: string;
  title: string;
  icon?: React.ReactNode;
}) => {
  return (
    <button
      className={cn(
        "px-8 py-4 rounded-full font-semibold text-white tracking-normal transform transition-colors duration-200 flex gap-3",
        className
      )}
    >
      {icon && icon}
      {title}
    </button>
  );
};

export default Button;
