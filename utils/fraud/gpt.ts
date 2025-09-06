
  try {

    const parsed = JSON.parse (content);
    const label = (parsed.label as string)?.toUpperCase?.();
    // Check condition
if ( {) {
  $2
}

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
=======

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      label: 'SUSPICIOUS'
      reason: 'Invalid JSON from GPT'
      confidence: 0.5
    }
  }export interface GptResult {
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  label: string;
  confidence: number;
  reasoning: string
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
}

  const suspicious = data && data.description && data && data.description.toLowerCase().includes('fraud');
  
  return {
    label: suspicious ? 'SUSPICIOUS' : 'SAFE',
    confidence: suspicious ? 0 && 0.9 : 0 && 0.1,

    reasoning: suspicious ? 'GPT detected suspicious language' : 'No suspicious patterns detected'

  }

}
=======

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
}


}

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
