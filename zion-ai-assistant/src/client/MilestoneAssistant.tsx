  startDateIso: string;
  endDateIso: string;
  projectType: ProjectType;
  onAccept?: (milestones: SuggestedMilestoneItem[], autoAdd: boolean) => void;
}
  const [error, setError] = useState<string | null>(null);
  const [autoAdd, setAutoAdd] = useState(true);
  const [items, setItems] = useState<SuggestedMilestoneItem[]>([]);
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);
    try {
      const payload: MilestoneSuggestionInput = {
        scopeOfWork: props.scopeOfWork,
        startDateIso: props.startDateIso,
        endDateIso: props.endDateIso,
export default MilestoneAssistant;