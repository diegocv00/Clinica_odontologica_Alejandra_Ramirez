@echo off
cd /d "%~dp0"
title Astro Server
echo ==============================================
echo Iniciando el servidor de desarrollo Astro...
echo ==============================================

REM Check if Node is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] No se encontro Node.js. Por favor instala Node.js desde https://nodejs.org/
    pause
    exit /b
)

echo Node.js detectado.
echo Ejecutando 'npm run dev'...
echo.
echo Una vez que aparezca "Ready", abre tu navegador en:
echo http://localhost:4321
echo.

call npm run dev

if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Hubo un error al iniciar el servidor.
)

echo.
echo El servidor se ha detenido.
pause
