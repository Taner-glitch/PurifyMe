import { useEffect, useState } from 'react';
import { getMe } from '../api/auth';
import { useNavigate } from 'react-router-dom';
import '../styles/dashboard.css';

export default function Dashboard({ isLoggedIn }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }

    async function fetchUser() {
      try {
        const data = await getMe();
        setUser(data);
      } catch (error) {
        console.error('Kullanıcı bilgisi alınamadı.', error);
      }
    }

    fetchUser();
  }, [isLoggedIn, navigate]);

  if (!user) {
    return <p>Yükleniyor...</p>;
  }

  return (
    <div className="dashboard-container">
      <h2>Hoş Geldin, {user.first_name || user.username}!</h2>
      <p>PurifyMe'ye hoş geldin. Burada gelişimini takip edebilirsin!</p>
    </div>
  );
}
