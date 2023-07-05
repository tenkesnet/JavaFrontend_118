import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WebshopService {
  constructor(private readonly prisma: PrismaService) {}

  findAllCategorys() {
    return this.prisma.category.findMany({
      select: {
        title: true,
        products: {
          select: {
            id: true,
            name: true,
            price: true,
            imageUrl: true,
            updatedAt: false,
            createdAt: false,
          },
        },
      },
    });
  }

  findAllCategorysCount() {
    return this.prisma.category.findMany({
      select: {
        title: true,
        _count: {
          select: {
            products: true,
          },
        },
      },
    });
  }

  findAllProducts() {
    return this.prisma.product.findMany({
      select: {
        id: true,
        name: true,
        price: true,
        imageUrl: true,
        category: {
          select: {
            title: true,
          },
        },
      },
    });
  }
}
