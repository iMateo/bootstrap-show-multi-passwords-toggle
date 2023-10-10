[![LICENSE](https://img.shields.io/badge/license-MIT-lightgrey.svg)](https://raw.githubusercontent.com/iMateo/bootstrap-show-multi-passwords-togglemaster/LICENSE)
[![GitHub Super-Linter](https://github.com/iMateo/bootstrap-show-multi-passwords-toggleworkflows/Lint%20Code%20Base/badge.svg)](https://github.com/marketplace/actions/super-linter)
[![GitHub Stars](https://img.shields.io/github/stars/iMateo/bootstrap-show-multi-passwords-toggle.svg?label=github%20stars)](https://github.com/iMateo/bootstrap-show-multi-passwords-toggle)
[![npm Version](https://img.shields.io/npm/v/bootstrap-show-password-toggle)](https://www.npmjs.com/package/bootstrap-show-password-toggle)
[![npm Downloads](https://img.shields.io/npm/dt/bootstrap-show-password-toggle.svg)](https://www.npmjs.com/package/bootstrap-show-password-toggle)

# Bootstrap Show Password Toggle

A show password as text toggle for Bootstrap forms

- Native-looking UI
- Vanilla JavaScript with no dependencies
- Base64 encoded SVG icons (no external images or fonts required)
- Graceful fallback for browsers with JavaScript disabled
- Works with Bootstrap 4 and 5
- Supports dark mode (Bootstrap 5 only)
- Only 1KB gzipped

![show password toggle](https://christianoliff.com/img/2020/show-password-toggle-anim.gif)

## Quick Start

- [Download the latest release](https://github.com/iMateo/bootstrap-show-multi-passwords-toggle)
- Clone the repo `git clone https://github.com/iMateo/bootstrap-show-multi-passwords-toggle.git`
- Install with [npm](https://www.npmjs.com/package/bootstrap-show-password-toggle) `npm install bootstrap-show-password-toggle`
- Install with [yarn](https://yarnpkg.com/package/bootstrap-show-password-toggle) `yarn add bootstrap-show-password-toggle`

## Usage

1. Include the `show-password-toggle.min.css` in your CSS

2. Wrap the password input in an `input-group` div as follows:

```html
<form id="auth">
  <div class="input-group">
    <input type="password" class="form-control rounded" required>
    <button type="button" class="d-none toggle-password"
      aria-label="Show password as plain text. Warning: this will display your password on the screen.">
    </button>
  </div>
</form>
<form id="register">
  <div class="input-group">
    <input type="password" class="form-control rounded" required>
    <button type="button" class="d-none toggle-password"
      aria-label="Show password as plain text. Warning: this will display your password on the screen.">
    </button>
  </div>
</form>
```

3. Load the `show-password-toggle.min.js` after the form

I highly recommend adding the attributes: `spellcheck="false"`, `autocorrect="off"` and `autocapitalize="off"` to the password input so that when the password is displayed in plain text the input is not auto-corrected, capitalized or spellchecked (to avoid red squiggly line underneath).

You should also add `name="current-password"` and `autocomplete="current-password"` to help browsers autocomplete the form.

## Demo

- [Bootstrap 5 Demo](https://coliff.github.io/bootstrap-show-password-toggle/tests/bootstrap5-sign-in/)
- [Bootstrap 4 Demo](https://coliff.github.io/bootstrap-show-password-toggle/tests/bootstrap4-sign-in/)

## Browser Support

Works well with all the browsers [supported by Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/browsers-devices/#supported-browsers)

## FAQS

Q. **Can I change the show password icon?**

A. Yes you can change the icon displayed by replacing the `.input-password[type="password"]` [Base64 encoded](https://yoksel.github.io/url-encoder/) background image. SVG is recommended.

## Known Issues

- If the browser autofills the password input then the user-agent will apply `background-image: none !important`.
- The password input requires the use of the `required` attribute. This is so the background-image is not displayed when the input is empty. (It'd be great if browsers supported the [:blank](https://developer.mozilla.org/en-US/docs/Web/CSS/:blank) pseudo-selector!)

## Credits and Thanks

- MDO and Bootstrap team for the [icons](https://icons.getbootstrap.com/icons/eye-slash/)
- Sam Dutton at Google for the idea and initial JavaScript from the '[Sign-in form Best Practices](https://web.dev/sign-in-form-best-practices/)' article
- [BrowserStack](https://www.browserstack.com/) for providing the infrastructure that allows us to test in real browsers
