 const topWords = Array.from (wordCounts.entries () ) .sort ( (a, b) => b[1] - a[1]) .slice (0, 10) 
}const bigrams = Array.from (bigramCounts.entries () ) .sort ( (a, b) => b[1] - a[1]) .slice (0, 5) const trigrams = Array.from (trigramCounts.entries () ) .sort ( (a, b) => b[1] - a[1]) .slice (0, 5) 
}
}