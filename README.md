# Architecture
- The application is built using Next.js (App Router). Only the required components are rendered on the client side, rest are rendered on the server side.
- The app uses Next Video library to play videos.
- The home page is rendered on the server side, so the initial data are fetched on the server. And once we add more videos, we revalidate the home path to clear the cache and bring on the new data.
- Used Shadcn and Tailwind for styling.

# Features
- List of uploaded videos.
- Individual video page.
- You can add more videos by providing direct .mp4 links. (For testing : http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4)
- Comments section is added below the video player.

# Run it locally
- `npm install`
- `npm run dev`

The app will be running on the port chose by your dev environment

# Screenshots
![Full Width](/Screenshots/LearnwellFullPage.jpeg)
![Full Width](/Screenshots/Learnwell.jpeg)