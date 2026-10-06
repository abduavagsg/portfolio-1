// =============================================
// 1) بيانات البطاقات (نفس بياناتك)
// =============================================
const karutaCards = [
    { number: 1,  japanese: "秋の田の かりほの庵の 苫をあらみ わが衣手は 露にぬれつつ", romaji: "Aki no ta no kariho no io no toma o arami waga koromode wa tsuyu ni nuretsutsu", poet: "Emperor Tenji", meaning: "In the autumn fields, the roof of my little hut is rough, and my sleeves are getting wet with dew.", kimariji: "あきの", readingRest: "たの かりほのいほの とまをあらみ わがころもでは つゆにぬれつつ" },
    { number: 2,  japanese: "春すぎて 夏来にけらし 白妙の 衣ほすてふ 天の香具山", romaji: "Haru sugite natsu kinikerashi shirotae no koromo hosu cho Ama no Kaguyama", poet: "Empress Jito", meaning: "Spring has passed and summer has come; white robes are drying on Mount Kagu.", kimariji: "はるす", readingRest: "ぎて なつきにけらし しろたへの ころもほすてふ あまのかぐやま" },
    { number: 3,  japanese: "あしびきの 山鳥の尾の しだり尾の ながながし夜を ひとりかも寝む", romaji: "Ashibiki no yamadori no o no shidario no naganagashi yo o hitori kamo nen", poet: "Kakinomoto no Hitomaro", meaning: "Must I sleep alone through this long night, as long as the drooping tail of the mountain pheasant?", kimariji: "あし", readingRest: "びきの やまどりのをの しだりをの ながながしよを ひとりかもねむ" },
    { number: 4,  japanese: "田子の浦に うち出でて見れば 白妙の 富士の高嶺に 雪は降りつつ", romaji: "Tago no ura ni uchiidete mireba shirotae no Fuji no takane ni yuki wa furitsutsu", poet: "Yamabe no Akahito", meaning: "Going out to Tago Bay, I see pure white snow falling on the high peak of Mount Fuji.", kimariji: "たご", readingRest: "のうらに うちいでてみれば しろたへの ふじのたかねに ゆきはふりつつ" },
    { number: 5,  japanese: "奥山に 紅葉踏みわけ 鳴く鹿の 声きく時ぞ 秋は悲しき", romaji: "Okuyama ni momiji fumiwake naku shika no koe kiku toki zo aki wa kanashiki", poet: "Sarumaru Dayu", meaning: "Deep in the mountains, hearing the cry of a deer walking through red autumn leaves, I feel the sadness of autumn.", kimariji: "おく", readingRest: "やまに もみぢふみわけ なくしかの こゑきくときぞ あきはかなしき" },
    { number: 6,  japanese: "かささぎの 渡せる橋に おく霜の 白きを見れば 夜ぞふけにける", romaji: "Kasasagi no wataseru hashi ni oku shimo no shiroki o mireba yo zo fukenikeru", poet: "Otomo no Yakamochi", meaning: "Seeing the white frost on the bridge of magpies, I realize the night has grown late.", kimariji: "かさ", readingRest: "さぎの わたせるはしに おくしもの しろきをみれば よぞふけにける" },
    { number: 7,  japanese: "天の原 ふりさけ見れば 春日なる 三笠の山に 出でし月かも", romaji: "Ama no hara furisake mireba Kasuga naru Mikasa no yama ni ideshi tsuki kamo", poet: "Abe no Nakamaro", meaning: "Looking up at the wide sky, I see the same moon that rose over Mount Mikasa in Kasuga.", kimariji: "あまの", readingRest: "はら ふりさけみれば かすがなる みかさのやまに いでしつきかも" },
    { number: 8,  japanese: "わが庵は 都のたつみ しかぞ住む 世をうぢ山と 人はいふなり", romaji: "Waga io wa miyako no tatsumi shika zo sumu yo o Ujiyama to hito wa iu nari", poet: "Kisen Hoshi", meaning: "My hut is southeast of the capital, and I live in peace, though people call it the Mountain of Sorrow.", kimariji: "わがい", readingRest: "ほは みやこのたつみ しかぞすむ よをうぢやまと ひとはいふなり" },
    { number: 9,  japanese: "花の色は うつりにけりな いたづらに わが身世にふる ながめせしまに", romaji: "Hana no iro wa utsurinikeri na itazura ni waga mi yo ni furu nagame seshi ma ni", poet: "Ono no Komachi", meaning: "The color of the flowers has faded while I spent my days gazing at the long rains of life.", kimariji: "はなの", readingRest: "いろは うつりにけりな いたづらに わがみよにふる ながめせしまに" },
    { number: 10, japanese: "これやこの 行くも帰るも 別れては 知るも知らぬも 逢坂の関", romaji: "Kore ya kono yuku mo kaeru mo wakarete wa shiru mo shiranu mo Osaka no seki", poet: "Semimaru", meaning: "This is the Gate of Osaka, where people going and coming, friends and strangers, all meet and part.", kimariji: "これ", readingRest: "やこの ゆくもかへるも わかれては しるもしらぬも あふさかのせき" },
    { number: 11, japanese: "わたの原 八十島かけて 漕ぎ出でぬと 人には告げよ 海人の釣舟", romaji: "Wata no hara yasoshima kakete kogiidenu to hito ni wa tsugeyo ama no tsuribune", poet: "Ono no Takamura", meaning: "Fishing boats, tell everyone that I have rowed out into the great sea toward the many islands.", kimariji: "わたのはらや", readingRest: "そしまかけて こぎいでぬと ひとにはつげよ あまのつりぶね" },
    { number: 12, japanese: "天つ風 雲の通ひ路 吹き閉ぢよ をとめの姿 しばしとどめむ", romaji: "Amatsukaze kumo no kayoiji fukitoji yo otome no sugata shibashi todomen", poet: "Sojo Henjo", meaning: "Heavenly wind, close the path in the clouds, so the beautiful dancers may stay a little longer.", kimariji: "あまつ", readingRest: "かぜ くものかよひぢ ふきとぢよ をとめのすがた しばしとどめむ" },
    { number: 13, japanese: "筑波嶺の 峰より落つる みなの川 恋ぞつもりて 淵となりぬる", romaji: "Tsukubane no mine yori otsuru Minanogawa koi zo tsumorite fuchi to narinuru", poet: "Emperor Yozei", meaning: "Like the Minano River falling from Mount Tsukuba, my love has grown deeper and deeper like a pool.", kimariji: "つく", readingRest: "ばねの みねよりおつる みなのがは こひぞつもりて ふちとなりぬる" },
    { number: 14, japanese: "陸奥の しのぶもぢずり 誰ゆゑに 乱れそめにし われならなくに", romaji: "Michinoku no shinobu mojizuri tare yue ni midare somenishi ware naranaku ni", poet: "Minamoto no Toru", meaning: "Like the tangled patterns of Michinoku cloth, my heart is confused because of you, not because of me.", kimariji: "みち", readingRest: "のくの しのぶもぢずり たれゆゑに みだれそめにし われならなくに" },
    { number: 15, japanese: "君がため 春の野に出でて 若菜摘む わが衣手に 雪は降りつつ", romaji: "Kimi ga tame haru no no ni idete wakana tsumu waga koromode ni yuki wa furitsutsu", poet: "Emperor Koko", meaning: "For your sake, I went to the spring fields to pick young herbs, while snow kept falling on my sleeves.", kimariji: "きみがためは", readingRest: "るののにいでて わかなつむ わがころもでに ゆきはふりつつ" },
    { number: 16, japanese: "立ち別れ いなばの山の 峰に生ふる まつとし聞かば 今帰り来む", romaji: "Tachiwakare Inaba no yama no mine ni ouru matsu to shi kikaba ima kaerikon", poet: "Ariwara no Yukihira", meaning: "Even if we part, if I hear that you wait for me like the pines of Mount Inaba, I will come back at once.", kimariji: "たち", readingRest: "わかれ いなばのやまの みねにおふる まつとしきかば いまかへりこむ" },
    { number: 17, japanese: "ちはやぶる 神代も聞かず 竜田川 からくれなゐに 水くくるとは", romaji: "Chihayaburu kamiyo mo kikazu Tatsutagawa karakurenai ni mizu kukuru to wa", poet: "Ariwara no Narihira", meaning: "Even in the age of the gods, no one ever saw the Tatsuta River dyed in such deep red autumn colors.", kimariji: "ちは", readingRest: "やぶる かみよもきかず たつたがは からくれなゐに みづくくるとは" },
    { number: 18, japanese: "住の江の 岸による波 よるさへや 夢の通ひ路 人めよくらむ", romaji: "Suminoe no kishi ni yoru nami yoru sae ya yume no kayoiji hitome yokuramu", poet: "Fujiwara no Toshiyuki", meaning: "Like the waves that come to the shore of Suminoe, why do you avoid meeting me, even in my dreams at night?", kimariji: "す", readingRest: "みのえの きしによるなみ よるさへや ゆめのかよひぢ ひとめよくらむ" },
    { number: 19, japanese: "難波潟 みじかき蘆の ふしの間も 逢はでこの世を 過ぐしてよとや", romaji: "Naniwagata mijikaki ashi no fushi no ma mo awade kono yo o sugushite yo to ya", poet: "Lady Ise", meaning: "Must I live my whole life without meeting you, even for a moment as short as a reed's joint in Naniwa Bay?", kimariji: "なにはが", readingRest: "た みじかきあしの ふしのまも あはでこのよを すぐしてよとや" },
    { number: 20, japanese: "わびぬれば 今はた同じ 難波なる みをつくしても 逢はむとぞ思ふ", romaji: "Wabinureba ima hata onaji Naniwa naru mi o tsukushite mo awan to zo omou", poet: "Prince Motoyoshi", meaning: "I am so sad that nothing matters now; I will meet you even if it costs me my life.", kimariji: "わび", readingRest: "ぬれば いまはたおなじ なにはなる みをつくしても あはむとぞおもふ" },
    { number: 21, japanese: "今来むと いひしばかりに 長月の 有明の月を 待ち出でつるかな", romaji: "Ima kon to iishi bakari ni nagatsuki no ariake no tsuki o machiidetsuru kana", poet: "Sosei Hoshi", meaning: "Because you said 'I will come soon,' I waited all night until the morning moon appeared.", kimariji: "いまこ", readingRest: "むと いひしばかりに ながつきの ありあけのつきを まちいでつるかな" },
    { number: 22, japanese: "吹くからに 秋の草木の しをるれば むべ山風を 嵐といふらむ", romaji: "Fuku kara ni aki no kusaki no shiorureba mube yamakaze o arashi to iuramu", poet: "Funya no Yasuhide", meaning: "As soon as it blows, the autumn plants wither; that is why the mountain wind is called a storm.", kimariji: "ふ", readingRest: "くからに あきのくさきの しをるれば むべやまかぜを あらしといふらむ" },
    { number: 23, japanese: "月見れば ちぢにものこそ 悲しけれ わが身ひとつの 秋にはあらねど", romaji: "Tsuki mireba chiji ni mono koso kanashikere waga mi hitotsu no aki ni wa aranedo", poet: "Oe no Chisato", meaning: "When I look at the moon, I feel a thousand sorrows, even though autumn does not come for me alone.", kimariji: "つき", readingRest: "みれば ちぢにものこそ かなしけれ わがみひとつの あきにはあらねど" },
    { number: 24, japanese: "このたびは 幣も取りあへず 手向山 紅葉の錦 神のまにまに", romaji: "Kono tabi wa nusa mo toriaezu Tamukeyama momiji no nishiki kami no mani mani", poet: "Sugawara no Michizane", meaning: "On this journey I have no offering, so please accept the beautiful autumn leaves of Mount Tamuke, as the gods wish.", kimariji: "この", readingRest: "たびは ぬさもとりあへず たむけやま もみぢのにしき かみのまにまに" },
    { number: 25, japanese: "名にし負はば 逢坂山の さねかづら 人に知られで くるよしもがな", romaji: "Na ni shi owaba Osakayama no sanekazura hito ni shirarede kuru yoshi mogana", poet: "Fujiwara no Sadakata", meaning: "If the vine of Meeting Hill is true to its name, I wish I could pull you to me secretly, without anyone knowing.", kimariji: "なにし", readingRest: "おはば あふさかやまの さねかづら ひとにしられで くるよしもがな" },
    { number: 26, japanese: "小倉山 峰のもみぢ葉 心あらば 今ひとたびの みゆき待たなむ", romaji: "Ogurayama mine no momijiba kokoro araba ima hitotabi no miyuki matanan", poet: "Fujiwara no Tadahira", meaning: "Maple leaves on Mount Ogura, if you have a heart, please wait for one more royal visit.", kimariji: "をぐ", readingRest: "らやま みねのもみぢば こころあらば いまひとたびの みゆきまたなむ" },
    { number: 27, japanese: "みかの原 わきて流るる 泉川 いつ見きとてか 恋しかるらむ", romaji: "Mika no hara wakite nagaruru Izumigawa itsu miki tote ka koishikaruramu", poet: "Fujiwara no Kanesuke", meaning: "Like the Izumi River flowing through Mika Field, when did I first see you, that I miss you so much?", kimariji: "みかの", readingRest: "はら わきてながるる いづみがは いつみきとてか こひしかるらむ" },
    { number: 28, japanese: "山里は 冬ぞさびしさ まさりける 人めも草も かれぬと思へば", romaji: "Yamazato wa fuyu zo sabishisa masarikeru hitome mo kusa mo karenu to omoeba", poet: "Minamoto no Muneyuki", meaning: "In the mountain village, winter is the loneliest season, for both visitors and grass disappear.", kimariji: "やまざ", readingRest: "とは ふゆぞさびしさ まさりける ひとめもくさも かれぬとおもへば" },
    { number: 29, japanese: "心あてに 折らばや折らむ 初霜の 置きまどはせる 白菊の花", romaji: "Kokoroate ni oraba ya oran hatsushimo no okimadowaseru shiragiku no hana", poet: "Oshikochi no Mitsune", meaning: "If I want to pick a white chrysanthemum, I must guess where it is, hidden by the first frost.", kimariji: "こころあ", readingRest: "てに をらばやをらむ はつしもの おきまどはせる しらぎくのはな" },
    { number: 30, japanese: "有明の つれなく見えし 別れより 暁ばかり 憂きものはなし", romaji: "Ariake no tsurenaku mieshi wakare yori akatsuki bakari uki mono wa nashi", poet: "Mibu no Tadamine", meaning: "Since that cold parting under the morning moon, nothing is as sad for me as the break of dawn.", kimariji: "ありあ", readingRest: "けの つれなくみえし わかれより あかつきばかり うきものはなし" },
    { number: 31, japanese: "朝ぼらけ 有明の月と 見るまでに 吉野の里に 降れる白雪", romaji: "Asaborake ariake no tsuki to miru made ni Yoshino no sato ni fureru shirayuki", poet: "Sakanoue no Korenori", meaning: "At dawn, the white snow falling on the village of Yoshino looks just like the light of the morning moon.", kimariji: "あさぼらけあ", readingRest: "りあけのつきと みるまでに よしののさとに ふれるしらゆき" },
    { number: 32, japanese: "山川に 風のかけたる しがらみは 流れもあへぬ 紅葉なりけり", romaji: "Yamagawa ni kaze no kaketaru shigarami wa nagare mo aenu momiji narikeri", poet: "Harumichi no Tsuraki", meaning: "The fence that the wind built across the mountain stream is made of red autumn leaves that cannot flow away.", kimariji: "やまが", readingRest: "はに かぜのかけたる しがらみは ながれもあへぬ もみぢなりけり" },
    { number: 33, japanese: "ひさかたの 光のどけき 春の日に しづ心なく 花の散るらむ", romaji: "Hisakata no hikari nodokeki haru no hi ni shizugokoro naku hana no chiruramu", poet: "Ki no Tomonori", meaning: "On this calm spring day with its gentle light, why do the cherry blossoms fall so restlessly?", kimariji: "ひさ", readingRest: "かたの ひかりのどけき はるのひに しづごころなく はなのちるらむ" },
    { number: 34, japanese: "誰をかも 知る人にせむ 高砂の 松も昔の 友ならなくに", romaji: "Tare o ka mo shiru hito ni sen Takasago no matsu mo mukashi no tomo naranaku ni", poet: "Fujiwara no Okikaze", meaning: "Who is left that I can call my friend? Even the old pines of Takasago are not friends from my past.", kimariji: "たれ", readingRest: "をかも しるひとにせむ たかさごの まつもむかしの ともならなくに" },
    { number: 35, japanese: "人はいさ 心も知らず ふるさとは 花ぞ昔の 香ににほひける", romaji: "Hito wa isa kokoro mo shirazu furusato wa hana zo mukashi no ka ni nioikeru", poet: "Ki no Tsurayuki", meaning: "I cannot know what is in people's hearts, but in my old village the plum blossoms still smell as sweet as before.", kimariji: "ひとは", readingRest: "いさ こころもしらず ふるさとは はなぞむかしの かににほひける" }
];

