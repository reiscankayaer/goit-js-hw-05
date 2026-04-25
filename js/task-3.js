const sortByDescendingFriendCount = (users) => {
  // b - a yapısı azalan (descending) sıralama sağlar
  return users.toSorted((a, b) => b.friends.length - a.friends.length);
};

// Test
console.log(sortByDescendingFriendCount([
  { name: "Moore Hensley", friends: ["Sharron Pace"] },
  { name: "Sharlene Bush", friends: ["Briana Decker", "Sharron Pace"] },
  { name: "Ross Vazquez", friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"] },
  { name: "Elma Head", friends: ["Goldie Gentry", "Aisha Tran"] },
  { name: "Carey Barr", friends: ["Jordan Sampson", "Eddie Strong"] },
  { name: "Blackburn Dotson", friends: ["Jacklyn Lucas", "Linda Chapman"] },
  { name: "Sheree Anthony", friends: ["Goldie Gentry", "Briana Decker"] }
]));  