import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { exec } from 'child_process';
import { MailService } from '../mail/mail.service';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  constructor(private mailService: MailService) {
  }

  @Cron('10 * * * * *')
  async handleCron() {
    this.logger.debug('Called when the current second is 45');
    await this.mailService.sendUserConfirmation('kopap86569@keagenan.com');
    const test = exec('sh ./scripts/hi.sh', (error, stdout, stderr) => {
      if (error !== null) {
        console.log(`exec error: ${error}`);
      }
    });
  }
}
