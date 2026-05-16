def start_quiz():
    print("Welcome to the Interactive Quiz!\n")
    
    # Question 1: The initial fork in the road
    print("Question 1: Do you prefer studying the Earth or space?")
    print("A) Earth")
    print("B) Space")
    answer1 = input("Your answer (A or B): ").strip().upper()
    print("-" * 30)

    # Branching Logic based on Answer 1
    if answer1 == "A":
        # Path A: Earth sciences
        print("You chose Earth! Let's narrow it down.")
        print("Question 2: Are you more interested in earthquakes or oceans?")
        print("A) Earthquakes and seismology")
        print("B) Oceans and marine life")
        answer2 = input("Your answer (A or B): ").strip().upper()
        
        print("-" * 30)
        if answer2 == "A":
            print("Result: You should look into Geophysics or Seismology!")
        elif answer2 == "B":
            print("Result: Oceanography sounds like a great fit for you.")
        else:
            print("Invalid choice. Ending Earth path.")

    elif answer1 == "B":
        # Path B: Space sciences
        print("You chose Space! Let's look closer.")
        print("Question 2: Do you prefer studying planets or stars?")
        print("A) Planets and solar systems")
        print("B) Stars, galaxies, and deep space")
        answer2 = input("Your answer (A or B): ").strip().upper()
        
        print("-" * 30)
        if answer2 == "A":
            print("Result: Planetary Geology or Astronomy might be your calling.")
        elif answer2 == "B":
            print("Result: Astrophysics seems perfect for you!")
        else:
            print("Invalid choice. Ending Space path.")

    else:
        print("Invalid input. Please restart the quiz and choose A or B.")

# This line actually runs the function when you execute the script
if __name__ == "__main__":
    start_quiz()