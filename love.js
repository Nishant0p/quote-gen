const loveQuotes = [
    { quote: "Love is not about possession. Love is about appreciation.", author: "Osho" },
    { quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." },
    { quote: "Love is composed of a single soul inhabiting two bodies.", author: "Aristotle" },
    { quote: "Love is a friendship set to music.", author: "Joseph Campbell" },
    { quote: "To love and be loved is to feel the sun from both sides.", author: "David Viscott" },
    { quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.", author: "Dr. Seuss" },
    { quote: "A loving heart is the truest wisdom.", author: "Charles Dickens" },
    { quote: "Where there is love there is life.", author: "Mahatma Gandhi" },
    { quote: "Love doesn't make the world go round. Love is what makes the ride worthwhile.", author: "Franklin P. Jones" },
    { quote: "Love is like the wind, you can't see it but you can feel it.", author: "Nicholas Sparks" },
    { quote: "The best thing to hold onto in life is each other.", author: "Audrey Hepburn" },
    { quote: "Love is the only reality, and it is not a mere sentiment. It is the ultimate truth that lies at the heart of creation.", author: "Rabindranath Tagore" },
    { quote: "I have waited for this opportunity for more than half a century, to repeat to you once again my vow of eternal fidelity and everlasting love.", author: "Gabriel Garcia Marquez" },
    { quote: "If I know what love is, it is because of you.", author: "Hermann Hesse" },
    { quote: "The heart has its reasons which reason knows not.", author: "Blaise Pascal" },
    { quote: "Love is not about how much you say 'I love you,' but how much you prove that it's true.", author: "Unknown" },
    { quote: "You are my heart, my life, my one and only thought.", author: "Arthur Conan Doyle" },
    { quote: "True love is not about perfection, it is hidden in flaws and imperfections.", author: "Unknown" },
    { quote: "Love looks not with the eyes, but with the mind, and therefore is winged Cupid painted blind.", author: "William Shakespeare" },
    { quote: "I am yours, don't give myself back to me.", author: "Rumi" },
    { quote: "We loved with a love that was more than love.", author: "Edgar Allan Poe" },
    { quote: "Love is an endless act of forgiveness. Forgiveness is the key to action and freedom.", author: "Maya Angelou" },
    { quote: "Love is the master key that opens the gates of happiness.", author: "Oliver Wendell Holmes" },
    { quote: "When I saw you I fell in love, and you smiled because you knew.", author: "Arrigo Boito" },
    { quote: "Love is a game that two can play and both win.", author: "Eva Gabor" },
    { quote: "You don't love someone because they're perfect. You love them in spite of the fact that they're not.", author: "Jodi Picoult" },
    { quote: "To love is to recognize yourself in another.", author: "Eckhart Tolle" },
    { quote: "Love is an ocean of emotions entirely surrounded by expenses.", author: "Thomas Dewar" },
    { quote: "Love is a promise, love is a souvenir, once given never forgotten, never let it disappear.", author: "John Lennon" },
    { quote: "You don’t have to be perfect to be loved. You just have to be real.", author: "Unknown" },
    { quote: "Love isn't something you find. Love is something that finds you.", author: "Loretta Young" },
    { quote: "To be your friend was all I ever wanted; to be your lover was all I ever dreamed.", author: "Unknown" },
    { quote: "The greatest thing you'll ever learn is just to love and be loved in return.", author: "Eden Ahbez" },
    { quote: "Love is the only force capable of transforming an enemy into a friend.", author: "Martin Luther King Jr." },
    { quote: "A loving heart is the truest wisdom.", author: "Charles Dickens" },
    { quote: "Love means to be rich in giving, and to be poor in receiving.", author: "Unknown" },
    { quote: "The course of true love never did run smooth.", author: "William Shakespeare" },
    { quote: "Love is the flower you’ve got to let grow.", author: "John Lennon" },
    { quote: "Love is a many-splendored thing.", author: "Paul Simon" },
    { quote: "Love is the only reality, and it is not a mere sentiment. It is the ultimate truth that lies at the heart of creation.", author: "Rabindranath Tagore" },
    { quote: "If I had a flower for every time I thought of you, I could walk through my garden forever.", author: "Alfred Lord Tennyson" },
    { quote: "The heart has its reasons which reason knows not.", author: "Blaise Pascal" },
    { quote: "I am yours, don’t give myself back to me.", author: "Rumi" },
    { quote: "You are my heart, my life, my one and only thought.", author: "Arthur Conan Doyle" },
    { quote: "In your smile I see something more beautiful than the stars.", author: "Beth Revis" },
    { quote: "Love is composed of a single soul inhabiting two bodies.", author: "Aristotle" },
    { quote: "You have bewitched me, body and soul, and I love, I love, I love you.", author: "Jane Austen" },
    { quote: "I love you, not only for what you are, but for what I am when I am with you.", author: "Roy Croft" },
    { quote: "I wish I could turn back the clock. I’d find you sooner and love you longer.", author: "Unknown" },
    { quote: "I fell in love the way you fall asleep: slowly, and then all at once.", author: "John Green" },
    { quote: "You are my sun, my moon, and all my stars.", author: "E.E. Cummings" },
    { quote: "You are my today and all of my tomorrows.", author: "Leo Christopher" },
    { quote: "Every love story is beautiful, but ours is my favorite.", author: "Unknown" },
    { quote: "I never want to stop making memories with you.", author: "Pierre Jeanty" },
    { quote: "I love you to the moon and back, and then even more.", author: "Unknown" },
    { quote: "You are the one that I’ve been waiting for, the one who makes everything seem right.", author: "Unknown" },
    { quote: "Whatever our souls are made of, his and mine are the same.", author: "Emily Brontë" },
    { quote: "I could start fires with what I feel for you.", author: "David Ramirez" },
    { quote: "When I saw you I fell in love, and you smiled because you knew.", author: "Arrigo Boito" },
    { quote: "I have waited for this opportunity for more than half a century, to repeat to you once again my vow of eternal fidelity and everlasting love.", author: "Gabriel Garcia Marquez" },
    { quote: "If I know what love is, it is because of you.", author: "Hermann Hesse" },
    { quote: "I love you more than words can show, I think about you more than you could know, and I need you more than you’ll ever know.", author: "Unknown" },
    { quote: "I am yours, don’t give myself back to me.", author: "Rumi" },
    { quote: "To be your friend was all I ever wanted; to be your lover was all I ever dreamed.", author: "Unknown" },
    { quote: "Love looks not with the eyes, but with the mind, and therefore is winged Cupid painted blind.", author: "William Shakespeare" },
    { quote: "You are my heart, my life, my one and only thought.", author: "Arthur Conan Doyle" },
    { quote: "I love you as one loves certain dark things, secretly, between the shadow and the soul.", author: "Pablo Neruda" },
    { quote: "I can't promise to fix all your problems, but I can promise you won’t have to face them alone.", author: "Unknown" },
    { quote: "The best thing to hold onto in life is each other.", author: "Audrey Hepburn" },
    { quote: "We loved with a love that was more than love.", author: "Edgar Allan Poe" },
    { quote: "You are my heart, my soul, and everything in between.", author: "Unknown" },
    { quote: "Love is not just a feeling, it is a choice. A choice that I will make every day for you.", author: "Unknown" },
    { quote: "The moment I saw you, I knew it was you I’d been waiting for.", author: "Unknown" },
    { quote: "When I look into your eyes, I know I’ve found the mirror of my soul.", author: "Joey W. Hill" },
    { quote: "I can’t stop thinking about you. You make me feel alive in ways I never knew were possible.", author: "Unknown" },
    { quote: "There is only one happiness in life, to love and be loved.", author: "George Sand" },
    { quote: "You are my today and all of my tomorrows.", author: "Leo Christopher" },
    { quote: "The way to love anything is to realize that it may be lost.", author: "Gilbert K. Chesterton" },
    { quote: "To love is to recognize yourself in another.", author: "Eckhart Tolle" },
    { quote: "If I could be anything in the world, I would want to be your tear, to be born in your eyes, live on your cheeks, and die on your lips.", author: "Unknown" }
];