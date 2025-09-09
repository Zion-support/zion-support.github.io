import { supabase } from '@/integrations / supabase / client';
    export async function updateJob (...args: any[]) : any {;
  export async function getJobById (...args: any[]) : any {;
export async function createJob (...args: any[]) : any {;
;
      const { data, error } = await supabase;
        .from ('jobs') .insert ([jobData]) .select () .single () ;
;

  async get() {
    try {
      const response = await fetch("${this.baseUrl}/jobservice")}
      return await response.json()}
    } catch (error) {
      console.error("Error fetching data:", error)}
      throw error}
}



export default new jobServiceService()}
