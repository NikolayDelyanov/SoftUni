function tseamAccount(arr) {

  let firstCurrentCommand = arr[0];
  firstCurrentCommand = firstCurrentCommand.split(' ');
  let currentCommand = arr.shift();
  let newArr = [];
  newArr.push(firstCurrentCommand);

  while (currentCommand !== "Play!") {

    currentCommand = currentCommand.split(" ");

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < firstCurrentCommand.length; j++) {

        if (currentCommand[i] === "Install") {

          break;
        }

        if (currentCommand[i] === "Uninstall") {

          if (currentCommand[i + 1] === firstCurrentCommand[j]) {

            firstCurrentCommand.splice(j, 1);
            break;
          }
        }
        if (currentCommand[i] === "Update") {

          if (currentCommand[i + 1] === firstCurrentCommand[j]) {

            newArr.push(firstCurrentCommand[j]);
            firstCurrentCommand.splice(j, 1);
            break;
          }
        }
        if (currentCommand[i] === "Expansion") {

          firstCurrentCommand.push(currentCommand[i + 1].split(':').join('   '));
          break;

        }
      }
    }


    currentCommand = arr.shift();

  }
  console.log(newArr.join(' '));

}
tseamAccount(['CS WoW Diablo',

  'Install LoL',

  'Uninstall WoW',

  'Update Diablo',

  'Expansion CS-Go',

  'Play!']);

console.log('------------');

function tseamAccount(arr) {
  let account = arr.shift().split(' ');

  while (true) {

    let [command, game] = arr.shift().split(' ');

    if (command === 'Play!') {
      break;
    }

    if (command === "Install") {
      if (!account.includes(game)) {
        account.push(game);
      }
    }

    else if (command === "Uninstall") {
      if (account.includes(game)) {
        let gameIndex = account.indexOf(game);
        account.splice(gameIndex, 1);
      }
    }
    else if (command === "Update") {
      if (account.includes(game)) {
        let gameIndex = account.indexOf(game);
        account.splice(gameIndex, 1);
        account.push(game);
      }
    }

    else if (command === "Expansion") {
      let originalGame = game.split('-')[0];
      if (account.includes(originalGame)) {
        let expansionGame = game.split('-')[0] + ':' + game.split('-')[1];
        let gameIndex = account.indexOf(originalGame);
        account.splice(gameIndex + 1, 0, expansionGame)
      }
    }

  }
  console.log(account.join(' '));

}
tseamAccount(['CS WoW Diablo',

  'Install LoL',

  'Uninstall WoW',

  'Update Diablo',

  'Expansion CS-Go',

  'Play!']);