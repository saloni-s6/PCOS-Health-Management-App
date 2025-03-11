import React, { useState } from 'react';
import { MessageSquare, Heart, Share2, Users, Search, Filter } from 'lucide-react';
import '../../styles/Community.css';

const mockPosts = [
  {
    id: 1,
    author: 'Emily',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    date: '2 hours ago',
    content: "Just had my first appointment with a new endocrinologist who actually listened to me! She is putting me on a new treatment plan that focuses on lifestyle changes first. Anyone else had success with this approach?",
    likes: 24,
    comments: 8,
    tags: ['Doctors', 'Treatment']
  },
  {
    id: 2,
    author: 'Sophia',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    date: '1 day ago',
    content: "I've been following an anti-inflammatory diet for 3 months now and my skin has completely cleared up! My periods are also more regular. Has anyone else noticed improvements with dietary changes?",
    likes: 42,
    comments: 15,
    tags: ['Diet', 'Success Story']
  },
  {
    id: 3,
    author: 'Madison',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    date: '3 days ago',
    content: "Feeling really down today. My hair loss seems to be getting worse despite trying everything. Anyone have tips or just words of encouragement?",
    likes: 36,
    comments: 22,
    tags: ['Hair Loss', 'Support']
  },
  {
    id: 4,
    author: 'Olivia',
    avatar: 'https://images.unsplash.com/photo-1547212371-eb5e6a4b590c?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    date: '1 week ago',
    content: "Just wanted to share this win - I've been consistent with my strength training for 2 months and my insulin resistance markers have improved at my latest blood test! My doctor was impressed!",
    likes: 58,
    comments: 12,
    tags: ['Exercise', 'Success Story']
  }
];

const mockGroups = [
  { id: 1, name: 'Insulin Resistance Warriors', members: 1245, description: 'Support and strategies for managing insulin resistance' },
  { id: 2, name: 'PCOS & Fertility', members: 3782, description: 'For those navigating fertility challenges with PCOS' },
  { id: 3, name: 'Holistic PCOS Management', members: 956, description: 'Natural approaches to managing PCOS symptoms' },
  { id: 4, name: 'PCOS & Mental Health', members: 1823, description: 'Supporting each other through the emotional aspects of PCOS' }
];

const Community = () => {
  const [activeTab, setActiveTab] = useState('feed');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  
  const availableTags = ['Diet', 'Exercise', 'Doctors', 'Treatment', 'Hair Loss', 'Acne', 'Fertility', 'Success Story', 'Support'];
  
  const handleTagToggle = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  
  const filteredPosts = mockPosts.filter(post => {
    if (searchQuery && !post.content.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !post.author.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    if (selectedTags.length > 0 && !post.tags.some(tag => selectedTags.includes(tag))) {
      return false;
    }
    return true;
  });
  
  return (
    <div className="community-container">
      <div className="community-header">
        <h1>PCOS Community</h1>
        <p>Connect, share, and learn with others on the same journey</p>
      </div>
      
      <div className="community-tabs">
        <button className={`tab-btn ${activeTab === 'feed' ? 'active' : ''}`} onClick={() => setActiveTab('feed')}>
          <MessageSquare size={18} /> Discussion Feed
        </button>
        <button className={`tab-btn ${activeTab === 'groups' ? 'active' : ''}`} onClick={() => setActiveTab('groups')}>
          <Users size={18} /> Groups
        </button>
      </div>
      
      <div className="community-search">
        <div className="search-bar">
          <Search size={18} />
          <input type="text" placeholder="Search discussions..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        </div>
        <div className="filter-tags">
          <div className="filter-header">
            <Filter size={16} /> <span>Filter by tags:</span>
          </div>
          <div className="tags-container">
            {availableTags.map(tag => (
              <div key={tag} className={`tag ${selectedTags.includes(tag) ? 'active' : ''}`} onClick={() => handleTagToggle(tag)}>
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {activeTab === 'feed' && (
        <div className="community-feed">
          <div className="create-post">
            <textarea placeholder="Share your thoughts, questions, or experiences..." rows={3}></textarea>
            <div className="post-actions">
              <button className="post-btn">Post</button>
            </div>
          </div>
          {filteredPosts.length > 0 ? (
            <div className="posts-container">
              {filteredPosts.map(post => (
                <div key={post.id} className="post-card">
                  <div className="post-header">
                    <img src={post.avatar} alt={post.author} className="avatar" />
                    <div className="post-meta">
                      <h4>{post.author}</h4>
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <p>{post.content}</p>
                </div>
              ))}
            </div>
          ) : (<p>No posts match your search criteria.</p>)}
        </div>
      )}
    </div>
  );
};

export default Community;
