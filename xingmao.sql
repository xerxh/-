
SET NAMES UTF8;
DROP DATABASE IF EXISTS xingmao;
CREATE DATABASE xingmao CHARSET=UTF8;
USE xingmao;
/******轮播图*********/
DROP TABLE IF EXISTS `banner`;
CREATE TABLE `banner` (
  `banner_id` int(11) NOT NULL auto_increment,
  `title` varchar(64) default NULL,
  `img` varchar(128) default NULL,
  `href` varchar(128) default NULL,
  `show` int(4) default 0,
  PRIMARY KEY  (`banner_id`)
);
insert into banner values('1','轮播图1','imgas/banner/1.jpg','banner.html?banner_id=1','1');
insert into banner values('2','轮播图2','imgas/banner/2.jpg','banner.html?banner_id=2','1');
insert into banner values('3','轮播图3','imgas/banner/3.jpg','banner.html?banner_id=3','1');
insert into banner values('4','轮播图4','imgas/banner/4.jpg','banner.html?banner_id=4','1');
insert into banner values('5','轮播图5','imgas/banner/5.jpg','banner.html?banner_id=5','1');
/****************轮播图旁内容区*******************/
DROP TABLE IF EXISTS `banner_content`;
CREATE TABLE `banner_content` (
  `banner_content_id` int(11) NOT NULL auto_increment,
  `type` varchar(64) default NULL,
  `img` varchar(128) default NULL,
  `introduct` varchar(64) default NULL,
  `href` varchar(128) default NULL,
  PRIMARY KEY  (`banner_content_id`)
);
insert into banner_content values('1','动漫图片','imgas/banner-content/146605582444060.jpg','	【动漫图片】蕾姆拉姆美图…	','01_article_show.html?tid=1');
insert into banner_content values('2','汉服摄影','imgas/banner-content/146605965890060.jpg','	【汉服摄影】夏雨别夕庭 …	','01_article_show.html?tid=2');
insert into banner_content values('3','汉服摄影','imgas/banner-content/146606072792246.jpg','	【汉服摄影】樱花飞舞	','01_article_show.html?tid=3');
insert into banner_content values('4','COSplay','imgas/cos-content/146606180793213.jpg','	【COSplay】穹妹黑…	','01_article_show.html?tid=4');


#古风汉服表
DROP TABLE IF EXISTS `cos_content`;
CREATE TABLE `cos_content` (
  `cos_content_id` int(11) NOT NULL auto_increment,
  `type` varchar(64) default NULL,
  `title` varchar(64) default NULL,
  `img` varchar(128) default NULL,
  `introduct` varchar(64) default NULL,
  `href` varchar(128) default NULL,
  PRIMARY KEY  (`cos_content_id`)
);
insert into cos_content values('1','动漫图片','【古风图片】唯美古风图片大集合','imgas/cos-content/146606180793213.jpg','"《明珠山河歌》河图又一代表作之一，河图本人表示：”这首歌，没有n音，兔兔表示，一唱到底！！爽口！!“河图相信喜欢古风歌曲的人都很了解，优秀的全能型古风歌手，他的歌曲一般都很受大家追捧，下面我们一起来具体了解下。"','01_article_show.html?tid=5');
insert into cos_content values('2','汉服摄影','【汉服日常】旧事谁堪眠蓬岛，胡旋乍舞四面风','imgas/cos-content/147677023432071.jpg','"弱骨难夸羽翼丰，群狙戚相死从容。旧事谁堪眠蓬岛，胡旋乍舞四面风。"	','01_article_show.html?tid=6');

#古风电视剧表
DROP TABLE IF EXISTS `cos_tv`;
CREATE TABLE `cos_tv` (
  `cos_tv_id` int(11) NOT NULL auto_increment,
  `type` varchar(128) default NULL,
  `img` varchar(128) default NULL,
  `introduct` varchar(128) default NULL,
  `href` varchar(128) default NULL,
  PRIMARY KEY  (`cos_tv_id`)
);

insert into cos_tv values('1','古风电视剧','imgas/cos-tv/1.jpg','	古风电视剧：《三生三世十里桃花》先行片花...','01_article_show.html?tid=7');
insert into cos_tv values('2','古风电视剧','imgas/cos-tv/2.jpg','	古风电视剧：《那年花开月正圆》娘娘主演你…','01_article_show.html?tid=8');
insert into cos_tv values('3','古风电视剧','imgas/cos-tv/3.jpg','	古风电视剧：国产吐槽神剧《新…','01_article_show.html?tid=9');
insert into cos_tv values('4','古风电视剧','imgas/cos-tv/4.jpg','	古风电视剧：《择天记》鹿晗主…','01_article_show.html?tid=10');
insert into cos_tv values('5','古风电视剧','imgas/cos-tv/5.jpg','	古风电视剧：《后宫·如懿传》…	','01_article_show.html?tid=11');
insert into cos_tv values('6','古风电视剧','imgas/cos-tv/6.jpg','	古风：电视剧《特工皇妃楚乔传…','01_article_show.html?tid=12');

#古风排行榜
DROP TABLE IF EXISTS `cos_rank`;
CREATE TABLE `cos_rank` (
  `cos_rank_id` int(11) NOT NULL auto_increment,
  `type` varchar(64) default NULL,
  `img` varchar(128) default NULL,
  `introduct` varchar(64) default NULL,
  `href` varchar(128) default NULL,
  PRIMARY KEY  (`cos_rank_id`)
);

