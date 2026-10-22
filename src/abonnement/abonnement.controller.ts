import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { AbonnementService } from './abonnement.service';

@Controller('abonnement')
export class AbonnementController {
    constructor(private readonly abonnementService: AbonnementService) {}

    @Post()
    async createAbonnement(@Body() data: any) {
        return this.abonnementService.createAbonnement(data);
    }

    @Get()
    async getAbonnement() {
        return this.abonnementService.getAbonnement();
    }

    @Get("/:id")
    async getAbonnementById(@Param('id') id: string) {
        return this.abonnementService.getAbonnementById(id);
    }

    @Put("/:id")
    async updateAbonnement(@Param('id') id: string, @Body() data: any) {
        return this.abonnementService.updateAbonnement(id, data);
    }

    @Delete("/:id")
    async deleteAbonnement(@Param('id') id: string) {
        return this.abonnementService.deleteAbonnement(id);
    }
}
