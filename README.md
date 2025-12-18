# Movie Review

A modern movie database application built with Next.js, providing an intuitive interface to explore and discover movies using data from The Movie Database (TMDb).

![Movie Homepage](moviehomepage.png)

## Features

- **Curated Movie Lists**: Browse trending, top-rated, now playing, and upcoming movies
- **Search Functionality**: Search for movies, actors, and directors
- **Detailed Movie Pages**: View comprehensive movie information including posters, ratings, genres, release dates, and overviews
- **Dark Mode Support**: Toggle between light and dark themes
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Glassmorphism UI**: Modern design with glass-like effects and smooth animations

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yuqiao1205/movie-review
   cd movie-review
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Setup**:
   - Create a `.env` file in the root directory
   - Add your TMDb API key:
     ```
     MOVIE_API_KEY=your_tmdb_api_key_here
     ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser** and navigate to `http://localhost:3000`

## API Information

This application uses the [TMDb API](https://www.themoviedb.org/documentation/api) to fetch movie data.

- **API Key**: Obtain a free API key by creating an account at [TMDb](https://www.themoviedb.org/settings/api)
- **Endpoints Used**:
  - Trending movies: `/trending/all/week`
  - Top rated movies: `/movie/top_rated`
  - Now playing movies: `/movie/now_playing`
  - Upcoming movies: `/movie/upcoming`
  - Movie details: `/movie/{movie_id}`
  - Search: `/search/movie`

## Technologies Used

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom glassmorphism effects
- **Icons**: React Icons
- **Theming**: next-themes for dark mode
- **HTTP Client**: node-fetch for server-side API calls
- **Font**: Poppins from Google Fonts

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

## Project Structure

```
src/
├── app/
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page with movie lists
│   ├── movie/[id]/        # Individual movie pages
│   ├── search/[searchTerm]/ # Search results pages
│   └── about/             # About page
├── components/
│   ├── Card.jsx           # Movie card component
│   ├── Results.jsx        # Movie grid display
│   ├── SearchBox.jsx      # Search input component
│   ├── Navbar.jsx         # Navigation menu
│   ├── Header.jsx         # App header
│   ├── Footer.jsx         # App footer
│   └── DarkModeSwitch.jsx # Theme toggle
└── app/
    └── globals.css        # Global styles
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).