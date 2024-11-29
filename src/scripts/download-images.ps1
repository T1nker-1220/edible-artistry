# PowerShell script to download images

# Create directories if they don't exist
$directories = @(
    "public/images/menu",
    "public/images/gallery",
    "public/images/team",
    "public/images/workshops",
    "public/images/about",
    "public/images/hero"
)

foreach ($dir in $directories) {
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force
    }
}

# Image URLs and their destinations
$imageMap = @{
    # Menu images
    "public/images/menu/cake-platter.jpg" = "https://images.unsplash.com/photo-1562777717-dc6984f65a63?auto=format&fit=crop&w=800&q=80"
    "public/images/menu/fruit-platter.jpg" = "https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&w=800&q=80"
    "public/images/menu/cupcake-platter.jpg" = "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=800&q=80"
    
    # Gallery images
    "public/images/gallery/wedding-cake.jpg" = "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=800&q=80"
    "public/images/gallery/fruit-platter.jpg" = "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=800&q=80"
    "public/images/gallery/pastries.jpg" = "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=800&q=80"
    "public/images/gallery/birthday-cake.jpg" = "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=800&q=80"
    "public/images/gallery/chocolate.jpg" = "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=800&q=80"
    "public/images/gallery/canapes.jpg" = "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=800&q=80"
    "public/images/gallery/macarons.jpg" = "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=800&q=80"
    "public/images/gallery/celebration-cake.jpg" = "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=800&q=80"
    "public/images/gallery/dessert-platter.jpg" = "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80"
    
    # Team images
    "public/images/team/chef1.jpg" = "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80"
    "public/images/team/chef2.jpg" = "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&w=800&q=80"
    "public/images/team/chef3.jpg" = "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80"
    
    # Workshop images
    "public/images/workshops/cake-workshop.jpg" = "https://images.unsplash.com/photo-1607478900766-efe13248b125?auto=format&fit=crop&w=800&q=80"
    "public/images/workshops/bread-workshop.jpg" = "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
    "public/images/workshops/pastry-workshop.jpg" = "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=80"
    
    # About images
    "public/images/about/kitchen.jpg" = "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80"
    
    # Hero images
    "public/images/hero/hero-bg.jpg" = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1920&q=80"
}

# Download images
foreach ($destination in $imageMap.Keys) {
    $url = $imageMap[$destination]
    
    if (-not (Test-Path $destination)) {
        Write-Host "Downloading image for $destination"
        Invoke-WebRequest -Uri $url -OutFile $destination
    } else {
        Write-Host "Image already exists: $destination"
    }
}

Write-Host "Image download complete!"