insert into cos_rank values('1','古风图片','	imgas/cos-rank/1.jpg','	古韵','01_article_show.html?tid=13');
insert into cos_rank values('2','古风图片','	imgas/cos-rank/2.jpg','【古风图片】谋良将划，征战天涯，戎马风流…','01_article_show.html?tid=14');
insert into cos_rank  values('3','古风图片','	imgas/cos-rank/3.jpg','【古风图片】夕颜迟暮山，画染水…','01_article_show.html?tid=1');
insert into cos_rank  values('4','古风图片','	imgas/cos-rank/4.jpg','【古风图片】又一人闲茶听小章，…','01_article_show.html?tid=2');
insert into cos_rank  values('5','古风图片','	imgas/cos-rank/5.jpg','【古风图片】 拂纸韵开错，词满…','01_article_show.html?tid=3');
insert into cos_rank  values('6','古风图片','	imgas/cos-rank/6.jpg','【古风图片】你说一墨一相思，字…','01_article_show.html?tid=4');

#图片排行榜表
DROP TABLE IF EXISTS `picture_content`;
CREATE TABLE `picture_content` (
  `picture_id` int(11) NOT NULL auto_increment,
  `type` varchar(64) default NULL,
  `img` varchar(128) default NULL,
  `name` varchar(128) default NULL,
  `count` varchar(128) default NULL,
  `href` varchar(128) default NULL,
  PRIMARY KEY  (`picture_id`)
);

insert into picture_content values('1','cosplay','imgas/picture-content/1.jpg','水煮小鱼','7','	01_article_show.html?tid=5');
insert into picture_content values('2','cosplay','imgas/picture-content/2.jpg','雪河清清水','	5','01_article_show.html?tid=6');
insert into picture_content values('3','cosplay','imgas/picture-content/3.jpg','心儿幽幽人','	20','01_article_show.html?tid=7');
insert into picture_content values('4','cosplay','imgas/picture-content/4.jpg','纸鸢','1','	01_article_show.html?tid=8');
insert into picture_content values('5','cosplay','imgas/picture-content/5.jpg','琳小琳','	3','01_article_show.html?tid=9');
insert into picture_content values('6','cosplay','imgas/picture-content/6.jpg','白首不分离','	1','01_article_show.html?tid=10');
insert into picture_content values('7','cosplay','imgas/picture-content/7.jpg','七分甜','4','01_article_show.html?tid=11');
insert into picture_content values('8','cosplay','imgas/picture-content/8.jpg','七分醉','9','01_article_show.html?tid=12');
insert into picture_content values('9','cosplay','imgas/picture-content/9.jpg','九分颠','4','01_article_show.html?tid=13');
insert into picture_content values('10','cosplay','	imgas/picture-content/10.jpg','侜小珘','10	','01_article_show.html?tid=14');
#创作榜单表
DROP TABLE IF EXISTS `create_content`;
CREATE TABLE `create_content` (
  `create_id` int(11) NOT NULL auto_increment,
  `type` varchar(64) default NULL,
  `img` varchar(128) default NULL,
  `name` varchar(128) default NULL,
  `count` varchar(128) default NULL,
  `href` varchar(128) default NULL,
  PRIMARY KEY  (`create_id`)
);
insert into create_content values('1','绘画','	imgas/create-content/1.jpg','一别两宽','7','01_article_show.html?tid=1');
insert into create_content values('2','绘画','	imgas/create-content/2.jpg','小小鸟','	5','01_article_show.html?tid=2');
insert into create_content values('3','绘画','	imgas/create-content/3.jpg','小花卷','	20','01_article_show.html?tid=3');

#创作列表
DROP TABLE IF EXISTS `create_list`;
CREATE TABLE `create_list` (
  `create_list_id` int(11) NOT NULL auto_increment,
  `title` varchar(64) default NULL,
  `type` varchar(64) default NULL,
  `img` varchar(128) default NULL,
  `name` varchar(128) default NULL,
  `count` varchar(128) default NULL,
  `href` varchar(128) default NULL,
  PRIMARY KEY  (`create_list_id`)
);

insert into create_list values('1','梦醒','	绘画','imgas/create-list/1.jpg','一别两宽','7','01_article_show.html?tid=1');
insert into create_list values('2','小调','	绘画','imgas/create-list/2.jpg','小小鸟	','5','	01_article_show.html?tid=4');
insert into create_list values('3','南鸣','	绘画','imgas/create-list/3.jpg','小花卷	','7','	01_article_show.html?tid=5');
insert into create_list values('4','回首','	绘画','imgas/create-list/4.jpg','花鸟卷	','5','01_article_show.html?tid=9');
insert into create_list values('5','百步飞剑','	绘画','imgas/create-list/5.jpg','柒柒柒','7','01_article_show.html?tid=8');
insert into create_list values('6','诸子百家','	绘画','imgas/create-list/6.jpg','祈丫祈	','5','01_article_show.html?tid=14');
insert into create_list values('7','回首','	绘画','imgas/create-list/7.jpg','一别两宽','7','01_article_show.html?tid=7');
insert into create_list values('8','狐仙小红娘','绘画','imgas/create-list/8.jpg','	小小鸟','	5','01_article_show.html?tid=2');
insert into create_list values('9','梦回白首','	绘画','imgas/create-list/9.jpg','小花卷	','7','01_article_show.html?tid=3');
insert into create_list values('10','墨家','绘画','imgas/create-list/10.jpg','	柒柒柒','7','01_article_show.html?tid=10');
insert into create_list values('11','非攻','绘画','imgas/create-list/11.jpg','	九分颠','7','01_article_show.html?tid=11');
insert into create_list values('12','兼爱','绘画','imgas/create-list/12.jpg','	八分','7','01_article_show.html?tid=12');


