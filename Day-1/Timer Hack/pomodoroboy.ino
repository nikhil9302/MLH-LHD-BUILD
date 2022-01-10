#include <LiquidCrystal.h>

LiquidCrystal lcd(12, 11, 5, 4, 3, 2);
const int buzzerpin = 9;
const int buttonpin = 7;
unsigned long timer = 0;
unsigned long minutes25 = 1500000;
unsigned long minutes5 = 300000;
unsigned long prevstamp = 0;


void switchstate(){
 lcd.clear();
 lcd.setCursor(0,0);
 lcd.write("TIME UP");
 tone(buzzerpin, 500); 
 delay(100);        
 noTone(buzzerpin);     
 delay(1000);
 tone(buzzerpin, 500); 
 delay(100);
 lcd.clear();
}

void setup() {
  lcd.begin(16, 2);
  pinMode(buttonpin, INPUT);
  pinMode(buzzerpin, OUTPUT);  
}

void loop() {
  
  unsigned long timexp = millis() - prevstamp;
  bool buttonstate = digitalRead(buttonpin);
 
  if(timexp < minutes25)
  {
    lcd.setCursor(0,0);
  	lcd.print("Study Time!");
  	lcd.setCursor(0,1);
  	lcd.print((minutes25 - timexp)/60000);
  	lcd.setCursor(3,1);
  	lcd.print("minutes left.");
  }
 if(timexp == minutes25)
 	switchstate();
   
 if(timexp > minutes25 && timexp < minutes5+minutes25)
 {
   lcd.setCursor(0,0);
  	lcd.print("Take a break now");
  	lcd.setCursor(0,1);
  	lcd.print((minutes25=minutes5 - timexp)/60000);
  	lcd.setCursor(3,1);
  	lcd.print("minutes left.");
 }
 if(timexp == minutes25+minutes5)
 	switchstate(); 
   
  if(timexp > minutes25 + minutes5)
    prevstamp = millis(); 
  
}
