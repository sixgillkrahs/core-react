export type UnknownRecord = Record<string, unknown>;

export type UnknownArray = unknown[];

export type SafeType = Record<string, unknown>;

export interface CopyToClipboardOptions {
  debug?: boolean;
  message?: string;
  format?: string; // MIME type
  onCopy?: (clipboardData: object) => void;
}

export type PromiseType<P extends Promise<any>> = P extends Promise<infer T> ? T : never;

export type FunctionReturningPromise = (...args: any[]) => Promise<any>;