name = 'abcdefgenfzjn'
last = 'ùù'

commonWord = ''
commonWordHolder = ''

for letter in name:
  numberMatches = 0
  for c in last:
    if(c == letter):
      commonWordHolder += c
      numberMatches += 1
      break

  if(len(commonWordHolder) > len(commonWord)):
    commonWord = commonWordHolder
  
  if(numberMatches == 0):
    commonWordHolder = ''
    

print(commonWord)