export const LANGUAGE_ENUM = ['en', 'ru'] as const;

export const TRAINING_PROGRAM_KEY_ENUM = [
  'BEGINNER',
  'INTERMEDIATE',
  'PRO',
  'SQUARE',
  'CALMING',
] as const;

export const BREATH_PHASE_ENUM = ['INHALE', 'HOLD', 'EXHALE', 'REST'] as const;

export const PRIVATE_TRAIN_BLOCK = {
  key: 'PRIVATE',
  slug: 'private',
  title: 'Private Train',
  description: 'Create your own training with custom steps and save results',
} as const;
