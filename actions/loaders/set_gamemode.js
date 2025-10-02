export default (actionData) => {
  let sequence = [];

  if (actionData.gamemode) {
    switch (actionData.gamemode) {
      case "adventure":
        sequence.push(["click", { slot: 10 }]);
        break;
      case "survival":
        sequence.push(["click", { slot: 10 }]); sequence.push(["click", { slot: 10 }])
        break;
      case "creative":
        sequence.push(["click", { slot: 10 }]); sequence.push(["click", { slot: 10 }]); sequence.push(["click", { slot: 10 }])
        break;
    }
  }

  return ["Set Gamemode", sequence];
};
