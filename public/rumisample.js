var RumiHai = [
"None is travelling/ Here along this noun0 but I,/ This adjv0 evening.",
"The adjv0 noun0 of the noun1:/ thoughts come - and there is loneliness;/ the autumn adjv1 is here.",
"An adjv0 noun0/ A noun1 verb0 in -/ Splash!",
"adjv0 adjv1 noun0 . . ./ unexpected/ noun1/ Goes plop! Watersplash!",
"Lightening -/ noun0 cry/ verb0 the adjv0",
"noun0 come from time to noun1 -/ and bring to noun2 a chance to verb0/ from looking at the moon.",
"In the noun0 cry/ There's no sign that can foretell/ How soon it must verb0.",
"Poverty's noun0 -/ he starts to verb0 the noun1,/ and gazes at the noun2.",
"Won't you come and see/ adjv0? Just one noun0/ from the adjv1 noun1.",
"noun0 bells die out./ The adjv0 noun1 remain./ A perfect noun2!",
"noun0 in the air .../ adjv0 noun1/ until, twice/ They meet, they verb0",
"adjv0 noun0 broken/ scatters in the/ noun1 ... Now see/ adjv1 mountains!",
"Seek on high bare noun0/ sky-reflecting.../ adjv0 noun1",
"For a adjv0 noun0/ let us arrange these/ noun2.../ Since there is no noun1",
"Now that eyes of hawks/ in adjv0 noun0/ are darkened . . ./ verb0 of the noun1",
"adjv0 air stirs in/ noun0 . . ./ a adjv1 noun1/ Floats and balances",
"In the noun0 edge/ verb0 with/ bright small noun1 .../ adjv0 noun2",
"The noun0/ verb0 may rains/ from adjv0 noun1/ for the noun2 . . ./ Murmuring adjv1",
"White cloud of noun0/ above white/ noun1 . . ./ adjv0 noun2",
"adjv0 noun0 . . ./ whistle on,/ sweet noun1/ Of adjv1 noun2",
"adjv0 noun0/ falling, falling,/ falling now . . ./ adjv1 noun1",
"Ah me! I am one/ who spends his adjv0/ breakfast/ noun0 verb0",
"noun0 wild tonight . . ./ stretching over/ noun1/ adjv0 clouds of noun2",
"Why so adjv0, noun0?/ starving for fat noun1/ or noun2. . ./ Or backyard love?",
"noun0, let me cleanse/ in your brief/ adjv0 noun1 . . ./ These adjv1 hands of life",
"Glorious noun0 . . ./ therefore our thanks/ adjv0 noun1/ Come to rest our necks",
"Under noun0/ soup, the salad,/ noun1 and all . . ./ verb0 with noun2",
"Too curious noun0/ watching us pass,/ met noun1 . . ./ Our adjv0 noun2",
"Cloud of noun0 . . ./ tolling adjv0/ noun1 . . . / noun2",
"Must noun0 fade?/ then cry all noun1 . . ./ and noun2/ Cold adjv0 eyes pour tears",
"Such utter silence!/ even noun0/ verb0 . . ./ verb1 by adjv0 noun1",
"Swallow in the noun0 . . ./ verb0 my adjv0/ buzzing friends/ Among noun1",
"Bright red noun0 . . ./ it needs but shiny/ noun1 and look . . ./ Darting noun2!",
"Wake! The sky is noun0!/ let us to the road/ again . . ./ adjv0 noun0!",
"noun0/ fell in silent dawn . . ./ spilling/ adjv0 noun1",
"In the adjv0 noun0/ these adjv1/ noun1 . . ./ A lovely noun1",
"adjv0 noun0/ verb0 noun1/ Over the noun2",
"Now the adjv0 noun0/ is quieted/ with noun1 . . ./ Like our adjv1 noun2",
"noun0 darkening . . ./ oh voices of the/ adjv0 noun1/ Crying, whirling, adjv1",
"Nine times arising/ to see noun0 . . ./ whose solemn pace/ Marks only noun1",
"Now in adjv0 noun0/ as I take my/ adjv1 noun1 . . ./ A adjv2 noun2",
"Will we meet again/ here at your/ adjv0 noun0 . . ./ adjv1 noun1?",
"Dry adjv0 noun0/ chirping, keeps/ the noun1 gay . . ./ Contemptuous of noun2",
"First adjv0 noun0/ just enough to verb0/ the noun1/ Of faded noun2",
"adjv0 noun0 long gone . . ./ adjv1 noun1 alone/ foregather/ On the noun2",
"Cold adjv0 noun0 . . ./ poor noun1,/ you too could use/ A little adjv1 noun2",
"No noun0 to verb0 by . . ./ I am off to noun1/ but ah! . . ./ My adjv0 noun2",
"This adjv0 noun0/ that adjv1 noun1/ I hate so much . . ./ But noun2 beautiful!",
"If there were noun0/ these adjv0 noun1-/ noun2 settling . . ./ on the rocks",
"See: surviving noun0/ visit the adjv0/ noun1 . . ./ adjv1, with adjv2 noun2",
"adjv0 adjv1,/ my dreams arose/ To march again . . ./ Into a hollow noun0",
];

var replaceterms = [
	/[:]/g,
	/[.]/g,
	/[,]/g,
	/[(]/g,
	/[)]/g,
	/[-]/g,
	/\ba\b/g,
	/\band\b/g,
	/\bas\b/g,
	/\bof\b/g,
	/\bthe\b/g,
	/\bor\b/g,
	/\http\w+/g,
	/\/\/\w+/g,
	/\/\w+/g,
	/\/\w+/g,
];

var lastreplace = [
	/\bnoun0\b/g,
	/\bnoun1\b/g,
	/\bnoun2\b/g,
	/\badjv0\b/g,
	/\badjv1\b/g,
	/\badjv2\b/g,
	/\bverb0\b/g,
	/\bverb1\b/g,
	/\bverb2\b/g,
];