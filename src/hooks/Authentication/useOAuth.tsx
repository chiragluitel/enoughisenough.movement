import { useEffect, useState } from 'react';
import supabase from '../../Config/supabase-client';

export const useOAuth = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState<string>();
  const [isPending, setIsPending] = useState(false);

  const signInWithProvider = async (provider: 'github' | 'google' | 'facebook' | 'linkedin' | 'apple' | 'twitter') => {
    setError("");
    setIsPending(true);

    try {
      const res = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: "http://localhost:5173/feed", // adjust for prod
        },
      });

      if (res.error) throw res.error;

      if (!isCancelled) {
        setIsPending(false);
        setError("");
      }
    } catch (err) {
      if (!isCancelled) {
        setError(`error in signing up with ${provider}`);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return {
    error,
    isPending,
    signInWithGithub: () => signInWithProvider('github'),
    signInWithGoogle: () => signInWithProvider('google'),
    signInWithFacebook: () => signInWithProvider('facebook'),
    signInWithLinkedIn: () => signInWithProvider('linkedin'),
    signInWithApple: () => signInWithProvider('apple'),
    signInWithTwitter: () => signInWithProvider('twitter'),
  };
};
