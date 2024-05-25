import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TransactionDocument = Transaction & Document;

@Schema()
export class Transaction {
  @Prop({ required: true })
  money: number;

  @Prop({ required: true })
  spending_group: string;

  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  note: string;

  @Prop({ required: true })
  wallet: string;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
