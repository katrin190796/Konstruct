let menu_links = document.querySelectorAll(".menu_flex_item");
for (let i = 0; i < menu_links.length; i++) {
    menu_links[i].onclick = function () {
        document.getElementById(menu_links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
    }
}

let links = document.querySelectorAll(".links_list_item");
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
    }
}

document.getElementById("scroll_down_button").onclick = function () {
    document.getElementById("links_and_contacts").scrollIntoView({behavior: "smooth"});
}
