# 🎬 ALX Project 0x14 – Movies Database API Integration (Next.js)

A **Next.js** application demonstrating how to read, understand, and integrate a public API—in this case, the [MoviesDatabase API]—while applying **TypeScript** best practices to define types for request and response objects.

---

## 📖 API Overview

The **MoviesDatabase API** provides access to an extensive collection of movie and TV show data.  
Key features include:

- **Movie & TV Show Search** – Find titles by name or keywords.
- **Detailed Metadata** – Access cast, crew, ratings, genres, and plot summaries.
- **Images & Posters** – Retrieve promotional images and stills.
- **Streaming Availability** – Check where content is available to watch.

---

## 🏷 API Version

**Version:** `v1`

---

## 🔗 Available Endpoints

| Endpoint                                | Description                                                                 |
|-----------------------------------------|-----------------------------------------------------------------------------|
| `/titles`                               | Fetch a list of movies or TV shows based on filters.                        |
| `/titles/{id}`                          | Retrieve detailed information about a specific title.                       |
| `/titles/search/title/{title}`          | Search titles by name.                                                      |
| `/titles/genres`                        | Get a list of available genres.                                             |
| `/titles/{id}/cast`                     | Retrieve cast and crew information for a title.                             |
| `/titles/{id}/images`                   | Retrieve promotional images for a title.                                    |

---

## 📦 Request and Response Format

### **Request Example**
```bash
GET https://moviesdatabase.p.rapidapi.com/titles
Headers:
  X-RapidAPI-Key: YOUR_API_KEY
  X-RapidAPI-Host: moviesdatabase.p.rapidapi.com

Response Example

{
  "page": 1,
  "results": [
    {
      "id": "tt1234567",
      "titleText": { "text": "Example Movie" },
      "releaseDate": { "year": 2024, "month": 5, "day": 12 },
      "genres": [{ "id": "action", "text": "Action" }],
      "primaryImage": { "url": "https://image.url/example.jpg" }
    }
  ]
}

TypeScript Tip:
You can create an interface to define the structure:

interface Movie {
  id: string;
  titleText: { text: string };
  releaseDate: { year: number; month: number; day: number };
  genres: { id: string; text: string }[];
  primaryImage?: { url: string };
}

🔐 Authentication

All requests require authentication via RapidAPI headers:

X-RapidAPI-Key: YOUR_API_KEY
X-RapidAPI-Host: moviesdatabase.p.rapidapi.com

    Note: Never commit your API key to version control. Use environment variables (.env.local in Next.js).

⚠️ Error Handling

Common error responses:
Status Code	Meaning	Suggested Action
400	Bad Request	Check query parameters and request format.
401	Unauthorized (Invalid API Key)	Verify your API key and authentication headers.
404	Not Found	Ensure the endpoint or ID exists.
429	Too Many Requests (Rate Limit Hit)	Wait before retrying requests.
500	Internal Server Error	Try again later or report the issue.
📊 Usage Limits and Best Practices

    Rate Limit: Typically 500 requests/day (may vary by plan).

    Best Practices:

        Cache results to minimize API calls.

        Handle 429 responses gracefully with retries.

        Use pagination when fetching large datasets.

        Validate data before rendering in your UI.

🚀 Getting Started

    Clone the repository

git clone https://github.com/Joshuakibwage/alx-project-0x14.git
cd alx-project-0x14

Install dependencies

npm install

Create .env.local file

NEXT_PUBLIC_API_KEY=your_api_key_here
NEXT_PUBLIC_API_HOST=moviesdatabase.p.rapidapi.com

Run the development server

    npm run dev

📜 License

This project is licensed under the MIT License.
