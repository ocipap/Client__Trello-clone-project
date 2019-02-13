<template>
  <div>
    <div class="global-header" :class="{'on': scrolled}">
      <div class="container">
        <div class="global-header-section mod-left">
          <router-link to="Home" class="header-logo">
            <img class="header-logo-img" src="@/assets/images/trello-logo-white.svg" alt="">
          </router-link>
        </div>
        <div class="global-header-section mod-right">
          <router-link v-if="isAuthenicated" class="gotoboard" :to="{name: 'BoardHome', params: {username: 'ocipap'}}">Go to Your Boards</router-link>
          <div class="option" v-else>
            <router-link class="login" to="/login">Log In</router-link>
            <router-link class="signup" to="/signup">Sign Up</router-link>
          </div>
        </div>
      </div>
    </div>
    <section id="hero">
      <div class="layout-two-col">
        <div class="hero-text">
          <h1>Trello lets you work more collaboratively and get more done.</h1>
          <p class="big">Trello’s boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible and rewarding way.</p>
          <p>
            <router-link to="Signup" class="button button-primary big">Sign Up – It’s Free!</router-link>
          </p>
        </div>
        <div class="heor-img">
          <img src="@/assets/images/hero-a.svg" alt="">
        </div>
      </div>
    </section>
    <section id="collaborate">
      <div class="layout-two-col ">
        <div class="layout-two-text">
          <h2>Work with any team</h2>
          <p>Whether it’s for work, a side project or even the next family vacation, Trello helps your team stay organized.
          </p>
          <p>
            <router-link to="Signup" class="button button-secondary">Start doing →</router-link>
          </p>
        </div>
        <div class="layout-two-image">
          <img src="@/assets/images/updated-layouts-board.png" alt="" width="766" height="565">
        </div>
      </div>
    </section>
    <section id="teams">
      <div class="layout-two-col">
        <div class="layout-two-image">
          <img src="@/assets/images/updated-layouts-mobile.png" alt="" width="618" height="565">
        </div>
        <div class="layout-two-text">
          <h2>Information at a glance</h2>
          <p>Dive into the details by adding comments, attachments, due dates, and more directly to Trello cards. Collaborate on projects from beginning to end.</p>
        </div>
      </div>
    </section>
    <section id="demo">
      <div class="container text-center">
        <div class="layout-centered">
          <div class="layout-centered-content">
            <h2>See how it works</h2>
            <p>Go from idea to action in seconds with Trello’s intuitively simple boards, lists, and cards.</p>
          </div>
        </div>
        <slick id="carousel" ref="slick" :options="slickOptions">
          <div class="item">
            <img src="@/assets/images/slide-1.png" alt="">
            <div class="caption">
              Create a board for any project, give it a name, and invite your team.
            </div>
          </div>
          <div class="item">
            <img src="@/assets/images/slide-2.png" alt="">
            <div class="caption">
              Add lists to create steps in a workflow that is right for you.
            </div>
          </div>
          <div class="item">
            <img src="@/assets/images/slide-3.png" alt="">
            <div class="caption">
              Create cards for tasks to complete or information you want to organize.
            </div>
          </div>
          <div class="item">
            <img src="@/assets/images/slide-4.png" alt="">
            <div class="caption">
              Click on a card to add details, due dates, checklists, comments, and more.
            </div>
          </div>
          <div class="item">
            <img src="@/assets/images/slide-5.png" alt="">
            <div class="caption">
              Move them across lists to show progress. Go from "To Do" to "Done" in no time!
            </div>
          </div>
        </slick>
      </div>
    </section>
    <section id="features">
      <div class="container text-center">
        <div class="layout-centered">
          <div class="layout-centered-content">
            <h2>Trello your way</h2>
            <p>Use Trello the way your team works best. We’ve got the flexibility &amp; features to fit any team’s style.
            </p>
          </div>
        </div>
        <div class="layout-three-col">
          <div>
            <div class="img">
              <img src="@/assets/images/updated-layouts-collab.png" alt="" width="270">
            </div>
            <h3>Work With Any Team</h3>
            <p class="small">It's easy to get your entire team up and running with Trello. We've collected all of the boards and tools you need to succeed.</p>
            <p class="cta">
              <a href="#" class="button button-secondary">Build Your Dream Team</a>
            </p>
          </div>
          <div>
            <div class="img">
              <img src="@/assets/images/updated-layouts-platform.png" alt="" width="270">
            </div>
            <h3>A Productivity Platform</h3>
            <p class="small">Integrate the apps your team already uses directly into your workflow. Power-Ups turn Trello boards into living applications to meet your team's unique business needs.</p>
            <p class="cta">
              <a href="#" class="button button-secondary">Power-Up Your Workflow</a>
            </p>
          </div>
          <div>
            <div class="img">
              <img src="@/assets/images/updated-layouts-sync.png" alt="" width="270">
            </div>
            <h3>Always In Sync</h3>
            <p class="small">No matter where you are, Trello stays in sync across all of your devices. Collaborate with your team anywhere, from sitting on the bus to sitting on the beach.</p>
            <p class="cta app-store">
              <a href="#">
                <img src="@/assets/images/btn-appstore-black.png" alt="">
              </a>
              <a href="#">
                <img src="@/assets/images/btn-playstore-black.png" alt="">
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
    <div class="bottom-gradient">
      <section id="work-smart">
        <div class="container text-center">
          <div class="layout-centered-content">
            <h2>Work smarter with Trello</h2>
            <p class="big">Companies of all shapes and sizes use Trello.</p>
          </div>
          <div class="logo-area">
            <img src="@/assets/images/logo-adobe.svg" alt="">
            <img src="@/assets/images/logo-kickstarter.svg" alt="">
            <img src="@/assets/images/logo-national-geographic.svg" alt="">
            <img src="@/assets/images/logo-google.svg" alt="">
            <img src="@/assets/images/logo-fender.svg" alt="">
          </div>
          <div class="layout-centered-content">
            <p>
              <router-link to="Business" class="button button-secondary">Find out how →</router-link>
            </p>
          </div>
        </div>
      </section>
      <section id="get-started">
        <div class="layout-centered text-center">
          <div class="layout-centered-content">
            <h2>Start Planning Today</h2>
            <p>Sign up and become one of the millions of people around the world using Trello to get more done.</p>
            <p>
              <router-link to="Signup" class="signup button button-primary">Get Started – It’s Free!</router-link>
            </p>
          </div>
        </div>
      </section>
      <main-footer></main-footer>
    </div>
  </div>
