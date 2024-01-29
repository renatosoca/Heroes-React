import { FC } from "react";

interface Props {
  children: React.ReactNode;
}

export const PageLayout: FC<Props> = ({ children }) => {
  return (
    <main className="max-w-[120rem] w-full h-full lg:px-2 mx-auto">
      {children}
    </main>
  );
};
