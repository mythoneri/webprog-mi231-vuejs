import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://ewcudpstxexadhxetkyl.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV3Y3VkcHN0eGV4YWRoeGV0a3lsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc5NjgyOTUsImV4cCI6MjA1MzU0NDI5NX0.2QFugY3ZCiw_Pll_z2h9nTCMI0VfcF5qh90Jw7n_szA')