</template>

<script>
  import Slick from 'vue-slick'
  import MainFooter from '@/components/Footer.vue'
  import {
    mapGetters
  } from 'vuex';
  
  export default {
    components: {
      Slick,
      MainFooter
    },
    data() {
      return {
        slickOptions: {
          slidesToShow: 1,
          dots: true,
          speed: 500,
          fade: true,
          cssEase: 'linear',
          zIndex: 50
        },
        scrolled: false
      }
    },
    methods: {
      handleScroll() {
        this.scrolled = window.scrollY > 80;
      }
    },
    computed: {
      ...mapGetters([
        'isAuth'
      ]),
      isAuthenicated() {
        return this.isAuth
      }
    },
    created() {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  
  }
</script>

<style scoped>
  @import 'slick-carousel/slick/slick.css';
  
  h1,
  h2,
  h3 {
    color: #172B4D;
  }
  
  .container {
    width: 100%;
    max-width: 1098px;
    margin: auto;
    box-sizing: border-box;
  }
  
  .text-center {
    text-align: center;
  }
  
  .layout-centered {
    word-break: break-word;
  }
  
  .layout-centered-content {
    margin: 0 auto;
    max-width: 650px;
  }
  
  .layout-centered-content>* {
    margin: 1.7rem 0;
  }
  
  .layout-two-col {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1200px;
    width: 100%;
  }
  
  .layout-two-text>* {
    margin: 1.2rem 0;
  }
  
  .layout-three-col {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1200px;
    width: 100%;
  }
  
  .layout-three-col>div {
    padding: 0 .5rem;
    padding-bottom: 71px;
    position: relative;
  }
  
  section {
    text-align: center;
  }
  
  section h1 {
    font-size: 2.45rem;
    font-weight: bolder;
  }
  
  section h2 {
    font-size: 1.89rem;
    font-weight: bolder;
  }
  
  p {
    color: #42526E;
  }
  
  p.big {
    font-size: 1.2rem;
  }
  
  .button {
    display: inline-block;
    font-size: 0.9rem;
    border-radius: 6px;
    padding: 0.7rem 1.75rem;
    font-weight: 600;
  }
  
  .button.button-primary {
    background: #36B37E;
    box-shadow: 0 3px #006644;
    color: #fff;
  }
  
  .button.button-secondary {
    background: #EBECF0;
    box-shadow: 0 3px #C1C7D0;
    color: #172B4D;
  }
  
  .button.big {
    font-size: 1.12rem;
    font-weight: bolder;
  }
  
  .button.small {
    font-size: 1.12rem;
  }
  
  .global-header {
    background: rgba(155, 94, 223, 0);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0);
    transition: background 1s ease 0s, box-shadow 1s ease 0s;
    position: fixed;
    height: 2.1rem;
    padding: 0.84rem;
    width: 100%;
    z-index: 1001;
  }
  
  .global-header.on {
    background: #0079bf !important;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
  
  .global-header>.container {
    max-width: 1200px;
  }
  
  .global-header::after {
    content: "";
    clear: both;
    display: table;
  }
  
  .global-header-section.mod-left {
    float: left;
  }
  
  .header-logo {
    display: block;
    height: 2.1rem;
  }
  
  .header-logo>img {
    height: 100%;
    width: auto;
  }
  
  .global-header-section.mod-right {
    float: right;
  }
  
  .global-header .gotoboard {
    display: block;
    color: #fff;
    background: hsla(0, 0%, 0%, 0.15);
    box-shadow: 0 2px 0 hsla(0, 0%, 0%, 0.3);
    font-size: .7rem;
    font-weight: 600;
    padding: .7rem 1.12rem .56rem;
    border-radius: 6px;
    line-height: .7rem;
    margin-right: 1.4rem;
  }
  
  .global-header .option {
    margin-right: 1.4rem;
  }
  
  .global-header .option>a {
    display: inline-block;
    font-size: .84rem;
    font-weight: bold;
    padding: .63rem 1rem .5rem;
    line-height: 1rem;
  }
  
  .global-header .login {
    color: #fff;
  }
  
  .global-header .signup {
    background: #fff;
    color: #0079bf;
    border-radius: 4px;
    box-shadow: 0 2px #c1c7d0;
  }
  
  section#hero {
    padding-top: 3.8rem;
    background: linear-gradient(135deg, #0079BF 0%, #5067C5 100%);
  }
  
  .hero-text>* {
    margin: 1.2rem 0;
  }
  
  section#hero h1 {
    margin-top: 2.8rem;
    color: #fff;
    line-height: 3rem;
  }
  
  section#hero p {
    color: rgba(255, 255, 255, 0.9);
  }
  
  section#collaborate h2 {
    margin-top: 0;
  }
  
  section#demo #carousel {
    width: 100%;
    max-width: 880px;
    margin: 0 auto;
    cursor: pointer;
  }
  
  section#features .layout-three-col .img {
    margin-top: 1rem;
  }
  
  section#features .layout-three-col .img>img {
    height: auto;
    max-width: 100%;
    margin: 1rem auto;
  }
  
  section#features .layout-three-col h3 {
    font-size: 1.15rem;
    margin: .7rem;
    margin-top: 0.5rem;
  }
  
  section#features .layout-three-col p {
    font-size: 0.84rem;
  }
  
  section#features .layout-three-col>div p.cta a.button {
    padding: 0.5rem 0.6rem;
    box-shadow: 0 1px 0 #A5ACB0;
    color: hsl(0, 0%, 30%);
    background: #e2e4e6;
    font-size: 0.875rem;
  }
  
  section#features .layout-three-col>div p.cta {
    position: absolute;
    bottom: 0;
    left: .5rem;
    right: .5rem;
  }
  
  section#features .layout-three-col>div p.cta a.button:hover {
    background: linear-gradient(to bottom, #C4C9CC 0%, #B6BBBF 100%);
  }
  
  section#features .layout-three-col>div p.app-store>a {
    display: inline-block;
  }
  
  section#features p.app-store a img {
    height: 46px;
    margin: 0;
    width: auto;
    display: inline;
    opacity: .8;
    box-shadow: 0 1px 0 #A5ACB0;
    border-radius: 6px;
    vertical-align: middle;
  }
  
  section#features p.app-store a img:hover {
    opacity: 1;
  }
  
  .bottom-gradient {
    background: linear-gradient(to bottom, #fff 0%, #f7ecff 46%, #d2ecff 74%, #fff 100%);
  }
  
  #work-smart .container {
    background: linear-gradient(180deg, #42548E 0%, #6B668C 100%);
    border-radius: 12px;
    color: white;
    padding: 30px;
  }
  
  #work-smart .container h2 {
    color: #fff;
  }
  
  #work-smart .container p {
    color: #fff;
  }
  
  #work-smart .container .logo-area {
    display: flex;
    justify-content: space-around;
    margin: 2.1rem 0;
  }
  
  #get-started {
    background-image: url(../assets/images/trellians-2x.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 1332px 250px;
  }
  
  @media screen and (min-width: 650px) {
    section {
      padding: 1.4rem 0.7rem;
    }
  }
  
  @media screen and (min-width: 900px) {
    .layout-two-col {
      align-items: center;
      flex-direction: row;
    }
    .layout-three-col {
      flex-direction: row;
    }
    .layout-three-col>div {
      width: 32%;
    }
    .layout-two-col>div {
      text-align: left;
    }
    section {
      padding: 2.8rem 0.7rem;
    }
    section img {
      max-width: initial;
    }
    .hero-text {
      padding-right: 11%;
    }
  }
