function kangaroo(x1,v1,x2,v2){
  let turns = (x2-x1)/(v1-v2);
  return turns == Infinity||turns <0 || !Number.isInteger(turns) || turns === 0 ? "NO" : "YES";
}