// =============================================
// 2) المتغيرات العامة والعناصر
// =============================================
let currentCards = [...karutaCards];
let score = 0;
let quizActive = false;
let currentQuizCard = null;
let timerInterval = null;
let seconds = 0;

const startBtn = document.getElementById("start-btn");
const discoverBtn = document.getElementById("discover-btn");
const quizBtn = document.getElementById("quiz-btn");
const resetBtn = document.getElementById("reset-btn");
const cardsSection = document.getElementById("cards-section");
const cardsContainer = document.getElementById("cards-container");
const cardDetails = document.getElementById("card-details");
const cardDetailsContent = document.getElementById("card-details-content");
const closeBtn = document.getElementById("close-btn");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const scoreDisplay = document.getElementById("score-display");
const timerDisplay = document.getElementById("timer-display");
const quizArea = document.getElementById("quiz-area");
const quizQuestion = document.getElementById("quiz-question");
const quizOptions = document.getElementById("quiz-options");
const quizResult = document.getElementById("quiz-result");
const quizMessage = document.getElementById("quiz-message");

let isCreated = false;

// =============================================
// 3) دوال العرض الأساسية
// =============================================
function createCards(cardsArray = currentCards) {
    cardsContainer.innerHTML = "";
    cardsArray.forEach((card) => {
        const cardButton = document.createElement("button");
        cardButton.className = "karuta-card";
        const firstWords = card.japanese.split(" ")[0] || card.japanese.slice(0, 3);
        cardButton.innerHTML = `
            <span class="card-number">#${card.number}</span>
            ${firstWords}
            <span class="card-kimariji">${card.kimariji}</span>
        `;
        cardButton.addEventListener("click", () => showCardDetails(card));
        cardsContainer.appendChild(cardButton);
    });
    isCreated = true;
}

