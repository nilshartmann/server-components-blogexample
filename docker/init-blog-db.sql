DROP TABLE IF EXISTS posts;

CREATE TABLE posts
(
    id    SERIAL PRIMARY KEY,
    user_id VARCHAR NOT NULL,
    title VARCHAR   NOT NULL,
    date  TIMESTAMP NOT NULL,
    body  TEXT NOT NULL,
    tags TEXT NOT NULL
);

INSERT INTO posts (id, user_id, title, date, body, tags) VALUES (1, 'U1', 'Routing Solutions for React', '2020-01-03T11:07:04.529Z', 'Lorem ipsum dolor amet microdosing man braid lyft pok pok dreamcatcher hammock tattooed listicle everyday carry banh mi +1 art party. PBR&B keffiyeh freegan irony, +1 unicorn messenger bag quinoa chartreuse banh mi. 8-bit lo-fi hammock, plaid hexagon letterpress paleo sriracha meggings marfa succulents farm-to-table pour-over skateboard. **Iceland pabst crucifix, paleo health** goth neutra pork belly vaporware keffiyeh tumblr semiotics williamsburg hammock. Pork belly master cleanse pour-over, adaptogen chambray subway tile kitsch shabby chic.\Actually try-hard craft beer direct trade. Copper mug helvetica try-hard synth microdosing selvage before they sold out, tilde bicycle rights. Squid craft beer polaroid tbh truffaut gochujang. Lo-fi meditation crucifix, bicycle rights squid health goth marfa flannel af photo booth four dollar toast master cleanse lyft four loko man braid.

Cliche glossier vexillologist, williamsburg venmo butcher lumbersexual ramps. Cloud bread cardigan dreamcatcher, cold-pressed edison bulb mixtape irony chicharrones. Selvage poke man braid, hot chicken hexagon adaptogen cloud bread wolf twee. Roof party occupy shaman la croix bespoke, brooklyn keffiyeh affogato live-edge fanny pack jianbing authentic tattooed church-key. Adaptogen meditation kinfolk la croix readymade gentrify vape yr cray mumblecore hot chicken vexillologist deep v health goth migas. Tumeric pour-over gentrify, thundercats tousled 90''s keffiyeh live-edge VHS waistcoat cold-pressed. Put a bird on it adaptogen pinterest slow-carb unicorn hammock scenester four loko kale chips.

Wayfarers tousled blue bottle man bun cliche chicharrones edison bulb fingerstache live-edge iceland echo park shaman hella woke. Gochujang mumblecore kale chips taxidermy, synth lomo drinking vinegar artisan lyft coloring book thundercats air plant mustache. Beard keytar tumeric truffaut, kombucha try-hard copper mug la croix. Pabst lumbersexual letterpress disrupt. 8-bit live-edge typewriter biodiesel. Salvia mlkshk pabst banh mi, venmo selfies before they sold out try-hard put a bird on it meggings knausgaard PBR&B flexitarian tote bag lyft.

Direct trade food truck synth put a bird on it 90''s, meh glossier hammock shaman cronut paleo gochujang jean shorts. Fashion axe master cleanse schlitz kogi quinoa thundercats occupy. Chia chillwave disrupt mustache meh. Synth messenger bag biodiesel photo booth irony kale chips. Celiac iceland hammock crucifix waistcoat narwhal tacos ethical cardigan man bun chambray pour-over. Intelligentsia normcore gochujang man bun forage pitchfork. Salvia VHS knausgaard hoodie.

Oh. You need a little dummy textfor your mockup? How quaint.

I bet you’re still using Bootstrap too…',

                                                                 'Routing,React,Bootstrap,URL');

INSERT INTO posts (id, user_id, title, date, body, tags) VALUES (2, 'U2', 'My Story on JavaScript', '2020-01-04T17:12:03.529Z', 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis.

Cum horribilem walking dead resurgere de crazed sepulcris creaturis, zombie sicut de grave feeding iride et serpens. Pestilentia, shaun ofthe dead scythe animated corpses ipsa screams. Pestilentia est plague haec decaying ambulabat mortuos.

Sicut zeder apathetic malus voodoo. Aenean a dolor plan et terror soulless vulnerum contagium accedunt, mortui iam vivam unlife. Qui tardius moveri, brid eof reanimator sed in magna copia sint terribiles undeath legionis. Alii missing oculis aliorum sicut serpere crabs nostram. Putridi braindead odores kill and infect, aere implent left four dead.

Lucio fulci tremor est dark vivos magna. Expansis creepy arm yof darkness ulnis witchcraft missing carnem armis Kirkman Moore and Adlard caeruleum in locis. Romero morbo Congress amarus in auras. Nihil horum sagittis tincidunt, zombie slack-jawed gelida survival portenta.',
                                                                 'JavaScript,WebDev');

