import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { Pool } from 'pg';
import * as dotenv from "dotenv";
import * as path from "path";

dotenv.config({ path: path.resolve(__dirname, "../.env") });
dotenv.config();

@Injectable()
export class DatabaseService implements OnModuleInit, OnModuleDestroy {
  private pool: Pool;

  constructor() {
    const connectionString = process.env.DATABASE_URL;
    this.pool = new Pool({
      connectionString,
      ssl: { rejectUnauthorized: false },
      max: 10,
      idleTimeoutMillis: 30000,
    });
  }

  async onModuleInit() {
    try {
      const res = await this.pool.query('SELECT NOW() as now');
      console.log('✅ Base de données PostgreSQL Supabase connectée avec succès :', res.rows[0].now);
    } catch (error) {
      console.error('❌ Échec de la connexion Supabase:', error.message);
    }
  }

  async onModuleDestroy() {
    if (this.pool && !(this.pool as any).ended) {
      try {
        await this.pool.end();
      } catch (e) {}
    }
  }

  private formatSql(sql: string): string {
    let paramIndex = 1;
    let formatted = sql.replace(/\?/g, () => `$${paramIndex++}`);
    formatted = formatted.replace(/datetime\('now'\)/gi, 'CURRENT_TIMESTAMP');
    formatted = formatted.replace(/datetime\("now"\)/gi, 'CURRENT_TIMESTAMP');
    return formatted;
  }

  async query<T = any>(sql: string, params: any[] = []): Promise<T[]> {
    const formattedSql = this.formatSql(sql);
    const result = await this.pool.query(formattedSql, params);
    return result.rows as T[];
  }

  async get<T = any>(sql: string, params: any[] = []): Promise<T | undefined> {
    const rows = await this.query<T>(sql, params);
    return rows[0];
  }

  async run(sql: string, params: any[] = []): Promise<any> {
    const formattedSql = this.formatSql(sql);
    const result = await this.pool.query(formattedSql, params);
    return {
      rowCount: result.rowCount,
      command: result.command,
    };
  }

  getPool(): Pool {
    return this.pool;
  }
}
