import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function runSupabaseDemo() {
    console.log("Connecting to Supabase via HTTPS...");

    // 1. Insert data
    const { data: insertData, error: insertError } = await supabase
        .from('students')
        .insert([{ name: 'saransh', age: 21 }])
        .select();

    if (insertError) {
        console.error("Insert Error:", insertError.message);
        console.log("TIP: Make sure you created the 'students' table in Supabase SQL Editor first!");
        return;
    }
    console.log("Inserted student:", insertData[0]);

    // 2. Fetch data
    const { data: selectData, error: selectError } = await supabase
        .from('students')
        .select('*');

    if (selectError) {
        console.error("Select Error:", selectError.message);
        return;
    }
    console.log("All students in DB:", selectData);

    // 3. Update data
    const { data: updateData, error: updateError } = await supabase
        .from('students')
        .update({ age: 22 })
        .eq('name', 'saransh')
        .select();

    if (updateError) {
        console.error("Update Error:", updateError.message);
        return;
    }
    console.log("Data updated successfully:", updateData[0]);
}

runSupabaseDemo();
