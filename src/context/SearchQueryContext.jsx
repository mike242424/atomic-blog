import { createContext, useContext, useState } from 'react';

export const SearchQueryContext = createContext();

const SearchQueryProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SearchQueryContext.Provider value={[searchQuery, setSearchQuery]}>
      {children}
    </SearchQueryContext.Provider>
  );
};

export default SearchQueryProvider;

export function useSearchQuery() {
  const [searchQuery, setSearchQuery] = useContext(SearchQueryContext);

  return [searchQuery, setSearchQuery];
}
