#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

if command -v fnm >/dev/null 2>&1; then
  export PATH="$HOME/.local/share/fnm:$PATH"
  eval "$(fnm env --use-on-cd)"
  fnm install 20
  fnm use 20
elif command -v nvm >/dev/null 2>&1; then
  # shellcheck source=/dev/null
  source "$HOME/.nvm/nvm.sh"
  nvm install 20
  nvm use 20
fi

echo "Node: $(node -v)"
echo "npm:  $(npm -v)"

node -e "const v=process.versions.node.split('.').map(Number); if(v[0]<18){console.error('Need Node 18+. Current:',process.version); process.exit(1)}"

rm -rf node_modules package-lock.json
npm install

echo ""
echo "Done. Run: npm run dev"
