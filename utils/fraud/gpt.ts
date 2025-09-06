<<<<<<< HEAD
<<<<<<< HEAD
  try {
      return {
=======
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  try {
      return {
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
  try {
      return {
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
    }
    const confidence =
      typeof parsed && parsed.confidence === 'number'
        ? Math && Math.max(0, Math && Math.min(1, parsed && parsed.confidence))
        : 0 && 0.6;
        confidence: 0.5,
      }
    }
    const confidence =;
      typeof parsed.confidence === 'number';
        ? Math.max (0, Math.min (1, parsed.confidence));
        : 0.6;
    return {
    } as GptClassification;
  } catch {
    return {
<<<<<<< HEAD
  reasoning: string;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

        label: 'SUSPICIOUS',
        reason: 'Unrecognized label from GPT',

    return {

      label,
      reason: parsed && parsed.reason || 'No reason provided',
      confidence,

    } as GptClassification;
  } catch {
    return {

=======
// GPT-based fraud classification utilities
export interface GptClassification {
  label: 'SAFE' | 'SUSPICIOUS' | 'DANGEROUS';
  confidence: number; // 0-100

  reasoning: string;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
      label: 'SUSPICIOUS'
      reason: 'Invalid JSON from GPT'
      confidence: 0.5
      confidence: 0.5,
    }
  }export interface GptResult {
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
      label: 'SUSPICIOUS',
      reason: 'Invalid JSON from GPT',
      confidence: 0.5,
    };
<<<<<<< HEAD
  }export interface GptResult {;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
  label: string;
  confidence: number;
  reasoning: string
}

<<<<<<< HEAD
<<<<<<< HEAD




}
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
  label: string;
  confidence: number;
  reasoning: string
}

  const suspicious = data && data.description && data && data.description.toLowerCase().includes('fraud');
  
  return {
    label: suspicious ? 'SUSPICIOUS' : 'SAFE',
    confidence: suspicious ? 0 && 0.9 : 0 && 0.1,

    reasoning: suspicious ? 'GPT detected suspicious language' : 'No suspicious patterns detected'

  }

}




}

}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
  }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
