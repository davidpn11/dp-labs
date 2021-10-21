import Head from "next/head";
import { PageContainer } from "../styles/global";
import { Button, GhostButton } from "@dp-labs/ui-components/dist";
import { PageHeader } from "../components/header";

export default function Home() {
  return (
    <PageContainer>
      <PageHeader />
    </PageContainer>
  );
}
