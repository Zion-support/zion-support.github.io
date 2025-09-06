 const {
  data: existing, error: existingErr 
}= await supabase .from ('partners') .select ('code') .eq ('code', code) .maybeSingle ();
}
}