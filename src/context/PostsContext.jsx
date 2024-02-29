import { createContext, useContext, useState } from 'react';

import { createRandomPost } from '../utils/createRandomPost';

export const PostsContext = createContext();

const PostsPovider = ({ children }) => {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost()),
  );

  return (
    <PostsContext.Provider value={[posts, setPosts]}>
      {children}
    </PostsContext.Provider>
  );
};

export default PostsPovider;

export function usePosts(searchQuery) {
  const [posts, setPosts] = useContext(PostsContext);

  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase()),
        )
      : posts;

  return { searchedPosts, setPosts };
}
