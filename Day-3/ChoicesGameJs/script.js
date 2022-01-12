const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}


const textNodes = [
  {
    id: 1,
    text: 'You realise there is no one in the campus.',
    options: [
      {
        text: 'Stay inside campus',
        setState: { stay: true },
        nextText: 2
      },
      {
        text: 'Leave the campus',
        setState: { nostay: true },
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: 'You "explore" around and observe things in search for answers and find few things',
    options: [
        {
            text: 'Drink the liquid from a flask in Lab-3',
            requiredState: (currentState)=>currentState.stay,
            setState: { potion: true},
            nextText: 3
        },
        {
            text: 'Pour the liquid from a flask in Lab-3 in the sink to make chaya in the Flask',
            requiredState: (currentState)=>currentState.stay,
            setState: { potion: false},
            nextText: 4
        },
        {
            text: 'Pick up the colorful mushroom in the forest',
            requiredState: (currentState)=>currentState.nostay,
            setState: { mushroom: true},
            nextText: 5
        },
        {
            text: 'Eat the mushroom in the forest',
            requiredState: (currentState)=>currentState.nostay,
            setState: { death: true},
            nextText: 5
        }
    ]
  },
  {
    id: 3,
    text: 'You shrink in size and fall into the sink. You find all iiitk mates there and get stuck in the sink forever cause there is no sins in this universe to help you out of the sink. All theres left is the chaos of your sins',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 4,
    text: 'You notice tiny version of your iiitk mates flowing out the sink. They slowly get back to their normal size. Lab-3 is shut forever and iiitk is functional again as if nothing happened',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
      id: 5,
      text: 'You come across one of the witches who live in that forest',
      options:[
        {
            text: 'Give mushroom to the witch',
            requiredState: (currentState)=>currentState.mushroom,
            setState:{witch:true},
            nextText: 6
        },
        {
            text: 'Tease the witch saying u ate the mushroom haha',
            requiredState: (currentState)=>currentState.death,
            setState:{mar: true},
            nextText: 7
        }
      ]
  },
  {
    id: 6,
    text: 'The witch is impressed. You forget about your iiitk mates, marry the witch and live a happy life in the forest',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 7,
    text: 'That was stupid..The witch turns you into mushroom and gobbles u up.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  }
]

startGame()