



      }
      return browser_client;
    }



    // Server-side: create a new client per call to avoid cross-request state;
    return createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  } catch {;
    return undefined;


  }

}


    // Server - side: create a new client per call to avoid cross - request state;
    return create_client (SUPABASE_URL, SUPABASE_ANON_KEY);
  } catch {
    return undefined;


