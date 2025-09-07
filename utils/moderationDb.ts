export interface ModerationFlag {
  // TODO: Implement
}
export interface ModerationFlag {;


  // TODO: Implement
  id: string;,
  contentId: string;
  contentType: "post" | "comment" | "user";",
  reason: string;
  userEmail: string;,"
  status: "pending" | "approved" | "removed" | "warned" | "banned";"
  createdAt: string;,
  updatedAt: string;
  adminNotes?: string;
// Mock data storage - replace with actual database;
let flags: ModerationFlag[] = [];

;
export async function getFlagById (id: string): Promise < ModerationFlag | null> {
  return flags.find (flag => flag.id === id) || null;
export async function readAllFlags (): Promise < ModerationFlag[]> {
  return [...flags];

export async function getFlagById(id: string): Promise<ModerationFlag | null> {



export async function getFlagById(id: string): Promise<ModerationFlag | null> {;

export async function readAllFlags(): Promise<ModerationFlag[]> {;

  data: Partial<ModerationFlag>,

): Promise<ModerationFlag> {

): Promise<FlaggedContent | undefined> {
"