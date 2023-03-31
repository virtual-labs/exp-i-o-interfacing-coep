
# Theory:
A microcontroller is a computer in miniature form that is incorporated on a single integrated circuit. It is commonly referred to as a "system on a chip." A microcontroller typically contains one or more central processing units (CPUs), memory, and programmable input/output peripherals, as well as a small amount of RAM and program memory. Unlike the microprocessors used in personal computers or other general-purpose applications that are composed of several separate chips, microcontrollers are designed specifically for embedded applications.
The PIC18 series microcontroller is a popular microcontroller family that is commonly used in various embedded systems applications due to its low power consumption and ease of programming.The GPIO (General Purpose Input Output) pins of a microcontroller are used to connect external devices such as LEDs, switches, sensors, etc. In this experiment, we will be using a push button switch to control the blinking of an LED connected to a GPIO pin of the PIC18 microcontroller.
When the push button switch is pressed, the input pin of the microcontroller is pulled high. The microcontroller's program then detects the change in state of the input pin and toggles the output pin connected to the LED, thereby turning it on. When the push button switch is released, the input pin returns to its initial state, and the microcontroller program detects this and turns off the LED.
To implement this functionality, we will use the programming language C. The program will be written to continuously monitor the state of the input pin and toggle the state of the output pin based on the state of the input pin.
Overall, this experiment will demonstrate the fundamental concept of interfacing a push button switch with a microcontroller and controlling an LED's blinking. This concept can be further extended to implement various applications such as controlling motors, sensors, and other electronic devices.

## Schematic:
Components used in simulation:
-	Microcontroller : PIC18F4550
-	Aqua color LED
-	Resistor: 330 Ohms
-	Pushbutton

In this Example schematic, the push button is connected to pin RC0 of PORT C and LED is connected across RD0 of the PORT D of the microcontroller.

### Current Sinking Opertion:

![8](images/Diag1.png)

In current Sinking Operation, Current flows into the device. In this method, Button is PUSHED-TO-HIGH and LED starts blinking. 

### Current Sourcing Operation:	

![*](images/Diag2.png)
In current Sourcing Operation, Current flows out of the device.In this method, Button is PUSHED-TO-LOW and start blinking


### Link your theory in here