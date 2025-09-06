 
}const {
  data, error 
}= await supabase .from ('email signups') .insert ({
  email: normalized, source: 'mobile-launch', created at: new Date () .toISOString () 
}) .select ('*') .single ();
}return res.status (500) .send (error.message || 'Database error') 
}
}