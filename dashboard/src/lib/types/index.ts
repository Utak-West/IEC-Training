import { Database } from './database'

export type Profile = Database['public']['Tables']['profiles']['Row']
export type Chapter = Database['public']['Tables']['chapters']['Row']
export type TrainingModule = Database['public']['Tables']['training_modules']['Row']

export type UserRole = 'apprentice' | 'instructor' | 'admin'
export type ModuleType = 'lesson' | 'quiz' | 'simulation' | 'assessment'
export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced'

export interface User extends Profile {
  chapter?: Chapter
}

export interface ModuleProgress {
  id: string
  user_id: string
  module_id: string
  status: 'not_started' | 'in_progress' | 'completed'
  progress_percentage: number
  score?: number
  time_spent: number
  started_at?: string
  completed_at?: string
  created_at: string
  updated_at: string
}

export interface Badge {
  id: string
  name: string
  description: string
  icon: string
  criteria: Json
  points_required?: number
  is_active: boolean
  created_at: string
}

export interface UserBadge {
  id: string
  user_id: string
  badge_id: string
  earned_at: string
  badge: Badge
}

export interface Achievement {
  id: string
  name: string
  description: string
  icon: string
  points_reward: number
  criteria: Json
  is_active: boolean
  created_at: string
}

export interface UserAchievement {
  id: string
  user_id: string
  achievement_id: string
  earned_at: string
  achievement: Achievement
}

export interface LeaderboardEntry {
  user_id: string
  full_name: string
  avatar_url?: string
  points: number
  level: number
  rank: number
  chapter_name?: string
}

export interface QuizQuestion {
  id: string
  question: string
  type: 'multiple_choice' | 'true_false' | 'short_answer'
  options?: string[]
  correct_answer: string | string[]
  explanation?: string
  points: number
}

export interface Quiz {
  id: string
  title: string
  description: string
  questions: QuizQuestion[]
  time_limit?: number
  passing_score: number
  max_attempts: number
}

export interface QuizAttempt {
  id: string
  user_id: string
  quiz_id: string
  answers: Record<string, Json>
  score: number
  passed: boolean
  time_taken: number
  attempt_number: number
  started_at: string
  completed_at: string
}

export interface Simulation {
  id: string
  title: string
  description: string
  scenario: Json
  objectives: string[]
  tools_required: string[]
  safety_notes: string[]
  estimated_duration: number
}

export interface SimulationAttempt {
  id: string
  user_id: string
  simulation_id: string
  actions_taken: Json[]
  objectives_completed: string[]
  safety_violations: string[]
  score: number
  feedback: string
  completed_at: string
}

export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface DashboardStats {
  total_users: number
  active_users: number
  total_modules: number
  completed_modules: number
  average_completion_rate: number
  total_points_awarded: number
}

export interface UserStats {
  modules_completed: number
  total_modules: number
  points_earned: number
  current_level: number
  badges_earned: number
  achievements_unlocked: number
  time_spent_learning: number
  current_streak: number
}
