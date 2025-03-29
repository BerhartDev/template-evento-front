#!/bin/bash

# Create public directory if it doesn't exist
mkdir -p public

# Download artist images
curl -o public/artist-1.jpg "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80" # DJ performing
curl -o public/artist-2.jpg "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80" # DJ at console
curl -o public/artist-3.jpg "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80" # DJ mixing
curl -o public/artist-4.jpg "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80" # DJ crowd

# Download location image (map)
curl -o public/location.jpg "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80" # Map view

# Download ticket images
curl -o public/ticket-pista.jpg "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&q=80" # Crowd at festival
curl -o public/ticket-vip.jpg "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80" # VIP area
curl -o public/ticket-camarote.jpg "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80" # Premium area

# Download hero background
curl -o public/hero-bg.jpg "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=1920&q=80" # Festival crowd

echo "Images downloaded successfully!" 