-- Seed data for IEC Gamified Training System

-- Insert sample chapters
INSERT INTO chapters (id, name, location, description) VALUES
('550e8400-e29b-41d4-a716-446655440001', 'Georgia Chapter', 'Atlanta, GA', 'Independent Electrical Contractors of Georgia'),
('550e8400-e29b-41d4-a716-446655440002', 'Florida Chapter', 'Miami, FL', 'Independent Electrical Contractors of Florida'),
('550e8400-e29b-41d4-a716-446655440003', 'North Carolina Chapter', 'Charlotte, NC', 'Independent Electrical Contractors of North Carolina');

-- Insert sample badges
INSERT INTO badges (id, name, description, icon, criteria, points_required, is_active) VALUES
('650e8400-e29b-41d4-a716-446655440001', 'First Steps', 'Complete your first training module', 'trophy', '{"modules_completed": 1}', NULL, true),
('650e8400-e29b-41d4-a716-446655440002', 'Safety First', 'Complete all safety training modules', 'shield', '{"safety_modules_completed": 3}', NULL, true),
('650e8400-e29b-41d4-a716-446655440003', 'Point Collector', 'Earn your first 100 points', 'star', '{}', 100, true),
('650e8400-e29b-41d4-a716-446655440004', 'Dedicated Learner', 'Complete 10 training modules', 'book', '{"modules_completed": 10}', NULL, true),
('650e8400-e29b-41d4-a716-446655440005', 'Expert Level', 'Reach level 5', 'crown', '{"level_required": 5}', NULL, true);

-- Insert sample achievements
INSERT INTO achievements (id, name, description, icon, points_reward, criteria, is_active) VALUES
('750e8400-e29b-41d4-a716-446655440001', 'Quick Learner', 'Complete a module in under 30 minutes', 'zap', 25, '{"max_time_minutes": 30}', true),
('750e8400-e29b-41d4-a716-446655440002', 'Perfect Score', 'Get 100% on a quiz', 'target', 50, '{"perfect_quiz_score": true}', true),
('750e8400-e29b-41d4-a716-446655440003', 'Streak Master', 'Complete modules for 7 consecutive days', 'flame', 100, '{"consecutive_days": 7}', true),
('750e8400-e29b-41d4-a716-446655440004', 'Safety Champion', 'Complete all safety modules with perfect scores', 'shield-check', 200, '{"safety_perfect_scores": true}', true);

-- Insert sample training modules
INSERT INTO training_modules (id, title, description, content, module_type, difficulty_level, estimated_duration, points_reward, tags, is_published, created_by, order_index) VALUES
('450e8400-e29b-41d4-a716-446655440001', 'Electrical Safety Fundamentals', 'Learn the basic principles of electrical safety in the workplace', '{"sections": [{"title": "Introduction to Electrical Safety", "content": "Understanding the importance of electrical safety..."}, {"title": "Personal Protective Equipment", "content": "Types of PPE required for electrical work..."}, {"title": "Hazard Recognition", "content": "Identifying electrical hazards in the workplace..."}]}', 'lesson', 'beginner', 45, 50, '{"safety", "fundamentals", "ppe"}', true, NULL, 1),

('450e8400-e29b-41d4-a716-446655440002', 'Basic Circuit Analysis', 'Understanding electrical circuits and their components', '{"sections": [{"title": "Ohms Law", "content": "The fundamental relationship between voltage, current, and resistance..."}, {"title": "Series and Parallel Circuits", "content": "How components are connected in electrical circuits..."}, {"title": "Circuit Analysis Techniques", "content": "Methods for analyzing complex circuits..."}]}', 'lesson', 'beginner', 60, 75, '{"circuits", "analysis", "ohms-law"}', true, NULL, 2),

('450e8400-e29b-41d4-a716-446655440003', 'Safety Quiz - Module 1', 'Test your knowledge of electrical safety fundamentals', '{"questions": [{"question": "What is the minimum safe distance from overhead power lines?", "type": "multiple_choice", "options": ["3 feet", "6 feet", "10 feet", "15 feet"], "correct_answer": "10 feet", "points": 10}, {"question": "OSHA requires electrical safety training for all workers.", "type": "true_false", "correct_answer": "true", "points": 5}]}', 'quiz', 'beginner', 15, 25, '{"safety", "quiz", "assessment"}', true, NULL, 3),

