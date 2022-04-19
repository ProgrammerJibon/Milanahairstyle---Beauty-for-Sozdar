(()=>{    
    loadLink('/json.php', [['home_page','get'],['bool','false']]).then(result=>{
        remove_loader();
        if(!result.home_page){
            notification("Something went wrong... Check your connection...", "red");
            return false;
        }
        men_prices = result.men_prices;
        women_prices = result.women_prices;
        info = result.home_page;
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
                    left_header_logo.src = info.logo;
                    left_header_logo.onclick=()=>{setState("/", info.title);};
                right_header = create("div", "right_header");
                header.appendChild(right_header);
                    right_header_nav = create("div", "right_header_nav");
                    right_header.appendChild(right_header_nav);
                        right_header_nav_item = create("div", "right_header_nav_item");
                        right_header_nav_item.innerHTML = "HOME";
                        right_header_nav.appendChild(right_header_nav_item);
                        right_header_nav_item.onclick=()=>{setState("/", info.title);};
                        
                        right_header_nav_item = create("div", "right_header_nav_item");
                        right_header_nav_item.innerHTML = "Book an appointment";
                        right_header_nav.appendChild(right_header_nav_item);
                        right_header_nav_item.onclick=()=>{setState("/booking", info.title + " - Booking")};
                        
                        right_header_nav_item = create("div", "right_header_nav_item");
                        right_header_nav_item.innerHTML = "Contact";
                        right_header_nav.appendChild(right_header_nav_item);
                        right_header_nav_item.onclick=()=>{setState("/contact", info.title + " - Contact us")};
        footer = create("footer");
        contents.appendChild(footer);
            footer_navigations = create("div", "footer_navigations");
            footer.appendChild(footer_navigations);
                fnav_i1 = create("div", "footer_nav_item");
                footer_navigations.appendChild(fnav_i1);
                    fnav_title = create("h3", "fnav_title");
                    fnav_title.innerHTML = info.title;
                    fnav_i1.appendChild(fnav_title);

                    fnav_item = create("div", "fnav_item");
                    fnav_item.innerHTML = '<i class="fa-solid fa-location-dot"></i>' + info.address;
                    fnav_i1.appendChild(fnav_item);

                    fnav_item = create("div", "fnav_item link");
                    fnav_item.innerHTML = '<i class="fa-solid fa-envelope"></i> '+info.email;
                    fnav_i1.appendChild(fnav_item);
                    fnav_item.onclick=()=>{tab(`mailto:${info.email}`);}

                    fnav_item = create("div", "fnav_item link");
                    fnav_item.innerHTML = '<i class="fa-solid fa-phone"></i> '+info.phone;
                    fnav_i1.appendChild(fnav_item);
                    fnav_item.onclick=()=>{tab(`tel:${info.phone}`);}
                fnav_i2 = create("div", "footer_nav_item");
                footer_navigations.appendChild(fnav_i2);
                    fnav_title = create("h3", "fnav_title");
                    fnav_title.innerHTML = "Opening hours";
                    fnav_i2.appendChild(fnav_title);

                    fnav_item = create("div", "fnav_item");
                    fnav_item.innerHTML = '<i class="fa-solid fa-clock"></i> ';
                    info.hours.split("\n").forEach(item=>{
                        fnav_item.innerHTML = `${fnav_item.innerHTML+item}</br>`;
                    });
                    fnav_i2.appendChild(fnav_item);

                    fnav_item = create("div", "fnav_item");
                    fnav_i2.appendChild(fnav_item);
                        social = create("a", "social");
                        social.innerHTML = '<i class="fa-brands fa-facebook"></i>';
                        fnav_item.appendChild(social);
                        social.href = info.facebook;
                        social.target = "_blank"

                        social = create("a", "social");
                        social.innerHTML = '<i class="fa-brands fa-twitter"></i>';
                        fnav_item.appendChild(social);
                        social.href = info.twitter;
                        social.target = "_blank"

                        social = create("a", "social");
                        social.innerHTML = '<i class="fa-brands fa-instagram"></i>';
                        fnav_item.appendChild(social);
                        social.href = info.instagram;
                        social.target = "_blank"

                        social = create("a", "social");
                        social.innerHTML = '<i class="fa-brands fa-youtube"></i>';
                        fnav_item.appendChild(social);
                        social.href = info.youtube;
                        social.target = "_blank"

                fnav_i3 = create("div", "footer_nav_item");
                footer_navigations.appendChild(fnav_i3);
                    fnav_title = create("h3", "fnav_title");
                    fnav_title.innerHTML = "Links";
                    fnav_i3.appendChild(fnav_title);

                    right_header_nav_item = create("div", "fnav_item link");
                    right_header_nav_item.innerHTML = '<i class="fa-solid fa-house"></i> Home';
                    fnav_i3.appendChild(right_header_nav_item);
                    right_header_nav_item.onclick=()=>{setState("/", info.title);};
                    
                    right_header_nav_item = create("div", "fnav_item link");
                    right_header_nav_item.innerHTML = '<i class="fa-solid fa-calendar-check"></i> Book an appointment';
                    fnav_i3.appendChild(right_header_nav_item);
                    right_header_nav_item.onclick=()=>{setState("/booking", info.title + " - Booking")};
                    
                    right_header_nav_item = create("div", "fnav_item link");
                    right_header_nav_item.innerHTML = '<i class="fa-solid fa-id-card"></i> Contact';
                    fnav_i3.appendChild(right_header_nav_item);
                    right_header_nav_item.onclick=()=>{setState("/contact", info.title + " - Contact us")};

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
                cr_text.innerHTML = `All rights reserved by <a href="/">${info.title}</a>. Powered by <a href="https://www.instagram.com/ssozdar00/">Sozdar Mohammad</a>.`       
            contents.style.paddingBottom = footer.clientHeight+"px";
            window.addEventListener("resize", ()=>{
                contents.style.paddingBottom = footer.clientHeight+"px";
            })
            /* default end*/

            /* .home_page started */             
            top_banner = create("div", "top_banner");
            home_page.appendChild(top_banner);
            top_banner.style = `background: url("${info.top_banner_men}");background-position: center;background-repeat: no-repeat;background-size: cover;background-attachment: fixed;`;
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
                    tbr_header_3.onclick=()=>{setState("/booking", info.title+" - Booking")};
                    top_banner_right.appendChild(tbr_header_3);

                gender_selections = create("div", "gender_selections");
                top_banner.appendChild(gender_selections);
                    men = create("button", "gender active");
                    gender_selections.appendChild(men);
                    men.innerHTML = "MEN";
                    women = create("button", "gender");
                    gender_selections.appendChild(women);
                    women.innerHTML = "WOMEN";

            prices_title = create("h2", "prices_title");
            home_page.appendChild(prices_title);
            prices_title.innerHTML = "pricing - men";
            prices = create("div", "price_lists");
            home_page.appendChild(prices);
                beside_prices_pic = create("div", "beside_prices_pic");
                prices.appendChild(beside_prices_pic);
                    beside_prices_img = create("img");
                    beside_prices_pic.appendChild(beside_prices_img);
                    beside_prices_img.src = info.beside_prices;
                price_list_men = create("div", "price_list");
                prices.appendChild(price_list_men);
                    men_prices.forEach(men_price=>{
                        var price_list_item = create("div", "price_list_item");
                        price_list_men.appendChild(price_list_item);
                            price_list_item_name = create("div", "price_list_item_name");
                            price_list_item.appendChild(price_list_item_name);
                            price_list_item_name.innerHTML = men_price.name;
                            
                            price_list_item_price = create("div", "price_list_item_price");
                            price_list_item.appendChild(price_list_item_price);
                            price_list_item_price.innerHTML = men_price.price;
                    });
                price_list_women = create("div", "price_list");
                price_list_women.style.display = "none";
                prices.appendChild(price_list_women);
                    women_prices.forEach(men_price=>{
                        var price_list_item = create("div", "price_list_item");
                        price_list_women.appendChild(price_list_item);
                            price_list_item_name = create("div", "price_list_item_name");
                            price_list_item.appendChild(price_list_item_name);
                            price_list_item_name.innerHTML = men_price.name;
                            
                            price_list_item_price = create("div", "price_list_item_price");
                            price_list_item.appendChild(price_list_item_price);
                            price_list_item_price.innerHTML = men_price.price;
                    });
                    men.onclick=()=>{
                        price_list_men.style.display = "flex";
                        price_list_women.style.display = "none";
                        prices_title.innerHTML = "Pricing - men";

                        men.classList.add("active");
                        women.classList.remove("active");
                        tbr_header_1.innerHTML = "Men's styling";
                        tbr_header_2.innerHTML = `MEN'S HAIRSTYLES
                        FOR ALL AGE`;
                        top_banner.style = `background: url("${info.top_banner_men}");background-position: center;background-repeat: no-repeat;background-size: cover;background-attachment: fixed;`;
                    }
                    women.onclick=()=>{
                        price_list_men.style.display = "none";
                        price_list_women.style.display = "flex";
                        prices_title.innerHTML = "Pricing - women";

                        men.classList.remove("active");
                        women.classList.add("active");
                        tbr_header_1.innerHTML = "Womens's styling";
                        tbr_header_2.innerHTML = `Womens'S HAIRSTYLES
                        FOR ALL AGE`;
                        top_banner.style = `background: url("${info.top_banner_women}");background-position: center;background-repeat: no-repeat;background-size: cover;background-attachment: fixed;`;
                    }
                    
    });
})();