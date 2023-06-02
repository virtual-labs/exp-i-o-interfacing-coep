#include <pic18fregs.h>
#include <delay.h>


#pragma config XINST=OFF
#pragma config FOSC = INTOSCIO_EC
#pragma config WDT = OFF
#pragma config LVP = OFF

 #define LED_TRIS_Input TRISCbits.TRISC1
 #define LED_READ_Input PORTCbits.RC0

 #define LED_TRIS_Output TRISDbits.TRISD0
 #define LED_LAT_Output LATDbits.LATD0

void main(void)
{
    LED_TRIS_Input=1;
    LED_READ_Input=0;

    LED_TRIS_Output=0;
    LED_LAT_Output=0;
  while(1)
  {
    if(LED_READ_Input == 0X01)
    {
      LED_LAT_Output = !LED_LAT_Output;
      delay1ktcy(125); 
    }
  }
}
