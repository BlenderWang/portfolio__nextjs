import React from "react";

/**
 *  UI: border magic from tailwind css btns
 *  Link: https://ui.aceternity.com/components/tailwindcss-buttons
 *
 *  change border radius to rounded-lg
 *  add margin of md:mt-10
 *  remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
 */
const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button className="relative inline-flex h-12 justify-center overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="-mr-[14px] inline-flex h-full w-full flex-1 cursor-pointer items-center justify-center gap-2 rounded-full bg-slate-950 px-9 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;

{
  /* <button
  className="animate-shimmer focus:ring-offset-highlight inline-flex h-12 items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(150deg,#43FFFF,35%,#CBACF9,55%,#CBACF9)] bg-[length:200%_100%] p-[2px] font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
  onClick={handleClick}
>
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span
    className={`inline-flex h-full w-full cursor-pointer items-center justify-center gap-2
         rounded-full bg-primary px-8 text-sm font-medium text-white backdrop-blur-3xl ${otherClasses}`}
  >
    {position === "left" && icon}
    {title}
    {position === "right" && icon}
  </span>
</button> */
}
