function useHasSearchedUser(data) {
  if (!data) return false;
  let searchedUser;
  searchedUser = data.find((user) => user.isSearchedUser == true);
  return searchedUser;
}

export default useHasSearchedUser;