</style>

<style>
  section#demo #carousel .slick-list {
    border-radius: 12px;
    overflow: hidden;
  }
  
  section#demo #carousel .slick-slide {
    float: left;
    height: 100%;
    min-height: 1px;
  }
  
  section#demo #carousel button.slick-arrow {
    position: absolute;
    top: 50%;
    width: 120px;
    height: 120px;
    margin: -40px 0 0 0;
    white-space: nowrap;
    overflow: hidden;
    text-indent: 100%;
    padding: 0;
    box-shadow: none;
    border: none;
    cursor: pointer;
  }
  
  section#demo #carousel button.slick-arrow:focus {
    outline: none;
  }
  
  section#demo #carousel button.slick-arrow.slick-prev {
    background: url(../assets/images/arrow-prev-white.svg);
    left: -140px;
  }
  
  section#demo #carousel button.slick-arrow.slick-next {
    background: url(../assets/images/arrow-next-white.svg);
    right: -140px;
  }
  
  section#demo #carousel button.slick-arrow.slick-prev:hover {
    background: url(../assets/images/arrow-prev-blue.svg);
  }
  
  section#demo #carousel button.slick-arrow.slick-next:hover {
    background: url(../assets/images/arrow-next-blue.svg);
  }
  
  section#demo #carousel .item {
    display: block !important;
  }
  
  section#demo #carousel .item img {
    width: 100%;
  }
  
  section#demo #carousel .item .caption {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(48, 54, 76, 0.8);
    font-size: 18px;
    color: white;
    padding: 40px 40px 65px;
    font-weight: bolder;
  }
  
  section#demo #carousel .slick-dots {
    list-style: none;
    margin: 0;
    position: absolute;
    bottom: 20px;
    padding: 0;
    width: 100%;
    z-index: 1000;
  }
  
  section#demo #carousel .slick-dots li {
    display: inline-block;
    margin: 0 7px;
    width: 15px;
    height: 20px;
  }
  
  section#demo #carousel .slick-dots li button {
    color: rgba(0, 0, 0, 0);
    margin: 0;
    padding: 0;
    border-radius: 100%;
    width: 10px;
    height: 10px;
    background: #7082A9;
    border: none;
    line-height: 10px;
  }
  
  section#demo #carousel .slick-dots li.slick-active button {
    width: 15px;
    height: 15px;
    background: #00C2E0;
    line-height: 15px;
  }
</style>
