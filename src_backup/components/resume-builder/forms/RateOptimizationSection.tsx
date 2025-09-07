import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,

  FormField;
  FormItem;
  FormLabel;
  FormControl;
  FormDescription;

export const RateOptimizationSection: React.FC<RateOptimizationSectionProps> = ({
  control,
  setValue,
  skills,
  yearsExperience,
  location,
  rateType
}) => {
  const handleSuggestionApplied = (rate: number) => {
    setValue("hourlyRate", rate)
  },