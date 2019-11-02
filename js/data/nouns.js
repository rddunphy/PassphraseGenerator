const nouns = [
["way", "ways"],
["day", "days"],
["man", "men"],
["eye", "eyes"],
["job", "jobs"],
["law", "laws"],
["car", "cars"],
["kid", "kids"],
["war", "wars"],
["guy", "guys"],
["air", "airs"],
["boy", "boys"],
["age", "ages"],
["son", "sons"],
["arm", "arms"],
["tax", "taxes"],
["oil", "oils"],
["bed", "beds"],
["dog", "dogs"],
["cup", "cups"],
["box", "boxes"],
["gun", "guns"],
["leg", "legs"],
["bit", "bits"],
["sea", "seas"],
["bar", "bars"],
["bag", "bags"],
["gas", "gases"],
["act", "acts"],
["sky", "skies"],
["fan", "fans"],
["sun", "suns"],
["ear", "ears"],
["egg", "eggs"],
["bus", "buses"],
["key", "keys"],
["map", "maps"],
["fat", "fats"],
["lip", "lips"],
["cat", "cats"],
["dad", "dads"],
["fee", "fees"],
["era", "eras"],
["tip", "tips"],
["hat", "hats"],
["lab", "labs"],
["sir", "sirs"],
["gap", "gaps"],
["tea", "teas"],
["cop", "cops"],
["pot", "pots"],
["cap", "caps"],
["toy", "toys"],
["pan", "pans"],
["hip", "hips"],
["joy", "joys"],
["lie", "lies"],
["net", "nets"],
["can", "cans"],
["ski", "skis"],
["cow", "cows"],
["jet", "jets"],
["nut", "nuts"],
["fly", "flies"],
["sin", "sins"],
["pie", "pies"],
["lap", "laps"],
["toe", "toes"],
["log", "logs"],
["cry", "cries"],
["pig", "pigs"],
["van", "vans"],
["bay", "bays"],
["rat", "rats"],
["pen", "pens"],
["pad", "pads"],
["bat", "bats"],
["sum", "sums"],
["pit", "pits"],
["gym", "gyms"],
["kit", "kits"],
["pro", "pros"],
["bid", "bids"],
["jaw", "jaws"],
["bow", "bows"],
["bug", "bugs"],
["cab", "cabs"],
["web", "webs"],
["bee", "bees"],
["jar", "jars"],
["gut", "guts"],
["dam", "dams"],
["oak", "oaks"],
["tag", "tags"],
["dot", "dots"],
["rib", "ribs"],
["rod", "rods"],
["ash", "ashes"],
["rim", "rims"],
["lid", "lids"],
["fur", "furs"],
["ego", "egos"],
["cue", "cues"],
["time", "times"],
["year", "years"],
["life", "lives"],
["hand", "hands"],
["part", "parts"],
["case", "cases"],
["week", "weeks"],
["home", "homes"],
["room", "rooms"],
["area", "areas"],
["fact", "facts"],
["book", "books"],
["word", "words"],
["side", "sides"],
["head", "heads"],
["hour", "hours"],
["game", "games"],
["line", "lines"],
["city", "cities"],
["name", "names"],
["team", "teams"],
["idea", "ideas"],
["body", "bodies"],
["face", "faces"],
["door", "doors"],
["girl", "girls"],
["food", "foods"],
["foot", "feet"],
["plan", "plans"],
["care", "cares"],
["role", "roles"],
["rate", "rates"],
["drug", "drugs"],
["wife", "wives"],
["town", "towns"],
["road", "roads"],
["form", "forms"],
["site", "sites"],
["star", "stars"],
["cost", "costs"],
["land", "lands"],
["wall", "walls"],
["step", "steps"],
["baby", "babies"],
["type", "types"],
["film", "films"],
["tree", "trees"],
["hair", "hairs"],
["look", "looks"],
["term", "terms"],
["rule", "rules"],
["bank", "banks"],
["rest", "rests"],
["goal", "goals"],
["page", "pages"],
["race", "races"],
["size", "sizes"],
["fund", "funds"],
["sign", "signs"],
["list", "lists"],
["loss", "losses"],
["deal", "deals"],
["bill", "bills"],
["song", "songs"],
["rock", "rocks"],
["note", "notes"],
["card", "cards"],
["seat", "seats"],
["cell", "cells"],
["ball", "balls"],
["talk", "talks"],
["base", "bases"],
["pain", "pains"],
["trip", "trips"],
["unit", "units"],
["edge", "edges"],
["fear", "fears"],
["heat", "heats"],
["fall", "falls"],
["skin", "skins"],
["item", "items"],
["yard", "yards"],
["task", "tasks"],
["shot", "shots"],
["vote", "votes"],
["wind", "winds"],
["bird", "birds"],
["hope", "hopes"],
["camp", "camps"],
["date", "dates"],
["hole", "holes"],
["ship", "ships"],
["park", "parks"],
["boat", "boats"],
["wood", "woods"],
["club", "clubs"],
["farm", "farms"],
["band", "bands"],
["text", "texts"],
["tool", "tools"],
["path", "paths"],
["shop", "shops"],
["gift", "gifts"],
["suit", "suits"],
["shoe", "shoes"],
["bone", "bones"],
["wine", "wines"],
["hell", "hells"],
["tour", "tours"],
["pair", "pairs"],
["knee", "knees"],
["tape", "tapes"],
["will", "wills"],
["lady", "ladies"],
["neck", "necks"],
["army", "armies"],
["rain", "rains"],
["fuel", "fuels"],
["leaf", "leaves"],
["pool", "pools"],
["salt", "salts"],
["soul", "souls"],
["poll", "polls"],
["half", "halves"],
["code", "codes"],
["jury", "juries"],
["desk", "desks"],
["ring", "rings"],
["loan", "loans"],
["crew", "crews"],
["male", "males"],
["meal", "meals"],
["root", "roots"],
["nose", "noses"],
["file", "files"],
["duty", "duties"],
["zone", "zones"],
["snow", "snows"],
["meat", "meats"],
["soil", "soils"],
["user", "users"],
["bowl", "bowls"],
["host", "hosts"],
["hall", "halls"],
["debt", "debts"],
["bond", "bonds"],
["wing", "wings"],
["beer", "beers"],
["tear", "tears"],
["hero", "heroes"],
["seed", "seeds"],
["dish", "dishes"],
["core", "cores"],
["rise", "rises"],
["flow", "flows"],
["mass", "masses"],
["bomb", "bombs"],
["tone", "tones"],
["gate", "gates"],
["hill", "hills"],
["roof", "roofs"],
["diet", "diets"],
["chip", "chips"],
["bike", "bikes"],
["lake", "lakes"],
["sand", "sands"],
["sale", "sales"],
["tale", "tales"],
["joke", "jokes"],
["coat", "coats"],
["dust", "dusts"],
["iron", "irons"],
["gene", "genes"],
["boss", "bosses"],
["king", "kings"],
["mood", "moods"],
["boot", "boots"],
["bean", "beans"],
["peak", "peaks"],
["wire", "wires"],
["twin", "twins"],
["ally", "allies"],
["peer", "peers"],
["belt", "belts"],
["flag", "flags"],
["corn", "corns"],
["moon", "moons"],
["crop", "crops"],
["buck", "bucks"],
["poem", "poems"],
["tube", "tubes"],
["jail", "jails"],
["cake", "cakes"],
["mine", "mines"],
["wage", "wages"],
["gear", "gears"],
["gang", "gangs"],
["teen", "teens"],
["bell", "bells"],
["bear", "bears"],
["port", "ports"],
["deck", "decks"],
["pole", "poles"],
["mode", "modes"],
["fate", "fates"],
["oven", "ovens"],
["poet", "poets"],
["load", "loads"],
["lawn", "lawns"],
["plot", "plots"],
["pipe", "pipes"],
["tail", "tails"],
["palm", "palms"],
["soup", "soups"],
["pile", "piles"],
["aide", "aides"],
["mall", "malls"],
["heel", "heels"],
["tent", "tents"],
["myth", "myths"],
["menu", "menus"],
["pine", "pines"],
["chef", "chefs"],
["boom", "booms"],
["acid", "acids"],
["lung", "lungs"],
["rope", "ropes"],
["gaze", "gazes"],
["clue", "clues"],
["coal", "coals"],
["rose", "roses"],
["rail", "rails"],
["mess", "messes"],
["norm", "norms"],
["pill", "pills"],
["beef", "beefs"],
["duck", "ducks"],
["dose", "doses"],
["lens", "lenses"],
["nail", "nails"],
["cave", "caves"],
["herb", "herbs"],
["wish", "wishes"],
["pond", "ponds"],
["limb", "limbs"],
["horn", "horns"],
["grip", "grips"],
["beam", "beams"],
["fork", "forks"],
["disk", "disks"],
["blow", "blows"],
["hook", "hooks"],
["doll", "dolls"],
["fist", "fists"],
["bath", "baths"],
["tune", "tunes"],
["hint", "hints"],
["bias", "biases"],
["lamp", "lamps"],
["chin", "chins"],
["silk", "silks"],
["rage", "rages"],
["wake", "wakes"],
["dawn", "dawns"],
["tide", "tides"],
["cart", "carts"],
["mate", "mates"],
["barn", "barns"],
["drum", "drums"],
["nest", "nests"],
["lane", "lanes"],
["cage", "cages"],
["rack", "racks"],
["wolf", "wolves"],
["aunt", "aunts"],
["bush", "bushes"],
["bull", "bulls"],
["exam", "exams"],
["loop", "loops"],
["sock", "socks"],
["lion", "lions"],
["cord", "cords"],
["soap", "soaps"],
["icon", "icons"],
["coin", "coins"],
["mill", "mills"],
["sack", "sacks"],
["tray", "trays"],
["coup", "coups"],
["weed", "weeds"],
["cure", "cures"],
["toll", "tolls"],
["grin", "grins"],
["butt", "butts"],
["bulk", "bulks"],
["goat", "goats"],
["clay", "clays"],
["fare", "fares"],
["disc", "discs"],
["sofa", "sofas"],
["riot", "riots"],
["tile", "tiles"],
["plea", "pleas"],
["bulb", "bulbs"],
["bolt", "bolts"],
["thing", "things"],
["woman", "women"],
["child", "children"],
["world", "worlds"],
["state", "states"],
["group", "groups"],
["place", "places"],
["night", "nights"],
["point", "points"],
["water", "waters"],
["story", "stories"],
["month", "months"],
["issue", "issues"],
["house", "houses"],
["level", "levels"],
["party", "parties"],
["death", "deaths"],
["class", "classes"],
["field", "fields"],
["heart", "hearts"],
["light", "lights"],
["voice", "voices"],
["price", "prices"],
["value", "values"],
["model", "models"],
["paper", "papers"],
["space", "spaces"],
["event", "events"],
["table", "tables"],
["court", "courts"],
["image", "images"],
["piece", "pieces"],
["floor", "floors"],
["sport", "sports"],
["board", "boards"],
["blood", "bloods"],
["sound", "sounds"],
["scene", "scenes"],
["stock", "stocks"],
["staff", "staffs"],
["glass", "glasses"],
["skill", "skills"],
["crime", "crimes"],
["truth", "truths"],
["trial", "trials"],
["radio", "radios"],
["chair", "chairs"],
["style", "styles"],
["adult", "adults"],
["range", "ranges"],
["dream", "dreams"],
["hotel", "hotels"],
["agent", "agents"],
["owner", "owners"],
["mouth", "mouths"],
["score", "scores"],
["video", "videos"],
["troop", "troops"],
["track", "tracks"],
["plane", "planes"],
["brain", "brains"],
["stone", "stones"],
["scale", "scales"],
["truck", "trucks"],
["crowd", "crowds"],
["horse", "horses"],
["share", "shares"],
["pound", "pounds"],
["basis", "bases"],
["guest", "guests"],
["title", "titles"],
["faith", "faiths"],
["river", "rivers"],
["speed", "speeds"],
["youth", "youths"],
["smile", "smiles"],
["voter", "voters"],
["photo", "photos"],
["actor", "actors"],
["birth", "births"],
["plate", "plates"],
["lunch", "lunches"],
["sugar", "sugars"],
["enemy", "enemies"],
["panel", "panels"],
["sight", "sights"],
["trail", "trails"],
["novel", "novels"],
["human", "humans"],
["theme", "themes"],
["union", "unions"],
["fruit", "fruits"],
["dance", "dances"],
["being", "beings"],
["trend", "trends"],
["earth", "earths"],
["chest", "chests"],
["dress", "dresses"],
["sheet", "sheets"],
["chief", "chiefs"],
["shirt", "shirts"],
["pilot", "pilots"],
["chain", "chains"],
["ocean", "oceans"],
["tooth", "teeth"],
["topic", "topics"],
["cloud", "clouds"],
["beach", "beaches"],
["route", "routes"],
["wheel", "wheels"],
["cable", "cables"],
["noise", "noises"],
["grass", "grasses"],
["sleep", "sleeps"],
["asset", "assets"],
["bread", "breads"],
["layer", "layers"],
["error", "errors"],
["album", "albums"],
["knife", "knives"],
["phase", "phases"],
["sauce", "sauces"],
["habit", "habits"],
["juice", "juices"],
["entry", "entries"],
["maker", "makers"],
["tower", "towers"],
["coast", "coasts"],
["mayor", "mayors"],
["essay", "essays"],
["shell", "shells"],
["onion", "onions"],
["brand", "brands"],
["stake", "stakes"],
["label", "labels"],
["index", "indexes"],
["draft", "drafts"],
["drama", "dramas"],
["clock", "clocks"],
["fence", "fences"],
["bunch", "bunches"],
["cheek", "cheeks"],
["match", "matches"],
["apple", "apples"],
["virus", "viruses"],
["stick", "sticks"],
["salad", "salads"],
["bench", "benches"],
["lover", "lovers"],
["craft", "crafts"],
["fault", "faults"],
["stair", "stairs"],
["proof", "proofs"],
["honey", "honeys"],
["tribe", "tribes"],
["shelf", "shelves"],
["buyer", "buyers"],
["shade", "shades"],
["angle", "angles"],
["porch", "porches"],
["rifle", "rifles"],
["nerve", "nerves"],
["ratio", "ratios"],
["glove", "gloves"],
["scope", "scopes"],
["motor", "motors"],
["blade", "blades"],
["cabin", "cabins"],
["lemon", "lemons"],
["flame", "flames"],
["flesh", "fleshes"],
["grain", "grains"],
["shore", "shores"],
["ghost", "ghosts"],
["piano", "pianos"],
["mouse", "mice"],
["brick", "bricks"],
["patch", "patches"],
["uncle", "uncles"],
["grave", "graves"],
["couch", "couches"],
["organ", "organs"],
["flour", "flours"],
["slope", "slopes"],
["candy", "candies"],
["medal", "medals"],
["curve", "curves"],
["snake", "snakes"],
["elbow", "elbows"],
["trunk", "trunks"],
["cloth", "cloths"],
["fraud", "frauds"],
["array", "arrays"],
["arena", "arenas"],
["laugh", "laughs"],
["wrist", "wrists"],
["skirt", "skirts"],
["towel", "towels"],
["prize", "prizes"],
["alarm", "alarms"],
["sweat", "sweats"],
["lobby", "lobbies"],
["trait", "traits"],
["thumb", "thumbs"],
["rebel", "rebels"],
["fluid", "fluids"],
["belly", "bellies"],
["ankle", "ankles"],
["rider", "riders"],
["donor", "donors"],
["opera", "operas"],
["clerk", "clerks"],
["laser", "lasers"],
["realm", "realms"],
["pizza", "pizzas"],
["alien", "aliens"],
["angel", "angels"],
["ranch", "ranches"],
["elder", "elders"],
["quest", "quests"],
["juror", "jurors"],
["grief", "griefs"],
["buddy", "buddies"],
["sword", "swords"],
["glory", "glories"],
["queen", "queens"],
["input", "inputs"],
["bonus", "bonuses"],
["wagon", "wagons"],
["thigh", "thighs"],
["whale", "whales"],
["skull", "skulls"],
["booth", "booths"],
["waist", "waists"],
["cliff", "cliffs"],
["pulse", "pulses"],
["diary", "diaries"],
["spoon", "spoons"],
["alley", "alleys"],
["purse", "purses"],
["fever", "fevers"],
["stove", "stoves"],
["dough", "doughs"],
["beast", "beasts"],
["shark", "sharks"],
["fleet", "fleets"],
["debut", "debuts"],
["scent", "scents"],
["stack", "stacks"],
["aisle", "aisles"],
["pasta", "pastas"],
["genre", "genres"],
["merit", "merits"],
["chunk", "chunks"],
["robot", "robots"],
["major", "majors"],
["squad", "squads"],
["steak", "steaks"],
["liver", "livers"],
["widow", "widows"],
["beard", "beards"],
["brake", "brakes"],
["forum", "forums"],
["suite", "suites"],
["straw", "straws"],
["globe", "globes"],
["grape", "grapes"],
["radar", "radars"],
["arrow", "arrows"],
["ridge", "ridges"],
["bride", "brides"],
["devil", "devils"],
["spine", "spines"],
["school", "schools"],
["family", "families"],
["system", "systems"],
["number", "numbers"],
["mother", "mothers"],
["friend", "friends"],
["father", "fathers"],
["member", "members"],
["parent", "parents"],
["office", "offices"],
["person", "persons"],
["result", "results"],
["change", "changes"],
["reason", "reasons"],
["moment", "moments"],
["policy", "policies"],
["market", "markets"],
["nation", "nations"],
["effect", "effects"],
["effort", "efforts"],
["leader", "leaders"],
["report", "reports"],
["action", "actions"],
["season", "seasons"],
["player", "players"],
["ground", "grounds"],
["matter", "matters"],
["couple", "couples"],
["figure", "figures"],
["street", "streets"],
["doctor", "doctors"],
["worker", "workers"],
["source", "sources"],
["window", "windows"],
["energy", "energies"],
["period", "periods"],
["course", "courses"],
["summer", "summers"],
["letter", "letters"],
["choice", "choices"],
["church", "churches"],
["future", "futures"],
["author", "authors"],
["agency", "agencies"],
["nature", "natures"],
["animal", "animals"],
["factor", "factors"],
["decade", "decades"],
["artist", "artists"],
["career", "careers"],
["answer", "answers"],
["amount", "amounts"],
["growth", "growths"],
["degree", "degrees"],
["attack", "attacks"],
["region", "regions"],
["lawyer", "lawyers"],
["sister", "sisters"],
["design", "designs"],
["memory", "memories"],
["expert", "experts"],
["spring", "springs"],
["theory", "theories"],
["impact", "impacts"],
["weapon", "weapons"],
["camera", "cameras"],
["weight", "weights"],
["writer", "writers"],
["detail", "details"],
["method", "methods"],
["finger", "fingers"],
["garden", "gardens"],
["budget", "budgets"],
["victim", "victims"],
["threat", "threats"],
["dinner", "dinners"],
["speech", "speeches"],
["option", "options"],
["forest", "forests"],
["corner", "corners"],
["income", "incomes"],
["object", "objects"],
["client", "clients"],
["spirit", "spirits"],
["battle", "battles"],
["crisis", "crises"],
["vision", "visions"],
["status", "statuses"],
["driver", "drivers"],
["winter", "winters"],
["screen", "screens"],
["reader", "readers"],
["target", "targets"],
["prison", "prisons"],
["flight", "flights"],
["sample", "samples"],
["lesson", "lessons"],
["border", "borders"],
["critic", "critics"],
["aspect", "aspects"],
["affair", "affairs"],
["belief", "beliefs"],
["murder", "murders"],
["review", "reviews"],
["editor", "editors"],
["coffee", "coffees"],
["flower", "flowers"],
["circle", "circles"],
["device", "devices"],
["island", "islands"],
["studio", "studios"],
["danger", "dangers"],
["injury", "injuries"],
["engine", "engines"],
["ticket", "tickets"],
["farmer", "farmers"],
["planet", "planets"],
["pocket", "pockets"],
["breath", "breaths"],
["shadow", "shadows"],
["county", "counties"],
["bridge", "bridges"],
["email", "emails"],
["profit", "profits"],
["muscle", "muscles"],
["notion", "notions"],
["museum", "museums"],
["beauty", "beauties"],
["bottle", "bottles"],
["estate", "estates"],
["branch", "branches"],
["manner", "manners"],
["rating", "ratings"],
["motion", "motions"],
["gender", "genders"],
["regime", "regimes"],
["appeal", "appeals"],
["mirror", "mirrors"],
["length", "lengths"],
["master", "masters"],
["winner", "winners"],
["volume", "volumes"],
["travel", "travels"],
["pepper", "peppers"],
["league", "leagues"],
["sector", "sectors"],
["talent", "talents"],
["height", "heights"],
["campus", "campuses"],
["column", "columns"],
["signal", "signals"],
["prayer", "prayers"],
["cheese", "cheeses"],
["agenda", "agendas"],
["saving", "savings"],
["desert", "deserts"],
["stream", "streams"],
["potato", "potatoes"],
["jacket", "jackets"],
["priest", "priests"],
["symbol", "symbols"],
["clinic", "clinics"],
["tomato", "tomatoes"],
["butter", "butters"],
["throat", "throats"],
["salary", "salaries"],
["viewer", "viewers"],
["recipe", "recipes"],
["origin", "origins"],
["deputy", "deputies"],
["dealer", "dealers"],
["phrase", "phrases"],
["killer", "killers"],
["heaven", "heavens"],
["button", "buttons"],
["burden", "burdens"],
["string", "strings"],
["resort", "resorts"],
["tissue", "tissues"],
["cousin", "cousins"],
["terror", "terrors"],
["bullet", "bullets"],
["singer", "singers"],
["treaty", "treaties"],
["tongue", "tongues"],
["vessel", "vessels"],
["fellow", "fellows"],
["custom", "customs"],
["scheme", "schemes"],
["galaxy", "galaxies"],
["hunter", "hunters"],
["infant", "infants"],
["fabric", "fabrics"],
["barrel", "barrels"],
["stroke", "strokes"],
["valley", "valleys"],
["legacy", "legacies"],
["shower", "showers"],
["garage", "garages"],
["comedy", "comedies"],
["summit", "summits"],
["basket", "baskets"],
["powder", "powders"],
["cookie", "cookies"],
["orange", "oranges"],
["rhythm", "rhythms"],
["script", "scripts"],
["tactic", "tactics"],
["margin", "margins"],
["horror", "horrors"],
["square", "squares"],
["tunnel", "tunnels"],
["legend", "legends"],
["remark", "remarks"],
["reward", "rewards"],
["ritual", "rituals"],
["insect", "insects"],
["combat", "combats"],
["bishop", "bishops"],
["closet", "closets"],
["suburb", "suburbs"],
["motive", "motives"],
["temple", "temples"],
["domain", "domains"],
["guitar", "guitars"],
["dancer", "dancers"],
["colony", "colonies"],
["glance", "glances"],
["ballot", "ballots"],
["canvas", "canvases"],
["format", "formats"],
["turkey", "turkeys"],
["spouse", "spouses"],
["needle", "needles"],
["timing", "timings"],
["poster", "posters"],
["pastor", "pastors"],
["statue", "statues"],
["parade", "parades"],
["candle", "candles"],
["entity", "entities"],
["intent", "intents"],
["switch", "switches"],
["toilet", "toilets"],
["pillow", "pillows"],
["ruling", "rulings"],
["genius", "geniuses"],
["output", "outputs"],
["rocket", "rockets"],
["inmate", "inmates"],
["carpet", "carpets"],
["bubble", "bubbles"],
["accent", "accents"],
["shrimp", "shrimps"],
["drawer", "drawers"],
["runner", "runners"],
["empire", "empires"],
["puzzle", "puzzles"],
["helmet", "helmets"],
["casino", "casinos"],
["liquid", "liquids"],
["rabbit", "rabbits"],
["outfit", "outfits"],
["patent", "patents"],
["pencil", "pencils"],
["banker", "bankers"],
["stance", "stances"],
["ladder", "ladders"],
["jungle", "jungles"],
["sphere", "spheres"],
["collar", "collars"],
["streak", "streaks"],
["monkey", "monkeys"],
["mentor", "mentors"],
["sleeve", "sleeves"],
["parish", "parishes"],
["carrot", "carrots"],
["outlet", "outlets"],
["vendor", "vendors"],
["peanut", "peanuts"],
["patron", "patrons"],
["banana", "bananas"],
["palace", "palaces"],
["cruise", "cruises"],
["thread", "threads"],
["denial", "denials"],
["marker", "markers"],
["bucket", "buckets"],
["marble", "marbles"],
["ribbon", "ribbons"],
["hazard", "hazards"],
["seller", "sellers"],
["sensor", "sensors"],
["pistol", "pistols"],
["chapel", "chapels"],
["inch", "inches"],
["mile", "miles"],
["crab", "crabs"],
["badger", "badgers"],
["otter", "otters"],
["taxi", "taxis"],
["gull", "gulls"],
["beetle", "beetles"],
["wallet", "wallets"],
["eagle", "eagles"],
["tiger", "tigers"],
["joker", "jokers"],
["prince", "princes"],
["ale", "ales"],
["eel", "eels"],
["finch", "finches"],
["bard", "bards"],
["druid", "druids"],
["maggot", "maggots"],
["castle", "castles"],
["slab", "slabs"],
["shrub", "shrubs"],
["jumper", "jumpers"],
["prawn", "prawns"],
["plank", "planks"],
["prank", "pranks"],
["mug", "mugs"],
["saucer", "saucers"],
["plug", "plugs"],
["socket", "sockets"],
["worm", "worms"],
["canal", "canals"],
["crumb", "crumbs"],
["comb", "combs"],
["loaf", "loaves"],
["hoof", "hooves"],
["fungus", "fungi"],
["bun", "buns"],
["gerbil", "gerbils"],
["turtle", "turtles"],
["moat", "moats"],
["well", "wells"],
["laptop", "laptops"],
["pug", "pugs"],
["mutt", "mutts"],
["bunny", "bunnies"],
["jigsaw", "jigsaws"],
["wasp", "wasps"],
]
