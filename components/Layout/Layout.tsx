import { PublicEnvScript } from "next-runtime-env";
import Head from "next/head";
import { FC, ReactNode } from "react";

interface ITestProps {
  children: ReactNode;
}

export const Layout: FC<ITestProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Page with PublicEnvScript</title>
        <PublicEnvScript />
      </Head>
      <header>Header</header>
      <div>{children}</div>
      <footer>Footer</footer>
    </>
  );
};
