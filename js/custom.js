jQuery(document).ready(function($){
    var kpText = "This was the first project I worked on. This was a static website that I built for a club that I’m part of in my school. I used Bulma as my front-end framework and made it purely in HTML/CSS/JavaScript";
    var smText = "This was my most recent, hardest and robust project I worked on. It’s a social media platform called Butter. Users can sign up by inputting their name, date of birth and such. Each user has their own page where they can update their info such as interests, favorite movies, and even upload a profile picture! As per any social media platform, you can create posts. You can also view other people’s pages and follow them to see their most recent posts to keep up with what everyone is up to. This project utilized everything I learned and taught me a lot from things like being able to search for users, and async requests.";
    var chText = "This is a chat application I built to try working with Socket.io. You can create an account with a handle, and log in to see who is online and chat with people! I learned a lot from this project as I had to keep track of each user that’s logged in which was very new to me. There were also multiple issues that I had to solve like not having the same users name show up two times when there are multiple tabs open";
    var blText = "This is the first full stack application I built. It’s a fully functional blog platform with a custom content management system. The back-end is powered by NodeJS with the help of Express for routing. There’s also a MongoDB database holding all the blog posts to allow for updating and retrieving the posts. I also included a user authentication step for the admin so I can log into the blog and edit it however I please for all my users to see";
    var poText = "This is the site you’re currently on! I used Bulma as my front-end framework for this website as well. However comparing to the last time I built a static website, I can say for sure my code has become much cleaner!";
    var emText = "Maybe the next project I work on could be yours!";
    var $toggle = $('.navbar-burger');
    var $menu = $('.navbar-menu');
    var $title = $('.project-title');
    var $desc = $('#project-description');
    var $pPage = $('#pPage');
    var $sCode = $('#sCode');

    $toggle.click(function() {
        $toggle.toggleClass('is-active');
        $menu.toggleClass('is-active');
    });

    $('.projImg').click(function(){
        $('.darken').removeClass('darken');
        if($(".invis")[0]){
            $pPage.removeClass('invis');
            $sCode.removeClass('invis');
            console.log("hi")
        }        
        $(this).addClass('darken');
    });

    $('#proj1').click(function(){
        $title.text("KiPow website");
        $desc.text(kpText);
        $pPage.attr('href', 'http://kipowcanada.com/');
        $sCode.attr('href', 'https://github.com/VihangaR/VihangaR.github.io');
    });
    $('#proj2').click(function(){
        $title.text("My portoflio website");
        $desc.text(poText)
        $pPage.addClass('invis');
        $sCode.attr('href', 'https://github.com/VihangaR/Portolio');
    });
    $('#proj3').click(function(){
        $title.text("Blog platform");
        $desc.text(blText)
        $pPage.attr('href', 'http://www.dreamprojects.club/blogs');
        $sCode.attr('href', 'https://github.com/VihangaR/BlogPlatform');
    });
    $('#proj4').click(function(){
        $title.text("Chat app");
        $desc.text(chText)
        $pPage.addClass('invis');
        $sCode.attr('href', 'https://github.com/VihangaR/Chat_Application');
    });
    $('#proj5').click(function(){
        $title.text("Social media platform");
        $desc.text(smText)
        $pPage.attr('href', 'http://whispering-cove-71463.herokuapp.com/');
        $sCode.attr('href', 'https://github.com/VihangaR/Social_Media');
    });
    $('#proj6').click(function(){
        $title.text("More to come");
        $desc.text(emText)
        $pPage.addClass('invis');
        $sCode.addClass('invis');
    });

    // Smooth Scrolling
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
            ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                scrollTop: target.offset().top
                }, 1000, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                } else {
                    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                };
                });
            }
            }
        });
});