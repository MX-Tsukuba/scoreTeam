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
      "t_sample_kazuki": {
        Row: {
          created_at: string,
          putts: number,
          id: number,
          course: string,
          score: number,
        }
        Insert: {
          created_at?: string,
          putts: number,
          id?: number,
          course: string,
          score: number,
        }
        Update: {
          created_at?: string,
          putts?: number,
          id?: number,
          course?: string,
          score?: number,
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

