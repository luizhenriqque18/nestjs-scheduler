import { Module } from '@nestjs/common';
import { TaskSchedulerService } from './task-scheduler.service';
import { TaskSchedulerController } from './task-scheduler.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import TaskScheduler from './entities/task-scheduler.entity';

@Module({
  controllers: [TaskSchedulerController],
  imports: [TypeOrmModule.forFeature([TaskScheduler])],
  providers: [TaskSchedulerService],
})
export class TaskSchedulerModule {}
