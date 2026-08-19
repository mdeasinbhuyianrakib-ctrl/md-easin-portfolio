#!/usr/bin/env bash
# Regenerates cv/MD-Easin-Bhuyian-CV.pdf from cv/cv-source.html
# Requires Google Chrome or Chromium.
# Usage:  bash tools/build-cv.sh  [path-to-chrome]
set -euo pipefail
cd "$(dirname "$0")/.."

CHROME="${1:-}"
if [ -z "$CHROME" ]; then
  for c in google-chrome chromium chromium-browser \
           "/opt/pw-browsers/chromium-1194/chrome-linux/chrome" \
           "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"; do
    if command -v "$c" >/dev/null 2>&1 || [ -x "$c" ]; then CHROME="$c"; break; fi
  done
fi
if [ -z "$CHROME" ]; then
  echo "Chrome/Chromium not found. Pass the path: bash tools/build-cv.sh /path/to/chrome" >&2
  exit 1
fi

"$CHROME" --headless --disable-gpu --no-sandbox --hide-scrollbars \
  --no-pdf-header-footer \
  --print-to-pdf="$PWD/cv/MD-Easin-Bhuyian-CV.pdf" \
  "file://$PWD/cv/cv-source.html" >/dev/null 2>&1

echo "Built: cv/MD-Easin-Bhuyian-CV.pdf"
