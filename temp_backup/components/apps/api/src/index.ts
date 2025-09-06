 dotenv.config ();
};
methods: ['GETPOSTOPTIONS'] 
});
WHERE ($1::text IS NULL OR country = $1) AND ($2::text IS NULL OR EXISTS (SELECT 1 FROM unnest (skills) s WHERE s ILIKE '%' || $2 || '%') ) ORDER BY created at DESC 