function showCardDetails(card) {
    cardDetailsContent.innerHTML = `
        <button id="close-btn" class="close-btn">✕</button>
        <h2>Card ${card.number}</h2>
        <p class="japanese-verse">${card.japanese}</p>
        <p class="hiragana-reading">
            <span class="kimariji-red">${card.kimariji}</span>${card.readingRest}
        </p>
        <p class="romaji">${card.romaji}</p>
        <p class="poet"><strong>Poet:</strong> ${card.poet}</p>
        <p>${card.meaning}</p>
        <p class="kimariji-note">
            <strong>Kimariji:</strong>
            <span class="kimariji-red">${card.kimariji}</span>
            — ${card.kimariji.length} syllable(s)
        </p>
    `;
    cardDetails.classList.remove("hidden");
    
    // إعادة ربط زر الإغلاق
    document.getElementById("close-btn").addEventListener("click", () => {
        cardDetails.classList.add("hidden");
    });
}

// =============================================
// 4) البحث والتصفية
// =============================================
function filterCards() {
    const query = searchInput.value.trim().toLowerCase();
    if (query === "") {
        currentCards = [...karutaCards];
    } else {
        currentCards = karutaCards.filter(card => 
            card.number.toString().includes(query) ||
            card.poet.toLowerCase().includes(query) ||
            card.japanese.includes(query) ||
            card.kimariji.includes(query)
        );
    }
    createCards(currentCards);
    if (currentCards.length === 0) {
        cardsContainer.innerHTML = `<p style="text-align:center;padding:2rem;color:#8b1a1a;">❌ No cards found matching "${query}"</p>`;
    }
}

