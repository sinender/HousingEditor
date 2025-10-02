export default (actionData) => {
  let sequence = [];

  switch (actionData.weather) {
    case "sunny":
      sequence.push(["click", { slot: 10 }]);
      break;
    case "raining":
      sequence.push(["click", { slot: 10 }]); sequence.push(["click", { slot: 10 }]);
      break;
  }

  return ["Set Player Weather", sequence];
};
