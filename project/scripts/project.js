const matchArchive = [
    {
        id: "m1",
        matchId: 32200001,
        tournament: "SLTV StarSeries Season 6",
        teams: "RoX.KIS vs zRage",
        hero: "Bane",
        date: "2013-06-14",
        category: "confirmed",
        description: "The original 322 case. Solo played Bane against zRage and bet $100 against his team for a $322 payout.",
        image: "https://files.libero.pe/Libero/2020/05/15/solo-dota-2-322-1589572081.jpg"
    },
    {
        id: "m2",
        matchId: 65432109,
        tournament: "ProDota Cup SA",
        teams: "Elite Wolves vs Infamous",
        hero: "Multiple (Roster Ban)",
        date: "2016-03-22",
        category: "confirmed",
        description: "Emblematic SA match-fixing case leading to lifetime bans by Valve for Smash, VanN, mstco, Iwo, and Ztok.",
        image: "https://www.infobae.com/new-resizer/0sxViiWRREu0bEUMKGTRsQv8X3k=/arc-anglerfish-arc2-prod-infobae/public/K7ZWN7E5UZBXZO7WR6C6AQAXAE.jpg"
    },
    {
        id: "m3",
        matchId: 98765432,
        tournament: "EWC Regional / Main Stage",
        teams: "Playtime vs 1WIN Team / Team Liquid",
        hero: "Slardar",
        date: "2026-07-10",
        category: "suspicious",
        description: "Accused matches featuring DarkMago and Vintage at EWC against 1WIN Team and Team Liquid with Slardar. Neither player has issued an official statement.",
        image: "https://media.cyberscore.live/static/posts/2026/7/6ae7ea52-24e2-46fb-8be9-e9d47221eeff.webp"
    },
    {
        id: "m4",
        matchId: 44556677,
        tournament: "SA Ecosystem Analysis",
        teams: "South America vs Global Scene",
        hero: "Systemic Issue",
        date: "2024-08-15",
        category: "confirmed",
        description: "Economic gap and lack of sponsorship drive young talent toward unregulated betting, undermining regional growth.",
        image: "https://www.infobae.com/new-resizer/0sxViiWRREu0bEUMKGTRsQv8X3k=/arc-anglerfish-arc2-prod-infobae/public/K7ZWN7E5UZBXZO7WR6C6AQAXAE.jpg"
    }
];

function createMatchCard(item) {
    return `
        <article class="match-card ${item.category}">
            <img src="${item.image}" alt="Dota 2 Hero: ${item.hero}" loading="lazy" width="300" height="180">
            <div class="card-content">
                <span class="badge ${item.category}">${item.category.toUpperCase()}</span>
                <h3>${item.teams}</h3>
                <p><strong>Tournament:</strong> ${item.tournament}</p>
                <p><strong>Key Hero:</strong> ${item.hero}</p>
                <p class="description">${item.description}</p>
                <button class="save-btn" data-id="${item.id}">⭐ Bookmark Match</button>
            </div>
        </article>
    `;
}

function renderMatches(filterCategory = "all") {
    const container = document.querySelector("#matches-container");
    if (!container) return;

    let filteredMatches = matchArchive;
    if (filterCategory !== "all") {
        filteredMatches = matchArchive.filter(match => match.category === filterCategory);
    }

    container.innerHTML = filteredMatches.map(createMatchCard).join("");
    attachFavoriteEvents();
}

function attachFavoriteEvents() {
    const buttons = document.querySelectorAll(".save-btn");
    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            const matchId = event.target.getAttribute("data-id");
            let favorites = JSON.parse(localStorage.getItem("322_favorites")) || [];
            
            if (!favorites.includes(matchId)) {
                favorites.push(matchId);
                localStorage.setItem("322_favorites", JSON.stringify(favorites));
                alert(`Match ${matchId} successfully saved to your bookmarks.`);
            } else {
                alert("This match is already in your bookmarks.");
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderMatches("all");

    const menuBtn = document.querySelector("#menu-btn");
    const navMenu = document.querySelector("#nav-menu");
    const menuIcon = document.querySelector(".menu-icon");

    if (menuBtn && navMenu) {
        menuBtn.addEventListener("click", () => {
            navMenu.classList.toggle("open");
            menuBtn.classList.toggle("open");
            
            if (navMenu.classList.contains("open")) {
                menuIcon.textContent = "✕";
            } else {
                menuIcon.textContent = "☰";
            }
        });
    }

    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            filterButtons.forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            
            const category = e.target.getAttribute("data-filter");
            renderMatches(category);
        });
    });

    let visitCount = Number(localStorage.getItem("322_visits")) || 0;
    visitCount++;
    localStorage.setItem("322_visits", visitCount);

    const visitDisplay = document.querySelector("#visit-counter");
    if (visitDisplay) {
        visitDisplay.textContent = `Site Visits: ${visitCount}`;
    }
});