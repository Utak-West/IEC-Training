-- Enable Row Level Security on all tables
ALTER TABLE chapters ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE training_modules ENABLE ROW LEVEL SECURITY;
ALTER TABLE module_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE badges ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_badges ENABLE ROW LEVEL SECURITY;
ALTER TABLE achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE quizzes ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE simulations ENABLE ROW LEVEL SECURITY;
ALTER TABLE simulation_attempts ENABLE ROW LEVEL SECURITY;

-- Chapters policies (readable by all authenticated users, writable by admins)
CREATE POLICY "Chapters are viewable by authenticated users" ON chapters
    FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Chapters are insertable by admins" ON chapters
    FOR INSERT WITH CHECK (
        EXISTS (
            SELECT 1 FROM profiles 
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

CREATE POLICY "Chapters are updatable by admins" ON chapters
    FOR UPDATE USING (
        EXISTS (
            SELECT 1 FROM profiles 
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- Profiles policies
CREATE POLICY "Users can view their own profile" ON profiles
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Instructors and admins can view profiles in their chapter" ON profiles
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM profiles p
            WHERE p.id = auth.uid() 
            AND p.role IN ('instructor', 'admin')
            AND (p.role = 'admin' OR p.chapter_id = profiles.chapter_id)
        )
    );

CREATE POLICY "Users can insert their own profile" ON profiles
    FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON profiles
    FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Admins can update any profile" ON profiles
    FOR UPDATE USING (
        EXISTS (
            SELECT 1 FROM profiles 
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- Training modules policies
CREATE POLICY "Published modules are viewable by authenticated users" ON training_modules
    FOR SELECT USING (is_published = true AND auth.role() = 'authenticated');

CREATE POLICY "Instructors and admins can view all modules" ON training_modules
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM profiles 
            WHERE id = auth.uid() AND role IN ('instructor', 'admin')
        )
    );

CREATE POLICY "Instructors and admins can insert modules" ON training_modules
    FOR INSERT WITH CHECK (
        EXISTS (
            SELECT 1 FROM profiles 
            WHERE id = auth.uid() AND role IN ('instructor', 'admin')
        )
    );

CREATE POLICY "Module creators and admins can update modules" ON training_modules
    FOR UPDATE USING (
        created_by = auth.uid() OR
        EXISTS (
            SELECT 1 FROM profiles 
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- Module progress policies
CREATE POLICY "Users can view their own progress" ON module_progress
    FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Instructors can view progress in their chapter" ON module_progress
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM profiles p1, profiles p2
            WHERE p1.id = auth.uid() 
            AND p1.role IN ('instructor', 'admin')
            AND p2.id = module_progress.user_id
            AND (p1.role = 'admin' OR p1.chapter_id = p2.chapter_id)
        )
    );

CREATE POLICY "Users can insert their own progress" ON module_progress
    FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update their own progress" ON module_progress
    FOR UPDATE USING (user_id = auth.uid());

-- Badges policies (readable by all, manageable by admins)
CREATE POLICY "Badges are viewable by authenticated users" ON badges
    FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Badges are manageable by admins" ON badges
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM profiles 
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- User badges policies
CREATE POLICY "Users can view their own badges" ON user_badges
    FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Users can view badges in their chapter" ON user_badges
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM profiles p1, profiles p2
            WHERE p1.id = auth.uid() 
            AND p2.id = user_badges.user_id
            AND (p1.chapter_id = p2.chapter_id OR p1.role IN ('instructor', 'admin'))
        )
    );

CREATE POLICY "System can insert user badges" ON user_badges
    FOR INSERT WITH CHECK (true); -- This will be handled by functions

-- Achievements policies (similar to badges)
CREATE POLICY "Achievements are viewable by authenticated users" ON achievements
    FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Achievements are manageable by admins" ON achievements
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM profiles 
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- User achievements policies
CREATE POLICY "Users can view their own achievements" ON user_achievements
    FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Users can view achievements in their chapter" ON user_achievements
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM profiles p1, profiles p2
            WHERE p1.id = auth.uid() 
            AND p2.id = user_achievements.user_id
            AND (p1.chapter_id = p2.chapter_id OR p1.role IN ('instructor', 'admin'))
        )
    );

CREATE POLICY "System can insert user achievements" ON user_achievements
    FOR INSERT WITH CHECK (true); -- This will be handled by functions

-- Quiz policies
CREATE POLICY "Quizzes are viewable with their modules" ON quizzes
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM training_modules tm
            WHERE tm.id = quizzes.module_id
            AND (tm.is_published = true OR 
                 EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role IN ('instructor', 'admin')))
        )
    );

CREATE POLICY "Instructors and admins can manage quizzes" ON quizzes
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM profiles 
            WHERE id = auth.uid() AND role IN ('instructor', 'admin')
        )
    );

-- Quiz attempts policies
CREATE POLICY "Users can view their own quiz attempts" ON quiz_attempts
    FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Instructors can view attempts in their chapter" ON quiz_attempts
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM profiles p1, profiles p2
            WHERE p1.id = auth.uid() 
            AND p1.role IN ('instructor', 'admin')
            AND p2.id = quiz_attempts.user_id
            AND (p1.role = 'admin' OR p1.chapter_id = p2.chapter_id)
        )
    );

CREATE POLICY "Users can insert their own quiz attempts" ON quiz_attempts
    FOR INSERT WITH CHECK (user_id = auth.uid());

-- Simulation policies (similar to quizzes)
CREATE POLICY "Simulations are viewable with their modules" ON simulations
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM training_modules tm
            WHERE tm.id = simulations.module_id
            AND (tm.is_published = true OR 
                 EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role IN ('instructor', 'admin')))
        )
    );

CREATE POLICY "Instructors and admins can manage simulations" ON simulations
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM profiles 
            WHERE id = auth.uid() AND role IN ('instructor', 'admin')
        )
    );

-- Simulation attempts policies
CREATE POLICY "Users can view their own simulation attempts" ON simulation_attempts
    FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Instructors can view attempts in their chapter" ON simulation_attempts
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM profiles p1, profiles p2
            WHERE p1.id = auth.uid() 
            AND p1.role IN ('instructor', 'admin')
            AND p2.id = simulation_attempts.user_id
            AND (p1.role = 'admin' OR p1.chapter_id = p2.chapter_id)
        )
    );

CREATE POLICY "Users can insert their own simulation attempts" ON simulation_attempts
    FOR INSERT WITH CHECK (user_id = auth.uid());
