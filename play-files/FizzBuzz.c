#include <stdio.h>

int main(void) {

    for(int i = 1; i <= 100; i++) {         //loop through numbers 1-100
        if(i % 3 == 0 && i % 5 == 0) {      //print FizzBuzz if divisible by 3 and 5
            printf("FizzBuzz\n");
        } else
        if(i % 3 == 0) {                    //else print Fizz if divisible by 3
            printf("Fizz\n");
        } else
        if(i % 5 == 0) {                    //else print Buzz if divisible by 5
            printf("Buzz\n");
        } else {                            //else print i
            printf("%i\n", i);
        }   
    }
   
   return 0;
}