#!/usr/bin/python

def convert_temperature(temperature, scale):
    """
    Converts a user-provided temperature and scale to other scales
    Input: String temperature, String scale
    Output: None (only print statements)
    """
    # convert the input string to int
    temperature = int(temperature)

    # if the input temperature is in fahrenheit, convert to celcius and kelvin
    if scale == 'f' or scale == 'F':
        celcius = (temperature - 32) * 5/9
        kelvin = celcius + 273.15
        print("Celcius = " + str(celcius))
        print("Kelvin = " + str(kelvin))

    # if the input temperature is in celcius, convert to fahrenheit and kelvin
    elif scale == 'c' or  scale == 'C':
        fahrenheit = (temperature * 9/5) + 32
        kelvin = temperature + 273.15
        print("Fahrenheit = " + str(fahrenheit))
        print("Kelvin = " + str(kelvin))

    # if the input temperature is in kelvin, convert to celcius and fahrenheit
    elif scale == 'k' or scale == 'K':
        celcius = temperature - 273.15
        fahrenheit = celcius * 9/5 + 32
        print("Fahrenheit = " + str(fahrenheit))
        print("Celcius = " + str(celcius))

    else:
        print("Error: invalid scale!")


def main():
    print("Choose a temperature scale: f) Fahrenheit, c) Celsius, k) Kelvin")
    scale = input("f, c, k: ")
    temperature = input("Enter the degrees: ")
    convert_temperature(temperature, scale)


if __name__ == "__main__":
    main()
