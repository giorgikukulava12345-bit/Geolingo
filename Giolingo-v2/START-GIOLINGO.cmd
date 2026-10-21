@echo off
chcp 65001 >nul
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo გთხოვ დააყენე Node.js 22.12 ან უფრო ახალი: https://nodejs.org/
  pause
  exit /b 1
)
node -e "const [major,minor]=process.versions.node.split('.').map(Number);process.exit(major>22||(major===22&&minor>=12)?0:1)"
if errorlevel 1 (
  echo საჭიროა Node.js 22.12 ან უფრო ახალი ვერსია: https://nodejs.org/
  pause
  exit /b 1
)
echo Giolingo - საჭირო ფაილების მომზადება...
call npm install --no-audit --no-fund
if errorlevel 1 (
  echo ინსტალაცია ვერ დასრულდა. შეამოწმე ინტერნეტი და Node.js-ის ვერსია.
  pause
  exit /b 1
)
echo Giolingo იწყება. ეს ფანჯარა ღია დატოვე.
call npm run dev -- --open
pause
