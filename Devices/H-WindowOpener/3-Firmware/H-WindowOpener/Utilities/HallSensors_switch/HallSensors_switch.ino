/* This code is to be used with KY-024 Hall effect sensor
 * It displays both Analog and Digital values given by the sensor
 * Refer to www.surtrtech.com for more details
 * https://create.arduino.cc/projecthub/SurtrTech/interfacing-hall-effect-sensor-with-arduino-ee3bbe
 */

#include <Arduino.h>

#define Hall_Sensor A0          //A0 used with analog output, D2 with digital output
#define Hall_Sensor_D 2

int Val1=0,Val2=0;             //Here you can store both values, the Val2 can be boolean


void setup() {
  Serial.begin(9600);
  pinMode(Hall_Sensor_D,INPUT);

}

void loop() {
  
   Val1=analogRead(Hall_Sensor);            //We read both values and display them raw on the serial monitor
   Serial.print(Val1);
   Val2=digitalRead(Hall_Sensor_D);
   Serial.print("\t");
   Serial.println(Val2);
}