// =============================================
// 5) نظام الاختبار (Quiz)
// =============================================
function startQuiz() {
    if (quizActive) {
        stopQuiz();
    }
    
    quizActive = true;
    score = 0;
    seconds = 0;
    updateScore();
    startTimer();
    quizArea.classList.remove("hidden");
    quizResult.classList.add("hidden");
    quizMessage.textContent = "";
    
    // إخفاء البطاقات أثناء الاختبار
    cardsSection.classList.add("hidden");
    
    generateQuizQuestion();
}

function stopQuiz() {
    quizActive = false;
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    quizArea.classList.add("hidden");
    cardsSection.classList.remove("hidden");
}

function generateQuizQuestion() {
    // اختيار بطاقة عشوائية
    const randomIndex = Math.floor(Math.random() * karutaCards.length);
    currentQuizCard = karutaCards[randomIndex];
    
    // عرض الـ Kimariji فقط كسؤال
    quizQuestion.innerHTML = `
        <p>Which card has the <strong>Kimariji</strong>:</p>
        <p class="quiz-kimariji">${currentQuizCard.kimariji}</p>
        <p style="font-size:0.9rem;color:#666;">(Choose the correct card number)</p>
    `;
    
    // توليد خيارات (رقم واحد صحيح + 4 أرقام خاطئة)
    const correctNumber = currentQuizCard.number;
    let options = [correctNumber];
    
    while (options.length < 5) {
        const randomNum = Math.floor(Math.random() * 35) + 1;
        if (!options.includes(randomNum)) {
            options.push(randomNum);
        }
    }
    
    // ترتيب عشوائي للخيارات
    options.sort(() => Math.random() - 0.5);
    
    // عرض الخيارات كأزرار
    quizOptions.innerHTML = "";
    options.forEach(num => {
        const btn = document.createElement("button");
        btn.className = "quiz-option";
        btn.textContent = `Card ${num}`;
        btn.dataset.number = num;
        btn.addEventListener("click", () => checkQuizAnswer(num));
        quizOptions.appendChild(btn);
    });
    
    quizResult.classList.add("hidden");
    quizMessage.textContent = "";
}

