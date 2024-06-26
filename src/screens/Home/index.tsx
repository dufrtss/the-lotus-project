import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

import LogoIcon from "../../assets/lotus-logo.svg";
import CustomSafeAreaView from "../../components/CustomSafeAreaView";
import { LogoWrapper } from "./styles";

interface HomeProps {}

const Home = (props: HomeProps) => {
  return (
    <CustomSafeAreaView>
      <LogoWrapper>
        <LogoIcon />
      </LogoWrapper>
      <Text>Home</Text>
    </CustomSafeAreaView>
  );
};

export default Home;
