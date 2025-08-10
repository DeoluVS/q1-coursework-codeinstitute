# Q1 Coursework Daniel Victor-Sajowa
## Setup 
```
git clone https://github.com/DeoluVS/q1-coursework-codeinstitute.git
```




## Purpose for the Website
The main purpose for the website is to showcase my mum's talents, discography and videos. Also, being a good hotspot for users to gain access to the multiple forms of content she has created over the years which should be accessible through the music and videos pages. I have also added a form in which users can fill in a form if they would like to contact her. 

The website was made as my mum asked me within the past few months that she wanted me to make her a website. This is due to her old website shutting down without her knowledge and the host of the website seemed to have lost contact. I wanted to step up and show off all the amazing additions she has made to the gospel scene in the UK. 

## Checks for website consistency 
When making the website I had to make sure that I adhered to a certain structure that would give a user a favourable experience when viewing the website. First of all when making the website, I decided to choose colours that would be visible to the user as best as possible whilst keeping in line with the stakeholders wishes. As my mum loves purples and blues I used purple white and the occasional blues as the base colours for the website. Here's the **`index.html`** page for reference: 
![Index.html](/important-pics/index-html-screenshot.png)

In my attempts to meet both good accessibility standards and stakeholder's wants I made a distinguished difference between the background and the text and main colours. Aside from the header, buttons and speech bubble on top of the image, the rest of the webpage(s) use black and white and whitesmoke for better readability. 




When I had finished the website, I passed the HTML and CSS through the w3validator website and it passed and said there were no errors present. Here is the proof for all of it working:

### File Validating (HTML and CSS files)
#### CSS File 
![CSS File Select](/important-pics/style-css-file-select.png)
![CSS Pass Check](/important-pics/css-accepted.png)
I passed it through and it was a success after I had made a few changes like accidental duplicate instances of assigning css style, naming a background-color something that doesn't exist and some unused css styles.

#### Index.html
I made some changes around the organisation of the elements and added some alt text to images that were missing it along the way. I also placed the script file and the initialisation of it in the correct place in the head rather than at the bottom of the elements. Here are the screenshots:
![Index html file select](/important-pics/index-html-file-select.png)
![Index html Pass check](/important-pics/index-html-success.png)

#### About.html
There weren't many errors to account for once I globalised all the other errors in **`index.html`** so it passed without issue. Here are the screenshots:
![About html file select](/important-pics/about-html-file-select.png)
![About html success](/important-pics/about-html-sucess.png)

#### Contact.html
I did change some inputs as the contents of the form was grabbed from the bootstrap website and I hadn't changed the ids to better match the inputs being shown. So, I made that change and the webpage passed the test. Here are the screenshots:
![Contact html file select](/important-pics/contact-html-file-select.png)
![Contact html success](/important-pics/contact-html-success.png)

#### Music.html
The music webpage had no errors in it as all the ids, classes and images had their problems fixed after the initial issue in **`index.html`**. So, all the images had the correct alternative titles added and organised in a way that would be responsive in multiple screen sizes. Here are the screenshots:
![Music html file select](/important-pics/music-html-file-select.png)
![Music html success](/important-pics/music-html-success.png)

#### Videos.html
This webpage had one small issue when it ran through the W3 Validator. Apparently, there was some obselete code included in the **`iframe`**. This was due to the fact that I had used the embed feature from YouTube to add the videos to the website. The way I resolved it was to just follow the guidance given. I removed the **`frameboarder`** attribute and it managed to pass without issue. Here are the screenshots:
![Videos html file select](/important-pics/videos-html-file-select.png)
![Videos html success](/important-pics/videos-html-success.png)



## Learning Outcome 2

![Proof of Flow](/important-pics/proof-of-flow-of-website.mp4)
Download video for Proof of flow using this path:

**`/important-pics/proof-of-flow-of-website.mp4`**

There are a few things that need to be shown for this website to be up to par and I will show you all the steps taken to ensure that all requirements are met. 

### L2.1 - Website with 3 Webpages
So I ensured that there was 5 webpages connected to this website which are:
- **`index.html`**
- **`about.html`**
- **`contact.html`**
- **`music.html`**
- **`videos.html`**

#### **Index.html**
This is the base page for all users visiting the website. It shows a quick taste of what the user will experience when using the website with short description of Shola Victor-Sajowa, her singles, albums and songs coming soon to entice the user to stay tuned to her music.
![Index html 1](/important-pics/index-html1.png)
![Index html 2](/important-pics/index-html2.png)
![Index html 3](/important-pics/index-html3.png)
![Index html 4](/important-pics/index-html4.png) 

#### **About.html**
This webpage gives a more in depth biography of Shola Victor-Sajowa's life, accolades and contributions to Gospel as well as a more in depth description of her family life and life as a gospel artist. It also denotes her experiences coaching people as a health coach and as an artist in gospel music. 
![About html 1](/important-pics/about-html1.png)
![About html 2](/important-pics/about-html2.png)

