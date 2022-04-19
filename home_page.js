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
            header = create("header");
            contents.appendChild(header);
            home_page = create("div", "home_page");
            contents.appendChild(home_page);
                left_header = create("div", "left_header");
                header.appendChild(left_header);
                    left_header_logo = create("img", "left_header_logo");
                    left_header.appendChild(left_header_logo);
                    left_header_logo.src = result.logo;
                    left_header_logo.onclick=()=>{setState("/", result.title);};
                right_header = create("div", "right_header");
                header.appendChild(right_header);
                    right_header_nav = create("div", "right_header_nav");
                    right_header.appendChild(right_header_nav);
                        right_header_nav_item = create("div", "right_header_nav_item");
                        right_header_nav_item.innerHTML = "HOME";
                        right_header_nav.appendChild(right_header_nav_item);
                        right_header_nav_item.onclick=()=>{setState("/", result.title);};
                        
                        right_header_nav_item = create("div", "right_header_nav_item");
                        right_header_nav_item.innerHTML = "Book an appointment";
                        right_header_nav.appendChild(right_header_nav_item);
                        right_header_nav_item.onclick=()=>{setState("/booking", result.title + " - Booking")};
                        
                        right_header_nav_item = create("div", "right_header_nav_item");
                        right_header_nav_item.innerHTML = "Contact";
                        right_header_nav.appendChild(right_header_nav_item);
                        right_header_nav_item.onclick=()=>{setState("/contact", result.title + " - Contact us")};
        footer = create("footer");
        contents.appendChild(footer);
            footer_navigations = create("div", "footer_navigations");
            footer.appendChild(footer_navigations);
                fnav_i1 = create("div", "footer_nav_item");
                footer_navigations.appendChild(fnav_i1);
                    fnav_title = create("h3", "fnav_title");
                    fnav_title.innerHTML = result.title;
                    fnav_i1.appendChild(fnav_title);

                    fnav_item = create("div", "fnav_item");
                    fnav_item.innerHTML = '<i class="fa-solid fa-location-dot"></i>' + result.address;
                    fnav_i1.appendChild(fnav_item);

                    fnav_item = create("div", "fnav_item link");
                    fnav_item.innerHTML = '<i class="fa-solid fa-envelope"></i> '+result.email;
                    fnav_i1.appendChild(fnav_item);
                    fnav_item.onclick=()=>{tab(`mailto:${result.email}`);}

                    fnav_item = create("div", "fnav_item link");
                    fnav_item.innerHTML = '<i class="fa-solid fa-phone"></i> '+result.phone;
                    fnav_i1.appendChild(fnav_item);
                    fnav_item.onclick=()=>{tab(`tel:${result.phone}`);}
                fnav_i2 = create("div", "footer_nav_item");
                footer_navigations.appendChild(fnav_i2);
                    fnav_title = create("h3", "fnav_title");
                    fnav_title.innerHTML = "Opening hours";
                    fnav_i2.appendChild(fnav_title);

                    fnav_item = create("div", "fnav_item");
                    fnav_item.innerHTML = '<i class="fa-solid fa-clock"></i> ';
                    result.hours.split("\n").forEach(item=>{
                        fnav_item.innerHTML = `${fnav_item.innerHTML+item}</br>`;
                    });
                    fnav_i2.appendChild(fnav_item);

                    fnav_item = create("div", "fnav_item");
                    fnav_i2.appendChild(fnav_item);
                        social = create("a", "social");
                        social.innerHTML = '<i class="fa-brands fa-facebook"></i>';
                        fnav_item.appendChild(social);
                        social.href = result.facebook;
                        social.target = "_blank"

                        social = create("a", "social");
                        social.innerHTML = '<i class="fa-brands fa-twitter"></i>';
                        fnav_item.appendChild(social);
                        social.href = result.twitter;
                        social.target = "_blank"

                        social = create("a", "social");
                        social.innerHTML = '<i class="fa-brands fa-instagram"></i>';
                        fnav_item.appendChild(social);
                        social.href = result.instagram;
                        social.target = "_blank"

                        social = create("a", "social");
                        social.innerHTML = '<i class="fa-brands fa-youtube"></i>';
                        fnav_item.appendChild(social);
                        social.href = result.youtube;
                        social.target = "_blank"

                fnav_i3 = create("div", "footer_nav_item");
                footer_navigations.appendChild(fnav_i3);
                    fnav_title = create("h3", "fnav_title");
                    fnav_title.innerHTML = "Links";
                    fnav_i3.appendChild(fnav_title);

                    right_header_nav_item = create("div", "fnav_item link");
                    right_header_nav_item.innerHTML = '<i class="fa-solid fa-house"></i> Home';
                    fnav_i3.appendChild(right_header_nav_item);
                    right_header_nav_item.onclick=()=>{setState("/", result.title);};
                    
                    right_header_nav_item = create("div", "fnav_item link");
                    right_header_nav_item.innerHTML = '<i class="fa-solid fa-calendar-check"></i> Book an appointment';
                    fnav_i3.appendChild(right_header_nav_item);
                    right_header_nav_item.onclick=()=>{setState("/booking", result.title + " - Booking")};
                    
                    right_header_nav_item = create("div", "fnav_item link");
                    right_header_nav_item.innerHTML = '<i class="fa-solid fa-id-card"></i> Contact';
                    fnav_i3.appendChild(right_header_nav_item);
                    right_header_nav_item.onclick=()=>{setState("/contact", result.title + " - Contact us")};

                    right_header_nav_item = create("div", "fnav_item link");
                    right_header_nav_item.innerHTML = '<i class="fa-solid fa-screwdriver-wrench"></i> Control panel';
                    fnav_i3.appendChild(right_header_nav_item);
                    right_header_nav_item.onclick=()=>{href("/admin")};

                fnav_i4 = create("form", "footer_nav_item");
                fnav_i4.onsubmit=()=>{return false}
                footer_navigations.appendChild(fnav_i4);
                    fnav_title = create("h3", "fnav_title");
                    fnav_title.innerHTML = "Stay up to date";
                    fnav_i4.appendChild(fnav_title);

                    fnav_item = create("input", "fnav_item newsletter_subscription");
                    fnav_item.type = "email";
                    fnav_item.required = true;
                    fnav_item.placeholder = "Enter email address";
                    fnav_i4.appendChild(fnav_item);

                    fnav_item = create("button", "fnav_item newsletter_subscription");
                    fnav_item.type = "submit"
                    fnav_item.innerHTML = "Subscribe to newsletter";
                    fnav_i4.appendChild(fnav_item);
                    fnav_item.onclick
            copyrights = create("hr");
            footer.appendChild(copyrights);
            copyrights = create("div", "copyrights");
            footer.appendChild(copyrights);
                cr_text = create("div", "copyright_text");      
                copyrights.appendChild(cr_text);
                cr_text.innerHTML = `All rights reserved by <a href="/">${result.title}</a>. Powered by <a href="https://www.instagram.com/ssozdar00/">Sozdar Mohammad</a>.`       
            contents.style.paddingBottom = footer.clientHeight+"px";
            /* default end*/

            /* .home_page started */             
            top_banner = create("div", "top_banner");
            home_page.appendChild(top_banner);
            top_banner.style = `background: url("${result.top_banner}");background-position: center;background-repeat: no-repeat;background-size: cover;background-attachment: fixed;`;
                top_banner_right = create("div", "top_banner_right");
                top_banner.appendChild(top_banner_right);
                    tbr_header_1 = create("div", "tbr_header_1");
                    tbr_header_1.innerHTML = "Men's styling";
                    top_banner_right.appendChild(tbr_header_1);
                    
                    tbr_header_2 = create("div", "tbr_header_2");
                    tbr_header_2.innerHTML = `MEN'S HAIRSTYLES
                    FOR ALL AGE`;
                    top_banner_right.appendChild(tbr_header_2);
                    
                    tbr_header_3 = create("button", "tbr_header_3");
                    tbr_header_3.innerHTML = `Book an appointment`;
                    top_banner_right.appendChild(tbr_header_3);
                    
                    
    });
})();