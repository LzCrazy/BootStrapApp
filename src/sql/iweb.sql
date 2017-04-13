SET NAMES UTF8;
DROP DATABASE IF EXISTS iweb;
CREATE DATABASE iweb CHARSET=UTF8;
USE iweb;

/*用户表*/
CREATE TABLE user(
    uid INT PRIMARY KEY AUTO_INCREMENT,/*用户编号*/
    uname VARCHAR(32),      /*邮箱*/
    phone VARCHAR(11),      /*手机号*/
    upwd VARCHAR(32),       /*密码*/
    nickname VARCHAR(32),   /*昵称*/
    sex VARCHAR(1),         /*性别,男-M，女-F*/
    age VARCHAR(3),         /*年龄*/
    edu VARCHAR(32),        /*学历*/
    job VARCHAR(32)         /*职业*/
);
INSERT INTO user VALUES
(1,'LzCrazy','17002677760','admin','','','','',''),
(2,'mizur','13666666666','123456','','','','','');

/*老师表*/
CREATE TABLE teacher(
    tid INT PRIMARY KEY AUTO_INCREMENT,/*讲师编号*/
    tname VARCHAR(32),          /*讲师姓名*/
    maincourse VARCHAR(32),     /*主讲课程*/
    tpic VARCHAR(64),           /*照片*/
    experience VARCHAR(1024),   /*工作经历*/
    style VARCHAR(1024)         /*授课风格*/
);
INSERT INTO teacher VALUES
(1,'LzCrazy','JavaScript讲师','img-teacher/t_01.jpg','码农，制作个人网页。先后在中软国际、中国搜索、太极计算机担任高级开发工程师，架构师，项目经理。曾担任中央外汇管理中心、中国石油、二炮工程研究院、首都国际机场技术咨询顾问。','一切从实际项目出发，快速入门，学以致用。讲课极富激情，语言表达精准，有感染力。案例丰富、直观，步骤细致，清晰。注重从学习到实际工作的快速转化。'),
(2,'LzCrazy','HTTP&SERVER讲师','img-teacher/t_01.jpg','码农，微软认证解决方案开发专家。先后在中软国际、中国搜索、太极计算机担任高级开发工程师，架构师，项目经理。曾担任中央外汇管理中心、中国石油、二炮工程研究院、首都国际机场技术咨询顾问。','一切从实际项目出发，快速入门，学以致用。讲课极富激情，语言表达精准，有感染力。案例丰富、直观，步骤细致，清晰。注重从学习到实际工作的快速转化。'),
(3,'LzCrazy','Web开发讲师','img-teacher/t_01.jpeg','码农， 主讲 HTML5、Jquery、 Ajax 等课程。先后在一汽启明、日本インタセクト等公司担任系统开发工程师，从事软件开发和设计工作，迄今已积累5年以上的开发及教学经验，兼具技术和教学两方面的培训能力。','教学思路严谨，课堂气氛活跃。讲解时善于运用生活当中的例子，使学员能够快速理解。着重培养学员的动手能力，奉行实践是检验真理的唯一标准，教学能力受到学员们的一致好评。'),
(4,'LzCrazy','JS框架专家','img-teacher/t_01.jpeg','码农、凌阳科技，并担任研发组长、项目经理，具有1年android平台、移动APP的开发经验，具备深厚的开发和培训功底。','善于把知识结合贴切的案例，细心、耐心的传授给每个学员；将自身的工作经验和专业的授课手段全部奉献给每个学员；将“让学员就业不再困难”视为己任和奋斗目标。主讲Bootstrap、AngularJS、移动开发等课程。');



