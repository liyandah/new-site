@echo off
cd /d "%~dp0"

where npm >nul 2>&1
if errorlevel 1 (
  echo Node.js is not installed or npm is not on PATH.
  echo Install Node.js from https://nodejs.org and try again.
  pause
  exit /b 1
)

if not exist "node_modules\" (
  echo Installing dependencies...
  call npm install
  if errorlevel 1 (
    echo npm install failed.
    pause
    exit /b 1
  )
)

echo Starting SAMAZ Mobile Technology...
call npm run dev
pause
