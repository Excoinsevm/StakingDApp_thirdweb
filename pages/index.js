import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { Container, Heading, Flex, SimpleGrid } from "@chakra-ui/react";
import StakeToken from "../components/StakeToken";
import RewardToken from "../components/RewardToken";
import Stake from "../components/Stake";

export default function Home() {
  const address = useAddress();

  if(!address) {
    return (
      <Container maxW={"1200px"}>
        <Flex h={"50vh"} justifyContent={"center"} alignItems={"center"}>
          <Heading>Please Connect a Wallet</Heading>
        </Flex>
      </Container>
    )
  }

  return (
    <Container maxW={"1200px"}>
      <SimpleGrid columns={2} spacing={4}>
        <StakeToken />
        <RewardToken />
      </SimpleGrid>
      <Stake/>
    </Container>
  );
}
