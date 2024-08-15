import { Controller, Get } from '@nestjs/common';

@Controller()
export class HomeController {
    @Get()
    root() {
        return {
            // title: 'nestjs server for api',
            message: 'nestjs server for api, power for my blog'
        };
    }

    @Get('hello')
    memeda() {
        return 'world';
    }
}
