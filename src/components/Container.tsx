// import { forwardRef } from 'react'
import clsx from "clsx";

interface Props {
  className: string;
  children: React.ReactNode;
}

export const Container = ({ className, children, ...props }: Props) => {
  return (
    <div className={clsx("px-8 xl:px-0", className)} {...props}>
      <div className="mx-auto w-full max-w-7xl lg:px-8">{children}</div>
    </div>
  );
};
