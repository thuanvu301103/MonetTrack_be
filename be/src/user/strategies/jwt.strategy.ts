import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey:
        '2qapROXwc-esheLo8UlJXiOf66aE8KoSR_oegKTSDjFOP0KBC3xVDUYCvRux87fubLsNXaJ-Z-hQ0n',
    });
  }

  validate(payload: any) {
    console.log('Inside JWT Strategy Validate');
    return payload;
  }
}
