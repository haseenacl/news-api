import { Request, Response, NextFunction } from "express";
import axios from "axios";

export const getNews = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { country = "us", category = "general", page = "1" } = req.query;

    const apiKey = process.env.NEWS_API_KEY;
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=${page}&apiKey=${apiKey}`;

    const response = await axios.get<{ totalResults: number; articles: any[] }>(url);
const data = response.data;


    res.status(200).json({
      success: true,
      country,
      category,
      totalResults: data.totalResults,
      articles: data.articles,
    });
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching news",
    });
  }
};
