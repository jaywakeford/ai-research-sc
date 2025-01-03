# Clear any existing processes
Write-Host "Stopping any existing Node.js processes..."
Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force

# Clear build files
Write-Host "Cleaning build files..."
Remove-Item -Path '.next' -Recurse -Force -ErrorAction SilentlyContinue

# Set environment variables
$env:HTTP_PROXY = ""
$env:HTTPS_PROXY = ""
$env:NO_PROXY = "localhost,127.0.0.1"
$env:PORT = "9876"
$env:NODE_OPTIONS = "--max-old-space-size=4096"

# Install dependencies if needed
if (-not (Test-Path "node_modules")) {
    Write-Host "Installing dependencies..."
    npm install
}

# Build the application
Write-Host "Building the application..."
npm run build

# Start the production server
Write-Host "Starting the production server..."
npm run start 