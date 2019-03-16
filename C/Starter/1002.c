#include <stdio.h>
#include <stdlib.h>
#include <math.h>

/**
 * I could not made it in python, it has
 * runtime error.
 * In c, used double variables and %lf
 * pow function is from math.h
 * stdlib imported by convention
 */
int main(void) {
  double n = 3.14159;
  double raio;
  double area;
  scanf("%lf", &raio);
  area = n * pow(raio,2);
  printf("A= %.4f\n", area);
  return 0;
}