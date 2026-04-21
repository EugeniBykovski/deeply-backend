#!/usr/bin/env bash
# Apply pending Prisma migrations to the production Neon database.
# Reads credentials from packages/database/.env.production
# Uses DIRECT_URL (non-pooled) as required by Neon for migrations.
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

if [ -z "${DIRECT_URL:-}" ]; then
  echo "ERROR: DIRECT_URL is not set in $ENV_FILE"
  exit 1
fi

echo "→ Applying migrations to production..."
cd "$ROOT/packages/database"
npx prisma migrate deploy --url "$DIRECT_URL"
echo "✓ Migrations applied."
