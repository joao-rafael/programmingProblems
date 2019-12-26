# -*- coding: utf-8 -*-

'''
Escreva a sua solução aqui
Code your solution here
Escriba su solución aquí
'''
import math;
while True:
  try:
    r1, x1, y1, r2, x2, y2 = input().split();
    r1 = int(r1);
    r2 = int(r2);
    x1 = int(x1);
    x2 = int(x2);
    y1 = int(y1);
    y2 = int(y2);
    #area:
    arear1 = math.pi * r1 ** 2;
    arear2 = math.pi * r2 ** 2;

    #distancia:
    dist = math.sqrt(((x1 - x2)**2) + ((y1 - y2)**2));

    if(arear1 < arear2 or dist > r1 - r2):
      print("MORTO");
    else:
      print("RICO");

  except EOFError:
    break;