#古风音乐表
DROP TABLE IF EXISTS `music_content`;
CREATE TABLE `music_content` (
  `music_id` int(11) NOT NULL auto_increment,
  `type` varchar(64) default NULL,
  `img` varchar(128) default NULL,
  `title` varchar(64) default NULL,
  `name` varchar(128) default NULL,
  `href` varchar(128) default NULL,
  PRIMARY KEY  (`music_id`)
);
insert into music_content values('	1','古风音乐','imgas/music-content/147686177759317.jpg','【古风歌曲】《藏海花…','末清微凉','01_article_show.html?tid=5');
insert into music_content values('	2','古风音乐','imgas/music-content/147703105136652.jpg','【古风歌曲】宿雨冷','一抹淡雅','01_article_show.html?tid=4');
insert into music_content values('	3','古风音乐','imgas/music-content/147703145169696.jpg','【古风歌曲】一诺情长','因垂斯听~','01_article_show.html?tid=14');
insert into music_content values('	4','古风音乐','imgas/music-content/146625215142585.jpg','【古风歌曲】《寸缕》...','因垂斯听~','01_article_show.html?tid=2');
insert into music_content values('	5','古风音乐','imgas/music-content/146617342373209.jpg','【古风歌曲】蒹葭wi…','白丹婷苦头陀	','01_article_show.html?tid=4');
insert into music_content values('	6','古风音乐','imgas/music-content/146008653519797.jpg','【古风歌曲】琅琊榜之…','米斯达	','01_article_show.html?tid=8');
insert into music_content values('	7','古风音乐','imgas/music-content/146008551578584.jpg','【古风歌曲】故人逢雪','捏灵天~	','01_article_show.html?tid=10');
insert into music_content values('	8','古风音乐','imgas/music-content/146008379475695.jpg','【动漫音乐】三人合唱…','倾华一梦','01_article_show.html?tid=6');
insert into music_content values('	9','古风音乐','imgas/music-content/146008288345439.jpg','【古风歌曲】河图《朝...','茶迷茶花','01_article_show.html?tid=9');
insert into music_content values('	10','古风音乐','imgas/music-content/146606581862627.jpg','【古风音乐】付云何故...','夏微凉','01_article_show.html?tid=5');

#ACG表
DROP TABLE IF EXISTS `acg_content`;
CREATE TABLE `acg_content` (
  `acg_id` int(11) NOT NULL auto_increment,
  `type` varchar(64) default NULL,
  `img` varchar(128) default NULL,
  `title` varchar(64) default NULL,
  `introduct` varchar(64) default NULL,
  `href` varchar(128) default NULL,
  PRIMARY KEY  (`acg_id`)
);
insert into acg_content values('1','动漫图片','imgas/acg-content/147703022268227.jpg','【动漫图片】杂图：美少女','动漫杂图，希望大家会喜欢。（PS：不要问我是什么动漫里的人物，因为我也不知道。0.0）','01_article_show.html?tid=4');
insert into acg_content values('2','动漫图片','imgas/acg-content/147702999397451.jpg','【动漫图片】初音樱花和服版','初音相信大家都非常熟悉，虚拟美少女歌手，歌曲《甩葱歌》特别有名，今日，为大家带来不一样的初音，樱花和服版，希望大家会喜欢。','01_article_show.html?tid=8');

#ACG咨询表
DROP TABLE IF EXISTS `acg_consult`;
CREATE TABLE `acg_consult` (
  `acg_consult_id` int(11) NOT NULL auto_increment,
  `type` varchar(64) default NULL,
  `img` varchar(128) default NULL,
  `title` varchar(64) default NULL,
  `href` varchar(128) default NULL,
  PRIMARY KEY  (`acg_consult_id`)
);
insert into acg_consult values('1','动漫咨询','imgas/acg-consult/146009484811639.jpg','动漫图片—动漫中不可多得的美少女','	01_article_show.html?tid=14');
insert into acg_consult values('2','动漫咨询','imgas/acg-consult/147608016571218.jpg','【动漫】我们仍未知道那天所看见的花的名字','01_article_show.html?tid=8');
insert into acg_consult values('3','动漫咨询','imgas/acg-consult/147615704199277.jpg','【动漫】四月是你的谎言','01_article_show.html?tid=5');
insert into acg_consult values('4','动漫咨询','imgas/acg-consult/147686041060122.jpg','【动漫】《口袋妖怪》xy&...','01_article_show.html?tid=7');
insert into acg_consult values('5','动漫咨询','imgas/acg-consult/147686075187481.jpg','【动漫】你最想念哪位旧番主角呢？','	01_article_show.html?tid=9');
insert into acg_consult values('6','动漫咨询','imgas/acg-consult/147686096416017.jpg','【动漫】十部最适合女生观看的动漫','01_article_show.html?tid=2');
insert into acg_consult values('7','动漫咨询','imgas/acg-consult/147703006967230.jpg','【动漫】爱上二次元','01_article_show.html?tid=1');

#ACG排行榜
DROP TABLE IF EXISTS `acg_rank`;
CREATE TABLE `acg_rank` (
  `acg_rank_id` int(11) NOT NULL auto_increment,
  `type` varchar(64) default NULL,
  `img` varchar(128) default NULL,
  `title` varchar(64) default NULL,
  `href` varchar(128) default NULL,
  PRIMARY KEY  (`acg_rank_id`)
);
insert into acg_rank values('1','动漫咨询','imgas/acg-rank/147079436836688.jpg','第五届动漫北京暨第十八届中国（北京）动漫...','01_article_show.html?tid=14');
insert into acg_rank values('2','动漫咨询','imgas/acg-rank/147347443621667.jpg','古剑奇谭二--夷则X红珊','01_article_show.html?tid=13');
insert into acg_rank values('3','动漫咨询','imgas/acg-rank/146615291130981.jpg','汉服摄影大赛活动结束~感谢大家支...','01_article_show.html?tid=12');
insert into acg_rank values('4','动漫咨询','imgas/acg-rank/146615216236839.jpg','【手绘】藏乔于拙。【主板绘水彩马...','01_article_show.html?tid=11');
insert into acg_rank values('5','动漫咨询','imgas/acg-rank/146607043042019.jpg','【COSplay】穹妹黑旗袍','01_article_show.html?tid=10');
insert into acg_rank values('6','动漫咨询','imgas/acg-rank/146606072792246.jpg','【cosplay】喵老师斑拟人','01_article_show.html?tid=5');
insert into acg_rank values('7','动漫咨询','imgas/acg-rank/146606027028706.jpg','【动漫】爱上二次元	','01_article_show.html?tid=7');