function checkQuizAnswer(selectedNumber) {
    if (!quizActive) return;
    
    const correct = selectedNumber === currentQuizCard.number;
    const buttons = quizOptions.querySelectorAll(".quiz-option");
    
    // تعطيل جميع الأزرار
    buttons.forEach(btn => btn.disabled = true);
    
    // إظهار النتيجة
    quizResult.classList.remove("hidden");
    
    if (correct) {
        score++;
        quizMessage.textContent = "✅ Correct! Well done!";
        quizMessage.style.color = "#2e7d32";
        // تمييز الزر الصحيح
        buttons.forEach(btn => {
            if (parseInt(btn.dataset.number) === currentQuizCard.number) {
                btn.style.background = "#4caf50";
                btn.style.color = "white";
            }
        });
    } else {
        quizMessage.textContent = `❌ Incorrect! The correct answer was Card ${currentQuizCard.number}`;
        quizMessage.style.color = "#c62828";
        buttons.forEach(btn => {
            if (parseInt(btn.dataset.number) === currentQuizCard.number) {
                btn.style.background = "#4caf50";
                btn.style.color = "white";
            } else if (parseInt(btn.dataset.number) === selectedNumber) {
                btn.style.background = "#c62828";
                btn.style.color = "white";
            }
        });
    }
    
    updateScore();
    
    // بعد 2 ثانية، سؤال جديد
    setTimeout(() => {
        if (quizActive) {
            generateQuizQuestion();
        }
    }, 2000);
}

