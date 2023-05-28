import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import { Platform } from "react-native";

export const supabaseUrl = "https://epvwsxcbqcalddxmiskc.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwdndzeGNicWNhbGRkeG1pc2tjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzAwNDk2NDcsImV4cCI6MTk4NTYyNTY0N30.C5pk5lmBQYYjKvnTtgvgRJE5rhcycjYTzL1i0w6fe6g";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: Platform.OS === "web",
  },
});
