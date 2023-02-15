function maxChainStrength(A) {
    const N = A.length;
    let maxStrength = 0;

    // Compute prefix sum of the chain
    const sumPrefix = [0];
    for (let i = 1; i < N; i++) {
        sumPrefix[i] = sumPrefix[i-1] + A[i];
    }

    // Precompute maximum strength for second chain
    const max = Array(N);
    let sumPreL = 0;
    let sumPreR = 0;
    for (let i = N-2; i > 0; i--) {
        sumPreL = Math.max(sumPreL + A[i+1], 0);
        sumPreR = Math.max(sumPreR + A[N-i-1], 0);
        max[i] = Math.max(max[i+1], sumPreL + sumPreR);
    }

    // Iterate over all possible partition points for the first chain
    let sumPrefixLeft = 0;
    for (let p = 1; p < N-1; p++) {
        sumPrefixLeft += A[p-1];
        const strength1 = sumPrefixLeft;
        const strength2 = max[p];
        const strength3 = sumPrefix[N-1] - sumPrefix[p] - A[p] - strength2;
        const totalStrength = strength1 + strength2 + strength3;

        // Update max strength if necessary
        if (totalStrength > maxStrength) {
            maxStrength = totalStrength;
        }
    }

    return maxStrength;
}