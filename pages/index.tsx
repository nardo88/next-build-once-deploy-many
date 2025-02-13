import { env } from "next-runtime-env";
import { Layout } from "@/components/Layout/Layout";

export default function Home() {
  const foo = env("NEXT_PUBLIC_FOO");
  console.log("foo: ", foo);
  return (
    <>
      <Layout>
        <div>{foo}</div>
      </Layout>
    </>
  );
}
