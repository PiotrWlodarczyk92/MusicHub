import { createClient } from '@supabase/supabase-js'

const REACT_APP_SUPABASE_URL= "https://dunprjyoalbkwfjyvyyu.supabase.co"
const REACT_APP_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1bnByanlvYWxia3dmanl2eXl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgyNTc2MjQsImV4cCI6MjAxMzgzMzYyNH0.TE4zvWNP61_r-2j6UXklfYWVLwr2CDzXiHSgBNvBjrM"

const supabaseUrl = REACT_APP_SUPABASE_URL;
const supabaseKey = REACT_APP_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase