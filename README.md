# Gabriel Santos Personal Portfolio Website

Welcome to the source code of my personal portfolio website! This project showcases my background, hobbies, interests, and projects. The website is built using HTML, CSS, and JavaScript, and is designed to be simple, responsive, and easy to navigate.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Customization](#customization)
- [Projects](#projects)
- [Contact](#contact)

## Overview

The website consists of three main pages:

- **About Me**: Introduces who I am and my background.
- **Hobbies & Interests**: Highlights my personal interests with an interactive slideshow.
- **Projects**: Showcases my projects with detailed descriptions.

## Features

- **Accordion Sections**: Expandable sections on the "About Me" and "Projects" pages to organize content.
- **Slideshow Gallery**: An image slideshow on the "Hobbies & Interests" page with captions.
- **Responsive Design**: Optimized for various screen sizes and devices.
- **Navigation Bar**: Consistent navigation across all pages for easy browsing.
- **Footer with Contact Info**: Includes email and social media links with icons.
- **Profile Photo**: A personal photo displayed on each page.

## Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**

## File Structure

```
├── index.html
├── hobbies.html
├── projects.html
├── styles.css
├── accordion.js
├── slideshow.js
├── images/
│   ├── gabriel.png
│   ├── linkedin.jpg
│   ├── github.png
│   ├── camping.webp
│   ├── movies.webp
│   └── gaming.webp
```

### HTML Files

- **index.html**: The main page with an introduction and accordion sections detailing various aspects of my background.
- **hobbies.html**: Showcases my hobbies and interests with a slideshow.
- **projects.html**: Highlights my projects with detailed descriptions in accordion sections.

### CSS File

- **styles.css**: Contains all the styling for the website, including resets, layout, typography, navigation, accordion, slideshow, and responsive design.

### JavaScript Files

- **accordion.js**: Initializes the navigation bar and footer, and sets up the accordion functionality on applicable pages.
- **slideshow.js**: Controls the image slideshow on the "Hobbies & Interests" page, allowing navigation through slides.

### Images

Located in the `images/` directory:

- **gabriel.png**: Profile photo displayed on each page.
- **linkedin.jpg**: LinkedIn logo used in the footer for the social media link.
- **github.png**: GitHub logo used in the footer for the social media link.
- **camping.webp**, **movies.webp**, **gaming.webp**: Images used in the slideshow on the "Hobbies & Interests" page.

## Getting Started

To view the website locally, simply open the HTML files in your web browser.

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge, etc.)

### Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/SnorlaxCansado/your-repository-name.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd your-repository-name
   ```

3. **Open `index.html` in Your Web Browser**

   - Double-click `index.html` or
   - Right-click `index.html` and select "Open with" followed by your preferred browser.

## Usage

- **Navigation**

  Use the navigation bar at the top of each page to switch between "About Me," "Hobbies & Interests," and "Projects" pages.

- **Accordion Sections**

  On the "About Me" and "Projects" pages, click on the accordion buttons to expand and view more information.

- **Slideshow**

  On the "Hobbies & Interests" page, use the previous (`&#10094;`) and next (`&#10095;`) buttons to navigate through the slideshow images.

## Customization

Feel free to customize this website for your own use:

1. **Update Content**

   - Modify the HTML files (`index.html`, `hobbies.html`, `projects.html`) with your own information.
   - Change headings, paragraphs, and links to reflect your personal details.

2. **Change Images**

   - Replace images in the `images/` directory with your own.
   - Update the `src` attributes in the HTML files if you change image file names.

3. **Modify Styles**

   - Edit `styles.css` to change colors, fonts, layout, and other styling aspects.

4. **Update Scripts**

   - If adding new features, ensure the JavaScript files (`accordion.js`, `slideshow.js`) are updated accordingly.

## Projects

### Hsfinance

- **Repository**: [hsfinance](https://github.com/SnorlaxCansado/hsfinance)

**Overview**

Hsfinance is a Stock Analysis Report Generator that combines various data sources to produce comprehensive reports for selected stock tickers. It leverages multiple APIs and AI tools to gather financial, geopolitical, and sector-specific news, creating insightful reports in both text and PDF formats.

**Features**

- Selects complementary tickers for comparative analysis.
- Collects stock data from Yahoo Finance and news using SERPER and Jina AI APIs.
- Generates AI-powered insights on stock performance, geopolitical impacts, and sector-specific context.
- Produces a well-formatted PDF report with all relevant data and analysis.

### Market Data Proof of Concept

- **Repository**: [market_data_poc](https://github.com/SnorlaxCansado/market_data_poc)

**Overview**

This Proof of Concept (PoC) demonstrates a simple pipeline for fetching stock market data from an API, transforming the data, and saving it in both CSV and Excel formats. The project is designed to be lightweight and efficient.

## Contact

Feel free to reach out to me via email or connect with me on LinkedIn and GitHub.

- **Email**: [gabrielthss@gmail.com](mailto:gabrielthss@gmail.com)
- **LinkedIn**: [Gabriel Santos](https://www.linkedin.com/in/gabriel-tiago-hardt-de-souto-santos-6471622a8)
- **GitHub**: [SnorlaxCansado](https://github.com/SnorlaxCansado)