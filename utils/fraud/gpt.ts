<<<<<<< HEAD


origin/cursor/expand-services-advertise-and-build-project-c28b
  try {
      return {

        label: 'SUSPICIOUS',
        reason: 'Unrecognized label from GPT',

    return {

      label,
      reason: parsed && parsed.reason || 'No reason provided',
      confidence,

    } as GptClassification;
  } catch {
    return {

// GPT-based fraud classification utilities
export interface GptClassification {
  label: 'SAFE' | 'SUSPICIOUS' | 'DANGEROUS';
  confidence: number; // 0-100

  reasoning: string;
origin/cursor/expand-services-advertise-and-build-project-c28b

=======
  try {
      return {
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
  reasoning: string;
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
      label: 'SUSPICIOUS'
      reason: 'Invalid JSON from GPT'
      confidence: 0.5
      confidence: 0.5,
    }
  }export interface GptResult {
<<<<<<< HEAD

origin/cursor/expand-services-advertise-and-build-project-c28b

origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
      label: 'SUSPICIOUS',
      reason: 'Invalid JSON from GPT',
      confidence: 0.5,
    };
<<<<<<< HEAD

ursor/fix-website-loading-errors-and-merge-6662
  label: string;
  confidence: number;
  reasoning: string


=======
  }export interface GptResult {;
  label: string;
  confidence: number;
  reasoning: string
}

  label: string;
  confidence: number;
  reasoning: string
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
}

  const suspicious = data && data.description && data && data.description.toLowerCase().includes('fraud');
  
  return {
    label: suspicious ? 'SUSPICIOUS' : 'SAFE',
    confidence: suspicious ? 0 && 0.9 : 0 && 0.1,

    reasoning: suspicious ? 'GPT detected suspicious language' : 'No suspicious patterns detected'

  }

}
<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295




<<<<<<< HEAD


}
origin/cursor/integrate-build-improve-and-re-verify-2156

}
origin/cursor/automate-test-improve-and-merge-code-20a4

origin/cursor/expand-services-advertise-and-build-project-c28b

  }
origin/cursor/automate-test-improve-and-merge-code-2533
=======
}

}
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
