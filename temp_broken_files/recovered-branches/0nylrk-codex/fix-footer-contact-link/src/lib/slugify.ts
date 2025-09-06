 ") //treat underscores like spaces .normalize (" NFD") .replace (/[\u0300-\u036F]/g, "") .toLowerCase () .replace (/[^a-z0-9\s-]/g, "") .replace (/[\s-]+/g, sep) 
}/** * Convert a slug back into a human readable title. * This simply splits the slug on the separator and * capitalizes each word. */ 
}