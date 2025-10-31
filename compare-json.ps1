$en = Get-Content messages\en.json | ConvertFrom-Json
$ar = Get-Content messages\ar.json | ConvertFrom-Json

function Get-AllKeys {
    param($obj, $prefix = '')
    $keys = @{}
    foreach ($prop in $obj.PSObject.Properties) {
        $fullKey = if ($prefix) { "$prefix.$($prop.Name)" } else { $prop.Name }
        if ($prop.Value -is [PSCustomObject]) {
            $keys[$fullKey] = 'object'
            $nested = Get-AllKeys -obj $prop.Value -prefix $fullKey
            foreach ($k in $nested.Keys) {
                $keys[$k] = $nested[$k]
            }
        } else {
            $keys[$fullKey] = $prop.Value
        }
    }
    return $keys
}

$enKeys = Get-AllKeys $en
$arKeys = Get-AllKeys $ar

$missing = $enKeys.Keys | Where-Object { -not $arKeys.ContainsKey($_) }

if ($missing) {
    Write-Host "Missing keys in ar.json:"
    $missing | ForEach-Object { Write-Host "  $_" }
} else {
    Write-Host "No missing keys found. All keys exist in ar.json."
}