INSERT INTO posts (id, user_id, title, date, body, tags) VALUES (3, 'U7', 'Handling complex state', '2019-11-30T06:18:22.529Z', 'In sed pariatur incididunt salami pancetta landjaeger dolore meatloaf rump anim aute kevin. Turducken aliquip shoulder labore, enim pig dolore. Shoulder ut proident pig pork loin. Sirloin turkey in meatloaf pork chop, sunt strip steak qui.

Eu ipsum officia ad leberkas sint. Labore spare ribs venison pork belly aute, culpa pork loin ground round nostrud ea qui sirloin prosciutto jowl elit. Ut jowl in cupim beef ribs turducken pig. Swine hamburger porchetta kielbasa commodo ham et sint pork belly rump dolore turducken in consequat fugiat.

Tail sed cillum, esse non elit pork belly pork loin eiusmod. Ut boudin rump, kielbasa aliqua alcatra kevin. Sausage excepteur ut occaecat labore. Drumstick cillum nostrud pork belly. Ground round ullamco pork chuck. Eu nulla pork chop aute andouille kevin duis ut kielbasa.Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!',

    'React,State,Redux,Context');

INSERT INTO posts (id, user_id, title, date, body, tags) VALUES (4, 'U3', 'Do''s and don''ts with React', '2020-01-07T04:15:03.529Z', 'Biscuit marzipan tart topping pie apple pie I love. Marzipan I love biscuit bear claw I love liquorice. Chocolate cake soufflé pastry oat cake jelly-o lemon drops ice cream lemon drops candy.

Toffee sweet roll jelly beans I love chocolate sweet tart apple pie icing. Icing powder topping cake. Cupcake soufflé chocolate cake marshmallow muffin dessert sugar plum halvah cake.

Danish sweet roll chocolate bar pie cheesecake. Bear claw halvah powder candy chocolate cake chocolate bar sugar plum tootsie roll I love. Chocolate tiramisu candy canes cheesecake.',
                                                                 'React,Best Practice,Marzipan');

INSERT INTO posts (id, user_id, title, date, body, tags) VALUES (5, 'U4', 'Something to remember when learning new tech', '2019-12-09T17:13:04.529Z', 'Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.

Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.

Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley jícama salsify.

Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard.',
                                                                 'JavaScript,WebDev');

INSERT INTO posts (id, user_id, title, date, body, tags) VALUES (6, 'U5', 'Styling your Components', '2019-12-11T08:43:04.529Z', 'Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I''m in a transitional period so I don''t wanna kill you, I wanna help you. But I can''t give you this case, it don''t belong to me. Besides, I''ve already been through too much shit this morning over this case to hand it over to your dumb ass.

My money''s in that office, right? If she start giving me some bullshit about it ain''t there, and we got to go someplace else and get it, I''m gonna shoot you in the head then and there. Then I''m gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I''m talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?

Now that we know who you are, I know who I am. I''m not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain''s going to be? He''s the exact opposite of the hero. And most times they''re friends, like you and me! I should''ve known way back when... You know why, David? Because of the kids. They called me Mr Glass.',
                                                                 'React,CSS');

INSERT INTO posts (id, user_id, title, date, body, tags) VALUES (7, 'U5', 'Keep calm and learn React!', '2021-01-10T15:03:04.529Z', 'Pommy ipsum air one''s dirty linen fork out plum pudding the lakes, naff gallivanting around ridicule knows bugger all about nowt. Jolly full English breakast proper alright geezer chaps at the boozer, football bog roll ended up brown bread. Proper knackered collywobbles Geordie I''m off to Bedfordshire wellies, knee high to a grasshopper i''ll be a monkey''s uncle a tad curtain twitching grub''s up jolly hockey sticks, a cracking slappers and **meat** and two **veg**.

Naff off ridiculous golly gosh Bob''s your uncle darling it''s spitting, ear hole bowler hat getting on my wick plum pudding supper black pudding, get away with ya completely starkers a comely wench fork out.',
                                                                 'React,Tutorial');

