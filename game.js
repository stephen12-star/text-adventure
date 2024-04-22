const textElement = document.getElementById('text');
const image = document.getElementById('illustration');
const optionButtonsElement = document.getElementById('option-buttons');

function startGame() {
  state = {};
  showTextNode(1);
}

const textNodes = [
  {
    id: 1,
    text: 'As they got closer to their summer get away you decide to look out the window.',
    imgsrc: "bus1.jpg",
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
    imgsrc: "qqqc.jpg",
    options: [
      {
        text: 'Agree to wander.',
        nextText: 3
      },

      {
        text: 'Get directions.',
        nextText: 50
      },
    ]


  },
  {
    id: 3,
    text: 'Henry leads the group of this journey, they follow the street through a small shopping center.',
    imgsrc: "store1.jpg",
    options: [
      {
        text: 'Go inside',
        nextText: 5
      },
    ]
  },
  {
    id: 5,
    text: 'Once they got inside they each searched the store for any food, maps, or signs of people.',
    imgsrc: "storein.jpg",
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
        text: 'henry Guards the door',
        nextText: 6
      }
    ]
  },
  {
    id: 4,
    text: 'You found a pile of rats on the floor.',
    imgsrc: "rats.jpg",
    options: [
      {
        text: 'Turn back',
        nextText: 20
      },
      {
        text: 'Scare rats off',
        nextText: 8
      }
    ]
  },

  {
    id: 20,
    text: 'You show off your sword to everyone until you cant find henry',
    options: [
      {
        text: 'Look in the store for henry.',
        nextText: 7
      }
    ]
  },

  {
    id: 5,
    text: 'but you could not find any items, just a bunch of empty cans and broken glasses',
    imgsrc: "bottles.jpg",
    options: [
      {
        text: 'go back to henry ',
        nextText: 6
      }
    ]
  },
  {
    id: 6,
    text: ' In the process of guarding the door with herny an old woman appears in front of the door telling you about some mysterious entity but you decide to not give F***',
    imgsrc: "old.jpg",
    options: [
      {
        text: 'tell her to leave',
        nextText: 9
      },

    ]
  },
  {
    id: 9,
    text: 'She begins mumbling a strange language before henry takes off running.',
    imgsrc: "run.jpg",
    options: [
      {
        text: ' ignore him running',
        nextText: 7
      },

      {
        text: ' tell others fast',
        nextText: 16
      }
    ]
  },

  {
    id: 7,
    text: 'After some time passed you realize henry is gone so you split up to find him',
    imgsrc: "path.jpg",
    options: [
      {
        text: ' Take path 1',
        nextText: 17
      },
      {
        text: ' Take path 2',
        nextText: 18
      },
      {
        text: ' Take path 3',
        nextText: 19
      }
    ]
  },

  {
    id: 17,
    text: 'You encounter an Arachne, in order to defeat it you have to think of the best way.',
    imgsrc: "spider.jpg",
    options: [
      {
        text: 'USE THE SWORD YOU FOUND',
        nextText: 82
      },
      {
        text: 'RUN AWAY',
        nextText: 0
      }
    ]
  },


  {
    id: 18,
    text: 'You encounter a vampire, in order to defeat it you have to think of the best way.',
    imgsrc: "vammm.jpg",
    options: [
      {
        text: 'USE THE WOODEN STICK NEXT TO YOU',
        nextText: 82
      },
      {
        text: 'DECIDED TO RUN',
        nextText: 12
      }
    ]
  },


  {
    id: 19,
    text: 'You encounter a shapeshifter, in order to defeat it you have to think of the best way.',
    imgsrc: "goddess.png",
    options: [
      {
        text: 'COVER YOUR EAR',
        nextText: 81
      },
      {
        text: 'USE THE DRAGGER NEXT TO YOU',
        nextText: 80
      }
    ]
  },


  {
    id: 81,
    text: 'COVERING YOUR EAR PREVENTS YOU FROM BEING CONTROLLED',
    imgsrc: "goddess.png",
    options: [
      {
        text: 'USE THE DRAGGER',
        nextText: 82
      },
      {
        text: 'RUN',
        nextText: 0
      }
    ]
  },






  {
    id: 82,
    text: 'VICTORY!, YALL MEET EACH OTHER AND YALL GOT A CLUE SAYING "<I>THERE IS A BIGGER THREAT AHEAD<I>"',
    options: [
      {
        text: 'CONTINUE LOOKING FOR HENRY',
        nextText: 83
      },
      {
        text: 'GIVE UP',
        nextText: 0
      }
    ]
  },





  {
    id: 83,
    text: 'THE PROCESS OF LOOKING OF HENRY A FOGGY STEAM APPEARS IN FRONT OF YOU AND YOU FIND OUT IT WAS THE FINAL BOSS AHEAD',

    options: [
      {
        text: 'USE THE MIRROR',
        nextText: 84
      },
      {
        text: 'USE THE SWORD',
        nextText: 86
      },
      {
        text: 'USE THE DRAGGER',
        nextText: 85
      }
    ]
  },


  {
    id: 85,
    text: 'THE DRAGGER DID NOT WORK,, YOU DIED',
   
    options: [
      {
        text: 'RESTART',
        nextText: -1
      }
    ]
  },




  {
    id: 86,
    text: 'VICTORY',
   
    options: [
      {
        text: 'Congratulations. Play Again.',
        nextText: -1
      }
    ]
  },


  {
    id: 84,
    text: 'TO ACTIVE THE MIRROR YOU HAVE TO KILL A FRIEND',

    options: [
      {
        text: 'KILL A FRIEND',
        nextText: 8
      },
      {
        text: 'GIVE UP',
        nextText: 0
      }
    ]
  },



  {
    id: 80,
    text: 'YOU DIED BECAUSE U NEED TO COVER YOUR EAR FIRST',
    options: [
      {
        text: 'RESTART',
        nextText: -1
      }
    ]
  },






  {
    id: 16,
    text: 'You go inside and tell everyone Henry ran off',
    options: [
      {
        text: 'Say he ran off',
        nextText: 11
      },
      {
        text: 'Say a weird woman scared him off',
        nextText: 12
      }
    ]
  },



  {
    id: 8,
    text: 'After the rats dispersed a sword is revealed.',
    options: [
      {
        text: 'Take sword',
        setState: { Sword: true },
        nextText: 13

      },
      {
        text: 'Leave sword',
        nextText: 14
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
  },
  {
    id: 50,
    text: 'You show off your sword to everyone until you cant find henry',
    options: [
      {
        text: 'Henry is frustrated now, when asking locals for directions Henry decides to yawn.',
        nextText: 51
      }
    ]
  },
  {
    id: 51,
    text: 'The lady asks if he is tired and offers him a drink. When he drinks it he begins to act strange',
    options: [
      {
        text: 'Ask Henry if he is feeling ok.',
        nextText: 52
      },
    ]
  },
  {
    id: 52, 
    text: 'He says his stomach isnt feeling well, we try to look for a hotel to rest at until henry says hes gonna puke. When we turned back to check on him there was no trace of him',
    options: [
      {
        text: 'Tell everyone Henry isnt there anymore.',
        nextText: 53
      }
    ]
  },

  {
    id: 53, 
    text: 'Everyone begins to panic, we retrace our steps but there is no sign of Henry. Sam says to split up but Chris disagrees.',
    options: [
      {
        text: ' Agree to split',
        nextText: 54
      }
    ]
  },










  {
    id: 0,
    text: 'YOU DIED',
    options: [
      {
        text: 'RESTART',
        nextText: -1
      }
    ]
  },
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



