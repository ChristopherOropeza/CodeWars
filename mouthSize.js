// Problem:

/* The wide-mouth frog is particularly interested in the eating habits of other creatures.

He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

When he meets the alligator, it then makes a tiny mouth.

Your goal is to create a complete mouthSize method. This method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide. */

// Solution:

function mouthSize(animal) {
  return animal.toLowerCase() === 'alligator' ? 'small' : 'wide';
}
