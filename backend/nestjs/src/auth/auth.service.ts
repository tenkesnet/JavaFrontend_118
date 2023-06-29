import { Injectable, Req } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Request } from 'express';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) { }

  signup(@Req() req: Request) {
    console
  }

  signin() {
    return 'signin';
  }
}
