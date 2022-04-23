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
        t = result.transalations;
        lang = result.lang;
        gallery_images = result.gallery_images;
        console.log(result);
        contents = document.querySelector("div.contents");
            header = create("header");
            contents.appendChild(header);
            home_page = create("div", "home_page");
            contents.appendChild(home_page);
            booking = create("div", "booking");
            contents.appendChild(booking);
            contact = create("div", "contact");
            contents.appendChild(contact);
            home_page.style.display = "none";
            booking.style.display = "none";
            contact.style.display = "none";
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
                        right_header_nav_item.innerHTML = t[42][lang]; // home
                        right_header_nav.appendChild(right_header_nav_item);
                        right_header_nav_item.onclick=()=>{setState("/", info.title);};
                        
                        right_header_nav_item = create("div", "right_header_nav_item");
                        right_header_nav_item.innerHTML = t[74][lang];//"Book an appointment";
                        right_header_nav.appendChild(right_header_nav_item);
                        right_header_nav_item.onclick=()=>{setState("/booking", info.title + " - Booking")};
                        
                        right_header_nav_item = create("div", "right_header_nav_item");
                        right_header_nav_item.innerHTML = t[10][lang];//"Contact";
                        right_header_nav.appendChild(right_header_nav_item);
                        right_header_nav_item.onclick=()=>{setState("/contact", info.title + " - Contact us")};
                        
                        right_header_nav_item = create("div", "right_header_nav_item change_lang");
                        right_header_nav.appendChild(right_header_nav_item);
                            language_icons = create("img");
                            right_header_nav_item.appendChild(language_icons);
                            language_icons.src = `/flags/${lang}.png`;

                            language_icons_down_arrow = create("i", "fa-solid fa-chevron-down");
                            right_header_nav_item.appendChild(language_icons_down_arrow);

                            languages_list = create("div", "languages_list");
                            right_header_nav_item.appendChild(languages_list);
                            Object.keys(t[1]).forEach(t_langs=>{
                                if(t_langs == lang){
                                    return;
                                }
                                languages_list_item = create("div" , "language_item");
                                languages_list_item.onclick=()=>{
                                    href(`?language=${t_langs}&next=${window.location.href}`);
                                }
                                languages_list.appendChild(languages_list_item);
                                    languages_list_item_flag = create("img");
                                    languages_list_item.appendChild(languages_list_item_flag);
                                    languages_list_item_flag.src = `/flags/${t_langs}.png`;

                                    languages_list_item_span = create("span");
                                    languages_list_item.appendChild(languages_list_item_span);
                                    languages_list_item_span.innerHTML = t[1][t_langs];
                            });
            booking.style.paddingTop = header.clientHeight+"px";;
            contact.style.paddingTop = header.clientHeight+"px";;
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
                    fnav_title.innerHTML = t[75][lang];//"Opening hours";
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
                        social.target = "_blank";

                fnav_i3 = create("div", "footer_nav_item");
                footer_navigations.appendChild(fnav_i3);
                    fnav_title = create("h3", "fnav_title");
                    fnav_title.innerHTML = t[87][lang];//"Links";
                    fnav_i3.appendChild(fnav_title);

                    right_header_nav_item = create("div", "fnav_item link");
                    right_header_nav_item.innerHTML = '<i class="fa-solid fa-house"></i> '+t[42][lang]; //Home';
                    fnav_i3.appendChild(right_header_nav_item);
                    right_header_nav_item.onclick=()=>{setState("/", info.title);};
                    
                    right_header_nav_item = create("div", "fnav_item link");
                    right_header_nav_item.innerHTML = '<i class="fa-solid fa-calendar-check"></i> '+t[74][lang];//Book an appointment';
                    fnav_i3.appendChild(right_header_nav_item);
                    right_header_nav_item.onclick=()=>{setState("/booking", info.title + " - Booking")};
                    
                    right_header_nav_item = create("div", "fnav_item link");
                    right_header_nav_item.innerHTML = '<i class="fa-solid fa-id-card"></i> '+t[75][lang];//Contact';
                    fnav_i3.appendChild(right_header_nav_item);
                    right_header_nav_item.onclick=()=>{setState("/contact", info.title + " - Contact us")};

                    right_header_nav_item = create("div", "fnav_item link");
                    right_header_nav_item.innerHTML = '<i class="fa-solid fa-screwdriver-wrench"></i> '+t[76][lang];//Control panel';
                    fnav_i3.appendChild(right_header_nav_item);
                    right_header_nav_item.onclick=()=>{href("/admin")};

                fnav_i4 = create("form", "footer_nav_item");
                fnav_i4.onsubmit=()=>{return false}
                footer_navigations.appendChild(fnav_i4);
                    fnav_title = create("h3", "fnav_title");
                    fnav_title.innerHTML = t[77][lang];//"Stay up to date";
                    fnav_i4.appendChild(fnav_title);

                    fnav_item1 = create("input", "fnav_item newsletter_subscription");
                    fnav_item1.type = "email";
                    fnav_item1.required = true;
                    fnav_item1.placeholder = t[16][lang];//"Enter email address";
                    fnav_i4.appendChild(fnav_item1);

                    fnav_item2 = create("button", "fnav_item newsletter_subscription");
                    fnav_item2.type = "submit"
                    fnav_item2.innerHTML = t[71][lang];//"Subscribe to newsletter";
                    fnav_i4.appendChild(fnav_item2);
                    fnav_item2.onclick=()=>{
                        newsletterSubscription1(fnav_item1, fnav_item2)
                    }
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
                    tbr_header_1.innerHTML = t[78][lang];//"Men's styling";
                    top_banner_right.appendChild(tbr_header_1);
                    
                    tbr_header_2 = create("div", "tbr_header_2");
                    tbr_header_2.innerHTML = t[79][lang];//`MEN'S HAIRSTYLES FOR ALL AGE`;
                    top_banner_right.appendChild(tbr_header_2);
                    
                    tbr_header_3 = create("button", "tbr_header_3");
                    tbr_header_3.innerHTML = t[74][lang];//`Book an appointment`;
                    tbr_header_3.onclick=()=>{setState("/booking", info.title+" - Booking")};
                    top_banner_right.appendChild(tbr_header_3);

                gender_selections = create("div", "gender_selections");
                top_banner.appendChild(gender_selections);
                    men = create("button", "gender active");
                    gender_selections.appendChild(men);
                    men.innerHTML = t[50][lang];//"MEN";
                    women = create("button", "gender");
                    gender_selections.appendChild(women);
                    women.innerHTML = t[51][lang];//"WOMEN";

            prices_title = create("h2", "prices_title");
            home_page.appendChild(prices_title);
            prices_title.innerHTML = t[44][lang] + "-" + t[50][lang];//"pricing - men";
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
                        prices_title.innerHTML = t[44][lang] + "-" + t[50][lang];//"Pricing - men";

                        men.classList.add("active");
                        women.classList.remove("active");
                        tbr_header_1.innerHTML = t[78][lang];//"Men's styling";
                        tbr_header_2.innerHTML = t[79][lang];//`MEN'S HAIRSTYLES FOR ALL AGE`;
                        top_banner.style = `background: url("${info.top_banner_men}");background-position: center;background-repeat: no-repeat;background-size: cover;background-attachment: fixed;`;
                    }
                    women.onclick=()=>{
                        price_list_men.style.display = "none";
                        price_list_women.style.display = "flex";
                        prices_title.innerHTML = t[44][lang] + "-" + t[51][lang];//"Pricing - women";

                        men.classList.remove("active");
                        women.classList.add("active");
                        tbr_header_1.innerHTML = t[80][lang];//"Womens's styling";
                        tbr_header_2.innerHTML = t[81][lang];//`Womens'S HAIRSTYLES FOR ALL AGE`;
                        top_banner.style = `background: url("${info.top_banner_women}");background-position: center;background-repeat: no-repeat;background-size: cover;background-attachment: fixed;`;
                    }
            gallery = create("div")
                gallery_imgs = create("div", "photos-grid");
                home_page.appendChild(gallery_imgs);
                    gallery_images.forEach(img_row=>{
                        var img_item = create("div", "photos-item");
                        gallery_imgs.appendChild(img_item);
                            var photo = create("div", "photo");
                            img_item.appendChild(photo);
                                var photo_img = create("img");
                                photo.appendChild(photo_img);
                                photo_img.src = img_row.pic;
                                var setPhotoClick = photo.onclick=()=>{
                                    photo.classList.add("full_size");
                                    photo.style = `--top:${header.clientHeight}px`;
                                    photo.onclick=()=>{
                                        photo.classList.remove("full_size");
                                        photo.onclick = setPhotoClick;
                                    }
                                }
                                date = create("div", "date");
                                photo.appendChild(date);
                                    date_span = create("span");
                                    date.appendChild(date_span);
                                    date.innerHTML = img_row.took_date;
                                title = create("div", "title");
                                photo.appendChild(title);
                                    title_span = create("span");
                                    title.appendChild(title_span);
                                    title.innerHTML = img_row.title;
                    });
        /* start of booking table */
            table_books = create("form", "table_books");
            table_books.method = "POST";
            table_books.action = "/json.php";
            booking.appendChild(table_books);
                tb_title = create("h2", "tb_title");
                tb_title.innerHTML = t[74][lang];//"Book an apointment";
                table_books.appendChild(tb_title);

                tb_name_div = create("label", "input_label");
                tb_name_div.innerHTML = t[48][lang] + " & " + t[49][lang] ;//"Enter your full name";
                table_books.appendChild(tb_name_div);
                    tb_name_input = create("input");
                    tb_name_input.placeholder = "Jhon Doe";
                    tb_name_input.type = "text";
                    tb_name_input.required = true;
                    tb_name_div.appendChild(tb_name_input);

                tb_email_div = create("label", "input_label");
                tb_email_div.innerHTML = t[16][lang];//"Enter your email address";
                table_books.appendChild(tb_email_div);
                    tb_email_input = create("input");
                    tb_email_input.placeholder = "user@domain.com";
                    tb_email_input.type = "email";
                    tb_email_input.required = true;
                    tb_email_div.appendChild(tb_email_input);

                tb_phone_div = create("label", "input_label");
                tb_phone_div.innerHTML = t[15][lang];//"Enter your phone number";
                table_books.appendChild(tb_phone_div);
                    tb_phone_input = create("input");
                    tb_phone_input.placeholder = "+88016500XXXXX";
                    tb_phone_input.type = "number";
                    tb_phone_input.required = true;
                    tb_phone_div.appendChild(tb_phone_input);

                tb_date_div = create("label", "input_label");
                tb_date_div.innerHTML = t[82][lang];//"Select date";
                table_books.appendChild(tb_date_div);
                    tb_date_input = create("input");
                    tb_date_input.value = "2022-04-05";
                    tb_date_input.type = "date";
                    tb_date_input.required = true;
                    tb_date_div.appendChild(tb_date_input);

                tb_time_div = create("label", "input_label");
                tb_time_div.innerHTML = t[83][lang];//"Select time";
                table_books.appendChild(tb_time_div);
                    tb_time_input = create("input");
                    tb_time_input.value = "14:35";
                    tb_time_input.type = "time";
                    tb_time_input.required = true;
                    tb_time_div.appendChild(tb_time_input);

                tb_submit_div = create("label", "input_label");
                table_books.appendChild(tb_submit_div);
                    tb_submit_input = create("input");
                    tb_submit_input.type = "submit";
                    tb_submit_input.value = t[74][lang];//"Book an appointment";
                    tb_submit_div.appendChild(tb_submit_input);
                    table_books.onsubmit=()=>{
                        if(!validateEmail(tb_email_input.value)){
                            alert("Invalid email");
                            return false;
                        }
                        loadLink('/json.php', [['name', tb_name_input.value],['email', tb_email_input.value],['phone', tb_phone_input.value],['date', tb_date_input.value],['time', tb_time_input.value],['booking','true']]).then(result=>{
                            if (result.booking == true) {
                                table_books.innerHTML = "";
                                table_books.appendChild(tb_title);
                                tb_title.innerHTML = `${t[84][lang]}<br>${t[85][lang]}`;//"Booking has succesfully confirmed!<br>Please check your mail";
                            }else{
                                alert(t[86][lang]);//"Check all the fields...");
                            }
                        });
                        return false;
                    }
        // contact page started
        contacts = create("div", "contacts");
        contact.appendChild(contacts);
            conkat1 = create("div", "footer_nav_item");
            contacts.appendChild(conkat1);
                fnav_title = create("h1", "fnav_title");
                fnav_title.innerHTML = info.title;
                conkat1.appendChild(fnav_title);

                intro_video = create("video", "intro_video");
                intro_video.src = info.intro;
                conkat1.appendChild(intro_video);
                intro_video.loop = true;
                intro_video.preload = true;
                intro_video.autoplay = true;
                intro_video.controls = false;
                intro_video.muted = true;
                intro_video.poster = info.top_banner_men;
                intro_video.oncontextmenu=()=>{
                    intro_video.onclick();
                    return false;
                }
                intro_video.onclick=()=>{
                    if(intro_video.muted){
                        intro_video.muted = false;
                    }else{
                        intro_video.muted = true;
                    }
                }
                intro_video.oncanplay =(e)=>{
                    intro_video.play();
                }

                fnav_item = create("div", "fnav_item");
                fnav_item.innerHTML = '<i class="fa-solid fa-location-dot"></i>' + info.address;
                conkat1.appendChild(fnav_item);

                fnav_item = create("div", "fnav_item link");
                fnav_item.innerHTML = '<i class="fa-solid fa-envelope"></i> '+info.email;
                conkat1.appendChild(fnav_item);
                fnav_item.onclick=()=>{tab(`mailto:${info.email}`);}

                fnav_item = create("div", "fnav_item link");
                fnav_item.innerHTML = '<i class="fa-solid fa-phone"></i> '+info.phone;
                conkat1.appendChild(fnav_item);
                fnav_item.onclick=()=>{tab(`tel:${info.phone}`);}

                fnav_item = create("div", "fnav_item");
                fnav_item.innerHTML = '<i class="fa-solid fa-clock"></i> ';
                info.hours.split("\n").forEach(item=>{
                    fnav_item.innerHTML = `${fnav_item.innerHTML+item}</br>`;
                });
                conkat1.appendChild(fnav_item);

                fnav_item = create("div", "fnav_item");
                conkat1.appendChild(fnav_item);
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
        window.onpopstate();               
    });
})();