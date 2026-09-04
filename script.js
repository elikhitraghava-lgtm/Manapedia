function searchArticle() {
    const input = document.getElementById("search").value.trim();

    if (input === "") {
        alert("దయచేసి ఒక విషయం పేరు టైప్ చేయండి.");
        return;
    }

    window.location.href =
        "article.html?title=" + encodeURIComponent(input);
}
