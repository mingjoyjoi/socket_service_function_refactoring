import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtConfigService } from '../config/jwt.config.service';
import { ImageModule } from '../image/image.module';

@Module({
  imports: [
    PrismaModule,
    JwtModule.registerAsync({
      useClass: JwtConfigService,
    }),
    ImageModule,
  ],
  controllers: [UserController],
  providers: [UserService, JwtConfigService],
  exports: [UserService],
})
export class UserModule {}
