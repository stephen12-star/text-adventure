const textElement = document.getElementById('text');
const image = document.getElementById('illustration');
const optionButtonsElement = document.getElementById('option-buttons');

let state = {};

function startGame() {
  state = {};
  showTextNode(1);
}

const textNodes = [
  {
    id: 1,
    text: 'As they got closer to their summer get away the bus catches a flat tire.',
    imgsrc: "TOWN.jpg",
    options: [
      {
        text: 'Detour through town',
        nextText: 2
      },

    ]

  },

  {
    id: 2,
    text: 'After regrouping with your friends, Henry asks to wander the town but the others want to talk to locals for directions.',
    options: [
      {
        text: 'Agree to wander.',
        nextText: 3
      },

      {
        text: 'Get directions.',
        nextText: 4
      },
    ]


  },
  {
    id: 3,
    text: 'Henry leads the group of this journey, they follow the street through a small shopping center.',
    imgsrc: "vammm.jpg",
    options: [
      {
        text: 'Go inside',
        nextText: 5
      },
      {
        text: 'Go around the store.',
        nextText: 6
      },
    ]
  },
  {
    id: 5,
    text: 'Once they got inside they each searched the store for any food, maps, or signs of people.',
    options: [
      {
        text: 'Look in the aisles.',
        nextText: 4
      },
      {
        text: 'Search the produce section.',
        nextText: 5
      },
      {
        text: 'Guard the door',
        nextText: 6
      }
    ]
  },
  {
    id: 4,
    text: 'After leading us through',
    imgsrc: "door 1.jpg",
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 5,
    text: 'Without any money to buy a room you break into the nearest inn and fall asleep. After a few hours of sleep the owner of the inn finds you and has the town guard lock you in a cell.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 6,
    text: 'You wake up well rested and full of energy ready to explore the nearby castle.',
    options: [
      {
        text: 'Explore the castle',
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    text: 'While exploring the castle you come across a horrible monster in your path.',
    options: [
      {
        text: 'Try to run',
        nextText: 8
      },
      {
        text: 'Attack it with your sword',
        requiredState: (currentState) => currentState.sword,
        nextText: 9
      },
      {
        text: 'Hide behind your shield',
        requiredState: (currentState) => currentState.shield,
        nextText: 10
      },
      {
        text: 'Throw the blue goo at it',
        requiredState: (currentState) => currentState.blueGoo,
        nextText: 11
      }
    ]
  },
  {
    id: 8,
    text: 'Your attempts to run are in vain and the monster easily catches.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 9,
    text: 'You foolishly thought this monster could be slain with a single sword.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text: 'The monster laughed as you hid behind your shield and ate you.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'You threw your jar of goo at the monster and it exploded. After the dust settled you saw the monster was destroyed. Seeing your victory you decide to claim this castle as your and live out the rest of your days there.',
    options: [
      {
        text: 'Congratulations. Play Again.',
        nextText: -1
      }
    ]
  }
]


const img = document.getElementById('iwe')

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
  textElement.innerText = textNode.text;
  
  let i = textNode.imgsrc
  console.log(i)
  if (i) img.src = i

  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button');
      button.innerText = option.text;
      button.classList.add('btn');
      button.addEventListener('click', () => selectOption(option));
      optionButtonsElement.appendChild(button);
    }
  });
}

function showImage(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
  image.style.backgroundImage = "url(" + textNode.img + ")";
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state);
}

function selectOption(option) {
  const nextTextNodeId = option.nextText;
  if (nextTextNodeId <= 0) {
    return startGame();
  }
  state = Object.assign(state, option.setState);
  console.log('állapot: ' + JSON.stringify(state));

  showTextNode(nextTextNodeId);
  showImage(nextTextNodeId);
}

startGame();



