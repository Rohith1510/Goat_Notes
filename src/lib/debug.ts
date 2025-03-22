export function debugEnv() {
    console.log({
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY?.substring(0, 5) + "...",
      NEXT_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
      NEXT_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.substring(0, 5) + "...",
    });
  }