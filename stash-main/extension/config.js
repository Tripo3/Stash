// Stash Configuration
// Replace these with your Supabase project details

const CONFIG = {
  // Your Supabase project URL (from Project Settings > API)
  SUPABASE_URL: 'https://telfohsdmjejkdjybhyd.supabase.co',

  // Your Supabase anon/public key (from Project Settings > API)
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRlbGZvaHNkbWplamtkanliaHlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4MzM5MjIsImV4cCI6MjA4ODQwOTkyMn0.CGp2fAtndZBkLOqycPYj_Dl78lawDiPvWD_CiThRRQE',

  // Your web app URL (after deploying to Vercel/Netlify)
      WEB_APP_URL: 'https://stash-khaki-zeta.vercel.app',

  // Your user ID from Supabase (Authentication > Users)
  // For multi-user mode, this can be removed and auth will be required
  USER_ID: 'cd91b7b2-215f-4f64-930d-c410cd6297f0',
};

// Don't edit below this line
if (typeof module !== 'undefined') {
  module.exports = CONFIG;
}
