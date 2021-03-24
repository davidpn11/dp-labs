import Head from "next/head";
import { PageContainer } from "../styles/global";
import { Button } from "@dp-labs/ui-components/dist";

export default function Home() {
  return (
    <PageContainer>
      <h1>Hello</h1>
      <Button variant="primary">Click</Button>
    </PageContainer>
  );
}
