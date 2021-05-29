import React, { useState } from "react";
import NetworkConnection from "_utils/NetworkConnection";
import Error from "_components/common/Error";
import { Container } from "_styles/RootView";
import Title from "_components/common/Header";
import Search from "_components/common/Search";
import SearchList from "_components/Search/SearchList";
import { apple } from "../../json/apple";

const SearchScreen = () => {
  const [search, setSearch] = useState("");

  let network = NetworkConnection();

  if (network === false) {
    return <Error network={true} />;
  }

  return (
    <Container>
      <Title title={"Search"} type="title" />
      <Search
        placeholder={"Browse News"}
        value={search}
        onChangeText={(text) => setSearch(text)}
      />
      <SearchList data={apple.articles} />
    </Container>
  );
};

export default SearchScreen;
