# Automated YouTube Feedback Script
Have you ever loaded up YouTube just to be met with a wall of red watch bars and a full page of recommendations of videos you have already watched (either partially or fully)? 
   
This is a minimal and simple script to automate the process of sending feedback to YouTube that "I've already watched the video" on every video that YouTube recommends you that you've already watched.

## Getting Started
### Manual Execution
1. Head to `https://www.youtube.com` - Make sure you're logged in!
1. Press `F12` - Switch to your `Console` tab in your selected browser.
1. Paste the content of the script into your console and press `Enter`.
1. When you've submitted enough feedback requests, or are bored waiting, refresh the page to finish the script.

### Tampermonkey Installation
1. Select `Create a new script`
1. Paste in the contents from the included `.js` file.
1. Head to `https://www.youtube.com` - Make sure you're logged in!
1. When you've submitted enough feedback requests, or are bored waiting, feel free to disable the script.

NB: I've not submitted this script for one-click install or listing on GreaseMonkey/Tampermonkey forums, feel free to install locally.

## Common Questions
>**Q. What exactly does this script do?**   
>**A.** The script will run through every video that displays the watch bar on the YouTube homepage, select "Not Interested", select "I've already watched the video" and submit the feedback to YouTube.

>**Q. Why does this script exist?**   
>**A.** As a frequent listener of music through YouTube rather than the separate YouTube Music platform, songs that I listen to can often be included repeatedly within one of the "Mix" or "My Mix" playlists that are generated. By doing this, YouTube thinks you suddenly love watching every video in every genre, again and again, so fills your recommended page with regurgitated content. YouTube support was useless and just said to submit a feedback request; so I made a script to spam it.

>**Q. Does the script work?**   
>**A.** I, unfortunately, cannot guarantee that it works with 100% certainty, but at least in my case, by spamming approx 30 feedback requests within an hour reduced the number of videos being recommended that I'd already watched very noticeably.

>**Q. Do I need this script?**   
>**A.** Probably not.

## Limitations
- Zero to no testing.
   - This was a super quick script for me to run myself in Chrome, I've not performed any kind of testing for any other browsers, YouTube interfaces outside of the UK, or on different operating systems. Sorry!
