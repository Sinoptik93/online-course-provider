import { ErrorBoundary as ErrorBoundaryLibrary } from 'react-error-boundary';
import { HTMLAttributes } from 'react';
import { PageError } from 'widget/PageError';

type ErrorBoundaryProps = HTMLAttributes<HTMLDivElement>;

const ErrorBoundary = (props: ErrorBoundaryProps) => {
    const { children } = props;

    return (
        <ErrorBoundaryLibrary
            FallbackComponent={PageError}
        >
            {children}
        </ErrorBoundaryLibrary>
    );
};

export { ErrorBoundary };
