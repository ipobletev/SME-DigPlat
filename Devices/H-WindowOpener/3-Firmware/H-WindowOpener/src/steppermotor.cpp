//https://randomnerdtutorials.com/esp32-stepper-motor-28byj-48-uln2003/

#include <Arduino.h>
#include <Stepper.h>
#include <SME_steppermotor.h>

const int stepsPerRevolution = STEP_REVOLUTION;  // change this to fit the number of steps per revolution

// ULN2003 Motor Driver Pins
#define IN1 19
#define IN2 18
#define IN3 5
#define IN4 17

// initialize the stepper library
Stepper myStepper(stepsPerRevolution, IN1, IN3, IN2, IN4);

void Init_StepperMotor() {
  myStepper.setSpeed(5);
}

void steppermotor_window_open() {
  // step one revolution in one direction:
  Serial.println("clockwise");
  myStepper.step(stepsPerRevolution);
  delay(1000);
}

void steppermotor_window_close() {
  // step one revolution in the other direction:
  Serial.println("counterclockwise");
  myStepper.step(-stepsPerRevolution);
  delay(1000);
}