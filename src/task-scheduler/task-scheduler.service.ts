import { Injectable } from '@nestjs/common';
import { CreateTaskSchedulerDto } from './dto/create-task-scheduler.dto';
import { UpdateTaskSchedulerDto } from './dto/update-task-scheduler.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import TaskScheduler from './entities/task-scheduler.entity';

@Injectable()
export class TaskSchedulerService {
  constructor(
    @InjectRepository(TaskScheduler)
    private taskSchedulerRepository: Repository<TaskScheduler>,
  ) {}

  async create(createTaskSchedulerDto: CreateTaskSchedulerDto) {
    return this.taskSchedulerRepository.save(createTaskSchedulerDto);
  }

  async findAll() {
    return await this.taskSchedulerRepository.find();
  }

  findOne(id: number) {
    return this.taskSchedulerRepository.findOne(id);
  }

  async update(id: number, updateTaskSchedulerDto: UpdateTaskSchedulerDto) {
    let taskScheduler: TaskScheduler = await this.findOne(id);
    let combiner = { ...taskScheduler, ...updateTaskSchedulerDto };
    return this.taskSchedulerRepository.save(combiner);
  }

  async remove(id: number) {
    let taskScheduler: TaskScheduler = await this.findOne(id);
    return this.taskSchedulerRepository.delete(taskScheduler);
  }
}
