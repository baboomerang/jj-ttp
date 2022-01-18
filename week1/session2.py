#!/usr/bin/python

"""
Session 2 Assignment - John Jay Winter TTP - Jan 04th, 2022

By: Ilan Rodriguez
"""

import math
import array
from random import seed
from random import random

# Using the slice syntax, this function prints a selection and the reverse of a string
def task1():
    print("Task 1:")
    message = "Hello World"
    reverse = message[::-1]
    selection = message[0:5:2]
    print(f"Original Message: {message}")
    print(f"Reversed Message: {reverse}")
    print(f"Selection Message: {selection}")

# Capture user input as a string, then print the reverse of that input
def task2():
    print("Task 2:")
    userInput = input("Insert some text here:")
    print(f"Reversed text: {userInput[::-1]}")

# Print the types of 3 variables
def task3():
    print("Task 3:")
    var1 = "1"
    var2 = 1
    var3 = {1, 2, 3}
    print(type(var1))
    print(type(var2))
    print(type(var3))

# Perform various algebraic operations on random numbers
def task4():
    print("Task 4:")
    # add two numbers together and print them
    num1 = 13124124
    num2 = 123902183091
    print(num1 + num2)

    # find the square root and whole number division of 5 random numbers
    for x in range(0, 5):
        randNum = random()
        root = math.sqrt(randNum)
        division = randNum // 6
        print(f"number:{randNum}, square root:{root}, whole division by 6:{division}")

# Join arrays and lists together
def task5():
    print("Task 5:")
    # create and join two lists
    list1 = ["1", "2", "3"]
    list2 = ["4", "5", "6"]
    list3 = list1 + list2
    print(f"list3:{list3}")

    # create and join two arrays
    arr1 = array.array("i", [1,2,3])
    arr2 = array.array("i", [4,5,6])
    arr3 = arr1 + arr2
    print(f"arr3:{arr3}")

# Converts objects from one type to another
def task6():
    print("Task 6:")
    # typecast 5 objects into a different type
    var1 = int(4124)
    var2 = float(22/7)
    var3 = str(355/113)
    var4 = int("1531")
    var5 = float("123.12313")
    print(var1,var2,var3,var4,var5)

    # print a lowercase string in all uppercase
    string1 = "sample lowercase string"
    print(string1)
    print(string1.upper())

def task7():
    print("Task 7:")
    # print each letter separately
    for letter in "Python":
        print(letter)

    # print an object from list of objects
    list1 = [(1,3), (1124,142), (124,24)]
    tup = list1[2]
    print(tup[0],tup[1])

    # get the version of python used

def main():
    seed(random())    # seed the random number generator with a random value
    task1()
    task2()
    task3()
    task4()
    task5()
    task6()
    task7()

if __name__ == "__main__":
    main()