function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        seconds++;
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        timerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }, 1000);
}

function updateScore() {
    scoreDisplay.textContent = `Score: ${score}`;
}

// =============================================
// 6) إعادة ترتيب عشوائي للبطاقات
// =============================================
function shuffleCards() {
    const shuffled = [...karutaCards];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    currentCards = shuffled;
    createCards(currentCards);
}

// =============================================
// 7) ربط الأحداث (Event Listeners)
// =============================================
startBtn.addEventListener("click", () => {
    if (quizActive) stopQuiz();
    currentCards = [...karutaCards];
    createCards(currentCards);
    cardsSection.classList.remove("hidden");
    cardsSection.scrollIntoView({ behavior: "smooth" });
});

discoverBtn.addEventListener("click", () => {
    startBtn.click();
    // اختيار بطاقة عشوائية وعرضها
    if (karutaCards.length > 0) {
        const randomCard = karutaCards[Math.floor(Math.random() * karutaCards.length)];
        setTimeout(() => showCardDetails(randomCard), 500);
    }
});

quizBtn.addEventListener("click", startQuiz);

resetBtn.addEventListener("click", () => {
    if (quizActive) stopQuiz();
    currentCards = [...karutaCards];
    createCards(currentCards);
    cardsSection.classList.remove("hidden");
    score = 0;
    updateScore();
    searchInput.value = "";
    cardsSection.scrollIntoView({ behavior: "smooth" });
});

searchBtn.addEventListener("click", filterCards);
searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") filterCards();
});

// إغلاق التفاصيل عند الضغط على الخلفية
cardDetails.addEventListener("click", (event) => {
    if (event.target === cardDetails) {
        cardDetails.classList.add("hidden");
    }
});