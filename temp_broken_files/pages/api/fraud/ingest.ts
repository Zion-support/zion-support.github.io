 let combinedLabel: GptClassificationLabel = gpt?.label || (heuristic.flagged ? 'SUSPICIOUS' : 'SAFE');
if (heuristic.severity === 'high') combinedLabel = 'DANGEROUS';
if (gpt?.label === 'DANGEROUS') combinedLabel = 'DANGEROUS';
}
}