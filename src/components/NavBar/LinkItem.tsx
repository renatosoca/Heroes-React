import { FC } from "react";
import { NavLink } from "react-router-dom";

interface Props {
  link: string;
  text: string;
}

export const LinkItem: FC<Props> = ({ link, text }) => {
  return (
    <NavLink
      to={link}
      end
      className={({ isActive }) =>
        `rounded-lg${isActive ? " bg-slate-300 " : ""} px-4 py-1`
      }
    >
      {text}
    </NavLink>
  );
};
