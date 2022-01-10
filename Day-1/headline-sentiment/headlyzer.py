from flair.models import TextClassifier
from flair.data import Sentence

classifier = TextClassifier.load('en-sentiment')
sentence = input()
sen = Sentence(sentence)
classifier.predict(sen)

# printed sentence with predicted label "POSITIVE" or "NEGATIVE"
print(f'The sentence "{sentence}" is: Label:', sen.labels[0].value, " Score:", sen.labels[0].score)
