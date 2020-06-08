export const nameChecker = (currentUser, messageUser) => {
  // message from admin
  if (messageUser === "admin") return 1;
  // own message
  if (messageUser.toLowerCase() === currentUser.toLowerCase()) return 2;
  // messages from other people
  return 3;
};
