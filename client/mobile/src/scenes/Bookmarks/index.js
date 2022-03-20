import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import NetworkConnection from "_utils/NetworkConnection";
import Loader from "_components/common/Loader";
import Error from "_components/common/Error";
import Title from "_components/common/Header";
import Search from "_components/common/Search";
import NoData from "_components/common/NoData";
import BookmarkList from "_components/Bookmark/BookmarkList";
import { Container, RootSafeArea } from "_styles/RootView";

const BOOKMARKS = gql`
  query getBookmarks {
    getBookmarks {
      id
      author
      title
      description
      url
      urlToImage
      publishedAt
      content
    }
  }
`;
const BookmarksScreen = () => {
  const [search, setSearch] = useState("");

  const { loading, error, data, refetch } = useQuery(BOOKMARKS);

  let network = NetworkConnection();

  if (network === false) {
    return <Error network={true} />;
  }

  if (loading)
    return (
      <RootSafeArea>
        <Container>
          <Title title={"Bookmark"} type="title" />
          <Loader />
        </Container>
      </RootSafeArea>
    );

  if (error)
    return (
      <RootSafeArea>
        <Container>
          <Title title={"Bookmark"} type="title" />
          <Error error={error} />
        </Container>
      </RootSafeArea>
    );

  return (
    <RootSafeArea>
      <Container>
        <Title title={"Bookmark"} type="title" />
        <Search
          placeholder={"Browse News"}
          value={search}
          onChangeText={(text) => setSearch(text)}
        />

        {!Array.isArray(data.getBookmarks) || data.getBookmarks.length === 0 ? (
          <NoData />
        ) : (
          <BookmarkList data={data.getBookmarks} />
        )}
      </Container>
    </RootSafeArea>
  );
};

export default BookmarksScreen;
