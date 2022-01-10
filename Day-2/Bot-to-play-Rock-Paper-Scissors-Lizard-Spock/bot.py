import random
print('Won :D') if(random.randint(0,4) not in [[1,3],[0,4],[2,3],[1,4],[0,2]][int(input('Choose any -\n0. Rock\n1. Paper\n2. Scissors\n3. Lizard\n4. Spock : '))]) else print('Lost :(')
