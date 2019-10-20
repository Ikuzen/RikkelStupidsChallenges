const numConvert = require('./yannis_numConvert');

test('arabic->urn from 1 to 10',()=>{
  expect(numConvert.arabicToUrn(1,10)).toBe('/, //, ///, ////, L, /L, //L, ///L, ////L, LL')
})
test('arabic->urn from 3 to 6', ()=>{
  expect(numConvert.arabicToUrn(3,6)).toBe('///, ////, L, /L')
})
test('arabic->urn from 24 to 29',()=>{
  expect(numConvert.arabicToUrn(24,29)).toBe('////LLLL, LLLLL, /LLLLL, //LLLLL, ///LLLLL, ////LLLLL')
})
test("urn->arabic from / to LL",()=>{
  expect(numConvert.urnToArabic("/","LL")).toBe('1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10')
})
test("urn->arabic from /LL to ///LLL",()=>{
  expect(numConvert.urnToArabic("/LL","/LLL")).toBe('11 ,12 ,13 ,14 ,15 ,16')
})
test("arabic > roman from 1 to 10",()=>{
  expect(numConvert.arabicToRoman(1,10)).toBe('I, II, III, IV, V, VI, VII, VIII, IX, X')
})
