#!/usr/bin/python

"""
calculator.py - Jan 04th 2022
By Ilan Rodriguez

The program asks a user for two numbers and an operation.
Depending on the operation, it will perform an algebraic operation on those numbers.
"""

# Given an operator, find which character matches the operator and perform the corresponding arithmetic
def evaluate(operator, first, second):
    result = 0
    if operator == "+":
        result = int(first) + int(second)   # result is the sum of first and second
    elif operator == "-":
        result = int(first) - int(second)   # result is the subtraction of first and second
    elif operator == "*":
        result = int(first) * int(second)   # result is the product of first and second
    elif operator == "/":
        result = int(first) / int(second)   # result is the division of first and second
    else:
        print("Invalid operation, returning 0") # safety measure against an invalid input
    return result


def main():
    # Collect input from user and create the operands and operator parameters
    first = input("What is the first number?: ")
    second = input("What is the second number?: ")
    operation = input("What is the operation?(+,-,*,/): ")

    # Pass these parameters and evaluate the expression (I could have used a try, catch instead)
    answer = evaluate(operation, first, second)
    print(answer)


if __name__ == "__main__":
    main()
