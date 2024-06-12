const post = () => {
  return {
    id: "1",
    title: "Unidos do Pacaembu"
  }
};

const posts = () => {
  return [{
    id: "1",
    title: "Unidos do Pacaembu"
  },
  {
   id: "2",
    title: "Amantes da literatura"
  },
  {
    id: "3",
    title: "Bora jogar stardeew valey!"
  }]
};

export const postResolver = {
  Query: {
    post,
    posts
  },
};
