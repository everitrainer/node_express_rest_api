import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Open a database connection
const openDb = async () => {
    return open({
        filename: './database_store/mydatabase.db',
        driver: sqlite3.Database
    });
};

export default openDb;
