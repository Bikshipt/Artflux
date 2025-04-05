import express, { type Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import {
  insertUserSchema,
  insertContentSchema,
  insertEpisodeSchema,
  insertInteractionSchema,
  insertCommentSchema,
  insertSubscriptionTierSchema
} from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // User Routes
  app.post("/api/auth/register", async (req: Request, res: Response) => {
    try {
      const userData = insertUserSchema.parse(req.body);
      
      // Check if username already exists
      const existingUsername = await storage.getUserByUsername(userData.username);
      if (existingUsername) {
        return res.status(400).json({ message: "Username already taken" });
      }
      
      // Check if email already exists
      const existingEmail = await storage.getUserByEmail(userData.email);
      if (existingEmail) {
        return res.status(400).json({ message: "Email already registered" });
      }
      
      const newUser = await storage.createUser(userData);
      
      // Don't return password in response
      const { password, ...userWithoutPassword } = newUser;
      
      res.status(201).json(userWithoutPassword);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid user data", errors: error.errors });
      }
      res.status(500).json({ message: "Server error during registration" });
    }
  });
  
  app.post("/api/auth/login", async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      
      if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
      }
      
      const user = await storage.getUserByUsername(username);
      if (!user || user.password !== password) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      
      // Don't return password in response
      const { password: _, ...userWithoutPassword } = user;
      
      res.status(200).json(userWithoutPassword);
    } catch (error) {
      res.status(500).json({ message: "Server error during login" });
    }
  });
  
  app.get("/api/users/:id", async (req: Request, res: Response) => {
    try {
      const userId = parseInt(req.params.id);
      if (isNaN(userId)) {
        return res.status(400).json({ message: "Invalid user ID" });
      }
      
      const user = await storage.getUser(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      
      // Don't return password in response
      const { password, ...userWithoutPassword } = user;
      
      res.status(200).json(userWithoutPassword);
    } catch (error) {
      res.status(500).json({ message: "Server error retrieving user" });
    }
  });
  
  app.patch("/api/users/:id", async (req: Request, res: Response) => {
    try {
      const userId = parseInt(req.params.id);
      if (isNaN(userId)) {
        return res.status(400).json({ message: "Invalid user ID" });
      }
      
      const updateData = req.body;
      
      const updatedUser = await storage.updateUser(userId, updateData);
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      
      // Don't return password in response
      const { password, ...userWithoutPassword } = updatedUser;
      
      res.status(200).json(userWithoutPassword);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid update data", errors: error.errors });
      }
      res.status(500).json({ message: "Server error updating user" });
    }
  });
  
  // Content Routes
  app.get("/api/content", async (req: Request, res: Response) => {
    try {
      const { genre, userId, search, trending } = req.query;
      
      let contentList = [];
      
      if (trending) {
        const limit = parseInt(trending as string) || 10;
        contentList = await storage.getTrendingContent(limit);
      } else if (genre) {
        contentList = await storage.getContentByGenre(genre as string);
      } else if (userId) {
        const id = parseInt(userId as string);
        if (isNaN(id)) {
          return res.status(400).json({ message: "Invalid user ID" });
        }
        contentList = await storage.getContentByUserId(id);
      } else if (search) {
        contentList = await storage.searchContent(search as string);
      } else {
        contentList = Array.from((await storage).content.values());
      }
      
      res.status(200).json(contentList);
    } catch (error) {
      res.status(500).json({ message: "Server error retrieving content" });
    }
  });
  
  app.get("/api/content/:id", async (req: Request, res: Response) => {
    try {
      const contentId = parseInt(req.params.id);
      if (isNaN(contentId)) {
        return res.status(400).json({ message: "Invalid content ID" });
      }
      
      const content = await storage.getContent(contentId);
      if (!content) {
        return res.status(404).json({ message: "Content not found" });
      }
      
      res.status(200).json(content);
    } catch (error) {
      res.status(500).json({ message: "Server error retrieving content" });
    }
  });
  
  app.post("/api/content", async (req: Request, res: Response) => {
    try {
      const contentData = insertContentSchema.parse(req.body);
      const newContent = await storage.createContent(contentData);
      res.status(201).json(newContent);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid content data", errors: error.errors });
      }
      res.status(500).json({ message: "Server error creating content" });
    }
  });
  
  app.patch("/api/content/:id", async (req: Request, res: Response) => {
    try {
      const contentId = parseInt(req.params.id);
      if (isNaN(contentId)) {
        return res.status(400).json({ message: "Invalid content ID" });
      }
      
      const updateData = req.body;
      
      const updatedContent = await storage.updateContent(contentId, updateData);
      if (!updatedContent) {
        return res.status(404).json({ message: "Content not found" });
      }
      
      res.status(200).json(updatedContent);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid update data", errors: error.errors });
      }
      res.status(500).json({ message: "Server error updating content" });
    }
  });
  
  app.delete("/api/content/:id", async (req: Request, res: Response) => {
    try {
      const contentId = parseInt(req.params.id);
      if (isNaN(contentId)) {
        return res.status(400).json({ message: "Invalid content ID" });
      }
      
      const deleted = await storage.deleteContent(contentId);
      if (!deleted) {
        return res.status(404).json({ message: "Content not found" });
      }
      
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: "Server error deleting content" });
    }
  });
  
  // Episode Routes
  app.get("/api/content/:contentId/episodes", async (req: Request, res: Response) => {
    try {
      const contentId = parseInt(req.params.contentId);
      if (isNaN(contentId)) {
        return res.status(400).json({ message: "Invalid content ID" });
      }
      
      const episodes = await storage.getEpisodesByContentId(contentId);
      res.status(200).json(episodes);
    } catch (error) {
      res.status(500).json({ message: "Server error retrieving episodes" });
    }
  });
  
  app.get("/api/episodes/:id", async (req: Request, res: Response) => {
    try {
      const episodeId = parseInt(req.params.id);
      if (isNaN(episodeId)) {
        return res.status(400).json({ message: "Invalid episode ID" });
      }
      
      const episode = await storage.getEpisode(episodeId);
      if (!episode) {
        return res.status(404).json({ message: "Episode not found" });
      }
      
      res.status(200).json(episode);
    } catch (error) {
      res.status(500).json({ message: "Server error retrieving episode" });
    }
  });
  
  app.post("/api/episodes", async (req: Request, res: Response) => {
    try {
      const episodeData = insertEpisodeSchema.parse(req.body);
      const newEpisode = await storage.createEpisode(episodeData);
      res.status(201).json(newEpisode);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid episode data", errors: error.errors });
      }
      res.status(500).json({ message: "Server error creating episode" });
    }
  });
  
  app.patch("/api/episodes/:id", async (req: Request, res: Response) => {
    try {
      const episodeId = parseInt(req.params.id);
      if (isNaN(episodeId)) {
        return res.status(400).json({ message: "Invalid episode ID" });
      }
      
      const updateData = req.body;
      
      const updatedEpisode = await storage.updateEpisode(episodeId, updateData);
      if (!updatedEpisode) {
        return res.status(404).json({ message: "Episode not found" });
      }
      
      res.status(200).json(updatedEpisode);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid update data", errors: error.errors });
      }
      res.status(500).json({ message: "Server error updating episode" });
    }
  });
  
  app.delete("/api/episodes/:id", async (req: Request, res: Response) => {
    try {
      const episodeId = parseInt(req.params.id);
      if (isNaN(episodeId)) {
        return res.status(400).json({ message: "Invalid episode ID" });
      }
      
      const deleted = await storage.deleteEpisode(episodeId);
      if (!deleted) {
        return res.status(404).json({ message: "Episode not found" });
      }
      
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: "Server error deleting episode" });
    }
  });
  
  // Interaction Routes
  app.post("/api/interactions", async (req: Request, res: Response) => {
    try {
      const interactionData = insertInteractionSchema.parse(req.body);
      
      // Check if interaction already exists
      const existingInteraction = await storage.getInteraction(
        interactionData.userId,
        interactionData.contentId,
        interactionData.episodeId,
        interactionData.interactionType
      );
      
      if (existingInteraction) {
        return res.status(200).json(existingInteraction); // Interaction already exists
      }
      
      const newInteraction = await storage.createInteraction(interactionData);
      res.status(201).json(newInteraction);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid interaction data", errors: error.errors });
      }
      res.status(500).json({ message: "Server error creating interaction" });
    }
  });
  
  app.delete("/api/interactions/:id", async (req: Request, res: Response) => {
    try {
      const interactionId = parseInt(req.params.id);
      if (isNaN(interactionId)) {
        return res.status(400).json({ message: "Invalid interaction ID" });
      }
      
      const deleted = await storage.deleteInteraction(interactionId);
      if (!deleted) {
        return res.status(404).json({ message: "Interaction not found" });
      }
      
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: "Server error deleting interaction" });
    }
  });
  
  // Comment Routes
  app.get("/api/content/:contentId/comments", async (req: Request, res: Response) => {
    try {
      const contentId = parseInt(req.params.contentId);
      if (isNaN(contentId)) {
        return res.status(400).json({ message: "Invalid content ID" });
      }
      
      const comments = await storage.getCommentsByContentId(contentId);
      res.status(200).json(comments);
    } catch (error) {
      res.status(500).json({ message: "Server error retrieving comments" });
    }
  });
  
  app.get("/api/episodes/:episodeId/comments", async (req: Request, res: Response) => {
    try {
      const episodeId = parseInt(req.params.episodeId);
      if (isNaN(episodeId)) {
        return res.status(400).json({ message: "Invalid episode ID" });
      }
      
      const comments = await storage.getCommentsByEpisodeId(episodeId);
      res.status(200).json(comments);
    } catch (error) {
      res.status(500).json({ message: "Server error retrieving comments" });
    }
  });
  
  app.post("/api/comments", async (req: Request, res: Response) => {
    try {
      const commentData = insertCommentSchema.parse(req.body);
      const newComment = await storage.createComment(commentData);
      res.status(201).json(newComment);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid comment data", errors: error.errors });
      }
      res.status(500).json({ message: "Server error creating comment" });
    }
  });
  
  app.patch("/api/comments/:id", async (req: Request, res: Response) => {
    try {
      const commentId = parseInt(req.params.id);
      if (isNaN(commentId)) {
        return res.status(400).json({ message: "Invalid comment ID" });
      }
      
      const { text } = req.body;
      if (!text) {
        return res.status(400).json({ message: "Comment text is required" });
      }
      
      const updatedComment = await storage.updateComment(commentId, text);
      if (!updatedComment) {
        return res.status(404).json({ message: "Comment not found" });
      }
      
      res.status(200).json(updatedComment);
    } catch (error) {
      res.status(500).json({ message: "Server error updating comment" });
    }
  });
  
  app.delete("/api/comments/:id", async (req: Request, res: Response) => {
    try {
      const commentId = parseInt(req.params.id);
      if (isNaN(commentId)) {
        return res.status(400).json({ message: "Invalid comment ID" });
      }
      
      const deleted = await storage.deleteComment(commentId);
      if (!deleted) {
        return res.status(404).json({ message: "Comment not found" });
      }
      
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: "Server error deleting comment" });
    }
  });
  
  // Subscription Tier Routes
  app.get("/api/users/:userId/subscription-tiers", async (req: Request, res: Response) => {
    try {
      const userId = parseInt(req.params.userId);
      if (isNaN(userId)) {
        return res.status(400).json({ message: "Invalid user ID" });
      }
      
      const tiers = await storage.getSubscriptionTiersByUserId(userId);
      res.status(200).json(tiers);
    } catch (error) {
      res.status(500).json({ message: "Server error retrieving subscription tiers" });
    }
  });
  
  app.post("/api/subscription-tiers", async (req: Request, res: Response) => {
    try {
      const tierData = insertSubscriptionTierSchema.parse(req.body);
      const newTier = await storage.createSubscriptionTier(tierData);
      res.status(201).json(newTier);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid subscription tier data", errors: error.errors });
      }
      res.status(500).json({ message: "Server error creating subscription tier" });
    }
  });
  
  app.patch("/api/subscription-tiers/:id", async (req: Request, res: Response) => {
    try {
      const tierId = parseInt(req.params.id);
      if (isNaN(tierId)) {
        return res.status(400).json({ message: "Invalid subscription tier ID" });
      }
      
      const updateData = req.body;
      
      const updatedTier = await storage.updateSubscriptionTier(tierId, updateData);
      if (!updatedTier) {
        return res.status(404).json({ message: "Subscription tier not found" });
      }
      
      res.status(200).json(updatedTier);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid update data", errors: error.errors });
      }
      res.status(500).json({ message: "Server error updating subscription tier" });
    }
  });
  
  app.delete("/api/subscription-tiers/:id", async (req: Request, res: Response) => {
    try {
      const tierId = parseInt(req.params.id);
      if (isNaN(tierId)) {
        return res.status(400).json({ message: "Invalid subscription tier ID" });
      }
      
      const deleted = await storage.deleteSubscriptionTier(tierId);
      if (!deleted) {
        return res.status(404).json({ message: "Subscription tier not found" });
      }
      
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: "Server error deleting subscription tier" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
