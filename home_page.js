(()=>{    
    loadLink('/json.php', [['home_page','get'],['bool','false']]).then(result=>{
        remove_loader();
        if(!result.home_page){
            notification("Something went wrong... Check your connection...", "red");
            return false;
        }
        result = result.home_page;
        console.log(result);
        contents = document.querySelector("div.contents");
            top_header = create("div", "top_header");
                left_header = create("div", "left_header");
                    left_header_logo = create("img", "left_header_logo");
                    left_header.appendChild(left_header_logo);
                    left_header_logo.src = result.logo;
                right_header = create("div", "right_header");
                    right_header_nav = create("div", "right_header_nav");
                    right_header.appendChild(right_header_nav);
                        right_header_nav_item = create("div", "right_header_nav_item");
                        right_header_nav_item.innerHTML = "HOME";
                        right_header_nav.appendChild(right_header_nav_item);
                        right_header_nav_item.onclick=()=>{href("/");};
                        
                        right_header_nav_item = create("div", "right_header_nav_item");
                        right_header_nav_item.innerHTML = "Book an appointment";
                        right_header_nav.appendChild(right_header_nav_item);
                        right_header_nav_item.onclick=()=>{href("/booking")};
                        
                        right_header_nav_item = create("div", "right_header_nav_item");
                        right_header_nav_item.innerHTML = "Contact";
                        right_header_nav.appendChild(right_header_nav_item);
                        right_header_nav_item.onclick=()=>{href("/contact")};

            top_header.appendChild(left_header);
            top_header.appendChild(right_header);
        contents.appendChild(top_header);
    });
})();