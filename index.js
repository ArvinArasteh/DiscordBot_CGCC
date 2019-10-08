const Discord = require("discord.js");
require('dotenv').config();

const TOKEN = process.env.CGCC_DISCORDBOT_TOKEN;
const PREFIX = process.env.CGCC_DISCORDBOT_PREFIX;
var bot = new Discord.Client();

var future = [
    "Yes",
    "No",
    "Maybe",
    "Cute",
    "HellooOoOoOoOooO"
];
var joke = [                                                                                        //add more jokes
    "What do you call a bumble bee that came to the United States? A USB.",
    "How did the telephone propose to its girlfriend? He gave her a ring.",
    "How do you prevent a Summer cold? Catch it in the Winter!",
    "Corny jokes are a-maize-ing.",
    "What is 5q+5q? (10q) YOU'RE WELCOME.",
    "What baby corn asks mama corn? Where is popcorn?.",
    "I bought some shoes from a drug dealer. I don't know what he laced them with, but I've been tripping all day.",
    "What do you call a guy with a rubber toe ? Roberto",
    "Why did the old man fall down the well? He couldn't see that well",
    "How does NASA organize a party? They PLANET."
];

bot.on("ready", function () {
    console.log("Ready");


});


bot.on("guildMemberAdd", function (member) {

    member.guild.channels.find("name", "general").sendMessage(member.toString() + " Welcome to the Peer Mentor Channel to Learn More Type in !info");

});



