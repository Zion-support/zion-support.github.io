

interface InterviewCardProps {
  // TODO: Implement
}
  interview: Interview,

  on_refresh: () => Promise < void>;
}
export /**
 * InterviewCard - Function description;
 */
function InterviewCard() {
  const { user } = use_auth ();
  const { respondToInterview, cancel_interview } = use_interviews ();
  const [isResponseDialogOpen, setIsResponseDialogOpen] = useState (false);
  const [is_loading, setIsLoading] = useState (false);
  const is_client = user?.id === interview.client_id;

