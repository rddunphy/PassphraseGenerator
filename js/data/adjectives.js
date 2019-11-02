const adjectives = [
["top", false],
["kind", false],
["back", false],
["firm", false],
["past", false],
["mean", false],
["dark", false],
["good", false],
["evil", true],
["cold", false],
["blue", false],
["right", false],
["front", false],
["metal", false],
["black", false],
["cream", false],
["green", false],
["steel", false],
["whole", false],
["round", false],
["white", false],
["elite", true],
["final", false],
["magic", false],
["giant", false],
["ideal", true],
["plain", false],
["minute", false],
["second", false],
["public", false],
["middle", false],
["bottom", false],
["secret", false],
["female", false],
["silver", false],
["cotton", false],
["medium", false],
["inside", true],
["senior", false],
["timber", false],
["bronze", false],
["manual", false],
["slow", false],
["cool", false],
["new", false],
["old", true],
["big", false],
["bad", false],
["low", false],
["red", false],
["hot", false],
["far", false],
["gay", false],
["fun", false],
["sad", false],
["due", false],
["wet", false],
["mad", false],
["odd", true],
["raw", false],
["ill", true],
["shy", false],
["high", false],
["long", false],
["real", false],
["only", true],
["able", true],
["late", false],
["hard", false],
["true", false],
["full", false],
["easy", true],
["fine", false],
["poor", false],
["dead", false],
["left", false],
["main", false],
["nice", false],
["huge", false],
["wide", false],
["deep", false],
["safe", false],
["rich", false],
["wild", false],
["tiny", false],
["soft", false],
["fair", false],
["tall", false],
["thin", false],
["sick", false],
["just", false],
["rare", false],
["busy", false],
["gray", false],
["vast", false],
["live", false],
["weak", false],
["glad", false],
["holy", false],
["pure", false],
["pink", false],
["fast", false],
["flat", false],
["lost", false],
["mere", false],
["pale", false],
["loud", false],
["wise", false],
["ugly", true],
["dear", false],
["bare", false],
["mild", false],
["oral", true],
["bold", false],
["rear", false],
["near", false],
["sexy", false],
["cute", false],
["damn", false],
["sole", false],
["dumb", false],
["neat", false],
["other", true],
["great", false],
["small", false],
["large", false],
["young", false],
["early", true],
["local", false],
["short", false],
["wrong", false],
["happy", false],
["ready", false],
["legal", false],
["heavy", false],
["tough", false],
["civil", false],
["fresh", false],
["basic", false],
["sorry", false],
["quick", false],
["broad", false],
["quiet", false],
["aware", true],
["moral", false],
["daily", false],
["extra", true],
["sweet", false],
["urban", true],
["empty", true],
["prime", false],
["angry", true],
["thick", false],
["brown", false],
["funny", false],
["crazy", false],
["equal", true],
["smart", false],
["cheap", false],
["upper", true],
["tired", false],
["proud", false],
["rural", false],
["solid", false],
["sharp", false],
["lucky", false],
["brief", false],
["joint", false],
["grand", false],
["still", false],
["usual", false],
["inner", true],
["false", false],
["armed", true],
["minor", false],
["rough", false],
["super", false],
["blind", false],
["tight", false],
["solar", false],
["loose", false],
["dirty", false],
["vital", false],
["given", false],
["rapid", false],
["eager", true],
["naked", false],
["awful", true],
["exact", true],
["harsh", false],
["weird", false],
["outer", true],
["drunk", false],
["civic", false],
["steep", false],
["scary", false],
["silly", false],
["stiff", false],
["toxic", false],
["faint", false],
["mixed", false],
["sheer", false],
["prior", false],
["royal", false],
["fixed", false],
["known", false],
["dried", false],
["gross", false],
["nasty", false],
["vocal", false],
["risky", false],
["blank", false],
["dying", false],
["awake", true],
["valid", false],
["cruel", false],
["loyal", false],
["blond", false],
["brave", false],
["dense", false],
["sunny", false],
["fatal", false],
["naval", false],
["little", false],
["social", false],
["better", false],
["strong", false],
["recent", false],
["likely", false],
["single", false],
["common", false],
["simple", false],
["entire", true],
["modern", false],
["global", false],
["normal", false],
["bright", false],
["annual", true],
["afraid", true],
["native", false],
["active", true],
["united", false],
["famous", false],
["mental", false],
["yellow", false],
["unique", false],
["ethnic", true],
["actual", true],
["golden", false],
["narrow", false],
["useful", false],
["proper", false],
["guilty", false],
["living", false],
["unable", true],
["visual", false],
["inept", true],
["silent", false],
["formal", false],
["racial", false],
["online", true],
["severe", false],
["smooth", false],
["nearby", false],
["junior", false],
["pretty", false],
["wooden", false],
["honest", true],
["broken", false],
["stupid", false],
["remote", false],
["mutual", false],
["sudden", false],
["stable", false],
["steady", false],
["scared", false],
["slight", false],
["closer", false],
["sleepy", false],
["modest", false],
["hungry", false],
["weekly", false],
["gifted", false],
["lovely", false],
["sacred", false],
["gentle", false],
["bitter", false],
["subtle", false],
["deadly", false],
["strict", false],
["random", false],
["fiscal", false],
["closed", false],
["frozen", false],
["decent", false],
["purple", false],
["casual", false],
["hidden", false],
["tender", false],
["lonely", false],
["shared", false],
["verbal", false],
["tribal", false],
["divine", false],
["bloody", false],
["immune", true],
["exotic", true],
["tragic", false],
["costly", false],
["fierce", false],
["unfair", true],
["faster", false],
["intact", true],
["mobile", false],
["brutal", false],
["coming", false],
["rubber", false],
["flying", false],
["marine", false],
["boring", false],
["federal", false],
["special", false],
["certain", false],
["medical", false],
["current", false],
["private", false],
["foreign", false],
["natural", false],
["similar", false],
["central", false],
["serious", false],
["general", false],
["popular", false],
["western", false],
["perfect", false],
["nuclear", false],
["willing", false],
["average", true],
["present", false],
["regular", false],
["growing", false],
["healthy", false],
["eastern", true],
["primary", false],
["strange", false],
["complex", false],
["married", false],
["supreme", false],
["obvious", true],
["correct", false],
["ancient", true],
["typical", false],
["overall", true],
["initial", true],
["careful", false],
["limited", false],
["liberal", false],
["massive", false],
["unusual", true],
["outside", true],
["illegal", true],
["musical", false],
["violent", false],
["leading", false],
["amazing", true],
["intense", true],
["visible", false],
["digital", false],
["capable", false],
["nervous", false],
["crucial", false],
["extreme", true],
["classic", false],
["distant", false],
["genetic", false],
["diverse", false],
["working", false],
["unknown", true],
["elderly", true],
["radical", false],
["ongoing", true],
["wealthy", false],
["painful", false],
["helpful", false],
["organic", true],
["curious", false],
["running", false],
["worried", false],
["related", false],
["excited", true],
["pleased", false],
["ethical", true],
["evident", true],
["missing", false],
["monthly", false],
["written", false],
["maximum", false],
["outdoor", true],
["minimum", false],
["welcome", false],
["chronic", false],
["retired", false],
["virtual", false],
["driving", false],
["endless", true],
["genuine", false],
["precise", false],
["anxious", true],
["teenage", false],
["elegant", true],
["dynamic", false],
["content", false],
["coastal", false],
["burning", false],
["alleged", true],
["shallow", false],
["hostile", false],
["secular", false],
["neutral", false],
["rolling", false],
["minimal", false],
["passing", false],
["instant", true],
["partial", false],
["logical", false],
["unhappy", true],
["fragile", false],
["crowded", false],
["veteran", false],
["skilled", false],
["national", false],
["economic", true],
["possible", false],
["military", false],
["personal", false],
["physical", false],
["cultural", false],
["specific", false],
["positive", false],
["southern", false],
["critical", false],
["original", true],
["powerful", false],
["involved", true],
["supposed", false],
["previous", false],
["complete", false],
["academic", true],
["negative", false],
["familiar", false],
["domestic", false],
["northern", false],
["greatest", false],
["regional", false],
["internal", true],
["standard", false],
["official", true],
["separate", false],
["terrible", false],
["multiple", false],
["criminal", false],
["enormous", true],
["creative", false],
["dramatic", false],
["existing", true],
["opposite", true],
["ordinary", true],
["numerous", false],
["constant", false],
["straight", false],
["historic", false],
["apparent", true],
["clinical", false],
["ultimate", true],
["valuable", false],
["pregnant", false],
["unlikely", true],
["electric", true],
["literary", false],
["chemical", false],
["accurate", true],
["friendly", false],
["innocent", true],
["advanced", true],
["relevant", false],
["external", true],
["exciting", true],
["athletic", true],
["proposed", false],
["detailed", false],
["romantic", false],
["relative", false],
["absolute", true],
["dominant", false],
["civilian", false],
["distinct", false],
["artistic", true],
["moderate", false],
["frequent", false],
["everyday", true],
["adequate", true],
["concrete", false],
["changing", false],
["colonial", false],
["homeless", false],
["superior", false],
["suburban", false],
["reliable", false],
["canned", false],
["murky", false],
["muddy", false],
["fake", false]
]
