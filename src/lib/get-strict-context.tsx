import * as React from 'react';

/**
 * Creates a strict React context that throws an error if used outside the provider.
 * Returns a tuple of [Provider, useHook] for convenient usage.
 *
 * @param contextName - The name of the context for error messages
 * @returns A tuple containing [Provider, useHook]
 */
export function getStrictContext<T>(contextName: string) {
  const Context = React.createContext<T | undefined>(undefined);

  const Provider = ({ value, children }: { value: T; children: React.ReactNode }) => {
    return <Context.Provider value={value}>{children}</Context.Provider>;
  };

  const useContext = () => {
    const context = React.useContext(Context);
    if (context === undefined) {
      throw new Error(
        `${contextName} must be used within a ${contextName}Provider`
      );
    }
    return context;
  };

  return [Provider, useContext] as const;
}

