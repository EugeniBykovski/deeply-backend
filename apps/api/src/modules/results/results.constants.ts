export const MAIN_PATH_COUNT = 12;
export const COMPLETION_THRESHOLD = 0.8;

export const LANGUAGE_ENUM = ['en', 'ru'] as const;
export const RANGE_ENUM = ['week', 'month', 'all'] as const;

export function rangeToDate(range?: string): Date | undefined {
  const r = (range ?? 'all').toLowerCase();
  const now = new Date();
  if (r === 'week') return new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  if (r === 'month') return new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  return undefined;
}
