document.addEventListener("DOMContentLoaded", function () {
    const challenges = [
        {
            image: "img/challenge1.png",
            title: "아침 러닝 챌린지",
            status: "진행중",
            dates: "2024.07.01 ~ 2024.07.31"
        },
        {
            image: "img/challenge1.png",
            title: "아침 러닝 챌린지",
            status: "진행중",
            dates: "2024.07.01 ~ 2024.07.31"
        },
        {
            image: "img/challenge1.png",
            title: "아침 러닝 챌린지",
            status: "진행중",
            dates: "2024.07.01 ~ 2024.07.31"
        },
        {
            image: "img/challenge1.png",
            title: "아침 러닝 챌린지",
            status: "진행중",
            dates: "2024.07.01 ~ 2024.07.31"
        },
        {
            image: "img/challenge1.png",
            title: "아침 러닝 챌린지",
            status: "종료",
            dates: "2024.06.01 ~ 2024.06.30"
        },
        {
            image: "img/challenge1.png",
            title: "아침 러닝 챌린지",
            status: "종료",
            dates: "2024.06.01 ~ 2024.06.30"
        },
        {
            image: "img/challenge1.png",
            title: "아침 러닝 챌린지",
            status: "종료",
            dates: "2024.06.01 ~ 2024.06.30"
        },
        {
            image: "img/challenge1.png",
            title: "아침 러닝 챌린지",
            status: "종료",
            dates: "2024.06.01 ~ 2024.06.30"
        },
        {
            image: "img/challenge1.png",
            title: "아침 러닝 챌린지",
            status: "종료",
            dates: "2024.06.01 ~ 2024.06.30"
        },
        {
            image: "img/challenge1.png",
            title: "아침 러닝 챌린지",
            status: "종료",
            dates: "2024.06.01 ~ 2024.06.30"
        },
    ];

    const challengeList = document.getElementById("challenge-list");

    challenges.forEach(challenge => {
        const card = document.createElement("div");
        card.className = "challenge-card";
        
        const img = document.createElement("img");
        img.src = challenge.image;
        img.alt = "Challenge Image";

        const info = document.createElement("div");
        info.className = "challenge-info";

        const title = document.createElement("h3");
        title.textContent = challenge.title;

        const meta = document.createElement("div");
        meta.className = "challenge-meta";

        const status = document.createElement("span");
        status.className = `status ${challenge.status === "진행중" ? "ongoing" : "finished"}`;
        status.textContent = challenge.status;

        const dates = document.createElement("span");
        dates.className = "dates";
        dates.textContent = challenge.dates;

        meta.appendChild(status);
        meta.appendChild(dates);

        info.appendChild(title);
        info.appendChild(meta);

        card.appendChild(img);
        card.appendChild(info);

        challengeList.appendChild(card);
    });
});