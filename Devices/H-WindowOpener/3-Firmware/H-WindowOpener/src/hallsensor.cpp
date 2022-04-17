

#include <Arduino.h>
#include <hallsensor.h>

int Val1=0,Val2=0;             //Here you can store both values, the Val2 can be boolean

void init_halls_sensors() {
  Serial.begin(9600);
  pinMode(Hall_Sensor_D,INPUT);

}

void readSensor() {
  
   Val1=analogRead(Hall_Sensor);            //We read both values and display them raw on the serial monitor
   Serial.print(Val1);
   Val2=digitalRead(Hall_Sensor_D);
   Serial.print("\t");
   Serial.println(Val2);
}