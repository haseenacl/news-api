import { Request, Response } from "express";
import axios from "axios";

const apiKey = "6cd9cefb538b4ad489c343e8aaef2921";

// Define the expected API response structure
interface NewsApiResponse {
  totalResults: number;
  articles: any[];
}

export const getNews = async (req: Request, res: Response) => {
  try {
    const {
      country = "us",
      category = "general",
      page = "1",
    } = req.query as { country?: string; category?: string; page?: string };

    // 👇 Explicitly type the Axios response
    const response = await axios.get<NewsApiResponse>(
      "https://newsapi.org/v2/top-headlines",
      {
        params: { country, category, page, apiKey },
      }
    );

    // 👇 No more 'unknown' type issue
    const data: NewsApiResponse = response.data;

    res.status(200).json({
      success: true,
      country,
      category,
      totalResults: data.totalResults,
      articles: data.articles,
    });
  } catch (error: any) {
    console.error("Error fetching news:", error.message);
    res.status(500).json({
      success: false,
      message: "Error fetching news articles",
      error: error.message,
    });
  }
};
