#!/usr/bin/env bash
# Seed the production Neon database (idempotent — safe to re-run).
# Reads credentials from packages/database/.env.production
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$SCRIPT_DIR/.."
ENV_FILE="$ROOT/packages/database/.env.production"

if [ ! -f "$ENV_FILE" ]; then
  echo "ERROR: $ENV_FILE not found."
  echo "Create it with DATABASE_URL and DIRECT_URL for the Neon production database."
  exit 1
fi

set -a
source "$ENV_FILE"
set +a

if [ -z "${DATABASE_URL:-}" ]; then
  echo "ERROR: DATABASE_URL is not set in $ENV_FILE"
  exit 1
fi

echo "→ Seeding production database..."
cd "$ROOT/packages/database"
npx tsx prisma/seed.ts
echo "✓ Production database seeded."
