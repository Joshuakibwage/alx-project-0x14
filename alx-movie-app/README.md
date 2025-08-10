# 🎬 CineSeek – Movie Discovery App

CineSeek is a modern movie discovery application built with **Next.js**, **TypeScript**, and **Tailwind CSS**.  
It integrates with the [MoviesDatabase API](https://rapidapi.com/SAdrian/api/moviesdatabase/) to help users browse, filter, and explore movies by year or genre – all within a responsive and clean UI.

This project is part of the **ALX ProDev Front-End Program**, aimed at strengthening API integration skills, component-based architecture, and TypeScript best practices.

---

## 📌 Features

- **Movie Browsing** – Paginated list of movies fetched from the MoviesDatabase API.
- **Filtering** – Filter movies by year and genre.
- **Responsive UI** – Works seamlessly across desktop and mobile devices.
- **Reusable Components** – Header, Footer, Button, Loading screen, and MovieCard.
- **Secure API Access** – Server-side API routes to protect the API key.
- **Loading & Error Handling** – Smooth feedback when fetching data.
- **Environment Variable Management** – API keys stored securely in `.env.local`.

---

## 🛠 Tech Stack

- **Framework:** [Next.js 14 (Pages Router)](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Font Awesome](https://fontawesome.com/)
- **API:** [MoviesDatabase API](https://rapidapi.com/SAdrian/api/moviesdatabase/)

---

## 📂 Folder Structure

alx-movie-app/
├── components/
│ ├── commons/ # Reusable UI components
│ └── layouts/ # Layout components (Header, Footer, Layout)
├── interfaces/ # TypeScript interfaces
├── pages/ # Next.js pages & API routes
│ ├── api/ # Server-side API handlers
│ └── movies/ # Movie listing page
├── public/ # Static assets
├── styles/ # Global styles
└── .env.local # Environment variables (not committed)


---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Joshuakibwage/alx-project-0x14.git
cd alx-movie-app

2️⃣ Install dependencies

npm install

3️⃣ Set up environment variables

Create a .env.local file in the root directory and add:

MOVIE_API_KEY=your_api_key_here

4️⃣ Run the development server

npm run dev

Visit http://localhost:3000 in your browser.
📡 API Overview

CineSeek uses the MoviesDatabase API to retrieve movie information.
Key endpoint:

    /titles – Fetches a paginated list of movies, filterable by year and genre.

Request Example

POST /api/fetch-movies
{
  "year": 2024,
  "page": 1,
  "genre": "Comedy"
}

Response Example

{
  "movies": [
    {
      "id": "tt1234567",
      "titleText": { "text": "Sample Movie" },
      "primaryImage": { "url": "https://..." },
      "releaseYear": { "year": "2024" }
    }
  ]
}

## 📱 Screenshots

### Home Page
![Home Page Screenshot](/public/home.png)

### Movies Page
![Movies Page Screenshot](/public/movies.png)



💡 Lessons Learned

While building CineSeek, I practiced:

    Setting up a Next.js + TypeScript + Tailwind project from scratch.

    Creating typed reusable components.

    Managing API calls securely with server-side routes.

    Implementing loading states and basic error handling.

    Applying responsive design principles.

🔍 Areas for Improvement

This is a work in progress, and here’s what I still want to improve:

    Better Error Feedback: Right now, API errors are logged but not user-friendly.

    More Genre Options: Currently limited to a few genres; could fetch dynamically from the API.

    Search Functionality: Search input exists but needs full integration with API filtering.

    Caching / Performance: Explore caching results to reduce API calls and improve speed.

    Accessibility: Add ARIA labels and improve keyboard navigation.

📜 License

This project is for educational purposes under the ALX ProDev Program.
Feel free to fork and adapt it for learning!
🤝 Contributing

If you find improvements or want to collaborate, open a pull request or issue.
Learning together makes the journey better!