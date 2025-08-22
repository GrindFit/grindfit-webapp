// /utils/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,      // ← keep the session in localStorage
    autoRefreshToken: true,    // ← refresh tokens in the background
    detectSessionInUrl: true,  // ← handle magic-link hashes (default true)
  },
});

export default supabase;
