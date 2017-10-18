
const questionData = {
  count: 0,
  question: [
    {question: `https://k42.kn3.net/CF42609C8.jpg`,
      type: `paint`
    },
    {question: `https://i.imgur.com/1KegWPz.jpg`,
      type: `photo`},

    {question: `https://k42.kn3.net/D2F0370D6.jpg`,
      type: `paint`},

    {question: `https://k32.kn3.net/5C7060EC5.jpg`,
      type: `paint`},

    {question: `https://i.imgur.com/DKR1HtB.jpg`,
      type: `photo`},

    {question: `https://i.imgur.com/DiHM5Zb.jpg`,
      type: `photo`}
  ]
};

export default () => {
  if (questionData.count >= questionData.question.length) {
    questionData.count = 0;
  }
  return questionData.question[questionData.count++];
};
