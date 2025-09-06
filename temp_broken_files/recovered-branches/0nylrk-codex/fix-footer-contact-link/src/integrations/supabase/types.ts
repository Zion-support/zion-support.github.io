export type Json = | string | number | boolean | null | {
  [key: string]: Json | undefined 
}| Json[] export type Database = {
  public: {
  Tables: {
  ai chats: {
  Row: {
  created at: string id: string message: string response: string user id: string 
}Insert: {
  created at?: string id?: string message: string response: string user id: string 
}Update: {
  created at?: string id?: string message?: string response?: string user id?: string 
}Relationships: [ 
}analytics events: {
  Row: {
  created at: string | null event type: string id: string metadata: Json | null path: string | null session id: string | null user id: string | null 
}Insert: {
  created at?: string | null event type: string id?: string metadata?: Json | null path?: string | null session id?: string | null user id?: string | null 
}Update: {
  created at?: string | null event type?: string id?: string metadata?: Json | null path?: string | null session id?: string | null user id?: string | null 
}Relationships: [ 
}api keys: {
  Row: {
  created at: string expires at: string | null id: string is active: boolean key hash: string key prefix: string last used at: string | null name: string expires at?: string | null id?: string is active?: boolean key hash: string key prefix: string last used at?: string | null name: string expires at?: string | null id?: string is active?: boolean key hash?: string key prefix?: string last used at?: string | null name?: string 
}api logs: {
  Row: {
  api key id: string | null created at: string endpoint: string id: string ip address: string | null method: string response time ms: number | null status code: number user agent: string | null user id: string | null 
}Insert: {
  api key id?: string | null created at?: string endpoint: string id?: string ip address?: string | null method: string response time ms?: number | null status code: number user agent?: string | null user id?: string | null 
}Update: {
  api key id?: string | null created at?: string endpoint?: string id?: string ip address?: string | null method?: string response time ms?: number | null status code?: number user agent?: string | null user id?: string | null 
}Relationships: [ 
}certifications: {
  Row: {
  created at: string credential id: string | null credential url: string | null expiration date: string | null id: string issue date: string | null issuing organization: string name: string resume id: string 
}Insert: {
  created at?: string credential id?: string | null credential url?: string | null expiration date?: string | null id?: string issue date?: string | null issuing organization: string name: string resume id: string 
}Update: {
  created at?: string credential id?: string | null credential url?: string | null expiration date?: string | null id?: string issue date?: string | null issuing organization?: string name?: string resume id?: string 
}Relationships: [ 
}content: {
  Row: {
  content type: string content url: string | null created at: string creator id: string description: string | null id: string published: boolean | null thumbnail url: string | null title: string updated at: string views: number | null 
}Insert: {
  content type: string content url?: string | null created at?: string creator id: string description?: string | null id?: string published?: boolean | null thumbnail url?: string | null title: string updated at?: string views?: number | null 
}Update: {
  content type?: string content url?: string | null created at?: string creator id?: string description?: string | null id?: string published?: boolean | null thumbnail url?: string | null title?: string updated at?: string views?: number | null 
}Relationships: [ 
}contract templates: {
  Row: {
  created at: string id: string is default: boolean | null template data: Json title: string updated at: string user id: string 
}Insert: {
  created at?: string id?: string is default?: boolean | null template data: Json title: string updated at?: string user id: string 
}Update: {
  created at?: string id?: string is default?: boolean | null template data?: Json title?: string updated at?: string user id?: string 
}Relationships: [ 
}education: {
  Row: {
  created at: string degree: string description: string | null end date: string | null field of study: string | null id: string institution: string institution logo url: string | null is current: boolean location: string | null resume id: string start date: string updated at: string 
}Insert: {
  created at?: string degree: string description?: string | null end date?: string | null field of study?: string | null id?: string institution: string institution logo url?: string | null is current?: boolean location?: string | null resume id: string start date: string updated at?: string 
}Update: {
  created at?: string degree?: string description?: string | null end date?: string | null field of study?: string | null id?: string institution?: string institution logo url?: string | null is current?: boolean location?: string | null resume id?: string start date?: string updated at?: string 
}Relationships: [ 
}fraud detection reports: {
  Row: {
  action taken count: number dangerous count: number false positive count: number generated at: string id: string report data: Json | null report month: string suspicious count: number total flags: number 
}Insert: {
  action taken count?: number dangerous count?: number false positive count?: number generated at?: string id?: string report data?: Json | null report month: string suspicious count?: number total flags?: number 
}Update: {
  action taken count?: number dangerous count?: number false positive count?: number generated at?: string id?: string report data?: Json | null report month?: string suspicious count?: number total flags?: number 
}Relationships: [] 
}fraud flags: {
  Row: {
  action taken: string | null content excerpt: string content id: string content type: string gpt classification: string | null gpt explanation: string | null id: string ip address: string | null is false positive: boolean | null reason: string reviewed at: string | null reviewed by: string | null severity: Database["public" ]["Enums" ]["fraud severity" ] status: string timestamp: string updated at: string | null user email: string | null user id: string | null 
}Insert: {
  action taken?: string | null content excerpt: string content id: string content type: string gpt classification?: string | null gpt explanation?: string | null id?: string ip address?: string | null is false positive?: boolean | null reason: string reviewed at?: string | null reviewed by?: string | null severity?: Database["public" ]["Enums" ]["fraud severity" ] status?: string timestamp?: string updated at?: string | null user email?: string | null user id?: string | null 
}Update: {
  action taken?: string | null content excerpt?: string content id?: string content type?: string gpt classification?: string | null gpt explanation?: string | null id?: string ip address?: string | null is false positive?: boolean | null reason?: string reviewed at?: string | null reviewed by?: string | null severity?: Database["public" ]["Enums" ]["fraud severity" ] status?: string timestamp?: string updated at?: string | null user email?: string | null user id?: string | null 
}Relationships: [ 
}hire requests: {
  Row: {
  attachments: Json | null budget display: string | null budget max: number | null budget min: number | null created at: string expiry date: string | null id: string project overview: string project summary: string | null project type: string | null requester email: string requester id: string | null requester name: string status: string talent id: string timeline: string updated at: string 
}Insert: {
  attachments?: Json | null budget display?: string | null budget max?: number | null budget min?: number | null created at?: string expiry date?: string | null id?: string project overview: string project summary?: string | null project type?: string | null requester email: string requester id?: string | null requester name: string status?: string talent id: string timeline: string updated at?: string 
}Update: {
  attachments?: Json | null budget display?: string | null budget max?: number | null budget min?: number | null created at?: string expiry date?: string | null id?: string project overview?: string project summary?: string | null project type?: string | null requester email?: string requester id?: string | null requester name?: string status?: string talent id?: string timeline?: string updated at?: string 
}Relationships: [] 
}interviews: {
  Row: {
  client id: string created at: string duration minutes: number end time: string | null id: string interview type: string meeting link: string | null meeting platform: string | null notes: string | null reminder sent: string | null scheduled date: string status: string talent id: string title: string | null updated at: string 
}Insert: {
  client id: string created at?: string duration minutes?: number end time?: string | null id?: string interview type?: string meeting link?: string | null meeting platform?: string | null notes?: string | null reminder sent?: string | null scheduled date: string status?: string talent id: string title?: string | null updated at?: string 
}Update: {
  client id?: string created at?: string duration minutes?: number end time?: string | null id?: string interview type?: string meeting link?: string | null meeting platform?: string | null notes?: string | null reminder sent?: string | null scheduled date?: string status?: string talent id?: string title?: string | null updated at?: string 
}Relationships: [] 
}job applications: {
  Row: {
  cover letter: string | null created at: string | null id: string is shortlisted: boolean | null job id: string match breakdown: Json | null match score: number | null match suggestion: string | null match summary: string | null resume id: string | null scored at: string | null status: string talent id: string viewed at: string | null 
}Insert: {
  cover letter?: string | null created at?: string | null id?: string is shortlisted?: boolean | null job id: string match breakdown?: Json | null match score?: number | null match suggestion?: string | null match summary?: string | null resume id?: string | null scored at?: string | null status?: string talent id: string viewed at?: string | null 
}Update: {
  cover letter?: string | null created at?: string | null id?: string is shortlisted?: boolean | null job id?: string match breakdown?: Json | null match score?: number | null match suggestion?: string | null match summary?: string | null resume id?: string | null scored at?: string | null status?: string talent id?: string viewed at?: string | null 
}Relationships: [ 
}jobs: {
  Row: {
  budget: Json category: string client id: string created at: string deadline: string | null description: string id: string skills: string[] status: string title: string updated at: string 
}Insert: {
  budget?: Json category: string client id: string created at?: string deadline?: string | null description: string id?: string skills?: string[] status?: string title: string updated at?: string 
}Update: {
  budget?: Json category?: string client id?: string created at?: string deadline?: string | null description?: string id?: string skills?: string[] status?: string title?: string updated at?: string 
}Relationships: [ 
}milestone activities: {
  Row: {
  action: string comment: string | null created at: string id: string milestone id: string new status: string previous status: string | null user id: string 
}Insert: {
  action: string comment?: string | null created at?: string id?: string milestone id: string new status: string previous status?: string | null user id: string 
}Update: {
  action?: string comment?: string | null created at?: string id?: string milestone id?: string new status?: string previous status?: string | null user id?: string 
}Relationships: [ 
}notification preferences: {
  Row: {
  created at: string id: string marketing emails: boolean | null system notifications: boolean | null updated at: string user id: string 
}Insert: {
  created at?: string id?: string marketing emails?: boolean | null system notifications?: boolean | null updated at?: string user id: string 
}Update: {
  created at?: string id?: string marketing emails?: boolean | null system notifications?: boolean | null updated at?: string user id?: string 
}Relationships: [ 
}notifications: {
  Row: {
  created at: string | null id: string message: string read: boolean | null related id: string | null title: string type: string updated at: string | null user id: string 
}Insert: {
  created at?: string | null id?: string message: string read?: boolean | null related id?: string | null title: string type: string updated at?: string | null user id: string 
}Update: {
  created at?: string | null id?: string message?: string read?: boolean | null related id?: string | null title?: string type?: string updated at?: string | null user id?: string 
}Relationships: [ 
}partner payouts: {
  Row: {
  amount: number completed at: string | null created at: string id: string method: string partner id: string payout details: Json | null status: string updated at: string 
}Insert: {
  amount: number completed at?: string | null created at?: string id?: string method: string partner id: string payout details?: Json | null status?: string updated at?: string 
}Update: {
  amount?: number completed at?: string | null created at?: string id?: string method?: string partner id?: string payout details?: Json | null status?: string updated at?: string 
}Relationships: [ 
}partner profiles: {
  Row: {
  audience size: string bio: string commission rate: number | null created at: string fraud flags: number | null id: string name: string niche: string payout method: string social media: Json | null status: string updated at: string user id: string website: string | null 
}Insert: {
  audience size: string bio: string commission rate?: number | null created at?: string fraud flags?: number | null id?: string name: string niche: string payout method: string social media?: Json | null status?: string updated at?: string user id: string website?: string | null 
}Update: {
  audience size?: string bio?: string commission rate?: number | null created at?: string fraud flags?: number | null id?: string name?: string niche?: string payout method?: string social media?: Json | null status?: string updated at?: string user id?: string website?: string | null 
}Relationships: [ 
}partner referral links: {
  Row: {
  campaign: string | null clicks: number | null conversions: number | null created at: string id: string name: string partner id: string source: string | null updated at: string 
}Insert: {
  campaign?: string | null clicks?: number | null conversions?: number | null created at?: string id?: string name: string partner id: string source?: string | null updated at?: string 
}Update: {
  campaign?: string | null clicks?: number | null conversions?: number | null created at?: string id?: string name?: string partner id?: string source?: string | null updated at?: string 
}Relationships: [ 
}portfolio projects: {
  Row: {
  created at: string demo url: string | null description: string | null github url: string | null id: string image url: string | null pdf url: string | null technologies: string[] | null title: string updated at: string user id: string 
}Insert: {
  created at?: string demo url?: string | null description?: string | null github url?: string | null id?: string image url?: string | null pdf url?: string | null technologies?: string[] | null title: string updated at?: string user id: string 
}Update: {
  created at?: string demo url?: string | null description?: string | null github url?: string | null id?: string image url?: string | null pdf url?: string | null technologies?: string[] | null title?: string updated at?: string user id?: string 
}Relationships: [ 
}profiles: {
  Row: {
  avatar url: string | null average rating: number | null bio: string | null created at: string display name: string | null headline: string | null id: string ip address: string | null last login ip: string | null profile complete: boolean rating count: number | null rating sum: number | null role: string | null signup timestamp: string | null tenant id: string | null updated at: string user type: string | null 
}Insert: {
  avatar url?: string | null average rating?: number | null bio?: string | null created at?: string display name?: string | null headline?: string | null id: string ip address?: string | null last login ip?: string | null profile complete?: boolean rating count?: number | null rating sum?: number | null role?: string | null signup timestamp?: string | null tenant id?: string | null updated at?: string user type?: string | null 
}Update: {
  avatar url?: string | null average rating?: number | null bio?: string | null created at?: string display name?: string | null headline?: string | null id?: string ip address?: string | null last login ip?: string | null profile complete?: boolean rating count?: number | null rating sum?: number | null role?: string | null signup timestamp?: string | null tenant id?: string | null updated at?: string user type?: string | null 
}Relationships: [ 
}project milestones: {
  Row: {
  amount: number created at: string created by: string deliverables: Json | null description: string | null due date: string | null id: string project id: string status: string title: string updated at: string 
}Insert: {
  amount: number created at?: string created by: string deliverables?: Json | null description?: string | null due date?: string | null id?: string project id: string status?: string title: string updated at?: string 
}Update: {
  amount?: number created at?: string created by?: string deliverables?: Json | null description?: string | null due date?: string | null id?: string project id?: string status?: string title?: string updated at?: string 
}Relationships: [ 
}project notes: {
  Row: {
  content: string created at: string id: string project id: string user id: string 
}Insert: {
  content: string created at?: string id?: string project id: string user id: string 
}Update: {
  content?: string created at?: string id?: string project id?: string user id?: string 
}Relationships: [ 
}projects: {
  Row: {
  agreement url: string | null client id: string created at: string id: string job id: string payment terms: string scope summary: string start date: string status: string talent id: string updated at: string 
}Insert: {
  agreement url?: string | null client id: string created at?: string id?: string job id: string payment terms: string scope summary: string start date: string status?: string talent id: string updated at?: string 
}Update: {
  agreement url?: string | null client id?: string created at?: string id?: string job id?: string payment terms?: string scope summary?: string start date?: string status?: string talent id?: string updated at?: string 
}Relationships: [ 
}quote requests: {
  Row: {
  budget display: string | null budget max: number | null budget min: number | null created at: string id: string is archived: boolean project description: string | null project name: string project summary: string replied at: string | null requester email: string requester id: string | null requester name: string start date: string | null status: Database["public" ]["Enums" ]["quote request status" ] talent id: string | null timeline: string updated at: string viewed at: string | null 
}Insert: {
  budget display?: string | null budget max?: number | null budget min?: number | null created at?: string id?: string is archived?: boolean project description?: string | null project name: string project summary: string replied at?: string | null requester email: string requester id?: string | null requester name: string start date?: string | null status?: Database["public" ]["Enums" ]["quote request status" ] talent id?: string | null timeline: string updated at?: string viewed at?: string | null 
}Update: {
  budget display?: string | null budget max?: number | null budget min?: number | null created at?: string id?: string is archived?: boolean project description?: string | null project name?: string project summary?: string replied at?: string | null requester email?: string requester id?: string | null requester name?: string start date?: string | null status?: Database["public" ]["Enums" ]["quote request status" ] talent id?: string | null timeline?: string updated at?: string viewed at?: string | null 
}Relationships: [ 
}referral codes: {
  Row: {
  code: string created at: string id: string updated at: string user id: string 
}Insert: {
  code: string created at?: string id?: string updated at?: string user id: string 
}Update: {
  code?: string created at?: string id?: string updated at?: string user id?: string 
}Relationships: [ 
}referral rewards: {
  Row: {
  amount: number | null created at: string expires at: string | null id: string partner id: string | null referral id: string reward type: string user id: string 
}Insert: {
  amount?: number | null created at?: string expires at?: string | null id?: string partner id?: string | null referral id: string reward type: string user id: string 
}Update: {
  amount?: number | null created at?: string expires at?: string | null id?: string partner id?: string | null referral id?: string reward type?: string user id?: string 
}Relationships: [ 
}referrals: {
  Row: {
  completed at: string | null created at: string email: string | null id: string ip address: string | null partner id: string | null referral code: string referred id: string | null referred user type: string | null referrer id: string referrer user type: string | null reward issued: boolean reward issued at: string | null created at?: string email?: string | null id?: string ip address?: string | null partner id?: string | null referral code: string referred id?: string | null referred user type?: string | null referrer id: string referrer user type?: string | null reward issued?: boolean reward issued at?: string | null created at?: string email?: string | null id?: string ip address?: string | null partner id?: string | null referral code?: string referred id?: string | null referred user type?: string | null referrer id?: string referrer user type?: string | null reward issued?: boolean reward issued at?: string | null 
}reminder logs: {
  Row: {
  clicked at: string | null email body: string email subject: string id: string opened at: string | null reminder type: string sent at: string | null user id: string 
}Insert: {
  clicked at?: string | null email body: string email subject: string id?: string opened at?: string | null reminder type: string sent at?: string | null user id: string 
}Update: {
  clicked at?: string | null email body?: string email subject?: string id?: string opened at?: string | null reminder type?: string sent at?: string | null user id?: string 
}Relationships: [ 
}resume skills: {
  Row: {
  category: string | null created at: string id: string name: string proficiency: number | null resume id: string years experience: number | null 
}Insert: {
  category?: string | null created at?: string id?: string name: string proficiency?: number | null resume id: string years experience?: number | null 
}Update: {
  category?: string | null created at?: string id?: string name?: string proficiency?: number | null resume id?: string years experience?: number | null 
}Relationships: [ 
}review reports: {
  Row: {
  created at: string id: string reason: string reporter id: string resolved at: string | null review id: string status: string 
}Insert: {
  created at?: string id?: string reason: string reporter id: string resolved at?: string | null review id: string status?: string 
}Update: {
  created at?: string id?: string reason?: string reporter id?: string resolved at?: string | null review id?: string status?: string 
}Relationships: [ 
}reviews: {
  Row: {
  communication rating: number | null created at: string id: string is anonymous: boolean is visible: boolean project id: string quality rating: number | null rating: number report count: number review text: string reviewee id: string reviewer id: string status: string timeliness rating: number | null updated at: string would work again: boolean | null 
}Insert: {
  communication rating?: number | null created at?: string id?: string is anonymous?: boolean is visible?: boolean project id: string quality rating?: number | null rating: number report count?: number review text: string reviewee id: string reviewer id: string status?: string timeliness rating?: number | null updated at?: string would work again?: boolean | null 
}Update: {
  communication rating?: number | null created at?: string id?: string is anonymous?: boolean is visible?: boolean project id?: string quality rating?: number | null rating?: number report count?: number review text?: string reviewee id?: string reviewer id?: string status?: string timeliness rating?: number | null updated at?: string would work again?: boolean | null 
}Relationships: [ 
}scheduled jobs: {
  Row: {
  completed at: string | null created at: string id: string job type: string payload: Json | null scheduled for: string status: string updated at: string 
}Insert: {
  completed at?: string | null created at?: string id?: string job type: string payload?: Json | null scheduled for: string status: string updated at?: string 
}Update: {
  completed at?: string | null created at?: string id?: string job type?: string payload?: Json | null scheduled for?: string status?: string updated at?: string 
}Relationships: [] 
}subscriptions: {
  Row: {
  created at: string current period end: string | null current period start: string | null id: string plan type: string status: string stripe customer id: string | null stripe subscription id: string | null updated at: string user id: string 
}Insert: {
  created at?: string current period end?: string | null current period start?: string | null id?: string plan type: string status: string stripe customer id?: string | null stripe subscription id?: string | null updated at?: string user id: string 
}Update: {
  created at?: string current period end?: string | null current period start?: string | null id?: string plan type?: string status?: string stripe customer id?: string | null stripe subscription id?: string | null updated at?: string user id?: string 
}Relationships: [ 
}talent resumes: {
  Row: {
  created at: string headline: string | null id: string is active: boolean summary: string | null title: string updated at: string user id: string 
}Insert: {
  created at?: string headline?: string | null id?: string is active?: boolean summary?: string | null title?: string updated at?: string user id: string 
}Update: {
  created at?: string headline?: string | null id?: string is active?: boolean summary?: string | null title?: string updated at?: string user id?: string 
}Relationships: [ 
}tenant administrators: {
  Row: {
  created at: string | null id: string tenant id: string user id: string 
}Insert: {
  created at?: string | null id?: string tenant id: string user id: string 
}Update: {
  created at?: string | null id?: string tenant id?: string user id?: string 
}Relationships: [ 
}user onboarding: {
  Row: {
  application sent: boolean | null application sent at: string | null availability set: boolean | null availability set at: string | null created at: string id: string job posted: boolean | null job posted at: string | null last reminder sent: string | null match received: boolean | null match received at: string | null match viewed: boolean | null match viewed at: string | null profile completed: boolean | null profile completed at: string | null quote received: boolean | null quote received at: string | null reminder count: number | null role: string skills added: boolean | null skills added at: string | null talent invited: boolean | null talent invited at: string | null updated at: string user id: string | null 
}Insert: {
  application sent?: boolean | null application sent at?: string | null availability set?: boolean | null availability set at?: string | null created at?: string id?: string job posted?: boolean | null job posted at?: string | null last reminder sent?: string | null match received?: boolean | null match received at?: string | null match viewed?: boolean | null match viewed at?: string | null profile completed?: boolean | null profile completed at?: string | null quote received?: boolean | null quote received at?: string | null reminder count?: number | null role: string skills added?: boolean | null skills added at?: string | null talent invited?: boolean | null talent invited at?: string | null updated at?: string user id?: string | null 
}Update: {
  application sent?: boolean | null application sent at?: string | null availability set?: boolean | null availability set at?: string | null created at?: string id?: string job posted?: boolean | null job posted at?: string | null last reminder sent?: string | null match received?: boolean | null match received at?: string | null match viewed?: boolean | null match viewed at?: string | null profile completed?: boolean | null profile completed at?: string | null quote received?: boolean | null quote received at?: string | null reminder count?: number | null role?: string skills added?: boolean | null skills added at?: string | null talent invited?: boolean | null talent invited at?: string | null updated at?: string user id?: string | null 
}Relationships: [ 
}user privacy settings: {
  Row: {
  activity monitoring enabled: boolean | null ai analysis enabled: boolean | null id: string message scanning enabled: boolean | null updated at: string | null 
}Insert: {
  activity monitoring enabled?: boolean | null ai analysis enabled?: boolean | null id: string message scanning enabled?: boolean | null updated at?: string | null 
}Update: {
  activity monitoring enabled?: boolean | null ai analysis enabled?: boolean | null id?: string message scanning enabled?: boolean | null updated at?: string | null 
}Relationships: [ 
}webhook configs: {
  Row: {
  created at: string event types: string[] id: string is active: boolean last triggered at: string | null name: string secret: string | null updated at: string url: string user id: string 
}Insert: {
  created at?: string event types: string[] id?: string is active?: boolean last triggered at?: string | null name: string secret?: string | null updated at?: string url: string user id: string 
}Update: {
  created at?: string event types?: string[] id?: string is active?: boolean last triggered at?: string | null name?: string secret?: string | null updated at?: string url?: string user id?: string 
}Relationships: [ 
}whitelabel tenants: {
  Row: {
  account manager id: string | null brand name: string created at: string | null custom domain: string | null dns verified: boolean email template override: Json | null id: string is active: boolean landing page copy: Json | null logo url: string | null primary color: string subdomain: string theme preset: string updated at: string | null 
}Insert: {
  account manager id?: string | null brand name: string created at?: string | null custom domain?: string | null dns verified?: boolean email template override?: Json | null id?: string is active?: boolean landing page copy?: Json | null logo url?: string | null primary color?: string subdomain: string theme preset?: string updated at?: string | null 
}Update: {
  account manager id?: string | null brand name?: string created at?: string | null custom domain?: string | null dns verified?: boolean email template override?: Json | null id?: string is active?: boolean landing page copy?: Json | null logo url?: string | null primary color?: string subdomain?: string theme preset?: string updated at?: string | null 
}Relationships: [ 
}work history: {
  Row: {
  company logo url: string | null company name: string created at: string description: string | null end date: string | null id: string is current: boolean location: string | null resume id: string role title: string start date: string updated at: string 
}Insert: {
  company logo url?: string | null company name: string created at?: string description?: string | null end date?: string | null id?: string is current?: boolean location?: string | null resume id: string role title: string start date: string updated at?: string 
}Update: {
  company logo url?: string | null company name?: string created at?: string description?: string | null end date?: string | null id?: string is current?: boolean location?: string | null resume id?: string role title?: string start date?: string updated at?: string 
}Relationships: [ 
}
}Views: {
  conversion rates: {
  Row: {
  conversion count: number | null conversion rate: number | null conversion type: string | null date: string | null view count: number | null 
}Relationships: [] 
}daily page views: {
  Row: {
  date: string | null path: string | null view count: number | null 
}Relationships: [] 
}user metrics: {
  Row: {
  job applications: number | null profile views: number | null quote invites: number | null success rate: number | null user id: string | null 
}Insert: {
  job applications?: never profile views?: never quote invites?: never success rate?: never user id?: string | null 
}Update: {
  job applications?: never profile views?: never quote invites?: never success rate?: never user id?: string | null 
}Relationships: [] 
}
}Returns: {
  user id: string email: string display name: string user type: string last login: string reminder type: string days since login: number onboarding status: Json 
}[] 
}Returns: undefined 
}create notification: {
  Args: {
  user id: string title: string message: string type: string related id?: string 
}Returns: string 
}p user id: string p user email: string p content type: string p content id: string p content excerpt: string p severity: string p reason: string p ip address: string 
}Returns: string 
}generate api key: {
  Args: {
  prefix: string 
}Returns: string 
}Returns: string 
}generate referral code: {
  Args: {
  user id: string 
}Returns: string 
}event type: string count: number 
}[] 
}hash api key: {
  Args: {
  api key: string 
}Returns: string 
}
}
}type DefaultSchema = Database[Extract<keyof Database, "public" >] export type Tables< DefaultSchemaTableNameOrOptions extends Row: infer R 
}? R : never : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables" ] & DefaultSchema["Views" ]) ? (DefaultSchema["Tables" ] & DefaultSchema["Views" ]) [DefaultSchemaTableNameOrOptions] extends {
  Row: infer R 
}schema: keyof Database 
}? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
  schema"]][" CompositeTypes"] : never = never;
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof Database 
}? Database[PublicCompositeTypeNameOrOptions[" schema"]][" CompositeTypes"][CompositeTypeName] : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema[" CompositeTypes"] ? DefaultSchema[" CompositeTypes" ][PublicCompositeTypeNameOrOptions] >>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 : never export const Constants = {
  public: {
  Enums: {
  api key scope: [ 