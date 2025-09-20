// Merge conflict resolved - keeping working version
    } catch (error) {
      lastError = error as Error;
      
      if (attempt === maxRetries) {
        throw lastError;
      }
// Merge conflict resolved - keeping working version
  throw lastError!;
}