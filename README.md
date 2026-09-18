# Airbnb Clone

- Purpose of this project to learn NextJS from practical approach
- Tech Stack I'm using is
  - NextJS
  - TailwindCSS
  - Heroicons
  - using mapbox to render the map

## Map setup

This project requires a Mapbox access token to render the map.

### Why the map may not appear

The map will not render without a valid `NEXT_PUBLIC_MAPBOX_KEY` environment variable.

This project intentionally does not include the real token in the repository because GitHub blocks push protection for exposed secrets.

### Setup

1. Create a `.env.local` file in the project root
2. Add:

NEXT_PUBLIC_MAPBOX_KEY=your_mapbox_token_here

3. Start the app:

npm install
npm run dev

### If the map still does not appear

- confirm the token is valid
- confirm the token is not expired
- confirm it is allowed for your localhost or deployment domain
- confirm the environment variable is loaded in the running environment
