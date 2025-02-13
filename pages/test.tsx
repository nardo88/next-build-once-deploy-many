import { Layout } from "@/components/Layout/Layout";
import { env } from "next-runtime-env";

export default function Text() {
  const foo = env("NEXT_PUBLIC_FOO");
  console.log("foo: ", foo);
  return (
    <Layout>
      <div>{foo || "undefined"}</div>
    </Layout>
  );
}
