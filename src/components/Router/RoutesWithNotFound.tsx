import { FC } from "react";
import { Route, Routes } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

export const RoutesWithNotFound: FC<Props> = ({ children }) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
};
