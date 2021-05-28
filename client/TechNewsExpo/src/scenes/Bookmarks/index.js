import React from "react";
import NetworkConnection from "_utils/NetworkConnection";
import Error from "_components/common/Error";
import { Container } from "_styles/RootView";
import Title from "_components/common/Header";

const BookmarksScreen = () => {
  let network = NetworkConnection();

  if (network === false) {
    return <Error network={true} />;
  }

  return (
    <Container>
      <Title title={"Bookmark"} type="title" />
    </Container>
  );
};

export default BookmarksScreen;
