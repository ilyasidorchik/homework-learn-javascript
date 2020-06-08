const messages = [
  { text: 'Hello', from: 'John' },
  { text: 'How goes?', from: 'John' },
  { text: 'See you soon', from: 'Alice' },
];

const readMessages = new WeakSet();
const messageI = 0;

readMessages.add(messages[messageI]);

console.log(
  `Read message ${messageI}: ${readMessages.has(messages[messageI])}`
);

messages.shift();

console.log(
  `Read message ${messageI}: ${readMessages.has(messages[messageI])}`
);