INSERT INTO posts (id, user_id, title, date, body, tags) VALUES (8, 'U1', 'Increasing React developer experience', '2020-04-17T12:07:04.529Z', 'Tweeting a baseball.Sit on human they not getting up ever make it to the carpet before i vomit mmmmmm for cats are cute dismember a mouse and then regurgitate parts of it on the family room floor, for rub face on owner yet kitten is _playing with dead mouse_. Mark territory.

If human is on laptop sit on the keyboard. Kitty run to human with blood on mouth from frenzied attack on poor innocent mouse, don''t i look cute?

- Hide head under blanket so no one can see loved it, hated it, loved it, hated it but curl up and sleep on the freshly laundered towels. Lounge in doorway see owner, run in terror so making sure that fluff gets into the owner''s eyes.
- And sometimes switches in french and say ''miaou'' just because well why not i want to go outside let me go outside nevermind inside is better yet jump around on couch, meow constantly until given food, . Love you, then bite you nyan fluffness ahh cucumber!. Purr while eating. Make meme, make cute face spend six hours per day washing, but still have a crusty butthole i am the best yet sitting in a box get suspicious of own shadow then go play with toilette paper check cat door for ambush 10 times before coming in.

Rub butt on table. Lick butt.',
                                                                 'DX,WebDev');

INSERT INTO posts (id, user_id, title, date, body, tags) VALUES (9, 'U2', 'Using Redux with care', '2020-04-02T12:07:04.529Z', 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.

Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.

Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
                                                                 'Redux,State');

INSERT INTO posts (id, user_id, title, date, body, tags) VALUES (10, 'U2', 'Understanding State', '2019-04-18T17:05:04.529Z', 'Jemand musste Josef K. verleumdet haben, denn ohne dass er etwas Böses getan hätte, wurde er eines Morgens verhaftet. Wie ein Hund!

Als Gregor Samsa eines Morgens aus unruhigen Träumen erwachte, fand er sich in seinem Bett zu einem ungeheueren Ungeziefer verwandelt.

Und es war ihnen wie eine Bestätigung ihrer neuen Träume und guten Absichten, als am Ziele ihrer Fahrt die Tochter als erste sich erhob und ihren jungen Körper dehnte.

»Es ist ein eigentümlicher Apparat«, sagte der Offizier zu dem Forschungsreisenden und überblickte mit einem gewissermaßen bewundernden Blick den ihm doch wohlbekannten Apparat.',
                                                                 'State,Redux,WebDev');


SELECT setval('posts_id_seq', 100, false);

CREATE TABLE comments
(
    id    SERIAL PRIMARY KEY,
    post_id INTEGER REFERENCES posts(id),
    comment TEXT NOT NULL
);

INSERT INTO comments (post_id, comment) VALUES(10, 'Good article');
INSERT INTO comments (post_id, comment) VALUES(10, 'laudantium enim quasi est quidem magnam voluptate ipsam eos');
INSERT INTO comments (post_id, comment) VALUES(9, 'tempora quo necessitatibus');
INSERT INTO comments (post_id, comment) VALUES(8, 'Yolo ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis odio at erat viverra lobortis.');
INSERT INTO comments (post_id, comment) VALUES(7, 'ndolor quam autem quasi');

INSERT INTO comments (post_id, comment) VALUES(7, 'reiciendis et nam sapiente accusantium');
INSERT INTO comments (post_id, comment) VALUES(7, 'It ceases to exist without me. No, you clearly don''t know who you''re talking to, so let me clue you in.');
INSERT INTO comments (post_id, comment) VALUES(2, 'I''ll be sure to note that in my log. Smooth as an android''s bottom, eh, Data? ');

INSERT INTO comments (post_id, comment) VALUES(1, 'Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition');
INSERT INTO comments (post_id, comment) VALUES(3, 'Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.');
INSERT INTO comments (post_id, comment) VALUES(7, 'Disrupt inspire and think tank, social entrepreneur but preliminary thinking think tank compelling.');

INSERT INTO comments (post_id, comment) VALUES(3, 'A slice of heaven. O for awesome, this chocka full cuzzie is as rip-off as a cracker.');
INSERT INTO comments (post_id, comment) VALUES(4, 'Inspiring, invest synergy capacity building, white paper; silo, unprecedented challenge B-corp problem-solvers. ');
INSERT INTO comments (post_id, comment) VALUES(5, 'Preliminary thinking, indicators entrepreneur, mass incarceration; grit we must stand up agile policymaker citizen-centered.');
