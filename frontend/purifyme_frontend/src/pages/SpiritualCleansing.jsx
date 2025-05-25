import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axiosConfig';

const SpiritualCleansing = ({ isLoggedIn }) => {
  const [posts, setPosts] = useState([]);
  const [newText, setNewText] = useState('');
  const [commentTexts, setCommentTexts] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userActions, setUserActions] = useState({}); 
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
    
    fetchPosts();
  }, [isLoggedIn, navigate]);

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.get('/api/spiritual/posts/');
      console.log('API yanıtı:', response.data);
      setPosts(response.data);
  
      try {
        const savedActions = localStorage.getItem('userSpiritualActions');
        if (savedActions) {
          setUserActions(JSON.parse(savedActions));
        }
      } catch (e) {
        console.error('Error loading saved actions:', e);
        localStorage.removeItem('userSpiritualActions');
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
      setError('Gönderiler yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    if (!newText.trim()) return;

    try {
      const textToSend = newText;
      setNewText('');
      const response = await axiosInstance.post('/api/spiritual/posts/', { text: textToSend });
      console.log('Post created:', response.data);
      
      setPosts(prevPosts => [response.data, ...prevPosts]);
    } catch (error) {
      console.error('Error creating post:', error);
      setError('Gönderi oluşturulurken bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
    }
  };

  const handleAction = async (postId, action) => {
    try {
      const currentAction = userActions[postId];
      
      if (currentAction === action) {
        return;
      }
      
      const updatedPosts = posts.map(post => {
        if (post.id === postId) {
          let newCleanses = post.cleanses;
          let newPunishments = post.punishments;
          
          if (currentAction === 'cleanse') {
            newCleanses = Math.max(0, newCleanses - 1);
          } else if (currentAction === 'punish') {
            newPunishments = Math.max(0, newPunishments - 1);
          }
          
         
          if (action === 'cleanse') {
            newCleanses += 1;
          } else if (action === 'punish') {
            newPunishments += 1;
          }
          
          return {
            ...post,
            cleanses: newCleanses,
            punishments: newPunishments
          };
        }
        return post;
      });
      
      setPosts(updatedPosts);
      
      const updatedActions = {
        ...userActions,
        [postId]: action
      };
      
      setUserActions(updatedActions);
      
      localStorage.setItem('userSpiritualActions', JSON.stringify(updatedActions));
      
      const response = await axiosInstance.post(`/api/spiritual/posts/${postId}/action/`, { action });
      console.log(`${action} action response:`, response.data);
      

      if (response.data && response.data.cleanses !== undefined && response.data.punishments !== undefined) {
        setPosts(prevPosts => 
          prevPosts.map(post => {
            if (post.id === postId) {
              return {
                ...post,
                cleanses: response.data.cleanses,
                punishments: response.data.punishments
              };
            }
            return post;
          })
        );
      }
    } catch (error) {
      console.error(`Error performing ${action} action:`, error);
      setError(`${action === 'cleanse' ? 'Arındırma' : 'Cezalandırma'} işlemi sırasında bir hata oluştu.`);
      
      const oldActionsStr = localStorage.getItem('userSpiritualActions');
      if (oldActionsStr) {
        try {
          const oldActions = JSON.parse(oldActionsStr);
          setUserActions(oldActions);
        } catch (e) {
          console.error('Error parsing old actions:', e);
        }
      }
      
    }
  };

  const handleCommentChange = (postId, value) => {
    setCommentTexts((prev) => ({
      ...prev,
      [postId]: value,
    }));
  };

  const handleCommentSubmit = async (e, postId) => {
    e.preventDefault();
    const commentText = commentTexts[postId]?.trim();
    if (!commentText) return;

    try {
      
      setCommentTexts((prev) => ({ ...prev, [postId]: '' }));
      
      
      const response = await axiosInstance.post('/api/spiritual/comments/', {
        post: postId,
        text: commentText,
      });
      console.log('Comment added:', response.data);
      
      setPosts(prevPosts => 
        prevPosts.map(post => {
          if (post.id === postId) {
            return {
              ...post,
              comments: [...(post.comments || []), response.data]
            };
          }
          return post;
        })
      );
    } catch (error) {
      console.error('Error adding comment:', error);
      setError('Yorum eklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
    }
  };
  
  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="p-6 pt-28 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Ruhsal Arınma: Ruhun Uyanışı</h1>

      
      {error && (
        <div className="p-4 mb-6 bg-red-100 text-red-700 rounded-lg">
          {error}
          <button 
            className="ml-2 font-bold"
            onClick={() => setError(null)}
          >
            ✕
          </button>
        </div>
      )}

      
      <form onSubmit={handlePostSubmit} className="mb-8">
        <textarea
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          placeholder="Arındırmak istediğiniz bir şey yazın..."
          className="w-full p-4 border rounded-lg mb-4 text-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          rows="4"
        ></textarea>
        <button
          type="submit"
          disabled={!newText.trim()}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 disabled:bg-blue-300 disabled:cursor-not-allowed"
        >
          Gönder
        </button>
      </form>

      {loading && (
        <div className="text-center p-6">
          <p className="text-gray-600">Yükleniyor...</p>
        </div>
      )}

      <div className="space-y-6">
        {!loading && Array.isArray(posts) && posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="p-6 border border-gray-200 rounded-lg shadow-md bg-white">
              <div className="flex justify-between mb-3">
                <p className="text-sm text-gray-500">@{post.author_username || 'unknown'}</p>
              </div>
              <p className="mb-3 text-lg font-medium text-gray-700">{post.text}</p>
              
              <div className="flex items-center space-x-4 mb-4">
                <button
                  type="button"
                  onClick={() => handleAction(post.id, 'cleanse')}
                  className={`flex items-center ${
                    userActions[post.id] === 'cleanse' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-green-100 text-green-800'
                  } px-4 py-2 rounded-lg hover:bg-green-400 hover:text-white transition duration-300`}
                >
                  👼 Arındır <span className="ml-1">{post.cleanses}</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleAction(post.id, 'punish')}
                  className={`flex items-center ${
                    userActions[post.id] === 'punish' 
                      ? 'bg-red-500 text-white' 
                      : 'bg-red-100 text-red-800'
                  } px-4 py-2 rounded-lg hover:bg-red-400 hover:text-white transition duration-300`}
                >
                  😈 Cezalandır <span className="ml-1">{post.punishments}</span>
                </button>
              </div>

              <div className="mt-6">
                <h2 className="font-semibold text-lg text-gray-800 mb-3">Yorumlar:</h2>
                {post.comments && post.comments.length > 0 ? (
                  post.comments.map((comment) => (
                    <div key={comment.id} className="mb-3 p-4 bg-gray-50 rounded-lg shadow-sm">
                      <div className="flex justify-between mb-1">
                        <p className="text-xs text-gray-500">@{comment.author_username || 'unknown'}</p>
                      </div>
                      <p>{comment.text}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-600">Henüz yorum yapılmadı.</p>
                )}

                <form onSubmit={(e) => handleCommentSubmit(e, post.id)} className="mt-4">
                  <input
                    type="text"
                    value={commentTexts[post.id] || ''}
                    onChange={(e) => handleCommentChange(post.id, e.target.value)}
                    placeholder="Yorum ekle..."
                    className="w-full p-4 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
                  />
                  <button
                    type="submit"
                    disabled={!(commentTexts[post.id] || '').trim()}
                    className="w-full bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300 disabled:bg-purple-300 disabled:cursor-not-allowed"
                  >
                    Yorum Gönder
                  </button>
                </form>
              </div>
            </div>
          ))
        ) : !loading && (
          <p className="text-center text-gray-600">Henüz gönderi bulunmuyor.</p>
        )}
      </div>
    </div>
  );
};

export default SpiritualCleansing;