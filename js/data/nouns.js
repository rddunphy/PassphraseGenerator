const nouns = [
["act", "acts", true],
["age", "ages", true],
["air", "airs", true],
["ale", "ales", true],
["arm", "arms", true],
["ash", "ashes", true],
["bag", "bags", false],
["bar", "bars", false],
["bat", "bats", false],
["bay", "bays", false],
["bed", "beds", false],
["bee", "bees", false],
["bid", "bids", false],
["bit", "bits", false],
["bow", "bows", false],
["box", "boxes", false],
["boy", "boys", false],
["bug", "bugs", false],
["bun", "buns", false],
["bus", "buses", false],
["cab", "cabs", false],
["can", "cans", false],
["cap", "caps", false],
["car", "cars", false],
["cat", "cats", false],
["cop", "cops", false],
["cow", "cows", false],
["cry", "cries", false],
["cue", "cues", false],
["cup", "cups", false],
["dad", "dads", false],
["dam", "dams", false],
["day", "days", false],
["dog", "dogs", false],
["dot", "dots", false],
["ear", "ears", true],
["eel", "eels", true],
["egg", "eggs", true],
["ego", "egos", true],
["era", "eras", true],
["eye", "eyes", true],
["fan", "fans", false],
["fat", "fats", false],
["fee", "fees", false],
["fly", "flies", false],
["fur", "furs", false],
["gap", "gaps", false],
["gas", "gases", false],
["gun", "guns", false],
["gut", "guts", false],
["guy", "guys", false],
["gym", "gyms", false],
["hat", "hats", false],
["hip", "hips", false],
["jar", "jars", false],
["jaw", "jaws", false],
["jet", "jets", false],
["job", "jobs", false],
["joy", "joys", false],
["key", "keys", false],
["kid", "kids", false],
["kit", "kits", false],
["lab", "labs", false],
["lap", "laps", false],
["law", "laws", false],
["leg", "legs", false],
["lid", "lids", false],
["lie", "lies", false],
["lip", "lips", false],
["log", "logs", false],
["man", "men", false],
["map", "maps", false],
["mug", "mugs", false],
["net", "nets", false],
["nut", "nuts", false],
["oak", "oaks", true],
["oil", "oils", true],
["pad", "pads", false],
["pan", "pans", false],
["pen", "pens", false],
["pie", "pies", false],
["pig", "pigs", false],
["pit", "pits", false],
["pot", "pots", false],
["pro", "pros", false],
["pug", "pugs", false],
["rat", "rats", false],
["rib", "ribs", false],
["rim", "rims", false],
["rod", "rods", false],
["sea", "seas", false],
["sin", "sins", false],
["sir", "sirs", false],
["ski", "skis", false],
["sky", "skies", false],
["son", "sons", false],
["sum", "sums", false],
["sun", "suns", false],
["tag", "tags", false],
["tax", "taxes", false],
["tea", "teas", false],
["tip", "tips", false],
["toe", "toes", false],
["toy", "toys", false],
["van", "vans", false],
["war", "wars", false],
["way", "ways", false],
["web", "webs", false],
["acid", "acids", true],
["aide", "aides", true],
["ally", "allies", true],
["area", "areas", true],
["army", "armies", true],
["aunt", "aunts", true],
["baby", "babies", false],
["ball", "balls", false],
["band", "bands", false],
["bank", "banks", false],
["bard", "bards", false],
["barn", "barns", false],
["base", "bases", false],
["bath", "baths", false],
["beam", "beams", false],
["bean", "beans", false],
["bear", "bears", false],
["beef", "beefs", false],
["beer", "beers", false],
["bell", "bells", false],
["belt", "belts", false],
["bias", "biases", false],
["bike", "bikes", false],
["bill", "bills", false],
["bird", "birds", false],
["blow", "blows", false],
["boat", "boats", false],
["body", "bodies", false],
["bolt", "bolts", false],
["bomb", "bombs", false],
["bond", "bonds", false],
["bone", "bones", false],
["book", "books", false],
["boom", "booms", false],
["boot", "boots", false],
["boss", "bosses", false],
["bowl", "bowls", false],
["buck", "bucks", false],
["bulb", "bulbs", false],
["bulk", "bulks", false],
["bull", "bulls", false],
["bush", "bushes", false],
["butt", "butts", false],
["cage", "cages", false],
["cake", "cakes", false],
["camp", "camps", false],
["card", "cards", false],
["care", "cares", false],
["cart", "carts", false],
["case", "cases", false],
["cave", "caves", false],
["cell", "cells", false],
["chef", "chefs", false],
["chin", "chins", false],
["chip", "chips", false],
["city", "cities", false],
["clay", "clays", false],
["club", "clubs", false],
["clue", "clues", false],
["coal", "coals", false],
["coat", "coats", false],
["code", "codes", false],
["coin", "coins", false],
["comb", "combs", false],
["cord", "cords", false],
["core", "cores", false],
["corn", "corns", false],
["cost", "costs", false],
["coup", "coups", false],
["crab", "crabs", false],
["crew", "crews", false],
["crop", "crops", false],
["cure", "cures", false],
["date", "dates", false],
["dawn", "dawns", false],
["deal", "deals", false],
["debt", "debts", false],
["deck", "decks", false],
["desk", "desks", false],
["diet", "diets", false],
["disc", "discs", false],
["dish", "dishes", false],
["disk", "disks", false],
["doll", "dolls", false],
["door", "doors", false],
["dose", "doses", false],
["drug", "drugs", false],
["drum", "drums", false],
["duck", "ducks", false],
["dust", "dusts", false],
["duty", "duties", false],
["edge", "edges", true],
["exam", "exams", true],
["face", "faces", false],
["fact", "facts", false],
["fall", "falls", false],
["fare", "fares", false],
["farm", "farms", false],
["fate", "fates", false],
["fear", "fears", false],
["file", "files", false],
["film", "films", false],
["fist", "fists", false],
["flag", "flags", false],
["flow", "flows", false],
["food", "foods", false],
["foot", "feet", false],
["fork", "forks", false],
["form", "forms", false],
["fuel", "fuels", false],
["fund", "funds", false],
["game", "games", false],
["gang", "gangs", false],
["gate", "gates", false],
["gaze", "gazes", false],
["gear", "gears", false],
["gene", "genes", false],
["gift", "gifts", false],
["girl", "girls", false],
["goal", "goals", false],
["goat", "goats", false],
["grin", "grins", false],
["grip", "grips", false],
["gull", "gulls", false],
["hair", "hairs", false],
["half", "halves", false],
["hall", "halls", false],
["hand", "hands", false],
["head", "heads", false],
["heat", "heats", false],
["heel", "heels", false],
["hell", "hells", false],
["herb", "herbs", false],
["hero", "heroes", false],
["hill", "hills", false],
["hint", "hints", false],
["hole", "holes", false],
["home", "homes", false],
["hoof", "hooves", false],
["hook", "hooks", false],
["hope", "hopes", false],
["horn", "horns", false],
["host", "hosts", false],
["hour", "hours", true],
["icon", "icons", true],
["idea", "ideas", true],
["inch", "inches", true],
["iron", "irons", true],
["item", "items", true],
["jail", "jails", false],
["joke", "jokes", false],
["jury", "juries", false],
["king", "kings", false],
["knee", "knees", false],
["lady", "ladies", false],
["lake", "lakes", false],
["lamp", "lamps", false],
["land", "lands", false],
["lane", "lanes", false],
["lawn", "lawns", false],
["leaf", "leaves", false],
["lens", "lenses", false],
["life", "lives", false],
["limb", "limbs", false],
["line", "lines", false],
["lion", "lions", false],
["list", "lists", false],
["load", "loads", false],
["loaf", "loaves", false],
["loan", "loans", false],
["look", "looks", false],
["loop", "loops", false],
["loss", "losses", false],
["lung", "lungs", false],
["male", "males", false],
["mall", "malls", false],
["mass", "masses", false],
["mate", "mates", false],
["meal", "meals", false],
["meat", "meats", false],
["menu", "menus", false],
["mess", "messes", false],
["mile", "miles", false],
["mill", "mills", false],
["mine", "mines", false],
["moat", "moats", false],
["mode", "modes", false],
["mood", "moods", false],
["moon", "moons", false],
["mutt", "mutts", false],
["myth", "myths", false],
["nail", "nails", false],
["name", "names", false],
["neck", "necks", false],
["nest", "nests", false],
["norm", "norms", false],
["nose", "noses", false],
["note", "notes", false],
["oven", "ovens", true],
["page", "pages", false],
["pain", "pains", false],
["pair", "pairs", false],
["palm", "palms", false],
["park", "parks", false],
["part", "parts", false],
["path", "paths", false],
["peak", "peaks", false],
["peer", "peers", false],
["pile", "piles", false],
["pill", "pills", false],
["pine", "pines", false],
["pipe", "pipes", false],
["plan", "plans", false],
["plea", "pleas", false],
["plot", "plots", false],
["plug", "plugs", false],
["poem", "poems", false],
["poet", "poets", false],
["pole", "poles", false],
["poll", "polls", false],
["pond", "ponds", false],
["pool", "pools", false],
["port", "ports", false],
["race", "races", false],
["rack", "racks", false],
["rage", "rages", false],
["rail", "rails", false],
["rain", "rains", false],
["rate", "rates", false],
["rest", "rests", false],
["ring", "rings", false],
["riot", "riots", false],
["rise", "rises", false],
["road", "roads", false],
["rock", "rocks", false],
["role", "roles", false],
["roof", "roofs", false],
["room", "rooms", false],
["root", "roots", false],
["rope", "ropes", false],
["rose", "roses", false],
["rule", "rules", false],
["sack", "sacks", false],
["sale", "sales", false],
["salt", "salts", false],
["sand", "sands", false],
["seat", "seats", false],
["seed", "seeds", false],
["ship", "ships", false],
["shoe", "shoes", false],
["shop", "shops", false],
["shot", "shots", false],
["side", "sides", false],
["sign", "signs", false],
["silk", "silks", false],
["site", "sites", false],
["size", "sizes", false],
["skin", "skins", false],
["slab", "slabs", false],
["snow", "snows", false],
["soap", "soaps", false],
["sock", "socks", false],
["sofa", "sofas", false],
["soil", "soils", false],
["song", "songs", false],
["soul", "souls", false],
["soup", "soups", false],
["star", "stars", false],
["step", "steps", false],
["suit", "suits", false],
["tail", "tails", false],
["tale", "tales", false],
["talk", "talks", false],
["tape", "tapes", false],
["task", "tasks", false],
["taxi", "taxis", false],
["team", "teams", false],
["tear", "tears", false],
["teen", "teens", false],
["tent", "tents", false],
["term", "terms", false],
["text", "texts", false],
["tide", "tides", false],
["tile", "tiles", false],
["time", "times", false],
["toll", "tolls", false],
["tone", "tones", false],
["tool", "tools", false],
["tour", "tours", false],
["town", "towns", false],
["tray", "trays", false],
["tree", "trees", false],
["trip", "trips", false],
["tube", "tubes", false],
["tune", "tunes", false],
["twin", "twins", false],
["type", "types", false],
["unit", "units", false],
["user", "users", false],
["vote", "votes", false],
["wage", "wages", false],
["wake", "wakes", false],
["wall", "walls", false],
["wasp", "wasps", false],
["weed", "weeds", false],
["week", "weeks", false],
["well", "wells", false],
["wife", "wives", false],
["will", "wills", false],
["wind", "winds", false],
["wine", "wines", false],
["wing", "wings", false],
["wire", "wires", false],
["wish", "wishes", false],
["wolf", "wolves", false],
["wood", "woods", false],
["word", "words", false],
["worm", "worms", false],
["yard", "yards", false],
["year", "years", false],
["zone", "zones", false],
["actor", "actors", true],
["adult", "adults", true],
["agent", "agents", true],
["aisle", "aisles", true],
["alarm", "alarms", true],
["album", "albums", true],
["alien", "aliens", true],
["alley", "alleys", true],
["angel", "angels", true],
["angle", "angles", true],
["ankle", "ankles", true],
["apple", "apples", true],
["arena", "arenas", true],
["array", "arrays", true],
["arrow", "arrows", true],
["asset", "assets", true],
["basis", "bases", false],
["beach", "beaches", false],
["beard", "beards", false],
["beast", "beasts", false],
["being", "beings", false],
["belly", "bellies", false],
["bench", "benches", false],
["birth", "births", false],
["blade", "blades", false],
["blood", "bloods", false],
["board", "boards", false],
["bonus", "bonuses", false],
["booth", "booths", false],
["brain", "brains", false],
["brake", "brakes", false],
["brand", "brands", false],
["bread", "breads", false],
["brick", "bricks", false],
["bride", "brides", false],
["buddy", "buddies", false],
["bunch", "bunches", false],
["bunny", "bunnies", false],
["buyer", "buyers", false],
["cabin", "cabins", false],
["cable", "cables", false],
["canal", "canals", false],
["candy", "candies", false],
["chain", "chains", false],
["chair", "chairs", false],
["cheek", "cheeks", false],
["chest", "chests", false],
["chief", "chiefs", false],
["child", "children", false],
["chunk", "chunks", false],
["class", "classes", false],
["clerk", "clerks", false],
["cliff", "cliffs", false],
["clock", "clocks", false],
["cloth", "cloths", false],
["cloud", "clouds", false],
["coast", "coasts", false],
["couch", "couches", false],
["court", "courts", false],
["craft", "crafts", false],
["crime", "crimes", false],
["crowd", "crowds", false],
["crumb", "crumbs", false],
["curve", "curves", false],
["dance", "dances", false],
["death", "deaths", false],
["debut", "debuts", false],
["devil", "devils", false],
["diary", "diaries", false],
["donor", "donors", false],
["dough", "doughs", false],
["draft", "drafts", false],
["drama", "dramas", false],
["dream", "dreams", false],
["dress", "dresses", false],
["druid", "druids", false],
["eagle", "eagles", true],
["earth", "earths", true],
["elbow", "elbows", true],
["elder", "elders", true],
["email", "emails", true],
["enemy", "enemies", true],
["entry", "entries", true],
["error", "errors", true],
["essay", "essays", true],
["event", "events", true],
["faith", "faiths", false],
["fault", "faults", false],
["fence", "fences", false],
["fever", "fevers", false],
["field", "fields", false],
["finch", "finches", false],
["flame", "flames", false],
["fleet", "fleets", false],
["flesh", "fleshes", false],
["floor", "floors", false],
["flour", "flours", false],
["fluid", "fluids", false],
["forum", "forums", false],
["fraud", "frauds", false],
["fruit", "fruits", false],
["genre", "genres", false],
["ghost", "ghosts", false],
["glass", "glasses", false],
["globe", "globes", false],
["glory", "glories", false],
["glove", "gloves", false],
["grain", "grains", false],
["grape", "grapes", false],
["grass", "grasses", false],
["grave", "graves", false],
["grief", "griefs", false],
["group", "groups", false],
["guest", "guests", false],
["habit", "habits", false],
["heart", "hearts", false],
["honey", "honeys", false],
["horse", "horses", false],
["hotel", "hotels", false],
["house", "houses", false],
["human", "humans", false],
["image", "images", true],
["index", "indexes", true],
["input", "inputs", true],
["issue", "issues", true],
["joker", "jokers", false],
["juice", "juices", false],
["juror", "jurors", false],
["knife", "knives", false],
["label", "labels", false],
["laser", "lasers", false],
["laugh", "laughs", false],
["layer", "layers", false],
["lemon", "lemons", false],
["level", "levels", false],
["light", "lights", false],
["liver", "livers", false],
["lobby", "lobbies", false],
["lover", "lovers", false],
["lunch", "lunches", false],
["major", "majors", false],
["maker", "makers", false],
["match", "matches", false],
["mayor", "mayors", false],
["medal", "medals", false],
["merit", "merits", false],
["model", "models", false],
["month", "months", false],
["motor", "motors", false],
["mouse", "mice", false],
["mouth", "mouths", false],
["nerve", "nerves", false],
["night", "nights", false],
["noise", "noises", false],
["novel", "novels", false],
["ocean", "oceans", true],
["onion", "onions", true],
["opera", "operas", true],
["organ", "organs", true],
["otter", "otters", true],
["owner", "owners", true],
["panel", "panels", false],
["paper", "papers", false],
["party", "parties", false],
["pasta", "pastas", false],
["patch", "patches", false],
["phase", "phases", false],
["photo", "photos", false],
["piano", "pianos", false],
["piece", "pieces", false],
["pilot", "pilots", false],
["pizza", "pizzas", false],
["place", "places", false],
["plane", "planes", false],
["plank", "planks", false],
["plate", "plates", false],
["point", "points", false],
["porch", "porches", false],
["pound", "pounds", false],
["prank", "pranks", false],
["prawn", "prawns", false],
["price", "prices", false],
["prize", "prizes", false],
["proof", "proofs", false],
["pulse", "pulses", false],
["purse", "purses", false],
["queen", "queens", false],
["quest", "quests", false],
["radar", "radars", false],
["radio", "radios", false],
["ranch", "ranches", false],
["range", "ranges", false],
["ratio", "ratios", false],
["realm", "realms", false],
["rebel", "rebels", false],
["rider", "riders", false],
["ridge", "ridges", false],
["rifle", "rifles", false],
["river", "rivers", false],
["robot", "robots", false],
["route", "routes", false],
["salad", "salads", false],
["sauce", "sauces", false],
["scale", "scales", false],
["scene", "scenes", false],
["scent", "scents", false],
["scope", "scopes", false],
["score", "scores", false],
["shade", "shades", false],
["share", "shares", false],
["shark", "sharks", false],
["sheet", "sheets", false],
["shelf", "shelves", false],
["shell", "shells", false],
["shirt", "shirts", false],
["shore", "shores", false],
["shrub", "shrubs", false],
["sight", "sights", false],
["skill", "skills", false],
["skirt", "skirts", false],
["skull", "skulls", false],
["sleep", "sleeps", false],
["slope", "slopes", false],
["smile", "smiles", false],
["snake", "snakes", false],
["sound", "sounds", false],
["space", "spaces", false],
["speed", "speeds", false],
["spine", "spines", false],
["spoon", "spoons", false],
["sport", "sports", false],
["squad", "squads", false],
["stack", "stacks", false],
["staff", "staffs", false],
["stair", "stairs", false],
["stake", "stakes", false],
["state", "states", false],
["steak", "steaks", false],
["stick", "sticks", false],
["stock", "stocks", false],
["stone", "stones", false],
["story", "stories", false],
["stove", "stoves", false],
["straw", "straws", false],
["style", "styles", false],
["sugar", "sugars", false],
["suite", "suites", false],
["sweat", "sweats", false],
["sword", "swords", false],
["table", "tables", false],
["theme", "themes", false],
["thigh", "thighs", false],
["thing", "things", false],
["thumb", "thumbs", false],
["tiger", "tigers", false],
["title", "titles", false],
["tooth", "teeth", false],
["topic", "topics", false],
["towel", "towels", false],
["tower", "towers", false],
["track", "tracks", false],
["trail", "trails", false],
["trait", "traits", false],
["trend", "trends", false],
["trial", "trials", false],
["tribe", "tribes", false],
["troop", "troops", false],
["truck", "trucks", false],
["trunk", "trunks", false],
["truth", "truths", false],
["uncle", "uncles", true],
["union", "unions", false],
["value", "values", false],
["video", "videos", false],
["virus", "viruses", false],
["voice", "voices", false],
["voter", "voters", false],
["wagon", "wagons", false],
["waist", "waists", false],
["water", "waters", false],
["whale", "whales", false],
["wheel", "wheels", false],
["widow", "widows", false],
["woman", "women", false],
["world", "worlds", false],
["wrist", "wrists", false],
["youth", "youths", false],
["accent", "accents", true],
["action", "actions", true],
["affair", "affairs", true],
["agency", "agencies", true],
["agenda", "agendas", true],
["amount", "amounts", true],
["animal", "animals", true],
["answer", "answers", true],
["appeal", "appeals", true],
["artist", "artists", true],
["aspect", "aspects", true],
["attack", "attacks", true],
["author", "authors", true],
["badger", "badgers", false],
["ballot", "ballots", false],
["banana", "bananas", false],
["banker", "bankers", false],
["barrel", "barrels", false],
["basket", "baskets", false],
["battle", "battles", false],
["beauty", "beauties", false],
["beetle", "beetles", false],
["belief", "beliefs", false],
["bishop", "bishops", false],
["border", "borders", false],
["bottle", "bottles", false],
["branch", "branches", false],
["breath", "breaths", false],
["bridge", "bridges", false],
["bubble", "bubbles", false],
["bucket", "buckets", false],
["budget", "budgets", false],
["bullet", "bullets", false],
["burden", "burdens", false],
["butter", "butters", false],
["button", "buttons", false],
["camera", "cameras", false],
["campus", "campuses", false],
["candle", "candles", false],
["canvas", "canvases", false],
["career", "careers", false],
["carpet", "carpets", false],
["carrot", "carrots", false],
["casino", "casinos", false],
["castle", "castles", false],
["change", "changes", false],
["chapel", "chapels", false],
["cheese", "cheeses", false],
["choice", "choices", false],
["church", "churches", false],
["circle", "circles", false],
["client", "clients", false],
["clinic", "clinics", false],
["closet", "closets", false],
["coffee", "coffees", false],
["collar", "collars", false],
["colony", "colonies", false],
["column", "columns", false],
["combat", "combats", false],
["comedy", "comedies", false],
["cookie", "cookies", false],
["corner", "corners", false],
["county", "counties", false],
["couple", "couples", false],
["course", "courses", false],
["cousin", "cousins", false],
["crisis", "crises", false],
["critic", "critics", false],
["cruise", "cruises", false],
["custom", "customs", false],
["dancer", "dancers", false],
["danger", "dangers", false],
["dealer", "dealers", false],
["decade", "decades", false],
["degree", "degrees", false],
["denial", "denials", false],
["deputy", "deputies", false],
["desert", "deserts", false],
["design", "designs", false],
["detail", "details", false],
["device", "devices", false],
["dinner", "dinners", false],
["doctor", "doctors", false],
["domain", "domains", false],
["drawer", "drawers", false],
["driver", "drivers", false],
["editor", "editors", true],
["effect", "effects", true],
["effort", "efforts", true],
["empire", "empires", true],
["energy", "energies", true],
["engine", "engines", true],
["entity", "entities", true],
["estate", "estates", true],
["expert", "experts", true],
["fabric", "fabrics", false],
["factor", "factors", false],
["family", "families", false],
["farmer", "farmers", false],
["father", "fathers", false],
["fellow", "fellows", false],
["figure", "figures", false],
["finger", "fingers", false],
["flight", "flights", false],
["flower", "flowers", false],
["forest", "forests", false],
["format", "formats", false],
["friend", "friends", false],
["fungus", "fungi", false],
["future", "futures", false],
["galaxy", "galaxies", false],
["garage", "garages", false],
["garden", "gardens", false],
["gender", "genders", false],
["genius", "geniuses", false],
["gerbil", "gerbils", false],
["glance", "glances", false],
["ground", "grounds", false],
["growth", "growths", false],
["guitar", "guitars", false],
["hazard", "hazards", false],
["heaven", "heavens", false],
["height", "heights", false],
["helmet", "helmets", false],
["horror", "horrors", false],
["hunter", "hunters", false],
["impact", "impacts", true],
["income", "incomes", true],
["infant", "infants", true],
["injury", "injuries", true],
["inmate", "inmates", true],
["insect", "insects", true],
["intent", "intents", true],
["island", "islands", true],
["jacket", "jackets", false],
["jigsaw", "jigsaws", false],
["jumper", "jumpers", false],
["jungle", "jungles", false],
["killer", "killers", false],
["ladder", "ladders", false],
["laptop", "laptops", false],
["lawyer", "lawyers", false],
["leader", "leaders", false],
["league", "leagues", false],
["legacy", "legacies", false],
["legend", "legends", false],
["length", "lengths", false],
["lesson", "lessons", false],
["letter", "letters", false],
["liquid", "liquids", false],
["maggot", "maggots", false],
["manner", "manners", false],
["marble", "marbles", false],
["margin", "margins", false],
["marker", "markers", false],
["market", "markets", false],
["master", "masters", false],
["matter", "matters", false],
["member", "members", false],
["memory", "memories", false],
["mentor", "mentors", false],
["method", "methods", false],
["mirror", "mirrors", false],
["moment", "moments", false],
["monkey", "monkeys", false],
["mother", "mothers", false],
["motion", "motions", false],
["motive", "motives", false],
["murder", "murders", false],
["muscle", "muscles", false],
["museum", "museums", false],
["nation", "nations", false],
["nature", "natures", false],
["needle", "needles", false],
["notion", "notions", false],
["number", "numbers", false],
["object", "objects", true],
["office", "offices", true],
["option", "options", true],
["orange", "oranges", true],
["origin", "origins", true],
["outfit", "outfits", true],
["outlet", "outlets", true],
["output", "outputs", true],
["palace", "palaces", false],
["parade", "parades", false],
["parent", "parents", false],
["parish", "parishes", false],
["pastor", "pastors", false],
["patent", "patents", false],
["patron", "patrons", false],
["peanut", "peanuts", false],
["pencil", "pencils", false],
["pepper", "peppers", false],
["period", "periods", false],
["person", "persons", false],
["phrase", "phrases", false],
["pillow", "pillows", false],
["pistol", "pistols", false],
["planet", "planets", false],
["player", "players", false],
["pocket", "pockets", false],
["policy", "policies", false],
["poster", "posters", false],
["potato", "potatoes", false],
["powder", "powders", false],
["prayer", "prayers", false],
["priest", "priests", false],
["prince", "princes", false],
["prison", "prisons", false],
["profit", "profits", false],
["puzzle", "puzzles", false],
["rabbit", "rabbits", false],
["rating", "ratings", false],
["reader", "readers", false],
["reason", "reasons", false],
["recipe", "recipes", false],
["regime", "regimes", false],
["region", "regions", false],
["remark", "remarks", false],
["report", "reports", false],
["resort", "resorts", false],
["result", "results", false],
["review", "reviews", false],
["reward", "rewards", false],
["rhythm", "rhythms", false],
["ribbon", "ribbons", false],
["ritual", "rituals", false],
["rocket", "rockets", false],
["ruling", "rulings", false],
["runner", "runners", false],
["salary", "salaries", false],
["sample", "samples", false],
["saucer", "saucers", false],
["saving", "savings", false],
["scheme", "schemes", false],
["school", "schools", false],
["screen", "screens", false],
["script", "scripts", false],
["season", "seasons", false],
["sector", "sectors", false],
["seller", "sellers", false],
["sensor", "sensors", false],
["shadow", "shadows", false],
["shower", "showers", false],
["shrimp", "shrimps", false],
["signal", "signals", false],
["singer", "singers", false],
["sister", "sisters", false],
["sleeve", "sleeves", false],
["socket", "sockets", false],
["source", "sources", false],
["speech", "speeches", false],
["sphere", "spheres", false],
["spirit", "spirits", false],
["spouse", "spouses", false],
["spring", "springs", false],
["square", "squares", false],
["stance", "stances", false],
["statue", "statues", false],
["status", "statuses", false],
["streak", "streaks", false],
["stream", "streams", false],
["street", "streets", false],
["string", "strings", false],
["stroke", "strokes", false],
["studio", "studios", false],
["suburb", "suburbs", false],
["summer", "summers", false],
["summit", "summits", false],
["switch", "switches", false],
["symbol", "symbols", false],
["system", "systems", false],
["tactic", "tactics", false],
["talent", "talents", false],
["target", "targets", false],
["temple", "temples", false],
["terror", "terrors", false],
["theory", "theories", false],
["thread", "threads", false],
["threat", "threats", false],
["throat", "throats", false],
["ticket", "tickets", false],
["timing", "timings", false],
["tissue", "tissues", false],
["toilet", "toilets", false],
["tomato", "tomatoes", false],
["tongue", "tongues", false],
["travel", "travels", false],
["treaty", "treaties", false],
["tunnel", "tunnels", false],
["turkey", "turkeys", false],
["turtle", "turtles", false],
["valley", "valleys", false],
["vendor", "vendors", false],
["vessel", "vessels", false],
["victim", "victims", false],
["viewer", "viewers", false],
["vision", "visions", false],
["volume", "volumes", false],
["wallet", "wallets", false],
["weapon", "weapons", false],
["weight", "weights", false],
["window", "windows", false],
["winner", "winners", false],
["winter", "winters", false],
["worker", "workers", false],
["writer", "writers", false]
]
