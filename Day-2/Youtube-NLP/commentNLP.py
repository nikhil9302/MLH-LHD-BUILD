from youtube_comment_scraper_python import *
from flair.models import TextClassifier
from flair.data import Sentence
youtube.open("https://www.youtube.com/watch?v=C5duQyX7Gec")
response=youtube.video_comments()
data=response['body']
comments = []
for com in data:
    comments.append(com['Comment'])

classifier = TextClassifier.load('en-sentiment')
analysis = []
for i in range(0,10):
    sen = Sentence(comments[i])
    classifier.predict(sen)
    analysis.append(sen.labels[0].value)
print("Number of positive comments:", analysis.count('POSITIVE'))
print("Number of negative comments:", analysis.count('NEGATIVE'))
if(analysis.count('POSITIVE')>analysis.count('NEGATIVE')):
    print("The video has positive feedback")
else:
    print("The video has negative feedback or your viewers are toxic")

