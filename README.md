Emailing Starter Kit
======================

Starter kit to create, inline, translate and send responsive emails using Zurk ink

> [Zurb Ink v2](http://foundation.zurb.com/emails.html) with gulp, sass, inky, browserSync, image compression

Table of Contents
-----------------
1. [Installation](#installation)
1. [Configuration](#configuration)
1. [Integration](#integration)
1. [Usage](#usage)
1. [Todo & Extend](#todo--extend)
1. [Docs & Links](#docs--links)

Installation
------------

Just clone the repo and install the necessary node modules:

```shell
$ git clone https://github.com/quentinneyraud/mailing-starter-kit.git
$ cd mailing-starter-kit
$ npm install                   # Install Node modules
```

Configuration
-------------

All configuration files are in config folder

##### email

- Subjects and lists of emails indexed by languages

##### emailService

- Configuration used by Email API
- `debugEmail` to test email sending

##### project

- Source and dist folders
- `translate` to translate emails

##### translations

- `lang` you want to translate
- <*string to replace*> : <*translation*>

Integration
-----------

Write your email like an HTML page with id, class and a separate style.css
Use Zurb Ink to make it responsive (Docs & Links)

Usage
-----

- `npm run build` : inline CSS (& translate)
- `npm run send:dev` : send each email to `debugEmail`
- `npm run send:prod` : send all emails
- `npm run watch` : coming soon

Todo & extend
-------------

#### Todo
- [ ] watch task with browser-sync

#### Extend
To use a different email API :

- Create `MyCustomEmailService` in EmailService folder
- Set `emailTransporter: MyCustomEmailService` in `project` config file

Docs & Links
------------

- Templates in `templates_examples`
- [Zurb Ink doc](http://foundation.zurb.com/emails/docs.html)
- [Building Responsive Email Templates with Ink](https://scotch.io/tutorials/building-responsive-email-templates-with-ink)
- [CSS Support Guide for Email Clients](https://www.campaignmonitor.com/css/)
- [Zurb Ink Snippets - ST3](https://packagecontrol.io/packages/Zurb%20Ink%20Snippets)
