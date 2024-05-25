import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://chungducquang2:HmdBqAf1Cl5BWxx4@moneytrack.rq1f2kn.mongodb.net/?retryWrites=true&w=majority&appName=MoneyTrack',
      {
        connectionFactory: (connection) => {
          connection.on('connected', () => {
            console.log('Successfully connected to MongoDB');
          });
          connection.on('error', (err) => {
            console.error('Error connecting to MongoDB:', err);
          });
          connection._events.connected();
          return connection;
        },
      }),
    TransactionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