bot.on("message", function (message) {

    console.log(message.content);

    if (message.author.equals(bot.user)) return;

    if (message.content.toLowerCase() == "hello") {

        message.channel.send("Hi, there!");
    }

    if (message.content.toLowerCase() == "hi") {

        message.channel.send("Hi, there!");
    }

    if (message.content.toLowerCase() == "hi, there") {

        message.channel.send("HellOoOoOo! :)");
    }

    if (message.content.toLowerCase() == "hello, there") {

        message.channel.send("Hello :)");

    }

    if (message.content.toLowerCase() == "how are you") {

        message.channel.send("Good, how about you? :)");

    }

    if (message.content.toLowerCase() == "hi there") {

        message.channel.send("Hello :)");

    }

    if (message.content.toLowerCase() == "hello there") {

        message.channel.send("Hello :)");

    }

    if (message.content.toLowerCase() == "cute") {

        message.channel.send("I know I am :)");

    }

    if (message.content.toLowerCase() == "you are cute") {

        message.channel.send("I know I am :)");

    }

    if (message.content.toLowerCase() == "you're cute") {

        message.channel.send("I know I am :)");

    }

    if (message.content.toLowerCase() == "thanks") {

        message.channel.send("You're Welcome :)");

    }

    if (message.content.toLowerCase() == "thank you") {

        message.channel.send("You're Welcome :)");

    }

    if (message.content.toLowerCase() == "im sad") {

        message.channel.send(message.author.toString() + " When something goes wrong in your life, just yell, ‘PLOT TWIST!’ and move on. :)");

    }

    if (message.content.toLowerCase() == "i'm sad") {

        message.channel.send(message.author.toString() + " When something goes wrong in your life, just yell, ‘PLOT TWIST!’ and move on. :)");

    }


    if (message.content.toLowerCase() == "help") {

        message.channel.send(message.author.toString() + " When something goes wrong in your life, just yell, ‘PLOT TWIST!’ and move on. :)");

    }

    if (message.content.toLowerCase() == "u of a") {

        message.channel.send(message.author.toString() + " Mike Greene");

    }


    if (message.content.toLowerCase() == "uofa") {

        message.channel.send(message.author.toString() + " Mike Greene");

    }


    if (message.content.toLowerCase() == "uoa") {

        message.channel.send(message.author.toString() + " Mike Greene");

    }



    if (message.content.toLowerCase() == "what can you do?") {

        message.channel.send("Type in !info");
    }
    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {

        case "batman":
            message.channel.send("Ryan Cain");
            break;

        case "secret":
            message.channel.send("There are a few secret commands, and you need to discover them.");
            break;

        case "fortnite":
            message.channel.send("Send a Message to Arvin at [CGC] Arvin | FallDamage so he can get you a dub");
            break;

        case "lucas":
            message.channel.send("He is only 17!.");
            
            break;

        case "arvin":
            message.channel.send("He is sooo goooood at fortnite.");
            
            break;

        case "max":
            message.channel.send("He likes to play with his future dices.");
            
            break;

        case "vivian":
            message.channel.send("She has super powers.");
            
            break;

        case "brooke":
            message.channel.send("She is a brewers fan(they lost in the NLCS).");
          
            break;

        case "julia":
            message.channel.send("She hasn't landed in a plane because the only time she flew in one she jumped out of it.");
           
            break;

        case "griffin":
            message.channel.send("He has been to disneyland 25 times.");
          
            break;


        case "ptk":
            var embed = new Discord.RichEmbed()
                .setTitle("PTK")
                .addField("Phi Theta Kappa", "Honor Society")
                .setURL("https://www.ptk.org/")
                .setColor(0x00008B)
                .setFooter("Thank you")


            message.channel.send(embed);
            break;

        case "mackenzie":
            message.channel.send("She is so talented");
            break;


        case "main":
            var embed = new Discord.RichEmbed()
                .setTitle("CGC Main Website")
                .addField("See All the Resources Under Quick Links", "Such as scholarship, tutoring center and ...")
                .setURL("https://www.cgc.edu/Pages/Default.aspx")
                .setColor(0x00BFFF)
                .setFooter("Thank you")
            message.channel.send(embed);
            break;




        case "future":
            if (args[1]) {
                message.channel.send(future[Math.floor(Math.random() * future.length)]);
            }
            else {
                message.channel.send("Can't Read It");
            }
            break;
        case "joke":

            message.channel.send(joke[Math.floor(Math.random() * joke.length)]);


            break;

        case "peermentor":                                                        //more info
            var embed = new Discord.RichEmbed()
                .setTitle("Peer Mentors Contact Info")
                .addField("Use !arvin", "Arvin Arasteh")
                .addField("Use !brooke", "Brooke Sherman")
                .addField("Use !griffin", "Griffin Lynch ")
                .addField("Use !julia", "Julia Wilcken")
                .addField("Use !lucas", "Lucas Kauffman")
                .addField("Use !mackenzie", "Mackenzie Mailhot")
                .addField("Use !max", "Max Espina")
                .addField("Use !vivian", "Vivian Oroz")



                .setColor(0x7CFC00)
                .setFooter("Thank you")
                .setThumbnail(message.author.avatarURL)

            message.channel.send(embed);
            break;

        case "info":                                                        //more info
            var embed = new Discord.RichEmbed()
                .setTitle("Resources")
                .addField("Use !scholarship", "To Learn More about Scholarships")
                .addField("Use !drs", "To Learn More about DRS")
                .addField("Use !counseling", "To Learn More about Counseling")
                .addField("Use !career", "To Learn More about Career Services")
                .addField("Use !computerlab", "To Learn More about Computer Lab")
                .addField("Use !studentlife", "To Learn More about Student Life and Leadership")
                .addField("Use !tutoring", "To Learn More about Tutoring")
                .addField("Use !coyoteconnect", "To Learn More about Coyote Connect")
                .addField("Use !main", "Direction to The CGC Main Website")
                .addField("Use !peermentor", "Contact Info and a Fun Fact about our peer mentors")
                .addField("Use !fun", "To Learn More About Our Fun Commands")
                .addField("Use !noticeme", "For Individual Attention")

                .setColor(0x00FFFF)
                .setFooter("Thank you")
                .setThumbnail(message.author.avatarURL)

            message.channel.send(embed);
            break;



        case "fun":                                                        //more info
            var embed = new Discord.RichEmbed()
                .setTitle("Fun Commands")
               
                .addField("Use !future and a yes/no question", "Fortune Teller")
                .addField("Use !secret", "Tells you the secret")
                .addField("Use !joke", "For Daily Jokes")
                .addField("Use !noticeme", "For Individual Attention")

                .setColor(0xFF0000)
                .setFooter("Thank you")
                .setThumbnail(message.author.avatarURL)

            message.channel.send(embed);
            break;




        case "drs":
            var embed = new Discord.RichEmbed()
                .setTitle("Disability Resources and Services")
                .addField("You can use tools such as DRS Connect and ... ", "The DRS Office provides services to students who have a documented disability according to The Americans with Disabilities Act (ADA), Amendment Act of 2008, and Section 504 of the Rehabilitation Act. ")
                .setURL("https://www.cgc.edu/Students/DisabilityServices/Pages/Home.aspx")
                .setColor(0x00BFFF)
                .setFooter("Thank you")
            message.channel.send(embed);
            break;



        case "scholarship":
            var embed = new Discord.RichEmbed()
                .setTitle("Scholarships")
                .addField("Scholarships Categories : CGCC Scholarships, MCCCD Foundation Scholarships and Honors Program", "The lists above are the various scholarship opportunities available to CGCC students. Be sure to review each section as well as how to apply. This site is updated regularly as new scholarships become available.  ")
                .setURL("https://www.cgc.edu/Students/FinancialAid/Types/Pages/Home.aspx?tab=5")
                .setColor(0xFF4500)
                .setFooter("Thank you")
            message.channel.send(embed);
            break;

        case "coyoteconnect":
            var embed = new Discord.RichEmbed()
                .setTitle("Coyote Connect")
                .addField("OrgSync is your way to connect to organizations, communicate with other members, and explore your community", "Join up with the organizations you are already a member of or find out what else is going on in your area.")
                .setURL("https://cas.cgc.maricopa.edu/webformscasserver/login.aspx/login?service=https%3A%2F%2Forgsync.com%2Fcas%2FChandler-Gilbert-Community-College")
                .setColor(0xADFF2F)
                .setFooter("Thank you")
            message.channel.send(embed);
            break;



        case "counseling":
            var embed = new Discord.RichEmbed()
                .setTitle("Counseling Services")
                .addField("Counseling Services provides the following: 1-Instruction 2-Personal Counseling 3-Career Counseling 4-Crisis Intervention 5-Student Retention 6-Advocacy for Students Referral to campus and community resources ", "The mission of CGCC's Counseling Services is to promote student development by facilitating personal growth, career decision making, and academic success. ")
                .setURL("https://www.cgc.edu/Academics/Support/Pages/APS-Home.aspx")
                .setColor(0x800080)
                .setFooter("Thank you")
            message.channel.send(embed);
            break;


        case "career":
            var embed = new Discord.RichEmbed()
                .setTitle("Career Services")
                .addField("Develop techniques to confidently present yourself to employers and other industry professionals.", "Career development begins the moment you step on  campus.  Utilize career resources early and often.  Be sure to attend our career readiness workshops, campus career fairs, and employment-related events. Make an appointment  with a career advisor today!")
                .setURL("https://www.cgc.edu/Academics/Careers/Pages/Home.aspx")
                .setColor(0xAFEEEE)
                .setFooter("Thank you")
            message.channel.send(embed);
            break;



        case "studentlife":
            var embed = new Discord.RichEmbed()
                .setTitle("Student Life and Leadership")
                .addField("At CGCC, a three-part approach to Student Life is taken in which community service, experience programming, and leadership training are the focus.", "The Office of Student Life and Leadership exists to serve and educate students by creating a supporting environment that provides opportunities for personal, professional and social development.")
                .setURL("https://www.cgc.edu/Students/studentlife/Pages/student-life.aspx")
                .setColor(0xFFFF00)
                .setFooter("Thank you")


            message.channel.send(embed);
            break;


        case "computerlab":
            var embed = new Discord.RichEmbed()
                .setTitle("Computer Lab")
                .addField("The Chandler-Gilbert Computer Lab is open to all registered students.", "Chan​dler-Gilbert students may use the computer lab to work on assignments, access the internet to gather information for courses, use the internet to register for courses, and/or access online courses.")
                .setURL("https://www.cgc.edu/services/technology-support/comp-lab/Pages/comp-lab.aspx")
                .setColor(0xFFE4E1)
                .setFooter("Thank you")


            message.channel.send(embed);
            break;




        case "tutoring":
            var embed = new Discord.RichEmbed()
                .setTitle("Tutoring Services")
                .addField("Free tutoring services are available to CGCC students on a drop-in basis for selected courses. While the emphasis is on providing writing, mathematics, and science support, services are available for a wide range of courses at CGCC.", "The Center also provides instructional support resources in the form of videotapes, software, printed materials, and much more. Both the tutoring and resources help students improve in content specific areas as well as in study skills.")
                .setURL("https://www.cgc.edu/Academics/LearningCenter/Pages/Home.aspx")
                .setColor(0xFF69B4)
                .setFooter("Thank you")


            message.channel.send(embed);
            break;


        case "thanos":
            message.channel.send(message.author.toString() + " Developer's Favorite Super Hero");
            break;

        case "superman":
            message.channel.send(message.author.toString() + " Superman has super powers but batman......(you complete the message haha)");
            break;

        case "game":
            message.channel.send(message.author.toString() + " What Kind of game?! :')");
            break;

        case "cute":
            message.channel.send(message.author.toString() + " You are so cuteeee!");
            break;


        case "help":
            message.channel.send(message.author.toString() + " No worries, I am here to help! Just type in !info");
            break;


        case "mad":
            message.channel.send(message.author.toString() + " I'm not the perfect person. I'm not the most happy person. I get angry, and I get mad sometimes, but I try my best to control my thoughts. Because that flows throughout your body.");
            break;

        case "smile":
            message.channel.send(message.author.toString() + " Always SMILE because of your SMILE, you make life more beautiful. :)");
            break;


  



        case "noticeme":
            message.channel.send(message.author.toString() + " Hello, there! Type in !info for more commands");
            break;

        default:
            message.channel.send("Invalid Command");


    }

});

bot.login(TOKEN);