#### **Contact.html**
This webpage is a form used to allow for enquiries to Shola Victor-Sajowa. There is a dropdown menu with three query types being: 
- Fitness Coach: Enquiries in regards to fitness coaching and/or advice
- Vocal Training: Enquiries in relation to vocal training and ministering as a gospel artist
- Guest Artist: Enquiries on asking Shola Victor-Sajowa to be a Gospel Artist at an event of some kind.
The webpage also has included some form validation that doesn't allow for the user to complete the form without every field being populated. Here are the pictures for proof:

![Contact html 1](/important-pics/contact-html-1.png)
![Contact html 2](/important-pics/contact-html2.png)
![Contact html 3](/important-pics/contact-html3.png)

#### **Music.html**
This webpage shows the different links to the different streaming platforms that Shola Victor-Sajowa's music can be found. This is shown via the 4 streaming platform icons that are most commonly used to access her music. Here are the screen shots:
![Music html 1](/important-pics/music-html-1.png)

#### **Videos.html**
This webpage shows the different music videos that she has made over the years and is playable on the website. There's also a link to her YouTube channel in the introduction of the webpage and an encouragement to subscribe to the YouTube channel. Here are the screenshots:
![Videos html 1](/important-pics/videos-html1.png)
![Videos html 2](/important-pics/videos-html2.png)
![Videos html 3](/important-pics/videos-html3.png)
![Videos html 4](/important-pics/videos-html4.png)

### L2.2 Picture Resolution 
So for all pictures that are icon sized they are all at minimum 400x400 pixels just to ensure that even when sized down or sized up they will keep at high resolution. I have also ensured that all pictures are responsive by adding the style **`width: 100%;`**, **`height: 100%;`**, **`max-width: 500px;`** and the max-width will depend on what container it is in and it would reduce the chance of pictures growing too big or stretching too much that it looks unappealing. Here's a video of checking through all the images:

![Image folder](/important-pics/image-folder.mp4)

If the video doesn't show please navigate to the **`/important-pics`** folder and find the **`image-folder.mp4`** file and it should display the fact that the images are at least 400x400 pixels excluding icons which don't resize.

### L2.3 External Links 
With every single external link I made sure to add the **`target="_blank"`** attribute to ensure that a new tab is opened every time an external link is used. For example, on the `music.html` page, whenever you click on the icons to open up Shola Victor-Sajowa's music on Spotify it would open up spotify on a new tab.
![Music.html page](/important-pics/external-link-check.png)
![External Link](/important-pics/external-link-check2.png)

This also works for all links in the footer that links to any of Shola Victor-Sajowa's social media pages. 

### L2.4 Responsive Design
For this one I ensured that I started from the mobile screen size to make it easier to know how to arrange all of the elements on the web page. One of the most important things to work on was the navigation. I tailored the elements to shift and change the way they are arranged in relation to how close they are to expanding more than all other elements. 

#### Full Screen Homepage
![Intro section](/important-pics/full-screen-homepage.png)

#### Medium Screen Homepage
![Intro Section Medium](/important-pics/medium-sized-homepage.png)

#### Small Screen Homepage
![Intro Section Small](/important-pics/phone-size-homepage.png)

#### Full Screen Singles
![Single FullScreen](/important-pics/singles-container.png)

#### Medium Screen Singles
![Singles Medium Screen](/important-pics/medium-screen-singles.png)

#### Small Screen Singles
![Singles Small Screen](/important-pics/singles-phone-size.png)

#### Full Screen Snippets
![Snippets Full Screen](/important-pics/fullscreen-snippets.png)

#### Medium Screen Snippets
![Medium Screen Snippets](/important-pics/medium-screen-snippets.png)

#### Small Screen Snippets
![Small Screen Snippets](/important-pics/snippets-phone-size.png)

#### Navigation Medium to Large
![Full Screen Navigation](/important-pics/full-screen-nav.png)
![Medium Screen Navigation](/important-pics/medium-screen-nav.png)

The Navigation will remain in a horizontal fashion whilst the screen size is above 700px in width. Anything below would make the nav bar switch to mobile size menu.

#### Navigation Medium to Small
![Medium Screen Navigation under 700](/important-pics/medium-screen-under700px.png)
![Small Screen Navigation](/important-pics/small-screen-hamburger-menu.png)

When on the small to medium screen when the hamburger menu appears it works like the image above where the menu shows when the hamburger menu is clicked. I used **`display: none`** when the button hasn't been toggled. Then when the button is toggled, I use **`display: block`** to then show the menu. If I were to do this website again, I would look into modals as they have more room to add transitions and animations for a better more appealing UI/UX experience. 

### JavaScript functions
There is one function that I made in JavaScript that would allow for a togglable menu. It reveals and hides a menu, specifically when the screen size is at the right width (mostly for small to medium screens. )

```
function showMenu(){
    const element = document.querySelector('.collapse-navbar');
    const isHidden = window.getComputedStyle(element).display === 'none';
    if(isHidden === true){
        element.style.display = 'block'
    }else{
        element.style.display = 'none'
    }
}
```

The way this function works is by finding the class called `.collapse-navbar` checking whether it is hidden by using **===** which checks if the value is the same and its the same type. If it is true that the statement of collapse-navbar is not visible it will assign **isHidden** the value true. If it is true then the element in question will be revealed. And if the function is activated again, the if statement will assess whether the element is visible or not. Since, it was just revealed then the menu will be hidden again. 