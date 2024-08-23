def greeting():
    print('Hi, welcome to the Quiz')


greeting()

quizzings = ('A) What is the circumference of the earth in miles?:',
            'B) What is the speed of light in mph?:',
             'C) What is the speed of sound in mph?:',
             'D) How Far is the moon from the earth in miles?:',
             'E) What is a Supergiant?:')

choices = (('1. 24,901 miles','2. 100,00 miles','3. 8000 miles' ),
            ('1. 670,616,629 mph', '2. 200,000 mph', '3. 1000mph'),
           ('1. 500 mph', '2. 767 mph', '3 900m mph'),
              ('1. 50,000 miles','2. 100,00 miles','3. 238 855 miles' ),
            ('1. A planet', 'An asteroid', 'A star'))

answers = ('1','1','2','3','3')
guesses = []
score = 0
quizzings_num = 0

def choose():

 for quizzing in quizzings:
  print('____________________________')
  print(quizzing)
  for choice in choices[quizzings_num]:
   print(choice)
choose()
quizzings_num =0




#guess =input('Enter (1, 2, 3 :)').upper()
#guesses.append(guess)
#if guess == answers[quizzings_num]:
 #score += 1
 #print('THAT IS THE RIGHT ANSWER!')
#else:
 #print('THAT IS THE WRONG ANSWER!')
#print(f'{answers[quizzings_num]} is the correct answer')
quizzings_num += 1