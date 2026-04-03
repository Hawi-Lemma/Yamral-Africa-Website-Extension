# Yamral Africa Website Extension - Ethiopia Itineraries

A comprehensive web-based itinerary and travel guide for exploring Ethiopia, showcasing accommodations, destinations, daily information, transportation, and interactive maps.

## 📋 Project Overview

This project is part of the Yamral Africa Safari, Tour and Travel platform, designed to provide tourists with detailed information about Ethiopian travel itineraries. The website features:

- **Destinations**: Explore popular Ethiopian destinations
- **Accommodations**: Browse available hotels and lodges
- **Daily Information**: Detailed day-by-day itinerary information
- **Transportation**: Guide to getting around during your travels
- **Interactive Maps**: Visual location planning
- **Information Hub**: General travel information

## 🗂️ Project Structure

```
├── index.html                 # Main entry point (homepage)
├── overview.html              # Overview of itinerary
├── destination.html           # Destination details
├── Accomodation.html          # Accommodation listings
├── daily_information.html      # Daily itinerary details
├── transport.html             # Transportation information
├── map.html                   # Interactive map
├── information.html           # General information
├── css/                       # Stylesheets
│   ├── styles.css
│   ├── style.css
│   ├── bootstrap.min.css
│   ├── image.slider.css
│   ├── and more...
├── js/                        # JavaScript files
│   ├── main.js
│   ├── jquery-*.js
│   ├── bootstrap.min.js
│   ├── and more...
├── image/                     # Images organized by location
│   ├── armah-hotel/
│   ├── avanti/
│   ├── ethiopian-skylight/
│   ├── and more...
├── fonts/                     # Custom fonts
│   ├── flaticon/
│   └── icomoon/
└── README.md                  # This file
```

## 🚀 Getting Started

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/Hawi-Lemma/Yamral-Africa-Website-Extension.git
cd Yamral-Africa-Website-Extension
```

2. Open in a local server (required for proper CSS/JS loading):
   - **Using Python 3**:
     ```bash
     python -m http.server 8000
     ```
   - **Using Python 2**:
     ```bash
     python -m SimpleHTTPServer 8000
     ```
   - **Using Node.js (http-server)**:
     ```bash
     npx http-server
     ```

3. Open your browser and navigate to `http://localhost:8000`

## 🌐 Deploying to GitHub Pages

### Setup Instructions

1. **Rename the main file**: GitHub Pages looks for `index.html` as the entry point.
   - Rename `overview.html` to `index.html`, OR
   - Use GitHub Pages settings to specify a custom entry point

2. **Configure GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Source", select:
     - Branch: `main`
     - Folder: `/ (root)` (or `/docs` if you prefer organizing in a separate folder)
   - Click "Save"

3. **Wait for deployment** (usually takes 1-2 minutes)
   - Your site will be available at: `https://hawi-lemma.github.io/Yamral-Africa-Website-Extension/`

### Alternative: Using the `/docs` Folder Structure

If you want to organize GitHub Pages separately:

1. Create a `/docs` folder and move all files there
2. In GitHub Settings → Pages, select `/docs` as the source
3. Update all relative paths in HTML files if necessary

### Recommended Structure for GitHub Pages

```
Yamral-Africa-Website-Extension/
├── index.html              # Rename from overview.html
├── destination.html
├── Accomodation.html
├── daily_information.html
├── transport.html
├── map.html
├── information.html
├── css/
├── js/
├── image/
├── fonts/
├── README.md
└── .gitignore             # (optional) exclude node_modules, etc.
```

## 🔧 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Styling and responsive design
  - Bootstrap 5
  - Custom stylesheets
- **JavaScript**: Interactivity
  - jQuery 3.x
  - Custom scripts
  - Image sliders
  - Modal windows
- **Fonts**: Flaticon, icomoon, Google Fonts

## 📦 Dependencies

### CSS Libraries
- Bootstrap 5 (Responsive framework)
- AOS (Animate on scroll)
- Image sliders
- Owl Carousel
- Custom styling

### JavaScript Libraries
- jQuery 3.x
- jQuery Migrate
- Bootstrap JS
- jQuery Magnific Popup (image lightbox)
- jQuery Stellar (parallax scrolling)
- MediaElement Player
- Slick slider
- Custom scripts

## 🐛 Troubleshooting

### CSS/JS files not loading
- Make sure you're using a local server (not opening HTML directly in browser)
- Check file paths in HTML (relative paths should be correct)
- Clear browser cache (Ctrl+Shift+Del)

### Images not displaying
- Verify image paths in the HTML files
- Check that image files exist in the `/image` folder
- Ensure proper folder structure for organized hotel/destination images

### GitHub Pages not updating
- Wait 2-3 minutes after pushing changes
- Hard refresh your browser (Ctrl+Shift+R)
- Check GitHub Actions tab for any deployment errors

## 📝 Development Notes

- All image paths use relative URLs (e.g., `image/hotel-name/image.jpg`)
- CSS and JS are loaded from the root directories
- Bootstrap framework is used as the base for responsiveness
- Custom styling in `css/styles.css` and `css/style.css`

## 🤝 Contributing

1. Create a new branch for your feature
2. Make your changes
3. Commit and push to your branch
4. Create a Pull Request

## 📄 License

[Add your license information here]

## 📞 Contact

**Yamral Africa Safari, Tour and Travel**
- GitHub: [@Hawi-Lemma](https://github.com/Hawi-Lemma)

## 🚀 Future Enhancements

- [ ] Responsive design improvements
- [ ] Performance optimization
- [ ] SEO enhancement
- [ ] Booking system integration
- [ ] Backend API integration
- [ ] Customer review system
- [ ] Multi-language support

---

Last Updated: April 3, 2026
