def greeting():
    # Function to print a greeting message at the start of the quiz
    print('Hi, welcome to the Quiz')

greeting()

# Questions for the quiz
quizzings = ('A) What is the circumference of the earth in miles?:',
             'B) What is the speed of light in mph?:',
             'C) What is the speed of sound in mph?:',
             'D) How Far is the moon from the earth in miles?:',
             'E) What is a Supergiant?:')

# Multiple choice options for each question
choices = (('1. 24,901 miles', '2. 100,000 miles', '3. 8000 miles'),
           ('1. 670,616,629 mph', '2. 200,000 mph', '3. 1000 mph'),
           ('1. 500 mph', '2. 767 mph', '3. 900 mph'),
           ('1. 50,000 miles', '2. 100,000 miles', '3. 238,855 miles'),
           ('1. A planet', '2. An asteroid', '3. A star'))

# Correct answers for each question
answers = ('1', '1', '2', '3', '3')

# List to store user guesses
guesses = []

# Initial score
score = 0

# Index to keep track of the current question
quizzings_num = 0

def choose():
    global quizzings_num, score  # Use global to modify the global variables score and quizzings_num
    for quizzing in quizzings:
        print('____________________________')
        print(quizzing)
        # Display choices for the current question
        for choice in choices[quizzings_num]:
            print(choice)
        # Get user's guess
        guess = input('Enter (1, 2, 3): ').strip()
        guesses.append(guess)  # Add guess to guesses list
        if guess == answers[quizzings_num]:  # Check if guess is correct
            score += 1  # Increment score if correct
            print('THAT IS THE RIGHT ANSWER!')
        elif guess is not int:
            raise TypeError('You have to work with the appropriate numbersa')
        else:
            print('THAT IS THE WRONG ANSWER!')
    
        # Display the correct answer
        print(f'{answers[quizzings_num]} is the correct answer')
        quizzings_num += 1  # Move to the next question

choose()  # Call the function to start the quiz

# Print the final score after all questions are answered
print(f'Your final score is {score} out of {len(quizzings)}')

def thanks():
    # Function to print a thank you message for playing the quiz
    print('Thank you for playing, goodbye.')

thanks()