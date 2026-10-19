# GoodRise Canada website

Public source for the English/Vietnamese GoodRise Canada partnership homepage.

**View the actual website:** https://www.goodrisecanada.com/

This is a clean, standalone copy of the marketing homepage. It contains no application history, owner/staff backend, database configuration, credentials, or customer records. The existing application repository remains separate and private.

## Run locally

No build or package installation is required. With Python 3 installed:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000/. Serve this directory at the website root because asset paths are root-relative.

## Contents

- `index.html`: homepage and sample customer email.
- `partnership.css`: responsive styles.
- `partnership.js`: English/Vietnamese language control, accessible software tabs, and image zoom.
- `goodrise-assets/partnership/`: supplied photographs, branding, and software examples.

## Website boundaries

The meeting invitation links to the existing live inquiry page on goodrisecanada.com. This standalone homepage does not collect or submit information itself. Software screenshots contain example data, not promised business results. The software-demo link points to the hosted demo; privacy and inquiry links point to the production website. No customer sign-up or owner/staff application is included here.

The live website is deployed through the separate application repository. Pushing to this public source repository does not deploy the application automatically.

Photographs and branding remain the property of their respective rights holders. Public source visibility does not grant permission to reuse photographs of the children or the GoodRise brand.
