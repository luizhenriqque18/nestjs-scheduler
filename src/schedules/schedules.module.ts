import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksService } from './tasks.service';
import { MailService } from '../mail/mail.service';

@Module({
  providers: [TasksService, MailService],
})
export class SchedulesModule {}
