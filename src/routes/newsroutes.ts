import express from "express";
import { getNews } from "../controllers/newscontroller";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: News
 *   description: News fetching API
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Article:
 *       type: object
 *       properties:
 *         source:
 *           type: object
 *           properties:
 *             id:
 *               type: string
 *               nullable: true
 *             name:
 *               type: string
 *         author:
 *           type: string
 *           nullable: true
 *         title:
 *           type: string
 *         description:
 *           type: string
 *           nullable: true
 *         url:
 *           type: string
 *         urlToImage:
 *           type: string
 *           nullable: true
 *         publishedAt:
 *           type: string
 *           format: date-time
 *         content:
 *           type: string
 *           nullable: true
 */

/**
 * @swagger
 * /news:
 *   get:
 *     summary: Get top news headlines by country and category
 *     tags: [News]
 *     parameters:
 *       - in: query
 *         name: country
 *         schema:
 *           type: string
 *           example: us
 *         description: 2-letter country code (e.g., in, us, gb)
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *           example: technology
 *         description: News category (e.g., business, technology, sports)
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           example: 1
 *         description: Page number for pagination
 *     responses:
 *       200:
 *         description: Successfully fetched news
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 country:
 *                   type: string
 *                   example: us
 *                 category:
 *                   type: string
 *                   example: technology
 *                 totalResults:
 *                   type: integer
 *                   example: 34
 *                 articles:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Article'
 *       500:
 *         description: Server error while fetching news
 */
router.get("/", getNews);

export default router;
