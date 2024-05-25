import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { TransactionService } from './transaction.service';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  async create(@Body() createTransactionDto: any) {
    return this.transactionService.create(createTransactionDto);
  }

  @Get()
  async findAll() {
    return this.transactionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.transactionService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateTransactionDto: any) {
    return this.transactionService.update(id, updateTransactionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.transactionService.remove(id);
  }
}
