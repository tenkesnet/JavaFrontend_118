import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WebshopService {
  constructor(private readonly prisma: PrismaService) {}

  findAllCategorys() {
    return this.prisma.category.findMany({
      skip: 2,
      take: 2,
      select: {
        title: true,
        products: {
          take: 4,
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

  findAllCategorysWithPage(page: number, pageSize: number) {
    return this.prisma.category.findMany({
      skip: (page - 1) * pageSize,
      take: pageSize,
      select: {
        title: true,
        products: {
          take: 4,
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

  findAllGroups() {
    return this.prisma.group.findMany({
      select: {
        id: true,
        title: true,
        color: true,
        categories: {
          select: {
            title: true,
            products: {
              select: {
                id: true,
                name: true,
                price: true,
                imageUrl: true,
              },
            },
          },
        },
      },
    });
  }
}
