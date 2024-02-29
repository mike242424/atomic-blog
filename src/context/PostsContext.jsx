import { createContext, useContext, useState } from 'react';

import { createRandomPost } from '../utils/createRandomPost';

const PostsContext = createContext();

const PostsContextProvider = ({ children }) => {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost()),
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [isFakeDark, setIsFakeDark] = useState(false);

  // Derived state. These are the posts that will actually be displayed
  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase()),
        )
      : posts;

  function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }
  return (
    <PostsContext.Provider
      value={{
        searchedPosts,
        searchQuery,
        setSearchQuery,
        onClearPosts: handleClearPosts,
        onAddPost: handleAddPost,
        isFakeDark,
        setIsFakeDark,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export default PostsContextProvider;

export function usePosts() {
  const context = useContext(PostsContext);
  if (context === undefined)
    throw new Error(
      'PostsContext was used outside of the PostsContextProvider',
    );
  return context;
}
