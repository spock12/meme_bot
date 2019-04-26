var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
	console.log(message);
        var args = message.substring(1).split(' ');
	console.log(args)
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {

            case 'help':
                bot.sendMessage({
                    to: channelID,
                    message: '*Enter a users first name followed by a number to generate the related meme.*'
                });
		break;
            	case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
		break;
            	
                case 'drew':
		case 'Drew':
		case 'drew1':
		case 'Drew1':
		bot.sendMessage({
			to: channelID,
			message: 'https://i.imgur.com/yQG2KxT.png'
		});
		break;	
                case 'drew2':
		case 'Drew2':
		bot.sendMessage({
			to: channelID,
			message: 'https://i.imgur.com/YCkqUOU.png'
		});
		break;	
                case 'drew3':
		case 'Drew3':
		bot.sendMessage({
			to: channelID,
			message: 'https://i.imgur.com/FvMdPgw.png'
		});
		break;	
                case 'drew4':
		case 'Drew4':
		bot.sendMessage({
			to: channelID,
			message: 'https://i.imgur.com/yEeeiCn.png'
		});
		break;
                case 'drew5':
		case 'Drew5':
		bot.sendMessage({
			to: channelID,
			message: 'https://i.imgur.com/wTh1JSG.png'
		});
		break;
                case 'drew6':
		case 'Drew6':
		bot.sendMessage({
			to: channelID,
			message: 'https://i.imgur.com/koR0310.png'
		});
		break;	
                case 'drew7':
		case 'Drew7':
		bot.sendMessage({
			to: channelID,
			message: 'https://i.imgur.com/93AzNUE.png'
		});
		break;	
                case 'drew8':
		case 'Drew8':
		bot.sendMessage({
			to: channelID,
			message: 'https://i.imgur.com/Ve1JyPj.png'
		});
		break;	
                case 'drew9':
		case 'Drew9':
		bot.sendMessage({
			to: channelID,
			message: 'https://i.imgur.com/D15CIsP.png'
		});
		break;	
                case 'drew10':
		case 'Drew10':
		bot.sendMessage({
			to: channelID,
			message: 'https://i.imgur.com/zxrIdo9.png'
		});
		break;	
                case 'chris':
		case 'Chris':
		case 'chris1':
		case 'Chris1':
		bot.sendMessage({
			to: channelID,
			message: 'https://i.imgur.com/Iz56Ft1.png'
		});
		break;
		case 'chris2':
		case 'Chris2':
		bot.sendMessage({
			to: channelID,
			message: 'Sorry Chris. You just are not that funny.'
		});
		break;
				
                case 'kim':
		case 'Kim':
		case 'kim1':
		case 'Kim1':
		bot.sendMessage({
			to: channelID,
			message: 'https://i.imgur.com/Dgnpmkx.png'
		});
		break;	
                case 'kim2':
		case 'Kim2':
		bot.sendMessage({
			to: channelID,
			message: 'https://i.imgur.com/atiJ3LD.png'
		});
		break;	
                case 'kyle':
		case 'Kyle':
		bot.sendMessage({
			to: channelID,
			message: 'https://i.imgur.com/iXC3vXn.png'
		});
		break;	
                case 'mushi':
		case 'Mushi':
		case 'mushi1':
		case 'Mushi1':
		bot.sendMessage({
			to: channelID,
			message: 'https://i.imgur.com/Q6KrfvA.png'
		});
		break;	
                case 'mushi2':
		case 'Mushi2':
		bot.sendMessage({
			to: channelID,
			message: 'https://i.imgur.com/gWalfCR.png'
		});
		break;	
                case 'mushi3':
		case 'Mushi3':
		bot.sendMessage({
			to: channelID,
			message: 'https://i.imgur.com/9dkNfvX.png'
		});
		break;	
                case 'taylor0':
		case 'Taylor0':
		bot.sendMessage({
			to: channelID,
			message: 'https://i.imgur.com/xdRlYgK.png'
		});
		break;
                case 'taylor':
		case 'Taylor':
		case 'taylor1':
		case 'Taylor1':
		bot.sendMessage({
			to: channelID,
			message: 'https://i.imgur.com/M1kmGPp.png'
		});
		break;	
                case 'taylor2':
		case 'Taylor2':
		bot.sendMessage({
			to: channelID,
			message: 'https://i.imgur.com/ExkV7Hh.png'
		});
		break;	
                case 'taylor3':
		case 'Taylor3':
		bot.sendMessage({
			to: channelID,
			message: 'https://i.imgur.com/KjKzJSc.png'
		});
		break;	
                case 'taylor4':
		case 'Taylor4':
		bot.sendMessage({
			to: channelID,
			message: 'https://i.imgur.com/Fp7l1ne.png'
		});
		break;	
                case 'taylor5':
		case 'Taylor5':
		bot.sendMessage({
			to: channelID,
			message: 'https://i.imgur.com/FaSTYBB.png'
		});
		break;	
                case 'taylor6':
		case 'Taylor6':
		bot.sendMessage({
			to: channelID,
			message: 'https://i.imgur.com/Cl6qL0U.png'
		});
		break;	
                case 'taylor7':
		case 'Taylor7':
		bot.sendMessage({
			to: channelID,
			message: 'https://i.imgur.com/DhT5NzQ.png'
		});
		break;	
                case 'zach':
		case 'Zach':
		case 'zach1':
		case 'Zach1':
		bot.sendMessage({
			to: channelID,
			message: 'https://i.imgur.com/SupFdTN.png'
		});
		break;	
                case 'zach2':
		case 'Zach2':
		bot.sendMessage({
			to: channelID,
			message: 'https://i.imgur.com/nYngFoZ.png'
		});
		break;	
                case 'zach3':
		case 'Zach3':
		bot.sendMessage({
			to: channelID,
			message: 'https://i.imgur.com/7GtZfcK.png'
		});
		break;	
                case 'zach4':
		case 'Zach4':
		bot.sendMessage({
			to: channelID,
			message: 'https://i.imgur.com/cUySXjS.png'
		});
		break;	
                case 'zach5':
		case 'Zach5':
		bot.sendMessage({
			to: channelID,
			message: 'https://i.imgur.com/JDpSjc5.png'
		});
		break;	
                case 'zach6':
		case 'Zach6':
		bot.sendMessage({
			to: channelID,
			message: 'https://i.imgur.com/B0bohLo.png'
		});
		break;
                case 'zach7':
		case 'Zach7':
		bot.sendMessage({
			to: channelID,
			message: 'https://i.imgur.com/B0bohLo.png'
		});
		break

                case 'ye':
		case 'Ye':
		case 'YE':
		bot.sendMessage({
			to: channelID,
			message: 'https://www.youtube.com/watch?v=q6EoRBvdVPQ'
		});
		break;
                case 'spiderman':
		bot.sendMessage({
			to: channelID,
			message: 'https://www.youtube.com/watch?v=oPr8ZqRHTQo'
		});
		break;
                case 'stop':
		bot.sendMessage({
			to: channelID,
			message: 'https://i.imgur.com/UkB9m6o.gif'
		});
		break;
                case 'snap':
		bot.sendMessage({
			to: channelID,
			message: 'https://i.redd.it/2233wjntfkt11.gif'
		});
		break;
                case 'kys':
		bot.sendMessage({
			to: channelID,
			message: 'https://www.youtube.com/watch?v=RefMInhKCSY'
		});
		break;
                case 'wipe':
		bot.sendMessage({
			to: channelID,
			message: 'https://i.redd.it/4kffwtnfqru11.jpg'
		});
		break;
                case 'remindme':
		bot.sendMessage({
			to: channelID,
			message: 'please include a timeframe, i.e. *!remindme6months*'
		});
		break;
                case 'remindme6months':
		bot.sendMessage({
			to: channelID,
			message: 'Kyle has no idea how to code. Did you honestly think that would work?'
		});
		break;
                case 'kyle2':
		case 'drew11':
                case 'chris3':
		case 'taylor7':
                case 'kim3':
		case 'mushi4':
                case 'yeet':
		case 'quest':
                case 'fyasko':
		case 'thrash':
                case 'matt':
		case 'imgay':
                case 'esketit':
		case 'skrrt':
		bot.sendMessage({
			to: channelID,
			message: 'https://thumbs.gfycat.com/GrandThoroughIchthyostega-size_restricted.gif'
		});
		break;

         }
     }
});