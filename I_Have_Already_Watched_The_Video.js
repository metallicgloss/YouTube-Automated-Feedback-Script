// ==UserScript==
// @name         YouTube - I've Already Watched The Video!
// @namespace    https://github.com/metallicgloss
// @website      https://github.com/metallicgloss/YouTube-Automated-Feedback-Script
// @version      1.0
// @description  YouTube recommendations are trash. A very simple script to automate the "I've Already Watched The Video" feedback messages in an attempt to improve recommendations when they get stale.
// @author       MetallicGloss
// @match        https://www.youtube.com/
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(async function() {
    'use strict';

    // Average wait time - wait for content to load and playbars to generate.
    await new Promise(r => setTimeout(r, 10000));

    // Get list of all current videos with partial or complete playbar.
    var videos_watched = document.getElementsByTagName('ytd-thumbnail-overlay-resume-playback-renderer');

    // Define blank variables - required by Tampermonkey.
    var dropdown_menu_not_interest = ""
    var video_count = 0

    // The purpose of the script is to just spam YouTube with the feedback. Only process max of 25 to avoid you wasting too much time.
    if(videos_watched.length > 25)
    {
        video_count = 25
    }
    else
    {
        video_count = videos_watched.length
    }


    // For each video, send feedback request to YouTube - execute through user interface instead of tapping directly into command to prevent breakage on update or authentication problems.
    for(var i = 0; i < video_count; i++)
    {
        // Set target video.
        var target_video = videos_watched[i].parentElement.parentElement.parentElement.parentElement

        // Click on the three dots - dropdown menu,
        target_video.getElementsByClassName("yt-icon-button")[0].click()

        // After first dropdown button clicked, define the dropdown menu to be used for each video.
        if(dropdown_menu_not_interest == "") {
            await new Promise(r => setTimeout(r, 500));

            // Define popup container handler.
            var popup_container = document.getElementsByTagName('ytd-popup-container')[0]

            // Define dropdown menu not interested button.
            dropdown_menu_not_interest = popup_container.getElementsByTagName('ytd-menu-service-item-renderer')[3];
        }

        // After dropdown action pressed, brief delay for UI to load - click on the "Not Interested Option."
        await new Promise(r => setTimeout(r, 1000));
        dropdown_menu_not_interest.click()

        // In the new content displayed for the target video, select "Tell Us Why" option.
        target_video.parentElement.getElementsByTagName('ytd-button-renderer')[1].click()

        // Brief wait while popup box generates.
        await new Promise(r => setTimeout(r, 1000));

        // Check "I've already watched this video option"
        popup_container.getElementsByTagName('ytd-dismissal-reason-text-renderer')[0].getElementsByTagName('paper-checkbox')[0].click()

        // Submit feedback request.
        popup_container.getElementsByTagName('ytd-button-renderer')[1].getElementsByTagName('paper-button')[0].click()
    }
})();
