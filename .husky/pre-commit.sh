#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

echo "husky pre-commit" && npm run lint