

      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;


  private showFatalErrorMessage(): void {
    // Create a user-friendly error message



    errorDiv.innerHTML = `
      <div style="text-align: center, padding: 2rem, max-width: 500px,">
        <h2 style="margin-bottom: 1rem,">Connection Issue</h2>
        <p style="margin-bottom: 1.5rem, line-height: 1.5,">
          We're having trouble loading some parts of the application. 
          This might be due to a poor network connection or a temporary server issue.
        </p>
        <button onclick="window.location.reload()" style="


        ">
          Go Home
        </button>
      </div>


    }
    return this.errorStats.get(sessionKey)!
  }




  // Public method to manually trigger recovery
  public triggerRecovery(): void {

    this && this.clearCaches().then(() => {
      this && this.reloadPage();
    });  }


      this.reloadPage()
    }) }
  // Public method to check if we're in a chunk error state
  public isInErrorState(): boolean {

