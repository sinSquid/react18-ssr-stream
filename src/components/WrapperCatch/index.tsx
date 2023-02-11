import { Component } from "react";

import type { ErrorInfo, ReactNode, ReactElement } from "react";

export class WrapperErrorCatch extends Component<Record<string, unknown> & { children: ReactElement }, { error: string; stack: string; hasError: boolean }> {
  constructor(props: any) {
    super(props)
    this.state = {
      stack: "",
      error: "",
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    this.setState({
      error: error.message,
      stack: info.componentStack,
    });
  }

  render(): ReactNode {
    const {hasError, error, stack} = this.state
    const {children} = this.props
    if (hasError)
      return (
        <pre>
          <p style={{ color: "red", whiteSpace: "pre-wrap" }}>{error}</p>
          {stack}
        </pre>
      );
    return children;
  }
}
