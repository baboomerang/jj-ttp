#!/usr/bin/python

"""
Session 2 - John Jay Winter TTP
"""

import math
import array
from random import seed
from random import random

# Using the slice syntax, print a selection and the reverse of a string
def task1():
    message = "Hello World"
    reverse = message[::-1]
    selection = message[0:5:2]
    print(f"{message}, reversed:{reverse}, a selection:{selection}")

# Capture user input as a string, then reverse and print that input
def task2():
    userInput = input("Insert some text here:")
    print(userInput[::-1])

# Print the types of 3 variables
def task3():
    var1 = "1"
    var2 = 1
    var3 = {1, 2, 3}
    type(var1)
    type(var2)
    type(var3)

# Perform various algebraic operations on random numbers
def task4():
    num1 = 13124124
    num2 = 123902183091
    print(num1 + num2)
    for x in range(0, 5):
        randNum = random()
        root = math.sqrt(randNum)
        division = randNum // 6
        print(f"number:{randNum}, square root:{root}, whole division by 6:{division}")

# Join arrays and lists together
def task5():
    list1 = ["1", "2", "3"]
    list2 = ["4", "5", "6"]
    list3 = list1 + list2
    print(list3)
    arr1 = array.array("i", [1,2,3])
    arr2 = array.array("i", [4,5,6])

# Converts objects from one type to another
def task6():
    var1 = int(4124)
    var2 = float(22/7)
    var3 = str(355/113)
    var4 =

def task7():


def main():
    task1()
    task2()
    task3()
    task4()
    task5()
    task6()

if __name__ == "__main__":
    main(sys.argv[1:])
