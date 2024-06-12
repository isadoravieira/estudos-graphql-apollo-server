const user = () => {
  return {
    id: "1",
    name: "Abgail"
  }
};

const users = () => {
  return [{
    id: "1",
    name: "Abgail"
  },
  {
    id: "2",
    name: "Evelyn"
  },
  {
    id: "3",
    name: "Jonathan"
  }]
};

export const userResolver = {
  Query: {
    user,
    users
  },
};
