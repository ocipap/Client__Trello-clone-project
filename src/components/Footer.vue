<template>
    <footer class="quiet">
        <div id="languege-picker"></div>
        <ul>
            <li><a href="#">Tour</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Apps</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Developers</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">Legal</a></li>
            <li><a href="#">Cookie</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Privacy</a></li>
        </ul>
        <p>
            <img class="atlassian-logo-small" src="@/assets/images/atlassian-logo-gray-small.svg" alt="" width="150"> &nbsp; © Copyright 2019. All rights reserved.
        </p>
    </footer>
</template>

<script>
    export default {
    
    }
</script>
<style scoped>
    footer.quiet {
        margin: 5.7rem 1rem;
    }
    
    footer.quiet>ul {
        text-align: center;
    }
    
    footer.quiet>ul li {
        display: inline-block;
        margin: 0 5px;
    }
    
    footer.quiet>ul li a {
        text-decoration: underline;
        color: #8993A4;
        font-size: 16px;
    }
    
    footer.quiet>p {
        text-align: center;
        margin: 8px 0;
        font-size: 16px;
    }
    
    footer.quiet>p>* {
        display: inline-block;
    }
    
    footer.quiet>p>img {
        vertical-align: sub;
    }
</style>