('450e8400-e29b-41d4-a716-446655440004', 'Residential Wiring Simulation', 'Practice wiring a residential electrical panel', '{"scenario": {"type": "residential_panel", "description": "Wire a 200-amp residential electrical panel according to NEC standards"}, "objectives": ["Install main breaker", "Connect branch circuits", "Ensure proper grounding", "Label all circuits"], "tools": ["Wire strippers", "Multimeter", "Screwdrivers", "Wire nuts"], "safety_notes": ["Turn off main power", "Use proper PPE", "Test circuits before energizing"]}', 'simulation', 'intermediate', 90, 100, '{"wiring", "residential", "simulation", "nec"}', true, NULL, 4),

('450e8400-e29b-41d4-a716-446655440005', 'National Electrical Code Basics', 'Introduction to the National Electrical Code (NEC)', '{"sections": [{"title": "NEC Structure and Organization", "content": "How the NEC is organized and how to navigate it..."}, {"title": "Key Code Articles", "content": "Important articles every electrician should know..."}, {"title": "Code Updates and Changes", "content": "Understanding how the NEC is updated every three years..."}]}', 'lesson', 'intermediate', 75, 80, '{"nec", "code", "standards", "regulations"}', true, NULL, 5),

('450e8400-e29b-41d4-a716-446655440006', 'Motor Control Fundamentals', 'Understanding motor control circuits and components', '{"sections": [{"title": "Motor Types and Characteristics", "content": "Different types of electric motors and their applications..."}, {"title": "Motor Starters and Contactors", "content": "Components used to control motor operation..."}, {"title": "Overload Protection", "content": "Protecting motors from damage due to overload conditions..."}]}', 'lesson', 'advanced', 120, 120, '{"motors", "control", "industrial", "protection"}', true, NULL, 6);

-- Insert sample quizzes for the modules
INSERT INTO quizzes (id, module_id, title, description, questions, time_limit, passing_score, max_attempts) VALUES
('850e8400-e29b-41d4-a716-446655440001', '450e8400-e29b-41d4-a716-446655440001', 'Electrical Safety Quiz', 'Test your understanding of electrical safety principles', '[
  {
    "id": "q1",
    "question": "What is the primary purpose of lockout/tagout procedures?",
    "type": "multiple_choice",
    "options": ["Save time", "Prevent accidental energization", "Reduce costs", "Improve efficiency"],
    "correct_answer": "Prevent accidental energization",
    "explanation": "Lockout/tagout procedures are designed to prevent accidental energization of equipment during maintenance.",
    "points": 10
  },
  {
    "id": "q2", 
    "question": "Class C fire extinguishers are used for electrical fires.",
    "type": "true_false",
    "correct_answer": "true",
    "explanation": "Class C fire extinguishers are specifically designed for electrical fires.",
    "points": 5
  },
  {
    "id": "q3",
    "question": "What voltage is considered the threshold for high voltage?",
    "type": "multiple_choice", 
    "options": ["120V", "240V", "480V", "600V"],
    "correct_answer": "600V",
    "explanation": "In most electrical codes, 600V is the threshold between low and high voltage systems.",
    "points": 10
  }
]', 30, 70, 3);

-- Insert sample simulations
INSERT INTO simulations (id, module_id, title, description, scenario, objectives, tools_required, safety_notes, estimated_duration) VALUES
('950e8400-e29b-41d4-a716-446655440001', '450e8400-e29b-41d4-a716-446655440004', 'Residential Panel Wiring', 'Complete wiring of a residential electrical panel', '{
  "type": "residential_panel",
  "panel_type": "200_amp_main_breaker",
  "circuits_to_install": [
    {"type": "lighting", "amperage": 15, "rooms": ["living_room", "kitchen"]},
    {"type": "outlet", "amperage": 20, "rooms": ["kitchen", "bathroom"]},
    {"type": "appliance", "amperage": 30, "appliance": "electric_dryer"}
  ],
  "special_requirements": ["GFCI protection for bathroom and kitchen outlets", "AFCI protection for bedroom circuits"]
}', '["Install main breaker correctly", "Connect all branch circuits", "Ensure proper wire sizing", "Install GFCI and AFCI breakers where required", "Complete proper grounding", "Label all circuits clearly"]', '["Wire strippers", "Multimeter", "Screwdrivers (Phillips and flathead)", "Wire nuts", "Electrical tape", "Label maker"]', '["Ensure main power is OFF before starting", "Wear safety glasses and insulated gloves", "Use proper ladder safety", "Test all connections before energizing", "Follow NEC guidelines for all installations"]', 90);
