export const DIVE_PRIVATE_LOCK_REASON = 'Premium dive is locked';

export const LANGUAGE_ENUM = ['en', 'ru'] as const;

export function normalizeLang(lang?: string) {
  const l = (lang ?? '').toLowerCase();
  return l.startsWith('ru') ? 'ru' : 'en';
}

export function fallbackLang(lang: 'en' | 'ru') {
  return lang === 'ru' ? 'en' : 'ru';
}

export function computeIsLocked(isPremium: boolean) {
  // пока без оплат
  return isPremium;
}
