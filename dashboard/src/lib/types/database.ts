export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          role: 'apprentice' | 'instructor' | 'admin'
          chapter_id: string | null
          created_at: string
          updated_at: string
          points: number
          level: number
          bio: string | null
          phone: string | null
          location: string | null
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          role?: 'apprentice' | 'instructor' | 'admin'
          chapter_id?: string | null
          created_at?: string
          updated_at?: string
          points?: number
          level?: number
          bio?: string | null
          phone?: string | null
          location?: string | null
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          role?: 'apprentice' | 'instructor' | 'admin'
          chapter_id?: string | null
          created_at?: string
          updated_at?: string
          points?: number
          level?: number
          bio?: string | null
          phone?: string | null
          location?: string | null
        }
      }
      chapters: {
        Row: {
          id: string
          name: string
          location: string
          description: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          location: string
          description?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          location?: string
          description?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      training_modules: {
        Row: {
          id: string
          title: string
          description: string
          content: Json
          module_type: 'lesson' | 'quiz' | 'simulation' | 'assessment'
          difficulty_level: 'beginner' | 'intermediate' | 'advanced'
          estimated_duration: number
          points_reward: number
          prerequisites: string[]
          tags: string[]
          is_published: boolean
          created_by: string
          created_at: string
          updated_at: string
          order_index: number
        }
        Insert: {
          id?: string
          title: string
          description: string
          content: Json
          module_type: 'lesson' | 'quiz' | 'simulation' | 'assessment'
          difficulty_level?: 'beginner' | 'intermediate' | 'advanced'
          estimated_duration: number
          points_reward?: number
          prerequisites?: string[]
          tags?: string[]
          is_published?: boolean
          created_by: string
          created_at?: string
          updated_at?: string
          order_index?: number
        }
        Update: {
          id?: string
          title?: string
          description?: string
          content?: Json
          module_type?: 'lesson' | 'quiz' | 'simulation' | 'assessment'
          difficulty_level?: 'beginner' | 'intermediate' | 'advanced'
          estimated_duration?: number
          points_reward?: number
          prerequisites?: string[]
          tags?: string[]
          is_published?: boolean
          created_by?: string
          created_at?: string
          updated_at?: string
          order_index?: number
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      user_role: 'apprentice' | 'instructor' | 'admin'
      module_type: 'lesson' | 'quiz' | 'simulation' | 'assessment'
      difficulty_level: 'beginner' | 'intermediate' | 'advanced'
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