/*******************用户表*************************/
/**用户信息**/
CREATE TABLE user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16),

  avatar VARCHAR(128),        #头像图片路径
  user_name VARCHAR(32),      #用户名，如王小明
  gender INT                  #性别  0-女  1-男
);

insert into user values('1','dingding0','123456','1235784@123.com','18575302567','imgas/avator/146599540895855.jpg','伤年华洒下一地悲伤','1');
INSERT INTO user VALUES ('2', 'dingding1', '123456', 'ding@qq.com', '13511011000', 'imgas/avator/146599540895855.jpg', '丁春秋', '0');
INSERT INTO user VALUES ('3', 'dangdang', '123456', 'dang@qq.com', '13501234568', 'imgas/avator/146599540895855.jpg', '当当喵', '1');
INSERT INTO user VALUES ('4', 'dingding2', '123456', '1135779768@qq.com', '18559132247', 'imgas/avator/146599540895855.jpg','依然站在原地眺望','1');
INSERT INTO user VALUES ('5', 'dingding3', '123456', '113577976@qq.com', '18559132248', 'imgas/avator/146599540895855.jpg', '相逢何必曾相识','0');
INSERT INTO user VALUES ('6', 'dangdang2', '123456', 'dang@qq.com', '13501234568', 'imgas/avator/146599540895855.jpg', '当当喵', '1');
INSERT INTO user VALUES ('7', 'dingding4', '123456', '1135779768@qq.com', '18559132247', 'imgas/avator/146599540895855.jpg','年少無知最瘋狂','1');
INSERT INTO user VALUES ('8', 'dingding5', '123456', '113577976@qq.com', '18559132248', 'imgas/avator/146599540895855.jpg', '最是那一抹微笑','0');
INSERT INTO user VALUES ('9', 'dingding6', '123456', '1135779768@qq.com', '18559132247', 'imgas/avator/146599540895855.jpg','恰似你的温柔','1');
INSERT INTO user VALUES ('10', 'dingding7', '123456', '113577976@qq.com', '18559132248', 'imgas/avator/146599540895855.jpg', '踏遍天涯人不知','0');
INSERT INTO user VALUES ('11', 'dingding8', '123456', '1135779768@qq.com', '18559132247', 'imgas/avator/146599540895855.jpg','雪河清清水','1');
INSERT INTO user VALUES ('12', 'dingding9', '123456', '113577976@qq.com', '18559132248', 'imgas/avator/146599540895855.jpg', '心儿幽幽人','0');
INSERT INTO user VALUES ('13', 'dingding10', '123456', 'dang@qq.com', '13501234568', 'imgas/avator/146599540895855.jpg', '水煮小鱼', '1');
INSERT INTO user VALUES ('14', 'dingding11', '123456', '1135779768@qq.com', '18559132247', 'imgas/avator/146599540895855.jpg','柒分醉','1');
INSERT INTO user VALUES ('15', 'dingding12', '123456', '113577976@qq.com', '18559132248', 'imgas/avator/146599540895855.jpg', '七分甜','0');
INSERT INTO user VALUES ('16', 'dingding13', '123456', '1135779768@qq.com', '18559132247', 'imgas/avator/146599540895855.jpg','九九九分癫','1');
INSERT INTO user VALUES ('17', 'dingding14', '123456', '113577976@qq.com', '18559132248', 'imgas/avator/146599540895855.jpg', '纸鸢栀年','0');
INSERT INTO user VALUES ('18', 'dingding15', '123456', '1135779768@qq.com', '18559132247', 'imgas/avator/146599540895855.jpg','林小琳','1');
INSERT INTO user VALUES ('19', 'dingding16', '123456', '113577976@qq.com', '18559132248', 'imgas/avator/146599540895855.jpg', '苍穹在上','0');
INSERT INTO user VALUES ('20', 'dingding17', '123456', '1135779768@qq.com', '18559132247', 'imgas/avator/146599540895855.jpg','小花卷','1');
INSERT INTO user VALUES ('21', 'dingding18', '123456', '113577976@qq.com', '18559132248', 'imgas/avator/146599540895855.jpg', '玄天湛','0');
INSERT INTO user VALUES ('22', 'dingding19', '123456', '1135779768@qq.com', '18559132247', 'imgas/avator/146599540895855.jpg','珘小珘','1');
INSERT INTO user VALUES ('23', 'dingding20', '123456', '113577976@qq.com', '18559132248', 'imgas/avator/146599540895855.jpg', '醉剑情深','0');
INSERT INTO user VALUES ('24', 'dingding21', '123456', '1135779768@qq.com', '18559132247', 'imgas/avator/146599540895855.jpg','沧海桑田','1');
INSERT INTO user VALUES ('25', 'dingding22', '123456', '113577976@qq.com', '18559132248', 'imgas/avator/146599540895855.jpg', '飞翔的纸鸢','0');
INSERT INTO user VALUES ('26', 'dingding23', '123456', '1135779768@qq.com', '18559132247', 'imgas/avator/146599540895855.jpg','明月天涯','1');
INSERT INTO user VALUES ('27', 'dingding24', '123456', '113577976@qq.com', '18559132248', 'imgas/avator/146599540895855.jpg', '也曾想仗剑天涯','0');
INSERT INTO user VALUES ('28', 'dingding25', '123456', '1135779768@qq.com', '18559132247', 'imgas/avator/146599540895855.jpg','画义吴彦祖','1');
INSERT INTO user VALUES ('29', 'dingding26', '123456', '113577976@qq.com', '18559132248', 'imgas/avator/146599540895855.jpg', '烟雨','0');
INSERT INTO user VALUES ('30', 'dingding27', '123456', '113577976@qq.com', '18559132248', 'imgas/avator/146599540895855.jpg', '烟雨扶扇','1');


