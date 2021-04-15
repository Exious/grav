public static int longestSequence(int[] arr) {
    int countedLength = 1, maxSequenceLength = 1;

    for (int i = 1; i < arr.length; i++) {
        if (arr[i] == arr[i - 1]) {
            countedLength++;
        } else {
            if (countedLength > maxSequenceLength) {
                maxSequenceLength = countedLength;
            }
            countedLength = 1;
        }
    }
    
    return (countedLength > maxSequenceLength) ? countedLength : maxSequenceLength;     
}