import openDb from './database.js';

const setupDatabase = async () => {
    const db = await openDb();

    // Create a new table
    await db.exec(`
        CREATE TABLE IF NOT EXISTS games (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            genre TEXT NOT NULL
        )
    `);

    // Insert sample data
    await db.run(`
        INSERT INTO games (name, genre) VALUES 
        ('Cricket', 'Sport'),
        ('Chess', 'Strategy')
    `);

    console.log('Database setup complete.');
};

setupDatabase()
    .catch(err =>
        console.error('Database setup error:', err));