/**文章类别表**/
CREATE TABLE arcticle_class(
  class_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(32)
);
insert into arcticle_class values('1','古风');
insert into arcticle_class values('2','汉服');
insert into arcticle_class values('3','动漫');
insert into arcticle_class values('4','cosplay');
insert into arcticle_class values('5','游戏');
insert into arcticle_class values('6','小说');
insert into arcticle_class values('7','音乐');
insert into arcticle_class values('8','绘图');
insert into arcticle_class values('9','娱乐');
insert into arcticle_class values('10','图片');
insert into arcticle_class values('11','创作');
insert into arcticle_class values('12','二次元');

/**文章表**/
CREATE TABLE arcticles(
  arcticle_id INT PRIMARY KEY AUTO_INCREMENT,
  aid INT,    #作者id
  class_id_1 INT default -1,		#文章标签  最多5个标签
  class_id_2 INT default -1,  
  class_id_3 INT default -1,  
  class_id_4 INT default -1,  
  class_id_5 INT default -1,  
  title VARCHAR(128),         #主标题
  introduce VARCHAR(1024),      #内容
  love  INT,        #喜欢人数
  browse  INT,           #浏览人数
  comment_id  INT,  #评论 ID 用来查找该文章的评论

  update_time  BIGINT,          #更新时间
  is_delete  BOOLEAN           #是否被删除  0是被删除 1未删除
);


insert into arcticles values('1','2','10','3','12','-1','-1',
'【动漫图片】蕾姆蕾姆~蕾姆拉姆图包','蕾姆蕾姆~你看那里有一个死宅哎~<br>姐姐姐姐~你看那里有个奇怪的家伙哎~<br>给大家带来一点蕾姆拉姆的图片~<br>',
'605','21002','1','1554545','1');

insert into arcticles values('2','10','1','10','-1','-1','-1',
'古韵','古风图片~<br>',
'4','462','2','155454556','1');

insert into arcticles values(null,'5','1','10','-1','7','8',
'【古风图片】谋良将划，征战天涯，戎马风流赢天下，万民谣唱国安家，千古风沙，富华夏。——君覃-墨白',
'#凌寒府对句# #古风文字壁纸# #古风图文# #凌寒默阡# #古风文字图片# <br> #古风图片# | 例句：谋良将划，征战天涯，戎马风流赢天下，万民谣唱国安家，千古风沙，富华夏。——君覃-墨白 | 文字作者见图中 <br> 制图：凌寒默阡    注：图中素材来源于网络。图文可二次转载，禁止商用，禁止二改图文，转载需注明来源和作者',
'5','55','3','155454556','1');

insert into arcticles values(null,'9','-1','1','5','6','8',
'【古风图片】夕颜迟暮山，画染水镜环。栅栏幽径琵琶线，成衫飞雁南飞念。以思鸿鹄功成淡，勿忘慈恩暮山唤。——凌沫樆',
'#凌寒府对句# #古风文字壁纸# #古风图文# #凌寒默阡# #古风文字图片# #古风图片# | <br> 例句：夕颜迟暮山，画染水镜环。栅栏幽径琵琶线，成衫飞雁南飞念。以思鸿鹄功成淡，勿忘慈恩暮山唤。——凌沫樆 | 文字作者见图中 <br> 制图：凌寒默阡    注：图中素材来源于网络。图文可二次转载，禁止商用，禁止二改图文，转载需注明来源和作者。',
'24','150','4','155451456','1');
insert into arcticles values(null,'4','-1','-1','12','11','-1',
'【古风图片】又一人闲茶听小章，台上人侃侃故事忙。不是我习以为常，当初你是否一样。',
'#古风文字壁纸# #古风图文# #凌寒默阡# #古风文字图片# #古风图片# | 又一人闲茶听小章，台上人侃侃故事忙。不是我习以为常，当初你是否一样。| 文：许之晓 <br> 制图：凌寒默阡    注：图中素材来源于网络。图文可二次转载，禁止商用，禁止二改图文，转载需注明来源和作者。',
'66','656','5','15545145787','1');

insert into arcticles values('6','1','-1','9','12','11','5',
'【古风图片】 拂纸韵开错，词满盛别离，三千相思多情句，不过一个你，谁等谁落笔？叹千篇又一律，总是初心埋尘底。',
'#古风文字壁纸# #古风图文# #凌寒默阡# #古风文字图片# #古风图片# | 拂纸韵开错，词满盛别离，三千相思多情句，不过一个你，谁等谁落笔？叹千篇又一律，总是初心埋尘底。| 文：公子皙 <br>  制图：凌寒默阡    注：图中素材来源于网络。图文可二次转载，禁止商用，禁止二改图文，转载需注明来源和作者。',
'185','8545','6','155451457875','1');

