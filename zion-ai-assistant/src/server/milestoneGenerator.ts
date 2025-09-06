
  const milestones = ai && ai.length ? ai : createHeuristicPlan(input);
  return { milestones }
}