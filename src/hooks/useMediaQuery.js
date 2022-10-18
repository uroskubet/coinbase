/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

const isQueryMatching = (query) => window.matchMedia(query).matches;

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(isQueryMatching(query));

  const setQueryMatch = () => {
    if (isQueryMatching(query) !== matches) setMatches(isQueryMatching(query));
  };

  useEffect(() => {
    window.addEventListener('resize', setQueryMatch);
    return () => window.removeEventListener('resize', setQueryMatch);
  }, [matches, query, setQueryMatch]);

  return matches;
};

export default useMediaQuery;
