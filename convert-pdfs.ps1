# Create output directory if it doesn't exist
New-Item -ItemType Directory -Force -Path "public/media/pdfs-png"

$pdfs = @(
    @{
        name = "powerbi-analytics-development-a"
        file = "public/media/pdfs/powerbi-analytics-development-a.pdf"
        pages = 4
    },
    @{
        name = "agents-research-b"
        file = "public/media/pdfs/agents-research-b.pdf"
        pages = 3
    },
    @{
        name = "open-interpreter-c"
        file = "public/media/pdfs/open-interpreter-c.pdf"
        pages = 5
    },
    @{
        name = "independent-ml-learning-model-d"
        file = "public/media/pdfs/independent-ml-learning-model-d.pdf"
        pages = 6
    }
)

# Process each PDF
foreach ($pdf in $pdfs) {
    Write-Host "Converting $($pdf.file)..."
    
    # Process each page
    for ($i = 1; $i -le $pdf.pages; $i++) {
        Write-Host "  Processing page $i..."
        & "C:\Program Files\gs\gs10.02.1\bin\gswin64c.exe" -dNOPAUSE -dBATCH -sDEVICE=png16m -r300 -dFirstPage=$i -dLastPage=$i -sOutputFile="public/media/pdfs-png/$($pdf.name)-$i.png" "$($pdf.file)"
    }
}

Write-Host "Conversion complete!" 