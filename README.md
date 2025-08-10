# Q1 Coursework Daniel Victor-Sajowa
## Setup 




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