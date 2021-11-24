import {
  Body,
  Controller,
  Delete,
  Get, HttpCode, HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TaskSchedulerService } from './task-scheduler.service';
import { CreateTaskSchedulerDto } from './dto/create-task-scheduler.dto';
import { UpdateTaskSchedulerDto } from './dto/update-task-scheduler.dto';
import TaskScheduler from './entities/task-scheduler.entity';

@Controller('task-scheduler')
export class TaskSchedulerController {
  constructor(private readonly taskSchedulerService: TaskSchedulerService) {}

  @Post()
  async create(@Body() createTaskSchedulerDto: TaskScheduler) {
    return this.taskSchedulerService.create(createTaskSchedulerDto);
  }

  @Get()
  async findAll() {
    return this.taskSchedulerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskSchedulerService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTaskSchedulerDto: UpdateTaskSchedulerDto,
  ) {
    return this.taskSchedulerService.update(+id, updateTaskSchedulerDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.taskSchedulerService.remove(+id);
  }
}
