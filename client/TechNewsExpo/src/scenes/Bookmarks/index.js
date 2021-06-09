import React, { useState } from "react";
import NetworkConnection from "_utils/NetworkConnection";
import Error from "_components/common/Error";
import { Container, RootSafeArea } from "_styles/RootView";
import Title from "_components/common/Header";
import Search from "_components/common/Search";
import BookmarkList from "_components/Bookmark/BookmarkList";
import { startup } from "../../json/mockData";

const BookmarksScreen = () => {
  const [search, setSearch] = useState("");

  let network = NetworkConnection();

  if (network === false) {
    return <Error network={true} />;
  }

  return (
    <RootSafeArea>
      <Container>
        <Title title={"Bookmark"} type="title" />
        <Search
          placeholder={"Browse News"}
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
        <BookmarkList data={startup.articles} />
      </Container>
    </RootSafeArea>
  );
};

export default BookmarksScreen;
