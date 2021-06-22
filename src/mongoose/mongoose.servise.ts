import { Inject, Injectable, Scope } from '@nestjs/common';
import { MongooseOptionsFactory, MongooseModuleOptions } from '@nestjs/mongoose';
import { REQUEST } from '@nestjs/core';
import { Request } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST })
export class MongooseConfigService implements MongooseOptionsFactory {
    constructor(
        @Inject(REQUEST) private readonly request: Request,) {
    }

    createMongooseOptions(): MongooseModuleOptions {
        const dbName = this.request.url.split('/')[1]
        return {
            uri: 'mongodb://localhost:27017/' + dbName   
        };
    }
}