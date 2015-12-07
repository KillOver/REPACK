# FrontLab
free4lab new front

## 快速使用 Quick Start Use
### 引用在线资源 reference online resources

    # CSS
    <link rel="stylesheet" href="http://newfront.free4lab.com/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="http://newfront.free4lab.com/css/front.min.css">
    
    # JS
    <script src="http://newfront.free4lab.com/js/jquery/jquery.min.js"></script>
    <script src="http://newfront.free4lab.com/bootstrap/js/bootstrap.min.js"></script>
    <script src="http://newfront.free4lab.com/js/plugin/front.min.js"></script>
    
### 引用本地资源 reference local resources

Clone

    git clone https://github.com/free4lab/FrontLab.git
    
or

    Download Zip

then

    # CSS
    <link rel="stylesheet" href="[localPath]/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="[localPath]/css/front.min.css">
    
    # JS
    <script src="[localPath]/js/jquery/jquery.min.js"></script>
    <script src="[localPath]/bootstrap/js/bootstrap.min.js"></script>
    <script src="[localPath]/js/common/front.min.js"></script>

## 开发者安装 Developer Install (from git)

Install Node.js

Clone 

    git clone https://github.com/free4lab/FrontLab.git

Switch to develop branch

    git checkout -b develop origin/develop
    
Install Dependency

    npm install
    
Run WebServer

    gulp
    
Release

    gulp dist:build
    
Clean

    gulp clean