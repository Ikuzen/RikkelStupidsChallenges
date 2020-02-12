public class BiggerNumber {
    public static void main(String[] args){
        System.out.println(findBiggestNumber(-529,50));
    }

    public static int findBiggestNumber(int baseNum, int added){
        boolean isNegative = baseNum < 0 ? true : false;
        if(isNegative){
            baseNum = -baseNum;
        }
        String strNum = baseNum + "";
        StringBuilder numSB = new StringBuilder();
        numSB.append(strNum);
        String lowestNum = ""+ baseNum+added;
        for(int i=0; i<= strNum.length(); i++){
            numSB.insert(i,added);
            if(!isNegative){
                if(Integer.valueOf(numSB.toString()) > Integer.valueOf(lowestNum)){
                    lowestNum = String.valueOf(numSB);
                }
            }
            else{
                if(Integer.valueOf(numSB.toString()) < Integer.valueOf(lowestNum)){
                    lowestNum = String.valueOf(numSB);
                }
            }
            numSB.delete(i, i +(""+added).length());
        }
        return isNegative ? Integer.valueOf("-"+lowestNum) : Integer.valueOf(lowestNum);
    }
}
