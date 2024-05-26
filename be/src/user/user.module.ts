import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { MongooseModule } from '@nestjs/mongoose';
import { UserEntity, UserEntitySchema } from './user.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserEntity.name, schema: UserEntitySchema },
    ]),
    PassportModule,
    JwtModule.register({
      secret:
        '2qapROXwc-esheLo8UlJXiOf66aE8KoSR_oegKTSDjFOP0KBC3xVDUYCvRux87fubLsNXaJ-Z-hQ0n',
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [UserController],
  providers: [UserService, LocalStrategy, JwtStrategy],
})
export class UserModule {}
