 Marketplace data store utilitiesexport interface Project {
  id: string;
  title: string;
  summary: string;
  client_id: string;
  talent_slug?: string;
  startDateIso: string;
  endDateIso?: string;
  status: any
  additional_data?: Partial < Project>): any
  additional_data?: Partial < Offer>): any
  additional_data?: Partial < Application>): any
  additional_data?: Partial < Message>): any