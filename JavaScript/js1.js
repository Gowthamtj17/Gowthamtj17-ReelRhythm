// ================= Helpers =================
function formatText(str) {
    if (!str) return "";
    return str.replace(/_/g, " ")
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
}

function renderStars(rating) {
    return `<div class="stars">${"★".repeat(rating)}${"☆".repeat(5 - rating)}</div>`;
}

// ================= Render Movie Card =================
function renderMovieCard(movie, container) {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}">
        <div class="movie-info">
            <div><p class="movie-title">${movie.title}</p></div>
            <div><p class="movie-meta">${movie.category.toUpperCase()} | ${movie.year} ${renderStars(movie.rating)}</p></div>
            <div><button class="play-btn">▶</button></div>
        </div>
    `;
    card.querySelector(".play-btn").addEventListener("click", e => {
        e.stopPropagation();
        localStorage.setItem("selectedMovie", JSON.stringify(movie));
        window.location.href = "movie_play.html";
    });
    card.addEventListener("click", () => {
        localStorage.setItem("selectedMovie", JSON.stringify(movie));
        window.location.href = "movie_play.html";
    });
    container.appendChild(card);
}

// ================= Render Main Page =================
function renderMainPage() {
    const staticSections = ["popular", "new", "web_series", "romantic_drama", "anime_Series", "action", "action_adventure"];
    const dynamicContainer = document.getElementById("dynamic-sections");

    // --- Static Sections ---
    staticSections.forEach(section => {
        let filteredMovies = [];

        if (section === "popular") {
            filteredMovies = [...movies].sort((a, b) => b.rating - a.rating || b.year - a.year);
        } else if (section === "new") {
            const maxYear = Math.max(...movies.map(m => m.year));
            filteredMovies = movies.filter(m => m.year === maxYear).sort((a, b) => b.year - a.year);
        } else {
            filteredMovies = movies.filter(m => m.category === section).sort((a, b) => b.year - a.year);
        }

        if (filteredMovies.length === 0) return;

        // Get existing container or create new section dynamically
        let container = document.getElementById(section);
        if (!container && dynamicContainer) {
            const sectionDiv = document.createElement("div");
            sectionDiv.className = "movie-section";
            sectionDiv.innerHTML = `
                <div class="section-header">
                    <h2 class="section-title">${formatText(section)}</h2>
                    <a href="movies_category.html?category=${section}" class="see-all">See All</a>
                </div>
                <div class="movie-row" id="dynamic-${section}"></div>
            `;
            dynamicContainer.appendChild(sectionDiv);
            container = sectionDiv.querySelector(".movie-row");
        }

        filteredMovies.forEach(m => renderMovieCard(m, container));
    });

    // --- Dynamic Sections ---
    const allCategories = [...new Set(movies.map(m => m.category))];
    const extraCategories = allCategories.filter(c => !staticSections.includes(c));

    extraCategories.forEach(category => {
        const filteredMovies = movies.filter(m => m.category === category).sort((a, b) => b.year - a.year);
        if (filteredMovies.length === 0 || !dynamicContainer) return;

        const section = document.createElement("div");
        section.className = "movie-section";
        section.innerHTML = `
            <div class="section-header">
                <h2 class="section-title">${formatText(category)}</h2>
                <a href="movies_category.html?category=${category}" class="see-all">See All</a>
            </div>
            <div class="movie-row-dynamic" id="dynamic-${category}"></div>
        `;
        dynamicContainer.appendChild(section);

        const row = section.querySelector(".movie-row-dynamic");
        filteredMovies.forEach(m => renderMovieCard(m, row));
    });

    // --- Languages (limit) ---
    const langContainer = document.getElementById("language-row");
    if (langContainer) {
        const languages = [...new Set(movies.map(m => m.language))];
        const previewLanguages = languages.slice(0, 10);

        previewLanguages.forEach(lang => {
            const card = document.createElement("div");
            card.className = "lang-card";
            card.textContent = formatText(lang);
            card.addEventListener("click", () => {
                window.location.href = `language_page.html?language=${lang}`;
            });
            langContainer.appendChild(card);
        });

        //  Add See All link
        const header = langContainer.parentElement.querySelector(".section-header");
        if (header && !header.querySelector(".see-all")) {
            const seeAllLink = document.createElement("a");
            seeAllLink.href = "movies_category.html?category=languages";
            seeAllLink.className = "see-all";
            seeAllLink.textContent = "See All";
            header.appendChild(seeAllLink);
        }
    }
}

function renderSeeAllPage() {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    const language = params.get("language");
    const container = document.getElementById("category-container");
    const titleEl = document.getElementById("category-title");

    if (!container || !titleEl) return;

    let filteredMovies = [];

    if (category && language) {
        filteredMovies = movies.filter(m => m.category === category && m.language === language)
            .sort((a, b) => b.year - a.year);
        titleEl.textContent = `${formatText(language)} ${formatText(category)} Shows`;

    } else if (category === "popular") {
        filteredMovies = [...movies].sort((a, b) => b.rating - a.rating || b.year - a.year);
        titleEl.textContent = "Popular Movies";

    } else if (category === "new") {
        const maxYear = Math.max(...movies.map(m => m.year));
        filteredMovies = movies.filter(m => m.year === maxYear);
        titleEl.textContent = "New Releases ";

    } else if (category === "languages") {
        titleEl.textContent = "Languages";
        const languages = [...new Set(movies.map(m => m.language))];

        const grid = document.createElement("div");
        grid.className = "language-grid";

        languages.forEach(lang => {
            const card = document.createElement("div");
            card.className = "lang-card";
            card.textContent = formatText(lang);
            card.addEventListener("click", () => {
                window.location.href = `language_page.html?language=${lang}`;
            });
            grid.appendChild(card);
        });

        container.appendChild(grid);
        return;
    }

    else if (category) {
        filteredMovies = movies.filter(m => m.category === category)
            .sort((a, b) => b.year - a.year);
        titleEl.textContent = `${formatText(category)} Shows`;
    }

    filteredMovies.forEach(m => renderMovieCard(m, container));
}


// ================= Render Language Page =================
function renderLanguagePage() {
    const params = new URLSearchParams(window.location.search);
    const language = params.get("language");
    const container = document.getElementById("language-container");
    const titleEl = document.getElementById("language-title");

    if (!container || !titleEl) return;

    if (!language) {
        titleEl.textContent = "Languages";
        const languages = [...new Set(movies.map(m => m.language))];

        const row = document.createElement("div");
        row.className = "language-grid";

        languages.forEach(lang => {
            const card = document.createElement("div");
            card.className = "lang-card";
            card.textContent = formatText(lang);
            card.addEventListener("click", () => {
                window.location.href = `language_page.html?language=${lang}`;
            });
            row.appendChild(card);
        });

        container.appendChild(row);
    } else {
        titleEl.textContent = `${formatText(language)} Content`;

        const genres = [...new Set(movies.filter(m => m.language === language).map(m => m.category))];
        if (genres.length === 0) return;

        genres.forEach(g => {
            const filteredMovies = movies.filter(m => m.category === g && m.language === language)
                .sort((a, b) => b.year - a.year);
            if (filteredMovies.length === 0) return;

            const section = document.createElement("div");
            section.className = "movie-section";
            section.innerHTML = `
                <div class="section-header">
                    <h2 class="section-title">${formatText(g)}</h2>
                    <a href="movies_category.html?category=${g}&language=${language}" class="see-all">See All</a>
                </div>
                <div class="movie-row-dynamic" id="${language}-${g}"></div>
            `;
            container.appendChild(section);

            const row = section.querySelector(".movie-row-dynamic");
            filteredMovies.forEach(m => renderMovieCard(m, row));
        });
    }
}

// ================= Auto Detect Page =================
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("popular") || document.getElementById("dynamic-sections")) renderMainPage();
    else if (document.getElementById("category-container")) renderSeeAllPage();
    else if (document.getElementById("language-container")) renderLanguagePage();
});

// ================= Dynamic Sidenav =================
function renderSidenav() {
    const sidenavLinks = document.getElementById("sidenav-links");
    sidenavLinks.innerHTML = "";

    const permanent = [
        { name: "Home", url: "movie_main.html" },
        { name: "Popular", url: "movies_category.html?category=popular" },
        { name: "New Releases", url: "movies_category.html?category=new" },
        { name: "Languages", url: "language_page.html" }

    ];

    permanent.forEach(link => {
        const a = document.createElement("a");
        a.href = link.url;
        a.textContent = link.name;
        sidenavLinks.appendChild(a);
    });

    const staticSections = ["popular", "new", "languages"];
    const allCategories = [...new Set(movies.map(m => m.category))];
    const dynamicCategories = allCategories.filter(c => !staticSections.includes(c));

    if (dynamicCategories.length > 0) {
        const divider = document.createElement("hr");
        sidenavLinks.appendChild(divider);

        dynamicCategories.forEach(cat => {
            const a = document.createElement("a");
            a.href = `movies_category.html?category=${cat}`;
            a.textContent = formatText(cat);
            sidenavLinks.appendChild(a);
        });
    }

    const logoutDivider = document.createElement("hr");
    sidenavLinks.appendChild(logoutDivider);

    const logoutLink = document.createElement("a");
    logoutLink.href = "/index.html";
    logoutLink.textContent = "Logout";
    sidenavLinks.appendChild(logoutLink);
}

document.addEventListener("DOMContentLoaded", () => {
    renderSidenav();
});

// ================= Movie Play Page =================
const movie = JSON.parse(localStorage.getItem("selectedMovie"));
if (movie) {
    const titleEl = document.getElementById("movie-title");
    const typeYearEl = document.getElementById("movie-type-year");
    const descEl = document.getElementById("movie-description");
    const videoEl = document.getElementById("movie-video");

    if (titleEl) titleEl.textContent = movie.title;

    if (typeYearEl) {
        typeYearEl.textContent = `${formatText(movie.category)} · ${formatText(movie.language)} · Rating: ${movie.rating} · Released in ${movie.year}.`;
    }

    if (descEl) descEl.textContent = movie.description;
    if (videoEl) videoEl.src = movie.link + "?autoplay=1&rel=0";
    const relatedContainer = document.getElementById("related-movies");
    if (relatedContainer) {
        const relatedMovies = movies
            .filter(m => m.category === movie.category && m.title !== movie.title)
            .sort((a, b) => b.year - a.year)
            .slice(0, 10);

        if (relatedMovies.length > 0) {
            relatedMovies.forEach(m => renderMovieCard(m, relatedContainer));
        } else {
            relatedContainer.innerHTML = "<p>No related movies found.</p>";
        }
    }
} else {
    const playContainer = document.querySelector(".movie-play.container");
    if (playContainer) playContainer.innerHTML = "<p>Movie not found.</p>";
}

// ================= Hero Slider =================
document.addEventListener("DOMContentLoaded", () => {
    const heroSlider = document.getElementById("hero-slider");
    const thumbnailsContainer = document.getElementById("hero-thumbnails");

    if (!heroSlider || !thumbnailsContainer) return;

    let currentSlide = 0;
    const TRANS_MS = 800;
    let isAnimating = false;
    let isInfoOpen = false;

    const maxYear = Math.max(...movies.map(m => m.year));
    const heroMovies = movies.filter(m => m.year === maxYear);

    heroMovies.forEach((movie, index) => {
        const slide = document.createElement("div");
        slide.classList.add("hero-slide");
        slide.dataset.index = index;

        slide.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}" style="width:100%;height:100%;object-fit:cover;">
            <div class="hero-content">
                <h1>${movie.title}</h1>
                <p>${movie.description || "No description available."}</p>
                <div class="hero-buttons">
                    <button class="thumb-play-btn">
                        <i class="fa-solid fa-play"></i> Watch Now
                    </button>
                    <button class="info-btn">
                        <i class="fa-solid fa-circle-info"></i> More Info
                    </button>
                </div>
            </div>
        `;
        heroSlider.insertBefore(slide, thumbnailsContainer);

        const thumb = document.createElement("img");
        thumb.src = movie.image;
        thumb.alt = movie.title;
        if (index === 0) thumb.classList.add("active");
        thumb.addEventListener("click", () => {
            if (!isInfoOpen) showSlide(index);
        });
        thumbnailsContainer.appendChild(thumb);

        const playBtn = slide.querySelector(".thumb-play-btn");
        playBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            localStorage.setItem("selectedMovie", JSON.stringify(movie));
            window.location.href = "movie_play.html";
        });

        // More Info toggle
        const infoBtn = slide.querySelector(".info-btn");
        const desc = slide.querySelector("p");
        infoBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            desc.classList.toggle("expanded");
            if (desc.classList.contains("expanded")) {
                infoBtn.innerHTML = `<i class="fa-solid fa-circle-info"></i> Less Info`;
                isInfoOpen = true;
            } else {
                infoBtn.innerHTML = `<i class="fa-solid fa-circle-info"></i> More Info`;
                isInfoOpen = false;
            }
        });
    });

    const slides = Array.from(document.querySelectorAll(".hero-slide"));
    const thumbs = thumbnailsContainer.children;

    slides.forEach((s, i) => {
        s.style.transition = "none";
        s.style.left = (i === 0 ? "0%" : "100%");
        s.classList.toggle("visible", i === 0);
        s.getBoundingClientRect();
        s.style.transition = "";
    });

    function showSlide(index) {
        if (index === currentSlide || isAnimating || isInfoOpen) return; // <-- Block when info open
        isAnimating = true;

        const old = slides[currentSlide];
        const next = slides[index];

        next.style.transition = "none";
        next.style.left = "100%";
        next.classList.remove("visible");
        next.getBoundingClientRect();
        const transStr = `left ${TRANS_MS}ms ease-in-out`;
        old.style.transition = transStr;
        next.style.transition = transStr;

        old.classList.remove("visible");
        old.classList.add("moving-out");
        old.style.zIndex = 2;
        next.style.zIndex = 3;

        requestAnimationFrame(() => {
            old.style.left = "-100%";
            next.style.left = "0%";
        });

        if (thumbs[currentSlide]) thumbs[currentSlide].classList.remove("active");
        if (thumbs[index]) thumbs[index].classList.add("active");

        setTimeout(() => {
            old.style.transition = "none";
            old.style.left = "100%";
            old.classList.remove("moving-out");
            old.style.zIndex = "";
            next.classList.add("visible");
            next.style.transition = "";
            next.style.zIndex = "";
            next.getBoundingClientRect();
            old.getBoundingClientRect();
            isAnimating = false;
        }, TRANS_MS + 20);

        const thumb = thumbs[index];
        if (thumb) {
            thumbnailsContainer.scrollTo({
                left: thumb.offsetLeft - thumbnailsContainer.offsetWidth / 2 + thumb.offsetWidth / 2,
                behavior: "smooth"
            });
        }

        currentSlide = index;
    }

    // Auto-play (stops when info open)
    setInterval(() => {
        if (isAnimating || isInfoOpen) return;  // <-- Block autoplay
        let next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }, 5000);
});

