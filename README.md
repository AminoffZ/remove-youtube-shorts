[![Static Badge](https://img.shields.io/badge/chrome-v0.1.1-blue?logo=googlechrome&logoColor=blue&labelColor=white&color=blue)](https://chrome.google.com/webstore/detail/remove-youtube-shorts/nbphaofmhmlcflappkbmlbflimanbhkg)

<img align="right" width="100" height="100" src="https://raw.githubusercontent.com/AminoffZ/remove-youtube-shorts/main/dist/images/icon256.png">

### PSA

There will probably not be any updates to the official [Chrome Web Store](https://chrome.google.com/webstore/detail/remove-youtube-shorts/nbphaofmhmlcflappkbmlbflimanbhkg) version of this plugin since Google keeps blocking them for: _Spam and Placement in the Store_ 🤔

# Remove YouTube Shorts

Extension to remove YouTube-recommended "Shorts" videos. The **Shorts** section on the homepage and channels still exists and works as normal.

Works on Chromium-based browsers.

<p align="center">
<img align="middle" width="640px" height="400px" src="https://raw.githubusercontent.com/AminoffZ/remove-youtube-shorts/main/images/screenshot.png">
</p>

# How is this better than existing solutions?

This extension works by injecting a CSS file when loading YouTube which means that the script is run only once per session and does not run any Javascript after that, making it more lightweight. The size is also more than 5 times smaller.

# How to install

[Detailed Version](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/)

Download the dist folder.
To load an unpacked extension in developer mode:

Go to the Extensions page by entering chrome://extensions in a new tab. (By design chrome:// URLs are not linkable.)

Alternatively, click on the Extensions menu puzzle button and select Manage Extensions at the bottom of the menu.
Or, click the Chrome menu, hover over More Tools, then select Extensions.
Enable Developer Mode by clicking the toggle switch next to Developer mode.

Click the Load unpacked button and select the extension directory.

![](https://wd.imgix.net/image/BhuKGJaIeLNPW9ehns59NfwqKxF2/BzVElZpUtNE4dueVPSp3.png?auto=format&w=439)  
Ta-da! The extension has been successfully installed. Because no extension icons were included in the manifest, a generic icon will be created for the extension.

# License

MIT License

Copyright (c) 2022 AminoffZ

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
