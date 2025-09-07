"pattern": 'This field format is invalid'
  };
  return messages[rule] || `${field} is invalid`};
export default { validators, formatValidationError };