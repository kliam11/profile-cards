<div id="top"></div>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<div align="center">

<h3 align="center">Web Profile Cards for GitHub</h3>

  <p align="center">
    Simple and stylish GitHub user profile cards to add to your personal website. 
    <br />
    <br />
    <a href="https://github.com/kliam11/profile-cards/issues">Report Bug</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

I was just looking for a way to get my GitHub user profile on my website, so I thought I'd share what I did so that others can easily add the profiles to their sites too as a card! As it stands, there are three styles (from left to right: minimal, dark and codify). There is only one size but since they are written in CSS, they can be fitted to one's needs. They are designed to showcase basic user data and act as a link to your GitHub! 

![profile-cards Screen Shot][product-screenshot]

### Built With

Built with CSS and JavaScript. 

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To use in your website, follow the examples below: 

```
<div class="profile-card github minimal" data-user="your-github-username"></div>
<div class="profile-card github dark" data-user="your-github-username"></div>
<div class="profile-card github codify" data-user="your-github-username"></div>  
```

<p align="right">(<a href="#top">back to top</a>)</p>


## Installation

Download the 'package' folder containing the necessary files and include them in your project. You will then need to link in the profile-cards.css and profile-cards.js files into your HTML: 

```
<link rel="stylesheet" href="profile-cards/profile-cards.css">
<script src="profile-cards/profile-cards.js" defer></script>
``` 

<p align="right">(<a href="#top">back to top</a>)</p>    


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Liam Kelly - [LinkedIn][linkedin-url]

Project Link: [https://github.com/kliam11/profile-cards](https://github.com/kliam11/profile-cards)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[license-shield]: https://camo.githubusercontent.com/111148992d0253f8d5e36b62087d48a9eabb1d7244b2b7316214f47d5c9a8781/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f6f74686e65696c647265772f426573742d524541444d452d54656d706c6174652e7376673f7374796c653d666f722d7468652d6261646765
[license-url]: https://github.com/kliam11/profile-cards/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/liamakelly
[product-screenshot]: example.png
