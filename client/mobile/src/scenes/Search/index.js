import React, { useState } from "react";
import NetworkConnection from "_utils/NetworkConnection";
import Error from "_components/common/Error";
import { Container, RootSafeArea } from "_styles/RootView";
import Title from "_components/common/Header";
import Search from "_components/common/Search";
import SearchList from "_components/Search/SearchList";
import NoData from "_components/common/NoData";

const SearchScreen = () => {
  const [search, setSearch] = useState("");

  let network = NetworkConnection();

  if (network === false) {
    return <Error network={true} />;
  }

  return (
    <RootSafeArea>
      <Container>
        <Title title={"Search"} type="title" />
        <Search
          placeholder={"Browse News"}
          value={search}
          onChangeText={(text) => setSearch(text)}
        />

        <NoData />
        {/* {!Array.isArray(data.topHeadlines) || data.topHeadlines.length === 0 ? (
          <NoData />
        ) : (
          <SearchList data={ign.articles} />
        )} */}
      </Container>
    </RootSafeArea>
  );
};

export default SearchScreen;