insert into arcticles values('7','5','-1','8','5','1','2',
'【古风图片】你说一墨一相思，字字与泪寄。只是他乡沉梦里，愿醉不愿起。',
'#古风文字壁纸# #古风图文# #凌寒默阡# #古风文字图片# #古风图片# | 你说一墨一相思，字字与泪寄。只是他乡沉梦里，愿醉不愿起。| 文：许之晓 <br> 制图：凌寒默阡    注：图中素材来源于网络。图文可二次转载，禁止商用，禁止二改图文，转载需注明来源和作者。',
'1850','8256','7','155451457875','1');
insert into arcticles values('8','15','6','8','5','1','2',
'朱元璋这样对待降军，难怪可以把他们收归己用！',
'元正十六年（1356年），当时的反元军的首领张士诚率军在长江三角洲地带发起进攻，准备拿下江南的元军。<br> 与此同时，朱元璋也亲自率领水陆大军对集庆发起了第三次进攻。<br> 这次很快的攻破了集庆城外的陈兆先的军营，陈兆先以及他的三万六千的部下很快被朱元璋收归己用，一个降军会真心跟着朱元璋混吗？答案肯定是不会，那是我们的朱元璋做了什么呢？=> 刚攻破陈兆先的军营时，陈兆先便率领部下投降了。但是，朱元璋很快看出陈兆先及他的部下并不是诚心归降，他们心里依旧心存疑虑，军心不定。<br> 于是朱元璋便开始采取措施，他先是在归降的三万六千人里挑选出来五百勇士当亲兵， 让他们在夜里守卫，并撤走了自己身边的人只留下了一个冯国用（他是六国公之一的冯胜的哥哥，可惜早死）。<br> 第二天，陈兆先和降军们知道这件事后，都十分的惊诧和感动，他们相信了朱元璋的诚意，开始诚心跟随朱元璋，甘愿同他一起打天下。 于是，接下来的战斗进行的十分顺利，集庆很快就被朱元璋及他的军队拿下。<br> 朱元璋这样对待降军，难怪可以把他们收归己用。正所谓“不入虎穴焉得虎子”，<br> 朱元璋的这一步险棋走的很妙！  而当时攻下的集庆就是后来的应天府，也就是现在的南京 杏猫网原创不经允许不得转载',
'188','8256','8','155451457875','1');
insert into arcticles values('9','14','-1','3','6','9','1',
'朱元璋的这个爱子最后竟隐居山林以茶为生',
'茶是中国自古一直流传到现在的，自古以来，关于茶的书就不少，今天我们要说的写关于茶的书的这个人是个皇室之人，对，你没看错，<br>  是皇室之人，而且还是当朝皇帝的爱子，这个人就是朱权，他的父亲是明太祖朱元璋。 朱权写的那本关于茶的书叫做《茶谱》，在明代那个写此类书籍很多的年代里，他写得这本书还算得上是经典之作，是不是要让大家吃惊一下。 看到这，大家是不是回以为这位根正苗红的少年就只是一个舞文弄墨的儒生呢！<br> 但令人吃惊的是，这个朱权却是个文武皆善的牛人，甚至曾带兵与蒙古骑兵对阵过，不得不说“龙生龙，凤生凤，老鼠生的儿子会打洞”，<br> 父亲是朱元璋，儿子自是不可能差到哪去。 说到这个朱权，出乎意料的是他最终是以“茶人”的身份隐居林泉，并死在那边。那是怎么会这样呢？ 我们中所周知的大明王朝的继任是燕王朱棣, <br> 而我们上文提及的这个很有军事能力朱权还曾帮助朱棣一路登上了皇位，但是咱们继位的这位皇帝跟他爹一样善疑别人，<br> 他觉得朱权的能力会危及他的皇位，所以咱们的这位有才能的朱权为了活命，最终只得放弃一切与权力相关的东西，隐居山林，烹茶保命！杏猫网原创不经允许不得转载',
'189','825','9','1554514598715','1');
insert into arcticles values('10','20','-1','8','2','5','10',
'神雕三大高手对决，看谁更胜一筹！',
'神雕侠侣中金轮法王的武功十六年前光是内力一项即可超越郭靖，掌法武技颇有不如。大散关一战因为金轮功力深厚，郭靖掌法武技较强平手而论。<br> 终南山一战，金轮法王对阵杨过的玄铁重剑，杨过明显的感觉到时间一长，自己长期比拼的话必定输给金轮法王。 郭靖局限于天资等方面，虽然奇遇不断，有九阴真经，降龙十八掌等顶级武学，但成就却在一个高手层级内次末的水准。 与五绝同级，从来没出现过超越五绝的迹象，<br> 当然有人会说郭靖的降龙十八掌刚柔并济，当年的洪七公不如。  杨过么，就比郭靖聪明的多了。靠着一只神雕的指引，竟然自己学习十几年前的独孤求败的玄铁重剑剑法，  恐怕换郭靖来学，对着神雕悟个几万年也看不出个所以然来吧！这两个叔侄两人简直不可同日而语。<br>  十六年前：金轮法王、杨过、郭靖十六年后金轮功力倍增，郭靖杨过功力有木有倍增不知道，书中没写。此处假设人人都在进步，郭靖，杨过也倍增了功力。 <br>  按照十六年前的推算，十六年的郭靖杨过依然不如十六年后的金轮内力深厚。内力比拼：金轮法王、杨过、郭靖招式的话， 十六年前金轮的招式不如郭靖，跟杨过比较不明显。十六年后襄阳城与杨过一战，金轮的招式又明显的不如杨过招式比拼的话：<br> 郭靖、杨过、金轮法王按照功力深厚招式不如，以及招式精妙功力不如的同级别人物的对比，双方是平手而论来看。  十六前后的时间里，金轮法王一直是五绝层次的高手。',
'98','125','10','1554514598715','1');
insert into arcticles values('11','20','-1','4','6','2','10',
'电视剧《琅琊榜2》曝阵容：戏骨男神刘钧出演梁帝',
'电视剧《琅琊榜2》继第一批黄晓明、佟丽娅等主演曝光后，第二波主演名单也于近日曝出，<br> 其中不仅有当红小花“谋女郎”张慧雯的加盟，还有刘钧、毕彦君等实力戏骨的加持 ，让网友不禁给制片方点赞，称该剧是演技与颜值双在线的良心剧。 从《康熙王朝》中的顺治，电影《忠烈杨家将》中的宋仁宗，电视剧《老子传奇》中的周天子，<br> 刘钧简直成了大制作影视剧御用的皇帝扮演者。但是在《急诊室故事》里，一直守护着苏丽的关纪洲，因为他的温柔体贴、不离不弃， <br> 也被女粉丝称为“最想嫁的人”。在日前热播偶像剧《那年青春我们正好》里，  除了刘诗诗和郑恺打情骂俏展开虐恋，帅气多金又温柔体贴的李峰“李老头”，<br> 也让观众们惊喜万分，原来贵气的“皇帝”，还有这么逗比又深情的一面! 据悉此次刘钧加盟《琅琊榜2》也被片方和网友大赞是最值得期待的角色之一，<br> “就凭刘钧、毕彦君、成泰燊这群戏骨，这剧也肯定错不了”。<br> 刘钧剧中饰演梁帝，这不禁让观众联想起在《康熙王朝》和“孝庄”斯琴高娃飙戏的“顺治帝”。与当年深沉多情的顺治帝相比， 这次和众多明星飙戏的梁帝，<br> 又会有怎样的精彩呢？期待良心巨制《琅琊榜2》，给我们带来新惊喜!',
'198','2990','11','155469454598715','1');
insert into arcticles values('12','15','-1','2','6','4','10',
'活久见：我以为西游记只有三个唐僧，今天才知道有六个',
'提到国产经典电视剧，则不得不提86版《西游记》。这部短短25集的电视剧当时花了六七年的时间来拍摄，<br>  可见剧组有多耐心打磨，最后出来的成品也是现在辣眼睛的五毛特效国产剧完全比不了的。如今，老版《西游记》播出足足30年， 但热度依然很高，曾经的主演们依旧是人们津津乐道的话题人物，比如唐僧的扮演者。<br> 为什么86版《西游记》由3个不同的唐僧演？而事实的真相其实一共有6个！熟悉电视剧《西游记》的都应该知道，唐僧的扮演者中间有替换， 这个角色其实是由汪粤、徐少华和迟重瑞三个人共同完成的。为什么一部剧会有三个唐僧来演？下面小编带你来了解下！ 第一个扮演者是汪粤，他演了《祸起观音院》、《偷吃人参果》、《三打白骨精》等剧集，大家都很满意， 不过因为随后要演另一部电影，汪粤中途退出剧组了。第二个唐僧是大家熟知的美男子徐少华。<br> 据悉他本来是要试试白龙马的，但因为气质好被定下来演唐僧，结果很多观众都很喜欢他。不过演到中途， 因为要去山东艺术学院上学进修，他也离开了剧组。最后也是第三个扮演者是接替徐少华的是慈眉善目的迟重瑞，<br> 他成了最后真正取得真经的唐僧。导演杨洁称，这是她在路上差点擦肩过的一个人。“那天我结束了剪接工作，和场记于红一起下楼。<br> 天已昏暗，我和一个正在上楼的人擦肩而过。模糊中我看到那个人个子魁梧，气质也不错。我急忙叫住他：‘哎！你，站住！’这一声把他吓了一跳。<br> ”就这样，相貌堂堂而又温文尔雅的迟重瑞得到了杨洁的认可，成了第三位唐僧，他也是《西游记》里面最坚决最虔诚的唐僧。',
'1980','3990','12','155469454596521715','1');
insert into arcticles values('13','13','-1','10','12','13','10',
'整容技术哪家强！中国电影找《大明赌神》！',
'武侠剧令人印象深刻的不止是主人公武功高强，还因为英雄和美人之间的浪漫缠酷炫的爱情故事，当然也有“丑女”主角的。 <br>   美到仙气十足的，比如，永远的姑姑李若彤 <br> 丑女无敌的，比如，范文芳饰演的钟无艳  然鹅，小编最近看了一部大电影，在短短60几分钟里，女主角从大丑女——美若天仙——一夜白发的剧情人设飞速发展， 深深的感受到编剧脑洞在自由飞翔！这么牛，小编我觉得韩国需要你！<br> 更何况这还是一部多次魂穿+高科技+赌术+法术的赌片——《大明赌神》！影片讲述了一个现代高级科学家——陆晗，带着“透视分析术”——穿越大明朝， <br>期间发生的一系列爆笑跌宕的赌斗故事……剧中作为各种穿越大军“毫不做作的清流”陆晗，当然是用现代人的智商碾压“天真无邪”的古人咯！ 明朝兴盛赌术，而对于男主角简直so  easy！因为他有“异能透视眼”！他可以透过骰盅轻而易举地看到大小和点数,堪称作弊神器！！<br> 大家有何感谢呢？',
'1950','39900','13','15546945455521715','1');
CREATE TABLE arcticle_comment(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  uid INT,    #评论人id
  arcticle_id INT,              #文章编号
  comment VARCHAR(128),            #评论内容
  comment_time BIGINT            #评论时间
);
insert into arcticle_comment values('1','1','1','雷姆好可爱，最喜欢雷姆了!','5454545');
insert into arcticle_comment values('2','5','1','我是宅男 喜欢雷姆!','5656551451');
insert into arcticle_comment values('3','3','1','这部动漫太火啦!','54845845454');
insert into arcticle_comment values(null,'10','2','一壶烟雨任平生','548458454548898');
insert into arcticle_comment values(null,'9','3','某将谋良竟是空','548458454548815');
insert into arcticle_comment values(null,'5','4','兰州一梦人不知','5484584548815');
insert into arcticle_comment values(null,'2','5','曾经沧海难为水','5484584548815');
insert into arcticle_comment values(null,'2','6','护翼萧山难为路','5484584548815');
insert into arcticle_comment values(null,'8','6','雪落千山万年山','5484584548815');
insert into arcticle_comment values(null,'9','7','雪河清清水','54845845468815');
insert into arcticle_comment values(null,'10','7','空谷幽幽人','54845845815');
insert into arcticle_comment values(null,'17','8','原来如此','5484584548815');
insert into arcticle_comment values(null,'15','8','可悲可叹','54845845468815');
insert into arcticle_comment values(null,'13','8','哎呀呀','54845845815');
insert into arcticle_comment values(null,'9','9','倍若何','54845845815');
insert into arcticle_comment values(null,'6','9','奈何也','5484584548815');
insert into arcticle_comment values(null,'8','9','可惜呀 生不逢时','54845845468815');
insert into arcticle_comment values(null,'7','9','原来茶是这样来的呀','54845845815');
insert into arcticle_comment values(null,'20','10','杨过最帅','54845845815');
insert into arcticle_comment values(null,'19','10','杨过阳光无人可比','5481548815');
insert into arcticle_comment values(null,'15','10','郭靖完全没发和他比','54845545468815');
insert into arcticle_comment values(null,'17','10','一清一种一壶酒','5484584581565');
insert into arcticle_comment values(null,'1','11','期待好久','54858945815');
insert into arcticle_comment values(null,'14','11','坐等','54815598815');
insert into arcticle_comment values(null,'13','11','起那排留名','5484554584815');
insert into arcticle_comment values(null,'5','11','啦啦啦 我来了 不带走一排uyu次啊','54845541565');
insert into arcticle_comment values(null,'4','12','幕后的故事原来也会死这么精彩','54858945815');
insert into arcticle_comment values(null,'9','12','童年的回忆呀','54815598815');
insert into arcticle_comment values(null,'13','12','现在还是觉得那么好看','5484554584815');
insert into arcticle_comment values(null,'12','12','真经难取','54845541565');
insert into arcticle_comment values(null,'8','13','不好看','54155541565');
insert into arcticle_comment values(null,'2','14','好像好像','54155544565');
/**文章图片表**/
CREATE TABLE arcticle_pic(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  arcticle_id INT,              #文章编号
--  head_img VARCHAR(128),            #标题图片
  introduct_img VARCHAR(1556)            #文章图片
);
insert into arcticle_pic values('1','1',
'imgas/anime/p1.jpg,imgas/anime/p2.jpg,imgas/anime/p3.jpg,imgas/anime/p4.jpg,imgas/anime/p5.jpg,imgas/anime/p6.jpg');
insert into arcticle_pic values(null,'2',
'imgas/gufeng/20171025131018_16594.jpg');
insert into arcticle_pic values(null,'3',
'imgas/gufeng/20171009190450_95391.jpg,imgas/gufeng/20171009190454_33738.jpg,imgas/gufeng/20171009190458_95957.jpg,imgas/gufeng/20171009190502_53222.jpg,imgas/gufeng/20171009190505_51303.jpg,imgas/gufeng/20171009190508_26257.jpg');
insert into arcticle_pic values(null,'4',
'imgas/gufeng/20171009190010_92389.jpg,imgas/gufeng/20171009190013_62300.jpg,imgas/gufeng/20171009190017_49339.jpg,imgas/gufeng/20171009190021_18920.jpg,imgas/gufeng/20171009190025_48784.jpg,imgas/gufeng/20171009190032_77716.jpg');
insert into arcticle_pic values(null,'5',
'imgas/gufeng/20171009185439_71803.jpg,imgas/gufeng/20171009185442_44560.jpg,imgas/gufeng/20171009185448_99879.jpg,imgas/gufeng/20171009185452_47608.jpg,imgas/gufeng/20171009185455_18750.jpg,imgas/gufeng/20171009185503_58691.jpg');
insert into arcticle_pic values(null,'6',
'imgas/gufeng/20171009181248_53168.jpg,imgas/gufeng/20171009181255_14864.jpg,imgas/gufeng/20171009181259_52385.jpg,imgas/gufeng/20171009181303_62649.jpg,imgas/gufeng/20171009181306_32516.jpg,imgas/gufeng/20171009181310_37265.jpg');
insert into arcticle_pic values(null,'7',
'imgas/gufeng/20171009175420_88071.jpg,imgas/gufeng/20171009175424_47304.jpg,imgas/gufeng/20171009175428_17863.jpg,imgas/gufeng/20171009175432_58680.jpg,imgas/gufeng/20171009175435_90697.jpg,imgas/gufeng/20171009175438_24133.jpg');
insert into arcticle_pic values(null,'8',
'imgas/hanfu/20170113112549_99516.png,imgas/hanfu/20170113112404_72297.png,imgas/hanfu/20170113112603_43977.png,');
insert into arcticle_pic values(null,'9',
'imgas/hanfu/20170113111154_23400.png,imgas/hanfu/20170113111202_77225.png,imgas/hanfu/20170113111216_77774.png,');
insert into arcticle_pic values(null,'10',
'imgas/hanfu/timg (2).png,imgas/hanfu/timg (1).png,imgas/hanfu/timg (3).png,');
insert into arcticle_pic values(null,'11',
'imgas/hanfu/20161214113629_27578 (1).png,imgas/hanfu/20161214113644_69922.png,imgas/hanfu/20161214113655_71517.png,');
insert into arcticle_pic values(null,'12',
'imgas/hanfu/20161214112220_26578 (1).png,imgas/hanfu/20161214111945_88670 (1).png,imgas/hanfu/20161214111955_54305 (1).png,imgas/hanfu/20161214112006_38369 (1).png,imgas/hanfu/20161214112319_91043.png');
insert into arcticle_pic values(null,'13',
'imgas/hanfu/20161213113651_38009.png,imgas/hanfu/20161213113816_73520.png,imgas/hanfu/20161213113915_85503.png,imgas/hanfu/20161213114101_51640.png');



