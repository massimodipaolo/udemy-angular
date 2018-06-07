import { LikeComponent } from './like.component';

let like = new LikeComponent(50, true);

// Alt + 96 = `
like.onClick();
console.log(`likes: ${like.likeCount}; selected: ${like.isSelected}`);

like.onClick();
console.log(`likes: ${like.likeCount}; selected: ${like.isSelected}`);
