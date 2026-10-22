import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database.service';

@Injectable()
export class AbonnementService {
    constructor(private readonly db: DatabaseService) {}

    async createAbonnement(data: any) {
        return { success: true };
    }
    async getAbonnement() {
        return this.db.query('SELECT * FROM abonnements');
    }
    async getAbonnementById(id: string) {
        return this.db.get('SELECT * FROM abonnements WHERE id = ?', [id]);
    }
    async updateAbonnement(id: string, data: any) {
        return { success: true };
    }
    async deleteAbonnement(id: string) {
        return { success: true };
    }
}
