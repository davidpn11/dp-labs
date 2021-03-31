import Head from "next/head";
import { PageContainer } from "../styles/global";
import { Button, GhostButton } from "@dp-labs/ui-components/dist";

export default function Home() {
  return (
    <PageContainer>
      <h1>Hello</h1>
      <Button variant="primary">Click</Button>
      <Button variant="success">Click</Button>
      <Button variant="warning">Click</Button>
      <GhostButton>Click</GhostButton>
    </PageContainer>
  );
}
