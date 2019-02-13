<template>
    <div class="user-cover">
        <div class="container">
            <div class="user-error">
                <slot name="error"></slot>
            </div>
            <div class="user-header">
                <slot name="header"></slot>
                <div class="another-link">
                    or
                    <slot name="header-link"></slot>
                </div>
            </div>
            <div class="user-body">
                <slot name="body"></slot>
            </div>
            <div class="user-footer">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>
    .user-cover {
        padding: 4rem .7rem;
    }
    
    .user-cover .container {
        max-width: 430px;
        width: 100%;
        margin: 0 auto;
    }
    
    .user-cover .user-error .error {
        display: inline-block;
        background: #eb5a46;
        border-radius: 3px;
        font-weight: 100;
        color: #fff;
        padding: .56rem .7rem;
        margin: .7rem 0rem;
        line-height: 1.26rem;
        font-size: 0.7rem;
    }
    
    .user-cover .user-error .error a {
        color: #fff;
        text-decoration: underline;
    }
    
    .user-cover .user-header h1 {
        font-size: 38px;
        font-weight: bolder;
        color: #333;
        margin: 0;
    }
    
    .user-cover .user-header .another-link {
        font-size: 18px;
        color: hsl(0, 0%, 60%);
    }
    
    .user-cover .user-header .another-link a {
        color: #298FCA;
        text-decoration: underline;
    }
    
    .user-cover .user-header .another-link a:hover {
        color: #0C3953;
    }
    
    .user-cover .user-body {
        padding: 1.19rem 0;
    }
    
    .user-cover .user-body .form-group {
        padding-bottom: 1.4rem;
    }
    
    .user-cover .user-body .form-group .label {
        margin-bottom: 0.35rem;
    }
    
    .user-cover .user-body .form-group .label .desc {
        color: hsl(0, 0%, 60%);
    }
    
    .user-cover .user-body .form-group .input[type=text],
    .user-cover .user-body .form-group .input[type=password] {
        max-width: 430px;
        background: #EDEFF0;
        border-radius: 4px;
        border: 1px solid #cdd2d4;
        box-sizing: border-box;
        padding: 0.5rem;
        width: 100%;
        font-size: 1rem;
    }
    
    .user-cover .user-body .form-group .input[type=text]:focus,
    .user-cover .user-body .form-group .input[type=password]:focus {
        border-color: #A5ACB0;
        outline: none;
        box-shadow: 0 0 6px #CDD2D4;
    }
    
    .user-cover .user-body .form-group .input[type=text].warning,
    .user-cover .user-body .form-group .input[type=password].warning {
        background: #FBEDEB;
        border: 1px solid #EC9488;
    }
    
    .user-cover .user-body .form-group .input[type=text].warning:focus,
    .user-cover .user-body .form-group .input[type=password].warning:focus {
        box-shadow: 0 0 6px #EC9488;
    }
    
    .user-cover .user-body .button {
        max-width: 430px;
        width: 100%;
        border-radius: 3px;
        background: #e2e4e6;
        box-shadow: none;
        color: hsl(0, 0%, 55%);
        cursor: default;
        font-weight: bolder;
        padding: 0.7rem;
        border: none;
        font-size: 1rem;
    }
    
    .user-cover .user-body .button.button-primary {
        background: #61BD4F;
        color: #fff;
        box-shadow: 0 2px 0 #3F6F21;
        cursor: pointer;
    }
    
    .user-cover .user-body .button.button-primary:hover {
        background: #5AAC44;
    }
    
    .user-cover .user-footer p {
        color: hsl(0, 0%, 60%);
    }
    
    .user-cover .user-footer p.small {
        font-size: 0.7rem;
        line-height: 1.68rem;
    }
    
    .user-cover .user-footer p>a {
        color: #298FCA;
        text-decoration: underline;
    }
</style>
