'use client';
import { useEffect, useState } from 'react';

export default function Profile() {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    async function loadProfile() {
      const response = await fetch('/api/profile');
      if (response.ok) {
        const data = await response.json();
        setProfile(data);
      } else {
        console.error('Failed to fetch profile');
      }
    }
    loadProfile();
  }, []);

  return profile ? (
    <div>
      <img src={profile.avatar_url || 'https://via.placeholder.com/150'} width={150} height={150} />
      <h1>{profile.username || 'No username'}</h1>
      <p>{profile.bio || 'No bio provided'}</p>
    </div>
  ) : (
    'Loading...'
  );
}
