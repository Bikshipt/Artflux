import { 
  users, type User, type InsertUser,
  content, type Content, type InsertContent,
  episodes, type Episode, type InsertEpisode,
  interactions, type Interaction, type InsertInteraction,
  comments, type Comment, type InsertComment,
  subscriptionTiers, type SubscriptionTier, type InsertSubscriptionTier
} from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUser(id: number, userData: Partial<InsertUser>): Promise<User | undefined>;
  
  // Content methods
  getContent(id: number): Promise<Content | undefined>;
  getContentByUserId(userId: number): Promise<Content[]>;
  getContentByGenre(genre: string): Promise<Content[]>;
  getTrendingContent(limit: number): Promise<Content[]>;
  searchContent(query: string): Promise<Content[]>;
  createContent(contentData: InsertContent): Promise<Content>;
  updateContent(id: number, contentData: Partial<InsertContent>): Promise<Content | undefined>;
  deleteContent(id: number): Promise<boolean>;
  
  // Episode methods
  getEpisode(id: number): Promise<Episode | undefined>;
  getEpisodesByContentId(contentId: number): Promise<Episode[]>;
  createEpisode(episodeData: InsertEpisode): Promise<Episode>;
  updateEpisode(id: number, episodeData: Partial<InsertEpisode>): Promise<Episode | undefined>;
  deleteEpisode(id: number): Promise<boolean>;
  
  // Interaction methods
  getInteraction(userId: number, contentId?: number, episodeId?: number, type?: string): Promise<Interaction | undefined>;
  createInteraction(interactionData: InsertInteraction): Promise<Interaction>;
  deleteInteraction(id: number): Promise<boolean>;
  getInteractionCountByContent(contentId: number, type: string): Promise<number>;
  getInteractionCountByEpisode(episodeId: number, type: string): Promise<number>;
  
  // Comment methods
  getComment(id: number): Promise<Comment | undefined>;
  getCommentsByContentId(contentId: number): Promise<Comment[]>;
  getCommentsByEpisodeId(episodeId: number): Promise<Comment[]>;
  createComment(commentData: InsertComment): Promise<Comment>;
  updateComment(id: number, text: string): Promise<Comment | undefined>;
  deleteComment(id: number): Promise<boolean>;
  
  // Subscription Tier methods
  getSubscriptionTier(id: number): Promise<SubscriptionTier | undefined>;
  getSubscriptionTiersByUserId(userId: number): Promise<SubscriptionTier[]>;
  createSubscriptionTier(tierData: InsertSubscriptionTier): Promise<SubscriptionTier>;
  updateSubscriptionTier(id: number, tierData: Partial<InsertSubscriptionTier>): Promise<SubscriptionTier | undefined>;
  deleteSubscriptionTier(id: number): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private content: Map<number, Content>;
  private episodes: Map<number, Episode>;
  private interactions: Map<number, Interaction>;
  private comments: Map<number, Comment>;
  private subscriptionTiers: Map<number, SubscriptionTier>;
  
  private userIdCounter: number = 1;
  private contentIdCounter: number = 1;
  private episodeIdCounter: number = 1;
  private interactionIdCounter: number = 1;
  private commentIdCounter: number = 1;
  private subscriptionTierIdCounter: number = 1;

  constructor() {
    this.users = new Map();
    this.content = new Map();
    this.episodes = new Map();
    this.interactions = new Map();
    this.comments = new Map();
    this.subscriptionTiers = new Map();
    
    // Initialize with some sample data
    this.initializeData();
  }

  private initializeData() {
    // This method is intentionally left empty
    // We don't want to add mock data unless explicitly requested
  }
  
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }
  
  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.email === email,
    );
  }

  async createUser(userData: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const now = new Date();
    const user: User = { 
      ...userData, 
      id,
      createdAt: now,
      updatedAt: now,
      isCreator: userData.isCreator || false,
    };
    this.users.set(id, user);
    return user;
  }
  
  async updateUser(id: number, userData: Partial<InsertUser>): Promise<User | undefined> {
    const existingUser = await this.getUser(id);
    if (!existingUser) return undefined;
    
    const updatedUser: User = {
      ...existingUser,
      ...userData,
      updatedAt: new Date()
    };
    
    this.users.set(id, updatedUser);
    return updatedUser;
  }
  
  // Content methods
  async getContent(id: number): Promise<Content | undefined> {
    return this.content.get(id);
  }
  
  async getContentByUserId(userId: number): Promise<Content[]> {
    return Array.from(this.content.values()).filter(
      (content) => content.userId === userId
    );
  }
  
  async getContentByGenre(genre: string): Promise<Content[]> {
    return Array.from(this.content.values()).filter(
      (content) => content.genre === genre
    );
  }
  
  async getTrendingContent(limit: number): Promise<Content[]> {
    return Array.from(this.content.values())
      .sort((a, b) => (b.viewCount + b.likeCount * 2) - (a.viewCount + a.likeCount * 2))
      .slice(0, limit);
  }
  
  async searchContent(query: string): Promise<Content[]> {
    const lowercaseQuery = query.toLowerCase();
    return Array.from(this.content.values()).filter(
      (content) => 
        content.title.toLowerCase().includes(lowercaseQuery) ||
        (content.description && content.description.toLowerCase().includes(lowercaseQuery))
    );
  }
  
  async createContent(contentData: InsertContent): Promise<Content> {
    const id = this.contentIdCounter++;
    const now = new Date();
    const content: Content = {
      ...contentData,
      id,
      createdAt: now,
      updatedAt: now,
      viewCount: 0,
      likeCount: 0,
      tags: contentData.tags || [],
      isFeature: contentData.isFeature || false
    };
    this.content.set(id, content);
    return content;
  }
  
  async updateContent(id: number, contentData: Partial<InsertContent>): Promise<Content | undefined> {
    const existingContent = await this.getContent(id);
    if (!existingContent) return undefined;
    
    const updatedContent: Content = {
      ...existingContent,
      ...contentData,
      updatedAt: new Date()
    };
    
    this.content.set(id, updatedContent);
    return updatedContent;
  }
  
  async deleteContent(id: number): Promise<boolean> {
    // Also delete related episodes, interactions, and comments
    const episodes = await this.getEpisodesByContentId(id);
    for (const episode of episodes) {
      await this.deleteEpisode(episode.id);
    }
    
    const contentInteractions = Array.from(this.interactions.values()).filter(
      interaction => interaction.contentId === id
    );
    
    for (const interaction of contentInteractions) {
      this.interactions.delete(interaction.id);
    }
    
    const contentComments = Array.from(this.comments.values()).filter(
      comment => comment.contentId === id
    );
    
    for (const comment of contentComments) {
      this.comments.delete(comment.id);
    }
    
    return this.content.delete(id);
  }
  
  // Episode methods
  async getEpisode(id: number): Promise<Episode | undefined> {
    return this.episodes.get(id);
  }
  
  async getEpisodesByContentId(contentId: number): Promise<Episode[]> {
    return Array.from(this.episodes.values())
      .filter(episode => episode.contentId === contentId)
      .sort((a, b) => a.episodeNumber - b.episodeNumber);
  }
  
  async createEpisode(episodeData: InsertEpisode): Promise<Episode> {
    const id = this.episodeIdCounter++;
    const now = new Date();
    const episode: Episode = {
      ...episodeData,
      id,
      createdAt: now,
      updatedAt: now,
      viewCount: 0,
      likeCount: 0,
      isPremium: episodeData.isPremium || false
    };
    this.episodes.set(id, episode);
    return episode;
  }
  
  async updateEpisode(id: number, episodeData: Partial<InsertEpisode>): Promise<Episode | undefined> {
    const existingEpisode = await this.getEpisode(id);
    if (!existingEpisode) return undefined;
    
    const updatedEpisode: Episode = {
      ...existingEpisode,
      ...episodeData,
      updatedAt: new Date()
    };
    
    this.episodes.set(id, updatedEpisode);
    return updatedEpisode;
  }
  
  async deleteEpisode(id: number): Promise<boolean> {
    // Also delete related interactions and comments
    const episodeInteractions = Array.from(this.interactions.values()).filter(
      interaction => interaction.episodeId === id
    );
    
    for (const interaction of episodeInteractions) {
      this.interactions.delete(interaction.id);
    }
    
    const episodeComments = Array.from(this.comments.values()).filter(
      comment => comment.episodeId === id
    );
    
    for (const comment of episodeComments) {
      this.comments.delete(comment.id);
    }
    
    return this.episodes.delete(id);
  }
  
  // Interaction methods
  async getInteraction(userId: number, contentId?: number, episodeId?: number, type?: string): Promise<Interaction | undefined> {
    return Array.from(this.interactions.values()).find(
      interaction => 
        interaction.userId === userId &&
        (contentId === undefined || interaction.contentId === contentId) &&
        (episodeId === undefined || interaction.episodeId === episodeId) &&
        (type === undefined || interaction.interactionType === type)
    );
  }
  
  async createInteraction(interactionData: InsertInteraction): Promise<Interaction> {
    const id = this.interactionIdCounter++;
    const now = new Date();
    const interaction: Interaction = {
      ...interactionData,
      id,
      createdAt: now
    };
    
    // Update like counts
    if (interaction.interactionType === "like") {
      if (interaction.contentId) {
        const content = await this.getContent(interaction.contentId);
        if (content) {
          await this.updateContent(content.id, { likeCount: content.likeCount + 1 });
        }
      } else if (interaction.episodeId) {
        const episode = await this.getEpisode(interaction.episodeId);
        if (episode) {
          await this.updateEpisode(episode.id, { likeCount: episode.likeCount + 1 });
        }
      }
    }
    
    // Update view counts
    if (interaction.interactionType === "view") {
      if (interaction.contentId) {
        const content = await this.getContent(interaction.contentId);
        if (content) {
          await this.updateContent(content.id, { viewCount: content.viewCount + 1 });
        }
      } else if (interaction.episodeId) {
        const episode = await this.getEpisode(interaction.episodeId);
        if (episode) {
          await this.updateEpisode(episode.id, { viewCount: episode.viewCount + 1 });
        }
      }
    }
    
    this.interactions.set(id, interaction);
    return interaction;
  }
  
  async deleteInteraction(id: number): Promise<boolean> {
    const interaction = this.interactions.get(id);
    if (!interaction) return false;
    
    // Update like counts when deleting a like
    if (interaction.interactionType === "like") {
      if (interaction.contentId) {
        const content = await this.getContent(interaction.contentId);
        if (content && content.likeCount > 0) {
          await this.updateContent(content.id, { likeCount: content.likeCount - 1 });
        }
      } else if (interaction.episodeId) {
        const episode = await this.getEpisode(interaction.episodeId);
        if (episode && episode.likeCount > 0) {
          await this.updateEpisode(episode.id, { likeCount: episode.likeCount - 1 });
        }
      }
    }
    
    return this.interactions.delete(id);
  }
  
  async getInteractionCountByContent(contentId: number, type: string): Promise<number> {
    return Array.from(this.interactions.values()).filter(
      interaction => interaction.contentId === contentId && interaction.interactionType === type
    ).length;
  }
  
  async getInteractionCountByEpisode(episodeId: number, type: string): Promise<number> {
    return Array.from(this.interactions.values()).filter(
      interaction => interaction.episodeId === episodeId && interaction.interactionType === type
    ).length;
  }
  
  // Comment methods
  async getComment(id: number): Promise<Comment | undefined> {
    return this.comments.get(id);
  }
  
  async getCommentsByContentId(contentId: number): Promise<Comment[]> {
    return Array.from(this.comments.values())
      .filter(comment => comment.contentId === contentId)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }
  
  async getCommentsByEpisodeId(episodeId: number): Promise<Comment[]> {
    return Array.from(this.comments.values())
      .filter(comment => comment.episodeId === episodeId)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }
  
  async createComment(commentData: InsertComment): Promise<Comment> {
    const id = this.commentIdCounter++;
    const now = new Date();
    const comment: Comment = {
      ...commentData,
      id,
      createdAt: now,
      updatedAt: now
    };
    this.comments.set(id, comment);
    return comment;
  }
  
  async updateComment(id: number, text: string): Promise<Comment | undefined> {
    const existingComment = await this.getComment(id);
    if (!existingComment) return undefined;
    
    const updatedComment: Comment = {
      ...existingComment,
      text,
      updatedAt: new Date()
    };
    
    this.comments.set(id, updatedComment);
    return updatedComment;
  }
  
  async deleteComment(id: number): Promise<boolean> {
    // Also delete child comments
    const childComments = Array.from(this.comments.values()).filter(
      comment => comment.parentCommentId === id
    );
    
    for (const comment of childComments) {
      await this.deleteComment(comment.id);
    }
    
    return this.comments.delete(id);
  }
  
  // Subscription Tier methods
  async getSubscriptionTier(id: number): Promise<SubscriptionTier | undefined> {
    return this.subscriptionTiers.get(id);
  }
  
  async getSubscriptionTiersByUserId(userId: number): Promise<SubscriptionTier[]> {
    return Array.from(this.subscriptionTiers.values())
      .filter(tier => tier.userId === userId);
  }
  
  async createSubscriptionTier(tierData: InsertSubscriptionTier): Promise<SubscriptionTier> {
    const id = this.subscriptionTierIdCounter++;
    const now = new Date();
    const tier: SubscriptionTier = {
      ...tierData,
      id,
      benefits: tierData.benefits || [],
      createdAt: now,
      updatedAt: now
    };
    this.subscriptionTiers.set(id, tier);
    return tier;
  }
  
  async updateSubscriptionTier(id: number, tierData: Partial<InsertSubscriptionTier>): Promise<SubscriptionTier | undefined> {
    const existingTier = await this.getSubscriptionTier(id);
    if (!existingTier) return undefined;
    
    const updatedTier: SubscriptionTier = {
      ...existingTier,
      ...tierData,
      updatedAt: new Date()
    };
    
    this.subscriptionTiers.set(id, updatedTier);
    return updatedTier;
  }
  
  async deleteSubscriptionTier(id: number): Promise<boolean> {
    return this.subscriptionTiers.delete(id);
  }
}

export const storage = new MemStorage();
