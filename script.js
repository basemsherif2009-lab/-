const games = [
    { 
        title: "GTA V", 
        category: "عالم مفتوح / أكشن", 
        img: "2475-1920x1080-desktop-1080p-grand-theft-auto-5-background-image.jpg", 
        link: "https://www.downloadcomputergames.net/p/download-game.html#https://up.downloadcomputergames.net/2020/10/download-gta-5-for-pc/GTA-V.zip" 
    },
    { 
        title: "FIFA 23", 
        category: "كرة قدم / رياضة", 
        img: "1276415.jpg", 
        link: "https://app.traidsoft.net/download-fifa-2023-for-pc/#google_vignette" 
    },
    { 
        title: "Assetto Corsa", 
        category: "سباق سيارات", 
        img: "Screenshot 2026-04-12 213302.png", 
        link: "https://www.downloadcomputergames.net/p/download-game.html#https://up.downloadcomputergames.net/0/0/files/Assetto.Corsa.v1.16.4.zip" 
    },
    { 
        title: "PES 2019", 
        category: "كرة قدم", 
        img: "wp3846781-pes2019-wallpapers.jpg", 
        link: "https://bit.ly/4eMfiDD" 
    },
    { 
        title: "Minecraft", 
        category: "بقاء ومغامرة", 
        img: "خلفية ماين كرافت سيف الماس 4K.png", 
        link: "https://www.downloadcomputergames.net/p/download-game.html#https://up.downloadcomputergames.net/2021/02/minecraft-for-pc/Minecraft-Dungeons.zip" 
    },
    { 
        title: "PUBG Mobile", 
        category: "أكشن/باتل رويال", 
        img: "407192.jpg", 
        link: "https://www.pubgmobile.com/ar/home.shtml" 
    },
    { 
        title: "fifa 2019", 
        category: "كره قدم", 
        img: "a0d19e463c1122d2d46f95ed5c80658a.jpg", 
        link: "https://www.downloadcomputergames.net/p/redirect.html#https://up.downloadcomputergames.net/0/0/files/FIFA-19.zip" 
    },
    { 
        title: "neeed for speed most wanted 2005"
        , category: "سباق سيارات", 
        img: "50a2c76781b236733f8d443daaba46ce.jpg", 
        link: "https://www.downloadcomputergames.net/p/redirect.html#https://up.downloadcomputergames.net/2021/04/need-for-speed/NFS-Most-Wanted-2005.exe" 
    },
     { 
        title: "need for speed under ground 2", 
        category: "سباق سيارات", 
        img: "530583.jpg", 
        link: "https://www.downloadcomputergames.net/p/redirect.html#https://up.downloadcomputergames.net/2021/12/need-for-speed-underground-2/Need-for-Speed-Underground-2.zip" 
    }, 
    { 
        title: "Resident Evil 5", 
        category: "رعب/أكشن", 
        img: "279099.jpg", 
        link: "https://www.downloadcomputergames.net/p/redirect.html#https://up.downloadcomputergames.net/0/0/files/Resident-Evil-5-downloadcomputergames.net.zip" 
    },
    { 
        title: "Resident Evil 4(2005)", 
        category: "رعب/أكشن", 
        img: "Screenshot 2026-05-21 083053.png", 
        link: "https://www.downloadcomputergames.net/p/redirect.html#https://up.downloadcomputergames.net/2022/01/resident-evil-4/Resident-Evil-4.zip" 
    },
    { 
        title: "Resident Evil 4(remake)", 
        category: "رعب/أكشن", 
        img: "Screenshot 2026-05-21 084114.png", 
        link: "https://pcgeeks-games.com/220-page/#link" 
    },
    { 
        title: "Resident Evil 2 (2019)", 
        category: "رعب/أكشن", 
        img: "Screenshot 2026-05-21 084728.png", 
        link: "https://pcgeeks-games.com/resident-evil-2-links/" 
    },
];

const container = document.getElementById('gamesContainer');

function displaygames(gamesList) {
    container.innerHTML = "";
    gamesList.forEach(game => {
        const card = `
            <div class="game-card">
                <img src="${game.img}" alt="${game.title}" class="game-img">
                <div class="game-info">
                    <h3>${game.title}</h3>
                    <p><i class="fas fa-tag"></i> ${game.category}</p>
                    <div class="btns-group">
                        <a href="${game.link}" class="download-btn"><i class="fas fa-download"></i> تحميل</a>
                        <button class="share-btn" onclick="shareGame('${game.title}')">
                            <i class="fas fa-share-alt"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// وظيفة المشاركة
function shareGame(title) {
    if (navigator.share) {
        navigator.share({
            title: title,
            text: `شوف اللعبة دي على موقعي: ${title}`,
            url: window.location.href
        });
    } else {
        alert("انسخ رابط الموقع وابعدته لأصحابك!");
    }
}

function searchgames() {
    const term = document.getElementById('searchBar').value.toLowerCase();
    const filtered = games.filter(game => 
        game.title.toLowerCase().includes(term) || 
        game.category.toLowerCase().includes(term)
    );
    displaygames(filtered);
}

displaygames(games);