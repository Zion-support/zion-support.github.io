<select className="border rounded px-3 py-2 bg-white dark:bg-black" value= {
  category 
}onChange= {
  (e) => onChange ({
  category: e.target.value, level, isFree 
}) 
}> <option value="">All Categories</option> <option>AI Development</option> <option>Freelancing</option> <option>Remote Hiring</option> <option>Cloud Architecture</option> </select> <select > <option value="">All Levels</option> <option>Beginner</option> <option>Intermediate</option> <option>Advanced</option> </select> <select > <option value="">All Pricing</option> <option value=" true">Free</option> <option value=" false">Paid</option> </select> </div>) 
}