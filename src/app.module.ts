import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { createTypeOrmOptions } from './config/typeorm.config';
import { UserProfileModule } from './user-profile/user-profile.module';
import { PriceTypeModule } from './price-type/price-type.module';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: createTypeOrmOptions,
      inject: [ConfigService],
    }),
    UserProfileModule,
    PriceTypeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
