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
        title: "FIFA 2019", 
        category: "كره قدم", 
        img: "a0d19e463c1122d2d46f95ed5c80658a.jpg", 
        link: "https://www.downloadcomputergames.net/p/redirect.html#https://up.downloadcomputergames.net/0/0/files/FIFA-19.zip" 
    },
    { 
        title: "Need for Speed Most Wanted 2005", 
        category: "سباق سيارات", 
        img: "50a2c76781b236733f8d443daaba46ce.jpg", 
        link: "https://www.downloadcomputergames.net/p/redirect.html#https://up.downloadcomputergames.net/2021/04/need-for-speed/NFS-Most-Wanted-2005.exe" 
    },
    { 
        title: "Need for Speed Underground 2", 
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
        title: "Resident Evil 4 (2005)", 
        category: "رعب/أكشن", 
        img: "Screenshot 2026-05-21 083053.png", 
        link: "https://www.downloadcomputergames.net/p/redirect.html#https://up.downloadcomputergames.net/2022/01/resident-evil-4/Resident-Evil-4.zip" 
    },
    { 
        title: "Resident Evil 4 (Remake)", 
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
    { 
        title: "gta vice city(النسخه العاديه)", 
        category: "عالم مفتوح / أكشن", 
        img: "pp.png", 
        link: "https://www.downloadcomputergames.net/p/redirect.html#https://up.downloadcomputergames.net/2021/02/download-gta-vice-city/GTA-Vice-City.zip" 
    },
    { 
        title: "gta san andreas", 
        category: "عالم مفتوح / أكشن", 
        img: "Screenshot 2026-05-31 191512.png", 
        link: "https://www.downloadcomputergames.net/p/redirect.html#https://up.downloadcomputergames.net/2020/09/download-gta-san-andreas/GTA-San-Andreas.zip" 
    },
     { 
        title: "pes 2021(احدث باتش انتقلات لنسخه اللعبه)", 
        category: "احدث باتش انتقلات لنسخه اللعبه",
        img: "Screenshot 2026-05-31 195553.png", 
        link: "https://www.downloadcomputergames.net/p/redirect.html#https://up.downloadcomputergames.net/2021/10/download-pes-2021-pc/PES-2021-Official-Patch.rar" 
    },
     { 
        title: "pes 2021", 
        category: "كرة قدم",
        img: "Screenshot 2026-05-31 195553.png", 
        link: "https://www.downloadcomputergames.net/p/redirect.html#https://up.downloadcomputergames.net/2021/10/download-pes-2021-pc/eFootball-PES-2021.zip" 
    },
     { 
        title: "gta san andreas(HD edition)", 
        category: "عالم مفتوح / أكشن",
        img: "pp.png", 
        link: "https://www.downloadcomputergames.net/p/redirect.html#https://up.downloadcomputergames.net/2021/02/download-gta-vice-city/GTA-Vice-City-Definitive-Edition.zip" 
    },
    { 
        title: "شفرات جاتا 7", 
        category: "شفرات",
        img: "pp.png", 
        link: "https://www.downloadcomputergames.net/p/redirect.html#https://up.downloadcomputergames.net/2020/12/gta-7-codes/GTA-7-Codes.docx" 
    },

    
    
];

const containerId = 'gamesContainer';
const searchBarId = 'searchBar';

function createGameCard(game) {
    const card = document.createElement('article');
    card.className = 'game-card';

    card.innerHTML = `
        <img src="${game.img}" alt="${game.title}" class="game-img">
        <div class="game-info">
            <h3>${game.title}</h3>
            <p><i class="fas fa-tag"></i> ${game.category}</p>
            <div class="btns-group">
                <a href="${game.link}" class="download-btn" target="_blank" rel="noopener noreferrer">
                    <i class="fas fa-download"></i> تحميل
                </a>
                <button type="button" class="share-btn">
                    <i class="fas fa-share-alt"></i>
                </button>
            </div>
        </div>
    `;

    const shareButton = card.querySelector('.share-btn');
    if (shareButton) {
        shareButton.addEventListener('click', () => shareGame(game.title));
    }

    return card;
}

function displayGames(gamesList) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error('gamesContainer element not found');
        return;
    }

    container.innerHTML = '';

    if (gamesList.length === 0) {
        container.innerHTML = '<p class="no-results">لم يتم العثور على ألعاب. حاول بحثًا آخر.</p>';
        return;
    }

    const fragment = document.createDocumentFragment();
    gamesList.forEach(game => {
        fragment.appendChild(createGameCard(game));
    });

    container.appendChild(fragment);
}

function shareGame(title) {
    const shareText = `لعب: ${title}\ ابسط صحبك بعتلك لعبه ياعم!`;

    if (navigator.share) {
        navigator.share({
            title,
            text: shareText,
            url: window.location.href
        }).catch(error => {
            console.error('Error sharing:', error);
        });
    } else {
        alert('انسخ رابط الموقع وابعه لأصحابك!');
    }
}

function getSearchTerm() {
    const searchBar = document.getElementById(searchBarId);
    if (!searchBar) {
        console.error('searchBar element not found');
        return null;
    }

    return searchBar.value.trim().toLowerCase();
}

function searchGames() {
    const term = getSearchTerm();
    if (term === null) {
        return;
    }

    const filteredGames = games.filter(game =>
        game.title.toLowerCase().includes(term) ||
        game.category.toLowerCase().includes(term)
    );

    displayGames(filteredGames);
}

function init() {
    const searchBar = document.getElementById(searchBarId);
    if (searchBar) {
        searchBar.addEventListener('input', searchGames);
    }

    displayGames(games);
}

document.addEventListener('DOMContentLoaded', init);
