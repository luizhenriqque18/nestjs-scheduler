import { Module } from '@nestjs/common';
import { join } from 'path';
import { MailService } from './mail.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    /*MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: 'luizhenriqque15@gmail.com',
          pass: 'paz08terra1997',
        },
      },
      defaults: {
        from: `"No Reply" <luizhenriqque15@gmail.com>`,
      },
      template: {
        dir: join(__dirname, 'templates'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),*/
    MailerModule.forRootAsync({
      useFactory: async (config: ConfigService) => ({
        transport: {
          host: config.get('MAIL_HOST'),
          port: config.get('MAIL_PORT'),
          secure: false,
          auth: {
            user: config.get('MAIL_AUTH_USER'),
            pass: config.get('MAIL_AUTH_PASS'),
          },
        },
        defaults: {
          from: `"No Reply" <${config.get('MAIL_AUTH_USER')}>`,
        },
        template: {
          dir: join(__dirname, 'templates'),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
      inject: [ConfigService]
    })
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {

}

//https://stackoverflow.com/questions/59188483/error-invalid-login-535-5-7-8-username-and-password-not-accepted
