@echo off
cd /d "%~dp0"
echo GEOling will be available at http://localhost:3000
echo Keep this window open. Press Ctrl+C to stop.
node scripts/serve.mjs
pause
