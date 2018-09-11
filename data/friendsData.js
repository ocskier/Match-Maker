// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
  {
    Name: "Ahmed",Pic: "assets/images/head-2823697_640.jpg",
    Answers: [2,3,2,3,2,3,4,3,4,3]
  },
  {
    Name: "Clara",Pic: "assets/images/beautiful-1274361_640.jpg",
    Answers: [4,3,4,5,6,7,5,4,2,3]
  },
  {
    Name: "Hank",Pic: "assets/images/beard-1845166_640.jpg",
    Answers: [2,1,3,2,1,2,3,2,1,2]
  },
  {
    Name: "John",Pic: "assets/images/black-and-white-1283231_640.jpg",
    Answers: [6,7,6,7,8,7,6,7,8,5]
  },
  {
    Name: "Lisa",Pic: "assets/images/beautiful-2150881_640.jpg",
    Answers: [2,3,4,5,6,7,8,7,6,5]
  },
  {
    Name: "Sheryl",Pic: "assets/images/flower-child-336658_640.jpg",
    Answers: [8,7,6,5,4,3,2,1,2,4]
  },
  {
    Name: "Ronald",Pic: "assets/images/passion-1690965_640.jpg",
    Answers: [4,4,4,4,4,6,6,6,6,6],
  },
  {
    Name: "Lacy",Pic: "assets/images/girl-872149_640.jpg",
    Answers: [3,4,5,6,7,6,5,4,3,4]
  },
  {
    Name: "Eric",Pic: "assets/images/hat-591973_640.jpg",
    Answers: [7,7,7,7,7,7,7,7,7,7]
  },
  {
    Name: "Priscilla",Pic: "assets/images/woman-1209072_640.jpg",
    Answers: [8,7,6,5,6,7,8,2,3,4]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
