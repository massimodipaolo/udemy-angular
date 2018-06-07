"use strict";
/*
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.log(err));
*/
Object.defineProperty(exports, "__esModule", { value: true });
var like_component_1 = require("./like.component");
var like = new like_component_1.LikeComponent(50, true);
// Alt + 96 = `
like.onClick();
console.log("likes: " + like.likeCount + "; selected: " + like.isSelected);
like.onClick();
console.log("likes: " + like.likeCount + "; selected: " + like.isSelected);
