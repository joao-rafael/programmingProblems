# -*- coding: utf-8 -*-
num = int(input());
counter = 0;

humanos = 0;
hobbits = 0;
magos = 0;
anao = 0;
elfo = 0;

while counter < num:
  row = input();
  if row.endswith("X"):
    hobbits += 1;
  elif row.endswith("E"):
    elfo += 1;
  elif row.endswith("H"):
    humanos += 1;
  elif row.endswith("M"):
    magos += 1;
  elif row.endswith("A"):
    anao += 1;
  
  counter += 1;

print(str(hobbits) + " Hobbit(s)");
print(str(humanos) + " Humano(s)");
print(str(elfo) + " Elfo(s)");
print(str(anao) + " Anao(s)");
print(str(magos) + " Mago(s)");
