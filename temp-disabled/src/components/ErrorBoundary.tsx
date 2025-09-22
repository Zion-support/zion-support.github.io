

interface Props {
  // TODO: Implement
}
  children: ReactNode;
}

interface State {
  // TODO: Implement
}
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {

  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }


            </div>
          </div>
        </div>"

