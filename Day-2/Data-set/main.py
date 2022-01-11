import matplotlib.pyplot as plt
from matplotlib.pyplot import figure
import csv

figure(figsize=(12, 8), dpi=100)

x = []
y = []
days = 0

with open('train_data.csv', 'r') as csvfile:
    n = 0
    lines = csv.reader(csvfile, delimiter=',')
    for row in lines:
        n = n + 1
        if(n < 25):
            continue
#         print(float(row[2])*100)
        n = 0
        days = days + 1
        x.append(days)
        y.append(float(row[2])*100)


plt.plot(x, y, color='g', linestyle='dashed',
         marker='o', label="Stock price")

plt.xticks(rotation=25)
plt.xlabel('Day')
plt.ylabel('Price')
plt.title('Stock price', fontsize=20)
plt.grid()
plt.legend()
plt.show()
