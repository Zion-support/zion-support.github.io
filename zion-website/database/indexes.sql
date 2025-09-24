
-- Database indexing strategies for performance optimization

-- User table indexes
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_created_at ON users(created_at);
CREATE INDEX IF NOT EXISTS idx_users_status ON users(status);

-- Content table indexes
CREATE INDEX IF NOT EXISTS idx_content_type ON content(type);
CREATE INDEX IF NOT EXISTS idx_content_published ON content(published_at);
CREATE INDEX IF NOT EXISTS idx_content_author ON content(author_id);
CREATE INDEX IF NOT EXISTS idx_content_tags ON content USING GIN(tags);

-- Analytics indexes
CREATE INDEX IF NOT EXISTS idx_analytics_date ON analytics(date);
CREATE INDEX IF NOT EXISTS idx_analytics_event ON analytics(event_type);
CREATE INDEX IF NOT EXISTS idx_analytics_user ON analytics(user_id);

-- Composite indexes for common queries
CREATE INDEX IF NOT EXISTS idx_content_published_type ON content(published_at, type);
CREATE INDEX IF NOT EXISTS idx_analytics_date_event ON analytics(date, event_type);

-- Full-text search indexes
CREATE INDEX IF NOT EXISTS idx_content_search ON content USING GIN(to_tsvector('english', title || ' ' || content));
